// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = exports;
    var1 = global;
    var4 = var1.Object;
    var3 = var4.defineProperty;
    var2 = {};
    var1 = true;
    var2.value = var1;
    var1 = '__esModule';
    var1 = var3.bind(var4)(var0, var1, var2);
    var1 = function arg0, arg1() {
        _fun21966: for (var _fun21966_ip = 0;;) switch (_fun21966_ip) {
            case 0:
                var4 = arg0;
                var1 = arg1;
                var0 = var1.length;
                if (!(!(var0 < var4))) {
                    _fun21966_ip = 19;
                    continue _fun21966
                }
            case 15:
                var0 = undefined;
                return var0;
            case 19:
                var0 = global;
                var2 = var0.TypeError;
                var0 = ' argument';
                var3 = var4 + var0;
                var0 = 1;
                var4 = var4 > var0;
                var0 = '';
                if (!var4) {
                    _fun21966_ip = 55;
                    continue _fun21966
                }
            case 51:
                var0 = 's';
            case 55:
                var1 = var1.length;
                var3 = var3 + var0;
                var0 = ' required, but only ';
                var0 = var3 + var0;
                var3 = var0 + var1;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var0 = ' present';
                var5 = var3 + var0;
                var6 = var1;
                var0 = new var6[var2](var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0.default = var1;
    var1 = var0.default;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);