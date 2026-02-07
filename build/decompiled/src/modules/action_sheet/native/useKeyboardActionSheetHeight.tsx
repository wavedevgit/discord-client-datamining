// modules/action_sheet/native/useKeyboardActionSheetHeight.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = function arg0, arg1, arg2() {
        _fun88386: for (var _fun88386_ip = 0;;) switch (_fun88386_ip) {
            case 0:
                var2 = arg2;
                var0 = arg1;
                var1 = var0.height;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 0;
                var3 = var3[var0];
                var0 = undefined;
                var0 = var4.bind(var0)(var3);
                var0 = var0.NAV_BAR_HEIGHT_MULTILINE;
                var1 = var1 - var0;
                var0 = arg0;
                var0 = var0.top;
                var1 = var1 - var0;
                if (!(var2 >= var1)) {
                    _fun88386_ip = 64;
                    continue _fun88386
                }
            case 61:
                var1 = var2;
            case 64:
                var0 = {};
                var0.minimum = var2;
                var0.maximum = var1;
                return var0;
        }
    };
    var _closure1_slot3 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 4;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/action_sheet/native/useKeyboardActionSheetHeight.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var4 = _closure1_slot3;
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var0 = 1;
        var0 = var6[var0];
        var3 = undefined;
        var0 = var5.bind(var3)(var0);
        var2 = var0.bind(var3)();
        var0 = 2;
        var0 = var6[var0];
        var1 = var5.bind(var3)(var0);
        var0 = {};
        var7 = true;
        var0.ignoreKeyboard = var7;
        var1 = var1.bind(var3)(var0);
        var0 = 3;
        var0 = var6[var0];
        var0 = var5.bind(var3)(var0);
        var0 = var0.bind(var3)();
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var2.default = var3;
    var1 = function() {
        var4 = _closure1_slot3;
        var5 = _closure1_slot0;
        var6 = _closure1_slot2;
        var0 = 1;
        var0 = var6[var0];
        var3 = undefined;
        var1 = var5.bind(var3)(var0);
        var0 = var1.getSafeAreaInsets;
        var2 = var0.bind(var1)();
        var0 = 2;
        var0 = var6[var0];
        var7 = var5.bind(var3)(var0);
        var1 = var7.getWindowDimensions;
        var0 = {};
        var8 = true;
        var0.ignoreKeyboard = var8;
        var1 = var1.bind(var7)(var0);
        var0 = 3;
        var0 = var6[var0];
        var5 = var5.bind(var3)(var0);
        var0 = var5.getCustomKeyboardHeight;
        var0 = var0.bind(var5)();
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var2.getKeyboardActionSheetHeight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4703, 1568, 1464, 4898, 2]);