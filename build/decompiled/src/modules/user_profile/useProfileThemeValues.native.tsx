// modules/user_profile/useProfileThemeValues.native.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.useMemo;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user_profile/useProfileThemeValues.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var5 = arg0;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 2;
        var2 = var3[var2];
        var3 = undefined;
        var7 = var4.bind(var3)(var2);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var0
            var0 = _closure1_slot4;
            var0 = var0.saturation;
            return var0;
        };
        var4 = var6.bind(var7)(var4, var2);
        var _closure2_slot1 = var4;
        var2 = _closure1_slot3;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun47901: for (var _fun47901_ip = 0;;) switch (_fun47901_ip) {
                case 0:
                    var1 = _closure2_slot0;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun47901_ip = 341;
                        continue _fun47901
                    }
                case 16:
                    var6 = {};
                    var7 = _closure2_slot0;
                    var6.theme = var7;
                    var1 = _closure2_slot1;
                    var6.saturation = var1;
                    var1 = {};
                    var12 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var9 = 3;
                    var4 = var10[var9];
                    var8 = undefined;
                    var4 = var12.bind(var8)(var4);
                    var11 = var4.internal;
                    var5 = var11.resolveSemanticColor;
                    var4 = var10[var9];
                    var4 = var12.bind(var8)(var4);
                    var4 = var4.colors;
                    var4 = var4.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME;
                    var4 = var5.bind(var11)(var7, var4, var6);
                    var1.overlaySyncedWithUserTheme = var4;
                    var4 = var10[var9];
                    var4 = var12.bind(var8)(var4);
                    var11 = var4.internal;
                    var5 = var11.resolveSemanticColor;
                    var4 = var10[var9];
                    var4 = var12.bind(var8)(var4);
                    var4 = var4.colors;
                    var4 = var4.PROFILE_GRADIENT_OVERLAY;
                    var4 = var5.bind(var11)(var7, var4, var6);
                    var1.overlay = var4;
                    var4 = var10[var9];
                    var4 = var12.bind(var8)(var4);
                    var11 = var4.internal;
                    var5 = var11.resolveSemanticColor;
                    var4 = var10[var9];
                    var4 = var12.bind(var8)(var4);
                    var4 = var4.colors;
                    var4 = var4.PROFILE_GRADIENT_SECTION_BOX;
                    var4 = var5.bind(var11)(var7, var4, var6);
                    var1.sectionBox = var4;
                    var5 = _closure1_slot0;
                    var4 = 4;
                    var4 = var10[var4];
                    var5 = var5.bind(var8)(var4);
                    var4 = var5.getThemes;
                    var4 = var4.bind(var5)();
                    var5 = var4.DARK;
                    var4 = 0.12;
                    if (!(var7 === var5)) {
                        _fun47901_ip = 269;
                        continue _fun47901
                    }
                case 259:
                    var4 = 0.24;
                case 269:
                    var1.dividerOpacity = var4;
                    var7 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var4 = var2[var9];
                    var4 = var7.bind(var8)(var4);
                    var5 = var4.internal;
                    var4 = var5.resolveSemanticColor;
                    var3 = _closure2_slot0;
                    var2 = var2[var9];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.colors;
                    var2 = var2.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND;
                    var2 = var4.bind(var5)(var3, var2, var6);
                    var1.rolePillBackgroundColor = var2;
                    return var1;
                case 341:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.useProfileThemeValues = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1298, 632, 671, 808, 2]);