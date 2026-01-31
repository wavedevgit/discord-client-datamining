// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun68238: for (var _fun68238_ip = 0;;) switch (_fun68238_ip) {
        case 0:
            var3 = require;
            var2 = exports;
            var4 = dependencyMap;
            var7 = global;
            var8 = var7.Object;
            var6 = var8.defineProperty;
            var5 = {};
            var0 = true;
            var5.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var8)(var2, var0, var5);
            var0 = 0;
            var5 = var4[var0];
            var0 = undefined;
            var6 = var3.bind(var0)(var5);
            var5 = var6.NativeEventEmitter;
            var9 = var6.Platform;
            var6 = 1;
            var8 = var4[var6];
            var8 = var3.bind(var0)(var8);
            var8 = var8.default;
            if (var8) {
                _fun68238_ip = 134;
                continue _fun68238
            }
        case 88:
            var11 = var7.Proxy;
            var10 = {};
            var7 = function() {
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
            var10.get = var7;
            var7 = var11.prototype;
            var8 = Object.create(var7, {
                constructor: {
                    value: var11
                }
            });
            var14 = {};
            var15 = var8;
            var13 = var10;
            var7 = new var15[var11](var14, var13, var12);
            var8 = var7 instanceof Object ? var7 : var8;
            _fun68238_ip = 148;
            continue _fun68238;
        case 134:
            var6 = var4[var6];
            var6 = var3.bind(var0)(var6);
            var8 = var6.default;
        case 148:
            var6 = 'KeyboardController::';
            var _closure1_slot0 = var6;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var15 = var6;
            var14 = var8;
            var5 = new var15[var5](var14, var13);
            var5 = var5 instanceof Object ? var5 : var6;
            var _closure1_slot1 = var5;
            var7 = {};
            var5 = function arg0, arg1() {
                var3 = _closure1_slot1;
                var2 = var3.addListener;
                var1 = _closure1_slot0;
                var0 = arg0;
                var1 = var1 + var0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var7.addListener = var5;
            var6 = {};
            var5 = function arg0, arg1() {
                var3 = _closure1_slot1;
                var2 = var3.addListener;
                var1 = _closure1_slot0;
                var0 = arg0;
                var1 = var1 + var0;
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            };
            var6.addListener = var5;
            var5 = {};
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
            var5.addListener = var10;
            var10 = var9.Version;
            var9 = 30;
            if (!(!(var10 >= var9))) {
                _fun68238_ip = 249;
                continue _fun68238
            }
        case 240:
            var1 = function(arg0) { // Environment: var1
                var0 = arg0;
                var0 = var0.children;
                return var0;
            };
            _fun68238_ip = 266;
            continue _fun68238;
        case 249:
            var9 = 2;
            var9 = var4[var9];
            var9 = var3.bind(var0)(var9);
            var1 = var9.default;
        case 266:
            var2.KeyboardControllerNative = var8;
            var2.KeyboardEvents = var7;
            var2.FocusedInputEvents = var6;
            var2.WindowDimensionsEvents = var5;
            var5 = 3;
            var5 = var4[var5];
            var5 = var3.bind(var0)(var5);
            var5 = var5.default;
            var2.KeyboardControllerView = var5;
            var2.KeyboardGestureArea = var1;
            var1 = 4;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var1 = var1.default;
            var2.RCTOverKeyboardView = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 8478, 8479, 8480, 8481]);