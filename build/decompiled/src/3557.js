// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var5 = dependencyMap;
    var2 = function arg0() {
        _fun31726: for (var _fun31726_ip = 0;;) switch (_fun31726_ip) {
            case 0:
                var5 = arg0;
                var4 = this;
                var0 = null;
                var0 = var0 == var5;
                var3 = 0;
                var2 = 0;
                if (var0) {
                    _fun31726_ip = 23;
                    continue _fun31726
                }
            case 18:
                var2 = var5.length;
            case 23:
                var0 = var4.clear;
                var0 = var0.bind(var4)();
                var6 = var3 < var2;
                var1 = 1;
                var0 = 0;
                if (!var6) {
                    _fun31726_ip = 75;
                    continue _fun31726
                }
            case 45:
                var6 = var5[var0];
                var8 = var4.set;
                var7 = var6[var3];
                var6 = var6[var1];
                var6 = var8.bind(var4)(var7, var6);
                var0 = var0 + 1;
                if (var0 < var2) {
                    _fun31726_ip = 45;
                    continue _fun31726
                }
            case 75:
                var0 = undefined;
                return var0;
        }
    };
    var3 = var2.prototype;
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var3.clear = var1;
    var3 = var2.prototype;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3.delete = var1;
    var3 = var2.prototype;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3.get = var1;
    var3 = var2.prototype;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3.has = var1;
    var3 = var2.prototype;
    var1 = 4;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var3.set = var1;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3558, 3559, 3561, 3562, 3563]);