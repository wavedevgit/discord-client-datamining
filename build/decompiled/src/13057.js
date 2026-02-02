// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = ['state', 'descriptors', 'dimensions', 'insets', 'style'];
    var _closure1_slot3 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var6 = var1.Animated;
    var _closure1_slot7 = var6;
    var6 = var1.Platform;
    var6 = var1.StyleSheet;
    var _closure1_slot8 = var6;
    var1 = var1.View;
    var _closure1_slot9 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var4 = var1.jsx;
    var _closure1_slot10 = var4;
    var1 = var1.jsxs;
    var _closure1_slot11 = var1;
    var1 = function arg0() {
        _fun100551: for (var _fun100551_ip = 0;;) switch (_fun100551_ip) {
            case 0:
                var0 = arg0;
                var3 = var0.state;
                var5 = var0.descriptors;
                var _closure2_slot0 = var5;
                var1 = var0.layout;
                var0 = var0.dimensions;
                var6 = var3.routes;
                var4 = var3.index;
                var4 = var6[var4];
                var4 = var4.key;
                var4 = var5[var4];
                var4 = var4.options;
                var5 = var4.tabBarLabelPosition;
                if (!var5) {
                    _fun100551_ip = 90;
                    continue _fun100551
                }
            case 70:
                var4 = 'beside-icon';
                if (!(var4 !== var5)) {
                    _fun100551_ip = 163;
                    continue _fun100551
                }
            case 80:
                var4 = 'below-icon';
                if (!(var4 !== var5)) {
                    _fun100551_ip = 159;
                    continue _fun100551
                }
            case 90:
                var5 = var1.width;
                var4 = 768;
                if (!(!(var5 >= var4))) {
                    _fun100551_ip = 121;
                    continue _fun100551
                }
            case 105:
                var4 = var0.width;
                var0 = var0.height;
                var0 = var4 > var0;
                _fun100551_ip = 157;
                continue _fun100551;
            case 121:
                var5 = var3.routes;
                var4 = var5.reduce;
                var3 = function(arg0, arg1) { // Environment: var2
                    _fun100552: for (var _fun100552_ip = 0;;) switch (_fun100552_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = _closure2_slot0;
                            var0 = arg1;
                            var0 = var0.key;
                            var0 = var2[var0];
                            var0 = var0.options;
                            var3 = var0.tabBarItemStyle;
                            var2 = _closure1_slot8;
                            var0 = var2.flatten;
                            var0 = var0.bind(var2)(var3);
                            if (!var0) {
                                _fun100552_ip = 83;
                                continue _fun100552
                            }
                        case 54:
                            var2 = var0.width;
                            var3 = 'number';
                            var2 = typeof var2;
                            if (!(var3 !== var2)) {
                                _fun100552_ip = 104;
                                continue _fun100552
                            }
                        case 70:
                            var2 = var0.maxWidth;
                            var2 = typeof var2;
                            if (!(var3 !== var2)) {
                                _fun100552_ip = 92;
                                continue _fun100552
                            }
                        case 83:
                            var2 = 125;
                            var2 = var1 + var2;
                            return var2;
                        case 92:
                            var2 = var0.maxWidth;
                            var2 = var1 + var2;
                            return var2;
                        case 104:
                            var0 = var0.width;
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var2 = 0;
                var2 = var4.bind(var5)(var3, var2);
                var1 = var1.width;
                var0 = var2 <= var1;
            case 157:
                return var0;
            case 159:
                var0 = false;
                return var0;
            case 163:
                var0 = true;
                return var0;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function arg0() {
        var0 = global;
        var3 = var0.Math;
        var2 = var3.max;
        var0 = arg0;
        var0 = var0.bottom;
        var1 = 0;
        var0 = var0 - var1;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot13 = var1;
    var1 = function arg0() {
        _fun100554: for (var _fun100554_ip = 0;;) switch (_fun100554_ip) {
            case 0:
                var6 = arg0;
                var11 = var6.state;
                var10 = var6.descriptors;
                var9 = var6.dimensions;
                var3 = var6.insets;
                var5 = var6.style;
                var4 = _closure1_slot5;
                var0 = _closure1_slot3;
                var2 = undefined;
                var8 = var4.bind(var2)(var6, var0);
                var4 = _closure1_slot8;
                var0 = var4.flatten;
                var4 = var0.bind(var4)(var5);
                var0 = null;
                var5 = var0 == var4;
                var0 = undefined;
                if (var5) {
                    _fun100554_ip = 81;
                    continue _fun100554
                }
            case 76:
                var0 = var4.height;
            case 81:
                var5 = 'number';
                var4 = typeof var0;
                if (!(var5 !== var4)) {
                    _fun100554_ip = 164;
                    continue _fun100554
                }
            case 92:
                var4 = var9.width;
                var4 = var9.height;
                var5 = _closure1_slot12;
                var4 = global;
                var7 = var4.Object;
                var6 = var7.assign;
                var4 = {};
                var4.state = var11;
                var4.descriptors = var10;
                var4.dimensions = var9;
                var4 = var6.bind(var7)(var4, var8);
                var4 = var5.bind(var2)(var4);
                var1 = _closure1_slot13;
                var2 = var1.bind(var2)(var3);
                var1 = 49;
                var1 = var1 + var2;
                return var1;
            case 164:
                return var0;
        }
    };
    var _closure1_slot14 = var1;
    var5 = var6.create;
    var4 = {};
    var7 = {
        'left': 0,
        'right': 0,
        'bottom': 0,
        'borderTopWidth': null,
        'elevation': 0
    };
    var8 = var6.hairlineWidth;
    var7.borderTopWidth = var8;
    var4.tabBar = var7;
    var7 = {
        'flex': 1,
        'flexDirection': 'row'
    };
    var4.content = var7;
    var4 = var5.bind(var6)(var4);
    var _closure1_slot15 = var4;
    var3 = function arg0() {
        _fun100555: for (var _fun100555_ip = 0;;) switch (_fun100555_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.state;
                var _closure2_slot0 = var11;
                var1 = var0.navigation;
                var _closure2_slot1 = var1;
                var5 = var0.descriptors;
                var _closure2_slot2 = var5;
                var12 = var0.insets;
                var15 = var0.style;
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var4 = var2[var0];
                var3 = undefined;
                var6 = var1.bind(var3)(var4);
                var4 = var6.useTheme;
                var4 = var4.bind(var6)();
                var16 = var4.colors;
                var0 = var2[var0];
                var1 = var1.bind(var3)(var0);
                var0 = var1.useLinkBuilder;
                var0 = var0.bind(var1)();
                var _closure2_slot3 = var0;
                var1 = var11.routes;
                var0 = var11.index;
                var0 = var1[var0];
                var0 = var0.key;
                var0 = var5[var0];
                var2 = var0.options;
                var0 = var2.tabBarShowLabel;
                var _closure2_slot4 = var0;
                var0 = var2.tabBarHideOnKeyboard;
                var1 = var3 !== var0;
                if (!var1) {
                    _fun100555_ip = 163;
                    continue _fun100555
                }
            case 160:
                var1 = var0;
            case 163:
                var6 = var2.tabBarVisibilityAnimationConfig;
                var _closure2_slot5 = var6;
                var7 = var2.tabBarStyle;
                var0 = var2.tabBarBackground;
                var4 = var2.tabBarActiveTintColor;
                var _closure2_slot6 = var4;
                var4 = var2.tabBarInactiveTintColor;
                var _closure2_slot7 = var4;
                var4 = var2.tabBarActiveBackgroundColor;
                var _closure2_slot8 = var4;
                var2 = var2.tabBarInactiveBackgroundColor;
                var _closure2_slot9 = var2;
                var4 = _closure1_slot0;
                var18 = _closure1_slot2;
                var2 = 6;
                var2 = var18[var2];
                var4 = var4.bind(var3)(var2);
                var2 = var4.useSafeAreaFrame;
                var4 = var2.bind(var4)();
                var17 = _closure1_slot1;
                var2 = 7;
                var2 = var18[var2];
                var2 = var17.bind(var3)(var2);
                var2 = var2.bind(var3)();
                var14 = _closure1_slot6;
                var13 = var14.useContext;
                var10 = 8;
                var10 = var18[var10];
                var10 = var17.bind(var3)(var10);
                var10 = var13.bind(var14)(var10);
                var _closure2_slot10 = var10;
                var13 = var14.useContext;
                var10 = 9;
                var10 = var18[var10];
                var10 = var17.bind(var3)(var10);
                var10 = var13.bind(var14)(var10);
                var _closure2_slot11 = var10;
                if (!var1) {
                    _fun100555_ip = 341;
                    continue _fun100555
                }
            case 338:
                var1 = var2;
            case 341:
                var1 = !var1;
                var _closure2_slot12 = var1;
                var17 = _closure1_slot6;
                var2 = var17.useRef;
                var2 = var2.bind(var17)(var6);
                var _closure2_slot13 = var2;
                var6 = var17.useEffect;
                var2 = function() { // Environment: var8
                    var1 = _closure2_slot13;
                    var0 = _closure2_slot5;
                    var1.current = var0;
                    var0 = undefined;
                    return var0;
                };
                var2 = var6.bind(var17)(var2);
                var6 = var17.useState;
                var2 = !var1;
                var2 = var6.bind(var17)(var2);
                var13 = _closure1_slot4;
                var10 = 2;
                var14 = var13.bind(var3)(var2, var10);
                var21 = 0;
                var6 = var14[var21];
                var2 = 1;
                var14 = var14[var2];
                var _closure2_slot14 = var14;
                var18 = var17.useState;
                var14 = function() { // Environment: var8
                    _fun100557: for (var _fun100557_ip = 0;;) switch (_fun100557_ip) {
                        case 0:
                            var0 = _closure1_slot7;
                            var2 = var0.Value;
                            var1 = _closure2_slot12;
                            var0 = 0;
                            if (!var1) {
                                _fun100557_ip = 28;
                                continue _fun100557
                            }
                        case 25:
                            var0 = 1;
                        case 28:
                            var1 = var2.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var2
                                }
                            });
                            var4 = var1;
                            var3 = var0;
                            var0 = new var4[var2](var3, var2);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                    }
                };
                var14 = var18.bind(var17)(var14);
                var14 = var13.bind(var3)(var14, var2);
                var19 = var14[var21];
                var _closure2_slot15 = var19;
                var18 = var17.useEffect;
                var14 = new Array(2);
                var14[0] = var19;
                var14[1] = var1;
                var1 = function() { // Environment: var8
                    _fun100558: for (var _fun100558_ip = 0;;) switch (_fun100558_ip) {
                        case 0:
                            var1 = _closure2_slot13;
                            var1 = var1.current;
                            var3 = _closure2_slot12;
                            if (var3) {
                                _fun100558_ip = 187;
                                continue _fun100558
                            }
                        case 24:
                            var4 = _closure2_slot14;
                            var6 = undefined;
                            var3 = true;
                            var3 = var4.bind(var6)(var3);
                            var10 = null;
                            var3 = var10 == var1;
                            var4 = undefined;
                            if (var3) {
                                _fun100558_ip = 69;
                                continue _fun100558
                            }
                        case 48:
                            var3 = var1.hide;
                            var5 = var10 == var3;
                            var4 = undefined;
                            if (var5) {
                                _fun100558_ip = 69;
                                continue _fun100558
                            }
                        case 63:
                            var4 = var3.animation;
                        case 69:
                            var3 = 'spring';
                            if (!(var3 !== var4)) {
                                _fun100558_ip = 92;
                                continue _fun100558
                            }
                        case 77:
                            var3 = _closure1_slot7;
                            var5 = var3.timing;
                            _fun100558_ip = 105;
                            continue _fun100558;
                        case 92:
                            var3 = _closure1_slot7;
                            var5 = var3.spring;
                        case 105:
                            var4 = _closure2_slot15;
                            var3 = global;
                            var9 = var3.Object;
                            var8 = var9.assign;
                            var3 = var10 == var1;
                            var7 = undefined;
                            if (var3) {
                                _fun100558_ip = 151;
                                continue _fun100558
                            }
                        case 131:
                            var3 = var1.hide;
                            var10 = var10 == var3;
                            var7 = undefined;
                            if (var10) {
                                _fun100558_ip = 151;
                                continue _fun100558
                            }
                        case 146:
                            var7 = var3.config;
                        case 151:
                            var3 = {
                                'toValue': 0,
                                'useNativeDriver': true,
                                'duration': 200
                            };
                            var3 = var8.bind(var9)(var3, var7);
                            var4 = var5.bind(var6)(var4, var3);
                            var3 = var4.start;
                            var3 = var3.bind(var4)();
                            _fun100558_ip = 342;
                            continue _fun100558;
                        case 187:
                            var8 = null;
                            var3 = var8 == var1;
                            var4 = undefined;
                            var5 = undefined;
                            if (var3) {
                                _fun100558_ip = 221;
                                continue _fun100558
                            }
                        case 200:
                            var3 = var1.show;
                            var6 = var8 == var3;
                            var5 = undefined;
                            if (var6) {
                                _fun100558_ip = 221;
                                continue _fun100558
                            }
                        case 215:
                            var5 = var3.animation;
                        case 221:
                            var3 = 'spring';
                            if (!(var3 !== var5)) {
                                _fun100558_ip = 244;
                                continue _fun100558
                            }
                        case 229:
                            var3 = _closure1_slot7;
                            var3 = var3.timing;
                            _fun100558_ip = 257;
                            continue _fun100558;
                        case 244:
                            var5 = _closure1_slot7;
                            var3 = var5.spring;
                        case 257:
                            var2 = _closure2_slot15;
                            var5 = global;
                            var7 = var5.Object;
                            var6 = var7.assign;
                            var9 = var8 == var1;
                            var5 = undefined;
                            if (var9) {
                                _fun100558_ip = 303;
                                continue _fun100558
                            }
                        case 283:
                            var1 = var1.show;
                            var8 = var8 == var1;
                            var5 = undefined;
                            if (var8) {
                                _fun100558_ip = 303;
                                continue _fun100558
                            }
                        case 298:
                            var5 = var1.config;
                        case 303:
                            var1 = {
                                'toValue': 1,
                                'useNativeDriver': true,
                                'duration': 250
                            };
                            var1 = var6.bind(var7)(var1, var5);
                            var3 = var3.bind(var4)(var2, var1);
                            var2 = var3.start;
                            var1 = function(arg0) { // Environment: var0
                                _fun100559: for (var _fun100559_ip = 0;;) switch (_fun100559_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var0 = var0.finished;
                                        if (!var0) {
                                            _fun100559_ip = 28;
                                            continue _fun100559
                                        }
                                    case 12:
                                        var2 = _closure2_slot14;
                                        var1 = undefined;
                                        var0 = false;
                                        var0 = var2.bind(var1)(var0);
                                    case 28:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                        case 342:
                            var0 = function() { // Environment: var0
                                var1 = _closure2_slot15;
                                var0 = var1.stopAnimation;
                                var0 = var0.bind(var1)();
                                return var0;
                            };
                            return var0;
                    }
                };
                var1 = var18.bind(var17)(var1, var14);
                var14 = var17.useState;
                var1 = {};
                var1.height = var21;
                var18 = var4.width;
                var1.width = var18;
                var1 = var14.bind(var17)(var1);
                var1 = var13.bind(var3)(var1, var10);
                var20 = var1[var21];
                var1 = var1[var2];
                var _closure2_slot16 = var1;
                var10 = var11.routes;
                var1 = _closure1_slot13;
                var13 = var1.bind(var3)(var12);
                var2 = _closure1_slot14;
                var1 = {};
                var1.state = var11;
                var1.descriptors = var5;
                var1.insets = var12;
                var1.dimensions = var4;
                var1.layout = var20;
                var14 = new Array(2);
                var14[0] = var7;
                var14[1] = var15;
                var1.style = var14;
                var14 = var2.bind(var3)(var1);
                var2 = _closure1_slot12;
                var1 = {};
                var1.state = var11;
                var1.descriptors = var5;
                var1.dimensions = var4;
                var1.layout = var20;
                var1 = var2.bind(var3)(var1);
                var _closure2_slot17 = var1;
                var15 = null;
                var1 = var15 == var0;
                var5 = undefined;
                if (var1) {
                    _fun100555_ip = 645;
                    continue _fun100555
                }
            case 641:
                var5 = var0.bind(var3)();
            case 645:
                var2 = _closure1_slot11;
                var0 = _closure1_slot7;
                var1 = var0.View;
                var0 = {};
                var4 = _closure1_slot15;
                var11 = var4.tabBar;
                var4 = new Array(5);
                var4[0] = var11;
                var11 = {};
                var18 = var15 != var5;
                var17 = 'transparent';
                if (var18) {
                    _fun100555_ip = 697;
                    continue _fun100555
                }
            case 691:
                var17 = var16.card;
            case 697:
                var11.backgroundColor = var17;
                var16 = var16.border;
                var11.borderTopColor = var16;
                var4[1] = var11;
                var11 = {};
                var17 = {};
                var18 = var19.interpolate;
                var16 = {};
                var22 = [0, 1];
                var16.inputRange = var22;
                var20 = var20.height;
                var22 = var20 + var13;
                var20 = _closure1_slot8;
                var20 = var20.hairlineWidth;
                var22 = var22 + var20;
                var20 = new Array(2);
                var20[0] = var22;
                var20[1] = var21;
                var16.outputRange = var20;
                var16 = var18.bind(var19)(var16);
                var17.translateY = var16;
                var16 = new Array(1);
                var16[0] = var17;
                var11.transform = var16;
                var15 = null;
                if (!var6) {
                    _fun100555_ip = 814;
                    continue _fun100555
                }
            case 810:
                var15 = 'absolute';
            case 814:
                var11.position = var15;
                var4[2] = var11;
                var11 = {};
                var11.height = var14;
                var11.paddingBottom = var13;
                var13 = global;
                var15 = var13.Math;
                var14 = var15.max;
                var13 = var12.left;
                var12 = var12.right;
                var12 = var14.bind(var15)(var13, var12);
                var11.paddingHorizontal = var12;
                var4[3] = var11;
                var4[4] = var7;
                var0.style = var4;
                var4 = 'auto';
                if (!var6) {
                    _fun100555_ip = 889;
                    continue _fun100555
                }
            case 885:
                var4 = 'none';
            case 889:
                var0.pointerEvents = var4;
                var4 = function arg0() {
                    _fun100561: for (var _fun100561_ip = 0;;) switch (_fun100561_ip) {
                        case 0:
                            var0 = arg0;
                            var0 = var0.nativeEvent;
                            var0 = var0.layout;
                            var4 = var0.height;
                            var _closure3_slot0 = var4;
                            var0 = var0.width;
                            var _closure3_slot1 = var0;
                            var2 = _closure2_slot10;
                            var3 = null;
                            if (!(var3 != var2)) {
                                _fun100561_ip = 59;
                                continue _fun100561
                            }
                        case 48:
                            var5 = _closure2_slot10;
                            var2 = undefined;
                            var2 = var5.bind(var2)(var4);
                        case 59:
                            var2 = _closure2_slot11;
                            if (!(var3 != var2)) {
                                _fun100561_ip = 78;
                                continue _fun100561
                            }
                        case 67:
                            var3 = _closure2_slot11;
                            var2 = undefined;
                            var2 = var3.bind(var2)(var4);
                        case 78:
                            var2 = _closure2_slot16;
                            var0 = undefined;
                            var1 = function(arg0) { // Environment: var1
                                _fun100562: for (var _fun100562_ip = 0;;) switch (_fun100562_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var3 = _closure3_slot0;
                                        var1 = var0.height;
                                        if (!(var3 === var1)) {
                                            _fun100562_ip = 32;
                                            continue _fun100562
                                        }
                                    case 19:
                                        var3 = _closure3_slot1;
                                        var1 = var0.width;
                                        if (!(var3 !== var1)) {
                                            _fun100562_ip = 53;
                                            continue _fun100562
                                        }
                                    case 32:
                                        var1 = {};
                                        var3 = _closure3_slot0;
                                        var1.height = var3;
                                        var2 = _closure3_slot1;
                                        var1.width = var2;
                                        var0 = var1;
                                    case 53:
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var0)(var1);
                            return var0;
                    }
                };
                var0.onLayout = var4;
                var7 = _closure1_slot10;
                var6 = _closure1_slot9;
                var4 = {};
                var11 = 'none';
                var4.pointerEvents = var11;
                var11 = _closure1_slot8;
                var11 = var11.absoluteFill;
                var4.style = var11;
                var4.children = var5;
                var5 = var7.bind(var3)(var6, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var5 = {};
                var11 = 'tablist';
                var5.accessibilityRole = var11;
                var9 = _closure1_slot15;
                var9 = var9.content;
                var5.style = var9;
                var9 = var10.map;
                var8 = function(arg0, arg1) { // Environment: var8
                    _fun100563: for (var _fun100563_ip = 0;;) switch (_fun100563_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var1 = _closure2_slot0;
                            var2 = var1.index;
                            var1 = arg1;
                            var14 = var1 === var2;
                            var _closure3_slot1 = var14;
                            var2 = _closure2_slot2;
                            var1 = var0.key;
                            var1 = var2[var1];
                            var9 = var1.options;
                            var1 = var9.tabBarLabel;
                            var4 = undefined;
                            if (!(var4 === var1)) {
                                _fun100563_ip = 85;
                                continue _fun100563
                            }
                        case 62:
                            var1 = var9.title;
                            if (!(var4 === var1)) {
                                _fun100563_ip = 78;
                                continue _fun100563
                            }
                        case 71:
                            var11 = var0.name;
                            _fun100563_ip = 83;
                            continue _fun100563;
                        case 78:
                            var11 = var9.title;
                        case 83:
                            _fun100563_ip = 91;
                            continue _fun100563;
                        case 85:
                            var11 = var9.tabBarLabel;
                        case 91:
                            var1 = var9.tabBarAccessibilityLabel;
                            var12 = undefined;
                            if (!(var12 !== var1)) {
                                _fun100563_ip = 109;
                                continue _fun100563
                            }
                        case 103:
                            var12 = var9.tabBarAccessibilityLabel;
                        case 109:
                            var3 = _closure1_slot10;
                            var6 = _closure1_slot0;
                            var15 = _closure1_slot2;
                            var5 = 5;
                            var1 = var15[var5];
                            var1 = var6.bind(var4)(var1);
                            var1 = var1.NavigationContext;
                            var2 = var1.Provider;
                            var1 = {};
                            var16 = _closure2_slot2;
                            var8 = var0.key;
                            var8 = var16[var8];
                            var8 = var8.navigation;
                            var1.value = var8;
                            var5 = var15[var5];
                            var5 = var6.bind(var4)(var5);
                            var5 = var5.NavigationRouteContext;
                            var6 = var5.Provider;
                            var5 = {};
                            var5.value = var0;
                            var8 = _closure1_slot1;
                            var7 = 10;
                            var7 = var15[var7];
                            var8 = var8.bind(var4)(var7);
                            var7 = {};
                            var7.route = var0;
                            var15 = var0.key;
                            var15 = var16[var15];
                            var7.descriptor = var15;
                            var7.focused = var14;
                            var14 = _closure2_slot17;
                            var7.horizontal = var14;
                            var14 = function() {
                                _fun100564: for (var _fun100564_ip = 0;;) switch (_fun100564_ip) {
                                    case 0:
                                        var3 = _closure2_slot1;
                                        var2 = var3.emit;
                                        var1 = {
                                            'type': 'tabPress',
                                            'target': null,
                                            'canPreventDefault': true
                                        };
                                        var4 = _closure3_slot0;
                                        var4 = var4.key;
                                        var1.target = var4;
                                        var8 = true;
                                        var2 = var2.bind(var3)(var1);
                                        var1 = _closure3_slot1;
                                        if (var1) {
                                            _fun100564_ip = 65;
                                            continue _fun100564
                                        }
                                    case 59:
                                        var1 = var2.defaultPrevented;
                                    case 65:
                                        if (var1) {
                                            _fun100564_ip = 182;
                                            continue _fun100564
                                        }
                                    case 68:
                                        var2 = _closure2_slot1;
                                        var1 = var2.dispatch;
                                        var3 = global;
                                        var6 = var3.Object;
                                        var5 = var6.assign;
                                        var7 = _closure1_slot0;
                                        var4 = _closure1_slot2;
                                        var3 = 5;
                                        var4 = var4[var3];
                                        var3 = undefined;
                                        var3 = var7.bind(var3)(var4);
                                        var7 = var3.CommonActions;
                                        var4 = var7.navigate;
                                        var3 = {};
                                        var9 = _closure3_slot0;
                                        var9 = var9.name;
                                        var3.name = var9;
                                        var3.merge = var8;
                                        var4 = var4.bind(var7)(var3);
                                        var3 = {};
                                        var0 = _closure2_slot0;
                                        var0 = var0.key;
                                        var3.target = var0;
                                        var0 = {};
                                        var0 = var5.bind(var6)(var0, var4, var3);
                                        var0 = var1.bind(var2)(var0);
                                    case 182:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var7.onPress = var14;
                            var14 = function() {
                                var2 = _closure2_slot1;
                                var1 = var2.emit;
                                var0 = {};
                                var3 = 'tabLongPress';
                                var0.type = var3;
                                var3 = _closure3_slot0;
                                var3 = var3.key;
                                var0.target = var3;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            var7.onLongPress = var14;
                            var7.accessibilityLabel = var12;
                            var15 = _closure2_slot3;
                            var14 = var0.name;
                            var12 = var0.params;
                            var12 = var15.bind(var4)(var14, var12);
                            var7.to = var12;
                            var12 = var9.tabBarTestID;
                            var7.testID = var12;
                            var12 = var9.tabBarAllowFontScaling;
                            var7.allowFontScaling = var12;
                            var12 = _closure2_slot6;
                            var7.activeTintColor = var12;
                            var12 = _closure2_slot7;
                            var7.inactiveTintColor = var12;
                            var12 = _closure2_slot8;
                            var7.activeBackgroundColor = var12;
                            var12 = _closure2_slot9;
                            var7.inactiveBackgroundColor = var12;
                            var12 = var9.tabBarButton;
                            var7.button = var12;
                            var12 = var9.tabBarIcon;
                            var14 = null;
                            if (!(var14 == var12)) {
                                _fun100563_ip = 395;
                                continue _fun100563
                            }
                        case 388:
                            var12 = function(arg0) { // Environment: var13
                                var0 = arg0;
                                var5 = var0.color;
                                var4 = var0.size;
                                var3 = _closure1_slot10;
                                var1 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 11;
                                var0 = var2[var0];
                                var2 = undefined;
                                var0 = var1.bind(var2)(var0);
                                var1 = var0.MissingIcon;
                                var0 = {};
                                var0.color = var5;
                                var0.size = var4;
                                var0 = var3.bind(var2)(var1, var0);
                                return var0;
                            };
                        case 395:
                            var7.icon = var12;
                            var12 = var9.tabBarBadge;
                            var7.badge = var12;
                            var12 = var9.tabBarBadgeStyle;
                            var7.badgeStyle = var12;
                            var7.label = var11;
                            var10 = _closure2_slot4;
                            var7.showLabel = var10;
                            var10 = var9.tabBarLabelStyle;
                            var7.labelStyle = var10;
                            var10 = var9.tabBarIconStyle;
                            var7.iconStyle = var10;
                            var9 = var9.tabBarItemStyle;
                            var7.style = var9;
                            var7 = var3.bind(var4)(var8, var7);
                            var5.children = var7;
                            var5 = var3.bind(var4)(var6, var5);
                            var1.children = var5;
                            var0 = var0.key;
                            var0 = var3.bind(var4)(var2, var1, var0);
                            return var0;
                    }
                };
                var8 = var9.bind(var10)(var8);
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var3;
    var2.getTabBarHeight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 29, 31, 27, 33, 1470, 1571, 13058, 13059, 13060, 13061, 4674]);