// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var1 = function(arg0, arg1) { // Original name: BoundingDimensions, environment: var0
        var1 = this;
        var0 = arg0;
        var1.width = var0;
        var0 = arg1;
        var1.height = var0;
        var0 = undefined;
        return var0;
    };
    var _closure1_slot0 = var1;
    var3 = global;
    var8 = var3.Object;
    var5 = var8.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var8)(var2, var3, var4);
    var4 = var1.prototype;
    var3 = function() { // Environment: var0
        var1 = this;
        var0 = null;
        var1.width = var0;
        var1.height = var0;
        var0 = undefined;
        return var0;
    };
    var4.destructor = var3;
    var0 = function(arg0) { // Environment: var0
        var0 = arg0;
        var3 = _closure1_slot0;
        var2 = var3.getPooled;
        var1 = var0.offsetWidth;
        var0 = var0.offsetHeight;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.getPooledFromElement = var0;
    var3 = 0;
    var4 = var7[var3];
    var0 = undefined;
    var5 = var6.bind(var0)(var4);
    var4 = var5.addPoolingTo;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.twoArgumentPooler;
    var3 = var4.bind(var5)(var1, var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [420]);