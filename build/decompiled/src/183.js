// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var0 = require;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var7;
    var0 = function() {
        _fun2619: for (var _fun2619_ip = 0;;) switch (_fun2619_ip) {
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
                _fun2619_ip = 74;
                continue _fun2619;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun2622: for (var _fun2622_ip = 0;;) switch (_fun2622_ip) {
            case 0:
                var2 = arg0;
                var4 = arg1;
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 6;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var5.bind(var0)(var3);
                var6 = var3.default;
                var5 = null;
                var7 = var5 == var2;
                var3 = undefined;
                if (var7) {
                    _fun2622_ip = 53;
                    continue _fun2622
                }
            case 47:
                var3 = var2.stack;
            case 53:
                var9 = var6.bind(var0)(var3);
                var3 = _closure1_slot12;
                var8 = var3 + 1;
                _closure1_slot12 = var8;
                var11 = var2.message;
                if (var11) {
                    _fun2622_ip = 81;
                    continue _fun2622
                }
            case 77:
                var11 = '';
            case 81:
                var3 = var2.componentStack;
                var6 = var11;
                if (!(var5 != var3)) {
                    _fun2622_ip = 128;
                    continue _fun2622
                }
            case 94:
                var10 = var2.componentStack;
                var3 = global;
                var3 = var3.HermesInternal;
                var7 = var3.concat;
                var3 = '\n\nThis error is located at:';
                var3 = var7.bind(var3)(var10);
                var6 = var11 + var3;
            case 128:
                var3 = var2.name;
                var7 = var5 == var3;
                var12 = '';
                var3 = var12;
                if (var7) {
                    _fun2622_ip = 189;
                    continue _fun2622
                }
            case 147:
                var7 = var2.name;
                var3 = var12;
                if (!(var3 !== var7)) {
                    _fun2622_ip = 189;
                    continue _fun2622
                }
            case 159:
                var13 = var2.name;
                var7 = global;
                var7 = var7.HermesInternal;
                var10 = var7.concat;
                var7 = ': ';
                var3 = var10.bind(var12)(var13, var7);
            case 189:
                var7 = var6.startsWith;
                var7 = var7.bind(var6)(var3);
                var13 = var6;
                if (var7) {
                    _fun2622_ip = 210;
                    continue _fun2622
                }
            case 206:
                var13 = var3 + var6;
            case 210:
                var6 = global;
                var15 = var6.Object;
                var14 = var15.assign;
                var3 = _closure1_slot11;
                var10 = var2[var3];
                var7 = {};
                var3 = var2.jsEngine;
                var7.jsEngine = var3;
                var3 = var2.stack;
                var7.rawStack = var3;
                var3 = {};
                var7 = var14.bind(var15)(var3, var10, var7);
                var3 = var2.cause;
                var3 = var5 != var3;
                if (!var3) {
                    _fun2622_ip = 294;
                    continue _fun2622
                }
            case 277:
                var10 = var2.cause;
                var14 = 'object';
                var10 = typeof var10;
                var3 = var14 === var10;
            case 294:
                if (!var3) {
                    _fun2622_ip = 351;
                    continue _fun2622
                }
            case 297:
                var3 = var2.cause;
                var3 = var3.stackSymbols;
                var7.stackSymbols = var3;
                var3 = var2.cause;
                var3 = var3.stackReturnAddresses;
                var7.stackReturnAddresses = var3;
                var3 = var2.cause;
                var3 = var3.stackElements;
                var7.stackElements = var3;
            case 351:
                var3 = {};
                var3.message = var13;
                var10 = null;
                if (!(var13 !== var11)) {
                    _fun2622_ip = 366;
                    continue _fun2622
                }
            case 363:
                var10 = var11;
            case 366:
                var3.originalMessage = var10;
                var10 = var2.name;
                var11 = var5 == var10;
                var10 = null;
                if (var11) {
                    _fun2622_ip = 401;
                    continue _fun2622
                }
            case 385:
                var11 = var2.name;
                var10 = null;
                if (!(var12 !== var11)) {
                    _fun2622_ip = 401;
                    continue _fun2622
                }
            case 396:
                var10 = var2.name;
            case 401:
                var3.name = var10;
                var10 = var2.componentStack;
                var12 = 'string';
                var11 = typeof var10;
                var10 = null;
                if (!(var12 === var11)) {
                    _fun2622_ip = 430;
                    continue _fun2622
                }
            case 424:
                var10 = var2.componentStack;
            case 430:
                var3.componentStack = var10;
                var3.stack = var9;
                var3.id = var8;
                var3.isFatal = var4;
                var3.extraData = var7;
                var7 = var3;
                var3 = _closure1_slot8;
                if (!var3) {
                    _fun2622_ip = 517;
                    continue _fun2622
                }
            case 464:
                var3 = _closure1_slot10;
                if (var3) {
                    _fun2622_ip = 517;
                    continue _fun2622
                }
            case 471:
                var3 = true;
                _closure1_slot10 = var3;
            case 477: // try_start_0 // try_start_1
                var8 = _closure1_slot8;
                var3 = var7;
                var3 = var8.bind(var0)(var3);
            case 489: // try_end0 // try_end1
                var8 = false;
                _closure1_slot10 = var8;
                _fun2622_ip = 520;
                continue _fun2622;
            case 497: // try_start_2 // catch_target0
                CatchBlockStart(arg_register = 8);
            case 499: // try_end2
                var8 = false;
                _closure1_slot10 = var8;
                _fun2622_ip = 517;
                continue _fun2622;
            case 507: // catch_target1 // catch_target2
                CatchBlockStart(arg_register = 8);
                var9 = false;
                _closure1_slot10 = var9;
                throw var8;
            case 517:
                var3 = var7;
            case 520:
                var7 = arg2;
                if (!var7) {
                    _fun2622_ip = 542;
                    continue _fun2622
                }
            case 526:
                var7 = var6.console;
                var6 = var7.error;
                var6 = var6.bind(var7)(var2);
            case 542:
                if (var4) {
                    _fun2622_ip = 558;
                    continue _fun2622
                }
            case 545:
                var6 = var2.type;
                var2 = 'warn';
                if (!(var2 !== var6)) {
                    _fun2622_ip = 659;
                    continue _fun2622
                }
            case 558:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var2 = 7;
                var2 = var7[var2];
                var2 = var6.bind(var0)(var2);
                var2 = var2.default;
                if (!var2) {
                    _fun2622_ip = 659;
                    continue _fun2622
                }
            case 586:
                if (!var4) {
                    _fun2622_ip = 648;
                    continue _fun2622
                }
            case 589:
                var4 = _closure1_slot0;
                var4 = var4.RN$hasHandledFatalException;
                if (!(var5 != var4)) {
                    _fun2622_ip = 620;
                    continue _fun2622
                }
            case 603:
                var6 = _closure1_slot0;
                var4 = var6.RN$hasHandledFatalException;
                var4 = var4.bind(var6)();
                if (var4) {
                    _fun2622_ip = 661;
                    continue _fun2622
                }
            case 620:
                var4 = _closure1_slot0;
                var4 = var4.RN$notifyOfFatalException;
                if (!(var5 != var4)) {
                    _fun2622_ip = 648;
                    continue _fun2622
                }
            case 634:
                var4 = _closure1_slot0;
                var1 = var4.RN$notifyOfFatalException;
                var1 = var1.bind(var4)();
            case 648:
                var1 = var2.reportException;
                var1 = var1.bind(var2)(var3);
            case 659:
                return var0;
            case 661:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function() {
        _fun2623: for (var _fun2623_ip = 0;;) switch (_fun2623_ip) {
            case 0:
                var0 = undefined;
                var7 = undefined;
                var6 = arguments.length;
                var1 = global;
                var3 = var1.Array;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var12 = var4;
                var11 = var6;
                var3 = new var12[var3](var11, var10);
                var5 = var3 instanceof Object ? var3 : var4;
                var3 = 0;
                var8 = var3 < var6;
                var4 = 0;
                if (!var8) {
                    _fun2623_ip = 66;
                    continue _fun2623
                }
            case 51:
                var8 = arguments[var4];
                var5[var4] = var8;
                var4 = var4 + 1;
                if (var4 < var6) {
                    _fun2623_ip = 51;
                    continue _fun2623
                }
            case 66:
                var7 = var1.console;
                var6 = var7._errorOriginal;
                var4 = var6.apply;
                var4 = var4.bind(var6)(var7, var5);
                var1 = var1.console;
                var1 = var1.reportErrorsAsExceptions;
                if (!var1) {
                    _fun2623_ip = 349;
                    continue _fun2623
                }
            case 107:
                var4 = _closure1_slot13;
                if (var4) {
                    _fun2623_ip = 349;
                    continue _fun2623
                }
            case 120:
                var4 = _closure1_slot0;
                var6 = var4.RN$inExceptionHandler;
                var4 = null;
                if (!(var4 != var6)) {
                    _fun2623_ip = 156;
                    continue _fun2623
                }
            case 136:
                var7 = _closure1_slot0;
                var6 = var7.RN$inExceptionHandler;
                var6 = var6.bind(var7)();
                if (var6) {
                    _fun2623_ip = 349;
                    continue _fun2623
                }
            case 156:
                var3 = var5[var3];
                if (!(var4 != var3)) {
                    _fun2623_ip = 173;
                    continue _fun2623
                }
            case 164:
                var4 = var3.stack;
                if (var4) {
                    _fun2623_ip = 272;
                    continue _fun2623
                }
            case 173:
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var4 = 8;
                var4 = var7[var4];
                var4 = var6.bind(var0)(var4);
                var4 = var4.default;
                var _closure2_slot0 = var4;
                var4 = var5.map;
                var2 = function(arg0) { // Environment: var2
                    _fun2624: for (var _fun2624_ip = 0;;) switch (_fun2624_ip) {
                        case 0:
                            var3 = arg0;
                            var2 = 'string';
                            var1 = typeof var3;
                            var0 = var3;
                            if (!(var2 !== var1)) {
                                _fun2624_ip = 31;
                                continue _fun2624
                            }
                        case 17:
                            var2 = _closure2_slot0;
                            var1 = undefined;
                            var0 = var2.bind(var1)(var3);
                        case 31:
                            return var0;
                    }
                };
                var5 = var4.bind(var5)(var2);
                var4 = var5.join;
                var2 = ' ';
                var11 = var4.bind(var5)(var2);
                var2 = _closure1_slot9;
                var4 = var2.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var2
                    }
                });
                var12 = var4;
                var2 = new var12[var2](var11, var10);
                var2 = var2 instanceof Object ? var2 : var4;
                var4 = 'console.error';
                var2.name = var4;
                var3 = var2;
            case 272:
                var2 = _closure1_slot0;
                var2 = var2.RN$handleException;
                if (!var2) {
                    _fun2623_ip = 307;
                    continue _fun2623
                }
            case 285:
                var5 = _closure1_slot0;
                var4 = var5.RN$handleException;
                var2 = false;
                var2 = var4.bind(var5)(var3, var2, var2);
                if (var2) {
                    _fun2623_ip = 349;
                    continue _fun2623
                }
            case 307:
                var5 = var3.message;
                var4 = var5.startsWith;
                var2 = 'Warning: ';
                var2 = var4.bind(var5)(var2);
                if (var2) {
                    _fun2623_ip = 347;
                    continue _fun2623
                }
            case 332:
                var2 = _closure1_slot15;
                var1 = false;
                var1 = var2.bind(var0)(var3, var1, var1);
                _fun2623_ip = 349;
                continue _fun2623;
            case 347:
                return var0;
            case 349:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var1 = global;
    var8 = var1.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var6 = 0;
    var3 = var7[var6];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var7[var3];
    var3 = var5.bind(var0)(var3);
    var1 = var1.Error;
    var3 = var3.bind(var0)(var1);
    var1 = function(arg0) { // Environment: var4
        var2 = function() {
            _fun2626: for (var _fun2626_ip = 0;;) switch (_fun2626_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var8 = undefined;
                    var5 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var1 = var5.bind(var2)(var3, var1);
                    var5 = arguments.length;
                    var6 = global;
                    var1 = var6.Array;
                    var7 = var1.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var1
                        }
                    });
                    var13 = var7;
                    var12 = var5;
                    var1 = new var13[var1](var12, var11);
                    var7 = var1 instanceof Object ? var1 : var7;
                    var1 = 0;
                    var9 = var1 < var5;
                    if (!var9) {
                        _fun2626_ip = 85;
                        continue _fun2626
                    }
                case 70:
                    var9 = arguments[var1];
                    var7[var1] = var9;
                    var1 = var1 + 1;
                    if (var1 < var5) {
                        _fun2626_ip = 70;
                        continue _fun2626
                    }
                case 85:
                    var1 = _closure2_slot0;
                    var5 = new Array(0);
                    var0 = var5.concat;
                    var5 = var0.bind(var5)(var7);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun2626_ip = 140;
                        continue _fun2626
                    }
                case 127:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var3, var5);
                    _fun2626_ip = 179;
                    continue _fun2626;
                case 140:
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    if (var5) {
                        _fun2626_ip = 158;
                        continue _fun2626
                    }
                case 154:
                    var5 = new Array(0);
                case 158:
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var6.bind(var7)(var8, var5, var4);
                case 179:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = '';
                    var0.name = var1;
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
    var1 = var1.bind(var0)(var3);
    var _closure1_slot9 = var1;
    var3 = false;
    var _closure1_slot10 = var3;
    var5 = 'RN$ErrorExtraDataKey';
    var _closure1_slot11 = var5;
    var _closure1_slot12 = var6;
    var _closure1_slot13 = var3;
    var3 = {};
    var3.decoratedExtraDataKey = var5;
    var5 = function arg0, arg1() {
        _fun2627: for (var _fun2627_ip = 0;;) switch (_fun2627_ip) {
            case 0:
                var9 = arg0;
                var2 = arg1;
                var0 = undefined;
                var4 = undefined;
                var5 = true;
                var1 = true;
                var6 = _closure1_slot0;
                var6 = var6.RN$handleException;
                if (!var6) {
                    _fun2627_ip = 56;
                    continue _fun2627
                }
            case 30:
                var10 = _closure1_slot0;
                var8 = var10.RN$handleException;
                var7 = var2;
                var6 = var1;
                var6 = var8.bind(var10)(var9, var7, var6);
                if (var6) {
                    _fun2627_ip = 137;
                    continue _fun2627
                }
            case 56:
                var6 = global;
                var6 = var6.Error;
                var7 = var9 instanceof var6;
                var6 = var9;
                if (var7) {
                    _fun2627_ip = 101;
                    continue _fun2627
                }
            case 74:
                var7 = _closure1_slot9;
                var8 = var7.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var7
                    }
                });
                var14 = var8;
                var13 = var9;
                var7 = new var14[var7](var13, var12);
                var6 = var7 instanceof Object ? var7 : var8;
            case 101:
                var4 = var6;
            case 104: // try_start_0
                _closure1_slot13 = var5;
                var5 = _closure1_slot15;
                var1 = var5.bind(var0)(var4, var2, var1);
            case 119: // try_end0
                var1 = false;
                _closure1_slot13 = var1;
                _fun2627_ip = 137;
                continue _fun2627;
            case 127: // catch_target0
                CatchBlockStart(arg_register = 1);
                var2 = false;
                _closure1_slot13 = var2;
                throw var1;
            case 137:
                return var0;
        }
    };
    var3.handleException = var5;
    var5 = function() {
        _fun2628: for (var _fun2628_ip = 0;;) switch (_fun2628_ip) {
            case 0:
                var0 = global;
                var1 = var0.console;
                var1 = var1._errorOriginal;
                if (var1) {
                    _fun2628_ip = 107;
                    continue _fun2628
                }
            case 17:
                var2 = var0.console;
                var1 = var0.console;
                var4 = var1.error;
                var3 = var4.bind;
                var1 = var0.console;
                var1 = var3.bind(var4)(var1);
                var2._errorOriginal = var1;
                var2 = var0.console;
                var1 = _closure1_slot16;
                var2.error = var1;
                var1 = var0.console;
                var2 = var1.reportErrorsAsExceptions;
                var1 = undefined;
                if (!(var1 === var2)) {
                    _fun2628_ip = 107;
                    continue _fun2628
                }
            case 93:
                var1 = var0.console;
                var0 = true;
                var1.reportErrorsAsExceptions = var0;
            case 107:
                var0 = undefined;
                return var0;
        }
    };
    var3.installConsoleErrorReporter = var5;
    var3.SyntheticError = var1;
    var4 = function arg0() {
        var0 = arg0;
        var _closure1_slot8 = var0;
        var0 = undefined;
        return var0;
    };
    var3.unstable_setExceptionDecorator = var4;
    var2.default = var3;
    var2.SyntheticError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 162, 184, 187, 71]);