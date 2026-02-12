// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun4922: for (var _fun4922_ip = 0;;) switch (_fun4922_ip) {
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
                _fun4922_ip = 74;
                continue _fun4922;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot12 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var0 = ['behavior', 'children', 'contentContainerStyle', 'enabled', 'keyboardVerticalOffset', 'style', 'onLayout'];
    var _closure1_slot2 = var0;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var4 = 7;
    var7 = var6[var4];
    var3 = arg3;
    var3 = var3.bind(var0)(var7);
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.createRef;
    var _closure1_slot10 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot11 = var4;
    var3 = var3.Component;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun4926: for (var _fun4926_ip = 0;;) switch (_fun4926_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure1_slot5;
                    var4 = _closure2_slot1;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var5, var4);
                    var10 = new Array(1);
                    var0 = arg0;
                    var10[0] = var0;
                    var0 = _closure1_slot8;
                    var9 = var0.bind(var2)(var4);
                    var4 = _closure1_slot7;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun4926_ip = 75;
                        continue _fun4926
                    }
                case 62:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun4926_ip = 109;
                    continue _fun4926;
                case 75:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot8;
                    var6 = var6.bind(var2)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 109:
                    var0 = var4.bind(var2)(var5, var0);
                    var _closure3_slot0 = var0;
                    var4 = null;
                    var0._frame = var4;
                    var0._keyboardEvent = var4;
                    var4 = new Array(0);
                    var0._subscriptions = var4;
                    var4 = 0;
                    var0._initialFrameHeight = var4;
                    var0._bottom = var4;
                    var5 = function(arg0) { // Environment: var3
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var1._keyboardEvent = var0;
                        var0 = var1._updateBottomIfNecessary;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0._onKeyboardChange = var5;
                    var5 = function(arg0) { // Environment: var3
                        var1 = _closure3_slot0;
                        var0 = null;
                        var1._keyboardEvent = var0;
                        var0 = var1._updateBottomIfNecessary;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0._onKeyboardHide = var5;
                    var5 = function() { // Environment: var3
                        var3 = _closure1_slot4;
                        var2 = undefined;
                        var1 = function*(arg0) { // Environment: var0
                            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                                _fun4931: for (var _fun4931_ip = 0;;) switch (_fun4931_ip) {
                                    case 0:
                                        StartGenerator();
                                        var3 = arg0;
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun4931_ip = 187;
                                            continue _fun4931
                                        }
                                    case 13:
                                        var1 = var3.persist;
                                        var1 = var1.bind(var3)();
                                        var2 = _closure3_slot0;
                                        var4 = var2._frame;
                                        var5 = var3.nativeEvent;
                                        var5 = var5.layout;
                                        var2._frame = var5;
                                        var2 = var2._initialFrameHeight;
                                        if (var2) {
                                            _fun4931_ip = 84;
                                            continue _fun4931
                                        }
                                    case 63:
                                        var5 = _closure3_slot0;
                                        var2 = var5._frame;
                                        var2 = var2.height;
                                        var5._initialFrameHeight = var2;
                                    case 84:
                                        var2 = var4;
                                        if (!var2) {
                                            _fun4931_ip = 114;
                                            continue _fun4931
                                        }
                                    case 90:
                                        var5 = var4.height;
                                        var4 = _closure3_slot0;
                                        var4 = var4._frame;
                                        var4 = var4.height;
                                        var2 = var5 === var4;
                                    case 114:
                                        if (var2) {
                                            _fun4931_ip = 144;
                                            continue _fun4931
                                        }
                                    case 117:
                                        var4 = _closure3_slot0;
                                        var2 = var4._updateBottomIfNecessary;
                                        var2 = var2.bind(var4)();
                                        SaveGenerator(address = 135);
                                    case 133:
                                        return var2;
                                    case 135:
                                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                        if (!var4) {
                                            _fun4931_ip = 144;
                                            continue _fun4931
                                        }
                                    case 141:
                                        return var2;
                                    case 144:
                                        var2 = _closure3_slot0;
                                        var2 = var2.props;
                                        var2 = var2.onLayout;
                                        if (!var2) {
                                            _fun4931_ip = 182;
                                            continue _fun4931
                                        }
                                    case 162:
                                        var1 = _closure3_slot0;
                                        var2 = var1.props;
                                        var1 = var2.onLayout;
                                        var1 = var1.bind(var2)(var3);
                                    case 182:
                                        var1 = undefined;
                                        return var1;
                                    case 187:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var3.bind(var2)(var1);
                        var _closure4_slot0 = var1;
                        var0 = function(arg0) { // Environment: var0
                            var0 = undefined;
                            var3 = _closure4_slot0;
                            var2 = var3.apply;
                            var0 = arguments;
                            var1 = var0;
                            var0 = this;
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                        };
                        return var0;
                    };
                    var5 = var5.bind(var2)();
                    var0._onLayout = var5;
                    var5 = function(arg0) { // Environment: var3
                        _fun4933: for (var _fun4933_ip = 0;;) switch (_fun4933_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var2 = var1.enabled;
                                var1 = null;
                                var1 = var1 == var2;
                                if (var1) {
                                    _fun4933_ip = 32;
                                    continue _fun4933
                                }
                            case 29:
                                var1 = var2;
                            case 32:
                                var2 = _closure3_slot0;
                                var2._bottom = var3;
                                if (!var1) {
                                    _fun4933_ip = 66;
                                    continue _fun4933
                                }
                            case 45:
                                var2 = _closure3_slot0;
                                var1 = var2.setState;
                                var0 = {};
                                var0.bottom = var3;
                                var0 = var1.bind(var2)(var0);
                            case 66:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._setBottom = var5;
                    var5 = _closure1_slot4;
                    var3 = function*() { // Environment: var3
                        var0 = function*() { // Original name: ?anon_0_, environment: var0
                            _fun4935: for (var _fun4935_ip = 0;;) switch (_fun4935_ip) {
                                case 0:
                                    StartGenerator();
                                    ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                    if (var1) {
                                        _fun4935_ip = 294;
                                        continue _fun4935
                                    }
                                case 10:
                                    var1 = _closure3_slot0;
                                    var1 = var1._keyboardEvent;
                                    var2 = null;
                                    if (!(var2 == var1)) {
                                        _fun4935_ip = 51;
                                        continue _fun4935
                                    }
                                case 29:
                                    var5 = _closure3_slot0;
                                    var4 = var5._setBottom;
                                    var1 = 0;
                                    var1 = var4.bind(var5)(var1);
                                    _fun4935_ip = 286;
                                    continue _fun4935;
                                case 51:
                                    var5 = _closure3_slot0;
                                    var1 = var5._keyboardEvent;
                                    var11 = var1.duration;
                                    var7 = var1.easing;
                                    var4 = var1.endCoordinates;
                                    var1 = var5._relativeKeyboardHeight;
                                    var1 = var1.bind(var5)(var4);
                                    SaveGenerator(address = 93);
                                case 91:
                                    return var1;
                                case 93:
                                    ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                                    if (var4) {
                                        _fun4935_ip = 291;
                                        continue _fun4935
                                    }
                                case 102:
                                    var4 = _closure3_slot0;
                                    var4 = var4._bottom;
                                    if (!(var4 !== var1)) {
                                        _fun4935_ip = 286;
                                        continue _fun4935
                                    }
                                case 119:
                                    var3 = _closure3_slot0;
                                    var4 = var3._setBottom;
                                    var4 = var4.bind(var3)(var1);
                                    var3 = var3.props;
                                    var3 = var3.enabled;
                                    var2 = var2 == var3;
                                    if (var2) {
                                        _fun4935_ip = 154;
                                        continue _fun4935
                                    }
                                case 151:
                                    var2 = var3;
                                case 154:
                                    if (!var2) {
                                        _fun4935_ip = 160;
                                        continue _fun4935
                                    }
                                case 157:
                                    var2 = var11;
                                case 160:
                                    if (!var2) {
                                        _fun4935_ip = 166;
                                        continue _fun4935
                                    }
                                case 163:
                                    var2 = var7;
                                case 166:
                                    if (!var2) {
                                        _fun4935_ip = 286;
                                        continue _fun4935
                                    }
                                case 169:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var10 = 9;
                                    var2 = var2[var10];
                                    var9 = undefined;
                                    var4 = var3.bind(var9)(var2);
                                    var3 = var4.configureNext;
                                    var2 = {};
                                    var8 = 10;
                                    var12 = var11 > var8;
                                    var5 = var8;
                                    if (!var12) {
                                        _fun4935_ip = 218;
                                        continue _fun4935
                                    }
                                case 215:
                                    var5 = var11;
                                case 218:
                                    var2.duration = var5;
                                    var5 = {};
                                    var12 = var11 > var8;
                                    if (!var12) {
                                        _fun4935_ip = 234;
                                        continue _fun4935
                                    }
                                case 231:
                                    var8 = var11;
                                case 234:
                                    var5.duration = var8;
                                    var8 = _closure1_slot0;
                                    var6 = _closure1_slot1;
                                    var6 = var6[var10];
                                    var6 = var8.bind(var9)(var6);
                                    var6 = var6.Types;
                                    var6 = var6[var7];
                                    if (var6) {
                                        _fun4935_ip = 272;
                                        continue _fun4935
                                    }
                                case 268:
                                    var6 = 'keyboard';
                                case 272:
                                    var5.type = var6;
                                    var2.update = var5;
                                    var2 = var3.bind(var4)(var2);
                                case 286:
                                    var2 = undefined;
                                    return var2;
                                case 291:
                                    return var1;
                                case 294:
                                    return var0;
                            }
                        };
                        return var0;
                    };
                    var3 = var5.bind(var2)(var3);
                    var0._updateBottomIfNecessary = var3;
                    var3 = {};
                    var3.bottom = var4;
                    var0.state = var3;
                    var1 = _closure1_slot10;
                    var1 = var1.bind(var2)();
                    var0.viewRef = var1;
                    return var0;
            }
        };
        var _closure2_slot1 = var3;
        var4 = _closure1_slot9;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot6;
        var4 = {};
        var6 = '_relativeKeyboardHeight';
        var4.key = var6;
        var6 = _closure1_slot4;
        var0 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun4937: for (var _fun4937_ip = 0;;) switch (_fun4937_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arg0;
                        var7 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                        if (var2) {
                            _fun4937_ip = 182;
                            continue _fun4937
                        }
                    case 16:
                        var2 = var7._frame;
                        if (!var2) {
                            _fun4937_ip = 28;
                            continue _fun4937
                        }
                    case 25:
                        if (var1) {
                            _fun4937_ip = 33;
                            continue _fun4937
                        }
                    case 28:
                        var3 = 0;
                        return var3;
                    case 33:
                        var3 = var1.screenY;
                        var1 = var7.props;
                        var4 = var1.keyboardVerticalOffset;
                        var1 = null;
                        var6 = var1 != var4;
                        var5 = 0;
                        var1 = 0;
                        if (!var6) {
                            _fun4937_ip = 66;
                            continue _fun4937
                        }
                    case 63:
                        var1 = var4;
                    case 66:
                        var6 = var3 - var1;
                        var1 = var7.props;
                        var3 = var1.behavior;
                        var1 = 'height';
                        if (!(var1 !== var3)) {
                            _fun4937_ip = 128;
                            continue _fun4937
                        }
                    case 89:
                        var1 = global;
                        var4 = var1.Math;
                        var3 = var4.max;
                        var8 = var2.y;
                        var1 = var2.height;
                        var1 = var8 + var1;
                        var1 = var1 - var6;
                        var1 = var3.bind(var4)(var1, var5);
                        _fun4937_ip = 179;
                        continue _fun4937;
                    case 128:
                        var3 = global;
                        var4 = var3.Math;
                        var3 = var4.max;
                        var7 = var7.state;
                        var8 = var7.bottom;
                        var7 = var2.y;
                        var7 = var8 + var7;
                        var2 = var2.height;
                        var2 = var7 + var2;
                        var2 = var2 - var6;
                        var1 = var3.bind(var4)(var2, var5);
                    case 179:
                        return var1;
                    case 182:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var6.bind(var2)(var0);
        var _closure2_slot0 = var0;
        var0 = function arg0() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun4939: for (var _fun4939_ip = 0;;) switch (_fun4939_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.props;
                    var1 = var0.enabled;
                    var0 = null;
                    var0 = var0 == var1;
                    if (var0) {
                        _fun4939_ip = 25;
                        continue _fun4939
                    }
                case 22:
                    var0 = var1;
                case 25:
                    if (!var0) {
                        _fun4939_ip = 46;
                        continue _fun4939
                    }
                case 28:
                    var3 = var2._bottom;
                    var1 = arg1;
                    var1 = var1.bottom;
                    var0 = var3 !== var1;
                case 46:
                    if (!var0) {
                        _fun4939_ip = 72;
                        continue _fun4939
                    }
                case 49:
                    var1 = var2.setState;
                    var0 = {};
                    var3 = var2._bottom;
                    var0.bottom = var3;
                    var0 = var1.bind(var2)(var0);
                case 72:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'componentDidMount';
        var4.key = var6;
        var6 = function() {
            _fun4940: for (var _fun4940_ip = 0;;) switch (_fun4940_ip) {
                case 0:
                    var2 = this;
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var5 = 10;
                    var3 = var0[var5];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.isVisible;
                    var3 = var3.bind(var4)();
                    if (var3) {
                        _fun4940_ip = 62;
                        continue _fun4940
                    }
                case 41:
                    var3 = null;
                    var2._keyboardEvent = var3;
                    var4 = var2._setBottom;
                    var3 = 0;
                    var3 = var4.bind(var2)(var3);
                case 62:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = var3[var5];
                    var8 = var4.bind(var0)(var1);
                    var7 = var8.addListener;
                    var6 = var2._onKeyboardChange;
                    var1 = 'keyboardDidHide';
                    var6 = var7.bind(var8)(var1, var6);
                    var1 = new Array(2);
                    var1[0] = var6;
                    var3 = var3[var5];
                    var6 = var4.bind(var0)(var3);
                    var5 = var6.addListener;
                    var4 = var2._onKeyboardChange;
                    var3 = 'keyboardDidShow';
                    var3 = var5.bind(var6)(var3, var4);
                    var1[1] = var3;
                    var2._subscriptions = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var2 = var0._subscriptions;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var0 = var1.remove;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun4943: for (var _fun4943_ip = 0;;) switch (_fun4943_ip) {
                case 0:
                    var0 = this;
                    var6 = var0.props;
                    var5 = var6.behavior;
                    var8 = var6.children;
                    var19 = var6.contentContainerStyle;
                    var1 = var6.enabled;
                    var3 = undefined;
                    var9 = var3 === var1;
                    if (var9) {
                        _fun4943_ip = 42;
                        continue _fun4943
                    }
                case 39:
                    var9 = var1;
                case 42:
                    var1 = var6.keyboardVerticalOffset;
                    var12 = var6.style;
                    var1 = var6.onLayout;
                    var4 = _closure1_slot3;
                    var2 = _closure1_slot2;
                    var7 = var4.bind(var3)(var6, var2);
                    var4 = 0;
                    var2 = true;
                    var6 = 0;
                    if (!(var2 === var9)) {
                        _fun4943_ip = 96;
                        continue _fun4943
                    }
                case 86:
                    var2 = var0.state;
                    var6 = var2.bottom;
                case 96:
                    var2 = 'height';
                    if (!(var2 !== var5)) {
                        _fun4943_ip = 467;
                        continue _fun4943
                    }
                case 107:
                    var2 = 'position';
                    if (!(var2 !== var5)) {
                        _fun4943_ip = 327;
                        continue _fun4943
                    }
                case 118:
                    var2 = 'padding';
                    if (!(var2 !== var5)) {
                        _fun4943_ip = 211;
                        continue _fun4943
                    }
                case 126:
                    var9 = _closure1_slot11;
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = 11;
                    var2 = var10[var2];
                    var5 = var5.bind(var3)(var2);
                    var2 = global;
                    var13 = var2.Object;
                    var11 = var13.assign;
                    var10 = {};
                    var2 = var0.viewRef;
                    var10.ref = var2;
                    var2 = var0._onLayout;
                    var10.onLayout = var2;
                    var10.style = var12;
                    var2 = {};
                    var2.children = var8;
                    var2 = var11.bind(var13)(var10, var7, var2);
                    var2 = var9.bind(var3)(var5, var2);
                    return var2;
                case 211:
                    var9 = _closure1_slot11;
                    var14 = _closure1_slot0;
                    var15 = _closure1_slot1;
                    var2 = 11;
                    var2 = var15[var2];
                    var5 = var14.bind(var3)(var2);
                    var2 = global;
                    var13 = var2.Object;
                    var11 = var13.assign;
                    var10 = {};
                    var2 = var0.viewRef;
                    var10.ref = var2;
                    var2 = 12;
                    var2 = var15[var2];
                    var15 = var14.bind(var3)(var2);
                    var14 = var15.compose;
                    var2 = {};
                    var2.paddingBottom = var6;
                    var2 = var14.bind(var15)(var12, var2);
                    var10.style = var2;
                    var2 = var0._onLayout;
                    var10.onLayout = var2;
                    var2 = {};
                    var2.children = var8;
                    var2 = var11.bind(var13)(var10, var7, var2);
                    var2 = var9.bind(var3)(var5, var2);
                    return var2;
                case 327:
                    var9 = _closure1_slot11;
                    var17 = _closure1_slot0;
                    var18 = _closure1_slot1;
                    var14 = 11;
                    var2 = var18[var14];
                    var5 = var17.bind(var3)(var2);
                    var2 = global;
                    var13 = var2.Object;
                    var11 = var13.assign;
                    var10 = {};
                    var2 = var0.viewRef;
                    var10.ref = var2;
                    var10.style = var12;
                    var2 = var0._onLayout;
                    var10.onLayout = var2;
                    var2 = {};
                    var14 = var18[var14];
                    var15 = var17.bind(var3)(var14);
                    var14 = {};
                    var16 = 12;
                    var16 = var18[var16];
                    var18 = var17.bind(var3)(var16);
                    var17 = var18.compose;
                    var16 = {};
                    var16.bottom = var6;
                    var16 = var17.bind(var18)(var19, var16);
                    var14.style = var16;
                    var14.children = var8;
                    var14 = var9.bind(var3)(var15, var14);
                    var2.children = var14;
                    var2 = var11.bind(var13)(var10, var7, var2);
                    var2 = var9.bind(var3)(var5, var2);
                    return var2;
                case 467:
                    var5 = var0._frame;
                    var2 = null;
                    var2 = var2 != var5;
                    if (!var2) {
                        _fun4943_ip = 496;
                        continue _fun4943
                    }
                case 482:
                    var5 = var0.state;
                    var5 = var5.bottom;
                    var2 = var5 > var4;
                case 496:
                    var11 = undefined;
                    if (!var2) {
                        _fun4943_ip = 524;
                        continue _fun4943
                    }
                case 501:
                    var2 = {};
                    var5 = var0._initialFrameHeight;
                    var5 = var5 - var6;
                    var2.height = var5;
                    var2.flex = var4;
                    var11 = var2;
                case 524:
                    var2 = _closure1_slot11;
                    var10 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var1 = 11;
                    var1 = var13[var1];
                    var1 = var10.bind(var3)(var1);
                    var4 = global;
                    var6 = var4.Object;
                    var5 = var6.assign;
                    var4 = {};
                    var9 = var0.viewRef;
                    var4.ref = var9;
                    var9 = 12;
                    var9 = var13[var9];
                    var10 = var10.bind(var3)(var9);
                    var9 = var10.compose;
                    var9 = var9.bind(var10)(var12, var11);
                    var4.style = var9;
                    var0 = var0._onLayout;
                    var4.onLayout = var0;
                    var0 = {};
                    var0.children = var8;
                    var0 = var5.bind(var6)(var4, var7, var0);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[4] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 5, 6, 7, 15, 17, 18, 31, 33, 334, 335, 112, 253]);