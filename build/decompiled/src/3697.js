// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun32909: for (var _fun32909_ip = 0;;) switch (_fun32909_ip) {
        case 0:
            var3 = require;
            var4 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var4;
            var0 = 0;
            var2 = var4[var0];
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            if (var2) {
                _fun32909_ip = 46;
                continue _fun32909
            }
        case 32:
            var2 = 1;
            var2 = var4[var2];
            var2 = var3.bind(var0)(var2);
            _fun32909_ip = 51;
            continue _fun32909;
        case 46:
            var2 = function(arg0, arg1) { // Environment: var1
                var1 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var0 = var5[var0];
                var4 = undefined;
                var3 = var1.bind(var4)(var0);
                var2 = {
                    'configurable': true,
                    'enumerable': false,
                    'value': null,
                    'writable': true
                };
                var0 = 2;
                var0 = var5[var0];
                var1 = var1.bind(var4)(var0);
                var0 = arg1;
                var0 = var1.bind(var4)(var0);
                var2.value = var0;
                var1 = arg0;
                var0 = 'toString';
                var0 = var3.bind(var4)(var1, var0, var2);
                return var0;
            };
        case 51:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [787, 679, 3698]);