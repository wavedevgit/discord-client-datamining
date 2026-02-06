// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1, arg2() {
        _fun68725: for (var _fun68725_ip = 0;;) switch (_fun68725_ip) {
            case 0:
                var4 = arg0;
                var6 = arg1;
                var5 = arg2;
                var1 = var4.length;
                var3 = 0;
                var0 = var6;
                if (!(var0 < var3)) {
                    _fun68725_ip = 42;
                    continue _fun68725
                }
            case 23:
                var2 = -var6;
                var7 = var2 > var1;
                var2 = 0;
                if (var7) {
                    _fun68725_ip = 39;
                    continue _fun68725
                }
            case 35:
                var2 = var1 + var6;
            case 39:
                var0 = var2;
            case 42:
                if (!(var5 > var1)) {
                    _fun68725_ip = 49;
                    continue _fun68725
                }
            case 46:
                var5 = var1;
            case 49:
                var2 = var5;
                if (!(var2 < var3)) {
                    _fun68725_ip = 60;
                    continue _fun68725
                }
            case 56:
                var2 = var5 + var1;
            case 60:
                var5 = var0 > var2;
                var1 = 0;
                if (var5) {
                    _fun68725_ip = 77;
                    continue _fun68725
                }
            case 69:
                var2 = var2 - var0;
                var1 = var2 >>> var3;
            case 77:
                var2 = var0 >>> var3;
                var0 = global;
                var5 = var0.Array;
                var0 = undefined;
                var0 = var5.bind(var0)(var1);
                var3 = 0;
                if (!(var3 < var1)) {
                    _fun68725_ip = 121;
                    continue _fun68725
                }
            case 102:
                var5 = var3 + var2;
                var5 = var4[var5];
                var0[var3] = var5;
                var3 = var3 + 1;
                if (var3 < var1) {
                    _fun68725_ip = 102;
                    continue _fun68725
                }
            case 121:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);