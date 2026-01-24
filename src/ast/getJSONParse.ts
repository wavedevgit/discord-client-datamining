import { Program } from 'acorn';
import * as walk from 'acorn-walk';
import { parse } from 'meriyah';

export default function getJSONParse(code: string) {
    const ast: Program = parse(code, {
        next: true,
        sourceType: 'script',
    }) as Program;
    let res;
    walk.simple(ast, {
        CallExpression(node) {
            if (
                // @ts-expect-error
                node.callee?.object?.name !== 'JSON' &&
                // @ts-expect-error
                node.callee?.property?.name !== 'parse'
            )
                return;
            // @ts-expect-error
            res = JSON.parse(node.arguments[0]?.value || '');
        },
    });
    return res;
}
