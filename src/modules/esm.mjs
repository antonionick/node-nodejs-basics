import * as os from 'os';
import * as path from 'path';
import * as http from 'http';
import * as  fs from 'fs';
import './files/c.js';
import { getFilename, getDirname } from '../utils.js';

console.log(`Release ${os.release()}`);
console.log(`Version ${os.version()}`);
console.log(`Path segment separator is "${path.sep}"`);

const dirName = getDirname(import.meta.url);

console.log(`Path to current file is ${getFilename(import.meta.url)}`);
console.log(`Path to current directory is ${dirName}`);

const random = Math.random();
const filename = random > .5 ? 'a.json' : 'b.json';
const filePath = path.resolve(dirName, 'files', filename);

export const unknownObject = fs.readFileSync(filePath).toString();

console.log(unknownObject);

export const myServer = http.createServer((_, res) => {
    res.end('Request accepted');
});

const PORT = 3000;
myServer.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
    console.log('To terminate it, use Ctrl+C combination');
});
