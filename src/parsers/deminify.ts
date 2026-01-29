import js_beautify from 'js-beautify';

export const deminify = (
    code: string[],
    exportDefault: boolean,
    path: string,
    depMap: number[],
) => {
    // this shit is based off nexpid themlings deminifier, credits to nexpid!
    const nativeArguments = [
        'global',
        'require',
        'metroImportDefault',
        'metroImportAll',
        'module',
        'exports',
        'dependencyMap',
    ];

    const parsed = [];
    let depth = 0;
    const strings = new Map();

    const variableReplacer = (_, id) => {
        return `var${id}`;
    };
    const argumentReplacer = (_, id) => {
        if (depth === 0) return nativeArguments[id] || `native${id}`;
        return `arg${id}`;
    };
    const functionNameReplacer = (_, args, name) => {
        return `function ${name}(${args}) {`;
    };
    const nullStringReplacer = (_, __, index) => {
        return strings.get(index);
    };
    const brokenRefReplacer = (_, varIdentifier, propIdentifier) => {
        // skip calls
        if (propIdentifier.includes('(') && propIdentifier.includes(')'))
            return _;

        return `${varIdentifier}[${JSON.stringify(propIdentifier)}]`;
    };
    const simplifyRefReplacer = (_, varIdentifier, propIdentifier) => {
        if (propIdentifier.match(/^[a-zA-Z_$][\w$]*$/))
            return `${varIdentifier}.${propIdentifier}`;
        return _;
    };

    const patterns = {
        variable: /\br(\d+)\b/g,
        argument: /\ba(\d+)\b/g,
        functionName:
            /function*? \((.*?)\) { \/\/ Original name: (.+?), environment: \w+$/g,
        // this will be used to detect depth
        functionOpen: /function\*? ?\((.*?)\) {/,
        functionClose: /^\s+};/,
        // this idea is actually from nexpid, and it's a cool trick to not replace contents of strings and only touch code.
        string: /(["'`])(?:\\.|[^\\])*?\1/g,

        // eslint-disable-next-line no-control-regex
        nullString: /(["'`])\x00(\d+)\x00\1/g,
        // this is to fix varN.5
        brokenRef: /(var\d+)\.((?![a-zA-Z_$][\w$]*$).+)/g,
        // this will convert varN["example"] to varN.example if possible
        simplifyRef: /(var\d+)\['(.+?)']/g,
    };

    for (let i = 0; i < code.length; i++) {
        let line: string | string[] = code[i].split('');
        let addSemiCollon = false;
        if (line.slice(-1)[0] === ';') {
            line.pop();
            addSemiCollon = true;
        }
        line = line.join('');

        if (patterns.functionOpen.test(line)) depth += 1;
        if (patterns.functionClose.test(line)) depth -= 1;
        line.replace(patterns.string, (match, quot) => {
            const index = strings.size + 1;
            strings.set(index, match);
            return `${quot}\x00${index}\x00${quot}`;
        });

        parsed.push(
            line
                .replace(patterns.variable, variableReplacer)
                .replace(patterns.argument, argumentReplacer)
                .replace(patterns.functionName, functionNameReplacer)
                .replace(patterns.nullString, nullStringReplacer)
                .replace(patterns.brokenRef, brokenRefReplacer)
                .replace(patterns.simplifyRef, simplifyRefReplacer) +
                (addSemiCollon ? ';' : ''),
        );
    }

    let final =
        '// ' +
        path +
        '\n' +
        (exportDefault
            ? '// @ts-nocheck\nexport default '
            : 'module.exports =');

    final +=
        '(function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {\n';

    final += parsed.join('\n');

    final += `})(undefined,undefined,undefined,undefined,undefined,undefined,${JSON.stringify(depMap)});`;

    return ((final) => {
        try {
            return js_beautify.js(final);
        } catch {
            return final;
        }
    })(final);
};
