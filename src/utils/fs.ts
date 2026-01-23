import fs from 'fs/promises';

async function readFile<T>(path: string, json: boolean): Promise<T | any> {
    const content = await fs.readFile(path, 'utf-8');
    return json ? JSON.parse(content) : content;
}
async function writeFile(path: string, content: any) {
    await fs.writeFile(
        path,
        typeof content === 'object'
            ? JSON.stringify(content, null, 4)
            : content,
        'utf-8',
    );
}

export { readFile, writeFile };
