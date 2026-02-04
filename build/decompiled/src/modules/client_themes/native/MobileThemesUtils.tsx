// modules/client_themes/native/MobileThemesUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var0 = function() {
        var2 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 3;
        var1 = var5[var1];
        var4 = undefined;
        var1 = var2.bind(var4)(var1);
        var2 = var1.intl;
        var1 = var2.string;
        var3 = _closure1_slot1;
        var0 = 4;
        var0 = var5[var0];
        var0 = var3.bind(var4)(var0);
        var0 = var0.yl1iMm;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot8 = var0;
    var4 = function arg0() {
        _fun28187: for (var _fun28187_ip = 0;;) switch (_fun28187_ip) {
            case 0:
                var1 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 6;
                var0 = var2[var0];
                var6 = undefined;
                var2 = var1.bind(var6)(var0);
                var1 = var2.useCustomThemeDisplaySettings;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var0 = null;
                if (!(var6 !== var2)) {
                    _fun28187_ip = 117;
                    continue _fun28187
                }
            case 45:
                var1 = {};
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 5;
                var4 = var7[var4];
                var4 = var5.bind(var6)(var4);
                var4 = var4.ClientThemeType;
                var4 = var4.CUSTOM_BACKGROUND_GRADIENT;
                var1.type = var4;
                var3 = _closure1_slot8;
                var1.getName = var3;
                var3 = var2.baseTheme;
                var1.theme = var3;
                var2 = var2.customTheme;
                var1.customThemeSettings = var2;
                var0 = var1;
            case 117:
                return var0;
        }
    };
    var _closure1_slot9 = var4;
    var0 = function arg0() {
        _fun28188: for (var _fun28188_ip = 0;;) switch (_fun28188_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                if (!(var0 == var3)) {
                    _fun28188_ip = 18;
                    continue _fun28188
                }
            case 9:
                var0 = _closure1_slot7;
                _fun28188_ip = 64;
                continue _fun28188;
            case 18:
                var7 = _closure1_slot6;
                var1 = new Array(1);
                var6 = 0;
                var8 = var1;
                var4 = arraySpread(var8, var7, var6);
                var1[var4] = var3;
                var3 = 1;
                var6 = var4 + var3;
                var7 = _closure1_slot5;
                var8 = var1;
                var2 = arraySpread(var8, var7, var6);
                var0 = var1;
            case 64:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var1 = function() {
        _fun28189: for (var _fun28189_ip = 0;;) switch (_fun28189_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.useStateFromStores;
                var0 = _closure1_slot3;
                var1 = new Array(1);
                var1[0] = var0;
                var0 = function() { // Environment: var0
                    var1 = _closure1_slot3;
                    var0 = var1.getSavedCustomTheme;
                    var0 = var0.bind(var1)();
                    return var0;
                };
                var1 = var2.bind(var3)(var1, var0);
                var0 = null;
                var2 = var0 != var1;
                if (!var2) {
                    _fun28189_ip = 67;
                    continue _fun28189
                }
            case 64:
                var0 = var1;
            case 67:
                return var0;
        }
    };
    var _closure1_slot11 = var1;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var10 = 0;
    var5 = var7[var10];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var9 = var5.BACKGROUND_GRADIENT_PRESETS_MOBILE;
    var _closure1_slot5 = var9;
    var8 = var5.REDESIGN_STANDARD_BACKGROUND_THEMES;
    var _closure1_slot6 = var8;
    var5 = new Array(0);
    var13 = var5;
    var12 = var8;
    var11 = 0;
    var11 = arraySpread(var13, var12, var11);
    var13 = var5;
    var12 = var9;
    var8 = arraySpread(var13, var12, var11);
    var _closure1_slot7 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/client_themes/native/MobileThemesUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.useCustomBackgroundGradient = var4;
    var4 = function() {
        _fun28191: for (var _fun28191_ip = 0;;) switch (_fun28191_ip) {
            case 0:
                var2 = _closure1_slot10;
                var1 = _closure1_slot4;
                var0 = var1.getCustomThemeDisplaySettings;
                var4 = var0.bind(var1)();
                var0 = undefined;
                var1 = null;
                if (!(var0 !== var4)) {
                    _fun28191_ip = 103;
                    continue _fun28191
                }
            case 31:
                var3 = {};
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var6 = 5;
                var6 = var8[var6];
                var6 = var7.bind(var0)(var6);
                var6 = var6.ClientThemeType;
                var6 = var6.CUSTOM_BACKGROUND_GRADIENT;
                var3.type = var6;
                var5 = _closure1_slot8;
                var3.getName = var5;
                var5 = var4.baseTheme;
                var3.theme = var5;
                var4 = var4.customTheme;
                var3.customThemeSettings = var4;
                var1 = var3;
            case 103:
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.getAllMobileThemes = var4;
    var3 = function() {
        var2 = _closure1_slot10;
        var3 = _closure1_slot9;
        var0 = _closure1_slot11;
        var1 = undefined;
        var0 = var0.bind(var1)();
        var0 = var3.bind(var1)(var0);
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.useAllMobileThemes = var3;
    var2.useSavedCustomTheme = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3244, 3202, 3210, 1234, 2052, 3211, 3245, 566, 2]);