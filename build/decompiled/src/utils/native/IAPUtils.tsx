// utils/native/IAPUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var9;
    var0 = function(arg0) { // Original name: serializePurchaseResponse, environment: var1
        _fun58447: for (var _fun58447_ip = 0;;) switch (_fun58447_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 7;
                var0 = var3[var0];
                var4 = undefined;
                var5 = var2.bind(var4)(var0);
                var0 = var1.transactionId;
                var3 = null;
                var2 = var3 != var0;
                var0 = 'should have transactionId';
                var0 = var5.bind(var4)(var2, var0);
                var0 = {};
                var2 = var1.originalTransactionDateIOS;
                var0.originalTransactionDate = var2;
                var2 = var1.originalTransactionIdentifierIOS;
                var3 = var3 != var2;
                var2 = undefined;
                if (!var3) {
                    _fun58447_ip = 99;
                    continue _fun58447
                }
            case 80:
                var3 = global;
                var5 = var3.parseInt;
                var3 = var1.originalTransactionIdentifierIOS;
                var2 = var5.bind(var4)(var3);
            case 99:
                var0.originalTransactionIdentifier = var2;
                var2 = var1.transactionDate;
                var0.transactionDate = var2;
                var2 = global;
                var3 = var2.parseInt;
                var2 = var1.transactionId;
                var2 = var3.bind(var4)(var2);
                var0.transactionIdentifier = var2;
                var2 = var1.productId;
                var0.productIdentifier = var2;
                var2 = var1.transactionReceipt;
                var0.transactionReceipt = var2;
                var1 = var1.verificationResultIOS;
                var0.jwsRepresentation = var1;
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var5 = function(arg0) { // Original name: convertToUUID, environment: var1
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 12;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.v5;
        var1 = _closure1_slot7;
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var5;
    var0 = function() { // Original name: _restorePurchases, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun58451: for (var _fun58451_ip = 0;;) switch (_fun58451_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58451_ip = 342;
                            continue _fun58451
                        }
                    case 12:
                        var1 = arg0;
                        var2 = var1.fullRestore;
                        var9 = undefined;
                        var _closure4_slot0 = var9;
                        SaveGenerator(address = 31);
                    case 29:
                        return var9;
                    case 31:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun58451_ip = 339;
                            continue _fun58451
                        }
                    case 40:
                        var4 = _closure1_slot13;
                        var4 = var4.bind(var9)();
                        if (var4) {
                            _fun58451_ip = 61;
                            continue _fun58451
                        }
                    case 54:
                        var4 = new Array(0);
                        return var4;
                    case 61:
                        var6 = _closure1_slot9;
                        if (var2) {
                            _fun58451_ip = 228;
                            continue _fun58451
                        }
                    case 71:
                        var2 = var6.getPendingTransactions;
                        var2 = var2.bind(var6)();
                        SaveGenerator(address = 85);
                    case 83:
                        return var2;
                    case 85:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun58451_ip = 225;
                            continue _fun58451
                        }
                    case 94:
                        var7 = _closure1_slot1;
                        var11 = _closure1_slot2;
                        var4 = 11;
                        var8 = var11[var4];
                        var12 = var7.bind(var9)(var8);
                        var10 = var12.map;
                        var8 = function(arg0) { // Environment: var5
                            var0 = arg0;
                            var0 = var0.id;
                            return var0;
                        };
                        var8 = var10.bind(var12)(var2, var8);
                        _closure4_slot0 = var8;
                        var4 = var11[var4];
                        var10 = var7.bind(var9)(var4);
                        var8 = var10.filter;
                        var7 = _closure1_slot0;
                        var4 = 6;
                        var4 = var11[var4];
                        var11 = var7.bind(var9)(var4);
                        var7 = var11.getAvailablePurchases;
                        var4 = {};
                        var12 = false;
                        var4.onlyIncludeActiveItems = var12;
                        var7 = var7.bind(var11)(var4);
                        SaveGenerator(address = 188);
                    case 186:
                        return var7;
                    case 188:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 4);
                        if (var4) {
                            _fun58451_ip = 222;
                            continue _fun58451
                        }
                    case 194:
                        var4 = function(arg0) { // Environment: var5
                            _fun58454: for (var _fun58454_ip = 0;;) switch (_fun58454_ip) {
                                case 0:
                                    var1 = arg0;
                                    var2 = var1.transactionId;
                                    var0 = null;
                                    var0 = var0 != var2;
                                    if (!var0) {
                                        _fun58454_ip = 56;
                                        continue _fun58454
                                    }
                                case 18:
                                    var3 = _closure4_slot0;
                                    var2 = var3.includes;
                                    var4 = global;
                                    var5 = var4.parseInt;
                                    var4 = var1.transactionId;
                                    var1 = undefined;
                                    var1 = var5.bind(var1)(var4);
                                    var0 = var2.bind(var3)(var1);
                                case 56:
                                    return var0;
                            }
                        };
                        var10 = var8.bind(var10)(var7, var4);
                        var8 = var10.map;
                        var4 = function(arg0) { // Environment: var5
                            var3 = arg0;
                            var0 = {};
                            var0.originalPurchase = var3;
                            var2 = _closure1_slot10;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            var0.purchaseResponse = var1;
                            return var0;
                        };
                        var4 = var8.bind(var10)(var4);
                        _fun58451_ip = 330;
                        continue _fun58451;
                    case 222:
                        return var7;
                    case 225:
                        return var2;
                    case 228:
                        var2 = var6.sync;
                        var2 = var2.bind(var6)();
                        SaveGenerator(address = 242);
                    case 240:
                        return var2;
                    case 242:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun58451_ip = 336;
                            continue _fun58451
                        }
                    case 248:
                        var7 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var6 = 11;
                        var6 = var10[var6];
                        var7 = var7.bind(var9)(var6);
                        var6 = var7.map;
                        var8 = _closure1_slot0;
                        var3 = 6;
                        var3 = var10[var3];
                        var9 = var8.bind(var9)(var3);
                        var8 = var9.getAvailablePurchases;
                        var3 = {};
                        var10 = false;
                        var3.onlyIncludeActiveItems = var10;
                        var3 = var8.bind(var9)(var3);
                        SaveGenerator(address = 313);
                    case 311:
                        return var3;
                    case 313:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 8);
                        if (var8) {
                            _fun58451_ip = 333;
                            continue _fun58451
                        }
                    case 319:
                        var5 = function(arg0) { // Environment: var5
                            var3 = arg0;
                            var0 = {};
                            var0.originalPurchase = var3;
                            var2 = _closure1_slot10;
                            var1 = undefined;
                            var1 = var2.bind(var1)(var3);
                            var0.purchaseResponse = var1;
                            return var0;
                        };
                        var4 = var6.bind(var7)(var3, var5);
                    case 330:
                        return var4;
                    case 333:
                        return var3;
                    case 336:
                        return var2;
                    case 339:
                        return var1;
                    case 342:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot12 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var4 = function() { // Original name: isStorekit2Available, environment: var1
        _fun58456: for (var _fun58456_ip = 0;;) switch (_fun58456_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 8;
                var0 = var2[var0];
                var2 = undefined;
                var3 = var3.bind(var2)(var0);
                var0 = var3.isIOS;
                var0 = var0.bind(var3)();
                if (!var0) {
                    _fun58456_ip = 74;
                    continue _fun58456
                }
            case 38:
                var4 = _closure1_slot9;
                var3 = null;
                var3 = var3 == var4;
                var2 = undefined;
                if (var3) {
                    _fun58456_ip = 67;
                    continue _fun58456
                }
            case 53:
                var3 = _closure1_slot9;
                var1 = var3.isAvailable;
                var2 = var1.bind(var3)();
            case 67:
                var1 = 1;
                var0 = var1 === var2;
            case 74:
                return var0;
        }
    };
    var _closure1_slot13 = var4;
    var3 = function() { // Original name: fetchStoreFront, environment: var1
        var0 = undefined;
        var3 = _closure1_slot14;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0 = function() { // Original name: _fetchStoreFront, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun58460: for (var _fun58460_ip = 0;;) switch (_fun58460_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58460_ip = 297;
                            continue _fun58460
                        }
                    case 10:
                        var4 = undefined;
                        var5 = undefined;
                        var7 = undefined;
                        var6 = undefined;
                        var2 = _closure1_slot13;
                        var2 = var2.bind(var4)();
                        if (var2) {
                            _fun58460_ip = 37;
                            continue _fun58460
                        }
                    case 32:
                        var2 = null;
                        return var2;
                    case 37: // try_start_0
                        var3 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 6;
                        var2 = var8[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.getStorefront;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address = 71);
                    case 69:
                        return var2;
                    case 71:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun58460_ip = 256;
                            continue _fun58460
                        }
                    case 80:
                        var5 = var2;
                        var8 = null;
                        if (!(var8 != var2)) {
                            _fun58460_ip = 220;
                            continue _fun58460
                        }
                    case 92:
                        var9 = _closure1_slot4;
                        var3 = var5;
                        var9 = var9.bind(var4)(var3);
                        var7 = var9;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot2;
                        var3 = 15;
                        var3 = var11[var3];
                        var3 = var10.bind(var4)(var3);
                        var3 = var3.GeneratedPaymentCurrenciesSets;
                        var3 = var3.APPLE_STORE_COUNTRY_CURRENCIES;
                        var3 = var3[var9];
                        var6 = var3;
                        if (!(var8 != var3)) {
                            _fun58460_ip = 165;
                            continue _fun58460
                        }
                    case 150:
                        var3 = {};
                        var3.country = var7;
                        var3.currency = var6;
                    case 162: // try_end0
                        return var3;
                    case 165: // try_start_1
                        var3 = global;
                        var6 = var3.Error;
                        var7 = var5;
                        var3 = var3.HermesInternal;
                        var5 = var3.concat;
                        var3 = 'Unable to get currency from storefront ';
                        var12 = var5.bind(var3)(var7);
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var6
                            }
                        });
                        var13 = var5;
                        var3 = new var13[var6](var12, var11);
                        var3 = var3 instanceof Object ? var3 : var5;
                        throw var3;
                    case 220:
                        var3 = global;
                        var6 = var3.Error;
                        var3 = var6.prototype;
                        var5 = Object.create(var3, {
                            constructor: {
                                value: var6
                            }
                        });
                        var12 = 'Unable to fetch storefront from react-native-iap';
                        var13 = var5;
                        var3 = new var13[var6](var12, var11);
                        var3 = var3 instanceof Object ? var3 : var5;
                        throw var3;
                    case 256: // try_end1
                        return var2;
                    case 259: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 3);
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var1 = 13;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.captureBillingException;
                        var1 = var1.bind(var2)(var3);
                        var1 = null;
                        return var1;
                    case 297:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot14 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var11 = var0.Object;
    var7 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var9[var0];
    var0 = undefined;
    var6 = var10.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var9[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.NativeModules;
    var7 = 2;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.convertToAlpha2;
    var _closure1_slot4 = var7;
    var7 = 3;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 4;
    var7 = var9[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 5;
    var7 = var9[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.NAMESPACE_SNOWFLAKE_UUID;
    var _closure1_slot7 = var7;
    var7 = var6.InAppUtils;
    var _closure1_slot8 = var7;
    var6 = var6.RNIapIosSk2;
    var _closure1_slot9 = var6;
    var6 = 6;
    var6 = var9[var6];
    var10 = var8.bind(var0)(var6);
    var7 = var10.setup;
    var6 = {};
    var11 = 'STOREKIT_HYBRID_MODE';
    var6.storekitMode = var11;
    var6 = var7.bind(var10)(var6);
    var6 = {};
    var7 = function() { // Original name: loadProducts, environment: var1
        _fun58461: for (var _fun58461_ip = 0;;) switch (_fun58461_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 8;
                var0 = var3[var0];
                var10 = undefined;
                var2 = var2.bind(var10)(var0);
                var0 = var2.isIOS;
                var0 = var0.bind(var2)();
                var7 = global;
                var3 = var7.Promise;
                if (var0) {
                    _fun58461_ip = 66;
                    continue _fun58461
                }
            case 46:
                var2 = var3.resolve;
                var0 = new Array(0);
                var0 = var2.bind(var3)(var0);
                _fun58461_ip = 226;
                continue _fun58461;
            case 66:
                var2 = var3.all;
                var6 = _closure1_slot1;
                var11 = _closure1_slot2;
                var5 = 9;
                var4 = var11[var5];
                var12 = var6.bind(var10)(var4);
                var8 = var12.fetchSubscriptions;
                var14 = var7.Object;
                var13 = var14.values;
                var9 = _closure1_slot0;
                var4 = 10;
                var1 = var11[var4];
                var1 = var9.bind(var10)(var1);
                var1 = var1.ProductIds;
                var1 = var13.bind(var14)(var1);
                var8 = var8.bind(var12)(var1);
                var1 = new Array(2);
                var1[0] = var8;
                var5 = var11[var5];
                var6 = var6.bind(var10)(var5);
                var5 = var6.fetchProducts;
                var8 = var7.Object;
                var7 = var8.values;
                var4 = var11[var4];
                var4 = var9.bind(var10)(var4);
                var4 = var4.ProductIds;
                var4 = var7.bind(var8)(var4);
                var4 = var5.bind(var6)(var4);
                var1[1] = var4;
                var3 = var2.bind(var3)(var1);
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var1
                    _fun58462: for (var _fun58462_ip = 0;;) switch (_fun58462_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = var4[Symbol.iterator];
                            var4 = var1().next;
                            var5 = var4().value;
                            var2 = var1;
                            var3 = undefined;
                            var2 = var2 === var3;
                            var6 = undefined;
                            if (var2) {
                                _fun58462_ip = 29;
                                continue _fun58462
                            }
                        case 26:
                            var6 = var5;
                        case 29:
                            var5 = undefined;
                            if (var2) {
                                _fun58462_ip = 59;
                                continue _fun58462
                            }
                        case 34:
                            var7 = var4().value;
                            var4 = var1;
                            var4 = var4 === var3;
                            var5 = undefined;
                            var2 = var4;
                            if (var4) {
                                _fun58462_ip = 59;
                                continue _fun58462
                            }
                        case 53:
                            var5 = var7;
                            var2 = var4;
                        case 59:
                            if (var2) {
                                _fun58462_ip = 65;
                                continue _fun58462
                            }
                        case 62:
                            var1.return();
                        case 65:
                            var _closure3_slot0 = var3;
                            var1 = global;
                            var1 = var1.Set;
                            var2 = var1.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var12 = var2;
                            var1 = new var12[var1](var11);
                            var1 = var1 instanceof Object ? var1 : var2;
                            _closure3_slot0 = var1;
                            var2 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var1 = 11;
                            var1 = var4[var1];
                            var3 = var2.bind(var3)(var1);
                            var2 = var3.filter;
                            var1 = new Array(0);
                            var9 = 0;
                            var11 = var1;
                            var10 = var6;
                            var9 = arraySpread(var11, var10, var9);
                            var11 = var1;
                            var10 = var5;
                            var4 = arraySpread(var11, var10, var9);
                            var0 = function(arg0) { // Environment: var0
                                _fun58463: for (var _fun58463_ip = 0;;) switch (_fun58463_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var4 = _closure3_slot0;
                                        var3 = var4.has;
                                        var0 = var1.identifier;
                                        var0 = var3.bind(var4)(var0);
                                        var0 = !var0;
                                        if (!var0) {
                                            _fun58463_ip = 54;
                                            continue _fun58463
                                        }
                                    case 32:
                                        var3 = _closure3_slot0;
                                        var2 = var3.add;
                                        var1 = var1.identifier;
                                        var1 = var2.bind(var3)(var1);
                                        var0 = true;
                                    case 54:
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                    }
                };
                var0 = var2.bind(var3)(var1);
            case 226:
                return var0;
        }
    };
    var6.loadProducts = var7;
    var7 = function(arg0, arg1, arg2) { // Original name: purchaseProduct, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0, arg1) { // Environment: var0
                var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                    _fun58467: for (var _fun58467_ip = 0;;) switch (_fun58467_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun58467_ip = 288;
                                continue _fun58467
                            }
                        case 10:
                            var6 = arg0;
                            var2 = arg1;
                            var1 = undefined;
                            var5 = undefined;
                            var4 = _closure1_slot5;
                            var3 = var4.getCurrentUser;
                            var4 = var3.bind(var4)();
                            var3 = null;
                            if (!(var3 == var4)) {
                                _fun58467_ip = 89;
                                continue _fun58467
                            }
                        case 42:
                            var4 = var2;
                            var3 = global;
                            var9 = var3.Error;
                            var3 = var9.prototype;
                            var8 = Object.create(var3, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var12 = 'purchaseProduct: no valid user';
                            var13 = var8;
                            var3 = new var13[var9](var12, var11);
                            var3 = var3 instanceof Object ? var3 : var8;
                            var3 = var4.bind(var1)(var3);
                            _fun58467_ip = 285;
                            continue _fun58467;
                        case 89: // try_start_0
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var9 = 6;
                            var3 = var3[var9];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.clearTransactionIOS;
                            var3 = var3.bind(var4)();
                            SaveGenerator(address = 123);
                        case 121:
                            return var3;
                        case 123:
                            ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                            if (var4) {
                                _fun58467_ip = 275;
                                continue _fun58467
                            }
                        case 132:
                            var8 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var9];
                            var9 = var8.bind(var1)(var4);
                            var8 = var9.requestPurchase;
                            var4 = {};
                            var11 = _closure2_slot0;
                            var4.sku = var11;
                            var11 = _closure2_slot2;
                            var4.appAccountToken = var11;
                            var10 = _closure2_slot1;
                            var4.withOffer = var10;
                            var4 = var8.bind(var9)(var4);
                            SaveGenerator(address = 198);
                        case 196:
                            return var4;
                        case 198:
                            ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                            if (var8) {
                                _fun58467_ip = 272;
                                continue _fun58467
                            }
                        case 204:
                            var5 = var4;
                            var8 = global;
                            var9 = var8.Object;
                            var9 = var4 instanceof var9;
                            if (var9) {
                                _fun58467_ip = 256;
                                continue _fun58467
                            }
                        case 222:
                            var10 = var8.Error;
                            var8 = var10.prototype;
                            var9 = Object.create(var8, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var12 = 'Unable to select a platform, no request was made';
                            var13 = var9;
                            var8 = new var13[var10](var12, var11);
                            var8 = var8 instanceof Object ? var8 : var9;
                            throw var8;
                        case 256:
                            var7 = _closure1_slot10;
                            var5 = var7.bind(var1)(var5);
                            var5 = var6.bind(var1)(var5);
                        case 270: // try_end0
                            _fun58467_ip = 285;
                            continue _fun58467;
                        case 272:
                            return var4;
                        case 275:
                            return var3;
                        case 278: // catch_target0
                            CatchBlockStart(arg_register = 3);
                            var2 = var2.bind(var1)(var3);
                        case 285:
                            return var1;
                        case 288:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var0 = undefined;
        var3 = var1.bind(var0)();
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var6.purchaseProduct = var7;
    var7 = function() { // Original name: canMakePayments, environment: var1
        var0 = global;
        var2 = var0.Promise;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = function(arg0, arg1) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var1 = arg1;
            var _closure3_slot1 = var1;
            var2 = _closure1_slot8;
            var1 = var2.canMakePayments;
            var0 = function(arg0) { // Environment: var0
                _fun58471: for (var _fun58471_ip = 0;;) switch (_fun58471_ip) {
                    case 0:
                        var2 = arg0;
                        if (var2) {
                            _fun58471_ip = 48;
                            continue _fun58471
                        }
                    case 6:
                        var3 = _closure3_slot1;
                        var0 = global;
                        var0 = var0.Error;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var5 = var1;
                        var0 = new var5[var0](var4);
                        var1 = var0 instanceof Object ? var0 : var1;
                        var0 = undefined;
                        var0 = var3.bind(var0)(var1);
                    case 48:
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var1.bind(var0)(var2);
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var6.canMakePayments = var7;
    var7 = function() { // Original name: restorePurchases, environment: var1
        var0 = undefined;
        var3 = _closure1_slot12;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var6.restorePurchases = var7;
    var7 = function() { // Original name: loadGenericProducts, environment: var1
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.all;
        var5 = _closure1_slot1;
        var8 = _closure1_slot2;
        var4 = 9;
        var3 = var8[var4];
        var7 = undefined;
        var10 = var5.bind(var7)(var3);
        var9 = var10.fetchSubscriptions;
        var6 = _closure1_slot0;
        var3 = 10;
        var0 = var8[var3];
        var0 = var6.bind(var7)(var0);
        var0 = var0.ProductIds;
        var11 = var0.GENERIC_SUBSCRIPTION;
        var0 = new Array(1);
        var0[0] = var11;
        var9 = var9.bind(var10)(var0);
        var0 = new Array(2);
        var0[0] = var9;
        var4 = var8[var4];
        var5 = var5.bind(var7)(var4);
        var4 = var5.fetchProducts;
        var3 = var8[var3];
        var3 = var6.bind(var7)(var3);
        var3 = var3.ProductIds;
        var6 = var3.GENERIC_CONSUMABLE;
        var3 = new Array(1);
        var3[0] = var6;
        var3 = var4.bind(var5)(var3);
        var0[1] = var3;
        var2 = var1.bind(var2)(var0);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            _fun58474: for (var _fun58474_ip = 0;;) switch (_fun58474_ip) {
                case 0:
                    var4 = arg0;
                    var0 = var4[Symbol.iterator];
                    var4 = var0().next;
                    var2 = var4().value;
                    var1 = var0;
                    var6 = undefined;
                    var1 = var1 === var6;
                    var3 = undefined;
                    if (var1) {
                        _fun58474_ip = 27;
                        continue _fun58474
                    }
                case 24:
                    var3 = var2;
                case 27:
                    var2 = undefined;
                    if (var1) {
                        _fun58474_ip = 57;
                        continue _fun58474
                    }
                case 32:
                    var5 = var4().value;
                    var4 = var0;
                    var4 = var4 === var6;
                    var2 = undefined;
                    var1 = var4;
                    if (var4) {
                        _fun58474_ip = 57;
                        continue _fun58474
                    }
                case 51:
                    var2 = var5;
                    var1 = var4;
                case 57:
                    if (var1) {
                        _fun58474_ip = 63;
                        continue _fun58474
                    }
                case 60:
                    var0.return();
                case 63:
                    var0 = new Array(0);
                    var7 = 0;
                    var9 = var0;
                    var8 = var3;
                    var7 = arraySpread(var9, var8, var7);
                    var9 = var0;
                    var8 = var2;
                    var1 = arraySpread(var9, var8, var7);
                    return var0;
            }
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.loadGenericProducts = var7;
    var6.fetchStoreFront = var3;
    var7 = 16;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'utils/native/IAPUtils.tsx';
    var7 = var8.bind(var9)(var7);
    var2.default = var6;
    var2.convertToUUID = var5;
    var5 = function(arg0, arg1, arg2) { // Original name: makeIAPRequest, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0, arg1) { // Environment: var0
                var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                    _fun58478: for (var _fun58478_ip = 0;;) switch (_fun58478_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun58478_ip = 360;
                                continue _fun58478
                            }
                        case 10:
                            var5 = arg0;
                            var2 = arg1;
                            var1 = undefined;
                            var10 = undefined;
                            var8 = undefined;
                            var6 = _closure1_slot5;
                            var3 = var6.getCurrentUser;
                            var6 = var3.bind(var6)();
                            var10 = var6;
                            var3 = null;
                            if (!(var3 == var6)) {
                                _fun58478_ip = 94;
                                continue _fun58478
                            }
                        case 47:
                            var6 = var2;
                            var3 = global;
                            var9 = var3.Error;
                            var3 = var9.prototype;
                            var7 = Object.create(var3, {
                                constructor: {
                                    value: var9
                                }
                            });
                            var12 = 'purchaseProduct: no valid user';
                            var13 = var7;
                            var3 = new var13[var9](var12, var11);
                            var3 = var3 instanceof Object ? var3 : var7;
                            var3 = var6.bind(var1)(var3);
                            _fun58478_ip = 357;
                            continue _fun58478;
                        case 94: // try_start_0
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 6;
                            var3 = var7[var3];
                            var7 = var6.bind(var1)(var3);
                            var6 = var7.requestPurchase;
                            var3 = {};
                            var11 = _closure2_slot0;
                            var3.requestJSONString = var11;
                            var11 = _closure2_slot1;
                            var3.sku = var11;
                            var11 = _closure1_slot11;
                            var10 = var10.id;
                            var10 = var11.bind(var1)(var10);
                            var3.appAccountToken = var10;
                            var10 = false;
                            var3.andDangerouslyFinishTransactionAutomaticallyIOS = var10;
                            var9 = _closure2_slot2;
                            var3.useACOM = var9;
                            var3 = var6.bind(var7)(var3);
                            SaveGenerator(address = 191);
                        case 189:
                            return var3;
                        case 191:
                            ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                            if (var6) {
                                _fun58478_ip = 316;
                                continue _fun58478
                            }
                        case 197:
                            var8 = var3;
                            var7 = global;
                            var6 = var7.Object;
                            var6 = var3 instanceof var6;
                            if (var6) {
                                _fun58478_ip = 249;
                                continue _fun58478
                            }
                        case 215:
                            var10 = var7.Error;
                            var6 = var10.prototype;
                            var9 = Object.create(var6, {
                                constructor: {
                                    value: var10
                                }
                            });
                            var12 = 'Unable to select a platform, no request was made';
                            var13 = var9;
                            var6 = new var13[var10](var12, var11);
                            var6 = var6 instanceof Object ? var6 : var9;
                            throw var6;
                        case 249:
                            var6 = var5;
                            var5 = {};
                            var9 = _closure1_slot10;
                            var10 = var8;
                            var9 = var9.bind(var1)(var10);
                            var5.purchaseResponse = var9;
                            var9 = var7.Array;
                            var7 = var9.isArray;
                            var7 = var7.bind(var9)(var10);
                            var9 = var8;
                            if (var7) {
                                _fun58478_ip = 298;
                                continue _fun58478
                            }
                        case 293:
                            var7 = var9;
                            _fun58478_ip = 304;
                            continue _fun58478;
                        case 298:
                            var8 = 0;
                            var7 = var9[var8];
                        case 304:
                            var5.originalPurchase = var7;
                            var5 = var6.bind(var1)(var5);
                        case 314: // try_end0
                            _fun58478_ip = 357;
                            continue _fun58478;
                        case 316:
                            return var3;
                        case 319: // catch_target0
                            CatchBlockStart(arg_register = 3);
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 13;
                            var4 = var6[var4];
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.captureBillingException;
                            var4 = var4.bind(var5)(var3);
                            var2 = var2.bind(var1)(var3);
                        case 357:
                            return var1;
                        case 360:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var0 = undefined;
        var3 = var1.bind(var0)();
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var2.makeIAPRequest = var5;
    var5 = function(arg0) { // Original name: useCanPurchaseIAP, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 14;
        var6 = var5[var2];
        var3 = undefined;
        var10 = var4.bind(var3)(var6);
        var9 = var10.useStateFromStores;
        var6 = _closure1_slot5;
        var8 = new Array(1);
        var8[0] = var6;
        var7 = function() { // Environment: var0
            _fun58481: for (var _fun58481_ip = 0;;) switch (_fun58481_ip) {
                case 0:
                    var1 = _closure1_slot5;
                    var0 = var1.getCurrentUser;
                    var2 = var0.bind(var1)();
                    var0 = null;
                    var3 = var0 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun58481_ip = 33;
                        continue _fun58481
                    }
                case 27:
                    var1 = var2.verified;
                case 33:
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun58481_ip = 43;
                        continue _fun58481
                    }
                case 40:
                    var0 = var1;
                case 43:
                    return var0;
            }
        };
        var6 = new Array(0);
        var6 = var9.bind(var10)(var8, var7, var6);
        var _closure2_slot1 = var6;
        var2 = var5[var2];
        var3 = var4.bind(var3)(var2);
        var2 = var3.useStateFromStores;
        var4 = _closure1_slot6;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            _fun58482: for (var _fun58482_ip = 0;;) switch (_fun58482_ip) {
                case 0:
                    var1 = _closure1_slot6;
                    var0 = var1.isReady;
                    var0 = var0.bind(var1)();
                    var0 = !var0;
                    if (var0) {
                        _fun58482_ip = 84;
                        continue _fun58482
                    }
                case 23:
                    var2 = _closure1_slot6;
                    var1 = var2.isBusy;
                    var1 = var1.bind(var2)();
                    if (!var1) {
                        _fun58482_ip = 81;
                        continue _fun58482
                    }
                case 40:
                    var5 = _closure2_slot0;
                    var2 = null;
                    var2 = var2 == var5;
                    if (var2) {
                        _fun58482_ip = 78;
                        continue _fun58482
                    }
                case 56:
                    var5 = _closure1_slot6;
                    var4 = var5.isPurchasingProduct;
                    var3 = _closure2_slot0;
                    var3 = var4.bind(var5)(var3);
                    var2 = !var3;
                case 78:
                    var1 = var2;
                case 81:
                    var0 = var1;
                case 84:
                    if (var0) {
                        _fun58482_ip = 97;
                        continue _fun58482
                    }
                case 87:
                    var1 = _closure2_slot1;
                    var0 = !var1;
                case 97:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var1, var0);
        var0 = !var0;
        return var0;
    };
    var2.useCanPurchaseIAP = var5;
    var2.isStorekit2Available = var4;
    var2.fetchStoreFront = var3;
    var1 = function() { // Original name: manageSubscription, environment: var1
        _fun58483: for (var _fun58483_ip = 0;;) switch (_fun58483_ip) {
            case 0:
                var2 = _closure1_slot13;
                var0 = undefined;
                var0 = var2.bind(var0)();
                if (var0) {
                    _fun58483_ip = 69;
                    continue _fun58483
                }
            case 16:
                var0 = global;
                var3 = var0.Promise;
                var2 = var3.reject;
                var5 = var0.Error;
                var0 = var5.prototype;
                var4 = Object.create(var0, {
                    constructor: {
                        value: var5
                    }
                });
                var6 = 'StoreKit 2 is not available';
                var7 = var4;
                var0 = new var7[var5](var6, var5);
                var0 = var0 instanceof Object ? var0 : var4;
                var0 = var2.bind(var3)(var0);
                _fun58483_ip = 83;
                continue _fun58483;
            case 69:
                var2 = _closure1_slot9;
                var1 = var2.showManageSubscriptions;
                var0 = var1.bind(var2)();
            case 83:
                return var0;
        }
    };
    var2.manageSubscription = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 3924, 1613, 4575, 1615, 7103, 44, 478, 7123, 4572, 22, 491, 3084, 566, 7124, 2]);