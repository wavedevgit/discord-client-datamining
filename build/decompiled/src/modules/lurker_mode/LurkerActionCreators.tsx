// modules/lurker_mode/LurkerActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var3 = function() { // Original name: stopLurkingAll, environment: var1
        var0 = undefined;
        var3 = _closure1_slot8;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot7 = var3;
    var0 = function() { // Original name: _stopLurkingAll, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun93254: for (var _fun93254_ip = 0;;) switch (_fun93254_ip) {
                    case 0:
                        StartGenerator();
                        var7 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun93254_ip = 169;
                            continue _fun93254
                        }
                    case 15:
                        var _closure4_slot0 = var7;
                        var4 = _closure1_slot5;
                        var3 = var4.lurkingGuildIds;
                        var5 = var3.bind(var4)();
                        var4 = var5.filter;
                        var3 = function(arg0) { // Environment: var1
                            var2 = _closure4_slot0;
                            var1 = var2.includes;
                            var0 = arg0;
                            var0 = var1.bind(var2)(var0);
                            var0 = !var0;
                            return var0;
                        };
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.length;
                        var3 = 0;
                        if (!(var3 !== var4)) {
                            _fun93254_ip = 161;
                            continue _fun93254
                        }
                    case 64:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 4;
                        var2 = var4[var2];
                        var6 = undefined;
                        var4 = var3.bind(var6)(var2);
                        var3 = var4.dispatch;
                        var2 = {};
                        var8 = 'GUILD_STOP_LURKING';
                        var2.type = var8;
                        var2.ignoredGuildIds = var7;
                        var2 = var3.bind(var4)(var2);
                        var2 = global;
                        var3 = var2.Promise;
                        var2 = var3.all;
                        var4 = var5.map;
                        var1 = function() { // Environment: var1
                            var3 = _closure1_slot3;
                            var2 = undefined;
                            var1 = function*(arg0) { // Environment: var0
                                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                    _fun93258: for (var _fun93258_ip = 0;;) switch (_fun93258_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun93258_ip = 188;
                                                continue _fun93258
                                            }
                                        case 10:
                                            var6 = arg0;
                                            var1 = undefined;
                                            var5 = undefined;
                                            var4 = _closure1_slot5;
                                            var3 = var4.getLurkingSource;
                                            var5 = var3.bind(var4)();
                                        case 34: // try_start_0
                                            var4 = _closure1_slot0;
                                            var7 = _closure1_slot2;
                                            var3 = 5;
                                            var3 = var7[var3];
                                            var3 = var4.bind(var1)(var3);
                                            var7 = var3.HTTP;
                                            var4 = var7.del;
                                            var3 = {};
                                            var10 = _closure1_slot6;
                                            var9 = var10.GUILD_LEAVE;
                                            var8 = var6;
                                            var8 = var9.bind(var10)(var8);
                                            var3.url = var8;
                                            var9 = {};
                                            var8 = true;
                                            var9.lurking = var8;
                                            var3.body = var9;
                                            var3.oldFormErrors = var8;
                                            var3.rejectWithError = var8;
                                            var3 = var4.bind(var7)(var3);
                                            SaveGenerator(address = 120);
                                        case 118:
                                            return var3;
                                        case 120:
                                            ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                            if (var4) {
                                                _fun93258_ip = 128;
                                                continue _fun93258
                                            }
                                        case 126: // try_end0
                                            _fun93258_ip = 185;
                                            continue _fun93258;
                                        case 128:
                                            return var3;
                                        case 131: // catch_target0
                                            CatchBlockStart(arg_register = 3);
                                            var3 = _closure1_slot1;
                                            var4 = _closure1_slot2;
                                            var2 = 4;
                                            var2 = var4[var2];
                                            var4 = var3.bind(var1)(var2);
                                            var3 = var4.dispatch;
                                            var2 = {};
                                            var7 = 'GUILD_STOP_LURKING_FAILURE';
                                            var2.type = var7;
                                            var2.lurkingGuildId = var6;
                                            var2.lurkingSource = var5;
                                            var2 = var3.bind(var4)(var2);
                                        case 185:
                                            return var1;
                                        case 188:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var1 = var3.bind(var2)(var1);
                            var _closure5_slot0 = var1;
                            var0 = function() { // Environment: var0
                                var0 = undefined;
                                var3 = _closure5_slot0;
                                var2 = var3.apply;
                                var0 = arguments;
                                var1 = var0;
                                var0 = this;
                                var0 = var2.bind(var3)(var0, var1);
                                return var0;
                            };
                            return var0;
                        };
                        var1 = var1.bind(var6)();
                        var1 = var4.bind(var5)(var1);
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 155);
                    case 153:
                        return var1;
                    case 155:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun93254_ip = 166;
                            continue _fun93254
                        }
                    case 161:
                        var2 = undefined;
                        return var2;
                    case 166:
                        return var1;
                    case 169:
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
    var0 = function() { // Original name: _stopLurking, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun93262: for (var _fun93262_ip = 0;;) switch (_fun93262_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun93262_ip = 171;
                            continue _fun93262
                        }
                    case 13:
                        var3 = undefined;
                        if (!(var4 === var3)) {
                            _fun93262_ip = 21;
                            continue _fun93262
                        }
                    case 19:
                        var4 = null;
                    case 21:
                        SaveGenerator(address = 25);
                    case 23:
                        return var3;
                    case 25:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun93262_ip = 168;
                            continue _fun93262
                        }
                    case 34:
                        var6 = _closure1_slot5;
                        var5 = var6.lurkingGuildIds;
                        var6 = var5.bind(var6)();
                        var7 = var6.length;
                        var5 = 0;
                        if (!(var5 !== var7)) {
                            _fun93262_ip = 162;
                            continue _fun93262
                        }
                    case 62:
                        var5 = null;
                        if (!(var5 != var4)) {
                            _fun93262_ip = 81;
                            continue _fun93262
                        }
                    case 68:
                        var5 = var6.includes;
                        var5 = var5.bind(var6)(var4);
                        if (var5) {
                            _fun93262_ip = 162;
                            continue _fun93262
                        }
                    case 81:
                        var6 = new Array(2);
                        var6[0] = var4;
                        var5 = _closure1_slot4;
                        var4 = var5.getGuildId;
                        var4 = var4.bind(var5)();
                        var6[1] = var4;
                        var5 = var6.filter;
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 6;
                        var4 = var8[var4];
                        var4 = var7.bind(var3)(var4);
                        var4 = var4.isNotNullish;
                        var4 = var5.bind(var6)(var4);
                        var2 = _closure1_slot7;
                        var2 = var2.bind(var3)(var4);
                        SaveGenerator(address = 156);
                    case 154:
                        return var2;
                    case 156:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun93262_ip = 165;
                            continue _fun93262
                        }
                    case 162:
                        return var3;
                    case 165:
                        return var2;
                    case 168:
                        return var1;
                    case 171:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot9 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var7.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.Endpoints;
    var _closure1_slot6 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/lurker_mode/LurkerActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.stopLurkingAll = var3;
    var1 = function() { // Original name: stopLurking, environment: var1
        var0 = undefined;
        var3 = _closure1_slot9;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.stopLurking = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3477, 3051, 660, 806, 507, 1304, 2]);