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
        _fun22960: for (var _fun22960_ip = 0;;) switch (_fun22960_ip) {
            case 0:
                var0 = arg0;
                var7 = arg1;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun22960_ip = 80;
                    continue _fun22960
                }
            case 12:
                var5 = var7;
                var1 = global;
                for (var2 in var5)
                    case 25: {
                        case 34: var9 = var2;
                        var8 = var1.Object;
                        var8 = var8.prototype;
                        var10 = var8.hasOwnProperty;
                        var8 = var10.call;
                        var8 = var8.bind(var10)(var7, var9);
                        if (!var8) {
                            _fun22960_ip = 25;
                            continue _fun22960
                        }
                        case 68: var8 = var7[var9];
                        var0[var9] = var8;
                        _fun22960_ip = 25;
                        continue _fun22960;
                    }
            case 78:
                return var0;
            case 80:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var12 = 'assign requires that input parameter not be null or undefined';
                var13 = var1;
                var0 = new var13[var2](var12, var11);
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