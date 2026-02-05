// modules/collectibles/hooks/useFetchCollectiblesProduct.tsx
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
    var3 = var3.useEffect;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SKUProductLines;
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/useFetchCollectiblesProduct.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun56814: for (var _fun56814_ip = 0;;) switch (_fun56814_ip) {
            case 0:
                var10 = arg0;
                var7 = arg1;
                var _closure2_slot0 = var10;
                var _closure2_slot1 = var7;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var6 = 5;
                var1 = var1[var6];
                var5 = undefined;
                var8 = var2.bind(var5)(var1);
                var4 = var8.useStateFromStores;
                var1 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    _fun56815: for (var _fun56815_ip = 0;;) switch (_fun56815_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun56815_ip = 37;
                                continue _fun56815
                            }
                        case 16:
                            var3 = _closure1_slot4;
                            var2 = var3.get;
                            var1 = _closure2_slot0;
                            var0 = var2.bind(var3)(var1);
                        case 37:
                            return var0;
                    }
                };
                var1 = var4.bind(var8)(var2, var1);
                var4 = null;
                var9 = var4 != var1;
                if (!var9) {
                    _fun56814_ip = 98;
                    continue _fun56814
                }
            case 78:
                var2 = var1.productLine;
                var1 = _closure1_slot6;
                var1 = var1.COLLECTIBLES;
                var9 = var2 !== var1;
            case 98:
                var _closure2_slot2 = var9;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var8 = var2.bind(var5)(var1);
                var6 = var8.useStateFromStoresArray;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot5;
                    var0 = var3.isFetchingProduct;
                    var2 = _closure2_slot0;
                    var1 = var0.bind(var3)(var2);
                    var0 = new Array(4);
                    var0[0] = var1;
                    var1 = var3.getProduct;
                    var1 = var1.bind(var3)(var2);
                    var0[1] = var1;
                    var1 = var3.getProductFetchError;
                    var1 = var1.bind(var3)(var2);
                    var0[2] = var1;
                    var1 = var3.getProductFetchErrorTimestamp;
                    var1 = var1.bind(var3)(var2);
                    var0[3] = var1;
                    return var0;
                };
                var6 = var6.bind(var8)(var2, var1);
                var2 = _closure1_slot2;
                var1 = 4;
                var12 = var2.bind(var5)(var6, var1);
                var11 = 0;
                var1 = var12[var11];
                var _closure2_slot3 = var1;
                var2 = 1;
                var2 = var12[var2];
                var _closure2_slot4 = var2;
                var6 = 2;
                var6 = var12[var6];
                var8 = 3;
                var12 = var12[var8];
                var8 = var4 != var6;
                if (!var8) {
                    _fun56814_ip = 207;
                    continue _fun56814
                }
            case 203:
                var8 = var4 != var12;
            case 207:
                if (!var8) {
                    _fun56814_ip = 241;
                    continue _fun56814
                }
            case 210:
                var6 = global;
                var13 = var6.Date;
                var6 = var13.now;
                var6 = var6.bind(var13)();
                var12 = var6 - var12;
                var6 = 3600000;
                var8 = var12 < var6;
            case 241:
                var _closure2_slot5 = var8;
                var6 = true;
                var6 = var6 === var7;
                if (!var6) {
                    _fun56814_ip = 304;
                    continue _fun56814
                }
            case 254:
                var4 = var4 == var2;
                var12 = undefined;
                if (var4) {
                    _fun56814_ip = 268;
                    continue _fun56814
                }
            case 263:
                var12 = var2.type;
            case 268:
                var13 = _closure1_slot0;
                var14 = _closure1_slot1;
                var4 = 6;
                var4 = var14[var4];
                var4 = var13.bind(var5)(var4);
                var4 = var4.CollectiblesItemType;
                var4 = var4.BUNDLE;
                var6 = var12 === var4;
            case 304:
                if (!var6) {
                    _fun56814_ip = 321;
                    continue _fun56814
                }
            case 307:
                var4 = var2.items;
                var4 = var4.length;
                var6 = var11 === var4;
            case 321:
                var _closure2_slot6 = var6;
                var4 = _closure1_slot3;
                var3 = new Array(7);
                var3[0] = var10;
                var3[1] = var2;
                var3[2] = var9;
                var3[3] = var1;
                var3[4] = var8;
                var3[5] = var7;
                var3[6] = var6;
                var0 = function() { // Environment: var0
                    _fun56817: for (var _fun56817_ip = 0;;) switch (_fun56817_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var2 = null;
                            var0 = var2 == var0;
                            if (var0) {
                                _fun56817_ip = 37;
                                continue _fun56817
                            }
                        case 16:
                            var1 = _closure2_slot4;
                            var1 = var2 != var1;
                            if (!var1) {
                                _fun56817_ip = 34;
                                continue _fun56817
                            }
                        case 27:
                            var2 = _closure2_slot6;
                            var1 = !var2;
                        case 34:
                            var0 = var1;
                        case 37:
                            if (var0) {
                                _fun56817_ip = 44;
                                continue _fun56817
                            }
                        case 40:
                            var0 = _closure2_slot2;
                        case 44:
                            if (var0) {
                                _fun56817_ip = 51;
                                continue _fun56817
                            }
                        case 47:
                            var0 = _closure2_slot3;
                        case 51:
                            if (var0) {
                                _fun56817_ip = 58;
                                continue _fun56817
                            }
                        case 54:
                            var0 = _closure2_slot5;
                        case 58:
                            if (var0) {
                                _fun56817_ip = 113;
                                continue _fun56817
                            }
                        case 61:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.fetchCollectiblesProduct;
                            var1 = _closure2_slot0;
                            var0 = {};
                            var4 = _closure2_slot1;
                            var0.includeBundles = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 113:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var4.bind(var5)(var0, var3);
                var0 = {};
                var0.product = var2;
                var0.isFetching = var1;
                return var0;
        }
    };
    var2.useFetchCollectiblesProduct = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3499, 4598, 660, 632, 3493, 4597, 2]);