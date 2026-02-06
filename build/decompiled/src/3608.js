// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1, arg2, arg3() {
        _fun31829: for (var _fun31829_ip = 0;;) switch (_fun31829_ip) {
            case 0:
                var8 = arg0;
                var7 = arg1;
                var6 = arg3;
                var5 = var8.length;
                var1 = -1;
                var2 = var1;
                if (!var6) {
                    _fun31829_ip = 29;
                    continue _fun31829
                }
            case 26:
                var2 = 1;
            case 29:
                var0 = arg2;
                var2 = var0 + var2;
                if (var6) {
                    _fun31829_ip = 48;
                    continue _fun31829
                }
            case 39:
                var4 = var2 + 1;
                var0 = var4 < var5;
                _fun31829_ip = 57;
                continue _fun31829;
            case 48:
                var2 = parseFloat(var2);
                var4 = var2 - 1;
                var0 = var2;
            case 57:
                var3 = undefined;
                if (!var0) {
                    _fun31829_ip = 103;
                    continue _fun31829
                }
            case 62:
                var0 = var8[var4];
                var2 = var7.bind(var3)(var0, var4, var8);
                var0 = var4;
                if (var2) {
                    _fun31829_ip = 105;
                    continue _fun31829
                }
            case 79:
                if (var6) {
                    _fun31829_ip = 91;
                    continue _fun31829
                }
            case 82:
                var4 = var0 + 1;
                var2 = var4 < var5;
                _fun31829_ip = 100;
                continue _fun31829;
            case 91:
                var9 = parseFloat(var0);
                var4 = var9 - 1;
                var2 = var9;
            case 100:
                if (var2) {
                    _fun31829_ip = 62;
                    continue _fun31829
                }
            case 103:
                return var1;
            case 105:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);