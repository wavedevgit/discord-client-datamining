// modules/verification/ChangeEmailActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun61128: for (var _fun61128_ip = 0;;) switch (_fun61128_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun61128_ip = 142;
                            continue _fun61128
                        }
                    case 10:
                        var2 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 2;
                        var1 = var8[var1];
                        var7 = undefined;
                        var3 = var2.bind(var7)(var1);
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot4;
                        var4 = var4.USER_EMAIL_VERIFY_CODE;
                        var1.url = var4;
                        var4 = {};
                        var6 = arg0;
                        var4.code = var6;
                        var1.body = var4;
                        var4 = {};
                        var6 = _closure1_slot0;
                        var5 = 3;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.NetworkActionNames;
                        var5 = var5.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE;
                        var4.event = var5;
                        var1.trackedActionData = var4;
                        var4 = false;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 125);
                    case 123:
                        return var1;
                    case 125:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun61128_ip = 139;
                            continue _fun61128
                        }
                    case 131:
                        var2 = var1.body;
                        return var2;
                    case 139:
                        return var1;
                    case 142:
                        return var0;
                }
            };
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/verification/ChangeEmailActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        _fun61129: for (var _fun61129_ip = 0;;) switch (_fun61129_ip) {
            case 0:
                var5 = arguments[0];
                var7 = undefined;
                if (!(var5 === var7)) {
                    _fun61129_ip = 11;
                    continue _fun61129
                }
            case 9:
                var5 = false;
            case 11:
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 2;
                var0 = var8[var0];
                var2 = var1.bind(var7)(var0);
                var1 = var2.put;
                var0 = {};
                var3 = _closure1_slot4;
                var3 = var3.USER_EMAIL;
                var0.url = var3;
                var3 = {};
                var6 = _closure1_slot0;
                var4 = 3;
                var4 = var8[var4];
                var4 = var6.bind(var7)(var4);
                var4 = var4.NetworkActionNames;
                var4 = var4.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE;
                var3.event = var4;
                var4 = {};
                var4.is_resend = var5;
                var3.properties = var4;
                var0.trackedActionData = var3;
                var3 = false;
                var0.rejectWithError = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.sendConfirmationCode = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.confirmEmailChange = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 4525, 481, 2]);