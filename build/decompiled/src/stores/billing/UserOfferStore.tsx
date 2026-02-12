// stores/billing/UserOfferStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1() {
        _fun55903: for (var _fun55903_ip = 0;;) switch (_fun55903_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun55903_ip = 46;
                    continue _fun55903
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun55903_ip = 55;
                    continue _fun55903
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun55903_ip = 343;
                    continue _fun55903
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun55903_ip = 323;
                    continue _fun55903
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun55903_ip = 283;
                    continue _fun55903
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun55903_ip = 270;
                    continue _fun55903
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun55903_ip = 163;
                    continue _fun55903
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun55903_ip = 179;
                    continue _fun55903
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun55903_ip = 249;
                    continue _fun55903
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun55903_ip = 249;
                    continue _fun55903
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun55903_ip = 234;
                    continue _fun55903
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun55903_ip = 247;
                    continue _fun55903
                }
            case 234:
                var8 = _closure1_slot22;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun55903_ip = 265;
                continue _fun55903;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun55903_ip = 283;
                continue _fun55903;
            case 270:
                var6 = _closure1_slot22;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun55903_ip = 323;
                    continue _fun55903
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun55903_ip = 330;
                    continue _fun55903
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun55904: for (var _fun55904_ip = 0;;) switch (_fun55904_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun55904_ip = 56;
                                continue _fun55904
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun55904_ip = 67;
                            continue _fun55904;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var0 = function arg0, arg1() {
        _fun55905: for (var _fun55905_ip = 0;;) switch (_fun55905_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun55905_ip = 23;
                    continue _fun55905
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun55905_ip = 33;
                    continue _fun55905
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun55905_ip = 70;
                    continue _fun55905
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun55905_ip = 55;
                    continue _fun55905
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function() {
        _fun55906: for (var _fun55906_ip = 0;;) switch (_fun55906_ip) {
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
                _fun55906_ip = 74;
                continue _fun55906;
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
    var3 = function() {
        var2 = _closure1_slot19;
        var0 = {};
        var2.userTrialOffers = var0;
        var2 = _closure1_slot19;
        var0 = {};
        var2.userDiscountOffers = var0;
        var2 = _closure1_slot19;
        var0 = undefined;
        var2.userOffersLastFetchedAtDate = var0;
        var2 = _closure1_slot19;
        var1 = false;
        var2.isFetching = var1;
        return var0;
    };
    var _closure1_slot24 = var3;
    var0 = function() {
        _fun55910: for (var _fun55910_ip = 0;;) switch (_fun55910_ip) {
            case 0:
                var2 = _closure1_slot10;
                var0 = var2.getPremiumTypeSubscription;
                var0 = var0.bind(var2)();
                var3 = null;
                var0 = var3 != var0;
                if (!var0) {
                    _fun55910_ip = 173;
                    continue _fun55910
                }
            case 29:
                var2 = _closure1_slot19;
                var4 = var2.userDiscountOffers;
                var2 = _closure1_slot13;
                var2 = var4[var2];
                if (!(var3 == var2)) {
                    _fun55910_ip = 124;
                    continue _fun55910
                }
            case 51:
                var2 = _closure1_slot19;
                var4 = var2.userDiscountOffers;
                var2 = _closure1_slot14;
                var2 = var4[var2];
                if (!(var3 == var2)) {
                    _fun55910_ip = 87;
                    continue _fun55910
                }
            case 73:
                var3 = _closure1_slot19;
                var2 = {};
                var3.userDiscountOffers = var2;
                _fun55910_ip = 159;
                continue _fun55910;
            case 87:
                var3 = _closure1_slot19;
                var2 = {};
                var5 = _closure1_slot14;
                var6 = var3.userDiscountOffers;
                var4 = _closure1_slot14;
                var4 = var6[var4];
                var2[var5] = var4;
                var3.userDiscountOffers = var2;
                _fun55910_ip = 159;
                continue _fun55910;
            case 124:
                var3 = _closure1_slot19;
                var2 = {};
                var5 = _closure1_slot13;
                var6 = var3.userDiscountOffers;
                var4 = _closure1_slot13;
                var4 = var6[var4];
                var2[var5] = var4;
                var3.userDiscountOffers = var2;
            case 159:
                var2 = _closure1_slot19;
                var1 = {};
                var2.userTrialOffers = var1;
                var0 = true;
            case 173:
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var8 = function() {
        var1 = _closure1_slot8;
        var0 = var1.getCurrentUser;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var0 = function() {
        var0 = false;
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = global;
    var10 = var0.Object;
    var7 = var10.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var10)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.ANNUAL_DISCOUNT_IDS;
    var _closure1_slot11 = var7;
    var7 = var1.DISCOUNT_OFFERS_REQUIRES_REMINDER_ROLLOUT;
    var _closure1_slot12 = var7;
    var7 = var1.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID;
    var _closure1_slot13 = var7;
    var7 = var1.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID;
    var _closure1_slot14 = var7;
    var7 = var1.SubscriptionPlanInfo;
    var _closure1_slot15 = var7;
    var7 = var1.SubscriptionTrials;
    var _closure1_slot16 = var7;
    var1 = var1.TRIAL_OFFERS_REQUIRES_REMINDER_ROLLOUT;
    var _closure1_slot17 = var1;
    var1 = {};
    var1.userOffersLastFetchedAtDate = var0;
    var7 = {};
    var1.userTrialOffers = var7;
    var7 = {};
    var1.userDiscountOffers = var7;
    var1.userDiscounts = var0;
    var7 = false;
    var1.isFetching = var7;
    var1.lastFetchSuccessful = var7;
    var _closure1_slot18 = var1;
    var _closure1_slot19 = var1;
    var1 = function() {
        var0 = true;
        return var0;
    };
    var _closure1_slot20 = var1;
    var1 = 12;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var9
        var3 = function() {
            _fun55915: for (var _fun55915_ip = 0;;) switch (_fun55915_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot23;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun55915_ip = 69;
                        continue _fun55915
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun55915_ip = 105;
                    continue _fun55915;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function arg0() {
            _fun55916: for (var _fun55916_ip = 0;;) switch (_fun55916_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun55916_ip = 19;
                        continue _fun55916
                    }
                case 12:
                    var1 = _closure1_slot18;
                case 19:
                    _closure1_slot19 = var1;
                    var6 = var3.waitFor;
                    var10 = _closure1_slot9;
                    var4 = _closure1_slot7;
                    var8 = _closure1_slot10;
                    var7 = _closure1_slot8;
                    var11 = var3;
                    var9 = var4;
                    var1 = var11[var6](var10, var9, var8, var7, var6);
                    var5 = var3.syncWith;
                    var1 = _closure1_slot8;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = _closure1_slot20;
                    var1 = var5.bind(var3)(var2, var1);
                    var5 = var3.syncWith;
                    var1 = _closure1_slot10;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = _closure1_slot25;
                    var1 = var5.bind(var3)(var2, var1);
                    var2 = var3.syncWith;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = _closure1_slot26;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(21);
        var0[0] = var4;
        var4 = {};
        var6 = 'getUserTrialOffer';
        var4.key = var6;
        var6 = function arg0() {
            _fun55917: for (var _fun55917_ip = 0;;) switch (_fun55917_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 === var1)) {
                        _fun55917_ip = 13;
                        continue _fun55917
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = _closure1_slot19;
                    var0 = var0.userTrialOffers;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getUserDiscountOffer';
        var4.key = var6;
        var6 = function arg0() {
            _fun55918: for (var _fun55918_ip = 0;;) switch (_fun55918_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 === var1)) {
                        _fun55918_ip = 13;
                        continue _fun55918
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = _closure1_slot19;
                    var0 = var0.userDiscountOffers;
                    var0 = var0[var1];
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getAnyOfUserTrialOfferId';
        var4.key = var6;
        var6 = function arg0() {
            _fun55919: for (var _fun55919_ip = 0;;) switch (_fun55919_ip) {
                case 0:
                    var1 = _closure1_slot21;
                    var5 = undefined;
                    var0 = arg0;
                    var4 = var1.bind(var5)(var0);
                    var2 = var4.bind(var5)();
                    var1 = var2.done;
                    var0 = null;
                    var3 = var2;
                    if (var1) {
                        _fun55919_ip = 76;
                        continue _fun55919
                    }
                case 34:
                    var1 = var3.value;
                    var2 = _closure1_slot19;
                    var2 = var2.userTrialOffers;
                    var2 = var2[var1];
                    if (!(var0 == var2)) {
                        _fun55919_ip = 74;
                        continue _fun55919
                    }
                case 57:
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if (var2) {
                        _fun55919_ip = 76;
                        continue _fun55919
                    }
                case 72:
                    _fun55919_ip = 34;
                    continue _fun55919;
                case 74:
                    return var1;
                case 76:
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isFetchingOffer';
        var4.key = var6;
        var6 = function() {
            _fun55920: for (var _fun55920_ip = 0;;) switch (_fun55920_ip) {
                case 0:
                    var0 = _closure1_slot19;
                    var1 = var0.isFetching;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun55920_ip = 25;
                        continue _fun55920
                    }
                case 22:
                    var0 = var1;
                case 25:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'hasFetchedOffer';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot19;
            var1 = var0.userOffersLastFetchedAtDate;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'shouldFetchReferralOffer';
        var4.key = var6;
        var6 = function arg0() {
            _fun55922: for (var _fun55922_ip = 0;;) switch (_fun55922_ip) {
                case 0:
                    var5 = arg0;
                    var1 = _closure1_slot19;
                    var4 = var1.userOffersLastFetchedAtDate;
                    var0 = _closure1_slot19;
                    var1 = var0.isFetching;
                    var3 = null;
                    var0 = var3 != var1;
                    if (!var0) {
                        _fun55922_ip = 38;
                        continue _fun55922
                    }
                case 35:
                    var0 = var1;
                case 38:
                    if (!(var3 != var4)) {
                        _fun55922_ip = 103;
                        continue _fun55922
                    }
                case 42:
                    var1 = global;
                    var2 = var1.Date;
                    var1 = var2.now;
                    var2 = var1.bind(var2)();
                    var1 = 600000;
                    var1 = var2 - var1;
                    var2 = var1 > var4;
                    var1 = !var0;
                    if (!var1) {
                        _fun55922_ip = 101;
                        continue _fun55922
                    }
                case 79:
                    if (var2) {
                        _fun55922_ip = 98;
                        continue _fun55922
                    }
                case 82:
                    var6 = var3 != var5;
                    var3 = 0;
                    if (!var6) {
                        _fun55922_ip = 94;
                        continue _fun55922
                    }
                case 91:
                    var3 = var5;
                case 94:
                    var2 = var3 > var4;
                case 98:
                    var1 = var2;
                case 101:
                    return var1;
                case 103:
                    var0 = !var0;
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'shouldShowTrialOfferReminder';
        var4.key = var6;
        var6 = function arg0() {
            _fun55923: for (var _fun55923_ip = 0;;) switch (_fun55923_ip) {
                case 0:
                    var3 = _closure1_slot17;
                    var2 = var3.includes;
                    var0 = arg0;
                    var0 = var0.trial_id;
                    var0 = var2.bind(var3)(var0);
                    var0 = !var0;
                    if (var0) {
                        _fun55923_ip = 77;
                        continue _fun55923
                    }
                case 32:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isPremiumOfferReminderExperimentEnabled;
                    var1 = {};
                    var4 = 'user_offer_store';
                    var1.location = var4;
                    var0 = var2.bind(var3)(var1);
                case 77:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getAlmostExpiringTrialOffersForReminder';
        var4.key = var6;
        var6 = function arg0() {
            _fun55924: for (var _fun55924_ip = 0;;) switch (_fun55924_ip) {
                case 0:
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var0 = arg0;
                    var _closure3_slot1 = var0;
                    var3 = global;
                    var6 = var3.Object;
                    var5 = var6.values;
                    var0 = _closure1_slot16;
                    var6 = var5.bind(var6)(var0);
                    var5 = var6.map;
                    var0 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var0 = var5.bind(var6)(var0);
                    var _closure3_slot2 = var0;
                    var5 = _closure1_slot8;
                    var0 = var5.getCurrentUser;
                    var6 = var0.bind(var5)();
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 11;
                    var5 = var5[var0];
                    var0 = undefined;
                    var5 = var7.bind(var0)(var5);
                    var0 = var5.isPremium;
                    var0 = var0.bind(var5)(var6);
                    if (!var0) {
                        _fun55924_ip = 128;
                        continue _fun55924
                    }
                case 109:
                    var0 = var4.canFractionalPremiumUserUseOffer;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun55924_ip = 128;
                        continue _fun55924
                    }
                case 122:
                    var0 = new Array(0);
                    _fun55924_ip = 169;
                    continue _fun55924;
                case 128:
                    var4 = var3.Object;
                    var3 = var4.values;
                    var2 = _closure1_slot19;
                    var2 = var2.userTrialOffers;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        _fun55926: for (var _fun55926_ip = 0;;) switch (_fun55926_ip) {
                            case 0:
                                var3 = arg0;
                                var4 = _closure3_slot2;
                                var2 = var4.includes;
                                var0 = var3.trial_id;
                                var0 = var2.bind(var4)(var0);
                                if (!var0) {
                                    _fun55926_ip = 41;
                                    continue _fun55926
                                }
                            case 29:
                                var4 = var3.expires_at;
                                var2 = null;
                                var0 = var2 != var4;
                            case 41:
                                if (!var0) {
                                    _fun55926_ip = 56;
                                    continue _fun55926
                                }
                            case 44:
                                var4 = var3.subscription_trial;
                                var2 = null;
                                var0 = var2 != var4;
                            case 56:
                                if (!var0) {
                                    _fun55926_ip = 85;
                                    continue _fun55926
                                }
                            case 59:
                                var5 = _closure3_slot1;
                                var4 = var5.includes;
                                var2 = var3.subscription_trial;
                                var2 = var2.sku_id;
                                var0 = var4.bind(var5)(var2);
                            case 85:
                                if (!var0) {
                                    _fun55926_ip = 172;
                                    continue _fun55926
                                }
                            case 88:
                                var2 = global;
                                var6 = var2.Date;
                                var5 = var6.parse;
                                var4 = var3.expires_at;
                                var4 = var5.bind(var6)(var4);
                                var5 = var2.Date;
                                var2 = var5.now;
                                var5 = var2.bind(var5)();
                                var7 = _closure1_slot0;
                                var6 = _closure1_slot1;
                                var2 = 11;
                                var6 = var6[var2];
                                var2 = undefined;
                                var6 = var7.bind(var2)(var6);
                                var2 = var6.getOfferNoticeThreshold;
                                var2 = var2.bind(var6)(var3);
                                var2 = var5 + var2;
                                var0 = var4 < var2;
                            case 172:
                                if (!var0) {
                                    _fun55926_ip = 192;
                                    continue _fun55926
                                }
                            case 175:
                                var2 = _closure3_slot0;
                                var1 = var2.shouldShowTrialOfferReminder;
                                var0 = var1.bind(var2)(var3);
                            case 192:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1);
                case 169:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'shouldShowDiscountOfferReminder';
        var4.key = var6;
        var6 = function arg0() {
            _fun55927: for (var _fun55927_ip = 0;;) switch (_fun55927_ip) {
                case 0:
                    var3 = _closure1_slot12;
                    var2 = var3.includes;
                    var0 = arg0;
                    var0 = var0.discount_id;
                    var0 = var2.bind(var3)(var0);
                    var0 = !var0;
                    if (var0) {
                        _fun55927_ip = 77;
                        continue _fun55927
                    }
                case 32:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 10;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.isPremiumOfferReminderExperimentEnabled;
                    var1 = {};
                    var4 = 'user_offer_store';
                    var1.location = var4;
                    var0 = var2.bind(var3)(var1);
                case 77:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getAlmostExpiringDiscountOffersForReminder';
        var4.key = var6;
        var6 = function arg0() {
            _fun55928: for (var _fun55928_ip = 0;;) switch (_fun55928_ip) {
                case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var0 = arg0;
                    var _closure3_slot1 = var0;
                    var4 = _closure1_slot8;
                    var0 = var4.getCurrentUser;
                    var5 = var0.bind(var4)();
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 11;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var4);
                    var0 = var4.isPremium;
                    var0 = var0.bind(var4)(var5);
                    if (!var0) {
                        _fun55928_ip = 87;
                        continue _fun55928
                    }
                case 68:
                    var0 = var3.canFractionalPremiumUserUseOffer;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun55928_ip = 87;
                        continue _fun55928
                    }
                case 81:
                    var0 = new Array(0);
                    _fun55928_ip = 130;
                    continue _fun55928;
                case 87:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.values;
                    var2 = _closure1_slot19;
                    var2 = var2.userDiscountOffers;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        _fun55929: for (var _fun55929_ip = 0;;) switch (_fun55929_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = var3.expires_at;
                                var2 = null;
                                var0 = var2 != var0;
                                if (!var0) {
                                    _fun55929_ip = 28;
                                    continue _fun55929
                                }
                            case 18:
                                var1 = var3.discount;
                                var0 = var2 != var1;
                            case 28:
                                if (!var0) {
                                    _fun55929_ip = 61;
                                    continue _fun55929
                                }
                            case 31:
                                var1 = var3.discount;
                                var4 = var1.plan_ids;
                                var2 = var4.some;
                                var1 = function(arg0) { // Environment: var1
                                    var2 = _closure3_slot1;
                                    var1 = var2.includes;
                                    var3 = _closure1_slot15;
                                    var0 = arg0;
                                    var0 = var3[var0];
                                    var0 = var0.skuId;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var2.bind(var4)(var1);
                            case 61:
                                if (!var0) {
                                    _fun55929_ip = 148;
                                    continue _fun55929
                                }
                            case 64:
                                var1 = global;
                                var5 = var1.Date;
                                var4 = var5.parse;
                                var2 = var3.expires_at;
                                var2 = var4.bind(var5)(var2);
                                var4 = var1.Date;
                                var1 = var4.now;
                                var4 = var1.bind(var4)();
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var1 = 11;
                                var5 = var5[var1];
                                var1 = undefined;
                                var5 = var6.bind(var1)(var5);
                                var1 = var5.getOfferNoticeThreshold;
                                var1 = var1.bind(var5)(var3);
                                var1 = var4 + var1;
                                var0 = var2 < var1;
                            case 148:
                                if (!var0) {
                                    _fun55929_ip = 171;
                                    continue _fun55929
                                }
                            case 151:
                                var2 = _closure3_slot0;
                                var1 = var2.shouldShowDiscountOfferReminder;
                                var0 = var1.bind(var2)(var3);
                            case 171:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1);
                case 130:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getAcknowledgedOffers';
        var4.key = var6;
        var6 = function arg0() {
            _fun55931: for (var _fun55931_ip = 0;;) switch (_fun55931_ip) {
                case 0:
                    var3 = this;
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot8;
                    var0 = var4.getCurrentUser;
                    var5 = var0.bind(var4)();
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 11;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var4);
                    var0 = var4.isPremium;
                    var0 = var0.bind(var4)(var5);
                    if (!var0) {
                        _fun55931_ip = 83;
                        continue _fun55931
                    }
                case 64:
                    var0 = var3.canFractionalPremiumUserUseOffer;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun55931_ip = 83;
                        continue _fun55931
                    }
                case 77:
                    var0 = new Array(0);
                    _fun55931_ip = 126;
                    continue _fun55931;
                case 83:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.values;
                    var2 = _closure1_slot19;
                    var2 = var2.userTrialOffers;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        _fun55932: for (var _fun55932_ip = 0;;) switch (_fun55932_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure3_slot0;
                                var2 = var3.includes;
                                var0 = var1.trial_id;
                                var0 = var2.bind(var3)(var0);
                                if (!var0) {
                                    _fun55932_ip = 41;
                                    continue _fun55932
                                }
                            case 29:
                                var2 = var1.expires_at;
                                var1 = null;
                                var0 = var1 != var2;
                            case 41:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1);
                case 126:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getUnacknowledgedDiscountOffers';
        var4.key = var6;
        var6 = function() {
            _fun55933: for (var _fun55933_ip = 0;;) switch (_fun55933_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot8;
                    var0 = var3.getCurrentUser;
                    var4 = var0.bind(var3)();
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 11;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var3);
                    var0 = var3.isPremium;
                    var0 = var0.bind(var3)(var4);
                    if (!var0) {
                        _fun55933_ip = 74;
                        continue _fun55933
                    }
                case 55:
                    var0 = var2.canFractionalPremiumUserUseOffer;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun55933_ip = 74;
                        continue _fun55933
                    }
                case 68:
                    var0 = new Array(0);
                    _fun55933_ip = 127;
                    continue _fun55933;
                case 74:
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.values;
                    var1 = _closure1_slot19;
                    var1 = var1.userDiscountOffers;
                    var4 = null;
                    if (!(var4 == var1)) {
                        _fun55933_ip = 105;
                        continue _fun55933
                    }
                case 103:
                    var1 = {};
                case 105:
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        _fun55934: for (var _fun55934_ip = 0;;) switch (_fun55934_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.expires_at;
                                var0 = null;
                                var0 = var0 == var2;
                                if (!var0) {
                                    _fun55934_ip = 44;
                                    continue _fun55934
                                }
                            case 18:
                                var3 = _closure1_slot11;
                                var2 = var3.includes;
                                var1 = var1.discount_id;
                                var1 = var2.bind(var3)(var1);
                                var0 = !var1;
                            case 44:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1);
                case 127:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getUnacknowledgedOffers';
        var4.key = var6;
        var6 = function arg0() {
            _fun55935: for (var _fun55935_ip = 0;;) switch (_fun55935_ip) {
                case 0:
                    var3 = this;
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot8;
                    var0 = var4.getCurrentUser;
                    var5 = var0.bind(var4)();
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 11;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var4);
                    var0 = var4.isPremium;
                    var0 = var0.bind(var4)(var5);
                    if (!var0) {
                        _fun55935_ip = 83;
                        continue _fun55935
                    }
                case 64:
                    var0 = var3.canFractionalPremiumUserUseOffer;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun55935_ip = 83;
                        continue _fun55935
                    }
                case 77:
                    var0 = new Array(0);
                    _fun55935_ip = 126;
                    continue _fun55935;
                case 83:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.values;
                    var2 = _closure1_slot19;
                    var2 = var2.userTrialOffers;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        _fun55936: for (var _fun55936_ip = 0;;) switch (_fun55936_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure3_slot0;
                                var2 = var3.includes;
                                var0 = var1.trial_id;
                                var0 = var2.bind(var3)(var0);
                                if (!var0) {
                                    _fun55936_ip = 41;
                                    continue _fun55936
                                }
                            case 29:
                                var2 = var1.expires_at;
                                var1 = null;
                                var0 = var1 == var2;
                            case 41:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1);
                case 126:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'hasAnyUnexpiredOffer';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = _closure1_slot19;
            var0 = var0.userTrialOffers;
            var2 = var1.bind(var2)(var0);
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                _fun55938: for (var _fun55938_ip = 0;;) switch (_fun55938_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = var2.expires_at;
                        var0 = null;
                        var0 = var0 == var1;
                        if (var0) {
                            _fun55938_ip = 62;
                            continue _fun55938
                        }
                    case 18:
                        var1 = global;
                        var4 = var1.Date;
                        var3 = var4.parse;
                        var2 = var2.expires_at;
                        var2 = var3.bind(var4)(var2);
                        var3 = var1.Date;
                        var1 = var3.now;
                        var1 = var1.bind(var3)();
                        var0 = var2 > var1;
                    case 62:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'hasAnyUnexpiredDiscountOffer';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = _closure1_slot19;
            var0 = var0.userDiscountOffers;
            var2 = var1.bind(var2)(var0);
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                _fun55940: for (var _fun55940_ip = 0;;) switch (_fun55940_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = var2.expires_at;
                        var0 = null;
                        var0 = var0 == var1;
                        if (var0) {
                            _fun55940_ip = 62;
                            continue _fun55940
                        }
                    case 18:
                        var1 = global;
                        var4 = var1.Date;
                        var3 = var4.parse;
                        var2 = var2.expires_at;
                        var2 = var3.bind(var4)(var2);
                        var3 = var1.Date;
                        var1 = var3.now;
                        var1 = var1.bind(var3)();
                        var0 = var2 > var1;
                    case 62:
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'canFractionalPremiumUserUseOffer';
        var4.key = var6;
        var6 = function() {
            _fun55941: for (var _fun55941_ip = 0;;) switch (_fun55941_ip) {
                case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.isFractionalPremiumActive;
                    var0 = {};
                    var4 = true;
                    var0.excludeReverseTrial = var4;
                    var0 = var2.bind(var3)(var0);
                    if (!var0) {
                        _fun55941_ip = 50;
                        continue _fun55941
                    }
                case 30:
                    var2 = _closure1_slot10;
                    var1 = var2.getPremiumTypeSubscription;
                    var2 = var1.bind(var2)();
                    var1 = null;
                    var0 = var1 == var2;
                case 50:
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getReferrer';
        var4.key = var6;
        var6 = function arg0() {
            _fun55942: for (var _fun55942_ip = 0;;) switch (_fun55942_ip) {
                case 0:
                    var3 = arg0;
                    var1 = null;
                    var2 = var1 == var3;
                    var0 = null;
                    if (var2) {
                        _fun55942_ip = 49;
                        continue _fun55942
                    }
                case 14:
                    var2 = _closure1_slot19;
                    var2 = var2.userTrialOffers;
                    var2 = var2[var3];
                    var3 = var1 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun55942_ip = 46;
                        continue _fun55942
                    }
                case 40:
                    var1 = var2.referrer;
                case 46:
                    var0 = var1;
                case 49:
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot19;
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'forceReset';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot24;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'lastFetchSuccessful';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot19;
            var0 = var0.lastFetchSuccessful;
            return var0;
        };
        var4.value = var5;
        var0[20] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'UserOfferStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = new Array(3);
    var10 = function(arg0) { // Environment: var9
        _fun55946: for (var _fun55946_ip = 0;;) switch (_fun55946_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                var4 = var3 == var1;
                var0 = undefined;
                var2 = undefined;
                if (var4) {
                    _fun55946_ip = 22;
                    continue _fun55946
                }
            case 16:
                var2 = var1.userDiscounts;
            case 22:
                if (!(var3 == var2)) {
                    _fun55946_ip = 28;
                    continue _fun55946
                }
            case 26:
                return var0;
            case 28:
                var0 = {};
                var6 = var0;
                var5 = var1;
                var1 = copyDataProperties(var6, var5);
                var1 = 'userDiscountOffers';
                var0[var1] = var2;
                return var0;
        }
    };
    var1[0] = var10;
    var10 = function(arg0) { // Environment: var9
        _fun55947: for (var _fun55947_ip = 0;;) switch (_fun55947_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun55947_ip = 13;
                    continue _fun55947
                }
            case 9:
                var1 = undefined;
                return var1;
            case 13:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.hasOwn;
                var1 = 'userAnnualOfferLastFetchedAtDate';
                var1 = var2.bind(var3)(var0, var1);
                if (!var1) {
                    _fun55947_ip = 49;
                    continue _fun55947
                }
            case 42:
                var1 = delete var0.userAnnualOfferLastFetchedAtDate;
            case 49:
                return var0;
        }
    };
    var1[1] = var10;
    var10 = function(arg0) { // Environment: var9
        _fun55948: for (var _fun55948_ip = 0;;) switch (_fun55948_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                if (!(var3 == var2)) {
                    _fun55948_ip = 13;
                    continue _fun55948
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var0 = var3 == var2;
                var1 = undefined;
                if (var0) {
                    _fun55948_ip = 28;
                    continue _fun55948
                }
            case 22:
                var1 = var2.isFetching;
            case 28:
                var0 = var2;
                if (!(var3 == var1)) {
                    _fun55948_ip = 61;
                    continue _fun55948
                }
            case 35:
                var1 = {};
                var5 = var1;
                var4 = var2;
                var2 = copyDataProperties(var5, var4);
                var3 = false;
                var2 = 'isFetching';
                var1[var2] = var3;
                var0 = var1;
            case 61:
                return var0;
        }
    };
    var1[2] = var10;
    var7.migrations = var1;
    var1 = 13;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var10 = function() {
        var1 = _closure1_slot19;
        var0 = true;
        var1.isFetching = var0;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_USER_OFFER_FETCH_START = var10;
    var10 = function arg0() {
        _fun55950: for (var _fun55950_ip = 0;;) switch (_fun55950_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userTrialOffer;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun55950_ip = 30;
                    continue _fun55950
                }
            case 15:
                var1 = _closure1_slot24;
                var0 = undefined;
                var0 = var1.bind(var0)();
                _fun55950_ip = 53;
                continue _fun55950;
            case 30:
                var0 = _closure1_slot19;
                var1 = var0.userTrialOffers;
                var0 = var2.trial_id;
                var1[var0] = var2;
            case 53:
                var2 = _closure1_slot19;
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2.userOffersLastFetchedAtDate = var1;
                var1 = _closure1_slot19;
                var0 = false;
                var1.isFetching = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS = var10;
    var10 = function arg0() {
        _fun55951: for (var _fun55951_ip = 0;;) switch (_fun55951_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userTrialOffer;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun55951_ip = 32;
                    continue _fun55951
                }
            case 15:
                var1 = _closure1_slot19;
                var0 = {};
                var1.userTrialOffers = var0;
                _fun55951_ip = 55;
                continue _fun55951;
            case 32:
                var0 = _closure1_slot19;
                var1 = var0.userTrialOffers;
                var0 = var2.trial_id;
                var1[var0] = var2;
            case 55:
                var1 = _closure1_slot19;
                var0 = global;
                var2 = var0.Date;
                var0 = var2.now;
                var0 = var0.bind(var2)();
                var1.userOffersLastFetchedAtDate = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS = var10;
    var10 = function arg0() {
        _fun55952: for (var _fun55952_ip = 0;;) switch (_fun55952_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.userTrialOffer;
                var4 = var0.userDiscount;
                var5 = var0.userDiscountOffer;
                var0 = null;
                var1 = var0 == var3;
                if (!var1) {
                    _fun55952_ip = 34;
                    continue _fun55952
                }
            case 30:
                var1 = var0 == var4;
            case 34:
                if (!var1) {
                    _fun55952_ip = 41;
                    continue _fun55952
                }
            case 37:
                var1 = var0 == var5;
            case 41:
                if (!var1) {
                    _fun55952_ip = 57;
                    continue _fun55952
                }
            case 44:
                var2 = _closure1_slot24;
                var1 = undefined;
                var1 = var2.bind(var1)();
            case 57:
                if (!(var0 == var3)) {
                    _fun55952_ip = 143;
                    continue _fun55952
                }
            case 61:
                if (!(var0 == var4)) {
                    _fun55952_ip = 106;
                    continue _fun55952
                }
            case 65:
                if (!(var0 != var5)) {
                    _fun55952_ip = 178;
                    continue _fun55952
                }
            case 69:
                var1 = _closure1_slot19;
                var2 = var1.userDiscountOffers;
                var1 = var5.discount_id;
                var2[var1] = var5;
                var1 = _closure1_slot19;
                var0 = {};
                var1.userTrialOffers = var0;
                _fun55952_ip = 178;
                continue _fun55952;
            case 106:
                var1 = _closure1_slot19;
                var2 = var1.userDiscountOffers;
                var1 = var4.discount_id;
                var2[var1] = var4;
                var1 = _closure1_slot19;
                var0 = {};
                var1.userTrialOffers = var0;
                _fun55952_ip = 178;
                continue _fun55952;
            case 143:
                var1 = _closure1_slot19;
                var2 = var1.userTrialOffers;
                var1 = var3.trial_id;
                var2[var1] = var3;
                var1 = _closure1_slot19;
                var0 = {};
                var1.userDiscountOffers = var0;
            case 178:
                var2 = _closure1_slot19;
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2.userOffersLastFetchedAtDate = var1;
                var2 = _closure1_slot19;
                var1 = false;
                var2.isFetching = var1;
                var1 = _closure1_slot19;
                var0 = true;
                var1.lastFetchSuccessful = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.BILLING_USER_OFFER_FETCH_SUCCESS = var10;
    var10 = function arg0() {
        _fun55953: for (var _fun55953_ip = 0;;) switch (_fun55953_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.userTrialOffer;
                var2 = var0.userDiscount;
                var3 = var0.userDiscountOffer;
                var0 = null;
                if (!(var0 == var5)) {
                    _fun55953_ip = 44;
                    continue _fun55953
                }
            case 27:
                var4 = _closure1_slot19;
                var1 = {};
                var4.userTrialOffers = var1;
                _fun55953_ip = 67;
                continue _fun55953;
            case 44:
                var1 = _closure1_slot19;
                var4 = var1.userTrialOffers;
                var1 = var5.trial_id;
                var4[var1] = var5;
            case 67:
                if (!(var0 == var2)) {
                    _fun55953_ip = 117;
                    continue _fun55953
                }
            case 71:
                if (!(var0 == var3)) {
                    _fun55953_ip = 92;
                    continue _fun55953
                }
            case 75:
                var1 = _closure1_slot19;
                var0 = {};
                var1.userDiscountOffers = var0;
                _fun55953_ip = 140;
                continue _fun55953;
            case 92:
                var0 = _closure1_slot19;
                var1 = var0.userDiscountOffers;
                var0 = var3.discount_id;
                var1[var0] = var3;
                _fun55953_ip = 140;
                continue _fun55953;
            case 117:
                var0 = _closure1_slot19;
                var1 = var0.userDiscountOffers;
                var0 = var2.discount_id;
                var1[var0] = var2;
            case 140:
                var1 = _closure1_slot19;
                var0 = global;
                var2 = var0.Date;
                var0 = var2.now;
                var0 = var0.bind(var2)();
                var1.userOffersLastFetchedAtDate = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS = var10;
    var9 = function() {
        var2 = _closure1_slot24;
        var0 = undefined;
        var2 = var2.bind(var0)();
        var3 = _closure1_slot19;
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var3.userOffersLastFetchedAtDate = var2;
        var3 = _closure1_slot19;
        var2 = false;
        var3.isFetching = var2;
        var1 = _closure1_slot19;
        var1.lastFetchSuccessful = var2;
        return var0;
    };
    var1.BILLING_USER_OFFER_FETCH_FAIL = var9;
    var1.BILLING_PAYMENT_SOURCE_CREATE_SUCCESS = var8;
    var1.BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS = var8;
    var1.BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS = var8;
    var1.LOGOUT = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var14 = var3;
    var12 = var1;
    var1 = new var14[var7](var13, var12, var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/billing/UserOfferStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 6735, 1621, 4659, 3119, 1623, 6738, 3111, 566, 806, 2]);