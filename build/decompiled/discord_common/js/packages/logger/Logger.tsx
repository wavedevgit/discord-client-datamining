// ../discord_common/js/packages/logger/Logger.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = function() {
        var0 = undefined;
        return var0;
    };
    var _closure1_slot5 = var1;
    var1 = function() {
        var0 = undefined;
        return var0;
    };
    var _closure1_slot6 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot4;
        var2 = function() {
            _fun113: for (var _fun113_ip = 0;;) switch (_fun113_ip) {
                case 0:
                    var1 = arguments[0];
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun113_ip = 22;
                        continue _fun113
                    }
                case 18:
                    var1 = 'default';
                case 22:
                    var _closure3_slot1 = var2;
                    var5 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var0)(var2, var4);
                    var4 = function(arg0, arg1) { // Environment: var3
                        _fun114: for (var _fun114_ip = 0;;) switch (_fun114_ip) {
                            case 0:
                                var5 = arg0;
                                var12 = 1;
                                var4 = copyRestArgs(var12);
                                var9 = _closure1_slot5;
                                var7 = _closure3_slot0;
                                var0 = var7.name;
                                var8 = new Array(3);
                                var8[0] = var0;
                                var6 = 'log';
                                var8[1] = var6;
                                var8[2] = var5;
                                var3 = 3;
                                var12 = var8;
                                var11 = var4;
                                var10 = var3;
                                var0 = arraySpread(var12, var11, var10);
                                var0 = undefined;
                                var12 = var9;
                                var11 = var8;
                                var10 = undefined;
                                var8 = apply(var12, var11, var10);
                                var7 = var7.nativeLoggerEnabled;
                                if (!var7) {
                                    _fun114_ip = 152;
                                    continue _fun114
                                }
                            case 88:
                                var8 = _closure1_slot6;
                                var7 = null;
                                if (!(var7 != var8)) {
                                    _fun114_ip = 152;
                                    continue _fun114
                                }
                            case 98:
                                var2 = _closure1_slot6;
                                var1 = _closure3_slot0;
                                var7 = var1.name;
                                var1 = new Array(3);
                                var1[0] = var7;
                                var1[1] = var6;
                                var1[2] = var5;
                                var12 = var1;
                                var11 = var4;
                                var10 = var3;
                                var3 = arraySpread(var12, var11, var10);
                                var12 = var2;
                                var11 = var1;
                                var10 = undefined;
                                var1 = apply(var12, var11, var10);
                            case 152:
                                return var0;
                        }
                    };
                    var2.logDangerously = var4;
                    var4 = function(arg0, arg1) { // Environment: var3
                        _fun115: for (var _fun115_ip = 0;;) switch (_fun115_ip) {
                            case 0:
                                var5 = arg0;
                                var8 = 1;
                                var13 = var8;
                                var4 = copyRestArgs(var13);
                                var6 = _closure1_slot0;
                                var0 = _closure1_slot1;
                                var3 = 3;
                                var1 = var0[var3];
                                var0 = undefined;
                                var7 = var6.bind(var0)(var1);
                                var6 = var7.checkLogForPII;
                                var1 = new Array(1);
                                var1[0] = var5;
                                var13 = var1;
                                var12 = var4;
                                var11 = var8;
                                var8 = arraySpread(var13, var12, var11);
                                var13 = var6;
                                var12 = var1;
                                var11 = var7;
                                var1 = apply(var13, var12, var11);
                                var9 = _closure1_slot5;
                                var7 = _closure3_slot0;
                                var6 = var7.name;
                                var8 = new Array(3);
                                var8[0] = var6;
                                var6 = 'log';
                                var8[1] = var6;
                                var8[2] = var5;
                                var13 = var8;
                                var12 = var4;
                                var11 = var3;
                                var10 = arraySpread(var13, var12, var11);
                                var13 = var9;
                                var12 = var8;
                                var11 = undefined;
                                var8 = apply(var13, var12, var11);
                                var7 = var7.nativeLoggerEnabled;
                                if (!var7) {
                                    _fun115_ip = 212;
                                    continue _fun115
                                }
                            case 148:
                                var8 = _closure1_slot6;
                                var7 = null;
                                if (!(var7 != var8)) {
                                    _fun115_ip = 212;
                                    continue _fun115
                                }
                            case 158:
                                var2 = _closure1_slot6;
                                var1 = _closure3_slot0;
                                var7 = var1.name;
                                var1 = new Array(3);
                                var1[0] = var7;
                                var1[1] = var6;
                                var1[2] = var5;
                                var13 = var1;
                                var12 = var4;
                                var11 = var3;
                                var3 = arraySpread(var13, var12, var11);
                                var13 = var2;
                                var12 = var1;
                                var11 = undefined;
                                var1 = apply(var13, var12, var11);
                            case 212:
                                return var0;
                        }
                    };
                    var2.log = var4;
                    var4 = function(arg0, arg1) { // Environment: var3
                        _fun116: for (var _fun116_ip = 0;;) switch (_fun116_ip) {
                            case 0:
                                var5 = arg0;
                                var12 = 1;
                                var4 = copyRestArgs(var12);
                                var9 = _closure1_slot5;
                                var7 = _closure3_slot0;
                                var0 = var7.name;
                                var8 = new Array(3);
                                var8[0] = var0;
                                var6 = 'debug';
                                var8[1] = var6;
                                var8[2] = var5;
                                var3 = 3;
                                var12 = var8;
                                var11 = var4;
                                var10 = var3;
                                var0 = arraySpread(var12, var11, var10);
                                var0 = undefined;
                                var12 = var9;
                                var11 = var8;
                                var10 = undefined;
                                var8 = apply(var12, var11, var10);
                                var7 = var7.nativeLoggerEnabled;
                                if (!var7) {
                                    _fun116_ip = 152;
                                    continue _fun116
                                }
                            case 88:
                                var8 = _closure1_slot6;
                                var7 = null;
                                if (!(var7 != var8)) {
                                    _fun116_ip = 152;
                                    continue _fun116
                                }
                            case 98:
                                var2 = _closure1_slot6;
                                var1 = _closure3_slot0;
                                var7 = var1.name;
                                var1 = new Array(3);
                                var1[0] = var7;
                                var1[1] = var6;
                                var1[2] = var5;
                                var12 = var1;
                                var11 = var4;
                                var10 = var3;
                                var3 = arraySpread(var12, var11, var10);
                                var12 = var2;
                                var11 = var1;
                                var10 = undefined;
                                var1 = apply(var12, var11, var10);
                            case 152:
                                return var0;
                        }
                    };
                    var2.verboseDangerously = var4;
                    var4 = function(arg0, arg1) { // Environment: var3
                        _fun117: for (var _fun117_ip = 0;;) switch (_fun117_ip) {
                            case 0:
                                var5 = arg0;
                                var8 = 1;
                                var13 = var8;
                                var4 = copyRestArgs(var13);
                                var6 = _closure1_slot0;
                                var0 = _closure1_slot1;
                                var3 = 3;
                                var1 = var0[var3];
                                var0 = undefined;
                                var7 = var6.bind(var0)(var1);
                                var6 = var7.checkLogForPII;
                                var1 = new Array(1);
                                var1[0] = var5;
                                var13 = var1;
                                var12 = var4;
                                var11 = var8;
                                var8 = arraySpread(var13, var12, var11);
                                var13 = var6;
                                var12 = var1;
                                var11 = var7;
                                var1 = apply(var13, var12, var11);
                                var9 = _closure1_slot5;
                                var7 = _closure3_slot0;
                                var6 = var7.name;
                                var8 = new Array(3);
                                var8[0] = var6;
                                var6 = 'debug';
                                var8[1] = var6;
                                var8[2] = var5;
                                var13 = var8;
                                var12 = var4;
                                var11 = var3;
                                var10 = arraySpread(var13, var12, var11);
                                var13 = var9;
                                var12 = var8;
                                var11 = undefined;
                                var8 = apply(var13, var12, var11);
                                var7 = var7.nativeLoggerEnabled;
                                if (!var7) {
                                    _fun117_ip = 212;
                                    continue _fun117
                                }
                            case 148:
                                var8 = _closure1_slot6;
                                var7 = null;
                                if (!(var7 != var8)) {
                                    _fun117_ip = 212;
                                    continue _fun117
                                }
                            case 158:
                                var2 = _closure1_slot6;
                                var1 = _closure3_slot0;
                                var7 = var1.name;
                                var1 = new Array(3);
                                var1[0] = var7;
                                var1[1] = var6;
                                var1[2] = var5;
                                var13 = var1;
                                var12 = var4;
                                var11 = var3;
                                var3 = arraySpread(var13, var12, var11);
                                var13 = var2;
                                var12 = var1;
                                var11 = undefined;
                                var1 = apply(var13, var12, var11);
                            case 212:
                                return var0;
                        }
                    };
                    var2.verbose = var4;
                    var4 = function(arg0, arg1) { // Environment: var3
                        _fun118: for (var _fun118_ip = 0;;) switch (_fun118_ip) {
                            case 0:
                                var5 = arg0;
                                var8 = 1;
                                var13 = var8;
                                var4 = copyRestArgs(var13);
                                var6 = _closure1_slot0;
                                var0 = _closure1_slot1;
                                var3 = 3;
                                var1 = var0[var3];
                                var0 = undefined;
                                var7 = var6.bind(var0)(var1);
                                var6 = var7.checkLogForPII;
                                var1 = new Array(1);
                                var1[0] = var5;
                                var13 = var1;
                                var12 = var4;
                                var11 = var8;
                                var8 = arraySpread(var13, var12, var11);
                                var13 = var6;
                                var12 = var1;
                                var11 = var7;
                                var1 = apply(var13, var12, var11);
                                var9 = _closure1_slot5;
                                var7 = _closure3_slot0;
                                var6 = var7.name;
                                var8 = new Array(3);
                                var8[0] = var6;
                                var6 = 'info';
                                var8[1] = var6;
                                var8[2] = var5;
                                var13 = var8;
                                var12 = var4;
                                var11 = var3;
                                var10 = arraySpread(var13, var12, var11);
                                var13 = var9;
                                var12 = var8;
                                var11 = undefined;
                                var8 = apply(var13, var12, var11);
                                var7 = var7.nativeLoggerEnabled;
                                if (!var7) {
                                    _fun118_ip = 212;
                                    continue _fun118
                                }
                            case 148:
                                var8 = _closure1_slot6;
                                var7 = null;
                                if (!(var7 != var8)) {
                                    _fun118_ip = 212;
                                    continue _fun118
                                }
                            case 158:
                                var2 = _closure1_slot6;
                                var1 = _closure3_slot0;
                                var7 = var1.name;
                                var1 = new Array(3);
                                var1[0] = var7;
                                var1[1] = var6;
                                var1[2] = var5;
                                var13 = var1;
                                var12 = var4;
                                var11 = var3;
                                var3 = arraySpread(var13, var12, var11);
                                var13 = var2;
                                var12 = var1;
                                var11 = undefined;
                                var1 = apply(var13, var12, var11);
                            case 212:
                                return var0;
                        }
                    };
                    var2.info = var4;
                    var4 = function(arg0, arg1) { // Environment: var3
                        _fun119: for (var _fun119_ip = 0;;) switch (_fun119_ip) {
                            case 0:
                                var5 = arg0;
                                var8 = 1;
                                var13 = var8;
                                var4 = copyRestArgs(var13);
                                var6 = _closure1_slot0;
                                var0 = _closure1_slot1;
                                var3 = 3;
                                var1 = var0[var3];
                                var0 = undefined;
                                var7 = var6.bind(var0)(var1);
                                var6 = var7.checkLogForPII;
                                var1 = new Array(1);
                                var1[0] = var5;
                                var13 = var1;
                                var12 = var4;
                                var11 = var8;
                                var8 = arraySpread(var13, var12, var11);
                                var13 = var6;
                                var12 = var1;
                                var11 = var7;
                                var1 = apply(var13, var12, var11);
                                var9 = _closure1_slot5;
                                var7 = _closure3_slot0;
                                var6 = var7.name;
                                var8 = new Array(3);
                                var8[0] = var6;
                                var6 = 'warn';
                                var8[1] = var6;
                                var8[2] = var5;
                                var13 = var8;
                                var12 = var4;
                                var11 = var3;
                                var10 = arraySpread(var13, var12, var11);
                                var13 = var9;
                                var12 = var8;
                                var11 = undefined;
                                var8 = apply(var13, var12, var11);
                                var7 = var7.nativeLoggerEnabled;
                                if (!var7) {
                                    _fun119_ip = 212;
                                    continue _fun119
                                }
                            case 148:
                                var8 = _closure1_slot6;
                                var7 = null;
                                if (!(var7 != var8)) {
                                    _fun119_ip = 212;
                                    continue _fun119
                                }
                            case 158:
                                var2 = _closure1_slot6;
                                var1 = _closure3_slot0;
                                var7 = var1.name;
                                var1 = new Array(3);
                                var1[0] = var7;
                                var1[1] = var6;
                                var1[2] = var5;
                                var13 = var1;
                                var12 = var4;
                                var11 = var3;
                                var3 = arraySpread(var13, var12, var11);
                                var13 = var2;
                                var12 = var1;
                                var11 = undefined;
                                var1 = apply(var13, var12, var11);
                            case 212:
                                return var0;
                        }
                    };
                    var2.warn = var4;
                    var4 = function(arg0, arg1) { // Environment: var3
                        _fun120: for (var _fun120_ip = 0;;) switch (_fun120_ip) {
                            case 0:
                                var5 = arg0;
                                var8 = 1;
                                var13 = var8;
                                var4 = copyRestArgs(var13);
                                var6 = _closure1_slot0;
                                var0 = _closure1_slot1;
                                var3 = 3;
                                var1 = var0[var3];
                                var0 = undefined;
                                var7 = var6.bind(var0)(var1);
                                var6 = var7.checkLogForPII;
                                var1 = new Array(1);
                                var1[0] = var5;
                                var13 = var1;
                                var12 = var4;
                                var11 = var8;
                                var8 = arraySpread(var13, var12, var11);
                                var13 = var6;
                                var12 = var1;
                                var11 = var7;
                                var1 = apply(var13, var12, var11);
                                var9 = _closure1_slot5;
                                var7 = _closure3_slot0;
                                var6 = var7.name;
                                var8 = new Array(3);
                                var8[0] = var6;
                                var6 = 'error';
                                var8[1] = var6;
                                var8[2] = var5;
                                var13 = var8;
                                var12 = var4;
                                var11 = var3;
                                var10 = arraySpread(var13, var12, var11);
                                var13 = var9;
                                var12 = var8;
                                var11 = undefined;
                                var8 = apply(var13, var12, var11);
                                var7 = var7.nativeLoggerEnabled;
                                if (!var7) {
                                    _fun120_ip = 212;
                                    continue _fun120
                                }
                            case 148:
                                var8 = _closure1_slot6;
                                var7 = null;
                                if (!(var7 != var8)) {
                                    _fun120_ip = 212;
                                    continue _fun120
                                }
                            case 158:
                                var2 = _closure1_slot6;
                                var1 = _closure3_slot0;
                                var7 = var1.name;
                                var1 = new Array(3);
                                var1[0] = var7;
                                var1[1] = var6;
                                var1[2] = var5;
                                var13 = var1;
                                var12 = var4;
                                var11 = var3;
                                var3 = arraySpread(var13, var12, var11);
                                var13 = var2;
                                var12 = var1;
                                var11 = undefined;
                                var1 = apply(var13, var12, var11);
                            case 212:
                                return var0;
                        }
                    };
                    var2.error = var4;
                    var4 = function(arg0, arg1) { // Environment: var3
                        _fun121: for (var _fun121_ip = 0;;) switch (_fun121_ip) {
                            case 0:
                                var5 = arg0;
                                var12 = 1;
                                var4 = copyRestArgs(var12);
                                var9 = _closure1_slot5;
                                var7 = _closure3_slot0;
                                var0 = var7.name;
                                var8 = new Array(3);
                                var8[0] = var0;
                                var6 = 'trace';
                                var8[1] = var6;
                                var8[2] = var5;
                                var3 = 3;
                                var12 = var8;
                                var11 = var4;
                                var10 = var3;
                                var0 = arraySpread(var12, var11, var10);
                                var0 = undefined;
                                var12 = var9;
                                var11 = var8;
                                var10 = undefined;
                                var8 = apply(var12, var11, var10);
                                var7 = var7.nativeLoggerEnabled;
                                if (!var7) {
                                    _fun121_ip = 152;
                                    continue _fun121
                                }
                            case 88:
                                var8 = _closure1_slot6;
                                var7 = null;
                                if (!(var7 != var8)) {
                                    _fun121_ip = 152;
                                    continue _fun121
                                }
                            case 98:
                                var2 = _closure1_slot6;
                                var1 = _closure3_slot0;
                                var7 = var1.name;
                                var1 = new Array(3);
                                var1[0] = var7;
                                var1[1] = var6;
                                var1[2] = var5;
                                var12 = var1;
                                var11 = var4;
                                var10 = var3;
                                var3 = arraySpread(var12, var11, var10);
                                var12 = var2;
                                var11 = var1;
                                var10 = undefined;
                                var1 = apply(var12, var11, var10);
                            case 152:
                                return var0;
                        }
                    };
                    var2.trace = var4;
                    var4 = function(arg0, arg1) { // Environment: var3
                        var1 = global;
                        var2 = var1.Date;
                        var0 = var2.now;
                        var2 = var0.bind(var2)();
                        var3 = arg1;
                        var0 = undefined;
                        var0 = var3.bind(var0)();
                        var4 = _closure3_slot0;
                        var3 = var4.log;
                        var5 = var1.Date;
                        var1 = var5.now;
                        var1 = var1.bind(var5)();
                        var2 = var1 - var2;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var1, var2);
                        return var0;
                    };
                    var2.time = var4;
                    var4 = function() { // Environment: var3
                        var3 = _closure1_slot2;
                        var2 = undefined;
                        var1 = function*(arg0, arg1) { // Environment: var0
                            var0 = function*(arg0, arg1) { // Original name: ?anon_0_, environment: var0
                                _fun125: for (var _fun125_ip = 0;;) switch (_fun125_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun125_ip = 97;
                                            continue _fun125
                                        }
                                    case 7:
                                        var2 = global;
                                        var3 = var2.Date;
                                        var1 = var3.now;
                                        var3 = var1.bind(var3)();
                                        var4 = arg1;
                                        var1 = undefined;
                                        var1 = var4.bind(var1)();
                                        SaveGenerator(address = 37);
                                    case 35:
                                        return var1;
                                    case 37:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                        if (var4) {
                                            _fun125_ip = 94;
                                            continue _fun125
                                        }
                                    case 43:
                                        var5 = _closure3_slot1;
                                        var4 = var5.log;
                                        var6 = var2.Date;
                                        var2 = var6.now;
                                        var2 = var2.bind(var6)();
                                        var6 = var2 - var3;
                                        var3 = arg0;
                                        var2 = 'ms';
                                        var2 = var6 + var2;
                                        var2 = var4.bind(var5)(var3, var2);
                                        return var1;
                                    case 94:
                                        return var1;
                                    case 97:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var4 = var4.bind(var0)();
                    var2.timeAsync = var4;
                    var3 = function(arg0, arg1) { // Environment: var3
                        _fun127: for (var _fun127_ip = 0;;) switch (_fun127_ip) {
                            case 0:
                                var5 = arg0;
                                var12 = 1;
                                var4 = copyRestArgs(var12);
                                var9 = _closure1_slot5;
                                var7 = _closure3_slot0;
                                var0 = var7.name;
                                var8 = new Array(3);
                                var8[0] = var0;
                                var6 = 'file-only';
                                var8[1] = var6;
                                var8[2] = var5;
                                var3 = 3;
                                var12 = var8;
                                var11 = var4;
                                var10 = var3;
                                var0 = arraySpread(var12, var11, var10);
                                var0 = undefined;
                                var12 = var9;
                                var11 = var8;
                                var10 = undefined;
                                var8 = apply(var12, var11, var10);
                                var7 = var7.nativeLoggerEnabled;
                                if (!var7) {
                                    _fun127_ip = 154;
                                    continue _fun127
                                }
                            case 90:
                                var8 = _closure1_slot6;
                                var7 = null;
                                if (!(var7 != var8)) {
                                    _fun127_ip = 154;
                                    continue _fun127
                                }
                            case 100:
                                var2 = _closure1_slot6;
                                var1 = _closure3_slot0;
                                var7 = var1.name;
                                var1 = new Array(3);
                                var1[0] = var7;
                                var1[1] = var6;
                                var1[2] = var5;
                                var12 = var1;
                                var11 = var4;
                                var10 = var3;
                                var3 = arraySpread(var12, var11, var10);
                                var12 = var2;
                                var11 = var1;
                                var10 = undefined;
                                var1 = apply(var12, var11, var10);
                            case 154:
                                return var0;
                        }
                    };
                    var2.fileOnly = var3;
                    var2.name = var1;
                    var1 = false;
                    var2.nativeLoggerEnabled = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'enableNativeLogger';
        var0.key = var4;
        var1 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0.nativeLoggerEnabled = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/logger/Logger.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function arg0() {
        var0 = arg0;
        _closure1_slot5 = var0;
        var0 = undefined;
        return var0;
    };
    var2.setLogFn = var4;
    var4 = function arg0() {
        var0 = arg0;
        _closure1_slot6 = var0;
        var0 = undefined;
        return var0;
    };
    var2.setNativeLogFn = var4;
    var3 = function arg0, arg1, arg2, arg3() {
        var1 = 3;
        var0 = copyRestArgs(var1);
        var0 = undefined;
        return var0;
    };
    var2.defaultLogFn = var3;
    var2.Logger = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 11, 2]);