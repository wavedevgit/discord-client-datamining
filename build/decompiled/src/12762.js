// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun97469: for (var _fun97469_ip = 0;;) switch (_fun97469_ip) {
        case 0:
            var3 = require;
            var4 = dependencyMap;
            var0 = 0;
            var1 = var4[var0];
            var0 = undefined;
            var2 = var3.bind(var0)(var1);
            if (!var2) {
                _fun97469_ip = 48;
                continue _fun97469
            }
        case 22:
            var1 = 1;
            var1 = var4[var1];
            var3 = var3.bind(var0)(var1);
            var1 = function() { // Environment: var1
                var0 = global;
                var5 = var0.Object;
                var4 = var5.defineProperty;
                var1 = 42;
                var3 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var2 = 'prototype';
                var0 = {
                    'value': 42,
                    'writable': false
                };
                var0 = var4.bind(var5)(var3, var2, var0);
                var0 = var0.prototype;
                var0 = var1 !== var0;
                return var0;
            };
            var2 = var3.bind(var0)(var1);
        case 48:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12710, 12711]);