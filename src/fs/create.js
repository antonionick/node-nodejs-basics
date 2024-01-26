import * as path from 'path';
import * as fs from 'fs/promises';
import { getDirname } from './utils.js';

const FILE_NAME_TO_CREATE = 'fresh.txt';
const FILE_CONTENT = 'I am fresh and young';

const create = async () => {
    const dirname = getDirname()
    const filePath = path.join(dirname, 'files', FILE_NAME_TO_CREATE);
    const doesExist = await doesFileExist(filePath);

    if (doesExist) {
        throw new Error('FS operation failed');
    }

    await fs.writeFile(filePath, FILE_CONTENT)
};

const doesFileExist = async filePath => {
    try {
        const result = await fs.access(filePath, fs.constants.F_OK);
        return true;
    } catch (err) {
        return false;
    }
};

await create();