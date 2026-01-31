// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = global;
    var9 = var4.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var1 = true;
    var5.value = var1;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var6 = 1;
    var8 = var7[var6];
    var6 = metroImportAll;
    var6 = var6.bind(var0)(var8);
    var6 = 2;
    var7 = var7[var6];
    var6 = require;
    var6 = var6.bind(var0)(var7);
    var6 = var6.jsx;
    var6 = function arg0() {
        _fun5853: for (var _fun5853_ip = 0;;) switch (_fun5853_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.touches;
                var4 = var1.changedTouches;
                var2 = var3;
                if (!var2) {
                    _fun5853_ip = 32;
                    continue _fun5853
                }
            case 21:
                var5 = var3.length;
                var0 = 0;
                var2 = var5 > var0;
            case 32:
                var0 = var4;
                if (!var0) {
                    _fun5853_ip = 49;
                    continue _fun5853
                }
            case 38:
                var6 = var4.length;
                var5 = 0;
                var0 = var6 > var5;
            case 49:
                if (var2) {
                    _fun5853_ip = 63;
                    continue _fun5853
                }
            case 52:
                if (!var0) {
                    _fun5853_ip = 63;
                    continue _fun5853
                }
            case 55:
                var0 = 0;
                var0 = var4[var0];
                _fun5853_ip = 75;
                continue _fun5853;
            case 63:
                if (!var2) {
                    _fun5853_ip = 72;
                    continue _fun5853
                }
            case 66:
                var2 = 0;
                var1 = var3[var2];
            case 72:
                var0 = var1;
            case 75:
                return var0;
        }
    };
    var _closure1_slot2 = var6;
    var8 = {
        'NOT_RESPONDER': false,
        'RESPONDER_INACTIVE_PRESS_IN': false,
        'RESPONDER_INACTIVE_PRESS_OUT': false,
        'RESPONDER_ACTIVE_PRESS_IN': false,
        'RESPONDER_ACTIVE_PRESS_OUT': false,
        'RESPONDER_ACTIVE_LONG_PRESS_IN': false,
        'RESPONDER_ACTIVE_LONG_PRESS_OUT': false,
        'ERROR': false
    };
    var10 = var4.Object;
    var9 = var10.assign;
    var7 = {};
    var6 = {
        'RESPONDER_ACTIVE_PRESS_OUT': true,
        'RESPONDER_ACTIVE_PRESS_IN': true
    };
    var6 = var9.bind(var10)(var7, var8, var6);
    var _closure1_slot3 = var6;
    var10 = var4.Object;
    var9 = var10.assign;
    var7 = {};
    var6 = {
        'RESPONDER_INACTIVE_PRESS_IN': true,
        'RESPONDER_ACTIVE_PRESS_IN': true,
        'RESPONDER_ACTIVE_LONG_PRESS_IN': true
    };
    var6 = var9.bind(var10)(var7, var8, var6);
    var _closure1_slot4 = var6;
    var7 = var4.Object;
    var6 = var7.assign;
    var4 = {};
    var4.RESPONDER_ACTIVE_LONG_PRESS_IN = var1;
    var1 = {};
    var1 = var6.bind(var7)(var1, var8, var4);
    var _closure1_slot5 = var1;
    var1 = {};
    var4 = {
        'DELAY': 'ERROR',
        'RESPONDER_GRANT': 'RESPONDER_INACTIVE_PRESS_IN',
        'RESPONDER_RELEASE': 'ERROR',
        'RESPONDER_TERMINATED': 'ERROR',
        'ENTER_PRESS_RECT': 'ERROR',
        'LEAVE_PRESS_RECT': 'ERROR',
        'LONG_PRESS_DETECTED': 'ERROR'
    };
    var1.NOT_RESPONDER = var4;
    var4 = {
        'DELAY': 'RESPONDER_ACTIVE_PRESS_IN',
        'RESPONDER_GRANT': 'ERROR',
        'RESPONDER_RELEASE': 'NOT_RESPONDER',
        'RESPONDER_TERMINATED': 'NOT_RESPONDER',
        'ENTER_PRESS_RECT': 'RESPONDER_INACTIVE_PRESS_IN',
        'LEAVE_PRESS_RECT': 'RESPONDER_INACTIVE_PRESS_OUT',
        'LONG_PRESS_DETECTED': 'ERROR'
    };
    var1.RESPONDER_INACTIVE_PRESS_IN = var4;
    var4 = {
        'DELAY': 'RESPONDER_ACTIVE_PRESS_OUT',
        'RESPONDER_GRANT': 'ERROR',
        'RESPONDER_RELEASE': 'NOT_RESPONDER',
        'RESPONDER_TERMINATED': 'NOT_RESPONDER',
        'ENTER_PRESS_RECT': 'RESPONDER_INACTIVE_PRESS_IN',
        'LEAVE_PRESS_RECT': 'RESPONDER_INACTIVE_PRESS_OUT',
        'LONG_PRESS_DETECTED': 'ERROR'
    };
    var1.RESPONDER_INACTIVE_PRESS_OUT = var4;
    var4 = {
        'DELAY': 'ERROR',
        'RESPONDER_GRANT': 'ERROR',
        'RESPONDER_RELEASE': 'NOT_RESPONDER',
        'RESPONDER_TERMINATED': 'NOT_RESPONDER',
        'ENTER_PRESS_RECT': 'RESPONDER_ACTIVE_PRESS_IN',
        'LEAVE_PRESS_RECT': 'RESPONDER_ACTIVE_PRESS_OUT',
        'LONG_PRESS_DETECTED': 'RESPONDER_ACTIVE_LONG_PRESS_IN'
    };
    var1.RESPONDER_ACTIVE_PRESS_IN = var4;
    var4 = {
        'DELAY': 'ERROR',
        'RESPONDER_GRANT': 'ERROR',
        'RESPONDER_RELEASE': 'NOT_RESPONDER',
        'RESPONDER_TERMINATED': 'NOT_RESPONDER',
        'ENTER_PRESS_RECT': 'RESPONDER_ACTIVE_PRESS_IN',
        'LEAVE_PRESS_RECT': 'RESPONDER_ACTIVE_PRESS_OUT',
        'LONG_PRESS_DETECTED': 'ERROR'
    };
    var1.RESPONDER_ACTIVE_PRESS_OUT = var4;
    var4 = {
        'DELAY': 'ERROR',
        'RESPONDER_GRANT': 'ERROR',
        'RESPONDER_RELEASE': 'NOT_RESPONDER',
        'RESPONDER_TERMINATED': 'NOT_RESPONDER',
        'ENTER_PRESS_RECT': 'RESPONDER_ACTIVE_LONG_PRESS_IN',
        'LEAVE_PRESS_RECT': 'RESPONDER_ACTIVE_LONG_PRESS_OUT',
        'LONG_PRESS_DETECTED': 'RESPONDER_ACTIVE_LONG_PRESS_IN'
    };
    var1.RESPONDER_ACTIVE_LONG_PRESS_IN = var4;
    var4 = {
        'DELAY': 'ERROR',
        'RESPONDER_GRANT': 'ERROR',
        'RESPONDER_RELEASE': 'NOT_RESPONDER',
        'RESPONDER_TERMINATED': 'NOT_RESPONDER',
        'ENTER_PRESS_RECT': 'RESPONDER_ACTIVE_LONG_PRESS_IN',
        'LEAVE_PRESS_RECT': 'RESPONDER_ACTIVE_LONG_PRESS_OUT',
        'LONG_PRESS_DETECTED': 'ERROR'
    };
    var1.RESPONDER_ACTIVE_LONG_PRESS_OUT = var4;
    var4 = {
        'DELAY': 'NOT_RESPONDER',
        'RESPONDER_GRANT': 'RESPONDER_INACTIVE_PRESS_IN',
        'RESPONDER_RELEASE': 'NOT_RESPONDER',
        'RESPONDER_TERMINATED': 'NOT_RESPONDER',
        'ENTER_PRESS_RECT': 'NOT_RESPONDER',
        'LEAVE_PRESS_RECT': 'NOT_RESPONDER',
        'LONG_PRESS_DETECTED': 'NOT_RESPONDER'
    };
    var1.error = var4;
    var _closure1_slot6 = var1;
    var4 = {};
    var1 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var1 = var1.isTV;
        return var0;
    };
    var4.componentDidMount = var1;
    var1 = function() {
        _fun5855: for (var _fun5855_ip = 0;;) switch (_fun5855_ip) {
            case 0:
                var0 = this;
                var1 = var0.touchableDelayTimeout;
                if (!var1) {
                    _fun5855_ip = 33;
                    continue _fun5855
                }
            case 12:
                var1 = global;
                var3 = var1.clearTimeout;
                var2 = var0.touchableDelayTimeout;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
            case 33:
                var1 = var0.longPressDelayTimeout;
                if (!var1) {
                    _fun5855_ip = 63;
                    continue _fun5855
                }
            case 42:
                var1 = global;
                var3 = var1.clearTimeout;
                var2 = var0.longPressDelayTimeout;
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
            case 63:
                var1 = var0.pressOutDelayTimeout;
                if (!var1) {
                    _fun5855_ip = 93;
                    continue _fun5855
                }
            case 72:
                var1 = global;
                var2 = var1.clearTimeout;
                var1 = var0.pressOutDelayTimeout;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 93:
                var0 = undefined;
                return var0;
        }
    };
    var4.componentWillUnmount = var1;
    var1 = function() {
        var0 = {};
        var1 = {};
        var2 = undefined;
        var1.touchState = var2;
        var2 = null;
        var1.responderID = var2;
        var0.touchable = var1;
        return var0;
    };
    var4.touchableGetInitialState = var1;
    var1 = function() {
        var0 = this;
        var0 = var0.props;
        var0 = var0.rejectResponderTermination;
        var0 = !var0;
        return var0;
    };
    var4.touchableHandleResponderTerminationRequest = var1;
    var1 = function() {
        var0 = this;
        var0 = var0.props;
        var0 = var0.disabled;
        var0 = !var0;
        return var0;
    };
    var4.touchableHandleStartShouldSetResponder = var1;
    var1 = function() {
        var0 = true;
        return var0;
    };
    var4.touchableLongPressCancelsPress = var1;
    var1 = function arg0() {
        _fun5860: for (var _fun5860_ip = 0;;) switch (_fun5860_ip) {
            case 0:
                var7 = arg0;
                var2 = this;
                var1 = var7.currentTarget;
                var0 = var7.persist;
                var0 = var0.bind(var7)();
                var0 = var2.pressOutDelayTimeout;
                if (!var0) {
                    _fun5860_ip = 52;
                    continue _fun5860
                }
            case 31:
                var0 = global;
                var4 = var0.clearTimeout;
                var3 = var2.pressOutDelayTimeout;
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
            case 52:
                var0 = null;
                var2.pressOutDelayTimeout = var0;
                var0 = var2.state;
                var3 = var0.touchable;
                var0 = 'NOT_RESPONDER';
                var3.touchState = var0;
                var0 = var2.state;
                var0 = var0.touchable;
                var0.responderID = var1;
                var1 = var2._receiveSignal;
                var0 = 'RESPONDER_GRANT';
                var0 = var1.bind(var2)(var0, var7);
                var3 = var2.touchableGetHighlightDelayMS;
                var5 = 130;
                var0 = undefined;
                var1 = var5;
                if (!(var0 !== var3)) {
                    _fun5860_ip = 163;
                    continue _fun5860
                }
            case 132:
                var3 = global;
                var8 = var3.Math;
                var6 = var8.max;
                var3 = var2.touchableGetHighlightDelayMS;
                var4 = var3.bind(var2)();
                var3 = 0;
                var1 = var6.bind(var8)(var4, var3);
            case 163:
                var3 = global;
                var4 = var3.isNaN;
                var4 = var4.bind(var0)(var1);
                if (var4) {
                    _fun5860_ip = 182;
                    continue _fun5860
                }
            case 179:
                var5 = var1;
            case 182:
                var1 = 0;
                if (!(var1 === var5)) {
                    _fun5860_ip = 201;
                    continue _fun5860
                }
            case 188:
                var1 = var2._handleDelay;
                var1 = var1.bind(var2)(var7);
                _fun5860_ip = 236;
                continue _fun5860;
            case 201:
                var4 = var3.setTimeout;
                var6 = var2._handleDelay;
                var1 = var6.bind;
                var1 = var1.bind(var6)(var2, var7);
                var1 = var4.bind(var0)(var1, var5);
                var2.touchableDelayTimeout = var1;
            case 236:
                var6 = var2.touchableGetLongPressDelayMS;
                var1 = 370;
                var4 = var1;
                if (!(var0 !== var6)) {
                    _fun5860_ip = 285;
                    continue _fun5860
                }
            case 255:
                var10 = var3.Math;
                var9 = var10.max;
                var6 = var2.touchableGetLongPressDelayMS;
                var8 = var6.bind(var2)();
                var6 = 10;
                var4 = var9.bind(var10)(var8, var6);
            case 285:
                var6 = var3.isNaN;
                var6 = var6.bind(var0)(var4);
                if (var6) {
                    _fun5860_ip = 302;
                    continue _fun5860
                }
            case 299:
                var1 = var4;
            case 302:
                var4 = var3.setTimeout;
                var6 = var2._handleLongDelay;
                var3 = var6.bind;
                var3 = var3.bind(var6)(var2, var7);
                var1 = var1 + var5;
                var1 = var4.bind(var0)(var3, var1);
                var2.longPressDelayTimeout = var1;
                return var0;
        }
    };
    var4.touchableHandleResponderGrant = var1;
    var1 = function arg0() {
        var3 = this;
        var0 = null;
        var3.pressInLocation = var0;
        var2 = var3._receiveSignal;
        var1 = 'RESPONDER_RELEASE';
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var4.touchableHandleResponderRelease = var1;
    var1 = function arg0() {
        var3 = this;
        var0 = null;
        var3.pressInLocation = var0;
        var2 = var3._receiveSignal;
        var1 = 'RESPONDER_TERMINATED';
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var4.touchableHandleResponderTerminate = var1;
    var1 = function arg0() {
        _fun5863: for (var _fun5863_ip = 0;;) switch (_fun5863_ip) {
            case 0:
                var4 = arg0;
                var1 = this;
                var0 = var1.state;
                var0 = var0.touchable;
                var0 = var0.positionOnActivate;
                if (!var0) {
                    _fun5863_ip = 504;
                    continue _fun5863
                }
            case 29:
                var0 = var1.state;
                var0 = var0.touchable;
                var5 = var0.positionOnActivate;
                var0 = var1.state;
                var0 = var0.touchable;
                var0 = var0.dimensionsOnActivate;
                var2 = var1.touchableGetPressRectOffset;
                if (var2) {
                    _fun5863_ip = 84;
                    continue _fun5863
                }
            case 72:
                var2 = {
                    'left': 20,
                    'right': 20,
                    'top': 20,
                    'bottom': 20
                };
                _fun5863_ip = 94;
                continue _fun5863;
            case 84:
                var3 = var1.touchableGetPressRectOffset;
                var2 = var3.bind(var1)();
            case 94:
                var11 = var2.left;
                var7 = var2.top;
                var13 = var2.right;
                var12 = var2.bottom;
                var3 = var1.touchableGetHitSlop;
                var2 = null;
                if (!var3) {
                    _fun5863_ip = 135;
                    continue _fun5863
                }
            case 125:
                var3 = var1.touchableGetHitSlop;
                var2 = var3.bind(var1)();
            case 135:
                var10 = var11;
                var9 = var7;
                var8 = var13;
                var3 = var12;
                if (!var2) {
                    _fun5863_ip = 215;
                    continue _fun5863
                }
            case 150:
                var6 = var2.left;
                if (var6) {
                    _fun5863_ip = 160;
                    continue _fun5863
                }
            case 158:
                var6 = 0;
            case 160:
                var11 = var11 + var6;
                var6 = var2.top;
                if (var6) {
                    _fun5863_ip = 174;
                    continue _fun5863
                }
            case 172:
                var6 = 0;
            case 174:
                var7 = var7 + var6;
                var6 = var2.right;
                if (var6) {
                    _fun5863_ip = 188;
                    continue _fun5863
                }
            case 186:
                var6 = 0;
            case 188:
                var6 = var13 + var6;
                var2 = var2.bottom;
                if (var2) {
                    _fun5863_ip = 202;
                    continue _fun5863
                }
            case 200:
                var2 = 0;
            case 202:
                var3 = var12 + var2;
                var10 = var11;
                var9 = var7;
                var8 = var6;
            case 215:
                var7 = _closure1_slot2;
                var6 = var4.nativeEvent;
                var2 = undefined;
                var6 = var7.bind(var2)(var6);
                var7 = var6;
                if (!var6) {
                    _fun5863_ip = 247;
                    continue _fun5863
                }
            case 241:
                var7 = var6.pageX;
            case 247:
                var2 = var6;
                if (!var2) {
                    _fun5863_ip = 259;
                    continue _fun5863
                }
            case 253:
                var2 = var6.pageY;
            case 259:
                var6 = var1.pressInLocation;
                if (!var6) {
                    _fun5863_ip = 328;
                    continue _fun5863
                }
            case 268:
                var12 = var1._getDistanceBetweenPoints;
                var6 = var1.pressInLocation;
                var16 = var6.pageX;
                var6 = var1.pressInLocation;
                var15 = var6.pageY;
                var19 = var1;
                var18 = var7;
                var17 = var2;
                var11 = var19[var12](var18, var17, var16, var15, var14);
                var6 = 10;
                if (!(var11 > var6)) {
                    _fun5863_ip = 328;
                    continue _fun5863
                }
            case 318:
                var6 = var1._cancelLongPressDelayTimeout;
                var6 = var6.bind(var1)();
            case 328:
                var6 = var5.left;
                var6 = var6 - var10;
                if (!(var7 > var6)) {
                    _fun5863_ip = 398;
                    continue _fun5863
                }
            case 341:
                var6 = var5.top;
                var6 = var6 - var9;
                if (!(var2 > var6)) {
                    _fun5863_ip = 398;
                    continue _fun5863
                }
            case 354:
                var9 = var5.left;
                var6 = var0.width;
                var6 = var9 + var6;
                var6 = var6 + var8;
                if (!(var7 < var6)) {
                    _fun5863_ip = 398;
                    continue _fun5863
                }
            case 376:
                var5 = var5.top;
                var0 = var0.height;
                var0 = var5 + var0;
                var0 = var0 + var3;
                if (!(!(var2 < var0))) {
                    _fun5863_ip = 426;
                    continue _fun5863
                }
            case 398:
                var0 = var1._cancelLongPressDelayTimeout;
                var0 = var0.bind(var1)();
                var2 = var1._receiveSignal;
                var0 = 'LEAVE_PRESS_RECT';
                var0 = var2.bind(var1)(var0, var4);
                _fun5863_ip = 504;
                continue _fun5863;
            case 426:
                var0 = var1.state;
                var0 = var0.touchable;
                var3 = var0.touchState;
                var2 = var1._receiveSignal;
                var0 = 'ENTER_PRESS_RECT';
                var0 = var2.bind(var1)(var0, var4);
                var0 = var1.state;
                var0 = var0.touchable;
                var0 = var0.touchState;
                var2 = 'RESPONDER_INACTIVE_PRESS_IN';
                var0 = var0 === var2;
                if (!var0) {
                    _fun5863_ip = 491;
                    continue _fun5863
                }
            case 487:
                var0 = var3 !== var2;
            case 491:
                if (!var0) {
                    _fun5863_ip = 504;
                    continue _fun5863
                }
            case 494:
                var0 = var1._cancelLongPressDelayTimeout;
                var0 = var0.bind(var1)();
            case 504:
                var0 = undefined;
                return var0;
        }
    };
    var4.touchableHandleResponderMove = var1;
    var1 = function arg0() {
        _fun5864: for (var _fun5864_ip = 0;;) switch (_fun5864_ip) {
            case 0:
                var0 = this;
                var1 = var0.props;
                var1 = var1.onFocus;
                if (!var1) {
                    _fun5864_ip = 36;
                    continue _fun5864
                }
            case 17:
                var2 = var0.props;
                var1 = var2.onFocus;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
            case 36:
                var0 = undefined;
                return var0;
        }
    };
    var4.touchableHandleFocus = var1;
    var1 = function arg0() {
        _fun5865: for (var _fun5865_ip = 0;;) switch (_fun5865_ip) {
            case 0:
                var0 = this;
                var1 = var0.props;
                var1 = var1.onBlur;
                if (!var1) {
                    _fun5865_ip = 36;
                    continue _fun5865
                }
            case 17:
                var2 = var0.props;
                var1 = var2.onBlur;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
            case 36:
                var0 = undefined;
                return var0;
        }
    };
    var4.touchableHandleBlur = var1;
    var1 = function() {
        _fun5866: for (var _fun5866_ip = 0;;) switch (_fun5866_ip) {
            case 0:
                var0 = this;
                var1 = var0.state;
                var1 = var1.touchable;
                var3 = var1.responderID;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun5866_ip = 99;
                    continue _fun5866
                }
            case 26:
                var2 = 'number';
                var1 = typeof var3;
                if (!(var2 !== var1)) {
                    _fun5866_ip = 56;
                    continue _fun5866
                }
            case 37:
                var2 = var3.measure;
                var1 = var0._handleQueryLayout;
                var1 = var2.bind(var3)(var1);
                _fun5866_ip = 99;
                continue _fun5866;
            case 56:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.measure;
                var0 = var0._handleQueryLayout;
                var0 = var1.bind(var2)(var3, var0);
            case 99:
                var0 = undefined;
                return var0;
        }
    };
    var4._remeasureMetricsOnActivation = var1;
    var1 = function arg0, arg1, arg2, arg3, arg4, arg5() {
        _fun5867: for (var _fun5867_ip = 0;;) switch (_fun5867_ip) {
            case 0:
                var1 = arg0;
                var2 = arg1;
                var4 = arg2;
                var3 = arg3;
                var10 = arg4;
                var9 = arg5;
                var0 = this;
                if (var1) {
                    _fun5867_ip = 27;
                    continue _fun5867
                }
            case 24:
                var1 = var2;
            case 27:
                if (var1) {
                    _fun5867_ip = 33;
                    continue _fun5867
                }
            case 30:
                var1 = var4;
            case 33:
                if (var1) {
                    _fun5867_ip = 39;
                    continue _fun5867
                }
            case 36:
                var1 = var3;
            case 39:
                if (var1) {
                    _fun5867_ip = 45;
                    continue _fun5867
                }
            case 42:
                var1 = var10;
            case 45:
                if (var1) {
                    _fun5867_ip = 51;
                    continue _fun5867
                }
            case 48:
                var1 = var9;
            case 51:
                if (!var1) {
                    _fun5867_ip = 298;
                    continue _fun5867
                }
            case 57:
                var1 = var0.state;
                var1 = var1.touchable;
                var1 = var1.positionOnActivate;
                if (!var1) {
                    _fun5867_ip = 130;
                    continue _fun5867
                }
            case 77:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 5;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var2);
                var2 = var5.release;
                var1 = var0.state;
                var1 = var1.touchable;
                var1 = var1.positionOnActivate;
                var1 = var2.bind(var5)(var1);
            case 130:
                var1 = var0.state;
                var1 = var1.touchable;
                var1 = var1.dimensionsOnActivate;
                if (!var1) {
                    _fun5867_ip = 203;
                    continue _fun5867
                }
            case 150:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 6;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var2);
                var2 = var5.release;
                var1 = var0.state;
                var1 = var1.touchable;
                var1 = var1.dimensionsOnActivate;
                var1 = var2.bind(var5)(var1);
            case 203:
                var1 = var0.state;
                var7 = var1.touchable;
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 5;
                var1 = var6[var1];
                var2 = undefined;
                var8 = var5.bind(var2)(var1);
                var1 = var8.getPooled;
                var1 = var1.bind(var8)(var10, var9);
                var7.positionOnActivate = var1;
                var0 = var0.state;
                var1 = var0.touchable;
                var0 = 6;
                var0 = var6[var0];
                var2 = var5.bind(var2)(var0);
                var0 = var2.getPooled;
                var0 = var0.bind(var2)(var4, var3);
                var1.dimensionsOnActivate = var0;
            case 298:
                var0 = undefined;
                return var0;
        }
    };
    var4._handleQueryLayout = var1;
    var1 = function arg0() {
        var3 = this;
        var0 = null;
        var3.touchableDelayTimeout = var0;
        var2 = var3._receiveSignal;
        var1 = 'DELAY';
        var0 = arg0;
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var4._handleDelay = var1;
    var1 = function arg0() {
        _fun5869: for (var _fun5869_ip = 0;;) switch (_fun5869_ip) {
            case 0:
                var3 = this;
                var0 = null;
                var3.longPressDelayTimeout = var0;
                var0 = var3.state;
                var0 = var0.touchable;
                var2 = var0.touchState;
                var0 = 'RESPONDER_ACTIVE_PRESS_IN';
                var0 = var2 !== var0;
                if (!var0) {
                    _fun5869_ip = 47;
                    continue _fun5869
                }
            case 39:
                var1 = 'RESPONDER_ACTIVE_LONG_PRESS_IN';
                var0 = var2 !== var1;
            case 47:
                if (var0) {
                    _fun5869_ip = 69;
                    continue _fun5869
                }
            case 50:
                var2 = var3._receiveSignal;
                var1 = 'LONG_PRESS_DETECTED';
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
            case 69:
                var0 = undefined;
                return var0;
        }
    };
    var4._handleLongDelay = var1;
    var1 = function arg0, arg1() {
        _fun5870: for (var _fun5870_ip = 0;;) switch (_fun5870_ip) {
            case 0:
                var3 = arg0;
                var1 = this;
                var0 = var1.state;
                var0 = var0.touchable;
                var0 = var0.responderID;
                var2 = var1.state;
                var2 = var2.touchable;
                var4 = var2.touchState;
                var2 = _closure1_slot6;
                var2 = var2[var4];
                if (!var2) {
                    _fun5870_ip = 66;
                    continue _fun5870
                }
            case 54:
                var5 = _closure1_slot6;
                var5 = var5[var4];
                var2 = var5[var3];
            case 66:
                if (var0) {
                    _fun5870_ip = 80;
                    continue _fun5870
                }
            case 69:
                var0 = 'RESPONDER_RELEASE';
                if (!(var3 !== var0)) {
                    _fun5870_ip = 262;
                    continue _fun5870
                }
            case 80:
                if (var2) {
                    _fun5870_ip = 208;
                    continue _fun5870
                }
            case 86:
                var0 = global;
                var6 = var0.Error;
                var0 = 'Unrecognized signal `';
                var5 = var0 + var3;
                var0 = '` or state `';
                var0 = var5 + var0;
                var8 = var0 + var4;
                var0 = var1.state;
                var0 = var0.touchable;
                var5 = var0.responderID;
                var0 = 'host component`';
                var7 = '` for Touchable responder `';
                var7 = var8 + var7;
                var5 = typeof var5;
                var7 = var7 + var5;
                var5 = 'number';
                if (!(var7 === var5)) {
                    _fun5870_ip = 183;
                    continue _fun5870
                }
            case 166:
                var5 = var1.state;
                var5 = var5.touchable;
                var0 = var5.responderID;
            case 183:
                var5 = var6.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var6
                    }
                });
                var13 = var5;
                var12 = var0;
                var0 = new var13[var6](var12, var11);
                var0 = var0 instanceof Object ? var0 : var5;
                throw var0;
            case 208:
                var0 = 'ERROR';
                if (!(var2 !== var0)) {
                    _fun5870_ip = 266;
                    continue _fun5870
                }
            case 216:
                if (!(var4 !== var2)) {
                    _fun5870_ip = 262;
                    continue _fun5870
                }
            case 220:
                var5 = var1._performSideEffectsForTransition;
                var9 = arg1;
                var13 = var1;
                var12 = var4;
                var11 = var2;
                var10 = var3;
                var0 = var13[var5](var12, var11, var10, var9, var8);
                var0 = var1.state;
                var0 = var0.touchable;
                var0.touchState = var2;
            case 262:
                var0 = undefined;
                return var0;
            case 266:
                var0 = global;
                var2 = var0.Error;
                var0 = 'Touchable cannot transition from `';
                var4 = var0 + var4;
                var0 = '` to `';
                var0 = var4 + var0;
                var5 = var0 + var3;
                var0 = var1.state;
                var0 = var0.touchable;
                var3 = var0.responderID;
                var0 = '<<host component>>`';
                var4 = '` for responder `';
                var4 = var5 + var4;
                var3 = typeof var3;
                var4 = var4 + var3;
                var3 = 'number';
                if (!(var4 === var3)) {
                    _fun5870_ip = 363;
                    continue _fun5870
                }
            case 346:
                var1 = var1.state;
                var1 = var1.touchable;
                var0 = var1.responderID;
            case 363:
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = var1;
                var12 = var0;
                var0 = new var13[var2](var12, var11);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var4._receiveSignal = var1;
    var1 = function() {
        _fun5871: for (var _fun5871_ip = 0;;) switch (_fun5871_ip) {
            case 0:
                var1 = this;
                var0 = var1.longPressDelayTimeout;
                if (!var0) {
                    _fun5871_ip = 33;
                    continue _fun5871
                }
            case 12:
                var0 = global;
                var3 = var0.clearTimeout;
                var2 = var1.longPressDelayTimeout;
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
            case 33:
                var0 = null;
                var1.longPressDelayTimeout = var0;
                var0 = undefined;
                return var0;
        }
    };
    var4._cancelLongPressDelayTimeout = var1;
    var1 = function arg0() {
        _fun5872: for (var _fun5872_ip = 0;;) switch (_fun5872_ip) {
            case 0:
                var2 = arg0;
                var0 = 'RESPONDER_ACTIVE_PRESS_IN';
                var0 = var2 === var0;
                if (var0) {
                    _fun5872_ip = 22;
                    continue _fun5872
                }
            case 14:
                var1 = 'RESPONDER_ACTIVE_LONG_PRESS_IN';
                var0 = var2 === var1;
            case 22:
                return var0;
        }
    };
    var4._isHighlight = var1;
    var1 = function arg0() {
        _fun5873: for (var _fun5873_ip = 0;;) switch (_fun5873_ip) {
            case 0:
                var2 = _closure1_slot2;
                var0 = arg0;
                var1 = var0.nativeEvent;
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var5 = var2;
                if (!var2) {
                    _fun5873_ip = 35;
                    continue _fun5873
                }
            case 29:
                var5 = var2.pageX;
            case 35:
                var4 = var2;
                if (!var2) {
                    _fun5873_ip = 47;
                    continue _fun5873
                }
            case 41:
                var4 = var2.pageY;
            case 47:
                var3 = var2;
                if (!var2) {
                    _fun5873_ip = 59;
                    continue _fun5873
                }
            case 53:
                var3 = var2.locationX;
            case 59:
                var1 = var2;
                if (!var1) {
                    _fun5873_ip = 71;
                    continue _fun5873
                }
            case 65:
                var1 = var2.locationY;
            case 71:
                var2 = {};
                var2.pageX = var5;
                var2.pageY = var4;
                var2.locationX = var3;
                var2.locationY = var1;
                var1 = this;
                var1.pressInLocation = var2;
                return var0;
        }
    };
    var4._savePressInLocation = var1;
    var1 = function arg0, arg1, arg2, arg3() {
        var1 = arg0;
        var0 = arg2;
        var3 = var1 - var0;
        var1 = arg1;
        var0 = arg3;
        var0 = var1 - var0;
        var1 = global;
        var2 = var1.Math;
        var1 = var2.sqrt;
        var3 = var3 * var3;
        var0 = var0 * var0;
        var0 = var3 + var0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var4._getDistanceBetweenPoints = var1;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun5875: for (var _fun5875_ip = 0;;) switch (_fun5875_ip) {
            case 0:
                var7 = arg0;
                var10 = arg1;
                var6 = arg2;
                var2 = arg3;
                var1 = this;
                var0 = var1._isHighlight;
                var4 = var0.bind(var1)(var7);
                var0 = var1._isHighlight;
                var3 = var0.bind(var1)(var10);
                var0 = 'RESPONDER_TERMINATED';
                var0 = var6 === var0;
                if (var0) {
                    _fun5875_ip = 56;
                    continue _fun5875
                }
            case 48:
                var5 = 'RESPONDER_RELEASE';
                var0 = var6 === var5;
            case 56:
                if (!var0) {
                    _fun5875_ip = 69;
                    continue _fun5875
                }
            case 59:
                var0 = var1._cancelLongPressDelayTimeout;
                var0 = var0.bind(var1)();
            case 69:
                var0 = 'NOT_RESPONDER';
                var5 = var7 === var0;
                if (!var5) {
                    _fun5875_ip = 88;
                    continue _fun5875
                }
            case 80:
                var0 = 'RESPONDER_INACTIVE_PRESS_IN';
                var5 = var10 === var0;
            case 88:
                var8 = _closure1_slot3;
                var8 = var8[var7];
                var8 = !var8;
                if (!var8) {
                    _fun5875_ip = 113;
                    continue _fun5875
                }
            case 105:
                var9 = _closure1_slot3;
                var8 = var9[var10];
            case 113:
                if (var5) {
                    _fun5875_ip = 119;
                    continue _fun5875
                }
            case 116:
                var5 = var8;
            case 119:
                if (!var5) {
                    _fun5875_ip = 132;
                    continue _fun5875
                }
            case 122:
                var5 = var1._remeasureMetricsOnActivation;
                var5 = var5.bind(var1)();
            case 132:
                var5 = _closure1_slot4;
                var5 = var5[var7];
                if (!var5) {
                    _fun5875_ip = 151;
                    continue _fun5875
                }
            case 143:
                var8 = 'LONG_PRESS_DETECTED';
                var5 = var6 === var8;
            case 151:
                if (!var5) {
                    _fun5875_ip = 160;
                    continue _fun5875
                }
            case 154:
                var5 = var1.touchableHandleLongPress;
            case 160:
                if (!var5) {
                    _fun5875_ip = 174;
                    continue _fun5875
                }
            case 163:
                var5 = var1.touchableHandleLongPress;
                var5 = var5.bind(var1)(var2);
            case 174:
                if (!var3) {
                    _fun5875_ip = 193;
                    continue _fun5875
                }
            case 177:
                if (var4) {
                    _fun5875_ip = 193;
                    continue _fun5875
                }
            case 180:
                var5 = var1._startHighlight;
                var5 = var5.bind(var1)(var2);
                _fun5875_ip = 216;
                continue _fun5875;
            case 193:
                var5 = !var3;
                if (!var5) {
                    _fun5875_ip = 202;
                    continue _fun5875
                }
            case 199:
                var5 = var4;
            case 202:
                if (!var5) {
                    _fun5875_ip = 216;
                    continue _fun5875
                }
            case 205:
                var5 = var1._endHighlight;
                var5 = var5.bind(var1)(var2);
            case 216:
                var5 = _closure1_slot4;
                var5 = var5[var7];
                if (!var5) {
                    _fun5875_ip = 408;
                    continue _fun5875
                }
            case 230:
                var5 = 'RESPONDER_RELEASE';
                if (!(var6 === var5)) {
                    _fun5875_ip = 408;
                    continue _fun5875
                }
            case 241:
                var5 = var1.props;
                var5 = var5.onLongPress;
                var8 = !var5;
                var5 = _closure1_slot5;
                var6 = var5[var7];
                if (!var6) {
                    _fun5875_ip = 291;
                    continue _fun5875
                }
            case 266:
                var5 = !var8;
                var5 = !var5;
                if (var8) {
                    _fun5875_ip = 288;
                    continue _fun5875
                }
            case 275:
                var8 = var1.touchableLongPressCancelsPress;
                var8 = var8.bind(var1)();
                var5 = !var8;
            case 288:
                var6 = var5;
            case 291:
                var5 = _closure1_slot5;
                var5 = var5[var7];
                var5 = !var5;
                if (var5) {
                    _fun5875_ip = 308;
                    continue _fun5875
                }
            case 305:
                var5 = var6;
            case 308:
                if (!var5) {
                    _fun5875_ip = 317;
                    continue _fun5875
                }
            case 311:
                var5 = var1.touchableHandlePress;
            case 317:
                if (!var5) {
                    _fun5875_ip = 408;
                    continue _fun5875
                }
            case 320:
                if (var3) {
                    _fun5875_ip = 326;
                    continue _fun5875
                }
            case 323:
                var3 = var4;
            case 326:
                if (var3) {
                    _fun5875_ip = 351;
                    continue _fun5875
                }
            case 329:
                var3 = var1._startHighlight;
                var3 = var3.bind(var1)(var2);
                var3 = var1._endHighlight;
                var3 = var3.bind(var1)(var2);
            case 351:
                var3 = var1.props;
                var3 = var3.touchSoundDisabled;
                if (var3) {
                    _fun5875_ip = 397;
                    continue _fun5875
                }
            case 365:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 7;
                var3 = var3[var0];
                var0 = undefined;
                var3 = var4.bind(var0)(var3);
                var0 = var3.playTouchSound;
                var0 = var0.bind(var3)();
            case 397:
                var0 = var1.touchableHandlePress;
                var0 = var0.bind(var1)(var2);
            case 408:
                var0 = var1.touchableDelayTimeout;
                if (!var0) {
                    _fun5875_ip = 438;
                    continue _fun5875
                }
            case 417:
                var0 = global;
                var3 = var0.clearTimeout;
                var2 = var1.touchableDelayTimeout;
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
            case 438:
                var0 = null;
                var1.touchableDelayTimeout = var0;
                var0 = undefined;
                return var0;
        }
    };
    var4._performSideEffectsForTransition = var1;
    var1 = function arg0() {
        _fun5876: for (var _fun5876_ip = 0;;) switch (_fun5876_ip) {
            case 0:
                var2 = arg0;
                var1 = this;
                var0 = var1._savePressInLocation;
                var0 = var0.bind(var1)(var2);
                var0 = var1.touchableHandleActivePressIn;
                if (!var0) {
                    _fun5876_ip = 37;
                    continue _fun5876
                }
            case 26:
                var0 = var1.touchableHandleActivePressIn;
                var0 = var0.bind(var1)(var2);
            case 37:
                var0 = undefined;
                return var0;
        }
    };
    var4._startHighlight = var1;
    var1 = function arg0() {
        _fun5877: for (var _fun5877_ip = 0;;) switch (_fun5877_ip) {
            case 0:
                var3 = arg0;
                var1 = this;
                var _closure2_slot0 = var3;
                var _closure2_slot1 = var1;
                var2 = var1.touchableHandleActivePressOut;
                if (!var2) {
                    _fun5877_ip = 97;
                    continue _fun5877
                }
            case 25:
                var2 = var1.touchableGetPressOutDelayMS;
                if (!var2) {
                    _fun5877_ip = 47;
                    continue _fun5877
                }
            case 34:
                var2 = var1.touchableGetPressOutDelayMS;
                var2 = var2.bind(var1)();
                if (var2) {
                    _fun5877_ip = 60;
                    continue _fun5877
                }
            case 47:
                var2 = var1.touchableHandleActivePressOut;
                var2 = var2.bind(var1)(var3);
                _fun5877_ip = 97;
                continue _fun5877;
            case 60:
                var2 = global;
                var4 = var2.setTimeout;
                var2 = var1.touchableGetPressOutDelayMS;
                var3 = var2.bind(var1)();
                var2 = undefined;
                var0 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = var2.touchableHandleActivePressOut;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var4.bind(var2)(var0, var3);
                var1.pressOutDelayTimeout = var0;
            case 97:
                var0 = undefined;
                return var0;
        }
    };
    var4._endHighlight = var1;
    var1 = {};
    var4.withoutDefaultFocusAndBlur = var1;
    var1 = var4.touchableHandleFocus;
    var1 = var4.touchableHandleBlur;
    var1 = ['touchableHandleFocus', 'touchableHandleBlur'];
    var1 = var5.bind(var0)(var4, var1);
    var4.withoutDefaultFocusAndBlur = var1;
    var1 = {};
    var1.Mixin = var4;
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.color;
        var0 = var0.hitSlop;
        var0 = null;
        return var0;
    };
    var1.renderDebugView = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31, 33, 262, 46, 419, 421, 285]);