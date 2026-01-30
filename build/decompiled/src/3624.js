// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0) { // Original name: cloneArrayBuffer, environment: var0
        var5 = arg0;
        var2 = var5.constructor;
        var8 = var5.byteLength;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var9 = var1;
        var0 = new var9[var2](var8, var7);
        var0 = var0 instanceof Object ? var0 : var1;
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 0;
        var2 = var7[var1];
        var4 = undefined;
        var2 = var6.bind(var4)(var2);
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var9 = var3;
        var8 = var0;
        var2 = new var9[var2](var8, var7);
        var3 = var2 instanceof Object ? var2 : var3;
        var2 = var3.set;
        var1 = var7[var1];
        var1 = var6.bind(var4)(var1);
        var4 = var1.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var1
            }
        });
        var9 = var4;
        var8 = var5;
        var1 = new var9[var1](var8, var7);
        var1 = var1 instanceof Object ? var1 : var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [759]);