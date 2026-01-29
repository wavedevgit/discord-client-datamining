// utils/StripeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var3 = function() { // Original name: getStripe, environment: var1
        _fun29382: for (var _fun29382_ip = 0;;) switch (_fun29382_ip) {
            case 0:
                var2 = _closure1_slot2;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun29382_ip = 81;
                    continue _fun29382
                }
            case 13:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 4;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.loadStripe;
                var0 = _closure1_slot6;
                var0 = var0.STRIPE;
                var0 = var0.KEY;
                var3 = var2.bind(var3)(var0);
                var2 = var3.then;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var _closure1_slot2 = var0;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                _fun29382_ip = 104;
                continue _fun29382;
            case 81:
                var2 = global;
                var3 = var2.Promise;
                var2 = var3.resolve;
                var1 = _closure1_slot2;
                var0 = var2.bind(var3)(var1);
            case 104:
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var0 = function() { // Original name: _authenticatePaymentIntentForPaymentId, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29386: for (var _fun29386_ip = 0;;) switch (_fun29386_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29386_ip = 575;
                            continue _fun29386
                        }
                    case 10:
                        var12 = arg0;
                        var3 = undefined;
                        var6 = undefined;
                        var9 = undefined;
                        var5 = undefined;
                        var11 = undefined;
                        var4 = undefined;
                        var8 = undefined;
                    case 27: // try_start_0
                        var2 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var1 = 5;
                        var1 = var7[var1];
                        var1 = var2.bind(var3)(var1);
                        var7 = var1.HTTP;
                        var2 = var7.get;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var14 = _closure1_slot5;
                        var13 = var14.BILLING_STRIPE_PAYMENT_INTENTS;
                        var12 = var13.bind(var14)(var12);
                        var1.url = var12;
                        var1 = var2.bind(var7)(var1);
                        SaveGenerator(address = 100);
                    case 98:
                        return var1;
                    case 100:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29386_ip = 556;
                            continue _fun29386
                        }
                    case 109:
                        var2 = var1.body;
                        var6 = var2.stripe_payment_intent_client_secret;
                        var2 = _closure1_slot9;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address = 132);
                    case 130:
                        return var2;
                    case 132:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29386_ip = 553;
                            continue _fun29386
                        }
                    case 141:
                        var9 = var2;
                        var7 = null;
                        if (!(var7 != var2)) {
                            _fun29386_ip = 538;
                            continue _fun29386
                        }
                    case 153:
                        var13 = var9;
                        var12 = var13.retrievePaymentIntent;
                        var3 = var6;
                        var3 = var12.bind(var13)(var3);
                        SaveGenerator(address = 174);
                    case 172:
                        return var3;
                    case 174:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 12);
                        if (var12) {
                            _fun29386_ip = 535;
                            continue _fun29386
                        }
                    case 183:
                        var12 = var3.error;
                        var5 = var12;
                        var11 = var3.paymentIntent;
                        if (!(var7 == var12)) {
                            _fun29386_ip = 521;
                            continue _fun29386
                        }
                    case 204:
                        var12 = var11;
                        if (!(var7 != var12)) {
                            _fun29386_ip = 506;
                            continue _fun29386
                        }
                    case 214:
                        var4 = {};
                        var14 = var11;
                        var15 = var14.status;
                        var14 = _closure1_slot8;
                        var14 = var14.REQUIRES_PAYMENT_METHOD;
                        var14 = var15 === var14;
                        var13 = var14;
                        if (!var14) {
                            _fun29386_ip = 257;
                            continue _fun29386
                        }
                    case 244:
                        var14 = var11;
                        var14 = var14.last_payment_error;
                        var13 = var7 != var14;
                    case 257:
                        var12 = var13;
                        if (!var13) {
                            _fun29386_ip = 282;
                            continue _fun29386
                        }
                    case 263:
                        var13 = var11;
                        var13 = var13.last_payment_error;
                        var13 = var13.payment_method;
                        var12 = var7 != var13;
                    case 282:
                        if (!var12) {
                            _fun29386_ip = 314;
                            continue _fun29386
                        }
                    case 285:
                        var13 = var4;
                        var12 = var11;
                        var12 = var12.last_payment_error;
                        var12 = var12.payment_method;
                        var12 = var12.id;
                        var13.payment_method = var12;
                    case 314:
                        var12 = var11;
                        var13 = var12.status;
                        var12 = _closure1_slot8;
                        var12 = var12.REQUIRES_PAYMENT_METHOD;
                        if (!(var12 !== var13)) {
                            _fun29386_ip = 445;
                            continue _fun29386
                        }
                    case 336:
                        var12 = _closure1_slot8;
                        var12 = var12.REQUIRES_CONFIRMATION;
                        if (!(var12 !== var13)) {
                            _fun29386_ip = 445;
                            continue _fun29386
                        }
                    case 350:
                        var12 = _closure1_slot8;
                        var12 = var12.REQUIRES_ACTION;
                        if (!(var12 !== var13)) {
                            _fun29386_ip = 445;
                            continue _fun29386
                        }
                    case 364:
                        var12 = _closure1_slot8;
                        var12 = var12.SUCCEEDED;
                        if (!(var12 !== var13)) {
                            _fun29386_ip = 440;
                            continue _fun29386
                        }
                    case 378:
                        var12 = _closure1_slot8;
                        var12 = var12.PROCESSING;
                        if (!(var12 !== var13)) {
                            _fun29386_ip = 440;
                            continue _fun29386
                        }
                    case 392:
                        var10 = _closure1_slot8;
                        var10 = var10.CANCELED;
                        var10 = {};
                        var13 = var11.status;
                        var11 = global;
                        var11 = var11.HermesInternal;
                        var12 = var11.concat;
                        var11 = 'Invalid Payment Intent status: ';
                        var11 = var12.bind(var11)(var13);
                        var10.error = var11;
                    case 437: // try_end0
                        return var10;
                    case 440:
                        var10 = {};
                        return var10;
                    case 445: // try_start_1
                        var10 = var9;
                        var9 = var10.confirmCardPayment;
                        var4 = var9.bind(var10)(var6, var4);
                        SaveGenerator(address = 464);
                    case 462:
                        return var4;
                    case 464:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun29386_ip = 503;
                            continue _fun29386
                        }
                    case 470:
                        var6 = var4.error;
                        var8 = var6;
                        if (!(var7 == var6)) {
                            _fun29386_ip = 486;
                            continue _fun29386
                        }
                    case 482:
                        var6 = {};
                        _fun29386_ip = 500;
                        continue _fun29386;
                    case 486:
                        var7 = {};
                        var8 = var8.message;
                        var7.error = var8;
                        var6 = var7;
                    case 500: // try_end1
                        return var6;
                    case 503:
                        return var4;
                    case 506: // try_start_2
                        var4 = {};
                        var6 = 'payment intent does not exist';
                        var4.error = var6;
                    case 518: // try_end2
                        return var4;
                    case 521: // try_start_3
                        var4 = {};
                        var5 = var5.message;
                        var4.error = var5;
                    case 532: // try_end3
                        return var4;
                    case 535:
                        return var3;
                    case 538: // try_start_4
                        var3 = {};
                        var4 = 'unable to load stripe';
                        var3.error = var4;
                    case 550: // try_end4
                        return var3;
                    case 553:
                        return var2;
                    case 556:
                        return var1;
                    case 559: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register = 2);
                        var1 = {};
                        var2 = var2.message;
                        var1.error = var2;
                        return var1;
                    case 575:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot10 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var8 = var4.Endpoints;
    var _closure1_slot5 = var8;
    var4 = var4.PaymentSettings;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var8 = var7.bind(var0)(var4);
    var4 = var8.prototype;
    var7 = Object.create(var4, {
        constructor: {
            value: var8
        }
    });
    var12 = 'StripeUtils';
    var13 = var7;
    var4 = new var13[var8](var12, var11);
    var4 = var4 instanceof Object ? var4 : var7;
    var _closure1_slot7 = var4;
    var4 = {};
    var7 = 'requires_payment_method';
    var4.REQUIRES_PAYMENT_METHOD = var7;
    var7 = 'requires_confirmation';
    var4.REQUIRES_CONFIRMATION = var7;
    var7 = 'requires_action';
    var4.REQUIRES_ACTION = var7;
    var7 = 'processing';
    var4.PROCESSING = var7;
    var7 = 'canceled';
    var4.CANCELED = var7;
    var7 = 'succeeded';
    var4.SUCCEEDED = var7;
    var _closure1_slot8 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'utils/StripeUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function(arg0) { // Environment: var1
        _fun29387: for (var _fun29387_ip = 0;;) switch (_fun29387_ip) {
            case 0:
                var0 = arg0;
                var5 = undefined;
                var1 = undefined;
                var2 = undefined;
            case 9: // try_start_0
                var3 = var0;
                var0 = function(arg0) { // Environment: var0
                    _fun29388: for (var _fun29388_ip = 0;;) switch (_fun29388_ip) {
                        case 0:
                            var3 = arg0;
                            var _closure3_slot0 = var3;
                            var4 = function(arg0) { // Original name: throwErr, environment: var0
                                _fun29389: for (var _fun29389_ip = 0;;) switch (_fun29389_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var4 = _closure3_slot0;
                                        var1 = null;
                                        var1 = var1 != var0;
                                        var3 = '';
                                        if (!var1) {
                                            _fun29389_ip = 26;
                                            continue _fun29389
                                        }
                                    case 23:
                                        var3 = var0;
                                    case 26:
                                        var0 = global;
                                        var0 = var0.HermesInternal;
                                        var2 = var0.concat;
                                        var1 = 'You passed an invalid expiration date ';
                                        var0 = 'Please pass a string containing a numeric month and year such as `01-17` or `2015 / 05`';
                                        var0 = var2.bind(var1)(var4, var3, var0);
                                        return var0;
                                }
                            };
                            var _closure3_slot1 = var4;
                            var2 = var3.split;
                            var1 = /[.\-\/\s]+/g;
                            var2 = var2.bind(var3)(var1);
                            var _closure3_slot2 = var2;
                            var1 = var2.length;
                            var6 = 2;
                            if (!(var6 !== var1)) {
                                _fun29388_ip = 64;
                                continue _fun29388
                            }
                        case 58:
                            var1 = undefined;
                            var1 = var4.bind(var1)();
                        case 64:
                            var1 = var2.map;
                            var0 = function(arg0) { // Environment: var0
                                _fun29390: for (var _fun29390_ip = 0;;) switch (_fun29390_ip) {
                                    case 0:
                                        var1 = global;
                                        var2 = var1.parseInt;
                                        var3 = undefined;
                                        var0 = arg0;
                                        var0 = var2.bind(var3)(var0);
                                        var2 = var1.isNaN;
                                        var2 = var2.bind(var3)(var0);
                                        if (!var2) {
                                            _fun29390_ip = 75;
                                            continue _fun29390
                                        }
                                    case 32:
                                        var4 = _closure3_slot1;
                                        var7 = _closure3_slot2;
                                        var2 = var1.HermesInternal;
                                        var6 = var2.concat;
                                        var5 = '';
                                        var2 = ' is not a number.';
                                        var2 = var6.bind(var5)(var7, var2);
                                        var2 = var4.bind(var3)(var2);
                                    case 75:
                                        var2 = 1;
                                        if (!(var0 < var2)) {
                                            _fun29390_ip = 121;
                                            continue _fun29390
                                        }
                                    case 82:
                                        var2 = _closure3_slot1;
                                        var1 = var1.HermesInternal;
                                        var5 = var1.concat;
                                        var4 = '';
                                        var1 = ' is less than one.';
                                        var1 = var5.bind(var4)(var0, var1);
                                        var1 = var2.bind(var3)(var1);
                                    case 121:
                                        return var0;
                                }
                            };
                            var3 = var1.bind(var2)(var0);
                            var2 = 0;
                            var1 = var3[var2];
                            var0 = 12;
                            if (!(!(var1 > var0))) {
                                _fun29388_ip = 117;
                                continue _fun29388
                            }
                        case 92:
                            var1 = var3[var2];
                            var5 = new Array(2);
                            var5[0] = var1;
                            var1 = 1;
                            var1 = var3[var1];
                            var5[1] = var1;
                            _fun29388_ip = 143;
                            continue _fun29388;
                        case 117:
                            var1 = 1;
                            var7 = var3[var1];
                            var1 = new Array(2);
                            var1[0] = var7;
                            var3 = var3[var2];
                            var1[1] = var3;
                            var5 = var1;
                        case 143:
                            var3 = _closure1_slot4;
                            var1 = undefined;
                            var5 = var3.bind(var1)(var5, var6);
                            var2 = var5[var2];
                            var3 = 1;
                            var3 = var5[var3];
                            if (!(var2 > var0)) {
                                _fun29388_ip = 207;
                                continue _fun29388
                            }
                        case 173:
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var6 = var0.concat;
                            var5 = 'Month must be a number 1-12, not ';
                            var0 = '.';
                            var0 = var6.bind(var5)(var2, var0);
                            var0 = var4.bind(var1)(var0);
                        case 207:
                            var0 = 100;
                            var1 = var3;
                            if (!(var1 < var0)) {
                                _fun29388_ip = 227;
                                continue _fun29388
                            }
                        case 217:
                            var0 = 2000;
                            var1 = var3 + var0;
                        case 227:
                            var0 = new Array(2);
                            var0[0] = var2;
                            var0[1] = var1;
                            return var0;
                    }
                };
                var4 = var0.bind(var5)(var3);
                var3 = _closure1_slot4;
                var0 = 2;
                var0 = var3.bind(var5)(var4, var0);
                var3 = 0;
                var1 = var0[var3];
                var4 = 1;
                var2 = var0[var4];
            case 53: // try_end0
                var0 = global;
                var5 = var0.Date;
                var7 = var2;
                var6 = var1;
                var2 = var5.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = var2;
                var1 = new var8[var5](var7, var6, var5);
                var1 = var1 instanceof Object ? var1 : var2;
                var0 = var0.Date;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var2;
                var0 = new var8[var0](var7);
                var0 = var0 instanceof Object ? var0 : var2;
                var3 = var1.setMonth;
                var2 = var1.getMonth;
                var2 = var2.bind(var1)();
                var2 = var2 - var4;
                var2 = var3.bind(var1)(var2);
                var3 = var1.setMonth;
                var2 = var1.getMonth;
                var2 = var2.bind(var1)();
                var2 = var2 + var4;
                var2 = var3.bind(var1)(var2, var4);
                var0 = var1 > var0;
                return var0;
            case 170: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = false;
                return var0;
        }
    };
    var2.validateExpiry = var4;
    var2.getStripe = var3;
    var3 = function() { // Original name: getStripeClientMode, environment: var1
        _fun29391: for (var _fun29391_ip = 0;;) switch (_fun29391_ip) {
            case 0:
                var0 = _closure1_slot6;
                var0 = var0.STRIPE;
                var2 = var0.KEY;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun29391_ip = 154;
                    continue _fun29391
                }
            case 28:
                var0 = _closure1_slot6;
                var0 = var0.STRIPE;
                var3 = var0.KEY;
                var2 = var3.startsWith;
                var0 = 'pk_live';
                var2 = var2.bind(var3)(var0);
                var0 = 'live';
                if (var2) {
                    _fun29391_ip = 152;
                    continue _fun29391
                }
            case 68:
                var2 = _closure1_slot6;
                var2 = var2.STRIPE;
                var4 = var2.KEY;
                var3 = var4.startsWith;
                var2 = 'pk_test';
                var3 = var3.bind(var4)(var2);
                var2 = 'test';
                if (var3) {
                    _fun29391_ip = 149;
                    continue _fun29391
                }
            case 108:
                var6 = _closure1_slot7;
                var5 = var6.warn;
                var3 = _closure1_slot6;
                var3 = var3.STRIPE;
                var4 = var3.KEY;
                var3 = 'Unexpected value for Stripe public key: ';
                var3 = var5.bind(var6)(var3, var4);
                var2 = 'unknown';
            case 149:
                var0 = var2;
            case 152:
                _fun29391_ip = 195;
                continue _fun29391;
            case 154:
                var4 = _closure1_slot7;
                var3 = var4.warn;
                var1 = _closure1_slot6;
                var1 = var1.STRIPE;
                var2 = var1.KEY;
                var1 = 'getStripeClientMode() called before PaymentSettings.STRIPE.KEY initialized: ';
                var1 = var3.bind(var4)(var1, var2);
                var0 = 'unknown';
            case 195:
                return var0;
        }
    };
    var2.getStripeClientMode = var3;
    var3 = function(arg0) { // Original name: parseStripePaymentMethod, environment: var1
        _fun29392: for (var _fun29392_ip = 0;;) switch (_fun29392_ip) {
            case 0:
                var2 = arg0;
                var0 = var2.billing_details;
                var3 = var0.address;
                var4 = null;
                if (!(var4 == var3)) {
                    _fun29392_ip = 23;
                    continue _fun29392
                }
            case 21:
                var3 = {};
            case 23:
                var1 = {};
                var6 = var0.name;
                var7 = var4 != var6;
                var0 = '';
                var5 = var0;
                if (!var7) {
                    _fun29392_ip = 47;
                    continue _fun29392
                }
            case 44:
                var5 = var6;
            case 47:
                var1.name = var5;
                var6 = var3.line1;
                var7 = var4 != var6;
                var5 = var0;
                if (!var7) {
                    _fun29392_ip = 70;
                    continue _fun29392
                }
            case 67:
                var5 = var6;
            case 70:
                var1.line1 = var5;
                var6 = var3.line2;
                var7 = var4 != var6;
                var5 = var0;
                if (!var7) {
                    _fun29392_ip = 94;
                    continue _fun29392
                }
            case 91:
                var5 = var6;
            case 94:
                var1.line2 = var5;
                var6 = var3.city;
                var7 = var4 != var6;
                var5 = var0;
                if (!var7) {
                    _fun29392_ip = 118;
                    continue _fun29392
                }
            case 115:
                var5 = var6;
            case 118:
                var1.city = var5;
                var6 = var3.state;
                var7 = var4 != var6;
                var5 = var0;
                if (!var7) {
                    _fun29392_ip = 141;
                    continue _fun29392
                }
            case 138:
                var5 = var6;
            case 141:
                var1.state = var5;
                var6 = var3.country;
                var7 = var4 != var6;
                var5 = var0;
                if (!var7) {
                    _fun29392_ip = 164;
                    continue _fun29392
                }
            case 161:
                var5 = var6;
            case 164:
                var1.country = var5;
                var3 = var3.postal_code;
                var4 = var4 != var3;
                if (!var4) {
                    _fun29392_ip = 185;
                    continue _fun29392
                }
            case 182:
                var0 = var3;
            case 185:
                var1.postalCode = var0;
                var0 = {};
                var2 = var2.id;
                var0.token = var2;
                var0.billingAddressInfo = var1;
                return var0;
        }
    };
    var2.parseStripePaymentMethod = var3;
    var3 = function(arg0) { // Original name: parseBillingAddressInfoToStripeBillingDetails, environment: var1
        var2 = arg0;
        var0 = {};
        var1 = var2.name;
        var0.name = var1;
        var1 = {};
        var3 = var2.line1;
        var1.line1 = var3;
        var3 = var2.line2;
        var1.line2 = var3;
        var3 = var2.city;
        var1.city = var3;
        var3 = var2.state;
        var1.state = var3;
        var3 = var2.postalCode;
        var1.postal_code = var3;
        var2 = var2.country;
        var1.country = var2;
        var0.address = var1;
        return var0;
    };
    var2.parseBillingAddressInfoToStripeBillingDetails = var3;
    var1 = function() { // Original name: authenticatePaymentIntentForPaymentId, environment: var1
        var0 = undefined;
        var3 = _closure1_slot10;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.authenticatePaymentIntentForPaymentId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 660, 3, 3409, 507, 2]);