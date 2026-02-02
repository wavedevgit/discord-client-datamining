// actions/BillingActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var18 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var19 = dependencyMap;
    var _closure1_slot0 = var18;
    var _closure1_slot1 = var11;
    var0 = metroImportAll;
    var _closure1_slot2 = var0;
    var _closure1_slot3 = var19;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29075: for (var _fun29075_ip = 0;;) switch (_fun29075_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29075_ip = 279;
                            continue _fun29075
                        }
                    case 10:
                        var8 = arg0;
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var5 = 11;
                        var1 = var1[var5];
                        var4 = undefined;
                        var6 = var2.bind(var4)(var1);
                        var2 = var6.dispatch;
                        var1 = {};
                        var7 = 'BILLING_PAYMENT_SOURCE_REMOVE_START';
                        var1.type = var7;
                        var1 = var2.bind(var6)(var1);
                    case 60: // try_start_0
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 12;
                        var1 = var6[var1];
                        var1 = var2.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var2 = var6.del;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var10 = _closure1_slot12;
                        var9 = var10.BILLING_PAYMENT_SOURCE;
                        var7 = var8;
                        var7 = var9.bind(var10)(var7);
                        var1.url = var7;
                        var1 = var2.bind(var6)(var1);
                        SaveGenerator(address = 134);
                    case 132:
                        return var1;
                    case 134:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29075_ip = 184;
                            continue _fun29075
                        }
                    case 140:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var2 = var2[var5];
                        var7 = var6.bind(var4)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var9 = 'BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS';
                        var2.type = var9;
                        var2.id = var8;
                        var2 = var6.bind(var7)(var2);
                    case 181: // try_end0
                        return var4;
                    case 184:
                        return var1;
                    case 187: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 13;
                        var1 = var2[var1];
                        var1 = var6.bind(var4)(var1);
                        var1 = var1.BillingError;
                        var6 = var1.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var1
                            }
                        });
                        var12 = var6;
                        var11 = var7;
                        var1 = new var12[var1](var11, var10);
                        var1 = var1 instanceof Object ? var1 : var6;
                        var3 = _closure1_slot1;
                        var2 = var2[var5];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BILLING_PAYMENT_SOURCE_REMOVE_FAIL';
                        var2.type = var5;
                        var2.error = var1;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 279:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun29078: for (var _fun29078_ip = 0;;) switch (_fun29078_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29078_ip = 398;
                            continue _fun29078
                        }
                    case 10:
                        var7 = arg0;
                        var1 = arg1;
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var5 = 11;
                        var2 = var2[var5];
                        var4 = undefined;
                        var8 = var6.bind(var4)(var2);
                        var6 = var8.dispatch;
                        var2 = {};
                        var9 = 'BILLING_PAYMENT_SOURCE_UPDATE_START';
                        var2.type = var9;
                        var2 = var6.bind(var8)(var2);
                    case 63: // try_start_0
                        var8 = var1;
                        var6 = var8.billingAddress;
                        var13 = var6.line1;
                        var12 = var6.line2;
                        var11 = var6.postalCode;
                        var2 = _closure1_slot5;
                        var1 = _closure1_slot4;
                        var15 = var2.bind(var4)(var6, var1);
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 12;
                        var1 = var6[var1];
                        var1 = var2.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var2 = var6.patch;
                        var1 = {};
                        var14 = _closure1_slot12;
                        var9 = var14.BILLING_PAYMENT_SOURCE;
                        var7 = var9.bind(var14)(var7);
                        var1.url = var7;
                        var7 = {};
                        var9 = {};
                        var16 = var9;
                        var10 = copyDataProperties(var16, var15);
                        var10 = 'line_1';
                        var9[var10] = var13;
                        var10 = 'line_2';
                        var9[var10] = var12;
                        var10 = 'postal_code';
                        var9[var10] = var11;
                        var7.billing_address = var9;
                        var9 = var8.expiresMonth;
                        var7.expires_month = var9;
                        var9 = var8.expiresYear;
                        var7.expires_year = var9;
                        var8 = var8.isDefault;
                        var7.default = var8;
                        var1.body = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var2.bind(var6)(var1);
                        SaveGenerator(address = 250);
                    case 248:
                        return var1;
                    case 250:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29078_ip = 321;
                            continue _fun29078
                        }
                    case 256:
                        var7 = _closure1_slot7;
                        var6 = var7.createFromServer;
                        var2 = var1.body;
                        var8 = var6.bind(var7)(var2);
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var2 = var2[var5];
                        var7 = var6.bind(var4)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var9 = 'BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS';
                        var2.type = var9;
                        var2.paymentSource = var8;
                        var2 = var6.bind(var7)(var2);
                    case 318: // try_end0
                        return var4;
                    case 321:
                        return var1;
                    case 324: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 14;
                        var1 = var2[var1];
                        var6 = var6.bind(var4)(var1);
                        var1 = var6.parseV8BillingAddressSkemaErrorToBillingError;
                        var1 = var1.bind(var6)(var7);
                        var3 = _closure1_slot1;
                        var2 = var2[var5];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BILLING_PAYMENT_SOURCE_UPDATE_FAIL';
                        var2.type = var5;
                        var2.error = var1;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 398:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot31 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29081: for (var _fun29081_ip = 0;;) switch (_fun29081_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29081_ip = 108;
                            continue _fun29081
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var6 = _closure1_slot12;
                        var5 = var6.BILLING_STRIPE_PAYMENT_INTENTS;
                        var4 = arg0;
                        var4 = var5.bind(var6)(var4);
                        var1.url = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 85);
                    case 83:
                        return var1;
                    case 85:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29081_ip = 105;
                            continue _fun29081
                        }
                    case 91:
                        var2 = var1.body;
                        var2 = var2.stripe_payment_intent_client_secret;
                        return var2;
                    case 105:
                        return var1;
                    case 108:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29084: for (var _fun29084_ip = 0;;) switch (_fun29084_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29084_ip = 128;
                            continue _fun29084
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.get;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var6 = _closure1_slot12;
                        var5 = var6.BILLING_STRIPE_PAYMENT_INTENTS;
                        var4 = arg0;
                        var4 = var5.bind(var6)(var4);
                        var1.url = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 85);
                    case 83:
                        return var1;
                    case 85:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29084_ip = 125;
                            continue _fun29084
                        }
                    case 91:
                        var3 = var1.body;
                        var2 = {};
                        var4 = var3.stripe_payment_intent_client_secret;
                        var2.clientSecret = var4;
                        var3 = var3.stripe_payment_intent_payment_method_id;
                        var2.paymentMethodId = var3;
                        return var2;
                    case 125:
                        return var1;
                    case 128:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot33 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot33 = var0;
    var16 = function() {
        var0 = undefined;
        var3 = _closure1_slot35;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot34 = var16;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29088: for (var _fun29088_ip = 0;;) switch (_fun29088_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29088_ip = 282;
                            continue _fun29088
                        }
                    case 10:
                        var6 = arg0;
                    case 13: // try_start_0
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 12;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        var3 = var1.HTTP;
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot12;
                        var4 = var4.BILLING_PAYMENT_SOURCES_VALIDATE_BILLING_ADDRESS;
                        var1.url = var4;
                        var4 = {};
                        var5 = {};
                        var7 = var6.name;
                        var5.name = var7;
                        var7 = var6.line1;
                        var5.line_1 = var7;
                        var7 = var6.line2;
                        var5.line_2 = var7;
                        var7 = var6.city;
                        var5.city = var7;
                        var7 = var6.state;
                        var5.state = var7;
                        var7 = var6.postalCode;
                        var5.postal_code = var7;
                        var7 = var6.country;
                        var5.country = var7;
                        var6 = var6.email;
                        var5.email = var6;
                        var4.billing_address = var5;
                        var1.body = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 177);
                    case 175:
                        return var1;
                    case 177:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29088_ip = 197;
                            continue _fun29088
                        }
                    case 183:
                        var2 = var1.body;
                        var2 = var2.token;
                    case 194: // try_end0
                        return var2;
                    case 197:
                        return var1;
                    case 200: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var1 = 14;
                        var1 = var5[var1];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var1);
                        var1 = var3.parseV8BillingAddressSkemaErrorToBillingError;
                        var1 = var1.bind(var3)(var6);
                        var3 = _closure1_slot1;
                        var2 = 11;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BILLING_PAYMENT_SOURCE_CREATE_FAIL';
                        var2.type = var5;
                        var2.error = var1;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 282:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot35 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot35 = var0;
    var15 = function arg0() {
        _fun29089: for (var _fun29089_ip = 0;;) switch (_fun29089_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot16;
                var1 = var2.has;
                var0 = var5.type;
                var1 = var1.bind(var2)(var0);
                var4 = null;
                var0 = null;
                if (var1) {
                    _fun29089_ip = 88;
                    continue _fun29089
                }
            case 32:
                var1 = global;
                var3 = var1.JSON;
                var2 = var3.stringify;
                var1 = {};
                var7 = _closure1_slot19;
                var6 = var7.get;
                var5 = var5.type;
                var5 = var6.bind(var7)(var5);
                var6 = var4 != var5;
                var4 = null;
                if (!var6) {
                    _fun29089_ip = 79;
                    continue _fun29089
                }
            case 76:
                var4 = var5;
            case 79:
                var1.type = var4;
                var0 = var2.bind(var3)(var1);
            case 88:
                return var0;
        }
    };
    var _closure1_slot36 = var15;
    var14 = function() {
        var0 = undefined;
        var3 = _closure1_slot38;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot37 = var14;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun29093: for (var _fun29093_ip = 0;;) switch (_fun29093_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[4];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29093_ip = 588;
                            continue _fun29093
                        }
                    case 13:
                        var14 = arg0;
                        var12 = arg1;
                        var13 = arg2;
                        var11 = arg3;
                        var5 = undefined;
                        if (!(var1 === var5)) {
                            _fun29093_ip = 33;
                            continue _fun29093
                        }
                    case 31:
                        var1 = false;
                    case 33:
                        var10 = var1;
                        var2 = undefined;
                        SaveGenerator(address = 42);
                    case 40:
                        return var5;
                    case 42:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29093_ip = 585;
                            continue _fun29093
                        }
                    case 51:
                        var7 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var6 = 11;
                        var4 = var4[var6];
                        var8 = var7.bind(var5)(var4);
                        var7 = var8.dispatch;
                        var4 = {};
                        var9 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                        var4.type = var9;
                        var4 = var7.bind(var8)(var4);
                    case 96: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var4 = 12;
                        var4 = var8[var4];
                        var4 = var7.bind(var5)(var4);
                        var8 = var4.HTTP;
                        var7 = var8.post;
                        var4 = {};
                        var9 = _closure1_slot12;
                        var9 = var9.BILLING_PAYMENT_SOURCES;
                        var4.url = var9;
                        var9 = {};
                        var15 = var11.analyticsLocation;
                        var9.location = var15;
                        var4.query = var9;
                        var9 = {};
                        var9.payment_gateway = var14;
                        var9.token = var12;
                        var12 = {};
                        var14 = var13.name;
                        var12.name = var14;
                        var14 = var13.line1;
                        var12.line_1 = var14;
                        var14 = var13.line2;
                        var12.line_2 = var14;
                        var14 = var13.city;
                        var12.city = var14;
                        var14 = var13.state;
                        var12.state = var14;
                        var14 = var13.postalCode;
                        var12.postal_code = var14;
                        var14 = var13.country;
                        var12.country = var14;
                        var13 = var13.email;
                        var12.email = var13;
                        var9.billing_address = var12;
                        var12 = var11.billingAddressToken;
                        var9.billing_address_token = var12;
                        var12 = var11.bank;
                        var9.bank = var12;
                        var11 = var11.returnUrl;
                        var9.return_url = var11;
                        var9.default = var10;
                        var4.body = var9;
                        var9 = false;
                        var4.rejectWithError = var9;
                        var4 = var7.bind(var8)(var4);
                        SaveGenerator(address = 321);
                    case 319:
                        return var4;
                    case 321:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                        if (var7) {
                            _fun29093_ip = 392;
                            continue _fun29093
                        }
                    case 327:
                        var9 = _closure1_slot7;
                        var8 = var9.createFromServer;
                        var7 = var4.body;
                        var7 = var8.bind(var9)(var7);
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var8 = var8[var6];
                        var10 = var9.bind(var5)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var11 = 'BILLING_PAYMENT_SOURCE_CREATE_SUCCESS';
                        var8.type = var11;
                        var8.paymentSource = var7;
                        var8 = var9.bind(var10)(var8);
                    case 389: // try_end0
                        return var7;
                    case 392:
                        return var4;
                    case 395: // catch_target0
                        CatchBlockStart(arg_register = 12);
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var4 = 14;
                        var7 = var9[var4];
                        var10 = var8.bind(var5)(var7);
                        var7 = var10.parseV8BillingAddressSkemaErrorToBillingError;
                        var7 = var7.bind(var10)(var12);
                        var2 = var7;
                        var13 = null;
                        var10 = var13 != var12;
                        var11 = undefined;
                        if (!var10) {
                            _fun29093_ip = 454;
                            continue _fun29093
                        }
                    case 442:
                        var14 = var12.body;
                        var10 = var13 != var14;
                        var11 = var14;
                    case 454:
                        if (!var10) {
                            _fun29093_ip = 463;
                            continue _fun29093
                        }
                    case 457:
                        var10 = var11.adyen_redirect_url;
                    case 463:
                        if (!var10) {
                            _fun29093_ip = 507;
                            continue _fun29093
                        }
                    case 466:
                        var11 = var7.fields;
                        var14 = var13 == var12;
                        var10 = undefined;
                        if (var14) {
                            _fun29093_ip = 501;
                            continue _fun29093
                        }
                    case 481:
                        var12 = var12.body;
                        var13 = var13 == var12;
                        var10 = undefined;
                        if (var13) {
                            _fun29093_ip = 501;
                            continue _fun29093
                        }
                    case 495:
                        var10 = var12.adyen_redirect_url;
                    case 501:
                        var11.adyen_redirect_url = var10;
                    case 507:
                        var7 = var7.code;
                        var4 = var9[var4];
                        var4 = var8.bind(var5)(var4);
                        var4 = var4.ErrorCodes;
                        var4 = var4.CONFIRMATION_REQUIRED;
                        if (!(var7 !== var4)) {
                            _fun29093_ip = 583;
                            continue _fun29093
                        }
                    case 537:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var3 = var3[var6];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_PAYMENT_SOURCE_CREATE_FAIL';
                        var3.type = var6;
                        var6 = var2;
                        var3.error = var6;
                        var3 = var4.bind(var5)(var3);
                    case 583:
                        throw var2;
                    case 585:
                        return var1;
                    case 588:
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
    var13 = function arg0() {
        _fun29094: for (var _fun29094_ip = 0;;) switch (_fun29094_ip) {
            case 0:
                var5 = arguments[1];
                var4 = arguments[2];
                var3 = undefined;
                if (!(var5 === var3)) {
                    _fun29094_ip = 14;
                    continue _fun29094
                }
            case 12:
                var5 = true;
            case 14:
                if (!(var4 === var3)) {
                    _fun29094_ip = 76;
                    continue _fun29094
                }
            case 18:
                var6 = _closure1_slot0;
                var7 = _closure1_slot3;
                var0 = 15;
                var1 = var7[var0];
                var1 = var6.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var7[var0];
                var0 = var6.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.khEaRI;
                var4 = var1.bind(var2)(var0);
            case 76:
                var2 = _closure1_slot40;
                var1 = {};
                var0 = {};
                var6 = 'payment_elements';
                var0.source = var6;
                var1.tags = var0;
                var11 = arg0;
                var12 = undefined;
                var10 = var5;
                var9 = var4;
                var8 = var1;
                var0 = var12[var2](var11, var10, var9, var8, var7);
                return var0;
        }
    };
    var _closure1_slot39 = var13;
    var12 = function arg0() {
        _fun29095: for (var _fun29095_ip = 0;;) switch (_fun29095_ip) {
            case 0:
                var7 = arg0;
                var9 = arguments[1];
                var14 = arguments[2];
                var4 = arguments[3];
                var3 = undefined;
                if (!(var9 === var3)) {
                    _fun29095_ip = 20;
                    continue _fun29095
                }
            case 18:
                var9 = true;
            case 20:
                if (!(var14 === var3)) {
                    _fun29095_ip = 82;
                    continue _fun29095
                }
            case 24:
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var0 = 15;
                var1 = var6[var0];
                var1 = var5.bind(var3)(var1);
                var2 = var1.intl;
                var1 = var2.string;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var0.t;
                var0 = var0.khEaRI;
                var14 = var1.bind(var2)(var0);
            case 82:
                if (!(var4 === var3)) {
                    _fun29095_ip = 88;
                    continue _fun29095
                }
            case 86:
                var4 = {};
            case 88:
                var5 = _closure1_slot18;
                var2 = var5.includes;
                var0 = var7.type;
                var0 = var2.bind(var5)(var0);
                if (var0) {
                    _fun29095_ip = 244;
                    continue _fun29095
                }
            case 116:
                var0 = {};
                var5 = _closure1_slot0;
                var6 = _closure1_slot3;
                var2 = 13;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var6 = var2.BillingError;
                var8 = 'string';
                var5 = typeof var7;
                var2 = var7;
                if (!(var8 === var5)) {
                    _fun29095_ip = 161;
                    continue _fun29095
                }
            case 158:
                var2 = var14;
            case 161:
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var19 = var5;
                var18 = var2;
                var2 = new var19[var6](var18, var17);
                var8 = var2 instanceof Object ? var2 : var5;
                var2 = var8.message;
                var0.failure_message = var2;
                var2 = var8.code;
                var0.status_code = var2;
                var11 = var8.code;
                var10 = 429;
                var2 = var9;
                var5 = var8;
                var6 = var0;
                if (!(var10 === var11)) {
                    _fun29095_ip = 528;
                    continue _fun29095
                }
            case 231:
                var2 = false;
                var5 = var8;
                var6 = var0;
                _fun29095_ip = 528;
                continue _fun29095;
            case 244:
                var0 = var7.message;
                var8 = null;
                var11 = var14;
                if (!(var8 != var0)) {
                    _fun29095_ip = 293;
                    continue _fun29095
                }
            case 258:
                var13 = var7.message;
                var0 = global;
                var0 = var0.HermesInternal;
                var12 = var0.concat;
                var10 = '';
                var0 = ': ';
                var11 = var12.bind(var10)(var14, var0, var13);
            case 293:
                var0 = {};
                var0.failure_message = var11;
                var10 = var7.type;
                var0.error_type = var10;
                var10 = var7.code;
                var0.failure_code = var10;
                var10 = var7.decline_code;
                var0.failure_sub_code = var10;
                var10 = var7.payment_method;
                var12 = var8 == var10;
                var8 = undefined;
                if (var12) {
                    _fun29095_ip = 355;
                    continue _fun29095
                }
            case 350:
                var8 = var10.type;
            case 355:
                var0.payment_source_type = var8;
                var10 = var7.type;
                var8 = 'card_error';
                if (!(var8 === var10)) {
                    _fun29095_ip = 473;
                    continue _fun29095
                }
            case 375:
                var10 = _closure1_slot1;
                var12 = _closure1_slot3;
                var8 = 16;
                var8 = var12[var8];
                var13 = var10.bind(var3)(var8);
                var12 = var13.track;
                var8 = _closure1_slot11;
                var10 = var8.PAYMENT_SOURCE_CREATION_FAILED;
                var8 = {};
                var18 = var8;
                var17 = var0;
                var14 = copyDataProperties(var18, var17);
                var14 = global;
                var14 = var14.Error;
                var15 = var14.prototype;
                var15 = Object.create(var15, {
                    constructor: {
                        value: var14
                    }
                });
                var19 = var15;
                var14 = new var19[var14](var18);
                var14 = var14 instanceof Object ? var14 : var15;
                var15 = var14.stack;
                var14 = 'stacktrace';
                var8[var14] = var15;
                var8 = var12.bind(var13)(var10, var8);
                var9 = false;
            case 473:
                var10 = _closure1_slot0;
                var12 = _closure1_slot3;
                var8 = 13;
                var8 = var12[var8];
                var8 = var10.bind(var3)(var8);
                var8 = var8.BillingError;
                var10 = var8.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var8
                    }
                });
                var19 = var10;
                var18 = var11;
                var8 = new var19[var8](var18, var17);
                var5 = var8 instanceof Object ? var8 : var10;
                var2 = var9;
                var6 = var0;
            case 528:
                var8 = _closure1_slot1;
                var9 = _closure1_slot3;
                var0 = 11;
                var0 = var9[var0];
                var9 = var8.bind(var3)(var0);
                var8 = var9.dispatch;
                var0 = {};
                var10 = 'BILLING_PAYMENT_SOURCE_CREATE_FAIL';
                var0.type = var10;
                var0.error = var5;
                var0 = var8.bind(var9)(var0);
                var0 = global;
                var0 = var0.Error;
                var9 = 'string';
                var8 = typeof var7;
                if (!(var9 !== var8)) {
                    _fun29095_ip = 598;
                    continue _fun29095
                }
            case 593:
                var7 = var5.message;
            case 598:
                var5 = var0.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var0
                    }
                });
                var19 = var5;
                var18 = var7;
                var0 = new var19[var0](var18, var17);
                var0 = var0 instanceof Object ? var0 : var5;
                if (!var2) {
                    _fun29095_ip = 702;
                    continue _fun29095
                }
            case 624:
                var2 = _closure1_slot0;
                var5 = _closure1_slot3;
                var1 = 17;
                var1 = var5[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.captureBillingException;
                var1 = {};
                var18 = var1;
                var17 = var4;
                var5 = copyDataProperties(var18, var17);
                var5 = {};
                var18 = var5;
                var17 = var6;
                var6 = copyDataProperties(var18, var17);
                var17 = var4.extra;
                var18 = var5;
                var4 = copyDataProperties(var18, var17);
                var4 = 'extra';
                var1[var4] = var5;
                var1 = var2.bind(var3)(var0, var1);
            case 702:
                return var0;
        }
    };
    var _closure1_slot40 = var12;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun29098: for (var _fun29098_ip = 0;;) switch (_fun29098_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        var7 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29098_ip = 198;
                            continue _fun29098
                        }
                    case 16:
                        var6 = null;
                        if (!(var6 != var5)) {
                            _fun29098_ip = 176;
                            continue _fun29098
                        }
                    case 25:
                        if (!(var6 != var7)) {
                            _fun29098_ip = 176;
                            continue _fun29098
                        }
                    case 32:
                        var4 = var7.getElement;
                        var8 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var2 = 18;
                        var2 = var3[var2];
                        var3 = undefined;
                        var2 = var8.bind(var3)(var2);
                        var2 = var2.CardNumberElement;
                        var4 = var4.bind(var7)(var2);
                        if (!(var6 != var4)) {
                            _fun29098_ip = 159;
                            continue _fun29098
                        }
                    case 80:
                        var2 = var5.createToken;
                        var2 = var2.bind(var5)(var4);
                        SaveGenerator(address = 95);
                    case 93:
                        return var2;
                    case 95:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun29098_ip = 156;
                            continue _fun29098
                        }
                    case 101:
                        var4 = var2.token;
                        var5 = var2.error;
                        if (!(var6 == var5)) {
                            _fun29098_ip = 145;
                            continue _fun29098
                        }
                    case 116:
                        if (!(var6 != var4)) {
                            _fun29098_ip = 128;
                            continue _fun29098
                        }
                    case 120:
                        var4 = var4.id;
                        return var4;
                    case 128:
                        var6 = _closure1_slot40;
                        var4 = 'token not available with successful stripe call';
                        var4 = var6.bind(var3)(var4);
                        throw var4;
                    case 145:
                        var4 = _closure1_slot40;
                        var4 = var4.bind(var3)(var5);
                        throw var4;
                    case 156:
                        return var2;
                    case 159:
                        var2 = _closure1_slot40;
                        var1 = 'Unable to load card elements from Stripe';
                        var1 = var2.bind(var3)(var1);
                        throw var1;
                    case 176:
                        var3 = _closure1_slot40;
                        var2 = undefined;
                        var1 = 'Stripe or elements not loaded';
                        var1 = var3.bind(var2)(var1);
                        throw var1;
                    case 198:
                        return var0;
                }
            };
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
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun29101: for (var _fun29101_ip = 0;;) switch (_fun29101_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var11 = arg1;
                        var10 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29101_ip = 425;
                            continue _fun29101
                        }
                    case 19:
                        var7 = null;
                        if (!(var7 != var6)) {
                            _fun29101_ip = 403;
                            continue _fun29101
                        }
                    case 28:
                        if (!(var7 != var11)) {
                            _fun29101_ip = 381;
                            continue _fun29101
                        }
                    case 35:
                        var9 = var10.email;
                        var12 = var10.name;
                        var19 = var10.line1;
                        var18 = var10.line2;
                        var17 = var10.city;
                        var16 = var10.state;
                        var15 = var10.postalCode;
                        var14 = var10.country;
                        if (!(var7 != var12)) {
                            _fun29101_ip = 359;
                            continue _fun29101
                        }
                    case 88:
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 11;
                        var1 = var4[var1];
                        var5 = undefined;
                        var4 = var2.bind(var5)(var1);
                        var2 = var4.dispatch;
                        var1 = {};
                        var8 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                        var1.type = var8;
                        var1 = var2.bind(var4)(var1);
                        var1 = _closure1_slot34;
                        var1 = var1.bind(var5)(var10);
                        SaveGenerator(address = 148);
                    case 146:
                        return var1;
                    case 148:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29101_ip = 356;
                            continue _fun29101
                        }
                    case 157:
                        var4 = var6.createPaymentMethod;
                        var2 = {};
                        var8 = 'eps';
                        var2.type = var8;
                        var8 = {};
                        var8.bank = var11;
                        var2.eps = var8;
                        var8 = {};
                        var13 = {};
                        var13.line1 = var19;
                        var13.line2 = var18;
                        var13.city = var17;
                        var13.state = var16;
                        var13.postal_code = var15;
                        var13.country = var14;
                        var8.address = var13;
                        var8.name = var12;
                        var8.email = var9;
                        var2.billing_details = var8;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address = 246);
                    case 244:
                        return var2;
                    case 246:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun29101_ip = 353;
                            continue _fun29101
                        }
                    case 252:
                        var6 = var2.paymentMethod;
                        var4 = var2.error;
                        if (!(var7 == var4)) {
                            _fun29101_ip = 342;
                            continue _fun29101
                        }
                    case 267:
                        if (!(var7 != var6)) {
                            _fun29101_ip = 325;
                            continue _fun29101
                        }
                    case 271:
                        var9 = _closure1_slot37;
                        var7 = _closure1_slot13;
                        var23 = var7.STRIPE;
                        var22 = var6.id;
                        var6 = {};
                        var6.billingAddressToken = var1;
                        var12 = arg3;
                        var6.analyticsLocation = var12;
                        var6.bank = var11;
                        var24 = undefined;
                        var21 = var10;
                        var20 = var6;
                        var6 = var24[var9](var23, var22, var21, var20, var19);
                        return var6;
                    case 325:
                        var7 = _closure1_slot40;
                        var6 = 'paymentMethod not available with successful stripe call';
                        var6 = var7.bind(var5)(var6);
                        throw var6;
                    case 342:
                        var3 = _closure1_slot40;
                        var3 = var3.bind(var5)(var4);
                        throw var3;
                    case 353:
                        return var2;
                    case 356:
                        return var1;
                    case 359:
                        var3 = _closure1_slot40;
                        var2 = undefined;
                        var1 = 'Name required for EPS';
                        var1 = var3.bind(var2)(var1);
                        throw var1;
                    case 381:
                        var3 = _closure1_slot40;
                        var2 = undefined;
                        var1 = 'Bank required for EPS';
                        var1 = var3.bind(var2)(var1);
                        throw var1;
                    case 403:
                        var3 = _closure1_slot40;
                        var2 = undefined;
                        var1 = 'Stripe not loaded';
                        var1 = var3.bind(var2)(var1);
                        throw var1;
                    case 425:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun29104: for (var _fun29104_ip = 0;;) switch (_fun29104_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var10 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29104_ip = 383;
                            continue _fun29104
                        }
                    case 16:
                        var7 = null;
                        if (!(var7 != var6)) {
                            _fun29104_ip = 361;
                            continue _fun29104
                        }
                    case 25:
                        var9 = var10.email;
                        var11 = var10.name;
                        var18 = var10.line1;
                        var17 = var10.line2;
                        var16 = var10.city;
                        var15 = var10.state;
                        var14 = var10.postalCode;
                        var13 = var10.country;
                        if (!(var7 != var11)) {
                            _fun29104_ip = 339;
                            continue _fun29104
                        }
                    case 78:
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 11;
                        var1 = var4[var1];
                        var5 = undefined;
                        var4 = var2.bind(var5)(var1);
                        var2 = var4.dispatch;
                        var1 = {};
                        var8 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                        var1.type = var8;
                        var1 = var2.bind(var4)(var1);
                        var1 = _closure1_slot34;
                        var1 = var1.bind(var5)(var10);
                        SaveGenerator(address = 138);
                    case 136:
                        return var1;
                    case 138:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29104_ip = 336;
                            continue _fun29104
                        }
                    case 147:
                        var4 = var6.createPaymentMethod;
                        var2 = {};
                        var8 = 'ideal';
                        var2.type = var8;
                        var8 = {};
                        var2.ideal = var8;
                        var8 = {};
                        var12 = {};
                        var12.line1 = var18;
                        var12.line2 = var17;
                        var12.city = var16;
                        var12.state = var15;
                        var12.postal_code = var14;
                        var12.country = var13;
                        var8.address = var12;
                        var8.name = var11;
                        var8.email = var9;
                        var2.billing_details = var8;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address = 231);
                    case 229:
                        return var2;
                    case 231:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun29104_ip = 333;
                            continue _fun29104
                        }
                    case 237:
                        var6 = var2.paymentMethod;
                        var4 = var2.error;
                        if (!(var7 == var4)) {
                            _fun29104_ip = 322;
                            continue _fun29104
                        }
                    case 252:
                        if (!(var7 != var6)) {
                            _fun29104_ip = 305;
                            continue _fun29104
                        }
                    case 256:
                        var9 = _closure1_slot37;
                        var7 = _closure1_slot13;
                        var22 = var7.STRIPE;
                        var21 = var6.id;
                        var6 = {};
                        var6.billingAddressToken = var1;
                        var11 = arg2;
                        var6.analyticsLocation = var11;
                        var23 = undefined;
                        var20 = var10;
                        var19 = var6;
                        var6 = var23[var9](var22, var21, var20, var19, var18);
                        return var6;
                    case 305:
                        var7 = _closure1_slot40;
                        var6 = 'paymentMethod not available with successful stripe call';
                        var6 = var7.bind(var5)(var6);
                        throw var6;
                    case 322:
                        var3 = _closure1_slot40;
                        var3 = var3.bind(var5)(var4);
                        throw var3;
                    case 333:
                        return var2;
                    case 336:
                        return var1;
                    case 339:
                        var3 = _closure1_slot40;
                        var2 = undefined;
                        var1 = 'Name required for iDEAL';
                        var1 = var3.bind(var2)(var1);
                        throw var1;
                    case 361:
                        var3 = _closure1_slot40;
                        var2 = undefined;
                        var1 = 'Stripe not loaded';
                        var1 = var3.bind(var2)(var1);
                        throw var1;
                    case 383:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot43 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot43 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun29107: for (var _fun29107_ip = 0;;) switch (_fun29107_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var10 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29107_ip = 404;
                            continue _fun29107
                        }
                    case 16:
                        var7 = null;
                        if (!(var7 != var6)) {
                            _fun29107_ip = 382;
                            continue _fun29107
                        }
                    case 25:
                        var9 = var10.email;
                        var12 = var10.name;
                        var19 = var10.line1;
                        var18 = var10.line2;
                        var17 = var10.city;
                        var16 = var10.state;
                        var15 = var10.postalCode;
                        var14 = var10.country;
                        if (!(var7 != var9)) {
                            _fun29107_ip = 360;
                            continue _fun29107
                        }
                    case 78:
                        var2 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 11;
                        var1 = var4[var1];
                        var5 = undefined;
                        var4 = var2.bind(var5)(var1);
                        var2 = var4.dispatch;
                        var1 = {};
                        var8 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                        var1.type = var8;
                        var1 = var2.bind(var4)(var1);
                        var1 = _closure1_slot34;
                        var1 = var1.bind(var5)(var10);
                        SaveGenerator(address = 138);
                    case 136:
                        return var1;
                    case 138:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29107_ip = 357;
                            continue _fun29107
                        }
                    case 147:
                        var2 = arg1;
                        var11 = var2.p24Bank;
                        var4 = var6.createPaymentMethod;
                        var2 = {};
                        var8 = 'p24';
                        var2.type = var8;
                        var8 = {};
                        var8.bank = var11;
                        var2.p24 = var8;
                        var8 = {};
                        var13 = {};
                        var13.line1 = var19;
                        var13.line2 = var18;
                        var13.city = var17;
                        var13.state = var16;
                        var13.postal_code = var15;
                        var13.country = var14;
                        var8.address = var13;
                        var8.name = var12;
                        var8.email = var9;
                        var2.billing_details = var8;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address = 247);
                    case 245:
                        return var2;
                    case 247:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun29107_ip = 354;
                            continue _fun29107
                        }
                    case 253:
                        var6 = var2.paymentMethod;
                        var4 = var2.error;
                        if (!(var7 == var4)) {
                            _fun29107_ip = 343;
                            continue _fun29107
                        }
                    case 268:
                        if (!(var7 != var6)) {
                            _fun29107_ip = 326;
                            continue _fun29107
                        }
                    case 272:
                        var9 = _closure1_slot37;
                        var7 = _closure1_slot13;
                        var23 = var7.STRIPE;
                        var22 = var6.id;
                        var6 = {};
                        var6.billingAddressToken = var1;
                        var12 = arg3;
                        var6.analyticsLocation = var12;
                        var6.bank = var11;
                        var24 = undefined;
                        var21 = var10;
                        var20 = var6;
                        var6 = var24[var9](var23, var22, var21, var20, var19);
                        return var6;
                    case 326:
                        var7 = _closure1_slot40;
                        var6 = 'paymentMethod not available with successful stripe call';
                        var6 = var7.bind(var5)(var6);
                        throw var6;
                    case 343:
                        var3 = _closure1_slot40;
                        var3 = var3.bind(var5)(var4);
                        throw var3;
                    case 354:
                        return var2;
                    case 357:
                        return var1;
                    case 360:
                        var3 = _closure1_slot40;
                        var2 = undefined;
                        var1 = 'Email required for Przelewy24';
                        var1 = var3.bind(var2)(var1);
                        throw var1;
                    case 382:
                        var3 = _closure1_slot40;
                        var2 = undefined;
                        var1 = 'Stripe not loaded';
                        var1 = var3.bind(var2)(var1);
                        throw var1;
                    case 404:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot44 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot44 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29110: for (var _fun29110_ip = 0;;) switch (_fun29110_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29110_ip = 940;
                            continue _fun29110
                        }
                    case 10:
                        var29 = 0;
                        var1 = copyRestArgs(var29);
                        var6 = var1;
                        var2 = var6[Symbol.iterator];
                        var6 = var2().next;
                        var8 = undefined;
                        var3 = undefined;
                        var4 = undefined;
                        var13 = var6().value;
                        var18 = var2;
                        var18 = var18 === var8;
                        var3 = var18;
                        if (var18) {
                            _fun29110_ip = 48;
                            continue _fun29110
                        }
                    case 45:
                        var4 = var13;
                    case 48:
                        var10 = var4;
                        var4 = undefined;
                        var13 = var3;
                        if (var13) {
                            _fun29110_ip = 79;
                            continue _fun29110
                        }
                    case 59:
                        var13 = var6().value;
                        var18 = var2;
                        var18 = var18 === var8;
                        var3 = var18;
                        if (var18) {
                            _fun29110_ip = 79;
                            continue _fun29110
                        }
                    case 76:
                        var4 = var13;
                    case 79:
                        var20 = var4;
                        var4 = undefined;
                        var13 = var3;
                        if (var13) {
                            _fun29110_ip = 110;
                            continue _fun29110
                        }
                    case 90:
                        var13 = var6().value;
                        var18 = var2;
                        var18 = var18 === var8;
                        var3 = var18;
                        if (var18) {
                            _fun29110_ip = 110;
                            continue _fun29110
                        }
                    case 107:
                        var4 = var13;
                    case 110: // try_start_0
                        var13 = var4;
                        var11 = var13.billingAddress;
                        var7 = var13.paymentSourceType;
                        var15 = var13.lastConfirmedSetupIntentRef;
                    case 133: // try_end0
                        var4 = undefined;
                        var13 = var3;
                        if (var13) {
                            _fun29110_ip = 161;
                            continue _fun29110
                        }
                    case 141:
                        var6 = var6().value;
                        var13 = var2;
                        var13 = var13 === var8;
                        var3 = var13;
                        if (var13) {
                            _fun29110_ip = 161;
                            continue _fun29110
                        }
                    case 158:
                        var4 = var6;
                    case 161:
                        var16 = var4;
                        var4 = var3;
                        if (var4) {
                            _fun29110_ip = 173;
                            continue _fun29110
                        }
                    case 170:
                        var2.return();
                    case 173:
                        var17 = undefined;
                        var9 = undefined;
                        var12 = undefined;
                        var22 = undefined;
                        var24 = undefined;
                        var14 = undefined;
                        var21 = undefined;
                        SaveGenerator(address = 191);
                    case 189:
                        return var8;
                    case 191:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun29110_ip = 923;
                            continue _fun29110
                        }
                    case 200:
                        var5 = var10;
                        var19 = null;
                        if (!(var19 != var5)) {
                            _fun29110_ip = 900;
                            continue _fun29110
                        }
                    case 212:
                        var5 = var20;
                        if (!(var19 != var5)) {
                            _fun29110_ip = 877;
                            continue _fun29110
                        }
                    case 222:
                        var6 = _closure1_slot1;
                        var18 = _closure1_slot3;
                        var5 = 11;
                        var5 = var18[var5];
                        var18 = var6.bind(var8)(var5);
                        var6 = var18.dispatch;
                        var5 = {};
                        var23 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                        var5.type = var23;
                        var5 = var6.bind(var18)(var5);
                        var6 = _closure1_slot34;
                        var5 = var11;
                        var5 = var6.bind(var8)(var5);
                        SaveGenerator(address = 283);
                    case 281:
                        return var5;
                    case 283:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (var6) {
                            _fun29110_ip = 874;
                            continue _fun29110
                        }
                    case 292:
                        var17 = var5;
                        var18 = var7;
                        var6 = _closure1_slot21;
                        var6 = var6.PAYMENT_REQUEST;
                        if (!(var18 !== var6)) {
                            _fun29110_ip = 337;
                            continue _fun29110
                        }
                    case 312:
                        var18 = _closure1_slot28;
                        var6 = var20;
                        var6 = var18.bind(var8)(var6);
                        SaveGenerator(address = 328);
                    case 326:
                        return var6;
                    case 328:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 18);
                        if (var18) {
                            _fun29110_ip = 871;
                            continue _fun29110
                        }
                    case 337:
                        var12 = null;
                        var23 = var7;
                        var18 = _closure1_slot21;
                        var18 = var18.CARD;
                        if (!(var23 !== var18)) {
                            _fun29110_ip = 418;
                            continue _fun29110
                        }
                    case 356:
                        var23 = var7;
                        var18 = _closure1_slot21;
                        var18 = var18.PAYMENT_REQUEST;
                        if (!(var23 !== var18)) {
                            _fun29110_ip = 418;
                            continue _fun29110
                        }
                    case 373:
                        var25 = _closure1_slot29;
                        var23 = var10;
                        var18 = var20;
                        var18 = var25.bind(var8)(var23, var18);
                        SaveGenerator(address = 393);
                    case 391:
                        return var18;
                    case 393:
                        ResumeGenerator(result_out_reg = 18, return_bool_out_reg = 23);
                        if (var23) {
                            _fun29110_ip = 415;
                            continue _fun29110
                        }
                    case 399:
                        var23 = var18.paymentMethod;
                        var12 = var23.id;
                        _fun29110_ip = 818;
                        continue _fun29110;
                    case 415:
                        return var18;
                    case 418:
                        var18 = var15;
                        var18 = var18.current;
                        var22 = var18;
                        var23 = var19 != var18;
                        var18 = undefined;
                        if (!var23) {
                            _fun29110_ip = 441;
                            continue _fun29110
                        }
                    case 438:
                        var18 = var22;
                    case 441:
                        var24 = var18;
                        if (!(var19 != var18)) {
                            _fun29110_ip = 465;
                            continue _fun29110
                        }
                    case 448:
                        var22 = var7;
                        var18 = _closure1_slot21;
                        var18 = var18.PAYMENT_REQUEST;
                        if (!(var22 !== var18)) {
                            _fun29110_ip = 519;
                            continue _fun29110
                        }
                    case 465:
                        var23 = var10;
                        var22 = var23.confirmSetup;
                        var18 = {};
                        var25 = 'if_required';
                        var18.redirect = var25;
                        var25 = var20;
                        var18.elements = var25;
                        var22 = var22.bind(var23)(var18);
                        SaveGenerator(address = 504);
                    case 502:
                        return var22;
                    case 504:
                        ResumeGenerator(result_out_reg = 22, return_bool_out_reg = 18);
                        var23 = var18;
                        var18 = var22;
                        if (!var23) {
                            _fun29110_ip = 548;
                            continue _fun29110
                        }
                    case 516:
                        return var22;
                    case 519:
                        var22 = {};
                        var23 = var24;
                        var25 = var19 != var23;
                        var23 = undefined;
                        if (!var25) {
                            _fun29110_ip = 536;
                            continue _fun29110
                        }
                    case 533:
                        var23 = var24;
                    case 536:
                        var22.setupIntent = var23;
                        var22.error = var8;
                        var18 = var22;
                    case 548:
                        var14 = var18;
                        var18 = var18.error;
                        var9 = var18;
                        if (!(var19 != var18)) {
                            _fun29110_ip = 771;
                            continue _fun29110
                        }
                    case 566:
                        var18 = var9;
                        var22 = var18.code;
                        var18 = 'setup_intent_unexpected_state';
                        if (!(var18 === var22)) {
                            _fun29110_ip = 771;
                            continue _fun29110
                        }
                    case 587:
                        var18 = var9;
                        var18 = var18.setup_intent;
                        if (!(var19 != var18)) {
                            _fun29110_ip = 771;
                            continue _fun29110
                        }
                    case 603:
                        var9 = var9.setup_intent;
                        var18 = var9.status;
                        var9 = 'succeeded';
                        if (!(var9 === var18)) {
                            _fun29110_ip = 771;
                            continue _fun29110
                        }
                    case 627:
                        var9 = var7;
                        var7 = _closure1_slot21;
                        var7 = var7.PAYMENT_REQUEST;
                        if (!(var9 !== var7)) {
                            _fun29110_ip = 771;
                            continue _fun29110
                        }
                    case 647:
                        var9 = _closure1_slot0;
                        var18 = _closure1_slot3;
                        var7 = 20;
                        var7 = var18[var7];
                        var9 = var9.bind(var8)(var7);
                        var7 = var9.createSetupIntentForPaymentElements;
                        var7 = var7.bind(var9)();
                        SaveGenerator(address = 681);
                    case 679:
                        return var7;
                    case 681:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 9);
                        if (var9) {
                            _fun29110_ip = 868;
                            continue _fun29110
                        }
                    case 690:
                        var21 = var7.client_secret;
                        var18 = _closure1_slot28;
                        var9 = var20;
                        var9 = var18.bind(var8)(var9);
                        SaveGenerator(address = 712);
                    case 710:
                        return var9;
                    case 712:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 18);
                        if (var18) {
                            _fun29110_ip = 865;
                            continue _fun29110
                        }
                    case 721:
                        var19 = var10;
                        var18 = var19.confirmSetup;
                        var10 = {};
                        var22 = 'if_required';
                        var10.redirect = var22;
                        var10.clientSecret = var21;
                        var10.elements = var20;
                        var10 = var18.bind(var19)(var10);
                        SaveGenerator(address = 762);
                    case 760:
                        return var10;
                    case 762:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 18);
                        if (var18) {
                            _fun29110_ip = 862;
                            continue _fun29110
                        }
                    case 768:
                        var14 = var10;
                    case 771:
                        var20 = _closure1_slot27;
                        var19 = var14.setupIntent;
                        var18 = var14.error;
                        var14 = function(arg0) { // Environment: var14
                            var3 = _closure1_slot39;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = true;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var14 = var20.bind(var8)(var19, var18, var14);
                        var14 = var14.setupIntent;
                        var15.current = var14;
                        var12 = var14.payment_method;
                    case 818:
                        var15 = _closure1_slot37;
                        var13 = _closure1_slot13;
                        var29 = var13.STRIPE;
                        var28 = var12;
                        var27 = var11;
                        var11 = {};
                        var11.billingAddressToken = var17;
                        var11.analyticsLocation = var16;
                        var30 = undefined;
                        var26 = var11;
                        var11 = var30[var15](var29, var28, var27, var26, var25);
                        return var11;
                    case 862:
                        return var10;
                    case 865:
                        return var9;
                    case 868:
                        return var7;
                    case 871:
                        return var6;
                    case 874:
                        return var5;
                    case 877:
                        var7 = _closure1_slot39;
                        var6 = 'Stripe Elements not loaded';
                        var5 = true;
                        var5 = var7.bind(var8)(var6, var5);
                        throw var5;
                    case 900:
                        var7 = _closure1_slot39;
                        var6 = 'Stripe not loaded';
                        var5 = true;
                        var5 = var7.bind(var8)(var6, var5);
                        throw var5;
                    case 923:
                        return var4;
                    case 926: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        _fun29110_ip = 932;
                        continue _fun29110;
                    case 930:
                        CatchBlockStart(arg_register = 1);
                    case 932:
                        if (var3) {
                            _fun29110_ip = 938;
                            continue _fun29110
                        }
                    case 935:
                        var2.return();
                    case 938:
                        throw var1;
                    case 940:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot45 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot45 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun29114: for (var _fun29114_ip = 0;;) switch (_fun29114_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29114_ip = 388;
                            continue _fun29114
                        }
                    case 13:
                        var7 = var1;
                        var15 = arg1;
                        var6 = arg2;
                        var11 = arg3;
                        var3 = undefined;
                        var5 = undefined;
                        var12 = undefined;
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun29114_ip = 368;
                            continue _fun29114
                        }
                    case 40:
                        var1 = var15;
                        if (!(var2 != var1)) {
                            _fun29114_ip = 368;
                            continue _fun29114
                        }
                    case 50:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var4 = 11;
                        var4 = var9[var4];
                        var9 = var8.bind(var3)(var4);
                        var8 = var9.dispatch;
                        var4 = {};
                        var10 = 'BILLING_PAYMENT_SOURCE_CREATE_START';
                        var4.type = var10;
                        var4 = var8.bind(var9)(var4);
                        var5 = null;
                    case 97: // try_start_0
                        var4 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var2 = 20;
                        var2 = var8[var2];
                        var4 = var4.bind(var3)(var2);
                        var2 = var4.createStripeSetupIntent;
                        var2 = var2.bind(var4)();
                        SaveGenerator(address = 131);
                    case 129:
                        return var2;
                    case 131:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun29114_ip = 352;
                            continue _fun29114
                        }
                    case 140:
                        var5 = var2.client_secret;
                    case 146: // try_end0
                        var8 = _closure1_slot34;
                        var4 = var6;
                        var4 = var8.bind(var3)(var4);
                        SaveGenerator(address = 162);
                    case 160:
                        return var4;
                    case 162:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 8);
                        if (var8) {
                            _fun29114_ip = 349;
                            continue _fun29114
                        }
                    case 171:
                        var12 = var4;
                        var9 = _closure1_slot2;
                        var10 = _closure1_slot3;
                        var8 = 21;
                        var8 = var10[var8];
                        var10 = var9.bind(var3)(var8);
                        var9 = var10.parseBillingAddressInfoToStripeBillingDetails;
                        var8 = var6;
                        var13 = var9.bind(var10)(var8);
                        var9 = var7;
                        var8 = var9.confirmCardSetup;
                        var7 = var5;
                        var5 = {};
                        var10 = {};
                        var14 = {};
                        var14.token = var15;
                        var10.card = var14;
                        var10.billing_details = var13;
                        var5.payment_method = var10;
                        var5 = var8.bind(var9)(var7, var5);
                        SaveGenerator(address = 258);
                    case 256:
                        return var5;
                    case 258:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                        if (var7) {
                            _fun29114_ip = 346;
                            continue _fun29114
                        }
                    case 264:
                        var10 = var5.setupIntent;
                        var9 = var5.error;
                        var8 = _closure1_slot27;
                        var7 = function(arg0) { // Environment: var7
                            var2 = _closure1_slot40;
                            var1 = undefined;
                            var0 = arg0;
                            var0 = var2.bind(var1)(var0);
                            return var0;
                        };
                        var7 = var8.bind(var3)(var10, var9, var7);
                        var7 = var7.setupIntent;
                        var10 = _closure1_slot37;
                        var8 = _closure1_slot13;
                        var19 = var8.STRIPE;
                        var18 = var7.payment_method;
                        var17 = var6;
                        var6 = {};
                        var6.billingAddressToken = var12;
                        var6.analyticsLocation = var11;
                        var20 = undefined;
                        var16 = var6;
                        var6 = var20[var10](var19, var18, var17, var16, var15);
                        return var6;
                    case 346:
                        return var5;
                    case 349:
                        return var4;
                    case 352:
                        return var2;
                    case 355: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var1 = _closure1_slot40;
                        var1 = var1.bind(var3)(var2);
                        throw var1;
                    case 368:
                        var2 = _closure1_slot40;
                        var1 = 'Stripe or token not loaded';
                        var1 = var2.bind(var3)(var1);
                        throw var1;
                    case 388:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot46 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot46 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun29118: for (var _fun29118_ip = 0;;) switch (_fun29118_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        var10 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29118_ip = 343;
                            continue _fun29118
                        }
                    case 16:
                        var7 = null;
                        if (!(var7 != var6)) {
                            _fun29118_ip = 321;
                            continue _fun29118
                        }
                    case 25:
                        var1 = _closure1_slot34;
                        var5 = undefined;
                        var1 = var1.bind(var5)(var10);
                        SaveGenerator(address = 43);
                    case 41:
                        return var1;
                    case 43:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29118_ip = 318;
                            continue _fun29118
                        }
                    case 52:
                        var9 = var10.name;
                        var17 = var10.line1;
                        var16 = var10.line2;
                        var15 = var10.city;
                        var14 = var10.state;
                        var13 = var10.postalCode;
                        var12 = var10.country;
                        var8 = _closure1_slot24;
                        var4 = var8.get;
                        var2 = arg2;
                        var8 = var4.bind(var8)(var2);
                        var4 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var2 = 19;
                        var2 = var11[var2];
                        var11 = var4.bind(var5)(var2);
                        var4 = var7 != var8;
                        var2 = 'unsupported payment method type';
                        var2 = var11.bind(var5)(var4, var2);
                        var4 = var6.createPaymentMethod;
                        var2 = {};
                        var2.type = var8;
                        var8 = {};
                        var11 = {};
                        var11.line1 = var17;
                        var11.line2 = var16;
                        var11.city = var15;
                        var11.state = var14;
                        var11.postal_code = var13;
                        var11.country = var12;
                        var8.address = var11;
                        var8.name = var9;
                        var2.billing_details = var8;
                        var2 = var4.bind(var6)(var2);
                        SaveGenerator(address = 213);
                    case 211:
                        return var2;
                    case 213:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun29118_ip = 315;
                            continue _fun29118
                        }
                    case 219:
                        var6 = var2.paymentMethod;
                        var4 = var2.error;
                        if (!(var7 == var4)) {
                            _fun29118_ip = 304;
                            continue _fun29118
                        }
                    case 234:
                        if (!(var7 != var6)) {
                            _fun29118_ip = 287;
                            continue _fun29118
                        }
                    case 238:
                        var9 = _closure1_slot37;
                        var7 = _closure1_slot13;
                        var21 = var7.STRIPE;
                        var20 = var6.id;
                        var6 = {};
                        var6.billingAddressToken = var1;
                        var11 = arg3;
                        var6.analyticsLocation = var11;
                        var22 = undefined;
                        var19 = var10;
                        var18 = var6;
                        var6 = var22[var9](var21, var20, var19, var18, var17);
                        return var6;
                    case 287:
                        var7 = _closure1_slot40;
                        var6 = 'stripePaymentMethod not available with successful stripe call';
                        var6 = var7.bind(var5)(var6);
                        throw var6;
                    case 304:
                        var3 = _closure1_slot40;
                        var3 = var3.bind(var5)(var4);
                        throw var3;
                    case 315:
                        return var2;
                    case 318:
                        return var1;
                    case 321:
                        var3 = _closure1_slot40;
                        var2 = undefined;
                        var1 = 'Stripe not loaded';
                        var1 = var3.bind(var2)(var1);
                        throw var1;
                    case 343:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot47 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot47 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun29121: for (var _fun29121_ip = 0;;) switch (_fun29121_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29121_ip = 126;
                            continue _fun29121
                        }
                    case 10:
                        var1 = _closure1_slot34;
                        var6 = undefined;
                        var1 = var1.bind(var6)(var7);
                        SaveGenerator(address = 28);
                    case 26:
                        return var1;
                    case 28:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29121_ip = 123;
                            continue _fun29121
                        }
                    case 34:
                        var8 = {};
                        var5 = _closure1_slot19;
                        var4 = var5.get;
                        var3 = arg1;
                        var3 = var4.bind(var5)(var3);
                        var8.type = var3;
                        var5 = _closure1_slot37;
                        var2 = _closure1_slot13;
                        var4 = var2.ADYEN;
                        var2 = global;
                        var3 = var2.JSON;
                        var2 = var3.stringify;
                        var11 = var2.bind(var3)(var8);
                        var2 = {};
                        var2.billingAddressToken = var1;
                        var8 = arg2;
                        var2.analyticsLocation = var8;
                        var13 = undefined;
                        var12 = var4;
                        var10 = var7;
                        var9 = var2;
                        var2 = var13[var5](var12, var11, var10, var9, var8);
                        return var2;
                    case 123:
                        return var1;
                    case 126:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot48 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot48 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun29124: for (var _fun29124_ip = 0;;) switch (_fun29124_ip) {
                    case 0:
                        StartGenerator();
                        var20 = arg1;
                        var13 = arg3;
                        var1 = arguments[4];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29124_ip = 648;
                            continue _fun29124
                        }
                    case 19:
                        var9 = arg0;
                        var17 = arg2;
                        var12 = undefined;
                        if (!(var1 === var12)) {
                            _fun29124_ip = 33;
                            continue _fun29124
                        }
                    case 31:
                        var1 = false;
                    case 33:
                        var6 = var1;
                        var18 = undefined;
                        var11 = undefined;
                        var16 = undefined;
                        var5 = undefined;
                        SaveGenerator(address = 48);
                    case 46:
                        return var12;
                    case 48:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29124_ip = 645;
                            continue _fun29124
                        }
                    case 57:
                        var3 = _closure1_slot34;
                        var2 = var9;
                        var2 = var3.bind(var12)(var2);
                        SaveGenerator(address = 76);
                    case 74:
                        return var2;
                    case 76:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29124_ip = 642;
                            continue _fun29124
                        }
                    case 85:
                        var18 = var2;
                        var3 = {};
                        var10 = _closure1_slot19;
                        var7 = var10.get;
                        var7 = var7.bind(var10)(var20);
                        var3.type = var7;
                        var10 = null;
                        var14 = var10 == var13;
                        var7 = undefined;
                        if (var14) {
                            _fun29124_ip = 125;
                            continue _fun29124
                        }
                    case 119:
                        var7 = var13.paymentMethod;
                    case 125:
                        if (!(var10 == var7)) {
                            _fun29124_ip = 131;
                            continue _fun29124
                        }
                    case 129:
                        var7 = {};
                    case 131:
                        var25 = var3;
                        var24 = var7;
                        var7 = copyDataProperties(var25, var24);
                        var11 = var3;
                        var3 = _closure1_slot77;
                        var3 = var3.bind(var12)(var20);
                        SaveGenerator(address = 157);
                    case 155:
                        return var3;
                    case 157:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 7);
                        if (var7) {
                            _fun29124_ip = 639;
                            continue _fun29124
                        }
                    case 166:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var7 = 12;
                        var7 = var14[var7];
                        var13 = var13.bind(var12)(var7);
                        var7 = var13.getAPIBaseURL;
                        var13 = var7.bind(var13)();
                        var19 = _closure1_slot12;
                        var15 = var19.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                        var7 = var10 != var3;
                        var14 = '';
                        if (!var7) {
                            _fun29124_ip = 220;
                            continue _fun29124
                        }
                    case 217:
                        var14 = var3;
                    case 220:
                        var7 = 'success';
                        var7 = var15.bind(var19)(var20, var14, var7);
                        var16 = var13 + var7;
                    case 235: // try_start_0
                        var7 = {};
                        var15 = _closure1_slot37;
                        var13 = _closure1_slot13;
                        var14 = var13.ADYEN;
                        var13 = global;
                        var19 = var13.JSON;
                        var13 = var19.stringify;
                        var24 = var13.bind(var19)(var11);
                        var23 = var9;
                        var9 = {};
                        var9.billingAddressToken = var18;
                        var9.analyticsLocation = var17;
                        var9.returnUrl = var16;
                        var21 = var6;
                        var26 = undefined;
                        var25 = var14;
                        var22 = var9;
                        var6 = var26[var15](var25, var24, var23, var22, var21, var20);
                        SaveGenerator(address = 309);
                    case 307:
                        return var6;
                    case 309:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 9);
                        if (var9) {
                            _fun29124_ip = 330;
                            continue _fun29124
                        }
                    case 315:
                        var7.paymentSource = var6;
                        var9 = false;
                        var7.redirectConfirmation = var9;
                    case 327: // try_end0
                        return var7;
                    case 330:
                        return var6;
                    case 333: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var4 = var6;
                        var7 = var6.code;
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var6 = 14;
                        var6 = var11[var6];
                        var6 = var9.bind(var12)(var6);
                        var6 = var6.ErrorCodes;
                        var6 = var6.CONFIRMATION_REQUIRED;
                        if (!(var7 === var6)) {
                            _fun29124_ip = 439;
                            continue _fun29124
                        }
                    case 379:
                        var6 = var4;
                        var6 = var6.fields;
                        var6 = var6.adyen_redirect_url;
                        var5 = var6;
                        if (!(var10 != var6)) {
                            _fun29124_ip = 422;
                            continue _fun29124
                        }
                    case 401:
                        var6 = _closure1_slot70;
                        var5 = var6.bind(var12)(var5);
                        var5 = {};
                        var6 = true;
                        var5.redirectConfirmation = var6;
                        return var5;
                    case 422:
                        var6 = _closure1_slot40;
                        var5 = 'redirect url cannot be null on a redirect for adyen.';
                        var5 = var6.bind(var12)(var5);
                        throw var5;
                    case 439:
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var5 = 11;
                        var5 = var9[var5];
                        var7 = var6.bind(var12)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var11 = 'BILLING_PAYMENT_SOURCE_CREATE_FAIL';
                        var5.type = var11;
                        var11 = _closure1_slot0;
                        var13 = 13;
                        var9 = var9[var13];
                        var9 = var11.bind(var12)(var9);
                        var11 = var9.BillingError;
                        var9 = var4;
                        var9 = var10 == var9;
                        var16 = undefined;
                        if (var9) {
                            _fun29124_ip = 518;
                            continue _fun29124
                        }
                    case 510:
                        var9 = var4;
                        var16 = var9.code;
                    case 518:
                        var9 = var4;
                        var9 = var10 == var9;
                        var15 = undefined;
                        if (var9) {
                            _fun29124_ip = 538;
                            continue _fun29124
                        }
                    case 530:
                        var9 = var4;
                        var15 = var9.message;
                    case 538:
                        var9 = global;
                        var9 = var9.HermesInternal;
                        var14 = var9.concat;
                        var10 = 'Unable to create payment source token: code: ';
                        var9 = ' message: ';
                        var10 = var14.bind(var10)(var16, var9, var15);
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var8 = var8[var13];
                        var8 = var9.bind(var12)(var8);
                        var8 = var8.BillingError;
                        var8 = var8.ErrorCodes;
                        var24 = var8.UNKNOWN;
                        var9 = var11.prototype;
                        var9 = Object.create(var9, {
                            constructor: {
                                value: var11
                            }
                        });
                        var26 = var9;
                        var25 = var10;
                        var8 = new var26[var11](var25, var24, var23);
                        var8 = var8 instanceof Object ? var8 : var9;
                        var5.error = var8;
                        var5 = var6.bind(var7)(var5);
                        throw var4;
                    case 639:
                        return var3;
                    case 642:
                        return var2;
                    case 645:
                        return var1;
                    case 648:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot49 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot49 = var0;
    var9 = function() {
        var0 = undefined;
        var3 = _closure1_slot51;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot50 = var9;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29128: for (var _fun29128_ip = 0;;) switch (_fun29128_ip) {
                    case 0:
                        StartGenerator();
                        var8 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29128_ip = 1009;
                            continue _fun29128
                        }
                    case 13:
                        var4 = _closure1_slot16;
                        var3 = var4.has;
                        var1 = var8.type;
                        var1 = var3.bind(var4)(var1);
                        if (var1) {
                            _fun29128_ip = 1004;
                            continue _fun29128
                        }
                    case 41:
                        var3 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var1 = 21;
                        var1 = var4[var1];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var1);
                        var1 = var3.getStripe;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 77);
                    case 75:
                        return var1;
                    case 77:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29128_ip = 1001;
                            continue _fun29128
                        }
                    case 86:
                        var6 = null;
                        if (!(var6 != var1)) {
                            _fun29128_ip = 920;
                            continue _fun29128
                        }
                    case 95:
                        var3 = var8.billingAddress;
                        var7 = var3.email;
                        var10 = var3.name;
                        var16 = var3.line1;
                        var15 = var3.line2;
                        var14 = var3.city;
                        var13 = var3.state;
                        var12 = var3.postalCode;
                        var9 = var3.country;
                        var5 = {};
                        var3 = {};
                        var11 = {};
                        var11.line1 = var16;
                        var11.line2 = var15;
                        var11.city = var14;
                        var11.state = var13;
                        var11.postal_code = var12;
                        var11.country = var9;
                        var3.address = var11;
                        var3.name = var10;
                        var5.billing_details = var3;
                        var10 = var8.type;
                        var3 = _closure1_slot21;
                        var3 = var3.GIROPAY;
                        if (!(var3 !== var10)) {
                            _fun29128_ip = 667;
                            continue _fun29128
                        }
                    case 218:
                        var3 = _closure1_slot21;
                        var3 = var3.SOFORT;
                        if (!(var3 !== var10)) {
                            _fun29128_ip = 616;
                            continue _fun29128
                        }
                    case 235:
                        var3 = _closure1_slot21;
                        var3 = var3.BANCONTACT;
                        if (!(var3 !== var10)) {
                            _fun29128_ip = 602;
                            continue _fun29128
                        }
                    case 252:
                        var3 = _closure1_slot21;
                        var3 = var3.IDEAL;
                        if (!(var3 !== var10)) {
                            _fun29128_ip = 571;
                            continue _fun29128
                        }
                    case 269:
                        var3 = _closure1_slot21;
                        var3 = var3.PRZELEWY24;
                        if (!(var3 !== var10)) {
                            _fun29128_ip = 428;
                            continue _fun29128
                        }
                    case 286:
                        var3 = _closure1_slot21;
                        var3 = var3.EPS;
                        if (!(var3 === var10)) {
                            _fun29128_ip = 679;
                            continue _fun29128
                        }
                    case 303:
                        var3 = var8.bank;
                        if (!(var6 != var3)) {
                            _fun29128_ip = 347;
                            continue _fun29128
                        }
                    case 313:
                        var3 = 'eps';
                        var5.type = var3;
                        var3 = {};
                        var10 = var8.bank;
                        var3.bank = var10;
                        var5.eps = var3;
                        _fun29128_ip = 679;
                        continue _fun29128;
                    case 347:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var3 = 13;
                        var12 = var11[var3];
                        var12 = var10.bind(var4)(var12);
                        var12 = var12.BillingError;
                        var3 = var11[var3];
                        var3 = var10.bind(var4)(var3);
                        var3 = var3.BillingError;
                        var3 = var3.ErrorCodes;
                        var18 = var3.UNKNOWN_PAYMENT_SOURCE;
                        var3 = var12.prototype;
                        var10 = Object.create(var3, {
                            constructor: {
                                value: var12
                            }
                        });
                        var19 = 'EPS missing bank information';
                        var20 = var10;
                        var3 = new var20[var12](var19, var18, var17);
                        var3 = var3 instanceof Object ? var3 : var10;
                        throw var3;
                    case 428:
                        var3 = var8.bank;
                        if (!(var6 != var3)) {
                            _fun29128_ip = 490;
                            continue _fun29128
                        }
                    case 438:
                        var3 = 'p24';
                        var5.type = var3;
                        var3 = {};
                        var10 = var8.bank;
                        var3.bank = var10;
                        var5.p24 = var3;
                        var10 = var5.billing_details;
                        var3 = var8.email;
                        var10.email = var3;
                        _fun29128_ip = 679;
                        continue _fun29128;
                    case 490:
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var3 = 13;
                        var12 = var11[var3];
                        var12 = var10.bind(var4)(var12);
                        var12 = var12.BillingError;
                        var3 = var11[var3];
                        var3 = var10.bind(var4)(var3);
                        var3 = var3.BillingError;
                        var3 = var3.ErrorCodes;
                        var18 = var3.UNKNOWN_PAYMENT_SOURCE;
                        var3 = var12.prototype;
                        var10 = Object.create(var3, {
                            constructor: {
                                value: var12
                            }
                        });
                        var19 = 'p24 missing bank information';
                        var20 = var10;
                        var3 = new var20[var12](var19, var18, var17);
                        var3 = var3 instanceof Object ? var3 : var10;
                        throw var3;
                    case 571:
                        var3 = 'ideal';
                        var5.type = var3;
                        var3 = {};
                        var8 = var8.bank;
                        var3.bank = var8;
                        var5.ideal = var3;
                        _fun29128_ip = 679;
                        continue _fun29128;
                    case 602:
                        var3 = 'bancontact';
                        var5.type = var3;
                        _fun29128_ip = 679;
                        continue _fun29128;
                    case 616:
                        var3 = 'sofort';
                        var5.type = var3;
                        var3 = {};
                        var10 = var6 != var9;
                        var8 = '';
                        if (!var10) {
                            _fun29128_ip = 642;
                            continue _fun29128
                        }
                    case 639:
                        var8 = var9;
                    case 642:
                        var3.country = var8;
                        var5.sofort = var3;
                        var3 = var5.billing_details;
                        var3.email = var7;
                        _fun29128_ip = 679;
                        continue _fun29128;
                    case 667:
                        var3 = 'giropay';
                        var5.type = var3;
                    case 679:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var3 = 19;
                        var3 = var8[var3];
                        var8 = var7.bind(var4)(var3);
                        var3 = var5.type;
                        var7 = var6 != var3;
                        var3 = 'unsupported payment method type';
                        var3 = var8.bind(var4)(var7, var3);
                        var3 = var1.createPaymentMethod;
                        var3 = var3.bind(var1)(var5);
                        SaveGenerator(address = 735);
                    case 733:
                        return var3;
                    case 735:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun29128_ip = 917;
                            continue _fun29128
                        }
                    case 744:
                        var7 = var3.paymentMethod;
                        var5 = var3.error;
                        if (!(var6 == var5)) {
                            _fun29128_ip = 771;
                            continue _fun29128
                        }
                    case 759:
                        if (!(var6 != var7)) {
                            _fun29128_ip = 771;
                            continue _fun29128
                        }
                    case 763:
                        var7 = var7.id;
                        return var7;
                    case 771:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var9 = 13;
                        var7 = var7[var9];
                        var7 = var8.bind(var4)(var7);
                        var8 = var7.BillingError;
                        var7 = var6 == var5;
                        var11 = undefined;
                        if (var7) {
                            _fun29128_ip = 811;
                            continue _fun29128
                        }
                    case 806:
                        var11 = var5.code;
                    case 811:
                        var6 = var6 == var5;
                        var10 = undefined;
                        if (var6) {
                            _fun29128_ip = 825;
                            continue _fun29128
                        }
                    case 820:
                        var10 = var5.message;
                    case 825:
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var7 = var5.concat;
                        var6 = 'Unable to create payment source token: code: ';
                        var5 = ' message: ';
                        var7 = var7.bind(var6)(var11, var5, var10);
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var5 = var5[var9];
                        var5 = var6.bind(var4)(var5);
                        var5 = var5.BillingError;
                        var5 = var5.ErrorCodes;
                        var18 = var5.UNKNOWN;
                        var6 = var8.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var8
                            }
                        });
                        var20 = var6;
                        var19 = var7;
                        var5 = new var20[var8](var19, var18, var17);
                        var5 = var5 instanceof Object ? var5 : var6;
                        throw var5;
                    case 917:
                        return var3;
                    case 920:
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var2 = 13;
                        var5 = var6[var2];
                        var5 = var3.bind(var4)(var5);
                        var5 = var5.BillingError;
                        var2 = var6[var2];
                        var2 = var3.bind(var4)(var2);
                        var2 = var2.BillingError;
                        var2 = var2.ErrorCodes;
                        var18 = var2.UNKNOWN;
                        var2 = var5.prototype;
                        var3 = Object.create(var2, {
                            constructor: {
                                value: var5
                            }
                        });
                        var19 = 'Stripe not loaded';
                        var20 = var3;
                        var2 = new var20[var5](var19, var18, var17);
                        var2 = var2 instanceof Object ? var2 : var3;
                        throw var2;
                    case 1001:
                        return var1;
                    case 1004:
                        var1 = null;
                        return var1;
                    case 1009:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot51 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot51 = var0;
    var8 = function arg0() {
        _fun29129: for (var _fun29129_ip = 0;;) switch (_fun29129_ip) {
            case 0:
                var4 = arg0;
                var3 = _closure1_slot16;
                var1 = var3.has;
                var0 = var4.type;
                var1 = var1.bind(var3)(var0);
                var0 = null;
                if (var1) {
                    _fun29129_ip = 79;
                    continue _fun29129
                }
            case 30:
                var5 = _closure1_slot19;
                var3 = var5.has;
                var1 = var4.type;
                var1 = var3.bind(var5)(var1);
                if (var1) {
                    _fun29129_ip = 65;
                    continue _fun29129
                }
            case 52:
                var3 = _closure1_slot50;
                var1 = undefined;
                var1 = var3.bind(var1)(var4);
                _fun29129_ip = 76;
                continue _fun29129;
            case 65:
                var3 = _closure1_slot36;
                var2 = undefined;
                var1 = var3.bind(var2)(var4);
            case 76:
                var0 = var1;
            case 79:
                return var0;
        }
    };
    var _closure1_slot52 = var8;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun29132: for (var _fun29132_ip = 0;;) switch (_fun29132_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29132_ip = 246;
                            continue _fun29132
                        }
                    case 12:
                        var1 = undefined;
                        var _closure4_slot0 = var1;
                        var2 = _closure1_slot9;
                        var2 = var2.isPaymentSourceFetching;
                        if (var2) {
                            _fun29132_ip = 243;
                            continue _fun29132
                        }
                    case 37: // try_start_0
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var2 = 12;
                        var2 = var5[var2];
                        var2 = var6.bind(var1)(var2);
                        var7 = var2.HTTP;
                        var6 = var7.get;
                        var2 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var8 = _closure1_slot12;
                        var8 = var8.BILLING_PAYMENT_SOURCES;
                        var2.url = var8;
                        var2 = var6.bind(var7)(var2);
                        _closure4_slot0 = var2;
                        var7 = _closure1_slot1;
                        var6 = 11;
                        var5 = var5[var6];
                        var7 = var7.bind(var1)(var5);
                        var5 = var7.wait;
                        var4 = function() { // Environment: var4
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'BILLING_PAYMENT_SOURCES_FETCH_START';
                            var0.type = var3;
                            var3 = _closure4_slot0;
                            var0.request = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var4 = var5.bind(var7)(var4);
                        SaveGenerator(address = 138);
                    case 136:
                        return var2;
                    case 138:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun29132_ip = 194;
                            continue _fun29132
                        }
                    case 144:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var4 = var4[var6];
                        var6 = var5.bind(var1)(var4);
                        var5 = var6.dispatch;
                        var4 = {};
                        var7 = 'BILLING_PAYMENT_SOURCES_FETCH_SUCCESS';
                        var4.type = var7;
                        var7 = var2.body;
                        var4.paymentSources = var7;
                        var4 = var5.bind(var6)(var4);
                    case 191: // try_end0
                        return var2;
                    case 194:
                        return var2;
                    case 197: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var3 = 11;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_PAYMENT_SOURCES_FETCH_FAIL';
                        var3.type = var6;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
                    case 243:
                        return var1;
                    case 246:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot53 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot53 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29136: for (var _fun29136_ip = 0;;) switch (_fun29136_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29136_ip = 218;
                            continue _fun29136
                        }
                    case 10:
                        var6 = arg0;
                    case 13: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 12;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.get;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var8 = _closure1_slot12;
                        var7 = var8.BILLING_PAYMENT_SOURCE;
                        var6 = var7.bind(var8)(var6);
                        var1.url = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 88);
                    case 86:
                        return var1;
                    case 88:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29136_ip = 164;
                            continue _fun29136
                        }
                    case 94:
                        var6 = _closure1_slot7;
                        var5 = var6.createFromServer;
                        var3 = var1.body;
                        var5 = var5.bind(var6)(var3);
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var2 = 11;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'BILLING_PAYMENT_SOURCE_FETCH_SUCCESS';
                        var2.type = var6;
                        var2.paymentSource = var5;
                        var2 = var3.bind(var4)(var2);
                    case 161: // try_end0
                        return var1;
                    case 164:
                        return var1;
                    case 167: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 11;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BILLING_PAYMENT_SOURCE_FETCH_FAIL';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 218:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot54 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot54 = var0;
    var7 = function() {
        var0 = undefined;
        var3 = _closure1_slot56;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot55 = var7;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29140: for (var _fun29140_ip = 0;;) switch (_fun29140_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29140_ip = 148;
                            continue _fun29140
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 12;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.get;
                        var1 = {};
                        var8 = _closure1_slot12;
                        var7 = var8.BILLING_PAYMENT;
                        var6 = arg0;
                        var6 = var7.bind(var8)(var6);
                        var1.url = var6;
                        var6 = true;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 84);
                    case 82:
                        return var1;
                    case 84:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29140_ip = 145;
                            continue _fun29140
                        }
                    case 90:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var2 = 11;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BILLING_PAYMENT_FETCH_SUCCESS';
                        var2.type = var5;
                        var5 = var1.body;
                        var2.payment = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 145:
                        return var1;
                    case 148:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot56 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot56 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun29143: for (var _fun29143_ip = 0;;) switch (_fun29143_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29143_ip = 277;
                            continue _fun29143
                        }
                    case 13:
                        var5 = undefined;
                        if (!(var1 === var5)) {
                            _fun29143_ip = 22;
                            continue _fun29143
                        }
                    case 19:
                        var1 = 10;
                    case 22:
                        var10 = var1;
                        var9 = arguments[1];
                        SaveGenerator(address = 32);
                    case 30:
                        return var5;
                    case 32:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29143_ip = 274;
                            continue _fun29143
                        }
                    case 41:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var6 = 11;
                        var2 = var2[var6];
                        var7 = var4.bind(var5)(var2);
                        var4 = var7.dispatch;
                        var2 = {};
                        var8 = 'BILLING_PAYMENTS_FETCH_START';
                        var2.type = var8;
                        var2 = var4.bind(var7)(var2);
                    case 86: // try_start_0
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var2 = 12;
                        var2 = var7[var2];
                        var2 = var4.bind(var5)(var2);
                        var7 = var2.HTTP;
                        var4 = var7.get;
                        var2 = {};
                        var8 = _closure1_slot12;
                        var8 = var8.BILLING_PAYMENTS;
                        var2.url = var8;
                        var8 = {};
                        var8.limit = var10;
                        var8.before = var9;
                        var2.query = var8;
                        var8 = true;
                        var2.oldFormErrors = var8;
                        var8 = false;
                        var2.rejectWithError = var8;
                        var2 = var4.bind(var7)(var2);
                        SaveGenerator(address = 170);
                    case 168:
                        return var2;
                    case 170:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun29143_ip = 228;
                            continue _fun29143
                        }
                    case 176:
                        var7 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var4 = var4[var6];
                        var8 = var7.bind(var5)(var4);
                        var7 = var8.dispatch;
                        var4 = {};
                        var9 = 'BILLING_PAYMENTS_FETCH_SUCCESS';
                        var4.type = var9;
                        var9 = var2.body;
                        var4.payments = var9;
                        var4 = var7.bind(var8)(var4);
                    case 225: // try_end0
                        return var2;
                    case 228:
                        return var2;
                    case 231: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var3 = var3[var6];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_PAYMENTS_FETCH_FAIL';
                        var3.type = var6;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
                    case 274:
                        return var1;
                    case 277:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot57 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot57 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun29146: for (var _fun29146_ip = 0;;) switch (_fun29146_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29146_ip = 485;
                            continue _fun29146
                        }
                    case 10:
                        var4 = undefined;
                        var11 = undefined;
                        var10 = undefined;
                        var3 = undefined;
                        var6 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var5 = 11;
                        var1 = var1[var5];
                        var7 = var6.bind(var4)(var1);
                        var6 = var7.wait;
                        var1 = function() { // Environment: var1
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'BILLING_SUBSCRIPTION_FETCH_START';
                            var1.type = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var1 = var6.bind(var7)(var1);
                    case 59: // try_start_0
                        var1 = _closure1_slot17;
                        var11 = var1.ADD_PERKS_IF_DETECTED;
                        var6 = _closure1_slot10;
                        var1 = var6.getLastLazyPerkSync;
                        var6 = var1.bind(var6)();
                        var10 = var6;
                        var7 = null;
                        var6 = var7 == var6;
                        var1 = var6;
                        if (var6) {
                            _fun29146_ip = 150;
                            continue _fun29146
                        }
                    case 100:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot3;
                        var6 = 22;
                        var6 = var9[var6];
                        var6 = var8.bind(var4)(var6);
                        var12 = var6.bind(var4)();
                        var9 = var12.diff;
                        var8 = var10;
                        var6 = 'hours';
                        var8 = var9.bind(var12)(var8, var6);
                        var6 = 1;
                        var1 = var8 >= var6;
                    case 150:
                        if (!var1) {
                            _fun29146_ip = 187;
                            continue _fun29146
                        }
                    case 153:
                        var1 = _closure1_slot17;
                        var11 = var1.FULL_RESYNC;
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot3;
                        var1 = 22;
                        var1 = var8[var1];
                        var1 = var6.bind(var4)(var1);
                        var10 = var1.bind(var4)();
                    case 187:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var1 = 12;
                        var1 = var8[var1];
                        var1 = var6.bind(var4)(var1);
                        var8 = var1.HTTP;
                        var6 = var8.get;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var9 = _closure1_slot12;
                        var9 = var9.BILLING_SUBSCRIPTIONS;
                        var1.url = var9;
                        var9 = {};
                        var9.sync_level = var11;
                        var1.query = var9;
                        var1 = var6.bind(var8)(var1);
                        SaveGenerator(address = 266);
                    case 264:
                        return var1;
                    case 266:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun29146_ip = 439;
                            continue _fun29146
                        }
                    case 275:
                        var3 = var1;
                        var6 = var1.body;
                        if (!(var7 != var6)) {
                            _fun29146_ip = 345;
                            continue _fun29146
                        }
                    case 287:
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var6 = var6[var5];
                        var9 = var7.bind(var4)(var6);
                        var8 = var9.dispatch;
                        var7 = {};
                        var6 = 'BILLING_SUBSCRIPTION_FETCH_SUCCESS';
                        var7.type = var6;
                        var6 = var3;
                        var11 = var6.body;
                        var7.subscriptions = var11;
                        var7.lastLazyPerkSync = var10;
                        var7 = var8.bind(var9)(var7);
                    case 342: // try_end0
                        return var6;
                    case 345: // try_start_1
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var6 = 13;
                        var6 = var8[var6];
                        var6 = var7.bind(var4)(var6);
                        var8 = var6.BillingError;
                        var6 = global;
                        var9 = var6.JSON;
                        var7 = var9.stringify;
                        var9 = var7.bind(var9)(var3);
                        var6 = var6.HermesInternal;
                        var7 = var6.concat;
                        var6 = 'response body is null, response: ';
                        var14 = var7.bind(var6)(var9);
                        var13 = var3.status;
                        var6 = var8.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var8
                            }
                        });
                        var15 = var6;
                        var3 = new var15[var8](var14, var13, var12);
                        var3 = var3 instanceof Object ? var3 : var6;
                        throw var3;
                    case 439: // try_end1
                        return var1;
                    case 442: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var2 = var2[var5];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BILLING_SUBSCRIPTION_FETCH_FAIL';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 485:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot58 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot58 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun29150: for (var _fun29150_ip = 0;;) switch (_fun29150_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29150_ip = 218;
                            continue _fun29150
                        }
                    case 10:
                        var5 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var4 = 11;
                        var3 = var1[var4];
                        var1 = undefined;
                        var6 = var5.bind(var1)(var3);
                        var5 = var6.wait;
                        var3 = function() { // Environment: var3
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'BILLING_PERKS_RELEVANCE_FETCH_START';
                            var1.type = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var3 = var5.bind(var6)(var3);
                    case 53: // try_start_0
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var3 = 12;
                        var3 = var6[var3];
                        var3 = var5.bind(var1)(var3);
                        var6 = var3.HTTP;
                        var5 = var6.get;
                        var3 = {};
                        var7 = _closure1_slot12;
                        var7 = var7.BILLING_PERKS_RELEVANCE;
                        var3.url = var7;
                        var7 = true;
                        var3.rejectWithError = var7;
                        var3 = var5.bind(var6)(var3);
                        SaveGenerator(address = 114);
                    case 112:
                        return var3;
                    case 114:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun29150_ip = 171;
                            continue _fun29150
                        }
                    case 120:
                        var6 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var5 = var5[var4];
                        var7 = var6.bind(var1)(var5);
                        var6 = var7.dispatch;
                        var5 = {};
                        var8 = 'BILLING_PERKS_RELEVANCE_FETCH_SUCCESS';
                        var5.type = var8;
                        var8 = var3.body;
                        var5.res = var8;
                        var5 = var6.bind(var7)(var5);
                    case 169: // try_end0
                        _fun29150_ip = 215;
                        continue _fun29150;
                    case 171:
                        return var3;
                    case 174: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BILLING_PERKS_RELEVANCE_FETCH_FAIL';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                    case 215:
                        return var1;
                    case 218:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot59 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot59 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun29154: for (var _fun29154_ip = 0;;) switch (_fun29154_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29154_ip = 289;
                            continue _fun29154
                        }
                    case 10: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 12;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.get;
                        var1 = {};
                        var6 = _closure1_slot12;
                        var6 = var6.BILLING_NITRO_AFFINITY;
                        var1.url = var6;
                        var6 = true;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 76);
                    case 74:
                        return var1;
                    case 76:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29154_ip = 193;
                            continue _fun29154
                        }
                    case 82:
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var6 = 11;
                        var3 = var3[var6];
                        var7 = var5.bind(var4)(var3);
                        var5 = var7.dispatch;
                        var3 = {};
                        var8 = 'BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED';
                        var3.type = var8;
                        var10 = var1.body;
                        var9 = var10.map;
                        var8 = function(arg0) { // Environment: var8
                            var2 = _closure1_slot8;
                            var0 = var2.prototype;
                            var1 = Object.create(var0, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var3 = arg0;
                            var4 = var1;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        };
                        var8 = var9.bind(var10)(var8);
                        var3.res = var8;
                        var3 = var5.bind(var7)(var3);
                    case 151: // try_end0
                        var5 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var3 = var3[var6];
                        var6 = var5.bind(var4)(var3);
                        var5 = var6.dispatch;
                        var3 = {};
                        var7 = 'BILLING_NITRO_AFFINITY_FETCHED';
                        var3.type = var7;
                        var3 = var5.bind(var6)(var3);
                        return var4;
                    case 193:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var2 = 11;
                        var2 = var5[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BILLING_NITRO_AFFINITY_FETCHED';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 238: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var2 = 11;
                        var3 = var3[var2];
                        var2 = undefined;
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BILLING_NITRO_AFFINITY_FETCHED';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 289:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot60 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot60 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun29158: for (var _fun29158_ip = 0;;) switch (_fun29158_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29158_ip = 407;
                            continue _fun29158
                        }
                    case 10:
                        var1 = undefined;
                        var5 = undefined;
                        var6 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var4 = 11;
                        var3 = var3[var4];
                        var7 = var6.bind(var1)(var3);
                        var6 = var7.wait;
                        var3 = function() { // Environment: var3
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.dispatch;
                            var1 = {};
                            var4 = 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_START';
                            var1.type = var4;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var3 = var6.bind(var7)(var3);
                    case 55: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var3 = 12;
                        var3 = var7[var3];
                        var3 = var6.bind(var1)(var3);
                        var7 = var3.HTTP;
                        var6 = var7.get;
                        var3 = {};
                        var8 = _closure1_slot12;
                        var8 = var8.BILLING_SUBSCRIPTIONS;
                        var3.url = var8;
                        var9 = {
                            'include_inactive': true,
                            'limit': 2,
                            'exclude_unpaid_statuses': true
                        };
                        var8 = true;
                        var10 = _closure1_slot25;
                        var10 = var10.PREMIUM;
                        var9.subscription_type = var10;
                        var3.query = var9;
                        var3.oldFormErrors = var8;
                        var3.rejectWithError = var8;
                        var3 = var6.bind(var7)(var3);
                        SaveGenerator(address = 155);
                    case 153:
                        return var3;
                    case 155:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun29158_ip = 360;
                            continue _fun29158
                        }
                    case 164:
                        var5 = var3;
                        var6 = var3.ok;
                        var8 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var7 = var7[var4];
                        var8 = var8.bind(var1)(var7);
                        var7 = var8.dispatch;
                        if (var6) {
                            _fun29158_ip = 220;
                            continue _fun29158
                        }
                    case 198:
                        var6 = {};
                        var9 = 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL';
                        var6.type = var9;
                        var6 = var7.bind(var8)(var6);
                        _fun29158_ip = 357;
                        continue _fun29158;
                    case 220:
                        var6 = {};
                        var9 = 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_SUCCESS';
                        var6.type = var9;
                        var9 = var5;
                        var9 = var9.body;
                        var9 = var9.length;
                        var12 = 0;
                        var11 = var9 > var12;
                        var10 = null;
                        if (!var11) {
                            _fun29158_ip = 266;
                            continue _fun29158
                        }
                    case 254:
                        var11 = var5;
                        var11 = var11.body;
                        var10 = var11[var12];
                    case 266:
                        var6.subscription = var10;
                        var6 = var7.bind(var8)(var6);
                        var7 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var6 = var6[var4];
                        var8 = var7.bind(var1)(var6);
                        var7 = var8.dispatch;
                        var6 = {};
                        var10 = 'BILLING_PREVIOUS_PREMIUM_SUBSCRIPTION_FETCH_SUCCESS';
                        var6.type = var10;
                        var10 = var5;
                        var10 = var10.body;
                        var10 = var10.length;
                        var11 = 1;
                        var10 = var10 > var11;
                        var9 = null;
                        if (!var10) {
                            _fun29158_ip = 347;
                            continue _fun29158
                        }
                    case 335:
                        var10 = var5;
                        var10 = var10.body;
                        var9 = var10[var11];
                    case 347:
                        var6.subscription = var9;
                        var6 = var7.bind(var8)(var6);
                    case 357: // try_end0
                        return var5;
                    case 360:
                        return var3;
                    case 363: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var2 = var2[var4];
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BILLING_MOST_RECENT_SUBSCRIPTION_FETCH_FAIL';
                        var2.type = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 407:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot61 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot61 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29162: for (var _fun29162_ip = 0;;) switch (_fun29162_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29162_ip = 954;
                            continue _fun29162
                        }
                    case 13:
                        var8 = var1.items;
                        var4 = var1.paymentSource;
                        var23 = var1.trialId;
                        var19 = var1.code;
                        var20 = var1.currency;
                        var10 = var1.metadata;
                        var18 = var1.referralCode;
                        var17 = var1.loadId;
                        var16 = var1.expectedInvoicePrice;
                        var15 = var1.expectedRenewalPrice;
                        var7 = undefined;
                        var22 = undefined;
                        var3 = undefined;
                        SaveGenerator(address = 87);
                    case 85:
                        return var7;
                    case 87:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29162_ip = 951;
                            continue _fun29162
                        }
                    case 96:
                        var11 = _closure1_slot1;
                        var12 = _closure1_slot3;
                        var9 = 11;
                        var2 = var12[var9];
                        var13 = var11.bind(var7)(var2);
                        var11 = var13.dispatch;
                        var2 = {};
                        var14 = 'BILLING_SUBSCRIPTION_UPDATE_START';
                        var2.type = var14;
                        var2 = var11.bind(var13)(var2);
                        var11 = _closure1_slot0;
                        var2 = 23;
                        var2 = var12[var2];
                        var12 = var11.bind(var7)(var2);
                        var11 = var12.coerceExistingItemsToNewItemInterval;
                        var2 = var8;
                        var8 = var11.bind(var12)(var2);
                        var21 = null;
                        var22 = null;
                        var2 = var4;
                        if (!(var21 != var2)) {
                            _fun29162_ip = 207;
                            continue _fun29162
                        }
                    case 182:
                        var12 = _closure1_slot19;
                        var11 = var12.has;
                        var2 = var4;
                        var2 = var2.type;
                        var2 = var11.bind(var12)(var2);
                        if (var2) {
                            _fun29162_ip = 209;
                            continue _fun29162
                        }
                    case 207:
                        _fun29162_ip = 316;
                        continue _fun29162;
                    case 209:
                        var11 = _closure1_slot77;
                        var2 = var4;
                        var2 = var2.type;
                        var2 = var11.bind(var7)(var2);
                        SaveGenerator(address = 230);
                    case 228:
                        return var2;
                    case 230:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 11);
                        if (var11) {
                            _fun29162_ip = 948;
                            continue _fun29162
                        }
                    case 239:
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot3;
                        var11 = 12;
                        var11 = var13[var11];
                        var12 = var12.bind(var7)(var11);
                        var11 = var12.getAPIBaseURL;
                        var12 = var11.bind(var12)();
                        var25 = _closure1_slot12;
                        var24 = var25.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                        var11 = var4;
                        var14 = var11.type;
                        var11 = var21 != var2;
                        var13 = '';
                        if (!var11) {
                            _fun29162_ip = 301;
                            continue _fun29162
                        }
                    case 298:
                        var13 = var2;
                    case 301:
                        var11 = 'success';
                        var11 = var24.bind(var25)(var14, var13, var11);
                        var22 = var12 + var11;
                    case 316: // try_start_0
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot3;
                        var11 = 12;
                        var11 = var13[var11];
                        var11 = var12.bind(var7)(var11);
                        var14 = var11.HTTP;
                        var12 = var14.post;
                        var11 = {};
                        var13 = _closure1_slot12;
                        var13 = var13.BILLING_SUBSCRIPTIONS;
                        var11.url = var13;
                        var13 = {};
                        var25 = var8;
                        var24 = var25.map;
                        var8 = function(arg0) { // Environment: var8
                            var0 = arg0;
                            var2 = var0.planId;
                            var1 = var0.quantity;
                            var0 = {};
                            var0.plan_id = var2;
                            var0.quantity = var1;
                            return var0;
                        };
                        var8 = var24.bind(var25)(var8);
                        var13.items = var8;
                        var8 = var4;
                        var24 = var21 != var8;
                        var8 = null;
                        if (!var24) {
                            _fun29162_ip = 409;
                            continue _fun29162
                        }
                    case 401:
                        var24 = var4;
                        var8 = var24.id;
                    case 409:
                        var13.payment_source_id = var8;
                        var8 = var4;
                        var8 = var21 != var8;
                        var24 = null;
                        if (!var8) {
                            _fun29162_ip = 454;
                            continue _fun29162
                        }
                    case 426:
                        var25 = _closure1_slot52;
                        var8 = var4;
                        var8 = var25.bind(var7)(var8);
                        SaveGenerator(address = 442);
                    case 440:
                        return var8;
                    case 442:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 25);
                        var24 = var8;
                        if (var25) {
                            _fun29162_ip = 719;
                            continue _fun29162
                        }
                    case 454:
                        var13.payment_source_token = var24;
                        var13.trial_id = var23;
                        var13.return_url = var22;
                        var13.code = var19;
                        var19 = var4;
                        if (!(var21 == var19)) {
                            _fun29162_ip = 492;
                            continue _fun29162
                        }
                    case 480:
                        var19 = _closure1_slot20;
                        var19 = var19.USD;
                        _fun29162_ip = 495;
                        continue _fun29162;
                    case 492:
                        var19 = var20;
                    case 495:
                        var13.currency = var19;
                        var13.metadata = var10;
                        var19 = _closure1_slot0;
                        var20 = _closure1_slot3;
                        var10 = 17;
                        var10 = var20[var10];
                        var20 = var19.bind(var7)(var10);
                        var19 = var20.createGatewayCheckoutContext;
                        var10 = var4;
                        var10 = var19.bind(var20)(var10);
                        SaveGenerator(address = 543);
                    case 541:
                        return var10;
                    case 543:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 19);
                        if (var19) {
                            _fun29162_ip = 716;
                            continue _fun29162
                        }
                    case 552:
                        var13.gateway_checkout_context = var10;
                        var20 = _closure1_slot0;
                        var21 = _closure1_slot3;
                        var19 = 24;
                        var19 = var21[var19];
                        var20 = var20.bind(var7)(var19);
                        var19 = var20.getPurchaseToken;
                        var19 = var19.bind(var20)();
                        var13.purchase_token = var19;
                        var13.referral_code = var18;
                        var13.load_id = var17;
                        var13.expected_invoice_price = var16;
                        var13.expected_renewal_price = var15;
                        var11.body = var13;
                        var13 = true;
                        var11.oldFormErrors = var13;
                        var13 = false;
                        var11.rejectWithError = var13;
                        var11 = var12.bind(var14)(var11);
                        SaveGenerator(address = 640);
                    case 638:
                        return var11;
                    case 640:
                        ResumeGenerator(result_out_reg = 11, return_bool_out_reg = 12);
                        if (var12) {
                            _fun29162_ip = 713;
                            continue _fun29162
                        }
                    case 646:
                        var14 = _closure1_slot1;
                        var12 = _closure1_slot3;
                        var12 = var12[var9];
                        var15 = var14.bind(var7)(var12);
                        var14 = var15.dispatch;
                        var12 = {};
                        var16 = 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS';
                        var12.type = var16;
                        var16 = var11.body;
                        var12.subscription = var16;
                        var12 = var14.bind(var15)(var12);
                        var12 = {};
                        var14 = var11.body;
                        var12.subscription = var14;
                        var12.redirectConfirmation = var13;
                    case 710: // try_end0
                        return var12;
                    case 713:
                        return var11;
                    case 716:
                        return var10;
                    case 719:
                        return var8;
                    case 722: // catch_target0
                        CatchBlockStart(arg_register = 10);
                        var5 = var10;
                        var12 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var11 = 13;
                        var8 = var8[var11];
                        var8 = var12.bind(var7)(var8);
                        var8 = var8.BillingError;
                        var8 = var10 instanceof var8;
                        if (var8) {
                            _fun29162_ip = 808;
                            continue _fun29162
                        }
                    case 760:
                        var10 = _closure1_slot0;
                        var8 = _closure1_slot3;
                        var8 = var8[var11];
                        var8 = var10.bind(var7)(var8);
                        var11 = var8.BillingError;
                        var28 = var5;
                        var10 = var11.prototype;
                        var10 = Object.create(var10, {
                            constructor: {
                                value: var11
                            }
                        });
                        var29 = var10;
                        var8 = new var29[var11](var28, var27);
                        var8 = var8 instanceof Object ? var8 : var10;
                        _fun29162_ip = 811;
                        continue _fun29162;
                    case 808:
                        var8 = var5;
                    case 811:
                        var3 = var8;
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var9 = var11[var9];
                        var12 = var10.bind(var7)(var9);
                        var10 = var12.dispatch;
                        var9 = {};
                        var13 = 'BILLING_SUBSCRIPTION_UPDATE_FAIL';
                        var9.type = var13;
                        var9.error = var8;
                        var9 = var10.bind(var12)(var9);
                        var9 = var8.code;
                        var10 = _closure1_slot0;
                        var8 = 14;
                        var8 = var11[var8];
                        var8 = var10.bind(var7)(var8);
                        var8 = var8.ErrorCodes;
                        var8 = var8.CONFIRMATION_REQUIRED;
                        if (!(var9 === var8)) {
                            _fun29162_ip = 946;
                            continue _fun29162
                        }
                    case 894:
                        var8 = var5;
                        var8 = var8.body;
                        var8 = var8.payment_id;
                        if (var8) {
                            _fun29162_ip = 928;
                            continue _fun29162
                        }
                    case 911:
                        var9 = _closure1_slot40;
                        var8 = 'payment id cannot be null on redirected confirmations.';
                        var8 = var9.bind(var7)(var8);
                        throw var8;
                    case 928:
                        var6 = _closure1_slot64;
                        var5 = var5.body;
                        var4 = var6.bind(var7)(var5, var4);
                        return var4;
                    case 946:
                        throw var3;
                    case 948:
                        return var2;
                    case 951:
                        return var1;
                    case 954:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot62 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot62 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1, arg2, arg3) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                _fun29166: for (var _fun29166_ip = 0;;) switch (_fun29166_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 5);
                        if (var5) {
                            _fun29166_ip = 721;
                            continue _fun29166
                        }
                    case 13:
                        var11 = arg0;
                        var3 = arg1;
                        var4 = var1;
                        var12 = arg3;
                        var5 = undefined;
                        var2 = undefined;
                        var14 = null;
                        var13 = null;
                        if (!(var14 != var1)) {
                            _fun29166_ip = 65;
                            continue _fun29166
                        }
                    case 37:
                        var9 = _closure1_slot23;
                        var8 = var9.has;
                        var1 = var4;
                        var1 = var1.type;
                        var1 = var8.bind(var9)(var1);
                        if (var1) {
                            _fun29166_ip = 67;
                            continue _fun29166
                        }
                    case 65:
                        _fun29166_ip = 174;
                        continue _fun29166;
                    case 67:
                        var8 = _closure1_slot77;
                        var1 = var4;
                        var1 = var1.type;
                        var1 = var8.bind(var5)(var1);
                        SaveGenerator(address = 88);
                    case 86:
                        return var1;
                    case 88:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 8);
                        if (var8) {
                            _fun29166_ip = 718;
                            continue _fun29166
                        }
                    case 97:
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var8 = 12;
                        var8 = var10[var8];
                        var9 = var9.bind(var5)(var8);
                        var8 = var9.getAPIBaseURL;
                        var8 = var8.bind(var9)();
                        var16 = _closure1_slot12;
                        var15 = var16.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                        var7 = var4;
                        var10 = var7.type;
                        var7 = var14 != var1;
                        var9 = '';
                        if (!var7) {
                            _fun29166_ip = 159;
                            continue _fun29166
                        }
                    case 156:
                        var9 = var1;
                    case 159:
                        var7 = 'success';
                        var7 = var15.bind(var16)(var10, var9, var7);
                        var13 = var8 + var7;
                    case 174: // try_start_0
                        var8 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var7 = 12;
                        var7 = var10[var7];
                        var7 = var8.bind(var5)(var7);
                        var10 = var7.HTTP;
                        var8 = var10.post;
                        var7 = {};
                        var16 = _closure1_slot12;
                        var15 = var16.BILLING_INVOICE_MANUAL_PAYMENT;
                        var11 = var11.id;
                        var3 = var15.bind(var16)(var11, var3);
                        var7.url = var3;
                        var11 = {};
                        var3 = var4;
                        var15 = var14 != var3;
                        var3 = null;
                        if (!var15) {
                            _fun29166_ip = 257;
                            continue _fun29166
                        }
                    case 249:
                        var15 = var4;
                        var3 = var15.id;
                    case 257:
                        var11.payment_source_id = var3;
                        var3 = var4;
                        var3 = var14 != var3;
                        var14 = null;
                        if (!var3) {
                            _fun29166_ip = 302;
                            continue _fun29166
                        }
                    case 274:
                        var15 = _closure1_slot52;
                        var3 = var4;
                        var3 = var15.bind(var5)(var3);
                        SaveGenerator(address = 290);
                    case 288:
                        return var3;
                    case 290:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 15);
                        var14 = var3;
                        if (var15) {
                            _fun29166_ip = 479;
                            continue _fun29166
                        }
                    case 302:
                        var11.payment_source_token = var14;
                        var11.return_url = var13;
                        var11.currency = var12;
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot3;
                        var12 = 24;
                        var12 = var14[var12];
                        var13 = var13.bind(var5)(var12);
                        var12 = var13.getPurchaseToken;
                        var12 = var12.bind(var13)();
                        var11.purchase_token = var12;
                        var7.body = var11;
                        var11 = true;
                        var7.oldFormErrors = var11;
                        var11 = false;
                        var7.rejectWithError = var11;
                        var7 = var8.bind(var10)(var7);
                        SaveGenerator(address = 378);
                    case 376:
                        return var7;
                    case 378:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                        if (var8) {
                            _fun29166_ip = 476;
                            continue _fun29166
                        }
                    case 384:
                        var10 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var8 = 11;
                        var8 = var11[var8];
                        var11 = var10.bind(var5)(var8);
                        var10 = var11.dispatch;
                        var8 = {};
                        var12 = 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS';
                        var8.type = var12;
                        var12 = var7.body;
                        var8.subscription = var12;
                        var8 = var10.bind(var11)(var8);
                        var8 = {};
                        var10 = var7.body;
                        var8.subscription = var10;
                        var11 = _closure1_slot14;
                        var10 = var11.has;
                        var9 = var4;
                        var9 = var9.type;
                        var9 = var10.bind(var11)(var9);
                        var8.redirectConfirmation = var9;
                    case 473: // try_end0
                        return var8;
                    case 476:
                        return var7;
                    case 479:
                        return var3;
                    case 482: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var6 = var8;
                        var10 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var9 = 13;
                        var7 = var7[var9];
                        var7 = var10.bind(var5)(var7);
                        var7 = var7.BillingError;
                        var7 = var8 instanceof var7;
                        if (var7) {
                            _fun29166_ip = 571;
                            continue _fun29166
                        }
                    case 523:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var7 = var7[var9];
                        var7 = var8.bind(var5)(var7);
                        var9 = var7.BillingError;
                        var19 = var6;
                        var8 = var9.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var9
                            }
                        });
                        var20 = var8;
                        var7 = new var20[var9](var19, var18);
                        var7 = var7 instanceof Object ? var7 : var8;
                        _fun29166_ip = 574;
                        continue _fun29166;
                    case 571:
                        var7 = var6;
                    case 574:
                        var2 = var7;
                        var8 = var7.code;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var7 = 14;
                        var7 = var10[var7];
                        var7 = var9.bind(var5)(var7);
                        var7 = var7.ErrorCodes;
                        var7 = var7.CONFIRMATION_REQUIRED;
                        if (!(var8 === var7)) {
                            _fun29166_ip = 670;
                            continue _fun29166
                        }
                    case 618:
                        var7 = var6;
                        var7 = var7.body;
                        var7 = var7.payment_id;
                        if (var7) {
                            _fun29166_ip = 652;
                            continue _fun29166
                        }
                    case 635:
                        var8 = _closure1_slot40;
                        var7 = 'payment id cannot be null on redirected confirmations.';
                        var7 = var8.bind(var5)(var7);
                        throw var7;
                    case 652:
                        var7 = _closure1_slot64;
                        var6 = var6.body;
                        var4 = var7.bind(var5)(var6, var4);
                        return var4;
                    case 670:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 11;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_SUBSCRIPTION_UPDATE_FAIL';
                        var3.type = var6;
                        var3.error = var2;
                        var3 = var4.bind(var5)(var3);
                        throw var2;
                    case 718:
                        return var1;
                    case 721:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot63 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot63 = var0;
    var6 = function arg0, arg1() {
        _fun29167: for (var _fun29167_ip = 0;;) switch (_fun29167_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var0 = null;
                if (!(var0 != var4)) {
                    _fun29167_ip = 39;
                    continue _fun29167
                }
            case 14:
                var5 = _closure1_slot19;
                var3 = var5.has;
                var0 = var4.type;
                var0 = var3.bind(var5)(var0);
                if (var0) {
                    _fun29167_ip = 60;
                    continue _fun29167
                }
            case 39:
                var5 = var2.payment_id;
                var3 = function() {
                    var0 = undefined;
                    var3 = _closure1_slot66;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var0 = undefined;
                var0 = var3.bind(var0)(var5, var4);
                _fun29167_ip = 79;
                continue _fun29167;
            case 60:
                var3 = var2.adyen_redirect_url;
                var2 = function() {
                    var0 = undefined;
                    var3 = _closure1_slot65;
                    var2 = var3.apply;
                    var0 = arguments;
                    var1 = var0;
                    var0 = this;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var1 = undefined;
                var0 = var2.bind(var1)(var3, var4);
            case 79:
                return var0;
        }
    };
    var _closure1_slot64 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun29172: for (var _fun29172_ip = 0;;) switch (_fun29172_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        var1 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29172_ip = 143;
                            continue _fun29172
                        }
                    case 16:
                        var2 = null;
                        if (!(var2 != var3)) {
                            _fun29172_ip = 121;
                            continue _fun29172
                        }
                    case 22:
                        if (!(var2 != var1)) {
                            _fun29172_ip = 99;
                            continue _fun29172
                        }
                    case 26:
                        var5 = _closure1_slot14;
                        var2 = var5.has;
                        var1 = var1.type;
                        var1 = var2.bind(var5)(var1);
                        var2 = {};
                        if (var1) {
                            _fun29172_ip = 70;
                            continue _fun29172
                        }
                    case 53:
                        var1 = false;
                        var2.redirectConfirmation = var1;
                        var2.redirectURL = var3;
                        var1 = var2;
                        _fun29172_ip = 96;
                        continue _fun29172;
                    case 70:
                        var5 = _closure1_slot70;
                        var4 = undefined;
                        var4 = var5.bind(var4)(var3);
                        var4 = true;
                        var2.redirectConfirmation = var4;
                        var2.redirectURL = var3;
                        var1 = var2;
                    case 96:
                        return var1;
                    case 99:
                        var3 = _closure1_slot40;
                        var2 = undefined;
                        var1 = 'Payment source cannot be null on a redirect.';
                        var1 = var3.bind(var2)(var1);
                        throw var1;
                    case 121:
                        var3 = _closure1_slot40;
                        var2 = undefined;
                        var1 = 'redirect url cannot be null on a redirect for adyen.';
                        var1 = var3.bind(var2)(var1);
                        throw var1;
                    case 143:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot65 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot65 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun29175: for (var _fun29175_ip = 0;;) switch (_fun29175_ip) {
                    case 0:
                        StartGenerator();
                        var10 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29175_ip = 328;
                            continue _fun29175
                        }
                    case 15:
                        var3 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var1 = 21;
                        var1 = var4[var1];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var1);
                        var1 = var3.getStripe;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 54);
                    case 52:
                        return var1;
                    case 54:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29175_ip = 325;
                            continue _fun29175
                        }
                    case 63:
                        var7 = null;
                        if (!(var7 != var10)) {
                            _fun29175_ip = 308;
                            continue _fun29175
                        }
                    case 72:
                        var5 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot33;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var3 = arg0;
                        var3 = var5.bind(var4)(var3);
                        SaveGenerator(address = 89);
                    case 87:
                        return var3;
                    case 89:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun29175_ip = 305;
                            continue _fun29175
                        }
                    case 98:
                        var9 = var3.clientSecret;
                        var5 = var3.paymentMethodId;
                        if (!(var7 != var1)) {
                            _fun29175_ip = 288;
                            continue _fun29175
                        }
                    case 117:
                        var11 = _closure1_slot14;
                        var8 = var11.has;
                        var7 = var10.type;
                        var7 = var8.bind(var11)(var7);
                        if (var7) {
                            _fun29175_ip = 196;
                            continue _fun29175
                        }
                    case 139:
                        var7 = {};
                        var7.stripe = var1;
                        var7.clientSecret = var9;
                        var7.paymentMethodId = var5;
                        var7.paymentSource = var10;
                        var5 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot71;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var5 = var5.bind(var4)(var7);
                        SaveGenerator(address = 175);
                    case 173:
                        return var5;
                    case 175:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                        if (var7) {
                            _fun29175_ip = 193;
                            continue _fun29175
                        }
                    case 181:
                        var7 = {};
                        var8 = false;
                        var7.redirectConfirmation = var8;
                        return var7;
                    case 193:
                        return var5;
                    case 196:
                        var7 = _closure1_slot77;
                        var5 = var10.type;
                        var5 = var7.bind(var4)(var5);
                        SaveGenerator(address = 214);
                    case 212:
                        return var5;
                    case 214:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                        if (var7) {
                            _fun29175_ip = 285;
                            continue _fun29175
                        }
                    case 220:
                        var7 = _closure1_slot70;
                        var8 = {};
                        var8.stripe = var1;
                        var8.paymentSource = var10;
                        var8.clientSecret = var9;
                        var8.state = var5;
                        var6 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot72;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var6 = var6.bind(var4)(var8);
                        SaveGenerator(address = 259);
                    case 257:
                        return var6;
                    case 259:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 8);
                        if (var8) {
                            _fun29175_ip = 282;
                            continue _fun29175
                        }
                    case 265:
                        var7 = var7.bind(var4)(var6);
                        var7 = {};
                        var8 = true;
                        var7.redirectConfirmation = var8;
                        return var7;
                    case 282:
                        return var6;
                    case 285:
                        return var5;
                    case 288:
                        var6 = _closure1_slot40;
                        var5 = 'Stripe cannot be null on a redirect.';
                        var5 = var6.bind(var4)(var5);
                        throw var5;
                    case 305:
                        return var3;
                    case 308:
                        var3 = _closure1_slot40;
                        var2 = 'Payment source cannot be null on a redirect.';
                        var2 = var3.bind(var4)(var2);
                        throw var2;
                    case 325:
                        return var1;
                    case 328:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot66 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot66 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29181: for (var _fun29181_ip = 0;;) switch (_fun29181_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29181_ip = 244;
                            continue _fun29181
                        }
                    case 13:
                        var1 = _closure1_slot55;
                        var4 = undefined;
                        var1 = var1.bind(var4)(var6);
                        SaveGenerator(address = 31);
                    case 29:
                        return var1;
                    case 31:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29181_ip = 241;
                            continue _fun29181
                        }
                    case 40:
                        var8 = null;
                        var5 = var8 == var1;
                        var3 = undefined;
                        if (var5) {
                            _fun29181_ip = 56;
                            continue _fun29181
                        }
                    case 51:
                        var3 = var1.body;
                    case 56:
                        if (!(var8 != var3)) {
                            _fun29181_ip = 224;
                            continue _fun29181
                        }
                    case 63:
                        var7 = _closure1_slot7;
                        var5 = var7.createFromServer;
                        var3 = var1.body;
                        var3 = var3.payment_source;
                        var3 = var5.bind(var7)(var3);
                        var9 = _closure1_slot14;
                        var7 = var9.has;
                        var5 = var3.type;
                        var5 = var7.bind(var9)(var5);
                        if (var5) {
                            _fun29181_ip = 130;
                            continue _fun29181
                        }
                    case 113:
                        var7 = _closure1_slot40;
                        var5 = 'unsupported redirect payment source';
                        var5 = var7.bind(var4)(var5);
                        throw var5;
                    case 130:
                        var5 = var8 == var1;
                        var7 = undefined;
                        if (var5) {
                            _fun29181_ip = 158;
                            continue _fun29181
                        }
                    case 139:
                        var5 = var1.body;
                        var8 = var8 == var5;
                        var7 = undefined;
                        if (var8) {
                            _fun29181_ip = 158;
                            continue _fun29181
                        }
                    case 153:
                        var7 = var5.status;
                    case 158:
                        var5 = _closure1_slot22;
                        var5 = var5.FAILED;
                        if (!(var7 !== var5)) {
                            _fun29181_ip = 207;
                            continue _fun29181
                        }
                    case 172:
                        var5 = var3.paymentGateway;
                        var3 = _closure1_slot13;
                        var3 = var3.STRIPE;
                        var3 = var5 !== var3;
                        if (var3) {
                            _fun29181_ip = 204;
                            continue _fun29181
                        }
                    case 195:
                        var5 = _closure1_slot68;
                        var3 = var5.bind(var4)(var6);
                    case 204:
                        return var3;
                    case 207:
                        var5 = _closure1_slot40;
                        var3 = 'payment failed';
                        var3 = var5.bind(var4)(var3);
                        throw var3;
                    case 224:
                        var3 = _closure1_slot40;
                        var2 = 'could not fetch payment';
                        var2 = var3.bind(var4)(var2);
                        throw var2;
                    case 241:
                        return var1;
                    case 244:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot67 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot67 = var0;
    var5 = function() {
        var0 = undefined;
        var3 = _closure1_slot69;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot68 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29185: for (var _fun29185_ip = 0;;) switch (_fun29185_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29185_ip = 269;
                            continue _fun29185
                        }
                    case 13:
                        var3 = _closure1_slot2;
                        var4 = _closure1_slot3;
                        var1 = 21;
                        var1 = var4[var1];
                        var4 = undefined;
                        var3 = var3.bind(var4)(var1);
                        var1 = var3.getStripe;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 52);
                    case 50:
                        return var1;
                    case 52:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29185_ip = 266;
                            continue _fun29185
                        }
                    case 61:
                        var9 = null;
                        if (!(var9 != var1)) {
                            _fun29185_ip = 249;
                            continue _fun29185
                        }
                    case 70:
                        if (!(var9 != var5)) {
                            _fun29185_ip = 232;
                            continue _fun29185
                        }
                    case 77:
                        var3 = function() {
                            var0 = undefined;
                            var3 = _closure1_slot32;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var3 = var3.bind(var4)(var5);
                        SaveGenerator(address = 93);
                    case 91:
                        return var3;
                    case 93:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun29185_ip = 229;
                            continue _fun29185
                        }
                    case 102:
                        var5 = var1.retrievePaymentIntent;
                        var5 = var5.bind(var1)(var3);
                        SaveGenerator(address = 117);
                    case 115:
                        return var5;
                    case 117:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                        if (var6) {
                            _fun29185_ip = 226;
                            continue _fun29185
                        }
                    case 123:
                        var6 = var5.paymentIntent;
                        var7 = var5.error;
                        if (!(var9 == var7)) {
                            _fun29185_ip = 215;
                            continue _fun29185
                        }
                    case 138:
                        if (!(var9 != var6)) {
                            _fun29185_ip = 198;
                            continue _fun29185
                        }
                    case 142:
                        var8 = var6.last_payment_error;
                        if (!(var9 == var8)) {
                            _fun29185_ip = 157;
                            continue _fun29185
                        }
                    case 152:
                        var8 = true;
                        return var8;
                    case 157:
                        var8 = _closure1_slot40;
                        var10 = var6.last_payment_error;
                        var6 = global;
                        var6 = var6.HermesInternal;
                        var9 = var6.concat;
                        var6 = 'unable to retrieve payment intent ';
                        var6 = var9.bind(var6)(var10);
                        var6 = var8.bind(var4)(var6);
                        throw var6;
                    case 198:
                        var8 = _closure1_slot40;
                        var6 = 'paymentIntent not available with successful stripe call';
                        var6 = var8.bind(var4)(var6);
                        throw var6;
                    case 215:
                        var6 = _closure1_slot40;
                        var6 = var6.bind(var4)(var7);
                        throw var6;
                    case 226:
                        return var5;
                    case 229:
                        return var3;
                    case 232:
                        var5 = _closure1_slot40;
                        var3 = 'payment intent id cannot be null.';
                        var3 = var5.bind(var4)(var3);
                        throw var3;
                    case 249:
                        var3 = _closure1_slot40;
                        var2 = 'Stripe has not loaded.';
                        var2 = var3.bind(var4)(var2);
                        throw var2;
                    case 266:
                        return var1;
                    case 269:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot69 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot69 = var0;
    var0 = function arg0() {
        var0 = global;
        var2 = var0.window;
        var1 = var2.open;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot70 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29190: for (var _fun29190_ip = 0;;) switch (_fun29190_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29190_ip = 202;
                            continue _fun29190
                        }
                    case 13:
                        var3 = var1.stripe;
                        var2 = var1.paymentSource;
                        var8 = var1.paymentMethodId;
                        var6 = var1.clientSecret;
                        var4 = undefined;
                        SaveGenerator(address = 43);
                    case 41:
                        return var4;
                    case 43:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun29190_ip = 199;
                            continue _fun29190
                        }
                    case 52:
                        var5 = {};
                        var9 = var2.type;
                        var7 = _closure1_slot21;
                        var7 = var7.SEPA_DEBIT;
                        if (!(var9 === var7)) {
                            _fun29190_ip = 182;
                            continue _fun29190
                        }
                    case 76:
                        var7 = null;
                        if (!(var7 != var8)) {
                            _fun29190_ip = 165;
                            continue _fun29190
                        }
                    case 82:
                        var5.payment_method = var8;
                        var3 = var3.confirmSepaDebitPayment;
                        var3 = var3.bind(var4)(var6, var5);
                        SaveGenerator(address = 106);
                    case 104:
                        return var3;
                    case 106:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                        if (var5) {
                            _fun29190_ip = 162;
                            continue _fun29190
                        }
                    case 112:
                        var5 = var3.paymentIntent;
                        var6 = var3.error;
                        if (!(var7 == var6)) {
                            _fun29190_ip = 151;
                            continue _fun29190
                        }
                    case 127:
                        if (!(var7 != var5)) {
                            _fun29190_ip = 134;
                            continue _fun29190
                        }
                    case 131:
                        return var4;
                    case 134:
                        var7 = _closure1_slot40;
                        var5 = 'paymentIntent not available with successful stripe call';
                        var5 = var7.bind(var4)(var5);
                        throw var5;
                    case 151:
                        var5 = _closure1_slot40;
                        var5 = var5.bind(var4)(var6);
                        throw var5;
                    case 162:
                        return var3;
                    case 165:
                        var5 = _closure1_slot40;
                        var3 = 'On a sepa payment payment method id cannot be null';
                        var3 = var5.bind(var4)(var3);
                        throw var3;
                    case 182:
                        var3 = _closure1_slot40;
                        var2 = 'Unsupported redirected payment source type.';
                        var2 = var3.bind(var4)(var2);
                        throw var2;
                    case 199:
                        return var1;
                    case 202:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot71 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot71 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29193: for (var _fun29193_ip = 0;;) switch (_fun29193_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29193_ip = 895;
                            continue _fun29193
                        }
                    case 13:
                        var10 = var1.stripe;
                        var8 = var1.paymentSource;
                        var7 = var1.clientSecret;
                        var2 = var1.state;
                        var5 = undefined;
                        SaveGenerator(address = 42);
                    case 40:
                        return var5;
                    case 42:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29193_ip = 892;
                            continue _fun29193
                        }
                    case 51:
                        var6 = var8.type;
                        var4 = _closure1_slot21;
                        var4 = var4.GIROPAY;
                        if (!(var4 !== var6)) {
                            _fun29193_ip = 612;
                            continue _fun29193
                        }
                    case 76:
                        var4 = _closure1_slot21;
                        var4 = var4.BANCONTACT;
                        if (!(var4 !== var6)) {
                            _fun29193_ip = 564;
                            continue _fun29193
                        }
                    case 93:
                        var4 = _closure1_slot21;
                        var4 = var4.SOFORT;
                        if (!(var4 !== var6)) {
                            _fun29193_ip = 492;
                            continue _fun29193
                        }
                    case 110:
                        var4 = _closure1_slot21;
                        var4 = var4.PRZELEWY24;
                        if (!(var4 !== var6)) {
                            _fun29193_ip = 364;
                            continue _fun29193
                        }
                    case 127:
                        var4 = _closure1_slot21;
                        var4 = var4.EPS;
                        if (!(var4 !== var6)) {
                            _fun29193_ip = 247;
                            continue _fun29193
                        }
                    case 141:
                        var4 = _closure1_slot21;
                        var4 = var4.IDEAL;
                        if (!(var4 !== var6)) {
                            _fun29193_ip = 172;
                            continue _fun29193
                        }
                    case 155:
                        var6 = _closure1_slot40;
                        var4 = 'Unsupported redirected payment source type.';
                        var4 = var6.bind(var5)(var4);
                        throw var4;
                    case 172:
                        var9 = {};
                        var4 = {};
                        var9.ideal = var4;
                        var4 = {};
                        var6 = var8.billingAddress;
                        var6 = var6.name;
                        var4.name = var6;
                        var9.billing_details = var4;
                        var6 = var8.bank;
                        var4 = null;
                        if (!(var4 != var6)) {
                            _fun29193_ip = 234;
                            continue _fun29193
                        }
                    case 215:
                        var4 = {};
                        var6 = var8.bank;
                        var4.bank = var6;
                        var9.ideal = var4;
                    case 234:
                        var6 = var10.confirmIdealPayment;
                        _fun29193_ip = 647;
                        continue _fun29193;
                    case 247:
                        var11 = var8.bank;
                        var4 = null;
                        if (!(var4 != var11)) {
                            _fun29193_ip = 317;
                            continue _fun29193
                        }
                    case 259:
                        var4 = {};
                        var11 = {};
                        var12 = var8.bank;
                        var11.bank = var12;
                        var4.eps = var11;
                        var11 = {};
                        var12 = var8.billingAddress;
                        var12 = var12.name;
                        var11.name = var12;
                        var4.billing_details = var11;
                        var6 = var10.confirmEpsPayment;
                        var9 = var4;
                        _fun29193_ip = 647;
                        continue _fun29193;
                    case 317:
                        var11 = _closure1_slot40;
                        var14 = var8.id;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var13 = var4.concat;
                        var12 = 'PaymentSource (';
                        var4 = ') missing bank info for EPS.';
                        var4 = var13.bind(var12)(var14, var4);
                        var4 = var11.bind(var5)(var4);
                        throw var4;
                    case 364:
                        var11 = var8.bank;
                        var4 = null;
                        if (!(var4 != var11)) {
                            _fun29193_ip = 445;
                            continue _fun29193
                        }
                    case 376:
                        var4 = {};
                        var11 = {};
                        var12 = var8.bank;
                        var11.bank = var12;
                        var4.p24 = var11;
                        var11 = {};
                        var12 = var8.billingAddress;
                        var12 = var12.name;
                        var11.name = var12;
                        var12 = var8.email;
                        var11.email = var12;
                        var4.billing_details = var11;
                        var6 = var10.confirmP24Payment;
                        var9 = var4;
                        _fun29193_ip = 647;
                        continue _fun29193;
                    case 445:
                        var11 = _closure1_slot40;
                        var14 = var8.id;
                        var4 = global;
                        var4 = var4.HermesInternal;
                        var13 = var4.concat;
                        var12 = 'PaymentSource (';
                        var4 = ') missing bank info for p24.';
                        var4 = var13.bind(var12)(var14, var4);
                        var4 = var11.bind(var5)(var4);
                        throw var4;
                    case 492:
                        var4 = {};
                        var11 = {};
                        var12 = var8.billingAddress;
                        var12 = var12.country;
                        var11.country = var12;
                        var4.sofort = var11;
                        var11 = {};
                        var12 = var8.billingAddress;
                        var12 = var12.name;
                        var11.name = var12;
                        var12 = var8.email;
                        var11.email = var12;
                        var4.billing_details = var11;
                        var6 = var10.confirmSofortPayment;
                        var9 = var4;
                        _fun29193_ip = 647;
                        continue _fun29193;
                    case 564:
                        var4 = {};
                        var11 = {};
                        var12 = var8.billingAddress;
                        var12 = var12.name;
                        var11.name = var12;
                        var12 = var8.email;
                        var11.email = var12;
                        var4.billing_details = var11;
                        var6 = var10.confirmBancontactPayment;
                        var9 = var4;
                        _fun29193_ip = 647;
                        continue _fun29193;
                    case 612:
                        var4 = {};
                        var11 = {};
                        var12 = var8.billingAddress;
                        var12 = var12.name;
                        var11.name = var12;
                        var4.billing_details = var11;
                        var6 = var10.confirmGiropayPayment;
                        var9 = var4;
                    case 647:
                        var4 = {};
                        var4.payment_method = var9;
                        var10 = _closure1_slot0;
                        var11 = _closure1_slot3;
                        var9 = 12;
                        var9 = var11[var9];
                        var10 = var10.bind(var5)(var9);
                        var9 = var10.getAPIBaseURL;
                        var9 = var9.bind(var10)();
                        var13 = _closure1_slot12;
                        var12 = var13.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                        var11 = var8.type;
                        var8 = null;
                        var14 = var8 != var2;
                        var10 = '';
                        if (!var14) {
                            _fun29193_ip = 715;
                            continue _fun29193
                        }
                    case 712:
                        var10 = var2;
                    case 715:
                        var2 = 'success';
                        var2 = var12.bind(var13)(var11, var10, var2);
                        var2 = var9 + var2;
                        var4.return_url = var2;
                        var2 = {};
                        var9 = false;
                        var2.handleActions = var9;
                        var2 = var6.bind(var5)(var7, var4, var2);
                        SaveGenerator(address = 757);
                    case 755:
                        return var2;
                    case 757:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun29193_ip = 889;
                            continue _fun29193
                        }
                    case 766:
                        var6 = var2.paymentIntent;
                        var4 = var2.error;
                        if (!(var8 == var4)) {
                            _fun29193_ip = 878;
                            continue _fun29193
                        }
                    case 781:
                        if (!(var8 != var6)) {
                            _fun29193_ip = 861;
                            continue _fun29193
                        }
                    case 785:
                        var9 = var6.next_action;
                        var10 = var8 == var9;
                        var7 = undefined;
                        if (var10) {
                            _fun29193_ip = 820;
                            continue _fun29193
                        }
                    case 800:
                        var9 = var9.redirect_to_url;
                        var10 = var8 == var9;
                        var7 = undefined;
                        if (var10) {
                            _fun29193_ip = 820;
                            continue _fun29193
                        }
                    case 815:
                        var7 = var9.url;
                    case 820:
                        if (!(var8 != var7)) {
                            _fun29193_ip = 844;
                            continue _fun29193
                        }
                    case 824:
                        var6 = var6.next_action;
                        var6 = var6.redirect_to_url;
                        var6 = var6.url;
                        return var6;
                    case 844:
                        var7 = _closure1_slot40;
                        var6 = 'confirm payment did not return a redirect url';
                        var6 = var7.bind(var5)(var6);
                        throw var6;
                    case 861:
                        var7 = _closure1_slot40;
                        var6 = 'paymentIntent not available with successful api call';
                        var6 = var7.bind(var5)(var6);
                        throw var6;
                    case 878:
                        var3 = _closure1_slot40;
                        var3 = var3.bind(var5)(var4);
                        throw var3;
                    case 889:
                        return var2;
                    case 892:
                        return var1;
                    case 895:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot72 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot72 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun29196: for (var _fun29196_ip = 0;;) switch (_fun29196_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29196_ip = 299;
                            continue _fun29196
                        }
                    case 10:
                        var7 = arg0;
                        var8 = arg1;
                        var9 = arg2;
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot3;
                        var5 = 11;
                        var1 = var1[var5];
                        var4 = undefined;
                        var6 = var2.bind(var4)(var1);
                        var2 = var6.dispatch;
                        var1 = {};
                        var10 = 'BILLING_SUBSCRIPTION_CANCEL_START';
                        var1.type = var10;
                        var1 = var2.bind(var6)(var1);
                    case 66: // try_start_0
                        var2 = _closure1_slot0;
                        var6 = _closure1_slot3;
                        var1 = 12;
                        var1 = var6[var1];
                        var1 = var2.bind(var4)(var1);
                        var6 = var1.HTTP;
                        var2 = var6.del;
                        var1 = {};
                        var11 = _closure1_slot12;
                        var10 = var11.BILLING_SUBSCRIPTION;
                        var7 = var10.bind(var11)(var7);
                        var1.url = var7;
                        var7 = {};
                        var7.location = var9;
                        var7.location_stack = var8;
                        var1.query = var7;
                        var7 = true;
                        var1.oldFormErrors = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var2.bind(var6)(var1);
                        SaveGenerator(address = 156);
                    case 154:
                        return var1;
                    case 156:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29196_ip = 204;
                            continue _fun29196
                        }
                    case 162:
                        var6 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var2 = var2[var5];
                        var7 = var6.bind(var4)(var2);
                        var6 = var7.dispatch;
                        var2 = {};
                        var8 = 'BILLING_SUBSCRIPTION_CANCEL_SUCCESS';
                        var2.type = var8;
                        var2 = var6.bind(var7)(var2);
                    case 201: // try_end0
                        return var1;
                    case 204:
                        return var1;
                    case 207: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 13;
                        var1 = var2[var1];
                        var1 = var6.bind(var4)(var1);
                        var1 = var1.BillingError;
                        var6 = var1.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var1
                            }
                        });
                        var13 = var6;
                        var12 = var7;
                        var1 = new var13[var1](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var6;
                        var3 = _closure1_slot1;
                        var2 = var2[var5];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var5 = 'BILLING_SUBSCRIPTION_CANCEL_FAIL';
                        var2.type = var5;
                        var2.error = var1;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 299:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot73 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot73 = var0;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot75;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot74 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Environment: var2
            var0 = function*(arg0, arg1, arg2, arg3, arg4, arg5, arg6) { // Original name: ?anon_0_, environment: var0
                _fun29200: for (var _fun29200_ip = 0;;) switch (_fun29200_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29200_ip = 1050;
                            continue _fun29200
                        }
                    case 13:
                        var14 = arg0;
                        var4 = var2;
                        var18 = arg2;
                        var17 = arg3;
                        var15 = arg4;
                        var16 = arg5;
                        var9 = arg6;
                        var3 = undefined;
                        var8 = undefined;
                        var12 = undefined;
                        var10 = undefined;
                        var1 = undefined;
                        var2 = var2.paymentSource;
                        var11 = null;
                        if (!(var11 != var2)) {
                            _fun29200_ip = 72;
                            continue _fun29200
                        }
                    case 56:
                        var2 = var4;
                        var2 = var2.currency;
                        if (!(var11 != var2)) {
                            _fun29200_ip = 1029;
                            continue _fun29200
                        }
                    case 72:
                        var13 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var5 = 11;
                        var7 = var7[var5];
                        var19 = var13.bind(var3)(var7);
                        var13 = var19.dispatch;
                        var7 = {};
                        var20 = 'BILLING_SUBSCRIPTION_UPDATE_START';
                        var7.type = var20;
                        var7 = var13.bind(var19)(var7);
                    case 117: // try_start_0
                        var13 = {};
                        var7 = var4;
                        var19 = var7.status;
                        var13.status = var19;
                        var7 = var7.paymentSource;
                        var8 = var7;
                        var19 = var11 == var7;
                        var7 = undefined;
                        if (var19) {
                            _fun29200_ip = 154;
                            continue _fun29200
                        }
                    case 149:
                        var7 = var8.id;
                    case 154:
                        var13.payment_source_id = var7;
                        var7 = var4;
                        var7 = var7.paymentSource;
                        var7 = var11 != var7;
                        var8 = null;
                        if (!var7) {
                            _fun29200_ip = 211;
                            continue _fun29200
                        }
                    case 177:
                        var19 = _closure1_slot52;
                        var7 = var4;
                        var7 = var7.paymentSource;
                        var7 = var19.bind(var3)(var7);
                        SaveGenerator(address = 199);
                    case 197:
                        return var7;
                    case 199:
                        ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 19);
                        var8 = var7;
                        if (var19) {
                            _fun29200_ip = 790;
                            continue _fun29200
                        }
                    case 211:
                        var13.payment_source_token = var8;
                        var8 = var4;
                        var19 = var8.currency;
                        var13.currency = var19;
                        var20 = _closure1_slot0;
                        var21 = _closure1_slot3;
                        var19 = 17;
                        var19 = var21[var19];
                        var20 = var20.bind(var3)(var19);
                        var19 = var20.createGatewayCheckoutContext;
                        var8 = var8.paymentSource;
                        var8 = var19.bind(var20)(var8);
                        SaveGenerator(address = 271);
                    case 269:
                        return var8;
                    case 271:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 19);
                        if (var19) {
                            _fun29200_ip = 787;
                            continue _fun29200
                        }
                    case 280:
                        var13.gateway_checkout_context = var8;
                        var13.load_id = var9;
                        var9 = var4;
                        var19 = var9.pauseDuration;
                        var13.pause_duration = var19;
                        var20 = _closure1_slot0;
                        var21 = _closure1_slot3;
                        var19 = 24;
                        var19 = var21[var19];
                        var20 = var20.bind(var3)(var19);
                        var19 = var20.getPurchaseToken;
                        var19 = var19.bind(var20)();
                        var13.purchase_token = var19;
                        var13.expected_invoice_price = var18;
                        var13.expected_renewal_price = var17;
                        var12 = var13;
                        var9 = var9.paymentSource;
                        if (!(var11 != var9)) {
                            _fun29200_ip = 532;
                            continue _fun29200
                        }
                    case 367:
                        var17 = _closure1_slot19;
                        var13 = var17.has;
                        var9 = var4;
                        var9 = var9.paymentSource;
                        var9 = var9.type;
                        var9 = var13.bind(var17)(var9);
                        if (!var9) {
                            _fun29200_ip = 532;
                            continue _fun29200
                        }
                    case 401:
                        var13 = _closure1_slot77;
                        var9 = var4;
                        var9 = var9.paymentSource;
                        var9 = var9.type;
                        var9 = var13.bind(var3)(var9);
                        SaveGenerator(address = 428);
                    case 426:
                        return var9;
                    case 428:
                        ResumeGenerator(result_out_reg = 9, return_bool_out_reg = 13);
                        if (var13) {
                            _fun29200_ip = 784;
                            continue _fun29200
                        }
                    case 437:
                        var10 = var9;
                        var13 = var12;
                        var18 = _closure1_slot0;
                        var19 = _closure1_slot3;
                        var17 = 12;
                        var17 = var19[var17];
                        var18 = var18.bind(var3)(var17);
                        var17 = var18.getAPIBaseURL;
                        var17 = var17.bind(var18)();
                        var21 = _closure1_slot12;
                        var20 = var21.BILLING_POPUP_BRIDGE_CALLBACK_REDIRECT_PREFIX;
                        var18 = var4;
                        var18 = var18.paymentSource;
                        var19 = var18.type;
                        var22 = var11 != var9;
                        var18 = '';
                        if (!var22) {
                            _fun29200_ip = 511;
                            continue _fun29200
                        }
                    case 508:
                        var18 = var10;
                    case 511:
                        var10 = 'success';
                        var10 = var20.bind(var21)(var19, var18, var10);
                        var10 = var17 + var10;
                        var13.return_url = var10;
                    case 532:
                        var10 = var4;
                        var10 = var10.items;
                        if (!(var11 != var10)) {
                            _fun29200_ip = 609;
                            continue _fun29200
                        }
                    case 544:
                        var11 = var12;
                        var13 = _closure1_slot0;
                        var17 = _closure1_slot3;
                        var10 = 23;
                        var10 = var17[var10];
                        var17 = var13.bind(var3)(var10);
                        var13 = var17.coerceExistingItemsToNewItemInterval;
                        var10 = var4;
                        var10 = var10.items;
                        var17 = var13.bind(var17)(var10);
                        var13 = var17.map;
                        var10 = function(arg0) { // Environment: var10
                            var3 = arg0;
                            var2 = var3.planId;
                            var0 = null;
                            var1 = Object.create(var0);
                            var0 = 0;
                            var1.planId = var0;
                            var6 = {};
                            var5 = var3;
                            var4 = var1;
                            var5 = copyDataProperties(var6, var5, var4);
                            var0 = {};
                            var6 = var0;
                            var1 = copyDataProperties(var6, var5);
                            var1 = 'plan_id';
                            var0[var1] = var2;
                            return var0;
                        };
                        var10 = var13.bind(var17)(var10);
                        var11.items = var10;
                    case 609:
                        var11 = _closure1_slot0;
                        var13 = _closure1_slot3;
                        var10 = 12;
                        var10 = var13[var10];
                        var10 = var11.bind(var3)(var10);
                        var13 = var10.HTTP;
                        var11 = var13.patch;
                        var10 = {};
                        var18 = _closure1_slot12;
                        var17 = var18.BILLING_SUBSCRIPTION;
                        var14 = var14.id;
                        var14 = var17.bind(var18)(var14);
                        var10.url = var14;
                        var14 = {};
                        var14.location = var16;
                        var14.location_stack = var15;
                        var10.query = var14;
                        var10.body = var12;
                        var12 = true;
                        var10.oldFormErrors = var12;
                        var12 = false;
                        var10.rejectWithError = var12;
                        var10 = var11.bind(var13)(var10);
                        SaveGenerator(address = 708);
                    case 706:
                        return var10;
                    case 708:
                        ResumeGenerator(result_out_reg = 10, return_bool_out_reg = 11);
                        if (var11) {
                            _fun29200_ip = 781;
                            continue _fun29200
                        }
                    case 714:
                        var13 = _closure1_slot1;
                        var11 = _closure1_slot3;
                        var11 = var11[var5];
                        var14 = var13.bind(var3)(var11);
                        var13 = var14.dispatch;
                        var11 = {};
                        var15 = 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS';
                        var11.type = var15;
                        var15 = var10.body;
                        var11.subscription = var15;
                        var11 = var13.bind(var14)(var11);
                        var11 = {};
                        var13 = var10.body;
                        var11.subscription = var13;
                        var11.redirectConfirmation = var12;
                    case 778: // try_end0
                        return var11;
                    case 781:
                        return var10;
                    case 784:
                        return var9;
                    case 787:
                        return var8;
                    case 790:
                        return var7;
                    case 793: // catch_target0
                        CatchBlockStart(arg_register = 8);
                        var6 = var8;
                        var10 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var9 = 13;
                        var7 = var7[var9];
                        var7 = var10.bind(var3)(var7);
                        var7 = var7.BillingError;
                        var7 = var8 instanceof var7;
                        if (var7) {
                            _fun29200_ip = 879;
                            continue _fun29200
                        }
                    case 831:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var7 = var7[var9];
                        var7 = var8.bind(var3)(var7);
                        var9 = var7.BillingError;
                        var25 = var6;
                        var8 = var9.prototype;
                        var8 = Object.create(var8, {
                            constructor: {
                                value: var9
                            }
                        });
                        var26 = var8;
                        var7 = new var26[var9](var25, var24);
                        var7 = var7 instanceof Object ? var7 : var8;
                        _fun29200_ip = 882;
                        continue _fun29200;
                    case 879:
                        var7 = var6;
                    case 882:
                        var1 = var7;
                        var8 = var7.code;
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var7 = 14;
                        var7 = var10[var7];
                        var7 = var9.bind(var3)(var7);
                        var7 = var7.ErrorCodes;
                        var7 = var7.CONFIRMATION_REQUIRED;
                        if (!(var8 === var7)) {
                            _fun29200_ip = 984;
                            continue _fun29200
                        }
                    case 926:
                        var7 = var6;
                        var7 = var7.body;
                        var7 = var7.payment_id;
                        if (var7) {
                            _fun29200_ip = 960;
                            continue _fun29200
                        }
                    case 943:
                        var8 = _closure1_slot40;
                        var7 = 'payment id cannot be null on redirected confirmations.';
                        var7 = var8.bind(var3)(var7);
                        throw var7;
                    case 960:
                        var7 = _closure1_slot64;
                        var6 = var6.body;
                        var4 = var4.paymentSource;
                        var4 = var7.bind(var3)(var6, var4);
                        return var4;
                    case 984:
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var2 = var2[var5];
                        var5 = var4.bind(var3)(var2);
                        var4 = var5.dispatch;
                        var2 = {};
                        var6 = 'BILLING_SUBSCRIPTION_UPDATE_FAIL';
                        var2.type = var6;
                        var2.error = var1;
                        var2 = var4.bind(var5)(var2);
                        throw var1;
                    case 1029:
                        var1 = global;
                        var2 = var1.Error;
                        var1 = 'Currency must be specified with payment source';
                        var1 = var2.bind(var3)(var1);
                        throw var1;
                    case 1050:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot75 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot75 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29204: for (var _fun29204_ip = 0;;) switch (_fun29204_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29204_ip = 98;
                            continue _fun29204
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 12;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.post;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': false
                        };
                        var7 = _closure1_slot12;
                        var6 = var7.BILLING_PAYMENTS_VOID;
                        var5 = arg0;
                        var5 = var6.bind(var7)(var5);
                        var1.url = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 86);
                    case 84:
                        return var1;
                    case 86:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29204_ip = 95;
                            continue _fun29204
                        }
                    case 92:
                        return var2;
                    case 95:
                        return var1;
                    case 98:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot76 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot76 = var0;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot78;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot77 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29208: for (var _fun29208_ip = 0;;) switch (_fun29208_ip) {
                    case 0:
                        StartGenerator();
                        var6 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29208_ip = 162;
                            continue _fun29208
                        }
                    case 13:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var1 = 12;
                        var1 = var4[var1];
                        var5 = undefined;
                        var1 = var2.bind(var5)(var1);
                        var4 = var1.HTTP;
                        var2 = var4.post;
                        var1 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var8 = _closure1_slot12;
                        var7 = var8.BILLING_POPUP_BRIDGE;
                        var7 = var7.bind(var8)(var6);
                        var1.url = var7;
                        var1 = var2.bind(var4)(var1);
                        SaveGenerator(address = 89);
                    case 87:
                        return var1;
                    case 89:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29208_ip = 159;
                            continue _fun29208
                        }
                    case 95:
                        var2 = var1.body;
                        var2 = var2.state;
                        var4 = _closure1_slot1;
                        var7 = _closure1_slot3;
                        var3 = 11;
                        var3 = var7[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'BILLING_POPUP_BRIDGE_STATE_UPDATE';
                        var3.type = var7;
                        var3.state = var2;
                        var3.paymentSourceType = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 159:
                        return var1;
                    case 162:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot78 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot78 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun29211: for (var _fun29211_ip = 0;;) switch (_fun29211_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29211_ip = 295;
                            continue _fun29211
                        }
                    case 15:
                        var5 = undefined;
                        if (!(var2 === var5)) {
                            _fun29211_ip = 23;
                            continue _fun29211
                        }
                    case 21:
                        var2 = false;
                    case 23:
                        var _closure4_slot0 = var5;
                        SaveGenerator(address = 31);
                    case 29:
                        return var5;
                    case 31:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29211_ip = 292;
                            continue _fun29211
                        }
                    case 40:
                        if (var2) {
                            _fun29211_ip = 75;
                            continue _fun29211
                        }
                    case 43:
                        var3 = _closure1_slot9;
                        var6 = var3.ipCountryCodeRequest;
                        var3 = null;
                        if (!(var3 != var6)) {
                            _fun29211_ip = 75;
                            continue _fun29211
                        }
                    case 62:
                        var2 = _closure1_slot9;
                        var2 = var2.ipCountryCodeRequest;
                        return var2;
                    case 75: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var2 = 12;
                        var2 = var7[var2];
                        var2 = var6.bind(var5)(var2);
                        var8 = var2.HTTP;
                        var6 = var8.get;
                        var2 = {};
                        var9 = _closure1_slot12;
                        var9 = var9.BILLING_COUNTRY_CODE;
                        var2.url = var9;
                        var9 = false;
                        var2.rejectWithError = var9;
                        var2 = var6.bind(var8)(var2);
                        _closure4_slot0 = var2;
                        var8 = _closure1_slot1;
                        var6 = 11;
                        var7 = var7[var6];
                        var8 = var8.bind(var5)(var7);
                        var7 = var8.wait;
                        var4 = function() { // Environment: var4
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'BILLING_IP_COUNTRY_CODE_FETCH_START';
                            var0.type = var3;
                            var3 = _closure4_slot0;
                            var0.request = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var4 = var7.bind(var8)(var4);
                        SaveGenerator(address = 175);
                    case 173:
                        return var2;
                    case 175:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun29211_ip = 239;
                            continue _fun29211
                        }
                    case 181:
                        var4 = var2.body;
                        var7 = var4.country_code;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var3 = var3[var6];
                        var6 = var4.bind(var5)(var3);
                        var4 = var6.dispatch;
                        var3 = {};
                        var8 = 'BILLING_SET_IP_COUNTRY_CODE';
                        var3.type = var8;
                        var3.countryCode = var7;
                        var3 = var4.bind(var6)(var3);
                    case 236: // try_end0
                        return var2;
                    case 239:
                        return var2;
                    case 242: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 11;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_IP_COUNTRY_CODE_FAILURE';
                        var3.type = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 292:
                        return var1;
                    case 295:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot79 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot79 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun29215: for (var _fun29215_ip = 0;;) switch (_fun29215_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29215_ip = 400;
                            continue _fun29215
                        }
                    case 15:
                        var5 = undefined;
                        if (!(var2 === var5)) {
                            _fun29215_ip = 23;
                            continue _fun29215
                        }
                    case 21:
                        var2 = false;
                    case 23:
                        var _closure4_slot0 = var5;
                        SaveGenerator(address = 31);
                    case 29:
                        return var5;
                    case 31:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29215_ip = 397;
                            continue _fun29215
                        }
                    case 40:
                        if (var2) {
                            _fun29215_ip = 75;
                            continue _fun29215
                        }
                    case 43:
                        var3 = _closure1_slot9;
                        var6 = var3.ipLocationRequest;
                        var3 = null;
                        if (!(var3 != var6)) {
                            _fun29215_ip = 75;
                            continue _fun29215
                        }
                    case 62:
                        var2 = _closure1_slot9;
                        var2 = var2.ipLocationRequest;
                        return var2;
                    case 75: // try_start_0
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot3;
                        var2 = 12;
                        var2 = var7[var2];
                        var2 = var6.bind(var5)(var2);
                        var8 = var2.HTTP;
                        var6 = var8.get;
                        var2 = {};
                        var9 = _closure1_slot12;
                        var9 = var9.BILLING_LOCATION;
                        var2.url = var9;
                        var9 = false;
                        var2.rejectWithError = var9;
                        var2 = var6.bind(var8)(var2);
                        _closure4_slot0 = var2;
                        var8 = _closure1_slot1;
                        var6 = 11;
                        var7 = var7[var6];
                        var8 = var8.bind(var5)(var7);
                        var7 = var8.wait;
                        var4 = function() { // Environment: var4
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 11;
                            var1 = var1[var0];
                            var0 = undefined;
                            var2 = var2.bind(var0)(var1);
                            var1 = var2.dispatch;
                            var0 = {};
                            var3 = 'BILLING_IP_LOCATION_FETCH_START';
                            var0.type = var3;
                            var3 = _closure4_slot0;
                            var0.request = var3;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                        };
                        var4 = var7.bind(var8)(var4);
                        SaveGenerator(address = 175);
                    case 173:
                        return var2;
                    case 175:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun29215_ip = 299;
                            continue _fun29215
                        }
                    case 181:
                        var4 = var2.body;
                        var7 = var4.country_code;
                        var4 = var2.body;
                        var12 = var4.subdivision_code;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot3;
                        var8 = var3[var6];
                        var10 = var4.bind(var5)(var8);
                        var9 = var10.dispatch;
                        var8 = {};
                        var11 = 'BILLING_SET_IP_LOCATION';
                        var8.type = var11;
                        var11 = {};
                        var11.countryCode = var7;
                        var11.subdivisionCode = var12;
                        var8.location = var11;
                        var8 = var9.bind(var10)(var8);
                        var3 = var3[var6];
                        var6 = var4.bind(var5)(var3);
                        var4 = var6.dispatch;
                        var3 = {};
                        var8 = 'BILLING_SET_IP_COUNTRY_CODE';
                        var3.type = var8;
                        var3.countryCode = var7;
                        var3 = var4.bind(var6)(var3);
                    case 296: // try_end0
                        return var2;
                    case 299:
                        return var2;
                    case 302: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var7 = 16;
                        var7 = var6[var7];
                        var9 = var4.bind(var5)(var7);
                        var8 = var9.track;
                        var3 = _closure1_slot11;
                        var7 = var3.BILLING_IP_LOCATION_FETCH_ERROR;
                        var3 = {};
                        var10 = var2.message;
                        var3.error_message = var10;
                        var3 = var8.bind(var9)(var7, var3);
                        var3 = 11;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_IP_LOCATION_FAILURE';
                        var3.type = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 397:
                        return var1;
                    case 400:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot80 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot80 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun29219: for (var _fun29219_ip = 0;;) switch (_fun29219_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29219_ip = 308;
                            continue _fun29219
                        }
                    case 10:
                        var8 = arg0;
                        var7 = arg1;
                    case 16: // try_start_0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var1 = 12;
                        var1 = var5[var1];
                        var5 = undefined;
                        var1 = var4.bind(var5)(var1);
                        var6 = var1.HTTP;
                        var4 = var6.post;
                        var1 = {};
                        var10 = _closure1_slot12;
                        var9 = var10.REACTIVATION_OFFER_REDEEM;
                        var8 = var8.id;
                        var7 = var7.id;
                        var7 = var9.bind(var10)(var8, var7);
                        var1.url = var7;
                        var7 = false;
                        var1.rejectWithError = var7;
                        var1 = var4.bind(var6)(var1);
                        SaveGenerator(address = 99);
                    case 97:
                        return var1;
                    case 99:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun29219_ip = 160;
                            continue _fun29219
                        }
                    case 105:
                        var4 = _closure1_slot1;
                        var6 = _closure1_slot3;
                        var3 = 11;
                        var3 = var6[var3];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var6 = 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS';
                        var3.type = var6;
                        var6 = var1.body;
                        var3.subscription = var6;
                        var3 = var4.bind(var5)(var3);
                    case 155: // try_end0
                        _fun29219_ip = 303;
                        continue _fun29219;
                    case 160:
                        return var1;
                    case 163: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var2 = var5;
                        var7 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var6 = 13;
                        var4 = var3[var6];
                        var3 = undefined;
                        var4 = var7.bind(var3)(var4);
                        var4 = var4.BillingError;
                        var4 = var5 instanceof var4;
                        if (var4) {
                            _fun29219_ip = 254;
                            continue _fun29219
                        }
                    case 206:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot3;
                        var4 = var4[var6];
                        var4 = var5.bind(var3)(var4);
                        var6 = var4.BillingError;
                        var12 = var2;
                        var5 = var6.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var6
                            }
                        });
                        var13 = var5;
                        var4 = new var13[var6](var12, var11);
                        var4 = var4 instanceof Object ? var4 : var5;
                        _fun29219_ip = 257;
                        continue _fun29219;
                    case 254:
                        var4 = var2;
                    case 257:
                        var2 = _closure1_slot1;
                        var5 = _closure1_slot3;
                        var1 = 11;
                        var1 = var5[var1];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var5 = 'BILLING_SUBSCRIPTION_UPDATE_FAIL';
                        var1.type = var5;
                        var1.error = var4;
                        var1 = var2.bind(var3)(var1);
                    case 303:
                        var1 = undefined;
                        return var1;
                    case 308:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot81 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot81 = var0;
    var0 = ['line1', 'line2', 'postalCode'];
    var _closure1_slot4 = var0;
    var0 = global;
    var20 = var0.Object;
    var17 = var20.defineProperty;
    var10 = {};
    var0 = true;
    var10.value = var0;
    var0 = '__esModule';
    var0 = var17.bind(var20)(var2, var0, var10);
    var0 = 0;
    var10 = var19[var0];
    var0 = undefined;
    var10 = var11.bind(var0)(var10);
    var _closure1_slot5 = var10;
    var10 = 1;
    var10 = var19[var10];
    var10 = var11.bind(var0)(var10);
    var _closure1_slot6 = var10;
    var10 = 2;
    var10 = var19[var10];
    var10 = var11.bind(var0)(var10);
    var _closure1_slot7 = var10;
    var10 = 3;
    var10 = var19[var10];
    var10 = var11.bind(var0)(var10);
    var _closure1_slot8 = var10;
    var10 = 4;
    var10 = var19[var10];
    var10 = var11.bind(var0)(var10);
    var _closure1_slot9 = var10;
    var10 = 5;
    var10 = var19[var10];
    var10 = var11.bind(var0)(var10);
    var _closure1_slot10 = var10;
    var10 = 6;
    var10 = var19[var10];
    var10 = var18.bind(var0)(var10);
    var17 = var10.AnalyticEvents;
    var _closure1_slot11 = var17;
    var17 = var10.Endpoints;
    var _closure1_slot12 = var17;
    var17 = var10.PaymentGateways;
    var _closure1_slot13 = var17;
    var17 = var10.REDIRECTED_PAYMENT_SOURCES;
    var _closure1_slot14 = var17;
    var17 = var10.SubscriptionStatusTypes;
    var _closure1_slot15 = var17;
    var10 = var10.VAULTABLE_PAYMENT_SOURCES;
    var _closure1_slot16 = var10;
    var10 = 7;
    var10 = var19[var10];
    var10 = var18.bind(var0)(var10);
    var10 = var10.UserLazyPerkSyncLevels;
    var _closure1_slot17 = var10;
    var10 = 8;
    var10 = var19[var10];
    var10 = var18.bind(var0)(var10);
    var10 = var10.StripeErrorTypes;
    var _closure1_slot18 = var10;
    var10 = 9;
    var10 = var19[var10];
    var10 = var18.bind(var0)(var10);
    var17 = var10.ADYEN_PAYMENT_SOURCES;
    var _closure1_slot19 = var17;
    var17 = var10.CurrencyCodes;
    var _closure1_slot20 = var17;
    var17 = var10.PaymentSourceTypes;
    var _closure1_slot21 = var17;
    var17 = var10.PaymentStatusTypes;
    var _closure1_slot22 = var17;
    var17 = var10.PREPAID_PAYMENT_SOURCES;
    var _closure1_slot23 = var17;
    var17 = var10.STRIPE_PAYMENT_SOURCES;
    var _closure1_slot24 = var17;
    var10 = var10.SubscriptionTypes;
    var _closure1_slot25 = var10;
    var10 = 10;
    var10 = var19[var10];
    var17 = var11.bind(var0)(var10);
    var10 = var17.prototype;
    var11 = Object.create(var10, {
        constructor: {
            value: var17
        }
    });
    var23 = 'BillingActionCreators.tsx';
    var24 = var11;
    var10 = new var24[var17](var23, var22);
    var10 = var10 instanceof Object ? var10 : var11;
    var _closure1_slot26 = var10;
    var10 = function arg0, arg1, arg2() {
        _fun29220: for (var _fun29220_ip = 0;;) switch (_fun29220_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = arg2;
                var4 = null;
                if (!(var4 == var2)) {
                    _fun29220_ip = 126;
                    continue _fun29220
                }
            case 15:
                if (!(var4 != var3)) {
                    _fun29220_ip = 111;
                    continue _fun29220
                }
            case 19:
                var0 = var3.payment_method;
                if (!(var4 != var0)) {
                    _fun29220_ip = 96;
                    continue _fun29220
                }
            case 29:
                var4 = _closure1_slot1;
                var5 = _closure1_slot3;
                var0 = 19;
                var0 = var5[var0];
                var6 = undefined;
                var5 = var4.bind(var6)(var0);
                var0 = var3.payment_method;
                var4 = 'string';
                var0 = typeof var0;
                var4 = var4 === var0;
                var0 = 'setupIntent.payment_method expanded not supported';
                var0 = var5.bind(var6)(var4, var0);
                var0 = {};
                var0.setupIntent = var3;
                var0.error = var2;
                return var0;
            case 96:
                var3 = undefined;
                var0 = 'setupIntent.payment_method not available with successful stripe call';
                var0 = var1.bind(var3)(var0);
                throw var0;
            case 111:
                var3 = undefined;
                var0 = 'SetupIntent not created';
                var0 = var1.bind(var3)(var0);
                throw var0;
            case 126:
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
                throw var0;
        }
    };
    var _closure1_slot27 = var10;
    var10 = function() { // Environment: var1
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function*(arg0) { // Environment: var0
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun29223: for (var _fun29223_ip = 0;;) switch (_fun29223_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29223_ip = 151;
                            continue _fun29223
                        }
                    case 13:
                        var4 = null;
                        if (!(var4 != var2)) {
                            _fun29223_ip = 126;
                            continue _fun29223
                        }
                    case 19:
                        var1 = var2.submit;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 33);
                    case 31:
                        return var1;
                    case 33:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29223_ip = 123;
                            continue _fun29223
                        }
                    case 39:
                        var6 = _closure1_slot26;
                        var5 = var6.info;
                        var3 = 'Stripe Elements submit response: ';
                        var3 = var5.bind(var6)(var3, var1);
                        var3 = var1.error;
                        if (!(var4 == var3)) {
                            _fun29223_ip = 76;
                            continue _fun29223
                        }
                    case 73:
                        return var1;
                    case 76:
                        var6 = _closure1_slot26;
                        var5 = var6.error;
                        var4 = var1.error;
                        var3 = 'Stripe Elements submit error: ';
                        var3 = var5.bind(var6)(var3, var4);
                        var5 = _closure1_slot39;
                        var4 = var1.error;
                        var3 = undefined;
                        var2 = true;
                        var2 = var5.bind(var3)(var4, var2);
                        throw var2;
                    case 123:
                        return var1;
                    case 126:
                        var4 = _closure1_slot39;
                        var3 = undefined;
                        var2 = 'Stripe Elements not loaded';
                        var1 = true;
                        var1 = var4.bind(var3)(var2, var1);
                        throw var1;
                    case 151:
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
    var11 = var10.bind(var0)();
    var _closure1_slot28 = var11;
    var10 = function() { // Environment: var1
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun29227: for (var _fun29227_ip = 0;;) switch (_fun29227_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29227_ip = 182;
                            continue _fun29227
                        }
                    case 13:
                        var2 = var3.createPaymentMethod;
                        var1 = {};
                        var4 = arg1;
                        var1.elements = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 38);
                    case 36:
                        return var1;
                    case 38:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29227_ip = 179;
                            continue _fun29227
                        }
                    case 47:
                        var3 = var1.paymentMethod;
                        var5 = var1.error;
                        var2 = null;
                        if (!(var2 == var5)) {
                            _fun29227_ip = 139;
                            continue _fun29227
                        }
                    case 64:
                        if (!(var2 != var3)) {
                            _fun29227_ip = 82;
                            continue _fun29227
                        }
                    case 68:
                        var2 = {};
                        var2.paymentMethod = var3;
                        var2.error = var5;
                        return var2;
                    case 82:
                        var7 = _closure1_slot26;
                        var6 = var7.warn;
                        var4 = {};
                        var4.paymentMethod = var3;
                        var4.error = var5;
                        var3 = 'Stripe createPaymentMethod failed to return payment method: ';
                        var3 = var6.bind(var7)(var3, var4);
                        var6 = _closure1_slot39;
                        var4 = undefined;
                        var3 = 'paymentMethod not available with successful stripe call';
                        var2 = true;
                        var2 = var6.bind(var4)(var3, var2);
                        throw var2;
                    case 139:
                        var6 = _closure1_slot26;
                        var4 = var6.error;
                        var3 = 'Stripe createPaymentMethod error: ';
                        var3 = var4.bind(var6)(var3, var5);
                        var4 = _closure1_slot39;
                        var3 = undefined;
                        var2 = true;
                        var2 = var4.bind(var3)(var5, var2);
                        throw var2;
                    case 179:
                        return var1;
                    case 182:
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
    var10 = var10.bind(var0)();
    var _closure1_slot29 = var10;
    var10 = function() { // Environment: var1
        var3 = _closure1_slot6;
        var2 = undefined;
        var1 = function*(arg0, arg1) { // Environment: var0
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun29231: for (var _fun29231_ip = 0;;) switch (_fun29231_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg0;
                        var4 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29231_ip = 151;
                            continue _fun29231
                        }
                    case 16:
                        var1 = null;
                        if (!(var1 != var5)) {
                            _fun29231_ip = 126;
                            continue _fun29231
                        }
                    case 22:
                        if (!(var1 != var4)) {
                            _fun29231_ip = 101;
                            continue _fun29231
                        }
                    case 26:
                        var1 = _closure1_slot28;
                        var3 = undefined;
                        var1 = var1.bind(var3)(var4);
                        SaveGenerator(address = 44);
                    case 42:
                        return var1;
                    case 44:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun29231_ip = 98;
                            continue _fun29231
                        }
                    case 50:
                        var2 = _closure1_slot29;
                        var2 = var2.bind(var3)(var5, var4);
                        SaveGenerator(address = 64);
                    case 62:
                        return var2;
                    case 64:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29231_ip = 95;
                            continue _fun29231
                        }
                    case 70:
                        var3 = {};
                        var4 = var2.paymentMethod;
                        var3.paymentMethod = var4;
                        var4 = var2.error;
                        var3.error = var4;
                        return var3;
                    case 95:
                        return var2;
                    case 98:
                        return var1;
                    case 101:
                        var4 = _closure1_slot39;
                        var3 = undefined;
                        var2 = 'Stripe Elements not loaded';
                        var1 = true;
                        var1 = var4.bind(var3)(var2, var1);
                        throw var1;
                    case 126:
                        var4 = _closure1_slot39;
                        var3 = undefined;
                        var2 = 'Stripe not loaded';
                        var1 = true;
                        var1 = var4.bind(var3)(var2, var1);
                        throw var1;
                    case 151:
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
    var10 = var10.bind(var0)();
    var17 = 25;
    var17 = var19[var17];
    var19 = var18.bind(var0)(var17);
    var18 = var19.fileFinishedImporting;
    var17 = 'actions/BillingActionCreators.tsx';
    var17 = var18.bind(var19)(var17);
    var17 = function() {
        var0 = undefined;
        var3 = _closure1_slot30;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.deletePaymentSource = var17;
    var17 = function() {
        var0 = undefined;
        var3 = _closure1_slot31;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.updatePaymentSource = var17;
    var2.validatePaymentSourceBillingAddress = var16;
    var2.createAdyenPaymentSourceToken = var15;
    var2.createPaymentSource = var14;
    var2.dispatchPaymentElementsConfirmationError = var13;
    var2.dispatchConfirmationError = var12;
    var12 = function() {
        var0 = undefined;
        var3 = _closure1_slot41;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.createCardToken = var12;
    var12 = function() {
        var0 = undefined;
        var3 = _closure1_slot42;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.confirmEPS = var12;
    var12 = function() {
        var0 = undefined;
        var3 = _closure1_slot43;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.confirmIdeal = var12;
    var12 = function() {
        var0 = undefined;
        var3 = _closure1_slot44;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.confirmPrzelewy24 = var12;
    var2.submitElementsForPaymentElement = var11;
    var2.createPaymentRequestMethodForPaymentElement = var10;
    var10 = function() {
        var0 = undefined;
        var3 = _closure1_slot45;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.confirmPaymentElementSource = var10;
    var10 = function() {
        var0 = undefined;
        var3 = _closure1_slot46;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.confirmCardPaymentSource = var10;
    var10 = function arg0, arg1, arg2() {
        _fun29241: for (var _fun29241_ip = 0;;) switch (_fun29241_ip) {
            case 0:
                var0 = arg1;
                var3 = _closure1_slot2;
                var4 = _closure1_slot3;
                var2 = 21;
                var2 = var4[var2];
                var5 = undefined;
                var4 = var3.bind(var5)(var2);
                var3 = var4.parseStripePaymentMethod;
                var2 = arg0;
                var2 = var3.bind(var4)(var2);
                var4 = var2.token;
                var3 = var2.billingAddressInfo;
                var2 = _closure1_slot37;
                var1 = _closure1_slot13;
                var1 = var1.STRIPE;
                var6 = null;
                if (!(var6 != var0)) {
                    _fun29241_ip = 77;
                    continue _fun29241
                }
            case 74:
                var3 = var0;
            case 77:
                var0 = {};
                var6 = arg2;
                var0.analyticsLocation = var6;
                var11 = undefined;
                var10 = var1;
                var9 = var4;
                var8 = var3;
                var7 = var0;
                var0 = var11[var2](var10, var9, var8, var7, var6);
                return var0;
        }
    };
    var2.createPaymentRequestPaymentSource = var10;
    var10 = function arg0, arg1, arg2() {
        var5 = _closure1_slot37;
        var0 = _closure1_slot13;
        var9 = var0.BRAINTREE;
        var3 = {};
        var0 = arg2;
        var3.analyticsLocation = var0;
        var10 = undefined;
        var8 = arg0;
        var7 = arg1;
        var6 = var3;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.createBraintreePaymentSource = var10;
    var10 = function() {
        var0 = undefined;
        var3 = _closure1_slot47;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.createStripePaymentSource = var10;
    var10 = function() {
        var0 = undefined;
        var3 = _closure1_slot48;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.createAdyenPrepaidPaymentSource = var10;
    var10 = function() {
        var0 = undefined;
        var3 = _closure1_slot49;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.createAdyenVaultablePaymentSource = var10;
    var2.createStripePaymentSourceToken = var9;
    var2.createPaymentSourceToken = var8;
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot53;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchPaymentSources = var8;
    var8 = function() {
        var0 = undefined;
        var3 = _closure1_slot54;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchPaymentSource = var8;
    var2.fetchPayment = var7;
    var7 = function() {
        var0 = undefined;
        var3 = _closure1_slot57;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchPayments = var7;
    var7 = function() {
        var0 = undefined;
        var3 = _closure1_slot58;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchSubscriptions = var7;
    var7 = function() {
        var0 = undefined;
        var3 = _closure1_slot59;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getPerksRelevance = var7;
    var7 = function() {
        var0 = undefined;
        var3 = _closure1_slot60;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getNitroAffinity = var7;
    var7 = function() {
        var0 = undefined;
        var3 = _closure1_slot61;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchMostRecentSubscription = var7;
    var7 = function() {
        var0 = undefined;
        var3 = _closure1_slot62;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.createSubscription = var7;
    var7 = function() {
        var0 = undefined;
        var3 = _closure1_slot63;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.payInvoiceManually = var7;
    var2.handleConfirmation = var6;
    var6 = function() {
        var0 = undefined;
        var3 = _closure1_slot67;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.redirectedPaymentSucceeded = var6;
    var2.paymentIntentSucceeded = var5;
    var5 = function() {
        var0 = undefined;
        var3 = _closure1_slot73;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.cancelSubscription = var5;
    var5 = function arg0, arg1() {
        var6 = arg0;
        var5 = _closure1_slot74;
        var4 = {};
        var1 = var6.items;
        var4.items = var1;
        var3 = {};
        var1 = 0;
        var3.amount = var1;
        var1 = var6.currency;
        var3.currency = var1;
        var1 = _closure1_slot0;
        var2 = _closure1_slot3;
        var0 = 23;
        var0 = var2[var0];
        var2 = undefined;
        var9 = var1.bind(var2)(var0);
        var8 = var9.getItemPlansTotalServerPrice;
        var7 = var6.items;
        var1 = var6.currency;
        var0 = var6.paymentSourceId;
        var11 = var8.bind(var9)(var7, var1, var0);
        var10 = arg1;
        var15 = undefined;
        var14 = var6;
        var13 = var4;
        var12 = var3;
        var0 = var15[var5](var14, var13, var12, var11, var10, var9);
        return var0;
    };
    var2.deleteRenewalMutation = var5;
    var2.updateSubscription = var4;
    var4 = function arg0, arg1, arg2, arg3, arg4() {
        _fun29258: for (var _fun29258_ip = 0;;) switch (_fun29258_ip) {
            case 0:
                var7 = arg0;
                var10 = arg2;
                var6 = _closure1_slot74;
                var5 = {};
                var1 = _closure1_slot15;
                var1 = var1.ACTIVE;
                var5.status = var1;
                var5.paymentSource = var10;
                var1 = arg3;
                var5.currency = var1;
                var4 = {};
                var1 = 0;
                var4.amount = var1;
                var1 = var7.currency;
                var4.currency = var1;
                var1 = _closure1_slot0;
                var2 = _closure1_slot3;
                var0 = 23;
                var0 = var2[var0];
                var3 = undefined;
                var9 = var1.bind(var3)(var0);
                var8 = var9.getItemPlansTotalServerPrice;
                var2 = var7.items;
                var1 = var7.currency;
                var0 = null;
                var11 = var0 == var10;
                var0 = undefined;
                if (var11) {
                    _fun29258_ip = 117;
                    continue _fun29258
                }
            case 112:
                var0 = var10.id;
            case 117:
                var14 = var8.bind(var9)(var2, var1, var0);
                var13 = arg1;
                var12 = arg4;
                var18 = undefined;
                var17 = var7;
                var16 = var5;
                var15 = var4;
                var0 = var18[var6](var17, var16, var15, var14, var13, var12, var11);
                return var0;
        }
    };
    var2.resubscribeToSubscription = var4;
    var4 = function arg0, arg1, arg2, arg3, arg4, arg5() {
        var7 = arg0;
        var2 = _closure1_slot0;
        var3 = _closure1_slot3;
        var0 = 23;
        var0 = var3[var0];
        var6 = undefined;
        var3 = var2.bind(var6)(var0);
        var2 = var3.getItemsWithUpsertedPremiumPlanId;
        var0 = arg1;
        var0 = var2.bind(var3)(var7, var0);
        var5 = _closure1_slot74;
        var4 = {};
        var1 = _closure1_slot15;
        var1 = var1.ACTIVE;
        var4.status = var1;
        var4.items = var0;
        var11 = arg2;
        var10 = arg3;
        var9 = arg4;
        var8 = arg5;
        var14 = undefined;
        var13 = var7;
        var12 = var4;
        var0 = var14[var5](var13, var12, var11, var10, var9, var8, var7);
        return var0;
    };
    var2.upgradeSubscription = var4;
    var4 = function arg0, arg1, arg2, arg3, arg4() {
        var1 = arg1;
        var7 = _closure1_slot74;
        var6 = {};
        var6.currency = var1;
        var5 = {};
        var0 = 0;
        var5.amount = var0;
        var0 = var1.toLowerCase;
        var0 = var0.bind(var1)();
        var5.currency = var0;
        var14 = undefined;
        var13 = arg0;
        var10 = arg2;
        var9 = arg3;
        var8 = arg4;
        var12 = var6;
        var11 = var5;
        var0 = var14[var7](var13, var12, var11, var10, var9, var8, var7);
        return var0;
    };
    var2.changeSubscriptionCurrency = var4;
    var4 = function arg0, arg1, arg2, arg3, arg4, arg5() {
        var1 = arg2;
        var7 = _closure1_slot74;
        var6 = {};
        var0 = arg1;
        var6.paymentSource = var0;
        var6.currency = var1;
        var5 = {};
        var0 = 0;
        var5.amount = var0;
        var0 = var1.toLowerCase;
        var0 = var0.bind(var1)();
        var5.currency = var0;
        var14 = undefined;
        var13 = arg0;
        var10 = arg3;
        var9 = arg4;
        var8 = arg5;
        var12 = var6;
        var11 = var5;
        var0 = var14[var7](var13, var12, var11, var10, var9, var8, var7);
        return var0;
    };
    var2.changePaymentSource = var4;
    var4 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'BILLING_PAYMENT_SOURCE_UPDATE_CLEAR_ERROR';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearUpdatePaymentSourceError = var4;
    var4 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'BILLING_PAYMENT_SOURCE_REMOVE_CLEAR_ERROR';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearRemovePaymentSourceError = var4;
    var4 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'PAYMENT_AUTHENTICATION_CLEAR_ERROR';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.clearPaymentAuthenticationError = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot76;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.voidPendingPayment = var4;
    var2.popupBridgeState = var3;
    var3 = function arg0() {
        var1 = arg0;
        var10 = var1.paymentSourceType;
        var _closure2_slot0 = var10;
        var8 = var1.state;
        var7 = var1.path;
        var6 = var1.query;
        var5 = var1.insecure;
        var2 = _closure1_slot1;
        var9 = _closure1_slot3;
        var1 = 11;
        var1 = var9[var1];
        var3 = undefined;
        var11 = var2.bind(var3)(var1);
        var2 = var11.dispatch;
        var1 = {};
        var12 = 'BILLING_POPUP_BRIDGE_CALLBACK_START';
        var1.type = var12;
        var1.paymentSourceType = var10;
        var1 = var2.bind(var11)(var1);
        var2 = _closure1_slot0;
        var1 = 12;
        var1 = var9[var1];
        var1 = var2.bind(var3)(var1);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var9 = _closure1_slot12;
        var4 = var9.BILLING_POPUP_BRIDGE_CALLBACK;
        var4 = var4.bind(var9)(var10);
        var1.url = var4;
        var4 = {};
        var4.state = var8;
        var4.path = var7;
        var4.query = var6;
        var4.insecure = var5;
        var1.body = var4;
        var4 = true;
        var1.oldFormErrors = var4;
        var4 = false;
        var1.rejectWithError = var4;
        var2 = var2.bind(var3)(var1);
        var1 = var2.then;
        var0 = function(arg0) { // Environment: var0
            var2 = _closure1_slot1;
            var1 = _closure1_slot3;
            var0 = 11;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.dispatch;
            var0 = {};
            var3 = 'BILLING_POPUP_BRIDGE_CALLBACK_END';
            var0.type = var3;
            var3 = _closure2_slot0;
            var0.paymentSourceType = var3;
            var0 = var1.bind(var2)(var0);
            var0 = arg0;
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.popupBridgeCallback = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot79;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchIpCountryCode = var3;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot80;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.fetchIpLocation = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'RESET_PAYMENT_ID';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetPaymentIntentId = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'BILLING_SUBSCRIPTION_RESET';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.resetSubscriptionStore = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot3;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'USER_PAYMENT_BROWSER_CHECKOUT_STARTED';
        var1.type = var4;
        var4 = arg0;
        var1.loadId = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.startBrowserCheckout = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot81;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.redeemReactivationOffer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 5, 3074, 1620, 3072, 3078, 660, 3083, 3405, 483, 3, 806, 507, 3311, 3314, 1234, 795, 3086, 3406, 44, 3407, 3410, 3006, 3070, 3413, 2]);