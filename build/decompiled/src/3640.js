// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1() {
        _fun32535: for (var _fun32535_ip = 0;;) switch (_fun32535_ip) {
            case 0:
                var3 = arg0;
                var0 = arg1;
                var2 = var3.length;
                if (var0) {
                    _fun32535_ip = 29;
                    continue _fun32535
                }
            case 14:
                var1 = global;
                var4 = var1.Array;
                var1 = undefined;
                var0 = var4.bind(var1)(var2);
            case 29:
                var1 = 0;
                var4 = var1 < var2;
                if (!var4) {
                    _fun32535_ip = 53;
                    continue _fun32535
                }
            case 38:
                var4 = var3[var1];
                var0[var1] = var4;
                var1 = var1 + 1;
                if (var1 < var2) {
                    _fun32535_ip = 38;
                    continue _fun32535
                }
            case 53:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);