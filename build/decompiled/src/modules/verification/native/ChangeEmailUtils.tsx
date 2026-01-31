// modules/verification/native/ChangeEmailUtils.tsx
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
        var2 = function*(arg0, arg1, arg2) { // Environment: var2
            var0 = function*(arg0, arg1, arg2) { // Original name: ?anon_0_, environment: var0
                _fun60845: for (var _fun60845_ip = 0;;) switch (_fun60845_ip) {
                    case 0:
                        StartGenerator();
                        var5 = arg1;
                        var7 = arg2;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun60845_ip = 552;
                            continue _fun60845
                        }
                    case 16:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 2;
                        var1 = var3[var1];
                        var9 = undefined;
                        var6 = var2.bind(var9)(var1);
                        var3 = var6.saveAccountChanges;
                        var2 = {};
                        var1 = false;
                        var2.close = var1;
                        var1 = arg0;
                        var1 = var3.bind(var6)(var1, var2);
                        SaveGenerator(address = 69);
                    case 67:
                        return var1;
                    case 69:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun60845_ip = 549;
                            continue _fun60845
                        }
                    case 78:
                        var2 = var1.ok;
                        if (var2) {
                            _fun60845_ip = 546;
                            continue _fun60845
                        }
                    case 90:
                        var6 = var1.body;
                        var2 = null;
                        var8 = var2 == var6;
                        var3 = undefined;
                        if (var8) {
                            _fun60845_ip = 111;
                            continue _fun60845
                        }
                    case 106:
                        var3 = var6.username;
                    case 111:
                        if (!(var2 != var3)) {
                            _fun60845_ip = 145;
                            continue _fun60845
                        }
                    case 115:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var3 = 3;
                        var3 = var8[var3];
                        var6 = var6.bind(var9)(var3);
                        var3 = var6.showInvalidUsernameToast;
                        var3 = var3.bind(var6)();
                    case 145:
                        var6 = var1.body;
                        var8 = var2 == var6;
                        var3 = undefined;
                        if (var8) {
                            _fun60845_ip = 165;
                            continue _fun60845
                        }
                    case 159:
                        var3 = var6.email;
                    case 165:
                        if (!(var2 == var3)) {
                            _fun60845_ip = 375;
                            continue _fun60845
                        }
                    case 172:
                        var6 = var1.body;
                        var8 = var2 == var6;
                        var3 = undefined;
                        if (var8) {
                            _fun60845_ip = 192;
                            continue _fun60845
                        }
                    case 186:
                        var3 = var6.email_token;
                    case 192:
                        if (!(var2 != var3)) {
                            _fun60845_ip = 546;
                            continue _fun60845
                        }
                    case 199:
                        var8 = _closure1_slot4;
                        var3 = _closure1_slot5;
                        var6 = var3.EMAIL_TOKEN;
                        var3 = var1.body;
                        var10 = var3.email_token;
                        var3 = 0;
                        var3 = var10[var3];
                        var3 = var8.bind(var9)(var6, var3);
                        var3 = var5.getState;
                        var3 = var3.bind(var5)();
                        var3 = var3.routes;
                        var8 = var3.length;
                        var6 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var12 = 4;
                        var3 = var3[var12];
                        var3 = var6.bind(var9)(var3);
                        var3 = var3.VerificationModalScenes;
                        var3 = var3.CONFIRM_EMAIL_CHANGE_CODE;
                        var3 = var7.bind(var9)(var3);
                        var6 = -1;
                        if (!(var6 === var3)) {
                            _fun60845_ip = 348;
                            continue _fun60845
                        }
                    case 304:
                        var10 = var5.replace;
                        var11 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var12];
                        var6 = var11.bind(var9)(var6);
                        var6 = var6.VerificationModalScenes;
                        var6 = var6.CONFIRM_EMAIL_CHANGE_CODE;
                        var6 = var10.bind(var5)(var6);
                        _fun60845_ip = 546;
                        continue _fun60845;
                    case 348:
                        var6 = var5.pop;
                        var8 = var8 - var3;
                        var3 = 1;
                        var3 = var8 - var3;
                        var3 = var6.bind(var5)(var3);
                        _fun60845_ip = 546;
                        continue _fun60845;
                    case 375:
                        var8 = _closure1_slot4;
                        var3 = _closure1_slot5;
                        var6 = var3.EMAIL;
                        var3 = var1.body;
                        var10 = var3.email;
                        var3 = 0;
                        var3 = var10[var3];
                        var3 = var8.bind(var9)(var6, var3);
                        var3 = var5.getState;
                        var3 = var3.bind(var5)();
                        var3 = var3.routes;
                        var6 = var3.length;
                        var8 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var10 = 4;
                        var3 = var3[var10];
                        var3 = var8.bind(var9)(var3);
                        var3 = var3.VerificationModalScenes;
                        var3 = var3.ENTER_EMAIL;
                        var3 = var7.bind(var9)(var3);
                        var7 = -1;
                        if (!(var7 === var3)) {
                            _fun60845_ip = 521;
                            continue _fun60845
                        }
                    case 480:
                        var7 = var5.replace;
                        var8 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var10];
                        var4 = var8.bind(var9)(var4);
                        var4 = var4.VerificationModalScenes;
                        var4 = var4.ENTER_EMAIL;
                        var4 = var7.bind(var5)(var4);
                        _fun60845_ip = 543;
                        continue _fun60845;
                    case 521:
                        var4 = var5.pop;
                        var6 = var6 - var3;
                        var3 = 1;
                        var3 = var6 - var3;
                        var3 = var4.bind(var5)(var3);
                    case 543:
                        return var2;
                    case 546:
                        return var1;
                    case 549:
                        return var1;
                    case 552:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot6 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot6 = var0;
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
    var6 = var3.setChangeEmailError;
    var _closure1_slot4 = var6;
    var3 = var3.ChangeEmailFields;
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/verification/native/ChangeEmailUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.saveEmail = var3;
    var3 = function arg0, arg1() {
        var4 = arg0;
        var3 = var4.replace;
        var2 = _closure1_slot0;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var1 = var1.VerificationModalScenes;
        var2 = var1.CHANGE_EMAIL_COMPLETE;
        var1 = {};
        var5 = arg1;
        var1.email = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.finishChangeEmailFlow = var3;
    var1 = function arg0, arg1() {
        _fun60848: for (var _fun60848_ip = 0;;) switch (_fun60848_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.getState;
                var0 = var0.bind(var3)();
                var0 = var0.routes;
                var4 = var0.length;
                var5 = _closure1_slot0;
                var0 = _closure1_slot2;
                var7 = 4;
                var1 = var0[var7];
                var0 = undefined;
                var1 = var5.bind(var0)(var1);
                var1 = var1.VerificationModalScenes;
                var5 = var1.RESEND_EMAIL;
                var1 = arg1;
                var1 = var1.bind(var0)(var5);
                var5 = -1;
                if (!(var5 === var1)) {
                    _fun60848_ip = 120;
                    continue _fun60848
                }
            case 79:
                var5 = var3.replace;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var7];
                var2 = var6.bind(var0)(var2);
                var2 = var2.VerificationModalScenes;
                var2 = var2.RESEND_EMAIL;
                var2 = var5.bind(var3)(var2);
                _fun60848_ip = 135;
                continue _fun60848;
            case 120:
                var2 = var3.pop;
                var1 = var4 - var1;
                var1 = var2.bind(var3)(var1);
            case 135:
                return var0;
        }
    };
    var2.finishVerifyEmailFlow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 7427, 7186, 6908, 670, 2]);