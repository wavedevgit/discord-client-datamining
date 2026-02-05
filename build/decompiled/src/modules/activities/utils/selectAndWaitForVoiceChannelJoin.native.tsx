// modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun64252: for (var _fun64252_ip = 0;;) switch (_fun64252_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun64252_ip = 74;
                continue _fun64252;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot2;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun64257: for (var _fun64257_ip = 0;;) switch (_fun64257_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 6);
                        if (var6) {
                            _fun64257_ip = 172;
                            continue _fun64257
                        }
                    case 15:
                        var7 = var1.channelId;
                        var5 = var7;
                        var _closure4_slot0 = var7;
                        var1 = var1.timeoutMs;
                        var8 = undefined;
                        if (!(var1 === var8)) {
                            _fun64257_ip = 45;
                            continue _fun64257
                        }
                    case 39:
                        var1 = 10000;
                    case 45:
                        var _closure4_slot1 = var1;
                        var4 = undefined;
                        SaveGenerator(address = 55);
                    case 53:
                        return var8;
                    case 55:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 6);
                        if (var6) {
                            _fun64257_ip = 169;
                            continue _fun64257
                        }
                    case 61:
                        var6 = global;
                        var7 = var6.Promise;
                        var6 = var7.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var7
                            }
                        });
                        var10 = function(arg0, arg1) { // Environment: var3
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var0 = arg1;
                            var _closure5_slot1 = var0;
                            var0 = global;
                            var4 = var0.setTimeout;
                            var3 = _closure4_slot1;
                            var0 = undefined;
                            var2 = function() { // Environment: var1
                                var2 = _closure5_slot1;
                                var3 = _closure1_slot9;
                                var0 = var3.prototype;
                                var1 = Object.create(var0, {
                                    constructor: {
                                        value: var3
                                    }
                                });
                                var4 = 'Joining voice channel has timed out.';
                                var5 = var1;
                                var0 = new var5[var3](var4, var3);
                                var1 = var0 instanceof Object ? var0 : var1;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var2 = var4.bind(var0)(var2, var3);
                            var _closure5_slot2 = var2;
                            var3 = _closure1_slot8;
                            var2 = var3.addConditionalChangeListener;
                            var1 = function() { // Environment: var1
                                _fun64260: for (var _fun64260_ip = 0;;) switch (_fun64260_ip) {
                                    case 0:
                                        var1 = _closure1_slot8;
                                        var0 = var1.getVoiceChannelId;
                                        var1 = var0.bind(var1)();
                                        var0 = _closure4_slot0;
                                        var0 = var1 !== var0;
                                        if (var0) {
                                            _fun64260_ip = 63;
                                            continue _fun64260
                                        }
                                    case 31:
                                        var1 = global;
                                        var4 = var1.clearTimeout;
                                        var3 = _closure5_slot2;
                                        var2 = undefined;
                                        var3 = var4.bind(var2)(var3);
                                        var1 = _closure5_slot0;
                                        var1 = var1.bind(var2)();
                                        var0 = false;
                                    case 63:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var11 = var6;
                        var3 = new var11[var7](var10, var9);
                        var4 = var3 instanceof Object ? var3 : var6;
                        var7 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var6 = 8;
                        var6 = var9[var6];
                        var7 = var7.bind(var8)(var6);
                        var6 = var7.selectVoiceChannel;
                        var5 = var6.bind(var7)(var5);
                    case 128: // try_start_0
                        SaveGenerator(address = 132);
                    case 130:
                        return var4;
                    case 132:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                        if (var5) {
                            _fun64257_ip = 143;
                            continue _fun64257
                        }
                    case 138: // try_end0
                        var5 = true;
                        return var5;
                    case 143:
                        return var4;
                    case 146: // catch_target0
                        CatchBlockStart(arg_register = 4);
                        var2 = var4;
                        var3 = _closure1_slot9;
                        var3 = var4 instanceof var3;
                        if (var3) {
                            _fun64257_ip = 164;
                            continue _fun64257
                        }
                    case 162:
                        throw var2;
                    case 164:
                        var2 = false;
                        return var2;
                    case 169:
                        return var1;
                    case 172:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot11 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot11 = var0;
    var3 = global;
    var8 = var3.Object;
    var6 = var8.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var5);
    var0 = 0;
    var5 = var4[var0];
    var0 = undefined;
    var5 = var7.bind(var0)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var4[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var4[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var4[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var4[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var4[var5];
    var5 = var7.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var4[var5];
    var5 = var7.bind(var0)(var5);
    var6 = 7;
    var6 = var4[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var3 = var3.Error;
    var5 = var5.bind(var0)(var3);
    var3 = function(arg0) { // Environment: var1
        var2 = function() {
            _fun64262: for (var _fun64262_ip = 0;;) switch (_fun64262_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun64262_ip = 69;
                        continue _fun64262
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun64262_ip = 105;
                    continue _fun64262;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot7;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot3;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var3 = var3.bind(var0)(var5);
    var _closure1_slot9 = var3;
    var3 = 9;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/selectAndWaitForVoiceChannelJoin.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var0 = undefined;
        var3 = _closure1_slot11;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 7, 6, 15, 17, 18, 162, 1670, 4231, 2]);