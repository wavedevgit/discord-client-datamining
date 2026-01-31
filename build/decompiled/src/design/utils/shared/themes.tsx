// design/utils/shared/themes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var3 = var3.ThemeTypes;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/utils/shared/themes.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: isThemeLight, environment: var1
        var0 = _closure1_slot0;
        var1 = var0.LIGHT;
        var0 = arg0;
        var0 = var0 === var1;
        return var0;
    };
    var2.isThemeLight = var3;
    var1 = function(arg0) { // Original name: isThemeDark, environment: var1
        _fun27238: for (var _fun27238_ip = 0;;) switch (_fun27238_ip) {
            case 0:
                var1 = arg0;
                var2 = _closure1_slot0;
                var2 = var2.DARK;
                if (!(var2 !== var1)) {
                    _fun27238_ip = 52;
                    continue _fun27238
                }
            case 20:
                var2 = _closure1_slot0;
                var2 = var2.MIDNIGHT;
                if (!(var2 !== var1)) {
                    _fun27238_ip = 52;
                    continue _fun27238
                }
            case 34:
                var0 = _closure1_slot0;
                var0 = var0.DARKER;
                if (!(var0 !== var1)) {
                    _fun27238_ip = 52;
                    continue _fun27238
                }
            case 48:
                var0 = false;
                return var0;
            case 52:
                var0 = true;
                return var0;
        }
    };
    var2.isThemeDark = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [483, 2]);