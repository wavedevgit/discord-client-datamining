import { readFile } from '../utils/fs.js';

export default async function chunk(chunkId: string) {
    return await readFile('./build/chunks/' + chunkId + '.js', false);
}
