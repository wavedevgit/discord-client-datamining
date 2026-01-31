// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var4);
    var0 = 0;
    var6 = var5[var0];
    var4 = metroImportDefault;
    var0 = undefined;
    var4 = var4.bind(var0)(var6);
    var4 = 1;
    var5 = var5[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var0)(var5);
    var _closure1_slot0 = var4;
    var4 = var1.Symbol;
    var1 = 'CHILD_STATE';
    var1 = var4.bind(var0)(var1);
    var3 = function arg0() {
        var3 = _closure1_slot0;
        var2 = var3.useMemo;
        var1 = function() { // Environment: var0
            var0 = {};
            var1 = global;
            var1 = var1.Map;
            var2 = var1.prototype;
            var2 = Object.create(var2, {
                constructor: {
                    value: var1
                }
            });
            var3 = var2;
            var1 = new var3[var1](var2);
            var1 = var1 instanceof Object ? var1 : var2;
            var0.current = var1;
            return var0;
        };
        var0 = new Array(0);
        var0 = var2.bind(var3)(var1, var0);
        var0 = arg0;
        return var0;
    };
    var2.default = var3;
    var2.CHILD_STATE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 31]);