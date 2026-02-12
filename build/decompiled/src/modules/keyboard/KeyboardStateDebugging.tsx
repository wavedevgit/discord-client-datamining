// modules/keyboard/KeyboardStateDebugging.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var8 = var1.DeviceEventEmitter;
    var1 = 1;
    var6 = var5[var1];
    var1 = metroImportDefault;
    var1 = var1.bind(var0)(var6);
    var6 = var1.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var1
        }
    });
    var7 = 'KeyboardStateDebugging';
    var12 = var6;
    var11 = var7;
    var1 = new var12[var1](var11, var10);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot2 = var1;
    var6 = var8.addListener;
    var1 = function(arg0) { // Environment: var3
        var3 = _closure1_slot2;
        var2 = var3.info;
        var1 = {};
        var0 = arg0;
        var1.event = var0;
        var0 = 'Library event.';
        var0 = var2.bind(var3)(var0, var1);
        var0 = undefined;
        return var0;
    };
    var1 = var6.bind(var8)(var7, var1);
    var1 = {};
    var6 = function arg0() {
        _fun17611: for (var _fun17611_ip = 0;;) switch (_fun17611_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun17611_ip = 70;
                    continue _fun17611
                }
            case 38:
                var4 = _closure1_slot2;
                var3 = var4.info;
                var2 = {};
                var1 = arg0;
                var2.layoutHeight = var1;
                var1 = 'ChannelSafeAreaBottom layout height changed.';
                var1 = var3.bind(var4)(var1, var2);
            case 70:
                return var0;
        }
    };
    var1.channelSafeAreaBottomLayoutHeightChanged = var6;
    var6 = function arg0, arg1() {
        _fun17612: for (var _fun17612_ip = 0;;) switch (_fun17612_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun17612_ip = 77;
                    continue _fun17612
                }
            case 38:
                var4 = _closure1_slot2;
                var3 = var4.warn;
                var2 = {};
                var1 = arg0;
                var2.layoutHeight = var1;
                var1 = arg1;
                var2.reportedKeyboardHeight = var1;
                var1 = 'ChannelSafeAreaBottom layout height mismatch.';
                var1 = var3.bind(var4)(var1, var2);
            case 77:
                return var0;
        }
    };
    var1.channelSafeAreaBottomLayoutHeightMismatch = var6;
    var6 = function arg0() {
        _fun17613: for (var _fun17613_ip = 0;;) switch (_fun17613_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun17613_ip = 69;
                    continue _fun17613
                }
            case 38:
                var4 = _closure1_slot2;
                var3 = var4.info;
                var2 = {};
                var1 = arg0;
                var2.height = var1;
                var1 = 'KeyboardController keyboardWillShow.';
                var1 = var3.bind(var4)(var1, var2);
            case 69:
                return var0;
        }
    };
    var1.keyboardControllerKeyboardWillShow = var6;
    var6 = function arg0() {
        _fun17614: for (var _fun17614_ip = 0;;) switch (_fun17614_ip) {
            case 0:
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun17614_ip = 11;
                    continue _fun17614
                }
            case 9:
                var1 = false;
            case 11:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 2;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.isIOS;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun17614_ip = 83;
                    continue _fun17614
                }
            case 47:
                var4 = _closure1_slot2;
                var3 = var4.info;
                var2 = {};
                var5 = arg0;
                var2.height = var5;
                var2.rootProvider = var1;
                var1 = 'KeyboardController keyboardDidShow.';
                var1 = var3.bind(var4)(var1, var2);
            case 83:
                return var0;
        }
    };
    var1.keyboardControllerKeyboardDidShow = var6;
    var6 = function arg0, arg1() {
        _fun17615: for (var _fun17615_ip = 0;;) switch (_fun17615_ip) {
            case 0:
                var5 = arguments[2];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun17615_ip = 11;
                    continue _fun17615
                }
            case 9:
                var5 = false;
            case 11:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 2;
                var2 = var4[var2];
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun17615_ip = 109;
                    continue _fun17615
                }
            case 47:
                var4 = _closure1_slot2;
                var3 = var4.info;
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var6 = 'KeyboardController worklet ';
                var2 = arg0;
                var1 = '.';
                var2 = var7.bind(var6)(var2, var1);
                var1 = {};
                var6 = arg1;
                var1.height = var6;
                var1.rootProvider = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 109:
                return var0;
        }
    };
    var1.keyboardControllerWorkletEvent = var6;
    var6 = function() {
        _fun17616: for (var _fun17616_ip = 0;;) switch (_fun17616_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun17616_ip = 59;
                    continue _fun17616
                }
            case 38:
                var3 = _closure1_slot2;
                var2 = var3.info;
                var1 = 'KeyboardController keyboardWillHide.';
                var1 = var2.bind(var3)(var1);
            case 59:
                return var0;
        }
    };
    var1.keyboardControllerKeyboardWillHide = var6;
    var6 = function() {
        _fun17617: for (var _fun17617_ip = 0;;) switch (_fun17617_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun17617_ip = 11;
                    continue _fun17617
                }
            case 9:
                var1 = false;
            case 11:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var3 = 2;
                var3 = var5[var3];
                var4 = var4.bind(var0)(var3);
                var3 = var4.isIOS;
                var3 = var3.bind(var4)();
                if (var3) {
                    _fun17617_ip = 76;
                    continue _fun17617
                }
            case 47:
                var4 = _closure1_slot2;
                var3 = var4.info;
                var2 = {};
                var2.rootProvider = var1;
                var1 = 'KeyboardController keyboardDidHide.';
                var1 = var3.bind(var4)(var1, var2);
            case 76:
                return var0;
        }
    };
    var1.keyboardControllerKeyboardDidHide = var6;
    var6 = function arg0, arg1() {
        _fun17618: for (var _fun17618_ip = 0;;) switch (_fun17618_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun17618_ip = 92;
                    continue _fun17618
                }
            case 38:
                var3 = _closure1_slot2;
                var2 = var3.info;
                var1 = global;
                var1 = var1.HermesInternal;
                var8 = var1.concat;
                var13 = 'KeyboardController mount event: ';
                var12 = arg0;
                var11 = ' from ';
                var10 = arg1;
                var9 = '.';
                var1 = var13[var8](var12, var11, var10, var9, var8);
                var1 = var2.bind(var3)(var1);
            case 92:
                return var0;
        }
    };
    var1.keyboardControllerMountEvent = var6;
    var6 = function arg0, arg1() {
        _fun17619: for (var _fun17619_ip = 0;;) switch (_fun17619_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun17619_ip = 77;
                    continue _fun17619
                }
            case 38:
                var4 = _closure1_slot2;
                var3 = var4.warn;
                var2 = {};
                var1 = arg0;
                var2.keyboardOpen = var1;
                var1 = arg1;
                var2.reportedKeyboardOpen = var1;
                var1 = 'KeyboardController state mismatch: ';
                var1 = var3.bind(var4)(var1, var2);
            case 77:
                return var0;
        }
    };
    var1.keyboardControllerPeriodicHealthCheck = var6;
    var6 = function arg0, arg1() {
        _fun17620: for (var _fun17620_ip = 0;;) switch (_fun17620_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun17620_ip = 76;
                    continue _fun17620
                }
            case 38:
                var4 = _closure1_slot2;
                var3 = var4.info;
                var2 = {};
                var1 = arg0;
                var2.height = var1;
                var1 = arg1;
                var2.location = var1;
                var1 = 'ReactNativeKeyboard didShow.';
                var1 = var3.bind(var4)(var1, var2);
            case 76:
                return var0;
        }
    };
    var1.reactNativeKeyboardDidShow = var6;
    var6 = function arg0() {
        _fun17621: for (var _fun17621_ip = 0;;) switch (_fun17621_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun17621_ip = 69;
                    continue _fun17621
                }
            case 38:
                var4 = _closure1_slot2;
                var3 = var4.info;
                var2 = {};
                var1 = arg0;
                var2.location = var1;
                var1 = 'ReactNativeKeyboard didHide.';
                var1 = var3.bind(var4)(var1, var2);
            case 69:
                return var0;
        }
    };
    var1.reactNativeKeyboardDidHide = var6;
    var6 = function arg0, arg1() {
        _fun17622: for (var _fun17622_ip = 0;;) switch (_fun17622_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun17622_ip = 77;
                    continue _fun17622
                }
            case 38:
                var4 = _closure1_slot2;
                var3 = var4.warn;
                var2 = {};
                var1 = arg0;
                var2.keyboardOpen = var1;
                var1 = arg1;
                var2.reportedKeyboardOpen = var1;
                var1 = 'ReactNative state mismatch: ';
                var1 = var3.bind(var4)(var1, var2);
            case 77:
                return var0;
        }
    };
    var1.reactNativePeriodicHealthCheck = var6;
    var3 = function() {
        _fun17623: for (var _fun17623_ip = 0;;) switch (_fun17623_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 2;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isIOS;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun17623_ip = 58;
                    continue _fun17623
                }
            case 38:
                var3 = _closure1_slot2;
                var2 = var3.warn;
                var1 = 'Marking potential bad state from user, check logs above.';
                var1 = var2.bind(var3)(var1);
            case 58:
                return var0;
        }
    };
    var1.markPotentialBadState = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/keyboard/KeyboardStateDebugging.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3, 479, 2]);