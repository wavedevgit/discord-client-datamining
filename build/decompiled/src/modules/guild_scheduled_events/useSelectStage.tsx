// modules/guild_scheduled_events/useSelectStage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var7 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/useSelectStage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useSelectStage, environment: var1
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 5;
        var3 = var3[var1];
        var1 = undefined;
        var7 = var4.bind(var1)(var3);
        var6 = var7.useStateFromStores;
        var3 = _closure1_slot6;
        var5 = new Array(1);
        var5[0] = var3;
        var4 = function() { // Environment: var0
            var1 = _closure1_slot6;
            var0 = var1.getVoiceChannelId;
            var0 = var0.bind(var1)();
            return var0;
        };
        var3 = new Array(0);
        var3 = var6.bind(var7)(var5, var4, var3);
        var _closure2_slot0 = var3;
        var4 = _closure1_slot4;
        var5 = var4.useState;
        var6 = var5.bind(var4)(var3);
        var5 = _closure1_slot3;
        var2 = 2;
        var6 = var5.bind(var1)(var6, var2);
        var2 = 0;
        var2 = var6[var2];
        var _closure2_slot1 = var2;
        var5 = 1;
        var5 = var6[var5];
        var _closure2_slot2 = var5;
        var6 = var4.useEffect;
        var5 = new Array(1);
        var5[0] = var3;
        var3 = function() { // Environment: var0
            var1 = global;
            var4 = var1.setTimeout;
            var3 = undefined;
            var2 = function() { // Environment: var0
                var2 = _closure2_slot2;
                var1 = _closure2_slot0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var1 = 500;
            var1 = var4.bind(var3)(var2, var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = global;
                var2 = var0.clearTimeout;
                var1 = _closure3_slot0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            return var0;
        };
        var3 = var6.bind(var4)(var3, var5);
        var3 = var4.useCallback;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot2;
            var2 = undefined;
            var1 = function*(arg0, arg1) { // Environment: var0
                var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                    _fun65989: for (var _fun65989_ip = 0;;) switch (_fun65989_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun65989_ip = 180;
                                continue _fun65989
                            }
                        case 10:
                            var4 = arg0;
                            var6 = arg1;
                            var1 = undefined;
                            var2 = undefined;
                        case 20: // try_start_0
                            var7 = _closure2_slot1;
                            var3 = var6;
                            if (!(var7 === var3)) {
                                _fun65989_ip = 63;
                                continue _fun65989
                            }
                        case 34:
                            var9 = _closure1_slot5;
                            var8 = var9.getChannel;
                            var7 = var6;
                            var8 = var8.bind(var9)(var7);
                            var2 = var8;
                            var7 = null;
                            if (!(var7 == var8)) {
                                _fun65989_ip = 125;
                                continue _fun65989
                            }
                        case 63:
                            var5 = _closure2_slot2;
                            var7 = var6;
                            var5 = var5.bind(var1)(var7);
                            var6 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var5 = 6;
                            var5 = var8[var5];
                            var6 = var6.bind(var1)(var5);
                            var5 = var6.connectOrLurkStage;
                            var4 = var5.bind(var6)(var4, var7);
                            SaveGenerator(address = 114);
                        case 112:
                            return var4;
                        case 114:
                            ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                            if (var5) {
                                _fun65989_ip = 122;
                                continue _fun65989
                            }
                        case 120: // try_end0
                            _fun65989_ip = 177;
                            continue _fun65989;
                        case 122:
                            return var4;
                        case 125: // try_start_1
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var3 = 6;
                            var3 = var5[var3];
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.navigateToStage;
                            var2 = var3.bind(var4)(var2);
                        case 156: // try_end1
                            var2 = undefined;
                            return var2;
                        case 161: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register = 2);
                            var3 = _closure2_slot2;
                            var2 = null;
                            var2 = var3.bind(var1)(var2);
                        case 177:
                            return var1;
                        case 180:
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
        var0 = new Array(1);
        var0[0] = var2;
        var1 = var3.bind(var4)(var1, var0);
        var0 = new Array(2);
        var0[0] = var2;
        var0[1] = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 1372, 1661, 566, 5873, 2]);