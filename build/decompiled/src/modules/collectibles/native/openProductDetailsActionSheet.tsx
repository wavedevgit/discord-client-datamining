// modules/collectibles/native/openProductDetailsActionSheet.tsx
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
    var0 = 5;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/openProductDetailsActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 'Shop Product Preview';
    var2.PRODUCT_DETAILS_ACTION_SHEET_KEY = var3;
    var1 = function(arg0) { // Original name: openProductDetailsActionSheet, environment: var1
        _fun87776: for (var _fun87776_ip = 0;;) switch (_fun87776_ip) {
            case 0:
                var1 = arg0;
                var7 = var1.product;
                var4 = var1.initialVariantIndex;
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun87776_ip = 23;
                    continue _fun87776
                }
            case 21:
                var4 = 0;
            case 23:
                var1 = var1.analyticsLocations;
                var5 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 0;
                var2 = var2[var8];
                var5 = var5.bind(var0)(var2);
                var2 = var5.getIsVariantProduct;
                var2 = var2.bind(var5)(var7);
                var6 = 0;
                if (!var2) {
                    _fun87776_ip = 90;
                    continue _fun87776
                }
            case 67:
                var5 = var7.variants;
                var5 = var5.length;
                var5 = var4 < var5;
                var6 = 0;
                if (!var5) {
                    _fun87776_ip = 90;
                    continue _fun87776
                }
            case 87:
                var6 = var4;
            case 90:
                if (var2) {
                    _fun87776_ip = 101;
                    continue _fun87776
                }
            case 93:
                var9 = var7.skuId;
                _fun87776_ip = 117;
                continue _fun87776;
            case 101:
                var2 = var7.variants;
                var2 = var2[var6];
                var9 = var2.skuId;
            case 117:
                var8 = _closure1_slot0;
                var2 = _closure1_slot2;
                var4 = 1;
                var4 = var2[var4];
                var5 = var8.bind(var0)(var4);
                var4 = var5.productDetailsOpened;
                var4 = var4.bind(var5)(var9);
                var4 = _closure1_slot1;
                var3 = 2;
                var3 = var2[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.openLazy;
                var3 = 4;
                var3 = var2[var3];
                var8 = var8.bind(var0)(var3);
                var3 = 3;
                var3 = var2[var3];
                var2 = var2.paths;
                var3 = var8.bind(var0)(var3, var2);
                var2 = {};
                var2.product = var7;
                var2.initialVariantIndex = var6;
                var2.analyticsLocations = var1;
                var1 = 'Shop Product Preview';
                var1 = var4.bind(var5)(var3, var1, var2);
                return var0;
        }
    };
    var2.openProductDetailsActionSheet = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4576, 4560, 3237, 11287, 1307, 2]);