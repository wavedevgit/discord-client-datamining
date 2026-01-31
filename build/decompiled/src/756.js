// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0, arg1) { // Original name: arraySome, environment: var0
        _fun8386: for (var _fun8386_ip = 0;;) switch (_fun8386_ip) {
            case 0:
                var4 = arg0;
                var3 = arg1;
                var0 = null;
                var0 = var0 == var4;
                var2 = 0;
                var1 = 0;
                if (var0) {
                    _fun8386_ip = 24;
                    continue _fun8386
                }
            case 19:
                var1 = var4.length;
            case 24:
                var5 = var2 < var1;
                var0 = undefined;
                var2 = 0;
                if (!var5) {
                    _fun8386_ip = 59;
                    continue _fun8386
                }
            case 35:
                var5 = var4[var2];
                var6 = var3.bind(var0)(var5, var2, var4);
                var5 = var2;
                if (var6) {
                    _fun8386_ip = 63;
                    continue _fun8386
                }
            case 52:
                var2 = var5 + 1;
                if (var2 < var1) {
                    _fun8386_ip = 35;
                    continue _fun8386
                }
            case 59:
                var0 = false;
                return var0;
            case 63:
                var0 = true;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);