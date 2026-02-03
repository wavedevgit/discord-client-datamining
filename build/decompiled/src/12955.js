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
        _fun99513: for (var _fun99513_ip = 0;;) switch (_fun99513_ip) {
            case 0:
                var4 = arg0;
                var6 = undefined;
                var5 = arguments.length;
                var0 = global;
                var7 = var0.Array;
                var3 = 1;
                var2 = var5 > var3;
                var1 = 0;
                if (!var2) {
                    _fun99513_ip = 32;
                    continue _fun99513
                }
            case 28:
                var1 = var5 - var3;
            case 32:
                var2 = var7.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var7
                    }
                });
                var11 = var2;
                var10 = var1;
                var1 = new var11[var7](var10, var9);
                var1 = var1 instanceof Object ? var1 : var2;
                var7 = var3 < var5;
                var2 = var3;
                if (!var7) {
                    _fun99513_ip = 84;
                    continue _fun99513
                }
            case 65:
                var8 = var2 - var3;
                var7 = arguments[var2];
                var1[var8] = var7;
                var2 = var2 + 1;
                if (var2 < var5) {
                    _fun99513_ip = 65;
                    continue _fun99513
                }
            case 84:
                var3 = var0.String;
                var2 = var0.String;
                var6 = var2.raw;
                var5 = var6.apply;
                var2 = var0.String;
                var7 = new Array(1);
                var7[0] = var4;
                var0 = var7.concat;
                var0 = var0.bind(var7)(var1);
                var10 = var5.bind(var6)(var2, var0);
                var2 = var3.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var3
                    }
                });
                var11 = var2;
                var0 = new var11[var3](var10, var9);
                var0 = var0 instanceof Object ? var0 : var2;
                var3 = var4.join;
                var2 = '\x00';
                var5 = var3.bind(var4)(var2);
                var4 = var5.replace;
                var3 = /%/g;
                var2 = '%%';
                var5 = var4.bind(var5)(var3, var2);
                var4 = var5.replace;
                var3 = /\0/g;
                var2 = '%s';
                var2 = var4.bind(var5)(var3, var2);
                var0.__sentry_template_string__ = var2;
                var0.__sentry_template_values__ = var1;
                return var0;
        }
    };
    var1.parameterize = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);