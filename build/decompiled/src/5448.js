// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var4 = dependencyMap;
    var0 = 0;
    var5 = var4[var0];
    var4 = require;
    var0 = undefined;
    var4 = var4.bind(var0)(var5);
    var4 = var4.Touchable;
    var5 = {
        'top': 20,
        'left': 20,
        'right': 20,
        'bottom': 30
    };
    var _closure1_slot0 = var5;
    var8 = var4.Mixin;
    var4 = var8.touchableHandleStartShouldSetResponder;
    var _closure1_slot1 = var4;
    var4 = var8.touchableHandleResponderTerminationRequest;
    var _closure1_slot2 = var4;
    var4 = var8.touchableHandleResponderGrant;
    var _closure1_slot3 = var4;
    var4 = var8.touchableHandleResponderMove;
    var _closure1_slot4 = var4;
    var4 = var8.touchableHandleResponderRelease;
    var _closure1_slot5 = var4;
    var4 = var8.touchableHandleResponderTerminate;
    var _closure1_slot6 = var4;
    var4 = var8.touchableGetInitialState;
    var _closure1_slot7 = var4;
    var7 = var3.Object;
    var6 = var7.assign;
    var5 = {};
    var4 = function(arg0) { // Original name: touchableHandleStartShouldSetResponder, environment: var1
        _fun48403: for (var _fun48403_ip = 0;;) switch (_fun48403_ip) {
            case 0:
                var3 = arg0;
                var4 = this;
                var0 = var4.props;
                var2 = var0.onStartShouldSetResponder;
                if (var2) {
                    _fun48403_ip = 40;
                    continue _fun48403
                }
            case 20:
                var1 = _closure1_slot1;
                var0 = var1.call;
                var0 = var0.bind(var1)(var4, var3);
                _fun48403_ip = 47;
                continue _fun48403;
            case 40:
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 47:
                return var0;
        }
    };
    var5.touchableHandleStartShouldSetResponder = var4;
    var4 = function(arg0) { // Original name: touchableHandleResponderTerminationRequest, environment: var1
        _fun48404: for (var _fun48404_ip = 0;;) switch (_fun48404_ip) {
            case 0:
                var3 = arg0;
                var4 = this;
                var0 = var4.props;
                var2 = var0.onResponderTerminationRequest;
                if (var2) {
                    _fun48404_ip = 40;
                    continue _fun48404
                }
            case 20:
                var1 = _closure1_slot2;
                var0 = var1.call;
                var0 = var0.bind(var1)(var4, var3);
                _fun48404_ip = 47;
                continue _fun48404;
            case 40:
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 47:
                return var0;
        }
    };
    var5.touchableHandleResponderTerminationRequest = var4;
    var4 = function(arg0) { // Original name: touchableHandleResponderGrant, environment: var1
        _fun48405: for (var _fun48405_ip = 0;;) switch (_fun48405_ip) {
            case 0:
                var3 = arg0;
                var4 = this;
                var0 = var4.props;
                var2 = var0.onResponderGrant;
                if (var2) {
                    _fun48405_ip = 40;
                    continue _fun48405
                }
            case 20:
                var1 = _closure1_slot3;
                var0 = var1.call;
                var0 = var0.bind(var1)(var4, var3);
                _fun48405_ip = 47;
                continue _fun48405;
            case 40:
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 47:
                return var0;
        }
    };
    var5.touchableHandleResponderGrant = var4;
    var4 = function(arg0) { // Original name: touchableHandleResponderMove, environment: var1
        _fun48406: for (var _fun48406_ip = 0;;) switch (_fun48406_ip) {
            case 0:
                var3 = arg0;
                var4 = this;
                var0 = var4.props;
                var2 = var0.onResponderMove;
                if (var2) {
                    _fun48406_ip = 40;
                    continue _fun48406
                }
            case 20:
                var1 = _closure1_slot4;
                var0 = var1.call;
                var0 = var0.bind(var1)(var4, var3);
                _fun48406_ip = 47;
                continue _fun48406;
            case 40:
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 47:
                return var0;
        }
    };
    var5.touchableHandleResponderMove = var4;
    var4 = function(arg0) { // Original name: touchableHandleResponderRelease, environment: var1
        _fun48407: for (var _fun48407_ip = 0;;) switch (_fun48407_ip) {
            case 0:
                var3 = arg0;
                var4 = this;
                var0 = var4.props;
                var2 = var0.onResponderRelease;
                if (var2) {
                    _fun48407_ip = 40;
                    continue _fun48407
                }
            case 20:
                var1 = _closure1_slot5;
                var0 = var1.call;
                var0 = var0.bind(var1)(var4, var3);
                _fun48407_ip = 47;
                continue _fun48407;
            case 40:
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 47:
                return var0;
        }
    };
    var5.touchableHandleResponderRelease = var4;
    var4 = function(arg0) { // Original name: touchableHandleResponderTerminate, environment: var1
        _fun48408: for (var _fun48408_ip = 0;;) switch (_fun48408_ip) {
            case 0:
                var3 = arg0;
                var4 = this;
                var0 = var4.props;
                var2 = var0.onResponderTerminate;
                if (var2) {
                    _fun48408_ip = 40;
                    continue _fun48408
                }
            case 20:
                var1 = _closure1_slot6;
                var0 = var1.call;
                var0 = var0.bind(var1)(var4, var3);
                _fun48408_ip = 47;
                continue _fun48408;
            case 40:
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 47:
                return var0;
        }
    };
    var5.touchableHandleResponderTerminate = var4;
    var4 = function(arg0) { // Original name: touchableHandlePress, environment: var1
        _fun48409: for (var _fun48409_ip = 0;;) switch (_fun48409_ip) {
            case 0:
                var0 = this;
                var0 = var0.props;
                var2 = var0.onPress;
                if (!var2) {
                    _fun48409_ip = 26;
                    continue _fun48409
                }
            case 16:
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
            case 26:
                var0 = undefined;
                return var0;
        }
    };
    var5.touchableHandlePress = var4;
    var4 = function(arg0) { // Original name: touchableHandleActivePressIn, environment: var1
        _fun48410: for (var _fun48410_ip = 0;;) switch (_fun48410_ip) {
            case 0:
                var0 = this;
                var0 = var0.props;
                var2 = var0.onPressIn;
                if (!var2) {
                    _fun48410_ip = 27;
                    continue _fun48410
                }
            case 17:
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
            case 27:
                var0 = undefined;
                return var0;
        }
    };
    var5.touchableHandleActivePressIn = var4;
    var4 = function(arg0) { // Original name: touchableHandleActivePressOut, environment: var1
        _fun48411: for (var _fun48411_ip = 0;;) switch (_fun48411_ip) {
            case 0:
                var0 = this;
                var0 = var0.props;
                var2 = var0.onPressOut;
                if (!var2) {
                    _fun48411_ip = 27;
                    continue _fun48411
                }
            case 17:
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
            case 27:
                var0 = undefined;
                return var0;
        }
    };
    var5.touchableHandleActivePressOut = var4;
    var4 = function(arg0) { // Original name: touchableHandleLongPress, environment: var1
        _fun48412: for (var _fun48412_ip = 0;;) switch (_fun48412_ip) {
            case 0:
                var0 = this;
                var0 = var0.props;
                var2 = var0.onLongPress;
                if (!var2) {
                    _fun48412_ip = 27;
                    continue _fun48412
                }
            case 17:
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
            case 27:
                var0 = undefined;
                return var0;
        }
    };
    var5.touchableHandleLongPress = var4;
    var4 = function() { // Original name: touchableGetPressRectOffset, environment: var1
        _fun48413: for (var _fun48413_ip = 0;;) switch (_fun48413_ip) {
            case 0:
                var0 = this;
                var0 = var0.props;
                var0 = var0.pressRetentionOffset;
                if (var0) {
                    _fun48413_ip = 24;
                    continue _fun48413
                }
            case 17:
                var0 = _closure1_slot0;
            case 24:
                return var0;
        }
    };
    var5.touchableGetPressRectOffset = var4;
    var4 = function() { // Original name: touchableGetHitSlop, environment: var1
        var0 = this;
        var0 = var0.props;
        var0 = var0.hitSlop;
        return var0;
    };
    var5.touchableGetHitSlop = var4;
    var4 = function() { // Original name: touchableGetHighlightDelayMS, environment: var1
        _fun48415: for (var _fun48415_ip = 0;;) switch (_fun48415_ip) {
            case 0:
                var0 = this;
                var0 = var0.props;
                var0 = var0.delayPressIn;
                if (var0) {
                    _fun48415_ip = 19;
                    continue _fun48415
                }
            case 17:
                var0 = 0;
            case 19:
                return var0;
        }
    };
    var5.touchableGetHighlightDelayMS = var4;
    var4 = function() { // Original name: touchableGetLongPressDelayMS, environment: var1
        _fun48416: for (var _fun48416_ip = 0;;) switch (_fun48416_ip) {
            case 0:
                var0 = this;
                var0 = var0.props;
                var1 = var0.delayLongPress;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun48416_ip = 32;
                    continue _fun48416
                }
            case 20:
                if (var1) {
                    _fun48416_ip = 29;
                    continue _fun48416
                }
            case 23:
                var1 = 500;
            case 29:
                var0 = var1;
            case 32:
                return var0;
        }
    };
    var5.touchableGetLongPressDelayMS = var4;
    var4 = function() { // Original name: touchableGetPressOutDelayMS, environment: var1
        _fun48417: for (var _fun48417_ip = 0;;) switch (_fun48417_ip) {
            case 0:
                var0 = this;
                var0 = var0.props;
                var0 = var0.delayPressOut;
                if (var0) {
                    _fun48417_ip = 19;
                    continue _fun48417
                }
            case 17:
                var0 = 0;
            case 19:
                return var0;
        }
    };
    var5.touchableGetPressOutDelayMS = var4;
    var4 = {};
    var5 = var6.bind(var7)(var4, var8, var5);
    var _closure1_slot8 = var5;
    var4 = var3.Object;
    var3 = var4.keys;
    var3 = var3.bind(var4)(var5);
    var _closure1_slot9 = var3;
    var5 = var3.map;
    var4 = function(arg0) { // Environment: var1
        var1 = _closure1_slot8;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var4 = var5.bind(var3)(var4);
    var _closure1_slot10 = var4;
    var3 = var3.length;
    var _closure1_slot11 = var3;
    var1 = function(arg0) { // Original name: _default, environment: var1
        _fun48419: for (var _fun48419_ip = 0;;) switch (_fun48419_ip) {
            case 0:
                var2 = arg0;
                var1 = _closure1_slot11;
                var4 = 0;
                var1 = var4 < var1;
                var3 = 'function';
                if (!var1) {
                    _fun48419_ip = 74;
                    continue _fun48419
                }
            case 23:
                var1 = _closure1_slot9;
                var5 = var1[var4];
                var1 = _closure1_slot10;
                var7 = var1[var4];
                var6 = typeof var7;
                var1 = var7;
                if (!(var3 === var6)) {
                    _fun48419_ip = 59;
                    continue _fun48419
                }
            case 49:
                var6 = var7.bind;
                var1 = var6.bind(var7)(var2);
            case 59:
                var2[var5] = var1;
                var4 = var4 + 1;
                var1 = _closure1_slot11;
                if (var4 < var1) {
                    _fun48419_ip = 23;
                    continue _fun48419
                }
            case 74:
                var1 = _closure1_slot7;
                var0 = undefined;
                var1 = var1.bind(var0)();
                var2.state = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);