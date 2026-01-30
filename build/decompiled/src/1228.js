// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function(arg0, arg1) { // Original name: invariant, environment: var0
        _fun13512: for (var _fun13512_ip = 0;;) switch (_fun13512_ip) {
            case 0:
                var0 = arg0;
                if (var0) {
                    _fun13512_ip = 42;
                    continue _fun13512
                }
            case 6:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = 'Invariant failed';
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 42:
                var0 = undefined;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);