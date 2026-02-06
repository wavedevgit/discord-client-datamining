// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun96993: for (var _fun96993_ip = 0;;) switch (_fun96993_ip) {
        case 0:
            var2 = require;
            var3 = dependencyMap;
            var0 = 0;
            var1 = var3[var0];
            var0 = undefined;
            var5 = var2.bind(var0)(var1);
            var1 = global;
            var1 = var1.Function;
            var1 = var1.toString;
            var1 = var5.bind(var0)(var1);
            var _closure1_slot0 = var1;
            var1 = 1;
            var1 = var3[var1];
            var6 = var2.bind(var0)(var1);
            var1 = 2;
            var5 = var3[var1];
            var5 = var2.bind(var0)(var5);
            var5 = var5.inspectSource;
            var5 = var6.bind(var0)(var5);
            if (var5) {
                _fun96993_ip = 103;
                continue _fun96993
            }
        case 81:
            var5 = var3[var1];
            var5 = var2.bind(var0)(var5);
            var4 = function(arg0) { // Environment: var4
                var2 = _closure1_slot0;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var5.inspectSource = var4;
        case 103:
            var1 = var3[var1];
            var1 = var2.bind(var0)(var1);
            var2 = var1.inspectSource;
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12668, 12687, 12677]);