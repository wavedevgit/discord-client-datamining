// modules/activities/panel/native/ActivityPanelFocusedView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var3 = function arg0() {
        _fun110955: for (var _fun110955_ip = 0;;) switch (_fun110955_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.context;
                var2 = undefined;
                var _closure2_slot1 = var2;
                var4 = _closure1_slot1;
                var6 = _closure1_slot2;
                var0 = 13;
                var0 = var6[var0];
                var0 = var4.bind(var2)(var0);
                var2 = var0.bind(var2)();
                var _closure2_slot0 = var2;
                var4 = _closure1_slot3;
                var0 = var4.useContext;
                var0 = var0.bind(var4)(var5);
                var0 = var0.wrapperDimensions;
                var4 = var0.isLandscape;
                if (!var4) {
                    _fun110955_ip = 86;
                    continue _fun110955
                }
            case 77:
                var5 = var0.isWindowLandscape;
                var4 = !var5;
            case 86:
                var5 = var0.isLandscape;
                var5 = !var5;
                if (!var5) {
                    _fun110955_ip = 104;
                    continue _fun110955
                }
            case 98:
                var5 = var0.isWindowLandscape;
            case 104:
                _closure2_slot1 = var5;
                var0 = {};
                if (var4) {
                    _fun110955_ip = 119;
                    continue _fun110955
                }
            case 113:
                var4 = _closure1_slot11;
                _fun110955_ip = 123;
                continue _fun110955;
            case 119:
                var4 = _closure1_slot12;
            case 123:
                var0.portraitSafeAreasConfig = var4;
                var4 = _closure1_slot3;
                var3 = var4.useMemo;
                var6 = var2.right;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var1 = function() { // Environment: var1
                    _fun110956: for (var _fun110956_ip = 0;;) switch (_fun110956_ip) {
                        case 0:
                            var0 = _closure2_slot1;
                            if (var0) {
                                _fun110956_ip = 63;
                                continue _fun110956
                            }
                        case 10:
                            var0 = {};
                            var1 = {};
                            var3 = false;
                            var1.disable = var3;
                            var3 = global;
                            var5 = var3.Math;
                            var4 = var5.max;
                            var2 = _closure2_slot0;
                            var3 = var2.right;
                            var2 = 64;
                            var2 = var4.bind(var5)(var2, var3);
                            var1.override = var2;
                            var0.right = var1;
                            _fun110956_ip = 70;
                            continue _fun110956;
                        case 63:
                            var0 = _closure1_slot13;
                        case 70:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var0.landscapeSafeAreasConfig = var1;
                return var0;
        }
    };
    var _closure1_slot24 = var3;
    var1 = function arg0() {
        _fun110957: for (var _fun110957_ip = 0;;) switch (_fun110957_ip) {
            case 0:
                var1 = arg0;
                var13 = var1.children;
                var9 = var1.header;
                var24 = var1.transitionState;
                var _closure2_slot0 = var24;
                var20 = var1.transitionCleanUp;
                var _closure2_slot1 = var20;
                var5 = var1.updateActivityPanelModeToPIP;
                var _closure2_slot2 = var5;
                var14 = var1.hasActivity;
                var7 = var1.context;
                var6 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = 14;
                var1 = var15[var1];
                var3 = undefined;
                var8 = var6.bind(var3)(var1);
                var4 = var8.useStateFromStores;
                var1 = _closure1_slot4;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot4;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var18 = var4.bind(var8)(var2, var1);
                var _closure2_slot3 = var18;
                var1 = _closure1_slot19;
                var19 = var1.bind(var3)();
                var _closure2_slot4 = var19;
                var10 = _closure1_slot1;
                var1 = 15;
                var1 = var15[var1];
                var1 = var10.bind(var3)(var1);
                var21 = var1.bind(var3)();
                var _closure2_slot5 = var21;
                var1 = 13;
                var1 = var15[var1];
                var1 = var10.bind(var3)(var1);
                var25 = var1.bind(var3)();
                var _closure2_slot6 = var25;
                var2 = _closure1_slot3;
                var1 = var2.useContext;
                var1 = var1.bind(var2)(var7);
                var12 = var1.wrapperDimensions;
                var _closure2_slot7 = var12;
                var23 = var1.wrapperOffset;
                var _closure2_slot8 = var23;
                var1 = 16;
                var1 = var15[var1];
                var4 = var6.bind(var3)(var1);
                var2 = var4.useLockedWebView;
                var1 = {};
                var1.transitionState = var24;
                var1.context = var7;
                var1 = var2.bind(var4)(var1);
                var22 = var1.shown;
                var _closure2_slot9 = var22;
                var16 = var1.renderWebView;
                var1 = 17;
                var1 = var15[var1];
                var1 = var10.bind(var3)(var1);
                var17 = var1.bind(var3)();
                var _closure2_slot10 = var17;
                var1 = 12;
                var1 = var15[var1];
                var1 = var10.bind(var3)(var1);
                var1 = var1.radii;
                var26 = var1.lg;
                var _closure2_slot11 = var26;
                var8 = 18;
                var1 = var15[var8];
                var4 = var6.bind(var3)(var1);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    _fun110959: for (var _fun110959_ip = 0;;) switch (_fun110959_ip) {
                        case 0:
                            var0 = _closure2_slot7;
                            var0 = var0.isWindowLandscape;
                            var1 = 0;
                            if (var0) {
                                _fun110959_ip = 22;
                                continue _fun110959
                            }
                        case 18:
                            var1 = _closure2_slot11;
                        case 22:
                            var0 = _closure1_slot15;
                            var2 = 0;
                            if (!var0) {
                                _fun110959_ip = 47;
                                continue _fun110959
                            }
                        case 34:
                            var3 = _closure2_slot10;
                            var0 = var3.get;
                            var2 = var0.bind(var3)();
                        case 47:
                            var0 = _closure2_slot5;
                            var3 = var0.width;
                            var0 = var0.height;
                            var2 = var0 - var2;
                            var0 = _closure2_slot7;
                            var6 = var0.isWindowLandscape;
                            var0 = 0;
                            if (var6) {
                                _fun110959_ip = 89;
                                continue _fun110959
                            }
                        case 80:
                            var6 = _closure2_slot6;
                            var0 = var6.top;
                        case 89:
                            var2 = var2 - var0;
                            var6 = _closure2_slot9;
                            var0 = var6.get;
                            var0 = var0.bind(var6)();
                            if (var0) {
                                _fun110959_ip = 120;
                                continue _fun110959
                            }
                        case 109:
                            var0 = _closure2_slot5;
                            var13 = var0.height;
                            _fun110959_ip = 138;
                            continue _fun110959;
                        case 120:
                            var6 = _closure2_slot8;
                            var0 = var6.get;
                            var0 = var0.bind(var6)();
                            var13 = var0.y;
                        case 138:
                            var0 = function() { // Environment: var0
                                var0 = function() {
                                    _fun110961: for (var _fun110961_ip = 0;;) switch (_fun110961_ip) {
                                        case 0:
                                            var1 = arguments[0];
                                            var0 = undefined;
                                            if (!(var1 === var0)) {
                                                _fun110961_ip = 11;
                                                continue _fun110961
                                            }
                                        case 9:
                                            var1 = false;
                                        case 11:
                                            if (!var1) {
                                                _fun110961_ip = 60;
                                                continue _fun110961
                                            }
                                        case 14:
                                            var3 = _closure2_slot0;
                                            var4 = _closure1_slot0;
                                            var5 = _closure1_slot2;
                                            var2 = 19;
                                            var2 = var5[var2];
                                            var2 = var4.bind(var0)(var2);
                                            var2 = var2.TransitionStates;
                                            var2 = var2.YEETED;
                                            var1 = var3 === var2;
                                        case 60:
                                            if (!var1) {
                                                _fun110961_ip = 107;
                                                continue _fun110961
                                            }
                                        case 63:
                                            var2 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var1 = 18;
                                            var1 = var3[var1];
                                            var3 = var2.bind(var0)(var1);
                                            var2 = var3.runOnJS;
                                            var1 = _closure2_slot1;
                                            var1 = var2.bind(var3)(var1);
                                            var1 = var1.bind(var0)();
                                        case 107:
                                            return var0;
                                    }
                                };
                                var2 = {};
                                var1 = _closure2_slot0;
                                var2.transitionState = var1;
                                var6 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var4 = 19;
                                var4 = var7[var4];
                                var5 = undefined;
                                var4 = var6.bind(var5)(var4);
                                var4 = var4.TransitionStates;
                                var2.TransitionStates = var4;
                                var4 = 18;
                                var4 = var7[var4];
                                var4 = var6.bind(var5)(var4);
                                var4 = var4.runOnJS;
                                var2.runOnJS = var4;
                                var3 = _closure2_slot1;
                                var2.transitionCleanUp = var3;
                                var0.__closure = var2;
                                var2 = 2890456430056.0;
                                var0.__workletHash = var2;
                                var1 = _closure1_slot21;
                                var0.__initData = var1;
                                return var0;
                            };
                            var16 = undefined;
                            var12 = var0.bind(var16)();
                            var0 = _closure2_slot3;
                            var14 = 0;
                            if (!var0) {
                                _fun110959_ip = 218;
                                continue _fun110959
                            }
                        case 162:
                            var6 = _closure2_slot9;
                            var0 = var6.get;
                            var0 = var0.bind(var6)();
                            var14 = 0;
                            if (!var0) {
                                _fun110959_ip = 218;
                                continue _fun110959
                            }
                        case 180:
                            var6 = _closure2_slot8;
                            var0 = var6.get;
                            var0 = var0.bind(var6)();
                            var6 = var0.y;
                            var0 = _closure2_slot5;
                            var0 = var0.height;
                            var6 = var6 / var0;
                            var0 = 1;
                            var14 = var0 - var6;
                        case 218:
                            var0 = {};
                            var7 = _closure2_slot3;
                            var6 = 1;
                            if (!var7) {
                                _fun110959_ip = 334;
                                continue _fun110959
                            }
                        case 230:
                            var9 = _closure1_slot0;
                            var10 = _closure1_slot2;
                            var7 = 20;
                            var7 = var10[var7];
                            var11 = var9.bind(var16)(var7);
                            var10 = var11.withTiming;
                            var9 = _closure1_slot18;
                            var15 = _closure2_slot9;
                            var7 = var15.get;
                            var15 = var7.bind(var15)();
                            var17 = 'animate-always';
                            var7 = var17;
                            if (!var15) {
                                _fun110959_ip = 315;
                                continue _fun110959
                            }
                        case 284:
                            var18 = _closure2_slot8;
                            var15 = var18.get;
                            var15 = var15.bind(var18)();
                            var15 = var15.gestureActive;
                            var7 = var17;
                            if (!var15) {
                                _fun110959_ip = 315;
                                continue _fun110959
                            }
                        case 309:
                            var7 = 'animate-never';
                        case 315:
                            var23 = var11;
                            var22 = var14;
                            var21 = var9;
                            var20 = var7;
                            var19 = var12;
                            var6 = var23[var10](var22, var21, var20, var19, var18);
                        case 334:
                            var0.opacity = var6;
                            var7 = {};
                            var9 = _closure2_slot3;
                            var6 = 0;
                            if (var9) {
                                _fun110959_ip = 468;
                                continue _fun110959
                            }
                        case 349:
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot2;
                            var9 = 21;
                            var9 = var11[var9];
                            var11 = var10.bind(var16)(var9);
                            var10 = var11.withSpring;
                            var14 = _closure2_slot8;
                            var9 = var14.get;
                            var9 = var9.bind(var14)();
                            var9 = var9.gestureActive;
                            if (!var9) {
                                _fun110959_ip = 436;
                                continue _fun110959
                            }
                        case 396:
                            var14 = _closure2_slot0;
                            var15 = _closure1_slot0;
                            var17 = _closure1_slot2;
                            var9 = 19;
                            var9 = var17[var9];
                            var9 = var15.bind(var16)(var9);
                            var9 = var9.TransitionStates;
                            var9 = var9.YEETED;
                            if (!(var14 === var9)) {
                                _fun110959_ip = 442;
                                continue _fun110959
                            }
                        case 436:
                            var9 = _closure1_slot9;
                            _fun110959_ip = 446;
                            continue _fun110959;
                        case 442:
                            var9 = _closure1_slot8;
                        case 446:
                            var20 = 'animate-always';
                            var23 = var11;
                            var22 = var13;
                            var21 = var9;
                            var19 = var12;
                            var6 = var23[var10](var22, var21, var20, var19, var18);
                        case 468:
                            var7.translateY = var6;
                            var6 = new Array(1);
                            var6[0] = var7;
                            var0.transform = var6;
                            var6 = _closure2_slot7;
                            var6 = var6.isWindowLandscape;
                            var4 = 0;
                            if (var6) {
                                _fun110959_ip = 509;
                                continue _fun110959
                            }
                        case 500:
                            var5 = _closure2_slot6;
                            var4 = var5.top;
                        case 509:
                            var0.top = var4;
                            var0.width = var3;
                            var0.height = var2;
                            var0.borderTopStartRadius = var1;
                            var0.borderTopEndRadius = var1;
                            return var0;
                    }
                };
                var7 = {};
                var7.wrapperDimensions = var12;
                var7.lg = var26;
                var26 = _closure1_slot15;
                var7.IS_IOS = var26;
                var7.animatedKeyboardHeight = var17;
                var7.windowDimensions = var21;
                var7.safeArea = var25;
                var7.shown = var22;
                var7.wrapperOffset = var23;
                var7.transitionState = var24;
                var24 = 19;
                var24 = var15[var24];
                var24 = var6.bind(var3)(var24);
                var24 = var24.TransitionStates;
                var7.TransitionStates = var24;
                var24 = var15[var8];
                var24 = var6.bind(var3)(var24);
                var24 = var24.runOnJS;
                var7.runOnJS = var24;
                var7.transitionCleanUp = var20;
                var7.reduceMotion = var18;
                var18 = 20;
                var18 = var15[var18];
                var18 = var6.bind(var3)(var18);
                var18 = var18.withTiming;
                var7.withTiming = var18;
                var18 = _closure1_slot18;
                var7.REDUCED_MOTION_TIMING = var18;
                var20 = 21;
                var18 = var15[var20];
                var18 = var6.bind(var3)(var18);
                var18 = var18.withSpring;
                var7.withSpring = var18;
                var18 = _closure1_slot8;
                var7.ACTIVITY_LAYOUT_PHYSICS_GESTURE = var18;
                var18 = _closure1_slot9;
                var7.ACTIVITY_LAYOUT_PHYSICS_DEFAULT = var18;
                var1.__closure = var7;
                var7 = 14941136536014.0;
                var1.__workletHash = var7;
                var7 = _closure1_slot20;
                var1.__initData = var7;
                var1 = var2.bind(var4)(var1);
                var _closure2_slot12 = var1;
                var2 = var15[var8];
                var7 = var6.bind(var3)(var2);
                var4 = var7.useAnimatedStyle;
                var2 = function() {
                    _fun110962: for (var _fun110962_ip = 0;;) switch (_fun110962_ip) {
                        case 0:
                            var2 = _closure2_slot8;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var1 = var1.gestureActive;
                            if (var1) {
                                _fun110962_ip = 48;
                                continue _fun110962
                            }
                        case 25:
                            var2 = _closure2_slot9;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var4 = 0;
                            if (!var1) {
                                _fun110962_ip = 46;
                                continue _fun110962
                            }
                        case 43:
                            var4 = 1;
                        case 46:
                            _fun110962_ip = 86;
                            continue _fun110962;
                        case 48:
                            var2 = _closure2_slot8;
                            var1 = var2.get;
                            var1 = var1.bind(var2)();
                            var1 = var1.y;
                            var0 = _closure2_slot5;
                            var0 = var0.height;
                            var1 = var1 / var0;
                            var0 = 1;
                            var4 = var0 - var1;
                        case 86:
                            var0 = {};
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 21;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var2 = var3.withSpring;
                            var1 = _closure1_slot9;
                            var1 = var2.bind(var3)(var4, var1);
                            var0.opacity = var1;
                            return var0;
                    }
                };
                var18 = {};
                var18.wrapperOffset = var23;
                var18.shown = var22;
                var18.windowDimensions = var21;
                var20 = var15[var20];
                var20 = var6.bind(var3)(var20);
                var20 = var20.withSpring;
                var18.withSpring = var20;
                var20 = _closure1_slot9;
                var18.ACTIVITY_LAYOUT_PHYSICS_DEFAULT = var20;
                var2.__closure = var18;
                var18 = 8351375063373.0;
                var2.__workletHash = var18;
                var18 = _closure1_slot22;
                var2.__initData = var18;
                var20 = var4.bind(var7)(var2);
                var7 = _closure1_slot3;
                var4 = var7.useMemo;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = var19.wrapper;
                var2[1] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure2_slot4;
                    var2 = var0.wrapper;
                    var0 = new Array(2);
                    var0[0] = var2;
                    var1 = _closure2_slot12;
                    var0[1] = var1;
                    return var0;
                };
                var18 = var4.bind(var7)(var1, var2);
                var1 = var15[var8];
                var4 = var6.bind(var3)(var1);
                var2 = var4.useAnimatedStyle;
                var1 = function() {
                    _fun110964: for (var _fun110964_ip = 0;;) switch (_fun110964_ip) {
                        case 0:
                            var0 = _closure1_slot15;
                            var2 = 0;
                            if (!var0) {
                                _fun110964_ip = 28;
                                continue _fun110964
                            }
                        case 12:
                            var1 = _closure2_slot10;
                            var0 = var1.get;
                            var2 = var0.bind(var1)();
                        case 28:
                            var0 = {};
                            var1 = _closure2_slot7;
                            var3 = var1.width;
                            var0.width = var3;
                            var1 = var1.height;
                            var1 = var1 - var2;
                            var0.height = var1;
                            return var0;
                    }
                };
                var7 = {};
                var21 = _closure1_slot15;
                var7.IS_IOS = var21;
                var7.animatedKeyboardHeight = var17;
                var7.wrapperDimensions = var12;
                var1.__closure = var7;
                var7 = 10029372697959.0;
                var1.__workletHash = var7;
                var7 = _closure1_slot23;
                var1.__initData = var7;
                var12 = var2.bind(var4)(var1);
                var4 = _closure1_slot3;
                var2 = var4.useCallback;
                var1 = new Array(1);
                var1[0] = var5;
                var0 = function() { // Environment: var0
                    var1 = _closure2_slot2;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    return var0;
                };
                var17 = var2.bind(var4)(var0, var1);
                var2 = _closure1_slot17;
                var0 = 22;
                var0 = var15[var0];
                var0 = var6.bind(var3)(var0);
                var1 = var0.ThemeContextProvider;
                var0 = {};
                var4 = _closure1_slot14;
                var4 = var4.DARK;
                var0.theme = var4;
                var7 = _closure1_slot16;
                var4 = var15[var8];
                var4 = var10.bind(var3)(var4);
                var5 = var4.View;
                var4 = {};
                var21 = var19.shade;
                var19 = new Array(2);
                var19[0] = var21;
                var19[1] = var20;
                var4.style = var19;
                var19 = 'none';
                var4.pointerEvents = var19;
                var5 = var7.bind(var3)(var5, var4);
                var4 = new Array(2);
                var4[0] = var5;
                var7 = _closure1_slot17;
                var5 = 23;
                var5 = var15[var5];
                var5 = var6.bind(var3)(var5);
                var6 = var5.AccessibilityViewAnimated;
                var5 = {
                    'style': null,
                    'nativeID': 'activity-panel-focused-view',
                    'accessibilityViewIsModal': true
                };
                var5.style = var18;
                var5.onAccessibilityEscape = var17;
                var11 = _closure1_slot16;
                var8 = var15[var8];
                var8 = var10.bind(var3)(var8);
                var10 = var8.View;
                var8 = {};
                var8.style = var12;
                var12 = null;
                if (!var16) {
                    _fun110957_ip = 981;
                    continue _fun110957
                }
            case 973:
                var12 = null;
                if (!var14) {
                    _fun110957_ip = 981;
                    continue _fun110957
                }
            case 978:
                var12 = var13;
            case 981:
                var8.children = var12;
                var10 = var11.bind(var3)(var10, var8);
                var8 = new Array(2);
                var8[0] = var10;
                var8[1] = var9;
                var5.children = var8;
                var5 = var7.bind(var3)(var6, var5);
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot25 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var8 = var7[var0];
    var5 = arg3;
    var0 = undefined;
    var8 = var5.bind(var0)(var8);
    var _closure1_slot3 = var8;
    var5 = 1;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var14 = var5.StyleSheet;
    var5 = 2;
    var5 = var7[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var13.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.ActivityLayoutMode;
    var _closure1_slot7 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var9 = var5.ACTIVITY_LAYOUT_PHYSICS_GESTURE;
    var _closure1_slot8 = var9;
    var9 = var5.ACTIVITY_LAYOUT_PHYSICS_DEFAULT;
    var _closure1_slot9 = var9;
    var5 = var5.ActivityPanelModes;
    var _closure1_slot10 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var9 = var5.DEFAULT_PORTRAIT_SAFE_AREAS_CONFIG;
    var _closure1_slot11 = var9;
    var9 = var5.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
    var _closure1_slot12 = var9;
    var5 = var5.DEFAULT_LANDSCAPE_PILLERBOX_CONFIG;
    var _closure1_slot13 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.ThemeTypes;
    var _closure1_slot14 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.IS_IOS;
    var _closure1_slot15 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var9 = var5.jsx;
    var _closure1_slot16 = var9;
    var5 = var5.jsxs;
    var _closure1_slot17 = var5;
    var5 = {};
    var9 = 300;
    var5.duration = var9;
    var _closure1_slot18 = var5;
    var5 = 11;
    var5 = var7[var5];
    var10 = var6.bind(var0)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {
        'position': 'absolute',
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'overflow': 'hidden'
    };
    var12 = 12;
    var15 = var7[var12];
    var15 = var13.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var11.backgroundColor = var15;
    var5.wrapper = var11;
    var11 = {};
    var17 = var14.absoluteFillObject;
    var18 = var11;
    var14 = copyDataProperties(var18, var17);
    var12 = var7[var12];
    var12 = var13.bind(var0)(var12);
    var12 = var12.colors;
    var13 = var12.BLACK;
    var12 = 'backgroundColor';
    var11[var12] = var13;
    var5.shade = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot19 = var5;
    var5 = {};
    var9 = "function ActivityPanelFocusedViewTsx1(){const{wrapperDimensions,lg,IS_IOS,animatedKeyboardHeight,windowDimensions,safeArea,shown,wrapperOffset,transitionState,TransitionStates,runOnJS,transitionCleanUp,reduceMotion,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const topBorderRadius=!wrapperDimensions.isWindowLandscape?lg:0;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;const width=windowDimensions.width;const height=windowDimensions.height-keyboardHeight-(!wrapperDimensions.isWindowLandscape?safeArea.top:0);const y=shown.get()?wrapperOffset.get().y:windowDimensions.height;const transitionComplete=function(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}};const targetOpacity=reduceMotion&&shown.get()?1-wrapperOffset.get().y/windowDimensions.height:0;return{opacity:reduceMotion?withTiming(targetOpacity,REDUCED_MOTION_TIMING,shown.get()&&wrapperOffset.get().gestureActive?'animate-never':'animate-always',transitionComplete):1,transform:[{translateY:!reduceMotion?withSpring(y,wrapperOffset.get().gestureActive&&transitionState!==TransitionStates.YEETED?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',transitionComplete):0}],top:!wrapperDimensions.isWindowLandscape?safeArea.top:0,width:width,height:height,borderTopStartRadius:topBorderRadius,borderTopEndRadius:topBorderRadius};}";
    var5.code = var9;
    var _closure1_slot20 = var5;
    var5 = {};
    var9 = 'function ActivityPanelFocusedViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}';
    var5.code = var9;
    var _closure1_slot21 = var5;
    var5 = {};
    var9 = 'function ActivityPanelFocusedViewTsx3(){const{wrapperOffset,shown,windowDimensions,withSpring,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const opacity=function(){if(!wrapperOffset.get().gestureActive){return shown.get()?1:0;}return 1-wrapperOffset.get().y/windowDimensions.height;}();return{opacity:withSpring(opacity,ACTIVITY_LAYOUT_PHYSICS_DEFAULT)};}';
    var5.code = var9;
    var _closure1_slot22 = var5;
    var5 = {};
    var9 = 'function ActivityPanelFocusedViewTsx4(){const{IS_IOS,animatedKeyboardHeight,wrapperDimensions}=this.__closure;const keyboardHeight=IS_IOS?animatedKeyboardHeight.get():0;return{width:wrapperDimensions.width,height:wrapperDimensions.height-keyboardHeight};}';
    var5.code = var9;
    var _closure1_slot23 = var5;
    var5 = var8.memo;
    var4 = function(arg0) { // Environment: var4
        var1 = arg0;
        var11 = var1.transitionState;
        var _closure2_slot0 = var11;
        var10 = var1.transitionCleanUp;
        var _closure2_slot1 = var10;
        var3 = _closure1_slot0;
        var9 = _closure1_slot2;
        var2 = 14;
        var2 = var9[var2];
        var4 = undefined;
        var7 = var3.bind(var4)(var2);
        var6 = var7.useStateFromStoresObject;
        var2 = _closure1_slot6;
        var5 = new Array(2);
        var5[0] = var2;
        var2 = _closure1_slot5;
        var5[1] = var2;
        var3 = function() { // Environment: var0
            var2 = _closure1_slot6;
            var0 = var2.getConnectedActivityLocation;
            var4 = var0.bind(var2)();
            var0 = var2.getSelfEmbeddedActivityForLocation;
            var2 = var0.bind(var2)(var4);
            var5 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 24;
            var3 = var3[var0];
            var0 = undefined;
            var3 = var5.bind(var0)(var3);
            var0 = var3.getEmbeddedActivityLocationChannelId;
            var4 = var0.bind(var3)(var4);
            var0 = {};
            var3 = _closure1_slot5;
            var1 = var3.getChannel;
            var1 = var1.bind(var3)(var4);
            var0.channel = var1;
            var1 = null;
            var1 = var1 != var2;
            var0.hasActivity = var1;
            return var0;
        };
        var2 = new Array(0);
        var2 = var6.bind(var7)(var5, var3, var2);
        var6 = var2.channel;
        var _closure2_slot2 = var6;
        var8 = var2.hasActivity;
        var _closure2_slot3 = var8;
        var3 = _closure1_slot24;
        var2 = {};
        var7 = _closure1_slot1;
        var5 = 25;
        var5 = var9[var5];
        var5 = var7.bind(var4)(var5);
        var2.context = var5;
        var2 = var3.bind(var4)(var2);
        var5 = var2.portraitSafeAreasConfig;
        var _closure2_slot4 = var5;
        var4 = var2.landscapeSafeAreasConfig;
        var _closure2_slot5 = var4;
        var9 = _closure1_slot3;
        var7 = var9.useMemo;
        var3 = function() { // Environment: var0
            var3 = _closure1_slot16;
            var1 = _closure1_slot1;
            var2 = _closure1_slot2;
            var0 = 26;
            var0 = var2[var0];
            var2 = undefined;
            var1 = var1.bind(var2)(var0);
            var0 = {};
            var0 = var3.bind(var2)(var1, var0);
            return var0;
        };
        var2 = new Array(0);
        var7 = var7.bind(var9)(var3, var2);
        var _closure2_slot6 = var7;
        var12 = _closure1_slot3;
        var9 = var12.useCallback;
        var3 = function() { // Environment: var0
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 27;
            var2 = var2[var0];
            var0 = undefined;
            var3 = var3.bind(var0)(var2);
            var2 = var3.updateActivityPanelMode;
            var1 = _closure1_slot10;
            var1 = var1.PIP;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var2 = new Array(0);
        var9 = var9.bind(var12)(var3, var2);
        var _closure2_slot7 = var9;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(8);
        var1[0] = var11;
        var1[1] = var10;
        var1[2] = var9;
        var1[3] = var8;
        var1[4] = var7;
        var1[5] = var6;
        var1[6] = var5;
        var1[7] = var4;
        var0 = function() { // Environment: var0
            var3 = _closure1_slot16;
            var2 = _closure1_slot25;
            var1 = {};
            var0 = _closure2_slot0;
            var1.transitionState = var0;
            var0 = _closure2_slot1;
            var1.transitionCleanUp = var0;
            var0 = _closure2_slot7;
            var1.updateActivityPanelModeToPIP = var0;
            var0 = _closure2_slot3;
            var1.hasActivity = var0;
            var5 = _closure1_slot1;
            var9 = _closure1_slot2;
            var0 = 25;
            var4 = var9[var0];
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var1.context = var4;
            var4 = _closure2_slot6;
            var1.header = var4;
            var6 = _closure1_slot16;
            var4 = 28;
            var4 = var9[var4];
            var5 = var5.bind(var0)(var4);
            var4 = {};
            var9 = _closure2_slot2;
            var4.channel = var9;
            var8 = _closure1_slot7;
            var8 = var8.FOCUSED;
            var4.layoutMode = var8;
            var8 = _closure2_slot4;
            var4.portraitSafeAreasConfig = var8;
            var7 = _closure2_slot5;
            var4.landscapeSafeAreasConfig = var7;
            var4 = var6.bind(var0)(var5, var4);
            var1.children = var4;
            var0 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var4 = var5.bind(var8)(var4);
    var5 = 29;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/panel/native/ActivityPanelFocusedView.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.useBaseActivityPanelFocusedView = var3;
    var2.BaseActivityPanelFocusedView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 1372, 1371, 3458, 7985, 14276, 660, 11886, 33, 1297, 671, 1568, 566, 1464, 14271, 14221, 3721, 4027, 4097, 4081, 3161, 4066, 3083, 14273, 14282, 7983, 8127, 2]);