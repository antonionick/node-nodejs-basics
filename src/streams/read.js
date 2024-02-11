import * as  path from 'node:path';
import * as fs from 'node:fs/promises';
import { getDirname } from '../utils.js';
import { FILES_FOLDER_NAME } from '../constants.js';

const FILE_TO_READ_NAME = 'fileToRead.txt';

const read = async () => {
    const dirname = getDirname(import.meta.url);
    const readFilePath = path.join(dirname, FILES_FOLDER_NAME, FILE_TO_READ_NAME);

    const fileHandler = await fs.open(readFilePath, 'r');

    const readStream = fileHandler.createReadStream();

    readStream.pipe(process.stdout);

    await new Promise((resolve, reject) => {
        readStream.on('close', resolve);
        readStream.on('error', reject);
    })
};

await read();