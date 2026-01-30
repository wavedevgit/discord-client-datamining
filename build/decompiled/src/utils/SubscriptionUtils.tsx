// utils/SubscriptionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun56544: for (var _fun56544_ip = 0;;) switch (_fun56544_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun56544_ip = 45;
                    continue _fun56544
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun56544_ip = 54;
                    continue _fun56544
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun56544_ip = 342;
                    continue _fun56544
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun56544_ip = 322;
                    continue _fun56544
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun56544_ip = 282;
                    continue _fun56544
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun56544_ip = 269;
                    continue _fun56544
                }
            case 109:
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
                    _fun56544_ip = 162;
                    continue _fun56544
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun56544_ip = 178;
                    continue _fun56544
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun56544_ip = 248;
                    continue _fun56544
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun56544_ip = 248;
                    continue _fun56544
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun56544_ip = 233;
                    continue _fun56544
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun56544_ip = 246;
                    continue _fun56544
                }
            case 233:
                var8 = _closure1_slot11;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun56544_ip = 264;
                continue _fun56544;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun56544_ip = 282;
                continue _fun56544;
            case 269:
                var6 = _closure1_slot11;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun56544_ip = 322;
                    continue _fun56544
                }
            case 288:
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
            case 322:
                if (!var3) {
                    _fun56544_ip = 329;
                    continue _fun56544
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun56545: for (var _fun56545_ip = 0;;) switch (_fun56545_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun56545_ip = 56;
                                continue _fun56545
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
                            _fun56545_ip = 67;
                            continue _fun56545;
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
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun56546: for (var _fun56546_ip = 0;;) switch (_fun56546_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun56546_ip = 23;
                    continue _fun56546
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun56546_ip = 33;
                    continue _fun56546
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
                    _fun56546_ip = 70;
                    continue _fun56546
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun56546_ip = 55;
                    continue _fun56546
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var4 = function(arg0) { // Original name: getSubscriptionPlans, environment: var1
        var0 = arg0;
        var2 = var0.items;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure1_slot5;
            var2 = var3.get;
            var0 = arg0;
            var0 = var0.planId;
            var0 = var2.bind(var3)(var0);
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 5;
            var1 = var3[var1];
            var4 = undefined;
            var3 = var2.bind(var4)(var1);
            var1 = null;
            var2 = var1 != var0;
            var1 = 'Unable to fetch plan';
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot12 = var4;
    var3 = function(arg0, arg1, arg2) { // Original name: subscriptionCanSwitchImmediately, environment: var1
        _fun56549: for (var _fun56549_ip = 0;;) switch (_fun56549_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var3 = arg2;
                var1 = var0.getCurrentSubscriptionPlanIdForGroup;
                var2 = var1.bind(var0)(var3);
                var1 = var0.type;
                var0 = _closure1_slot7;
                var0 = var0.PREMIUM;
                var0 = var1 === var0;
                if (!var0) {
                    _fun56549_ip = 51;
                    continue _fun56549
                }
            case 45:
                var1 = null;
                var0 = var1 == var2;
            case 51:
                if (var0) {
                    _fun56549_ip = 175;
                    continue _fun56549
                }
            case 54:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 5;
                var9 = var8[var1];
                var7 = undefined;
                var11 = var6.bind(var7)(var9);
                var9 = null;
                var10 = var9 != var2;
                var9 = 'Current subscription has no plan in group';
                var9 = var11.bind(var7)(var10, var9);
                var1 = var8[var1];
                var6 = var6.bind(var7)(var1);
                var1 = _closure1_slot8;
                var1 = var1.PREMIUM_YEAR_TIER_1;
                var1 = var2 === var1;
                if (!var1) {
                    _fun56549_ip = 134;
                    continue _fun56549
                }
            case 120:
                var5 = _closure1_slot8;
                var5 = var5.PREMIUM_MONTH_TIER_2;
                var1 = var4 === var5;
            case 134:
                var5 = !var1;
                var1 = 'Unexpected plan switch';
                var1 = var6.bind(var7)(var5, var1);
                var1 = var3.indexOf;
                var2 = var1.bind(var3)(var2);
                var1 = var3.indexOf;
                var1 = var1.bind(var3)(var4);
                var0 = var2 < var1;
            case 175:
                return var0;
        }
    };
    var _closure1_slot13 = var3;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var9 = var7[var5];
    var5 = arg3;
    var5 = var5.bind(var0)(var9);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.SubscriptionStatusTypes;
    var _closure1_slot6 = var8;
    var5 = var5.SubscriptionTypes;
    var _closure1_slot7 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var8 = var5.SubscriptionPlans;
    var _closure1_slot8 = var8;
    var5 = var5.SubscriptionPlanInfo;
    var _closure1_slot9 = var5;
    var5 = 11;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'utils/SubscriptionUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.getSubscriptionPlans = var4;
    var4 = function(arg0) { // Original name: getSubscriptionSKUs, environment: var1
        var2 = _closure1_slot12;
        var1 = undefined;
        var0 = arg0;
        var2 = var2.bind(var1)(var0);
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.skuId;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.getSubscriptionSKUs = var4;
    var2.subscriptionCanSwitchImmediately = var3;
    var3 = function(arg0, arg1, arg2) { // Original name: subscriptionCanDowngrade, environment: var1
        var4 = _closure1_slot13;
        var3 = undefined;
        var2 = arg0;
        var1 = arg1;
        var0 = arg2;
        var0 = var4.bind(var3)(var2, var1, var0);
        var0 = !var0;
        return var0;
    };
    var2.subscriptionCanDowngrade = var3;
    var3 = function(arg0, arg1) { // Original name: getOrFetchSubscriptionPlan, environment: var1
        _fun56553: for (var _fun56553_ip = 0;;) switch (_fun56553_ip) {
            case 0:
                var9 = arg0;
                var2 = _closure1_slot5;
                var0 = var2.get;
                var0 = var0.bind(var2)(var9);
                var4 = null;
                if (!(var4 == var0)) {
                    _fun56553_ip = 179;
                    continue _fun56553
                }
            case 29:
                var2 = _closure1_slot9;
                var2 = var2[var9];
                var7 = _closure1_slot1;
                var6 = _closure1_slot2;
                var3 = 5;
                var5 = var6[var3];
                var3 = undefined;
                var7 = var7.bind(var3)(var5);
                var5 = var4 != var2;
                var4 = global;
                var4 = var4.HermesInternal;
                var8 = var4.concat;
                var4 = 'Missing hardcoded subscriptionPlan: ';
                var4 = var8.bind(var4)(var9);
                var4 = var7.bind(var3)(var5, var4);
                var5 = _closure1_slot0;
                var4 = 6;
                var4 = var6[var4];
                var5 = var5.bind(var3)(var4);
                var4 = var5.castPremiumSubscriptionAsSkuId;
                var2 = var2.skuId;
                var4 = var4.bind(var5)(var2);
                var5 = _closure1_slot5;
                var2 = var5.isFetchingForSKU;
                var2 = var2.bind(var5)(var4);
                if (var2) {
                    _fun56553_ip = 179;
                    continue _fun56553
                }
            case 144:
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 7;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.fetchSubscriptionPlansForSKU;
                var1 = arg1;
                var1 = var2.bind(var3)(var4, var1);
            case 179:
                return var0;
        }
    };
    var2.getOrFetchSubscriptionPlan = var3;
    var3 = function(arg0, arg1) { // Original name: useGetOrFetchSubscriptionPlan, environment: var1
        var7 = arg0;
        var6 = arg1;
        var _closure2_slot0 = var7;
        var _closure2_slot1 = var6;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 8;
        var0 = var4[var0];
        var5 = undefined;
        var8 = var3.bind(var5)(var0);
        var4 = var8.useStateFromStoresArray;
        var0 = _closure1_slot5;
        var3 = new Array(1);
        var3[0] = var0;
        var0 = function() { // Environment: var1
            _fun56555: for (var _fun56555_ip = 0;;) switch (_fun56555_ip) {
                case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var2;
                    var2 = null;
                    if (!var3) {
                        _fun56555_ip = 39;
                        continue _fun56555
                    }
                case 18:
                    var4 = _closure1_slot5;
                    var3 = var4.get;
                    var0 = _closure2_slot0;
                    var2 = var3.bind(var4)(var0);
                case 39:
                    var0 = new Array(2);
                    var0[0] = var2;
                    var1 = var1 != var2;
                    if (!var1) {
                        _fun56555_ip = 78;
                        continue _fun56555
                    }
                case 54:
                    var4 = _closure1_slot5;
                    var3 = var4.isFetchingForSKU;
                    var2 = var2.skuId;
                    var1 = var3.bind(var4)(var2);
                case 78:
                    var0[1] = var1;
                    return var0;
            }
        };
        var4 = var4.bind(var8)(var3, var0);
        var3 = _closure1_slot3;
        var0 = 2;
        var4 = var3.bind(var5)(var4, var0);
        var0 = 0;
        var0 = var4[var0];
        var _closure2_slot2 = var0;
        var3 = 1;
        var5 = var4[var3];
        var _closure2_slot3 = var5;
        var4 = _closure1_slot4;
        var3 = var4.useEffect;
        var2 = new Array(4);
        var2[0] = var0;
        var2[1] = var7;
        var2[2] = var6;
        var2[3] = var5;
        var1 = function() { // Environment: var1
            _fun56556: for (var _fun56556_ip = 0;;) switch (_fun56556_ip) {
                case 0:
                    var1 = _closure2_slot2;
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun56556_ip = 169;
                        continue _fun56556
                    }
                case 16:
                    var1 = _closure2_slot0;
                    if (!(var3 != var1)) {
                        _fun56556_ip = 169;
                        continue _fun56556
                    }
                case 27:
                    var1 = _closure2_slot3;
                    if (var1) {
                        _fun56556_ip = 169;
                        continue _fun56556
                    }
                case 37:
                    var1 = _closure1_slot9;
                    var9 = _closure2_slot0;
                    var1 = var1[var9];
                    var5 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var4 = 5;
                    var4 = var7[var4];
                    var6 = undefined;
                    var5 = var5.bind(var6)(var4);
                    var4 = var3 != var1;
                    var3 = global;
                    var3 = var3.HermesInternal;
                    var8 = var3.concat;
                    var3 = 'Missing hardcoded subscriptionPlan: ';
                    var3 = var8.bind(var3)(var9);
                    var3 = var5.bind(var6)(var4, var3);
                    var5 = _closure1_slot0;
                    var2 = 7;
                    var2 = var7[var2];
                    var3 = var5.bind(var6)(var2);
                    var2 = var3.fetchSubscriptionPlansForSKU;
                    var4 = 6;
                    var4 = var7[var4];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.castPremiumSubscriptionAsSkuId;
                    var1 = var1.skuId;
                    var1 = var4.bind(var5)(var1);
                    var0 = _closure2_slot1;
                    var0 = var2.bind(var3)(var1, var0);
                case 169:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.useGetOrFetchSubscriptionPlan = var3;
    var3 = function(arg0) { // Original name: getSubscriptionPauseDurations, environment: var1
        _fun56557: for (var _fun56557_ip = 0;;) switch (_fun56557_ip) {
            case 0:
                var2 = arg0;
                var0 = global;
                var4 = var0.Object;
                var3 = var4.keys;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var7 = 9;
                var1 = var1[var7];
                var6 = undefined;
                var1 = var5.bind(var6)(var1);
                var1 = var1.PauseDuration;
                var4 = var3.bind(var4)(var1);
                var3 = var4.filter;
                var1 = function(arg0) { // Environment: var1
                    var0 = global;
                    var2 = var0.isNaN;
                    var3 = var0.Number;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var3.bind(var1)(var0);
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var1 = var3.bind(var4)(var1);
                var4 = var2.status;
                var3 = _closure1_slot6;
                var3 = var3.PAUSED;
                if (!(var4 === var3)) {
                    _fun56557_ip = 309;
                    continue _fun56557
                }
            case 91:
                var4 = var2.pauseEndsAt;
                var3 = null;
                if (!(var3 == var4)) {
                    _fun56557_ip = 123;
                    continue _fun56557
                }
            case 103:
                var3 = {};
                var4 = new Array(0);
                var3.durations = var4;
                var4 = 0;
                var3.currentDaysPaused = var4;
                return var3;
            case 123:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 10;
                var9 = var5[var3];
                var10 = var4.bind(var6)(var9);
                var9 = var2.currentPeriodStart;
                var10 = var10.bind(var6)(var9);
                var3 = var5[var3];
                var3 = var4.bind(var6)(var3);
                var2 = var2.pauseEndsAt;
                var9 = var3.bind(var6)(var2);
                var3 = var0.Math;
                var2 = var3.round;
                var5 = var9.diff;
                var4 = 'days';
                var0 = true;
                var0 = var5.bind(var9)(var10, var4, var0);
                var2 = var2.bind(var3)(var0);
                var3 = new Array(0);
                var0 = _closure1_slot10;
                var5 = var0.bind(var6)(var1);
                var4 = var5.bind(var6)();
                var0 = var4.done;
                if (var0) {
                    _fun56557_ip = 295;
                    continue _fun56557
                }
            case 234:
                var9 = var4.value;
                var10 = _closure1_slot0;
                var0 = _closure1_slot2;
                var0 = var0[var7];
                var0 = var10.bind(var6)(var0);
                var0 = var0.PauseDuration;
                var0 = var0[var9];
                if (!(var0 > var2)) {
                    _fun56557_ip = 280;
                    continue _fun56557
                }
            case 270:
                var0 = var3.push;
                var0 = var0.bind(var3)(var9);
            case 280:
                var9 = var5.bind(var6)();
                var0 = var9.done;
                var4 = var9;
                if (!var0) {
                    _fun56557_ip = 234;
                    continue _fun56557
                }
            case 295:
                var0 = {};
                var0.durations = var3;
                var0.currentDaysPaused = var2;
                return var0;
            case 309:
                var0 = {};
                var0.durations = var1;
                var1 = 0;
                var0.currentDaysPaused = var1;
                return var0;
        }
    };
    var2.getSubscriptionPauseDurations = var3;
    var1 = function(arg0) { // Original name: didBeginPurchaseFlowOnFractionalPremium, environment: var1
        _fun56559: for (var _fun56559_ip = 0;;) switch (_fun56559_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 != var3;
                if (!var0) {
                    _fun56559_ip = 48;
                    continue _fun56559
                }
            case 12:
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.isMoment;
                var0 = var1.bind(var2)(var3);
            case 48:
                if (!var0) {
                    _fun56559_ip = 91;
                    continue _fun56559
                }
            case 51:
                var2 = var3.isSameOrAfter;
                var5 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var4 = undefined;
                var1 = var5.bind(var4)(var1);
                var1 = var1.bind(var4)();
                var0 = var2.bind(var3)(var1);
            case 91:
                return var0;
        }
    };
    var2.didBeginPurchaseFlowOnFractionalPremium = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 3075, 660, 1615, 44, 3068, 5587, 566, 6841, 3004, 2]);