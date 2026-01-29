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
    var2 = var2.Symbol;
    var3 = var2.toStringTag;
    var2 = {};
    var6 = 'Module';
    var2.value = var6;
    var2 = var4.bind(var5)(var1, var3, var2);
    var0 = function(arg0) { // Original name: hasSpansEnabled, environment: var0
        _fun8998: for (var _fun8998_ip = 0;;) switch (_fun8998_ip) {
            case 0:
                var2 = arg0;
                var0 = global;
                var1 = var0.__SENTRY_TRACING__;
                var3 = 'boolean';
                var1 = typeof var1;
                if (!(var3 === var1)) {
                    _fun8998_ip = 35;
                    continue _fun8998
                }
            case 22:
                var0 = var0.__SENTRY_TRACING__;
                if (var0) {
                    _fun8998_ip = 35;
                    continue _fun8998
                }
            case 31:
                var0 = false;
                return var0;
            case 35:
                if (var2) {
                    _fun8998_ip = 94;
                    continue _fun8998
                }
            case 38:
                var3 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var1);
                var1 = var3.getClient;
                var3 = var1.bind(var3)();
                var1 = null;
                var1 = var1 == var3;
                if (var1) {
                    _fun8998_ip = 91;
                    continue _fun8998
                }
            case 81:
                var1 = var3.getOptions;
                var0 = var1.bind(var3)();
            case 91:
                var2 = var0;
            case 94:
                var0 = !var2;
                if (var0) {
                    _fun8998_ip = 127;
                    continue _fun8998
                }
            case 100:
                var3 = var2.tracesSampleRate;
                var1 = null;
                var1 = var1 == var3;
                if (!var1) {
                    _fun8998_ip = 124;
                    continue _fun8998
                }
            case 115:
                var2 = var2.tracesSampler;
                var1 = !var2;
            case 124:
                var0 = var1;
            case 127:
                var0 = !var0;
                return var0;
        }
    };
    var1.hasSpansEnabled = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [847]);