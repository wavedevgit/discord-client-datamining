// stores/billing/SubscriptionPlanStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var9
        _fun25220: for (var _fun25220_ip = 0;;) switch (_fun25220_ip) {
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
                _fun25220_ip = 74;
                continue _fun25220;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot22 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot22 = var0;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var9
        _fun25223: for (var _fun25223_ip = 0;;) switch (_fun25223_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun25223_ip = 45;
                    continue _fun25223
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun25223_ip = 54;
                    continue _fun25223
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun25223_ip = 342;
                    continue _fun25223
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun25223_ip = 322;
                    continue _fun25223
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun25223_ip = 282;
                    continue _fun25223
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun25223_ip = 269;
                    continue _fun25223
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
                    _fun25223_ip = 162;
                    continue _fun25223
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun25223_ip = 178;
                    continue _fun25223
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun25223_ip = 248;
                    continue _fun25223
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun25223_ip = 248;
                    continue _fun25223
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun25223_ip = 233;
                    continue _fun25223
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun25223_ip = 246;
                    continue _fun25223
                }
            case 233:
                var8 = _closure1_slot24;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun25223_ip = 264;
                continue _fun25223;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun25223_ip = 282;
                continue _fun25223;
            case 269:
                var6 = _closure1_slot24;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun25223_ip = 322;
                    continue _fun25223
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
                    _fun25223_ip = 329;
                    continue _fun25223
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun25224: for (var _fun25224_ip = 0;;) switch (_fun25224_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun25224_ip = 56;
                                continue _fun25224
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
                            _fun25224_ip = 67;
                            continue _fun25224;
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
    var _closure1_slot23 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var9
        _fun25225: for (var _fun25225_ip = 0;;) switch (_fun25225_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun25225_ip = 23;
                    continue _fun25225
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun25225_ip = 33;
                    continue _fun25225
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
                    _fun25225_ip = 70;
                    continue _fun25225
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun25225_ip = 55;
                    continue _fun25225
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function(arg0) { // Original name: addSubscriptionPlan, environment: var9
        _fun25226: for (var _fun25226_ip = 0;;) switch (_fun25226_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.skuId;
                var3 = _closure1_slot15;
                var2 = var0.id;
                var3[var2] = var0;
                var3 = var0.prices;
                var2 = _closure1_slot10;
                var2 = var2.DEFAULT;
                var2 = var3[var2];
                var3 = null;
                if (!(var3 != var2)) {
                    _fun25226_ip = 256;
                    continue _fun25226
                }
            case 54:
                var7 = global;
                var6 = var7.Set;
                var8 = var7.Object;
                var5 = var8.keys;
                var2 = var2.paymentSourcePrices;
                var14 = var5.bind(var8)(var2);
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var15 = var5;
                var2 = new var15[var6](var14, var13);
                var11 = var2 instanceof Object ? var2 : var5;
                var5 = _closure1_slot19;
                var2 = var0.id;
                var5[var2] = var11;
                var6 = var7.Array;
                var5 = var6.from;
                var8 = _closure1_slot20;
                var2 = var0.skuId;
                var2 = var8[var2];
                if (!(var3 == var2)) {
                    _fun25226_ip = 172;
                    continue _fun25226
                }
            case 146:
                var8 = var7.Set;
                var9 = var8.prototype;
                var9 = Object.create(var9, {
                    constructor: {
                        value: var8
                    }
                });
                var15 = var9;
                var8 = new var15[var8](var14);
                var2 = var8 instanceof Object ? var8 : var9;
            case 172:
                var13 = var5.bind(var6)(var2);
                var6 = _closure1_slot20;
                var5 = var0.skuId;
                var8 = var7.Set;
                var2 = new Array(0);
                var12 = 0;
                var14 = var2;
                var12 = arraySpread(var14, var13, var12);
                var10 = var7.Array;
                var7 = var10.from;
                var13 = var7.bind(var10)(var11);
                var14 = var2;
                var7 = arraySpread(var14, var13, var12);
                var7 = var8.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var8
                    }
                });
                var15 = var7;
                var14 = var2;
                var2 = new var15[var8](var14, var13);
                var2 = var2 instanceof Object ? var2 : var7;
                var6[var5] = var2;
            case 256:
                var2 = _closure1_slot16;
                var2 = var2[var4];
                if (!(var3 == var2)) {
                    _fun25226_ip = 322;
                    continue _fun25226
                }
            case 268:
                var3 = _closure1_slot16;
                var1 = global;
                var6 = var1.Set;
                var5 = var0.id;
                var1 = new Array(1);
                var1[0] = var5;
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var15 = var5;
                var14 = var1;
                var1 = new var15[var6](var14, var13);
                var1 = var1 instanceof Object ? var1 : var5;
                var3[var4] = var1;
                _fun25226_ip = 337;
                continue _fun25226;
            case 322:
                var1 = var2.add;
                var0 = var0.id;
                var0 = var1.bind(var2)(var0);
            case 337:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var3 = function() { // Original name: initializeNonePlans, environment: var9
        var2 = _closure1_slot11;
        var1 = _closure1_slot12;
        var1 = var1.NONE_MONTH;
        var1 = var2[var1];
        var2 = new Array(4);
        var2[0] = var1;
        var3 = _closure1_slot11;
        var1 = _closure1_slot12;
        var1 = var1.NONE_YEAR;
        var1 = var3[var1];
        var2[1] = var1;
        var3 = _closure1_slot11;
        var1 = _closure1_slot12;
        var1 = var1.NONE_3_MONTH;
        var1 = var3[var1];
        var2[2] = var1;
        var1 = _closure1_slot11;
        var0 = _closure1_slot12;
        var0 = var0.NONE_6_MONTH;
        var0 = var1[var0];
        var2[3] = var0;
        var1 = var2.forEach;
        var0 = function(arg0) { // Environment: var0
            var5 = arg0;
            var2 = _closure1_slot25;
            var3 = _closure1_slot8;
            var1 = var3.createFromServer;
            var0 = {};
            var6 = var5.id;
            var0.id = var6;
            var6 = var5.name;
            var0.name = var6;
            var6 = var5.interval;
            var0.interval = var6;
            var6 = var5.intervalCount;
            var0.interval_count = var6;
            var6 = true;
            var0.tax_inclusive = var6;
            var5 = var5.skuId;
            var0.sku_id = var5;
            var4 = _closure1_slot9;
            var4 = var4.USD;
            var0.currency = var4;
            var4 = 0;
            var0.price = var4;
            var0.price_tier = var4;
            var1 = var1.bind(var3)(var0);
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot26 = var3;
    var0 = function(arg0) { // Original name: addSubscriptionPlanFromServer, environment: var9
        var2 = _closure1_slot25;
        var3 = _closure1_slot8;
        var1 = var3.createFromServer;
        var0 = arg0;
        var1 = var1.bind(var3)(var0);
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var _closure1_slot27 = var0;
    var4 = function() { // Original name: reset, environment: var9
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var2 = 8;
        var5 = var4[var2];
        var0 = undefined;
        var7 = var3.bind(var0)(var5);
        var6 = var7.clearObject;
        var5 = _closure1_slot15;
        var5 = var6.bind(var7)(var5);
        var5 = var4[var2];
        var7 = var3.bind(var0)(var5);
        var6 = var7.clearObject;
        var5 = _closure1_slot16;
        var5 = var6.bind(var7)(var5);
        var6 = _closure1_slot17;
        var5 = var6.clear;
        var5 = var5.bind(var6)();
        var6 = _closure1_slot18;
        var5 = var6.clear;
        var5 = var5.bind(var6)();
        var5 = var4[var2];
        var7 = var3.bind(var0)(var5);
        var6 = var7.clearObject;
        var5 = _closure1_slot19;
        var5 = var6.bind(var7)(var5);
        var2 = var4[var2];
        var4 = var3.bind(var0)(var2);
        var3 = var4.clearObject;
        var2 = _closure1_slot20;
        var2 = var3.bind(var4)(var2);
        var1 = _closure1_slot26;
        var1 = var1.bind(var0)();
        return var0;
    };
    var10 = global;
    var11 = var10.Object;
    var8 = var11.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var11)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var8 = var1.CurrencyCodes;
    var _closure1_slot9 = var8;
    var1 = var1.PriceSetAssignmentPurchaseTypes;
    var _closure1_slot10 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var8 = var1.SubscriptionIntervalTypes;
    var11 = var1.SubscriptionPlanInfo;
    var _closure1_slot11 = var11;
    var11 = var1.SubscriptionPlans;
    var _closure1_slot12 = var11;
    var11 = var1.PremiumSubscriptionSKUs;
    var _closure1_slot13 = var11;
    var1 = var1.ACTIVE_PREMIUM_SKUS;
    var _closure1_slot14 = var1;
    var1 = {};
    var _closure1_slot15 = var1;
    var1 = {};
    var _closure1_slot16 = var1;
    var1 = var10.Set;
    var11 = var1.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var1
        }
    });
    var15 = var11;
    var1 = new var15[var1](var14);
    var1 = var1 instanceof Object ? var1 : var11;
    var _closure1_slot17 = var1;
    var10 = var10.Set;
    var11 = var10.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var10
        }
    });
    var15 = var11;
    var10 = new var15[var10](var14);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot18 = var10;
    var10 = {};
    var _closure1_slot19 = var10;
    var10 = {};
    var _closure1_slot20 = var10;
    var3 = var3.bind(var0)();
    var10 = var8.DAY;
    var3 = new Array(3);
    var3[0] = var10;
    var10 = var8.MONTH;
    var3[1] = var10;
    var8 = var8.YEAR;
    var3[2] = var8;
    var _closure1_slot21 = var3;
    var3 = 10;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var8 = var3.Store;
    var3 = function(arg0) { // Environment: var9
        var3 = function() { // Original name: SubscriptionPlanStore, environment: var5
            _fun25232: for (var _fun25232_ip = 0;;) switch (_fun25232_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot22;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun25232_ip = 69;
                        continue _fun25232
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun25232_ip = 105;
                    continue _fun25232;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
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
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'getPlanIdsForSkus';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            _fun25233: for (var _fun25233_ip = 0;;) switch (_fun25233_ip) {
                case 0:
                    var0 = new Array(0);
                    var2 = _closure1_slot23;
                    var7 = undefined;
                    var1 = arg0;
                    var6 = var2.bind(var7)(var1);
                    var2 = var6.bind(var7)();
                    var1 = var2.done;
                    var4 = global;
                    var3 = null;
                    if (var1) {
                        _fun25233_ip = 166;
                        continue _fun25233
                    }
                case 42:
                    var12 = var2.value;
                    var11 = var4.Array;
                    var10 = var11.from;
                    var1 = _closure1_slot16;
                    var1 = var1[var12];
                    if (!(var3 == var1)) {
                        _fun25233_ip = 96;
                        continue _fun25233
                    }
                case 70:
                    var12 = var4.Set;
                    var13 = var12.prototype;
                    var13 = Object.create(var13, {
                        constructor: {
                            value: var12
                        }
                    });
                    var17 = var13;
                    var12 = new var17[var12](var16);
                    var1 = var12 instanceof Object ? var12 : var13;
                case 96:
                    var11 = var10.bind(var11)(var1);
                    var10 = var11.sort;
                    var1 = function(arg0, arg1) { // Environment: var9
                        _fun25234: for (var _fun25234_ip = 0;;) switch (_fun25234_ip) {
                            case 0:
                                var2 = _closure1_slot15;
                                var1 = arg0;
                                var2 = var2[var1];
                                var3 = _closure1_slot15;
                                var1 = arg1;
                                var1 = var3[var1];
                                var5 = _closure1_slot21;
                                var3 = var5.indexOf;
                                var0 = var2.interval;
                                var3 = var3.bind(var5)(var0);
                                var4 = var5.indexOf;
                                var0 = var1.interval;
                                var0 = var4.bind(var5)(var0);
                                var0 = var3 - var0;
                                if (var0) {
                                    _fun25234_ip = 86;
                                    continue _fun25234
                                }
                            case 70:
                                var2 = var2.intervalCount;
                                var1 = var1.intervalCount;
                                var0 = var2 - var1;
                            case 86:
                                return var0;
                        }
                    };
                    var1 = var10.bind(var11)(var1);
                    var10 = var0.push;
                    var1 = new Array(0);
                    var16 = var1;
                    var15 = var11;
                    var14 = 0;
                    var11 = arraySpread(var16, var15, var14);
                    var16 = var10;
                    var15 = var1;
                    var14 = var0;
                    var1 = apply(var16, var15, var14);
                    var10 = var6.bind(var7)();
                    var1 = var10.done;
                    var2 = var10;
                    if (!var1) {
                        _fun25233_ip = 42;
                        continue _fun25233
                    }
                case 166:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(16);
        var0[0] = var4;
        var4 = {};
        var6 = 'getFetchedSKUIDs';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var3 = _closure1_slot1;
            var2 = _closure1_slot2;
            var1 = 9;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.keys;
            var0 = _closure1_slot16;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getForSKU';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun25236: for (var _fun25236_ip = 0;;) switch (_fun25236_ip) {
                case 0:
                    var0 = global;
                    var2 = var0.Array;
                    var1 = var2.from;
                    var3 = _closure1_slot16;
                    var0 = arg0;
                    var0 = var3[var0];
                    var3 = null;
                    if (!(var3 == var0)) {
                        _fun25236_ip = 37;
                        continue _fun25236
                    }
                case 33:
                    var0 = new Array(0);
                case 37:
                    var2 = var1.bind(var2)(var0);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure1_slot15;
                        var0 = arg0;
                        var0 = var1[var0];
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getForSkuAndInterval';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun25238: for (var _fun25238_ip = 0;;) switch (_fun25238_ip) {
                case 0:
                    var1 = arguments[2];
                    var3 = this;
                    var2 = arg1;
                    var _closure3_slot0 = var2;
                    var2 = undefined;
                    if (!(var1 === var2)) {
                        _fun25238_ip = 24;
                        continue _fun25238
                    }
                case 21:
                    var1 = 1;
                case 24:
                    var _closure3_slot1 = var1;
                    var2 = var3.getForSKU;
                    var1 = arg0;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.find;
                    var0 = function(arg0) { // Environment: var0
                        _fun25239: for (var _fun25239_ip = 0;;) switch (_fun25239_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = var2.interval;
                                var0 = _closure3_slot0;
                                var0 = var3 === var0;
                                if (!var0) {
                                    _fun25239_ip = 37;
                                    continue _fun25239
                                }
                            case 23:
                                var2 = var2.intervalCount;
                                var1 = _closure3_slot1;
                                var0 = var2 === var1;
                            case 37:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'get';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot15;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'isFetchingForSKU';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot17;
            var1 = var2.has;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'isFetchingForSKUs';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = arg0;
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.isFetchingForSKU;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'isLoadedForSKU';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun25244: for (var _fun25244_ip = 0;;) switch (_fun25244_ip) {
                case 0:
                    var3 = arg0;
                    var1 = _closure1_slot18;
                    var0 = var1.has;
                    var0 = var0.bind(var1)(var3);
                    var1 = !var0;
                    var0 = !var1;
                    if (!var1) {
                        _fun25244_ip = 66;
                        continue _fun25244
                    }
                case 29:
                    var4 = _closure1_slot17;
                    var1 = var4.has;
                    var1 = var1.bind(var4)(var3);
                    var1 = !var1;
                    if (!var1) {
                        _fun25244_ip = 63;
                        continue _fun25244
                    }
                case 49:
                    var2 = _closure1_slot16;
                    var3 = var2[var3];
                    var2 = null;
                    var1 = var2 != var3;
                case 63:
                    var0 = var1;
                case 66:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'isLoadedForSKUs';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = arg0;
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = var2.every;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.isLoadedForSKU;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'isFetchingForPremiumSKUs';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = _closure1_slot14;
            var1 = var2.some;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.isFetchingForSKU;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'isLoadedForPremiumSKUs';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = _closure1_slot14;
            var1 = var2.every;
            var0 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.isLoadedForSKU;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'ignoreSKUFetch';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var2 = _closure1_slot18;
            var1 = var2.add;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getPaymentSourcesForPlanId';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun25252: for (var _fun25252_ip = 0;;) switch (_fun25252_ip) {
                case 0:
                    var2 = arg0;
                    var3 = _closure1_slot19;
                    var0 = var3.hasOwnProperty;
                    var3 = var0.bind(var3)(var2);
                    var0 = null;
                    if (!var3) {
                        _fun25252_ip = 34;
                        continue _fun25252
                    }
                case 26:
                    var1 = _closure1_slot19;
                    var0 = var1[var2];
                case 34:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getPaymentSourceIds';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var2 = global;
            var0 = var2.Set;
            var3 = var0.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var0
                }
            });
            var6 = var3;
            var0 = new var6[var0](var5);
            var0 = var0 instanceof Object ? var0 : var3;
            var _closure3_slot0 = var0;
            var4 = var2.Object;
            var3 = var4.values;
            var2 = _closure1_slot19;
            var3 = var3.bind(var4)(var2);
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var2 = arg0;
                var1 = var2.forEach;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure3_slot0;
                    var1 = var2.add;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'hasPaymentSourceForSKUId';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun25256: for (var _fun25256_ip = 0;;) switch (_fun25256_ip) {
                case 0:
                    var3 = arg1;
                    var0 = _closure1_slot13;
                    var0 = var0.NONE;
                    var0 = var0 === var3;
                    if (var0) {
                        _fun25256_ip = 64;
                        continue _fun25256
                    }
                case 23:
                    var1 = _closure1_slot20;
                    var4 = var1[var3];
                    var1 = null;
                    var1 = var1 != var4;
                    if (!var1) {
                        _fun25256_ip = 61;
                        continue _fun25256
                    }
                case 40:
                    var2 = _closure1_slot20;
                    var4 = var2[var3];
                    var3 = var4.has;
                    var2 = arg0;
                    var1 = var3.bind(var4)(var2);
                case 61:
                    var0 = var1;
                case 64:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'hasPaymentSourceForSKUIds';
        var4.key = var6;
        var5 = function(arg0, arg1) { // Original name: value, environment: var5
            var2 = arg1;
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = arg0;
            var _closure3_slot1 = var1;
            var1 = var2.every;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure3_slot0;
                var2 = var3.hasPaymentSourceForSKUId;
                var1 = _closure3_slot1;
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[15] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var3.bind(var0)(var8);
    var3 = 'SubscriptionPlanStore';
    var8.displayName = var3;
    var3 = 11;
    var3 = var6[var3];
    var14 = var7.bind(var0)(var3);
    var3 = {};
    var10 = function(arg0) { // Original name: handleSubscriptionPlansFetch, environment: var9
        var0 = arg0;
        var2 = var0.skuId;
        var1 = _closure1_slot17;
        var0 = var1.add;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var3.SUBSCRIPTION_PLANS_FETCH = var10;
    var10 = function(arg0) { // Original name: handleSubscriptionPlansFetchSuccess, environment: var9
        var0 = arg0;
        var2 = var0.skuId;
        var4 = var0.subscriptionPlans;
        var5 = _closure1_slot16;
        var1 = global;
        var3 = var1.Set;
        var6 = var3.prototype;
        var6 = Object.create(var6, {
            constructor: {
                value: var3
            }
        });
        var8 = var6;
        var3 = new var8[var3](var7);
        var3 = var3 instanceof Object ? var3 : var6;
        var5[var2] = var3;
        var3 = _closure1_slot20;
        var1 = var1.Set;
        var5 = var1.prototype;
        var5 = Object.create(var5, {
            constructor: {
                value: var1
            }
        });
        var8 = var5;
        var1 = new var8[var1](var7);
        var1 = var1 instanceof Object ? var1 : var5;
        var3[var2] = var1;
        var3 = var4.forEach;
        var1 = _closure1_slot27;
        var1 = var3.bind(var4)(var1);
        var3 = _closure1_slot17;
        var1 = var3.delete;
        var1 = var1.bind(var3)(var2);
        var1 = _closure1_slot18;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var3.SUBSCRIPTION_PLANS_FETCH_SUCCESS = var10;
    var10 = function(arg0) { // Original name: handleSubscriptionPlansFetchFailure, environment: var9
        var0 = arg0;
        var2 = var0.skuId;
        var3 = _closure1_slot17;
        var1 = var3.delete;
        var1 = var1.bind(var3)(var2);
        var1 = _closure1_slot18;
        var0 = var1.delete;
        var0 = var0.bind(var1)(var2);
        var0 = undefined;
        return var0;
    };
    var3.SUBSCRIPTION_PLANS_FETCH_FAILURE = var10;
    var3.SUBSCRIPTION_PLANS_RESET = var4;
    var10 = function(arg0) { // Original name: handleGiftCodeResolveSuccess, environment: var9
        _fun25262: for (var _fun25262_ip = 0;;) switch (_fun25262_ip) {
            case 0:
                var0 = arg0;
                var0 = var0.giftCode;
                var2 = var0.subscription_plan;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun25262_ip = 41;
                    continue _fun25262
                }
            case 21:
                var2 = _closure1_slot27;
                var1 = var0.subscription_plan;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 41:
                var0 = undefined;
                return var0;
        }
    };
    var3.GIFT_CODE_RESOLVE_SUCCESS = var10;
    var9 = function(arg0) { // Original name: handleEntitlementGiftsFetchSuccess, environment: var9
        _fun25263: for (var _fun25263_ip = 0;;) switch (_fun25263_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.entitlements;
                var1 = _closure1_slot23;
                var0 = undefined;
                var4 = var1.bind(var0)(var2);
                var2 = var4.bind(var0)();
                var1 = var2.done;
                var3 = null;
                if (var1) {
                    _fun25263_ip = 82;
                    continue _fun25263
                }
            case 37:
                var1 = var2.value;
                var6 = var1.subscription_plan;
                if (!(var3 != var6)) {
                    _fun25263_ip = 67;
                    continue _fun25263
                }
            case 52:
                var6 = _closure1_slot27;
                var1 = var1.subscription_plan;
                var1 = var6.bind(var0)(var1);
            case 67:
                var6 = var4.bind(var0)();
                var1 = var6.done;
                var2 = var6;
                if (!var1) {
                    _fun25263_ip = 37;
                    continue _fun25263
                }
            case 82:
                return var0;
        }
    };
    var3.ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS = var9;
    var3.LOGOUT = var4;
    var4 = var8.prototype;
    var4 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var15 = var4;
    var13 = var3;
    var3 = new var15[var8](var14, var13, var12);
    var3 = var3 instanceof Object ? var3 : var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'stores/billing/SubscriptionPlanStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.subscriptionPlansFetchingForSKU = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3069, 660, 1615, 1671, 21, 566, 806, 2]);