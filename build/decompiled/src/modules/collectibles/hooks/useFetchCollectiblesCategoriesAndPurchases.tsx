// modules/collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var3 = function() {
        _fun50914: for (var _fun50914_ip = 0;;) switch (_fun50914_ip) {
            case 0:
                var12 = arguments[0];
                var9 = undefined;
                if (!(var12 === var9)) {
                    _fun50914_ip = 13;
                    continue _fun50914
                }
            case 11:
                var12 = false;
            case 13:
                var _closure2_slot0 = var12;
                var _closure2_slot1 = var9;
                var _closure2_slot2 = var9;
                var _closure2_slot3 = var9;
                var _closure2_slot4 = var9;
                var _closure2_slot5 = var9;
                var _closure2_slot6 = var9;
                var _closure2_slot7 = var9;
                var _closure2_slot8 = var9;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 5;
                var2 = var1[var8];
                var5 = var4.bind(var9)(var2);
                var3 = var5.useEnableMobileVariants;
                var2 = 'useFetchPurchases';
                var2 = var3.bind(var5)(var2);
                var3 = 6;
                var1 = var1[var3];
                var6 = var4.bind(var9)(var1);
                var5 = var6.useStateFromStores;
                var1 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var0 = var0.hasLoadedExperiments;
                    return var0;
                };
                var10 = var5.bind(var6)(var4, var1);
                _closure2_slot1 = var10;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var1 = var4.bind(var9)(var1);
                var1 = var1.ShopVariantsReturnStyle;
                if (var2) {
                    _fun50914_ip = 168;
                    continue _fun50914
                }
            case 160:
                var11 = var1.INDIVIDUAL_PRODUCTS;
                _fun50914_ip = 174;
                continue _fun50914;
            case 168:
                var11 = var1.VARIANTS_GROUP;
            case 174:
                _closure2_slot2 = var11;
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var3];
                var5 = var2.bind(var9)(var1);
                var4 = var5.useStateFromStoresArray;
                var1 = _closure1_slot7;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot7;
                    var2 = var0.isFetching;
                    var0 = new Array(6);
                    var0[0] = var2;
                    var2 = _closure1_slot7;
                    var2 = var2.isClaiming;
                    var0[1] = var2;
                    var2 = _closure1_slot7;
                    var2 = var2.fetchError;
                    var0[2] = var2;
                    var2 = _closure1_slot7;
                    var2 = var2.claimError;
                    var0[3] = var2;
                    var2 = _closure1_slot7;
                    var2 = var2.purchases;
                    var0[4] = var2;
                    var1 = _closure1_slot7;
                    var1 = var1.hasPreviouslyFetched;
                    var0[5] = var1;
                    return var0;
                };
                var2 = var4.bind(var5)(var2, var1);
                var1 = _closure1_slot3;
                var1 = var1.bind(var9)(var2, var3);
                var2 = 0;
                var3 = var1[var2];
                _closure2_slot3 = var3;
                var2 = 1;
                var6 = var1[var2];
                var2 = 2;
                var5 = var1[var2];
                _closure2_slot4 = var5;
                var2 = 3;
                var4 = var1[var2];
                var2 = 4;
                var2 = var1[var2];
                var1 = var1[var8];
                _closure2_slot5 = var1;
                var13 = _closure1_slot5;
                var8 = _closure1_slot7;
                var8 = var8.hasPreviouslyFetched;
                var8 = var13.bind(var9)(var8);
                _closure2_slot6 = var8;
                var14 = _closure1_slot4;
                var13 = new Array(1);
                var13[0] = var1;
                var8 = function() { // Environment: var0
                    var1 = _closure2_slot6;
                    var0 = _closure2_slot5;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var8 = var14.bind(var9)(var8, var13);
                var13 = _closure1_slot5;
                var8 = _closure1_slot7;
                var8 = var8.fetchError;
                var8 = var13.bind(var9)(var8);
                _closure2_slot7 = var8;
                var14 = _closure1_slot4;
                var13 = new Array(1);
                var13[0] = var5;
                var8 = function() { // Environment: var0
                    var1 = _closure2_slot7;
                    var0 = _closure2_slot4;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var8 = var14.bind(var9)(var8, var13);
                var13 = _closure1_slot5;
                var8 = _closure1_slot7;
                var8 = var8.isFetching;
                var8 = var13.bind(var9)(var8);
                _closure2_slot8 = var8;
                var14 = _closure1_slot4;
                var13 = new Array(1);
                var13[0] = var3;
                var8 = function() { // Environment: var0
                    var1 = _closure2_slot8;
                    var0 = _closure2_slot3;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var8 = var14.bind(var9)(var8, var13);
                var8 = _closure1_slot4;
                var7 = new Array(3);
                var7[0] = var12;
                var7[1] = var11;
                var7[2] = var10;
                var0 = function() { // Environment: var0
                    _fun50920: for (var _fun50920_ip = 0;;) switch (_fun50920_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            var0 = !var0;
                            if (var0) {
                                _fun50920_ip = 22;
                                continue _fun50920
                            }
                        case 13:
                            var1 = _closure2_slot8;
                            var0 = var1.current;
                        case 22:
                            if (var0) {
                                _fun50920_ip = 68;
                                continue _fun50920
                            }
                        case 25:
                            var2 = _closure2_slot0;
                            var1 = true;
                            var1 = var1 === var2;
                            if (!var1) {
                                _fun50920_ip = 47;
                                continue _fun50920
                            }
                        case 38:
                            var2 = _closure2_slot6;
                            var1 = var2.current;
                        case 47:
                            if (!var1) {
                                _fun50920_ip = 65;
                                continue _fun50920
                            }
                        case 50:
                            var2 = _closure2_slot7;
                            var4 = var2.current;
                            var2 = null;
                            var1 = var2 == var4;
                        case 65:
                            var0 = var1;
                        case 68:
                            if (var0) {
                                _fun50920_ip = 118;
                                continue _fun50920
                            }
                        case 71:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.fetchCollectiblesPurchases;
                            var0 = {};
                            var3 = _closure2_slot2;
                            var0.variantsReturnStyle = var3;
                            var0 = var1.bind(var2)(var0);
                        case 118:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var8.bind(var9)(var0, var7);
                var0 = {};
                var0.isClaiming = var6;
                var0.fetchPurchasesError = var5;
                var0.claimError = var4;
                var0.isFetching = var3;
                var0.purchases = var2;
                var0.hasPreviouslyFetched = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var4 = function arg0, arg1() {
        _fun50921: for (var _fun50921_ip = 0;;) switch (_fun50921_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var1 = var0 == var4;
                var3 = undefined;
                var2 = undefined;
                if (var1) {
                    _fun50921_ip = 22;
                    continue _fun50921
                }
            case 16:
                var2 = var4.paymentGateway;
            case 22:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 9;
                var5 = var7[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.paymentGateway = var2;
                var7 = var0 == var4;
                var2 = undefined;
                if (var7) {
                    _fun50921_ip = 67;
                    continue _fun50921
                }
            case 61:
                var2 = var4.noOp;
            case 67:
                var5.noOp = var2;
                var7 = var0 == var4;
                var2 = undefined;
                if (var7) {
                    _fun50921_ip = 87;
                    continue _fun50921
                }
            case 81:
                var2 = var4.logPerf;
            case 87:
                var5.logPerf = var2;
                var7 = var0 == var4;
                var2 = undefined;
                if (var7) {
                    _fun50921_ip = 107;
                    continue _fun50921
                }
            case 101:
                var2 = var4.countryCode;
            case 107:
                var5.countryCode = var2;
                var2 = arg1;
                var2 = var6.bind(var3)(var5, var2);
                var9 = var2.isFetching;
                var6 = var2.categories;
                var5 = var2.fetchCategoriesError;
                var2 = var2.refreshCategories;
                var1 = _closure1_slot8;
                var7 = var0 == var4;
                var0 = undefined;
                if (var7) {
                    _fun50921_ip = 164;
                    continue _fun50921
                }
            case 158:
                var0 = var4.stalePurchasesOK;
            case 164:
                var1 = var1.bind(var3)(var0);
                var7 = var1.isClaiming;
                var4 = var1.fetchPurchasesError;
                var3 = var1.claimError;
                var8 = var1.isFetching;
                var0 = {};
                var10 = var9;
                if (var10) {
                    _fun50921_ip = 204;
                    continue _fun50921
                }
            case 201:
                var10 = var8;
            case 204:
                var0.isFetching = var10;
                var0.isFetchingCategories = var9;
                var0.isFetchingPurchases = var8;
                var0.isClaiming = var7;
                var0.categories = var6;
                var6 = var1.purchases;
                var0.purchases = var6;
                var0.fetchCategoriesError = var5;
                var0.fetchPurchasesError = var4;
                var0.claimError = var3;
                var0.refreshCategories = var2;
                var1 = var1.hasPreviouslyFetched;
                var0.hasPreviouslyFetched = var1;
                return var0;
        }
    };
    var _closure1_slot9 = var4;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var9 = var5.useEffect;
    var _closure1_slot4 = var9;
    var5 = var5.useRef;
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = 10;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/collectibles/hooks/useFetchCollectiblesCategoriesAndPurchases.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.useFetchPurchases = var3;
    var3 = function() { // Environment: var1
        var2 = _closure1_slot8;
        var1 = undefined;
        var0 = true;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useGetOrFetchPurchases = var3;
    var3 = function(arg0) { // Environment: var1
        _fun50923: for (var _fun50923_ip = 0;;) switch (_fun50923_ip) {
            case 0:
                var3 = arg0;
                var2 = arguments[1];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun50923_ip = 14;
                    continue _fun50923
                }
            case 12:
                var2 = true;
            case 14:
                var1 = _closure1_slot8;
                var1 = var1.bind(var0)(var2);
                var2 = var1.purchases;
                var1 = null;
                var1 = var1 != var3;
                var0 = undefined;
                if (!var1) {
                    _fun50923_ip = 53;
                    continue _fun50923
                }
            case 43:
                var1 = var2.get;
                var0 = var1.bind(var2)(var3);
            case 53:
                return var0;
        }
    };
    var2.useGetOrFetchPurchase = var3;
    var1 = function(arg0) { // Environment: var1
        _fun50924: for (var _fun50924_ip = 0;;) switch (_fun50924_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot9;
                var1 = {};
                var3 = null;
                if (!(var3 == var0)) {
                    _fun50924_ip = 20;
                    continue _fun50924
                }
            case 18:
                var0 = {};
            case 20:
                var5 = var1;
                var4 = var0;
                var0 = copyDataProperties(var5, var4);
                var3 = true;
                var0 = 'stalePurchasesOK';
                var1[var0] = var3;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.useGetOrFetchCollectiblesCategoriesAndPurchases = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1590, 4616, 5728, 5729, 632, 4649, 4597, 5730, 2]);