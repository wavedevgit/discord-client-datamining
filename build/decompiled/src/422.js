// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun5895: for (var _fun5895_ip = 0;;) switch (_fun5895_ip) {
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
                _fun5895_ip = 74;
                continue _fun5895;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = ['onBlur', 'onFocus'];
    var _closure1_slot2 = var0;
    var0 = ['ref'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var4 = 6;
    var7 = var6[var4];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot10 = var3;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.cloneElement;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var5 = var4.jsx;
    var _closure1_slot12 = var5;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = var3.Component;
    var3 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: TouchableHighlightImpl, environment: var5
            _fun5899: for (var _fun5899_ip = 0;;) switch (_fun5899_ip) {
                case 0:
                    var3 = this;
                    var4 = undefined;
                    var8 = undefined;
                    var5 = _closure1_slot5;
                    var1 = _closure2_slot0;
                    var1 = var5.bind(var4)(var3, var1);
                    var5 = arguments.length;
                    var6 = global;
                    var1 = var6.Array;
                    var7 = var1.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var1
                        }
                    });
                    var13 = var7;
                    var12 = var5;
                    var1 = new var13[var1](var12, var11);
                    var7 = var1 instanceof Object ? var1 : var7;
                    var1 = 0;
                    var9 = var1 < var5;
                    if (!var9) {
                        _fun5899_ip = 85;
                        continue _fun5899
                    }
                case 70:
                    var9 = arguments[var1];
                    var7[var1] = var9;
                    var1 = var1 + 1;
                    if (var1 < var5) {
                        _fun5899_ip = 70;
                        continue _fun5899
                    }
                case 85:
                    var1 = _closure2_slot0;
                    var5 = new Array(0);
                    var0 = var5.concat;
                    var5 = var0.bind(var5)(var7);
                    var0 = _closure1_slot8;
                    var9 = var0.bind(var4)(var1);
                    var1 = _closure1_slot7;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun5899_ip = 140;
                        continue _fun5899
                    }
                case 127:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var3, var5);
                    _fun5899_ip = 182;
                    continue _fun5899;
                case 140:
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = var5;
                    if (var6) {
                        _fun5899_ip = 161;
                        continue _fun5899
                    }
                case 157:
                    var6 = new Array(0);
                case 161:
                    var5 = _closure1_slot8;
                    var5 = var5.bind(var4)(var3);
                    var5 = var5.constructor;
                    var0 = var7.bind(var8)(var9, var6, var5);
                case 182:
                    var0 = var1.bind(var4)(var3, var0);
                    var1 = false;
                    var0._isMounted = var1;
                    var1 = {};
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 8;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var2 = var0._createPressabilityConfig;
                    var12 = var2.bind(var0)();
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var13 = var3;
                    var2 = new var13[var4](var12, var11);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var1.pressability = var2;
                    var2 = var0.props;
                    var4 = var2.testOnly_pressed;
                    var3 = true;
                    var2 = null;
                    if (!(var3 === var4)) {
                        _fun5899_ip = 282;
                        continue _fun5899
                    }
                case 272:
                    var3 = var0._createExtraStyles;
                    var2 = var3.bind(var0)();
                case 282:
                    var1.extraStyles = var2;
                    var0.state = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot6;
        var4 = {};
        var0 = '_createPressabilityConfig';
        var4.key = var0;
        var0 = function() { // Original name: _createPressabilityConfig, environment: var5
            _fun5900: for (var _fun5900_ip = 0;;) switch (_fun5900_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var0 = {};
                    var3 = var2.props;
                    var3 = var3.rejectResponderTermination;
                    var3 = !var3;
                    var0.cancelable = var3;
                    var3 = var2.props;
                    var4 = var3.disabled;
                    var3 = null;
                    if (!(var3 == var4)) {
                        _fun5900_ip = 73;
                        continue _fun5900
                    }
                case 46:
                    var4 = var2.props;
                    var4 = var4.accessibilityState;
                    var5 = var3 == var4;
                    var3 = undefined;
                    if (var5) {
                        _fun5900_ip = 71;
                        continue _fun5900
                    }
                case 66:
                    var3 = var4.disabled;
                case 71:
                    _fun5900_ip = 83;
                    continue _fun5900;
                case 73:
                    var4 = var2.props;
                    var3 = var4.disabled;
                case 83:
                    var0.disabled = var3;
                    var3 = var2.props;
                    var3 = var3.hitSlop;
                    var0.hitSlop = var3;
                    var3 = var2.props;
                    var3 = var3.delayLongPress;
                    var0.delayLongPress = var3;
                    var3 = var2.props;
                    var3 = var3.delayPressIn;
                    var0.delayPressIn = var3;
                    var3 = var2.props;
                    var3 = var3.delayPressOut;
                    var0.delayPressOut = var3;
                    var3 = 0;
                    var0.minPressDuration = var3;
                    var3 = var2.props;
                    var3 = var3.pressRetentionOffset;
                    var0.pressRectOffset = var3;
                    var3 = var2.props;
                    var3 = var3.touchSoundDisabled;
                    var0.android_disableSound = var3;
                    var3 = function(arg0) { // Original name: onBlur, environment: var1
                        _fun5901: for (var _fun5901_ip = 0;;) switch (_fun5901_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 9;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.isTV;
                                if (!var1) {
                                    _fun5901_ip = 51;
                                    continue _fun5901
                                }
                            case 34:
                                var2 = _closure3_slot0;
                                var1 = var2._hideUnderlay;
                                var1 = var1.bind(var2)();
                            case 51:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var3 = var2.onBlur;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun5901_ip = 98;
                                    continue _fun5901
                                }
                            case 75:
                                var1 = _closure3_slot0;
                                var3 = var1.props;
                                var2 = var3.onBlur;
                                var1 = arg0;
                                var1 = var2.bind(var3)(var1);
                            case 98:
                                return var0;
                        }
                    };
                    var0.onBlur = var3;
                    var3 = function(arg0) { // Original name: onFocus, environment: var1
                        _fun5902: for (var _fun5902_ip = 0;;) switch (_fun5902_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 9;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.isTV;
                                if (!var1) {
                                    _fun5902_ip = 51;
                                    continue _fun5902
                                }
                            case 34:
                                var2 = _closure3_slot0;
                                var1 = var2._showUnderlay;
                                var1 = var1.bind(var2)();
                            case 51:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var3 = var2.onFocus;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun5902_ip = 98;
                                    continue _fun5902
                                }
                            case 75:
                                var1 = _closure3_slot0;
                                var3 = var1.props;
                                var2 = var3.onFocus;
                                var1 = arg0;
                                var1 = var2.bind(var3)(var1);
                            case 98:
                                return var0;
                        }
                    };
                    var0.onFocus = var3;
                    var2 = var2.props;
                    var2 = var2.onLongPress;
                    var0.onLongPress = var2;
                    var2 = function(arg0) { // Original name: onPress, environment: var1
                        _fun5903: for (var _fun5903_ip = 0;;) switch (_fun5903_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0._hideTimeout;
                                var3 = null;
                                if (!(var3 != var0)) {
                                    _fun5903_ip = 44;
                                    continue _fun5903
                                }
                            case 19:
                                var0 = global;
                                var4 = var0.clearTimeout;
                                var0 = _closure3_slot0;
                                var2 = var0._hideTimeout;
                                var0 = undefined;
                                var0 = var4.bind(var0)(var2);
                            case 44:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 9;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var4.bind(var0)(var2);
                                var2 = var2.isTV;
                                if (var2) {
                                    _fun5903_ip = 142;
                                    continue _fun5903
                                }
                            case 78:
                                var4 = _closure3_slot0;
                                var2 = var4._showUnderlay;
                                var2 = var2.bind(var4)();
                                var2 = global;
                                var6 = var2.setTimeout;
                                var2 = var4.props;
                                var2 = var2.delayPressOut;
                                var7 = var3 != var2;
                                var5 = 0;
                                if (!var7) {
                                    _fun5903_ip = 123;
                                    continue _fun5903
                                }
                            case 120:
                                var5 = var2;
                            case 123:
                                var2 = function() { // Environment: var2
                                    var1 = _closure3_slot0;
                                    var0 = var1._hideUnderlay;
                                    var0 = var0.bind(var1)();
                                    var0 = undefined;
                                    return var0;
                                };
                                var2 = var6.bind(var0)(var2, var5);
                                var4._hideTimeout = var2;
                            case 142:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var2 = var2.onPress;
                                if (!(var3 != var2)) {
                                    _fun5903_ip = 182;
                                    continue _fun5903
                                }
                            case 160:
                                var1 = _closure3_slot0;
                                var3 = var1.props;
                                var2 = var3.onPress;
                                var1 = arg0;
                                var1 = var2.bind(var3)(var1);
                            case 182:
                                return var0;
                        }
                    };
                    var0.onPress = var2;
                    var2 = function(arg0) { // Original name: onPressIn, environment: var1
                        _fun5905: for (var _fun5905_ip = 0;;) switch (_fun5905_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1._hideTimeout;
                                var2 = null;
                                if (!(var2 != var1)) {
                                    _fun5905_ip = 50;
                                    continue _fun5905
                                }
                            case 19:
                                var1 = global;
                                var5 = var1.clearTimeout;
                                var1 = _closure3_slot0;
                                var4 = var1._hideTimeout;
                                var3 = undefined;
                                var3 = var5.bind(var3)(var4);
                                var1._hideTimeout = var2;
                            case 50:
                                var1 = _closure3_slot0;
                                var3 = var1._showUnderlay;
                                var3 = var3.bind(var1)();
                                var1 = var1.props;
                                var1 = var1.onPressIn;
                                if (!(var2 != var1)) {
                                    _fun5905_ip = 102;
                                    continue _fun5905
                                }
                            case 79:
                                var0 = _closure3_slot0;
                                var2 = var0.props;
                                var1 = var2.onPressIn;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                            case 102:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onPressIn = var2;
                    var1 = function(arg0) { // Original name: onPressOut, environment: var1
                        _fun5906: for (var _fun5906_ip = 0;;) switch (_fun5906_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1._hideTimeout;
                                var2 = null;
                                if (!(var2 == var1)) {
                                    _fun5906_ip = 33;
                                    continue _fun5906
                                }
                            case 19:
                                var3 = _closure3_slot0;
                                var1 = var3._hideUnderlay;
                                var1 = var1.bind(var3)();
                            case 33:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var1 = var1.onPressOut;
                                if (!(var2 != var1)) {
                                    _fun5906_ip = 75;
                                    continue _fun5906
                                }
                            case 52:
                                var0 = _closure3_slot0;
                                var2 = var0.props;
                                var1 = var2.onPressOut;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                            case 75:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onPressOut = var1;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = '_createExtraStyles';
        var4.key = var6;
        var6 = function() { // Original name: _createExtraStyles, environment: var5
            _fun5907: for (var _fun5907_ip = 0;;) switch (_fun5907_ip) {
                case 0:
                    var3 = this;
                    var0 = {};
                    var1 = {};
                    var2 = var3.props;
                    var4 = var2.activeOpacity;
                    var2 = null;
                    var5 = var2 != var4;
                    var2 = 0.85;
                    if (!var5) {
                        _fun5907_ip = 40;
                        continue _fun5907
                    }
                case 37:
                    var2 = var4;
                case 40:
                    var1.opacity = var2;
                    var0.child = var1;
                    var1 = {};
                    var2 = var3.props;
                    var5 = var2.underlayColor;
                    var2 = 'black';
                    var4 = undefined;
                    if (!(var4 !== var5)) {
                        _fun5907_ip = 83;
                        continue _fun5907
                    }
                case 72:
                    var3 = var3.props;
                    var2 = var3.underlayColor;
                case 83:
                    var1.backgroundColor = var2;
                    var0.underlay = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = '_showUnderlay';
        var4.key = var6;
        var6 = function() { // Original name: _showUnderlay, environment: var5
            _fun5908: for (var _fun5908_ip = 0;;) switch (_fun5908_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._isMounted;
                    if (!var1) {
                        _fun5908_ip = 22;
                        continue _fun5908
                    }
                case 12:
                    var2 = var0._hasPressHandler;
                    var1 = var2.bind(var0)();
                case 22:
                    if (!var1) {
                        _fun5908_ip = 85;
                        continue _fun5908
                    }
                case 25:
                    var2 = var0.setState;
                    var1 = {};
                    var3 = var0._createExtraStyles;
                    var3 = var3.bind(var0)();
                    var1.extraStyles = var3;
                    var1 = var2.bind(var0)(var1);
                    var1 = var0.props;
                    var2 = var1.onShowUnderlay;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun5908_ip = 85;
                        continue _fun5908
                    }
                case 70:
                    var1 = var0.props;
                    var0 = var1.onShowUnderlay;
                    var0 = var0.bind(var1)();
                case 85:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = '_hideUnderlay';
        var4.key = var6;
        var6 = function() { // Original name: _hideUnderlay, environment: var5
            _fun5909: for (var _fun5909_ip = 0;;) switch (_fun5909_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._hideTimeout;
                    var2 = null;
                    if (!(var2 != var1)) {
                        _fun5909_ip = 42;
                        continue _fun5909
                    }
                case 15:
                    var1 = global;
                    var4 = var1.clearTimeout;
                    var3 = var0._hideTimeout;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var0._hideTimeout = var2;
                case 42:
                    var1 = var0.props;
                    var3 = var1.testOnly_pressed;
                    var1 = true;
                    var1 = var1 !== var3;
                    if (!var1) {
                        _fun5909_ip = 72;
                        continue _fun5909
                    }
                case 62:
                    var3 = var0._hasPressHandler;
                    var1 = var3.bind(var0)();
                case 72:
                    if (!var1) {
                        _fun5909_ip = 123;
                        continue _fun5909
                    }
                case 75:
                    var3 = var0.setState;
                    var1 = {};
                    var1.extraStyles = var2;
                    var1 = var3.bind(var0)(var1);
                    var1 = var0.props;
                    var1 = var1.onHideUnderlay;
                    if (!(var2 != var1)) {
                        _fun5909_ip = 123;
                        continue _fun5909
                    }
                case 108:
                    var1 = var0.props;
                    var0 = var1.onHideUnderlay;
                    var0 = var0.bind(var1)();
                case 123:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = '_hasPressHandler';
        var4.key = var6;
        var6 = function() { // Original name: _hasPressHandler, environment: var5
            _fun5910: for (var _fun5910_ip = 0;;) switch (_fun5910_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.props;
                    var0 = var0.onPress;
                    var2 = null;
                    var0 = var2 != var0;
                    if (var0) {
                        _fun5910_ip = 37;
                        continue _fun5910
                    }
                case 22:
                    var3 = var1.props;
                    var3 = var3.onPressIn;
                    var0 = var2 != var3;
                case 37:
                    if (var0) {
                        _fun5910_ip = 55;
                        continue _fun5910
                    }
                case 40:
                    var3 = var1.props;
                    var3 = var3.onPressOut;
                    var0 = var2 != var3;
                case 55:
                    if (var0) {
                        _fun5910_ip = 73;
                        continue _fun5910
                    }
                case 58:
                    var1 = var1.props;
                    var1 = var1.onLongPress;
                    var0 = var2 != var1;
                case 73:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var6 = function() { // Original name: render, environment: var5
            _fun5911: for (var _fun5911_ip = 0;;) switch (_fun5911_ip) {
                case 0:
                    var12 = this;
                    var0 = _closure1_slot10;
                    var2 = var0.Children;
                    var1 = var2.only;
                    var0 = var12.props;
                    var0 = var0.children;
                    var11 = var1.bind(var2)(var0);
                    var0 = var12.state;
                    var1 = var0.pressability;
                    var0 = var1.getEventHandlers;
                    var2 = var0.bind(var1)();
                    var0 = var2.onBlur;
                    var0 = var2.onFocus;
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot2;
                    var3 = undefined;
                    var7 = var1.bind(var3)(var2, var0);
                    var0 = var12.props;
                    var0 = var0.disabled;
                    var9 = null;
                    if (!(var9 == var0)) {
                        _fun5911_ip = 115;
                        continue _fun5911
                    }
                case 102:
                    var0 = var12.props;
                    var14 = var0.accessibilityState;
                    _fun5911_ip = 164;
                    continue _fun5911;
                case 115:
                    var0 = global;
                    var5 = var0.Object;
                    var4 = var5.assign;
                    var0 = var12.props;
                    var2 = var0.accessibilityState;
                    var1 = {};
                    var0 = var12.props;
                    var0 = var0.disabled;
                    var1.disabled = var0;
                    var0 = {};
                    var14 = var4.bind(var5)(var0, var2, var1);
                case 164:
                    var10 = {};
                    var0 = var12.props;
                    var0 = var0["aria-valuemax"];
                    if (!(var9 == var0)) {
                        _fun5911_ip = 209;
                        continue _fun5911
                    }
                case 181:
                    var1 = var12.props;
                    var2 = var1.accessibilityValue;
                    var4 = var9 == var2;
                    var1 = undefined;
                    if (var4) {
                        _fun5911_ip = 206;
                        continue _fun5911
                    }
                case 201:
                    var1 = var2.max;
                case 206:
                    var0 = var1;
                case 209:
                    var10.max = var0;
                    var0 = var12.props;
                    var0 = var0["aria-valuemin"];
                    if (!(var9 == var0)) {
                        _fun5911_ip = 256;
                        continue _fun5911
                    }
                case 228:
                    var1 = var12.props;
                    var2 = var1.accessibilityValue;
                    var4 = var9 == var2;
                    var1 = undefined;
                    if (var4) {
                        _fun5911_ip = 253;
                        continue _fun5911
                    }
                case 248:
                    var1 = var2.min;
                case 253:
                    var0 = var1;
                case 256:
                    var10.min = var0;
                    var0 = var12.props;
                    var0 = var0["aria-valuenow"];
                    if (!(var9 == var0)) {
                        _fun5911_ip = 303;
                        continue _fun5911
                    }
                case 275:
                    var1 = var12.props;
                    var2 = var1.accessibilityValue;
                    var4 = var9 == var2;
                    var1 = undefined;
                    if (var4) {
                        _fun5911_ip = 300;
                        continue _fun5911
                    }
                case 295:
                    var1 = var2.now;
                case 300:
                    var0 = var1;
                case 303:
                    var10.now = var0;
                    var0 = var12.props;
                    var0 = var0["aria-valuetext"];
                    if (!(var9 == var0)) {
                        _fun5911_ip = 350;
                        continue _fun5911
                    }
                case 322:
                    var1 = var12.props;
                    var2 = var1.accessibilityValue;
                    var4 = var9 == var2;
                    var1 = undefined;
                    if (var4) {
                        _fun5911_ip = 347;
                        continue _fun5911
                    }
                case 342:
                    var1 = var2.text;
                case 347:
                    var0 = var1;
                case 350:
                    var10.text = var0;
                    var0 = var12.props;
                    var2 = var0["aria-live"];
                    var0 = 'none';
                    var1 = 'off';
                    if (!(var1 !== var2)) {
                        _fun5911_ip = 406;
                        continue _fun5911
                    }
                case 377:
                    var1 = var12.props;
                    var1 = var1["aria-live"];
                    if (!(var9 == var1)) {
                        _fun5911_ip = 403;
                        continue _fun5911
                    }
                case 392:
                    var2 = var12.props;
                    var1 = var2.accessibilityLiveRegion;
                case 403:
                    var0 = var1;
                case 406:
                    var1 = var12.props;
                    var15 = var1["aria-label"];
                    if (!(var9 == var15)) {
                        _fun5911_ip = 431;
                        continue _fun5911
                    }
                case 421:
                    var1 = var12.props;
                    var15 = var1.accessibilityLabel;
                case 431:
                    var2 = _closure1_slot13;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 10;
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var4 = global;
                    var6 = var4.Object;
                    var5 = var6.assign;
                    var4 = {};
                    var8 = var12.props;
                    var16 = var8.accessible;
                    var8 = false;
                    var16 = var8 !== var16;
                    var4.accessible = var16;
                    var4.accessibilityLabel = var15;
                    var15 = var12.props;
                    var15 = var15.accessibilityHint;
                    var4.accessibilityHint = var15;
                    var15 = var12.props;
                    var15 = var15.accessibilityLanguage;
                    var4.accessibilityLanguage = var15;
                    var15 = var12.props;
                    var15 = var15.accessibilityRole;
                    var4.accessibilityRole = var15;
                    var4.accessibilityState = var14;
                    var4.accessibilityValue = var10;
                    var10 = var12.props;
                    var10 = var10.accessibilityActions;
                    var4.accessibilityActions = var10;
                    var10 = var12.props;
                    var10 = var10.onAccessibilityAction;
                    var4.onAccessibilityAction = var10;
                    var10 = var12.props;
                    var15 = var10["aria-hidden"];
                    var10 = 'no-hide-descendants';
                    var14 = true;
                    if (!(var14 !== var15)) {
                        _fun5911_ip = 616;
                        continue _fun5911
                    }
                case 605:
                    var14 = var12.props;
                    var10 = var14.importantForAccessibility;
                case 616:
                    var4.importantForAccessibility = var10;
                    var10 = var12.props;
                    var10 = var10["aria-modal"];
                    if (!(var9 == var10)) {
                        _fun5911_ip = 647;
                        continue _fun5911
                    }
                case 636:
                    var14 = var12.props;
                    var10 = var14.accessibilityViewIsModal;
                case 647:
                    var4.accessibilityViewIsModal = var10;
                    var4.accessibilityLiveRegion = var0;
                    var0 = var12.props;
                    var0 = var0["aria-hidden"];
                    if (!(var9 == var0)) {
                        _fun5911_ip = 683;
                        continue _fun5911
                    }
                case 672:
                    var10 = var12.props;
                    var0 = var10.accessibilityElementsHidden;
                case 683:
                    var4.accessibilityElementsHidden = var0;
                    var10 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var15 = 11;
                    var0 = var0[var15];
                    var16 = var10.bind(var3)(var0);
                    var14 = var16.compose;
                    var0 = var12.props;
                    var10 = var0.style;
                    var0 = var12.state;
                    var17 = var0.extraStyles;
                    var18 = var9 == var17;
                    var0 = undefined;
                    if (var18) {
                        _fun5911_ip = 750;
                        continue _fun5911
                    }
                case 744:
                    var0 = var17.underlay;
                case 750:
                    var0 = var14.bind(var16)(var10, var0);
                    var4.style = var0;
                    var0 = var12.props;
                    var0 = var0.onLayout;
                    var4.onLayout = var0;
                    var0 = var12.props;
                    var0 = var0.hitSlop;
                    var4.hitSlop = var0;
                    var0 = var12.props;
                    var0 = var0.hasTVPreferredFocus;
                    var4.hasTVPreferredFocus = var0;
                    var0 = var12.props;
                    var0 = var0.nextFocusDown;
                    var4.nextFocusDown = var0;
                    var0 = var12.props;
                    var0 = var0.nextFocusForward;
                    var4.nextFocusForward = var0;
                    var0 = var12.props;
                    var0 = var0.nextFocusLeft;
                    var4.nextFocusLeft = var0;
                    var0 = var12.props;
                    var0 = var0.nextFocusRight;
                    var4.nextFocusRight = var0;
                    var0 = var12.props;
                    var0 = var0.nextFocusUp;
                    var4.nextFocusUp = var0;
                    var0 = var12.props;
                    var0 = var0.focusable;
                    var0 = var8 !== var0;
                    if (!var0) {
                        _fun5911_ip = 920;
                        continue _fun5911
                    }
                case 906:
                    var8 = var12.props;
                    var8 = var8.onPress;
                    var0 = var3 !== var8;
                case 920:
                    if (!var0) {
                        _fun5911_ip = 936;
                        continue _fun5911
                    }
                case 923:
                    var8 = var12.props;
                    var8 = var8.disabled;
                    var0 = !var8;
                case 936:
                    var4.focusable = var0;
                    var0 = var12.props;
                    var0 = var0.id;
                    if (!(var9 == var0)) {
                        _fun5911_ip = 966;
                        continue _fun5911
                    }
                case 955:
                    var8 = var12.props;
                    var0 = var8.nativeID;
                case 966:
                    var4.nativeID = var0;
                    var0 = var12.props;
                    var0 = var0.testID;
                    var4.testID = var0;
                    var0 = var12.props;
                    var0 = var0.hostRef;
                    var4.ref = var0;
                    var0 = {};
                    var10 = _closure1_slot11;
                    var8 = {};
                    var14 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var13 = var13[var15];
                    var15 = var14.bind(var3)(var13);
                    var14 = var15.compose;
                    var13 = var11.props;
                    var13 = var13.style;
                    var12 = var12.state;
                    var16 = var12.extraStyles;
                    var17 = var9 == var16;
                    var12 = undefined;
                    if (var17) {
                        _fun5911_ip = 1069;
                        continue _fun5911
                    }
                case 1063:
                    var12 = var16.child;
                case 1069:
                    var12 = var14.bind(var15)(var13, var12);
                    var8.style = var12;
                    var10 = var10.bind(var3)(var11, var8);
                    var8 = new Array(2);
                    var8[0] = var10;
                    var8[1] = var9;
                    var0.children = var8;
                    var0 = var5.bind(var6)(var4, var7, var0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'componentDidMount';
        var4.key = var6;
        var6 = function() { // Original name: componentDidMount, environment: var5
            var3 = this;
            var0 = true;
            var3._isMounted = var0;
            var0 = var3.state;
            var2 = var0.pressability;
            var1 = var2.configure;
            var0 = var3._createPressabilityConfig;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: componentDidUpdate, environment: var5
            var3 = this;
            var0 = var3.state;
            var2 = var0.pressability;
            var1 = var2.configure;
            var0 = var3._createPressabilityConfig;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var5 = function() { // Original name: componentWillUnmount, environment: var5
            _fun5914: for (var _fun5914_ip = 0;;) switch (_fun5914_ip) {
                case 0:
                    var0 = this;
                    var1 = false;
                    var0._isMounted = var1;
                    var2 = var0._hideTimeout;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun5914_ip = 44;
                        continue _fun5914
                    }
                case 23:
                    var1 = global;
                    var3 = var1.clearTimeout;
                    var2 = var0._hideTimeout;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
                case 44:
                    var0 = var0.state;
                    var1 = var0.pressability;
                    var0 = var1.reset;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var _closure1_slot14 = var3;
    var1 = function(arg0) { // Original name: TouchableHighlight, environment: var1
        var5 = arg0;
        var0 = var5.ref;
        var4 = _closure1_slot4;
        var2 = _closure1_slot3;
        var3 = undefined;
        var7 = var4.bind(var3)(var5, var2);
        var2 = _closure1_slot12;
        var1 = _closure1_slot14;
        var4 = global;
        var6 = var4.Object;
        var5 = var6.assign;
        var4 = {};
        var4.hostRef = var0;
        var0 = {};
        var0 = var5.bind(var6)(var0, var7, var4);
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var3 = 'TouchableHighlight';
    var1.displayName = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 31, 33, 282, 262, 112, 253]);