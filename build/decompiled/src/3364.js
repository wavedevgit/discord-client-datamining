// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function() {
        _fun29059: for (var _fun29059_ip = 0;;) switch (_fun29059_ip) {
            case 0:
                var0 = global;
                var1 = var0.Promise;
                var2 = 'function';
                var1 = typeof var1;
                if (!(var2 === var1)) {
                    _fun29059_ip = 22;
                    continue _fun29059
                }
            case 18:
                var1 = undefined;
                return var1;
            case 22:
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = '`Promise.allSettled` requires a global `Promise` be available.';
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);