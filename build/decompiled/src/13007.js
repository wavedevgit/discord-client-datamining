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
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var2, var3, var4);
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            _fun99738: for (var _fun99738_ip = 0;;) switch (_fun99738_ip) {
                case 0:
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var5 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var2, var4);
                    var4 = arg0;
                    var2._client = var4;
                    var5 = global;
                    var4 = var5.Map;
                    var6 = var4.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var4
                        }
                    });
                    var11 = var6;
                    var4 = new var11[var4](var10);
                    var4 = var4 instanceof Object ? var4 : var6;
                    var2._buckets = var4;
                    var4 = 0;
                    var2._bucketsTotalWeight = var4;
                    var6 = var5.setInterval;
                    var8 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var7 = 3;
                    var4 = var4[var7];
                    var4 = var8.bind(var0)(var4);
                    var4 = var4.DEFAULT_FLUSH_INTERVAL;
                    var3 = function() { // Environment: var3
                        var1 = _closure3_slot0;
                        var0 = var1._flush;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var3 = var6.bind(var0)(var3, var4);
                    var2._interval = var3;
                    var3 = var2._interval;
                    var3 = var3.unref;
                    if (!var3) {
                        _fun99738_ip = 164;
                        continue _fun99738
                    }
                case 148:
                    var4 = var2._interval;
                    var3 = var4.unref;
                    var3 = var3.bind(var4)();
                case 164:
                    var4 = var5.Math;
                    var3 = var4.floor;
                    var6 = var5.Math;
                    var5 = var6.random;
                    var5 = var5.bind(var6)();
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var7];
                    var1 = var6.bind(var0)(var1);
                    var1 = var1.DEFAULT_FLUSH_INTERVAL;
                    var5 = var5 * var1;
                    var1 = 1000;
                    var1 = var5 / var1;
                    var1 = var3.bind(var4)(var1);
                    var2._flushShift = var1;
                    var1 = false;
                    var2._forceFlush = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'add';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            _fun99740: for (var _fun99740_ip = 0;;) switch (_fun99740_ip) {
                case 0:
                    var13 = arg0;
                    var8 = arg2;
                    var2 = this;
                    var0 = undefined;
                    var1 = undefined;
                    var3 = arguments.length;
                    var5 = 3;
                    var3 = var3 > var5;
                    var4 = 'none';
                    var15 = var4;
                    if (!var3) {
                        _fun99740_ip = 48;
                        continue _fun99740
                    }
                case 33:
                    var3 = arguments[var5];
                    var15 = var4;
                    if (!(var0 !== var3)) {
                        _fun99740_ip = 48;
                        continue _fun99740
                    }
                case 44:
                    var15 = arguments[var5];
                case 48:
                    var3 = arguments.length;
                    var7 = 4;
                    if (!(var3 > var7)) {
                        _fun99740_ip = 66;
                        continue _fun99740
                    }
                case 58:
                    var3 = arguments[var7];
                    if (!(var0 === var3)) {
                        _fun99740_ip = 70;
                        continue _fun99740
                    }
                case 66:
                    var12 = {};
                    _fun99740_ip = 74;
                    continue _fun99740;
                case 70:
                    var12 = arguments[var7];
                case 74:
                    var3 = arguments.length;
                    var6 = 5;
                    if (!(var3 > var6)) {
                        _fun99740_ip = 92;
                        continue _fun99740
                    }
                case 84:
                    var3 = arguments[var6];
                    if (!(var0 === var3)) {
                        _fun99740_ip = 124;
                        continue _fun99740
                    }
                case 92:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var7];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.timestampInSeconds;
                    var4 = var3.bind(var4)();
                    _fun99740_ip = 128;
                    continue _fun99740;
                case 124:
                    var4 = arguments[var6];
                case 128:
                    var1 = global;
                    var3 = var1.Math;
                    var1 = var3.floor;
                    var7 = var1.bind(var3)(var4);
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var9 = var3[var6];
                    var11 = var4.bind(var0)(var9);
                    var10 = var11.sanitizeMetricKey;
                    var9 = arg1;
                    var11 = var10.bind(var11)(var9);
                    var9 = var3[var6];
                    var10 = var4.bind(var0)(var9);
                    var9 = var10.sanitizeTags;
                    var14 = var9.bind(var10)(var12);
                    var9 = var3[var6];
                    var10 = var4.bind(var0)(var9);
                    var9 = var10.sanitizeUnit;
                    var10 = var9.bind(var10)(var15);
                    var3 = var3[var6];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.getBucketKey;
                    var24 = var4;
                    var23 = var13;
                    var22 = var11;
                    var21 = var10;
                    var20 = var14;
                    var9 = var24[var3](var23, var22, var21, var20, var19);
                    var4 = var2._buckets;
                    var3 = var4.get;
                    var4 = var3.bind(var4)(var9);
                    var6 = 0;
                    if (!var4) {
                        _fun99740_ip = 317;
                        continue _fun99740
                    }
                case 276:
                    var16 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var5];
                    var3 = var16.bind(var0)(var3);
                    var3 = var3.SET_METRIC_TYPE;
                    var6 = 0;
                    if (!(var13 === var3)) {
                        _fun99740_ip = 317;
                        continue _fun99740
                    }
                case 305:
                    var3 = var4.metric;
                    var6 = var3.weight;
                case 317:
                    if (var4) {
                        _fun99740_ip = 423;
                        continue _fun99740
                    }
                case 320:
                    var3 = {};
                    var16 = _closure1_slot0;
                    var17 = _closure1_slot1;
                    var15 = 6;
                    var15 = var17[var15];
                    var15 = var16.bind(var0)(var15);
                    var15 = var15.METRIC_MAP;
                    var15 = var15[var13];
                    var16 = var15.prototype;
                    var16 = Object.create(var16, {
                        constructor: {
                            value: var15
                        }
                    });
                    var24 = var16;
                    var23 = var8;
                    var15 = new var24[var15](var23, var22);
                    var15 = var15 instanceof Object ? var15 : var16;
                    var3.metric = var15;
                    var3.timestamp = var7;
                    var3.metricType = var13;
                    var3.name = var11;
                    var3.unit = var10;
                    var3.tags = var14;
                    var15 = var2._buckets;
                    var14 = var15.set;
                    var14 = var14.bind(var15)(var9, var3);
                    _fun99740_ip = 461;
                    continue _fun99740;
                case 423:
                    var15 = var4.metric;
                    var14 = var15.add;
                    var14 = var14.bind(var15)(var8);
                    var14 = var4.timestamp;
                    var3 = var4;
                    if (!(var14 < var7)) {
                        _fun99740_ip = 461;
                        continue _fun99740
                    }
                case 452:
                    var4.timestamp = var7;
                    var3 = var4;
                case 461:
                    var7 = 'string';
                    var4 = typeof var8;
                    if (!(var7 === var4)) {
                        _fun99740_ip = 488;
                        continue _fun99740
                    }
                case 472:
                    var4 = var3.metric;
                    var4 = var4.weight;
                    var8 = var4 - var6;
                case 488:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var6 = 7;
                    var6 = var1[var6];
                    var7 = var4.bind(var0)(var6);
                    var6 = var7.updateMetricSummaryOnActiveSpan;
                    var24 = var7;
                    var23 = var13;
                    var22 = var11;
                    var21 = var8;
                    var20 = var10;
                    var19 = var12;
                    var18 = var9;
                    var6 = var24[var6](var23, var22, var21, var20, var19, var18, var17);
                    var6 = var2._bucketsTotalWeight;
                    var3 = var3.metric;
                    var3 = var3.weight;
                    var3 = var6 + var3;
                    var2._bucketsTotalWeight = var3;
                    var3 = var2._bucketsTotalWeight;
                    var1 = var1[var5];
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.MAX_WEIGHT;
                    if (!(var3 >= var1)) {
                        _fun99740_ip = 602;
                        continue _fun99740
                    }
                case 592:
                    var1 = var2.flush;
                    var1 = var1.bind(var2)();
                case 602:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'flush';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = true;
            var1._forceFlush = var0;
            var0 = var1._flush;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'close';
        var0.key = var5;
        var5 = function() {
            var2 = this;
            var0 = true;
            var2._forceFlush = var0;
            var0 = global;
            var3 = var0.clearInterval;
            var1 = var2._interval;
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            var1 = var2._flush;
            var1 = var1.bind(var2)();
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = '_flush';
        var0.key = var5;
        var5 = function() {
            _fun99743: for (var _fun99743_ip = 0;;) switch (_fun99743_ip) {
                case 0:
                    var0 = this;
                    var1 = undefined;
                    var9 = undefined;
                    var2 = undefined;
                    var10 = undefined;
                    var11 = undefined;
                    var3 = var0._forceFlush;
                    if (var3) {
                        _fun99743_ip = 339;
                        continue _fun99743
                    }
                case 25:
                    var3 = global;
                    var12 = var3.Math;
                    var5 = var12.floor;
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var4 = 4;
                    var4 = var8[var4];
                    var13 = var6.bind(var1)(var4);
                    var4 = var13.timestampInSeconds;
                    var4 = var4.bind(var13)();
                    var5 = var5.bind(var12)(var4);
                    var4 = 3;
                    var4 = var8[var4];
                    var4 = var6.bind(var1)(var4);
                    var6 = var4.DEFAULT_FLUSH_INTERVAL;
                    var4 = 1000;
                    var4 = var6 / var4;
                    var5 = var5 - var4;
                    var4 = var0._flushShift;
                    var9 = var5 - var4;
                    var3 = var3.Map;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var18 = var4;
                    var3 = new var18[var3](var17);
                    var2 = var3 instanceof Object ? var3 : var4;
                    var3 = var0._buckets;
                    var8 = var3;
                    var4 = var8[Symbol.iterator];
                    var8 = var4().next;
                    var3 = 2;
                    var6 = 0;
                    var5 = 1;
                case 165:
                    var13 = var8().value;
                    var12 = var4;
                    if (!(var12 !== var1)) {
                        _fun99743_ip = 267;
                        continue _fun99743
                    }
                case 176: // try_start_0
                    var12 = _closure1_slot2;
                    var12 = var12.bind(var1)(var13, var3);
                    var10 = var12[var6];
                    var12 = var12[var5];
                    var11 = var12;
                    var13 = var12.timestamp;
                    var12 = var9;
                    if (!(var13 <= var12)) {
                        _fun99743_ip = 258;
                        continue _fun99743
                    }
                case 210:
                    var15 = var2;
                    var14 = var15.set;
                    var13 = var10;
                    var12 = var11;
                    var13 = var14.bind(var15)(var13, var12);
                    var13 = var0._bucketsTotalWeight;
                    var12 = var12.metric;
                    var12 = var12.weight;
                    var12 = var13 - var12;
                    var0._bucketsTotalWeight = var12;
                case 258: // try_end0
                    _fun99743_ip = 165;
                    continue _fun99743;
                case 260: // catch_target0
                    CatchBlockStart(arg_register = 3);
                    var4.return();
                    throw var3;
                case 267:
                    var8 = var2;
                    var3 = var8;
                    var4 = var3[Symbol.iterator];
                    var3 = var4().next;
                case 276:
                    var9 = var3().value;
                    var8 = var4;
                    if (!(var8 !== var1)) {
                        _fun99743_ip = 326;
                        continue _fun99743
                    }
                case 287: // try_start_1
                    var8 = _closure1_slot2;
                    var8 = var8.bind(var1)(var9, var5);
                    var10 = var8[var6];
                    var9 = var0._buckets;
                    var8 = var9.delete;
                    var8 = var8.bind(var9)(var10);
                case 317: // try_end1
                    _fun99743_ip = 276;
                    continue _fun99743;
                case 319: // catch_target1
                    CatchBlockStart(arg_register = 3);
                    var4.return();
                    throw var3;
                case 326:
                    var3 = var0._captureMetrics;
                    var2 = var3.bind(var0)(var2);
                    return var1;
                case 339:
                    var1 = false;
                    var0._forceFlush = var1;
                    var1 = 0;
                    var0._bucketsTotalWeight = var1;
                    var2 = var0._captureMetrics;
                    var1 = var0._buckets;
                    var1 = var2.bind(var0)(var1);
                    var1 = var0._buckets;
                    var0 = var1.clear;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = '_captureMetrics';
        var0.key = var5;
        var4 = function arg0() {
            _fun99744: for (var _fun99744_ip = 0;;) switch (_fun99744_ip) {
                case 0:
                    var2 = arg0;
                    var1 = var2.size;
                    var0 = 0;
                    if (!(var1 > var0)) {
                        _fun99744_ip = 97;
                        continue _fun99744
                    }
                case 14:
                    var0 = global;
                    var1 = var0.Array;
                    var0 = var1.from;
                    var2 = var0.bind(var1)(var2);
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var3 = _closure1_slot2;
                        var2 = undefined;
                        var1 = arg0;
                        var0 = 2;
                        var1 = var3.bind(var2)(var1, var0);
                        var0 = 1;
                        var0 = var1[var0];
                        return var0;
                    };
                    var3 = var1.bind(var2)(var0);
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.captureAggregateMetrics;
                    var0 = this;
                    var0 = var0._client;
                    var0 = var1.bind(var2)(var0, var3);
                case 97:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.MetricsAggregator = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 13004, 12887, 13008, 13009, 12941, 13010]);