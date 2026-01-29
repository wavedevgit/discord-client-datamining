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
    var0 = function() { // Original name: logError, environment: var0
        _fun6005: for (var _fun6005_ip = 0;;) switch (_fun6005_ip) {
            case 0:
                var0 = undefined;
                var6 = undefined;
                var5 = arguments.length;
                var2 = global;
                var1 = var2.Array;
                var3 = var1.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var1
                    }
                });
                var10 = var3;
                var9 = var5;
                var1 = new var10[var1](var9, var8);
                var3 = var1 instanceof Object ? var1 : var3;
                var1 = 0;
                var7 = var1 < var5;
                var4 = 0;
                if (!var7) {
                    _fun6005_ip = 64;
                    continue _fun6005
                }
            case 49:
                var7 = arguments[var4];
                var3[var4] = var7;
                var4 = var4 + 1;
                if (var4 < var5) {
                    _fun6005_ip = 49;
                    continue _fun6005
                }
            case 64:
                var5 = var3.length;
                var4 = 1;
                if (!(var4 === var5)) {
                    _fun6005_ip = 93;
                    continue _fun6005
                }
            case 76:
                var5 = var3[var1];
                var4 = var2.Error;
                var4 = var5 instanceof var4;
                if (var4) {
                    _fun6005_ip = 123;
                    continue _fun6005
                }
            case 93:
                var4 = var2.console;
                var6 = var4.error;
                var5 = var6.apply;
                var4 = var2.console;
                var4 = var5.bind(var6)(var4, var3);
                _fun6005_ip = 178;
                continue _fun6005;
            case 123:
                var1 = var3[var1];
                var3 = var2.console;
                var2 = var3.error;
                var5 = var1.message;
                var4 = 'Error: "';
                var5 = var4 + var5;
                var4 = var1.stack;
                var1 = '".  Stack:\n';
                var1 = var5 + var1;
                var1 = var1 + var4;
                var1 = var2.bind(var3)(var1);
            case 178:
                return var0;
        }
    };
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);