// records/SubscriptionPlanRecord.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var0 = function() {
        _fun25286: for (var _fun25286_ip = 0;;) switch (_fun25286_ip) {
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
                _fun25286_ip = 74;
                continue _fun25286;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot8 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var3 = function arg0, arg1() {
        var1 = arg0;
        var0 = {};
        var2 = var1.amount;
        var0.amount = var2;
        var1 = var1.currency;
        var0.currency = var1;
        var1 = 0;
        var0.tax = var1;
        var1 = arg1;
        var0.taxInclusive = var1;
        return var0;
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var7[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 5;
    var4 = var7[var4];
    var5 = var5.bind(var0)(var4);
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var8 = var4.PremiumSubscriptionSKUs;
    var _closure1_slot5 = var8;
    var8 = var4.PremiumTypes;
    var _closure1_slot6 = var8;
    var4 = var4.SubscriptionPlans;
    var _closure1_slot7 = var4;
    var4 = function(arg0) { // Environment: var1
        var4 = function arg0() {
            _fun25291: for (var _fun25291_ip = 0;;) switch (_fun25291_ip) {
                case 0:
                    var1 = arg0;
                    var4 = this;
                    var0 = _closure1_slot0;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot3;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot2;
                    var0 = _closure1_slot8;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun25291_ip = 65;
                        continue _fun25291
                    }
                case 52:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun25291_ip = 103;
                    continue _fun25291;
                case 65:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot3;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 103:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = var1.id;
                    var0.id = var2;
                    var2 = var1.name;
                    var0.name = var2;
                    var2 = var1.interval;
                    var0.interval = var2;
                    var2 = var1.intervalCount;
                    var0.intervalCount = var2;
                    var2 = var1.taxInclusive;
                    var0.taxInclusive = var2;
                    var2 = var1.skuId;
                    var0.skuId = var2;
                    var2 = var1.currency;
                    var0.currency = var2;
                    var2 = var1.price;
                    var0.price = var2;
                    var1 = var1.prices;
                    var0.prices = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var5 = _closure1_slot4;
        var3 = undefined;
        var2 = arg0;
        var2 = var5.bind(var3)(var4, var2);
        var2 = _closure1_slot1;
        var5 = {};
        var1 = 'premiumSubscriptionType';
        var5.key = var1;
        var1 = function() {
            _fun25292: for (var _fun25292_ip = 0;;) switch (_fun25292_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.skuId;
                    var1 = _closure1_slot5;
                    var1 = var1.LEGACY;
                    if (!(var1 !== var2)) {
                        _fun25292_ip = 96;
                        continue _fun25292
                    }
                case 26:
                    var1 = _closure1_slot5;
                    var1 = var1.TIER_2;
                    if (!(var1 !== var2)) {
                        _fun25292_ip = 96;
                        continue _fun25292
                    }
                case 40:
                    var1 = _closure1_slot5;
                    var1 = var1.TIER_1;
                    if (!(var1 !== var2)) {
                        _fun25292_ip = 84;
                        continue _fun25292
                    }
                case 54:
                    var1 = _closure1_slot5;
                    var1 = var1.TIER_0;
                    if (!(var1 !== var2)) {
                        _fun25292_ip = 72;
                        continue _fun25292
                    }
                case 68:
                    var1 = null;
                    return var1;
                case 72:
                    var1 = _closure1_slot6;
                    var1 = var1.TIER_0;
                    return var1;
                case 84:
                    var1 = _closure1_slot6;
                    var1 = var1.TIER_1;
                    return var1;
                case 96:
                    var0 = _closure1_slot6;
                    var0 = var0.TIER_2;
                    return var0;
            }
        };
        var5.get = var1;
        var1 = new Array(2);
        var1[0] = var5;
        var5 = {};
        var6 = 'toServerData';
        var5.key = var6;
        var6 = function() {
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = {};
            var _closure3_slot1 = var2;
            var3 = global;
            var5 = var3.Object;
            var4 = var5.keys;
            var3 = var1.prices;
            var4 = var4.bind(var5)(var3);
            var3 = var4.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = _closure3_slot0;
                var1 = var1.prices;
                var3 = var1[var2];
                var1 = _closure3_slot1;
                var0 = {};
                var4 = {};
                var5 = var3.countryPrices;
                var5 = var5.countryCode;
                var4.country_code = var5;
                var5 = var3.countryPrices;
                var5 = var5.prices;
                var4.prices = var5;
                var0.country_prices = var4;
                var3 = var3.paymentSourcePrices;
                var0.payment_source_prices = var3;
                var1[var2] = var0;
                var0 = undefined;
                return var0;
            };
            var0 = var3.bind(var4)(var0);
            var0 = {};
            var3 = var1.id;
            var0.id = var3;
            var3 = var1.name;
            var0.name = var3;
            var3 = var1.skuId;
            var0.sku_id = var3;
            var3 = var1.interval;
            var0.interval = var3;
            var3 = var1.intervalCount;
            var0.interval_count = var3;
            var3 = var1.taxInclusive;
            var0.tax_inclusive = var3;
            var3 = var1.currency;
            var0.currency = var3;
            var3 = var1.price;
            var0.price = var3;
            var0.prices = var2;
            var1 = var1.price;
            var0.price_tier = var1;
            return var0;
        };
        var5.value = var6;
        var1[1] = var5;
        var5 = {};
        var6 = 'createFromServer';
        var5.key = var6;
        var0 = function arg0() {
            _fun25295: for (var _fun25295_ip = 0;;) switch (_fun25295_ip) {
                case 0:
                    var3 = arg0;
                    var _closure3_slot0 = var3;
                    var1 = {};
                    var4 = var3.prices;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun25295_ip = 66;
                        continue _fun25295
                    }
                case 23:
                    var2 = global;
                    var5 = var2.Object;
                    var4 = var5.keys;
                    var2 = var3.prices;
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.reduce;
                    var2 = function(arg0, arg1) { // Environment: var0
                        _fun25296: for (var _fun25296_ip = 0;;) switch (_fun25296_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = arg1;
                                var4 = _closure3_slot0;
                                var5 = var4.prices;
                                var4 = null;
                                if (!(var4 != var5)) {
                                    _fun25296_ip = 157;
                                    continue _fun25296
                                }
                            case 30:
                                var1 = _closure3_slot0;
                                var1 = var1.prices;
                                var4 = var1[var2];
                                var1 = {};
                                var5 = {};
                                var6 = var4.country_prices;
                                var6 = var6.country_code;
                                var5.countryCode = var6;
                                var6 = var4.country_prices;
                                var8 = var6.prices;
                                var7 = var8.map;
                                var6 = function(arg0) { // Environment: var3
                                    var3 = _closure1_slot9;
                                    var0 = _closure3_slot0;
                                    var2 = var0.tax_inclusive;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var3.bind(var1)(var0, var2);
                                    return var0;
                                };
                                var6 = var7.bind(var8)(var6);
                                var5.prices = var6;
                                var1.countryPrices = var5;
                                var5 = global;
                                var6 = var5.Object;
                                var5 = var6.entries;
                                var4 = var4.payment_source_prices;
                                var6 = var5.bind(var6)(var4);
                                var5 = var6.reduce;
                                var4 = function(arg0, arg1) { // Environment: var3
                                    _fun25298: for (var _fun25298_ip = 0;;) switch (_fun25298_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var5 = arg1;
                                            var1 = var5[Symbol.iterator];
                                            var5 = var1().next;
                                            var4 = var5().value;
                                            var2 = var1;
                                            var7 = undefined;
                                            var3 = var2 === var7;
                                            var2 = undefined;
                                            if (var3) {
                                                _fun25298_ip = 30;
                                                continue _fun25298
                                            }
                                        case 27:
                                            var2 = var4;
                                        case 30:
                                            var4 = undefined;
                                            if (var3) {
                                                _fun25298_ip = 60;
                                                continue _fun25298
                                            }
                                        case 35:
                                            var6 = var5().value;
                                            var5 = var1;
                                            var5 = var5 === var7;
                                            var4 = undefined;
                                            var3 = var5;
                                            if (var5) {
                                                _fun25298_ip = 60;
                                                continue _fun25298
                                            }
                                        case 54:
                                            var4 = var6;
                                            var3 = var5;
                                        case 60:
                                            if (var3) {
                                                _fun25298_ip = 66;
                                                continue _fun25298
                                            }
                                        case 63:
                                            var1.return();
                                        case 66:
                                            var3 = var4.map;
                                            var1 = function(arg0) { // Environment: var1
                                                var3 = _closure1_slot9;
                                                var0 = _closure3_slot0;
                                                var2 = var0.tax_inclusive;
                                                var1 = undefined;
                                                var0 = arg0;
                                                var0 = var3.bind(var1)(var0, var2);
                                                return var0;
                                            };
                                            var1 = var3.bind(var4)(var1);
                                            var0[var2] = var1;
                                            return var0;
                                    }
                                };
                                var3 = {};
                                var3 = var5.bind(var6)(var4, var3);
                                var1.paymentSourcePrices = var3;
                                var0[var2] = var1;
                                return var0;
                            case 157:
                                return var0;
                        }
                    };
                    var0 = {};
                    var1 = var4.bind(var5)(var2, var0);
                case 66:
                    var2 = _closure2_slot0;
                    var0 = {};
                    var4 = var3.id;
                    var0.id = var4;
                    var4 = var3.name;
                    var0.name = var4;
                    var4 = var3.interval;
                    var0.interval = var4;
                    var4 = var3.interval_count;
                    var0.intervalCount = var4;
                    var4 = var3.tax_inclusive;
                    var0.taxInclusive = var4;
                    var4 = var3.sku_id;
                    var0.skuId = var4;
                    var4 = var3.currency;
                    var0.currency = var4;
                    var3 = var3.price;
                    var0.price = var3;
                    var0.prices = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var8 = var1;
                    var7 = var0;
                    var0 = new var8[var2](var7, var6);
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
    var4 = var4.bind(var0)(var5);
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'records/SubscriptionPlanRecord.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.getPriceFromServer = var3;
    var1 = function arg0() {
        var0 = _closure1_slot7;
        var1 = var0.NONE_MONTH;
        var2 = new Array(4);
        var2[0] = var1;
        var1 = var0.NONE_3_MONTH;
        var2[1] = var1;
        var1 = var0.NONE_6_MONTH;
        var2[2] = var1;
        var0 = var0.NONE_YEAR;
        var2[3] = var0;
        var1 = var2.includes;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isNoneSubscription = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1629, 1623, 2]);