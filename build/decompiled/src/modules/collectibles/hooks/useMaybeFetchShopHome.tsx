// modules/collectibles/hooks/useMaybeFetchShopHome.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.useEffect;
    var _closure1_slot3 = var7;
    var7 = var3.useCallback;
    var _closure1_slot4 = var7;
    var3 = var3.useMemo;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/useMaybeFetchShopHome.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 600000;
    var2.COLLECTIBLES_SHOP_HOME_CACHE_DURATION = var3;
    var1 = function arg0, arg1, arg2() {
        _fun88488: for (var _fun88488_ip = 0;;) switch (_fun88488_ip) {
            case 0:
                var9 = arg0;
                var21 = arg1;
                var7 = arg2;
                var17 = arguments[3];
                var _closure2_slot0 = var9;
                var _closure2_slot1 = var21;
                var _closure2_slot2 = var7;
                var6 = undefined;
                if (!(var17 === var6)) {
                    _fun88488_ip = 34;
                    continue _fun88488
                }
            case 32:
                var17 = false;
            case 34:
                var _closure2_slot3 = var6;
                var _closure2_slot4 = var6;
                var _closure2_slot5 = var6;
                var _closure2_slot6 = var6;
                var _closure2_slot7 = var6;
                var _closure2_slot8 = var6;
                var _closure2_slot9 = var6;
                var _closure2_slot10 = var6;
                var _closure2_slot11 = var6;
                var _closure2_slot12 = var6;
                var _closure2_slot13 = var6;
                var _closure2_slot14 = var6;
                var _closure2_slot15 = var6;
                var _closure2_slot16 = var6;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = 5;
                var5 = var2[var4];
                var11 = var3.bind(var6)(var5);
                var10 = var11.useStateFromStores;
                var5 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var0
                    var0 = _closure1_slot6;
                    var0 = var0.hasLoadedExperiments;
                    return var0;
                };
                var15 = var10.bind(var11)(var8, var5);
                _closure2_slot3 = var15;
                var12 = 6;
                var2 = var2[var12];
                var5 = var3.bind(var6)(var2);
                var3 = var5.useEnableMobileVariants;
                var2 = 'useMaybeFetchCollectiblesShopHome';
                var3 = var3.bind(var5)(var2);
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var18 = 7;
                var2 = var2[var18];
                var2 = var5.bind(var6)(var2);
                var2 = var2.ShopVariantsReturnStyle;
                if (var3) {
                    _fun88488_ip = 211;
                    continue _fun88488
                }
            case 203:
                var8 = var2.INDIVIDUAL_PRODUCTS;
                _fun88488_ip = 217;
                continue _fun88488;
            case 211:
                var8 = var2.VARIANTS_GROUP;
            case 217:
                _closure2_slot4 = var8;
                var11 = _closure1_slot0;
                var13 = _closure1_slot1;
                var2 = var13[var4];
                var10 = var11.bind(var6)(var2);
                var5 = var10.useStateFromStores;
                var2 = _closure1_slot7;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot7;
                    var0 = var0.skipNumCategories;
                    return var0;
                };
                var19 = var5.bind(var10)(var3, var2);
                _closure2_slot5 = var19;
                var2 = var13[var4];
                var10 = var11.bind(var6)(var2);
                var5 = var10.useStateFromStoresArray;
                var2 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var0
                    _fun88491: for (var _fun88491_ip = 0;;) switch (_fun88491_ip) {
                        case 0:
                            var5 = _closure1_slot8;
                            var0 = var5.getShopBlocks;
                            var4 = _closure2_slot0;
                            var2 = var0.bind(var5)(var4);
                            var0 = new Array(8);
                            var0[0] = var2;
                            var2 = var5.getLastSuccessfulFetch;
                            var6 = var2.bind(var5)(var4);
                            var5 = null;
                            var7 = var5 != var6;
                            var4 = 0;
                            if (!var7) {
                                _fun88491_ip = 60;
                                continue _fun88491
                            }
                        case 57:
                            var4 = var6;
                        case 60:
                            var0[1] = var4;
                            var7 = _closure1_slot8;
                            var6 = var7.getLastErrorTimestamp;
                            var4 = _closure2_slot0;
                            var4 = var6.bind(var7)(var4);
                            var5 = var5 != var4;
                            var2 = 0;
                            if (!var5) {
                                _fun88491_ip = 97;
                                continue _fun88491
                            }
                        case 94:
                            var2 = var4;
                        case 97:
                            var0[2] = var2;
                            var2 = _closure1_slot8;
                            var1 = var2.getLastFetchOptions;
                            var3 = _closure2_slot0;
                            var1 = var1.bind(var2)(var3);
                            var0[3] = var1;
                            var1 = var2.getFetchShopHomeError;
                            var1 = var1.bind(var2)(var3);
                            var0[4] = var1;
                            var1 = var2.getIsFetchingShopHome;
                            var1 = var1.bind(var2)(var3);
                            var0[5] = var1;
                            var1 = var2.getHasKnownStaleData;
                            var1 = var1.bind(var2)(var3);
                            var0[6] = var1;
                            var1 = var2.getShopHomeConfigOverride;
                            var1 = var1.bind(var2)();
                            var0[7] = var1;
                            return var0;
                    }
                };
                var5 = var5.bind(var10)(var3, var2);
                var3 = _closure1_slot2;
                var2 = 8;
                var10 = var3.bind(var6)(var5, var2);
                var2 = 0;
                var2 = var10[var2];
                var3 = 1;
                var16 = var10[var3];
                _closure2_slot6 = var16;
                var3 = 2;
                var14 = var10[var3];
                _closure2_slot7 = var14;
                var3 = 3;
                var5 = var10[var3];
                _closure2_slot8 = var5;
                var3 = 4;
                var3 = var10[var3];
                _closure2_slot9 = var3;
                var4 = var10[var4];
                _closure2_slot10 = var4;
                var12 = var10[var12];
                _closure2_slot11 = var12;
                var20 = var10[var18];
                _closure2_slot12 = var20;
                var18 = _closure1_slot5;
                var10 = new Array(4);
                var10[0] = var21;
                var10[1] = var20;
                var10[2] = var19;
                var10[3] = var8;
                var8 = function() { // Environment: var0
                    var0 = {};
                    var4 = _closure2_slot1;
                    var5 = var0;
                    var2 = copyDataProperties(var5, var4);
                    var3 = _closure2_slot4;
                    var2 = 'variantsReturnStyle';
                    var0[var2] = var3;
                    var3 = true;
                    var2 = 'includeDynamicBlocks';
                    var0[var2] = var3;
                    var3 = _closure2_slot12;
                    var2 = 'shopHomeConfig';
                    var0[var2] = var3;
                    var2 = _closure2_slot5;
                    var1 = 'skipNumCategories';
                    var0[var1] = var2;
                    return var0;
                };
                var8 = var18.bind(var6)(var8, var10);
                _closure2_slot13 = var8;
                var10 = new Array(2);
                var10[0] = var5;
                var10[1] = var8;
                var5 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.areRequestOptionsEqual;
                    var1 = _closure2_slot8;
                    var0 = _closure2_slot13;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = !var0;
                    return var0;
                };
                var5 = var18.bind(var6)(var5, var10);
                _closure2_slot14 = var5;
                var10 = 9;
                var10 = var13[var10];
                var13 = var11.bind(var6)(var10);
                var11 = var13.useHasExpiredShopBlocks;
                var10 = null;
                var10 = var10 != var4;
                if (!var10) {
                    _fun88488_ip = 499;
                    continue _fun88488
                }
            case 496:
                var10 = var4;
            case 499:
                var10 = var11.bind(var13)(var2, var10, var17);
                _closure2_slot15 = var10;
                var13 = _closure1_slot5;
                var11 = new Array(2);
                var11[0] = var16;
                var11[1] = var10;
                var10 = function() { // Environment: var0
                    _fun88494: for (var _fun88494_ip = 0;;) switch (_fun88494_ip) {
                        case 0:
                            var0 = _closure2_slot15;
                            var0 = !var0;
                            if (!var0) {
                                _fun88494_ip = 48;
                                continue _fun88494
                            }
                        case 13:
                            var2 = global;
                            var3 = var2.Date;
                            var2 = var3.now;
                            var2 = var2.bind(var3)();
                            var1 = _closure2_slot6;
                            var2 = var2 - var1;
                            var1 = 600000;
                            var0 = var2 < var1;
                        case 48:
                            return var0;
                    }
                };
                var13 = var13.bind(var6)(var10, var11);
                _closure2_slot16 = var13;
                var11 = _closure1_slot3;
                var10 = new Array(10);
                var10[0] = var15;
                var10[1] = var4;
                var10[2] = var3;
                var10[3] = var14;
                var10[4] = var13;
                var10[5] = var12;
                var10[6] = var5;
                var10[7] = var8;
                var10[8] = var9;
                var10[9] = var7;
                var5 = function() { // Environment: var0
                    _fun88495: for (var _fun88495_ip = 0;;) switch (_fun88495_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun88495_ip = 151;
                                continue _fun88495
                            }
                        case 13:
                            var1 = _closure2_slot10;
                            if (var1) {
                                _fun88495_ip = 151;
                                continue _fun88495
                            }
                        case 23:
                            var1 = global;
                            var2 = var1.Date;
                            var1 = var2.now;
                            var2 = var1.bind(var2)();
                            var1 = _closure2_slot7;
                            var2 = var2 - var1;
                            var1 = 600000;
                            var2 = var2 < var1;
                            var3 = _closure2_slot9;
                            var1 = null;
                            var1 = var1 != var3;
                            if (!var1) {
                                _fun88495_ip = 74;
                                continue _fun88495
                            }
                        case 71:
                            var1 = var2;
                        case 74:
                            if (var1) {
                                _fun88495_ip = 151;
                                continue _fun88495
                            }
                        case 77:
                            var1 = _closure2_slot14;
                            if (var1) {
                                _fun88495_ip = 91;
                                continue _fun88495
                            }
                        case 84:
                            var2 = _closure2_slot16;
                            var1 = !var2;
                        case 91:
                            if (var1) {
                                _fun88495_ip = 98;
                                continue _fun88495
                            }
                        case 94:
                            var1 = _closure2_slot11;
                        case 98:
                            if (!var1) {
                                _fun88495_ip = 151;
                                continue _fun88495
                            }
                        case 101:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 8;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.fetchCollectiblesShopHome;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot13;
                            var0 = _closure2_slot2;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 151:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var11.bind(var6)(var5, var10);
                var5 = _closure1_slot4;
                var1 = new Array(3);
                var1[0] = var9;
                var1[1] = var8;
                var1[2] = var7;
                var0 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.fetchCollectiblesShopHome;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot13;
                    var1 = _closure2_slot2;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var1 = var5.bind(var6)(var0, var1);
                var0 = {};
                var0.isFetchingShopHome = var4;
                var0.fetchShopHomeError = var3;
                var0.shopBlocks = var2;
                var0.refreshShopHome = var1;
                return var0;
        }
    };
    var2.useMaybeFetchCollectiblesShopHome = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1590, 4598, 4646, 566, 5729, 4649, 4597, 11464, 2]);