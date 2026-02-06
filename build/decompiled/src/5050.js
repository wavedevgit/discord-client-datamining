// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.useEffect;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var4 = var3.Keyboard;
    var _closure1_slot3 = var4;
    var3 = var3.Platform;
    var3 = {};
    var4 = 'function pnpm_useKeyboardTs1(state,height,duration,easing,bottomOffset){const{KEYBOARD_STATE,shouldHandleKeyboardEvents,temporaryCachedKeyboardEvent,keyboardHeight,includeBottomOffset,keyboardAnimationDuration,keyboardAnimationEasing,keyboardState}=this.__closure;if(state===KEYBOARD_STATE.SHOWN&&!shouldHandleKeyboardEvents.value){temporaryCachedKeyboardEvent.value=[state,height,duration,easing];return;}keyboardHeight.value=state===KEYBOARD_STATE.SHOWN?height:keyboardHeight.value;if(bottomOffset&&includeBottomOffset){keyboardHeight.value=keyboardHeight.value+bottomOffset;}keyboardAnimationDuration.value=duration;keyboardAnimationEasing.value=easing;keyboardState.value=state;temporaryCachedKeyboardEvent.value=[];}';
    var3.code = var4;
    var _closure1_slot4 = var3;
    var3 = {};
    var4 = 'function pnpm_useKeyboardTs2(){const{shouldHandleKeyboardEvents}=this.__closure;return shouldHandleKeyboardEvents.value;}';
    var3.code = var4;
    var _closure1_slot5 = var3;
    var3 = {};
    var4 = 'function pnpm_useKeyboardTs3(result){const{temporaryCachedKeyboardEvent,handleKeyboardEvent}=this.__closure;const params=temporaryCachedKeyboardEvent.value;if(result&&params.length>0){handleKeyboardEvent(params[0],params[1],params[2],params[3]);}}';
    var3.code = var4;
    var _closure1_slot6 = var3;
    var1 = function arg0() {
        var0 = arg0;
        var16 = var0.includeBottomOffset;
        var _closure2_slot0 = var16;
        var9 = _closure1_slot0;
        var10 = _closure1_slot1;
        var7 = 2;
        var1 = var10[var7];
        var8 = undefined;
        var3 = var9.bind(var8)(var1);
        var2 = var3.useSharedValue;
        var1 = false;
        var1 = var2.bind(var3)(var1);
        var _closure2_slot1 = var1;
        var2 = var10[var7];
        var4 = var9.bind(var8)(var2);
        var3 = var4.useSharedValue;
        var17 = 3;
        var2 = var10[var17];
        var2 = var9.bind(var8)(var2);
        var2 = var2.KEYBOARD_STATE;
        var2 = var2.UNDETERMINED;
        var5 = var3.bind(var4)(var2);
        var _closure2_slot2 = var5;
        var2 = var10[var7];
        var4 = var9.bind(var8)(var2);
        var3 = var4.useSharedValue;
        var2 = 0;
        var4 = var3.bind(var4)(var2);
        var _closure2_slot3 = var4;
        var2 = var10[var7];
        var11 = var9.bind(var8)(var2);
        var3 = var11.useSharedValue;
        var2 = 'keyboard';
        var3 = var3.bind(var11)(var2);
        var _closure2_slot4 = var3;
        var2 = var10[var7];
        var12 = var9.bind(var8)(var2);
        var11 = var12.useSharedValue;
        var2 = 500;
        var2 = var11.bind(var12)(var2);
        var _closure2_slot5 = var2;
        var11 = var10[var7];
        var13 = var9.bind(var8)(var11);
        var12 = var13.useSharedValue;
        var11 = new Array(0);
        var12 = var12.bind(var13)(var11);
        var _closure2_slot6 = var12;
        var11 = var10[var7];
        var15 = var9.bind(var8)(var11);
        var14 = var15.useWorkletCallback;
        var13 = function arg0, arg1, arg2, arg3, arg4() {
            _fun45419: for (var _fun45419_ip = 0;;) switch (_fun45419_ip) {
                case 0:
                    var3 = arg0;
                    var6 = arg1;
                    var5 = arg2;
                    var4 = arg3;
                    var7 = arg4;
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var10 = 3;
                    var1 = var0[var10];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var1 = var1.KEYBOARD_STATE;
                    var1 = var1.SHOWN;
                    if (!(var3 === var1)) {
                        _fun45419_ip = 106;
                        continue _fun45419
                    }
                case 56:
                    var2 = _closure2_slot1;
                    var2 = var2.value;
                    if (var2) {
                        _fun45419_ip = 106;
                        continue _fun45419
                    }
                case 71:
                    var2 = _closure2_slot6;
                    var1 = new Array(4);
                    var1[0] = var3;
                    var1[1] = var6;
                    var1[2] = var5;
                    var1[3] = var4;
                    var2.value = var1;
                    _fun45419_ip = 237;
                    continue _fun45419;
                case 106:
                    var2 = _closure2_slot3;
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var8 = var8[var10];
                    var8 = var9.bind(var0)(var8);
                    var8 = var8.KEYBOARD_STATE;
                    var8 = var8.SHOWN;
                    if (!(var3 !== var8)) {
                        _fun45419_ip = 155;
                        continue _fun45419
                    }
                case 146:
                    var8 = _closure2_slot3;
                    var6 = var8.value;
                case 155:
                    var2.value = var6;
                    var2 = var7;
                    if (!var2) {
                        _fun45419_ip = 171;
                        continue _fun45419
                    }
                case 167:
                    var2 = _closure2_slot0;
                case 171:
                    if (!var2) {
                        _fun45419_ip = 193;
                        continue _fun45419
                    }
                case 174:
                    var6 = _closure2_slot3;
                    var2 = var6.value;
                    var2 = var2 + var7;
                    var6.value = var2;
                case 193:
                    var2 = _closure2_slot5;
                    var2.value = var5;
                    var2 = _closure2_slot4;
                    var2.value = var4;
                    var2 = _closure2_slot2;
                    var2.value = var3;
                    var2 = _closure2_slot6;
                    var1 = new Array(0);
                    var2.value = var1;
                case 237:
                    return var0;
            }
        };
        var11 = {};
        var17 = var10[var17];
        var17 = var9.bind(var8)(var17);
        var17 = var17.KEYBOARD_STATE;
        var11.KEYBOARD_STATE = var17;
        var11.shouldHandleKeyboardEvents = var1;
        var11.temporaryCachedKeyboardEvent = var12;
        var11.keyboardHeight = var4;
        var11.includeBottomOffset = var16;
        var11.keyboardAnimationDuration = var2;
        var11.keyboardAnimationEasing = var3;
        var11.keyboardState = var5;
        var13.__closure = var11;
        var11 = 7905199978020.0;
        var13.__workletHash = var11;
        var11 = _closure1_slot4;
        var13.__initData = var11;
        var11 = new Array(0);
        var11 = var14.bind(var15)(var13, var11);
        var _closure2_slot7 = var11;
        var15 = _closure1_slot2;
        var14 = new Array(1);
        var14[0] = var11;
        var13 = function() { // Environment: var6
            var4 = _closure1_slot3;
            var3 = var4.addListener;
            var2 = 'keyboardDidShow';
            var1 = function arg0() {
                var1 = arg0;
                var8 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 2;
                var2 = var9[var0];
                var0 = undefined;
                var4 = var8.bind(var0)(var2);
                var3 = var4.runOnUI;
                var2 = _closure2_slot7;
                var6 = var3.bind(var4)(var2);
                var7 = 3;
                var2 = var9[var7];
                var2 = var8.bind(var0)(var2);
                var2 = var2.KEYBOARD_STATE;
                var5 = var2.SHOWN;
                var2 = var1.endCoordinates;
                var13 = var2.height;
                var12 = var1.duration;
                var11 = var1.easing;
                var7 = var9[var7];
                var7 = var8.bind(var0)(var7);
                var8 = var7.SCREEN_HEIGHT;
                var7 = var1.endCoordinates;
                var7 = var7.height;
                var7 = var8 - var7;
                var1 = var1.endCoordinates;
                var1 = var1.screenY;
                var10 = var7 - var1;
                var15 = undefined;
                var14 = var5;
                var1 = var15[var6](var14, var13, var12, var11, var10, var9);
                return var0;
            };
            var1 = var3.bind(var4)(var2, var1);
            var _closure3_slot0 = var1;
            var3 = var4.addListener;
            var2 = 'keyboardDidHide';
            var1 = function arg0() {
                var1 = arg0;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 2;
                var2 = var4[var0];
                var0 = undefined;
                var6 = var3.bind(var0)(var2);
                var5 = var6.runOnUI;
                var2 = _closure2_slot7;
                var5 = var5.bind(var6)(var2);
                var2 = 3;
                var2 = var4[var2];
                var2 = var3.bind(var0)(var2);
                var2 = var2.KEYBOARD_STATE;
                var10 = var2.HIDDEN;
                var2 = var1.endCoordinates;
                var9 = var2.height;
                var8 = var1.duration;
                var7 = var1.easing;
                var11 = undefined;
                var1 = var11[var5](var10, var9, var8, var7, var6);
                return var0;
            };
            var1 = var3.bind(var4)(var2, var1);
            var _closure3_slot1 = var1;
            var0 = function() { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.remove;
                var1 = var1.bind(var2)();
                var1 = _closure3_slot1;
                var0 = var1.remove;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            return var0;
        };
        var13 = var15.bind(var8)(var13, var14);
        var7 = var10[var7];
        var9 = var9.bind(var8)(var7);
        var8 = var9.useAnimatedReaction;
        var7 = function() {
            var0 = _closure2_slot1;
            var0 = var0.value;
            return var0;
        };
        var10 = {};
        var10.shouldHandleKeyboardEvents = var1;
        var7.__closure = var10;
        var10 = 11615500623565.0;
        var7.__workletHash = var10;
        var10 = _closure1_slot5;
        var7.__initData = var10;
        var6 = function arg0() {
            _fun45425: for (var _fun45425_ip = 0;;) switch (_fun45425_ip) {
                case 0:
                    var2 = arg0;
                    var1 = _closure2_slot6;
                    var1 = var1.value;
                    if (!var2) {
                        _fun45425_ip = 29;
                        continue _fun45425
                    }
                case 18:
                    var4 = var1.length;
                    var3 = 0;
                    var2 = var4 > var3;
                case 29:
                    if (!var2) {
                        _fun45425_ip = 69;
                        continue _fun45425
                    }
                case 32:
                    var5 = _closure2_slot7;
                    var0 = 0;
                    var9 = var1[var0];
                    var0 = 1;
                    var8 = var1[var0];
                    var0 = 2;
                    var7 = var1[var0];
                    var0 = 3;
                    var6 = var1[var0];
                    var10 = undefined;
                    var0 = var10[var5](var9, var8, var7, var6, var5);
                case 69:
                    var0 = undefined;
                    return var0;
            }
        };
        var10 = {};
        var10.temporaryCachedKeyboardEvent = var12;
        var10.handleKeyboardEvent = var11;
        var6.__closure = var10;
        var10 = 16636741173520.0;
        var6.__workletHash = var10;
        var0 = _closure1_slot6;
        var6.__initData = var0;
        var0 = new Array(0);
        var0 = var8.bind(var9)(var7, var6, var0);
        var0 = {};
        var0.state = var5;
        var0.height = var4;
        var0.animationEasing = var3;
        var0.animationDuration = var2;
        var0.shouldHandleKeyboardEvents = var1;
        return var0;
    };
    var2.useKeyboard = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 3723, 4937]);