import * as path from 'path';
import { fileURLToPath } from 'node:url';

export const getDirname = () => {
	const fileName = fileURLToPath(import.meta.url);
    return path.dirname(fileName);
}