// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = function arg0() {
        _fun38028: for (var _fun38028_ip = 0;;) switch (_fun38028_ip) {
            case 0:
                var0 = arg0;
                var1 = this;
                var2 = 'MetadataMissingError';
                var1.name = var2;
                if (var0) {
                    _fun38028_ip = 25;
                    continue _fun38028
                }
            case 19:
                var0 = 'No Exif data';
            case 25:
                var1.message = var0;
                var0 = global;
                var0 = var0.Error;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var3 = var2;
                var0 = new var3[var0](var2);
                var0 = var0 instanceof Object ? var0 : var2;
                var0 = var0.stack;
                var1.stack = var0;
                var0 = undefined;
                return var0;
        }
    };
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var0 = var0.Error;
    var3 = var0.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var0
        }
    });
    var10 = var3;
    var0 = new var10[var0](var9);
    var0 = var0 instanceof Object ? var0 : var3;
    var2.prototype = var0;
    var0 = {};
    var0.MetadataMissingError = var2;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);