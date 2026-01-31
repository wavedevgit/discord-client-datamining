// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var2 = function arg0, arg1() {
        _fun1346: for (var _fun1346_ip = 0;;) switch (_fun1346_ip) {
            case 0:
                var0 = arg0;
                var3 = arg1;
                var1 = null;
                if (!(var1 == var0)) {
                    _fun1346_ip = 70;
                    continue _fun1346
                }
            case 12:
                var1 = global;
                var1 = var1.Error;
                var2 = undefined;
                if (!(var2 === var3)) {
                    _fun1346_ip = 36;
                    continue _fun1346
                }
            case 26:
                var2 = 'Got unexpected ';
                var3 = var2 + var0;
            case 36:
                var2 = var1.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var1
                    }
                });
                var5 = var2;
                var4 = var3;
                var1 = new var5[var1](var4, var3);
                var1 = var1 instanceof Object ? var1 : var2;
                var2 = 1;
                var1.framesToPop = var2;
                throw var1;
            case 70:
                return var0;
        }
    };
    var0.exports = var2;
    var1 = var0.exports;
    var1.default = var2;
    var1 = global;
    var4 = var1.Object;
    var3 = var4.defineProperty;
    var2 = var0.exports;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);