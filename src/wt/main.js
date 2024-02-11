import * as os from 'node:os';
import * as url from 'node:url';
import * as  path from 'node:path';
import { Worker } from 'node:worker_threads';

const START_INCREMENTAL_NUMBER = 10;
const cpusCount = os.cpus().length;

const filePath = url.fileURLToPath(import.meta.url);
const dirname = path.dirname(filePath);
const workerFilePath = path.join(dirname, 'worker.js');

const performCalculations = async () => {
    const workers = [];

    for (let i = 0; i < cpusCount; i++) {
        const workerPromise = new Promise((resolve) => {
            const numberToSend = START_INCREMENTAL_NUMBER + i;
            const worker = new Worker(workerFilePath, { workerData: numberToSend });

            let calculationResult;
            worker.on('message', value => calculationResult = value);
            worker.on('exit', () => resolve({
                status: 'resolved',
                data: calculationResult,
            }));
            worker.on('error', () => resolve({
                status: 'error',
                data: null,
            }));
        });

        workers.push(workerPromise);
    }

    const results = await Promise.all(workers);
    console.table(results);
};

await performCalculations();