// modules/applications/useGuildApplication.tsx
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
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/useGuildApplication.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var9 = arg0;
        var10 = arg1;
        var _closure2_slot0 = var9;
        var _closure2_slot1 = var10;
        var2 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 4;
        var1 = var3[var1];
        var11 = undefined;
        var5 = var2.bind(var11)(var1);
        var3 = var5.useStateFromStores;
        var1 = _closure1_slot6;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() { // Environment: var0
            var3 = _closure1_slot6;
            var2 = var3.getGuildApplication;
            var1 = _closure2_slot0;
            var0 = _closure2_slot1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var3 = var3.bind(var5)(var2, var1);
        var _closure2_slot2 = var3;
        var6 = _closure1_slot5;
        var2 = var6.useState;
        var1 = null;
        var1 = var1 == var3;
        var1 = var2.bind(var6)(var1);
        var13 = _closure1_slot4;
        var12 = 2;
        var2 = var13.bind(var11)(var1, var12);
        var8 = 0;
        var1 = var2[var8];
        var7 = 1;
        var2 = var2[var7];
        var _closure2_slot3 = var2;
        var2 = var6.useState;
        var2 = var2.bind(var6)();
        var5 = var13.bind(var11)(var2, var12);
        var2 = var5[var8];
        var5 = var5[var7];
        var _closure2_slot4 = var5;
        var14 = var6.useState;
        var5 = false;
        var5 = var14.bind(var6)(var5);
        var5 = var13.bind(var11)(var5, var12);
        var8 = var5[var8];
        var _closure2_slot5 = var8;
        var5 = var5[var7];
        var _closure2_slot6 = var5;
        var7 = var6.useCallback;
        var5 = _closure1_slot3;
        var4 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun117035: for (var _fun117035_ip = 0;;) switch (_fun117035_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun117035_ip = 233;
                            continue _fun117035
                        }
                    case 10:
                        var1 = _closure2_slot2;
                        var3 = null;
                        if (!(var3 == var1)) {
                            _fun117035_ip = 213;
                            continue _fun117035
                        }
                    case 26:
                        var1 = _closure2_slot0;
                        if (!(var3 != var1)) {
                            _fun117035_ip = 213;
                            continue _fun117035
                        }
                    case 37:
                        var1 = _closure2_slot6;
                        var4 = undefined;
                        var7 = true;
                        var1 = var1.bind(var4)(var7);
                        var1 = _closure2_slot3;
                        var1 = var1.bind(var4)(var7);
                    case 59: // try_start_0 // try_start_1
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var1 = 5;
                        var1 = var5[var1];
                        var6 = var3.bind(var4)(var1);
                        var5 = var6.getApplicationsForGuild;
                        var3 = _closure2_slot0;
                        var1 = {};
                        var8 = _closure2_slot1;
                        var1.type = var8;
                        var1.includeTeam = var7;
                        var1 = var5.bind(var6)(var3, var1);
                        SaveGenerator(address = 117);
                    case 115:
                        return var1;
                    case 117:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun117035_ip = 125;
                            continue _fun117035
                        }
                    case 123: // try_end0
                        _fun117035_ip = 202;
                        continue _fun117035;
                    case 125: // try_end1
                        var5 = _closure2_slot3;
                        var3 = false;
                        var3 = var5.bind(var4)(var3);
                        return var1;
                    case 139: // try_start_2 // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var3 = _closure2_slot4;
                        var5 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var1 = 6;
                        var1 = var7[var1];
                        var1 = var5.bind(var4)(var1);
                        var1 = var1.APIError;
                        var5 = var1.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var1
                            }
                        });
                        var11 = var5;
                        var10 = var6;
                        var1 = new var11[var1](var10, var9);
                        var1 = var1 instanceof Object ? var1 : var5;
                        var1 = var3.bind(var4)(var1);
                    case 202: // try_end2
                        var3 = _closure2_slot3;
                        var1 = false;
                        var1 = var3.bind(var4)(var1);
                    case 213:
                        var1 = undefined;
                        return var1;
                    case 218: // catch_target1 // catch_target2
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure2_slot3;
                        var2 = false;
                        var2 = var3.bind(var4)(var2);
                        throw var1;
                    case 233:
                        return var0;
                }
            };
            return var0;
        };
        var5 = var5.bind(var11)(var4);
        var4 = new Array(3);
        var4[0] = var3;
        var4[1] = var10;
        var4[2] = var9;
        var7 = var7.bind(var6)(var5, var4);
        var _closure2_slot7 = var7;
        var5 = var6.useEffect;
        var4 = new Array(2);
        var4[0] = var8;
        var4[1] = var7;
        var0 = function() { // Environment: var0
            _fun117036: for (var _fun117036_ip = 0;;) switch (_fun117036_ip) {
                case 0:
                    var1 = _closure2_slot5;
                    if (var1) {
                        _fun117036_ip = 20;
                        continue _fun117036
                    }
                case 10:
                    var1 = _closure2_slot7;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                case 20:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var5.bind(var6)(var0, var4);
        var0 = {};
        var0.application = var3;
        var0.error = var2;
        var0.loading = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 3455, 566, 5396, 3351, 2]);