// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun34909: for (var _fun34909_ip = 0;;) switch (_fun34909_ip) {
        case 0:
            var3 = require;
            var2 = exports;
            var5 = dependencyMap;
            var0 = global;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var3;
            var _closure1_slot2 = var5;
            var6 = global;
            var8 = var6.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var4);
            var0 = 0;
            var7 = var5[var0];
            var4 = metroImportDefault;
            var0 = undefined;
            var4 = var4.bind(var0)(var7);
            var _closure1_slot3 = var4;
            var4 = {};
            var7 = 60;
            var4.fps = var7;
            var _closure1_slot4 = var4;
            var7 = function(arg0) { // Original name: getStylesFromObject, environment: var1
                _fun34910: for (var _fun34910_ip = 0;;) switch (_fun34910_ip) {
                    case 0:
                        var4 = arg0;
                        var0 = undefined;
                        if (!(var0 !== var4)) {
                            _fun34910_ip = 64;
                            continue _fun34910
                        }
                    case 9:
                        var0 = global;
                        var2 = var0.Object;
                        var1 = var2.fromEntries;
                        var3 = var0.Object;
                        var0 = var3.entries;
                        var4 = var0.bind(var3)(var4);
                        var3 = var4.map;
                        var0 = function(arg0) { // Environment: var0
                            _fun34911: for (var _fun34911_ip = 0;;) switch (_fun34911_ip) {
                                case 0:
                                    var3 = _closure1_slot3;
                                    var2 = undefined;
                                    var1 = arg0;
                                    var0 = 2;
                                    var2 = var3.bind(var2)(var1, var0);
                                    var0 = 0;
                                    var1 = var2[var0];
                                    var0 = 1;
                                    var2 = var2[var0];
                                    var0 = new Array(2);
                                    var0[0] = var1;
                                    var3 = var2._isReanimatedSharedValue;
                                    var1 = var2;
                                    if (!var3) {
                                        _fun34911_ip = 59;
                                        continue _fun34911
                                    }
                                case 54:
                                    var1 = var2.value;
                                case 59:
                                    var0[1] = var1;
                                    return var0;
                            }
                        };
                        var0 = var3.bind(var4)(var0);
                        var0 = var1.bind(var2)(var0);
                        _fun34910_ip = 66;
                        continue _fun34910;
                    case 64:
                        var0 = {};
                    case 66:
                        return var0;
                }
            };
            var _closure1_slot5 = var7;
            var7 = function(arg0) { // Original name: getCurrentStyle, environment: var1
                _fun34912: for (var _fun34912_ip = 0;;) switch (_fun34912_ip) {
                    case 0:
                        var3 = arg0;
                        var7 = undefined;
                        var8 = undefined;
                        var0 = var3.props;
                        var5 = var0.style;
                        var0 = {};
                        var _closure2_slot0 = var0;
                        var0 = global;
                        var4 = var0.Array;
                        var2 = var4.isArray;
                        var2 = var2.bind(var4)(var5);
                        if (!var2) {
                            _fun34912_ip = 61;
                            continue _fun34912
                        }
                    case 46:
                        var4 = var5.forEach;
                        var2 = function(arg0) { // Environment: var1
                            var0 = global;
                            var5 = var0.Object;
                            var4 = var5.assign;
                            var3 = _closure2_slot0;
                            var2 = {};
                            var0 = arg0;
                            var0 = var4.bind(var5)(var2, var3, var0);
                            _closure2_slot0 = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var2 = var4.bind(var5)(var2);
                    case 61:
                        var2 = var3.props;
                        var2 = var2.jestInlineStyle;
                        var3 = var3.props;
                        var3 = var3.jestAnimatedStyle;
                        var4 = null;
                        var4 = var4 == var3;
                        var5 = undefined;
                        if (var4) {
                            _fun34912_ip = 99;
                            continue _fun34912
                        }
                    case 94:
                        var5 = var3.value;
                    case 99:
                        var4 = var0.Array;
                        var3 = var4.isArray;
                        var3 = var3.bind(var4)(var2);
                        if (var3) {
                            _fun34912_ip = 199;
                            continue _fun34912
                        }
                    case 118:
                        var3 = _closure1_slot5;
                        var10 = var3.bind(var7)(var2);
                        var3 = !var5;
                        if (var3) {
                            _fun34912_ip = 163;
                            continue _fun34912
                        }
                    case 136:
                        var6 = var0.Object;
                        var4 = var6.keys;
                        var4 = var4.bind(var6)(var5);
                        var6 = var4.length;
                        var4 = 0;
                        var3 = var4 === var6;
                    case 163:
                        var9 = var0.Object;
                        var6 = var9.assign;
                        var4 = {};
                        if (var3) {
                            _fun34912_ip = 187;
                            continue _fun34912
                        }
                    case 179:
                        var3 = var6.bind(var9)(var4, var5);
                        _fun34912_ip = 193;
                        continue _fun34912;
                    case 187:
                        var3 = var6.bind(var9)(var4, var10);
                    case 193:
                        _closure2_slot0 = var3;
                        return var3;
                    case 199:
                        var6 = var2;
                        var3 = var6[Symbol.iterator];
                        var6 = var3().next;
                        var2 = 'jestAnimatedValues';
                    case 212:
                        var9 = var6().value;
                        var10 = var3;
                        if (!(var10 !== var7)) {
                            _fun34912_ip = 282;
                            continue _fun34912
                        }
                    case 223: // try_start_0
                        var8 = var9;
                        var9 = var2 in var9;
                        if (var9) {
                            _fun34912_ip = 273;
                            continue _fun34912
                        }
                    case 233:
                        var10 = _closure1_slot5;
                        var9 = var8;
                        var13 = var10.bind(var7)(var9);
                        var12 = var0.Object;
                        var11 = var12.assign;
                        var10 = _closure2_slot0;
                        var9 = {};
                        var9 = var11.bind(var12)(var9, var10, var13);
                        _closure2_slot0 = var9;
                    case 273: // try_end0
                        _fun34912_ip = 212;
                        continue _fun34912;
                    case 275: // catch_target0
                        CatchBlockStart(arg_register = 2);
                        var3.return();
                        throw var2;
                    case 282:
                        var4 = var0.Object;
                        var3 = var4.assign;
                        var2 = _closure2_slot0;
                        var0 = {};
                        var0 = var3.bind(var4)(var0, var2, var5);
                        _closure2_slot0 = var0;
                        return var0;
                }
            };
            var _closure1_slot6 = var7;
            var7 = function(arg0, arg1) { // Original name: checkEqual, environment: var1
                _fun34914: for (var _fun34914_ip = 0;;) switch (_fun34914_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = arg1;
                        var0 = global;
                        var2 = var0.Array;
                        var1 = var2.isArray;
                        var1 = var1.bind(var2)(var4);
                        if (var1) {
                            _fun34914_ip = 120;
                            continue _fun34914
                        }
                    case 27:
                        var2 = 'object';
                        var1 = typeof var5;
                        if (!(var2 === var1)) {
                            _fun34914_ip = 114;
                            continue _fun34914
                        }
                    case 38:
                        if (!var5) {
                            _fun34914_ip = 114;
                            continue _fun34914
                        }
                    case 41:
                        var1 = typeof var4;
                        if (!(var2 === var1)) {
                            _fun34914_ip = 110;
                            continue _fun34914
                        }
                    case 48:
                        if (!var4) {
                            _fun34914_ip = 110;
                            continue _fun34914
                        }
                    case 51:
                        var9 = var4;
                        var2 = undefined;
                        for (var6 in var9)
                            case 70: {
                                case 82: var1 = var6;
                                var12 = _closure1_slot7;
                                var11 = var5[var1];
                                var1 = var4[var1];
                                var1 = var12.bind(var2)(var11, var1);
                                if (var1) {
                                    _fun34914_ip = 70;
                                    continue _fun34914
                                }
                                case 106: var1 = false;
                                return var1;
                                case 110: var1 = false;
                                return var1;
                                case 114: var1 = var5 === var4;
                                return var1;
                                case 120: var1 = var0.Array;
                                var0 = var1.isArray;
                                var0 = var0.bind(var1)(var5);
                                if (!var0) {
                                    _fun34914_ip = 213;
                                    continue _fun34914
                                }
                                case 139: var1 = var4.length;
                                var0 = var5.length;
                                if (!(var1 === var0)) {
                                    _fun34914_ip = 213;
                                    continue _fun34914
                                }
                                case 153: var0 = var5.length;
                                var3 = 0;
                                var0 = var3 < var0;
                                var1 = undefined;
                                if (!var0) {
                                    _fun34914_ip = 209;
                                    continue _fun34914
                                }
                                case 172: var7 = _closure1_slot7;
                                var6 = var5[var3];
                                var0 = var4[var3];
                                var0 = var7.bind(var1)(var6, var0);
                                if (var0) {
                                    _fun34914_ip = 197;
                                    continue _fun34914
                                }
                                case 193: var0 = false;
                                return var0;
                                case 197: var3 = var3 + 1;
                                var0 = var5.length;
                                if (var3 < var0) {
                                    _fun34914_ip = 172;
                                    continue _fun34914
                                }
                            }
                    case 209:
                        var0 = true;
                        return var0;
                    case 213:
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot7 = var7;
            var7 = function(arg0, arg1) { // Original name: compareAndFormatDifferences, environment: var1
                _fun34915: for (var _fun34915_ip = 0;;) switch (_fun34915_ip) {
                    case 0:
                        var8 = arg0;
                        var6 = arg1;
                        var12 = undefined;
                        var1 = undefined;
                        var3 = arguments.length;
                        var0 = 2;
                        var4 = var3 > var0;
                        if (!var4) {
                            _fun34915_ip = 33;
                            continue _fun34915
                        }
                    case 25:
                        var3 = arguments[var0];
                        var4 = var12 !== var3;
                    case 33:
                        if (!var4) {
                            _fun34915_ip = 40;
                            continue _fun34915
                        }
                    case 36:
                        var4 = arguments[var0];
                    case 40:
                        var0 = new Array(0);
                        var14 = var6;
                        var1 = true;
                        var3 = false;
                        var5 = true;
                        var9 = true;
                        for (var10 in var14)
                            case 66: {
                                var9 = var5;
                                case 78: var18 = var10;
                                var19 = _closure1_slot7;
                                var17 = var8[var18];
                                var16 = var6[var18];
                                var16 = var19.bind(var12)(var17, var16);
                                if (var16) {
                                    _fun34915_ip = 66;
                                    continue _fun34915
                                }
                                case 102: var17 = var0.push;
                                var16 = {};
                                var16.property = var18;
                                var19 = var8[var18];
                                var16.current = var19;
                                var18 = var6[var18];
                                var16.expect = var18;
                                var16 = var17.bind(var0)(var16);
                                var5 = false;
                                _fun34915_ip = 66;
                                continue _fun34915;
                            }
                    case 140:
                        var5 = var9;
                        if (!var4) {
                            _fun34915_ip = 271;
                            continue _fun34915
                        }
                    case 149:
                        var4 = global;
                        var10 = var4.Object;
                        var7 = var10.keys;
                        var7 = var7.bind(var10)(var8);
                        var7 = var7.length;
                        var10 = var4.Object;
                        var4 = var10.keys;
                        var4 = var4.bind(var10)(var6);
                        var4 = var4.length;
                        var5 = var9;
                        if (!(var7 !== var4)) {
                            _fun34915_ip = 271;
                            continue _fun34915
                        }
                    case 200:
                        var10 = var8;
                        var5 = false;
                        for (var4 in var10)
                            case 213: {
                                var5 = false;
                                case 224: var15 = var4;
                                var13 = var6[var15];
                                if (var12 !== var13) {
                                    _fun34915_ip = 213;
                                    continue _fun34915
                                }
                                case 235: var14 = var0.push;
                                var13 = {};
                                var13.property = var15;
                                var16 = var8[var15];
                                var13.current = var16;
                                var15 = var6[var15];
                                var13.expect = var15;
                                var13 = var14.bind(var0)(var13);
                                _fun34915_ip = 213;
                                continue _fun34915;
                            }
                    case 271:
                        var4 = {};
                        var4.isEqual = var5;
                        var4.diffs = var0;
                        var0 = var4.isEqual;
                        var5 = var4.diffs;
                        if (var0) {
                            _fun34915_ip = 393;
                            continue _fun34915
                        }
                    case 298:
                        var0 = global;
                        var7 = var0.JSON;
                        var4 = var7.stringify;
                        var4 = var4.bind(var7)(var8);
                        var _closure2_slot0 = var4;
                        var4 = var0.JSON;
                        var0 = var4.stringify;
                        var0 = var0.bind(var4)(var6);
                        var _closure2_slot1 = var0;
                        var4 = var5.map;
                        var0 = function(arg0) { // Environment: var2
                            var1 = arg0;
                            var6 = var1.property;
                            var0 = global;
                            var4 = var0.JSON;
                            var3 = var4.stringify;
                            var2 = var1.expect;
                            var9 = var3.bind(var4)(var2);
                            var3 = var0.JSON;
                            var2 = var3.stringify;
                            var1 = var1.current;
                            var7 = var2.bind(var3)(var1);
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var12 = "- '";
                            var10 = "' should be ";
                            var8 = ', but is ';
                            var11 = var6;
                            var0 = var12[var3](var11, var10, var9, var8, var7, var6);
                            return var0;
                        };
                        var5 = var4.bind(var5)(var0);
                        var4 = var5.join;
                        var0 = '\n';
                        var0 = var4.bind(var5)(var0);
                        var _closure2_slot2 = var0;
                        var0 = {};
                        var4 = function() { // Original name: message, environment: var2
                            var11 = _closure2_slot1;
                            var9 = _closure2_slot0;
                            var7 = _closure2_slot2;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var3 = var0.concat;
                            var12 = 'Expected: ';
                            var10 = '\nReceived: ';
                            var8 = '\n\nDifferences:\n';
                            var0 = var12[var3](var11, var10, var9, var8, var7, var6);
                            return var0;
                        };
                        var0.message = var4;
                        var0.pass = var3;
                        return var0;
                    case 393:
                        var0 = {};
                        var2 = function() { // Original name: message, environment: var2
                            var0 = 'ok';
                            return var0;
                        };
                        var0.message = var2;
                        var0.pass = var1;
                        return var0;
                }
            };
            var _closure1_slot8 = var7;
            var7 = function(arg0, arg1) { // Original name: compareProps, environment: var1
                _fun34919: for (var _fun34919_ip = 0;;) switch (_fun34919_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.props;
                        var1 = var1.jestAnimatedProps;
                        if (!var1) {
                            _fun34919_ip = 62;
                            continue _fun34919
                        }
                    case 17:
                        var1 = global;
                        var3 = var1.Object;
                        var2 = var3.keys;
                        var1 = var0.props;
                        var1 = var1.jestAnimatedProps;
                        var1 = var1.value;
                        var1 = var2.bind(var3)(var1);
                        var2 = var1.length;
                        var1 = 0;
                        if (!(var1 !== var2)) {
                            _fun34919_ip = 138;
                            continue _fun34919
                        }
                    case 62:
                        var0 = var0.props;
                        var0 = var0.jestAnimatedProps;
                        var1 = null;
                        var1 = var1 == var0;
                        var3 = undefined;
                        var5 = undefined;
                        if (var1) {
                            _fun34919_ip = 91;
                            continue _fun34919
                        }
                    case 86:
                        var5 = var0.value;
                    case 91:
                        var4 = {};
                        if (var5) {
                            _fun34919_ip = 101;
                            continue _fun34919
                        }
                    case 96:
                        var2 = var4;
                        _fun34919_ip = 120;
                        continue _fun34919;
                    case 101:
                        var0 = global;
                        var1 = var0.Object;
                        var0 = var1.assign;
                        var2 = var0.bind(var1)(var4, var5);
                    case 120:
                        var1 = _closure1_slot8;
                        var0 = arg1;
                        var0 = var1.bind(var3)(var2, var0);
                        return var0;
                    case 138:
                        var0 = {};
                        var1 = function() { // Original name: message, environment: var1
                            var0 = "Component doesn't have props.";
                            return var0;
                        };
                        var0.message = var1;
                        var1 = false;
                        var0.pass = var1;
                        return var0;
                }
            };
            var _closure1_slot9 = var7;
            var7 = var6.Math;
            var6 = var7.round;
            var8 = var4.fps;
            var4 = 1000;
            var4 = var4 / var8;
            var4 = var6.bind(var7)(var4);
            var _closure1_slot10 = var4;
            var4 = 1;
            var4 = var5[var4];
            var5 = var3.bind(var0)(var4);
            var4 = var5.isJest;
            var4 = var4.bind(var5)();
            if (var4) {
                _fun34909_ip = 203;
                continue _fun34909
            }
        case 198:
            var3 = function() { // Environment: var1
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = var0.ReanimatedError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = '`setUpTests` is available only in Jest environment.';
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            };
        case 203:
            var _closure1_slot11 = var3;
            var3 = function(arg0) { // Original name: withReanimatedTimer, environment: var1
                var1 = global;
                var3 = var1.console;
                var2 = var3.warn;
                var0 = 'This method is deprecated, you should define your own before and after test hooks to enable jest.useFakeTimers(). Check out the documentation for details on testing';
                var0 = var2.bind(var3)(var0);
                var2 = var1.jest;
                var0 = var2.useFakeTimers;
                var0 = var0.bind(var2)();
                var2 = arg0;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var3 = var1.jest;
                var2 = var3.runOnlyPendingTimers;
                var2 = var2.bind(var3)();
                var2 = var1.jest;
                var1 = var2.useRealTimers;
                var1 = var1.bind(var2)();
                return var0;
            };
            var2.withReanimatedTimer = var3;
            var3 = function() { // Original name: advanceAnimationByTime, environment: var1
                _fun34923: for (var _fun34923_ip = 0;;) switch (_fun34923_ip) {
                    case 0:
                        var0 = undefined;
                        var2 = undefined;
                        var3 = arguments.length;
                        var1 = 0;
                        if (!(var3 > var1)) {
                            _fun34923_ip = 21;
                            continue _fun34923
                        }
                    case 13:
                        var3 = arguments[var1];
                        if (!(var0 === var3)) {
                            _fun34923_ip = 30;
                            continue _fun34923
                        }
                    case 21:
                        var4 = _closure1_slot10;
                        _fun34923_ip = 34;
                        continue _fun34923;
                    case 30:
                        var4 = arguments[var1];
                    case 34:
                        var1 = global;
                        var5 = var1.console;
                        var3 = var5.warn;
                        var2 = 'This method is deprecated, use jest.advanceTimersByTime directly';
                        var2 = var3.bind(var5)(var2);
                        var3 = var1.jest;
                        var2 = var3.advanceTimersByTime;
                        var2 = var2.bind(var3)(var4);
                        var2 = var1.jest;
                        var1 = var2.runOnlyPendingTimers;
                        var1 = var1.bind(var2)();
                        return var0;
                }
            };
            var2.advanceAnimationByTime = var3;
            var3 = function(arg0) { // Original name: advanceAnimationByFrame, environment: var1
                var0 = global;
                var3 = var0.console;
                var2 = var3.warn;
                var1 = 'This method is deprecated, use jest.advanceTimersByTime directly';
                var1 = var2.bind(var3)(var1);
                var3 = var0.jest;
                var2 = var3.advanceTimersByTime;
                var4 = _closure1_slot10;
                var1 = arg0;
                var1 = var1 * var4;
                var1 = var2.bind(var3)(var1);
                var1 = var0.jest;
                var0 = var1.runOnlyPendingTimers;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var2.advanceAnimationByFrame = var3;
            var3 = function() { // Original name: setUpTests, environment: var1
                _fun34925: for (var _fun34925_ip = 0;;) switch (_fun34925_ip) {
                    case 0:
                        var0 = undefined;
                        var2 = undefined;
                        var3 = arguments.length;
                        var1 = 0;
                        if (!(var3 > var1)) {
                            _fun34925_ip = 23;
                            continue _fun34925
                        }
                    case 15:
                        var3 = arguments[var1];
                        if (!(var0 === var3)) {
                            _fun34925_ip = 27;
                            continue _fun34925
                        }
                    case 23:
                        var9 = {};
                        _fun34925_ip = 31;
                        continue _fun34925;
                    case 27:
                        var9 = arguments[var1];
                    case 31:
                        var1 = _closure1_slot0;
                        var3 = var1.expect;
                        if (!(var0 === var3)) {
                            _fun34925_ip = 89;
                            continue _fun34925
                        }
                    case 48:
                        var5 = _closure1_slot11;
                        var1 = 'expect';
                        var1 = var5.bind(var0)(var1);
                        var5 = var0 !== var1;
                        if (!var5) {
                            _fun34925_ip = 78;
                            continue _fun34925
                        }
                    case 68:
                        var6 = var1.extend;
                        var5 = var0 !== var6;
                    case 78:
                        var3 = var1;
                        if (var5) {
                            _fun34925_ip = 89;
                            continue _fun34925
                        }
                    case 84:
                        var3 = var1.default;
                    case 89:
                        var5 = global;
                        var8 = var5.Object;
                        var7 = var8.assign;
                        var6 = _closure1_slot4;
                        var1 = {};
                        var1 = var7.bind(var8)(var1, var6, var9);
                        var6 = var5.Math;
                        var5 = var6.round;
                        var7 = var1.fps;
                        var1 = 1000;
                        var1 = var1 / var7;
                        var1 = var5.bind(var6)(var1);
                        _closure1_slot10 = var1;
                        var2 = var3.extend;
                        var1 = {};
                        var5 = function(arg0, arg1) { // Original name: toHaveAnimatedProps, environment: var4
                            var3 = _closure1_slot9;
                            var2 = undefined;
                            var1 = arg0;
                            var0 = arg1;
                            var0 = var3.bind(var2)(var1, var0);
                            return var0;
                        };
                        var1.toHaveAnimatedProps = var5;
                        var1 = var2.bind(var3)(var1);
                        var2 = var3.extend;
                        var1 = {};
                        var4 = function(arg0, arg1) { // Original name: toHaveAnimatedStyle, environment: var4
                            _fun34927: for (var _fun34927_ip = 0;;) switch (_fun34927_ip) {
                                case 0:
                                    var4 = undefined;
                                    var1 = undefined;
                                    var2 = arguments.length;
                                    var0 = 2;
                                    if (!(var2 > var0)) {
                                        _fun34927_ip = 22;
                                        continue _fun34927
                                    }
                                case 14:
                                    var2 = arguments[var0];
                                    if (!(var4 === var2)) {
                                        _fun34927_ip = 26;
                                        continue _fun34927
                                    }
                                case 22:
                                    var3 = {};
                                    _fun34927_ip = 30;
                                    continue _fun34927;
                                case 26:
                                    var3 = arguments[var0];
                                case 30:
                                    var2 = function(arg0, arg1, arg2) { // Original name: compareStyle, environment: var0
                                        _fun34928: for (var _fun34928_ip = 0;;) switch (_fun34928_ip) {
                                            case 0:
                                                var2 = arg0;
                                                var0 = var2.props;
                                                var0 = var0.style;
                                                if (var0) {
                                                    _fun34928_ip = 38;
                                                    continue _fun34928
                                                }
                                            case 16:
                                                var0 = {};
                                                var1 = function() { // Original name: message, environment: var1
                                                    var0 = "Component doesn't have a style.";
                                                    return var0;
                                                };
                                                var0.message = var1;
                                                var1 = false;
                                                var0.pass = var1;
                                                return var0;
                                            case 38:
                                                var0 = arg2;
                                                var4 = var0.shouldMatchAllProps;
                                                var1 = _closure1_slot6;
                                                var3 = undefined;
                                                var2 = var1.bind(var3)(var2);
                                                var1 = _closure1_slot8;
                                                var0 = arg1;
                                                var0 = var1.bind(var3)(var2, var0, var4);
                                                return var0;
                                        }
                                    };
                                    var1 = arg0;
                                    var0 = arg1;
                                    var0 = var2.bind(var4)(var1, var0, var3);
                                    return var0;
                            }
                        };
                        var1.toHaveAnimatedStyle = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var2.setUpTests = var3;
            var1 = function(arg0) { // Original name: getAnimatedStyle, environment: var1
                var2 = _closure1_slot6;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var2.getAnimatedStyle = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3683, 3691]);