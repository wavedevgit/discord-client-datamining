// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun99713: for (var _fun99713_ip = 0;;) switch (_fun99713_ip) {
            case 0:
                var2 = arg1;
                var4 = arg2;
                var0 = arg3;
                var3 = {};
                var1 = global;
                var1 = var1.Date;
                var5 = var1.prototype;
                var5 = Object.create(var5, {
                    constructor: {
                        value: var1
                    }
                });
                var9 = var5;
                var1 = new var9[var1](var8);
                var5 = var1 instanceof Object ? var1 : var5;
                var1 = var5.toISOString;
                var1 = var1.bind(var5)();
                var3.sent_at = var1;
                var1 = var4;
                if (!var1) {
                    _fun99713_ip = 66;
                    continue _fun99713
                }
            case 60:
                var1 = var4.sdk;
            case 66:
                if (!var1) {
                    _fun99713_ip = 109;
                    continue _fun99713
                }
            case 69:
                var1 = {};
                var5 = var4.sdk;
                var5 = var5.name;
                var1.name = var5;
                var4 = var4.sdk;
                var4 = var4.version;
                var1.version = var4;
                var3.sdk = var1;
            case 109:
                if (!var0) {
                    _fun99713_ip = 115;
                    continue _fun99713
                }
            case 112:
                var0 = var2;
            case 115:
                if (!var0) {
                    _fun99713_ip = 159;
                    continue _fun99713
                }
            case 118:
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var4.bind(var0)(var1);
                var0 = var1.dsnToString;
                var0 = var0.bind(var1)(var2);
                var3.dsn = var0;
            case 159:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 1;
                var0 = var5[var0];
                var1 = undefined;
                var6 = var2.bind(var1)(var0);
                var4 = var6.serializeMetricBuckets;
                var0 = arg0;
                var0 = var4.bind(var6)(var0);
                var6 = {};
                var4 = 'statsd';
                var6.type = var4;
                var4 = var0.length;
                var6.length = var4;
                var4 = new Array(2);
                var4[0] = var6;
                var4[1] = var0;
                var0 = 0;
                var0 = var5[var0];
                var2 = var2.bind(var1)(var0);
                var1 = var2.createEnvelope;
                var0 = new Array(1);
                var0[0] = var4;
                var0 = var1.bind(var2)(var3, var0);
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
    var2 = function arg0, arg1() {
        var3 = arg0;
        var6 = arg1;
        var4 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 0;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var4.bind(var0)(var2);
        var5 = var2.logger;
        var4 = var5.log;
        var8 = var6.length;
        var2 = global;
        var2 = var2.HermesInternal;
        var7 = var2.concat;
        var2 = 'Flushing aggregated metrics, number of metrics: ';
        var2 = var7.bind(var2)(var8);
        var2 = var4.bind(var5)(var2);
        var5 = _closure1_slot2;
        var1 = var3.getDsn;
        var11 = var1.bind(var3)();
        var1 = var3.getSdkMetadata;
        var10 = var1.bind(var3)();
        var1 = var3.getOptions;
        var1 = var1.bind(var3)();
        var9 = var1.tunnel;
        var13 = undefined;
        var12 = var6;
        var2 = var13[var5](var12, var11, var10, var9, var8);
        var1 = var3.sendEnvelope;
        var1 = var1.bind(var3)(var2);
        return var0;
    };
    var1.captureAggregateMetrics = var2;
    var1.createMetricEnvelope = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12825, 12946]);