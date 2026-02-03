// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1, arg2() {
        _fun39516: for (var _fun39516_ip = 0;;) switch (_fun39516_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var3 = arg2;
                var0 = null;
                var0 = var0 == var5;
                var2 = 0;
                var1 = 0;
                if (var0) {
                    _fun39516_ip = 27;
                    continue _fun39516
                }
            case 22:
                var1 = var5.length;
            case 27:
                var6 = var2 < var1;
                var0 = undefined;
                var2 = 0;
                if (!var6) {
                    _fun39516_ip = 58;
                    continue _fun39516
                }
            case 38:
                var6 = var5[var2];
                var6 = var3.bind(var0)(var4, var6);
                if (var6) {
                    _fun39516_ip = 62;
                    continue _fun39516
                }
            case 51:
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun39516_ip = 38;
                    continue _fun39516
                }
            case 58:
                var0 = false;
                return var0;
            case 62:
                var0 = true;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);