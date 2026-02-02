// modules/applications/useCreateGuildApplication.tsx
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
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot5 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/applications/useCreateGuildApplication.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var6 = _closure1_slot5;
        var3 = var6.useState;
        var1 = false;
        var1 = var3.bind(var6)(var1);
        var8 = _closure1_slot4;
        var3 = undefined;
        var7 = 2;
        var4 = var8.bind(var3)(var1, var7);
        var1 = 0;
        var2 = var4[var1];
        var5 = 1;
        var4 = var4[var5];
        var _closure2_slot0 = var4;
        var4 = var6.useState;
        var4 = var4.bind(var6)();
        var4 = var8.bind(var3)(var4, var7);
        var1 = var4[var1];
        var4 = var4[var5];
        var _closure2_slot1 = var4;
        var5 = var6.useRef;
        var4 = null;
        var4 = var5.bind(var6)(var4);
        var _closure2_slot2 = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0, arg1, arg2, arg3) { // Environment: var0
                var0 = function*(arg0, arg1, arg2, arg3) { // Original name: ?anon_0_, environment: var0
                    _fun116548: for (var _fun116548_ip = 0;;) switch (_fun116548_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun116548_ip = 341;
                                continue _fun116548
                            }
                        case 10:
                            var3 = arg0;
                            var8 = arg1;
                            var9 = arg2;
                            var10 = arg3;
                            var1 = _closure2_slot1;
                            var4 = undefined;
                            var1 = var1.bind(var4)(var4);
                        case 36: // try_start_0 // try_start_1
                            var1 = _closure2_slot0;
                            var5 = true;
                            var1 = var1.bind(var4)(var5);
                            var1 = _closure2_slot2;
                            var6 = var1.current;
                            var1 = null;
                            if (!(var1 == var6)) {
                                _fun116548_ip = 146;
                                continue _fun116548
                            }
                        case 62:
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var1 = 3;
                            var1 = var7[var1];
                            var7 = var6.bind(var4)(var1);
                            var6 = var7.createApplication;
                            var1 = {};
                            var1.name = var10;
                            var10 = var3;
                            var10 = var10.id;
                            var1.guildId = var10;
                            var10 = var9;
                            var1.type = var10;
                            var1.teamId = var8;
                            var1 = var6.bind(var7)(var1);
                            SaveGenerator(address = 130);
                        case 128:
                            return var1;
                        case 130:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                            if (var6) {
                                _fun116548_ip = 235;
                                continue _fun116548
                            }
                        case 136:
                            var6 = _closure2_slot2;
                            var6.current = var1;
                        case 146:
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot2;
                            var6 = 3;
                            var6 = var8[var6];
                            var8 = var7.bind(var4)(var6);
                            var7 = var8.getApplicationsForGuild;
                            var6 = var3.id;
                            var3 = {};
                            var3.type = var9;
                            var3.includeTeam = var5;
                            var3 = var7.bind(var8)(var6, var3);
                            SaveGenerator(address = 201);
                        case 199:
                            return var3;
                        case 201:
                            ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                            if (var6) {
                                _fun116548_ip = 221;
                                continue _fun116548
                            }
                        case 207: // try_end0 // try_end1
                            var7 = _closure2_slot0;
                            var6 = false;
                            var6 = var7.bind(var4)(var6);
                            return var5;
                        case 221:
                            var6 = _closure2_slot0;
                            var5 = false;
                            var5 = var6.bind(var4)(var5);
                            return var3;
                        case 235:
                            var5 = _closure2_slot0;
                            var3 = false;
                            var3 = var5.bind(var4)(var3);
                            return var1;
                        case 249: // try_start_2 // catch_target0
                            CatchBlockStart(arg_register = 6);
                            var3 = _closure2_slot1;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var1 = 4;
                            var1 = var7[var1];
                            var1 = var5.bind(var4)(var1);
                            var1 = var1.APIError;
                            var5 = var1.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var1
                                }
                            });
                            var13 = var5;
                            var12 = var6;
                            var1 = new var13[var1](var12, var11);
                            var1 = var1 instanceof Object ? var1 : var5;
                            var1 = var3.bind(var4)(var1);
                        case 312: // try_end2
                            var3 = _closure2_slot0;
                            var1 = false;
                            var3 = var3.bind(var4)(var1);
                            return var1;
                        case 326: // catch_target1 // catch_target2
                            CatchBlockStart(arg_register = 1);
                            var3 = _closure2_slot0;
                            var2 = false;
                            var2 = var3.bind(var4)(var2);
                            throw var1;
                        case 341:
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
        var3 = var0.bind(var3)();
        var0 = {};
        var0.createGuildApplication = var3;
        var0.submitting = var2;
        var0.error = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 5308, 3311, 2]);