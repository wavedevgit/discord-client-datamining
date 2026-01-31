// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun68293: for (var _fun68293_ip = 0;;) switch (_fun68293_ip) {
        case 0:
            var12 = require;
            var2 = exports;
            var11 = dependencyMap;
            var _closure1_slot0 = var12;
            var _closure1_slot1 = var11;
            var3 = function arg0, arg1() {
                var0 = arg0;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.useKeyboardContext;
                var3 = var3.bind(var4)();
                var _closure2_slot1 = var3;
                var3 = _closure1_slot3;
                var2 = function() { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = var3.setKeyboardHandlers;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    return var0;
                };
                var1 = arg1;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var _closure1_slot5 = var3;
            var0 = global;
            var6 = var0.Object;
            var5 = var6.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var2, var0, var4);
            var0 = 0;
            var4 = var11[var0];
            var0 = undefined;
            var4 = var12.bind(var0)(var4);
            var5 = var4.useEffect;
            var _closure1_slot2 = var5;
            var4 = var4.useLayoutEffect;
            var _closure1_slot3 = var4;
            var4 = function() {
                var3 = _closure1_slot2;
                var0 = undefined;
                var2 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 1;
                    var0 = var5[var0];
                    var3 = undefined;
                    var0 = var4.bind(var3)(var0);
                    var2 = var0.KeyboardController;
                    var1 = var2.setInputMode;
                    var0 = 2;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.AndroidSoftInputModes;
                    var0 = var0.SOFT_INPUT_ADJUST_RESIZE;
                    var0 = var1.bind(var2)(var0);
                    var0 = function() { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 1;
                        var1 = var1[var0];
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                        var1 = var0.KeyboardController;
                        var0 = var1.setDefaultMode;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    return var0;
                };
                var1 = new Array(0);
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var _closure1_slot4 = var4;
            var6 = 4;
            var5 = var11[var6];
            var9 = var12.bind(var0)(var5);
            for (var5 in var9)
                case 125: {
                    case 134: var14 = var5;
                    var13 = var11[var6];
                    var13 = var12.bind(var0)(var13);
                    var13 = var13[var14];
                    var2[var14] = var13;
                    _fun68293_ip = 125;
                    continue _fun68293;
                }
        case 156:
            var2.useResizeMode = var4;
            var4 = function() {
                var1 = _closure1_slot4;
                var2 = undefined;
                var1 = var1.bind(var2)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.useKeyboardContext;
                var0 = var0.bind(var1)();
                var0 = var0.animated;
                return var0;
            };
            var2.useKeyboardAnimation = var4;
            var4 = function() {
                var1 = _closure1_slot4;
                var2 = undefined;
                var1 = var1.bind(var2)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.useKeyboardContext;
                var0 = var0.bind(var1)();
                var0 = var0.reanimated;
                return var0;
            };
            var2.useReanimatedKeyboardAnimation = var4;
            var2.useGenericKeyboardHandler = var3;
            var3 = function arg0, arg1() {
                var2 = _closure1_slot4;
                var0 = undefined;
                var2 = var2.bind(var0)();
                var3 = _closure1_slot5;
                var2 = arg0;
                var1 = arg1;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.useKeyboardHandler = var3;
            var3 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.useKeyboardContext;
                var1 = var0.bind(var1)();
                var0 = {};
                var2 = var1.setEnabled;
                var0.setEnabled = var2;
                var1 = var1.enabled;
                var0.enabled = var1;
                return var0;
            };
            var2.useKeyboardController = var3;
            var3 = function() {
                var0 = {};
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.useKeyboardContext;
                var1 = var1.bind(var2)();
                var1 = var1.layout;
                var0.input = var1;
                return var0;
            };
            var2.useReanimatedFocusedInput = var3;
            var1 = function arg0, arg1() {
                var0 = arg0;
                var _closure2_slot0 = var0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var3 = var3[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var3);
                var3 = var4.useKeyboardContext;
                var3 = var3.bind(var4)();
                var _closure2_slot1 = var3;
                var3 = _closure1_slot3;
                var2 = function() { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = var3.setInputHandlers;
                    var1 = _closure2_slot0;
                    var1 = var2.bind(var3)(var1);
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                    };
                    return var0;
                };
                var1 = arg1;
                var1 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var2.useFocusedInputHandler = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 8491, 8492, 8489, 8493]);