// modules/collectibles/hooks/useTrackProductCardImpression.tsx
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
    var3 = var3.AnalyticEvents;
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/hooks/useTrackProductCardImpression.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun87916: for (var _fun87916_ip = 0;;) switch (_fun87916_ip) {
            case 0:
                var6 = arg0;
                var8 = arg1;
                var1 = arguments[2];
                var _closure2_slot0 = var6;
                var _closure2_slot1 = var8;
                var10 = undefined;
                if (!(var1 === var10)) {
                    _fun87916_ip = 29;
                    continue _fun87916
                }
            case 25:
                var1 = 'product';
            case 29:
                var _closure2_slot2 = var1;
                var _closure2_slot3 = var10;
                var _closure2_slot4 = var10;
                var _closure2_slot5 = var10;
                var _closure2_slot6 = var10;
                var _closure2_slot7 = var10;
                var4 = _closure1_slot0;
                var9 = _closure1_slot2;
                var3 = 3;
                var3 = var9[var3];
                var5 = var4.bind(var10)(var3);
                var3 = var5.useCollectiblesAnalyticsContext;
                var11 = var3.bind(var5)();
                _closure2_slot3 = var11;
                var3 = 4;
                var3 = var9[var3];
                var12 = var4.bind(var10)(var3);
                var7 = var12.useStateFromStores;
                var3 = _closure1_slot4;
                var5 = new Array(1);
                var5[0] = var3;
                var3 = function() { // Environment: var0
                    var2 = _closure1_slot4;
                    var1 = var2.getProduct;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var7 = var7.bind(var12)(var5, var3);
                _closure2_slot4 = var7;
                var3 = 5;
                var3 = var9[var3];
                var4 = var4.bind(var10)(var3);
                var3 = var4.useCurrentUser;
                var5 = var3.bind(var4)();
                var4 = _closure1_slot1;
                var3 = 6;
                var3 = var9[var3];
                var4 = var4.bind(var10)(var3);
                var3 = var4.canUseCollectibles;
                var9 = var3.bind(var4)(var5);
                _closure2_slot5 = var9;
                var5 = _closure1_slot3;
                var3 = var5.useRef;
                var12 = null;
                var3 = var3.bind(var5)(var12);
                _closure2_slot6 = var3;
                var4 = var5.useCallback;
                var3 = var12 == var11;
                var13 = undefined;
                if (var3) {
                    _fun87916_ip = 229;
                    continue _fun87916
                }
            case 223:
                var13 = var11.sessionId;
            case 229:
                var3 = new Array(10);
                var3[0] = var13;
                var14 = var12 == var11;
                var13 = undefined;
                if (var14) {
                    _fun87916_ip = 252;
                    continue _fun87916
                }
            case 246:
                var13 = var11.categoryPosition;
            case 252:
                var3[1] = var13;
                var14 = var12 == var11;
                var13 = undefined;
                if (var14) {
                    _fun87916_ip = 271;
                    continue _fun87916
                }
            case 265:
                var13 = var11.pageCategory;
            case 271:
                var3[2] = var13;
                var14 = var12 == var11;
                var13 = undefined;
                if (var14) {
                    _fun87916_ip = 290;
                    continue _fun87916
                }
            case 284:
                var13 = var11.pageSection;
            case 290:
                var3[3] = var13;
                var12 = var12 == var11;
                var10 = undefined;
                if (var12) {
                    _fun87916_ip = 309;
                    continue _fun87916
                }
            case 303:
                var10 = var11.tilePosition;
            case 309:
                var3[4] = var10;
                var3[5] = var9;
                var3[6] = var8;
                var3[7] = var7;
                var3[8] = var6;
                var3[9] = var1;
                var1 = function() { // Environment: var0
                    _fun87918: for (var _fun87918_ip = 0;;) switch (_fun87918_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var7 = null;
                            var0 = var7 != var0;
                            var9 = null;
                            if (!var0) {
                                _fun87918_ip = 66;
                                continue _fun87918
                            }
                        case 18:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var2.bind(var0)(var1);
                            var3 = var4.getPriceForCollectiblesProduct;
                            var2 = _closure2_slot4;
                            var1 = _closure2_slot5;
                            var0 = true;
                            var9 = var3.bind(var4)(var2, var1, var0);
                        case 66:
                            var0 = _closure2_slot4;
                            var1 = var7 != var0;
                            var0 = undefined;
                            var5 = undefined;
                            if (!var1) {
                                _fun87918_ip = 127;
                                continue _fun87918
                            }
                        case 81:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 7;
                            var1 = var3[var1];
                            var8 = var2.bind(var0)(var1);
                            var4 = var8.getStrikeThroughPriceAmountForCollectiblesProduct;
                            var3 = _closure2_slot4;
                            var2 = _closure2_slot5;
                            var1 = true;
                            var5 = var4.bind(var8)(var3, var2, var1);
                        case 127:
                            var3 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var2 = 8;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.track;
                            var1 = _closure1_slot5;
                            var2 = var1.COLLECTIBLES_TILE_IMPRESSION;
                            var1 = {};
                            var8 = _closure2_slot3;
                            var10 = var7 == var8;
                            var8 = undefined;
                            if (var10) {
                                _fun87918_ip = 190;
                                continue _fun87918
                            }
                        case 180:
                            var10 = _closure2_slot3;
                            var8 = var10.sessionId;
                        case 190:
                            var1.collectibles_shop_session_id = var8;
                            var8 = _closure2_slot0;
                            var1.sku_id = var8;
                            var10 = var7 == var9;
                            var8 = undefined;
                            if (var10) {
                                _fun87918_ip = 219;
                                continue _fun87918
                            }
                        case 213:
                            var8 = var9.amount;
                        case 219:
                            var1.display_price = var8;
                            var10 = var7 == var9;
                            var8 = undefined;
                            if (var10) {
                                _fun87918_ip = 250;
                                continue _fun87918
                            }
                        case 235:
                            var10 = var9.currency;
                            var9 = var10.toString;
                            var8 = var9.bind(var10)();
                        case 250:
                            var1.display_price_currency = var8;
                            var1.display_price_strikethrough = var5;
                            var5 = _closure2_slot3;
                            var8 = var7 == var5;
                            var5 = undefined;
                            if (var8) {
                                _fun87918_ip = 287;
                                continue _fun87918
                            }
                        case 277:
                            var8 = _closure2_slot3;
                            var5 = var8.tilePosition;
                        case 287:
                            var1.position = var5;
                            var5 = _closure2_slot1;
                            var1.page_type = var5;
                            var5 = _closure2_slot3;
                            var8 = var7 == var5;
                            var5 = undefined;
                            if (var8) {
                                _fun87918_ip = 323;
                                continue _fun87918
                            }
                        case 313:
                            var8 = _closure2_slot3;
                            var5 = var8.pageCategory;
                        case 323:
                            var1.page_category = var5;
                            var5 = _closure2_slot3;
                            var8 = var7 == var5;
                            var5 = undefined;
                            if (var8) {
                                _fun87918_ip = 351;
                                continue _fun87918
                            }
                        case 341:
                            var8 = _closure2_slot3;
                            var5 = var8.pageSection;
                        case 351:
                            var1.page_section = var5;
                            var5 = _closure2_slot2;
                            var1.type = var5;
                            var5 = _closure2_slot3;
                            var7 = var7 == var5;
                            var5 = undefined;
                            if (var7) {
                                _fun87918_ip = 387;
                                continue _fun87918
                            }
                        case 377:
                            var6 = _closure2_slot3;
                            var5 = var6.categoryPosition;
                        case 387:
                            var1.category_position = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1, var3);
                _closure2_slot7 = var1;
                var4 = _closure1_slot3;
                var3 = var4.useCallback;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function(arg0) { // Environment: var0
                    _fun87919: for (var _fun87919_ip = 0;;) switch (_fun87919_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var2 = var1.current;
                            var1 = null;
                            var3 = arg0;
                            if (var3) {
                                _fun87919_ip = 60;
                                continue _fun87919
                            }
                        case 20:
                            if (!(var1 !== var2)) {
                                _fun87919_ip = 105;
                                continue _fun87919
                            }
                        case 24:
                            var3 = global;
                            var5 = var3.clearTimeout;
                            var3 = _closure2_slot6;
                            var4 = var3.current;
                            var3 = undefined;
                            var3 = var5.bind(var3)(var4);
                            var3 = _closure2_slot6;
                            var3.current = var1;
                            _fun87919_ip = 105;
                            continue _fun87919;
                        case 60:
                            if (!(var1 === var2)) {
                                _fun87919_ip = 105;
                                continue _fun87919
                            }
                        case 64:
                            var1 = _closure2_slot6;
                            var0 = global;
                            var4 = var0.setTimeout;
                            var3 = undefined;
                            var2 = function() { // Environment: var0
                                var2 = _closure2_slot7;
                                var0 = undefined;
                                var2 = var2.bind(var0)();
                                var2 = _closure2_slot6;
                                var1 = null;
                                var2.current = var1;
                                return var0;
                            };
                            var0 = 1000;
                            var0 = var4.bind(var3)(var2, var0);
                            var1.current = var0;
                        case 105:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var3 = var4.useEffect;
                var2 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        _fun87922: for (var _fun87922_ip = 0;;) switch (_fun87922_ip) {
                            case 0:
                                var1 = _closure2_slot6;
                                var2 = var1.current;
                                var1 = null;
                                if (!(var1 !== var2)) {
                                    _fun87922_ip = 52;
                                    continue _fun87922
                                }
                            case 18:
                                var2 = global;
                                var4 = var2.clearTimeout;
                                var2 = _closure2_slot6;
                                var3 = var2.current;
                                var2 = undefined;
                                var2 = var4.bind(var2)(var3);
                                var0 = _closure2_slot6;
                                var0.current = var1;
                            case 52:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = new Array(0);
                var0 = var3.bind(var4)(var2, var0);
                var0 = {};
                var0.handleCardVisibilityChange = var1;
                return var0;
        }
    };
    var2.useTrackProductCardImpression = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4599, 660, 11380, 566, 9525, 3111, 4600, 795, 2]);