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
    var1 = function() {
        _fun103724: for (var _fun103724_ip = 0;;) switch (_fun103724_ip) {
            case 0:
                var0 = _closure1_slot10;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var4 = _closure1_slot2;
                var0 = 8;
                var0 = var4[var0];
                var2 = var1.bind(var3)(var0);
                var0 = var2.useThemeContext;
                var0 = var0.bind(var2)();
                var2 = var0.theme;
                var0 = 9;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isThemeDark;
                var0 = var0.bind(var1)(var2);
                var9 = 'mobile-text-heading-primary';
                if (!var0) {
                    _fun103724_ip = 87;
                    continue _fun103724
                }
            case 81:
                var9 = 'always-white';
            case 87:
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 10;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openCollectiblesShopMobile;
                    var1 = {};
                    var6 = _closure1_slot1;
                    var5 = 11;
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
                var5 = 12;
                var4 = var16[var5];
                var4 = var15.bind(var3)(var4);
                var6 = var4.Text;
                var4 = {
                    'variant': 'text-lg/semibold',
                    'color': null,
                    'accessibilityRole': 'header'
                };
                var4.color = var9;
                var12 = 13;
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
                var8 = 14;
                var8 = var16[var8];
                var8 = var15.bind(var3)(var8);
                var9 = var8.Button;
                var8 = {
                    'size': 'md',
                    'variant': 'secondary'
                };
                var17 = _closure1_slot8;
                var13 = 15;
                var13 = var16[var13];
                var13 = var15.bind(var3)(var13);
                var14 = var13.PlusMediumIcon;
                var13 = {};
                var18 = 'xs';
                var13.size = var18;
                var13 = var17.bind(var3)(var14, var13);
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
    var _closure1_slot11 = var1;
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
    var4 = var4.CollectiblesMobileShopScreen;
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var4 = var4.jsxs;
    var _closure1_slot9 = var4;
    var4 = 6;
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
    var10 = 7;
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
        'gap': 16,
        'justifyContent': 'center'
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
    var10 = var6[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_8;
    var9.marginTop = var10;
    var4.emptyStateCta = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot10 = var4;
    var4 = 26;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/native/UserProfileWishlistGrid.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun103726: for (var _fun103726_ip = 0;;) switch (_fun103726_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.wishlistId;
                var _closure2_slot0 = var10;
                var0 = var0.backgroundColor;
                var _closure2_slot1 = var0;
                var0 = _closure1_slot10;
                var5 = undefined;
                var12 = var0.bind(var5)();
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 16;
                var0 = var8[var0];
                var1 = var7.bind(var5)(var0);
                var0 = var1.useCardLayout;
                var0 = var0.bind(var1)();
                var0 = var0.cardWidth;
                var _closure2_slot2 = var0;
                var0 = 17;
                var0 = var8[var0];
                var1 = var7.bind(var5)(var0);
                var0 = var1.useUserProfileAnalyticsContext;
                var0 = var0.bind(var1)();
                var9 = var0.context;
                var _closure2_slot3 = var9;
                var1 = _closure1_slot1;
                var0 = 18;
                var0 = var8[var0];
                var0 = var1.bind(var5)(var0);
                var0 = var0.bind(var5)();
                var1 = var0.analyticsLocations;
                var _closure2_slot4 = var1;
                var6 = 19;
                var0 = var8[var6];
                var14 = var7.bind(var5)(var0);
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
                var _closure2_slot5 = var3;
                var0 = var8[var6];
                var15 = var7.bind(var5)(var0);
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
                var6 = var8[var6];
                var8 = var7.bind(var5)(var6);
                var7 = var8.useStateFromStores;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var11
                    var2 = _closure1_slot5;
                    var1 = var2.getError;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var7.bind(var8)(var6, var4);
                var13 = _closure1_slot3;
                var8 = var13.useMemo;
                var7 = new Array(1);
                var7[0] = var3;
                var6 = function() { // Environment: var11
                    _fun103730: for (var _fun103730_ip = 0;;) switch (_fun103730_ip) {
                        case 0:
                            var0 = _closure2_slot5;
                            var1 = null;
                            var3 = var1 == var0;
                            var0 = undefined;
                            if (var3) {
                                _fun103730_ip = 44;
                                continue _fun103730
                            }
                        case 18:
                            var2 = _closure2_slot5;
                            var4 = var2.items;
                            var3 = var4.filter;
                            var2 = _closure1_slot6;
                            var0 = var3.bind(var4)(var2);
                        case 44:
                            if (!(var1 == var0)) {
                                _fun103730_ip = 52;
                                continue _fun103730
                            }
                        case 48:
                            var0 = new Array(0);
                        case 52:
                            return var0;
                    }
                };
                var13 = var8.bind(var13)(var6, var7);
                var14 = _closure1_slot3;
                var8 = var14.useCallback;
                var7 = function(arg0) { // Environment: var11
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 10;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openCollectiblesShopMobile;
                    var1 = {};
                    var6 = _closure1_slot1;
                    var5 = 11;
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
                var6 = new Array(0);
                var6 = var8.bind(var14)(var7, var6);
                var _closure2_slot6 = var6;
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var6 = new Array(3);
                var6[0] = var10;
                var6[1] = var9;
                var6[2] = var1;
                var1 = function() { // Environment: var11
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 20;
                    var3 = var1[var0];
                    var0 = undefined;
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.openLazy;
                    var3 = _closure1_slot0;
                    var2 = 22;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 21;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var10 = var3.bind(var0)(var2, var1);
                    var3 = {};
                    var2 = _closure2_slot0;
                    var3.wishlistId = var2;
                    var2 = _closure2_slot3;
                    var3.analyticsContext = var2;
                    var1 = _closure2_slot4;
                    var3.analyticsLocations = var1;
                    var9 = 'EditWishlistActionSheet';
                    var7 = 'stack';
                    var11 = var6;
                    var8 = var3;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    return var0;
                };
                var20 = var7.bind(var8)(var1, var6);
                var8 = _closure1_slot3;
                var7 = var8.useCallback;
                var6 = function() { // Environment: var11
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var0 = 10;
                    var1 = var7[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openCollectiblesShopMobile;
                    var1 = {};
                    var6 = _closure1_slot1;
                    var5 = 11;
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
                var18 = var7.bind(var8)(var6, var1);
                if (!var0) {
                    _fun103726_ip = 390;
                    continue _fun103726
                }
            case 381:
                var0 = null;
                if (!(var0 != var3)) {
                    _fun103726_ip = 1017;
                    continue _fun103726
                }
            case 390:
                var1 = null;
                if (!(var1 == var4)) {
                    _fun103726_ip = 1015;
                    continue _fun103726
                }
            case 399:
                if (!(var1 != var3)) {
                    _fun103726_ip = 1013;
                    continue _fun103726
                }
            case 406:
                var4 = var13.length;
                var3 = 0;
                if (!(var3 !== var4)) {
                    _fun103726_ip = 995;
                    continue _fun103726
                }
            case 420:
                var21 = var13.length;
                var6 = _closure1_slot9;
                var4 = _closure1_slot4;
                var3 = {};
                var7 = {};
                var8 = var12.headerRow;
                var7.style = var8;
                var10 = _closure1_slot8;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var8 = 12;
                var8 = var23[var8];
                var8 = var22.bind(var5)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'text-sm/semibold',
                    'color': 'text-muted'
                };
                var19 = 13;
                var14 = var23[var19];
                var14 = var22.bind(var5)(var14);
                var17 = var14.intl;
                var16 = var17.formatToPlainString;
                var14 = var23[var19];
                var14 = var22.bind(var5)(var14);
                var14 = var14.t;
                var15 = var14.r6Y1Lg;
                var14 = {};
                var14.count = var21;
                var14 = var16.bind(var17)(var15, var14);
                var8.children = var14;
                var9 = var10.bind(var5)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var14 = _closure1_slot9;
                var10 = _closure1_slot4;
                var9 = {};
                var15 = var12.headerButtons;
                var9.style = var15;
                var17 = _closure1_slot8;
                var15 = 14;
                var15 = var23[var15];
                var15 = var22.bind(var5)(var15);
                var16 = var15.Button;
                var15 = {
                    'size': 'sm',
                    'variant': 'secondary'
                };
                var26 = 'sm';
                var25 = _closure1_slot8;
                var21 = 15;
                var21 = var23[var21];
                var21 = var22.bind(var5)(var21);
                var24 = var21.PlusMediumIcon;
                var21 = {};
                var27 = 'xs';
                var21.size = var27;
                var21 = var25.bind(var5)(var24, var21);
                var15.icon = var21;
                var21 = var23[var19];
                var21 = var22.bind(var5)(var21);
                var25 = var21.intl;
                var24 = var25.string;
                var21 = var23[var19];
                var21 = var22.bind(var5)(var21);
                var21 = var21.t;
                var21 = var21.SDUwM0;
                var21 = var24.bind(var25)(var21);
                var15.text = var21;
                var15.onPress = var18;
                var16 = var17.bind(var5)(var16, var15);
                var15 = new Array(2);
                var15[0] = var16;
                var18 = _closure1_slot8;
                var16 = 23;
                var16 = var23[var16];
                var16 = var22.bind(var5)(var16);
                var17 = var16.IconButton;
                var16 = {
                    'size': 'sm',
                    'variant': 'secondary'
                };
                var25 = _closure1_slot8;
                var21 = 24;
                var21 = var23[var21];
                var21 = var22.bind(var5)(var21);
                var24 = var21.PencilIcon;
                var21 = {};
                var21.size = var26;
                var27 = _closure1_slot1;
                var26 = 7;
                var26 = var23[var26];
                var26 = var27.bind(var5)(var26);
                var26 = var26.colors;
                var26 = var26.CONTROL_SECONDARY_TEXT_DEFAULT;
                var21.color = var26;
                var21 = var25.bind(var5)(var24, var21);
                var16.icon = var21;
                var16.onPress = var20;
                var20 = var23[var19];
                var20 = var22.bind(var5)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var23[var19];
                var19 = var22.bind(var5)(var19);
                var19 = var19.t;
                var19 = var19.bt75uw;
                var19 = var20.bind(var21)(var19);
                var16.accessibilityLabel = var19;
                var16 = var18.bind(var5)(var17, var16);
                var15[1] = var16;
                var9.children = var15;
                var9 = var14.bind(var5)(var10, var9);
                var8[1] = var9;
                var7.children = var8;
                var8 = var6.bind(var5)(var4, var7);
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
                    var1 = 25;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = {};
                    var1.item = var0;
                    var5 = function() {
                        var2 = _closure2_slot6;
                        var0 = _closure3_slot0;
                        var1 = var0.skuId;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var1.onPress = var5;
                    var6 = _closure2_slot1;
                    var1.backgroundColor = var6;
                    var5 = _closure2_slot2;
                    var1.width = var5;
                    var0 = var0.skuId;
                    var0 = var4.bind(var3)(var2, var1, var0);
                    return var0;
                };
                var11 = var12.bind(var13)(var11);
                var8.children = var11;
                var8 = var10.bind(var5)(var9, var8);
                var7[1] = var8;
                var3.children = var7;
                var3 = var6.bind(var5)(var4, var3);
                return var3;
            case 995:
                var4 = _closure1_slot8;
                var3 = _closure1_slot11;
                var2 = {};
                var2 = var4.bind(var5)(var3, var2);
                return var2;
            case 1013:
                return var1;
            case 1015:
                return var1;
            case 1017:
                return var0;
        }
    };
    var2.default = var3;
    var2.WishlistEmptyState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 11363, 11364, 3284, 33, 1297, 671, 3161, 3207, 4597, 5631, 3942, 1234, 4084, 11933, 11546, 7045, 5777, 566, 3279, 13545, 1307, 7579, 7584, 13547, 2]);