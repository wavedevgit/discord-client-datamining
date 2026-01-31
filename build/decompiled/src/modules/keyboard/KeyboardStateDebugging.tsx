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
        _fun17597: for (var _fun17597_ip = 0;;) switch (_fun17597_ip) {
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
                    _fun17597_ip = 70;
                    continue _fun17597
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
        _fun17598: for (var _fun17598_ip = 0;;) switch (_fun17598_ip) {
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
                    _fun17598_ip = 77;
                    continue _fun17598
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
        _fun17599: for (var _fun17599_ip = 0;;) switch (_fun17599_ip) {
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
                    _fun17599_ip = 69;
                    continue _fun17599
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
        _fun17600: for (var _fun17600_ip = 0;;) switch (_fun17600_ip) {
            case 0:
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun17600_ip = 11;
                    continue _fun17600
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
                    _fun17600_ip = 83;
                    continue _fun17600
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
        _fun17601: for (var _fun17601_ip = 0;;) switch (_fun17601_ip) {
            case 0:
                var5 = arguments[2];
                var0 = undefined;
                if (!(var5 === var0)) {
                    _fun17601_ip = 11;
                    continue _fun17601
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
                    _fun17601_ip = 109;
                    continue _fun17601
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
        _fun17602: for (var _fun17602_ip = 0;;) switch (_fun17602_ip) {
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
                    _fun17602_ip = 59;
                    continue _fun17602
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
        _fun17603: for (var _fun17603_ip = 0;;) switch (_fun17603_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun17603_ip = 11;
                    continue _fun17603
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
                    _fun17603_ip = 76;
                    continue _fun17603
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
        _fun17604: for (var _fun17604_ip = 0;;) switch (_fun17604_ip) {
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
                    _fun17604_ip = 92;
                    continue _fun17604
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
        _fun17605: for (var _fun17605_ip = 0;;) switch (_fun17605_ip) {
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
                    _fun17605_ip = 77;
                    continue _fun17605
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
        _fun17606: for (var _fun17606_ip = 0;;) switch (_fun17606_ip) {
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
                    _fun17606_ip = 76;
                    continue _fun17606
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
        _fun17607: for (var _fun17607_ip = 0;;) switch (_fun17607_ip) {
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
                    _fun17607_ip = 69;
                    continue _fun17607
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
        _fun17608: for (var _fun17608_ip = 0;;) switch (_fun17608_ip) {
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
                    _fun17608_ip = 77;
                    continue _fun17608
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
        _fun17609: for (var _fun17609_ip = 0;;) switch (_fun17609_ip) {
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
                    _fun17609_ip = 58;
                    continue _fun17609
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