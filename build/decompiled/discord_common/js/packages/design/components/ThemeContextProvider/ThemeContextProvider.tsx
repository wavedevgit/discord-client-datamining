// ../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContextProvider.tsx
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
    var3 = var3.jsx;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/design/components/ThemeContextProvider/ThemeContextProvider.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var4 = var0.children;
        var20 = var0.theme;
        var _closure2_slot0 = var20;
        var18 = var0.primaryColor;
        var _closure2_slot1 = var18;
        var17 = var0.secondaryColor;
        var _closure2_slot2 = var17;
        var16 = var0.gradient;
        var _closure2_slot3 = var16;
        var15 = var0.flags;
        var _closure2_slot4 = var15;
        var14 = var0.contrast;
        var _closure2_slot5 = var14;
        var13 = var0.saturation;
        var _closure2_slot6 = var13;
        var12 = var0.density;
        var _closure2_slot7 = var12;
        var11 = var0.disableAdaptiveTheme;
        var _closure2_slot8 = var11;
        var10 = var0.reduceAdaptiveTheme;
        var _closure2_slot9 = var10;
        var9 = _closure1_slot2;
        var8 = var9.useContext;
        var1 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 2;
        var7 = var6[var0];
        var3 = undefined;
        var7 = var1.bind(var3)(var7);
        var7 = var7.ThemeContext;
        var19 = var8.bind(var9)(var7);
        var _closure2_slot10 = var19;
        var7 = var6[var0];
        var7 = var1.bind(var3)(var7);
        var7 = var7.FALLBACK_THEME_CONTEXT_VALUE;
        var8 = var9.useMemo;
        var7 = new Array(20);
        var7[0] = var20;
        var20 = var19.theme;
        var7[1] = var20;
        var20 = var19.primaryColor;
        var7[2] = var20;
        var20 = var19.secondaryColor;
        var7[3] = var20;
        var20 = var19.gradient;
        var7[4] = var20;
        var20 = var19.flags;
        var7[5] = var20;
        var20 = var19.contrast;
        var7[6] = var20;
        var20 = var19.saturation;
        var7[7] = var20;
        var20 = var19.density;
        var7[8] = var20;
        var20 = var19.disableAdaptiveTheme;
        var7[9] = var20;
        var19 = var19.reduceAdaptiveTheme;
        var7[10] = var19;
        var7[11] = var18;
        var7[12] = var17;
        var7[13] = var16;
        var7[14] = var15;
        var7[15] = var14;
        var7[16] = var13;
        var7[17] = var12;
        var7[18] = var11;
        var7[19] = var10;
        var5 = function() { // Environment: var5
            _fun27482: for (var _fun27482_ip = 0;;) switch (_fun27482_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.createThemedContext;
                    var0 = {};
                    var3 = _closure2_slot0;
                    var5 = null;
                    if (!(var5 == var3)) {
                        _fun27482_ip = 58;
                        continue _fun27482
                    }
                case 46:
                    var3 = _closure2_slot10;
                    var3 = var3.theme;
                    _fun27482_ip = 62;
                    continue _fun27482;
                case 58:
                    var3 = _closure2_slot0;
                case 62:
                    var0.theme = var3;
                    var3 = _closure2_slot1;
                    if (!(var5 == var3)) {
                        _fun27482_ip = 87;
                        continue _fun27482
                    }
                case 75:
                    var3 = _closure2_slot10;
                    var3 = var3.primaryColor;
                    _fun27482_ip = 91;
                    continue _fun27482;
                case 87:
                    var3 = _closure2_slot1;
                case 91:
                    var0.primaryColor = var3;
                    var3 = _closure2_slot2;
                    if (!(var5 == var3)) {
                        _fun27482_ip = 116;
                        continue _fun27482
                    }
                case 104:
                    var3 = _closure2_slot10;
                    var3 = var3.secondaryColor;
                    _fun27482_ip = 120;
                    continue _fun27482;
                case 116:
                    var3 = _closure2_slot2;
                case 120:
                    var0.secondaryColor = var3;
                    var3 = _closure2_slot3;
                    if (!(var5 == var3)) {
                        _fun27482_ip = 145;
                        continue _fun27482
                    }
                case 133:
                    var3 = _closure2_slot10;
                    var3 = var3.gradient;
                    _fun27482_ip = 149;
                    continue _fun27482;
                case 145:
                    var3 = _closure2_slot3;
                case 149:
                    var0.gradient = var3;
                    var3 = _closure2_slot4;
                    if (!(var5 == var3)) {
                        _fun27482_ip = 173;
                        continue _fun27482
                    }
                case 162:
                    var3 = _closure2_slot10;
                    var3 = var3.flags;
                    _fun27482_ip = 177;
                    continue _fun27482;
                case 173:
                    var3 = _closure2_slot4;
                case 177:
                    var0.flags = var3;
                    var3 = _closure2_slot5;
                    if (!(var5 == var3)) {
                        _fun27482_ip = 201;
                        continue _fun27482
                    }
                case 189:
                    var3 = _closure2_slot10;
                    var3 = var3.contrast;
                    _fun27482_ip = 205;
                    continue _fun27482;
                case 201:
                    var3 = _closure2_slot5;
                case 205:
                    var0.contrast = var3;
                    var3 = _closure2_slot6;
                    if (!(var5 == var3)) {
                        _fun27482_ip = 230;
                        continue _fun27482
                    }
                case 218:
                    var3 = _closure2_slot10;
                    var3 = var3.saturation;
                    _fun27482_ip = 234;
                    continue _fun27482;
                case 230:
                    var3 = _closure2_slot6;
                case 234:
                    var0.saturation = var3;
                    var3 = _closure2_slot7;
                    if (!(var5 == var3)) {
                        _fun27482_ip = 259;
                        continue _fun27482
                    }
                case 247:
                    var3 = _closure2_slot10;
                    var3 = var3.density;
                    _fun27482_ip = 263;
                    continue _fun27482;
                case 259:
                    var3 = _closure2_slot7;
                case 263:
                    var0.density = var3;
                    var3 = _closure2_slot8;
                    if (!(var5 == var3)) {
                        _fun27482_ip = 288;
                        continue _fun27482
                    }
                case 276:
                    var3 = _closure2_slot10;
                    var3 = var3.disableAdaptiveTheme;
                    _fun27482_ip = 292;
                    continue _fun27482;
                case 288:
                    var3 = _closure2_slot8;
                case 292:
                    var0.disableAdaptiveTheme = var3;
                    var3 = _closure2_slot9;
                    if (!(var5 == var3)) {
                        _fun27482_ip = 317;
                        continue _fun27482
                    }
                case 305:
                    var3 = _closure2_slot10;
                    var3 = var3.reduceAdaptiveTheme;
                    _fun27482_ip = 321;
                    continue _fun27482;
                case 317:
                    var3 = _closure2_slot9;
                case 321:
                    var0.reduceAdaptiveTheme = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var5 = var8.bind(var9)(var5, var7);
        var2 = _closure1_slot3;
        var0 = var6[var0];
        var0 = var1.bind(var3)(var0);
        var0 = var0.ThemeContext;
        var1 = var0.Provider;
        var0 = {};
        var0.value = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ThemeContextProvider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 3171, 2]);