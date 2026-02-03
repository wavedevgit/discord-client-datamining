// modules/app_dms/useIsAppDM.tsx
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_dms/useIsAppDM.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var3 = var4.bind(var2)(var3);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun62199: for (var _fun62199_ip = 0;;) switch (_fun62199_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = null;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun62199_ip = 30;
                        continue _fun62199
                    }
                case 16:
                    var4 = _closure2_slot0;
                    var3 = var4.isDM;
                    var0 = var3.bind(var4)();
                case 30:
                    if (!var0) {
                        _fun62199_ip = 55;
                        continue _fun62199
                    }
                case 33:
                    var3 = _closure2_slot0;
                    var3 = var3.recipients;
                    var4 = var3.length;
                    var3 = 1;
                    var0 = var3 === var4;
                case 55:
                    if (!var0) {
                        _fun62199_ip = 113;
                        continue _fun62199
                    }
                case 58:
                    var4 = _closure1_slot2;
                    var3 = var4.getUser;
                    var1 = _closure2_slot0;
                    var5 = var1.recipients;
                    var1 = 0;
                    var1 = var5[var1];
                    var1 = var3.bind(var4)(var1);
                    var3 = var2 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun62199_ip = 107;
                        continue _fun62199
                    }
                case 101:
                    var2 = var1.bot;
                case 107:
                    var1 = true;
                    var0 = var1 === var2;
                case 113:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1613, 632, 2]);