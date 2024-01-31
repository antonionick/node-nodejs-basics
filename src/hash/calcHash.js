import * as fs from 'node:fs';
import * as path from 'node:path';
import { getDirname } from '../utils.js';
import { FILES_FOLDER_NAME } from '../constants.js';

const { createHash } = await import('node:crypto');

const FILE_NAME = 'fileToCalculateHashFor.txt';

const calculateHash = async () => {
    const dirname = getDirname(import.meta.url);
    const pathToFile = path.resolve(dirname, FILES_FOLDER_NAME, FILE_NAME);
    const input = fs.createReadStream(pathToFile);

    const hash = createHash('SHA256');
    input.pipe(hash).setEncoding('hex').pipe(process.stdout);
};

await calculateHash();