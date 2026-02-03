// modules/premium/native/PremiumPlanSelectionActionSheet.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var6;
    var0 = function arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8() {
        var2 = arg0;
        var1 = arg1;
        var _closure2_slot0 = var1;
        var1 = arg2;
        var _closure2_slot1 = var1;
        var1 = arg3;
        var _closure2_slot2 = var1;
        var1 = arg4;
        var _closure2_slot3 = var1;
        var1 = arg5;
        var _closure2_slot4 = var1;
        var1 = arg6;
        var _closure2_slot5 = var1;
        var1 = arg7;
        var _closure2_slot6 = var1;
        var1 = arg8;
        var _closure2_slot7 = var1;
        var1 = global;
        var4 = var1.Set;
        var3 = var2.map;
        var1 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.premiumTier;
            return var0;
        };
        var5 = var3.bind(var2)(var1);
        var3 = var4.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var4
            }
        });
        var6 = var3;
        var1 = new var6[var4](var5, var4);
        var1 = var1 instanceof Object ? var1 : var3;
        var3 = var1.size;
        var1 = 1;
        var1 = var3 > var1;
        var _closure2_slot8 = var1;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            _fun57682: for (var _fun57682_ip = 0;;) switch (_fun57682_ip) {
                case 0:
                    var1 = arg0;
                    var0 = {};
                    var5 = _closure1_slot30;
                    var4 = _closure1_slot37;
                    var3 = {};
                    var3.premiumItem = var1;
                    var7 = _closure2_slot0;
                    var3.selectedProductId = var7;
                    var7 = _closure2_slot8;
                    var3.optionNeedsProductNameLabel = var7;
                    var7 = _closure2_slot1;
                    var3.trialOffer = var7;
                    var7 = _closure2_slot2;
                    var3.discountOffer = var7;
                    var10 = var1.productId;
                    var8 = _closure2_slot3;
                    var7 = null;
                    if (!(var10 === var8)) {
                        _fun57682_ip = 82;
                        continue _fun57682
                    }
                case 78:
                    var7 = _closure2_slot4;
                case 82:
                    var3.discountedPriceString = var7;
                    var7 = _closure2_slot5;
                    var3.userIsEligibleForBogoPromotion = var7;
                    var7 = _closure2_slot6;
                    var3.selectedPremiumType = var7;
                    var7 = _closure2_slot7;
                    var2 = null;
                    if (!var7) {
                        _fun57682_ip = 224;
                        continue _fun57682
                    }
                case 114:
                    var8 = var1.basePlanId;
                    var7 = _closure1_slot19;
                    var7 = var7.PREMIUM_MONTH_TIER_2;
                    var2 = null;
                    if (!(var8 === var7)) {
                        _fun57682_ip = 224;
                        continue _fun57682
                    }
                case 136:
                    var9 = _closure1_slot30;
                    var8 = _closure1_slot35;
                    var7 = {};
                    var13 = _closure1_slot0;
                    var14 = _closure1_slot2;
                    var10 = 16;
                    var11 = var14[var10];
                    var6 = undefined;
                    var11 = var13.bind(var6)(var11);
                    var12 = var11.intl;
                    var11 = var12.string;
                    var10 = var14[var10];
                    var10 = var13.bind(var6)(var10);
                    var10 = var10.t;
                    var10 = var10["4wKQD9"];
                    var10 = var11.bind(var12)(var10);
                    var7.text = var10;
                    var10 = 'white';
                    var7.backgroundColorType = var10;
                    var2 = var9.bind(var6)(var8, var7);
                case 224:
                    var3.customBadgeComponent = var2;
                    var2 = undefined;
                    var2 = var5.bind(var2)(var4, var3);
                    var0.name = var2;
                    var1 = var1.productId;
                    var0.value = var1;
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot40 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var10 = 0;
    var1 = var6[var10];
    var0 = undefined;
    var1 = var15.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var9 = 1;
    var1 = var6[var9];
    var1 = var15.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var4 = var6[var1];
    var1 = arg3;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.View;
    var _closure1_slot6 = var4;
    var1 = var1.ActivityIndicator;
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var15.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var15.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.setInitiatedPurchaseFromNewFlow;
    var _closure1_slot10 = var4;
    var4 = var1.setApplePaymentLinkStatus;
    var _closure1_slot11 = var4;
    var4 = var1.usePremiumPlanPurchasedStore;
    var _closure1_slot12 = var4;
    var1 = var1.reset;
    var _closure1_slot13 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.DISCOUNTS;
    var _closure1_slot14 = var4;
    var4 = var1.PREMIUM_TIER_2_PLANS;
    var _closure1_slot15 = var4;
    var4 = var1.APPLE_PAYMENT_LINK_1_MONTH_10_PERCENT_DISCOUNT;
    var _closure1_slot16 = var4;
    var4 = var1.PremiumTypes;
    var _closure1_slot17 = var4;
    var4 = var1.SubscriptionIntervalTypes;
    var _closure1_slot18 = var4;
    var4 = var1.SubscriptionPlans;
    var _closure1_slot19 = var4;
    var1 = var1.SubscriptionPlanInfo;
    var _closure1_slot20 = var1;
    var13 = 8;
    var1 = var6[var13];
    var1 = var5.bind(var0)(var1);
    var4 = var1.AnalyticEvents;
    var _closure1_slot21 = var4;
    var4 = var1.AnalyticsObjects;
    var _closure1_slot22 = var4;
    var4 = var1.AnalyticsObjectTypes;
    var _closure1_slot23 = var4;
    var4 = var1.LinkingTypes;
    var _closure1_slot24 = var4;
    var4 = var1.MarketingURLs;
    var _closure1_slot25 = var4;
    var1 = var1.HelpdeskArticles;
    var _closure1_slot26 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.CustomCheckoutFlow;
    var _closure1_slot27 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.TitleStyleType;
    var _closure1_slot28 = var1;
    var1 = 11;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.CurrencyCodes;
    var _closure1_slot29 = var1;
    var1 = 12;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot30 = var4;
    var4 = var1.jsxs;
    var _closure1_slot31 = var4;
    var1 = var1.Fragment;
    var _closure1_slot32 = var1;
    var1 = 13;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createStyles;
    var1 = {};
    var8 = {};
    var16 = 16;
    var8.padding = var16;
    var1.body = var8;
    var11 = 30;
    var12 = 20;
    var8 = {
        'paddingTop': 30,
        'paddingHorizontal': 20
    };
    var1.headerText = var8;
    var8 = {};
    var8.marginBottom = var16;
    var1.contentSelectPlan = var8;
    var17 = 40;
    var8 = {
        'alignItems': 'center',
        'paddingTop': 40,
        'paddingBottom': 56
    };
    var1.contentActivated = var8;
    var8 = {
        'width': 328,
        'marginTop': 16,
        'textAlign': 'center'
    };
    var1.contentActivatedText = var8;
    var8 = {};
    var14 = 32;
    var8.width = var14;
    var1.nitroWheel = var8;
    var8 = {
        'paddingTop': 0,
        'paddingLeft': 0
    };
    var1.formTitle = var8;
    var8 = {};
    var14 = 'none';
    var8.backgroundColor = var14;
    var1.formSectionBody = var8;
    var8 = {};
    var14 = -24;
    var8.marginTop = var14;
    var1.formSectionBodyWithNoTitle = var8;
    var8 = {};
    var8.paddingHorizontal = var10;
    var1.planOptionRowContainer = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var1.planOptionContainer = var8;
    var10 = 'flex-end';
    var8 = {
        'flexGrow': 1,
        'flexShrink': 1,
        'display': 'flex',
        'flexDirection': 'column',
        'alignItems': 'flex-end'
    };
    var1.planOptionPriceContainer = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'flexShrink': 1
    };
    var1.planOptionDiscountContainer = var8;
    var8 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'borderRadius': null,
        'backgroundColor': null,
        'paddingVertical': 2,
        'paddingHorizontal': 8,
        'marginRight': 8
    };
    var14 = 14;
    var18 = var6[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.radii;
    var18 = var18.lg;
    var8.borderRadius = var18;
    var18 = var6[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.unsafe_rawColors;
    var18 = var18.GREEN_360;
    var8.backgroundColor = var18;
    var1.planOptionDiscount = var8;
    var8 = {};
    var18 = var6[var14];
    var18 = var15.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.WHITE;
    var8.backgroundColor = var18;
    var1.planOptionDiscountWhite = var8;
    var8 = {};
    var18 = 'uppercase';
    var8.textTransform = var18;
    var1.planOptionDiscountText = var8;
    var8 = {};
    var8.marginVertical = var17;
    var1.blockedPaymentContainer = var8;
    var8 = {};
    var8.marginTop = var16;
    var1.legalDisclaimerText = var8;
    var8 = {};
    var8.height = var17;
    var17 = var6[var14];
    var17 = var15.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.round;
    var8.borderRadius = var17;
    var1.button = var8;
    var8 = {};
    var17 = 48;
    var8.height = var17;
    var17 = var6[var14];
    var17 = var15.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.round;
    var8.borderRadius = var17;
    var1.buttonLarge = var8;
    var8 = {
        'height': 48,
        'borderRadius': null,
        'marginTop': 12
    };
    var17 = var6[var14];
    var17 = var15.bind(var0)(var17);
    var17 = var17.radii;
    var17 = var17.round;
    var8.borderRadius = var17;
    var1.secondaryButtonLarge = var8;
    var8 = {};
    var8.fontSize = var16;
    var1.buttonTextLarge = var8;
    var8 = {
        'height': 1,
        'width': '100%'
    };
    var14 = var6[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BORDER_SUBTLE;
    var8.backgroundColor = var14;
    var1.divider = var8;
    var8 = {};
    var8.marginBottom = var13;
    var1.offerDividerMargin = var8;
    var8 = {};
    var8.marginBottom = var13;
    var1.trialDisclaimer = var8;
    var8 = {};
    var8.marginBottom = var12;
    var1.discountDisclaimer = var8;
    var8 = {};
    var8.marginVertical = var11;
    var1.loadingIndicator = var8;
    var8 = {};
    var8.alignItems = var10;
    var1.discountSubTextContainer = var8;
    var8 = {};
    var8.flexShrink = var9;
    var1.priceText = var8;
    var1 = var4.bind(var7)(var1);
    var _closure1_slot33 = var1;
    var1 = function arg0() {
        _fun57683: for (var _fun57683_ip = 0;;) switch (_fun57683_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.premiumType;
                var7 = var0.isPaymentSuccess;
                var1 = var0.selectedPremiumType;
                var5 = var0.trialOffer;
                var4 = var0.discountOffer;
                var2 = _closure1_slot33;
                var3 = undefined;
                var11 = var2.bind(var3)();
                var2 = null;
                if (!(var2 == var6)) {
                    _fun57683_ip = 169;
                    continue _fun57683
                }
            case 52:
                if (var7) {
                    _fun57683_ip = 169;
                    continue _fun57683
                }
            case 55:
                var10 = _closure1_slot30;
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 15;
                var8 = var15[var8];
                var8 = var14.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'style': null,
                    'variant': 'text-md/semibold',
                    'color': 'text-default',
                    'accessibilityRole': 'header'
                };
                var11 = var11.headerText;
                var8.style = var11;
                var11 = 16;
                var12 = var15[var11];
                var12 = var14.bind(var3)(var12);
                var13 = var12.intl;
                var12 = var13.string;
                var11 = var15[var11];
                var11 = var14.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.vLz3Zs;
                var11 = var12.bind(var13)(var11);
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                return var8;
            case 169:
                if (!var7) {
                    _fun57683_ip = 175;
                    continue _fun57683
                }
            case 172:
                var6 = var1;
            case 175:
                var1 = _closure1_slot1;
                var7 = _closure1_slot2;
                var8 = 17;
                var8 = var7[var8];
                var9 = var1.bind(var3)(var8);
                var8 = var2 != var6;
                var2 = 'If isPaymentSuccess is true, a value must be given for selectedPremiumType. Or premiumType must be given.';
                var2 = var9.bind(var3)(var8, var2);
                var2 = _closure1_slot30;
                var0 = 18;
                var0 = var7[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.premiumType = var6;
                var0.trialOffer = var5;
                var0.discountOffer = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function arg0() {
        _fun57684: for (var _fun57684_ip = 0;;) switch (_fun57684_ip) {
            case 0:
                var0 = arg0;
                var7 = var0.text;
                var9 = var0.backgroundColorType;
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun57684_ip = 24;
                    continue _fun57684
                }
            case 20:
                var9 = 'green';
            case 24:
                var0 = _closure1_slot33;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot30;
                var1 = _closure1_slot6;
                var0 = {};
                var6 = var8.planOptionDiscount;
                var5 = new Array(2);
                var5[0] = var6;
                var6 = 'white';
                var9 = var6 === var9;
                var6 = null;
                if (!var9) {
                    _fun57684_ip = 78;
                    continue _fun57684
                }
            case 72:
                var6 = var8.planOptionDiscountWhite;
            case 78:
                var5[1] = var6;
                var0.style = var5;
                var6 = _closure1_slot30;
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 15;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {};
                var8 = var8.planOptionDiscountText;
                var4.style = var8;
                var8 = 'text-xs/bold';
                var4.variant = var8;
                var8 = 'always-white';
                if (!var9) {
                    _fun57684_ip = 150;
                    continue _fun57684
                }
            case 146:
                var8 = 'black';
            case 150:
                var4.color = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot35 = var1;
    var1 = function arg0() {
        _fun57685: for (var _fun57685_ip = 0;;) switch (_fun57685_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.customBadgeComponent;
                var15 = var1.discount;
                var14 = var1.userLocale;
                var3 = var1.showBogoPromotionBadge;
                var4 = var1.hideDefaultDiscountBadges;
                var2 = null;
                if (!(var2 == var0)) {
                    _fun57685_ip = 274;
                    continue _fun57685
                }
            case 42:
                var1 = null;
                if (var4) {
                    _fun57685_ip = 271;
                    continue _fun57685
                }
            case 50:
                if (var3) {
                    _fun57685_ip = 186;
                    continue _fun57685
                }
            case 56:
                var3 = var2 != var15;
                var2 = null;
                if (!var3) {
                    _fun57685_ip = 184;
                    continue _fun57685
                }
            case 65:
                var6 = _closure1_slot30;
                var5 = _closure1_slot35;
                var4 = {};
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 16;
                var8 = var13[var7];
                var3 = undefined;
                var8 = var12.bind(var3)(var8);
                var10 = var8.intl;
                var9 = var10.format;
                var7 = var13[var7];
                var7 = var12.bind(var3)(var7);
                var7 = var7.t;
                var8 = var7.IAybsG;
                var7 = {};
                var11 = 19;
                var11 = var13[var11];
                var13 = var12.bind(var3)(var11);
                var12 = var13.formatPercent;
                var11 = 100;
                var11 = var15 / var11;
                var11 = var12.bind(var13)(var14, var11);
                var7.discount = var11;
                var7 = var9.bind(var10)(var8, var7);
                var4.text = var7;
                var2 = var6.bind(var3)(var5, var4);
            case 184:
                _fun57685_ip = 268;
                continue _fun57685;
            case 186:
                var6 = _closure1_slot30;
                var5 = _closure1_slot35;
                var4 = {};
                var10 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 16;
                var8 = var11[var7];
                var3 = undefined;
                var8 = var10.bind(var3)(var8);
                var9 = var8.intl;
                var8 = var9.string;
                var7 = var11[var7];
                var7 = var10.bind(var3)(var7);
                var7 = var7.t;
                var7 = var7.iQTfWx;
                var7 = var8.bind(var9)(var7);
                var4.text = var7;
                var2 = var6.bind(var3)(var5, var4);
            case 268:
                var1 = var2;
            case 271:
                var0 = var1;
            case 274:
                return var0;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function arg0() {
        _fun57686: for (var _fun57686_ip = 0;;) switch (_fun57686_ip) {
            case 0:
                var0 = arg0;
                var25 = var0.premiumItem;
                var _closure2_slot0 = var25;
                var4 = var0.selectedProductId;
                var9 = var0.optionNeedsProductNameLabel;
                var26 = var0.customBadgeComponent;
                var1 = var0.trialOffer;
                var22 = var0.discountOffer;
                var13 = var0.discountedPriceString;
                var16 = var0.userIsEligibleForBogoPromotion;
                var3 = undefined;
                if (!(var16 === var3)) {
                    _fun57686_ip = 65;
                    continue _fun57686
                }
            case 63:
                var16 = false;
            case 65:
                var12 = var0.selectedPremiumType;
                var _closure2_slot1 = var3;
                var _closure2_slot2 = var3;
                var0 = _closure1_slot33;
                var15 = var0.bind(var3)();
                var0 = _closure1_slot8;
                var32 = var0.locale;
                var5 = _closure1_slot5;
                var2 = var5.useState;
                var0 = 0;
                var6 = var2.bind(var5)(var0);
                var2 = _closure1_slot4;
                var5 = 2;
                var6 = var2.bind(var3)(var6, var5);
                var2 = var6[var0];
                _closure2_slot1 = var2;
                var21 = 1;
                var6 = var6[var21];
                _closure2_slot2 = var6;
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 20;
                var6 = var8[var6];
                var10 = var7.bind(var3)(var6);
                var8 = var10.useStateFromStores;
                var6 = _closure1_slot9;
                var7 = new Array(1);
                var7[0] = var6;
                var6 = function() { // Environment: var14
                    var2 = _closure1_slot9;
                    var1 = var2.getProduct;
                    var0 = _closure2_slot0;
                    var0 = var0.productId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var33 = var8.bind(var10)(var7, var6);
                var23 = null;
                var10 = var23 != var1;
                if (!var10) {
                    _fun57686_ip = 267;
                    continue _fun57686
                }
            case 205:
                var1 = var1.subscription_trial;
                var7 = var23 == var1;
                var6 = undefined;
                if (var7) {
                    _fun57686_ip = 226;
                    continue _fun57686
                }
            case 220:
                var6 = var1.sku_id;
            case 226:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 21;
                var1 = var8[var1];
                var8 = var7.bind(var3)(var1);
                var7 = var8.getSkuIdForPremiumType;
                var1 = var25.premiumTier;
                var1 = var7.bind(var8)(var1);
                var10 = var6 === var1;
            case 267:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 21;
                var6 = var7[var1];
                var11 = var8.bind(var3)(var6);
                var8 = var11.getTierDisplayNameByPlanId;
                var6 = var25.basePlanId;
                var36 = var8.bind(var11)(var6);
                var6 = _closure1_slot1;
                var1 = var7[var1];
                var8 = var6.bind(var3)(var1);
                var7 = var8.getIntervalString;
                var6 = var25.interval;
                var1 = false;
                var35 = var7.bind(var8)(var6, var1);
                var6 = var25.basePlanId;
                var1 = _closure1_slot19;
                var1 = var1.PREMIUM_YEAR_TIER_2;
                var6 = var6 === var1;
                var28 = var10;
                if (var28) {
                    _fun57686_ip = 367;
                    continue _fun57686
                }
            case 363:
                var28 = var23 != var22;
            case 367:
                if (var28) {
                    _fun57686_ip = 382;
                    continue _fun57686
                }
            case 370:
                var1 = var16;
                if (!var16) {
                    _fun57686_ip = 379;
                    continue _fun57686
                }
            case 376:
                var1 = var6;
            case 379:
                var28 = var1;
            case 382:
                var30 = null;
                if (var28) {
                    _fun57686_ip = 401;
                    continue _fun57686
                }
            case 387:
                var6 = _closure1_slot14;
                var1 = var25.basePlanId;
                var30 = var6[var1];
            case 401:
                if (!var16) {
                    _fun57686_ip = 424;
                    continue _fun57686
                }
            case 404:
                var6 = var25.basePlanId;
                var1 = _closure1_slot19;
                var1 = var1.PREMIUM_MONTH_TIER_2;
                var16 = var6 === var1;
            case 424:
                var1 = var25.productId;
                var19 = var1 === var4;
                if (!(var23 != var33)) {
                    _fun57686_ip = 495;
                    continue _fun57686
                }
            case 438:
                var4 = var33.currencyCode;
                var1 = var4.toLowerCase;
                var4 = var1.bind(var4)();
                var1 = _closure1_slot29;
                var1 = var4 in var1;
                if (var1) {
                    _fun57686_ip = 477;
                    continue _fun57686
                }
            case 465:
                var1 = _closure1_slot29;
                var24 = var1.USD;
                _fun57686_ip = 493;
                continue _fun57686;
            case 477:
                var4 = var33.currencyCode;
                var1 = var4.toLowerCase;
                var24 = var1.bind(var4)();
            case 493:
                _fun57686_ip = 505;
                continue _fun57686;
            case 495:
                var1 = _closure1_slot29;
                var24 = var1.USD;
            case 505:
                var4 = _closure1_slot20;
                var1 = var25.basePlanId;
                var1 = var4[var1];
                var4 = var23 != var13;
                var29 = null;
                if (!var4) {
                    _fun57686_ip = 573;
                    continue _fun57686
                }
            case 528:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 22;
                var4 = var7[var4];
                var8 = var6.bind(var3)(var4);
                var7 = var8.formatRate;
                var6 = var1.interval;
                var4 = var1.intervalCount;
                var29 = var7.bind(var8)(var13, var6, var4);
            case 573:
                if (var10) {
                    _fun57686_ip = 619;
                    continue _fun57686
                }
            case 576:
                var27 = var13;
                if (!(var23 == var27)) {
                    _fun57686_ip = 617;
                    continue _fun57686
                }
            case 583:
                var4 = var23 == var33;
                var6 = undefined;
                if (var4) {
                    _fun57686_ip = 598;
                    continue _fun57686
                }
            case 592:
                var6 = var33.priceString;
            case 598:
                var7 = var23 != var6;
                var4 = '$...';
                if (!var7) {
                    _fun57686_ip = 614;
                    continue _fun57686
                }
            case 611:
                var4 = var6;
            case 614:
                var27 = var4;
            case 617:
                _fun57686_ip = 723;
                continue _fun57686;
            case 619:
                var18 = _closure1_slot0;
                var20 = _closure1_slot2;
                var4 = 16;
                var6 = var20[var4];
                var6 = var18.bind(var3)(var6);
                var8 = var6.intl;
                var7 = var8.formatToPlainString;
                var4 = var20[var4];
                var4 = var18.bind(var3)(var4);
                var4 = var4.t;
                var6 = var4.hXcaLT;
                var4 = {};
                var11 = 22;
                var11 = var20[var11];
                var20 = var18.bind(var3)(var11);
                var18 = var20.formatPrice;
                var11 = {
                    'minimumFractionDigits': 0,
                    'maximumFractionDigits': 0
                };
                var11 = var18.bind(var20)(var0, var24, var11);
                var4.price = var11;
                var27 = var7.bind(var8)(var6, var4);
            case 723:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 22;
                var4 = var7[var4];
                var8 = var6.bind(var3)(var4);
                var7 = var8.formatRate;
                var6 = var23 == var33;
                var4 = undefined;
                if (var6) {
                    _fun57686_ip = 764;
                    continue _fun57686
                }
            case 758:
                var4 = var33.priceString;
            case 764:
                var11 = var23 != var4;
                var31 = '$...';
                var6 = var31;
                if (!var11) {
                    _fun57686_ip = 783;
                    continue _fun57686
                }
            case 780:
                var6 = var4;
            case 783:
                var4 = var1.interval;
                var1 = var1.intervalCount;
                var24 = var7.bind(var8)(var6, var4, var1);
                if (!(!(var2 > var0))) {
                    _fun57686_ip = 814;
                    continue _fun57686
                }
            case 806:
                var8 = var15.planOptionPriceContainer;
                _fun57686_ip = 860;
                continue _fun57686;
            case 814:
                var1 = var15.planOptionPriceContainer;
                var0 = new Array(2);
                var0[0] = var1;
                var1 = {};
                var4 = {};
                var2 = var2 / var5;
                var4.translateY = var2;
                var2 = new Array(1);
                var2[0] = var4;
                var1.transform = var2;
                var0[1] = var1;
                var8 = var0;
            case 860:
                var2 = _closure1_slot31;
                var1 = _closure1_slot6;
                var0 = {};
                var4 = var15.planOptionContainer;
                var0.style = var4;
                var6 = _closure1_slot30;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var20 = 15;
                var4 = var4[var20];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {};
                if (!(var23 == var22)) {
                    _fun57686_ip = 922;
                    continue _fun57686
                }
            case 915:
                var7 = 'text-md/medium';
                if (!var10) {
                    _fun57686_ip = 928;
                    continue _fun57686
                }
            case 922:
                var7 = 'text-lg/medium';
            case 928:
                var4.variant = var7;
                var18 = 'interactive-text-default';
                var7 = var18;
                if (!var19) {
                    _fun57686_ip = 950;
                    continue _fun57686
                }
            case 944:
                var7 = 'interactive-text-active';
            case 950:
                var4.color = var7;
                var7 = var35;
                if (!var9) {
                    _fun57686_ip = 990;
                    continue _fun57686
                }
            case 960:
                var9 = global;
                var9 = var9.HermesInternal;
                var34 = var9.concat;
                var11 = '';
                var9 = ' ';
                var7 = var34.bind(var11)(var36, var9, var35);
            case 990:
                var4.children = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot31;
                var6 = _closure1_slot6;
                var5 = {};
                var5.style = var8;
                var8 = {};
                var9 = var15.planOptionDiscountContainer;
                var8.style = var9;
                var11 = _closure1_slot36;
                var9 = {};
                var9.userLocale = var32;
                var9.discount = var30;
                var9.hideDefaultDiscountBadges = var28;
                var9.customBadgeComponent = var26;
                var9.showBogoPromotionBadge = var16;
                var11 = var11.bind(var3)(var9);
                var9 = new Array(2);
                var9[0] = var11;
                var26 = _closure1_slot30;
                var16 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var20];
                var11 = var16.bind(var3)(var11);
                var16 = var11.Text;
                var11 = {};
                var28 = var15.priceText;
                var11.style = var28;
                var28 = 'text-lg/medium';
                var11.variant = var28;
                var28 = var18;
                if (!var19) {
                    _fun57686_ip = 1138;
                    continue _fun57686
                }
            case 1132:
                var28 = 'interactive-text-active';
            case 1138:
                var11.color = var28;
                var11.children = var27;
                var11 = var26.bind(var3)(var16, var11);
                var9[1] = var11;
                var8.children = var9;
                var9 = var7.bind(var3)(var6, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var9 = null;
                if (!var10) {
                    _fun57686_ip = 1451;
                    continue _fun57686
                }
            case 1182:
                var16 = _closure1_slot30;
                var11 = _closure1_slot0;
                var10 = _closure1_slot2;
                var10 = var10[var20];
                var10 = var11.bind(var3)(var10);
                var11 = var10.Text;
                var10 = {};
                var26 = 'text-xs/medium';
                var10.variant = var26;
                var26 = var18;
                if (!var19) {
                    _fun57686_ip = 1232;
                    continue _fun57686
                }
            case 1226:
                var26 = 'text-default';
            case 1232:
                var10.color = var26;
                var26 = var25.interval;
                var25 = _closure1_slot18;
                var25 = var25.YEAR;
                if (!(var26 !== var25)) {
                    _fun57686_ip = 1351;
                    continue _fun57686
                }
            case 1256:
                var26 = _closure1_slot0;
                var30 = _closure1_slot2;
                var25 = 16;
                var27 = var30[var25];
                var27 = var26.bind(var3)(var27);
                var28 = var27.intl;
                var27 = var28.formatToPlainString;
                var25 = var30[var25];
                var25 = var26.bind(var3)(var25);
                var25 = var25.t;
                var26 = var25.v9QeON;
                var25 = {};
                var30 = var23 == var33;
                var32 = undefined;
                if (var30) {
                    _fun57686_ip = 1325;
                    continue _fun57686
                }
            case 1319:
                var32 = var33.priceString;
            case 1325:
                var34 = var23 != var32;
                var30 = var31;
                if (!var34) {
                    _fun57686_ip = 1338;
                    continue _fun57686
                }
            case 1335:
                var30 = var32;
            case 1338:
                var25.price = var30;
                var25 = var27.bind(var28)(var26, var25);
                _fun57686_ip = 1441;
                continue _fun57686;
            case 1351:
                var27 = _closure1_slot0;
                var32 = _closure1_slot2;
                var26 = 16;
                var28 = var32[var26];
                var28 = var27.bind(var3)(var28);
                var30 = var28.intl;
                var28 = var30.formatToPlainString;
                var26 = var32[var26];
                var26 = var27.bind(var3)(var26);
                var26 = var26.t;
                var27 = var26.ECT4A5;
                var26 = {};
                var34 = var23 == var33;
                var32 = undefined;
                if (var34) {
                    _fun57686_ip = 1420;
                    continue _fun57686
                }
            case 1414:
                var32 = var33.priceString;
            case 1420:
                var33 = var23 != var32;
                if (!var33) {
                    _fun57686_ip = 1430;
                    continue _fun57686
                }
            case 1427:
                var31 = var32;
            case 1430:
                var26.price = var31;
                var25 = var28.bind(var30)(var27, var26);
            case 1441:
                var10.children = var25;
                var9 = var16.bind(var3)(var11, var10);
            case 1451:
                var8[1] = var9;
                var11 = _closure1_slot31;
                var10 = _closure1_slot6;
                var9 = {};
                var15 = var15.discountSubTextContainer;
                var9.style = var15;
                var14 = function arg0() {
                    _fun57688: for (var _fun57688_ip = 0;;) switch (_fun57688_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var2 = var0.height;
                            var1 = _closure2_slot1;
                            if (!(var2 !== var1)) {
                                _fun57688_ip = 42;
                                continue _fun57688
                            }
                        case 31:
                            var1 = _closure2_slot2;
                            var0 = undefined;
                            var0 = var1.bind(var0)(var2);
                        case 42:
                            var0 = undefined;
                            return var0;
                    }
                };
                var9.onLayout = var14;
                var15 = var23 != var29;
                var14 = null;
                if (!var15) {
                    _fun57686_ip = 1687;
                    continue _fun57686
                }
            case 1497:
                var15 = var23 != var22;
                var14 = null;
                if (!var15) {
                    _fun57686_ip = 1687;
                    continue _fun57686
                }
            case 1509:
                var12 = var23 == var12;
                var14 = null;
                if (!var12) {
                    _fun57686_ip = 1687;
                    continue _fun57686
                }
            case 1521:
                var16 = _closure1_slot30;
                var15 = _closure1_slot0;
                var12 = _closure1_slot2;
                var12 = var12[var20];
                var12 = var15.bind(var3)(var12);
                var15 = var12.Text;
                var12 = {};
                var25 = 'text-sm/medium';
                var12.variant = var25;
                var25 = var18;
                if (!var19) {
                    _fun57686_ip = 1569;
                    continue _fun57686
                }
            case 1563:
                var25 = 'text-default';
            case 1569:
                var12.color = var25;
                var26 = _closure1_slot0;
                var30 = _closure1_slot2;
                var25 = 16;
                var27 = var30[var25];
                var27 = var26.bind(var3)(var27);
                var28 = var27.intl;
                var27 = var28.formatToPlainString;
                var25 = var30[var25];
                var25 = var26.bind(var3)(var25);
                var25 = var25.t;
                var26 = var25["02Gmgm"];
                var25 = {};
                var25.discountedPrice = var29;
                var29 = var22.discount;
                var31 = var23 == var29;
                var30 = undefined;
                if (var31) {
                    _fun57686_ip = 1653;
                    continue _fun57686
                }
            case 1647:
                var30 = var29.user_usage_limit;
            case 1653:
                var31 = var23 != var30;
                var29 = var21;
                if (!var31) {
                    _fun57686_ip = 1666;
                    continue _fun57686
                }
            case 1663:
                var29 = var30;
            case 1666:
                var25.numMonths = var29;
                var25 = var27.bind(var28)(var26, var25);
                var12.children = var25;
                var14 = var16.bind(var3)(var15, var12);
            case 1687:
                var12 = new Array(2);
                var12[0] = var14;
                var13 = var23 != var13;
                if (!var13) {
                    _fun57686_ip = 1706;
                    continue _fun57686
                }
            case 1702:
                var13 = var23 != var22;
            case 1706:
                if (!var13) {
                    _fun57686_ip = 1872;
                    continue _fun57686
                }
            case 1712:
                var16 = _closure1_slot30;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var14 = var14[var20];
                var14 = var15.bind(var3)(var14);
                var15 = var14.Text;
                var14 = {};
                var20 = 'text-sm/medium';
                var14.variant = var20;
                if (!var19) {
                    _fun57686_ip = 1757;
                    continue _fun57686
                }
            case 1751:
                var18 = 'text-default';
            case 1757:
                var14.color = var18;
                var18 = _closure1_slot0;
                var25 = _closure1_slot2;
                var17 = 16;
                var19 = var25[var17];
                var19 = var18.bind(var3)(var19);
                var20 = var19.intl;
                var19 = var20.formatToPlainString;
                var17 = var25[var17];
                var17 = var18.bind(var3)(var17);
                var17 = var17.t;
                var18 = var17["vZk+c/"];
                var17 = {};
                var17.regularPrice = var24;
                var24 = var22.discount;
                var25 = var23 == var24;
                var22 = undefined;
                if (var25) {
                    _fun57686_ip = 1841;
                    continue _fun57686
                }
            case 1835:
                var22 = var24.user_usage_limit;
            case 1841:
                var23 = var23 != var22;
                if (!var23) {
                    _fun57686_ip = 1851;
                    continue _fun57686
                }
            case 1848:
                var21 = var22;
            case 1851:
                var17.numMonths = var21;
                var17 = var19.bind(var20)(var18, var17);
                var14.children = var17;
                var13 = var16.bind(var3)(var15, var14);
            case 1872:
                var12[1] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot37 = var1;
    var1 = function arg0() {
        _fun57689: for (var _fun57689_ip = 0;;) switch (_fun57689_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.isPaymentSuccess;
                var4 = var1.onClose;
                var5 = var1.ctaText;
                var22 = var1.mobileWebCtaProps;
                var2 = var1.onStartPayment;
                var _closure2_slot0 = var2;
                var30 = var1.planInterval;
                var6 = var1.shouldUseApplePaymentLink;
                var17 = var1.disabled;
                var19 = var1.loading;
                var1 = _closure1_slot33;
                var3 = undefined;
                var9 = var1.bind(var3)();
                if (var0) {
                    _fun57689_ip = 681;
                    continue _fun57689
                }
            case 81:
                if (var6) {
                    _fun57689_ip = 159;
                    continue _fun57689
                }
            case 84:
                var7 = {};
                var0 = var9.button;
                var7.style = var0;
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 23;
                var10 = var2[var0];
                var10 = var1.bind(var3)(var10);
                var10 = var10.Sizes;
                var10 = var10.MEDIUM;
                var7.size = var10;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.Colors;
                var0 = var0.GREEN;
                var7.color = var0;
                _fun57689_ip = 246;
                continue _fun57689;
            case 159:
                var0 = {};
                var1 = var9.buttonLarge;
                var0.style = var1;
                var2 = _closure1_slot1;
                var10 = _closure1_slot2;
                var1 = 23;
                var11 = var10[var1];
                var11 = var2.bind(var3)(var11);
                var11 = var11.Sizes;
                var11 = var11.LARGE;
                var0.size = var11;
                var1 = var10[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.Colors;
                var1 = var1.BRAND;
                var0.color = var1;
                var1 = var9.buttonTextLarge;
                var0.textStyle = var1;
                var7 = var0;
            case 246:
                var2 = _closure1_slot30;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var24 = 23;
                var0 = var0[var24];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.text = var5;
                var33 = var0;
                var32 = var7;
                var5 = copyDataProperties(var33, var32);
                var5 = function() {
                    var2 = _closure2_slot0;
                    var1 = {};
                    var0 = false;
                    var1.shouldOpenApplePaymentLink = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var21 = 'onPress';
                var0[var21] = var5;
                var18 = 'loading';
                var0[var18] = var19;
                var16 = 'disabled';
                var0[var16] = var17;
                var10 = var2.bind(var3)(var1, var0);
                var2 = _closure1_slot31;
                var1 = _closure1_slot32;
                var0 = {};
                var5 = new Array(2);
                var5[0] = var10;
                var23 = var7;
                if (!var6) {
                    _fun57689_ip = 354;
                    continue _fun57689
                }
            case 348:
                var7 = null;
                var6 = var7 != var22;
            case 354:
                if (!var6) {
                    _fun57689_ip = 665;
                    continue _fun57689
                }
            case 360:
                var11 = _closure1_slot31;
                var10 = _closure1_slot32;
                var7 = {};
                var14 = _closure1_slot30;
                var25 = _closure1_slot0;
                var31 = _closure1_slot2;
                var12 = 15;
                var12 = var31[var12];
                var12 = var25.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {};
                var15 = var9.legalDisclaimerText;
                var12.style = var15;
                var15 = 'text-xxs/medium';
                var12.variant = var15;
                var15 = 16;
                var26 = var31[var15];
                var26 = var25.bind(var3)(var26);
                var27 = var26.intl;
                var26 = var27.format;
                var15 = var31[var15];
                var15 = var25.bind(var3)(var15);
                var15 = var15.t;
                var25 = var15.juYDmQ;
                var15 = {};
                var28 = _closure1_slot25;
                var28 = var28.PAID_TERMS;
                var15.paidURL = var28;
                var29 = _closure1_slot1;
                var28 = 21;
                var28 = var31[var28];
                var29 = var29.bind(var3)(var28);
                var28 = var29.getIntervalStringAsNoun;
                var31 = null;
                if (!(var31 == var30)) {
                    _fun57689_ip = 520;
                    continue _fun57689
                }
            case 510:
                var31 = _closure1_slot18;
                var30 = var31.MONTH;
            case 520:
                var28 = var28.bind(var29)(var30);
                var15.interval = var28;
                var15 = var26.bind(var27)(var25, var15);
                var12.children = var15;
                var13 = var14.bind(var3)(var13, var12);
                var12 = new Array(2);
                var12[0] = var13;
                var15 = _closure1_slot30;
                var14 = _closure1_slot1;
                var13 = _closure1_slot2;
                var13 = var13[var24];
                var14 = var14.bind(var3)(var13);
                var13 = {};
                var24 = var22.text;
                var13.text = var24;
                var33 = var13;
                var32 = var23;
                var23 = copyDataProperties(var33, var32);
                var24 = var9.secondaryButtonLarge;
                var23 = 'style';
                var13[var23] = var24;
                var23 = var22.color;
                var22 = 'color';
                var13[var22] = var23;
                var20 = function() {
                    var2 = _closure2_slot0;
                    var1 = {};
                    var0 = true;
                    var1.shouldOpenApplePaymentLink = var0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var13[var21] = var20;
                var13[var18] = var19;
                var13[var16] = var17;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var7.children = var12;
                var6 = var11.bind(var3)(var10, var7);
            case 665:
                var5[1] = var6;
                var0.children = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 681:
                var2 = _closure1_slot30;
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var5 = 23;
                var0 = var7[var5];
                var1 = var6.bind(var3)(var0);
                var0 = {};
                var9 = var9.button;
                var0.style = var9;
                var11 = _closure1_slot0;
                var8 = 16;
                var9 = var7[var8];
                var9 = var11.bind(var3)(var9);
                var10 = var9.intl;
                var9 = var10.string;
                var8 = var7[var8];
                var8 = var11.bind(var3)(var8);
                var8 = var8.t;
                var8 = var8.WAI6xu;
                var8 = var9.bind(var10)(var8);
                var0.text = var8;
                var5 = var7[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.Colors;
                var5 = var5.BRAND;
                var0.color = var5;
                var0.onPress = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot38 = var1;
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun57693: for (var _fun57693_ip = 0;;) switch (_fun57693_ip) {
                case 0:
                    var1 = arg0;
                    var0 = var1.additionalPlans;
                    var4 = var1.isDeprecated;
                    var3 = var1.numPremiumGuild;
                    var2 = var1.premiumTier;
                    var0 = var0.length;
                    var1 = 0;
                    var0 = var1 === var0;
                    if (!var0) {
                        _fun57693_ip = 44;
                        continue _fun57693
                    }
                case 41:
                    var0 = !var4;
                case 44:
                    if (!var0) {
                        _fun57693_ip = 51;
                        continue _fun57693
                    }
                case 47:
                    var0 = var1 === var3;
                case 51:
                    if (!var0) {
                        _fun57693_ip = 65;
                        continue _fun57693
                    }
                case 54:
                    var1 = _closure2_slot0;
                    var0 = var2 === var1;
                case 65:
                    return var0;
            }
        };
        return var0;
    };
    var _closure1_slot39 = var1;
    var4 = 65;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/native/PremiumPlanSelectionActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        _fun57694: for (var _fun57694_ip = 0;;) switch (_fun57694_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.applicationId;
                var _closure2_slot0 = var1;
                var10 = var0.analyticsLocation;
                var16 = var0.analyticsLocations;
                var20 = var0.premiumType;
                var _closure2_slot1 = var20;
                var13 = var0.predicate;
                var3 = undefined;
                if (!(var13 === var3)) {
                    _fun57694_ip = 79;
                    continue _fun57694
                }
            case 48:
                var2 = _closure1_slot39;
                var5 = null;
                var1 = var20;
                if (!(var5 == var1)) {
                    _fun57694_ip = 74;
                    continue _fun57694
                }
            case 64:
                var4 = _closure1_slot17;
                var1 = var4.TIER_2;
            case 74:
                var13 = var2.bind(var3)(var1);
            case 79:
                var7 = var0.initialSelectedCriteria;
                if (!(var7 === var3)) {
                    _fun57694_ip = 94;
                    continue _fun57694
                }
            case 89:
                var7 = function arg0() {
                    var0 = arg0;
                    var1 = var0.interval;
                    var0 = _closure1_slot18;
                    var0 = var0.YEAR;
                    var0 = var1 === var0;
                    return var0;
                };
            case 94:
                var11 = var0.sortFn;
                if (!(var11 === var3)) {
                    _fun57694_ip = 111;
                    continue _fun57694
                }
            case 106:
                var11 = function arg0, arg1() {
                    var0 = arg1;
                    var1 = var0.interval;
                    var0 = arg0;
                    var0 = var0.interval;
                    var0 = var1 - var0;
                    return var0;
                };
            case 111:
                var27 = var0.onPaymentSuccess;
                var _closure2_slot2 = var27;
                var28 = var0.onPaymentDismiss;
                var _closure2_slot3 = var28;
                var0 = var0.showFormTitle;
                if (!(var0 === var3)) {
                    _fun57694_ip = 143;
                    continue _fun57694
                }
            case 141:
                var0 = true;
            case 143:
                var _closure2_slot4 = var0;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var _closure2_slot9 = var3;
                var _closure2_slot10 = var3;
                var _closure2_slot11 = var3;
                var _closure2_slot12 = var3;
                var _closure2_slot13 = var3;
                var _closure2_slot14 = var3;
                var _closure2_slot15 = var3;
                var _closure2_slot16 = var3;
                var _closure2_slot17 = var3;
                var _closure2_slot18 = var3;
                var _closure2_slot19 = var3;
                var _closure2_slot20 = var3;
                var _closure2_slot21 = var3;
                var _closure2_slot22 = var3;
                var _closure2_slot23 = var3;
                var _closure2_slot24 = var3;
                var _closure2_slot25 = var3;
                var _closure2_slot26 = var3;
                var _closure2_slot27 = var3;
                var _closure2_slot28 = var3;
                var _closure2_slot29 = var3;
                var _closure2_slot30 = var3;
                var _closure2_slot31 = var3;
                var _closure2_slot32 = var3;
                var _closure2_slot33 = var3;
                var12 = function() {
                    var2 = _closure1_slot13;
                    var0 = undefined;
                    var2 = var2.bind(var0)();
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 41;
                    var1 = var3[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.hideActionSheet;
                    var1 = var1.bind(var2)();
                    return var0;
                };
                var0 = _closure1_slot33;
                var8 = var0.bind(var3)();
                _closure2_slot5 = var8;
                var1 = _closure1_slot12;
                var0 = function(arg0) { // Environment: var19
                    var0 = arg0;
                    var0 = var0.isPaymentSuccess;
                    return var0;
                };
                var30 = var1.bind(var3)(var0);
                _closure2_slot6 = var30;
                var0 = function(arg0) { // Environment: var19
                    var0 = arg0;
                    var0 = var0.applePaymentLinkStatus;
                    return var0;
                };
                var17 = var1.bind(var3)(var0);
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 20;
                var0 = var6[var1];
                var14 = var2.bind(var3)(var0);
                var5 = var14.useStateFromStores;
                var0 = _closure1_slot9;
                var4 = new Array(1);
                var4[0] = var0;
                var0 = function() { // Environment: var19
                    var1 = _closure1_slot9;
                    var0 = var1.isBusy;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var24 = var5.bind(var14)(var4, var0);
                _closure2_slot7 = var24;
                var0 = 24;
                var0 = var6[var0];
                var4 = var2.bind(var3)(var0);
                var0 = var4.useHandlePremiumPurchase;
                var31 = var0.bind(var4)();
                _closure2_slot8 = var31;
                var14 = _closure1_slot1;
                var0 = 25;
                var0 = var6[var0];
                var18 = var14.bind(var3)(var0);
                var15 = var18.useExperiment;
                var4 = {};
                var0 = '97561b_1';
                var4.location = var0;
                var0 = {};
                var5 = false;
                var0.autoTrackExposure = var5;
                var0 = var15.bind(var18)(var4, var0);
                var4 = var0.paymentsBlocked;
                var0 = 26;
                var0 = var6[var0];
                var0 = var14.bind(var3)(var0);
                var0 = var0.bind(var3)();
                _closure2_slot9 = var0;
                var0 = 27;
                var0 = var6[var0];
                var14 = var2.bind(var3)(var0);
                var0 = var14.usePremiumTrialOffer;
                var18 = var0.bind(var14)();
                _closure2_slot10 = var18;
                var0 = 28;
                var0 = var6[var0];
                var14 = var2.bind(var3)(var0);
                var0 = var14.usePremiumDiscountOffer;
                var14 = var0.bind(var14)();
                _closure2_slot11 = var14;
                var0 = 29;
                var0 = var6[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.useIsEligibleForBogoPromotion;
                var2 = var0.bind(var2)(var5);
                _closure2_slot12 = var2;
                var25 = null;
                var0 = var25 != var18;
                if (!var0) {
                    _fun57694_ip = 556;
                    continue _fun57694
                }
            case 552:
                var0 = var25 != var20;
            case 556:
                if (!var0) {
                    _fun57694_ip = 615;
                    continue _fun57694
                }
            case 559:
                var5 = var18.subscription_trial;
                var15 = var25 == var5;
                var6 = undefined;
                if (var15) {
                    _fun57694_ip = 580;
                    continue _fun57694
                }
            case 574:
                var6 = var5.sku_id;
            case 580:
                var15 = _closure1_slot1;
                var21 = _closure1_slot2;
                var5 = 21;
                var5 = var21[var5];
                var15 = var15.bind(var3)(var5);
                var5 = var15.getSkuIdForPremiumType;
                var5 = var5.bind(var15)(var20);
                var0 = var6 === var5;
            case 615:
                _closure2_slot13 = var0;
                if (!(var25 != var11)) {
                    _fun57694_ip = 667;
                    continue _fun57694
                }
            case 623:
                var6 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 30;
                var5 = var15[var5];
                var6 = var6.bind(var3)(var5);
                var5 = var6.getPremiumBundlesWithPredicate;
                var6 = var5.bind(var6)(var13);
                var5 = var6.sort;
                var5 = var5.bind(var6)(var11);
                _fun57694_ip = 698;
                continue _fun57694;
            case 667:
                var11 = _closure1_slot0;
                var15 = _closure1_slot2;
                var6 = 30;
                var6 = var15[var6];
                var11 = var11.bind(var3)(var6);
                var6 = var11.getPremiumBundlesWithPredicate;
                var5 = var6.bind(var11)(var13);
            case 698:
                _closure2_slot14 = var5;
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var6 = 31;
                var6 = var13[var6];
                var11 = var11.bind(var3)(var6);
                var6 = var11.useDiscountedPremiumProductInfo;
                var6 = var6.bind(var11)(var14, var5);
                var11 = var6.discountedProduct;
                _closure2_slot15 = var11;
                var13 = var6.discountedPriceString;
                _closure2_slot16 = var13;
                var6 = var5;
                if (!var2) {
                    _fun57694_ip = 765;
                    continue _fun57694
                }
            case 760:
                var7 = function(arg0) { // Environment: var19
                    var0 = arg0;
                    var1 = var0.interval;
                    var0 = _closure1_slot18;
                    var0 = var0.MONTH;
                    var0 = var1 === var0;
                    return var0;
                };
            case 765:
                var15 = _closure1_slot5;
                var5 = var15.useState;
                var2 = var6.find;
                var2 = var2.bind(var6)(var7);
                var6 = var5.bind(var15)(var2);
                var5 = _closure1_slot4;
                var2 = 2;
                var5 = var5.bind(var3)(var6, var2);
                var2 = 0;
                var26 = var5[var2];
                _closure2_slot17 = var26;
                var2 = 1;
                var2 = var5[var2];
                _closure2_slot18 = var2;
                var2 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = var6[var1];
                var11 = var2.bind(var3)(var1);
                var7 = var11.useStateFromStores;
                var1 = _closure1_slot9;
                var5 = new Array(1);
                var5[0] = var1;
                var1 = function() { // Environment: var19
                    _fun57702: for (var _fun57702_ip = 0;;) switch (_fun57702_ip) {
                        case 0:
                            var2 = _closure2_slot17;
                            var0 = null;
                            var2 = var0 != var2;
                            if (!var2) {
                                _fun57702_ip = 44;
                                continue _fun57702
                            }
                        case 16:
                            var3 = _closure1_slot9;
                            var2 = var3.getProduct;
                            var1 = _closure2_slot17;
                            var1 = var1.productId;
                            var0 = var2.bind(var3)(var1);
                        case 44:
                            return var0;
                    }
                };
                var1 = var7.bind(var11)(var5, var1);
                _closure2_slot19 = var1;
                var1 = 32;
                var1 = var6[var1];
                var5 = var2.bind(var3)(var1);
                var1 = var5.useBottomSheetRef;
                var1 = var1.bind(var5)();
                var5 = var1.bottomSheetRef;
                var7 = _closure1_slot1;
                var1 = 33;
                var1 = var6[var1];
                var11 = var7.bind(var3)(var1);
                var1 = 34;
                var1 = var6[var1];
                var1 = var7.bind(var3)(var1);
                var1 = var1.PREMIUM_PAYMENT_ACTION_SHEET;
                var1 = var11.bind(var3)(var16, var1);
                var32 = var1.analyticsLocations;
                _closure2_slot20 = var32;
                var1 = 35;
                var1 = var6[var1];
                var7 = var7.bind(var3)(var1);
                var1 = function() { // Environment: var19
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 36;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getNewAnalyticsLoadId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var33 = var7.bind(var3)(var1);
                _closure2_slot21 = var33;
                var11 = var15.useMemo;
                var7 = new Array(1);
                var7[0] = var20;
                var1 = function() { // Environment: var19
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 21;
                    var1 = var5[var0];
                    var4 = undefined;
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.castPremiumSubscriptionAsSkuId;
                    var3 = _closure1_slot1;
                    var0 = var5[var0];
                    var4 = var3.bind(var4)(var0);
                    var3 = var4.getSkuIdForPremiumType;
                    var0 = _closure2_slot1;
                    var0 = var3.bind(var4)(var0);
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var35 = var11.bind(var15)(var1, var7);
                _closure2_slot22 = var35;
                var1 = 36;
                var1 = var6[var1];
                var6 = var2.bind(var3)(var1);
                var2 = var6.getBasePurchaseFlowAnalyticsFields;
                var1 = {};
                var1.analyticsLoadId = var33;
                var7 = {};
                var11 = _closure1_slot22;
                var11 = var11.BUTTON_CTA;
                var7.object = var11;
                var11 = _closure1_slot23;
                var11 = var11.BUY;
                var7.object_type = var11;
                var37 = var7;
                var36 = var10;
                var10 = copyDataProperties(var37, var36);
                var1.analyticsLocation = var7;
                var1.analyticsLocations = var32;
                var34 = var2.bind(var6)(var1);
                _closure2_slot23 = var34;
                var16 = var25 != var26;
                if (!var16) {
                    _fun57694_ip = 1117;
                    continue _fun57694
                }
            case 1097:
                var6 = _closure1_slot15;
                var2 = var6.has;
                var1 = var26.basePlanId;
                var16 = var2.bind(var6)(var1);
            case 1117:
                _closure2_slot24 = var16;
                var1 = var25 != var26;
                var2 = null;
                if (!var1) {
                    _fun57694_ip = 1136;
                    continue _fun57694
                }
            case 1130:
                var2 = var26.basePlanId;
            case 1136:
                _closure2_slot25 = var2;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 37;
                var1 = var7[var1];
                var7 = var6.bind(var3)(var1);
                var6 = var7.useApplePaymentLinkExperimentConfig;
                var1 = {};
                var11 = 'premium_plan_selection_action_sheet';
                var1.location = var11;
                var1 = var6.bind(var7)(var1);
                var21 = var1.enabled;
                _closure2_slot26 = var21;
                var1 = var1.discountEnabled;
                var15 = var16;
                if (!var16) {
                    _fun57694_ip = 1207;
                    continue _fun57694
                }
            case 1204:
                var15 = var21;
            case 1207:
                _closure2_slot27 = var15;
                var10 = var16;
                if (!var16) {
                    _fun57694_ip = 1220;
                    continue _fun57694
                }
            case 1217:
                var10 = var1;
            case 1220:
                _closure2_slot28 = var10;
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 38;
                var1 = var7[var1];
                var7 = var6.bind(var3)(var1);
                var6 = var7.useApplePaymentLinkDiscountOffer;
                var1 = {};
                var1.location = var11;
                var1.analyticsLoadId = var33;
                var1.shouldUseApplePaymentLinkDiscount = var10;
                var1.subscriptionPlanId = var2;
                var1.analyticsLocations = var32;
                var1 = var6.bind(var7)(var1);
                var23 = var1.isLoadingUserOffer;
                var29 = var1.userDiscountOffer;
                _closure2_slot29 = var29;
                var1 = var1.visibleApplePaymentLinkDiscount;
                _closure2_slot30 = var1;
                if (!var23) {
                    _fun57694_ip = 1313;
                    continue _fun57694
                }
            case 1310:
                var23 = var16;
            case 1313:
                if (!var23) {
                    _fun57694_ip = 1330;
                    continue _fun57694
                }
            case 1316:
                var6 = _closure1_slot19;
                var6 = var6.PREMIUM_MONTH_TIER_2;
                var23 = var2 === var6;
            case 1330:
                var10 = _closure1_slot1;
                var6 = _closure1_slot2;
                var7 = 39;
                var7 = var6[var7];
                var10 = var10.bind(var3)(var7);
                var7 = function() { // Environment: var19
                    _fun57705: for (var _fun57705_ip = 0;;) switch (_fun57705_ip) {
                        case 0:
                            var1 = _closure2_slot28;
                            var0 = undefined;
                            var7 = undefined;
                            if (!var1) {
                                _fun57705_ip = 20;
                                continue _fun57705
                            }
                        case 14:
                            var7 = 'apple_payment_link_discount_loading';
                        case 20:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 40;
                            var1 = var3[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.trackPaymentFlowStartedAnalyticsAndCTP;
                            var1 = {};
                            var9 = _closure2_slot23;
                            var10 = var1;
                            var6 = copyDataProperties(var10, var9);
                            var8 = _closure2_slot0;
                            var6 = 'application_id';
                            var1[var6] = var8;
                            var8 = _closure2_slot25;
                            var6 = 'subscription_plan_id';
                            var1[var6] = var8;
                            var8 = _closure2_slot22;
                            var6 = 'sku_id';
                            var1[var6] = var8;
                            var8 = _closure2_slot29;
                            var6 = null;
                            if (!(var6 != var8)) {
                                _fun57705_ip = 121;
                                continue _fun57705
                            }
                        case 111:
                            var6 = _closure2_slot29;
                            var7 = var6.discount_id;
                        case 121:
                            var6 = 'discount_id';
                            var1[var6] = var7;
                            var6 = _closure2_slot27;
                            var5 = undefined;
                            if (!var6) {
                                _fun57705_ip = 149;
                                continue _fun57705
                            }
                        case 139:
                            var4 = _closure1_slot27;
                            var5 = var4.APPLE_PAYMENT_LINK;
                        case 149:
                            var4 = 'custom_checkout_flow';
                            var1[var4] = var5;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var7 = var10.bind(var3)(var7);
                var7 = _closure1_slot5;
                var22 = var7.useCallback;
                var11 = _closure1_slot3;
                var10 = function*() { // Environment: var19
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun57707: for (var _fun57707_ip = 0;;) switch (_fun57707_ip) {
                            case 0:
                                StartGenerator();
                                var1 = arguments[0];
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun57707_ip = 767;
                                    continue _fun57707
                                }
                            case 15:
                                var2 = undefined;
                                if (!(var1 === var2)) {
                                    _fun57707_ip = 33;
                                    continue _fun57707
                                }
                            case 21:
                                var5 = {};
                                var7 = false;
                                var5.shouldOpenApplePaymentLink = var7;
                                var1 = var5;
                            case 33:
                                var8 = var1.shouldOpenApplePaymentLink;
                                var _closure4_slot0 = var2;
                                SaveGenerator(address = 47);
                            case 45:
                                return var2;
                            case 47:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                if (var4) {
                                    _fun57707_ip = 764;
                                    continue _fun57707
                                }
                            case 56:
                                var7 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var4 = 17;
                                var4 = var9[var4];
                                var11 = var7.bind(var2)(var4);
                                var4 = _closure2_slot17;
                                var10 = null;
                                var7 = var10 != var4;
                                var4 = 'cannot start payment without a selectedItem';
                                var4 = var11.bind(var2)(var7, var4);
                                var4 = _closure2_slot17;
                                var4 = var4.basePlanId;
                                var7 = _closure2_slot26;
                                if (!var7) {
                                    _fun57707_ip = 124;
                                    continue _fun57707
                                }
                            case 121:
                                var7 = var8;
                            case 124:
                                var11 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var17 = 36;
                                var8 = var8[var17];
                                var8 = var11.bind(var2)(var8);
                                var8 = var8.PaymentFlowStep;
                                if (var7) {
                                    _fun57707_ip = 161;
                                    continue _fun57707
                                }
                            case 153:
                                var14 = var8.EXTERNAL_PAYMENT;
                                _fun57707_ip = 167;
                                continue _fun57707;
                            case 161:
                                var14 = var8.APPLE_PAYMENT_LINK_NITRO_STANDARD_CHECKOUT;
                            case 167:
                                var16 = _closure1_slot0;
                                var15 = _closure1_slot2;
                                var8 = var15[var17];
                                var13 = var16.bind(var2)(var8);
                                var12 = var13.getPaymentFlowStepAnalyticsFields;
                                var11 = _closure2_slot23;
                                var8 = {};
                                var15 = var15[var17];
                                var15 = var16.bind(var2)(var15);
                                var15 = var15.PaymentFlowStep;
                                var15 = var15.PLAN_SELECT;
                                var8.from_step = var15;
                                var8.to_step = var14;
                                var14 = _closure2_slot17;
                                var14 = var14.productId;
                                var8.subscription_plan_gateway_plan_id = var14;
                                var14 = _closure2_slot22;
                                var8.sku_id = var14;
                                var13 = var12.bind(var13)(var11, var8);
                                _closure4_slot0 = var13;
                                if (var7) {
                                    _fun57707_ip = 305;
                                    continue _fun57707
                                }
                            case 264:
                                var11 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var8 = 42;
                                var8 = var12[var8];
                                var12 = var11.bind(var2)(var8);
                                var11 = var12.track;
                                var8 = _closure1_slot21;
                                var8 = var8.PAYMENT_FLOW_STEP;
                                var8 = var11.bind(var12)(var8, var13);
                            case 305:
                                var11 = _closure1_slot10;
                                var8 = {};
                                var12 = _closure2_slot17;
                                var12 = var12.productId;
                                var8.productId = var12;
                                var12 = _closure2_slot2;
                                var8.onPaymentSuccess = var12;
                                var12 = _closure2_slot3;
                                var8.onPaymentDismiss = var12;
                                var8 = var11.bind(var2)(var8);
                                if (var7) {
                                    _fun57707_ip = 637;
                                    continue _fun57707
                                }
                            case 355: // try_start_0
                                var8 = _closure2_slot8;
                                var7 = {};
                                var11 = _closure2_slot17;
                                var11 = var11.productId;
                                var7.productId = var11;
                                var11 = _closure2_slot23;
                                var11 = var11.location;
                                var7.analyticsLocation = var11;
                                var11 = _closure2_slot21;
                                var7.analyticsLoadId = var11;
                                var11 = _closure2_slot20;
                                var7.analyticsLocations = var11;
                                var7 = var8.bind(var2)(var7);
                                SaveGenerator(address = 417);
                            case 415:
                                return var7;
                            case 417:
                                ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                                if (var8) {
                                    _fun57707_ip = 428;
                                    continue _fun57707
                                }
                            case 423: // try_end0
                                _fun57707_ip = 761;
                                continue _fun57707;
                            case 428:
                                return var7;
                            case 431: // catch_target0
                                CatchBlockStart(arg_register = 8);
                                var6 = var8;
                                var11 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var7 = 45;
                                var7 = var12[var7];
                                var7 = var11.bind(var2)(var7);
                                var7 = var8 instanceof var7;
                                if (var7) {
                                    _fun57707_ip = 465;
                                    continue _fun57707
                                }
                            case 463:
                                throw var6;
                            case 465:
                                var14 = _closure1_slot0;
                                var15 = _closure1_slot2;
                                var6 = 46;
                                var6 = var15[var6];
                                var7 = var14.bind(var2)(var6);
                                var6 = var7.fetchSubscriptions;
                                var6 = var6.bind(var7)();
                                var7 = _closure1_slot1;
                                var6 = 44;
                                var6 = var15[var6];
                                var8 = var7.bind(var2)(var6);
                                var7 = var8.show;
                                var6 = {};
                                var11 = 16;
                                var12 = var15[var11];
                                var12 = var14.bind(var2)(var12);
                                var16 = var12.intl;
                                var13 = var16.string;
                                var12 = var15[var11];
                                var12 = var14.bind(var2)(var12);
                                var12 = var12.t;
                                var12 = var12["U+H+kd"];
                                var12 = var13.bind(var16)(var12);
                                var6.title = var12;
                                var12 = var15[var11];
                                var12 = var14.bind(var2)(var12);
                                var13 = var12.intl;
                                var12 = var13.string;
                                var11 = var15[var11];
                                var11 = var14.bind(var2)(var11);
                                var11 = var11.t;
                                var11 = var11.F9ktNa;
                                var11 = var12.bind(var13)(var11);
                                var6.body = var11;
                                var11 = true;
                                var6.hideActionSheet = var11;
                                var6 = var7.bind(var8)(var6);
                                _fun57707_ip = 761;
                                continue _fun57707;
                            case 637:
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var6 = 43;
                                var6 = var8[var6];
                                var8 = var7.bind(var2)(var6);
                                var7 = var8.goToStandalonePremiumCheckoutFromMobileApp;
                                var6 = {};
                                var6.planId = var4;
                                var4 = false;
                                var6.isGift = var4;
                                var4 = _closure2_slot21;
                                var6.loadId = var4;
                                var4 = _closure1_slot24;
                                var4 = var4.APPLE_PAYMENT_LINK;
                                var6.deepLinkType = var4;
                                var4 = _closure2_slot29;
                                var4 = var10 != var4;
                                if (!var4) {
                                    _fun57707_ip = 730;
                                    continue _fun57707
                                }
                            case 712:
                                var9 = _closure2_slot29;
                                var9 = var9.discount_id;
                                var5 = _closure1_slot16;
                                var4 = var9 === var5;
                            case 730:
                                var6.usePresetOffer = var4;
                                var21 = 'premium_plan_selection_action_sheet';
                                var19 = function() { // Environment: var3
                                    var3 = _closure1_slot11;
                                    var0 = undefined;
                                    var2 = 'in_mobile_web';
                                    var2 = var3.bind(var0)(var2);
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 42;
                                    var2 = var4[var2];
                                    var4 = var3.bind(var0)(var2);
                                    var3 = var4.track;
                                    var1 = _closure1_slot21;
                                    var2 = var1.PAYMENT_FLOW_STEP;
                                    var1 = _closure4_slot0;
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var0;
                                };
                                var18 = function() { // Environment: var3
                                    var2 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var0 = 44;
                                    var1 = var8[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.show;
                                    var1 = {};
                                    var7 = _closure1_slot0;
                                    var4 = 16;
                                    var5 = var8[var4];
                                    var5 = var7.bind(var0)(var5);
                                    var9 = var5.intl;
                                    var6 = var9.string;
                                    var5 = var8[var4];
                                    var5 = var7.bind(var0)(var5);
                                    var5 = var5.t;
                                    var5 = var5.vgvbiP;
                                    var5 = var6.bind(var9)(var5);
                                    var1.title = var5;
                                    var5 = var8[var4];
                                    var5 = var7.bind(var0)(var5);
                                    var6 = var5.intl;
                                    var5 = var6.string;
                                    var4 = var8[var4];
                                    var4 = var7.bind(var0)(var4);
                                    var4 = var4.t;
                                    var4 = var4.ycleJf;
                                    var4 = var5.bind(var6)(var4);
                                    var1.body = var4;
                                    var4 = true;
                                    var1.hideActionSheet = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var22 = var8;
                                var20 = var6;
                                var3 = var22[var7](var21, var20, var19, var18, var17);
                            case 761:
                                return var2;
                            case 764:
                                return var1;
                            case 767:
                                return var0;
                        }
                    };
                    var1 = var0.next;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var11 = var11.bind(var3)(var10);
                var10 = new Array(10);
                var10[0] = var35;
                var10[1] = var34;
                var10[2] = var33;
                var10[3] = var32;
                var10[4] = var31;
                var10[5] = var21;
                var10[6] = var29;
                var10[7] = var28;
                var10[8] = var27;
                var10[9] = var26;
                var27 = var22.bind(var7)(var11, var10);
                var10 = function() {
                    _fun57710: for (var _fun57710_ip = 0;;) switch (_fun57710_ip) {
                        case 0:
                            var2 = _closure2_slot17;
                            var1 = null;
                            var1 = var1 == var2;
                            var3 = undefined;
                            var4 = undefined;
                            if (var1) {
                                _fun57710_ip = 30;
                                continue _fun57710
                            }
                        case 20:
                            var1 = _closure2_slot17;
                            var4 = var1.premiumTier;
                        case 30:
                            var2 = _closure1_slot17;
                            var2 = var2.TIER_0;
                            if (!(var2 !== var4)) {
                                _fun57710_ip = 228;
                                continue _fun57710
                            }
                        case 50:
                            var2 = _closure1_slot17;
                            var2 = var2.TIER_1;
                            if (!(var2 !== var4)) {
                                _fun57710_ip = 154;
                                continue _fun57710
                            }
                        case 64:
                            var2 = _closure1_slot17;
                            var2 = var2.TIER_2;
                            if (!(var2 !== var4)) {
                                _fun57710_ip = 80;
                                continue _fun57710
                            }
                        case 78:
                            return var3;
                        case 80:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 47;
                            var2 = var5[var2];
                            var5 = var4.bind(var3)(var2);
                            var4 = var5.isThemeDark;
                            var2 = _closure2_slot9;
                            var2 = var4.bind(var5)(var2);
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            if (var2) {
                                _fun57710_ip = 140;
                                continue _fun57710
                            }
                        case 126:
                            var2 = 53;
                            var2 = var6[var2];
                            var2 = var5.bind(var3)(var2);
                            _fun57710_ip = 152;
                            continue _fun57710;
                        case 140:
                            var4 = 52;
                            var4 = var6[var4];
                            var2 = var5.bind(var3)(var4);
                        case 152:
                            return var2;
                        case 154:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 47;
                            var2 = var5[var2];
                            var5 = var4.bind(var3)(var2);
                            var4 = var5.isThemeDark;
                            var2 = _closure2_slot9;
                            var2 = var4.bind(var5)(var2);
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            if (var2) {
                                _fun57710_ip = 214;
                                continue _fun57710
                            }
                        case 200:
                            var2 = 51;
                            var2 = var6[var2];
                            var2 = var5.bind(var3)(var2);
                            _fun57710_ip = 226;
                            continue _fun57710;
                        case 214:
                            var4 = 50;
                            var4 = var6[var4];
                            var2 = var5.bind(var3)(var4);
                        case 226:
                            return var2;
                        case 228:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var2 = 47;
                            var2 = var5[var2];
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.isThemeDark;
                            var0 = _closure2_slot9;
                            var0 = var2.bind(var4)(var0);
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            if (var0) {
                                _fun57710_ip = 288;
                                continue _fun57710
                            }
                        case 274:
                            var0 = 49;
                            var0 = var4[var0];
                            var0 = var2.bind(var3)(var0);
                            _fun57710_ip = 300;
                            continue _fun57710;
                        case 288:
                            var1 = 48;
                            var1 = var4[var1];
                            var0 = var2.bind(var3)(var1);
                        case 300:
                            return var0;
                    }
                };
                _closure2_slot31 = var10;
                var10 = function() {
                    _fun57711: for (var _fun57711_ip = 0;;) switch (_fun57711_ip) {
                        case 0:
                            var2 = _closure2_slot17;
                            var1 = null;
                            var1 = var1 == var2;
                            var4 = undefined;
                            var2 = undefined;
                            if (var1) {
                                _fun57711_ip = 30;
                                continue _fun57711
                            }
                        case 20:
                            var0 = _closure2_slot17;
                            var2 = var0.premiumTier;
                        case 30:
                            var1 = _closure1_slot17;
                            var1 = var1.TIER_0;
                            if (!(var1 !== var2)) {
                                _fun57711_ip = 198;
                                continue _fun57711
                            }
                        case 50:
                            var1 = _closure1_slot17;
                            var1 = var1.TIER_1;
                            if (!(var1 !== var2)) {
                                _fun57711_ip = 139;
                                continue _fun57711
                            }
                        case 64:
                            var1 = _closure1_slot17;
                            var1 = var1.TIER_2;
                            if (!(var1 !== var2)) {
                                _fun57711_ip = 80;
                                continue _fun57711
                            }
                        case 78:
                            return var4;
                        case 80:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 16;
                            var2 = var6[var1];
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.I7xNzI;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 139:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 16;
                            var2 = var6[var1];
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.LAAgsy;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 198:
                            var3 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 16;
                            var1 = var5[var0];
                            var1 = var3.bind(var4)(var1);
                            var2 = var1.intl;
                            var1 = var2.string;
                            var0 = var5[var0];
                            var0 = var3.bind(var4)(var0);
                            var0 = var0.t;
                            var0 = var0["6WWrVM"];
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                _closure2_slot32 = var10;
                var11 = var7.useMemo;
                var10 = new Array(4);
                var10[0] = var0;
                var10[1] = var21;
                var10[2] = var16;
                var10[3] = var2;
                var2 = function() { // Environment: var19
                    _fun57712: for (var _fun57712_ip = 0;;) switch (_fun57712_ip) {
                        case 0:
                            var0 = _closure2_slot13;
                            if (var0) {
                                _fun57712_ip = 251;
                                continue _fun57712
                            }
                        case 13:
                            var0 = _closure2_slot26;
                            if (!var0) {
                                _fun57712_ip = 69;
                                continue _fun57712
                            }
                        case 20:
                            var0 = _closure2_slot24;
                            if (!var0) {
                                _fun57712_ip = 69;
                                continue _fun57712
                            }
                        case 27:
                            var3 = _closure2_slot25;
                            var2 = _closure1_slot19;
                            var2 = var2.PREMIUM_MONTH_TIER_2;
                            if (!(var3 !== var2)) {
                                _fun57712_ip = 192;
                                continue _fun57712
                            }
                        case 51:
                            var2 = _closure2_slot25;
                            var1 = _closure1_slot19;
                            var1 = var1.PREMIUM_YEAR_TIER_2;
                            if (!(var2 !== var1)) {
                                _fun57712_ip = 133;
                                continue _fun57712
                            }
                        case 69:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 16;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1.nIlrxd;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 133:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 16;
                            var2 = var6[var1];
                            var4 = undefined;
                            var2 = var5.bind(var4)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.t;
                            var1 = var1["0nfg1x"];
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        case 192:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var0 = 16;
                            var1 = var5[var0];
                            var3 = undefined;
                            var1 = var4.bind(var3)(var1);
                            var2 = var1.intl;
                            var1 = var2.string;
                            var0 = var5[var0];
                            var0 = var4.bind(var3)(var0);
                            var0 = var0.t;
                            var0 = var0.LQVQIq;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        case 251:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 54;
                            var0 = var3[var0];
                            var5 = undefined;
                            var2 = var2.bind(var5)(var0);
                            var0 = var2.isAndroid;
                            var0 = var0.bind(var2)();
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var1 = 16;
                            var2 = var6[var1];
                            var2 = var4.bind(var5)(var2);
                            var3 = var2.intl;
                            var2 = var3.string;
                            var1 = var6[var1];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.t;
                            if (var0) {
                                _fun57712_ip = 348;
                                continue _fun57712
                            }
                        case 333:
                            var0 = var1.bboTul;
                            var0 = var2.bind(var3)(var0);
                            _fun57712_ip = 361;
                            continue _fun57712;
                        case 348:
                            var1 = var1.rKD72m;
                            var0 = var2.bind(var3)(var1);
                        case 361:
                            return var0;
                    }
                };
                var29 = var11.bind(var7)(var2, var10);
                _closure2_slot33 = var29;
                var10 = var7.useMemo;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var19
                    _fun57713: for (var _fun57713_ip = 0;;) switch (_fun57713_ip) {
                        case 0:
                            var1 = _closure2_slot30;
                            var0 = null;
                            if (!(var0 == var1)) {
                                _fun57713_ip = 115;
                                continue _fun57713
                            }
                        case 13:
                            var0 = {};
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 16;
                            var5 = var4[var2];
                            var3 = undefined;
                            var5 = var7.bind(var3)(var5);
                            var6 = var5.intl;
                            var5 = var6.string;
                            var2 = var4[var2];
                            var2 = var7.bind(var3)(var2);
                            var2 = var2.t;
                            var2 = var2.wb56uK;
                            var2 = var5.bind(var6)(var2);
                            var0.text = var2;
                            var2 = _closure1_slot1;
                            var1 = 23;
                            var1 = var4[var1];
                            var1 = var2.bind(var3)(var1);
                            var1 = var1.Colors;
                            var1 = var1.GREY;
                            var0.color = var1;
                            _fun57713_ip = 236;
                            continue _fun57713;
                        case 115:
                            var1 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var3 = 16;
                            var7 = var5[var3];
                            var4 = undefined;
                            var7 = var6.bind(var4)(var7);
                            var8 = var7.intl;
                            var7 = var8.format;
                            var3 = var5[var3];
                            var3 = var6.bind(var4)(var3);
                            var3 = var3.t;
                            var6 = var3.f6ifpa;
                            var3 = {};
                            var9 = _closure2_slot30;
                            var9 = var9.amount;
                            var3.discountPercentage = var9;
                            var3 = var7.bind(var8)(var6, var3);
                            var1.text = var3;
                            var3 = _closure1_slot1;
                            var2 = 23;
                            var2 = var5[var2];
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.Colors;
                            var2 = var2.PRIMARY;
                            var1.color = var2;
                            var0 = var1;
                        case 236:
                            return var0;
                    }
                };
                var28 = var10.bind(var7)(var1, var2);
                var2 = var7.useMemo;
                var1 = new Array(6);
                var1[0] = var30;
                var1[1] = var26;
                var1[2] = var0;
                var1[3] = var13;
                var1[4] = var29;
                var0 = var8.legalDisclaimerText;
                var1[5] = var0;
                var0 = function() { // Environment: var19
                    _fun57714: for (var _fun57714_ip = 0;;) switch (_fun57714_ip) {
                        case 0:
                            var1 = _closure2_slot6;
                            var0 = null;
                            if (var1) {
                                _fun57714_ip = 793;
                                continue _fun57714
                            }
                        case 15:
                            var1 = _closure2_slot17;
                            var1 = var0 == var1;
                            var4 = undefined;
                            var14 = undefined;
                            if (var1) {
                                _fun57714_ip = 40;
                                continue _fun57714
                            }
                        case 30:
                            var1 = _closure2_slot17;
                            var14 = var1.interval;
                        case 40:
                            if (!(var0 != var14)) {
                                _fun57714_ip = 791;
                                continue _fun57714
                            }
                        case 47:
                            var1 = _closure2_slot13;
                            if (var1) {
                                _fun57714_ip = 534;
                                continue _fun57714
                            }
                        case 57:
                            var1 = _closure2_slot16;
                            if (!(var0 == var1)) {
                                _fun57714_ip = 297;
                                continue _fun57714
                            }
                        case 68:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 54;
                            var1 = var3[var1];
                            var2 = var2.bind(var4)(var1);
                            var1 = var2.isAndroid;
                            var2 = var1.bind(var2)();
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var6 = 16;
                            var1 = var1[var6];
                            var1 = var3.bind(var4)(var1);
                            var1 = var1.t;
                            if (var2) {
                                _fun57714_ip = 139;
                                continue _fun57714
                            }
                        case 129:
                            var9 = var1["7wpqfj"];
                            _fun57714_ip = 147;
                            continue _fun57714;
                        case 139:
                            var9 = var1.COObWR;
                        case 147:
                            var3 = _closure1_slot30;
                            var7 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var1 = 15;
                            var1 = var12[var1];
                            var1 = var7.bind(var4)(var1);
                            var2 = var1.Text;
                            var1 = {};
                            var8 = _closure2_slot5;
                            var8 = var8.legalDisclaimerText;
                            var1.style = var8;
                            var8 = 'text-xxs/medium';
                            var1.variant = var8;
                            var6 = var12[var6];
                            var6 = var7.bind(var4)(var6);
                            var8 = var6.intl;
                            var7 = var8.format;
                            var6 = {};
                            var11 = _closure1_slot25;
                            var11 = var11.PAID_TERMS;
                            var6.paidURL = var11;
                            var11 = _closure1_slot1;
                            var10 = 21;
                            var10 = var12[var10];
                            var11 = var11.bind(var4)(var10);
                            var10 = var11.getIntervalStringAsNoun;
                            var10 = var10.bind(var11)(var14);
                            var6.interval = var10;
                            var10 = _closure2_slot33;
                            var6.ctaText = var10;
                            var6 = var7.bind(var8)(var9, var6);
                            var1.children = var6;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        case 297:
                            var3 = _closure1_slot30;
                            var7 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var1 = 55;
                            var1 = var13[var1];
                            var1 = var7.bind(var4)(var1);
                            var2 = var1.TextWithIOSLinkWorkaround;
                            var1 = {};
                            var6 = _closure2_slot5;
                            var6 = var6.legalDisclaimerText;
                            var1.style = var6;
                            var6 = 'text-xxs/medium';
                            var1.variant = var6;
                            var6 = 16;
                            var8 = var13[var6];
                            var8 = var7.bind(var4)(var8);
                            var9 = var8.intl;
                            var8 = var9.format;
                            var6 = var13[var6];
                            var6 = var7.bind(var4)(var6);
                            var6 = var6.t;
                            var7 = var6["3uC7vj"];
                            var6 = {};
                            var11 = _closure2_slot33;
                            var6.buttonText = var11;
                            var12 = _closure1_slot1;
                            var11 = 21;
                            var11 = var13[var11];
                            var15 = var12.bind(var4)(var11);
                            var11 = var15.formatInterval;
                            var11 = var11.bind(var15)(var14);
                            var6.interval = var11;
                            var11 = 56;
                            var15 = var13[var11];
                            var17 = var12.bind(var4)(var15);
                            var16 = var17.getArticleURL;
                            var10 = _closure1_slot26;
                            var15 = var10.PREMIUM_DETAILS_CANCEL_SUB;
                            var15 = var16.bind(var17)(var15);
                            var6.cancelSubscriptionArticle = var15;
                            var11 = var13[var11];
                            var12 = var12.bind(var4)(var11);
                            var11 = var12.getArticleURL;
                            var10 = var10.PAID_TERMS;
                            var10 = var11.bind(var12)(var10);
                            var6.paidServiceTermsArticle = var10;
                            var6 = var8.bind(var9)(var7, var6);
                            var1.children = var6;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        case 534:
                            var3 = _closure1_slot30;
                            var6 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var1 = 55;
                            var1 = var10[var1];
                            var1 = var6.bind(var4)(var1);
                            var2 = var1.TextWithIOSLinkWorkaround;
                            var1 = {};
                            var5 = _closure2_slot5;
                            var5 = var5.legalDisclaimerText;
                            var1.style = var5;
                            var5 = 'text-xxs/medium';
                            var1.variant = var5;
                            var11 = 16;
                            var5 = var10[var11];
                            var5 = var6.bind(var4)(var5);
                            var8 = var5.intl;
                            var7 = var8.format;
                            var5 = 54;
                            var5 = var10[var5];
                            var6 = var6.bind(var4)(var5);
                            var5 = var6.isAndroid;
                            var6 = var5.bind(var6)();
                            var10 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var11];
                            var5 = var10.bind(var4)(var5);
                            var5 = var5.t;
                            if (var6) {
                                _fun57714_ip = 672;
                                continue _fun57714
                            }
                        case 662:
                            var6 = var5.ZWXtAj;
                            _fun57714_ip = 680;
                            continue _fun57714;
                        case 672:
                            var6 = var5.tINI9V;
                        case 680:
                            var5 = {};
                            var10 = _closure1_slot25;
                            var10 = var10.PAID_TERMS;
                            var5.paidURL = var10;
                            var11 = _closure1_slot1;
                            var12 = _closure1_slot2;
                            var10 = 21;
                            var10 = var12[var10];
                            var13 = var11.bind(var4)(var10);
                            var10 = var13.getIntervalStringAsNoun;
                            var10 = var10.bind(var13)(var14);
                            var5.interval = var10;
                            var10 = 56;
                            var10 = var12[var10];
                            var11 = var11.bind(var4)(var10);
                            var10 = var11.getArticleURL;
                            var9 = _closure1_slot26;
                            var9 = var9.PREMIUM_DETAILS_CANCEL_SUB;
                            var9 = var10.bind(var11)(var9);
                            var5.cancelURL = var9;
                            var5 = var7.bind(var8)(var6, var5);
                            var1.children = var5;
                            var1 = var3.bind(var4)(var2, var1);
                            return var1;
                        case 791:
                            return var0;
                        case 793:
                            return var0;
                    }
                };
                var16 = var2.bind(var7)(var0, var1);
                var2 = _closure1_slot30;
                var1 = _closure1_slot0;
                var0 = 57;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.BottomSheet;
                var0 = {};
                var0.ref = var5;
                var5 = true;
                var0.handleDisabled = var5;
                var6 = _closure1_slot13;
                var0.onDismiss = var6;
                var0.startExpanded = var5;
                var7 = _closure1_slot31;
                if (var4) {
                    _fun57694_ip = 2024;
                    continue _fun57694
                }
            case 1628:
                var5 = _closure1_slot32;
                var4 = {};
                var11 = _closure1_slot30;
                var10 = _closure1_slot34;
                var6 = {};
                var6.premiumType = var20;
                var6.isPaymentSuccess = var30;
                var21 = var25 == var26;
                var20 = undefined;
                if (var21) {
                    _fun57694_ip = 1669;
                    continue _fun57694
                }
            case 1663:
                var20 = var26.premiumTier;
            case 1669:
                var6.selectedPremiumType = var20;
                var6.trialOffer = var18;
                var18 = var25 != var13;
                var13 = null;
                if (!var18) {
                    _fun57694_ip = 1691;
                    continue _fun57694
                }
            case 1688:
                var13 = var14;
            case 1691:
                var6.discountOffer = var13;
                var10 = var11.bind(var3)(var10, var6);
                var6 = new Array(3);
                var6[0] = var10;
                var13 = _closure1_slot31;
                var11 = _closure1_slot6;
                var10 = {};
                var14 = var8.body;
                var10.style = var14;
                var14 = 'in_mobile_web';
                if (!(var14 !== var17)) {
                    _fun57694_ip = 1866;
                    continue _fun57694
                }
            case 1742:
                var18 = _closure1_slot31;
                var17 = _closure1_slot32;
                var14 = {};
                var19 = function() { // Environment: var19
                    _fun57715: for (var _fun57715_ip = 0;;) switch (_fun57715_ip) {
                        case 0:
                            var0 = _closure2_slot6;
                            if (var0) {
                                _fun57715_ip = 1148;
                                continue _fun57715
                            }
                        case 16:
                            var24 = {};
                            var1 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 54;
                            var0 = var2[var0];
                            var3 = undefined;
                            var1 = var1.bind(var3)(var0);
                            var0 = var1.isAndroid;
                            var0 = var0.bind(var1)();
                            var24.convertToMajorUnits = var0;
                            var11 = _closure2_slot4;
                            if (!var11) {
                                _fun57715_ip = 69;
                                continue _fun57715
                            }
                        case 62:
                            var0 = _closure2_slot13;
                            var11 = !var0;
                        case 69:
                            var2 = _closure1_slot31;
                            var1 = _closure1_slot6;
                            var0 = {};
                            var4 = _closure2_slot5;
                            var4 = var4.contentSelectPlan;
                            var0.style = var4;
                            var4 = _closure2_slot13;
                            if (var4) {
                                _fun57715_ip = 378;
                                continue _fun57715
                            }
                        case 103:
                            var4 = _closure2_slot16;
                            var7 = null;
                            var4 = var7 != var4;
                            var6 = null;
                            if (!var4) {
                                _fun57715_ip = 376;
                                continue _fun57715
                            }
                        case 121:
                            var4 = _closure2_slot15;
                            var4 = var7 != var4;
                            var6 = null;
                            if (!var4) {
                                _fun57715_ip = 376;
                                continue _fun57715
                            }
                        case 137:
                            var4 = _closure2_slot1;
                            var4 = var7 != var4;
                            var6 = null;
                            if (!var4) {
                                _fun57715_ip = 376;
                                continue _fun57715
                            }
                        case 153:
                            var9 = _closure1_slot31;
                            var7 = _closure1_slot6;
                            var4 = {};
                            var13 = _closure1_slot30;
                            var15 = _closure1_slot0;
                            var18 = _closure1_slot2;
                            var10 = 15;
                            var10 = var18[var10];
                            var10 = var15.bind(var3)(var10);
                            var12 = var10.Text;
                            var10 = {
                                'variant': 'text-md/normal',
                                'color': 'text-strong'
                            };
                            var14 = _closure2_slot5;
                            var14 = var14.discountDisclaimer;
                            var10.style = var14;
                            var14 = 16;
                            var16 = var18[var14];
                            var16 = var15.bind(var3)(var16);
                            var17 = var16.intl;
                            var16 = var17.format;
                            var14 = var18[var14];
                            var14 = var15.bind(var3)(var14);
                            var14 = var14.t;
                            var15 = var14.yBn7uz;
                            var14 = {};
                            var18 = _closure2_slot15;
                            var18 = var18.priceString;
                            var14.regularPrice = var18;
                            var18 = _closure2_slot16;
                            var14.discountedPrice = var18;
                            var14 = var16.bind(var17)(var15, var14);
                            var10.children = var14;
                            var12 = var13.bind(var3)(var12, var10);
                            var10 = new Array(2);
                            var10[0] = var12;
                            var13 = _closure1_slot30;
                            var12 = {};
                            var14 = _closure2_slot5;
                            var15 = var14.divider;
                            var14 = new Array(2);
                            var14[0] = var15;
                            var15 = _closure2_slot5;
                            var15 = var15.offerDividerMargin;
                            var14[1] = var15;
                            var12.style = var14;
                            var12 = var13.bind(var3)(var7, var12);
                            var10[1] = var12;
                            var4.children = var10;
                            var6 = var9.bind(var3)(var7, var4);
                        case 376:
                            _fun57715_ip = 492;
                            continue _fun57715;
                        case 378:
                            var9 = _closure1_slot30;
                            var14 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var4 = 15;
                            var4 = var15[var4];
                            var4 = var14.bind(var3)(var4);
                            var7 = var4.Text;
                            var4 = {
                                'variant': 'text-md/normal',
                                'color': 'text-strong'
                            };
                            var10 = _closure2_slot5;
                            var10 = var10.trialDisclaimer;
                            var4.style = var10;
                            var10 = 16;
                            var12 = var15[var10];
                            var12 = var14.bind(var3)(var12);
                            var13 = var12.intl;
                            var12 = var13.string;
                            var10 = var15[var10];
                            var10 = var14.bind(var3)(var10);
                            var10 = var10.t;
                            var10 = var10.u95Dt4;
                            var10 = var12.bind(var13)(var10);
                            var4.children = var10;
                            var6 = var9.bind(var3)(var7, var4);
                        case 492:
                            var4 = new Array(2);
                            var4[0] = var6;
                            var9 = _closure1_slot31;
                            var7 = _closure1_slot1;
                            var10 = _closure1_slot2;
                            var6 = 62;
                            var6 = var10[var6];
                            var7 = var7.bind(var3)(var6);
                            var6 = {};
                            var10 = undefined;
                            if (!var11) {
                                _fun57715_ip = 586;
                                continue _fun57715
                            }
                        case 531:
                            var15 = _closure1_slot0;
                            var16 = _closure1_slot2;
                            var12 = 16;
                            var13 = var16[var12];
                            var13 = var15.bind(var3)(var13);
                            var14 = var13.intl;
                            var13 = var14.string;
                            var12 = var16[var12];
                            var12 = var15.bind(var3)(var12);
                            var12 = var12.t;
                            var12 = var12.u95Dt4;
                            var10 = var13.bind(var14)(var12);
                        case 586:
                            var6.title = var10;
                            var10 = _closure1_slot28;
                            var10 = var10.NO_BORDER_OR_MARGIN;
                            var6.titleStyleType = var10;
                            var10 = _closure2_slot5;
                            var10 = var10.formTitle;
                            var6.titleViewStyle = var10;
                            var10 = _closure2_slot5;
                            var12 = var10.formSectionBody;
                            var10 = new Array(2);
                            var10[0] = var12;
                            var11 = !var11;
                            if (!var11) {
                                _fun57715_ip = 654;
                                continue _fun57715
                            }
                        case 644:
                            var12 = _closure2_slot5;
                            var11 = var12.formSectionBodyWithNoTitle;
                        case 654:
                            var10[1] = var11;
                            var6.sectionBodyStyle = var10;
                            var14 = true;
                            var6.inset = var14;
                            var10 = _closure2_slot19;
                            var16 = null;
                            var11 = var16 != var10;
                            if (!var11) {
                                _fun57715_ip = 701;
                                continue _fun57715
                            }
                        case 683:
                            var10 = _closure2_slot19;
                            var12 = var10.countryCode;
                            var10 = 'HR';
                            var11 = var10 === var12;
                        case 701:
                            if (!var11) {
                                _fun57715_ip = 738;
                                continue _fun57715
                            }
                        case 704:
                            var10 = _closure2_slot19;
                            var12 = var10.currencyCode;
                            var10 = var12.toLowerCase;
                            var12 = var10.bind(var12)();
                            var10 = _closure1_slot29;
                            var10 = var10.EUR;
                            var11 = var12 === var10;
                        case 738:
                            if (!var11) {
                                _fun57715_ip = 902;
                                continue _fun57715
                            }
                        case 744:
                            var13 = _closure1_slot30;
                            var12 = _closure1_slot1;
                            var22 = _closure1_slot2;
                            var10 = 63;
                            var10 = var22[var10];
                            var12 = var12.bind(var3)(var10);
                            var10 = {};
                            var21 = _closure1_slot0;
                            var15 = 16;
                            var17 = var22[var15];
                            var17 = var21.bind(var3)(var17);
                            var19 = var17.intl;
                            var18 = var19.formatToPlainString;
                            var15 = var22[var15];
                            var15 = var21.bind(var3)(var15);
                            var15 = var15.t;
                            var17 = var15["9hnZoK"];
                            var15 = {};
                            var20 = 22;
                            var20 = var22[var20];
                            var23 = var21.bind(var3)(var20);
                            var22 = var23.formatPrice;
                            var20 = _closure2_slot19;
                            var21 = var20.price;
                            var20 = 7.5345;
                            var21 = var20 * var21;
                            var20 = _closure1_slot29;
                            var20 = var20.HRK;
                            var20 = var22.bind(var23)(var21, var20, var24);
                            var15.kunaPriceWithCurrency = var20;
                            var15 = var18.bind(var19)(var17, var15);
                            var10.message = var15;
                            var11 = var13.bind(var3)(var12, var10);
                        case 902:
                            var10 = new Array(2);
                            var10[0] = var11;
                            var13 = _closure1_slot30;
                            var12 = _closure1_slot1;
                            var15 = _closure1_slot2;
                            var11 = 64;
                            var11 = var15[var11];
                            var12 = var12.bind(var3)(var11);
                            var11 = {};
                            var15 = _closure2_slot17;
                            var17 = var16 == var15;
                            var15 = undefined;
                            if (var17) {
                                _fun57715_ip = 959;
                                continue _fun57715
                            }
                        case 949:
                            var17 = _closure2_slot17;
                            var15 = var17.productId;
                        case 959:
                            var11.value = var15;
                            var24 = _closure1_slot40;
                            var23 = _closure2_slot14;
                            var15 = _closure2_slot17;
                            var15 = var16 == var15;
                            var22 = undefined;
                            if (var15) {
                                _fun57715_ip = 994;
                                continue _fun57715
                            }
                        case 984:
                            var15 = _closure2_slot17;
                            var22 = var15.productId;
                        case 994:
                            var21 = _closure2_slot10;
                            var20 = _closure2_slot11;
                            var15 = _closure2_slot15;
                            var15 = var16 == var15;
                            var19 = undefined;
                            if (var15) {
                                _fun57715_ip = 1025;
                                continue _fun57715
                            }
                        case 1015:
                            var15 = _closure2_slot15;
                            var19 = var15.identifier;
                        case 1025:
                            var28 = _closure2_slot16;
                            var27 = _closure2_slot12;
                            var26 = _closure2_slot1;
                            var25 = _closure2_slot28;
                            var34 = undefined;
                            var33 = var23;
                            var32 = var22;
                            var31 = var21;
                            var30 = var20;
                            var29 = var19;
                            var15 = var34[var24](var33, var32, var31, var30, var29, var28, var27, var26, var25, var24);
                            var11.options = var15;
                            var15 = function arg0() {
                                var1 = arg0;
                                var1 = var1.value;
                                var _closure4_slot0 = var1;
                                var2 = _closure2_slot18;
                                var3 = _closure2_slot14;
                                var1 = var3.find;
                                var0 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var1 = var0.productId;
                                    var0 = _closure4_slot0;
                                    var0 = var1 === var0;
                                    return var0;
                                };
                                var1 = var1.bind(var3)(var0);
                                var0 = undefined;
                                var0 = var2.bind(var0)(var1);
                                var0 = undefined;
                                return var0;
                            };
                            var11.onChange = var15;
                            var15 = false;
                            var11.withDividers = var15;
                            var15 = _closure2_slot5;
                            var15 = var15.planOptionRowContainer;
                            var11.style = var15;
                            var15 = _closure2_slot7;
                            var11.disabled = var15;
                            var11.indicatorLeft = var14;
                            var11 = var13.bind(var3)(var12, var11);
                            var10[1] = var11;
                            var6.children = var10;
                            var6 = var9.bind(var3)(var7, var6);
                            var4[1] = var6;
                            var0.children = var4;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        case 1148:
                            var3 = _closure1_slot31;
                            var2 = _closure1_slot6;
                            var1 = {};
                            var0 = _closure2_slot5;
                            var0 = var0.contentActivated;
                            var1.style = var0;
                            var7 = _closure1_slot30;
                            var6 = _closure1_slot1;
                            var9 = _closure1_slot2;
                            var0 = 61;
                            var4 = var9[var0];
                            var0 = undefined;
                            var6 = var6.bind(var0)(var4);
                            var4 = {};
                            var10 = _closure2_slot31;
                            var10 = var10.bind(var0)();
                            var4.source = var10;
                            var6 = var7.bind(var0)(var6, var4);
                            var4 = new Array(2);
                            var4[0] = var6;
                            var7 = _closure1_slot30;
                            var6 = _closure1_slot0;
                            var5 = 15;
                            var5 = var9[var5];
                            var5 = var6.bind(var0)(var5);
                            var6 = var5.Text;
                            var5 = {};
                            var9 = _closure2_slot5;
                            var9 = var9.contentActivatedText;
                            var5.style = var9;
                            var9 = 'text-md/semibold';
                            var5.variant = var9;
                            var8 = _closure2_slot32;
                            var8 = var8.bind(var0)();
                            var5.children = var8;
                            var5 = var7.bind(var0)(var6, var5);
                            var4[1] = var5;
                            var1.children = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var20 = var19.bind(var3)();
                var19 = new Array(2);
                var19[0] = var20;
                var22 = _closure1_slot30;
                var21 = _closure1_slot38;
                var20 = {};
                var20.isPaymentSuccess = var30;
                var20.onClose = var12;
                var20.ctaText = var29;
                var20.mobileWebCtaProps = var28;
                var20.onStartPayment = var27;
                var27 = var25 == var26;
                var25 = undefined;
                if (var27) {
                    _fun57694_ip = 1819;
                    continue _fun57694
                }
            case 1813:
                var25 = var26.interval;
            case 1819:
                var20.planInterval = var25;
                var20.shouldUseApplePaymentLink = var15;
                if (var24) {
                    _fun57694_ip = 1835;
                    continue _fun57694
                }
            case 1832:
                var24 = var23;
            case 1835:
                var20.disabled = var24;
                var20.loading = var23;
                var20 = var22.bind(var3)(var21, var20);
                var19[1] = var20;
                var14.children = var19;
                var17 = var18.bind(var3)(var17, var14);
                _fun57694_ip = 1900;
                continue _fun57694;
            case 1866:
                var19 = _closure1_slot30;
                var18 = _closure1_slot7;
                var14 = {};
                var20 = 'large';
                var14.size = var20;
                var20 = var8.loadingIndicator;
                var14.style = var20;
                var17 = var19.bind(var3)(var18, var14);
            case 1900:
                var14 = new Array(2);
                var14[0] = var17;
                var15 = !var15;
                if (!var15) {
                    _fun57694_ip = 1917;
                    continue _fun57694
                }
            case 1914:
                var15 = var16;
            case 1917:
                var14[1] = var15;
                var10.children = var14;
                var10 = var13.bind(var3)(var11, var10);
                var6[1] = var10;
                var13 = _closure1_slot30;
                var15 = _closure1_slot0;
                var16 = _closure1_slot2;
                var10 = 59;
                var10 = var16[var10];
                var10 = var15.bind(var3)(var10);
                var11 = var10.ActionSheetHeaderBar;
                var10 = {};
                var14 = 60;
                var14 = var16[var14];
                var14 = var15.bind(var3)(var14);
                var14 = var14.ActionSheetHeaderBarVariants;
                var14 = var14.FLOATING;
                var10.variant = var14;
                var10.onPress = var12;
                var10 = var13.bind(var3)(var11, var10);
                var6[2] = var10;
                var4.children = var6;
                var4 = var7.bind(var3)(var5, var4);
                _fun57694_ip = 2160;
                continue _fun57694;
            case 2024:
                var6 = _closure1_slot6;
                var5 = {};
                var8 = var8.blockedPaymentContainer;
                var5.style = var8;
                var11 = _closure1_slot30;
                var10 = _closure1_slot1;
                var15 = _closure1_slot2;
                var8 = 58;
                var8 = var15[var8];
                var10 = var10.bind(var3)(var8);
                var8 = {};
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var11 = _closure1_slot30;
                var14 = _closure1_slot0;
                var9 = 59;
                var9 = var15[var9];
                var9 = var14.bind(var3)(var9);
                var10 = var9.ActionSheetHeaderBar;
                var9 = {};
                var13 = 60;
                var13 = var15[var13];
                var13 = var14.bind(var3)(var13);
                var13 = var13.ActionSheetHeaderBarVariants;
                var13 = var13.FLOATING;
                var9.variant = var13;
                var9.onPress = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var4 = var7.bind(var3)(var6, var5);
            case 2160:
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.getItemsByPremiumTypePredicate = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 27, 1676, 4607, 7044, 1615, 660, 3312, 4869, 483, 33, 1297, 671, 3932, 1234, 44, 7047, 1604, 566, 3100, 4602, 4868, 7065, 6860, 3237, 6648, 6650, 7068, 7126, 7127, 5720, 5721, 5574, 4923, 7097, 3455, 7128, 4094, 7098, 3269, 795, 7130, 3927, 7067, 3434, 3197, 7115, 7116, 7117, 7118, 7119, 7120, 478, 5327, 1675, 4926, 6866, 5197, 5197, 4699, 5405, 7132, 7134, 2]);