// modules/auth/RegistrationConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var5 = {};
    var0 = 'viewed';
    var5.VIEWED = var0;
    var0 = 'submitted';
    var5.SUBMITTED = var0;
    var0 = 'resend_code';
    var5.RESEND_CODE = var0;
    var0 = 'input_error';
    var5.INPUT_ERROR = var0;
    var0 = 'response_error';
    var5.RESPONSE_ERROR = var0;
    var0 = 'success';
    var5.SUCCESS = var0;
    var4 = {};
    var0 = 'identity';
    var4.IDENTITY = var0;
    var0 = 'display_name';
    var4.DISPLAY_NAME = var0;
    var0 = 'account_information';
    var4.ACCOUNT_INFORMATION = var0;
    var0 = 'full';
    var4.FULL = var0;
    var0 = 'age_gate';
    var4.AGE_GATE = var0;
    var0 = 'invite';
    var4.INVITE = var0;
    var0 = 'sms_verify';
    var4.SMS_VERIFY = var0;
    var3 = {};
    var0 = 'Account Identity';
    var3.ACCOUNT_IDENTITY = var0;
    var0 = 'Account Display Name';
    var3.ACCOUNT_DISPLAY_NAME = var0;
    var0 = 'Account Information';
    var3.ACCOUNT_INFORMATION = var0;
    var0 = 'Age Gate';
    var3.AGE_GATE = var0;
    var0 = 'Age Gate Underage';
    var3.AGE_GATE_UNDERAGE = var0;
    var0 = 'Phone Verification';
    var3.PHONE_VERIFICATION = var0;
    var0 = 'Register';
    var3.REGISTER = var0;
    var0 = 'Captcha';
    var3.CAPTCHA = var0;
    var _closure1_slot2 = var3;
    var0 = 1;
    var6 = var6[var0];
    var0 = undefined;
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/auth/RegistrationConstants.tsx';
    var6 = var7.bind(var8)(var6);
    var2.RegistrationTransitionActionTypes = var5;
    var2.RegistrationSteps = var4;
    var2.RegisterTransitionSteps = var3;
    var1 = function(arg0) { // Original name: authStateToRegisterTransitionStep, environment: var1
        _fun100840: for (var _fun100840_ip = 0;;) switch (_fun100840_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 0;
                var2 = var1[var5];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var2 = var2.AuthStates;
                var2 = var2.REGISTER_IDENTITY;
                if (!(var2 !== var3)) {
                    _fun100840_ip = 231;
                    continue _fun100840
                }
            case 46:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.AuthStates;
                var2 = var2.REGISTER_DISPLAY_NAME;
                if (!(var2 !== var3)) {
                    _fun100840_ip = 219;
                    continue _fun100840
                }
            case 82:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.AuthStates;
                var2 = var2.REGISTER_ACCOUNT_INFORMATION;
                if (!(var2 !== var3)) {
                    _fun100840_ip = 207;
                    continue _fun100840
                }
            case 115:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.AuthStates;
                var2 = var2.AGE_GATE;
                if (!(var2 !== var3)) {
                    _fun100840_ip = 195;
                    continue _fun100840
                }
            case 148:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var2 = var4.bind(var1)(var2);
                var2 = var2.AuthStates;
                var2 = var2.VERIFY_PHONE;
                if (!(var2 !== var3)) {
                    _fun100840_ip = 183;
                    continue _fun100840
                }
            case 181:
                return var1;
            case 183:
                var1 = _closure1_slot2;
                var1 = var1.PHONE_VERIFICATION;
                return var1;
            case 195:
                var1 = _closure1_slot2;
                var1 = var1.AGE_GATE;
                return var1;
            case 207:
                var1 = _closure1_slot2;
                var1 = var1.ACCOUNT_INFORMATION;
                return var1;
            case 219:
                var1 = _closure1_slot2;
                var1 = var1.ACCOUNT_DISPLAY_NAME;
                return var1;
            case 231:
                var0 = _closure1_slot2;
                var0 = var0.ACCOUNT_IDENTITY;
                return var0;
        }
    };
    var2.authStateToRegisterTransitionStep = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [670, 2]);