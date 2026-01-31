// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function(arg0) { // Original name: getSentryCarrier, environment: var2
        _fun99092: for (var _fun99092_ip = 0;;) switch (_fun99092_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.__SENTRY__;
                if (var2) {
                    _fun99092_ip = 14;
                    continue _fun99092
                }
            case 12:
                var2 = {};
            case 14:
                var0.__SENTRY__ = var2;
                var0 = var2.version;
                if (var0) {
                    _fun99092_ip = 59;
                    continue _fun99092
                }
            case 29:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var0 = var1.SDK_VERSION;
            case 59:
                var2.version = var0;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var1 = var5[var0];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var1 = var1.SDK_VERSION;
                var0 = var5[var0];
                var0 = var4.bind(var3)(var0);
                var0 = var0.SDK_VERSION;
                var0 = var2[var0];
                if (var0) {
                    _fun99092_ip = 119;
                    continue _fun99092
                }
            case 117:
                var0 = {};
            case 119:
                var2[var1] = var0;
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var2 = function() { // Original name: getMainCarrier, environment: var2
        var5 = _closure1_slot2;
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 0;
        var4 = var3[var0];
        var1 = undefined;
        var4 = var2.bind(var1)(var4);
        var4 = var4.GLOBAL_OBJ;
        var4 = var5.bind(var1)(var4);
        var0 = var3[var0];
        var0 = var2.bind(var1)(var0);
        var0 = var0.GLOBAL_OBJ;
        return var0;
    };
    var1.getMainCarrier = var2;
    var1.getSentryCarrier = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12824]);