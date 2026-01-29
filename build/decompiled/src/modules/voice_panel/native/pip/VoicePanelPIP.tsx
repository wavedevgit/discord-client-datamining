// modules/voice_panel/native/pip/VoicePanelPIP.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var6 = metroImportAll;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var _closure1_slot3 = var5;
    var0 = function() { // Original name: VoicePanelPIP, environment: var1
        _fun112096: for (var _fun112096_ip = 0;;) switch (_fun112096_ip) {
            case 0:
                var4 = _closure1_slot5;
                var2 = var4.useContext;
                var8 = _closure1_slot1;
                var14 = _closure1_slot3;
                var1 = 12;
                var1 = var14[var1];
                var3 = undefined;
                var1 = var8.bind(var3)(var1);
                var1 = var2.bind(var4)(var1);
                var7 = var1.controlsSpecs;
                var2 = var1.setMode;
                var _closure2_slot0 = var2;
                var4 = var1.pipContainerRef;
                var13 = _closure1_slot0;
                var1 = 13;
                var1 = var14[var1];
                var5 = var13.bind(var3)(var1);
                var1 = var5.usePIPState;
                var5 = var1.bind(var5)();
                var _closure2_slot1 = var5;
                var6 = var5.mode;
                var1 = function(arg0) { // Original name: usePIPGesture, environment: var0
                    var3 = arg0;
                    var _closure3_slot0 = var3;
                    var5 = _closure1_slot5;
                    var4 = var5.useContext;
                    var6 = _closure1_slot1;
                    var12 = _closure1_slot3;
                    var0 = 12;
                    var0 = var12[var0];
                    var10 = undefined;
                    var0 = var6.bind(var10)(var0);
                    var4 = var4.bind(var5)(var0);
                    var17 = var4.controlsSpecs;
                    var _closure3_slot1 = var17;
                    var16 = var4.hideControls;
                    var _closure3_slot2 = var16;
                    var24 = var4.pipAvoidanceSpecs;
                    var _closure3_slot3 = var24;
                    var20 = var4.safeArea;
                    var _closure3_slot4 = var20;
                    var0 = var4.setFocused;
                    var _closure3_slot5 = var0;
                    var11 = var4.setMode;
                    var _closure3_slot6 = var11;
                    var15 = var4.showControls;
                    var _closure3_slot7 = var15;
                    var19 = var4.windowDimensions;
                    var _closure3_slot8 = var19;
                    var18 = var4.wrapperDimensions;
                    var _closure3_slot9 = var18;
                    var5 = var4.wrapperOffset;
                    var _closure3_slot10 = var5;
                    var4 = var4.channelId;
                    var _closure3_slot11 = var4;
                    var9 = _closure1_slot0;
                    var4 = 13;
                    var4 = var12[var4];
                    var6 = var9.bind(var10)(var4);
                    var4 = var6.usePIPState;
                    var4 = var4.bind(var6)();
                    var _closure3_slot12 = var4;
                    var6 = 14;
                    var7 = var12[var6];
                    var14 = var9.bind(var10)(var7);
                    var8 = var14.useSharedValue;
                    var13 = 0;
                    var7 = {
                        'x': 0,
                        'y': 0,
                        'absoluteX': 0,
                        'absoluteY': 0,
                        'active': false,
                        'pressed': false
                    };
                    var21 = var8.bind(var14)(var7);
                    var _closure3_slot13 = var21;
                    var7 = var12[var6];
                    var8 = var9.bind(var10)(var7);
                    var7 = var8.useSharedValue;
                    var23 = var7.bind(var8)(var13);
                    var _closure3_slot14 = var23;
                    var14 = _closure1_slot5;
                    var13 = var14.useEffect;
                    var8 = new Array(1);
                    var8[0] = var23;
                    var7 = function() { // Environment: var1
                        var1 = global;
                        var4 = var1.setTimeout;
                        var3 = undefined;
                        var2 = function() { // Environment: var0
                            var2 = _closure3_slot14;
                            var1 = var2.set;
                            var0 = 1;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var1 = 200;
                        var1 = var4.bind(var3)(var2, var1);
                        var _closure4_slot0 = var1;
                        var0 = function() { // Environment: var0
                            var0 = global;
                            var2 = var0.clearTimeout;
                            var1 = _closure4_slot0;
                            var0 = undefined;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        return var0;
                    };
                    var7 = var13.bind(var14)(var7, var8);
                    var7 = var12[var6];
                    var13 = var9.bind(var10)(var7);
                    var8 = var13.useAnimatedStyle;
                    var7 = function() { // Original name: B, environment: var1
                        _fun112101: for (var _fun112101_ip = 0;;) switch (_fun112101_ip) {
                            case 0:
                                var0 = _closure3_slot12;
                                var4 = var0.width;
                                var1 = var0.showSecondaryPIP;
                                var0 = _closure3_slot12;
                                if (var1) {
                                    _fun112101_ip = 32;
                                    continue _fun112101
                                }
                            case 25:
                                var3 = var0.height;
                                _fun112101_ip = 38;
                                continue _fun112101;
                            case 32:
                                var3 = var0.containerHeight;
                            case 38:
                                var2 = _closure1_slot0;
                                var0 = _closure1_slot3;
                                var6 = 15;
                                var0 = var0[var6];
                                var5 = undefined;
                                var7 = var2.bind(var5)(var0);
                                var2 = var7.getClampedPIPPosition;
                                var0 = {};
                                var10 = _closure3_slot9;
                                var9 = var10.get;
                                var9 = var9.bind(var10)();
                                var9 = var9.pipX;
                                var0.pipX = var9;
                                var9 = var10.get;
                                var9 = var9.bind(var10)();
                                var9 = var9.pipY;
                                var0.pipY = var9;
                                var0.width = var4;
                                var0.height = var3;
                                var10 = _closure3_slot8;
                                var9 = var10.get;
                                var9 = var9.bind(var10)();
                                var0.windowDimensions = var9;
                                var10 = _closure3_slot4;
                                var9 = var10.get;
                                var9 = var9.bind(var10)();
                                var0.safeArea = var9;
                                var10 = _closure3_slot3;
                                var9 = var10.get;
                                var9 = var9.bind(var10)();
                                var9 = var9.bottom;
                                var0.bottomAvoidanceRegion = var9;
                                var9 = var10.get;
                                var9 = var9.bind(var10)();
                                var9 = var9.top;
                                var0.topAvoidanceRegion = var9;
                                var10 = _closure3_slot13;
                                var9 = var10.get;
                                var9 = var9.bind(var10)();
                                var10 = var9.active;
                                var9 = undefined;
                                if (!var10) {
                                    _fun112101_ip = 238;
                                    continue _fun112101
                                }
                            case 225:
                                var11 = _closure3_slot13;
                                var10 = var11.get;
                                var9 = var10.bind(var11)();
                            case 238:
                                var0.positionOffset = var9;
                                var0 = var2.bind(var7)(var0);
                                var13 = var0.x;
                                var11 = var0.y;
                                var0 = {};
                                var0.width = var4;
                                var0.height = var3;
                                var7 = _closure3_slot14;
                                var2 = var7.get;
                                var2 = var2.bind(var7)();
                                var0.opacity = var2;
                                var7 = {};
                                var9 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var12 = 11;
                                var2 = var2[var12];
                                var10 = var9.bind(var5)(var2);
                                var9 = var10.withSpring;
                                var14 = _closure3_slot13;
                                var2 = var14.get;
                                var2 = var2.bind(var14)();
                                var2 = var2.active;
                                if (var2) {
                                    _fun112101_ip = 340;
                                    continue _fun112101
                                }
                            case 334:
                                var2 = _closure1_slot17;
                                _fun112101_ip = 344;
                                continue _fun112101;
                            case 340:
                                var2 = _closure1_slot10;
                            case 344:
                                var2 = var9.bind(var10)(var13, var2);
                                var7.translateX = var2;
                                var2 = new Array(2);
                                var2[0] = var7;
                                var7 = {};
                                var10 = _closure1_slot0;
                                var9 = _closure1_slot3;
                                var9 = var9[var12];
                                var10 = var10.bind(var5)(var9);
                                var9 = var10.withSpring;
                                var12 = _closure3_slot13;
                                var8 = var12.get;
                                var8 = var8.bind(var12)();
                                var8 = var8.active;
                                if (var8) {
                                    _fun112101_ip = 415;
                                    continue _fun112101
                                }
                            case 409:
                                var8 = _closure1_slot17;
                                _fun112101_ip = 419;
                                continue _fun112101;
                            case 415:
                                var8 = _closure1_slot10;
                            case 419:
                                var8 = var9.bind(var10)(var11, var8);
                                var7.translateY = var8;
                                var2[1] = var7;
                                var0.transform = var2;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot3;
                                var1 = var1[var6];
                                var2 = var2.bind(var5)(var1);
                                var1 = var2.getVoicePanelPIPBorderRadius;
                                var1 = var1.bind(var2)(var4, var3);
                                var0.borderRadius = var1;
                                return var0;
                        }
                    };
                    var14 = {};
                    var14.pipState = var4;
                    var22 = 15;
                    var25 = var12[var22];
                    var25 = var9.bind(var10)(var25);
                    var25 = var25.getClampedPIPPosition;
                    var14.getClampedPIPPosition = var25;
                    var14.wrapperDimensions = var18;
                    var14.windowDimensions = var19;
                    var14.safeArea = var20;
                    var14.pipAvoidanceSpecs = var24;
                    var14.initialGestureOffset = var21;
                    var14.opacity = var23;
                    var23 = 11;
                    var23 = var12[var23];
                    var23 = var9.bind(var10)(var23);
                    var23 = var23.withSpring;
                    var14.withSpring = var23;
                    var23 = _closure1_slot10;
                    var14.DRAWER_SPRING_PHYSICS = var23;
                    var23 = _closure1_slot17;
                    var14.LAYOUT_PHYSICS = var23;
                    var23 = var12[var22];
                    var23 = var9.bind(var10)(var23);
                    var23 = var23.getVoicePanelPIPBorderRadius;
                    var14.getVoicePanelPIPBorderRadius = var23;
                    var7.__closure = var14;
                    var14 = 6729444248940.0;
                    var7.__workletHash = var14;
                    var14 = _closure1_slot21;
                    var7.__initData = var14;
                    var8 = var8.bind(var13)(var7);
                    var6 = var12[var6];
                    var13 = var9.bind(var10)(var6);
                    var7 = var13.useAnimatedStyle;
                    var6 = function() { // Original name: U, environment: var1
                        var0 = _closure3_slot12;
                        var4 = var0.width;
                        var3 = var0.height;
                        var0 = {};
                        var0.width = var4;
                        var0.height = var3;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 15;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var1 = var2.getVoicePanelPIPBorderRadius;
                        var1 = var1.bind(var2)(var4, var3);
                        var0.borderRadius = var1;
                        return var0;
                    };
                    var14 = {};
                    var14.pipState = var4;
                    var22 = var12[var22];
                    var22 = var9.bind(var10)(var22);
                    var22 = var22.getVoicePanelPIPBorderRadius;
                    var14.getVoicePanelPIPBorderRadius = var22;
                    var6.__closure = var14;
                    var14 = 1914976453427.0;
                    var6.__workletHash = var14;
                    var14 = _closure1_slot22;
                    var6.__initData = var14;
                    var7 = var7.bind(var13)(var6);
                    var14 = _closure1_slot5;
                    var13 = var14.useMemo;
                    var22 = var4.width;
                    var6 = new Array(2);
                    var6[0] = var22;
                    var4 = var4.height;
                    var6[1] = var4;
                    var4 = function() { // Environment: var1
                        var0 = _closure1_slot20;
                        var2 = var0.pipContentWrapper;
                        var0 = new Array(3);
                        var0[0] = var2;
                        var2 = {};
                        var3 = _closure3_slot12;
                        var4 = var3.width;
                        var2.width = var4;
                        var4 = var3.height;
                        var2.height = var4;
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot3;
                        var4 = 15;
                        var5 = var5[var4];
                        var4 = undefined;
                        var6 = var6.bind(var4)(var5);
                        var5 = var6.getVoicePanelPIPBorderRadius;
                        var4 = var3.width;
                        var3 = var3.height;
                        var3 = var5.bind(var6)(var4, var3);
                        var2.borderRadius = var3;
                        var0[1] = var2;
                        var1 = _closure1_slot20;
                        var1 = var1.inAppElevationShadow;
                        var0[2] = var1;
                        return var0;
                    };
                    var4 = var13.bind(var14)(var4, var6);
                    var14 = _closure1_slot5;
                    var13 = var14.useCallback;
                    var6 = new Array(5);
                    var6[0] = var21;
                    var6[1] = var20;
                    var6[2] = var19;
                    var6[3] = var18;
                    var6[4] = var5;
                    var5 = function() { // Environment: var1
                        var12 = _closure1_slot0;
                        var9 = _closure1_slot3;
                        var11 = 16;
                        var1 = var9[var11];
                        var8 = undefined;
                        var1 = var12.bind(var8)(var1);
                        var2 = var1.Gesture;
                        var1 = var2.Pan;
                        var2 = var1.bind(var2)();
                        var1 = var2.enabled;
                        var4 = true;
                        var2 = var1.bind(var2)(var4);
                        var1 = var2.manualActivation;
                        var4 = var1.bind(var2)(var4);
                        var2 = var4.maxPointers;
                        var1 = 1;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.shouldCancelWhenOutside;
                        var1 = false;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.onBegin;
                        var1 = function(arg0) { // Original name: c, environment: var0
                            var0 = arg0;
                            var4 = var0.absoluteX;
                            var3 = var0.absoluteY;
                            var2 = _closure3_slot13;
                            var1 = var2.set;
                            var0 = {
                                'x': 0,
                                'y': 0,
                                'absoluteX': null,
                                'absoluteY': null,
                                'active': false,
                                'pressed': true
                            };
                            var0.absoluteX = var4;
                            var0.absoluteY = var3;
                            var0 = var1.bind(var2)(var0);
                            var0 = undefined;
                            return var0;
                        };
                        var6 = {};
                        var5 = _closure3_slot13;
                        var6.initialGestureOffset = var5;
                        var1.__closure = var6;
                        var6 = 4684366251999.0;
                        var1.__workletHash = var6;
                        var6 = _closure1_slot29;
                        var1.__initData = var6;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.onTouchesUp;
                        var1 = function() { // Original name: l, environment: var0
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = _closure3_slot13;
                            var1 = {
                                'active': false,
                                'pressed': false
                            };
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var10 = {};
                        var7 = _closure1_slot1;
                        var6 = 17;
                        var13 = var9[var6];
                        var13 = var7.bind(var8)(var13);
                        var10.updateSharedValueIfChanged = var13;
                        var10.initialGestureOffset = var5;
                        var1.__closure = var10;
                        var10 = 11771025649835.0;
                        var1.__workletHash = var10;
                        var10 = _closure1_slot28;
                        var1.__initData = var10;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.onTouchesMove;
                        var1 = function(arg0, arg1) { // Original name: u, environment: var0
                            _fun112107: for (var _fun112107_ip = 0;;) switch (_fun112107_ip) {
                                case 0:
                                    var4 = arg0;
                                    var3 = arg1;
                                    var5 = var4.state;
                                    var6 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var0 = 16;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var2 = var6.bind(var0)(var2);
                                    var2 = var2.State;
                                    var2 = var2.BEGAN;
                                    if (!(var5 === var2)) {
                                        _fun112107_ip = 345;
                                        continue _fun112107
                                    }
                                case 55:
                                    var6 = _closure3_slot13;
                                    var5 = var6.get;
                                    var5 = var5.bind(var6)();
                                    var5 = var5.active;
                                    if (var5) {
                                        _fun112107_ip = 345;
                                        continue _fun112107
                                    }
                                case 83:
                                    var5 = var4.changedTouches;
                                    var4 = 0;
                                    var4 = var5[var4];
                                    var7 = var4.absoluteY;
                                    var8 = var4.absoluteX;
                                    var5 = global;
                                    var9 = var5.Math;
                                    var6 = var9.abs;
                                    var10 = _closure3_slot13;
                                    var4 = var10.get;
                                    var4 = var4.bind(var10)();
                                    var4 = var4.absoluteX;
                                    var4 = var4 - var8;
                                    var4 = var6.bind(var9)(var4);
                                    var6 = 10;
                                    var4 = var4 > var6;
                                    if (var4) {
                                        _fun112107_ip = 203;
                                        continue _fun112107
                                    }
                                case 159:
                                    var10 = var5.Math;
                                    var9 = var10.abs;
                                    var11 = _closure3_slot13;
                                    var5 = var11.get;
                                    var5 = var5.bind(var11)();
                                    var5 = var5.absoluteY;
                                    var5 = var5 - var7;
                                    var5 = var9.bind(var10)(var5);
                                    var4 = var5 > var6;
                                case 203:
                                    if (!var4) {
                                        _fun112107_ip = 345;
                                        continue _fun112107
                                    }
                                case 209:
                                    var6 = _closure3_slot13;
                                    var5 = var6.set;
                                    var4 = {
                                        'x': 0,
                                        'y': 0,
                                        'absoluteX': null,
                                        'absoluteY': null,
                                        'pressed': true,
                                        'active': true
                                    };
                                    var4.absoluteX = var8;
                                    var4.absoluteY = var7;
                                    var4 = var5.bind(var6)(var4);
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot3;
                                    var6 = 17;
                                    var6 = var5[var6];
                                    var7 = var4.bind(var0)(var6);
                                    var6 = _closure3_slot10;
                                    var2 = {
                                        'gestureActive': true,
                                        'x': 0,
                                        'y': 0
                                    };
                                    var2 = var7.bind(var0)(var6, var2);
                                    var2 = var3.activate;
                                    var2 = var2.bind(var3)();
                                    var2 = _closure1_slot0;
                                    var1 = 14;
                                    var1 = var5[var1];
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.runOnJS;
                                    var1 = 18;
                                    var1 = var5[var1];
                                    var1 = var4.bind(var0)(var1);
                                    var1 = var2.bind(var3)(var1);
                                    var1 = var1.bind(var0)();
                                case 345:
                                    return var0;
                            }
                        };
                        var10 = {};
                        var11 = var9[var11];
                        var11 = var12.bind(var8)(var11);
                        var11 = var11.State;
                        var10.State = var11;
                        var10.initialGestureOffset = var5;
                        var11 = 10;
                        var10.MIN_GESTURE_START = var11;
                        var11 = var9[var6];
                        var11 = var7.bind(var8)(var11);
                        var10.updateSharedValueIfChanged = var11;
                        var13 = _closure3_slot10;
                        var10.wrapperOffset = var13;
                        var11 = 14;
                        var15 = var9[var11];
                        var15 = var12.bind(var8)(var15);
                        var15 = var15.runOnJS;
                        var10.runOnJS = var15;
                        var15 = 18;
                        var15 = var9[var15];
                        var15 = var7.bind(var8)(var15);
                        var10.triggerIOSHaptic = var15;
                        var1.__closure = var10;
                        var10 = 16714994610987.0;
                        var1.__workletHash = var10;
                        var10 = _closure1_slot27;
                        var1.__initData = var10;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.onChange;
                        var1 = function(arg0) { // Original name: s, environment: var0
                            var0 = arg0;
                            var6 = var0.absoluteX;
                            var5 = var0.absoluteY;
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = _closure3_slot13;
                            var1 = {};
                            var4 = var2.get;
                            var4 = var4.bind(var2)();
                            var4 = var4.absoluteX;
                            var4 = var6 - var4;
                            var1.x = var4;
                            var4 = var2.get;
                            var4 = var4.bind(var2)();
                            var4 = var4.absoluteY;
                            var4 = var5 - var4;
                            var1.y = var4;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var10 = {};
                        var15 = var9[var6];
                        var15 = var7.bind(var8)(var15);
                        var10.updateSharedValueIfChanged = var15;
                        var10.initialGestureOffset = var5;
                        var1.__closure = var10;
                        var10 = 7822444262980.0;
                        var1.__workletHash = var10;
                        var10 = _closure1_slot26;
                        var1.__initData = var10;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.onEnd;
                        var1 = function(arg0) { // Original name: o, environment: var0
                            var0 = arg0;
                            var10 = var0.velocityX;
                            var9 = var0.velocityY;
                            var8 = var0.absoluteX;
                            var1 = var0.absoluteY;
                            var2 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var0 = 15;
                            var4 = var5[var0];
                            var0 = undefined;
                            var7 = var2.bind(var0)(var4);
                            var6 = var7.calculatePIPPositionFromVelocity;
                            var4 = {};
                            var4.velocityX = var10;
                            var4.velocityY = var9;
                            var4.absoluteX = var8;
                            var4.absoluteY = var1;
                            var9 = _closure3_slot8;
                            var8 = var9.get;
                            var8 = var8.bind(var9)();
                            var4.windowDimensions = var8;
                            var9 = _closure3_slot4;
                            var8 = var9.get;
                            var8 = var8.bind(var9)();
                            var4.safeArea = var8;
                            var4 = var6.bind(var7)(var4);
                            var10 = var4.pipX;
                            var9 = var4.pipY;
                            var4 = _closure1_slot1;
                            var3 = 17;
                            var6 = var5[var3];
                            var8 = var4.bind(var0)(var6);
                            var7 = _closure3_slot9;
                            var6 = {};
                            var6.pipX = var10;
                            var6.pipY = var9;
                            var6 = var8.bind(var0)(var7, var6);
                            var3 = var5[var3];
                            var6 = var4.bind(var0)(var3);
                            var3 = _closure3_slot10;
                            var1 = {};
                            var7 = false;
                            var1.gestureActive = var7;
                            var1 = var6.bind(var0)(var3, var1);
                            var1 = 14;
                            var1 = var5[var1];
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.runOnJS;
                            var1 = 19;
                            var1 = var5[var1];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.updateSourceTrackingView;
                            var1 = var2.bind(var3)(var1);
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var10 = {};
                        var15 = 15;
                        var15 = var9[var15];
                        var15 = var12.bind(var8)(var15);
                        var15 = var15.calculatePIPPositionFromVelocity;
                        var10.calculatePIPPositionFromVelocity = var15;
                        var15 = _closure3_slot8;
                        var10.windowDimensions = var15;
                        var15 = _closure3_slot4;
                        var10.safeArea = var15;
                        var15 = var9[var6];
                        var15 = var7.bind(var8)(var15);
                        var10.updateSharedValueIfChanged = var15;
                        var14 = _closure3_slot9;
                        var10.wrapperDimensions = var14;
                        var10.wrapperOffset = var13;
                        var11 = var9[var11];
                        var11 = var12.bind(var8)(var11);
                        var11 = var11.runOnJS;
                        var10.runOnJS = var11;
                        var11 = 19;
                        var11 = var9[var11];
                        var11 = var7.bind(var8)(var11);
                        var11 = var11.updateSourceTrackingView;
                        var10.updateSourceTrackingView = var11;
                        var1.__closure = var10;
                        var10 = 11935428351350.0;
                        var1.__workletHash = var10;
                        var10 = _closure1_slot25;
                        var1.__initData = var10;
                        var4 = var2.bind(var4)(var1);
                        var2 = var4.onTouchesCancelled;
                        var1 = function() { // Original name: n, environment: var0
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = _closure3_slot13;
                            var1 = {
                                'active': false,
                                'pressed': false
                            };
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var10 = {};
                        var11 = var9[var6];
                        var11 = var7.bind(var8)(var11);
                        var10.updateSharedValueIfChanged = var11;
                        var10.initialGestureOffset = var5;
                        var1.__closure = var10;
                        var10 = 4606005866023.0;
                        var1.__workletHash = var10;
                        var10 = _closure1_slot24;
                        var1.__initData = var10;
                        var2 = var2.bind(var4)(var1);
                        var1 = var2.onFinalize;
                        var0 = function() { // Original name: t, environment: var0
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot3;
                            var0 = 17;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = _closure3_slot13;
                            var1 = {
                                'active': false,
                                'pressed': false
                            };
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var4 = {};
                        var6 = var9[var6];
                        var6 = var7.bind(var8)(var6);
                        var4.updateSharedValueIfChanged = var6;
                        var4.initialGestureOffset = var5;
                        var0.__closure = var4;
                        var4 = 5443656412422.0;
                        var0.__workletHash = var4;
                        var3 = _closure1_slot23;
                        var0.__initData = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var6 = var13.bind(var14)(var5, var6);
                    var _closure3_slot15 = var6;
                    var14 = _closure1_slot5;
                    var13 = var14.useMemo;
                    var5 = new Array(7);
                    var5[0] = var17;
                    var5[1] = var16;
                    var5[2] = var0;
                    var5[3] = var15;
                    var5[4] = var3;
                    var5[5] = var11;
                    var5[6] = var6;
                    var3 = function() { // Environment: var1
                        var11 = _closure1_slot0;
                        var12 = _closure1_slot3;
                        var6 = 16;
                        var0 = var12[var6];
                        var5 = undefined;
                        var0 = var11.bind(var5)(var0);
                        var4 = var0.Gesture;
                        var3 = var4.Exclusive;
                        var0 = var12[var6];
                        var0 = var11.bind(var5)(var0);
                        var2 = var0.Gesture;
                        var0 = var2.Tap;
                        var9 = var0.bind(var2)();
                        var7 = var9.enabled;
                        var13 = _closure3_slot0;
                        var2 = _closure1_slot13;
                        var2 = var2.IN_APP;
                        var2 = var13 !== var2;
                        var7 = var7.bind(var9)(var2);
                        var2 = var7.maxDistance;
                        var9 = 30;
                        var14 = var2.bind(var7)(var9);
                        var7 = var14.onStart;
                        var2 = function() { // Original name: o, environment: var1
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.runOnJS;
                            var1 = _closure3_slot5;
                            var2 = var2.bind(var3)(var1);
                            var1 = null;
                            var1 = var2.bind(var0)(var1);
                            return var0;
                        };
                        var15 = {};
                        var10 = 14;
                        var16 = var12[var10];
                        var16 = var11.bind(var5)(var16);
                        var16 = var16.runOnJS;
                        var15.runOnJS = var16;
                        var16 = _closure3_slot5;
                        var15.setFocused = var16;
                        var2.__closure = var15;
                        var15 = 10703348418884.0;
                        var2.__workletHash = var15;
                        var15 = _closure1_slot30;
                        var2.__initData = var15;
                        var14 = var7.bind(var14)(var2);
                        var7 = var14.numberOfTaps;
                        var2 = 2;
                        var2 = var7.bind(var14)(var2);
                        var6 = var12[var6];
                        var6 = var11.bind(var5)(var6);
                        var7 = var6.Gesture;
                        var6 = var7.Tap;
                        var14 = var6.bind(var7)();
                        var7 = var14.enabled;
                        var6 = true;
                        var7 = var7.bind(var14)(var6);
                        var6 = var7.maxDistance;
                        var7 = var6.bind(var7)(var9);
                        var6 = var7.onStart;
                        var1 = function() { // Original name: n, environment: var1
                            _fun112114: for (var _fun112114_ip = 0;;) switch (_fun112114_ip) {
                                case 0:
                                    var3 = _closure3_slot0;
                                    var2 = _closure1_slot13;
                                    var2 = var2.IN_APP;
                                    if (!(var3 !== var2)) {
                                        _fun112114_ip = 140;
                                        continue _fun112114
                                    }
                                case 24:
                                    var3 = _closure3_slot1;
                                    var2 = var3.get;
                                    var2 = var2.bind(var3)();
                                    var3 = var2.mode;
                                    var2 = _closure1_slot12;
                                    var2 = var2.HIDDEN;
                                    if (!(var3 !== var2)) {
                                        _fun112114_ip = 98;
                                        continue _fun112114
                                    }
                                case 56:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var2 = 14;
                                    var2 = var3[var2];
                                    var3 = undefined;
                                    var5 = var4.bind(var3)(var2);
                                    var4 = var5.runOnJS;
                                    var2 = _closure3_slot2;
                                    var2 = var4.bind(var5)(var2);
                                    var2 = var2.bind(var3)();
                                    _fun112114_ip = 191;
                                    continue _fun112114;
                                case 98:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var2 = 14;
                                    var2 = var3[var2];
                                    var3 = undefined;
                                    var5 = var4.bind(var3)(var2);
                                    var4 = var5.runOnJS;
                                    var2 = _closure3_slot7;
                                    var2 = var4.bind(var5)(var2);
                                    var2 = var2.bind(var3)();
                                    _fun112114_ip = 191;
                                    continue _fun112114;
                                case 140:
                                    var4 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var2 = 14;
                                    var3 = var3[var2];
                                    var2 = undefined;
                                    var4 = var4.bind(var2)(var3);
                                    var3 = var4.runOnJS;
                                    var1 = _closure3_slot6;
                                    var1 = var3.bind(var4)(var1);
                                    var0 = _closure1_slot11;
                                    var0 = var0.PANEL;
                                    var0 = var1.bind(var2)(var0);
                                case 191:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var9 = {};
                        var9.pipMode = var13;
                        var13 = _closure1_slot13;
                        var9.VoicePanelPIPModes = var13;
                        var10 = var12[var10];
                        var10 = var11.bind(var5)(var10);
                        var10 = var10.runOnJS;
                        var9.runOnJS = var10;
                        var10 = _closure3_slot6;
                        var9.setMode = var10;
                        var10 = _closure1_slot11;
                        var9.VoicePanelModes = var10;
                        var10 = _closure3_slot1;
                        var9.controlsSpecs = var10;
                        var10 = _closure1_slot12;
                        var9.VoicePanelControlsModes = var10;
                        var10 = _closure3_slot7;
                        var9.showControls = var10;
                        var10 = _closure3_slot2;
                        var9.hideControls = var10;
                        var1.__closure = var9;
                        var9 = 9532493963151.0;
                        var1.__workletHash = var9;
                        var8 = _closure1_slot31;
                        var1.__initData = var8;
                        var1 = var6.bind(var7)(var1);
                        var0 = _closure3_slot15;
                        var0 = var0.bind(var5)();
                        var0 = var3.bind(var4)(var2, var1, var0);
                        return var0;
                    };
                    var3 = var13.bind(var14)(var3, var5);
                    var5 = 20;
                    var5 = var12[var5];
                    var12 = var9.bind(var10)(var5);
                    var10 = var12.useStateFromStoresObject;
                    var5 = _closure1_slot7;
                    var9 = new Array(2);
                    var9[0] = var5;
                    var5 = _closure1_slot8;
                    var9[1] = var5;
                    var5 = function() { // Environment: var1
                        _fun112115: for (var _fun112115_ip = 0;;) switch (_fun112115_ip) {
                            case 0:
                                var2 = _closure1_slot7;
                                var1 = var2.getCurrentEmbeddedActivity;
                                var5 = var1.bind(var2)();
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot3;
                                var1 = 21;
                                var1 = var2[var1];
                                var2 = undefined;
                                var4 = var3.bind(var2)(var1);
                                var3 = var4.getEmbeddedActivityLocationChannelId;
                                var1 = null;
                                var6 = var1 == var5;
                                if (var6) {
                                    _fun112115_ip = 59;
                                    continue _fun112115
                                }
                            case 54:
                                var2 = var5.location;
                            case 59:
                                var3 = var3.bind(var4)(var2);
                                var2 = _closure1_slot8;
                                var0 = var2.getConnectedFrame;
                                var0 = var0.bind(var2)();
                                var1 = var1 != var0;
                                var0 = {};
                                var2 = _closure3_slot11;
                                var2 = var3 !== var2;
                                var0.currentEmbeddedActivityIsNotInCurrentChannel = var2;
                                var0.hasFrame = var1;
                                return var0;
                        }
                    };
                    var5 = var10.bind(var12)(var9, var5);
                    var13 = var5.currentEmbeddedActivityIsNotInCurrentChannel;
                    var _closure3_slot16 = var13;
                    var12 = var5.hasFrame;
                    var _closure3_slot17 = var12;
                    var10 = _closure1_slot5;
                    var9 = var10.useCallback;
                    var5 = new Array(4);
                    var5[0] = var13;
                    var5[1] = var12;
                    var5[2] = var11;
                    var5[3] = var0;
                    var0 = function() { // Environment: var1
                        _fun112116: for (var _fun112116_ip = 0;;) switch (_fun112116_ip) {
                            case 0:
                                var1 = _closure3_slot16;
                                if (!var1) {
                                    _fun112116_ip = 45;
                                    continue _fun112116
                                }
                            case 10:
                                var2 = _closure3_slot6;
                                var1 = _closure1_slot11;
                                var1 = var1.PIP;
                                var3 = undefined;
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure3_slot5;
                                var1 = null;
                                var1 = var2.bind(var3)(var1);
                            case 45:
                                var1 = _closure3_slot17;
                                if (var1) {
                                    _fun112116_ip = 100;
                                    continue _fun112116
                                }
                            case 55:
                                var3 = _closure1_slot2;
                                var2 = _closure1_slot3;
                                var1 = 23;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.updateActivityPanelMode;
                                var1 = _closure1_slot14;
                                var1 = var1.PANEL;
                                var1 = var2.bind(var3)(var1);
                                _fun112116_ip = 143;
                                continue _fun112116;
                            case 100:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var1 = 22;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                var1 = var2.updateFramePanelMode;
                                var0 = _closure1_slot14;
                                var0 = var0.PANEL;
                                var0 = var1.bind(var2)(var0);
                            case 143:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var5 = var9.bind(var10)(var0, var5);
                    var _closure3_slot18 = var5;
                    var0 = {};
                    var0.multiPIPWrapperStyles = var8;
                    var0.mainPIPWrapperStyles = var7;
                    var0.secondaryPIPWrapperStyles = var4;
                    var0.mainPIPGesture = var3;
                    var4 = _closure1_slot5;
                    var3 = var4.useMemo;
                    var2 = new Array(2);
                    var2[0] = var6;
                    var2[1] = var5;
                    var1 = function() { // Environment: var1
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var0 = 16;
                        var1 = var10[var0];
                        var4 = undefined;
                        var1 = var9.bind(var4)(var1);
                        var3 = var1.Gesture;
                        var2 = var3.Exclusive;
                        var0 = var10[var0];
                        var0 = var9.bind(var4)(var0);
                        var1 = var0.Gesture;
                        var0 = var1.Tap;
                        var5 = var0.bind(var1)();
                        var1 = var5.maxDistance;
                        var0 = 30;
                        var6 = var1.bind(var5)(var0);
                        var5 = var6.onStart;
                        var1 = function() { // Original name: t, environment: var0
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 14;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = var3.runOnJS;
                            var1 = _closure3_slot18;
                            var1 = var2.bind(var3)(var1);
                            var1 = var1.bind(var0)();
                            return var0;
                        };
                        var8 = {};
                        var0 = 14;
                        var0 = var10[var0];
                        var0 = var9.bind(var4)(var0);
                        var0 = var0.runOnJS;
                        var8.runOnJS = var0;
                        var9 = _closure3_slot18;
                        var8.handleSecondaryPIPTap = var9;
                        var1.__closure = var8;
                        var8 = 8361527940381.0;
                        var1.__workletHash = var8;
                        var7 = _closure1_slot32;
                        var1.__initData = var7;
                        var1 = var5.bind(var6)(var1);
                        var0 = _closure3_slot15;
                        var0 = var0.bind(var4)();
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var1, var2);
                    var0.secondaryPIPGesture = var1;
                    return var0;
                };
                var1 = var1.bind(var3)(var6);
                var6 = var1.multiPIPWrapperStyles;
                var21 = var1.mainPIPWrapperStyles;
                var11 = var1.secondaryPIPWrapperStyles;
                var20 = var1.mainPIPGesture;
                var16 = var1.secondaryPIPGesture;
                var1 = 24;
                var1 = var14[var1];
                var1 = var8.bind(var3)(var1);
                var1 = var1.bind(var3)(var7);
                var15 = var1.pushToTalk;
                var1 = 20;
                var1 = var14[var1];
                var9 = var13.bind(var3)(var1);
                var8 = var9.useStateFromStoresObject;
                var1 = _closure1_slot8;
                var7 = new Array(1);
                var7[0] = var1;
                var1 = function() { // Environment: var0
                    var1 = _closure1_slot8;
                    var0 = var1.getConnectedFrame;
                    var1 = var0.bind(var1)();
                    var0 = null;
                    var0 = var0 != var1;
                    return var0;
                };
                var1 = var8.bind(var9)(var7, var1);
                var _closure2_slot2 = var1;
                var7 = 14;
                var7 = var14[var7];
                var9 = var13.bind(var3)(var7);
                var8 = var9.useAnimatedStyle;
                var7 = function() { // Original name: t, environment: var0
                    var0 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot3;
                    var1 = 15;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.getVoicePanelPIPBorderRadius;
                    var1 = _closure2_slot1;
                    var2 = var1.width;
                    var1 = var1.height;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.borderRadius = var1;
                    return var0;
                };
                var10 = {};
                var12 = 15;
                var12 = var14[var12];
                var12 = var13.bind(var3)(var12);
                var12 = var12.getVoicePanelPIPBorderRadius;
                var10.getVoicePanelPIPBorderRadius = var12;
                var10.pipState = var5;
                var7.__closure = var10;
                var10 = 9598016909682.0;
                var7.__workletHash = var10;
                var10 = _closure1_slot33;
                var7.__initData = var10;
                var13 = var8.bind(var9)(var7);
                var9 = _closure1_slot5;
                var8 = var9.useMemo;
                var7 = new Array(1);
                var7[0] = var2;
                var2 = function() { // Environment: var0
                    var0 = {
                        'accessible': true,
                        'accessibilityLabel': null,
                        'accessibilityRole': 'button'
                    };
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var1 = 25;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1.oN8bqe;
                    var1 = var2.bind(var3)(var1);
                    var0.accessibilityLabel = var1;
                    var2 = {};
                    var1 = 'activate';
                    var2.name = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.accessibilityActions = var1;
                    var1 = function() { // Original name: onAccessibilityAction, environment: var1
                        var2 = _closure2_slot0;
                        var0 = _closure1_slot11;
                        var1 = var0.PANEL;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.onAccessibilityAction = var1;
                    return var0;
                };
                var14 = var8.bind(var9)(var2, var7);
                var8 = _closure1_slot5;
                var7 = var8.useMemo;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var1 = true;
                    var0.accessible = var1;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var1 = 25;
                    var2 = var6[var1];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var3 = var2.intl;
                    var2 = var3.string;
                    var1 = var6[var1];
                    var1 = var5.bind(var4)(var1);
                    var1 = var1.t;
                    var1 = var1["3ejJer"];
                    var1 = var2.bind(var3)(var1);
                    var0.accessibilityLabel = var1;
                    var2 = {};
                    var1 = 'activate';
                    var2.name = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    var0.accessibilityActions = var1;
                    var1 = function() { // Original name: onAccessibilityAction, environment: var1
                        _fun112124: for (var _fun112124_ip = 0;;) switch (_fun112124_ip) {
                            case 0:
                                var1 = _closure2_slot2;
                                if (var1) {
                                    _fun112124_ip = 58;
                                    continue _fun112124
                                }
                            case 13:
                                var3 = _closure1_slot2;
                                var2 = _closure1_slot3;
                                var1 = 23;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.updateActivityPanelMode;
                                var1 = _closure1_slot14;
                                var1 = var1.PANEL;
                                var1 = var2.bind(var3)(var1);
                                _fun112124_ip = 101;
                                continue _fun112124;
                            case 58:
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot3;
                                var1 = 22;
                                var2 = var2[var1];
                                var1 = undefined;
                                var2 = var3.bind(var1)(var2);
                                var1 = var2.updateFramePanelMode;
                                var0 = _closure1_slot14;
                                var0 = var0.PANEL;
                                var0 = var1.bind(var2)(var0);
                            case 101:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.onAccessibilityAction = var1;
                    return var0;
                };
                var10 = var7.bind(var8)(var1, var2);
                var1 = _closure1_slot9;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.isActivityFocused;
                    return var0;
                };
                var1 = var1.bind(var3)(var0);
                if (!var15) {
                    _fun112096_ip = 410;
                    continue _fun112096
                }
            case 382:
                var2 = var5.mode;
                var0 = _closure1_slot13;
                var0 = var0.IN_PANEL;
                var0 = var2 !== var0;
                if (var0) {
                    _fun112096_ip = 407;
                    continue _fun112096
                }
            case 404:
                var0 = var1;
            case 407:
                var15 = var0;
            case 410:
                var2 = _closure1_slot16;
                var1 = _closure1_slot1;
                var0 = _closure1_slot3;
                var9 = 26;
                var0 = var0[var9];
                var1 = var1.bind(var3)(var0);
                var0 = {};
                var0.ref = var4;
                var17 = 'box-none';
                var0.pointerEvents = var17;
                var4 = _closure1_slot20;
                var7 = var4.multiPIPContainer;
                var4 = new Array(2);
                var4[0] = var7;
                var4[1] = var6;
                var0.style = var4;
                var4 = _closure1_slot19;
                var0.layout = var4;
                var4 = var5.mode;
                var12 = null;
                var6 = var12 != var4;
                if (!var6) {
                    _fun112096_ip = 781;
                    continue _fun112096
                }
            case 503:
                var8 = _closure1_slot16;
                var24 = _closure1_slot1;
                var26 = _closure1_slot3;
                var4 = var26[var9];
                var7 = var24.bind(var3)(var4);
                var4 = {};
                var19 = _closure1_slot20;
                var22 = var19.pipContentWrapper;
                var19 = new Array(3);
                var19[0] = var22;
                var22 = _closure1_slot20;
                var22 = var22.inAppElevationShadow;
                var19[1] = var22;
                var19[2] = var21;
                var4.style = var19;
                var4.pointerEvents = var17;
                var17 = _closure1_slot19;
                var4.layout = var17;
                var28 = var4;
                var27 = var14;
                var14 = copyDataProperties(var28, var27);
                var19 = _closure1_slot15;
                var17 = _closure1_slot0;
                var14 = 16;
                var14 = var26[var14];
                var14 = var17.bind(var3)(var14);
                var17 = var14.GestureDetector;
                var14 = {};
                var14.gesture = var20;
                var22 = _closure1_slot15;
                var20 = var26[var9];
                var21 = var24.bind(var3)(var20);
                var20 = {};
                var23 = _closure1_slot20;
                var25 = var23.pipMask;
                var23 = new Array(2);
                var23[0] = var25;
                var23[1] = var13;
                var20.style = var23;
                var23 = _closure1_slot19;
                var20.layout = var23;
                var25 = _closure1_slot15;
                var23 = 27;
                var23 = var26[var23];
                var24 = var24.bind(var3)(var23);
                var23 = {};
                var23 = var25.bind(var3)(var24, var23);
                var20.children = var23;
                var20 = var22.bind(var3)(var21, var20);
                var14.children = var20;
                var17 = var19.bind(var3)(var17, var14);
                var14 = new Array(2);
                var14[0] = var17;
                var12 = null;
                if (!var15) {
                    _fun112096_ip = 762;
                    continue _fun112096
                }
            case 730:
                var19 = _closure1_slot15;
                var17 = _closure1_slot1;
                var20 = _closure1_slot3;
                var15 = 28;
                var15 = var20[var15];
                var17 = var17.bind(var3)(var15);
                var15 = {};
                var12 = var19.bind(var3)(var17, var15);
            case 762:
                var14[1] = var12;
                var12 = 'children';
                var4[var12] = var14;
                var6 = var8.bind(var3)(var7, var4);
            case 781:
                var4 = new Array(2);
                var4[0] = var6;
                var5 = var5.showSecondaryPIP;
                if (!var5) {
                    _fun112096_ip = 1013;
                    continue _fun112096
                }
            case 801:
                var8 = _closure1_slot15;
                var19 = _closure1_slot1;
                var21 = _closure1_slot3;
                var15 = 29;
                var6 = var21[var15];
                var7 = var19.bind(var3)(var6);
                var6 = {};
                var6.style = var11;
                var28 = var6;
                var27 = var10;
                var10 = copyDataProperties(var28, var27);
                var11 = _closure1_slot15;
                var9 = var21[var9];
                var10 = var19.bind(var3)(var9);
                var9 = {};
                var12 = _closure1_slot20;
                var14 = var12.pipMask;
                var12 = new Array(2);
                var12[0] = var14;
                var12[1] = var13;
                var9.style = var12;
                var14 = _closure1_slot15;
                var13 = _closure1_slot0;
                var12 = 16;
                var12 = var21[var12];
                var12 = var13.bind(var3)(var12);
                var13 = var12.GestureDetector;
                var12 = {};
                var12.gesture = var16;
                var17 = _closure1_slot15;
                var15 = var21[var15];
                var16 = var19.bind(var3)(var15);
                var15 = {};
                var20 = _closure1_slot6;
                var20 = var20.absoluteFill;
                var15.style = var20;
                var20 = _closure1_slot15;
                var18 = 30;
                var18 = var21[var18];
                var19 = var19.bind(var3)(var18);
                var18 = {};
                var18 = var20.bind(var3)(var19, var18);
                var15.children = var18;
                var15 = var17.bind(var3)(var16, var15);
                var12.children = var15;
                var12 = var14.bind(var3)(var13, var12);
                var9.children = var12;
                var10 = var11.bind(var3)(var10, var9);
                var9 = 'children';
                var6[var9] = var10;
                var5 = var8.bind(var3)(var7, var6);
            case 1013:
                var4[1] = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: renderPIPWrapper, environment: var1
        var4 = _closure1_slot15;
        var3 = _closure1_slot34;
        var2 = {};
        var0 = arg1;
        var0 = var0.pipMode;
        var2.pipMode = var0;
        var0 = arg2;
        var2.transitionState = var0;
        var0 = arg3;
        var2.transitionCleanUp = var0;
        var1 = undefined;
        var0 = arg0;
        var0 = var4.bind(var1)(var3, var2, var0);
        return var0;
    };
    var _closure1_slot36 = var0;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var7.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var _closure1_slot5 = var6;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.StyleSheet;
    var _closure1_slot6 = var8;
    var3 = var3.Platform;
    var3 = 3;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var7.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.DRAWER_SPRING_PHYSICS;
    var _closure1_slot10 = var7;
    var7 = var3.VoicePanelModes;
    var _closure1_slot11 = var7;
    var10 = var3.SECONDARY_PIP_TOP_MARGIN;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelControlsModes;
    var _closure1_slot12 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.VoicePanelPIPModes;
    var _closure1_slot13 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ActivityPanelModes;
    var _closure1_slot14 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.jsx;
    var _closure1_slot15 = var7;
    var3 = var3.jsxs;
    var _closure1_slot16 = var3;
    var3 = {
        'mass': 0.3,
        'damping': 80,
        'stiffness': 150
    };
    var _closure1_slot17 = var3;
    var3 = {};
    var7 = 'function layoutTransition_VoicePanelPIPTsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS),width:withSpring(values.targetWidth,LAYOUT_PHYSICS),height:withSpring(values.targetHeight,LAYOUT_PHYSICS)},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}';
    var3.code = var7;
    var _closure1_slot18 = var3;
    var3 = function() { // Environment: var1
        var0 = function(arg0) { // Original name: layoutTransition, environment: var0
            var2 = arg0;
            var0 = {};
            var1 = {};
            var6 = _closure1_slot0;
            var7 = _closure1_slot3;
            var4 = 11;
            var8 = var7[var4];
            var5 = undefined;
            var11 = var6.bind(var5)(var8);
            var10 = var11.withSpring;
            var9 = var2.targetOriginX;
            var8 = _closure1_slot17;
            var8 = var10.bind(var11)(var9, var8);
            var1.originX = var8;
            var8 = var7[var4];
            var11 = var6.bind(var5)(var8);
            var10 = var11.withSpring;
            var9 = var2.targetOriginY;
            var8 = _closure1_slot17;
            var8 = var10.bind(var11)(var9, var8);
            var1.originY = var8;
            var8 = var7[var4];
            var11 = var6.bind(var5)(var8);
            var10 = var11.withSpring;
            var9 = var2.targetWidth;
            var8 = _closure1_slot17;
            var8 = var10.bind(var11)(var9, var8);
            var1.width = var8;
            var4 = var7[var4];
            var6 = var6.bind(var5)(var4);
            var5 = var6.withSpring;
            var4 = var2.targetHeight;
            var3 = _closure1_slot17;
            var3 = var5.bind(var6)(var4, var3);
            var1.height = var3;
            var0.animations = var1;
            var1 = {};
            var3 = var2.currentOriginX;
            var1.originX = var3;
            var3 = var2.currentOriginY;
            var1.originY = var3;
            var3 = var2.currentWidth;
            var1.width = var3;
            var2 = var2.currentHeight;
            var1.height = var2;
            var0.initialValues = var1;
            return var0;
        };
        var2 = {};
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var3 = 11;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.withSpring;
        var2.withSpring = var3;
        var3 = _closure1_slot17;
        var2.LAYOUT_PHYSICS = var3;
        var0.__closure = var2;
        var2 = 9346092352642.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot18;
        var0.__initData = var1;
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot19 = var3;
    var7 = var8.create;
    var3 = {};
    var9 = {};
    var11 = 'black';
    var9.backgroundColor = var11;
    var3.pipContentWrapper = var9;
    var9 = {};
    var3.noElevationShadow = var9;
    var9 = {};
    var3.inAppElevationShadow = var9;
    var9 = {};
    var3.inPanelElevationShadow = var9;
    var9 = {};
    var14 = var8.absoluteFillObject;
    var15 = var9;
    var11 = copyDataProperties(var15, var14);
    var12 = 'hidden';
    var11 = 'overflow';
    var9[var11] = var12;
    var3.pipMask = var9;
    var9 = {
        'position': 'absolute',
        'zIndex': 10,
        'flexDirection': 'column',
        'alignItems': 'center'
    };
    var9.gap = var10;
    var3.multiPIPContainer = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot20 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPTsx2(){const{pipState,getClampedPIPPosition,wrapperDimensions,windowDimensions,safeArea,pipAvoidanceSpecs,initialGestureOffset,opacity,withSpring,DRAWER_SPRING_PHYSICS,LAYOUT_PHYSICS,getVoicePanelPIPBorderRadius}=this.__closure;const width=pipState.width;const height=!pipState.showSecondaryPIP?pipState.height:pipState.containerHeight;const{x:x,y:y}=getClampedPIPPosition({pipX:wrapperDimensions.get().pipX,pipY:wrapperDimensions.get().pipY,width:width,height:height,windowDimensions:windowDimensions.get(),safeArea:safeArea.get(),bottomAvoidanceRegion:pipAvoidanceSpecs.get().bottom,topAvoidanceRegion:pipAvoidanceSpecs.get().top,positionOffset:initialGestureOffset.get().active?initialGestureOffset.get():undefined});return{width:width,height:height,opacity:opacity.get(),transform:[{translateX:withSpring(x,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:LAYOUT_PHYSICS)},{translateY:withSpring(y,initialGestureOffset.get().active?DRAWER_SPRING_PHYSICS:LAYOUT_PHYSICS)}],borderRadius:getVoicePanelPIPBorderRadius(width,height)};}';
    var3.code = var7;
    var _closure1_slot21 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPTsx3(){const{pipState,getVoicePanelPIPBorderRadius}=this.__closure;const{width:width,height:height}=pipState;return{width:width,height:height,borderRadius:getVoicePanelPIPBorderRadius(width,height)};}';
    var3.code = var7;
    var _closure1_slot22 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPTsx4(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}';
    var3.code = var7;
    var _closure1_slot23 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPTsx5(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}';
    var3.code = var7;
    var _closure1_slot24 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPTsx6({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}){const{calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,runOnJS,updateSourceTrackingView}=this.__closure;const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(updateSourceTrackingView)();}';
    var3.code = var7;
    var _closure1_slot25 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPTsx7({absoluteX:absoluteX,absoluteY:absoluteY}){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{x:absoluteX-initialGestureOffset.get().absoluteX,y:absoluteY-initialGestureOffset.get().absoluteY});}';
    var3.code = var7;
    var _closure1_slot26 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPTsx8(event,manager){const{State,initialGestureOffset,MIN_GESTURE_START,updateSharedValueIfChanged,wrapperOffset,runOnJS,triggerIOSHaptic}=this.__closure;if(event.state!==State.BEGAN||initialGestureOffset.get().active)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];if(Math.abs(initialGestureOffset.get().absoluteX-absoluteX)>MIN_GESTURE_START||Math.abs(initialGestureOffset.get().absoluteY-absoluteY)>MIN_GESTURE_START){initialGestureOffset.set({x:0,y:0,absoluteX:absoluteX,absoluteY:absoluteY,pressed:true,active:true});updateSharedValueIfChanged(wrapperOffset,{gestureActive:true,x:0,y:0});manager.activate();runOnJS(triggerIOSHaptic)();}}';
    var3.code = var7;
    var _closure1_slot27 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPTsx9(){const{updateSharedValueIfChanged,initialGestureOffset}=this.__closure;updateSharedValueIfChanged(initialGestureOffset,{active:false,pressed:false});}';
    var3.code = var7;
    var _closure1_slot28 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPTsx10({absoluteX:absoluteX,absoluteY:absoluteY}){const{initialGestureOffset}=this.__closure;initialGestureOffset.set({x:0,y:0,absoluteX:absoluteX,absoluteY:absoluteY,active:false,pressed:true});}';
    var3.code = var7;
    var _closure1_slot29 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPTsx11(){const{runOnJS,setFocused}=this.__closure;runOnJS(setFocused)(null);}';
    var3.code = var7;
    var _closure1_slot30 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPTsx12(){const{pipMode,VoicePanelPIPModes,runOnJS,setMode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,showControls,hideControls}=this.__closure;if(pipMode===VoicePanelPIPModes.IN_APP){runOnJS(setMode)(VoicePanelModes.PANEL);}else{if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)();}else{runOnJS(hideControls)();}}}';
    var3.code = var7;
    var _closure1_slot31 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPTsx13(){const{runOnJS,handleSecondaryPIPTap}=this.__closure;runOnJS(handleSecondaryPIPTap)();}';
    var3.code = var7;
    var _closure1_slot32 = var3;
    var3 = {};
    var7 = 'function VoicePanelPIPTsx14(){const{getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}';
    var3.code = var7;
    var _closure1_slot33 = var3;
    var7 = var6.memo;
    var3 = function(arg0) { // Environment: var1
        _fun112129: for (var _fun112129_ip = 0;;) switch (_fun112129_ip) {
            case 0:
                var1 = arg0;
                var6 = var1.pipMode;
                var8 = var1.transitionState;
                var _closure2_slot0 = var8;
                var7 = var1.transitionCleanUp;
                var _closure2_slot1 = var7;
                var4 = undefined;
                var _closure2_slot2 = var4;
                var5 = _closure1_slot5;
                var3 = var5.useState;
                var2 = _closure1_slot13;
                var2 = var2.IN_PANEL;
                var2 = var6 === var2;
                if (var2) {
                    _fun112129_ip = 102;
                    continue _fun112129
                }
            case 66:
                var9 = _closure1_slot0;
                var10 = _closure1_slot3;
                var6 = 31;
                var6 = var10[var6];
                var6 = var9.bind(var4)(var6);
                var6 = var6.TransitionStates;
                var6 = var6.MOUNTED;
                var2 = var8 === var6;
            case 102:
                var5 = var3.bind(var5)(var2);
                var3 = _closure1_slot4;
                var2 = 2;
                var5 = var3.bind(var4)(var5, var2);
                var2 = 0;
                var2 = var5[var2];
                var3 = 1;
                var3 = var5[var3];
                _closure2_slot2 = var3;
                var9 = _closure1_slot5;
                var6 = var9.useEffect;
                var5 = function() { // Environment: var0
                    var1 = global;
                    var4 = var1.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        var2 = _closure2_slot2;
                        var1 = undefined;
                        var0 = true;
                        var0 = var2.bind(var1)(var0);
                        return var0;
                    };
                    var1 = 400;
                    var1 = var4.bind(var3)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var3 = new Array(0);
                var3 = var6.bind(var9)(var5, var3);
                var6 = _closure1_slot5;
                var5 = var6.useEffect;
                var3 = new Array(2);
                var3[0] = var8;
                var3[1] = var7;
                var0 = function() { // Environment: var0
                    _fun112133: for (var _fun112133_ip = 0;;) switch (_fun112133_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot3;
                            var0 = 31;
                            var1 = var1[var0];
                            var0 = undefined;
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.TransitionStates;
                            var1 = var1.YEETED;
                            if (!(var2 === var1)) {
                                _fun112133_ip = 74;
                                continue _fun112133
                            }
                        case 48:
                            var1 = global;
                            var3 = var1.setTimeout;
                            var2 = function() { // Environment: var1
                                var1 = _closure2_slot1;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                return var0;
                            };
                            var1 = 17;
                            var1 = var3.bind(var0)(var2, var1);
                        case 74:
                            return var0;
                    }
                };
                var0 = var5.bind(var6)(var0, var3);
                var0 = null;
                if (!var2) {
                    _fun112129_ip = 218;
                    continue _fun112129
                }
            case 202:
                var3 = _closure1_slot15;
                var2 = _closure1_slot35;
                var1 = {};
                var0 = var3.bind(var4)(var2, var1);
            case 218:
                return var0;
        }
    };
    var3 = var7.bind(var6)(var3);
    var _closure1_slot34 = var3;
    var3 = var6.memo;
    var1 = function() { // Original name: VoicePanelPIPWrapper, environment: var1
        _fun112135: for (var _fun112135_ip = 0;;) switch (_fun112135_ip) {
            case 0:
                var1 = _closure1_slot0;
                var5 = _closure1_slot3;
                var0 = 13;
                var0 = var5[var0];
                var3 = undefined;
                var2 = var1.bind(var3)(var0);
                var0 = var2.usePIPState;
                var0 = var0.bind(var2)();
                var7 = var0.mode;
                var6 = var0.showSecondaryPIP;
                var2 = _closure1_slot15;
                var0 = 31;
                var0 = var5[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.TransitionItem;
                var0 = {};
                var5 = null;
                if (!(var5 == var7)) {
                    _fun112135_ip = 81;
                    continue _fun112135
                }
            case 76:
                var5 = undefined;
                if (!var6) {
                    _fun112135_ip = 91;
                    continue _fun112135
                }
            case 81:
                var6 = {};
                var6.pipMode = var7;
                var5 = var6;
            case 91:
                var0.item = var5;
                var4 = _closure1_slot36;
                var0.renderItem = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var1 = var3.bind(var6)(var1);
    var3 = 32;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/pip/VoicePanelPIP.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 1371, 7876, 7837, 11816, 11814, 14257, 7874, 33, 4034, 11815, 14261, 3677, 14256, 4917, 5256, 14263, 7994, 566, 3040, 7898, 7872, 8149, 1234, 6416, 14371, 14372, 6415, 14374, 3981, 2]);