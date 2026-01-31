// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var _closure1_slot3 = var7;
    var0 = function arg0, arg1() {
        _fun2838: for (var _fun2838_ip = 0;;) switch (_fun2838_ip) {
            case 0:
                var0 = arg0;
                var1 = typeof var0;
                var0 = 'function';
                if (!(var0 !== var1)) {
                    _fun2838_ip = 22;
                    continue _fun2838
                }
            case 14:
                var0 = 'object';
                if (!(var0 === var1)) {
                    _fun2838_ip = 26;
                    continue _fun2838
                }
            case 22:
                var0 = undefined;
                return var0;
            case 26:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var0.HermesInternal;
                var4 = var0.concat;
                var3 = "Failed to execute '";
                var1 = arg1;
                var0 = "' on 'EventTarget': parameter 2 is not of type 'Object'.";
                var6 = var4.bind(var3)(var1, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1() {
        _fun2839: for (var _fun2839_ip = 0;;) switch (_fun2839_ip) {
            case 0:
                var11 = arg0;
                var10 = arg1;
                var7 = var11;
                var4 = var10;
                var0 = undefined;
                var9 = undefined;
                var2 = _closure1_slot13;
                var1 = true;
                var1 = var2.bind(var0)(var10, var1);
                var6 = new Array(0);
                var2 = 4;
                var8 = null;
                var1 = var11;
                if (!(var8 != var1)) {
                    _fun2839_ip = 92;
                    continue _fun2839
                }
            case 47:
                var5 = var6.push;
                var5 = var5.bind(var6)(var1);
                var12 = _closure1_slot1;
                var5 = _closure1_slot3;
                var5 = var5[var2];
                var5 = var12.bind(var0)(var5);
                var5 = var5.EVENT_TARGET_GET_THE_PARENT_KEY;
                var5 = var1[var5];
                var1 = var5.bind(var1)();
                if (var8 != var1) {
                    _fun2839_ip = 47;
                    continue _fun2839
                }
            case 92:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var5 = 3;
                var12 = var1[var5];
                var13 = var2.bind(var0)(var12);
                var12 = var13.setComposedPath;
                var12 = var12.bind(var13)(var10, var6);
                var1 = var1[var5];
                var2 = var2.bind(var0)(var1);
                var1 = var2.setTarget;
                var1 = var1.bind(var2)(var10, var11);
                var2 = var6.length;
                var1 = 1;
                var11 = var2 - var1;
                var10 = 0;
                if (!(var11 >= var10)) {
                    _fun2839_ip = 378;
                    continue _fun2839
                }
            case 166:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var12 = var2.bind(var0)(var1);
                var2 = var12.getStopPropagationFlag;
                var1 = var4;
                var1 = var2.bind(var12)(var1);
                var2 = 2;
                if (var1) {
                    _fun2839_ip = 378;
                    continue _fun2839
                }
            case 206:
                var14 = var6[var11];
                var12 = _closure1_slot1;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var15 = var12.bind(var0)(var1);
                var13 = var15.setEventPhase;
                var12 = var4;
                var1 = var7;
                if (!(var14 !== var1)) {
                    _fun2839_ip = 268;
                    continue _fun2839
                }
            case 243:
                var16 = _closure1_slot2;
                var1 = _closure1_slot3;
                var1 = var1[var2];
                var1 = var16.bind(var0)(var1);
                var1 = var1.CAPTURING_PHASE;
                _fun2839_ip = 291;
                continue _fun2839;
            case 268:
                var17 = _closure1_slot2;
                var16 = _closure1_slot3;
                var16 = var16[var2];
                var16 = var17.bind(var0)(var16);
                var1 = var16.AT_TARGET;
            case 291:
                var1 = var13.bind(var15)(var12, var1);
                var13 = _closure1_slot11;
                var12 = var4;
                var15 = _closure1_slot2;
                var1 = _closure1_slot3;
                var1 = var1[var2];
                var1 = var15.bind(var0)(var1);
                var1 = var1.CAPTURING_PHASE;
                var1 = var13.bind(var0)(var14, var12, var1);
                var11 = var11 - 1;
                if (!(var11 >= var10)) {
                    _fun2839_ip = 378;
                    continue _fun2839
                }
            case 341:
                var12 = _closure1_slot1;
                var1 = _closure1_slot3;
                var1 = var1[var5];
                var13 = var12.bind(var0)(var1);
                var12 = var13.getStopPropagationFlag;
                var1 = var4;
                var1 = var12.bind(var13)(var1);
                if (!var1) {
                    _fun2839_ip = 206;
                    continue _fun2839
                }
            case 378:
                var1 = var6;
                var2 = var1[Symbol.iterator];
                var1 = var2().next;
                var6 = 2;
            case 387:
                var10 = var1().value;
                var11 = var2;
                if (!(var11 !== var0)) {
                    _fun2839_ip = 618;
                    continue _fun2839
                }
            case 401: // try_start_0
                var9 = var10;
                var11 = _closure1_slot1;
                var10 = _closure1_slot3;
                var10 = var10[var5];
                var12 = var11.bind(var0)(var10);
                var11 = var12.getStopPropagationFlag;
                var10 = var4;
                var10 = var11.bind(var12)(var10);
                if (var10) {
                    _fun2839_ip = 606;
                    continue _fun2839
                }
            case 441:
                var10 = var4;
                var10 = var10.bubbles;
                if (var10) {
                    _fun2839_ip = 471;
                    continue _fun2839
                }
            case 453:
                var11 = var9;
                var10 = var7;
                if (!(var11 !== var10)) {
                    _fun2839_ip = 471;
                    continue _fun2839
                }
            case 463: // try_end0
                var2.return();
                _fun2839_ip = 618;
                continue _fun2839;
            case 471: // try_start_1
                var11 = _closure1_slot1;
                var10 = _closure1_slot3;
                var10 = var10[var5];
                var13 = var11.bind(var0)(var10);
                var12 = var13.setEventPhase;
                var11 = var4;
                var14 = var9;
                var10 = var7;
                if (!(var14 !== var10)) {
                    _fun2839_ip = 532;
                    continue _fun2839
                }
            case 507:
                var14 = _closure1_slot2;
                var10 = _closure1_slot3;
                var10 = var10[var6];
                var10 = var14.bind(var0)(var10);
                var10 = var10.BUBBLING_PHASE;
                _fun2839_ip = 555;
                continue _fun2839;
            case 532:
                var15 = _closure1_slot2;
                var14 = _closure1_slot3;
                var14 = var14[var6];
                var14 = var15.bind(var0)(var14);
                var10 = var14.AT_TARGET;
            case 555:
                var10 = var12.bind(var13)(var11, var10);
                var13 = _closure1_slot11;
                var12 = var9;
                var11 = var4;
                var14 = _closure1_slot2;
                var10 = _closure1_slot3;
                var10 = var10[var6];
                var10 = var14.bind(var0)(var10);
                var10 = var10.BUBBLING_PHASE;
                var10 = var13.bind(var0)(var12, var11, var10);
            case 601: // try_end1
                _fun2839_ip = 387;
                continue _fun2839;
            case 606:
                var2.return();
                _fun2839_ip = 618;
                continue _fun2839;
            case 611: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 618:
                var2 = _closure1_slot1;
                var1 = _closure1_slot3;
                var7 = var1[var5];
                var9 = var2.bind(var0)(var7);
                var7 = var9.setEventPhase;
                var10 = _closure1_slot2;
                var6 = var1[var6];
                var6 = var10.bind(var0)(var6);
                var6 = var6.NONE;
                var6 = var7.bind(var9)(var4, var6);
                var6 = var1[var5];
                var7 = var2.bind(var0)(var6);
                var6 = var7.setCurrentTarget;
                var6 = var6.bind(var7)(var4, var8);
                var6 = var1[var5];
                var8 = var2.bind(var0)(var6);
                var7 = var8.setComposedPath;
                var6 = new Array(0);
                var6 = var7.bind(var8)(var4, var6);
                var6 = _closure1_slot13;
                var3 = false;
                var6 = var6.bind(var0)(var4, var3);
                var6 = var1[var5];
                var7 = var2.bind(var0)(var6);
                var6 = var7.setStopImmediatePropagationFlag;
                var6 = var6.bind(var7)(var4, var3);
                var1 = var1[var5];
                var2 = var2.bind(var0)(var1);
                var1 = var2.setStopPropagationFlag;
                var1 = var1.bind(var2)(var4, var3);
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun2840: for (var _fun2840_ip = 0;;) switch (_fun2840_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var6 = arg2;
                var10 = var4;
                var11 = var3;
                var12 = var6;
                var0 = undefined;
                var13 = undefined;
                var14 = undefined;
                var15 = undefined;
                var5 = _closure1_slot12;
                var7 = _closure1_slot2;
                var1 = _closure1_slot3;
                var8 = 2;
                var2 = var1[var8];
                var2 = var7.bind(var0)(var2);
                var2 = var2.CAPTURING_PHASE;
                var2 = var6 === var2;
                var5 = var5.bind(var0)(var4, var2);
                var2 = _closure1_slot1;
                var7 = 3;
                var1 = var1[var7];
                var2 = var2.bind(var0)(var1);
                var1 = var2.setCurrentTarget;
                var1 = var1.bind(var2)(var3, var4);
                var1 = null;
                var2 = var1 == var5;
                var4 = undefined;
                if (var2) {
                    _fun2840_ip = 126;
                    continue _fun2840
                }
            case 108:
                var3 = var5.get;
                var2 = var11;
                var2 = var2.type;
                var4 = var3.bind(var5)(var2);
            case 126:
                if (!(var1 != var4)) {
                    _fun2840_ip = 578;
                    continue _fun2840
                }
            case 133:
                var6 = global;
                var3 = var6.Array;
                var2 = var3.from;
                var1 = var4.values;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var2 = var2[var7];
                var5 = var3.bind(var0)(var2);
                var4 = var5.setCurrentTarget;
                var3 = var11;
                var2 = var10;
                var2 = var4.bind(var5)(var3, var2);
                var5 = var1;
                var2 = var5[Symbol.iterator];
                var5 = var2().next;
                var4 = false;
                var3 = 'function';
                var1 = true;
            case 209:
                var16 = var5().value;
                var17 = var2;
                if (!(var17 !== var0)) {
                    _fun2840_ip = 578;
                    continue _fun2840
                }
            case 223: // try_start_1
                var13 = var16;
                var16 = var16.removed;
                if (var16) {
                    _fun2840_ip = 566;
                    continue _fun2840
                }
            case 238:
                var16 = var13;
                var16 = var16.once;
                if (!var16) {
                    _fun2840_ip = 313;
                    continue _fun2840
                }
            case 250:
                var20 = var10;
                var19 = var20.removeEventListener;
                var16 = var11;
                var18 = var16.type;
                var16 = var13;
                var17 = var16.callback;
                var21 = var12;
                var22 = _closure1_slot2;
                var16 = _closure1_slot3;
                var16 = var16[var8];
                var16 = var22.bind(var0)(var16);
                var16 = var16.CAPTURING_PHASE;
                var16 = var21 === var16;
                var16 = var19.bind(var20)(var18, var17, var16);
            case 313:
                var16 = var13;
                var16 = var16.passive;
                if (!var16) {
                    _fun2840_ip = 357;
                    continue _fun2840
                }
            case 325:
                var17 = _closure1_slot1;
                var16 = _closure1_slot3;
                var16 = var16[var7];
                var18 = var17.bind(var0)(var16);
                var17 = var18.setInPassiveListenerFlag;
                var16 = var11;
                var16 = var17.bind(var18)(var16, var1);
            case 357:
                var17 = _closure1_slot0;
                var14 = var17.event;
                var16 = var11;
                var17.event = var16;
                var16 = var13;
                var15 = var16.callback;
            case 385: // try_start_0
                var16 = var15;
                var16 = typeof var16;
                if (!(var3 !== var16)) {
                    _fun2840_ip = 430;
                    continue _fun2840
                }
            case 395:
                var16 = var15;
                var16 = var16.handleEvent;
                var16 = typeof var16;
                if (!(var3 === var16)) {
                    _fun2840_ip = 450;
                    continue _fun2840
                }
            case 411:
                var18 = var15;
                var17 = var18.handleEvent;
                var16 = var11;
                var16 = var17.bind(var18)(var16);
                _fun2840_ip = 450;
                continue _fun2840;
            case 430:
                var19 = var15;
                var18 = var19.call;
                var17 = var10;
                var16 = var11;
                var16 = var18.bind(var19)(var17, var16);
            case 450: // try_end0
                _fun2840_ip = 470;
                continue _fun2840;
            case 452: // catch_target0
                CatchBlockStart(arg_register = 18);
                var17 = var6.console;
                var16 = var17.error;
                var16 = var16.bind(var17)(var18);
            case 470:
                var16 = var13;
                var16 = var16.passive;
                if (!var16) {
                    _fun2840_ip = 514;
                    continue _fun2840
                }
            case 482:
                var17 = _closure1_slot1;
                var16 = _closure1_slot3;
                var16 = var16[var7];
                var18 = var17.bind(var0)(var16);
                var17 = var18.setInPassiveListenerFlag;
                var16 = var11;
                var16 = var17.bind(var18)(var16, var4);
            case 514:
                var17 = _closure1_slot0;
                var16 = var14;
                var17.event = var16;
                var17 = _closure1_slot1;
                var16 = _closure1_slot3;
                var16 = var16[var7];
                var18 = var17.bind(var0)(var16);
                var17 = var18.getStopImmediatePropagationFlag;
                var16 = var11;
                var16 = var17.bind(var18)(var16);
                if (!var16) {
                    _fun2840_ip = 566;
                    continue _fun2840
                }
            case 561: // try_end1
                var2.return();
                _fun2840_ip = 578;
                continue _fun2840;
            case 566:
                _fun2840_ip = 209;
                continue _fun2840;
            case 571: // catch_target1
                CatchBlockStart(arg_register = 1);
                var2.return();
                throw var1;
            case 578:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0, arg1() {
        _fun2841: for (var _fun2841_ip = 0;;) switch (_fun2841_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                if (var0) {
                    _fun2841_ip = 22;
                    continue _fun2841
                }
            case 12:
                var0 = _closure1_slot7;
                var0 = var2[var0];
                _fun2841_ip = 30;
                continue _fun2841;
            case 22:
                var1 = _closure1_slot6;
                var0 = var2[var1];
            case 30:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function arg0, arg1() {
        var2 = _closure1_slot8;
        var1 = arg1;
        var0 = arg0;
        var0[var2] = var1;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot13 = var0;
    var3 = global;
    var9 = var3.Object;
    var8 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var7[var1];
    var1 = var5.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = function() { // Environment: var4
        var3 = _closure1_slot5;
        var2 = function() {
            var3 = _closure1_slot4;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var2;
        var4 = {};
        var1 = 'addEventListener';
        var4.key = var1;
        var1 = function arg0, arg1() {
            _fun2845: for (var _fun2845_ip = 0;;) switch (_fun2845_ip) {
                case 0:
                    var8 = arg1;
                    var14 = this;
                    var0 = undefined;
                    var1 = undefined;
                    var _closure3_slot0 = var8;
                    var3 = arguments.length;
                    var4 = 2;
                    if (!(var3 > var4)) {
                        _fun2845_ip = 34;
                        continue _fun2845
                    }
                case 26:
                    var3 = arguments[var4];
                    if (!(var0 === var3)) {
                        _fun2845_ip = 38;
                        continue _fun2845
                    }
                case 34:
                    var10 = {};
                    _fun2845_ip = 42;
                    continue _fun2845;
                case 38:
                    var10 = arguments[var4];
                case 42:
                    var3 = arguments.length;
                    if (!(!(var3 < var4))) {
                        _fun2845_ip = 529;
                        continue _fun2845
                    }
                case 52:
                    var3 = null;
                    if (!(var3 != var8)) {
                        _fun2845_ip = 527;
                        continue _fun2845
                    }
                case 61:
                    var5 = _closure1_slot9;
                    var4 = 'addEventListener';
                    var4 = var5.bind(var0)(var8, var4);
                    var7 = global;
                    var5 = var7.String;
                    var4 = arg0;
                    var12 = var5.bind(var0)(var4);
                    if (!(var3 != var10)) {
                        _fun2845_ip = 268;
                        continue _fun2845
                    }
                case 101:
                    var5 = typeof var10;
                    var4 = 'object';
                    if (!(var4 !== var5)) {
                        _fun2845_ip = 123;
                        continue _fun2845
                    }
                case 112:
                    var4 = 'function';
                    if (!(var4 === var5)) {
                        _fun2845_ip = 268;
                        continue _fun2845
                    }
                case 123:
                    var5 = var7.Boolean;
                    var4 = var10.capture;
                    var18 = var5.bind(var0)(var4);
                    var4 = var10.passive;
                    var17 = var3 != var4;
                    if (!var17) {
                        _fun2845_ip = 170;
                        continue _fun2845
                    }
                case 153:
                    var5 = var7.Boolean;
                    var4 = var10.passive;
                    var17 = var5.bind(var0)(var4);
                case 170:
                    var5 = var7.Boolean;
                    var4 = var10.once;
                    var16 = var5.bind(var0)(var4);
                    var11 = var10.signal;
                    var15 = var18;
                    var9 = var17;
                    var5 = var16;
                    var6 = var11;
                    if (!(var0 !== var6)) {
                        _fun2845_ip = 285;
                        continue _fun2845
                    }
                case 209:
                    var4 = var7.AbortSignal;
                    var4 = var11 instanceof var4;
                    var15 = var18;
                    var9 = var17;
                    var5 = var16;
                    var6 = var11;
                    if (var4) {
                        _fun2845_ip = 285;
                        continue _fun2845
                    }
                case 234:
                    var16 = var7.TypeError;
                    var4 = var16.prototype;
                    var11 = Object.create(var4, {
                        constructor: {
                            value: var16
                        }
                    });
                    var21 = "Failed to execute 'addEventListener' on 'EventTarget': Failed to read the 'signal' property from 'AddEventListenerOptions': Failed to convert value to 'AbortSignal'.";
                    var22 = var11;
                    var4 = new var22[var16](var21, var20);
                    var4 = var4 instanceof Object ? var4 : var11;
                    throw var4;
                case 268:
                    var4 = var7.Boolean;
                    var15 = var4.bind(var0)(var10);
                    var9 = false;
                    var5 = false;
                    var6 = null;
                case 285:
                    if (!(var3 != var6)) {
                        _fun2845_ip = 301;
                        continue _fun2845
                    }
                case 289:
                    var4 = var6.aborted;
                    if (var4) {
                        _fun2845_ip = 527;
                        continue _fun2845
                    }
                case 301:
                    var4 = _closure1_slot12;
                    var10 = var4.bind(var0)(var14, var15);
                    var11 = var3 == var10;
                    var4 = undefined;
                    if (var11) {
                        _fun2845_ip = 330;
                        continue _fun2845
                    }
                case 320:
                    var11 = var10.get;
                    var4 = var11.bind(var10)(var12);
                case 330:
                    if (!(var3 != var4)) {
                        _fun2845_ip = 349;
                        continue _fun2845
                    }
                case 334:
                    var11 = var4.has;
                    var11 = var11.bind(var4)(var8);
                    if (!var11) {
                        _fun2845_ip = 449;
                        continue _fun2845
                    }
                case 347:
                    return var0;
                case 349:
                    var11 = var10;
                    if (!(var3 == var11)) {
                        _fun2845_ip = 409;
                        continue _fun2845
                    }
                case 356:
                    var10 = var7.Map;
                    var16 = var10.prototype;
                    var16 = Object.create(var16, {
                        constructor: {
                            value: var10
                        }
                    });
                    var22 = var16;
                    var10 = new var22[var10](var21);
                    var10 = var10 instanceof Object ? var10 : var16;
                    if (var15) {
                        _fun2845_ip = 398;
                        continue _fun2845
                    }
                case 385:
                    var15 = _closure1_slot7;
                    var14[var15] = var10;
                    var11 = var10;
                    _fun2845_ip = 409;
                    continue _fun2845;
                case 398:
                    var13 = _closure1_slot6;
                    var14[var13] = var10;
                    var11 = var10;
                case 409:
                    var7 = var7.Map;
                    var10 = var7.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var7
                        }
                    });
                    var22 = var10;
                    var7 = new var22[var7](var21);
                    var7 = var7 instanceof Object ? var7 : var10;
                    var10 = var11.set;
                    var10 = var10.bind(var11)(var12, var7);
                    var4 = var7;
                case 449:
                    var7 = {};
                    var7.callback = var8;
                    var7.passive = var9;
                    var7.once = var5;
                    var5 = false;
                    var7.removed = var5;
                    var _closure3_slot1 = var7;
                    var5 = var4.set;
                    var5 = var5.bind(var4)(var8, var7);
                    var _closure3_slot2 = var4;
                    if (!(var3 != var6)) {
                        _fun2845_ip = 527;
                        continue _fun2845
                    }
                case 496:
                    var5 = var6.addEventListener;
                    var4 = {};
                    var3 = true;
                    var4.once = var3;
                    var3 = 'abort';
                    var2 = function() { // Environment: var2
                        _fun2846: for (var _fun2846_ip = 0;;) switch (_fun2846_ip) {
                            case 0:
                                var2 = _closure3_slot1;
                                var1 = true;
                                var2.removed = var1;
                                var3 = _closure3_slot2;
                                var2 = var3.get;
                                var1 = _closure3_slot0;
                                var2 = var2.bind(var3)(var1);
                                var1 = _closure3_slot1;
                                if (!(var2 === var1)) {
                                    _fun2846_ip = 59;
                                    continue _fun2846
                                }
                            case 41:
                                var2 = _closure3_slot2;
                                var1 = var2.delete;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                            case 59:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = var5.bind(var6)(var3, var2, var4);
                case 527:
                    return var0;
                case 529:
                    var0 = global;
                    var2 = var0.TypeError;
                    var4 = arguments.length;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = "Failed to execute 'addEventListener' on 'EventTarget': 2 arguments required, but only ";
                    var0 = ' present.';
                    var21 = var3.bind(var1)(var4, var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var22 = var1;
                    var0 = new var22[var2](var21, var20);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var1;
        var1 = new Array(5);
        var1[0] = var4;
        var4 = {};
        var6 = 'removeEventListener';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun2847: for (var _fun2847_ip = 0;;) switch (_fun2847_ip) {
                case 0:
                    var4 = arg1;
                    var0 = undefined;
                    var1 = undefined;
                    var2 = arguments.length;
                    var5 = 2;
                    if (!(var2 > var5)) {
                        _fun2847_ip = 25;
                        continue _fun2847
                    }
                case 17:
                    var2 = arguments[var5];
                    if (!(var0 === var2)) {
                        _fun2847_ip = 29;
                        continue _fun2847
                    }
                case 25:
                    var3 = {};
                    _fun2847_ip = 33;
                    continue _fun2847;
                case 29:
                    var3 = arguments[var5];
                case 33:
                    var2 = arguments.length;
                    if (!(!(var2 < var5))) {
                        _fun2847_ip = 186;
                        continue _fun2847
                    }
                case 43:
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun2847_ip = 184;
                        continue _fun2847
                    }
                case 52:
                    var7 = _closure1_slot9;
                    var6 = 'removeEventListener';
                    var6 = var7.bind(var0)(var4, var6);
                    var8 = global;
                    var7 = var8.String;
                    var6 = arg0;
                    var7 = var7.bind(var0)(var6);
                    var6 = _closure1_slot12;
                    var10 = 'boolean';
                    var9 = typeof var3;
                    var5 = var3;
                    if (!(var10 !== var9)) {
                        _fun2847_ip = 120;
                        continue _fun2847
                    }
                case 103:
                    var8 = var8.Boolean;
                    var3 = var3.capture;
                    var5 = var8.bind(var0)(var3);
                case 120:
                    var3 = this;
                    var6 = var6.bind(var0)(var3, var5);
                    var5 = var2 == var6;
                    var3 = undefined;
                    if (var5) {
                        _fun2847_ip = 148;
                        continue _fun2847
                    }
                case 138:
                    var5 = var6.get;
                    var3 = var5.bind(var6)(var7);
                case 148:
                    if (!(var2 != var3)) {
                        _fun2847_ip = 184;
                        continue _fun2847
                    }
                case 152:
                    var5 = var3.get;
                    var5 = var5.bind(var3)(var4);
                    if (!(var2 != var5)) {
                        _fun2847_ip = 184;
                        continue _fun2847
                    }
                case 166:
                    var2 = true;
                    var5.removed = var2;
                    var2 = var3.delete;
                    var2 = var2.bind(var3)(var4);
                case 184:
                    return var0;
                case 186:
                    var0 = global;
                    var2 = var0.TypeError;
                    var4 = arguments.length;
                    var0 = var0.HermesInternal;
                    var3 = var0.concat;
                    var1 = "Failed to execute 'removeEventListener' on 'EventTarget': 2 arguments required, but only ";
                    var0 = ' present.';
                    var12 = var3.bind(var1)(var4, var0);
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var1;
                    var0 = new var13[var2](var12, var11);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var1[1] = var4;
        var4 = {};
        var6 = 'dispatchEvent';
        var4.key = var6;
        var6 = function arg0() {
            _fun2848: for (var _fun2848_ip = 0;;) switch (_fun2848_ip) {
                case 0:
                    var0 = arg0;
                    var4 = _closure1_slot2;
                    var3 = _closure1_slot3;
                    var2 = 2;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var2 = var0 instanceof var2;
                    if (var2) {
                        _fun2848_ip = 71;
                        continue _fun2848
                    }
                case 35:
                    var2 = global;
                    var5 = var2.TypeError;
                    var2 = var5.prototype;
                    var4 = Object.create(var2, {
                        constructor: {
                            value: var5
                        }
                    });
                    var7 = "Failed to execute 'dispatchEvent' on 'EventTarget': parameter 1 is not of type 'Event'.";
                    var8 = var4;
                    var2 = new var8[var5](var7, var6);
                    var2 = var2 instanceof Object ? var2 : var4;
                    throw var2;
                case 71:
                    var2 = _closure1_slot8;
                    var2 = var0[var2];
                    if (var2) {
                        _fun2848_ip = 140;
                        continue _fun2848
                    }
                case 82:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var2 = 3;
                    var2 = var5[var2];
                    var5 = var4.bind(var3)(var2);
                    var4 = var5.setIsTrusted;
                    var2 = false;
                    var2 = var4.bind(var5)(var0, var2);
                    var2 = _closure1_slot10;
                    var1 = this;
                    var1 = var2.bind(var3)(var1, var0);
                    var0 = var0.defaultPrevented;
                    var0 = !var0;
                    return var0;
                case 140:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var7 = "Failed to execute 'dispatchEvent' on 'EventTarget': The event is already being dispatched.";
                    var8 = var1;
                    var0 = new var8[var2](var7, var6);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var4.value = var6;
        var1[2] = var4;
        var4 = {};
        var7 = _closure1_slot1;
        var8 = _closure1_slot3;
        var6 = 4;
        var9 = var8[var6];
        var0 = undefined;
        var9 = var7.bind(var0)(var9);
        var9 = var9.EVENT_TARGET_GET_THE_PARENT_KEY;
        var4.key = var9;
        var9 = function() {
            var0 = null;
            return var0;
        };
        var4.value = var9;
        var1[3] = var4;
        var4 = {};
        var6 = var8[var6];
        var6 = var7.bind(var0)(var6);
        var6 = var6.INTERNAL_DISPATCH_METHOD_KEY;
        var4.key = var6;
        var5 = function arg0() {
            var3 = _closure1_slot10;
            var0 = undefined;
            var2 = this;
            var1 = arg0;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.value = var5;
        var1[4] = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var5 = 5;
    var5 = var7[var5];
    var6 = var6.bind(var0)(var5);
    var5 = var6.setPlatformObject;
    var5 = var5.bind(var6)(var1);
    var6 = var3.Symbol;
    var5 = 'capturingListeners';
    var5 = var6.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var6 = var3.Symbol;
    var5 = 'bubblingListeners';
    var5 = var6.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = var3.Symbol;
    var3 = 'Event.dispatch';
    var3 = var5.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 201, 202, 203, 129]);