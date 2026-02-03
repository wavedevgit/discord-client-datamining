// records/GiftCodeRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun56538: for (var _fun56538_ip = 0;;) switch (_fun56538_ip) {
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
                _fun56538_ip = 74;
                continue _fun56538;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var1 = global;
    var9 = var1.Object;
    var7 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var8.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var _closure1_slot7 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var7 = 6;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 7;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.PremiumSubscriptionSKUToPremiumType;
    var _closure1_slot10 = var7;
    var8 = var1.Object;
    var7 = var8.freeze;
    var1 = {
        'PAYMENT_SOURCE_REQUIRED': 1,
        'EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED': 2,
        'NOT_SELF_REDEEMABLE': 4
    };
    var1 = var7.bind(var8)(var1);
    var _closure1_slot11 = var1;
    var3 = function(arg0) { // Environment: var3
        var4 = function arg0() {
            _fun56542: for (var _fun56542_ip = 0;;) switch (_fun56542_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun56542_ip = 65;
                        continue _fun56542
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun56542_ip = 103;
                    continue _fun56542;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = var1.userId;
                    var0.userId = var2;
                    var2 = var1.code;
                    var0.code = var2;
                    var2 = var1.skuId;
                    var0.skuId = var2;
                    var2 = var1.applicationId;
                    var0.applicationId = var2;
                    var2 = var1.uses;
                    var0.uses = var2;
                    var2 = var1.maxUses;
                    var0.maxUses = var2;
                    var2 = var1.expiresAt;
                    var0.expiresAt = var2;
                    var2 = var1.redeemed;
                    var0.redeemed = var2;
                    var2 = var1.storeListingId;
                    var0.storeListingId = var2;
                    var2 = var1.subscriptionPlanId;
                    var0.subscriptionPlanId = var2;
                    var2 = var1.subscriptionPlan;
                    var0.subscriptionPlan = var2;
                    var2 = var1.revoked;
                    var0.revoked = var2;
                    var2 = var1.entitlementBranches;
                    var0.entitlementBranches = var2;
                    var2 = var1.flags;
                    var0.flags = var2;
                    var2 = var1.subscriptionTrial;
                    var0.subscriptionTrial = var2;
                    var2 = var1.promotion;
                    var0.promotion = var2;
                    var1 = var1.giftStyle;
                    var0.giftStyle = var1;
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
        var1 = 'isExpired';
        var5.key = var1;
        var1 = function() {
            _fun56543: for (var _fun56543_ip = 0;;) switch (_fun56543_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.expiresAt;
                    var0 = null;
                    var0 = var0 != var3;
                    if (!var0) {
                        _fun56543_ip = 58;
                        continue _fun56543
                    }
                case 18:
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var4.bind(var2)(var1);
                    var2 = var1.bind(var2)();
                    var1 = var2.isAfter;
                    var0 = var1.bind(var2)(var3);
                case 58:
                    return var0;
            }
        };
        var5.value = var1;
        var1 = new Array(10);
        var1[0] = var5;
        var5 = {};
        var6 = 'hasMultipleCopies';
        var5.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.maxUses;
            var0 = 1;
            var0 = var1 > var0;
            return var0;
        };
        var5.get = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'isClaimed';
        var5.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.uses;
            var0 = var0.maxUses;
            var0 = var1 >= var0;
            return var0;
        };
        var5.get = var6;
        var1[2] = var5;
        var5 = {};
        var6 = 'remainingUses';
        var5.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.maxUses;
            var0 = var0.uses;
            var0 = var1 - var0;
            return var0;
        };
        var5.get = var6;
        var1[3] = var5;
        var5 = {};
        var6 = 'isSubscription';
        var5.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.subscriptionPlanId;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var5.get = var6;
        var1[4] = var5;
        var5 = {};
        var6 = 'premiumSubscriptionType';
        var5.key = var6;
        var6 = function() {
            _fun56548: for (var _fun56548_ip = 0;;) switch (_fun56548_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isSubscription;
                    if (!var0) {
                        _fun56548_ip = 29;
                        continue _fun56548
                    }
                case 12:
                    var2 = _closure1_slot10;
                    var1 = var1.skuId;
                    var0 = var2[var1];
                case 29:
                    if (var0) {
                        _fun56548_ip = 34;
                        continue _fun56548
                    }
                case 32:
                    var0 = null;
                case 34:
                    return var0;
            }
        };
        var5.get = var6;
        var1[5] = var5;
        var5 = {};
        var6 = 'isSelfRedeemable';
        var5.key = var6;
        var6 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.hasFlag;
            var1 = this;
            var1 = var1.flags;
            var0 = _closure1_slot11;
            var0 = var0.NOT_SELF_REDEEMABLE;
            var0 = var2.bind(var3)(var1, var0);
            var0 = !var0;
            return var0;
        };
        var5.get = var6;
        var1[6] = var5;
        var5 = {};
        var6 = 'isExistingPremiumSubscriptionDisallowed';
        var5.key = var6;
        var6 = function() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 10;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.hasFlag;
            var1 = this;
            var1 = var1.flags;
            var0 = _closure1_slot11;
            var0 = var0.EXISTING_PREMIUM_SUBSCRIPTION_DISALLOWED;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5.get = var6;
        var1[7] = var5;
        var5 = {};
        var6 = 'analyticsData';
        var5.key = var6;
        var6 = function() {
            var1 = this;
            var0 = {};
            var2 = var1.code;
            var0.gift_code = var2;
            var1 = var1.maxUses;
            var0.gift_code_max_uses = var1;
            return var0;
        };
        var5.get = var6;
        var1[8] = var5;
        var5 = {};
        var6 = 'toString';
        var5.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.code;
            return var0;
        };
        var5.value = var6;
        var1[9] = var5;
        var5 = {};
        var6 = 'createFromServer';
        var5.key = var6;
        var0 = function arg0() {
            _fun56553: for (var _fun56553_ip = 0;;) switch (_fun56553_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure2_slot0;
                    var0 = {};
                    var4 = var3.user;
                    var1 = null;
                    var5 = var1 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun56553_ip = 38;
                        continue _fun56553
                    }
                case 28:
                    var5 = var3.user;
                    var4 = var5.id;
                case 38:
                    var0.userId = var4;
                    var4 = var3.code;
                    var0.code = var4;
                    var4 = var3.sku_id;
                    var0.skuId = var4;
                    var4 = var3.application_id;
                    var0.applicationId = var4;
                    var4 = var3.uses;
                    var0.uses = var4;
                    var4 = var3.max_uses;
                    var0.maxUses = var4;
                    var4 = var3.store_listing;
                    var5 = var1 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun56553_ip = 120;
                        continue _fun56553
                    }
                case 109:
                    var5 = var3.store_listing;
                    var4 = var5.id;
                case 120:
                    var0.storeListingId = var4;
                    var4 = var3.expires_at;
                    var5 = var1 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun56553_ip = 176;
                        continue _fun56553
                    }
                case 140:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var5 = 9;
                    var5 = var7[var5];
                    var7 = undefined;
                    var6 = var6.bind(var7)(var5);
                    var5 = var3.expires_at;
                    var4 = var6.bind(var7)(var5);
                case 176:
                    var0.expiresAt = var4;
                    var4 = var3.redeemed;
                    var0.redeemed = var4;
                    var4 = var3.subscription_plan;
                    if (!(var1 == var4)) {
                        _fun56553_ip = 210;
                        continue _fun56553
                    }
                case 202:
                    var4 = var3.subscription_plan_id;
                    _fun56553_ip = 221;
                    continue _fun56553;
                case 210:
                    var5 = var3.subscription_plan;
                    var4 = var5.id;
                case 221:
                    var0.subscriptionPlanId = var4;
                    var4 = var3.subscription_plan;
                    var5 = var1 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun56553_ip = 265;
                        continue _fun56553
                    }
                case 241:
                    var7 = _closure1_slot9;
                    var6 = var7.createFromServer;
                    var5 = var3.subscription_plan;
                    var4 = var6.bind(var7)(var5);
                case 265:
                    var0.subscriptionPlan = var4;
                    var4 = false;
                    var0.revoked = var4;
                    var4 = var3.entitlement_branches;
                    var5 = var1 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun56553_ip = 298;
                        continue _fun56553
                    }
                case 292:
                    var4 = var3.entitlement_branches;
                case 298:
                    var0.entitlementBranches = var4;
                    var4 = var3.flags;
                    var5 = var1 != var4;
                    var4 = 0;
                    if (!var5) {
                        _fun56553_ip = 322;
                        continue _fun56553
                    }
                case 317:
                    var4 = var3.flags;
                case 322:
                    var0.flags = var4;
                    var4 = var3.gift_style;
                    var0.giftStyle = var4;
                    var4 = var3.subscription_trial;
                    var5 = var1 != var4;
                    var4 = null;
                    if (!var5) {
                        _fun56553_ip = 423;
                        continue _fun56553
                    }
                case 352:
                    var5 = {};
                    var6 = var3.subscription_trial;
                    var6 = var6.id;
                    var5.id = var6;
                    var6 = var3.subscription_trial;
                    var6 = var6.interval;
                    var5.interval = var6;
                    var6 = var3.subscription_trial;
                    var6 = var6.interval_count;
                    var5.intervalCount = var6;
                    var6 = var3.subscription_trial;
                    var6 = var6.sku_id;
                    var5.skuId = var6;
                    var4 = var5;
                case 423:
                    var0.subscriptionTrial = var4;
                    var4 = var3.promotion;
                    var4 = var1 != var4;
                    var1 = null;
                    if (!var4) {
                        _fun56553_ip = 467;
                        continue _fun56553
                    }
                case 443:
                    var5 = _closure1_slot8;
                    var4 = var5.createFromServer;
                    var3 = var3.promotion;
                    var1 = var4.bind(var5)(var3);
                case 467:
                    var0.promotion = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var9 = var1;
                    var8 = var0;
                    var0 = new var9[var2](var8, var7);
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
    var3 = var3.bind(var0)(var4);
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'records/GiftCodeRecord.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.GiftCodeFlags = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1621, 6855, 3101, 1615, 3036, 1384, 2]);