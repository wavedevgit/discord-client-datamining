import { Build } from '../types.js';
import { readFile } from '../utils/fs.js';

function findAllClassesNames(code: string) {
    let stripped = '';
    let depth = 0;
    for (const char of code) {
        if (char === '{') depth++;
        if (depth === 0) stripped += char;
        if (char === '}') depth = 0;
    }
    return [
        ...new Set(
            [...stripped.matchAll(/\.([\w\-_]+)/g)].map((item) => item[1]),
        ),
    ];
}

export default async function getClassesNames(build: Build): Promise<void> {
    for (const [moduleId, path] of Object.entries(build.modules.css)) {
        const code = await readFile(`./build/assets/${path}.css`, false);
        build.classes[moduleId] = findAllClassesNames(
            code.replaceAll(`/*# sourceMappingURL=${path}.css.map*/`, ''),
        );
    }
}
