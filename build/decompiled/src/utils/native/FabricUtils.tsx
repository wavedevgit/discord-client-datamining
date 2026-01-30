// utils/native/FabricUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var3 = true;
    var1.value = var3;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = global;
    var1 = var0.RN$Bridgeless;
    var0 = 1;
    var6 = var5[var0];
    var5 = require;
    var0 = undefined;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/native/FabricUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function() { // Original name: isFabric, environment: var4
        _fun35033: for (var _fun35033_ip = 0;;) switch (_fun35033_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 0;
                var0 = var0[var5];
                var4 = undefined;
                var1 = var1.bind(var4)(var0);
                var0 = null;
                var3 = var0 == var1;
                var1 = undefined;
                if (var3) {
                    _fun35033_ip = 62;
                    continue _fun35033
                }
            case 35:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var3 = var3.bind(var4)(var2);
                var2 = var3.isFabric;
                var1 = var2.bind(var3)();
            case 62:
                var0 = var0 != var1;
                if (!var0) {
                    _fun35033_ip = 72;
                    continue _fun35033
                }
            case 69:
                var0 = var1;
            case 72:
                return var0;
        }
    };
    var2.isFabric = var4;
    var1 = var3 === var1;
    var2.isBridgeless = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3871, 2]);