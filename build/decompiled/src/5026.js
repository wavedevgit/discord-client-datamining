// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun45208: for (var _fun45208_ip = 0;;) switch (_fun45208_ip) {
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
                _fun45208_ip = 74;
                continue _fun45208;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = ['style'];
    var _closure1_slot3 = var0;
    var3 = global;
    var9 = var3.Object;
    var7 = var9.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var6);
    var0 = 0;
    var6 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 3;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 4;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var _closure1_slot8 = var6;
    var6 = 5;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var _closure1_slot9 = var6;
    var6 = 6;
    var9 = var5[var6];
    var7 = arg3;
    var7 = var7.bind(var0)(var9);
    var _closure1_slot10 = var7;
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.Component;
    var7 = 7;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var9 = var7.StyleSheet;
    var _closure1_slot11 = var9;
    var7 = var7.View;
    var _closure1_slot12 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.jsx;
    var _closure1_slot13 = var7;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun45212: for (var _fun45212_ip = 0;;) switch (_fun45212_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot5;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var2);
                    var9 = new Array(1);
                    var0 = arg0;
                    var9[0] = var0;
                    var0 = _closure1_slot8;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot7;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun45212_ip = 75;
                        continue _fun45212
                    }
                case 62:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun45212_ip = 109;
                    continue _fun45212;
                case 75:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot8;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 109:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = function() { // Environment: var1
                        _fun45213: for (var _fun45213_ip = 0;;) switch (_fun45213_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var1 = var2.hasPressHandler;
                                var1 = var1.bind(var2)();
                                if (!var1) {
                                    _fun45213_ip = 117;
                                    continue _fun45213
                                }
                            case 20:
                                var1 = _closure3_slot0;
                                var3 = var1.setState;
                                var2 = {};
                                var4 = {};
                                var5 = var1.props;
                                var5 = var5.activeOpacity;
                                var4.opacity = var5;
                                var2.extraChildStyle = var4;
                                var4 = {};
                                var5 = var1.props;
                                var5 = var5.underlayColor;
                                var4.backgroundColor = var5;
                                var2.extraUnderlayStyle = var4;
                                var2 = var3.bind(var1)(var2);
                                var1 = var1.props;
                                var2 = var1.onShowUnderlay;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun45213_ip = 117;
                                    continue _fun45213
                                }
                            case 98:
                                var0 = _closure3_slot0;
                                var1 = var0.props;
                                var0 = var1.onShowUnderlay;
                                var0 = var0.bind(var1)();
                            case 117:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.showUnderlay = var2;
                    var2 = function() { // Environment: var1
                        _fun45214: for (var _fun45214_ip = 0;;) switch (_fun45214_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var0 = var0.onPress;
                                if (var0) {
                                    _fun45214_ip = 35;
                                    continue _fun45214
                                }
                            case 20:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var0 = var2.onPressIn;
                            case 35:
                                if (var0) {
                                    _fun45214_ip = 53;
                                    continue _fun45214
                                }
                            case 38:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var0 = var2.onPressOut;
                            case 53:
                                if (var0) {
                                    _fun45214_ip = 71;
                                    continue _fun45214
                                }
                            case 56:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var0 = var1.onLongPress;
                            case 71:
                                return var0;
                        }
                    };
                    var0.hasPressHandler = var2;
                    var2 = function() { // Environment: var1
                        _fun45215: for (var _fun45215_ip = 0;;) switch (_fun45215_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var4 = var1.setState;
                                var2 = null;
                                var3 = {
                                    'extraChildStyle': null,
                                    'extraUnderlayStyle': null
                                };
                                var3 = var4.bind(var1)(var3);
                                var1 = var1.props;
                                var1 = var1.onHideUnderlay;
                                if (!(var2 != var1)) {
                                    _fun45215_ip = 64;
                                    continue _fun45215
                                }
                            case 45:
                                var0 = _closure3_slot0;
                                var1 = var0.props;
                                var0 = var1.onHideUnderlay;
                                var0 = var0.bind(var1)();
                            case 64:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.hideUnderlay = var2;
                    var1 = function(arg0, arg1) { // Environment: var1
                        _fun45216: for (var _fun45216_ip = 0;;) switch (_fun45216_ip) {
                            case 0:
                                var3 = arg1;
                                var4 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var5 = 9;
                                var1 = var0[var5];
                                var0 = undefined;
                                var1 = var4.bind(var0)(var1);
                                var1 = var1.TOUCHABLE_STATE;
                                var1 = var1.BEGAN;
                                if (!(var3 !== var1)) {
                                    _fun45216_ip = 135;
                                    continue _fun45216
                                }
                            case 44:
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var5];
                                var1 = var4.bind(var0)(var1);
                                var1 = var1.TOUCHABLE_STATE;
                                var1 = var1.UNDETERMINED;
                                var1 = var3 !== var1;
                                if (!var1) {
                                    _fun45216_ip = 113;
                                    continue _fun45216
                                }
                            case 80:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var2 = var2[var5];
                                var2 = var4.bind(var0)(var2);
                                var2 = var2.TOUCHABLE_STATE;
                                var2 = var2.MOVED_OUTSIDE;
                                var1 = var3 !== var2;
                            case 113:
                                if (var1) {
                                    _fun45216_ip = 152;
                                    continue _fun45216
                                }
                            case 116:
                                var2 = _closure3_slot0;
                                var1 = var2.hideUnderlay;
                                var1 = var1.bind(var2)();
                                _fun45216_ip = 152;
                                continue _fun45216;
                            case 135:
                                var2 = _closure3_slot0;
                                var1 = var2.showUnderlay;
                                var1 = var1.bind(var2)();
                            case 152:
                                return var0;
                        }
                    };
                    var0.onStateChange = var1;
                    var1 = {
                        'extraChildStyle': null,
                        'extraUnderlayStyle': null
                    };
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
        var0 = 'renderChildren';
        var4.key = var0;
        var0 = function() {
            _fun45217: for (var _fun45217_ip = 0;;) switch (_fun45217_ip) {
                case 0:
                    var4 = this;
                    var0 = var4.props;
                    var0 = var0.children;
                    if (var0) {
                        _fun45217_ip = 39;
                        continue _fun45217
                    }
                case 19:
                    var3 = _closure1_slot13;
                    var2 = _closure1_slot12;
                    var1 = undefined;
                    var0 = {};
                    var0 = var3.bind(var1)(var2, var0);
                    return var0;
                case 39:
                    var3 = _closure1_slot10;
                    var2 = var3.Children;
                    var1 = var2.only;
                    var0 = var4.props;
                    var0 = var0.children;
                    var2 = var1.bind(var2)(var0);
                    var1 = var3.cloneElement;
                    var0 = {};
                    var7 = _closure1_slot11;
                    var6 = var7.compose;
                    var5 = var2.props;
                    var5 = var5.style;
                    var4 = var4.state;
                    var4 = var4.extraChildStyle;
                    var4 = var6.bind(var7)(var5, var4);
                    var0.style = var4;
                    var0 = var1.bind(var3)(var2, var0);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun45218: for (var _fun45218_ip = 0;;) switch (_fun45218_ip) {
                case 0:
                    var8 = this;
                    var4 = var8.props;
                    var10 = var4.style;
                    var3 = undefined;
                    if (!(var3 === var10)) {
                        _fun45218_ip = 21;
                        continue _fun45218
                    }
                case 19:
                    var10 = {};
                case 21:
                    var2 = _closure1_slot4;
                    var1 = _closure1_slot3;
                    var7 = var2.bind(var3)(var4, var1);
                    var1 = var8.state;
                    var9 = var1.extraUnderlayStyle;
                    var2 = _closure1_slot13;
                    var1 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var0 = 9;
                    var0 = var4[var0];
                    var1 = var1.bind(var3)(var0);
                    var0 = global;
                    var6 = var0.Object;
                    var5 = var6.assign;
                    var4 = {};
                    var0 = new Array(2);
                    var0[0] = var10;
                    var0[1] = var9;
                    var4.style = var0;
                    var0 = var8.onStateChange;
                    var4.onStateChange = var0;
                    var0 = var8.renderChildren;
                    var0 = var0.bind(var8)();
                    var4.children = var0;
                    var0 = {};
                    var0 = var5.bind(var6)(var0, var7, var4);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var6);
    var7 = var3.Object;
    var6 = var7.assign;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var5 = var3.defaultProps;
    var4 = {};
    var3 = {
        'activeOpacity': 0.85,
        'delayPressOut': 100,
        'underlayColor': 'black'
    };
    var3 = var6.bind(var7)(var4, var5, var3);
    var1.defaultProps = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 31, 27, 33, 5023]);