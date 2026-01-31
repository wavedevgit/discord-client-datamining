// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun2576: for (var _fun2576_ip = 0;;) switch (_fun2576_ip) {
        case 0:
            var4 = global;
            var7 = require;
            var9 = metroImportDefault;
            var2 = exports;
            var8 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var7;
            var _closure1_slot2 = var9;
            var _closure1_slot3 = var8;
            var0 = function arg0, arg1() {
                _fun2577: for (var _fun2577_ip = 0;;) switch (_fun2577_ip) {
                    case 0:
                        var0 = _closure1_slot12;
                        var0 = parseFloat(var0);
                        var2 = var0 + 1;
                        _closure1_slot12 = var2;
                        var3 = _closure1_slot8;
                        var2 = var3.pop;
                        var3 = var2.bind(var3)();
                        var2 = undefined;
                        if (!(var2 === var3)) {
                            _fun2577_ip = 46;
                            continue _fun2577
                        }
                    case 37:
                        var2 = _closure1_slot7;
                        var3 = var2.length;
                    case 46:
                        var2 = _closure1_slot7;
                        var2[var3] = var0;
                        var4 = _closure1_slot5;
                        var2 = arg0;
                        var4[var3] = var2;
                        var2 = _closure1_slot6;
                        var1 = arg1;
                        var2[var3] = var1;
                        return var0;
                }
            };
            var _closure1_slot16 = var0;
            var0 = function arg0, arg1, arg2() {
                _fun2578: for (var _fun2578_ip = 0;;) switch (_fun2578_ip) {
                    case 0:
                        var10 = arg0;
                        var0 = arg1;
                        var _closure2_slot0 = var0;
                        var5 = arg2;
                        var0 = undefined;
                        var3 = undefined;
                        var2 = undefined;
                        var4 = _closure1_slot12;
                        if (!(var10 > var4)) {
                            _fun2578_ip = 57;
                            continue _fun2578
                        }
                    case 32:
                        var4 = global;
                        var8 = var4.console;
                        var7 = var8.warn;
                        var4 = 'Tried to call timer with ID %s but no such timer exists.';
                        var4 = var7.bind(var8)(var4, var10);
                    case 57:
                        var7 = _closure1_slot7;
                        var4 = var7.indexOf;
                        var8 = var4.bind(var7)(var10);
                        var4 = -1;
                        if (!(var4 !== var8)) {
                            _fun2578_ip = 340;
                            continue _fun2578
                        }
                    case 85:
                        var4 = _closure1_slot6;
                        var3 = var4[var8];
                        var4 = _closure1_slot5;
                        var4 = var4[var8];
                        var2 = var4;
                        if (!var4) {
                            _fun2578_ip = 113;
                            continue _fun2578
                        }
                    case 107:
                        var4 = var3;
                        if (var4) {
                            _fun2578_ip = 146;
                            continue _fun2578
                        }
                    case 113:
                        var4 = global;
                        var9 = var4.console;
                        var7 = var9.error;
                        var4 = 'No callback found for timerID ';
                        var4 = var4 + var10;
                        var4 = var7.bind(var9)(var4);
                        _fun2578_ip = 340;
                        continue _fun2578;
                    case 146:
                        var4 = var3;
                        var7 = 'setInterval';
                        if (!(var7 !== var4)) {
                            _fun2578_ip = 166;
                            continue _fun2578
                        }
                    case 157:
                        var4 = _closure1_slot19;
                        var4 = var4.bind(var0)(var8);
                    case 166: // try_start_0
                        var8 = var3;
                        var4 = 'setTimeout';
                        if (!(var4 !== var8)) {
                            _fun2578_ip = 318;
                            continue _fun2578
                        }
                    case 180:
                        var4 = var3;
                        if (!(var7 !== var4)) {
                            _fun2578_ip = 318;
                            continue _fun2578
                        }
                    case 190:
                        var7 = var3;
                        var4 = 'queueReactNativeMicrotask';
                        if (!(var4 !== var7)) {
                            _fun2578_ip = 318;
                            continue _fun2578
                        }
                    case 201:
                        var7 = var3;
                        var4 = 'requestAnimationFrame';
                        if (!(var4 !== var7)) {
                            _fun2578_ip = 289;
                            continue _fun2578
                        }
                    case 212:
                        var7 = var3;
                        var4 = 'requestIdleCallback';
                        if (!(var4 !== var7)) {
                            _fun2578_ip = 256;
                            continue _fun2578
                        }
                    case 223:
                        var4 = global;
                        var7 = var4.console;
                        var4 = var7.error;
                        var8 = var3;
                        var3 = 'Tried to call a callback with invalid type: ';
                        var3 = var3 + var8;
                        var3 = var4.bind(var7)(var3);
                        _fun2578_ip = 322;
                        continue _fun2578;
                    case 256:
                        var4 = var2;
                        var3 = {};
                        var6 = function() {
                            var0 = global;
                            var3 = var0.Math;
                            var2 = var3.max;
                            var1 = _closure1_slot4;
                            var0 = _closure1_slot0;
                            var4 = var0.performance;
                            var0 = var4.now;
                            var4 = var0.bind(var4)();
                            var0 = _closure2_slot0;
                            var0 = var4 - var0;
                            var1 = var1 - var0;
                            var0 = 0;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var3.timeRemaining = var6;
                        var5 = !var5;
                        var5 = !var5;
                        var3.didTimeout = var5;
                        var3 = var4.bind(var0)(var3);
                        _fun2578_ip = 322;
                        continue _fun2578;
                    case 289:
                        var4 = var2;
                        var3 = _closure1_slot0;
                        var5 = var3.performance;
                        var3 = var5.now;
                        var3 = var3.bind(var5)();
                        var3 = var4.bind(var0)(var3);
                        _fun2578_ip = 322;
                        continue _fun2578;
                    case 318:
                        var2 = var2.bind(var0)();
                    case 322: // try_end0
                        _fun2578_ip = 340;
                        continue _fun2578;
                    case 324: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var2 = _closure1_slot13;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var3);
                    case 340:
                        return var0;
                }
            };
            var _closure1_slot17 = var0;
            var0 = function() {
                _fun2580: for (var _fun2580_ip = 0;;) switch (_fun2580_ip) {
                    case 0:
                        var1 = _closure1_slot9;
                        var2 = var1.length;
                        var1 = 0;
                        if (!(var1 !== var2)) {
                            _fun2580_ip = 87;
                            continue _fun2580
                        }
                    case 18:
                        var5 = _closure1_slot9;
                        var2 = new Array(0);
                        _closure1_slot9 = var2;
                        var2 = var5.length;
                        var2 = var1 < var2;
                        var4 = undefined;
                        var3 = 0;
                        if (!var2) {
                            _fun2580_ip = 72;
                            continue _fun2580
                        }
                    case 46:
                        var6 = _closure1_slot17;
                        var2 = var5[var3];
                        var2 = var6.bind(var4)(var2, var1);
                        var3 = var3 + 1;
                        var2 = var5.length;
                        if (var3 < var2) {
                            _fun2580_ip = 46;
                            continue _fun2580
                        }
                    case 72:
                        var0 = _closure1_slot9;
                        var0 = var0.length;
                        var0 = var0 > var1;
                        return var0;
                    case 87:
                        var0 = false;
                        return var0;
                }
            };
            var _closure1_slot18 = var0;
            var0 = function arg0() {
                var2 = arg0;
                var1 = _closure1_slot7;
                var3 = null;
                var1[var2] = var3;
                var1 = _closure1_slot5;
                var1[var2] = var3;
                var1 = _closure1_slot6;
                var1[var2] = var3;
                var1 = _closure1_slot8;
                var0 = var1.push;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
            };
            var _closure1_slot19 = var0;
            var0 = function arg0() {
                _fun2582: for (var _fun2582_ip = 0;;) switch (_fun2582_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = null;
                        if (!(var0 != var2)) {
                            _fun2582_ip = 148;
                            continue _fun2582
                        }
                    case 12:
                        var3 = _closure1_slot7;
                        var1 = var3.indexOf;
                        var4 = var1.bind(var3)(var2);
                        var1 = -1;
                        if (!(var1 !== var4)) {
                            _fun2582_ip = 148;
                            continue _fun2582
                        }
                    case 40:
                        var1 = _closure1_slot6;
                        var5 = var1[var4];
                        var1 = _closure1_slot19;
                        var3 = undefined;
                        var1 = var1.bind(var3)(var4);
                        var1 = 'queueReactNativeMicrotask';
                        var1 = var1 !== var5;
                        if (!var1) {
                            _fun2582_ip = 78;
                            continue _fun2582
                        }
                    case 70:
                        var4 = 'requestIdleCallback';
                        var1 = var4 !== var5;
                    case 78:
                        if (!var1) {
                            _fun2582_ip = 148;
                            continue _fun2582
                        }
                    case 81:
                        var5 = _closure1_slot1;
                        var4 = _closure1_slot3;
                        var1 = 0;
                        var1 = var4[var1];
                        var7 = var5.bind(var3)(var1);
                        var1 = _closure1_slot2;
                        var0 = 1;
                        var5 = var4[var0];
                        var6 = var1.bind(var3)(var5);
                        var5 = 'NativeTiming is available';
                        var5 = var7.bind(var3)(var6, var5);
                        var0 = var4[var0];
                        var1 = var1.bind(var3)(var0);
                        var0 = var1.deleteTimer;
                        var0 = var0.bind(var1)(var2);
                    case 148:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot20 = var0;
            var0 = function arg0, arg1, arg2, arg3() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var0 = 0;
                var2 = var3[var0];
                var0 = undefined;
                var6 = var4.bind(var0)(var2);
                var2 = _closure1_slot2;
                var1 = 1;
                var4 = var3[var1];
                var5 = var2.bind(var0)(var4);
                var4 = 'NativeTiming is available';
                var4 = var6.bind(var0)(var5, var4);
                var1 = var3[var1];
                var6 = var2.bind(var0)(var1);
                var5 = var6.createTimer;
                var10 = arg0;
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var11 = var6;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var0;
            };
            var _closure1_slot21 = var0;
            var0 = function arg0() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot3;
                var0 = 0;
                var2 = var3[var0];
                var0 = undefined;
                var6 = var4.bind(var0)(var2);
                var2 = _closure1_slot2;
                var1 = 1;
                var4 = var3[var1];
                var5 = var2.bind(var0)(var4);
                var4 = 'NativeTiming is available';
                var4 = var6.bind(var0)(var5, var4);
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.setSendIdleEvents;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var _closure1_slot22 = var0;
            var6 = global;
            var10 = var6.Object;
            var5 = var10.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var10)(var2, var0, var1);
            var0 = 16.666666666666668;
            var _closure1_slot4 = var0;
            var0 = new Array(0);
            var _closure1_slot5 = var0;
            var0 = new Array(0);
            var _closure1_slot6 = var0;
            var0 = new Array(0);
            var _closure1_slot7 = var0;
            var0 = new Array(0);
            var _closure1_slot8 = var0;
            var0 = new Array(0);
            var _closure1_slot9 = var0;
            var0 = new Array(0);
            var _closure1_slot10 = var0;
            var0 = {};
            var _closure1_slot11 = var0;
            var0 = 1;
            var _closure1_slot12 = var0;
            var1 = new Array(0);
            var _closure1_slot13 = var1;
            var1 = false;
            var _closure1_slot14 = var1;
            var5 = {};
            var1 = function arg0, arg1() {
                _fun2585: for (var _fun2585_ip = 0;;) switch (_fun2585_ip) {
                    case 0:
                        var5 = arg1;
                        var4 = undefined;
                        var9 = undefined;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var8 = arguments.length;
                        var1 = global;
                        var10 = var1.Array;
                        var7 = 2;
                        var6 = var8 > var7;
                        var3 = 0;
                        if (!var6) {
                            _fun2585_ip = 43;
                            continue _fun2585
                        }
                    case 39:
                        var3 = var8 - var7;
                    case 43:
                        var6 = var10.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var10
                            }
                        });
                        var16 = var6;
                        var15 = var3;
                        var3 = new var16[var10](var15, var14);
                        var6 = var3 instanceof Object ? var3 : var6;
                        var _closure2_slot1 = var6;
                        var10 = var7 < var8;
                        var3 = var7;
                        if (!var10) {
                            _fun2585_ip = 99;
                            continue _fun2585
                        }
                    case 80:
                        var11 = var3 - var7;
                        var10 = arguments[var3];
                        var6[var11] = var10;
                        var3 = var3 + 1;
                        if (var3 < var8) {
                            _fun2585_ip = 80;
                            continue _fun2585
                        }
                    case 99:
                        var7 = _closure1_slot16;
                        var6 = function() { // Environment: var0
                            var3 = _closure2_slot0;
                            var2 = var3.apply;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var0 = 'setTimeout';
                        var0 = var7.bind(var4)(var6, var0);
                        var3 = _closure1_slot21;
                        if (var5) {
                            _fun2585_ip = 130;
                            continue _fun2585
                        }
                    case 128:
                        var5 = 0;
                    case 130:
                        var2 = var1.Date;
                        var1 = var2.now;
                        var13 = var1.bind(var2)();
                        var12 = false;
                        var16 = undefined;
                        var15 = var0;
                        var14 = var5;
                        var1 = var16[var3](var15, var14, var13, var12, var11);
                        return var0;
                }
            };
            var5.setTimeout = var1;
            var1 = function arg0, arg1() {
                _fun2587: for (var _fun2587_ip = 0;;) switch (_fun2587_ip) {
                    case 0:
                        var5 = arg1;
                        var4 = undefined;
                        var9 = undefined;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var8 = arguments.length;
                        var1 = global;
                        var10 = var1.Array;
                        var7 = 2;
                        var6 = var8 > var7;
                        var3 = 0;
                        if (!var6) {
                            _fun2587_ip = 43;
                            continue _fun2587
                        }
                    case 39:
                        var3 = var8 - var7;
                    case 43:
                        var6 = var10.prototype;
                        var6 = Object.create(var6, {
                            constructor: {
                                value: var10
                            }
                        });
                        var16 = var6;
                        var15 = var3;
                        var3 = new var16[var10](var15, var14);
                        var6 = var3 instanceof Object ? var3 : var6;
                        var _closure2_slot1 = var6;
                        var10 = var7 < var8;
                        var3 = var7;
                        if (!var10) {
                            _fun2587_ip = 99;
                            continue _fun2587
                        }
                    case 80:
                        var11 = var3 - var7;
                        var10 = arguments[var3];
                        var6[var11] = var10;
                        var3 = var3 + 1;
                        if (var3 < var8) {
                            _fun2587_ip = 80;
                            continue _fun2587
                        }
                    case 99:
                        var7 = _closure1_slot16;
                        var6 = function() { // Environment: var0
                            var3 = _closure2_slot0;
                            var2 = var3.apply;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var0 = 'setInterval';
                        var0 = var7.bind(var4)(var6, var0);
                        var3 = _closure1_slot21;
                        if (var5) {
                            _fun2587_ip = 130;
                            continue _fun2587
                        }
                    case 128:
                        var5 = 0;
                    case 130:
                        var2 = var1.Date;
                        var1 = var2.now;
                        var13 = var1.bind(var2)();
                        var12 = true;
                        var16 = undefined;
                        var15 = var0;
                        var14 = var5;
                        var1 = var16[var3](var15, var14, var13, var12, var11);
                        return var0;
                }
            };
            var5.setInterval = var1;
            var1 = function arg0() {
                _fun2589: for (var _fun2589_ip = 0;;) switch (_fun2589_ip) {
                    case 0:
                        var4 = undefined;
                        var6 = undefined;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var5 = arguments.length;
                        var1 = global;
                        var7 = var1.Array;
                        var3 = 1;
                        var2 = var5 > var3;
                        var1 = 0;
                        if (!var2) {
                            _fun2589_ip = 40;
                            continue _fun2589
                        }
                    case 36:
                        var1 = var5 - var3;
                    case 40:
                        var2 = var7.prototype;
                        var2 = Object.create(var2, {
                            constructor: {
                                value: var7
                            }
                        });
                        var11 = var2;
                        var10 = var1;
                        var1 = new var11[var7](var10, var9);
                        var2 = var1 instanceof Object ? var1 : var2;
                        var _closure2_slot1 = var2;
                        var7 = var3 < var5;
                        var1 = var3;
                        if (!var7) {
                            _fun2589_ip = 96;
                            continue _fun2589
                        }
                    case 77:
                        var8 = var1 - var3;
                        var7 = arguments[var1];
                        var2[var8] = var7;
                        var1 = var1 + 1;
                        if (var1 < var5) {
                            _fun2589_ip = 77;
                            continue _fun2589
                        }
                    case 96:
                        var3 = _closure1_slot16;
                        var2 = function() { // Environment: var0
                            var3 = _closure2_slot0;
                            var2 = var3.apply;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        var0 = 'queueReactNativeMicrotask';
                        var0 = var3.bind(var4)(var2, var0);
                        var2 = _closure1_slot9;
                        var1 = var2.push;
                        var1 = var1.bind(var2)(var0);
                        return var0;
                }
            };
            var5.queueReactNativeMicrotask = var1;
            var1 = function arg0() {
                var3 = _closure1_slot16;
                var5 = undefined;
                var2 = arg0;
                var0 = 'requestAnimationFrame';
                var0 = var3.bind(var5)(var2, var0);
                var4 = _closure1_slot21;
                var1 = global;
                var2 = var1.Date;
                var1 = var2.now;
                var7 = var1.bind(var2)();
                var8 = 1;
                var6 = false;
                var10 = undefined;
                var9 = var0;
                var1 = var10[var4](var9, var8, var7, var6, var5);
                return var0;
            };
            var5.requestAnimationFrame = var1;
            var1 = function arg0, arg1() {
                _fun2592: for (var _fun2592_ip = 0;;) switch (_fun2592_ip) {
                    case 0:
                        var7 = arg0;
                        var0 = arg1;
                        var _closure2_slot0 = var7;
                        var3 = _closure1_slot10;
                        var4 = var3.length;
                        var3 = 0;
                        if (!(var3 === var4)) {
                            _fun2592_ip = 43;
                            continue _fun2592
                        }
                    case 30:
                        var5 = _closure1_slot22;
                        var4 = undefined;
                        var3 = true;
                        var3 = var5.bind(var4)(var3);
                    case 43:
                        var5 = var0;
                        if (!var5) {
                            _fun2592_ip = 55;
                            continue _fun2592
                        }
                    case 49:
                        var5 = var0.timeout;
                    case 55:
                        var6 = _closure1_slot16;
                        var3 = null;
                        if (!(var3 != var5)) {
                            _fun2592_ip = 70;
                            continue _fun2592
                        }
                    case 65:
                        var7 = function(arg0) { // Environment: var2
                            _fun2593: for (var _fun2593_ip = 0;;) switch (_fun2593_ip) {
                                case 0:
                                    var3 = _closure1_slot11;
                                    var2 = _closure2_slot1;
                                    var4 = var3[var2];
                                    if (!var4) {
                                        _fun2593_ip = 48;
                                        continue _fun2593
                                    }
                                case 21:
                                    var3 = _closure1_slot15;
                                    var2 = var3.clearTimeout;
                                    var2 = var2.bind(var3)(var4);
                                    var2 = _closure1_slot11;
                                    var1 = _closure2_slot1;
                                    var1 = delete var2[var1];
                                case 48:
                                    var2 = _closure2_slot0;
                                    var1 = undefined;
                                    var0 = arg0;
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                            }
                        };
                    case 70:
                        var4 = undefined;
                        var0 = 'requestIdleCallback';
                        var0 = var6.bind(var4)(var7, var0);
                        var _closure2_slot1 = var0;
                        var6 = _closure1_slot10;
                        var4 = var6.push;
                        var4 = var4.bind(var6)(var0);
                        if (!(var3 != var5)) {
                            _fun2592_ip = 132;
                            continue _fun2592
                        }
                    case 104:
                        var4 = _closure1_slot15;
                        var3 = var4.setTimeout;
                        var2 = function() { // Environment: var2
                            _fun2594: for (var _fun2594_ip = 0;;) switch (_fun2594_ip) {
                                case 0:
                                    var4 = _closure1_slot10;
                                    var3 = var4.indexOf;
                                    var2 = _closure2_slot1;
                                    var5 = var3.bind(var4)(var2);
                                    var2 = -1;
                                    if (!(var5 > var2)) {
                                        _fun2594_ip = 92;
                                        continue _fun2594
                                    }
                                case 35:
                                    var4 = _closure1_slot10;
                                    var3 = var4.splice;
                                    var2 = 1;
                                    var2 = var3.bind(var4)(var5, var2);
                                    var6 = _closure1_slot17;
                                    var5 = _closure2_slot1;
                                    var2 = _closure1_slot0;
                                    var3 = var2.performance;
                                    var2 = var3.now;
                                    var4 = var2.bind(var3)();
                                    var3 = undefined;
                                    var2 = true;
                                    var2 = var6.bind(var3)(var5, var4, var2);
                                case 92:
                                    var2 = _closure1_slot11;
                                    var1 = _closure2_slot1;
                                    var1 = delete var2[var1];
                                    var1 = _closure1_slot10;
                                    var2 = var1.length;
                                    var1 = 0;
                                    if (!(var1 === var2)) {
                                        _fun2594_ip = 132;
                                        continue _fun2594
                                    }
                                case 119:
                                    var2 = _closure1_slot22;
                                    var1 = undefined;
                                    var0 = false;
                                    var0 = var2.bind(var1)(var0);
                                case 132:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var2 = var3.bind(var4)(var2, var5);
                        var1 = _closure1_slot11;
                        var1[var0] = var2;
                    case 132:
                        return var0;
                }
            };
            var5.requestIdleCallback = var1;
            var1 = function arg0() {
                _fun2595: for (var _fun2595_ip = 0;;) switch (_fun2595_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = _closure1_slot20;
                        var0 = undefined;
                        var2 = var2.bind(var0)(var3);
                        var4 = _closure1_slot10;
                        var2 = var4.indexOf;
                        var6 = var2.bind(var4)(var3);
                        var2 = -1;
                        if (!(var2 !== var6)) {
                            _fun2595_ip = 61;
                            continue _fun2595
                        }
                    case 42:
                        var5 = _closure1_slot10;
                        var4 = var5.splice;
                        var2 = 1;
                        var2 = var4.bind(var5)(var6, var2);
                    case 61:
                        var2 = _closure1_slot11;
                        var5 = var2[var3];
                        if (!var5) {
                            _fun2595_ip = 95;
                            continue _fun2595
                        }
                    case 72:
                        var4 = _closure1_slot15;
                        var2 = var4.clearTimeout;
                        var2 = var2.bind(var4)(var5);
                        var2 = _closure1_slot11;
                        var2 = delete var2[var3];
                    case 95:
                        var2 = _closure1_slot10;
                        var3 = var2.length;
                        var2 = 0;
                        if (!(var2 === var3)) {
                            _fun2595_ip = 121;
                            continue _fun2595
                        }
                    case 110:
                        var2 = _closure1_slot22;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                    case 121:
                        return var0;
                }
            };
            var5.cancelIdleCallback = var1;
            var1 = function arg0() {
                var2 = _closure1_slot20;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var5.clearTimeout = var1;
            var1 = function arg0() {
                var2 = _closure1_slot20;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var5.clearInterval = var1;
            var1 = function arg0() {
                _fun2598: for (var _fun2598_ip = 0;;) switch (_fun2598_ip) {
                    case 0:
                        var4 = arg0;
                        var2 = _closure1_slot20;
                        var0 = undefined;
                        var2 = var2.bind(var0)(var4);
                        var3 = _closure1_slot9;
                        var2 = var3.indexOf;
                        var4 = var2.bind(var3)(var4);
                        var2 = -1;
                        if (!(var2 !== var4)) {
                            _fun2598_ip = 61;
                            continue _fun2598
                        }
                    case 42:
                        var3 = _closure1_slot9;
                        var2 = var3.splice;
                        var1 = 1;
                        var1 = var2.bind(var3)(var4, var1);
                    case 61:
                        return var0;
                }
            };
            var5.clearReactNativeMicrotask = var1;
            var1 = function arg0() {
                var2 = _closure1_slot20;
                var0 = undefined;
                var1 = arg0;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var5.cancelAnimationFrame = var1;
            var1 = function arg0() {
                _fun2600: for (var _fun2600_ip = 0;;) switch (_fun2600_ip) {
                    case 0:
                        var6 = arg0;
                        var4 = _closure1_slot1;
                        var2 = _closure1_slot3;
                        var1 = 0;
                        var3 = var2[var1];
                        var2 = undefined;
                        var7 = var4.bind(var2)(var3);
                        var3 = var6.length;
                        var4 = var1 !== var3;
                        var3 = 'Cannot call `callTimers` with an empty list of IDs.';
                        var3 = var7.bind(var2)(var4, var3);
                        var3 = _closure1_slot13;
                        var3.length = var1;
                        var3 = var6.length;
                        var3 = var1 < var3;
                        var4 = 0;
                        if (!var3) {
                            _fun2600_ip = 100;
                            continue _fun2600
                        }
                    case 74:
                        var7 = _closure1_slot17;
                        var3 = var6[var4];
                        var3 = var7.bind(var2)(var3, var1);
                        var4 = var4 + 1;
                        var3 = var6.length;
                        if (var4 < var3) {
                            _fun2600_ip = 74;
                            continue _fun2600
                        }
                    case 100:
                        var3 = _closure1_slot13;
                        var4 = var3.length;
                        if (!(!(var4 > var1))) {
                            _fun2600_ip = 115;
                            continue _fun2600
                        }
                    case 113:
                        return var2;
                    case 115:
                        var3 = 1;
                        if (!(var4 > var3)) {
                            _fun2600_ip = 177;
                            continue _fun2600
                        }
                    case 122:
                        var6 = var3 < var4;
                        var2 = null;
                        if (!var6) {
                            _fun2600_ip = 177;
                            continue _fun2600
                        }
                    case 131:
                        var8 = _closure1_slot15;
                        var7 = var8.setTimeout;
                        var10 = function(arg0) { // Environment: var5
                            var0 = arg0;
                            throw var0;
                        };
                        var9 = var10.bind;
                        var6 = _closure1_slot13;
                        var6 = var6[var3];
                        var6 = var9.bind(var10)(var2, var6);
                        var6 = var7.bind(var8)(var6, var1);
                        var3 = var3 + 1;
                        if (var3 < var4) {
                            _fun2600_ip = 131;
                            continue _fun2600
                        }
                    case 177:
                        var0 = _closure1_slot13;
                        var0 = var0[var1];
                        throw var0;
                }
            };
            var5.callTimers = var1;
            var1 = function arg0() {
                _fun2602: for (var _fun2602_ip = 0;;) switch (_fun2602_ip) {
                    case 0:
                        var6 = arg0;
                        var2 = _closure1_slot4;
                        var1 = global;
                        var3 = var1.Date;
                        var1 = var3.now;
                        var1 = var1.bind(var3)();
                        var1 = var1 - var6;
                        var2 = var2 - var1;
                        var1 = 1;
                        if (!(!(var2 < var1))) {
                            _fun2602_ip = 171;
                            continue _fun2602
                        }
                    case 45:
                        var1 = _closure1_slot13;
                        var2 = 0;
                        var1.length = var2;
                        var1 = _closure1_slot10;
                        var1 = var1.length;
                        if (!(var1 > var2)) {
                            _fun2602_ip = 124;
                            continue _fun2602
                        }
                    case 70:
                        var5 = _closure1_slot10;
                        var1 = new Array(0);
                        _closure1_slot10 = var1;
                        var1 = var5.length;
                        var1 = var2 < var1;
                        var4 = undefined;
                        var3 = 0;
                        if (!var1) {
                            _fun2602_ip = 124;
                            continue _fun2602
                        }
                    case 98:
                        var7 = _closure1_slot17;
                        var1 = var5[var3];
                        var1 = var7.bind(var4)(var1, var6);
                        var3 = var3 + 1;
                        var1 = var5.length;
                        if (var3 < var1) {
                            _fun2602_ip = 98;
                            continue _fun2602
                        }
                    case 124:
                        var1 = _closure1_slot10;
                        var1 = var1.length;
                        if (!(var2 === var1)) {
                            _fun2602_ip = 150;
                            continue _fun2602
                        }
                    case 137:
                        var3 = _closure1_slot22;
                        var2 = undefined;
                        var1 = false;
                        var1 = var3.bind(var2)(var1);
                    case 150:
                        var2 = _closure1_slot13;
                        var1 = var2.forEach;
                        var0 = function(arg0) { // Environment: var0
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var3 = _closure1_slot15;
                            var2 = var3.setTimeout;
                            var1 = function() { // Environment: var0
                                var0 = _closure3_slot0;
                                throw var0;
                            };
                            var0 = 0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var0 = var1.bind(var2)(var0);
                    case 171:
                        var0 = undefined;
                        return var0;
                }
            };
            var5.callIdleCallbacks = var1;
            var1 = function() {
                _fun2605: for (var _fun2605_ip = 0;;) switch (_fun2605_ip) {
                    case 0:
                        var2 = _closure1_slot13;
                        var0 = 0;
                        var2.length = var0;
                        var2 = _closure1_slot18;
                        var0 = undefined;
                        var2 = var2.bind(var0)();
                        if (!var2) {
                            _fun2605_ip = 39;
                            continue _fun2605
                        }
                    case 28:
                        var2 = _closure1_slot18;
                        var2 = var2.bind(var0)();
                        if (var2) {
                            _fun2605_ip = 28;
                            continue _fun2605
                        }
                    case 39:
                        var3 = _closure1_slot13;
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var3 = _closure1_slot15;
                            var2 = var3.setTimeout;
                            var1 = function() { // Environment: var0
                                var0 = _closure3_slot0;
                                throw var0;
                            };
                            var0 = 0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var5.callReactNativeMicrotasks = var1;
            var1 = function arg0() {
                _fun2608: for (var _fun2608_ip = 0;;) switch (_fun2608_ip) {
                    case 0:
                        var0 = _closure1_slot14;
                        if (var0) {
                            _fun2608_ip = 37;
                            continue _fun2608
                        }
                    case 10:
                        var0 = true;
                        _closure1_slot14 = var0;
                        var0 = global;
                        var2 = var0.console;
                        var1 = var2.warn;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                    case 37:
                        var0 = undefined;
                        return var0;
                }
            };
            var5.emitTimeDriftWarning = var1;
            var _closure1_slot15 = var5;
            var1 = var8[var0];
            var0 = undefined;
            var9 = var9.bind(var0)(var1);
            var1 = var5;
            if (var9) {
                _fun2576_ip = 428;
                continue _fun2576
            }
        case 379:
            var10 = var6.console;
            var9 = var10.warn;
            var6 = "Timing native module is not available, can't set timers.";
            var6 = var9.bind(var10)(var6);
            var6 = {};
            var9 = var5.callReactNativeMicrotasks;
            var6.callReactNativeMicrotasks = var9;
            var9 = var5.queueReactNativeMicrotask;
            var6.queueReactNativeMicrotask = var9;
            var1 = var6;
        case 428:
            var6 = 2;
            var6 = var8[var6];
            var6 = var7.bind(var0)(var6);
            var7 = var6.default;
            var6 = var7.setReactNativeMicrotasksCallback;
            var5 = var5.callReactNativeMicrotasks;
            var5 = var6.bind(var7)(var5);
            var3 = function() { // Environment: var3
                var1 = _closure1_slot15;
                var0 = var1.callReactNativeMicrotasks;
                var0 = var0.bind(var1)();
                return var0;
            };
            var4._flushReactNativeMicrotasks = var3;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [44, 179, 63]);