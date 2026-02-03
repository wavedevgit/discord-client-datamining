// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var1, var0, var2);
    var0 = function arg0() {
        _fun64810: for (var _fun64810_ip = 0;;) switch (_fun64810_ip) {
            case 0:
                var3 = arg0;
                var1 = 'string';
                var0 = typeof var3;
                if (!(var1 === var0)) {
                    _fun64810_ip = 78;
                    continue _fun64810
                }
            case 14:
                var2 = var3.replace;
                var1 = /[|\\{}()[\]^$+*?.]/g;
                var0 = '\\$&';
                var3 = var2.bind(var3)(var1, var0);
                var2 = var3.replace;
                var1 = /-/g;
                var0 = '\\x2d';
                var0 = var2.bind(var3)(var1, var0);
                return var0;
            case 78:
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
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);