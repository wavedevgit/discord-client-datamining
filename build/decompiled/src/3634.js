// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0, arg1) { // Original name: arrayEach, environment: var0
        _fun32492: for (var _fun32492_ip = 0;;) switch (_fun32492_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var1 = null;
                var1 = var1 == var0;
                var2 = 0;
                var5 = 0;
                if (var1) {
                    _fun32492_ip = 24;
                    continue _fun32492
                }
            case 19:
                var5 = var0.length;
            case 24:
                if (!(var2 < var5)) {
                    _fun32492_ip = 74;
                    continue _fun32492
                }
            case 28:
                var1 = var0[var2];
                var4 = undefined;
                var1 = var6.bind(var4)(var1, var2, var0);
                var3 = false;
                var2 = 0;
                if (!(var3 !== var1)) {
                    _fun32492_ip = 74;
                    continue _fun32492
                }
            case 49:
                var7 = var2 + 1;
                if (!(var7 < var5)) {
                    _fun32492_ip = 74;
                    continue _fun32492
                }
            case 56:
                var1 = var0[var7];
                var1 = var6.bind(var4)(var1, var7, var0);
                var2 = var7;
                if (var3 !== var1) {
                    _fun32492_ip = 49;
                    continue _fun32492
                }
            case 74:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);