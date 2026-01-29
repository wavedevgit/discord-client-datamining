// modules/user_settings/native/premium_marketing/PremiumManagePlan.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: ManagePlanHeader, environment: var3
        var0 = _closure1_slot30;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var13 = _closure1_slot0;
        var14 = _closure1_slot2;
        var0 = 19;
        var0 = var14[var0];
        var1 = var13.bind(var3)(var0);
        var0 = var1.useNavigation;
        var0 = var0.bind(var1)();
        var _closure2_slot0 = var0;
        var2 = _closure1_slot27;
        var1 = _closure1_slot7;
        var0 = {};
        var4 = var8.headerContainer;
        var0.style = var4;
        var7 = _closure1_slot26;
        var4 = 20;
        var4 = var14[var4];
        var4 = var13.bind(var3)(var4);
        var6 = var4.PressableOpacity;
        var4 = {};
        var10 = var8.backButtonWrapper;
        var4.style = var10;
        var9 = function() { // Original name: onPress, environment: var9
            var1 = _closure2_slot0;
            var0 = var1.pop;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.onPress = var9;
        var11 = _closure1_slot26;
        var9 = 21;
        var9 = var14[var9];
        var9 = var13.bind(var3)(var9);
        var10 = var9.ArrowLargeLeftIcon;
        var9 = {};
        var12 = 'md';
        var9.size = var12;
        var9 = var11.bind(var3)(var10, var9);
        var4.children = var9;
        var6 = var7.bind(var3)(var6, var4);
        var4 = new Array(3);
        var4[0] = var6;
        var9 = _closure1_slot26;
        var6 = 22;
        var6 = var14[var6];
        var6 = var13.bind(var3)(var6);
        var7 = var6.Text;
        var6 = {
            'variant': 'redesign/heading-18/bold',
            'accessibilityRole': 'header'
        };
        var10 = 23;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10["1bX7Tx"];
        var10 = var11.bind(var12)(var10);
        var6.children = var10;
        var6 = var9.bind(var3)(var7, var6);
        var4[1] = var6;
        var7 = _closure1_slot26;
        var6 = _closure1_slot7;
        var5 = {};
        var8 = var8.backButtonWrapper;
        var5.style = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[2] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = function(arg0) { // Original name: SubscriptionAndBillingInfo, environment: var3
        _fun82301: for (var _fun82301_ip = 0;;) switch (_fun82301_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.subscription;
                var _closure2_slot0 = var18;
                var1 = var0.fractionalPremiumInfo;
                var11 = var0.hidePrice;
                var10 = var0.isPremiumGroup;
                var9 = var0.premiumGroupRole;
                var4 = undefined;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var _closure2_slot5 = var4;
                var _closure2_slot6 = var4;
                var _closure2_slot7 = var4;
                var0 = _closure1_slot31;
                var13 = var0.bind(var4)();
                var16 = _closure1_slot1;
                var0 = _closure1_slot2;
                var2 = 26;
                var2 = var0[var2];
                var2 = var16.bind(var4)(var2);
                var2 = var2.bind(var4)();
                var7 = var2.analyticsLocations;
                var _closure2_slot1 = var7;
                var5 = _closure1_slot0;
                var2 = 27;
                var3 = var0[var2];
                var8 = var5.bind(var4)(var3);
                var6 = var8.useSubscriptionInvoicePreview;
                var3 = {
                    'subscriptionId': null,
                    'renewal': true,
                    'applyEntitlements': true
                };
                var12 = var18.id;
                var3.subscriptionId = var12;
                var12 = true;
                var3.analyticsLocations = var7;
                var15 = 28;
                var15 = var0[var15];
                var15 = var16.bind(var4)(var15);
                var15 = var15.PREMIUM_SUBSCRIPTION_DETAILS;
                var3.analyticsLocation = var15;
                var6 = var6.bind(var8)(var3);
                var3 = _closure1_slot3;
                var15 = 1;
                var3 = var3.bind(var4)(var6, var15);
                var8 = 0;
                var25 = var3[var8];
                var2 = var0[var2];
                var6 = var5.bind(var4)(var2);
                var3 = var6.useGetSubscriptionInvoice;
                var2 = {};
                var16 = var18.id;
                var2.subscriptionId = var16;
                var17 = var18.status;
                var16 = _closure1_slot19;
                var16 = var16.PAST_DUE;
                var16 = var17 !== var16;
                var2.preventFetch = var16;
                var3 = var3.bind(var6)(var2);
                var2 = _closure1_slot3;
                var2 = var2.bind(var4)(var3, var15);
                var24 = var2[var8];
                var2 = 29;
                var3 = var0[var2];
                var17 = var5.bind(var4)(var3);
                var16 = var17.useStateFromStores;
                var3 = _closure1_slot16;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var21
                    _fun82302: for (var _fun82302_ip = 0;;) switch (_fun82302_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var1 = var1.isOnPlatformMatchingExternalPaymentGateway;
                            var2 = null;
                            if (var1) {
                                _fun82302_ip = 20;
                                continue _fun82302
                            }
                        case 18:
                            return var2;
                        case 20:
                            var1 = _closure2_slot0;
                            var1 = var1.paymentGatewayPlanId;
                            if (!(var2 != var1)) {
                                _fun82302_ip = 82;
                                continue _fun82302
                            }
                        case 34:
                            var1 = _closure2_slot0;
                            var2 = var1.paymentGatewayPlanId;
                            var1 = '';
                            if (!(var1 !== var2)) {
                                _fun82302_ip = 82;
                                continue _fun82302
                            }
                        case 52:
                            var2 = _closure1_slot16;
                            var1 = var2.getProduct;
                            var0 = _closure2_slot0;
                            var0 = var0.paymentGatewayPlanId;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        case 82:
                            var0 = global;
                            var2 = var0.Error;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = 'Subscription missing plan ID';
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            throw var0;
                    }
                };
                var16 = var16.bind(var17)(var6, var3);
                var3 = var0[var2];
                var19 = var5.bind(var4)(var3);
                var17 = var19.useStateFromStores;
                var3 = _closure1_slot13;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var21
                    var1 = _closure1_slot13;
                    var0 = var1.getPremiumTypeSubscription;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var3 = var17.bind(var19)(var6, var3);
                var0 = var0[var2];
                var17 = var5.bind(var4)(var0);
                var6 = var17.useStateFromStores;
                var0 = _closure1_slot11;
                var5 = new Array(1);
                var5[0] = var0;
                var0 = function() { // Environment: var21
                    var0 = _closure1_slot11;
                    var0 = var0.isSubscriptionFetching;
                    return var0;
                };
                var19 = var6.bind(var17)(var5, var0);
                var _closure2_slot2 = var19;
                var0 = null;
                var17 = var0 !== var3;
                if (!var17) {
                    _fun82301_ip = 416;
                    continue _fun82301
                }
            case 410:
                var17 = var3.hasActiveTrial;
            case 416:
                var3 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = 19;
                var6 = var5[var6];
                var20 = var3.bind(var4)(var6);
                var6 = var20.useNavigation;
                var6 = var6.bind(var20)();
                _closure2_slot3 = var6;
                var6 = 30;
                var6 = var5[var6];
                var20 = var3.bind(var4)(var6);
                var6 = var20.useThemeContext;
                var6 = var6.bind(var20)();
                var22 = var6.theme;
                var6 = 31;
                var6 = var5[var6];
                var20 = var3.bind(var4)(var6);
                var6 = var20.isThemeLight;
                var27 = var6.bind(var20)(var22);
                var20 = _closure1_slot4;
                var6 = var20.useState;
                var22 = var6.bind(var20)(var0);
                var20 = _closure1_slot3;
                var6 = 2;
                var6 = var20.bind(var4)(var22, var6);
                var8 = var6[var8];
                _closure2_slot4 = var8;
                var6 = var6[var15];
                _closure2_slot5 = var6;
                var2 = var5[var2];
                var15 = var3.bind(var4)(var2);
                var6 = var15.useStateFromStores;
                var2 = _closure1_slot15;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var21
                    var1 = _closure1_slot15;
                    var0 = var1.getState;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var6.bind(var15)(var3, var2);
                _closure2_slot6 = var2;
                var15 = _closure1_slot4;
                var6 = var15.useEffect;
                var3 = new Array(3);
                var3[0] = var8;
                var3[1] = var19;
                var3[2] = var2;
                var2 = function() { // Environment: var21
                    _fun82306: for (var _fun82306_ip = 0;;) switch (_fun82306_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = 'opening_mobile_web';
                            var1 = var1 === var2;
                            if (!var1) {
                                _fun82306_ip = 65;
                                continue _fun82306
                            }
                        case 20:
                            var3 = _closure2_slot6;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 32;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.AppStates;
                            var2 = var2.ACTIVE;
                            var1 = var3 !== var2;
                        case 65:
                            if (!var1) {
                                _fun82306_ip = 85;
                                continue _fun82306
                            }
                        case 68:
                            var3 = _closure2_slot5;
                            var2 = undefined;
                            var1 = 'in_mobile_web';
                            var1 = var3.bind(var2)(var1);
                        case 85:
                            var2 = _closure2_slot4;
                            var1 = 'in_mobile_web';
                            var1 = var1 === var2;
                            if (!var1) {
                                _fun82306_ip = 147;
                                continue _fun82306
                            }
                        case 102:
                            var3 = _closure2_slot6;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 32;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                            var2 = var2.AppStates;
                            var2 = var2.ACTIVE;
                            var1 = var3 === var2;
                        case 147:
                            if (!var1) {
                                _fun82306_ip = 200;
                                continue _fun82306
                            }
                        case 150:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 33;
                            var1 = var3[var1];
                            var3 = undefined;
                            var2 = var2.bind(var3)(var1);
                            var1 = var2.fetchSubscriptions;
                            var1 = var1.bind(var2)();
                            var2 = _closure2_slot5;
                            var1 = 'start_fetching_update';
                            var1 = var2.bind(var3)(var1);
                        case 200:
                            var2 = _closure2_slot4;
                            var1 = 'start_fetching_update';
                            var1 = var1 === var2;
                            if (!var1) {
                                _fun82306_ip = 221;
                                continue _fun82306
                            }
                        case 217:
                            var1 = _closure2_slot2;
                        case 221:
                            if (!var1) {
                                _fun82306_ip = 241;
                                continue _fun82306
                            }
                        case 224:
                            var3 = _closure2_slot5;
                            var2 = undefined;
                            var1 = 'fetching_update';
                            var1 = var3.bind(var2)(var1);
                        case 241:
                            var2 = _closure2_slot4;
                            var1 = 'fetching_update';
                            var1 = var1 !== var2;
                            if (var1) {
                                _fun82306_ip = 262;
                                continue _fun82306
                            }
                        case 258:
                            var1 = _closure2_slot2;
                        case 262:
                            if (var1) {
                                _fun82306_ip = 278;
                                continue _fun82306
                            }
                        case 265:
                            var2 = _closure2_slot5;
                            var1 = undefined;
                            var0 = null;
                            var0 = var2.bind(var1)(var0);
                        case 278:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var6.bind(var15)(var2, var3);
                var3 = _closure1_slot1;
                var2 = 34;
                var2 = var5[var2];
                var3 = var3.bind(var4)(var2);
                var2 = function() { // Environment: var21
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 35;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getNewAnalyticsLoadId;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                _closure2_slot7 = var2;
                var6 = _closure1_slot4;
                var5 = var6.useMemo;
                var3 = new Array(4);
                var3[0] = var18;
                var3[1] = var8;
                var3[2] = var7;
                var3[3] = var2;
                var2 = function() { // Environment: var21
                    _fun82308: for (var _fun82308_ip = 0;;) switch (_fun82308_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var0 = 'start_fetching_update';
                            if (!(var0 !== var1)) {
                                _fun82308_ip = 204;
                                continue _fun82308
                            }
                        case 20:
                            var1 = _closure2_slot4;
                            var0 = 'fetching_update';
                            if (!(var0 !== var1)) {
                                _fun82308_ip = 204;
                                continue _fun82308
                            }
                        case 37:
                            var1 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 36;
                            var0 = var3[var0];
                            var5 = undefined;
                            var4 = var1.bind(var5)(var0);
                            var3 = var4.getExternalManagementMessage;
                            var1 = _closure2_slot0;
                            var0 = {
                                'returnCtaAsComponent': true,
                                'loadId': null,
                                'shouldAllowExternalManagement': true
                            };
                            var6 = _closure2_slot7;
                            var0.loadId = var6;
                            var6 = function() { // Original name: onSuccessCallback, environment: var6
                                var2 = _closure1_slot28;
                                var1 = var2.log;
                                var0 = 'Successfully opened mobile web Nitro Management page';
                                var0 = var1.bind(var2)(var0);
                                var10 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var0 = 37;
                                var1 = var11[var0];
                                var0 = undefined;
                                var5 = var10.bind(var0)(var1);
                                var4 = var5.track;
                                var1 = _closure1_slot17;
                                var3 = var1.MOBILE_OPEN_STANDALONE_MANAGE_SUBSCRIPTION_PAGE;
                                var2 = {};
                                var7 = _closure2_slot7;
                                var2.load_id = var7;
                                var13 = _closure2_slot1;
                                var7 = new Array(1);
                                var12 = 0;
                                var14 = var7;
                                var9 = arraySpread(var14, var13, var12);
                                var8 = 28;
                                var8 = var11[var8];
                                var8 = var10.bind(var0)(var8);
                                var8 = var8.MOBILE_APP_MANAGE_PREMIUM_SUBSCRIPTION_CTA;
                                var7[var9] = var8;
                                var8 = 1;
                                var8 = var9 + var8;
                                var2.location_stack = var7;
                                var6 = _closure1_slot21;
                                var6 = var6.APPLE_PAYMENT_LINK;
                                var2.custom_checkout_flow = var6;
                                var2 = var4.bind(var5)(var3, var2);
                                var2 = _closure2_slot5;
                                var1 = 'opening_mobile_web';
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var0.onSuccessCallback = var6;
                            var6 = var3.bind(var4)(var1, var0);
                            var0 = null;
                            var1 = var0 != var6;
                            if (!var1) {
                                _fun82308_ip = 202;
                                continue _fun82308
                            }
                        case 125:
                            var3 = _closure1_slot4;
                            var1 = var3.isValidElement;
                            var3 = var1.bind(var3)(var6);
                            var1 = var6;
                            if (var3) {
                                _fun82308_ip = 199;
                                continue _fun82308
                            }
                        case 146:
                            var4 = _closure1_slot26;
                            var3 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var2 = 22;
                            var2 = var7[var2];
                            var2 = var3.bind(var5)(var2);
                            var3 = var2.Text;
                            var2 = {
                                'variant': 'text-sm/medium',
                                'color': 'text-default'
                            };
                            var2.children = var6;
                            var1 = var4.bind(var5)(var3, var2);
                        case 199:
                            var0 = var1;
                        case 202:
                            return var0;
                        case 204:
                            var3 = _closure1_slot26;
                            var2 = _closure1_slot9;
                            var1 = {};
                            var0 = 'small';
                            var1.size = var0;
                            var0 = undefined;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var15 = var5.bind(var6)(var2, var3);
                if (!(var0 != var25)) {
                    _fun82301_ip = 3689;
                    continue _fun82301
                }
            case 706:
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var22 = 38;
                var3 = var2[var22];
                var6 = var5.bind(var4)(var3);
                var3 = var6.getPlanIdFromInvoice;
                var7 = var3.bind(var6)(var18, var25);
                var3 = var2[var22];
                var6 = var5.bind(var4)(var3);
                var3 = var6.getStatusFromInvoice;
                var3 = var3.bind(var6)(var18, var25);
                var6 = _closure1_slot25;
                var8 = var6[var7];
                var6 = 39;
                var6 = var2[var6];
                var20 = var5.bind(var4)(var6);
                var19 = var0 != var8;
                var6 = 'missing subscription planInfo';
                var6 = var20.bind(var4)(var19, var6);
                var2 = var2[var22];
                var6 = var5.bind(var4)(var2);
                var5 = var6.getPlanDescription;
                var2 = {};
                var2.subscription = var18;
                var2.planId = var7;
                var19 = var0 != var16;
                var7 = null;
                if (!var19) {
                    _fun82301_ip = 882;
                    continue _fun82301
                }
            case 831:
                var20 = _closure1_slot0;
                var23 = _closure1_slot2;
                var19 = 40;
                var19 = var23[var19];
                var23 = var20.bind(var4)(var19);
                var20 = var23.formatRate;
                var19 = var16.priceString;
                var16 = var8.interval;
                var8 = var8.intervalCount;
                var7 = var20.bind(var23)(var19, var16, var8);
            case 882:
                var2.price = var7;
                var2.includePremiumGuilds = var12;
                var20 = var5.bind(var6)(var2);
                var2 = _closure1_slot19;
                var2 = var2.CANCELED;
                if (!(var3 !== var2)) {
                    _fun82301_ip = 2785;
                    continue _fun82301
                }
            case 914:
                var2 = _closure1_slot19;
                var2 = var2.PAUSE_PENDING;
                if (!(var3 !== var2)) {
                    _fun82301_ip = 2785;
                    continue _fun82301
                }
            case 931:
                var2 = _closure1_slot19;
                var2 = var2.PAST_DUE;
                if (!(var3 !== var2)) {
                    _fun82301_ip = 2785;
                    continue _fun82301
                }
            case 948:
                var2 = var18.renewalMutations;
                if (!(var0 == var2)) {
                    _fun82301_ip = 1962;
                    continue _fun82301
                }
            case 961:
                var5 = _closure1_slot27;
                var3 = _closure1_slot7;
                var2 = {};
                var6 = var13.container;
                var2.style = var6;
                var8 = _closure1_slot27;
                var7 = _closure1_slot7;
                var6 = {};
                var16 = var13.pillAndCardContainer;
                var6.style = var16;
                if (!var17) {
                    _fun82301_ip = 1071;
                    continue _fun82301
                }
            case 1003:
                var23 = _closure1_slot26;
                var19 = _closure1_slot7;
                var16 = {};
                var26 = var13.pillPosition;
                var16.style = var26;
                var29 = _closure1_slot26;
                var28 = _closure1_slot0;
                var30 = _closure1_slot2;
                var26 = 51;
                var26 = var30[var26];
                var26 = var28.bind(var4)(var26);
                var28 = var26.PremiumReferralTrialPill;
                var26 = {};
                var26 = var29.bind(var4)(var28, var26);
                var16.children = var26;
                var17 = var23.bind(var4)(var19, var16);
            case 1071:
                var16 = new Array(2);
                var16[0] = var17;
                var23 = _closure1_slot26;
                var19 = _closure1_slot1;
                var32 = _closure1_slot2;
                var17 = 50;
                var17 = var32[var17];
                var19 = var19.bind(var4)(var17);
                var17 = {};
                var26 = _closure1_slot24;
                var26 = var26.TIER_2;
                var17.premiumType = var26;
                var28 = var1.fractionalState;
                var26 = _closure1_slot22;
                var26 = var26.NONE;
                var26 = var28 !== var26;
                var17.forFractionalPremium = var26;
                var17.hideButton = var12;
                var17.hidePrice = var11;
                var17.isPremiumGroup = var10;
                var17.premiumGroupRole = var9;
                var17 = var23.bind(var4)(var19, var17);
                var16[1] = var17;
                var6.children = var16;
                var7 = var8.bind(var4)(var7, var6);
                var6 = new Array(2);
                var6[0] = var7;
                var16 = _closure1_slot27;
                var8 = _closure1_slot7;
                var7 = {};
                var17 = var13.extraInfoContainer;
                var7.style = var17;
                var23 = _closure1_slot26;
                var30 = _closure1_slot0;
                var29 = 22;
                var17 = var32[var29];
                var17 = var30.bind(var4)(var17);
                var19 = var17.Text;
                var17 = {
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var34 = 23;
                var26 = var32[var34];
                var26 = var30.bind(var4)(var26);
                var31 = var26.intl;
                var28 = var31.string;
                var26 = var32[var34];
                var26 = var30.bind(var4)(var26);
                var26 = var26.t;
                var26 = var26.YCrcPL;
                var26 = var28.bind(var31)(var26);
                var17.children = var26;
                var19 = var23.bind(var4)(var19, var17);
                var17 = new Array(4);
                var17[0] = var19;
                var26 = _closure1_slot27;
                var23 = _closure1_slot7;
                var19 = {};
                var28 = var13.extraInfoTextContainer;
                var19.style = var28;
                var31 = _closure1_slot26;
                var28 = 52;
                var28 = var32[var28];
                var28 = var30.bind(var4)(var28);
                var30 = var28.TextWithIOSLinkWorkaround;
                var28 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                if (!(var0 == var15)) {
                    _fun82301_ip = 1462;
                    continue _fun82301
                }
            case 1377:
                var33 = _closure1_slot0;
                var32 = _closure1_slot2;
                var35 = var32[var34];
                var35 = var33.bind(var4)(var35);
                var36 = var35.intl;
                var35 = var36.format;
                var32 = var32[var34];
                var32 = var33.bind(var4)(var32);
                var32 = var32.t;
                var33 = var32.fvk30i;
                var32 = {};
                var37 = function() { // Original name: onSwitchPlans, environment: var21
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 47;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.handleManageSubscription;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot3;
                    var0 = _closure2_slot1;
                    var0 = var3.bind(var4)(var2, var1, var0);
                    return var0;
                };
                var32.onSwitchPlans = var37;
                var37 = function() { // Original name: onCancel, environment: var21
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 47;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.onCancelClick;
                    var1 = _closure2_slot0;
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var32.onCancel = var37;
                var32 = var35.bind(var36)(var33, var32);
                _fun82301_ip = 1514;
                continue _fun82301;
            case 1462:
                var37 = _closure1_slot0;
                var33 = _closure1_slot2;
                var35 = var33[var34];
                var35 = var37.bind(var4)(var35);
                var36 = var35.intl;
                var35 = var36.string;
                var33 = var33[var34];
                var33 = var37.bind(var4)(var33);
                var33 = var33.t;
                var33 = var33["MTG+3O"];
                var32 = var35.bind(var36)(var33);
            case 1514:
                var28.children = var32;
                var30 = var31.bind(var4)(var30, var28);
                var28 = new Array(3);
                var28[0] = var30;
                var32 = _closure1_slot26;
                var31 = _closure1_slot0;
                var33 = _closure1_slot2;
                var30 = 48;
                var30 = var33[var30];
                var30 = var31.bind(var4)(var30);
                var31 = var30.GoogleManagementLink;
                var30 = {};
                var30.subscription = var18;
                var30 = var32.bind(var4)(var31, var30);
                var28[1] = var30;
                var30 = var0 != var15;
                if (!var30) {
                    _fun82301_ip = 1589;
                    continue _fun82301
                }
            case 1586:
                var30 = var15;
            case 1589:
                var28[2] = var30;
                var19.children = var28;
                var19 = var26.bind(var4)(var23, var19);
                var17[1] = var19;
                var26 = _closure1_slot26;
                var33 = _closure1_slot0;
                var32 = _closure1_slot2;
                var19 = var32[var29];
                var19 = var33.bind(var4)(var19);
                var23 = var19.Text;
                var19 = {
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var28 = var32[var34];
                var28 = var33.bind(var4)(var28);
                var31 = var28.intl;
                var30 = var31.string;
                var28 = var32[var34];
                var28 = var33.bind(var4)(var28);
                var28 = var28.t;
                var28 = var28.Sb6wI1;
                var28 = var30.bind(var31)(var28);
                var19.children = var28;
                var19 = var26.bind(var4)(var23, var19);
                var17[2] = var19;
                var26 = _closure1_slot27;
                var23 = _closure1_slot7;
                var19 = {};
                var30 = var13.extraInfoTextContainer;
                var28 = new Array(2);
                var28[0] = var30;
                var30 = {};
                var31 = 4;
                var30.gap = var31;
                var28[1] = var30;
                var19.style = var28;
                var31 = _closure1_slot26;
                var28 = var32[var29];
                var28 = var33.bind(var4)(var28);
                var30 = var28.Text;
                var28 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-default'
                };
                var35 = var32[var34];
                var35 = var33.bind(var4)(var35);
                var36 = var35.intl;
                var35 = var36.string;
                var34 = var32[var34];
                var34 = var33.bind(var4)(var34);
                var34 = var34.t;
                var34 = var34.KXQjfc;
                var34 = var35.bind(var36)(var34);
                var28.children = var34;
                var30 = var31.bind(var4)(var30, var28);
                var28 = new Array(2);
                var28[0] = var30;
                var31 = _closure1_slot26;
                var29 = var32[var29];
                var29 = var33.bind(var4)(var29);
                var30 = var29.Text;
                var29 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var32 = var32[var22];
                var34 = var33.bind(var4)(var32);
                var33 = var34.getBillingInformationString;
                var39 = false;
                var43 = var34;
                var42 = var18;
                var41 = var25;
                var40 = var24;
                var38 = var1;
                var32 = var43[var33](var42, var41, var40, var39, var38, var37);
                var29.children = var32;
                var29 = var31.bind(var4)(var30, var29);
                var28[1] = var29;
                var19.children = var28;
                var19 = var26.bind(var4)(var23, var19);
                var17[3] = var19;
                var7.children = var17;
                var7 = var16.bind(var4)(var8, var7);
                var6[1] = var7;
                var2.children = var6;
                var2 = var5.bind(var4)(var3, var2);
                return var2;
            case 1962:
                var2 = global;
                var5 = var2.Date;
                var42 = var18.currentPeriodEnd;
                var3 = var5.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var5
                    }
                });
                var43 = var3;
                var2 = new var43[var5](var42, var41);
                var5 = var2 instanceof Object ? var2 : var3;
                var2 = var18.isPurchasedExternally;
                var32 = var5;
                if (var2) {
                    _fun82301_ip = 2043;
                    continue _fun82301
                }
            case 2008:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var22];
                var3 = var3.bind(var4)(var2);
                var2 = var3.extendDateWithUnconsumedFractionalPremium;
                var1 = var1.unactivatedUnits;
                var32 = var2.bind(var3)(var5, var1);
            case 2043:
                var3 = _closure1_slot27;
                var2 = _closure1_slot7;
                var1 = {};
                var5 = var13.container;
                var1.style = var5;
                var7 = _closure1_slot27;
                var6 = _closure1_slot7;
                var5 = {};
                var8 = var13.mutationWarningContainer;
                var5.style = var8;
                var17 = _closure1_slot26;
                var28 = _closure1_slot0;
                var26 = _closure1_slot2;
                var8 = 49;
                var8 = var26[var8];
                var8 = var28.bind(var4)(var8);
                var16 = var8.AnnouncementsWarningIcon;
                var8 = {};
                var19 = 'md';
                var8.size = var19;
                var16 = var17.bind(var4)(var16, var8);
                var8 = new Array(2);
                var8[0] = var16;
                var23 = _closure1_slot26;
                var17 = 22;
                var16 = var26[var17];
                var16 = var28.bind(var4)(var16);
                var19 = var16.Text;
                var16 = {
                    'style': null,
                    'variant': 'heading-sm/medium',
                    'color': 'text-default'
                };
                var29 = var13.mutationText;
                var16.style = var29;
                var29 = 23;
                var30 = var26[var29];
                var30 = var28.bind(var4)(var30);
                var31 = var30.intl;
                var30 = var31.format;
                var26 = var26[var29];
                var26 = var28.bind(var4)(var26);
                var26 = var26.t;
                var28 = var26.ar1cPl;
                var26 = {};
                var33 = var18.hasExternalPlanChange;
                if (var33) {
                    _fun82301_ip = 2278;
                    continue _fun82301
                }
            case 2236:
                var34 = _closure1_slot1;
                var33 = _closure1_slot2;
                var33 = var33[var22];
                var35 = var34.bind(var4)(var33);
                var34 = var35.getDisplayName;
                var33 = var18.renewalMutations;
                var33 = var33.planId;
                var33 = var34.bind(var35)(var33);
                _fun82301_ip = 2312;
                continue _fun82301;
            case 2278:
                var35 = _closure1_slot0;
                var34 = _closure1_slot2;
                var34 = var34[var22];
                var36 = var35.bind(var4)(var34);
                var35 = var36.getExternalPlanDisplayName;
                var34 = var18.renewalMutations;
                var33 = var35.bind(var36)(var34);
            case 2312:
                var26.planName = var33;
                var26.date = var32;
                var26 = var30.bind(var31)(var28, var26);
                var16.children = var26;
                var16 = var23.bind(var4)(var19, var16);
                var8[1] = var16;
                var5.children = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(3);
                var5[0] = var6;
                var8 = _closure1_slot26;
                var7 = _closure1_slot1;
                var26 = _closure1_slot2;
                var6 = 50;
                var6 = var26[var6];
                var7 = var7.bind(var4)(var6);
                var6 = {};
                var16 = _closure1_slot24;
                var16 = var16.TIER_2;
                var6.premiumType = var16;
                var6.hideButton = var12;
                var6.hidePrice = var11;
                var6.isPremiumGroup = var10;
                var6.premiumGroupRole = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var8 = _closure1_slot27;
                var7 = _closure1_slot7;
                var6 = {};
                var9 = var13.extraInfoContainer;
                var6.style = var9;
                var11 = _closure1_slot26;
                var28 = _closure1_slot0;
                var9 = var26[var17];
                var9 = var28.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'eyebrow',
                    'color': 'text-default',
                    'accessibilityRole': 'header'
                };
                var12 = var26[var29];
                var12 = var28.bind(var4)(var12);
                var19 = var12.intl;
                var16 = var19.string;
                var12 = var26[var29];
                var12 = var28.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.YCrcPL;
                var12 = var16.bind(var19)(var12);
                var9.children = var12;
                var10 = var11.bind(var4)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var12 = _closure1_slot27;
                var11 = _closure1_slot7;
                var10 = {};
                var16 = var13.extraInfoTextContainer;
                var10.style = var16;
                var23 = _closure1_slot26;
                var16 = var26[var17];
                var16 = var28.bind(var4)(var16);
                var19 = var16.Text;
                var16 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var30 = var26[var29];
                var30 = var28.bind(var4)(var30);
                var31 = var30.intl;
                var30 = var31.string;
                var29 = var26[var29];
                var29 = var28.bind(var4)(var29);
                var29 = var29.t;
                var29 = var29["MTG+3O"];
                var29 = var30.bind(var31)(var29);
                var16.children = var29;
                var19 = var23.bind(var4)(var19, var16);
                var16 = new Array(3);
                var16[0] = var19;
                var23 = _closure1_slot26;
                var17 = var26[var17];
                var17 = var28.bind(var4)(var17);
                var19 = var17.Text;
                var17 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var26 = var26[var22];
                var28 = var28.bind(var4)(var26);
                var26 = var28.getBillingInformationString;
                var26 = var26.bind(var28)(var18, var25, var24);
                var17.children = var26;
                var17 = var23.bind(var4)(var19, var17);
                var16[1] = var17;
                var17 = var0 != var15;
                if (!var17) {
                    _fun82301_ip = 2741;
                    continue _fun82301
                }
            case 2738:
                var17 = var15;
            case 2741:
                var16[2] = var17;
                var10.children = var16;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[2] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 2785:
                var3 = _closure1_slot27;
                var2 = _closure1_slot7;
                var1 = {};
                var5 = var13.container;
                var1.style = var5;
                var7 = _closure1_slot27;
                var6 = _closure1_slot7;
                var5 = {};
                var8 = var13.errorHeader;
                var5.style = var8;
                var10 = _closure1_slot27;
                var9 = _closure1_slot6;
                var8 = {};
                var12 = _closure1_slot1;
                var17 = _closure1_slot2;
                if (var27) {
                    _fun82301_ip = 2854;
                    continue _fun82301
                }
            case 2845:
                var11 = 42;
                var11 = var17[var11];
                _fun82301_ip = 2861;
                continue _fun82301;
            case 2854:
                var16 = 41;
                var11 = var17[var16];
            case 2861:
                var11 = var12.bind(var4)(var11);
                var8.source = var11;
                var11 = var13.headerBackground;
                var8.style = var11;
                var16 = _closure1_slot27;
                var12 = _closure1_slot7;
                var11 = {};
                var17 = var13.logoContainer;
                var11.style = var17;
                var23 = _closure1_slot26;
                var19 = _closure1_slot5;
                var17 = {};
                var28 = _closure1_slot1;
                var29 = _closure1_slot2;
                var26 = 43;
                var26 = var29[var26];
                var26 = var28.bind(var4)(var26);
                var17.source = var26;
                var26 = var13.wumpusImg;
                var17.style = var26;
                var19 = var23.bind(var4)(var19, var17);
                var17 = new Array(2);
                var17[0] = var19;
                var26 = _closure1_slot26;
                var23 = _closure1_slot5;
                var19 = {};
                var30 = _closure1_slot2;
                if (var27) {
                    _fun82301_ip = 2984;
                    continue _fun82301
                }
            case 2975:
                var27 = 45;
                var27 = var30[var27];
                _fun82301_ip = 2991;
                continue _fun82301;
            case 2984:
                var29 = 44;
                var27 = var30[var29];
            case 2991:
                var27 = var28.bind(var4)(var27);
                var19.source = var27;
                var27 = var13.logoStyle;
                var19.style = var27;
                var19 = var26.bind(var4)(var23, var19);
                var17[1] = var19;
                var11.children = var17;
                var12 = var16.bind(var4)(var12, var11);
                var11 = new Array(2);
                var11[0] = var12;
                var19 = _closure1_slot26;
                var16 = _closure1_slot0;
                var12 = _closure1_slot2;
                var17 = 22;
                var12 = var12[var17];
                var12 = var16.bind(var4)(var12);
                var16 = var12.Text;
                var12 = {
                    'variant': 'heading-sm/medium',
                    'color': 'text-default'
                };
                var12.children = var20;
                var12 = var19.bind(var4)(var16, var12);
                var11[1] = var12;
                var8.children = var11;
                var9 = var10.bind(var4)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var9 = var18.isOnPlatformMatchingExternalPaymentGateway;
                if (!var9) {
                    _fun82301_ip = 3267;
                    continue _fun82301
                }
            case 3125:
                var12 = _closure1_slot26;
                var11 = _closure1_slot7;
                var10 = {};
                var16 = var13.errorHeaderPrimaryButton;
                var10.style = var16;
                var20 = _closure1_slot26;
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var16 = 46;
                var16 = var29[var16];
                var16 = var28.bind(var4)(var16);
                var19 = var16.Button;
                var16 = {
                    'size': 'sm',
                    'variant': 'secondary'
                };
                var23 = 23;
                var26 = var29[var23];
                var26 = var28.bind(var4)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var23 = var29[var23];
                var23 = var28.bind(var4)(var23);
                var23 = var23.t;
                var23 = var23.lTCb0c;
                var23 = var26.bind(var27)(var23);
                var16.text = var23;
                var21 = function() { // Original name: onPress, environment: var21
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 47;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.onResubscribeClick;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var16.onPress = var21;
                var16 = var20.bind(var4)(var19, var16);
                var10.children = var16;
                var9 = var12.bind(var4)(var11, var10);
            case 3267:
                var8[1] = var9;
                var5.children = var8;
                var6 = var7.bind(var4)(var6, var5);
                var5 = new Array(2);
                var5[0] = var6;
                var8 = _closure1_slot27;
                var7 = _closure1_slot7;
                var6 = {};
                var9 = var13.extraInfoContainer;
                var6.style = var9;
                var11 = _closure1_slot26;
                var16 = _closure1_slot0;
                var19 = _closure1_slot2;
                var9 = var19[var17];
                var9 = var16.bind(var4)(var9);
                var10 = var9.Text;
                var9 = {
                    'variant': 'eyebrow',
                    'color': 'text-default',
                    'accessibilityRole': 'header'
                };
                var23 = 23;
                var12 = var19[var23];
                var12 = var16.bind(var4)(var12);
                var21 = var12.intl;
                var20 = var21.string;
                var12 = var19[var23];
                var12 = var16.bind(var4)(var12);
                var12 = var12.t;
                var12 = var12.YCrcPL;
                var12 = var20.bind(var21)(var12);
                var9.children = var12;
                var10 = var11.bind(var4)(var10, var9);
                var9 = new Array(2);
                var9[0] = var10;
                var12 = _closure1_slot27;
                var11 = _closure1_slot7;
                var10 = {};
                var13 = var13.extraInfoTextContainer;
                var10.style = var13;
                var21 = _closure1_slot26;
                var13 = var19[var17];
                var13 = var16.bind(var4)(var13);
                var20 = var13.Text;
                var13 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var26 = var19[var23];
                var26 = var16.bind(var4)(var26);
                var27 = var26.intl;
                var26 = var27.string;
                var23 = var19[var23];
                var23 = var16.bind(var4)(var23);
                var23 = var23.t;
                var23 = var23["MTG+3O"];
                var23 = var26.bind(var27)(var23);
                var13.children = var23;
                var20 = var21.bind(var4)(var20, var13);
                var13 = new Array(4);
                var13[0] = var20;
                var21 = _closure1_slot26;
                var17 = var19[var17];
                var17 = var16.bind(var4)(var17);
                var20 = var17.Text;
                var17 = {
                    'variant': 'text-sm/medium',
                    'color': 'text-default'
                };
                var22 = var19[var22];
                var23 = var16.bind(var4)(var22);
                var22 = var23.getBillingInformationString;
                var22 = var22.bind(var23)(var18, var25, var24);
                var17.children = var22;
                var17 = var21.bind(var4)(var20, var17);
                var13[1] = var17;
                var17 = _closure1_slot26;
                var14 = 48;
                var14 = var19[var14];
                var14 = var16.bind(var4)(var14);
                var16 = var14.GoogleManagementLink;
                var14 = {};
                var14.subscription = var18;
                var14 = var17.bind(var4)(var16, var14);
                var13[2] = var14;
                var14 = var0 != var15;
                if (!var14) {
                    _fun82301_ip = 3645;
                    continue _fun82301
                }
            case 3642:
                var14 = var15;
            case 3645:
                var13[3] = var14;
                var10.children = var13;
                var10 = var12.bind(var4)(var11, var10);
                var9[1] = var10;
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[1] = var6;
                var1.children = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            case 3689:
                return var0;
        }
    };
    var _closure1_slot33 = var0;
    var0 = function(arg0) { // Original name: FractionalPremiumCredits, environment: var3
        _fun82313: for (var _fun82313_ip = 0;;) switch (_fun82313_ip) {
            case 0:
                var0 = arg0;
                var20 = var0.fractionalPremiumInfo;
                var5 = var0.showPremiumFeaturesCard;
                var30 = var0.durationText;
                var21 = var0.hasUnactivatedUnits;
                var27 = var0.unactivatedHoursString;
                var39 = var0.activationDate;
                var0 = _closure1_slot31;
                var3 = undefined;
                var28 = var0.bind(var3)();
                var2 = _closure1_slot27;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var28.container;
                var0.style = var4;
                if (!var5) {
                    _fun82313_ip = 134;
                    continue _fun82313
                }
            case 74:
                var7 = _closure1_slot26;
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var4 = 50;
                var4 = var8[var4];
                var6 = var6.bind(var3)(var4);
                var4 = {
                    'premiumType': null,
                    'forFractionalPremium': true,
                    'hideButton': true
                };
                var8 = _closure1_slot24;
                var8 = var8.TIER_2;
                var4.premiumType = var8;
                var5 = var7.bind(var3)(var6, var4);
            case 134:
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot27;
                var6 = _closure1_slot7;
                var5 = {};
                var8 = var28.extraInfoContainer;
                var5.style = var8;
                var10 = _closure1_slot26;
                var32 = _closure1_slot0;
                var25 = _closure1_slot2;
                var29 = 22;
                var8 = var25[var29];
                var8 = var32.bind(var3)(var8);
                var9 = var8.Text;
                var8 = {
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var40 = 23;
                var11 = var25[var40];
                var11 = var32.bind(var3)(var11);
                var13 = var11.intl;
                var12 = var13.string;
                var11 = var25[var40];
                var11 = var32.bind(var3)(var11);
                var11 = var11.t;
                var11 = var11.Obre8v;
                var11 = var12.bind(var13)(var11);
                var8.children = var11;
                var9 = var10.bind(var3)(var9, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var11 = _closure1_slot26;
                var9 = 52;
                var9 = var25[var9];
                var9 = var32.bind(var3)(var9);
                var10 = var9.TextWithIOSLinkWorkaround;
                var9 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-default'
                };
                var34 = 'text-md/semibold';
                var12 = var25[var40];
                var12 = var32.bind(var3)(var12);
                var15 = var12.intl;
                var14 = var15.format;
                var12 = var25[var40];
                var12 = var32.bind(var3)(var12);
                var12 = var12.t;
                var13 = var12.AYGoBn;
                var12 = {};
                var38 = _closure1_slot1;
                var16 = 53;
                var16 = var25[var16];
                var18 = var38.bind(var3)(var16);
                var17 = var18.getArticleURL;
                var16 = _closure1_slot18;
                var16 = var16.FRACTIONAL_PREMIUM_ABOUT;
                var16 = var17.bind(var18)(var16);
                var12.helpCenterLink = var16;
                var12 = var14.bind(var15)(var13, var12);
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var11 = _closure1_slot27;
                var10 = _closure1_slot7;
                var9 = {};
                var16 = 54;
                var12 = var25[var16];
                var12 = var32.bind(var3)(var12);
                var13 = var12.Card;
                var12 = {
                    'style': null,
                    'start': true,
                    'end': false,
                    'variant': 'primary'
                };
                var14 = var28.fpRowStart;
                var12.style = var14;
                var17 = _closure1_slot26;
                var15 = _closure1_slot7;
                var14 = {};
                var18 = var28.fpRowIcon;
                var14.style = var18;
                var22 = _closure1_slot26;
                var18 = 55;
                var18 = var25[var18];
                var19 = var38.bind(var3)(var18);
                var18 = {};
                var23 = {};
                var26 = 6;
                var23.padding = var26;
                var37 = 18;
                var26 = var25[var37];
                var26 = var38.bind(var3)(var26);
                var26 = var26.radii;
                var26 = var26.sm;
                var23.borderRadius = var26;
                var18.style = var23;
                var23 = {
                    'x': 0,
                    'y': 0
                };
                var18.start = var23;
                var23 = {
                    'x': 0,
                    'y': 1
                };
                var18.end = var23;
                var23 = var25[var37];
                var23 = var38.bind(var3)(var23);
                var23 = var23.unsafe_rawColors;
                var26 = var23.GUILD_BOOSTING_BLUE;
                var23 = new Array(2);
                var23[0] = var26;
                var26 = var25[var37];
                var26 = var38.bind(var3)(var26);
                var26 = var26.unsafe_rawColors;
                var26 = var26.GUILD_BOOSTING_PURPLE;
                var23[1] = var26;
                var18.colors = var23;
                var31 = _closure1_slot26;
                var26 = _closure1_slot7;
                var23 = {};
                var36 = 56;
                var33 = var25[var36];
                var35 = var38.bind(var3)(var33);
                var33 = {};
                var37 = var25[var37];
                var37 = var38.bind(var3)(var37);
                var37 = var37.unsafe_rawColors;
                var37 = var37.WHITE;
                var33.color = var37;
                var37 = 57;
                var37 = var25[var37];
                var37 = var38.bind(var3)(var37);
                var33.source = var37;
                var36 = var25[var36];
                var36 = var32.bind(var3)(var36);
                var36 = var36.IconSizes;
                var36 = var36.LARGE;
                var33.size = var36;
                var33 = var31.bind(var3)(var35, var33);
                var23.children = var33;
                var23 = var31.bind(var3)(var26, var23);
                var18.children = var23;
                var18 = var22.bind(var3)(var19, var18);
                var14.children = var18;
                var15 = var17.bind(var3)(var15, var14);
                var14 = new Array(2);
                var14[0] = var15;
                var18 = _closure1_slot27;
                var17 = _closure1_slot7;
                var15 = {};
                var19 = var28.fpRowContent;
                var15.style = var19;
                var23 = _closure1_slot26;
                var19 = var25[var29];
                var19 = var32.bind(var3)(var19);
                var22 = var19.Text;
                var19 = {};
                var26 = 'text-sm/semibold';
                var19.variant = var26;
                var26 = var28.fpUnitsTitle;
                var19.style = var26;
                var26 = var25[var40];
                var26 = var32.bind(var3)(var26);
                var31 = var26.intl;
                var26 = var31.string;
                var25 = var25[var40];
                var25 = var32.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.DFMPWS;
                var25 = var26.bind(var31)(var25);
                var19.children = var25;
                var22 = var23.bind(var3)(var22, var19);
                var19 = new Array(2);
                var19[0] = var22;
                if (!var21) {
                    _fun82313_ip = 911;
                    continue _fun82313
                }
            case 891:
                var23 = var20.fractionalState;
                var22 = _closure1_slot22;
                var22 = var22.NONE;
                if (!(var23 !== var22)) {
                    _fun82313_ip = 1015;
                    continue _fun82313
                }
            case 911:
                var25 = _closure1_slot26;
                var33 = _closure1_slot0;
                var26 = _closure1_slot2;
                var22 = var26[var29];
                var22 = var33.bind(var3)(var22);
                var23 = var22.Text;
                var22 = {};
                var31 = 'text-sm/medium';
                var22.variant = var31;
                var31 = var28.fpUnitsStatusText;
                var22.style = var31;
                var31 = var26[var40];
                var31 = var33.bind(var3)(var31);
                var32 = var31.intl;
                var31 = var32.string;
                var26 = var26[var40];
                var26 = var33.bind(var3)(var26);
                var26 = var26.t;
                var26 = var26["B66Z+f"];
                var26 = var31.bind(var32)(var26);
                var22.children = var26;
                var22 = var25.bind(var3)(var23, var22);
                _fun82313_ip = 1061;
                continue _fun82313;
            case 1015:
                var26 = _closure1_slot26;
                var25 = _closure1_slot0;
                var23 = _closure1_slot2;
                var23 = var23[var29];
                var23 = var25.bind(var3)(var23);
                var25 = var23.Text;
                var23 = {};
                var31 = 'text-sm/medium';
                var23.variant = var31;
                var23.children = var27;
                var22 = var26.bind(var3)(var25, var23);
            case 1061:
                var19[1] = var22;
                var15.children = var19;
                var15 = var18.bind(var3)(var17, var15);
                var14[1] = var15;
                var12.children = var14;
                var13 = var11.bind(var3)(var13, var12);
                var12 = new Array(3);
                var12[0] = var13;
                var15 = _closure1_slot26;
                var14 = _closure1_slot7;
                var13 = {};
                var17 = var28.dividerContainer;
                var13.style = var17;
                var19 = _closure1_slot26;
                var18 = _closure1_slot7;
                var17 = {};
                var22 = var28.divider;
                var17.style = var22;
                var17 = var19.bind(var3)(var18, var17);
                var13.children = var17;
                var13 = var15.bind(var3)(var14, var13);
                var12[1] = var13;
                var15 = _closure1_slot26;
                var14 = _closure1_slot0;
                var13 = _closure1_slot2;
                var13 = var13[var16];
                var13 = var14.bind(var3)(var13);
                var14 = var13.Card;
                var13 = {
                    'start': false,
                    'end': true,
                    'style': null,
                    'variant': 'secondary'
                };
                var16 = var28.fpRowEnd;
                var13.style = var16;
                var18 = _closure1_slot27;
                var17 = _closure1_slot7;
                var16 = {};
                var19 = var28.fpRowContent;
                var16.style = var19;
                if (!var21) {
                    _fun82313_ip = 1253;
                    continue _fun82313
                }
            case 1233:
                var22 = var20.fractionalState;
                var19 = _closure1_slot22;
                var19 = var19.NONE;
                if (!(var22 !== var19)) {
                    _fun82313_ip = 1356;
                    continue _fun82313
                }
            case 1253:
                var23 = _closure1_slot26;
                var32 = _closure1_slot0;
                var25 = _closure1_slot2;
                var19 = var25[var29];
                var19 = var32.bind(var3)(var19);
                var22 = var19.Text;
                var19 = {};
                var19.variant = var34;
                var26 = var28.fpTimeRemaining;
                var19.style = var26;
                var26 = var25[var40];
                var26 = var32.bind(var3)(var26);
                var31 = var26.intl;
                var26 = var31.string;
                var25 = var25[var40];
                var25 = var32.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25["3G0CTC"];
                var25 = var26.bind(var31)(var25);
                var19.children = var25;
                var22 = var23.bind(var3)(var22, var19);
                _fun82313_ip = 1589;
                continue _fun82313;
            case 1356:
                var25 = _closure1_slot27;
                var23 = _closure1_slot7;
                var19 = {};
                var32 = _closure1_slot26;
                var36 = _closure1_slot0;
                var33 = _closure1_slot2;
                var26 = var33[var29];
                var26 = var36.bind(var3)(var26);
                var31 = var26.Text;
                var26 = {};
                var26.variant = var34;
                var34 = var33[var40];
                var34 = var36.bind(var3)(var34);
                var35 = var34.intl;
                var34 = var35.string;
                var33 = var33[var40];
                var33 = var36.bind(var3)(var33);
                var33 = var33.t;
                var33 = var33["hT6i/0"];
                var33 = var34.bind(var35)(var33);
                var26.children = var33;
                var31 = var32.bind(var3)(var31, var26);
                var26 = new Array(2);
                var26[0] = var31;
                var31 = var3 !== var39;
                if (!var31) {
                    _fun82313_ip = 1575;
                    continue _fun82313
                }
            case 1469:
                var34 = _closure1_slot26;
                var36 = _closure1_slot0;
                var35 = _closure1_slot2;
                var32 = var35[var29];
                var32 = var36.bind(var3)(var32);
                var33 = var32.Text;
                var32 = {
                    'variant': 'text-xs/medium',
                    'color': 'text-subtle'
                };
                var37 = var35[var40];
                var37 = var36.bind(var3)(var37);
                var38 = var37.intl;
                var37 = var38.format;
                var35 = var35[var40];
                var35 = var36.bind(var3)(var35);
                var35 = var35.t;
                var36 = var35["0Vwb/l"];
                var35 = {};
                var35.activateDate = var39;
                var35 = var37.bind(var38)(var36, var35);
                var32.children = var35;
                var31 = var34.bind(var3)(var33, var32);
            case 1575:
                var26[1] = var31;
                var19.children = var26;
                var22 = var25.bind(var3)(var23, var19);
            case 1589:
                var19 = new Array(2);
                var19[0] = var22;
                if (!var21) {
                    _fun82313_ip = 1620;
                    continue _fun82313
                }
            case 1600:
                var21 = var20.fractionalState;
                var20 = _closure1_slot22;
                var20 = var20.NONE;
                if (!(var21 !== var20)) {
                    _fun82313_ip = 1708;
                    continue _fun82313
                }
            case 1620:
                var22 = _closure1_slot26;
                var21 = _closure1_slot7;
                var20 = {};
                var23 = var28.fpTimeRemainingPill;
                var20.style = var23;
                var26 = _closure1_slot26;
                var25 = _closure1_slot0;
                var23 = _closure1_slot2;
                var23 = var23[var29];
                var23 = var25.bind(var3)(var23);
                var25 = var23.Text;
                var23 = {};
                var31 = 'text-sm/medium';
                var23.variant = var31;
                var31 = var28.fpTimeRemainingText;
                var23.style = var31;
                var23.children = var30;
                var23 = var26.bind(var3)(var25, var23);
                var20.children = var23;
                var20 = var22.bind(var3)(var21, var20);
                _fun82313_ip = 1794;
                continue _fun82313;
            case 1708:
                var23 = _closure1_slot26;
                var22 = _closure1_slot7;
                var21 = {};
                var25 = var28.fpUnactivatedHoursPill;
                var21.style = var25;
                var26 = _closure1_slot26;
                var25 = _closure1_slot0;
                var24 = _closure1_slot2;
                var24 = var24[var29];
                var24 = var25.bind(var3)(var24);
                var25 = var24.Text;
                var24 = {};
                var29 = 'text-sm/medium';
                var24.variant = var29;
                var28 = var28.fpTimeRemainingText;
                var24.style = var28;
                var24.children = var27;
                var24 = var26.bind(var3)(var25, var24);
                var21.children = var24;
                var20 = var23.bind(var3)(var22, var21);
            case 1794:
                var19[1] = var20;
                var16.children = var19;
                var16 = var18.bind(var3)(var17, var16);
                var13.children = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[2] = var13;
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
    var _closure1_slot34 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var12.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var19 = 1;
    var4 = var6[var19];
    var1 = arg3;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.Image;
    var _closure1_slot5 = var4;
    var4 = var1.ImageBackground;
    var _closure1_slot6 = var4;
    var4 = var1.View;
    var _closure1_slot7 = var4;
    var4 = var1.ScrollView;
    var _closure1_slot8 = var4;
    var1 = var1.ActivityIndicator;
    var _closure1_slot9 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var16 = var1.TABLE_ROW_HEIGHT;
    var18 = 4;
    var1 = var6[var18];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var17 = 8;
    var1 = var6[var17];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var12.bind(var0)(var1);
    var _closure1_slot16 = var1;
    var1 = 11;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.AnalyticEvents;
    var _closure1_slot17 = var4;
    var4 = var1.HelpdeskArticles;
    var _closure1_slot18 = var4;
    var4 = var1.SubscriptionStatusTypes;
    var _closure1_slot19 = var4;
    var1 = var1.UserSettingsSections;
    var _closure1_slot20 = var1;
    var1 = 12;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var10 = var1.TABLE_DIVIDER_WIDTH;
    var13 = var1.TABLE_ROW_PADDING;
    var1 = 13;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.CustomCheckoutFlow;
    var _closure1_slot21 = var1;
    var1 = 14;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.FractionalPremiumStates;
    var _closure1_slot22 = var4;
    var4 = var1.PREMIUM_SUBSCRIPTION_APPLICATION;
    var _closure1_slot23 = var4;
    var4 = var1.PremiumTypes;
    var _closure1_slot24 = var4;
    var1 = var1.SubscriptionPlanInfo;
    var _closure1_slot25 = var1;
    var1 = 15;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot26 = var4;
    var1 = var1.jsxs;
    var _closure1_slot27 = var1;
    var20 = 16;
    var1 = var6[var20];
    var7 = var12.bind(var0)(var1);
    var1 = var7.prototype;
    var4 = Object.create(var1, {
        constructor: {
            value: var7
        }
    });
    var25 = 'PremiumManagePlan';
    var26 = var4;
    var1 = new var26[var7](var25, var24);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot28 = var1;
    var4 = 17;
    var1 = var6[var4];
    var9 = var5.bind(var0)(var1);
    var8 = var9.createStyles;
    var7 = {};
    var1 = {};
    var11 = 18;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOW;
    var1.backgroundColor = var14;
    var14 = '100%';
    var1.height = var14;
    var7.background = var1;
    var1 = {
        'display': 'flex',
        'paddingHorizontal': 12
    };
    var7.container = var1;
    var1 = 24;
    var14 = {
        'marginTop': 24,
        'display': 'flex',
        'gap': 12
    };
    var7.contentContainer = var14;
    var14 = {
        'position': 'absolute',
        'zIndex': 5,
        'top': 0,
        'left': 0,
        'right': 0
    };
    var7.topBlur = var14;
    var14 = {};
    var14.paddingHorizontal = var20;
    var7.accountCredit = var14;
    var14 = {};
    var15 = var6[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.sm;
    var14.borderRadius = var15;
    var15 = var6[var11];
    var15 = var12.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_SURFACE_HIGH;
    var14.backgroundColor = var15;
    var7.accountCreditList = var14;
    var14 = {};
    var14.paddingTop = var20;
    var7.featuresTable = var14;
    var14 = {
        'marginTop': 20,
        'width': '100%'
    };
    var7.subscriptionHeader = var14;
    var14 = {
        'marginTop': 20,
        'width': '100%'
    };
    var7.billingInfo = var14;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot29 = var7;
    var7 = var6[var4];
    var9 = var5.bind(var0)(var7);
    var8 = var9.createStyles;
    var7 = {};
    var15 = 'row';
    var14 = 'center';
    var21 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'paddingHorizontal': 16,
        'paddingVertical': 8,
        'justifyContent': 'space-between'
    };
    var7.headerContainer = var21;
    var21 = {
        'width': 24,
        'height': 24,
        'borderRadius': null,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var22 = var6[var11];
    var22 = var12.bind(var0)(var22);
    var22 = var22.radii;
    var22 = var22.lg;
    var21.borderRadius = var22;
    var7.backButtonWrapper = var21;
    var7 = var8.bind(var9)(var7);
    var _closure1_slot30 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {
        'display': 'flex',
        'flexDirection': 'column',
        'gap': 12
    };
    var4.container = var9;
    var9 = {};
    var21 = var6[var11];
    var21 = var12.bind(var0)(var21);
    var21 = var21.colors;
    var21 = var21.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var21;
    var21 = var6[var11];
    var21 = var12.bind(var0)(var21);
    var21 = var21.radii;
    var21 = var21.lg;
    var9.borderRadius = var21;
    var21 = 'hidden';
    var9.overflow = var21;
    var4.errorHeader = var9;
    var9 = {};
    var9.padding = var20;
    var4.headerBackground = var9;
    var9 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'marginBottom': 12
    };
    var4.logoContainer = var9;
    var9 = {
        'marginRight': 10,
        'height': 36,
        'width': 51
    };
    var4.wumpusImg = var9;
    var9 = {
        'height': 32,
        'width': 78
    };
    var4.logoStyle = var9;
    var9 = {
        'marginBottom': 16,
        'marginHorizontal': 16
    };
    var4.errorHeaderPrimaryButton = var9;
    var9 = {
        'paddingTop': 16,
        'paddingHorizontal': 16,
        'display': 'flex',
        'gap': 8
    };
    var4.extraInfoContainer = var9;
    var9 = {
        'padding': 16,
        'borderRadius': null,
        'backgroundColor': null,
        'display': 'flex',
        'gap': 18
    };
    var20 = var6[var11];
    var20 = var12.bind(var0)(var20);
    var20 = var20.radii;
    var20 = var20.sm;
    var9.borderRadius = var20;
    var20 = var6[var11];
    var20 = var12.bind(var0)(var20);
    var20 = var20.colors;
    var20 = var20.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var20;
    var4.extraInfoTextContainer = var9;
    var9 = {
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'flex-start',
        'gap': 8,
        'padding': 16
    };
    var20 = var6[var11];
    var20 = var12.bind(var0)(var20);
    var20 = var20.radii;
    var20 = var20.lg;
    var9.borderRadius = var20;
    var20 = var6[var11];
    var20 = var12.bind(var0)(var20);
    var20 = var20.colors;
    var20 = var20.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var20;
    var4.mutationWarningContainer = var9;
    var9 = {};
    var9.flex = var19;
    var4.mutationText = var9;
    var9 = {};
    var19 = var6[var11];
    var19 = var12.bind(var0)(var19);
    var19 = var19.colors;
    var19 = var19.TEXT_BRAND;
    var9.color = var19;
    var4.fpTimeRemaining = var9;
    var9 = {};
    var19 = var6[var11];
    var19 = var12.bind(var0)(var19);
    var19 = var19.radii;
    var19 = var19.lg;
    var9.borderRadius = var19;
    var19 = var6[var11];
    var19 = var12.bind(var0)(var19);
    var19 = var19.colors;
    var19 = var19.CONTROL_PRIMARY_BACKGROUND_ACTIVE;
    var9.backgroundColor = var19;
    var9.paddingVertical = var18;
    var9.paddingHorizontal = var17;
    var4.fpTimeRemainingPill = var9;
    var9 = {};
    var19 = var6[var11];
    var19 = var12.bind(var0)(var19);
    var19 = var19.radii;
    var19 = var19.lg;
    var9.borderRadius = var19;
    var19 = var6[var11];
    var19 = var12.bind(var0)(var19);
    var19 = var19.colors;
    var19 = var19.BACKGROUND_MOD_STRONG;
    var9.backgroundColor = var19;
    var9.paddingVertical = var18;
    var9.paddingHorizontal = var17;
    var4.fpUnactivatedHoursPill = var9;
    var9 = {};
    var17 = var6[var11];
    var17 = var12.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.WHITE;
    var9.color = var17;
    var4.fpTimeRemainingText = var9;
    var9 = {};
    var17 = var6[var11];
    var17 = var12.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.MOBILE_TEXT_HEADING_PRIMARY;
    var9.color = var17;
    var4.fpUnitsTitle = var9;
    var9 = {
        'color': null,
        'marginStart': 18,
        'flexShrink': 1
    };
    var17 = var6[var11];
    var17 = var12.bind(var0)(var17);
    var17 = var17.colors;
    var17 = var17.TEXT_BRAND;
    var9.color = var17;
    var4.fpUnitsStatusText = var9;
    var9 = {};
    var9.padding = var13;
    var9.minHeight = var16;
    var9.flexDirection = var15;
    var9.alignItems = var14;
    var14 = var6[var11];
    var14 = var12.bind(var0)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_SURFACE_HIGH;
    var9.backgroundColor = var14;
    var4.fpRowStart = var9;
    var9 = {};
    var9.marginEnd = var13;
    var4.fpRowIcon = var9;
    var9 = {
        'flexShrink': 1,
        'flexGrow': 1,
        'display': 'flex',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between'
    };
    var4.fpRowContent = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var0)(var11);
    var11 = var11.colors;
    var11 = var11.BACKGROUND_BASE_LOWEST;
    var9.backgroundColor = var11;
    var4.fpRowEnd = var9;
    var9 = {};
    var11 = var6[var1];
    var11 = var5.bind(var0)(var11);
    var11 = var11.CARD_PRIMARY_BG;
    var9.backgroundColor = var11;
    var9.height = var10;
    var4.dividerContainer = var9;
    var9 = {};
    var9.height = var10;
    var10 = 25;
    var10 = var6[var10];
    var10 = var5.bind(var0)(var10);
    var10 = var10.DIVIDER_BACKGROUND;
    var9.backgroundColor = var10;
    var4.divider = var9;
    var9 = {};
    var10 = 'relative';
    var9.position = var10;
    var4.pillAndCardContainer = var9;
    var9 = {
        'position': 'absolute',
        'top': 4294967278,
        'left': 5,
        'zIndex': 99
    };
    var4.pillPosition = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot31 = var4;
    var4 = 70;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/premium_marketing/PremiumManagePlan.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() { // Original name: PremiumManagePlan, environment: var3
        _fun82314: for (var _fun82314_ip = 0;;) switch (_fun82314_ip) {
            case 0:
                var0 = _closure1_slot29;
                var3 = undefined;
                var21 = var0.bind(var3)();
                var10 = _closure1_slot1;
                var7 = _closure1_slot2;
                var0 = 58;
                var0 = var7[var0];
                var0 = var10.bind(var3)(var0);
                var0 = var0.bind(var3)();
                var25 = var0.top;
                var12 = var0.bottom;
                var6 = _closure1_slot0;
                var0 = 19;
                var0 = var7[var0];
                var1 = var6.bind(var3)(var0);
                var0 = var1.useNavigation;
                var0 = var0.bind(var1)();
                var _closure2_slot0 = var0;
                var4 = _closure1_slot4;
                var2 = var4.useLayoutEffect;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var30
                    var2 = _closure2_slot0;
                    var1 = var2.setOptions;
                    var0 = {};
                    var3 = false;
                    var0.headerShown = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var2.bind(var4)(var0, var1);
                var5 = 29;
                var0 = var7[var5];
                var4 = var6.bind(var3)(var0);
                var2 = var4.useStateFromStores;
                var0 = _closure1_slot12;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var30
                    var1 = _closure1_slot12;
                    var0 = var1.isLoadedForPremiumSKUs;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var4 = var2.bind(var4)(var1, var0);
                var0 = var7[var5];
                var8 = var6.bind(var3)(var0);
                var2 = var8.useStateFromStoresArray;
                var0 = _closure1_slot13;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var30
                    var2 = _closure1_slot13;
                    var0 = var2.getPremiumTypeSubscription;
                    var2 = var0.bind(var2)();
                    var0 = new Array(2);
                    var0[0] = var2;
                    var2 = _closure1_slot13;
                    var1 = var2.hasFetchedSubscriptions;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    return var0;
                };
                var2 = var2.bind(var8)(var1, var0);
                var1 = _closure1_slot3;
                var0 = 2;
                var1 = var1.bind(var3)(var2, var0);
                var8 = 0;
                var24 = var1[var8];
                var0 = 1;
                var2 = var1[var0];
                var0 = var7[var5];
                var11 = var6.bind(var3)(var0);
                var9 = var11.useStateFromStores;
                var0 = _closure1_slot10;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var30
                    var1 = _closure1_slot10;
                    var0 = var1.getCurrentUser;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var9.bind(var11)(var1, var0);
                var0 = 59;
                var0 = var7[var0];
                var9 = var10.bind(var3)(var0);
                var0 = {};
                var11 = true;
                var0.forceFetch = var11;
                var20 = var9.bind(var3)(var0);
                var0 = 60;
                var0 = var7[var0];
                var9 = var6.bind(var3)(var0);
                var0 = var9.useIsInReverseTrial;
                var15 = var0.bind(var9)();
                var0 = 61;
                var9 = var7[var0];
                var10 = var10.bind(var3)(var9);
                var9 = var20.endsAt;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.CountDownMessageTypes;
                var0 = var0.SHORT_TIME;
                var26 = var10.bind(var3)(var9, var0);
                var0 = 38;
                var0 = var7[var0];
                var6 = var6.bind(var3)(var0);
                var0 = var6.getUnactivatedFractionalPremiumDurationString;
                var28 = var0.bind(var6)(var20);
                var0 = var28.length;
                var29 = var0 > var8;
                var0 = null;
                var27 = undefined;
                if (!(var0 !== var24)) {
                    _fun82314_ip = 407;
                    continue _fun82314
                }
            case 390:
                var6 = var24.isPurchasedExternally;
                var27 = undefined;
                if (var6) {
                    _fun82314_ip = 407;
                    continue _fun82314
                }
            case 401:
                var27 = var24.currentPeriodEnd;
            case 407:
                var7 = var20.fractionalState;
                var6 = _closure1_slot22;
                var6 = var6.NONE;
                var14 = var7 !== var6;
                if (!var14) {
                    _fun82314_ip = 457;
                    continue _fun82314
                }
            case 430:
                var6 = var15;
                if (!var15) {
                    _fun82314_ip = 454;
                    continue _fun82314
                }
            case 436:
                var7 = var20.unactivatedUnits;
                var7 = var7.length;
                var7 = var7 > var8;
                var6 = !var7;
            case 454:
                var14 = !var6;
            case 457:
                if (var14) {
                    _fun82314_ip = 463;
                    continue _fun82314
                }
            case 460:
                var14 = var29;
            case 463:
                var6 = _closure1_slot0;
                var10 = _closure1_slot2;
                var7 = 30;
                var7 = var10[var7];
                var9 = var6.bind(var3)(var7);
                var7 = var9.useThemeContext;
                var7 = var7.bind(var9)();
                var7 = var7.theme;
                var13 = _closure1_slot4;
                var11 = var13.useRef;
                var9 = false;
                var9 = var11.bind(var13)(var9);
                var _closure2_slot1 = var9;
                var16 = _closure1_slot4;
                var13 = var16.useCallback;
                var11 = function(arg0) { // Environment: var30
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 62;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.trackIfScrolledToBottom;
                    var0 = {};
                    var3 = arg0;
                    var3 = var3.nativeEvent;
                    var0.nativeEvent = var3;
                    var3 = 'your_nitro_plan';
                    var0.trackedType = var3;
                    var3 = _closure2_slot1;
                    var0.hasTrackedScrolledToBottom = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var9 = new Array(0);
                var9 = var13.bind(var16)(var11, var9);
                var5 = var10[var5];
                var16 = var6.bind(var3)(var5);
                var13 = var16.useStateFromStores;
                var5 = _closure1_slot14;
                var11 = new Array(1);
                var11[0] = var5;
                var5 = 63;
                var5 = var10[var5];
                var5 = var6.bind(var3)(var5);
                var34 = var5.areSetsEqual;
                var36 = function() { // Environment: var30
                    _fun82320: for (var _fun82320_ip = 0;;) switch (_fun82320_ip) {
                        case 0:
                            var2 = _closure1_slot14;
                            var1 = var2.getForApplication;
                            var0 = _closure1_slot23;
                            var0 = var1.bind(var2)(var0);
                            var1 = null;
                            if (!(var1 == var0)) {
                                _fun82320_ip = 56;
                                continue _fun82320
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
                var35 = new Array(0);
                var38 = var16;
                var37 = var11;
                var23 = var38[var13](var37, var36, var35, var34, var33);
                var22 = var0 != var24;
                if (!var22) {
                    _fun82314_ip = 626;
                    continue _fun82314
                }
            case 617:
                var5 = var24.isBoostOnly;
                var22 = !var5;
            case 626:
                if (!var22) {
                    _fun82314_ip = 632;
                    continue _fun82314
                }
            case 629:
                var22 = var4;
            case 632:
                if (!var22) {
                    _fun82314_ip = 638;
                    continue _fun82314
                }
            case 635:
                var22 = var2;
            case 638:
                var13 = var0 != var24;
                if (!var13) {
                    _fun82314_ip = 651;
                    continue _fun82314
                }
            case 645:
                var13 = var24.isBoostOnly;
            case 651:
                if (!var13) {
                    _fun82314_ip = 657;
                    continue _fun82314
                }
            case 654:
                var13 = var4;
            case 657:
                if (!var13) {
                    _fun82314_ip = 663;
                    continue _fun82314
                }
            case 660:
                var13 = var2;
            case 663:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 64;
                var2 = var5[var2];
                var2 = var4.bind(var3)(var2);
                var5 = var2.OstrichExperiment;
                var4 = var5.useExperiment;
                var2 = {};
                var6 = 'PremiumManagePlan';
                var2.location = var6;
                var2 = var4.bind(var5)(var2);
                var17 = var2.enabled;
                if (!var17) {
                    _fun82314_ip = 739;
                    continue _fun82314
                }
            case 720:
                var4 = var0 == var24;
                var2 = undefined;
                if (var4) {
                    _fun82314_ip = 735;
                    continue _fun82314
                }
            case 729:
                var2 = var24.paymentGateway;
            case 735:
                var17 = var0 == var2;
            case 739:
                var2 = var0 == var1;
                var16 = undefined;
                if (var2) {
                    _fun82314_ip = 754;
                    continue _fun82314
                }
            case 748:
                var16 = var1.premiumGroupRole;
            case 754:
                var0 = var0 == var1;
                var18 = undefined;
                if (var0) {
                    _fun82314_ip = 773;
                    continue _fun82314
                }
            case 763:
                var0 = var1.isPremiumWithPremiumGroup;
                var18 = var0.bind(var1)();
            case 773:
                var2 = _closure1_slot27;
                var1 = _closure1_slot7;
                var0 = {};
                var4 = var21.background;
                var0.style = var4;
                var6 = _closure1_slot26;
                var5 = _closure1_slot1;
                var10 = _closure1_slot2;
                var4 = 65;
                var4 = var10[var4];
                var5 = var5.bind(var3)(var4);
                var4 = {};
                var10 = 0.2;
                var4.blurAmount = var10;
                var11 = var21.topBlur;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var11.height = var25;
                var10[1] = var11;
                var4.style = var10;
                var4.blurTheme = var7;
                var5 = var6.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot27;
                var6 = _closure1_slot8;
                var5 = {};
                var11 = var21.container;
                var10 = new Array(2);
                var10[0] = var11;
                var11 = {};
                var11.paddingTop = var25;
                var11.paddingBottom = var12;
                var10[1] = var11;
                var5.contentContainerStyle = var10;
                var5.onScrollEndDrag = var9;
                var5.onMomentumScrollEnd = var9;
                var5.scrollEventThrottle = var8;
                var10 = _closure1_slot26;
                var9 = _closure1_slot32;
                var8 = {};
                var9 = var10.bind(var3)(var9, var8);
                var8 = new Array(2);
                var8[0] = var9;
                var11 = _closure1_slot27;
                var10 = _closure1_slot7;
                var9 = {};
                var12 = var21.contentContainer;
                var9.style = var12;
                var25 = var22;
                if (!var25) {
                    _fun82314_ip = 1031;
                    continue _fun82314
                }
            case 990:
                var32 = _closure1_slot26;
                var31 = _closure1_slot33;
                var12 = {};
                var12.subscription = var24;
                var12.fractionalPremiumInfo = var20;
                var12.hidePrice = var17;
                var12.isPremiumGroup = var18;
                var12.premiumGroupRole = var16;
                var25 = var32.bind(var3)(var31, var12);
            case 1031:
                var12 = new Array(7);
                var12[0] = var25;
                if (!var15) {
                    _fun82314_ip = 1107;
                    continue _fun82314
                }
            case 1042:
                var32 = _closure1_slot26;
                var31 = _closure1_slot1;
                var33 = _closure1_slot2;
                var25 = 50;
                var25 = var33[var25];
                var31 = var31.bind(var3)(var25);
                var25 = {
                    'premiumType': null,
                    'forFractionalPremium': true,
                    'hideButton': true
                };
                var33 = _closure1_slot24;
                var33 = var33.TIER_2;
                var25.premiumType = var33;
                var25.hidePrice = var17;
                var15 = var32.bind(var3)(var31, var25);
            case 1107:
                var12[1] = var15;
                var15 = var18;
                if (!var15) {
                    _fun82314_ip = 1120;
                    continue _fun82314
                }
            case 1117:
                var15 = !var22;
            case 1120:
                if (!var15) {
                    _fun82314_ip = 1188;
                    continue _fun82314
                }
            case 1123:
                var31 = _closure1_slot26;
                var25 = _closure1_slot1;
                var32 = _closure1_slot2;
                var22 = 50;
                var22 = var32[var22];
                var25 = var25.bind(var3)(var22);
                var22 = {
                    'premiumType': null,
                    'hideButton': true,
                    'hidePrice': true,
                    'isPremiumGroup': true
                };
                var32 = _closure1_slot24;
                var32 = var32.TIER_2;
                var22.premiumType = var32;
                var22.premiumGroupRole = var16;
                var15 = var31.bind(var3)(var25, var22);
            case 1188:
                var12[2] = var15;
                if (!var14) {
                    _fun82314_ip = 1261;
                    continue _fun82314
                }
            case 1195:
                var25 = _closure1_slot26;
                var22 = _closure1_slot34;
                var15 = {};
                var15.fractionalPremiumInfo = var20;
                var32 = var20.fractionalState;
                var31 = _closure1_slot22;
                var31 = var31.FP_ONLY;
                var31 = var32 === var31;
                var15.showPremiumFeaturesCard = var31;
                var15.hasUnactivatedUnits = var29;
                var15.unactivatedHoursString = var28;
                var15.activationDate = var27;
                var15.durationText = var26;
                var14 = var25.bind(var3)(var22, var15);
            case 1261:
                var12[3] = var14;
                if (!var13) {
                    _fun82314_ip = 1401;
                    continue _fun82314
                }
            case 1271:
                var22 = _closure1_slot27;
                var15 = _closure1_slot7;
                var14 = {};
                var28 = _closure1_slot26;
                var27 = _closure1_slot1;
                var29 = _closure1_slot2;
                var25 = 47;
                var25 = var29[var25];
                var26 = var27.bind(var3)(var25);
                var25 = {};
                var31 = var21.subscriptionHeader;
                var25.style = var31;
                var30 = function() { // Original name: onClickManagePremiumGuild, environment: var30
                    _fun82321: for (var _fun82321_ip = 0;;) switch (_fun82321_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = var2.getState;
                            var0 = var0.bind(var2)();
                            var3 = var0.routes;
                            var2 = var3.find;
                            var0 = function(arg0) { // Environment: var0
                                var0 = arg0;
                                var1 = var0.name;
                                var0 = _closure1_slot20;
                                var0 = var0.GUILD_BOOSTING;
                                var0 = var1 === var0;
                                return var0;
                            };
                            var3 = var2.bind(var3)(var0);
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var0 = 66;
                            var4 = var6[var0];
                            var0 = undefined;
                            var8 = var5.bind(var0)(var4);
                            var5 = var8.setSection;
                            var7 = _closure1_slot20;
                            var4 = var7.GUILD_BOOSTING;
                            var4 = var5.bind(var8)(var4);
                            var5 = _closure1_slot0;
                            var4 = 67;
                            var4 = var6[var4];
                            var6 = var5.bind(var0)(var4);
                            var5 = var6.trackUserSettingsPaneViewed;
                            var4 = {};
                            var7 = var7.GUILD_BOOSTING;
                            var4.destinationPane = var7;
                            var4 = var5.bind(var6)(var4);
                            var4 = null;
                            if (!(var4 == var3)) {
                                _fun82321_ip = 160;
                                continue _fun82321
                            }
                        case 134:
                            var5 = _closure2_slot0;
                            var4 = var5.push;
                            var2 = _closure1_slot20;
                            var2 = var2.GUILD_BOOSTING;
                            var2 = var4.bind(var5)(var2);
                            _fun82321_ip = 175;
                            continue _fun82321;
                        case 160:
                            var2 = _closure2_slot0;
                            var1 = var2.navigate;
                            var1 = var1.bind(var2)(var3);
                        case 175:
                            return var0;
                    }
                };
                var25.onClickManagePremiumGuild = var30;
                var25.subscription = var24;
                var26 = var28.bind(var3)(var26, var25);
                var25 = new Array(2);
                var25[0] = var26;
                var28 = _closure1_slot26;
                var26 = 48;
                var26 = var29[var26];
                var27 = var27.bind(var3)(var26);
                var26 = {};
                var29 = var21.billingInfo;
                var26.style = var29;
                var26.subscription = var24;
                var26 = var28.bind(var3)(var27, var26);
                var25[1] = var26;
                var14.children = var25;
                var13 = var22.bind(var3)(var15, var14);
            case 1401:
                var12[4] = var13;
                var22 = _closure1_slot26;
                var14 = _closure1_slot1;
                var25 = _closure1_slot2;
                var13 = 68;
                var13 = var25[var13];
                var15 = var14.bind(var3)(var13);
                var13 = {};
                var26 = var21.accountCredit;
                var13.style = var26;
                var26 = var21.accountCreditList;
                var13.creditListContainerStyle = var26;
                var13.currentSubscription = var24;
                var13.entitlements = var23;
                var13 = var22.bind(var3)(var15, var13);
                var12[5] = var13;
                var15 = _closure1_slot26;
                var13 = 69;
                var13 = var25[var13];
                var14 = var14.bind(var3)(var13);
                var13 = {};
                var21 = var21.featuresTable;
                var13.style = var21;
                var21 = 'nitro_home';
                var13.variant = var21;
                var24 = _closure1_slot0;
                var21 = 23;
                var22 = var25[var21];
                var22 = var24.bind(var3)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var21 = var25[var21];
                var21 = var24.bind(var3)(var21);
                var21 = var21.t;
                var21 = var21.QXx2gs;
                var21 = var22.bind(var23)(var21);
                var13.titleOverride = var21;
                var20 = var20.fractionalState;
                var19 = _closure1_slot22;
                var19 = var19.FP_ONLY;
                var19 = var20 === var19;
                var13.isFractionalOnly = var19;
                var13.isPremiumGroup = var18;
                var13.hidePrice = var17;
                var13.premiumGroupRole = var16;
                var13 = var15.bind(var3)(var14, var13);
                var12[6] = var13;
                var9.children = var12;
                var9 = var11.bind(var3)(var10, var9);
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.BACK_BUTTON_SIZE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 4826, 1613, 3070, 3075, 3076, 4609, 5239, 4568, 660, 4826, 3280, 1615, 33, 3, 1297, 671, 1469, 4858, 4662, 3895, 1234, 4827, 4828, 5684, 7248, 5536, 566, 3118, 3165, 670, 3402, 4884, 7062, 7253, 795, 3068, 44, 4563, 10512, 10513, 7197, 7207, 6604, 4037, 7186, 7252, 4811, 7632, 7257, 5289, 1675, 4856, 4051, 4039, 5708, 1568, 4608, 6618, 9858, 7278, 1413, 10514, 4025, 7184, 7185, 7255, 7227, 2]);