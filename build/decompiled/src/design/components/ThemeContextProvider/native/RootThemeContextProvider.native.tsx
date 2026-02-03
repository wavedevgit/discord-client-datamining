// design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/ThemeContextProvider/native/RootThemeContextProvider.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun44499: for (var _fun44499_ip = 0;;) switch (_fun44499_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.children;
                var16 = var0.theme;
                var3 = undefined;
                if (!(var16 === var3)) {
                    _fun44499_ip = 35;
                    continue _fun44499
                }
            case 22:
                var2 = _closure1_slot3;
                var16 = var2.DARK;
            case 35:
                var _closure2_slot0 = var16;
                var15 = var0.primaryColor;
                if (!(var15 === var3)) {
                    _fun44499_ip = 51;
                    continue _fun44499
                }
            case 49:
                var15 = null;
            case 51:
                var _closure2_slot1 = var15;
                var14 = var0.secondaryColor;
                if (!(var14 === var3)) {
                    _fun44499_ip = 67;
                    continue _fun44499
                }
            case 65:
                var14 = null;
            case 67:
                var _closure2_slot2 = var14;
                var13 = var0.gradient;
                if (!(var13 === var3)) {
                    _fun44499_ip = 83;
                    continue _fun44499
                }
            case 81:
                var13 = null;
            case 83:
                var _closure2_slot3 = var13;
                var12 = var0.flags;
                if (!(var12 === var3)) {
                    _fun44499_ip = 98;
                    continue _fun44499
                }
            case 96:
                var12 = 0;
            case 98:
                var _closure2_slot4 = var12;
                var11 = var0.contrast;
                if (!(var11 === var3)) {
                    _fun44499_ip = 115;
                    continue _fun44499
                }
            case 112:
                var11 = 1;
            case 115:
                var _closure2_slot5 = var11;
                var10 = var0.saturation;
                if (!(var10 === var3)) {
                    _fun44499_ip = 132;
                    continue _fun44499
                }
            case 129:
                var10 = 1;
            case 132:
                var _closure2_slot6 = var10;
                var9 = var0.density;
                if (!(var9 === var3)) {
                    _fun44499_ip = 150;
                    continue _fun44499
                }
            case 146:
                var9 = 'compact';
            case 150:
                var _closure2_slot7 = var9;
                var8 = var0.disableAdaptiveTheme;
                if (!(var8 === var3)) {
                    _fun44499_ip = 166;
                    continue _fun44499
                }
            case 164:
                var8 = false;
            case 166:
                var _closure2_slot8 = var8;
                var7 = var0.reduceAdaptiveTheme;
                if (!(var7 === var3)) {
                    _fun44499_ip = 182;
                    continue _fun44499
                }
            case 180:
                var7 = false;
            case 182:
                var _closure2_slot9 = var7;
                var6 = _closure1_slot2;
                var5 = var6.useMemo;
                var2 = new Array(10);
                var2[0] = var16;
                var2[1] = var15;
                var2[2] = var14;
                var2[3] = var13;
                var2[4] = var12;
                var2[5] = var11;
                var2[6] = var10;
                var2[7] = var9;
                var2[8] = var8;
                var2[9] = var7;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.createThemedContext;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var0.theme = var4;
                    var4 = _closure2_slot1;
                    var0.primaryColor = var4;
                    var4 = _closure2_slot2;
                    var0.secondaryColor = var4;
                    var4 = _closure2_slot3;
                    var0.gradient = var4;
                    var4 = _closure2_slot4;
                    var0.flags = var4;
                    var4 = _closure2_slot5;
                    var0.contrast = var4;
                    var4 = _closure2_slot6;
                    var0.saturation = var4;
                    var4 = _closure2_slot7;
                    var0.density = var4;
                    var4 = _closure2_slot8;
                    var0.disableAdaptiveTheme = var4;
                    var3 = _closure2_slot9;
                    var0.reduceAdaptiveTheme = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var5 = var5.bind(var6)(var1, var2);
                var2 = _closure1_slot4;
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 3;
                var0 = var6[var0];
                var0 = var1.bind(var3)(var0);
                var0 = var0.ThemeContext;
                var1 = var0.Provider;
                var0 = {};
                var0.value = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.RootThemeContextProvider = var3;
    var1 = function arg0() {
        var1 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 3;
        var6 = var5[var0];
        var3 = undefined;
        var7 = var1.bind(var3)(var6);
        var6 = var7.useThemeContext;
        var9 = var6.bind(var7)();
        var _closure2_slot0 = var9;
        var8 = _closure1_slot2;
        var7 = var8.useMemo;
        var6 = new Array(1);
        var6[0] = var9;
        var4 = function() { // Environment: var4
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.createThemedContext;
            var0 = {};
            var5 = _closure2_slot0;
            var6 = var0;
            var3 = copyDataProperties(var6, var5);
            var4 = null;
            var3 = 'primaryColor';
            var0[var3] = var4;
            var3 = 'secondaryColor';
            var0[var3] = var4;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var7.bind(var8)(var4, var6);
        var2 = _closure1_slot4;
        var0 = var5[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.ThemeContext;
        var1 = var0.Provider;
        var0 = {};
        var0.value = var4;
        var4 = arg0;
        var4 = var4.children;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.DisableCustomTheme = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 483, 33, 3159, 2]);