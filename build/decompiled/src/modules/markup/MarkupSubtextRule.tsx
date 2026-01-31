// modules/markup/MarkupSubtextRule.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = /\n$/;
    var _closure1_slot2 = var0;
    var0 = /^ *-# +((?!(-#)+)[^\n]+?) *(?:\n|$)/;
    var _closure1_slot3 = var0;
    var1 = {};
    var0 = 0;
    var7 = var5[var0];
    var6 = metroImportDefault;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var6 = var6.defaultRules;
    var6 = var6.heading;
    var6 = var6.order;
    var1.order = var6;
    var6 = ['-'];
    var1.requiredFirstCharacters = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: match, environment: var3
        _fun44105: for (var _fun44105_ip = 0;;) switch (_fun44105_ip) {
            case 0:
                var5 = arg2;
                var0 = null;
                if (!(var0 != var5)) {
                    _fun44105_ip = 44;
                    continue _fun44105
                }
            case 9:
                var1 = '';
                if (!(var1 !== var5)) {
                    _fun44105_ip = 44;
                    continue _fun44105
                }
            case 17:
                var2 = var5.match;
                var1 = _closure1_slot2;
                var1 = var2.bind(var5)(var1);
                var1 = var0 != var1;
                var0 = null;
                if (!var1) {
                    _fun44105_ip = 96;
                    continue _fun44105
                }
            case 44:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 0;
                var2 = var4[var2];
                var4 = undefined;
                var3 = var3.bind(var4)(var2);
                var2 = var3.anyScopeRegex;
                var1 = _closure1_slot3;
                var3 = var2.bind(var3)(var1);
                var2 = arg0;
                var1 = arg1;
                var0 = var3.bind(var4)(var2, var1, var5);
            case 96:
                return var0;
        }
    };
    var1.match = var6;
    var3 = function(arg0, arg1, arg2) { // Original name: parse, environment: var3
        var0 = {};
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 0;
        var2 = var2[var1];
        var1 = undefined;
        var5 = var3.bind(var1)(var2);
        var4 = var5.parseInline;
        var2 = arg0;
        var1 = 1;
        var2 = var2[var1];
        var1 = var2.trim;
        var3 = var1.bind(var2)();
        var2 = arg1;
        var1 = arg2;
        var1 = var4.bind(var5)(var2, var3, var1);
        var0.content = var1;
        return var0;
    };
    var1.parse = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/markup/MarkupSubtextRule.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3105, 2]);