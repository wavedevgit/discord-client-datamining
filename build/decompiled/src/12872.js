// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = function() {
        _fun98734: for (var _fun98734_ip = 0;;) switch (_fun98734_ip) {
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
                    _fun98734_ip = 62;
                    continue _fun98734
                }
            case 47:
                var5 = arguments[var1];
                var3[var1] = var5;
                var1 = var1 + 1;
                if (var1 < var2) {
                    _fun98734_ip = 47;
                    continue _fun98734
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
                    _fun98737: for (var _fun98737_ip = 0;;) switch (_fun98737_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = undefined;
                            var3 = undefined;
                            var0 = undefined;
                            var11 = undefined;
                            var12 = undefined;
                            var4 = arguments.length;
                            var1 = 1;
                            var4 = var4 > var1;
                            var10 = 0;
                            if (!var4) {
                                _fun98737_ip = 42;
                                continue _fun98737
                            }
                        case 28:
                            var4 = arguments[var1];
                            var10 = 0;
                            if (!(var2 !== var4)) {
                                _fun98737_ip = 42;
                                continue _fun98737
                            }
                        case 38:
                            var10 = arguments[var1];
                        case 42:
                            var4 = arguments.length;
                            var1 = 2;
                            var6 = var4 > var1;
                            var4 = 0;
                            if (!var6) {
                                _fun98737_ip = 71;
                                continue _fun98737
                            }
                        case 57:
                            var6 = arguments[var1];
                            var4 = 0;
                            if (!(var2 !== var6)) {
                                _fun98737_ip = 71;
                                continue _fun98737
                            }
                        case 67:
                            var4 = arguments[var1];
                        case 71:
                            var0 = new Array(0);
                            var3 = var5.split;
                            var1 = '\n';
                            var9 = var3.bind(var5)(var1);
                            var3 = var9.length;
                            var8 = 50;
                            var6 = '$1';
                            var5 = 1024;
                            if (!(var10 < var3)) {
                                _fun98737_ip = 300;
                                continue _fun98737
                            }
                        case 122:
                            var15 = var9[var10];
                            var3 = var15.length;
                            if (!(!(var3 > var5))) {
                                _fun98737_ip = 285;
                                continue _fun98737
                            }
                        case 138:
                            var13 = _closure1_slot1;
                            var3 = var13.test;
                            var3 = var3.bind(var13)(var15);
                            var14 = var15;
                            if (!var3) {
                                _fun98737_ip = 173;
                                continue _fun98737
                            }
                        case 158:
                            var13 = var15.replace;
                            var3 = _closure1_slot1;
                            var14 = var13.bind(var15)(var3, var6);
                        case 173:
                            var11 = var14;
                            var13 = var14.match;
                            var3 = /\S*Error: /;
                            var3 = var13.bind(var14)(var3);
                            if (var3) {
                                _fun98737_ip = 285;
                                continue _fun98737
                            }
                        case 204:
                            var14 = _closure2_slot0;
                            var3 = var14;
                            var13 = var3[Symbol.iterator];
                            var3 = var13().next;
                        case 214:
                            var15 = var3().value;
                            var14 = var13;
                            if (!(var14 !== var2)) {
                                _fun98737_ip = 269;
                                continue _fun98737
                            }
                        case 225: // try_start_0
                            var14 = var11;
                            var14 = var15.bind(var2)(var14);
                            var12 = var14;
                            if (var14) {
                                _fun98737_ip = 241;
                                continue _fun98737
                            }
                        case 239: // try_end0
                            _fun98737_ip = 214;
                            continue _fun98737;
                        case 241: // try_start_1
                            var15 = var0;
                            var14 = var15.push;
                            var3 = var12;
                            var3 = var14.bind(var15)(var3);
                        case 257: // try_end1
                            var13.return();
                            _fun98737_ip = 269;
                            continue _fun98737;
                        case 262: // catch_target0 // catch_target1
                            CatchBlockStart(arg_register = 3);
                            var13.return();
                            throw var3;
                        case 269:
                            var3 = var0;
                            var13 = var3.length;
                            var3 = var8 + var4;
                            if (!(!(var13 >= var3))) {
                                _fun98737_ip = 300;
                                continue _fun98737
                            }
                        case 285:
                            var10 = var10 + 1;
                            var3 = var9.length;
                            if (var10 < var3) {
                                _fun98737_ip = 122;
                                continue _fun98737
                            }
                        case 300:
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
        _fun98738: for (var _fun98738_ip = 0;;) switch (_fun98738_ip) {
            case 0:
                var3 = arg0;
                var1 = var3.length;
                if (var1) {
                    _fun98738_ip = 19;
                    continue _fun98738
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
                    _fun98738_ip = 87;
                    continue _fun98738
                }
            case 83:
                var2 = '';
            case 87:
                var2 = var3.bind(var6)(var2);
                if (!var2) {
                    _fun98738_ip = 105;
                    continue _fun98738
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
                    _fun98738_ip = 146;
                    continue _fun98738
                }
            case 142:
                var2 = '';
            case 146:
                var2 = var3.bind(var6)(var2);
                if (!var2) {
                    _fun98738_ip = 213;
                    continue _fun98738
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
                    _fun98738_ip = 195;
                    continue _fun98738
                }
            case 191:
                var1 = '';
            case 195:
                var1 = var2.bind(var3)(var1);
                if (!var1) {
                    _fun98738_ip = 213;
                    continue _fun98738
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
                    _fun98739: for (var _fun98739_ip = 0;;) switch (_fun98739_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = global;
                            var3 = var0.Object;
                            var2 = var3.assign;
                            var1 = {};
                            var0 = var4.filename;
                            if (var0) {
                                _fun98739_ip = 54;
                                continue _fun98739
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
                                _fun98739_ip = 72;
                                continue _fun98739
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
        _fun98740: for (var _fun98740_ip = 0;;) switch (_fun98740_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.length;
                var0 = 1;
                var0 = var2 - var0;
                var0 = var1[var0];
                if (var0) {
                    _fun98740_ip = 24;
                    continue _fun98740
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
    var6 = {};
    var5 = true;
    var6.value = var5;
    var5 = '__esModule';
    var5 = var7.bind(var8)(var2, var5, var6);
    var5 = /\(error: (.*)\)/;
    var _closure1_slot1 = var5;
    var5 = /captureMessage|captureException/;
    var _closure1_slot2 = var5;
    var5 = '?';
    var2.UNKNOWN_FUNCTION = var5;
    var2.createStackParser = var4;
    var4 = function arg0() {
        _fun98741: for (var _fun98741_ip = 0;;) switch (_fun98741_ip) {
            case 0:
                var0 = undefined;
                var3 = undefined;
                var1 = undefined;
                var4 = arg0;
                var4 = var4.exception;
                var3 = var4;
                if (var4) {
                    _fun98741_ip = 25;
                    continue _fun98741
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
                    _fun98742: for (var _fun98742_ip = 0;;) switch (_fun98742_ip) {
                        case 0:
                            var0 = arg0;
                            var1 = var0.stacktrace;
                            var1 = var1.frames;
                            if (!var1) {
                                _fun98742_ip = 71;
                                continue _fun98742
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
            case 58: // try_end0
                return var1;
            case 60: // catch_target0
                CatchBlockStart(arg_register = 1);
                return var0;
        }
    };
    var2.getFramesFromEvent = var4;
    var4 = function arg0() {
        _fun98743: for (var _fun98743_ip = 0;;) switch (_fun98743_ip) {
            case 0:
                var2 = arg0;
            case 3: // try_start_0
                var4 = var2;
                var3 = var4;
                if (!var4) {
                    _fun98743_ip = 26;
                    continue _fun98743
                }
            case 12:
                var4 = var2;
                var5 = 'function';
                var4 = typeof var4;
                var3 = var5 === var4;
            case 26:
                var1 = var3;
                if (!var3) {
                    _fun98743_ip = 37;
                    continue _fun98743
                }
            case 32:
                var1 = var2.name;
            case 37:
                var0 = var1;
                if (var1) {
                    _fun98743_ip = 49;
                    continue _fun98743
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
    var3 = function arg0() {
        _fun98744: for (var _fun98744_ip = 0;;) switch (_fun98744_ip) {
            case 0:
                var5 = arg0;
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var1 = var0.bind(var1)(var5);
                var0 = var5;
                if (!var1) {
                    _fun98744_ip = 56;
                    continue _fun98744
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