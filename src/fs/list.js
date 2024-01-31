import * as path from 'path';
import * as fs from 'fs/promises';
import { FILES_FOLDER_NAME, FS_ERROR_MESSAGE } from '../constants.js';
import { getDirname, checkIfFileOrFolderExist } from '../utils.js';

const list = async () => {
    const dirname = getDirname(import.meta.url);
    const folderPath = path.join(dirname, FILES_FOLDER_NAME);
    const doesFolderExist = await checkIfFileOrFolderExist(folderPath);

    if (!doesFolderExist) {
        throw new Error(FS_ERROR_MESSAGE);
    }

    const list = await fs.readdir(folderPath);
    console.table(list);
};

await list();