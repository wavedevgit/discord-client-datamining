// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1, arg2() {
        _fun94052: for (var _fun94052_ip = 0;;) switch (_fun94052_ip) {
            case 0:
                var4 = arg2;
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var3 = var5[var0];
                var1 = undefined;
                var7 = var2.bind(var1)(var3);
                var3 = var7.prototype;
                var6 = Object.create(var3, {
                    constructor: {
                        value: var7
                    }
                });
                var9 = arg0;
                var10 = var6;
                var8 = var4;
                var3 = new var10[var7](var9, var8, var7);
                var3 = var3 instanceof Object ? var3 : var6;
                var0 = var5[var0];
                var2 = var2.bind(var1)(var0);
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var9 = arg1;
                var10 = var1;
                var8 = var4;
                var0 = new var10[var2](var9, var8, var7);
                var2 = var0 instanceof Object ? var0 : var1;
                var0 = var3.compare;
                var0 = var0.bind(var3)(var2);
                if (var0) {
                    _fun94052_ip = 113;
                    continue _fun94052
                }
            case 102:
                var1 = var3.compareBuild;
                var0 = var1.bind(var3)(var2);
            case 113:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12254]);