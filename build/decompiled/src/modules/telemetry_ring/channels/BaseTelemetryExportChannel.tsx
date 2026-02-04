// modules/telemetry_ring/channels/BaseTelemetryExportChannel.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun96774: for (var _fun96774_ip = 0;;) switch (_fun96774_ip) {
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
            case 72: // try_end0
                _fun96774_ip = 76;
                continue _fun96774;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
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
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun96778: for (var _fun96778_ip = 0;;) switch (_fun96778_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot4;
                    var2 = _closure2_slot4;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot7;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot6;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun96778_ip = 84;
                        continue _fun96778
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun96778_ip = 118;
                    continue _fun96778;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot7;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = false;
                    var0._initialized = var2;
                    var4 = null;
                    var0._timer = var4;
                    var0._inflight = var4;
                    var0._resetting = var2;
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 6;
                    var1 = var4[var1];
                    var3 = var2.bind(var3)(var1);
                    var1 = var3.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var3
                        }
                    });
                    var12 = 'TelemetryRing';
                    var13 = var2;
                    var1 = new var13[var3](var12, var11);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0._logger = var1;
                    return var0;
            }
        };
        var _closure2_slot4 = var3;
        var1 = _closure1_slot8;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = 'getIntervalMs';
        var4.key = var0;
        var0 = function() {
            var0 = 500;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(14);
        var0[0] = var4;
        var4 = {};
        var7 = 'getExportBatchSize';
        var4.key = var7;
        var7 = function() {
            var0 = null;
            return var0;
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'initialize';
        var4.key = var7;
        var7 = function() {
            _fun96781: for (var _fun96781_ip = 0;;) switch (_fun96781_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._initialized;
                    if (var0) {
                        _fun96781_ip = 20;
                        continue _fun96781
                    }
                case 12:
                    var0 = true;
                    var1._initialized = var0;
                case 20:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[2] = var4;
        var4 = {};
        var7 = 'reset';
        var4.key = var7;
        var7 = function() {
            _fun96782: for (var _fun96782_ip = 0;;) switch (_fun96782_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1.stop;
                    var2 = var2.bind(var1)();
                    var2 = var1._resetting;
                    if (var2) {
                        _fun96782_ip = 88;
                        continue _fun96782
                    }
                case 28:
                    var2 = true;
                    var1._resetting = var2;
                    var2 = var1._clearAckedEndOffset;
                    var2 = var2.bind(var1)();
                    var3 = var1._inflight;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun96782_ip = 80;
                        continue _fun96782
                    }
                case 60:
                    var2 = var3.finally;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = false;
                        var1._resetting = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    _fun96782_ip = 88;
                    continue _fun96782;
                case 80:
                    var0 = false;
                    var1._resetting = var0;
                case 88:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[3] = var4;
        var4 = {};
        var7 = 'start';
        var4.key = var7;
        var7 = function() {
            _fun96784: for (var _fun96784_ip = 0;;) switch (_fun96784_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1.shouldRun;
                    var2 = var2.bind(var1)();
                    if (!var2) {
                        _fun96784_ip = 34;
                        continue _fun96784
                    }
                case 22:
                    var4 = var1._timer;
                    var3 = null;
                    var2 = var3 == var4;
                case 34:
                    if (!var2) {
                        _fun96784_ip = 103;
                        continue _fun96784
                    }
                case 37:
                    var3 = var1._kick;
                    var2 = {
                        'mode': 'backlog',
                        'flush': false
                    };
                    var2 = var3.bind(var1)(var2);
                    var2 = global;
                    var4 = var2.setInterval;
                    var2 = var1.getIntervalMs;
                    var3 = var2.bind(var1)();
                    var2 = undefined;
                    var0 = function() { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2._kick;
                        var0 = {
                            'mode': 'stream',
                            'flush': false
                        };
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var0 = var4.bind(var2)(var0, var3);
                    var1._timer = var0;
                case 103:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[4] = var4;
        var4 = {};
        var7 = 'stop';
        var4.key = var7;
        var7 = function() {
            _fun96786: for (var _fun96786_ip = 0;;) switch (_fun96786_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._timer;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun96786_ip = 42;
                        continue _fun96786
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearInterval;
                    var3 = var1._timer;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1._timer = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[5] = var4;
        var4 = {};
        var7 = 'flushNow';
        var4.key = var7;
        var7 = _closure1_slot3;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun96788: for (var _fun96788_ip = 0;;) switch (_fun96788_ip) {
                    case 0:
                        StartGenerator();
                        var3 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun96788_ip = 66;
                            continue _fun96788
                        }
                    case 10:
                        var1 = var3.shouldRun;
                        var1 = var1.bind(var3)();
                        if (!var1) {
                            _fun96788_ip = 58;
                            continue _fun96788
                        }
                    case 23:
                        var2 = var3._kick;
                        var1 = {
                            'mode': 'stream',
                            'flush': true
                        };
                        var1 = var2.bind(var3)(var1);
                        SaveGenerator(address = 52);
                    case 50:
                        return var1;
                    case 52:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                        if (var2) {
                            _fun96788_ip = 63;
                            continue _fun96788
                        }
                    case 58:
                        var2 = undefined;
                        return var2;
                    case 63:
                        return var1;
                    case 66:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot3 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot3;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = '_readAckedEndOffset';
        var4.key = var6;
        var6 = function() {
            _fun96790: for (var _fun96790_ip = 0;;) switch (_fun96790_ip) {
                case 0:
                    var3 = this;
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 7;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.Storage;
                    var1 = var2.get;
                    var0 = var3.getAckedEndOffsetStorageKey;
                    var0 = var0.bind(var3)();
                    var1 = var1.bind(var2)(var0);
                    var3 = -1;
                    var4 = 'number';
                    var2 = typeof var1;
                    var0 = var3;
                    if (!(var4 === var2)) {
                        _fun96790_ip = 102;
                        continue _fun96790
                    }
                case 74:
                    var2 = global;
                    var4 = var2.Number;
                    var2 = var4.isFinite;
                    var2 = var2.bind(var4)(var1);
                    var0 = var3;
                    if (!var2) {
                        _fun96790_ip = 102;
                        continue _fun96790
                    }
                case 99:
                    var0 = var1;
                case 102:
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = '_writeAckedEndOffset';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var3 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var4 = var1.Storage;
            var3 = var4.set;
            var1 = var2.getAckedEndOffsetStorageKey;
            var2 = var1.bind(var2)();
            var1 = arg0;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = '_clearAckedEndOffset';
        var4.key = var6;
        var6 = function() {
            var4 = this;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var3 = var1.Storage;
            var2 = var3.remove;
            var1 = var4.getAckedEndOffsetStorageKey;
            var1 = var1.bind(var4)();
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = '_kick';
        var4.key = var6;
        var6 = function arg0() {
            _fun96793: for (var _fun96793_ip = 0;;) switch (_fun96793_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var0 = var1.shouldRun;
                    var0 = var0.bind(var1)();
                    if (var0) {
                        _fun96793_ip = 42;
                        continue _fun96793
                    }
                case 22:
                    var0 = global;
                    var3 = var0.Promise;
                    var0 = var3.resolve;
                    var0 = var0.bind(var3)();
                    _fun96793_ip = 118;
                    continue _fun96793;
                case 42:
                    var4 = var1._inflight;
                    var3 = null;
                    if (!(var3 == var4)) {
                        _fun96793_ip = 112;
                        continue _fun96793
                    }
                case 54:
                    var4 = var1._drainOnce;
                    var3 = arg0;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.catch;
                    var3 = function(arg0) { // Environment: var2
                        var0 = _closure3_slot0;
                        var3 = var0._logger;
                        var2 = var3.warn;
                        var1 = 'TelemetryRing export failed';
                        var0 = arg0;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.finally;
                    var2 = function() { // Environment: var2
                        var1 = _closure3_slot0;
                        var0 = null;
                        var1._inflight = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var1._inflight = var2;
                case 112:
                    var0 = var1._inflight;
                case 118:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = '_drainOnce';
        var4.key = var6;
        var6 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun96797: for (var _fun96797_ip = 0;;) switch (_fun96797_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        var6 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun96797_ip = 215;
                            continue _fun96797
                        }
                    case 16:
                        var3 = var6.getBudget;
                        var1 = var2.mode;
                        var5 = var3.bind(var6)(var1);
                        var1 = var6._readAckedEndOffset;
                        var1 = var1.bind(var6)();
                        var7 = 0;
                        var8 = var1 >= var7;
                        var3 = undefined;
                        var4 = undefined;
                        if (!var8) {
                            _fun96797_ip = 62;
                            continue _fun96797
                        }
                    case 59:
                        var4 = var1;
                    case 62:
                        var1 = var6._collectPages;
                        var1 = var1.bind(var6)(var5, var4);
                        SaveGenerator(address = 80);
                    case 78:
                        return var1;
                    case 80:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun96797_ip = 212;
                            continue _fun96797
                        }
                    case 89:
                        var4 = var1.length;
                        if (!(var7 !== var4)) {
                            _fun96797_ip = 206;
                            continue _fun96797
                        }
                    case 98:
                        var4 = var6._exportPages;
                        var2 = var2.flush;
                        var2 = var4.bind(var6)(var1, var2);
                        SaveGenerator(address = 122);
                    case 120:
                        return var2;
                    case 122:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun96797_ip = 209;
                            continue _fun96797
                        }
                    case 128:
                        if (!var2) {
                            _fun96797_ip = 206;
                            continue _fun96797
                        }
                    case 131:
                        var4 = var1[var7];
                        var5 = var4.maxReturnedEndOffset;
                        var4 = var6._resetting;
                        if (var4) {
                            _fun96797_ip = 206;
                            continue _fun96797
                        }
                    case 150:
                        var8 = 'number';
                        var4 = typeof var5;
                        var4 = var8 === var4;
                        if (!var4) {
                            _fun96797_ip = 183;
                            continue _fun96797
                        }
                    case 164:
                        var8 = global;
                        var9 = var8.Number;
                        var8 = var9.isFinite;
                        var4 = var8.bind(var9)(var5);
                    case 183:
                        if (!var4) {
                            _fun96797_ip = 190;
                            continue _fun96797
                        }
                    case 186:
                        var4 = var5 >= var7;
                    case 190:
                        if (!var4) {
                            _fun96797_ip = 206;
                            continue _fun96797
                        }
                    case 193:
                        var4 = var6._writeAckedEndOffset;
                        var4 = var4.bind(var6)(var5);
                    case 206:
                        return var3;
                    case 209:
                        return var2;
                    case 212:
                        return var1;
                    case 215:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot2 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot2;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = '_collectPages';
        var4.key = var6;
        var6 = function*(arg0, arg1) { // Environment: var5
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun96800: for (var _fun96800_ip = 0;;) switch (_fun96800_ip) {
                    case 0:
                        StartGenerator();
                        var9 = arg0;
                        var8 = arg1;
                        var7 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun96800_ip = 165;
                            continue _fun96800
                        }
                    case 19:
                        var2 = new Array(0);
                        var6 = -1;
                        var5 = 0;
                        var4 = global;
                    case 33:
                        var1 = var7.snapshot;
                        var1 = var1.bind(var7)(var6, var9, var8);
                        SaveGenerator(address = 50);
                    case 48:
                        return var1;
                    case 50:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun96800_ip = 162;
                            continue _fun96800
                        }
                    case 56:
                        var11 = var4.Array;
                        var10 = var11.isArray;
                        var3 = var1.entries;
                        var3 = var10.bind(var11)(var3);
                        if (!var3) {
                            _fun96800_ip = 159;
                            continue _fun96800
                        }
                    case 81:
                        var3 = var1.entries;
                        var3 = var3.length;
                        if (!(var5 !== var3)) {
                            _fun96800_ip = 159;
                            continue _fun96800
                        }
                    case 96:
                        var10 = var2.push;
                        var3 = {};
                        var11 = var1.entries;
                        var3.entries = var11;
                        var11 = var1.maxReturnedEndOffset;
                        var3.maxReturnedEndOffset = var11;
                        var11 = var1.nextBeforeOffset;
                        var3.nextBeforeOffset = var11;
                        var3 = var10.bind(var2)(var3);
                        var6 = var1.nextBeforeOffset;
                        var3 = var1.hasMore;
                        if (var3) {
                            _fun96800_ip = 33;
                            continue _fun96800
                        }
                    case 156:
                        return var2;
                    case 159:
                        return var2;
                    case 162:
                        return var1;
                    case 165:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot1 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = '_exportPages';
        var4.key = var6;
        var6 = function*(arg0, arg1) { // Environment: var5
            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                _fun96803: for (var _fun96803_ip = 0;;) switch (_fun96803_ip) {
                    case 0:
                        StartGenerator();
                        var12 = arg0;
                        var11 = arg1;
                        var10 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun96803_ip = 278;
                            continue _fun96803
                        }
                    case 19:
                        var1 = var10.getExportBatchSize;
                        var9 = var1.bind(var10)();
                        var2 = var12.length;
                        var1 = 1;
                        var8 = var2 - var1;
                        var4 = undefined;
                        var7 = 0;
                        var6 = global;
                        var5 = null;
                        var3 = undefined;
                        var2 = undefined;
                        if (!(var8 >= var7)) {
                            _fun96803_ip = 270;
                            continue _fun96803
                        }
                    case 62:
                        var17 = var12[var8];
                        if (!(var5 != var9)) {
                            _fun96803_ip = 77;
                            continue _fun96803
                        }
                    case 70:
                        var16 = var9;
                        if (!(!(var16 > var7))) {
                            _fun96803_ip = 88;
                            continue _fun96803
                        }
                    case 77:
                        var1 = var17.entries;
                        var16 = var1.length;
                    case 88:
                        var1 = var17.entries;
                        var1 = var1.length;
                        var1 = var7 < var1;
                        var15 = var7 === var8;
                        var14 = 0;
                        if (!var1) {
                            _fun96803_ip = 260;
                            continue _fun96803
                        }
                    case 115:
                        var19 = var6.Math;
                        var18 = var19.min;
                        var13 = var14 + var16;
                        var1 = var17.entries;
                        var1 = var1.length;
                        var20 = var18.bind(var19)(var13, var1);
                        var13 = var17.entries;
                        var1 = var13.slice;
                        var19 = var1.bind(var13)(var14, var20);
                        var13 = var14;
                        var18 = var15;
                        if (!var18) {
                            _fun96803_ip = 188;
                            continue _fun96803
                        }
                    case 173:
                        var1 = var17.entries;
                        var1 = var1.length;
                        var18 = var20 === var1;
                    case 188:
                        var21 = var10.exportEntries;
                        var1 = var11;
                        if (!var1) {
                            _fun96803_ip = 205;
                            continue _fun96803
                        }
                    case 202:
                        var1 = var18;
                    case 205:
                        var1 = var21.bind(var10)(var19, var1);
                        SaveGenerator(address = 215);
                    case 213:
                        return var1;
                    case 215:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 21);
                        if (var21) {
                            _fun96803_ip = 275;
                            continue _fun96803
                        }
                    case 221:
                        if (var1) {
                            _fun96803_ip = 229;
                            continue _fun96803
                        }
                    case 224:
                        var21 = false;
                        return var21;
                    case 229:
                        var14 = var13 + var16;
                        var13 = var17.entries;
                        var13 = var13.length;
                        var4 = var20;
                        var3 = var19;
                        var2 = var18;
                        if (var14 < var13) {
                            _fun96803_ip = 115;
                            continue _fun96803
                        }
                    case 260:
                        var8 = var8 - 1;
                        if (var8 >= var7) {
                            _fun96803_ip = 62;
                            continue _fun96803
                        }
                    case 270:
                        var2 = true;
                        return var2;
                    case 275:
                        return var1;
                    case 278:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var5 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var5;
        var0[13] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/telemetry_ring/channels/BaseTelemetryExportChannel.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 3, 587, 12628, 2]);