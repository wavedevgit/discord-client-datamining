// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function() {
        _fun1272: for (var _fun1272_ip = 0;;) switch (_fun1272_ip) {
            case 0:
                var3 = undefined;
                var2 = arguments.length;
                var0 = global;
                var0 = var0.Array;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var6 = var1;
                var5 = var2;
                var0 = new var6[var0](var5, var4);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = 0;
                var4 = var0 < var2;
                if (!var4) {
                    _fun1272_ip = 60;
                    continue _fun1272
                }
            case 45:
                var4 = arguments[var0];
                var1[var0] = var4;
                var0 = var0 + 1;
                if (var0 < var2) {
                    _fun1272_ip = 45;
                    continue _fun1272
                }
            case 60:
                var0 = {};
                var0.resource_paths = var1;
                return var0;
        }
    };
    var1.PlatformColor = var2;
    var2 = function arg0() {
        _fun1273: for (var _fun1273_ip = 0;;) switch (_fun1273_ip) {
            case 0:
                var1 = arg0;
                var0 = 'resource_paths';
                var2 = var0 in var1;
                var0 = null;
                if (!var2) {
                    _fun1273_ip = 19;
                    continue _fun1273
                }
            case 16:
                var0 = var1;
            case 19:
                return var0;
        }
    };
    var1.normalizeColorObject = var2;
    var0 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var1.processColorObject = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);