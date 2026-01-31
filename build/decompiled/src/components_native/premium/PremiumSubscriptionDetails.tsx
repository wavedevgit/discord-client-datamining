// components_native/premium/PremiumSubscriptionDetails.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var18 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var18;
    var _closure1_slot2 = var9;
    var0 = function(arg0, arg1) { // Original name: getHeaderBackground, environment: var6
        var1 = _closure1_slot19;
        var0 = arg0;
        var1 = var1[var0];
        var0 = arg1;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function(arg0, arg1) { // Original name: getPremiumImage, environment: var6
        var1 = _closure1_slot20;
        var0 = arg0;
        var1 = var1[var0];
        var0 = arg1;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function(arg0, arg1) { // Original name: getPremiumImageStyle, environment: var6
        var1 = _closure1_slot21;
        var0 = arg0;
        var1 = var1[var0];
        var0 = arg1;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function(arg0, arg1) { // Original name: getLogo, environment: var6
        var1 = _closure1_slot22;
        var0 = arg0;
        var1 = var1[var0];
        var0 = arg1;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function(arg0) { // Original name: getLogoStyle, environment: var6
        var1 = _closure1_slot23;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function(arg0) { // Original name: getPlanDescriptionStyle, environment: var6
        var1 = _closure1_slot24;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var _closure1_slot30 = var0;
    var0 = function() { // Original name: handleCancelSubscription, environment: var6
        var0 = undefined;
        var3 = _closure1_slot32;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function() { // Original name: _handleCancelSubscription, environment: var6
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun59037: for (var _fun59037_ip = 0;;) switch (_fun59037_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59037_ip = 253;
                            continue _fun59037
                        }
                    case 13:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var7 = 44;
                        var4 = var10[var7];
                        var2 = undefined;
                        var6 = var9.bind(var2)(var4);
                        var5 = var6.trackPremiumSubscriptionCancellationFlowStep;
                        var4 = {};
                        var4.subscription = var3;
                        var8 = arg1;
                        var4.analyticsLocations = var8;
                        var8 = arg2;
                        var4.fromStep = var8;
                        var8 = var10[var7];
                        var8 = var9.bind(var2)(var8);
                        var8 = var8.STEP_ANALYTICS_NAMES;
                        var7 = var10[var7];
                        var7 = var9.bind(var2)(var7);
                        var7 = var7.CancellationFlowSteps;
                        var7 = var7.MOBILE_SUBSCRIPTION_MANAGE;
                        var7 = var8[var7];
                        var4.toStep = var7;
                        var4 = var5.bind(var6)(var4);
                        var4 = null;
                        if (!(var4 != var3)) {
                            _fun59037_ip = 132;
                            continue _fun59037
                        }
                    case 123:
                        var5 = var3.isPurchasedViaApple;
                        if (var5) {
                            _fun59037_ip = 207;
                            continue _fun59037
                        }
                    case 132:
                        var4 = var4 != var3;
                        if (!var4) {
                            _fun59037_ip = 145;
                            continue _fun59037
                        }
                    case 139:
                        var4 = var3.isPurchasedViaGoogle;
                    case 145:
                        if (!var4) {
                            _fun59037_ip = 247;
                            continue _fun59037
                        }
                    case 148:
                        var5 = _closure1_slot7;
                        var4 = var5.openURL;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var6 = 11;
                        var6 = var8[var6];
                        var8 = var7.bind(var2)(var6);
                        var7 = var8.getExternalSubscriptionMethodUrl;
                        var6 = var3.paymentGateway;
                        var3 = 'SUBSCRIPTION_MANAGEMENT';
                        var3 = var7.bind(var8)(var6, var3);
                        var3 = var4.bind(var5)(var3);
                        _fun59037_ip = 247;
                        continue _fun59037;
                    case 207:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 45;
                        var1 = var4[var1];
                        var3 = var3.bind(var2)(var1);
                        var1 = var3.manageSubscription;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 241);
                    case 239:
                        return var1;
                    case 241:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun59037_ip = 250;
                            continue _fun59037
                        }
                    case 247:
                        return var2;
                    case 250:
                        return var1;
                    case 253:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot32 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot32 = var0;
    var5 = function(arg0, arg1) { // Original name: onCancelClick, environment: var6
        _fun59038: for (var _fun59038_ip = 0;;) switch (_fun59038_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var3;
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 44;
                var0 = var7[var0];
                var2 = undefined;
                var5 = var5.bind(var2)(var0);
                var0 = var5.trackPremiumSubscriptionCancellationStarted;
                var0 = var0.bind(var5)(var4, var3);
                var5 = _closure1_slot1;
                var0 = 11;
                var0 = var7[var0];
                var5 = var5.bind(var2)(var0);
                var0 = var5.isBoostOnlySubscription;
                var0 = var0.bind(var5)(var4);
                if (var0) {
                    _fun59038_ip = 159;
                    continue _fun59038
                }
            case 83:
                var5 = _closure1_slot1;
                var9 = _closure1_slot2;
                var0 = 46;
                var0 = var9[var0];
                var5 = var5.bind(var2)(var0);
                var0 = {};
                var0.subscription = var4;
                var8 = _closure1_slot0;
                var7 = 47;
                var7 = var9[var7];
                var7 = var8.bind(var2)(var7);
                var7 = var7.WhatYouLoseMode;
                var7 = var7.CANCEL;
                var0.mode = var7;
                var6 = function(arg0) { // Original name: onContinue, environment: var6
                    var4 = _closure1_slot31;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
                };
                var0.onContinue = var6;
                var0 = var5.bind(var2)(var0);
                _fun59038_ip = 169;
                continue _fun59038;
            case 159:
                var1 = _closure1_slot31;
                var0 = var1.bind(var2)(var4, var3);
            case 169:
                return var0;
        }
    };
    var _closure1_slot33 = var5;
    var4 = function(arg0, arg1, arg2) { // Original name: handleManageSubscription, environment: var6
        _fun59040: for (var _fun59040_ip = 0;;) switch (_fun59040_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.status;
                var1 = _closure1_slot13;
                var1 = var1.ACCOUNT_HOLD;
                if (!(var2 !== var1)) {
                    _fun59040_ip = 114;
                    continue _fun59040
                }
            case 25:
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 48;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var4.bind(var1)(var2);
                var2 = var4.launchPremiumPlanSelect;
                var1 = {};
                var5 = arg1;
                var1.navigation = var5;
                var5 = {};
                var6 = _closure1_slot11;
                var6 = var6.USER_SETTINGS;
                var5.page = var6;
                var6 = _closure1_slot12;
                var6 = var6.SETTINGS_PREMIUM;
                var5.section = var6;
                var1.analyticsLocation = var5;
                var5 = arg2;
                var1.analyticsLocations = var5;
                var1 = var2.bind(var4)(var1);
                _fun59040_ip = 173;
                continue _fun59040;
            case 114:
                var2 = _closure1_slot7;
                var1 = var2.openURL;
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var3 = 11;
                var4 = var4[var3];
                var3 = undefined;
                var5 = var5.bind(var3)(var4);
                var4 = var5.getExternalSubscriptionMethodUrl;
                var3 = var0.paymentGateway;
                var0 = 'PAYMENT_SOURCE_MANAGEMENT';
                var0 = var4.bind(var5)(var3, var0);
                var0 = var1.bind(var2)(var0);
            case 173:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot34 = var4;
    var3 = function() { // Original name: onResubscribeClick, environment: var6
        var0 = undefined;
        var3 = _closure1_slot36;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot35 = var3;
    var0 = function() { // Original name: _onResubscribeClick, environment: var6
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun59044: for (var _fun59044_ip = 0;;) switch (_fun59044_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59044_ip = 148;
                            continue _fun59044
                        }
                    case 13:
                        var2 = var1.isPurchasedViaApple;
                        if (var2) {
                            _fun59044_ip = 95;
                            continue _fun59044
                        }
                    case 22:
                        var2 = var1.isPurchasedViaGoogle;
                        if (!var2) {
                            _fun59044_ip = 140;
                            continue _fun59044
                        }
                    case 31:
                        var3 = _closure1_slot7;
                        var2 = var3.openURL;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var4 = 11;
                        var5 = var5[var4];
                        var4 = undefined;
                        var6 = var6.bind(var4)(var5);
                        var5 = var6.getExternalSubscriptionMethodUrl;
                        var4 = var1.paymentGateway;
                        var1 = 'SUBSCRIPTION_MANAGEMENT';
                        var1 = var5.bind(var6)(var4, var1);
                        var1 = var2.bind(var3)(var1);
                        _fun59044_ip = 140;
                        continue _fun59044;
                    case 95:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 45;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        var1 = var2.manageSubscription;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 134);
                    case 132:
                        return var1;
                    case 134:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59044_ip = 145;
                            continue _fun59044
                        }
                    case 140:
                        var2 = undefined;
                        return var2;
                    case 145:
                        return var1;
                    case 148:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot36 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot36 = var0;
    var1 = function(arg0) { // Original name: PremiumSubscriptionHeader, environment: var6
        _fun59045: for (var _fun59045_ip = 0;;) switch (_fun59045_ip) {
            case 0:
                var0 = arg0;
                var19 = var0.subscription;
                var _closure2_slot0 = var19;
                var7 = var0.renewalInvoicePreview;
                var24 = var0.onClickManagePremiumGuild;
                var5 = var0.style;
                var0 = _closure1_slot17;
                var3 = undefined;
                var17 = var0.bind(var3)();
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = 49;
                var2 = var0[var2];
                var4 = var1.bind(var3)(var2);
                var2 = var4.useNavigation;
                var2 = var2.bind(var4)();
                var _closure2_slot1 = var2;
                var2 = 50;
                var4 = var0[var2];
                var9 = var1.bind(var3)(var4);
                var8 = var9.useStateFromStores;
                var4 = _closure1_slot9;
                var6 = new Array(1);
                var6[0] = var4;
                var4 = function() { // Environment: var16
                    var2 = _closure1_slot9;
                    var0 = var2.getCurrentUser;
                    var0 = var0.bind(var2)();
                    var2 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 51;
                    var1 = var3[var1];
                    var4 = undefined;
                    var3 = var2.bind(var4)(var1);
                    var1 = null;
                    var2 = var1 != var0;
                    var1 = 'PremiumSubscriptionHeader: currentUser cannot be undefined';
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
                };
                var8 = var8.bind(var9)(var6, var4);
                var2 = var0[var2];
                var9 = var1.bind(var3)(var2);
                var6 = var9.useStateFromStores;
                var2 = _closure1_slot10;
                var4 = new Array(1);
                var4[0] = var2;
                var2 = function() { // Environment: var16
                    _fun59047: for (var _fun59047_ip = 0;;) switch (_fun59047_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            var1 = var1.isOnPlatformMatchingExternalPaymentGateway;
                            var2 = null;
                            if (var1) {
                                _fun59047_ip = 20;
                                continue _fun59047
                            }
                        case 18:
                            return var2;
                        case 20:
                            var1 = _closure2_slot0;
                            var1 = var1.paymentGatewayPlanId;
                            if (!(var2 != var1)) {
                                _fun59047_ip = 82;
                                continue _fun59047
                            }
                        case 34:
                            var1 = _closure2_slot0;
                            var2 = var1.paymentGatewayPlanId;
                            var1 = '';
                            if (!(var1 !== var2)) {
                                _fun59047_ip = 82;
                                continue _fun59047
                            }
                        case 52:
                            var2 = _closure1_slot10;
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
                var9 = var6.bind(var9)(var4, var2);
                var4 = _closure1_slot1;
                var20 = 11;
                var2 = var0[var20];
                var6 = var4.bind(var3)(var2);
                var2 = var6.getPlanIdFromInvoice;
                var11 = var2.bind(var6)(var19, var7);
                var2 = var0[var20];
                var6 = var1.bind(var3)(var2);
                var2 = var6.getPremiumBranding;
                var26 = var2.bind(var6)(var19);
                var2 = 52;
                var2 = var0[var2];
                var2 = var4.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var2 = var2.analyticsLocations;
                var _closure2_slot2 = var2;
                var0 = var0[var20];
                var0 = var1.bind(var3)(var0);
                var0 = var0.Branding;
                var0 = var0.PREMIUM_GUILD;
                if (!(var26 !== var0)) {
                    _fun59045_ip = 429;
                    continue _fun59045
                }
            case 258:
                var2 = _closure1_slot1;
                var0 = _closure1_slot2;
                var1 = var0[var20];
                var4 = var2.bind(var3)(var1);
                var1 = var4.getStatusFromInvoice;
                var1 = var1.bind(var4)(var19, var7);
                var4 = _closure1_slot14;
                var10 = var4[var11];
                var4 = 51;
                var4 = var0[var4];
                var14 = var2.bind(var3)(var4);
                var6 = null;
                var12 = var6 != var10;
                var4 = 'missing subscription planInfo';
                var4 = var14.bind(var3)(var12, var4);
                var0 = var0[var20];
                var4 = var2.bind(var3)(var0);
                var2 = var4.getPlanDescription;
                var0 = {};
                var0.subscription = var19;
                var0.planId = var11;
                var11 = var6 != var9;
                if (!var11) {
                    _fun59045_ip = 410;
                    continue _fun59045
                }
            case 359:
                var12 = _closure1_slot0;
                var14 = _closure1_slot2;
                var11 = 53;
                var11 = var14[var11];
                var15 = var12.bind(var3)(var11);
                var14 = var15.formatRate;
                var12 = var9.priceString;
                var11 = var10.interval;
                var10 = var10.intervalCount;
                var6 = var14.bind(var15)(var12, var11, var10);
            case 410:
                var0.price = var6;
                var6 = true;
                var0.includePremiumGuilds = var6;
                var12 = var2.bind(var4)(var0);
                _fun59045_ip = 518;
                continue _fun59045;
            case 429:
                var4 = _closure1_slot0;
                var0 = _closure1_slot2;
                var2 = var0[var20];
                var6 = var4.bind(var3)(var2);
                var2 = var6.getCoercedPremiumGuildSubscriptionStatus;
                var2 = var2.bind(var6)(var19);
                var0 = var0[var20];
                var6 = var4.bind(var3)(var0);
                var4 = var6.getPremiumGuildHeaderDescription;
                var0 = {};
                var0.subscription = var19;
                var0.user = var8;
                var8 = null;
                var10 = var8 == var9;
                var8 = undefined;
                if (var10) {
                    _fun59045_ip = 500;
                    continue _fun59045
                }
            case 494:
                var8 = var9.priceString;
            case 500:
                var0.price = var8;
                var0.renewalInvoicePreview = var7;
                var12 = var4.bind(var6)(var0);
                var1 = var2;
            case 518:
                var0 = _closure1_slot13;
                var0 = var0.CANCELED;
                var11 = var1 === var0;
                var0 = _closure1_slot13;
                var0 = var0.ACTIVE;
                if (!(var1 !== var0)) {
                    _fun59045_ip = 569;
                    continue _fun59045
                }
            case 546:
                var0 = _closure1_slot18;
                if (var11) {
                    _fun59045_ip = 561;
                    continue _fun59045
                }
            case 553:
                var21 = var0.ERROR;
                _fun59045_ip = 567;
                continue _fun59045;
            case 561:
                var21 = var0.RESUB;
            case 567:
                _fun59045_ip = 579;
                continue _fun59045;
            case 569:
                var0 = _closure1_slot18;
                var21 = var0.ACTIVE;
            case 579:
                var0 = var11;
                if (var0) {
                    _fun59045_ip = 594;
                    continue _fun59045
                }
            case 585:
                var1 = var19.isOnPlatformMatchingExternalPaymentGateway;
                var0 = !var1;
            case 594:
                var18 = !var0;
                if (var0) {
                    _fun59045_ip = 651;
                    continue _fun59045
                }
            case 600:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 54;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.isAndroid;
                var0 = var0.bind(var1)();
                var0 = !var0;
                if (var0) {
                    _fun59045_ip = 648;
                    continue _fun59045
                }
            case 636:
                var2 = var19.renewalMutations;
                var1 = null;
                var0 = var1 == var2;
            case 648:
                var18 = var0;
            case 651:
                var14 = !var11;
                if (var11) {
                    _fun59045_ip = 663;
                    continue _fun59045
                }
            case 657:
                var14 = var19.isOnPlatformMatchingExternalPaymentGateway;
            case 663:
                var2 = _closure1_slot15;
                var1 = _closure1_slot8;
                var0 = {};
                var6 = var17.container;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var5;
                var0.style = var4;
                var6 = _closure1_slot16;
                var5 = _closure1_slot6;
                var4 = {};
                var7 = _closure1_slot25;
                var7 = var7.bind(var3)(var26, var21);
                var4.source = var7;
                var7 = var17.header;
                var4.style = var7;
                var9 = _closure1_slot16;
                var8 = _closure1_slot8;
                var7 = {};
                var10 = var17.logoContainer;
                var7.style = var10;
                var22 = _closure1_slot15;
                var15 = _closure1_slot5;
                var10 = {};
                var23 = _closure1_slot26;
                var23 = var23.bind(var3)(var26, var21);
                var10.source = var23;
                var23 = _closure1_slot27;
                var25 = var23.bind(var3)(var26, var21);
                var23 = new Array(2);
                var23[0] = var25;
                var25 = var17.wumpusImg;
                var23[1] = var25;
                var10.style = var23;
                var15 = var22.bind(var3)(var15, var10);
                var10 = new Array(2);
                var10[0] = var15;
                var23 = _closure1_slot15;
                var22 = _closure1_slot5;
                var15 = {};
                var25 = _closure1_slot28;
                var25 = var25.bind(var3)(var26, var21);
                var15.source = var25;
                var25 = _closure1_slot29;
                var25 = var25.bind(var3)(var26);
                var15.style = var25;
                var15 = var23.bind(var3)(var22, var15);
                var10[1] = var15;
                var7.children = var10;
                var8 = var9.bind(var3)(var8, var7);
                var7 = new Array(3);
                var7[0] = var8;
                var10 = _closure1_slot15;
                var9 = _closure1_slot0;
                var15 = _closure1_slot2;
                var8 = 55;
                var8 = var15[var8];
                var8 = var9.bind(var3)(var8);
                var9 = var8.LegacyText;
                var8 = {};
                var15 = _closure1_slot30;
                var15 = var15.bind(var3)(var21);
                var8.style = var15;
                var8.children = var12;
                var8 = var10.bind(var3)(var9, var8);
                var7[1] = var8;
                var10 = _closure1_slot16;
                var9 = _closure1_slot8;
                var8 = {};
                var12 = var17.buttonContainer;
                var8.style = var12;
                var12 = null;
                var15 = null;
                if (!var11) {
                    _fun59045_ip = 1139;
                    continue _fun59045
                }
            case 971:
                var11 = var12 != var19;
                var15 = null;
                if (!var11) {
                    _fun59045_ip = 1139;
                    continue _fun59045
                }
            case 983:
                var11 = var19.isOnPlatformMatchingExternalPaymentGateway;
                var15 = null;
                if (!var11) {
                    _fun59045_ip = 1139;
                    continue _fun59045
                }
            case 997:
                var22 = _closure1_slot15;
                var25 = _closure1_slot1;
                var28 = _closure1_slot2;
                var23 = 56;
                var11 = var28[var23];
                var21 = var25.bind(var3)(var11);
                var11 = {};
                var26 = var17.button;
                var11.style = var26;
                var26 = function() { // Original name: onPress, environment: var16
                    var2 = _closure1_slot35;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    return var0;
                };
                var11.onPress = var26;
                var23 = var28[var23];
                var23 = var25.bind(var3)(var23);
                var23 = var23.Colors;
                var23 = var23.PRIMARY;
                var11.color = var23;
                var27 = _closure1_slot0;
                var23 = 57;
                var25 = var28[var23];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var23 = var28[var23];
                var23 = var27.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.lTCb0c;
                var23 = var25.bind(var26)(var23);
                var11.text = var23;
                var23 = var17.buttonText;
                var11.textStyle = var23;
                var15 = var22.bind(var3)(var21, var11);
            case 1139:
                var11 = new Array(4);
                var11[0] = var15;
                var15 = null;
                if (!var18) {
                    _fun59045_ip = 1414;
                    continue _fun59045
                }
            case 1155:
                var22 = _closure1_slot15;
                var25 = _closure1_slot1;
                var23 = _closure1_slot2;
                var26 = 56;
                var18 = var23[var26];
                var21 = var25.bind(var3)(var18);
                var18 = {};
                var27 = function() { // Original name: onPress, environment: var16
                    var4 = _closure1_slot34;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var4.bind(var0)(var3, var2, var1);
                    return var0;
                };
                var18.onPress = var27;
                var23 = var23[var26];
                var23 = var25.bind(var3)(var23);
                var23 = var23.Colors;
                var23 = var23.PRIMARY;
                var18.color = var23;
                var25 = var19.status;
                var23 = _closure1_slot13;
                var23 = var23.ACCOUNT_HOLD;
                if (!(var25 !== var23)) {
                    _fun59045_ip = 1293;
                    continue _fun59045
                }
            case 1234:
                var28 = _closure1_slot0;
                var29 = _closure1_slot2;
                var23 = 57;
                var25 = var29[var23];
                var25 = var28.bind(var3)(var25);
                var27 = var25.intl;
                var25 = var27.string;
                var23 = var29[var23];
                var23 = var28.bind(var3)(var23);
                var23 = var23.t;
                var23 = var23.gmVtgF;
                var23 = var25.bind(var27)(var23);
                _fun59045_ip = 1350;
                continue _fun59045;
            case 1293:
                var29 = _closure1_slot0;
                var30 = _closure1_slot2;
                var25 = 57;
                var27 = var30[var25];
                var27 = var29.bind(var3)(var27);
                var28 = var27.intl;
                var27 = var28.string;
                var25 = var30[var25];
                var25 = var29.bind(var3)(var25);
                var25 = var25.t;
                var25 = var25.SgX7Ra;
                var23 = var27.bind(var28)(var25);
            case 1350:
                var18.text = var23;
                var23 = var17.button;
                var18.style = var23;
                var25 = _closure1_slot1;
                var23 = _closure1_slot2;
                var23 = var23[var26];
                var23 = var25.bind(var3)(var23);
                var23 = var23.Sizes;
                var23 = var23.XSMALL;
                var18.size = var23;
                var23 = var17.buttonText;
                var18.textStyle = var23;
                var15 = var22.bind(var3)(var21, var18);
            case 1414:
                var11[1] = var15;
                var18 = _closure1_slot0;
                var15 = _closure1_slot2;
                var15 = var15[var20];
                var18 = var18.bind(var3)(var15);
                var15 = var18.subscriptionHasPremiumGuildPlan;
                var18 = var15.bind(var18)(var19);
                var15 = null;
                if (!var18) {
                    _fun59045_ip = 1630;
                    continue _fun59045
                }
            case 1454:
                var18 = var12 != var24;
                var15 = null;
                if (!var18) {
                    _fun59045_ip = 1630;
                    continue _fun59045
                }
            case 1466:
                var20 = _closure1_slot15;
                var22 = _closure1_slot1;
                var23 = _closure1_slot2;
                var21 = 56;
                var18 = var23[var21];
                var19 = var22.bind(var3)(var18);
                var18 = {};
                var18.onPress = var24;
                var24 = var23[var21];
                var24 = var22.bind(var3)(var24);
                var24 = var24.Colors;
                var24 = var24.PRIMARY;
                var18.color = var24;
                var27 = _closure1_slot0;
                var24 = 57;
                var25 = var23[var24];
                var25 = var27.bind(var3)(var25);
                var26 = var25.intl;
                var25 = var26.string;
                var24 = var23[var24];
                var24 = var27.bind(var3)(var24);
                var24 = var24.t;
                var24 = var24.gIVkjm;
                var24 = var25.bind(var26)(var24);
                var18.text = var24;
                var24 = var17.button;
                var18.style = var24;
                var21 = var23[var21];
                var21 = var22.bind(var3)(var21);
                var21 = var21.Sizes;
                var21 = var21.XSMALL;
                var18.size = var21;
                var21 = var17.buttonText;
                var18.textStyle = var21;
                var15 = var20.bind(var3)(var19, var18);
            case 1630:
                var11[2] = var15;
                var12 = null;
                if (!var14) {
                    _fun59045_ip = 1765;
                    continue _fun59045
                }
            case 1642:
                var15 = _closure1_slot15;
                var19 = _closure1_slot0;
                var20 = _closure1_slot2;
                var13 = 58;
                var13 = var20[var13];
                var13 = var19.bind(var3)(var13);
                var14 = var13.Text;
                var13 = {
                    'accessibilityRole': 'link',
                    'style': null,
                    'onPress': null,
                    'variant': 'text-sm/medium',
                    'color': 'always-white'
                };
                var17 = var17.cancelLink;
                var13.style = var17;
                var16 = function() { // Original name: onPress, environment: var16
                    var3 = _closure1_slot33;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var13.onPress = var16;
                var16 = 57;
                var17 = var20[var16];
                var17 = var19.bind(var3)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var20[var16];
                var16 = var19.bind(var3)(var16);
                var16 = var16.t;
                var16 = var16["ETE/oC"];
                var16 = var17.bind(var18)(var16);
                var13.children = var16;
                var12 = var15.bind(var3)(var14, var13);
            case 1765:
                var11[3] = var12;
                var8.children = var11;
                var8 = var10.bind(var3)(var9, var8);
                var7[2] = var8;
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot37 = var1;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var7 = {};
    var0 = true;
    var7.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var7);
    var0 = 0;
    var7 = var9[var0];
    var0 = undefined;
    var7 = var18.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var9[var7];
    var7 = var18.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var10 = var9[var7];
    var7 = arg3;
    var7 = var7.bind(var0)(var10);
    var7 = 3;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var10 = var7.Image;
    var _closure1_slot5 = var10;
    var10 = var7.ImageBackground;
    var _closure1_slot6 = var10;
    var10 = var7.Linking;
    var _closure1_slot7 = var10;
    var7 = var7.View;
    var _closure1_slot8 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var18.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var18.bind(var0)(var7);
    var _closure1_slot10 = var7;
    var7 = 6;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var10 = var7.AnalyticsPages;
    var _closure1_slot11 = var10;
    var10 = var7.AnalyticsSections;
    var _closure1_slot12 = var10;
    var10 = var7.SubscriptionStatusTypes;
    var _closure1_slot13 = var10;
    var15 = var7.USER_SETTINGS_CONTAINER_HORIZONTAL_PADDING;
    var7 = 7;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.SubscriptionPlanInfo;
    var _closure1_slot14 = var7;
    var24 = 8;
    var7 = var9[var24];
    var7 = var8.bind(var0)(var7);
    var10 = var7.jsx;
    var _closure1_slot15 = var10;
    var7 = var7.jsxs;
    var _closure1_slot16 = var7;
    var12 = {};
    var16 = 37;
    var7 = {
        'height': 37,
        'width': 49
    };
    var12.imageTier2 = var7;
    var19 = 35;
    var7 = {
        'height': 35,
        'width': 49
    };
    var12.imageTier1 = var7;
    var22 = 29;
    var7 = {
        'height': 35,
        'width': 29
    };
    var12.imageTier0 = var7;
    var7 = {
        'height': 35,
        'width': 49
    };
    var12.imageBundle = var7;
    var17 = 36;
    var7 = {
        'height': 36,
        'width': 51
    };
    var12.imagePremiumNonActive = var7;
    var7 = {
        'width': 51,
        'height': 36
    };
    var12.imagePremiumGuild = var7;
    var7 = {
        'width': 51,
        'height': 36
    };
    var12.imagePremiumGuildNonActive = var7;
    var20 = 33;
    var7 = {
        'height': 33,
        'width': 205
    };
    var12.logoPremiumBundle = var7;
    var21 = 32;
    var7 = {
        'height': 32,
        'width': 59
    };
    var12.logoPremiumTier0 = var7;
    var26 = 16;
    var7 = {
        'height': 16,
        'width': 156
    };
    var12.logoPremiumTier1 = var7;
    var7 = {
        'height': 32,
        'width': 78
    };
    var12.logoPremiumTier2 = var7;
    var25 = 17;
    var7 = {
        'height': 17,
        'width': 184
    };
    var12.logoPremiumGuild = var7;
    var10 = {};
    var7 = {
        'fontSize': 14,
        'marginTop': 10
    };
    var23 = 14;
    var28 = 10;
    var27 = 9;
    var11 = var9[var27];
    var11 = var18.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.WHITE;
    var7.color = var11;
    var10.price = var7;
    var7 = {
        'fontSize': 14,
        'marginTop': 10
    };
    var11 = var9[var27];
    var11 = var18.bind(var0)(var11);
    var11 = var11.unsafe_rawColors;
    var11 = var11.BLACK;
    var7.color = var11;
    var10.priceDark = var7;
    var7 = var9[var28];
    var13 = var8.bind(var0)(var7);
    var11 = var13.createStyles;
    var7 = {};
    var14 = {};
    var14.paddingHorizontal = var15;
    var7.title = var14;
    var14 = {};
    var14.padding = var26;
    var7.header = var14;
    var14 = {};
    var14.marginRight = var28;
    var7.wumpusImg = var14;
    var14 = {
        'flexDirection': 'row',
        'alignItems': 'center'
    };
    var7.logoContainer = var14;
    var14 = {
        'marginTop': 8,
        'overflow': 'hidden'
    };
    var28 = var9[var27];
    var28 = var18.bind(var0)(var28);
    var28 = var28.colors;
    var28 = var28.BACKGROUND_BASE_LOWEST;
    var14.backgroundColor = var28;
    var7.container = var14;
    var14 = {
        'marginTop': 8,
        'flexDirection': 'row'
    };
    var7.buttonContainer = var14;
    var14 = {
        'alignSelf': 'flex-start',
        'flexGrow': 0,
        'flexShrink': 0,
        'paddingHorizontal': 16,
        'marginRight': 8
    };
    var28 = var9[var27];
    var28 = var18.bind(var0)(var28);
    var28 = var28.colors;
    var28 = var28.WHITE;
    var14.backgroundColor = var28;
    var7.button = var14;
    var14 = {};
    var27 = var9[var27];
    var27 = var18.bind(var0)(var27);
    var27 = var27.colors;
    var27 = var27.CONTROL_PRIMARY_BACKGROUND_DEFAULT;
    var14.color = var27;
    var7.buttonText = var14;
    var14 = {
        'alignSelf': 'flex-start',
        'flexGrow': 0,
        'flexShrink': 0,
        'marginLeft': 16,
        'marginTop': 2
    };
    var7.cancelLink = var14;
    var14 = {};
    var14.marginTop = var24;
    var14.paddingHorizontal = var15;
    var7.desktopSubtext = var14;
    var7 = var11.bind(var13)(var7);
    var _closure1_slot17 = var7;
    var11 = {};
    var7 = 'active';
    var11.ACTIVE = var7;
    var7 = 'resub';
    var11.RESUB = var7;
    var7 = 'error';
    var11.ERROR = var7;
    var _closure1_slot18 = var11;
    var7 = {};
    var13 = 11;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.BUNDLE;
    var14 = {};
    var27 = var11.ACTIVE;
    var24 = 12;
    var24 = var9[var24];
    var24 = var18.bind(var0)(var24);
    var14[var27] = var24;
    var28 = var11.ERROR;
    var24 = 13;
    var27 = var9[var24];
    var27 = var18.bind(var0)(var27);
    var14[var28] = var27;
    var28 = var11.RESUB;
    var27 = var9[var23];
    var27 = var18.bind(var0)(var27);
    var14[var28] = var27;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.TIER_0;
    var14 = {};
    var28 = var11.ACTIVE;
    var27 = 15;
    var27 = var9[var27];
    var27 = var18.bind(var0)(var27);
    var14[var28] = var27;
    var28 = var11.ERROR;
    var27 = var9[var24];
    var27 = var18.bind(var0)(var27);
    var14[var28] = var27;
    var28 = var11.RESUB;
    var27 = var9[var23];
    var27 = var18.bind(var0)(var27);
    var14[var28] = var27;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.TIER_1;
    var14 = {};
    var27 = var11.ACTIVE;
    var26 = var9[var26];
    var26 = var18.bind(var0)(var26);
    var14[var27] = var26;
    var27 = var11.ERROR;
    var26 = var9[var24];
    var26 = var18.bind(var0)(var26);
    var14[var27] = var26;
    var27 = var11.RESUB;
    var26 = var9[var23];
    var26 = var18.bind(var0)(var26);
    var14[var27] = var26;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.TIER_2;
    var14 = {};
    var26 = var11.ACTIVE;
    var25 = var9[var25];
    var25 = var18.bind(var0)(var25);
    var14[var26] = var25;
    var25 = var11.ERROR;
    var24 = var9[var24];
    var24 = var18.bind(var0)(var24);
    var14[var25] = var24;
    var24 = var11.RESUB;
    var23 = var9[var23];
    var23 = var18.bind(var0)(var23);
    var14[var24] = var23;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.PREMIUM_GUILD;
    var14 = {};
    var24 = var11.ACTIVE;
    var23 = 18;
    var23 = var9[var23];
    var23 = var18.bind(var0)(var23);
    var14[var24] = var23;
    var24 = var11.ERROR;
    var23 = 19;
    var23 = var9[var23];
    var23 = var18.bind(var0)(var23);
    var14[var24] = var23;
    var24 = var11.RESUB;
    var23 = 20;
    var23 = var9[var23];
    var23 = var18.bind(var0)(var23);
    var14[var24] = var23;
    var7[var15] = var14;
    var _closure1_slot19 = var7;
    var7 = {};
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.BUNDLE;
    var14 = {};
    var25 = var11.ACTIVE;
    var23 = 21;
    var24 = var9[var23];
    var24 = var18.bind(var0)(var24);
    var14[var25] = var24;
    var25 = var11.ERROR;
    var24 = var9[var23];
    var24 = var18.bind(var0)(var24);
    var14[var25] = var24;
    var24 = var11.RESUB;
    var23 = var9[var23];
    var23 = var18.bind(var0)(var23);
    var14[var24] = var23;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.TIER_0;
    var14 = {};
    var24 = var11.ACTIVE;
    var23 = 22;
    var23 = var9[var23];
    var23 = var18.bind(var0)(var23);
    var14[var24] = var23;
    var24 = var11.ERROR;
    var23 = 23;
    var23 = var9[var23];
    var23 = var18.bind(var0)(var23);
    var14[var24] = var23;
    var24 = var11.RESUB;
    var23 = 24;
    var23 = var9[var23];
    var23 = var18.bind(var0)(var23);
    var14[var24] = var23;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.TIER_1;
    var14 = {};
    var24 = var11.ACTIVE;
    var23 = 25;
    var23 = var9[var23];
    var23 = var18.bind(var0)(var23);
    var14[var24] = var23;
    var24 = var11.ERROR;
    var23 = 26;
    var23 = var9[var23];
    var23 = var18.bind(var0)(var23);
    var14[var24] = var23;
    var24 = var11.RESUB;
    var23 = 27;
    var23 = var9[var23];
    var23 = var18.bind(var0)(var23);
    var14[var24] = var23;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.TIER_2;
    var14 = {};
    var24 = var11.ACTIVE;
    var23 = 28;
    var23 = var9[var23];
    var23 = var18.bind(var0)(var23);
    var14[var24] = var23;
    var23 = var11.ERROR;
    var22 = var9[var22];
    var22 = var18.bind(var0)(var22);
    var14[var23] = var22;
    var23 = var11.RESUB;
    var22 = 30;
    var22 = var9[var22];
    var22 = var18.bind(var0)(var22);
    var14[var23] = var22;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.PREMIUM_GUILD;
    var14 = {};
    var23 = var11.ACTIVE;
    var22 = 31;
    var22 = var9[var22];
    var22 = var18.bind(var0)(var22);
    var14[var23] = var22;
    var22 = var11.ERROR;
    var21 = var9[var21];
    var21 = var18.bind(var0)(var21);
    var14[var22] = var21;
    var21 = var11.RESUB;
    var20 = var9[var20];
    var20 = var18.bind(var0)(var20);
    var14[var21] = var20;
    var7[var15] = var14;
    var _closure1_slot20 = var7;
    var7 = {};
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.BUNDLE;
    var14 = {};
    var21 = var11.ACTIVE;
    var20 = var12.imageBundle;
    var14[var21] = var20;
    var21 = var11.ERROR;
    var20 = var12.imageBundle;
    var14[var21] = var20;
    var21 = var11.RESUB;
    var20 = var12.imageBundle;
    var14[var21] = var20;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.TIER_0;
    var14 = {};
    var21 = var11.ACTIVE;
    var20 = var12.imageTier0;
    var14[var21] = var20;
    var21 = var11.ERROR;
    var20 = var12.imagePremiumNonActive;
    var14[var21] = var20;
    var21 = var11.RESUB;
    var20 = var12.imagePremiumNonActive;
    var14[var21] = var20;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.TIER_1;
    var14 = {};
    var21 = var11.ACTIVE;
    var20 = var12.imageTier1;
    var14[var21] = var20;
    var21 = var11.ERROR;
    var20 = var12.imagePremiumNonActive;
    var14[var21] = var20;
    var21 = var11.RESUB;
    var20 = var12.imagePremiumNonActive;
    var14[var21] = var20;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.TIER_2;
    var14 = {};
    var21 = var11.ACTIVE;
    var20 = var12.imageTier2;
    var14[var21] = var20;
    var21 = var11.ERROR;
    var20 = var12.imagePremiumNonActive;
    var14[var21] = var20;
    var21 = var11.RESUB;
    var20 = var12.imagePremiumNonActive;
    var14[var21] = var20;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.PREMIUM_GUILD;
    var14 = {};
    var21 = var11.ACTIVE;
    var20 = var12.imagePremiumGuild;
    var14[var21] = var20;
    var21 = var11.ERROR;
    var20 = var12.imagePremiumGuildNonActive;
    var14[var21] = var20;
    var21 = var11.RESUB;
    var20 = var12.imagePremiumGuildNonActive;
    var14[var21] = var20;
    var7[var15] = var14;
    var _closure1_slot21 = var7;
    var7 = {};
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.BUNDLE;
    var14 = {};
    var22 = var11.ACTIVE;
    var20 = 34;
    var21 = var9[var20];
    var21 = var18.bind(var0)(var21);
    var14[var22] = var21;
    var21 = var11.ERROR;
    var20 = var9[var20];
    var20 = var18.bind(var0)(var20);
    var14[var21] = var20;
    var20 = var11.RESUB;
    var19 = var9[var19];
    var19 = var18.bind(var0)(var19);
    var14[var20] = var19;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.TIER_0;
    var14 = {};
    var20 = var11.ACTIVE;
    var19 = var9[var17];
    var19 = var18.bind(var0)(var19);
    var14[var20] = var19;
    var19 = var11.ERROR;
    var17 = var9[var17];
    var17 = var18.bind(var0)(var17);
    var14[var19] = var17;
    var17 = var11.RESUB;
    var16 = var9[var16];
    var16 = var18.bind(var0)(var16);
    var14[var17] = var16;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.TIER_1;
    var14 = {};
    var19 = var11.ACTIVE;
    var16 = 38;
    var17 = var9[var16];
    var17 = var18.bind(var0)(var17);
    var14[var19] = var17;
    var17 = var11.ERROR;
    var16 = var9[var16];
    var16 = var18.bind(var0)(var16);
    var14[var17] = var16;
    var17 = var11.RESUB;
    var16 = 39;
    var16 = var9[var16];
    var16 = var18.bind(var0)(var16);
    var14[var17] = var16;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.TIER_2;
    var14 = {};
    var19 = var11.ACTIVE;
    var16 = 40;
    var17 = var9[var16];
    var17 = var18.bind(var0)(var17);
    var14[var19] = var17;
    var17 = var11.ERROR;
    var16 = var9[var16];
    var16 = var18.bind(var0)(var16);
    var14[var17] = var16;
    var17 = var11.RESUB;
    var16 = 41;
    var16 = var9[var16];
    var16 = var18.bind(var0)(var16);
    var14[var17] = var16;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.PREMIUM_GUILD;
    var14 = {};
    var19 = var11.ACTIVE;
    var16 = 42;
    var17 = var9[var16];
    var17 = var18.bind(var0)(var17);
    var14[var19] = var17;
    var17 = var11.ERROR;
    var16 = var9[var16];
    var16 = var18.bind(var0)(var16);
    var14[var17] = var16;
    var17 = var11.RESUB;
    var16 = 43;
    var16 = var9[var16];
    var16 = var18.bind(var0)(var16);
    var14[var17] = var16;
    var7[var15] = var14;
    var _closure1_slot22 = var7;
    var7 = {};
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.BUNDLE;
    var14 = var12.logoPremiumBundle;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.TIER_0;
    var14 = var12.logoPremiumTier0;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.TIER_1;
    var14 = var12.logoPremiumTier1;
    var7[var15] = var14;
    var14 = var9[var13];
    var14 = var8.bind(var0)(var14);
    var14 = var14.Branding;
    var15 = var14.TIER_2;
    var14 = var12.logoPremiumTier2;
    var7[var15] = var14;
    var13 = var9[var13];
    var13 = var8.bind(var0)(var13);
    var13 = var13.Branding;
    var13 = var13.PREMIUM_GUILD;
    var12 = var12.logoPremiumGuild;
    var7[var13] = var12;
    var _closure1_slot23 = var7;
    var7 = {};
    var13 = var11.ACTIVE;
    var12 = var10.price;
    var7[var13] = var12;
    var13 = var11.ERROR;
    var12 = var10.price;
    var7[var13] = var12;
    var11 = var11.RESUB;
    var10 = var10.priceDark;
    var7[var11] = var10;
    var _closure1_slot24 = var7;
    var7 = 63;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'components_native/premium/PremiumSubscriptionDetails.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function(arg0) { // Original name: PremiumSubscriptionDetails, environment: var6
        _fun59051: for (var _fun59051_ip = 0;;) switch (_fun59051_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.style;
                var12 = var0.onClickManagePremiumGuild;
                var15 = var0.subscription;
                var0 = _closure1_slot17;
                var4 = undefined;
                var10 = var0.bind(var4)();
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 52;
                var0 = var8[var0];
                var0 = var6.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var3 = var0.analyticsLocations;
                var1 = _closure1_slot0;
                var0 = 59;
                var0 = var8[var0];
                var2 = var1.bind(var4)(var0);
                var1 = var2.useSubscriptionInvoicePreview;
                var0 = {};
                var9 = var15.id;
                var0.subscriptionId = var9;
                var9 = true;
                var0.renewal = var9;
                var0.analyticsLocations = var3;
                var3 = 60;
                var3 = var8[var3];
                var3 = var6.bind(var4)(var3);
                var3 = var3.PREMIUM_SUBSCRIPTION_DETAILS;
                var0.analyticsLocation = var3;
                var2 = var1.bind(var2)(var0);
                var1 = _closure1_slot3;
                var0 = 1;
                var1 = var1.bind(var4)(var2, var0);
                var0 = 0;
                var14 = var1[var0];
                var9 = null;
                var1 = var9 == var14;
                var0 = null;
                if (var1) {
                    _fun59051_ip = 602;
                    continue _fun59051
                }
            case 170:
                var3 = _closure1_slot16;
                var2 = _closure1_slot8;
                var1 = {};
                var1.style = var5;
                var11 = _closure1_slot15;
                var19 = _closure1_slot0;
                var16 = _closure1_slot2;
                var6 = 58;
                var5 = var16[var6];
                var5 = var19.bind(var4)(var5);
                var8 = var5.Text;
                var5 = {
                    'style': null,
                    'accessibilityRole': 'header',
                    'variant': 'eyebrow',
                    'color': 'text-default'
                };
                var13 = var10.title;
                var5.style = var13;
                var13 = 57;
                var17 = var16[var13];
                var17 = var19.bind(var4)(var17);
                var18 = var17.intl;
                var17 = var18.string;
                var16 = var16[var13];
                var16 = var19.bind(var4)(var16);
                var16 = var16.t;
                var16 = var16.ITurwY;
                var16 = var17.bind(var18)(var16);
                var5.children = var16;
                var8 = var11.bind(var4)(var8, var5);
                var5 = new Array(5);
                var5[0] = var8;
                var8 = var15.renewalMutations;
                var8 = var9 != var8;
                if (!var8) {
                    _fun59051_ip = 335;
                    continue _fun59051
                }
            case 316:
                var11 = var15.status;
                var9 = _closure1_slot13;
                var9 = var9.CANCELED;
                var8 = var11 !== var9;
            case 335:
                if (!var8) {
                    _fun59051_ip = 386;
                    continue _fun59051
                }
            case 338:
                var16 = _closure1_slot15;
                var11 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 61;
                var9 = var17[var9];
                var11 = var11.bind(var4)(var9);
                var9 = {};
                var9.subscription = var15;
                var17 = var15.renewalMutations;
                var9.renewalMutations = var17;
                var8 = var16.bind(var4)(var11, var9);
            case 386:
                var5[1] = var8;
                var9 = var15.status;
                var8 = _closure1_slot13;
                var8 = var8.ACCOUNT_HOLD;
                var8 = var9 === var8;
                if (!var8) {
                    _fun59051_ip = 449;
                    continue _fun59051
                }
            case 412:
                var16 = _closure1_slot15;
                var11 = _closure1_slot1;
                var17 = _closure1_slot2;
                var9 = 62;
                var9 = var17[var9];
                var11 = var11.bind(var4)(var9);
                var9 = {};
                var9.subscription = var15;
                var8 = var16.bind(var4)(var11, var9);
            case 449:
                var5[2] = var8;
                var11 = _closure1_slot15;
                var9 = _closure1_slot37;
                var8 = {};
                var8.subscription = var15;
                var8.renewalInvoicePreview = var14;
                var8.onClickManagePremiumGuild = var12;
                var8 = var11.bind(var4)(var9, var8);
                var5[3] = var8;
                var8 = _closure1_slot15;
                var12 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = var9[var6];
                var6 = var12.bind(var4)(var6);
                var7 = var6.Text;
                var6 = {};
                var10 = var10.desktopSubtext;
                var6.style = var10;
                var10 = 'text-sm/medium';
                var6.variant = var10;
                var10 = var9[var13];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var9[var13];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9["MTG+3O"];
                var9 = var10.bind(var11)(var9);
                var6.children = var9;
                var6 = var8.bind(var4)(var7, var6);
                var5[4] = var6;
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 602:
                return var0;
        }
    };
    var2.default = var6;
    var2.onCancelClick = var5;
    var2.handleManageSubscription = var4;
    var2.onResubscribeClick = var3;
    var2.PremiumSubscriptionHeader = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 31, 27, 1613, 4575, 660, 1615, 33, 671, 1297, 3068, 7074, 7189, 7190, 7071, 7072, 7073, 7075, 7191, 7192, 7193, 7029, 7194, 7195, 7196, 7197, 7198, 7076, 7199, 7200, 7201, 7202, 7203, 7204, 7205, 7079, 7206, 7207, 7208, 6608, 7209, 7210, 7211, 7064, 7122, 7212, 7213, 7249, 1469, 566, 44, 5688, 4570, 478, 4839, 4836, 1234, 3900, 7250, 5541, 7251, 7252, 2]);