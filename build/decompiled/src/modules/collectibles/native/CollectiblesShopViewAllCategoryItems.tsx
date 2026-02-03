// modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var12 = 1;
    var3 = var5[var12];
    var3 = var4.bind(var0)(var3);
    var7 = var3.View;
    var _closure1_slot4 = var7;
    var3 = var3.StyleSheet;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CollectiblesMobileShopScreen;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot8 = var7;
    var3 = var3.jsxs;
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var9.flex = var12;
    var10 = 6;
    var13 = var5[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var9.backgroundColor = var13;
    var3.rootContainer = var9;
    var9 = {};
    var9.height = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9.backgroundColor = var10;
    var3.border = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot10 = var3;
    var3 = {};
    var7 = 'function CollectiblesShopViewAllCategoryItemsTsx1(){const{borderOpacity}=this.__closure;return{opacity:borderOpacity.get()};}';
    var3.code = var7;
    var _closure1_slot11 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun88655: for (var _fun88655_ip = 0;;) switch (_fun88655_ip) {
            case 0:
                var0 = arg0;
                var16 = var0.category;
                var _closure2_slot0 = var16;
                var7 = var0.analyticsContext;
                var _closure2_slot1 = var7;
                var0 = _closure1_slot10;
                var3 = undefined;
                var19 = var0.bind(var3)();
                var24 = var16.mobileBgUrl;
                var22 = var16.logoUrl;
                var6 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 7;
                var0 = var2[var0];
                var4 = var6.bind(var3)(var0);
                var0 = var16.styles;
                var0 = var4.bind(var3)(var0);
                var21 = var0.backgroundColors;
                var0 = 8;
                var4 = var2[var0];
                var5 = var6.bind(var3)(var4);
                var4 = 9;
                var4 = var2[var4];
                var4 = var6.bind(var3)(var4);
                var6 = var4.COLLECTIBLES_SHOP_INDEX_PAGE;
                var4 = new Array(1);
                var4[0] = var6;
                var4 = var5.bind(var3)(var4);
                var4 = var4.analyticsLocations;
                var _closure2_slot2 = var4;
                var5 = _closure1_slot0;
                var6 = 10;
                var6 = var2[var6];
                var8 = var5.bind(var3)(var6);
                var6 = var8.useCardLayout;
                var6 = var6.bind(var8)();
                var14 = var6.columns;
                var6 = 11;
                var6 = var2[var6];
                var9 = var5.bind(var3)(var6);
                var8 = var9.useFilteredAndSortedProducts;
                var6 = {};
                var10 = var16.products;
                var6.products = var10;
                var15 = var8.bind(var9)(var6);
                var10 = 12;
                var6 = var2[var10];
                var9 = var5.bind(var3)(var6);
                var8 = var9.useSharedValue;
                var6 = 0;
                var11 = var8.bind(var9)(var6);
                var _closure2_slot3 = var11;
                var6 = _closure1_slot3;
                var12 = var6.useCallback;
                var9 = new Array(1);
                var9[0] = var11;
                var8 = function(arg0) { // Environment: var1
                    _fun88656: for (var _fun88656_ip = 0;;) switch (_fun88656_ip) {
                        case 0:
                            var3 = _closure2_slot3;
                            var2 = var3.set;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 13;
                            var1 = var1[var0];
                            var0 = undefined;
                            var5 = var4.bind(var0)(var1);
                            var4 = var5.withSpring;
                            var1 = arg0;
                            var1 = var1.nativeEvent;
                            var1 = var1.contentOffset;
                            var6 = var1.y;
                            var1 = 5;
                            var6 = var6 > var1;
                            var1 = 0;
                            if (!var6) {
                                _fun88656_ip = 77;
                                continue _fun88656
                            }
                        case 74:
                            var1 = 1;
                        case 77:
                            var1 = var4.bind(var5)(var1);
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var13 = var12.bind(var6)(var8, var9);
                var2 = var2[var10];
                var8 = var5.bind(var3)(var2);
                var5 = var8.useAnimatedStyle;
                var2 = function() {
                    var0 = {};
                    var2 = _closure2_slot3;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.opacity = var1;
                    return var0;
                };
                var9 = {};
                var9.borderOpacity = var11;
                var2.__closure = var9;
                var9 = 2446209469388.0;
                var2.__workletHash = var9;
                var9 = _closure1_slot11;
                var2.__initData = var9;
                var20 = var5.bind(var8)(var2);
                var5 = var6.useEffect;
                var18 = null;
                var2 = var18 == var7;
                var8 = undefined;
                if (var2) {
                    _fun88655_ip = 355;
                    continue _fun88655
                }
            case 349:
                var8 = var7.sessionId;
            case 355:
                var2 = new Array(3);
                var2[0] = var8;
                var2[1] = var4;
                var8 = var16.name;
                var2[2] = var8;
                var1 = function() { // Environment: var1
                    _fun88658: for (var _fun88658_ip = 0;;) switch (_fun88658_ip) {
                        case 0:
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var7 = var2.bind(var0)(var1);
                            var5 = var7.track;
                            var1 = _closure1_slot7;
                            var3 = var1.COLLECTIBLES_SHOP_VIEWED;
                            var2 = {};
                            var1 = _closure2_slot2;
                            var2.location_stack = var1;
                            var1 = _closure2_slot1;
                            var8 = null;
                            var9 = var8 == var1;
                            var1 = undefined;
                            if (var9) {
                                _fun88658_ip = 79;
                                continue _fun88658
                            }
                        case 69:
                            var9 = _closure2_slot1;
                            var1 = var9.sessionId;
                        case 79:
                            var2.page_session_id = var1;
                            var10 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var9 = 9;
                            var9 = var1[var9];
                            var9 = var10.bind(var0)(var9);
                            var9 = var9.COLLECTIBLES_SHOP;
                            var2.source = var9;
                            var9 = 'index';
                            var2.page_type = var9;
                            var9 = _closure2_slot0;
                            var9 = var9.name;
                            var2.category = var9;
                            var2 = var5.bind(var7)(var3, var2);
                            var2 = _closure1_slot0;
                            var7 = 15;
                            var1 = var1[var7];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.trackShopPerf;
                            var1 = {};
                            var5 = _closure2_slot1;
                            var8 = var8 == var5;
                            var5 = undefined;
                            if (var8) {
                                _fun88658_ip = 190;
                                continue _fun88658
                            }
                        case 180:
                            var6 = _closure2_slot1;
                            var5 = var6.sessionId;
                        case 190:
                            var1.sessionId = var5;
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var7];
                            var5 = var6.bind(var0)(var5);
                            var5 = var5.CollectiblesShopPerfCheckpoint;
                            var5 = var5.SHOP_MOUNTED;
                            var1.checkpoint = var5;
                            var4 = _closure1_slot6;
                            var4 = var4.SHOP_ALL;
                            var1.tab = var4;
                            var4 = false;
                            var1.unpublishedCategoriesShown = var4;
                            var1.cacheDisabled = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var1, var2);
                var2 = _closure1_slot8;
                var11 = _closure1_slot0;
                var23 = _closure1_slot2;
                var0 = var23[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.AnalyticsLocationProvider;
                var0 = {};
                var0.value = var4;
                var4 = 16;
                var4 = var23[var4];
                var4 = var11.bind(var3)(var4);
                var5 = var4.CollectiblesAnalyticsProvider;
                var4 = {};
                var6 = {};
                var26 = var6;
                var25 = var7;
                var7 = copyDataProperties(var26, var25);
                var8 = var16.name;
                var7 = 'pageCategory';
                var6[var7] = var8;
                var4.newValue = var6;
                var8 = _closure1_slot9;
                var7 = _closure1_slot4;
                var6 = {};
                var9 = var19.rootContainer;
                var6.style = var9;
                var9 = 17;
                var9 = var23[var9];
                var9 = var11.bind(var3)(var9);
                var11 = var9.CollectiblesProgressiveImage;
                var9 = {};
                var12 = {};
                var12.uri = var24;
                var9.source = var12;
                var12 = _closure1_slot5;
                var12 = var12.absoluteFill;
                var9.style = var12;
                var11 = var2.bind(var3)(var11, var9);
                var9 = new Array(4);
                var9[0] = var11;
                var12 = _closure1_slot1;
                var11 = 18;
                var11 = var23[var11];
                var12 = var12.bind(var3)(var11);
                var11 = {};
                var11.logoUrl = var22;
                var22 = var18 == var21;
                var18 = undefined;
                if (var22) {
                    _fun88655_ip = 598;
                    continue _fun88655
                }
            case 583:
                var22 = var21.label;
                var21 = var22.toHexString;
                var18 = var21.bind(var22)();
            case 598:
                var11.buttonColor = var18;
                var11 = var2.bind(var3)(var12, var11);
                var9[1] = var11;
                var12 = _closure1_slot8;
                var11 = _closure1_slot1;
                var17 = _closure1_slot2;
                var10 = var17[var10];
                var10 = var11.bind(var3)(var10);
                var18 = var10.View;
                var10 = {};
                var21 = var19.border;
                var19 = new Array(2);
                var19[0] = var21;
                var19[1] = var20;
                var10.style = var19;
                var10 = var12.bind(var3)(var18, var10);
                var9[2] = var10;
                var10 = 19;
                var10 = var17[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var10.category = var16;
                var10.products = var15;
                var10.column = var14;
                var10.onScroll = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[3] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 20;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/CollectiblesShopViewAllCategoryItems.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3283, 660, 33, 1297, 671, 9543, 5726, 5579, 11476, 11470, 3720, 4081, 795, 4654, 11356, 11496, 11497, 11498, 2]);