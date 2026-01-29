// modules/collectibles/native/ProductDetailsActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var6 = var5[var9];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = var5[var9];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useCallback;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var9 = 5;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var9;
    var3.container = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot9 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/ProductDetailsActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ProductDetailsActionSheet, environment: var1
        _fun87542: for (var _fun87542_ip = 0;;) switch (_fun87542_ip) {
            case 0:
                var0 = arg0;
                var26 = var0.product;
                var _closure2_slot0 = var26;
                var0 = var0.analyticsLocations;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun87542_ip = 31;
                    continue _fun87542
                }
            case 27:
                var0 = new Array(0);
            case 31:
                var _closure2_slot1 = var0;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var1 = _closure1_slot9;
                var20 = var1.bind(var3)();
                var5 = _closure1_slot4;
                var1 = var5.useRef;
                var13 = null;
                var9 = var1.bind(var5)(var13);
                var1 = var5.useRef;
                var14 = var1.bind(var5)(var13);
                _closure2_slot2 = var14;
                var1 = var5.useState;
                var6 = 0;
                var1 = var1.bind(var5)(var6);
                var8 = _closure1_slot3;
                var7 = 2;
                var1 = var8.bind(var3)(var1, var7);
                var24 = var1[var6];
                var2 = 1;
                var15 = var1[var2];
                var17 = _closure1_slot1;
                var22 = _closure1_slot2;
                var4 = 10;
                var1 = var22[var4];
                var11 = var17.bind(var3)(var1);
                var1 = new Array(1);
                var31 = var1;
                var30 = var0;
                var29 = 0;
                var12 = arraySpread(var31, var30, var29);
                var16 = 11;
                var16 = var22[var16];
                var16 = var17.bind(var3)(var16);
                var16 = var16.COLLECTIBLES_SHOP_PROFILE_PREVIEW;
                var1[var12] = var16;
                var12 = var12 + var2;
                var1 = var11.bind(var3)(var1);
                var16 = var1.analyticsLocations;
                var11 = var5.useState;
                var1 = true;
                var1 = var11.bind(var5)(var1);
                var1 = var8.bind(var3)(var1, var7);
                var21 = var1[var6];
                var1 = var1[var2];
                _closure2_slot3 = var1;
                var11 = _closure1_slot0;
                var12 = 12;
                var12 = var22[var12];
                var18 = var11.bind(var3)(var12);
                var17 = var18.useEnableMobileVariants;
                var12 = 'ProductDetailsActionSheet';
                var12 = var17.bind(var18)(var12);
                var18 = var5.useState;
                var17 = 13;
                var17 = var22[var17];
                var19 = var11.bind(var3)(var17);
                var17 = var19.getDefaultVariantIndex;
                var17 = var17.bind(var19)(var26);
                var17 = var18.bind(var5)(var17);
                var17 = var8.bind(var3)(var17, var7);
                var25 = var17[var6];
                var23 = var17[var2];
                var17 = 14;
                var17 = var22[var17];
                var18 = var11.bind(var3)(var17);
                var17 = var18.getSelectedProduct;
                var17 = var17.bind(var18)(var26, var25);
                var18 = 15;
                var18 = var22[var18];
                var19 = var11.bind(var3)(var18);
                var18 = var19.usePreviewCollectibleProduct;
                var18 = var18.bind(var19)(var17, var21);
                var19 = {};
                var19.product = var26;
                var19.analyticsLocations = var16;
                var19.setShouldReset = var1;
                var18 = function(arg0) { // Original name: useHandlePreviewPress, environment: var27
                    _fun87543: for (var _fun87543_ip = 0;;) switch (_fun87543_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.product;
                            var _closure3_slot0 = var2;
                            var8 = var1.analyticsLocations;
                            var _closure3_slot1 = var8;
                            var10 = var1.setShouldReset;
                            var _closure3_slot2 = var10;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 6;
                            var6 = var5[var1];
                            var1 = undefined;
                            var7 = var4.bind(var1)(var6);
                            var6 = var7.useCurrentUser;
                            var9 = var6.bind(var7)();
                            var _closure3_slot3 = var9;
                            var7 = _closure1_slot4;
                            var6 = var7.useCallback;
                            var3 = new Array(4);
                            var3[0] = var2;
                            var3[1] = var10;
                            var9 = var9.id;
                            var3[2] = var9;
                            var3[3] = var8;
                            var0 = function() { // Environment: var0
                                var2 = _closure3_slot2;
                                var0 = undefined;
                                var1 = false;
                                var1 = var2.bind(var0)(var1);
                                var2 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var1 = 7;
                                var1 = var4[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = {};
                                var4 = _closure3_slot3;
                                var4 = var4.id;
                                var1.userId = var4;
                                var4 = true;
                                var1.isPreviewingChanges = var4;
                                var3 = _closure3_slot1;
                                var1.sourceAnalyticsLocations = var3;
                                var3 = function() { // Original name: onClose, environment: var3
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 8;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.openProductDetailsActionSheet;
                                    var0 = {};
                                    var4 = _closure3_slot0;
                                    var0.product = var4;
                                    var3 = _closure3_slot1;
                                    var0.analyticsLocations = var3;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var1.onClose = var3;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0 = var6.bind(var7)(var0, var3);
                            var3 = var2.type;
                            var2 = 9;
                            var2 = var5[var2];
                            var2 = var4.bind(var1)(var2);
                            var2 = var2.CollectiblesItemType;
                            var2 = var2.NAMEPLATE;
                            if (!(var3 === var2)) {
                                _fun87543_ip = 156;
                                continue _fun87543
                            }
                        case 154:
                            return var1;
                        case 156:
                            return var0;
                    }
                };
                var19 = var18.bind(var3)(var19);
                var21 = _closure1_slot5;
                var18 = new Array(2);
                var18[0] = var26;
                var18[1] = var1;
                var1 = function() { // Environment: var27
                    _fun87546: for (var _fun87546_ip = 0;;) switch (_fun87546_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var3 = var0.type;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 9;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var4.bind(var0)(var2);
                            var2 = var2.CollectiblesItemType;
                            var2 = var2.BUNDLE;
                            if (!(var3 === var2)) {
                                _fun87546_ip = 64;
                                continue _fun87546
                            }
                        case 53:
                            var2 = _closure2_slot3;
                            var1 = false;
                            var1 = var2.bind(var0)(var1);
                        case 64:
                            return var0;
                    }
                };
                var18 = var21.bind(var3)(var1, var18);
                var1 = var5.useState;
                var1 = var1.bind(var5)(var2);
                var1 = var8.bind(var3)(var1, var7);
                var7 = var1[var6];
                _closure2_slot4 = var7;
                var1 = var1[var2];
                _closure2_slot5 = var1;
                var6 = var5.useCallback;
                var2 = new Array(2);
                var2[0] = var7;
                var2[1] = var1;
                var1 = function(arg0) { // Environment: var27
                    _fun87547: for (var _fun87547_ip = 0;;) switch (_fun87547_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.nativeEvent;
                            var1 = var1.layout;
                            var3 = var1.height;
                            var2 = _closure2_slot4;
                            if (!(var3 !== var2)) {
                                _fun87547_ip = 59;
                                continue _fun87547
                            }
                        case 31:
                            var2 = _closure2_slot5;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var1 = var0.height;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 59:
                            var0 = undefined;
                            return var0;
                    }
                };
                var21 = var6.bind(var5)(var1, var2);
                var2 = var5.useEffect;
                var1 = new Array(2);
                var1[0] = var0;
                var0 = var26.skuId;
                var1[1] = var0;
                var0 = function() { // Environment: var27
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 16;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot6;
                    var2 = var1.OPEN_MODAL;
                    var1 = {};
                    var5 = 'Collectibles Shop Details Modal';
                    var1.type = var5;
                    var6 = _closure2_slot1;
                    var1.location_stack = var6;
                    var5 = _closure2_slot0;
                    var5 = var5.skuId;
                    var1.sku_id = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var2.bind(var5)(var0, var1);
                var2 = _closure1_slot7;
                var0 = 17;
                var0 = var22[var0];
                var0 = var11.bind(var3)(var0);
                var1 = var0.ThemeContextProvider;
                var0 = {};
                var4 = var22[var4];
                var4 = var11.bind(var3)(var4);
                var5 = var4.AnalyticsLocationProvider;
                var4 = {};
                var4.value = var16;
                var8 = _closure1_slot8;
                var6 = 18;
                var6 = var22[var6];
                var6 = var11.bind(var3)(var6);
                var7 = var6.BottomSheet;
                var6 = {
                    'scrollable': true,
                    'startExpanded': true
                };
                var27 = function() { // Original name: onExpand, environment: var27
                    _fun87549: for (var _fun87549_ip = 0;;) switch (_fun87549_ip) {
                        case 0:
                            var0 = _closure2_slot2;
                            var3 = var0.current;
                            var0 = null;
                            var1 = var0 == var3;
                            var0 = undefined;
                            if (var1) {
                                _fun87549_ip = 43;
                                continue _fun87549
                            }
                        case 23:
                            var2 = var3.scrollToEnd;
                            var1 = {};
                            var4 = true;
                            var1.animated = var4;
                            var0 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var6.onExpand = var27;
                var6.ref = var9;
                var9 = 19;
                var9 = var22[var9];
                var9 = var11.bind(var3)(var9);
                var11 = var9.BottomSheetScrollView;
                var9 = {};
                var9.onLayout = var21;
                var21 = false;
                var9.scrollsToTop = var21;
                var20 = var20.container;
                var9.style = var20;
                var20 = {};
                var20.bottom = var24;
                var9.scrollIndicatorInsets = var20;
                var9.ref = var14;
                if (var12) {
                    _fun87542_ip = 700;
                    continue _fun87542
                }
            case 672:
                var14 = _closure1_slot0;
                var20 = _closure1_slot2;
                var12 = 21;
                var12 = var20[var12];
                var12 = var14.bind(var3)(var12);
                var14 = var12.ProductDetailsActionSheetPreview;
                _fun87542_ip = 720;
                continue _fun87542;
            case 700:
                var20 = _closure1_slot1;
                var21 = _closure1_slot2;
                var12 = 20;
                var12 = var21[var12];
                var14 = var20.bind(var3)(var12);
            case 720:
                var12 = {};
                var12.product = var17;
                var12.handlePreviewPress = var19;
                var12 = var2.bind(var3)(var14, var12);
                var20 = new Array(4);
                var20[0] = var12;
                var12 = _closure1_slot7;
                var14 = _closure1_slot1;
                var19 = _closure1_slot2;
                var21 = 22;
                var21 = var19[var21];
                var22 = var14.bind(var3)(var21);
                var21 = {};
                var21.product = var17;
                var21 = var12.bind(var3)(var22, var21);
                var20[1] = var21;
                var21 = 23;
                var21 = var19[var21];
                var22 = var14.bind(var3)(var21);
                var21 = {};
                var21.product = var26;
                var21.selectedVariantIndex = var25;
                var21.onVariantSelect = var23;
                var21 = var12.bind(var3)(var22, var21);
                var20[2] = var21;
                var21 = 24;
                var21 = var19[var21];
                var22 = var14.bind(var3)(var21);
                var21 = {};
                var23 = 5;
                var23 = var19[var23];
                var23 = var14.bind(var3)(var23);
                var23 = var23.spacing;
                var23 = var23.PX_32;
                var23 = var24 + var23;
                var21.size = var23;
                var21 = var12.bind(var3)(var22, var21);
                var20[3] = var21;
                var9.children = var20;
                var11 = var8.bind(var3)(var11, var9);
                var9 = new Array(2);
                var9[0] = var11;
                var11 = _closure1_slot0;
                var10 = 25;
                var10 = var19[var10];
                var10 = var11.bind(var3)(var10);
                var11 = var10.NativePaymentContextProvider;
                var10 = {};
                var20 = new Array(0);
                var10.skuIDs = var20;
                var10.activeSubscription = var13;
                var13 = 26;
                var13 = var19[var13];
                var14 = var14.bind(var3)(var13);
                var13 = {};
                var13.onBuy = var18;
                var13.product = var17;
                var13.analyticsLocations = var16;
                var13.onHeightChange = var15;
                var13 = var12.bind(var3)(var14, var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var3)(var7, var6);
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 660, 33, 1297, 671, 9437, 7310, 11264, 3452, 5684, 5536, 5687, 11256, 4570, 9490, 795, 3118, 4887, 4889, 11266, 11280, 11281, 11287, 9219, 11215, 11288, 2]);