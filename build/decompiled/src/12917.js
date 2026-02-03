// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = global;
    var5 = var2.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var2 = true;
    var3.value = var2;
    var2 = '__esModule';
    var2 = var4.bind(var5)(var1, var2, var3);
    var2 = function arg0() {
        _fun99071: for (var _fun99071_ip = 0;;) switch (_fun99071_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var1 = var3[var1];
                var3 = undefined;
                var4 = var2.bind(var3)(var1);
                var2 = var4.getSentryCarrier;
                var1 = arg0;
                var1 = var2.bind(var4)(var1);
                var2 = var1.acs;
                if (var2) {
                    _fun99071_ip = 79;
                    continue _fun99071
                }
            case 47:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 1;
                var0 = var4[var0];
                var2 = var2.bind(var3)(var0);
                var0 = var2.getStackAsyncContextStrategy;
                var0 = var0.bind(var2)();
                _fun99071_ip = 85;
                continue _fun99071;
            case 79:
                var0 = var1.acs;
            case 85:
                return var0;
        }
    };
    var1.getAsyncContextStrategy = var2;
    var0 = function arg0() {
        var2 = _closure1_slot0;
        var4 = _closure1_slot1;
        var1 = 0;
        var3 = var4[var1];
        var0 = undefined;
        var5 = var2.bind(var0)(var3);
        var3 = var5.getMainCarrier;
        var3 = var3.bind(var5)();
        var1 = var4[var1];
        var2 = var2.bind(var0)(var1);
        var1 = var2.getSentryCarrier;
        var2 = var1.bind(var2)(var3);
        var1 = arg0;
        var2.acs = var1;
        return var0;
    };
    var1.setAsyncContextStrategy = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12916, 12918]);