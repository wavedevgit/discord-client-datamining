// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var5 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun75329: for (var _fun75329_ip = 0;;) switch (_fun75329_ip) {
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
                _fun75329_ip = 76;
                continue _fun75329;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var4 = var6[var3];
    var4 = var5.bind(var0)(var4);
    var _closure1_slot8 = var4;
    var3 = var6[var3];
    var3 = var8.bind(var0)(var3);
    var3 = var3.PureComponent;
    var4 = 7;
    var4 = var6[var4];
    var7 = var8.bind(var0)(var4);
    var4 = var7.I18nManager;
    var9 = var7.Platform;
    var7 = var7.View;
    var _closure1_slot9 = var7;
    var7 = 8;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.jsx;
    var _closure1_slot10 = var7;
    var4 = var4.isRTL;
    var _closure1_slot11 = var4;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun75333: for (var _fun75333_ip = 0;;) switch (_fun75333_ip) {
                case 0:
                    var2 = arg0;
                    var4 = this;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var4, var1);
                    var9 = new Array(1);
                    var9[0] = var2;
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot12;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun75333_ip = 73;
                        continue _fun75333
                    }
                case 60:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun75333_ip = 107;
                    continue _fun75333;
                case 73:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 107:
                    var0 = var1.bind(var3)(var4, var0);
                    var1 = var2.dotColor;
                    if (!var1) {
                        _fun75333_ip = 131;
                        continue _fun75333
                    }
                case 122:
                    var4 = var2.inactiveDotColor;
                    var1 = !var4;
                case 131:
                    if (var1) {
                        _fun75333_ip = 155;
                        continue _fun75333
                    }
                case 134:
                    var4 = var2.dotColor;
                    var4 = !var4;
                    if (!var4) {
                        _fun75333_ip = 152;
                        continue _fun75333
                    }
                case 146:
                    var4 = var2.inactiveDotColor;
                case 152:
                    var1 = var4;
                case 155:
                    if (!var1) {
                        _fun75333_ip = 182;
                        continue _fun75333
                    }
                case 158:
                    var1 = global;
                    var5 = var1.console;
                    var4 = var5.warn;
                    var1 = 'react-native-snap-carousel | Pagination: You need to specify both `dotColor` and `inactiveDotColor`';
                    var1 = var4.bind(var5)(var1);
                case 182:
                    var1 = var2.dotElement;
                    if (!var1) {
                        _fun75333_ip = 200;
                        continue _fun75333
                    }
                case 191:
                    var4 = var2.inactiveDotElement;
                    var1 = !var4;
                case 200:
                    if (var1) {
                        _fun75333_ip = 224;
                        continue _fun75333
                    }
                case 203:
                    var4 = var2.dotElement;
                    var4 = !var4;
                    if (!var4) {
                        _fun75333_ip = 221;
                        continue _fun75333
                    }
                case 215:
                    var4 = var2.inactiveDotElement;
                case 221:
                    var1 = var4;
                case 224:
                    if (!var1) {
                        _fun75333_ip = 251;
                        continue _fun75333
                    }
                case 227:
                    var1 = global;
                    var5 = var1.console;
                    var4 = var5.warn;
                    var1 = 'react-native-snap-carousel | Pagination: You need to specify both `dotElement` and `inactiveDotElement`';
                    var1 = var4.bind(var5)(var1);
                case 251:
                    var1 = var2.tappableDots;
                    if (!var1) {
                        _fun75333_ip = 270;
                        continue _fun75333
                    }
                case 260:
                    var2 = var2.carouselRef;
                    var1 = var3 === var2;
                case 270:
                    if (!var1) {
                        _fun75333_ip = 297;
                        continue _fun75333
                    }
                case 273:
                    var1 = global;
                    var3 = var1.console;
                    var2 = var3.warn;
                    var1 = 'react-native-snap-carousel | Pagination: You must specify prop `carouselRef` when setting `tappableDots` to `true`';
                    var1 = var2.bind(var3)(var1);
                case 297:
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_needsRTLAdaptations';
        var4.key = var0;
        var0 = function() {
            _fun75334: for (var _fun75334_ip = 0;;) switch (_fun75334_ip) {
                case 0:
                    var0 = this;
                    var0 = var0.props;
                    var1 = var0.vertical;
                    var0 = _closure1_slot11;
                    if (!var0) {
                        _fun75334_ip = 27;
                        continue _fun75334
                    }
                case 24:
                    var0 = !var1;
                case 27:
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = '_activeDotIndex';
        var4.key = var6;
        var6 = function() {
            _fun75335: for (var _fun75335_ip = 0;;) switch (_fun75335_ip) {
                case 0:
                    var3 = this;
                    var0 = var3.props;
                    var2 = var0.activeDotIndex;
                    var1 = var0.dotsLength;
                    var0 = var3._needsRTLAdaptations;
                    var3 = var0.bind(var3)();
                    var0 = var2;
                    if (!var3) {
                        _fun75335_ip = 47;
                        continue _fun75335
                    }
                case 36:
                    var2 = var1 - var2;
                    var1 = 1;
                    var0 = var2 - var1;
                case 47:
                    return var0;
            }
        };
        var4.get = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'dots';
        var4.key = var6;
        var6 = function() {
            _fun75336: for (var _fun75336_ip = 0;;) switch (_fun75336_ip) {
                case 0:
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var1 = var4.props;
                    var20 = var1.activeOpacity;
                    var22 = var1.carouselRef;
                    var3 = var1.dotsLength;
                    var19 = var1.dotColor;
                    var18 = var1.dotContainerStyle;
                    var2 = var1.dotElement;
                    var _closure3_slot1 = var2;
                    var17 = var1.dotStyle;
                    var16 = var1.inactiveDotColor;
                    var2 = var1.inactiveDotElement;
                    var _closure3_slot2 = var2;
                    var15 = var1.inactiveDotOpacity;
                    var14 = var1.inactiveDotScale;
                    var13 = var1.inactiveDotStyle;
                    var2 = var1.renderDots;
                    var21 = var1.tappableDots;
                    var12 = var1.animatedDuration;
                    var11 = var1.animatedFriction;
                    var10 = var1.animatedTension;
                    var9 = var1.delayPressInDot;
                    if (var2) {
                        _fun75336_ip = 302;
                        continue _fun75336
                    }
                case 136:
                    var8 = _closure1_slot10;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 9;
                    var5 = var6[var5];
                    var6 = undefined;
                    var7 = var7.bind(var6)(var5);
                    var5 = {};
                    var5.carouselRef = var22;
                    if (!var21) {
                        _fun75336_ip = 179;
                        continue _fun75336
                    }
                case 175:
                    var21 = var6 !== var22;
                case 179:
                    var5.tappable = var21;
                    var5.activeOpacity = var20;
                    var5.color = var19;
                    var5.containerStyle = var18;
                    var5.style = var17;
                    var5.inactiveColor = var16;
                    var5.inactiveOpacity = var15;
                    var5.inactiveScale = var14;
                    var5.inactiveStyle = var13;
                    var5.animatedDuration = var12;
                    var5.animatedFriction = var11;
                    var5.animatedTension = var10;
                    var5.delayPressInDot = var9;
                    var5 = var8.bind(var6)(var7, var5);
                    var _closure3_slot3 = var5;
                    var5 = _closure1_slot2;
                    var1 = global;
                    var1 = var1.Array;
                    var7 = var1.bind(var6)(var3);
                    var1 = var7.keys;
                    var1 = var1.bind(var7)();
                    var5 = var5.bind(var6)(var1);
                    var1 = var5.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun75337: for (var _fun75337_ip = 0;;) switch (_fun75337_ip) {
                            case 0:
                                var4 = arg0;
                                var1 = _closure3_slot0;
                                var1 = var1._activeDotIndex;
                                var5 = var4 === var1;
                                var3 = _closure1_slot8;
                                var2 = var3.cloneElement;
                                if (var5) {
                                    _fun75337_ip = 42;
                                    continue _fun75337
                                }
                            case 36:
                                var1 = _closure3_slot2;
                                _fun75337_ip = 46;
                                continue _fun75337;
                            case 42:
                                var1 = _closure3_slot1;
                            case 46:
                                if (var1) {
                                    _fun75337_ip = 53;
                                    continue _fun75337
                                }
                            case 49:
                                var1 = _closure3_slot3;
                            case 53:
                                var0 = {};
                                var6 = global;
                                var6 = var6.HermesInternal;
                                var7 = var6.concat;
                                var6 = 'pagination-dot-';
                                var6 = var7.bind(var6)(var4);
                                var0.key = var6;
                                var0.active = var5;
                                var0.index = var4;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                        }
                    };
                    var0 = var1.bind(var5)(var0);
                    return var0;
                case 302:
                    var1 = var4._activeDotIndex;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1, var3, var4);
                    return var0;
            }
        };
        var4.get = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun75338: for (var _fun75338_ip = 0;;) switch (_fun75338_ip) {
                case 0:
                    var4 = this;
                    var0 = var4.props;
                    var2 = var0.dotsLength;
                    var1 = var0.containerStyle;
                    var8 = var0.vertical;
                    var5 = var0.accessibilityLabel;
                    if (!var2) {
                        _fun75338_ip = 195;
                        continue _fun75338
                    }
                case 37:
                    var0 = 2;
                    if (!(!(var2 < var0))) {
                        _fun75338_ip = 195;
                        continue _fun75338
                    }
                case 47:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 10;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var6.bind(var3)(var2);
                    var2 = var2.sliderPagination;
                    var6 = new Array(3);
                    var6[0] = var2;
                    var2 = {};
                    var7 = 'column';
                    if (var8) {
                        _fun75338_ip = 121;
                        continue _fun75338
                    }
                case 95:
                    var8 = var4._needsRTLAdaptations;
                    var9 = var8.bind(var4)();
                    var8 = 'row';
                    if (!var9) {
                        _fun75338_ip = 118;
                        continue _fun75338
                    }
                case 112:
                    var8 = 'row-reverse';
                case 118:
                    var7 = var8;
                case 121:
                    var2.flexDirection = var7;
                    var6[1] = var2;
                    if (var1) {
                        _fun75338_ip = 134;
                        continue _fun75338
                    }
                case 132:
                    var1 = {};
                case 134:
                    var6[2] = var1;
                    var2 = _closure1_slot10;
                    var1 = _closure1_slot9;
                    var0 = {};
                    var7 = 'box-none';
                    var0.pointerEvents = var7;
                    var0.style = var6;
                    var6 = !var5;
                    var6 = !var6;
                    var0.accessible = var6;
                    var0.accessibilityLabel = var5;
                    var4 = var4.dots;
                    var0.children = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                case 195:
                    var0 = false;
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = {};
    var4 = 11;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.number;
    var7 = var7.isRequired;
    var3.activeDotIndex = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.number;
    var7 = var7.isRequired;
    var3.dotsLength = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.number;
    var3.activeOpacity = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.object;
    var3.carouselRef = var7;
    var7 = 12;
    var9 = var6[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.ViewPropTypes;
    var9 = var9.style;
    var3.containerStyle = var9;
    var9 = var6[var4];
    var9 = var5.bind(var0)(var9);
    var9 = var9.string;
    var3.dotColor = var9;
    var9 = var6[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.ViewPropTypes;
    var9 = var9.style;
    var3.dotContainerStyle = var9;
    var9 = var6[var4];
    var9 = var5.bind(var0)(var9);
    var9 = var9.element;
    var3.dotElement = var9;
    var9 = var6[var7];
    var9 = var8.bind(var0)(var9);
    var9 = var9.ViewPropTypes;
    var9 = var9.style;
    var3.dotStyle = var9;
    var9 = var6[var4];
    var9 = var5.bind(var0)(var9);
    var9 = var9.string;
    var3.inactiveDotColor = var9;
    var9 = var6[var4];
    var9 = var5.bind(var0)(var9);
    var9 = var9.element;
    var3.inactiveDotElement = var9;
    var9 = var6[var4];
    var9 = var5.bind(var0)(var9);
    var9 = var9.number;
    var3.inactiveDotOpacity = var9;
    var9 = var6[var4];
    var9 = var5.bind(var0)(var9);
    var9 = var9.number;
    var3.inactiveDotScale = var9;
    var7 = var6[var7];
    var7 = var8.bind(var0)(var7);
    var7 = var7.ViewPropTypes;
    var7 = var7.style;
    var3.inactiveDotStyle = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.func;
    var3.renderDots = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.bool;
    var3.tappableDots = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.bool;
    var3.vertical = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.string;
    var3.accessibilityLabel = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.number;
    var3.animatedDuration = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.number;
    var3.animatedFriction = var7;
    var7 = var6[var4];
    var7 = var5.bind(var0)(var7);
    var7 = var7.number;
    var3.animatedTension = var7;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.number;
    var3.delayPressInDot = var4;
    var1.propTypes = var3;
    var3 = {
        'inactiveDotOpacity': 0.5,
        'inactiveDotScale': 0.5,
        'tappableDots': false,
        'vertical': false,
        'animatedDuration': 250,
        'animatedFriction': 4,
        'animatedTension': 50,
        'delayPressInDot': 0
    };
    var1.defaultProps = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 6, 7, 15, 17, 18, 31, 27, 33, 9491, 9492, 3220, 7703]);