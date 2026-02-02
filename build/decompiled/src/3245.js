// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0() {
        _fun28121: for (var _fun28121_ip = 0;;) switch (_fun28121_ip) {
            case 0:
                var5 = arg0;
                var0 = null;
                var0 = var0 == var5;
                var4 = 0;
                var3 = 0;
                if (var0) {
                    _fun28121_ip = 21;
                    continue _fun28121
                }
            case 16:
                var3 = var5.length;
            case 21:
                var0 = {};
                var6 = var4 < var3;
                var2 = 1;
                var1 = 0;
                if (!var6) {
                    _fun28121_ip = 58;
                    continue _fun28121
                }
            case 35:
                var6 = var5[var1];
                var7 = var6[var4];
                var6 = var6[var2];
                var0[var7] = var6;
                var1 = var1 + 1;
                if (var1 < var3) {
                    _fun28121_ip = 35;
                    continue _fun28121
                }
            case 58:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);