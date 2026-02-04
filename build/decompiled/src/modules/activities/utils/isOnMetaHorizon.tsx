// modules/activities/utils/isOnMetaHorizon.tsx
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
    var3 = var3.META_PRESENCE_APPLICATION_ID;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityGamePlatforms;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/isOnMetaHorizon.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun62635: for (var _fun62635_ip = 0;;) switch (_fun62635_ip) {
            case 0:
                var4 = arg0;
                var5 = null;
                var0 = var5 == var4;
                var1 = undefined;
                if (var0) {
                    _fun62635_ip = 20;
                    continue _fun62635
                }
            case 14:
                var1 = var4.application_id;
            case 20:
                var0 = _closure1_slot0;
                var0 = var1 === var0;
                if (!var0) {
                    _fun62635_ip = 98;
                    continue _fun62635
                }
            case 34:
                var1 = var5 == var4;
                var6 = undefined;
                if (var1) {
                    _fun62635_ip = 49;
                    continue _fun62635
                }
            case 43:
                var6 = var4.platform;
            case 49:
                var1 = _closure1_slot1;
                var1 = var1.ANDROID;
                var1 = var6 === var1;
                if (var1) {
                    _fun62635_ip = 95;
                    continue _fun62635
                }
            case 66:
                var5 = var5 == var4;
                var3 = undefined;
                if (var5) {
                    _fun62635_ip = 81;
                    continue _fun62635
                }
            case 75:
                var3 = var4.platform;
            case 81:
                var2 = _closure1_slot1;
                var2 = var2.IOS;
                var1 = var3 === var2;
            case 95:
                var0 = var1;
            case 98:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3457, 660, 2]);