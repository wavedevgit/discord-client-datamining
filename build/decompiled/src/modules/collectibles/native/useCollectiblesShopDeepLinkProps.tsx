// modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = {};
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/useCollectiblesShopDeepLinkProps.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        var1 = arg0;
        var4 = var1.categories;
        var _closure2_slot0 = var4;
        var5 = var1.products;
        var _closure2_slot1 = var5;
        var6 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 3;
        var2 = var3[var2];
        var3 = undefined;
        var8 = var6.bind(var3)(var2);
        var7 = var8.useStateFromStoresObject;
        var2 = _closure1_slot3;
        var6 = new Array(2);
        var6[0] = var2;
        var2 = _closure1_slot4;
        var6[1] = var2;
        var2 = function() { // Environment: var0
            _fun88068: for (var _fun88068_ip = 0;;) switch (_fun88068_ip) {
                case 0:
                    var1 = _closure1_slot4;
                    var6 = var1.initialProductSkuId;
                    var _closure3_slot0 = var6;
                    var2 = _closure1_slot3;
                    var1 = var2.getProduct;
                    var5 = var1.bind(var2)(var6);
                    var3 = null;
                    var7 = var3 != var5;
                    var9 = 0;
                    var2 = var6;
                    var1 = 0;
                    if (!var7) {
                        _fun88068_ip = 189;
                        continue _fun88068
                    }
                case 53:
                    var7 = var5.variantGroupStoreListingId;
                    var7 = var3 != var7;
                    var2 = var6;
                    var1 = 0;
                    if (!var7) {
                        _fun88068_ip = 189;
                        continue _fun88068
                    }
                case 71:
                    var8 = _closure1_slot3;
                    var7 = var8.getProductByStoreListingId;
                    var5 = var5.variantGroupStoreListingId;
                    var10 = var7.bind(var8)(var5);
                    var5 = var3 != var10;
                    if (!var5) {
                        _fun88068_ip = 132;
                        continue _fun88068
                    }
                case 99:
                    var11 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var7 = 4;
                    var8 = var8[var7];
                    var7 = undefined;
                    var8 = var11.bind(var7)(var8);
                    var7 = var8.getIsVariantProduct;
                    var5 = var7.bind(var8)(var10);
                case 132:
                    var2 = var6;
                    var1 = 0;
                    if (!var5) {
                        _fun88068_ip = 189;
                        continue _fun88068
                    }
                case 140:
                    var2 = var10.skuId;
                    var7 = global;
                    var8 = var7.Math;
                    var7 = var8.max;
                    var11 = var10.variants;
                    var10 = var11.findIndex;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.skuId;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var10.bind(var11)(var0);
                    var1 = var7.bind(var8)(var9, var0);
                case 189:
                    var0 = {};
                    var5 = _closure1_slot3;
                    var4 = var5.getCategoryForProduct;
                    var4 = var4.bind(var5)(var6);
                    var5 = var3 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun88068_ip = 221;
                        continue _fun88068
                    }
                case 215:
                    var3 = var4.skuId;
                case 221:
                    var0.initialCategorySkuId = var3;
                    var0.initialBaseProductSkuId = var2;
                    var0.initialVariantIndex = var1;
                    return var0;
            }
        };
        var2 = var7.bind(var8)(var6, var2);
        var6 = var2.initialCategorySkuId;
        var _closure2_slot2 = var6;
        var8 = var2.initialBaseProductSkuId;
        var _closure2_slot3 = var8;
        var7 = var2.initialVariantIndex;
        var _closure2_slot4 = var7;
        var2 = _closure1_slot2;
        var1 = new Array(5);
        var1[0] = var8;
        var1[1] = var7;
        var1[2] = var6;
        var1[3] = var5;
        var1[4] = var4;
        var0 = function() { // Environment: var0
            _fun88070: for (var _fun88070_ip = 0;;) switch (_fun88070_ip) {
                case 0:
                    var0 = _closure2_slot3;
                    var5 = null;
                    if (!(var5 != var0)) {
                        _fun88070_ip = 182;
                        continue _fun88070
                    }
                case 18:
                    var0 = _closure2_slot2;
                    if (!(var5 != var0)) {
                        _fun88070_ip = 182;
                        continue _fun88070
                    }
                case 29:
                    var0 = {};
                    var1 = _closure2_slot3;
                    var0.initialProductSkuId = var1;
                    var1 = _closure2_slot4;
                    var0.initialVariantIndex = var1;
                    var1 = _closure2_slot2;
                    var0.initialCategorySkuId = var1;
                    var1 = _closure2_slot1;
                    var6 = var5 != var1;
                    var4 = undefined;
                    if (!var6) {
                        _fun88070_ip = 114;
                        continue _fun88070
                    }
                case 71:
                    var6 = global;
                    var9 = var6.Math;
                    var8 = var9.max;
                    var10 = _closure2_slot1;
                    var7 = var10.findIndex;
                    var6 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.skuId;
                        var0 = _closure2_slot3;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var7 = var7.bind(var10)(var6);
                    var6 = 0;
                    var4 = var8.bind(var9)(var6, var7);
                case 114:
                    var0.productIndex = var4;
                    var4 = _closure2_slot0;
                    var4 = var5 != var4;
                    var1 = undefined;
                    if (!var4) {
                        _fun88070_ip = 175;
                        continue _fun88070
                    }
                case 132:
                    var4 = global;
                    var5 = var4.Math;
                    var4 = var5.max;
                    var6 = _closure2_slot0;
                    var3 = var6.findIndex;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.skuId;
                        var0 = _closure2_slot2;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var3 = var3.bind(var6)(var2);
                    var2 = 0;
                    var1 = var4.bind(var5)(var2, var3);
                case 175:
                    var0.categoryIndex = var1;
                    _fun88070_ip = 189;
                    continue _fun88070;
                case 182:
                    var0 = _closure1_slot5;
                case 189:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useCollectiblesShopDeepLinkProps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4564, 4610, 566, 4579, 2]);