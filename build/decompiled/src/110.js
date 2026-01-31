// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = global;
    var6 = var2.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var2 = var2.WeakSet;
    var3 = var2.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var2
        }
    });
    var10 = var3;
    var2 = new var10[var2](var9);
    var2 = var2 instanceof Object ? var2 : var3;
    var _closure1_slot0 = var2;
    var2 = function arg0() {
        var0 = arg0;
        var2 = _closure1_slot0;
        var1 = var2.add;
        var1 = var1.bind(var2)(var0);
        return var0;
    };
    var1.DynamicallyInjectedByGestureHandler = var2;
    var2 = function arg0() {
        var0 = undefined;
        return var0;
    };
    var1.ConditionallyIgnoredEventHandlers = var2;
    var0 = function arg0() {
        _fun1599: for (var _fun1599_ip = 0;;) switch (_fun1599_ip) {
            case 0:
                var3 = arg0;
                var1 = 'object';
                var0 = typeof var3;
                var0 = var1 === var0;
                if (!var0) {
                    _fun1599_ip = 23;
                    continue _fun1599
                }
            case 17:
                var1 = null;
                var0 = var1 != var3;
            case 23:
                if (!var0) {
                    _fun1599_ip = 43;
                    continue _fun1599
                }
            case 26:
                var2 = _closure1_slot0;
                var1 = var2.has;
                var0 = var1.bind(var2)(var3);
            case 43:
                return var0;
        }
    };
    var1.isIgnored = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);