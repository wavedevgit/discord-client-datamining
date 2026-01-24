import { Program } from 'acorn';
import * as walk from 'acorn-walk';
import { parse } from 'meriyah';

export default function getEndpoints(code) {
    try {
        const endpoints = {};
        const ast: Program = parse(code, {
            ranges: true,
            next: true,
        }) as Program;
        walk.simple(ast, {
            CallExpression(node) {
                if (
                    // @ts-expect-error
                    node.callee?.object?.name !== 'Object' &&
                    // @ts-expect-error
                    node.callee?.property?.name !== 'freeze'
                )
                    return;
                // @ts-expect-error
                const value = node.arguments[0]?.properties;
                const props = value.map((e) => e.key.name);
                if (
                    !props.includes('USER') &&
                    !props.includes('GUILD_JOIN') &&
                    !props.includes('LOGIN')
                )
                    return;
                // this is really bad method to do it
                // TODO: use safer method
                let endpointsTemp;
                try {
                    endpointsTemp = eval(
                        `(()=>(${code.slice(node.arguments[0].start, node.arguments[0].end).replaceAll('window.GLOBAL_ENV.WEBAPP_ENDPOINT', '"//canary.discord.com"')}))()`,
                    );
                } catch (err) {
                    console.log(
                        'error',
                        err,
                        `(()=>(${code.slice(node.arguments[0].start, node.arguments[0].end).replaceAll('window.GLOBAL_ENV.WEBAPP_ENDPOINT', '"//canary.discord.com"')}))()`,
                    );
                }
                const params = [];
                for (let i = 0; i < 11; i++) params.push(':param');

                for (const [key, value] of Object.entries(endpointsTemp)) {
                    try {
                        endpoints[key] =
                            typeof value === 'function'
                                ? value(...params)
                                : value;
                    } catch {
                        console.log(
                            'error at endpoints',
                            key,
                            value.toString(),
                        );
                    }
                }
            },
        });
        return endpoints;
    } catch (e) {
        console.log(e);
        return {};
    }
}
