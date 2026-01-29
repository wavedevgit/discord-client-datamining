// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1, arg2) { // Original name: intersects, environment: var0
        var3 = arg2;
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 0;
        var2 = var5[var0];
        var1 = undefined;
        var7 = var4.bind(var1)(var2);
        var2 = var7.prototype;
        var6 = Object.create(var2, {
            constructor: {
                value: var7
            }
        });
        var9 = arg0;
        var10 = var6;
        var8 = var3;
        var2 = new var10[var7](var9, var8, var7);
        var2 = var2 instanceof Object ? var2 : var6;
        var0 = var5[var0];
        var4 = var4.bind(var1)(var0);
        var0 = var4.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var4
            }
        });
        var9 = arg1;
        var10 = var1;
        var8 = var3;
        var0 = new var10[var4](var9, var8, var7);
        var1 = var0 instanceof Object ? var0 : var1;
        var0 = var2.intersects;
        var0 = var0.bind(var2)(var1, var3);
        return var0;
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12324]);