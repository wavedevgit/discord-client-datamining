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
    var3 = 4;
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
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot4;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = function() { // Environment: var0
            var0 = _closure1_slot4;
            var0 = var0.initialProductSkuId;
            return var0;
        };
        var7 = var7.bind(var8)(var6, var2);
        var _closure2_slot2 = var7;
        var6 = _closure1_slot3;
        var2 = var6.getCategoryForProduct;
        var6 = var2.bind(var6)(var7);
        var _closure2_slot3 = var6;
        var2 = _closure1_slot2;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun88481: for (var _fun88481_ip = 0;;) switch (_fun88481_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var5 = null;
                    if (!(var5 != var0)) {
                        _fun88481_ip = 181;
                        continue _fun88481
                    }
                case 18:
                    var0 = _closure2_slot3;
                    if (!(var5 != var0)) {
                        _fun88481_ip = 181;
                        continue _fun88481
                    }
                case 29:
                    var0 = {};
                    var1 = _closure2_slot2;
                    var0.initialProductSkuId = var1;
                    var1 = _closure2_slot3;
                    var1 = var1.skuId;
                    var0.initialCategorySkuId = var1;
                    var1 = _closure2_slot1;
                    var6 = var5 != var1;
                    var4 = undefined;
                    if (!var6) {
                        _fun88481_ip = 113;
                        continue _fun88481
                    }
                case 70:
                    var6 = global;
                    var9 = var6.Math;
                    var8 = var9.max;
                    var10 = _closure2_slot1;
                    var7 = var10.findIndex;
                    var6 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.skuId;
                        var0 = _closure2_slot2;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var7 = var7.bind(var10)(var6);
                    var6 = 0;
                    var4 = var8.bind(var9)(var6, var7);
                case 113:
                    var0.productIndex = var4;
                    var4 = _closure2_slot0;
                    var4 = var5 != var4;
                    var1 = undefined;
                    if (!var4) {
                        _fun88481_ip = 174;
                        continue _fun88481
                    }
                case 131:
                    var4 = global;
                    var5 = var4.Math;
                    var4 = var5.max;
                    var6 = _closure2_slot0;
                    var3 = var6.findIndex;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var1 = var0.skuId;
                        var0 = _closure2_slot3;
                        var0 = var0.skuId;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var3 = var3.bind(var6)(var2);
                    var2 = 0;
                    var1 = var4.bind(var5)(var2, var3);
                case 174:
                    var0.categoryIndex = var1;
                    _fun88481_ip = 183;
                    continue _fun88481;
                case 181:
                    var0 = {};
                case 183:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useCollectiblesShopDeepLinkProps = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4555, 4601, 566, 2]);