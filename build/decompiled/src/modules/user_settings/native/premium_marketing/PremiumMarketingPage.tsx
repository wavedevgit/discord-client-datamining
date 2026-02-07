// modules/user_settings/native/premium_marketing/PremiumMarketingPage.tsx
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
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot5 = var6;
    var3 = var3.ScrollView;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ContentDismissActionType;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.FractionalPremiumStates;
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot10 = var6;
    var3 = var3.jsxs;
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var9 = 'flex';
    var8.display = var9;
    var3.container = var8;
    var8 = {
        'flexDirection': 'column',
        'alignItems': 'center',
        'marginTop': 16
    };
    var3.scrollContainer = var8;
    var8 = {};
    var9 = 8;
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var9 = var9.TEXT_DEFAULT;
    var8.tintColor = var9;
    var3.arrowIcon = var8;
    var8 = {
        'transform': null,
        'position': 'absolute',
        'left': 16
    };
    var10 = {};
    var9 = -1;
    var10.scaleX = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var8.transform = var9;
    var3.backButton = var8;
    var8 = {};
    var9 = 48;
    var8.marginTop = var9;
    var3.sectionWithTopMargin = var8;
    var8 = {};
    var9 = 12;
    var8.paddingHorizontal = var9;
    var3.sectionWithPadding = var8;
    var8 = {};
    var9 = 464;
    var8.maxWidth = var9;
    var3.sectionWidth = var8;
    var8 = {};
    var9 = '100%';
    var8.width = var9;
    var3.accountCreditContainer = var8;
    var8 = {
        'marginTop': 24,
        'marginBottom': 20
    };
    var3.accountCreditContainerWithSpacing = var8;
    var8 = {};
    var9 = 9;
    var10 = var5[var9];
    var10 = var4.bind(var0)(var10);
    var10 = var10.DARK_PRIMARY_700_LIGHT_WHITE_500;
    var8.backgroundColor = var10;
    var3.themedBackground = var8;
    var8 = {};
    var9 = var5[var9];
    var9 = var4.bind(var0)(var9);
    var9 = var9.TIER_0_MARKETING_PAGE_BACK_BUTTON_BG;
    var8.backgroundColor = var9;
    var3.backButtonBackground = var8;
    var8 = {
        'marginBottom': 16,
        'marginHorizontal': 'auto',
        'textAlign': 'center'
    };
    var3.promotionCardHeader = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = 35;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/premium_marketing/PremiumMarketingPage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun92781: for (var _fun92781_ip = 0;;) switch (_fun92781_ip) {
            case 0:
                var1 = arg0;
                var12 = var1.userHasSubscription;
                var _closure2_slot0 = var12;
                var15 = var1.subscriptionDetails;
                var13 = var1.billingInfo;
                var22 = var1.accountCredit;
                var20 = var1.applicationId;
                var0 = var1.onClose;
                var21 = var1.premiumFeatureCardOrder;
                var2 = var1.entitlements;
                var19 = var1.onPaymentSuccess;
                var18 = var1.onPaymentDismiss;
                var3 = undefined;
                var _closure2_slot6 = var3;
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 10;
                var1 = var10[var1];
                var5 = var9.bind(var3)(var1);
                var4 = var5.useCommonTriggerPoint;
                var1 = 11;
                var1 = var10[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.OpenNitroTriggerPoint;
                var1 = var4.bind(var5)(var1);
                var1 = _closure1_slot12;
                var14 = var1.bind(var3)();
                var5 = _closure1_slot1;
                var1 = 12;
                var1 = var10[var1];
                var1 = var5.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var7 = var1.top;
                var1 = 13;
                var1 = var10[var1];
                var4 = var9.bind(var3)(var1);
                var1 = var4.useNavigation;
                var1 = var1.bind(var4)();
                var _closure2_slot1 = var1;
                var4 = 14;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.bind(var3)();
                var4 = var4.analyticsLocations;
                var _closure2_slot2 = var4;
                var6 = _closure1_slot4;
                var4 = var6.useState;
                var8 = false;
                var11 = var4.bind(var6)(var8);
                var5 = _closure1_slot3;
                var4 = 2;
                var5 = var5.bind(var3)(var11, var4);
                var24 = 0;
                var4 = var5[var24];
                var _closure2_slot3 = var4;
                var4 = 1;
                var4 = var5[var4];
                var _closure2_slot4 = var4;
                var5 = var6.useLayoutEffect;
                var4 = new Array(2);
                var4[0] = var1;
                var4[1] = var12;
                var1 = function() { // Environment: var25
                    var2 = _closure2_slot1;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = _closure2_slot0;
                    var0.headerShown = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var5.bind(var6)(var1, var4);
                var1 = 15;
                var1 = var10[var1];
                var5 = var9.bind(var3)(var1);
                var4 = var5.usePromotionMarketingComponent;
                var1 = 16;
                var1 = var10[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.MarketingComponentType;
                var1 = var1.PREMIUM_TAB;
                var1 = var4.bind(var5)(var1);
                var _closure2_slot5 = var1;
                var5 = var6.useEffect;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = function() { // Environment: var25
                    _fun92783: for (var _fun92783_ip = 0;;) switch (_fun92783_ip) {
                        case 0:
                            var2 = _closure2_slot5;
                            var1 = null;
                            var1 = var1 == var2;
                            if (var1) {
                                _fun92783_ip = 46;
                                continue _fun92783
                            }
                        case 16:
                            var2 = _closure2_slot5;
                            var2 = var2.properties;
                            var2 = var2.properties;
                            var3 = var2.oneofKind;
                            var2 = 'premiumTab';
                            var1 = var2 !== var3;
                        case 46:
                            if (var1) {
                                _fun92783_ip = 126;
                                continue _fun92783
                            }
                        case 49:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 17;
                            var2 = var7[var2];
                            var3 = undefined;
                            var5 = var6.bind(var3)(var2);
                            var4 = var5.UNSAFE_isSnowflakeBoundDismissibleContentDismissed;
                            var2 = 18;
                            var2 = var7[var2];
                            var2 = var6.bind(var3)(var2);
                            var2 = var2.DismissibleContent;
                            var3 = var2.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
                            var2 = _closure2_slot5;
                            var2 = var2.promotionId;
                            var2 = var4.bind(var5)(var3, var2);
                            var1 = var2.isDismissed;
                        case 126:
                            if (var1) {
                                _fun92783_ip = 218;
                                continue _fun92783
                            }
                        case 129:
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 19;
                            var1 = var7[var1];
                            var2 = undefined;
                            var4 = var6.bind(var2)(var1);
                            var3 = var4.markSnowflakeBoundDismissibleContentAsDismissed;
                            var1 = 18;
                            var1 = var7[var1];
                            var1 = var6.bind(var2)(var1);
                            var1 = var1.DismissibleContent;
                            var2 = var1.PREMIUM_TAB_MARKETING_MOMENT_OFFER_BADGE;
                            var0 = _closure2_slot5;
                            var1 = var0.promotionId;
                            var0 = {};
                            var5 = _closure1_slot8;
                            var5 = var5.AUTO_DISMISS;
                            var0.dismissAction = var5;
                            var0 = var3.bind(var4)(var2, var1, var0);
                        case 218:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var5.bind(var6)(var1, var4);
                var10 = null;
                if (!(var10 == var0)) {
                    _fun92781_ip = 382;
                    continue _fun92781
                }
            case 375:
                var0 = function() { // Environment: var25
                    var1 = _closure2_slot1;
                    var0 = var1.pop;
                    var0 = var0.bind(var1)();
                    return var0;
                };
            case 382:
                _closure2_slot6 = var0;
                var23 = !var12;
                if (!var23) {
                    _fun92781_ip = 585;
                    continue _fun92781
                }
            case 395:
                var4 = _closure1_slot10;
                var6 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 20;
                var0 = var9[var5];
                var0 = var6.bind(var3)(var0);
                var1 = var0.CircularIconButton;
                var0 = {};
                var17 = var14.backButton;
                var11 = new Array(2);
                var11[0] = var17;
                var17 = var14.backButtonBackground;
                var11[1] = var17;
                var0.style = var11;
                var11 = 21;
                var17 = var9[var11];
                var17 = var6.bind(var3)(var17);
                var26 = var17.intl;
                var17 = var26.string;
                var11 = var9[var11];
                var11 = var6.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11["13/7kX"];
                var11 = var17.bind(var26)(var11);
                var0.accessibilityLabel = var11;
                var17 = _closure1_slot1;
                var11 = 22;
                var11 = var9[var11];
                var11 = var17.bind(var3)(var11);
                var0.source = var11;
                var5 = var9[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.CircularIconButton;
                var5 = var5.Sizes;
                var5 = var5.MEDIUM_32;
                var0.size = var5;
                var5 = var14.arrowIcon;
                var0.iconStyle = var5;
                var5 = function() {
                    var1 = _closure2_slot6;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var0.onPress = var5;
                var23 = var4.bind(var3)(var1, var0);
            case 585:
                var11 = var10 != var2;
                if (!var11) {
                    _fun92781_ip = 623;
                    continue _fun92781
                }
            case 592:
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 23;
                var0 = var4[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.hasAccountCredit;
                var11 = var0.bind(var1)(var2);
            case 623:
                var1 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 24;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var4 = true;
                var0.forceFetch = var4;
                var17 = var1.bind(var3)(var0);
                var1 = _closure1_slot0;
                var0 = 25;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useIsEligibleForBogoPromotion;
                var9 = var0.bind(var1)();
                var2 = _closure1_slot11;
                var1 = _closure1_slot5;
                var0 = {};
                var5 = var14.container;
                var4 = new Array(3);
                var4[0] = var5;
                var5 = var14.themedBackground;
                var4[1] = var5;
                var5 = {};
                var6 = 0;
                if (var12) {
                    _fun92781_ip = 726;
                    continue _fun92781
                }
            case 723:
                var6 = var7;
            case 726:
                var5.paddingTop = var6;
                var4[2] = var5;
                var0.style = var4;
                var6 = _closure1_slot10;
                var5 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 26;
                var4 = var7[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot11;
                var6 = _closure1_slot6;
                var5 = {};
                var26 = var14.scrollContainer;
                var5.contentContainerStyle = var26;
                var25 = function arg0() {
                    _fun92786: for (var _fun92786_ip = 0;;) switch (_fun92786_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var4 = var0.layoutMeasurement;
                            var3 = var0.contentOffset;
                            var2 = var0.contentSize;
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun92786_ip = 60;
                                continue _fun92786
                            }
                        case 37:
                            var4 = var4.height;
                            var3 = var3.y;
                            var3 = var4 + var3;
                            var2 = var2.height;
                            var1 = var3 < var2;
                        case 60:
                            if (var1) {
                                _fun92786_ip = 131;
                                continue _fun92786
                            }
                        case 63:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var2 = 27;
                            var3 = var3[var2];
                            var2 = undefined;
                            var5 = var4.bind(var2)(var3);
                            var4 = var5.track;
                            var1 = _closure1_slot7;
                            var3 = var1.PREMIUM_MARKETING_SURFACE_REACHED_BOTTOM;
                            var1 = {};
                            var6 = _closure2_slot2;
                            var1.location_stack = var6;
                            var1 = var4.bind(var5)(var3, var1);
                            var1 = _closure2_slot4;
                            var0 = true;
                            var0 = var1.bind(var2)(var0);
                        case 131:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5.onScroll = var25;
                var5.scrollEventThrottle = var24;
                var5.showsVerticalScrollIndicator = var8;
                var8 = new Array(11);
                var8[0] = var23;
                var8[1] = var15;
                var8[2] = var13;
                var10 = null;
                if (!var11) {
                    _fun92781_ip = 898;
                    continue _fun92781
                }
            case 843:
                var15 = _closure1_slot10;
                var13 = _closure1_slot5;
                var11 = {};
                var24 = var14.accountCreditContainer;
                var23 = new Array(2);
                var23[0] = var24;
                if (var12) {
                    _fun92781_ip = 878;
                    continue _fun92781
                }
            case 870:
                var24 = var14.accountCreditContainerWithSpacing;
                _fun92781_ip = 880;
                continue _fun92781;
            case 878:
                var24 = {};
            case 880:
                var23[1] = var24;
                var11.style = var23;
                var11.children = var22;
                var10 = var15.bind(var3)(var13, var11);
            case 898:
                var8[3] = var10;
                var13 = _closure1_slot10;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var10 = 28;
                var10 = var15[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                if (var12) {
                    _fun92781_ip = 935;
                    continue _fun92781
                }
            case 931:
                var22 = {};
                _fun92781_ip = 941;
                continue _fun92781;
            case 935:
                var22 = var14.sectionWithTopMargin;
            case 941:
                var15 = new Array(2);
                var15[0] = var22;
                var22 = var14.sectionWidth;
                var15[1] = var22;
                var10.style = var15;
                var10 = var13.bind(var3)(var11, var10);
                var8[4] = var10;
                var10 = var9;
                if (!var9) {
                    _fun92781_ip = 1140;
                    continue _fun92781
                }
            case 982:
                var15 = _closure1_slot10;
                var13 = _closure1_slot5;
                var11 = {};
                var23 = var14.sectionWithPadding;
                var22 = new Array(2);
                var22[0] = var23;
                var23 = var14.sectionWidth;
                var22[1] = var23;
                var11.style = var22;
                var27 = _closure1_slot0;
                var28 = _closure1_slot2;
                var22 = 29;
                var22 = var28[var22];
                var22 = var27.bind(var3)(var22);
                var23 = var22.Text;
                var22 = {
                    'style': null,
                    'variant': 'heading-xl/extrabold',
                    'color': 'mobile-text-heading-primary'
                };
                var24 = var14.promotionCardHeader;
                var22.style = var24;
                var24 = 21;
                var25 = var28[var24];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var28[var24];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24["QPC/ee"];
                var24 = var25.bind(var26)(var24);
                var22.children = var24;
                var22 = var15.bind(var3)(var23, var22);
                var11.children = var22;
                var10 = var15.bind(var3)(var13, var11);
            case 1140:
                var8[5] = var10;
                if (!var9) {
                    _fun92781_ip = 1221;
                    continue _fun92781
                }
            case 1147:
                var13 = _closure1_slot10;
                var11 = _closure1_slot1;
                var15 = _closure1_slot2;
                var10 = 30;
                var10 = var15[var10];
                var11 = var11.bind(var3)(var10);
                var10 = {};
                var22 = var14.sectionWithPadding;
                var15 = new Array(2);
                var15[0] = var22;
                var22 = var14.sectionWidth;
                var15[1] = var22;
                var10.style = var15;
                var10.applicationId = var20;
                var10.onPaymentSuccess = var19;
                var10.onPaymentDismiss = var18;
                var9 = var13.bind(var3)(var11, var10);
            case 1221:
                var8[6] = var9;
                var11 = _closure1_slot10;
                var10 = _closure1_slot1;
                var13 = _closure1_slot2;
                var9 = 31;
                var9 = var13[var9];
                var15 = var10.bind(var3)(var9);
                var9 = {};
                var23 = var14.sectionWithPadding;
                var22 = new Array(2);
                var22[0] = var23;
                var23 = var14.sectionWidth;
                var22[1] = var23;
                var9.style = var22;
                var9.order = var21;
                var9.applicationId = var20;
                var9.onPaymentSuccess = var19;
                var9.onPaymentDismiss = var18;
                var9 = var11.bind(var3)(var15, var9);
                var8[7] = var9;
                var9 = 32;
                var9 = var13[var9];
                var15 = var10.bind(var3)(var9);
                var9 = {};
                var19 = var14.sectionWithTopMargin;
                var18 = new Array(2);
                var18[0] = var19;
                var19 = var14.sectionWidth;
                var18[1] = var19;
                var9.style = var18;
                var9 = var11.bind(var3)(var15, var9);
                var8[8] = var9;
                var9 = 33;
                var9 = var13[var9];
                var15 = var10.bind(var3)(var9);
                var9 = {};
                var19 = var14.sectionWithTopMargin;
                var18 = new Array(3);
                var18[0] = var19;
                var19 = var14.sectionWithPadding;
                var18[1] = var19;
                var19 = var14.sectionWidth;
                var18[2] = var19;
                var9.style = var18;
                var17 = var17.fractionalState;
                var16 = _closure1_slot9;
                var16 = var16.FP_ONLY;
                var16 = var17 === var16;
                var9.isFractionalOnly = var16;
                var9 = var11.bind(var3)(var15, var9);
                var8[9] = var9;
                var9 = 34;
                var9 = var13[var9];
                var10 = var10.bind(var3)(var9);
                var9 = {};
                var15 = var14.sectionWithTopMargin;
                var13 = new Array(3);
                var13[0] = var15;
                var15 = var14.sectionWithPadding;
                var13[1] = var15;
                var14 = var14.sectionWidth;
                var13[2] = var14;
                var9.style = var13;
                var12 = !var12;
                var9.showSubscribeButton = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[10] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 660, 1369, 1623, 33, 1297, 671, 4874, 11528, 12073, 1568, 1469, 5777, 10671, 9515, 3213, 1358, 1360, 11977, 1234, 11728, 3111, 4651, 7145, 7621, 795, 12078, 3942, 12081, 7742, 12082, 7338, 12087, 2]);