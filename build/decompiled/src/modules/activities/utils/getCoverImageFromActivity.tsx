// modules/activities/utils/getCoverImageFromActivity.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.ACTIVITY_INVITE_COVER_IMAGE_SIZE;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/getCoverImageFromActivity.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun92476: for (var _fun92476_ip = 0;;) switch (_fun92476_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var1 = var3 == var2;
                var0 = null;
                if (var1) {
                    _fun92476_ip = 119;
                    continue _fun92476
                }
            case 14:
                var1 = var2.assets;
                var1 = var3 == var1;
                var0 = null;
                if (var1) {
                    _fun92476_ip = 119;
                    continue _fun92476
                }
            case 29:
                var1 = var2.assets;
                var1 = var1.large_image;
                var1 = var3 == var1;
                var0 = null;
                if (var1) {
                    _fun92476_ip = 119;
                    continue _fun92476
                }
            case 50:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 1;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.getAssetImage;
                var2 = var2.assets;
                var3 = var2.large_image;
                var1 = _closure1_slot2;
                var2 = new Array(2);
                var2[0] = var1;
                var2[1] = var1;
                var1 = arg1;
                var0 = var4.bind(var5)(var1, var3, var2);
            case 119:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3448, 5649, 2]);