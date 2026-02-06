// modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var13 = 0;
    var3 = var5[var13];
    var0 = undefined;
    var3 = var12.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var11 = 1;
    var6 = var5[var11];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var9 = 3;
    var3 = var5[var9];
    var3 = var12.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EXTERNAL_PRODUCT_SKU_IDS;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.MarketingURLs;
    var _closure1_slot8 = var6;
    var3 = var3.UserSettingsSections;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MainTabsNavigatorScreens;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot11 = var6;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var10 = 9;
    var14 = var5[var10];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWER;
    var8.backgroundColor = var14;
    var14 = var5[var10];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var8.paddingHorizontal = var14;
    var14 = var5[var10];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_16;
    var8.paddingBottom = var14;
    var14 = var5[var10];
    var14 = var12.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_8;
    var8.paddingTop = var14;
    var14 = 'absolute';
    var8.position = var14;
    var8.bottom = var13;
    var8.left = var13;
    var8.right = var13;
    var3.container = var8;
    var8 = {};
    var13 = var5[var10];
    var13 = var12.bind(var0)(var13);
    var13 = var13.radii;
    var13 = var13.round;
    var8.borderRadius = var13;
    var3.button = var8;
    var8 = {};
    var13 = var5[var10];
    var13 = var12.bind(var0)(var13);
    var13 = var13.spacing;
    var13 = var13.PX_12;
    var8.gap = var13;
    var3.purchaseSection = var8;
    var8 = {};
    var13 = 0.5;
    var8.opacity = var13;
    var3.disclaimer = var8;
    var8 = {};
    var13 = 40;
    var8.height = var13;
    var3.unlockWithNitroButton = var8;
    var8 = {};
    var13 = 'row';
    var8.flexDirection = var13;
    var10 = var5[var10];
    var10 = var12.bind(var0)(var10);
    var10 = var10.spacing;
    var10 = var10.PX_12;
    var8.gap = var10;
    var3.buttonContainer = var8;
    var8 = {};
    var10 = 'center';
    var8.textAlignVertical = var10;
    var3.orbsButtonText = var8;
    var8 = {};
    var10 = {};
    var10.translateY = var9;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = {};
    var10.translateX = var11;
    var9[1] = var10;
    var8.transform = var9;
    var3.orbsIcon = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot13 = var3;
    var3 = function arg0() {
        _fun87679: for (var _fun87679_ip = 0;;) switch (_fun87679_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.product;
                var _closure2_slot0 = var1;
                var1 = var0.analyticsLocations;
                var _closure2_slot1 = var1;
                var9 = var0.variant;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun87679_ip = 40;
                    continue _fun87679
                }
            case 36:
                var9 = 'primary';
            case 40:
                var2 = _closure1_slot11;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 10;
                var0 = var8[var0];
                var0 = var7.bind(var3)(var0);
                var1 = var0.IconButton;
                var0 = {};
                var6 = 'lg';
                var0.size = var6;
                var0.variant = var9;
                var6 = 11;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var7 = var6.GiftIcon;
                var6 = {};
                var8 = 'md';
                var6.size = var8;
                var8 = 'primary';
                if (!(var8 !== var9)) {
                    _fun87679_ip = 156;
                    continue _fun87679
                }
            case 123:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 9;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.colors;
                var8 = var8.TEXT_STRONG;
                _fun87679_ip = 187;
                continue _fun87679;
            case 156:
                var10 = _closure1_slot1;
                var11 = _closure1_slot2;
                var9 = 9;
                var9 = var11[var9];
                var9 = var10.bind(var3)(var9);
                var9 = var9.colors;
                var8 = var9.WHITE;
            case 187:
                var6.color = var8;
                var6 = var2.bind(var3)(var7, var6);
                var0.icon = var6;
                var5 = function() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var0 = 12;
                    var2 = var3[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var2);
                    var4 = var5.hideActionSheet;
                    var2 = _closure1_slot0;
                    var1 = 13;
                    var1 = var3[var1];
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.PRODUCT_DETAILS_ACTION_SHEET_KEY;
                    var1 = var4.bind(var5)(var1);
                    var1 = 14;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.openShopGiftModal;
                    var1 = {};
                    var5 = _closure2_slot0;
                    var1.product = var5;
                    var4 = _closure2_slot1;
                    var1.analyticsLocations = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.onPress = var5;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 15;
                var5 = var8[var4];
                var5 = var7.bind(var3)(var5);
                var6 = var5.intl;
                var5 = var6.string;
                var4 = var8[var4];
                var4 = var7.bind(var3)(var4);
                var4 = var4.t;
                var4 = var4.PEjaCx;
                var4 = var5.bind(var6)(var4);
                var0.accessibilityLabel = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot14 = var3;
    var3 = function arg0() {
        _fun87681: for (var _fun87681_ip = 0;;) switch (_fun87681_ip) {
            case 0:
                var0 = arg0;
                var9 = var0.balance;
                var _closure2_slot0 = var9;
                var10 = var0.product;
                var _closure2_slot1 = var10;
                var3 = var0.isPremiumUser;
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun87681_ip = 39;
                    continue _fun87681
                }
            case 37:
                var3 = false;
            case 39:
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var0 = _closure1_slot13;
                var5 = var0.bind(var4)();
                _closure2_slot2 = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 16;
                var0 = var7[var0];
                var2 = var6.bind(var4)(var0);
                var0 = var2.useVirtualCurrencyData;
                var0 = var0.bind(var2)(var10, var3);
                var2 = var0.enabled;
                var16 = var0.price;
                var0 = var0.canAfford;
                var3 = 17;
                var3 = var7[var3];
                var7 = var6.bind(var4)(var3);
                var6 = var7.useProductDisableState;
                var3 = var10.skuId;
                var3 = var6.bind(var7)(var3);
                var8 = var3.isDisabled;
                if (var8) {
                    _fun87681_ip = 160;
                    continue _fun87681
                }
            case 157:
                var8 = !var0;
            case 160:
                _closure2_slot3 = var8;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 18;
                var0 = var6[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.useNavigation;
                var11 = var0.bind(var3)();
                _closure2_slot4 = var11;
                var3 = _closure1_slot1;
                var0 = 19;
                var0 = var6[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var0 = var0.analyticsLocations;
                _closure2_slot5 = var0;
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var3 = new Array(4);
                var3[0] = var11;
                var3[1] = var10;
                var3[2] = var9;
                var3[3] = var0;
                var0 = function() { // Environment: var13
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var3 = var5.hideActionSheet;
                    var3 = var3.bind(var5)();
                    var3 = 20;
                    var3 = var1[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.pushLazy;
                    var3 = _closure1_slot0;
                    var2 = 22;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 21;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var6 = _closure2_slot1;
                    var6 = var6.skuId;
                    var2.skuId = var6;
                    var1 = _closure2_slot5;
                    var2.analyticsLocations = var1;
                    var1 = function arg0() {
                        _fun87683: for (var _fun87683_ip = 0;;) switch (_fun87683_ip) {
                            case 0:
                                var0 = arg0;
                                var9 = var0.entitlements;
                                var4 = _closure1_slot1;
                                var0 = _closure1_slot2;
                                var3 = 20;
                                var1 = var0[var3];
                                var0 = undefined;
                                var5 = var4.bind(var0)(var1);
                                var4 = var5.popWithKey;
                                var1 = 'ORB_CHECKOUT_MODAL';
                                var1 = var4.bind(var5)(var1);
                                var1 = _closure2_slot1;
                                var4 = var1.skuId;
                                var1 = _closure1_slot7;
                                var1 = var1.ORB_PROFILE_BADGE;
                                if (!(var4 !== var1)) {
                                    _fun87683_ip = 315;
                                    continue _fun87683
                                }
                            case 83:
                                var1 = _closure2_slot1;
                                var4 = var1.skuId;
                                var1 = _closure1_slot7;
                                var1 = var1.FRACTIONAL_PREMIUM;
                                if (!(var4 !== var1)) {
                                    _fun87683_ip = 176;
                                    continue _fun87683
                                }
                            case 107:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 25;
                                var1 = var5[var1];
                                var5 = var4.bind(var0)(var1);
                                var4 = var5.open;
                                var1 = {
                                    'product': null,
                                    'useCategoryImage': true,
                                    'showOrbBalancePill': true
                                };
                                var8 = _closure2_slot1;
                                var1.product = var8;
                                var7 = _closure2_slot0;
                                var1.orbBalancePriorToPurchase = var7;
                                var1 = var4.bind(var5)(var1);
                                _fun87683_ip = 404;
                                continue _fun87683;
                            case 176:
                                var5 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var4 = 12;
                                var4 = var1[var4];
                                var8 = var5.bind(var0)(var4);
                                var7 = var8.openLazy;
                                var5 = _closure1_slot0;
                                var4 = 22;
                                var4 = var1[var4];
                                var5 = var5.bind(var0)(var4);
                                var4 = 24;
                                var4 = var1[var4];
                                var1 = var1.paths;
                                var5 = var5.bind(var0)(var4, var1);
                                var4 = {};
                                var1 = 0;
                                var10 = var9[var1];
                                var1 = null;
                                var11 = var1 == var10;
                                var9 = undefined;
                                if (var11) {
                                    _fun87683_ip = 261;
                                    continue _fun87683
                                }
                            case 255:
                                var9 = var10.consumed;
                            case 261:
                                var1 = var1 != var9;
                                if (!var1) {
                                    _fun87683_ip = 271;
                                    continue _fun87683
                                }
                            case 268:
                                var1 = var9;
                            case 271:
                                var4.consumed = var1;
                                var1 = function() {
                                    var3 = _closure2_slot4;
                                    var2 = var3.navigate;
                                    var1 = _closure1_slot9;
                                    var1 = var1.PREMIUM;
                                    var1 = var2.bind(var3)(var1);
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 12;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.hideActionSheet;
                                    var1 = var1.bind(var2)();
                                    return var0;
                                };
                                var4.onPressExplorePerks = var1;
                                var1 = function() {
                                    var3 = _closure2_slot4;
                                    var2 = var3.navigate;
                                    var1 = _closure1_slot9;
                                    var1 = var1.PREMIUM_MANAGE_PLAN;
                                    var1 = var2.bind(var3)(var1);
                                    var2 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 12;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var2 = var2.bind(var0)(var1);
                                    var1 = var2.hideActionSheet;
                                    var1 = var1.bind(var2)();
                                    return var0;
                                };
                                var4.onPressViewCredits = var1;
                                var1 = 'FractionalNitroCollectedActionSheet';
                                var1 = var7.bind(var8)(var5, var1, var4);
                                _fun87683_ip = 404;
                                continue _fun87683;
                            case 315:
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var3 = var1[var3];
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.pushLazy;
                                var3 = _closure1_slot0;
                                var2 = 22;
                                var2 = var1[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = 23;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var3 = var3.bind(var0)(var2, var1);
                                var2 = {};
                                var1 = 'ORB_BADGE_COLLECTED_MODAL';
                                var2.modalKey = var1;
                                var6 = function() {
                                    var3 = _closure2_slot4;
                                    var2 = var3.navigate;
                                    var0 = _closure1_slot10;
                                    var1 = var0.YOU;
                                    var0 = {};
                                    var4 = true;
                                    var0.showOrbsBadgeCoachmark = var4;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                                };
                                var2.onPressViewBadge = var6;
                                var1 = var4.bind(var5)(var3, var2, var1);
                            case 404:
                                return var0;
                        }
                    };
                    var2.onCheckoutSuccess = var1;
                    var1 = 'ORB_CHECKOUT_MODAL';
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var7 = var6.bind(var7)(var0, var3);
                var0 = null;
                if (!(var0 != var16)) {
                    _fun87681_ip = 618;
                    continue _fun87681
                }
            case 279:
                if (!var2) {
                    _fun87681_ip = 618;
                    continue _fun87681
                }
            case 285:
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var12 = 15;
                var2 = var6[var12];
                var2 = var3.bind(var4)(var2);
                var11 = var2.intl;
                var10 = var11.format;
                var2 = var6[var12];
                var2 = var3.bind(var4)(var2);
                var2 = var2.t;
                var9 = var2.lOtBOI;
                var2 = {};
                var14 = var16.amount;
                var2.orbPrice = var14;
                var13 = function() {
                    _fun87687: for (var _fun87687_ip = 0;;) switch (_fun87687_ip) {
                        case 0:
                            var4 = _closure1_slot11;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 26;
                            var0 = var2[var0];
                            var3 = undefined;
                            var0 = var1.bind(var3)(var0);
                            var2 = var0.OrbsIcon;
                            var1 = {};
                            var6 = _closure2_slot2;
                            var6 = var6.orbsIcon;
                            var1.style = var6;
                            var6 = 'sm';
                            var1.size = var6;
                            var0 = _closure2_slot3;
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 9;
                            var5 = var7[var5];
                            var5 = var6.bind(var3)(var5);
                            var5 = var5.colors;
                            if (var0) {
                                _fun87687_ip = 102;
                                continue _fun87687
                            }
                        case 94:
                            var0 = var5.WHITE;
                            _fun87687_ip = 108;
                            continue _fun87687;
                        case 102:
                            var0 = var5.INTERACTIVE_TEXT_ACTIVE;
                        case 108:
                            var1.color = var0;
                            var0 = 'orbs-icon';
                            var0 = var4.bind(var3)(var2, var1, var0);
                            return var0;
                    }
                };
                var2.orbIconHook = var13;
                var11 = var10.bind(var11)(var9, var2);
                var9 = _closure1_slot11;
                var2 = 27;
                var2 = var6[var2];
                var2 = var3.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {};
                var6 = var5.orbsButtonText;
                var2.style = var6;
                var6 = 'text-md/semibold';
                var2.variant = var6;
                var6 = 'white';
                if (!var8) {
                    _fun87681_ip = 424;
                    continue _fun87681
                }
            case 418:
                var6 = 'interactive-text-active';
            case 424:
                var2.color = var6;
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var13 = var10[var12];
                var13 = var6.bind(var4)(var13);
                var15 = var13.intl;
                var14 = var15.formatToPlainString;
                var12 = var10[var12];
                var12 = var6.bind(var4)(var12);
                var12 = var12.t;
                var13 = var12.yi41qQ;
                var12 = {};
                var16 = var16.amount;
                var12.orbPrice = var16;
                var12 = var14.bind(var15)(var13, var12);
                var2.accessibilityLabel = var12;
                var2.children = var11;
                var9 = var9.bind(var4)(var3, var2);
                var3 = _closure1_slot11;
                var2 = _closure1_slot5;
                var1 = {};
                var5 = var5.buttonContainer;
                var1.style = var5;
                var5 = 28;
                var5 = var10[var5];
                var5 = var6.bind(var4)(var5);
                var6 = var5.BaseTextButton;
                var5 = {};
                var10 = false;
                var5.loading = var10;
                var5.textElement = var9;
                var5.onPress = var7;
                var5.disabled = var8;
                var7 = 'lg';
                var5.size = var7;
                var7 = 'primary';
                if (!var8) {
                    _fun87681_ip = 589;
                    continue _fun87681
                }
            case 585:
                var7 = 'secondary';
            case 589:
                var5.variant = var7;
                var7 = true;
                var5.grow = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 618:
                return var0;
        }
    };
    var _closure1_slot15 = var3;
    var3 = function arg0() {
        _fun87688: for (var _fun87688_ip = 0;;) switch (_fun87688_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.product;
                var10 = var0.buyButtonLabel;
                var0 = _closure1_slot13;
                var3 = undefined;
                var5 = var0.bind(var3)();
                var2 = _closure1_slot11;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 29;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.TextWithIOSLinkWorkaround;
                var0 = {
                    'style': null,
                    'variant': 'text-xxs/normal',
                    'color': 'interactive-text-active'
                };
                var5 = var5.disclaimer;
                var0.style = var5;
                var5 = var4.type;
                var4 = 30;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.CollectiblesItemType;
                var4 = var4.EXTERNAL_SKU;
                var4 = var5 !== var4;
                if (!var4) {
                    _fun87688_ip = 200;
                    continue _fun87688
                }
            case 120:
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 15;
                var7 = var11[var5];
                var7 = var6.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var5 = var11[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5.iIglwJ;
                var5 = {};
                var5.buyButtonLabel = var10;
                var9 = _closure1_slot8;
                var9 = var9.PAID_TERMS;
                var5.paidServiceTermURL = var9;
                var4 = var7.bind(var8)(var6, var5);
            case 200:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = 'function ProductDetailsActionSheetPurchaseSectionTsx1(){const{bottomSheet,screenHeight,maxHeight}=this.__closure;const animatedSheetOffset=bottomSheet.animatedPosition!=null?bottomSheet.animatedPosition.get()-screenHeight+maxHeight:0;return{transform:[{translateY:-animatedSheetOffset}]};}';
    var3.code = var6;
    var _closure1_slot17 = var3;
    var3 = 50;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun87689: for (var _fun87689_ip = 0;;) switch (_fun87689_ip) {
            case 0:
                var0 = arg0;
                var15 = var0.product;
                var _closure2_slot0 = var15;
                var14 = var0.analyticsLocations;
                var12 = var0.onBuy;
                var0 = var0.onHeightChange;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var0 = _closure1_slot13;
                var18 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 31;
                var2 = var0[var2];
                var4 = var1.bind(var3)(var2);
                var2 = var4.useCurrentUser;
                var6 = var2.bind(var4)();
                var2 = 32;
                var2 = var0[var2];
                var4 = var1.bind(var3)(var2);
                var2 = var4.useProductPurchaseState;
                var2 = var2.bind(var4)(var15);
                var4 = var2.isPurchased;
                var32 = var2.isPartiallyOwnedBundle;
                var2 = 33;
                var2 = var0[var2];
                var10 = var1.bind(var3)(var2);
                var9 = var10.useStateFromStoresArray;
                var2 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var2;
                var5 = new Array(1);
                var5[0] = var15;
                var2 = function() { // Environment: var7
                    var0 = _closure1_slot6;
                    var2 = var0.isClaiming;
                    var0 = _closure2_slot0;
                    var1 = var0.skuId;
                    var0 = new Array(1);
                    var1 = var2 === var1;
                    var0[0] = var1;
                    return var0;
                };
                var8 = var9.bind(var10)(var8, var2, var5);
                var5 = _closure1_slot3;
                var2 = 1;
                var5 = var5.bind(var3)(var8, var2);
                var2 = 0;
                var9 = var5[var2];
                var8 = _closure1_slot1;
                var2 = 34;
                var2 = var0[var2];
                var5 = var8.bind(var3)(var2);
                var2 = var5.canUseCollectibles;
                var26 = var2.bind(var5)(var6);
                var10 = 35;
                var2 = var0[var10];
                var5 = var1.bind(var3)(var2);
                var2 = var5.isPremiumCollectiblesProduct;
                var5 = var2.bind(var5)(var15);
                var2 = var0[var10];
                var6 = var1.bind(var3)(var2);
                var2 = var6.isFreeCollectiblesProduct;
                var6 = var2.bind(var6)(var15);
                var2 = 36;
                var2 = var0[var2];
                var13 = var1.bind(var3)(var2);
                var2 = var13.isOrbsExclusiveProduct;
                var21 = var2.bind(var13)(var15);
                var2 = 37;
                var2 = var0[var2];
                var13 = var1.bind(var3)(var2);
                var2 = var13.useFetchVirtualCurrencyBalance;
                var2 = var2.bind(var13)();
                var25 = var2.balance;
                var2 = 38;
                var2 = var0[var2];
                var16 = var8.bind(var3)(var2);
                var13 = var16.useConfig;
                var2 = {};
                var17 = 'ProductDetailsActionSheetPurchaseSection';
                var2.location = var17;
                var19 = var13.bind(var16)(var2);
                var2 = 16;
                var2 = var0[var2];
                var13 = var1.bind(var3)(var2);
                var2 = var13.useVirtualCurrencyData;
                var2 = var2.bind(var13)(var15, var26);
                var20 = var2.canAfford;
                var2 = 39;
                var2 = var0[var2];
                var16 = var1.bind(var3)(var2);
                var13 = var16.useHandleUseNow;
                var2 = {};
                var2.product = var15;
                var2 = var13.bind(var16)(var2);
                var16 = var2.handleUseNow;
                var17 = var2.isApplying;
                var2 = 40;
                var2 = var0[var2];
                var8 = var8.bind(var3)(var2);
                var2 = {};
                var2.product = var15;
                var2.analyticsLocations = var14;
                var2.onBuy = var12;
                var2 = var8.bind(var3)(var2);
                var33 = var2.handleBuyNow;
                var34 = var2.isBuying;
                var2 = 41;
                var2 = var0[var2];
                var12 = var1.bind(var3)(var2);
                var8 = var12.useHandleClaim;
                var2 = {};
                var2.product = var15;
                var2 = var8.bind(var12)(var2);
                var8 = var2.handleClaim;
                var2 = var0[var10];
                var12 = var1.bind(var3)(var2);
                var2 = var12.getDefaultPriceSetAssignmentPurchaseType;
                var2 = var2.bind(var12)(var26);
                var0 = var0[var10];
                var1 = var1.bind(var3)(var0);
                var0 = var1.extractPriceByPurchaseTypes;
                var12 = var0.bind(var1)(var15, var2);
                var0 = var5;
                if (var0) {
                    _fun87689_ip = 558;
                    continue _fun87689
                }
            case 555:
                var0 = var6;
            case 558:
                if (var0) {
                    _fun87689_ip = 564;
                    continue _fun87689
                }
            case 561:
                var0 = var21;
            case 564:
                if (var0) {
                    _fun87689_ip = 608;
                    continue _fun87689
                }
            case 567:
                var2 = var15.type;
                var13 = _closure1_slot0;
                var22 = _closure1_slot2;
                var1 = 30;
                var1 = var22[var1];
                var1 = var13.bind(var3)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.EXTERNAL_SKU;
                var0 = var2 === var1;
            case 608:
                if (var0) {
                    _fun87689_ip = 656;
                    continue _fun87689
                }
            case 611:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var10];
                var10 = var2.bind(var3)(var1);
                var2 = var10.shouldHideGiftingForCurrency;
                var1 = null;
                var13 = var1 == var12;
                var1 = undefined;
                if (var13) {
                    _fun87689_ip = 651;
                    continue _fun87689
                }
            case 645:
                var1 = var12.currency;
            case 651:
                var0 = var2.bind(var10)(var1);
            case 656:
                var10 = !var0;
                var1 = _closure1_slot1;
                var12 = _closure1_slot2;
                var0 = 42;
                var0 = var12[var0];
                var2 = var1.bind(var3)(var0);
                var0 = {};
                var31 = true;
                var0.ignoreKeyboard = var31;
                var0 = var2.bind(var3)(var0);
                var28 = var0.height;
                _closure2_slot2 = var28;
                var0 = 43;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var27 = var0.maximum;
                _closure2_slot3 = var27;
                var0 = 44;
                var0 = var12[var0];
                var2 = var1.bind(var3)(var0);
                var0 = {
                    'includeCustomKeyboardHeight': false,
                    'includeKeyboardHeight': true
                };
                var0 = var2.bind(var3)(var0);
                var22 = var0.insets;
                var13 = _closure1_slot0;
                var0 = 45;
                var0 = var12[var0];
                var2 = var13.bind(var3)(var0);
                var0 = var2.useBottomSheet;
                var29 = var0.bind(var2)();
                _closure2_slot4 = var29;
                var0 = 46;
                var2 = var12[var0];
                var23 = var13.bind(var3)(var2);
                var13 = var23.useAnimatedStyle;
                var2 = function() {
                    _fun87691: for (var _fun87691_ip = 0;;) switch (_fun87691_ip) {
                        case 0:
                            var0 = {};
                            var2 = {};
                            var1 = _closure2_slot4;
                            var4 = var1.animatedPosition;
                            var1 = null;
                            var4 = var1 != var4;
                            var1 = 0;
                            if (!var4) {
                                _fun87691_ip = 63;
                                continue _fun87691
                            }
                        case 28:
                            var4 = _closure2_slot4;
                            var5 = var4.animatedPosition;
                            var4 = var5.get;
                            var5 = var4.bind(var5)();
                            var4 = _closure2_slot2;
                            var4 = var5 - var4;
                            var3 = _closure2_slot3;
                            var1 = var4 + var3;
                        case 63:
                            var1 = -var1;
                            var2.translateY = var1;
                            var1 = new Array(1);
                            var1[0] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var24 = {};
                var24.bottomSheet = var29;
                var24.screenHeight = var28;
                var24.maxHeight = var27;
                var2.__closure = var24;
                var24 = 2578721850733.0;
                var2.__workletHash = var24;
                var24 = _closure1_slot17;
                var2.__initData = var24;
                var13 = var13.bind(var23)(var2);
                var2 = _closure1_slot11;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var23 = var18.container;
                var12 = new Array(3);
                var12[0] = var23;
                var12[1] = var13;
                var13 = {};
                var22 = var22.bottom;
                var23 = null;
                if (!(var23 == var22)) {
                    _fun87689_ip = 956;
                    continue _fun87689
                }
            case 926:
                var24 = _closure1_slot1;
                var27 = _closure1_slot2;
                var23 = 9;
                var23 = var27[var23];
                var23 = var24.bind(var3)(var23);
                var23 = var23.spacing;
                var22 = var23.PX_16;
            case 956:
                var13.paddingBottom = var22;
                var12[2] = var13;
                var0.style = var12;
                var7 = function arg0() {
                    _fun87692: for (var _fun87692_ip = 0;;) switch (_fun87692_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun87692_ip = 44;
                                continue _fun87692
                            }
                        case 13:
                            var2 = _closure2_slot1;
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var1 = var0.height;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 44:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.onLayout = var7;
                if (var4) {
                    _fun87689_ip = 1939;
                    continue _fun87689
                }
            case 987:
                if (!var5) {
                    _fun87689_ip = 1039;
                    continue _fun87689
                }
            case 990:
                if (var26) {
                    _fun87689_ip = 1039;
                    continue _fun87689
                }
            case 993:
                if (var6) {
                    _fun87689_ip = 1039;
                    continue _fun87689
                }
            case 996:
                var12 = _closure1_slot11;
                var7 = _closure1_slot0;
                var13 = _closure1_slot2;
                var4 = 48;
                var4 = var13[var4];
                var4 = var7.bind(var3)(var4);
                var7 = var4.UnlockWithNitroButton;
                var4 = {};
                var4 = var12.bind(var3)(var7, var4);
                _fun87689_ip = 2166;
                continue _fun87689;
            case 1039:
                if (var6) {
                    _fun87689_ip = 1826;
                    continue _fun87689
                }
            case 1045:
                if (!var5) {
                    _fun87689_ip = 1054;
                    continue _fun87689
                }
            case 1048:
                if (var26) {
                    _fun87689_ip = 1826;
                    continue _fun87689
                }
            case 1054:
                var7 = var15.type;
                var12 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 30;
                var6 = var6[var5];
                var6 = var12.bind(var3)(var6);
                var6 = var6.CollectiblesItemType;
                var6 = var6.BUNDLE;
                if (!(var7 !== var6)) {
                    _fun87689_ip = 1380;
                    continue _fun87689
                }
            case 1098:
                var7 = var15.type;
                var12 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var5];
                var6 = var12.bind(var3)(var6);
                var6 = var6.CollectiblesItemType;
                var6 = var6.PROFILE_EFFECT;
                if (!(var7 !== var6)) {
                    _fun87689_ip = 1321;
                    continue _fun87689
                }
            case 1139:
                var7 = var15.type;
                var12 = _closure1_slot0;
                var6 = _closure1_slot2;
                var6 = var6[var5];
                var6 = var12.bind(var3)(var6);
                var6 = var6.CollectiblesItemType;
                var6 = var6.NAMEPLATE;
                if (!(var7 !== var6)) {
                    _fun87689_ip = 1262;
                    continue _fun87689
                }
            case 1177:
                var6 = var15.type;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = var13[var5];
                var5 = var12.bind(var3)(var5);
                var5 = var5.CollectiblesItemType;
                var5 = var5.AVATAR_DECORATION;
                var5 = 15;
                var6 = var13[var5];
                var6 = var12.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var13[var5];
                var5 = var12.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.AQ0Veg;
                var22 = var6.bind(var7)(var5);
                _fun87689_ip = 1319;
                continue _fun87689;
            case 1262:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 15;
                var6 = var13[var5];
                var6 = var12.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var13[var5];
                var5 = var12.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.H3vhqU;
                var22 = var6.bind(var7)(var5);
            case 1319:
                _fun87689_ip = 1378;
                continue _fun87689;
            case 1321:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 15;
                var6 = var13[var5];
                var6 = var12.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var13[var5];
                var5 = var12.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.kAeDcK;
                var22 = var6.bind(var7)(var5);
            case 1378:
                _fun87689_ip = 1437;
                continue _fun87689;
            case 1380:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var5 = 15;
                var6 = var13[var5];
                var6 = var12.bind(var3)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var13[var5];
                var5 = var12.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.V1AWw0;
                var22 = var6.bind(var7)(var5);
            case 1437:
                var13 = !var21;
                var7 = _closure1_slot12;
                var6 = _closure1_slot5;
                var5 = {};
                var12 = var18.purchaseSection;
                var5.style = var12;
                var23 = var13;
                if (!var13) {
                    _fun87689_ip = 1469;
                    continue _fun87689
                }
            case 1466:
                var23 = !var19;
            case 1469:
                if (!var23) {
                    _fun87689_ip = 1498;
                    continue _fun87689
                }
            case 1472:
                var27 = _closure1_slot11;
                var24 = _closure1_slot16;
                var12 = {};
                var12.product = var15;
                var12.buyButtonLabel = var22;
                var23 = var27.bind(var3)(var24, var12);
            case 1498:
                var12 = new Array(5);
                var12[0] = var23;
                var23 = var20;
                if (!var23) {
                    _fun87689_ip = 1543;
                    continue _fun87689
                }
            case 1512:
                var28 = _closure1_slot11;
                var27 = _closure1_slot15;
                var24 = {};
                var24.product = var15;
                var24.isPremiumUser = var26;
                var24.balance = var25;
                var23 = var28.bind(var3)(var27, var24);
            case 1543:
                var12[1] = var23;
                var21 = !var21;
                if (!var21) {
                    _fun87689_ip = 1727;
                    continue _fun87689
                }
            case 1556:
                var27 = _closure1_slot12;
                var24 = _closure1_slot5;
                var23 = {};
                var28 = var18.buttonContainer;
                var23.style = var28;
                var30 = _closure1_slot11;
                var29 = _closure1_slot0;
                var35 = _closure1_slot2;
                var28 = 49;
                var28 = var35[var28];
                var28 = var29.bind(var3)(var28);
                var29 = var28.Button;
                var28 = {};
                var28.loading = var34;
                var28.text = var22;
                var28.onPress = var33;
                var28.disabled = var32;
                var33 = 'primary';
                var32 = var33;
                if (!var20) {
                    _fun87689_ip = 1639;
                    continue _fun87689
                }
            case 1635:
                var32 = 'secondary';
            case 1639:
                var28.variant = var32;
                var32 = 'lg';
                var28.size = var32;
                var28.grow = var31;
                var29 = var30.bind(var3)(var29, var28);
                var28 = new Array(2);
                var28[0] = var29;
                var29 = var10;
                if (!var10) {
                    _fun87689_ip = 1713;
                    continue _fun87689
                }
            case 1676:
                var32 = _closure1_slot11;
                var31 = _closure1_slot14;
                var30 = {};
                var30.product = var15;
                var30.analyticsLocations = var14;
                if (!var20) {
                    _fun87689_ip = 1703;
                    continue _fun87689
                }
            case 1699:
                var33 = 'secondary';
            case 1703:
                var30.variant = var33;
                var29 = var32.bind(var3)(var31, var30);
            case 1713:
                var28[1] = var29;
                var23.children = var28;
                var21 = var27.bind(var3)(var24, var23);
            case 1727:
                var12[2] = var21;
                var20 = !var20;
                if (!var20) {
                    _fun87689_ip = 1768;
                    continue _fun87689
                }
            case 1737:
                var24 = _closure1_slot11;
                var23 = _closure1_slot15;
                var21 = {};
                var21.product = var15;
                var21.isPremiumUser = var26;
                var21.balance = var25;
                var20 = var24.bind(var3)(var23, var21);
            case 1768:
                var12[3] = var20;
                if (!var13) {
                    _fun87689_ip = 1778;
                    continue _fun87689
                }
            case 1775:
                var13 = var19;
            case 1778:
                if (!var13) {
                    _fun87689_ip = 1807;
                    continue _fun87689
                }
            case 1781:
                var21 = _closure1_slot11;
                var20 = _closure1_slot16;
                var19 = {};
                var19.product = var15;
                var19.buyButtonLabel = var22;
                var13 = var21.bind(var3)(var20, var19);
            case 1807:
                var12[4] = var13;
                var5.children = var12;
                var4 = var7.bind(var3)(var6, var5);
                _fun87689_ip = 2166;
                continue _fun87689;
            case 1826:
                var7 = _closure1_slot11;
                var6 = _closure1_slot1;
                var21 = _closure1_slot2;
                var5 = 47;
                var5 = var21[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var12 = var18.button;
                var5.style = var12;
                var20 = _closure1_slot0;
                var12 = 15;
                var13 = var21[var12];
                var13 = var20.bind(var3)(var13);
                var19 = var13.intl;
                var13 = var19.string;
                var12 = var21[var12];
                var12 = var20.bind(var3)(var12);
                var12 = var12.t;
                var12 = var12.zp6caO;
                var12 = var13.bind(var19)(var12);
                var5.text = var12;
                var5.loading = var9;
                var5.onPress = var8;
                var4 = var7.bind(var3)(var6, var5);
                _fun87689_ip = 2166;
                continue _fun87689;
            case 1939:
                var6 = var15.type;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 30;
                var5 = var8[var5];
                var5 = var7.bind(var3)(var5);
                var5 = var5.CollectiblesItemType;
                var5 = var5.EXTERNAL_SKU;
                var5 = var6 !== var5;
                if (!var5) {
                    _fun87689_ip = 2163;
                    continue _fun87689
                }
            case 1986:
                var8 = _closure1_slot12;
                var7 = _closure1_slot5;
                var6 = {};
                var9 = var18.buttonContainer;
                var6.style = var9;
                var13 = _closure1_slot11;
                var12 = _closure1_slot1;
                var21 = _closure1_slot2;
                var9 = 47;
                var9 = var21[var9];
                var12 = var12.bind(var3)(var9);
                var9 = {};
                var18 = var18.button;
                var9.style = var18;
                var9.loading = var17;
                var20 = _closure1_slot0;
                var17 = 15;
                var18 = var21[var17];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var17 = var21[var17];
                var17 = var20.bind(var3)(var17);
                var17 = var17.t;
                var17 = var17.MAS7uK;
                var17 = var18.bind(var19)(var17);
                var9.text = var17;
                var9.onPress = var16;
                var12 = var13.bind(var3)(var12, var9);
                var9 = new Array(2);
                var9[0] = var12;
                if (!var10) {
                    _fun87689_ip = 2149;
                    continue _fun87689
                }
            case 2123:
                var13 = _closure1_slot11;
                var12 = _closure1_slot14;
                var11 = {};
                var11.product = var15;
                var11.analyticsLocations = var14;
                var10 = var13.bind(var3)(var12, var11);
            case 2149:
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 2163:
                var4 = var5;
            case 2166:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4617, 3285, 660, 6970, 33, 1297, 671, 7535, 10691, 3280, 11339, 11358, 1234, 11355, 11354, 1469, 5734, 4562, 11278, 1307, 11371, 11372, 9569, 9595, 3943, 4086, 5337, 3495, 9525, 11330, 566, 3111, 4600, 4614, 10086, 11374, 6969, 11375, 11376, 1464, 11377, 4896, 4936, 3722, 4876, 11378, 4085, 2]);