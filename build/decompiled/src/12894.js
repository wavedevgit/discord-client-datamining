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
    var0 = function(arg0) { // Original name: hasTracingEnabled, environment: var0
        _fun99206: for (var _fun99206_ip = 0;;) switch (_fun99206_ip) {
            case 0:
                var3 = arg0;
                var0 = global;
                var1 = var0.__SENTRY_TRACING__;
                var2 = 'boolean';
                var1 = typeof var1;
                if (!(var2 === var1)) {
                    _fun99206_ip = 35;
                    continue _fun99206
                }
            case 22:
                var0 = var0.__SENTRY_TRACING__;
                if (var0) {
                    _fun99206_ip = 35;
                    continue _fun99206
                }
            case 31:
                var0 = false;
                return var0;
            case 35:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.getClient;
                var2 = var0.bind(var1)();
                if (var3) {
                    _fun99206_ip = 91;
                    continue _fun99206
                }
            case 72:
                var0 = var2;
                if (!var0) {
                    _fun99206_ip = 88;
                    continue _fun99206
                }
            case 78:
                var1 = var2.getOptions;
                var0 = var1.bind(var2)();
            case 88:
                var3 = var0;
            case 91:
                var1 = !var3;
                var0 = !var1;
                if (var1) {
                    _fun99206_ip = 133;
                    continue _fun99206
                }
            case 100:
                var1 = var3.enableTracing;
                if (var1) {
                    _fun99206_ip = 119;
                    continue _fun99206
                }
            case 111:
                var2 = 'tracesSampleRate';
                var1 = var2 in var3;
            case 119:
                if (var1) {
                    _fun99206_ip = 130;
                    continue _fun99206
                }
            case 122:
                var2 = 'tracesSampler';
                var1 = var2 in var3;
            case 130:
                var0 = var1;
            case 133:
                return var0;
        }
    };
    var1.hasTracingEnabled = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12889]);