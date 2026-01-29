// modules/custom_status/native/CustomStatusUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 4;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/custom_status/native/CustomStatusUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun57020: for (var _fun57020_ip = 0;;) switch (_fun57020_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.location;
                var8 = var0.analyticsLocations;
                var1 = var0.prompt;
                var4 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 0;
                var3 = var7[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
                var4 = var5.pushLazy;
                var6 = _closure1_slot0;
                var2 = 2;
                var2 = var7[var2];
                var10 = var6.bind(var0)(var2);
                var2 = 1;
                var3 = var7[var2];
                var2 = var7.paths;
                var3 = var10.bind(var0)(var3, var2);
                var2 = {};
                var2.location = var9;
                var2.analyticsLocations = var8;
                var2.prompt = var1;
                var1 = 3;
                var1 = var7[var1];
                var6 = var6.bind(var0)(var1);
                var1 = var6.isAndroid;
                var6 = var1.bind(var6)();
                var1 = undefined;
                if (!var6) {
                    _fun57020_ip = 141;
                    continue _fun57020
                }
            case 127:
                var6 = {};
                var7 = 'modal';
                var6.presentation = var7;
                var1 = var6;
            case 141:
                var15 = var5;
                var14 = var3;
                var13 = var2;
                var12 = undefined;
                var11 = var1;
                var1 = var15[var4](var14, var13, var12, var11, var10);
                return var0;
        }
    };
    var2.openEditCustomStatusModal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4518, 6939, 1307, 478, 2]);