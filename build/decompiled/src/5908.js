// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = /[|\\{}()[\]^$+*?.-]/g;
    var _closure1_slot0 = var1;
    var1 = function(arg0) { // Environment: var0
        _fun52069: for (var _fun52069_ip = 0;;) switch (_fun52069_ip) {
            case 0:
                var3 = arg0;
                var1 = 'string';
                var0 = typeof var3;
                if (!(var1 === var0)) {
                    _fun52069_ip = 40;
                    continue _fun52069
                }
            case 14:
                var2 = var3.replace;
                var1 = _closure1_slot0;
                var0 = '\\$&';
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 40:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var5 = 'Expected a string';
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);