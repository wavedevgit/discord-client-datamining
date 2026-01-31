// ../discord_common/js/packages/flux/LoggingUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var4
        _fun7207: for (var _fun7207_ip = 0;;) switch (_fun7207_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun7207_ip = 46;
                    continue _fun7207
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 46:
                if (var1) {
                    _fun7207_ip = 55;
                    continue _fun7207
                }
            case 49:
                var1 = var2["@@iterator"];
            case 55:
                if (var1) {
                    _fun7207_ip = 343;
                    continue _fun7207
                }
            case 61:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun7207_ip = 323;
                    continue _fun7207
                }
            case 86:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun7207_ip = 283;
                    continue _fun7207
                }
            case 96:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun7207_ip = 270;
                    continue _fun7207
                }
            case 110:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun7207_ip = 163;
                    continue _fun7207
                }
            case 158:
                var6 = var2.constructor;
            case 163:
                var9 = var8;
                if (!var6) {
                    _fun7207_ip = 179;
                    continue _fun7207
                }
            case 169:
                var6 = var2.constructor;
                var9 = var6.name;
            case 179:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun7207_ip = 249;
                    continue _fun7207
                }
            case 187:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun7207_ip = 249;
                    continue _fun7207
                }
            case 195:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun7207_ip = 234;
                    continue _fun7207
                }
            case 205:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun7207_ip = 247;
                    continue _fun7207
                }
            case 234:
                var8 = _closure1_slot12;
                var6 = var8.bind(var7)(var2, var7);
            case 247:
                _fun7207_ip = 265;
                continue _fun7207;
            case 249:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 265:
                var5 = var6;
                _fun7207_ip = 283;
                continue _fun7207;
            case 270:
                var6 = _closure1_slot12;
                var5 = var6.bind(var7)(var2, var7);
            case 283:
                var3 = var5;
                if (var3) {
                    _fun7207_ip = 323;
                    continue _fun7207
                }
            case 289:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 323:
                if (!var3) {
                    _fun7207_ip = 330;
                    continue _fun7207
                }
            case 326:
                _closure2_slot0 = var3;
            case 330:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun7208: for (var _fun7208_ip = 0;;) switch (_fun7208_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun7208_ip = 56;
                                continue _fun7208
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun7208_ip = 67;
                            continue _fun7208;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 343:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var4
        _fun7209: for (var _fun7209_ip = 0;;) switch (_fun7209_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun7209_ip = 23;
                    continue _fun7209
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun7209_ip = 33;
                    continue _fun7209
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun7209_ip = 70;
                    continue _fun7209
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun7209_ip = 55;
                    continue _fun7209
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun7210: for (var _fun7210_ip = 0;;) switch (_fun7210_ip) {
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
                _fun7210_ip = 74;
                continue _fun7210;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var3 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var8)(var2, var0, var1);
    var1 = 0;
    var3 = var6[var1];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var8 = var3.Logger;
    var3 = var8.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var8
        }
    });
    var11 = 'Flux';
    var12 = var7;
    var3 = new var12[var8](var11, var10);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot8 = var3;
    var3 = 7;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var7 = var3.EventEmitter;
    var3 = function(arg0) { // Environment: var4
        var3 = function() { // Original name: ActionLogger, environment: var5
            _fun7214: for (var _fun7214_ip = 0;;) switch (_fun7214_ip) {
                case 0:
                    var0 = arguments[0];
                    var4 = this;
                    var3 = undefined;
                    if (!(var0 === var3)) {
                        _fun7214_ip = 14;
                        continue _fun7214
                    }
                case 12:
                    var0 = {};
                case 14:
                    var1 = var0.persist;
                    if (!(var1 === var3)) {
                        _fun7214_ip = 26;
                        continue _fun7214
                    }
                case 24:
                    var1 = false;
                case 26:
                    var0 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var0 = var0.bind(var3)(var4, var2);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun7214_ip = 83;
                        continue _fun7214
                    }
                case 70:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var4, var3);
                    _fun7214_ip = 121;
                    continue _fun7214;
                case 83:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var6 = var5.constructor;
                    var5 = new Array(0);
                    var0 = var7.bind(var8)(var9, var5, var6);
                case 121:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = new Array(0);
                    var0.logs = var2;
                    var0.persist = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'log';
        var4.key = var0;
        var0 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun7215: for (var _fun7215_ip = 0;;) switch (_fun7215_ip) {
                case 0:
                    var9 = arg0;
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var1 = var9;
                    var _closure3_slot1 = var9;
                    var5 = arg1;
                    var7 = undefined;
                    var2 = undefined;
                    var6 = _closure1_slot10;
                    var8 = var6.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var6
                        }
                    });
                    var13 = var8;
                    var12 = var9;
                    var6 = new var13[var6](var12, var11);
                    var9 = var6 instanceof Object ? var6 : var8;
                    var2 = var9;
                    var _closure3_slot2 = var9;
                    var10 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var8 = 6;
                    var6 = var6[var8];
                    var6 = var10.bind(var7)(var6);
                    var10 = var6.performance;
                    var6 = var10.now;
                    var6 = var6.bind(var10)();
                    var9.startTime = var6;
                case 104: // try_start_0 // try_start_1
                    var0 = function(arg0, arg1) { // Environment: var0
                        _fun7216: for (var _fun7216_ip = 0;;) switch (_fun7216_ip) {
                            case 0:
                                var6 = arg0;
                                var2 = var6;
                                var4 = arg1;
                                var7 = undefined;
                                var0 = undefined;
                                var1 = undefined;
                                var3 = undefined;
                                var5 = {};
                                var5.name = var6;
                                var6 = -1;
                                var5.time = var6;
                                var1 = var5;
                                var9 = _closure1_slot1;
                                var6 = _closure1_slot2;
                                var8 = 6;
                                var6 = var6[var8];
                                var6 = var9.bind(var7)(var6);
                                var9 = var6.performance;
                                var6 = var9.now;
                                var3 = var6.bind(var9)();
                            case 75: // try_start_0
                                var0 = var4.bind(var7)();
                            case 79: // try_end0
                                var6 = var1;
                                var9 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var4 = var4[var8];
                                var4 = var9.bind(var7)(var4);
                                var9 = var4.performance;
                                var4 = var9.now;
                                var9 = var4.bind(var9)();
                                var4 = var3;
                                var4 = var9 - var4;
                                var6.time = var4;
                                var6 = _closure3_slot0;
                                var6 = var6.persist;
                                if (!var6) {
                                    _fun7216_ip = 166;
                                    continue _fun7216
                                }
                            case 143:
                                var6 = _closure3_slot2;
                                var10 = var6.traces;
                                var9 = var10.push;
                                var6 = var1;
                                var6 = var9.bind(var10)(var6);
                            case 166:
                                var12 = _closure3_slot0;
                                var11 = var12.emit;
                                var4 = _closure3_slot1;
                                var15 = var4.type;
                                var14 = var2;
                                var4 = var1;
                                var13 = var4.time;
                                var16 = 'trace';
                                var17 = var12;
                                var4 = var17[var11](var16, var15, var14, var13, var12);
                                return var0;
                            case 210: // catch_target0
                                CatchBlockStart(arg_register = 0);
                                var4 = var1;
                                var6 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var5 = var5[var8];
                                var5 = var6.bind(var7)(var5);
                                var6 = var5.performance;
                                var5 = var6.now;
                                var5 = var5.bind(var6)();
                                var3 = var5 - var3;
                                var4.time = var3;
                                var4 = _closure3_slot0;
                                var4 = var4.persist;
                                if (!var4) {
                                    _fun7216_ip = 296;
                                    continue _fun7216
                                }
                            case 273:
                                var4 = _closure3_slot2;
                                var6 = var4.traces;
                                var5 = var6.push;
                                var4 = var1;
                                var4 = var5.bind(var6)(var4);
                            case 296:
                                var6 = _closure3_slot0;
                                var5 = var6.emit;
                                var3 = _closure3_slot1;
                                var15 = var3.type;
                                var14 = var2;
                                var13 = var1.time;
                                var16 = 'trace';
                                var17 = var6;
                                var1 = var17[var5](var16, var15, var14, var13, var12);
                                throw var0;
                        }
                    };
                    var0 = var5.bind(var7)(var0);
                case 114: // try_end0 // try_end1
                    var5 = var2;
                    var6 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var0 = var0[var8];
                    var0 = var6.bind(var7)(var0);
                    var6 = var0.performance;
                    var0 = var6.now;
                    var6 = var0.bind(var6)();
                    var0 = var5.startTime;
                    var0 = var6 - var0;
                    var5.totalTime = var0;
                    var5 = var4.persist;
                    var0 = var5;
                    if (!var5) {
                        _fun7215_ip = 192;
                        continue _fun7215
                    }
                case 177:
                    var5 = var2;
                    var6 = var5.totalTime;
                    var5 = 0;
                    var0 = var6 > var5;
                case 192:
                    if (!var0) {
                        _fun7215_ip = 214;
                        continue _fun7215
                    }
                case 195:
                    var6 = var4.logs;
                    var5 = var6.push;
                    var0 = var2;
                    var0 = var5.bind(var6)(var0);
                case 214:
                    var0 = var4.logs;
                    var5 = var0.length;
                    var0 = 1000;
                    if (!(var5 > var0)) {
                        _fun7215_ip = 251;
                        continue _fun7215
                    }
                case 235:
                    var5 = var4.logs;
                    var0 = var5.shift;
                    var0 = var0.bind(var5)();
                case 251:
                    var6 = var4.emit;
                    var5 = var1;
                    var0 = 'log';
                    var0 = var6.bind(var4)(var0, var5);
                    var0 = var2;
                    return var0;
                case 275: // try_start_2 // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var5 = var2;
                    var5.error = var0;
                    throw var0;
                case 288: // try_end2 // catch_target1 // catch_target2
                    CatchBlockStart(arg_register = 0);
                    var5 = var2;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var3 = var3[var8];
                    var3 = var6.bind(var7)(var3);
                    var6 = var3.performance;
                    var3 = var6.now;
                    var6 = var3.bind(var6)();
                    var3 = var5.startTime;
                    var3 = var6 - var3;
                    var5.totalTime = var3;
                    var5 = var4.persist;
                    var3 = var5;
                    if (!var5) {
                        _fun7215_ip = 368;
                        continue _fun7215
                    }
                case 353:
                    var5 = var2;
                    var6 = var5.totalTime;
                    var5 = 0;
                    var3 = var6 > var5;
                case 368:
                    if (!var3) {
                        _fun7215_ip = 387;
                        continue _fun7215
                    }
                case 371:
                    var5 = var4.logs;
                    var3 = var5.push;
                    var2 = var3.bind(var5)(var2);
                case 387:
                    var2 = var4.logs;
                    var3 = var2.length;
                    var2 = 1000;
                    if (!(var3 > var2)) {
                        _fun7215_ip = 424;
                        continue _fun7215
                    }
                case 408:
                    var3 = var4.logs;
                    var2 = var3.shift;
                    var2 = var2.bind(var3)();
                case 424:
                    var3 = var4.emit;
                    var2 = var1;
                    var1 = 'log';
                    var1 = var3.bind(var4)(var1, var2);
                    throw var0;
            }
        };
        var4.value = var0;
        var0 = new Array(3);
        var0[0] = var4;
        var4 = {};
        var6 = 'getSlowestActions';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            _fun7217: for (var _fun7217_ip = 0;;) switch (_fun7217_ip) {
                case 0:
                    var12 = arg0;
                    var3 = arguments[1];
                    var _closure3_slot0 = var12;
                    var8 = undefined;
                    if (!(var3 === var8)) {
                        _fun7217_ip = 21;
                        continue _fun7217
                    }
                case 18:
                    var3 = 20;
                case 21:
                    var _closure3_slot1 = var8;
                    var _closure3_slot2 = var8;
                    var0 = new Array(0);
                    var5 = _closure1_slot11;
                    var1 = this;
                    var1 = var1.logs;
                    var10 = var5.bind(var8)(var1);
                    var6 = var10.bind(var8)();
                    var5 = var6.done;
                    var1 = null;
                    var9 = var6;
                    var7 = undefined;
                    var6 = undefined;
                    if (var5) {
                        _fun7217_ip = 218;
                        continue _fun7217
                    }
                case 78:
                    var14 = var9.value;
                    if (!(var1 != var12)) {
                        _fun7217_ip = 96;
                        continue _fun7217
                    }
                case 87:
                    var5 = var14.name;
                    if (!(var5 === var12)) {
                        _fun7217_ip = 200;
                        continue _fun7217
                    }
                case 96:
                    var11 = _closure1_slot11;
                    var5 = var14.traces;
                    var13 = var11.bind(var8)(var5);
                    var15 = var13.bind(var8)();
                    var5 = var15.done;
                    var11 = var15;
                    var7 = var11;
                    var6 = var13;
                    if (var5) {
                        _fun7217_ip = 200;
                        continue _fun7217
                    }
                case 132:
                    var16 = var11.value;
                    var15 = var0.push;
                    var17 = var16.name;
                    var5 = new Array(3);
                    var5[0] = var17;
                    var17 = var14.name;
                    var5[1] = var17;
                    var16 = var16.time;
                    var5[2] = var16;
                    var5 = var15.bind(var0)(var5);
                    var15 = var13.bind(var8)();
                    var5 = var15.done;
                    var11 = var15;
                    var7 = var11;
                    var6 = var13;
                    if (!var5) {
                        _fun7217_ip = 132;
                        continue _fun7217
                    }
                case 200:
                    var11 = var10.bind(var8)();
                    var5 = var11.done;
                    var9 = var11;
                    if (!var5) {
                        _fun7217_ip = 78;
                        continue _fun7217
                    }
                case 218:
                    var6 = var0.sort;
                    var5 = function(arg0, arg1) { // Environment: var4
                        var0 = arg1;
                        var2 = 2;
                        var1 = var0[var2];
                        var0 = arg0;
                        var0 = var0[var2];
                        var0 = var1 - var0;
                        return var0;
                    };
                    var5 = var6.bind(var0)(var5);
                    var5 = var0.length;
                    if (!(var5 > var3)) {
                        _fun7217_ip = 249;
                        continue _fun7217
                    }
                case 243:
                    var0.length = var3;
                case 249:
                    var5 = 0;
                    _closure3_slot1 = var5;
                    _closure3_slot2 = var5;
                    var6 = var0.map;
                    var3 = function(arg0) { // Environment: var4
                        _fun7219: for (var _fun7219_ip = 0;;) switch (_fun7219_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = var3[Symbol.iterator];
                                var3 = var0().next;
                                var1 = var3().value;
                                var2 = var0;
                                var6 = undefined;
                                var2 = var2 === var6;
                                var4 = undefined;
                                if (var2) {
                                    _fun7219_ip = 27;
                                    continue _fun7219
                                }
                            case 24:
                                var4 = var1;
                            case 27:
                                var8 = undefined;
                                if (var2) {
                                    _fun7219_ip = 57;
                                    continue _fun7219
                                }
                            case 32:
                                var5 = var3().value;
                                var1 = var0;
                                var1 = var1 === var6;
                                var8 = undefined;
                                var2 = var1;
                                if (var1) {
                                    _fun7219_ip = 57;
                                    continue _fun7219
                                }
                            case 51:
                                var8 = var5;
                                var2 = var1;
                            case 57:
                                var1 = undefined;
                                if (var2) {
                                    _fun7219_ip = 87;
                                    continue _fun7219
                                }
                            case 62:
                                var5 = var3().value;
                                var3 = var0;
                                var3 = var3 === var6;
                                var1 = undefined;
                                var2 = var3;
                                if (var3) {
                                    _fun7219_ip = 87;
                                    continue _fun7219
                                }
                            case 81:
                                var1 = var5;
                                var2 = var3;
                            case 87:
                                if (var2) {
                                    _fun7219_ip = 93;
                                    continue _fun7219
                                }
                            case 90:
                                var0.return();
                            case 93:
                                var0 = global;
                                var2 = var0.HermesInternal;
                                var3 = var2.concat;
                                var2 = '';
                                var5 = var3.bind(var2)(var4);
                                var6 = _closure3_slot0;
                                var4 = null;
                                var2 = var5;
                                if (!(var4 == var6)) {
                                    _fun7219_ip = 160;
                                    continue _fun7219
                                }
                            case 131:
                                var4 = var0.HermesInternal;
                                var7 = var4.concat;
                                var6 = '<';
                                var4 = '>';
                                var4 = var7.bind(var6)(var8, var4);
                                var2 = var5 + var4;
                            case 160:
                                var6 = var0.Math;
                                var5 = var6.max;
                                var4 = var2.length;
                                var0 = _closure3_slot1;
                                var0 = var5.bind(var6)(var4, var0);
                                _closure3_slot1 = var0;
                                var0 = new Array(2);
                                var0[0] = var2;
                                var0[1] = var1;
                                return var0;
                        }
                    };
                    var7 = var6.bind(var0)(var3);
                    var6 = var7.map;
                    var3 = function(arg0) { // Environment: var4
                        _fun7220: for (var _fun7220_ip = 0;;) switch (_fun7220_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = var2[Symbol.iterator];
                                var2 = var0().next;
                                var4 = var2().value;
                                var1 = var0;
                                var6 = undefined;
                                var1 = var1 === var6;
                                var3 = undefined;
                                if (var1) {
                                    _fun7220_ip = 27;
                                    continue _fun7220
                                }
                            case 24:
                                var3 = var4;
                            case 27:
                                var5 = undefined;
                                if (var1) {
                                    _fun7220_ip = 57;
                                    continue _fun7220
                                }
                            case 32:
                                var4 = var2().value;
                                var2 = var0;
                                var2 = var2 === var6;
                                var5 = undefined;
                                var1 = var2;
                                if (var2) {
                                    _fun7220_ip = 57;
                                    continue _fun7220
                                }
                            case 51:
                                var5 = var4;
                                var1 = var2;
                            case 57:
                                if (var1) {
                                    _fun7220_ip = 63;
                                    continue _fun7220
                                }
                            case 60:
                                var0.return();
                            case 63:
                                var1 = _closure3_slot2;
                                var1 = var1 + var5;
                                _closure3_slot2 = var1;
                                var2 = var3.padEnd;
                                var1 = _closure3_slot1;
                                var0 = 1;
                                var1 = var1 + var0;
                                var0 = ' ';
                                var10 = var2.bind(var3)(var1, var0);
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var3 = var0.concat;
                                var11 = '';
                                var9 = ' - ';
                                var7 = 'ms';
                                var8 = var5;
                                var0 = var11[var3](var10, var9, var8, var7, var6);
                                return var0;
                        }
                    };
                    var6 = var6.bind(var7)(var3);
                    var3 = var6.join;
                    var10 = '\n';
                    var9 = var3.bind(var6)(var10);
                    var3 = var0.length;
                    var3 = var5 === var3;
                    if (var3) {
                        _fun7217_ip = 333;
                        continue _fun7217
                    }
                case 315:
                    var6 = var0[var5];
                    var5 = 2;
                    var6 = var6[var5];
                    var5 = 10;
                    var3 = var6 < var5;
                case 333:
                    if (var3) {
                        _fun7217_ip = 347;
                        continue _fun7217
                    }
                case 336:
                    var6 = _closure3_slot2;
                    var5 = 20;
                    var3 = var6 < var5;
                case 347:
                    if (var3) {
                        _fun7217_ip = 535;
                        continue _fun7217
                    }
                case 353:
                    var7 = _closure1_slot8;
                    var6 = var7.log;
                    var5 = _closure1_slot0;
                    var11 = var1 == var5;
                    var3 = undefined;
                    if (var11) {
                        _fun7217_ip = 380;
                        continue _fun7217
                    }
                case 375:
                    var3 = var5.HermesInternal;
                case 380:
                    var5 = 'Using Hermes:';
                    var3 = var8 === var3;
                    var3 = !var3;
                    var3 = var6.bind(var7)(var5, var3);
                    var6 = _closure1_slot8;
                    var5 = var6.log;
                    var1 = var1 != var12;
                    var8 = '';
                    var7 = var8;
                    if (!var1) {
                        _fun7217_ip = 453;
                        continue _fun7217
                    }
                case 422:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var11 = var1.concat;
                    var3 = '\n\n=== ';
                    var1 = ' ===';
                    var7 = var11.bind(var3)(var12, var1);
                case 453:
                    var1 = global;
                    var3 = var1.HermesInternal;
                    var3 = var3.concat;
                    var22 = var8;
                    var21 = var7;
                    var20 = var10;
                    var19 = var9;
                    var18 = var10;
                    var3 = var22[var3](var21, var20, var19, var18, var17);
                    var3 = var5.bind(var6)(var3);
                    var3 = _closure1_slot8;
                    var2 = var3.log;
                    var6 = _closure3_slot2;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var4 = 'Total Time: ';
                    var1 = 'ms';
                    var1 = var5.bind(var4)(var6, var1);
                    var1 = var2.bind(var3)(var1);
                case 535:
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getLastActionMetrics';
        var4.key = var6;
        var5 = function(arg0) { // Original name: value, environment: var5
            _fun7221: for (var _fun7221_ip = 0;;) switch (_fun7221_ip) {
                case 0:
                    var3 = arguments[1];
                    var8 = undefined;
                    if (!(var3 === var8)) {
                        _fun7221_ip = 14;
                        continue _fun7221
                    }
                case 11:
                    var3 = 20;
                case 14:
                    var _closure3_slot0 = var8;
                    var _closure3_slot1 = var8;
                    var5 = {};
                    var1 = _closure1_slot11;
                    var0 = this;
                    var0 = var0.logs;
                    var4 = var1.bind(var8)(var0);
                    var1 = var4.bind(var8)();
                    var0 = var1.done;
                    if (var0) {
                        _fun7221_ip = 165;
                        continue _fun7221
                    }
                case 57:
                    var10 = var1.value;
                    var7 = _closure1_slot11;
                    var0 = var10.traces;
                    var9 = var7.bind(var8)(var0);
                    var7 = var9.bind(var8)();
                    var0 = var7.done;
                    if (var0) {
                        _fun7221_ip = 150;
                        continue _fun7221
                    }
                case 89:
                    var12 = var7.value;
                    var11 = var12.name;
                    var13 = var12.name;
                    var0 = new Array(3);
                    var0[0] = var13;
                    var13 = var10.name;
                    var0[1] = var13;
                    var12 = var12.time;
                    var0[2] = var12;
                    var5[var11] = var0;
                    var11 = var9.bind(var8)();
                    var0 = var11.done;
                    var7 = var11;
                    if (!var0) {
                        _fun7221_ip = 89;
                        continue _fun7221
                    }
                case 150:
                    var7 = var4.bind(var8)();
                    var0 = var7.done;
                    var1 = var7;
                    if (!var0) {
                        _fun7221_ip = 57;
                        continue _fun7221
                    }
                case 165:
                    var1 = global;
                    var4 = var1.Object;
                    var0 = var4.values;
                    var0 = var0.bind(var4)(var5);
                    var5 = var0.sort;
                    var4 = function(arg0, arg1) { // Environment: var6
                        var0 = arg1;
                        var2 = 2;
                        var1 = var0[var2];
                        var0 = arg0;
                        var0 = var0[var2];
                        var0 = var1 - var0;
                        return var0;
                    };
                    var4 = var5.bind(var0)(var4);
                    var4 = var0.length;
                    if (!(var4 > var3)) {
                        _fun7221_ip = 214;
                        continue _fun7221
                    }
                case 208:
                    var0.length = var3;
                case 214:
                    var4 = 0;
                    _closure3_slot0 = var4;
                    _closure3_slot1 = var4;
                    var5 = var0.map;
                    var3 = function(arg0) { // Environment: var6
                        _fun7223: for (var _fun7223_ip = 0;;) switch (_fun7223_ip) {
                            case 0:
                                var4 = arg0;
                                var0 = var4[Symbol.iterator];
                                var4 = var0().next;
                                var1 = var4().value;
                                var2 = var0;
                                var6 = undefined;
                                var3 = var2 === var6;
                                var2 = undefined;
                                if (var3) {
                                    _fun7223_ip = 27;
                                    continue _fun7223
                                }
                            case 24:
                                var2 = var1;
                            case 27:
                                if (var3) {
                                    _fun7223_ip = 41;
                                    continue _fun7223
                                }
                            case 30:
                                var1 = var4().value;
                                var1 = var0;
                                var3 = var1 === var6;
                            case 41:
                                var1 = undefined;
                                if (var3) {
                                    _fun7223_ip = 71;
                                    continue _fun7223
                                }
                            case 46:
                                var5 = var4().value;
                                var4 = var0;
                                var4 = var4 === var6;
                                var1 = undefined;
                                var3 = var4;
                                if (var4) {
                                    _fun7223_ip = 71;
                                    continue _fun7223
                                }
                            case 65:
                                var1 = var5;
                                var3 = var4;
                            case 71:
                                if (var3) {
                                    _fun7223_ip = 77;
                                    continue _fun7223
                                }
                            case 74:
                                var0.return();
                            case 77:
                                var0 = global;
                                var6 = var0.Math;
                                var5 = var6.max;
                                var4 = var2.length;
                                var0 = _closure3_slot0;
                                var0 = var5.bind(var6)(var4, var0);
                                _closure3_slot0 = var0;
                                var0 = new Array(2);
                                var0[0] = var2;
                                var0[1] = var1;
                                return var0;
                        }
                    };
                    var7 = var5.bind(var0)(var3);
                    var5 = var7.map;
                    var3 = function(arg0) { // Environment: var6
                        _fun7224: for (var _fun7224_ip = 0;;) switch (_fun7224_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = var2[Symbol.iterator];
                                var2 = var0().next;
                                var4 = var2().value;
                                var1 = var0;
                                var6 = undefined;
                                var1 = var1 === var6;
                                var3 = undefined;
                                if (var1) {
                                    _fun7224_ip = 27;
                                    continue _fun7224
                                }
                            case 24:
                                var3 = var4;
                            case 27:
                                var5 = undefined;
                                if (var1) {
                                    _fun7224_ip = 57;
                                    continue _fun7224
                                }
                            case 32:
                                var4 = var2().value;
                                var2 = var0;
                                var2 = var2 === var6;
                                var5 = undefined;
                                var1 = var2;
                                if (var2) {
                                    _fun7224_ip = 57;
                                    continue _fun7224
                                }
                            case 51:
                                var5 = var4;
                                var1 = var2;
                            case 57:
                                if (var1) {
                                    _fun7224_ip = 63;
                                    continue _fun7224
                                }
                            case 60:
                                var0.return();
                            case 63:
                                var1 = _closure3_slot1;
                                var1 = var1 + var5;
                                _closure3_slot1 = var1;
                                var2 = var3.padEnd;
                                var1 = _closure3_slot0;
                                var0 = 1;
                                var1 = var1 + var0;
                                var0 = ' ';
                                var10 = var2.bind(var3)(var1, var0);
                                var0 = global;
                                var0 = var0.HermesInternal;
                                var3 = var0.concat;
                                var11 = '';
                                var9 = ' - ';
                                var7 = 'ms';
                                var8 = var5;
                                var0 = var11[var3](var10, var9, var8, var7, var6);
                                return var0;
                        }
                    };
                    var7 = var5.bind(var7)(var3);
                    var5 = var7.join;
                    var3 = '\n';
                    var10 = var5.bind(var7)(var3);
                    var3 = var0.length;
                    var3 = var4 === var3;
                    if (var3) {
                        _fun7221_ip = 291;
                        continue _fun7221
                    }
                case 280:
                    var5 = _closure3_slot1;
                    var4 = 8;
                    var3 = var5 < var4;
                case 291:
                    if (var3) {
                        _fun7221_ip = 428;
                        continue _fun7221
                    }
                case 297:
                    var5 = _closure1_slot8;
                    var4 = var5.log;
                    var3 = _closure1_slot0;
                    var2 = null;
                    var7 = var2 == var3;
                    var2 = undefined;
                    if (var7) {
                        _fun7221_ip = 326;
                        continue _fun7221
                    }
                case 321:
                    var2 = var3.HermesInternal;
                case 326:
                    var3 = var1.HermesInternal;
                    var7 = var3.concat;
                    var3 = '\nUsing Hermes: ';
                    var2 = var8 === var2;
                    var2 = !var2;
                    var3 = var7.bind(var3)(var2);
                    var2 = var1.HermesInternal;
                    var9 = var2.concat;
                    var8 = '\n\n=== ';
                    var7 = arg0;
                    var2 = ' ===\n';
                    var2 = var9.bind(var8)(var7, var2, var10);
                    var8 = _closure3_slot1;
                    var1 = var1.HermesInternal;
                    var7 = var1.concat;
                    var6 = '\nTotal Time: ';
                    var1 = 'ms\n\n';
                    var1 = var7.bind(var6)(var8, var1);
                    var1 = var4.bind(var5)(var3, var2, var1);
                case 428:
                    return var0;
            }
        };
        var4.value = var5;
        var0[2] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var7);
    var _closure1_slot9 = var1;
    var1 = function() { // Environment: var4
        var3 = _closure1_slot4;
        var2 = function(arg0) { // Original name: ActionLog, environment: var4
            var2 = this;
            var3 = _closure1_slot3;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = 0;
            var2.startTime = var1;
            var2.totalTime = var1;
            var1 = new Array(0);
            var2.traces = var1;
            var1 = _closure1_slot9;
            var1 = parseFloat(var1);
            var3 = var1 + 1;
            _closure1_slot9 = var3;
            var2.id = var1;
            var1 = arg0;
            var2.action = var1;
            var1 = global;
            var1 = var1.Date;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var7 = var3;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.createdAt = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'name';
        var0.key = var1;
        var1 = function() { // Original name: get, environment: var4
            var0 = this;
            var0 = var0.action;
            var0 = var0.type;
            return var0;
        };
        var0.get = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'toJSON';
        var0.key = var5;
        var4 = function() { // Original name: value, environment: var4
            _fun7228: for (var _fun7228_ip = 0;;) switch (_fun7228_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.createdAt;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun7228_ip = 67;
                        continue _fun7228
                    }
                case 15:
                    var0 = {};
                    var2 = var1.action;
                    var2 = var2.type;
                    var0.actionType = var2;
                    var2 = var1.createdAt;
                    var0.created_at = var2;
                    var2 = var1.totalTime;
                    var0.totalTime = var2;
                    var1 = var1.traces;
                    var0.traces = var1;
                    return var0;
                case 67:
                    var0 = global;
                    var2 = var0.Error;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'ActionLog.toJSON: You must complete your logging before calling toJSON';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
            }
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot10 = var1;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = '../discord_common/js/packages/flux/LoggingUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ActionLogger = var3;
    var2.ActionLog = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 4, 637, 639, 2]);