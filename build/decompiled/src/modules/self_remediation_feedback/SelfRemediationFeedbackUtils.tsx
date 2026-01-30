// modules/self_remediation_feedback/SelfRemediationFeedbackUtils.tsx
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
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.AgeVerificationSurveyEntrypoints;
    var _closure1_slot5 = var7;
    var3 = var3.IGNORE_USER_FEEDBACK_COOLDOWN_MS;
    var _closure1_slot6 = var3;
    var8 = 3;
    var3 = var5[var8];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 4;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.DAY;
    var7 = var8 * var7;
    var _closure1_slot8 = var7;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.WEEK;
    var _closure1_slot9 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var3 = var3.DAYS_30;
    var _closure1_slot10 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/self_remediation_feedback/SelfRemediationFeedbackUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Environment: var1
        _fun113726: for (var _fun113726_ip = 0;;) switch (_fun113726_ip) {
            case 0:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.isEligibleForBlockUserFeedbackExperiment;
                var2 = 'block_user_feedback_utils';
                var2 = var3.bind(var4)(var2);
                if (var2) {
                    _fun113726_ip = 51;
                    continue _fun113726
                }
            case 47:
                var2 = false;
                return var2;
            case 51:
                var2 = _closure1_slot3;
                var1 = var2.getSinces;
                var3 = var1.bind(var2)();
                var _closure2_slot0 = var3;
                var1 = global;
                var2 = var1.Object;
                var1 = var2.keys;
                var2 = var1.bind(var2)(var3);
                var1 = var2.some;
                var0 = function(arg0) { // Environment: var0
                    _fun113727: for (var _fun113727_ip = 0;;) switch (_fun113727_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = global;
                            var2 = var0.Date;
                            var1 = var2.now;
                            var1 = var1.bind(var2)();
                            var3 = var0.Date;
                            var2 = var3.parse;
                            var0 = _closure2_slot0;
                            var0 = var0[var4];
                            var0 = var2.bind(var3)(var0);
                            var2 = var1 - var0;
                            var3 = _closure1_slot3;
                            var0 = var3.isBlocked;
                            var0 = var0.bind(var3)(var4);
                            if (!var0) {
                                _fun113727_ip = 81;
                                continue _fun113727
                            }
                        case 73:
                            var3 = _closure1_slot9;
                            var0 = var2 > var3;
                        case 81:
                            if (!var0) {
                                _fun113727_ip = 92;
                                continue _fun113727
                            }
                        case 84:
                            var1 = _closure1_slot10;
                            var0 = var2 < var1;
                        case 92:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var2.isEligibleForBlockNotice = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot7;
        var2 = var1.BLOCK_USER_FEEDBACK_SUBMITTED;
        var1 = {};
        var5 = arg0;
        var1.rating = var5;
        var5 = arg1;
        var1.feedback = var5;
        var5 = arg2;
        var1.reason = var5;
        var5 = arg3;
        var1.skipped = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackBlockUserFeedback = var3;
    var3 = function() { // Environment: var1
        _fun113729: for (var _fun113729_ip = 0;;) switch (_fun113729_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 7;
                var2 = var4[var2];
                var7 = undefined;
                var4 = var3.bind(var7)(var2);
                var3 = var4.isEligibleForIgnoreUserFeedbackExperiment;
                var2 = 'ignore_user_feedback_utils';
                var2 = var3.bind(var4)(var2);
                var3 = var2.enabled;
                var2 = var2.shouldGetShorterIgnoreDuration;
                if (var3) {
                    _fun113729_ip = 62;
                    continue _fun113729
                }
            case 58:
                var3 = false;
                return var3;
            case 62:
                var4 = _closure1_slot0;
                var8 = _closure1_slot2;
                var3 = 8;
                var3 = var8[var3];
                var6 = var4.bind(var7)(var3);
                var5 = var6.isTimeRecurringDismissibleContentDismissed;
                var3 = 9;
                var3 = var8[var3];
                var3 = var4.bind(var7)(var3);
                var3 = var3.DismissibleContent;
                var4 = var3.NAGBAR_NOTICE_IGNORE_USER_FEEDBACK;
                var3 = {};
                var7 = _closure1_slot6;
                var3.cooldownDurationMs = var7;
                var3 = var5.bind(var6)(var4, var3);
                var3 = var3.isDismissed;
                if (var3) {
                    _fun113729_ip = 213;
                    continue _fun113729
                }
            case 138:
                if (var2) {
                    _fun113729_ip = 147;
                    continue _fun113729
                }
            case 141:
                var2 = _closure1_slot9;
                _fun113729_ip = 151;
                continue _fun113729;
            case 147:
                var2 = _closure1_slot8;
            case 151:
                var _closure2_slot0 = var2;
                var2 = _closure1_slot4;
                var1 = var2.getIgnoreTimestamps;
                var3 = var1.bind(var2)();
                var _closure2_slot1 = var3;
                var1 = global;
                var2 = var1.Object;
                var1 = var2.keys;
                var2 = var1.bind(var2)(var3);
                var1 = var2.some;
                var0 = function(arg0) { // Environment: var0
                    _fun113730: for (var _fun113730_ip = 0;;) switch (_fun113730_ip) {
                        case 0:
                            var5 = arg0;
                            var0 = global;
                            var2 = var0.Date;
                            var1 = var2.now;
                            var1 = var1.bind(var2)();
                            var4 = var0.Number;
                            var0 = _closure2_slot1;
                            var2 = var0[var5];
                            var0 = undefined;
                            var0 = var4.bind(var0)(var2);
                            var2 = var1 - var0;
                            var4 = _closure1_slot3;
                            var0 = var4.isIgnored;
                            var0 = var0.bind(var4)(var5);
                            if (!var0) {
                                _fun113730_ip = 77;
                                continue _fun113730
                            }
                        case 69:
                            var3 = _closure2_slot0;
                            var0 = var2 > var3;
                        case 77:
                            if (!var0) {
                                _fun113730_ip = 88;
                                continue _fun113730
                            }
                        case 80:
                            var1 = _closure1_slot10;
                            var0 = var2 < var1;
                        case 88:
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
            case 213:
                var0 = false;
                return var0;
        }
    };
    var2.isEligibleForIgnoreNotice = var3;
    var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot7;
        var2 = var1.IGNORE_USER_FEEDBACK_SUBMITTED;
        var1 = {};
        var5 = arg0;
        var1.rating = var5;
        var5 = arg1;
        var1.feedback = var5;
        var5 = arg2;
        var1.reason = var5;
        var5 = arg3;
        var1.skipped = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackIgnoreUserFeedback = var3;
    var3 = function(arg0) { // Environment: var1
        _fun113732: for (var _fun113732_ip = 0;;) switch (_fun113732_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var0 = var0.DismissibleContent;
                var2 = var0.AGE_VERIFICATION_SURVEY_MODAL_CLOSE;
                var0 = arg0;
                if (!(var0 !== var2)) {
                    _fun113732_ip = 56;
                    continue _fun113732
                }
            case 44:
                var0 = _closure1_slot5;
                var0 = var0.GET_STARTED;
                _fun113732_ip = 66;
                continue _fun113732;
            case 56:
                var1 = _closure1_slot5;
                var0 = var1.KID_STARTED;
            case 66:
                return var0;
        }
    };
    var2.getAgeVerificationSurveyEntrypoint = var3;
    var1 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var1
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 6;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot7;
        var2 = var1.AGE_VERIFICATION_FEEDBACK_SUBMITTED;
        var1 = {};
        var5 = arg0;
        var1.rating = var5;
        var5 = arg1;
        var1.feedback = var5;
        var5 = arg2;
        var1.reason = var5;
        var5 = arg3;
        var1.skipped = var5;
        var5 = arg4;
        var1.entrypoint = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackAgeVerificationFeedback = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3059, 14541, 5914, 660, 667, 5915, 795, 14542, 1360, 1358, 2]);