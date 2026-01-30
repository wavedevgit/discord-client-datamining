// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun45087: for (var _fun45087_ip = 0;;) switch (_fun45087_ip) {
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
                _fun45087_ip = 74;
                continue _fun45087;
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
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var7 = var6.Animated;
    var _closure1_slot10 = var7;
    var7 = var6.Easing;
    var _closure1_slot11 = var7;
    var7 = var6.StyleSheet;
    var _closure1_slot12 = var7;
    var6 = var6.View;
    var _closure1_slot13 = var6;
    var6 = 7;
    var9 = var5[var6];
    var7 = arg3;
    var7 = var7.bind(var0)(var9);
    var6 = var5[var6];
    var6 = var8.bind(var0)(var6);
    var6 = var6.Component;
    var7 = 8;
    var7 = var5[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.jsx;
    var _closure1_slot14 = var7;
    var1 = function(arg0) { // Environment: var1
        var3 = function() { // Original name: TouchableOpacity, environment: var0
            _fun45091: for (var _fun45091_ip = 0;;) switch (_fun45091_ip) {
                case 0:
                    var5 = this;
                    var4 = undefined;
                    var9 = undefined;
                    var6 = _closure1_slot5;
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
                        _fun45091_ip = 87;
                        continue _fun45091
                    }
                case 72:
                    var10 = arguments[var3];
                    var8[var3] = var10;
                    var3 = var3 + 1;
                    if (var3 < var6) {
                        _fun45091_ip = 72;
                        continue _fun45091
                    }
                case 87:
                    var3 = _closure2_slot0;
                    var6 = new Array(0);
                    var0 = var6.concat;
                    var6 = var0.bind(var6)(var8);
                    var0 = _closure1_slot8;
                    var10 = var0.bind(var4)(var3);
                    var3 = _closure1_slot7;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun45091_ip = 142;
                        continue _fun45091
                    }
                case 129:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var5, var6);
                    _fun45091_ip = 184;
                    continue _fun45091;
                case 142:
                    var9 = var7.Reflect;
                    var8 = var9.construct;
                    var7 = var6;
                    if (var7) {
                        _fun45091_ip = 163;
                        continue _fun45091
                    }
                case 159:
                    var7 = new Array(0);
                case 163:
                    var6 = _closure1_slot8;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var8.bind(var9)(var10, var7, var6);
                case 184:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = function() { // Environment: var1
                        _fun45092: for (var _fun45092_ip = 0;;) switch (_fun45092_ip) {
                            case 0:
                                var2 = _closure1_slot12;
                                var1 = var2.flatten;
                                var0 = _closure3_slot0;
                                var0 = var0.props;
                                var0 = var0.style;
                                var1 = var1.bind(var2)(var0);
                                if (var1) {
                                    _fun45092_ip = 40;
                                    continue _fun45092
                                }
                            case 38:
                                var1 = {};
                            case 40:
                                var2 = var1.opacity;
                                var0 = null;
                                var2 = var0 == var2;
                                var0 = 1;
                                if (var2) {
                                    _fun45092_ip = 71;
                                    continue _fun45092
                                }
                            case 57:
                                var2 = var1.opacity;
                                var1 = var2.valueOf;
                                var0 = var1.bind(var2)();
                            case 71:
                                return var0;
                        }
                    };
                    var0.getChildStyleOpacityWithDefault = var3;
                    var2 = _closure1_slot10;
                    var4 = var2.Value;
                    var2 = var0.getChildStyleOpacityWithDefault;
                    var13 = var2.bind(var0)();
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var14 = var3;
                    var2 = new var14[var4](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var0.opacity = var2;
                    var2 = function(arg0, arg1) { // Environment: var1
                        _fun45093: for (var _fun45093_ip = 0;;) switch (_fun45093_ip) {
                            case 0:
                                var3 = _closure1_slot10;
                                var2 = var3.timing;
                                var0 = _closure3_slot0;
                                var1 = var0.opacity;
                                var0 = {};
                                var6 = arg0;
                                var0.toValue = var6;
                                var6 = arg1;
                                var0.duration = var6;
                                var7 = _closure1_slot11;
                                var6 = var7.inOut;
                                var5 = var7.quad;
                                var5 = var6.bind(var7)(var5);
                                var0.easing = var5;
                                var4 = _closure3_slot0;
                                var4 = var4.props;
                                var5 = var4.useNativeAnimations;
                                var4 = null;
                                var4 = var4 == var5;
                                if (var4) {
                                    _fun45093_ip = 95;
                                    continue _fun45093
                                }
                            case 92:
                                var4 = var5;
                            case 95:
                                var0.useNativeDriver = var4;
                                var1 = var2.bind(var3)(var1, var0);
                                var0 = var1.start;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.setOpacityTo = var2;
                    var1 = function(arg0, arg1) { // Environment: var1
                        _fun45094: for (var _fun45094_ip = 0;;) switch (_fun45094_ip) {
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
                                    _fun45094_ip = 154;
                                    continue _fun45094
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
                                    _fun45094_ip = 113;
                                    continue _fun45094
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
                                    _fun45094_ip = 190;
                                    continue _fun45094
                                }
                            case 116:
                                var4 = _closure3_slot0;
                                var3 = var4.setOpacityTo;
                                var2 = _closure3_slot0;
                                var1 = var2.getChildStyleOpacityWithDefault;
                                var2 = var1.bind(var2)();
                                var1 = 150;
                                var1 = var3.bind(var4)(var2, var1);
                                _fun45094_ip = 190;
                                continue _fun45094;
                            case 154:
                                var4 = _closure3_slot0;
                                var3 = var4.setOpacityTo;
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var2 = var1.activeOpacity;
                                var1 = 0;
                                var1 = var3.bind(var4)(var2, var1);
                            case 190:
                                return var0;
                        }
                    };
                    var0.onStateChange = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot9;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot6;
        var4 = {};
        var5 = 'render';
        var4.key = var5;
        var0 = function() { // Original name: render, environment: var0
            _fun45095: for (var _fun45095_ip = 0;;) switch (_fun45095_ip) {
                case 0:
                    var8 = this;
                    var4 = var8.props;
                    var10 = var4.style;
                    var3 = undefined;
                    if (!(var3 === var10)) {
                        _fun45095_ip = 21;
                        continue _fun45095
                    }
                case 19:
                    var10 = {};
                case 21:
                    var2 = _closure1_slot4;
                    var1 = _closure1_slot3;
                    var7 = var2.bind(var3)(var4, var1);
                    var2 = _closure1_slot14;
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var1 = 9;
                    var1 = var5[var1];
                    var1 = var4.bind(var3)(var1);
                    var4 = global;
                    var6 = var4.Object;
                    var5 = var6.assign;
                    var4 = {};
                    var9 = new Array(2);
                    var9[0] = var10;
                    var10 = {};
                    var11 = var8.opacity;
                    var10.opacity = var11;
                    var9[1] = var10;
                    var4.style = var9;
                    var9 = var8.onStateChange;
                    var4.onStateChange = var9;
                    var9 = var8.props;
                    var9 = var9.children;
                    if (var9) {
                        _fun45095_ip = 146;
                        continue _fun45095
                    }
                case 128:
                    var10 = _closure1_slot14;
                    var9 = _closure1_slot13;
                    var0 = {};
                    var0 = var10.bind(var3)(var9, var0);
                    _fun45095_ip = 156;
                    continue _fun45095;
                case 146:
                    var8 = var8.props;
                    var0 = var8.children;
                case 156:
                    var4.children = var0;
                    var0 = {};
                    var0 = var5.bind(var6)(var0, var7, var4);
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(1);
        var0[0] = var4;
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
    var3 = 0.2;
    var4.activeOpacity = var3;
    var3 = {};
    var3 = var6.bind(var7)(var3, var5, var4);
    var1.defaultProps = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 6, 7, 15, 17, 18, 27, 31, 33, 4990]);