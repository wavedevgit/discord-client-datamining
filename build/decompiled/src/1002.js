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
    var0 = function() {
        _fun10333: for (var _fun10333_ip = 0;;) switch (_fun10333_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var5 = 0;
                var1 = var1[var5];
                var4 = undefined;
                var2 = var2.bind(var4)(var1);
                var1 = var2.getMainCarrier;
                var1 = var1.bind(var2)();
                var2 = var1.__SENTRY__;
                if (var2) {
                    _fun10333_ip = 45;
                    continue _fun10333
                }
            case 43:
                var2 = {};
            case 45:
                var1.__SENTRY__ = var2;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                var1 = var0[var5];
                var1 = var3.bind(var4)(var1);
                var1 = var1.SDK_VERSION;
                var0 = var0[var5];
                var0 = var3.bind(var4)(var0);
                var0 = var0.SDK_VERSION;
                var0 = var2[var0];
                if (var0) {
                    _fun10333_ip = 98;
                    continue _fun10333
                }
            case 96:
                var0 = {};
            case 98:
                var2[var1] = var0;
                return var0;
        }
    };
    var1.getSentryCarrier = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [817]);