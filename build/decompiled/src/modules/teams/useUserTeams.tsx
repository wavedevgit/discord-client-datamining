// modules/teams/useUserTeams.tsx
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var5 = var4[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot4 = var3;
    var3 = 4;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/teams/useUserTeams.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun117251: for (var _fun117251_ip = 0;;) switch (_fun117251_ip) {
            case 0:
                var1 = arguments[0];
                var4 = undefined;
                if (!(var1 === var4)) {
                    _fun117251_ip = 13;
                    continue _fun117251
                }
            case 11:
                var1 = {};
            case 13:
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var4;
                var _closure2_slot2 = var4;
                var _closure2_slot3 = var4;
                var _closure2_slot4 = var4;
                var7 = var1.refreshOnDepChange;
                _closure2_slot0 = var7;
                var6 = _closure1_slot4;
                var3 = var6.useState;
                var1 = new Array(0);
                var1 = var3.bind(var6)(var1);
                var10 = _closure1_slot3;
                var9 = 2;
                var1 = var10.bind(var4)(var1, var9);
                var2 = 0;
                var3 = var1[var2];
                var8 = 1;
                var1 = var1[var8];
                _closure2_slot1 = var1;
                var1 = var6.useState;
                var5 = true;
                var1 = var1.bind(var6)(var5);
                var1 = var10.bind(var4)(var1, var9);
                var2 = var1[var2];
                var1 = var1[var8];
                _closure2_slot2 = var1;
                var1 = function() { // Environment: var0
                    var3 = _closure1_slot2;
                    var2 = undefined;
                    var1 = function*() { // Environment: var0
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun117254: for (var _fun117254_ip = 0;;) switch (_fun117254_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun117254_ip = 102;
                                        continue _fun117254
                                    }
                                case 7:
                                    var3 = _closure2_slot2;
                                    var1 = undefined;
                                    var5 = true;
                                    var3 = var3.bind(var1)(var5);
                                case 23: // try_start_0
                                    var4 = _closure1_slot0;
                                    var6 = _closure1_slot1;
                                    var3 = 3;
                                    var3 = var6[var3];
                                    var4 = var4.bind(var1)(var3);
                                    var3 = var4.fetchTeams;
                                    var3 = var3.bind(var4)(var5);
                                    SaveGenerator(address = 61);
                                case 59:
                                    return var3;
                                case 61:
                                    ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun117254_ip = 83;
                                        continue _fun117254
                                    }
                                case 67:
                                    var5 = _closure2_slot1;
                                    var4 = var3.body;
                                    var4 = var5.bind(var1)(var4);
                                case 81: // try_end0
                                    _fun117254_ip = 88;
                                    continue _fun117254;
                                case 83:
                                    return var3;
                                case 86: // catch_target0
                                    CatchBlockStart(arg_register = 3);
                                case 88:
                                    var3 = _closure2_slot2;
                                    var2 = false;
                                    var2 = var3.bind(var1)(var2);
                                    return var1;
                                case 102:
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
                var1 = var1.bind(var4)();
                _closure2_slot3 = var1;
                var4 = var6.useRef;
                var4 = var4.bind(var6)(var5);
                _closure2_slot4 = var4;
                var5 = var6.useEffect;
                var4 = new Array(1);
                var4[0] = var7;
                var0 = function() { // Environment: var0
                    _fun117256: for (var _fun117256_ip = 0;;) switch (_fun117256_ip) {
                        case 0:
                            var1 = _closure2_slot4;
                            var1 = var1.current;
                            if (var1) {
                                _fun117256_ip = 19;
                                continue _fun117256
                            }
                        case 15:
                            var1 = _closure2_slot0;
                        case 19:
                            if (!var1) {
                                _fun117256_ip = 44;
                                continue _fun117256
                            }
                        case 22:
                            var2 = _closure2_slot4;
                            var1 = false;
                            var2.current = var1;
                            var1 = _closure2_slot3;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                        case 44:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var4);
                var0 = {};
                var0.teams = var3;
                var0.loading = var2;
                var0.refresh = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 14965, 2]);