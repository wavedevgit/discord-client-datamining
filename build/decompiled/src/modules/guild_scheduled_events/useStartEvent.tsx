// modules/guild_scheduled_events/useStartEvent.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = function() { // Original name: onSuccess, environment: var1
        var0 = undefined;
        return var0;
    };
    var3.onSuccess = var6;
    var6 = new Array(0);
    var3.permissionOverwrites = var6;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/useStartEvent.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useStartEvent, environment: var1
        var0 = function() { // Original name: _startEvent, environment: var1
            var3 = undefined;
            var0 = undefined;
            var2 = _closure1_slot3;
            var1 = function*(arg0, arg1) { // Environment: var1
                var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                    _fun66948: for (var _fun66948_ip = 0;;) switch (_fun66948_ip) {
                        case 0:
                            StartGenerator();
                            var1 = arguments[2];
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun66948_ip = 407;
                                continue _fun66948
                            }
                        case 13:
                            var8 = arg0;
                            var5 = arg1;
                            var2 = undefined;
                            if (!(var1 === var2)) {
                                _fun66948_ip = 32;
                                continue _fun66948
                            }
                        case 25:
                            var1 = _closure1_slot6;
                        case 32:
                            var6 = var1.onSuccess;
                            if (!(var6 === var2)) {
                                _fun66948_ip = 55;
                                continue _fun66948
                            }
                        case 42:
                            var9 = _closure1_slot6;
                            var6 = var9.onSuccess;
                        case 55:
                            var7 = var6;
                            var1 = var1.permissionOverwrites;
                            if (!(var1 === var2)) {
                                _fun66948_ip = 81;
                                continue _fun66948
                            }
                        case 68:
                            var6 = _closure1_slot6;
                            var1 = var6.permissionOverwrites;
                        case 81:
                            var4 = var1;
                            SaveGenerator(address = 88);
                        case 86:
                            return var2;
                        case 88:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                            if (var3) {
                                _fun66948_ip = 404;
                                continue _fun66948
                            }
                        case 97:
                            var9 = _closure2_slot0;
                            var6 = true;
                            var6 = var9.bind(var2)(var6);
                        case 111: // try_start_0
                            var10 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var11 = 3;
                            var6 = var6[var11];
                            var12 = var10.bind(var2)(var6);
                            var10 = var12.preStartEventActions;
                            var6 = var8;
                            var4 = var10.bind(var12)(var6, var4);
                            SaveGenerator(address = 153);
                        case 151:
                            return var4;
                        case 153:
                            ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 6);
                            if (var6) {
                                _fun66948_ip = 313;
                                continue _fun66948
                            }
                        case 162:
                            var10 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var6 = var6[var11];
                            var11 = var10.bind(var2)(var6);
                            var10 = var11.setEventAsActive;
                            var6 = var8;
                            var5 = var10.bind(var11)(var6, var5);
                            SaveGenerator(address = 198);
                        case 196:
                            return var5;
                        case 198:
                            ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 6);
                            if (var6) {
                                _fun66948_ip = 310;
                                continue _fun66948
                            }
                        case 204:
                            var10 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var11 = 4;
                            var6 = var6[var11];
                            var13 = var10.bind(var2)(var6);
                            var12 = var13.navigateToEvent;
                            var10 = var8;
                            var6 = var7;
                            var6 = var12.bind(var13)(var10, var6);
                            SaveGenerator(address = 246);
                        case 244:
                            return var6;
                        case 246:
                            ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 10);
                            if (var10) {
                                _fun66948_ip = 307;
                                continue _fun66948
                            }
                        case 252:
                            var10 = _closure1_slot0;
                            var9 = _closure1_slot2;
                            var9 = var9[var11];
                            var10 = var10.bind(var2)(var9);
                            var9 = var10.postStartActions;
                            var7 = var9.bind(var10)(var8, var7);
                            SaveGenerator(address = 285);
                        case 283:
                            return var7;
                        case 285:
                            ResumeGenerator(result_out_reg = 7, return_bool_out_reg = 8);
                            if (var8) {
                                _fun66948_ip = 304;
                                continue _fun66948
                            }
                        case 291:
                            var9 = _closure2_slot0;
                            var8 = false;
                            var8 = var9.bind(var2)(var8);
                        case 302: // try_end0
                            _fun66948_ip = 390;
                            continue _fun66948;
                        case 304:
                            return var7;
                        case 307:
                            return var6;
                        case 310:
                            return var5;
                        case 313:
                            return var4;
                        case 316: // catch_target0
                            CatchBlockStart(arg_register = 6);
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var4 = 5;
                            var4 = var7[var4];
                            var4 = var5.bind(var2)(var4);
                            var4 = var4.APIError;
                            var5 = var4.prototype;
                            var5 = Object.create(var5, {
                                constructor: {
                                    value: var4
                                }
                            });
                            var16 = var5;
                            var15 = var6;
                            var4 = new var16[var4](var15, var14);
                            var5 = var4 instanceof Object ? var4 : var5;
                            var4 = _closure2_slot1;
                            var4 = var4.bind(var2)(var5);
                            var5 = _closure2_slot0;
                            var4 = false;
                            var4 = var5.bind(var2)(var4);
                        case 390:
                            var4 = _closure2_slot0;
                            var3 = false;
                            var3 = var4.bind(var2)(var3);
                            return var2;
                        case 404:
                            return var1;
                        case 407:
                            return var0;
                    }
                };
                var1 = var0.next;
                var1 = var1.bind(var0)();
                return var0;
            };
            var3 = var2.bind(var3)(var1);
            _closure2_slot2 = var3;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var _closure2_slot2 = var0;
        var9 = _closure1_slot5;
        var3 = var9.useState;
        var0 = false;
        var0 = var3.bind(var9)(var0);
        var7 = _closure1_slot4;
        var6 = undefined;
        var5 = 2;
        var0 = var7.bind(var6)(var0, var5);
        var2 = 0;
        var3 = var0[var2];
        var4 = 1;
        var0 = var0[var4];
        var _closure2_slot0 = var0;
        var8 = var9.useState;
        var0 = null;
        var0 = var8.bind(var9)(var0);
        var0 = var7.bind(var6)(var0, var5);
        var2 = var0[var2];
        var0 = var0[var4];
        var _closure2_slot1 = var0;
        var0 = new Array(2);
        var1 = function(arg0, arg1) { // Original name: startEvent, environment: var1
            var0 = undefined;
            var3 = _closure2_slot2;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0[0] = var1;
        var1 = {};
        var1.loading = var3;
        var1.error = var2;
        var0[1] = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 8275, 8276, 3309, 2]);