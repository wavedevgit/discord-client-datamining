// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun8334: for (var _fun8334_ip = 0;;) switch (_fun8334_ip) {
        case 0:
            var3 = require;
            var4 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var4;
            var0 = global;
            var0 = var0.Object;
            var0 = var0.prototype;
            var1 = var0.hasOwnProperty;
            var _closure1_slot2 = var1;
            var0 = var0.propertyIsEnumerable;
            var _closure1_slot3 = var0;
            var1 = 0;
            var5 = var4[var1];
            var0 = undefined;
            var6 = var3.bind(var0)(var5);
            var5 = function() { // Environment: var2
                var0 = undefined;
                var0 = arguments;
                return var0;
            };
            var5 = var5.bind(var0)();
            var5 = var6.bind(var0)(var5);
            if (var5) {
                _fun8334_ip = 86;
                continue _fun8334
            }
        case 79:
            var2 = function(arg0) { // Environment: var2
                _fun8336: for (var _fun8336_ip = 0;;) switch (_fun8336_ip) {
                    case 0:
                        var4 = arg0;
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 1;
                        var0 = var2[var0];
                        var2 = undefined;
                        var0 = var3.bind(var2)(var0);
                        var0 = var0.bind(var2)(var4);
                        if (!var0) {
                            _fun8336_ip = 55;
                            continue _fun8336
                        }
                    case 36:
                        var5 = _closure1_slot2;
                        var3 = var5.call;
                        var2 = 'callee';
                        var0 = var3.bind(var5)(var4, var2);
                    case 55:
                        if (!var0) {
                            _fun8336_ip = 80;
                            continue _fun8336
                        }
                    case 58:
                        var3 = _closure1_slot3;
                        var2 = var3.call;
                        var1 = 'callee';
                        var1 = var2.bind(var3)(var4, var1);
                        var0 = !var1;
                    case 80:
                        return var0;
                }
            };
            _fun8334_ip = 95;
            continue _fun8334;
        case 86:
            var1 = var4[var1];
            var2 = var3.bind(var0)(var1);
        case 95:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [731, 577]);