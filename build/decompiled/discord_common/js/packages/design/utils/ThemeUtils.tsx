// ../discord_common/js/packages/design/utils/ThemeUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 1;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/design/utils/ThemeUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var0 = var0.ThemeTypes;
        var1 = var0.LIGHT;
        var0 = arg0;
        var0 = var0 === var1;
        return var0;
    };
    var2.isThemeLight = var3;
    var1 = function arg0() {
        _fun27280: for (var _fun27280_ip = 0;;) switch (_fun27280_ip) {
            case 0:
                var1 = arg0;
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var4 = 0;
                var2 = var2[var4];
                var3 = undefined;
                var2 = var5.bind(var3)(var2);
                var2 = var2.ThemeTypes;
                var2 = var2.DARK;
                if (!(var2 !== var1)) {
                    _fun27280_ip = 113;
                    continue _fun27280
                }
            case 43:
                var5 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var4];
                var2 = var5.bind(var3)(var2);
                var2 = var2.ThemeTypes;
                var2 = var2.MIDNIGHT;
                if (!(var2 !== var1)) {
                    _fun27280_ip = 113;
                    continue _fun27280
                }
            case 76:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var4];
                var0 = var2.bind(var3)(var0);
                var0 = var0.ThemeTypes;
                var0 = var0.DARKER;
                if (!(var0 !== var1)) {
                    _fun27280_ip = 113;
                    continue _fun27280
                }
            case 109:
                var0 = false;
                return var0;
            case 113:
                var0 = true;
                return var0;
        }
    };
    var2.isThemeDark = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [672, 2]);