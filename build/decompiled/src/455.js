// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: clearInteractionHandle, environment: var3
        _fun6051: for (var _fun6051_ip = 0;;) switch (_fun6051_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var0 = var1.handle;
                if (!var0) {
                    _fun6051_ip = 70;
                    continue _fun6051
                }
            case 15:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var2);
                var4 = var0.default;
                var2 = var4.clearInteractionHandle;
                var0 = var1.handle;
                var0 = var2.bind(var4)(var0);
                var0 = null;
                var1.handle = var0;
            case 70:
                if (!var3) {
                    _fun6051_ip = 87;
                    continue _fun6051
                }
            case 73:
                var2 = undefined;
                var1 = arg2;
                var0 = arg3;
                var0 = var3.bind(var2)(var1, var0);
            case 87:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var1 = 0;
    var6 = var5[var1];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var6 = var6.default;
    var6 = var6.currentCentroidXOfTouchesChangedAfter;
    var _closure1_slot2 = var6;
    var6 = var5[var1];
    var6 = var4.bind(var0)(var6);
    var6 = var6.default;
    var6 = var6.currentCentroidYOfTouchesChangedAfter;
    var _closure1_slot3 = var6;
    var6 = var5[var1];
    var6 = var4.bind(var0)(var6);
    var6 = var6.default;
    var6 = var6.previousCentroidXOfTouchesChangedAfter;
    var _closure1_slot4 = var6;
    var6 = var5[var1];
    var6 = var4.bind(var0)(var6);
    var6 = var6.default;
    var6 = var6.previousCentroidYOfTouchesChangedAfter;
    var _closure1_slot5 = var6;
    var6 = var5[var1];
    var6 = var4.bind(var0)(var6);
    var6 = var6.default;
    var6 = var6.currentCentroidX;
    var _closure1_slot6 = var6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.default;
    var1 = var1.currentCentroidY;
    var _closure1_slot7 = var1;
    var1 = {};
    var4 = function(arg0) { // Original name: _initializeGestureState, environment: var3
        var1 = arg0;
        var0 = 0;
        var1.moveX = var0;
        var1.moveY = var0;
        var1.x0 = var0;
        var1.y0 = var0;
        var1.dx = var0;
        var1.dy = var0;
        var1.vx = var0;
        var1.vy = var0;
        var1.numberActiveTouches = var0;
        var1._accountsForMovesUpTo = var0;
        var0 = undefined;
        return var0;
    };
    var1._initializeGestureState = var4;
    var4 = function(arg0, arg1) { // Original name: _updateGestureStateOnMove, environment: var3
        var2 = arg0;
        var1 = arg1;
        var0 = var1.numberActiveTouches;
        var2.numberActiveTouches = var0;
        var4 = _closure1_slot2;
        var3 = var2._accountsForMovesUpTo;
        var0 = undefined;
        var3 = var4.bind(var0)(var1, var3);
        var2.moveX = var3;
        var5 = _closure1_slot3;
        var3 = var2._accountsForMovesUpTo;
        var3 = var5.bind(var0)(var1, var3);
        var2.moveY = var3;
        var3 = var2._accountsForMovesUpTo;
        var7 = _closure1_slot4;
        var7 = var7.bind(var0)(var1, var3);
        var4 = var4.bind(var0)(var1, var3);
        var6 = _closure1_slot5;
        var6 = var6.bind(var0)(var1, var3);
        var3 = var5.bind(var0)(var1, var3);
        var5 = var2.dx;
        var4 = var4 - var7;
        var4 = var5 + var4;
        var5 = var2.dy;
        var3 = var3 - var6;
        var3 = var5 + var3;
        var6 = var1.mostRecentTimeStamp;
        var5 = var2._accountsForMovesUpTo;
        var6 = var6 - var5;
        var5 = var2.dx;
        var5 = var4 - var5;
        var5 = var5 / var6;
        var2.vx = var5;
        var5 = var2.dy;
        var5 = var3 - var5;
        var5 = var5 / var6;
        var2.vy = var5;
        var2.dx = var4;
        var2.dy = var3;
        var1 = var1.mostRecentTimeStamp;
        var2._accountsForMovesUpTo = var1;
        return var0;
    };
    var1._updateGestureStateOnMove = var4;
    var4 = function(arg0) { // Original name: create, environment: var3
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = null;
        var0.handle = var2;
        var _closure2_slot1 = var0;
        var0 = {
            'stateID': null,
            'moveX': 0,
            'moveY': 0,
            'x0': 0,
            'y0': 0,
            'dx': 0,
            'dy': 0,
            'vx': 0,
            'vy': 0,
            'numberActiveTouches': 0,
            '_accountsForMovesUpTo': 0
        };
        var2 = global;
        var3 = var2.Math;
        var2 = var3.random;
        var2 = var2.bind(var3)();
        var0.stateID = var2;
        var _closure2_slot2 = var0;
        var0 = {};
        var2 = {};
        var3 = function(arg0) { // Original name: onStartShouldSetResponder, environment: var1
            _fun6055: for (var _fun6055_ip = 0;;) switch (_fun6055_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = var0.onStartShouldSetPanResponder;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun6055_ip = 45;
                        continue _fun6055
                    }
                case 22:
                    var4 = _closure2_slot0;
                    var3 = var4.onStartShouldSetPanResponder;
                    var2 = _closure2_slot2;
                    var1 = arg0;
                    var0 = var3.bind(var4)(var1, var2);
                case 45:
                    return var0;
            }
        };
        var2.onStartShouldSetResponder = var3;
        var3 = function(arg0) { // Original name: onMoveShouldSetResponder, environment: var1
            _fun6056: for (var _fun6056_ip = 0;;) switch (_fun6056_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = var0.onMoveShouldSetPanResponder;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun6056_ip = 45;
                        continue _fun6056
                    }
                case 22:
                    var4 = _closure2_slot0;
                    var3 = var4.onMoveShouldSetPanResponder;
                    var2 = _closure2_slot2;
                    var1 = arg0;
                    var0 = var3.bind(var4)(var1, var2);
                case 45:
                    return var0;
            }
        };
        var2.onMoveShouldSetResponder = var3;
        var3 = function(arg0) { // Original name: onStartShouldSetResponderCapture, environment: var1
            _fun6057: for (var _fun6057_ip = 0;;) switch (_fun6057_ip) {
                case 0:
                    var4 = arg0;
                    var0 = var4.nativeEvent;
                    var0 = var0.touches;
                    var1 = var0.length;
                    var0 = 1;
                    if (!(var0 === var1)) {
                        _fun6057_ip = 52;
                        continue _fun6057
                    }
                case 27:
                    var2 = _closure1_slot8;
                    var1 = var2._initializeGestureState;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                case 52:
                    var2 = _closure2_slot2;
                    var0 = var4.touchHistory;
                    var0 = var0.numberActiveTouches;
                    var2.numberActiveTouches = var0;
                    var0 = _closure2_slot0;
                    var2 = var0.onStartShouldSetPanResponderCapture;
                    var0 = null;
                    var0 = var0 != var2;
                    if (!var0) {
                        _fun6057_ip = 116;
                        continue _fun6057
                    }
                case 96:
                    var3 = _closure2_slot0;
                    var2 = var3.onStartShouldSetPanResponderCapture;
                    var1 = _closure2_slot2;
                    var0 = var2.bind(var3)(var4, var1);
                case 116:
                    return var0;
            }
        };
        var2.onStartShouldSetResponderCapture = var3;
        var3 = function(arg0) { // Original name: onMoveShouldSetResponderCapture, environment: var1
            _fun6058: for (var _fun6058_ip = 0;;) switch (_fun6058_ip) {
                case 0:
                    var5 = arg0;
                    var6 = var5.touchHistory;
                    var0 = _closure2_slot2;
                    var1 = var0._accountsForMovesUpTo;
                    var0 = var6.mostRecentTimeStamp;
                    var0 = var1 !== var0;
                    if (!var0) {
                        _fun6058_ip = 100;
                        continue _fun6058
                    }
                case 35:
                    var4 = _closure1_slot8;
                    var3 = var4._updateGestureStateOnMove;
                    var1 = _closure2_slot2;
                    var1 = var3.bind(var4)(var1, var6);
                    var1 = _closure2_slot0;
                    var1 = var1.onMoveShouldSetPanResponderCapture;
                    var3 = !var1;
                    var1 = !var3;
                    if (var3) {
                        _fun6058_ip = 97;
                        continue _fun6058
                    }
                case 77:
                    var4 = _closure2_slot0;
                    var3 = var4.onMoveShouldSetPanResponderCapture;
                    var2 = _closure2_slot2;
                    var1 = var3.bind(var4)(var5, var2);
                case 97:
                    var0 = var1;
                case 100:
                    return var0;
            }
        };
        var2.onMoveShouldSetResponderCapture = var3;
        var3 = function(arg0) { // Original name: onResponderGrant, environment: var1
            _fun6059: for (var _fun6059_ip = 0;;) switch (_fun6059_ip) {
                case 0:
                    var4 = arg0;
                    var0 = _closure2_slot1;
                    var0 = var0.handle;
                    if (var0) {
                        _fun6059_ip = 69;
                        continue _fun6059
                    }
                case 19:
                    var2 = _closure2_slot1;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 1;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var5.bind(var0)(var3);
                    var3 = var0.default;
                    var0 = var3.createInteractionHandle;
                    var0 = var0.bind(var3)();
                    var2.handle = var0;
                case 69:
                    var2 = _closure2_slot2;
                    var6 = _closure1_slot6;
                    var3 = var4.touchHistory;
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var2.x0 = var3;
                    var3 = _closure1_slot7;
                    var0 = var4.touchHistory;
                    var0 = var3.bind(var5)(var0);
                    var2.y0 = var0;
                    var0 = 0;
                    var2.dx = var0;
                    var2.dy = var0;
                    var0 = _closure2_slot0;
                    var0 = var0.onPanResponderGrant;
                    if (!var0) {
                        _fun6059_ip = 167;
                        continue _fun6059
                    }
                case 147:
                    var3 = _closure2_slot0;
                    var2 = var3.onPanResponderGrant;
                    var0 = _closure2_slot2;
                    var0 = var2.bind(var3)(var4, var0);
                case 167:
                    var0 = _closure2_slot0;
                    var2 = var0.onShouldBlockNativeResponder;
                    var0 = null;
                    var0 = var0 == var2;
                    if (var0) {
                        _fun6059_ip = 206;
                        continue _fun6059
                    }
                case 186:
                    var3 = _closure2_slot0;
                    var2 = var3.onShouldBlockNativeResponder;
                    var1 = _closure2_slot2;
                    var0 = var2.bind(var3)(var4, var1);
                case 206:
                    return var0;
            }
        };
        var2.onResponderGrant = var3;
        var3 = function(arg0) { // Original name: onResponderReject, environment: var1
            var5 = _closure1_slot9;
            var9 = _closure2_slot1;
            var1 = _closure2_slot0;
            var8 = var1.onPanResponderReject;
            var6 = _closure2_slot2;
            var0 = undefined;
            var7 = arg0;
            var10 = undefined;
            var1 = var10[var5](var9, var8, var7, var6, var5);
            return var0;
        };
        var2.onResponderReject = var3;
        var3 = function(arg0) { // Original name: onResponderRelease, environment: var1
            var6 = _closure1_slot9;
            var10 = _closure2_slot1;
            var2 = _closure2_slot0;
            var9 = var2.onPanResponderRelease;
            var3 = _closure2_slot2;
            var0 = undefined;
            var8 = arg0;
            var11 = undefined;
            var7 = var3;
            var2 = var11[var6](var10, var9, var8, var7, var6);
            var2 = _closure1_slot8;
            var1 = var2._initializeGestureState;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var2.onResponderRelease = var3;
        var3 = function(arg0) { // Original name: onResponderStart, environment: var1
            _fun6062: for (var _fun6062_ip = 0;;) switch (_fun6062_ip) {
                case 0:
                    var3 = arg0;
                    var1 = var3.touchHistory;
                    var2 = _closure2_slot2;
                    var1 = var1.numberActiveTouches;
                    var2.numberActiveTouches = var1;
                    var1 = _closure2_slot0;
                    var1 = var1.onPanResponderStart;
                    if (!var1) {
                        _fun6062_ip = 61;
                        continue _fun6062
                    }
                case 41:
                    var2 = _closure2_slot0;
                    var1 = var2.onPanResponderStart;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var3, var0);
                case 61:
                    var0 = undefined;
                    return var0;
            }
        };
        var2.onResponderStart = var3;
        var3 = function(arg0) { // Original name: onResponderMove, environment: var1
            _fun6063: for (var _fun6063_ip = 0;;) switch (_fun6063_ip) {
                case 0:
                    var3 = arg0;
                    var5 = var3.touchHistory;
                    var1 = _closure2_slot2;
                    var2 = var1._accountsForMovesUpTo;
                    var1 = var5.mostRecentTimeStamp;
                    if (!(var2 !== var1)) {
                        _fun6063_ip = 88;
                        continue _fun6063
                    }
                case 32:
                    var4 = _closure1_slot8;
                    var2 = var4._updateGestureStateOnMove;
                    var1 = _closure2_slot2;
                    var1 = var2.bind(var4)(var1, var5);
                    var1 = _closure2_slot0;
                    var1 = var1.onPanResponderMove;
                    if (!var1) {
                        _fun6063_ip = 88;
                        continue _fun6063
                    }
                case 68:
                    var2 = _closure2_slot0;
                    var1 = var2.onPanResponderMove;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var3, var0);
                case 88:
                    var0 = undefined;
                    return var0;
            }
        };
        var2.onResponderMove = var3;
        var3 = function(arg0) { // Original name: onResponderEnd, environment: var1
            var5 = arg0;
            var1 = var5.touchHistory;
            var4 = _closure2_slot2;
            var1 = var1.numberActiveTouches;
            var4.numberActiveTouches = var1;
            var3 = _closure1_slot9;
            var9 = _closure2_slot1;
            var0 = _closure2_slot0;
            var8 = var0.onPanResponderEnd;
            var0 = undefined;
            var10 = undefined;
            var7 = var5;
            var6 = var4;
            var1 = var10[var3](var9, var8, var7, var6, var5);
            return var0;
        };
        var2.onResponderEnd = var3;
        var3 = function(arg0) { // Original name: onResponderTerminate, environment: var1
            var6 = _closure1_slot9;
            var10 = _closure2_slot1;
            var2 = _closure2_slot0;
            var9 = var2.onPanResponderTerminate;
            var3 = _closure2_slot2;
            var0 = undefined;
            var8 = arg0;
            var11 = undefined;
            var7 = var3;
            var2 = var11[var6](var10, var9, var8, var7, var6);
            var2 = _closure1_slot8;
            var1 = var2._initializeGestureState;
            var1 = var1.bind(var2)(var3);
            return var0;
        };
        var2.onResponderTerminate = var3;
        var3 = function(arg0) { // Original name: onResponderTerminationRequest, environment: var1
            _fun6066: for (var _fun6066_ip = 0;;) switch (_fun6066_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var2 = var0.onPanResponderTerminationRequest;
                    var0 = null;
                    var0 = var0 == var2;
                    if (var0) {
                        _fun6066_ip = 45;
                        continue _fun6066
                    }
                case 22:
                    var4 = _closure2_slot0;
                    var3 = var4.onPanResponderTerminationRequest;
                    var2 = _closure2_slot2;
                    var1 = arg0;
                    var0 = var3.bind(var4)(var1, var2);
                case 45:
                    return var0;
            }
        };
        var2.onResponderTerminationRequest = var3;
        var0.panHandlers = var2;
        var1 = function() { // Original name: getInteractionHandle, environment: var1
            var0 = _closure2_slot1;
            var0 = var0.handle;
            return var0;
        };
        var0.getInteractionHandle = var1;
        return var0;
    };
    var1.create = var4;
    var _closure1_slot8 = var1;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [456, 360]);