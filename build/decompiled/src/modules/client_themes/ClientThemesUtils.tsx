// modules/client_themes/ClientThemesUtils.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.PROTO_THEME_MAP_MOBILE;
    var _closure1_slot2 = var6;
    var3 = var3.PROTO_THEME_MAP_WEB_REFRESH;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ThemeTypes;
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/client_themes/ClientThemesUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun28018: for (var _fun28018_ip = 0;;) switch (_fun28018_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.l;
                var0 = 0.3;
                if (!(!(var1 <= var0))) {
                    _fun28018_ip = 37;
                    continue _fun28018
                }
            case 22:
                var0 = _closure1_slot3;
                var0 = var0.LIGHT;
                _fun28018_ip = 50;
                continue _fun28018;
            case 37:
                var1 = _closure1_slot3;
                var0 = var1.DARK;
            case 50:
                return var0;
        }
    };
    var2.getThemeForColor = var3;
    var3 = function arg0() {
        var0 = arg0;
        var5 = var0.angle;
        var2 = var0.colors;
        var1 = var2.map;
        var0 = function(arg0) { // Environment: var0
            var0 = arg0;
            var3 = var0.token;
            var7 = var0.stop;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.unsafe_getResolvedRawColor;
            var0 = {};
            var4 = 1;
            var0.saturation = var4;
            var9 = var1.bind(var2)(var3, var0);
            var0 = global;
            var0 = var0.HermesInternal;
            var3 = var0.concat;
            var10 = '';
            var8 = ' ';
            var6 = '%';
            var0 = var10[var3](var9, var8, var7, var6, var5);
            return var0;
        };
        var2 = var1.bind(var2)(var0);
        var1 = var2.join;
        var0 = ', ';
        var7 = var1.bind(var2)(var0);
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var10 = 'linear-gradient(';
        var8 = 'deg, ';
        var6 = ')';
        var9 = var5;
        var0 = var10[var3](var9, var8, var7, var6, var5);
        return var0;
    };
    var2.getLinearGradientForBackgroundGradient = var3;
    var3 = function arg0, arg1() {
        _fun28021: for (var _fun28021_ip = 0;;) switch (_fun28021_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = var5 === var4;
                if (var0) {
                    _fun28021_ip = 87;
                    continue _fun28021
                }
            case 13:
                var1 = _closure1_slot3;
                var1 = var1.DARK;
                var1 = var5 === var1;
                if (!var1) {
                    _fun28021_ip = 47;
                    continue _fun28021
                }
            case 33:
                var2 = _closure1_slot3;
                var2 = var2.DARKER;
                var1 = var4 === var2;
            case 47:
                if (var1) {
                    _fun28021_ip = 84;
                    continue _fun28021
                }
            case 50:
                var2 = _closure1_slot3;
                var2 = var2.DARKER;
                var2 = var5 === var2;
                if (!var2) {
                    _fun28021_ip = 81;
                    continue _fun28021
                }
            case 67:
                var3 = _closure1_slot3;
                var3 = var3.DARK;
                var2 = var4 === var3;
            case 81:
                var1 = var2;
            case 84:
                var0 = var1;
            case 87:
                return var0;
        }
    };
    var2.areThemesEqualForGradientThemes = var3;
    var1 = function(arg0) { // Environment: var1
        var1 = _closure1_slot2;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var2.getBaseTheme = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3189, 483, 808, 2]);