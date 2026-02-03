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
    var3 = 0;
    var7 = var5[var3];
    var6 = metroImportDefault;
    var0 = undefined;
    var6 = var6.bind(var0)(var7);
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Platform;
    var6 = var3.TouchableNativeFeedback;
    var _closure1_slot3 = var6;
    var6 = var3.TouchableOpacity;
    var3 = var3.View;
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot5 = var3;
    var1 = function arg0() {
        _fun68598: for (var _fun68598_ip = 0;;) switch (_fun68598_ip) {
            case 0:
                var2 = arg0;
                var6 = var2.children;
                var5 = var2.onPress;
                var1 = var2.disabled;
                var _closure2_slot0 = var1;
                var11 = var2.accessibilityLabel;
                var12 = var2.accessibilityHint;
                var8 = var2.testID;
                var4 = var2.rippleRadius;
                var13 = 18;
                var3 = undefined;
                if (!(var3 !== var4)) {
                    _fun68598_ip = 59;
                    continue _fun68598
                }
            case 56:
                var13 = var4;
            case 59:
                var _closure2_slot1 = var13;
                var7 = var2.style;
                var9 = var2.theme;
                var _closure2_slot2 = var9;
                var10 = _closure1_slot0;
                var14 = _closure1_slot1;
                var2 = 3;
                var2 = var14[var2];
                var14 = var10.bind(var3)(var2);
                var10 = var14.useKeyboardState;
                var2 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.appearance;
                    return var0;
                };
                var14 = var10.bind(var14)(var2);
                var _closure2_slot3 = var14;
                var2 = _closure1_slot2;
                var10 = new Array(1);
                var10[0] = var1;
                var1 = function() { // Environment: var0
                    var0 = {};
                    var1 = _closure2_slot0;
                    var0.disabled = var1;
                    return var0;
                };
                var10 = var2.bind(var3)(var1, var10);
                var1 = new Array(3);
                var1[0] = var14;
                var1[1] = var13;
                var1[2] = var9;
                var0 = function() { // Environment: var0
                    var4 = _closure1_slot3;
                    var3 = var4.Ripple;
                    var2 = _closure2_slot2;
                    var1 = _closure2_slot3;
                    var1 = var2[var1];
                    var2 = var1.ripple;
                    var1 = _closure2_slot1;
                    var0 = true;
                    var0 = var3.bind(var4)(var2, var0, var1);
                    return var0;
                };
                var9 = var2.bind(var3)(var0, var1);
                var2 = _closure1_slot5;
                var1 = _closure1_slot3;
                var0 = {};
                var0.accessibilityHint = var12;
                var0.accessibilityLabel = var11;
                var11 = 'button';
                var0.accessibilityRole = var11;
                var0.accessibilityState = var10;
                var0.background = var9;
                var0.style = var7;
                var0.testID = var8;
                var0.onPress = var5;
                var5 = _closure1_slot4;
                var4 = {};
                var4.style = var7;
                var4.children = var6;
                var4 = var2.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 8529]);