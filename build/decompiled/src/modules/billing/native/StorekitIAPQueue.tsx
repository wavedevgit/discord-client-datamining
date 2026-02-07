// modules/billing/native/StorekitIAPQueue.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        _fun59171: for (var _fun59171_ip = 0;;) switch (_fun59171_ip) {
            case 0:
                var2 = arg0;
                var1 = new Array(0);
                var0 = var2.subscription;
                var0 = var0.promotionalOffers;
                var3 = null;
                if (!(var3 != var0)) {
                    _fun59171_ip = 54;
                    continue _fun59171
                }
            case 25:
                var0 = var2.subscription;
                var5 = var0.promotionalOffers;
                var4 = var5.map;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot8;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var1 = var4.bind(var5)(var0);
            case 54:
                var0 = var2.subscription;
                var0 = var0.introductoryOffer;
                if (!(var3 != var0)) {
                    _fun59171_ip = 106;
                    continue _fun59171
                }
            case 70:
                var3 = var1.push;
                var5 = _closure1_slot8;
                var0 = var2.subscription;
                var4 = var0.introductoryOffer;
                var0 = undefined;
                var0 = var5.bind(var0)(var4);
                var0 = var3.bind(var1)(var0);
            case 106:
                var3 = global;
                var4 = var3.Number;
                var7 = var2.price;
                var6 = var7.toFixed;
                var8 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 5;
                var0 = var5[var0];
                var5 = undefined;
                var0 = var8.bind(var5)(var0);
                var8 = var0.CurrencyExponents;
                var9 = var2.currency;
                var0 = var9.toLowerCase;
                var0 = var0.bind(var9)();
                var0 = var8[var0];
                var0 = var6.bind(var7)(var0);
                var4 = var4.bind(var5)(var0);
                var0 = {};
                var7 = var3.String;
                var6 = var2.id;
                var6 = var7.bind(var5)(var6);
                var0.identifier = var6;
                var0.price = var4;
                var8 = var2.displayPrice;
                var7 = var8.split;
                var6 = /[0-9]/;
                var7 = var7.bind(var8)(var6);
                var6 = 0;
                var6 = var7[var6];
                var0.currencySymbol = var6;
                var7 = var2.currency;
                var6 = var7.toLowerCase;
                var6 = var6.bind(var7)();
                var0.currencyCode = var6;
                var3 = var3.String;
                var3 = var3.bind(var5)(var4);
                var0.priceString = var3;
                var3 = '';
                var0.countryCode = var3;
                var3 = false;
                var0.downloadable = var3;
                var3 = var2.description;
                var0.description = var3;
                var2 = var2.displayName;
                var0.title = var2;
                var0.discounts = var1;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        _fun59173: for (var _fun59173_ip = 0;;) switch (_fun59173_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.paymentMode;
                var2 = 'FREETRIAL';
                var0 = 'freeTrial';
                if (!(var0 !== var3)) {
                    _fun59173_ip = 65;
                    continue _fun59173
                }
            case 25:
                var0 = 'payAsYouGo';
                if (!(var0 !== var3)) {
                    _fun59173_ip = 59;
                    continue _fun59173
                }
            case 35:
                var0 = 'payUpFront';
                if (!(var0 !== var3)) {
                    _fun59173_ip = 51;
                    continue _fun59173
                }
            case 45:
                var2 = '';
                _fun59173_ip = 65;
                continue _fun59173;
            case 51:
                var2 = 'PAYUPFRONT';
                _fun59173_ip = 65;
                continue _fun59173;
            case 59:
                var2 = 'PAYASYOUGO';
            case 65:
                var0 = {};
                var3 = var1.id;
                var0.identifier = var3;
                var3 = 'SUBSCRIPTION';
                var0.type = var3;
                var3 = var1.period;
                var4 = var3.value;
                var3 = var4.toString;
                var3 = var3.bind(var4)();
                var0.numberOfPeriods = var3;
                var4 = var1.price;
                var3 = var4.toString;
                var3 = var3.bind(var4)();
                var0.price = var3;
                var3 = var1.displayPrice;
                var0.localizedPrice = var3;
                var0.paymentMode = var2;
                var1 = var1.period;
                var2 = var1.unit;
                var1 = var2.toUpperCase;
                var1 = var1.bind(var2)();
                var0.subscriptionPeriod = var1;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativeModules;
    var6 = 4;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.convertToAlpha2;
    var _closure1_slot5 = var6;
    var3 = var3.RNIapIosSk2;
    var _closure1_slot6 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot3;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = new Array(0);
            var2._queue = var1;
            var1 = false;
            var2._processingQueue = var1;
            return var0;
        };
        var _closure2_slot1 = var2;
        var4 = {};
        var1 = 'fetchSubscriptions';
        var4.key = var1;
        var1 = function arg0() {
            var2 = this;
            var _closure3_slot0 = var2;
            var1 = arg0;
            var _closure3_slot1 = var1;
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var3
                }
            });
            var4 = function(arg0, arg1) { // Environment: var0
                var0 = arg0;
                var _closure4_slot0 = var0;
                var0 = arg1;
                var _closure4_slot1 = var0;
                var0 = _closure3_slot0;
                var3 = var0._queue;
                var2 = var3.push;
                var4 = _closure1_slot2;
                var0 = undefined;
                var1 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun59179: for (var _fun59179_ip = 0;;) switch (_fun59179_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun59179_ip = 113;
                                    continue _fun59179
                                }
                            case 7: // try_start_0
                                var4 = _closure1_slot6;
                                var3 = var4.getItems;
                                var1 = _closure3_slot1;
                                var1 = var3.bind(var4)(var1);
                                SaveGenerator(address = 36);
                            case 34:
                                return var1;
                            case 36:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun59179_ip = 89;
                                    continue _fun59179
                                }
                            case 42:
                                var4 = var1.filter;
                                var3 = function(arg0) { // Environment: var3
                                    var0 = arg0;
                                    var1 = var0.subscription;
                                    var0 = null;
                                    var0 = var0 != var1;
                                    return var0;
                                };
                                var4 = var4.bind(var1)(var3);
                                var3 = var4.map;
                                var2 = _closure1_slot7;
                                var4 = var3.bind(var4)(var2);
                                var3 = _closure4_slot0;
                                var2 = undefined;
                                var2 = var3.bind(var2)(var4);
                            case 87: // try_end0
                                _fun59179_ip = 108;
                                continue _fun59179;
                            case 89:
                                return var1;
                            case 92: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var2 = _closure4_slot1;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3);
                            case 108:
                                var1 = undefined;
                                return var1;
                            case 113:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var4.bind(var0)(var1);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var5 = var1;
            var0 = new var5[var3](var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            var1 = var2.processQueue;
            var1 = var1.bind(var2)();
            return var0;
        };
        var4.value = var1;
        var1 = new Array(3);
        var1[0] = var4;
        var4 = {};
        var6 = 'fetchProducts';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var _closure3_slot0 = var2;
            var1 = arg0;
            var _closure3_slot1 = var1;
            var1 = global;
            var3 = var1.Promise;
            var1 = var3.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var3
                }
            });
            var4 = function(arg0, arg1) { // Environment: var0
                var0 = arg0;
                var _closure4_slot0 = var0;
                var0 = arg1;
                var _closure4_slot1 = var0;
                var0 = _closure3_slot0;
                var3 = var0._queue;
                var2 = var3.push;
                var4 = _closure1_slot2;
                var0 = undefined;
                var1 = function*() { // Environment: var1
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun59184: for (var _fun59184_ip = 0;;) switch (_fun59184_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun59184_ip = 122;
                                    continue _fun59184
                                }
                            case 7: // try_start_0
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var1 = 6;
                                var1 = var3[var1];
                                var3 = undefined;
                                var4 = var2.bind(var3)(var1);
                                var2 = var4.getProducts;
                                var1 = {};
                                var5 = _closure3_slot1;
                                var1.skus = var5;
                                var4 = var2.bind(var4)(var1);
                                var2 = var4.then;
                                var1 = function(arg0) { // Environment: var1
                                    var3 = arg0;
                                    var2 = var3.filter;
                                    var1 = function(arg0) { // Environment: var0
                                        var0 = arg0;
                                        var1 = var0.type;
                                        var0 = 'iap';
                                        var0 = var0 === var1;
                                        return var0;
                                    };
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.map;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun59187: for (var _fun59187_ip = 0;;) switch (_fun59187_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var2 = var0;
                                                var3 = '';
                                                var0 = var0.countryCode;
                                                var4 = null;
                                                if (!(var4 != var0)) {
                                                    _fun59187_ip = 69;
                                                    continue _fun59187
                                                }
                                            case 22:
                                                var0 = var2;
                                                var0 = var0.countryCode;
                                                var1 = var0.length;
                                                var0 = 0;
                                                if (!(var0 !== var1)) {
                                                    _fun59187_ip = 69;
                                                    continue _fun59187
                                                }
                                            case 42: // try_start_0
                                                var5 = _closure1_slot5;
                                                var0 = var2;
                                                var1 = var0.countryCode;
                                                var0 = undefined;
                                                var3 = var5.bind(var0)(var1);
                                            case 65: // try_end0
                                                _fun59187_ip = 69;
                                                continue _fun59187;
                                            case 67: // catch_target0
                                                CatchBlockStart(arg_register = 0);
                                            case 69:
                                                var0 = {};
                                                var5 = var2;
                                                var1 = var5.productId;
                                                var0.identifier = var1;
                                                var1 = global;
                                                var7 = var1.parseFloat;
                                                var6 = var5.price;
                                                var1 = undefined;
                                                var6 = var7.bind(var1)(var6);
                                                var0.price = var6;
                                                var7 = var5.localizedPrice;
                                                var5 = var4 == var7;
                                                var4 = undefined;
                                                if (var5) {
                                                    _fun59187_ip = 156;
                                                    continue _fun59187
                                                }
                                            case 126:
                                                var6 = var7.split;
                                                var5 = /[0-9]/;
                                                var6 = var6.bind(var7)(var5);
                                                var5 = 0;
                                                var4 = var6[var5];
                                            case 156:
                                                var0.currencySymbol = var4;
                                                var4 = var2;
                                                var6 = var4.currency;
                                                var5 = var6.toLowerCase;
                                                var5 = var5.bind(var6)();
                                                var0.currencyCode = var5;
                                                var5 = var4.price;
                                                var0.priceString = var5;
                                                var0.countryCode = var3;
                                                var3 = false;
                                                var0.downloadable = var3;
                                                var3 = var4.description;
                                                var0.description = var3;
                                                var3 = var4.title;
                                                var0.title = var3;
                                                var3 = 'discounts';
                                                var3 = var3 in var4;
                                                var1 = undefined;
                                                if (!var3) {
                                                    _fun59187_ip = 245;
                                                    continue _fun59187
                                                }
                                            case 239:
                                                var1 = var2.discounts;
                                            case 245:
                                                var0.discounts = var1;
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var1 = var2.bind(var4)(var1);
                                SaveGenerator(address = 78);
                            case 76:
                                return var1;
                            case 78:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                if (var2) {
                                    _fun59184_ip = 98;
                                    continue _fun59184
                                }
                            case 84:
                                var2 = _closure4_slot0;
                                var2 = var2.bind(var3)(var1);
                            case 96: // try_end0
                                _fun59184_ip = 117;
                                continue _fun59184;
                            case 98:
                                return var1;
                            case 101: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var2 = _closure4_slot1;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3);
                            case 117:
                                var1 = undefined;
                                return var1;
                            case 122:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var4.bind(var0)(var1);
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var5 = var1;
            var0 = new var5[var3](var4, var3);
            var0 = var0 instanceof Object ? var0 : var1;
            var1 = var2.processQueue;
            var1 = var1.bind(var2)();
            return var0;
        };
        var4.value = var6;
        var1[1] = var4;
        var4 = {};
        var6 = 'processQueue';
        var4.key = var6;
        var7 = _closure1_slot2;
        var0 = undefined;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun59189: for (var _fun59189_ip = 0;;) switch (_fun59189_ip) {
                    case 0:
                        StartGenerator();
                        var3 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59189_ip = 129;
                            continue _fun59189
                        }
                    case 10:
                        var1 = var3._processingQueue;
                        if (var1) {
                            _fun59189_ip = 124;
                            continue _fun59189
                        }
                    case 19:
                        var1 = true;
                        var3._processingQueue = var1;
                    case 27: // try_start_0
                        var1 = var3._queue;
                        var1 = var1.length;
                        var5 = 0;
                        var4 = undefined;
                        if (!(var1 > var5)) {
                            _fun59189_ip = 91;
                            continue _fun59189
                        }
                    case 46:
                        var2 = var3._queue;
                        var1 = var2.shift;
                        var1 = var1.bind(var2)();
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 70);
                    case 68:
                        return var1;
                    case 70:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun59189_ip = 101;
                            continue _fun59189
                        }
                    case 76:
                        var2 = var3._queue;
                        var2 = var2.length;
                        if (var2 > var5) {
                            _fun59189_ip = 46;
                            continue _fun59189
                        }
                    case 91: // try_end0
                        var2 = false;
                        var3._processingQueue = var2;
                        _fun59189_ip = 124;
                        continue _fun59189;
                    case 101:
                        var2 = false;
                        var3._processingQueue = var2;
                        return var1;
                    case 112: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var2 = false;
                        var3._processingQueue = var2;
                        throw var1;
                    case 124:
                        var1 = undefined;
                        return var1;
                    case 129:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot0 = var6;
        var5 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var5;
        var1[2] = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/billing/native/StorekitIAPQueue.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 27, 3964, 4609, 7212, 2]);