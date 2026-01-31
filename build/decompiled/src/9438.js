// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun75115: for (var _fun75115_ip = 0;;) switch (_fun75115_ip) {
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
            case 72: // try_end0
                _fun75115_ip = 76;
                continue _fun75115;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var4 = var6[var3];
    var4 = var5.bind(var0)(var4);
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var3 = var3.PureComponent;
    var4 = 6;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var7 = var4.Animated;
    var _closure1_slot7 = var7;
    var7 = var4.Easing;
    var _closure1_slot8 = var7;
    var4 = var4.TouchableOpacity;
    var _closure1_slot9 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var8.bind(var0)(var4);
    var4 = var4.jsx;
    var _closure1_slot10 = var4;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun75119: for (var _fun75119_ip = 0;;) switch (_fun75119_ip) {
                case 0:
                    var4 = this;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var1);
                    var9 = new Array(1);
                    var0 = arg0;
                    var9[0] = var0;
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun75119_ip = 73;
                        continue _fun75119
                    }
                case 60:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun75119_ip = 107;
                    continue _fun75119;
                case 73:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 107:
                    var0 = var1.bind(var3)(var4, var0);
                    var1 = {};
                    var2 = _closure1_slot7;
                    var3 = var2.Value;
                    var4 = var3.prototype;
                    var5 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var5;
                    var12 = 0;
                    var3 = new var13[var3](var12, var11);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var1.animColor = var3;
                    var3 = var2.Value;
                    var5 = var3.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var3
                        }
                    });
                    var13 = var5;
                    var3 = new var13[var3](var12, var11);
                    var3 = var3 instanceof Object ? var3 : var5;
                    var1.animOpacity = var3;
                    var2 = var2.Value;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var3;
                    var2 = new var13[var2](var12, var11);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var1.animTransform = var2;
                    var0.state = var1;
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
        var0 = 'componentDidMount';
        var4.key = var0;
        var0 = function() {
            _fun75120: for (var _fun75120_ip = 0;;) switch (_fun75120_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.props;
                    var0 = var0.active;
                    if (!var0) {
                        _fun75120_ip = 31;
                        continue _fun75120
                    }
                case 17:
                    var1 = var2._animate;
                    var0 = 1;
                    var0 = var1.bind(var2)(var0);
                case 31:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(5);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function arg0() {
            _fun75121: for (var _fun75121_ip = 0;;) switch (_fun75121_ip) {
                case 0:
                    var2 = this;
                    var0 = arg0;
                    var1 = var0.active;
                    var0 = var2.props;
                    var0 = var0.active;
                    if (!(var1 !== var0)) {
                        _fun75121_ip = 57;
                        continue _fun75121
                    }
                case 27:
                    var1 = var2._animate;
                    var0 = var2.props;
                    var3 = var0.active;
                    var0 = 0;
                    if (!var3) {
                        _fun75121_ip = 52;
                        continue _fun75121
                    }
                case 49:
                    var0 = 1;
                case 52:
                    var0 = var1.bind(var2)(var0);
                case 57:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = '_animate';
        var4.key = var6;
        var6 = function() {
            _fun75122: for (var _fun75122_ip = 0;;) switch (_fun75122_ip) {
                case 0:
                    var4 = this;
                    var0 = undefined;
                    var3 = undefined;
                    var2 = arguments.length;
                    var1 = 0;
                    var5 = var2 > var1;
                    var2 = 0;
                    if (!var5) {
                        _fun75122_ip = 35;
                        continue _fun75122
                    }
                case 21:
                    var5 = arguments[var1];
                    var2 = 0;
                    if (!(var0 !== var5)) {
                        _fun75122_ip = 35;
                        continue _fun75122
                    }
                case 31:
                    var2 = arguments[var1];
                case 35:
                    var1 = var4.state;
                    var7 = var1.animColor;
                    var6 = var1.animOpacity;
                    var9 = var1.animTransform;
                    var3 = var4.props;
                    var1 = var3.animatedDuration;
                    var14 = var3.animatedFriction;
                    var13 = var3.animatedTension;
                    var10 = {};
                    var10.toValue = var2;
                    var10.duration = var1;
                    var1 = false;
                    var10.isInteraction = var1;
                    var1 = var4._shouldAnimateColor;
                    var1 = !var1;
                    var10.useNativeDriver = var1;
                    var8 = _closure1_slot7;
                    var5 = var8.timing;
                    var2 = global;
                    var12 = var2.Object;
                    var11 = var12.assign;
                    var3 = {};
                    var15 = _closure1_slot8;
                    var15 = var15.linear;
                    var3.easing = var15;
                    var3 = var11.bind(var12)(var3, var10);
                    var5 = var5.bind(var8)(var6, var3);
                    var3 = new Array(2);
                    var3[0] = var5;
                    var6 = var8.spring;
                    var12 = var2.Object;
                    var11 = var12.assign;
                    var5 = {};
                    var5.friction = var14;
                    var5.tension = var13;
                    var5 = var11.bind(var12)(var5, var10);
                    var5 = var6.bind(var8)(var9, var5);
                    var3[1] = var5;
                    var4 = var4._shouldAnimateColor;
                    if (!var4) {
                        _fun75122_ip = 290;
                        continue _fun75122
                    }
                case 230:
                    var4 = var3.push;
                    var6 = _closure1_slot7;
                    var5 = var6.timing;
                    var9 = var2.Object;
                    var8 = var9.assign;
                    var2 = {};
                    var11 = _closure1_slot8;
                    var11 = var11.linear;
                    var2.easing = var11;
                    var2 = var8.bind(var9)(var2, var10);
                    var2 = var5.bind(var6)(var7, var2);
                    var2 = var4.bind(var3)(var2);
                case 290:
                    var2 = _closure1_slot7;
                    var1 = var2.parallel;
                    var2 = var1.bind(var2)(var3);
                    var1 = var2.start;
                    var1 = var1.bind(var2)();
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = '_shouldAnimateColor';
        var4.key = var6;
        var6 = function() {
            _fun75123: for (var _fun75123_ip = 0;;) switch (_fun75123_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.props;
                    var0 = var1.color;
                    var1 = var1.inactiveColor;
                    if (!var0) {
                        _fun75123_ip = 25;
                        continue _fun75123
                    }
                case 22:
                    var0 = var1;
                case 25:
                    return var0;
            }
        };
        var4.get = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun75124: for (var _fun75124_ip = 0;;) switch (_fun75124_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.state;
                    var14 = var1.animColor;
                    var11 = var1.animOpacity;
                    var15 = var1.animTransform;
                    var1 = var0.props;
                    var2 = var1.active;
                    var10 = var1.activeOpacity;
                    var3 = var1.carouselRef;
                    var _closure3_slot0 = var3;
                    var16 = var1.color;
                    var7 = var1.containerStyle;
                    var17 = var1.inactiveColor;
                    var12 = var1.inactiveStyle;
                    var6 = var1.inactiveOpacity;
                    var19 = var1.inactiveScale;
                    var3 = var1.index;
                    var _closure3_slot1 = var3;
                    var13 = var1.style;
                    var9 = var1.tappable;
                    var5 = var1.delayPressInDot;
                    var1 = {};
                    var4 = var11.interpolate;
                    var3 = {};
                    var18 = [0, 1];
                    var3.inputRange = var18;
                    var18 = new Array(2);
                    var18[0] = var6;
                    var6 = 1;
                    var18[1] = var6;
                    var3.outputRange = var18;
                    var3 = var4.bind(var11)(var3);
                    var1.opacity = var3;
                    var4 = {};
                    var11 = var15.interpolate;
                    var3 = {};
                    var18 = [0, 1];
                    var3.inputRange = var18;
                    var18 = new Array(2);
                    var18[0] = var19;
                    var18[1] = var6;
                    var3.outputRange = var18;
                    var3 = var11.bind(var15)(var3);
                    var4.scale = var3;
                    var3 = new Array(1);
                    var3[0] = var4;
                    var1.transform = var3;
                    var0 = var0._shouldAnimateColor;
                    if (var0) {
                        _fun75124_ip = 247;
                        continue _fun75124
                    }
                case 243:
                    var0 = {};
                    _fun75124_ip = 301;
                    continue _fun75124;
                case 247:
                    var3 = {};
                    var11 = var14.interpolate;
                    var4 = {};
                    var15 = [0, 1];
                    var4.inputRange = var15;
                    var15 = new Array(2);
                    var15[0] = var17;
                    var15[1] = var16;
                    var4.outputRange = var15;
                    var4 = var11.bind(var14)(var4);
                    var3.backgroundColor = var4;
                    var0 = var3;
                case 301:
                    var14 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var15 = 8;
                    var11 = var3[var15];
                    var3 = undefined;
                    var11 = var14.bind(var3)(var11);
                    var14 = var11.sliderPaginationDotContainer;
                    var11 = new Array(2);
                    var11[0] = var14;
                    if (var7) {
                        _fun75124_ip = 345;
                        continue _fun75124
                    }
                case 343:
                    var7 = {};
                case 345:
                    var11[1] = var7;
                    var14 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var15];
                    var7 = var14.bind(var3)(var7);
                    var14 = var7.sliderPaginationDot;
                    var7 = new Array(5);
                    var7[0] = var14;
                    if (var13) {
                        _fun75124_ip = 385;
                        continue _fun75124
                    }
                case 383:
                    var13 = {};
                case 385:
                    var7[1] = var13;
                    var2 = !var2;
                    if (!var2) {
                        _fun75124_ip = 398;
                        continue _fun75124
                    }
                case 395:
                    var2 = var12;
                case 398:
                    if (var2) {
                        _fun75124_ip = 403;
                        continue _fun75124
                    }
                case 401:
                    var2 = {};
                case 403:
                    var7[2] = var2;
                    var7[3] = var1;
                    var7[4] = var0;
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot9;
                    var0 = {};
                    var12 = false;
                    var0.accessible = var12;
                    var0.style = var11;
                    if (!var9) {
                        _fun75124_ip = 441;
                        continue _fun75124
                    }
                case 438:
                    var6 = var10;
                case 441:
                    var0.activeOpacity = var6;
                    var6 = undefined;
                    if (!var9) {
                        _fun75124_ip = 458;
                        continue _fun75124
                    }
                case 451:
                    var6 = function() { // Environment: var8
                        _fun75125: for (var _fun75125_ip = 0;;) switch (_fun75125_ip) {
                            case 0: // try_start_0
                                var2 = _closure3_slot0;
                                var2 = var2.current;
                                var1 = var2;
                                if (var2) {
                                    _fun75125_ip = 22;
                                    continue _fun75125
                                }
                            case 18:
                                var1 = _closure3_slot0;
                            case 22:
                                var2 = var1;
                                var1 = var2._snapToItem;
                                var3 = var2._getPositionIndex;
                                var0 = _closure3_slot1;
                                var0 = var3.bind(var2)(var0);
                                var0 = var1.bind(var2)(var0);
                            case 51: // try_end0
                                _fun75125_ip = 83;
                                continue _fun75125;
                            case 53: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var0 = global;
                                var2 = var0.console;
                                var1 = var2.warn;
                                var0 = 'react-native-snap-carousel | Pagination: `carouselRef` has to be a Carousel ref.\n';
                                var0 = var0 + var3;
                                var0 = var1.bind(var2)(var0);
                            case 83:
                                var0 = undefined;
                                return var0;
                        }
                    };
                case 458:
                    var0.onPress = var6;
                    var0.delayPressIn = var5;
                    var6 = _closure1_slot10;
                    var4 = _closure1_slot7;
                    var5 = var4.View;
                    var4 = {};
                    var4.style = var7;
                    var4 = var6.bind(var3)(var5, var4);
                    var0.children = var4;
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
    var3 = {};
    var4 = 9;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.number;
    var7 = var7.isRequired;
    var3.inactiveOpacity = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.number;
    var7 = var7.isRequired;
    var3.inactiveScale = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.bool;
    var3.active = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.number;
    var3.activeOpacity = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.object;
    var3.carouselRef = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.string;
    var3.color = var7;
    var7 = 10;
    var9 = var6[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.ViewPropTypes;
    var9 = var9.style;
    var3.containerStyle = var9;
    var9 = var6[var4];
    var9 = var5.bind(var0)(var9);
    var9 = var9.string;
    var3.inactiveColor = var9;
    var9 = var6[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.ViewPropTypes;
    var9 = var9.style;
    var3.inactiveStyle = var9;
    var9 = var6[var4];
    var9 = var5.bind(var0)(var9);
    var9 = var9.number;
    var3.index = var9;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.ViewPropTypes;
    var7 = var7.style;
    var3.style = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.bool;
    var3.tappable = var4;
    var1.propTypes = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 33, 9439, 3179, 7665]);