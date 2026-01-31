// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var1 = function arg0, arg1() {
        _fun1402: for (var _fun1402_ip = 0;;) switch (_fun1402_ip) {
            case 0:
                var3 = arg0;
                var1 = arg1;
                var0 = null;
                var0 = var0 == var1;
                if (var0) {
                    _fun1402_ip = 24;
                    continue _fun1402
                }
            case 15:
                var2 = var3.length;
                var0 = var1 > var2;
            case 24:
                if (!var0) {
                    _fun1402_ip = 32;
                    continue _fun1402
                }
            case 27:
                var1 = var3.length;
            case 32:
                var0 = global;
                var2 = var0.Array;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun1402_ip = 71;
                    continue _fun1402
                }
            case 56:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun1402_ip = 56;
                    continue _fun1402
                }
            case 71:
                return var0;
        }
    };
    var0.exports = var1;
    var2 = var0.exports;
    var1 = true;
    var2.__esModule = var1;
    var1 = var0.exports;
    var0 = var0.exports;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);