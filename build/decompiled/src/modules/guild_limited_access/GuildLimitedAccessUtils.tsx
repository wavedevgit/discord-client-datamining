// modules/guild_limited_access/GuildLimitedAccessUtils.tsx
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
    var3 = var3.AbortCodes;
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_limited_access/GuildLimitedAccessUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun112314: for (var _fun112314_ip = 0;;) switch (_fun112314_ip) {
            case 0:
                var2 = arg1;
                var1 = 403;
                var0 = arg0;
                var0 = var1 === var0;
                if (!var0) {
                    _fun112314_ip = 25;
                    continue _fun112314
                }
            case 19:
                var1 = null;
                var0 = var1 != var2;
            case 25:
                if (!var0) {
                    _fun112314_ip = 45;
                    continue _fun112314
                }
            case 28:
                var1 = _closure1_slot0;
                var1 = var1.GUILD_LIMITED_ACCESS_DEFAULT;
                var0 = var2 >= var1;
            case 45:
                if (!var0) {
                    _fun112314_ip = 65;
                    continue _fun112314
                }
            case 48:
                var1 = _closure1_slot0;
                var1 = var1.GUILD_LIMITED_ACCESS_MAX;
                var0 = var2 <= var1;
            case 65:
                return var0;
        }
    };
    var2.isLimitedAccessErrorCode = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 2]);