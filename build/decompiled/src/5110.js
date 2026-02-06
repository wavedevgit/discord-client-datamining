// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var1 = function arg0, arg1() {
        _fun45674: for (var _fun45674_ip = 0;;) switch (_fun45674_ip) {
            case 0:
                var0 = arg1;
                if (!var0) {
                    _fun45674_ip = 59;
                    continue _fun45674
                }
            case 6:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.default;
                var2 = var1.bind(var2)(var0);
                var1 = 'object';
                if (!(var1 != var2)) {
                    _fun45674_ip = 134;
                    continue _fun45674
                }
            case 48:
                var2 = 'function';
                var1 = typeof var0;
                if (!(var2 !== var1)) {
                    _fun45674_ip = 134;
                    continue _fun45674
                }
            case 59:
                var3 = undefined;
                if (!(var3 === var0)) {
                    _fun45674_ip = 98;
                    continue _fun45674
                }
            case 65:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var2 = var2.bind(var3)(var1);
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                return var1;
            case 98:
                var1 = global;
                var3 = var1.TypeError;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var5 = 'Derived constructors may only return object or undefined';
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 134:
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5109, 5111]);