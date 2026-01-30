// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var0 = function(arg0, arg1, arg2) { // Original name: lowerBound, environment: var0
        _fun114325: for (var _fun114325_ip = 0;;) switch (_fun114325_ip) {
            case 0:
                var9 = arg0;
                var8 = arg1;
                var7 = arg2;
                var6 = var9.length;
                var5 = 0;
                var10 = var6 > var5;
                var4 = 1;
                var3 = 2;
                var2 = undefined;
                var1 = 0;
                var0 = 0;
                if (!var10) {
                    _fun114325_ip = 84;
                    continue _fun114325
                }
            case 35:
                var10 = var6 / var3;
                var11 = var10 | 0;
                var12 = var1 + var11;
                var10 = var9[var12];
                var13 = var7.bind(var2)(var10, var8);
                var10 = var11;
                if (!(var13 <= var5)) {
                    _fun114325_ip = 74;
                    continue _fun114325
                }
            case 63:
                var1 = var12 + 1;
                var11 = var11 + var4;
                var10 = var6 - var11;
            case 74:
                var6 = var10;
                var0 = var1;
                if (var6 > var5) {
                    _fun114325_ip = 35;
                    continue _fun114325
                }
            case 84:
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);