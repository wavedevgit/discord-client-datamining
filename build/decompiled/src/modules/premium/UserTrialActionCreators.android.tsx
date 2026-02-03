// modules/premium/UserTrialActionCreators.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.Endpoints;
    var _closure1_slot4 = var6;
    var1 = var1.PaymentGateways;
    var _closure1_slot5 = var1;
    var1 = {};
    var6 = function() {
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun59165: for (var _fun59165_ip = 0;;) switch (_fun59165_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59165_ip = 216;
                            continue _fun59165
                        }
                    case 10: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 2;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.get;
                        var1 = {};
                        var6 = _closure1_slot4;
                        var6 = var6.USER_TRIAL_OFFER;
                        var1.url = var6;
                        var6 = {};
                        var7 = _closure1_slot5;
                        var7 = var7.GOOGLE;
                        var6.payment_gateway = var7;
                        var1.query = var6;
                        var6 = true;
                        var1.oldFormErrors = var6;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 103);
                    case 101:
                        return var1;
                    case 103:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun59165_ip = 161;
                            continue _fun59165
                        }
                    case 109:
                        var5 = var1.body;
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 3;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS';
                        var2.type = var6;
                        var2.userTrialOffer = var5;
                        var2 = var3.bind(var4)(var2);
                    case 159: // try_end0
                        _fun59165_ip = 211;
                        continue _fun59165;
                    case 161:
                        return var1;
                    case 164: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS';
                        var1.type = var4;
                        var1 = var2.bind(var3)(var1);
                    case 211:
                        var1 = undefined;
                        return var1;
                    case 216:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.fetchUserTrialOffer = var6;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun59168: for (var _fun59168_ip = 0;;) switch (_fun59168_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun59168_ip = 266;
                            continue _fun59168
                        }
                    case 10:
                        var1 = _closure2_slot0;
                        var2 = var1.expires_at;
                        var1 = null;
                        if (!(var1 == var2)) {
                            _fun59168_ip = 261;
                            continue _fun59168
                        }
                    case 32: // try_start_0
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var1 = 2;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var5 = var1.HTTP;
                        var3 = var5.post;
                        var1 = {};
                        var8 = _closure1_slot4;
                        var7 = var8.USER_TRIAL_OFFER_ACKNOWLEDGED;
                        var6 = _closure2_slot0;
                        var6 = var6.id;
                        var6 = var7.bind(var8)(var6);
                        var1.url = var6;
                        var6 = {};
                        var7 = _closure1_slot5;
                        var7 = var7.GOOGLE;
                        var6.payment_gateway = var7;
                        var1.body = var6;
                        var6 = false;
                        var1.rejectWithError = var6;
                        var1 = var3.bind(var5)(var1);
                        SaveGenerator(address = 134);
                    case 132:
                        return var1;
                    case 134:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun59168_ip = 192;
                            continue _fun59168
                        }
                    case 140:
                        var5 = var1.body;
                        var3 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var2 = 3;
                        var2 = var6[var2];
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var6 = 'BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS';
                        var2.type = var6;
                        var2.userTrialOffer = var5;
                        var2 = var3.bind(var4)(var2);
                    case 190: // try_end0
                        _fun59168_ip = 261;
                        continue _fun59168;
                    case 192:
                        return var1;
                    case 195: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var2 = var1.status;
                        var1 = 404;
                        if (!(var1 === var2)) {
                            _fun59168_ip = 261;
                            continue _fun59168
                        }
                    case 212:
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 3;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.dispatch;
                        var1 = {
                            'type': 'BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS',
                            'userTrialOffer': null
                        };
                        var1 = var2.bind(var3)(var1);
                    case 261:
                        var1 = undefined;
                        return var1;
                    case 266:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.acknowledgeUserTrialOffer = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/UserTrialActionCreators.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 507, 806, 2]);