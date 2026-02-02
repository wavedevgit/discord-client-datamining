// design/components/AlertModal/native/AlertModal.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var15 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var15;
    var _closure1_slot2 = var7;
    var0 = function arg0() {
        var0 = arg0;
        var0 = var0.key;
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        _fun37131: for (var _fun37131_ip = 0;;) switch (_fun37131_ip) {
            case 0:
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var3 = 10;
                var6 = var5[var3];
                var0 = undefined;
                var6 = var4.bind(var0)(var6);
                var7 = var6.useAlertStore;
                var6 = var7.getState;
                var6 = var6.bind(var7)();
                var7 = var6.alerts;
                var6 = _closure1_slot5;
                var9 = var6.bind(var0)(var7);
                var6 = 0;
                var6 = var9[var6];
                var8 = var9.slice;
                var7 = 1;
                var7 = var8.bind(var9)(var7);
                var _closure2_slot0 = var7;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.dismissAlert;
                var3 = null;
                var7 = var3 == var6;
                var3 = undefined;
                if (var7) {
                    _fun37131_ip = 112;
                    continue _fun37131
                }
            case 107:
                var3 = var6.key;
            case 112:
                var3 = var4.bind(var5)(var3);
                var3 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 15;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 10;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.useAlertStore;
                    var1 = var2.setState;
                    var0 = {};
                    var3 = _closure2_slot0;
                    var0.alerts = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var3 = _closure1_slot6;
        var2 = var3.useContext;
        var1 = _closure1_slot16;
        var6 = var2.bind(var3)(var1);
        var _closure2_slot0 = var6;
        var1 = _closure1_slot29;
        var3 = undefined;
        var5 = var1.bind(var3)();
        var2 = _closure1_slot4;
        var1 = 2;
        var2 = var2.bind(var3)(var5, var1);
        var1 = 0;
        var10 = var2[var1];
        var _closure2_slot1 = var10;
        var1 = 1;
        var11 = var2[var1];
        var _closure2_slot2 = var11;
        var7 = _closure1_slot0;
        var8 = _closure1_slot2;
        var9 = 11;
        var1 = var8[var9];
        var2 = var7.bind(var3)(var1);
        var1 = var2.useAnimatedStyle;
        var0 = function() {
            var0 = {};
            var4 = _closure1_slot23;
            var2 = _closure2_slot2;
            var1 = var2.get;
            var3 = var1.bind(var2)();
            var2 = undefined;
            var1 = function(arg0) { // Environment: var1
                _fun37135: for (var _fun37135_ip = 0;;) switch (_fun37135_ip) {
                    case 0:
                        var1 = true;
                        var0 = arg0;
                        var0 = var1 === var0;
                        if (!var0) {
                            _fun37135_ip = 34;
                            continue _fun37135
                        }
                    case 12:
                        var2 = _closure2_slot2;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var1 = 0;
                        var0 = var1 === var2;
                    case 34:
                        if (!var0) {
                            _fun37135_ip = 94;
                            continue _fun37135
                        }
                    case 37:
                        var2 = _closure2_slot1;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 9;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.TransitionStates;
                        var1 = var1.YEETED;
                        var0 = var2 === var1;
                    case 94:
                        if (!var0) {
                            _fun37135_ip = 143;
                            continue _fun37135
                        }
                    case 97:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 11;
                        var0 = var1[var0];
                        var1 = undefined;
                        var3 = var2.bind(var1)(var0);
                        var2 = var3.runOnJS;
                        var0 = _closure2_slot0;
                        var0 = var2.bind(var3)(var0);
                        var0 = var0.bind(var1)();
                    case 143:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var4.bind(var2)(var3, var1);
            var0.opacity = var1;
            return var0;
        };
        var5 = {};
        var12 = _closure1_slot23;
        var5.withAlertModalSpring = var12;
        var5.sharedVisible = var11;
        var5.sharedTransitionState = var10;
        var10 = 9;
        var10 = var8[var10];
        var10 = var7.bind(var3)(var10);
        var10 = var10.TransitionStates;
        var5.TransitionStates = var10;
        var9 = var8[var9];
        var9 = var7.bind(var3)(var9);
        var9 = var9.runOnJS;
        var5.runOnJS = var9;
        var5.cleanUp = var6;
        var0.__closure = var5;
        var5 = 4470729133936.0;
        var0.__workletHash = var5;
        var5 = _closure1_slot20;
        var0.__initData = var5;
        var5 = var1.bind(var2)(var0);
        var2 = _closure1_slot11;
        var0 = 16;
        var0 = var8[var0];
        var0 = var7.bind(var3)(var0);
        var1 = var0.Backdrop;
        var0 = {};
        var6 = 'strong';
        var0.blur = var6;
        var0.style = var5;
        var4 = _closure1_slot27;
        var0.onDismiss = var4;
        var4 = 17;
        var5 = var8[var4];
        var5 = var7.bind(var3)(var5);
        var6 = var5.intl;
        var5 = var6.string;
        var4 = var8[var4];
        var4 = var7.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.Xkfav5;
        var4 = var5.bind(var6)(var4);
        var0.accessibilityLabel = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function() {
        _fun37136: for (var _fun37136_ip = 0;;) switch (_fun37136_ip) {
            case 0:
                var3 = _closure1_slot6;
                var2 = var3.useContext;
                var1 = _closure1_slot15;
                var3 = var2.bind(var3)(var1);
                var _closure2_slot0 = var3;
                var4 = _closure1_slot6;
                var2 = var4.useContext;
                var1 = _closure1_slot16;
                var8 = var2.bind(var4)(var1);
                var _closure2_slot1 = var8;
                var5 = _closure1_slot0;
                var1 = _closure1_slot2;
                var12 = 11;
                var2 = var1[var12];
                var11 = undefined;
                var4 = var5.bind(var11)(var2);
                var2 = var4.useSharedValue;
                var13 = 9;
                var1 = var1[var13];
                var1 = var5.bind(var11)(var1);
                var1 = var1.TransitionStates;
                var5 = var1.MOUNTED;
                var1 = 0;
                if (!(var3 === var5)) {
                    _fun37136_ip = 112;
                    continue _fun37136
                }
            case 109:
                var1 = 1;
            case 112:
                var1 = var2.bind(var4)(var1);
                var _closure2_slot2 = var1;
                var10 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = var9[var12];
                var4 = var10.bind(var11)(var2);
                var2 = var4.useSharedValue;
                var2 = var2.bind(var4)(var3);
                var _closure2_slot3 = var2;
                var7 = _closure1_slot6;
                var5 = var7.useLayoutEffect;
                var4 = new Array(3);
                var4[0] = var1;
                var4[1] = var3;
                var4[2] = var2;
                var3 = function() { // Environment: var0
                    var2 = _closure2_slot3;
                    var1 = var2.set;
                    var0 = _closure2_slot0;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var3 = var5.bind(var7)(var3, var4);
                var3 = var9[var12];
                var5 = var10.bind(var11)(var3);
                var4 = var5.useAnimatedReaction;
                var3 = function() {
                    var1 = _closure2_slot3;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var7 = {};
                var7.sharedTransitionState = var2;
                var3.__closure = var7;
                var7 = 14603144870585.0;
                var3.__workletHash = var7;
                var7 = _closure1_slot24;
                var3.__initData = var7;
                var0 = function arg0() {
                    _fun37139: for (var _fun37139_ip = 0;;) switch (_fun37139_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 9;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.TransitionStates;
                            var3 = var1.YEETED;
                            var1 = arg0;
                            if (!(var1 !== var3)) {
                                _fun37139_ip = 66;
                                continue _fun37139
                            }
                        case 44:
                            var4 = _closure2_slot2;
                            var3 = var4.set;
                            var1 = 1;
                            var1 = var3.bind(var4)(var1);
                            _fun37139_ip = 145;
                            continue _fun37139;
                        case 66:
                            var4 = _closure2_slot2;
                            var3 = var4.get;
                            var4 = var3.bind(var4)();
                            var3 = 1;
                            if (!(var3 !== var4)) {
                                _fun37139_ip = 129;
                                continue _fun37139
                            }
                        case 89:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var2 = 11;
                            var2 = var4[var2];
                            var4 = var3.bind(var0)(var2);
                            var3 = var4.runOnJS;
                            var2 = _closure2_slot1;
                            var2 = var3.bind(var4)(var2);
                            var2 = var2.bind(var0)();
                            _fun37139_ip = 145;
                            continue _fun37139;
                        case 129:
                            var3 = _closure2_slot2;
                            var2 = var3.set;
                            var1 = 0;
                            var1 = var2.bind(var3)(var1);
                        case 145:
                            return var0;
                    }
                };
                var7 = {};
                var13 = var9[var13];
                var13 = var10.bind(var11)(var13);
                var13 = var13.TransitionStates;
                var7.TransitionStates = var13;
                var7.sharedVisible = var1;
                var9 = var9[var12];
                var9 = var10.bind(var11)(var9);
                var9 = var9.runOnJS;
                var7.runOnJS = var9;
                var7.cleanUp = var8;
                var0.__closure = var7;
                var7 = 9486923983340.0;
                var0.__workletHash = var7;
                var6 = _closure1_slot25;
                var0.__initData = var6;
                var0 = var4.bind(var5)(var3, var0);
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var3 = function arg0() {
        var0 = arg0;
        var4 = var0.children;
        var3 = _closure1_slot11;
        var1 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 21;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var1 = var0.Stack;
        var0 = {};
        var5 = 12;
        var0.spacing = var5;
        var0.children = var4;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var _closure1_slot30 = var3;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var4);
    var5 = 0;
    var4 = var7[var5];
    var0 = undefined;
    var4 = var15.bind(var0)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var7[var4];
    var4 = var15.bind(var0)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var15.bind(var0)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var8 = var7[var4];
    var4 = arg3;
    var8 = var4.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var9 = var4.View;
    var _closure1_slot7 = var9;
    var14 = var4.StyleSheet;
    var _closure1_slot8 = var14;
    var9 = var4.Dimensions;
    var _closure1_slot9 = var9;
    var4 = var4.ScrollView;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var9 = var4.NOOP;
    var4 = 6;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var10 = var4.jsx;
    var _closure1_slot11 = var10;
    var4 = var4.jsxs;
    var _closure1_slot12 = var4;
    var4 = 7;
    var4 = var7[var4];
    var11 = var6.bind(var0)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var13 = 'center';
    var12 = {
        'flex': 1,
        'position': 'relative',
        'justifyContent': 'center',
        'alignItems': 'center',
        'paddingHorizontal': 16
    };
    var4.root = var12;
    var12 = {};
    var18 = var14.absoluteFillObject;
    var19 = var12;
    var14 = copyDataProperties(var19, var18);
    var4.overlay = var12;
    var12 = {
        'backgroundColor': null,
        'margin': 16,
        'width': '100%',
        'height': '100%'
    };
    var14 = 8;
    var16 = var7[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.colors;
    var16 = var16.MOBILE_ALERT_BACKGROUND_DEFAULT;
    var12.backgroundColor = var16;
    var16 = var7[var14];
    var16 = var15.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.xl;
    var12.borderRadius = var16;
    var14 = var7[var14];
    var14 = var15.bind(var0)(var14);
    var14 = var14.shadows;
    var18 = var14.SHADOW_TOP_HIGH;
    var19 = var12;
    var14 = copyDataProperties(var19, var18);
    var4.content = var12;
    var12 = {
        'width': '100%',
        'height': '100%',
        'overflow': 'hidden',
        'padding': 24,
        'position': 'relative'
    };
    var4.overflow = var12;
    var12 = {};
    var12.alignItems = var13;
    var4.body = var12;
    var12 = {};
    var12.textAlign = var13;
    var4.contentText = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot13 = var4;
    var4 = {
        'overshootClamping': true,
        'damping': 35,
        'stiffness': 450,
        'mass': 0.5,
        'restDisplacementThreshold': 0.001
    };
    var _closure1_slot14 = var4;
    var10 = var8.createContext;
    var4 = 9;
    var4 = var7[var4];
    var4 = var6.bind(var0)(var4);
    var4 = var4.TransitionStates;
    var4 = var4.YEETED;
    var4 = var10.bind(var8)(var4);
    var _closure1_slot15 = var4;
    var4 = var8.createContext;
    var4 = var4.bind(var8)(var9);
    var _closure1_slot16 = var4;
    var4 = var8.createContext;
    var4 = var4.bind(var8)(var5);
    var _closure1_slot17 = var4;
    var5 = var8.createContext;
    var4 = '';
    var4 = var5.bind(var8)(var4);
    var _closure1_slot18 = var4;
    var5 = var8.createContext;
    var4 = null;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot19 = var4;
    var5 = var8.memo;
    var4 = function() { // Environment: var1
        var1 = _closure1_slot13;
        var3 = undefined;
        var2 = var1.bind(var3)();
        var _closure2_slot0 = var2;
        var1 = _closure1_slot0;
        var8 = _closure1_slot2;
        var5 = 10;
        var5 = var8[var5];
        var7 = var1.bind(var3)(var5);
        var6 = var7.useAlertStore;
        var5 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.alerts;
            return var0;
        };
        var6 = var6.bind(var7)(var5);
        var5 = 11;
        var5 = var8[var5];
        var9 = var1.bind(var3)(var5);
        var7 = var9.useSharedValue;
        var5 = 0;
        var10 = var7.bind(var9)(var5);
        var _closure2_slot1 = var10;
        var5 = function arg0() {
            _fun37143: for (var _fun37143_ip = 0;;) switch (_fun37143_ip) {
                case 0:
                    var5 = arg0;
                    var0 = var5.length;
                    var4 = 0;
                    if (!(var4 !== var0)) {
                        _fun37143_ip = 73;
                        continue _fun37143
                    }
                case 16:
                    var0 = new Array(1);
                    var2 = {
                        'type': 'backdrop',
                        'key': 'backdrop'
                    };
                    var0[0] = var2;
                    var _closure3_slot0 = var0;
                    var3 = var5.slice;
                    var2 = 3;
                    var3 = var3.bind(var5)(var4, var2);
                    var2 = var3.forEach;
                    var1 = function(arg0, arg1) { // Environment: var1
                        var3 = arg0;
                        var2 = _closure3_slot0;
                        var1 = var2.push;
                        var0 = {};
                        var4 = 'alert';
                        var0.type = var4;
                        var0.alert = var3;
                        var3 = var3.key;
                        var0.key = var3;
                        var3 = arg1;
                        var0.index = var3;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                case 73:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var6 = var5.bind(var3)(var6);
        var _closure2_slot2 = var6;
        var11 = _closure1_slot6;
        var9 = var11.useLayoutEffect;
        var7 = new Array(1);
        var7[0] = var6;
        var5 = function() { // Environment: var0
            _fun37145: for (var _fun37145_ip = 0;;) switch (_fun37145_ip) {
                case 0:
                    var0 = _closure2_slot2;
                    var1 = var0.length;
                    var0 = 0;
                    if (!(var1 > var0)) {
                        _fun37145_ip = 53;
                        continue _fun37145
                    }
                case 18:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.dismissGlobalKeyboard;
                    var0 = var0.bind(var1)();
                case 53:
                    var0 = undefined;
                    return var0;
            }
        };
        var5 = var9.bind(var11)(var5, var7);
        var9 = _closure1_slot6;
        var7 = var9.useCallback;
        var5 = new Array(1);
        var5[0] = var2;
        var2 = function(arg0) { // Environment: var0
            var3 = _closure1_slot11;
            var1 = _closure1_slot1;
            var8 = _closure1_slot2;
            var0 = 13;
            var0 = var8[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var4 = _closure1_slot8;
            var4 = var4.absoluteFillObject;
            var0.style = var4;
            var6 = _closure1_slot11;
            var5 = _closure1_slot0;
            var4 = 14;
            var4 = var8[var4];
            var4 = var5.bind(var2)(var4);
            var5 = var4.Dialog;
            var4 = {};
            var8 = _closure1_slot27;
            var4.onDismiss = var8;
            var9 = _closure1_slot11;
            var8 = _closure1_slot7;
            var7 = {};
            var10 = _closure2_slot0;
            var10 = var10.root;
            var7.style = var10;
            var10 = 'box-none';
            var7.pointerEvents = var10;
            var10 = arg0;
            var7.children = var10;
            var7 = var9.bind(var2)(var8, var7);
            var4.children = var7;
            var4 = var6.bind(var2)(var5, var4);
            var0.children = var4;
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var7 = var7.bind(var9)(var2, var5);
        var9 = _closure1_slot6;
        var5 = var9.useCallback;
        var2 = new Array(1);
        var2[0] = var10;
        var0 = function(arg0, arg1, arg2, arg3) { // Environment: var0
            _fun37147: for (var _fun37147_ip = 0;;) switch (_fun37147_ip) {
                case 0:
                    var4 = arg0;
                    var1 = arg1;
                    var0 = var1.type;
                    var3 = 'alert';
                    if (!(var3 !== var0)) {
                        _fun37147_ip = 42;
                        continue _fun37147
                    }
                case 19:
                    var6 = _closure1_slot11;
                    var5 = _closure1_slot28;
                    var2 = undefined;
                    var0 = {};
                    var0 = var6.bind(var2)(var5, var0);
                    _fun37147_ip = 54;
                    continue _fun37147;
                case 42:
                    var2 = var1.alert;
                    var0 = var2.node;
                case 54:
                    var2 = var1.type;
                    var14 = -1;
                    if (!(var3 === var2)) {
                        _fun37147_ip = 74;
                        continue _fun37147
                    }
                case 69:
                    var14 = var1.index;
                case 74:
                    var3 = _closure1_slot11;
                    var1 = _closure1_slot19;
                    var2 = var1.Provider;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var1.value = var5;
                    var7 = _closure1_slot11;
                    var5 = _closure1_slot16;
                    var6 = var5.Provider;
                    var5 = {};
                    var8 = arg3;
                    var5.value = var8;
                    var10 = _closure1_slot11;
                    var8 = _closure1_slot15;
                    var9 = var8.Provider;
                    var8 = {};
                    var11 = arg2;
                    var8.value = var11;
                    var13 = _closure1_slot11;
                    var11 = _closure1_slot17;
                    var12 = var11.Provider;
                    var11 = {};
                    var11.value = var14;
                    var16 = _closure1_slot11;
                    var14 = _closure1_slot18;
                    var15 = var14.Provider;
                    var14 = {};
                    var14.value = var4;
                    var19 = _closure1_slot11;
                    var17 = _closure1_slot6;
                    var18 = var17.Suspense;
                    var17 = {};
                    var20 = null;
                    var17.fallback = var20;
                    var17.children = var0;
                    var0 = undefined;
                    var17 = var19.bind(var0)(var18, var17);
                    var14.children = var17;
                    var14 = var16.bind(var0)(var15, var14);
                    var11.children = var14;
                    var11 = var13.bind(var0)(var12, var11);
                    var8.children = var11;
                    var8 = var10.bind(var0)(var9, var8);
                    var5.children = var8;
                    var5 = var7.bind(var0)(var6, var5);
                    var1.children = var5;
                    var0 = var3.bind(var0)(var2, var1, var4);
                    return var0;
            }
        };
        var5 = var5.bind(var9)(var0, var2);
        var2 = _closure1_slot11;
        var0 = 9;
        var0 = var8[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.TransitionGroup;
        var0 = {};
        var0.wrapChildren = var7;
        var0.items = var6;
        var0.renderItem = var5;
        var4 = _closure1_slot26;
        var0.getItemKey = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var4 = var5.bind(var8)(var4);
    var5 = {};
    var8 = 'function AlertModalNativeTsx1(){const{withAlertModalSpring,sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withAlertModalSpring(sharedVisible.get(),function(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}';
    var5.code = var8;
    var _closure1_slot20 = var5;
    var5 = {};
    var8 = "function AlertModalNativeTsx2(){const{sharedVisible,sharedTransitionState,TransitionStates,runOnJS,cleanUp,windowHeight,ALERT_MODAL_MARGIN,safeAreaTop,safeAreaBottom,withAlertModalSpring,sharedIndex,sharedTopHeight,useReducedMotion}=this.__closure;var _CARD_OFFSETS$sharedI;function onComplete(finished){if(finished===true&&sharedVisible.get()===0&&sharedTransitionState.get()===TransitionStates.YEETED){runOnJS(cleanUp)();}}const CARD_OFFSETS=[0,-20,-34];const maxHeight=windowHeight-ALERT_MODAL_MARGIN*2-Math.max(safeAreaTop,safeAreaBottom)*2;return{position:'absolute',opacity:withAlertModalSpring(sharedVisible.get(),onComplete),zIndex:10-sharedIndex.get(),height:sharedIndex.get()>0?sharedTopHeight.get():'auto',maxHeight:maxHeight,transform:useReducedMotion?[]:[{scale:withAlertModalSpring(sharedVisible.get()===1?1-sharedIndex.get()*0.1:0.7)},{translateY:withAlertModalSpring(sharedVisible.get()===1?(_CARD_OFFSETS$sharedI=CARD_OFFSETS[sharedIndex.get()])!==null&&_CARD_OFFSETS$sharedI!==void 0?_CARD_OFFSETS$sharedI:sharedVisible.get()*-12:50-sharedIndex.get()*50)}]};}";
    var5.code = var8;
    var _closure1_slot21 = var5;
    var5 = {};
    var8 = "function withAlertModalSpring_AlertModalNativeTsx3(value,callback){const{withSpring,MODAL_SPRING}=this.__closure;return withSpring(value,MODAL_SPRING,'animate-always',callback);}";
    var5.code = var8;
    var _closure1_slot22 = var5;
    var5 = function() { // Environment: var1
        var0 = function arg0, arg1() {
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 23;
            var2 = var2[var1];
            var1 = undefined;
            var5 = var3.bind(var1)(var2);
            var4 = var5.withSpring;
            var8 = _closure1_slot14;
            var9 = arg0;
            var7 = 'animate-always';
            var6 = arg1;
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            return var0;
        };
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 23;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.withSpring;
        var2.withSpring = var3;
        var3 = _closure1_slot14;
        var2.MODAL_SPRING = var3;
        var0.__closure = var2;
        var2 = 15556562210180.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot22;
        var0.__initData = var1;
        return var0;
    };
    var5 = var5.bind(var0)();
    var _closure1_slot23 = var5;
    var5 = {};
    var8 = 'function AlertModalNativeTsx4(){const{sharedTransitionState}=this.__closure;return sharedTransitionState.get();}';
    var5.code = var8;
    var _closure1_slot24 = var5;
    var5 = {};
    var8 = 'function AlertModalNativeTsx5(transitionState){const{TransitionStates,sharedVisible,runOnJS,cleanUp}=this.__closure;if(transitionState===TransitionStates.YEETED){if(sharedVisible.get()===1){sharedVisible.set(0);}else{runOnJS(cleanUp)();}}else{sharedVisible.set(1);}}';
    var5.code = var8;
    var _closure1_slot25 = var5;
    var5 = 25;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'design/components/AlertModal/native/AlertModal.native.tsx';
    var5 = var6.bind(var7)(var5);
    var2.AlertModalContainer = var4;
    var4 = function() {
        var4 = _closure1_slot6;
        var3 = var4.useContext;
        var2 = _closure1_slot18;
        var4 = var3.bind(var4)(var2);
        var _closure2_slot0 = var4;
        var3 = _closure1_slot6;
        var2 = var3.useCallback;
        var1 = new Array(1);
        var1[0] = var4;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.dismissAlert;
            var1 = _closure2_slot0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useDismissModalCallback = var4;
    var4 = function arg0() {
        _fun37152: for (var _fun37152_ip = 0;;) switch (_fun37152_ip) {
            case 0:
                var0 = arg0;
                var17 = var0.header;
                var27 = var0.title;
                var23 = var0.content;
                var18 = var0.actions;
                var14 = var0.extraContent;
                var2 = _closure1_slot6;
                var1 = var2.useContext;
                var0 = _closure1_slot16;
                var21 = var1.bind(var2)(var0);
                var _closure2_slot0 = var21;
                var2 = _closure1_slot6;
                var1 = var2.useContext;
                var0 = _closure1_slot17;
                var7 = var1.bind(var2)(var0);
                var _closure2_slot1 = var7;
                var0 = _closure1_slot13;
                var3 = undefined;
                var24 = var0.bind(var3)();
                var2 = _closure1_slot6;
                var1 = var2.useContext;
                var0 = _closure1_slot19;
                var13 = var1.bind(var2)(var0);
                var _closure2_slot2 = var13;
                var2 = _closure1_slot6;
                var1 = var2.useContext;
                var25 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 18;
                var0 = var8[var0];
                var0 = var25.bind(var3)(var0);
                var0 = var0.AccessibilityPreferencesContext;
                var0 = var1.bind(var2)(var0);
                var0 = var0.reducedMotion;
                var12 = var0.enabled;
                var _closure2_slot3 = var12;
                var0 = 11;
                var1 = var8[var0];
                var2 = var25.bind(var3)(var1);
                var1 = var2.useSharedValue;
                var2 = var1.bind(var2)(var7);
                var _closure2_slot4 = var2;
                var1 = _closure1_slot29;
                var6 = var1.bind(var3)();
                var5 = _closure1_slot4;
                var1 = 2;
                var6 = var5.bind(var3)(var6, var1);
                var5 = 0;
                var22 = var6[var5];
                var _closure2_slot5 = var22;
                var1 = 1;
                var26 = var6[var1];
                var _closure2_slot6 = var26;
                var1 = _closure1_slot1;
                var6 = 19;
                var6 = var8[var6];
                var6 = var1.bind(var3)(var6);
                var6 = var6.bind(var3)();
                var19 = var6.top;
                var _closure2_slot7 = var19;
                var16 = var6.bottom;
                var _closure2_slot8 = var16;
                var10 = _closure1_slot9;
                var9 = var10.get;
                var6 = 'window';
                var6 = var9.bind(var10)(var6);
                var20 = var6.height;
                var _closure2_slot9 = var20;
                var6 = var8[var0];
                var10 = var25.bind(var3)(var6);
                var9 = var10.useAnimatedStyle;
                var6 = function() {
                    _fun37153: for (var _fun37153_ip = 0;;) switch (_fun37153_ip) {
                        case 0:
                            var1 = _closure2_slot9;
                            var0 = 32;
                            var2 = var1 - var0;
                            var0 = global;
                            var4 = var0.Math;
                            var3 = var4.max;
                            var1 = _closure2_slot7;
                            var0 = _closure2_slot8;
                            var1 = var3.bind(var4)(var1, var0);
                            var0 = 2;
                            var1 = var0 * var1;
                            var0 = {};
                            var3 = 'absolute';
                            var0.position = var3;
                            var8 = _closure1_slot23;
                            var5 = _closure2_slot6;
                            var4 = var5.get;
                            var6 = var4.bind(var5)();
                            var5 = undefined;
                            var4 = function(arg0) { // Environment: var4
                                _fun37154: for (var _fun37154_ip = 0;;) switch (_fun37154_ip) {
                                    case 0:
                                        var1 = true;
                                        var0 = arg0;
                                        var0 = var1 === var0;
                                        if (!var0) {
                                            _fun37154_ip = 34;
                                            continue _fun37154
                                        }
                                    case 12:
                                        var2 = _closure2_slot6;
                                        var1 = var2.get;
                                        var2 = var1.bind(var2)();
                                        var1 = 0;
                                        var0 = var1 === var2;
                                    case 34:
                                        if (!var0) {
                                            _fun37154_ip = 94;
                                            continue _fun37154
                                        }
                                    case 37:
                                        var2 = _closure2_slot5;
                                        var1 = var2.get;
                                        var2 = var1.bind(var2)();
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot2;
                                        var1 = 9;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3);
                                        var1 = var1.TransitionStates;
                                        var1 = var1.YEETED;
                                        var0 = var2 === var1;
                                    case 94:
                                        if (!var0) {
                                            _fun37154_ip = 143;
                                            continue _fun37154
                                        }
                                    case 97:
                                        var2 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var0 = 11;
                                        var0 = var1[var0];
                                        var1 = undefined;
                                        var3 = var2.bind(var1)(var0);
                                        var2 = var3.runOnJS;
                                        var0 = _closure2_slot0;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 143:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4 = var8.bind(var5)(var6, var4);
                            var0.opacity = var4;
                            var6 = _closure2_slot4;
                            var4 = var6.get;
                            var8 = var4.bind(var6)();
                            var4 = 10;
                            var4 = var4 - var8;
                            var0.zIndex = var4;
                            var4 = var6.get;
                            var6 = var4.bind(var6)();
                            var4 = 0;
                            var6 = var6 > var4;
                            var4 = 'auto';
                            if (!var6) {
                                _fun37153_ip = 157;
                                continue _fun37153
                            }
                        case 144:
                            var8 = _closure2_slot2;
                            var6 = var8.get;
                            var4 = var6.bind(var8)();
                        case 157:
                            var0.height = var4;
                            var1 = var2 - var1;
                            var0.maxHeight = var1;
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun37153_ip = 409;
                                continue _fun37153
                            }
                        case 180:
                            var2 = {};
                            var4 = _closure1_slot23;
                            var6 = _closure2_slot6;
                            var1 = var6.get;
                            var8 = var1.bind(var6)();
                            var1 = 0.7;
                            var6 = 1;
                            if (!(var6 === var8)) {
                                _fun37153_ip = 247;
                                continue _fun37153
                            }
                        case 216:
                            var9 = _closure2_slot4;
                            var8 = var9.get;
                            var9 = var8.bind(var9)();
                            var8 = 0.1;
                            var8 = var8 * var9;
                            var1 = var6 - var8;
                        case 247:
                            var1 = var4.bind(var5)(var1);
                            var2.scale = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var4 = _closure1_slot23;
                            var8 = _closure2_slot6;
                            var3 = var8.get;
                            var3 = var3.bind(var8)();
                            if (!(var6 !== var3)) {
                                _fun37153_ip = 314;
                                continue _fun37153
                            }
                        case 288:
                            var6 = _closure2_slot4;
                            var3 = var6.get;
                            var3 = var3.bind(var6)();
                            var6 = 50;
                            var3 = var6 * var3;
                            var3 = var6 - var3;
                            _fun37153_ip = 393;
                            continue _fun37153;
                        case 314:
                            var8 = [0];
                            var6 = -20;
                            var8[1] = var6;
                            var6 = -34;
                            var8[2] = var6;
                            var9 = _closure2_slot4;
                            var6 = var9.get;
                            var6 = var6.bind(var9)();
                            var6 = var8[var6];
                            var8 = null;
                            if (!(var8 == var6)) {
                                _fun37153_ip = 390;
                                continue _fun37153
                            }
                        case 367:
                            var8 = _closure2_slot6;
                            var7 = var8.get;
                            var8 = var7.bind(var8)();
                            var7 = -12;
                            var6 = var7 * var8;
                        case 390:
                            var3 = var6;
                        case 393:
                            var3 = var4.bind(var5)(var3);
                            var2.translateY = var3;
                            var1[1] = var2;
                            _fun37153_ip = 413;
                            continue _fun37153;
                        case 409:
                            var1 = new Array(0);
                        case 413:
                            var0.transform = var1;
                            return var0;
                    }
                };
                var11 = {};
                var11.sharedVisible = var26;
                var11.sharedTransitionState = var22;
                var22 = 9;
                var22 = var8[var22];
                var22 = var25.bind(var3)(var22);
                var22 = var22.TransitionStates;
                var11.TransitionStates = var22;
                var22 = var8[var0];
                var22 = var25.bind(var3)(var22);
                var22 = var22.runOnJS;
                var11.runOnJS = var22;
                var11.cleanUp = var21;
                var11.windowHeight = var20;
                var20 = 16;
                var11.ALERT_MODAL_MARGIN = var20;
                var11.safeAreaTop = var19;
                var11.safeAreaBottom = var16;
                var16 = _closure1_slot23;
                var11.withAlertModalSpring = var16;
                var11.sharedIndex = var2;
                var11.sharedTopHeight = var13;
                var11.useReducedMotion = var12;
                var6.__closure = var11;
                var11 = 655123755546.0;
                var6.__workletHash = var11;
                var11 = _closure1_slot21;
                var6.__initData = var11;
                var6 = var9.bind(var10)(var6);
                var11 = _closure1_slot6;
                var10 = var11.useLayoutEffect;
                var9 = new Array(2);
                var9[0] = var7;
                var9[1] = var2;
                var2 = function() { // Environment: var4
                    var2 = _closure2_slot4;
                    var1 = var2.set;
                    var0 = _closure2_slot1;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var2 = var10.bind(var11)(var2, var9);
                var2 = 20;
                var2 = var8[var2];
                var9 = var1.bind(var3)(var2);
                var2 = function() { // Environment: var4
                    var1 = _closure1_slot27;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    var0 = true;
                    return var0;
                };
                var2 = var9.bind(var3)(var2);
                var2 = _closure1_slot11;
                var0 = var8[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var8 = 'no-hide-descendants';
                if (!(var5 === var7)) {
                    _fun37152_ip = 561;
                    continue _fun37152
                }
            case 557:
                var8 = 'auto';
            case 561:
                var0.importantForAccessibility = var8;
                var5 = var5 !== var7;
                var0.accessibilityElementsHidden = var5;
                var7 = var24.content;
                var5 = new Array(2);
                var5[0] = var7;
                var5[1] = var6;
                var0.style = var5;
                var4 = function arg0() {
                    var2 = _closure2_slot2;
                    var1 = var2.set;
                    var0 = arg0;
                    var0 = var0.nativeEvent;
                    var0 = var0.layout;
                    var0 = var0.height;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0.onLayout = var4;
                var6 = _closure1_slot11;
                var5 = _closure1_slot10;
                var4 = {};
                var7 = false;
                var4.alwaysBounceVertical = var7;
                var9 = _closure1_slot11;
                var8 = _closure1_slot7;
                var7 = {};
                var10 = var24.overflow;
                var7.style = var10;
                var12 = _closure1_slot12;
                var21 = _closure1_slot0;
                var25 = _closure1_slot2;
                var16 = 21;
                var10 = var25[var16];
                var10 = var21.bind(var3)(var10);
                var11 = var10.Stack;
                var10 = {};
                var13 = 24;
                var10.spacing = var13;
                var13 = new Array(4);
                var13[0] = var17;
                var16 = var25[var16];
                var16 = var21.bind(var3)(var16);
                var17 = var16.Stack;
                var16 = {};
                var19 = 8;
                var16.spacing = var19;
                var20 = var24.body;
                var19 = new Array(1);
                var19[0] = var20;
                var16.style = var19;
                var26 = _closure1_slot11;
                var20 = 22;
                var19 = var25[var20];
                var19 = var21.bind(var3)(var19);
                var22 = var19.Text;
                var19 = {
                    'variant': 'heading-lg/bold',
                    'accessibilityRole': 'header',
                    'color': 'mobile-text-heading-primary'
                };
                var19.children = var27;
                var22 = var26.bind(var3)(var22, var19);
                var19 = new Array(2);
                var19[0] = var22;
                var22 = _closure1_slot11;
                var20 = var25[var20];
                var20 = var21.bind(var3)(var20);
                var21 = var20.Text;
                var20 = {
                    'variant': 'text-md/medium',
                    'color': 'text-default'
                };
                var24 = var24.contentText;
                var20.style = var24;
                var20.children = var23;
                var20 = var22.bind(var3)(var21, var20);
                var19[1] = var20;
                var16.children = var19;
                var16 = var12.bind(var3)(var17, var16);
                var13[1] = var16;
                var13[2] = var14;
                var14 = null;
                var16 = var14 != var18;
                if (!var16) {
                    _fun37152_ip = 887;
                    continue _fun37152
                }
            case 867:
                var17 = _closure1_slot11;
                var16 = _closure1_slot30;
                var15 = {};
                var15.children = var18;
                var14 = var17.bind(var3)(var16, var15);
            case 887:
                var13[3] = var14;
                var10.children = var13;
                var10 = var12.bind(var3)(var11, var10);
                var7.children = var10;
                var7 = var9.bind(var3)(var8, var7);
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.AlertModal = var4;
    var2.AlertActions = var3;
    var1 = function arg0() {
        var3 = arg0;
        var0 = var3.onPress;
        var _closure2_slot0 = var0;
        var0 = null;
        var2 = Object.create(var0);
        var1 = 0;
        var2.onPress = var1;
        var10 = {};
        var9 = var3;
        var8 = var2;
        var5 = copyDataProperties(var10, var9, var8);
        var6 = _closure1_slot6;
        var3 = var6.useState;
        var2 = false;
        var7 = var3.bind(var6)(var2);
        var6 = _closure1_slot4;
        var3 = undefined;
        var2 = 2;
        var2 = var6.bind(var3)(var7, var2);
        var6 = var2[var1];
        var1 = 1;
        var1 = var2[var1];
        var _closure2_slot1 = var1;
        var7 = _closure1_slot6;
        var2 = var7.useContext;
        var1 = _closure1_slot18;
        var1 = var2.bind(var7)(var1);
        var _closure2_slot2 = var1;
        var2 = _closure1_slot11;
        var1 = _closure1_slot0;
        var7 = _closure1_slot2;
        var0 = 24;
        var0 = var7[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.Button;
        var0 = {};
        var10 = var0;
        var9 = var5;
        var5 = copyDataProperties(var10, var9);
        var7 = true;
        var5 = 'grow';
        var0[var5] = var7;
        var5 = 'loading';
        var0[var5] = var6;
        var4 = function() { // Environment: var4
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun37161: for (var _fun37161_ip = 0;;) switch (_fun37161_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun37161_ip = 126;
                                continue _fun37161
                            }
                        case 7:
                            var1 = _closure2_slot0;
                            var4 = null;
                            var5 = var4 == var1;
                            var2 = undefined;
                            var1 = undefined;
                            if (var5) {
                                _fun37161_ip = 39;
                                continue _fun37161
                            }
                        case 27:
                            var6 = _closure2_slot0;
                            var5 = arg0;
                            var1 = var6.bind(var2)(var5);
                        case 39:
                            var4 = var4 != var1;
                            if (!var4) {
                                _fun37161_ip = 58;
                                continue _fun37161
                            }
                        case 46:
                            var5 = global;
                            var5 = var5.Promise;
                            var4 = var1 instanceof var5;
                        case 58:
                            if (!var4) {
                                _fun37161_ip = 82;
                                continue _fun37161
                            }
                        case 61:
                            var5 = _closure2_slot1;
                            var4 = true;
                            var4 = var5.bind(var2)(var4);
                            SaveGenerator(address = 76);
                        case 74:
                            return var1;
                        case 76:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                            if (var4) {
                                _fun37161_ip = 123;
                                continue _fun37161
                            }
                        case 82:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 10;
                            var4 = var6[var4];
                            var5 = var5.bind(var2)(var4);
                            var4 = var5.dismissAlert;
                            var3 = _closure2_slot2;
                            var3 = var4.bind(var5)(var3);
                            return var2;
                        case 123:
                            return var1;
                        case 126:
                            return var0;
                    }
                };
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var5 = var4.bind(var3)();
        var4 = 'onPress';
        var0[var4] = var5;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.AlertActionButton = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 852, 31, 27, 483, 33, 1297, 671, 3989, 3990, 3681, 1582, 3991, 4026, 802, 4032, 1234, 3126, 1568, 4040, 4041, 3902, 4042, 4045, 2]);