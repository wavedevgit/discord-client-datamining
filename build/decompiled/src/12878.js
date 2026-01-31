// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var3 = function arg0() {
        _fun99069: for (var _fun99069_ip = 0;;) switch (_fun99069_ip) {
            case 0:
                var3 = arg0;
                var1 = 'number';
                var0 = typeof var3;
                if (!(var1 !== var0)) {
                    _fun99069_ip = 139;
                    continue _fun99069
                }
            case 17:
                var0 = global;
                var2 = var0.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun99069_ip = 110;
                    continue _fun99069
                }
            case 38:
                var0 = var0.Date;
                var0 = var3 instanceof var0;
                if (var0) {
                    _fun99069_ip = 87;
                    continue _fun99069
                }
            case 54:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var0 = var2.timestampInSeconds;
                var0 = var0.bind(var2)();
                _fun99069_ip = 108;
                continue _fun99069;
            case 87:
                var4 = _closure1_slot3;
                var1 = var3.getTime;
                var2 = var1.bind(var3)();
                var1 = undefined;
                var0 = var4.bind(var1)(var2);
            case 108:
                _fun99069_ip = 137;
                continue _fun99069;
            case 110:
                var1 = 0;
                var2 = var3[var1];
                var1 = 1;
                var4 = var3[var1];
                var1 = 1000000000;
                var1 = var4 / var1;
                var0 = var2 + var1;
            case 137:
                _fun99069_ip = 153;
                continue _fun99069;
            case 139:
                var2 = _closure1_slot3;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 153:
                return var0;
        }
    };
    var _closure1_slot2 = var3;
    var2 = function arg0() {
        _fun99070: for (var _fun99070_ip = 0;;) switch (_fun99070_ip) {
            case 0:
                var2 = arg0;
                var1 = 9999999999.0;
                var0 = var2;
                if (!(var0 > var1)) {
                    _fun99070_ip = 30;
                    continue _fun99070
                }
            case 20:
                var1 = 1000;
                var0 = var2 / var1;
            case 30:
                return var0;
        }
    };
    var _closure1_slot3 = var2;
    var2 = function arg0() {
        _fun99071: for (var _fun99071_ip = 0;;) switch (_fun99071_ip) {
            case 0:
                var1 = arg0;
                var0 = var1;
                var8 = undefined;
                var3 = undefined;
                var2 = undefined;
                var7 = undefined;
                var9 = undefined;
                var1 = var1.getSpanJSON;
                var4 = 'function';
                var1 = typeof var1;
                if (!(var4 !== var1)) {
                    _fun99071_ip = 373;
                    continue _fun99071
                }
            case 36: // try_start_0
                var4 = var0;
                var1 = var4.spanContext;
                var1 = var1.bind(var4)();
                var3 = var1.spanId;
                var2 = var1.traceId;
                var1 = var4.attributes;
                if (!var1) {
                    _fun99071_ip = 76;
                    continue _fun99071
                }
            case 70:
                var1 = var4.startTime;
            case 76:
                if (!var1) {
                    _fun99071_ip = 84;
                    continue _fun99071
                }
            case 79:
                var1 = var4.name;
            case 84:
                if (!var1) {
                    _fun99071_ip = 93;
                    continue _fun99071
                }
            case 87:
                var1 = var4.endTime;
            case 93:
                if (!var1) {
                    _fun99071_ip = 101;
                    continue _fun99071
                }
            case 96:
                var1 = var4.status;
            case 101:
                var1 = !var1;
                if (var1) {
                    _fun99071_ip = 353;
                    continue _fun99071
                }
            case 110:
                var1 = var0;
                var14 = var1.attributes;
                var7 = var14;
                var10 = var1.startTime;
                var13 = var1.name;
                var12 = var1.endTime;
                var11 = var1.parentSpanId;
                var9 = var1.status;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 0;
                var1 = var5[var1];
                var5 = var4.bind(var8)(var1);
                var4 = var5.dropUndefinedKeys;
                var1 = {};
                var15 = var3;
                var1.span_id = var15;
                var15 = var2;
                var1.trace_id = var15;
                var1.data = var14;
                var1.description = var13;
                var1.parent_span_id = var11;
                var11 = _closure1_slot2;
                var10 = var11.bind(var8)(var10);
                var1.start_timestamp = var10;
                var11 = var11.bind(var8)(var12);
                var10 = var11;
                if (var11) {
                    _fun99071_ip = 236;
                    continue _fun99071
                }
            case 234:
                var10 = undefined;
            case 236:
                var1.timestamp = var10;
                var10 = _closure1_slot6;
                var9 = var10.bind(var8)(var9);
                var1.status = var9;
                var10 = var7;
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var6 = 1;
                var11 = var9[var6];
                var11 = var7.bind(var8)(var11);
                var11 = var11.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var11 = var10[var11];
                var1.op = var11;
                var6 = var9[var6];
                var6 = var7.bind(var8)(var6);
                var6 = var6.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var6 = var10[var6];
                var1.origin = var6;
                var6 = 2;
                var6 = var9[var6];
                var8 = var7.bind(var8)(var6);
                var7 = var8.getMetricSummaryJsonForSpan;
                var6 = var0;
                var6 = var7.bind(var8)(var6);
                var1._metrics_summary = var6;
                var1 = var4.bind(var5)(var1);
            case 351: // try_end0
                return var1;
            case 353: // try_start_1
                var1 = {};
                var1.span_id = var3;
                var1.trace_id = var2;
            case 365: // try_end1
                return var1;
            case 367: // catch_target0 // catch_target1
                CatchBlockStart(arg_register = 1);
                var1 = {};
                return var1;
            case 373:
                var1 = var0;
                var0 = var1.getSpanJSON;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var _closure1_slot4 = var2;
    var4 = function arg0() {
        var1 = arg0;
        var0 = var1.spanContext;
        var0 = var0.bind(var1)();
        var1 = var0.traceFlags;
        var0 = 1;
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot5 = var4;
    var5 = function arg0() {
        _fun99073: for (var _fun99073_ip = 0;;) switch (_fun99073_ip) {
            case 0:
                var1 = arg0;
                if (!var1) {
                    _fun99073_ip = 46;
                    continue _fun99073
                }
            case 6:
                var3 = var1.code;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var5 = 3;
                var2 = var2[var5];
                var4 = undefined;
                var2 = var6.bind(var4)(var2);
                var2 = var2.SPAN_STATUS_UNSET;
                if (!(var3 === var2)) {
                    _fun99073_ip = 50;
                    continue _fun99073
                }
            case 46:
                var2 = undefined;
                return var2;
            case 50:
                var3 = var1.code;
                var2 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var5];
                var0 = var2.bind(var4)(var0);
                var2 = var0.SPAN_STATUS_OK;
                var0 = 'ok';
                if (!(var3 !== var2)) {
                    _fun99073_ip = 103;
                    continue _fun99073
                }
            case 86:
                var1 = var1.message;
                if (var1) {
                    _fun99073_ip = 100;
                    continue _fun99073
                }
            case 94:
                var1 = 'unknown_error';
            case 100:
                var0 = var1;
            case 103:
                return var0;
        }
    };
    var _closure1_slot6 = var5;
    var6 = function() {
        _fun99074: for (var _fun99074_ip = 0;;) switch (_fun99074_ip) {
            case 0:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 4;
                var1 = var4[var1];
                var5 = undefined;
                var3 = var2.bind(var5)(var1);
                var1 = var3.getMainCarrier;
                var3 = var1.bind(var3)();
                var1 = 5;
                var1 = var4[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.getAsyncContextStrategy;
                var2 = var1.bind(var2)(var3);
                var1 = var2.getActiveSpan;
                if (var1) {
                    _fun99074_ip = 122;
                    continue _fun99074
                }
            case 67:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 6;
                var0 = var6[var0];
                var3 = var4.bind(var5)(var0);
                var1 = var3._getSpanForScope;
                var0 = 7;
                var0 = var6[var0];
                var4 = var4.bind(var5)(var0);
                var0 = var4.getCurrentScope;
                var0 = var0.bind(var4)();
                var0 = var1.bind(var3)(var0);
                _fun99074_ip = 132;
                continue _fun99074;
            case 122:
                var1 = var2.getActiveSpan;
                var0 = var1.bind(var2)();
            case 132:
                return var0;
        }
    };
    var _closure1_slot7 = var6;
    var7 = global;
    var10 = var7.Object;
    var9 = var10.defineProperty;
    var8 = {};
    var7 = true;
    var8.value = var7;
    var7 = '__esModule';
    var7 = var9.bind(var10)(var1, var7, var8);
    var7 = 0;
    var1.TRACE_FLAG_NONE = var7;
    var7 = 1;
    var1.TRACE_FLAG_SAMPLED = var7;
    var7 = function arg0, arg1() {
        _fun99075: for (var _fun99075_ip = 0;;) switch (_fun99075_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var8 = var1._sentryRootSpan;
                if (var8) {
                    _fun99075_ip = 18;
                    continue _fun99075
                }
            case 15:
                var8 = var1;
            case 18:
                var6 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 0;
                var4 = var0[var5];
                var0 = undefined;
                var7 = var6.bind(var0)(var4);
                var6 = var7.addNonEnumerableProperty;
                var4 = '_sentryRootSpan';
                var4 = var6.bind(var7)(var3, var4, var8);
                var4 = var1._sentryChildSpans;
                if (var4) {
                    _fun99075_ip = 143;
                    continue _fun99075
                }
            case 68:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var5];
                var6 = var4.bind(var0)(var2);
                var5 = var6.addNonEnumerableProperty;
                var2 = global;
                var7 = var2.Set;
                var2 = new Array(1);
                var2[0] = var3;
                var4 = var7.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var7
                    }
                });
                var12 = var4;
                var11 = var2;
                var2 = new var12[var7](var11, var10);
                var4 = var2 instanceof Object ? var2 : var4;
                var2 = '_sentryChildSpans';
                var2 = var5.bind(var6)(var1, var2, var4);
                _fun99075_ip = 159;
                continue _fun99075;
            case 143:
                var2 = var1._sentryChildSpans;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
            case 159:
                return var0;
        }
    };
    var1.addChildSpanToSpan = var7;
    var1.getActiveSpan = var6;
    var6 = function arg0() {
        _fun99076: for (var _fun99076_ip = 0;;) switch (_fun99076_ip) {
            case 0:
                var1 = arg0;
                var0 = var1._sentryRootSpan;
                if (var0) {
                    _fun99076_ip = 15;
                    continue _fun99076
                }
            case 12:
                var0 = var1;
            case 15:
                return var0;
        }
    };
    var1.getRootSpan = var6;
    var6 = function arg0() {
        var0 = global;
        var2 = var0.Set;
        var3 = var2.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var2
            }
        });
        var6 = var3;
        var2 = new var6[var2](var5);
        var2 = var2 instanceof Object ? var2 : var3;
        var _closure2_slot0 = var2;
        var4 = function arg0() {
            _fun99078: for (var _fun99078_ip = 0;;) switch (_fun99078_ip) {
                case 0:
                    var0 = arg0;
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var1 = var1.bind(var2)(var0);
                    if (var1) {
                        _fun99078_ip = 128;
                        continue _fun99078
                    }
                case 23:
                    var1 = _closure1_slot5;
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    if (!var1) {
                        _fun99078_ip = 128;
                        continue _fun99078
                    }
                case 40:
                    var4 = _closure2_slot0;
                    var1 = var4.add;
                    var1 = var1.bind(var4)(var0);
                    var1 = var0._sentryChildSpans;
                    if (var1) {
                        _fun99078_ip = 69;
                        continue _fun99078
                    }
                case 63:
                    var4 = new Array(0);
                    _fun99078_ip = 93;
                    continue _fun99078;
                case 69:
                    var1 = global;
                    var5 = var1.Array;
                    var1 = var5.from;
                    var0 = var0._sentryChildSpans;
                    var4 = var1.bind(var5)(var0);
                case 93:
                    var0 = var4;
                    var1 = var0[Symbol.iterator];
                    var0 = var1().next;
                case 99:
                    var5 = var0().value;
                    var4 = var1;
                    if (!(var4 !== var2)) {
                        _fun99078_ip = 128;
                        continue _fun99078
                    }
                case 110: // try_start_0
                    var4 = _closure2_slot1;
                    var4 = var4.bind(var2)(var5);
                case 119: // try_end0
                    _fun99078_ip = 99;
                    continue _fun99078;
                case 121: // catch_target0
                    CatchBlockStart(arg_register = 0);
                    var1.return();
                    throw var0;
                case 128:
                    var0 = undefined;
                    return var0;
            }
        };
        var _closure2_slot1 = var4;
        var3 = undefined;
        var1 = arg0;
        var1 = var4.bind(var3)(var1);
        var1 = var0.Array;
        var0 = var1.from;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1.getSpanDescendants = var6;
    var1.getStatusMessage = var5;
    var5 = function arg0, arg1() {
        _fun99079: for (var _fun99079_ip = 0;;) switch (_fun99079_ip) {
            case 0:
                var0 = arg0;
                var1 = var0._sentryChildSpans;
                if (!var1) {
                    _fun99079_ip = 31;
                    continue _fun99079
                }
            case 12:
                var2 = var0._sentryChildSpans;
                var1 = var2.delete;
                var0 = arg1;
                var0 = var1.bind(var2)(var0);
            case 31:
                var0 = undefined;
                return var0;
        }
    };
    var1.removeChildSpanFromSpan = var5;
    var1.spanIsSampled = var4;
    var1.spanTimeInputToSeconds = var3;
    var1.spanToJSON = var2;
    var2 = function arg0() {
        var5 = arg0;
        var0 = var5.spanContext;
        var0 = var0.bind(var5)();
        var4 = var0.spanId;
        var3 = var0.traceId;
        var1 = _closure1_slot4;
        var2 = undefined;
        var1 = var1.bind(var2)(var5);
        var5 = var1.parent_span_id;
        var1 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 0;
        var0 = var6[var0];
        var2 = var1.bind(var2)(var0);
        var1 = var2.dropUndefinedKeys;
        var0 = {};
        var0.parent_span_id = var5;
        var0.span_id = var4;
        var0.trace_id = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.spanToTraceContext = var2;
    var2 = function arg0() {
        var2 = arg0;
        var0 = var2.spanContext;
        var0 = var0.bind(var2)();
        var4 = var0.traceId;
        var3 = var0.spanId;
        var1 = _closure1_slot5;
        var5 = undefined;
        var2 = var1.bind(var5)(var2);
        var1 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 0;
        var0 = var6[var0];
        var1 = var1.bind(var5)(var0);
        var0 = var1.generateSentryTraceHeader;
        var0 = var0.bind(var1)(var4, var3, var2);
        return var0;
    };
    var1.spanToTraceHeader = var2;
    var2 = function arg0() {
        var3 = arg0;
        var0 = var3.spanContext;
        var0 = var0.bind(var3)();
        var8 = var0.spanId;
        var7 = var0.traceId;
        var1 = _closure1_slot4;
        var2 = undefined;
        var1 = var1.bind(var2)(var3);
        var6 = var1.data;
        var5 = var1.op;
        var9 = var1.parent_span_id;
        var4 = var1.status;
        var3 = var1.origin;
        var1 = _closure1_slot0;
        var10 = _closure1_slot1;
        var0 = 0;
        var0 = var10[var0];
        var2 = var1.bind(var2)(var0);
        var1 = var2.dropUndefinedKeys;
        var0 = {};
        var0.parent_span_id = var9;
        var0.span_id = var8;
        var0.trace_id = var7;
        var0.data = var6;
        var0.op = var5;
        var0.status = var4;
        var0.origin = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.spanToTransactionTraceContext = var2;
    var0 = function arg0, arg1, arg2, arg3, arg4, arg5() {
        _fun99083: for (var _fun99083_ip = 0;;) switch (_fun99083_ip) {
            case 0:
                var2 = _closure1_slot7;
                var0 = undefined;
                var9 = var2.bind(var0)();
                if (!var9) {
                    _fun99083_ip = 70;
                    continue _fun99083
                }
            case 16:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 2;
                var1 = var3[var1];
                var8 = var2.bind(var0)(var1);
                var7 = var8.updateMetricSummaryOnSpan;
                var15 = arg0;
                var14 = arg1;
                var13 = arg2;
                var12 = arg3;
                var11 = arg4;
                var10 = arg5;
                var17 = var8;
                var16 = var9;
                var1 = var17[var7](var16, var15, var14, var13, var12, var11, var10, var9);
            case 70:
                return var0;
        }
    };
    var1.updateMetricSummaryOnActiveSpan = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12824, 12879, 12880, 12881, 12882, 12883, 12886, 12889]);