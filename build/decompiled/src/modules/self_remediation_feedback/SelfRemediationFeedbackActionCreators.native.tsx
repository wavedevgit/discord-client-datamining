// modules/self_remediation_feedback/SelfRemediationFeedbackActionCreators.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.AGE_VERIFICATION_SURVEY_DISMISSIBLE_CONTENT;
    var _closure1_slot3 = var1;
    var1 = {};
    var6 = function arg0() {
        _fun52728: for (var _fun52728_ip = 0;;) switch (_fun52728_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.location;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isEligibleForBlockUserFeedbackExperiment;
                var2 = var2.bind(var3)(var4);
                if (!var2) {
                    _fun52728_ip = 89;
                    continue _fun52728
                }
            case 47:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'BLOCK_USER_SHOW_FEEDBACK';
                var1.type = var4;
                var1 = var2.bind(var3)(var1);
            case 89:
                return var0;
        }
    };
    var1.maybeOpenBlockUserFeedback = var6;
    var3 = function arg0() {
        _fun52729: for (var _fun52729_ip = 0;;) switch (_fun52729_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.location;
                var4 = var0.visibleContent;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isEligibleForAgeVerificationFeedbackExperiment;
                var2 = var2.bind(var3)(var5);
                if (!var2) {
                    _fun52729_ip = 59;
                    continue _fun52729
                }
            case 53:
                var3 = null;
                var2 = var3 != var4;
            case 59:
                if (!var2) {
                    _fun52729_ip = 76;
                    continue _fun52729
                }
            case 62:
                var5 = _closure1_slot3;
                var3 = var5.includes;
                var2 = var3.bind(var5)(var4);
            case 76:
                if (!var2) {
                    _fun52729_ip = 126;
                    continue _fun52729
                }
            case 79:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 2;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'AGE_VERIFICATION_SHOW_FEEDBACK';
                var1.type = var5;
                var1.dismissibleContent = var4;
                var1 = var2.bind(var3)(var1);
            case 126:
                return var0;
        }
    };
    var1.maybeOpenAgeVerificationUserFeedback = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_remediation_feedback/SelfRemediationFeedbackActionCreators.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6004, 6005, 806, 6006, 2]);