// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = function() {
        _fun8825: for (var _fun8825_ip = 0;;) switch (_fun8825_ip) {
            case 0:
                var4 = undefined;
                var2 = arguments.length;
                var1 = global;
                var1 = var1.Array;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var7 = var3;
                var6 = var2;
                var1 = new var7[var1](var6, var5);
                var3 = var1 instanceof Object ? var1 : var3;
                var1 = 0;
                var5 = var1 < var2;
                if (!var5) {
                    _fun8825_ip = 62;
                    continue _fun8825
                }
            case 47:
                var5 = arguments[var1];
                var3[var1] = var5;
                var1 = var1 + 1;
                if (var1 < var2) {
                    _fun8825_ip = 47;
                    continue _fun8825
                }
            case 62:
                var2 = var3.sort;
                var1 = function(arg0, arg1) { // Environment: var0
                    var0 = arg0;
                    var2 = 0;
                    var1 = var0[var2];
                    var0 = arg1;
                    var0 = var0[var2];
                    var0 = var1 - var0;
                    return var0;
                };
                var3 = var2.bind(var3)(var1);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = 1;
                    var0 = var1[var0];
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                var _closure2_slot0 = var1;
                var0 = function(arg0) { // Environment: var0
                    _fun8828: for (var _fun8828_ip = 0;;) switch (_fun8828_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = undefined;
                            var3 = undefined;
                            var0 = undefined;
                            var12 = undefined;
                            var13 = undefined;
                            var4 = arguments.length;
                            var1 = 1;
                            var4 = var4 > var1;
                            var11 = 0;
                            var10 = 0;
                            if (!var4) {
                                _fun8828_ip = 44;
                                continue _fun8828
                            }
                        case 30:
                            var4 = arguments[var1];
                            var10 = 0;
                            if (!(var2 !== var4)) {
                                _fun8828_ip = 44;
                                continue _fun8828
                            }
                        case 40:
                            var10 = arguments[var1];
                        case 44:
                            var4 = arguments.length;
                            var1 = 2;
                            var6 = var4 > var1;
                            var4 = 0;
                            if (!var6) {
                                _fun8828_ip = 73;
                                continue _fun8828
                            }
                        case 59:
                            var6 = arguments[var1];
                            var4 = 0;
                            if (!(var2 !== var6)) {
                                _fun8828_ip = 73;
                                continue _fun8828
                            }
                        case 69:
                            var4 = arguments[var1];
                        case 73:
                            var0 = new Array(0);
                            var3 = var5.split;
                            var1 = '\n';
                            var9 = var3.bind(var5)(var1);
                            var3 = var9.length;
                            var8 = 50;
                            var6 = '$1';
                            var5 = 1024;
                            if (!(var10 < var3)) {
                                _fun8828_ip = 316;
                                continue _fun8828
                            }
                        case 124:
                            var15 = var9[var10];
                            var3 = var15.length;
                            var14 = var15;
                            if (!(var3 > var5)) {
                                _fun8828_ip = 151;
                                continue _fun8828
                            }
                        case 140:
                            var3 = var15.slice;
                            var14 = var3.bind(var15)(var11, var5);
                        case 151:
                            var15 = _closure1_slot1;
                            var3 = var15.test;
                            var3 = var3.bind(var15)(var14);
                            var16 = var14;
                            var15 = var16;
                            if (!var3) {
                                _fun8828_ip = 189;
                                continue _fun8828
                            }
                        case 174:
                            var14 = var16.replace;
                            var3 = _closure1_slot1;
                            var15 = var14.bind(var16)(var3, var6);
                        case 189:
                            var12 = var15;
                            var14 = var15.match;
                            var3 = /\S*Error: /;
                            var3 = var14.bind(var15)(var3);
                            if (var3) {
                                _fun8828_ip = 301;
                                continue _fun8828
                            }
                        case 220:
                            var15 = _closure2_slot0;
                            var3 = var15;
                            var14 = var3[Symbol.iterator];
                            var3 = var14().next;
                        case 230:
                            var16 = var3().value;
                            var15 = var14;
                            if (!(var15 !== var2)) {
                                _fun8828_ip = 285;
                                continue _fun8828
                            }
                        case 241: // try_start_0
                            var15 = var12;
                            var15 = var16.bind(var2)(var15);
                            var13 = var15;
                            if (var15) {
                                _fun8828_ip = 257;
                                continue _fun8828
                            }
                        case 255: // try_end0
                            _fun8828_ip = 230;
                            continue _fun8828;
                        case 257: // try_start_1
                            var16 = var0;
                            var15 = var16.push;
                            var3 = var13;
                            var3 = var15.bind(var16)(var3);
                        case 273: // try_end1
                            var14.return();
                            _fun8828_ip = 285;
                            continue _fun8828;
                        case 278: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register = 3);
                            var14.return();
                            throw var3;
                        case 285:
                            var3 = var0;
                            var14 = var3.length;
                            var3 = var8 + var4;
                            if (!(!(var14 >= var3))) {
                                _fun8828_ip = 316;
                                continue _fun8828
                            }
                        case 301:
                            var10 = var10 + 1;
                            var3 = var9.length;
                            if (var10 < var3) {
                                _fun8828_ip = 124;
                                continue _fun8828
                            }
                        case 316:
                            var1 = _closure1_slot4;
                            var3 = var0;
                            var0 = var3.slice;
                            var0 = var0.bind(var3)(var4);
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                return var0;
        }
    };
    var _closure1_slot3 = var4;
    var1 = function arg0() {
        _fun8829: for (var _fun8829_ip = 0;;) switch (_fun8829_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.length;
                if (var1) {
                    _fun8829_ip = 19;
                    continue _fun8829
                }
            case 13:
                var1 = new Array(0);
                return var1;
            case 19:
                var1 = global;
                var2 = var1.Array;
                var1 = var2.from;
                var4 = var1.bind(var2)(var3);
                var _closure2_slot0 = var4;
                var6 = /sentryWrapped/;
                var3 = var6.test;
                var2 = _closure1_slot5;
                var5 = undefined;
                var2 = var2.bind(var5)(var4);
                var2 = var2.function;
                if (var2) {
                    _fun8829_ip = 87;
                    continue _fun8829
                }
            case 83:
                var2 = '';
            case 87:
                var2 = var3.bind(var6)(var2);
                if (!var2) {
                    _fun8829_ip = 105;
                    continue _fun8829
                }
            case 95:
                var2 = var4.pop;
                var2 = var2.bind(var4)();
            case 105:
                var2 = var4.reverse;
                var2 = var2.bind(var4)();
                var6 = _closure1_slot2;
                var3 = var6.test;
                var2 = _closure1_slot5;
                var2 = var2.bind(var5)(var4);
                var2 = var2.function;
                if (var2) {
                    _fun8829_ip = 146;
                    continue _fun8829
                }
            case 142:
                var2 = '';
            case 146:
                var2 = var3.bind(var6)(var2);
                if (!var2) {
                    _fun8829_ip = 213;
                    continue _fun8829
                }
            case 154:
                var2 = var4.pop;
                var2 = var2.bind(var4)();
                var3 = _closure1_slot2;
                var2 = var3.test;
                var1 = _closure1_slot5;
                var1 = var1.bind(var5)(var4);
                var1 = var1.function;
                if (var1) {
                    _fun8829_ip = 195;
                    continue _fun8829
                }
            case 191:
                var1 = '';
            case 195:
                var1 = var2.bind(var3)(var1);
                if (!var1) {
                    _fun8829_ip = 213;
                    continue _fun8829
                }
            case 203:
                var1 = var4.pop;
                var1 = var1.bind(var4)();
            case 213:
                var3 = var4.slice;
                var2 = 0;
                var1 = 50;
                var2 = var3.bind(var4)(var2, var1);
                var1 = var2.map;
                var0 = function(arg0) { // Environment: var0
                    _fun8830: for (var _fun8830_ip = 0;;) switch (_fun8830_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = global;
                            var3 = var0.Object;
                            var2 = var3.assign;
                            var1 = {};
                            var0 = var4.filename;
                            if (var0) {
                                _fun8830_ip = 54;
                                continue _fun8830
                            }
                        case 27:
                            var7 = _closure1_slot5;
                            var6 = _closure2_slot0;
                            var5 = undefined;
                            var5 = var7.bind(var5)(var6);
                            var0 = var5.filename;
                        case 54:
                            var1.filename = var0;
                            var0 = var4.function;
                            if (var0) {
                                _fun8830_ip = 72;
                                continue _fun8830
                            }
                        case 68:
                            var0 = '?';
                        case 72:
                            var1.function = var0;
                            var0 = {};
                            var0 = var2.bind(var3)(var0, var4, var1);
                            return var0;
                    }
                };
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = function arg0() {
        _fun8831: for (var _fun8831_ip = 0;;) switch (_fun8831_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.length;
                var0 = 1;
                var0 = var2 - var0;
                var0 = var1[var0];
                if (var0) {
                    _fun8831_ip = 24;
                    continue _fun8831
                }
            case 22:
                var0 = {};
            case 24:
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var5 = arg6;
    var0 = 0;
    var6 = var5[var0];
    var5 = arg1;
    var0 = undefined;
    var5 = var5.bind(var0)(var6);
    var _closure1_slot0 = var5;
    var5 = global;
    var8 = var5.Object;
    var7 = var8.defineProperty;
    var5 = var5.Symbol;
    var6 = var5.toStringTag;
    var5 = {};
    var9 = 'Module';
    var5.value = var9;
    var5 = var7.bind(var8)(var2, var6, var5);
    var5 = /\(error: (.*)\)/;
    var _closure1_slot1 = var5;
    var5 = /captureMessage|captureException/;
    var _closure1_slot2 = var5;
    var5 = '?';
    var2.UNKNOWN_FUNCTION = var5;
    var2.createStackParser = var4;
    var4 = function arg0() {
        _fun8832: for (var _fun8832_ip = 0;;) switch (_fun8832_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var1 = undefined;
                var4 = arg0;
                var4 = var4.exception;
                var3 = var4;
                if (var4) {
                    _fun8832_ip = 25;
                    continue _fun8832
                }
            case 23:
                return var0;
            case 25:
                var4 = new Array(0);
                var1 = var4;
                var _closure2_slot0 = var4;
            case 36: // try_start_0
                var4 = var3.values;
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var2
                    _fun8833: for (var _fun8833_ip = 0;;) switch (_fun8833_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.stacktrace;
                            var1 = var1.frames;
                            if (!var1) {
                                _fun8833_ip = 71;
                                continue _fun8833
                            }
                        case 18:
                            var2 = _closure2_slot0;
                            var3 = var2.push;
                            var2 = var3.apply;
                            var1 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var0 = var0.stacktrace;
                            var4 = var0.frames;
                            var0 = undefined;
                            var0 = var5.bind(var0)(var4);
                            var0 = var2.bind(var3)(var1, var0);
                        case 71:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
            case 56: // try_end0
                return var1;
            case 58: // catch_target0
                CatchBlockStart(arg_register = 1);
                return var0;
        }
    };
    var2.getFramesFromEvent = var4;
    var4 = function arg0() {
        _fun8834: for (var _fun8834_ip = 0;;) switch (_fun8834_ip) {
            case 0:
                var2 = arg0;
            case 3: // try_start_0
                var4 = var2;
                var3 = var4;
                if (!var4) {
                    _fun8834_ip = 26;
                    continue _fun8834
                }
            case 12:
                var4 = var2;
                var5 = 'function';
                var4 = typeof var4;
                var3 = var5 === var4;
            case 26:
                var1 = var3;
                if (!var3) {
                    _fun8834_ip = 37;
                    continue _fun8834
                }
            case 32:
                var1 = var2.name;
            case 37:
                var0 = var1;
                if (var1) {
                    _fun8834_ip = 49;
                    continue _fun8834
                }
            case 43:
                var0 = '<anonymous>';
            case 49: // try_end0
                return var0;
            case 51: // catch_target0
                CatchBlockStart(arg_register = 0);
                var0 = '<anonymous>';
                return var0;
        }
    };
    var2.getFunctionName = var4;
    var4 = function arg0() {
        _fun8835: for (var _fun8835_ip = 0;;) switch (_fun8835_ip) {
            case 0:
                var1 = arg0;
                var0 = '__v_isVNode';
                var3 = var0 in var1;
                var2 = '[VueViewModel]';
                var0 = var2;
                if (!var3) {
                    _fun8835_ip = 41;
                    continue _fun8835
                }
            case 23:
                var1 = var1.__v_isVNode;
                var0 = var2;
                if (!var1) {
                    _fun8835_ip = 41;
                    continue _fun8835
                }
            case 35:
                var0 = '[VueVNode]';
            case 41:
                return var0;
        }
    };
    var2.getVueInternalName = var4;
    var3 = function arg0() {
        _fun8836: for (var _fun8836_ip = 0;;) switch (_fun8836_ip) {
            case 0:
                var5 = arg0;
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var1 = var0.bind(var1)(var5);
                var0 = var5;
                if (!var1) {
                    _fun8836_ip = 56;
                    continue _fun8836
                }
            case 27:
                var4 = _closure1_slot3;
                var3 = var4.apply;
                var1 = _closure1_slot0;
                var2 = undefined;
                var1 = var1.bind(var2)(var5);
                var0 = var3.bind(var4)(var2, var1);
            case 56:
                return var0;
        }
    };
    var2.stackParserFromStackParserOptions = var3;
    var2.stripSentryFramesAndReverse = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65]);