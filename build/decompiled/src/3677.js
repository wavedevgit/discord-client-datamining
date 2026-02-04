// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1, arg2, arg3() {
        _fun32679: for (var _fun32679_ip = 0;;) switch (_fun32679_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = arg2;
                var3 = arg3;
                var1 = null;
                var1 = var1 == var6;
                var2 = 0;
                var4 = 0;
                if (var1) {
                    _fun32679_ip = 30;
                    continue _fun32679
                }
            case 25:
                var4 = var6.length;
            case 30:
                if (!var3) {
                    _fun32679_ip = 36;
                    continue _fun32679
                }
            case 33:
                var3 = var4;
            case 36:
                var1 = -1;
                if (!var3) {
                    _fun32679_ip = 51;
                    continue _fun32679
                }
            case 45:
                var0 = var6[var2];
                var1 = 0;
            case 51:
                var3 = var1 + 1;
                var1 = var0;
                var0 = var1;
                if (!(var3 < var4)) {
                    _fun32679_ip = 93;
                    continue _fun32679
                }
            case 64:
                var10 = var6[var3];
                var12 = undefined;
                var11 = var1;
                var9 = var3;
                var8 = var6;
                var1 = var12[var5](var11, var10, var9, var8, var7);
                var3 = var3 + 1;
                var0 = var1;
                if (var3 < var4) {
                    _fun32679_ip = 64;
                    continue _fun32679
                }
            case 93:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);