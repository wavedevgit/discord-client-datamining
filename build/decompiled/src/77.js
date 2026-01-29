// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var1 = function(arg0, arg1, arg2) { // Original name: _defineProperty, environment: var1
        _fun1466: for (var _fun1466_ip = 0;;) switch (_fun1466_ip) {
            case 0:
                var0 = arg0;
                var5 = arg2;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = arg1;
                var4 = var2.bind(var3)(var1);
                var1 = var4 in var0;
                if (var1) {
                    _fun1466_ip = 51;
                    continue _fun1466
                }
            case 45:
                var0[var4] = var5;
                _fun1466_ip = 87;
                continue _fun1466;
            case 51:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.defineProperty;
                var1 = {
                    'value': null,
                    'enumerable': true,
                    'configurable': true,
                    'writable': true
                };
                var1.value = var5;
                var1 = var2.bind(var3)(var0, var4, var1);
            case 87:
                return var0;
        }
    };
    var0.exports = var1;
    var2 = var0.exports;
    var1 = true;
    var2.__esModule = var1;
    var1 = var0.exports;
    var0 = var0.exports;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [8]);