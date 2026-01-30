// modules/app_database/modules/channels/ChannelReader.tsx
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
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var4[var3];
    var6 = var5.bind(var0)(var3);
    var3 = var6.prototype;
    var5 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var10 = 'ChannelReader';
    var11 = var5;
    var3 = new var11[var6](var10, var9);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var4 = _closure1_slot4;
        var3 = function() { // Original name: ChannelReader, environment: var5
            var3 = _closure1_slot3;
            var2 = _closure2_slot2;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot2 = var3;
        var0 = {};
        var2 = 'getSync';
        var0.key = var2;
        var2 = function(arg0, arg1) { // Original name: value, environment: var5
            var10 = arg1;
            var0 = global;
            var2 = var0.performance;
            var1 = var2.now;
            var4 = var1.bind(var2)();
            var5 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 4;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var5.bind(var1)(var2);
            var2 = var5.channels;
            var1 = arg0;
            var2 = var2.bind(var5)(var1);
            var1 = var2.getManySyncUnsafe;
            var2 = var1.bind(var2)(var10);
            var5 = var0.performance;
            var1 = var5.now;
            var1 = var1.bind(var5)();
            var1 = var1 - var4;
            var4 = _closure1_slot5;
            var3 = var4.log;
            var12 = var2.length;
            var0 = var0.HermesInternal;
            var8 = var0.concat;
            var17 = 'synchronously loaded in ';
            var15 = 'ms (guild: ';
            var13 = ', channels: ';
            var11 = ')';
            var16 = var1;
            var14 = var10;
            var0 = var17[var8](var16, var15, var14, var13, var12, var11, var10);
            var0 = var3.bind(var4)(var0);
            var0 = new Array(2);
            var0[0] = var2;
            var0[1] = var1;
            return var0;
        };
        var0.value = var2;
        var2 = new Array(3);
        var2[0] = var0;
        var0 = {};
        var6 = 'getAsync';
        var0.key = var6;
        var7 = _closure1_slot2;
        var1 = undefined;
        var6 = function*(arg0, arg1) { // Environment: var5
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun18773: for (var _fun18773_ip = 0;;) switch (_fun18773_ip) {
                    case 0:
                        StartGenerator();
                        var11 = arg1;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun18773_ip = 175;
                            continue _fun18773
                        }
                    case 13:
                        var2 = global;
                        var3 = var2.performance;
                        var1 = var3.now;
                        var5 = var1.bind(var3)();
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 4;
                        var4 = var4[var1];
                        var1 = undefined;
                        var6 = var6.bind(var1)(var4);
                        var4 = var6.channels;
                        var1 = arg0;
                        var4 = var4.bind(var6)(var1);
                        var1 = var4.getMany;
                        var1 = var1.bind(var4)(var11);
                        SaveGenerator(address = 84);
                    case 82:
                        return var1;
                    case 84:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun18773_ip = 172;
                            continue _fun18773
                        }
                    case 90:
                        var6 = var2.performance;
                        var4 = var6.now;
                        var4 = var4.bind(var6)();
                        var17 = var4 - var5;
                        var4 = _closure1_slot5;
                        var3 = var4.verbose;
                        var13 = var1.length;
                        var2 = var2.HermesInternal;
                        var8 = var2.concat;
                        var18 = 'loaded in ';
                        var16 = 'ms (guild: ';
                        var14 = ', channels: ';
                        var12 = ')';
                        var15 = var11;
                        var2 = var18[var8](var17, var16, var15, var14, var13, var12, var11);
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    case 172:
                        return var1;
                    case 175:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var1)(var6);
        var _closure2_slot1 = var6;
        var6 = function() { // Original name: getAsync, environment: var5
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.value = var6;
        var2[1] = var0;
        var0 = {};
        var6 = 'getGuildIds';
        var0.key = var6;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun18776: for (var _fun18776_ip = 0;;) switch (_fun18776_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun18776_ip = 236;
                            continue _fun18776
                        }
                    case 10:
                        var5 = undefined;
                        var2 = undefined;
                        var1 = undefined;
                    case 16: // try_start_0
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var3 = 4;
                        var3 = var6[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.channels;
                        var4 = var3.bind(var4)();
                        var1 = var4;
                        var3 = null;
                        if (!(var3 != var4)) {
                            _fun18776_ip = 148;
                            continue _fun18776
                        }
                    case 58:
                        var4 = var1;
                        var1 = var4.getGuildIds;
                        var1 = var1.bind(var4)();
                        SaveGenerator(address = 75);
                    case 73:
                        return var1;
                    case 75:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun18776_ip = 145;
                            continue _fun18776
                        }
                    case 81:
                        var2 = var1;
                        if (!(var3 == var1)) {
                            _fun18776_ip = 94;
                            continue _fun18776
                        }
                    case 88:
                        var4 = new Array(0);
                        _fun18776_ip = 97;
                        continue _fun18776;
                    case 94:
                        var4 = var2;
                    case 97:
                        var3 = var4.filter;
                        var2 = function(arg0) { // Environment: var2
                            _fun18777: for (var _fun18777_ip = 0;;) switch (_fun18777_ip) {
                                case 0:
                                    var1 = arg0;
                                    var0 = null;
                                    var0 = var0 !== var1;
                                    if (!var0) {
                                        _fun18777_ip = 23;
                                        continue _fun18777
                                    }
                                case 12:
                                    var2 = 'string';
                                    var1 = typeof var1;
                                    var0 = var2 === var1;
                                case 23:
                                    return var0;
                            }
                        };
                        var8 = var3.bind(var4)(var2);
                        var2 = global;
                        var2 = var2.Set;
                        var3 = var2.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var2
                            }
                        });
                        var9 = var3;
                        var2 = new var9[var2](var8, var7);
                        var2 = var2 instanceof Object ? var2 : var3;
                    case 142: // try_end0
                        return var2;
                    case 145:
                        return var1;
                    case 148: // try_start_1
                        var1 = global;
                        var1 = var1.Set;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var9 = var2;
                        var1 = new var9[var1](var8);
                        var1 = var1 instanceof Object ? var1 : var2;
                    case 176: // try_end1
                        return var1;
                    case 179: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 4);
                        var3 = _closure1_slot5;
                        var2 = var3.warn;
                        var1 = "couldn't get guild ids";
                        var1 = var2.bind(var3)(var1, var4);
                        var1 = global;
                        var1 = var1.Set;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var1
                            }
                        });
                        var9 = var2;
                        var1 = new var9[var1](var8);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    case 236:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var1)(var6);
        var _closure2_slot0 = var6;
        var5 = function() { // Original name: getGuildIds, environment: var5
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = null;
        var0 = var4.bind(var1)(var3, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 5;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_database/modules/channels/ChannelReader.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 3, 1637, 2]);