import { Node, Program } from 'acorn';
import * as walk from 'acorn-walk';
import { parseScript } from 'meriyah';

function getModules(code: string): {
    js: Record<string, string>;
    css: Record<string, string>;
} {
    const ast: Program = parseScript(code) as unknown as Program;

    const result = { js: {}, css: {} };

    const add = (
        objectNode: any,
        type: 'js' | 'css',
    ) => {
        for (const prop of objectNode.properties) {
            result[type][prop.key.value] = prop.value.value;
        }
    };

    walk.simple(ast, {
        BinaryExpression(node: any) {
            if (node.left?.type !== 'BinaryExpression') return;

            const binaryExpr = node.left;

            if (
                typeof binaryExpr.left?.value !== 'string' ||
                binaryExpr.right?.type !== 'MemberExpression' ||
                binaryExpr.right?.object?.type !== 'ObjectExpression' ||
                !['.js', '.css'].includes(node.right?.value)
            ) return;

            let type: 'js' | 'css';

            const run = () => {
                add(binaryExpr.right.object, type);
            };

            switch (node.right.value) {
                case '.js': {
                    type = 'js';
                    run();
                    return;
                }
                case '.css': {
                    type = 'css';
                    run();
                    return;
                }
            }
        },

        ConditionalExpression(node: any) {
            if (
                node.consequent?.type !== 'BinaryExpression' ||
                node.test?.type !== 'BinaryExpression' ||
                node.consequent?.right?.type !== 'Literal'
            )
                return;

            if (
                typeof node.consequent.right.value !== 'string' ||
                !(
                    node.consequent.right.value.endsWith('.js') ||
                    node.consequent.right.value.endsWith('.css')
                )
            )
                return;

            if (
                node.test.left?.type !== 'Literal' ||
                typeof node.test.left.value !== 'string'
            )
                return;
          const id = String(node.test.left?.value);
          let filePath = node.consequent?.right?.value;
          if (!filePath.startsWith(".") && !filePath.startsWith(id)) filePath = "." + filePath
          if (!filePath.startsWith(id)) filePath = id + filePath
          result[filePath.endsWith('.js') ? 'js' : 'css'][id] =
            filePath;
        },
    });

    return result;
}

export default getModules;
