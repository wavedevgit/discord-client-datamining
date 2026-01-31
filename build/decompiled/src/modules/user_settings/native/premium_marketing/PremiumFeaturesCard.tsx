// modules/user_settings/native/premium_marketing/PremiumFeaturesCard.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var5;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var13.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var7 = var5[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var0)(var7);
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.View;
    var _closure1_slot4 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var13.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var17 = 4;
    var6 = var5[var17];
    var6 = var13.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var13.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 6;
    var6 = var5[var6];
    var6 = var13.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var15 = 7;
    var6 = var5[var15];
    var6 = var4.bind(var0)(var6);
    var8 = var6.AnalyticsPages;
    var7 = var6.AnalyticsSections;
    var6 = var6.AnalyticsObjectTypes;
    var16 = 8;
    var9 = var5[var16];
    var10 = var4.bind(var0)(var9);
    var9 = var10.DISCOUNT_DURATION_FALLBACK;
    var _closure1_slot9 = var9;
    var9 = var10.DISCOUNT_PERCENTAGE_FALLBACK;
    var _closure1_slot10 = var9;
    var9 = var10.PremiumSubscriptionSKUToPremiumType;
    var _closure1_slot11 = var9;
    var9 = var10.PremiumTypes;
    var _closure1_slot12 = var9;
    var11 = var10.PremiumTypeToActivePremiumSubscriptionSKU;
    var _closure1_slot13 = var11;
    var11 = var10.SubscriptionIntervalTypes;
    var _closure1_slot14 = var11;
    var10 = var10.SubscriptionPlanInfo;
    var _closure1_slot15 = var10;
    var10 = 9;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var14 = var10.Fonts;
    var10 = 10;
    var10 = var5[var10];
    var10 = var4.bind(var0)(var10);
    var11 = var10.jsx;
    var _closure1_slot16 = var11;
    var10 = var10.jsxs;
    var _closure1_slot17 = var10;
    var10 = var3.Set;
    var11 = var9.TIER_0;
    var3 = new Array(2);
    var3[0] = var11;
    var9 = var9.TIER_2;
    var3[1] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var10
        }
    });
    var24 = var9;
    var23 = var3;
    var3 = new var24[var10](var23, var22);
    var3 = var3 instanceof Object ? var3 : var9;
    var _closure1_slot18 = var3;
    var3 = 11;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var9 = var10.createStyles;
    var3 = {};
    var11 = {};
    var12 = 'relative';
    var11.position = var12;
    var3.containerWrapper = var11;
    var11 = {
        'display': 'flex',
        'justifyContent': 'flex-start',
        'width': '100%',
        'padding': 24,
        'backgroundColor': 'transparent',
        'overflow': 'hidden'
    };
    var12 = 12;
    var18 = var5[var12];
    var18 = var13.bind(var0)(var18);
    var18 = var18.radii;
    var18 = var18.lg;
    var11.borderRadius = var18;
    var3.card = var11;
    var11 = {};
    var11.marginBottom = var16;
    var3.logoContainer = var11;
    var11 = {};
    var11.marginRight = var17;
    var3.logo = var11;
    var11 = {
        'display': 'flex',
        'flexWrap': 'wrap',
        'flexDirection': 'row',
        'maxWidth': '50%'
    };
    var3.priceContainer = var11;
    var11 = {
        'maxWidth': '62%',
        'includeFontPadding': true
    };
    var3.discountPriceText = var11;
    var11 = {};
    var11.marginTop = var16;
    var3.featureList = var11;
    var11 = {};
    var16 = 13;
    var17 = var5[var16];
    var20 = var13.bind(var0)(var17);
    var19 = var14.PRIMARY_MEDIUM;
    var17 = var5[var12];
    var17 = var13.bind(var0)(var17);
    var17 = var17.unsafe_rawColors;
    var18 = var17.WHITE;
    var17 = 14;
    var22 = var20.bind(var0)(var19, var18, var17);
    var23 = var11;
    var17 = copyDataProperties(var23, var22);
    var18 = -8;
    var17 = 'marginLeft';
    var11[var17] = var18;
    var3.featureLabel = var11;
    var11 = {};
    var11.paddingVertical = var15;
    var3.featureRow = var11;
    var15 = 16;
    var11 = {
        'height': 16,
        'width': 16
    };
    var3.featureIcon = var11;
    var11 = {};
    var11.marginTop = var15;
    var3.button = var11;
    var11 = {
        'display': 'flex',
        'flexDirection': 'row'
    };
    var3.freeTrialContainer = var11;
    var11 = {
        'marginTop': 8,
        'paddingBottom': 2,
        'paddingHorizontal': 8,
        'borderRadius': null,
        'backgroundColor': null,
        'maxWidth': 200
    };
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.round;
    var11.borderRadius = var15;
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.WHITE;
    var11.backgroundColor = var15;
    var3.freeTrialTag = var11;
    var11 = {};
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS;
    var11.color = var15;
    var3.freeTrialTier0Color = var11;
    var11 = {};
    var15 = var5[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.unsafe_rawColors;
    var15 = var15.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS;
    var11.color = var15;
    var3.freeTrialTier2Color = var11;
    var15 = 'center';
    var11 = {
        'paddingHorizontal': 24,
        'marginTop': 4294967284,
        'paddingBottom': 16,
        'alignItems': 'center',
        'bottom': 0
    };
    var3.trialSubTextContainer = var11;
    var11 = {};
    var16 = var5[var16];
    var17 = var13.bind(var0)(var16);
    var16 = var14.DISPLAY_MEDIUM;
    var14 = var5[var12];
    var14 = var13.bind(var0)(var14);
    var14 = var14.unsafe_rawColors;
    var14 = var14.WHITE;
    var22 = var17.bind(var0)(var16, var14, var12);
    var23 = var11;
    var14 = copyDataProperties(var23, var22);
    var14 = 'textAlign';
    var11[var14] = var15;
    var3.trialSubText = var11;
    var11 = {};
    var14 = 190;
    var11.maxWidth = var14;
    var12 = var5[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.WHITE;
    var11.color = var12;
    var3.premiumGroupMemberInfoText = var11;
    var11 = {
        'position': 'absolute',
        'top': 4294967286,
        'maxWidth': 240,
        'alignSelf': 'center',
        'zIndex': 2
    };
    var3.pill = var11;
    var11 = {
        'marginRight': 4,
        'alignSelf': 'center',
        'marginTop': 1
    };
    var3.buttonIcon = var11;
    var3 = var9.bind(var10)(var3);
    var _closure1_slot19 = var3;
    var3 = {};
    var8 = var8.USER_SETTINGS;
    var3.page = var8;
    var7 = var7.SETTINGS_PREMIUM;
    var3.section = var7;
    var6 = var6.BUY;
    var3.objectType = var6;
    var _closure1_slot20 = var3;
    var3 = function arg0() {
        _fun61539: for (var _fun61539_ip = 0;;) switch (_fun61539_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.premiumItem;
                var _closure2_slot0 = var0;
                var12 = var1.discountedPriceString;
                var11 = var1.discountOffer;
                var16 = var1.activeDiscountInfo;
                var22 = var1.subscriptionTrial;
                var2 = var1.premiumType;
                var5 = _closure1_slot19;
                var4 = undefined;
                var5 = var5.bind(var4)();
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var8 = 14;
                var8 = var7[var8];
                var10 = var6.bind(var4)(var8);
                var9 = var10.useStateFromStores;
                var13 = _closure1_slot8;
                var8 = new Array(1);
                var8[0] = var13;
                var3 = function() { // Environment: var3
                    var2 = _closure1_slot8;
                    var1 = var2.getProduct;
                    var0 = _closure2_slot0;
                    var0 = var0.productId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var18 = var9.bind(var10)(var8, var3);
                var8 = _closure1_slot1;
                var20 = 15;
                var3 = var7[var20];
                var9 = var8.bind(var4)(var3);
                var8 = var9.getIntervalStringAsNoun;
                var3 = var0.interval;
                var19 = var8.bind(var9)(var3);
                var3 = _closure1_slot15;
                var0 = var0.basePlanId;
                var0 = var3[var0];
                var3 = 16;
                var3 = var7[var3];
                var8 = var6.bind(var4)(var3);
                var7 = var8.formatRate;
                var10 = null;
                var6 = var10 == var18;
                var3 = undefined;
                if (var6) {
                    _fun61539_ip = 188;
                    continue _fun61539
                }
            case 182:
                var3 = var18.priceString;
            case 188:
                var9 = var10 != var3;
                var15 = '$...';
                var6 = var15;
                if (!var9) {
                    _fun61539_ip = 207;
                    continue _fun61539
                }
            case 204:
                var6 = var3;
            case 207:
                var3 = var0.interval;
                var0 = var0.intervalCount;
                var9 = var7.bind(var8)(var6, var3, var0);
                if (!(var10 != var12)) {
                    _fun61539_ip = 237;
                    continue _fun61539
                }
            case 230:
                if (!(var10 == var11)) {
                    _fun61539_ip = 872;
                    continue _fun61539
                }
            case 237:
                if (!(var10 == var16)) {
                    _fun61539_ip = 694;
                    continue _fun61539
                }
            case 244:
                if (!(var10 != var22)) {
                    _fun61539_ip = 269;
                    continue _fun61539
                }
            case 248:
                var3 = _closure1_slot11;
                var0 = var22.sku_id;
                var0 = var3[var0];
                if (!(var2 !== var0)) {
                    _fun61539_ip = 477;
                    continue _fun61539
                }
            case 269:
                var3 = _closure1_slot17;
                var2 = _closure1_slot4;
                var0 = {};
                var6 = true;
                var0.accessible = var6;
                var6 = var5.priceContainer;
                var0.style = var6;
                var8 = _closure1_slot16;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var14 = 17;
                var6 = var6[var14];
                var6 = var7.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {
                    'variant': 'text-md/bold',
                    'color': 'always-white'
                };
                var13 = var10 == var18;
                var17 = undefined;
                if (var13) {
                    _fun61539_ip = 353;
                    continue _fun61539
                }
            case 347:
                var17 = var18.priceString;
            case 353:
                var21 = var10 != var17;
                var13 = var15;
                if (!var21) {
                    _fun61539_ip = 366;
                    continue _fun61539
                }
            case 363:
                var13 = var17;
            case 366:
                var6.children = var13;
                var7 = var8.bind(var4)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var13 = _closure1_slot16;
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var7 = var7[var14];
                var7 = var8.bind(var4)(var7);
                var8 = var7.Text;
                var7 = {
                    'variant': 'text-md/normal',
                    'color': 'always-white'
                };
                var14 = global;
                var14 = var14.HermesInternal;
                var17 = var14.concat;
                var14 = ' / ';
                var14 = var17.bind(var14)(var19);
                var7.children = var14;
                var7 = var13.bind(var4)(var8, var7);
                var6[1] = var7;
                var0.children = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun61539_ip = 689;
                continue _fun61539;
            case 477:
                var6 = _closure1_slot16;
                var19 = _closure1_slot0;
                var17 = _closure1_slot2;
                var2 = 17;
                var2 = var17[var2];
                var2 = var19.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {
                    'variant': 'text-md/normal',
                    'color': 'always-white'
                };
                var7 = var5.discountPriceText;
                var2.style = var7;
                var7 = 18;
                var8 = var17[var7];
                var8 = var19.bind(var4)(var8);
                var14 = var8.intl;
                var13 = var14.format;
                var7 = var17[var7];
                var7 = var19.bind(var4)(var7);
                var7 = var7.t;
                var8 = var7["xOX9/9"];
                var7 = {};
                var17 = var17[var20];
                var20 = var19.bind(var4)(var17);
                var19 = var20.formatIntervalDuration;
                var17 = {};
                var23 = var10 == var22;
                var21 = undefined;
                if (var23) {
                    _fun61539_ip = 608;
                    continue _fun61539
                }
            case 602:
                var21 = var22.interval;
            case 608:
                var17.intervalType = var21;
                var23 = var10 == var22;
                var21 = undefined;
                if (var23) {
                    _fun61539_ip = 628;
                    continue _fun61539
                }
            case 622:
                var21 = var22.interval_count;
            case 628:
                var17.intervalCount = var21;
                var17 = var19.bind(var20)(var17);
                var7.trialPeriod = var17;
                var19 = var10 == var18;
                var17 = undefined;
                if (var19) {
                    _fun61539_ip = 658;
                    continue _fun61539
                }
            case 652:
                var17 = var18.priceString;
            case 658:
                var18 = var10 != var17;
                if (!var18) {
                    _fun61539_ip = 668;
                    continue _fun61539
                }
            case 665:
                var15 = var17;
            case 668:
                var7.price = var15;
                var7 = var13.bind(var14)(var8, var7);
                var2.children = var7;
                var0 = var6.bind(var4)(var3, var2);
            case 689:
                _fun61539_ip = 867;
                continue _fun61539;
            case 694:
                var6 = _closure1_slot16;
                var8 = _closure1_slot0;
                var15 = _closure1_slot2;
                var2 = 17;
                var2 = var15[var2];
                var2 = var8.bind(var4)(var2);
                var3 = var2.Text;
                var2 = {
                    'variant': 'text-md/normal',
                    'color': 'always-white'
                };
                var7 = var5.discountPriceText;
                var2.style = var7;
                var7 = 18;
                var13 = var15[var7];
                var13 = var8.bind(var4)(var13);
                var14 = var13.intl;
                var13 = var14.format;
                var7 = var15[var7];
                var7 = var8.bind(var4)(var7);
                var7 = var7.t;
                var8 = var7["3ZiutU"];
                var7 = {};
                var17 = var10 == var16;
                var15 = undefined;
                if (var17) {
                    _fun61539_ip = 806;
                    continue _fun61539
                }
            case 800:
                var15 = var16.percentage;
            case 806:
                if (!(var10 == var15)) {
                    _fun61539_ip = 814;
                    continue _fun61539
                }
            case 810:
                var15 = _closure1_slot10;
            case 814:
                var7.percent = var15;
                var17 = var10 == var16;
                var15 = undefined;
                if (var17) {
                    _fun61539_ip = 833;
                    continue _fun61539
                }
            case 828:
                var15 = var16.duration;
            case 833:
                if (!(var10 == var15)) {
                    _fun61539_ip = 841;
                    continue _fun61539
                }
            case 837:
                var15 = _closure1_slot9;
            case 841:
                var7.numMonths = var15;
                var7.regularPrice = var9;
                var7 = var13.bind(var14)(var8, var7);
                var2.children = var7;
                var0 = var6.bind(var4)(var3, var2);
            case 867:
                _fun61539_ip = 1036;
                continue _fun61539;
            case 872:
                var3 = _closure1_slot16;
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 17;
                var1 = var13[var1];
                var1 = var6.bind(var4)(var1);
                var2 = var1.Text;
                var1 = {
                    'variant': 'text-md/normal',
                    'color': 'always-white'
                };
                var5 = var5.discountPriceText;
                var1.style = var5;
                var5 = 18;
                var7 = var13[var5];
                var7 = var6.bind(var4)(var7);
                var8 = var7.intl;
                var7 = var8.format;
                var5 = var13[var5];
                var5 = var6.bind(var4)(var5);
                var5 = var5.t;
                var6 = var5.sJTwHQ;
                var5 = {};
                var5.discountedPrice = var12;
                var12 = var11.discount;
                var13 = var10 == var12;
                var11 = undefined;
                if (var13) {
                    _fun61539_ip = 997;
                    continue _fun61539
                }
            case 991:
                var11 = var12.user_usage_limit;
            case 997:
                var12 = var10 != var11;
                var10 = 1;
                if (!var12) {
                    _fun61539_ip = 1010;
                    continue _fun61539
                }
            case 1007:
                var10 = var11;
            case 1010:
                var5.numMonths = var10;
                var5.regularPrice = var9;
                var5 = var7.bind(var8)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1036:
                return var0;
        }
    };
    var _closure1_slot21 = var3;
    var3 = 38;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/premium_marketing/PremiumFeaturesCard.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61541: for (var _fun61541_ip = 0;;) switch (_fun61541_ip) {
            case 0:
                var0 = arg0;
                var29 = var0.premiumType;
                var _closure2_slot0 = var29;
                var7 = var0.style;
                var1 = var0.applicationId;
                var _closure2_slot1 = var1;
                var1 = var0.onPaymentSuccess;
                var _closure2_slot2 = var1;
                var1 = var0.onPaymentDismiss;
                var _closure2_slot3 = var1;
                var10 = var0.hideButton;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun61541_ip = 63;
                    continue _fun61541
                }
            case 61:
                var10 = false;
            case 63:
                var14 = var0.forFractionalPremium;
                if (!(var14 === var3)) {
                    _fun61541_ip = 75;
                    continue _fun61541
                }
            case 73:
                var14 = false;
            case 75:
                var13 = var0.hidePrice;
                if (!(var13 === var3)) {
                    _fun61541_ip = 87;
                    continue _fun61541
                }
            case 85:
                var13 = false;
            case 87:
                var11 = var0.isPremiumGroup;
                if (!(var11 === var3)) {
                    _fun61541_ip = 99;
                    continue _fun61541
                }
            case 97:
                var11 = false;
            case 99:
                var9 = var0.premiumGroupRole;
                if (!(var9 === var3)) {
                    _fun61541_ip = 144;
                    continue _fun61541
                }
            case 109:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 19;
                var0 = var2[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.PremiumSubscriptionGroupRole;
                var9 = var0.UNSPECIFIED;
            case 144:
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var0 = _closure1_slot19;
                var16 = var0.bind(var3)();
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 20;
                var0 = var4[var1];
                var5 = var2.bind(var3)(var0);
                var2 = _closure1_slot18;
                var0 = var2.has;
                var2 = var0.bind(var2)(var29);
                var0 = 'only Tier 0 and Tier 2 are supported';
                var0 = var5.bind(var3)(var2, var0);
                var2 = _closure1_slot0;
                var0 = 21;
                var0 = var4[var0];
                var5 = var2.bind(var3)(var0);
                var0 = var5.usePremiumTrialOffer;
                var6 = var0.bind(var5)();
                var0 = 22;
                var0 = var4[var0];
                var5 = var2.bind(var3)(var0);
                var0 = var5.usePremiumDiscountOffer;
                var25 = var0.bind(var5)();
                var0 = 23;
                var0 = var4[var0];
                var5 = var2.bind(var3)(var0);
                var0 = var5.useActiveDiscountInfo;
                var31 = var0.bind(var5)();
                var0 = 24;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.usePremiumTrialOfferPremiumType;
                var0 = var0.bind(var2)();
                var18 = null;
                var2 = var18 == var6;
                var28 = undefined;
                if (var2) {
                    _fun61541_ip = 326;
                    continue _fun61541
                }
            case 320:
                var28 = var6.subscription_trial;
            case 326:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var34 = 15;
                var2 = var2[var34];
                var5 = var4.bind(var3)(var2);
                var4 = var5.formatIntervalDuration;
                var2 = {};
                var15 = var18 == var28;
                var8 = undefined;
                if (var15) {
                    _fun61541_ip = 369;
                    continue _fun61541
                }
            case 363:
                var8 = var28.interval;
            case 369:
                var2.intervalType = var8;
                var15 = var18 == var28;
                var8 = undefined;
                if (var15) {
                    _fun61541_ip = 389;
                    continue _fun61541
                }
            case 383:
                var8 = var28.interval_count;
            case 389:
                var2.intervalCount = var8;
                var19 = var4.bind(var5)(var2);
                var20 = _closure1_slot0;
                var17 = _closure1_slot2;
                var21 = 18;
                var2 = var17[var21];
                var2 = var20.bind(var3)(var2);
                var5 = var2.intl;
                var4 = var5.string;
                var2 = var17[var21];
                var2 = var20.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.J61px0;
                var27 = var4.bind(var5)(var2);
                var8 = var29 === var0;
                var15 = _closure1_slot1;
                var0 = 25;
                var0 = var17[var0];
                var0 = var15.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var0 = var0.analyticsLocations;
                _closure2_slot4 = var0;
                var0 = 14;
                var2 = var17[var0];
                var23 = var20.bind(var3)(var2);
                var5 = var23.useStateFromStoresArray;
                var2 = _closure1_slot7;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var22
                    var2 = _closure1_slot7;
                    var0 = var2.getPremiumTypeSubscription;
                    var1 = var0.bind(var2)();
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = var2.hasFetchedSubscriptions;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var5 = var5.bind(var23)(var4, var2);
                var4 = _closure1_slot3;
                var2 = 2;
                var4 = var4.bind(var3)(var5, var2);
                var2 = 0;
                var30 = var4[var2];
                var2 = 1;
                var2 = var4[var2];
                var4 = _closure1_slot13;
                var4 = var4[var29];
                _closure2_slot5 = var4;
                var4 = var17[var0];
                var24 = var20.bind(var3)(var4);
                var23 = var24.useStateFromStores;
                var4 = _closure1_slot6;
                var5 = new Array(1);
                var5[0] = var4;
                var4 = function() { // Environment: var22
                    var2 = _closure1_slot6;
                    var1 = var2.isLoadedForSKUs;
                    var3 = _closure2_slot5;
                    var0 = new Array(1);
                    var0[0] = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var4 = var23.bind(var24)(var5, var4);
                var5 = var17[var0];
                var24 = var20.bind(var3)(var5);
                var23 = var24.useStateFromStores;
                var5 = _closure1_slot5;
                var20 = new Array(1);
                var20[0] = var5;
                var5 = function() { // Environment: var22
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var24 = var23.bind(var24)(var20, var5);
                var5 = 26;
                var5 = var17[var5];
                var5 = var15.bind(var3)(var5);
                var15 = var5.bind(var3)(var29, var14, var9);
                var23 = var18 != var30;
                if (!var23) {
                    _fun61541_ip = 670;
                    continue _fun61541
                }
            case 667:
                var23 = var4;
            case 670:
                if (!var23) {
                    _fun61541_ip = 676;
                    continue _fun61541
                }
            case 673:
                var23 = var2;
            case 676:
                var2 = var18 != var30;
                var4 = null;
                if (!var2) {
                    _fun61541_ip = 711;
                    continue _fun61541
                }
            case 685:
                var2 = var30.planIdFromItems;
                var4 = null;
                if (!(var3 !== var2)) {
                    _fun61541_ip = 711;
                    continue _fun61541
                }
            case 697:
                var5 = _closure1_slot15;
                var2 = var30.planIdFromItems;
                var4 = var5[var2];
            case 711:
                var5 = var18 == var4;
                var2 = undefined;
                if (var5) {
                    _fun61541_ip = 726;
                    continue _fun61541
                }
            case 720:
                var2 = var4.interval;
            case 726:
                if (!(var18 == var2)) {
                    _fun61541_ip = 740;
                    continue _fun61541
                }
            case 730:
                var4 = _closure1_slot14;
                var2 = var4.MONTH;
            case 740:
                _closure2_slot6 = var2;
                var2 = _closure1_slot0;
                var4 = _closure1_slot2;
                var5 = 27;
                var5 = var4[var5];
                var17 = var2.bind(var3)(var5);
                var9 = var17.getPremiumBundleWithPredicate;
                var5 = function(arg0) { // Environment: var22
                    _fun61545: for (var _fun61545_ip = 0;;) switch (_fun61545_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = var1.additionalPlans;
                            var5 = var1.isDeprecated;
                            var4 = var1.numPremiumGuild;
                            var3 = var1.premiumTier;
                            var2 = var1.interval;
                            var0 = var0.length;
                            var1 = 0;
                            var0 = var1 === var0;
                            if (!var0) {
                                _fun61545_ip = 50;
                                continue _fun61545
                            }
                        case 47:
                            var0 = !var5;
                        case 50:
                            if (!var0) {
                                _fun61545_ip = 57;
                                continue _fun61545
                            }
                        case 53:
                            var0 = var1 === var4;
                        case 57:
                            if (!var0) {
                                _fun61545_ip = 71;
                                continue _fun61545
                            }
                        case 60:
                            var1 = _closure2_slot0;
                            var0 = var3 === var1;
                        case 71:
                            if (!var0) {
                                _fun61545_ip = 85;
                                continue _fun61545
                            }
                        case 74:
                            var1 = _closure2_slot6;
                            var0 = var2 === var1;
                        case 85:
                            return var0;
                    }
                };
                var33 = var9.bind(var17)(var5);
                _closure2_slot7 = var33;
                var5 = _closure1_slot1;
                var1 = var4[var1];
                var9 = var5.bind(var3)(var1);
                var5 = var18 != var33;
                var1 = 'could not find a premium item';
                var1 = var9.bind(var3)(var5, var1);
                var1 = 28;
                var1 = var4[var1];
                var4 = var2.bind(var3)(var1);
                var2 = var4.useDiscountedPremiumProductInfo;
                var1 = new Array(1);
                var1[0] = var33;
                var1 = var2.bind(var4)(var25, var1);
                var32 = var1.discountedPriceString;
                var26 = var18 != var25;
                if (!var26) {
                    _fun61541_ip = 862;
                    continue _fun61541
                }
            case 858:
                var26 = var18 != var32;
            case 862:
                var5 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = var9[var0];
                var4 = var5.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot8;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var22
                    var2 = _closure1_slot8;
                    var1 = var2.getProduct;
                    var0 = _closure2_slot7;
                    var0 = var0.productId;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var20 = var2.bind(var4)(var1, var0);
                var2 = _closure1_slot17;
                var1 = _closure1_slot4;
                var0 = {};
                var4 = var16.containerWrapper;
                var0.style = var4;
                var17 = _closure1_slot16;
                var4 = 29;
                var4 = var9[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.PremiumPill;
                var4 = {};
                var35 = var16.pill;
                var4.style = var35;
                var4.discountOffer = var25;
                var35 = var18 != var31;
                var4.isActiveDiscount = var35;
                var4.shouldShowDiscountUpsell = var26;
                var4.premiumType = var29;
                var4.trialOffer = var6;
                var5 = var17.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var6 = _closure1_slot1;
                var5 = 30;
                var5 = var9[var5];
                var6 = var6.bind(var3)(var5);
                var5 = {};
                var5.premiumType = var29;
                var5.style = var7;
                var7 = {};
                var9 = var16.card;
                var7.style = var9;
                var9 = {};
                var35 = var16.logoContainer;
                var9.style = var35;
                var38 = _closure1_slot16;
                var37 = _closure1_slot1;
                var39 = _closure1_slot2;
                if (var11) {
                    _fun61541_ip = 1107;
                    continue _fun61541
                }
            case 1070:
                var35 = 32;
                var35 = var39[var35];
                var36 = var37.bind(var3)(var35);
                var35 = {};
                var35.premiumType = var29;
                var40 = var16.logo;
                var35.style = var40;
                var35 = var38.bind(var3)(var36, var35);
                _fun61541_ip = 1139;
                continue _fun61541;
            case 1107:
                var36 = 31;
                var36 = var39[var36];
                var37 = var37.bind(var3)(var36);
                var36 = {
                    'width': 185,
                    'height': 20,
                    'alwaysWhite': true
                };
                var35 = var38.bind(var3)(var37, var36);
            case 1139:
                var9.children = var35;
                var17 = var17.bind(var3)(var1, var9);
                var9 = new Array(5);
                var9[0] = var17;
                var36 = _closure1_slot16;
                var35 = _closure1_slot1;
                var37 = _closure1_slot2;
                var17 = 33;
                var17 = var37[var17];
                var35 = var35.bind(var3)(var17);
                var17 = {};
                var17.premiumType = var29;
                var17 = var36.bind(var3)(var35, var17);
                var9[1] = var17;
                var11 = !var11;
                if (!var11) {
                    _fun61541_ip = 1207;
                    continue _fun61541
                }
            case 1204:
                var11 = !var14;
            case 1207:
                if (!var11) {
                    _fun61541_ip = 1213;
                    continue _fun61541
                }
            case 1210:
                var11 = !var13;
            case 1213:
                if (!var11) {
                    _fun61541_ip = 1262;
                    continue _fun61541
                }
            case 1216:
                var17 = _closure1_slot16;
                var14 = _closure1_slot21;
                var13 = {};
                var13.premiumItem = var33;
                var13.discountedPriceString = var32;
                var13.discountOffer = var25;
                var13.activeDiscountInfo = var31;
                var13.subscriptionTrial = var28;
                var13.premiumType = var29;
                var11 = var17.bind(var3)(var14, var13);
            case 1262:
                var9[2] = var11;
                var14 = _closure1_slot16;
                var13 = _closure1_slot1;
                var17 = _closure1_slot2;
                var11 = 34;
                var11 = var17[var11];
                var13 = var13.bind(var3)(var11);
                var11 = {};
                var17 = var16.featureList;
                var11.style = var17;
                var11.features = var15;
                var15 = var16.featureIcon;
                var11.iconStyle = var15;
                var15 = var16.featureLabel;
                var11.labelStyle = var15;
                var15 = var16.featureRow;
                var11.rowStyle = var15;
                var11 = var14.bind(var3)(var13, var11);
                var9[3] = var11;
                var10 = !var10;
                if (!var10) {
                    _fun61541_ip = 1910;
                    continue _fun61541
                }
            case 1359:
                var14 = _closure1_slot16;
                var13 = _closure1_slot4;
                var11 = {};
                var15 = var16.button;
                var11.style = var15;
                var17 = _closure1_slot0;
                var28 = _closure1_slot2;
                var15 = 35;
                var15 = var28[var15];
                var15 = var17.bind(var3)(var15);
                var17 = var15.Button;
                var15 = {
                    'text': null,
                    'icon': null,
                    'iconPosition': null,
                    'variant': 'experimental_premium-secondary',
                    'size': 'md',
                    'grow': true
                };
                if (var8) {
                    _fun61541_ip = 1750;
                    continue _fun61541
                }
            case 1425:
                if (var26) {
                    _fun61541_ip = 1675;
                    continue _fun61541
                }
            case 1431:
                if (!var23) {
                    _fun61541_ip = 1497;
                    continue _fun61541
                }
            case 1434:
                var31 = var18 == var30;
                var28 = false;
                if (var31) {
                    _fun61541_ip = 1491;
                    continue _fun61541
                }
            case 1443:
                var33 = var30.planIdFromItems;
                var30 = var18 != var33;
                if (!var30) {
                    _fun61541_ip = 1488;
                    continue _fun61541
                }
            case 1456:
                var32 = _closure1_slot0;
                var31 = _closure1_slot2;
                var31 = var31[var34];
                var32 = var32.bind(var3)(var31);
                var31 = var32.getPremiumType;
                var31 = var31.bind(var32)(var33);
                var30 = var31 === var29;
            case 1488:
                var28 = var30;
            case 1491:
                if (var28) {
                    _fun61541_ip = 1619;
                    continue _fun61541
                }
            case 1497:
                var28 = _closure1_slot12;
                var28 = var28.TIER_0;
                if (!(var29 !== var28)) {
                    _fun61541_ip = 1565;
                    continue _fun61541
                }
            case 1511:
                var31 = _closure1_slot0;
                var28 = _closure1_slot2;
                var29 = var28[var21];
                var29 = var31.bind(var3)(var29);
                var30 = var29.intl;
                var29 = var30.string;
                var28 = var28[var21];
                var28 = var31.bind(var3)(var28);
                var28 = var28.t;
                var28 = var28["8x0jKT"];
                var28 = var29.bind(var30)(var28);
                _fun61541_ip = 1617;
                continue _fun61541;
            case 1565:
                var32 = _closure1_slot0;
                var29 = _closure1_slot2;
                var30 = var29[var21];
                var30 = var32.bind(var3)(var30);
                var31 = var30.intl;
                var30 = var31.string;
                var29 = var29[var21];
                var29 = var32.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29.cM8bbx;
                var28 = var30.bind(var31)(var29);
            case 1617:
                _fun61541_ip = 1673;
                continue _fun61541;
            case 1619:
                var32 = _closure1_slot0;
                var29 = _closure1_slot2;
                var30 = var29[var21];
                var30 = var32.bind(var3)(var30);
                var31 = var30.intl;
                var30 = var31.string;
                var29 = var29[var21];
                var29 = var32.bind(var3)(var29);
                var29 = var29.t;
                var29 = var29["j+wlhy"];
                var28 = var30.bind(var31)(var29);
            case 1673:
                _fun61541_ip = 1747;
                continue _fun61541;
            case 1675:
                var30 = _closure1_slot0;
                var29 = _closure1_slot2;
                var31 = var29[var21];
                var31 = var30.bind(var3)(var31);
                var32 = var31.intl;
                var31 = var32.formatToPlainString;
                var29 = var29[var21];
                var29 = var30.bind(var3)(var29);
                var29 = var29.t;
                var30 = var29.bkQ4bH;
                var29 = {};
                var33 = var25.discount;
                var33 = var33.amount;
                var29.percent = var33;
                var28 = var31.bind(var32)(var30, var29);
            case 1747:
                var27 = var28;
            case 1750:
                var15.text = var27;
                if (!(var18 == var25)) {
                    _fun61541_ip = 1765;
                    continue _fun61541
                }
            case 1760:
                var25 = undefined;
                if (!var8) {
                    _fun61541_ip = 1852;
                    continue _fun61541
                }
            case 1765:
                var29 = _closure1_slot16;
                var28 = _closure1_slot0;
                var32 = _closure1_slot2;
                var27 = 36;
                var27 = var32[var27];
                var27 = var28.bind(var3)(var27);
                var28 = var27.NitroWheelIcon;
                var27 = {};
                var30 = var16.buttonIcon;
                var27.style = var30;
                var31 = _closure1_slot1;
                var30 = 12;
                var30 = var32[var30];
                var30 = var31.bind(var3)(var30);
                var30 = var30.unsafe_rawColors;
                var30 = var30.BRAND_500;
                var27.color = var30;
                var30 = 'sm';
                var27.size = var30;
                var25 = var29.bind(var3)(var28, var27);
            case 1852:
                var15.icon = var25;
                var25 = undefined;
                if (!var26) {
                    _fun61541_ip = 1867;
                    continue _fun61541
                }
            case 1863:
                var25 = 'start';
            case 1867:
                var15.iconPosition = var25;
                var24 = !var24;
                var15.shiny = var24;
                var15.disabled = var23;
                var22 = function() {
                    var1 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 37;
                    var0 = var2[var0];
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    var0 = {};
                    var3 = _closure1_slot20;
                    var0.analyticsLocation = var3;
                    var4 = _closure2_slot4;
                    var0.analyticsLocations = var4;
                    var4 = _closure2_slot7;
                    var4 = var4.premiumTier;
                    var0.premiumType = var4;
                    var4 = _closure2_slot1;
                    var0.applicationId = var4;
                    var4 = _closure2_slot2;
                    var0.onPaymentSuccess = var4;
                    var3 = _closure2_slot3;
                    var0.onPaymentDismiss = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var15.onPress = var22;
                var15 = var14.bind(var3)(var17, var15);
                var11.children = var15;
                var10 = var14.bind(var3)(var13, var11);
            case 1910:
                var9[4] = var10;
                var7.children = var9;
                var9 = var2.bind(var3)(var1, var7);
                var7 = new Array(2);
                var7[0] = var9;
                if (!var8) {
                    _fun61541_ip = 2121;
                    continue _fun61541
                }
            case 1938:
                var11 = _closure1_slot16;
                var10 = _closure1_slot4;
                var9 = {};
                var13 = true;
                var9.accessible = var13;
                var13 = var16.trialSubTextContainer;
                var9.style = var13;
                var15 = _closure1_slot0;
                var14 = _closure1_slot2;
                var12 = 17;
                var12 = var14[var12];
                var12 = var15.bind(var3)(var12);
                var13 = var12.Text;
                var12 = {};
                var17 = 'text-md/normal';
                var12.variant = var17;
                var16 = var16.trialSubText;
                var12.style = var16;
                var16 = var14[var21];
                var16 = var15.bind(var3)(var16);
                var17 = var16.intl;
                var16 = var17.format;
                var14 = var14[var21];
                var14 = var15.bind(var3)(var14);
                var14 = var14.t;
                var15 = var14.pC4tcv;
                var14 = {};
                var14.trialPeriod = var19;
                var21 = var18 == var20;
                var19 = undefined;
                if (var21) {
                    _fun61541_ip = 2074;
                    continue _fun61541
                }
            case 2068:
                var19 = var20.priceString;
            case 2074:
                var20 = var18 != var19;
                var18 = '$...';
                if (!var20) {
                    _fun61541_ip = 2090;
                    continue _fun61541
                }
            case 2087:
                var18 = var19;
            case 2090:
                var14.price = var18;
                var14 = var16.bind(var17)(var15, var14);
                var12.children = var14;
                var12 = var11.bind(var3)(var13, var12);
                var9.children = var12;
                var8 = var11.bind(var3)(var10, var9);
            case 2121:
                var7[1] = var8;
                var5.children = var7;
                var5 = var2.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1298, 3075, 3076, 4575, 660, 1615, 483, 33, 1297, 671, 4645, 566, 3068, 4570, 3900, 1234, 1629, 44, 6615, 6617, 6614, 7028, 5688, 7635, 7093, 7094, 7020, 5710, 7247, 7644, 7646, 7652, 4043, 5711, 7012, 2]);