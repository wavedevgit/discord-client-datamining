// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1() {
        _fun8330: for (var _fun8330_ip = 0;;) switch (_fun8330_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var0 = null;
                var0 = var0 == var5;
                var3 = 0;
                var1 = 0;
                if (var0) {
                    _fun8330_ip = 24;
                    continue _fun8330
                }
            case 19:
                var1 = var5.length;
            case 24:
                var0 = global;
                var0 = var0.Array;
                var2 = undefined;
                var0 = var0.bind(var2)(var1);
                var6 = var3 < var1;
                var3 = 0;
                if (!var6) {
                    _fun8330_ip = 70;
                    continue _fun8330
                }
            case 48:
                var6 = var5[var3];
                var6 = var4.bind(var2)(var6, var3, var5);
                var0[var3] = var6;
                var3 = var3 + 1;
                if (var3 < var1) {
                    _fun8330_ip = 48;
                    continue _fun8330
                }
            case 70:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);