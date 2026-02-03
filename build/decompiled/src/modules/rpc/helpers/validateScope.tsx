// modules/rpc/helpers/validateScope.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.RPC_SCOPE_CONFIG;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rpc/helpers/validateScope.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun98228: for (var _fun98228_ip = 0;;) switch (_fun98228_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var _closure2_slot0 = var2;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun98228_ip = 188;
                    continue _fun98228
                }
            case 21:
                var3 = typeof var1;
                var0 = 'string';
                if (!(var0 !== var3)) {
                    _fun98228_ip = 176;
                    continue _fun98228
                }
            case 35:
                var0 = 'object';
                if (!(var0 === var3)) {
                    _fun98228_ip = 172;
                    continue _fun98228
                }
            case 46:
                var0 = _closure1_slot0;
                var3 = var0.ANY;
                var8 = var1[var3];
                var0 = var0.ALL;
                var6 = var1[var0];
                var3 = global;
                var5 = var3.Array;
                var0 = var5.isArray;
                var0 = var0.bind(var5)(var8);
                var5 = !var0;
                if (var5) {
                    _fun98228_ip = 118;
                    continue _fun98228
                }
            case 97:
                var7 = var8.some;
                var0 = function(arg0) { // Environment: var4
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var7.bind(var8)(var0);
                var5 = !var0;
            case 118:
                var0 = !var5;
                if (!var5) {
                    _fun98228_ip = 170;
                    continue _fun98228
                }
            case 124:
                var5 = var3.Array;
                var3 = var5.isArray;
                var3 = var3.bind(var5)(var6);
                var3 = !var3;
                if (var3) {
                    _fun98228_ip = 167;
                    continue _fun98228
                }
            case 146:
                var5 = var6.every;
                var4 = function(arg0) { // Environment: var4
                    var2 = _closure2_slot0;
                    var1 = var2.includes;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var5.bind(var6)(var4);
                var3 = !var4;
            case 167:
                var0 = !var3;
            case 170:
                return var0;
            case 172:
                var0 = false;
                return var0;
            case 176:
                var0 = var2.includes;
                var0 = var0.bind(var2)(var1);
                return var0;
            case 188:
                var0 = true;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3347, 2]);