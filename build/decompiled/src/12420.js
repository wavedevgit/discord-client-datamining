// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1, arg2, arg3() {
        _fun94830: for (var _fun94830_ip = 0;;) switch (_fun94830_ip) {
            case 0:
                var0 = arg0;
                var10 = arg1;
                var9 = arg2;
                var8 = arg3;
                var3 = 65535;
                var4 = var3 & var0;
                var2 = 16;
                var0 = var0 >>> var2;
                var3 = var0 & var3;
                var7 = 65521;
                var6 = 0;
                var5 = 2000;
                var1 = var4;
                var0 = var3;
                if (!(var6 !== var9)) {
                    _fun94830_ip = 134;
                    continue _fun94830
                }
            case 57:
                var11 = var9 > var5;
                var14 = var5;
                if (var11) {
                    _fun94830_ip = 70;
                    continue _fun94830
                }
            case 67:
                var14 = var9;
            case 70:
                var9 = var9 - var14;
            case 74:
                var11 = parseFloat(var8);
                var13 = var11 + 1;
                var11 = var10[var11];
                var11 = var4 + var11;
                var12 = var11 | 0;
                var11 = var3 + var12;
                var11 = var11 | 0;
                var14 = var14 - 1;
                var8 = var13;
                var4 = var12;
                var3 = var11;
                if (var14) {
                    _fun94830_ip = 74;
                    continue _fun94830
                }
            case 113:
                var4 = var12 % var7;
                var3 = var11 % var7;
                var8 = var13;
                var1 = var4;
                var0 = var3;
                if (var6 !== var9) {
                    _fun94830_ip = 57;
                    continue _fun94830
                }
            case 134:
                var0 = var0 << var2;
                var0 = var1 | var0;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);