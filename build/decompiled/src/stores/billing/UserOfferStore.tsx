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
        _fun55377: for (var _fun55377_ip = 0;;) switch (_fun55377_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun55377_ip = 46;
                    continue _fun55377
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun55377_ip = 55;
                    continue _fun55377
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun55377_ip = 343;
                    continue _fun55377
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun55377_ip = 323;
                    continue _fun55377
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun55377_ip = 283;
                    continue _fun55377
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun55377_ip = 270;
                    continue _fun55377
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
                    _fun55377_ip = 163;
                    continue _fun55377
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun55377_ip = 179;
                    continue _fun55377
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun55377_ip = 249;
                    continue _fun55377
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun55377_ip = 249;
                    continue _fun55377
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun55377_ip = 234;
                    continue _fun55377
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun55377_ip = 247;
                    continue _fun55377
                }
            case 234:
                var8 = _closure1_slot20;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun55377_ip = 265;
                continue _fun55377;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun55377_ip = 283;
                continue _fun55377;
            case 270:
                var6 = _closure1_slot20;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun55377_ip = 323;
                    continue _fun55377
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
                    _fun55377_ip = 330;
                    continue _fun55377
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun55378: for (var _fun55378_ip = 0;;) switch (_fun55378_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun55378_ip = 56;
                                continue _fun55378
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
                            _fun55378_ip = 67;
                            continue _fun55378;
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
    var _closure1_slot19 = var0;
    var0 = function arg0, arg1() {
        _fun55379: for (var _fun55379_ip = 0;;) switch (_fun55379_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun55379_ip = 23;
                    continue _fun55379
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun55379_ip = 33;
                    continue _fun55379
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
                    _fun55379_ip = 70;
                    continue _fun55379
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun55379_ip = 55;
                    continue _fun55379
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function() {
        _fun55380: for (var _fun55380_ip = 0;;) switch (_fun55380_ip) {
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
                _fun55380_ip = 74;
                continue _fun55380;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot21 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot21 = var0;
    var3 = function() {
        var2 = _closure1_slot17;
        var0 = {};
        var2.userTrialOffers = var0;
        var2 = _closure1_slot17;
        var0 = {};
        var2.userDiscountOffers = var0;
        var2 = _closure1_slot17;
        var0 = undefined;
        var2.userOffersLastFetchedAtDate = var0;
        var2 = _closure1_slot17;
        var1 = false;
        var2.isFetching = var1;
        return var0;
    };
    var _closure1_slot22 = var3;
    var0 = function() {
        _fun55384: for (var _fun55384_ip = 0;;) switch (_fun55384_ip) {
            case 0:
                var2 = _closure1_slot10;
                var0 = var2.getPremiumTypeSubscription;
                var0 = var0.bind(var2)();
                var3 = null;
                var0 = var3 != var0;
                if (!var0) {
                    _fun55384_ip = 173;
                    continue _fun55384
                }
            case 29:
                var2 = _closure1_slot17;
                var4 = var2.userDiscountOffers;
                var2 = _closure1_slot12;
                var2 = var4[var2];
                if (!(var3 == var2)) {
                    _fun55384_ip = 124;
                    continue _fun55384
                }
            case 51:
                var2 = _closure1_slot17;
                var4 = var2.userDiscountOffers;
                var2 = _closure1_slot13;
                var2 = var4[var2];
                if (!(var3 == var2)) {
                    _fun55384_ip = 87;
                    continue _fun55384
                }
            case 73:
                var3 = _closure1_slot17;
                var2 = {};
                var3.userDiscountOffers = var2;
                _fun55384_ip = 159;
                continue _fun55384;
            case 87:
                var3 = _closure1_slot17;
                var2 = {};
                var5 = _closure1_slot13;
                var6 = var3.userDiscountOffers;
                var4 = _closure1_slot13;
                var4 = var6[var4];
                var2[var5] = var4;
                var3.userDiscountOffers = var2;
                _fun55384_ip = 159;
                continue _fun55384;
            case 124:
                var3 = _closure1_slot17;
                var2 = {};
                var5 = _closure1_slot12;
                var6 = var3.userDiscountOffers;
                var4 = _closure1_slot12;
                var4 = var6[var4];
                var2[var5] = var4;
                var3.userDiscountOffers = var2;
            case 159:
                var2 = _closure1_slot17;
                var1 = {};
                var2.userTrialOffers = var1;
                var0 = true;
            case 173:
                return var0;
        }
    };
    var _closure1_slot23 = var0;
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
    var _closure1_slot24 = var0;
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
    var7 = var1.PREMIUM_TIER_2_CHURN_1_MONTH_DISCOUNT_ID;
    var _closure1_slot12 = var7;
    var7 = var1.PREMIUM_TIER_2_CHURN_3_MONTH_DISCOUNT_ID;
    var _closure1_slot13 = var7;
    var7 = var1.SubscriptionPlanInfo;
    var _closure1_slot14 = var7;
    var1 = var1.SubscriptionTrials;
    var _closure1_slot15 = var1;
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
    var _closure1_slot16 = var1;
    var _closure1_slot17 = var1;
    var1 = function() {
        var0 = true;
        return var0;
    };
    var _closure1_slot18 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var9
        var3 = function() {
            _fun55389: for (var _fun55389_ip = 0;;) switch (_fun55389_ip) {
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
                    var0 = _closure1_slot21;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun55389_ip = 69;
                        continue _fun55389
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun55389_ip = 105;
                    continue _fun55389;
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
            _fun55390: for (var _fun55390_ip = 0;;) switch (_fun55390_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun55390_ip = 19;
                        continue _fun55390
                    }
                case 12:
                    var1 = _closure1_slot16;
                case 19:
                    _closure1_slot17 = var1;
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
                    var1 = _closure1_slot18;
                    var1 = var5.bind(var3)(var2, var1);
                    var5 = var3.syncWith;
                    var1 = _closure1_slot10;
                    var2 = new Array(1);
                    var2[0] = var1;
                    var1 = _closure1_slot23;
                    var1 = var5.bind(var3)(var2, var1);
                    var2 = var3.syncWith;
                    var1 = new Array(1);
                    var1[0] = var4;
                    var0 = _closure1_slot24;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(19);
        var0[0] = var4;
        var4 = {};
        var6 = 'getUserTrialOffer';
        var4.key = var6;
        var6 = function arg0() {
            _fun55391: for (var _fun55391_ip = 0;;) switch (_fun55391_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 === var1)) {
                        _fun55391_ip = 13;
                        continue _fun55391
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = _closure1_slot17;
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
            _fun55392: for (var _fun55392_ip = 0;;) switch (_fun55392_ip) {
                case 0:
                    var1 = arg0;
                    var0 = null;
                    if (!(var0 === var1)) {
                        _fun55392_ip = 13;
                        continue _fun55392
                    }
                case 9:
                    var0 = undefined;
                    return var0;
                case 13:
                    var0 = _closure1_slot17;
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
            _fun55393: for (var _fun55393_ip = 0;;) switch (_fun55393_ip) {
                case 0:
                    var1 = _closure1_slot19;
                    var5 = undefined;
                    var0 = arg0;
                    var4 = var1.bind(var5)(var0);
                    var2 = var4.bind(var5)();
                    var1 = var2.done;
                    var0 = null;
                    var3 = var2;
                    if (var1) {
                        _fun55393_ip = 76;
                        continue _fun55393
                    }
                case 34:
                    var1 = var3.value;
                    var2 = _closure1_slot17;
                    var2 = var2.userTrialOffers;
                    var2 = var2[var1];
                    if (!(var0 == var2)) {
                        _fun55393_ip = 74;
                        continue _fun55393
                    }
                case 57:
                    var7 = var4.bind(var5)();
                    var2 = var7.done;
                    var3 = var7;
                    if (var2) {
                        _fun55393_ip = 76;
                        continue _fun55393
                    }
                case 72:
                    _fun55393_ip = 34;
                    continue _fun55393;
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
            _fun55394: for (var _fun55394_ip = 0;;) switch (_fun55394_ip) {
                case 0:
                    var0 = _closure1_slot17;
                    var1 = var0.isFetching;
                    var0 = null;
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun55394_ip = 25;
                        continue _fun55394
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
            var0 = _closure1_slot17;
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
            _fun55396: for (var _fun55396_ip = 0;;) switch (_fun55396_ip) {
                case 0:
                    var5 = arg0;
                    var1 = _closure1_slot17;
                    var4 = var1.userOffersLastFetchedAtDate;
                    var0 = _closure1_slot17;
                    var1 = var0.isFetching;
                    var3 = null;
                    var0 = var3 != var1;
                    if (!var0) {
                        _fun55396_ip = 38;
                        continue _fun55396
                    }
                case 35:
                    var0 = var1;
                case 38:
                    if (!(var3 != var4)) {
                        _fun55396_ip = 103;
                        continue _fun55396
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
                        _fun55396_ip = 101;
                        continue _fun55396
                    }
                case 79:
                    if (var2) {
                        _fun55396_ip = 98;
                        continue _fun55396
                    }
                case 82:
                    var6 = var3 != var5;
                    var3 = 0;
                    if (!var6) {
                        _fun55396_ip = 94;
                        continue _fun55396
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
        var6 = 'getAlmostExpiringTrialOffers';
        var4.key = var6;
        var6 = function arg0() {
            _fun55397: for (var _fun55397_ip = 0;;) switch (_fun55397_ip) {
                case 0:
                    var4 = this;
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = global;
                    var6 = var3.Object;
                    var5 = var6.values;
                    var0 = _closure1_slot15;
                    var6 = var5.bind(var6)(var0);
                    var5 = var6.map;
                    var0 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.id;
                        return var0;
                    };
                    var0 = var5.bind(var6)(var0);
                    var _closure3_slot1 = var0;
                    var5 = _closure1_slot8;
                    var0 = var5.getCurrentUser;
                    var6 = var0.bind(var5)();
                    var7 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 10;
                    var5 = var5[var0];
                    var0 = undefined;
                    var5 = var7.bind(var0)(var5);
                    var0 = var5.isPremium;
                    var0 = var0.bind(var5)(var6);
                    if (!var0) {
                        _fun55397_ip = 124;
                        continue _fun55397
                    }
                case 105:
                    var0 = var4.canFractionalPremiumUserUseOffer;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun55397_ip = 124;
                        continue _fun55397
                    }
                case 118:
                    var0 = new Array(0);
                    _fun55397_ip = 165;
                    continue _fun55397;
                case 124:
                    var4 = var3.Object;
                    var3 = var4.values;
                    var2 = _closure1_slot17;
                    var2 = var2.userTrialOffers;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        _fun55399: for (var _fun55399_ip = 0;;) switch (_fun55399_ip) {
                            case 0:
                                var5 = arg0;
                                var3 = _closure3_slot1;
                                var2 = var3.includes;
                                var0 = var5.trial_id;
                                var0 = var2.bind(var3)(var0);
                                if (!var0) {
                                    _fun55399_ip = 41;
                                    continue _fun55399
                                }
                            case 29:
                                var3 = var5.expires_at;
                                var2 = null;
                                var0 = var2 != var3;
                            case 41:
                                if (!var0) {
                                    _fun55399_ip = 56;
                                    continue _fun55399
                                }
                            case 44:
                                var3 = var5.subscription_trial;
                                var2 = null;
                                var0 = var2 != var3;
                            case 56:
                                if (!var0) {
                                    _fun55399_ip = 85;
                                    continue _fun55399
                                }
                            case 59:
                                var3 = _closure3_slot0;
                                var2 = var3.includes;
                                var1 = var5.subscription_trial;
                                var1 = var1.sku_id;
                                var0 = var2.bind(var3)(var1);
                            case 85:
                                if (!var0) {
                                    _fun55399_ip = 172;
                                    continue _fun55399
                                }
                            case 88:
                                var1 = global;
                                var4 = var1.Date;
                                var3 = var4.parse;
                                var2 = var5.expires_at;
                                var2 = var3.bind(var4)(var2);
                                var3 = var1.Date;
                                var1 = var3.now;
                                var3 = var1.bind(var3)();
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var1 = 10;
                                var4 = var4[var1];
                                var1 = undefined;
                                var4 = var6.bind(var1)(var4);
                                var1 = var4.getOfferNoticeThreshold;
                                var1 = var1.bind(var4)(var5);
                                var1 = var3 + var1;
                                var0 = var2 < var1;
                            case 172:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1);
                case 165:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getAlmostExpiringDiscountOffers';
        var4.key = var6;
        var6 = function arg0() {
            _fun55400: for (var _fun55400_ip = 0;;) switch (_fun55400_ip) {
                case 0:
                    var3 = this;
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot8;
                    var0 = var4.getCurrentUser;
                    var5 = var0.bind(var4)();
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 10;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var4);
                    var0 = var4.isPremium;
                    var0 = var0.bind(var4)(var5);
                    if (!var0) {
                        _fun55400_ip = 83;
                        continue _fun55400
                    }
                case 64:
                    var0 = var3.canFractionalPremiumUserUseOffer;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun55400_ip = 83;
                        continue _fun55400
                    }
                case 77:
                    var0 = new Array(0);
                    _fun55400_ip = 126;
                    continue _fun55400;
                case 83:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.values;
                    var2 = _closure1_slot17;
                    var2 = var2.userDiscountOffers;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        _fun55401: for (var _fun55401_ip = 0;;) switch (_fun55401_ip) {
                            case 0:
                                var5 = arg0;
                                var0 = var5.expires_at;
                                var2 = null;
                                var0 = var2 != var0;
                                if (!var0) {
                                    _fun55401_ip = 28;
                                    continue _fun55401
                                }
                            case 18:
                                var1 = var5.discount;
                                var0 = var2 != var1;
                            case 28:
                                if (!var0) {
                                    _fun55401_ip = 61;
                                    continue _fun55401
                                }
                            case 31:
                                var1 = var5.discount;
                                var3 = var1.plan_ids;
                                var2 = var3.some;
                                var1 = function(arg0) { // Environment: var1
                                    var2 = _closure3_slot0;
                                    var1 = var2.includes;
                                    var3 = _closure1_slot14;
                                    var0 = arg0;
                                    var0 = var3[var0];
                                    var0 = var0.skuId;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var1);
                            case 61:
                                if (!var0) {
                                    _fun55401_ip = 148;
                                    continue _fun55401
                                }
                            case 64:
                                var1 = global;
                                var4 = var1.Date;
                                var3 = var4.parse;
                                var2 = var5.expires_at;
                                var2 = var3.bind(var4)(var2);
                                var3 = var1.Date;
                                var1 = var3.now;
                                var3 = var1.bind(var3)();
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var1 = 10;
                                var4 = var4[var1];
                                var1 = undefined;
                                var4 = var6.bind(var1)(var4);
                                var1 = var4.getOfferNoticeThreshold;
                                var1 = var1.bind(var4)(var5);
                                var1 = var3 + var1;
                                var0 = var2 < var1;
                            case 148:
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var1);
                case 126:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getAcknowledgedOffers';
        var4.key = var6;
        var6 = function arg0() {
            _fun55403: for (var _fun55403_ip = 0;;) switch (_fun55403_ip) {
                case 0:
                    var3 = this;
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot8;
                    var0 = var4.getCurrentUser;
                    var5 = var0.bind(var4)();
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 10;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var4);
                    var0 = var4.isPremium;
                    var0 = var0.bind(var4)(var5);
                    if (!var0) {
                        _fun55403_ip = 83;
                        continue _fun55403
                    }
                case 64:
                    var0 = var3.canFractionalPremiumUserUseOffer;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun55403_ip = 83;
                        continue _fun55403
                    }
                case 77:
                    var0 = new Array(0);
                    _fun55403_ip = 126;
                    continue _fun55403;
                case 83:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.values;
                    var2 = _closure1_slot17;
                    var2 = var2.userTrialOffers;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        _fun55404: for (var _fun55404_ip = 0;;) switch (_fun55404_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure3_slot0;
                                var2 = var3.includes;
                                var0 = var1.trial_id;
                                var0 = var2.bind(var3)(var0);
                                if (!var0) {
                                    _fun55404_ip = 41;
                                    continue _fun55404
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
        var0[9] = var4;
        var4 = {};
        var6 = 'getUnacknowledgedDiscountOffers';
        var4.key = var6;
        var6 = function() {
            _fun55405: for (var _fun55405_ip = 0;;) switch (_fun55405_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot8;
                    var0 = var3.getCurrentUser;
                    var4 = var0.bind(var3)();
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 10;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var3);
                    var0 = var3.isPremium;
                    var0 = var0.bind(var3)(var4);
                    if (!var0) {
                        _fun55405_ip = 74;
                        continue _fun55405
                    }
                case 55:
                    var0 = var2.canFractionalPremiumUserUseOffer;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun55405_ip = 74;
                        continue _fun55405
                    }
                case 68:
                    var0 = new Array(0);
                    _fun55405_ip = 127;
                    continue _fun55405;
                case 74:
                    var2 = global;
                    var3 = var2.Object;
                    var2 = var3.values;
                    var1 = _closure1_slot17;
                    var1 = var1.userDiscountOffers;
                    var4 = null;
                    if (!(var4 == var1)) {
                        _fun55405_ip = 105;
                        continue _fun55405
                    }
                case 103:
                    var1 = {};
                case 105:
                    var3 = var2.bind(var3)(var1);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        _fun55406: for (var _fun55406_ip = 0;;) switch (_fun55406_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = var1.expires_at;
                                var0 = null;
                                var0 = var0 == var2;
                                if (!var0) {
                                    _fun55406_ip = 44;
                                    continue _fun55406
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
        var0[10] = var4;
        var4 = {};
        var6 = 'getUnacknowledgedOffers';
        var4.key = var6;
        var6 = function arg0() {
            _fun55407: for (var _fun55407_ip = 0;;) switch (_fun55407_ip) {
                case 0:
                    var3 = this;
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot8;
                    var0 = var4.getCurrentUser;
                    var5 = var0.bind(var4)();
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 10;
                    var4 = var4[var0];
                    var0 = undefined;
                    var4 = var6.bind(var0)(var4);
                    var0 = var4.isPremium;
                    var0 = var0.bind(var4)(var5);
                    if (!var0) {
                        _fun55407_ip = 83;
                        continue _fun55407
                    }
                case 64:
                    var0 = var3.canFractionalPremiumUserUseOffer;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun55407_ip = 83;
                        continue _fun55407
                    }
                case 77:
                    var0 = new Array(0);
                    _fun55407_ip = 126;
                    continue _fun55407;
                case 83:
                    var3 = global;
                    var4 = var3.Object;
                    var3 = var4.values;
                    var2 = _closure1_slot17;
                    var2 = var2.userTrialOffers;
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.filter;
                    var1 = function(arg0) { // Environment: var1
                        _fun55408: for (var _fun55408_ip = 0;;) switch (_fun55408_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure3_slot0;
                                var2 = var3.includes;
                                var0 = var1.trial_id;
                                var0 = var2.bind(var3)(var0);
                                if (!var0) {
                                    _fun55408_ip = 41;
                                    continue _fun55408
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
        var0[11] = var4;
        var4 = {};
        var6 = 'hasAnyUnexpiredOffer';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = _closure1_slot17;
            var0 = var0.userTrialOffers;
            var2 = var1.bind(var2)(var0);
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                _fun55410: for (var _fun55410_ip = 0;;) switch (_fun55410_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = var2.expires_at;
                        var0 = null;
                        var0 = var0 == var1;
                        if (var0) {
                            _fun55410_ip = 62;
                            continue _fun55410
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
        var0[12] = var4;
        var4 = {};
        var6 = 'hasAnyUnexpiredDiscountOffer';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Object;
            var1 = var2.values;
            var0 = _closure1_slot17;
            var0 = var0.userDiscountOffers;
            var2 = var1.bind(var2)(var0);
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                _fun55412: for (var _fun55412_ip = 0;;) switch (_fun55412_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = var2.expires_at;
                        var0 = null;
                        var0 = var0 == var1;
                        if (var0) {
                            _fun55412_ip = 62;
                            continue _fun55412
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
        var0[13] = var4;
        var4 = {};
        var6 = 'canFractionalPremiumUserUseOffer';
        var4.key = var6;
        var6 = function() {
            _fun55413: for (var _fun55413_ip = 0;;) switch (_fun55413_ip) {
                case 0:
                    var3 = _closure1_slot9;
                    var2 = var3.isFractionalPremiumActive;
                    var0 = {};
                    var4 = true;
                    var0.excludeReverseTrial = var4;
                    var0 = var2.bind(var3)(var0);
                    if (!var0) {
                        _fun55413_ip = 50;
                        continue _fun55413
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
        var0[14] = var4;
        var4 = {};
        var6 = 'getReferrer';
        var4.key = var6;
        var6 = function arg0() {
            _fun55414: for (var _fun55414_ip = 0;;) switch (_fun55414_ip) {
                case 0:
                    var3 = arg0;
                    var1 = null;
                    var2 = var1 == var3;
                    var0 = null;
                    if (var2) {
                        _fun55414_ip = 49;
                        continue _fun55414
                    }
                case 14:
                    var2 = _closure1_slot17;
                    var2 = var2.userTrialOffers;
                    var2 = var2[var3];
                    var3 = var1 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun55414_ip = 46;
                        continue _fun55414
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
        var0[15] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot17;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'forceReset';
        var4.key = var6;
        var6 = function() {
            var1 = _closure1_slot22;
            var0 = undefined;
            var1 = var1.bind(var0)();
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'lastFetchSuccessful';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot17;
            var0 = var0.lastFetchSuccessful;
            return var0;
        };
        var4.value = var5;
        var0[18] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'UserOfferStore';
    var7.displayName = var1;
    var7.persistKey = var1;
    var1 = new Array(3);
    var10 = function(arg0) { // Environment: var9
        _fun55418: for (var _fun55418_ip = 0;;) switch (_fun55418_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                var4 = var3 == var1;
                var0 = undefined;
                var2 = undefined;
                if (var4) {
                    _fun55418_ip = 22;
                    continue _fun55418
                }
            case 16:
                var2 = var1.userDiscounts;
            case 22:
                if (!(var3 == var2)) {
                    _fun55418_ip = 28;
                    continue _fun55418
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
        _fun55419: for (var _fun55419_ip = 0;;) switch (_fun55419_ip) {
            case 0:
                var0 = arg0;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun55419_ip = 13;
                    continue _fun55419
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
                    _fun55419_ip = 49;
                    continue _fun55419
                }
            case 42:
                var1 = delete var0.userAnnualOfferLastFetchedAtDate;
            case 49:
                return var0;
        }
    };
    var1[1] = var10;
    var10 = function(arg0) { // Environment: var9
        _fun55420: for (var _fun55420_ip = 0;;) switch (_fun55420_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                if (!(var3 == var2)) {
                    _fun55420_ip = 13;
                    continue _fun55420
                }
            case 9:
                var0 = undefined;
                return var0;
            case 13:
                var0 = var3 == var2;
                var1 = undefined;
                if (var0) {
                    _fun55420_ip = 28;
                    continue _fun55420
                }
            case 22:
                var1 = var2.isFetching;
            case 28:
                var0 = var2;
                if (!(var3 == var1)) {
                    _fun55420_ip = 61;
                    continue _fun55420
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
    var1 = 12;
    var1 = var5[var1];
    var13 = var6.bind(var0)(var1);
    var1 = {};
    var10 = function() {
        var1 = _closure1_slot17;
        var0 = true;
        var1.isFetching = var0;
        var0 = undefined;
        return var0;
    };
    var1.BILLING_USER_OFFER_FETCH_START = var10;
    var10 = function arg0() {
        _fun55422: for (var _fun55422_ip = 0;;) switch (_fun55422_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userTrialOffer;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun55422_ip = 30;
                    continue _fun55422
                }
            case 15:
                var1 = _closure1_slot22;
                var0 = undefined;
                var0 = var1.bind(var0)();
                _fun55422_ip = 53;
                continue _fun55422;
            case 30:
                var0 = _closure1_slot17;
                var1 = var0.userTrialOffers;
                var0 = var2.trial_id;
                var1[var0] = var2;
            case 53:
                var2 = _closure1_slot17;
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2.userOffersLastFetchedAtDate = var1;
                var1 = _closure1_slot17;
                var0 = false;
                var1.isFetching = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS = var10;
    var10 = function arg0() {
        _fun55423: for (var _fun55423_ip = 0;;) switch (_fun55423_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.userTrialOffer;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun55423_ip = 32;
                    continue _fun55423
                }
            case 15:
                var1 = _closure1_slot17;
                var0 = {};
                var1.userTrialOffers = var0;
                _fun55423_ip = 55;
                continue _fun55423;
            case 32:
                var0 = _closure1_slot17;
                var1 = var0.userTrialOffers;
                var0 = var2.trial_id;
                var1[var0] = var2;
            case 55:
                var1 = _closure1_slot17;
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
        _fun55424: for (var _fun55424_ip = 0;;) switch (_fun55424_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.userTrialOffer;
                var4 = var0.userDiscount;
                var5 = var0.userDiscountOffer;
                var0 = null;
                var1 = var0 == var3;
                if (!var1) {
                    _fun55424_ip = 34;
                    continue _fun55424
                }
            case 30:
                var1 = var0 == var4;
            case 34:
                if (!var1) {
                    _fun55424_ip = 41;
                    continue _fun55424
                }
            case 37:
                var1 = var0 == var5;
            case 41:
                if (!var1) {
                    _fun55424_ip = 57;
                    continue _fun55424
                }
            case 44:
                var2 = _closure1_slot22;
                var1 = undefined;
                var1 = var2.bind(var1)();
            case 57:
                if (!(var0 == var3)) {
                    _fun55424_ip = 143;
                    continue _fun55424
                }
            case 61:
                if (!(var0 == var4)) {
                    _fun55424_ip = 106;
                    continue _fun55424
                }
            case 65:
                if (!(var0 != var5)) {
                    _fun55424_ip = 178;
                    continue _fun55424
                }
            case 69:
                var1 = _closure1_slot17;
                var2 = var1.userDiscountOffers;
                var1 = var5.discount_id;
                var2[var1] = var5;
                var1 = _closure1_slot17;
                var0 = {};
                var1.userTrialOffers = var0;
                _fun55424_ip = 178;
                continue _fun55424;
            case 106:
                var1 = _closure1_slot17;
                var2 = var1.userDiscountOffers;
                var1 = var4.discount_id;
                var2[var1] = var4;
                var1 = _closure1_slot17;
                var0 = {};
                var1.userTrialOffers = var0;
                _fun55424_ip = 178;
                continue _fun55424;
            case 143:
                var1 = _closure1_slot17;
                var2 = var1.userTrialOffers;
                var1 = var3.trial_id;
                var2[var1] = var3;
                var1 = _closure1_slot17;
                var0 = {};
                var1.userDiscountOffers = var0;
            case 178:
                var2 = _closure1_slot17;
                var1 = global;
                var3 = var1.Date;
                var1 = var3.now;
                var1 = var1.bind(var3)();
                var2.userOffersLastFetchedAtDate = var1;
                var2 = _closure1_slot17;
                var1 = false;
                var2.isFetching = var1;
                var1 = _closure1_slot17;
                var0 = true;
                var1.lastFetchSuccessful = var0;
                var0 = undefined;
                return var0;
        }
    };
    var1.BILLING_USER_OFFER_FETCH_SUCCESS = var10;
    var10 = function arg0() {
        _fun55425: for (var _fun55425_ip = 0;;) switch (_fun55425_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.userTrialOffer;
                var2 = var0.userDiscount;
                var3 = var0.userDiscountOffer;
                var0 = null;
                if (!(var0 == var5)) {
                    _fun55425_ip = 44;
                    continue _fun55425
                }
            case 27:
                var4 = _closure1_slot17;
                var1 = {};
                var4.userTrialOffers = var1;
                _fun55425_ip = 67;
                continue _fun55425;
            case 44:
                var1 = _closure1_slot17;
                var4 = var1.userTrialOffers;
                var1 = var5.trial_id;
                var4[var1] = var5;
            case 67:
                if (!(var0 == var2)) {
                    _fun55425_ip = 117;
                    continue _fun55425
                }
            case 71:
                if (!(var0 == var3)) {
                    _fun55425_ip = 92;
                    continue _fun55425
                }
            case 75:
                var1 = _closure1_slot17;
                var0 = {};
                var1.userDiscountOffers = var0;
                _fun55425_ip = 140;
                continue _fun55425;
            case 92:
                var0 = _closure1_slot17;
                var1 = var0.userDiscountOffers;
                var0 = var3.discount_id;
                var1[var0] = var3;
                _fun55425_ip = 140;
                continue _fun55425;
            case 117:
                var0 = _closure1_slot17;
                var1 = var0.userDiscountOffers;
                var0 = var2.discount_id;
                var1[var0] = var2;
            case 140:
                var1 = _closure1_slot17;
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
        var2 = _closure1_slot22;
        var0 = undefined;
        var2 = var2.bind(var0)();
        var3 = _closure1_slot17;
        var2 = global;
        var4 = var2.Date;
        var2 = var4.now;
        var2 = var2.bind(var4)();
        var3.userOffersLastFetchedAtDate = var2;
        var3 = _closure1_slot17;
        var2 = false;
        var3.isFetching = var2;
        var1 = _closure1_slot17;
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
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/billing/UserOfferStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 6666, 1621, 4653, 3119, 1623, 3111, 566, 806, 2]);