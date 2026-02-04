// modules/safety_flows/native/SafetyFlowsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var5 = function arg0() {
        _fun117804: for (var _fun117804_ip = 0;;) switch (_fun117804_ip) {
            case 0:
                var8 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = 3;
                var0 = var0[var5];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var0 = var0.TASK_TYPE_TO_SCREENS;
                var7 = var0[var8];
                var6 = null;
                var1 = var6 == var7;
                var0 = null;
                if (var1) {
                    _fun117804_ip = 163;
                    continue _fun117804
                }
            case 49:
                var3 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.TaskType;
                var3 = var1.EMAIL_VERIFICATION;
                var1 = var7;
                if (!(var8 === var3)) {
                    _fun117804_ip = 160;
                    continue _fun117804
                }
            case 85:
                var8 = _closure1_slot5;
                var3 = var8.getCurrentUser;
                var8 = var3.bind(var8)();
                var9 = var6 == var8;
                var3 = undefined;
                if (var9) {
                    _fun117804_ip = 113;
                    continue _fun117804
                }
            case 107:
                var3 = var8.email;
            case 113:
                var1 = var7;
                if (!(var6 != var3)) {
                    _fun117804_ip = 160;
                    continue _fun117804
                }
            case 120:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var2 = var2[var5];
                var2 = var3.bind(var4)(var2);
                var2 = var2.SafetyFlowScreens;
                var3 = var2.VERIFY_EMAIL;
                var2 = new Array(1);
                var2[0] = var3;
                var1 = var2;
            case 160:
                var0 = var1;
            case 163:
                return var0;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun117808: for (var _fun117808_ip = 0;;) switch (_fun117808_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun117808_ip = 72;
                            continue _fun117808
                        }
                    case 7:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 4;
                        var1 = var3[var1];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var1);
                        var1 = var2.getCurrentTask;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 46);
                    case 44:
                        return var1;
                    case 46:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun117808_ip = 69;
                            continue _fun117808
                        }
                    case 52:
                        var2 = null;
                        if (!(var2 != var1)) {
                            _fun117808_ip = 66;
                            continue _fun117808
                        }
                    case 58:
                        var2 = arg0;
                        var2 = var2.bind(var3)(var1);
                    case 66:
                        return var1;
                    case 69:
                        return var1;
                    case 72:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot8 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot8 = var0;
    var3 = function arg0, arg1() {
        _fun117809: for (var _fun117809_ip = 0;;) switch (_fun117809_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var2 = null;
                if (!(var2 != var0)) {
                    _fun117809_ip = 98;
                    continue _fun117809
                }
            case 12:
                var5 = _closure1_slot6;
                var4 = var0.task_type;
                var0 = undefined;
                var4 = var5.bind(var0)(var4);
                if (!(var2 == var4)) {
                    _fun117809_ip = 80;
                    continue _fun117809
                }
            case 36:
                var2 = var3.push;
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 3;
                var1 = var6[var1];
                var1 = var5.bind(var0)(var1);
                var1 = var1.SafetyFlowScreens;
                var1 = var1.UPDATE_APP;
                var1 = var2.bind(var3)(var1);
                _fun117809_ip = 96;
                continue _fun117809;
            case 80:
                var2 = var3.push;
                var1 = 0;
                var1 = var4[var1];
                var1 = var2.bind(var3)(var1);
            case 96:
                return var0;
            case 98:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var1 = 5;
                var1 = var8[var1];
                var6 = undefined;
                var2 = var7.bind(var6)(var1);
                var1 = var2.popWithKey;
                var4 = _closure1_slot0;
                var0 = 6;
                var0 = var8[var0];
                var0 = var4.bind(var6)(var0);
                var0 = var0.SAFETY_FLOWS_MODAL_KEY;
                var0 = var1.bind(var2)(var0);
                var0 = 7;
                var0 = var8[var0];
                var2 = var7.bind(var6)(var0);
                var1 = var2.open;
                var0 = {};
                var3 = 'SAFETY_FLOWS_VERIFY_EMAIL_SUCCESS';
                var0.key = var3;
                var3 = 8;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var0.icon = var3;
                var3 = 9;
                var3 = var8[var3];
                var3 = var4.bind(var6)(var3);
                var5 = var3.intl;
                var4 = var5.string;
                var3 = 10;
                var3 = var8[var3];
                var3 = var7.bind(var6)(var3);
                var3 = var3["/fHz9S"];
                var3 = var4.bind(var5)(var3);
                var0.content = var3;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var10 = var8[var6];
    var6 = arg3;
    var6 = var6.bind(var0)(var10);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 13;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/safety_flows/native/SafetyFlowsUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.getScreensForTaskType = var5;
    var2.fetchAndUpdateTask = var4;
    var2.navigateToScreenForTask = var3;
    var1 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 11;
        var3 = var5[var1];
        var1 = undefined;
        var6 = var4.bind(var1)(var3);
        var3 = var6.useNavigation;
        var6 = var3.bind(var6)();
        var _closure2_slot0 = var6;
        var3 = 12;
        var3 = var5[var3];
        var4 = var4.bind(var1)(var3);
        var3 = var4.useSafetyFlowTask;
        var3 = var3.bind(var4)();
        var5 = var3.task;
        var _closure2_slot1 = var5;
        var4 = var3.setTask;
        var _closure2_slot2 = var4;
        var3 = _closure1_slot4;
        var2 = var3.useCallback;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun117813: for (var _fun117813_ip = 0;;) switch (_fun117813_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun117813_ip = 146;
                                continue _fun117813
                            }
                        case 10:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var1 = 4;
                            var1 = var3[var1];
                            var3 = undefined;
                            var6 = var2.bind(var3)(var1);
                            var2 = var6.completeTask;
                            var1 = {};
                            var7 = _closure2_slot1;
                            var8 = var7.task_id;
                            var1.task_id = var8;
                            var7 = var7.flow_context;
                            var7 = var7.flow_id;
                            var1.flow_id = var7;
                            var7 = arg0;
                            var1.data = var7;
                            var1 = var2.bind(var6)(var1);
                            SaveGenerator(address = 94);
                        case 92:
                            return var1;
                        case 94:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                            if (var2) {
                                _fun117813_ip = 143;
                                continue _fun117813
                            }
                        case 100:
                            var6 = _closure1_slot7;
                            var2 = _closure2_slot2;
                            var2 = var6.bind(var3)(var2);
                            SaveGenerator(address = 117);
                        case 115:
                            return var2;
                        case 117:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                            if (var6) {
                                _fun117813_ip = 140;
                                continue _fun117813
                            }
                        case 123:
                            var5 = _closure1_slot9;
                            var4 = _closure2_slot0;
                            var4 = var5.bind(var3)(var4, var2);
                            return var3;
                        case 140:
                            return var2;
                        case 143:
                            return var1;
                        case 146:
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
        var1 = var0.bind(var1)();
        var0 = new Array(3);
        var0[0] = var6;
        var0[1] = var5;
        var0[2] = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useOnTaskComplete = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 31, 1621, 15011, 15012, 4561, 15017, 3148, 7950, 1234, 2116, 1469, 15015, 2]);