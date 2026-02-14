// modules/user_profile/native/EditWishlistActionSheet.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var6 = var5[var9];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.ActivityIndicator;
    var _closure1_slot5 = var6;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.isCollectiblesWishlistItemRecord;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.TrackUserProfileWishlistActions;
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot12 = var6;
    var3 = var3.jsxs;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var9;
    var10 = 10;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.paddingHorizontal = var12;
    var3.container = var8;
    var8 = {
        'flex': 1,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_48;
    var8.paddingTop = var12;
    var3.loadingContainer = var8;
    var8 = {};
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var8.marginBottom = var12;
    var3.toggleRow = var8;
    var8 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'gap': 16
    };
    var3.itemsContainer = var8;
    var8 = {};
    var12 = 'relative';
    var8.position = var12;
    var3.itemWrapper = var8;
    var8 = {};
    var12 = 'absolute';
    var8.position = var12;
    var12 = var5[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var8.top = var12;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var8.right = var10;
    var8.zIndex = var9;
    var3.deleteButton = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot14 = var3;
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/native/EditWishlistActionSheet.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92602: for (var _fun92602_ip = 0;;) switch (_fun92602_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.wishlistId;
                var _closure2_slot0 = var5;
                var1 = var0.analyticsContext;
                var _closure2_slot1 = var1;
                var0 = var0.analyticsLocations;
                var _closure2_slot2 = var0;
                var3 = undefined;
                var _closure2_slot8 = var3;
                var2 = _closure1_slot14;
                var15 = var2.bind(var3)();
                var _closure2_slot3 = var15;
                var4 = _closure1_slot0;
                var6 = _closure1_slot2;
                var2 = 11;
                var7 = var6[var2];
                var11 = var4.bind(var3)(var7);
                var10 = var11.useStateFromStores;
                var7 = _closure1_slot7;
                var9 = new Array(1);
                var9[0] = var7;
                var8 = function() { // Environment: var16
                    var2 = _closure1_slot7;
                    var1 = var2.getWishlist;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var11 = var10.bind(var11)(var9, var8);
                var _closure2_slot4 = var11;
                var8 = var6[var2];
                var10 = var4.bind(var3)(var8);
                var9 = var10.useStateFromStores;
                var8 = new Array(1);
                var8[0] = var7;
                var7 = function() { // Environment: var16
                    var2 = _closure1_slot7;
                    var1 = var2.isFetching;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var13 = var9.bind(var10)(var8, var7);
                var2 = var6[var2];
                var7 = var4.bind(var3)(var2);
                var6 = var7.useStateFromStores;
                var2 = _closure1_slot9;
                var4 = new Array(2);
                var4[0] = var2;
                var2 = _closure1_slot10;
                var4[1] = var2;
                var2 = function() { // Environment: var16
                    _fun92605: for (var _fun92605_ip = 0;;) switch (_fun92605_ip) {
                        case 0:
                            var1 = _closure1_slot9;
                            var0 = var1.getCurrentUser;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var3 = var0 != var1;
                            if (!var3) {
                                _fun92605_ip = 53;
                                continue _fun92605
                            }
                        case 25:
                            var4 = _closure1_slot10;
                            var3 = var4.getWishlistSettings;
                            var2 = var1.id;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 53:
                            return var0;
                    }
                };
                var4 = var6.bind(var7)(var4, var2);
                var _closure2_slot5 = var4;
                var7 = _closure1_slot4;
                var6 = var7.useState;
                var2 = true;
                var8 = var6.bind(var7)(var2);
                var6 = _closure1_slot3;
                var2 = 2;
                var6 = var6.bind(var3)(var8, var2);
                var12 = 0;
                var23 = var6[var12];
                var _closure2_slot6 = var23;
                var2 = 1;
                var2 = var6[var2];
                var _closure2_slot7 = var2;
                var6 = var7.useEffect;
                var10 = null;
                var8 = var10 == var4;
                var2 = undefined;
                if (var8) {
                    _fun92602_ip = 268;
                    continue _fun92602
                }
            case 262:
                var2 = var4.visibility;
            case 268:
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var16
                    _fun92606: for (var _fun92606_ip = 0;;) switch (_fun92606_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var3 = null;
                            var4 = var3 == var0;
                            var0 = undefined;
                            var2 = undefined;
                            if (var4) {
                                _fun92606_ip = 30;
                                continue _fun92606
                            }
                        case 20:
                            var4 = _closure2_slot5;
                            var2 = var4.visibility;
                        case 30:
                            if (!(var3 != var2)) {
                                _fun92606_ip = 92;
                                continue _fun92606
                            }
                        case 34:
                            var2 = _closure2_slot7;
                            var1 = _closure2_slot5;
                            var3 = var1.visibility;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 12;
                            var1 = var5[var1];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.WishlistVisibility;
                            var1 = var1.PUBLIC;
                            var1 = var3 === var1;
                            var1 = var2.bind(var0)(var1);
                        case 92:
                            return var0;
                    }
                };
                var2 = var6.bind(var7)(var2, var4);
                var4 = _closure1_slot4;
                var7 = var4.useMemo;
                var6 = new Array(1);
                var6[0] = var11;
                var2 = function() { // Environment: var16
                    _fun92607: for (var _fun92607_ip = 0;;) switch (_fun92607_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var1 = null;
                            var3 = var1 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun92607_ip = 44;
                                continue _fun92607
                            }
                        case 18:
                            var2 = _closure2_slot4;
                            var4 = var2.items;
                            var3 = var4.filter;
                            var2 = _closure1_slot8;
                            var0 = var3.bind(var4)(var2);
                        case 44:
                            if (!(var1 == var0)) {
                                _fun92607_ip = 52;
                                continue _fun92607
                            }
                        case 48:
                            var0 = new Array(0);
                        case 52:
                            return var0;
                    }
                };
                var18 = var7.bind(var4)(var2, var6);
                var6 = var4.useCallback;
                var2 = new Array(5);
                var2[0] = var5;
                var2[1] = var23;
                var2[2] = var11;
                var2[3] = var1;
                var2[4] = var0;
                var1 = function() { // Environment: var16
                    _fun92608: for (var _fun92608_ip = 0;;) switch (_fun92608_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 12;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.WishlistVisibility;
                            if (var2) {
                                _fun92608_ip = 49;
                                continue _fun92608
                            }
                        case 41:
                            var7 = var1.PUBLIC;
                            _fun92608_ip = 55;
                            continue _fun92608;
                        case 49:
                            var7 = var1.PRIVATE;
                        case 55:
                            var2 = _closure2_slot7;
                            var6 = _closure2_slot6;
                            var1 = !var6;
                            var1 = var2.bind(var0)(var1);
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 13;
                            var1 = var3[var1];
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.updateWishlistVisibility;
                            var8 = _closure2_slot0;
                            var1 = var1.bind(var2)(var8, var7);
                            var2 = _closure1_slot0;
                            var1 = 14;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.trackUserProfileWishlistAction;
                            var1 = {};
                            var10 = _closure2_slot1;
                            var11 = var1;
                            var7 = copyDataProperties(var11, var10);
                            var9 = _closure2_slot2;
                            var7 = 'analyticsLocations';
                            var1[var7] = var9;
                            var7 = 'wishlistId';
                            var1[var7] = var8;
                            var5 = _closure1_slot11;
                            if (var6) {
                                _fun92608_ip = 179;
                                continue _fun92608
                            }
                        case 171:
                            var6 = var5.WISHLIST_TOGGLE_PUBLIC;
                            _fun92608_ip = 185;
                            continue _fun92608;
                        case 179:
                            var6 = var5.WISHLIST_TOGGLE_PRIVATE;
                        case 185:
                            var5 = 'action';
                            var1[var5] = var6;
                            var6 = _closure2_slot4;
                            var5 = null;
                            var6 = var5 == var6;
                            var5 = undefined;
                            if (var6) {
                                _fun92608_ip = 225;
                                continue _fun92608
                            }
                        case 209:
                            var6 = _closure2_slot4;
                            var4 = var6.getProductLines;
                            var5 = var4.bind(var6)();
                        case 225:
                            var4 = 'productLines';
                            var1[var4] = var5;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var22 = var6.bind(var4)(var1, var2);
                var2 = var4.useCallback;
                var1 = new Array(2);
                var1[0] = var5;
                var1[1] = var0;
                var0 = function(arg0) { // Environment: var16
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 13;
                    var1 = var1[var0];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var4 = var5.removeSkuFromWishlist;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot2;
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var1, var2);
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                _closure2_slot8 = var0;
                var2 = _closure1_slot12;
                var1 = _closure1_slot1;
                var28 = _closure1_slot2;
                var0 = 15;
                var0 = var28[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {
                    'scrollable': true,
                    'startExpanded': true
                };
                var27 = _closure1_slot0;
                var24 = 16;
                var4 = var28[var24];
                var4 = var27.bind(var3)(var4);
                var6 = var4.intl;
                var5 = var6.string;
                var4 = var28[var24];
                var4 = var27.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4["OEgx/4"];
                var4 = var5.bind(var6)(var4);
                var0.title = var4;
                var4 = 17;
                var4 = var28[var4];
                var4 = var27.bind(var3)(var4);
                var5 = var4.BottomSheetScrollView;
                var4 = {};
                var8 = _closure1_slot13;
                var7 = _closure1_slot6;
                var6 = {};
                var9 = var15.container;
                var6.style = var9;
                var9 = {};
                var17 = var15.toggleRow;
                var9.style = var17;
                var17 = 18;
                var17 = var28[var17];
                var17 = var27.bind(var3)(var17);
                var19 = var17.TableRowGroup;
                var17 = {};
                var20 = 19;
                var20 = var28[var20];
                var20 = var27.bind(var3)(var20);
                var21 = var20.TableSwitchRow;
                var20 = {};
                var25 = var28[var24];
                var25 = var27.bind(var3)(var25);
                var29 = var25.intl;
                var26 = var29.string;
                var25 = var28[var24];
                var25 = var27.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.b2nFyA;
                var25 = var26.bind(var29)(var25);
                var20.label = var25;
                var25 = var28[var24];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var28[var24];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.dw58pE;
                var24 = var25.bind(var26)(var24);
                var20.subLabel = var24;
                var20.value = var23;
                var20.onValueChange = var22;
                var20 = var2.bind(var3)(var21, var20);
                var17.children = var20;
                var17 = var2.bind(var3)(var19, var17);
                var9.children = var17;
                var17 = var2.bind(var3)(var7, var9);
                var9 = new Array(2);
                var9[0] = var17;
                if (!var13) {
                    _fun92602_ip = 732;
                    continue _fun92602
                }
            case 728:
                if (!(var10 != var11)) {
                    _fun92602_ip = 792;
                    continue _fun92602
                }
            case 732:
                var11 = var18.length;
                var10 = null;
                if (!(var12 !== var11)) {
                    _fun92602_ip = 790;
                    continue _fun92602
                }
            case 743:
                var13 = _closure1_slot12;
                var12 = _closure1_slot6;
                var11 = {};
                var17 = var15.itemsContainer;
                var11.style = var17;
                var17 = var18.map;
                var16 = function(arg0) { // Environment: var16
                    _fun92610: for (var _fun92610_ip = 0;;) switch (_fun92610_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var4 = _closure1_slot13;
                            var3 = _closure1_slot6;
                            var2 = {};
                            var8 = _closure2_slot3;
                            var1 = var8.itemWrapper;
                            var2.style = var1;
                            var7 = _closure1_slot12;
                            var15 = _closure1_slot1;
                            var16 = _closure1_slot2;
                            var1 = 20;
                            var5 = var16[var1];
                            var1 = undefined;
                            var6 = var15.bind(var1)(var5);
                            var5 = {};
                            var5.item = var0;
                            var9 = true;
                            var5.accessibilityHidden = var9;
                            var6 = var7.bind(var1)(var6, var5);
                            var5 = new Array(2);
                            var5[0] = var6;
                            var6 = {};
                            var8 = var8.deleteButton;
                            var6.style = var8;
                            var13 = _closure1_slot0;
                            var8 = 21;
                            var8 = var16[var8];
                            var8 = var13.bind(var1)(var8);
                            var9 = var8.IconButton;
                            var8 = {
                                'variant': 'primary-overlay',
                                'size': 'sm'
                            };
                            var14 = 'sm';
                            var12 = 22;
                            var12 = var16[var12];
                            var12 = var13.bind(var1)(var12);
                            var13 = var12.TrashIcon;
                            var12 = {};
                            var12.size = var14;
                            var14 = 10;
                            var14 = var16[var14];
                            var14 = var15.bind(var1)(var14);
                            var14 = var14.colors;
                            var14 = var14.ICON_FEEDBACK_CRITICAL;
                            var12.color = var14;
                            var12 = var7.bind(var1)(var13, var12);
                            var8.icon = var12;
                            var10 = function() {
                                var2 = _closure2_slot8;
                                var0 = _closure3_slot0;
                                var1 = var0.skuId;
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var8.onPress = var10;
                            var10 = var0.isOwned;
                            var14 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var11 = 16;
                            var12 = var16[var11];
                            var12 = var14.bind(var1)(var12);
                            var17 = var12.intl;
                            var15 = var17.formatToPlainString;
                            var12 = var16[var11];
                            var12 = var14.bind(var1)(var12);
                            var12 = var12.t;
                            var13 = var12["IBBF8/"];
                            var12 = {};
                            var18 = var0.skuName;
                            var12.productName = var18;
                            var15 = var15.bind(var17)(var13, var12);
                            if (var10) {
                                _fun92610_ip = 301;
                                continue _fun92610
                            }
                        case 296:
                            var10 = var15;
                            _fun92610_ip = 375;
                            continue _fun92610;
                        case 301:
                            var12 = var16[var11];
                            var12 = var14.bind(var1)(var12);
                            var13 = var12.intl;
                            var12 = var13.string;
                            var11 = var16[var11];
                            var11 = var14.bind(var1)(var11);
                            var11 = var11.t;
                            var11 = var11["6cfuDj"];
                            var14 = var12.bind(var13)(var11);
                            var11 = global;
                            var11 = var11.HermesInternal;
                            var13 = var11.concat;
                            var12 = '';
                            var11 = ', ';
                            var10 = var13.bind(var12)(var15, var11, var14);
                        case 375:
                            var8.accessibilityLabel = var10;
                            var8 = var7.bind(var1)(var9, var8);
                            var6.children = var8;
                            var6 = var7.bind(var1)(var3, var6);
                            var5[1] = var6;
                            var2.children = var5;
                            var0 = var0.skuId;
                            var0 = var4.bind(var1)(var3, var2, var0);
                            return var0;
                    }
                };
                var16 = var17.bind(var18)(var16);
                var11.children = var16;
                var10 = var13.bind(var3)(var12, var11);
            case 790:
                _fun92602_ip = 834;
                continue _fun92602;
            case 792:
                var13 = _closure1_slot12;
                var12 = _closure1_slot6;
                var11 = {};
                var15 = var15.loadingContainer;
                var11.style = var15;
                var15 = _closure1_slot5;
                var14 = {};
                var14 = var13.bind(var3)(var15, var14);
                var11.children = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 834:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 11344, 11345, 1621, 4666, 7065, 33, 1297, 671, 566, 12026, 11347, 7064, 7776, 1235, 4942, 5425, 5478, 12028, 8199, 3275, 2]);