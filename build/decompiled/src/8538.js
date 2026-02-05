// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun68447: for (var _fun68447_ip = 0;;) switch (_fun68447_ip) {
        case 0:
            var4 = require;
            var2 = exports;
            var5 = dependencyMap;
            var8 = global;
            var7 = var8.Object;
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
            var6 = var3.NativeEventEmitter;
            var3 = var3.Platform;
            var7 = 1;
            var9 = var5[var7];
            var9 = var4.bind(var0)(var9);
            var9 = var9.default;
            if (var9) {
                _fun68447_ip = 134;
                continue _fun68447
            }
        case 88:
            var11 = var8.Proxy;
            var10 = {};
            var8 = function() {
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = "The package 'react-native-keyboard-controller' doesn't seem to be linked. Make sure: \n\n- You rebuilt the app after installing the package\n- You are not using Expo Go\n";
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            };
            var10.get = var8;
            var8 = var11.prototype;
            var9 = Object.create(var8, {
                constructor: {
                    value: var11
                }
            });
            var14 = {};
            var15 = var9;
            var13 = var10;
            var8 = new var15[var11](var14, var13, var12);
            var9 = var8 instanceof Object ? var8 : var9;
            _fun68447_ip = 148;
            continue _fun68447;
        case 134:
            var7 = var5[var7];
            var7 = var4.bind(var0)(var7);
            var9 = var7.default;
        case 148:
            var7 = 'KeyboardController::';
            var _closure1_slot0 = var7;
            var7 = var6.prototype;
            var7 = Object.create(var7, {
                constructor: {
                    value: var6
                }
            });
            var15 = var7;
            var14 = var9;
            var6 = new var15[var6](var14, var13);
            var6 = var6 instanceof Object ? var6 : var7;
            var _closure1_slot1 = var6;
            var8 = {};
            var6 = function arg0, arg1() {
                var3 = _closure1_slot1;
                var2 = var3.addListener;
                var1 = _closure1_slot0;
                var0 = arg0;
                var1 = var1 + var0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var8.addListener = var6;
            var7 = {};
            var6 = function arg0, arg1() {
                var3 = _closure1_slot1;
                var2 = var3.addListener;
                var1 = _closure1_slot0;
                var0 = arg0;
                var1 = var1 + var0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var7.addListener = var6;
            var6 = {};
            var10 = function arg0, arg1() {
                var3 = _closure1_slot1;
                var2 = var3.addListener;
                var1 = _closure1_slot0;
                var0 = arg0;
                var1 = var1 + var0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var6.addListener = var10;
            var10 = var3.Version;
            var3 = 30;
            if (!(!(var10 >= var3))) {
                _fun68447_ip = 249;
                continue _fun68447
            }
        case 240:
            var3 = function(arg0) { // Environment: var1
                var0 = arg0;
                var0 = var0.children;
                return var0;
            };
            _fun68447_ip = 266;
            continue _fun68447;
        case 249:
            var10 = 2;
            var10 = var5[var10];
            var10 = var4.bind(var0)(var10);
            var3 = var10.default;
        case 266:
            var2.KeyboardControllerNative = var9;
            var2.KeyboardEvents = var8;
            var2.FocusedInputEvents = var7;
            var2.WindowDimensionsEvents = var6;
            var6 = 3;
            var7 = var5[var6];
            var7 = var4.bind(var0)(var7);
            var7 = var7.default;
            var2.KeyboardControllerView = var7;
            var6 = var5[var6];
            var6 = var4.bind(var0)(var6);
            var6 = var6.Commands;
            var2.KeyboardControllerViewCommands = var6;
            var2.KeyboardGestureArea = var3;
            var3 = 4;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.default;
            var2.RCTOverKeyboardView = var3;
            var3 = 5;
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var3 = var3.default;
            var2.KeyboardBackgroundView = var3;
            var1 = function(arg0) { // Environment: var1
                var0 = arg0;
                var0 = var0.children;
                return var0;
            };
            var2.RCTKeyboardExtender = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 8539, 8540, 8541, 8542, 8543]);