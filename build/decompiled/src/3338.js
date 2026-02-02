// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0() {
        _fun28900: for (var _fun28900_ip = 0;;) switch (_fun28900_ip) {
            case 0:
                var3 = arg0;
                var5 = undefined;
                var4 = undefined;
                var0 = null;
                if (!(var0 != var3)) {
                    _fun28900_ip = 15;
                    continue _fun28900
                }
            case 13:
                return var3;
            case 15:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var1 = 0;
                var0 = var0[var1];
                var2 = var2.bind(var5)(var0);
                var0 = arguments.length;
                var0 = var0 > var1;
                if (!var0) {
                    _fun28900_ip = 54;
                    continue _fun28900
                }
            case 47:
                var1 = 1;
                var0 = arguments[var1];
            case 54:
                if (var0) {
                    _fun28900_ip = 67;
                    continue _fun28900
                }
            case 57:
                var1 = 'Cannot call method on ';
                var0 = var1 + var3;
            case 67:
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var1;
                var6 = var0;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [518]);