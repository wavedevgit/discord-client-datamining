// actions/native/BillingActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var11 = metroImportDefault;
    var9 = metroImportAll;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var9;
    var _closure1_slot3 = var8;
    var0 = function arg0, arg1() {
        _fun57453: for (var _fun57453_ip = 0;;) switch (_fun57453_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun57453_ip = 46;
                    continue _fun57453
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun57453_ip = 55;
                    continue _fun57453
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun57453_ip = 343;
                    continue _fun57453
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun57453_ip = 323;
                    continue _fun57453
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun57453_ip = 283;
                    continue _fun57453
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun57453_ip = 270;
                    continue _fun57453
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
                    _fun57453_ip = 163;
                    continue _fun57453
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun57453_ip = 179;
                    continue _fun57453
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun57453_ip = 249;
                    continue _fun57453
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun57453_ip = 249;
                    continue _fun57453
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun57453_ip = 234;
                    continue _fun57453
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun57453_ip = 247;
                    continue _fun57453
                }
            case 234:
                var8 = _closure1_slot24;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun57453_ip = 265;
                continue _fun57453;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun57453_ip = 283;
                continue _fun57453;
            case 270:
                var6 = _closure1_slot24;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun57453_ip = 323;
                    continue _fun57453
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
                    _fun57453_ip = 330;
                    continue _fun57453
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun57454: for (var _fun57454_ip = 0;;) switch (_fun57454_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun57454_ip = 56;
                                continue _fun57454
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
                            _fun57454_ip = 67;
                            continue _fun57454;
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
    var _closure1_slot23 = var0;
    var0 = function arg0, arg1() {
        _fun57455: for (var _fun57455_ip = 0;;) switch (_fun57455_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun57455_ip = 23;
                    continue _fun57455
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun57455_ip = 33;
                    continue _fun57455
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
                    _fun57455_ip = 70;
                    continue _fun57455
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun57455_ip = 55;
                    continue _fun57455
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var10 = function arg0() {
        _fun57456: for (var _fun57456_ip = 0;;) switch (_fun57456_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.encodedReceipt;
                var16 = var0.entitlementSkuId;
                var15 = var0.presentmentCurrency;
                var14 = var0.presentmentAmount;
                var13 = var0.appStoreRegion;
                var12 = var0.giftInfoOptions;
                var11 = var0.isGift;
                var6 = var0.retries;
                var2 = var0.jwsRepresentation;
                var9 = var0.jwsRepresentations;
                var10 = var0.source;
                var3 = var0.skipDupCheck;
                var8 = var0.orderId;
                var19 = null;
                if (!(var19 != var9)) {
                    _fun57456_ip = 99;
                    continue _fun57456
                }
            case 92:
                if (!(var19 == var2)) {
                    _fun57456_ip = 493;
                    continue _fun57456
                }
            case 99:
                if (!(var19 != var2)) {
                    _fun57456_ip = 114;
                    continue _fun57456
                }
            case 103:
                var0 = new Array(1);
                var0[0] = var2;
                var9 = var0;
            case 114:
                var5 = var17;
                if (!(var19 != var9)) {
                    _fun57456_ip = 127;
                    continue _fun57456
                }
            case 121:
                var0 = 0;
                var5 = var9[var0];
            case 127:
                var2 = _closure1_slot1;
                var18 = _closure1_slot3;
                var0 = 13;
                var0 = var18[var0];
                var4 = undefined;
                var2 = var2.bind(var4)(var0);
                var0 = var2.v3;
                var2 = var0.bind(var2)(var5);
                var _closure2_slot0 = var2;
                var5 = _closure1_slot0;
                var0 = 14;
                var0 = var18[var0];
                var0 = var5.bind(var4)(var0);
                var18 = var0.Storage;
                var5 = var18.get;
                var0 = _closure1_slot20;
                var0 = var5.bind(var18)(var0);
                if (var3) {
                    _fun57456_ip = 234;
                    continue _fun57456
                }
            case 206:
                if (!(var0 === var2)) {
                    _fun57456_ip = 234;
                    continue _fun57456
                }
            case 210:
                var0 = global;
                var2 = var0.Promise;
                var0 = var2.resolve;
                var0 = var0.bind(var2)(var19);
                _fun57456_ip = 491;
                continue _fun57456;
            case 234:
                var5 = true;
                var2 = var5 !== var11;
                if (var2) {
                    _fun57456_ip = 272;
                    continue _fun57456
                }
            case 243:
                var3 = var19 != var12;
                if (!var3) {
                    _fun57456_ip = 269;
                    continue _fun57456
                }
            case 250:
                var20 = var19 == var12;
                var18 = undefined;
                if (var20) {
                    _fun57456_ip = 265;
                    continue _fun57456
                }
            case 259:
                var18 = var12.gift_style;
            case 265:
                var3 = var19 != var18;
            case 269:
                var2 = var3;
            case 272:
                if (var2) {
                    _fun57456_ip = 327;
                    continue _fun57456
                }
            case 275:
                var3 = _closure1_slot1;
                var18 = _closure1_slot3;
                var2 = 15;
                var2 = var18[var2];
                var19 = var3.bind(var4)(var2);
                var18 = var19.track;
                var2 = _closure1_slot15;
                var3 = var2.GIFT_INFO_OPTIONS_MISSING;
                var2 = {};
                var2.source = var10;
                var2.sku_id = var16;
                var2 = var18.bind(var19)(var3, var2);
            case 327:
                var3 = _closure1_slot0;
                var18 = _closure1_slot3;
                var2 = 16;
                var2 = var18[var2];
                var2 = var3.bind(var4)(var2);
                var4 = var2.HTTP;
                var3 = var4.post;
                var2 = {};
                var7 = _closure1_slot17;
                var7 = var7.BILLING_APPLY_APPLE_RECEIPT;
                var2.url = var7;
                var7 = {};
                var7.encoded_receipt = var17;
                var7.entitlement_sku_id = var16;
                var7.presentment_currency = var15;
                var7.presentment_amount = var14;
                var7.app_store_region = var13;
                var7.gift_info_options = var12;
                var7.is_gift = var11;
                var7.source = var10;
                var7.jws_representations = var9;
                var7.order_id = var8;
                var2.body = var7;
                var2.retries = var6;
                var2.oldFormErrors = var5;
                var2.rejectWithError = var5;
                var4 = var3.bind(var4)(var2);
                var3 = var4.then;
                var2 = function(arg0) { // Environment: var1
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 14;
                    var2 = var2[var1];
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                    var3 = var1.Storage;
                    var2 = var3.set;
                    var1 = _closure1_slot20;
                    var0 = _closure2_slot0;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = arg0;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.catch;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.captureBillingException;
                    var1 = {};
                    var4 = {};
                    var5 = _closure1_slot21;
                    var4.source = var5;
                    var1.tags = var4;
                    var1 = var2.bind(var3)(var0, var1);
                    throw var0;
                };
                var0 = var2.bind(var3)(var1);
            case 491:
                return var0;
            case 493:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var22 = "Can pass either 'jwsRepresentation' or 'jwsRepresentations'.  Not both";
                var23 = var1;
                var0 = new var23[var2](var22, var21);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot25 = var10;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun57461: for (var _fun57461_ip = 0;;) switch (_fun57461_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57461_ip = 169;
                            continue _fun57461
                        }
                    case 10:
                        var7 = arg0;
                        var6 = arg1;
                        var5 = arg2;
                    case 19: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 16;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot17;
                        var4 = var4.BILLING_GENERATE_APPLE_TRIAL_OFFER_SIGNATURE;
                        var1.url = var4;
                        var4 = {};
                        var4.product_id = var7;
                        var4.product_offer_id = var6;
                        var4.app_account_token = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 111);
                    case 109:
                        return var1;
                    case 111:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun57461_ip = 125;
                            continue _fun57461
                        }
                    case 117:
                        var2 = var1.body;
                    case 122: // try_end0
                        return var2;
                    case 125:
                        return var1;
                    case 128: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 17;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.captureBillingException;
                        var2 = var2.bind(var3)(var4);
                        return var1;
                    case 169:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot26 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function arg0, arg1() {
        _fun57462: for (var _fun57462_ip = 0;;) switch (_fun57462_ip) {
            case 0:
                var0 = arg0;
                var3 = _closure1_slot22;
                var2 = var3.has;
                var1 = var0.code;
                var1 = var2.bind(var3)(var1);
                if (var1) {
                    _fun57462_ip = 518;
                    continue _fun57462
                }
            case 31:
                var1 = var0.message;
                var1 = global;
                var3 = var1.JSON;
                var2 = var3.stringify;
                var2 = var2.bind(var3)(var0);
                var3 = _closure1_slot2;
                var4 = _closure1_slot3;
                var2 = 34;
                var2 = var4[var2];
                var9 = undefined;
                var3 = var3.bind(var9)(var2);
                var2 = var3.getUnderlyingIOSError;
                var4 = var2.bind(var3)(var0);
                var6 = null;
                if (!(var6 == var4)) {
                    _fun57462_ip = 424;
                    continue _fun57462
                }
            case 97:
                var8 = _closure1_slot0;
                var2 = _closure1_slot3;
                var10 = 27;
                var3 = var2[var10];
                var3 = var8.bind(var9)(var3);
                var7 = var3.intl;
                var3 = var7.string;
                var2 = var2[var10];
                var2 = var8.bind(var9)(var2);
                var2 = var2.t;
                var2 = var2.PjfUXe;
                var11 = var3.bind(var7)(var2);
                var3 = var0.name;
                var2 = 'HTTPResponseError';
                var7 = var11;
                if (!(var2 !== var3)) {
                    _fun57462_ip = 207;
                    continue _fun57462
                }
            case 168:
                var2 = 'status';
                var2 = var2 in var0;
                if (!var2) {
                    _fun57462_ip = 193;
                    continue _fun57462
                }
            case 179:
                var2 = 'method';
                var2 = var2 in var0;
                var7 = var11;
                if (var2) {
                    _fun57462_ip = 207;
                    continue _fun57462
                }
            case 193:
                var2 = var0.message;
                if (var2) {
                    _fun57462_ip = 204;
                    continue _fun57462
                }
            case 201:
                var2 = var11;
            case 204:
                var7 = var2;
            case 207:
                var2 = var0.body;
                var8 = var7;
                if (!(var6 != var2)) {
                    _fun57462_ip = 275;
                    continue _fun57462
                }
            case 219:
                var2 = var0.body;
                var3 = var2.apple_error_code;
                var8 = var7;
                if (!(var6 != var3)) {
                    _fun57462_ip = 275;
                    continue _fun57462
                }
            case 237:
                var14 = var2.apple_error_code;
                var1 = var1.HermesInternal;
                var6 = var1.concat;
                var17 = '';
                var15 = ' (code: ';
                var13 = ')';
                var16 = var11;
                var8 = var17[var6](var16, var15, var14, var13, var12);
            case 275:
                var2 = _closure1_slot1;
                var3 = _closure1_slot3;
                var1 = 29;
                var1 = var3[var1];
                var7 = var2.bind(var9)(var1);
                var6 = var7.show;
                var1 = {};
                var2 = _closure1_slot0;
                var11 = var3[var10];
                var11 = var2.bind(var9)(var11);
                var12 = var11.intl;
                var11 = var12.string;
                var10 = var3[var10];
                var10 = var2.bind(var9)(var10);
                var10 = var10.t;
                var10 = var10.zrhHH3;
                var10 = var11.bind(var12)(var10);
                var1.title = var10;
                var1.body = var8;
                var8 = true;
                var1.isDismissable = var8;
                var1 = var6.bind(var7)(var1);
                var1 = 17;
                var1 = var3[var1];
                var3 = var2.bind(var9)(var1);
                var2 = var3.captureBillingException;
                var1 = {};
                var6 = {};
                var7 = _closure1_slot21;
                var6.source = var7;
                var7 = arg1;
                var6.purchase_type = var7;
                var1.tags = var6;
                var1 = var2.bind(var3)(var0, var1);
                throw var0;
            case 424:
                var2 = _closure1_slot1;
                var10 = _closure1_slot3;
                var1 = 29;
                var1 = var10[var1];
                var3 = var2.bind(var9)(var1);
                var2 = var3.show;
                var1 = {};
                var8 = _closure1_slot0;
                var5 = 27;
                var6 = var10[var5];
                var6 = var8.bind(var9)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var5 = var10[var5];
                var5 = var8.bind(var9)(var5);
                var5 = var5.t;
                var5 = var5.POsVOt;
                var5 = var6.bind(var7)(var5);
                var1.title = var5;
                var1.body = var4;
                var1 = var2.bind(var3)(var1);
                throw var0;
            case 518:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        _fun57463: for (var _fun57463_ip = 0;;) switch (_fun57463_ip) {
            case 0:
                var1 = _closure1_slot14;
                var0 = var1.isBusy;
                var0 = var0.bind(var1)();
                var0 = !var0;
                if (!var0) {
                    _fun57463_ip = 119;
                    continue _fun57463
                }
            case 23:
                var2 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 25;
                var1 = var4[var1];
                var4 = undefined;
                var7 = var2.bind(var4)(var1);
                var6 = var7.getCurrentConfig;
                var5 = {};
                var1 = '1ee357_2';
                var5.location = var1;
                var1 = {};
                var2 = false;
                var1.autoTrackExposure = var2;
                var1 = var6.bind(var7)(var5, var1);
                var1 = var1.paymentsBlocked;
                var1 = !var1;
                if (var1) {
                    _fun57463_ip = 116;
                    continue _fun57463
                }
            case 90:
                var5 = _closure1_slot1;
                var6 = _closure1_slot3;
                var3 = 26;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var1 = false;
            case 116:
                var0 = var1;
            case 119:
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        var0 = undefined;
        var3 = _closure1_slot30;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun57467: for (var _fun57467_ip = 0;;) switch (_fun57467_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun57467_ip = 657;
                            continue _fun57467
                        }
                    case 10:
                        var8 = arg0;
                        var15 = arg1;
                        var12 = arg2;
                        var10 = arg3;
                        var5 = undefined;
                        var17 = undefined;
                        var18 = undefined;
                        var16 = undefined;
                        var11 = undefined;
                        var14 = undefined;
                        var13 = undefined;
                        var4 = undefined;
                        var7 = false;
                        var9 = null;
                        var6 = null;
                    case 44: // try_start_0 // try_start_1
                        var19 = _closure1_slot0;
                        var20 = _closure1_slot3;
                        var2 = 20;
                        var2 = var20[var2];
                        var19 = var19.bind(var5)(var2);
                        var2 = var19.clearTransactionIOS;
                        var2 = var2.bind(var19)();
                        SaveGenerator(address = 81);
                    case 79:
                        return var2;
                    case 81:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 19);
                        if (var19) {
                            _fun57467_ip = 430;
                            continue _fun57467
                        }
                    case 90:
                        var20 = _closure1_slot0;
                        var21 = _closure1_slot3;
                        var19 = 24;
                        var19 = var21[var19];
                        var20 = var20.bind(var5)(var19);
                        var19 = var20.makeIAPRequest;
                        var10 = var19.bind(var20)(var15, var12, var10);
                        SaveGenerator(address = 127);
                    case 125:
                        return var10;
                    case 127:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 12);
                        if (var12) {
                            _fun57467_ip = 358;
                            continue _fun57467
                        }
                    case 136:
                        var11 = var10;
                        var7 = true;
                        var12 = var10.purchaseResponse;
                        var15 = var12.transactionIdentifier;
                        var12 = var15.toString;
                        var14 = var12.bind(var15)();
                        var12 = var10.purchaseResponse;
                        var13 = var12.transactionDate;
                        var12 = {};
                        var15 = var10.purchaseResponse;
                        var15 = var15.originalTransactionIdentifier;
                        var18 = var15;
                        var19 = var9 == var15;
                        var15 = undefined;
                        if (var19) {
                            _fun57467_ip = 212;
                            continue _fun57467
                        }
                    case 200:
                        var19 = var18;
                        var18 = var19.toString;
                        var15 = var18.bind(var19)();
                    case 212:
                        var17 = var15;
                        if (!(var9 == var15)) {
                            _fun57467_ip = 224;
                            continue _fun57467
                        }
                    case 219:
                        var15 = var14;
                        _fun57467_ip = 227;
                        continue _fun57467;
                    case 224:
                        var15 = var17;
                    case 227:
                        var12.original_transaction_id = var15;
                        var15 = var11;
                        var15 = var15.purchaseResponse;
                        var15 = var15.originalTransactionDate;
                        var16 = var15;
                        if (!(var9 == var15)) {
                            _fun57467_ip = 261;
                            continue _fun57467
                        }
                    case 256:
                        var15 = var13;
                        _fun57467_ip = 264;
                        continue _fun57467;
                    case 261:
                        var15 = var16;
                    case 264:
                        var12.original_transaction_date = var15;
                        var12.transaction_id = var14;
                        var12.transaction_date = var13;
                        var6 = var12;
                    case 286: // try_end0 // try_end1
                        var13 = _closure1_slot1;
                        var14 = _closure1_slot3;
                        var12 = 15;
                        var12 = var14[var12];
                        var15 = var13.bind(var5)(var12);
                        var14 = var15.track;
                        var12 = _closure1_slot15;
                        var13 = var12.APPLE_PARTNER_IAP_REQUEST_SENT;
                        var12 = {};
                        var16 = var8;
                        var12.request_identifier = var16;
                        var16 = var7;
                        var12.success = var16;
                        var23 = var6;
                        var24 = var12;
                        var16 = copyDataProperties(var24, var23);
                        var12 = var14.bind(var15)(var13, var12);
                        return var11;
                    case 358:
                        var12 = _closure1_slot1;
                        var13 = _closure1_slot3;
                        var11 = 15;
                        var11 = var13[var11];
                        var14 = var12.bind(var5)(var11);
                        var13 = var14.track;
                        var11 = _closure1_slot15;
                        var12 = var11.APPLE_PARTNER_IAP_REQUEST_SENT;
                        var11 = {};
                        var15 = var8;
                        var11.request_identifier = var15;
                        var15 = var7;
                        var11.success = var15;
                        var23 = var6;
                        var24 = var11;
                        var15 = copyDataProperties(var24, var23);
                        var11 = var13.bind(var14)(var12, var11);
                        return var10;
                    case 430:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot3;
                        var10 = 15;
                        var10 = var12[var10];
                        var12 = var11.bind(var5)(var10);
                        var11 = var12.track;
                        var3 = _closure1_slot15;
                        var10 = var3.APPLE_PARTNER_IAP_REQUEST_SENT;
                        var3 = {};
                        var13 = var8;
                        var3.request_identifier = var13;
                        var13 = var7;
                        var3.success = var13;
                        var23 = var6;
                        var24 = var3;
                        var13 = copyDataProperties(var24, var23);
                        var3 = var11.bind(var12)(var10, var3);
                        return var2;
                    case 502: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var1 = var3;
                        var2 = {};
                        var3 = var3.code;
                        var4 = var3;
                        var9 = var9 == var3;
                        var3 = undefined;
                        if (var9) {
                            _fun57467_ip = 538;
                            continue _fun57467
                        }
                    case 526:
                        var9 = var4;
                        var4 = var9.toString;
                        var3 = var4.bind(var9)();
                    case 538:
                        var2.error_code = var3;
                        var4 = _closure1_slot2;
                        var9 = _closure1_slot3;
                        var3 = 34;
                        var3 = var9[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.getUnderlyingIOSError;
                        var3 = var3.bind(var4)(var1);
                        var2.error_message = var3;
                        var6 = var2;
                        throw var1;
                    case 587: // try_end2 // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 1);
                        var4 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var3 = 15;
                        var3 = var9[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.track;
                        var2 = _closure1_slot15;
                        var3 = var2.APPLE_PARTNER_IAP_REQUEST_SENT;
                        var2 = {};
                        var2.request_identifier = var8;
                        var2.success = var7;
                        var23 = var6;
                        var24 = var2;
                        var6 = copyDataProperties(var24, var23);
                        var2 = var4.bind(var5)(var3, var2);
                        throw var1;
                    case 657:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot30 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot30 = var0;
    var4 = function arg0() {
        var0 = undefined;
        var3 = _closure1_slot32;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot31 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun57471: for (var _fun57471_ip = 0;;) switch (_fun57471_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57471_ip = 189;
                            continue _fun57471
                        }
                    case 15:
                        var _closure4_slot0 = var4;
                        var2 = _closure1_slot1;
                        var10 = _closure1_slot3;
                        var1 = 35;
                        var1 = var10[var1];
                        var9 = undefined;
                        var3 = var2.bind(var9)(var1);
                        var2 = var3.post;
                        var1 = {};
                        var5 = _closure1_slot17;
                        var5 = var5.BILLING_CREATE_APPLE_IAP_JWT_TOKEN;
                        var1.url = var5;
                        var1.body = var4;
                        var4 = true;
                        var1.oldFormErrors = var4;
                        var5 = {};
                        var8 = _closure1_slot0;
                        var7 = 36;
                        var7 = var10[var7];
                        var7 = var8.bind(var9)(var7);
                        var7 = var7.NetworkActionNames;
                        var7 = var7.APPLE_JWT_TOKEN_CREATE;
                        var5.event = var7;
                        var6 = function arg0() {
                            _fun57472: for (var _fun57472_ip = 0;;) switch (_fun57472_ip) {
                                case 0:
                                    var6 = arg0;
                                    var0 = _closure4_slot0;
                                    var3 = var0.operation;
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var7 = 37;
                                    var2 = var2[var7];
                                    var8 = undefined;
                                    var2 = var4.bind(var8)(var2);
                                    var2 = var2.APBRequestOperations;
                                    var2 = var2.CREATE;
                                    if (!(var3 !== var2)) {
                                        _fun57472_ip = 325;
                                        continue _fun57472
                                    }
                                case 60:
                                    var2 = _closure4_slot0;
                                    var3 = var2.operation;
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var5 = 38;
                                    var2 = var2[var5];
                                    var2 = var4.bind(var8)(var2);
                                    var2 = var2.ACRequestOperations;
                                    var2 = var2.CREATE;
                                    if (!(var3 !== var2)) {
                                        _fun57472_ip = 325;
                                        continue _fun57472
                                    }
                                case 109:
                                    var2 = _closure4_slot0;
                                    var3 = var2.operation;
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var2 = var2[var7];
                                    var2 = var4.bind(var8)(var2);
                                    var2 = var2.APBRequestOperations;
                                    var2 = var2.CHARGE;
                                    if (!(var3 !== var2)) {
                                        _fun57472_ip = 216;
                                        continue _fun57472
                                    }
                                case 152:
                                    var2 = _closure4_slot0;
                                    var3 = var2.operation;
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var2 = var2[var5];
                                    var2 = var4.bind(var8)(var2);
                                    var2 = var2.ACRequestOperations;
                                    var2 = var2.CHARGE;
                                    if (!(var3 !== var2)) {
                                        _fun57472_ip = 216;
                                        continue _fun57472
                                    }
                                case 195:
                                    var2 = {};
                                    var11 = _closure4_slot0;
                                    var12 = var2;
                                    var3 = copyDataProperties(var12, var11);
                                    var3 = var2;
                                    _fun57472_ip = 397;
                                    continue _fun57472;
                                case 216:
                                    var10 = _closure4_slot0;
                                    var7 = var10.sku_id;
                                    var5 = var10.country_code;
                                    var4 = var10.is_gift;
                                    var9 = var10.gift_info_options;
                                    var2 = {};
                                    var2.sku_id = var7;
                                    var2.request_country_code = var5;
                                    var7 = _closure1_slot6;
                                    var5 = _closure1_slot5;
                                    var11 = var7.bind(var8)(var10, var5);
                                    var12 = var2;
                                    var5 = copyDataProperties(var12, var11);
                                    var5 = null;
                                    if (!(var5 != var9)) {
                                        _fun57472_ip = 308;
                                        continue _fun57472
                                    }
                                case 283:
                                    var5 = global;
                                    var7 = var5.JSON;
                                    var5 = var7.stringify;
                                    var5 = var5.bind(var7)(var9);
                                    var2.gift_info_options = var5;
                                case 308:
                                    var3 = var2;
                                    if (!var4) {
                                        _fun57472_ip = 397;
                                        continue _fun57472
                                    }
                                case 314:
                                    var2.is_gift = var4;
                                    var3 = var2;
                                    _fun57472_ip = 397;
                                    continue _fun57472;
                                case 325:
                                    var5 = _closure4_slot0;
                                    var9 = var5.items;
                                    var4 = var5.country_code;
                                    var2 = _closure1_slot6;
                                    var1 = _closure1_slot4;
                                    var11 = var2.bind(var8)(var5, var1);
                                    var1 = {};
                                    var5 = global;
                                    var7 = var5.JSON;
                                    var5 = var7.stringify;
                                    var5 = var5.bind(var7)(var9);
                                    var1.subscription_items_json_string = var5;
                                    var1.request_country_code = var4;
                                    var12 = var1;
                                    var2 = copyDataProperties(var12, var11);
                                    var3 = var1;
                                case 397:
                                    var1 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var0 = 39;
                                    var0 = var2[var0];
                                    var2 = var1.bind(var8)(var0);
                                    var1 = var2.exact;
                                    var0 = {};
                                    var4 = null;
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun57472_ip = 456;
                                        continue _fun57472
                                    }
                                case 436:
                                    var6 = var6.body;
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun57472_ip = 456;
                                        continue _fun57472
                                    }
                                case 450:
                                    var5 = var6.request_data;
                                case 456:
                                    var6 = var4 != var5;
                                    var4 = '';
                                    if (!var6) {
                                        _fun57472_ip = 470;
                                        continue _fun57472
                                    }
                                case 467:
                                    var4 = var5;
                                case 470:
                                    var5 = var4.length;
                                    var4 = 0;
                                    var4 = var5 > var4;
                                    var0.jwt_token_exists = var4;
                                    var12 = var0;
                                    var11 = var3;
                                    var3 = copyDataProperties(var12, var11);
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var5.properties = var6;
                        var1.trackedActionData = var5;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 140);
                    case 138:
                        return var1;
                    case 140:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun57471_ip = 186;
                            continue _fun57471
                        }
                    case 146:
                        var2 = {};
                        var3 = global;
                        var5 = var3.JSON;
                        var4 = var5.stringify;
                        var3 = var1.body;
                        var3 = var3.request_data;
                        var3 = var4.bind(var5)(var3);
                        var2.requestJSONString = var3;
                        return var2;
                    case 186:
                        return var1;
                    case 189:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot32 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot32 = var0;
    var3 = function arg0() {
        var0 = undefined;
        var3 = _closure1_slot34;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot33 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun57476: for (var _fun57476_ip = 0;;) switch (_fun57476_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57476_ip = 165;
                            continue _fun57476
                        }
                    case 15:
                        var _closure4_slot0 = var5;
                        var3 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var1 = 35;
                        var1 = var9[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.patch;
                        var1 = {};
                        var11 = _closure1_slot17;
                        var10 = var11.BILLING_APPLE_SUBSCRIPTION;
                        var8 = var5.subscription_id;
                        var8 = var10.bind(var11)(var8);
                        var1.url = var8;
                        var1.body = var5;
                        var5 = true;
                        var1.oldFormErrors = var5;
                        var5 = {};
                        var8 = _closure1_slot0;
                        var7 = 36;
                        var7 = var9[var7];
                        var7 = var8.bind(var2)(var7);
                        var7 = var7.NetworkActionNames;
                        var7 = var7.APPLE_JWT_TOKEN_CREATE;
                        var5.event = var7;
                        var6 = function arg0() {
                            _fun57477: for (var _fun57477_ip = 0;;) switch (_fun57477_ip) {
                                case 0:
                                    var6 = arg0;
                                    var3 = {};
                                    var9 = _closure4_slot0;
                                    var10 = var3;
                                    var0 = copyDataProperties(var10, var9);
                                    var1 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var0 = 39;
                                    var0 = var2[var0];
                                    var8 = undefined;
                                    var2 = var1.bind(var8)(var0);
                                    var1 = var2.exact;
                                    var0 = {};
                                    var4 = null;
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun57477_ip = 83;
                                        continue _fun57477
                                    }
                                case 63:
                                    var6 = var6.body;
                                    var7 = var4 == var6;
                                    var5 = undefined;
                                    if (var7) {
                                        _fun57477_ip = 83;
                                        continue _fun57477
                                    }
                                case 77:
                                    var5 = var6.request_data;
                                case 83:
                                    var6 = var4 != var5;
                                    var4 = '';
                                    if (!var6) {
                                        _fun57477_ip = 97;
                                        continue _fun57477
                                    }
                                case 94:
                                    var4 = var5;
                                case 97:
                                    var5 = var4.length;
                                    var4 = 0;
                                    var4 = var5 > var4;
                                    var0.jwt_token_exists = var4;
                                    var10 = var0;
                                    var9 = var3;
                                    var3 = copyDataProperties(var10, var9);
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var5.properties = var6;
                        var1.trackedActionData = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 153);
                    case 151:
                        return var1;
                    case 153:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun57476_ip = 162;
                            continue _fun57476
                        }
                    case 159:
                        return var2;
                    case 162:
                        return var1;
                    case 165:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot34 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot34 = var0;
    var0 = function arg0, arg1() {
        _fun57478: for (var _fun57478_ip = 0;;) switch (_fun57478_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var5 = 37;
                var1 = var1[var5];
                var2 = undefined;
                var1 = var4.bind(var2)(var1);
                var1 = var1.APBRequestOperations;
                var1 = var1.CREATE;
                if (!(var1 !== var3)) {
                    _fun57478_ip = 470;
                    continue _fun57478
                }
            case 47:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.APBRequestOperations;
                var1 = var1.CANCEL;
                if (!(var1 !== var3)) {
                    _fun57478_ip = 470;
                    continue _fun57478
                }
            case 83:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.APBRequestOperations;
                var1 = var1.RESUBSCRIBE;
                if (!(var1 !== var3)) {
                    _fun57478_ip = 470;
                    continue _fun57478
                }
            case 119:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.APBRequestOperations;
                var1 = var1.REACTIVATE;
                if (!(var1 !== var3)) {
                    _fun57478_ip = 470;
                    continue _fun57478
                }
            case 155:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.APBRequestOperations;
                var1 = var1.CHARGE;
                if (!(var1 !== var3)) {
                    _fun57478_ip = 436;
                    continue _fun57478
                }
            case 191:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var5 = 38;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ACRequestOperations;
                var1 = var1.CREATE;
                if (!(var1 !== var3)) {
                    _fun57478_ip = 402;
                    continue _fun57478
                }
            case 230:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ACRequestOperations;
                var1 = var1.CANCEL;
                if (!(var1 !== var3)) {
                    _fun57478_ip = 402;
                    continue _fun57478
                }
            case 266:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ACRequestOperations;
                var1 = var1.REACTIVATE;
                if (!(var1 !== var3)) {
                    _fun57478_ip = 402;
                    continue _fun57478
                }
            case 299:
                var4 = _closure1_slot0;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var1 = var1.ACRequestOperations;
                var1 = var1.CHARGE;
                if (!(var1 !== var3)) {
                    _fun57478_ip = 368;
                    continue _fun57478
                }
            case 332:
                var1 = global;
                var4 = var1.Error;
                var1 = var4.prototype;
                var3 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var6 = 'Invalid operation';
                var7 = var3;
                var1 = new var7[var4](var6, var5);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
            case 368:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 22;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.ProductIds;
                var1 = var1.GENERIC_CONSUMABLE;
                return var1;
            case 402:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 22;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.ProductIds;
                var1 = var1.GENERIC_SUBSCRIPTION;
                return var1;
            case 436:
                var3 = _closure1_slot0;
                var4 = _closure1_slot3;
                var1 = 22;
                var1 = var4[var1];
                var1 = var3.bind(var2)(var1);
                var1 = var1.ProductIds;
                var1 = var1.GENERIC_CONSUMABLE;
                return var1;
            case 470:
                var1 = _closure1_slot0;
                var3 = _closure1_slot3;
                var0 = 22;
                var0 = var3[var0];
                var0 = var1.bind(var2)(var0);
                var0 = var0.ProductIds;
                var0 = var0.GENERIC_SUBSCRIPTION;
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun57481: for (var _fun57481_ip = 0;;) switch (_fun57481_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57481_ip = 356;
                            continue _fun57481
                        }
                    case 10:
                        var10 = arg0;
                        var7 = arg1;
                        var2 = arg2;
                        var5 = undefined;
                        var11 = undefined;
                        var9 = undefined;
                        var1 = _closure1_slot28;
                        var1 = var1.bind(var5)();
                        if (var1) {
                            _fun57481_ip = 44;
                            continue _fun57481
                        }
                    case 39:
                        var1 = false;
                        return var1;
                    case 44:
                        var1 = var2;
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        if (var1) {
                            _fun57481_ip = 84;
                            continue _fun57481
                        }
                    case 58:
                        var1 = 37;
                        var1 = var8[var1];
                        var1 = var6.bind(var5)(var1);
                        var1 = var1.APBRequestOperations;
                        var4 = var1.CANCEL;
                        _fun57481_ip = 108;
                        continue _fun57481;
                    case 84:
                        var1 = 38;
                        var1 = var8[var1];
                        var1 = var6.bind(var5)(var1);
                        var1 = var1.ACRequestOperations;
                        var4 = var1.CANCEL;
                    case 108:
                        var11 = var4;
                        var1 = _closure1_slot35;
                        var12 = var1.bind(var5)(var4);
                        var9 = var12;
                        var4 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var8 = 21;
                        var1 = var1[var8];
                        var6 = var4.bind(var5)(var1);
                        var4 = var6.dispatch;
                        var1 = {};
                        var13 = 'IAP_PURCHASE_PRODUCT_START';
                        var1.type = var13;
                        var1.productIdentifier = var12;
                        var1 = var4.bind(var6)(var1);
                        SaveGenerator(address = 174);
                    case 172:
                        return var1;
                    case 174:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun57481_ip = 353;
                            continue _fun57481
                        }
                    case 183: // try_start_0
                        var6 = _closure1_slot33;
                        var4 = {};
                        var4.operation = var11;
                        var4.request_identifier = var10;
                        var4.subscription_id = var7;
                        var4 = var6.bind(var5)(var4);
                        SaveGenerator(address = 213);
                    case 211:
                        return var4;
                    case 213:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                        if (var6) {
                            _fun57481_ip = 271;
                            continue _fun57481
                        }
                    case 219:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var6 = var6[var8];
                        var10 = var7.bind(var5)(var6);
                        var7 = var10.dispatch;
                        var6 = {};
                        var11 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                        var6.type = var11;
                        var11 = var9;
                        var6.productIdentifier = var11;
                        var6 = var7.bind(var10)(var6);
                    case 266: // try_end0
                        var6 = true;
                        return var6;
                    case 271:
                        return var4;
                    case 274: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var6 = var6[var8];
                        var8 = var7.bind(var5)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var10 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                        var6.type = var10;
                        var6.productIdentifier = var9;
                        var6 = var7.bind(var8)(var6);
                        var3 = _closure1_slot27;
                        var6 = var2;
                        var2 = 'partner_subscription';
                        if (!var6) {
                            _fun57481_ip = 342;
                            continue _fun57481
                        }
                    case 336:
                        var2 = 'advanced_commerce';
                    case 342:
                        var2 = var3.bind(var5)(var4, var2);
                        var2 = false;
                        return var2;
                    case 353:
                        return var1;
                    case 356:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot36 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot36 = var0;
    var0 = function arg0() {
        var0 = global;
        var2 = var0.Object;
        var1 = var2.values;
        var0 = _closure1_slot16;
        var2 = var1.bind(var2)(var0);
        var1 = var2.includes;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot37 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun57485: for (var _fun57485_ip = 0;;) switch (_fun57485_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        var5 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun57485_ip = 846;
                            continue _fun57485
                        }
                    case 16:
                        var7 = var1.requestIdentifier;
                        var8 = var1.items;
                        var16 = var1.currency;
                        var15 = var1.countryCode;
                        var6 = undefined;
                        var3 = undefined;
                        var10 = undefined;
                        var13 = undefined;
                        var14 = undefined;
                        SaveGenerator(address = 53);
                    case 51:
                        return var6;
                    case 53:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun57485_ip = 843;
                            continue _fun57485
                        }
                    case 62:
                        var2 = _closure1_slot28;
                        var2 = var2.bind(var6)();
                        if (var2) {
                            _fun57485_ip = 81;
                            continue _fun57485
                        }
                    case 76:
                        var2 = false;
                        return var2;
                    case 81:
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var2 = 40;
                        var2 = var11[var2];
                        var2 = var9.bind(var6)(var2);
                        var11 = var2.ACOMSubscriptionExperiment;
                        var9 = var11.getConfig;
                        var2 = {};
                        var12 = 'createGenericSubscription';
                        var2.location = var12;
                        var2 = var9.bind(var11)(var2);
                        var2 = var2.enabled;
                        var9 = null;
                        if (!(var9 != var5)) {
                            _fun57485_ip = 144;
                            continue _fun57485
                        }
                    case 141:
                        var2 = var5;
                    case 144:
                        var3 = var2;
                        var5 = _closure1_slot35;
                        var11 = _closure1_slot0;
                        var17 = _closure1_slot3;
                        if (var2) {
                            _fun57485_ip = 188;
                            continue _fun57485
                        }
                    case 162:
                        var2 = 37;
                        var2 = var17[var2];
                        var2 = var11.bind(var6)(var2);
                        var2 = var2.APBRequestOperations;
                        var2 = var2.CREATE;
                        _fun57485_ip = 212;
                        continue _fun57485;
                    case 188:
                        var9 = 38;
                        var9 = var17[var9];
                        var9 = var11.bind(var6)(var9);
                        var9 = var9.ACRequestOperations;
                        var2 = var9.CREATE;
                    case 212:
                        var17 = var5.bind(var6)(var2);
                        var10 = var17;
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var9 = 21;
                        var2 = var2[var9];
                        var11 = var5.bind(var6)(var2);
                        var5 = var11.dispatch;
                        var2 = {};
                        var18 = 'IAP_PURCHASE_PRODUCT_START';
                        var2.type = var18;
                        var2.productIdentifier = var17;
                        var2 = var5.bind(var11)(var2);
                        SaveGenerator(address = 271);
                    case 269:
                        return var2;
                    case 271:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun57485_ip = 840;
                            continue _fun57485
                        }
                    case 280: // try_start_0
                        var11 = _closure1_slot37;
                        var5 = var16;
                        var5 = var11.bind(var6)(var5);
                        if (var5) {
                            _fun57485_ip = 357;
                            continue _fun57485
                        }
                    case 295:
                        var5 = global;
                        var17 = var5.Error;
                        var19 = var16;
                        var5 = var5.HermesInternal;
                        var18 = var5.concat;
                        var11 = "Unable to create subscription with invalid currency '";
                        var5 = "' ";
                        var23 = var18.bind(var11)(var19, var5);
                        var11 = var17.prototype;
                        var11 = Object.create(var11, {
                            constructor: {
                                value: var17
                            }
                        });
                        var24 = var11;
                        var5 = new var24[var17](var23, var22);
                        var5 = var5 instanceof Object ? var5 : var11;
                        throw var5;
                    case 357:
                        var5 = {};
                        var11 = var7;
                        var5.request_identifier = var11;
                        var17 = var8;
                        var11 = var17.map;
                        var8 = function(arg0) { // Environment: var8
                            var1 = arg0;
                            var0 = {};
                            var2 = var1.planId;
                            var0.plan_id = var2;
                            var1 = var1.quantity;
                            var0.quantity = var1;
                            return var0;
                        };
                        var8 = var11.bind(var17)(var8);
                        var5.items = var8;
                        var8 = var16;
                        var5.currency = var8;
                        var8 = var15;
                        var5.country_code = var8;
                        var13 = var5;
                        var8 = _closure1_slot31;
                        var5 = var3;
                        var11 = {};
                        var18 = _closure1_slot0;
                        var19 = _closure1_slot3;
                        if (var5) {
                            _fun57485_ip = 474;
                            continue _fun57485
                        }
                    case 430:
                        var5 = 37;
                        var5 = var19[var5];
                        var5 = var18.bind(var6)(var5);
                        var5 = var5.APBRequestOperations;
                        var5 = var5.CREATE;
                        var11.operation = var5;
                        var22 = var13;
                        var23 = var11;
                        var5 = copyDataProperties(var23, var22);
                        var5 = var11;
                        _fun57485_ip = 516;
                        continue _fun57485;
                    case 474:
                        var17 = 38;
                        var17 = var19[var17];
                        var17 = var18.bind(var6)(var17);
                        var17 = var17.ACRequestOperations;
                        var17 = var17.CREATE;
                        var11.operation = var17;
                        var22 = var13;
                        var23 = var11;
                        var13 = copyDataProperties(var23, var22);
                        var5 = var11;
                    case 516:
                        var5 = var8.bind(var6)(var5);
                        SaveGenerator(address = 525);
                    case 523:
                        return var5;
                    case 525:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 8);
                        if (var8) {
                            _fun57485_ip = 758;
                            continue _fun57485
                        }
                    case 534:
                        var22 = var5.requestJSONString;
                        var13 = _closure1_slot29;
                        var23 = var7;
                        var21 = var10;
                        var20 = var3;
                        var24 = undefined;
                        var7 = var24[var13](var23, var22, var21, var20, var19);
                        SaveGenerator(address = 563);
                    case 561:
                        return var7;
                    case 563:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                        if (var8) {
                            _fun57485_ip = 755;
                            continue _fun57485
                        }
                    case 572:
                        var13 = var7.purchaseResponse;
                        var14 = var7.originalPurchase;
                        var11 = _closure1_slot25;
                        var8 = {};
                        var17 = var13.transactionReceipt;
                        var8.encodedReceipt = var17;
                        var17 = 3;
                        var8.retries = var17;
                        var8.presentmentCurrency = var16;
                        var8.appStoreRegion = var15;
                        var13 = var13.jwsRepresentation;
                        var8.jwsRepresentation = var13;
                        var8.source = var12;
                        var8 = var11.bind(var6)(var8);
                        SaveGenerator(address = 643);
                    case 641:
                        return var8;
                    case 643:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 11);
                        if (var11) {
                            _fun57485_ip = 752;
                            continue _fun57485
                        }
                    case 649:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot3;
                        var11 = 20;
                        var11 = var13[var11];
                        var13 = var12.bind(var6)(var11);
                        var12 = var13.finishTransaction;
                        var11 = {};
                        var11.purchase = var14;
                        var11 = var12.bind(var13)(var11);
                        SaveGenerator(address = 691);
                    case 689:
                        return var11;
                    case 691:
                        ResumeGenerator(result_out_reg = 11, return_bool_out_reg = 12);
                        if (var12) {
                            _fun57485_ip = 749;
                            continue _fun57485
                        }
                    case 697:
                        var13 = _closure1_slot1;
                        var12 = _closure1_slot3;
                        var12 = var12[var9];
                        var14 = var13.bind(var6)(var12);
                        var13 = var14.dispatch;
                        var12 = {};
                        var15 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                        var12.type = var15;
                        var15 = var10;
                        var12.productIdentifier = var15;
                        var12 = var13.bind(var14)(var12);
                    case 744: // try_end0
                        var12 = true;
                        return var12;
                    case 749:
                        return var11;
                    case 752:
                        return var8;
                    case 755:
                        return var7;
                    case 758:
                        return var5;
                    case 761: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var7 = var7[var9];
                        var9 = var8.bind(var6)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var11 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                        var7.type = var11;
                        var7.productIdentifier = var10;
                        var7 = var8.bind(var9)(var7);
                        var4 = _closure1_slot27;
                        var7 = var3;
                        var3 = 'partner_subscription';
                        if (!var7) {
                            _fun57485_ip = 829;
                            continue _fun57485
                        }
                    case 823:
                        var3 = 'advanced_commerce';
                    case 829:
                        var3 = var4.bind(var6)(var5, var3);
                        var3 = false;
                        return var3;
                    case 840:
                        return var2;
                    case 843:
                        return var1;
                    case 846:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot38 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot38 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun57489: for (var _fun57489_ip = 0;;) switch (_fun57489_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun57489_ip = 680;
                            continue _fun57489
                        }
                    case 13:
                        var7 = var1.requestIdentifier;
                        var5 = var1.subscriptionId;
                        var3 = arg1;
                        var6 = undefined;
                        var11 = undefined;
                        var10 = undefined;
                        var14 = undefined;
                        SaveGenerator(address = 40);
                    case 38:
                        return var6;
                    case 40:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun57489_ip = 677;
                            continue _fun57489
                        }
                    case 49:
                        var2 = _closure1_slot28;
                        var2 = var2.bind(var6)();
                        if (var2) {
                            _fun57489_ip = 68;
                            continue _fun57489
                        }
                    case 63:
                        var2 = false;
                        return var2;
                    case 68:
                        var2 = {};
                        var8 = var7;
                        var2.request_identifier = var8;
                        var2.subscription_id = var5;
                        var11 = var2;
                        var5 = _closure1_slot35;
                        var2 = var3;
                        var9 = _closure1_slot0;
                        var12 = _closure1_slot3;
                        if (var2) {
                            _fun57489_ip = 130;
                            continue _fun57489
                        }
                    case 104:
                        var2 = 37;
                        var2 = var12[var2];
                        var2 = var9.bind(var6)(var2);
                        var2 = var2.APBRequestOperations;
                        var2 = var2.REACTIVATE;
                        _fun57489_ip = 154;
                        continue _fun57489;
                    case 130:
                        var8 = 38;
                        var8 = var12[var8];
                        var8 = var9.bind(var6)(var8);
                        var8 = var8.ACRequestOperations;
                        var2 = var8.REACTIVATE;
                    case 154:
                        var12 = var5.bind(var6)(var2);
                        var10 = var12;
                        var5 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var9 = 21;
                        var2 = var2[var9];
                        var8 = var5.bind(var6)(var2);
                        var5 = var8.dispatch;
                        var2 = {};
                        var13 = 'IAP_PURCHASE_PRODUCT_START';
                        var2.type = var13;
                        var2.productIdentifier = var12;
                        var2 = var5.bind(var8)(var2);
                        SaveGenerator(address = 213);
                    case 211:
                        return var2;
                    case 213:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                        if (var5) {
                            _fun57489_ip = 674;
                            continue _fun57489
                        }
                    case 222: // try_start_0
                        var5 = var3;
                        if (var5) {
                            _fun57489_ip = 302;
                            continue _fun57489
                        }
                    case 228:
                        var8 = _closure1_slot33;
                        var5 = {};
                        var13 = _closure1_slot0;
                        var15 = _closure1_slot3;
                        var12 = 37;
                        var12 = var15[var12];
                        var12 = var13.bind(var6)(var12);
                        var12 = var12.APBRequestOperations;
                        var12 = var12.REACTIVATE;
                        var5.operation = var12;
                        var18 = var11;
                        var19 = var5;
                        var12 = copyDataProperties(var19, var18);
                        var5 = var8.bind(var6)(var5);
                        SaveGenerator(address = 290);
                    case 288:
                        return var5;
                    case 290:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 8);
                        if (!var8) {
                            _fun57489_ip = 531;
                            continue _fun57489
                        }
                    case 299: // try_end0
                        return var5;
                    case 302: // try_start_1
                        var8 = _closure1_slot31;
                        var5 = {};
                        var13 = _closure1_slot0;
                        var15 = _closure1_slot3;
                        var12 = 38;
                        var12 = var15[var12];
                        var12 = var13.bind(var6)(var12);
                        var12 = var12.ACRequestOperations;
                        var12 = var12.REACTIVATE;
                        var5.operation = var12;
                        var18 = var11;
                        var19 = var5;
                        var11 = copyDataProperties(var19, var18);
                        var5 = var8.bind(var6)(var5);
                        SaveGenerator(address = 364);
                    case 362:
                        return var5;
                    case 364:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 8);
                        if (var8) {
                            _fun57489_ip = 592;
                            continue _fun57489
                        }
                    case 373:
                        var18 = var5.requestJSONString;
                        var12 = _closure1_slot29;
                        var19 = var7;
                        var17 = var10;
                        var16 = true;
                        var20 = undefined;
                        var7 = var20[var12](var19, var18, var17, var16, var15);
                        SaveGenerator(address = 401);
                    case 399:
                        return var7;
                    case 401:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                        if (var8) {
                            _fun57489_ip = 589;
                            continue _fun57489
                        }
                    case 410:
                        var12 = var7.purchaseResponse;
                        var14 = var7.originalPurchase;
                        var11 = _closure1_slot25;
                        var8 = {};
                        var13 = var12.transactionReceipt;
                        var8.encodedReceipt = var13;
                        var13 = 3;
                        var8.retries = var13;
                        var12 = var12.jwsRepresentation;
                        var8.jwsRepresentation = var12;
                        var12 = 'resubscribeGenericSubscription';
                        var8.source = var12;
                        var8 = var11.bind(var6)(var8);
                        SaveGenerator(address = 477);
                    case 475:
                        return var8;
                    case 477:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 11);
                        if (var11) {
                            _fun57489_ip = 586;
                            continue _fun57489
                        }
                    case 483:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot3;
                        var11 = 20;
                        var11 = var13[var11];
                        var13 = var12.bind(var6)(var11);
                        var12 = var13.finishTransaction;
                        var11 = {};
                        var11.purchase = var14;
                        var11 = var12.bind(var13)(var11);
                        SaveGenerator(address = 525);
                    case 523:
                        return var11;
                    case 525:
                        ResumeGenerator(result_out_reg = 11, return_bool_out_reg = 12);
                        if (var12) {
                            _fun57489_ip = 583;
                            continue _fun57489
                        }
                    case 531:
                        var13 = _closure1_slot1;
                        var12 = _closure1_slot3;
                        var12 = var12[var9];
                        var14 = var13.bind(var6)(var12);
                        var13 = var14.dispatch;
                        var12 = {};
                        var15 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                        var12.type = var15;
                        var15 = var10;
                        var12.productIdentifier = var15;
                        var12 = var13.bind(var14)(var12);
                    case 578: // try_end1
                        var12 = true;
                        return var12;
                    case 583:
                        return var11;
                    case 586:
                        return var8;
                    case 589:
                        return var7;
                    case 592:
                        return var5;
                    case 595: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 5);
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var7 = var7[var9];
                        var9 = var8.bind(var6)(var7);
                        var8 = var9.dispatch;
                        var7 = {};
                        var11 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                        var7.type = var11;
                        var7.productIdentifier = var10;
                        var7 = var8.bind(var9)(var7);
                        var4 = _closure1_slot27;
                        var7 = var3;
                        var3 = 'partner_subscription';
                        if (!var7) {
                            _fun57489_ip = 663;
                            continue _fun57489
                        }
                    case 657:
                        var3 = 'advanced_commerce';
                    case 663:
                        var3 = var4.bind(var6)(var5, var3);
                        var3 = false;
                        return var3;
                    case 674:
                        return var2;
                    case 677:
                        return var1;
                    case 680:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot39 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot39 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun57492: for (var _fun57492_ip = 0;;) switch (_fun57492_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57492_ip = 818;
                            continue _fun57492
                        }
                    case 10:
                        var13 = arg0;
                        var14 = arg1;
                        var6 = undefined;
                        var3 = undefined;
                        var15 = undefined;
                        var16 = undefined;
                        var17 = undefined;
                        var18 = undefined;
                        var19 = undefined;
                        var20 = undefined;
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var1 = 24;
                        var1 = var5[var1];
                        var7 = var2.bind(var6)(var1);
                        var5 = var7.restorePurchases;
                        var1 = {};
                        var2 = false;
                        var1.fullRestore = var2;
                        var1 = var5.bind(var7)(var1);
                        SaveGenerator(address = 79);
                    case 77:
                        return var1;
                    case 79:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun57492_ip = 815;
                            continue _fun57492
                        }
                    case 88:
                        var3 = new Array(0);
                        var5 = var1.length;
                        var7 = 0;
                        if (!(var7 !== var5)) {
                            _fun57492_ip = 810;
                            continue _fun57492
                        }
                    case 106:
                        var5 = _closure1_slot23;
                        var5 = var5.bind(var6)(var1);
                        var16 = var5;
                        var5 = var5.bind(var6)();
                        var15 = var5;
                        var5 = var5.done;
                        var12 = 15;
                        var11 = null;
                        var10 = 20;
                        var9 = 3;
                        var8 = 'retryPendingPurchases';
                        if (var5) {
                            _fun57492_ip = 618;
                            continue _fun57492
                        }
                    case 153:
                        var5 = var15;
                        var5 = var5.value;
                        var5 = var5.purchaseResponse;
                        var17 = var5;
                        var18 = var5.productIdentifier;
                        var22 = var5.transactionIdentifier;
                        var5 = var22.toString;
                        var19 = var5.bind(var22)();
                    case 191: // try_start_0
                        var22 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var5 = var5[var12];
                        var24 = var22.bind(var6)(var5);
                        var23 = var24.track;
                        var5 = _closure1_slot15;
                        var22 = var5.APPLE_RETRY_PENDING_PURCHASE_STARTED;
                        var5 = {};
                        var25 = var18;
                        var5.product_id = var25;
                        var25 = var19;
                        var5.transaction_id = var25;
                        var5 = var23.bind(var24)(var22, var5);
                        var22 = _closure1_slot25;
                        var5 = {};
                        var23 = var17;
                        var24 = var23.transactionReceipt;
                        var5.encodedReceipt = var24;
                        var5.retries = var9;
                        var24 = var13;
                        var5.presentmentCurrency = var24;
                        var24 = var14;
                        var5.appStoreRegion = var24;
                        var23 = var23.jwsRepresentation;
                        var5.jwsRepresentation = var23;
                        var5.source = var8;
                        var5 = var22.bind(var6)(var5);
                        SaveGenerator(address = 312);
                    case 310:
                        return var5;
                    case 312:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 22);
                        if (var22) {
                            _fun57492_ip = 473;
                            continue _fun57492
                        }
                    case 321:
                        var23 = _closure1_slot0;
                        var22 = _closure1_slot3;
                        var22 = var22[var10];
                        var24 = var23.bind(var6)(var22);
                        var23 = var24.finishTransaction;
                        var22 = {};
                        var25 = {};
                        var26 = var18;
                        var25.productId = var26;
                        var26 = var19;
                        var25.transactionId = var26;
                        var26 = var17;
                        var27 = var26.transactionDate;
                        var25.transactionDate = var27;
                        var26 = var26.transactionReceipt;
                        var25.transactionReceipt = var26;
                        var22.purchase = var25;
                        var22 = var23.bind(var24)(var22);
                        SaveGenerator(address = 403);
                    case 401:
                        return var22;
                    case 403:
                        ResumeGenerator(result_out_reg = 22, return_bool_out_reg = 23);
                        if (var23) {
                            _fun57492_ip = 470;
                            continue _fun57492
                        }
                    case 409:
                        var24 = _closure1_slot1;
                        var23 = _closure1_slot3;
                        var23 = var23[var12];
                        var26 = var24.bind(var6)(var23);
                        var25 = var26.track;
                        var23 = _closure1_slot15;
                        var24 = var23.APPLE_RETRY_PENDING_PURCHASE_SUCCEEDED;
                        var23 = {};
                        var27 = var18;
                        var23.product_id = var27;
                        var27 = var19;
                        var23.transaction_id = var27;
                        var23 = var25.bind(var26)(var24, var23);
                    case 465: // try_end0
                        _fun57492_ip = 597;
                        continue _fun57492;
                    case 470:
                        return var22;
                    case 473:
                        return var5;
                    case 476: // catch_target0
                        CatchBlockStart(arg_register = 23);
                        var21 = var23;
                        var22 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var5 = var5[var12];
                        var25 = var22.bind(var6)(var5);
                        var24 = var25.track;
                        var5 = _closure1_slot15;
                        var22 = var5.APPLE_RETRY_PENDING_PURCHASE_FAILED;
                        var5 = {};
                        var26 = var18;
                        var5.product_id = var26;
                        var26 = var19;
                        var5.transaction_id = var26;
                        var23 = var23.code;
                        var20 = var23;
                        var26 = var11 == var23;
                        var23 = undefined;
                        if (var26) {
                            _fun57492_ip = 560;
                            continue _fun57492
                        }
                    case 548:
                        var27 = var20;
                        var26 = var27.toString;
                        var23 = var26.bind(var27)();
                    case 560:
                        var5.error_code = var23;
                        var23 = var21;
                        var26 = var23.message;
                        var5.error_message = var26;
                        var5 = var24.bind(var25)(var22, var5);
                        var22 = var3;
                        var5 = var22.push;
                        var5 = var5.bind(var22)(var23);
                    case 597:
                        var5 = var16;
                        var5 = var5.bind(var6)();
                        var15 = var5;
                        var5 = var5.done;
                        if (!var5) {
                            _fun57492_ip = 153;
                            continue _fun57492
                        }
                    case 618:
                        var5 = var3;
                        var5 = var5.length;
                        if (!(!(var5 > var7))) {
                            _fun57492_ip = 635;
                            continue _fun57492
                        }
                    case 630:
                        var5 = true;
                        return var5;
                    case 635:
                        var8 = var3;
                        var5 = var8.map;
                        var3 = function(arg0) { // Environment: var3
                            var0 = arg0;
                            var0 = var0.message;
                            return var0;
                        };
                        var7 = var5.bind(var8)(var3);
                        var5 = var7.join;
                        var3 = ', ';
                        var9 = var5.bind(var7)(var3);
                        var3 = global;
                        var5 = var3.HermesInternal;
                        var7 = var5.concat;
                        var5 = 'Failed to retry pending purchases: ';
                        var7 = var7.bind(var5)(var9);
                        var5 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var4 = 17;
                        var4 = var9[var4];
                        var6 = var5.bind(var6)(var4);
                        var5 = var6.captureBillingException;
                        var3 = var3.Error;
                        var4 = var3.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var3
                            }
                        });
                        var30 = var4;
                        var29 = var7;
                        var3 = new var30[var3](var29, var28);
                        var4 = var3 instanceof Object ? var3 : var4;
                        var3 = {};
                        var7 = {};
                        var9 = var8.length;
                        var8 = var9.toString;
                        var8 = var8.bind(var9)();
                        var7.pendingPurchaseFailures = var8;
                        var9 = var1.length;
                        var8 = var9.toString;
                        var8 = var8.bind(var9)();
                        var7.totalPendingPurchases = var8;
                        var3.tags = var7;
                        var3 = var5.bind(var6)(var4, var3);
                        return var2;
                    case 810:
                        var2 = true;
                        return var2;
                    case 815:
                        return var1;
                    case 818:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot40 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot40 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun57496: for (var _fun57496_ip = 0;;) switch (_fun57496_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        var10 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun57496_ip = 1572;
                            continue _fun57496
                        }
                    case 16:
                        var20 = var1.requestIdentifier;
                        var8 = var1.skuId;
                        var27 = var1.currency;
                        var13 = var1.countryCode;
                        var25 = var1.analyticsLocations;
                        var26 = var1.analyticsLoadId;
                        var12 = var1.isGift;
                        var7 = var1.giftInfoOptions;
                        var14 = arg1;
                        var6 = undefined;
                        var17 = undefined;
                        var19 = undefined;
                        var18 = undefined;
                        var30 = undefined;
                        var22 = undefined;
                        var23 = undefined;
                        var24 = undefined;
                        var9 = undefined;
                        SaveGenerator(address = 89);
                    case 87:
                        return var6;
                    case 89:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun57496_ip = 1569;
                            continue _fun57496
                        }
                    case 98:
                        var2 = _closure1_slot28;
                        var2 = var2.bind(var6)();
                        if (var2) {
                            _fun57496_ip = 117;
                            continue _fun57496
                        }
                    case 112:
                        var2 = false;
                        return var2;
                    case 117:
                        var11 = _closure1_slot0;
                        var15 = _closure1_slot3;
                        var2 = 40;
                        var2 = var15[var2];
                        var2 = var11.bind(var6)(var2);
                        var15 = var2.ACOMOTPExperiment;
                        var11 = var15.getConfig;
                        var2 = {};
                        var21 = 'mobilePurchaseSKU';
                        var2.location = var21;
                        var2 = var11.bind(var15)(var2);
                        var2 = var2.enabled;
                        var15 = null;
                        if (!(var15 != var10)) {
                            _fun57496_ip = 180;
                            continue _fun57496
                        }
                    case 177:
                        var2 = var10;
                    case 180:
                        var17 = var2;
                        var10 = _closure1_slot35;
                        var16 = _closure1_slot0;
                        var28 = _closure1_slot3;
                        if (var2) {
                            _fun57496_ip = 224;
                            continue _fun57496
                        }
                    case 198:
                        var2 = 37;
                        var2 = var28[var2];
                        var2 = var16.bind(var6)(var2);
                        var2 = var2.APBRequestOperations;
                        var2 = var2.CHARGE;
                        _fun57496_ip = 248;
                        continue _fun57496;
                    case 224:
                        var11 = 38;
                        var11 = var28[var11];
                        var11 = var16.bind(var6)(var11);
                        var11 = var11.ACRequestOperations;
                        var2 = var11.CHARGE;
                    case 248:
                        var28 = var10.bind(var6)(var2);
                        var19 = var28;
                        var11 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var10 = 21;
                        var2 = var2[var10];
                        var16 = var11.bind(var6)(var2);
                        var11 = var16.dispatch;
                        var2 = {};
                        var29 = 'IAP_PURCHASE_PRODUCT_START';
                        var2.type = var29;
                        var2.productIdentifier = var28;
                        var2 = var11.bind(var16)(var2);
                        SaveGenerator(address = 307);
                    case 305:
                        return var2;
                    case 307:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 11);
                        if (var11) {
                            _fun57496_ip = 1566;
                            continue _fun57496
                        }
                    case 316:
                        var16 = _closure1_slot0;
                        var28 = _closure1_slot3;
                        var11 = 41;
                        var11 = var28[var11];
                        var28 = var16.bind(var6)(var11);
                        var16 = var28.trackPaymentFlowStartedAnalyticsAndCTP;
                        var11 = {};
                        var29 = var8;
                        var11.sku_id = var29;
                        var29 = var26;
                        var11.load_id = var29;
                        var29 = var25;
                        var11.location_stack = var29;
                        var29 = _closure1_slot18;
                        var29 = var29.APPLE_PARTNER;
                        var11.payment_gateway = var29;
                        var11 = var16.bind(var28)(var11);
                    case 388: // try_start_0
                        var16 = _closure1_slot37;
                        var11 = var27;
                        var11 = var16.bind(var6)(var11);
                        if (var11) {
                            _fun57496_ip = 465;
                            continue _fun57496
                        }
                    case 403:
                        var11 = global;
                        var28 = var11.Error;
                        var31 = var27;
                        var11 = var11.HermesInternal;
                        var29 = var11.concat;
                        var16 = "Unable to create subscription with invalid currency '";
                        var11 = "' ";
                        var37 = var29.bind(var16)(var31, var11);
                        var16 = var28.prototype;
                        var16 = Object.create(var16, {
                            constructor: {
                                value: var28
                            }
                        });
                        var38 = var16;
                        var11 = new var38[var28](var37, var36);
                        var11 = var11 instanceof Object ? var11 : var16;
                        throw var11;
                    case 465:
                        var28 = var27;
                        var16 = var13;
                        var11 = function arg0, arg1() {
                            var0 = undefined;
                            var3 = _closure1_slot40;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var11 = var11.bind(var6)(var28, var16);
                        SaveGenerator(address = 488);
                    case 486:
                        return var11;
                    case 488:
                        ResumeGenerator(result_out_reg = 11, return_bool_out_reg = 16);
                        if (var16) {
                            _fun57496_ip = 1181;
                            continue _fun57496
                        }
                    case 497:
                        var16 = {};
                        var28 = var8;
                        var16.sku_id = var28;
                        var28 = var20;
                        var16.request_identifier = var28;
                        var28 = var27;
                        var16.currency = var28;
                        var28 = var13;
                        var16.country_code = var28;
                        var28 = var12;
                        var16.is_gift = var28;
                        var28 = var7;
                        var16.gift_info_options = var28;
                        var30 = var16;
                        var28 = _closure1_slot31;
                        var16 = var17;
                        var29 = {};
                        var32 = _closure1_slot0;
                        var33 = _closure1_slot3;
                        if (var16) {
                            _fun57496_ip = 614;
                            continue _fun57496
                        }
                    case 570:
                        var16 = 37;
                        var16 = var33[var16];
                        var16 = var32.bind(var6)(var16);
                        var16 = var16.APBRequestOperations;
                        var16 = var16.CHARGE;
                        var29.operation = var16;
                        var36 = var30;
                        var37 = var29;
                        var16 = copyDataProperties(var37, var36);
                        var16 = var29;
                        _fun57496_ip = 656;
                        continue _fun57496;
                    case 614:
                        var31 = 38;
                        var31 = var33[var31];
                        var31 = var32.bind(var6)(var31);
                        var31 = var31.ACRequestOperations;
                        var31 = var31.CHARGE;
                        var29.operation = var31;
                        var36 = var30;
                        var37 = var29;
                        var30 = copyDataProperties(var37, var36);
                        var16 = var29;
                    case 656:
                        var16 = var28.bind(var6)(var16);
                        SaveGenerator(address = 665);
                    case 663:
                        return var16;
                    case 665:
                        ResumeGenerator(result_out_reg = 16, return_bool_out_reg = 28);
                        if (var28) {
                            _fun57496_ip = 1178;
                            continue _fun57496
                        }
                    case 674:
                        var36 = var16.requestJSONString;
                        var29 = _closure1_slot29;
                        var37 = var20;
                        var35 = var19;
                        var34 = var17;
                        var38 = undefined;
                        var17 = var38[var29](var37, var36, var35, var34, var33);
                        SaveGenerator(address = 703);
                    case 701:
                        return var17;
                    case 703:
                        ResumeGenerator(result_out_reg = 17, return_bool_out_reg = 20);
                        if (var20) {
                            _fun57496_ip = 1175;
                            continue _fun57496
                        }
                    case 712:
                        var20 = var17.purchaseResponse;
                        var22 = var20;
                        var23 = var17.originalPurchase;
                        var20 = var20.jwsRepresentation;
                        var18 = var20;
                        if (!(var15 == var20)) {
                            _fun57496_ip = 751;
                            continue _fun57496
                        }
                    case 740:
                        var20 = var22;
                        var28 = var20.transactionReceipt;
                        _fun57496_ip = 754;
                        continue _fun57496;
                    case 751:
                        var28 = var18;
                    case 754:
                        var20 = _closure1_slot1;
                        var29 = _closure1_slot3;
                        var18 = 13;
                        var18 = var29[var18];
                        var20 = var20.bind(var6)(var18);
                        var18 = var20.v3;
                        var24 = var18.bind(var20)(var28);
                        var18 = var12;
                        if (!var18) {
                            _fun57496_ip = 854;
                            continue _fun57496
                        }
                    case 791:
                        var20 = _closure1_slot1;
                        var18 = _closure1_slot3;
                        var18 = var18[var10];
                        var28 = var20.bind(var6)(var18);
                        var20 = var28.dispatch;
                        var18 = {};
                        var29 = 'GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION';
                        var18.type = var29;
                        var29 = var24;
                        var18.key = var29;
                        var29 = {};
                        var36 = var7;
                        var37 = var29;
                        var30 = copyDataProperties(var37, var36);
                        var18.giftOptions = var29;
                        var18 = var20.bind(var28)(var18);
                    case 854:
                        var20 = _closure1_slot25;
                        var18 = {};
                        var28 = var22.transactionReceipt;
                        var18.encodedReceipt = var28;
                        var28 = 3;
                        var18.retries = var28;
                        var18.presentmentCurrency = var27;
                        var27 = var13;
                        var18.appStoreRegion = var27;
                        var27 = var7;
                        var18.giftInfoOptions = var27;
                        var27 = var12;
                        var18.isGift = var27;
                        var22 = var22.jwsRepresentation;
                        var18.jwsRepresentation = var22;
                        var18.source = var21;
                        var18 = var20.bind(var6)(var18);
                        SaveGenerator(address = 932);
                    case 930:
                        return var18;
                    case 932:
                        ResumeGenerator(result_out_reg = 18, return_bool_out_reg = 20);
                        if (var20) {
                            _fun57496_ip = 1172;
                            continue _fun57496
                        }
                    case 941:
                        var20 = var12;
                        if (!var20) {
                            _fun57496_ip = 990;
                            continue _fun57496
                        }
                    case 947:
                        var21 = _closure1_slot1;
                        var20 = _closure1_slot3;
                        var20 = var20[var10];
                        var22 = var21.bind(var6)(var20);
                        var21 = var22.dispatch;
                        var20 = {};
                        var27 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                        var20.type = var27;
                        var20.key = var24;
                        var20 = var21.bind(var22)(var20);
                    case 990:
                        var21 = _closure1_slot0;
                        var22 = _closure1_slot3;
                        var20 = 20;
                        var20 = var22[var20];
                        var22 = var21.bind(var6)(var20);
                        var21 = var22.finishTransaction;
                        var20 = {};
                        var20.purchase = var23;
                        var20 = var21.bind(var22)(var20);
                        SaveGenerator(address = 1032);
                    case 1030:
                        return var20;
                    case 1032:
                        ResumeGenerator(result_out_reg = 20, return_bool_out_reg = 21);
                        if (var21) {
                            _fun57496_ip = 1169;
                            continue _fun57496
                        }
                    case 1041:
                        var22 = _closure1_slot1;
                        var23 = _closure1_slot3;
                        var21 = var23[var10];
                        var27 = var22.bind(var6)(var21);
                        var24 = var27.dispatch;
                        var21 = {};
                        var28 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                        var21.type = var28;
                        var28 = var19;
                        var21.productIdentifier = var28;
                        var21 = var24.bind(var27)(var21);
                        var21 = 15;
                        var21 = var23[var21];
                        var24 = var22.bind(var6)(var21);
                        var23 = var24.track;
                        var21 = _closure1_slot15;
                        var22 = var21.PAYMENT_FLOW_COMPLETED;
                        var21 = {};
                        var27 = var8;
                        var21.sku_id = var27;
                        var21.load_id = var26;
                        var21.location_stack = var25;
                        var25 = _closure1_slot18;
                        var25 = var25.APPLE_PARTNER;
                        var21.payment_gateway = var25;
                        var25 = var12;
                        var21.is_gift = var25;
                        var21 = var23.bind(var24)(var22, var21);
                    case 1164: // try_end0
                        var21 = true;
                        return var21;
                    case 1169:
                        return var20;
                    case 1172:
                        return var18;
                    case 1175:
                        return var17;
                    case 1178:
                        return var16;
                    case 1181:
                        return var11;
                    case 1184: // catch_target0
                        CatchBlockStart(arg_register = 18);
                        var3 = var18;
                        var16 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var10 = var11[var10];
                        var17 = var16.bind(var6)(var10);
                        var16 = var17.dispatch;
                        var10 = {};
                        var20 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                        var10.type = var20;
                        var10.productIdentifier = var19;
                        var10 = var16.bind(var17)(var10);
                        var17 = _closure1_slot0;
                        var10 = 42;
                        var10 = var11[var10];
                        var10 = var17.bind(var6)(var10);
                        var10 = var10.BillingError;
                        var16 = var10.prototype;
                        var16 = Object.create(var16, {
                            constructor: {
                                value: var10
                            }
                        });
                        var38 = var16;
                        var37 = var18;
                        var10 = new var38[var10](var37, var36);
                        var10 = var10 instanceof Object ? var10 : var16;
                        var16 = var10.code;
                        var10 = 43;
                        var11 = var11[var10];
                        var11 = var17.bind(var6)(var11);
                        var11 = var11.ErrorCodes;
                        var11 = var11.BILLING_CANNOT_CHARGE_ZERO_AMOUNT;
                        if (!(var16 === var11)) {
                            _fun57496_ip = 1544;
                            continue _fun57496
                        }
                    case 1314:
                        var11 = var14;
                        if (!(var15 == var11)) {
                            _fun57496_ip = 1349;
                            continue _fun57496
                        }
                    case 1321:
                        var15 = _closure1_slot0;
                        var16 = _closure1_slot3;
                        var11 = 44;
                        var11 = var16[var11];
                        var11 = var15.bind(var6)(var11);
                        var11 = var11.purchaseSKU;
                        _fun57496_ip = 1352;
                        continue _fun57496;
                    case 1349:
                        var11 = var14;
                    case 1352:
                        var9 = var11;
                    case 1355: // try_start_1
                        var11 = var9;
                        var9 = var8;
                        var8 = {};
                        var8.countryCode = var13;
                        var13 = 0;
                        var8.expectedAmount = var13;
                        var13 = _closure1_slot16;
                        var13 = var13.USD;
                        var8.expectedCurrency = var13;
                        var14 = _closure1_slot0;
                        var15 = _closure1_slot3;
                        var13 = 45;
                        var13 = var15[var13];
                        var14 = var14.bind(var6)(var13);
                        var13 = var14.v4;
                        var13 = var13.bind(var14)();
                        var8.loadId = var13;
                        var8.isGift = var12;
                        var8.giftInfoOptions = var7;
                        var7 = 'collectibles';
                        var7 = var11.bind(var6)(var7, var9, var8);
                        SaveGenerator(address = 1450);
                    case 1448:
                        return var7;
                    case 1450:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                        if (var8) {
                            _fun57496_ip = 1461;
                            continue _fun57496
                        }
                    case 1456: // try_end1
                        var8 = true;
                        return var8;
                    case 1461:
                        return var7;
                    case 1464: // catch_target1
                        CatchBlockStart(arg_register = 7);
                        var5 = var7;
                        var8 = var7.code;
                        var9 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var7 = var7[var10];
                        var7 = var9.bind(var6)(var7);
                        var7 = var7.ErrorCodes;
                        var7 = var7.BILLING_PURCHASE_REQUEST_INVALID;
                        if (!(var8 === var7)) {
                            _fun57496_ip = 1544;
                            continue _fun57496
                        }
                    case 1507:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var7 = 17;
                        var7 = var9[var7];
                        var9 = var8.bind(var6)(var7);
                        var8 = var9.captureBillingException;
                        var7 = var5;
                        var5 = {};
                        var5 = var8.bind(var9)(var7, var5);
                    case 1544:
                        var5 = _closure1_slot27;
                        var4 = var3;
                        var3 = 'collectibles';
                        var3 = var5.bind(var6)(var4, var3);
                        var3 = false;
                        return var3;
                    case 1566:
                        return var2;
                    case 1569:
                        return var1;
                    case 1572:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot41 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot41 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun57500: for (var _fun57500_ip = 0;;) switch (_fun57500_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57500_ip = 169;
                            continue _fun57500
                        }
                    case 10:
                        var1 = _closure1_slot28;
                        var4 = undefined;
                        var1 = var1.bind(var4)();
                        if (var1) {
                            _fun57500_ip = 31;
                            continue _fun57500
                        }
                    case 26:
                        var1 = false;
                        return var1;
                    case 31:
                        var3 = _closure1_slot13;
                        var1 = var3.getActiveGuildSubscriptions;
                        var5 = var1.bind(var3)();
                        var1 = null;
                        if (!(var1 == var5)) {
                            _fun57500_ip = 55;
                            continue _fun57500
                        }
                    case 51:
                        var5 = new Array(0);
                    case 55:
                        var3 = var5.filter;
                        var1 = function(arg0) { // Environment: var1
                            var0 = arg0;
                            var1 = var0.paymentGateway;
                            var0 = _closure1_slot18;
                            var0 = var0.APPLE_PARTNER;
                            var0 = var1 === var0;
                            return var0;
                        };
                        var1 = var3.bind(var5)(var1);
                        var3 = var1.length;
                        var1 = 0;
                        if (!(var1 !== var3)) {
                            _fun57500_ip = 164;
                            continue _fun57500
                        }
                    case 83: // try_start_0
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var1 = 16;
                        var1 = var5[var1];
                        var1 = var3.bind(var4)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.post;
                        var1 = {};
                        var2 = _closure1_slot17;
                        var2 = var2.BILLING_ACOM_SUBSCRIPTION_MIGRATION;
                        var1.url = var2;
                        var2 = true;
                        var1.rejectWithError = var2;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 145);
                    case 143:
                        return var1;
                    case 145:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun57500_ip = 154;
                            continue _fun57500
                        }
                    case 151: // try_end0
                        return var2;
                    case 154:
                        return var1;
                    case 157: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var1 = false;
                        return var1;
                    case 164:
                        var1 = false;
                        return var1;
                    case 169:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot42 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot42 = var0;
    var0 = ['items', 'country_code'];
    var _closure1_slot4 = var0;
    var0 = ['sku_id', 'country_code', 'is_gift', 'gift_info_options'];
    var _closure1_slot5 = var0;
    var6 = global;
    var13 = var6.Object;
    var12 = var13.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var5);
    var0 = 0;
    var5 = var8[var0];
    var0 = undefined;
    var5 = var11.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 1;
    var5 = var8[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 2;
    var5 = var8[var5];
    var5 = var9.bind(var0)(var5);
    var5 = 3;
    var5 = var8[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var8[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot9 = var5;
    var5 = 5;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var9 = var5.setPaymentSuccess;
    var _closure1_slot10 = var9;
    var5 = var5.showOldPaymentFlowSuccess;
    var _closure1_slot11 = var5;
    var5 = 6;
    var5 = var8[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot12 = var5;
    var5 = 7;
    var5 = var8[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot13 = var5;
    var5 = 8;
    var5 = var8[var5];
    var5 = var11.bind(var0)(var5);
    var _closure1_slot14 = var5;
    var5 = 9;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var9 = var5.AnalyticEvents;
    var _closure1_slot15 = var9;
    var9 = var5.CurrencyCodes;
    var _closure1_slot16 = var9;
    var9 = var5.Endpoints;
    var _closure1_slot17 = var9;
    var9 = var5.StoreKitErrors;
    var5 = 10;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.PaymentGateways;
    var _closure1_slot18 = var5;
    var5 = 11;
    var5 = var8[var5];
    var5 = var7.bind(var0)(var5);
    var5 = var5.jsx;
    var _closure1_slot19 = var5;
    var5 = 'localAppleReceiptHash';
    var _closure1_slot20 = var5;
    var5 = 'BILLING';
    var _closure1_slot21 = var5;
    var5 = 12;
    var5 = var8[var5];
    var12 = var11.bind(var0)(var5);
    var5 = var12.prototype;
    var17 = Object.create(var5, {
        constructor: {
            value: var12
        }
    });
    var16 = 'BillingActionCreators.tsx';
    var5 = new var17[var12](var16, var15);
    var5 = {};
    var5.applyAppleReceipt = var10;
    var10 = 18;
    var11 = var8[var10];
    var11 = var7.bind(var0)(var11);
    var11 = var11.fetchMostRecentSubscription;
    var5.fetchMostRecentSubscription = var11;
    var10 = var8[var10];
    var10 = var7.bind(var0)(var10);
    var10 = var10.fetchIpCountryCode;
    var5.fetchIpCountryCode = var10;
    var10 = function() {
        var1 = this;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot7;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun57504: for (var _fun57504_ip = 0;;) switch (_fun57504_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57504_ip = 168;
                            continue _fun57504
                        }
                    case 10: // try_start_0
                        var1 = global;
                        var4 = var1.Promise;
                        var3 = var4.all;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var1 = 19;
                        var1 = var8[var1];
                        var6 = undefined;
                        var2 = var7.bind(var6)(var1);
                        var1 = var2.fetchPremiumSubscriptionPlans;
                        var2 = var1.bind(var2)();
                        var1 = new Array(3);
                        var1[0] = var2;
                        var9 = _closure2_slot0;
                        var5 = var9.loadProducts;
                        var5 = var5.bind(var9)();
                        var1[1] = var5;
                        var5 = 18;
                        var5 = var8[var5];
                        var6 = var7.bind(var6)(var5);
                        var5 = var6.fetchSubscriptions;
                        var5 = var5.bind(var6)();
                        var1[2] = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 123);
                    case 121:
                        return var1;
                    case 123:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun57504_ip = 158;
                            continue _fun57504
                        }
                    case 129:
                        var3 = _closure2_slot0;
                        var2 = var3.restoreAndApplyPurchases;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address = 147);
                    case 145:
                        return var2;
                    case 147:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun57504_ip = 155;
                            continue _fun57504
                        }
                    case 153: // try_end0
                        _fun57504_ip = 163;
                        continue _fun57504;
                    case 155:
                        return var2;
                    case 158:
                        return var1;
                    case 161: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 163:
                        var1 = undefined;
                        return var1;
                    case 168:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var5.init = var10;
    var10 = function() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun57507: for (var _fun57507_ip = 0;;) switch (_fun57507_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57507_ip = 202;
                            continue _fun57507
                        }
                    case 10:
                        var3 = _closure1_slot8;
                        var2 = var3.isGenericIapConnected;
                        var2 = var2.bind(var3)();
                    case 29: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 20;
                        var2 = var4[var2];
                        var5 = undefined;
                        var3 = var3.bind(var5)(var2);
                        var2 = var3.initConnection;
                        var2 = var2.bind(var3)();
                        SaveGenerator(address = 65);
                    case 63:
                        return var2;
                    case 65:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun57507_ip = 121;
                            continue _fun57507
                        }
                    case 71:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 21;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'GENERIC_IAP_INIT_CONNECTION';
                        var3.type = var6;
                        var3.connected = var2;
                        var3 = var4.bind(var5)(var3);
                    case 118: // try_end0
                        return var2;
                    case 121:
                        return var2;
                    case 124: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var2 = 17;
                        var2 = var4[var2];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.captureBillingException;
                        var2 = var2.bind(var5)(var6);
                        var2 = _closure1_slot1;
                        var1 = 21;
                        var1 = var4[var1];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'GENERIC_IAP_INIT_CONNECTION_FAILED';
                        var1.type = var4;
                        var1 = var2.bind(var3)(var1);
                        var1 = false;
                        return var1;
                    case 202:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var5.connectGenericIap = var10;
    var10 = function() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun57510: for (var _fun57510_ip = 0;;) switch (_fun57510_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57510_ip = 647;
                            continue _fun57510
                        }
                    case 12:
                        var4 = undefined;
                        var2 = undefined;
                        var _closure4_slot0 = var4;
                        var3 = undefined;
                        var8 = undefined;
                        var10 = undefined;
                        var _closure4_slot1 = var4;
                        var9 = undefined;
                        var _closure4_slot2 = var4;
                    case 36: // try_start_0
                        var12 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var11 = 22;
                        var1 = var6[var11];
                        var1 = var12.bind(var4)(var1);
                        var1 = var1.ProductIds;
                        var13 = var1.GENERIC_SUBSCRIPTION;
                        var1 = new Array(2);
                        var1[0] = var13;
                        var11 = var6[var11];
                        var11 = var12.bind(var4)(var11);
                        var11 = var11.ProductIds;
                        var11 = var11.GENERIC_CONSUMABLE;
                        var1[1] = var11;
                        var2 = var1;
                        _closure4_slot0 = var1;
                        var11 = _closure1_slot1;
                        var12 = 23;
                        var6 = var6[var12];
                        var14 = var11.bind(var4)(var6);
                        var13 = var14.filter;
                        var11 = _closure1_slot14;
                        var6 = var11.getProducts;
                        var11 = var6.bind(var11)();
                        var6 = function(arg0) { // Environment: var7
                            var2 = _closure4_slot0;
                            var1 = var2.includes;
                            var0 = arg0;
                            var0 = var0.identifier;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var6 = var13.bind(var14)(var11, var6);
                        var3 = var6;
                        var6 = var6.length;
                        var1 = var1.length;
                        if (!(var6 !== var1)) {
                            _fun57510_ip = 270;
                            continue _fun57510
                        }
                    case 174:
                        var6 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var1 = 24;
                        var1 = var11[var1];
                        var6 = var6.bind(var4)(var1);
                        var1 = var6.loadProducts;
                        var1 = var1.bind(var6)();
                        SaveGenerator(address = 208);
                    case 206:
                        return var1;
                    case 208:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun57510_ip = 603;
                            continue _fun57510
                        }
                    case 217:
                        var11 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var6 = var6[var12];
                        var12 = var11.bind(var4)(var6);
                        var11 = var12.filter;
                        var6 = function(arg0) { // Environment: var7
                            var2 = _closure4_slot0;
                            var1 = var2.includes;
                            var0 = arg0;
                            var0 = var0.identifier;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var6 = var11.bind(var12)(var1, var6);
                        var3 = var6;
                        var6 = var6.length;
                        var2 = var2.length;
                        if (!(var6 === var2)) {
                            _fun57510_ip = 567;
                            continue _fun57510
                        }
                    case 270:
                        var6 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var2 = 24;
                        var2 = var11[var2];
                        var6 = var6.bind(var4)(var2);
                        var2 = var6.fetchStoreFront;
                        var2 = var2.bind(var6)();
                        SaveGenerator(address = 304);
                    case 302:
                        return var2;
                    case 304:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun57510_ip = 564;
                            continue _fun57510
                        }
                    case 313:
                        var8 = var2;
                        var6 = null;
                        if (!(var6 == var2)) {
                            _fun57510_ip = 509;
                            continue _fun57510
                        }
                    case 325:
                        var11 = global;
                        var6 = var11.Set;
                        var12 = var6.prototype;
                        var12 = Object.create(var12, {
                            constructor: {
                                value: var6
                            }
                        });
                        var18 = var12;
                        var6 = new var18[var6](var17);
                        var6 = var6 instanceof Object ? var6 : var12;
                        var10 = var6;
                        _closure4_slot1 = var6;
                        var11 = var11.Set;
                        var12 = var11.prototype;
                        var12 = Object.create(var12, {
                            constructor: {
                                value: var11
                            }
                        });
                        var18 = var12;
                        var11 = new var18[var11](var17);
                        var11 = var11 instanceof Object ? var11 : var12;
                        var9 = var11;
                        _closure4_slot2 = var11;
                        var12 = var3;
                        var11 = var12.forEach;
                        var7 = function(arg0) { // Environment: var7
                            _fun57513: for (var _fun57513_ip = 0;;) switch (_fun57513_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = var0.countryCode;
                                    var3 = null;
                                    var1 = var3 != var1;
                                    if (!var1) {
                                        _fun57513_ip = 28;
                                        continue _fun57513
                                    }
                                case 18:
                                    var2 = var0.currencyCode;
                                    var1 = var3 != var2;
                                case 28:
                                    if (!var1) {
                                        _fun57513_ip = 45;
                                        continue _fun57513
                                    }
                                case 31:
                                    var3 = var0.countryCode;
                                    var2 = '';
                                    var1 = var2 !== var3;
                                case 45:
                                    if (!var1) {
                                        _fun57513_ip = 91;
                                        continue _fun57513
                                    }
                                case 48:
                                    var4 = _closure4_slot2;
                                    var3 = var4.add;
                                    var2 = var0.countryCode;
                                    var2 = var3.bind(var4)(var2);
                                    var2 = _closure4_slot1;
                                    var1 = var2.add;
                                    var0 = var0.currencyCode;
                                    var0 = var1.bind(var2)(var0);
                                case 91:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var7 = var11.bind(var12)(var7);
                        var6 = var6.size;
                        var7 = 1;
                        if (!(var7 === var6)) {
                            _fun57510_ip = 435;
                            continue _fun57510
                        }
                    case 423:
                        var6 = var9;
                        var6 = var6.size;
                        if (!(var7 !== var6)) {
                            _fun57510_ip = 451;
                            continue _fun57510
                        }
                    case 435:
                        var6 = {
                            'country': 'US',
                            'currency': 'usd'
                        };
                        _fun57510_ip = 506;
                        continue _fun57510;
                    case 451:
                        var7 = {};
                        var16 = var10;
                        var11 = new Array(0);
                        var10 = 0;
                        var17 = var11;
                        var15 = 0;
                        var12 = arraySpread(var17, var16, var15);
                        var11 = var11[var10];
                        var7.currency = var11;
                        var16 = var9;
                        var9 = new Array(0);
                        var17 = var9;
                        var11 = arraySpread(var17, var16, var15);
                        var9 = var9[var10];
                        var7.country = var9;
                        var6 = var7;
                    case 506:
                        var8 = var6;
                    case 509:
                        var6 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var5 = 21;
                        var5 = var7[var5];
                        var7 = var6.bind(var4)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var9 = 'IAP_LOAD_GENERIC_PRODUCTS';
                        var5.type = var9;
                        var5.products = var3;
                        var5.storeFront = var8;
                        var5 = var6.bind(var7)(var5);
                    case 561: // try_end0
                        return var3;
                    case 564:
                        return var2;
                    case 567: // try_start_1
                        var2 = global;
                        var5 = var2.Error;
                        var2 = var5.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var5
                            }
                        });
                        var17 = "Unable to load generic product, check IAPUtils.loadProducts to make sure it's working correctly";
                        var18 = var3;
                        var2 = new var18[var5](var17, var16);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 603: // try_end1
                        return var1;
                    case 606: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 3);
                        var2 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var1 = 17;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.captureBillingException;
                        var1 = var1.bind(var2)(var3);
                        var1 = null;
                        return var1;
                    case 647:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var5.loadGenericProducts = var10;
    var10 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 21;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'GENERIC_IAP_END_CONNECTION';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var5.disconnectGenericIap = var10;
    var10 = function() {
        var2 = _closure1_slot7;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun57517: for (var _fun57517_ip = 0;;) switch (_fun57517_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57517_ip = 298;
                            continue _fun57517
                        }
                    case 10: // try_start_0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var6 = 21;
                        var4 = var1[var6];
                        var5 = undefined;
                        var8 = var2.bind(var5)(var4);
                        var7 = var8.dispatch;
                        var4 = {};
                        var9 = 'IAP_LOAD_PRODUCTS_START';
                        var4.type = var9;
                        var4 = var7.bind(var8)(var4);
                        var7 = 24;
                        var1 = var1[var7];
                        var2 = var2.bind(var5)(var1);
                        var1 = var2.fetchStoreFront;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 83);
                    case 81:
                        return var1;
                    case 83:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun57517_ip = 214;
                            continue _fun57517
                        }
                    case 92:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var8 = var2[var6];
                        var10 = var4.bind(var5)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var11 = 'GENERIC_IAP_SET_STORE_FRONT';
                        var8.type = var11;
                        var8.storeFront = var1;
                        var8 = var9.bind(var10)(var8);
                        var2 = var2[var7];
                        var4 = var4.bind(var5)(var2);
                        var2 = var4.loadProducts;
                        var2 = var2.bind(var4)();
                        SaveGenerator(address = 159);
                    case 157:
                        return var2;
                    case 159:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun57517_ip = 211;
                            continue _fun57517
                        }
                    case 165:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var3 = var3[var6];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'IAP_LOAD_PRODUCTS';
                        var3.type = var6;
                        var3.products = var2;
                        var3 = var4.bind(var5)(var3);
                    case 209: // try_end0
                        _fun57517_ip = 293;
                        continue _fun57517;
                    case 211:
                        return var2;
                    case 214:
                        return var1;
                    case 217: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var2 = 21;
                        var2 = var5[var2];
                        var4 = undefined;
                        var7 = var6.bind(var4)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var8 = 'IAP_LOAD_PRODUCTS_FAILED';
                        var2.type = var8;
                        var2 = var6.bind(var7)(var2);
                        var2 = _closure1_slot0;
                        var1 = 17;
                        var1 = var5[var1];
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.captureBillingException;
                        var1 = var1.bind(var2)(var3);
                    case 293:
                        var1 = undefined;
                        return var1;
                    case 298:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var5.loadProducts = var10;
    var10 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot7;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun57520: for (var _fun57520_ip = 0;;) switch (_fun57520_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun57520_ip = 1609;
                            continue _fun57520
                        }
                    case 12:
                        var1 = undefined;
                        var11 = undefined;
                        var15 = undefined;
                        var22 = undefined;
                        var17 = undefined;
                        var25 = undefined;
                        var31 = undefined;
                        var14 = undefined;
                        var7 = undefined;
                        var20 = undefined;
                        var13 = undefined;
                        var9 = undefined;
                        var12 = undefined;
                        var19 = undefined;
                        var29 = undefined;
                        var21 = undefined;
                        var23 = undefined;
                        var28 = undefined;
                        var26 = undefined;
                        var27 = undefined;
                        var _closure4_slot0 = var1;
                        var2 = _closure2_slot0;
                        var11 = var2.productId;
                        var15 = var2.isGift;
                        var22 = var2.giftInfoOptions;
                        var17 = var2.baseAnalyticsData;
                        var25 = var2.applicationId;
                        var31 = var2.offerId;
                        var14 = var2.onPurchaseComplete;
                        var7 = var2.onPurchaseError;
                        var20 = var2.orderId;
                        var3 = _closure1_slot14;
                        var2 = var3.isBusy;
                        var2 = var2.bind(var3)();
                        if (var2) {
                            _fun57520_ip = 1606;
                            continue _fun57520
                        }
                    case 141:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var2 = 25;
                        var2 = var4[var2];
                        var8 = var3.bind(var1)(var2);
                        var4 = var8.getCurrentConfig;
                        var3 = {};
                        var2 = '1ee357_1';
                        var3.location = var2;
                        var2 = {};
                        var10 = false;
                        var2.autoTrackExposure = var10;
                        var2 = var4.bind(var8)(var3, var2);
                        var2 = var2.paymentsBlocked;
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        if (var2) {
                            _fun57520_ip = 1590;
                            continue _fun57520
                        }
                    case 214:
                        var10 = 21;
                        var2 = var4[var10];
                        var18 = var3.bind(var1)(var2);
                        var8 = var18.dispatch;
                        var2 = {};
                        var24 = 'IAP_PURCHASE_PRODUCT_START';
                        var2.type = var24;
                        var24 = var11;
                        var2.productIdentifier = var24;
                        var2 = var8.bind(var18)(var2);
                        SaveGenerator(address = 260);
                    case 258:
                        return var2;
                    case 260:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                        if (var8) {
                            _fun57520_ip = 1587;
                            continue _fun57520
                        }
                    case 269: // try_start_0
                        var18 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var30 = 24;
                        var8 = var8[var30];
                        var18 = var18.bind(var1)(var8);
                        var8 = var18.canMakePayments;
                        var8 = var8.bind(var18)();
                        SaveGenerator(address = 303);
                    case 301:
                        return var8;
                    case 303:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 18);
                        if (var18) {
                            _fun57520_ip = 1499;
                            continue _fun57520
                        }
                    case 312:
                        var24 = _closure1_slot13;
                        var18 = var24.hasFetchedSubscriptions;
                        var18 = var18.bind(var24)();
                        if (var18) {
                            _fun57520_ip = 460;
                            continue _fun57520
                        }
                    case 332:
                        var24 = _closure1_slot0;
                        var32 = _closure1_slot3;
                        var18 = 18;
                        var18 = var32[var18];
                        var24 = var24.bind(var1)(var18);
                        var18 = var24.fetchSubscriptions;
                        var18 = var18.bind(var24)();
                        SaveGenerator(address = 366);
                    case 364:
                        return var18;
                    case 366:
                        ResumeGenerator(result_out_reg = 18, return_bool_out_reg = 24);
                        if (var24) {
                            _fun57520_ip = 457;
                            continue _fun57520
                        }
                    case 372:
                        var24 = global;
                        var33 = var24.Error;
                        var35 = _closure1_slot0;
                        var36 = _closure1_slot3;
                        var24 = 27;
                        var32 = var36[var24];
                        var32 = var35.bind(var1)(var32);
                        var34 = var32.intl;
                        var32 = var34.string;
                        var24 = var36[var24];
                        var24 = var35.bind(var1)(var24);
                        var24 = var24.t;
                        var24 = var24.PjfUXe;
                        var39 = var32.bind(var34)(var24);
                        var32 = var33.prototype;
                        var32 = Object.create(var32, {
                            constructor: {
                                value: var33
                            }
                        });
                        var40 = var32;
                        var24 = new var40[var33](var39, var38);
                        var24 = var24 instanceof Object ? var24 : var32;
                        throw var24;
                    case 457: // try_end0
                        return var18;
                    case 460: // try_start_1
                        var24 = _closure1_slot12;
                        var18 = var24.getCurrentUser;
                        var24 = var18.bind(var24)();
                        var9 = var24;
                        var18 = null;
                        if (!(var18 != var24)) {
                            _fun57520_ip = 1414;
                            continue _fun57520
                        }
                    case 485:
                        var32 = _closure1_slot0;
                        var24 = _closure1_slot3;
                        var24 = var24[var30];
                        var32 = var32.bind(var1)(var24);
                        var24 = var32.convertToUUID;
                        var9 = var9.id;
                        var12 = var24.bind(var32)(var9);
                        var19 = undefined;
                        var9 = var31;
                        if (!(var18 != var9)) {
                            _fun57520_ip = 637;
                            continue _fun57520
                        }
                    case 527:
                        var33 = var11;
                        var32 = var31;
                        var24 = var12;
                        var9 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot26;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var9 = var9.bind(var1)(var33, var32, var24);
                        SaveGenerator(address = 552);
                    case 550:
                        return var9;
                    case 552:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 24);
                        if (var24) {
                            _fun57520_ip = 1411;
                            continue _fun57520
                        }
                    case 561:
                        var29 = var9;
                        if (!(var18 != var9)) {
                            _fun57520_ip = 637;
                            continue _fun57520
                        }
                    case 568:
                        var24 = {};
                        var24.identifier = var31;
                        var31 = var29.key_id;
                        var24.keyIdentifier = var31;
                        var31 = var29.nonce;
                        var24.nonce = var31;
                        var31 = var29.signature;
                        var24.signature = var31;
                        var31 = global;
                        var31 = var31.Number;
                        var29 = var29.timestamp;
                        var29 = var31.bind(var1)(var29);
                        var24.timestamp = var29;
                        var19 = var24;
                    case 637:
                        var29 = _closure1_slot1;
                        var24 = _closure1_slot3;
                        var24 = var24[var30];
                        var30 = var29.bind(var1)(var24);
                        var29 = var30.purchaseProduct;
                        var24 = var11;
                        var12 = var29.bind(var30)(var24, var19, var12);
                        SaveGenerator(address = 674);
                    case 672:
                        return var12;
                    case 674:
                        ResumeGenerator(result_out_reg = 12, return_bool_out_reg = 19);
                        if (var19) {
                            _fun57520_ip = 1408;
                            continue _fun57520
                        }
                    case 683:
                        var21 = var12;
                        var19 = var12.jwsRepresentation;
                        var13 = var19;
                        if (!(var18 == var19)) {
                            _fun57520_ip = 710;
                            continue _fun57520
                        }
                    case 699:
                        var19 = var21;
                        var30 = var19.transactionReceipt;
                        _fun57520_ip = 713;
                        continue _fun57520;
                    case 710:
                        var30 = var13;
                    case 713:
                        var19 = _closure1_slot1;
                        var13 = _closure1_slot3;
                        var24 = 13;
                        var24 = var13[var24];
                        var29 = var19.bind(var1)(var24);
                        var24 = var29.v3;
                        var29 = var24.bind(var29)(var30);
                        var23 = var29;
                        var13 = var13[var10];
                        var24 = var19.bind(var1)(var13);
                        var19 = var24.dispatch;
                        var13 = {};
                        var30 = 'GIFT_PROMOTION_GIFT_OPTIONS_CACHE_ACTION';
                        var13.type = var30;
                        var13.key = var29;
                        var29 = {};
                        var38 = var22;
                        var39 = var29;
                        var30 = copyDataProperties(var39, var38);
                        var13.giftOptions = var29;
                        var13 = var19.bind(var24)(var13);
                        var13 = var14;
                        var19 = var18 == var13;
                        var13 = undefined;
                        if (var19) {
                            _fun57520_ip = 815;
                            continue _fun57520
                        }
                    case 811:
                        var13 = var14.bind(var1)();
                    case 815:
                        SaveGenerator(address = 819);
                    case 817:
                        return var13;
                    case 819:
                        ResumeGenerator(result_out_reg = 13, return_bool_out_reg = 14);
                        if (var14) {
                            _fun57520_ip = 1405;
                            continue _fun57520
                        }
                    case 828:
                        var24 = _closure1_slot14;
                        var19 = var24.getProduct;
                        var14 = var11;
                        var14 = var19.bind(var24)(var14);
                        var28 = var14;
                        var19 = var18 == var14;
                        var14 = undefined;
                        if (var19) {
                            _fun57520_ip = 867;
                            continue _fun57520
                        }
                    case 858:
                        var19 = var28;
                        var14 = var19.price;
                    case 867:
                        var26 = var14;
                        var14 = var28;
                        var14 = var18 == var14;
                        var24 = undefined;
                        if (var14) {
                            _fun57520_ip = 891;
                            continue _fun57520
                        }
                    case 882:
                        var14 = var28;
                        var24 = var14.currencyCode;
                    case 891:
                        var27 = var24;
                        var19 = _closure1_slot25;
                        var14 = {};
                        var29 = var21;
                        var29 = var29.transactionReceipt;
                        var14.encodedReceipt = var29;
                        var29 = 3;
                        var14.retries = var29;
                        var14.presentmentCurrency = var24;
                        var24 = var26;
                        var14.presentmentAmount = var24;
                        var24 = var28;
                        var29 = var18 == var24;
                        var24 = undefined;
                        if (var29) {
                            _fun57520_ip = 953;
                            continue _fun57520
                        }
                    case 947:
                        var24 = var28.countryCode;
                    case 953:
                        var14.appStoreRegion = var24;
                        var14.giftInfoOptions = var22;
                        var21 = var21.jwsRepresentation;
                        var14.jwsRepresentation = var21;
                        var21 = 'createSubscription';
                        var14.source = var21;
                        var14.orderId = var20;
                        var14 = var19.bind(var1)(var14);
                        SaveGenerator(address = 996);
                    case 994:
                        return var14;
                    case 996:
                        ResumeGenerator(result_out_reg = 14, return_bool_out_reg = 19);
                        if (var19) {
                            _fun57520_ip = 1402;
                            continue _fun57520
                        }
                    case 1005:
                        var19 = _closure1_slot10;
                        var19 = var19.bind(var1)();
                        var20 = _closure1_slot1;
                        var24 = _closure1_slot3;
                        var19 = var24[var10];
                        var22 = var20.bind(var1)(var19);
                        var21 = var22.dispatch;
                        var19 = {};
                        var28 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                        var19.type = var28;
                        var19.key = var23;
                        var19 = var21.bind(var22)(var19);
                        var19 = 15;
                        var19 = var24[var19];
                        var21 = var20.bind(var1)(var19);
                        var20 = var21.track;
                        var19 = _closure1_slot15;
                        var19 = var19.PAYMENT_FLOW_COMPLETED;
                        var23 = _closure1_slot0;
                        var22 = 28;
                        var22 = var24[var22];
                        var24 = var23.bind(var1)(var22);
                        var23 = var24.getPaymentFlowCompletedAnalyticsFields;
                        var22 = var17;
                        var17 = {};
                        var28 = var11;
                        var17.subscription_plan_gateway_plan_id = var28;
                        var17.price = var26;
                        var17.regular_price = var26;
                        var26 = var27;
                        var28 = var18 == var26;
                        var26 = undefined;
                        if (var28) {
                            _fun57520_ip = 1153;
                            continue _fun57520
                        }
                    case 1140:
                        var28 = var27;
                        var27 = var28.toLowerCase;
                        var26 = var27.bind(var28)();
                    case 1153:
                        var17.currency = var26;
                        var17.application_id = var25;
                        var17 = var23.bind(var24)(var22, var17);
                        var17 = var20.bind(var21)(var19, var17);
                        var19 = _closure1_slot1;
                        var17 = _closure1_slot3;
                        var17 = var17[var10];
                        var20 = var19.bind(var1)(var17);
                        var19 = var20.dispatch;
                        var17 = {};
                        var21 = 'IAP_PURCHASE_PRODUCT_SUCCESS';
                        var17.type = var21;
                        var21 = var11;
                        var17.productIdentifier = var21;
                        var17 = var19.bind(var20)(var17);
                        if (var15) {
                            _fun57520_ip = 1397;
                            continue _fun57520
                        }
                    case 1228:
                        var17 = _closure1_slot0;
                        var19 = _closure1_slot3;
                        var15 = 18;
                        var15 = var19[var15];
                        var17 = var17.bind(var1)(var15);
                        var15 = var17.fetchSubscriptions;
                        var15 = var15.bind(var17)();
                        SaveGenerator(address = 1262);
                    case 1260:
                        return var15;
                    case 1262:
                        ResumeGenerator(result_out_reg = 15, return_bool_out_reg = 17);
                        if (var17) {
                            _fun57520_ip = 1394;
                            continue _fun57520
                        }
                    case 1271:
                        var19 = _closure1_slot13;
                        var17 = var19.getPremiumSubscription;
                        var17 = var17.bind(var19)();
                        _closure4_slot0 = var17;
                        if (!(var18 != var17)) {
                            _fun57520_ip = 1309;
                            continue _fun57520
                        }
                    case 1293:
                        var17 = _closure1_slot11;
                        var16 = function() { // Environment: var16
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 29;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.openLazy;
                            var1 = {};
                            var4 = function() {
                                var2 = _closure1_slot0;
                                var0 = _closure1_slot3;
                                var1 = 31;
                                var1 = var0[var1];
                                var3 = undefined;
                                var2 = var2.bind(var3)(var1);
                                var1 = 30;
                                var1 = var0[var1];
                                var0 = var0.paths;
                                var2 = var2.bind(var3)(var1, var0);
                                var1 = var2.then;
                                var0 = function(arg0) { // Environment: var0
                                    var1 = arg0;
                                    var1 = var1.default;
                                    var _closure7_slot0 = var1;
                                    var0 = function(arg0) { // Environment: var0
                                        var4 = arg0;
                                        var _closure8_slot0 = var4;
                                        var3 = _closure1_slot19;
                                        var2 = _closure7_slot0;
                                        var1 = {};
                                        var7 = var1;
                                        var6 = var4;
                                        var4 = copyDataProperties(var7, var6);
                                        var5 = _closure4_slot0;
                                        var4 = 'subscription';
                                        var1[var4] = var5;
                                        var4 = function() {
                                            var1 = _closure8_slot0;
                                            var0 = var1.onClose;
                                            var0 = var0.bind(var1)();
                                            var3 = _closure1_slot1;
                                            var5 = _closure1_slot3;
                                            var0 = 32;
                                            var2 = var5[var0];
                                            var0 = undefined;
                                            var3 = var3.bind(var0)(var2);
                                            var2 = var3.popWithKey;
                                            var4 = _closure1_slot0;
                                            var1 = 33;
                                            var1 = var5[var1];
                                            var1 = var4.bind(var0)(var1);
                                            var1 = var1.PREMIUM_KEY;
                                            var1 = var2.bind(var3)(var1);
                                            return var0;
                                        };
                                        var0 = 'onClose';
                                        var1[var0] = var4;
                                        var0 = undefined;
                                        var0 = var3.bind(var0)(var2, var1);
                                        return var0;
                                    };
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                                return var0;
                            };
                            var1.importer = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var16 = var17.bind(var1)(var16);
                        _fun57520_ip = 1397;
                        continue _fun57520;
                    case 1309:
                        var16 = global;
                        var18 = var16.Error;
                        var20 = _closure1_slot0;
                        var21 = _closure1_slot3;
                        var16 = 27;
                        var17 = var21[var16];
                        var17 = var20.bind(var1)(var17);
                        var19 = var17.intl;
                        var17 = var19.string;
                        var16 = var21[var16];
                        var16 = var20.bind(var1)(var16);
                        var16 = var16.t;
                        var16 = var16.PjfUXe;
                        var39 = var17.bind(var19)(var16);
                        var17 = var18.prototype;
                        var17 = Object.create(var17, {
                            constructor: {
                                value: var18
                            }
                        });
                        var40 = var17;
                        var16 = new var40[var18](var39, var38);
                        var16 = var16 instanceof Object ? var16 : var17;
                        throw var16;
                    case 1394: // try_end1
                        return var15;
                    case 1397:
                        _fun57520_ip = 1606;
                        continue _fun57520;
                    case 1402:
                        return var14;
                    case 1405:
                        return var13;
                    case 1408:
                        return var12;
                    case 1411:
                        return var9;
                    case 1414: // try_start_2
                        var9 = global;
                        var13 = var9.Error;
                        var15 = _closure1_slot0;
                        var16 = _closure1_slot3;
                        var9 = 27;
                        var12 = var16[var9];
                        var12 = var15.bind(var1)(var12);
                        var14 = var12.intl;
                        var12 = var14.string;
                        var9 = var16[var9];
                        var9 = var15.bind(var1)(var9);
                        var9 = var9.t;
                        var9 = var9.PjfUXe;
                        var39 = var12.bind(var14)(var9);
                        var12 = var13.prototype;
                        var12 = Object.create(var12, {
                            constructor: {
                                value: var13
                            }
                        });
                        var40 = var12;
                        var9 = new var40[var13](var39, var38);
                        var9 = var9 instanceof Object ? var9 : var12;
                        throw var9;
                    case 1499: // try_end2
                        return var8;
                    case 1502: // catch_target0 // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 5);
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var8 = var8[var10];
                        var10 = var9.bind(var1)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var12 = 'IAP_PURCHASE_PRODUCT_FAILURE';
                        var8.type = var12;
                        var8.productIdentifier = var11;
                        var8 = var9.bind(var10)(var8);
                        var9 = var7;
                        var8 = null;
                        if (!(var8 != var9)) {
                            _fun57520_ip = 1568;
                            continue _fun57520
                        }
                    case 1557:
                        var8 = var7;
                        var7 = var5;
                        var7 = var8.bind(var1)(var7);
                    case 1568:
                        var7 = _closure1_slot27;
                        var6 = var5;
                        var5 = 'subscription';
                        var5 = var7.bind(var1)(var6, var5);
                        _fun57520_ip = 1606;
                        continue _fun57520;
                    case 1587:
                        return var2;
                    case 1590:
                        var2 = 26;
                        var2 = var4[var2];
                        var2 = var3.bind(var1)(var2);
                        var2 = var2.bind(var1)();
                    case 1606:
                        return var1;
                    case 1609:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var5.createSubscription = var10;
    var10 = function() {
        _fun57527: for (var _fun57527_ip = 0;;) switch (_fun57527_ip) {
            case 0:
                var2 = arguments[0];
                var1 = undefined;
                if (!(var2 === var1)) {
                    _fun57527_ip = 13;
                    continue _fun57527
                }
            case 11:
                var2 = false;
            case 13:
                var _closure2_slot0 = var2;
                var2 = this;
                var _closure2_slot1 = var2;
                var2 = _closure1_slot7;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun57529: for (var _fun57529_ip = 0;;) switch (_fun57529_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun57529_ip = 1121;
                                    continue _fun57529
                                }
                            case 12:
                                var4 = undefined;
                                var6 = undefined;
                                var16 = undefined;
                                var10 = undefined;
                                var _closure4_slot0 = var4;
                                var9 = undefined;
                                var _closure4_slot1 = var4;
                                var17 = undefined;
                                var18 = undefined;
                                var3 = _closure1_slot14;
                                var1 = var3.isBusy;
                                var1 = var1.bind(var3)();
                                if (var1) {
                                    _fun57529_ip = 1114;
                                    continue _fun57529
                                }
                            case 57:
                                var3 = _closure1_slot1;
                                var1 = _closure1_slot3;
                                var5 = 21;
                                var1 = var1[var5];
                                var7 = var3.bind(var4)(var1);
                                var3 = var7.dispatch;
                                var1 = {};
                                var11 = 'IAP_RESTORE_PURCHASES_START';
                                var1.type = var11;
                                var1 = var3.bind(var7)(var1);
                            case 99: // try_start_2 // try_start_5
                                var3 = _closure2_slot1;
                                var1 = var3.loadProducts;
                                var1 = var1.bind(var3)();
                                SaveGenerator(address = 120);
                            case 118:
                                return var1;
                            case 120:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun57529_ip = 994;
                                    continue _fun57529
                                }
                            case 129:
                                var7 = _closure1_slot1;
                                var11 = _closure1_slot3;
                                var3 = 24;
                                var3 = var11[var3];
                                var11 = var7.bind(var4)(var3);
                                var7 = var11.restorePurchases;
                                var3 = {};
                                var12 = _closure2_slot0;
                                var3.fullRestore = var12;
                                var3 = var7.bind(var11)(var3);
                                SaveGenerator(address = 175);
                            case 173:
                                return var3;
                            case 175:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                                if (var7) {
                                    _fun57529_ip = 952;
                                    continue _fun57529
                                }
                            case 184:
                                var6 = var3;
                                var7 = var3.length;
                                var12 = 0;
                                if (!(var12 !== var7)) {
                                    _fun57529_ip = 906;
                                    continue _fun57529
                                }
                            case 201:
                                var11 = _closure1_slot1;
                                var13 = _closure1_slot3;
                                var7 = 23;
                                var7 = var13[var7];
                                var7 = var11.bind(var4)(var7);
                                var11 = var7.bind(var4)(var6);
                                var7 = var11.uniqBy;
                                var6 = function(arg0) { // Environment: var8
                                    _fun57530: for (var _fun57530_ip = 0;;) switch (_fun57530_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var0 = var1.purchaseResponse;
                                            var0 = var0.jwsRepresentation;
                                            var2 = null;
                                            if (!(var2 == var0)) {
                                                _fun57530_ip = 33;
                                                continue _fun57530
                                            }
                                        case 21:
                                            var1 = var1.purchaseResponse;
                                            var0 = var1.originalTransactionIdentifier;
                                        case 33:
                                            return var0;
                                    }
                                };
                                var7 = var7.bind(var11)(var6);
                                var6 = var7.value;
                                var7 = var6.bind(var7)();
                                var6 = new Array(0);
                                var10 = var6;
                                _closure4_slot0 = var6;
                                var6 = new Array(0);
                                var9 = var6;
                                _closure4_slot1 = var6;
                                var17 = function*(arg0) { // Original name: _loop, environment: var8
                                    var0 = function*(arg0) { // Original name: ?anon_0__loop, environment: var0
                                        _fun57532: for (var _fun57532_ip = 0;;) switch (_fun57532_ip) {
                                            case 0:
                                                StartGenerator();
                                                var4 = arg0;
                                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                                if (var1) {
                                                    _fun57532_ip = 405;
                                                    continue _fun57532
                                                }
                                            case 15:
                                                var _closure6_slot0 = var4;
                                                var1 = undefined;
                                                var3 = undefined;
                                                var _closure6_slot1 = var1;
                                                var8 = undefined;
                                                var _closure6_slot2 = var1;
                                                var9 = undefined;
                                                var4 = var4.purchaseResponse;
                                                var3 = var4;
                                                _closure6_slot1 = var4;
                                                var10 = _closure1_slot14;
                                                var7 = var10.getProduct;
                                                var6 = var4.productIdentifier;
                                                var8 = var7.bind(var10)(var6);
                                                var10 = var4.jwsRepresentation;
                                                var4 = null;
                                                if (!(var4 == var10)) {
                                                    _fun57532_ip = 93;
                                                    continue _fun57532
                                                }
                                            case 84:
                                                var6 = var3;
                                                var10 = var6.transactionReceipt;
                                            case 93:
                                                var7 = _closure1_slot1;
                                                var11 = _closure1_slot3;
                                                var6 = 13;
                                                var6 = var11[var6];
                                                var7 = var7.bind(var1)(var6);
                                                var6 = var7.v3;
                                                var10 = var6.bind(var7)(var10);
                                                _closure6_slot2 = var10;
                                                var7 = _closure1_slot9;
                                                var6 = var7.getGiftOptionsForKey;
                                                var9 = var6.bind(var7)(var10);
                                            case 143: // try_start_0
                                                var6 = _closure1_slot25;
                                                var5 = {};
                                                var7 = var3;
                                                var10 = var7.jwsRepresentation;
                                                var5.jwsRepresentation = var10;
                                                var7 = var7.transactionReceipt;
                                                var5.encodedReceipt = var7;
                                                var7 = var8;
                                                var10 = var4 == var7;
                                                var7 = undefined;
                                                if (var10) {
                                                    _fun57532_ip = 195;
                                                    continue _fun57532
                                                }
                                            case 186:
                                                var10 = var8;
                                                var7 = var10.currencyCode;
                                            case 195:
                                                var5.presentmentCurrency = var7;
                                                var7 = var8;
                                                var10 = var4 == var7;
                                                var7 = undefined;
                                                if (var10) {
                                                    _fun57532_ip = 221;
                                                    continue _fun57532
                                                }
                                            case 212:
                                                var10 = var8;
                                                var7 = var10.price;
                                            case 221:
                                                var5.presentmentAmount = var7;
                                                var7 = var8;
                                                var10 = var4 == var7;
                                                var7 = undefined;
                                                if (var10) {
                                                    _fun57532_ip = 244;
                                                    continue _fun57532
                                                }
                                            case 238:
                                                var7 = var8.countryCode;
                                            case 244:
                                                var5.appStoreRegion = var7;
                                                var7 = {};
                                                var8 = var9;
                                                var10 = var4 == var8;
                                                var8 = undefined;
                                                if (var10) {
                                                    _fun57532_ip = 272;
                                                    continue _fun57532
                                                }
                                            case 263:
                                                var10 = var9;
                                                var8 = var10.gift_style;
                                            case 272:
                                                var7.gift_style = var8;
                                                var8 = var9;
                                                var10 = var4 == var8;
                                                var8 = undefined;
                                                if (var10) {
                                                    _fun57532_ip = 295;
                                                    continue _fun57532
                                                }
                                            case 289:
                                                var8 = var9.reward_sku_ids;
                                            case 295:
                                                var7.reward_sku_ids = var8;
                                                var5.giftInfoOptions = var7;
                                                var7 = 'restoreSubscription';
                                                var5.source = var7;
                                                var7 = _closure2_slot0;
                                                var5.skipDupCheck = var7;
                                                var6 = var6.bind(var1)(var5);
                                                var5 = var6.then;
                                                var2 = function(arg0) { // Environment: var2
                                                    _fun57533: for (var _fun57533_ip = 0;;) switch (_fun57533_ip) {
                                                        case 0:
                                                            var2 = arg0;
                                                            var1 = _closure1_slot0;
                                                            var4 = _closure1_slot3;
                                                            var0 = 20;
                                                            var0 = var4[var0];
                                                            var5 = undefined;
                                                            var6 = var1.bind(var5)(var0);
                                                            var4 = var6.finishTransaction;
                                                            var0 = {};
                                                            var7 = {};
                                                            var8 = _closure6_slot1;
                                                            var8 = var8.productIdentifier;
                                                            var7.productId = var8;
                                                            var8 = _closure6_slot1;
                                                            var8 = var8.transactionDate;
                                                            var7.transactionDate = var8;
                                                            var8 = _closure6_slot1;
                                                            var8 = var8.transactionReceipt;
                                                            var7.transactionReceipt = var8;
                                                            var8 = _closure6_slot1;
                                                            var9 = var8.transactionIdentifier;
                                                            var8 = var9.toString;
                                                            var8 = var8.bind(var9)();
                                                            var7.transactionId = var8;
                                                            var0.purchase = var7;
                                                            var0 = var4.bind(var6)(var0);
                                                            var0 = null;
                                                            if (!(var0 != var2)) {
                                                                _fun57533_ip = 176;
                                                                continue _fun57533
                                                            }
                                                        case 126:
                                                            var4 = _closure1_slot1;
                                                            var6 = _closure1_slot3;
                                                            var3 = 21;
                                                            var3 = var6[var3];
                                                            var5 = var4.bind(var5)(var3);
                                                            var4 = var5.dispatch;
                                                            var3 = {};
                                                            var6 = 'GIFT_PROMOTION_GIFT_OPTIONS_CLEAR_CACHE_ACTION';
                                                            var3.type = var6;
                                                            var6 = _closure6_slot2;
                                                            var3.key = var6;
                                                            var3 = var4.bind(var5)(var3);
                                                        case 176:
                                                            var2 = var0 != var2;
                                                            var0 = null;
                                                            if (!var2) {
                                                                _fun57533_ip = 189;
                                                                continue _fun57533
                                                            }
                                                        case 185:
                                                            var0 = _closure6_slot0;
                                                        case 189:
                                                            return var0;
                                                    }
                                                };
                                                var2 = var5.bind(var6)(var2);
                                                SaveGenerator(address = 351);
                                            case 349:
                                                return var2;
                                            case 351:
                                                ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 5);
                                                if (var5) {
                                                    _fun57532_ip = 380;
                                                    continue _fun57532
                                                }
                                            case 357:
                                                if (!(var4 != var2)) {
                                                    _fun57532_ip = 378;
                                                    continue _fun57532
                                                }
                                            case 361:
                                                var5 = _closure4_slot0;
                                                var4 = var5.push;
                                                var3 = var4.bind(var5)(var3);
                                            case 378: // try_end0
                                                _fun57532_ip = 402;
                                                continue _fun57532;
                                            case 380:
                                                return var2;
                                            case 383: // catch_target0
                                                CatchBlockStart(arg_register = 4);
                                                var3 = _closure4_slot1;
                                                var2 = var3.push;
                                                var2 = var2.bind(var3)(var4);
                                            case 402:
                                                return var1;
                                            case 405:
                                                return var0;
                                        }
                                    };
                                    return var0;
                                };
                                var6 = _closure1_slot23;
                                var6 = var6.bind(var4)(var7);
                                var18 = var6;
                                var6 = var6.bind(var4)();
                                var16 = var6;
                                var6 = var6.done;
                                var7 = global;
                                var15 = 'iterator is not an object';
                                var14 = 'iterator.throw() did not return an object';
                                var13 = 'throw';
                                var11 = 'iterator.next() did not return an object';
                                if (var6) {
                                    _fun57529_ip = 706;
                                    continue _fun57529
                                }
                            case 332:
                                var6 = var16;
                                var19 = var6.value;
                                var6 = var17;
                                var19 = var6.bind(var4)(var19);
                                var6 = var7.Symbol;
                                var6 = var6.iterator;
                                var6 = var19[var6];
                                var20 = var6.bind(var19)();
                                var28 = var20;
                                var27 = var15;
                                var6 = ensureObject(var28, var27);
                                var25 = var20.next;
                                var24 = undefined;
                            case 385:
                                var19 = var24;
                                var19 = var25.bind(var20)(var19);
                                var28 = var19;
                                var27 = var11;
                                var21 = ensureObject(var28, var27);
                                var6 = var19;
                                var21 = var19.done;
                                if (var21) {
                                    _fun57529_ip = 680;
                                    continue _fun57529
                                }
                            case 417: // try_start_0
                                var21 = generatorSetDelegated();
                                SaveGenerator(address = 478);
                            case 423:
                                return var19;
                            case 425: // try_end0 // catch_target0 // catch_target1
                                CatchBlockStart(arg_register = 21);
                                var28 = var20;
                                var27 = var13;
                                var19 = getMethod(var28, var27);
                                if (!(var19 !== var4)) {
                                    _fun57529_ip = 639;
                                    continue _fun57529
                                }
                            case 444:
                                var19 = var19.bind(var20)(var21);
                                var28 = var19;
                                var27 = var14;
                                var21 = ensureObject(var28, var27);
                                var21 = var19.done;
                                if (var21) {
                                    _fun57529_ip = 634;
                                    continue _fun57529
                                }
                            case 470:
                                var21 = generatorSetDelegated();
                                SaveGenerator(address = 478);
                            case 476:
                                return var19;
                            case 478: // try_start_1
                                ResumeGenerator(result_out_reg = 21, return_bool_out_reg = 23);
                                var24 = var21;
                                var22 = var23;
                                if (!var22) {
                                    _fun57529_ip = 385;
                                    continue _fun57529
                                }
                            case 490:
                                var24 = var21;
                            case 493: // try_end1
                                var27 = 'return';
                                var28 = var20;
                                var26 = getMethod(var28, var27);
                                if (!(var26 !== var4)) {
                                    _fun57529_ip = 592;
                                    continue _fun57529
                                }
                            case 508:
                                var22 = var24;
                                var22 = var26.bind(var20)(var22);
                                var27 = 'iterator.return() did not return an object';
                                var28 = var22;
                                var26 = ensureObject(var28, var27);
                                var26 = var22.done;
                                if (var26) {
                                    _fun57529_ip = 545;
                                    continue _fun57529
                                }
                            case 537:
                                var26 = generatorSetDelegated();
                                SaveGenerator(address = 478);
                            case 543:
                                return var22;
                            case 545:
                                var22 = var22.value;
                            case 550: // try_end2 // try_end5
                                var24 = _closure1_slot1;
                                var23 = _closure1_slot3;
                                var23 = var23[var5];
                                var25 = var24.bind(var4)(var23);
                                var24 = var25.dispatch;
                                var23 = {};
                                var26 = 'IAP_RESTORE_PURCHASES_END';
                                var23.type = var26;
                                var23 = var24.bind(var25)(var23);
                                return var22;
                            case 592:
                                var23 = _closure1_slot1;
                                var22 = _closure1_slot3;
                                var22 = var22[var5];
                                var24 = var23.bind(var4)(var22);
                                var23 = var24.dispatch;
                                var22 = {};
                                var25 = 'IAP_RESTORE_PURCHASES_END';
                                var22.type = var25;
                                var22 = var23.bind(var24)(var22);
                                return var21;
                            case 634: // try_start_3 // try_start_6
                                var6 = var19;
                                _fun57529_ip = 680;
                                continue _fun57529;
                            case 639:
                                var27 = 'return';
                                var28 = var20;
                                var19 = getMethod(var28, var27);
                                if (!(var19 !== var4)) {
                                    _fun57529_ip = 668;
                                    continue _fun57529
                                }
                            case 654:
                                var28 = var19.bind(var20)();
                                var27 = 'iterator.return() did not return an object';
                                var19 = ensureObject(var28, var27);
                            case 668:
                                var28 = 'yield* delegate must have a .throw() method';
                                var19 = throwTypeError(var28);
                                throw var4;
                            case 680:
                                var6 = var6.value;
                                var6 = var18;
                                var6 = var6.bind(var4)();
                                var16 = var6;
                                var6 = var6.done;
                                if (!var6) {
                                    _fun57529_ip = 332;
                                    continue _fun57529
                                }
                            case 706:
                                var6 = var10;
                                var6 = var6.length;
                                if (!(var6 > var12)) {
                                    _fun57529_ip = 758;
                                    continue _fun57529
                                }
                            case 718:
                                var11 = _closure1_slot0;
                                var13 = _closure1_slot3;
                                var6 = 18;
                                var6 = var13[var6];
                                var11 = var11.bind(var4)(var6);
                                var6 = var11.fetchSubscriptions;
                                var6 = var6.bind(var11)();
                                SaveGenerator(address = 752);
                            case 750:
                                return var6;
                            case 752:
                                ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 11);
                                if (var11) {
                                    _fun57529_ip = 864;
                                    continue _fun57529
                                }
                            case 758:
                                var11 = var9;
                                var11 = var11.length;
                                if (!(!(var11 > var12))) {
                                    _fun57529_ip = 812;
                                    continue _fun57529
                                }
                            case 770: // try_end3 // try_end6
                                var12 = _closure1_slot1;
                                var11 = _closure1_slot3;
                                var11 = var11[var5];
                                var13 = var12.bind(var4)(var11);
                                var12 = var13.dispatch;
                                var11 = {};
                                var14 = 'IAP_RESTORE_PURCHASES_END';
                                var11.type = var14;
                                var11 = var12.bind(var13)(var11);
                                return var10;
                            case 812: // try_start_4 // try_start_7
                                var10 = var9;
                                var9 = var10.forEach;
                                var8 = function(arg0) { // Environment: var8
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot3;
                                    var0 = 17;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.captureBillingException;
                                    var1 = arg0;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var8 = var9.bind(var10)(var8);
                                var9 = var7.Error;
                                var7 = var9.prototype;
                                var8 = Object.create(var7, {
                                    constructor: {
                                        value: var9
                                    }
                                });
                                var28 = 'There were some errors while trying to restore';
                                var29 = var8;
                                var7 = new var29[var9](var28, var27);
                                var7 = var7 instanceof Object ? var7 : var8;
                                throw var7;
                            case 864: // try_end4 // try_end7
                                var8 = _closure1_slot1;
                                var7 = _closure1_slot3;
                                var7 = var7[var5];
                                var9 = var8.bind(var4)(var7);
                                var8 = var9.dispatch;
                                var7 = {};
                                var10 = 'IAP_RESTORE_PURCHASES_END';
                                var7.type = var10;
                                var7 = var8.bind(var9)(var7);
                                return var6;
                            case 906:
                                var7 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var6 = var6[var5];
                                var8 = var7.bind(var4)(var6);
                                var7 = var8.dispatch;
                                var6 = {};
                                var9 = 'IAP_RESTORE_PURCHASES_END';
                                var6.type = var9;
                                var6 = var7.bind(var8)(var6);
                                var6 = new Array(0);
                                return var6;
                            case 952:
                                var7 = _closure1_slot1;
                                var6 = _closure1_slot3;
                                var6 = var6[var5];
                                var8 = var7.bind(var4)(var6);
                                var7 = var8.dispatch;
                                var6 = {};
                                var9 = 'IAP_RESTORE_PURCHASES_END';
                                var6.type = var9;
                                var6 = var7.bind(var8)(var6);
                                return var3;
                            case 994:
                                var6 = _closure1_slot1;
                                var3 = _closure1_slot3;
                                var3 = var3[var5];
                                var7 = var6.bind(var4)(var3);
                                var6 = var7.dispatch;
                                var3 = {};
                                var8 = 'IAP_RESTORE_PURCHASES_END';
                                var3.type = var8;
                                var3 = var6.bind(var7)(var3);
                                return var1;
                            case 1036: // try_start_8 // catch_target2 // catch_target3 // catch_target4
                                CatchBlockStart(arg_register = 1);
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var3 = 17;
                                var3 = var7[var3];
                                var6 = var6.bind(var4)(var3);
                                var3 = var6.captureBillingException;
                                var3 = var3.bind(var6)(var1);
                                throw var1;
                            case 1071: // try_end8 // catch_target5 // catch_target6 // catch_target7 // catch_target8
                                CatchBlockStart(arg_register = 1);
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var2 = var2[var5];
                                var4 = var3.bind(var4)(var2);
                                var3 = var4.dispatch;
                                var2 = {};
                                var5 = 'IAP_RESTORE_PURCHASES_END';
                                var2.type = var5;
                                var2 = var3.bind(var4)(var2);
                                throw var1;
                            case 1114:
                                var1 = new Array(0);
                                return var1;
                            case 1121:
                                return var0;
                        }
                    };
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var5.restoreAndApplyPurchases = var10;
    var10 = var6.Set;
    var6 = 20;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var6 = var6.ErrorCode;
    var11 = var6.E_USER_CANCELLED;
    var6 = new Array(2);
    var6[0] = var11;
    var9 = var9.PAYMENT_CANCELED;
    var6[1] = var9;
    var9 = var10.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var10
        }
    });
    var17 = var9;
    var16 = var6;
    var6 = new var17[var10](var16, var15);
    var6 = var6 instanceof Object ? var6 : var9;
    var _closure1_slot22 = var6;
    var6 = 46;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'actions/native/BillingActionCreators.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.getIAPJWTRequestData = var4;
    var2.updateAppleSubscription = var3;
    var3 = function arg0, arg1, arg2() {
        var0 = undefined;
        var3 = _closure1_slot36;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.cancelGenericSubscription = var3;
    var3 = function arg0, arg1() {
        var0 = undefined;
        var3 = _closure1_slot38;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.createGenericSubscription = var3;
    var3 = function arg0, arg1() {
        var0 = undefined;
        var3 = _closure1_slot39;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.resubscribeGenericSubscription = var3;
    var3 = function arg0, arg1, arg2() {
        var0 = undefined;
        var3 = _closure1_slot41;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.mobilePurchaseSKU = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot42;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.migrateToACOM = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 5, 31, 4571, 7010, 7011, 1613, 3076, 4575, 660, 483, 33, 3, 1215, 587, 795, 507, 3084, 3402, 5588, 7103, 806, 4572, 22, 7122, 6827, 6831, 1234, 7064, 3895, 7070, 1307, 4525, 7006, 7125, 4489, 481, 7179, 7180, 1385, 7181, 7065, 3309, 3312, 7182, 491, 2]);