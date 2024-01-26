import * as path from 'path';
import * as fs from 'fs/promises';
import { FILES_FOLDER_NAME } from './constants.js';
import { getDirname, checkIfFileOrFolderExist } from './utils.js';

const FILE_NAME_TO_CREATE = 'fresh.txt';
const FILE_CONTENT = 'I am fresh and young';

const create = async () => {
    const dirname = getDirname()
    const filePath = path.join(dirname, FILES_FOLDER_NAME, FILE_NAME_TO_CREATE);
    const doesExist = await checkIfFileOrFolderExist(filePath);

    if (doesExist) {
        throw new Error('FS operation failed');
    }

    await fs.writeFile(filePath, FILE_CONTENT)
};

await create();