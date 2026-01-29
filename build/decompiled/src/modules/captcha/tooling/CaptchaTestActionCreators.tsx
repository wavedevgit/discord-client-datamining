// modules/captcha/tooling/CaptchaTestActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = function() { // Original name: _testCaptcha, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0, arg1) { // Environment: var2
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun87121: for (var _fun87121_ip = 0;;) switch (_fun87121_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun87121_ip = 109;
                            continue _fun87121
                        }
                    case 7:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.HTTP;
                        var3 = var4.post;
                        var1 = {};
                        var5 = _closure1_slot3;
                        var5 = var5.CAPTCHA_TEST;
                        var1.url = var5;
                        var5 = {};
                        var6 = arg0;
                        var5.decider = var6;
                        var6 = arg1;
                        var5.options = var6;
                        var1.body = var5;
                        var5 = false;
                        var1.rejectWithError = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 97);
                    case 95:
                        return var1;
                    case 97:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun87121_ip = 106;
                            continue _fun87121
                        }
                    case 103:
                        return var2;
                    case 106:
                        return var1;
                    case 109:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot4 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var4 = var7[var0];
    var3 = arg2;
    var0 = undefined;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot2 = var3;
    var8 = 1;
    var3 = var7[var8];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Endpoints;
    var _closure1_slot3 = var3;
    var4 = {};
    var3 = 'hCaptchaRqdata';
    var4.HCAPTCHA_RQDATA = var3;
    var3 = 'SmiteRqdata';
    var4.SMITE_RQDATA = var3;
    var3 = 'Recaptcha';
    var4.RECAPTCHA = var3;
    var3 = 'RecaptchaEnterprise';
    var4.RECAPTCHA_ENTERPRISE = var3;
    var3 = {};
    var3.EASY = var8;
    var5 = 'EASY';
    var3[var8] = var5;
    var8 = 2;
    var3.MODERATE = var8;
    var5 = 'MODERATE';
    var3[var8] = var5;
    var5 = 3;
    var3.DIFFICULT = var5;
    var8 = 'DIFFICULT';
    var3[var5] = var8;
    var9 = 4;
    var3.VERY_DIFFICULT = var9;
    var8 = 'VERY_DIFFICULT';
    var3[var9] = var8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/captcha/tooling/CaptchaTestActionCreators.tsx';
    var5 = var6.bind(var7)(var5);
    var2.CaptchaDeciderType = var4;
    var2.HCaptchaDifficulty = var3;
    var1 = function() { // Original name: testCaptcha, environment: var1
        var0 = undefined;
        var3 = _closure1_slot4;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.testCaptcha = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 507, 2]);