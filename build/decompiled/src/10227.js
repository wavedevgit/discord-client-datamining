// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1, arg2, arg3() {
        _fun80397: for (var _fun80397_ip = 0;;) switch (_fun80397_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var4 = arg2;
                var0 = arg3;
                var1 = null;
                var1 = var1 == var6;
                var3 = 0;
                var2 = 0;
                if (var1) {
                    _fun80397_ip = 30;
                    continue _fun80397
                }
            case 25:
                var2 = var6.length;
            case 30:
                var7 = var3 < var2;
                var1 = undefined;
                var3 = 0;
                if (!var7) {
                    _fun80397_ip = 72;
                    continue _fun80397
                }
            case 41:
                var8 = var6[var3];
                var10 = var4.bind(var1)(var8);
                var13 = undefined;
                var12 = var0;
                var11 = var8;
                var9 = var6;
                var7 = var13[var5](var12, var11, var10, var9, var8);
                var3 = var3 + 1;
                if (var3 < var2) {
                    _fun80397_ip = 41;
                    continue _fun80397
                }
            case 72:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);