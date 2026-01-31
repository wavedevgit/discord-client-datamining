// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1() {
        _fun8428: for (var _fun8428_ip = 0;;) switch (_fun8428_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = null;
                var0 = var0 == var6;
                var1 = 0;
                var4 = 0;
                if (var0) {
                    _fun8428_ip = 24;
                    continue _fun8428
                }
            case 19:
                var4 = var6.length;
            case 24:
                var0 = new Array(0);
                var7 = var1 < var4;
                var3 = undefined;
                var2 = 0;
                var1 = 0;
                if (!var7) {
                    _fun8428_ip = 81;
                    continue _fun8428
                }
            case 41:
                var11 = var6[var2];
                var9 = var5.bind(var3)(var11, var2, var6);
                var8 = var2;
                var7 = var1;
                if (!var9) {
                    _fun8428_ip = 71;
                    continue _fun8428
                }
            case 61:
                var10 = parseFloat(var1);
                var7 = var10 + 1;
                var0[var10] = var11;
            case 71:
                var2 = var8 + 1;
                var1 = var7;
                if (var2 < var4) {
                    _fun8428_ip = 41;
                    continue _fun8428
                }
            case 81:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);