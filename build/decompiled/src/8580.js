// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var3 = 0;
    var6 = var5[var3];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.useCallback;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var1 = function arg0() {
        _fun68659: for (var _fun68659_ip = 0;;) switch (_fun68659_ip) {
            case 0:
                var5 = arg0;
                var4 = var5.children;
                var13 = var5.onPress;
                var _closure2_slot0 = var13;
                var1 = var5.disabled;
                var12 = var5.rippleRadius;
                var11 = var5.style;
                var3 = var5.button;
                var2 = undefined;
                if (!(var2 === var3)) {
                    _fun68659_ip = 70;
                    continue _fun68659
                }
            case 47:
                var7 = _closure1_slot1;
                var8 = _closure1_slot2;
                var6 = 2;
                var6 = var8[var6];
                var3 = var7.bind(var2)(var6);
            case 70:
                var7 = var5.icon;
                if (!(var2 === var7)) {
                    _fun68659_ip = 102;
                    continue _fun68659
                }
            case 79:
                var6 = _closure1_slot1;
                var8 = _closure1_slot2;
                var5 = 3;
                var5 = var8[var5];
                var7 = var6.bind(var2)(var5);
            case 102:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var6 = 4;
                var6 = var9[var6];
                var8 = var8.bind(var2)(var6);
                var6 = var8.useToolbarContext;
                var6 = var6.bind(var8)();
                var8 = var6.theme;
                var9 = var6.isPrevDisabled;
                var6 = null;
                if (!(var6 != var1)) {
                    _fun68659_ip = 156;
                    continue _fun68659
                }
            case 153:
                var9 = var1;
            case 156:
                var10 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var13;
                var0 = function(arg0) { // Environment: var0
                    _fun68660: for (var _fun68660_ip = 0;;) switch (_fun68660_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = _closure2_slot0;
                            var2 = null;
                            if (!(var2 != var3)) {
                                _fun68660_ip = 27;
                                continue _fun68660
                            }
                        case 16:
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 27:
                            var0 = var1.isDefaultPrevented;
                            var0 = var0.bind(var1)();
                            if (var0) {
                                _fun68660_ip = 86;
                                continue _fun68660
                            }
                        case 40:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot2;
                            var0 = 5;
                            var1 = var1[var0];
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                            var2 = var0.KeyboardController;
                            var1 = var2.setFocusTo;
                            var0 = 'prev';
                            var0 = var1.bind(var2)(var0);
                        case 86:
                            var0 = undefined;
                            return var0;
                    }
                };
                var10 = var10.bind(var2)(var0, var1);
                var1 = _closure1_slot4;
                var0 = {
                    'accessibilityHint': 'Moves focus to the previous field',
                    'accessibilityLabel': 'Previous'
                };
                var0.disabled = var9;
                var0.rippleRadius = var12;
                var0.style = var11;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var11 = 6;
                var11 = var13[var11];
                var11 = var12.bind(var2)(var11);
                var11 = var11.TEST_ID_KEYBOARD_TOOLBAR_PREVIOUS;
                var0.testID = var11;
                var0.theme = var8;
                var0.onPress = var10;
                if (!(var6 == var4)) {
                    _fun68659_ip = 285;
                    continue _fun68659
                }
            case 256:
                var6 = _closure1_slot4;
                var5 = {};
                var5.disabled = var9;
                var5.theme = var8;
                var8 = 'prev';
                var5.type = var8;
                var4 = var6.bind(var2)(var7, var5);
            case 285:
                var0.children = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 8572, 8573, 8578, 8548, 8571]);