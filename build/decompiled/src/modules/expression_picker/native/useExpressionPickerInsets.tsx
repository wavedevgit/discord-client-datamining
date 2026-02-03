// modules/expression_picker/native/useExpressionPickerInsets.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.EXPRESSION_FOOTER_HEIGHT;
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/expression_picker/native/useExpressionPickerInsets.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun74060: for (var _fun74060_ip = 0;;) switch (_fun74060_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.hasCategories;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 2;
                var0 = var6[var0];
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var0.bind(var4)();
                var9 = var0.bottom;
                var _closure2_slot0 = var9;
                var0 = 3;
                var0 = var6[var0];
                var3 = var3.bind(var4)(var0);
                var0 = {
                    'includeKeyboardHeight': true,
                    'includeCustomKeyboardHeight': false
                };
                var0 = var3.bind(var4)(var0);
                var0 = var0.insets;
                var3 = var0.bottom;
                var0 = {};
                var8 = _closure1_slot2;
                var7 = var8.useMemo;
                var6 = new Array(1);
                var6[0] = var9;
                var2 = function() { // Environment: var2
                    var0 = {};
                    var1 = _closure2_slot0;
                    var0.paddingBottom = var1;
                    return var0;
                };
                var2 = var7.bind(var8)(var2, var6);
                var0.safeAreaStyle = var2;
                var2 = 0;
                if (!var5) {
                    _fun74060_ip = 133;
                    continue _fun74060
                }
            case 129:
                var2 = _closure1_slot3;
            case 133:
                var2 = var3 + var2;
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 4;
                var1 = var5[var1];
                var1 = var3.bind(var4)(var1);
                var1 = var1.spacing;
                var1 = var1.PX_16;
                var1 = var2 + var1;
                var0.safeAreaBottomKeyboardAware = var1;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 660, 1568, 4893, 671, 2]);