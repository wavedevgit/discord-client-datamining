// modules/guild_sidebar/showChannelBadge.tsx
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
    var1 = 'modules/guild_sidebar/showChannelBadge.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        _fun102636: for (var _fun102636_ip = 0;;) switch (_fun102636_ip) {
            case 0:
                var0 = arg0;
                var6 = var0.mentionsCount;
                var1 = var0.isNewChannel;
                var3 = var0.postsWithUnreadsCount;
                var4 = var0.muted;
                var2 = null;
                var0 = var2 != var6;
                if (!var0) {
                    _fun102636_ip = 42;
                    continue _fun102636
                }
            case 36:
                var5 = 0;
                var0 = var6 > var5;
            case 42:
                if (var0) {
                    _fun102636_ip = 48;
                    continue _fun102636
                }
            case 45:
                var0 = var1;
            case 48:
                if (var0) {
                    _fun102636_ip = 80;
                    continue _fun102636
                }
            case 51:
                var1 = var2 != var4;
                if (!var1) {
                    _fun102636_ip = 61;
                    continue _fun102636
                }
            case 58:
                var1 = !var4;
            case 61:
                if (!var1) {
                    _fun102636_ip = 68;
                    continue _fun102636
                }
            case 64:
                var1 = var2 != var3;
            case 68:
                if (!var1) {
                    _fun102636_ip = 77;
                    continue _fun102636
                }
            case 71:
                var2 = 0;
                var1 = var3 > var2;
            case 77:
                var0 = var1;
            case 80:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);