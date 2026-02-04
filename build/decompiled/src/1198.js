// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var2 = exports;
    var1 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var1;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var1 = var1[var0];
    var0 = undefined;
    var1 = var3.bind(var0)(var1);
    var1 = var1.Appearance;
    var _closure1_slot2 = var1;
    var3 = {
        'accentBackground': 'rgba(88, 74, 192, 1)',
        'accentForeground': '#ffffff',
        'foreground': '#2b2233',
        'background': '#ffffff',
        'border': 'rgba(41, 35, 47, 0.13)',
        'feedbackIcon': 'rgba(54, 45, 89, 1)',
        'sentryLogo': 'rgba(54, 45, 89, 1)'
    };
    var _closure1_slot3 = var3;
    var1 = {
        'accentBackground': 'rgba(88, 74, 192, 1)',
        'accentForeground': '#ffffff',
        'foreground': '#ebe6ef',
        'background': '#29232f',
        'border': 'rgba(235, 230, 239, 0.15)',
        'feedbackIcon': '#ffffff',
        'sentryLogo': '#ffffff'
    };
    var _closure1_slot4 = var1;
    var4 = function() {
        _fun13047: for (var _fun13047_ip = 0;;) switch (_fun13047_ip) {
            case 0:
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var8 = 1;
                var0 = var0[var8];
                var7 = undefined;
                var1 = var1.bind(var7)(var0);
                var0 = var1.getColorScheme;
                var3 = var0.bind(var1)();
                var0 = 'system';
                if (!(var0 === var3)) {
                    _fun13047_ip = 57;
                    continue _fun13047
                }
            case 43:
                var1 = _closure1_slot2;
                var0 = var1.getColorScheme;
                var3 = var0.bind(var1)();
            case 57:
                var9 = global;
                var10 = var9.Object;
                var5 = var10.assign;
                var6 = var9.Object;
                var4 = var6.assign;
                var1 = _closure1_slot3;
                var0 = {};
                var4 = var4.bind(var6)(var0, var1);
                var6 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = var1[var8];
                var11 = var6.bind(var7)(var0);
                var0 = var11.getFeedbackLightTheme;
                var0 = var0.bind(var11)();
                var0 = var5.bind(var10)(var4, var0);
                var5 = var9.Object;
                var4 = var5.assign;
                var11 = var9.Object;
                var10 = var11.assign;
                var9 = _closure1_slot4;
                var2 = {};
                var2 = var10.bind(var11)(var2, var9);
                var1 = var1[var8];
                var6 = var6.bind(var7)(var1);
                var1 = var6.getFeedbackDarkTheme;
                var1 = var1.bind(var6)();
                var1 = var4.bind(var5)(var2, var1);
                var2 = 'dark';
                if (!(var2 === var3)) {
                    _fun13047_ip = 196;
                    continue _fun13047
                }
            case 193:
                var0 = var1;
            case 196:
                return var0;
        }
    };
    var2.getTheme = var4;
    var2.LightTheme = var3;
    var2.DarkTheme = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 1129]);