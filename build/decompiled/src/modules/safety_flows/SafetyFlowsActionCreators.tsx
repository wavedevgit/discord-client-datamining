// modules/safety_flows/SafetyFlowsActionCreators.tsx
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
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun117689: for (var _fun117689_ip = 0;;) switch (_fun117689_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun117689_ip = 142;
                            continue _fun117689
                        }
                    case 10:
                        var2 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 2;
                        var1 = var8[var1];
                        var7 = undefined;
                        var3 = var2.bind(var7)(var1);
                        var2 = var3.get;
                        var1 = {};
                        var4 = _closure1_slot4;
                        var4 = var4.SAFETY_FLOWS_TASK;
                        var1.url = var4;
                        var4 = {};
                        var6 = _closure1_slot0;
                        var5 = 3;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.NetworkActionNames;
                        var5 = var5.USER_VERIFY;
                        var4.event = var5;
                        var1.trackedActionData = var4;
                        var4 = true;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 111);
                    case 109:
                        return var1;
                    case 111:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun117689_ip = 139;
                            continue _fun117689
                        }
                    case 117:
                        var4 = var1.status;
                        var3 = 204;
                        var2 = null;
                        if (!(var3 !== var4)) {
                            _fun117689_ip = 136;
                            continue _fun117689
                        }
                    case 131:
                        var2 = var1.body;
                    case 136:
                        return var2;
                    case 139:
                        return var1;
                    case 142:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot5 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot5 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun117692: for (var _fun117692_ip = 0;;) switch (_fun117692_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun117692_ip = 136;
                            continue _fun117692
                        }
                    case 10:
                        var2 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 2;
                        var1 = var8[var1];
                        var7 = undefined;
                        var3 = var2.bind(var7)(var1);
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot4;
                        var4 = var4.SAFETY_FLOWS_TASK;
                        var1.url = var4;
                        var4 = arg0;
                        var1.body = var4;
                        var4 = {};
                        var6 = _closure1_slot0;
                        var5 = 3;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.NetworkActionNames;
                        var5 = var5.USER_VERIFY;
                        var4.event = var5;
                        var1.trackedActionData = var4;
                        var4 = true;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 119);
                    case 117:
                        return var1;
                    case 119:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun117692_ip = 133;
                            continue _fun117692
                        }
                    case 125:
                        var2 = var1.body;
                        return var2;
                    case 133:
                        return var1;
                    case 136:
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
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun117695: for (var _fun117695_ip = 0;;) switch (_fun117695_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun117695_ip = 190;
                            continue _fun117695
                        }
                    case 10:
                        var6 = arg0;
                    case 13: // try_start_0
                        var2 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var1 = 2;
                        var1 = var8[var1];
                        var7 = undefined;
                        var3 = var2.bind(var7)(var1);
                        var2 = var3.post;
                        var1 = {};
                        var4 = _closure1_slot4;
                        var4 = var4.SAFETY_FLOWS_RESEND_VERIFICATION_CODE;
                        var1.url = var4;
                        var4 = {};
                        var4.flow_id = var6;
                        var1.body = var4;
                        var4 = {};
                        var6 = _closure1_slot0;
                        var5 = 3;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var5 = var5.NetworkActionNames;
                        var5 = var5.USER_VERIFY;
                        var4.event = var5;
                        var1.trackedActionData = var4;
                        var4 = true;
                        var1.rejectWithError = var4;
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 126);
                    case 124:
                        return var1;
                    case 126:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun117695_ip = 135;
                            continue _fun117695
                        }
                    case 132: // try_end0
                        return var1;
                    case 135:
                        return var1;
                    case 138: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var2);
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var10 = var2;
                        var9 = var3;
                        var1 = new var10[var1](var9, var8);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 190:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot7 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var0;
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
    var3 = var3.Endpoints;
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_flows/SafetyFlowsActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot5;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.getCurrentTask = var3;
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
    var2.completeTask = var3;
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot7;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.resendVerificationCode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 660, 4521, 481, 3343, 2]);