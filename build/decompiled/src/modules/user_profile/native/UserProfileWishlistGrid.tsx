// modules/user_profile/native/UserProfileWishlistGrid.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function arg0() {
        _fun92584: for (var _fun92584_ip = 0;;) switch (_fun92584_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.shouldShowMRNotice;
                var0 = _closure1_slot14;
                var3 = undefined;
                var12 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 11;
                var0 = var4[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useThemeContext;
                var0 = var0.bind(var2)();
                var2 = var0.theme;
                var0 = 12;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isThemeDark;
                var0 = var0.bind(var1)(var2);
                var13 = 'mobile-text-heading-primary';
                if (!var0) {
                    _fun92584_ip = 96;
                    continue _fun92584
                }
            case 90:
                var13 = 'always-white';
            case 96:
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 13;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openCollectiblesShopMobile;
                    var1 = {};
                    var6 = _closure1_slot1;
                    var5 = 14;
                    var8 = var7[var5];
                    var8 = var6.bind(var0)(var8);
                    var8 = var8.USER_PROFILE_WISHLIST;
                    var1.analyticsSource = var8;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var6 = var5.USER_PROFILE_WISHLIST;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var1.analyticsLocations = var5;
                    var4 = _closure1_slot10;
                    var4 = var4.FEATURED_PAGE;
                    var1.screen = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var18 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot12;
                var1 = _closure1_slot13;
                var0 = {};
                var6 = _closure1_slot4;
                var4 = {};
                var7 = var12.emptyState;
                var4.style = var7;
                var9 = _closure1_slot11;
                var22 = _closure1_slot0;
                var19 = _closure1_slot2;
                var10 = 15;
                var7 = var19[var10];
                var7 = var22.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-lg/semibold',
                    'color': null,
                    'accessibilityRole': 'header'
                };
                var7.color = var13;
                var17 = 16;
                var13 = var19[var17];
                var13 = var22.bind(var3)(var13);
                var15 = var13.intl;
                var14 = var15.string;
                var13 = var19[var17];
                var13 = var22.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.HGnLLT;
                var13 = var14.bind(var15)(var13);
                var7.children = var13;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(3);
                var7[0] = var8;
                var13 = _closure1_slot11;
                var8 = var19[var10];
                var8 = var22.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-sm/normal',
                    'color': 'mobile-text-heading-primary'
                };
                var14 = var12.emptyStateText;
                var8.style = var14;
                var14 = var19[var17];
                var14 = var22.bind(var3)(var14);
                var16 = var14.intl;
                var15 = var16.string;
                var14 = var19[var17];
                var14 = var22.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14["/X1ny6"];
                var14 = var15.bind(var16)(var14);
                var8.children = var14;
                var8 = var13.bind(var3)(var9, var8);
                var7[1] = var8;
                var13 = _closure1_slot11;
                var9 = _closure1_slot4;
                var8 = {};
                var14 = var12.emptyStateCta;
                var8.style = var14;
                var16 = _closure1_slot11;
                var14 = 17;
                var14 = var19[var14];
                var14 = var22.bind(var3)(var14);
                var15 = var14.Button;
                var14 = {
                    'size': 'md',
                    'variant': 'secondary'
                };
                var23 = _closure1_slot11;
                var20 = 18;
                var20 = var19[var20];
                var20 = var22.bind(var3)(var20);
                var21 = var20.PlusMediumIcon;
                var20 = {};
                var24 = 'xs';
                var20.size = var24;
                var20 = var23.bind(var3)(var21, var20);
                var14.icon = var20;
                var20 = var19[var17];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var19[var17];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19.SDUwM0;
                var19 = var20.bind(var21)(var19);
                var14.text = var19;
                var14.onPress = var18;
                var14 = var16.bind(var3)(var15, var14);
                var8.children = var14;
                var8 = var13.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var6 = var2.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var6;
                if (!var5) {
                    _fun92584_ip = 754;
                    continue _fun92584
                }
            case 562:
                var8 = _closure1_slot12;
                var7 = _closure1_slot4;
                var6 = {};
                var13 = var12.disclaimer;
                var9 = new Array(2);
                var9[0] = var13;
                var12 = var12.disclaimerBottom;
                var9[1] = var12;
                var6.style = var9;
                var14 = _closure1_slot11;
                var16 = _closure1_slot0;
                var13 = _closure1_slot2;
                var9 = 19;
                var9 = var13[var9];
                var9 = var16.bind(var3)(var9);
                var12 = var9.CircleInformationIcon;
                var9 = {};
                var15 = 'sm';
                var9.size = var15;
                var12 = var14.bind(var3)(var12, var9);
                var9 = new Array(2);
                var9[0] = var12;
                var12 = _closure1_slot11;
                var10 = var13[var10];
                var10 = var16.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-subtle'
                };
                var14 = var13[var17];
                var14 = var16.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var13[var17];
                var13 = var16.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.G82rnT;
                var13 = var14.bind(var15)(var13);
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 754:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot15 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg3;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.View;
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.isCollectiblesWishlistItemRecord;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.isSKUWishlistItemRecord;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var11.bind(var0)(var4);
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot11 = var7;
    var7 = var4.jsxs;
    var _closure1_slot12 = var7;
    var4 = var4.Fragment;
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var12 = 'center';
    var10 = 10;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_16;
    var9.marginBottom = var13;
    var4.headerRow = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.gap = var13;
    var4.headerButtons = var9;
    var9 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'gap': 16
    };
    var4.itemsContainer = var9;
    var9 = {};
    var9.alignItems = var12;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_48;
    var9.paddingVertical = var13;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_32;
    var9.paddingHorizontal = var13;
    var13 = var6[var10];
    var13 = var11.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_8;
    var9.gap = var13;
    var4.emptyState = var9;
    var9 = {};
    var9.textAlign = var12;
    var4.emptyStateText = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.marginTop = var12;
    var4.emptyStateCta = var9;
    var9 = {
        'padding': null,
        'gap': null,
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': null,
        'borderWidth': 1
    };
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9.padding = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_4;
    var9.gap = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.sm;
    var9.borderRadius = var12;
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_SUBTLE;
    var9.borderColor = var12;
    var4.disclaimer = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var0)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9.marginBottom = var12;
    var4.disclaimerTop = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_16;
    var9.marginTop = var10;
    var4.disclaimerBottom = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 30;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileWishlistGrid.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun92586: for (var _fun92586_ip = 0;;) switch (_fun92586_ip) {
            case 0:
                var0 = arg0;
                var19 = var0.wishlistId;
                var _closure2_slot0 = var19;
                var0 = var0.backgroundColor;
                var _closure2_slot1 = var0;
                var4 = undefined;
                var _closure2_slot5 = var4;
                var0 = _closure1_slot14;
                var14 = var0.bind(var4)();
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 20;
                var2 = var0[var2];
                var3 = var5.bind(var4)(var2);
                var2 = var3.useUserProfileAnalyticsContext;
                var2 = var2.bind(var3)();
                var17 = var2.context;
                var _closure2_slot2 = var17;
                var3 = _closure1_slot1;
                var2 = 21;
                var2 = var0[var2];
                var2 = var3.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var10 = var2.analyticsLocations;
                var _closure2_slot3 = var10;
                var12 = 22;
                var2 = var0[var12];
                var8 = var5.bind(var4)(var2);
                var7 = var8.useStateFromStores;
                var3 = _closure1_slot5;
                var6 = new Array(1);
                var6[0] = var3;
                var2 = function() { // Environment: var11
                    var2 = _closure1_slot5;
                    var1 = var2.getWishlist;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var7.bind(var8)(var6, var2);
                var _closure2_slot4 = var2;
                var6 = var0[var12];
                var9 = var5.bind(var4)(var6);
                var8 = var9.useStateFromStores;
                var7 = new Array(1);
                var7[0] = var3;
                var6 = function() { // Environment: var11
                    var2 = _closure1_slot5;
                    var1 = var2.isFetching;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var6 = var8.bind(var9)(var7, var6);
                var7 = var0[var12];
                var9 = var5.bind(var4)(var7);
                var8 = var9.useStateFromStores;
                var7 = new Array(1);
                var7[0] = var3;
                var3 = function() { // Environment: var11
                    var2 = _closure1_slot5;
                    var1 = var2.getError;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var8.bind(var9)(var7, var3);
                var0 = var0[var12];
                var9 = var5.bind(var4)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var0;
                var5 = new Array(2);
                var5[0] = var2;
                var5[1] = var19;
                var0 = function() { // Environment: var11
                    _fun92590: for (var _fun92590_ip = 0;;) switch (_fun92590_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun92590_ip = 48;
                                continue _fun92590
                            }
                        case 16:
                            var4 = _closure1_slot9;
                            var3 = var4.getWishlistSettings;
                            var2 = _closure2_slot4;
                            var2 = var2.userId;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 48:
                            return var0;
                    }
                };
                var5 = var8.bind(var9)(var7, var0, var5);
                var0 = null;
                var7 = var0 == var5;
                var9 = undefined;
                if (var7) {
                    _fun92586_ip = 295;
                    continue _fun92586
                }
            case 289:
                var9 = var5.visibility;
            case 295:
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var7 = 23;
                var7 = var5[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.WishlistVisibility;
                var7 = var7.PRIVATE;
                var7 = var9 === var7;
                var5 = var5[var12];
                var13 = var8.bind(var4)(var5);
                var9 = var13.useStateFromStores;
                var5 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var5;
                var5 = function() { // Environment: var11
                    var1 = _closure1_slot8;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var5 = var9.bind(var13)(var8, var5);
                var9 = var0 == var5;
                var8 = undefined;
                if (var9) {
                    _fun92586_ip = 384;
                    continue _fun92586
                }
            case 379:
                var8 = var5.id;
            case 384:
                var9 = var0 == var2;
                var5 = undefined;
                if (var9) {
                    _fun92586_ip = 398;
                    continue _fun92586
                }
            case 393:
                var5 = var2.userId;
            case 398:
                var8 = var8 === var5;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var12];
                var15 = var9.bind(var4)(var5);
                var13 = var15.useStateFromStores;
                var5 = _closure1_slot8;
                var12 = new Array(1);
                var12[0] = var5;
                var9 = new Array(1);
                var9[0] = var2;
                var5 = function() { // Environment: var11
                    _fun92592: for (var _fun92592_ip = 0;;) switch (_fun92592_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun92592_ip = 43;
                                continue _fun92592
                            }
                        case 16:
                            var3 = _closure1_slot8;
                            var2 = var3.getUser;
                            var1 = _closure2_slot4;
                            var1 = var1.userId;
                            var0 = var2.bind(var3)(var1);
                        case 43:
                            return var0;
                    }
                };
                var5 = var13.bind(var15)(var12, var5, var9);
                var12 = var0 == var5;
                var9 = undefined;
                if (var12) {
                    _fun92586_ip = 473;
                    continue _fun92586
                }
            case 467:
                var9 = var5.nsfwAllowed;
            case 473:
                var5 = false;
                var9 = var5 === var9;
                var15 = _closure1_slot0;
                var5 = _closure1_slot2;
                var20 = 16;
                var12 = var5[var20];
                var12 = var15.bind(var4)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var5 = var5[var20];
                var5 = var15.bind(var4)(var5);
                var5 = var5.t;
                if (var7) {
                    _fun92586_ip = 541;
                    continue _fun92586
                }
            case 526:
                var15 = var5.d78ChW;
                var18 = var12.bind(var13)(var15);
                _fun92586_ip = 554;
                continue _fun92586;
            case 541:
                var5 = var5.RX7D9h;
                var18 = var12.bind(var13)(var5);
            case 554:
                var15 = _closure1_slot3;
                var13 = var15.useMemo;
                var12 = new Array(1);
                var12[0] = var2;
                var5 = function() { // Environment: var11
                    _fun92593: for (var _fun92593_ip = 0;;) switch (_fun92593_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var1 = null;
                            var3 = var1 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun92593_ip = 44;
                                continue _fun92593
                            }
                        case 18:
                            var2 = _closure2_slot4;
                            var4 = var2.items;
                            var3 = var4.filter;
                            var2 = _closure1_slot6;
                            var0 = var3.bind(var4)(var2);
                        case 44:
                            if (!(var1 == var0)) {
                                _fun92593_ip = 52;
                                continue _fun92593
                            }
                        case 48:
                            var0 = new Array(0);
                        case 52:
                            return var0;
                    }
                };
                var15 = var13.bind(var15)(var5, var12);
                var16 = _closure1_slot3;
                var13 = var16.useMemo;
                var12 = new Array(1);
                var12[0] = var2;
                var5 = function() { // Environment: var11
                    _fun92594: for (var _fun92594_ip = 0;;) switch (_fun92594_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = null;
                            var3 = var0 == var1;
                            var1 = undefined;
                            if (var3) {
                                _fun92594_ip = 45;
                                continue _fun92594
                            }
                        case 18:
                            var2 = _closure2_slot4;
                            var4 = var2.items;
                            var3 = var4.some;
                            var2 = _closure1_slot7;
                            var1 = var3.bind(var4)(var2);
                        case 45:
                            var0 = var0 != var1;
                            if (!var0) {
                                _fun92594_ip = 55;
                                continue _fun92594
                            }
                        case 52:
                            var0 = var1;
                        case 55:
                            return var0;
                    }
                };
                var5 = var13.bind(var16)(var5, var12);
                var21 = _closure1_slot3;
                var16 = var21.useCallback;
                var13 = function(arg0) { // Environment: var11
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 13;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openCollectiblesShopMobile;
                    var1 = {};
                    var6 = _closure1_slot1;
                    var5 = 14;
                    var8 = var7[var5];
                    var8 = var6.bind(var0)(var8);
                    var9 = var8.USER_PROFILE_WISHLIST;
                    var8 = new Array(1);
                    var8[0] = var9;
                    var1.analyticsLocations = var8;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var5 = var5.USER_PROFILE_WISHLIST;
                    var1.analyticsSource = var5;
                    var5 = arg0;
                    var1.initialProductSkuId = var5;
                    var4 = _closure1_slot10;
                    var4 = var4.SHOP_ALL;
                    var1.screen = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var12 = new Array(0);
                var12 = var16.bind(var21)(var13, var12);
                _closure2_slot5 = var12;
                var16 = _closure1_slot3;
                var13 = var16.useCallback;
                var12 = new Array(3);
                var12[0] = var19;
                var12[1] = var17;
                var12[2] = var10;
                var10 = function() { // Environment: var11
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 24;
                    var3 = var1[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 26;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 25;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var10 = var3.bind(var0)(var2, var1);
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3.wishlistId = var2;
                    var2 = _closure2_slot2;
                    var3.analyticsContext = var2;
                    var1 = _closure2_slot3;
                    var3.analyticsLocations = var1;
                    var9 = 'EditWishlistActionSheet';
                    var7 = 'stack';
                    var11 = var6;
                    var8 = var3;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var0;
                };
                var26 = var13.bind(var16)(var10, var12);
                var16 = _closure1_slot3;
                var13 = var16.useCallback;
                var12 = function() { // Environment: var11
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 13;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openCollectiblesShopMobile;
                    var1 = {};
                    var6 = _closure1_slot1;
                    var5 = 14;
                    var8 = var7[var5];
                    var8 = var6.bind(var0)(var8);
                    var8 = var8.USER_PROFILE_WISHLIST;
                    var1.analyticsSource = var8;
                    var5 = var7[var5];
                    var5 = var6.bind(var0)(var5);
                    var6 = var5.USER_PROFILE_WISHLIST;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var1.analyticsLocations = var5;
                    var4 = _closure1_slot10;
                    var4 = var4.FEATURED_PAGE;
                    var1.screen = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var10 = new Array(0);
                var24 = var13.bind(var16)(var12, var10);
                if (!var6) {
                    _fun92586_ip = 718;
                    continue _fun92586
                }
            case 711:
                if (!(var0 != var2)) {
                    _fun92586_ip = 1727;
                    continue _fun92586
                }
            case 718:
                if (!(var0 == var3)) {
                    _fun92586_ip = 1725;
                    continue _fun92586
                }
            case 725:
                if (!(var0 != var2)) {
                    _fun92586_ip = 1723;
                    continue _fun92586
                }
            case 732:
                var3 = var15.length;
                var2 = 0;
                if (!(var2 !== var3)) {
                    _fun92586_ip = 1700;
                    continue _fun92586
                }
            case 746:
                var23 = var15.length;
                var6 = _closure1_slot12;
                var3 = _closure1_slot13;
                var2 = {};
                if (!var8) {
                    _fun92586_ip = 773;
                    continue _fun92586
                }
            case 764:
                if (var7) {
                    _fun92586_ip = 770;
                    continue _fun92586
                }
            case 767:
                var7 = var9;
            case 770:
                var8 = var7;
            case 773:
                if (!var8) {
                    _fun92586_ip = 930;
                    continue _fun92586
                }
            case 779:
                var10 = _closure1_slot12;
                var9 = _closure1_slot4;
                var7 = {};
                var13 = var14.disclaimer;
                var12 = new Array(2);
                var12[0] = var13;
                var13 = var14.disclaimerTop;
                var12[1] = var13;
                var7.style = var12;
                var17 = _closure1_slot11;
                var16 = _closure1_slot0;
                var19 = _closure1_slot2;
                var12 = 19;
                var12 = var19[var12];
                var12 = var16.bind(var4)(var12);
                var13 = var12.CircleInformationIcon;
                var12 = {};
                var21 = 'sm';
                var12.size = var21;
                var13 = var17.bind(var4)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var17 = _closure1_slot11;
                var13 = 15;
                var13 = var19[var13];
                var13 = var16.bind(var4)(var13);
                var16 = var13.Text;
                var13 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-subtle'
                };
                var13.children = var18;
                var13 = var17.bind(var4)(var16, var13);
                var12[1] = var13;
                var7.children = var12;
                var8 = var10.bind(var4)(var9, var7);
            case 930:
                var7 = new Array(4);
                var7[0] = var8;
                var10 = _closure1_slot12;
                var9 = _closure1_slot4;
                var8 = {};
                var12 = var14.headerRow;
                var8.style = var12;
                var17 = _closure1_slot11;
                var28 = _closure1_slot0;
                var25 = _closure1_slot2;
                var13 = 15;
                var12 = var25[var13];
                var12 = var28.bind(var4)(var12);
                var16 = var12.Text;
                var12 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-muted'
                };
                var18 = var25[var20];
                var18 = var28.bind(var4)(var18);
                var22 = var18.intl;
                var21 = var22.formatToPlainString;
                var18 = var25[var20];
                var18 = var28.bind(var4)(var18);
                var18 = var18.t;
                var19 = var18.r6Y1Lg;
                var18 = {};
                var18.count = var23;
                var18 = var21.bind(var22)(var19, var18);
                var12.children = var18;
                var16 = var17.bind(var4)(var16, var12);
                var12 = new Array(2);
                var12[0] = var16;
                var19 = _closure1_slot12;
                var18 = _closure1_slot4;
                var16 = {};
                var17 = var14.headerButtons;
                var16.style = var17;
                var23 = _closure1_slot11;
                var17 = 17;
                var17 = var25[var17];
                var17 = var28.bind(var4)(var17);
                var22 = var17.Button;
                var21 = {
                    'size': 'sm',
                    'variant': 'secondary'
                };
                var17 = 'sm';
                var30 = _closure1_slot11;
                var27 = 18;
                var27 = var25[var27];
                var27 = var28.bind(var4)(var27);
                var29 = var27.PlusMediumIcon;
                var27 = {};
                var31 = 'xs';
                var27.size = var31;
                var27 = var30.bind(var4)(var29, var27);
                var21.icon = var27;
                var27 = var25[var20];
                var27 = var28.bind(var4)(var27);
                var30 = var27.intl;
                var29 = var30.string;
                var27 = var25[var20];
                var27 = var28.bind(var4)(var27);
                var27 = var27.t;
                var27 = var27.SDUwM0;
                var27 = var29.bind(var30)(var27);
                var21.text = var27;
                var21.onPress = var24;
                var22 = var23.bind(var4)(var22, var21);
                var21 = new Array(2);
                var21[0] = var22;
                var24 = _closure1_slot11;
                var22 = 27;
                var22 = var25[var22];
                var22 = var28.bind(var4)(var22);
                var23 = var22.IconButton;
                var22 = {
                    'size': 'sm',
                    'variant': 'secondary'
                };
                var30 = _closure1_slot11;
                var27 = 28;
                var27 = var25[var27];
                var27 = var28.bind(var4)(var27);
                var29 = var27.PencilIcon;
                var27 = {};
                var27.size = var17;
                var32 = _closure1_slot1;
                var31 = 10;
                var31 = var25[var31];
                var31 = var32.bind(var4)(var31);
                var31 = var31.colors;
                var31 = var31.CONTROL_SECONDARY_TEXT_DEFAULT;
                var27.color = var31;
                var27 = var30.bind(var4)(var29, var27);
                var22.icon = var27;
                var22.onPress = var26;
                var26 = var25[var20];
                var26 = var28.bind(var4)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var25 = var25[var20];
                var25 = var28.bind(var4)(var25);
                var25 = var25.t;
                var25 = var25.bt75uw;
                var25 = var26.bind(var27)(var25);
                var22.accessibilityLabel = var25;
                var22 = var24.bind(var4)(var23, var22);
                var21[1] = var22;
                var16.children = var21;
                var16 = var19.bind(var4)(var18, var16);
                var12[1] = var16;
                var8.children = var12;
                var8 = var10.bind(var4)(var9, var8);
                var7[1] = var8;
                var10 = _closure1_slot11;
                var9 = _closure1_slot4;
                var8 = {};
                var12 = var14.itemsContainer;
                var8.style = var12;
                var12 = var15.map;
                var11 = function(arg0) { // Environment: var11
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot11;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 29;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1.item = var0;
                    var5 = function() {
                        var2 = _closure2_slot5;
                        var0 = _closure3_slot0;
                        var1 = var0.skuId;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onPress = var5;
                    var5 = _closure2_slot1;
                    var1.backgroundColor = var5;
                    var0 = var0.skuId;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var11 = var12.bind(var15)(var11);
                var8.children = var11;
                var8 = var10.bind(var4)(var9, var8);
                var7[2] = var8;
                var8 = var5;
                if (!var8) {
                    _fun92586_ip = 1684;
                    continue _fun92586
                }
            case 1496:
                var11 = _closure1_slot12;
                var10 = _closure1_slot4;
                var9 = {};
                var15 = var14.disclaimer;
                var12 = new Array(2);
                var12[0] = var15;
                var14 = var14.disclaimerBottom;
                var12[1] = var14;
                var9.style = var12;
                var15 = _closure1_slot11;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var12 = 19;
                var12 = var16[var12];
                var12 = var19.bind(var4)(var12);
                var14 = var12.CircleInformationIcon;
                var12 = {};
                var12.size = var17;
                var14 = var15.bind(var4)(var14, var12);
                var12 = new Array(2);
                var12[0] = var14;
                var15 = _closure1_slot11;
                var13 = var16[var13];
                var13 = var19.bind(var4)(var13);
                var14 = var13.Text;
                var13 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-subtle'
                };
                var17 = var16[var20];
                var17 = var19.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var20];
                var16 = var19.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.G82rnT;
                var16 = var17.bind(var18)(var16);
                var13.children = var16;
                var13 = var15.bind(var4)(var14, var13);
                var12[1] = var13;
                var9.children = var12;
                var8 = var11.bind(var4)(var10, var9);
            case 1684:
                var7[3] = var8;
                var2.children = var7;
                var2 = var6.bind(var4)(var3, var2);
                return var2;
            case 1700:
                var3 = _closure1_slot11;
                var2 = _closure1_slot15;
                var1 = {};
                var1.shouldShowMRNotice = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 1723:
                return var0;
            case 1725:
                return var0;
            case 1727:
                return var0;
        }
    };
    var2.default = var3;
    var2.WishlistEmptyState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 11344, 11345, 11349, 1621, 4666, 3289, 33, 1297, 671, 3166, 3212, 4605, 5641, 3940, 1235, 4092, 11917, 3272, 7063, 5787, 566, 12026, 3284, 12027, 1307, 8199, 8977, 12028, 2]);