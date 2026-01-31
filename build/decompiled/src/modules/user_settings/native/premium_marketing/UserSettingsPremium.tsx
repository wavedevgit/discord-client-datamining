// modules/user_settings/native/premium_marketing/UserSettingsPremium.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var10 = 1;
    var7 = var5[var10];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ActivityIndicator;
    var _closure1_slot5 = var7;
    var7 = var3.View;
    var _closure1_slot6 = var7;
    var3 = var3.ScrollView;
    var _closure1_slot7 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticEvents;
    var _closure1_slot14 = var6;
    var6 = var3.AppStates;
    var _closure1_slot15 = var6;
    var6 = var3.UserSettingsSections;
    var _closure1_slot16 = var6;
    var9 = var3.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.PremiumTypes;
    var _closure1_slot17 = var6;
    var3 = var3.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot18 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot19 = var3;
    var3 = 12;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {};
    var8.flex = var10;
    var3.root = var8;
    var8 = {};
    var10 = 24;
    var8.paddingVertical = var10;
    var8.paddingHorizontal = var9;
    var3.container = var8;
    var8 = {
        'paddingVertical': 24,
        'alignSelf': 'center',
        'maxWidth': 600
    };
    var3.ipadContainer = var8;
    var8 = {};
    var10 = 16;
    var8.marginTop = var10;
    var8.marginHorizontal = var9;
    var3.subscriptionNotice = var8;
    var8 = {
        'alignSelf': 'center',
        'position': 'absolute',
        'top': 0
    };
    var3.topBackground = var8;
    var8 = {
        'alignSelf': 'center',
        'position': 'absolute',
        'bottom': 4294967262
    };
    var3.bottomBackground = var8;
    var8 = {};
    var8.marginTop = var10;
    var3.policyHint = var8;
    var8 = {};
    var10 = 32;
    var8.marginTop = var10;
    var3.features = var8;
    var8 = {};
    var8.marginTop = var10;
    var3.tier1 = var8;
    var8 = {};
    var8.marginTop = var10;
    var3.tier2 = var8;
    var8 = {
        'marginTop': 16,
        'paddingHorizontal': 0
    };
    var3.policy = var8;
    var8 = {
        'marginTop': 20,
        'width': '100%'
    };
    var3.subscriptionHeader = var8;
    var8 = {
        'marginTop': 20,
        'width': '100%'
    };
    var3.billingInfo = var8;
    var8 = {
        'marginTop': 20,
        'paddingHorizontal': null,
        'width': '100%'
    };
    var8.paddingHorizontal = var9;
    var3.accountCredit = var8;
    var8 = {
        'display': 'flex',
        'alignItems': 'center',
        'justifyContent': 'center',
        'height': '100%'
    };
    var3.loadingSpinnerContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot20 = var3;
    var3 = 43;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_settings/native/premium_marketing/UserSettingsPremium.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun57432: for (var _fun57432_ip = 0;;) switch (_fun57432_ip) {
            case 0:
                var1 = arg0;
                var21 = var1.applicationId;
                var _closure2_slot0 = var21;
                var0 = var1.activitySessionId;
                var _closure2_slot1 = var0;
                var0 = var1.channelId;
                var _closure2_slot2 = var0;
                var0 = var1.guildId;
                var _closure2_slot3 = var0;
                var0 = var1.isFromTextSection;
                var14 = var1.onClose;
                var17 = var1.premiumFeatureCardOrder;
                var15 = var1.onPaymentSuccess;
                var13 = var1.onPaymentDismiss;
                var5 = undefined;
                var _closure2_slot4 = var5;
                var _closure2_slot5 = var5;
                var _closure2_slot6 = var5;
                var _closure2_slot7 = var5;
                var _closure2_slot8 = var5;
                var _closure2_slot9 = var5;
                var _closure2_slot10 = var5;
                var1 = _closure1_slot20;
                var7 = var1.bind(var5)();
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var3 = 13;
                var3 = var1[var3];
                var3 = var2.bind(var5)(var3);
                var3 = var3.bind(var5)();
                var3 = 14;
                var3 = var1[var3];
                var3 = var2.bind(var5)(var3);
                var3 = var3.bind(var5)();
                var24 = var3.bottom;
                var22 = 15;
                var1 = var1[var22];
                var3 = var2.bind(var5)(var1);
                if (var0) {
                    _fun57432_ip = 179;
                    continue _fun57432
                }
            case 173:
                var0 = new Array(0);
                _fun57432_ip = 216;
                continue _fun57432;
            case 179:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 16;
                var1 = var4[var1];
                var1 = var2.bind(var5)(var1);
                var2 = var1.TEXT_AND_IMAGES;
                var1 = new Array(1);
                var1[0] = var2;
                var0 = var1;
            case 216:
                var1 = new Array(1);
                var9 = 0;
                var32 = var1;
                var31 = var0;
                var30 = 0;
                var4 = arraySpread(var32, var31, var30);
                var8 = _closure1_slot1;
                var0 = _closure1_slot2;
                var2 = 16;
                var2 = var0[var2];
                var2 = var8.bind(var5)(var2);
                var2 = var2.PREMIUM_MARKETING;
                var1[var4] = var2;
                var2 = 1;
                var4 = var4 + var2;
                var1 = var3.bind(var5)(var1);
                var12 = var1.analyticsLocations;
                _closure2_slot4 = var12;
                var3 = _closure1_slot0;
                var1 = 17;
                var0 = var0[var1];
                var8 = var3.bind(var5)(var0);
                var4 = var8.useStateFromStores;
                var0 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var26
                    _fun57433: for (var _fun57433_ip = 0;;) switch (_fun57433_ip) {
                        case 0:
                            var1 = _closure1_slot8;
                            var0 = var1.getAnalyticsLocation;
                            var1 = var0.bind(var1)();
                            var0 = null;
                            var2 = var0 == var1;
                            var0 = undefined;
                            if (var2) {
                                _fun57433_ip = 35;
                                continue _fun57433
                            }
                        case 30:
                            var0 = var1.section;
                        case 35:
                            return var0;
                    }
                };
                var4 = var4.bind(var8)(var3, var0);
                if (var4) {
                    _fun57432_ip = 338;
                    continue _fun57432
                }
            case 334:
                var0 = {};
                _fun57432_ip = 348;
                continue _fun57432;
            case 338:
                var3 = {};
                var3.source_section = var4;
                var0 = var3;
            case 348:
                _closure2_slot5 = var0;
                var8 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 18;
                var0 = var11[var0];
                var3 = var8.bind(var5)(var0);
                var0 = function() { // Environment: var26
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 19;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot14;
                    var2 = var1.PREMIUM_MARKETING_PAGE_VIEWED;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1.application_id = var6;
                    var6 = _closure2_slot4;
                    var1.location_stack = var6;
                    var6 = _closure2_slot1;
                    var1.activity_session_id = var6;
                    var6 = _closure2_slot2;
                    var1.channel_id = var6;
                    var6 = _closure2_slot3;
                    var1.guild_id = var6;
                    var7 = _closure2_slot5;
                    var8 = var1;
                    var5 = copyDataProperties(var8, var7);
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var0 = var3.bind(var5)(var0);
                var10 = _closure1_slot0;
                var0 = var11[var1];
                var16 = var10.bind(var5)(var0);
                var4 = var16.useStateFromStoresArray;
                var0 = _closure1_slot10;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var26
                    var2 = _closure1_slot10;
                    var0 = var2.getPremiumTypeSubscription;
                    var1 = var0.bind(var2)();
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = var2.hasFetchedSubscriptions;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var4 = var4.bind(var16)(var3, var0);
                var3 = _closure1_slot3;
                var0 = 2;
                var0 = var3.bind(var5)(var4, var0);
                var23 = var0[var9];
                var2 = var0[var2];
                var0 = 20;
                var0 = var11[var0];
                var3 = var10.bind(var5)(var0);
                var0 = var3.useNavigation;
                var0 = var0.bind(var3)();
                _closure2_slot6 = var0;
                var0 = var11[var1];
                var16 = var10.bind(var5)(var0);
                var4 = var16.useStateFromStores;
                var0 = _closure1_slot12;
                var3 = new Array(1);
                var3[0] = var0;
                var0 = function() { // Environment: var26
                    var1 = _closure1_slot12;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var4.bind(var16)(var3, var0);
                _closure2_slot7 = var4;
                var18 = _closure1_slot4;
                var0 = var18.useRef;
                var0 = var0.bind(var18)(var4);
                _closure2_slot8 = var0;
                var0 = var11[var1];
                var20 = var10.bind(var5)(var0);
                var19 = var20.useStateFromStores;
                var3 = _closure1_slot11;
                var16 = new Array(1);
                var16[0] = var3;
                var0 = function() { // Environment: var26
                    var2 = _closure1_slot11;
                    var1 = var2.hasFetchedForApplicationIds;
                    var3 = _closure1_slot18;
                    var0 = new Array(1);
                    var0[0] = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var19.bind(var20)(var16, var0);
                var16 = var11[var1];
                var27 = var10.bind(var5)(var16);
                var25 = var27.useStateFromStores;
                var20 = new Array(1);
                var20[0] = var3;
                var3 = 21;
                var3 = var11[var3];
                var3 = var10.bind(var5)(var3);
                var29 = var3.areSetsEqual;
                var31 = function() { // Environment: var26
                    _fun57438: for (var _fun57438_ip = 0;;) switch (_fun57438_ip) {
                        case 0:
                            var2 = _closure1_slot11;
                            var1 = var2.getForApplication;
                            var0 = _closure1_slot18;
                            var0 = var1.bind(var2)(var0);
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun57438_ip = 56;
                                continue _fun57438
                            }
                        case 28:
                            var1 = global;
                            var1 = var1.Set;
                            var2 = var1.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var4 = var2;
                            var1 = new var4[var1](var3);
                            var0 = var1 instanceof Object ? var1 : var2;
                        case 56:
                            return var0;
                    }
                };
                var30 = new Array(0);
                var33 = var27;
                var32 = var20;
                var16 = var33[var25](var32, var31, var30, var29, var28);
                var3 = var11[var1];
                var25 = var10.bind(var5)(var3);
                var20 = var25.useStateFromStores;
                var3 = _closure1_slot9;
                var19 = new Array(1);
                var19[0] = var3;
                var3 = function() { // Environment: var26
                    var1 = _closure1_slot9;
                    var0 = var1.isLoadedForPremiumSKUs;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var19 = var20.bind(var25)(var19, var3);
                var1 = var11[var1];
                var25 = var10.bind(var5)(var1);
                var20 = var25.useStateFromStores;
                var1 = _closure1_slot13;
                var3 = new Array(1);
                var3[0] = var1;
                var1 = function() { // Environment: var26
                    var2 = _closure1_slot13;
                    var1 = var2.getProduct;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 22;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.ProductIds;
                    var0 = var0.PREMIUM_TIER_2_MONTHLY;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var3 = var20.bind(var25)(var3, var1);
                var1 = 23;
                var1 = var11[var1];
                var25 = var8.bind(var5)(var1);
                var20 = var25.useExperiment;
                var8 = {};
                var1 = 'b539b8_1';
                var8.location = var1;
                var1 = {};
                var27 = false;
                var1.autoTrackExposure = var27;
                var1 = var20.bind(var25)(var8, var1);
                var1 = var1.paymentsBlocked;
                var25 = var18.useEffect;
                var20 = function() { // Environment: var26
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 24;
                    var2 = var4[var0];
                    var0 = undefined;
                    var5 = var3.bind(var0)(var2);
                    var3 = var5.wait;
                    var2 = function() { // Environment: var2
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 25;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var0 = var1.init;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2 = var3.bind(var5)(var2);
                    var3 = _closure1_slot0;
                    var2 = 26;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.fetchUserEntitlementsForApplication;
                    var1 = _closure1_slot18;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = new Array(0);
                var8 = var25.bind(var18)(var20, var8);
                var20 = var18.useEffect;
                var8 = new Array(1);
                var8[0] = var4;
                var4 = function() { // Environment: var26
                    _fun57443: for (var _fun57443_ip = 0;;) switch (_fun57443_ip) {
                        case 0:
                            var3 = _closure2_slot7;
                            var2 = _closure1_slot15;
                            var2 = var2.ACTIVE;
                            var2 = var3 === var2;
                            if (!var2) {
                                _fun57443_ip = 50;
                                continue _fun57443
                            }
                        case 27:
                            var3 = _closure2_slot8;
                            var4 = var3.current;
                            var3 = _closure1_slot15;
                            var3 = var3.BACKGROUND;
                            var2 = var4 === var3;
                        case 50:
                            if (!var2) {
                                _fun57443_ip = 93;
                                continue _fun57443
                            }
                        case 53:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 24;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.wait;
                            var1 = function() { // Environment: var1
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 25;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.init;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                        case 93:
                            var1 = _closure2_slot8;
                            var0 = _closure2_slot7;
                            var1.current = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var20.bind(var18)(var4, var8);
                var4 = 27;
                var4 = var11[var4];
                var8 = var10.bind(var5)(var4);
                var4 = var8.usePremiumTrialOffer;
                var20 = var4.bind(var8)();
                _closure2_slot9 = var20;
                var4 = 28;
                var4 = var11[var4];
                var8 = var10.bind(var5)(var4);
                var4 = var8.usePremiumDiscountOffer;
                var4 = var4.bind(var8)();
                _closure2_slot10 = var4;
                var8 = 29;
                var8 = var11[var8];
                var10 = var10.bind(var5)(var8);
                var8 = var10.usePremiumTrialOfferPremiumType;
                var11 = var8.bind(var10)();
                var10 = var18.useEffect;
                var8 = new Array(2);
                var8[0] = var20;
                var8[1] = var4;
                var4 = function() { // Environment: var26
                    _fun57445: for (var _fun57445_ip = 0;;) switch (_fun57445_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            var2 = null;
                            if (!(var2 != var1)) {
                                _fun57445_ip = 53;
                                continue _fun57445
                            }
                        case 13:
                            var4 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 30;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.acknowledgeUserTrialOffer;
                            var1 = _closure2_slot9;
                            var1 = var3.bind(var4)(var1);
                        case 53:
                            var1 = _closure2_slot10;
                            if (!(var2 != var1)) {
                                _fun57445_ip = 102;
                                continue _fun57445
                            }
                        case 61:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 31;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.acknowledgeUserOffer;
                            var0 = _closure2_slot10;
                            var0 = var1.bind(var2)(var3, var0);
                        case 102:
                            var0 = undefined;
                            return var0;
                    }
                };
                var4 = var10.bind(var18)(var4, var8);
                var18 = null;
                var20 = var18 != var23;
                if (!var20) {
                    _fun57432_ip = 909;
                    continue _fun57432
                }
            case 906:
                var20 = var19;
            case 909:
                if (!var20) {
                    _fun57432_ip = 915;
                    continue _fun57432
                }
            case 912:
                var20 = var2;
            case 915:
                var8 = _closure1_slot0;
                var10 = _closure1_slot2;
                var4 = 34;
                var4 = var10[var4];
                var8 = var8.bind(var5)(var4);
                var4 = var8.useHasTier2Premium;
                var10 = var4.bind(var8)();
                if (!(var18 != var3)) {
                    _fun57432_ip = 958;
                    continue _fun57432
                }
            case 949:
                if (!var19) {
                    _fun57432_ip = 958;
                    continue _fun57432
                }
            case 952:
                if (!var2) {
                    _fun57432_ip = 958;
                    continue _fun57432
                }
            case 955:
                if (var0) {
                    _fun57432_ip = 1017;
                    continue _fun57432
                }
            case 958:
                var3 = _closure1_slot19;
                var2 = _closure1_slot6;
                var0 = {};
                var4 = var7.loadingSpinnerContainer;
                var0.style = var4;
                var8 = _closure1_slot5;
                var4 = {
                    'animating': true,
                    'size': 'large'
                };
                var4 = var3.bind(var5)(var8, var4);
                var0.children = var4;
                var0 = var3.bind(var5)(var2, var0);
                _fun57432_ip = 1634;
                continue _fun57432;
            case 1017:
                var4 = _closure1_slot19;
                if (var1) {
                    _fun57432_ip = 1578;
                    continue _fun57432
                }
            case 1027:
                var2 = _closure1_slot6;
                var1 = {};
                var8 = var7.root;
                var3 = new Array(2);
                var3[0] = var8;
                var8 = {};
                var27 = _closure1_slot0;
                var28 = _closure1_slot2;
                var25 = 42;
                var25 = var28[var25];
                var27 = var27.bind(var5)(var25);
                var25 = var27.isAndroid;
                var25 = var25.bind(var27)();
                var9 = 0;
                if (!var25) {
                    _fun57432_ip = 1087;
                    continue _fun57432
                }
            case 1084:
                var9 = var24;
            case 1087:
                var8.marginBottom = var9;
                var3[1] = var8;
                var1.style = var3;
                var9 = _closure1_slot19;
                var8 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var22];
                var3 = var8.bind(var5)(var3);
                var8 = var3.AnalyticsLocationProvider;
                var3 = {};
                var3.value = var12;
                if (var10) {
                    _fun57432_ip = 1519;
                    continue _fun57432
                }
            case 1138:
                var10 = _closure1_slot17;
                var10 = var10.TIER_0;
                if (!(var11 !== var10)) {
                    _fun57432_ip = 1200;
                    continue _fun57432
                }
            case 1152:
                var10 = _closure1_slot17;
                var10 = var10.TIER_2;
                if (!(var11 === var10)) {
                    _fun57432_ip = 1232;
                    continue _fun57432
                }
            case 1166:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 39;
                var10 = var12[var10];
                var10 = var11.bind(var5)(var10);
                var10 = var10.PremiumFeatureCardOrder;
                var17 = var10.TIER_2_LEADING;
                _fun57432_ip = 1232;
                continue _fun57432;
            case 1200:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var10 = 39;
                var10 = var12[var10];
                var10 = var11.bind(var5)(var10);
                var10 = var10.PremiumFeatureCardOrder;
                var17 = var10.TIER_0_LEADING;
            case 1232:
                var12 = _closure1_slot19;
                var11 = _closure1_slot1;
                var22 = _closure1_slot2;
                var10 = 40;
                var10 = var22[var10];
                var11 = var11.bind(var5)(var10);
                var10 = {};
                var10.applicationId = var21;
                var10.userHasSubscription = var20;
                var21 = var20;
                if (!var20) {
                    _fun57432_ip = 1330;
                    continue _fun57432
                }
            case 1273:
                var25 = _closure1_slot19;
                var24 = _closure1_slot1;
                var27 = _closure1_slot2;
                var22 = 35;
                var22 = var27[var22];
                var24 = var24.bind(var5)(var22);
                var22 = {};
                var27 = var7.subscriptionHeader;
                var22.style = var27;
                var26 = function() {
                    _fun57446: for (var _fun57446_ip = 0;;) switch (_fun57446_ip) {
                        case 0:
                            var2 = _closure2_slot6;
                            var0 = var2.getState;
                            var0 = var0.bind(var2)();
                            var3 = var0.routes;
                            var2 = var3.find;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.name;
                                var0 = _closure1_slot16;
                                var0 = var0.GUILD_BOOSTING;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var3 = var2.bind(var3)(var0);
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var0 = 32;
                            var4 = var6[var0];
                            var0 = undefined;
                            var8 = var5.bind(var0)(var4);
                            var5 = var8.setSection;
                            var7 = _closure1_slot16;
                            var4 = var7.GUILD_BOOSTING;
                            var4 = var5.bind(var8)(var4);
                            var5 = _closure1_slot0;
                            var4 = 33;
                            var4 = var6[var4];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.trackUserSettingsPaneViewed;
                            var4 = {};
                            var7 = var7.GUILD_BOOSTING;
                            var4.destinationPane = var7;
                            var4 = var5.bind(var6)(var4);
                            var4 = null;
                            if (!(var4 == var3)) {
                                _fun57446_ip = 158;
                                continue _fun57446
                            }
                        case 132:
                            var5 = _closure2_slot6;
                            var4 = var5.push;
                            var2 = _closure1_slot16;
                            var2 = var2.GUILD_BOOSTING;
                            var2 = var4.bind(var5)(var2);
                            _fun57446_ip = 173;
                            continue _fun57446;
                        case 158:
                            var2 = _closure2_slot6;
                            var1 = var2.navigate;
                            var1 = var1.bind(var2)(var3);
                        case 173:
                            return var0;
                    }
                };
                var22.onClickManagePremiumGuild = var26;
                var22.subscription = var23;
                var21 = var25.bind(var5)(var24, var22);
            case 1330:
                var10.subscriptionDetails = var21;
                if (!var20) {
                    _fun57432_ip = 1385;
                    continue _fun57432
                }
            case 1338:
                var24 = _closure1_slot19;
                var22 = _closure1_slot1;
                var25 = _closure1_slot2;
                var21 = 36;
                var21 = var25[var21];
                var22 = var22.bind(var5)(var21);
                var21 = {};
                var25 = var7.billingInfo;
                var21.style = var25;
                var21.subscription = var23;
                var20 = var24.bind(var5)(var22, var21);
            case 1385:
                var10.billingInfo = var20;
                if (!var19) {
                    _fun57432_ip = 1445;
                    continue _fun57432
                }
            case 1393:
                var22 = _closure1_slot19;
                var21 = _closure1_slot1;
                var24 = _closure1_slot2;
                var20 = 37;
                var20 = var24[var20];
                var21 = var21.bind(var5)(var20);
                var20 = {};
                var24 = var7.accountCredit;
                var20.style = var24;
                var20.currentSubscription = var23;
                var20.entitlements = var16;
                var19 = var22.bind(var5)(var21, var20);
            case 1445:
                var10.accountCredit = var19;
                var10.onClose = var14;
                if (!(var18 == var17)) {
                    _fun57432_ip = 1491;
                    continue _fun57432
                }
            case 1459:
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var18 = 39;
                var18 = var20[var18];
                var18 = var19.bind(var5)(var18);
                var18 = var18.PremiumFeatureCardOrder;
                var17 = var18.TIER_2_LEADING;
            case 1491:
                var10.premiumFeatureCardOrder = var17;
                var10.entitlements = var16;
                var10.onPaymentSuccess = var15;
                var10.onPaymentDismiss = var13;
                var10 = var12.bind(var5)(var11, var10);
                _fun57432_ip = 1556;
                continue _fun57432;
            case 1519:
                var13 = _closure1_slot19;
                var12 = _closure1_slot1;
                var15 = _closure1_slot2;
                var11 = 38;
                var11 = var15[var11];
                var12 = var12.bind(var5)(var11);
                var11 = {};
                var11.onClose = var14;
                var10 = var13.bind(var5)(var12, var11);
            case 1556:
                var3.children = var10;
                var3 = var9.bind(var5)(var8, var3);
                var1.children = var3;
                var1 = var4.bind(var5)(var2, var1);
                _fun57432_ip = 1631;
                continue _fun57432;
            case 1578:
                var3 = _closure1_slot7;
                var2 = {};
                var7 = var7.container;
                var2.style = var7;
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 41;
                var6 = var8[var6];
                var7 = var7.bind(var5)(var6);
                var6 = {};
                var6 = var4.bind(var5)(var7, var6);
                var2.children = var6;
                var1 = var4.bind(var5)(var3, var2);
            case 1631:
                var0 = var1;
            case 1634:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 5885, 3075, 3076, 4616, 5246, 4575, 660, 1615, 33, 1297, 7008, 1568, 5688, 5541, 566, 4062, 795, 1469, 1413, 6829, 6827, 806, 7009, 4617, 6615, 6618, 7028, 7185, 6621, 7186, 7187, 3068, 7188, 7254, 7257, 7258, 7633, 11962, 6833, 478, 2]);