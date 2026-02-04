// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = global;
    var8 = var0.Object;
    var5 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var8)(var2, var0, var3);
    var3 = 0;
    var5 = var6[var3];
    var0 = undefined;
    var5 = var7.bind(var0)(var5);
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var5 = var3.useCallback;
    var _closure1_slot3 = var5;
    var3 = var3.useMemo;
    var _closure1_slot4 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var5 = var3.StyleSheet;
    var3 = var3.Text;
    var _closure1_slot5 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var4 = var5.create;
    var3 = {};
    var6 = {
        'fontWeight': '600',
        'fontSize': 15
    };
    var3.doneButton = var6;
    var6 = {
        'marginRight': 16,
        'marginLeft': 8
    };
    var3.doneButtonContainer = var6;
    var3 = var4.bind(var5)(var3);
    var _closure1_slot7 = var3;
    var1 = function arg0() {
        _fun68631: for (var _fun68631_ip = 0;;) switch (_fun68631_ip) {
            case 0:
                var1 = arg0;
                var9 = var1.children;
                var6 = var1.onPress;
                var _closure2_slot0 = var6;
                var2 = var1.rippleRadius;
                var11 = 28;
                var3 = undefined;
                if (!(var3 !== var2)) {
                    _fun68631_ip = 37;
                    continue _fun68631
                }
            case 34:
                var11 = var2;
            case 37:
                var7 = var1.text;
                var2 = var1.button;
                if (!(var3 === var2)) {
                    _fun68631_ip = 75;
                    continue _fun68631
                }
            case 52:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var2 = var4.bind(var3)(var1);
            case 75:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 4;
                var1 = var13[var1];
                var8 = var12.bind(var3)(var1);
                var5 = var8.useKeyboardState;
                var1 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.appearance;
                    return var0;
                };
                var1 = var5.bind(var8)(var1);
                var _closure2_slot1 = var1;
                var5 = 5;
                var5 = var13[var5];
                var8 = var12.bind(var3)(var5);
                var5 = var8.useToolbarContext;
                var5 = var5.bind(var8)();
                var10 = var5.theme;
                var _closure2_slot2 = var10;
                var8 = _closure1_slot4;
                var5 = new Array(2);
                var5[0] = var1;
                var5[1] = var10;
                var1 = function() { // Environment: var0
                    var0 = _closure1_slot7;
                    var1 = var0.doneButton;
                    var0 = new Array(2);
                    var0[0] = var1;
                    var1 = {};
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot1;
                    var2 = var3[var2];
                    var2 = var2.primary;
                    var1.color = var2;
                    var0[1] = var1;
                    return var0;
                };
                var8 = var8.bind(var3)(var1, var5);
                var5 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var6;
                var0 = function(arg0) { // Environment: var0
                    _fun68634: for (var _fun68634_ip = 0;;) switch (_fun68634_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun68634_ip = 27;
                                continue _fun68634
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 27:
                            var0 = var1.isDefaultPrevented;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun68634_ip = 81;
                                continue _fun68634
                            }
                        case 40:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var1 = var0.KeyboardController;
                            var0 = var1.dismiss;
                            var0 = var0.bind(var1)();
                        case 81:
                            var0 = undefined;
                            return var0;
                    }
                };
                var5 = var5.bind(var3)(var0, var1);
                var1 = _closure1_slot6;
                var0 = {
                    'accessibilityHint': 'Closes the keyboard',
                    'accessibilityLabel': 'Done'
                };
                var6 = 'Done';
                var0.rippleRadius = var11;
                var11 = _closure1_slot7;
                var11 = var11.doneButtonContainer;
                var0.style = var11;
                var11 = 7;
                var11 = var13[var11];
                var11 = var12.bind(var3)(var11);
                var11 = var11.TEST_ID_KEYBOARD_TOOLBAR_DONE;
                var0.testID = var11;
                var0.theme = var10;
                var0.onPress = var5;
                var5 = _closure1_slot5;
                var4 = {};
                var10 = 1.3;
                var4.maxFontSizeMultiplier = var10;
                var4.style = var8;
                var8 = null;
                if (!(var8 != var9)) {
                    _fun68631_ip = 313;
                    continue _fun68631
                }
            case 310:
                var7 = var9;
            case 313:
                var8 = var8 != var7;
                if (!var8) {
                    _fun68631_ip = 323;
                    continue _fun68631
                }
            case 320:
                var6 = var7;
            case 323:
                var4.children = var6;
                var4 = var1.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var1.bind(var3)(var2, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 8554, 8532, 8560, 8530, 8553]);