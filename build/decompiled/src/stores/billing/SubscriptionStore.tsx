// stores/billing/SubscriptionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = function() {
        _fun25267: for (var _fun25267_ip = 0;;) switch (_fun25267_ip) {
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
                _fun25267_ip = 74;
                continue _fun25267;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot23 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot23 = var0;
    var0 = function arg0() {
        _fun25270: for (var _fun25270_ip = 0;;) switch (_fun25270_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.activeSubscriptions;
                var1 = var1.record;
                var _closure2_slot0 = var1;
                var3 = var2.findIndex;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.id;
                    var0 = _closure2_slot0;
                    var0 = var0.id;
                    var0 = var1 === var0;
                    return var0;
                };
                var3 = var3.bind(var2)(var0);
                var0 = -1;
                if (!(var0 !== var3)) {
                    _fun25270_ip = 122;
                    continue _fun25270
                }
            case 47:
                var0 = new Array(0);
                var7 = 0;
                var9 = var0;
                var8 = var2;
                var4 = arraySpread(var9, var8, var7);
                var6 = _closure1_slot25;
                var5 = undefined;
                var5 = var6.bind(var5)(var1);
                if (!var5) {
                    _fun25270_ip = 99;
                    continue _fun25270
                }
            case 80:
                var5 = var1.status;
                var4 = _closure1_slot8;
                var4 = var4.ENDED;
                if (!(var5 === var4)) {
                    _fun25270_ip = 116;
                    continue _fun25270
                }
            case 99:
                var5 = var0.splice;
                var4 = 1;
                var4 = var5.bind(var0)(var3, var4);
                _fun25270_ip = 120;
                continue _fun25270;
            case 116:
                var0[var3] = var1;
            case 120:
                return var0;
            case 122:
                var0 = new Array(1);
                var0[0] = var1;
                var7 = 1;
                var9 = var0;
                var8 = var2;
                var1 = arraySpread(var9, var8, var7);
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var4 = function() {
        var0 = null;
        _closure1_slot11 = var0;
        _closure1_slot12 = var0;
        _closure1_slot13 = var0;
        _closure1_slot14 = var0;
        _closure1_slot15 = var0;
        var2 = false;
        _closure1_slot16 = var2;
        _closure1_slot17 = var0;
        _closure1_slot18 = var2;
        _closure1_slot19 = var2;
        _closure1_slot21 = var2;
        _closure1_slot22 = var0;
        var0 = undefined;
        return var0;
    };
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.status;
        var0 = _closure1_slot8;
        var0 = var0.UNPAID;
        var0 = var1 !== var0;
        return var0;
    };
    var _closure1_slot25 = var0;
    var1 = function arg0, arg1() {
        _fun25274: for (var _fun25274_ip = 0;;) switch (_fun25274_ip) {
            case 0:
                var12 = arg0;
                var11 = arg1;
                var0 = arguments[2];
                var10 = undefined;
                if (!(var0 === var10)) {
                    _fun25274_ip = 17;
                    continue _fun25274
                }
            case 15:
                var0 = true;
            case 17:
                if (var0) {
                    _fun25274_ip = 29;
                    continue _fun25274
                }
            case 23:
                var8 = _closure1_slot11;
                _fun25274_ip = 33;
                continue _fun25274;
            case 29:
                var8 = _closure1_slot12;
            case 33:
                var0 = null;
                if (!(var0 != var8)) {
                    _fun25274_ip = 116;
                    continue _fun25274
                }
            case 39:
                var6 = var8;
                for (var3 in var6)
                    case 50: {
                        case 59: var1 = var3;
                        var1 = var8[var1];
                        var13 = var1.userId;
                        var14 = _closure1_slot7;
                        var2 = var14.getId;
                        var2 = var2.bind(var14)();
                        if (!(var13 === var2)) {
                            _fun25274_ip = 112;
                            continue _fun25274
                        }
                        case 89: var2 = var1.type;
                        if (var2 !== var12) {
                            _fun25274_ip = 50;
                            continue _fun25274
                        }
                        case 98: if (!(var0 != var11)) {
                            _fun25274_ip = 110;
                            continue _fun25274
                        }
                        case 102: var2 = var11.bind(var10)(var1);
                        if (!var2) {
                            _fun25274_ip = 50;
                            continue _fun25274
                        }
                        case 110: return var1;
                        case 112: return var0;
                    }
            case 114:
                return var0;
            case 116:
                return var0;
        }
    };
    var _closure1_slot26 = var1;
    var0 = global;
    var10 = var0.Object;
    var8 = var10.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var10)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.isNoneSubscription;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.SubscriptionRecord;
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 8;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var8 = var3.SubscriptionStatusTypes;
    var _closure1_slot8 = var8;
    var3 = var3.SubscriptionTypes;
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.REVERSE_TRIAL_IDS;
    var _closure1_slot10 = var3;
    var3 = null;
    var _closure1_slot11 = var3;
    var _closure1_slot12 = var3;
    var _closure1_slot13 = var3;
    var _closure1_slot14 = var3;
    var _closure1_slot15 = var3;
    var8 = false;
    var _closure1_slot16 = var8;
    var _closure1_slot17 = var3;
    var _closure1_slot18 = var8;
    var _closure1_slot19 = var8;
    var _closure1_slot20 = var3;
    var _closure1_slot21 = var8;
    var _closure1_slot22 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var9
        var3 = function() {
            _fun25276: for (var _fun25276_ip = 0;;) switch (_fun25276_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot0;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot3;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot2;
                    var0 = _closure1_slot23;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun25276_ip = 69;
                        continue _fun25276
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun25276_ip = 105;
                    continue _fun25276;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot1;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var1 = var2.waitFor;
            var0 = _closure1_slot7;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(19);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasFetchedSubscriptions';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot11;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasFetchedMostRecentPremiumTypeSubscription';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot16;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hasFetchedPreviousPremiumTypeSubscription';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getPremiumSubscription';
        var4.key = var6;
        var6 = function() {
            _fun25281: for (var _fun25281_ip = 0;;) switch (_fun25281_ip) {
                case 0:
                    var4 = arguments[0];
                    var3 = undefined;
                    if (!(var4 === var3)) {
                        _fun25281_ip = 11;
                        continue _fun25281
                    }
                case 9:
                    var4 = true;
                case 11:
                    var2 = _closure1_slot26;
                    var0 = _closure1_slot9;
                    var1 = var0.PREMIUM;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot5;
                        var0 = arg0;
                        var1 = var0.planId;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var0 = !var0;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var1, var0, var4);
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getPremiumTypeSubscription';
        var4.key = var6;
        var6 = function() {
            _fun25283: for (var _fun25283_ip = 0;;) switch (_fun25283_ip) {
                case 0:
                    var3 = arguments[0];
                    var2 = undefined;
                    if (!(var3 === var2)) {
                        _fun25283_ip = 11;
                        continue _fun25283
                    }
                case 9:
                    var3 = true;
                case 11:
                    var1 = _closure1_slot26;
                    var0 = _closure1_slot9;
                    var0 = var0.PREMIUM;
                    var0 = var1.bind(var2)(var0, var2, var3);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'inReverseTrial';
        var4.key = var6;
        var6 = function() {
            _fun25284: for (var _fun25284_ip = 0;;) switch (_fun25284_ip) {
                case 0:
                    var4 = _closure1_slot26;
                    var0 = _closure1_slot9;
                    var3 = var0.PREMIUM;
                    var1 = undefined;
                    var0 = true;
                    var3 = var4.bind(var1)(var3, var1, var0);
                    var4 = null;
                    var0 = var4 != var3;
                    if (!var0) {
                        _fun25284_ip = 95;
                        continue _fun25284
                    }
                case 37:
                    var1 = var3.trialId;
                    var1 = var4 != var1;
                    if (!var1) {
                        _fun25284_ip = 92;
                        continue _fun25284
                    }
                case 50:
                    var6 = _closure1_slot10;
                    var5 = var6.includes;
                    var2 = var3.trialId;
                    var2 = var5.bind(var6)(var2);
                    var5 = !var2;
                    var2 = !var5;
                    if (var5) {
                        _fun25284_ip = 89;
                        continue _fun25284
                    }
                case 79:
                    var3 = var3.paymentSourceId;
                    var2 = var4 == var3;
                case 89:
                    var1 = var2;
                case 92:
                    var0 = var1;
                case 95:
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getSubscriptions';
        var4.key = var6;
        var6 = function() {
            _fun25285: for (var _fun25285_ip = 0;;) switch (_fun25285_ip) {
                case 0:
                    var0 = arguments[0];
                    var1 = undefined;
                    if (!(var0 === var1)) {
                        _fun25285_ip = 11;
                        continue _fun25285
                    }
                case 9:
                    var0 = true;
                case 11:
                    if (var0) {
                        _fun25285_ip = 23;
                        continue _fun25285
                    }
                case 17:
                    var0 = _closure1_slot11;
                    _fun25285_ip = 27;
                    continue _fun25285;
                case 23:
                    var0 = _closure1_slot12;
                case 27:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getSubscriptionById';
        var4.key = var6;
        var6 = function arg0() {
            _fun25286: for (var _fun25286_ip = 0;;) switch (_fun25286_ip) {
                case 0:
                    var4 = _closure1_slot11;
                    var2 = null;
                    var3 = var2 == var4;
                    var1 = undefined;
                    if (var3) {
                        _fun25286_ip = 25;
                        continue _fun25286
                    }
                case 18:
                    var3 = arg0;
                    var1 = var4[var3];
                case 25:
                    var2 = var2 != var1;
                    var0 = undefined;
                    if (!var2) {
                        _fun25286_ip = 37;
                        continue _fun25286
                    }
                case 34:
                    var0 = var1;
                case 37:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getActiveGuildSubscriptions';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot14;
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getActiveApplicationSubscriptions';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getSubscriptionForPlanIds';
        var4.key = var6;
        var6 = function arg0() {
            _fun25289: for (var _fun25289_ip = 0;;) switch (_fun25289_ip) {
                case 0:
                    var1 = arguments[1];
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun25289_ip = 13;
                        continue _fun25289
                    }
                case 11:
                    var1 = true;
                case 13:
                    var _closure3_slot0 = var0;
                    var3 = global;
                    var5 = var3.Set;
                    var0 = var5.prototype;
                    var4 = Object.create(var0, {
                        constructor: {
                            value: var5
                        }
                    });
                    var6 = arg0;
                    var7 = var4;
                    var0 = new var7[var5](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var4;
                    _closure3_slot0 = var0;
                    if (var1) {
                        _fun25289_ip = 64;
                        continue _fun25289
                    }
                case 58:
                    var5 = _closure1_slot11;
                    _fun25289_ip = 68;
                    continue _fun25289;
                case 64:
                    var5 = _closure1_slot12;
                case 68:
                    var1 = null;
                    var4 = var1 == var5;
                    var0 = null;
                    if (var4) {
                        _fun25289_ip = 125;
                        continue _fun25289
                    }
                case 79:
                    var4 = var3.Object;
                    var3 = var4.values;
                    var4 = var3.bind(var4)(var5);
                    var3 = var4.find;
                    var2 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var2 = var0.items;
                        var1 = var2.some;
                        var0 = function(arg0) { // Environment: var0
                            var2 = _closure3_slot0;
                            var1 = var2.has;
                            var0 = arg0;
                            var0 = var0.planId;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var3 = var1 != var2;
                    var1 = null;
                    if (!var3) {
                        _fun25289_ip = 122;
                        continue _fun25289
                    }
                case 119:
                    var1 = var2;
                case 122:
                    var0 = var1;
                case 125:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getMostRecentPremiumTypeSubscription';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getPreviousPremiumTypeSubscription';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot17;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getIsSubscriptionEligibleForReward';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getIsFetchingSubscriptionRewardEligibility';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot19;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getIsFetchingMostRecentSubscription';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot21;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getLastLazyPerkSync';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot22;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getPremiumGroupSubscription';
        var4.key = var6;
        var5 = function() {
            var4 = _closure1_slot26;
            var0 = _closure1_slot9;
            var3 = var0.PREMIUM;
            var2 = undefined;
            var1 = function(arg0) { // Environment: var0
                var0 = arg0;
                var0 = var0.hasAnyPremiumGroup;
                return var0;
            };
            var0 = true;
            var0 = var4.bind(var2)(var3, var1, var0);
            return var0;
        };
        var4.value = var5;
        var0[18] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'SubscriptionStore';
    var8.displayName = var3;
    var3 = 11;
    var3 = var6[var3];
    var13 = var7.bind(var0)(var3);
    var3 = {};
    var10 = function arg0() {
        var0 = arg0;
        var8 = var0.subscriptions;
        var1 = var0.lastLazyPerkSync;
        var5 = {};
        var _closure2_slot0 = var5;
        var4 = {};
        var _closure2_slot1 = var4;
        var3 = new Array(0);
        var _closure2_slot2 = var3;
        var2 = new Array(0);
        var _closure2_slot3 = var2;
        var9 = _closure1_slot7;
        var7 = var9.getId;
        var7 = var7.bind(var9)();
        var _closure2_slot4 = var7;
        var7 = var8.forEach;
        var6 = function(arg0) { // Environment: var6
            _fun25301: for (var _fun25301_ip = 0;;) switch (_fun25301_ip) {
                case 0:
                    var4 = arg0;
                    var2 = var4.user_id;
                    var1 = _closure2_slot4;
                    if (!(var2 === var1)) {
                        _fun25301_ip = 200;
                        continue _fun25301
                    }
                case 23:
                    var2 = _closure1_slot6;
                    var1 = var2.createFromServer;
                    var2 = var1.bind(var2)(var4);
                    var4 = _closure2_slot0;
                    var1 = var2.id;
                    var4[var1] = var2;
                    var4 = _closure1_slot25;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var2);
                    if (!var1) {
                        _fun25301_ip = 200;
                        continue _fun25301
                    }
                case 71:
                    var4 = _closure2_slot1;
                    var1 = var2.id;
                    var4[var1] = var2;
                    var4 = var2.type;
                    var1 = _closure1_slot9;
                    var1 = var1.GUILD;
                    var1 = var4 === var1;
                    if (!var1) {
                        _fun25301_ip = 125;
                        continue _fun25301
                    }
                case 106:
                    var5 = var2.status;
                    var4 = _closure1_slot8;
                    var4 = var4.ENDED;
                    var1 = var5 !== var4;
                case 125:
                    if (!var1) {
                        _fun25301_ip = 142;
                        continue _fun25301
                    }
                case 128:
                    var4 = _closure2_slot2;
                    var1 = var4.push;
                    var1 = var1.bind(var4)(var2);
                case 142:
                    var4 = var2.type;
                    var1 = _closure1_slot9;
                    var1 = var1.APPLICATION;
                    var1 = var4 === var1;
                    if (!var1) {
                        _fun25301_ip = 183;
                        continue _fun25301
                    }
                case 164:
                    var4 = var2.status;
                    var3 = _closure1_slot8;
                    var3 = var3.ENDED;
                    var1 = var4 !== var3;
                case 183:
                    if (!var1) {
                        _fun25301_ip = 200;
                        continue _fun25301
                    }
                case 186:
                    var1 = _closure2_slot3;
                    var0 = var1.push;
                    var0 = var0.bind(var1)(var2);
                case 200:
                    var0 = undefined;
                    return var0;
            }
        };
        var6 = var7.bind(var8)(var6);
        _closure1_slot11 = var5;
        _closure1_slot12 = var4;
        _closure1_slot14 = var3;
        _closure1_slot15 = var2;
        _closure1_slot22 = var1;
        var0 = undefined;
        return var0;
    };
    var3.BILLING_SUBSCRIPTION_FETCH_SUCCESS = var10;
    var10 = function arg0() {
        _fun25302: for (var _fun25302_ip = 0;;) switch (_fun25302_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.subscription;
                var2 = var3.user_id;
                var4 = _closure1_slot7;
                var0 = var4.getId;
                var0 = var0.bind(var4)();
                if (!(var2 === var0)) {
                    _fun25302_ip = 248;
                    continue _fun25302
                }
            case 39:
                var2 = _closure1_slot6;
                var0 = var2.createFromServer;
                var4 = var0.bind(var2)(var3);
                var0 = {};
                var7 = _closure1_slot11;
                var8 = var0;
                var2 = copyDataProperties(var8, var7);
                var2 = var4.id;
                var0[var2] = var4;
                _closure1_slot11 = var0;
                var0 = _closure1_slot25;
                var3 = undefined;
                var0 = var0.bind(var3)(var4);
                if (!var0) {
                    _fun25302_ip = 122;
                    continue _fun25302
                }
            case 95:
                var0 = {};
                var7 = _closure1_slot12;
                var8 = var0;
                var2 = copyDataProperties(var8, var7);
                var2 = var4.id;
                var0[var2] = var4;
                _closure1_slot12 = var0;
            case 122:
                var0 = _closure1_slot14;
                var2 = null;
                var0 = var2 != var0;
                if (!var0) {
                    _fun25302_ip = 154;
                    continue _fun25302
                }
            case 135:
                var6 = var4.type;
                var5 = _closure1_slot9;
                var5 = var5.GUILD;
                var0 = var6 === var5;
            case 154:
                if (!var0) {
                    _fun25302_ip = 186;
                    continue _fun25302
                }
            case 157:
                var5 = _closure1_slot24;
                var0 = {};
                var6 = _closure1_slot14;
                var0.activeSubscriptions = var6;
                var0.record = var4;
                var0 = var5.bind(var3)(var0);
                _closure1_slot14 = var0;
            case 186:
                var0 = _closure1_slot15;
                var0 = var2 != var0;
                if (!var0) {
                    _fun25302_ip = 216;
                    continue _fun25302
                }
            case 197:
                var5 = var4.type;
                var2 = _closure1_slot9;
                var2 = var2.APPLICATION;
                var0 = var5 === var2;
            case 216:
                if (!var0) {
                    _fun25302_ip = 248;
                    continue _fun25302
                }
            case 219:
                var2 = _closure1_slot24;
                var0 = {};
                var5 = _closure1_slot15;
                var0.activeSubscriptions = var5;
                var0.record = var4;
                var0 = var2.bind(var3)(var0);
                _closure1_slot14 = var0;
            case 248:
                var0 = undefined;
                return var0;
        }
    };
    var3.BILLING_SUBSCRIPTION_UPDATE_SUCCESS = var10;
    var10 = function() {
        var0 = true;
        _closure1_slot21 = var0;
        var0 = undefined;
        return var0;
    };
    var3.BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START = var10;
    var10 = function arg0() {
        _fun25304: for (var _fun25304_ip = 0;;) switch (_fun25304_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.subscription;
                var0 = true;
                _closure1_slot16 = var0;
                var0 = false;
                _closure1_slot21 = var0;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun25304_ip = 73;
                    continue _fun25304
                }
            case 30:
                var3 = var4.user_id;
                var5 = _closure1_slot7;
                var2 = var5.getId;
                var2 = var2.bind(var5)();
                if (!(var3 === var2)) {
                    _fun25304_ip = 77;
                    continue _fun25304
                }
            case 54:
                var3 = _closure1_slot6;
                var2 = var3.createFromServer;
                var2 = var2.bind(var3)(var4);
                _closure1_slot13 = var2;
            case 73:
                var2 = undefined;
                return var2;
            case 77:
                _closure1_slot16 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var3.BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS = var10;
    var10 = function() {
        var0 = false;
        _closure1_slot21 = var0;
        var0 = undefined;
        return var0;
    };
    var3.BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL = var10;
    var10 = function arg0() {
        _fun25306: for (var _fun25306_ip = 0;;) switch (_fun25306_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.subscription;
                var0 = true;
                _closure1_slot18 = var0;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun25306_ip = 67;
                    continue _fun25306
                }
            case 24:
                var2 = var3.user_id;
                var4 = _closure1_slot7;
                var0 = var4.getId;
                var0 = var0.bind(var4)();
                if (!(var2 === var0)) {
                    _fun25306_ip = 71;
                    continue _fun25306
                }
            case 48:
                var2 = _closure1_slot6;
                var0 = var2.createFromServer;
                var0 = var0.bind(var2)(var3);
                _closure1_slot17 = var0;
            case 67:
                var0 = undefined;
                return var0;
            case 71:
                var0 = false;
                _closure1_slot18 = var0;
                var0 = undefined;
                return var0;
        }
    };
    var3.BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS = var10;
    var3.BILLING_SUBSCRIPTION_RESET = var4;
    var10 = function() {
        var0 = true;
        _closure1_slot19 = var0;
        var0 = undefined;
        return var0;
    };
    var3.BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_START = var10;
    var10 = function arg0() {
        var0 = arg0;
        var0 = var0.eligible;
        _closure1_slot20 = var0;
        var0 = false;
        _closure1_slot19 = var0;
        var0 = undefined;
        return var0;
    };
    var3.BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_SUCCESS = var10;
    var9 = function arg0() {
        _fun25309: for (var _fun25309_ip = 0;;) switch (_fun25309_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                if (!(var1 != var0)) {
                    _fun25309_ip = 26;
                    continue _fun25309
                }
            case 9:
                var0 = false;
                _closure1_slot20 = var0;
                _closure1_slot19 = var0;
                var0 = undefined;
                return var0;
            case 26:
                var4 = "Cannot destructure 'undefined' or 'null'.";
                var5 = var1;
                var0 = throwTypeError(var5, var4);
                var0 = undefined;
                throw var0;
        }
    };
    var3.BILLING_SUBSCRIPTION_REWARD_ELIGIBILITY_FETCH_FAILURE = var9;
    var3.LOGOUT = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var14 = var4;
    var12 = var3;
    var3 = new var14[var8](var13, var12, var11);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/billing/SubscriptionStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.getSubscriptionOfType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3069, 3077, 1216, 660, 1615, 566, 806, 2]);