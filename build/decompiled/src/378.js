// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var3 = function arg0, arg1, arg2, arg3() {
        _fun5616: for (var _fun5616_ip = 0;;) switch (_fun5616_ip) {
            case 0:
                var5 = arg2;
                var0 = arg1;
                var _closure2_slot0 = var0;
                var0 = arg3;
                var _closure2_slot1 = var0;
                var3 = new Array(0);
                var _closure2_slot2 = var3;
                var6 = function arg0, arg1() {
                    _fun5617: for (var _fun5617_ip = 0;;) switch (_fun5617_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var0 = 2;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var2 = var5 instanceof var2;
                            if (var2) {
                                _fun5617_ip = 199;
                                continue _fun5617
                            }
                        case 41:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var1 = 3;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var1 = var5 instanceof var1;
                            if (var1) {
                                _fun5617_ip = 140;
                                continue _fun5617
                            }
                        case 68:
                            var2 = 'object';
                            var1 = typeof var5;
                            if (!(var2 === var1)) {
                                _fun5617_ip = 253;
                                continue _fun5617
                            }
                        case 82:
                            var7 = var5;
                            for (var2 in var7)
                                case 99: {
                                    case 111: var12 = var2;
                                    var11 = _closure2_slot3;
                                    var10 = var5[var12];
                                    var9 = var4.concat;
                                    var9 = var9.bind(var4)(var12);
                                    var9 = var11.bind(var0)(var10, var9);
                                    _fun5617_ip = 99;
                                    continue _fun5617;
                                    case 140: var3 = _closure2_slot3;
                                    var2 = var5.x;
                                    var6 = var4.concat;
                                    var1 = 'x';
                                    var1 = var6.bind(var4)(var1);
                                    var1 = var3.bind(var0)(var2, var1);
                                    var2 = var5.y;
                                    var6 = var4.concat;
                                    var1 = 'y';
                                    var1 = var6.bind(var4)(var1);
                                    var1 = var3.bind(var0)(var2, var1);
                                    _fun5617_ip = 253;
                                    continue _fun5617;
                                    case 199: var3 = var5.__makeNative;
                                    var2 = _closure2_slot1;
                                    var2 = var3.bind(var5)(var2);
                                    var3 = _closure2_slot2;
                                    var2 = var3.push;
                                    var1 = {};
                                    var1.nativeEventPath = var4;
                                    var4 = var5.__getNativeTag;
                                    var4 = var4.bind(var5)();
                                    var1.animatedValueTag = var4;
                                    var1 = var2.bind(var3)(var1);
                                }
                        case 253:
                            return var0;
                    }
                };
                var _closure2_slot3 = var6;
                var7 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 4;
                var2 = var4[var2];
                var4 = undefined;
                var9 = var7.bind(var4)(var2);
                var2 = 0;
                var8 = var5[var2];
                if (!var8) {
                    _fun5616_ip = 80;
                    continue _fun5616
                }
            case 70:
                var7 = var5[var2];
                var8 = var7.nativeEvent;
            case 80:
                var7 = 'Native driven events only support animated values contained inside `nativeEvent`.';
                var7 = var9.bind(var4)(var8, var7);
                var2 = var5[var2];
                var5 = var2.nativeEvent;
                var2 = new Array(0);
                var2 = var6.bind(var4)(var5, var2);
                var2 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 5;
                var0 = var5[var0];
                var4 = var2.bind(var4)(var0);
                var2 = var4.findNodeHandle;
                var0 = arg0;
                var2 = var2.bind(var4)(var0);
                var _closure2_slot4 = var2;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun5616_ip = 171;
                    continue _fun5616
                }
            case 156:
                var2 = var3.forEach;
                var0 = function(arg0) { // Environment: var1
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 6;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var5 = var1.API;
                    var4 = var5.addAnimatedEventToView;
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot0;
                    var1 = arg0;
                    var1 = var4.bind(var5)(var3, var2, var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
            case 171:
                var0 = {};
                var1 = function() {
                    _fun5619: for (var _fun5619_ip = 0;;) switch (_fun5619_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var1 = null;
                            if (!(var1 != var2)) {
                                _fun5619_ip = 34;
                                continue _fun5619
                            }
                        case 13:
                            var2 = _closure2_slot2;
                            var1 = var2.forEach;
                            var0 = function(arg0) { // Environment: var0
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 6;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var5 = var1.API;
                                var4 = var5.removeAnimatedEventFromView;
                                var3 = _closure2_slot4;
                                var2 = _closure2_slot0;
                                var1 = arg0;
                                var1 = var1.animatedValueTag;
                                var1 = var4.bind(var5)(var3, var2, var1);
                                return var0;
                            };
                            var0 = var1.bind(var2)(var0);
                        case 34:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.detach = var1;
                return var0;
        }
    };
    var _closure1_slot5 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var4 = var6[var0];
    var0 = undefined;
    var4 = var5.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0, arg1() {
            _fun5622: for (var _fun5622_ip = 0;;) switch (_fun5622_ip) {
                case 0:
                    var1 = arg1;
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var6 = _closure1_slot3;
                    var5 = _closure2_slot0;
                    var0 = undefined;
                    var5 = var6.bind(var0)(var2, var5);
                    var5 = new Array(0);
                    var2._listeners = var5;
                    var4 = function() { // Environment: var4
                        _fun5623: for (var _fun5623_ip = 0;;) switch (_fun5623_ip) {
                            case 0:
                                var0 = undefined;
                                var5 = undefined;
                                var4 = arguments.length;
                                var2 = global;
                                var2 = var2.Array;
                                var3 = var2.prototype;
                                var3 = Object.create(var3, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var8 = var3;
                                var7 = var4;
                                var2 = new var8[var2](var7, var6);
                                var3 = var2 instanceof Object ? var2 : var3;
                                var _closure4_slot0 = var3;
                                var2 = 0;
                                var6 = var2 < var4;
                                if (!var6) {
                                    _fun5623_ip = 68;
                                    continue _fun5623
                                }
                            case 53:
                                var6 = arguments[var2];
                                var3[var2] = var6;
                                var2 = var2 + 1;
                                if (var2 < var4) {
                                    _fun5623_ip = 53;
                                    continue _fun5623
                                }
                            case 68:
                                var2 = _closure3_slot0;
                                var3 = var2._listeners;
                                var2 = var3.forEach;
                                var1 = function(arg0) { // Environment: var1
                                    var3 = arg0;
                                    var2 = var3.apply;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var0 = var2.bind(var3)(var0, var1);
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var2._callListeners = var4;
                    var4 = arg0;
                    var2._argMapping = var4;
                    var4 = null;
                    if (!(var4 == var1)) {
                        _fun5622_ip = 106;
                        continue _fun5622
                    }
                case 70:
                    var5 = global;
                    var7 = var5.console;
                    var6 = var7.warn;
                    var5 = 'Animated.event now requires a second argument for options';
                    var5 = var6.bind(var7)(var5);
                    var5 = {};
                    var6 = false;
                    var5.useNativeDriver = var6;
                    var1 = var5;
                case 106:
                    var5 = var1.listener;
                    if (!var5) {
                        _fun5622_ip = 132;
                        continue _fun5622
                    }
                case 115:
                    var6 = var2.__addListener;
                    var5 = var1.listener;
                    var5 = var6.bind(var2)(var5);
                case 132:
                    var2._attachedEvent = var4;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 6;
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.shouldUseNativeDriver;
                    var3 = var3.bind(var4)(var1);
                    var2.__isNative = var3;
                    var1 = var1.platformConfig;
                    var2.__platformConfig = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = '__addListener';
        var0.key = var1;
        var1 = function arg0() {
            var0 = this;
            var2 = var0._listeners;
            var1 = var2.push;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = '__removeListener';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var2 = arg0;
            var _closure3_slot0 = var2;
            var3 = var1._listeners;
            var2 = var3.filter;
            var0 = function(arg0) { // Environment: var0
                var1 = _closure3_slot0;
                var0 = arg0;
                var0 = var0 !== var1;
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var1._listeners = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = '__attach';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var2 = this;
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var0 = 4;
            var3 = var3[var0];
            var0 = undefined;
            var5 = var4.bind(var0)(var3);
            var4 = var2.__isNative;
            var3 = 'Only native driven events need to be attached.';
            var3 = var5.bind(var0)(var4, var3);
            var6 = _closure1_slot5;
            var8 = var2._argMapping;
            var7 = var2.__platformConfig;
            var10 = arg0;
            var9 = arg1;
            var11 = undefined;
            var1 = var11[var6](var10, var9, var8, var7, var6);
            var2._attachedEvent = var1;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = '__detach';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun5629: for (var _fun5629_ip = 0;;) switch (_fun5629_ip) {
                case 0:
                    var1 = this;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var1.__isNative;
                    var2 = 'Only native driven events need to be detached.';
                    var2 = var4.bind(var0)(var3, var2);
                    var2 = var1._attachedEvent;
                    if (!var2) {
                        _fun5629_ip = 71;
                        continue _fun5629
                    }
                case 55:
                    var2 = var1._attachedEvent;
                    var1 = var2.detach;
                    var1 = var1.bind(var2)();
                case 71:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '__getHandler';
        var0.key = var5;
        var4 = function() {
            _fun5630: for (var _fun5630_ip = 0;;) switch (_fun5630_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var2 = var0.__isNative;
                    if (var2) {
                        _fun5630_ip = 25;
                        continue _fun5630
                    }
                case 18:
                    var1 = function() { // Environment: var1
                        _fun5631: for (var _fun5631_ip = 0;;) switch (_fun5631_ip) {
                            case 0:
                                var0 = undefined;
                                var5 = undefined;
                                var3 = arguments.length;
                                var2 = global;
                                var2 = var2.Array;
                                var4 = var2.prototype;
                                var4 = Object.create(var4, {
                                    constructor: {
                                        value: var2
                                    }
                                });
                                var9 = var4;
                                var8 = var3;
                                var2 = new var9[var2](var8, var7);
                                var4 = var2 instanceof Object ? var2 : var4;
                                var _closure4_slot0 = var4;
                                var2 = 0;
                                var6 = var2 < var3;
                                if (!var6) {
                                    _fun5631_ip = 68;
                                    continue _fun5631
                                }
                            case 53:
                                var6 = arguments[var2];
                                var4[var2] = var6;
                                var2 = var2 + 1;
                                if (var2 < var3) {
                                    _fun5631_ip = 53;
                                    continue _fun5631
                                }
                            case 68:
                                var2 = function arg0, arg1() {
                                    _fun5632: for (var _fun5632_ip = 0;;) switch (_fun5632_ip) {
                                        case 0:
                                            var3 = arg0;
                                            var2 = arg1;
                                            var5 = _closure1_slot1;
                                            var4 = _closure1_slot2;
                                            var0 = 2;
                                            var4 = var4[var0];
                                            var0 = undefined;
                                            var4 = var5.bind(var0)(var4);
                                            var4 = var3 instanceof var4;
                                            if (var4) {
                                                _fun5632_ip = 184;
                                                continue _fun5632
                                            }
                                        case 41:
                                            var4 = _closure1_slot1;
                                            var5 = _closure1_slot2;
                                            var1 = 3;
                                            var1 = var5[var1];
                                            var1 = var4.bind(var0)(var1);
                                            var1 = var3 instanceof var1;
                                            if (var1) {
                                                _fun5632_ip = 128;
                                                continue _fun5632
                                            }
                                        case 68:
                                            var4 = 'object';
                                            var1 = typeof var3;
                                            if (!(var4 === var1)) {
                                                _fun5632_ip = 206;
                                                continue _fun5632
                                            }
                                        case 82:
                                            var7 = var3;
                                            for (var4 in var7)
                                                case 96: {
                                                    case 105: var9 = var4;
                                                    var11 = _closure4_slot1;
                                                    var10 = var3[var9];
                                                    var9 = var2[var9];
                                                    var9 = var11.bind(var0)(var10, var9);
                                                    _fun5632_ip = 96;
                                                    continue _fun5632;
                                                    case 128: var4 = 'object';
                                                    var1 = typeof var2;
                                                    if (!(var4 === var1)) {
                                                        _fun5632_ip = 206;
                                                        continue _fun5632
                                                    }
                                                    case 139: var6 = _closure4_slot1;
                                                    var5 = var3.x;
                                                    var4 = var2.x;
                                                    var4 = var6.bind(var0)(var5, var4);
                                                    var5 = _closure4_slot1;
                                                    var4 = var3.y;
                                                    var1 = var2.y;
                                                    var1 = var5.bind(var0)(var4, var1);
                                                    _fun5632_ip = 206;
                                                    continue _fun5632;
                                                    case 184: var4 = 'number';
                                                    var1 = typeof var2;
                                                    if (!(var4 === var1)) {
                                                        _fun5632_ip = 206;
                                                        continue _fun5632
                                                    }
                                                    case 195: var1 = var3.setValue;
                                                    var1 = var1.bind(var3)(var2);
                                                }
                                        case 206:
                                            return var0;
                                    }
                                };
                                var _closure4_slot1 = var2;
                                var3 = _closure3_slot0;
                                var5 = var3._argMapping;
                                var2 = var5.forEach;
                                var1 = function(arg0, arg1) { // Environment: var1
                                    var3 = _closure4_slot1;
                                    var1 = _closure4_slot0;
                                    var0 = arg1;
                                    var2 = var1[var0];
                                    var0 = undefined;
                                    var1 = arg0;
                                    var1 = var3.bind(var0)(var1, var2);
                                    return var0;
                                };
                                var1 = var2.bind(var5)(var1);
                                var2 = var3._callListeners;
                                var1 = var2.apply;
                                var1 = var1.bind(var2)(var3, var4);
                                return var0;
                        }
                    };
                    return var1;
                case 25:
                    var0 = var0._callListeners;
                    return var0;
            }
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.attachNativeEventImpl = var3;
    var2.AnimatedEvent = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 348, 368, 44, 117, 349]);