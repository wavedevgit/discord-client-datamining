// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun45084: for (var _fun45084_ip = 0;;) switch (_fun45084_ip) {
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
                _fun45084_ip = 74;
                continue _fun45084;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var7 = var6[var1];
    var4 = arg3;
    var4 = var4.bind(var0)(var7);
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.Component;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var7 = var1.Animated;
    var _closure1_slot7 = var7;
    var1 = var1.Platform;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.jsx;
    var _closure1_slot8 = var1;
    var1 = {
        'UNDETERMINED': 0,
        'BEGAN': 1,
        'MOVED_OUTSIDE': 2
    };
    var _closure1_slot9 = var1;
    var3 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun45088: for (var _fun45088_ip = 0;;) switch (_fun45088_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var9 = undefined;
                    var6 = _closure1_slot2;
                    var3 = _closure2_slot0;
                    var3 = var6.bind(var4)(var5, var3);
                    var6 = arguments.length;
                    var7 = global;
                    var3 = var7.Array;
                    var8 = var3.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var8;
                    var13 = var6;
                    var3 = new var14[var3](var13, var12);
                    var8 = var3 instanceof Object ? var3 : var8;
                    var3 = 0;
                    var10 = var3 < var6;
                    if (!var10) {
                        _fun45088_ip = 87;
                        continue _fun45088
                    }
                case 72:
                    var10 = arguments[var3];
                    var8[var3] = var10;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun45088_ip = 72;
                        continue _fun45088
                    }
                case 87:
                    var3 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var6 = var0.bind(var6)(var8);
                    var0 = _closure1_slot5;
                    var10 = var0.bind(var4)(var3);
                    var3 = _closure1_slot4;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun45088_ip = 142;
                        continue _fun45088
                    }
                case 129:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var6);
                    _fun45088_ip = 184;
                    continue _fun45088;
                case 142:
                    var9 = var7.Reflect;
                    var8 = var9.construct;
                    var7 = var6;
                    if (var7) {
                        _fun45088_ip = 163;
                        continue _fun45088
                    }
                case 159:
                    var7 = new Array(0);
                case 163:
                    var6 = _closure1_slot5;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var8.bind(var9)(var10, var7, var6);
                case 184:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = false;
                    var0.longPressDetected = var3;
                    var3 = true;
                    var0.pointerInside = var3;
                    var2 = _closure1_slot9;
                    var2 = var2.UNDETERMINED;
                    var0.STATE = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun45089: for (var _fun45089_ip = 0;;) switch (_fun45089_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.nativeEvent;
                                var1 = var0.pointerInside;
                                var2 = _closure3_slot0;
                                var2 = var2.pointerInside;
                                if (!(var2 !== var1)) {
                                    _fun45089_ip = 65;
                                    continue _fun45089
                                }
                            case 32:
                                var3 = _closure3_slot0;
                                if (var1) {
                                    _fun45089_ip = 53;
                                    continue _fun45089
                                }
                            case 39:
                                var2 = var3.onMoveOut;
                                var2 = var2.bind(var3)();
                                _fun45089_ip = 65;
                                continue _fun45089;
                            case 53:
                                var2 = var3.onMoveIn;
                                var2 = var2.bind(var3)();
                            case 65:
                                var0 = _closure3_slot0;
                                var0.pointerInside = var1;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onGestureEvent = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun45090: for (var _fun45090_ip = 0;;) switch (_fun45090_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.nativeEvent;
                                var4 = var0.state;
                                var3 = _closure1_slot0;
                                var0 = _closure1_slot1;
                                var6 = 8;
                                var2 = var0[var6];
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var2 = var2.State;
                                var2 = var2.CANCELLED;
                                if (!(var4 !== var2)) {
                                    _fun45090_ip = 330;
                                    continue _fun45090
                                }
                            case 58:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var2 = var2[var6];
                                var2 = var3.bind(var0)(var2);
                                var2 = var2.State;
                                var2 = var2.FAILED;
                                if (!(var4 !== var2)) {
                                    _fun45090_ip = 330;
                                    continue _fun45090
                                }
                            case 94:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var2 = var2[var6];
                                var2 = var3.bind(var0)(var2);
                                var2 = var2.State;
                                var2 = var2.BEGAN;
                                if (!(var4 === var2)) {
                                    _fun45090_ip = 157;
                                    continue _fun45090
                                }
                            case 127:
                                var3 = _closure3_slot0;
                                var5 = var3.STATE;
                                var3 = _closure1_slot9;
                                var3 = var3.UNDETERMINED;
                                if (!(var5 !== var3)) {
                                    _fun45090_ip = 314;
                                    continue _fun45090
                                }
                            case 157:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var6];
                                var3 = var5.bind(var0)(var3);
                                var3 = var3.State;
                                var3 = var3.END;
                                if (!(var4 === var3)) {
                                    _fun45090_ip = 358;
                                    continue _fun45090
                                }
                            case 193:
                                var4 = _closure3_slot0;
                                var4 = var4.longPressDetected;
                                var4 = !var4;
                                if (!var4) {
                                    _fun45090_ip = 236;
                                    continue _fun45090
                                }
                            case 212:
                                var5 = _closure3_slot0;
                                var6 = var5.STATE;
                                var5 = _closure1_slot9;
                                var5 = var5.MOVED_OUTSIDE;
                                var4 = var6 !== var5;
                            case 236:
                                if (!var4) {
                                    _fun45090_ip = 255;
                                    continue _fun45090
                                }
                            case 239:
                                var5 = _closure3_slot0;
                                var6 = var5.pressOutTimeout;
                                var5 = null;
                                var4 = var5 === var6;
                            case 255:
                                var6 = _closure3_slot0;
                                var5 = var6.handleGoToUndetermined;
                                var5 = var5.bind(var6)();
                                if (!var4) {
                                    _fun45090_ip = 358;
                                    continue _fun45090
                                }
                            case 274:
                                var4 = _closure3_slot0;
                                var4 = var4.props;
                                var5 = var4.onPress;
                                var4 = null;
                                if (!(var4 != var5)) {
                                    _fun45090_ip = 358;
                                    continue _fun45090
                                }
                            case 294:
                                var3 = _closure3_slot0;
                                var4 = var3.props;
                                var3 = var4.onPress;
                                var3 = var3.bind(var4)();
                                _fun45090_ip = 358;
                                continue _fun45090;
                            case 314:
                                var3 = _closure3_slot0;
                                var2 = var3.handlePressIn;
                                var2 = var2.bind(var3)();
                                _fun45090_ip = 358;
                                continue _fun45090;
                            case 330:
                                var3 = _closure3_slot0;
                                var2 = var3.moveToState;
                                var1 = _closure1_slot9;
                                var1 = var1.UNDETERMINED;
                                var1 = var2.bind(var3)(var1);
                            case 358:
                                return var0;
                        }
                    };
                    var0.onHandlerStateChange = var2;
                    var1 = function() { // Environment: var1
                        _fun45091: for (var _fun45091_ip = 0;;) switch (_fun45091_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = true;
                                var2.longPressDetected = var1;
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var2 = var1.onLongPress;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun45091_ip = 55;
                                    continue _fun45091
                                }
                            case 36:
                                var0 = _closure3_slot0;
                                var1 = var0.props;
                                var0 = var1.onLongPress;
                                var0 = var0.bind(var1)();
                            case 55:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onLongPressDetected = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'handlePressIn';
        var4.key = var0;
        var0 = function() {
            _fun45092: for (var _fun45092_ip = 0;;) switch (_fun45092_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1.props;
                    var2 = var2.delayPressIn;
                    if (var2) {
                        _fun45092_ip = 49;
                        continue _fun45092
                    }
                case 23:
                    var3 = var1.moveToState;
                    var2 = _closure1_slot9;
                    var2 = var2.BEGAN;
                    var2 = var3.bind(var1)(var2);
                    _fun45092_ip = 87;
                    continue _fun45092;
                case 49:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var2 = var1.props;
                    var3 = var2.delayPressIn;
                    var2 = undefined;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var2 = var1.moveToState;
                        var0 = _closure1_slot9;
                        var0 = var0.BEGAN;
                        var0 = var2.bind(var1)(var0);
                        var0 = null;
                        var1.pressInTimeout = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var4.bind(var2)(var0, var3);
                    var1.pressInTimeout = var0;
                case 87:
                    var0 = var1.props;
                    var0 = var0.onLongPress;
                    if (!var0) {
                        _fun45092_ip = 165;
                        continue _fun45092
                    }
                case 101:
                    var0 = var1.props;
                    var2 = var0.delayPressIn;
                    if (var2) {
                        _fun45092_ip = 117;
                        continue _fun45092
                    }
                case 115:
                    var2 = 0;
                case 117:
                    var0 = var1.props;
                    var0 = var0.delayLongPress;
                    if (var0) {
                        _fun45092_ip = 133;
                        continue _fun45092
                    }
                case 131:
                    var0 = 0;
                case 133:
                    var4 = var2 + var0;
                    var0 = global;
                    var3 = var0.setTimeout;
                    var2 = var1.onLongPressDetected;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var4);
                    var1.longPressTimeout = var0;
                case 165:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(10);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleMoveOutside';
        var4.key = var6;
        var6 = function() {
            _fun45094: for (var _fun45094_ip = 0;;) switch (_fun45094_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var0 = var1.props;
                    var0 = var0.delayPressOut;
                    if (var0) {
                        _fun45094_ip = 49;
                        continue _fun45094
                    }
                case 23:
                    var3 = var1.moveToState;
                    var0 = _closure1_slot9;
                    var0 = var0.MOVED_OUTSIDE;
                    var0 = var3.bind(var1)(var0);
                    _fun45094_ip = 96;
                    continue _fun45094;
                case 49:
                    var0 = var1.pressOutTimeout;
                    if (var0) {
                        _fun45094_ip = 90;
                        continue _fun45094
                    }
                case 58:
                    var3 = global;
                    var5 = var3.setTimeout;
                    var3 = var1.props;
                    var4 = var3.delayPressOut;
                    var3 = undefined;
                    var2 = function() { // Environment: var2
                        var1 = _closure3_slot0;
                        var2 = var1.moveToState;
                        var0 = _closure1_slot9;
                        var0 = var0.MOVED_OUTSIDE;
                        var0 = var2.bind(var1)(var0);
                        var0 = null;
                        var1.pressOutTimeout = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var5.bind(var3)(var2, var4);
                case 90:
                    var1.pressOutTimeout = var0;
                case 96:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'handleGoToUndetermined';
        var4.key = var6;
        var6 = function() {
            _fun45096: for (var _fun45096_ip = 0;;) switch (_fun45096_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var3 = global;
                    var5 = var3.clearTimeout;
                    var4 = var2.pressOutTimeout;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var4 = var2.props;
                    var4 = var4.delayPressOut;
                    if (var4) {
                        _fun45096_ip = 111;
                        continue _fun45096
                    }
                case 44:
                    var6 = var2.STATE;
                    var5 = _closure1_slot9;
                    var5 = var5.UNDETERMINED;
                    if (!(var6 === var5)) {
                        _fun45096_ip = 88;
                        continue _fun45096
                    }
                case 67:
                    var6 = var2.moveToState;
                    var5 = _closure1_slot9;
                    var5 = var5.BEGAN;
                    var5 = var6.bind(var2)(var5);
                case 88:
                    var5 = var2.moveToState;
                    var4 = _closure1_slot9;
                    var4 = var4.UNDETERMINED;
                    var4 = var5.bind(var2)(var4);
                    _fun45096_ip = 145;
                    continue _fun45096;
                case 111:
                    var4 = var3.setTimeout;
                    var3 = var2.props;
                    var3 = var3.delayPressOut;
                    var1 = function() { // Environment: var1
                        _fun45097: for (var _fun45097_ip = 0;;) switch (_fun45097_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var3 = var0.STATE;
                                var2 = _closure1_slot9;
                                var2 = var2.UNDETERMINED;
                                if (!(var3 === var2)) {
                                    _fun45097_ip = 55;
                                    continue _fun45097
                                }
                            case 30:
                                var4 = _closure3_slot0;
                                var3 = var4.moveToState;
                                var2 = _closure1_slot9;
                                var2 = var2.BEGAN;
                                var2 = var3.bind(var4)(var2);
                            case 55:
                                var1 = _closure3_slot0;
                                var2 = var1.moveToState;
                                var0 = _closure1_slot9;
                                var0 = var0.UNDETERMINED;
                                var0 = var2.bind(var1)(var0);
                                var0 = null;
                                var1.pressOutTimeout = var0;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var4.bind(var0)(var1, var3);
                    var2.pressOutTimeout = var1;
                case 145:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'componentDidMount';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.reset;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'reset';
        var4.key = var6;
        var6 = function() {
            var2 = this;
            var0 = false;
            var2.longPressDetected = var0;
            var0 = true;
            var2.pointerInside = var0;
            var1 = global;
            var4 = var1.clearTimeout;
            var3 = var2.pressInTimeout;
            var0 = undefined;
            var3 = var4.bind(var0)(var3);
            var4 = var1.clearTimeout;
            var3 = var2.pressOutTimeout;
            var3 = var4.bind(var0)(var3);
            var3 = var1.clearTimeout;
            var1 = var2.longPressTimeout;
            var1 = var3.bind(var0)(var1);
            var1 = null;
            var2.pressOutTimeout = var1;
            var2.longPressTimeout = var1;
            var2.pressInTimeout = var1;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'moveToState';
        var4.key = var6;
        var6 = function arg0() {
            _fun45100: for (var _fun45100_ip = 0;;) switch (_fun45100_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var0.STATE;
                    if (!(var1 !== var2)) {
                        _fun45100_ip = 220;
                        continue _fun45100
                    }
                case 19:
                    var3 = _closure1_slot9;
                    var3 = var3.BEGAN;
                    if (!(var1 !== var3)) {
                        _fun45100_ip = 152;
                        continue _fun45100
                    }
                case 36:
                    var3 = _closure1_slot9;
                    var3 = var3.MOVED_OUTSIDE;
                    if (!(var1 !== var3)) {
                        _fun45100_ip = 123;
                        continue _fun45100
                    }
                case 50:
                    var3 = _closure1_slot9;
                    var3 = var3.UNDETERMINED;
                    if (!(var1 === var3)) {
                        _fun45100_ip = 179;
                        continue _fun45100
                    }
                case 64:
                    var3 = var0.reset;
                    var3 = var3.bind(var0)();
                    var3 = var0.STATE;
                    var2 = _closure1_slot9;
                    var2 = var2.BEGAN;
                    if (!(var3 === var2)) {
                        _fun45100_ip = 179;
                        continue _fun45100
                    }
                case 94:
                    var4 = var0.props;
                    var3 = var4.onPressOut;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun45100_ip = 179;
                        continue _fun45100
                    }
                case 111:
                    var2 = var3.call;
                    var2 = var2.bind(var3)(var4);
                    _fun45100_ip = 179;
                    continue _fun45100;
                case 123:
                    var4 = var0.props;
                    var3 = var4.onPressOut;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun45100_ip = 179;
                        continue _fun45100
                    }
                case 140:
                    var2 = var3.call;
                    var2 = var2.bind(var3)(var4);
                    _fun45100_ip = 179;
                    continue _fun45100;
                case 152:
                    var4 = var0.props;
                    var3 = var4.onPressIn;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun45100_ip = 179;
                        continue _fun45100
                    }
                case 169:
                    var2 = var3.call;
                    var2 = var2.bind(var3)(var4);
                case 179:
                    var5 = var0.props;
                    var4 = var5.onStateChange;
                    var2 = null;
                    if (!(var2 != var4)) {
                        _fun45100_ip = 214;
                        continue _fun45100
                    }
                case 196:
                    var3 = var4.call;
                    var2 = var0.STATE;
                    var2 = var3.bind(var4)(var5, var2, var1);
                case 214:
                    var0.STATE = var1;
                case 220:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.reset;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'onMoveIn';
        var4.key = var6;
        var6 = function() {
            _fun45102: for (var _fun45102_ip = 0;;) switch (_fun45102_ip) {
                case 0:
                    var2 = this;
                    var3 = var2.STATE;
                    var1 = _closure1_slot9;
                    var1 = var1.MOVED_OUTSIDE;
                    if (!(var3 === var1)) {
                        _fun45102_ip = 47;
                        continue _fun45102
                    }
                case 26:
                    var1 = var2.moveToState;
                    var0 = _closure1_slot9;
                    var0 = var0.BEGAN;
                    var0 = var1.bind(var2)(var0);
                case 47:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'onMoveOut';
        var4.key = var6;
        var6 = function() {
            _fun45103: for (var _fun45103_ip = 0;;) switch (_fun45103_ip) {
                case 0:
                    var2 = this;
                    var0 = global;
                    var3 = var0.clearTimeout;
                    var1 = var2.longPressTimeout;
                    var0 = undefined;
                    var1 = var3.bind(var0)(var1);
                    var1 = null;
                    var2.longPressTimeout = var1;
                    var3 = var2.STATE;
                    var1 = _closure1_slot9;
                    var1 = var1.BEGAN;
                    if (!(var3 === var1)) {
                        _fun45103_ip = 67;
                        continue _fun45103
                    }
                case 55:
                    var1 = var2.handleMoveOutside;
                    var1 = var1.bind(var2)();
                case 67:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun45104: for (var _fun45104_ip = 0;;) switch (_fun45104_ip) {
                case 0:
                    var8 = this;
                    var0 = var8.props;
                    var0 = var0.hitSlop;
                    var1 = 'number';
                    var0 = typeof var0;
                    if (!(var1 !== var0)) {
                        _fun45104_ip = 38;
                        continue _fun45104
                    }
                case 25:
                    var0 = var8.props;
                    var1 = var0.hitSlop;
                    _fun45104_ip = 103;
                    continue _fun45104;
                case 38:
                    var0 = {};
                    var2 = var8.props;
                    var2 = var2.hitSlop;
                    var0.top = var2;
                    var2 = var8.props;
                    var2 = var2.hitSlop;
                    var0.left = var2;
                    var2 = var8.props;
                    var2 = var2.hitSlop;
                    var0.bottom = var2;
                    var2 = var8.props;
                    var2 = var2.hitSlop;
                    var0.right = var2;
                    var1 = var0;
                case 103:
                    var0 = null;
                    var2 = var0 != var1;
                    var3 = undefined;
                    var4 = undefined;
                    if (!var2) {
                        _fun45104_ip = 119;
                        continue _fun45104
                    }
                case 116:
                    var4 = var1;
                case 119:
                    var14 = {};
                    var1 = var8.props;
                    var2 = var1.accessible;
                    var1 = false;
                    var1 = var1 !== var2;
                    var14.accessible = var1;
                    var1 = var8.props;
                    var1 = var1.accessibilityLabel;
                    var14.accessibilityLabel = var1;
                    var1 = var8.props;
                    var1 = var1.accessibilityHint;
                    var14.accessibilityHint = var1;
                    var1 = var8.props;
                    var1 = var1.accessibilityRole;
                    var14.accessibilityRole = var1;
                    var1 = var8.props;
                    var1 = var1.accessibilityState;
                    var14.accessibilityState = var1;
                    var1 = var8.props;
                    var1 = var1.accessibilityActions;
                    var14.accessibilityActions = var1;
                    var1 = var8.props;
                    var1 = var1.onAccessibilityAction;
                    var14.onAccessibilityAction = var1;
                    var1 = var8.props;
                    var1 = var1.nativeID;
                    var14.nativeID = var1;
                    var1 = var8.props;
                    var1 = var1.onLayout;
                    var14.onLayout = var1;
                    var2 = _closure1_slot8;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 9;
                    var1 = var6[var1];
                    var1 = var5.bind(var3)(var1);
                    var1 = var1.BaseButton;
                    var11 = global;
                    var7 = var11.Object;
                    var6 = var7.assign;
                    var5 = {};
                    var10 = var8.props;
                    var10 = var10.containerStyle;
                    var5.style = var10;
                    var10 = var8.props;
                    var12 = var10.disabled;
                    var10 = undefined;
                    if (var12) {
                        _fun45104_ip = 349;
                        continue _fun45104
                    }
                case 343:
                    var10 = var8.onHandlerStateChange;
                case 349:
                    var5.onHandlerStateChange = var10;
                    var10 = var8.onGestureEvent;
                    var5.onGestureEvent = var10;
                    var5.hitSlop = var4;
                    var4 = var8.props;
                    var4 = var4.userSelect;
                    var5.userSelect = var4;
                    var4 = var8.props;
                    var4 = var4.shouldActivateOnStart;
                    var5.shouldActivateOnStart = var4;
                    var4 = var8.props;
                    var4 = var4.disallowInterruption;
                    var5.disallowInterruption = var4;
                    var4 = var8.props;
                    var4 = var4.testID;
                    var5.testID = var4;
                    var4 = var8.props;
                    var4 = var4.touchSoundDisabled;
                    var0 = var0 != var4;
                    if (!var0) {
                        _fun45104_ip = 455;
                        continue _fun45104
                    }
                case 452:
                    var0 = var4;
                case 455:
                    var5.touchSoundDisabled = var0;
                    var0 = var8.props;
                    var0 = var0.disabled;
                    var0 = !var0;
                    var5.enabled = var0;
                    var0 = var8.props;
                    var4 = var0.extraButtonProps;
                    var0 = {};
                    var10 = _closure1_slot8;
                    var9 = _closure1_slot7;
                    var9 = var9.View;
                    var13 = var11.Object;
                    var12 = var13.assign;
                    var11 = {};
                    var15 = var8.props;
                    var15 = var15.style;
                    var11.style = var15;
                    var8 = var8.props;
                    var8 = var8.children;
                    var11.children = var8;
                    var8 = {};
                    var8 = var12.bind(var13)(var8, var14, var11);
                    var8 = var10.bind(var3)(var9, var8);
                    var0.children = var8;
                    var0 = var6.bind(var7)(var5, var4, var0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[9] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = {};
    var5 = 600;
    var4.delayLongPress = var5;
    var5 = {
        'rippleColor': 0,
        'exclusive': true
    };
    var4.extraButtonProps = var5;
    var3.defaultProps = var4;
    var2.default = var3;
    var2.TOUCHABLE_STATE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 33, 4931, 4988]);