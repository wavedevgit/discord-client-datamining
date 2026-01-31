// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        _fun4403: for (var _fun4403_ip = 0;;) switch (_fun4403_ip) {
            case 0:
                var4 = arg0;
                var6 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var0 = 1;
                var2 = var2 > var0;
                var3 = 0;
                if (!var2) {
                    _fun4403_ip = 36;
                    continue _fun4403
                }
            case 22:
                var2 = arguments[var0];
                var3 = 0;
                if (!(var6 !== var2)) {
                    _fun4403_ip = 36;
                    continue _fun4403
                }
            case 32:
                var3 = arguments[var0];
            case 36:
                var2 = arguments.length;
                var0 = 2;
                var5 = var2 > var0;
                var2 = 0;
                if (!var5) {
                    _fun4403_ip = 65;
                    continue _fun4403
                }
            case 51:
                var5 = arguments[var0];
                var2 = 0;
                if (!(var6 !== var5)) {
                    _fun4403_ip = 65;
                    continue _fun4403
                }
            case 61:
                var2 = arguments[var0];
            case 65:
                var0 = global;
                var1 = var0.Math;
                var0 = var1.max;
                var5 = null;
                if (!(var5 != var4)) {
                    _fun4403_ip = 87;
                    continue _fun4403
                }
            case 84:
                var2 = var4;
            case 87:
                var0 = var0.bind(var1)(var3, var2);
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        var4 = arg0;
        var0 = var4.nativeEvent;
        var6 = var0.clientX;
        var5 = var0.clientY;
        var0 = global;
        var3 = var0.Object;
        var2 = var3.assign;
        var1 = {};
        var0 = {};
        var0.clientX = var6;
        var0.clientY = var5;
        var0.pageX = var6;
        var0.pageY = var5;
        var5 = var4.timeStamp;
        var0.timestamp = var5;
        var1.nativeEvent = var0;
        var0 = {};
        var0 = var2.bind(var3)(var0, var4, var1);
        return var0;
    };
    var _closure1_slot12 = var0;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var5 = var1.Object;
    var3 = var5.freeze;
    var1 = {};
    var6 = {
        'DELAY': 'ERROR',
        'RESPONDER_GRANT': 'RESPONDER_INACTIVE_PRESS_IN',
        'RESPONDER_RELEASE': 'ERROR',
        'RESPONDER_TERMINATED': 'ERROR',
        'ENTER_PRESS_RECT': 'ERROR',
        'LEAVE_PRESS_RECT': 'ERROR',
        'LONG_PRESS_DETECTED': 'ERROR'
    };
    var1.NOT_RESPONDER = var6;
    var6 = {
        'DELAY': 'RESPONDER_ACTIVE_PRESS_IN',
        'RESPONDER_GRANT': 'ERROR',
        'RESPONDER_RELEASE': 'NOT_RESPONDER',
        'RESPONDER_TERMINATED': 'NOT_RESPONDER',
        'ENTER_PRESS_RECT': 'RESPONDER_INACTIVE_PRESS_IN',
        'LEAVE_PRESS_RECT': 'RESPONDER_INACTIVE_PRESS_OUT',
        'LONG_PRESS_DETECTED': 'ERROR'
    };
    var1.RESPONDER_INACTIVE_PRESS_IN = var6;
    var6 = {
        'DELAY': 'RESPONDER_ACTIVE_PRESS_OUT',
        'RESPONDER_GRANT': 'ERROR',
        'RESPONDER_RELEASE': 'NOT_RESPONDER',
        'RESPONDER_TERMINATED': 'NOT_RESPONDER',
        'ENTER_PRESS_RECT': 'RESPONDER_INACTIVE_PRESS_IN',
        'LEAVE_PRESS_RECT': 'RESPONDER_INACTIVE_PRESS_OUT',
        'LONG_PRESS_DETECTED': 'ERROR'
    };
    var1.RESPONDER_INACTIVE_PRESS_OUT = var6;
    var6 = {
        'DELAY': 'ERROR',
        'RESPONDER_GRANT': 'ERROR',
        'RESPONDER_RELEASE': 'NOT_RESPONDER',
        'RESPONDER_TERMINATED': 'NOT_RESPONDER',
        'ENTER_PRESS_RECT': 'RESPONDER_ACTIVE_PRESS_IN',
        'LEAVE_PRESS_RECT': 'RESPONDER_ACTIVE_PRESS_OUT',
        'LONG_PRESS_DETECTED': 'RESPONDER_ACTIVE_LONG_PRESS_IN'
    };
    var1.RESPONDER_ACTIVE_PRESS_IN = var6;
    var6 = {
        'DELAY': 'ERROR',
        'RESPONDER_GRANT': 'ERROR',
        'RESPONDER_RELEASE': 'NOT_RESPONDER',
        'RESPONDER_TERMINATED': 'NOT_RESPONDER',
        'ENTER_PRESS_RECT': 'RESPONDER_ACTIVE_PRESS_IN',
        'LEAVE_PRESS_RECT': 'RESPONDER_ACTIVE_PRESS_OUT',
        'LONG_PRESS_DETECTED': 'ERROR'
    };
    var1.RESPONDER_ACTIVE_PRESS_OUT = var6;
    var6 = {
        'DELAY': 'ERROR',
        'RESPONDER_GRANT': 'ERROR',
        'RESPONDER_RELEASE': 'NOT_RESPONDER',
        'RESPONDER_TERMINATED': 'NOT_RESPONDER',
        'ENTER_PRESS_RECT': 'RESPONDER_ACTIVE_LONG_PRESS_IN',
        'LEAVE_PRESS_RECT': 'RESPONDER_ACTIVE_LONG_PRESS_OUT',
        'LONG_PRESS_DETECTED': 'RESPONDER_ACTIVE_LONG_PRESS_IN'
    };
    var1.RESPONDER_ACTIVE_LONG_PRESS_IN = var6;
    var6 = {
        'DELAY': 'ERROR',
        'RESPONDER_GRANT': 'ERROR',
        'RESPONDER_RELEASE': 'NOT_RESPONDER',
        'RESPONDER_TERMINATED': 'NOT_RESPONDER',
        'ENTER_PRESS_RECT': 'RESPONDER_ACTIVE_LONG_PRESS_IN',
        'LEAVE_PRESS_RECT': 'RESPONDER_ACTIVE_LONG_PRESS_OUT',
        'LONG_PRESS_DETECTED': 'ERROR'
    };
    var1.RESPONDER_ACTIVE_LONG_PRESS_OUT = var6;
    var6 = {
        'DELAY': 'NOT_RESPONDER',
        'RESPONDER_GRANT': 'RESPONDER_INACTIVE_PRESS_IN',
        'RESPONDER_RELEASE': 'NOT_RESPONDER',
        'RESPONDER_TERMINATED': 'NOT_RESPONDER',
        'ENTER_PRESS_RECT': 'NOT_RESPONDER',
        'LEAVE_PRESS_RECT': 'NOT_RESPONDER',
        'LONG_PRESS_DETECTED': 'NOT_RESPONDER'
    };
    var1.ERROR = var6;
    var1 = var3.bind(var5)(var1);
    var _closure1_slot5 = var1;
    var1 = function arg0() {
        _fun4405: for (var _fun4405_ip = 0;;) switch (_fun4405_ip) {
            case 0:
                var2 = arg0;
                var0 = 'RESPONDER_ACTIVE_PRESS_IN';
                var0 = var0 === var2;
                if (var0) {
                    _fun4405_ip = 22;
                    continue _fun4405
                }
            case 14:
                var1 = 'RESPONDER_ACTIVE_LONG_PRESS_IN';
                var0 = var1 === var2;
            case 22:
                return var0;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function arg0() {
        _fun4406: for (var _fun4406_ip = 0;;) switch (_fun4406_ip) {
            case 0:
                var2 = arg0;
                var0 = 'RESPONDER_ACTIVE_PRESS_OUT';
                var0 = var0 === var2;
                if (var0) {
                    _fun4406_ip = 22;
                    continue _fun4406
                }
            case 14:
                var1 = 'RESPONDER_ACTIVE_PRESS_IN';
                var0 = var1 === var2;
            case 22:
                return var0;
        }
    };
    var _closure1_slot7 = var1;
    var1 = function arg0() {
        _fun4407: for (var _fun4407_ip = 0;;) switch (_fun4407_ip) {
            case 0:
                var2 = arg0;
                var0 = 'RESPONDER_INACTIVE_PRESS_IN';
                var0 = var0 === var2;
                if (var0) {
                    _fun4407_ip = 22;
                    continue _fun4407
                }
            case 14:
                var1 = 'RESPONDER_ACTIVE_PRESS_IN';
                var0 = var1 === var2;
            case 22:
                if (var0) {
                    _fun4407_ip = 33;
                    continue _fun4407
                }
            case 25:
                var1 = 'RESPONDER_ACTIVE_LONG_PRESS_IN';
                var0 = var1 === var2;
            case 33:
                return var0;
        }
    };
    var _closure1_slot8 = var1;
    var1 = 10;
    var _closure1_slot9 = var1;
    var1 = function() { // Environment: var4
        var4 = _closure1_slot4;
        var3 = function arg0() {
            var3 = this;
            var _closure3_slot0 = var3;
            var4 = _closure1_slot3;
            var2 = _closure2_slot0;
            var0 = undefined;
            var2 = var4.bind(var0)(var3, var2);
            var2 = null;
            var3._eventHandlers = var2;
            var3._hoverInDelayTimeout = var2;
            var3._hoverOutDelayTimeout = var2;
            var4 = false;
            var3._isHovered = var4;
            var3._longPressDelayTimeout = var2;
            var3._pressDelayTimeout = var2;
            var3._pressOutDelayTimeout = var2;
            var3._responderID = var2;
            var3._responderRegion = var2;
            var2 = 'NOT_RESPONDER';
            var3._touchState = var2;
            var1 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var1
                _fun4410: for (var _fun4410_ip = 0;;) switch (_fun4410_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = arg1;
                        var4 = arg2;
                        var5 = arg3;
                        var3 = arg4;
                        var2 = arg5;
                        if (var0) {
                            _fun4410_ip = 24;
                            continue _fun4410
                        }
                    case 21:
                        var0 = var1;
                    case 24:
                        if (var0) {
                            _fun4410_ip = 30;
                            continue _fun4410
                        }
                    case 27:
                        var0 = var4;
                    case 30:
                        if (var0) {
                            _fun4410_ip = 36;
                            continue _fun4410
                        }
                    case 33:
                        var0 = var5;
                    case 36:
                        if (var0) {
                            _fun4410_ip = 42;
                            continue _fun4410
                        }
                    case 39:
                        var0 = var3;
                    case 42:
                        if (var0) {
                            _fun4410_ip = 48;
                            continue _fun4410
                        }
                    case 45:
                        var0 = var2;
                    case 48:
                        if (!var0) {
                            _fun4410_ip = 90;
                            continue _fun4410
                        }
                    case 51:
                        var1 = _closure3_slot0;
                        var0 = {};
                        var5 = var2 + var5;
                        var0.bottom = var5;
                        var0.left = var3;
                        var3 = var3 + var4;
                        var0.right = var3;
                        var0.top = var2;
                        var1._responderRegion = var0;
                    case 90:
                        var0 = undefined;
                        return var0;
                }
            };
            var3._measureCallback = var1;
            var2 = var3.configure;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var _closure2_slot0 = var3;
        var0 = {};
        var2 = 'configure';
        var0.key = var2;
        var2 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0._config = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var2;
        var2 = new Array(16);
        var2[0] = var0;
        var0 = {};
        var5 = 'reset';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = var1._cancelHoverInDelayTimeout;
            var0 = var0.bind(var1)();
            var0 = var1._cancelHoverOutDelayTimeout;
            var0 = var0.bind(var1)();
            var0 = var1._cancelLongPressDelayTimeout;
            var0 = var0.bind(var1)();
            var0 = var1._cancelPressDelayTimeout;
            var0 = var0.bind(var1)();
            var0 = var1._cancelPressOutDelayTimeout;
            var0 = var0.bind(var1)();
            var0 = global;
            var3 = var0.Object;
            var2 = var3.freeze;
            var0 = {};
            var0 = var2.bind(var3)(var0);
            var1._config = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'getEventHandlers';
        var0.key = var5;
        var5 = function() {
            _fun4413: for (var _fun4413_ip = 0;;) switch (_fun4413_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._eventHandlers;
                    var1 = null;
                    if (!(var1 == var2)) {
                        _fun4413_ip = 31;
                        continue _fun4413
                    }
                case 15:
                    var1 = var0._createEventHandlers;
                    var1 = var1.bind(var0)();
                    var0._eventHandlers = var1;
                case 31:
                    var0 = var0._eventHandlers;
                    return var0;
            }
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = '_createEventHandlers';
        var0.key = var5;
        var5 = function() {
            _fun4414: for (var _fun4414_ip = 0;;) switch (_fun4414_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var5 = {};
                    var2 = function arg0() {
                        _fun4415: for (var _fun4415_ip = 0;;) switch (_fun4415_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0._config;
                                var2 = var0.onBlur;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun4415_ip = 35;
                                    continue _fun4415
                                }
                            case 25:
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                            case 35:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var5.onBlur = var2;
                    var2 = function arg0() {
                        _fun4416: for (var _fun4416_ip = 0;;) switch (_fun4416_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0._config;
                                var2 = var0.onFocus;
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun4416_ip = 35;
                                    continue _fun4416
                                }
                            case 25:
                                var1 = undefined;
                                var0 = arg0;
                                var0 = var2.bind(var1)(var0);
                            case 35:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var5.onFocus = var2;
                    var4 = {};
                    var2 = function() {
                        _fun4417: for (var _fun4417_ip = 0;;) switch (_fun4417_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0._config;
                                var0 = var0.disabled;
                                var1 = !var0;
                                var0 = null;
                                var0 = var0 == var1;
                                if (var0) {
                                    _fun4417_ip = 33;
                                    continue _fun4417
                                }
                            case 30:
                                var0 = var1;
                            case 33:
                                return var0;
                        }
                    };
                    var4.onStartShouldSetResponder = var2;
                    var2 = function arg0() {
                        _fun4418: for (var _fun4418_ip = 0;;) switch (_fun4418_ip) {
                            case 0:
                                var8 = arg0;
                                var _closure4_slot0 = var8;
                                var0 = var8.persist;
                                var0 = var0.bind(var8)();
                                var3 = _closure3_slot0;
                                var2 = var3._cancelPressOutDelayTimeout;
                                var2 = var2.bind(var3)();
                                var2 = var8.currentTarget;
                                var3._responderID = var2;
                                var2 = 'NOT_RESPONDER';
                                var3._touchState = var2;
                                var4 = var3._receiveSignal;
                                var2 = 'RESPONDER_GRANT';
                                var2 = var4.bind(var3)(var2, var8);
                                var5 = _closure1_slot11;
                                var3 = var3._config;
                                var3 = var3.delayPressIn;
                                var4 = undefined;
                                var5 = var5.bind(var4)(var3);
                                var3 = 0;
                                if (!(!(var5 > var3))) {
                                    _fun4418_ip = 128;
                                    continue _fun4418
                                }
                            case 106:
                                var7 = _closure3_slot0;
                                var6 = var7._receiveSignal;
                                var3 = 'DELAY';
                                var3 = var6.bind(var7)(var3, var8);
                                _fun4418_ip = 157;
                                continue _fun4418;
                            case 128:
                                var6 = _closure3_slot0;
                                var3 = global;
                                var7 = var3.setTimeout;
                                var3 = function() { // Environment: var1
                                    var3 = _closure3_slot0;
                                    var2 = var3._receiveSignal;
                                    var1 = _closure4_slot0;
                                    var0 = 'DELAY';
                                    var0 = var2.bind(var3)(var0, var1);
                                    var0 = undefined;
                                    return var0;
                                };
                                var3 = var7.bind(var4)(var3, var5);
                                var6._pressDelayTimeout = var3;
                            case 157:
                                var7 = _closure1_slot11;
                                var0 = _closure3_slot0;
                                var2 = var0._config;
                                var6 = var2.delayLongPress;
                                var2 = 500;
                                var3 = var2 - var5;
                                var2 = 10;
                                var2 = var7.bind(var4)(var6, var2, var3);
                                var3 = global;
                                var3 = var3.setTimeout;
                                var2 = var2 + var5;
                                var1 = function() { // Environment: var1
                                    var2 = _closure3_slot0;
                                    var1 = var2._handleLongPress;
                                    var0 = _closure4_slot0;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var1 = var3.bind(var4)(var1, var2);
                                var0._longPressDelayTimeout = var1;
                                var0 = var0._config;
                                var1 = var0.blockNativeResponder;
                                var0 = true;
                                var0 = var0 === var1;
                                return var0;
                        }
                    };
                    var4.onResponderGrant = var2;
                    var2 = function arg0() {
                        _fun4421: for (var _fun4421_ip = 0;;) switch (_fun4421_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure3_slot0;
                                var1 = var1._config;
                                var2 = var1.onPressMove;
                                var6 = null;
                                if (!(var6 != var2)) {
                                    _fun4421_ip = 35;
                                    continue _fun4421
                                }
                            case 28:
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3);
                            case 35:
                                var1 = _closure3_slot0;
                                var5 = var1._responderRegion;
                                if (!(var6 != var5)) {
                                    _fun4421_ip = 244;
                                    continue _fun4421
                                }
                            case 52:
                                var4 = _closure1_slot10;
                                var2 = undefined;
                                var4 = var4.bind(var2)(var3);
                                if (!(var6 != var4)) {
                                    _fun4421_ip = 248;
                                    continue _fun4421
                                }
                            case 73:
                                var2 = _closure3_slot0;
                                var2 = var2._touchActivatePosition;
                                if (!(var6 != var2)) {
                                    _fun4421_ip = 177;
                                    continue _fun4421
                                }
                            case 87:
                                var2 = _closure3_slot0;
                                var6 = var2._touchActivatePosition;
                                var7 = var6.pageX;
                                var6 = var4.pageX;
                                var8 = var7 - var6;
                                var2 = var2._touchActivatePosition;
                                var6 = var2.pageY;
                                var2 = var4.pageY;
                                var7 = var6 - var2;
                                var2 = global;
                                var6 = var2.Math;
                                var2 = var6.hypot;
                                var2 = var2.bind(var6)(var8, var7);
                                var1 = _closure1_slot9;
                                if (!(var2 > var1)) {
                                    _fun4421_ip = 177;
                                    continue _fun4421
                                }
                            case 163:
                                var2 = _closure3_slot0;
                                var1 = var2._cancelLongPressDelayTimeout;
                                var1 = var1.bind(var2)();
                            case 177:
                                var2 = _closure3_slot0;
                                var1 = var2._isTouchWithinResponderRegion;
                                var1 = var1.bind(var2)(var4, var5);
                                var4 = _closure3_slot0;
                                if (var1) {
                                    _fun4421_ip = 228;
                                    continue _fun4421
                                }
                            case 200:
                                var1 = var4._cancelLongPressDelayTimeout;
                                var1 = var1.bind(var4)();
                                var2 = var4._receiveSignal;
                                var1 = 'LEAVE_PRESS_RECT';
                                var1 = var2.bind(var4)(var1, var3);
                                _fun4421_ip = 244;
                                continue _fun4421;
                            case 228:
                                var2 = var4._receiveSignal;
                                var1 = 'ENTER_PRESS_RECT';
                                var1 = var2.bind(var4)(var1, var3);
                            case 244:
                                var1 = undefined;
                                return var1;
                            case 248:
                                var2 = _closure3_slot0;
                                var0 = var2._cancelLongPressDelayTimeout;
                                var0 = var0.bind(var2)();
                                var1 = var2._receiveSignal;
                                var0 = 'LEAVE_PRESS_RECT';
                                var0 = var1.bind(var2)(var0, var3);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4.onResponderMove = var2;
                    var2 = function arg0() {
                        var3 = _closure3_slot0;
                        var2 = var3._receiveSignal;
                        var1 = 'RESPONDER_RELEASE';
                        var0 = arg0;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var4.onResponderRelease = var2;
                    var2 = function arg0() {
                        var3 = _closure3_slot0;
                        var2 = var3._receiveSignal;
                        var1 = 'RESPONDER_TERMINATED';
                        var0 = arg0;
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                    };
                    var4.onResponderTerminate = var2;
                    var2 = function() {
                        _fun4424: for (var _fun4424_ip = 0;;) switch (_fun4424_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0._config;
                                var1 = var0.cancelable;
                                var0 = null;
                                var0 = var0 == var1;
                                if (var0) {
                                    _fun4424_ip = 31;
                                    continue _fun4424
                                }
                            case 28:
                                var0 = var1;
                            case 31:
                                return var0;
                        }
                    };
                    var4.onResponderTerminationRequest = var2;
                    var2 = function arg0() {
                        _fun4425: for (var _fun4425_ip = 0;;) switch (_fun4425_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = null;
                                if (!(var3 != var2)) {
                                    _fun4425_ip = 47;
                                    continue _fun4425
                                }
                            case 9:
                                var4 = var2.nativeEvent;
                                if (!(var3 != var4)) {
                                    _fun4425_ip = 47;
                                    continue _fun4425
                                }
                            case 19:
                                var0 = var4.hasOwnProperty;
                                if (!(var3 != var0)) {
                                    _fun4425_ip = 47;
                                    continue _fun4425
                                }
                            case 29:
                                var1 = var4.hasOwnProperty;
                                var0 = 'pointerType';
                                var0 = var1.bind(var4)(var0);
                                if (var0) {
                                    _fun4425_ip = 143;
                                    continue _fun4425
                                }
                            case 47:
                                var0 = var3 == var2;
                                var1 = undefined;
                                var4 = undefined;
                                if (var0) {
                                    _fun4425_ip = 64;
                                    continue _fun4425
                                }
                            case 58:
                                var4 = var2.currentTarget;
                            case 64:
                                var5 = var3 == var2;
                                var0 = undefined;
                                if (var5) {
                                    _fun4425_ip = 79;
                                    continue _fun4425
                                }
                            case 73:
                                var0 = var2.target;
                            case 79:
                                if (!(var4 !== var0)) {
                                    _fun4425_ip = 99;
                                    continue _fun4425
                                }
                            case 83:
                                if (!(var3 != var2)) {
                                    _fun4425_ip = 143;
                                    continue _fun4425
                                }
                            case 87:
                                var0 = var2.stopPropagation;
                                var0 = var0.bind(var2)();
                                _fun4425_ip = 143;
                                continue _fun4425;
                            case 99:
                                var0 = _closure3_slot0;
                                var4 = var0._config;
                                var0 = var4.onPress;
                                var5 = var4.disabled;
                                var3 = var3 != var0;
                                if (!var3) {
                                    _fun4425_ip = 135;
                                    continue _fun4425
                                }
                            case 129:
                                var4 = true;
                                var3 = var4 !== var5;
                            case 135:
                                if (!var3) {
                                    _fun4425_ip = 143;
                                    continue _fun4425
                                }
                            case 138:
                                var0 = var0.bind(var1)(var2);
                            case 143:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4.onClick = var2;
                    var6 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 2;
                    var3 = var3[var2];
                    var2 = undefined;
                    var6 = var6.bind(var2)(var3);
                    var3 = var6.shouldPressibilityUseW3CPointerEventsForHover;
                    var3 = var3.bind(var6)();
                    if (var3) {
                        _fun4414_ip = 173;
                        continue _fun4414
                    }
                case 141:
                    var3 = global;
                    var8 = var3.Object;
                    var7 = var8.assign;
                    var12 = {};
                    var9 = null;
                    var13 = var8;
                    var11 = var5;
                    var10 = var4;
                    var3 = var13[var7](var12, var11, var10, var9, var8);
                    return var3;
                case 173:
                    var3 = {};
                    var3.onPointerEnter = var2;
                    var3.onPointerLeave = var2;
                    var1 = var1._config;
                    var6 = var1.onHoverIn;
                    var _closure3_slot1 = var6;
                    var2 = var1.onHoverOut;
                    var _closure3_slot2 = var2;
                    var1 = null;
                    if (!(var1 != var6)) {
                        _fun4414_ip = 228;
                        continue _fun4414
                    }
                case 217:
                    var6 = function(arg0) { // Environment: var0
                        _fun4426: for (var _fun4426_ip = 0;;) switch (_fun4426_ip) {
                            case 0:
                                var5 = arg0;
                                var _closure4_slot0 = var5;
                                var3 = _closure3_slot0;
                                var2 = true;
                                var3._isHovered = var2;
                                var2 = var3._cancelHoverOutDelayTimeout;
                                var2 = var2.bind(var3)();
                                var3 = _closure3_slot1;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun4426_ip = 139;
                                    continue _fun4426
                                }
                            case 44:
                                var6 = _closure1_slot11;
                                var3 = _closure3_slot0;
                                var3 = var3._config;
                                var3 = var3.delayHoverIn;
                                var4 = undefined;
                                var3 = var6.bind(var4)(var3);
                                var6 = 0;
                                if (!(!(var3 > var6))) {
                                    _fun4426_ip = 100;
                                    continue _fun4426
                                }
                            case 80:
                                var6 = _closure3_slot1;
                                var2 = _closure1_slot12;
                                var2 = var2.bind(var4)(var5);
                                var2 = var6.bind(var4)(var2);
                                _fun4426_ip = 139;
                                continue _fun4426;
                            case 100:
                                var2 = var5.persist;
                                var2 = var2.bind(var5)();
                                var1 = _closure3_slot0;
                                var2 = global;
                                var2 = var2.setTimeout;
                                var0 = function() { // Environment: var0
                                    var2 = _closure3_slot1;
                                    var3 = _closure1_slot12;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = var3.bind(var0)(var1);
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var0 = var2.bind(var4)(var0, var3);
                                var1._hoverInDelayTimeout = var0;
                            case 139:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3.onPointerEnter = var6;
                case 228:
                    if (!(var1 != var2)) {
                        _fun4414_ip = 243;
                        continue _fun4414
                    }
                case 232:
                    var0 = function(arg0) { // Environment: var0
                        _fun4428: for (var _fun4428_ip = 0;;) switch (_fun4428_ip) {
                            case 0:
                                var5 = arg0;
                                var _closure4_slot0 = var5;
                                var2 = _closure3_slot0;
                                var2 = var2._isHovered;
                                if (!var2) {
                                    _fun4428_ip = 155;
                                    continue _fun4428
                                }
                            case 28:
                                var3 = _closure3_slot0;
                                var2 = false;
                                var3._isHovered = var2;
                                var2 = var3._cancelHoverInDelayTimeout;
                                var2 = var2.bind(var3)();
                                var3 = _closure3_slot2;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun4428_ip = 155;
                                    continue _fun4428
                                }
                            case 60:
                                var6 = _closure1_slot11;
                                var3 = _closure3_slot0;
                                var3 = var3._config;
                                var3 = var3.delayHoverOut;
                                var4 = undefined;
                                var3 = var6.bind(var4)(var3);
                                var6 = 0;
                                if (!(!(var3 > var6))) {
                                    _fun4428_ip = 116;
                                    continue _fun4428
                                }
                            case 96:
                                var6 = _closure3_slot2;
                                var2 = _closure1_slot12;
                                var2 = var2.bind(var4)(var5);
                                var2 = var6.bind(var4)(var2);
                                _fun4428_ip = 155;
                                continue _fun4428;
                            case 116:
                                var2 = var5.persist;
                                var2 = var2.bind(var5)();
                                var1 = _closure3_slot0;
                                var2 = global;
                                var2 = var2.setTimeout;
                                var0 = function() { // Environment: var0
                                    var2 = _closure3_slot2;
                                    var3 = _closure1_slot12;
                                    var1 = _closure4_slot0;
                                    var0 = undefined;
                                    var1 = var3.bind(var0)(var1);
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                var0 = var2.bind(var4)(var0, var3);
                                var1._hoverOutDelayTimeout = var0;
                            case 155:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3.onPointerLeave = var0;
                case 243:
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.assign;
                    var12 = {};
                    var13 = var2;
                    var11 = var5;
                    var10 = var4;
                    var9 = var3;
                    var0 = var13[var1](var12, var11, var10, var9, var8);
                    return var0;
            }
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = '_receiveSignal';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun4430: for (var _fun4430_ip = 0;;) switch (_fun4430_ip) {
                case 0:
                    var6 = arg0;
                    var5 = arg1;
                    var2 = this;
                    var _closure3_slot0 = var6;
                    var _closure3_slot1 = var5;
                    var1 = var5.nativeEvent;
                    var1 = var1.timestamp;
                    var3 = null;
                    if (!(var3 != var1)) {
                        _fun4430_ip = 78;
                        continue _fun4430
                    }
                case 37:
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 3;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var4);
                    var1 = var4.emitEvent;
                    var0 = function() { // Environment: var0
                        var0 = {};
                        var2 = _closure3_slot0;
                        var0.signal = var2;
                        var1 = _closure3_slot1;
                        var1 = var1.nativeEvent;
                        var1 = var1.timestamp;
                        var0.nativeTimestamp = var1;
                        return var0;
                    };
                    var0 = var1.bind(var4)(var0);
                case 78:
                    var4 = var2._touchState;
                    var0 = _closure1_slot5;
                    var8 = var0[var4];
                    var9 = var3 == var8;
                    var0 = undefined;
                    var1 = undefined;
                    if (var9) {
                        _fun4430_ip = 110;
                        continue _fun4430
                    }
                case 106:
                    var1 = var8[var6];
                case 110:
                    var8 = var2._responderID;
                    var8 = var3 == var8;
                    if (!var8) {
                        _fun4430_ip = 131;
                        continue _fun4430
                    }
                case 123:
                    var9 = 'RESPONDER_RELEASE';
                    var8 = var9 === var6;
                case 131:
                    if (var8) {
                        _fun4430_ip = 260;
                        continue _fun4430
                    }
                case 137:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var7 = 4;
                    var7 = var9[var7];
                    var9 = var8.bind(var0)(var7);
                    var8 = var3 != var1;
                    if (!var8) {
                        _fun4430_ip = 172;
                        continue _fun4430
                    }
                case 164:
                    var3 = 'ERROR';
                    var8 = var3 !== var1;
                case 172:
                    var3 = var2._responderID;
                    var7 = '<<host component>>';
                    var10 = 'number';
                    var3 = typeof var3;
                    if (!(var10 === var3)) {
                        _fun4430_ip = 201;
                        continue _fun4430
                    }
                case 195:
                    var7 = var2._responderID;
                case 201:
                    var14 = 'Pressability: Invalid signal `%s` for state `%s` on responder: %s';
                    var16 = undefined;
                    var15 = var8;
                    var13 = var6;
                    var12 = var4;
                    var11 = var7;
                    var3 = var16[var9](var15, var14, var13, var12, var11, var10);
                    if (!(var4 !== var1)) {
                        _fun4430_ip = 260;
                        continue _fun4430
                    }
                case 229:
                    var3 = var2._performTransitionSideEffects;
                    var16 = var2;
                    var15 = var4;
                    var14 = var1;
                    var13 = var6;
                    var12 = var5;
                    var3 = var16[var3](var15, var14, var13, var12, var11);
                    var2._touchState = var1;
                case 260:
                    return var0;
            }
        };
        var0.value = var5;
        var2[4] = var0;
        var0 = {};
        var5 = '_performTransitionSideEffects';
        var0.key = var5;
        var5 = function arg0, arg1, arg2, arg3() {
            _fun4432: for (var _fun4432_ip = 0;;) switch (_fun4432_ip) {
                case 0:
                    var8 = arg0;
                    var6 = arg1;
                    var7 = arg2;
                    var3 = arg3;
                    var2 = this;
                    var0 = 'RESPONDER_TERMINATED';
                    var0 = var0 === var7;
                    if (var0) {
                        _fun4432_ip = 34;
                        continue _fun4432
                    }
                case 26:
                    var1 = 'RESPONDER_RELEASE';
                    var0 = var1 === var7;
                case 34:
                    if (!var0) {
                        _fun4432_ip = 55;
                        continue _fun4432
                    }
                case 37:
                    var0 = null;
                    var2._touchActivatePosition = var0;
                    var0 = var2._cancelLongPressDelayTimeout;
                    var0 = var0.bind(var2)();
                case 55:
                    var0 = 'NOT_RESPONDER';
                    var1 = var0 === var8;
                    if (!var1) {
                        _fun4432_ip = 74;
                        continue _fun4432
                    }
                case 66:
                    var0 = 'RESPONDER_INACTIVE_PRESS_IN';
                    var1 = var0 === var6;
                case 74:
                    var5 = _closure1_slot7;
                    var0 = undefined;
                    var9 = var5.bind(var0)(var8);
                    var5 = !var9;
                    if (var9) {
                        _fun4432_ip = 103;
                        continue _fun4432
                    }
                case 94:
                    var9 = _closure1_slot7;
                    var5 = var9.bind(var0)(var6);
                case 103:
                    if (var1) {
                        _fun4432_ip = 109;
                        continue _fun4432
                    }
                case 106:
                    var1 = var5;
                case 109:
                    if (!var1) {
                        _fun4432_ip = 122;
                        continue _fun4432
                    }
                case 112:
                    var1 = var2._measureResponderRegion;
                    var1 = var1.bind(var2)();
                case 122:
                    var1 = _closure1_slot8;
                    var1 = var1.bind(var0)(var8);
                    if (!var1) {
                        _fun4432_ip = 165;
                        continue _fun4432
                    }
                case 134:
                    var1 = 'LONG_PRESS_DETECTED';
                    if (!(var1 === var7)) {
                        _fun4432_ip = 165;
                        continue _fun4432
                    }
                case 142:
                    var1 = var2._config;
                    var1 = var1.onLongPress;
                    var5 = null;
                    if (!(var5 != var1)) {
                        _fun4432_ip = 165;
                        continue _fun4432
                    }
                case 160:
                    var1 = var1.bind(var0)(var3);
                case 165:
                    var1 = _closure1_slot6;
                    var5 = var1.bind(var0)(var8);
                    var1 = var1.bind(var0)(var6);
                    if (var5) {
                        _fun4432_ip = 198;
                        continue _fun4432
                    }
                case 182:
                    if (!var1) {
                        _fun4432_ip = 198;
                        continue _fun4432
                    }
                case 185:
                    var6 = var2._activate;
                    var6 = var6.bind(var2)(var3);
                    _fun4432_ip = 221;
                    continue _fun4432;
                case 198:
                    var6 = var5;
                    if (!var5) {
                        _fun4432_ip = 207;
                        continue _fun4432
                    }
                case 204:
                    var6 = !var1;
                case 207:
                    if (!var6) {
                        _fun4432_ip = 221;
                        continue _fun4432
                    }
                case 210:
                    var6 = var2._deactivate;
                    var6 = var6.bind(var2)(var3);
                case 221:
                    var6 = _closure1_slot8;
                    var6 = var6.bind(var0)(var8);
                    if (!var6) {
                        _fun4432_ip = 363;
                        continue _fun4432
                    }
                case 236:
                    var6 = 'RESPONDER_RELEASE';
                    if (!(var6 === var7)) {
                        _fun4432_ip = 363;
                        continue _fun4432
                    }
                case 244:
                    if (var1) {
                        _fun4432_ip = 250;
                        continue _fun4432
                    }
                case 247:
                    var1 = var5;
                case 250:
                    if (var1) {
                        _fun4432_ip = 275;
                        continue _fun4432
                    }
                case 253:
                    var1 = var2._activate;
                    var1 = var1.bind(var2)(var3);
                    var1 = var2._deactivate;
                    var1 = var1.bind(var2)(var3);
                case 275:
                    var5 = var2._config;
                    var7 = var5.onLongPress;
                    var1 = var5.onPress;
                    var6 = var5.android_disableSound;
                    var5 = null;
                    if (!(var5 != var1)) {
                        _fun4432_ip = 363;
                        continue _fun4432
                    }
                case 304:
                    var5 = var5 != var7;
                    if (!var5) {
                        _fun4432_ip = 319;
                        continue _fun4432
                    }
                case 311:
                    var7 = 'RESPONDER_ACTIVE_LONG_PRESS_IN';
                    var5 = var7 === var8;
                case 319:
                    if (var5) {
                        _fun4432_ip = 363;
                        continue _fun4432
                    }
                case 322:
                    var5 = true;
                    if (!(var5 !== var6)) {
                        _fun4432_ip = 358;
                        continue _fun4432
                    }
                case 328:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 5;
                    var4 = var6[var4];
                    var5 = var5.bind(var0)(var4);
                    var4 = var5.playTouchSound;
                    var4 = var4.bind(var5)();
                case 358:
                    var1 = var1.bind(var0)(var3);
                case 363:
                    var1 = var2._cancelPressDelayTimeout;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var0.value = var5;
        var2[5] = var0;
        var0 = {};
        var5 = '_activate';
        var0.key = var5;
        var5 = function arg0() {
            _fun4433: for (var _fun4433_ip = 0;;) switch (_fun4433_ip) {
                case 0:
                    var2 = arg0;
                    var4 = this;
                    var0 = var4._config;
                    var1 = var0.onPressIn;
                    var3 = _closure1_slot10;
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var6 = var3.pageX;
                    var5 = var3.pageY;
                    var3 = {};
                    var3.pageX = var6;
                    var3.pageY = var5;
                    var4._touchActivatePosition = var3;
                    var3 = global;
                    var5 = var3.Date;
                    var3 = var5.now;
                    var3 = var3.bind(var5)();
                    var4._touchActivateTime = var3;
                    var3 = null;
                    if (!(var3 != var1)) {
                        _fun4433_ip = 96;
                        continue _fun4433
                    }
                case 91:
                    var1 = var1.bind(var0)(var2);
                case 96:
                    return var0;
            }
        };
        var0.value = var5;
        var2[6] = var0;
        var0 = {};
        var5 = '_deactivate';
        var0.key = var5;
        var5 = function arg0() {
            _fun4434: for (var _fun4434_ip = 0;;) switch (_fun4434_ip) {
                case 0:
                    var7 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var7;
                    var0 = var1._config;
                    var6 = var0.onPressOut;
                    var _closure3_slot1 = var6;
                    var0 = null;
                    if (!(var0 != var6)) {
                        _fun4434_ip = 195;
                        continue _fun4434
                    }
                case 37:
                    var10 = _closure1_slot11;
                    var3 = var1._config;
                    var9 = var3.minPressDuration;
                    var5 = undefined;
                    var8 = 0;
                    var3 = 130;
                    var12 = var10.bind(var5)(var9, var8, var3);
                    var3 = global;
                    var10 = var3.Date;
                    var9 = var10.now;
                    var10 = var9.bind(var10)();
                    var11 = var1._touchActivateTime;
                    var13 = var0 != var11;
                    var9 = 0;
                    if (!var13) {
                        _fun4434_ip = 105;
                        continue _fun4434
                    }
                case 102:
                    var9 = var11;
                case 105:
                    var9 = var10 - var9;
                    var11 = var3.Math;
                    var10 = var11.max;
                    var9 = var12 - var9;
                    var12 = _closure1_slot11;
                    var4 = var1._config;
                    var4 = var4.delayPressOut;
                    var4 = var12.bind(var5)(var4);
                    var4 = var10.bind(var11)(var9, var4);
                    if (!(!(var4 > var8))) {
                        _fun4434_ip = 162;
                        continue _fun4434
                    }
                case 155:
                    var6 = var6.bind(var5)(var7);
                    _fun4434_ip = 195;
                    continue _fun4434;
                case 162:
                    var6 = var7.persist;
                    var6 = var6.bind(var7)();
                    var3 = var3.setTimeout;
                    var2 = function() { // Environment: var2
                        var2 = _closure3_slot1;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var2 = var3.bind(var5)(var2, var4);
                    var1._pressOutDelayTimeout = var2;
                case 195:
                    var1._touchActivateTime = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[7] = var0;
        var0 = {};
        var5 = '_measureResponderRegion';
        var0.key = var5;
        var5 = function() {
            _fun4436: for (var _fun4436_ip = 0;;) switch (_fun4436_ip) {
                case 0:
                    var0 = this;
                    var2 = var0._responderID;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun4436_ip = 109;
                        continue _fun4436
                    }
                case 15:
                    var1 = var0._responderID;
                    var2 = 'number';
                    var1 = typeof var1;
                    if (!(var2 !== var1)) {
                        _fun4436_ip = 60;
                        continue _fun4436
                    }
                case 32:
                    var4 = var0._responderID;
                    var3 = var4.measure;
                    var2 = var0._measureCallback;
                    var1 = true;
                    var1 = var3.bind(var4)(var2, var1);
                    _fun4436_ip = 109;
                    continue _fun4436;
                case 60:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 6;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.measure;
                    var1 = var0._responderID;
                    var0 = var0._measureCallback;
                    var0 = var2.bind(var3)(var1, var0);
                case 109:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[8] = var0;
        var0 = {};
        var5 = '_isTouchWithinResponderRegion';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun4437: for (var _fun4437_ip = 0;;) switch (_fun4437_ip) {
                case 0:
                    var1 = arg0;
                    var0 = arg1;
                    var2 = this;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var3 = 7;
                    var7 = var5[var3];
                    var6 = undefined;
                    var9 = var4.bind(var6)(var7);
                    var8 = var9.normalizeRect;
                    var7 = var2._config;
                    var7 = var7.hitSlop;
                    var12 = var8.bind(var9)(var7);
                    var3 = var5[var3];
                    var4 = var4.bind(var6)(var3);
                    var3 = var4.normalizeRect;
                    var2 = var2._config;
                    var2 = var2.pressRectOffset;
                    var8 = var3.bind(var4)(var2);
                    var10 = var0.bottom;
                    var3 = var0.left;
                    var14 = var0.right;
                    var13 = var0.top;
                    var7 = null;
                    var2 = var10;
                    var5 = var3;
                    var9 = var14;
                    var4 = var13;
                    if (!(var7 != var12)) {
                        _fun4437_ip = 223;
                        continue _fun4437
                    }
                case 127:
                    var0 = var12.bottom;
                    var11 = var10;
                    if (!(var7 != var0)) {
                        _fun4437_ip = 148;
                        continue _fun4437
                    }
                case 139:
                    var0 = var12.bottom;
                    var11 = var10 + var0;
                case 148:
                    var0 = var12.left;
                    var10 = var3;
                    if (!(var7 != var0)) {
                        _fun4437_ip = 169;
                        continue _fun4437
                    }
                case 160:
                    var0 = var12.left;
                    var10 = var3 - var0;
                case 169:
                    var0 = var12.right;
                    var3 = var14;
                    if (!(var7 != var0)) {
                        _fun4437_ip = 190;
                        continue _fun4437
                    }
                case 181:
                    var0 = var12.right;
                    var3 = var14 + var0;
                case 190:
                    var14 = var12.top;
                    var0 = var13;
                    if (!(var7 != var14)) {
                        _fun4437_ip = 211;
                        continue _fun4437
                    }
                case 202:
                    var12 = var12.top;
                    var0 = var13 - var12;
                case 211:
                    var4 = var0;
                    var2 = var11;
                    var5 = var10;
                    var9 = var3;
                case 223:
                    var0 = var7 == var8;
                    var3 = undefined;
                    if (var0) {
                        _fun4437_ip = 237;
                        continue _fun4437
                    }
                case 232:
                    var3 = var8.bottom;
                case 237:
                    var10 = var7 != var3;
                    var0 = 30;
                    if (!var10) {
                        _fun4437_ip = 250;
                        continue _fun4437
                    }
                case 247:
                    var0 = var3;
                case 250:
                    var2 = var2 + var0;
                    var0 = var7 == var8;
                    var10 = undefined;
                    if (var0) {
                        _fun4437_ip = 268;
                        continue _fun4437
                    }
                case 263:
                    var10 = var8.left;
                case 268:
                    var11 = var7 != var10;
                    var0 = 20;
                    var3 = var0;
                    if (!var11) {
                        _fun4437_ip = 284;
                        continue _fun4437
                    }
                case 281:
                    var3 = var10;
                case 284:
                    var3 = var5 - var3;
                    var5 = var7 == var8;
                    var10 = undefined;
                    if (var5) {
                        _fun4437_ip = 302;
                        continue _fun4437
                    }
                case 297:
                    var10 = var8.right;
                case 302:
                    var11 = var7 != var10;
                    var5 = var0;
                    if (!var11) {
                        _fun4437_ip = 315;
                        continue _fun4437
                    }
                case 312:
                    var5 = var10;
                case 315:
                    var5 = var9 + var5;
                    var9 = var7 == var8;
                    var6 = undefined;
                    if (var9) {
                        _fun4437_ip = 333;
                        continue _fun4437
                    }
                case 328:
                    var6 = var8.top;
                case 333:
                    var7 = var7 != var6;
                    if (!var7) {
                        _fun4437_ip = 343;
                        continue _fun4437
                    }
                case 340:
                    var0 = var6;
                case 343:
                    var4 = var4 - var0;
                    var0 = var1.pageX;
                    var0 = var0 > var3;
                    if (!var0) {
                        _fun4437_ip = 370;
                        continue _fun4437
                    }
                case 360:
                    var3 = var1.pageX;
                    var0 = var3 < var5;
                case 370:
                    if (!var0) {
                        _fun4437_ip = 383;
                        continue _fun4437
                    }
                case 373:
                    var3 = var1.pageY;
                    var0 = var3 > var4;
                case 383:
                    if (!var0) {
                        _fun4437_ip = 396;
                        continue _fun4437
                    }
                case 386:
                    var1 = var1.pageY;
                    var0 = var1 < var2;
                case 396:
                    return var0;
            }
        };
        var0.value = var5;
        var2[9] = var0;
        var0 = {};
        var5 = '_handleLongPress';
        var0.key = var5;
        var5 = function arg0() {
            _fun4438: for (var _fun4438_ip = 0;;) switch (_fun4438_ip) {
                case 0:
                    var3 = this;
                    var1 = var3._touchState;
                    var0 = 'RESPONDER_ACTIVE_PRESS_IN';
                    var0 = var0 !== var1;
                    if (!var0) {
                        _fun4438_ip = 34;
                        continue _fun4438
                    }
                case 20:
                    var2 = var3._touchState;
                    var1 = 'RESPONDER_ACTIVE_LONG_PRESS_IN';
                    var0 = var1 !== var2;
                case 34:
                    if (var0) {
                        _fun4438_ip = 56;
                        continue _fun4438
                    }
                case 37:
                    var2 = var3._receiveSignal;
                    var1 = 'LONG_PRESS_DETECTED';
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                case 56:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[10] = var0;
        var0 = {};
        var5 = '_cancelHoverInDelayTimeout';
        var0.key = var5;
        var5 = function() {
            _fun4439: for (var _fun4439_ip = 0;;) switch (_fun4439_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._hoverInDelayTimeout;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun4439_ip = 42;
                        continue _fun4439
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1._hoverInDelayTimeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1._hoverInDelayTimeout = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[11] = var0;
        var0 = {};
        var5 = '_cancelHoverOutDelayTimeout';
        var0.key = var5;
        var5 = function() {
            _fun4440: for (var _fun4440_ip = 0;;) switch (_fun4440_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._hoverOutDelayTimeout;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun4440_ip = 42;
                        continue _fun4440
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1._hoverOutDelayTimeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1._hoverOutDelayTimeout = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[12] = var0;
        var0 = {};
        var5 = '_cancelLongPressDelayTimeout';
        var0.key = var5;
        var5 = function() {
            _fun4441: for (var _fun4441_ip = 0;;) switch (_fun4441_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._longPressDelayTimeout;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun4441_ip = 42;
                        continue _fun4441
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1._longPressDelayTimeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1._longPressDelayTimeout = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[13] = var0;
        var0 = {};
        var5 = '_cancelPressDelayTimeout';
        var0.key = var5;
        var5 = function() {
            _fun4442: for (var _fun4442_ip = 0;;) switch (_fun4442_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._pressDelayTimeout;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun4442_ip = 42;
                        continue _fun4442
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1._pressDelayTimeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1._pressDelayTimeout = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[14] = var0;
        var0 = {};
        var5 = '_cancelPressOutDelayTimeout';
        var0.key = var5;
        var5 = function() {
            _fun4443: for (var _fun4443_ip = 0;;) switch (_fun4443_ip) {
                case 0:
                    var1 = this;
                    var2 = var1._pressOutDelayTimeout;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun4443_ip = 42;
                        continue _fun4443
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1._pressOutDelayTimeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1._pressOutDelayTimeout = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var2[15] = var0;
        var0 = {};
        var5 = 'setLongPressDeactivationDistance';
        var0.key = var5;
        var1 = function arg0() {
            var0 = arg0;
            _closure1_slot9 = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var4.bind(var0)(var3, var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = function arg0() {
        _fun4445: for (var _fun4445_ip = 0;;) switch (_fun4445_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.nativeEvent;
                var4 = var1.changedTouches;
                var2 = var1.touches;
                var3 = null;
                if (!(var3 != var2)) {
                    _fun4445_ip = 38;
                    continue _fun4445
                }
            case 27:
                var5 = var2.length;
                var1 = 0;
                if (!(!(var5 > var1))) {
                    _fun4445_ip = 67;
                    continue _fun4445
                }
            case 38:
                if (!(var3 != var4)) {
                    _fun4445_ip = 53;
                    continue _fun4445
                }
            case 42:
                var5 = var4.length;
                var3 = 0;
                if (!(!(var5 > var3))) {
                    _fun4445_ip = 61;
                    continue _fun4445
                }
            case 53:
                var0 = var0.nativeEvent;
                _fun4445_ip = 65;
                continue _fun4445;
            case 61:
                var0 = var4[var3];
            case 65:
                _fun4445_ip = 71;
                continue _fun4445;
            case 67:
                var0 = var2[var1];
            case 71:
                return var0;
        }
    };
    var _closure1_slot10 = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 283, 284, 44, 285, 46, 288]);