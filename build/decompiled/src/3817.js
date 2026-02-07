// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var0 = var0.Map;
    var3 = var0.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var0
        }
    });
    var10 = var3;
    var0 = new var10[var0](var9);
    var0 = var0 instanceof Object ? var0 : var3;
    var _closure1_slot0 = var0;
    var0 = {};
    var3 = function arg0, arg1() {
        var3 = _closure1_slot0;
        var2 = var3.set;
        var1 = arg0;
        var0 = arg1;
        var0 = var2.bind(var3)(var1, var0);
        var0 = undefined;
        return var0;
    };
    var0.register = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.delete;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var0.unregister = var3;
    var2 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.get;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var0.getComponent = var2;
    var1.ComponentRegistry = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);