// errors/BillingError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = function() {
        _fun28976: for (var _fun28976_ip = 0;;) switch (_fun28976_ip) {
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
                _fun28976_ip = 74;
                continue _fun28976;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var4 = global;
    var8 = var4.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var8 = 0;
    var3 = var7[var8];
    var0 = undefined;
    var3 = var11.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = {};
    var3.UNKNOWN = var8;
    var5 = 'UNKNOWN';
    var3[var8] = var5;
    var8 = 100001;
    var3.UNKNOWN_BILLING_PROFILE = var8;
    var5 = 'UNKNOWN_BILLING_PROFILE';
    var3[var8] = var5;
    var8 = 100002;
    var3.UNKNOWN_PAYMENT_SOURCE = var8;
    var5 = 'UNKNOWN_PAYMENT_SOURCE';
    var3[var8] = var5;
    var8 = 100003;
    var3.UNKNOWN_SUBSCRIPTION = var8;
    var5 = 'UNKNOWN_SUBSCRIPTION';
    var3[var8] = var5;
    var8 = 100004;
    var3.ALREADY_SUBSCRIBED = var8;
    var5 = 'ALREADY_SUBSCRIBED';
    var3[var8] = var5;
    var8 = 100005;
    var3.INVALID_PLAN = var8;
    var5 = 'INVALID_PLAN';
    var3[var8] = var5;
    var8 = 100006;
    var3.PAYMENT_SOURCE_REQUIRED = var8;
    var5 = 'PAYMENT_SOURCE_REQUIRED';
    var3[var8] = var5;
    var8 = 100007;
    var3.ALREADY_CANCELED = var8;
    var5 = 'ALREADY_CANCELED';
    var3[var8] = var5;
    var8 = 100008;
    var3.INVALID_PAYMENT = var8;
    var5 = 'INVALID_PAYMENT';
    var3[var8] = var5;
    var8 = 100009;
    var3.ALREADY_REFUNDED = var8;
    var5 = 'ALREADY_REFUNDED';
    var3[var8] = var5;
    var8 = 100010;
    var3.INVALID_BILLING_ADDRESS = var8;
    var5 = 'INVALID_BILLING_ADDRESS';
    var3[var8] = var5;
    var8 = 100011;
    var3.ALREADY_PURCHASED = var8;
    var5 = 'ALREADY_PURCHASED';
    var3[var8] = var5;
    var8 = 100012;
    var3.DUPLICATE_PURCHASE_ATTEMPT = var8;
    var5 = 'DUPLICATE_PURCHASE_ATTEMPT';
    var3[var8] = var5;
    var8 = 100017;
    var3.BILLING_PURCHASE_REQUEST_INVALID = var8;
    var5 = 'BILLING_PURCHASE_REQUEST_INVALID';
    var3[var8] = var5;
    var8 = 100027;
    var3.NEGATIVE_INVOICE_AMOUNT = var8;
    var5 = 'NEGATIVE_INVOICE_AMOUNT';
    var3[var8] = var5;
    var8 = 100029;
    var3.AUTHENTICATION_REQUIRED = var8;
    var5 = 'AUTHENTICATION_REQUIRED';
    var3[var8] = var5;
    var8 = 100042;
    var3.SUBSCRIPTION_RENEWAL_IN_PROGRESS = var8;
    var5 = 'SUBSCRIPTION_RENEWAL_IN_PROGRESS';
    var3[var8] = var5;
    var8 = 100047;
    var3.CONFIRMATION_REQUIRED = var8;
    var5 = 'CONFIRMATION_REQUIRED';
    var3[var8] = var5;
    var8 = 100054;
    var3.CARD_DECLINED = var8;
    var5 = 'CARD_DECLINED';
    var3[var8] = var5;
    var8 = 50097;
    var3.INVALID_GIFT_REDEMPTION_FRAUD_REJECTED = var8;
    var5 = 'INVALID_GIFT_REDEMPTION_FRAUD_REJECTED';
    var3[var8] = var5;
    var8 = 100056;
    var3.PURCHASE_TOKEN_AUTHORIZATION_REQUIRED = var8;
    var5 = 'PURCHASE_TOKEN_AUTHORIZATION_REQUIRED';
    var3[var8] = var5;
    var8 = 50048;
    var3.INVALID_PAYMENT_SOURCE = var8;
    var5 = 'INVALID_PAYMENT_SOURCE';
    var3[var8] = var5;
    var8 = 100051;
    var3.INVALID_CURRENCY_FOR_PAYMENT_SOURCE = var8;
    var5 = 'INVALID_CURRENCY_FOR_PAYMENT_SOURCE';
    var3[var8] = var5;
    var8 = 100070;
    var3.BILLING_APPLE_SERVER_API_ERROR = var8;
    var5 = 'BILLING_APPLE_SERVER_API_ERROR';
    var3[var8] = var5;
    var8 = 100078;
    var3.BILLING_TRIAL_REDEMPTION_DISABLED = var8;
    var5 = 'BILLING_TRIAL_REDEMPTION_DISABLED';
    var3[var8] = var5;
    var8 = 100079;
    var3.BILLING_PAUSE_DISABLED = var8;
    var5 = 'BILLING_PAUSE_DISABLED';
    var3[var8] = var5;
    var8 = 100080;
    var3.BILLING_PAUSE_PENDING_ALREADY_SET = var8;
    var5 = 'BILLING_PAUSE_PENDING_ALREADY_SET';
    var3[var8] = var5;
    var8 = 100081;
    var3.BILLING_PAUSE_NOT_ELIGIBLE = var8;
    var5 = 'BILLING_PAUSE_NOT_ELIGIBLE';
    var3[var8] = var5;
    var8 = 100082;
    var3.BILLING_PAUSE_INVALID_INTERVAL = var8;
    var5 = 'BILLING_PAUSE_INVALID_INTERVAL';
    var3[var8] = var5;
    var8 = 100083;
    var3.BILLING_ALREADY_PAUSED = var8;
    var5 = 'BILLING_ALREADY_PAUSED';
    var3[var8] = var5;
    var8 = 100084;
    var3.BILLING_CANNOT_CHARGE_ZERO_AMOUNT = var8;
    var5 = 'BILLING_CANNOT_CHARGE_ZERO_AMOUNT';
    var3[var8] = var5;
    var8 = 100094;
    var3.BILLING_PAUSE_INVALID_UPDATE = var8;
    var5 = 'BILLING_PAUSE_INVALID_UPDATE';
    var3[var8] = var5;
    var8 = 100096;
    var3.BILLING_BUNDLE_ALREADY_PURCHASED = var8;
    var5 = 'BILLING_BUNDLE_ALREADY_PURCHASED';
    var3[var8] = var5;
    var8 = 100097;
    var3.BILLING_BUNDLE_PARTIALLY_OWNED = var8;
    var5 = 'BILLING_BUNDLE_PARTIALLY_OWNED';
    var3[var8] = var5;
    var8 = 100107;
    var3.BILLING_INSUFFICIENT_FUNDS = var8;
    var5 = 'BILLING_INSUFFICIENT_FUNDS';
    var3[var8] = var5;
    var8 = 100111;
    var3.BILLING_OUTDATED_REQUEST_PARAMETERS = var8;
    var5 = 'BILLING_OUTDATED_REQUEST_PARAMETERS';
    var3[var8] = var5;
    var8 = 590001;
    var3.VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE = var8;
    var5 = 'VIRTUAL_CURRENCY_INSUFFICIENT_BALANCE';
    var3[var8] = var5;
    var _closure1_slot7 = var3;
    var10 = {};
    var5 = 'cardNumber';
    var10.CARD_NUMBER = var5;
    var5 = 'cvc';
    var10.CARD_CVC = var5;
    var5 = 'expirationDate';
    var10.CARD_EXPIRATION_DATE = var5;
    var5 = 'name';
    var10.CARD_NAME = var5;
    var10.ADDRESS_NAME = var5;
    var5 = 'line1';
    var10.ADDRESS_LINE_1 = var5;
    var5 = 'line2';
    var10.ADDRESS_LINE_2 = var5;
    var5 = 'city';
    var10.ADDRESS_CITY = var5;
    var5 = 'state';
    var10.ADDRESS_STATE = var5;
    var5 = 'postalCode';
    var10.ADDRESS_POSTAL_CODE = var5;
    var5 = 'country';
    var10.ADDRESS_COUNTRY = var5;
    var12 = {};
    var5 = 'address_line1';
    var12.ADDRESS_LINE_1 = var5;
    var5 = 'address_line2';
    var12.ADDRESS_LINE_2 = var5;
    var5 = 'address_city';
    var12.ADDRESS_CITY = var5;
    var5 = 'address_state';
    var12.ADDRESS_STATE = var5;
    var5 = 'address_zip';
    var12.ADDRESS_ZIP = var5;
    var5 = 'address_country';
    var12.ADDRESS_COUNTRY = var5;
    var5 = 'number';
    var12.CARD_NUMBER = var5;
    var5 = 'exp';
    var12.CARD_EXPIRATION_DATE = var5;
    var5 = 'exp_month';
    var12.CARD_EXPIRATION_MONTH = var5;
    var5 = 'exp_year';
    var12.CARD_EXPIRATION_YEAR = var5;
    var9 = var4.Object;
    var8 = var9.freeze;
    var5 = {};
    var14 = var12.ADDRESS_LINE_1;
    var13 = var10.ADDRESS_LINE_1;
    var5[var14] = var13;
    var14 = var12.ADDRESS_LINE_2;
    var13 = var10.ADDRESS_LINE_2;
    var5[var14] = var13;
    var14 = var12.ADDRESS_CITY;
    var13 = var10.ADDRESS_CITY;
    var5[var14] = var13;
    var14 = var12.ADDRESS_STATE;
    var13 = var10.ADDRESS_STATE;
    var5[var14] = var13;
    var14 = var12.ADDRESS_ZIP;
    var13 = var10.ADDRESS_POSTAL_CODE;
    var5[var14] = var13;
    var14 = var12.ADDRESS_COUNTRY;
    var13 = var10.ADDRESS_COUNTRY;
    var5[var14] = var13;
    var14 = var12.CARD_NUMBER;
    var13 = var10.CARD_NUMBER;
    var5[var14] = var13;
    var14 = var12.CARD_EXPIRATION_DATE;
    var13 = var10.CARD_EXPIRATION_DATE;
    var5[var14] = var13;
    var14 = var12.CARD_EXPIRATION_MONTH;
    var13 = var10.CARD_EXPIRATION_DATE;
    var5[var14] = var13;
    var13 = var12.CARD_EXPIRATION_YEAR;
    var12 = var10.CARD_EXPIRATION_DATE;
    var5[var13] = var12;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot8 = var5;
    var9 = var4.Object;
    var8 = var9.freeze;
    var5 = {};
    var12 = var10.ADDRESS_LINE_1;
    var5.line_1 = var12;
    var12 = var10.ADDRESS_LINE_2;
    var5.line_2 = var12;
    var12 = var10.ADDRESS_POSTAL_CODE;
    var5.postal_code = var12;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot9 = var5;
    var9 = {};
    var5 = 'card';
    var9.CARD = var5;
    var5 = 'address';
    var9.ADDRESS = var5;
    var12 = var4.Set;
    var8 = var10.CARD_NUMBER;
    var5 = new Array(4);
    var5[0] = var8;
    var8 = var10.CARD_CVC;
    var5[1] = var8;
    var8 = var10.CARD_EXPIRATION_DATE;
    var5[2] = var8;
    var8 = var10.CARD_NAME;
    var5[3] = var8;
    var8 = var12.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var12
        }
    });
    var18 = var8;
    var17 = var5;
    var5 = new var18[var12](var17, var16);
    var8 = var5 instanceof Object ? var5 : var8;
    var _closure1_slot10 = var8;
    var12 = var4.Set;
    var5 = var10.ADDRESS_NAME;
    var4 = new Array(7);
    var4[0] = var5;
    var5 = var10.ADDRESS_LINE_1;
    var4[1] = var5;
    var5 = var10.ADDRESS_LINE_2;
    var4[2] = var5;
    var5 = var10.ADDRESS_CITY;
    var4[3] = var5;
    var5 = var10.ADDRESS_STATE;
    var4[4] = var5;
    var5 = var10.ADDRESS_POSTAL_CODE;
    var4[5] = var5;
    var5 = var10.ADDRESS_COUNTRY;
    var4[6] = var5;
    var5 = var12.prototype;
    var5 = Object.create(var5, {
        constructor: {
            value: var12
        }
    });
    var18 = var5;
    var17 = var4;
    var4 = new var18[var12](var17, var16);
    var5 = var4 instanceof Object ? var4 : var5;
    var _closure1_slot11 = var5;
    var4 = 7;
    var4 = var7[var4];
    var11 = var11.bind(var0)(var4);
    var4 = function(arg0) { // Environment: var1
        var3 = function arg0, arg1() {
            _fun28980: for (var _fun28980_ip = 0;;) switch (_fun28980_ip) {
                case 0:
                    var1 = arg0;
                    var3 = this;
                    var0 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var12 = undefined;
                    var0 = var0.bind(var12)(var3, var2);
                    var14 = new Array(2);
                    var14[0] = var1;
                    var0 = arg1;
                    var14[1] = var0;
                    var0 = _closure1_slot5;
                    var13 = var0.bind(var12)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var12)();
                    if (var0) {
                        _fun28980_ip = 80;
                        continue _fun28980
                    }
                case 67:
                    var0 = var13.apply;
                    var0 = var0.bind(var13)(var3, var14);
                    _fun28980_ip = 114;
                    continue _fun28980;
                case 80:
                    var9 = global;
                    var11 = var9.Reflect;
                    var10 = var11.construct;
                    var9 = _closure1_slot5;
                    var9 = var9.bind(var12)(var3);
                    var9 = var9.constructor;
                    var0 = var10.bind(var11)(var13, var14, var9);
                case 114:
                    var0 = var2.bind(var12)(var3, var0);
                    var3 = null;
                    var0.paymentId = var3;
                    var9 = var0.code;
                    var2 = _closure1_slot7;
                    var2 = var2.NEGATIVE_INVOICE_AMOUNT;
                    if (!(var9 !== var2)) {
                        _fun28980_ip = 1238;
                        continue _fun28980
                    }
                case 150:
                    var9 = var0.code;
                    var2 = _closure1_slot7;
                    var2 = var2.INVALID_PAYMENT_SOURCE;
                    if (!(var9 !== var2)) {
                        _fun28980_ip = 1173;
                        continue _fun28980
                    }
                case 172:
                    var9 = var0.code;
                    var2 = _closure1_slot7;
                    var2 = var2.UNKNOWN_PAYMENT_SOURCE;
                    if (!(var9 !== var2)) {
                        _fun28980_ip = 1105;
                        continue _fun28980
                    }
                case 194:
                    var9 = var0.code;
                    var2 = _closure1_slot7;
                    var2 = var2.SUBSCRIPTION_RENEWAL_IN_PROGRESS;
                    if (!(var9 !== var2)) {
                        _fun28980_ip = 1037;
                        continue _fun28980
                    }
                case 216:
                    var9 = var0.code;
                    var2 = _closure1_slot7;
                    var2 = var2.BILLING_TRIAL_REDEMPTION_DISABLED;
                    if (!(var9 !== var2)) {
                        _fun28980_ip = 969;
                        continue _fun28980
                    }
                case 238:
                    var9 = var0.code;
                    var2 = _closure1_slot7;
                    var2 = var2.BILLING_BUNDLE_ALREADY_PURCHASED;
                    if (!(var9 !== var2)) {
                        _fun28980_ip = 901;
                        continue _fun28980
                    }
                case 260:
                    var9 = var0.code;
                    var2 = _closure1_slot7;
                    var2 = var2.BILLING_BUNDLE_PARTIALLY_OWNED;
                    if (!(var9 !== var2)) {
                        _fun28980_ip = 833;
                        continue _fun28980
                    }
                case 282:
                    var9 = var0.code;
                    var2 = _closure1_slot7;
                    var2 = var2.BILLING_INSUFFICIENT_FUNDS;
                    if (!(var9 !== var2)) {
                        _fun28980_ip = 765;
                        continue _fun28980
                    }
                case 304:
                    var9 = var0.code;
                    var2 = _closure1_slot7;
                    var2 = var2.CARD_DECLINED;
                    if (!(var9 !== var2)) {
                        _fun28980_ip = 697;
                        continue _fun28980
                    }
                case 326:
                    var9 = var0.code;
                    var2 = _closure1_slot7;
                    var2 = var2.BILLING_OUTDATED_REQUEST_PARAMETERS;
                    if (!(var9 !== var2)) {
                        _fun28980_ip = 629;
                        continue _fun28980
                    }
                case 348:
                    var9 = var0.status;
                    var2 = 429;
                    if (!(var2 !== var9)) {
                        _fun28980_ip = 561;
                        continue _fun28980
                    }
                case 366:
                    var9 = var0.code;
                    var2 = _closure1_slot7;
                    var2 = var2.UNKNOWN;
                    if (!(var9 !== var2)) {
                        _fun28980_ip = 493;
                        continue _fun28980
                    }
                case 385:
                    var9 = var0.status;
                    var2 = 400;
                    var2 = var2 === var9;
                    if (!var2) {
                        _fun28980_ip = 419;
                        continue _fun28980
                    }
                case 403:
                    var9 = var0.fields;
                    var9 = var9.captcha_key;
                    var2 = var3 != var9;
                case 419:
                    if (!var2) {
                        _fun28980_ip = 1301;
                        continue _fun28980
                    }
                case 425:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = 6;
                    var9 = var13[var2];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var2 = var13[var2];
                    var2 = var11.bind(var12)(var2);
                    var2 = var2.t;
                    var2 = var2["3s/vDN"];
                    var2 = var9.bind(var10)(var2);
                    var0.message = var2;
                    _fun28980_ip = 1301;
                    continue _fun28980;
                case 493:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = 6;
                    var9 = var13[var2];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var2 = var13[var2];
                    var2 = var11.bind(var12)(var2);
                    var2 = var2.t;
                    var2 = var2["5mlOCW"];
                    var2 = var9.bind(var10)(var2);
                    var0.message = var2;
                    _fun28980_ip = 1301;
                    continue _fun28980;
                case 561:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = 6;
                    var9 = var13[var2];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var2 = var13[var2];
                    var2 = var11.bind(var12)(var2);
                    var2 = var2.t;
                    var2 = var2.sUWxgR;
                    var2 = var9.bind(var10)(var2);
                    var0.message = var2;
                    _fun28980_ip = 1301;
                    continue _fun28980;
                case 629:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = 6;
                    var9 = var13[var2];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var2 = var13[var2];
                    var2 = var11.bind(var12)(var2);
                    var2 = var2.t;
                    var2 = var2.uhPY5p;
                    var2 = var9.bind(var10)(var2);
                    var0.message = var2;
                    _fun28980_ip = 1301;
                    continue _fun28980;
                case 697:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = 6;
                    var9 = var13[var2];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var2 = var13[var2];
                    var2 = var11.bind(var12)(var2);
                    var2 = var2.t;
                    var2 = var2.p0UBvU;
                    var2 = var9.bind(var10)(var2);
                    var0.message = var2;
                    _fun28980_ip = 1301;
                    continue _fun28980;
                case 765:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = 6;
                    var9 = var13[var2];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var2 = var13[var2];
                    var2 = var11.bind(var12)(var2);
                    var2 = var2.t;
                    var2 = var2.yX8s2v;
                    var2 = var9.bind(var10)(var2);
                    var0.message = var2;
                    _fun28980_ip = 1301;
                    continue _fun28980;
                case 833:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = 6;
                    var9 = var13[var2];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var2 = var13[var2];
                    var2 = var11.bind(var12)(var2);
                    var2 = var2.t;
                    var2 = var2.c5zDr3;
                    var2 = var9.bind(var10)(var2);
                    var0.message = var2;
                    _fun28980_ip = 1301;
                    continue _fun28980;
                case 901:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = 6;
                    var9 = var13[var2];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var2 = var13[var2];
                    var2 = var11.bind(var12)(var2);
                    var2 = var2.t;
                    var2 = var2.Hiwqua;
                    var2 = var9.bind(var10)(var2);
                    var0.message = var2;
                    _fun28980_ip = 1301;
                    continue _fun28980;
                case 969:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = 6;
                    var9 = var13[var2];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var2 = var13[var2];
                    var2 = var11.bind(var12)(var2);
                    var2 = var2.t;
                    var2 = var2.MHlpoJ;
                    var2 = var9.bind(var10)(var2);
                    var0.message = var2;
                    _fun28980_ip = 1301;
                    continue _fun28980;
                case 1037:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = 6;
                    var9 = var13[var2];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var2 = var13[var2];
                    var2 = var11.bind(var12)(var2);
                    var2 = var2.t;
                    var2 = var2["3jprCb"];
                    var2 = var9.bind(var10)(var2);
                    var0.message = var2;
                    _fun28980_ip = 1301;
                    continue _fun28980;
                case 1105:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = 6;
                    var9 = var13[var2];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var2 = var13[var2];
                    var2 = var11.bind(var12)(var2);
                    var2 = var2.t;
                    var2 = var2.yNYvK1;
                    var2 = var9.bind(var10)(var2);
                    var0.message = var2;
                    _fun28980_ip = 1301;
                    continue _fun28980;
                case 1173:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = 6;
                    var9 = var13[var2];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var2 = var13[var2];
                    var2 = var11.bind(var12)(var2);
                    var2 = var2.t;
                    var2 = var2.DtFqEI;
                    var2 = var9.bind(var10)(var2);
                    var0.message = var2;
                    _fun28980_ip = 1301;
                    continue _fun28980;
                case 1238:
                    var11 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = 6;
                    var9 = var13[var2];
                    var9 = var11.bind(var12)(var9);
                    var10 = var9.intl;
                    var9 = var10.string;
                    var2 = var13[var2];
                    var2 = var11.bind(var12)(var2);
                    var2 = var2.t;
                    var2 = var2["+4Empk"];
                    var2 = var9.bind(var10)(var2);
                    var0.message = var2;
                case 1301:
                    var7 = var0.fields;
                    for (var2 in var7)
                        case 1315: {
                            case 1324: var12 = var2;
                            var9 = _closure1_slot8;
                            var11 = var9[var12];
                            if (var11) {
                                _fun28980_ip = 1346;
                                continue _fun28980
                            }
                            case 1338: var9 = _closure1_slot9;
                            var11 = var9[var12];
                            case 1346: if (var3 == var11) {
                                _fun28980_ip = 1315;
                                continue _fun28980
                            }
                            case 1350: var9 = var0.fields;
                            var10 = var9[var12];
                            var9 = var0.fields;
                            var9 = delete var9[var12];
                            var9 = var0.fields;
                            var9[var11] = var10;
                            _fun28980_ip = 1315;
                            continue _fun28980;
                        }
                case 1382:
                    var2 = var1.body;
                    var2 = var3 != var2;
                    if (!var2) {
                        _fun28980_ip = 1416;
                        continue _fun28980
                    }
                case 1394:
                    var3 = var1.body;
                    var3 = var3.payment_id;
                    var4 = 'string';
                    var3 = typeof var3;
                    var2 = var4 === var3;
                case 1416:
                    if (!var2) {
                        _fun28980_ip = 1436;
                        continue _fun28980
                    }
                case 1419:
                    var1 = var1.body;
                    var1 = var1.payment_id;
                    var0.paymentId = var1;
                case 1436:
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
        var0 = '_isInFieldSet';
        var4.key = var0;
        var0 = function arg0() {
            _fun28981: for (var _fun28981_ip = 0;;) switch (_fun28981_ip) {
                case 0:
                    var6 = arg0;
                    var0 = this;
                    var4 = var0.fields;
                    for (var1 in var4)
                        case 20: {
                            case 29: var7 = var1;
                            var0 = var6.has;
                            var0 = var0.bind(var6)(var7);
                            if (!var0) {
                                _fun28981_ip = 20;
                                continue _fun28981
                            }
                            case 45: var0 = true;
                            return var0;
                        }
                case 49:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'hasCardError';
        var4.key = var6;
        var6 = function() {
            var2 = this;
            var1 = var2._isInFieldSet;
            var0 = _closure1_slot10;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'hasAddressError';
        var4.key = var6;
        var5 = function() {
            var2 = this;
            var1 = var2._isInFieldSet;
            var0 = _closure1_slot11;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var4 = var4.bind(var0)(var11);
    var _closure1_slot12 = var4;
    var4.ErrorCodes = var3;
    var4.Fields = var10;
    var4.Sections = var9;
    var4.CARD_ERRORS = var8;
    var4.ADDRESS_ERRORS = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'errors/BillingError.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.ErrorCodes = var3;
    var1 = function arg0() {
        _fun28984: for (var _fun28984_ip = 0;;) switch (_fun28984_ip) {
            case 0:
                var2 = arg0;
                var1 = 'string';
                var0 = typeof var2;
                if (!(var1 !== var0)) {
                    _fun28984_ip = 367;
                    continue _fun28984
                }
            case 17:
                var5 = null;
                var0 = var5 == var2;
                var3 = undefined;
                var6 = undefined;
                if (var0) {
                    _fun28984_ip = 49;
                    continue _fun28984
                }
            case 30:
                var0 = var2.body;
                var1 = var5 == var0;
                var6 = undefined;
                if (var1) {
                    _fun28984_ip = 49;
                    continue _fun28984
                }
            case 44:
                var6 = var0.code;
            case 49:
                var7 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = 5;
                var1 = var1[var4];
                var1 = var7.bind(var3)(var1);
                var1 = var1.INVALID_FORM_BODY_ERROR_CODE;
                if (!(var6 === var1)) {
                    _fun28984_ip = 367;
                    continue _fun28984
                }
            case 85:
                var1 = global;
                var7 = var1.Array;
                var6 = var7.isArray;
                var8 = var5 == var2;
                var1 = undefined;
                if (var8) {
                    _fun28984_ip = 127;
                    continue _fun28984
                }
            case 107:
                var8 = var2.body;
                var9 = var5 == var8;
                var1 = undefined;
                if (var9) {
                    _fun28984_ip = 127;
                    continue _fun28984
                }
            case 121:
                var1 = var8.errors;
            case 127:
                var1 = var6.bind(var7)(var1);
                if (var1) {
                    _fun28984_ip = 298;
                    continue _fun28984
                }
            case 138:
                var6 = var5 == var2;
                var1 = undefined;
                if (var6) {
                    _fun28984_ip = 182;
                    continue _fun28984
                }
            case 147:
                var6 = var2.body;
                var7 = var5 == var6;
                var1 = undefined;
                if (var7) {
                    _fun28984_ip = 182;
                    continue _fun28984
                }
            case 161:
                var6 = var6.errors;
                var7 = var5 == var6;
                var1 = undefined;
                if (var7) {
                    _fun28984_ip = 182;
                    continue _fun28984
                }
            case 176:
                var1 = var6.billing_address;
            case 182:
                if (!(var5 != var1)) {
                    _fun28984_ip = 298;
                    continue _fun28984
                }
            case 186:
                var1 = var2.body;
                var1 = var1.errors;
                var8 = var1.billing_address;
                for (var1 in var8)
                    case 211: {
                        case 220: var12 = var1;
                        var10 = var2.body;
                        var10 = var10.errors;
                        var10 = var10.billing_address;
                        var11 = var10[var12];
                        var10 = var2.body;
                        var10 = var10.errors;
                        var10 = var10.billing_address;
                        var10 = delete var10[var12];
                        var10 = var2.body;
                        var10 = var10.errors;
                        var10[var12] = var11;
                        _fun28984_ip = 211;
                        continue _fun28984;
                    }
            case 282:
                var1 = var2.body;
                var1 = var1.errors;
                var1 = delete var1.billing_address;
            case 298:
                var6 = var2.body;
                var7 = var5 == var6;
                var1 = undefined;
                if (var7) {
                    _fun28984_ip = 318;
                    continue _fun28984
                }
            case 312:
                var1 = var6.errors;
            case 318:
                if (!(var5 != var1)) {
                    _fun28984_ip = 367;
                    continue _fun28984
                }
            case 322:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var3 = var1.bind(var3)(var0);
                var1 = var3.convertSkemaError;
                var0 = var2.body;
                var0 = var0.errors;
                var0 = var1.bind(var3)(var0);
                var2.body = var0;
            case 367:
                var0 = _closure1_slot12;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var14 = var1;
                var13 = var2;
                var0 = new var14[var0](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var2.parseV8BillingAddressSkemaErrorToBillingError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 507, 1234, 3351, 2]);