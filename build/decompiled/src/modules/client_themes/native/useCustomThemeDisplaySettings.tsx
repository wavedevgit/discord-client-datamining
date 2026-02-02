// modules/client_themes/native/useCustomThemeDisplaySettings.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/client_themes/native/useCustomThemeDisplaySettings.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        _fun28034: for (var _fun28034_ip = 0;;) switch (_fun28034_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var4 = 2;
                var2 = var1[var4];
                var1 = undefined;
                var7 = var3.bind(var1)(var2);
                var6 = var7.useStateFromStoresArray;
                var2 = _closure1_slot3;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = function() { // Environment: var2
                    var2 = _closure1_slot3;
                    var0 = var2.getCustomTheme;
                    var1 = var0.bind(var2)();
                    var0 = new Array(3);
                    var0[0] = var1;
                    var1 = var2.getBaseTheme;
                    var1 = var1.bind(var2)();
                    var0[1] = var1;
                    var1 = var2.getPreviewTheme;
                    var1 = var1.bind(var2)();
                    var0[2] = var1;
                    return var0;
                };
                var3 = var6.bind(var7)(var3, var2);
                var2 = _closure1_slot2;
                var0 = 3;
                var0 = var2.bind(var1)(var3, var0);
                var2 = 0;
                var2 = var0[var2];
                var3 = 1;
                var3 = var0[var3];
                var0 = var0[var4];
                if (!(var1 === var0)) {
                    _fun28034_ip = 185;
                    continue _fun28034
                }
            case 93:
                if (!(var1 !== var2)) {
                    _fun28034_ip = 101;
                    continue _fun28034
                }
            case 97:
                if (!(var1 === var3)) {
                    _fun28034_ip = 171;
                    continue _fun28034
                }
            case 101:
                var4 = null;
                if (!(var4 == var5)) {
                    _fun28034_ip = 109;
                    continue _fun28034
                }
            case 107:
                return var1;
            case 109:
                var4 = {};
                var1 = var5.colors;
                var4.colors = var1;
                var1 = var5.gradient_angle;
                var4.gradientAngle = var1;
                var1 = var5.base_mix;
                var4.baseMix = var1;
                var1 = new Array(0);
                var4.gradientColorStops = var1;
                var1 = {};
                var5 = var5.base_theme;
                var1.baseTheme = var5;
                var1.customTheme = var4;
                return var1;
            case 171:
                var1 = {};
                var1.baseTheme = var3;
                var1.customTheme = var2;
                return var1;
            case 185:
                return var0;
        }
    };
    var2.useCustomThemeDisplaySettings = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 3163, 566, 2]);