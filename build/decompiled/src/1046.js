// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var3 = var2.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var2 = var2.WeakMap;
    var3 = var2.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var2
        }
    });
    var11 = var3;
    var2 = new var11[var2](var10);
    var2 = var2 instanceof Object ? var2 : var3;
    var _closure1_slot0 = var2;
    var0 = function(arg0, arg1) { // Original name: initUnique, environment: var0
        _fun10785: for (var _fun10785_ip = 0;;) switch (_fun10785_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var4 = _closure1_slot0;
                var3 = var4.get;
                var3 = var3.bind(var4)(var2);
                if (var3) {
                    _fun10785_ip = 61;
                    continue _fun10785
                }
            case 26:
                var4 = _closure1_slot0;
                var3 = var4.set;
                var5 = var1.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var1
                    }
                });
                var8 = var5;
                var1 = new var8[var1](var7);
                var1 = var1 instanceof Object ? var1 : var5;
                var1 = var3.bind(var4)(var2, var1);
            case 61:
                var1 = _closure1_slot0;
                var0 = var1.get;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var1.initUnique = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);