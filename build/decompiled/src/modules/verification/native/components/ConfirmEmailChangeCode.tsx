// modules/verification/native/components/ConfirmEmailChangeCode.tsx
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.setEmailToken;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/verification/native/components/ConfirmEmailChangeCode.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var9 = var0.isChangeEmail;
        var _closure2_slot0 = var9;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var0 = 4;
        var0 = var8[var0];
        var3 = undefined;
        var1 = var7.bind(var3)(var0);
        var0 = var1.useNavigation;
        var0 = var0.bind(var1)();
        var _closure2_slot1 = var0;
        var6 = _closure1_slot4;
        var2 = var6.useCallback;
        var1 = new Array(2);
        var1[0] = var9;
        var1[1] = var0;
        var0 = function(arg0) { // Environment: var4
            _fun60448: for (var _fun60448_ip = 0;;) switch (_fun60448_ip) {
                case 0:
                    var0 = arg0;
                    var3 = _closure1_slot5;
                    var2 = null;
                    var4 = var2 != var0;
                    if (!var4) {
                        _fun60448_ip = 22;
                        continue _fun60448
                    }
                case 19:
                    var2 = var0;
                case 22:
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var4 = _closure2_slot0;
                    var3 = _closure2_slot1;
                    var2 = var3.push;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 5;
                    var1 = var6[var1];
                    var1 = var5.bind(var0)(var1);
                    var1 = var1.VerificationModalScenes;
                    if (var4) {
                        _fun60448_ip = 87;
                        continue _fun60448
                    }
                case 74:
                    var4 = var1.ENTER_EMAIL;
                    var4 = var2.bind(var3)(var4);
                    _fun60448_ip = 98;
                    continue _fun60448;
                case 87:
                    var1 = var1.CHANGE_EMAIL_COLLECT_REASONS;
                    var1 = var2.bind(var3)(var1);
                case 98:
                    return var0;
            }
        };
        var6 = var2.bind(var6)(var0, var1);
        var2 = _closure1_slot6;
        var1 = _closure1_slot1;
        var0 = 6;
        var0 = var8[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var9 = function() { // Environment: var4
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun60451: for (var _fun60451_ip = 0;;) switch (_fun60451_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun60451_ip = 62;
                                continue _fun60451
                            }
                        case 7:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var1 = 7;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.confirmEmailChange;
                            var1 = arg0;
                            var1 = var2.bind(var3)(var1);
                            SaveGenerator(address = 50);
                        case 48:
                            return var1;
                        case 50:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                            if (var2) {
                                _fun60451_ip = 59;
                                continue _fun60451
                            }
                        case 56:
                            return var1;
                        case 59:
                            return var1;
                        case 62:
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
        var9 = var9.bind(var3)();
        var0.onFormSubmit = var9;
        var0.onSuccess = var6;
        var5 = _closure1_slot3;
        var4 = function*() { // Environment: var4
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun60454: for (var _fun60454_ip = 0;;) switch (_fun60454_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun60454_ip = 58;
                            continue _fun60454
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var1 = 7;
                        var1 = var2[var1];
                        var2 = undefined;
                        var3 = var3.bind(var2)(var1);
                        var1 = var3.sendConfirmationCode;
                        var1 = var1.bind(var3)();
                        SaveGenerator(address = 46);
                    case 44:
                        return var1;
                    case 46:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun60454_ip = 55;
                            continue _fun60454
                        }
                    case 52:
                        return var2;
                    case 55:
                        return var1;
                    case 58:
                        return var0;
                }
            };
            return var0;
        };
        var4 = var5.bind(var3)(var4);
        var0.onResend = var4;
        var4 = 8;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var9 = var5.intl;
        var6 = var9.string;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var5 = var5.t;
        var5 = var5["2x/2Uo"];
        var5 = var6.bind(var9)(var5);
        var0.headerText = var5;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.PDTjLN;
        var4 = var5.bind(var6)(var4);
        var0.confirmButtonText = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 7427, 33, 1469, 670, 7438, 7436, 1234, 2]);