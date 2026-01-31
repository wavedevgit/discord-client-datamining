// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var8;
    var4 = function arg0, arg1, arg2, arg3() {
        var4 = arg0;
        var3 = var4.addEvent;
        var6 = _closure1_slot3;
        var2 = _closure1_slot0;
        var7 = _closure1_slot1;
        var1 = 2;
        var5 = var7[var1];
        var0 = undefined;
        var5 = var2.bind(var0)(var5);
        var9 = var5.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_VALUE;
        var8 = {};
        var5 = arg2;
        var5 = var6.bind(var0)(var8, var9, var5);
        var1 = var7[var1];
        var1 = var2.bind(var0)(var1);
        var2 = var1.SEMANTIC_ATTRIBUTE_SENTRY_MEASUREMENT_UNIT;
        var1 = arg3;
        var2 = var6.bind(var0)(var5, var2, var1);
        var1 = arg1;
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var _closure1_slot5 = var4;
    var3 = function arg0() {
        _fun12596: for (var _fun12596_ip = 0;;) switch (_fun12596_ip) {
            case 0:
                var12 = arg0;
                var1 = _closure1_slot0;
                var0 = _closure1_slot1;
                var16 = 2;
                var0 = var0[var16];
                var15 = undefined;
                var2 = var1.bind(var15)(var0);
                var1 = var2.dropUndefinedKeys;
                var10 = global;
                var5 = var10.Object;
                var4 = var5.assign;
                var6 = var10.Object;
                var3 = var6.assign;
                var0 = {};
                var7 = 'ok';
                var0.status = var7;
                var3 = var3.bind(var6)(var0, var12);
                var0 = {};
                var6 = var12.span_id;
                if (var6) {
                    _fun12596_ip = 128;
                    continue _fun12596
                }
            case 85:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var16];
                var7 = var7.bind(var15)(var6);
                var6 = var7.uuid4;
                var8 = var6.bind(var7)();
                var7 = var8.substring;
                var6 = 16;
                var6 = var7.bind(var8)(var6);
                _fun12596_ip = 134;
                continue _fun12596;
            case 128:
                var6 = var12.span_id;
            case 134:
                var0.span_id = var6;
                var6 = var12.trace_id;
                if (var6) {
                    _fun12596_ip = 177;
                    continue _fun12596
                }
            case 148:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var6 = var6[var16];
                var7 = var7.bind(var15)(var6);
                var6 = var7.uuid4;
                var6 = var6.bind(var7)();
                _fun12596_ip = 183;
                continue _fun12596;
            case 177:
                var6 = var12.trace_id;
            case 183:
                var0.trace_id = var6;
                var9 = _closure1_slot0;
                var6 = _closure1_slot1;
                var7 = var6[var16];
                var8 = var9.bind(var15)(var7);
                var7 = var8.dropUndefinedKeys;
                var11 = var10.Object;
                var10 = var11.assign;
                var14 = _closure1_slot3;
                var13 = var6[var16];
                var13 = var9.bind(var15)(var13);
                var18 = var13.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var17 = var12.op;
                var13 = {};
                var13 = var14.bind(var15)(var13, var18, var17);
                var6 = var6[var16];
                var6 = var9.bind(var15)(var6);
                var9 = var6.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var6 = var12.origin;
                var9 = var14.bind(var15)(var13, var9, var6);
                var6 = var12.data;
                if (var6) {
                    _fun12596_ip = 295;
                    continue _fun12596
                }
            case 291:
                var6 = {};
                _fun12596_ip = 300;
                continue _fun12596;
            case 295:
                var6 = var12.data;
            case 300:
                var6 = var10.bind(var11)(var9, var6);
                var6 = var7.bind(var8)(var6);
                var0.data = var6;
                var0 = var4.bind(var5)(var3, var0);
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot6 = var3;
    var5 = global;
    var10 = var5.Object;
    var9 = var10.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = var5.Date;
    var5 = var6.now;
    var5 = var5.bind(var6)();
    var _closure1_slot4 = var5;
    var5 = 'component';
    var2.defaultTransactionSource = var5;
    var5 = 'custom';
    var2.customTransactionSource = var5;
    var5 = 0.05;
    var2.MARGIN_OF_ERROR_SECONDS = var5;
    var5 = function() {
        var0 = _closure1_slot4;
        return var0;
    };
    var2.getTimeOriginMilliseconds = var5;
    var5 = function arg0() {
        _fun12598: for (var _fun12598_ip = 0;;) switch (_fun12598_ip) {
            case 0:
                var4 = arg0;
                var1 = !var4;
                var0 = !var1;
                if (var1) {
                    _fun12598_ip = 84;
                    continue _fun12598
                }
            case 12:
                var1 = global;
                var3 = var1.Math;
                var2 = var3.abs;
                var6 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 2;
                var5 = var5[var1];
                var1 = undefined;
                var5 = var6.bind(var1)(var5);
                var1 = var5.timestampInSeconds;
                var1 = var1.bind(var5)();
                var1 = var1 - var4;
                var2 = var2.bind(var3)(var1);
                var1 = 0.05;
                var0 = var2 <= var1;
            case 84:
                return var0;
        }
    };
    var2.isNearToNow = var5;
    var5 = function arg0, arg1() {
        _fun12599: for (var _fun12599_ip = 0;;) switch (_fun12599_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 2;
                var1 = var0[var5];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var2 = var4.spanToJSON;
                var1 = arg1;
                var1 = var2.bind(var4)(var1);
                var2 = var1.timestamp;
                var1 = var1.start_timestamp;
                var4 = var2;
                if (!var4) {
                    _fun12599_ip = 60;
                    continue _fun12599
                }
            case 57:
                var4 = var1;
            case 60:
                if (!var4) {
                    _fun12599_ip = 114;
                    continue _fun12599
                }
            case 63:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var3 = var3[var5];
                var5 = var4.bind(var0)(var3);
                var4 = var5.setMeasurement;
                var2 = var2 - var1;
                var1 = 1000;
                var3 = var1 * var2;
                var2 = arg0;
                var1 = 'millisecond';
                var1 = var4.bind(var5)(var2, var3, var1);
            case 114:
                return var0;
        }
    };
    var2.setSpanDurationAsMeasurement = var5;
    var5 = function arg0, arg1, arg2() {
        _fun12600: for (var _fun12600_ip = 0;;) switch (_fun12600_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 2;
                var1 = var1[var0];
                var0 = undefined;
                var4 = var2.bind(var0)(var1);
                var2 = var4.spanToJSON;
                var1 = arg1;
                var1 = var2.bind(var4)(var1);
                var2 = var1.timestamp;
                var1 = var1.start_timestamp;
                var4 = var2;
                if (!var4) {
                    _fun12600_ip = 60;
                    continue _fun12600
                }
            case 57:
                var4 = var1;
            case 60:
                if (!var4) {
                    _fun12600_ip = 97;
                    continue _fun12600
                }
            case 63:
                var5 = _closure1_slot5;
                var2 = var2 - var1;
                var1 = 1000;
                var7 = var1 * var2;
                var9 = arg2;
                var8 = arg0;
                var6 = 'millisecond';
                var10 = undefined;
                var1 = var10[var5](var9, var8, var7, var6, var5);
            case 97:
                return var0;
        }
    };
    var2.setSpanDurationAsMeasurementOnSpan = var5;
    var2.setSpanMeasurement = var4;
    var4 = function arg0() {
        _fun12601: for (var _fun12601_ip = 0;;) switch (_fun12601_ip) {
            case 0:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 2;
                var2 = var4[var2];
                var6 = undefined;
                var4 = var3.bind(var6)(var2);
                var3 = var4.getSpanDescendants;
                var2 = arg0;
                var4 = var3.bind(var4)(var2);
                var3 = var4.map;
                var2 = function(arg0) { // Environment: var0
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = var2.spanToJSON;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.timestamp;
                    return var0;
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.filter;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                var5 = var2.bind(var3)(var0);
                var2 = var5.length;
                var0 = undefined;
                if (!var2) {
                    _fun12601_ip = 120;
                    continue _fun12601
                }
            case 81:
                var2 = global;
                var3 = var2.Math;
                var4 = var3.max;
                var3 = var4.apply;
                var2 = var2.Math;
                var1 = _closure1_slot2;
                var1 = var1.bind(var6)(var5);
                var0 = var3.bind(var4)(var2, var1);
            case 120:
                return var0;
        }
    };
    var2.getLatestChildSpanEndTimestamp = var4;
    var4 = function() {
        _fun12604: for (var _fun12604_ip = 0;;) switch (_fun12604_ip) {
            case 0:
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var6 = 3;
                var0 = var0[var6];
                var5 = undefined;
                var0 = var2.bind(var5)(var0);
                var0 = var0.RN_GLOBAL_OBJ;
                var2 = var0.__BUNDLE_START_TIME__;
                var3 = _closure1_slot0;
                var0 = _closure1_slot1;
                if (var2) {
                    _fun12604_ip = 84;
                    continue _fun12604
                }
            case 48:
                var4 = 2;
                var4 = var0[var4];
                var4 = var3.bind(var5)(var4);
                var8 = var4.debug;
                var7 = var8.warn;
                var4 = 'Missing the bundle start time on the global object.';
                var4 = var7.bind(var8)(var4);
                return var5;
            case 84:
                var0 = var0[var6];
                var0 = var3.bind(var5)(var0);
                var0 = var0.RN_GLOBAL_OBJ;
                var3 = var0.nativePerformanceNow;
                var0 = var2;
                if (!var3) {
                    _fun12604_ip = 169;
                    continue _fun12604
                }
            case 111:
                var3 = global;
                var4 = var3.Date;
                var3 = var4.now;
                var3 = var3.bind(var4)();
                var4 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var6];
                var1 = var4.bind(var5)(var1);
                var4 = var1.RN_GLOBAL_OBJ;
                var1 = var4.nativePerformanceNow;
                var1 = var1.bind(var4)();
                var1 = var3 - var1;
                var0 = var1 + var2;
            case 169:
                return var0;
        }
    };
    var2.getBundleStartTimestampMs = var4;
    var2.createSpanJSON = var3;
    var1 = function arg0, arg1() {
        _fun12605: for (var _fun12605_ip = 0;;) switch (_fun12605_ip) {
            case 0:
                var0 = arg0;
                var2 = _closure1_slot6;
                var1 = global;
                var4 = var1.Object;
                var3 = var4.assign;
                var1 = {};
                var5 = var0.op;
                var1.op = var5;
                var5 = var0.trace_id;
                var1.trace_id = var5;
                var5 = var0.span_id;
                var1.parent_span_id = var5;
                var0 = var0.origin;
                if (var0) {
                    _fun12605_ip = 69;
                    continue _fun12605
                }
            case 65:
                var0 = 'manual';
            case 69:
                var1.origin = var0;
                var0 = arg1;
                var1 = var3.bind(var4)(var1, var0);
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
        }
    };
    var2.createChildSpanJSON = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 77, 817, 816]);