// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0) { // Original name: compact, environment: var0
        _fun87535: for (var _fun87535_ip = 0;;) switch (_fun87535_ip) {
            case 0:
                var4 = arg0;
                var0 = null;
                var0 = var0 == var4;
                var1 = 0;
                var3 = 0;
                if (var0) {
                    _fun87535_ip = 21;
                    continue _fun87535
                }
            case 16:
                var3 = var4.length;
            case 21:
                var0 = new Array(0);
                var5 = var1 < var3;
                var2 = 0;
                var1 = 0;
                if (!var5) {
                    _fun87535_ip = 66;
                    continue _fun87535
                }
            case 36:
                var8 = var4[var2];
                var5 = var1;
                if (!var8) {
                    _fun87535_ip = 56;
                    continue _fun87535
                }
            case 46:
                var7 = parseFloat(var1);
                var5 = var7 + 1;
                var0[var7] = var8;
            case 56:
                var2 = var2 + 1;
                var1 = var5;
                if (var2 < var3) {
                    _fun87535_ip = 36;
                    continue _fun87535
                }
            case 66:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);