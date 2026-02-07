// modules/wishlists/CollectiblesWishlistUtils.tsx
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
    var3 = 'modules/wishlists/CollectiblesWishlistUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun87805: for (var _fun87805_ip = 0;;) switch (_fun87805_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = var3.isPremiumCollectiblesProduct;
                var0 = var0.bind(var3)(var2);
                var0 = !var0;
                if (!var0) {
                    _fun87805_ip = 85;
                    continue _fun87805
                }
            case 44:
                var2 = var2.type;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.EXTERNAL_SKU;
                var0 = var2 !== var1;
            case 85:
                return var0;
        }
    };
    var2.isWishlistableCollectiblesProduct = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4599, 3494, 2]);