// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = global;
    var2 = var1.String;
    var _closure1_slot2 = var2;
    var1 = var1.TypeError;
    var _closure1_slot3 = var1;
    var1 = function(arg0) { // Environment: var0
        _fun96966: for (var _fun96966_ip = 0;;) switch (_fun96966_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 0;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var3 = var3.bind(var2)(var0);
                if (var3) {
                    _fun96966_ip = 80;
                    continue _fun96966
                }
            case 35:
                var3 = _closure1_slot3;
                var1 = _closure1_slot2;
                var2 = var1.bind(var2)(var0);
                var1 = ' is not an object';
                var5 = var2 + var1;
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 80:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12683]);