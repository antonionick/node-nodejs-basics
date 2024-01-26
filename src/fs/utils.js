import * as path from 'path';
import * as  fs from 'fs/promises';
import { fileURLToPath } from 'node:url';

export const getDirname = () => {
	const fileName = fileURLToPath(import.meta.url);
	return path.dirname(fileName);
};

export const checkIfFileOrFolderExist = async pathToCheck => {
	try {
		await fs.access(pathToCheck, fs.constants.F_OK);
		return true;
	} catch (err) {
		return false;
	}
};