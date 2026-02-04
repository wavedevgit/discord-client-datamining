// modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx
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
    var3 = var3.useWindowDimensions;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BANNER_ASPECT_RATIO;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/hooks/native/useUserProfileBannerHeight.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun59718: for (var _fun59718_ip = 0;;) switch (_fun59718_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot0;
                var1 = undefined;
                var1 = var2.bind(var1)();
                var4 = var1.width;
                var1 = null;
                var3 = var4;
                if (!(var1 != var5)) {
                    _fun59718_ip = 49;
                    continue _fun59718
                }
            case 30:
                var1 = global;
                var2 = var1.Math;
                var1 = var2.min;
                var3 = var1.bind(var2)(var4, var5);
            case 49:
                var1 = global;
                var2 = var1.Math;
                var1 = var2.round;
                var0 = _closure1_slot1;
                var0 = var3 / var0;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 6963, 2]);