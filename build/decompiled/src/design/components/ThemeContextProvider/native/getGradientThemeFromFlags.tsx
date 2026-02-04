// design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/ThemeContextProvider/native/getGradientThemeFromFlags.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun27423: for (var _fun27423_ip = 0;;) switch (_fun27423_ip) {
            case 0:
                var4 = arg0;
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 0;
                var1 = var7[var0];
                var5 = undefined;
                var3 = var6.bind(var5)(var1);
                var2 = var3.hasThemeFlag;
                var1 = var7[var0];
                var1 = var6.bind(var5)(var1);
                var1 = var1.ThemeContextFlags;
                var1 = var1.MOBILE_DARK_GRADIENT_THEME_ENABLED;
                var1 = var2.bind(var3)(var4, var1);
                var2 = var7[var0];
                var3 = var6.bind(var5)(var2);
                var2 = var3.hasThemeFlag;
                var0 = var7[var0];
                var0 = var6.bind(var5)(var0);
                var0 = var0.ThemeContextFlags;
                var0 = var0.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
                var2 = var2.bind(var3)(var4, var0);
                var0 = 'dark';
                if (var1) {
                    _fun27423_ip = 121;
                    continue _fun27423
                }
            case 109:
                var1 = null;
                if (!var2) {
                    _fun27423_ip = 118;
                    continue _fun27423
                }
            case 114:
                var1 = 'light';
            case 118:
                var0 = var1;
            case 121:
                return var0;
        }
    };
    var2.getGradientThemeFromFlags = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3159, 2]);