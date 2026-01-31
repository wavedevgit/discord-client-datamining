// ../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var6 = function(arg0) { // Original name: createThemedContext, environment: var1
        var1 = arg0;
        var0 = global;
        var2 = var0.JSON;
        var0 = var2.stringify;
        var2 = var0.bind(var2)(var1);
        var0 = {};
        var4 = var0;
        var3 = var1;
        var1 = copyDataProperties(var4, var3);
        var1 = 'key';
        var0[var1] = var2;
        return var0;
    };
    var5 = function() { // Original name: useThemeContext, environment: var1
        _fun27280: for (var _fun27280_ip = 0;;) switch (_fun27280_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = var2.useContext;
                var0 = _closure1_slot3;
                var0 = var1.bind(var2)(var0);
                var1 = null;
                if (!(var1 != var0)) {
                    _fun27280_ip = 30;
                    continue _fun27280
                }
            case 28:
                return var0;
            case 30:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = 'useThemeContext must be used within a ThemeContext.Provider';
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot4 = var5;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var4 = var9[var0];
    var3 = arg3;
    var0 = undefined;
    var7 = var3.bind(var0)(var4);
    var _closure1_slot0 = var7;
    var3 = 1;
    var3 = var9[var3];
    var3 = var8.bind(var0)(var3);
    var4 = var3.Fragment;
    var _closure1_slot1 = var4;
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = {
        'theme': 'light',
        'primaryColor': null,
        'secondaryColor': null,
        'gradient': null,
        'flags': 0,
        'contrast': 1,
        'saturation': 1,
        'density': 'compact',
        'disableAdaptiveTheme': false,
        'reduceAdaptiveTheme': false
    };
    var4 = var6.bind(var0)(var3);
    var3 = var7.createContext;
    var3 = var3.bind(var7)(var4);
    var _closure1_slot3 = var3;
    var7 = 2;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = '../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContext.tsx';
    var7 = var8.bind(var9)(var7);
    var2.createThemedContext = var6;
    var2.useThemeContext = var5;
    var2.FALLBACK_THEME_CONTEXT_VALUE = var4;
    var2.ThemeContext = var3;
    var1 = function(arg0) { // Original name: UseThemeContext, environment: var1
        var0 = arg0;
        var5 = var0.children;
        var1 = _closure1_slot4;
        var3 = undefined;
        var4 = var1.bind(var3)();
        var2 = _closure1_slot2;
        var1 = _closure1_slot1;
        var0 = {};
        var4 = var5.bind(var3)(var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.UseThemeContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 2]);