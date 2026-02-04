// components_native/common/UnreadBars.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun101226: for (var _fun101226_ip = 0;;) switch (_fun101226_ip) {
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
                _fun101226_ip = 76;
                continue _fun101226;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
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
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var11 = true;
    var3.value = var11;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var14.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var14.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var6 = var5[var3];
    var3 = arg3;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot8 = var3;
    var6 = 6;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.View;
    var _closure1_slot9 = var7;
    var7 = var6.Animated;
    var _closure1_slot10 = var7;
    var8 = var6.StyleSheet;
    var6 = var6.TouchableWithoutFeedback;
    var _closure1_slot11 = var6;
    var6 = 7;
    var6 = var5[var6];
    var6 = var14.bind(var0)(var6);
    var _closure1_slot12 = var6;
    var6 = 8;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var10 = var6.Fonts;
    var6 = 9;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var7 = var6.jsx;
    var _closure1_slot13 = var7;
    var6 = var6.jsxs;
    var _closure1_slot14 = var6;
    var7 = var8.create;
    var6 = {};
    var9 = {};
    var12 = 10;
    var12 = var5[var12];
    var16 = var14.bind(var0)(var12);
    var15 = var10.DISPLAY_SEMIBOLD;
    var10 = 11;
    var12 = var5[var10];
    var12 = var14.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var19 = var12.WHITE;
    var12 = {};
    var12.uppercase = var11;
    var11 = 12;
    var21 = undefined;
    var20 = var15;
    var18 = var11;
    var17 = var12;
    var19 = var21[var16](var20, var19, var18, var17, var16);
    var20 = var9;
    var12 = copyDataProperties(var20, var19);
    var6.unreadText = var9;
    var9 = {
        'margin': 8,
        'height': 24,
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var12 = var5[var10];
    var12 = var14.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.md;
    var9.borderRadius = var12;
    var12 = var5[var11];
    var16 = var4.bind(var0)(var12);
    var15 = var16.hexWithOpacity;
    var12 = var5[var10];
    var12 = var14.bind(var0)(var12);
    var12 = var12.unsafe_rawColors;
    var12 = var12.PRIMARY_400;
    var13 = 0.9;
    var12 = var15.bind(var16)(var12, var13);
    var9.backgroundColor = var12;
    var6.unread = var9;
    var9 = {};
    var11 = var5[var11];
    var12 = var4.bind(var0)(var11);
    var11 = var12.hexWithOpacity;
    var10 = var5[var10];
    var10 = var14.bind(var0)(var10);
    var10 = var10.unsafe_rawColors;
    var10 = var10.RED_400;
    var10 = var11.bind(var12)(var10, var13);
    var9.backgroundColor = var10;
    var6.mention = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot15 = var6;
    var6 = var3.PureComponent;
    var3 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun101230: for (var _fun101230_ip = 0;;) switch (_fun101230_ip) {
                case 0:
                    var6 = this;
                    var14 = 0;
                    var0 = copyRestArgs(var14);
                    var7 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6, var3);
                    var11 = new Array(0);
                    var14 = var11;
                    var13 = var0;
                    var12 = 0;
                    var0 = arraySpread(var14, var13, var12);
                    var0 = _closure1_slot6;
                    var10 = var0.bind(var5)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun101230_ip = 86;
                        continue _fun101230
                    }
                case 73:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var6, var11);
                    _fun101230_ip = 120;
                    continue _fun101230;
                case 86:
                    var7 = global;
                    var9 = var7.Reflect;
                    var8 = var9.construct;
                    var7 = _closure1_slot6;
                    var7 = var7.bind(var5)(var6);
                    var7 = var7.constructor;
                    var0 = var8.bind(var9)(var10, var11, var7);
                case 120:
                    var0 = var3.bind(var5)(var6, var0);
                    var _closure3_slot0 = var0;
                    var3 = {};
                    var5 = false;
                    var3.active = var5;
                    var0.state = var3;
                    var2 = _closure1_slot10;
                    var2 = var2.Value;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var15 = var3;
                    var14 = 0;
                    var2 = new var15[var2](var14, var13);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var0.animation = var2;
                    var2 = function() { // Environment: var1
                        var4 = _closure3_slot0;
                        var0 = var4.props;
                        var2 = var0.item;
                        var1 = var0.onPress;
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var0 = 13;
                        var5 = var8[var0];
                        var0 = undefined;
                        var6 = var6.bind(var0)(var5);
                        var5 = var6.triggerHapticFeedback;
                        var7 = _closure1_slot1;
                        var3 = 14;
                        var3 = var8[var3];
                        var3 = var7.bind(var0)(var3);
                        var3 = var3.IMPACT_LIGHT;
                        var3 = var5.bind(var6)(var3);
                        var3 = var4.hide;
                        var3 = var3.bind(var4)();
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var0.handlePress = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = {};
                        var3 = true;
                        var0.active = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handlePressIn = var2;
                    var1 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var1 = var2.setState;
                        var0 = {};
                        var3 = false;
                        var0.active = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handlePressOut = var1;
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
        var0 = 'componentWillEnter';
        var4.key = var0;
        var0 = function arg0() {
            var2 = this;
            var1 = var2.show;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(6);
        var0[0] = var4;
        var4 = {};
        var6 = 'componentWillLeave';
        var4.key = var6;
        var6 = function arg0() {
            var2 = this;
            var1 = var2.hide;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'show';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot10;
            var2 = var3.spring;
            var0 = this;
            var1 = var0.animation;
            var0 = {
                'toValue': 1,
                'friction': 15,
                'tension': 250,
                'useNativeDriver': true
            };
            var2 = var2.bind(var3)(var1, var0);
            var1 = var2.start;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'hide';
        var4.key = var6;
        var6 = function arg0() {
            var3 = _closure1_slot10;
            var2 = var3.spring;
            var0 = this;
            var1 = var0.animation;
            var0 = {
                'toValue': 0,
                'friction': 15,
                'tension': 250,
                'useNativeDriver': true
            };
            var2 = var2.bind(var3)(var1, var0);
            var1 = var2.start;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'getAnimatedStyle';
        var4.key = var6;
        var6 = function() {
            _fun101238: for (var _fun101238_ip = 0;;) switch (_fun101238_ip) {
                case 0:
                    var2 = this;
                    var0 = var2.props;
                    var7 = var0.bottom;
                    var6 = var0.contentInset;
                    var0 = var0.useReducedMotion;
                    var1 = var2.state;
                    var9 = var1.active;
                    var3 = {};
                    var1 = 'absolute';
                    var3.position = var1;
                    var4 = var6.left;
                    var5 = null;
                    var10 = var5 != var4;
                    var1 = 0;
                    if (!var10) {
                        _fun101238_ip = 65;
                        continue _fun101238
                    }
                case 62:
                    var1 = var4;
                case 65:
                    var3.left = var1;
                    var4 = var6.right;
                    var10 = var5 != var4;
                    var1 = 0;
                    if (!var10) {
                        _fun101238_ip = 86;
                        continue _fun101238
                    }
                case 83:
                    var1 = var4;
                case 86:
                    var3.right = var1;
                    var4 = 'top';
                    if (!var7) {
                        _fun101238_ip = 101;
                        continue _fun101238
                    }
                case 97:
                    var4 = 'bottom';
                case 101:
                    if (var7) {
                        _fun101238_ip = 123;
                        continue _fun101238
                    }
                case 104:
                    var10 = var6.top;
                    var11 = var5 != var10;
                    var1 = 0;
                    if (!var11) {
                        _fun101238_ip = 121;
                        continue _fun101238
                    }
                case 118:
                    var1 = var10;
                case 121:
                    _fun101238_ip = 143;
                    continue _fun101238;
                case 123:
                    var6 = var6.bottom;
                    var10 = var5 != var6;
                    var5 = 0;
                    if (!var10) {
                        _fun101238_ip = 140;
                        continue _fun101238
                    }
                case 137:
                    var5 = var6;
                case 140:
                    var1 = var5;
                case 143:
                    var3[var4] = var1;
                    if (var0) {
                        _fun101238_ip = 278;
                        continue _fun101238
                    }
                case 154:
                    var0 = {};
                    var13 = var0;
                    var12 = var3;
                    var1 = copyDataProperties(var13, var12);
                    var4 = var2.animation;
                    var1 = 'opacity';
                    var0[var1] = var4;
                    var1 = {};
                    var6 = var2.animation;
                    var5 = var6.interpolate;
                    var4 = {};
                    var10 = [0, 1];
                    var4.inputRange = var10;
                    var10 = -72;
                    if (!var7) {
                        _fun101238_ip = 224;
                        continue _fun101238
                    }
                case 221:
                    var10 = 72;
                case 224:
                    var7 = new Array(2);
                    var7[0] = var10;
                    var8 = 0;
                    if (!var9) {
                        _fun101238_ip = 240;
                        continue _fun101238
                    }
                case 237:
                    var8 = 1;
                case 240:
                    var7[1] = var8;
                    var4.outputRange = var7;
                    var4 = var5.bind(var6)(var4);
                    var1.translateY = var4;
                    var4 = new Array(1);
                    var4[0] = var1;
                    var1 = 'transform';
                    var0[var1] = var4;
                    _fun101238_ip = 308;
                    continue _fun101238;
                case 278:
                    var1 = {};
                    var13 = var1;
                    var12 = var3;
                    var3 = copyDataProperties(var13, var12);
                    var3 = var2.animation;
                    var2 = 'opacity';
                    var1[var2] = var3;
                    var0 = var1;
                case 308:
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'render';
        var4.key = var6;
        var5 = function() {
            _fun101239: for (var _fun101239_ip = 0;;) switch (_fun101239_ip) {
                case 0:
                    var6 = this;
                    var0 = var6.props;
                    var15 = var0.compact;
                    var0 = var0.item;
                    var11 = var0.mention;
                    var13 = var0.section;
                    var3 = _closure1_slot13;
                    var2 = _closure1_slot11;
                    var1 = {};
                    var0 = 'button';
                    var1.accessibilityRole = var0;
                    var0 = var6.handlePress;
                    var1.onPress = var0;
                    var0 = var6.handlePressIn;
                    var1.onPressIn = var0;
                    var0 = var6.handlePressOut;
                    var1.onPressOut = var0;
                    var8 = global;
                    var0 = var8.HermesInternal;
                    var4 = var0.concat;
                    var0 = 'unread-bar-touchable-';
                    var10 = '-';
                    var0 = var4.bind(var0)(var11, var10, var13);
                    var1.testID = var0;
                    var0 = _closure1_slot10;
                    var5 = var0.View;
                    var4 = {};
                    var0 = var6.getAnimatedStyle;
                    var0 = var0.bind(var6)();
                    var4.style = var0;
                    var0 = var8.HermesInternal;
                    var6 = var0.concat;
                    var0 = 'unread-bar-animated-view-';
                    var0 = var6.bind(var0)(var11, var10, var13);
                    var4.nativeID = var0;
                    var7 = _closure1_slot9;
                    var6 = {};
                    var0 = _closure1_slot15;
                    var0 = var0.unread;
                    var9 = new Array(2);
                    var9[0] = var0;
                    var0 = undefined;
                    var14 = undefined;
                    if (!var11) {
                        _fun101239_ip = 213;
                        continue _fun101239
                    }
                case 203:
                    var16 = _closure1_slot15;
                    var14 = var16.mention;
                case 213:
                    var9[1] = var14;
                    var6.style = var9;
                    var8 = var8.HermesInternal;
                    var9 = var8.concat;
                    var8 = 'unread-bar-view-';
                    var8 = var9.bind(var8)(var11, var10, var13);
                    var6.nativeID = var8;
                    var10 = _closure1_slot13;
                    var9 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var8 = 15;
                    var8 = var13[var8];
                    var8 = var9.bind(var0)(var8);
                    var9 = var8.LegacyText;
                    var8 = {};
                    var13 = _closure1_slot15;
                    var13 = var13.unreadText;
                    var8.style = var13;
                    var13 = 1.5;
                    var8.maxFontSizeMultiplier = var13;
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot2;
                    var12 = 16;
                    var13 = var17[var12];
                    var13 = var16.bind(var0)(var13);
                    var14 = var13.intl;
                    var13 = var14.string;
                    var12 = var17[var12];
                    var12 = var16.bind(var0)(var12);
                    var12 = var12.t;
                    if (var15) {
                        _fun101239_ip = 391;
                        continue _fun101239
                    }
                case 358:
                    if (var11) {
                        _fun101239_ip = 376;
                        continue _fun101239
                    }
                case 361:
                    var11 = var12.FCRiT3;
                    var11 = var13.bind(var14)(var11);
                    _fun101239_ip = 389;
                    continue _fun101239;
                case 376:
                    var15 = var12["8zH0LJ"];
                    var11 = var13.bind(var14)(var15);
                case 389:
                    _fun101239_ip = 402;
                    continue _fun101239;
                case 391:
                    var12 = var12.y2b7CA;
                    var11 = var13.bind(var14)(var12);
                case 402:
                    var8.children = var11;
                    var8 = var10.bind(var0)(var9, var8);
                    var6.children = var8;
                    var6 = var3.bind(var0)(var7, var6);
                    var4.children = var6;
                    var4 = var3.bind(var0)(var5, var4);
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
            }
        };
        var4.value = var5;
        var0[5] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var6 = var3.bind(var0)(var6);
    var _closure1_slot16 = var6;
    var3 = {};
    var7 = false;
    var3.bottom = var7;
    var6.defaultProps = var3;
    var3 = 19;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_native/common/UnreadBars.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun101240: for (var _fun101240_ip = 0;;) switch (_fun101240_ip) {
            case 0:
                var1 = arg0;
                var2 = var1.scrollToLocation;
                var _closure2_slot0 = var2;
                var4 = var1.beforeItem;
                var12 = var1.afterItem;
                var13 = var1.compact;
                var3 = undefined;
                if (!(var13 === var3)) {
                    _fun101240_ip = 41;
                    continue _fun101240
                }
            case 39:
                var13 = false;
            case 41:
                var10 = var1.contentInset;
                if (!(var10 === var3)) {
                    _fun101240_ip = 61;
                    continue _fun101240
                }
            case 51:
                var10 = {
                    'top': 0,
                    'left': 0,
                    'right': 0,
                    'bottom': 0
                };
            case 61:
                var11 = function arg0() {
                    var0 = arg0;
                    var3 = var0.section;
                    var0 = var0.row;
                    var2 = _closure2_slot0;
                    var1 = {};
                    var1.section = var3;
                    var1.item = var0;
                    var0 = true;
                    var1.animated = var0;
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var1 = _closure1_slot0;
                var5 = _closure1_slot2;
                var2 = 17;
                var2 = var5[var2];
                var8 = var1.bind(var3)(var2);
                var6 = var8.useStateFromStores;
                var9 = _closure1_slot12;
                var2 = new Array(1);
                var2[0] = var9;
                var0 = function() { // Environment: var0
                    var0 = _closure1_slot12;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var6 = var6.bind(var8)(var2, var0);
                var2 = _closure1_slot14;
                var0 = 18;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TransitionGroup;
                var0 = {};
                var5 = _closure1_slot8;
                var5 = var5.Fragment;
                var0.component = var5;
                var5 = null;
                var9 = var5 != var4;
                var8 = null;
                if (!var9) {
                    _fun101240_ip = 217;
                    continue _fun101240
                }
            case 171:
                var15 = _closure1_slot13;
                var14 = _closure1_slot16;
                var9 = {};
                var9.compact = var13;
                var9.item = var4;
                var9.onPress = var11;
                var9.contentInset = var10;
                var9.useReducedMotion = var6;
                var4 = 'BEFORE';
                var8 = var15.bind(var3)(var14, var9, var4);
            case 217:
                var4 = new Array(2);
                var4[0] = var8;
                var8 = var5 != var12;
                var5 = null;
                if (!var8) {
                    _fun101240_ip = 286;
                    continue _fun101240
                }
            case 234:
                var9 = _closure1_slot13;
                var8 = _closure1_slot16;
                var7 = {};
                var7.compact = var13;
                var7.item = var12;
                var7.onPress = var11;
                var7.contentInset = var10;
                var10 = true;
                var7.bottom = var10;
                var7.useReducedMotion = var6;
                var6 = 'AFTER';
                var5 = var9.bind(var3)(var8, var7, var6);
            case 286:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 31, 27, 1298, 660, 33, 4682, 671, 3240, 3279, 3280, 4876, 1234, 566, 10371, 2]);