import * as  path from 'path';
import * as  fs from 'fs/promises';
import { getDirname, checkIfFileOrFolderExist } from './utils.js';

const FOLDER_NAME = 'files';
const COPY_FOLDER_NAME = `${FOLDER_NAME}_copy`;

const copy = async () => {
    const dirname = getDirname();

    const folderToCopyPath = path.join(dirname, FOLDER_NAME);
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
