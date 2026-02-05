// modules/user_profile/hooks/useShouldShowMutualInfo.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/useShouldShowMutualInfo.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62067: for (var _fun62067_ip = 0;;) switch (_fun62067_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 1;
                var3 = var5[var2];
                var2 = undefined;
                var7 = var4.bind(var2)(var3);
                var6 = var7.useStateFromStores;
                var3 = _closure1_slot3;
                var4 = new Array(1);
                var4[0] = var3;
                var3 = function() { // Environment: var3
                    var1 = _closure1_slot3;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var6.bind(var7)(var4, var3);
                var4 = _closure1_slot1;
                var1 = 2;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var1 = var1.bind(var2)(var0);
                var4 = null;
                var4 = var4 == var3;
                if (var4) {
                    _fun62067_ip = 93;
                    continue _fun62067
                }
            case 88:
                var2 = var3.id;
            case 93:
                var0 = var0.id;
                var0 = var2 !== var0;
                if (!var0) {
                    _fun62067_ip = 108;
                    continue _fun62067
                }
            case 105:
                var0 = !var1;
            case 108:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1621, 566, 7774, 2]);