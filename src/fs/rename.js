import * as fs from 'fs/promises';
import * as  path from 'path';
import { FILES_FOLDER_NAME } from './constants.js';
import { getDirname, checkIfFileOrFolderExist } from './utils.js';

const FILE_NAME_TO_RENAME = 'wrongFilename.txt';
const RENAMED_FILE_NAME = 'properFilename.md';

const rename = async () => {
    const dirname = getDirname();

    const fileToRenamePath = path.join(dirname, FILES_FOLDER_NAME, FILE_NAME_TO_RENAME);
    const renamedFilePath = path.join(dirname, FILES_FOLDER_NAME, RENAMED_FILE_NAME);

    const doesFileToRenameExist = await checkIfFileOrFolderExist(fileToRenamePath);
    const doesRenamedFileExist = await checkIfFileOrFolderExist(renamedFilePath);

    if (!doesFileToRenameExist || doesRenamedFileExist) {
        throw new Error(FS_ERROR_MESSAGE);
    }

    await fs.rename(fileToRenamePath, renamedFilePath);
};

await rename();