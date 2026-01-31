// modules/threads/native/useHandleJoinThreadVoice.tsx
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
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/threads/native/useHandleJoinThreadVoice.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: useHandleJoinThreadVoice, environment: var1
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun71194: for (var _fun71194_ip = 0;;) switch (_fun71194_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun71194_ip = 356;
                            continue _fun71194
                        }
                    case 10:
                        var2 = _closure2_slot0;
                        var1 = var2.getGuildId;
                        var4 = var1.bind(var2)();
                        var1 = null;
                        if (!(var1 != var4)) {
                            _fun71194_ip = 75;
                            continue _fun71194
                        }
                    case 33:
                        var5 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var2 = 2;
                        var2 = var3[var2];
                        var3 = undefined;
                        var5 = var5.bind(var3)(var2);
                        var2 = var5.shouldShowMembershipVerificationGate;
                        var2 = var2.bind(var5)(var4);
                        if (var2) {
                            _fun71194_ip = 291;
                            continue _fun71194
                        }
                    case 75:
                        var8 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var10 = 5;
                        var2 = var2[var10];
                        var6 = undefined;
                        var9 = var8.bind(var6)(var2);
                        var8 = var9.unarchiveThreadIfNecessary;
                        var2 = _closure2_slot0;
                        var2 = var2.id;
                        var2 = var8.bind(var9)(var2);
                        SaveGenerator(address = 124);
                    case 122:
                        return var2;
                    case 124:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 8);
                        if (var8) {
                            _fun71194_ip = 288;
                            continue _fun71194
                        }
                    case 133:
                        var11 = _closure1_slot4;
                        var9 = var11.hasJoined;
                        var8 = _closure2_slot0;
                        var8 = var8.id;
                        var8 = var9.bind(var11)(var8);
                        if (var8) {
                            _fun71194_ip = 212;
                            continue _fun71194
                        }
                    case 160:
                        var9 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var8 = var8[var10];
                        var11 = var9.bind(var6)(var8);
                        var10 = var11.joinThread;
                        var9 = _closure2_slot0;
                        var8 = 'Join Voice';
                        var8 = var10.bind(var11)(var9, var8);
                        SaveGenerator(address = 203);
                    case 201:
                        return var8;
                    case 203:
                        ResumeGenerator(result_out_reg = 8, return_bool_out_reg = 9);
                        if (!var9) {
                            _fun71194_ip = 212;
                            continue _fun71194
                        }
                    case 209:
                        return var8;
                    case 212:
                        var9 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var8 = 4;
                        var8 = var5[var8];
                        var9 = var9.bind(var6)(var8);
                        var8 = 6;
                        var8 = var5[var8];
                        var5 = var5.paths;
                        var5 = var9.bind(var6)(var8, var5);
                        SaveGenerator(address = 254);
                    case 252:
                        return var5;
                    case 254:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 8);
                        if (var8) {
                            _fun71194_ip = 285;
                            continue _fun71194
                        }
                    case 260:
                        var9 = var5.openGuildVoiceModal;
                        var8 = _closure2_slot0;
                        var7 = 'Thread Header';
                        var7 = var9.bind(var6)(var8, var7);
                        return var6;
                    case 285:
                        return var5;
                    case 288:
                        return var2;
                    case 291:
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var2 = 4;
                        var2 = var1[var2];
                        var5 = var5.bind(var3)(var2);
                        var2 = 3;
                        var2 = var1[var2];
                        var1 = var1.paths;
                        var1 = var5.bind(var3)(var2, var1);
                        SaveGenerator(address = 333);
                    case 331:
                        return var1;
                    case 333:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun71194_ip = 353;
                            continue _fun71194
                        }
                    case 339:
                        var2 = var1.openMemberVerificationModal;
                        var2 = var2.bind(var3)(var4);
                        return var2;
                    case 353:
                        return var1;
                    case 356:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3052, 4787, 7405, 1307, 6429, 7838, 2]);