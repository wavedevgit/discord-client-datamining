// modules/voice_panel/native/VoicePanelUI.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var6;
    var0 = function() {
        var0 = undefined;
        return var0;
    };
    var _closure1_slot64 = var0;
    var0 = function arg0() {
        var0 = arg0;
        var1 = var0.wrapperOffset;
        var4 = var0.children;
        var0 = function arg0() {
            var14 = arg0;
            var _closure3_slot0 = var14;
            var2 = _closure1_slot31;
            var9 = undefined;
            var4 = var2.bind(var9)();
            var _closure3_slot1 = var4;
            var5 = _closure1_slot4;
            var3 = var5.useContext;
            var11 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 16;
            var2 = var10[var2];
            var2 = var11.bind(var9)(var2);
            var2 = var3.bind(var5)(var2);
            var15 = var2.wrapperDimensions;
            var _closure3_slot2 = var15;
            var13 = var2.connected;
            var _closure3_slot3 = var13;
            var19 = var2.controlsSpecs;
            var _closure3_slot4 = var19;
            var21 = var2.focused;
            var _closure3_slot5 = var21;
            var12 = var2.mode;
            var _closure3_slot6 = var12;
            var17 = var2.preJoinContentSize;
            var _closure3_slot7 = var17;
            var22 = var2.safeArea;
            var _closure3_slot8 = var22;
            var18 = var2.windowDimensions;
            var _closure3_slot9 = var18;
            var16 = var2.useReducedMotion;
            var _closure3_slot10 = var16;
            var8 = _closure1_slot0;
            var7 = 14;
            var2 = var10[var7];
            var5 = var8.bind(var9)(var2);
            var3 = var5.useDerivedValue;
            var2 = function() {
                var1 = _closure3_slot4;
                var0 = var1.get;
                var0 = var0.bind(var1)();
                var0 = var0.height;
                return var0;
            };
            var6 = {};
            var6.controlsSpecs = var19;
            var2.__closure = var6;
            var6 = 6243014585347.0;
            var2.__workletHash = var6;
            var6 = _closure1_slot56;
            var2.__initData = var6;
            var19 = var3.bind(var5)(var2);
            var _closure3_slot11 = var19;
            var2 = 25;
            var2 = var10[var2];
            var3 = var8.bind(var9)(var2);
            var2 = var3.usePIPState;
            var20 = var2.bind(var3)();
            var _closure3_slot12 = var20;
            var2 = var10[var7];
            var6 = var8.bind(var9)(var2);
            var5 = var6.useAnimatedReaction;
            var3 = function() {
                var0 = {};
                var3 = _closure3_slot6;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var0.modeToSet = var2;
                var3 = _closure3_slot3;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var0.connected = var2;
                var3 = _closure3_slot9;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var2 = var2.width;
                var0.windowWidth = var2;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var2 = var2.height;
                var0.windowHeight = var2;
                var3 = _closure3_slot8;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var0.safeArea = var2;
                var3 = _closure3_slot5;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var0.focused = var2;
                var2 = _closure3_slot12;
                var0.pipState = var2;
                var3 = _closure3_slot11;
                var2 = var3.get;
                var2 = var2.bind(var3)();
                var0.controlsHeight = var2;
                var2 = _closure3_slot7;
                var1 = var2.get;
                var1 = var1.bind(var2)();
                var0.preJoinContentSize = var1;
                return var0;
            };
            var2 = {};
            var2.mode = var12;
            var2.connected = var13;
            var2.windowDimensions = var18;
            var2.safeArea = var22;
            var2.focused = var21;
            var2.pipState = var20;
            var2.controlsHeight = var19;
            var2.preJoinContentSize = var17;
            var3.__closure = var2;
            var2 = 5273555735813.0;
            var3.__workletHash = var2;
            var2 = _closure1_slot57;
            var3.__initData = var2;
            var2 = function arg0, arg1() {
                _fun110761: for (var _fun110761_ip = 0;;) switch (_fun110761_ip) {
                    case 0:
                        var5 = arg0;
                        var6 = arg1;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 19;
                        var1 = var1[var0];
                        var0 = undefined;
                        var7 = var3.bind(var0)(var1);
                        var4 = var7.cheapWorkletShallowEqual;
                        var1 = null;
                        var8 = var1 != var6;
                        var3 = undefined;
                        if (!var8) {
                            _fun110761_ip = 51;
                            continue _fun110761
                        }
                    case 48:
                        var3 = var6;
                    case 51:
                        var3 = var4.bind(var7)(var5, var3);
                        if (var3) {
                            _fun110761_ip = 772;
                            continue _fun110761
                        }
                    case 63:
                        var8 = var5.modeToSet;
                        var4 = var5.connected;
                        var11 = var5.windowWidth;
                        var10 = var5.windowHeight;
                        var3 = var5.safeArea;
                        var7 = var5.pipState;
                        var15 = var5.controlsHeight;
                        var5 = var5.preJoinContentSize;
                        var9 = _closure1_slot15;
                        var9 = var9.PIP;
                        if (!(var8 === var9)) {
                            _fun110761_ip = 137;
                            continue _fun110761
                        }
                    case 125:
                        var7 = var7.id;
                        if (!(var1 != var7)) {
                            _fun110761_ip = 772;
                            continue _fun110761
                        }
                    case 137:
                        var9 = var1 == var6;
                        if (var9) {
                            _fun110761_ip = 262;
                            continue _fun110761
                        }
                    case 144:
                        var1 = var6.windowHeight;
                        var1 = var10 === var1;
                        if (!var1) {
                            _fun110761_ip = 167;
                            continue _fun110761
                        }
                    case 157:
                        var7 = var6.windowWidth;
                        var1 = var11 === var7;
                    case 167:
                        if (!var1) {
                            _fun110761_ip = 190;
                            continue _fun110761
                        }
                    case 170:
                        var12 = var3.top;
                        var7 = var6.safeArea;
                        var7 = var7.top;
                        var1 = var12 === var7;
                    case 190:
                        if (!var1) {
                            _fun110761_ip = 213;
                            continue _fun110761
                        }
                    case 193:
                        var12 = var3.bottom;
                        var7 = var6.safeArea;
                        var7 = var7.bottom;
                        var1 = var12 === var7;
                    case 213:
                        if (!var1) {
                            _fun110761_ip = 236;
                            continue _fun110761
                        }
                    case 216:
                        var12 = var3.left;
                        var7 = var6.safeArea;
                        var7 = var7.left;
                        var1 = var12 === var7;
                    case 236:
                        if (!var1) {
                            _fun110761_ip = 259;
                            continue _fun110761
                        }
                    case 239:
                        var7 = var3.right;
                        var6 = var6.safeArea;
                        var6 = var6.right;
                        var1 = var7 === var6;
                    case 259:
                        var9 = var1;
                    case 262:
                        var7 = _closure3_slot2;
                        var6 = var7.get;
                        var6 = var6.bind(var7)();
                        var7 = var6.drawerX;
                        var6 = var6.drawerY;
                        var6 = _closure1_slot15;
                        var6 = var6.PANEL;
                        if (!(var8 !== var6)) {
                            _fun110761_ip = 412;
                            continue _fun110761
                        }
                    case 304:
                        var6 = _closure1_slot15;
                        var6 = var6.DISMISSED;
                        if (!(var8 === var6)) {
                            _fun110761_ip = 772;
                            continue _fun110761
                        }
                    case 321:
                        var7 = _closure1_slot1;
                        var12 = _closure1_slot2;
                        var6 = 20;
                        var6 = var12[var6];
                        var12 = var7.bind(var0)(var6);
                        var7 = _closure3_slot2;
                        if (var4) {
                            _fun110761_ip = 395;
                            continue _fun110761
                        }
                    case 348:
                        var6 = {};
                        var14 = _closure3_slot9;
                        var13 = var14.get;
                        var13 = var13.bind(var14)();
                        var14 = var13.height;
                        var13 = 60;
                        var13 = var14 + var13;
                        var6.drawerY = var13;
                        var6.mode = var8;
                        var6 = var12.bind(var0)(var7, var6);
                        _fun110761_ip = 772;
                        continue _fun110761;
                    case 395:
                        var6 = {};
                        var6.mode = var8;
                        var6 = var12.bind(var0)(var7, var6);
                        _fun110761_ip = 772;
                        continue _fun110761;
                    case 412:
                        if (var4) {
                            _fun110761_ip = 681;
                            continue _fun110761
                        }
                    case 418:
                        var7 = _closure1_slot0;
                        var13 = _closure1_slot2;
                        var6 = 26;
                        var12 = var13[var6];
                        var16 = var7.bind(var0)(var12);
                        var14 = var16.getMaxPanelWidth;
                        var12 = {};
                        var12.windowWidth = var11;
                        var12.connected = var4;
                        var17 = var3.left;
                        var12.safeAreaLeft = var17;
                        var17 = var3.right;
                        var12.safeAreaRight = var17;
                        var12 = var14.bind(var16)(var12);
                        var6 = var13[var6];
                        var7 = var7.bind(var0)(var6);
                        var6 = var7.getPanelX;
                        var7 = var6.bind(var7)(var11, var12);
                        var6 = 0;
                        if (var4) {
                            _fun110761_ip = 618;
                            continue _fun110761
                        }
                    case 507:
                        var13 = _closure1_slot1;
                        var14 = _closure1_slot2;
                        var4 = 27;
                        var4 = var14[var4];
                        var4 = var13.bind(var0)(var4);
                        var13 = global;
                        var14 = var13.Math;
                        var13 = var14.max;
                        var5 = var10 - var5;
                        var5 = var5 - var15;
                        var3 = var3.bottom;
                        var5 = var5 - var3;
                        var16 = _closure3_slot9;
                        var3 = var16.get;
                        var3 = var3.bind(var16)();
                        var15 = var3.height;
                        var3 = var16.get;
                        var3 = var3.bind(var16)();
                        var16 = var3.height;
                        var3 = 0.8;
                        var3 = var3 * var16;
                        var3 = var15 - var3;
                        var3 = var13.bind(var14)(var5, var3);
                        var6 = var4.bind(var0)(var3);
                    case 618:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 20;
                        var3 = var5[var3];
                        var5 = var4.bind(var0)(var3);
                        var4 = _closure3_slot2;
                        var3 = {};
                        var3.drawerWidth = var12;
                        var3.drawerHeight = var10;
                        var3.drawerX = var7;
                        var3.drawerY = var6;
                        var3.animated = var9;
                        var3.mode = var8;
                        var3 = var5.bind(var0)(var4, var3);
                        _fun110761_ip = 772;
                        continue _fun110761;
                    case 681:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 20;
                        var5 = var4[var2];
                        var7 = var3.bind(var0)(var5);
                        var6 = _closure3_slot2;
                        var5 = {};
                        var5.drawerWidth = var11;
                        var5.drawerHeight = var10;
                        var10 = 0;
                        var5.drawerX = var10;
                        var5.drawerY = var10;
                        var5.animated = var9;
                        var5.mode = var8;
                        var5 = var7.bind(var0)(var6, var5);
                        var2 = var4[var2];
                        var3 = var3.bind(var0)(var2);
                        var2 = _closure3_slot0;
                        var1 = {};
                        var4 = false;
                        var1.gestureActive = var4;
                        var1 = var3.bind(var0)(var2, var1);
                    case 772:
                        return var0;
                }
            };
            var17 = {};
            var19 = 19;
            var19 = var10[var19];
            var19 = var8.bind(var9)(var19);
            var19 = var19.cheapWorkletShallowEqual;
            var17.cheapWorkletShallowEqual = var19;
            var19 = _closure1_slot15;
            var17.VoicePanelModes = var19;
            var17.wrapperDimensions = var15;
            var19 = 20;
            var19 = var10[var19];
            var19 = var11.bind(var9)(var19);
            var17.updateSharedValueIfChanged = var19;
            var17.wrapperOffset = var14;
            var19 = 26;
            var20 = var10[var19];
            var20 = var8.bind(var9)(var20);
            var20 = var20.getMaxPanelWidth;
            var17.getMaxPanelWidth = var20;
            var19 = var10[var19];
            var19 = var8.bind(var9)(var19);
            var19 = var19.getPanelX;
            var17.getPanelX = var19;
            var19 = 27;
            var19 = var10[var19];
            var19 = var11.bind(var9)(var19);
            var17.roundToNearestPixel = var19;
            var17.windowDimensions = var18;
            var2.__closure = var17;
            var17 = 4141680172446.0;
            var2.__workletHash = var17;
            var17 = _closure1_slot58;
            var2.__initData = var17;
            var2 = var5.bind(var6)(var3, var2);
            var2 = var10[var7];
            var5 = var8.bind(var9)(var2);
            var3 = var5.useAnimatedStyle;
            var2 = function() {
                _fun110762: for (var _fun110762_ip = 0;;) switch (_fun110762_ip) {
                    case 0:
                        var1 = _closure3_slot10;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        var14 = !var0;
                        if (!var14) {
                            _fun110762_ip = 41;
                            continue _fun110762
                        }
                    case 22:
                        var1 = _closure3_slot2;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        var14 = var0.animated;
                    case 41:
                        if (var14) {
                            _fun110762_ip = 63;
                            continue _fun110762
                        }
                    case 44:
                        var1 = _closure3_slot0;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        var14 = var0.gestureActive;
                    case 63:
                        var1 = _closure3_slot0;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        var7 = var0.gestureActive;
                        var1 = _closure3_slot2;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        var1 = var0.drawerY;
                        var3 = var0.drawerX;
                        if (!var7) {
                            _fun110762_ip = 126;
                            continue _fun110762
                        }
                    case 110:
                        var4 = _closure3_slot3;
                        var0 = var4.get;
                        var0 = var0.bind(var4)();
                        var7 = !var0;
                    case 126:
                        var13 = var1;
                        var15 = var3;
                        if (!var7) {
                            _fun110762_ip = 205;
                            continue _fun110762
                        }
                    case 135:
                        var0 = global;
                        var6 = var0.Math;
                        var5 = var6.max;
                        var4 = 0;
                        var0 = 0;
                        if (!var7) {
                            _fun110762_ip = 173;
                            continue _fun110762
                        }
                    case 155:
                        var8 = _closure3_slot0;
                        var7 = var8.get;
                        var7 = var7.bind(var8)();
                        var0 = var7.y;
                    case 173:
                        var0 = var5.bind(var6)(var0, var4);
                        var13 = var1 + var0;
                        var4 = _closure3_slot0;
                        var0 = var4.get;
                        var0 = var0.bind(var4)();
                        var0 = var0.x;
                        var15 = var3 + var0;
                    case 205:
                        var0 = function() { // Environment: var0
                            var0 = function arg0() {
                                _fun110764: for (var _fun110764_ip = 0;;) switch (_fun110764_ip) {
                                    case 0:
                                        var0 = arg0;
                                        if (!var0) {
                                            _fun110764_ip = 39;
                                            continue _fun110764
                                        }
                                    case 6:
                                        var2 = _closure3_slot6;
                                        var1 = var2.get;
                                        var2 = var1.bind(var2)();
                                        var1 = _closure1_slot15;
                                        var1 = var1.DISMISSED;
                                        var0 = var2 !== var1;
                                    case 39:
                                        if (!var0) {
                                            _fun110764_ip = 103;
                                            continue _fun110764
                                        }
                                    case 42:
                                        var3 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var1 = 14;
                                        var2 = var5[var1];
                                        var1 = undefined;
                                        var3 = var3.bind(var1)(var2);
                                        var2 = var3.runOnJS;
                                        var4 = _closure1_slot1;
                                        var0 = 28;
                                        var0 = var5[var0];
                                        var0 = var4.bind(var1)(var0);
                                        var0 = var0.updateSourceTrackingView;
                                        var0 = var2.bind(var3)(var0);
                                        var0 = var0.bind(var1)();
                                    case 103:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var2 = {};
                            var1 = _closure3_slot6;
                            var2.mode = var1;
                            var3 = _closure1_slot15;
                            var2.VoicePanelModes = var3;
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var3 = 14;
                            var3 = var6[var3];
                            var5 = undefined;
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.runOnJS;
                            var2.runOnJS = var3;
                            var4 = _closure1_slot1;
                            var3 = 28;
                            var3 = var6[var3];
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.updateSourceTrackingView;
                            var2.updateSourceTrackingView = var3;
                            var0.__closure = var2;
                            var2 = 10394717541764.0;
                            var0.__workletHash = var2;
                            var1 = _closure1_slot60;
                            var0.__initData = var1;
                            return var0;
                        };
                        var5 = undefined;
                        var12 = var0.bind(var5)();
                        var3 = _closure1_slot55;
                        var0 = {};
                        var6 = _closure3_slot6;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        var0.mode = var4;
                        var6 = _closure3_slot3;
                        var4 = var6.get;
                        var4 = var4.bind(var6)();
                        var0.connected = var4;
                        var6 = var3.bind(var5)(var0);
                        var0 = {};
                        var4 = {};
                        var8 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var7 = 11;
                        var3 = var3[var7];
                        var10 = var8.bind(var5)(var3);
                        var9 = var10.withSpring;
                        var8 = _closure3_slot0;
                        var3 = var8.get;
                        var3 = var3.bind(var8)();
                        var3 = var3.gestureActive;
                        if (var3) {
                            _fun110762_ip = 326;
                            continue _fun110762
                        }
                    case 320:
                        var8 = _closure1_slot28;
                        _fun110762_ip = 330;
                        continue _fun110762;
                    case 326:
                        var8 = _closure1_slot17;
                    case 330:
                        var11 = 'animate-never';
                        var3 = var11;
                        if (!var14) {
                            _fun110762_ip = 348;
                            continue _fun110762
                        }
                    case 342:
                        var3 = 'animate-always';
                    case 348:
                        var21 = var10;
                        var20 = var15;
                        var19 = var8;
                        var18 = var3;
                        var17 = var12;
                        var3 = var21[var9](var20, var19, var18, var17, var16);
                        var4.translateX = var3;
                        var3 = new Array(2);
                        var3[0] = var4;
                        var4 = {};
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var8 = var8[var7];
                        var10 = var9.bind(var5)(var8);
                        var9 = var10.withSpring;
                        var15 = _closure3_slot0;
                        var8 = var15.get;
                        var8 = var8.bind(var15)();
                        var8 = var8.gestureActive;
                        if (var8) {
                            _fun110762_ip = 432;
                            continue _fun110762
                        }
                    case 426:
                        var8 = _closure1_slot28;
                        _fun110762_ip = 436;
                        continue _fun110762;
                    case 432:
                        var8 = _closure1_slot17;
                    case 436:
                        if (!var14) {
                            _fun110762_ip = 445;
                            continue _fun110762
                        }
                    case 439:
                        var11 = 'animate-always';
                    case 445:
                        var21 = var10;
                        var20 = var13;
                        var19 = var8;
                        var18 = var11;
                        var17 = var12;
                        var8 = var21[var9](var20, var19, var18, var17, var16);
                        var4.translateY = var8;
                        var3[1] = var4;
                        var0.transform = var3;
                        var4 = _closure3_slot2;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.drawerWidth;
                        var0.width = var3;
                        var3 = var4.get;
                        var3 = var3.bind(var4)();
                        var3 = var3.drawerHeight;
                        var0.height = var3;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var3 = var3[var7];
                        var5 = var4.bind(var5)(var3);
                        var4 = var5.withSpring;
                        var3 = _closure1_slot10;
                        var3 = var4.bind(var5)(var6, var3);
                        var0.borderRadius = var3;
                        var4 = _closure3_slot6;
                        var3 = var4.get;
                        var4 = var3.bind(var4)();
                        var1 = _closure1_slot15;
                        var3 = var1.PANEL;
                        var1 = 'none';
                        if (!(var4 === var3)) {
                            _fun110762_ip = 590;
                            continue _fun110762
                        }
                    case 586:
                        var1 = 'auto';
                    case 590:
                        var0.pointerEvents = var1;
                        var3 = _closure3_slot3;
                        var1 = var3.get;
                        var3 = var1.bind(var3)();
                        var1 = 'transparent';
                        if (var3) {
                            _fun110762_ip = 630;
                            continue _fun110762
                        }
                    case 615:
                        var2 = _closure3_slot1;
                        var2 = var2.maskDefaultBackground;
                        var1 = var2.backgroundColor;
                    case 630:
                        var0.backgroundColor = var1;
                        return var0;
                }
            };
            var6 = {};
            var6.useReducedMotion = var16;
            var6.wrapperDimensions = var15;
            var6.wrapperOffset = var14;
            var6.connected = var13;
            var6.mode = var12;
            var12 = _closure1_slot15;
            var6.VoicePanelModes = var12;
            var7 = var10[var7];
            var7 = var8.bind(var9)(var7);
            var7 = var7.runOnJS;
            var6.runOnJS = var7;
            var7 = 28;
            var7 = var10[var7];
            var7 = var11.bind(var9)(var7);
            var7 = var7.updateSourceTrackingView;
            var6.updateSourceTrackingView = var7;
            var7 = _closure1_slot55;
            var6.computeBorderRadii = var7;
            var7 = 11;
            var7 = var10[var7];
            var7 = var8.bind(var9)(var7);
            var7 = var7.withSpring;
            var6.withSpring = var7;
            var7 = _closure1_slot17;
            var6.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE = var7;
            var7 = _closure1_slot28;
            var6.DRAWER_SIZE_PHYSICS = var7;
            var7 = _closure1_slot10;
            var6.BORDER_RADIUS_PHYSICS = var7;
            var6.styles = var4;
            var2.__closure = var6;
            var6 = 5539911019838.0;
            var2.__workletHash = var6;
            var6 = _closure1_slot59;
            var2.__initData = var6;
            var5 = var3.bind(var5)(var2);
            var _closure3_slot13 = var5;
            var3 = _closure1_slot4;
            var2 = var3.useMemo;
            var1 = new Array(2);
            var1[0] = var5;
            var4 = var4.wrapper;
            var1[1] = var4;
            var0 = function() { // Environment: var0
                var0 = _closure3_slot1;
                var2 = var0.wrapper;
                var0 = new Array(2);
                var0[0] = var2;
                var1 = _closure3_slot13;
                var0[1] = var1;
                return var0;
            };
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var3 = undefined;
        var6 = var0.bind(var3)(var1);
        var2 = _closure1_slot21;
        var1 = _closure1_slot1;
        var7 = _closure1_slot2;
        var0 = 29;
        var0 = var7[var0];
        var1 = var1.bind(var3)(var0);
        var0 = {};
        var0.style = var6;
        var5 = _closure1_slot24;
        var0.layout = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot65 = var0;
    var0 = function arg0() {
        _fun110766: for (var _fun110766_ip = 0;;) switch (_fun110766_ip) {
            case 0:
                var6 = arg0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 31;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var3 = var4.captureMessage;
                var2 = {};
                var1 = null;
                var5 = var1 == var6;
                var1 = undefined;
                if (var5) {
                    _fun110766_ip = 61;
                    continue _fun110766
                }
            case 47:
                var5 = {};
                var6 = var6.message;
                var5.error = var6;
                var1 = var5;
            case 61:
                var2.extra = var1;
                var1 = 'VoicePanelUI: Gesture handler error';
                var1 = var3.bind(var4)(var1, var2);
                return var0;
        }
    };
    var _closure1_slot66 = var0;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var14 = 0;
    var1 = var6[var14];
    var0 = undefined;
    var1 = var8.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var13 = 1;
    var4 = var6[var13];
    var1 = arg3;
    var7 = var1.bind(var0)(var4);
    var _closure1_slot4 = var7;
    var10 = 2;
    var1 = var6[var10];
    var1 = var5.bind(var0)(var1);
    var16 = var1.StyleSheet;
    var _closure1_slot5 = var16;
    var4 = var1.Pressable;
    var _closure1_slot6 = var4;
    var9 = var1.ScrollView;
    var1 = 3;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 4;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 5;
    var1 = var6[var1];
    var1 = var8.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.BORDER_RADIUS_PHYSICS;
    var _closure1_slot10 = var4;
    var17 = var1.DEFAULT_BORDER_RADIUS;
    var _closure1_slot11 = var17;
    var4 = var1.DEFAULT_BORDER_RADIUS_PIP;
    var _closure1_slot12 = var4;
    var4 = var1.DRAWER_SPRING_PHYSICS;
    var11 = var1.IS_IOS;
    var _closure1_slot13 = var11;
    var11 = var1.MODE_CHANGE_PHYSICS;
    var12 = var1.VOICE_PANEL_CHUNK_DIVISOR;
    var _closure1_slot14 = var12;
    var12 = var1.VoicePanelModes;
    var _closure1_slot15 = var12;
    var12 = var1.LAYOUT_PHYSICS;
    var _closure1_slot16 = var12;
    var1 = var1.DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE;
    var _closure1_slot17 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.VoicePanelControlsModes;
    var _closure1_slot18 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.isActivityParticipant;
    var _closure1_slot19 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.POP_RESISTANCE;
    var _closure1_slot20 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var15 = var1.jsx;
    var _closure1_slot21 = var15;
    var1 = var1.jsxs;
    var _closure1_slot22 = var1;
    var1 = {};
    var15 = "function layoutTransition_VoicePanelUITsx1(values){const{withSpring,LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}";
    var1.code = var15;
    var _closure1_slot23 = var1;
    var1 = function() { // Environment: var3
        var0 = function arg0() {
            var2 = arg0;
            var0 = {};
            var1 = {};
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 11;
            var7 = var8[var3];
            var4 = undefined;
            var11 = var5.bind(var4)(var7);
            var10 = var11.withSpring;
            var9 = var2.targetOriginX;
            var7 = _closure1_slot16;
            var6 = 'animate-always';
            var9 = var10.bind(var11)(var9, var7, var6);
            var1.originX = var9;
            var9 = var8[var3];
            var11 = var5.bind(var4)(var9);
            var10 = var11.withSpring;
            var9 = var2.targetOriginY;
            var9 = var10.bind(var11)(var9, var7, var6);
            var1.originY = var9;
            var9 = var8[var3];
            var11 = var5.bind(var4)(var9);
            var10 = var11.withSpring;
            var9 = var2.targetWidth;
            var9 = var10.bind(var11)(var9, var7, var6);
            var1.width = var9;
            var3 = var8[var3];
            var5 = var5.bind(var4)(var3);
            var4 = var5.withSpring;
            var3 = var2.targetHeight;
            var3 = var4.bind(var5)(var3, var7, var6);
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
        var4 = _closure1_slot2;
        var3 = 11;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.withSpring;
        var2.withSpring = var3;
        var3 = _closure1_slot16;
        var2.LAYOUT_PHYSICS = var3;
        var0.__closure = var2;
        var2 = 16454235842679.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot23;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot24 = var1;
    var1 = {};
    var21 = var1;
    var20 = var12;
    var12 = copyDataProperties(var21, var20);
    var12 = 'damping';
    var1[var12] = var14;
    var _closure1_slot25 = var1;
    var1 = {};
    var15 = "function scrollViewLayoutTransition_VoicePanelUITsx2(values){const{withSpring,LAYOUT_PHYSICS,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS}=this.__closure;return{animations:{originX:withSpring(values.targetOriginX,LAYOUT_PHYSICS,'animate-always'),originY:withSpring(values.targetOriginY,LAYOUT_PHYSICS,'animate-always'),width:withSpring(values.targetWidth,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always'),height:withSpring(values.targetHeight,EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS,'animate-always')},initialValues:{originX:values.currentOriginX,originY:values.currentOriginY,width:values.currentWidth,height:values.currentHeight}};}";
    var1.code = var15;
    var _closure1_slot26 = var1;
    var1 = function() { // Environment: var3
        var0 = function arg0() {
            var2 = arg0;
            var0 = {};
            var1 = {};
            var5 = _closure1_slot0;
            var8 = _closure1_slot2;
            var3 = 11;
            var7 = var8[var3];
            var4 = undefined;
            var11 = var5.bind(var4)(var7);
            var10 = var11.withSpring;
            var9 = var2.targetOriginX;
            var12 = _closure1_slot16;
            var7 = 'animate-always';
            var9 = var10.bind(var11)(var9, var12, var7);
            var1.originX = var9;
            var9 = var8[var3];
            var11 = var5.bind(var4)(var9);
            var10 = var11.withSpring;
            var9 = var2.targetOriginY;
            var9 = var10.bind(var11)(var9, var12, var7);
            var1.originY = var9;
            var9 = var8[var3];
            var11 = var5.bind(var4)(var9);
            var10 = var11.withSpring;
            var9 = var2.targetWidth;
            var6 = _closure1_slot25;
            var9 = var10.bind(var11)(var9, var6, var7);
            var1.width = var9;
            var3 = var8[var3];
            var5 = var5.bind(var4)(var3);
            var4 = var5.withSpring;
            var3 = var2.targetHeight;
            var3 = var4.bind(var5)(var3, var6, var7);
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
        var4 = _closure1_slot2;
        var3 = 11;
        var4 = var4[var3];
        var3 = undefined;
        var3 = var5.bind(var3)(var4);
        var3 = var3.withSpring;
        var2.withSpring = var3;
        var3 = _closure1_slot16;
        var2.LAYOUT_PHYSICS = var3;
        var3 = _closure1_slot25;
        var2.EMBEDDED_ACTIVITY_ORIENTATION_UPDATE_SAFE_LAYOUT_PHYSICS = var3;
        var0.__closure = var2;
        var2 = 11745134918460.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot26;
        var0.__initData = var1;
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot27 = var1;
    var1 = {};
    var21 = var1;
    var20 = var4;
    var4 = copyDataProperties(var21, var20);
    var15 = 0.3;
    var4 = 'mass';
    var1[var4] = var15;
    var15 = 100;
    var1[var12] = var15;
    var12 = 'stiffness';
    var1[var12] = var15;
    var _closure1_slot28 = var1;
    var1 = {};
    var21 = var1;
    var20 = var11;
    var11 = copyDataProperties(var21, var20);
    var1[var4] = var10;
    var4 = {};
    var10 = 'function computeViewableChunksFromScrollPosition_VoicePanelUITsx3(scrollPosition,windowHeight,contentHeight,extraChunks=1){const{VOICE_PANEL_CHUNK_DIVISOR}=this.__closure;const chunkSize=Math.ceil(windowHeight/VOICE_PANEL_CHUNK_DIVISOR);let start=Math.max(Math.floor(scrollPosition/chunkSize)-extraChunks,0);const end=Math.min(start+VOICE_PANEL_CHUNK_DIVISOR+extraChunks*2,Math.ceil(contentHeight/chunkSize));start=Math.max(end-VOICE_PANEL_CHUNK_DIVISOR-extraChunks*2,0);return{start:start,end:end};}';
    var4.code = var10;
    var _closure1_slot29 = var4;
    var4 = function() { // Environment: var3
        var0 = function arg0, arg1, arg2() {
            _fun110772: for (var _fun110772_ip = 0;;) switch (_fun110772_ip) {
                case 0:
                    var7 = arguments[3];
                    var0 = undefined;
                    if (!(var7 === var0)) {
                        _fun110772_ip = 12;
                        continue _fun110772
                    }
                case 9:
                    var7 = 1;
                case 12:
                    var3 = global;
                    var2 = var3.Math;
                    var1 = var2.ceil;
                    var6 = _closure1_slot14;
                    var0 = arg1;
                    var0 = var0 / var6;
                    var11 = var1.bind(var2)(var0);
                    var2 = var3.Math;
                    var1 = var2.max;
                    var5 = var3.Math;
                    var4 = var5.floor;
                    var0 = arg0;
                    var0 = var0 / var11;
                    var0 = var4.bind(var5)(var0);
                    var0 = var0 - var7;
                    var5 = 0;
                    var0 = var1.bind(var2)(var0, var5);
                    var8 = var3.Math;
                    var4 = var8.min;
                    var1 = var0 + var6;
                    var2 = 2;
                    var0 = var2 * var7;
                    var1 = var1 + var0;
                    var10 = var3.Math;
                    var9 = var10.ceil;
                    var0 = arg2;
                    var0 = var0 / var11;
                    var0 = var9.bind(var10)(var0);
                    var1 = var4.bind(var8)(var1, var0);
                    var0 = {};
                    var4 = var3.Math;
                    var3 = var4.max;
                    var6 = var1 - var6;
                    var2 = var2 * var7;
                    var2 = var6 - var2;
                    var2 = var3.bind(var4)(var2, var5);
                    var0.start = var2;
                    var0.end = var1;
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot14;
        var2.VOICE_PANEL_CHUNK_DIVISOR = var3;
        var0.__closure = var2;
        var2 = 3008066799757.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot29;
        var0.__initData = var1;
        return var0;
    };
    var4 = var4.bind(var0)();
    var _closure1_slot30 = var4;
    var4 = 12;
    var4 = var6[var4];
    var11 = var5.bind(var0)(var4);
    var10 = var11.createStyles;
    var4 = {};
    var12 = {};
    var20 = var16.absoluteFillObject;
    var21 = var12;
    var15 = copyDataProperties(var21, var20);
    var18 = 'hidden';
    var15 = 'overflow';
    var12[var15] = var18;
    var4.accessibilityView = var12;
    var12 = {};
    var20 = var16.absoluteFillObject;
    var21 = var12;
    var15 = copyDataProperties(var21, var20);
    var15 = 'zIndex';
    var12[var15] = var13;
    var4.wrapper = var12;
    var12 = {};
    var15 = 13;
    var18 = var6[var15];
    var18 = var8.bind(var0)(var18);
    var18 = var18.colors;
    var18 = var18.BACKGROUND_BASE_LOWER;
    var12.backgroundColor = var18;
    var4.maskDefaultBackground = var12;
    var12 = {};
    var20 = var16.absoluteFillObject;
    var21 = var12;
    var16 = copyDataProperties(var21, var20);
    var16 = 'borderTopLeftRadius';
    var12[var16] = var17;
    var16 = 'borderTopRightRadius';
    var12[var16] = var17;
    var4.scrollView = var12;
    var12 = {
        'flexGrow': 1,
        'flexShrink': 0
    };
    var4.scrollViewContent = var12;
    var12 = {};
    var15 = var6[var15];
    var15 = var8.bind(var0)(var15);
    var15 = var15.colors;
    var15 = var15.MOBILE_BACKGROUND_SCRIM_OPAQUE;
    var12.backgroundColor = var15;
    var12.zIndex = var14;
    var4.shade = var12;
    var12 = {};
    var12.flexGrow = var13;
    var4.shadePressable = var12;
    var4 = var10.bind(var11)(var4);
    var _closure1_slot31 = var4;
    var4 = 14;
    var4 = var6[var4];
    var8 = var8.bind(var0)(var4);
    var4 = var8.createAnimatedComponent;
    var4 = var4.bind(var8)(var9);
    var _closure1_slot32 = var4;
    var4 = 15;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var4 = var8.isMetaQuest;
    var4 = var4.bind(var8)();
    var _closure1_slot33 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx4(){const{gestureState,connected,mode}=this.__closure;return{gestureActive:gestureState.get().active,connected:connected.get(),mode:mode.get()};}';
    var4.code = var8;
    var _closure1_slot34 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx5(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,runOnJS,setPanelFullscreen,setPanelOpen,setPanelPIP}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{gestureActive:gestureActive,connected:connected,mode:mode}=props;if(!connected||gestureActive||mode!==VoicePanelModes.PANEL){runOnJS(setPanelFullscreen)(false);}else{runOnJS(setPanelFullscreen)(true);}if(mode===VoicePanelModes.PANEL){runOnJS(setPanelOpen)(true);}else{runOnJS(setPanelOpen)(false);}if(mode===VoicePanelModes.PIP){runOnJS(setPanelPIP)(true);}else{runOnJS(setPanelPIP)(false);}}';
    var4.code = var8;
    var _closure1_slot35 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx6(){const{mode,VoicePanelModes,focused}=this.__closure;var _focused$get;return mode.get()===VoicePanelModes.PANEL?(_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id:undefined;}';
    var4.code = var8;
    var _closure1_slot36 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx7(manualId,previousManualId){const{runOnJS,handleFocusChange}=this.__closure;if(manualId!==previousManualId){runOnJS(handleFocusChange)(manualId);}}';
    var4.code = var8;
    var _closure1_slot37 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx8(){const{connected,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes,runOnJS,showControls,hideControls}=this.__closure;if(!connected.get())return;if(mode.get()===VoicePanelModes.PIP){}else if(controlsSpecs.get().mode===VoicePanelControlsModes.HIDDEN){runOnJS(showControls)({debounce:true});}else{runOnJS(hideControls)({debounce:true});}}';
    var4.code = var8;
    var _closure1_slot38 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx9(){const{updateSharedValueIfChanged,gestureState}=this.__closure;updateSharedValueIfChanged(gestureState,{cancel:false,active:false});}';
    var4.code = var8;
    var _closure1_slot39 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx10(event){const{gestureState,mode,VoicePanelModes,calculatePIPPositionFromVelocity,windowDimensions,safeArea,updateSharedValueIfChanged,wrapperDimensions,wrapperOffset,connected,runOnJS,setMode,lockScrolling,MIN_DISMISS_MOVE_PERCENTAGE,dismissPanel}=this.__closure;if(gestureState.get().cancel)return;const{velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY}=event;if(mode.get()===VoicePanelModes.PIP){const{pipX:pipX,pipY:pipY}=calculatePIPPositionFromVelocity({velocityX:velocityX,velocityY:velocityY,absoluteX:absoluteX,absoluteY:absoluteY,windowDimensions:windowDimensions.get(),safeArea:safeArea.get()});updateSharedValueIfChanged(wrapperDimensions,{pipX:pipX,pipY:pipY});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else if(mode.get()===VoicePanelModes.PANEL){if(velocityY>0){if(connected.get()){if(!gestureState.get().requiresPop){runOnJS(setMode)(VoicePanelModes.PIP);updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}else{const panelHeight=wrapperDimensions.get().drawerHeight-wrapperDimensions.get().drawerY;const dismissThreshold=panelHeight*MIN_DISMISS_MOVE_PERCENTAGE;if(wrapperOffset.get().y>dismissThreshold){updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});runOnJS(dismissPanel)();return;}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}else{updateSharedValueIfChanged(wrapperOffset,{gestureActive:false,x:0,y:0});lockScrolling.set(false);}}}';
    var4.code = var8;
    var _closure1_slot40 = var4;
    var4 = {};
    var8 = "function VoicePanelUITsx11(_e){const{lockScrolling,updateSharedValueIfChanged,gestureState,wrapperOffset}=this.__closure;lockScrolling.set(false);updateSharedValueIfChanged(gestureState,{cancel:false,active:false});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});console.log('onTouchesCancelled');}";
    var4.code = var8;
    var _closure1_slot41 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx12(event){const{gestureState,mode,VoicePanelModes,connected,lockScrolling,scrollPosition,POP_RESISTANCE,PIP_POP_HEIGHT,runOnJS,triggerHapticFeedback,HapticFeedbackTypes,updateSharedValueIfChanged,wrapperOffset}=this.__closure;if(gestureState.get().cancel)return;if(mode.get()!==VoicePanelModes.PIP){const minYOffset=0;let newYOffset=(gestureState.get().absoluteYStart-event.absoluteY)*-1;if(connected.get()&&!gestureState.get().requiresPop&&newYOffset<=minYOffset){gestureState.set({...gestureState.get(),requiresPop:true});}if(lockScrolling.get()&&newYOffset<minYOffset){lockScrolling.set(false);}else if(!lockScrolling.get()&&scrollPosition.get()<=0){lockScrolling.set(true);}if(gestureState.get().requiresPop){const distance=Math.max(newYOffset,0);const resistance=distance*POP_RESISTANCE;if(distance<=PIP_POP_HEIGHT){newYOffset=distance-resistance;}else{gestureState.set({...gestureState.get(),requiresPop:false});runOnJS(triggerHapticFeedback)(HapticFeedbackTypes.IMPACT_MEDIUM);}}updateSharedValueIfChanged(wrapperOffset,{y:newYOffset,x:0});}else{updateSharedValueIfChanged(wrapperOffset,{x:(gestureState.get().absoluteXStart-event.absoluteX)*-1,y:(gestureState.get().absoluteYStart-event.absoluteY)*-1});}}';
    var4.code = var8;
    var _closure1_slot42 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx13(event,manager){const{State,gestureState,mode,VoicePanelModes,scrollPosition,isQuest,MIN_GESTURE_MOVE,focused,runOnJS,triggerIOSHaptic,updateSharedValueIfChanged,wrapperOffset,lockScrolling}=this.__closure;if(event.state!==State.BEGAN||gestureState.get().active||gestureState.get().cancel)return;const{absoluteY:absoluteY,absoluteX:absoluteX}=event.changedTouches[0];const yDiff=gestureState.get().absoluteYStart-absoluteY;const xDiff=gestureState.get().absoluteXStart-absoluteX;const absoluteMovement=Math.max(Math.abs(yDiff),Math.abs(xDiff));const isNotPullDownGesture=Math.abs(xDiff)>=Math.abs(yDiff)||yDiff>0;let startGesture=false;if(mode.get()===VoicePanelModes.PANEL){var _focused$get;const scrollPos=Math.floor(scrollPosition.get());if(yDiff<0&&scrollPos<=0){if(isQuest){startGesture=absoluteMovement>MIN_GESTURE_MOVE;}else{startGesture=true;}}else if(((_focused$get=focused.get())===null||_focused$get===void 0?void 0:_focused$get.id)!=null&&isNotPullDownGesture){manager.fail();}}else if(mode.get()===VoicePanelModes.PIP&&absoluteMovement>MIN_GESTURE_MOVE){startGesture=true;runOnJS(triggerIOSHaptic)();}if(startGesture){updateSharedValueIfChanged(wrapperOffset,{gestureActive:true});gestureState.set({absoluteXStart:absoluteX,absoluteYStart:absoluteY+scrollPosition.get(),cancel:false,active:true,requiresPop:gestureState.get().requiresPop});lockScrolling.set(true);manager.activate();}else{updateSharedValueIfChanged(gestureState,{absoluteYStart:absoluteY,absoluteXStart:absoluteX});}}';
    var4.code = var8;
    var _closure1_slot43 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx14(event){const{gestureState,updateSharedValueIfChanged,wrapperOffset,connected,mode,VoicePanelModes}=this.__closure;if(gestureState.get().cancel)return;updateSharedValueIfChanged(wrapperOffset,{x:0,y:0});gestureState.set({absoluteXStart:event.absoluteX,absoluteYStart:event.absoluteY,active:false,cancel:false,requiresPop:connected.get()&&mode.get()===VoicePanelModes.PANEL});}';
    var4.code = var8;
    var _closure1_slot44 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx15(event,manager){const{IS_IOS,windowDimensions,safeArea,gestureState,isFocusedVideoZoomed,mode,VoicePanelModes,controlsSpecs,VoicePanelControlsModes}=this.__closure;const touch=event.allTouches[0];if(IS_IOS&&touch!=null&&touch.absoluteY>windowDimensions.get().height-safeArea.get().bottom){gestureState.set({...gestureState.get(),cancel:true});manager.activate();return;}if(isFocusedVideoZoomed.get()||mode.get()===VoicePanelModes.PANEL&&controlsSpecs.get().mode===VoicePanelControlsModes.DRAWER){gestureState.set({...gestureState.get(),cancel:true});manager.fail();}}';
    var4.code = var8;
    var _closure1_slot45 = var4;
    var4 = {};
    var8 = 'function onBeginDrag_VoicePanelUITsx16(event){const{scrollPosition,dragScrolling}=this.__closure;scrollPosition.set(event.contentOffset.y);dragScrolling.set(true);}';
    var4.code = var8;
    var _closure1_slot46 = var4;
    var4 = {};
    var8 = 'function onEndDrag_VoicePanelUITsx17(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}';
    var4.code = var8;
    var _closure1_slot47 = var4;
    var4 = {};
    var8 = 'function onMomentumEnd_VoicePanelUITsx18(){const{dragScrolling}=this.__closure;dragScrolling.set(false);}';
    var4.code = var8;
    var _closure1_slot48 = var4;
    var4 = {};
    var8 = 'function onScroll_VoicePanelUITsx19(event){const{lockScrolling,scrollPosition,scrollTo,scrollerRef,computeViewableChunksFromScrollPosition,windowDimensions,scrollableRegionSize,updateSharedValueIfChanged,viewableChunks}=this.__closure;if(lockScrolling.get()){if(scrollPosition.get()<0){scrollPosition.set(0);}const targetScrollPosition=scrollPosition.get();if(Math.abs(event.contentOffset.y-targetScrollPosition)<0.1){return;}scrollTo(scrollerRef,0,targetScrollPosition,false);}else{let newViewableChunks;if(scrollPosition.get()!==event.contentOffset.y){newViewableChunks=computeViewableChunksFromScrollPosition(scrollPosition.get(),windowDimensions.get().height,scrollableRegionSize.get());}scrollPosition.set(event.contentOffset.y);newViewableChunks!=null&&updateSharedValueIfChanged(viewableChunks,newViewableChunks);}}';
    var4.code = var8;
    var _closure1_slot49 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx20(){const{mode}=this.__closure;return mode.get();}';
    var4.code = var8;
    var _closure1_slot50 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx21(mode,previous){const{VoicePanelModes,lockScrolling}=this.__closure;if(previous==null||mode===previous)return;if(mode===VoicePanelModes.PANEL&&previous===VoicePanelModes.PIP){lockScrolling.set(false);}else if(mode===VoicePanelModes.PIP){lockScrolling.set(true);}}';
    var4.code = var8;
    var _closure1_slot51 = var4;
    var4 = {};
    var8 = "function VoicePanelUITsx22(){const{mode,VoicePanelModes,focused,lockScrolling,calculateVoicePanelHeaderSpecs,safeArea}=this.__closure;const isPIPMode=mode.get()===VoicePanelModes.PIP;const disableScroll=isPIPMode||focused.get()!=null;return{pointerEvents:isPIPMode?'none':'auto',scrollEnabled:!disableScroll,showsVerticalScrollIndicator:lockScrolling.get()?false:!disableScroll,scrollIndicatorInsets:{top:calculateVoicePanelHeaderSpecs(safeArea.get()).height-safeArea.get().top,bottom:safeArea.get().bottom}};}";
    var4.code = var8;
    var _closure1_slot52 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx23(){const{mode,VoicePanelModes,connected,gestureState,wrapperDimensions,wrapperOffset,windowDimensions}=this.__closure;switch(mode.get()){case VoicePanelModes.PIP:case VoicePanelModes.DISMISSED:return 0;default:{if(connected.get()&&gestureState.get().active&&gestureState.get().requiresPop){return 1;}const drawerTop=wrapperDimensions.get().drawerY+(wrapperOffset.get().gestureActive?wrapperOffset.get().y:0);const screenSize=windowDimensions.get().height;const percentage=(screenSize-drawerTop)/screenSize;return Math.min(Math.max(percentage,0),1);}}}';
    var4.code = var8;
    var _closure1_slot53 = var4;
    var4 = {};
    var8 = 'function computeBorderRadii_VoicePanelUITsx24({mode:mode,connected:connected}){const{VoicePanelModes,DEFAULT_BORDER_RADIUS_PIP,DEFAULT_BORDER_RADIUS}=this.__closure;if(mode===VoicePanelModes.PIP){return DEFAULT_BORDER_RADIUS_PIP;}return!connected?DEFAULT_BORDER_RADIUS:0;}';
    var4.code = var8;
    var _closure1_slot54 = var4;
    var4 = function() { // Environment: var3
        var0 = function arg0() {
            _fun110774: for (var _fun110774_ip = 0;;) switch (_fun110774_ip) {
                case 0:
                    var0 = arg0;
                    var3 = var0.mode;
                    var2 = var0.connected;
                    var0 = _closure1_slot15;
                    var0 = var0.PIP;
                    if (!(var3 !== var0)) {
                        _fun110774_ip = 42;
                        continue _fun110774
                    }
                case 31:
                    var0 = 0;
                    if (var2) {
                        _fun110774_ip = 40;
                        continue _fun110774
                    }
                case 36:
                    var0 = _closure1_slot11;
                case 40:
                    _fun110774_ip = 46;
                    continue _fun110774;
                case 42:
                    var0 = _closure1_slot12;
                case 46:
                    return var0;
            }
        };
        var2 = {};
        var3 = _closure1_slot15;
        var2.VoicePanelModes = var3;
        var3 = _closure1_slot12;
        var2.DEFAULT_BORDER_RADIUS_PIP = var3;
        var3 = _closure1_slot11;
        var2.DEFAULT_BORDER_RADIUS = var3;
        var0.__closure = var2;
        var2 = 4574399878042.0;
        var0.__workletHash = var2;
        var1 = _closure1_slot54;
        var0.__initData = var1;
        return var0;
    };
    var4 = var4.bind(var0)();
    var _closure1_slot55 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx25(){const{controlsSpecs}=this.__closure;return controlsSpecs.get().height;}';
    var4.code = var8;
    var _closure1_slot56 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx26(){const{mode,connected,windowDimensions,safeArea,focused,pipState,controlsHeight,preJoinContentSize}=this.__closure;return{modeToSet:mode.get(),connected:connected.get(),windowWidth:windowDimensions.get().width,windowHeight:windowDimensions.get().height,safeArea:safeArea.get(),focused:focused.get(),pipState:pipState,controlsHeight:controlsHeight.get(),preJoinContentSize:preJoinContentSize.get()};}';
    var4.code = var8;
    var _closure1_slot57 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx27(props,previous){const{cheapWorkletShallowEqual,VoicePanelModes,wrapperDimensions,updateSharedValueIfChanged,wrapperOffset,getMaxPanelWidth,getPanelX,roundToNearestPixel,windowDimensions}=this.__closure;if(cheapWorkletShallowEqual(props,previous!==null&&previous!==void 0?previous:undefined))return;const{modeToSet:modeToSet,connected:connected,windowWidth:windowWidth,windowHeight:windowHeight,safeArea:safeArea,pipState:pipState,controlsHeight:controlsHeight,preJoinContentSize:preJoinContentSize}=props;if(modeToSet===VoicePanelModes.PIP&&pipState.id==null){return;}const animated=previous!=null?windowHeight===previous.windowHeight&&windowWidth===previous.windowWidth&&safeArea.top===previous.safeArea.top&&safeArea.bottom===previous.safeArea.bottom&&safeArea.left===previous.safeArea.left&&safeArea.right===previous.safeArea.right:true;let{drawerX:drawerX,drawerY:drawerY}=wrapperDimensions.get();if(modeToSet===VoicePanelModes.PANEL){if(connected){drawerX=0;drawerY=0;updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:windowWidth,drawerHeight:windowHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});updateSharedValueIfChanged(wrapperOffset,{gestureActive:false});}else{const drawerWidth=getMaxPanelWidth({windowWidth:windowWidth,connected:connected,safeAreaLeft:safeArea.left,safeAreaRight:safeArea.right});drawerX=getPanelX(windowWidth,drawerWidth);drawerY=connected?0:roundToNearestPixel(Math.max(windowHeight-preJoinContentSize-controlsHeight-safeArea.bottom,windowDimensions.get().height-0.8*windowDimensions.get().height));updateSharedValueIfChanged(wrapperDimensions,{drawerWidth:drawerWidth,drawerHeight:windowHeight,drawerX:drawerX,drawerY:drawerY,animated:animated,mode:modeToSet});}}else if(modeToSet===VoicePanelModes.DISMISSED){if(connected){updateSharedValueIfChanged(wrapperDimensions,{mode:modeToSet});}else{updateSharedValueIfChanged(wrapperDimensions,{drawerY:windowDimensions.get().height+60,mode:modeToSet});}}}';
    var4.code = var8;
    var _closure1_slot58 = var4;
    var4 = {};
    var8 = "function VoicePanelUITsx28(){const{useReducedMotion,wrapperDimensions,wrapperOffset,connected,mode,VoicePanelModes,runOnJS,updateSourceTrackingView,computeBorderRadii,withSpring,DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE,DRAWER_SIZE_PHYSICS,BORDER_RADIUS_PHYSICS,styles}=this.__closure;const animateXY=!useReducedMotion.get()&&wrapperDimensions.get().animated||wrapperOffset.get().gestureActive;let{gestureActive:gestureActive}=wrapperOffset.get();let{drawerY:y,drawerX:x}=wrapperDimensions.get();gestureActive=gestureActive&&!connected.get();if(gestureActive){y+=Math.max(gestureActive?wrapperOffset.get().y:0,0);x+=wrapperOffset.get().x;}const updateSourceTrackingViewHelper=function(finished){if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}};const borderRadius=computeBorderRadii({mode:mode.get(),connected:connected.get()});return{transform:[{translateX:withSpring(x,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)},{translateY:withSpring(y,wrapperOffset.get().gestureActive?DRAWER_SPRING_PHYSICS_GESTURE_ACTIVE:DRAWER_SIZE_PHYSICS,animateXY?'animate-always':'animate-never',updateSourceTrackingViewHelper)}],width:wrapperDimensions.get().drawerWidth,height:wrapperDimensions.get().drawerHeight,borderRadius:withSpring(borderRadius,BORDER_RADIUS_PHYSICS),pointerEvents:mode.get()===VoicePanelModes.PANEL?'auto':'none',backgroundColor:connected.get()?'transparent':styles.maskDefaultBackground.backgroundColor};}";
    var4.code = var8;
    var _closure1_slot59 = var4;
    var4 = {};
    var8 = 'function VoicePanelUITsx29(finished){const{mode,VoicePanelModes,runOnJS,updateSourceTrackingView}=this.__closure;if(finished&&mode.get()!==VoicePanelModes.DISMISSED){runOnJS(updateSourceTrackingView)();}}';
    var4.code = var8;
    var _closure1_slot60 = var4;
    var4 = {
        'mass': 0.6,
        'damping': 30,
        'stiffness': 400,
        'overshootClamping': true
    };
    var _closure1_slot61 = var4;
    var4 = {};
    var8 = "function VoicePanelUITsx30(){const{withSpring,opacity,DrawerShadeOpacityPhysics,accessibilityPreferencesSharedValue}=this.__closure;return{opacity:withSpring(opacity.get(),DrawerShadeOpacityPhysics),display:accessibilityPreferencesSharedValue.get().screenReaderEnabled&&opacity.get()===0?'none':'flex',pointerEvents:opacity.get()===0?'none':'auto'};}";
    var4.code = var8;
    var _closure1_slot62 = var4;
    var8 = var7.memo;
    var4 = function(arg0) { // Environment: var3
        var0 = arg0;
        var10 = var0.opacity;
        var _closure2_slot0 = var10;
        var7 = var0.onPress;
        var0 = _closure1_slot31;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var11 = _closure1_slot0;
        var5 = _closure1_slot2;
        var0 = 14;
        var2 = var5[var0];
        var6 = var11.bind(var3)(var2);
        var2 = var6.useAnimatedStyle;
        var1 = function() {
            _fun110776: for (var _fun110776_ip = 0;;) switch (_fun110776_ip) {
                case 0:
                    var0 = {};
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 11;
                    var1 = var5[var1];
                    var3 = undefined;
                    var8 = var4.bind(var3)(var1);
                    var7 = var8.withSpring;
                    var9 = _closure2_slot0;
                    var6 = var9.get;
                    var6 = var6.bind(var9)();
                    var2 = _closure1_slot61;
                    var2 = var7.bind(var8)(var6, var2);
                    var0.opacity = var2;
                    var2 = 30;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var3 = var2.accessibilityPreferencesSharedValue;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = var2.screenReaderEnabled;
                    var5 = 'flex';
                    var2 = var5;
                    if (!var3) {
                        _fun110776_ip = 131;
                        continue _fun110776
                    }
                case 105:
                    var4 = _closure2_slot0;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = 0;
                    var2 = var5;
                    if (!(var3 === var4)) {
                        _fun110776_ip = 131;
                        continue _fun110776
                    }
                case 127:
                    var2 = 'none';
                case 131:
                    var0.display = var2;
                    var2 = _closure2_slot0;
                    var1 = var2.get;
                    var3 = var1.bind(var2)();
                    var1 = 'auto';
                    var2 = 0;
                    if (!(var2 === var3)) {
                        _fun110776_ip = 162;
                        continue _fun110776
                    }
                case 158:
                    var1 = 'none';
                case 162:
                    var0.pointerEvents = var1;
                    return var0;
            }
        };
        var9 = {};
        var12 = 11;
        var12 = var5[var12];
        var12 = var11.bind(var3)(var12);
        var12 = var12.withSpring;
        var9.withSpring = var12;
        var9.opacity = var10;
        var10 = _closure1_slot61;
        var9.DrawerShadeOpacityPhysics = var10;
        var10 = 30;
        var10 = var5[var10];
        var10 = var11.bind(var3)(var10);
        var10 = var10.accessibilityPreferencesSharedValue;
        var9.accessibilityPreferencesSharedValue = var10;
        var1.__closure = var9;
        var9 = 4107656223951.0;
        var1.__workletHash = var9;
        var9 = _closure1_slot62;
        var1.__initData = var9;
        var6 = var2.bind(var6)(var1);
        var2 = _closure1_slot21;
        var1 = _closure1_slot1;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var1 = var0.View;
        var0 = {
            'style': null,
            'importantForAccessibility': 'no',
            'accessibilityElementsHidden': true
        };
        var5 = _closure1_slot5;
        var9 = var5.absoluteFill;
        var5 = new Array(3);
        var5[0] = var9;
        var9 = var8.shade;
        var5[1] = var9;
        var5[2] = var6;
        var0.style = var5;
        var6 = _closure1_slot21;
        var5 = _closure1_slot6;
        var4 = {};
        var8 = var8.shadePressable;
        var4.style = var8;
        var4.onPress = var7;
        var4 = var6.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var4 = var8.bind(var7)(var4);
    var _closure1_slot63 = var4;
    var4 = var7.memo;
    var3 = function() {
        _fun110777: for (var _fun110777_ip = 0;;) switch (_fun110777_ip) {
            case 0:
                var1 = _closure1_slot31;
                var4 = undefined;
                var30 = var1.bind(var4)();
                var6 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 32;
                var2 = var7[var1];
                var3 = var6.bind(var4)(var2);
                var2 = 33;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.VOICE_PANEL;
                var2 = var3.bind(var4)(var2);
                var5 = var2.analyticsLocations;
                var8 = _closure1_slot4;
                var3 = var8.useContext;
                var2 = 16;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var3.bind(var8)(var2);
                var10 = var2.scrollPosition;
                var9 = var2.dragScrolling;
                var16 = var2.channelId;
                var _closure2_slot0 = var16;
                var14 = var2.dismissPanel;
                var3 = _closure1_slot4;
                var2 = var3.useState;
                var27 = false;
                var3 = var2.bind(var3)(var27);
                var2 = _closure1_slot3;
                var21 = 2;
                var8 = var2.bind(var4)(var3, var21);
                var2 = 0;
                var2 = var8[var2];
                var3 = 1;
                var3 = var8[var3];
                var _closure2_slot1 = var3;
                var11 = _closure1_slot4;
                var8 = var11.useRef;
                var3 = -1;
                var3 = var8.bind(var11)(var3);
                var _closure2_slot2 = var3;
                var13 = _closure1_slot4;
                var11 = var13.useCallback;
                var8 = new Array(1);
                var8[0] = var16;
                var3 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = global;
                    var3 = var0.clearTimeout;
                    var0 = _closure2_slot2;
                    var2 = var0.current;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 34;
                    var2 = var4[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.batchUpdates;
                    var1 = function() { // Environment: var1
                        _fun110779: for (var _fun110779_ip = 0;;) switch (_fun110779_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                if (var0) {
                                    _fun110779_ip = 112;
                                    continue _fun110779
                                }
                            case 10:
                                var2 = _closure1_slot9;
                                var1 = var2.getState;
                                var2 = var1.bind(var2)();
                                var1 = var2.setChannelPanelFullscreen;
                                var5 = _closure2_slot0;
                                var3 = _closure3_slot0;
                                var1 = var1.bind(var2)(var5, var3);
                                var1 = _closure1_slot8;
                                var0 = var1.getState;
                                var2 = var0.bind(var1)();
                                var1 = var2.requestFreezeLock;
                                var0 = {};
                                var0.lockEnabled = var3;
                                var3 = global;
                                var3 = var3.HermesInternal;
                                var4 = var3.concat;
                                var3 = 'voice-panel-freeze-';
                                var3 = var4.bind(var3)(var5);
                                var0.key = var3;
                                var0 = var1.bind(var2)(var0);
                                _fun110779_ip = 156;
                                continue _fun110779;
                            case 112:
                                var1 = _closure2_slot2;
                                var0 = global;
                                var4 = var0.setTimeout;
                                var3 = undefined;
                                var2 = function() { // Environment: var0
                                    var2 = _closure1_slot9;
                                    var1 = var2.getState;
                                    var2 = var1.bind(var2)();
                                    var1 = var2.setChannelPanelFullscreen;
                                    var5 = _closure2_slot0;
                                    var3 = _closure3_slot0;
                                    var1 = var1.bind(var2)(var5, var3);
                                    var1 = _closure1_slot8;
                                    var0 = var1.getState;
                                    var2 = var0.bind(var1)();
                                    var1 = var2.requestFreezeLock;
                                    var0 = {};
                                    var0.lockEnabled = var3;
                                    var3 = global;
                                    var3 = var3.HermesInternal;
                                    var4 = var3.concat;
                                    var3 = 'voice-panel-freeze-';
                                    var3 = var4.bind(var3)(var5);
                                    var0.key = var3;
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var0 = 1000;
                                var0 = var4.bind(var3)(var2, var0);
                                var1.current = var0;
                            case 156:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3 = var11.bind(var13)(var3, var8);
                var15 = _closure1_slot4;
                var13 = var15.useLayoutEffect;
                var11 = function() { // Environment: var0
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearTimeout;
                        var0 = _closure2_slot2;
                        var1 = var0.current;
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var8 = new Array(0);
                var8 = var13.bind(var15)(var11, var8);
                var8 = {};
                var8.scrollPosition = var10;
                var8.dragScrolling = var9;
                var8.setPanelFullscreen = var3;
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var9 = new Array(1);
                var9[0] = var16;
                var3 = function(arg0) { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.getState;
                    var3 = var0.bind(var1)();
                    var2 = var3.setChannelPanelOpen;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var3 = var10.bind(var11)(var3, var9);
                var8.setPanelOpen = var3;
                var11 = _closure1_slot4;
                var10 = var11.useCallback;
                var9 = new Array(1);
                var9[0] = var16;
                var3 = function(arg0) { // Environment: var0
                    var1 = _closure1_slot9;
                    var0 = var1.getState;
                    var3 = var0.bind(var1)();
                    var2 = var3.setChannelPanelPIP;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    var0 = undefined;
                    return var0;
                };
                var3 = var10.bind(var11)(var3, var9);
                var8.setPanelPIP = var3;
                var3 = function arg0() {
                    var1 = arg0;
                    var26 = var1.scrollPosition;
                    var _closure3_slot0 = var26;
                    var27 = var1.dragScrolling;
                    var _closure3_slot1 = var27;
                    var39 = var1.setPanelFullscreen;
                    var _closure3_slot2 = var39;
                    var38 = var1.setPanelOpen;
                    var _closure3_slot3 = var38;
                    var37 = var1.setPanelPIP;
                    var _closure3_slot4 = var37;
                    var3 = _closure1_slot4;
                    var2 = var3.useContext;
                    var24 = _closure1_slot1;
                    var19 = _closure1_slot2;
                    var1 = 16;
                    var1 = var19[var1];
                    var14 = undefined;
                    var1 = var24.bind(var14)(var1);
                    var1 = var2.bind(var3)(var1);
                    var6 = var1.channelId;
                    var _closure3_slot5 = var6;
                    var17 = var1.connected;
                    var _closure3_slot6 = var17;
                    var32 = var1.controlsSpecs;
                    var _closure3_slot7 = var32;
                    var31 = var1.dismissPanel;
                    var _closure3_slot8 = var31;
                    var30 = var1.dismissToPIPGestureRef;
                    var _closure3_slot9 = var30;
                    var25 = var1.focused;
                    var _closure3_slot10 = var25;
                    var28 = var1.hideControls;
                    var _closure3_slot11 = var28;
                    var21 = var1.isFocusedVideoZoomed;
                    var _closure3_slot12 = var21;
                    var18 = var1.mode;
                    var _closure3_slot13 = var18;
                    var22 = var1.safeArea;
                    var _closure3_slot14 = var22;
                    var20 = var1.setMode;
                    var _closure3_slot15 = var20;
                    var5 = var1.showControls;
                    var _closure3_slot16 = var5;
                    var15 = var1.windowDimensions;
                    var _closure3_slot17 = var15;
                    var16 = var1.wrapperDimensions;
                    var _closure3_slot18 = var16;
                    var4 = var1.wrapperOffset;
                    var _closure3_slot19 = var4;
                    var1 = 17;
                    var1 = var19[var1];
                    var1 = var24.bind(var14)(var1);
                    var33 = var1.bind(var14)();
                    var _closure3_slot20 = var33;
                    var12 = _closure1_slot0;
                    var1 = 14;
                    var2 = var19[var1];
                    var7 = var12.bind(var14)(var2);
                    var3 = var7.useSharedValue;
                    var2 = 0;
                    var3 = var3.bind(var7)(var2);
                    var _closure3_slot21 = var3;
                    var7 = var19[var1];
                    var9 = var12.bind(var14)(var7);
                    var8 = var9.useSharedValue;
                    var7 = false;
                    var23 = var8.bind(var9)(var7);
                    var _closure3_slot22 = var23;
                    var7 = var19[var1];
                    var9 = var12.bind(var14)(var7);
                    var8 = var9.useSharedValue;
                    var7 = {};
                    var7.start = var2;
                    var10 = _closure1_slot14;
                    var7.end = var10;
                    var8 = var8.bind(var9)(var7);
                    var _closure3_slot23 = var8;
                    var10 = _closure1_slot4;
                    var9 = var10.useState;
                    var7 = true;
                    var10 = var9.bind(var10)(var7);
                    var9 = _closure1_slot3;
                    var7 = 2;
                    var7 = var9.bind(var14)(var10, var7);
                    var29 = var7[var2];
                    var _closure3_slot24 = var29;
                    var2 = 1;
                    var2 = var7[var2];
                    var _closure3_slot25 = var2;
                    var10 = _closure1_slot4;
                    var9 = var10.useMemo;
                    var7 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 18;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var1 = var0.Gesture;
                        var0 = var1.Native;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2 = new Array(0);
                    var9 = var9.bind(var10)(var7, var2);
                    var _closure3_slot26 = var9;
                    var2 = var19[var1];
                    var7 = var12.bind(var14)(var2);
                    var2 = var7.useAnimatedRef;
                    var10 = var2.bind(var7)();
                    var _closure3_slot27 = var10;
                    var2 = var19[var1];
                    var11 = var12.bind(var14)(var2);
                    var7 = var11.useSharedValue;
                    var2 = {
                        'absoluteXStart': 0,
                        'absoluteYStart': 0,
                        'cancel': false,
                        'active': false,
                        'requiresPop': false
                    };
                    var2 = var7.bind(var11)(var2);
                    var _closure3_slot28 = var2;
                    var7 = var19[var1];
                    var35 = var12.bind(var14)(var7);
                    var34 = var35.useAnimatedReaction;
                    var11 = function() {
                        var0 = {};
                        var3 = _closure3_slot28;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var2 = var2.active;
                        var0.gestureActive = var2;
                        var3 = _closure3_slot6;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        var0.connected = var2;
                        var2 = _closure3_slot13;
                        var1 = var2.get;
                        var1 = var1.bind(var2)();
                        var0.mode = var1;
                        return var0;
                    };
                    var7 = {};
                    var7.gestureState = var2;
                    var7.connected = var17;
                    var7.mode = var18;
                    var11.__closure = var7;
                    var7 = 5596084348360.0;
                    var11.__workletHash = var7;
                    var7 = _closure1_slot34;
                    var11.__initData = var7;
                    var7 = function arg0, arg1() {
                        _fun110786: for (var _fun110786_ip = 0;;) switch (_fun110786_ip) {
                            case 0:
                                var3 = arg0;
                                var6 = arg1;
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 19;
                                var2 = var2[var0];
                                var0 = undefined;
                                var5 = var4.bind(var0)(var2);
                                var4 = var5.cheapWorkletShallowEqual;
                                var2 = null;
                                var7 = var2 != var6;
                                var2 = undefined;
                                if (!var7) {
                                    _fun110786_ip = 51;
                                    continue _fun110786
                                }
                            case 48:
                                var2 = var6;
                            case 51:
                                var2 = var4.bind(var5)(var3, var2);
                                if (var2) {
                                    _fun110786_ip = 398;
                                    continue _fun110786
                                }
                            case 63:
                                var2 = var3.gestureActive;
                                var4 = var3.connected;
                                var3 = var3.mode;
                                if (!var4) {
                                    _fun110786_ip = 146;
                                    continue _fun110786
                                }
                            case 83:
                                if (var2) {
                                    _fun110786_ip = 146;
                                    continue _fun110786
                                }
                            case 86:
                                var2 = _closure1_slot15;
                                var2 = var2.PANEL;
                                if (!(var3 === var2)) {
                                    _fun110786_ip = 146;
                                    continue _fun110786
                                }
                            case 100:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 14;
                                var2 = var5[var2];
                                var5 = var4.bind(var0)(var2);
                                var4 = var5.runOnJS;
                                var2 = _closure3_slot2;
                                var4 = var4.bind(var5)(var2);
                                var2 = true;
                                var2 = var4.bind(var0)(var2);
                                _fun110786_ip = 190;
                                continue _fun110786;
                            case 146:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 14;
                                var2 = var5[var2];
                                var5 = var4.bind(var0)(var2);
                                var4 = var5.runOnJS;
                                var2 = _closure3_slot2;
                                var4 = var4.bind(var5)(var2);
                                var2 = false;
                                var2 = var4.bind(var0)(var2);
                            case 190:
                                var2 = _closure1_slot15;
                                var2 = var2.PANEL;
                                if (!(var3 !== var2)) {
                                    _fun110786_ip = 250;
                                    continue _fun110786
                                }
                            case 204:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 14;
                                var2 = var5[var2];
                                var5 = var4.bind(var0)(var2);
                                var4 = var5.runOnJS;
                                var2 = _closure3_slot3;
                                var4 = var4.bind(var5)(var2);
                                var2 = false;
                                var2 = var4.bind(var0)(var2);
                                _fun110786_ip = 294;
                                continue _fun110786;
                            case 250:
                                var4 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var2 = 14;
                                var2 = var5[var2];
                                var5 = var4.bind(var0)(var2);
                                var4 = var5.runOnJS;
                                var2 = _closure3_slot3;
                                var4 = var4.bind(var5)(var2);
                                var2 = true;
                                var2 = var4.bind(var0)(var2);
                            case 294:
                                var2 = _closure1_slot15;
                                var2 = var2.PIP;
                                if (!(var3 !== var2)) {
                                    _fun110786_ip = 354;
                                    continue _fun110786
                                }
                            case 308:
                                var3 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var2 = 14;
                                var2 = var4[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.runOnJS;
                                var2 = _closure3_slot4;
                                var3 = var3.bind(var4)(var2);
                                var2 = false;
                                var2 = var3.bind(var0)(var2);
                                _fun110786_ip = 398;
                                continue _fun110786;
                            case 354:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var1 = 14;
                                var1 = var3[var1];
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.runOnJS;
                                var1 = _closure3_slot4;
                                var2 = var2.bind(var3)(var1);
                                var1 = true;
                                var1 = var2.bind(var0)(var1);
                            case 398:
                                return var0;
                        }
                    };
                    var36 = {};
                    var40 = 19;
                    var40 = var19[var40];
                    var40 = var12.bind(var14)(var40);
                    var40 = var40.cheapWorkletShallowEqual;
                    var36.cheapWorkletShallowEqual = var40;
                    var40 = _closure1_slot15;
                    var36.VoicePanelModes = var40;
                    var40 = var19[var1];
                    var40 = var12.bind(var14)(var40);
                    var40 = var40.runOnJS;
                    var36.runOnJS = var40;
                    var36.setPanelFullscreen = var39;
                    var36.setPanelOpen = var38;
                    var36.setPanelPIP = var37;
                    var7.__closure = var36;
                    var36 = 10989484188294.0;
                    var7.__workletHash = var36;
                    var36 = _closure1_slot35;
                    var7.__initData = var36;
                    var7 = var34.bind(var35)(var11, var7);
                    var34 = _closure1_slot4;
                    var11 = var34.useCallback;
                    var7 = new Array(1);
                    var7[0] = var6;
                    var6 = function(arg0) { // Environment: var0
                        _fun110787: for (var _fun110787_ip = 0;;) switch (_fun110787_ip) {
                            case 0:
                                var5 = arg0;
                                var0 = null;
                                var0 = var0 != var5;
                                if (!var0) {
                                    _fun110787_ip = 49;
                                    continue _fun110787
                                }
                            case 12:
                                var3 = _closure1_slot19;
                                var4 = _closure1_slot7;
                                var2 = var4.getParticipant;
                                var1 = _closure3_slot5;
                                var2 = var2.bind(var4)(var1, var5);
                                var1 = undefined;
                                var0 = var3.bind(var1)(var2);
                            case 49:
                                var2 = _closure3_slot25;
                                var1 = !var0;
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                        }
                    };
                    var36 = var11.bind(var34)(var6, var7);
                    var _closure3_slot29 = var36;
                    var6 = var19[var1];
                    var34 = var12.bind(var14)(var6);
                    var11 = var34.useAnimatedReaction;
                    var7 = function() {
                        _fun110788: for (var _fun110788_ip = 0;;) switch (_fun110788_ip) {
                            case 0:
                                var1 = _closure3_slot13;
                                var0 = var1.get;
                                var4 = var0.bind(var1)();
                                var0 = _closure1_slot15;
                                var3 = var0.PANEL;
                                var0 = undefined;
                                if (!(var4 === var3)) {
                                    _fun110788_ip = 67;
                                    continue _fun110788
                                }
                            case 35:
                                var3 = _closure3_slot10;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var3 = null;
                                var3 = var3 == var2;
                                var1 = undefined;
                                if (var3) {
                                    _fun110788_ip = 64;
                                    continue _fun110788
                                }
                            case 59:
                                var1 = var2.id;
                            case 64:
                                var0 = var1;
                            case 67:
                                return var0;
                        }
                    };
                    var6 = {};
                    var6.mode = var18;
                    var35 = _closure1_slot15;
                    var6.VoicePanelModes = var35;
                    var6.focused = var25;
                    var7.__closure = var6;
                    var6 = 6595654888031.0;
                    var7.__workletHash = var6;
                    var6 = _closure1_slot36;
                    var7.__initData = var6;
                    var6 = function arg0, arg1() {
                        _fun110789: for (var _fun110789_ip = 0;;) switch (_fun110789_ip) {
                            case 0:
                                var2 = arg0;
                                var0 = arg1;
                                if (!(var2 !== var0)) {
                                    _fun110789_ip = 57;
                                    continue _fun110789
                                }
                            case 10:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 14;
                                var0 = var1[var0];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var0);
                                var3 = var4.runOnJS;
                                var0 = _closure3_slot29;
                                var0 = var3.bind(var4)(var0);
                                var0 = var0.bind(var1)(var2);
                            case 57:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var35 = {};
                    var37 = var19[var1];
                    var37 = var12.bind(var14)(var37);
                    var37 = var37.runOnJS;
                    var35.runOnJS = var37;
                    var35.handleFocusChange = var36;
                    var6.__closure = var35;
                    var35 = 15236018210415.0;
                    var6.__workletHash = var35;
                    var35 = _closure1_slot37;
                    var6.__initData = var35;
                    var6 = var11.bind(var34)(var7, var6);
                    var11 = _closure1_slot4;
                    var7 = var11.useMemo;
                    var6 = new Array(20);
                    var6[0] = var33;
                    var6[1] = var17;
                    var6[2] = var32;
                    var6[3] = var31;
                    var6[4] = var30;
                    var6[5] = var25;
                    var6[6] = var29;
                    var6[7] = var28;
                    var6[8] = var2;
                    var6[9] = var21;
                    var6[10] = var23;
                    var6[11] = var18;
                    var6[12] = var22;
                    var6[13] = var26;
                    var6[14] = var9;
                    var6[15] = var20;
                    var6[16] = var5;
                    var6[17] = var15;
                    var6[18] = var16;
                    var6[19] = var4;
                    var5 = function() { // Environment: var0
                        var17 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var15 = 18;
                        var1 = var12[var15];
                        var11 = undefined;
                        var1 = var17.bind(var11)(var1);
                        var3 = var1.Gesture;
                        var2 = var3.Race;
                        var1 = var12[var15];
                        var1 = var17.bind(var11)(var1);
                        var4 = var1.Gesture;
                        var1 = var4.Tap;
                        var5 = var1.bind(var4)();
                        var4 = var5.hitSlop;
                        var1 = {};
                        var8 = _closure3_slot20;
                        var7 = var8.left;
                        var9 = -1;
                        var7 = var9 * var7;
                        var1.left = var7;
                        var7 = var8.right;
                        var7 = var9 * var7;
                        var1.right = var7;
                        var4 = var4.bind(var5)(var1);
                        var1 = var4.enabled;
                        var7 = _closure3_slot24;
                        var5 = var1.bind(var4)(var7);
                        var4 = var5.maxDistance;
                        var1 = 30;
                        var5 = var4.bind(var5)(var1);
                        var4 = var5.onStart;
                        var1 = function() {
                            _fun110791: for (var _fun110791_ip = 0;;) switch (_fun110791_ip) {
                                case 0:
                                    var2 = _closure3_slot6;
                                    var1 = var2.get;
                                    var1 = var1.bind(var2)();
                                    if (!var1) {
                                        _fun110791_ip = 189;
                                        continue _fun110791
                                    }
                                case 22:
                                    var2 = _closure3_slot13;
                                    var1 = var2.get;
                                    var3 = var1.bind(var2)();
                                    var2 = _closure1_slot15;
                                    var2 = var2.PIP;
                                    if (!(var3 !== var2)) {
                                        _fun110791_ip = 189;
                                        continue _fun110791
                                    }
                                case 55:
                                    var3 = _closure3_slot7;
                                    var2 = var3.get;
                                    var2 = var2.bind(var3)();
                                    var3 = var2.mode;
                                    var2 = _closure1_slot18;
                                    var2 = var2.HIDDEN;
                                    if (!(var3 !== var2)) {
                                        _fun110791_ip = 139;
                                        continue _fun110791
                                    }
                                case 87:
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var2 = 14;
                                    var2 = var4[var2];
                                    var4 = undefined;
                                    var5 = var3.bind(var4)(var2);
                                    var3 = var5.runOnJS;
                                    var2 = _closure3_slot11;
                                    var3 = var3.bind(var5)(var2);
                                    var2 = {};
                                    var5 = true;
                                    var2.debounce = var5;
                                    var2 = var3.bind(var4)(var2);
                                    _fun110791_ip = 189;
                                    continue _fun110791;
                                case 139:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot2;
                                    var1 = 14;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var3 = var3.bind(var2)(var1);
                                    var1 = var3.runOnJS;
                                    var0 = _closure3_slot16;
                                    var1 = var1.bind(var3)(var0);
                                    var0 = {};
                                    var3 = true;
                                    var0.debounce = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 189:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var19 = {};
                        var18 = _closure3_slot6;
                        var19.connected = var18;
                        var22 = _closure3_slot13;
                        var19.mode = var22;
                        var10 = _closure1_slot15;
                        var19.VoicePanelModes = var10;
                        var13 = _closure3_slot7;
                        var19.controlsSpecs = var13;
                        var10 = _closure1_slot18;
                        var19.VoicePanelControlsModes = var10;
                        var16 = 14;
                        var20 = var12[var16];
                        var20 = var17.bind(var11)(var20);
                        var20 = var20.runOnJS;
                        var19.runOnJS = var20;
                        var20 = _closure3_slot16;
                        var19.showControls = var20;
                        var20 = _closure3_slot11;
                        var19.hideControls = var20;
                        var1.__closure = var19;
                        var19 = 15350003421175.0;
                        var1.__workletHash = var19;
                        var19 = _closure1_slot38;
                        var1.__initData = var19;
                        var1 = var4.bind(var5)(var1);
                        var4 = var12[var15];
                        var4 = var17.bind(var11)(var4);
                        var5 = var4.Gesture;
                        var4 = var5.Pan;
                        var5 = var4.bind(var5)();
                        var4 = var5.enabled;
                        var7 = var4.bind(var5)(var7);
                        var5 = var7.manualActivation;
                        var4 = true;
                        var7 = var5.bind(var7)(var4);
                        var5 = var7.maxPointers;
                        var4 = 1;
                        var7 = var5.bind(var7)(var4);
                        var5 = var7.hitSlop;
                        var4 = {};
                        var19 = var8.left;
                        var19 = var9 * var19;
                        var4.left = var19;
                        var8 = var8.right;
                        var8 = var9 * var8;
                        var4.right = var8;
                        var7 = var5.bind(var7)(var4);
                        var5 = var7.withRef;
                        var4 = _closure3_slot9;
                        var7 = var5.bind(var7)(var4);
                        var5 = var7.shouldCancelWhenOutside;
                        var4 = false;
                        var7 = var5.bind(var7)(var4);
                        var5 = var7.simultaneousWithExternalGesture;
                        var4 = _closure3_slot26;
                        var7 = var5.bind(var7)(var4);
                        var5 = var7.onTouchesDown;
                        var4 = function arg0, arg1() {
                            _fun110792: for (var _fun110792_ip = 0;;) switch (_fun110792_ip) {
                                case 0:
                                    var1 = arg1;
                                    var0 = arg0;
                                    var2 = var0.allTouches;
                                    var0 = 0;
                                    var0 = var2[var0];
                                    var2 = _closure1_slot13;
                                    if (!var2) {
                                        _fun110792_ip = 90;
                                        continue _fun110792
                                    }
                                case 28:
                                    var2 = null;
                                    if (!(var2 != var0)) {
                                        _fun110792_ip = 90;
                                        continue _fun110792
                                    }
                                case 34:
                                    var3 = var0.absoluteY;
                                    var4 = _closure3_slot17;
                                    var2 = var4.get;
                                    var2 = var2.bind(var4)();
                                    var4 = var2.height;
                                    var6 = _closure3_slot14;
                                    var2 = var6.get;
                                    var2 = var2.bind(var6)();
                                    var2 = var2.bottom;
                                    var2 = var4 - var2;
                                    if (!(!(var3 > var2))) {
                                        _fun110792_ip = 234;
                                        continue _fun110792
                                    }
                                case 90:
                                    var4 = _closure3_slot12;
                                    var3 = var4.get;
                                    var3 = var3.bind(var4)();
                                    if (var3) {
                                        _fun110792_ip = 174;
                                        continue _fun110792
                                    }
                                case 109:
                                    var6 = _closure3_slot13;
                                    var4 = var6.get;
                                    var6 = var4.bind(var6)();
                                    var4 = _closure1_slot15;
                                    var4 = var4.PANEL;
                                    var4 = var6 === var4;
                                    if (!var4) {
                                        _fun110792_ip = 171;
                                        continue _fun110792
                                    }
                                case 139:
                                    var7 = _closure3_slot7;
                                    var6 = var7.get;
                                    var6 = var6.bind(var7)();
                                    var6 = var6.mode;
                                    var5 = _closure1_slot18;
                                    var5 = var5.DRAWER;
                                    var4 = var6 === var5;
                                case 171:
                                    var3 = var4;
                                case 174:
                                    if (!var3) {
                                        _fun110792_ip = 230;
                                        continue _fun110792
                                    }
                                case 177:
                                    var4 = _closure3_slot28;
                                    var3 = var4.set;
                                    var2 = {};
                                    var5 = var4.get;
                                    var8 = var5.bind(var4)();
                                    var9 = var2;
                                    var5 = copyDataProperties(var9, var8);
                                    var6 = true;
                                    var5 = 'cancel';
                                    var2[var5] = var6;
                                    var2 = var3.bind(var4)(var2);
                                    var2 = var1.fail;
                                    var2 = var2.bind(var1)();
                                case 230:
                                    var2 = undefined;
                                    return var2;
                                case 234:
                                    var3 = _closure3_slot28;
                                    var2 = var3.set;
                                    var0 = {};
                                    var4 = var3.get;
                                    var8 = var4.bind(var3)();
                                    var9 = var0;
                                    var4 = copyDataProperties(var9, var8);
                                    var5 = true;
                                    var4 = 'cancel';
                                    var0[var4] = var5;
                                    var0 = var2.bind(var3)(var0);
                                    var0 = var1.activate;
                                    var0 = var0.bind(var1)();
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var9 = {};
                        var8 = _closure1_slot13;
                        var9.IS_IOS = var8;
                        var21 = _closure3_slot17;
                        var9.windowDimensions = var21;
                        var20 = _closure3_slot14;
                        var9.safeArea = var20;
                        var8 = _closure3_slot28;
                        var9.gestureState = var8;
                        var19 = _closure3_slot12;
                        var9.isFocusedVideoZoomed = var19;
                        var9.mode = var22;
                        var19 = _closure1_slot15;
                        var9.VoicePanelModes = var19;
                        var9.controlsSpecs = var13;
                        var9.VoicePanelControlsModes = var10;
                        var4.__closure = var9;
                        var9 = 13538548264193.0;
                        var4.__workletHash = var9;
                        var9 = _closure1_slot45;
                        var4.__initData = var9;
                        var7 = var5.bind(var7)(var4);
                        var5 = var7.onBegin;
                        var4 = function arg0() {
                            _fun110793: for (var _fun110793_ip = 0;;) switch (_fun110793_ip) {
                                case 0:
                                    var3 = arg0;
                                    var1 = _closure3_slot28;
                                    var0 = var1.get;
                                    var0 = var0.bind(var1)();
                                    var0 = var0.cancel;
                                    if (var0) {
                                        _fun110793_ip = 174;
                                        continue _fun110793
                                    }
                                case 31:
                                    var1 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 20;
                                    var0 = var2[var0];
                                    var6 = undefined;
                                    var2 = var1.bind(var6)(var0);
                                    var1 = _closure3_slot19;
                                    var0 = {
                                        'x': 0,
                                        'y': 0
                                    };
                                    var0 = var2.bind(var6)(var1, var0);
                                    var2 = _closure3_slot28;
                                    var1 = var2.set;
                                    var0 = {};
                                    var6 = var3.absoluteX;
                                    var0.absoluteXStart = var6;
                                    var3 = var3.absoluteY;
                                    var0.absoluteYStart = var3;
                                    var3 = false;
                                    var0.active = var3;
                                    var0.cancel = var3;
                                    var6 = _closure3_slot6;
                                    var3 = var6.get;
                                    var3 = var3.bind(var6)();
                                    if (!var3) {
                                        _fun110793_ip = 164;
                                        continue _fun110793
                                    }
                                case 137:
                                    var6 = _closure3_slot13;
                                    var5 = var6.get;
                                    var5 = var5.bind(var6)();
                                    var4 = _closure1_slot15;
                                    var4 = var4.PANEL;
                                    var3 = var5 === var4;
                                case 164:
                                    var0.requiresPop = var3;
                                    var0 = var1.bind(var2)(var0);
                                case 174:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var13 = {};
                        var13.gestureState = var8;
                        var10 = _closure1_slot1;
                        var9 = 20;
                        var19 = var12[var9];
                        var19 = var10.bind(var11)(var19);
                        var13.updateSharedValueIfChanged = var19;
                        var19 = _closure3_slot19;
                        var13.wrapperOffset = var19;
                        var13.connected = var18;
                        var13.mode = var22;
                        var23 = _closure1_slot15;
                        var13.VoicePanelModes = var23;
                        var4.__closure = var13;
                        var13 = 11622638269935.0;
                        var4.__workletHash = var13;
                        var13 = _closure1_slot44;
                        var4.__initData = var13;
                        var7 = var5.bind(var7)(var4);
                        var5 = var7.onTouchesMove;
                        var4 = function arg0, arg1() {
                            _fun110794: for (var _fun110794_ip = 0;;) switch (_fun110794_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = arg1;
                                    var5 = var3.state;
                                    var6 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 18;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var1 = var6.bind(var0)(var1);
                                    var1 = var1.State;
                                    var1 = var1.BEGAN;
                                    if (!(var5 === var1)) {
                                        _fun110794_ip = 679;
                                        continue _fun110794
                                    }
                                case 55:
                                    var6 = _closure3_slot28;
                                    var5 = var6.get;
                                    var5 = var5.bind(var6)();
                                    var5 = var5.active;
                                    if (var5) {
                                        _fun110794_ip = 679;
                                        continue _fun110794
                                    }
                                case 83:
                                    var6 = _closure3_slot28;
                                    var5 = var6.get;
                                    var5 = var5.bind(var6)();
                                    var5 = var5.cancel;
                                    if (var5) {
                                        _fun110794_ip = 679;
                                        continue _fun110794
                                    }
                                case 108:
                                    var3 = var3.changedTouches;
                                    var10 = 0;
                                    var3 = var3[var10];
                                    var8 = var3.absoluteY;
                                    var7 = var3.absoluteX;
                                    var5 = _closure3_slot28;
                                    var3 = var5.get;
                                    var3 = var3.bind(var5)();
                                    var3 = var3.absoluteYStart;
                                    var11 = var3 - var8;
                                    var3 = var5.get;
                                    var3 = var3.bind(var5)();
                                    var3 = var3.absoluteXStart;
                                    var12 = var3 - var7;
                                    var6 = global;
                                    var13 = var6.Math;
                                    var9 = var13.max;
                                    var5 = var6.Math;
                                    var3 = var5.abs;
                                    var5 = var3.bind(var5)(var11);
                                    var14 = var6.Math;
                                    var3 = var14.abs;
                                    var3 = var3.bind(var14)(var12);
                                    var9 = var9.bind(var13)(var5, var3);
                                    var5 = var6.Math;
                                    var3 = var5.abs;
                                    var5 = var3.bind(var5)(var12);
                                    var12 = var6.Math;
                                    var3 = var12.abs;
                                    var3 = var3.bind(var12)(var11);
                                    var5 = var5 >= var3;
                                    if (var5) {
                                        _fun110794_ip = 272;
                                        continue _fun110794
                                    }
                                case 268:
                                    var5 = var11 > var10;
                                case 272:
                                    var12 = _closure3_slot13;
                                    var3 = var12.get;
                                    var12 = var3.bind(var12)();
                                    var3 = _closure1_slot15;
                                    var3 = var3.PANEL;
                                    if (!(var12 !== var3)) {
                                        _fun110794_ip = 398;
                                        continue _fun110794
                                    }
                                case 299:
                                    var12 = _closure3_slot13;
                                    var3 = var12.get;
                                    var12 = var3.bind(var12)();
                                    var3 = _closure1_slot15;
                                    var3 = var3.PIP;
                                    var12 = var12 === var3;
                                    if (!var12) {
                                        _fun110794_ip = 336;
                                        continue _fun110794
                                    }
                                case 329:
                                    var3 = 10;
                                    var12 = var9 > var3;
                                case 336:
                                    var3 = false;
                                    if (!var12) {
                                        _fun110794_ip = 514;
                                        continue _fun110794
                                    }
                                case 344:
                                    var13 = _closure1_slot0;
                                    var16 = _closure1_slot2;
                                    var12 = 14;
                                    var12 = var16[var12];
                                    var14 = var13.bind(var0)(var12);
                                    var13 = var14.runOnJS;
                                    var15 = _closure1_slot1;
                                    var12 = 21;
                                    var12 = var16[var12];
                                    var12 = var15.bind(var0)(var12);
                                    var12 = var13.bind(var14)(var12);
                                    var12 = var12.bind(var0)();
                                    var3 = true;
                                    _fun110794_ip = 514;
                                    continue _fun110794;
                                case 398:
                                    var13 = var6.Math;
                                    var12 = var13.floor;
                                    var14 = _closure3_slot0;
                                    var6 = var14.get;
                                    var6 = var6.bind(var14)();
                                    var6 = var12.bind(var13)(var6);
                                    if (!(var11 < var10)) {
                                        _fun110794_ip = 436;
                                        continue _fun110794
                                    }
                                case 432:
                                    if (!(!(var6 <= var10))) {
                                        _fun110794_ip = 494;
                                        continue _fun110794
                                    }
                                case 436:
                                    var10 = _closure3_slot10;
                                    var6 = var10.get;
                                    var11 = var6.bind(var10)();
                                    var10 = null;
                                    var12 = var10 == var11;
                                    var6 = undefined;
                                    if (var12) {
                                        _fun110794_ip = 465;
                                        continue _fun110794
                                    }
                                case 460:
                                    var6 = var11.id;
                                case 465:
                                    var6 = var10 != var6;
                                    if (!var6) {
                                        _fun110794_ip = 475;
                                        continue _fun110794
                                    }
                                case 472:
                                    var6 = var5;
                                case 475:
                                    var3 = false;
                                    if (!var6) {
                                        _fun110794_ip = 514;
                                        continue _fun110794
                                    }
                                case 480:
                                    var6 = var2.fail;
                                    var6 = var6.bind(var2)();
                                    var3 = false;
                                    _fun110794_ip = 514;
                                    continue _fun110794;
                                case 494:
                                    var5 = _closure1_slot33;
                                    var5 = !var5;
                                    if (var5) {
                                        _fun110794_ip = 511;
                                        continue _fun110794
                                    }
                                case 504:
                                    var6 = 10;
                                    var5 = var9 > var6;
                                case 511:
                                    var3 = var5;
                                case 514:
                                    var5 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var4 = 20;
                                    var4 = var6[var4];
                                    var6 = var5.bind(var0)(var4);
                                    if (var3) {
                                        _fun110794_ip = 561;
                                        continue _fun110794
                                    }
                                case 537:
                                    var4 = _closure3_slot28;
                                    var3 = {};
                                    var3.absoluteYStart = var8;
                                    var3.absoluteXStart = var7;
                                    var3 = var6.bind(var0)(var4, var3);
                                    _fun110794_ip = 679;
                                    continue _fun110794;
                                case 561:
                                    var5 = _closure3_slot19;
                                    var3 = {};
                                    var4 = true;
                                    var3.gestureActive = var4;
                                    var3 = var6.bind(var0)(var5, var3);
                                    var6 = _closure3_slot28;
                                    var5 = var6.set;
                                    var3 = {};
                                    var3.absoluteXStart = var7;
                                    var9 = _closure3_slot0;
                                    var7 = var9.get;
                                    var7 = var7.bind(var9)();
                                    var7 = var8 + var7;
                                    var3.absoluteYStart = var7;
                                    var7 = false;
                                    var3.cancel = var7;
                                    var3.active = var4;
                                    var7 = var6.get;
                                    var7 = var7.bind(var6)();
                                    var7 = var7.requiresPop;
                                    var3.requiresPop = var7;
                                    var3 = var5.bind(var6)(var3);
                                    var3 = _closure3_slot22;
                                    var1 = var3.set;
                                    var1 = var1.bind(var3)(var4);
                                    var1 = var2.activate;
                                    var1 = var1.bind(var2)();
                                case 679:
                                    return var0;
                            }
                        };
                        var13 = {};
                        var15 = var12[var15];
                        var15 = var17.bind(var11)(var15);
                        var15 = var15.State;
                        var13.State = var15;
                        var13.gestureState = var8;
                        var13.mode = var22;
                        var15 = _closure1_slot15;
                        var13.VoicePanelModes = var15;
                        var23 = _closure3_slot0;
                        var13.scrollPosition = var23;
                        var15 = _closure1_slot33;
                        var13.isQuest = var15;
                        var15 = 10;
                        var13.MIN_GESTURE_MOVE = var15;
                        var15 = _closure3_slot10;
                        var13.focused = var15;
                        var15 = var12[var16];
                        var15 = var17.bind(var11)(var15);
                        var15 = var15.runOnJS;
                        var13.runOnJS = var15;
                        var15 = 21;
                        var15 = var12[var15];
                        var15 = var10.bind(var11)(var15);
                        var13.triggerIOSHaptic = var15;
                        var15 = var12[var9];
                        var15 = var10.bind(var11)(var15);
                        var13.updateSharedValueIfChanged = var15;
                        var13.wrapperOffset = var19;
                        var15 = _closure3_slot22;
                        var13.lockScrolling = var15;
                        var4.__closure = var13;
                        var13 = 262321069191.0;
                        var4.__workletHash = var13;
                        var13 = _closure1_slot43;
                        var4.__initData = var13;
                        var7 = var5.bind(var7)(var4);
                        var5 = var7.onChange;
                        var4 = function arg0() {
                            _fun110795: for (var _fun110795_ip = 0;;) switch (_fun110795_ip) {
                                case 0:
                                    var2 = arg0;
                                    var3 = _closure3_slot28;
                                    var1 = var3.get;
                                    var1 = var1.bind(var3)();
                                    var1 = var1.cancel;
                                    if (var1) {
                                        _fun110795_ip = 644;
                                        continue _fun110795
                                    }
                                case 31:
                                    var3 = _closure3_slot13;
                                    var1 = var3.get;
                                    var4 = var1.bind(var3)();
                                    var3 = _closure1_slot15;
                                    var3 = var3.PIP;
                                    if (!(var4 === var3)) {
                                        _fun110795_ip = 176;
                                        continue _fun110795
                                    }
                                case 61:
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var3 = 20;
                                    var3 = var5[var3];
                                    var6 = undefined;
                                    var5 = var4.bind(var6)(var3);
                                    var4 = _closure3_slot19;
                                    var3 = {};
                                    var9 = _closure3_slot28;
                                    var7 = var9.get;
                                    var7 = var7.bind(var9)();
                                    var8 = var7.absoluteXStart;
                                    var7 = var2.absoluteX;
                                    var7 = var8 - var7;
                                    var8 = -1;
                                    var7 = var8 * var7;
                                    var3.x = var7;
                                    var7 = var9.get;
                                    var7 = var7.bind(var9)();
                                    var9 = var7.absoluteYStart;
                                    var7 = var2.absoluteY;
                                    var7 = var9 - var7;
                                    var7 = var8 * var7;
                                    var3.y = var7;
                                    var3 = var5.bind(var6)(var4, var3);
                                    _fun110795_ip = 644;
                                    continue _fun110795;
                                case 176:
                                    var4 = _closure3_slot28;
                                    var3 = var4.get;
                                    var3 = var3.bind(var4)();
                                    var3 = var3.absoluteYStart;
                                    var2 = var2.absoluteY;
                                    var3 = var3 - var2;
                                    var2 = -1;
                                    var2 = var2 * var3;
                                    var4 = _closure3_slot6;
                                    var3 = var4.get;
                                    var3 = var3.bind(var4)();
                                    if (!var3) {
                                        _fun110795_ip = 253;
                                        continue _fun110795
                                    }
                                case 231:
                                    var5 = _closure3_slot28;
                                    var4 = var5.get;
                                    var4 = var4.bind(var5)();
                                    var4 = var4.requiresPop;
                                    var3 = !var4;
                                case 253:
                                    if (!var3) {
                                        _fun110795_ip = 262;
                                        continue _fun110795
                                    }
                                case 256:
                                    var4 = 0;
                                    var3 = var2 <= var4;
                                case 262:
                                    if (!var3) {
                                        _fun110795_ip = 308;
                                        continue _fun110795
                                    }
                                case 265:
                                    var5 = _closure3_slot28;
                                    var4 = var5.set;
                                    var3 = {};
                                    var6 = var5.get;
                                    var12 = var6.bind(var5)();
                                    var13 = var3;
                                    var6 = copyDataProperties(var13, var12);
                                    var7 = true;
                                    var6 = 'requiresPop';
                                    var3[var6] = var7;
                                    var3 = var4.bind(var5)(var3);
                                case 308:
                                    var4 = _closure3_slot22;
                                    var3 = var4.get;
                                    var3 = var3.bind(var4)();
                                    if (!var3) {
                                        _fun110795_ip = 330;
                                        continue _fun110795
                                    }
                                case 324:
                                    var3 = 0;
                                    if (!(!(var2 < var3))) {
                                        _fun110795_ip = 389;
                                        continue _fun110795
                                    }
                                case 330:
                                    var4 = _closure3_slot22;
                                    var3 = var4.get;
                                    var3 = var3.bind(var4)();
                                    var3 = !var3;
                                    if (!var3) {
                                        _fun110795_ip = 368;
                                        continue _fun110795
                                    }
                                case 349:
                                    var5 = _closure3_slot0;
                                    var4 = var5.get;
                                    var5 = var4.bind(var5)();
                                    var4 = 0;
                                    var3 = var5 <= var4;
                                case 368:
                                    if (!var3) {
                                        _fun110795_ip = 405;
                                        continue _fun110795
                                    }
                                case 371:
                                    var5 = _closure3_slot22;
                                    var4 = var5.set;
                                    var3 = true;
                                    var3 = var4.bind(var5)(var3);
                                    _fun110795_ip = 405;
                                    continue _fun110795;
                                case 389:
                                    var5 = _closure3_slot22;
                                    var4 = var5.set;
                                    var3 = false;
                                    var3 = var4.bind(var5)(var3);
                                case 405:
                                    var4 = _closure3_slot28;
                                    var3 = var4.get;
                                    var3 = var3.bind(var4)();
                                    var3 = var3.requiresPop;
                                    var4 = var2;
                                    if (!var3) {
                                        _fun110795_ip = 600;
                                        continue _fun110795
                                    }
                                case 433:
                                    var3 = global;
                                    var6 = var3.Math;
                                    var5 = var6.max;
                                    var3 = 0;
                                    var3 = var5.bind(var6)(var2, var3);
                                    var5 = 180;
                                    if (!(!(var3 <= var5))) {
                                        _fun110795_ip = 588;
                                        continue _fun110795
                                    }
                                case 464:
                                    var7 = _closure3_slot28;
                                    var6 = var7.set;
                                    var5 = {};
                                    var8 = var7.get;
                                    var12 = var8.bind(var7)();
                                    var13 = var5;
                                    var8 = copyDataProperties(var13, var12);
                                    var9 = false;
                                    var8 = 'requiresPop';
                                    var5[var8] = var9;
                                    var5 = var6.bind(var7)(var5);
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var5 = 14;
                                    var5 = var9[var5];
                                    var7 = undefined;
                                    var11 = var8.bind(var7)(var5);
                                    var10 = var11.runOnJS;
                                    var5 = 22;
                                    var6 = var9[var5];
                                    var6 = var8.bind(var7)(var6);
                                    var6 = var6.triggerHapticFeedback;
                                    var6 = var10.bind(var11)(var6);
                                    var5 = var9[var5];
                                    var5 = var8.bind(var7)(var5);
                                    var5 = var5.HapticFeedbackTypes;
                                    var5 = var5.IMPACT_MEDIUM;
                                    var5 = var6.bind(var7)(var5);
                                    var4 = var2;
                                    _fun110795_ip = 600;
                                    continue _fun110795;
                                case 588:
                                    var2 = _closure1_slot20;
                                    var2 = var3 * var2;
                                    var4 = var3 - var2;
                                case 600:
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 20;
                                    var1 = var3[var1];
                                    var3 = undefined;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = _closure3_slot19;
                                    var0 = {};
                                    var0.y = var4;
                                    var4 = 0;
                                    var0.x = var4;
                                    var0 = var2.bind(var3)(var1, var0);
                                case 644:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var13 = {};
                        var13.gestureState = var8;
                        var13.mode = var22;
                        var24 = _closure1_slot15;
                        var13.VoicePanelModes = var24;
                        var13.connected = var18;
                        var13.lockScrolling = var15;
                        var13.scrollPosition = var23;
                        var23 = _closure1_slot20;
                        var13.POP_RESISTANCE = var23;
                        var23 = 180;
                        var13.PIP_POP_HEIGHT = var23;
                        var23 = var12[var16];
                        var23 = var17.bind(var11)(var23);
                        var23 = var23.runOnJS;
                        var13.runOnJS = var23;
                        var23 = 22;
                        var24 = var12[var23];
                        var24 = var17.bind(var11)(var24);
                        var24 = var24.triggerHapticFeedback;
                        var13.triggerHapticFeedback = var24;
                        var23 = var12[var23];
                        var23 = var17.bind(var11)(var23);
                        var23 = var23.HapticFeedbackTypes;
                        var13.HapticFeedbackTypes = var23;
                        var23 = var12[var9];
                        var23 = var10.bind(var11)(var23);
                        var13.updateSharedValueIfChanged = var23;
                        var13.wrapperOffset = var19;
                        var4.__closure = var13;
                        var13 = 2084376677229.0;
                        var4.__workletHash = var13;
                        var13 = _closure1_slot42;
                        var4.__initData = var13;
                        var7 = var5.bind(var7)(var4);
                        var5 = var7.onTouchesCancelled;
                        var4 = function() {
                            var2 = _closure3_slot22;
                            var0 = var2.set;
                            var4 = false;
                            var0 = var0.bind(var2)(var4);
                            var3 = _closure1_slot1;
                            var5 = _closure1_slot2;
                            var2 = 20;
                            var6 = var5[var2];
                            var0 = undefined;
                            var8 = var3.bind(var0)(var6);
                            var7 = _closure3_slot28;
                            var6 = {
                                'cancel': false,
                                'active': false
                            };
                            var6 = var8.bind(var0)(var7, var6);
                            var2 = var5[var2];
                            var3 = var3.bind(var0)(var2);
                            var2 = _closure3_slot19;
                            var1 = {};
                            var1.gestureActive = var4;
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var13 = {};
                        var13.lockScrolling = var15;
                        var23 = var12[var9];
                        var23 = var10.bind(var11)(var23);
                        var13.updateSharedValueIfChanged = var23;
                        var13.gestureState = var8;
                        var13.wrapperOffset = var19;
                        var4.__closure = var13;
                        var13 = 8529626440714.0;
                        var4.__workletHash = var13;
                        var13 = _closure1_slot41;
                        var4.__initData = var13;
                        var7 = var5.bind(var7)(var4);
                        var5 = var7.onEnd;
                        var4 = function arg0() {
                            _fun110797: for (var _fun110797_ip = 0;;) switch (_fun110797_ip) {
                                case 0:
                                    var1 = arg0;
                                    var3 = _closure3_slot28;
                                    var2 = var3.get;
                                    var2 = var2.bind(var3)();
                                    var2 = var2.cancel;
                                    if (var2) {
                                        _fun110797_ip = 785;
                                        continue _fun110797
                                    }
                                case 31:
                                    var10 = var1.velocityX;
                                    var9 = var1.velocityY;
                                    var8 = var1.absoluteX;
                                    var7 = var1.absoluteY;
                                    var2 = _closure3_slot13;
                                    var1 = var2.get;
                                    var3 = var1.bind(var2)();
                                    var2 = _closure1_slot15;
                                    var2 = var2.PIP;
                                    if (!(var3 !== var2)) {
                                        _fun110797_ip = 616;
                                        continue _fun110797
                                    }
                                case 88:
                                    var3 = _closure3_slot13;
                                    var2 = var3.get;
                                    var3 = var2.bind(var3)();
                                    var2 = _closure1_slot15;
                                    var2 = var2.PANEL;
                                    if (!(var3 === var2)) {
                                        _fun110797_ip = 785;
                                        continue _fun110797
                                    }
                                case 118:
                                    var2 = 0;
                                    if (!(!(var9 > var2))) {
                                        _fun110797_ip = 191;
                                        continue _fun110797
                                    }
                                case 124:
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 20;
                                    var2 = var4[var2];
                                    var6 = undefined;
                                    var5 = var3.bind(var6)(var2);
                                    var3 = _closure3_slot19;
                                    var4 = false;
                                    var2 = {
                                        'gestureActive': false,
                                        'x': 0,
                                        'y': 0
                                    };
                                    var2 = var5.bind(var6)(var3, var2);
                                    var3 = _closure3_slot22;
                                    var2 = var3.set;
                                    var2 = var2.bind(var3)(var4);
                                    _fun110797_ip = 785;
                                    continue _fun110797;
                                case 191:
                                    var3 = _closure3_slot6;
                                    var2 = var3.get;
                                    var2 = var2.bind(var3)();
                                    if (var2) {
                                        _fun110797_ip = 431;
                                        continue _fun110797
                                    }
                                case 210:
                                    var4 = _closure3_slot18;
                                    var2 = var4.get;
                                    var2 = var2.bind(var4)();
                                    var3 = var2.drawerHeight;
                                    var2 = var4.get;
                                    var2 = var2.bind(var4)();
                                    var2 = var2.drawerY;
                                    var4 = var3 - var2;
                                    var3 = _closure3_slot19;
                                    var2 = var3.get;
                                    var2 = var2.bind(var3)();
                                    var3 = var2.y;
                                    var2 = 0.2;
                                    var2 = var2 * var4;
                                    if (!(!(var3 > var2))) {
                                        _fun110797_ip = 351;
                                        continue _fun110797
                                    }
                                case 284:
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 20;
                                    var2 = var4[var2];
                                    var6 = undefined;
                                    var5 = var3.bind(var6)(var2);
                                    var3 = _closure3_slot19;
                                    var4 = false;
                                    var2 = {
                                        'gestureActive': false,
                                        'x': 0,
                                        'y': 0
                                    };
                                    var2 = var5.bind(var6)(var3, var2);
                                    var3 = _closure3_slot22;
                                    var2 = var3.set;
                                    var2 = var2.bind(var3)(var4);
                                    _fun110797_ip = 785;
                                    continue _fun110797;
                                case 351:
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var2 = 20;
                                    var2 = var5[var2];
                                    var3 = undefined;
                                    var6 = var4.bind(var3)(var2);
                                    var4 = _closure3_slot19;
                                    var2 = {};
                                    var11 = false;
                                    var2.gestureActive = var11;
                                    var2 = var6.bind(var3)(var4, var2);
                                    var4 = _closure1_slot0;
                                    var2 = 14;
                                    var2 = var5[var2];
                                    var5 = var4.bind(var3)(var2);
                                    var4 = var5.runOnJS;
                                    var2 = _closure3_slot8;
                                    var2 = var4.bind(var5)(var2);
                                    var2 = var2.bind(var3)();
                                    _fun110797_ip = 785;
                                    continue _fun110797;
                                case 431:
                                    var3 = _closure3_slot28;
                                    var2 = var3.get;
                                    var2 = var2.bind(var3)();
                                    var2 = var2.requiresPop;
                                    if (var2) {
                                        _fun110797_ip = 549;
                                        continue _fun110797
                                    }
                                case 453:
                                    var3 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var2 = 14;
                                    var2 = var4[var2];
                                    var5 = undefined;
                                    var6 = var3.bind(var5)(var2);
                                    var3 = var6.runOnJS;
                                    var2 = _closure3_slot15;
                                    var3 = var3.bind(var6)(var2);
                                    var2 = _closure1_slot15;
                                    var2 = var2.PIP;
                                    var2 = var3.bind(var5)(var2);
                                    var3 = _closure1_slot1;
                                    var2 = 20;
                                    var2 = var4[var2];
                                    var4 = var3.bind(var5)(var2);
                                    var3 = _closure3_slot19;
                                    var2 = {
                                        'gestureActive': false,
                                        'x': 0,
                                        'y': 0
                                    };
                                    var2 = var4.bind(var5)(var3, var2);
                                    _fun110797_ip = 785;
                                    continue _fun110797;
                                case 549:
                                    var3 = _closure1_slot1;
                                    var4 = _closure1_slot2;
                                    var2 = 20;
                                    var2 = var4[var2];
                                    var6 = undefined;
                                    var5 = var3.bind(var6)(var2);
                                    var3 = _closure3_slot19;
                                    var4 = false;
                                    var2 = {
                                        'gestureActive': false,
                                        'x': 0,
                                        'y': 0
                                    };
                                    var2 = var5.bind(var6)(var3, var2);
                                    var3 = _closure3_slot22;
                                    var2 = var3.set;
                                    var2 = var2.bind(var3)(var4);
                                    _fun110797_ip = 785;
                                    continue _fun110797;
                                case 616:
                                    var5 = _closure1_slot0;
                                    var4 = _closure1_slot2;
                                    var2 = 23;
                                    var2 = var4[var2];
                                    var3 = undefined;
                                    var6 = var5.bind(var3)(var2);
                                    var5 = var6.calculatePIPPositionFromVelocity;
                                    var2 = {};
                                    var2.velocityX = var10;
                                    var2.velocityY = var9;
                                    var2.absoluteX = var8;
                                    var2.absoluteY = var7;
                                    var8 = _closure3_slot17;
                                    var7 = var8.get;
                                    var7 = var7.bind(var8)();
                                    var2.windowDimensions = var7;
                                    var8 = _closure3_slot14;
                                    var7 = var8.get;
                                    var7 = var7.bind(var8)();
                                    var2.safeArea = var7;
                                    var2 = var5.bind(var6)(var2);
                                    var9 = var2.pipX;
                                    var8 = var2.pipY;
                                    var2 = _closure1_slot1;
                                    var1 = 20;
                                    var5 = var4[var1];
                                    var7 = var2.bind(var3)(var5);
                                    var6 = _closure3_slot18;
                                    var5 = {};
                                    var5.pipX = var9;
                                    var5.pipY = var8;
                                    var5 = var7.bind(var3)(var6, var5);
                                    var1 = var4[var1];
                                    var2 = var2.bind(var3)(var1);
                                    var1 = _closure3_slot19;
                                    var0 = {};
                                    var4 = false;
                                    var0.gestureActive = var4;
                                    var0 = var2.bind(var3)(var1, var0);
                                case 785:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var13 = {};
                        var13.gestureState = var8;
                        var13.mode = var22;
                        var22 = _closure1_slot15;
                        var13.VoicePanelModes = var22;
                        var22 = 23;
                        var22 = var12[var22];
                        var22 = var17.bind(var11)(var22);
                        var22 = var22.calculatePIPPositionFromVelocity;
                        var13.calculatePIPPositionFromVelocity = var22;
                        var13.windowDimensions = var21;
                        var13.safeArea = var20;
                        var20 = var12[var9];
                        var20 = var10.bind(var11)(var20);
                        var13.updateSharedValueIfChanged = var20;
                        var20 = _closure3_slot18;
                        var13.wrapperDimensions = var20;
                        var13.wrapperOffset = var19;
                        var13.connected = var18;
                        var16 = var12[var16];
                        var16 = var17.bind(var11)(var16);
                        var16 = var16.runOnJS;
                        var13.runOnJS = var16;
                        var16 = _closure3_slot15;
                        var13.setMode = var16;
                        var13.lockScrolling = var15;
                        var15 = 0.2;
                        var13.MIN_DISMISS_MOVE_PERCENTAGE = var15;
                        var14 = _closure3_slot8;
                        var13.dismissPanel = var14;
                        var4.__closure = var13;
                        var13 = 10532794222556.0;
                        var4.__workletHash = var13;
                        var13 = _closure1_slot40;
                        var4.__initData = var13;
                        var5 = var5.bind(var7)(var4);
                        var4 = var5.onFinalize;
                        var0 = function() {
                            var2 = _closure1_slot1;
                            var1 = _closure1_slot2;
                            var0 = 20;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var2.bind(var0)(var1);
                            var2 = _closure3_slot28;
                            var1 = {
                                'cancel': false,
                                'active': false
                            };
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                        };
                        var7 = {};
                        var9 = var12[var9];
                        var9 = var10.bind(var11)(var9);
                        var7.updateSharedValueIfChanged = var9;
                        var7.gestureState = var8;
                        var0.__closure = var7;
                        var7 = 141147937726.0;
                        var0.__workletHash = var7;
                        var6 = _closure1_slot39;
                        var0.__initData = var6;
                        var0 = var4.bind(var5)(var0);
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var11 = var7.bind(var11)(var5, var6);
                    var5 = var19[var1];
                    var7 = var12.bind(var14)(var5);
                    var6 = var7.useAnimatedScrollHandler;
                    var5 = {};
                    var20 = function arg0() {
                        var3 = _closure3_slot0;
                        var2 = var3.set;
                        var1 = arg0;
                        var1 = var1.contentOffset;
                        var1 = var1.y;
                        var1 = var2.bind(var3)(var1);
                        var2 = _closure3_slot1;
                        var1 = var2.set;
                        var0 = true;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var21 = {};
                    var21.scrollPosition = var26;
                    var21.dragScrolling = var27;
                    var20.__closure = var21;
                    var21 = 57033362164.0;
                    var20.__workletHash = var21;
                    var21 = _closure1_slot46;
                    var20.__initData = var21;
                    var5.onBeginDrag = var20;
                    var20 = function() {
                        var2 = _closure3_slot1;
                        var1 = var2.set;
                        var0 = false;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var21 = {};
                    var21.dragScrolling = var27;
                    var20.__closure = var21;
                    var21 = 14366146937201.0;
                    var20.__workletHash = var21;
                    var21 = _closure1_slot47;
                    var20.__initData = var21;
                    var5.onEndDrag = var20;
                    var20 = function() {
                        var2 = _closure3_slot1;
                        var1 = var2.set;
                        var0 = false;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var21 = {};
                    var21.dragScrolling = var27;
                    var20.__closure = var21;
                    var21 = 12919609750790.0;
                    var20.__workletHash = var21;
                    var21 = _closure1_slot48;
                    var20.__initData = var21;
                    var5.onMomentumEnd = var20;
                    var20 = function arg0() {
                        _fun110802: for (var _fun110802_ip = 0;;) switch (_fun110802_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure3_slot22;
                                var2 = var3.get;
                                var3 = var2.bind(var3)();
                                var4 = _closure3_slot0;
                                var2 = var4.get;
                                var2 = var2.bind(var4)();
                                if (var3) {
                                    _fun110802_ip = 187;
                                    continue _fun110802
                                }
                            case 38:
                                var3 = var1.contentOffset;
                                var3 = var3.y;
                                var6 = undefined;
                                var5 = undefined;
                                if (!(var2 !== var3)) {
                                    _fun110802_ip = 115;
                                    continue _fun110802
                                }
                            case 57:
                                var8 = _closure1_slot30;
                                var4 = _closure3_slot0;
                                var3 = var4.get;
                                var7 = var3.bind(var4)();
                                var4 = _closure3_slot17;
                                var3 = var4.get;
                                var3 = var3.bind(var4)();
                                var4 = var3.height;
                                var9 = _closure3_slot21;
                                var3 = var9.get;
                                var3 = var3.bind(var9)();
                                var5 = var8.bind(var6)(var7, var4, var3);
                            case 115:
                                var7 = _closure3_slot0;
                                var4 = var7.set;
                                var3 = var1.contentOffset;
                                var3 = var3.y;
                                var3 = var4.bind(var7)(var3);
                                var3 = null;
                                if (!(var3 != var5)) {
                                    _fun110802_ip = 317;
                                    continue _fun110802
                                }
                            case 149:
                                var4 = _closure1_slot1;
                                var7 = _closure1_slot2;
                                var3 = 20;
                                var3 = var7[var3];
                                var4 = var4.bind(var6)(var3);
                                var3 = _closure3_slot23;
                                var3 = var4.bind(var6)(var3, var5);
                                _fun110802_ip = 317;
                                continue _fun110802;
                            case 187:
                                var5 = 0;
                                if (!(var2 < var5)) {
                                    _fun110802_ip = 207;
                                    continue _fun110802
                                }
                            case 193:
                                var3 = _closure3_slot0;
                                var2 = var3.set;
                                var2 = var2.bind(var3)(var5);
                            case 207:
                                var3 = _closure3_slot0;
                                var2 = var3.get;
                                var4 = var2.bind(var3)();
                                var2 = global;
                                var3 = var2.Math;
                                var2 = var3.abs;
                                var1 = var1.contentOffset;
                                var1 = var1.y;
                                var1 = var1 - var4;
                                var2 = var2.bind(var3)(var1);
                                var1 = 0.1;
                                if (!(!(var2 < var1))) {
                                    _fun110802_ip = 321;
                                    continue _fun110802
                                }
                            case 268:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 14;
                                var2 = var2[var1];
                                var1 = undefined;
                                var3 = var3.bind(var1)(var2);
                                var2 = var3.scrollTo;
                                var13 = _closure3_slot27;
                                var10 = false;
                                var14 = var3;
                                var12 = 0;
                                var11 = var4;
                                var0 = var14[var2](var13, var12, var11, var10, var9);
                            case 317:
                                var0 = undefined;
                                return var0;
                            case 321:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var21 = {};
                    var21.lockScrolling = var23;
                    var21.scrollPosition = var26;
                    var26 = var19[var1];
                    var26 = var12.bind(var14)(var26);
                    var26 = var26.scrollTo;
                    var21.scrollTo = var26;
                    var21.scrollerRef = var10;
                    var26 = _closure1_slot30;
                    var21.computeViewableChunksFromScrollPosition = var26;
                    var21.windowDimensions = var15;
                    var21.scrollableRegionSize = var3;
                    var26 = 20;
                    var26 = var19[var26];
                    var26 = var24.bind(var14)(var26);
                    var21.updateSharedValueIfChanged = var26;
                    var21.viewableChunks = var8;
                    var20.__closure = var21;
                    var21 = 12272614511406.0;
                    var20.__workletHash = var21;
                    var21 = _closure1_slot49;
                    var20.__initData = var21;
                    var5.onScroll = var20;
                    var7 = var6.bind(var7)(var5);
                    var5 = var19[var1];
                    var21 = var12.bind(var14)(var5);
                    var20 = var21.useAnimatedReaction;
                    var6 = function() {
                        var1 = _closure3_slot13;
                        var0 = var1.get;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var5 = {};
                    var5.mode = var18;
                    var6.__closure = var5;
                    var5 = 9335671323831.0;
                    var6.__workletHash = var5;
                    var5 = _closure1_slot50;
                    var6.__initData = var5;
                    var5 = function arg0, arg1() {
                        _fun110804: for (var _fun110804_ip = 0;;) switch (_fun110804_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = arg1;
                                var0 = null;
                                var0 = var0 != var3;
                                if (!var0) {
                                    _fun110804_ip = 19;
                                    continue _fun110804
                                }
                            case 15:
                                var0 = var1 !== var3;
                            case 19:
                                if (!var0) {
                                    _fun110804_ip = 107;
                                    continue _fun110804
                                }
                            case 22:
                                var2 = _closure1_slot15;
                                var2 = var2.PANEL;
                                if (!(var1 === var2)) {
                                    _fun110804_ip = 53;
                                    continue _fun110804
                                }
                            case 39:
                                var2 = _closure1_slot15;
                                var2 = var2.PIP;
                                if (!(var3 !== var2)) {
                                    _fun110804_ip = 88;
                                    continue _fun110804
                                }
                            case 53:
                                var0 = _closure1_slot15;
                                var0 = var0.PIP;
                                if (!(var1 === var0)) {
                                    _fun110804_ip = 107;
                                    continue _fun110804
                                }
                            case 67:
                                var2 = _closure3_slot22;
                                var1 = var2.set;
                                var0 = true;
                                var0 = var1.bind(var2)(var0);
                                _fun110804_ip = 107;
                                continue _fun110804;
                            case 88:
                                var2 = _closure3_slot22;
                                var1 = var2.set;
                                var0 = false;
                                var0 = var1.bind(var2)(var0);
                            case 107:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var26 = {};
                    var27 = _closure1_slot15;
                    var26.VoicePanelModes = var27;
                    var26.lockScrolling = var23;
                    var5.__closure = var26;
                    var26 = 15902278985136.0;
                    var5.__workletHash = var26;
                    var26 = _closure1_slot51;
                    var5.__initData = var26;
                    var5 = var20.bind(var21)(var6, var5);
                    var5 = var19[var1];
                    var20 = var12.bind(var14)(var5);
                    var6 = var20.useAnimatedProps;
                    var5 = function() {
                        _fun110805: for (var _fun110805_ip = 0;;) switch (_fun110805_ip) {
                            case 0:
                                var1 = _closure3_slot13;
                                var0 = var1.get;
                                var1 = var0.bind(var1)();
                                var0 = _closure1_slot15;
                                var0 = var0.PIP;
                                var5 = var1 === var0;
                                var1 = var5;
                                if (var1) {
                                    _fun110805_ip = 58;
                                    continue _fun110805
                                }
                            case 39:
                                var4 = _closure3_slot10;
                                var0 = var4.get;
                                var4 = var0.bind(var4)();
                                var0 = null;
                                var1 = var0 != var4;
                            case 58:
                                var0 = {};
                                var4 = 'auto';
                                if (!var5) {
                                    _fun110805_ip = 71;
                                    continue _fun110805
                                }
                            case 67:
                                var4 = 'none';
                            case 71:
                                var0.pointerEvents = var4;
                                var4 = !var1;
                                var0.scrollEnabled = var4;
                                var5 = _closure3_slot22;
                                var1 = var5.get;
                                var1 = var1.bind(var5)();
                                var1 = !var1;
                                if (!var1) {
                                    _fun110805_ip = 106;
                                    continue _fun110805
                                }
                            case 103:
                                var1 = var4;
                            case 106:
                                var0.showsVerticalScrollIndicator = var1;
                                var1 = {};
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 24;
                                var3 = var5[var3];
                                var5 = undefined;
                                var4 = var4.bind(var5)(var3);
                                var3 = _closure3_slot14;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var4.bind(var5)(var2);
                                var4 = var2.height;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var2.top;
                                var2 = var4 - var2;
                                var1.top = var2;
                                var2 = var3.get;
                                var2 = var2.bind(var3)();
                                var2 = var2.bottom;
                                var1.bottom = var2;
                                var0.scrollIndicatorInsets = var1;
                                return var0;
                        }
                    };
                    var21 = {};
                    var21.mode = var18;
                    var26 = _closure1_slot15;
                    var21.VoicePanelModes = var26;
                    var21.focused = var25;
                    var21.lockScrolling = var23;
                    var23 = 24;
                    var23 = var19[var23];
                    var23 = var24.bind(var14)(var23);
                    var21.calculateVoicePanelHeaderSpecs = var23;
                    var21.safeArea = var22;
                    var5.__closure = var21;
                    var21 = 11925957642441.0;
                    var5.__workletHash = var21;
                    var21 = _closure1_slot52;
                    var5.__initData = var21;
                    var6 = var6.bind(var20)(var5);
                    var22 = _closure1_slot4;
                    var21 = var22.useCallback;
                    var20 = new Array(1);
                    var20[0] = var3;
                    var5 = function(arg0, arg1) { // Environment: var0
                        var2 = _closure3_slot21;
                        var1 = var2.set;
                        var0 = arg1;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var5 = var21.bind(var22)(var5, var20);
                    var1 = var19[var1];
                    var12 = var12.bind(var14)(var1);
                    var1 = var12.useDerivedValue;
                    var0 = function() {
                        _fun110807: for (var _fun110807_ip = 0;;) switch (_fun110807_ip) {
                            case 0:
                                var2 = _closure3_slot13;
                                var0 = var2.get;
                                var2 = var0.bind(var2)();
                                var3 = _closure1_slot15;
                                var3 = var3.PIP;
                                if (!(var3 !== var2)) {
                                    _fun110807_ip = 255;
                                    continue _fun110807
                                }
                            case 36:
                                var0 = _closure1_slot15;
                                var0 = var0.DISMISSED;
                                if (!(var0 !== var2)) {
                                    _fun110807_ip = 255;
                                    continue _fun110807
                                }
                            case 53:
                                var2 = _closure3_slot6;
                                var0 = var2.get;
                                var0 = var0.bind(var2)();
                                if (!var0) {
                                    _fun110807_ip = 116;
                                    continue _fun110807
                                }
                            case 69:
                                var2 = _closure3_slot28;
                                var0 = var2.get;
                                var0 = var0.bind(var2)();
                                var0 = var0.active;
                                if (!var0) {
                                    _fun110807_ip = 116;
                                    continue _fun110807
                                }
                            case 91:
                                var2 = _closure3_slot28;
                                var0 = var2.get;
                                var0 = var0.bind(var2)();
                                var0 = var0.requiresPop;
                                if (var0) {
                                    _fun110807_ip = 250;
                                    continue _fun110807
                                }
                            case 116:
                                var2 = _closure3_slot18;
                                var0 = var2.get;
                                var0 = var0.bind(var2)();
                                var2 = var0.drawerY;
                                var3 = _closure3_slot19;
                                var0 = var3.get;
                                var0 = var0.bind(var3)();
                                var3 = var0.gestureActive;
                                var5 = 0;
                                var0 = 0;
                                if (!var3) {
                                    _fun110807_ip = 179;
                                    continue _fun110807
                                }
                            case 161:
                                var4 = _closure3_slot19;
                                var3 = var4.get;
                                var3 = var3.bind(var4)();
                                var0 = var3.y;
                            case 179:
                                var0 = var2 + var0;
                                var2 = _closure3_slot17;
                                var1 = var2.get;
                                var1 = var1.bind(var2)();
                                var6 = var1.height;
                                var1 = global;
                                var3 = var1.Math;
                                var2 = var3.min;
                                var4 = var1.Math;
                                var1 = var4.max;
                                var0 = var6 - var0;
                                var0 = var0 / var6;
                                var1 = var1.bind(var4)(var0, var5);
                                var0 = 1;
                                var0 = var2.bind(var3)(var1, var0);
                                return var0;
                            case 250:
                                var0 = 1;
                                return var0;
                            case 255:
                                var0 = 0;
                                return var0;
                        }
                    };
                    var14 = {};
                    var14.mode = var18;
                    var18 = _closure1_slot15;
                    var14.VoicePanelModes = var18;
                    var14.connected = var17;
                    var14.gestureState = var2;
                    var14.wrapperDimensions = var16;
                    var14.wrapperOffset = var4;
                    var14.windowDimensions = var15;
                    var0.__closure = var14;
                    var14 = 7328947258749.0;
                    var0.__workletHash = var14;
                    var13 = _closure1_slot53;
                    var0.__initData = var13;
                    var1 = var1.bind(var12)(var0);
                    var0 = {};
                    var0.gesture = var11;
                    var0.scrollerRef = var10;
                    var0.scrollNativeGesture = var9;
                    var0.viewableChunks = var8;
                    var0.handleScroll = var7;
                    var0.scrollViewProps = var6;
                    var0.onContentSizeChange = var5;
                    var0.wrapperOffset = var4;
                    var0.scrollableRegionSize = var3;
                    var0.gestureState = var2;
                    var0.opacity = var1;
                    return var0;
                };
                var3 = var3.bind(var4)(var8);
                var22 = var3.gesture;
                var18 = var3.gestureState;
                var34 = var3.handleScroll;
                var31 = var3.onContentSizeChange;
                var32 = var3.scrollViewProps;
                var35 = var3.scrollerRef;
                var29 = var3.scrollNativeGesture;
                var33 = var3.viewableChunks;
                var25 = var3.wrapperOffset;
                var19 = var3.opacity;
                var3 = 35;
                var3 = var7[var3];
                var3 = var6.bind(var4)(var3);
                var3 = var3.bind(var4)();
                var _closure2_slot3 = var3;
                var8 = _closure1_slot4;
                var7 = var8.useEffect;
                var6 = new Array(1);
                var6[0] = var3;
                var3 = function() { // Environment: var0
                    var1 = _closure2_slot3;
                    var0 = var1.lock;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var3 = var7.bind(var8)(var3, var6);
                var7 = _closure1_slot4;
                var6 = var7.useEffect;
                var3 = function() { // Environment: var0
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var0 = true;
                    var0 = var2.bind(var1)(var0);
                    return var0;
                };
                var0 = new Array(0);
                var0 = var6.bind(var7)(var3, var0);
                var0 = null;
                if (!var2) {
                    _fun110777_ip = 1236;
                    continue _fun110777
                }
            case 487:
                var3 = _closure1_slot21;
                var26 = _closure1_slot0;
                var15 = _closure1_slot2;
                var1 = var15[var1];
                var1 = var26.bind(var4)(var1);
                var2 = var1.AnalyticsLocationProvider;
                var1 = {};
                var1.value = var5;
                var7 = _closure1_slot22;
                var17 = 36;
                var5 = var15[var17];
                var5 = var26.bind(var4)(var5);
                var6 = var5.LayerScope;
                var5 = {};
                var10 = _closure1_slot21;
                var13 = _closure1_slot1;
                var8 = 37;
                var8 = var15[var8];
                var9 = var13.bind(var4)(var8);
                var8 = {};
                var9 = var10.bind(var4)(var9, var8);
                var8 = new Array(3);
                var8[0] = var9;
                var11 = _closure1_slot21;
                var10 = _closure1_slot63;
                var9 = {};
                var9.opacity = var19;
                var9.onPress = var14;
                var9 = var11.bind(var4)(var10, var9);
                var8[1] = var9;
                var9 = 38;
                var9 = var15[var9];
                var10 = var13.bind(var4)(var9);
                var9 = {};
                var11 = var30.accessibilityView;
                var9.style = var11;
                var11 = global;
                var11 = var11.HermesInternal;
                var14 = var11.concat;
                var11 = 'voice-panel-ui-';
                var11 = var14.bind(var11)(var16);
                var9.nativeID = var11;
                var11 = true;
                var9.accessibilityViewIsModal = var11;
                var11 = _closure1_slot24;
                var9.layout = var11;
                var11 = 39;
                var11 = var15[var11];
                var11 = var13.bind(var4)(var11);
                var9.onAccessibilityEscape = var11;
                var16 = _closure1_slot21;
                var11 = 40;
                var11 = var15[var11];
                var14 = var13.bind(var4)(var11);
                var11 = {};
                var14 = var16.bind(var4)(var14, var11);
                var11 = new Array(4);
                var11[0] = var14;
                var16 = _closure1_slot65;
                var14 = {};
                var14.wrapperOffset = var25;
                var20 = _closure1_slot21;
                var17 = var15[var17];
                var17 = var26.bind(var4)(var17);
                var19 = var17.LayerScope;
                var17 = {};
                var17.zIndex = var21;
                var24 = _closure1_slot21;
                var21 = 41;
                var21 = var15[var21];
                var23 = var13.bind(var4)(var21);
                var21 = {};
                var21.wrapperOffset = var25;
                var21.gestureState = var18;
                var25 = _closure1_slot24;
                var21.layout = var25;
                var21 = var24.bind(var4)(var23, var21);
                var17.children = var21;
                var19 = var20.bind(var4)(var19, var17);
                var17 = new Array(2);
                var17[0] = var19;
                var21 = _closure1_slot21;
                var25 = 18;
                var19 = var15[var25];
                var19 = var26.bind(var4)(var19);
                var20 = var19.GestureDetector;
                var19 = {};
                var19.gesture = var22;
                var28 = _closure1_slot66;
                var19.discordOnErrorHandler = var28;
                var24 = _closure1_slot21;
                var22 = 29;
                var22 = var15[var22];
                var23 = var13.bind(var4)(var22);
                var22 = {};
                var36 = _closure1_slot5;
                var36 = var36.absoluteFill;
                var22.style = var36;
                var36 = _closure1_slot24;
                var22.layout = var36;
                var22.collapsable = var27;
                var27 = _closure1_slot21;
                var25 = var15[var25];
                var25 = var26.bind(var4)(var25);
                var26 = var25.GestureDetector;
                var25 = {};
                var25.gesture = var29;
                var25.discordOnErrorHandler = var28;
                var29 = _closure1_slot32;
                var28 = {};
                var36 = _closure1_slot27;
                var28.layout = var36;
                var28.ref = var35;
                var28.onScroll = var34;
                var34 = _closure1_slot64;
                var28.onMomentumScrollEnd = var34;
                var28.animatedProps = var32;
                var32 = var30.scrollView;
                var28.style = var32;
                var28.onContentSizeChange = var31;
                var30 = var30.scrollViewContent;
                var28.contentContainerStyle = var30;
                var30 = 8.333333333333334;
                var28.scrollEventThrottle = var30;
                var32 = _closure1_slot21;
                var30 = 42;
                var30 = var15[var30];
                var31 = var13.bind(var4)(var30);
                var30 = {};
                var30.viewableChunks = var33;
                var31 = var32.bind(var4)(var31, var30);
                var30 = new Array(2);
                var30[0] = var31;
                var33 = _closure1_slot21;
                var31 = 43;
                var31 = var15[var31];
                var32 = var13.bind(var4)(var31);
                var31 = {};
                var31 = var33.bind(var4)(var32, var31);
                var30[1] = var31;
                var28.children = var30;
                var28 = var7.bind(var4)(var29, var28);
                var25.children = var28;
                var25 = var27.bind(var4)(var26, var25);
                var22.children = var25;
                var22 = var24.bind(var4)(var23, var22);
                var19.children = var22;
                var19 = var21.bind(var4)(var20, var19);
                var17[1] = var19;
                var14.children = var17;
                var14 = var7.bind(var4)(var16, var14);
                var11[1] = var14;
                var17 = _closure1_slot21;
                var14 = 44;
                var14 = var15[var14];
                var16 = var13.bind(var4)(var14);
                var14 = {};
                var14.gestureState = var18;
                var14 = var17.bind(var4)(var16, var14);
                var11[2] = var14;
                var14 = _closure1_slot21;
                var12 = 45;
                var12 = var15[var12];
                var13 = var13.bind(var4)(var12);
                var12 = {};
                var12 = var14.bind(var4)(var13, var12);
                var11[3] = var12;
                var9.children = var11;
                var9 = var7.bind(var4)(var10, var9);
                var8[2] = var9;
                var5.children = var8;
                var5 = var7.bind(var4)(var6, var5);
                var1.children = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 1236:
                return var0;
        }
    };
    var3 = var4.bind(var7)(var3);
    var4 = 46;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_panel/native/VoicePanelUI.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.REDUCED_MOTION_OPACITY_PHYSICS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 3939, 13594, 7872, 11803, 11801, 3514, 11804, 33, 4072, 1297, 671, 3711, 4097, 11802, 1568, 4956, 5297, 5296, 14250, 3270, 14243, 11807, 14248, 14236, 13122, 8029, 6453, 12760, 1207, 5721, 5574, 802, 14251, 5200, 14252, 14253, 7934, 14254, 14256, 14293, 14318, 14320, 14358, 2]);