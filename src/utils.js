import * as path from 'path';
import * as  fs from 'fs/promises';
import { fileURLToPath } from 'node:url';

export const getFilename = metaUrl => fileURLToPath(metaUrl);

export const getDirname = metaUrl => path.dirname(getFilename(metaUrl));

export const checkIfFileOrFolderExist = async pathToCheck => {
	try {
		await fs.access(pathToCheck, fs.constants.F_OK);
		return true;
	} catch (err) {
		return false;
	}
};