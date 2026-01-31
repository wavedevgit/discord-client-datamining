// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var1 = function arg0, arg1() {
        _fun1566: for (var _fun1566_ip = 0;;) switch (_fun1566_ip) {
            case 0:
                var0 = arg0;
                var1 = {};
                var3 = var1.hasOwnProperty;
                var2 = var3.call;
                var1 = arg1;
                var1 = var2.bind(var3)(var0, var1);
                if (var1) {
                    _fun1566_ip = 64;
                    continue _fun1566
                }
            case 28:
                var1 = global;
                var3 = var1.TypeError;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var5 = 'attempted to use private field on non-instance';
                var6 = var2;
                var1 = new var6[var3](var5, var4);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 64:
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