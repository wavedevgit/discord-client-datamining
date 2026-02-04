// ../discord_common/js/packages/i18n/getSystemLocale.tsx
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
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/i18n/getSystemLocale.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        _fun7340: for (var _fun7340_ip = 0;;) switch (_fun7340_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var3 = var2.Platform;
                var4 = var3.OS;
                var3 = 'android';
                if (!(var3 !== var4)) {
                    _fun7340_ip = 58;
                    continue _fun7340
                }
            case 44:
                var2 = var2.NativeModules;
                var3 = var2.LocalizationManager;
                _fun7340_ip = 83;
                continue _fun7340;
            case 58:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var0 = var2.bind(var1)(var0);
                var3 = var0.default;
            case 83:
                var0 = null;
                var2 = var0 != var3;
                var1 = undefined;
                if (!var2) {
                    _fun7340_ip = 110;
                    continue _fun7340
                }
            case 94:
                var2 = var3.getConstants;
                var2 = var2.bind(var3)();
                var1 = var2.Language;
            case 110:
                var2 = var0 != var1;
                var0 = '';
                if (!var2) {
                    _fun7340_ip = 124;
                    continue _fun7340
                }
            case 121:
                var0 = var1;
            case 124:
                return var0;
        }
    };
    var2.getSystemLocale = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 651, 2]);