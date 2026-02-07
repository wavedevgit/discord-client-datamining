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
        _fun8691: for (var _fun8691_ip = 0;;) switch (_fun8691_ip) {
            case 0:
                var4 = undefined;
                var1 = undefined;
                var2 = arguments.length;
                var0 = 0;
                var3 = var2 > var0;
                var2 = 0;
                if (!var3) {
                    _fun8691_ip = 32;
                    continue _fun8691
                }
            case 18:
                var3 = arguments[var0];
                var2 = 0;
                if (!(var4 !== var3)) {
                    _fun8691_ip = 32;
                    continue _fun8691
                }
            case 28:
                var2 = arguments[var0];
            case 32:
                var0 = global;
                var0 = var0.Error;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var5 = var1;
                var0 = new var5[var0](var4);
                var0 = var0 instanceof Object ? var0 : var1;
                var1 = 3;
                var1 = var2 + var1;
                var0.framesToPop = var1;
                return var0;
        }
    };
    var1.createSyntheticError = var2;
    var2 = function arg0() {
        _fun8692: for (var _fun8692_ip = 0;;) switch (_fun8692_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.framesToPop;
                var2 = undefined;
                var0 = 0;
                if (!(var2 !== var3)) {
                    _fun8692_ip = 23;
                    continue _fun8692
                }
            case 17:
                var0 = var1.framesToPop;
            case 23:
                return var0;
        }
    };
    var1.getFramesToPop = var2;
    var0 = function arg0() {
        _fun8693: for (var _fun8693_ip = 0;;) switch (_fun8693_ip) {
            case 0:
                var1 = arg0;
                var0 = null;
                var0 = var0 !== var1;
                if (!var0) {
                    _fun8693_ip = 23;
                    continue _fun8693
                }
            case 12:
                var3 = 'object';
                var2 = typeof var1;
                var0 = var3 === var2;
            case 23:
                if (!var0) {
                    _fun8693_ip = 34;
                    continue _fun8693
                }
            case 26:
                var2 = 'stack';
                var0 = var2 in var1;
            case 34:
                if (!var0) {
                    _fun8693_ip = 54;
                    continue _fun8693
                }
            case 37:
                var1 = var1.stack;
                var2 = 'string';
                var1 = typeof var1;
                var0 = var2 === var1;
            case 54:
                return var0;
        }
    };
    var1.isErrorLike = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);