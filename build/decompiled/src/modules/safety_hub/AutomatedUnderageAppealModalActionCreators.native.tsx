// modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx
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
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.AGE_APPEAL_ACTION_SHEET_NAME;
    var _closure1_slot4 = var6;
    var1 = var1.AGE_CHECK_POLL_DELAY_MS;
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.AGE_VERIFICATION_GET_STARTED_MODAL_KEY;
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot7 = var1;
    var1 = {};
    var6 = function(arg0, arg1) { // Original name: open, environment: var3
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 4;
        var3 = var2[var0];
        var0 = undefined;
        var6 = var4.bind(var0)(var3);
        var5 = var6.dispatch;
        var3 = {};
        var7 = 'SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN';
        var3.type = var7;
        var3 = var5.bind(var6)(var3);
        var3 = 5;
        var3 = var2[var3];
        var5 = var4.bind(var0)(var3);
        var4 = var5.openLazy;
        var6 = _closure1_slot0;
        var3 = 7;
        var3 = var2[var3];
        var6 = var6.bind(var0)(var3);
        var3 = 6;
        var3 = var2[var3];
        var2 = var2.paths;
        var3 = var6.bind(var0)(var3, var2);
        var2 = _closure1_slot4;
        var1 = {};
        var6 = arg0;
        var1.classificationId = var6;
        var6 = arg1;
        var1.onClose = var6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.open = var6;
    var6 = function(arg0, arg1) { // Original name: openV2, environment: var3
        var6 = arg1;
        var0 = arg0;
        var _closure2_slot0 = var0;
        var _closure2_slot1 = var6;
        var4 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 4;
        var3 = var5[var0];
        var0 = undefined;
        var8 = var4.bind(var0)(var3);
        var7 = var8.dispatch;
        var3 = {};
        var9 = 'SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_OPEN';
        var3.type = var9;
        var3 = var7.bind(var8)(var3);
        var3 = 8;
        var3 = var5[var3];
        var5 = var4.bind(var0)(var3);
        var4 = var5.pushLazy;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun79476: for (var _fun79476_ip = 0;;) switch (_fun79476_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79476_ip = 88;
                            continue _fun79476
                        }
                    case 9:
                        var5 = undefined;
                        var _closure4_slot0 = var5;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var3 = 7;
                        var3 = var1[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = 9;
                        var3 = var1[var3];
                        var1 = var1.paths;
                        var1 = var4.bind(var5)(var3, var1);
                        SaveGenerator(address = 60);
                    case 58:
                        return var1;
                    case 60:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun79476_ip = 85;
                            continue _fun79476
                        }
                    case 66:
                        var3 = var1.default;
                        _closure4_slot0 = var3;
                        var2 = function() { // Environment: var2
                            var3 = _closure1_slot7;
                            var2 = _closure4_slot0;
                            var1 = {};
                            var4 = _closure2_slot0;
                            var1.classificationId = var4;
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var0 = 10;
                            var4 = var4[var0];
                            var0 = undefined;
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.AgeVerificationModalEntryPoint;
                            var4 = var4.AUTOMATED_UNDERAGE_APPEALS;
                            var1.entryPoint = var4;
                            var4 = false;
                            var1.isRetry = var4;
                            var4 = true;
                            var1.useEmbeddedMethods = var4;
                            var4 = function() { // Original name: onComplete, environment: var4
                                _fun79478: for (var _fun79478_ip = 0;;) switch (_fun79478_ip) {
                                    case 0:
                                        var2 = _closure2_slot1;
                                        var3 = _closure1_slot8;
                                        var1 = var3.success;
                                        var1 = var1.bind(var3)();
                                        var1 = null;
                                        if (!(var1 != var2)) {
                                            _fun79478_ip = 36;
                                            continue _fun79478
                                        }
                                    case 30:
                                        var1 = undefined;
                                        var1 = var2.bind(var1)();
                                    case 36:
                                        var1 = _closure1_slot8;
                                        var0 = var1.start_verification_check;
                                        var0 = var0.bind(var1)();
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1.onComplete = var4;
                            var0 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        return var2;
                    case 85:
                        return var1;
                    case 88:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var0)(var2);
        var2 = {};
        var2.onClose = var6;
        var1 = _closure1_slot6;
        var1 = var4.bind(var5)(var3, var2, var1);
        return var0;
    };
    var1.openV2 = var6;
    var6 = function() { // Original name: close, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_MODAL_CLOSE';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.close = var6;
    var6 = function() { // Original name: success, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 4;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_SUBMIT_SUCCESS';
        var1.type = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.success = var6;
    var6 = function() { // Original name: start_verification_check, environment: var3
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 4;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'SAFETY_HUB_AUTOMATED_UNDERAGE_APPEAL_START_POLL';
        var2.type = var5;
        var2 = var3.bind(var4)(var2);
        var2 = global;
        var3 = var2.setTimeout;
        var2 = _closure1_slot5;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 11;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var0 = var1.checkSuspendedUserAgeVerification;
            var0 = var0.bind(var1)();
            return var0;
        };
        var1 = var3.bind(var0)(var1, var2);
        return var0;
    };
    var1.start_verification_check = var6;
    var _closure1_slot8 = var1;
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_hub/AutomatedUnderageAppealModalActionCreators.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 5903, 5895, 33, 806, 3237, 10068, 1307, 4525, 5913, 4519, 10061, 2]);