// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var2 = function(arg0) { // Original name: SetCache, environment: var0
        _fun31586: for (var _fun31586_ip = 0;;) switch (_fun31586_ip) {
            case 0:
                var4 = arg0;
                var3 = this;
                var0 = null;
                var0 = var0 == var4;
                var2 = 0;
                var1 = 0;
                if (var0) {
                    _fun31586_ip = 23;
                    continue _fun31586
                }
            case 18:
                var1 = var4.length;
            case 23:
                var6 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = var0[var2];
                var0 = undefined;
                var5 = var6.bind(var0)(var5);
                var6 = var5.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var5
                    }
                });
                var8 = var6;
                var5 = new var8[var5](var7);
                var5 = var5 instanceof Object ? var5 : var6;
                var3.__data__ = var5;
                var5 = var2 < var1;
                var2 = 0;
                if (!var5) {
                    _fun31586_ip = 101;
                    continue _fun31586
                }
            case 80:
                var6 = var3.add;
                var5 = var4[var2];
                var5 = var6.bind(var3)(var5);
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun31586_ip = 80;
                    continue _fun31586
                }
            case 101:
                return var0;
        }
    };
    var3 = var2.prototype;
    var6 = var2.prototype;
    var0 = 1;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var6.push = var1;
    var3.add = var1;
    var3 = var2.prototype;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3.has = var1;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3504, 3545, 3546]);