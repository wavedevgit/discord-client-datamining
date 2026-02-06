// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 0;
    var3 = var3[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.stripUrlQueryAndFragment;
    var2.stripUrlQueryAndFragment = var3;
    var3 = function arg0() {
        var1 = arg0;
        var0 = {};
        var2 = var1._sentryScope;
        var0.scope = var2;
        var1 = var1._sentryIsolationScope;
        var0.isolationScope = var1;
        return var0;
    };
    var2.getCapturedScopesOnSpan = var3;
    var1 = function arg0, arg1, arg2() {
        _fun99259: for (var _fun99259_ip = 0;;) switch (_fun99259_ip) {
            case 0:
                var4 = arg0;
                if (!var4) {
                    _fun99259_ip = 79;
                    continue _fun99259
                }
            case 6:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var5 = var3[var0];
                var1 = undefined;
                var8 = var2.bind(var1)(var5);
                var7 = var8.addNonEnumerableProperty;
                var6 = '_sentryIsolationScope';
                var5 = arg2;
                var5 = var7.bind(var8)(var4, var6, var5);
                var0 = var3[var0];
                var3 = var2.bind(var1)(var0);
                var2 = var3.addNonEnumerableProperty;
                var1 = '_sentryScope';
                var0 = arg1;
                var0 = var2.bind(var3)(var4, var1, var0);
            case 79:
                var0 = undefined;
                return var0;
        }
    };
    var2.setCapturedScopesOnSpan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12889]);