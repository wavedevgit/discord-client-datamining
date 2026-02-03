// modules/safety_flows/types.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var11 = dependencyMap;
    var1 = global;
    var5 = var1.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var8 = {};
    var3 = -1;
    var8.REFRESH_APP = var3;
    var0 = 'REFRESH_APP';
    var8[var3] = var0;
    var3 = 3;
    var8.EMAIL_VERIFICATION = var3;
    var0 = 'EMAIL_VERIFICATION';
    var8[var3] = var0;
    var3 = 9;
    var8.AGE_VERIFICATION = var3;
    var0 = 'AGE_VERIFICATION';
    var8[var3] = var0;
    var7 = {
        'EMAIL_VERIFICATION': 'email_verification',
        'PHONE_VERIFICATION': 'phone_verification',
        'GENERIC_CALL_TO_ACTION': 'generic_call_to_action',
        'REFRESH_APP': 'refresh_app',
        'AGE_VERIFICATION': 'age_verification'
    };
    var4 = var1.Set;
    var3 = var1.Object;
    var1 = var3.values;
    var19 = var1.bind(var3)(var7);
    var3 = var4.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var4
        }
    });
    var20 = var3;
    var1 = new var20[var4](var19, var18);
    var6 = var1 instanceof Object ? var1 : var3;
    var5 = {};
    var1 = 'OVERVIEW';
    var5.OVERVIEW = var1;
    var1 = 'ENTER_EMAIL';
    var5.ENTER_EMAIL = var1;
    var1 = 'VERIFY_EMAIL';
    var5.VERIFY_EMAIL = var1;
    var1 = 'UPDATE_APP';
    var5.UPDATE_APP = var1;
    var5.AGE_VERIFICATION = var0;
    var0 = 'ERROR';
    var5.ERROR = var0;
    var4 = {};
    var1 = var8.EMAIL_VERIFICATION;
    var3 = var5.ENTER_EMAIL;
    var0 = new Array(2);
    var0[0] = var3;
    var3 = var5.VERIFY_EMAIL;
    var0[1] = var3;
    var4[var1] = var0;
    var1 = var8.AGE_VERIFICATION;
    var3 = var5.AGE_VERIFICATION;
    var0 = new Array(1);
    var0[0] = var3;
    var4[var1] = var0;
    var3 = {};
    var13 = var8.EMAIL_VERIFICATION;
    var12 = 0;
    var1 = var11[var12];
    var0 = undefined;
    var1 = var10.bind(var0)(var1);
    var16 = var1.intl;
    var15 = var16.string;
    var1 = 1;
    var9 = var11[var1];
    var9 = var14.bind(var0)(var9);
    var9 = var9["Qm6K/s"];
    var9 = var15.bind(var16)(var9);
    var3[var13] = var9;
    var9 = var8.AGE_VERIFICATION;
    var12 = var11[var12];
    var12 = var10.bind(var0)(var12);
    var13 = var12.intl;
    var12 = var13.string;
    var1 = var11[var1];
    var1 = var14.bind(var0)(var1);
    var1 = var1["dSkE/A"];
    var1 = var12.bind(var13)(var1);
    var3[var9] = var1;
    var1 = {};
    var9 = 'empty';
    var1.Empty = var9;
    var9 = 'verification_code';
    var1.VerificationCode = var9;
    var9 = 2;
    var9 = var11[var9];
    var11 = var10.bind(var0)(var9);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/safety_flows/types.tsx';
    var9 = var10.bind(var11)(var9);
    var2.TaskType = var8;
    var2.SafetyFlowComponentType = var7;
    var2.SUPPORTED_SAFETY_FLOW_COMPONENT_TYPES = var6;
    var2.SafetyFlowScreens = var5;
    var2.TASK_TYPE_TO_SCREENS = var4;
    var2.TASK_TYPE_TO_TITLE = var3;
    var2.TaskInputType = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 2107, 2]);