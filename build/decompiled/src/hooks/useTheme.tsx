// hooks/useTheme.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function() { // Original name: useTheme, environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var0 = var1.useThemeContext;
        var0 = var0.bind(var1)();
        var0 = var0.theme;
        return var0;
    };
    var _closure1_slot3 = var4;
    var1 = function(arg0) { // Original name: getThemeIndex, environment: var3
        _fun28034: for (var _fun28034_ip = 0;;) switch (_fun28034_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot2;
                var2 = var2.DARK;
                if (!(var2 !== var1)) {
                    _fun28034_ip = 43;
                    continue _fun28034
                }
            case 20:
                var0 = _closure1_slot2;
                var0 = var0.LIGHT;
                if (!(var0 !== var1)) {
                    _fun28034_ip = 38;
                    continue _fun28034
                }
            case 34:
                var0 = undefined;
                return var0;
            case 38:
                var0 = 1;
                return var0;
            case 43:
                var0 = 0;
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = global;
    var9 = var0.Object;
    var8 = var9.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var9)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var6.bind(var0)(var5);
    var5 = var5.ThemeTypes;
    var _closure1_slot2 = var5;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'hooks/useTheme.tsx';
    var5 = var6.bind(var7)(var5);
    var2.default = var4;
    var2.useTheme = var4;
    var3 = function() { // Original name: useThemeIndex, environment: var3
        var2 = _closure1_slot4;
        var0 = _closure1_slot3;
        var1 = undefined;
        var0 = var0.bind(var1)();
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useThemeIndex = var3;
    var2.getThemeIndex = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3165, 2]);