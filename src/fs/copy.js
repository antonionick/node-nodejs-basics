import * as  path from 'path';
import * as  fs from 'fs/promises';
import { FILES_FOLDER_NAME } from './constants.js';
import { getDirname, checkIfFileOrFolderExist } from './utils.js';

const COPY_FOLDER_NAME = `${FILES_FOLDER_NAME}_copy`;

const copy = async () => {
    const dirname = getDirname();

    const folderToCopyPath = path.join(dirname, FILES_FOLDER_NAME);
    const copyFolderPath = path.join(dirname, COPY_FOLDER_NAME);

    const doesFolderToCopyExist = await checkIfFileOrFolderExist(folderToCopyPath);
    const doesCopyFolderExist = await checkIfFileOrFolderExist(copyFolderPath);

    if (!doesFolderToCopyExist || doesCopyFolderExist) {
        throw new Error('FS operation failed');
    }

    await fs.mkdir(copyFolderPath);

    const files = await fs.readdir(folderToCopyPath);

    const operations = files.map(file => {
        const fileToCopyPath = path.join(folderToCopyPath, file);
        const copyFilePath = path.join(copyFolderPath, file);

        return fs.copyFile(fileToCopyPath, copyFilePath);
    });

    await Promise.all(operations);
};

await copy();
