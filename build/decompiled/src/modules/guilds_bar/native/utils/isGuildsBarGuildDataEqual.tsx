// modules/guilds_bar/native/utils/isGuildsBarGuildDataEqual.tsx
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
    var1 = 'modules/guilds_bar/native/utils/isGuildsBarGuildDataEqual.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function(arg0, arg1) { // Original name: isGuildsBarGuildDataEqual, environment: var1
        _fun101377: for (var _fun101377_ip = 0;;) switch (_fun101377_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var3 = var2.icon;
                var0 = var1.icon;
                var0 = var3 === var0;
                if (!var0) {
                    _fun101377_ip = 39;
                    continue _fun101377
                }
            case 23:
                var2 = var2.guildName;
                var1 = var1.guildName;
                var0 = var2 === var1;
            case 39:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);