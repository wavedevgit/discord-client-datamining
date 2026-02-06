// modules/premium/promotions/PromotionsManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun114244: for (var _fun114244_ip = 0;;) switch (_fun114244_ip) {
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
            case 72: // try_end0
                _fun114244_ip = 76;
                continue _fun114244;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PremiumTypes;
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EntitlementTypes;
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SubscriptionTypes;
    var _closure1_slot12 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun114248: for (var _fun114248_ip = 0;;) switch (_fun114248_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot4;
                    var2 = _closure2_slot1;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot6;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun114248_ip = 84;
                        continue _fun114248
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun114248_ip = 118;
                    continue _fun114248;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = {};
                    var5 = var0.onPostConnectionOpen;
                    var4 = var5.bind;
                    var4 = var4.bind(var5)(var0);
                    var2.POST_CONNECTION_OPEN = var4;
                    var5 = var0.onPostConnectionOpen;
                    var4 = var5.bind;
                    var4 = var4.bind(var5)(var0);
                    var2.EXPERIMENTS_FETCH_SUCCESS = var4;
                    var5 = var0.onSubscriptionUpdated;
                    var4 = var5.bind;
                    var4 = var4.bind(var5)(var0);
                    var2.BILLING_SUBSCRIPTION_UPDATE_SUCCESS = var4;
                    var5 = var0.onOfferUpdated;
                    var4 = var5.bind;
                    var4 = var4.bind(var5)(var0);
                    var2.BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS = var4;
                    var5 = var0.onOfferUpdated;
                    var4 = var5.bind;
                    var4 = var4.bind(var5)(var0);
                    var2.BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS = var4;
                    var5 = var0.onVCRedeemed;
                    var4 = var5.bind;
                    var4 = var4.bind(var5)(var0);
                    var2.VIRTUAL_CURRENCY_REDEEM_SUCCESS = var4;
                    var0.actions = var2;
                    var2 = _closure1_slot3;
                    var1 = function*() { // Environment: var1
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun114250: for (var _fun114250_ip = 0;;) switch (_fun114250_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun114250_ip = 116;
                                        continue _fun114250
                                    }
                                case 7:
                                    var3 = _closure1_slot9;
                                    var1 = var3.getCurrentUser;
                                    var6 = var1.bind(var3)();
                                    var4 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 10;
                                    var3 = var3[var1];
                                    var1 = undefined;
                                    var5 = var4.bind(var1)(var3);
                                    var4 = var5.isPremiumExactly;
                                    var3 = _closure1_slot10;
                                    var3 = var3.TIER_2;
                                    var3 = var4.bind(var5)(var6, var3);
                                    if (var3) {
                                        _fun114250_ip = 113;
                                        continue _fun114250
                                    }
                                case 70:
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var2 = 11;
                                    var2 = var4[var2];
                                    var3 = var3.bind(var1)(var2);
                                    var2 = var3.maybeFetchActiveBogoPromotion;
                                    var2 = var2.bind(var3)();
                                    SaveGenerator(address = 104);
                                case 102:
                                    return var2;
                                case 104:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                                    if (!var3) {
                                        _fun114250_ip = 113;
                                        continue _fun114250
                                    }
                                case 110:
                                    return var2;
                                case 113:
                                    return var1;
                                case 116:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var0.maybeFetchBogoPromotion = var1;
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot5;
        var4 = {};
        var6 = 'onPostConnectionOpen';
        var4.key = var6;
        var6 = _closure1_slot3;
        var0 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun114252: for (var _fun114252_ip = 0;;) switch (_fun114252_ip) {
                    case 0:
                        StartGenerator();
                        var3 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun114252_ip = 71;
                            continue _fun114252
                        }
                    case 10:
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 12;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var1);
                        var1 = var4.maybeFetchActivePromotions;
                        var1 = var1.bind(var4)();
                        var1 = var3.maybeFetchBogoPromotion;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 59);
                    case 57:
                        return var1;
                    case 59:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun114252_ip = 68;
                            continue _fun114252
                        }
                    case 65:
                        return var2;
                    case 68:
                        return var1;
                    case 71:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var6.bind(var2)(var0);
        var _closure2_slot0 = var0;
        var0 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'onSubscriptionUpdated';
        var4.key = var6;
        var6 = function arg0() {
            _fun114254: for (var _fun114254_ip = 0;;) switch (_fun114254_ip) {
                case 0:
                    var0 = arg0;
                    var0 = var0.subscription;
                    var2 = var0.type;
                    var1 = _closure1_slot12;
                    var1 = var1.PREMIUM;
                    if (!(var2 === var1)) {
                        _fun114254_ip = 66;
                        continue _fun114254
                    }
                case 31:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.maybeFetchActivePromotions;
                    var0 = false;
                    var0 = var1.bind(var2)(var0);
                case 66:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'onOfferUpdated';
        var4.key = var6;
        var6 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 12;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.maybeFetchActivePromotions;
            var1 = false;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'onVCRedeemed';
        var4.key = var6;
        var5 = function arg0() {
            _fun114256: for (var _fun114256_ip = 0;;) switch (_fun114256_ip) {
                case 0:
                    var0 = arg0;
                    var2 = var0.entitlements;
                    var1 = var2.some;
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = _closure1_slot11;
                        var0 = var0.FRACTIONAL_REDEMPTION;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    if (!var0) {
                        _fun114256_ip = 70;
                        continue _fun114256
                    }
                case 32:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.maybeFetchActivePromotions;
                    var0 = false;
                    var0 = var1.bind(var2)(var0);
                case 70:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/promotions/PromotionsManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 1621, 1623, 660, 483, 3111, 7101, 7122, 4300, 2]);