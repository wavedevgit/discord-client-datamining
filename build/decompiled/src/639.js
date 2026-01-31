// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun7242: for (var _fun7242_ip = 0;;) switch (_fun7242_ip) {
        case 0:
            var0 = module;
            var2 = function() {
                var0 = _closure1_slot4;
                var2 = var0.init;
                var1 = var2.call;
                var0 = this;
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var _closure1_slot4 = var2;
            var3 = function arg0() {
                _fun7244: for (var _fun7244_ip = 0;;) switch (_fun7244_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = typeof var0;
                        var0 = 'function';
                        if (!(var0 === var3)) {
                            _fun7244_ip = 18;
                            continue _fun7244
                        }
                    case 14:
                        var0 = undefined;
                        return var0;
                    case 18:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = 'The "listener" argument must be of type Function. Received type ';
                        var4 = var0 + var3;
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot5 = var3;
            var3 = function arg0() {
                _fun7245: for (var _fun7245_ip = 0;;) switch (_fun7245_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0._maxListeners;
                        var1 = undefined;
                        if (!(var1 !== var2)) {
                            _fun7245_ip = 23;
                            continue _fun7245
                        }
                    case 15:
                        var0 = var0._maxListeners;
                        _fun7245_ip = 36;
                        continue _fun7245;
                    case 23:
                        var1 = _closure1_slot4;
                        var0 = var1.defaultMaxListeners;
                    case 36:
                        return var0;
                }
            };
            var _closure1_slot6 = var3;
            var3 = function arg0, arg1, arg2, arg3() {
                _fun7246: for (var _fun7246_ip = 0;;) switch (_fun7246_ip) {
                    case 0:
                        var0 = arg0;
                        var3 = arg1;
                        var2 = arg2;
                        var6 = arg3;
                        var1 = _closure1_slot5;
                        var7 = undefined;
                        var1 = var1.bind(var7)(var2);
                        var1 = var0._events;
                        if (!(var7 !== var1)) {
                            _fun7246_ip = 93;
                            continue _fun7246
                        }
                    case 36:
                        var5 = var1.newListener;
                        if (!(var7 !== var5)) {
                            _fun7246_ip = 87;
                            continue _fun7246
                        }
                    case 46:
                        var9 = var0.emit;
                        var5 = var2.listener;
                        var8 = var2;
                        if (!var5) {
                            _fun7246_ip = 70;
                            continue _fun7246
                        }
                    case 64:
                        var8 = var2.listener;
                    case 70:
                        var5 = 'newListener';
                        var5 = var9.bind(var0)(var5, var3, var8);
                        var1 = var0._events;
                    case 87:
                        var9 = var1[var3];
                        _fun7246_ip = 132;
                        continue _fun7246;
                    case 93:
                        var5 = global;
                        var10 = var5.Object;
                        var8 = var10.create;
                        var5 = null;
                        var5 = var8.bind(var10)(var5);
                        var0._events = var5;
                        var8 = 0;
                        var0._eventsCount = var8;
                        var1 = var5;
                        var9 = undefined;
                    case 132:
                        if (!(var7 !== var9)) {
                            _fun7246_ip = 426;
                            continue _fun7246
                        }
                    case 139:
                        var8 = 'function';
                        var5 = typeof var9;
                        if (!(var8 !== var5)) {
                            _fun7246_ip = 184;
                            continue _fun7246
                        }
                    case 150:
                        if (var6) {
                            _fun7246_ip = 168;
                            continue _fun7246
                        }
                    case 153:
                        var5 = var9.push;
                        var5 = var5.bind(var9)(var2);
                        var5 = var9;
                        _fun7246_ip = 222;
                        continue _fun7246;
                    case 168:
                        var8 = var9.unshift;
                        var8 = var8.bind(var9)(var2);
                        var5 = var9;
                        _fun7246_ip = 222;
                        continue _fun7246;
                    case 184:
                        var8 = new Array(2);
                        if (var6) {
                            _fun7246_ip = 204;
                            continue _fun7246
                        }
                    case 191:
                        var8[0] = var9;
                        var8[1] = var2;
                        var6 = var8;
                        _fun7246_ip = 215;
                        continue _fun7246;
                    case 204:
                        var8[0] = var2;
                        var8[1] = var9;
                        var6 = var8;
                    case 215:
                        var1[var3] = var6;
                        var5 = var6;
                    case 222:
                        var4 = _closure1_slot6;
                        var6 = var4.bind(var7)(var0);
                        var4 = 0;
                        if (!(var6 > var4)) {
                            _fun7246_ip = 445;
                            continue _fun7246
                        }
                    case 240:
                        var4 = var5.length;
                        if (!(var4 > var6)) {
                            _fun7246_ip = 445;
                            continue _fun7246
                        }
                    case 252:
                        var4 = var5.warned;
                        if (var4) {
                            _fun7246_ip = 445;
                            continue _fun7246
                        }
                    case 264:
                        var4 = true;
                        var5.warned = var4;
                        var4 = global;
                        var8 = var4.Error;
                        var9 = var5.length;
                        var6 = 'Possible EventEmitter memory leak detected. ';
                        var9 = var6 + var9;
                        var6 = var4.String;
                        var7 = var6.bind(var7)(var3);
                        var6 = ' ';
                        var6 = var9 + var6;
                        var9 = var6 + var7;
                        var6 = var8.prototype;
                        var7 = Object.create(var6, {
                            constructor: {
                                value: var8
                            }
                        });
                        var6 = ' listeners added. Use emitter.setMaxListeners() to increase limit';
                        var13 = var9 + var6;
                        var14 = var7;
                        var6 = new var14[var8](var13, var12);
                        var6 = var6 instanceof Object ? var6 : var7;
                        var7 = 'MaxListenersExceededWarning';
                        var6.name = var7;
                        var6.emitter = var0;
                        var6.type = var3;
                        var5 = var5.length;
                        var6.count = var5;
                        var5 = var4.console;
                        if (!var5) {
                            _fun7246_ip = 405;
                            continue _fun7246
                        }
                    case 394:
                        var7 = var4.console;
                        var5 = var7.warn;
                    case 405:
                        if (!var5) {
                            _fun7246_ip = 445;
                            continue _fun7246
                        }
                    case 408:
                        var5 = var4.console;
                        var4 = var5.warn;
                        var4 = var4.bind(var5)(var6);
                        _fun7246_ip = 445;
                        continue _fun7246;
                    case 426:
                        var1[var3] = var2;
                        var1 = var0._eventsCount;
                        var1 = var1 + 1;
                        var0._eventsCount = var1;
                    case 445:
                        return var0;
                }
            };
            var _closure1_slot7 = var3;
            var3 = function() {
                _fun7247: for (var _fun7247_ip = 0;;) switch (_fun7247_ip) {
                    case 0:
                        var2 = this;
                        var0 = undefined;
                        var1 = undefined;
                        var3 = var2.fired;
                        if (var3) {
                            _fun7247_ip = 113;
                            continue _fun7247
                        }
                    case 16:
                        var6 = var2.target;
                        var5 = var6.removeListener;
                        var4 = var2.type;
                        var3 = var2.wrapFn;
                        var3 = var5.bind(var6)(var4, var3);
                        var3 = true;
                        var2.fired = var3;
                        var4 = arguments.length;
                        var3 = 0;
                        if (!(var3 !== var4)) {
                            _fun7247_ip = 89;
                            continue _fun7247
                        }
                    case 62:
                        var5 = var2.listener;
                        var4 = var5.apply;
                        var3 = var2.target;
                        var1 = arguments;
                        var1 = var4.bind(var5)(var3, var1);
                        _fun7247_ip = 111;
                        continue _fun7247;
                    case 89:
                        var4 = var2.listener;
                        var3 = var4.call;
                        var2 = var2.target;
                        var1 = var3.bind(var4)(var2);
                    case 111:
                        return var1;
                    case 113:
                        return var0;
                }
            };
            var _closure1_slot8 = var3;
            var3 = function arg0, arg1, arg2() {
                var2 = arg2;
                var1 = {};
                var0 = false;
                var1.fired = var0;
                var0 = undefined;
                var1.wrapFn = var0;
                var0 = arg0;
                var1.target = var0;
                var0 = arg1;
                var1.type = var0;
                var1.listener = var2;
                var3 = _closure1_slot8;
                var0 = var3.bind;
                var0 = var0.bind(var3)(var1);
                var0.listener = var2;
                var1.wrapFn = var0;
                return var0;
            };
            var _closure1_slot9 = var3;
            var3 = function arg0, arg1, arg2() {
                _fun7249: for (var _fun7249_ip = 0;;) switch (_fun7249_ip) {
                    case 0:
                        var1 = arg2;
                        var0 = arg0;
                        var2 = var0._events;
                        var4 = undefined;
                        if (!(var4 !== var2)) {
                            _fun7249_ip = 204;
                            continue _fun7249
                        }
                    case 21:
                        var0 = arg1;
                        var2 = var2[var0];
                        if (!(var4 !== var2)) {
                            _fun7249_ip = 198;
                            continue _fun7249
                        }
                    case 35:
                        var3 = 'function';
                        var0 = typeof var2;
                        if (!(var3 !== var0)) {
                            _fun7249_ip = 157;
                            continue _fun7249
                        }
                    case 46:
                        if (var1) {
                            _fun7249_ip = 69;
                            continue _fun7249
                        }
                    case 49:
                        var3 = _closure1_slot12;
                        var0 = var2.length;
                        var0 = var3.bind(var4)(var2, var0);
                        _fun7249_ip = 155;
                        continue _fun7249;
                    case 69:
                        var3 = global;
                        var5 = var3.Array;
                        var8 = var2.length;
                        var4 = var5.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var5
                            }
                        });
                        var9 = var4;
                        var3 = new var9[var5](var8, var7);
                        var5 = var3 instanceof Object ? var3 : var4;
                        var3 = var5.length;
                        var4 = 0;
                        var3 = var4 < var3;
                        var0 = var5;
                        if (!var3) {
                            _fun7249_ip = 155;
                            continue _fun7249
                        }
                    case 119:
                        var3 = var2[var4];
                        var3 = var3.listener;
                        if (var3) {
                            _fun7249_ip = 136;
                            continue _fun7249
                        }
                    case 132:
                        var3 = var2[var4];
                    case 136:
                        var5[var4] = var3;
                        var4 = var4 + 1;
                        var3 = var5.length;
                        var0 = var5;
                        if (var4 < var3) {
                            _fun7249_ip = 119;
                            continue _fun7249
                        }
                    case 155:
                        _fun7249_ip = 196;
                        continue _fun7249;
                    case 157:
                        if (var1) {
                            _fun7249_ip = 170;
                            continue _fun7249
                        }
                    case 160:
                        var1 = new Array(1);
                        var1[0] = var2;
                        _fun7249_ip = 193;
                        continue _fun7249;
                    case 170:
                        var3 = var2.listener;
                        if (var3) {
                            _fun7249_ip = 182;
                            continue _fun7249
                        }
                    case 179:
                        var3 = var2;
                    case 182:
                        var2 = new Array(1);
                        var2[0] = var3;
                        var1 = var2;
                    case 193:
                        var0 = var1;
                    case 196:
                        _fun7249_ip = 202;
                        continue _fun7249;
                    case 198:
                        var0 = new Array(0);
                    case 202:
                        return var0;
                    case 204:
                        var0 = new Array(0);
                        return var0;
                }
            };
            var _closure1_slot10 = var3;
            var4 = function arg0() {
                _fun7250: for (var _fun7250_ip = 0;;) switch (_fun7250_ip) {
                    case 0:
                        var0 = this;
                        var2 = var0._events;
                        var1 = undefined;
                        if (!(var1 !== var2)) {
                            _fun7250_ip = 37;
                            continue _fun7250
                        }
                    case 15:
                        var0 = arg0;
                        var0 = var2[var0];
                        var3 = 'function';
                        var2 = typeof var0;
                        if (!(var3 !== var2)) {
                            _fun7250_ip = 48;
                            continue _fun7250
                        }
                    case 33:
                        if (!(var1 === var0)) {
                            _fun7250_ip = 41;
                            continue _fun7250
                        }
                    case 37:
                        var1 = 0;
                        return var1;
                    case 41:
                        var0 = var0.length;
                        return var0;
                    case 48:
                        var0 = 1;
                        return var0;
                }
            };
            var _closure1_slot11 = var4;
            var3 = function arg0, arg1() {
                _fun7251: for (var _fun7251_ip = 0;;) switch (_fun7251_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = arg1;
                        var0 = global;
                        var0 = var0.Array;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var6 = var1;
                        var5 = var2;
                        var0 = new var6[var0](var5, var4);
                        var0 = var0 instanceof Object ? var0 : var1;
                        var1 = 0;
                        var4 = var1 < var2;
                        if (!var4) {
                            _fun7251_ip = 61;
                            continue _fun7251
                        }
                    case 46:
                        var4 = var3[var1];
                        var0[var1] = var4;
                        var1 = var1 + 1;
                        if (var1 < var2) {
                            _fun7251_ip = 46;
                            continue _fun7251
                        }
                    case 61:
                        return var0;
                }
            };
            var _closure1_slot12 = var3;
            var3 = function arg0, arg1, arg2, arg3() {
                _fun7252: for (var _fun7252_ip = 0;;) switch (_fun7252_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = arg1;
                        var1 = arg2;
                        var0 = arg3;
                        var _closure2_slot0 = var3;
                        var _closure2_slot1 = var2;
                        var _closure2_slot2 = var1;
                        var _closure2_slot3 = var0;
                        var4 = var3.on;
                        var5 = 'function';
                        var4 = typeof var4;
                        if (!(var5 !== var4)) {
                            _fun7252_ip = 126;
                            continue _fun7252
                        }
                    case 47:
                        var4 = var3.addEventListener;
                        var4 = typeof var4;
                        if (!(var5 === var4)) {
                            _fun7252_ip = 83;
                            continue _fun7252
                        }
                    case 60:
                        var5 = var3.addEventListener;
                        var4 = function arg0() {
                            _fun7253: for (var _fun7253_ip = 0;;) switch (_fun7253_ip) {
                                case 0:
                                    var1 = _closure2_slot3;
                                    var1 = var1.once;
                                    if (!var1) {
                                        _fun7253_ip = 40;
                                        continue _fun7253
                                    }
                                case 16:
                                    var4 = _closure2_slot0;
                                    var3 = var4.removeEventListener;
                                    var2 = _closure2_slot1;
                                    var1 = _closure2_slot4;
                                    var1 = var3.bind(var4)(var2, var1);
                                case 40:
                                    var2 = _closure2_slot2;
                                    var0 = undefined;
                                    var1 = arg0;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var _closure2_slot4 = var4;
                        var4 = var5.bind(var3)(var2, var4);
                        _fun7252_ip = 161;
                        continue _fun7252;
                    case 83:
                        var4 = global;
                        var6 = var4.TypeError;
                        var4 = var6.prototype;
                        var5 = Object.create(var4, {
                            constructor: {
                                value: var6
                            }
                        });
                        var7 = 'The "emitter" argument must be of type EventEmitter. Received type ';
                        var4 = typeof var3;
                        var9 = var7 + var4;
                        var10 = var5;
                        var4 = new var10[var6](var9, var8);
                        var4 = var4 instanceof Object ? var4 : var5;
                        throw var4;
                    case 126:
                        var0 = var0.once;
                        if (var0) {
                            _fun7252_ip = 149;
                            continue _fun7252
                        }
                    case 135:
                        var0 = var3.on;
                        var0 = var0.bind(var3)(var2, var1);
                        _fun7252_ip = 161;
                        continue _fun7252;
                    case 149:
                        var0 = var3.once;
                        var0 = var0.bind(var3)(var2, var1);
                    case 161:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot13 = var3;
            var3 = global;
            var5 = var3.Reflect;
            var7 = 'object';
            var5 = typeof var5;
            var6 = null;
            if (!(var7 === var5)) {
                _fun7242_ip = 121;
                continue _fun7242
            }
        case 115:
            var6 = var3.Reflect;
        case 121:
            if (!var6) {
                _fun7242_ip = 140;
                continue _fun7242
            }
        case 124:
            var5 = var6.apply;
            var7 = 'function';
            var5 = typeof var5;
            if (!(var7 !== var5)) {
                _fun7242_ip = 147;
                continue _fun7242
            }
        case 140:
            var5 = function arg0, arg1, arg2() {
                var0 = global;
                var0 = var0.Function;
                var0 = var0.prototype;
                var4 = var0.apply;
                var3 = var4.call;
                var2 = arg0;
                var1 = arg1;
                var0 = arg2;
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
            };
            _fun7242_ip = 152;
            continue _fun7242;
        case 147:
            var5 = var6.apply;
        case 152:
            var _closure1_slot1 = var5;
            if (!var6) {
                _fun7242_ip = 176;
                continue _fun7242
            }
        case 159:
            var5 = var6.ownKeys;
            var7 = 'function';
            var5 = typeof var5;
            if (!(var7 !== var5)) {
                _fun7242_ip = 205;
                continue _fun7242
            }
        case 176:
            var5 = var3.Object;
            var5 = var5.getOwnPropertySymbols;
            if (var5) {
                _fun7242_ip = 198;
                continue _fun7242
            }
        case 191:
            var5 = function arg0() {
                var0 = global;
                var2 = var0.Object;
                var1 = var2.getOwnPropertyNames;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            _fun7242_ip = 203;
            continue _fun7242;
        case 198:
            var5 = function arg0() {
                var4 = arg0;
                var0 = global;
                var2 = var0.Object;
                var1 = var2.getOwnPropertyNames;
                var2 = var1.bind(var2)(var4);
                var1 = var2.concat;
                var3 = var0.Object;
                var0 = var3.getOwnPropertySymbols;
                var0 = var0.bind(var3)(var4);
                var0 = var1.bind(var2)(var0);
                return var0;
            };
        case 203:
            _fun7242_ip = 211;
            continue _fun7242;
        case 205:
            var5 = var6.ownKeys;
        case 211:
            var _closure1_slot0 = var5;
            var5 = var3.Number;
            var5 = var5.isNaN;
            if (var5) {
                _fun7242_ip = 235;
                continue _fun7242
            }
        case 230:
            var5 = function arg0() {
                var0 = arg0;
                var0 = var0 != var0;
                return var0;
            };
        case 235:
            var _closure1_slot2 = var5;
            var0.exports = var2;
            var5 = var0.exports;
            var0 = function arg0, arg1() {
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = arg1;
                var _closure2_slot1 = var1;
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = function(arg0, arg1) { // Environment: var0
                    _fun7259: for (var _fun7259_ip = 0;;) switch (_fun7259_ip) {
                        case 0:
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var1 = arg1;
                            var _closure3_slot1 = var1;
                            var5 = function arg0() {
                                var4 = _closure2_slot0;
                                var3 = var4.removeListener;
                                var2 = _closure2_slot1;
                                var1 = _closure3_slot3;
                                var1 = var3.bind(var4)(var2, var1);
                                var2 = _closure3_slot1;
                                var0 = undefined;
                                var1 = arg0;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var _closure3_slot2 = var5;
                            var9 = function() {
                                _fun7261: for (var _fun7261_ip = 0;;) switch (_fun7261_ip) {
                                    case 0:
                                        var0 = undefined;
                                        var1 = undefined;
                                        var3 = _closure2_slot0;
                                        var3 = var3.removeListener;
                                        var4 = 'function';
                                        var3 = typeof var3;
                                        if (!(var4 === var3)) {
                                            _fun7261_ip = 55;
                                            continue _fun7261
                                        }
                                    case 28:
                                        var5 = _closure2_slot0;
                                        var4 = var5.removeListener;
                                        var3 = _closure3_slot2;
                                        var2 = 'error';
                                        var2 = var4.bind(var5)(var2, var3);
                                    case 55:
                                        var2 = _closure3_slot0;
                                        var3 = new Array(0);
                                        var4 = var3.slice;
                                        var3 = var4.call;
                                        var1 = arguments;
                                        var1 = var3.bind(var4)(var1);
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var _closure3_slot3 = var9;
                            var8 = _closure1_slot13;
                            var13 = _closure2_slot0;
                            var3 = _closure2_slot1;
                            var4 = {};
                            var6 = true;
                            var4.once = var6;
                            var0 = undefined;
                            var14 = undefined;
                            var12 = var3;
                            var11 = var9;
                            var10 = var4;
                            var4 = var14[var8](var13, var12, var11, var10, var9);
                            var4 = 'error';
                            if (!(var4 !== var3)) {
                                _fun7259_ip = 136;
                                continue _fun7259
                            }
                        case 86:
                            var3 = _closure2_slot0;
                            var2 = {};
                            var2.once = var6;
                            var6 = var3.on;
                            var7 = 'function';
                            var6 = typeof var6;
                            if (!(var7 === var6)) {
                                _fun7259_ip = 136;
                                continue _fun7259
                            }
                        case 114:
                            var1 = _closure1_slot13;
                            var14 = undefined;
                            var13 = var3;
                            var12 = var4;
                            var11 = var5;
                            var10 = var2;
                            var1 = var14[var1](var13, var12, var11, var10, var9);
                        case 136:
                            return var0;
                    }
                };
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var5.once = var0;
            var2.EventEmitter = var2;
            var5 = var2.prototype;
            var0 = undefined;
            var5._events = var0;
            var6 = var2.prototype;
            var5 = 0;
            var6._eventsCount = var5;
            var5 = var2.prototype;
            var5._maxListeners = var0;
            var5 = 10;
            var _closure1_slot3 = var5;
            var7 = var3.Object;
            var6 = var7.defineProperty;
            var5 = {};
            var3 = true;
            var5.enumerable = var3;
            var3 = function() {
                var0 = _closure1_slot3;
                return var0;
            };
            var5.get = var3;
            var3 = function arg0() {
                _fun7263: for (var _fun7263_ip = 0;;) switch (_fun7263_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = 'number';
                        var0 = typeof var1;
                        if (!(var2 === var0)) {
                            _fun7263_ip = 43;
                            continue _fun7263
                        }
                    case 14:
                        var0 = 0;
                        if (!(!(var1 < var0))) {
                            _fun7263_ip = 43;
                            continue _fun7263
                        }
                    case 20:
                        var3 = _closure1_slot2;
                        var0 = undefined;
                        var3 = var3.bind(var0)(var1);
                        if (var3) {
                            _fun7263_ip = 43;
                            continue _fun7263
                        }
                    case 37:
                        _closure1_slot3 = var1;
                        return var0;
                    case 43:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = 'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ';
                        var3 = var0 + var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = '.';
                        var4 = var3 + var0;
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var5.set = var3;
            var3 = 'defaultMaxListeners';
            var3 = var6.bind(var7)(var2, var3, var5);
            var3 = function() { // Environment: var1
                _fun7264: for (var _fun7264_ip = 0;;) switch (_fun7264_ip) {
                    case 0:
                        var2 = this;
                        var1 = var2._events;
                        var0 = undefined;
                        var1 = var0 !== var1;
                        if (!var1) {
                            _fun7264_ip = 53;
                            continue _fun7264
                        }
                    case 18:
                        var4 = var2._events;
                        var3 = global;
                        var5 = var3.Object;
                        var3 = var5.getPrototypeOf;
                        var3 = var3.bind(var5)(var2);
                        var3 = var3._events;
                        var1 = var4 !== var3;
                    case 53:
                        if (var1) {
                            _fun7264_ip = 90;
                            continue _fun7264
                        }
                    case 56:
                        var1 = global;
                        var4 = var1.Object;
                        var3 = var4.create;
                        var1 = null;
                        var1 = var3.bind(var4)(var1);
                        var2._events = var1;
                        var1 = 0;
                        var2._eventsCount = var1;
                    case 90:
                        var1 = var2._maxListeners;
                        if (var1) {
                            _fun7264_ip = 101;
                            continue _fun7264
                        }
                    case 99:
                        var1 = undefined;
                    case 101:
                        var2._maxListeners = var1;
                        return var0;
                }
            };
            var2.init = var3;
            var5 = var2.prototype;
            var3 = function arg0() {
                _fun7265: for (var _fun7265_ip = 0;;) switch (_fun7265_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = this;
                        var3 = 'number';
                        var2 = typeof var1;
                        if (!(var3 === var2)) {
                            _fun7265_ip = 48;
                            continue _fun7265
                        }
                    case 17:
                        var2 = 0;
                        if (!(!(var1 < var2))) {
                            _fun7265_ip = 48;
                            continue _fun7265
                        }
                    case 23:
                        var3 = _closure1_slot2;
                        var2 = undefined;
                        var2 = var3.bind(var2)(var1);
                        if (var2) {
                            _fun7265_ip = 48;
                            continue _fun7265
                        }
                    case 40:
                        var0._maxListeners = var1;
                        return var0;
                    case 48:
                        var0 = global;
                        var2 = var0.RangeError;
                        var0 = 'The value of "n" is out of range. It must be a non-negative number. Received ';
                        var3 = var0 + var1;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var0 = '.';
                        var4 = var3 + var0;
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var5.setMaxListeners = var3;
            var5 = var2.prototype;
            var3 = function() {
                var2 = _closure1_slot6;
                var1 = undefined;
                var0 = this;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var5.getMaxListeners = var3;
            var5 = var2.prototype;
            var3 = function arg0() {
                _fun7267: for (var _fun7267_ip = 0;;) switch (_fun7267_ip) {
                    case 0:
                        var3 = arg0;
                        var4 = this;
                        var0 = undefined;
                        var6 = undefined;
                        var2 = new Array(0);
                        var1 = arguments.length;
                        var5 = 1;
                        var1 = var5 < var1;
                        if (!var1) {
                            _fun7267_ip = 51;
                            continue _fun7267
                        }
                    case 27:
                        var7 = var2.push;
                        var1 = arguments[var5];
                        var1 = var7.bind(var2)(var1);
                        var5 = var5 + 1;
                        var1 = arguments.length;
                        if (var5 < var1) {
                            _fun7267_ip = 27;
                            continue _fun7267
                        }
                    case 51:
                        var1 = 'error';
                        var7 = var1 === var3;
                        var1 = var4._events;
                        if (!(var0 === var1)) {
                            _fun7267_ip = 79;
                            continue _fun7267
                        }
                    case 69:
                        var5 = var7;
                        if (var5) {
                            _fun7267_ip = 97;
                            continue _fun7267
                        }
                    case 75:
                        var6 = false;
                        return var6;
                    case 79:
                        var6 = var7;
                        if (!var7) {
                            _fun7267_ip = 94;
                            continue _fun7267
                        }
                    case 85:
                        var7 = var1.error;
                        var6 = var0 === var7;
                    case 94:
                        var5 = var6;
                    case 97:
                        if (var5) {
                            _fun7267_ip = 192;
                            continue _fun7267
                        }
                    case 100:
                        var3 = var1[var3];
                        if (!(var0 !== var3)) {
                            _fun7267_ip = 188;
                            continue _fun7267
                        }
                    case 108:
                        var5 = 'function';
                        var1 = typeof var3;
                        if (!(var5 !== var1)) {
                            _fun7267_ip = 170;
                            continue _fun7267
                        }
                    case 119:
                        var7 = var3.length;
                        var1 = _closure1_slot12;
                        var5 = var1.bind(var0)(var3, var7);
                        var1 = 0;
                        var8 = var1 < var7;
                        if (!var8) {
                            _fun7267_ip = 184;
                            continue _fun7267
                        }
                    case 146:
                        var9 = _closure1_slot1;
                        var8 = var5[var1];
                        var8 = var9.bind(var0)(var8, var4, var2);
                        var1 = var1 + 1;
                        if (var1 < var7) {
                            _fun7267_ip = 146;
                            continue _fun7267
                        }
                    case 168:
                        _fun7267_ip = 184;
                        continue _fun7267;
                    case 170:
                        var1 = _closure1_slot1;
                        var1 = var1.bind(var0)(var3, var4, var2);
                    case 184:
                        var1 = true;
                        return var1;
                    case 188:
                        var1 = false;
                        return var1;
                    case 192:
                        var3 = var2.length;
                        var1 = 0;
                        var3 = var3 > var1;
                        var0 = undefined;
                        if (!var3) {
                            _fun7267_ip = 212;
                            continue _fun7267
                        }
                    case 208:
                        var0 = var2[var1];
                    case 212:
                        var1 = global;
                        var2 = var1.Error;
                        var2 = var0 instanceof var2;
                        if (var2) {
                            _fun7267_ip = 301;
                            continue _fun7267
                        }
                    case 227:
                        var3 = var1.Error;
                        var4 = '';
                        if (!var0) {
                            _fun7267_ip = 263;
                            continue _fun7267
                        }
                    case 240:
                        var2 = var0.message;
                        var1 = ' (';
                        var2 = var1 + var2;
                        var1 = ')';
                        var4 = var2 + var1;
                    case 263:
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var1 = 'Unhandled error.';
                        var12 = var1 + var4;
                        var13 = var2;
                        var1 = new var13[var3](var12, var11);
                        var1 = var1 instanceof Object ? var1 : var2;
                        var1.context = var0;
                        throw var1;
                    case 301:
                        throw var0;
                }
            };
            var5.emit = var3;
            var5 = var2.prototype;
            var3 = function arg0, arg1() {
                var0 = this;
                var5 = _closure1_slot7;
                var10 = undefined;
                var8 = arg0;
                var7 = arg1;
                var6 = false;
                var9 = var0;
                var1 = var10[var5](var9, var8, var7, var6, var5);
                return var0;
            };
            var5.addListener = var3;
            var5 = var2.prototype;
            var3 = var2.prototype;
            var3 = var3.addListener;
            var5.on = var3;
            var5 = var2.prototype;
            var3 = function arg0, arg1() {
                var0 = this;
                var5 = _closure1_slot7;
                var10 = undefined;
                var8 = arg0;
                var7 = arg1;
                var6 = true;
                var9 = var0;
                var1 = var10[var5](var9, var8, var7, var6, var5);
                return var0;
            };
            var5.prependListener = var3;
            var5 = var2.prototype;
            var3 = function arg0, arg1() {
                var3 = arg0;
                var5 = arg1;
                var0 = this;
                var2 = _closure1_slot5;
                var4 = undefined;
                var2 = var2.bind(var4)(var5);
                var2 = var0.on;
                var1 = _closure1_slot9;
                var1 = var1.bind(var4)(var0, var3, var5);
                var1 = var2.bind(var0)(var3, var1);
                return var0;
            };
            var5.once = var3;
            var5 = var2.prototype;
            var3 = function arg0, arg1() {
                var3 = arg0;
                var5 = arg1;
                var0 = this;
                var2 = _closure1_slot5;
                var4 = undefined;
                var2 = var2.bind(var4)(var5);
                var2 = var0.prependListener;
                var1 = _closure1_slot9;
                var1 = var1.bind(var4)(var0, var3, var5);
                var1 = var2.bind(var0)(var3, var1);
                return var0;
            };
            var5.prependOnceListener = var3;
            var5 = var2.prototype;
            var3 = function arg0, arg1() {
                _fun7272: for (var _fun7272_ip = 0;;) switch (_fun7272_ip) {
                    case 0:
                        var4 = arg0;
                        var1 = arg1;
                        var0 = this;
                        var2 = _closure1_slot5;
                        var6 = undefined;
                        var2 = var2.bind(var6)(var1);
                        var3 = var0._events;
                        if (!(var6 !== var3)) {
                            _fun7272_ip = 382;
                            continue _fun7272
                        }
                    case 36:
                        var2 = var3[var4];
                        if (!(var6 !== var2)) {
                            _fun7272_ip = 380;
                            continue _fun7272
                        }
                    case 47:
                        if (!(var2 !== var1)) {
                            _fun7272_ip = 287;
                            continue _fun7272
                        }
                    case 54:
                        var5 = var2.listener;
                        if (!(var5 !== var1)) {
                            _fun7272_ip = 287;
                            continue _fun7272
                        }
                    case 67:
                        var7 = 'function';
                        var5 = typeof var2;
                        if (!(var7 !== var5)) {
                            _fun7272_ip = 378;
                            continue _fun7272
                        }
                    case 81:
                        var5 = var2.length;
                        var9 = 1;
                        var12 = var5 - var9;
                        var8 = -1;
                        var5 = 0;
                        var11 = var8;
                        var7 = undefined;
                        if (!(var12 >= var5)) {
                            _fun7272_ip = 162;
                            continue _fun7272
                        }
                    case 110:
                        var13 = var2[var12];
                        var10 = var12;
                        if (!(var13 !== var1)) {
                            _fun7272_ip = 149;
                            continue _fun7272
                        }
                    case 121:
                        var13 = var2[var10];
                        var13 = var13.listener;
                        if (!(var13 !== var1)) {
                            _fun7272_ip = 149;
                            continue _fun7272
                        }
                    case 135:
                        var12 = var10 - 1;
                        var11 = var8;
                        var7 = undefined;
                        if (var12 >= var5) {
                            _fun7272_ip = 110;
                            continue _fun7272
                        }
                    case 147:
                        _fun7272_ip = 162;
                        continue _fun7272;
                    case 149:
                        var8 = var2[var10];
                        var7 = var8.listener;
                        var11 = var10;
                    case 162:
                        if (!(!(var11 < var5))) {
                            _fun7272_ip = 285;
                            continue _fun7272
                        }
                    case 166:
                        if (!(var5 !== var11)) {
                            _fun7272_ip = 223;
                            continue _fun7272
                        }
                    case 170:
                        var10 = var11 + var9;
                        var8 = var2.length;
                        if (!(var10 < var8)) {
                            _fun7272_ip = 211;
                            continue _fun7272
                        }
                    case 183:
                        var8 = var11 + var9;
                        var8 = var2[var8];
                        var2[var11] = var8;
                        var11 = var11 + 1;
                        var10 = var11 + var9;
                        var8 = var2.length;
                        if (var10 < var8) {
                            _fun7272_ip = 183;
                            continue _fun7272
                        }
                    case 211:
                        var8 = var2.pop;
                        var8 = var8.bind(var2)();
                        _fun7272_ip = 233;
                        continue _fun7272;
                    case 223:
                        var8 = var2.shift;
                        var8 = var8.bind(var2)();
                    case 233:
                        var8 = var2.length;
                        if (!(var9 === var8)) {
                            _fun7272_ip = 250;
                            continue _fun7272
                        }
                    case 242:
                        var5 = var2[var5];
                        var3[var4] = var5;
                    case 250:
                        var5 = var3.removeListener;
                        if (!(var6 !== var5)) {
                            _fun7272_ip = 378;
                            continue _fun7272
                        }
                    case 260:
                        var6 = var0.emit;
                        if (var7) {
                            _fun7272_ip = 272;
                            continue _fun7272
                        }
                    case 269:
                        var7 = var1;
                    case 272:
                        var5 = 'removeListener';
                        var5 = var6.bind(var0)(var5, var4, var7);
                        _fun7272_ip = 378;
                        continue _fun7272;
                    case 285:
                        return var0;
                    case 287:
                        var5 = var0._eventsCount;
                        var6 = var5 - 1;
                        var0._eventsCount = var6;
                        var5 = 0;
                        if (!(var5 != var6)) {
                            _fun7272_ip = 352;
                            continue _fun7272
                        }
                    case 308:
                        var5 = delete var3[var4];
                        var3 = var3.removeListener;
                        if (!var3) {
                            _fun7272_ip = 378;
                            continue _fun7272
                        }
                    case 321:
                        var3 = var0.emit;
                        var2 = var2.listener;
                        if (var2) {
                            _fun7272_ip = 339;
                            continue _fun7272
                        }
                    case 336:
                        var2 = var1;
                    case 339:
                        var1 = 'removeListener';
                        var1 = var3.bind(var0)(var1, var4, var2);
                        _fun7272_ip = 378;
                        continue _fun7272;
                    case 352:
                        var1 = global;
                        var3 = var1.Object;
                        var2 = var3.create;
                        var1 = null;
                        var1 = var2.bind(var3)(var1);
                        var0._events = var1;
                    case 378:
                        return var0;
                    case 380:
                        return var0;
                    case 382:
                        return var0;
                }
            };
            var5.removeListener = var3;
            var5 = var2.prototype;
            var3 = var2.prototype;
            var3 = var3.removeListener;
            var5.off = var3;
            var5 = var2.prototype;
            var3 = function arg0() {
                _fun7273: for (var _fun7273_ip = 0;;) switch (_fun7273_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = this;
                        var5 = undefined;
                        var1 = undefined;
                        var2 = var0._events;
                        if (!(var5 !== var2)) {
                            _fun7273_ip = 333;
                            continue _fun7273
                        }
                    case 23:
                        var4 = var2.removeListener;
                        if (!(var5 !== var4)) {
                            _fun7273_ip = 229;
                            continue _fun7273
                        }
                    case 36:
                        var6 = arguments.length;
                        var4 = 0;
                        if (!(var4 !== var6)) {
                            _fun7273_ip = 119;
                            continue _fun7273
                        }
                    case 45:
                        var7 = var2[var3];
                        var8 = 'function';
                        var6 = typeof var7;
                        if (!(var8 !== var6)) {
                            _fun7273_ip = 105;
                            continue _fun7273
                        }
                    case 60:
                        if (!(var5 !== var7)) {
                            _fun7273_ip = 117;
                            continue _fun7273
                        }
                    case 64:
                        var8 = var7.length;
                        var6 = 1;
                        var6 = var8 - var6;
                        if (!(var6 >= var4)) {
                            _fun7273_ip = 117;
                            continue _fun7273
                        }
                    case 80:
                        var9 = var0.removeListener;
                        var8 = var7[var6];
                        var8 = var9.bind(var0)(var3, var8);
                        var6 = var6 - 1;
                        if (var6 >= var4) {
                            _fun7273_ip = 80;
                            continue _fun7273
                        }
                    case 103:
                        _fun7273_ip = 117;
                        continue _fun7273;
                    case 105:
                        var6 = var0.removeListener;
                        var6 = var6.bind(var0)(var3, var7);
                    case 117:
                        return var0;
                    case 119:
                        var6 = global;
                        var8 = var6.Object;
                        var7 = var8.keys;
                        var10 = var7.bind(var8)(var2);
                        var7 = var10.length;
                        var7 = var4 < var7;
                        var8 = 'removeListener';
                        var9 = 0;
                        if (!var7) {
                            _fun7273_ip = 186;
                            continue _fun7273
                        }
                    case 155:
                        var11 = var10[var9];
                        if (!(var8 !== var11)) {
                            _fun7273_ip = 174;
                            continue _fun7273
                        }
                    case 163:
                        var7 = var0.removeAllListeners;
                        var7 = var7.bind(var0)(var11);
                    case 174:
                        var9 = var9 + 1;
                        var7 = var10.length;
                        if (var9 < var7) {
                            _fun7273_ip = 155;
                            continue _fun7273
                        }
                    case 186:
                        var7 = var0.removeAllListeners;
                        var7 = var7.bind(var0)(var8);
                        var8 = var6.Object;
                        var7 = var8.create;
                        var6 = null;
                        var6 = var7.bind(var8)(var6);
                        var0._events = var6;
                        var0._eventsCount = var4;
                        return var0;
                    case 229:
                        var4 = arguments.length;
                        var1 = 0;
                        if (!(var1 !== var4)) {
                            _fun7273_ip = 299;
                            continue _fun7273
                        }
                    case 238:
                        var4 = var2[var3];
                        if (!(var5 !== var4)) {
                            _fun7273_ip = 331;
                            continue _fun7273
                        }
                    case 246:
                        var4 = var0._eventsCount;
                        var4 = var4 - 1;
                        var0._eventsCount = var4;
                        if (!(var1 != var4)) {
                            _fun7273_ip = 271;
                            continue _fun7273
                        }
                    case 265:
                        var2 = delete var2[var3];
                        _fun7273_ip = 331;
                        continue _fun7273;
                    case 271:
                        var2 = global;
                        var4 = var2.Object;
                        var3 = var4.create;
                        var2 = null;
                        var2 = var3.bind(var4)(var2);
                        var0._events = var2;
                        _fun7273_ip = 331;
                        continue _fun7273;
                    case 299:
                        var2 = global;
                        var4 = var2.Object;
                        var3 = var4.create;
                        var2 = null;
                        var2 = var3.bind(var4)(var2);
                        var0._events = var2;
                        var0._eventsCount = var1;
                    case 331:
                        return var0;
                    case 333:
                        return var0;
                }
            };
            var5.removeAllListeners = var3;
            var5 = var2.prototype;
            var3 = function arg0() {
                var4 = _closure1_slot10;
                var3 = undefined;
                var2 = this;
                var1 = arg0;
                var0 = true;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var5.listeners = var3;
            var5 = var2.prototype;
            var3 = function arg0() {
                var4 = _closure1_slot10;
                var3 = undefined;
                var2 = this;
                var1 = arg0;
                var0 = false;
                var0 = var4.bind(var3)(var2, var1, var0);
                return var0;
            };
            var5.rawListeners = var3;
            var3 = function(arg0, arg1) { // Environment: var1
                _fun7276: for (var _fun7276_ip = 0;;) switch (_fun7276_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = arg1;
                        var0 = var3.listenerCount;
                        var1 = 'function';
                        var0 = typeof var0;
                        if (!(var1 !== var0)) {
                            _fun7276_ip = 43;
                            continue _fun7276
                        }
                    case 23:
                        var1 = _closure1_slot11;
                        var0 = var1.call;
                        var0 = var0.bind(var1)(var3, var2);
                        _fun7276_ip = 54;
                        continue _fun7276;
                    case 43:
                        var1 = var3.listenerCount;
                        var0 = var1.bind(var3)(var2);
                    case 54:
                        return var0;
                }
            };
            var2.listenerCount = var3;
            var3 = var2.prototype;
            var3.listenerCount = var4;
            var2 = var2.prototype;
            var1 = function() {
                _fun7277: for (var _fun7277_ip = 0;;) switch (_fun7277_ip) {
                    case 0:
                        var1 = this;
                        var2 = var1._eventsCount;
                        var0 = 0;
                        if (!(!(var2 > var0))) {
                            _fun7277_ip = 21;
                            continue _fun7277
                        }
                    case 15:
                        var0 = new Array(0);
                        _fun7277_ip = 41;
                        continue _fun7277;
                    case 21:
                        var3 = _closure1_slot0;
                        var2 = var1._events;
                        var1 = undefined;
                        var0 = var3.bind(var1)(var2);
                    case 41:
                        return var0;
                }
            };
            var2.eventNames = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);