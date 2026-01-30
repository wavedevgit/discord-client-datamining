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
    var1 = function(arg0, arg1, arg2) { // Original name: isExists, environment: var1
        _fun22900: for (var _fun22900_ip = 0;;) switch (_fun22900_ip) {
            case 0:
                var2 = arg0;
                var5 = arg1;
                var3 = arg2;
                var0 = undefined;
                var4 = arguments.length;
                var1 = 3;
                if (!(!(var4 < var1))) {
                    _fun22900_ip = 108;
                    continue _fun22900
                }
            case 21:
                var1 = global;
                var1 = var1.Date;
                var4 = var1.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var4;
                var8 = var2;
                var7 = var5;
                var6 = var3;
                var1 = new var9[var1](var8, var7, var6, var5);
                var4 = var1 instanceof Object ? var1 : var4;
                var1 = var4.getFullYear;
                var1 = var1.bind(var4)();
                var1 = var1 === var2;
                if (!var1) {
                    _fun22900_ip = 89;
                    continue _fun22900
                }
            case 75:
                var2 = var4.getMonth;
                var2 = var2.bind(var4)();
                var1 = var2 === var5;
            case 89:
                if (!var1) {
                    _fun22900_ip = 106;
                    continue _fun22900
                }
            case 92:
                var2 = var4.getDate;
                var2 = var2.bind(var4)();
                var1 = var2 === var3;
            case 106:
                return var1;
            case 108:
                var1 = global;
                var2 = var1.TypeError;
                var1 = arguments.length;
                var0 = '3 argument required, but only ';
                var3 = var0 + var1;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var0 = ' present';
                var8 = var3 + var0;
                var9 = var1;
                var0 = new var9[var2](var8, var7);
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