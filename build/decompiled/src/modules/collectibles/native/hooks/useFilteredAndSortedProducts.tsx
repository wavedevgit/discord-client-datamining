// modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CollectiblesMobileShopScreen;
    var _closure1_slot5 = var3;
    var3 = function arg0() {
        _fun89068: for (var _fun89068_ip = 0;;) switch (_fun89068_ip) {
            case 0:
                var2 = _closure1_slot5;
                var3 = var2.ORBS;
                var2 = arg0;
                var5 = var2 === var3;
                var _closure2_slot0 = var5;
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 6;
                var2 = var4[var2];
                var7 = undefined;
                var6 = var3.bind(var7)(var2);
                var4 = var6.useStateFromStores;
                var2 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var1 = _closure1_slot4;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var6 = var4.bind(var6)(var3, var2);
                var2 = null;
                var4 = var2 != var6;
                if (!var4) {
                    _fun89068_ip = 118;
                    continue _fun89068
                }
            case 87:
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 7;
                var2 = var8[var2];
                var3 = var3.bind(var7)(var2);
                var2 = var3.canUseCollectibles;
                var4 = var2.bind(var3)(var6);
            case 118:
                var _closure2_slot1 = var4;
                var3 = _closure1_slot3;
                var2 = var3.useCallback;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var4;
                var0 = function(arg0) { // Environment: var0
                    _fun89070: for (var _fun89070_ip = 0;;) switch (_fun89070_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = _closure2_slot0;
                            var0 = var3;
                            if (!var1) {
                                _fun89070_ip = 35;
                                continue _fun89070
                            }
                        case 16:
                            var2 = var3.filter;
                            var1 = function(arg0) { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 8;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getProductOrbPrice;
                                var0 = {};
                                var3 = arg0;
                                var0.product = var3;
                                var3 = _closure2_slot1;
                                var0.isPremiumUser = var3;
                                var1 = var1.bind(var2)(var0);
                                var0 = null;
                                var0 = var0 != var1;
                                return var0;
                            };
                            var0 = var2.bind(var3)(var1);
                        case 35:
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/hooks/useFilteredAndSortedProducts.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        var1 = arg0;
        var10 = var1.products;
        var _closure2_slot0 = var10;
        var4 = var1.maxProducts;
        var _closure2_slot1 = var4;
        var9 = var1.bypassAndroidUnsyncedFilter;
        var _closure2_slot2 = var9;
        var5 = var1.screen;
        var6 = _closure1_slot0;
        var7 = _closure1_slot2;
        var1 = 3;
        var1 = var7[var1];
        var2 = undefined;
        var8 = var6.bind(var2)(var1);
        var1 = var8.useBadBundleFilter;
        var12 = var1.bind(var8)();
        var _closure2_slot3 = var12;
        var1 = 4;
        var1 = var7[var1];
        var8 = var6.bind(var2)(var1);
        var1 = var8.useAndroidUnsyncedFilter;
        var11 = var1.bind(var8)();
        var _closure2_slot4 = var11;
        var1 = _closure1_slot6;
        var1 = var1.bind(var2)(var5);
        var _closure2_slot5 = var1;
        var3 = _closure1_slot3;
        var8 = var3.useMemo;
        var5 = new Array(5);
        var5[0] = var12;
        var5[1] = var11;
        var5[2] = var10;
        var5[3] = var9;
        var5[4] = var1;
        var1 = function() { // Environment: var0
            _fun89073: for (var _fun89073_ip = 0;;) switch (_fun89073_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    if (var2) {
                        _fun89073_ip = 18;
                        continue _fun89073
                    }
                case 12:
                    var2 = _closure2_slot4;
                    _fun89073_ip = 25;
                    continue _fun89073;
                case 18:
                    var2 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        return var0;
                    };
                case 25:
                    var3 = new Array(3);
                    var3[0] = var2;
                    var2 = _closure2_slot3;
                    var3[1] = var2;
                    var2 = _closure2_slot5;
                    var3[2] = var2;
                    var2 = var3.reduce;
                    var1 = _closure2_slot0;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var2 = arg1;
                        var1 = undefined;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
            }
        };
        var5 = var8.bind(var3)(var1, var5);
        var1 = 5;
        var1 = var7[var1];
        var2 = var6.bind(var2)(var1);
        var1 = var2.usePurchasedProductsSort;
        var5 = var1.bind(var2)(var5);
        var _closure2_slot6 = var5;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun89076: for (var _fun89076_ip = 0;;) switch (_fun89076_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun89076_ip = 19;
                        continue _fun89076
                    }
                case 13:
                    var0 = _closure2_slot6;
                    _fun89076_ip = 40;
                    continue _fun89076;
                case 19:
                    var4 = _closure2_slot6;
                    var3 = var4.slice;
                    var2 = _closure2_slot1;
                    var1 = 0;
                    var0 = var3.bind(var4)(var1, var2);
                case 40:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useFilteredAndSortedProducts = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1621, 3284, 11541, 11542, 11543, 566, 3111, 4613, 2]);