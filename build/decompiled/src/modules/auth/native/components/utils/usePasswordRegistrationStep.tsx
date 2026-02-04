// modules/auth/native/components/utils/usePasswordRegistrationStep.tsx
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useRegistrationUIStore;
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/auth/native/components/utils/usePasswordRegistrationStep.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun100429: for (var _fun100429_ip = 0;;) switch (_fun100429_ip) {
            case 0:
                var3 = _closure1_slot6;
                var9 = undefined;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.registrationOptions;
                    return var0;
                };
                var2 = var3.bind(var9)(var2);
                var4 = _closure1_slot5;
                var3 = var4.useState;
                var5 = var2.password;
                var2 = null;
                var6 = var2 != var5;
                var2 = '';
                if (!var6) {
                    _fun100429_ip = 54;
                    continue _fun100429
                }
            case 51:
                var2 = var5;
            case 54:
                var4 = var3.bind(var4)(var2);
                var3 = _closure1_slot4;
                var2 = 2;
                var3 = var3.bind(var9)(var4, var2);
                var2 = 0;
                var5 = var3[var2];
                var _closure2_slot0 = var5;
                var2 = 1;
                var4 = var3[var2];
                var3 = _closure1_slot6;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.errors;
                    return var0;
                };
                var7 = var3.bind(var9)(var2);
                var3 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 4;
                var2 = var6[var2];
                var3 = var3.bind(var9)(var2);
                var2 = 'password';
                var8 = var3.bind(var9)(var2, var7);
                var _closure2_slot1 = var8;
                var3 = _closure1_slot0;
                var2 = 5;
                var2 = var6[var2];
                var3 = var3.bind(var9)(var2);
                var2 = var3.usePasswordScore;
                var2 = var2.bind(var3)(var5);
                var3 = var2.passwordScore;
                var2 = var2.passwordValid;
                var _closure2_slot2 = var2;
                var7 = _closure1_slot5;
                var10 = var7.useMemo;
                var6 = new Array(3);
                var6[0] = var5;
                var6[1] = var8;
                var6[2] = var2;
                var2 = function() { // Environment: var0
                    _fun100432: for (var _fun100432_ip = 0;;) switch (_fun100432_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            var4 = null;
                            var0 = var4 == var0;
                            if (var0) {
                                _fun100432_ip = 28;
                                continue _fun100432
                            }
                        case 16:
                            var3 = _closure2_slot0;
                            var1 = '';
                            var0 = var1 === var3;
                        case 28:
                            if (var0) {
                                _fun100432_ip = 74;
                                continue _fun100432
                            }
                        case 31:
                            var1 = _closure2_slot0;
                            var3 = var1.length;
                            var1 = 8;
                            var1 = var3 < var1;
                            if (var1) {
                                _fun100432_ip = 58;
                                continue _fun100432
                            }
                        case 50:
                            var3 = _closure2_slot1;
                            var1 = var4 != var3;
                        case 58:
                            if (var1) {
                                _fun100432_ip = 71;
                                continue _fun100432
                            }
                        case 61:
                            var3 = _closure2_slot2;
                            var2 = false;
                            var1 = var2 === var3;
                        case 71:
                            var0 = var1;
                        case 74:
                            return var0;
                    }
                };
                var2 = var10.bind(var7)(var2, var6);
                var6 = var7.useCallback;
                var1 = _closure1_slot3;
                var0 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun100434: for (var _fun100434_ip = 0;;) switch (_fun100434_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun100434_ip = 336;
                                    continue _fun100434
                                }
                            case 10:
                                var3 = _closure2_slot0;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun100434_ip = 271;
                                    continue _fun100434
                                }
                            case 26:
                                var4 = _closure2_slot0;
                                var3 = '';
                                if (!(var3 !== var4)) {
                                    _fun100434_ip = 271;
                                    continue _fun100434
                                }
                            case 41:
                                var3 = _closure2_slot0;
                                var4 = var3.length;
                                var3 = 8;
                                if (!(!(var4 < var3))) {
                                    _fun100434_ip = 208;
                                    continue _fun100434
                                }
                            case 60:
                                var3 = _closure2_slot1;
                                if (!(var2 == var3)) {
                                    _fun100434_ip = 201;
                                    continue _fun100434
                                }
                            case 71: // try_start_0
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var3 = 7;
                                var3 = var6[var3];
                                var8 = undefined;
                                var6 = var5.bind(var8)(var3);
                                var5 = var6.scorePassword;
                                var3 = _closure2_slot0;
                                var3 = var5.bind(var6)(var3);
                                SaveGenerator(address = 115);
                            case 113:
                                return var3;
                            case 115:
                                ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                                if (var5) {
                                    _fun100434_ip = 193;
                                    continue _fun100434
                                }
                            case 121:
                                var6 = var3.valid;
                                var5 = false;
                                if (!(var5 !== var6)) {
                                    _fun100434_ip = 135;
                                    continue _fun100434
                                }
                            case 133: // try_end0
                                _fun100434_ip = 198;
                                continue _fun100434;
                            case 135: // try_start_1
                                var7 = _closure1_slot0;
                                var9 = _closure1_slot2;
                                var4 = 6;
                                var5 = var9[var4];
                                var5 = var7.bind(var8)(var5);
                                var6 = var5.intl;
                                var5 = var6.string;
                                var4 = var9[var4];
                                var4 = var7.bind(var8)(var4);
                                var4 = var4.t;
                                var4 = var4.DfaKHr;
                                var4 = var5.bind(var6)(var4);
                            case 190: // try_end1
                                return var4;
                            case 193:
                                return var3;
                            case 196: // catch_target0 // catch_target1
                                CatchBlockStart(arg_register = 3);
                            case 198:
                                return var2;
                            case 201:
                                var1 = _closure2_slot1;
                                return var1;
                            case 208:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var1 = 6;
                                var2 = var6[var1];
                                var4 = undefined;
                                var2 = var5.bind(var4)(var2);
                                var3 = var2.intl;
                                var2 = var3.string;
                                var1 = var6[var1];
                                var1 = var5.bind(var4)(var1);
                                var1 = var1.t;
                                var1 = var1.DfaKHr;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            case 271:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var1 = 6;
                                var2 = var6[var1];
                                var4 = undefined;
                                var2 = var5.bind(var4)(var2);
                                var3 = var2.intl;
                                var2 = var3.string;
                                var1 = var6[var1];
                                var1 = var5.bind(var4)(var1);
                                var1 = var1.t;
                                var1 = var1.R98xD5;
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            case 336:
                                return var0;
                        }
                    };
                    return var0;
                };
                var1 = var1.bind(var9)(var0);
                var0 = new Array(2);
                var0[0] = var5;
                var0[1] = var8;
                var1 = var6.bind(var7)(var1, var0);
                var0 = {};
                var0.password = var5;
                var0.setPassword = var4;
                var0.passwordScore = var3;
                var0.preventSubmitPassword = var2;
                var0.validatePassword = var1;
                return var0;
        }
    };
    var2.usePasswordRegistrationStep = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 13052, 7492, 13075, 1234, 13064, 2]);