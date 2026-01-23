import { Node, Program } from 'acorn';
import * as walk from 'acorn-walk';
import { parse } from 'meriyah';

function getModules(code): {
    js: Record<string, string>;
    css: Record<string, string>;
} {
    const ast: Program = parse(code, {
        next: true,
        sourceType: 'script',
    }) as Program;

    const result = { js: {}, css: {} };
    const add = (node: Node, type: 'js' | 'css') => {
        // @ts-expect-error
        walk.simple(node.expression.right.body, {
            ObjectExpression(node) {
                for (const prop of node.properties) {
                    // @ts-expect-error
                    result[type][prop.key.value] = prop.value.value;
                }
            },
        });
    };
    walk.simple(ast, {
        ExpressionStatement(node) {
            // js function
            if (
                // @ts-expect-error
                (node.expression?.left?.object?.name !==
                    '__webpack_require__' &&
                    // @ts-expect-error
                    node.expression?.right?.type !== 'FunctionExpression') ||
                // @ts-expect-error
                node.expression?.right?.type !== 'ArrowFunctionExpression'
            )
                return;
            let type;

            // @ts-expect-error
            switch (node?.expression?.right?.body?.right?.value) {
                case '.js': {
                    type = 'js';
                    add(node, type);
                    return;
                }
                case '.css': {
                    type = 'css';
                    add(node, type);
                    return;
                }
            }
        },
    });
    return result;
}

export default getModules;
