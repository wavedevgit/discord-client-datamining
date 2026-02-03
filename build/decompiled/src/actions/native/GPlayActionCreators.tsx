// actions/native/GPlayActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var12;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun58198: for (var _fun58198_ip = 0;;) switch (_fun58198_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58198_ip = 83;
                            continue _fun58198
                        }
                    case 7:
                        var1 = _closure1_slot17;
                        var2 = undefined;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 24);
                    case 22:
                        return var1;
                    case 24:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun58198_ip = 80;
                            continue _fun58198
                        }
                    case 30:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 10;
                        var3 = var5[var3];
                        var5 = var4.bind(var2)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'GPLAY_SET_USER_COUNTRY';
                        var3.type = var6;
                        var3.countryCode = var1;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 80:
                        return var1;
                    case 83:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot18 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot18 = var0;
    var13 = function arg0() {
        _fun58199: for (var _fun58199_ip = 0;;) switch (_fun58199_ip) {
            case 0:
                var1 = arguments[1];
                var2 = arg0;
                var _closure2_slot0 = var2;
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun58199_ip = 20;
                    continue _fun58199
                }
            case 18:
                var1 = false;
            case 20:
                var _closure2_slot1 = var1;
                var1 = _closure1_slot3;
                var0 = function*(arg0) { // Environment: var0
                    var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                        _fun58201: for (var _fun58201_ip = 0;;) switch (_fun58201_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun58201_ip = 339;
                                    continue _fun58201
                                }
                            case 10:
                                var10 = 0;
                                var4 = copyRestArgs(var10);
                                var3 = undefined;
                                SaveGenerator(address = 22);
                            case 20:
                                return var3;
                            case 22:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun58201_ip = 336;
                                    continue _fun58201
                                }
                            case 31: // try_start_0
                                var5 = _closure2_slot0;
                                var9 = var4;
                                var4 = new Array(0);
                                var10 = var4;
                                var8 = 0;
                                var6 = arraySpread(var10, var9, var8);
                                var10 = var5;
                                var9 = var4;
                                var8 = undefined;
                                var4 = apply(var10, var9, var8);
                                SaveGenerator(address = 70);
                            case 68:
                                return var4;
                            case 70:
                                ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun58201_ip = 79;
                                    continue _fun58201
                                }
                            case 76: // try_end0
                                return var4;
                            case 79:
                                return var4;
                            case 82: // catch_target0
                                CatchBlockStart(arg_register = 5);
                                var2 = var5;
                                var4 = null;
                                var4 = var4 == var5;
                                var6 = undefined;
                                if (var4) {
                                    _fun58201_ip = 106;
                                    continue _fun58201
                                }
                            case 98:
                                var4 = var2;
                                var6 = var4.code;
                            case 106:
                                var5 = _closure1_slot10;
                                var7 = var5.SERVICE_DISCONNECTED;
                                var5 = new Array(6);
                                var5[0] = var7;
                                var7 = _closure1_slot10;
                                var7 = var7.SERVICE_TIMEOUT;
                                var5[1] = var7;
                                var7 = _closure1_slot10;
                                var7 = var7.SERVICE_UNAVAILABLE;
                                var5[2] = var7;
                                var7 = _closure1_slot10;
                                var7 = var7.BILLING_UNAVAILABLE;
                                var5[3] = var7;
                                var7 = _closure1_slot10;
                                var7 = var7.FEATURE_NOT_SUPPORTED;
                                var5[4] = var7;
                                var7 = _closure1_slot10;
                                var7 = var7.BILLING_CLIENT_NOT_READY;
                                var5[5] = var7;
                                var5 = var6 in var5;
                                if (var5) {
                                    _fun58201_ip = 240;
                                    continue _fun58201
                                }
                            case 204:
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var5 = 11;
                                var5 = var7[var5];
                                var7 = var6.bind(var3)(var5);
                                var6 = var7.captureBillingException;
                                var5 = var2;
                                var5 = var6.bind(var7)(var5);
                                _fun58201_ip = 316;
                                continue _fun58201;
                            case 240:
                                var5 = global;
                                var6 = var5.Math;
                                var5 = var6.random;
                                var6 = var5.bind(var6)();
                                var5 = 0.01;
                                if (!(var6 < var5)) {
                                    _fun58201_ip = 306;
                                    continue _fun58201
                                }
                            case 272:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var4 = 11;
                                var4 = var6[var4];
                                var6 = var5.bind(var3)(var4);
                                var5 = var6.captureBillingException;
                                var4 = var2;
                                var4 = var5.bind(var6)(var4);
                            case 306:
                                var4 = _closure2_slot1;
                                if (var4) {
                                    _fun58201_ip = 334;
                                    continue _fun58201
                                }
                            case 316:
                                var4 = _closure2_slot1;
                                if (var4) {
                                    _fun58201_ip = 329;
                                    continue _fun58201
                                }
                            case 326:
                                return var3;
                            case 329:
                                var3 = var2;
                                throw var3;
                            case 334:
                                throw var2;
                            case 336:
                                return var1;
                            case 339:
                                return var0;
                        }
                    };
                    var1 = var0.next;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var1 = {};
    var10 = true;
    var1.value = var10;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var12[var0];
    var0 = undefined;
    var14 = var4.bind(var0)(var1);
    var _closure1_slot3 = var14;
    var1 = 1;
    var1 = var12[var1];
    var1 = var11.bind(var0)(var1);
    var1 = var1.NativeModules;
    var5 = 2;
    var5 = var12[var5];
    var5 = var11.bind(var0)(var5);
    var6 = var5.deleteGPlayAnalytics;
    var _closure1_slot4 = var6;
    var5 = var5.useGPlayAnalyticsStore;
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var12[var5];
    var5 = var4.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var12[var5];
    var5 = var4.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var12[var5];
    var5 = var11.bind(var0)(var5);
    var6 = var5.AnalyticEvents;
    var _closure1_slot8 = var6;
    var5 = var5.Endpoints;
    var _closure1_slot9 = var5;
    var5 = 6;
    var5 = var12[var5];
    var5 = var11.bind(var0)(var5);
    var6 = var5.GPlayBillingResult;
    var _closure1_slot10 = var6;
    var5 = var5.GPlaySkusType;
    var _closure1_slot11 = var5;
    var5 = 7;
    var5 = var12[var5];
    var5 = var11.bind(var0)(var5);
    var5 = var5.PaymentGateways;
    var _closure1_slot12 = var5;
    var1 = var1.BillingManager;
    var _closure1_slot13 = var1;
    var1 = 8;
    var1 = var12[var1];
    var5 = var4.bind(var0)(var1);
    var1 = var5.prototype;
    var4 = Object.create(var1, {
        constructor: {
            value: var5
        }
    });
    var17 = 'GPlayActionCreators';
    var18 = var4;
    var1 = new var18[var5](var17, var16);
    var1 = var1 instanceof Object ? var1 : var4;
    var _closure1_slot14 = var1;
    var1 = function*() { // Environment: var3
        var0 = function*() { // Original name: ?anon_0_, environment: var0
            _fun58203: for (var _fun58203_ip = 0;;) switch (_fun58203_ip) {
                case 0:
                    StartGenerator();
                    var1 = arguments[0];
                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                    if (var3) {
                        _fun58203_ip = 299;
                        continue _fun58203
                    }
                case 13:
                    var5 = undefined;
                    if (!(var1 === var5)) {
                        _fun58203_ip = 48;
                        continue _fun58203
                    }
                case 19:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 9;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var1 = var4.SubscriptionProductIds;
                case 48:
                    var2 = var1;
                    SaveGenerator(address = 55);
                case 53:
                    return var5;
                case 55:
                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                    if (var3) {
                        _fun58203_ip = 296;
                        continue _fun58203
                    }
                case 64:
                    var4 = var2;
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun58203_ip = 289;
                        continue _fun58203
                    }
                case 76:
                    var3 = var2;
                    var3 = var3.length;
                    var10 = 0;
                    if (!(var10 !== var3)) {
                        _fun58203_ip = 289;
                        continue _fun58203
                    }
                case 93:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var6 = 10;
                    var4 = var4[var6];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var9 = 'GPLAY_FETCH_SUBSCRIPTION_SKUS_START';
                    var4.type = var9;
                    var4 = var7.bind(var8)(var4);
                case 138: // try_start_0
                    var7 = _closure1_slot13;
                    var4 = var7.getSubscriptionSkus;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address = 159);
                case 157:
                    return var2;
                case 159:
                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                    if (var4) {
                        _fun58203_ip = 243;
                        continue _fun58203
                    }
                case 165:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var9 = 'GPLAY_SUBSCRIPTION_SKUS_LOADED';
                    var4.type = var9;
                    var9 = new Array(0);
                    var13 = var9;
                    var12 = var2;
                    var11 = 0;
                    var10 = arraySpread(var13, var12, var11);
                    var4.skus = var9;
                    var9 = _closure1_slot11;
                    var9 = var9.SUBSCRIPTION;
                    var4.skusType = var9;
                    var4 = var7.bind(var8)(var4);
                case 240: // try_end0
                    return var2;
                case 243:
                    return var2;
                case 246: // catch_target0
                    CatchBlockStart(arg_register = 2);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'GPLAY_FETCH_SUBSCRIPTION_SKUS_FAILED';
                    var3.type = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
                case 289:
                    var2 = new Array(0);
                    return var2;
                case 296:
                    return var1;
                case 299:
                    return var0;
            }
        };
        var1 = var0.next;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1 = var14.bind(var0)(var1);
    var9 = var13.bind(var0)(var1, var10);
    var _closure1_slot15 = var9;
    var1 = function*() { // Environment: var3
        var0 = function*() { // Original name: ?anon_0_, environment: var0
            _fun58205: for (var _fun58205_ip = 0;;) switch (_fun58205_ip) {
                case 0:
                    StartGenerator();
                    var1 = arguments[0];
                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                    if (var3) {
                        _fun58205_ip = 299;
                        continue _fun58205
                    }
                case 13:
                    var5 = undefined;
                    if (!(var1 === var5)) {
                        _fun58205_ip = 48;
                        continue _fun58205
                    }
                case 19:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 9;
                    var4 = var7[var4];
                    var4 = var6.bind(var5)(var4);
                    var1 = var4.IAPProductIds;
                case 48:
                    var2 = var1;
                    SaveGenerator(address = 55);
                case 53:
                    return var5;
                case 55:
                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                    if (var3) {
                        _fun58205_ip = 296;
                        continue _fun58205
                    }
                case 64:
                    var4 = var2;
                    var3 = null;
                    if (!(var3 != var4)) {
                        _fun58205_ip = 289;
                        continue _fun58205
                    }
                case 76:
                    var3 = var2;
                    var3 = var3.length;
                    var10 = 0;
                    if (!(var10 !== var3)) {
                        _fun58205_ip = 289;
                        continue _fun58205
                    }
                case 93:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var6 = 10;
                    var4 = var4[var6];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var9 = 'GPLAY_FETCH_IN_APP_SKUS_START';
                    var4.type = var9;
                    var4 = var7.bind(var8)(var4);
                case 138: // try_start_0
                    var7 = _closure1_slot13;
                    var4 = var7.getIAPSkus;
                    var2 = var4.bind(var7)(var2);
                    SaveGenerator(address = 159);
                case 157:
                    return var2;
                case 159:
                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                    if (var4) {
                        _fun58205_ip = 243;
                        continue _fun58205
                    }
                case 165:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var4 = var4[var6];
                    var8 = var7.bind(var5)(var4);
                    var7 = var8.dispatch;
                    var4 = {};
                    var9 = 'GPLAY_IN_APP_SKUS_LOADED';
                    var4.type = var9;
                    var9 = new Array(0);
                    var13 = var9;
                    var12 = var2;
                    var11 = 0;
                    var10 = arraySpread(var13, var12, var11);
                    var4.skus = var9;
                    var9 = _closure1_slot11;
                    var9 = var9.IN_APP;
                    var4.skusType = var9;
                    var4 = var7.bind(var8)(var4);
                case 240: // try_end0
                    return var2;
                case 243:
                    return var2;
                case 246: // catch_target0
                    CatchBlockStart(arg_register = 2);
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var6];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.dispatch;
                    var3 = {};
                    var6 = 'GPLAY_FETCH_IN_APP_SKUS_FAILED';
                    var3.type = var6;
                    var3 = var4.bind(var5)(var3);
                    throw var2;
                case 289:
                    var2 = new Array(0);
                    return var2;
                case 296:
                    return var1;
                case 299:
                    return var0;
            }
        };
        var1 = var0.next;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1 = var14.bind(var0)(var1);
    var8 = var13.bind(var0)(var1, var10);
    var _closure1_slot16 = var8;
    var1 = function*() { // Environment: var3
        var0 = function*() { // Original name: ?anon_0_, environment: var0
            _fun58207: for (var _fun58207_ip = 0;;) switch (_fun58207_ip) {
                case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                    if (var1) {
                        _fun58207_ip = 75;
                        continue _fun58207
                    }
                case 7:
                    var1 = global;
                    var4 = var1.Promise;
                    var3 = var4.all;
                    var1 = _closure1_slot15;
                    var2 = undefined;
                    var6 = var1.bind(var2)();
                    var1 = new Array(2);
                    var1[0] = var6;
                    var5 = _closure1_slot16;
                    var5 = var5.bind(var2)();
                    var1[1] = var5;
                    var1 = var3.bind(var4)(var1);
                    SaveGenerator(address = 63);
                case 61:
                    return var1;
                case 63:
                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                    if (var3) {
                        _fun58207_ip = 72;
                        continue _fun58207
                    }
                case 69:
                    return var2;
                case 72:
                    return var1;
                case 75:
                    return var0;
            }
        };
        return var0;
    };
    var1 = var14.bind(var0)(var1);
    var7 = var13.bind(var0)(var1);
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun58210: for (var _fun58210_ip = 0;;) switch (_fun58210_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun58210_ip = 347;
                            continue _fun58210
                        }
                    case 13:
                        var8 = var5;
                        var3 = arg1;
                        var1 = undefined;
                        var7 = undefined;
                        var6 = _closure1_slot5;
                        var4 = var6.getState;
                        var4 = var4.bind(var6)();
                        var4 = var4.analyticsByProductId;
                        var7 = var4[var5];
                    case 50: // try_start_0
                        var6 = _closure1_slot13;
                        var5 = var6.purchase;
                        var4 = var8;
                        var3 = var5.bind(var6)(var4, var3);
                        SaveGenerator(address = 73);
                    case 71:
                        return var3;
                    case 73:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                        if (var4) {
                            _fun58210_ip = 84;
                            continue _fun58210
                        }
                    case 79: // try_end0
                        _fun58210_ip = 344;
                        continue _fun58210;
                    case 84:
                        return var3;
                    case 87: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var14 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 11;
                        var3 = var5[var3];
                        var9 = var14.bind(var1)(var3);
                        var4 = var9.captureBillingException;
                        var3 = {};
                        var10 = {};
                        var10.productId = var8;
                        var3.tags = var10;
                        var3 = var4.bind(var9)(var6, var3);
                        var4 = _closure1_slot1;
                        var3 = 12;
                        var3 = var5[var3];
                        var10 = var4.bind(var1)(var3);
                        var9 = var10.show;
                        var3 = {};
                        var11 = 13;
                        var12 = var5[var11];
                        var12 = var14.bind(var1)(var12);
                        var15 = var12.intl;
                        var13 = var15.string;
                        var12 = var5[var11];
                        var12 = var14.bind(var1)(var12);
                        var12 = var12.t;
                        var12 = var12["U+H+kd"];
                        var12 = var13.bind(var15)(var12);
                        var3.title = var12;
                        var12 = var5[var11];
                        var12 = var14.bind(var1)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var11 = var5[var11];
                        var11 = var14.bind(var1)(var11);
                        var11 = var11.t;
                        var11 = var11.LFFx5G;
                        var11 = var12.bind(var13)(var11);
                        var3.body = var11;
                        var3 = var9.bind(var10)(var3);
                        var3 = 14;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot8;
                        var3 = var2.GPLAY_PURCHASE_FAILED;
                        var2 = {};
                        var16 = var7;
                        var17 = var2;
                        var7 = copyDataProperties(var17, var16);
                        var9 = 'purchase';
                        var7 = 'location';
                        var2[var7] = var9;
                        var7 = 'product_id';
                        var2[var7] = var8;
                        var7 = var6.message;
                        var6 = 'error';
                        var2[var6] = var7;
                        var2 = var4.bind(var5)(var3, var2);
                    case 344:
                        return var1;
                    case 347:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var6 = var1.bind(var0)();
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1, arg2, arg3, arg4) { // Environment: var0
            var0 = function*(arg0, arg1, arg2, arg3, arg4) { // Original name: ?anon_0_, environment: var0
                _fun58214: for (var _fun58214_ip = 0;;) switch (_fun58214_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun58214_ip = 366;
                            continue _fun58214
                        }
                    case 10:
                        var7 = arg0;
                        var2 = arg1;
                        var12 = arg2;
                        var1 = arg3;
                        var6 = arg4;
                    case 25: // try_start_0
                        var10 = _closure1_slot13;
                        var9 = var10.subscribe;
                        var20 = var7;
                        var19 = var2;
                        var18 = var12;
                        var17 = var1;
                        var16 = var6;
                        var21 = var10;
                        var1 = var21[var9](var20, var19, var18, var17, var16, var15);
                        SaveGenerator(address = 64);
                    case 62:
                        return var1;
                    case 64:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun58214_ip = 75;
                            continue _fun58214
                        }
                    case 70: // try_end0
                        _fun58214_ip = 361;
                        continue _fun58214;
                    case 75:
                        return var1;
                    case 78: // catch_target0
                        CatchBlockStart(arg_register = 9);
                        var5 = var9;
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 11;
                        var2 = var4[var2];
                        var4 = undefined;
                        var8 = var3.bind(var4)(var2);
                        var3 = var8.captureBillingException;
                        var2 = {};
                        var10 = {};
                        var11 = var7;
                        var10.productId = var11;
                        var13 = var12;
                        var11 = null;
                        var13 = var11 != var13;
                        var11 = '';
                        if (!var13) {
                            _fun58214_ip = 145;
                            continue _fun58214
                        }
                    case 142:
                        var11 = var12;
                    case 145:
                        var10.oldProductId = var11;
                        var2.tags = var10;
                        var2 = var3.bind(var8)(var9, var2);
                        var3 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var2 = 12;
                        var2 = var8[var2];
                        var10 = var3.bind(var4)(var2);
                        var9 = var10.show;
                        var2 = {};
                        var14 = _closure1_slot0;
                        var11 = 13;
                        var12 = var8[var11];
                        var12 = var14.bind(var4)(var12);
                        var15 = var12.intl;
                        var13 = var15.string;
                        var12 = var8[var11];
                        var12 = var14.bind(var4)(var12);
                        var12 = var12.t;
                        var12 = var12["U+H+kd"];
                        var12 = var13.bind(var15)(var12);
                        var2.title = var12;
                        var12 = var8[var11];
                        var12 = var14.bind(var4)(var12);
                        var13 = var12.intl;
                        var12 = var13.string;
                        var11 = var8[var11];
                        var11 = var14.bind(var4)(var11);
                        var11 = var11.t;
                        var11 = var11.LFFx5G;
                        var11 = var12.bind(var13)(var11);
                        var2.body = var11;
                        var2 = var9.bind(var10)(var2);
                        var2 = 14;
                        var2 = var8[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.track;
                        var1 = _closure1_slot8;
                        var2 = var1.GPLAY_PURCHASE_FAILED;
                        var1 = {};
                        var8 = 'subscribe';
                        var1.location = var8;
                        var1.product_id = var7;
                        var1.offer_id = var6;
                        var5 = var5.message;
                        var1.error = var5;
                        var1 = var3.bind(var4)(var2, var1);
                    case 361:
                        var1 = undefined;
                        return var1;
                    case 366:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var5 = var1.bind(var0)();
    var1 = function() { // Environment: var3
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun58218: for (var _fun58218_ip = 0;;) switch (_fun58218_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun58218_ip = 623;
                            continue _fun58218
                        }
                    case 13:
                        var11 = var2;
                        var13 = arg1;
                        var4 = undefined;
                        var7 = undefined;
                        var17 = undefined;
                        var9 = undefined;
                        var15 = undefined;
                        var14 = undefined;
                        var5 = undefined;
                        var8 = _closure1_slot5;
                        var3 = var8.getState;
                        var3 = var3.bind(var8)();
                        var8 = var3.analyticsByProductId;
                        var3 = var2.productId;
                        var7 = var8[var3];
                        var8 = _closure1_slot6;
                        var3 = var8.getId;
                        var17 = var3.bind(var8)();
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var3 = 9;
                        var3 = var10[var3];
                        var3 = var8.bind(var4)(var3);
                        var8 = var3.SubscriptionProductIds;
                        var3 = var8.includes;
                        var2 = var2.productId;
                        var2 = var3.bind(var8)(var2);
                        var8 = !var2;
                        var9 = var8;
                        var3 = null;
                        var15 = null;
                        var14 = null;
                        var2 = var11;
                        var2 = var2.productId;
                        if (var8) {
                            _fun58218_ip = 151;
                            continue _fun58218
                        }
                    case 146:
                        var15 = var2;
                        _fun58218_ip = 154;
                        continue _fun58218;
                    case 151:
                        var14 = var2;
                    case 154:
                        var2 = var9;
                        if (!var2) {
                            _fun58218_ip = 167;
                            continue _fun58218
                        }
                    case 160:
                        var8 = var13;
                        var2 = var3 != var8;
                    case 167:
                        if (!var2) {
                            _fun58218_ip = 183;
                            continue _fun58218
                        }
                    case 170:
                        var8 = var13;
                        var8 = var8.gift_style;
                        var2 = var3 == var8;
                    case 183:
                        if (!var2) {
                            _fun58218_ip = 251;
                            continue _fun58218
                        }
                    case 186:
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var2 = 14;
                        var2 = var10[var2];
                        var12 = var8.bind(var4)(var2);
                        var10 = var12.track;
                        var2 = _closure1_slot8;
                        var8 = var2.GIFT_INFO_OPTIONS_MISSING;
                        var2 = {};
                        var16 = 'verifyPurchase';
                        var2.source = var16;
                        var16 = var11;
                        var16 = var16.productId;
                        var2.sku_id = var16;
                        var2 = var10.bind(var12)(var8, var2);
                    case 251: // try_start_0
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot2;
                        var2 = 15;
                        var2 = var10[var2];
                        var2 = var8.bind(var4)(var2);
                        var10 = var2.HTTP;
                        var8 = var10.post;
                        var2 = {};
                        var12 = _closure1_slot9;
                        var12 = var12.VERIFY_PURCHASE;
                        var2.url = var12;
                        var12 = {};
                        var16 = var11;
                        var18 = var16.purchaseToken;
                        var12.purchase_token = var18;
                        var12.user_id = var17;
                        var16 = var16.packageName;
                        var12.package_name = var16;
                        var12.subscription_sku_id = var15;
                        var12.one_time_purchase_sku_id = var14;
                        var12.gift_info_options = var13;
                        var13 = {};
                        var14 = true;
                        var13.consume_on_validate = var14;
                        var12.one_time_purchase_options = var13;
                        var2.body = var12;
                        var12 = false;
                        var2.rejectWithError = var12;
                        var2 = var8.bind(var10)(var2);
                        SaveGenerator(address = 384);
                    case 382:
                        return var2;
                    case 384:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                        if (var8) {
                            _fun58218_ip = 482;
                            continue _fun58218
                        }
                    case 390:
                        var5 = var2;
                        var10 = var7;
                        var10 = var3 == var10;
                        var8 = var10;
                        if (var10) {
                            _fun58218_ip = 409;
                            continue _fun58218
                        }
                    case 406:
                        var8 = var9;
                    case 409:
                        if (var8) {
                            _fun58218_ip = 474;
                            continue _fun58218
                        }
                    case 412:
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var8 = 14;
                        var8 = var10[var8];
                        var12 = var9.bind(var4)(var8);
                        var10 = var12.track;
                        var8 = _closure1_slot8;
                        var9 = var8.PAYMENT_FLOW_COMPLETED;
                        var8 = var7;
                        var8 = var10.bind(var12)(var9, var8);
                        var9 = _closure1_slot4;
                        var8 = var11;
                        var8 = var8.productId;
                        var8 = var9.bind(var4)(var8);
                    case 474:
                        var5 = var5.body;
                    case 479: // try_end0
                        return var5;
                    case 482:
                        return var2;
                    case 485: // catch_target0
                        CatchBlockStart(arg_register = 9);
                        var1 = var9;
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var2 = 11;
                        var2 = var8[var2];
                        var8 = var5.bind(var4)(var2);
                        var5 = var8.captureBillingException;
                        var2 = {};
                        var10 = {};
                        var11 = var11.productId;
                        var10.productId = var11;
                        var2.tags = var10;
                        var2 = var5.bind(var8)(var9, var2);
                        var2 = var7;
                        if (!(var3 != var2)) {
                            _fun58218_ip = 621;
                            continue _fun58218
                        }
                    case 549:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 14;
                        var2 = var5[var2];
                        var5 = var3.bind(var4)(var2);
                        var4 = var5.track;
                        var2 = _closure1_slot8;
                        var3 = var2.PAYMENT_FLOW_FAILED;
                        var2 = {};
                        var19 = var7;
                        var20 = var2;
                        var7 = copyDataProperties(var20, var19);
                        var6 = _closure1_slot12;
                        var7 = var6.GOOGLE;
                        var6 = 'payment_gateway';
                        var2[var6] = var7;
                        var2 = var4.bind(var5)(var3, var2);
                    case 621:
                        throw var1;
                    case 623:
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var2)(var1);
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var4 = var1.bind(var0)();
    var1 = function*() { // Environment: var3
        var0 = function*() { // Original name: ?anon_0_, environment: var0
            _fun58221: for (var _fun58221_ip = 0;;) switch (_fun58221_ip) {
                case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                    if (var1) {
                        _fun58221_ip = 209;
                        continue _fun58221
                    }
                case 10:
                    var2 = undefined;
                    var3 = undefined;
                case 14: // try_start_0
                    var4 = _closure1_slot13;
                    var1 = var4.getUserCountry;
                    var1 = var1.bind(var4)();
                    SaveGenerator(address = 35);
                case 33:
                    return var1;
                case 35:
                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                    if (var4) {
                        _fun58221_ip = 44;
                        continue _fun58221
                    }
                case 41: // try_end0
                    return var1;
                case 44:
                    return var1;
                case 47: // catch_target0
                    CatchBlockStart(arg_register = 4);
                    var6 = var4;
                    var1 = null;
                    var5 = var1 == var4;
                    var4 = undefined;
                    if (var5) {
                        _fun58221_ip = 102;
                        continue _fun58221
                    }
                case 63:
                    var5 = var6;
                    var5 = var5.message;
                    var3 = var5;
                    var5 = var1 == var5;
                    var4 = undefined;
                    if (var5) {
                        _fun58221_ip = 102;
                        continue _fun58221
                    }
                case 83:
                    var7 = var3;
                    var5 = var7.includes;
                    var3 = 'max attempts exceeded';
                    var4 = var5.bind(var7)(var3);
                case 102:
                    if (var4) {
                        _fun58221_ip = 162;
                        continue _fun58221
                    }
                case 108:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var4 = 11;
                    var4 = var7[var4];
                    var8 = var5.bind(var2)(var4);
                    var7 = var8.captureBillingException;
                    var5 = var6;
                    var4 = {};
                    var9 = {};
                    var10 = 'getUserCountry';
                    var9.source = var10;
                    var4.tags = var9;
                    var4 = var7.bind(var8)(var5, var4);
                    _fun58221_ip = 206;
                    continue _fun58221;
                case 162:
                    var5 = _closure1_slot14;
                    var4 = var5.warn;
                    var3 = {};
                    var7 = var6;
                    var7 = var1 == var7;
                    var2 = undefined;
                    if (var7) {
                        _fun58221_ip = 190;
                        continue _fun58221
                    }
                case 185:
                    var2 = var6.message;
                case 190:
                    var3.error = var2;
                    var2 = '[getUserCountry] Failed to get user country from Google Play Billing';
                    var2 = var4.bind(var5)(var2, var3);
                case 206:
                    return var1;
                case 209:
                    return var0;
            }
        };
        return var0;
    };
    var1 = var14.bind(var0)(var1);
    var1 = var13.bind(var0)(var1, var10);
    var _closure1_slot17 = var1;
    var10 = 16;
    var10 = var12[var10];
    var12 = var11.bind(var0)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'actions/native/GPlayActionCreators.tsx';
    var10 = var11.bind(var12)(var10);
    var2.loadSubscriptionSkus = var9;
    var2.loadInAppSkus = var8;
    var2.loadSkus = var7;
    var7 = function() {
        var0 = undefined;
        var3 = _closure1_slot18;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.loadUserCountry = var7;
    var2.purchase = var6;
    var2.subscribe = var5;
    var2.verifyPurchase = var4;
    var4 = function arg0() {
        _fun58223: for (var _fun58223_ip = 0;;) switch (_fun58223_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot5;
                var2 = var3.getState;
                var2 = var2.bind(var3)();
                var3 = var2.analyticsByProductId;
                var2 = var0.productId;
                var6 = var3[var2];
                var2 = null;
                if (!(var2 != var6)) {
                    _fun58223_ip = 100;
                    continue _fun58223
                }
            case 42:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 14;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.track;
                var3 = _closure1_slot8;
                var3 = var3.PAYMENT_FLOW_COMPLETED;
                var3 = var4.bind(var5)(var3, var6);
                var1 = _closure1_slot4;
                var0 = var0.productId;
                var0 = var1.bind(var2)(var0);
            case 100:
                var0 = undefined;
                return var0;
        }
    };
    var2.sendPaymentCompleteAnalytics = var4;
    var4 = function arg0, arg1, arg2, arg3() {
        _fun58224: for (var _fun58224_ip = 0;;) switch (_fun58224_ip) {
            case 0:
                var4 = _closure1_slot7;
                var2 = var4.getProduct;
                var0 = arg0;
                var0 = var2.bind(var4)(var0);
                var2 = new Array(2);
                var2[0] = var0;
                var3 = var4.getProduct;
                var0 = arg1;
                var0 = var3.bind(var4)(var0);
                var2[1] = var0;
                var0 = 0;
                var5 = var2[var0];
                var0 = 1;
                var2 = var2[var0];
                var3 = null;
                if (!(var3 != var2)) {
                    _fun58224_ip = 248;
                    continue _fun58224
                }
            case 69:
                if (!(var3 != var5)) {
                    _fun58224_ip = 248;
                    continue _fun58224
                }
            case 76:
                if (!(var3 != var2)) {
                    _fun58224_ip = 170;
                    continue _fun58224
                }
            case 80:
                if (!(var3 != var5)) {
                    _fun58224_ip = 170;
                    continue _fun58224
                }
            case 84:
                var0 = var2.billingPeriod;
                if (!(var3 != var0)) {
                    _fun58224_ip = 170;
                    continue _fun58224
                }
            case 94:
                var0 = var5.billingPeriod;
                if (!(var3 != var0)) {
                    _fun58224_ip = 170;
                    continue _fun58224
                }
            case 104:
                var4 = var5.price;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 11;
                var3 = var3[var0];
                var0 = undefined;
                var8 = var6.bind(var0)(var3);
                var7 = var8.calculateStandardizedUnits;
                var6 = var2.billingPeriod;
                var3 = var5.billingPeriod;
                var3 = var7.bind(var8)(var6, var3);
                var3 = var4 / var3;
                var2 = var2.price;
                if (!(!(var2 < var3))) {
                    _fun58224_ip = 252;
                    continue _fun58224
                }
            case 170:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'GPLAY_UPDATE_PENDING_DOWNGRADE';
                var1.type = var4;
                var4 = {};
                var6 = arg2;
                var4.purchaseToken = var6;
                var6 = arg3;
                var4.subscriptionId = var6;
                var5 = var5.identifier;
                var4.newSubscriptionSkuId = var5;
                var1.pendingDowngrade = var4;
                var1 = var2.bind(var3)(var1);
            case 248:
                var1 = undefined;
                return var1;
            case 252:
                return var0;
        }
    };
    var2.updatePendingDowngrade = var4;
    var3 = function arg0() {
        var0 = arg0;
        var6 = var0.purchaseToken;
        var5 = var0.subscriptionId;
        var4 = var0.newSubscriptionSkuId;
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 15;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var2 = var0.HTTP;
        var1 = var2.post;
        var0 = {};
        var3 = _closure1_slot9;
        var3 = var3.DOWNGRADE_SUBSCRIPTION;
        var0.url = var3;
        var3 = {};
        var3.purchase_token = var6;
        var3.subscription_id = var5;
        var3.subscription_sku_id = var4;
        var0.body = var3;
        var3 = false;
        var0.rejectWithError = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.downgradeSubscription = var3;
    var2.getUserCountry = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 27, 7066, 1216, 4607, 660, 4608, 483, 3, 4604, 806, 3116, 3994, 1234, 795, 507, 2]);