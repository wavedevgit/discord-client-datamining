// modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx
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
    var3 = var3.Keyboard;
    var _closure1_slot4 = var3;
    var3 = {};
    var6 = "function useSafeAreaBottomKeyboardInfoControllerTsx1(e){const{runOnJS,KeyboardStateDebugging,keyboardOpenedHeight,keyboardOpenOrOpening}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onStart',e.height);if(e.height!==0){keyboardOpenedHeight.set(e.height);}keyboardOpenOrOpening.set(e.height!==0);}";
    var3.code = var6;
    var _closure1_slot5 = var3;
    var3 = {};
    var6 = "function useSafeAreaBottomKeyboardInfoControllerTsx2(e){const{runOnJS,KeyboardStateDebugging,keyboardOpenOrOpening}=this.__closure;runOnJS(KeyboardStateDebugging.keyboardControllerWorkletEvent)('onEnd',e.height);keyboardOpenOrOpening.set(e.height!==0);}";
    var3.code = var6;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/main_tabs_v2/native/channel/useSafeAreaBottomKeyboardInfoController.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun76840: for (var _fun76840_ip = 0;;) switch (_fun76840_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var3 = 2;
                var1 = var1[var3];
                var12 = undefined;
                var1 = var2.bind(var12)(var1);
                var2 = var1.KeyboardController;
                var1 = var2.state;
                var4 = var1.bind(var2)();
                var2 = null;
                var5 = var2 == var4;
                var1 = undefined;
                if (var5) {
                    _fun76840_ip = 58;
                    continue _fun76840
                }
            case 53:
                var1 = var4.height;
            case 58:
                var4 = var2 != var1;
                var6 = 0;
                var2 = 0;
                if (!var4) {
                    _fun76840_ip = 72;
                    continue _fun76840
                }
            case 69:
                var2 = var1;
            case 72:
                var15 = _closure1_slot0;
                var13 = _closure1_slot2;
                var14 = 3;
                var1 = var13[var14];
                var4 = var15.bind(var12)(var1);
                var1 = var4.useSharedValue;
                var1 = var1.bind(var4)(var2);
                var _closure2_slot0 = var1;
                var4 = var13[var14];
                var5 = var15.bind(var12)(var4);
                var4 = var5.useSharedValue;
                var2 = var6 !== var2;
                var2 = var4.bind(var5)(var2);
                var _closure2_slot1 = var2;
                var5 = _closure1_slot3;
                var7 = var5.useEffect;
                var6 = new Array(2);
                var6[0] = var2;
                var6[1] = var1;
                var4 = function() { // Environment: var0
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 2;
                    var5 = var4[var1];
                    var2 = undefined;
                    var5 = var3.bind(var2)(var5);
                    var8 = var5.KeyboardEvents;
                    var7 = var8.addListener;
                    var6 = 'keyboardWillShow';
                    var5 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 4;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.keyboardControllerKeyboardWillShow;
                        var2 = var1.height;
                        var2 = var3.bind(var4)(var2);
                        var5 = _closure2_slot1;
                        var4 = var5.set;
                        var3 = true;
                        var3 = var4.bind(var5)(var3);
                        var3 = _closure2_slot0;
                        var2 = var3.set;
                        var1 = var1.height;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var5 = var7.bind(var8)(var6, var5);
                    var _closure3_slot0 = var5;
                    var5 = var4[var1];
                    var5 = var3.bind(var2)(var5);
                    var8 = var5.KeyboardEvents;
                    var7 = var8.addListener;
                    var6 = 'keyboardDidShow';
                    var5 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var0 = 4;
                        var2 = var2[var0];
                        var0 = undefined;
                        var4 = var3.bind(var0)(var2);
                        var3 = var4.keyboardControllerKeyboardDidShow;
                        var2 = var1.height;
                        var2 = var3.bind(var4)(var2);
                        var5 = _closure2_slot1;
                        var4 = var5.set;
                        var3 = true;
                        var3 = var4.bind(var5)(var3);
                        var3 = _closure2_slot0;
                        var2 = var3.set;
                        var1 = var1.height;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var5 = var7.bind(var8)(var6, var5);
                    var _closure3_slot1 = var5;
                    var5 = var4[var1];
                    var5 = var3.bind(var2)(var5);
                    var8 = var5.KeyboardEvents;
                    var7 = var8.addListener;
                    var6 = 'keyboardWillHide';
                    var5 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.keyboardControllerKeyboardWillHide;
                        var1 = var1.bind(var2)();
                        var3 = _closure2_slot1;
                        var2 = var3.set;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var5 = var7.bind(var8)(var6, var5);
                    var _closure3_slot2 = var5;
                    var1 = var4[var1];
                    var1 = var3.bind(var2)(var1);
                    var4 = var1.KeyboardEvents;
                    var3 = var4.addListener;
                    var2 = 'keyboardDidHide';
                    var1 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.keyboardControllerKeyboardDidHide;
                        var1 = var1.bind(var2)();
                        var3 = _closure2_slot1;
                        var2 = var3.set;
                        var1 = false;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot3 = var1;
                    var0 = function() { // Environment: var0
                        var2 = _closure3_slot0;
                        var1 = var2.remove;
                        var1 = var1.bind(var2)();
                        var2 = _closure3_slot1;
                        var1 = var2.remove;
                        var1 = var1.bind(var2)();
                        var2 = _closure3_slot2;
                        var1 = var2.remove;
                        var1 = var1.bind(var2)();
                        var1 = _closure3_slot3;
                        var0 = var1.remove;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    return var0;
                };
                var4 = var7.bind(var5)(var4, var6);
                var3 = var13[var3];
                var7 = var15.bind(var12)(var3);
                var6 = var7.useKeyboardHandler;
                var4 = {};
                var3 = function arg0() {
                    _fun76847: for (var _fun76847_ip = 0;;) switch (_fun76847_ip) {
                        case 0:
                            var1 = arg0;
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot2;
                            var0 = 3;
                            var3 = var6[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var3);
                            var3 = var4.runOnJS;
                            var5 = _closure1_slot1;
                            var2 = 4;
                            var2 = var6[var2];
                            var2 = var5.bind(var0)(var2);
                            var2 = var2.keyboardControllerWorkletEvent;
                            var4 = var3.bind(var4)(var2);
                            var3 = var1.height;
                            var2 = 'onStart';
                            var2 = var4.bind(var0)(var2, var3);
                            var2 = var1.height;
                            var4 = 0;
                            if (!(var4 !== var2)) {
                                _fun76847_ip = 108;
                                continue _fun76847
                            }
                        case 86:
                            var5 = _closure2_slot0;
                            var3 = var5.set;
                            var2 = var1.height;
                            var2 = var3.bind(var5)(var2);
                        case 108:
                            var3 = _closure2_slot1;
                            var2 = var3.set;
                            var1 = var1.height;
                            var1 = var4 !== var1;
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var9 = {};
                var10 = var13[var14];
                var10 = var15.bind(var12)(var10);
                var10 = var10.runOnJS;
                var9.runOnJS = var10;
                var11 = _closure1_slot1;
                var10 = 4;
                var16 = var13[var10];
                var16 = var11.bind(var12)(var16);
                var9.KeyboardStateDebugging = var16;
                var9.keyboardOpenedHeight = var1;
                var9.keyboardOpenOrOpening = var2;
                var3.__closure = var9;
                var9 = 1979487876093.0;
                var3.__workletHash = var9;
                var9 = _closure1_slot5;
                var3.__initData = var9;
                var4.onStart = var3;
                var3 = function arg0() {
                    var1 = arg0;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var0 = 3;
                    var3 = var6[var0];
                    var0 = undefined;
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.runOnJS;
                    var5 = _closure1_slot1;
                    var2 = 4;
                    var2 = var6[var2];
                    var2 = var5.bind(var0)(var2);
                    var2 = var2.keyboardControllerWorkletEvent;
                    var4 = var3.bind(var4)(var2);
                    var3 = var1.height;
                    var2 = 'onEnd';
                    var2 = var4.bind(var0)(var2, var3);
                    var3 = _closure2_slot1;
                    var2 = var3.set;
                    var4 = var1.height;
                    var1 = 0;
                    var1 = var1 !== var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var9 = {};
                var14 = var13[var14];
                var14 = var15.bind(var12)(var14);
                var14 = var14.runOnJS;
                var9.runOnJS = var14;
                var10 = var13[var10];
                var10 = var11.bind(var12)(var10);
                var9.KeyboardStateDebugging = var10;
                var9.keyboardOpenOrOpening = var2;
                var3.__closure = var9;
                var9 = 14994447043346.0;
                var3.__workletHash = var9;
                var8 = _closure1_slot6;
                var3.__initData = var8;
                var4.onEnd = var3;
                var3 = new Array(0);
                var3 = var6.bind(var7)(var4, var3);
                var6 = var5.useEffect;
                var4 = new Array(2);
                var4[0] = var2;
                var4[1] = var1;
                var3 = function() { // Environment: var0
                    var1 = global;
                    var4 = var1.setInterval;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        _fun76850: for (var _fun76850_ip = 0;;) switch (_fun76850_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 2;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var3.bind(var0)(var1);
                                var3 = var1.KeyboardController;
                                var1 = var3.state;
                                var3 = var1.bind(var3)();
                                var1 = null;
                                var5 = var1 == var3;
                                var4 = undefined;
                                if (var5) {
                                    _fun76850_ip = 56;
                                    continue _fun76850
                                }
                            case 51:
                                var4 = var3.height;
                            case 56:
                                var5 = var1 != var4;
                                var3 = 0;
                                var1 = 0;
                                if (!var5) {
                                    _fun76850_ip = 70;
                                    continue _fun76850
                                }
                            case 67:
                                var1 = var4;
                            case 70:
                                var6 = var3 !== var1;
                                var4 = _closure2_slot1;
                                var3 = var4.get;
                                var3 = var3.bind(var4)();
                                if (!(var6 !== var3)) {
                                    _fun76850_ip = 139;
                                    continue _fun76850
                                }
                            case 94:
                                var4 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var3 = 4;
                                var3 = var5[var3];
                                var5 = var4.bind(var0)(var3);
                                var4 = var5.keyboardControllerPeriodicHealthCheck;
                                var7 = _closure2_slot1;
                                var3 = var7.get;
                                var3 = var3.bind(var7)();
                                var3 = var4.bind(var5)(var6, var3);
                            case 139:
                                var4 = _closure1_slot4;
                                var3 = var4.isVisible;
                                var4 = var3.bind(var4)();
                                var5 = _closure2_slot1;
                                var3 = var5.get;
                                var3 = var3.bind(var5)();
                                if (!(var4 !== var3)) {
                                    _fun76850_ip = 215;
                                    continue _fun76850
                                }
                            case 170:
                                var3 = _closure1_slot1;
                                var5 = _closure1_slot2;
                                var2 = 4;
                                var2 = var5[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.reactNativePeriodicHealthCheck;
                                var5 = _closure2_slot1;
                                var1 = var5.get;
                                var1 = var1.bind(var5)();
                                var1 = var2.bind(var3)(var4, var1);
                            case 215:
                                return var0;
                        }
                    };
                    var1 = 5000;
                    var1 = var4.bind(var3)(var2, var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var0 = global;
                        var2 = var0.clearInterval;
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        return var0;
                    };
                    return var0;
                };
                var3 = var6.bind(var5)(var3, var4);
                var4 = var5.useEffect;
                var3 = function() { // Environment: var0
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var5 = var4.bind(var2)(var3);
                    var4 = var5.keyboardControllerMountEvent;
                    var3 = 'mount';
                    var2 = 'chatInputHook';
                    var2 = var4.bind(var5)(var3, var2);
                    var4 = _closure1_slot4;
                    var3 = var4.addListener;
                    var2 = 'keyboardDidShow';
                    var1 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.reactNativeKeyboardDidShow;
                        var1 = arg0;
                        var1 = var1.endCoordinates;
                        var2 = var1.height;
                        var1 = 'chatInputHook';
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var1 = var3.bind(var4)(var2, var1);
                    var _closure3_slot0 = var1;
                    var3 = var4.addListener;
                    var2 = 'keyboardDidHide';
                    var1 = function() { // Environment: var0
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.reactNativeKeyboardDidHide;
                        var1 = 'chatInputHook';
                        var1 = var2.bind(var3)(var1);
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
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 4;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.keyboardControllerMountEvent;
                        var2 = 'unmount';
                        var1 = 'chatInputHook';
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    return var0;
                };
                var0 = new Array(0);
                var0 = var4.bind(var5)(var3, var0);
                var0 = {};
                var0.keyboardOpenOrOpening = var2;
                var0.keyboardOpenedHeight = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 8510, 3711, 1581, 2]);