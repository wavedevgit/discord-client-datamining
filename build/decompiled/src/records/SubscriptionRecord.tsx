// records/SubscriptionRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun25310: for (var _fun25310_ip = 0;;) switch (_fun25310_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun25310_ip = 74;
                continue _fun25310;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function(arg0) { // Original name: createSubscriptionItemFromServer, environment: var1
        var1 = arg0;
        var0 = {};
        var2 = var1.id;
        var0.id = var2;
        var2 = var1.plan_id;
        var0.planId = var2;
        var1 = var1.quantity;
        var0.quantity = var1;
        return var0;
    };
    var _closure1_slot21 = var0;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var6 = 6;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.PaymentGateways;
    var _closure1_slot10 = var7;
    var7 = var6.SubscriptionStatusTypes;
    var _closure1_slot11 = var7;
    var7 = var6.SubscriptionStatusTypesSets;
    var _closure1_slot12 = var7;
    var6 = var6.SubscriptionTypes;
    var _closure1_slot13 = var6;
    var6 = 9;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.SubscriptionPauseReason;
    var _closure1_slot14 = var7;
    var6 = var6.SubscriptionPauseReasonSets;
    var _closure1_slot15 = var6;
    var6 = 10;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.PREMIUM_PLANS;
    var _closure1_slot16 = var7;
    var7 = var6.REVERSE_TRIAL_IDS;
    var _closure1_slot17 = var7;
    var7 = var6.SubscriptionPlanInfo;
    var _closure1_slot18 = var7;
    var6 = var6.SubscriptionPlans;
    var _closure1_slot19 = var6;
    var1 = function(arg0) { // Environment: var1
        var4 = function(arg0) { // Original name: SubscriptionRecord, environment: var0
            _fun25315: for (var _fun25315_ip = 0;;) switch (_fun25315_ip) {
                case 0:
                    var4 = arg0;
                    var3 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var10 = undefined;
                    var0 = var0.bind(var10)(var3, var2);
                    var0 = _closure1_slot6;
                    var11 = var0.bind(var10)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var10)();
                    if (var0) {
                        _fun25315_ip = 67;
                        continue _fun25315
                    }
                case 54:
                    var0 = var11.apply;
                    var0 = var0.bind(var11)(var3, var10);
                    _fun25315_ip = 105;
                    continue _fun25315;
                case 67:
                    var5 = global;
                    var9 = var5.Reflect;
                    var8 = var9.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var10)(var3);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var8.bind(var9)(var11, var5, var6);
                case 105:
                    var0 = var2.bind(var10)(var3, var0);
                    var2 = var4.id;
                    var0.id = var2;
                    var2 = var4.type;
                    var0.type = var2;
                    var2 = var4.items;
                    var0.items = var2;
                    var2 = var4.createdAt;
                    var0.createdAt = var2;
                    var2 = var4.canceledAt;
                    var0.canceledAt = var2;
                    var2 = var4.currentPeriodStart;
                    var0.currentPeriodStart = var2;
                    var2 = var4.currentPeriodEnd;
                    var0.currentPeriodEnd = var2;
                    var2 = var4.status;
                    var0.status = var2;
                    var2 = var4.paymentSourceId;
                    var0.paymentSourceId = var2;
                    var2 = var4.paymentGateway;
                    var0.paymentGateway = var2;
                    var2 = var4.paymentGatewayPlanId;
                    var0.paymentGatewayPlanId = var2;
                    var2 = var4.paymentGatewaySubscriptionId;
                    var0.paymentGatewaySubscriptionId = var2;
                    var2 = var4.trialId;
                    var0.trialId = var2;
                    var2 = var4.trialEndsAt;
                    var0.trialEndsAt = var2;
                    var2 = var4.renewalMutations;
                    var0.renewalMutations = var2;
                    var2 = var4.currency;
                    var0.currency = var2;
                    var2 = var4.pauseEndsAt;
                    var0.pauseEndsAt = var2;
                    var2 = var4.pauseReason;
                    var0.pauseReason = var2;
                    var2 = var4.metadata;
                    var0.metadata = var2;
                    var2 = var4.latestInvoice;
                    var0.latestInvoice = var2;
                    var2 = var4.useStorekitResubscribe;
                    var0.useStorekitResubscribe = var2;
                    var2 = var4.price;
                    var0.price = var2;
                    var2 = var4.userId;
                    var0.userId = var2;
                    var2 = var4.streakStartedAt;
                    var0.streakStartedAt = var2;
                    var2 = var4.eligiblePaymentGateways;
                    var0.eligiblePaymentGateways = var2;
                    var2 = var4.priceChange;
                    var0.priceChange = var2;
                    var2 = var0.renewalMutations;
                    var3 = var4.items;
                    var11 = 0;
                    var3 = var3[var11];
                    var9 = var3.planId;
                    var _closure3_slot0 = var9;
                    var5 = null;
                    var _closure3_slot1 = var5;
                    var6 = var4.type;
                    var3 = _closure1_slot13;
                    var3 = var3.PREMIUM;
                    if (!(var6 !== var3)) {
                        _fun25315_ip = 536;
                        continue _fun25315
                    }
                case 472:
                    var8 = var5 != var2;
                    if (!var8) {
                        _fun25315_ip = 494;
                        continue _fun25315
                    }
                case 479:
                    var3 = var2.items;
                    var3 = var3.length;
                    var8 = var3 > var11;
                case 494:
                    var6 = var9;
                    var3 = null;
                    if (!var8) {
                        _fun25315_ip = 673;
                        continue _fun25315
                    }
                case 505:
                    var8 = var2.items;
                    var8 = var8[var11];
                    var8 = var8.planId;
                    _closure3_slot1 = var8;
                    var6 = var9;
                    var3 = var8;
                    _fun25315_ip = 673;
                    continue _fun25315;
                case 536:
                    var9 = _closure1_slot18;
                    var8 = var4.items;
                    var8 = var8[var11];
                    var8 = var8.planId;
                    var8 = var9[var8];
                    var12 = var8.interval;
                    var11 = var8.intervalCount;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot2;
                    var13 = 11;
                    var8 = var8[var13];
                    var14 = var9.bind(var10)(var8);
                    var9 = var14.getBasePlanIdForSubscriptionItems;
                    var8 = var4.items;
                    var8 = var9.bind(var14)(var8, var12, var11);
                    _closure3_slot0 = var8;
                    var9 = var5 != var2;
                    var6 = var8;
                    var3 = null;
                    if (!var9) {
                        _fun25315_ip = 673;
                        continue _fun25315
                    }
                case 627:
                    var9 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var7 = var7[var13];
                    var10 = var9.bind(var10)(var7);
                    var9 = var10.getBasePlanIdForSubscriptionItems;
                    var7 = var2.items;
                    var7 = var9.bind(var10)(var7, var12, var11);
                    _closure3_slot1 = var7;
                    var6 = var8;
                    var3 = var7;
                case 673:
                    var0.planId = var6;
                    var7 = var4.items;
                    var6 = var7.filter;
                    var4 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.planId;
                        var0 = _closure3_slot0;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var4 = var6.bind(var7)(var4);
                    var0.additionalPlans = var4;
                    var4 = var5 != var2;
                    if (!var4) {
                        _fun25315_ip = 717;
                        continue _fun25315
                    }
                case 713:
                    var4 = var5 != var3;
                case 717:
                    if (!var4) {
                        _fun25315_ip = 753;
                        continue _fun25315
                    }
                case 720:
                    var2.planId = var3;
                    var4 = var2.items;
                    var3 = var4.filter;
                    var1 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.planId;
                        var0 = _closure3_slot1;
                        var0 = var1 !== var0;
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1);
                    var2.additionalPlans = var1;
                case 753:
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot7;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot4;
        var5 = {};
        var1 = 'getCurrentSubscriptionPlanIdForGroup';
        var5.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var0
            _fun25318: for (var _fun25318_ip = 0;;) switch (_fun25318_ip) {
                case 0:
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var1 = this;
                    var2 = var1.items;
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var0.planId;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var1.bind(var2)(var0);
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun25318_ip = 50;
                        continue _fun25318
                    }
                case 44:
                    var0 = var1.planId;
                case 50:
                    return var0;
            }
        };
        var5.value = var1;
        var1 = new Array(29);
        var1[0] = var5;
        var5 = {};
        var6 = 'isPremium';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            var0 = this;
            var1 = var0.type;
            var0 = _closure1_slot13;
            var0 = var0.PREMIUM;
            var0 = var1 === var0;
            return var0;
        };
        var5.get = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'isACOM';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            var0 = this;
            var1 = var0.paymentGateway;
            var0 = _closure1_slot10;
            var0 = var0.APPLE_ADVANCED_COMMERCE;
            var0 = var1 === var0;
            return var0;
        };
        var5.get = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'planIdForCurrencies';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            _fun25322: for (var _fun25322_ip = 0;;) switch (_fun25322_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isPremium;
                    if (var0) {
                        _fun25322_ip = 20;
                        continue _fun25322
                    }
                case 12:
                    var0 = var1.planId;
                    _fun25322_ip = 69;
                    continue _fun25322;
                case 20:
                    var3 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var2 = 12;
                    var2 = var4[var2];
                    var5 = undefined;
                    var4 = var3.bind(var5)(var2);
                    var3 = var1.planIdFromItems;
                    var2 = 'Premium subscription has no planId for currencies';
                    var2 = var4.bind(var5)(var3, var2);
                    var0 = var1.planIdFromItems;
                case 69:
                    return var0;
            }
        };
        var5.get = var6;
        var1[3] = var5;
        var5 = {};
        var6 = 'planIdFromItems';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            var2 = this;
            var1 = var2.getCurrentSubscriptionPlanIdForGroup;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.values;
            var0 = _closure1_slot19;
            var0 = var3.bind(var4)(var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.get = var6;
        var1[4] = var5;
        var5 = {};
        var6 = 'premiumPlanIdFromItems';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            var2 = this;
            var1 = var2.getCurrentSubscriptionPlanIdForGroup;
            var6 = _closure1_slot16;
            var0 = new Array(0);
            var5 = 0;
            var7 = var0;
            var3 = arraySpread(var7, var6, var5);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.get = var6;
        var1[5] = var5;
        var5 = {};
        var6 = 'isPurchasedViaDesktop';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            var0 = this;
            var1 = var0.paymentGateway;
            var0 = null;
            var0 = var0 == var1;
            return var0;
        };
        var5.get = var6;
        var1[6] = var5;
        var5 = {};
        var6 = 'isPurchasedViaAppleGeneric';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            _fun25326: for (var _fun25326_ip = 0;;) switch (_fun25326_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.paymentGateway;
                    var0 = _closure1_slot10;
                    var0 = var0.APPLE_PARTNER;
                    var0 = var2 === var0;
                    if (var0) {
                        _fun25326_ip = 35;
                        continue _fun25326
                    }
                case 29:
                    var0 = var1.isACOM;
                case 35:
                    return var0;
            }
        };
        var5.get = var6;
        var1[7] = var5;
        var5 = {};
        var6 = 'isPurchasedViaApple';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            var0 = this;
            var1 = var0.paymentGateway;
            var0 = _closure1_slot10;
            var0 = var0.APPLE;
            var0 = var1 === var0;
            return var0;
        };
        var5.get = var6;
        var1[8] = var5;
        var5 = {};
        var6 = 'isPurchasedViaGoogle';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            var0 = this;
            var1 = var0.paymentGateway;
            var0 = _closure1_slot10;
            var0 = var0.GOOGLE;
            var0 = var1 === var0;
            return var0;
        };
        var5.get = var6;
        var1[9] = var5;
        var5 = {};
        var6 = 'isPurchasedExternally';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            _fun25329: for (var _fun25329_ip = 0;;) switch (_fun25329_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isPurchasedViaApple;
                    if (var0) {
                        _fun25329_ip = 18;
                        continue _fun25329
                    }
                case 12:
                    var0 = var1.isPurchasedViaGoogle;
                case 18:
                    return var0;
            }
        };
        var5.get = var6;
        var1[10] = var5;
        var5 = {};
        var6 = 'isOnPlatformMatchingExternalPaymentGateway';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            _fun25330: for (var _fun25330_ip = 0;;) switch (_fun25330_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isPurchasedViaApple;
                    if (!var0) {
                        _fun25330_ip = 47;
                        continue _fun25330
                    }
                case 12:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.isIOS;
                    var0 = var2.bind(var3)();
                case 47:
                    if (var0) {
                        _fun25330_ip = 97;
                        continue _fun25330
                    }
                case 50:
                    var1 = var1.isPurchasedViaGoogle;
                    if (!var1) {
                        _fun25330_ip = 94;
                        continue _fun25330
                    }
                case 59:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 13;
                    var3 = var3[var2];
                    var2 = undefined;
                    var3 = var4.bind(var2)(var3);
                    var2 = var3.isAndroid;
                    var1 = var2.bind(var3)();
                case 94:
                    var0 = var1;
                case 97:
                    return var0;
            }
        };
        var5.get = var6;
        var1[11] = var5;
        var5 = {};
        var6 = 'hasExternalPlanChange';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            _fun25331: for (var _fun25331_ip = 0;;) switch (_fun25331_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isPurchasedExternally;
                    if (!var0) {
                        _fun25331_ip = 24;
                        continue _fun25331
                    }
                case 12:
                    var3 = var1.renewalMutations;
                    var2 = null;
                    var0 = var2 != var3;
                case 24:
                    if (!var0) {
                        _fun25331_ip = 49;
                        continue _fun25331
                    }
                case 27:
                    var2 = var1.paymentGatewayPlanId;
                    var1 = var1.renewalMutations;
                    var1 = var1.paymentGatewayPlanId;
                    var0 = var2 !== var1;
                case 49:
                    return var0;
            }
        };
        var5.get = var6;
        var1[12] = var5;
        var5 = {};
        var6 = 'hasPremiumNitroMonthly';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            var0 = this;
            var2 = var0.items;
            var1 = var2.find;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.planId;
                var0 = _closure1_slot19;
                var0 = var0.PREMIUM_MONTH_TIER_2;
                var0 = var1 === var0;
                return var0;
            };
            var1 = var1.bind(var2)(var0);
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var5.get = var6;
        var1[13] = var5;
        var5 = {};
        var6 = 'isBoostOnly';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            var0 = this;
            var2 = var0.items;
            var1 = var2.every;
            var0 = function(arg0) { // Environment: var0
                var0 = _closure1_slot19;
                var1 = var0.PREMIUM_MONTH_GUILD;
                var2 = new Array(2);
                var2[0] = var1;
                var0 = var0.PREMIUM_YEAR_GUILD;
                var2[1] = var0;
                var1 = var2.includes;
                var0 = arg0;
                var0 = var0.planId;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.get = var6;
        var1[14] = var5;
        var5 = {};
        var6 = 'isPausedOrPausePending';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            var0 = _closure1_slot12;
            var2 = var0.ALL_PAUSE;
            var1 = var2.has;
            var0 = this;
            var0 = var0.status;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.get = var6;
        var1[15] = var5;
        var5 = {};
        var6 = 'isPaused';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            var0 = this;
            var1 = var0.status;
            var0 = _closure1_slot11;
            var0 = var0.PAUSED;
            var0 = var1 === var0;
            return var0;
        };
        var5.get = var6;
        var1[16] = var5;
        var5 = {};
        var6 = 'isPausedForFractionalPremium';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            _fun25338: for (var _fun25338_ip = 0;;) switch (_fun25338_ip) {
                case 0:
                    var2 = this;
                    var3 = var2.status;
                    var0 = _closure1_slot11;
                    var0 = var0.PAUSED;
                    var0 = var3 === var0;
                    if (!var0) {
                        _fun25338_ip = 48;
                        continue _fun25338
                    }
                case 28:
                    var2 = var2.pauseReason;
                    var1 = _closure1_slot14;
                    var1 = var1.FRACTIONAL_PREMIUM;
                    var0 = var2 === var1;
                case 48:
                    return var0;
            }
        };
        var5.get = var6;
        var1[17] = var5;
        var5 = {};
        var6 = 'isPausedAllowsUpdatesButNotResume';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            _fun25339: for (var _fun25339_ip = 0;;) switch (_fun25339_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.status;
                    var0 = _closure1_slot11;
                    var0 = var0.PAUSED;
                    var0 = var3 === var0;
                    if (!var0) {
                        _fun25339_ip = 54;
                        continue _fun25339
                    }
                case 28:
                    var2 = _closure1_slot15;
                    var3 = var2.CAN_MAKE_SUBSCRIPTION_UPDATES;
                    var2 = var3.has;
                    var1 = var1.pauseReason;
                    var0 = var2.bind(var3)(var1);
                case 54:
                    return var0;
            }
        };
        var5.get = var6;
        var1[18] = var5;
        var5 = {};
        var6 = 'isPausedAllowsResumeButNotUpdates';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            _fun25340: for (var _fun25340_ip = 0;;) switch (_fun25340_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.status;
                    var0 = _closure1_slot11;
                    var0 = var0.PAUSED;
                    var0 = var1 === var0;
                    if (!var0) {
                        _fun25340_ip = 75;
                        continue _fun25340
                    }
                case 28:
                    var4 = var2.pauseReason;
                    var1 = null;
                    var1 = var1 === var4;
                    if (var1) {
                        _fun25340_ip = 72;
                        continue _fun25340
                    }
                case 43:
                    var3 = _closure1_slot15;
                    var4 = var3.CAN_MAKE_SUBSCRIPTION_UPDATES;
                    var3 = var4.has;
                    var2 = var2.pauseReason;
                    var2 = var3.bind(var4)(var2);
                    var1 = !var2;
                case 72:
                    var0 = var1;
                case 75:
                    return var0;
            }
        };
        var5.get = var6;
        var1[19] = var5;
        var5 = {};
        var6 = 'isEnded';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            var0 = this;
            var1 = var0.status;
            var0 = _closure1_slot11;
            var0 = var0.ENDED;
            var0 = var1 === var0;
            return var0;
        };
        var5.get = var6;
        var1[20] = var5;
        var5 = {};
        var6 = 'endedAt';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            _fun25342: for (var _fun25342_ip = 0;;) switch (_fun25342_ip) {
                case 0:
                    var2 = this;
                    var4 = var2.status;
                    var0 = _closure1_slot11;
                    var1 = var0.ENDED;
                    var3 = null;
                    var0 = null;
                    if (!(var4 === var1)) {
                        _fun25342_ip = 105;
                        continue _fun25342
                    }
                case 29:
                    var4 = var2.metadata;
                    var5 = var3 == var4;
                    var1 = undefined;
                    if (var5) {
                        _fun25342_ip = 50;
                        continue _fun25342
                    }
                case 44:
                    var1 = var4.ended_at;
                case 50:
                    if (!(var3 == var1)) {
                        _fun25342_ip = 62;
                        continue _fun25342
                    }
                case 54:
                    var1 = var2.currentPeriodEnd;
                    _fun25342_ip = 102;
                    continue _fun25342;
                case 62:
                    var3 = global;
                    var4 = var3.Date;
                    var2 = var2.metadata;
                    var6 = var2.ended_at;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = var3;
                    var2 = new var7[var4](var6, var5);
                    var1 = var2 instanceof Object ? var2 : var3;
                case 102:
                    var0 = var1;
                case 105:
                    return var0;
            }
        };
        var5.get = var6;
        var1[21] = var5;
        var5 = {};
        var6 = 'isActive';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            var0 = this;
            var1 = var0.status;
            var0 = _closure1_slot11;
            var0 = var0.ACTIVE;
            var0 = var1 === var0;
            return var0;
        };
        var5.get = var6;
        var1[22] = var5;
        var5 = {};
        var6 = 'hasActiveTrial';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            _fun25344: for (var _fun25344_ip = 0;;) switch (_fun25344_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.trialId;
                    var3 = null;
                    var0 = var3 != var0;
                    if (!var0) {
                        _fun25344_ip = 28;
                        continue _fun25344
                    }
                case 18:
                    var2 = var1.trialEndsAt;
                    var0 = var3 != var2;
                case 28:
                    if (!var0) {
                        _fun25344_ip = 69;
                        continue _fun25344
                    }
                case 31:
                    var2 = global;
                    var2 = var2.Date;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var4 = var3;
                    var2 = new var4[var2](var3);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var1 = var1.trialEndsAt;
                    var0 = var2 < var1;
                case 69:
                    return var0;
            }
        };
        var5.get = var6;
        var1[23] = var5;
        var5 = {};
        var6 = 'inReverseTrial';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            _fun25345: for (var _fun25345_ip = 0;;) switch (_fun25345_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.trialId;
                    var2 = null;
                    var0 = var2 != var0;
                    if (!var0) {
                        _fun25345_ip = 41;
                        continue _fun25345
                    }
                case 18:
                    var5 = _closure1_slot17;
                    var4 = var5.includes;
                    var3 = var1.trialId;
                    var0 = var4.bind(var5)(var3);
                case 41:
                    if (!var0) {
                        _fun25345_ip = 54;
                        continue _fun25345
                    }
                case 44:
                    var1 = var1.paymentSourceId;
                    var0 = var2 == var1;
                case 54:
                    return var0;
            }
        };
        var5.get = var6;
        var1[24] = var5;
        var5 = {};
        var6 = 'premiumSince';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            _fun25346: for (var _fun25346_ip = 0;;) switch (_fun25346_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.streakStartedAt;
                    var2 = null;
                    if (!(var2 == var0)) {
                        _fun25346_ip = 21;
                        continue _fun25346
                    }
                case 15:
                    var0 = var1.createdAt;
                case 21:
                    return var0;
            }
        };
        var5.get = var6;
        var1[25] = var5;
        var5 = {};
        var6 = 'hasAnyPremiumNitro';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            var0 = this;
            var2 = var0.items;
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure1_slot16;
                var1 = var2.has;
                var0 = arg0;
                var0 = var0.planId;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.get = var6;
        var1[26] = var5;
        var5 = {};
        var6 = 'hasAnyPremiumGroup';
        var5.key = var6;
        var6 = function() { // Original name: get, environment: var0
            var0 = this;
            var2 = var0.items;
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var0 = arg0;
                var1 = var0.planId;
                var0 = _closure1_slot19;
                var0 = var0.PREMIUM_GROUP_MONTH;
                var0 = var1 === var0;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5.get = var6;
        var1[27] = var5;
        var5 = {};
        var6 = 'hasPremiumAtLeast';
        var5.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var0
            _fun25351: for (var _fun25351_ip = 0;;) switch (_fun25351_ip) {
                case 0:
                    var2 = this;
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = var2.isPremium;
                    var3 = !var0;
                    var0 = !var3;
                    if (var3) {
                        _fun25351_ip = 49;
                        continue _fun25351
                    }
                case 27:
                    var3 = var2.items;
                    var2 = var3.some;
                    var1 = function(arg0) { // Environment: var1
                        var2 = _closure1_slot18;
                        var0 = arg0;
                        var0 = var0.planId;
                        var0 = var2[var0];
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 14;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.isPremiumAtLeast;
                        var1 = var0.premiumType;
                        var0 = _closure3_slot0;
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1);
                case 49:
                    return var0;
            }
        };
        var5.value = var6;
        var1[28] = var5;
        var5 = {};
        var6 = 'createFromServer';
        var5.key = var6;
        var0 = function(arg0) { // Original name: value, environment: var0
            _fun25353: for (var _fun25353_ip = 0;;) switch (_fun25353_ip) {
                case 0:
                    var1 = arg0;
                    var2 = _closure2_slot0;
                    var0 = {};
                    var3 = var1.id;
                    var0.id = var3;
                    var3 = var1.type;
                    var0.type = var3;
                    var6 = global;
                    var5 = var6.Date;
                    var12 = var1.created_at;
                    var4 = var5.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var5
                        }
                    });
                    var13 = var4;
                    var3 = new var13[var5](var12, var11);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var0.createdAt = var3;
                    var4 = var1.canceled_at;
                    var3 = null;
                    var5 = var3 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun25353_ip = 118;
                        continue _fun25353
                    }
                case 86:
                    var8 = var6.Date;
                    var12 = var1.canceled_at;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var8
                        }
                    });
                    var13 = var7;
                    var5 = new var13[var8](var12, var11);
                    var4 = var5 instanceof Object ? var5 : var7;
                case 118:
                    var0.canceledAt = var4;
                    var7 = var6.Date;
                    var12 = var1.current_period_start;
                    var5 = var7.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var7
                        }
                    });
                    var13 = var5;
                    var4 = new var13[var7](var12, var11);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var0.currentPeriodStart = var4;
                    var7 = var6.Date;
                    var12 = var1.current_period_end;
                    var5 = var7.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var7
                        }
                    });
                    var13 = var5;
                    var4 = new var13[var7](var12, var11);
                    var4 = var4 instanceof Object ? var4 : var5;
                    var0.currentPeriodEnd = var4;
                    var4 = var1.status;
                    var0.status = var4;
                    var4 = var1.payment_source_id;
                    var0.paymentSourceId = var4;
                    var4 = var1.payment_gateway;
                    var0.paymentGateway = var4;
                    var4 = var1.payment_gateway_plan_id;
                    var0.paymentGatewayPlanId = var4;
                    var4 = var1.payment_gateway_subscription_id;
                    var0.paymentGatewaySubscriptionId = var4;
                    var4 = var1.trial_id;
                    var0.trialId = var4;
                    var4 = var1.trial_ends_at;
                    var5 = var3 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun25353_ip = 312;
                        continue _fun25353
                    }
                case 280:
                    var8 = var6.Date;
                    var12 = var1.trial_ends_at;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var8
                        }
                    });
                    var13 = var7;
                    var5 = new var13[var8](var12, var11);
                    var4 = var5 instanceof Object ? var5 : var7;
                case 312:
                    var0.trialEndsAt = var4;
                    var8 = var1.items;
                    var7 = var8.map;
                    var5 = _closure1_slot21;
                    var5 = var7.bind(var8)(var5);
                    var0.items = var5;
                    var5 = var1.renewal_mutations;
                    var7 = var3 != var5;
                    var5 = null;
                    if (!var7) {
                        _fun25353_ip = 413;
                        continue _fun25353
                    }
                case 360:
                    var7 = {};
                    var8 = var1.renewal_mutations;
                    var10 = var8.items;
                    var9 = var10.map;
                    var8 = _closure1_slot21;
                    var8 = var9.bind(var10)(var8);
                    var7.items = var8;
                    var8 = var1.renewal_mutations;
                    var8 = var8.payment_gateway_plan_id;
                    var7.paymentGatewayPlanId = var8;
                    var5 = var7;
                case 413:
                    var0.renewalMutations = var5;
                    var5 = var1.streak_started_at;
                    var7 = var3 != var5;
                    var5 = null;
                    if (!var7) {
                        _fun25353_ip = 465;
                        continue _fun25353
                    }
                case 433:
                    var9 = var6.Date;
                    var12 = var1.streak_started_at;
                    var8 = var9.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var9
                        }
                    });
                    var13 = var8;
                    var7 = new var13[var9](var12, var11);
                    var5 = var7 instanceof Object ? var7 : var8;
                case 465:
                    var0.streakStartedAt = var5;
                    var5 = var1.currency;
                    var0.currency = var5;
                    var5 = var1.pause_ends_at;
                    var7 = var3 != var5;
                    var5 = null;
                    if (!var7) {
                        _fun25353_ip = 528;
                        continue _fun25353
                    }
                case 496:
                    var8 = var6.Date;
                    var12 = var1.pause_ends_at;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var8
                        }
                    });
                    var13 = var7;
                    var6 = new var13[var8](var12, var11);
                    var5 = var6 instanceof Object ? var6 : var7;
                case 528:
                    var0.pauseEndsAt = var5;
                    var5 = var1.pause_reason;
                    var0.pauseReason = var5;
                    var5 = var1.metadata;
                    var0.metadata = var5;
                    var5 = var1.use_storekit_resubscribe;
                    var0.useStorekitResubscribe = var5;
                    var5 = var1.price;
                    var0.price = var5;
                    var5 = var1.user_id;
                    var0.userId = var5;
                    var5 = var1.latest_invoice;
                    if (!(var3 == var5)) {
                        _fun25353_ip = 603;
                        continue _fun25353
                    }
                case 599:
                    var5 = {};
                    _fun25353_ip = 634;
                    continue _fun25353;
                case 603:
                    var6 = {};
                    var9 = _closure1_slot9;
                    var8 = var9.createInvoiceFromServer;
                    var7 = var1.latest_invoice;
                    var7 = var8.bind(var9)(var7);
                    var6.latestInvoice = var7;
                    var5 = var6;
                case 634:
                    var12 = var0;
                    var11 = var5;
                    var5 = copyDataProperties(var12, var11);
                    var5 = var1.eligible_payment_gateways;
                    var7 = var3 != var5;
                    var6 = null;
                    if (!var7) {
                        _fun25353_ip = 662;
                        continue _fun25353
                    }
                case 659:
                    var6 = var5;
                case 662:
                    var5 = 'eligiblePaymentGateways';
                    var0[var5] = var6;
                    var5 = var1.price_change;
                    var5 = var3 != var5;
                    var3 = null;
                    if (!var5) {
                        _fun25353_ip = 707;
                        continue _fun25353
                    }
                case 686:
                    var5 = _closure1_slot8;
                    var4 = var5.createFromServer;
                    var1 = var1.price_change;
                    var3 = var4.bind(var5)(var1);
                case 707:
                    var1 = 'priceChange';
                    var0[var1] = var3;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var1;
                    var12 = var0;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var5.value = var0;
        var0 = new Array(1);
        var0[0] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'records/SubscriptionRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    var2.SubscriptionRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 3078, 3079, 660, 3081, 1615, 3082, 44, 478, 1628, 2]);