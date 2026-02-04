// modules/activities/panel/native/ActivityPanelPIPView.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var14 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var7;
    var3 = function() {
        var4 = _closure1_slot1;
        var2 = _closure1_slot2;
        var0 = 15;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var4.bind(var2)(var0);
        var2 = var0.bind(var2)();
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = _closure1_slot3;
        var3 = var4.useMemo;
        var5 = var2.right;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() { // Environment: var1
            _fun110353: for (var _fun110353_ip = 0;;) switch (_fun110353_ip) {
                case 0:
                    var0 = {};
                    var1 = {};
                    var2 = false;
                    var1.disable = var2;
                    var2 = global;
                    var5 = var2.Math;
                    var4 = var5.max;
                    var3 = _closure1_slot14;
                    var6 = _closure2_slot0;
                    var2 = null;
                    var8 = var2 == var6;
                    var6 = undefined;
                    if (var8) {
                        _fun110353_ip = 58;
                        continue _fun110353
                    }
                case 49:
                    var7 = _closure2_slot0;
                    var6 = var7.right;
                case 58:
                    var7 = var2 != var6;
                    var2 = 0;
                    if (!var7) {
                        _fun110353_ip = 70;
                        continue _fun110353
                    }
                case 67:
                    var2 = var6;
                case 70:
                    var2 = var4.bind(var5)(var3, var2);
                    var1.override = var2;
                    var0.right = var1;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.landscapeSafeAreasConfig = var1;
        return var0;
    };
    var _closure1_slot24 = var3;
    var1 = function arg0() {
        _fun110354: for (var _fun110354_ip = 0;;) switch (_fun110354_ip) {
            case 0:
                var1 = arg0;
                var17 = var1.children;
                var21 = var1.transitionState;
                var _closure2_slot0 = var21;
                var20 = var1.transitionCleanUp;
                var _closure2_slot1 = var20;
                var18 = var1.pipOrientationLockState;
                var13 = var1.hasActivity;
                var11 = var1.context;
                var1 = _closure1_slot20;
                var3 = undefined;
                var16 = var1.bind(var3)();
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var1 = 16;
                var1 = var10[var1];
                var6 = var5.bind(var3)(var1);
                var4 = var6.useStateFromStores;
                var1 = _closure1_slot5;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot5;
                    var0 = var0.useReducedMotion;
                    return var0;
                };
                var22 = var4.bind(var6)(var2, var1);
                var _closure2_slot2 = var22;
                var8 = _closure1_slot1;
                var1 = 17;
                var1 = var10[var1];
                var1 = var8.bind(var3)(var1);
                var27 = var1.bind(var3)();
                var _closure2_slot3 = var27;
                var1 = 15;
                var1 = var10[var1];
                var1 = var8.bind(var3)(var1);
                var26 = var1.bind(var3)();
                var _closure2_slot4 = var26;
                var2 = _closure1_slot3;
                var1 = var2.useContext;
                var1 = var1.bind(var2)(var11);
                var2 = var1.wrapperOffset;
                var _closure2_slot5 = var2;
                var12 = var1.setMode;
                var _closure2_slot6 = var12;
                var4 = var1.pipState;
                var _closure2_slot7 = var4;
                var25 = var1.pipAvoidanceSpecs;
                var _closure2_slot8 = var25;
                var9 = var1.wrapperDimensions;
                var1 = 18;
                var1 = var10[var1];
                var7 = var5.bind(var3)(var1);
                var6 = var7.useLockedWebView;
                var1 = {};
                var1.transitionState = var21;
                var1.context = var11;
                var1 = var6.bind(var7)(var1);
                var23 = var1.shown;
                var _closure2_slot9 = var23;
                var15 = var1.renderWebView;
                var11 = _closure1_slot3;
                var7 = var11.useEffect;
                var6 = new Array(1);
                var6[0] = var2;
                var1 = function() { // Environment: var0
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 19;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = _closure2_slot5;
                    var1 = {};
                    var4 = false;
                    var1.gestureActive = var4;
                    var1 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var1 = var7.bind(var11)(var1, var6);
                var6 = _closure1_slot6;
                var1 = function(arg0) { // Environment: var0
                    var1 = arg0;
                    var0 = var1.shouldDisableSafeAreas;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var24 = var6.bind(var3)(var1);
                var _closure2_slot10 = var24;
                var7 = 20;
                var1 = var10[var7];
                var11 = var5.bind(var3)(var1);
                var6 = var11.useAnimatedStyle;
                var1 = function() {
                    _fun110358: for (var _fun110358_ip = 0;;) switch (_fun110358_ip) {
                        case 0:
                            var1 = _closure2_slot7;
                            var0 = var1.get;
                            var0 = var0.bind(var1)();
                            var1 = var0.x;
                            var5 = var0.y;
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 21;
                            var0 = var3[var0];
                            var3 = undefined;
                            var4 = var2.bind(var3)(var0);
                            var2 = var4.getClampedPIPPosition;
                            var0 = {};
                            var0.pipX = var1;
                            var0.pipY = var5;
                            var5 = _closure1_slot10;
                            var5 = var5.width;
                            var0.width = var5;
                            var5 = _closure1_slot10;
                            var5 = var5.height;
                            var0.height = var5;
                            var5 = _closure2_slot3;
                            var0.windowDimensions = var5;
                            var5 = _closure2_slot4;
                            var0.safeArea = var5;
                            var6 = _closure2_slot8;
                            var5 = var6.get;
                            var5 = var5.bind(var6)();
                            var5 = var5.bottom;
                            var0.bottomAvoidanceRegion = var5;
                            var5 = var6.get;
                            var5 = var5.bind(var6)();
                            var5 = var5.top;
                            var0.topAvoidanceRegion = var5;
                            var6 = _closure2_slot5;
                            var5 = var6.get;
                            var5 = var5.bind(var6)();
                            var6 = var5.gestureActive;
                            var5 = undefined;
                            if (!var6) {
                                _fun110358_ip = 192;
                                continue _fun110358
                            }
                        case 179:
                            var7 = _closure2_slot5;
                            var6 = var7.get;
                            var5 = var6.bind(var7)();
                        case 192:
                            var0.positionOffset = var5;
                            var5 = _closure2_slot10;
                            var0.disableHorizontalSafeAreas = var5;
                            var0 = var2.bind(var4)(var0);
                            var8 = var0.x;
                            var12 = var0.y;
                            var2 = _closure2_slot9;
                            var0 = var2.get;
                            var0 = var0.bind(var2)();
                            if (var0) {
                                _fun110358_ip = 241;
                                continue _fun110358
                            }
                        case 237:
                            var0 = _closure2_slot2;
                        case 241:
                            if (var0) {
                                _fun110358_ip = 362;
                                continue _fun110358
                            }
                        case 244:
                            var0 = 0.5;
                            if (!(var1 < var0)) {
                                _fun110358_ip = 264;
                                continue _fun110358
                            }
                        case 258:
                            var0 = 0;
                            if (!(!(var1 >= var0))) {
                                _fun110358_ip = 311;
                                continue _fun110358
                            }
                        case 264:
                            var0 = _closure2_slot3;
                            var1 = var0.width;
                            var0 = global;
                            var5 = var0.Math;
                            var4 = var5.max;
                            var0 = _closure2_slot4;
                            var2 = var0.right;
                            var0 = _closure1_slot17;
                            var0 = var4.bind(var5)(var2, var0);
                            var0 = var1 + var0;
                            _fun110358_ip = 359;
                            continue _fun110358;
                        case 311:
                            var1 = _closure1_slot10;
                            var2 = var1.width;
                            var1 = global;
                            var6 = var1.Math;
                            var5 = var6.max;
                            var1 = _closure2_slot4;
                            var4 = var1.right;
                            var1 = _closure1_slot17;
                            var1 = var5.bind(var6)(var4, var1);
                            var1 = var2 + var1;
                            var0 = -var1;
                        case 359:
                            var8 = var0;
                        case 362:
                            var0 = function() { // Environment: var0
                                var0 = function() {
                                    _fun110360: for (var _fun110360_ip = 0;;) switch (_fun110360_ip) {
                                        case 0:
                                            var1 = arguments[0];
                                            var0 = undefined;
                                            if (!(var1 === var0)) {
                                                _fun110360_ip = 11;
                                                continue _fun110360
                                            }
                                        case 9:
                                            var1 = false;
                                        case 11:
                                            if (!var1) {
                                                _fun110360_ip = 60;
                                                continue _fun110360
                                            }
                                        case 14:
                                            var3 = _closure2_slot0;
                                            var4 = _closure1_slot0;
                                            var5 = _closure1_slot2;
                                            var2 = 22;
                                            var2 = var5[var2];
                                            var2 = var4.bind(var0)(var2);
                                            var2 = var2.TransitionStates;
                                            var2 = var2.YEETED;
                                            var1 = var3 === var2;
                                        case 60:
                                            if (!var1) {
                                                _fun110360_ip = 107;
                                                continue _fun110360
                                            }
                                        case 63:
                                            var2 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var1 = 20;
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
                                var4 = 22;
                                var4 = var7[var4];
                                var5 = undefined;
                                var4 = var6.bind(var5)(var4);
                                var4 = var4.TransitionStates;
                                var2.TransitionStates = var4;
                                var4 = 20;
                                var4 = var7[var4];
                                var4 = var6.bind(var5)(var4);
                                var4 = var4.runOnJS;
                                var2.runOnJS = var4;
                                var3 = _closure2_slot1;
                                var2.transitionCleanUp = var3;
                                var0.__closure = var2;
                                var2 = 5141562491372.0;
                                var0.__workletHash = var2;
                                var1 = _closure1_slot22;
                                var0.__initData = var1;
                                return var0;
                            };
                            var9 = var0.bind(var3)();
                            var0 = {};
                            var4 = _closure2_slot2;
                            var2 = 1;
                            var1 = var2;
                            if (!var4) {
                                _fun110358_ip = 459;
                                continue _fun110358
                            }
                        case 390:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 23;
                            var4 = var6[var4];
                            var7 = var5.bind(var3)(var4);
                            var6 = var7.withTiming;
                            var5 = _closure2_slot9;
                            var4 = var5.get;
                            var4 = var4.bind(var5)();
                            var5 = 0;
                            if (!var4) {
                                _fun110358_ip = 436;
                                continue _fun110358
                            }
                        case 433:
                            var5 = var2;
                        case 436:
                            var15 = _closure1_slot19;
                            var14 = 'animate-always';
                            var17 = var7;
                            var16 = var5;
                            var13 = var9;
                            var1 = var17[var6](var16, var15, var14, var13, var12);
                        case 459:
                            var0.opacity = var1;
                            var2 = {};
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var6 = 24;
                            var1 = var1[var6];
                            var5 = var4.bind(var3)(var1);
                            var4 = var5.withSpring;
                            var7 = _closure2_slot5;
                            var1 = var7.get;
                            var1 = var1.bind(var7)();
                            var1 = var1.gestureActive;
                            if (var1) {
                                _fun110358_ip = 518;
                                continue _fun110358
                            }
                        case 512:
                            var1 = _closure1_slot13;
                            _fun110358_ip = 522;
                            continue _fun110358;
                        case 518:
                            var1 = _closure1_slot12;
                        case 522:
                            var7 = 'animate-always';
                            var1 = var4.bind(var5)(var12, var1, var7);
                            var2.translateY = var1;
                            var1 = new Array(2);
                            var1[0] = var2;
                            var2 = {};
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot2;
                            var4 = var4[var6];
                            var6 = var5.bind(var3)(var4);
                            var5 = var6.withSpring;
                            var12 = _closure2_slot5;
                            var4 = var12.get;
                            var4 = var4.bind(var12)();
                            var4 = var4.gestureActive;
                            if (var4) {
                                _fun110358_ip = 600;
                                continue _fun110358
                            }
                        case 594:
                            var4 = _closure1_slot13;
                            _fun110358_ip = 604;
                            continue _fun110358;
                        case 600:
                            var4 = _closure1_slot12;
                        case 604:
                            var10 = _closure2_slot2;
                            var3 = undefined;
                            if (var10) {
                                _fun110358_ip = 616;
                                continue _fun110358
                            }
                        case 613:
                            var3 = var9;
                        case 616:
                            var17 = var6;
                            var16 = var8;
                            var15 = var4;
                            var14 = var7;
                            var13 = var3;
                            var3 = var17[var5](var16, var15, var14, var13, var12);
                            var2.translateX = var3;
                            var1[1] = var2;
                            var0.transform = var1;
                            return var0;
                    }
                };
                var19 = {};
                var19.pipState = var4;
                var28 = 21;
                var28 = var10[var28];
                var28 = var5.bind(var3)(var28);
                var28 = var28.getClampedPIPPosition;
                var19.getClampedPIPPosition = var28;
                var28 = _closure1_slot10;
                var19.ACTIVITY_PIP_SIZE = var28;
                var19.windowDimensions = var27;
                var19.safeArea = var26;
                var19.pipAvoidanceSpecs = var25;
                var19.wrapperOffset = var2;
                var19.disableHorizontalSafeAreas = var24;
                var19.shown = var23;
                var19.reduceMotion = var22;
                var22 = _closure1_slot17;
                var19.PIP_WINDOW_OFFSET = var22;
                var19.transitionState = var21;
                var21 = 22;
                var21 = var10[var21];
                var21 = var5.bind(var3)(var21);
                var21 = var21.TransitionStates;
                var19.TransitionStates = var21;
                var21 = var10[var7];
                var21 = var5.bind(var3)(var21);
                var21 = var21.runOnJS;
                var19.runOnJS = var21;
                var19.transitionCleanUp = var20;
                var20 = 23;
                var20 = var10[var20];
                var20 = var5.bind(var3)(var20);
                var20 = var20.withTiming;
                var19.withTiming = var20;
                var20 = _closure1_slot19;
                var19.REDUCED_MOTION_TIMING = var20;
                var20 = 24;
                var20 = var10[var20];
                var20 = var5.bind(var3)(var20);
                var20 = var20.withSpring;
                var19.withSpring = var20;
                var20 = _closure1_slot12;
                var19.ACTIVITY_LAYOUT_PHYSICS_GESTURE = var20;
                var20 = _closure1_slot13;
                var19.ACTIVITY_LAYOUT_PHYSICS_DEFAULT = var20;
                var1.__closure = var19;
                var19 = 8039199265160.0;
                var1.__workletHash = var19;
                var19 = _closure1_slot21;
                var1.__initData = var19;
                var11 = var6.bind(var11)(var1);
                var1 = 25;
                var1 = var10[var1];
                var6 = var8.bind(var3)(var1);
                var1 = {};
                var19 = _closure1_slot10;
                var19 = var19.width;
                var1.pipWidth = var19;
                var19 = _closure1_slot10;
                var19 = var19.height;
                var1.pipHeight = var19;
                var1.pipOrientationLockState = var18;
                var9 = var9.isLandscape;
                var1.isLandscape = var9;
                var1 = var6.bind(var3)(var1);
                var19 = var1.width;
                var _closure2_slot11 = var19;
                var1 = var1.height;
                var _closure2_slot12 = var1;
                var18 = _closure1_slot3;
                var9 = var18.useMemo;
                var6 = new Array(2);
                var6[0] = var19;
                var6[1] = var1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var2 = _closure2_slot11;
                    var0.width = var2;
                    var1 = _closure2_slot12;
                    var0.height = var1;
                    var1 = 'none';
                    var0.pointerEvents = var1;
                    return var0;
                };
                var18 = var9.bind(var18)(var1, var6);
                var9 = _closure1_slot3;
                var6 = var9.useCallback;
                var1 = function() {
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var0 = 20;
                    var2 = var2[var0];
                    var0 = undefined;
                    var4 = var3.bind(var0)(var2);
                    var3 = var4.runOnJS;
                    var2 = _closure2_slot6;
                    var2 = var3.bind(var4)(var2);
                    var1 = _closure1_slot11;
                    var1 = var1.PANEL;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = {};
                var19 = var10[var7];
                var19 = var5.bind(var3)(var19);
                var19 = var19.runOnJS;
                var0.runOnJS = var19;
                var0.setMode = var12;
                var19 = _closure1_slot11;
                var0.ActivityPanelModes = var19;
                var1.__closure = var0;
                var0 = 2951177166574.0;
                var1.__workletHash = var0;
                var0 = _closure1_slot23;
                var1.__initData = var0;
                var0 = new Array(1);
                var0[0] = var12;
                var9 = var6.bind(var9)(var1, var0);
                var6 = 26;
                var0 = var10[var6];
                var1 = var8.bind(var3)(var0);
                var0 = {};
                var12 = true;
                var0.panGestureEnabled = var12;
                var0.onTapGestureStart = var9;
                var6 = var10[var6];
                var6 = var5.bind(var3)(var6);
                var6 = var6.MorphablePanelModes;
                var6 = var6.PIP;
                var0.mode = var6;
                var0.pipState = var4;
                var0.wrapperOffset = var2;
                var2 = false;
                var0.disableHorizontalSafeAreas = var2;
                var9 = var1.bind(var3)(var0);
                var2 = _closure1_slot18;
                var0 = 27;
                var0 = var10[var0];
                var0 = var5.bind(var3)(var0);
                var1 = var0.ThemeContextProvider;
                var0 = {};
                var4 = _closure1_slot16;
                var4 = var4.DARK;
                var0.theme = var4;
                var6 = _closure1_slot18;
                var4 = 28;
                var4 = var10[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.GestureDetector;
                var4 = {};
                var4.gesture = var9;
                var9 = _closure1_slot18;
                var7 = var10[var7];
                var7 = var8.bind(var3)(var7);
                var8 = var7.View;
                var7 = {};
                var12 = var16.wrapper;
                var10 = new Array(2);
                var10[0] = var12;
                var10[1] = var11;
                var7.style = var10;
                var12 = _closure1_slot18;
                var11 = _closure1_slot4;
                var10 = {};
                var16 = var16.mask;
                var10.style = var16;
                var15 = !var15;
                if (var15) {
                    _fun110354_ip = 1007;
                    continue _fun110354
                }
            case 1004:
                var15 = !var13;
            case 1007:
                var13 = !var15;
                if (var15) {
                    _fun110354_ip = 1037;
                    continue _fun110354
                }
            case 1013:
                var16 = _closure1_slot18;
                var15 = _closure1_slot4;
                var14 = {};
                var14.style = var18;
                var14.children = var17;
                var13 = var16.bind(var3)(var15, var14);
            case 1037:
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
    var5 = var5.View;
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var14.bind(var0)(var5);
    var _closure1_slot5 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var14.bind(var0)(var5);
    var _closure1_slot6 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var14.bind(var0)(var5);
    var _closure1_slot7 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var14.bind(var0)(var5);
    var _closure1_slot8 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.ActivityLayoutMode;
    var _closure1_slot9 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var12 = var5.ACTIVITY_PIP_SIZE;
    var _closure1_slot10 = var12;
    var9 = var5.ActivityPanelModes;
    var _closure1_slot11 = var9;
    var9 = var5.ACTIVITY_LAYOUT_PHYSICS_GESTURE;
    var _closure1_slot12 = var9;
    var9 = var5.ACTIVITY_LAYOUT_PHYSICS_DEFAULT;
    var _closure1_slot13 = var9;
    var5 = var5.LANDSCAPE_IFRAME_HORIZONTAL_MARGIN;
    var _closure1_slot14 = var5;
    var5 = 8;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.DEFAULT_PORTRAIT_LETTERBOX_CONFIG;
    var _closure1_slot15 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.ThemeTypes;
    var _closure1_slot16 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.PIP_WINDOW_OFFSET;
    var _closure1_slot17 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.jsx;
    var _closure1_slot18 = var5;
    var5 = {};
    var9 = 300;
    var5.duration = var9;
    var _closure1_slot19 = var5;
    var5 = 12;
    var9 = var7[var5];
    var10 = var6.bind(var0)(var9);
    var9 = var10.generateBoxShadowStyle;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.EXPERIMENTAL_HIGH_ELEVATION_SHADOW_PARAMS;
    var15 = var9.bind(var10)(var5);
    var5 = 13;
    var5 = var7[var5];
    var10 = var6.bind(var0)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {};
    var13 = 14;
    var16 = var7[var13];
    var16 = var14.bind(var0)(var16);
    var16 = var16.radii;
    var16 = var16.lg;
    var11.borderRadius = var16;
    var19 = var11;
    var18 = var12;
    var16 = copyDataProperties(var19, var18);
    var19 = var11;
    var18 = var15;
    var15 = copyDataProperties(var19, var18);
    var5.wrapper = var11;
    var11 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'center',
        'overflow': 'hidden'
    };
    var15 = var7[var13];
    var15 = var14.bind(var0)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var11.borderRadius = var15;
    var13 = var7[var13];
    var13 = var14.bind(var0)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var11.backgroundColor = var13;
    var19 = var11;
    var18 = var12;
    var12 = copyDataProperties(var19, var18);
    var5.mask = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot20 = var5;
    var5 = {};
    var9 = "function ActivityPanelPIPViewTsx1(){const{pipState,getClampedPIPPosition,ACTIVITY_PIP_SIZE,windowDimensions,safeArea,pipAvoidanceSpecs,wrapperOffset,disableHorizontalSafeAreas,shown,reduceMotion,PIP_WINDOW_OFFSET,transitionState,TransitionStates,runOnJS,transitionCleanUp,withTiming,REDUCED_MOTION_TIMING,withSpring,ACTIVITY_LAYOUT_PHYSICS_GESTURE,ACTIVITY_LAYOUT_PHYSICS_DEFAULT}=this.__closure;const{x:pipX,y:pipY}=pipState.get();let{x:x,y:y}=getClampedPIPPosition({pipX:pipX,pipY:pipY,width:ACTIVITY_PIP_SIZE.width,height:ACTIVITY_PIP_SIZE.height,windowDimensions:windowDimensions,safeArea:safeArea,bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:wrapperOffset.get().gestureActive?wrapperOffset.get():undefined,disableHorizontalSafeAreas:disableHorizontalSafeAreas});if(!shown.get()&&!reduceMotion){if(pipX<0.5&&pipX>=0){x=-(ACTIVITY_PIP_SIZE.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET));}else{x=windowDimensions.width+Math.max(safeArea.right,PIP_WINDOW_OFFSET);}}const transitionComplete=function(finished=false){if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}};return{opacity:reduceMotion?withTiming(shown.get()?1:0,REDUCED_MOTION_TIMING,'animate-always',transitionComplete):1,transform:[{translateY:withSpring(y,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always')},{translateX:withSpring(x,wrapperOffset.get().gestureActive?ACTIVITY_LAYOUT_PHYSICS_GESTURE:ACTIVITY_LAYOUT_PHYSICS_DEFAULT,'animate-always',!reduceMotion?transitionComplete:undefined)}]};}";
    var5.code = var9;
    var _closure1_slot21 = var5;
    var5 = {};
    var9 = 'function ActivityPanelPIPViewTsx2(finished=false){const{transitionState,TransitionStates,runOnJS,transitionCleanUp}=this.__closure;if(finished&&transitionState===TransitionStates.YEETED){runOnJS(transitionCleanUp)();}}';
    var5.code = var9;
    var _closure1_slot22 = var5;
    var5 = {};
    var9 = 'function ActivityPanelPIPViewTsx3(){const{runOnJS,setMode,ActivityPanelModes}=this.__closure;runOnJS(setMode)(ActivityPanelModes.PANEL);}';
    var5.code = var9;
    var _closure1_slot23 = var5;
    var5 = var8.memo;
    var4 = function(arg0) { // Environment: var4
        _fun110363: for (var _fun110363_ip = 0;;) switch (_fun110363_ip) {
            case 0:
                var1 = arg0;
                var4 = var1.transitionState;
                var _closure2_slot0 = var4;
                var5 = var1.transitionCleanUp;
                var _closure2_slot1 = var5;
                var3 = undefined;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var8 = 16;
                var2 = var2[var8];
                var9 = var6.bind(var3)(var2);
                var7 = var9.useStateFromStoresObject;
                var2 = _closure1_slot8;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var0
                    var3 = _closure1_slot8;
                    var0 = var3.getConnectedActivityLocation;
                    var2 = var0.bind(var3)();
                    var0 = {};
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 29;
                    var4 = var4[var1];
                    var1 = undefined;
                    var4 = var5.bind(var1)(var4);
                    var1 = var4.getEmbeddedActivityLocationChannelId;
                    var1 = var1.bind(var4)(var2);
                    var0.channelId = var1;
                    var1 = var3.getSelfEmbeddedActivityForLocation;
                    var1 = var1.bind(var3)(var2);
                    var0.activity = var1;
                    return var0;
                };
                var2 = var7.bind(var9)(var6, var2);
                var6 = var2.channelId;
                var _closure2_slot2 = var6;
                var9 = var2.activity;
                var _closure2_slot3 = var9;
                var2 = null;
                var6 = var2 == var9;
                var2 = undefined;
                if (var6) {
                    _fun110363_ip = 132;
                    continue _fun110363
                }
            case 127:
                var2 = var9.applicationId;
            case 132:
                _closure2_slot4 = var2;
                var7 = _closure1_slot0;
                var2 = _closure1_slot2;
                var6 = var2[var8];
                var12 = var7.bind(var3)(var6);
                var11 = var12.useStateFromStores;
                var6 = _closure1_slot8;
                var10 = new Array(1);
                var10[0] = var6;
                var6 = function() { // Environment: var0
                    _fun110365: for (var _fun110365_ip = 0;;) switch (_fun110365_ip) {
                        case 0:
                            var2 = _closure2_slot4;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun110365_ip = 40;
                                continue _fun110365
                            }
                        case 18:
                            var3 = _closure1_slot8;
                            var2 = var3.getPipOrientationLockStateForApp;
                            var1 = _closure2_slot4;
                            var0 = var2.bind(var3)(var1);
                        case 40:
                            return var0;
                    }
                };
                var6 = var11.bind(var12)(var10, var6);
                _closure2_slot5 = var6;
                var2 = var2[var8];
                var10 = var7.bind(var3)(var2);
                var8 = var10.useStateFromStores;
                var2 = _closure1_slot7;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var0
                    var2 = _closure1_slot7;
                    var1 = var2.getChannel;
                    var0 = _closure2_slot2;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var8 = var8.bind(var10)(var7, var2);
                _closure2_slot6 = var8;
                var2 = _closure1_slot24;
                var2 = var2.bind(var3)();
                var7 = var2.landscapeSafeAreasConfig;
                _closure2_slot7 = var7;
                var3 = _closure1_slot3;
                var2 = var3.useMemo;
                var1 = new Array(6);
                var1[0] = var9;
                var1[1] = var8;
                var1[2] = var7;
                var1[3] = var6;
                var1[4] = var5;
                var1[5] = var4;
                var0 = function() { // Environment: var0
                    var3 = _closure1_slot18;
                    var2 = _closure1_slot25;
                    var1 = {};
                    var0 = _closure2_slot0;
                    var1.transitionState = var0;
                    var0 = _closure2_slot1;
                    var1.transitionCleanUp = var0;
                    var0 = _closure2_slot5;
                    var1.pipOrientationLockState = var0;
                    var4 = _closure2_slot3;
                    var0 = null;
                    var0 = var0 != var4;
                    var1.hasActivity = var0;
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var0 = 30;
                    var4 = var9[var0];
                    var0 = undefined;
                    var4 = var5.bind(var0)(var4);
                    var1.context = var4;
                    var6 = _closure1_slot18;
                    var4 = 31;
                    var4 = var9[var4];
                    var5 = var5.bind(var0)(var4);
                    var4 = {};
                    var9 = _closure2_slot6;
                    var4.channel = var9;
                    var9 = _closure1_slot9;
                    var9 = var9.PIP;
                    var4.layoutMode = var9;
                    var8 = _closure1_slot15;
                    var4.portraitSafeAreasConfig = var8;
                    var7 = _closure2_slot7;
                    var4.landscapeSafeAreasConfig = var7;
                    var4 = var6.bind(var0)(var5, var4);
                    var1.children = var4;
                    var0 = var3.bind(var0)(var2, var1);
                    return var0;
                };
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 32;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/activities/panel/native/ActivityPanelPIPView.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.useBaseActivityPanelPIPView = var3;
    var2.BaseActivityPanelPIPView = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 1298, 8079, 1372, 1371, 3457, 7917, 14208, 660, 11820, 33, 4886, 1297, 671, 1568, 566, 1464, 14203, 5301, 3720, 14209, 4028, 4097, 4081, 14210, 14211, 3159, 4961, 3081, 14205, 8058, 2]);