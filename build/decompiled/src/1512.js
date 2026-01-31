// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0, arg1) { // Environment: var0
        _fun17250: for (var _fun17250_ip = 0;;) switch (_fun17250_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var0 = {};
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var6 = var2.bind(var3)(var8);
                var2 = var1.Array;
                var1 = var2.isArray;
                var5 = var1.bind(var2)(var7);
                var1 = var6.length;
                var4 = 0;
                var1 = var4 < var1;
                var3 = -1;
                var2 = undefined;
                if (!var1) {
                    _fun17250_ip = 118;
                    continue _fun17250
                }
            case 64:
                var9 = var6[var4];
                var1 = var8[var9];
                if (var5) {
                    _fun17250_ip = 84;
                    continue _fun17250
                }
            case 75:
                var10 = var7.bind(var2)(var9, var1, var8);
                _fun17250_ip = 99;
                continue _fun17250;
            case 84:
                var11 = var7.indexOf;
                var11 = var11.bind(var7)(var9);
                var10 = var3 !== var11;
            case 99:
                if (!var10) {
                    _fun17250_ip = 106;
                    continue _fun17250
                }
            case 102:
                var0[var9] = var1;
            case 106:
                var4 = var4 + 1;
                var1 = var6.length;
                if (var4 < var1) {
                    _fun17250_ip = 64;
                    continue _fun17250
                }
            case 118:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);