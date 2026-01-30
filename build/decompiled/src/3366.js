// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun28958: for (var _fun28958_ip = 0;;) switch (_fun28958_ip) {
        case 0:
            var5 = require;
            var6 = dependencyMap;
            var0 = 0;
            var2 = var6[var0];
            var0 = undefined;
            var3 = var5.bind(var0)(var2);
            var2 = '%Array%';
            var2 = var3.bind(var0)(var2);
            var3 = var2.isArray;
            var3 = !var3;
            if (!var3) {
                _fun28958_ip = 64;
                continue _fun28958
            }
        case 41:
            var4 = 1;
            var4 = var6[var4];
            var5 = var5.bind(var0)(var4);
            var4 = 'Object.prototype.toString';
            var3 = var5.bind(var0)(var4);
        case 64:
            var _closure1_slot0 = var3;
            var2 = var2.isArray;
            if (var2) {
                _fun28958_ip = 81;
                continue _fun28958
            }
        case 76:
            var2 = function(arg0) { // Original name: IsArray, environment: var1
                var2 = _closure1_slot0;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = '[object Array]';
                var0 = var0 === var1;
                return var0;
            };
        case 81:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [517, 551]);