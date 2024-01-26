import * as fs from 'fs/promises';
import * as  path from 'path';
import { FILES_FOLDER_NAME, FS_ERROR_MESSAGE } from './constants.js';
import { getDirname, checkIfFileOrFolderExist } from './utils.js';

const FILE_TO_READ_NAME = 'fileToRead.txt';

const read = async () => {
    const dirname = getDirname();
    const fileToReadPath = path.join(dirname, FILES_FOLDER_NAME, FILE_TO_READ_NAME);
    const doesFileExist = await checkIfFileOrFolderExist(fileToReadPath);

    if (!doesFileExist) {
        throw new Error(FS_ERROR_MESSAGE);
    }

    const fileContent = await fs.readFile(fileToReadPath);
    console.log(fileContent.toString());
};

await read();