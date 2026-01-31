// modules/safety_flows/openSafetyFlow.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _openSafetyFlow, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun117738: for (var _fun117738_ip = 0;;) switch (_fun117738_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun117738_ip = 548;
                            continue _fun117738
                        }
                    case 13:
                        var2 = undefined;
                        if (!(var1 === var2)) {
                            _fun117738_ip = 21;
                            continue _fun117738
                        }
                    case 19:
                        var1 = {};
                    case 21:
                        var7 = var1.requiredAction;
                        var6 = undefined;
                        SaveGenerator(address = 33);
                    case 31:
                        return var2;
                    case 33:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun117738_ip = 545;
                            continue _fun117738
                        }
                    case 42:
                        var3 = null;
                        if (!(var3 == var7)) {
                            _fun117738_ip = 65;
                            continue _fun117738
                        }
                    case 48:
                        var5 = _closure1_slot4;
                        var4 = var5.getAction;
                        var7 = var4.bind(var5)();
                    case 65:
                        var5 = _closure1_slot5;
                        var5 = var5.REQUIRE_SAFETY_FLOWS;
                        if (!(var7 === var5)) {
                            _fun117738_ip = 542;
                            continue _fun117738
                        }
                    case 85: // try_start_0
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var5 = 4;
                        var5 = var8[var5];
                        var7 = var7.bind(var2)(var5);
                        var5 = var7.getCurrentTask;
                        var5 = var5.bind(var7)();
                        SaveGenerator(address = 119);
                    case 117:
                        return var5;
                    case 119:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                        if (var7) {
                            _fun117738_ip = 416;
                            continue _fun117738
                        }
                    case 128:
                        var6 = var5;
                        if (!(var3 != var5)) {
                            _fun117738_ip = 413;
                            continue _fun117738
                        }
                    case 138:
                        var13 = var6;
                        var7 = var13.task_type;
                        var8 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var9 = 3;
                        var6 = var6[var9];
                        var6 = var8.bind(var2)(var6);
                        var6 = var6.TaskType;
                        var6 = var6.AGE_VERIFICATION;
                        if (!(var7 !== var6)) {
                            _fun117738_ip = 282;
                            continue _fun117738
                        }
                    case 183:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var9];
                        var6 = var7.bind(var2)(var6);
                        var7 = var6.TASK_TYPE_TO_SCREENS;
                        var6 = var13.task_type;
                        var6 = var7[var6];
                        if (!(var3 == var6)) {
                            _fun117738_ip = 251;
                            continue _fun117738
                        }
                    case 220:
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var6 = var6[var9];
                        var6 = var7.bind(var2)(var6);
                        var6 = var6.SafetyFlowScreens;
                        var6 = var6.UPDATE_APP;
                        _fun117738_ip = 280;
                        continue _fun117738;
                    case 251:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var9];
                        var7 = var8.bind(var2)(var7);
                        var7 = var7.SafetyFlowScreens;
                        var6 = var7.OVERVIEW;
                    case 280:
                        _fun117738_ip = 311;
                        continue _fun117738;
                    case 282:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var9];
                        var7 = var8.bind(var2)(var7);
                        var7 = var7.SafetyFlowScreens;
                        var6 = var7.AGE_VERIFICATION;
                    case 311:
                        var8 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var7 = 5;
                        var7 = var12[var7];
                        var10 = var8.bind(var2)(var7);
                        var9 = var10.pushLazy;
                        var11 = _closure1_slot0;
                        var7 = 7;
                        var7 = var12[var7];
                        var14 = var11.bind(var2)(var7);
                        var7 = 6;
                        var8 = var12[var7];
                        var7 = var12.paths;
                        var8 = var14.bind(var2)(var8, var7);
                        var7 = {};
                        var7.task = var13;
                        var7.initialScreen = var6;
                        var6 = 8;
                        var6 = var12[var6];
                        var6 = var11.bind(var2)(var6);
                        var6 = var6.SAFETY_FLOWS_MODAL_KEY;
                        var6 = var9.bind(var10)(var8, var7, var6);
                    case 408: // try_end0
                        _fun117738_ip = 542;
                        continue _fun117738;
                    case 413:
                        return var2;
                    case 416:
                        return var5;
                    case 419: // catch_target0
                        CatchBlockStart(arg_register = 5);
                        var6 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var5 = 5;
                        var5 = var9[var5];
                        var7 = var6.bind(var2)(var5);
                        var6 = var7.pushLazy;
                        var8 = _closure1_slot0;
                        var4 = 7;
                        var4 = var9[var4];
                        var10 = var8.bind(var2)(var4);
                        var4 = 6;
                        var5 = var9[var4];
                        var4 = var9.paths;
                        var5 = var10.bind(var2)(var5, var4);
                        var4 = {};
                        var4.task = var3;
                        var3 = 3;
                        var3 = var9[var3];
                        var3 = var8.bind(var2)(var3);
                        var3 = var3.SafetyFlowScreens;
                        var3 = var3.ERROR;
                        var4.initialScreen = var3;
                        var3 = 8;
                        var3 = var9[var3];
                        var3 = var8.bind(var2)(var3);
                        var3 = var3.SAFETY_FLOWS_MODAL_KEY;
                        var3 = var6.bind(var7)(var5, var4, var3);
                    case 542:
                        return var2;
                    case 545:
                        return var1;
                    case 548:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.UserRequiredActions;
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_flows/openSafetyFlow.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: openSafetyFlow, environment: var1
        var0 = undefined;
        var3 = _closure1_slot6;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.openSafetyFlow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 1366, 660, 14967, 14968, 4525, 14969, 1307, 14973, 2]);