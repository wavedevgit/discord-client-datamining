// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var0 = function arg0, arg1() {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.fill;
        var2 = arg0;
        var1 = function(arg0) { // Environment: var1
            var1 = arg0;
            var _closure3_slot0 = var1;
            var0 = function(arg0) { // Environment: var0
                _fun9799: for (var _fun9799_ip = 0;;) switch (_fun9799_ip) {
                    case 0:
                        var0 = arg0;
                        var6 = this;
                        var11 = undefined;
                        var4 = undefined;
                        var3 = arguments.length;
                        var1 = global;
                        var7 = var1.Array;
                        var2 = 1;
                        var5 = var3 > var2;
                        var13 = 0;
                        var1 = 0;
                        if (!var5) {
                            _fun9799_ip = 38;
                            continue _fun9799
                        }
                    case 34:
                        var1 = var3 - var2;
                    case 38:
                        var5 = var7.prototype;
                        var5 = Object.create(var5, {
                            constructor: {
                                value: var7
                            }
                        });
                        var17 = var5;
                        var16 = var1;
                        var1 = new var17[var7](var16, var15);
                        var5 = var1 instanceof Object ? var1 : var5;
                        var7 = var2 < var3;
                        var1 = var2;
                        if (!var7) {
                            _fun9799_ip = 90;
                            continue _fun9799
                        }
                    case 71:
                        var8 = var1 - var2;
                        var7 = arguments[var1];
                        var5[var8] = var7;
                        var1 = var1 + 1;
                        if (var1 < var3) {
                            _fun9799_ip = 71;
                            continue _fun9799
                        }
                    case 90:
                        var1 = var5.length;
                        var1 = var1 - var2;
                        var3 = var5[var1];
                        var2 = 'function';
                        var1 = typeof var3;
                        if (!(var2 === var1)) {
                            _fun9799_ip = 220;
                            continue _fun9799
                        }
                    case 114:
                        var2 = _closure2_slot0;
                        var1 = function arg0, arg1, arg2() {
                            var1 = arg0;
                            var _closure5_slot0 = var1;
                            var1 = arg1;
                            var _closure5_slot1 = var1;
                            var1 = arg2;
                            var _closure5_slot2 = var1;
                            var0 = function() { // Environment: var0
                                _fun9801: for (var _fun9801_ip = 0;;) switch (_fun9801_ip) {
                                    case 0:
                                        var3 = this;
                                        var5 = undefined;
                                        var6 = undefined;
                                        var0 = undefined;
                                        var4 = arguments.length;
                                        var2 = global;
                                        var2 = var2.Array;
                                        var7 = var2.prototype;
                                        var7 = Object.create(var7, {
                                            constructor: {
                                                value: var2
                                            }
                                        });
                                        var15 = var7;
                                        var14 = var4;
                                        var2 = new var15[var2](var14, var13);
                                        var0 = var2 instanceof Object ? var2 : var7;
                                        var2 = 0;
                                        var7 = var2 < var4;
                                        if (!var7) {
                                            _fun9801_ip = 69;
                                            continue _fun9801
                                        }
                                    case 51:
                                        var8 = var0;
                                        var7 = arguments[var2];
                                        var8[var2] = var7;
                                        var2 = var2 + 1;
                                        if (var2 < var4) {
                                            _fun9801_ip = 51;
                                            continue _fun9801
                                        }
                                    case 69: // try_start_0
                                        var9 = _closure1_slot4;
                                        var8 = var9.call;
                                        var13 = _closure5_slot0;
                                        var12 = _closure5_slot1;
                                        var11 = _closure5_slot2;
                                        var10 = var0;
                                        var15 = var9;
                                        var14 = var3;
                                        var2 = var15[var8](var14, var13, var12, var11, var10, var9);
                                    case 109: // try_end0
                                        return var2;
                                    case 111: // catch_target0
                                        CatchBlockStart(arg_register = 1);
                                        var6 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var4 = 2;
                                        var4 = var7[var4];
                                        var4 = var6.bind(var5)(var4);
                                        var4 = var4.DEBUG_BUILD;
                                        if (!var4) {
                                            _fun9801_ip = 191;
                                            continue _fun9801
                                        }
                                    case 145:
                                        var4 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var2 = 3;
                                        var2 = var6[var2];
                                        var2 = var4.bind(var5)(var2);
                                        var5 = var2.debug;
                                        var4 = var5.warn;
                                        var2 = var1;
                                        var1 = 'MCP handler wrapping failed:';
                                        var1 = var4.bind(var5)(var1, var2);
                                    case 191:
                                        var2 = _closure5_slot0;
                                        var1 = var2.apply;
                                        var0 = var1.bind(var2)(var3, var0);
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var10 = var1.bind(var11)(var3, var2, var0);
                        var4 = _closure3_slot0;
                        var3 = var4.call;
                        var2 = var3.apply;
                        var9 = new Array(2);
                        var9[0] = var6;
                        var9[1] = var0;
                        var8 = var9.concat;
                        var7 = _closure1_slot2;
                        var12 = var5.slice;
                        var1 = -1;
                        var1 = var12.bind(var5)(var13, var1);
                        var7 = var7.bind(var11)(var1);
                        var1 = new Array(1);
                        var1[0] = var10;
                        var1 = var8.bind(var9)(var7, var1);
                        var1 = var2.bind(var3)(var4, var1);
                        return var1;
                    case 220:
                        var3 = _closure3_slot0;
                        var2 = var3.call;
                        var1 = var2.apply;
                        var4 = new Array(2);
                        var4[0] = var6;
                        var4[1] = var0;
                        var0 = var4.concat;
                        var0 = var0.bind(var4)(var5);
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                }
            };
            return var0;
        };
        var1 = var3.bind(var4)(var2, var5, var1);
        return var0;
    };
    var _closure1_slot3 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun9802: for (var _fun9802_ip = 0;;) switch (_fun9802_ip) {
            case 0:
                var7 = arg1;
                var4 = arg2;
                var6 = arg0;
                var2 = var7;
                var _closure2_slot0 = var7;
                var1 = var4;
                var _closure2_slot1 = var4;
                var0 = arg3;
                var4 = undefined;
                var5 = undefined;
            case 32: // try_start_0
                var8 = var6;
                var7 = var8.apply;
                var6 = var0;
                var0 = this;
                var0 = var7.bind(var8)(var0, var6);
                var5 = var0;
                if (!var0) {
                    _fun9802_ip = 90;
                    continue _fun9802
                }
            case 57:
                var0 = var5;
                var6 = 'object';
                var0 = typeof var0;
                if (!(var6 === var0)) {
                    _fun9802_ip = 90;
                    continue _fun9802
                }
            case 71:
                var0 = var5;
                var0 = var0.then;
                var6 = 'function';
                var0 = typeof var0;
                if (!(var6 !== var0)) {
                    _fun9802_ip = 95;
                    continue _fun9802
                }
            case 90:
                var0 = var5;
                _fun9802_ip = 130;
                continue _fun9802;
            case 95:
                var6 = global;
                var7 = var6.Promise;
                var6 = var7.resolve;
                var6 = var6.bind(var7)(var5);
                var5 = var6.catch;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var4 = _closure1_slot5;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var0, var3, var2);
                    throw var0;
                };
                var0 = var5.bind(var6)(var3);
            case 130: // try_end0
                return var0;
            case 132: // catch_target0
                CatchBlockStart(arg_register = 0);
                var3 = _closure1_slot5;
                var1 = var3.bind(var4)(var0, var2, var1);
                throw var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun9804: for (var _fun9804_ip = 0;;) switch (_fun9804_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var3 = arg2;
                var0 = undefined;
                var1 = undefined;
            case 13: // try_start_0
                var1 = {};
                var6 = var4;
                var5 = 'tool';
                if (!(var5 !== var6)) {
                    _fun9804_ip = 178;
                    continue _fun9804
                }
            case 29:
                var6 = var4;
                var5 = 'resource';
                if (!(var5 !== var6)) {
                    _fun9804_ip = 116;
                    continue _fun9804
                }
            case 40:
                var5 = var4;
                var4 = 'prompt';
                if (!(var4 === var5)) {
                    _fun9804_ip = 478;
                    continue _fun9804
                }
            case 54:
                var8 = var1;
                var4 = var3;
                var8.prompt_name = var4;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 4;
                var4 = var6[var4];
                var7 = var5.bind(var0)(var4);
                var6 = var7.captureError;
                var5 = var2;
                var4 = 'prompt_execution';
                var4 = var6.bind(var7)(var5, var4, var8);
                _fun9804_ip = 478;
                continue _fun9804;
            case 116:
                var8 = var1;
                var4 = var3;
                var8.resource_uri = var4;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var4 = 4;
                var4 = var6[var4];
                var7 = var5.bind(var0)(var4);
                var6 = var7.captureError;
                var5 = var2;
                var4 = 'resource_execution';
                var4 = var6.bind(var7)(var5, var4, var8);
                _fun9804_ip = 478;
                continue _fun9804;
            case 178:
                var4 = var1;
                var4.tool_name = var3;
                var3 = var2;
                var4 = var3.name;
                var3 = 'ProtocolValidationError';
                if (!(var3 !== var4)) {
                    _fun9804_ip = 432;
                    continue _fun9804
                }
            case 208:
                var3 = var2;
                var5 = var3.message;
                var4 = var5.includes;
                var3 = 'validation';
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun9804_ip = 432;
                    continue _fun9804
                }
            case 236:
                var3 = var2;
                var5 = var3.message;
                var4 = var5.includes;
                var3 = 'protocol';
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun9804_ip = 432;
                    continue _fun9804
                }
            case 264:
                var3 = var2;
                var4 = var3.name;
                var3 = 'ServerTimeoutError';
                if (!(var3 !== var4)) {
                    _fun9804_ip = 384;
                    continue _fun9804
                }
            case 282:
                var3 = var2;
                var5 = var3.message;
                var4 = var5.includes;
                var3 = 'timed out';
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun9804_ip = 384;
                    continue _fun9804
                }
            case 309:
                var3 = var2;
                var5 = var3.message;
                var4 = var5.includes;
                var3 = 'timeout';
                var3 = var4.bind(var5)(var3);
                if (var3) {
                    _fun9804_ip = 384;
                    continue _fun9804
                }
            case 334:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 4;
                var3 = var5[var3];
                var7 = var4.bind(var0)(var3);
                var6 = var7.captureError;
                var5 = var2;
                var4 = var1;
                var3 = 'tool_execution';
                var3 = var6.bind(var7)(var5, var3, var4);
                _fun9804_ip = 478;
                continue _fun9804;
            case 384:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 4;
                var3 = var5[var3];
                var7 = var4.bind(var0)(var3);
                var6 = var7.captureError;
                var5 = var2;
                var4 = var1;
                var3 = 'timeout';
                var3 = var6.bind(var7)(var5, var3, var4);
                _fun9804_ip = 478;
                continue _fun9804;
            case 432:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 4;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.captureError;
                var3 = var2;
                var2 = var1;
                var1 = 'validation';
                var1 = var4.bind(var5)(var3, var1, var2);
            case 478: // try_end0
                _fun9804_ip = 482;
                continue _fun9804;
            case 480: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 482:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var1 = function arg0() {
        var3 = _closure1_slot3;
        var0 = undefined;
        var2 = arg0;
        var1 = 'tool';
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot6 = var1;
    var3 = function arg0() {
        var3 = _closure1_slot3;
        var0 = undefined;
        var2 = arg0;
        var1 = 'resource';
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot7 = var3;
    var4 = function arg0() {
        var3 = _closure1_slot3;
        var0 = undefined;
        var2 = arg0;
        var1 = 'prompt';
        var1 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var _closure1_slot8 = var4;
    var0 = 0;
    var6 = var6[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = global;
    var9 = var6.Object;
    var8 = var9.defineProperty;
    var6 = var6.Symbol;
    var7 = var6.toStringTag;
    var6 = {};
    var10 = 'Module';
    var6.value = var10;
    var6 = var8.bind(var9)(var2, var7, var6);
    var5 = function arg0() {
        var2 = arg0;
        var3 = _closure1_slot6;
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var3 = _closure1_slot7;
        var3 = var3.bind(var0)(var2);
        var1 = _closure1_slot8;
        var1 = var1.bind(var0)(var2);
        return var0;
    };
    var2.wrapAllMCPHandlers = var5;
    var2.wrapPromptHandlers = var4;
    var2.wrapResourceHandlers = var3;
    var2.wrapToolHandlers = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 822, 823, 824, 944]);