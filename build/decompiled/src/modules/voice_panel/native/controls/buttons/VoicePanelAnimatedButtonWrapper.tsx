// modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Pressable;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MODE_CHANGE_PHYSICS;
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var9 = var4.bind(var0)(var3);
    var8 = var9.createStyles;
    var3 = {};
    var10 = {
        'justifyContent': 'center',
        'alignItems': 'center'
    };
    var11 = 5;
    var11 = var5[var11];
    var11 = var6.bind(var0)(var11);
    var11 = var11.radii;
    var11 = var11.round;
    var10.borderRadius = var11;
    var3.pressableWrapper = var10;
    var3 = var8.bind(var9)(var3);
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var6 = var6.bind(var0)(var3);
    var3 = var6.createAnimatedComponent;
    var3 = var3.bind(var6)(var7);
    var _closure1_slot7 = var3;
    var3 = {};
    var6 = 'function VoicePanelAnimatedButtonWrapperTsx1(values){const{offsetFromCenter,withSpring,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;offsetFromCenter.set(values.windowWidth/2-values.targetGlobalOriginX-values.targetWidth/2);return{initialValues:{originX:values.targetOriginX+offsetFromCenter.get(),opacity:0,transform:[{scale:0.5}]},animations:{originX:withSpring(values.targetOriginX,MODE_CHANGE_PHYSICS),opacity:withTiming(1,{duration:100}),transform:[{scale:withSpring(1,MODE_CHANGE_PHYSICS)}]}};}';
    var3.code = var6;
    var _closure1_slot8 = var3;
    var3 = {};
    var6 = 'function VoicePanelAnimatedButtonWrapperTsx2(values){const{withSpring,offsetFromCenter,MODE_CHANGE_PHYSICS,withTiming}=this.__closure;return{initialValues:{originX:values.currentOriginX,opacity:1,transform:[{scale:1}]},animations:{originX:withSpring(values.currentOriginX+offsetFromCenter.get(),MODE_CHANGE_PHYSICS),opacity:withTiming(0,{duration:100}),transform:[{scale:withSpring(0.5,MODE_CHANGE_PHYSICS)}]}};}';
    var3.code = var6;
    var _closure1_slot9 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/controls/buttons/VoicePanelAnimatedButtonWrapper.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun111553: for (var _fun111553_ip = 0;;) switch (_fun111553_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.props;
                var10 = var0.onPress;
                var9 = var0.onLongPress;
                var15 = var0.onPressIn;
                var _closure2_slot0 = var15;
                var4 = var0.onPressOut;
                var _closure2_slot1 = var4;
                var7 = var0.accessibilityLabel;
                var17 = var0.style;
                var _closure2_slot2 = var17;
                var5 = var0.children;
                var2 = var0.pressed;
                var8 = var0.disabled;
                var3 = undefined;
                var _closure2_slot3 = var3;
                var _closure2_slot4 = var3;
                var _closure2_slot5 = var3;
                var _closure2_slot6 = var3;
                var _closure2_slot7 = var3;
                var _closure2_slot8 = var3;
                var13 = _closure1_slot0;
                var12 = _closure1_slot2;
                var11 = 6;
                var12 = var12[var11];
                var14 = var13.bind(var3)(var12);
                var13 = var14.useSharedValue;
                var12 = false;
                var19 = var13.bind(var14)(var12);
                var12 = null;
                if (!(var12 != var2)) {
                    _fun111553_ip = 142;
                    continue _fun111553
                }
            case 139:
                var19 = var2;
            case 142:
                _closure2_slot3 = var19;
                var13 = _closure1_slot1;
                var2 = _closure1_slot2;
                var12 = 7;
                var12 = var2[var12];
                var12 = var13.bind(var3)(var12);
                var18 = var12.bind(var3)();
                _closure2_slot4 = var18;
                var12 = _closure1_slot6;
                var16 = var12.bind(var3)();
                _closure2_slot5 = var16;
                var13 = _closure1_slot3;
                var14 = var13.useMemo;
                var12 = new Array(4);
                var12[0] = var19;
                var12[1] = var18;
                var12[2] = var15;
                var12[3] = var4;
                var4 = function() { // Environment: var1
                    _fun111554: for (var _fun111554_ip = 0;;) switch (_fun111554_ip) {
                        case 0:
                            var0 = {};
                            var3 = _closure2_slot0;
                            var4 = null;
                            if (!(var4 == var3)) {
                                _fun111554_ip = 26;
                                continue _fun111554
                            }
                        case 17:
                            var3 = function() { // Environment: var1
                                var2 = _closure2_slot4;
                                var1 = var2.lock;
                                var1 = var1.bind(var2)();
                                var2 = _closure2_slot3;
                                var1 = var2.set;
                                var0 = true;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            _fun111554_ip = 30;
                            continue _fun111554;
                        case 26:
                            var3 = _closure2_slot0;
                        case 30:
                            var0.onPressIn = var3;
                            var3 = _closure2_slot1;
                            if (!(var4 == var3)) {
                                _fun111554_ip = 52;
                                continue _fun111554
                            }
                        case 43:
                            var1 = function() { // Environment: var1
                                var2 = _closure2_slot4;
                                var1 = var2.unlock;
                                var1 = var1.bind(var2)();
                                var2 = _closure2_slot3;
                                var1 = var2.set;
                                var0 = false;
                                var0 = var1.bind(var2)(var0);
                                var0 = undefined;
                                return var0;
                            };
                            _fun111554_ip = 56;
                            continue _fun111554;
                        case 52:
                            var1 = _closure2_slot1;
                        case 56:
                            var0.onPressOut = var1;
                            return var0;
                    }
                };
                var4 = var14.bind(var13)(var4, var12);
                var15 = var6.width;
                _closure2_slot6 = var15;
                var14 = var6.height;
                _closure2_slot7 = var14;
                var6 = _closure1_slot0;
                var2 = var2[var11];
                var11 = var6.bind(var3)(var2);
                var6 = var11.useSharedValue;
                var2 = 0;
                var2 = var6.bind(var11)(var2);
                _closure2_slot8 = var2;
                var12 = var13.useMemo;
                var11 = new Array(1);
                var11[0] = var2;
                var6 = function() { // Environment: var1
                    _fun111557: for (var _fun111557_ip = 0;;) switch (_fun111557_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.isAndroid;
                            var1 = var1.bind(var3)();
                            if (var1) {
                                _fun111557_ip = 154;
                                continue _fun111557
                            }
                        case 38:
                            var1 = function arg0() {
                                var3 = arg0;
                                var4 = _closure2_slot8;
                                var1 = var4.set;
                                var0 = var3.windowWidth;
                                var6 = 2;
                                var5 = var0 / var6;
                                var0 = var3.targetGlobalOriginX;
                                var5 = var5 - var0;
                                var0 = var3.targetWidth;
                                var0 = var0 / var6;
                                var0 = var5 - var0;
                                var0 = var1.bind(var4)(var0);
                                var0 = {};
                                var1 = {};
                                var4 = var3.targetOriginX;
                                var5 = _closure2_slot8;
                                var2 = var5.get;
                                var2 = var2.bind(var5)();
                                var2 = var4 + var2;
                                var1.originX = var2;
                                var2 = 0;
                                var1.opacity = var2;
                                var4 = {};
                                var2 = 0.5;
                                var4.scale = var2;
                                var2 = new Array(1);
                                var2[0] = var4;
                                var1.transform = var2;
                                var0.initialValues = var1;
                                var1 = {};
                                var7 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var2 = 9;
                                var5 = var8[var2];
                                var4 = undefined;
                                var9 = var7.bind(var4)(var5);
                                var5 = var9.withSpring;
                                var3 = var3.targetOriginX;
                                var6 = _closure1_slot4;
                                var3 = var5.bind(var9)(var3, var6);
                                var1.originX = var3;
                                var3 = 10;
                                var3 = var8[var3];
                                var10 = var7.bind(var4)(var3);
                                var9 = var10.withTiming;
                                var3 = {};
                                var5 = 100;
                                var3.duration = var5;
                                var5 = 1;
                                var3 = var9.bind(var10)(var5, var3);
                                var1.opacity = var3;
                                var3 = {};
                                var2 = var8[var2];
                                var4 = var7.bind(var4)(var2);
                                var2 = var4.withSpring;
                                var2 = var2.bind(var4)(var5, var6);
                                var3.scale = var2;
                                var2 = new Array(1);
                                var2[0] = var3;
                                var1.transform = var2;
                                var0.animations = var1;
                                return var0;
                            };
                            var3 = {};
                            var4 = _closure2_slot8;
                            var3.offsetFromCenter = var4;
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 9;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.withSpring;
                            var3.withSpring = var4;
                            var4 = _closure1_slot4;
                            var3.MODE_CHANGE_PHYSICS = var4;
                            var4 = 10;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.withTiming;
                            var3.withTiming = var4;
                            var1.__closure = var3;
                            var3 = 16238937246135.0;
                            var1.__workletHash = var3;
                            var2 = _closure1_slot8;
                            var1.__initData = var2;
                            return var1;
                        case 154:
                            return var0;
                    }
                };
                var12 = var12.bind(var13)(var6, var11);
                var11 = var13.useMemo;
                var6 = new Array(1);
                var6[0] = var2;
                var2 = function() { // Environment: var1
                    _fun111559: for (var _fun111559_ip = 0;;) switch (_fun111559_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 8;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.isAndroid;
                            var1 = var1.bind(var3)();
                            if (var1) {
                                _fun111559_ip = 154;
                                continue _fun111559
                            }
                        case 38:
                            var1 = function arg0() {
                                var3 = arg0;
                                var0 = {};
                                var1 = {};
                                var2 = var3.currentOriginX;
                                var1.originX = var2;
                                var2 = 1;
                                var1.opacity = var2;
                                var4 = {};
                                var4.scale = var2;
                                var2 = new Array(1);
                                var2[0] = var4;
                                var1.transform = var2;
                                var0.initialValues = var1;
                                var1 = {};
                                var5 = _closure1_slot0;
                                var7 = _closure1_slot2;
                                var2 = 9;
                                var8 = var7[var2];
                                var4 = undefined;
                                var9 = var5.bind(var4)(var8);
                                var8 = var9.withSpring;
                                var10 = var3.currentOriginX;
                                var11 = _closure2_slot8;
                                var3 = var11.get;
                                var3 = var3.bind(var11)();
                                var3 = var10 + var3;
                                var6 = _closure1_slot4;
                                var3 = var8.bind(var9)(var3, var6);
                                var1.originX = var3;
                                var3 = 10;
                                var3 = var7[var3];
                                var10 = var5.bind(var4)(var3);
                                var9 = var10.withTiming;
                                var8 = {};
                                var3 = 100;
                                var8.duration = var3;
                                var3 = 0;
                                var3 = var9.bind(var10)(var3, var8);
                                var1.opacity = var3;
                                var3 = {};
                                var2 = var7[var2];
                                var5 = var5.bind(var4)(var2);
                                var4 = var5.withSpring;
                                var2 = 0.5;
                                var2 = var4.bind(var5)(var2, var6);
                                var3.scale = var2;
                                var2 = new Array(1);
                                var2[0] = var3;
                                var1.transform = var2;
                                var0.animations = var1;
                                return var0;
                            };
                            var3 = {};
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var4 = 9;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.withSpring;
                            var3.withSpring = var4;
                            var4 = _closure2_slot8;
                            var3.offsetFromCenter = var4;
                            var4 = _closure1_slot4;
                            var3.MODE_CHANGE_PHYSICS = var4;
                            var4 = 10;
                            var4 = var6[var4];
                            var4 = var5.bind(var0)(var4);
                            var4 = var4.withTiming;
                            var3.withTiming = var4;
                            var1.__closure = var3;
                            var3 = 17504057367727.0;
                            var1.__workletHash = var3;
                            var2 = _closure1_slot9;
                            var1.__initData = var2;
                            return var1;
                        case 154:
                            return var0;
                    }
                };
                var11 = var11.bind(var13)(var2, var6);
                var6 = var13.useMemo;
                var2 = new Array(4);
                var2[0] = var17;
                var16 = var16.pressableWrapper;
                var2[1] = var16;
                var2[2] = var15;
                var2[3] = var14;
                var1 = function() { // Environment: var1
                    var0 = _closure2_slot5;
                    var2 = var0.pressableWrapper;
                    var0 = new Array(3);
                    var0[0] = var2;
                    var2 = {};
                    var3 = _closure2_slot6;
                    var2.width = var3;
                    var3 = _closure2_slot7;
                    var2.height = var3;
                    var0[1] = var2;
                    var1 = _closure2_slot2;
                    var0[2] = var1;
                    return var0;
                };
                var6 = var6.bind(var13)(var1, var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot7;
                var0 = {};
                var0.entering = var12;
                var0.exiting = var11;
                var0.onPress = var10;
                var0.onLongPress = var9;
                var0.disabled = var8;
                var21 = var0;
                var20 = var4;
                var4 = copyDataProperties(var21, var20);
                var8 = 'button';
                var4 = 'accessibilityRole';
                var0[var4] = var8;
                var4 = 'accessibilityLabel';
                var0[var4] = var7;
                var4 = 'style';
                var0[var4] = var6;
                var4 = 'children';
                var0[var4] = var5;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 11773, 33, 1297, 671, 3681, 14221, 478, 4042, 4058, 2]);