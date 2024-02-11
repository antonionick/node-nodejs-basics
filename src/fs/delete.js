import * as  fs from 'fs/promises';
import * as  path from 'path';
import { FILES_FOLDER_NAME, FS_ERROR_MESSAGE } from '../constants.js';
import { getDirname, checkIfFileOrFolderExist } from '../utils.js';

const FILE_TO_REMOVE_NAME = 'fileToRemove.txt';

const remove = async () => {
    const dirname = getDirname(import.meta.url);
    const fileToRemovePath = path.join(dirname, FILES_FOLDER_NAME, FILE_TO_REMOVE_NAME);

    const doesFileExist = await checkIfFileOrFolderExist(fileToRemovePath);
    if (!doesFileExist) {
        throw new Error(FS_ERROR_MESSAGE);
    }

    await fs.rm(fileToRemovePath);
};

await remove();