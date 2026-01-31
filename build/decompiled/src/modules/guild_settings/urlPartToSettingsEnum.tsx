// modules/guild_settings/urlPartToSettingsEnum.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/guild_settings/urlPartToSettingsEnum.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0, arg1() {
        _fun29803: for (var _fun29803_ip = 0;;) switch (_fun29803_ip) {
            case 0:
                var1 = arg0;
                var7 = arg1;
                var3 = null;
                var4 = var3 == var7;
                var2 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun29803_ip = 67;
                    continue _fun29803
                }
            case 19:
                var6 = var7.replace;
                var5 = /-/g;
                var4 = '_';
                var5 = var6.bind(var7)(var5, var4);
                var4 = var3 == var5;
                var0 = undefined;
                if (var4) {
                    _fun29803_ip = 67;
                    continue _fun29803
                }
            case 57:
                var4 = var5.toUpperCase;
                var0 = var4.bind(var5)();
            case 67:
                if (!(var3 != var0)) {
                    _fun29803_ip = 78;
                    continue _fun29803
                }
            case 71:
                var3 = var0 in var1;
                if (var3) {
                    _fun29803_ip = 80;
                    continue _fun29803
                }
            case 78:
                return var2;
            case 80:
                var0 = var1[var0];
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);