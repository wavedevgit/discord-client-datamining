// modules/collectibles/hooks/useMaybeFetchCollectiblesCategoriesShared.tsx
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
    var3 = var3.useCallback;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/useMaybeFetchCollectiblesCategoriesShared.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 600000;
    var2.COLLECTIBLES_STORE_LISTING_CACHE_DURATION = var3;
    var1 = function arg0, arg1, arg2() {
        _fun50792: for (var _fun50792_ip = 0;;) switch (_fun50792_ip) {
            case 0:
                var11 = arg0;
                var5 = arg1;
                var9 = arg2;
                var _closure2_slot0 = var11;
                var _closure2_slot1 = var5;
                var _closure2_slot2 = var9;
                var7 = _closure1_slot0;
                var2 = _closure1_slot1;
                var13 = 4;
                var3 = var2[var13];
                var6 = undefined;
                var8 = var7.bind(var6)(var3);
                var4 = var8.useEnableMobileVariants;
                var3 = 'useMaybeFetchCollectiblesCategoriesShared';
                var4 = var4.bind(var8)(var3);
                var3 = 5;
                var2 = var2[var3];
                var10 = var7.bind(var6)(var2);
                var8 = var10.useStateFromStores;
                var2 = _closure1_slot5;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var0 = var0.hasLoadedExperiments;
                    return var0;
                };
                var17 = var8.bind(var10)(var7, var2);
                var _closure2_slot3 = var17;
                var2 = null;
                var2 = var2 == var11;
                var10 = undefined;
                if (var2) {
                    _fun50792_ip = 124;
                    continue _fun50792
                }
            case 118:
                var10 = var11.includeBundles;
            case 124:
                var _closure2_slot4 = var10;
                var7 = _closure1_slot0;
                var2 = _closure1_slot1;
                var12 = 6;
                var2 = var2[var12];
                var2 = var7.bind(var6)(var2);
                var2 = var2.ShopVariantsReturnStyle;
                if (var4) {
                    _fun50792_ip = 165;
                    continue _fun50792
                }
            case 157:
                var7 = var2.INDIVIDUAL_PRODUCTS;
                _fun50792_ip = 171;
                continue _fun50792;
            case 165:
                var7 = var2.VARIANTS_GROUP;
            case 171:
                var _closure2_slot5 = var7;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var3];
                var14 = var4.bind(var6)(var2);
                var8 = var14.useStateFromStoresArray;
                var2 = _closure1_slot6;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var0
                    _fun50794: for (var _fun50794_ip = 0;;) switch (_fun50794_ip) {
                        case 0:
                            var2 = _closure1_slot6;
                            var3 = var2.isFetchingCategories;
                            var0 = new Array(7);
                            var0[0] = var3;
                            var3 = var2.lastFetchOptions;
                            var0[1] = var3;
                            var3 = var2.error;
                            var0[2] = var3;
                            var5 = var2.lastErrorTimestamp;
                            var4 = null;
                            var6 = var4 != var5;
                            var3 = 0;
                            if (!var6) {
                                _fun50794_ip = 64;
                                continue _fun50794
                            }
                        case 61:
                            var3 = var5;
                        case 64:
                            var0[3] = var3;
                            var3 = _closure1_slot6;
                            var3 = var3.lastSuccessfulFetch;
                            var4 = var4 != var3;
                            var2 = 0;
                            if (!var4) {
                                _fun50794_ip = 90;
                                continue _fun50794
                            }
                        case 87:
                            var2 = var3;
                        case 90:
                            var0[4] = var2;
                            var1 = _closure1_slot6;
                            var2 = var1.categories;
                            var0[5] = var2;
                            var1 = var1.skipNumCategories;
                            var0[6] = var1;
                            return var0;
                    }
                };
                var8 = var8.bind(var14)(var4, var2);
                var4 = _closure1_slot2;
                var2 = 7;
                var8 = var4.bind(var6)(var8, var2);
                var2 = 0;
                var4 = var8[var2];
                var _closure2_slot6 = var4;
                var2 = 1;
                var16 = var8[var2];
                var _closure2_slot7 = var16;
                var2 = 2;
                var2 = var8[var2];
                var _closure2_slot8 = var2;
                var14 = 3;
                var14 = var8[var14];
                var _closure2_slot9 = var14;
                var15 = var8[var13];
                var _closure2_slot10 = var15;
                var3 = var8[var3];
                var8 = var8[var12];
                var _closure2_slot11 = var8;
                var13 = _closure1_slot3;
                var12 = new Array(12);
                var12[0] = var17;
                var12[1] = var4;
                var12[2] = var16;
                var12[3] = var15;
                var12[4] = var11;
                var12[5] = var2;
                var12[6] = var10;
                var12[7] = var14;
                var12[8] = var5;
                var12[9] = var9;
                var12[10] = var8;
                var12[11] = var7;
                var5 = function() { // Environment: var0
                    _fun50795: for (var _fun50795_ip = 0;;) switch (_fun50795_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (!var1) {
                                _fun50795_ip = 258;
                                continue _fun50795
                            }
                        case 13:
                            var1 = _closure2_slot6;
                            if (var1) {
                                _fun50795_ip = 258;
                                continue _fun50795
                            }
                        case 23:
                            var2 = global;
                            var3 = var2.Date;
                            var1 = var3.now;
                            var3 = var1.bind(var3)();
                            var1 = _closure2_slot9;
                            var4 = var3 - var1;
                            var5 = var2.Boolean;
                            var1 = _closure2_slot8;
                            var3 = undefined;
                            var1 = var5.bind(var3)(var1);
                            if (!var1) {
                                _fun50795_ip = 81;
                                continue _fun50795
                            }
                        case 68:
                            var1 = 600000;
                            if (!(!(var4 < var1))) {
                                _fun50795_ip = 258;
                                continue _fun50795
                            }
                        case 81:
                            var4 = {};
                            var10 = _closure2_slot0;
                            var11 = var4;
                            var1 = copyDataProperties(var11, var10);
                            var5 = _closure2_slot5;
                            var1 = 'variantsReturnStyle';
                            var4[var1] = var5;
                            var5 = _closure2_slot4;
                            var1 = 'includeBundles';
                            var4[var1] = var5;
                            var5 = _closure2_slot11;
                            var1 = 'skipNumCategories';
                            var4[var1] = var5;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var5 = 7;
                            var6 = var6[var5];
                            var8 = var7.bind(var3)(var6);
                            var7 = var8.areRequestOptionsEqual;
                            var6 = _closure2_slot7;
                            var6 = var7.bind(var8)(var6, var4);
                            var7 = !var6;
                            var6 = var2.Date;
                            var2 = var6.now;
                            var6 = var2.bind(var6)();
                            var2 = _closure2_slot10;
                            var6 = var6 - var2;
                            var2 = 600000;
                            var6 = var6 < var2;
                            var2 = !var7;
                            if (var7) {
                                _fun50795_ip = 217;
                                continue _fun50795
                            }
                        case 214:
                            var2 = var6;
                        case 217:
                            if (var2) {
                                _fun50795_ip = 258;
                                continue _fun50795
                            }
                        case 220:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var5];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.fetchCollectiblesCategories;
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot2;
                            var0 = var2.bind(var3)(var4, var1, var0);
                        case 258:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var13.bind(var6)(var5, var12);
                var5 = _closure1_slot4;
                var1 = new Array(5);
                var1[0] = var11;
                var1[1] = var10;
                var1[2] = var9;
                var1[3] = var8;
                var1[4] = var7;
                var0 = function() { // Environment: var0
                    var4 = {};
                    var6 = _closure2_slot0;
                    var7 = var4;
                    var0 = copyDataProperties(var7, var6);
                    var2 = _closure2_slot5;
                    var0 = 'variantsReturnStyle';
                    var4[var0] = var2;
                    var2 = _closure2_slot4;
                    var0 = 'includeBundles';
                    var4[var0] = var2;
                    var2 = _closure2_slot11;
                    var0 = 'skipNumCategories';
                    var4[var0] = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.fetchCollectiblesCategories;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var3)(var4, var0, var1);
                    return var0;
                };
                var1 = var5.bind(var6)(var0, var1);
                var0 = {};
                var0.isFetching = var4;
                var0.categories = var3;
                var0.fetchCategoriesError = var2;
                var0.refreshCategories = var1;
                return var0;
        }
    };
    var2.useMaybeFetchCollectiblesCategoriesShared = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 1590, 4564, 5693, 566, 4615, 4563, 2]);