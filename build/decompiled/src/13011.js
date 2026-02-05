// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0() {
            var2 = this;
            var _closure3_slot0 = var2;
            var5 = _closure1_slot2;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var2, var4);
            var4 = arg0;
            var2._client = var4;
            var4 = global;
            var5 = var4.Map;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var9 = var6;
            var5 = new var9[var5](var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var2._buckets = var5;
            var4 = var4.setInterval;
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var3 = 2;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.DEFAULT_BROWSER_FLUSH_INTERVAL;
            var1 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var0 = var1.flush;
                var0 = var0.bind(var1)();
                return var0;
            };
            var1 = var4.bind(var0)(var1, var3);
            var2._interval = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'add';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            _fun99787: for (var _fun99787_ip = 0;;) switch (_fun99787_ip) {
                case 0:
                    var8 = arg0;
                    var3 = arg2;
                    var12 = this;
                    var0 = undefined;
                    var1 = undefined;
                    var2 = arguments.length;
                    var5 = 3;
                    var2 = var2 > var5;
                    var4 = 'none';
                    var14 = var4;
                    if (!var2) {
                        _fun99787_ip = 48;
                        continue _fun99787
                    }
                case 33:
                    var2 = arguments[var5];
                    var14 = var4;
                    if (!(var0 !== var2)) {
                        _fun99787_ip = 48;
                        continue _fun99787
                    }
                case 44:
                    var14 = arguments[var5];
                case 48:
                    var2 = arguments.length;
                    var9 = 4;
                    if (!(var2 > var9)) {
                        _fun99787_ip = 66;
                        continue _fun99787
                    }
                case 58:
                    var2 = arguments[var9];
                    if (!(var0 === var2)) {
                        _fun99787_ip = 70;
                        continue _fun99787
                    }
                case 66:
                    var7 = {};
                    _fun99787_ip = 74;
                    continue _fun99787;
                case 70:
                    var7 = arguments[var9];
                case 74:
                    var2 = arguments.length;
                    var16 = 5;
                    if (!(var2 > var16)) {
                        _fun99787_ip = 92;
                        continue _fun99787
                    }
                case 84:
                    var2 = arguments[var16];
                    if (!(var0 === var2)) {
                        _fun99787_ip = 124;
                        continue _fun99787
                    }
                case 92:
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var5];
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.timestampInSeconds;
                    var4 = var2.bind(var4)();
                    _fun99787_ip = 128;
                    continue _fun99787;
                case 124:
                    var4 = arguments[var16];
                case 128:
                    var1 = global;
                    var2 = var1.Math;
                    var1 = var2.floor;
                    var11 = var1.bind(var2)(var4);
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var5 = var2[var9];
                    var10 = var4.bind(var0)(var5);
                    var6 = var10.sanitizeMetricKey;
                    var5 = arg1;
                    var6 = var6.bind(var10)(var5);
                    var5 = var2[var9];
                    var10 = var4.bind(var0)(var5);
                    var5 = var10.sanitizeTags;
                    var13 = var5.bind(var10)(var7);
                    var5 = var2[var9];
                    var10 = var4.bind(var0)(var5);
                    var5 = var10.sanitizeUnit;
                    var5 = var5.bind(var10)(var14);
                    var2 = var2[var9];
                    var4 = var4.bind(var0)(var2);
                    var2 = var4.getBucketKey;
                    var24 = var4;
                    var23 = var8;
                    var22 = var6;
                    var21 = var5;
                    var20 = var13;
                    var4 = var24[var2](var23, var22, var21, var20, var19);
                    var9 = var12._buckets;
                    var2 = var9.get;
                    var10 = var2.bind(var9)(var4);
                    var9 = 0;
                    if (!var10) {
                        _fun99787_ip = 320;
                        continue _fun99787
                    }
                case 276:
                    var15 = _closure1_slot0;
                    var17 = _closure1_slot1;
                    var2 = 2;
                    var2 = var17[var2];
                    var2 = var15.bind(var0)(var2);
                    var2 = var2.SET_METRIC_TYPE;
                    var9 = 0;
                    if (!(var8 === var2)) {
                        _fun99787_ip = 320;
                        continue _fun99787
                    }
                case 308:
                    var2 = var10.metric;
                    var9 = var2.weight;
                case 320:
                    if (var10) {
                        _fun99787_ip = 423;
                        continue _fun99787
                    }
                case 323:
                    var2 = {};
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var14 = var14[var16];
                    var14 = var15.bind(var0)(var14);
                    var14 = var14.METRIC_MAP;
                    var14 = var14[var8];
                    var15 = var14.prototype;
                    var15 = Object.create(var15, {
                        constructor: {
                            value: var14
                        }
                    });
                    var24 = var15;
                    var23 = var3;
                    var14 = new var24[var14](var23, var22);
                    var14 = var14 instanceof Object ? var14 : var15;
                    var2.metric = var14;
                    var2.timestamp = var11;
                    var2.metricType = var8;
                    var2.name = var6;
                    var2.unit = var5;
                    var2.tags = var13;
                    var13 = var12._buckets;
                    var12 = var13.set;
                    var12 = var12.bind(var13)(var4, var2);
                    _fun99787_ip = 461;
                    continue _fun99787;
                case 423:
                    var13 = var10.metric;
                    var12 = var13.add;
                    var12 = var12.bind(var13)(var3);
                    var12 = var10.timestamp;
                    var2 = var10;
                    if (!(var12 < var11)) {
                        _fun99787_ip = 461;
                        continue _fun99787
                    }
                case 452:
                    var10.timestamp = var11;
                    var2 = var10;
                case 461:
                    var11 = 'string';
                    var10 = typeof var3;
                    if (!(var11 === var10)) {
                        _fun99787_ip = 488;
                        continue _fun99787
                    }
                case 472:
                    var2 = var2.metric;
                    var2 = var2.weight;
                    var3 = var2 - var9;
                case 488:
                    var2 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var1 = 6;
                    var1 = var9[var1];
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.updateMetricSummaryOnActiveSpan;
                    var24 = var2;
                    var23 = var8;
                    var22 = var6;
                    var21 = var3;
                    var20 = var5;
                    var19 = var7;
                    var18 = var4;
                    var1 = var24[var1](var23, var22, var21, var20, var19, var18, var17);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'flush';
        var0.key = var5;
        var5 = function() {
            _fun99788: for (var _fun99788_ip = 0;;) switch (_fun99788_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._buckets;
                    var2 = var1.size;
                    var1 = 0;
                    if (!(var1 !== var2)) {
                        _fun99788_ip = 112;
                        continue _fun99788
                    }
                case 20:
                    var1 = global;
                    var3 = var1.Array;
                    var2 = var3.from;
                    var4 = var0._buckets;
                    var1 = var4.values;
                    var1 = var1.bind(var4)();
                    var4 = var2.bind(var3)(var1);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.captureAggregateMetrics;
                    var1 = var0._client;
                    var1 = var2.bind(var3)(var1, var4);
                    var1 = var0._buckets;
                    var0 = var1.clear;
                    var0 = var0.bind(var1)();
                case 112:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'close';
        var0.key = var5;
        var4 = function() {
            var2 = this;
            var0 = global;
            var3 = var0.clearInterval;
            var1 = var2._interval;
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var1 = var2.flush;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.BrowserMetricsAggregator = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 13004, 12887, 13008, 13009, 12941, 13010]);