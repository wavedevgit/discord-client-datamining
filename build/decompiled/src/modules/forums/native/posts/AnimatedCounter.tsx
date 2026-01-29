// modules/forums/native/posts/AnimatedCounter.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0) { // Original name: getStartPosition, environment: var1
        _fun76513: for (var _fun76513_ip = 0;;) switch (_fun76513_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.current;
                var0 = var0.previous;
                if (!(!(var1 > var0))) {
                    _fun76513_ip = 52;
                    continue _fun76513
                }
            case 18:
                if (!(!(var1 < var0))) {
                    _fun76513_ip = 37;
                    continue _fun76513
                }
            case 22:
                var0 = _closure1_slot10;
                var0 = var0.NEUTRAL;
                _fun76513_ip = 50;
                continue _fun76513;
            case 37:
                var1 = _closure1_slot10;
                var0 = var1.ABOVE;
            case 50:
                _fun76513_ip = 65;
                continue _fun76513;
            case 52:
                var1 = _closure1_slot10;
                var0 = var1.BELOW;
            case 65:
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: AnimatedCount, environment: var1
        _fun76514: for (var _fun76514_ip = 0;;) switch (_fun76514_ip) {
            case 0:
                var0 = arg0;
                var8 = var0.count;
                var7 = var0.formatter;
                var16 = var0.state;
                var _closure2_slot0 = var16;
                var19 = var0.cleanUp;
                var _closure2_slot1 = var19;
                var14 = var0.height;
                var _closure2_slot2 = var14;
                var21 = var0.springConfig;
                var _closure2_slot3 = var21;
                var10 = var0.textColor;
                var11 = var0.textVariant;
                var9 = var0.textStyle;
                var3 = undefined;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var5 = _closure1_slot4;
                var2 = var5.useContext;
                var0 = _closure1_slot12;
                var17 = var2.bind(var5)(var0);
                var _closure2_slot4 = var17;
                var5 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 5;
                var0 = var2[var0];
                var6 = var5.bind(var3)(var0);
                var0 = null;
                var5 = var0 != var17;
                var0 = '[AnimatedCount] Context should not be nullish.';
                var0 = var6.bind(var3)(var5, var0);
                var12 = _closure1_slot0;
                var0 = 6;
                var5 = var2[var0];
                var6 = var12.bind(var3)(var5);
                var5 = var6.useSharedValue;
                var20 = 7;
                var2 = var2[var20];
                var2 = var12.bind(var3)(var2);
                var2 = var2.TransitionStates;
                var2 = var2.MOUNTED;
                if (!(var16 !== var2)) {
                    _fun76514_ip = 208;
                    continue _fun76514
                }
            case 197:
                var2 = _closure1_slot15;
                var2 = var2.bind(var3)(var17);
                _fun76514_ip = 218;
                continue _fun76514;
            case 208:
                var12 = _closure1_slot10;
                var2 = var12.NEUTRAL;
            case 218:
                var18 = var5.bind(var6)(var2);
                _closure2_slot5 = var18;
                var12 = _closure1_slot4;
                var6 = var12.useMemo;
                var5 = new Array(1);
                var5[0] = var14;
                var2 = function() { // Environment: var1
                    var2 = _closure1_slot11;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun76516: for (var _fun76516_ip = 0;;) switch (_fun76516_ip) {
                            case 0:
                                var5 = arg0;
                                var2 = _closure2_slot2;
                                var0 = null;
                                var3 = var0 != var2;
                                var0 = 0;
                                if (!var3) {
                                    _fun76516_ip = 92;
                                    continue _fun76516
                                }
                            case 21:
                                var3 = _closure2_slot2;
                                var1 = _closure1_slot10;
                                var1 = var1.ABOVE;
                                if (!(var1 !== var5)) {
                                    _fun76516_ip = 79;
                                    continue _fun76516
                                }
                            case 42:
                                var1 = _closure1_slot10;
                                var6 = var1.BELOW;
                                var1 = var3;
                                if (!(var6 !== var5)) {
                                    _fun76516_ip = 89;
                                    continue _fun76516
                                }
                            case 59:
                                var4 = _closure1_slot10;
                                var4 = var4.NEUTRAL;
                                var1 = undefined;
                                if (!(var4 === var5)) {
                                    _fun76516_ip = 89;
                                    continue _fun76516
                                }
                            case 75:
                                var1 = 0;
                                _fun76516_ip = 89;
                                continue _fun76516;
                            case 79:
                                var2 = -1;
                                var1 = var2 * var3;
                            case 89:
                                var0 = var1;
                            case 92:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var22 = var6.bind(var12)(var2, var5);
                _closure2_slot6 = var22;
                var5 = _closure1_slot0;
                var12 = _closure1_slot2;
                var2 = var12[var0];
                var13 = var5.bind(var3)(var2);
                var6 = var13.useAnimatedStyle;
                var2 = function() { // Original name: y, environment: var1
                    var0 = {};
                    var2 = {};
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var3 = 8;
                    var3 = var13[var3];
                    var11 = undefined;
                    var7 = var12.bind(var11)(var3);
                    var6 = var7.withSpring;
                    var10 = 6;
                    var3 = var13[var10];
                    var14 = var12.bind(var11)(var3);
                    var8 = var14.interpolate;
                    var4 = _closure2_slot5;
                    var3 = var4.get;
                    var5 = var3.bind(var4)();
                    var4 = _closure1_slot11;
                    var3 = _closure2_slot6;
                    var5 = var8.bind(var14)(var5, var4, var3);
                    var17 = _closure2_slot3;
                    var3 = function(arg0) { // Original name: t, environment: var3
                        _fun76518: for (var _fun76518_ip = 0;;) switch (_fun76518_ip) {
                            case 0:
                                var0 = arg0;
                                if (!var0) {
                                    _fun76518_ip = 54;
                                    continue _fun76518
                                }
                            case 6:
                                var2 = _closure2_slot0;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 7;
                                var3 = var3[var1];
                                var1 = undefined;
                                var1 = var4.bind(var1)(var3);
                                var1 = var1.TransitionStates;
                                var1 = var1.YEETED;
                                var0 = var2 === var1;
                            case 54:
                                if (!var0) {
                                    _fun76518_ip = 103;
                                    continue _fun76518
                                }
                            case 57:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 6;
                                var0 = var1[var0];
                                var1 = undefined;
                                var3 = var2.bind(var1)(var0);
                                var2 = var3.runOnJS;
                                var0 = _closure2_slot1;
                                var0 = var2.bind(var3)(var0);
                                var0 = var0.bind(var1)();
                            case 103:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var8 = {};
                    var14 = _closure2_slot0;
                    var8.state = var14;
                    var14 = 7;
                    var14 = var13[var14];
                    var14 = var12.bind(var11)(var14);
                    var14 = var14.TransitionStates;
                    var8.TransitionStates = var14;
                    var10 = var13[var10];
                    var10 = var12.bind(var11)(var10);
                    var10 = var10.runOnJS;
                    var8.runOnJS = var10;
                    var9 = _closure2_slot1;
                    var8.cleanUp = var9;
                    var3.__closure = var8;
                    var8 = 10933954976568.0;
                    var3.__workletHash = var8;
                    var1 = _closure1_slot14;
                    var3.__initData = var1;
                    var16 = 'respect-motion-settings';
                    var19 = var7;
                    var18 = var5;
                    var15 = var3;
                    var1 = var19[var6](var18, var17, var16, var15, var14);
                    var2.translateY = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.transform = var1;
                    return var0;
                };
                var15 = {};
                var23 = 8;
                var23 = var12[var23];
                var23 = var5.bind(var3)(var23);
                var23 = var23.withSpring;
                var15.withSpring = var23;
                var23 = var12[var0];
                var23 = var5.bind(var3)(var23);
                var23 = var23.interpolate;
                var15.interpolate = var23;
                var15.animationState = var18;
                var23 = _closure1_slot11;
                var15.ANIMATION_INPUT = var23;
                var15.animationOutput = var22;
                var15.springConfig = var21;
                var15.state = var16;
                var20 = var12[var20];
                var20 = var5.bind(var3)(var20);
                var20 = var20.TransitionStates;
                var15.TransitionStates = var20;
                var20 = var12[var0];
                var20 = var5.bind(var3)(var20);
                var20 = var20.runOnJS;
                var15.runOnJS = var20;
                var15.cleanUp = var19;
                var2.__closure = var15;
                var15 = 13513457118386.0;
                var2.__workletHash = var15;
                var15 = _closure1_slot13;
                var2.__initData = var15;
                var13 = var6.bind(var13)(var2);
                var15 = _closure1_slot4;
                var6 = var15.useEffect;
                var2 = new Array(3);
                var2[0] = var18;
                var2[1] = var17;
                var2[2] = var16;
                var1 = function() { // Environment: var1
                    _fun76519: for (var _fun76519_ip = 0;;) switch (_fun76519_ip) {
                        case 0:
                            var3 = _closure2_slot5;
                            var2 = var3.set;
                            var6 = _closure2_slot0;
                            var7 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 7;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var7.bind(var0)(var1);
                            var1 = var1.TransitionStates;
                            var1 = var1.YEETED;
                            if (!(var6 !== var1)) {
                                _fun76519_ip = 69;
                                continue _fun76519
                            }
                        case 57:
                            var1 = _closure1_slot10;
                            var1 = var1.NEUTRAL;
                            _fun76519_ip = 92;
                            continue _fun76519;
                        case 69:
                            var5 = _closure1_slot15;
                            var4 = _closure2_slot4;
                            var5 = var5.bind(var0)(var4);
                            var4 = -1;
                            var1 = var4 * var5;
                        case 92:
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var1 = var6.bind(var15)(var1, var2);
                var2 = _closure1_slot7;
                var1 = _closure1_slot1;
                var0 = var12[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var6 = _closure1_slot5;
                var15 = var6.absoluteFill;
                var6 = new Array(3);
                var6[0] = var15;
                var6[1] = var13;
                var13 = {};
                var13.height = var14;
                var6[2] = var13;
                var0.style = var6;
                var6 = _closure1_slot7;
                var4 = 9;
                var4 = var12[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {};
                var4.variant = var11;
                var4.color = var10;
                var4.style = var9;
                var7 = var7.bind(var3)(var8);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = function(arg0) { // Original name: getItemKey, environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var _closure1_slot17 = var0;
    var0 = function(arg0) { // Original name: AnimatedCounterTransitionGroup, environment: var1
        var1 = arg0;
        var12 = var1.count;
        var _closure2_slot0 = var12;
        var11 = var1.formatter;
        var _closure2_slot1 = var11;
        var14 = var1.textColor;
        var _closure2_slot2 = var14;
        var15 = var1.textVariant;
        var _closure2_slot3 = var15;
        var13 = var1.textStyle;
        var _closure2_slot4 = var13;
        var5 = var1.springConfig;
        var _closure2_slot5 = var5;
        var1 = _closure1_slot9;
        var3 = undefined;
        var17 = var1.bind(var3)();
        var2 = _closure1_slot4;
        var1 = var2.useState;
        var2 = var1.bind(var2)();
        var1 = _closure1_slot3;
        var9 = 2;
        var1 = var1.bind(var3)(var2, var9);
        var4 = 0;
        var6 = var1[var4];
        var _closure2_slot6 = var6;
        var2 = 1;
        var1 = var1[var2];
        var _closure2_slot7 = var1;
        var10 = _closure1_slot4;
        var7 = var10.useState;
        var1 = new Array(1);
        var1[0] = var12;
        var7 = var7.bind(var10)(var1);
        var1 = _closure1_slot3;
        var1 = var1.bind(var3)(var7, var9);
        var21 = var1[var4];
        var1 = var1[var2];
        var _closure2_slot8 = var1;
        var2 = _closure1_slot4;
        var1 = var2.useRef;
        var1 = var1.bind(var2)(var21);
        var _closure2_slot9 = var1;
        var2 = _closure1_slot4;
        var1 = var2.useRef;
        var2 = var1.bind(var2)(var12);
        var _closure2_slot10 = var2;
        var9 = _closure1_slot4;
        var7 = var9.useEffect;
        var4 = new Array(1);
        var4[0] = var12;
        var1 = function() { // Environment: var0
            var2 = _closure2_slot10;
            var3 = _closure2_slot9;
            var4 = var3.current;
            var0 = 0;
            var0 = var4[var0];
            var2.current = var0;
            var0 = _closure2_slot0;
            var2 = new Array(1);
            var2[0] = var0;
            var3.current = var2;
            var2 = _closure2_slot8;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var7.bind(var9)(var1, var4);
        var1 = function(arg0, arg1) { // Original name: useAnimationContext, environment: var0
            var5 = arg0;
            var4 = arg1;
            var _closure3_slot0 = var5;
            var _closure3_slot1 = var4;
            var3 = _closure1_slot4;
            var2 = var3.useMemo;
            var1 = new Array(2);
            var1[0] = var5;
            var1[1] = var4;
            var0 = function() { // Environment: var0
                var0 = {};
                var3 = _closure3_slot0;
                var2 = 0;
                var2 = var3[var2];
                var0.current = var2;
                var1 = _closure3_slot1;
                var1 = var1.current;
                var0.previous = var1;
                return var0;
            };
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var7 = var1.bind(var3)(var21, var2);
        var9 = _closure1_slot4;
        var4 = var9.useCallback;
        var2 = function(arg0) { // Environment: var0
            var2 = _closure2_slot7;
            var0 = arg0;
            var0 = var0.nativeEvent;
            var0 = var0.layout;
            var1 = var0.height;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = new Array(0);
        var10 = var4.bind(var9)(var2, var1);
        var4 = _closure1_slot4;
        var2 = var4.useCallback;
        var1 = new Array(6);
        var1[0] = var11;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var14;
        var1[4] = var13;
        var1[5] = var15;
        var0 = function(arg0, arg1, arg2, arg3) { // Environment: var0
            _fun76526: for (var _fun76526_ip = 0;;) switch (_fun76526_ip) {
                case 0:
                    var4 = _closure1_slot7;
                    var3 = _closure1_slot16;
                    var2 = {};
                    var5 = _closure2_slot1;
                    var2.formatter = var5;
                    var6 = _closure2_slot5;
                    var5 = null;
                    if (!(var5 == var6)) {
                        _fun76526_ip = 65;
                        continue _fun76526
                    }
                case 35:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 10;
                    var5 = var5[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var5);
                    var1 = var1.springStandard;
                    _fun76526_ip = 69;
                    continue _fun76526;
                case 65:
                    var1 = _closure2_slot5;
                case 69:
                    var2.springConfig = var1;
                    var1 = arg1;
                    var2.count = var1;
                    var1 = arg2;
                    var2.state = var1;
                    var1 = arg3;
                    var2.cleanUp = var1;
                    var1 = _closure2_slot6;
                    var2.height = var1;
                    var1 = _closure2_slot2;
                    var2.textColor = var1;
                    var1 = _closure2_slot3;
                    var2.textVariant = var1;
                    var0 = _closure2_slot4;
                    var2.textStyle = var0;
                    var1 = undefined;
                    var0 = arg0;
                    var0 = var4.bind(var1)(var3, var2, var0);
                    return var0;
            }
        };
        var20 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot8;
        var1 = _closure1_slot6;
        var0 = {};
        var4 = var17.container;
        var0.style = var4;
        var6 = _closure1_slot7;
        var4 = _closure1_slot12;
        var5 = var4.Provider;
        var4 = {};
        var4.value = var7;
        var19 = _closure1_slot7;
        var9 = _closure1_slot0;
        var16 = _closure1_slot2;
        var7 = 7;
        var7 = var16[var7];
        var7 = var9.bind(var3)(var7);
        var18 = var7.TransitionGroup;
        var7 = {};
        var7.items = var21;
        var7.renderItem = var20;
        var20 = _closure1_slot17;
        var7.getItemKey = var20;
        var7 = var19.bind(var3)(var18, var7);
        var4.children = var7;
        var5 = var6.bind(var3)(var5, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var7 = _closure1_slot7;
        var6 = _closure1_slot6;
        var5 = {};
        var17 = var17.hidden;
        var5.style = var17;
        var5.onLayout = var10;
        var10 = _closure1_slot7;
        var8 = 9;
        var8 = var16[var8];
        var8 = var9.bind(var3)(var8);
        var9 = var8.Text;
        var8 = {};
        var8.variant = var15;
        var8.color = var14;
        var8.style = var13;
        var11 = var11.bind(var3)(var12);
        var8.children = var11;
        var8 = var10.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0) { // Original name: BasicCounter, environment: var1
        var0 = arg0;
        var5 = var0.count;
        var6 = var0.textStyle;
        var7 = var0.textColor;
        var8 = var0.textVariant;
        var4 = var0.formatter;
        var3 = _closure1_slot7;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 9;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Text;
        var0 = {};
        var0.variant = var8;
        var0.color = var7;
        var0.style = var6;
        var4 = var4.bind(var2)(var5);
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var8 = 1;
    var6 = var5[var8];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.StyleSheet;
    var _closure1_slot5 = var7;
    var3 = var3.View;
    var _closure1_slot6 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot7 = var7;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 4;
    var3 = var5[var3];
    var10 = var4.bind(var0)(var3);
    var7 = var10.createStyles;
    var3 = {};
    var11 = {
        'flex': 0,
        'flexGrow': 0,
        'flexShrink': 0,
        'justifyContent': 'flex-start',
        'alignItems': 'flex-start',
        'overflow': 'hidden'
    };
    var3.container = var11;
    var11 = {};
    var11.opacity = var9;
    var3.hidden = var11;
    var3 = var7.bind(var10)(var3);
    var _closure1_slot9 = var3;
    var7 = {};
    var10 = -1;
    var7.ABOVE = var10;
    var3 = 'ABOVE';
    var7[var10] = var3;
    var7.NEUTRAL = var9;
    var3 = 'NEUTRAL';
    var7[var9] = var3;
    var7.BELOW = var8;
    var3 = 'BELOW';
    var7[var8] = var3;
    var _closure1_slot10 = var7;
    var8 = var7.ABOVE;
    var3 = new Array(3);
    var3[0] = var8;
    var8 = var7.NEUTRAL;
    var3[1] = var8;
    var7 = var7.BELOW;
    var3[2] = var7;
    var _closure1_slot11 = var3;
    var3 = var6.createContext;
    var3 = var3.bind(var6)(var0);
    var _closure1_slot12 = var3;
    var3 = {};
    var7 = "function AnimatedCounterTsx1(){const{withSpring,interpolate,animationState,ANIMATION_INPUT,animationOutput,springConfig,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{transform:[{translateY:withSpring(interpolate(animationState.get(),ANIMATION_INPUT,animationOutput),springConfig,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})}]};}";
    var3.code = var7;
    var _closure1_slot13 = var3;
    var3 = {};
    var7 = 'function AnimatedCounterTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}';
    var3.code = var7;
    var _closure1_slot14 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        _fun76528: for (var _fun76528_ip = 0;;) switch (_fun76528_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.count;
                var8 = var1.springConfig;
                var5 = var1.textStyle;
                var0 = var1.animate;
                var4 = undefined;
                if (!(var0 === var4)) {
                    _fun76528_ip = 35;
                    continue _fun76528
                }
            case 33:
                var0 = true;
            case 35:
                var7 = var1.textColor;
                if (!(var7 === var4)) {
                    _fun76528_ip = 51;
                    continue _fun76528
                }
            case 45:
                var7 = 'text-default';
            case 51:
                var6 = var1.textVariant;
                if (!(var6 === var4)) {
                    _fun76528_ip = 67;
                    continue _fun76528
                }
            case 61:
                var6 = 'text-sm/normal';
            case 67:
                var9 = var1.formatter;
                if (!(var9 === var4)) {
                    _fun76528_ip = 106;
                    continue _fun76528
                }
            case 77:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var1 = var2.bind(var4)(var1);
                var9 = var1.defaultFormatter;
            case 106:
                var3 = _closure1_slot7;
                if (var0) {
                    _fun76528_ip = 155;
                    continue _fun76528
                }
            case 116:
                var2 = _closure1_slot19;
                var0 = {};
                var0.count = var10;
                var0.formatter = var9;
                var0.textColor = var7;
                var0.textVariant = var6;
                var0.textStyle = var5;
                var0 = var3.bind(var4)(var2, var0);
                _fun76528_ip = 197;
                continue _fun76528;
            case 155:
                var2 = _closure1_slot18;
                var1 = {};
                var1.count = var10;
                var1.formatter = var9;
                var1.springConfig = var8;
                var1.textColor = var7;
                var1.textVariant = var6;
                var1.textStyle = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 197:
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 12;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/forums/native/posts/AnimatedCounter.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 33, 1297, 44, 3677, 3981, 4034, 3895, 4040, 9717, 2]);