// modules/guilds_bar/native/utils/isGuildsBarGuildLabelEqual.tsx
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
    var1 = 'modules/guilds_bar/native/utils/isGuildsBarGuildLabelEqual.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0, arg1() {
        _fun100900: for (var _fun100900_ip = 0;;) switch (_fun100900_ip) {
            case 0:
                var3 = arg0;
                var2 = arg1;
                var1 = var3.count;
                var0 = var2.count;
                var0 = var1 === var0;
                if (!var0) {
                    _fun100900_ip = 93;
                    continue _fun100900
                }
            case 25:
                var1 = var3.names;
                var4 = var1.length;
                var1 = var2.names;
                var1 = var1.length;
                var1 = var4 === var1;
                if (!var1) {
                    _fun100900_ip = 90;
                    continue _fun100900
                }
            case 52:
                var4 = var3.names;
                var3 = var4.join;
                var5 = '|';
                var3 = var3.bind(var4)(var5);
                var4 = var2.names;
                var2 = var4.join;
                var2 = var2.bind(var4)(var5);
                var1 = var3 === var2;
            case 90:
                var0 = var1;
            case 93:
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);