// modules/themes/getSystemTheme.native.tsx
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
    var3 = var3.Appearance;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SystemTheme;
    var _closure1_slot1 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/themes/getSystemTheme.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: getSystemTheme, environment: var1
        _fun27535: for (var _fun27535_ip = 0;;) switch (_fun27535_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = var2.getColorScheme;
                var2 = var1.bind(var2)();
                var1 = 'light';
                if (!(var1 !== var2)) {
                    _fun27535_ip = 57;
                    continue _fun27535
                }
            case 25:
                var1 = 'dark';
                if (!(var1 !== var2)) {
                    _fun27535_ip = 45;
                    continue _fun27535
                }
            case 33:
                var1 = _closure1_slot1;
                var1 = var1.NO_PREFERENCE;
                return var1;
            case 45:
                var1 = _closure1_slot1;
                var1 = var1.DARK;
                return var1;
            case 57:
                var0 = _closure1_slot1;
                var0 = var0.LIGHT;
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 3157, 2]);