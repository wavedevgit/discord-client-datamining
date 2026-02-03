// modules/activities/utils/isOnPlayStation.tsx
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
    var3 = var3.ActivityGamePlatforms;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/isOnPlayStation.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62423: for (var _fun62423_ip = 0;;) switch (_fun62423_ip) {
            case 0:
                var3 = arg0;
                var4 = null;
                var0 = var4 == var3;
                var5 = undefined;
                if (var0) {
                    _fun62423_ip = 20;
                    continue _fun62423
                }
            case 14:
                var5 = var3.platform;
            case 20:
                var0 = _closure1_slot0;
                var0 = var0.PS4;
                var0 = var5 === var0;
                if (var0) {
                    _fun62423_ip = 69;
                    continue _fun62423
                }
            case 40:
                var4 = var4 == var3;
                var2 = undefined;
                if (var4) {
                    _fun62423_ip = 55;
                    continue _fun62423
                }
            case 49:
                var2 = var3.platform;
            case 55:
                var1 = _closure1_slot0;
                var1 = var1.PS5;
                var0 = var2 === var1;
            case 69:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);