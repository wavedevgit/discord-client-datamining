// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = module;
    var1 = function arg0, arg1() {
        _fun45502: for (var _fun45502_ip = 0;;) switch (_fun45502_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var0 = var1 instanceof var0;
                if (var0) {
                    _fun45502_ip = 49;
                    continue _fun45502
                }
            case 13:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = 'Cannot call a class as a function';
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 49:
                var0 = undefined;
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