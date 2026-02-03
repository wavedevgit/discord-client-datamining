// modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CHAT_INPUT_TIMING_CONFIG;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = 'function ChatInputActionButtonTransitionItemTsx1(finished){const{state,TransitionStates,runOnJS,cleanup}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanup)();}}';
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = {};
    var6 = "function ChatInputActionButtonTransitionItemTsx2(){const{visible}=this.__closure;return{position:'absolute',opacity:visible.get()};}";
    var3.code = var6;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/chat_input/native/action_buttons/ChatInputActionButtonTransitionItem.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun90427: for (var _fun90427_ip = 0;;) switch (_fun90427_ip) {
            case 0:
                var1 = arg0;
                var10 = var1.state;
                var _closure2_slot0 = var10;
                var0 = var1.cleanup;
                var _closure2_slot1 = var0;
                var4 = var1.children;
                var3 = undefined;
                var _closure2_slot2 = var3;
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = 3;
                var7 = var5[var6];
                var8 = var9.bind(var3)(var7);
                var7 = var8.useSharedValue;
                var11 = 4;
                var5 = var5[var11];
                var5 = var9.bind(var3)(var5);
                var5 = var5.TransitionStates;
                var5 = var5.MOUNTED;
                if (!(var10 !== var5)) {
                    _fun90427_ip = 127;
                    continue _fun90427
                }
            case 92:
                var9 = _closure1_slot0;
                var5 = _closure1_slot2;
                var5 = var5[var11];
                var5 = var9.bind(var3)(var5);
                var5 = var5.TransitionStates;
                var9 = var5.ENTERED;
                var5 = 0;
                if (!(var10 === var9)) {
                    _fun90427_ip = 130;
                    continue _fun90427
                }
            case 127:
                var5 = 1;
            case 130:
                var9 = var7.bind(var8)(var5);
                _closure2_slot2 = var9;
                var8 = _closure1_slot3;
                var7 = var8.useEffect;
                var5 = new Array(3);
                var5[0] = var10;
                var5[1] = var9;
                var5[2] = var0;
                var0 = function() { // Environment: var2
                    _fun90428: for (var _fun90428_ip = 0;;) switch (_fun90428_ip) {
                        case 0:
                            var4 = function arg0() {
                                var9 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var1 = 5;
                                var1 = var10[var1];
                                var8 = undefined;
                                var5 = var9.bind(var8)(var1);
                                var4 = var5.withTiming;
                                var13 = _closure1_slot4;
                                var2 = function arg0() {
                                    _fun90430: for (var _fun90430_ip = 0;;) switch (_fun90430_ip) {
                                        case 0:
                                            var0 = arg0;
                                            if (!var0) {
                                                _fun90430_ip = 54;
                                                continue _fun90430
                                            }
                                        case 6:
                                            var2 = _closure2_slot0;
                                            var4 = _closure1_slot0;
                                            var3 = _closure1_slot2;
                                            var1 = 4;
                                            var3 = var3[var1];
                                            var1 = undefined;
                                            var1 = var4.bind(var1)(var3);
                                            var1 = var1.TransitionStates;
                                            var1 = var1.YEETED;
                                            var0 = var2 === var1;
                                        case 54:
                                            if (!var0) {
                                                _fun90430_ip = 103;
                                                continue _fun90430
                                            }
                                        case 57:
                                            var2 = _closure1_slot0;
                                            var1 = _closure1_slot2;
                                            var0 = 3;
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
                                var1 = {};
                                var7 = _closure2_slot0;
                                var1.state = var7;
                                var7 = 4;
                                var7 = var10[var7];
                                var7 = var9.bind(var8)(var7);
                                var7 = var7.TransitionStates;
                                var1.TransitionStates = var7;
                                var7 = 3;
                                var7 = var10[var7];
                                var7 = var9.bind(var8)(var7);
                                var7 = var7.runOnJS;
                                var1.runOnJS = var7;
                                var6 = _closure2_slot1;
                                var1.cleanup = var6;
                                var2.__closure = var1;
                                var1 = 12906909829034.0;
                                var2.__workletHash = var1;
                                var0 = _closure1_slot6;
                                var2.__initData = var0;
                                var14 = arg0;
                                var12 = 'respect-motion-settings';
                                var15 = var5;
                                var11 = var2;
                                var0 = var15[var4](var14, var13, var12, var11, var10);
                                return var0;
                            };
                            var3 = _closure2_slot0;
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 4;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.TransitionStates;
                            var2 = var2.YEETED;
                            if (!(var3 !== var2)) {
                                _fun90428_ip = 81;
                                continue _fun90428
                            }
                        case 57:
                            var5 = _closure2_slot2;
                            var3 = var5.set;
                            var2 = 1;
                            var2 = var4.bind(var0)(var2);
                            var2 = var3.bind(var5)(var2);
                            _fun90428_ip = 102;
                            continue _fun90428;
                        case 81:
                            var3 = _closure2_slot2;
                            var2 = var3.set;
                            var1 = 0;
                            var1 = var4.bind(var0)(var1);
                            var1 = var2.bind(var3)(var1);
                        case 102:
                            return var0;
                    }
                };
                var0 = var7.bind(var8)(var0, var5);
                var7 = _closure1_slot0;
                var0 = _closure1_slot2;
                var5 = var0[var6];
                var7 = var7.bind(var3)(var5);
                var5 = var7.useAnimatedStyle;
                var2 = function() {
                    var0 = {};
                    var1 = 'absolute';
                    var0.position = var1;
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var0.opacity = var1;
                    return var0;
                };
                var8 = {};
                var8.visible = var9;
                var2.__closure = var8;
                var8 = 3978594527196.0;
                var2.__workletHash = var8;
                var8 = _closure1_slot7;
                var2.__initData = var8;
                var5 = var5.bind(var7)(var2);
                var2 = _closure1_slot5;
                var1 = _closure1_slot1;
                var0 = var0[var6];
                var0 = var1.bind(var3)(var0);
                var1 = var0.View;
                var0 = {};
                var0.style = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 11604, 33, 3720, 4028, 4097, 2]);