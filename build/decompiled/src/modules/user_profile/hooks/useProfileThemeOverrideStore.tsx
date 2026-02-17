// modules/user_profile/hooks/useProfileThemeOverrideStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var4 = var5.bind(var0)(var3);
    var3 = var4.create;
    var4 = var3.bind(var4)();
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {
            'themeOverride': null,
            'savedClientTheme': null
        };
        var2 = function arg0() {
            var2 = _closure2_slot0;
            var1 = {};
            var0 = arg0;
            var1.themeOverride = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0.setThemeOverride = var2;
        var1 = function arg0() {
            var2 = _closure2_slot0;
            var1 = {};
            var0 = arg0;
            var1.savedClientTheme = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0.setSavedClientTheme = var1;
        return var0;
    };
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var4 = 5;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/useProfileThemeOverrideStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useProfileThemeOverrideStore = var3;
    var3 = function() {
        _fun57809: for (var _fun57809_ip = 0;;) switch (_fun57809_ip) {
            case 0:
                var2 = _closure1_slot4;
                var10 = undefined;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.themeOverride;
                    return var0;
                };
                var4 = var2.bind(var10)(var0);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 2;
                var0 = var3[var0];
                var0 = var2.bind(var10)(var0);
                var9 = var0.bind(var10)();
                var0 = null;
                if (!(var0 != var4)) {
                    _fun57809_ip = 359;
                    continue _fun57809
                }
            case 54:
                var3 = var4.mode;
                var2 = 'nitro';
                if (!(var2 !== var3)) {
                    _fun57809_ip = 94;
                    continue _fun57809
                }
            case 69:
                var2 = var4.themeType;
                var6 = var9;
                if (!(var0 != var2)) {
                    _fun57809_ip = 85;
                    continue _fun57809
                }
            case 82:
                var6 = var2;
            case 85:
                var3 = null;
                var2 = null;
                _fun57809_ip = 225;
                continue _fun57809;
            case 94:
                var8 = var4.themeColors;
                var5 = var0 == var8;
                var7 = undefined;
                if (var5) {
                    _fun57809_ip = 115;
                    continue _fun57809
                }
            case 109:
                var5 = 0;
                var7 = var8[var5];
            case 115:
                var8 = var0 != var7;
                var5 = null;
                if (!var8) {
                    _fun57809_ip = 127;
                    continue _fun57809
                }
            case 124:
                var5 = var7;
            case 127:
                var8 = var4.themeColors;
                var4 = var0 == var8;
                var7 = undefined;
                if (var4) {
                    _fun57809_ip = 149;
                    continue _fun57809
                }
            case 142:
                var4 = 1;
                var7 = var8[var4];
            case 149:
                var8 = var0 != var7;
                var4 = null;
                if (!var8) {
                    _fun57809_ip = 161;
                    continue _fun57809
                }
            case 158:
                var4 = var7;
            case 161:
                var7 = var9;
                if (!(var0 != var5)) {
                    _fun57809_ip = 216;
                    continue _fun57809
                }
            case 168:
                var7 = var9;
                if (!(var0 != var4)) {
                    _fun57809_ip = 216;
                    continue _fun57809
                }
            case 175:
                var11 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 3;
                var8 = var12[var8];
                var11 = var11.bind(var10)(var8);
                var8 = var11.getProfileTheme;
                var8 = var8.bind(var11)(var5);
                var7 = var9;
                if (!(var0 != var8)) {
                    _fun57809_ip = 216;
                    continue _fun57809
                }
            case 213:
                var7 = var8;
            case 216:
                var6 = var7;
                var3 = var5;
                var2 = var4;
            case 225:
                var4 = _closure1_slot3;
                var4 = var4.DARK;
                if (!(var6 === var4)) {
                    _fun57809_ip = 276;
                    continue _fun57809
                }
            case 239:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 4;
                var4 = var7[var4];
                var5 = var5.bind(var10)(var4);
                var4 = var5.isThemeDark;
                var5 = var4.bind(var5)(var9);
                var4 = var9;
                if (var5) {
                    _fun57809_ip = 340;
                    continue _fun57809
                }
            case 276:
                var5 = _closure1_slot3;
                var5 = var5.DARK;
                var5 = var6 === var5;
                if (!var5) {
                    _fun57809_ip = 324;
                    continue _fun57809
                }
            case 293:
                var8 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 4;
                var7 = var11[var7];
                var8 = var8.bind(var10)(var7);
                var7 = var8.isThemeLight;
                var5 = var7.bind(var8)(var9);
            case 324:
                var4 = var6;
                if (!var5) {
                    _fun57809_ip = 340;
                    continue _fun57809
                }
            case 330:
                var1 = _closure1_slot3;
                var4 = var1.DARKER;
            case 340:
                var1 = {};
                var1.theme = var4;
                var1.primaryColor = var3;
                var1.secondaryColor = var2;
                return var1;
            case 359:
                return var0;
        }
    };
    var2.useEffectiveThemeOverride = var3;
    var3 = function() {
        _fun57811: for (var _fun57811_ip = 0;;) switch (_fun57811_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.themeOverride;
                    return var0;
                };
                var2 = var2.bind(var1)(var0);
                var0 = null;
                var0 = var0 != var2;
                if (!var0) {
                    _fun57811_ip = 65;
                    continue _fun57811
                }
            case 30:
                var3 = var2.mode;
                var1 = 'non-nitro';
                var1 = var1 === var3;
                if (var1) {
                    _fun57811_ip = 62;
                    continue _fun57811
                }
            case 48:
                var3 = var2.disableBanner;
                var2 = true;
                var1 = var2 === var3;
            case 62:
                var0 = var1;
            case 65:
                return var0;
        }
    };
    var2.useIsBannerDisabledByOverride = var3;
    var1 = function() {
        _fun57813: for (var _fun57813_ip = 0;;) switch (_fun57813_ip) {
            case 0:
                var2 = _closure1_slot4;
                var1 = undefined;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.themeOverride;
                    return var0;
                };
                var1 = var2.bind(var1)(var0);
                var0 = null;
                var0 = var0 != var1;
                if (!var0) {
                    _fun57813_ip = 45;
                    continue _fun57813
                }
            case 30:
                var2 = var1.mode;
                var1 = 'non-nitro';
                var0 = var1 === var2;
            case 45:
                return var0;
        }
    };
    var2.useHasNonNitroThemeOverride = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 629, 3252, 7053, 3212, 2]);