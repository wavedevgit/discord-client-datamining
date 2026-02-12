// modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var14 = 0;
    var3 = var5[var14];
    var0 = undefined;
    var3 = var13.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var12 = 1;
    var6 = var5[var12];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot5 = var3;
    var10 = 3;
    var3 = var5[var10];
    var3 = var13.bind(var0)(var3);
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
    var7 = var3.jsx;
    var _closure1_slot11 = var7;
    var3 = var3.jsxs;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var6 = var8.createStyles;
    var3 = {};
    var9 = {};
    var11 = 9;
    var15 = var5[var11];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOWER;
    var9.backgroundColor = var15;
    var15 = var5[var11];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var9.paddingHorizontal = var15;
    var15 = var5[var11];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var9.paddingBottom = var15;
    var15 = var5[var11];
    var15 = var13.bind(var0)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var9.paddingTop = var15;
    var15 = 'absolute';
    var9.position = var15;
    var9.bottom = var14;
    var9.left = var14;
    var9.right = var14;
    var3.container = var9;
    var9 = {};
    var14 = var5[var11];
    var14 = var13.bind(var0)(var14);
    var14 = var14.radii;
    var14 = var14.round;
    var9.borderRadius = var14;
    var3.button = var9;
    var9 = {};
    var14 = var5[var11];
    var14 = var13.bind(var0)(var14);
    var14 = var14.spacing;
    var14 = var14.PX_12;
    var9.gap = var14;
    var3.purchaseSection = var9;
    var9 = {};
    var14 = 0.75;
    var9.opacity = var14;
    var3.disclaimer = var9;
    var9 = {};
    var14 = 'row';
    var9.flexDirection = var14;
    var11 = var5[var11];
    var11 = var13.bind(var0)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_12;
    var9.gap = var11;
    var3.buttonContainer = var9;
    var9 = {};
    var11 = 'center';
    var9.textAlignVertical = var11;
    var3.orbsButtonText = var9;
    var9 = {};
    var11 = {};
    var11.translateY = var10;
    var10 = new Array(2);
    var10[0] = var11;
    var11 = {};
    var11.translateX = var12;
    var10[1] = var11;
    var9.transform = var10;
    var3.orbsIcon = var9;
    var3 = var6.bind(var8)(var3);
    var _closure1_slot13 = var3;
    var3 = function arg0() {
        _fun71340: for (var _fun71340_ip = 0;;) switch (_fun71340_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.product;
                var _closure2_slot0 = var1;
                var1 = var0.analyticsLocations;
                var _closure2_slot1 = var1;
                var9 = var0.variant;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun71340_ip = 40;
                    continue _fun71340
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
                    _fun71340_ip = 156;
                    continue _fun71340
                }
            case 123:
                var9 = _closure1_slot1;
                var10 = _closure1_slot2;
                var8 = 9;
                var8 = var10[var8];
                var8 = var9.bind(var3)(var8);
                var8 = var8.colors;
                var8 = var8.TEXT_STRONG;
                _fun71340_ip = 187;
                continue _fun71340;
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
        _fun71342: for (var _fun71342_ip = 0;;) switch (_fun71342_ip) {
            case 0:
                var0 = arg0;
                var10 = var0.balance;
                var _closure2_slot0 = var10;
                var11 = var0.product;
                var _closure2_slot1 = var11;
                var3 = var0.isPremiumUser;
                var4 = undefined;
                if (!(var3 === var4)) {
                    _fun71342_ip = 39;
                    continue _fun71342
                }
            case 37:
                var3 = false;
            case 39:
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var0 = _closure1_slot13;
                var5 = var0.bind(var4)();
                _closure2_slot2 = var5;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 16;
                var0 = var7[var0];
                var2 = var6.bind(var4)(var0);
                var0 = var2.useVirtualCurrencyData;
                var0 = var0.bind(var2)(var11, var3);
                var2 = var0.enabled;
                var16 = var0.price;
                var0 = var0.canAfford;
                var3 = 17;
                var3 = var7[var3];
                var7 = var6.bind(var4)(var3);
                var6 = var7.useProductDisableState;
                var3 = var11.skuId;
                var3 = var6.bind(var7)(var3);
                var8 = var3.isDisabled;
                if (var8) {
                    _fun71342_ip = 164;
                    continue _fun71342
                }
            case 161:
                var8 = !var0;
            case 164:
                _closure2_slot3 = var8;
                var3 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 18;
                var0 = var6[var0];
                var9 = var3.bind(var4)(var0);
                var7 = var9.useEnableMobileVariants;
                var0 = 'Virtual Currency Button';
                var9 = var7.bind(var9)(var0);
                _closure2_slot4 = var9;
                var0 = 19;
                var0 = var6[var0];
                var3 = var3.bind(var4)(var0);
                var0 = var3.useNavigation;
                var12 = var0.bind(var3)();
                _closure2_slot5 = var12;
                var3 = _closure1_slot1;
                var0 = 20;
                var0 = var6[var0];
                var0 = var3.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var0 = var0.analyticsLocations;
                _closure2_slot6 = var0;
                var7 = _closure1_slot4;
                var6 = var7.useCallback;
                var3 = new Array(5);
                var3[0] = var12;
                var3[1] = var11;
                var3[2] = var10;
                var3[3] = var9;
                var3[4] = var0;
                var0 = function() { // Environment: var13
                    var4 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var3 = var1[var0];
                    var0 = undefined;
                    var5 = var4.bind(var0)(var3);
                    var3 = var5.hideActionSheet;
                    var3 = var3.bind(var5)();
                    var3 = 21;
                    var3 = var1[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.pushLazy;
                    var3 = _closure1_slot0;
                    var2 = 23;
                    var2 = var1[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = 22;
                    var2 = var1[var2];
                    var1 = var1.paths;
                    var3 = var3.bind(var0)(var2, var1);
                    var2 = {};
                    var6 = _closure2_slot1;
                    var6 = var6.skuId;
                    var2.skuId = var6;
                    var1 = _closure2_slot6;
                    var2.analyticsLocations = var1;
                    var1 = function arg0() {
                        _fun71344: for (var _fun71344_ip = 0;;) switch (_fun71344_ip) {
                            case 0:
                                var0 = arg0;
                                var9 = var0.entitlements;
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 24;
                                var1 = var1[var0];
                                var0 = undefined;
                                var4 = var3.bind(var0)(var1);
                                var3 = var4.fetchCollectiblesPurchases;
                                var1 = {};
                                var5 = _closure2_slot4;
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var8 = 25;
                                var8 = var11[var8];
                                var8 = var10.bind(var0)(var8);
                                var8 = var8.ShopVariantsReturnStyle;
                                if (var5) {
                                    _fun71344_ip = 88;
                                    continue _fun71344
                                }
                            case 80:
                                var5 = var8.INDIVIDUAL_PRODUCTS;
                                _fun71344_ip = 94;
                                continue _fun71344;
                            case 88:
                                var5 = var8.VARIANTS_GROUP;
                            case 94:
                                var1.variantsReturnStyle = var5;
                                var1 = var3.bind(var4)(var1);
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var3 = 21;
                                var1 = var1[var3];
                                var5 = var4.bind(var0)(var1);
                                var4 = var5.popWithKey;
                                var1 = 'ORB_CHECKOUT_MODAL';
                                var1 = var4.bind(var5)(var1);
                                var1 = _closure2_slot1;
                                var4 = var1.skuId;
                                var1 = _closure1_slot7;
                                var1 = var1.ORB_PROFILE_BADGE;
                                if (!(var4 !== var1)) {
                                    _fun71344_ip = 400;
                                    continue _fun71344
                                }
                            case 168:
                                var1 = _closure2_slot1;
                                var4 = var1.skuId;
                                var1 = _closure1_slot7;
                                var1 = var1.FRACTIONAL_PREMIUM;
                                if (!(var4 !== var1)) {
                                    _fun71344_ip = 261;
                                    continue _fun71344
                                }
                            case 192:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var1 = 28;
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
                                _fun71344_ip = 489;
                                continue _fun71344;
                            case 261:
                                var5 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var4 = 12;
                                var4 = var1[var4];
                                var8 = var5.bind(var0)(var4);
                                var7 = var8.openLazy;
                                var5 = _closure1_slot0;
                                var4 = 23;
                                var4 = var1[var4];
                                var5 = var5.bind(var0)(var4);
                                var4 = 27;
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
                                    _fun71344_ip = 346;
                                    continue _fun71344
                                }
                            case 340:
                                var9 = var10.consumed;
                            case 346:
                                var1 = var1 != var9;
                                if (!var1) {
                                    _fun71344_ip = 356;
                                    continue _fun71344
                                }
                            case 353:
                                var1 = var9;
                            case 356:
                                var4.consumed = var1;
                                var1 = function() {
                                    var3 = _closure2_slot5;
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
                                    var3 = _closure2_slot5;
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
                                _fun71344_ip = 489;
                                continue _fun71344;
                            case 400:
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var3 = var1[var3];
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.pushLazy;
                                var3 = _closure1_slot0;
                                var2 = 23;
                                var2 = var1[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = 26;
                                var2 = var1[var2];
                                var1 = var1.paths;
                                var3 = var3.bind(var0)(var2, var1);
                                var2 = {};
                                var1 = 'ORB_BADGE_COLLECTED_MODAL';
                                var2.modalKey = var1;
                                var6 = function() {
                                    var3 = _closure2_slot5;
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
                            case 489:
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
                    _fun71342_ip = 659;
                    continue _fun71342
                }
            case 320:
                if (!var2) {
                    _fun71342_ip = 659;
                    continue _fun71342
                }
            case 326:
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
                    _fun71348: for (var _fun71348_ip = 0;;) switch (_fun71348_ip) {
                        case 0:
                            var4 = _closure1_slot11;
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 29;
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
                                _fun71348_ip = 102;
                                continue _fun71348
                            }
                        case 94:
                            var0 = var5.WHITE;
                            _fun71348_ip = 108;
                            continue _fun71348;
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
                var2 = 30;
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
                    _fun71342_ip = 465;
                    continue _fun71342
                }
            case 459:
                var6 = 'interactive-text-active';
            case 465:
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
                var5 = 31;
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
                    _fun71342_ip = 630;
                    continue _fun71342
                }
            case 626:
                var7 = 'secondary';
            case 630:
                var5.variant = var7;
                var7 = true;
                var5.grow = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 659:
                return var0;
        }
    };
    var _closure1_slot15 = var3;
    var3 = function arg0() {
        _fun71349: for (var _fun71349_ip = 0;;) switch (_fun71349_ip) {
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
                var0 = 32;
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
                var4 = 33;
                var4 = var7[var4];
                var4 = var6.bind(var3)(var4);
                var4 = var4.CollectiblesItemType;
                var4 = var4.EXTERNAL_SKU;
                var4 = var5 !== var4;
                if (!var4) {
                    _fun71349_ip = 200;
                    continue _fun71349
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
    var3 = 34;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.UnlockWithNitroButton;
    var3 = {};
    var3 = var7.bind(var0)(var6, var3);
    var _closure1_slot18 = var3;
    var3 = 53;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/native/ProductDetailsActionSheetPurchaseSection.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun71350: for (var _fun71350_ip = 0;;) switch (_fun71350_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.product;
                var _closure2_slot0 = var5;
                var33 = var0.analyticsLocations;
                var18 = var0.onBuy;
                var0 = var0.onHeightChange;
                var _closure2_slot1 = var0;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var16 = _closure1_slot11;
                var1 = _closure1_slot14;
                var0 = {};
                var0.product = var5;
                var0.analyticsLocations = var33;
                var11 = var16.bind(var3)(var1, var0);
                var0 = _closure1_slot13;
                var17 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 35;
                var2 = var0[var2];
                var4 = var1.bind(var3)(var2);
                var2 = var4.useCurrentUser;
                var7 = var2.bind(var4)();
                var2 = 36;
                var2 = var0[var2];
                var4 = var1.bind(var3)(var2);
                var2 = var4.useProductPurchaseState;
                var2 = var2.bind(var4)(var5);
                var4 = var2.isPurchased;
                var31 = var2.isPartiallyOwnedBundle;
                var2 = 37;
                var2 = var0[var2];
                var10 = var1.bind(var3)(var2);
                var9 = var10.useStateFromStoresArray;
                var2 = _closure1_slot6;
                var8 = new Array(1);
                var8[0] = var2;
                var6 = new Array(1);
                var6[0] = var5;
                var2 = function() { // Environment: var13
                    var0 = _closure1_slot6;
                    var2 = var0.isClaiming;
                    var0 = _closure2_slot0;
                    var1 = var0.skuId;
                    var0 = new Array(1);
                    var1 = var2 === var1;
                    var0[0] = var1;
                    return var0;
                };
                var8 = var9.bind(var10)(var8, var2, var6);
                var6 = _closure1_slot3;
                var2 = 1;
                var6 = var6.bind(var3)(var8, var2);
                var2 = 0;
                var12 = var6[var2];
                var9 = _closure1_slot1;
                var2 = 38;
                var2 = var0[var2];
                var6 = var9.bind(var3)(var2);
                var2 = var6.canUseCollectibles;
                var6 = var2.bind(var6)(var7);
                var10 = 39;
                var2 = var0[var10];
                var7 = var1.bind(var3)(var2);
                var2 = var7.isPremiumCollectiblesProduct;
                var7 = var2.bind(var7)(var5);
                var2 = var0[var10];
                var8 = var1.bind(var3)(var2);
                var2 = var8.isFreeCollectiblesProduct;
                var8 = var2.bind(var8)(var5);
                var2 = 40;
                var2 = var0[var2];
                var14 = var1.bind(var3)(var2);
                var2 = var14.isOrbsExclusiveProduct;
                var23 = var2.bind(var14)(var5);
                var2 = 41;
                var2 = var0[var2];
                var14 = var1.bind(var3)(var2);
                var2 = var14.useFetchVirtualCurrencyBalance;
                var2 = var2.bind(var14)();
                var19 = var2.balance;
                var14 = _closure1_slot15;
                var2 = {};
                var2.product = var5;
                var2.isPremiumUser = var6;
                var2.balance = var19;
                var21 = var16.bind(var3)(var14, var2);
                var2 = {};
                var2.product = var5;
                var2.isPremiumUser = var6;
                var2.balance = var19;
                var25 = var16.bind(var3)(var14, var2);
                var2 = 42;
                var2 = var0[var2];
                var16 = var9.bind(var3)(var2);
                var14 = var16.useConfig;
                var2 = {};
                var19 = 'ProductDetailsActionSheetPurchaseSection';
                var2.location = var19;
                var19 = var14.bind(var16)(var2);
                var2 = 16;
                var2 = var0[var2];
                var14 = var1.bind(var3)(var2);
                var2 = var14.useVirtualCurrencyData;
                var2 = var2.bind(var14)(var5, var6);
                var20 = var2.canAfford;
                var2 = 43;
                var2 = var0[var2];
                var16 = var1.bind(var3)(var2);
                var14 = var16.useHandleUseNow;
                var2 = {};
                var2.product = var5;
                var2 = var14.bind(var16)(var2);
                var14 = var2.handleUseNow;
                var16 = var2.isApplying;
                var2 = 44;
                var2 = var0[var2];
                var9 = var9.bind(var3)(var2);
                var2 = {};
                var2.product = var5;
                var2.analyticsLocations = var33;
                var2.onBuy = var18;
                var2 = var9.bind(var3)(var2);
                var32 = var2.handleBuyNow;
                var34 = var2.isBuying;
                var2 = 45;
                var2 = var0[var2];
                var18 = var1.bind(var3)(var2);
                var9 = var18.useHandleClaim;
                var2 = {};
                var2.product = var5;
                var2 = var9.bind(var18)(var2);
                var9 = var2.handleClaim;
                var2 = var0[var10];
                var18 = var1.bind(var3)(var2);
                var2 = var18.getDefaultPriceSetAssignmentPurchaseType;
                var2 = var2.bind(var18)(var6);
                var0 = var0[var10];
                var1 = var1.bind(var3)(var0);
                var0 = var1.extractPriceByPurchaseTypes;
                var18 = var0.bind(var1)(var5, var2);
                var0 = var7;
                if (var0) {
                    _fun71350_ip = 634;
                    continue _fun71350
                }
            case 631:
                var0 = var8;
            case 634:
                if (var0) {
                    _fun71350_ip = 640;
                    continue _fun71350
                }
            case 637:
                var0 = var23;
            case 640:
                if (var0) {
                    _fun71350_ip = 684;
                    continue _fun71350
                }
            case 643:
                var2 = var5.type;
                var22 = _closure1_slot0;
                var24 = _closure1_slot2;
                var1 = 33;
                var1 = var24[var1];
                var1 = var22.bind(var3)(var1);
                var1 = var1.CollectiblesItemType;
                var1 = var1.EXTERNAL_SKU;
                var0 = var2 === var1;
            case 684:
                if (var0) {
                    _fun71350_ip = 732;
                    continue _fun71350
                }
            case 687:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var10];
                var10 = var2.bind(var3)(var1);
                var2 = var10.shouldHideGiftingForCurrency;
                var1 = null;
                var22 = var1 == var18;
                var1 = undefined;
                if (var22) {
                    _fun71350_ip = 727;
                    continue _fun71350
                }
            case 721:
                var1 = var18.currency;
            case 727:
                var0 = var2.bind(var10)(var1);
            case 732:
                var10 = !var0;
                var1 = _closure1_slot1;
                var18 = _closure1_slot2;
                var0 = 46;
                var0 = var18[var0];
                var2 = var1.bind(var3)(var0);
                var0 = {};
                var30 = true;
                var0.ignoreKeyboard = var30;
                var0 = var2.bind(var3)(var0);
                var29 = var0.height;
                _closure2_slot2 = var29;
                var0 = 47;
                var0 = var18[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var28 = var0.maximum;
                _closure2_slot3 = var28;
                var0 = 48;
                var0 = var18[var0];
                var2 = var1.bind(var3)(var0);
                var0 = {
                    'includeCustomKeyboardHeight': false,
                    'includeKeyboardHeight': true
                };
                var0 = var2.bind(var3)(var0);
                var24 = var0.insets;
                var22 = _closure1_slot0;
                var0 = 49;
                var0 = var18[var0];
                var2 = var22.bind(var3)(var0);
                var0 = var2.useBottomSheet;
                var35 = var0.bind(var2)();
                _closure2_slot4 = var35;
                var0 = 50;
                var2 = var18[var0];
                var26 = var22.bind(var3)(var2);
                var22 = var26.useAnimatedStyle;
                var2 = function() {
                    _fun71352: for (var _fun71352_ip = 0;;) switch (_fun71352_ip) {
                        case 0:
                            var0 = {};
                            var2 = {};
                            var1 = _closure2_slot4;
                            var4 = var1.animatedPosition;
                            var1 = null;
                            var4 = var1 != var4;
                            var1 = 0;
                            if (!var4) {
                                _fun71352_ip = 63;
                                continue _fun71352
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
                var27 = {};
                var27.bottomSheet = var35;
                var27.screenHeight = var29;
                var27.maxHeight = var28;
                var2.__closure = var27;
                var27 = 2578721850733.0;
                var2.__workletHash = var27;
                var27 = _closure1_slot17;
                var2.__initData = var27;
                var22 = var22.bind(var26)(var2);
                var2 = _closure1_slot11;
                var0 = var18[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var26 = var17.container;
                var18 = new Array(3);
                var18[0] = var26;
                var18[1] = var22;
                var22 = {};
                var24 = var24.bottom;
                var26 = null;
                if (!(var26 == var24)) {
                    _fun71350_ip = 1032;
                    continue _fun71350
                }
            case 1002:
                var27 = _closure1_slot1;
                var28 = _closure1_slot2;
                var26 = 9;
                var26 = var28[var26];
                var26 = var27.bind(var3)(var26);
                var26 = var26.spacing;
                var24 = var26.PX_16;
            case 1032:
                var22.paddingBottom = var24;
                var18[2] = var22;
                var0.style = var18;
                var13 = function arg0() {
                    _fun71353: for (var _fun71353_ip = 0;;) switch (_fun71353_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun71353_ip = 44;
                                continue _fun71353
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
                var0.onLayout = var13;
                if (var4) {
                    _fun71350_ip = 1925;
                    continue _fun71350
                }
            case 1063:
                if (!var7) {
                    _fun71350_ip = 1081;
                    continue _fun71350
                }
            case 1066:
                if (var6) {
                    _fun71350_ip = 1081;
                    continue _fun71350
                }
            case 1069:
                if (var8) {
                    _fun71350_ip = 1081;
                    continue _fun71350
                }
            case 1072:
                var4 = _closure1_slot18;
                _fun71350_ip = 2129;
                continue _fun71350;
            case 1081:
                if (var8) {
                    _fun71350_ip = 1812;
                    continue _fun71350
                }
            case 1087:
                if (!var7) {
                    _fun71350_ip = 1096;
                    continue _fun71350
                }
            case 1090:
                if (var6) {
                    _fun71350_ip = 1812;
                    continue _fun71350
                }
            case 1096:
                var8 = var5.type;
                var13 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 33;
                var7 = var7[var6];
                var7 = var13.bind(var3)(var7);
                var7 = var7.CollectiblesItemType;
                var7 = var7.BUNDLE;
                if (!(var8 !== var7)) {
                    _fun71350_ip = 1422;
                    continue _fun71350
                }
            case 1140:
                var8 = var5.type;
                var13 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var6];
                var7 = var13.bind(var3)(var7);
                var7 = var7.CollectiblesItemType;
                var7 = var7.PROFILE_EFFECT;
                if (!(var8 !== var7)) {
                    _fun71350_ip = 1363;
                    continue _fun71350
                }
            case 1181:
                var8 = var5.type;
                var13 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var6];
                var7 = var13.bind(var3)(var7);
                var7 = var7.CollectiblesItemType;
                var7 = var7.NAMEPLATE;
                if (!(var8 !== var7)) {
                    _fun71350_ip = 1304;
                    continue _fun71350
                }
            case 1219:
                var7 = var5.type;
                var13 = _closure1_slot0;
                var18 = _closure1_slot2;
                var6 = var18[var6];
                var6 = var13.bind(var3)(var6);
                var6 = var6.CollectiblesItemType;
                var6 = var6.AVATAR_DECORATION;
                var6 = 15;
                var7 = var18[var6];
                var7 = var13.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var18[var6];
                var6 = var13.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.AQ0Veg;
                var22 = var7.bind(var8)(var6);
                _fun71350_ip = 1361;
                continue _fun71350;
            case 1304:
                var13 = _closure1_slot0;
                var18 = _closure1_slot2;
                var6 = 15;
                var7 = var18[var6];
                var7 = var13.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var18[var6];
                var6 = var13.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.H3vhqU;
                var22 = var7.bind(var8)(var6);
            case 1361:
                _fun71350_ip = 1420;
                continue _fun71350;
            case 1363:
                var13 = _closure1_slot0;
                var18 = _closure1_slot2;
                var6 = 15;
                var7 = var18[var6];
                var7 = var13.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var18[var6];
                var6 = var13.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.kAeDcK;
                var22 = var7.bind(var8)(var6);
            case 1420:
                _fun71350_ip = 1479;
                continue _fun71350;
            case 1422:
                var13 = _closure1_slot0;
                var18 = _closure1_slot2;
                var6 = 15;
                var7 = var18[var6];
                var7 = var13.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var6 = var18[var6];
                var6 = var13.bind(var3)(var6);
                var6 = var6.t;
                var6 = var6.V1AWw0;
                var22 = var7.bind(var8)(var6);
            case 1479:
                var18 = !var23;
                var8 = _closure1_slot12;
                var7 = _closure1_slot5;
                var6 = {};
                var13 = var17.purchaseSection;
                var6.style = var13;
                var24 = var18;
                if (!var18) {
                    _fun71350_ip = 1511;
                    continue _fun71350
                }
            case 1508:
                var24 = !var19;
            case 1511:
                if (!var24) {
                    _fun71350_ip = 1540;
                    continue _fun71350
                }
            case 1514:
                var27 = _closure1_slot11;
                var26 = _closure1_slot16;
                var13 = {};
                var13.product = var5;
                var13.buyButtonLabel = var22;
                var24 = var27.bind(var3)(var26, var13);
            case 1540:
                var13 = new Array(5);
                var13[0] = var24;
                var24 = var20;
                if (!var24) {
                    _fun71350_ip = 1557;
                    continue _fun71350
                }
            case 1554:
                var24 = var25;
            case 1557:
                var13[1] = var24;
                var23 = !var23;
                if (!var23) {
                    _fun71350_ip = 1741;
                    continue _fun71350
                }
            case 1570:
                var26 = _closure1_slot12;
                var25 = _closure1_slot5;
                var24 = {};
                var27 = var17.buttonContainer;
                var24.style = var27;
                var29 = _closure1_slot11;
                var28 = _closure1_slot0;
                var35 = _closure1_slot2;
                var27 = 52;
                var27 = var35[var27];
                var27 = var28.bind(var3)(var27);
                var28 = var27.Button;
                var27 = {};
                var27.loading = var34;
                var27.text = var22;
                var27.onPress = var32;
                var27.disabled = var31;
                var32 = 'primary';
                var31 = var32;
                if (!var20) {
                    _fun71350_ip = 1653;
                    continue _fun71350
                }
            case 1649:
                var31 = 'secondary';
            case 1653:
                var27.variant = var31;
                var31 = 'lg';
                var27.size = var31;
                var27.grow = var30;
                var28 = var29.bind(var3)(var28, var27);
                var27 = new Array(2);
                var27[0] = var28;
                var28 = var10;
                if (!var10) {
                    _fun71350_ip = 1727;
                    continue _fun71350
                }
            case 1690:
                var31 = _closure1_slot11;
                var30 = _closure1_slot14;
                var29 = {};
                var29.product = var5;
                var29.analyticsLocations = var33;
                if (!var20) {
                    _fun71350_ip = 1717;
                    continue _fun71350
                }
            case 1713:
                var32 = 'secondary';
            case 1717:
                var29.variant = var32;
                var28 = var31.bind(var3)(var30, var29);
            case 1727:
                var27[1] = var28;
                var24.children = var27;
                var23 = var26.bind(var3)(var25, var24);
            case 1741:
                var13[2] = var23;
                var20 = !var20;
                if (!var20) {
                    _fun71350_ip = 1754;
                    continue _fun71350
                }
            case 1751:
                var20 = var21;
            case 1754:
                var13[3] = var20;
                if (!var18) {
                    _fun71350_ip = 1764;
                    continue _fun71350
                }
            case 1761:
                var18 = var19;
            case 1764:
                if (!var18) {
                    _fun71350_ip = 1793;
                    continue _fun71350
                }
            case 1767:
                var21 = _closure1_slot11;
                var20 = _closure1_slot16;
                var19 = {};
                var19.product = var5;
                var19.buyButtonLabel = var22;
                var18 = var21.bind(var3)(var20, var19);
            case 1793:
                var13[4] = var18;
                var6.children = var13;
                var4 = var8.bind(var3)(var7, var6);
                _fun71350_ip = 2129;
                continue _fun71350;
            case 1812:
                var8 = _closure1_slot11;
                var7 = _closure1_slot1;
                var21 = _closure1_slot2;
                var6 = 51;
                var6 = var21[var6];
                var7 = var7.bind(var3)(var6);
                var6 = {};
                var13 = var17.button;
                var6.style = var13;
                var20 = _closure1_slot0;
                var13 = 15;
                var18 = var21[var13];
                var18 = var20.bind(var3)(var18);
                var19 = var18.intl;
                var18 = var19.string;
                var13 = var21[var13];
                var13 = var20.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13.zp6caO;
                var13 = var18.bind(var19)(var13);
                var6.text = var13;
                var6.loading = var12;
                var6.onPress = var9;
                var4 = var8.bind(var3)(var7, var6);
                _fun71350_ip = 2129;
                continue _fun71350;
            case 1925:
                var6 = var5.type;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var5 = 33;
                var5 = var8[var5];
                var5 = var7.bind(var3)(var5);
                var5 = var5.CollectiblesItemType;
                var5 = var5.EXTERNAL_SKU;
                var5 = var6 !== var5;
                if (!var5) {
                    _fun71350_ip = 2126;
                    continue _fun71350
                }
            case 1972:
                var8 = _closure1_slot12;
                var7 = _closure1_slot5;
                var6 = {};
                var9 = var17.buttonContainer;
                var6.style = var9;
                var13 = _closure1_slot11;
                var12 = _closure1_slot1;
                var19 = _closure1_slot2;
                var9 = 51;
                var9 = var19[var9];
                var12 = var12.bind(var3)(var9);
                var9 = {};
                var17 = var17.button;
                var9.style = var17;
                var9.loading = var16;
                var18 = _closure1_slot0;
                var15 = 15;
                var16 = var19[var15];
                var16 = var18.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.string;
                var15 = var19[var15];
                var15 = var18.bind(var3)(var15);
                var15 = var15.t;
                var15 = var15.MAS7uK;
                var15 = var16.bind(var17)(var15);
                var9.text = var15;
                var9.onPress = var14;
                var12 = var13.bind(var3)(var12, var9);
                var9 = new Array(2);
                var9[0] = var12;
                if (!var10) {
                    _fun71350_ip = 2112;
                    continue _fun71350
                }
            case 2109:
                var10 = var11;
            case 2112:
                var9[1] = var10;
                var6.children = var9;
                var5 = var8.bind(var3)(var7, var6);
            case 2126:
                var4 = var5;
            case 2129:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4621, 3284, 660, 7040, 33, 1297, 671, 7585, 8885, 3279, 8861, 8887, 1234, 8878, 8877, 5788, 1469, 5785, 4567, 11133, 1307, 4603, 4656, 11673, 11674, 7606, 8856, 3938, 4091, 5384, 3490, 11676, 7610, 8841, 566, 3111, 4605, 4619, 8851, 11677, 7039, 11678, 11679, 1464, 11632, 4871, 4909, 3717, 4849, 4090, 2]);