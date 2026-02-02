// modules/pomelo/native/useUserProfileBannerBackgroundColor.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/native/useUserProfileBannerBackgroundColor.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun80903: for (var _fun80903_ip = 0;;) switch (_fun80903_ip) {
            case 0:
                var7 = arg0;
                var3 = arg1;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var0 = 0;
                var2 = var8[var0];
                var1 = undefined;
                var4 = var5.bind(var1)(var2);
                var2 = var4.memoizedImageSource;
                var6 = var2.bind(var4)(var7);
                var2 = 1;
                var2 = var8[var2];
                var4 = var5.bind(var1)(var2);
                var2 = var4.rgb2int;
                var0 = var8[var0];
                var5 = var5.bind(var1)(var0);
                var0 = var5.useDominantColorFromImage;
                var0 = var0.bind(var5)(var7, var6);
                var0 = var2.bind(var4)(var0);
                var2 = null;
                var4 = var2 == var3;
                if (var4) {
                    _fun80903_ip = 100;
                    continue _fun80903
                }
            case 94:
                var1 = var3.primaryColor;
            case 100:
                if (!(var2 != var1)) {
                    _fun80903_ip = 107;
                    continue _fun80903
                }
            case 104:
                var0 = var1;
            case 107:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5702, 668, 2]);