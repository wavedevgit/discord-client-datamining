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
    var1 = function() {
        var0 = global;
        var1 = var0.Date;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var11 = var2;
        var1 = new var11[var1](var10);
        var2 = var1 instanceof Object ? var1 : var2;
        var1 = var2.getFullYear;
        var5 = var1.bind(var2)();
        var1 = var2.getMonth;
        var4 = var1.bind(var2)();
        var1 = var2.getDate;
        var6 = var1.bind(var2)();
        var0 = var0.Date;
        var1 = var0.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var0
            }
        });
        var11 = var1;
        var10 = 0;
        var0 = new var11[var0](var10, var9);
        var0 = var0 instanceof Object ? var0 : var1;
        var3 = var0.setFullYear;
        var1 = 1;
        var1 = var6 + var1;
        var1 = var3.bind(var0)(var5, var4, var1);
        var1 = var0.setHours;
        var11 = var0;
        var10 = 0;
        var9 = 0;
        var8 = 0;
        var7 = 0;
        var1 = var11[var1](var10, var9, var8, var7, var6);
        return var0;
    };
    var0.default = var1;
    var1 = var0.default;
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);