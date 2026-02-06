// modules/verification/native/components/VerifyPhone.tsx
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
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/verification/native/components/VerifyPhone.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun61253: for (var _fun61253_ip = 0;;) switch (_fun61253_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.phone;
                var _closure2_slot0 = var9;
                var10 = var1.loading;
                var3 = undefined;
                if (!(var10 === var3)) {
                    _fun61253_ip = 29;
                    continue _fun61253
                }
            case 27:
                var10 = false;
            case 29:
                var14 = var1.onCodeEnteredIntercept;
                var _closure2_slot1 = var14;
                var13 = var1.onVerified;
                var _closure2_slot2 = var13;
                var11 = var1.backgroundStyle;
                var4 = var1.disableKeyboardAvoidingView;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var6 = _closure1_slot5;
                var2 = var6.useState;
                var1 = null;
                var1 = var2.bind(var6)(var1);
                var15 = _closure1_slot4;
                var8 = 2;
                var1 = var15.bind(var3)(var1, var8);
                var5 = 0;
                var12 = var1[var5];
                var2 = 1;
                var1 = var1[var2];
                _closure2_slot3 = var1;
                var16 = var6.useState;
                var1 = false;
                var1 = var16.bind(var6)(var1);
                var1 = var15.bind(var3)(var1, var8);
                var5 = var1[var5];
                var1 = var1[var2];
                _closure2_slot4 = var1;
                var8 = var6.useCallback;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun61256: for (var _fun61256_ip = 0;;) switch (_fun61256_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun61256_ip = 177;
                                        continue _fun61256
                                    }
                                case 10:
                                    var3 = arg0;
                                    var1 = undefined;
                                    var4 = undefined;
                                case 17: // try_start_0
                                    var6 = _closure2_slot1;
                                    var2 = null;
                                    if (!(var2 != var6)) {
                                        _fun61256_ip = 55;
                                        continue _fun61256
                                    }
                                case 30:
                                    var6 = _closure2_slot1;
                                    var2 = var3;
                                    var2 = var6.bind(var1)(var2);
                                    SaveGenerator(address = 46);
                                case 44:
                                    return var2;
                                case 46:
                                    ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun61256_ip = 133;
                                        continue _fun61256
                                    }
                                case 52:
                                    if (var2) {
                                        _fun61256_ip = 130;
                                        continue _fun61256
                                    }
                                case 55:
                                    var7 = _closure1_slot1;
                                    var8 = _closure1_slot2;
                                    var6 = 4;
                                    var6 = var8[var6];
                                    var9 = var7.bind(var1)(var6);
                                    var8 = var9.verifyPhone;
                                    var7 = _closure2_slot0;
                                    var6 = var3;
                                    var3 = false;
                                    var3 = var8.bind(var9)(var7, var6, var3);
                                    SaveGenerator(address = 104);
                                case 102:
                                    return var3;
                                case 104:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                                    if (var6) {
                                        _fun61256_ip = 127;
                                        continue _fun61256
                                    }
                                case 110:
                                    var6 = var3.token;
                                    var5 = _closure2_slot2;
                                    var5 = var5.bind(var1)(var6);
                                case 125: // try_end0
                                    _fun61256_ip = 174;
                                    continue _fun61256;
                                case 127:
                                    return var3;
                                case 130:
                                    return var1;
                                case 133:
                                    return var2;
                                case 136: // catch_target0
                                    CatchBlockStart(arg_register = 2);
                                    var3 = _closure2_slot3;
                                    var5 = var2.body;
                                    var4 = var5;
                                    var2 = null;
                                    var5 = var2 == var5;
                                    var2 = undefined;
                                    if (var5) {
                                        _fun61256_ip = 169;
                                        continue _fun61256
                                    }
                                case 164:
                                    var2 = var4.message;
                                case 169:
                                    var2 = var3.bind(var1)(var2);
                                case 174:
                                    return var1;
                                case 177:
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
                var2 = var1.bind(var3)();
                var1 = new Array(3);
                var1[0] = var14;
                var1[1] = var13;
                var1[2] = var9;
                var9 = var8.bind(var6)(var2, var1);
                _closure2_slot5 = var9;
                var2 = var6.useCallback;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot3;
                    var2 = undefined;
                    var1 = function*(arg0) { // Environment: var0
                        var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                            _fun61260: for (var _fun61260_ip = 0;;) switch (_fun61260_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun61260_ip = 62;
                                        continue _fun61260
                                    }
                                case 7:
                                    var4 = _closure2_slot4;
                                    var2 = undefined;
                                    var1 = true;
                                    var1 = var4.bind(var2)(var1);
                                    var4 = _closure2_slot5;
                                    var1 = arg0;
                                    var1 = var4.bind(var2)(var1);
                                    SaveGenerator(address = 39);
                                case 37:
                                    return var1;
                                case 39:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun61260_ip = 59;
                                        continue _fun61260
                                    }
                                case 45:
                                    var4 = _closure2_slot4;
                                    var3 = false;
                                    var3 = var4.bind(var2)(var3);
                                    return var2;
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
                var1 = var0.bind(var3)();
                var0 = new Array(1);
                var0[0] = var9;
                var2 = var2.bind(var6)(var1, var0);
                var1 = _closure1_slot1;
                var8 = _closure1_slot2;
                var0 = 5;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.bind(var3)(var2);
                var2 = _closure1_slot6;
                var6 = 6;
                var0 = var8[var6];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var7 = _closure1_slot0;
                var13 = 7;
                var14 = var8[var13];
                var14 = var7.bind(var3)(var14);
                var16 = var14.intl;
                var15 = var16.string;
                var14 = var8[var13];
                var14 = var7.bind(var3)(var14);
                var14 = var14.t;
                var14 = var14.Xclkxp;
                var14 = var15.bind(var16)(var14);
                var0.title = var14;
                var14 = var8[var13];
                var14 = var7.bind(var3)(var14);
                var15 = var14.intl;
                var14 = var15.string;
                var13 = var8[var13];
                var13 = var7.bind(var3)(var13);
                var13 = var13.t;
                var13 = var13["4qMI6A"];
                var13 = var14.bind(var15)(var13);
                var0.description = var13;
                var0.error = var12;
                var0.backgroundStyle = var11;
                var0.loading = var10;
                var0.onCodeEntered = var9;
                var6 = var8[var6];
                var6 = var7.bind(var3)(var6);
                var6 = var6.CodeType;
                var6 = var6.NUMERIC;
                var0.codeType = var6;
                var0.disabled = var5;
                var0.disableKeyboardAvoidingView = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 33, 7582, 7609, 7610, 1234, 2]);