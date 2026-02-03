// modules/themes/RootThemeContextProvider.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot6 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/themes/RootThemeContextProvider.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun99858: for (var _fun99858_ip = 0;;) switch (_fun99858_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.children;
                var2 = _closure1_slot0;
                var7 = _closure1_slot2;
                var1 = 5;
                var1 = var7[var1];
                var3 = undefined;
                var6 = var2.bind(var3)(var1);
                var5 = var6.useStateFromStoresObject;
                var1 = _closure1_slot3;
                var2 = new Array(2);
                var2[0] = var1;
                var1 = _closure1_slot4;
                var2[1] = var1;
                var1 = function() { // Environment: var1
                    var0 = {};
                    var2 = _closure1_slot3;
                    var3 = var2.saturation;
                    var0.saturation = var3;
                    var2 = var2.contrast;
                    var0.contrast = var2;
                    var1 = _closure1_slot4;
                    var1 = var1.theme;
                    var0.theme = var1;
                    return var0;
                };
                var1 = var5.bind(var6)(var2, var1);
                var6 = var1.saturation;
                var5 = var1.contrast;
                var8 = var1.theme;
                var2 = _closure1_slot1;
                var1 = 6;
                var1 = var7[var1];
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var3)();
                var2 = null;
                var2 = var2 != var1;
                var10 = 0;
                var11 = 0;
                if (!var2) {
                    _fun99858_ip = 259;
                    continue _fun99858
                }
            case 128:
                var2 = var1.theme;
                var1 = _closure1_slot5;
                var1 = var1.LIGHT;
                if (!(var2 !== var1)) {
                    _fun99858_ip = 203;
                    continue _fun99858
                }
            case 148:
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var1 = 7;
                var2 = var12[var1];
                var7 = var9.bind(var3)(var2);
                var2 = var7.setThemeFlag;
                var1 = var12[var1];
                var1 = var9.bind(var3)(var1);
                var1 = var1.ThemeContextFlags;
                var1 = var1.MOBILE_DARK_GRADIENT_THEME_ENABLED;
                var1 = var2.bind(var7)(var10, var1);
                _fun99858_ip = 256;
                continue _fun99858;
            case 203:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 7;
                var7 = var13[var2];
                var9 = var12.bind(var3)(var7);
                var7 = var9.setThemeFlag;
                var2 = var13[var2];
                var2 = var12.bind(var3)(var2);
                var2 = var2.ThemeContextFlags;
                var2 = var2.MOBILE_LIGHT_GRADIENT_THEME_ENABLED;
                var1 = var7.bind(var9)(var10, var2);
            case 256:
                var11 = var1;
            case 259:
                var1 = 1;
                var10 = var11;
                if (!(var1 !== var6)) {
                    _fun99858_ip = 322;
                    continue _fun99858
                }
            case 269:
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var2 = 7;
                var7 = var13[var2];
                var9 = var12.bind(var3)(var7);
                var7 = var9.setThemeFlag;
                var2 = var13[var2];
                var2 = var12.bind(var3)(var2);
                var2 = var2.ThemeContextFlags;
                var2 = var2.REDUCE_SATURATION_ENABLED;
                var10 = var7.bind(var9)(var11, var2);
            case 322:
                var7 = var10;
                if (!(var1 !== var5)) {
                    _fun99858_ip = 425;
                    continue _fun99858
                }
            case 329:
                var9 = _closure1_slot0;
                var2 = _closure1_slot2;
                var13 = 7;
                var2 = var2[var13];
                var9 = var9.bind(var3)(var2);
                var2 = var9.setThemeFlag;
                if (!(!(var5 > var1))) {
                    _fun99858_ip = 390;
                    continue _fun99858
                }
            case 359:
                var11 = _closure1_slot0;
                var1 = _closure1_slot2;
                var1 = var1[var13];
                var1 = var11.bind(var3)(var1);
                var1 = var1.ThemeContextFlags;
                var1 = var1.REDUCED_CONTRAST_ENABLED;
                _fun99858_ip = 419;
                continue _fun99858;
            case 390:
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var11 = var11[var13];
                var11 = var12.bind(var3)(var11);
                var11 = var11.ThemeContextFlags;
                var1 = var11.INCREASED_CONTRAST_ENABLED;
            case 419:
                var7 = var2.bind(var9)(var10, var1);
            case 425:
                var2 = _closure1_slot6;
                var1 = _closure1_slot0;
                var9 = _closure1_slot2;
                var0 = 8;
                var0 = var9[var0];
                var0 = var1.bind(var3)(var0);
                var1 = var0.RootThemeContextProvider;
                var0 = {};
                var0.theme = var8;
                var0.flags = var7;
                var0.saturation = var6;
                var0.contrast = var5;
                var0.children = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var2.RootThemeContextProvider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 3187, 483, 33, 566, 3233, 3150, 4877, 2]);