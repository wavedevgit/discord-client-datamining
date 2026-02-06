// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var3 = function arg0() {
        _fun99737: for (var _fun99737_ip = 0;;) switch (_fun99737_ip) {
            case 0:
                var0 = undefined;
                var2 = undefined;
                var1 = arguments.length;
                var7 = 1;
                var1 = var1 > var7;
                var6 = var7;
                if (!var1) {
                    _fun99737_ip = 35;
                    continue _fun99737
                }
            case 20:
                var1 = arguments[var7];
                var6 = var7;
                if (!(var0 !== var1)) {
                    _fun99737_ip = 35;
                    continue _fun99737
                }
            case 31:
                var6 = arguments[var7];
            case 35:
                var3 = arguments.length;
                var1 = 2;
                var3 = var3 > var1;
                var5 = undefined;
                if (!var3) {
                    _fun99737_ip = 54;
                    continue _fun99737
                }
            case 50:
                var5 = arguments[var1];
            case 54:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var3 = 0;
                var3 = var1[var3];
                var3 = var2.bind(var0)(var3);
                var4 = var3.metrics;
                var3 = var4.increment;
                var1 = var1[var7];
                var1 = var2.bind(var0)(var1);
                var11 = var1.MetricsAggregator;
                var10 = arg0;
                var12 = var4;
                var9 = var6;
                var8 = var5;
                var1 = var12[var3](var11, var10, var9, var8, var7);
                return var0;
        }
    };
    var0.increment = var3;
    var3 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 0;
        var1 = var3[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var6 = var1.metrics;
        var5 = var6.distribution;
        var1 = 1;
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var10 = var1.MetricsAggregator;
        var9 = arg0;
        var8 = arg1;
        var7 = arg2;
        var11 = var6;
        var1 = var11[var5](var10, var9, var8, var7, var6);
        return var0;
    };
    var0.distribution = var3;
    var3 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 0;
        var1 = var3[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var6 = var1.metrics;
        var5 = var6.set;
        var1 = 1;
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var10 = var1.MetricsAggregator;
        var9 = arg0;
        var8 = arg1;
        var7 = arg2;
        var11 = var6;
        var1 = var11[var5](var10, var9, var8, var7, var6);
        return var0;
    };
    var0.set = var3;
    var3 = function arg0, arg1, arg2() {
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = 0;
        var1 = var3[var0];
        var0 = undefined;
        var1 = var2.bind(var0)(var1);
        var6 = var1.metrics;
        var5 = var6.gauge;
        var1 = 1;
        var1 = var3[var1];
        var1 = var2.bind(var0)(var1);
        var10 = var1.MetricsAggregator;
        var9 = arg0;
        var8 = arg1;
        var7 = arg2;
        var11 = var6;
        var1 = var11[var5](var10, var9, var8, var7, var6);
        return var0;
    };
    var0.gauge = var3;
    var3 = function arg0, arg1() {
        _fun99741: for (var _fun99741_ip = 0;;) switch (_fun99741_ip) {
            case 0:
                var2 = undefined;
                var1 = undefined;
                var3 = arguments.length;
                var0 = 2;
                var3 = var3 > var0;
                var4 = 'second';
                var6 = var4;
                if (!var3) {
                    _fun99741_ip = 39;
                    continue _fun99741
                }
            case 24:
                var3 = arguments[var0];
                var6 = var4;
                if (!(var2 !== var3)) {
                    _fun99741_ip = 39;
                    continue _fun99741
                }
            case 35:
                var6 = arguments[var0];
            case 39:
                var3 = arguments.length;
                var0 = 3;
                var3 = var3 > var0;
                var5 = undefined;
                if (!var3) {
                    _fun99741_ip = 58;
                    continue _fun99741
                }
            case 54:
                var5 = arguments[var0];
            case 58:
                var1 = _closure1_slot0;
                var7 = _closure1_slot1;
                var0 = 0;
                var0 = var7[var0];
                var0 = var1.bind(var2)(var0);
                var4 = var0.metrics;
                var3 = var4.timing;
                var0 = 1;
                var0 = var7[var0];
                var0 = var1.bind(var2)(var0);
                var12 = var0.MetricsAggregator;
                var11 = arg0;
                var10 = arg1;
                var13 = var4;
                var9 = var6;
                var8 = var5;
                var0 = var13[var3](var12, var11, var10, var9, var8, var7);
                return var0;
        }
    };
    var0.timing = var3;
    var2 = function arg0() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot1;
        var0 = 0;
        var0 = var5[var0];
        var1 = undefined;
        var0 = var4.bind(var1)(var0);
        var3 = var0.metrics;
        var2 = var3.getMetricsAggregatorForClient;
        var0 = 1;
        var0 = var5[var0];
        var0 = var4.bind(var1)(var0);
        var1 = var0.MetricsAggregator;
        var0 = arg0;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var0.getMetricsAggregatorForClient = var2;
    var1.metricsDefault = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [13005, 13009]);