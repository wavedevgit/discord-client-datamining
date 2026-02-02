// modules/markup/MarkupTextRule.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = /^[\s\S]+?(?=[^0-9A-Za-z\s\u00c0-\uffff]|\n\n| {2,}\n|\w+:\S|[0-9]+\.|$)/;
    var3 = {};
    var4 = 0;
    var8 = var6[var4];
    var7 = metroImportDefault;
    var0 = undefined;
    var7 = var7.bind(var0)(var8);
    var7 = var7.defaultRules;
    var10 = var7.text;
    var11 = var3;
    var7 = copyDataProperties(var11, var10);
    var4 = var6[var4];
    var7 = var5.bind(var0)(var4);
    var4 = var7.anyScopeRegex;
    var7 = var4.bind(var7)(var1);
    var4 = 'match';
    var3[var4] = var7;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/markup/MarkupTextRule.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.textRegexp = var1;
    var1 = function(arg0) { // Environment: var1
        var0 = global;
        var2 = var0.RegExp;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '^[\\s\\S]+?(?=';
        var1 = arg0;
        var0 = '|[^0-9A-Za-z\\s\\u00ff-\\uffff]|\\n\\n| {2,}\\n|\\w+:\\S|[0-9]+\\.|$)';
        var6 = var4.bind(var3)(var1, var0);
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var7 = var1;
        var0 = new var7[var2](var6, var5);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.textMarkupPatternWithExclusions = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3107, 2]);