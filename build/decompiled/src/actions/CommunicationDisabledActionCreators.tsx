// actions/CommunicationDisabledActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = {};
    var3 = function arg0, arg1, arg2, arg3, arg4, arg5() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var1 = arg4;
        var _closure2_slot4 = var1;
        var1 = arg5;
        var _closure2_slot5 = var1;
        var2 = _closure1_slot2;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun79581: for (var _fun79581_ip = 0;;) switch (_fun79581_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun79581_ip = 193;
                            continue _fun79581
                        }
                    case 10:
                        var1 = _closure2_slot2;
                        var6 = null;
                        var1 = var6 != var1;
                        if (!var1) {
                            _fun79581_ip = 84;
                            continue _fun79581
                        }
                    case 26:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 1;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var4 = var1.bind(var2)();
                        var3 = var4.add;
                        var2 = _closure2_slot2;
                        var1 = 's';
                        var2 = var3.bind(var4)(var2, var1);
                        var1 = var2.toISOString;
                        var6 = var1.bind(var2)();
                    case 84:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 2;
                        var1 = var2[var1];
                        var2 = undefined;
                        var4 = var3.bind(var2)(var1);
                        var3 = var4.setCommunicationDisabledUntil;
                        var1 = {};
                        var7 = _closure2_slot0;
                        var1.guildId = var7;
                        var7 = _closure2_slot1;
                        var1.userId = var7;
                        var1.communicationDisabledUntilTimestamp = var6;
                        var6 = _closure2_slot2;
                        var1.duration = var6;
                        var6 = _closure2_slot3;
                        var1.reason = var6;
                        var6 = _closure2_slot4;
                        var1.location = var6;
                        var5 = _closure2_slot5;
                        var1.moderatorReportId = var5;
                        var1 = var3.bind(var4)(var1);
                        SaveGenerator(address = 181);
                    case 179:
                        return var1;
                    case 181:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun79581_ip = 190;
                            continue _fun79581
                        }
                    case 187:
                        return var2;
                    case 190:
                        return var1;
                    case 193:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.setCommunicationDisabledDuration = var3;
    var3 = 3;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/CommunicationDisabledActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3045, 4679, 2]);