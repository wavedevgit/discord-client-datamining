// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = function() {
        _fun12982: for (var _fun12982_ip = 0;;) switch (_fun12982_ip) {
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
                _fun12982_ip = 74;
                continue _fun12982;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var4 = var6[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var4);
    var _closure1_slot7 = var3;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var7 = var4.Animated;
    var _closure1_slot8 = var7;
    var7 = var4.Appearance;
    var _closure1_slot9 = var7;
    var7 = var4.Dimensions;
    var _closure1_slot10 = var7;
    var7 = var4.Easing;
    var _closure1_slot11 = var7;
    var7 = var4.Modal;
    var _closure1_slot12 = var7;
    var7 = var4.PanResponder;
    var _closure1_slot13 = var7;
    var7 = var4.Platform;
    var7 = var4.ScrollView;
    var _closure1_slot14 = var7;
    var4 = var4.View;
    var _closure1_slot15 = var4;
    var4 = 7;
    var4 = var6[var4];
    var5 = var5.bind(var0)(var4);
    var4 = var5.isNativeDriverSupportedForColorAnimations;
    var4 = var4.bind(var5)();
    var _closure1_slot16 = var4;
    var3 = var3.Component;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun12986: for (var _fun12986_ip = 0;;) switch (_fun12986_ip) {
                case 0:
                    var5 = this;
                    var0 = _closure1_slot2;
                    var4 = _closure2_slot0;
                    var3 = undefined;
                    var0 = var0.bind(var3)(var5, var4);
                    var10 = new Array(1);
                    var0 = arg0;
                    var10[0] = var0;
                    var0 = _closure1_slot5;
                    var9 = var0.bind(var3)(var4);
                    var4 = _closure1_slot4;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun12986_ip = 75;
                        continue _fun12986
                    }
                case 62:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun12986_ip = 109;
                    continue _fun12986;
                case 75:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot5;
                    var6 = var6.bind(var3)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 109:
                    var0 = var4.bind(var3)(var5, var0);
                    var _closure3_slot0 = var0;
                    var4 = {
                        'isButtonVisible': false,
                        'isScreenshotButtonVisible': false,
                        'isVisible': false,
                        'backgroundOpacity': null,
                        'panY': null,
                        'isScrollAtTop': true
                    };
                    var5 = _closure1_slot8;
                    var8 = var5.Value;
                    var6 = var8.prototype;
                    var7 = Object.create(var6, {
                        constructor: {
                            value: var8
                        }
                    });
                    var13 = 0;
                    var14 = var7;
                    var6 = new var14[var8](var13, var12);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var4.backgroundOpacity = var6;
                    var7 = var5.Value;
                    var8 = _closure1_slot10;
                    var6 = var8.get;
                    var5 = 'screen';
                    var5 = var6.bind(var8)(var5);
                    var13 = var5.height;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var14 = var6;
                    var5 = new var14[var7](var13, var12);
                    var5 = var5 instanceof Object ? var5 : var6;
                    var4.panY = var5;
                    var0.state = var4;
                    var6 = _closure1_slot13;
                    var5 = var6.create;
                    var4 = {};
                    var7 = function arg0, arg1() {
                        _fun12987: for (var _fun12987_ip = 0;;) switch (_fun12987_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 8;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.notWeb;
                                var0 = var0.bind(var1)();
                                if (!var0) {
                                    _fun12987_ip = 56;
                                    continue _fun12987
                                }
                            case 38:
                                var1 = _closure3_slot0;
                                var1 = var1.state;
                                var0 = var1.isScrollAtTop;
                            case 56:
                                if (!var0) {
                                    _fun12987_ip = 74;
                                    continue _fun12987
                                }
                            case 59:
                                var1 = arg1;
                                var2 = var1.dy;
                                var1 = 0;
                                var0 = var2 > var1;
                            case 74:
                                return var0;
                        }
                    };
                    var4.onStartShouldSetPanResponder = var7;
                    var7 = function arg0, arg1() {
                        _fun12988: for (var _fun12988_ip = 0;;) switch (_fun12988_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 8;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.notWeb;
                                var0 = var0.bind(var1)();
                                if (!var0) {
                                    _fun12988_ip = 56;
                                    continue _fun12988
                                }
                            case 38:
                                var1 = _closure3_slot0;
                                var1 = var1.state;
                                var0 = var1.isScrollAtTop;
                            case 56:
                                if (!var0) {
                                    _fun12988_ip = 74;
                                    continue _fun12988
                                }
                            case 59:
                                var1 = arg1;
                                var2 = var1.dy;
                                var1 = 0;
                                var0 = var2 > var1;
                            case 74:
                                return var0;
                        }
                    };
                    var4.onMoveShouldSetPanResponder = var7;
                    var7 = function arg0, arg1() {
                        _fun12989: for (var _fun12989_ip = 0;;) switch (_fun12989_ip) {
                            case 0:
                                var0 = arg1;
                                var2 = var0.dy;
                                var1 = 0;
                                if (!(var2 > var1)) {
                                    _fun12989_ip = 50;
                                    continue _fun12989
                                }
                            case 15:
                                var1 = _closure3_slot0;
                                var1 = var1.state;
                                var2 = var1.panY;
                                var1 = var2.setValue;
                                var0 = var0.dy;
                                var0 = var1.bind(var2)(var0);
                            case 50:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4.onPanResponderMove = var7;
                    var7 = function arg0, arg1() {
                        _fun12990: for (var _fun12990_ip = 0;;) switch (_fun12990_ip) {
                            case 0:
                                var0 = arg1;
                                var2 = var0.dy;
                                var3 = _closure1_slot0;
                                var0 = _closure1_slot1;
                                var7 = 9;
                                var1 = var0[var7];
                                var0 = undefined;
                                var1 = var3.bind(var0)(var1);
                                var1 = var1.PULL_DOWN_CLOSE_THRESHOLD;
                                if (!(!(var2 > var1))) {
                                    _fun12990_ip = 99;
                                    continue _fun12990
                                }
                            case 44:
                                var4 = _closure1_slot8;
                                var3 = var4.spring;
                                var1 = _closure3_slot0;
                                var1 = var1.state;
                                var2 = var1.panY;
                                var1 = {
                                    'toValue': 0,
                                    'useNativeDriver': true
                                };
                                var2 = var3.bind(var4)(var2, var1);
                                var1 = var2.start;
                                var1 = var1.bind(var2)();
                                _fun12990_ip = 214;
                                continue _fun12990;
                            case 99:
                                var4 = _closure1_slot8;
                                var3 = var4.timing;
                                var1 = _closure3_slot0;
                                var1 = var1.state;
                                var2 = var1.panY;
                                var1 = {};
                                var9 = _closure1_slot10;
                                var8 = var9.get;
                                var6 = 'screen';
                                var6 = var8.bind(var9)(var6);
                                var6 = var6.height;
                                var1.toValue = var6;
                                var6 = _closure1_slot0;
                                var5 = _closure1_slot1;
                                var5 = var5[var7];
                                var5 = var6.bind(var0)(var5);
                                var5 = var5.SLIDE_ANIMATION_DURATION;
                                var1.duration = var5;
                                var5 = true;
                                var1.useNativeDriver = var5;
                                var3 = var3.bind(var4)(var2, var1);
                                var2 = var3.start;
                                var1 = function() { // Environment: var1
                                    var1 = _closure3_slot0;
                                    var0 = var1._handleClose;
                                    var0 = var0.bind(var1)();
                                    var0 = undefined;
                                    return var0;
                                };
                                var1 = var2.bind(var3)(var1);
                            case 214:
                                return var0;
                        }
                    };
                    var4.onPanResponderRelease = var7;
                    var4 = var5.bind(var6)(var4);
                    var0._panResponder = var4;
                    var4 = function(arg0) { // Environment: var2
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = {};
                        var3 = arg0;
                        var3 = var3.nativeEvent;
                        var3 = var3.contentOffset;
                        var4 = var3.y;
                        var3 = 0;
                        var3 = var4 <= var3;
                        var0.isScrollAtTop = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0._handleScroll = var4;
                    var4 = function(arg0) { // Environment: var2
                        _fun12993: for (var _fun12993_ip = 0;;) switch (_fun12993_ip) {
                            case 0:
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var1 = function() {
                                    var2 = _closure3_slot0;
                                    var1 = var2.setState;
                                    var0 = {};
                                    var3 = _closure4_slot0;
                                    var0.isVisible = var3;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var _closure4_slot1 = var1;
                                if (var2) {
                                    _fun12993_ip = 278;
                                    continue _fun12993
                                }
                            case 24:
                                var4 = _closure1_slot8;
                                var3 = var4.parallel;
                                var7 = var4.timing;
                                var5 = _closure3_slot0;
                                var2 = var5.state;
                                var6 = var2.panY;
                                var2 = {};
                                var11 = _closure1_slot10;
                                var10 = var11.get;
                                var9 = 'screen';
                                var9 = var10.bind(var11)(var9);
                                var9 = var9.height;
                                var2.toValue = var9;
                                var12 = _closure1_slot0;
                                var13 = _closure1_slot1;
                                var9 = 9;
                                var10 = var13[var9];
                                var11 = undefined;
                                var10 = var12.bind(var11)(var10);
                                var10 = var10.SLIDE_ANIMATION_DURATION;
                                var2.duration = var10;
                                var10 = true;
                                var2.useNativeDriver = var10;
                                var10 = _closure1_slot11;
                                var15 = var10.out;
                                var14 = var10.quad;
                                var14 = var15.bind(var10)(var14);
                                var2.easing = var14;
                                var6 = var7.bind(var4)(var6, var2);
                                var2 = new Array(2);
                                var2[0] = var6;
                                var7 = var4.timing;
                                var5 = var5.state;
                                var6 = var5.backgroundOpacity;
                                var5 = {};
                                var14 = 0;
                                var5.toValue = var14;
                                var9 = var13[var9];
                                var9 = var12.bind(var11)(var9);
                                var9 = var9.BACKGROUND_ANIMATION_DURATION;
                                var5.duration = var9;
                                var8 = _closure1_slot16;
                                var5.useNativeDriver = var8;
                                var9 = var10.out;
                                var8 = var10.quad;
                                var8 = var9.bind(var10)(var8);
                                var5.easing = var8;
                                var5 = var7.bind(var4)(var6, var5);
                                var2[1] = var5;
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.start;
                                var0 = function() { // Environment: var0
                                    var1 = _closure4_slot1;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)();
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var0);
                                _fun12993_ip = 284;
                                continue _fun12993;
                            case 278:
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 284:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._setVisibilityFunction = var4;
                    var4 = function(arg0) { // Environment: var2
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = {};
                        var3 = arg0;
                        var0.isButtonVisible = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0._setButtonVisibilityFunction = var4;
                    var4 = function(arg0) { // Environment: var2
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = {};
                        var3 = arg0;
                        var0.isScreenshotButtonVisible = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0._setScreenshotButtonVisibilityFunction = var4;
                    var2 = function() { // Environment: var2
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 9;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var2 = var1.FeedbackWidgetManager;
                        var1 = var2.hide;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var0._handleClose = var2;
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 9;
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var7 = var5.FeedbackButtonManager;
                    var6 = var7.initialize;
                    var5 = var0._setButtonVisibilityFunction;
                    var5 = var6.bind(var7)(var5);
                    var5 = var4[var1];
                    var5 = var2.bind(var3)(var5);
                    var7 = var5.ScreenshotButtonManager;
                    var6 = var7.initialize;
                    var5 = var0._setScreenshotButtonVisibilityFunction;
                    var5 = var6.bind(var7)(var5);
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.FeedbackWidgetManager;
                    var2 = var3.initialize;
                    var1 = var0._setVisibilityFunction;
                    var1 = var2.bind(var3)(var1);
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
            var1 = this;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot9;
            var2 = var3.addChangeListener;
            var0 = function() { // Environment: var0
                var1 = _closure3_slot0;
                var0 = var1.forceUpdate;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var0 = var2.bind(var3)(var0);
            var1._themeListener = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentWillUnmount';
        var4.key = var6;
        var6 = function() {
            _fun13001: for (var _fun13001_ip = 0;;) switch (_fun13001_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._themeListener;
                    if (!var1) {
                        _fun13001_ip = 28;
                        continue _fun13001
                    }
                case 12:
                    var1 = var0._themeListener;
                    var0 = var1.remove;
                    var0 = var0.bind(var1)();
                case 28:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'componentDidUpdate';
        var4.key = var6;
        var6 = function arg0, arg1() {
            _fun13002: for (var _fun13002_ip = 0;;) switch (_fun13002_ip) {
                case 0:
                    var1 = arg1;
                    var0 = this;
                    var2 = var1.isVisible;
                    if (var2) {
                        _fun13002_ip = 260;
                        continue _fun13002
                    }
                case 18:
                    var2 = var0.state;
                    var2 = var2.isVisible;
                    if (!var2) {
                        _fun13002_ip = 260;
                        continue _fun13002
                    }
                case 35:
                    var4 = _closure1_slot8;
                    var3 = var4.parallel;
                    var6 = var4.timing;
                    var2 = var0.state;
                    var5 = var2.backgroundOpacity;
                    var2 = {};
                    var8 = 1;
                    var2.toValue = var8;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var8 = 9;
                    var10 = var12[var8];
                    var9 = undefined;
                    var10 = var11.bind(var9)(var10);
                    var10 = var10.BACKGROUND_ANIMATION_DURATION;
                    var2.duration = var10;
                    var10 = _closure1_slot16;
                    var2.useNativeDriver = var10;
                    var10 = _closure1_slot11;
                    var13 = var10.in;
                    var7 = var10.quad;
                    var7 = var13.bind(var10)(var7);
                    var2.easing = var7;
                    var5 = var6.bind(var4)(var5, var2);
                    var2 = new Array(2);
                    var2[0] = var5;
                    var7 = var4.timing;
                    var5 = var0.state;
                    var6 = var5.panY;
                    var5 = {
                        'toValue': 0,
                        'duration': null,
                        'useNativeDriver': true
                    };
                    var8 = var12[var8];
                    var8 = var11.bind(var9)(var8);
                    var8 = var8.SLIDE_ANIMATION_DURATION;
                    var5.duration = var8;
                    var9 = var10.in;
                    var8 = var10.quad;
                    var8 = var9.bind(var10)(var8);
                    var5.easing = var8;
                    var5 = var7.bind(var4)(var6, var5);
                    var2[1] = var5;
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.start;
                    var2 = function() { // Environment: var2
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var3 = var1.debug;
                        var2 = var3.log;
                        var1 = 'FeedbackWidgetProvider componentDidUpdate';
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    _fun13002_ip = 310;
                    continue _fun13002;
                case 260:
                    var1 = var1.isVisible;
                    if (!var1) {
                        _fun13002_ip = 283;
                        continue _fun13002
                    }
                case 269:
                    var2 = var0.state;
                    var2 = var2.isVisible;
                    var1 = !var2;
                case 283:
                    if (!var1) {
                        _fun13002_ip = 310;
                        continue _fun13002
                    }
                case 286:
                    var0 = var0.state;
                    var2 = var0.backgroundOpacity;
                    var1 = var2.setValue;
                    var0 = 0;
                    var0 = var1.bind(var2)(var0);
                case 310:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun13004: for (var _fun13004_ip = 0;;) switch (_fun13004_ip) {
                case 0:
                    var0 = this;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 7;
                    var1 = var3[var1];
                    var28 = undefined;
                    var2 = var2.bind(var28)(var1);
                    var1 = var2.isModalSupported;
                    var1 = var1.bind(var2)();
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    if (var1) {
                        _fun13004_ip = 120;
                        continue _fun13004
                    }
                case 49:
                    var1 = 10;
                    var1 = var3[var1];
                    var1 = var2.bind(var28)(var1);
                    var5 = var1.debug;
                    var4 = var5.error;
                    var1 = 'FeedbackWidget Modal is not supported in React Native < 0.71 with Fabric renderer.';
                    var1 = var4.bind(var5)(var1);
                    var7 = _closure1_slot7;
                    var6 = var7.createElement;
                    var5 = var7.Fragment;
                    var1 = var0.props;
                    var4 = var1.children;
                    var1 = null;
                    var1 = var6.bind(var7)(var5, var1, var4);
                    return var1;
                case 120:
                    var1 = 11;
                    var1 = var3[var1];
                    var2 = var2.bind(var28)(var1);
                    var1 = var2.getTheme;
                    var26 = var1.bind(var2)();
                    var1 = var0.state;
                    var7 = var1.isButtonVisible;
                    var6 = var1.isScreenshotButtonVisible;
                    var12 = var1.isVisible;
                    var3 = var1.backgroundOpacity;
                    var2 = var3.interpolate;
                    var1 = {};
                    var4 = [0, 1];
                    var1.inputRange = var4;
                    var4 = ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.9)'];
                    var1.outputRange = var4;
                    var15 = var2.bind(var3)(var1);
                    var5 = _closure1_slot7;
                    var4 = var5.createElement;
                    var3 = var5.Fragment;
                    var1 = var0.props;
                    var2 = var1.children;
                    if (!var7) {
                        _fun13004_ip = 328;
                        continue _fun13004
                    }
                case 243:
                    var10 = _closure1_slot7;
                    var9 = var10.createElement;
                    var11 = _closure1_slot0;
                    var16 = _closure1_slot1;
                    var1 = 12;
                    var1 = var16[var1];
                    var1 = var11.bind(var28)(var1);
                    var8 = var1.FeedbackButton;
                    var1 = global;
                    var14 = var1.Object;
                    var13 = var14.assign;
                    var1 = 13;
                    var1 = var16[var1];
                    var11 = var11.bind(var28)(var1);
                    var1 = var11.getFeedbackButtonOptions;
                    var11 = var1.bind(var11)();
                    var1 = {};
                    var1 = var13.bind(var14)(var1, var11);
                    var7 = var9.bind(var10)(var8, var1);
                case 328:
                    if (!var6) {
                        _fun13004_ip = 416;
                        continue _fun13004
                    }
                case 331:
                    var10 = _closure1_slot7;
                    var9 = var10.createElement;
                    var11 = _closure1_slot0;
                    var16 = _closure1_slot1;
                    var1 = 14;
                    var1 = var16[var1];
                    var1 = var11.bind(var28)(var1);
                    var8 = var1.ScreenshotButton;
                    var1 = global;
                    var14 = var1.Object;
                    var13 = var14.assign;
                    var1 = 13;
                    var1 = var16[var1];
                    var11 = var11.bind(var28)(var1);
                    var1 = var11.getScreenshotButtonOptions;
                    var11 = var1.bind(var11)();
                    var1 = {};
                    var1 = var13.bind(var14)(var1, var11);
                    var6 = var9.bind(var10)(var8, var1);
                case 416:
                    var1 = var12;
                    if (!var1) {
                        _fun13004_ip = 845;
                        continue _fun13004
                    }
                case 425:
                    var11 = _closure1_slot7;
                    var10 = var11.createElement;
                    var17 = _closure1_slot8;
                    var9 = var17.View;
                    var8 = {};
                    var25 = _closure1_slot0;
                    var29 = _closure1_slot1;
                    var16 = 15;
                    var13 = var29[var16];
                    var13 = var25.bind(var28)(var13);
                    var14 = var13.modalWrapper;
                    var13 = new Array(2);
                    var13[0] = var14;
                    var14 = {};
                    var14.backgroundColor = var15;
                    var13[1] = var14;
                    var8.style = var13;
                    var15 = var11.createElement;
                    var14 = _closure1_slot12;
                    var13 = {
                        'visible': null,
                        'transparent': true,
                        'animationType': 'none',
                        'onRequestClose': null,
                        'testID': 'feedback-form-modal'
                    };
                    var13.visible = var12;
                    var12 = var0._handleClose;
                    var13.onRequestClose = var12;
                    var20 = var11.createElement;
                    var18 = _closure1_slot15;
                    var12 = {};
                    var21 = var29[var16];
                    var21 = var25.bind(var28)(var21);
                    var21 = var21.topSpacer;
                    var12.style = var21;
                    var12 = var20.bind(var11)(var18, var12);
                    var18 = var11.createElement;
                    var17 = var17.View;
                    var24 = global;
                    var22 = var24.Object;
                    var21 = var22.assign;
                    var20 = {};
                    var16 = var29[var16];
                    var23 = var25.bind(var28)(var16);
                    var16 = var23.modalSheetContainer;
                    var23 = var16.bind(var23)(var26);
                    var16 = new Array(2);
                    var16[0] = var23;
                    var23 = {};
                    var27 = {};
                    var26 = var0.state;
                    var26 = var26.panY;
                    var27.translateY = var26;
                    var26 = new Array(1);
                    var26[0] = var27;
                    var23.transform = var26;
                    var16[1] = var23;
                    var20.style = var16;
                    var16 = var0._panResponder;
                    var16 = var16.panHandlers;
                    var16 = var21.bind(var22)(var20, var16);
                    var21 = var11.createElement;
                    var20 = _closure1_slot14;
                    var19 = {
                        'bounces': false,
                        'keyboardShouldPersistTaps': 'handled',
                        'automaticallyAdjustKeyboardInsets': false
                    };
                    var22 = var0._handleScroll;
                    var19.onScroll = var22;
                    var23 = var11.createElement;
                    var22 = 16;
                    var22 = var29[var22];
                    var22 = var25.bind(var28)(var22);
                    var22 = var22.FeedbackWidget;
                    var27 = var24.Object;
                    var26 = var27.assign;
                    var24 = 13;
                    var24 = var29[var24];
                    var25 = var25.bind(var28)(var24);
                    var24 = var25.getFeedbackOptions;
                    var25 = var24.bind(var25)();
                    var24 = {};
                    var28 = var0._handleClose;
                    var24.onFormClose = var28;
                    var0 = var0._handleClose;
                    var24.onFormSubmitted = var0;
                    var0 = {};
                    var0 = var26.bind(var27)(var0, var25, var24);
                    var0 = var23.bind(var11)(var22, var0);
                    var0 = var21.bind(var11)(var20, var19, var0);
                    var32 = var18.bind(var11)(var17, var16, var0);
                    var36 = var11;
                    var35 = var14;
                    var34 = var13;
                    var33 = var12;
                    var0 = var36[var15](var35, var34, var33, var32, var31);
                    var1 = var10.bind(var11)(var9, var8, var0);
                case 845:
                    var34 = null;
                    var36 = var5;
                    var35 = var3;
                    var33 = var2;
                    var32 = var7;
                    var31 = var6;
                    var30 = var1;
                    var0 = var36[var4](var35, var34, var33, var32, var31, var30, var29);
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.FeedbackWidgetProvider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 1195, 999, 1196, 817, 1198, 1199, 1129, 1203, 1201, 1204]);