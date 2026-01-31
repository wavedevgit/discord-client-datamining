// modules/billing/actions/StripeActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun29369: for (var _fun29369_ip = 0;;) switch (_fun29369_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29369_ip = 127;
                            continue _fun29369
                        }
                    case 10:
                        var4 = undefined;
                        if (!(var5 === var4)) {
                            _fun29369_ip = 18;
                            continue _fun29369
                        }
                    case 16:
                        var5 = {};
                    case 18:
                        SaveGenerator(address = 22);
                    case 20:
                        return var4;
                    case 22:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29369_ip = 124;
                            continue _fun29369
                        }
                    case 28:
                        var3 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var2 = 3;
                        var2 = var7[var2];
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.post;
                        var2 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true
                        };
                        var6 = _closure1_slot4;
                        var6 = var6.BILLING_STRIPE_SETUP_INTENT_SECRET;
                        var2.url = var6;
                        var9 = var2;
                        var8 = var5;
                        var5 = copyDataProperties(var9, var8);
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 107);
                    case 105:
                        return var2;
                    case 107:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29369_ip = 121;
                            continue _fun29369
                        }
                    case 113:
                        var3 = var2.body;
                        return var3;
                    case 121:
                        return var2;
                    case 124:
                        return var1;
                    case 127:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.Endpoints;
    var _closure1_slot4 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun29372: for (var _fun29372_ip = 0;;) switch (_fun29372_ip) {
                    case 0:
                        StartGenerator();
                        var3 = arguments[0];
                        var5 = arguments[1];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun29372_ip = 266;
                            continue _fun29372
                        }
                    case 16:
                        var4 = undefined;
                        if (!(var3 === var4)) {
                            _fun29372_ip = 24;
                            continue _fun29372
                        }
                    case 22:
                        var3 = undefined;
                    case 24:
                        if (!(var5 === var4)) {
                            _fun29372_ip = 30;
                            continue _fun29372
                        }
                    case 28:
                        var5 = {};
                    case 30:
                        SaveGenerator(address = 34);
                    case 32:
                        return var4;
                    case 34:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun29372_ip = 263;
                            continue _fun29372
                        }
                    case 43:
                        var8 = null;
                        if (!(var8 == var3)) {
                            _fun29372_ip = 130;
                            continue _fun29372
                        }
                    case 49:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var2 = 4;
                        var2 = var7[var2];
                        var7 = var6.bind(var4)(var2);
                        var6 = var7.getPaymentMethods;
                        var2 = {};
                        var9 = _closure1_slot3;
                        var9 = var9.ipCountryCode;
                        var10 = var8 != var9;
                        var8 = 'ALL';
                        if (!var10) {
                            _fun29372_ip = 104;
                            continue _fun29372
                        }
                    case 101:
                        var8 = var9;
                    case 104:
                        var2.ipCountryCode = var8;
                        var8 = 'create_setup_intent_for_payment_elements';
                        var2.location = var8;
                        var2 = var6.bind(var7)(var2);
                        var3 = var2.countryPaymentMethods;
                    case 130:
                        var6 = var3.length;
                        var2 = 0;
                        if (!(!(var6 > var2))) {
                            _fun29372_ip = 145;
                            continue _fun29372
                        }
                    case 141:
                        var6 = {};
                        _fun29372_ip = 157;
                        continue _fun29372;
                    case 145:
                        var2 = {};
                        var2.regional_payment_source_types = var3;
                        var6 = var2;
                    case 157:
                        var3 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var2 = 3;
                        var2 = var8[var2];
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.HTTP;
                        var3 = var4.post;
                        var2 = {
                            'url': null,
                            'oldFormErrors': true,
                            'rejectWithError': true,
                            'body': null,
                            'failImmediatelyWhenRateLimited': true
                        };
                        var7 = _closure1_slot4;
                        var7 = var7.BILLING_STRIPE_SETUP_INTENT_SECRET_FOR_PAYMENT_ELEMENTS;
                        var2.url = var7;
                        var2.body = var6;
                        var12 = var2;
                        var11 = var5;
                        var5 = copyDataProperties(var12, var11);
                        var2 = var3.bind(var4)(var2);
                        SaveGenerator(address = 246);
                    case 244:
                        return var2;
                    case 246:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 3);
                        if (var3) {
                            _fun29372_ip = 260;
                            continue _fun29372
                        }
                    case 252:
                        var3 = var2.body;
                        return var3;
                    case 260:
                        return var2;
                    case 263:
                        return var1;
                    case 266:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var1 = var1.bind(var0)();
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/actions/StripeActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.createStripeSetupIntent = var3;
    var2.createSetupIntentForPaymentElements = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3070, 660, 507, 3406, 2]);