import { Program } from 'acorn';
import * as walk from 'acorn-walk';
import { parse } from 'meriyah';

// check if a key is a number or not
function isNumber(key: string) {
    const char = String(key).charCodeAt(0);
    const char0 = '0'.charCodeAt(0);
    const char9 = '9'.charCodeAt(0);
    return key !== undefined && char >= char0 && char <= char9;
}
// removes block statment brackets
function formatCode(code) {
    code = code.split('');
    code.pop();
    code.shift();
    return code.join('');
}

export default function getChunksByCode(
    code: string,
    moduleId: string,
    moduleFileName: string,
): Record<string, string> {
    try { const ast: Program = parse(code, {
        next: true,
        ranges: true,
    }) as Program;
    const result = {};
    try {
        walk.simple(ast, {
            CallExpression(node) {
                // find (this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push calls
                if (
                    node.callee.type === 'MemberExpression' &&
                    node.callee?.object?.type === 'AssignmentExpression' &&
                    [
                        'webpackChunkdiscord_app',
                        'webpackChunkdiscord_developers',
                    ].includes(
                        // @ts-expect-error
                        node.callee?.object?.right?.left?.property?.name,
                    ) &&
                    // @ts-expect-error
                    node.callee?.property?.name === 'push' &&
                    // @ts-expect-error
                    node.arguments?.[0]?.elements?.[1]?.type ===
                        'ObjectExpression'
                ) {
                    // @ts-expect-error
                    for (const prop of node?.arguments?.[0]?.elements?.[1]
                        ?.properties || []) {
                        const key = prop.key?.value;
                        if (!isNumber(key)) break;
                        const chunk = prop.value.body;
                        const chunkCode = code.slice(chunk.start, chunk.end);
                        const codeFormatted = formatCode(chunkCode);
                        result[key] =
                            `/** chunk id: ${key} params = (module,exports,require) **/\n` +
                            codeFormatted;
                    }
                }
            },
        });
    } catch (err) {
        console.log('!!!! error', err, moduleId, moduleFileName);
    }
    return result; } catch { return [] } 
}
