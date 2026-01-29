// modules/verification/VerificationConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var4 = {};
    var5 = 0;
    var4.DISCORD_EMPLOYEE_ASKED_ME_TO = var5;
    var1 = 'DISCORD_EMPLOYEE_ASKED_ME_TO';
    var4[var5] = var1;
    var3 = 1;
    var4.SOMEONE_ASKED_ME_TO = var3;
    var1 = 'SOMEONE_ASKED_ME_TO';
    var4[var3] = var1;
    var3 = 2;
    var4.NEW_EMAIL = var3;
    var1 = 'NEW_EMAIL';
    var4[var3] = var1;
    var3 = 3;
    var4.SOMETHING_ELSE = var3;
    var1 = 'SOMETHING_ELSE';
    var4[var3] = var1;
    var1 = var4.DISCORD_EMPLOYEE_ASKED_ME_TO;
    var3 = new Array(4);
    var3[0] = var1;
    var1 = var4.SOMEONE_ASKED_ME_TO;
    var3[1] = var1;
    var1 = var4.NEW_EMAIL;
    var3[2] = var1;
    var1 = var4.SOMETHING_ELSE;
    var3[3] = var1;
    var6 = var0.Set;
    var1 = var4.DISCORD_EMPLOYEE_ASKED_ME_TO;
    var0 = new Array(2);
    var0[0] = var1;
    var1 = var4.SOMEONE_ASKED_ME_TO;
    var0[1] = var1;
    var1 = var6.prototype;
    var1 = Object.create(var1, {
        constructor: {
            value: var6
        }
    });
    var11 = var1;
    var10 = var0;
    var0 = new var11[var6](var10, var9);
    var1 = var0 instanceof Object ? var0 : var1;
    var0 = dependencyMap;
    var6 = var0[var5];
    var5 = require;
    var0 = undefined;
    var7 = var5.bind(var0)(var6);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/verification/VerificationConstants.tsx';
    var5 = var6.bind(var7)(var5);
    var2.ChangeEmailReasons = var4;
    var2.CHANGE_EMAIL_REASONS_ORDER = var3;
    var2.SUSPICIOUS_CHANGE_EMAIL_REASONS = var1;
    var1 = 'https://discord.com/safety/understanding-and-avoiding-common-scams';
    var2.COMMON_SCAMS_EDUCATION_HC_ARTICLE = var1;
    var1 = 1024;
    var2.FREE_TEXT_RESPONSE_MAX_LENGTH = var1;
    var1 = 'verification';
    var2.VERIFICATION_LAYER_KEY = var1;
    var1 = 'AGREEMENTS_MODAL_KEY';
    var2.AGREEMENTS_MODAL_KEY = var1;
    var1 = 'Email Verification';
    var2.EMAIL_VERIFICATION_MODAL_KEY = var1;
    var1 = 'PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY';
    var2.PHONE_THEN_EMAIL_INTERSTITIAL_MODAL_KEY = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);