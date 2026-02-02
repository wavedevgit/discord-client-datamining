// modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var10.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportAll;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var11 = var3.StyleSheet;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PUSH_TO_TALK_PIP_PHYSICS;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot6 = var6;
    var6 = var3.Fragment;
    var _closure1_slot7 = var6;
    var3 = var3.jsxs;
    var _closure1_slot8 = var3;
    var3 = 5;
    var6 = var5[var3];
    var8 = var10.bind(var0)(var6);
    var7 = var8.createAnimatedComponent;
    var6 = 6;
    var6 = var5[var6];
    var6 = var10.bind(var0)(var6);
    var6 = var7.bind(var8)(var6);
    var _closure1_slot9 = var6;
    var3 = var5[var3];
    var7 = var10.bind(var0)(var3);
    var6 = var7.createAnimatedComponent;
    var3 = 7;
    var3 = var5[var3];
    var3 = var10.bind(var0)(var3);
    var3 = var6.bind(var7)(var3);
    var _closure1_slot10 = var3;
    var3 = {
        'top': 6,
        'bottom': 6,
        'left': 6,
        'right': 6
    };
    var _closure1_slot11 = var3;
    var3 = 8;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'position': 'absolute',
        'width': 32,
        'height': 32,
        'alignItems': 'center',
        'justifyContent': 'center'
    };
    var9 = 9;
    var12 = var5[var9];
    var12 = var10.bind(var0)(var12);
    var12 = var12.radii;
    var12 = var12.round;
    var8.borderRadius = var12;
    var3.iconContainer = var8;
    var8 = {};
    var14 = var11.absoluteFillObject;
    var15 = var8;
    var11 = copyDataProperties(var15, var14);
    var9 = var5[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.colors;
    var10 = var9.BLACK;
    var9 = 'backgroundColor';
    var8[var9] = var10;
    var3.overlay = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot12 = var3;
    var3 = {};
    var6 = "function VoicePanelPIPPushToTalkOverlayTsx1(){const{isPushingToTalk,EXPANDED_ICON_SIZE,BASE_ICON_SIZE,withSpring,PUSH_TO_TALK_PIP_PHYSICS,white}=this.__closure;const padding=isPushingToTalk.get()?8*EXPANDED_ICON_SIZE/BASE_ICON_SIZE+8:8;return{right:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),bottom:withSpring(padding,PUSH_TO_TALK_PIP_PHYSICS),transform:[{scale:withSpring(isPushingToTalk.get()?EXPANDED_ICON_SIZE/BASE_ICON_SIZE:1,PUSH_TO_TALK_PIP_PHYSICS)}],backgroundColor:withSpring(isPushingToTalk.get()?white:'rgba(0, 0, 0, 0.54)',PUSH_TO_TALK_PIP_PHYSICS)};}";
    var3.code = var6;
    var _closure1_slot13 = var3;
    var3 = {};
    var6 = 'function VoicePanelPIPPushToTalkOverlayTsx2(){const{withSpring,isPushingToTalk,black,white,PUSH_TO_TALK_PIP_PHYSICS}=this.__closure;return{tintColor:withSpring(isPushingToTalk.get()?black:white,PUSH_TO_TALK_PIP_PHYSICS)};}';
    var3.code = var6;
    var _closure1_slot14 = var3;
    var3 = {};
    var6 = 'function VoicePanelPIPPushToTalkOverlayTsx3(){const{withSpring,isPushingToTalk,PUSH_TO_TALK_PIP_PHYSICS,getVoicePanelPIPBorderRadius,pipState}=this.__closure;return{opacity:withSpring(isPushingToTalk.get()?0.5:0,PUSH_TO_TALK_PIP_PHYSICS),borderRadius:getVoicePanelPIPBorderRadius(pipState.width,pipState.height)};}';
    var3.code = var6;
    var _closure1_slot15 = var3;
    var3 = {};
    var6 = 'function VoicePanelPIPPushToTalkOverlayTsx4(event,success){const{runOnJS,handlePushToTalk}=this.__closure;if(!success){return;}runOnJS(handlePushToTalk)(false);}';
    var3.code = var6;
    var _closure1_slot16 = var3;
    var3 = {};
    var6 = 'function VoicePanelPIPPushToTalkOverlayTsx5(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(false);}';
    var3.code = var6;
    var _closure1_slot17 = var3;
    var3 = {};
    var6 = 'function VoicePanelPIPPushToTalkOverlayTsx6(){const{runOnJS,handlePushToTalk}=this.__closure;runOnJS(handlePushToTalk)(true);}';
    var3.code = var6;
    var _closure1_slot18 = var3;
    var3 = 16;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_panel/native/pip/VoicePanelPIPPushToTalkOverlay.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var6 = _closure1_slot0;
        var14 = _closure1_slot2;
        var1 = 11;
        var1 = var14[var1];
        var3 = undefined;
        var2 = var6.bind(var3)(var1);
        var1 = var2.usePIPState;
        var8 = var1.bind(var2)();
        var _closure2_slot0 = var8;
        var1 = _closure1_slot12;
        var11 = var1.bind(var3)();
        var1 = function() {
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var4 = var4.bind(var2)(var3);
            var2 = var4.useSharedValue;
            var3 = false;
            var2 = var2.bind(var4)(var3);
            var _closure3_slot0 = var2;
            var4 = _closure1_slot4;
            var1 = var4.useRef;
            var1 = var1.bind(var4)(var3);
            var _closure3_slot1 = var1;
            var3 = var4.useCallback;
            var1 = new Array(1);
            var1[0] = var2;
            var0 = function(arg0) { // Environment: var0
                _fun111810: for (var _fun111810_ip = 0;;) switch (_fun111810_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = _closure3_slot1;
                        var1 = var1.current;
                        if (!(var2 !== var1)) {
                            _fun111810_ip = 79;
                            continue _fun111810
                        }
                    case 19:
                        var1 = _closure3_slot1;
                        var1.current = var2;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 10;
                        var3 = var3[var1];
                        var1 = undefined;
                        var3 = var4.bind(var1)(var3);
                        var1 = var3.setPushToTalkState;
                        var1 = var1.bind(var3)(var2);
                        var1 = _closure3_slot0;
                        var0 = var1.set;
                        var0 = var0.bind(var1)(var2);
                    case 79:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var3.bind(var4)(var0, var1);
            var0 = new Array(2);
            var0[0] = var2;
            var0[1] = var1;
            return var0;
        };
        var4 = var1.bind(var3)();
        var2 = _closure1_slot3;
        var1 = 2;
        var2 = var2.bind(var3)(var4, var1);
        var1 = 0;
        var16 = var2[var1];
        var _closure2_slot1 = var16;
        var1 = 1;
        var5 = var2[var1];
        var _closure2_slot2 = var5;
        var13 = _closure1_slot1;
        var1 = 9;
        var2 = var14[var1];
        var2 = var13.bind(var3)(var2);
        var2 = var2.unsafe_rawColors;
        var18 = var2.WHITE;
        var _closure2_slot3 = var18;
        var1 = var14[var1];
        var1 = var13.bind(var3)(var1);
        var1 = var1.unsafe_rawColors;
        var19 = var1.BLACK;
        var _closure2_slot4 = var19;
        var1 = 5;
        var2 = var14[var1];
        var7 = var6.bind(var3)(var2);
        var4 = var7.useAnimatedStyle;
        var2 = function() {
            _fun111811: for (var _fun111811_ip = 0;;) switch (_fun111811_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = var1.get;
                    var0 = var0.bind(var1)();
                    var10 = 8;
                    if (!var0) {
                        _fun111811_ip = 25;
                        continue _fun111811
                    }
                case 22:
                    var10 = 20;
                case 25:
                    var0 = {};
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var6 = 12;
                    var3 = var2[var6];
                    var4 = undefined;
                    var8 = var7.bind(var4)(var3);
                    var3 = var8.withSpring;
                    var9 = _closure1_slot5;
                    var3 = var3.bind(var8)(var10, var9);
                    var0.right = var3;
                    var3 = var2[var6];
                    var8 = var7.bind(var4)(var3);
                    var3 = var8.withSpring;
                    var3 = var3.bind(var8)(var10, var9);
                    var0.bottom = var3;
                    var3 = {};
                    var2 = var2[var6];
                    var9 = var7.bind(var4)(var2);
                    var8 = var9.withSpring;
                    var7 = _closure2_slot1;
                    var2 = var7.get;
                    var2 = var2.bind(var7)();
                    var7 = 1;
                    if (!var2) {
                        _fun111811_ip = 140;
                        continue _fun111811
                    }
                case 130:
                    var7 = 1.5;
                case 140:
                    var2 = _closure1_slot5;
                    var2 = var8.bind(var9)(var7, var2);
                    var3.scale = var2;
                    var2 = new Array(1);
                    var2[0] = var3;
                    var0.transform = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var6];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.withSpring;
                    var6 = _closure2_slot1;
                    var2 = var6.get;
                    var6 = var2.bind(var6)();
                    var2 = 'rgba(0, 0, 0, 0.54)';
                    if (!var6) {
                        _fun111811_ip = 215;
                        continue _fun111811
                    }
                case 211:
                    var2 = _closure2_slot3;
                case 215:
                    var1 = _closure1_slot5;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.backgroundColor = var1;
                    return var0;
            }
        };
        var12 = {
            'isPushingToTalk': null,
            'EXPANDED_ICON_SIZE': 48,
            'BASE_ICON_SIZE': 32
        };
        var12.isPushingToTalk = var16;
        var17 = 12;
        var9 = var14[var17];
        var9 = var6.bind(var3)(var9);
        var9 = var9.withSpring;
        var12.withSpring = var9;
        var9 = _closure1_slot5;
        var12.PUSH_TO_TALK_PIP_PHYSICS = var9;
        var12.white = var18;
        var2.__closure = var12;
        var12 = 3936373516983.0;
        var2.__workletHash = var12;
        var12 = _closure1_slot13;
        var2.__initData = var12;
        var15 = var4.bind(var7)(var2);
        var2 = var14[var1];
        var7 = var6.bind(var3)(var2);
        var4 = var7.useAnimatedStyle;
        var2 = function() {
            _fun111812: for (var _fun111812_ip = 0;;) switch (_fun111812_ip) {
                case 0:
                    var0 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.withSpring;
                    var6 = _closure2_slot1;
                    var2 = var6.get;
                    var2 = var2.bind(var6)();
                    if (var2) {
                        _fun111812_ip = 57;
                        continue _fun111812
                    }
                case 51:
                    var2 = _closure2_slot3;
                    _fun111812_ip = 61;
                    continue _fun111812;
                case 57:
                    var2 = _closure2_slot4;
                case 61:
                    var1 = _closure1_slot5;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.tintColor = var1;
                    return var0;
            }
        };
        var12 = {};
        var20 = var14[var17];
        var20 = var6.bind(var3)(var20);
        var20 = var20.withSpring;
        var12.withSpring = var20;
        var12.isPushingToTalk = var16;
        var12.black = var19;
        var12.white = var18;
        var12.PUSH_TO_TALK_PIP_PHYSICS = var9;
        var2.__closure = var12;
        var12 = 11469896791985.0;
        var2.__workletHash = var12;
        var12 = _closure1_slot14;
        var2.__initData = var12;
        var12 = var4.bind(var7)(var2);
        var1 = var14[var1];
        var4 = var6.bind(var3)(var1);
        var2 = var4.useAnimatedStyle;
        var1 = function() {
            _fun111813: for (var _fun111813_ip = 0;;) switch (_fun111813_ip) {
                case 0:
                    var0 = {};
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var1 = var4[var1];
                    var4 = undefined;
                    var7 = var3.bind(var4)(var1);
                    var6 = var7.withSpring;
                    var5 = _closure2_slot1;
                    var3 = var5.get;
                    var3 = var3.bind(var5)();
                    var5 = 0;
                    if (!var3) {
                        _fun111813_ip = 63;
                        continue _fun111813
                    }
                case 53:
                    var5 = 0.5;
                case 63:
                    var3 = _closure1_slot5;
                    var3 = var6.bind(var7)(var5, var3);
                    var0.opacity = var3;
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 13;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.getVoicePanelPIPBorderRadius;
                    var1 = _closure2_slot0;
                    var2 = var1.width;
                    var1 = var1.height;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.borderRadius = var1;
                    return var0;
            }
        };
        var7 = {};
        var17 = var14[var17];
        var17 = var6.bind(var3)(var17);
        var17 = var17.withSpring;
        var7.withSpring = var17;
        var7.isPushingToTalk = var16;
        var7.PUSH_TO_TALK_PIP_PHYSICS = var9;
        var9 = 13;
        var9 = var14[var9];
        var9 = var6.bind(var3)(var9);
        var9 = var9.getVoicePanelPIPBorderRadius;
        var7.getVoicePanelPIPBorderRadius = var9;
        var7.pipState = var8;
        var1.__closure = var7;
        var7 = 450590017248.0;
        var1.__workletHash = var7;
        var7 = _closure1_slot15;
        var1.__initData = var7;
        var16 = var2.bind(var4)(var1);
        var4 = _closure1_slot4;
        var2 = var4.useMemo;
        var1 = new Array(1);
        var1[0] = var5;
        var0 = function() { // Environment: var0
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var4 = 14;
            var1 = var12[var4];
            var10 = undefined;
            var1 = var11.bind(var10)(var1);
            var3 = var1.Gesture;
            var2 = var3.Exclusive;
            var1 = var12[var4];
            var1 = var11.bind(var10)(var1);
            var5 = var1.Gesture;
            var1 = var5.Tap;
            var7 = var1.bind(var5)();
            var5 = var7.maxDistance;
            var1 = 30;
            var7 = var5.bind(var7)(var1);
            var5 = var7.onEnd;
            var1 = function arg0, arg1() {
                _fun111815: for (var _fun111815_ip = 0;;) switch (_fun111815_ip) {
                    case 0:
                        var0 = arg1;
                        if (!var0) {
                            _fun111815_ip = 55;
                            continue _fun111815
                        }
                    case 6:
                        var1 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var0 = 5;
                        var0 = var2[var0];
                        var2 = undefined;
                        var3 = var1.bind(var2)(var0);
                        var1 = var3.runOnJS;
                        var0 = _closure2_slot2;
                        var1 = var1.bind(var3)(var0);
                        var0 = false;
                        var0 = var1.bind(var2)(var0);
                    case 55:
                        var0 = undefined;
                        return var0;
                }
            };
            var13 = {};
            var9 = 5;
            var8 = var12[var9];
            var8 = var11.bind(var10)(var8);
            var8 = var8.runOnJS;
            var13.runOnJS = var8;
            var8 = _closure2_slot2;
            var13.handlePushToTalk = var8;
            var1.__closure = var13;
            var13 = 13736796804739.0;
            var1.__workletHash = var13;
            var13 = _closure1_slot16;
            var1.__initData = var13;
            var1 = var5.bind(var7)(var1);
            var4 = var12[var4];
            var4 = var11.bind(var10)(var4);
            var5 = var4.Gesture;
            var4 = var5.Pan;
            var7 = var4.bind(var5)();
            var5 = var7.maxPointers;
            var4 = 1;
            var7 = var5.bind(var7)(var4);
            var5 = var7.shouldCancelWhenOutside;
            var4 = false;
            var7 = var5.bind(var7)(var4);
            var5 = var7.onBegin;
            var4 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.runOnJS;
                var1 = _closure2_slot2;
                var2 = var2.bind(var3)(var1);
                var1 = true;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var13 = {};
            var14 = var12[var9];
            var14 = var11.bind(var10)(var14);
            var14 = var14.runOnJS;
            var13.runOnJS = var14;
            var13.handlePushToTalk = var8;
            var4.__closure = var13;
            var13 = 246779667986.0;
            var4.__workletHash = var13;
            var13 = _closure1_slot18;
            var4.__initData = var13;
            var5 = var5.bind(var7)(var4);
            var4 = var5.onFinalize;
            var0 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 5;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.runOnJS;
                var1 = _closure2_slot2;
                var2 = var2.bind(var3)(var1);
                var1 = false;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var7 = {};
            var9 = var12[var9];
            var9 = var11.bind(var10)(var9);
            var9 = var9.runOnJS;
            var7.runOnJS = var9;
            var7.handlePushToTalk = var8;
            var0.__closure = var7;
            var7 = 12223608557562.0;
            var0.__workletHash = var7;
            var6 = _closure1_slot17;
            var0.__initData = var6;
            var0 = var4.bind(var5)(var0);
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var8 = var2.bind(var4)(var0, var1);
        var2 = _closure1_slot8;
        var1 = _closure1_slot7;
        var0 = {};
        var7 = _closure1_slot6;
        var9 = _closure1_slot9;
        var4 = {};
        var5 = 'none';
        var4.pointerEvents = var5;
        var17 = var11.overlay;
        var5 = new Array(2);
        var5[0] = var17;
        var5[1] = var16;
        var4.style = var5;
        var5 = var7.bind(var3)(var9, var4);
        var4 = new Array(2);
        var4[0] = var5;
        var5 = 14;
        var5 = var14[var5];
        var5 = var6.bind(var3)(var5);
        var6 = var5.GestureDetector;
        var5 = {};
        var5.gesture = var8;
        var8 = {};
        var16 = var11.iconContainer;
        var11 = new Array(2);
        var11[0] = var16;
        var11[1] = var15;
        var8.style = var11;
        var11 = _closure1_slot11;
        var8.hitSlop = var11;
        var11 = _closure1_slot10;
        var10 = {};
        var10.style = var12;
        var12 = 7;
        var12 = var14[var12];
        var12 = var13.bind(var3)(var12);
        var12 = var12.Sizes;
        var12 = var12.SMALL_20;
        var10.size = var12;
        var12 = 15;
        var12 = var14[var12];
        var12 = var13.bind(var3)(var12);
        var10.source = var12;
        var12 = true;
        var10.disableColor = var12;
        var10 = var7.bind(var3)(var11, var10);
        var8.children = var10;
        var8 = var7.bind(var3)(var9, var8);
        var5.children = var8;
        var5 = var7.bind(var3)(var6, var5);
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 31, 27, 11773, 33, 3681, 6421, 4047, 1297, 671, 8584, 14218, 4042, 14213, 4926, 14331, 2]);