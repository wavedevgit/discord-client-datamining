// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 0;
    var4 = var3[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var1 = function arg0() {
        _fun72993: for (var _fun72993_ip = 0;;) switch (_fun72993_ip) {
            case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 1;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.usePreventRemoveContext;
                var3 = var3.bind(var4)();
                var5 = var3.preventedRoutes;
                var3 = global;
                var4 = var3.Object;
                var3 = var4.keys;
                var4 = var3.bind(var4)(var5);
                var3 = 0;
                var7 = var4[var3];
                var _closure2_slot0 = var7;
                var3 = arg0;
                var3 = var3[var7];
                var4 = null;
                var5 = var4 == var3;
                var6 = undefined;
                if (var5) {
                    _fun72993_ip = 109;
                    continue _fun72993
                }
            case 89:
                var5 = var3.options;
                var8 = var4 == var5;
                var6 = undefined;
                if (var8) {
                    _fun72993_ip = 109;
                    continue _fun72993
                }
            case 103:
                var6 = var5.headerBackButtonMenuEnabled;
            case 109:
                var _closure2_slot1 = var6;
                var8 = var4 == var3;
                var5 = undefined;
                if (var8) {
                    _fun72993_ip = 142;
                    continue _fun72993
                }
            case 122:
                var3 = var3.route;
                var4 = var4 == var3;
                var5 = undefined;
                if (var4) {
                    _fun72993_ip = 142;
                    continue _fun72993
                }
            case 137:
                var5 = var3.name;
            case 142:
                var _closure2_slot2 = var5;
                var4 = _closure1_slot2;
                var3 = var4.useEffect;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function() { // Environment: var1
                    _fun72994: for (var _fun72994_ip = 0;;) switch (_fun72994_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun72994_ip = 81;
                                continue _fun72994
                            }
                        case 13:
                            var1 = _closure2_slot1;
                            if (!var1) {
                                _fun72994_ip = 81;
                                continue _fun72994
                            }
                        case 20:
                            var5 = _closure2_slot2;
                            var0 = global;
                            var1 = var0.HermesInternal;
                            var4 = var1.concat;
                            var10 = 'The screen ';
                            var8 = " uses 'usePreventRemove' hook alongside 'headerBackButtonMenuEnabled: true', which is not supported. \n\nConsider removing 'headerBackButtonMenuEnabled: true' from ";
                            var6 = ' screen to get rid of this error.';
                            var9 = var5;
                            var7 = var5;
                            var2 = var10[var4](var9, var8, var7, var6, var5);
                            var1 = var0.console;
                            var0 = var1.error;
                            var0 = var0.bind(var1)(var2);
                        case 81:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1470]);