// modules/markup/MarkupHeadingRule.tsx
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
    var1 = {};
    var0 = 0;
    var7 = var5[var0];
    var6 = metroImportDefault;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var6 = var6.defaultRules;
    var9 = var6.heading;
    var10 = var1;
    var6 = copyDataProperties(var10, var9);
    var7 = [' ', '#'];
    var6 = 'requiredFirstCharacters';
    var1[var6] = var7;
    var6 = function(arg0, arg1, arg2) { // Original name: match, environment: var3
        _fun44098: for (var _fun44098_ip = 0;;) switch (_fun44098_ip) {
            case 0:
                var5 = arg1;
                var4 = arg2;
                var1 = var5.allowHeading;
                var2 = null;
                var0 = null;
                if (!var1) {
                    _fun44098_ip = 117;
                    continue _fun44098
                }
            case 19:
                if (!(var2 != var4)) {
                    _fun44098_ip = 58;
                    continue _fun44098
                }
            case 23:
                var1 = '';
                if (!(var1 !== var4)) {
                    _fun44098_ip = 58;
                    continue _fun44098
                }
            case 31:
                var3 = var4.match;
                var1 = _closure1_slot2;
                var1 = var3.bind(var4)(var1);
                var1 = var2 != var1;
                var0 = null;
                if (!var1) {
                    _fun44098_ip = 117;
                    continue _fun44098
                }
            case 58:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var1 = var3[var1];
                var3 = undefined;
                var6 = var2.bind(var3)(var1);
                var2 = var6.anyScopeRegex;
                var1 = /^ *(#{1,3})(?:\s+)((?![#]+)[^\n]+?)#*\s*(?:\n|$)/;
                var2 = var2.bind(var6)(var1);
                var1 = arg0;
                var0 = var2.bind(var3)(var1, var5, var4);
            case 117:
                return var0;
        }
    };
    var3 = 'match';
    var1[var3] = var6;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/markup/MarkupHeadingRule.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3105, 2]);