// modules/user_profile/native/UserProfileWishlistGrid.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function() {
        _fun70814: for (var _fun70814_ip = 0;;) switch (_fun70814_ip) {
            case 0:
                var0 = _closure1_slot11;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 9;
                var0 = var4[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useThemeContext;
                var0 = var0.bind(var2)();
                var2 = var0.theme;
                var0 = 10;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isThemeDark;
                var0 = var0.bind(var1)(var2);
                var9 = 'mobile-text-heading-primary';
                if (!var0) {
                    _fun70814_ip = 87;
                    continue _fun70814
                }
            case 81:
                var9 = 'always-white';
            case 87:
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 11;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openCollectiblesShopMobile;
                    var1 = {};
                    var6 = _closure1_slot1;
                    var5 = 12;
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
                    var4 = _closure1_slot7;
                    var4 = var4.FEATURED_PAGE;
                    var1.screen = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0 = new Array(0);
                var11 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot9;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var8.emptyState;
                var0.style = var4;
                var7 = _closure1_slot8;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var5 = 13;
                var4 = var16[var5];
                var4 = var15.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'variant': 'text-lg/semibold',
                    'color': null,
                    'accessibilityRole': 'header'
                };
                var4.color = var9;
                var12 = 14;
                var9 = var16[var12];
                var9 = var15.bind(var3)(var9);
                var14 = var9.intl;
                var10 = var14.string;
                var9 = var16[var12];
                var9 = var15.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.HGnLLT;
                var9 = var10.bind(var14)(var9);
                var4.children = var9;
                var6 = var7.bind(var3)(var6, var4);
                var4 = new Array(3);
                var4[0] = var6;
                var7 = _closure1_slot8;
                var5 = var16[var5];
                var5 = var15.bind(var3)(var5);
                var6 = var5.Text;
                var5 = {
                    'variant': 'text-sm/normal',
                    'color': 'mobile-text-heading-primary'
                };
                var9 = var8.emptyStateText;
                var5.style = var9;
                var9 = var16[var12];
                var9 = var15.bind(var3)(var9);
                var14 = var9.intl;
                var10 = var14.string;
                var9 = var16[var12];
                var9 = var15.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["/X1ny6"];
                var9 = var10.bind(var14)(var9);
                var5.children = var9;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var7 = _closure1_slot8;
                var6 = _closure1_slot4;
                var5 = {};
                var8 = var8.emptyStateCta;
                var5.style = var8;
                var10 = _closure1_slot8;
                var8 = 15;
                var8 = var16[var8];
                var8 = var15.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {
                    'size': 'md',
                    'variant': 'secondary'
                };
                var13 = _closure1_slot12;
                var8.icon = var13;
                var13 = var16[var12];
                var13 = var15.bind(var3)(var13);
                var14 = var13.intl;
                var13 = var14.string;
                var12 = var16[var12];
                var12 = var15.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.SDUwM0;
                var12 = var13.bind(var14)(var12);
                var8.text = var12;
                var8.onPress = var11;
                var8 = var10.bind(var3)(var9, var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[2] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
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
    var4 = var12.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.isCollectiblesWishlistItemRecord;
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot8 = var8;
    var7 = var4.jsxs;
    var _closure1_slot9 = var7;
    var4 = var4.Fragment;
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {
        'flexDirection': 'row',
        'justifyContent': 'space-between',
        'alignItems': 'center'
    };
    var13 = 'center';
    var11 = 7;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var10.marginBottom = var14;
    var4.headerRow = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10.gap = var14;
    var4.headerButtons = var10;
    var10 = {
        'flexDirection': 'row',
        'flexWrap': 'wrap',
        'gap': 16
    };
    var4.itemsContainer = var10;
    var10 = {};
    var10.alignItems = var13;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_48;
    var10.paddingVertical = var14;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_32;
    var10.paddingHorizontal = var14;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var10.gap = var14;
    var4.emptyState = var10;
    var10 = {};
    var10.textAlign = var13;
    var4.emptyStateText = var10;
    var10 = {};
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_8;
    var10.marginTop = var11;
    var4.emptyStateCta = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot11 = var4;
    var4 = 8;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var10 = var7.PlusMediumIcon;
    var7 = {};
    var9 = 'xs';
    var7.size = var9;
    var7 = var8.bind(var0)(var10, var7);
    var _closure1_slot12 = var7;
    var7 = {};
    var7 = var8.bind(var0)(var1, var7);
    var _closure1_slot13 = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.PlusMediumIcon;
    var4 = {};
    var4.size = var9;
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot14 = var4;
    var4 = 25;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileWishlistGrid.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun70816: for (var _fun70816_ip = 0;;) switch (_fun70816_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.wishlistId;
                var _closure2_slot0 = var10;
                var0 = var0.backgroundColor;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot11;
                var6 = undefined;
                var12 = var0.bind(var6)();
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 16;
                var0 = var8[var0];
                var1 = var7.bind(var6)(var0);
                var0 = var1.useUserProfileAnalyticsContext;
                var0 = var0.bind(var1)();
                var9 = var0.context;
                var _closure2_slot2 = var9;
                var1 = _closure1_slot1;
                var0 = 17;
                var0 = var8[var0];
                var0 = var1.bind(var6)(var0);
                var0 = var0.bind(var6)();
                var1 = var0.analyticsLocations;
                var _closure2_slot3 = var1;
                var5 = 18;
                var0 = var8[var5];
                var14 = var7.bind(var6)(var0);
                var13 = var14.useStateFromStores;
                var4 = _closure1_slot5;
                var3 = new Array(1);
                var3[0] = var4;
                var0 = function() { // Environment: var11
                    var2 = _closure1_slot5;
                    var1 = var2.getWishlist;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var13.bind(var14)(var3, var0);
                var _closure2_slot4 = var3;
                var0 = var8[var5];
                var15 = var7.bind(var6)(var0);
                var14 = var15.useStateFromStores;
                var13 = new Array(1);
                var13[0] = var4;
                var0 = function() { // Environment: var11
                    var2 = _closure1_slot5;
                    var1 = var2.isFetching;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var14.bind(var15)(var13, var0);
                var5 = var8[var5];
                var8 = var7.bind(var6)(var5);
                var7 = var8.useStateFromStores;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var11
                    var2 = _closure1_slot5;
                    var1 = var2.getError;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var7.bind(var8)(var5, var4);
                var13 = _closure1_slot3;
                var8 = var13.useMemo;
                var7 = new Array(1);
                var7[0] = var3;
                var5 = function() { // Environment: var11
                    _fun70820: for (var _fun70820_ip = 0;;) switch (_fun70820_ip) {
                        case 0:
                            var0 = _closure2_slot4;
                            var1 = null;
                            var3 = var1 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun70820_ip = 44;
                                continue _fun70820
                            }
                        case 18:
                            var2 = _closure2_slot4;
                            var4 = var2.items;
                            var3 = var4.filter;
                            var2 = _closure1_slot6;
                            var0 = var3.bind(var4)(var2);
                        case 44:
                            if (!(var1 == var0)) {
                                _fun70820_ip = 52;
                                continue _fun70820
                            }
                        case 48:
                            var0 = new Array(0);
                        case 52:
                            return var0;
                    }
                };
                var13 = var8.bind(var13)(var5, var7);
                var14 = _closure1_slot3;
                var8 = var14.useCallback;
                var7 = function(arg0) { // Environment: var11
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 11;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openCollectiblesShopMobile;
                    var1 = {};
                    var6 = _closure1_slot1;
                    var5 = 12;
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
                    var4 = _closure1_slot7;
                    var4 = var4.SHOP_ALL;
                    var1.screen = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var5 = new Array(0);
                var5 = var8.bind(var14)(var7, var5);
                var _closure2_slot5 = var5;
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var5 = new Array(3);
                var5[0] = var10;
                var5[1] = var9;
                var5[2] = var1;
                var1 = function() { // Environment: var11
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var3 = var1[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 21;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 20;
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
                var21 = var7.bind(var8)(var1, var5);
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var5 = function() { // Environment: var11
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 11;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openCollectiblesShopMobile;
                    var1 = {};
                    var6 = _closure1_slot1;
                    var5 = 12;
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
                    var4 = _closure1_slot7;
                    var4 = var4.FEATURED_PAGE;
                    var1.screen = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var1 = new Array(0);
                var19 = var7.bind(var8)(var5, var1);
                if (!var0) {
                    _fun70816_ip = 358;
                    continue _fun70816
                }
            case 349:
                var0 = null;
                if (!(var0 != var3)) {
                    _fun70816_ip = 943;
                    continue _fun70816
                }
            case 358:
                var1 = null;
                if (!(var1 == var4)) {
                    _fun70816_ip = 941;
                    continue _fun70816
                }
            case 367:
                if (!(var1 != var3)) {
                    _fun70816_ip = 939;
                    continue _fun70816
                }
            case 374:
                var4 = var13.length;
                var3 = 0;
                if (!(var3 !== var4)) {
                    _fun70816_ip = 933;
                    continue _fun70816
                }
            case 388:
                var22 = var13.length;
                var5 = _closure1_slot9;
                var4 = _closure1_slot10;
                var3 = {};
                var8 = _closure1_slot4;
                var7 = {};
                var9 = var12.headerRow;
                var7.style = var9;
                var14 = _closure1_slot8;
                var23 = _closure1_slot0;
                var24 = _closure1_slot2;
                var9 = 13;
                var9 = var24[var9];
                var9 = var23.bind(var6)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-muted'
                };
                var20 = 14;
                var15 = var24[var20];
                var15 = var23.bind(var6)(var15);
                var18 = var15.intl;
                var17 = var18.formatToPlainString;
                var15 = var24[var20];
                var15 = var23.bind(var6)(var15);
                var15 = var15.t;
                var16 = var15.r6Y1Lg;
                var15 = {};
                var15.count = var22;
                var15 = var17.bind(var18)(var16, var15);
                var9.children = var15;
                var10 = var14.bind(var6)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var15 = _closure1_slot9;
                var14 = _closure1_slot4;
                var10 = {};
                var16 = var12.headerButtons;
                var10.style = var16;
                var18 = _closure1_slot8;
                var16 = 15;
                var16 = var24[var16];
                var16 = var23.bind(var6)(var16);
                var17 = var16.Button;
                var16 = {
                    'size': 'sm',
                    'variant': 'secondary'
                };
                var27 = 'sm';
                var22 = _closure1_slot14;
                var16.icon = var22;
                var22 = var24[var20];
                var22 = var23.bind(var6)(var22);
                var26 = var22.intl;
                var25 = var26.string;
                var22 = var24[var20];
                var22 = var23.bind(var6)(var22);
                var22 = var22.t;
                var22 = var22.SDUwM0;
                var22 = var25.bind(var26)(var22);
                var16.text = var22;
                var16.onPress = var19;
                var17 = var18.bind(var6)(var17, var16);
                var16 = new Array(2);
                var16[0] = var17;
                var19 = _closure1_slot8;
                var17 = 22;
                var17 = var24[var17];
                var17 = var23.bind(var6)(var17);
                var18 = var17.IconButton;
                var17 = {
                    'size': 'sm',
                    'variant': 'secondary'
                };
                var26 = _closure1_slot8;
                var22 = 23;
                var22 = var24[var22];
                var22 = var23.bind(var6)(var22);
                var25 = var22.PencilIcon;
                var22 = {};
                var22.size = var27;
                var28 = _closure1_slot1;
                var27 = 7;
                var27 = var24[var27];
                var27 = var28.bind(var6)(var27);
                var27 = var27.colors;
                var27 = var27.CONTROL_SECONDARY_TEXT_DEFAULT;
                var22.color = var27;
                var22 = var26.bind(var6)(var25, var22);
                var17.icon = var22;
                var17.onPress = var21;
                var21 = var24[var20];
                var21 = var23.bind(var6)(var21);
                var22 = var21.intl;
                var21 = var22.string;
                var20 = var24[var20];
                var20 = var23.bind(var6)(var20);
                var20 = var20.t;
                var20 = var20.bt75uw;
                var20 = var21.bind(var22)(var20);
                var17.accessibilityLabel = var20;
                var17 = var19.bind(var6)(var18, var17);
                var16[1] = var17;
                var10.children = var16;
                var10 = var15.bind(var6)(var14, var10);
                var9[1] = var10;
                var7.children = var9;
                var8 = var5.bind(var6)(var8, var7);
                var7 = new Array(2);
                var7[0] = var8;
                var10 = _closure1_slot8;
                var9 = _closure1_slot4;
                var8 = {};
                var12 = var12.itemsContainer;
                var8.style = var12;
                var12 = var13.map;
                var11 = function(arg0) { // Environment: var11
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot8;
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 24;
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
                var11 = var12.bind(var13)(var11);
                var8.children = var11;
                var8 = var10.bind(var6)(var9, var8);
                var7[1] = var8;
                var3.children = var7;
                var3 = var5.bind(var6)(var4, var3);
                return var3;
            case 933:
                var2 = _closure1_slot13;
                return var2;
            case 939:
                return var1;
            case 941:
                return var1;
            case 943:
                return var0;
        }
    };
    var2.default = var3;
    var2.WishlistEmptyState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8809, 8810, 3284, 33, 1297, 671, 8812, 3161, 3207, 4603, 5639, 3938, 1234, 4090, 7071, 5785, 566, 3279, 8814, 1307, 7585, 7584, 8823, 2]);