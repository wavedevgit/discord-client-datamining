// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function(arg0) { // Original name: createMetricContainerEnvelopeItem, environment: var0
        var2 = arg0;
        var1 = {
            'type': 'trace_metric',
            'item_count': null,
            'content_type': 'application/vnd.sentry.items.trace-metric+json'
        };
        var0 = var2.length;
        var1.item_count = var0;
        var0 = new Array(2);
        var0[0] = var1;
        var1 = {};
        var1.items = var2;
        var0[1] = var1;
        return var0;
    };
    var _closure1_slot2 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var1, var4, var3);
    var1.createMetricContainerEnvelopeItem = var2;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: createMetricEnvelope, environment: var0
        _fun9339: for (var _fun9339_ip = 0;;) switch (_fun9339_ip) {
            case 0:
                var4 = arg1;
                var0 = arg2;
                var2 = arg3;
                var3 = {};
                var1 = null;
                var1 = var1 != var4;
                if (!var1) {
                    _fun9339_ip = 26;
                    continue _fun9339
                }
            case 20:
                var1 = var4.sdk;
            case 26:
                if (!var1) {
                    _fun9339_ip = 69;
                    continue _fun9339
                }
            case 29:
                var1 = {};
                var5 = var4.sdk;
                var5 = var5.name;
                var1.name = var5;
                var4 = var4.sdk;
                var4 = var4.version;
                var1.version = var4;
                var3.sdk = var1;
            case 69:
                if (!var0) {
                    _fun9339_ip = 75;
                    continue _fun9339
                }
            case 72:
                var0 = var2;
            case 75:
                if (!var0) {
                    _fun9339_ip = 119;
                    continue _fun9339
                }
            case 78:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var0 = var1.dsnToString;
                var0 = var0.bind(var1)(var2);
                var3.dsn = var0;
            case 119:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var1 = var4[var1];
                var5 = undefined;
                var2 = var2.bind(var5)(var1);
                var1 = var2.createEnvelope;
                var4 = _closure1_slot2;
                var0 = arg0;
                var4 = var4.bind(var5)(var0);
                var0 = new Array(1);
                var0[0] = var4;
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var1.createMetricEnvelope = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [836, 862]);