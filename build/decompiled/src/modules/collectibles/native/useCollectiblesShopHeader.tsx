// modules/collectibles/native/useCollectiblesShopHeader.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var7 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var7);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.View;
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.CollectiblesMobileShopScreen;
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.AnalyticEvents;
    var _closure1_slot7 = var1;
    var1 = 5;
    var4 = var6[var1];
    var4 = var5.bind(var0)(var4);
    var4 = var4.RewardFilterTypes;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.UserProfileSections;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.jsx;
    var _closure1_slot10 = var8;
    var4 = var4.jsxs;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var0)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {
        'paddingHorizontal': 15,
        'zIndex': 5
    };
    var4.headerContainer = var10;
    var10 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'gap': 8,
        'paddingRight': 5
    };
    var4.headerTitle = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.ShopIcon;
    var4 = {
        'size': 'md',
        'color': 'icon-strong'
    };
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.HeartIcon;
    var4 = {};
    var9 = 'sm';
    var4.size = var9;
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot14 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.MenuIcon;
    var4 = {
        'size': 'sm',
        'color': 'redesign-button-tertiary-text'
    };
    var4 = var8.bind(var0)(var7, var4);
    var _closure1_slot15 = var4;
    var4 = function arg0() {
        _fun87396: for (var _fun87396_ip = 0;;) switch (_fun87396_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.navigation;
                var10 = var0.onClose;
                var14 = var0.currentScreen;
                var _closure2_slot0 = var14;
                var0 = _closure1_slot12;
                var3 = undefined;
                var6 = var0.bind(var3)();
                var7 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 12;
                var0 = var9[var0];
                var0 = var7.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var19 = var0.top;
                var8 = _closure1_slot0;
                var0 = 13;
                var0 = var9[var0];
                var4 = var8.bind(var3)(var0);
                var1 = var4.useVirtualCurrencyMobileEnabled;
                var0 = {};
                var2 = 'CollectiblesShopHeader';
                var0.location = var2;
                var0 = var1.bind(var4)(var0);
                var13 = var0.enabled;
                var _closure2_slot1 = var13;
                var5 = _closure1_slot3;
                var4 = var5.useMemo;
                var1 = new Array(2);
                var1[0] = var14;
                var1[1] = var13;
                var0 = function() { // Environment: var15
                    _fun87397: for (var _fun87397_ip = 0;;) switch (_fun87397_ip) {
                        case 0:
                            var2 = {};
                            var7 = _closure1_slot0;
                            var0 = _closure1_slot2;
                            var11 = 14;
                            var1 = var0[var11];
                            var6 = undefined;
                            var1 = var7.bind(var6)(var1);
                            var8 = var1.intl;
                            var3 = var8.string;
                            var1 = var0[var11];
                            var1 = var7.bind(var6)(var1);
                            var1 = var1.t;
                            var1 = var1["xNiB/O"];
                            var1 = var3.bind(var8)(var1);
                            var2.label = var1;
                            var1 = var0[var11];
                            var1 = var7.bind(var6)(var1);
                            var3 = var1.intl;
                            var1 = var3.string;
                            var0 = var0[var11];
                            var0 = var7.bind(var6)(var0);
                            var0 = var0.t;
                            var0 = var0.zMqLH9;
                            var0 = var1.bind(var3)(var0);
                            var2.accessibilityLabel = var0;
                            var0 = function() {
                                var2 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var0 = 15;
                                var1 = var7[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.openCollectiblesShopMobile;
                                var1 = {};
                                var6 = _closure1_slot1;
                                var5 = 16;
                                var8 = var7[var5];
                                var8 = var6.bind(var0)(var8);
                                var9 = var8.COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM;
                                var8 = new Array(1);
                                var8[0] = var9;
                                var1.analyticsLocations = var8;
                                var5 = var7[var5];
                                var5 = var6.bind(var0)(var5);
                                var5 = var5.COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM;
                                var1.analyticsSource = var5;
                                var4 = _closure1_slot6;
                                var4 = var4.FEATURED_PAGE;
                                var1.screen = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var2.action = var0;
                            var7 = _closure2_slot0;
                            var0 = _closure1_slot6;
                            var3 = var0.FEATURED_PAGE;
                            var0 = undefined;
                            if (!(var7 === var3)) {
                                _fun87397_ip = 180;
                                continue _fun87397
                            }
                        case 154:
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var3 = 17;
                            var3 = var8[var3];
                            var3 = var7.bind(var6)(var3);
                            var0 = var3.CheckmarkSmallIcon;
                        case 180:
                            var2.IconComponent = var0;
                            var0 = new Array(2);
                            var0[0] = var2;
                            var2 = {};
                            var9 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var7 = var3[var11];
                            var7 = var9.bind(var6)(var7);
                            var10 = var7.intl;
                            var8 = var10.string;
                            var7 = var3[var11];
                            var7 = var9.bind(var6)(var7);
                            var7 = var7.t;
                            var7 = var7.RSyoZu;
                            var7 = var8.bind(var10)(var7);
                            var2.label = var7;
                            var7 = var3[var11];
                            var7 = var9.bind(var6)(var7);
                            var8 = var7.intl;
                            var7 = var8.string;
                            var3 = var3[var11];
                            var3 = var9.bind(var6)(var3);
                            var3 = var3.t;
                            var3 = var3["bG3n/t"];
                            var3 = var7.bind(var8)(var3);
                            var2.accessibilityLabel = var3;
                            var3 = function() {
                                var2 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var0 = 15;
                                var1 = var7[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.openCollectiblesShopMobile;
                                var1 = {};
                                var6 = _closure1_slot1;
                                var5 = 16;
                                var8 = var7[var5];
                                var8 = var6.bind(var0)(var8);
                                var9 = var8.COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM;
                                var8 = new Array(1);
                                var8[0] = var9;
                                var1.analyticsLocations = var8;
                                var5 = var7[var5];
                                var5 = var6.bind(var0)(var5);
                                var5 = var5.COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM;
                                var1.analyticsSource = var5;
                                var4 = _closure1_slot6;
                                var4 = var4.SHOP_ALL;
                                var1.screen = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var2.action = var3;
                            var8 = _closure2_slot0;
                            var3 = _closure1_slot6;
                            var7 = var3.SHOP_ALL;
                            var3 = undefined;
                            if (!(var8 === var7)) {
                                _fun87397_ip = 359;
                                continue _fun87397
                            }
                        case 333:
                            var8 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var7 = 17;
                            var7 = var9[var7];
                            var7 = var8.bind(var6)(var7);
                            var3 = var7.CheckmarkSmallIcon;
                        case 359:
                            var2.IconComponent = var3;
                            var0[1] = var2;
                            var2 = _closure2_slot1;
                            if (var2) {
                                _fun87397_ip = 383;
                                continue _fun87397
                            }
                        case 374:
                            var2 = new Array(0);
                            _fun87397_ip = 561;
                            continue _fun87397;
                        case 383:
                            var3 = {};
                            var10 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var8 = var7[var11];
                            var8 = var10.bind(var6)(var8);
                            var12 = var8.intl;
                            var9 = var12.string;
                            var8 = var7[var11];
                            var8 = var10.bind(var6)(var8);
                            var8 = var8.t;
                            var8 = var8.EBYkzk;
                            var8 = var9.bind(var12)(var8);
                            var3.label = var8;
                            var8 = var7[var11];
                            var8 = var10.bind(var6)(var8);
                            var9 = var8.intl;
                            var8 = var9.string;
                            var7 = var7[var11];
                            var7 = var10.bind(var6)(var7);
                            var7 = var7.t;
                            var7 = var7["rSfoC+"];
                            var7 = var8.bind(var9)(var7);
                            var3.accessibilityLabel = var7;
                            var5 = function() {
                                var2 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var0 = 15;
                                var1 = var7[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.openCollectiblesShopMobile;
                                var1 = {};
                                var6 = _closure1_slot1;
                                var5 = 16;
                                var8 = var7[var5];
                                var8 = var6.bind(var0)(var8);
                                var9 = var8.COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM;
                                var8 = new Array(1);
                                var8[0] = var9;
                                var1.analyticsLocations = var8;
                                var5 = var7[var5];
                                var5 = var6.bind(var0)(var5);
                                var5 = var5.COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM;
                                var1.analyticsSource = var5;
                                var4 = _closure1_slot6;
                                var4 = var4.ORBS;
                                var1.screen = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var3.action = var5;
                            var7 = _closure2_slot0;
                            var1 = _closure1_slot6;
                            var5 = var1.ORBS;
                            var1 = undefined;
                            if (!(var7 === var5)) {
                                _fun87397_ip = 546;
                                continue _fun87397
                            }
                        case 520:
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 17;
                            var4 = var7[var4];
                            var4 = var5.bind(var6)(var4);
                            var1 = var4.CheckmarkSmallIcon;
                        case 546:
                            var3.IconComponent = var1;
                            var1 = new Array(1);
                            var1[0] = var3;
                            var2 = var1;
                        case 561:
                            var13 = 2;
                            var15 = var0;
                            var14 = var2;
                            var1 = arraySpread(var15, var14, var13);
                            return var0;
                    }
                };
                var16 = var4.bind(var5)(var0, var1);
                var0 = 18;
                var0 = var9[var0];
                var1 = var8.bind(var3)(var0);
                var0 = var1.useMobileWishlistOwnerExperiment;
                var0 = var0.bind(var1)(var2);
                var12 = var0.enabled;
                var0 = 19;
                var0 = var9[var0];
                var5 = var8.bind(var3)(var0);
                var4 = var5.useStateFromStores;
                var0 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var0;
                var1 = function() { // Environment: var15
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var0 = new Array(0);
                var17 = var4.bind(var5)(var2, var1, var0);
                var _closure2_slot2 = var17;
                var0 = 20;
                var0 = var9[var0];
                var1 = var8.bind(var3)(var0);
                var0 = var1.useFetchVirtualCurrencyBalance;
                var0 = var0.bind(var1)();
                var20 = var0.balance;
                var _closure2_slot3 = var20;
                var2 = _closure1_slot10;
                var1 = _closure1_slot4;
                var0 = {
                    'style': null,
                    'importantForAccessibility': 'yes',
                    'accessibilityElementsHidden': false
                };
                var4 = {};
                var25 = var6.headerContainer;
                var26 = var4;
                var5 = copyDataProperties(var26, var25);
                var5 = 'paddingTop';
                var4[var5] = var19;
                var0.style = var4;
                var5 = _closure1_slot11;
                var4 = {};
                var6 = var6.headerTitle;
                var4.style = var6;
                var6 = 21;
                var6 = var9[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var6.navigation = var18;
                var6.onPress = var10;
                var7 = var2.bind(var3)(var7, var6);
                var6 = new Array(4);
                var6[0] = var7;
                var7 = _closure1_slot13;
                var6[1] = var7;
                var7 = 22;
                var7 = var9[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.Text;
                var7 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'text-strong',
                    'accessibilityRole': 'header'
                };
                var9 = {};
                var10 = 2;
                var9.paddingTop = var10;
                var7.style = var9;
                var9 = _closure1_slot6;
                var9 = var9.ORBS;
                if (!(var14 !== var9)) {
                    _fun87396_ip = 495;
                    continue _fun87396
                }
            case 436:
                var19 = _closure1_slot0;
                var21 = _closure1_slot2;
                var9 = 14;
                var10 = var21[var9];
                var10 = var19.bind(var3)(var10);
                var18 = var10.intl;
                var10 = var18.string;
                var9 = var21[var9];
                var9 = var19.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9["5upuqx"];
                var9 = var10.bind(var18)(var9);
                _fun87396_ip = 550;
                continue _fun87396;
            case 495:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var10 = 14;
                var18 = var22[var10];
                var18 = var21.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var10 = var22[var10];
                var10 = var21.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10["rSfoC+"];
                var9 = var18.bind(var19)(var10);
            case 550:
                var7.accessibilityLabel = var9;
                var9 = _closure1_slot6;
                var9 = var9.ORBS;
                if (!(var14 !== var9)) {
                    _fun87396_ip = 625;
                    continue _fun87396
                }
            case 568:
                var19 = _closure1_slot0;
                var21 = _closure1_slot2;
                var9 = 14;
                var10 = var21[var9];
                var10 = var19.bind(var3)(var10);
                var18 = var10.intl;
                var10 = var18.string;
                var9 = var21[var9];
                var9 = var19.bind(var3)(var9);
                var9 = var9.t;
                var9 = var9.pWG4ze;
                var9 = var10.bind(var18)(var9);
                _fun87396_ip = 680;
                continue _fun87396;
            case 625:
                var21 = _closure1_slot0;
                var22 = _closure1_slot2;
                var10 = 14;
                var18 = var22[var10];
                var18 = var21.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var10 = var22[var10];
                var10 = var21.bind(var3)(var10);
                var10 = var10.t;
                var10 = var10.EBYkzk;
                var9 = var18.bind(var19)(var10);
            case 680:
                var7.children = var9;
                var7 = var2.bind(var3)(var8, var7);
                var6[2] = var7;
                var9 = _closure1_slot11;
                var8 = _closure1_slot4;
                var7 = {};
                var10 = {
                    'flexDirection': 'row',
                    'justifyContent': 'flex-end',
                    'alignItems': 'center',
                    'flex': 1
                };
                var19 = _closure1_slot1;
                var21 = _closure1_slot2;
                var18 = 23;
                var18 = var21[var18];
                var18 = var19.bind(var3)(var18);
                var18 = var18.spacing;
                var18 = var18.PX_8;
                var10.gap = var18;
                var7.style = var10;
                if (!var13) {
                    _fun87396_ip = 814;
                    continue _fun87396
                }
            case 760:
                var19 = _closure1_slot10;
                var18 = _closure1_slot0;
                var21 = _closure1_slot2;
                var10 = 24;
                var10 = var21[var10];
                var10 = var18.bind(var3)(var10);
                var18 = var10.BalanceWidgetPill;
                var10 = {};
                var10.balance = var20;
                var20 = function() {
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var0 = 25;
                    var2 = var7[var0];
                    var0 = undefined;
                    var5 = var6.bind(var0)(var2);
                    var4 = var5.openLazy;
                    var3 = {};
                    var2 = _closure2_slot3;
                    var3.balance = var2;
                    var2 = {};
                    var11 = _closure1_slot0;
                    var8 = 14;
                    var9 = var7[var8];
                    var9 = var11.bind(var0)(var9);
                    var12 = var9.intl;
                    var10 = var12.string;
                    var9 = var7[var8];
                    var9 = var11.bind(var0)(var9);
                    var9 = var9.t;
                    var9 = var9.SymzJC;
                    var9 = var10.bind(var12)(var9);
                    var2.buttonText = var9;
                    var9 = function() {
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 28;
                        var1 = var3[var0];
                        var0 = undefined;
                        var7 = var2.bind(var0)(var1);
                        var6 = var7.track;
                        var1 = _closure1_slot7;
                        var5 = var1.ORB_BALANCE_ACTION_SHEET_ACTION;
                        var1 = {};
                        var8 = 'GO_TO_QUEST_HOME';
                        var1.type = var8;
                        var8 = 16;
                        var8 = var3[var8];
                        var8 = var2.bind(var0)(var8);
                        var8 = var8.COLLECTIBLES_SHOP;
                        var1.source = var8;
                        var8 = _closure2_slot3;
                        var1.balance = var8;
                        var1 = var6.bind(var7)(var5, var1);
                        var1 = 25;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.hideActionSheet;
                        var1 = var1.bind(var2)();
                        var2 = _closure1_slot0;
                        var1 = 29;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.openQuestHome;
                        var1 = {};
                        var5 = true;
                        var1.mergeExistingRoutes = var5;
                        var4 = _closure1_slot8;
                        var4 = var4.VIRTUAL_CURRENCY;
                        var1.filter = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var2.onButtonPress = var9;
                    var3.primaryButtonConfig = var2;
                    var2 = {};
                    var9 = var7[var8];
                    var9 = var11.bind(var0)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var8 = var7[var8];
                    var8 = var11.bind(var0)(var8);
                    var8 = var8.t;
                    var8 = var8["/g10LC"];
                    var8 = var9.bind(var10)(var8);
                    var2.buttonText = var8;
                    var8 = function() {
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 28;
                        var4 = var3[var0];
                        var0 = undefined;
                        var6 = var2.bind(var0)(var4);
                        var5 = var6.track;
                        var1 = _closure1_slot7;
                        var4 = var1.ORB_BALANCE_ACTION_SHEET_ACTION;
                        var1 = {};
                        var7 = 'GO_BACK';
                        var1.type = var7;
                        var7 = 16;
                        var7 = var3[var7];
                        var7 = var2.bind(var0)(var7);
                        var7 = var7.COLLECTIBLES_SHOP;
                        var1.source = var7;
                        var7 = _closure2_slot3;
                        var1.balance = var7;
                        var1 = var5.bind(var6)(var4, var1);
                        var1 = 25;
                        var1 = var3[var1];
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.hideActionSheet;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var2.onButtonPress = var8;
                    var3.secondaryButtonConfig = var2;
                    var2 = 16;
                    var2 = var7[var2];
                    var2 = var6.bind(var0)(var2);
                    var2 = var2.COLLECTIBLES_SHOP;
                    var3.source = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var0 = _closure1_slot2;
                        var1 = 27;
                        var1 = var0[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = 26;
                        var1 = var0[var1];
                        var0 = var0.paths;
                        var2 = var2.bind(var3)(var1, var0);
                        var1 = var2.then;
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var0 = var0.default;
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = 'BalanceWidgetActionSheet';
                    var1 = var4.bind(var5)(var2, var1, var3);
                    return var0;
                };
                var10.onPress = var20;
                var13 = var19.bind(var3)(var18, var10);
            case 814:
                var10 = new Array(3);
                var10[0] = var13;
                if (!var12) {
                    _fun87396_ip = 831;
                    continue _fun87396
                }
            case 825:
                var13 = null;
                var12 = var13 != var17;
            case 831:
                if (!var12) {
                    _fun87396_ip = 959;
                    continue _fun87396
                }
            case 837:
                var18 = _closure1_slot10;
                var22 = _closure1_slot0;
                var23 = _closure1_slot2;
                var13 = 30;
                var13 = var23[var13];
                var13 = var22.bind(var3)(var13);
                var17 = var13.IconButton;
                var13 = {
                    'accessibilityLabel': null,
                    'variant': 'tertiary',
                    'size': 'sm'
                };
                var19 = 14;
                var20 = var23[var19];
                var20 = var22.bind(var3)(var20);
                var21 = var20.intl;
                var20 = var21.string;
                var19 = var23[var19];
                var19 = var22.bind(var3)(var19);
                var19 = var19.t;
                var19 = var19["7lZ31J"];
                var19 = var20.bind(var21)(var19);
                var13.accessibilityLabel = var19;
                var19 = _closure1_slot14;
                var13.icon = var19;
                var19 = function() {
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 31;
                    var1 = var6[var0];
                    var0 = undefined;
                    var2 = var5.bind(var0)(var1);
                    var1 = var2.popAll;
                    var1 = var1.bind(var2)();
                    var1 = 32;
                    var1 = var6[var1];
                    var2 = var5.bind(var0)(var1);
                    var1 = {};
                    var4 = _closure2_slot2;
                    var4 = var4.id;
                    var1.userId = var4;
                    var4 = 16;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var5 = var4.COLLECTIBLES_SHOP;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1.sourceAnalyticsLocations = var4;
                    var3 = _closure1_slot9;
                    var3 = var3.WISHLIST;
                    var1.initialSection = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var13.onPress = var19;
                var12 = var18.bind(var3)(var17, var13);
            case 959:
                var10[1] = var12;
                var13 = _closure1_slot10;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var11 = 33;
                var11 = var20[var11];
                var11 = var19.bind(var3)(var11);
                var12 = var11.ContextMenu;
                var11 = {};
                var11.items = var16;
                var16 = 'below';
                var11.align = var16;
                var16 = 14;
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var20[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16.nSFuC0;
                var16 = var17.bind(var18)(var16);
                var11.title = var16;
                var16 = 'handled';
                var11.keyboardShouldPersistTaps = var16;
                var15 = function arg0() {
                    var2 = arg0;
                    var6 = var2.ref;
                    var0 = null;
                    var1 = Object.create(var0);
                    var0 = 0;
                    var1.ref = var0;
                    var12 = {};
                    var11 = var2;
                    var10 = var1;
                    var11 = copyDataProperties(var12, var11, var10);
                    var3 = _closure1_slot10;
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var0 = 30;
                    var0 = var9[var0];
                    var2 = undefined;
                    var0 = var8.bind(var2)(var0);
                    var1 = var0.IconButton;
                    var0 = {};
                    var0.ref = var6;
                    var12 = var0;
                    var5 = copyDataProperties(var12, var11);
                    var6 = 'tertiary';
                    var5 = 'variant';
                    var0[var5] = var6;
                    var5 = 14;
                    var6 = var9[var5];
                    var6 = var8.bind(var2)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var2)(var5);
                    var5 = var5.t;
                    var5 = var5.P0DpSf;
                    var6 = var6.bind(var7)(var5);
                    var5 = 'accessibilityLabel';
                    var0[var5] = var6;
                    var6 = 'sm';
                    var5 = 'size';
                    var0[var5] = var6;
                    var5 = _closure1_slot15;
                    var4 = 'icon';
                    var0[var4] = var5;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
                };
                var11.children = var15;
                var11 = var13.bind(var3)(var12, var11, var14);
                var10[2] = var11;
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var6[3] = var7;
                var4.children = var6;
                var4 = var5.bind(var3)(var1, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var4;
    var4 = 35;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/native/useCollectiblesShopHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        _fun87409: for (var _fun87409_ip = 0;;) switch (_fun87409_ip) {
            case 0:
                var2 = arguments[0];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun87409_ip = 13;
                    continue _fun87409
                }
            case 11:
                var2 = {};
            case 13:
                var6 = var2.onClose;
                var5 = var2.currentScreen;
                var _closure2_slot0 = var0;
                var _closure2_slot1 = var0;
                var4 = _closure1_slot0;
                var7 = _closure1_slot2;
                var3 = 34;
                var3 = var7[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.useNativeStackNavigation;
                var7 = var3.bind(var4)();
                _closure2_slot0 = var7;
                var8 = _closure1_slot10;
                var4 = _closure1_slot16;
                var3 = {};
                var3.navigation = var7;
                var3.onClose = var6;
                var3.currentScreen = var5;
                var3 = var8.bind(var0)(var4, var3);
                _closure2_slot1 = var3;
                var4 = _closure1_slot3;
                var3 = var4.useLayoutEffect;
                var2 = new Array(3);
                var2[0] = var7;
                var2[1] = var6;
                var2[2] = var5;
                var1 = function() { // Environment: var1
                    var3 = _closure2_slot0;
                    var2 = var3.setOptions;
                    var1 = {};
                    var4 = function() {
                        var0 = _closure2_slot1;
                        return var0;
                    };
                    var1.header = var4;
                    var4 = true;
                    var1.headerTransparent = var4;
                    var1 = var2.bind(var3)(var1);
                    var0 = function() { // Environment: var0
                        var3 = _closure2_slot0;
                        var2 = var3.setOptions;
                        var1 = {};
                        var0 = undefined;
                        var1.header = var0;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    return var0;
                };
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var2.default = var3;
    var2.HEADER_Z_INDEX = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1621, 3284, 660, 5257, 7073, 33, 1297, 10365, 7369, 11267, 1568, 3341, 1234, 4603, 5639, 4898, 8832, 566, 7613, 7716, 4852, 671, 7619, 3279, 7629, 1307, 795, 9996, 7585, 4567, 8334, 8799, 1469, 2]);