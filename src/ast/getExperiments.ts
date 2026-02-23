import type {
    ArrayExpression,
    Literal,
    ObjectExpression,
    Property,
    UnaryExpression,
} from 'acorn';
import * as acorn from 'acorn';
import * as walk from 'acorn-walk';

import { ApexExperiment, Experiment, Treatment } from '../types.js';

const parseArray = (node: ArrayExpression): Treatment[] => {
    const array: Treatment[] = [];
    for (const element of node.elements.filter((x) => x !== null)) {
        array.push(parseValue(element) as Treatment);
    }

    return array;
};

const parseObject = (node: ObjectExpression) => {
    const object: Record<string, any> = {};
    for (const prop of node.properties as Property[]) {
        // skip to not explode
        // @ts-expect-error
        if (prop.type === 'SpreadElement') continue;
        // @ts-expect-error
        const name = prop.key.name || prop.key.value;
        if (!name) {
            continue;
        }
        object[name] = parseValue(prop.value);
    }
    return object;
};

const parseUnaryExpression = (node: UnaryExpression): boolean | number => {
    const { value } = node.argument as Literal;
    const isNotBool = node.operator === '-';

    if (!value) {
        return value === 0;
    }

    if (isNotBool) {
        return Number(`${node.operator}${value}`);
    }

    return value === 0;
};

const parseValue = (node: acorn.Expression | acorn.SpreadElement) => {
    switch (node?.type) {
        case 'Literal':
            return node.value;
        case 'ArrayExpression':
            return parseArray(node);
        case 'ObjectExpression':
            return parseObject(node);
        case 'UnaryExpression':
            return parseUnaryExpression(node);
        default:
            return null;
    }
};

export function getExperiments(code) {
    const ast = acorn.parse(code, {
        ecmaVersion: 'latest',
        allowReturnOutsideFunction: true,
    });

    const experiments: (ApexExperiment | Experiment)[] = [];
    const getRequiredKeys = (type: 'apex' | 'normal') =>
        type === 'apex'
            ? ['name', 'kind', 'defaultConfig', 'variations']
            : ['kind', 'id', 'label', 'treatments'];

    const apexRequiredKeys = getRequiredKeys('apex');
    const normalRequiredKeys = getRequiredKeys('normal');

    walk.simple(ast, {
        CallExpression(node) {
            if (node.arguments[0]?.type !== 'ObjectExpression') return;
            const props = node.arguments[0].properties;
            const keys = props.map(
                (prop) =>
                    prop.type === 'Property' &&
                    prop.key.type === 'Identifier' &&
                    prop.key?.name,
            );

            if (
                apexRequiredKeys.every((key) => keys.includes(key)) ||
                normalRequiredKeys.every((key) => keys.includes(key))
            ) {
                experiments.push(
                    parseValue(node.arguments[0]) as
                        | Experiment
                        | ApexExperiment,
                );
            }
        },
    });
    return experiments;
}
