// design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx
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
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = {};
        var2 = 3;
        var1.marginTop = var2;
        var0.container = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Sheet/native/ActionSheetHeaderPressableText.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: ActionSheetHeaderPressableText, environment: var1
        _fun46292: for (var _fun46292_ip = 0;;) switch (_fun46292_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.onPress;
                var7 = var0.label;
                var6 = var0.accessibilityLabel;
                var0 = _closure1_slot3;
                var3 = undefined;
                var8 = var0.bind(var3)();
                var2 = _closure1_slot2;
                var1 = _closure1_slot0;
                var9 = _closure1_slot1;
                var0 = 2;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.PressableOpacity;
                var0 = {};
                var8 = var8.container;
                var0.style = var8;
                var8 = 'button';
                var0.accessibilityRole = var8;
                var0.onPress = var5;
                var8 = null;
                var5 = var7;
                if (!(var8 != var6)) {
                    _fun46292_ip = 96;
                    continue _fun46292
                }
            case 93:
                var5 = var6;
            case 96:
                var0.accessibilityLabel = var5;
                var6 = _closure1_slot2;
                var5 = _closure1_slot0;
                var8 = _closure1_slot1;
                var4 = 3;
                var4 = var8[var4];
                var4 = var5.bind(var3)(var4);
                var5 = var4.Text;
                var4 = {
                    'variant': 'text-md/semibold',
                    'color': 'text-brand'
                };
                var4.children = var7;
                var4 = var6.bind(var3)(var5, var4);
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.ActionSheetHeaderPressableText = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [33, 1297, 4864, 3901, 2]);