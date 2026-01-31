// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var3 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var3;
    var _closure1_slot2 = var8;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var4
        _fun45210: for (var _fun45210_ip = 0;;) switch (_fun45210_ip) {
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
                _fun45210_ip = 74;
                continue _fun45210;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var7 = global;
    var9 = var7.Object;
    var6 = var9.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var9)(var2, var0, var1);
    var0 = 0;
    var1 = var8[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var8[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var8[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var8[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var8[var1];
    var1 = var3.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var6 = var8[var1];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot8 = var3;
    var1 = var8[var1];
    var1 = var5.bind(var0)(var1);
    var3 = var1.Component;
    var1 = 6;
    var1 = var8[var1];
    var1 = var5.bind(var0)(var1);
    var6 = var1.Animated;
    var _closure1_slot9 = var6;
    var6 = var1.StyleSheet;
    var9 = var1.View;
    var _closure1_slot10 = var9;
    var9 = var1.Keyboard;
    var _closure1_slot11 = var9;
    var9 = var1.StatusBar;
    var _closure1_slot12 = var9;
    var1 = var1.I18nManager;
    var _closure1_slot13 = var1;
    var1 = 7;
    var1 = var8[var1];
    var1 = var5.bind(var0)(var1);
    var5 = var1.jsx;
    var _closure1_slot14 = var5;
    var1 = var1.jsxs;
    var _closure1_slot15 = var1;
    var1 = function(arg0) { // Environment: var4
        var3 = function(arg0) { // Original name: DrawerLayout, environment: var5
            _fun45214: for (var _fun45214_ip = 0;;) switch (_fun45214_ip) {
                case 0:
                    var3 = arg0;
                    var6 = this;
                    var0 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var6, var4);
                    var11 = new Array(1);
                    var11[0] = var3;
                    var0 = _closure1_slot6;
                    var10 = var0.bind(var5)(var4);
                    var4 = _closure1_slot5;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun45214_ip = 75;
                        continue _fun45214
                    }
                case 62:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var6, var11);
                    _fun45214_ip = 109;
                    continue _fun45214;
                case 75:
                    var7 = global;
                    var9 = var7.Reflect;
                    var8 = var9.construct;
                    var7 = _closure1_slot6;
                    var7 = var7.bind(var5)(var6);
                    var7 = var7.constructor;
                    var0 = var8.bind(var9)(var10, var11, var7);
                case 109:
                    var0 = var4.bind(var5)(var6, var0);
                    var _closure3_slot0 = var0;
                    var5 = _closure1_slot8;
                    var4 = var5.createRef;
                    var4 = var4.bind(var5)();
                    var0.accessibilityIsModalView = var4;
                    var4 = var5.createRef;
                    var4 = var4.bind(var5)();
                    var0.pointerEventsView = var4;
                    var4 = var5.createRef;
                    var4 = var4.bind(var5)();
                    var0.panGestureHandler = var4;
                    var4 = false;
                    var0.drawerShown = var4;
                    var4 = function(arg0, arg1) { // Environment: var2
                        _fun45215: for (var _fun45215_ip = 0;;) switch (_fun45215_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = arg1;
                                var2 = var3.drawerPosition;
                                var10 = var3.drawerWidth;
                                var1 = var3.drawerType;
                                var7 = var0.dragX;
                                var6 = var0.touchX;
                                var9 = var0.drawerTranslation;
                                var11 = var0.containerWidth;
                                var0 = 'left';
                                if (!(var0 === var2)) {
                                    _fun45215_ip = 80;
                                    continue _fun45215
                                }
                            case 56:
                                var2 = var6.setValue;
                                var0 = 0;
                                var0 = var2.bind(var6)(var0);
                                var4 = var7;
                                var5 = var6;
                                _fun45215_ip = 226;
                                continue _fun45215;
                            case 80:
                                var13 = _closure1_slot9;
                                var2 = var13.multiply;
                                var0 = var13.Value;
                                var8 = var0.prototype;
                                var8 = Object.create(var8, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var16 = -1;
                                var19 = var8;
                                var18 = var16;
                                var0 = new var19[var0](var18, var17);
                                var0 = var0 instanceof Object ? var0 : var8;
                                var4 = var2.bind(var13)(var0, var7);
                                var12 = var13.add;
                                var0 = var13.Value;
                                var8 = var0.prototype;
                                var8 = Object.create(var8, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var19 = var8;
                                var18 = var11;
                                var0 = new var19[var0](var18, var17);
                                var8 = var0 instanceof Object ? var0 : var8;
                                var14 = var13.multiply;
                                var0 = var13.Value;
                                var15 = var0.prototype;
                                var15 = Object.create(var15, {
                                    constructor: {
                                        value: var0
                                    }
                                });
                                var19 = var15;
                                var18 = var16;
                                var0 = new var19[var0](var18, var17);
                                var0 = var0 instanceof Object ? var0 : var15;
                                var0 = var14.bind(var13)(var0, var6);
                                var5 = var12.bind(var13)(var8, var0);
                                var8 = var6.setValue;
                                var8 = var8.bind(var6)(var11);
                            case 226:
                                var0 = 'front';
                                var8 = var4;
                                if (!(var0 === var1)) {
                                    _fun45215_ip = 375;
                                    continue _fun45215
                                }
                            case 242:
                                var2 = _closure1_slot9;
                                var1 = var2.add;
                                var11 = var2.multiply;
                                var13 = var2.Value;
                                var0 = var13.prototype;
                                var12 = Object.create(var0, {
                                    constructor: {
                                        value: var13
                                    }
                                });
                                var18 = -1;
                                var19 = var12;
                                var0 = new var19[var13](var18, var17);
                                var0 = var0 instanceof Object ? var0 : var12;
                                var0 = var11.bind(var2)(var0, var4);
                                var5 = var1.bind(var2)(var5, var0);
                                var1 = var5.interpolate;
                                var0 = {};
                                var12 = 1;
                                var13 = var10 - var12;
                                var11 = new Array(3);
                                var11[0] = var13;
                                var11[1] = var10;
                                var12 = var10 + var12;
                                var11[2] = var12;
                                var0.inputRange = var11;
                                var11 = [0, 0, 1];
                                var0.outputRange = var11;
                                var1 = var1.bind(var5)(var0);
                                var0 = var2.add;
                                var8 = var0.bind(var2)(var4, var1);
                            case 375:
                                var2 = _closure3_slot0;
                                var5 = _closure1_slot9;
                                var4 = var5.add;
                                var8 = var4.bind(var5)(var8, var9);
                                var5 = var8.interpolate;
                                var4 = {};
                                var9 = [0];
                                var9[1] = var10;
                                var4.inputRange = var9;
                                var9 = [0, 1];
                                var4.outputRange = var9;
                                var9 = 'clamp';
                                var4.extrapolate = var9;
                                var4 = var5.bind(var8)(var4);
                                var2.openValue = var4;
                                var4 = {};
                                var3 = var3.useNativeAnimations;
                                var4.useNativeDriver = var3;
                                var2 = var2.props;
                                var2 = var2.onDrawerSlide;
                                if (!var2) {
                                    _fun45215_ip = 502;
                                    continue _fun45215
                                }
                            case 489:
                                var2 = function(arg0) { // Environment: var2
                                    _fun45216: for (var _fun45216_ip = 0;;) switch (_fun45216_ip) {
                                        case 0:
                                            var0 = global;
                                            var2 = var0.Math;
                                            var1 = var2.floor;
                                            var4 = var0.Math;
                                            var3 = var4.abs;
                                            var0 = arg0;
                                            var0 = var0.nativeEvent;
                                            var0 = var0.translationX;
                                            var0 = var3.bind(var4)(var0);
                                            var3 = var1.bind(var2)(var0);
                                            var1 = _closure3_slot0;
                                            var2 = var1.state;
                                            var2 = var2.containerWidth;
                                            var2 = var3 / var2;
                                            var1 = var1.props;
                                            var3 = var1.onDrawerSlide;
                                            var1 = null;
                                            if (!(var1 != var3)) {
                                                _fun45216_ip = 110;
                                                continue _fun45216
                                            }
                                        case 90:
                                            var0 = _closure3_slot0;
                                            var1 = var0.props;
                                            var0 = var1.onDrawerSlide;
                                            var0 = var0.bind(var1)(var2);
                                        case 110:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var4.listener = var2;
                            case 502:
                                var1 = _closure3_slot0;
                                var3 = _closure1_slot9;
                                var2 = var3.event;
                                var5 = {};
                                var0 = {};
                                var0.translationX = var7;
                                var0.x = var6;
                                var5.nativeEvent = var0;
                                var0 = new Array(1);
                                var0[0] = var5;
                                var0 = var2.bind(var3)(var0, var4);
                                var1.onGestureEvent = var0;
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.updateAnimatedEvent = var4;
                    var4 = function(arg0) { // Environment: var2
                        var0 = arg0;
                        var3 = var0.nativeEvent;
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = {};
                        var3 = var3.layout;
                        var3 = var3.width;
                        var0.containerWidth = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleContainerLayout = var4;
                    var4 = function(arg0, arg1) { // Environment: var2
                        _fun45218: for (var _fun45218_ip = 0;;) switch (_fun45218_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var2 = var1.onDrawerStateChanged;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun45218_ip = 51;
                                    continue _fun45218
                                }
                            case 24:
                                var0 = _closure3_slot0;
                                var3 = var0.props;
                                var2 = var3.onDrawerStateChanged;
                                var1 = arg0;
                                var0 = arg1;
                                var0 = var2.bind(var3)(var1, var0);
                            case 51:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.emitStateChanged = var4;
                    var4 = function(arg0) { // Environment: var2
                        _fun45219: for (var _fun45219_ip = 0;;) switch (_fun45219_ip) {
                            case 0:
                                var0 = arg0;
                                var4 = var0.nativeEvent;
                                var3 = var4.oldState;
                                var5 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var6 = 8;
                                var1 = var0[var6];
                                var0 = undefined;
                                var1 = var5.bind(var0)(var1);
                                var1 = var1.State;
                                var1 = var1.ACTIVE;
                                if (!(var3 !== var1)) {
                                    _fun45219_ip = 242;
                                    continue _fun45219
                                }
                            case 59:
                                var3 = var4.state;
                                var5 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var6];
                                var1 = var5.bind(var0)(var1);
                                var1 = var1.State;
                                var1 = var1.ACTIVE;
                                if (!(var3 === var1)) {
                                    _fun45219_ip = 267;
                                    continue _fun45219
                                }
                            case 100:
                                var3 = _closure3_slot0;
                                var6 = var3.emitStateChanged;
                                var7 = 'Dragging';
                                var5 = false;
                                var5 = var6.bind(var3)(var7, var5);
                                var6 = var3.setState;
                                var5 = {};
                                var5.drawerState = var7;
                                var5 = var6.bind(var3)(var5);
                                var3 = var3.props;
                                var5 = var3.keyboardDismissMode;
                                var3 = 'on-drag';
                                if (!(var3 === var5)) {
                                    _fun45219_ip = 180;
                                    continue _fun45219
                                }
                            case 166:
                                var5 = _closure1_slot11;
                                var3 = var5.dismiss;
                                var3 = var3.bind(var5)();
                            case 180:
                                var3 = _closure3_slot0;
                                var3 = var3.props;
                                var3 = var3.hideStatusBar;
                                if (!var3) {
                                    _fun45219_ip = 267;
                                    continue _fun45219
                                }
                            case 198:
                                var5 = _closure1_slot12;
                                var3 = var5.setHidden;
                                var1 = _closure3_slot0;
                                var1 = var1.props;
                                var2 = var1.statusBarAnimation;
                                if (var2) {
                                    _fun45219_ip = 232;
                                    continue _fun45219
                                }
                            case 226:
                                var2 = 'slide';
                            case 232:
                                var1 = true;
                                var1 = var3.bind(var5)(var1, var2);
                                _fun45219_ip = 267;
                                continue _fun45219;
                            case 242:
                                var3 = _closure3_slot0;
                                var2 = var3.handleRelease;
                                var1 = {};
                                var1.nativeEvent = var4;
                                var1 = var2.bind(var3)(var1);
                            case 267:
                                return var0;
                        }
                    };
                    var0.openingHandlerStateChange = var4;
                    var4 = function(arg0) { // Environment: var2
                        _fun45220: for (var _fun45220_ip = 0;;) switch (_fun45220_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.nativeEvent;
                                var1 = _closure3_slot0;
                                var1 = var1.drawerShown;
                                if (!var1) {
                                    _fun45220_ip = 72;
                                    continue _fun45220
                                }
                            case 25:
                                var3 = var2.oldState;
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 8;
                                var4 = var4[var2];
                                var2 = undefined;
                                var2 = var5.bind(var2)(var4);
                                var2 = var2.State;
                                var2 = var2.ACTIVE;
                                var1 = var3 === var2;
                            case 72:
                                if (!var1) {
                                    _fun45220_ip = 100;
                                    continue _fun45220
                                }
                            case 75:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var3 = var2.drawerLockMode;
                                var2 = 'locked-open';
                                var1 = var2 !== var3;
                            case 100:
                                if (!var1) {
                                    _fun45220_ip = 117;
                                    continue _fun45220
                                }
                            case 103:
                                var1 = _closure3_slot0;
                                var0 = var1.closeDrawer;
                                var0 = var0.bind(var1)();
                            case 117:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onTapHandlerStateChange = var4;
                    var4 = function(arg0) { // Environment: var2
                        _fun45221: for (var _fun45221_ip = 0;;) switch (_fun45221_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.nativeEvent;
                                var2 = _closure3_slot0;
                                var3 = var2.props;
                                var4 = var3.drawerWidth;
                                var11 = var3.drawerPosition;
                                var8 = var3.drawerType;
                                var2 = var2.state;
                                var9 = var2.containerWidth;
                                var7 = var1.translationX;
                                var6 = var1.velocityX;
                                var5 = var1.x;
                                var10 = 'left';
                                var2 = var7;
                                var3 = var6;
                                var1 = var5;
                                if (!(var10 !== var11)) {
                                    _fun45221_ip = 94;
                                    continue _fun45221
                                }
                            case 84:
                                var2 = -var7;
                                var1 = var9 - var5;
                                var3 = -var6;
                            case 94:
                                var7 = var1 - var2;
                                var6 = 0;
                                var5 = 'front';
                                var1 = 0;
                                if (!(var5 === var8)) {
                                    _fun45221_ip = 128;
                                    continue _fun45221
                                }
                            case 112:
                                var8 = var7 > var4;
                                var5 = 0;
                                if (!var8) {
                                    _fun45221_ip = 125;
                                    continue _fun45221
                                }
                            case 121:
                                var5 = var7 - var4;
                            case 125:
                                var1 = var5;
                            case 128:
                                var2 = var2 + var1;
                                var1 = _closure3_slot0;
                                var5 = var1.drawerShown;
                                var1 = 0;
                                if (!var5) {
                                    _fun45221_ip = 150;
                                    continue _fun45221
                                }
                            case 147:
                                var1 = var4;
                            case 150:
                                var2 = var2 + var1;
                                var1 = 0.05;
                                var1 = var1 * var3;
                                var5 = var2 + var1;
                                var1 = 2;
                                var1 = var4 / var1;
                                if (!(!(var5 > var1))) {
                                    _fun45221_ip = 202;
                                    continue _fun45221
                                }
                            case 183:
                                var5 = _closure3_slot0;
                                var1 = var5.animateDrawer;
                                var1 = var1.bind(var5)(var2, var6, var3);
                                _fun45221_ip = 219;
                                continue _fun45221;
                            case 202:
                                var1 = _closure3_slot0;
                                var0 = var1.animateDrawer;
                                var0 = var0.bind(var1)(var2, var4, var3);
                            case 219:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleRelease = var4;
                    var4 = function(arg0) { // Environment: var2
                        _fun45222: for (var _fun45222_ip = 0;;) switch (_fun45222_ip) {
                            case 0:
                                var9 = arg0;
                                var0 = _closure3_slot0;
                                var0.drawerShown = var9;
                                var0 = var0.accessibilityIsModalView;
                                var4 = var0.current;
                                var0 = null;
                                if (!(var0 != var4)) {
                                    _fun45222_ip = 51;
                                    continue _fun45222
                                }
                            case 33:
                                var3 = var4.setNativeProps;
                                var2 = {};
                                var2.accessibilityViewIsModal = var9;
                                var2 = var3.bind(var4)(var2);
                            case 51:
                                var2 = _closure3_slot0;
                                var2 = var2.pointerEventsView;
                                var4 = var2.current;
                                if (!(var0 != var4)) {
                                    _fun45222_ip = 99;
                                    continue _fun45222
                                }
                            case 70:
                                var3 = var4.setNativeProps;
                                var2 = {};
                                var5 = 'none';
                                if (!var9) {
                                    _fun45222_ip = 89;
                                    continue _fun45222
                                }
                            case 85:
                                var5 = 'auto';
                            case 89:
                                var2.pointerEvents = var5;
                                var2 = var3.bind(var4)(var2);
                            case 99:
                                var2 = _closure3_slot0;
                                var2 = var2.props;
                                var3 = var2.drawerPosition;
                                var4 = var2.minSwipeDistance;
                                var8 = var2.edgeWidth;
                                var2 = 'left';
                                var6 = var2 === var3;
                                var2 = -1;
                                var5 = var2;
                                if (!var6) {
                                    _fun45222_ip = 149;
                                    continue _fun45222
                                }
                            case 146:
                                var5 = 1;
                            case 149:
                                var3 = _closure3_slot0;
                                var7 = var3.drawerShown;
                                var3 = 1;
                                if (!var7) {
                                    _fun45222_ip = 168;
                                    continue _fun45222
                                }
                            case 165:
                                var3 = var2;
                            case 168:
                                var2 = {};
                                var7 = 0;
                                if (var6) {
                                    _fun45222_ip = 196;
                                    continue _fun45222
                                }
                            case 175:
                                var2.right = var7;
                                var6 = undefined;
                                if (var9) {
                                    _fun45222_ip = 187;
                                    continue _fun45222
                                }
                            case 184:
                                var6 = var8;
                            case 187:
                                var2.width = var6;
                                var6 = var2;
                                _fun45222_ip = 215;
                                continue _fun45222;
                            case 196:
                                var2.left = var7;
                                var7 = undefined;
                                if (var9) {
                                    _fun45222_ip = 208;
                                    continue _fun45222
                                }
                            case 205:
                                var7 = var8;
                            case 208:
                                var2.width = var7;
                                var6 = var2;
                            case 215:
                                var1 = _closure3_slot0;
                                var1 = var1.panGestureHandler;
                                var2 = var1.current;
                                if (!(var0 != var2)) {
                                    _fun45222_ip = 265;
                                    continue _fun45222
                                }
                            case 234:
                                var1 = var2.setNativeProps;
                                var0 = {};
                                var0.hitSlop = var6;
                                var3 = var5 * var3;
                                var3 = var3 * var4;
                                var0.activeOffsetX = var3;
                                var0 = var1.bind(var2)(var0);
                            case 265:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.updateShowing = var4;
                    var4 = function(arg0, arg1, arg2, arg3) { // Environment: var2
                        _fun45223: for (var _fun45223_ip = 0;;) switch (_fun45223_ip) {
                            case 0:
                                var12 = arg0;
                                var8 = arg1;
                                var10 = arg2;
                                var7 = arg3;
                                var0 = _closure3_slot0;
                                var3 = var0.state;
                                var4 = var3.dragX;
                                var3 = var4.setValue;
                                var9 = 0;
                                var3 = var3.bind(var4)(var9);
                                var3 = var0.state;
                                var4 = var3.touchX;
                                var3 = var4.setValue;
                                var0 = var0.props;
                                var6 = var0.drawerPosition;
                                var5 = 'left';
                                var0 = 0;
                                if (!(var5 !== var6)) {
                                    _fun45223_ip = 98;
                                    continue _fun45223
                                }
                            case 83:
                                var5 = _closure3_slot0;
                                var5 = var5.state;
                                var0 = var5.containerWidth;
                            case 98:
                                var0 = var3.bind(var4)(var0);
                                var0 = null;
                                if (!(var0 != var12)) {
                                    _fun45223_ip = 249;
                                    continue _fun45223
                                }
                            case 112:
                                var3 = _closure3_slot0;
                                var3 = var3.props;
                                var3 = var3.useNativeAnimations;
                                var5 = var12;
                                if (!var3) {
                                    _fun45223_ip = 223;
                                    continue _fun45223
                                }
                            case 133:
                                if (!(var12 < var8)) {
                                    _fun45223_ip = 141;
                                    continue _fun45223
                                }
                            case 137:
                                if (!(!(var10 > var9))) {
                                    _fun45223_ip = 190;
                                    continue _fun45223
                                }
                            case 141:
                                var4 = var12 > var8;
                                if (!var4) {
                                    _fun45223_ip = 152;
                                    continue _fun45223
                                }
                            case 148:
                                var4 = var10 < var9;
                            case 152:
                                var3 = var12;
                                if (!var4) {
                                    _fun45223_ip = 188;
                                    continue _fun45223
                                }
                            case 158:
                                var4 = global;
                                var11 = var4.Math;
                                var6 = var11.max;
                                var4 = 60;
                                var4 = var10 / var4;
                                var4 = var12 + var4;
                                var3 = var6.bind(var11)(var4, var8);
                            case 188:
                                _fun45223_ip = 220;
                                continue _fun45223;
                            case 190:
                                var4 = global;
                                var11 = var4.Math;
                                var6 = var11.min;
                                var4 = 60;
                                var4 = var10 / var4;
                                var4 = var12 + var4;
                                var3 = var6.bind(var11)(var4, var8);
                            case 220:
                                var5 = var3;
                            case 223:
                                var3 = _closure3_slot0;
                                var3 = var3.state;
                                var4 = var3.drawerTranslation;
                                var3 = var4.setValue;
                                var3 = var3.bind(var4)(var5);
                            case 249:
                                var6 = var9 !== var8;
                                var _closure4_slot0 = var6;
                                var3 = _closure3_slot0;
                                var4 = var3.updateShowing;
                                var4 = var4.bind(var3)(var6);
                                var4 = var3.emitStateChanged;
                                var11 = 'Settling';
                                var4 = var4.bind(var3)(var11, var6);
                                var5 = var3.setState;
                                var4 = {};
                                var4.drawerState = var11;
                                var4 = var5.bind(var3)(var4);
                                var3 = var3.props;
                                var3 = var3.hideStatusBar;
                                if (!var3) {
                                    _fun45223_ip = 365;
                                    continue _fun45223
                                }
                            case 322:
                                var5 = _closure1_slot12;
                                var4 = var5.setHidden;
                                var3 = _closure3_slot0;
                                var3 = var3.props;
                                var3 = var3.statusBarAnimation;
                                if (var3) {
                                    _fun45223_ip = 359;
                                    continue _fun45223
                                }
                            case 353:
                                var3 = 'slide';
                            case 359:
                                var3 = var4.bind(var5)(var6, var3);
                            case 365:
                                var5 = _closure1_slot9;
                                var4 = var5.spring;
                                var6 = _closure3_slot0;
                                var2 = var6.state;
                                var3 = var2.drawerTranslation;
                                var2 = {};
                                var2.velocity = var10;
                                var2.bounciness = var9;
                                var2.toValue = var8;
                                var6 = var6.props;
                                var6 = var6.useNativeAnimations;
                                var2.useNativeDriver = var6;
                                var8 = var0 != var7;
                                var0 = undefined;
                                var6 = undefined;
                                if (!var8) {
                                    _fun45223_ip = 440;
                                    continue _fun45223
                                }
                            case 437:
                                var6 = var7;
                            case 440:
                                var2.speed = var6;
                                var3 = var4.bind(var5)(var3, var2);
                                var2 = var3.start;
                                var1 = function(arg0) { // Environment: var1
                                    _fun45224: for (var _fun45224_ip = 0;;) switch (_fun45224_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var0 = var0.finished;
                                            if (!var0) {
                                                _fun45224_ip = 192;
                                                continue _fun45224
                                            }
                                        case 15:
                                            var2 = _closure3_slot0;
                                            var4 = var2.emitStateChanged;
                                            var3 = _closure4_slot0;
                                            var5 = 'Idle';
                                            var3 = var4.bind(var2)(var5, var3);
                                            var4 = var2.setState;
                                            var3 = {};
                                            var6 = _closure4_slot0;
                                            var3.drawerOpened = var6;
                                            var3 = var4.bind(var2)(var3);
                                            var2 = var2.state;
                                            var3 = var2.drawerState;
                                            var2 = 'Dragging';
                                            if (!(var3 !== var2)) {
                                                _fun45224_ip = 112;
                                                continue _fun45224
                                            }
                                        case 90:
                                            var4 = _closure3_slot0;
                                            var3 = var4.setState;
                                            var2 = {};
                                            var2.drawerState = var5;
                                            var2 = var3.bind(var4)(var2);
                                        case 112:
                                            var2 = _closure4_slot0;
                                            var1 = _closure3_slot0;
                                            var1 = var1.props;
                                            if (var2) {
                                                _fun45224_ip = 161;
                                                continue _fun45224
                                            }
                                        case 128:
                                            var3 = var1.onDrawerClose;
                                            var2 = null;
                                            if (!(var2 != var3)) {
                                                _fun45224_ip = 192;
                                                continue _fun45224
                                            }
                                        case 140:
                                            var2 = _closure3_slot0;
                                            var3 = var2.props;
                                            var2 = var3.onDrawerClose;
                                            var2 = var2.bind(var3)();
                                            _fun45224_ip = 192;
                                            continue _fun45224;
                                        case 161:
                                            var2 = var1.onDrawerOpen;
                                            var1 = null;
                                            if (!(var1 != var2)) {
                                                _fun45224_ip = 192;
                                                continue _fun45224
                                            }
                                        case 173:
                                            var0 = _closure3_slot0;
                                            var1 = var0.props;
                                            var0 = var1.onDrawerOpen;
                                            var0 = var0.bind(var1)();
                                        case 192:
                                            var0 = undefined;
                                            return var0;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                return var0;
                        }
                    };
                    var0.animateDrawer = var4;
                    var4 = function() { // Environment: var2
                        _fun45225: for (var _fun45225_ip = 0;;) switch (_fun45225_ip) {
                            case 0:
                                var0 = undefined;
                                var1 = undefined;
                                var2 = arguments.length;
                                var6 = 0;
                                if (!(var2 > var6)) {
                                    _fun45225_ip = 21;
                                    continue _fun45225
                                }
                            case 13:
                                var2 = arguments[var6];
                                if (!(var0 === var2)) {
                                    _fun45225_ip = 25;
                                    continue _fun45225
                                }
                            case 21:
                                var2 = {};
                                _fun45225_ip = 29;
                                continue _fun45225;
                            case 25:
                                var2 = arguments[var6];
                            case 29:
                                var5 = _closure3_slot0;
                                var4 = var5.animateDrawer;
                                var3 = var5.props;
                                var3 = var3.drawerWidth;
                                var7 = var2.velocity;
                                var6 = 0;
                                if (!var7) {
                                    _fun45225_ip = 70;
                                    continue _fun45225
                                }
                            case 64:
                                var6 = var2.velocity;
                            case 70:
                                var8 = var2.speed;
                                var12 = var5;
                                var11 = undefined;
                                var10 = var3;
                                var9 = var6;
                                var2 = var12[var4](var11, var10, var9, var8, var7);
                                var2 = _closure3_slot0;
                                var1 = var2.forceUpdate;
                                var1 = var1.bind(var2)();
                                return var0;
                        }
                    };
                    var0.openDrawer = var4;
                    var4 = function() { // Environment: var2
                        _fun45226: for (var _fun45226_ip = 0;;) switch (_fun45226_ip) {
                            case 0:
                                var0 = undefined;
                                var1 = undefined;
                                var2 = arguments.length;
                                var6 = 0;
                                if (!(var2 > var6)) {
                                    _fun45226_ip = 21;
                                    continue _fun45226
                                }
                            case 13:
                                var2 = arguments[var6];
                                if (!(var0 === var2)) {
                                    _fun45226_ip = 25;
                                    continue _fun45226
                                }
                            case 21:
                                var2 = {};
                                _fun45226_ip = 29;
                                continue _fun45226;
                            case 25:
                                var2 = arguments[var6];
                            case 29:
                                var5 = _closure3_slot0;
                                var4 = var5.animateDrawer;
                                var7 = var2.velocity;
                                var3 = 0;
                                if (!var7) {
                                    _fun45226_ip = 59;
                                    continue _fun45226
                                }
                            case 53:
                                var3 = var2.velocity;
                            case 59:
                                var8 = var2.speed;
                                var12 = var5;
                                var11 = undefined;
                                var10 = 0;
                                var9 = var3;
                                var2 = var12[var4](var11, var10, var9, var8, var7);
                                var2 = _closure3_slot0;
                                var1 = var2.forceUpdate;
                                var1 = var1.bind(var2)();
                                return var0;
                        }
                    };
                    var0.closeDrawer = var4;
                    var4 = function() { // Environment: var2
                        _fun45227: for (var _fun45227_ip = 0;;) switch (_fun45227_ip) {
                            case 0:
                                var1 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 9;
                                var0 = var2[var0];
                                var3 = undefined;
                                var4 = var1.bind(var3)(var0);
                                var0 = _closure3_slot0;
                                var2 = var0.openValue;
                                var1 = 'should be set';
                                var1 = var4.bind(var3)(var2, var1);
                                var7 = {};
                                var0 = var0.state;
                                var1 = var0.drawerState;
                                var0 = 'Idle';
                                if (!(var1 === var0)) {
                                    _fun45227_ip = 98;
                                    continue _fun45227
                                }
                            case 73:
                                var0 = _closure3_slot0;
                                var0 = var0.state;
                                var1 = var0.drawerOpened;
                                var0 = 0;
                                if (!var1) {
                                    _fun45227_ip = 96;
                                    continue _fun45227
                                }
                            case 93:
                                var0 = 1;
                            case 96:
                                _fun45227_ip = 108;
                                continue _fun45227;
                            case 98:
                                var1 = _closure3_slot0;
                                var0 = var1.openValue;
                            case 108:
                                var7.opacity = var0;
                                var9 = _closure3_slot0;
                                var0 = var9.props;
                                var0 = var0.overlayColor;
                                var7.backgroundColor = var0;
                                var2 = _closure1_slot14;
                                var1 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 10;
                                var0 = var4[var0];
                                var0 = var1.bind(var3)(var0);
                                var1 = var0.TapGestureHandler;
                                var0 = {};
                                var4 = var9.onTapHandlerStateChange;
                                var0.onHandlerStateChange = var4;
                                var4 = _closure1_slot9;
                                var5 = var4.View;
                                var4 = {};
                                var10 = var9.drawerShown;
                                var9 = 'none';
                                if (!var10) {
                                    _fun45227_ip = 202;
                                    continue _fun45227
                                }
                            case 198:
                                var9 = 'auto';
                            case 202:
                                var4.pointerEvents = var9;
                                var8 = _closure3_slot0;
                                var8 = var8.pointerEventsView;
                                var4.ref = var8;
                                var6 = _closure1_slot16;
                                var8 = var6.overlay;
                                var6 = new Array(2);
                                var6[0] = var8;
                                var6[1] = var7;
                                var4.style = var6;
                                var4 = var2.bind(var3)(var5, var4);
                                var0.children = var4;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                        }
                    };
                    var0.renderOverlay = var4;
                    var4 = function() { // Environment: var2
                        _fun45228: for (var _fun45228_ip = 0;;) switch (_fun45228_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var1 = var0.props;
                                var0 = var1.drawerBackgroundColor;
                                var2 = var1.drawerWidth;
                                var3 = var1.drawerPosition;
                                var14 = var1.drawerType;
                                var12 = var1.drawerContainerStyle;
                                var9 = var1.contentContainerStyle;
                                var1 = 'left';
                                var4 = var1 === var3;
                                var1 = _closure1_slot13;
                                var3 = var1.isRTL;
                                var1 = var4;
                                if (var3) {
                                    _fun45228_ip = 80;
                                    continue _fun45228
                                }
                            case 77:
                                var1 = !var4;
                            case 80:
                                var11 = {};
                                var11.backgroundColor = var0;
                                var11.width = var2;
                                var0 = _closure3_slot0;
                                var13 = var0.openValue;
                                var5 = _closure1_slot1;
                                var3 = _closure1_slot2;
                                var0 = 9;
                                var0 = var3[var0];
                                var3 = undefined;
                                var5 = var5.bind(var3)(var0);
                                var0 = 'should be set';
                                var0 = var5.bind(var3)(var13, var0);
                                var6 = 'front';
                                var10 = undefined;
                                if (!(var6 !== var14)) {
                                    _fun45228_ip = 244;
                                    continue _fun45228
                                }
                            case 146:
                                var0 = {};
                                var15 = {};
                                var16 = var13.interpolate;
                                var5 = {};
                                var17 = [0, 1];
                                var5.inputRange = var17;
                                var18 = [0];
                                if (var4) {
                                    _fun45228_ip = 198;
                                    continue _fun45228
                                }
                            case 186:
                                var17 = -var2;
                                var18[1] = var17;
                                var17 = var18;
                                _fun45228_ip = 205;
                                continue _fun45228;
                            case 198:
                                var18[1] = var2;
                                var17 = var18;
                            case 205:
                                var5.outputRange = var17;
                                var17 = 'clamp';
                                var5.extrapolate = var17;
                                var5 = var16.bind(var13)(var5);
                                var15.translateX = var5;
                                var5 = new Array(1);
                                var5[0] = var15;
                                var0.transform = var5;
                                var10 = var0;
                            case 244:
                                var16 = 0;
                                var5 = 'back';
                                var0 = 0;
                                if (!(var5 !== var14)) {
                                    _fun45228_ip = 372;
                                    continue _fun45228
                                }
                            case 256:
                                var17 = var2;
                                if (!var4) {
                                    _fun45228_ip = 265;
                                    continue _fun45228
                                }
                            case 262:
                                var17 = -var2;
                            case 265:
                                var2 = _closure3_slot0;
                                var2 = var2.state;
                                var4 = var2.drawerState;
                                var2 = 'Idle';
                                if (!(var4 === var2)) {
                                    _fun45228_ip = 315;
                                    continue _fun45228
                                }
                            case 290:
                                var2 = _closure3_slot0;
                                var2 = var2.state;
                                var4 = var2.drawerOpened;
                                var2 = 0;
                                if (var4) {
                                    _fun45228_ip = 313;
                                    continue _fun45228
                                }
                            case 310:
                                var2 = var17;
                            case 313:
                                _fun45228_ip = 369;
                                continue _fun45228;
                            case 315:
                                var5 = var13.interpolate;
                                var4 = {};
                                var15 = [0, 1];
                                var4.inputRange = var15;
                                var15 = new Array(2);
                                var15[0] = var17;
                                var15[1] = var16;
                                var4.outputRange = var15;
                                var15 = 'clamp';
                                var4.extrapolate = var15;
                                var2 = var5.bind(var13)(var4);
                            case 369:
                                var0 = var2;
                            case 372:
                                var13 = {};
                                var2 = {};
                                var2.translateX = var0;
                                var0 = new Array(1);
                                var0[0] = var2;
                                var13.transform = var0;
                                var0 = 'row';
                                if (!var1) {
                                    _fun45228_ip = 406;
                                    continue _fun45228
                                }
                            case 400:
                                var0 = 'row-reverse';
                            case 406:
                                var13.flexDirection = var0;
                                var2 = _closure1_slot15;
                                var4 = _closure1_slot9;
                                var1 = var4.View;
                                var0 = {};
                                var5 = _closure1_slot16;
                                var5 = var5.main;
                                var0.style = var5;
                                var5 = _closure3_slot0;
                                var5 = var5.handleContainerLayout;
                                var0.onLayout = var5;
                                var5 = var4.View;
                                var4 = {};
                                if (!(var6 !== var14)) {
                                    _fun45228_ip = 477;
                                    continue _fun45228
                                }
                            case 465:
                                var6 = _closure1_slot16;
                                var14 = var6.containerInFront;
                                _fun45228_ip = 487;
                                continue _fun45228;
                            case 477:
                                var6 = _closure1_slot16;
                                var14 = var6.containerOnBack;
                            case 487:
                                var6 = new Array(3);
                                var6[0] = var14;
                                var6[1] = var10;
                                var6[2] = var9;
                                var4.style = var6;
                                var6 = _closure3_slot0;
                                var9 = var6.drawerShown;
                                var6 = 'yes';
                                if (!var9) {
                                    _fun45228_ip = 532;
                                    continue _fun45228
                                }
                            case 526:
                                var6 = 'no-hide-descendants';
                            case 532:
                                var4.importantForAccessibility = var6;
                                var6 = _closure3_slot0;
                                var6 = var6.props;
                                var6 = var6.children;
                                var9 = 'function';
                                var6 = typeof var6;
                                if (!(var9 !== var6)) {
                                    _fun45228_ip = 578;
                                    continue _fun45228
                                }
                            case 562:
                                var6 = _closure3_slot0;
                                var6 = var6.props;
                                var9 = var6.children;
                                _fun45228_ip = 603;
                                continue _fun45228;
                            case 578:
                                var6 = _closure3_slot0;
                                var14 = var6.props;
                                var10 = var14.children;
                                var6 = var6.openValue;
                                var9 = var10.bind(var14)(var6);
                            case 603:
                                var6 = new Array(2);
                                var6[0] = var9;
                                var10 = _closure3_slot0;
                                var7 = var10.renderOverlay;
                                var7 = var7.bind(var10)();
                                var6[1] = var7;
                                var4.children = var6;
                                var5 = var2.bind(var3)(var5, var4);
                                var4 = new Array(2);
                                var4[0] = var5;
                                var7 = _closure1_slot14;
                                var5 = _closure1_slot9;
                                var6 = var5.View;
                                var5 = {};
                                var9 = 'box-none';
                                var5.pointerEvents = var9;
                                var9 = var10.accessibilityIsModalView;
                                var5.ref = var9;
                                var9 = var10.drawerShown;
                                var5.accessibilityViewIsModal = var9;
                                var9 = _closure1_slot16;
                                var14 = var9.drawerContainer;
                                var9 = new Array(3);
                                var9[0] = var14;
                                var9[1] = var13;
                                var9[2] = var12;
                                var5.style = var9;
                                var9 = _closure1_slot10;
                                var8 = {};
                                var8.style = var11;
                                var12 = var10.props;
                                var11 = var12.renderNavigationView;
                                var10 = var10.openValue;
                                var10 = var11.bind(var12)(var10);
                                var8.children = var10;
                                var8 = var7.bind(var3)(var9, var8);
                                var5.children = var8;
                                var5 = var7.bind(var3)(var6, var5);
                                var4[1] = var5;
                                var0.children = var4;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                        }
                    };
                    var0.renderDrawer = var4;
                    var2 = function(arg0) { // Environment: var2
                        _fun45229: for (var _fun45229_ip = 0;;) switch (_fun45229_ip) {
                            case 0:
                                var2 = arg0;
                                var1 = _closure3_slot0;
                                var3 = var1.panGestureHandler;
                                var3.current = var2;
                                var1 = var1.props;
                                var3 = var1.onGestureRef;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun45229_ip = 59;
                                    continue _fun45229
                                }
                            case 39:
                                var0 = _closure3_slot0;
                                var1 = var0.props;
                                var0 = var1.onGestureRef;
                                var0 = var0.bind(var1)(var2);
                            case 59:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.setPanGestureRef = var2;
                    var1 = _closure1_slot9;
                    var2 = var1.Value;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var2
                        }
                    });
                    var15 = var4;
                    var14 = 0;
                    var2 = new var15[var2](var14, var13);
                    var5 = var2 instanceof Object ? var2 : var4;
                    var2 = var1.Value;
                    var4 = var2.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var2
                        }
                    });
                    var15 = var4;
                    var2 = new var15[var2](var14, var13);
                    var4 = var2 instanceof Object ? var2 : var4;
                    var1 = var1.Value;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var15 = var2;
                    var1 = new var15[var1](var14, var13);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = {
                        'dragX': null,
                        'touchX': null,
                        'drawerTranslation': null,
                        'containerWidth': 0,
                        'drawerState': 'Idle',
                        'drawerOpened': false
                    };
                    var1.dragX = var5;
                    var1.touchX = var4;
                    var1.drawerTranslation = var2;
                    var0.state = var1;
                    var2 = var0.updateAnimatedEvent;
                    var1 = var0.state;
                    var1 = var2.bind(var0)(var3, var1);
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
        var0 = 'shouldComponentUpdate';
        var4.key = var0;
        var0 = function(arg0, arg1) { // Original name: shouldComponentUpdate, environment: var5
            _fun45230: for (var _fun45230_ip = 0;;) switch (_fun45230_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var0 = var1.props;
                    var4 = var0.drawerPosition;
                    var0 = var3.drawerPosition;
                    var0 = var4 === var0;
                    if (!var0) {
                        _fun45230_ip = 54;
                        continue _fun45230
                    }
                case 33:
                    var4 = var1.props;
                    var5 = var4.drawerWidth;
                    var4 = var3.drawerWidth;
                    var0 = var5 === var4;
                case 54:
                    if (!var0) {
                        _fun45230_ip = 78;
                        continue _fun45230
                    }
                case 57:
                    var4 = var1.props;
                    var5 = var4.drawerType;
                    var4 = var3.drawerType;
                    var0 = var5 === var4;
                case 78:
                    if (!var0) {
                        _fun45230_ip = 102;
                        continue _fun45230
                    }
                case 81:
                    var4 = var1.state;
                    var5 = var4.containerWidth;
                    var4 = var2.containerWidth;
                    var0 = var5 === var4;
                case 102:
                    if (var0) {
                        _fun45230_ip = 117;
                        continue _fun45230
                    }
                case 105:
                    var0 = var1.updateAnimatedEvent;
                    var0 = var0.bind(var1)(var3, var2);
                case 117:
                    var0 = true;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() { // Original name: render, environment: var5
            _fun45231: for (var _fun45231_ip = 0;;) switch (_fun45231_ip) {
                case 0:
                    var5 = this;
                    var0 = var5.props;
                    var1 = var0.drawerPosition;
                    var7 = var0.drawerLockMode;
                    var2 = var0.edgeWidth;
                    var6 = var0.minSwipeDistance;
                    var0 = 'left';
                    var3 = var0 === var1;
                    var0 = -1;
                    var8 = var0;
                    if (!var3) {
                        _fun45231_ip = 55;
                        continue _fun45231
                    }
                case 52:
                    var8 = 1;
                case 55:
                    var1 = var5.drawerShown;
                    var4 = 1;
                    if (!var1) {
                        _fun45231_ip = 70;
                        continue _fun45231
                    }
                case 67:
                    var4 = var0;
                case 70:
                    var0 = {};
                    var1 = 0;
                    if (var3) {
                        _fun45231_ip = 104;
                        continue _fun45231
                    }
                case 77:
                    var0.right = var1;
                    var9 = var5.drawerShown;
                    var3 = undefined;
                    if (var9) {
                        _fun45231_ip = 95;
                        continue _fun45231
                    }
                case 92:
                    var3 = var2;
                case 95:
                    var0.width = var3;
                    var9 = var0;
                    _fun45231_ip = 129;
                    continue _fun45231;
                case 104:
                    var0.left = var1;
                    var3 = var5.drawerShown;
                    var1 = undefined;
                    if (var3) {
                        _fun45231_ip = 122;
                        continue _fun45231
                    }
                case 119:
                    var1 = var2;
                case 122:
                    var0.width = var1;
                    var9 = var0;
                case 129:
                    var3 = _closure1_slot14;
                    var1 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 11;
                    var0 = var2[var0];
                    var2 = undefined;
                    var0 = var1.bind(var2)(var0);
                    var1 = var0.PanGestureHandler;
                    var0 = {};
                    var10 = var5.props;
                    var10 = var10.userSelect;
                    var0.userSelect = var10;
                    var10 = var5.props;
                    var10 = var10.activeCursor;
                    var0.activeCursor = var10;
                    var10 = var5.props;
                    var10 = var10.mouseButton;
                    var0.mouseButton = var10;
                    var10 = var5.props;
                    var10 = var10.enableContextMenu;
                    var0.enableContextMenu = var10;
                    var10 = var5.setPanGestureRef;
                    var0.ref = var10;
                    var0.hitSlop = var9;
                    var4 = var8 * var4;
                    var4 = var4 * var6;
                    var0.activeOffsetX = var4;
                    var4 = new Array(2);
                    var6 = -15;
                    var4[0] = var6;
                    var6 = 15;
                    var4[1] = var6;
                    var0.failOffsetY = var4;
                    var4 = var5.onGestureEvent;
                    var0.onGestureEvent = var4;
                    var4 = var5.openingHandlerStateChange;
                    var0.onHandlerStateChange = var4;
                    var4 = var5.props;
                    var4 = var4.enableTrackpadTwoFingerGesture;
                    var0.enableTrackpadTwoFingerGesture = var4;
                    var4 = 'locked-closed';
                    var4 = var4 !== var7;
                    if (!var4) {
                        _fun45231_ip = 345;
                        continue _fun45231
                    }
                case 335:
                    var6 = 'locked-open';
                    var4 = var6 !== var7;
                case 345:
                    var0.enabled = var4;
                    var4 = var5.renderDrawer;
                    var4 = var4.bind(var5)();
                    var0.children = var4;
                    var0 = var3.bind(var2)(var1, var0);
                    return var0;
            }
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = {
        'drawerWidth': 200,
        'drawerPosition': 'left',
        'useNativeAnimations': true,
        'drawerType': 'front',
        'edgeWidth': 20,
        'minSwipeDistance': 3,
        'overlayColor': 'rgba(0, 0, 0, 0.7)',
        'drawerLockMode': 'unlocked',
        'enableTrackpadTwoFingerGesture': false
    };
    var1.defaultProps = var3;
    var3 = {
        'Left': 'left',
        'Right': 'right'
    };
    var1.positions = var3;
    var5 = var6.create;
    var3 = {};
    var12 = var7.Object;
    var11 = var12.assign;
    var10 = var6.absoluteFillObject;
    var9 = {};
    var8 = {
        'zIndex': 1001,
        'flexDirection': 'row'
    };
    var8 = var11.bind(var12)(var9, var10, var8);
    var3.drawerContainer = var8;
    var12 = var7.Object;
    var11 = var12.assign;
    var10 = var6.absoluteFillObject;
    var9 = {};
    var8 = 1002;
    var9.zIndex = var8;
    var8 = {};
    var8 = var11.bind(var12)(var8, var10, var9);
    var3.containerInFront = var8;
    var11 = var7.Object;
    var10 = var11.assign;
    var9 = var6.absoluteFillObject;
    var8 = {};
    var8 = var10.bind(var11)(var8, var9);
    var3.containerOnBack = var8;
    var8 = {
        'flex': 1,
        'zIndex': 0,
        'overflow': 'hidden'
    };
    var3.main = var8;
    var11 = var7.Object;
    var10 = var11.assign;
    var9 = var6.absoluteFillObject;
    var8 = {};
    var7 = 1000;
    var8.zIndex = var7;
    var7 = {};
    var7 = var10.bind(var11)(var7, var9, var8);
    var3.overlay = var7;
    var3 = var5.bind(var6)(var3);
    var _closure1_slot16 = var3;
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 33, 4929, 44, 4942, 4954]);