// modules/links/getLocalizedLink.tsx
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
    var3 = 'modules/links/getLocalizedLink.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun24651: for (var _fun24651_ip = 0;;) switch (_fun24651_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var1);
                var0 = var0.intl;
                var1 = var0.currentLocale;
                var0 = var1.toLowerCase;
                var1 = var0.bind(var1)();
                var0 = var1 in var2;
                if (var0) {
                    _fun24651_ip = 62;
                    continue _fun24651
                }
            case 55:
                var0 = var2.default;
                _fun24651_ip = 66;
                continue _fun24651;
            case 62:
                var0 = var2[var1];
            case 66:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 2]);