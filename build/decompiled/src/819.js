// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var2 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var10;
    var7 = function arg0() {
        _fun8719: for (var _fun8719_ip = 0;;) switch (_fun8719_ip) {
            case 0:
                var3 = arg0;
                var0 = undefined;
                if (!var3) {
                    _fun8719_ip = 41;
                    continue _fun8719
                }
            case 8:
                var4 = var3.length;
                var1 = 0;
                var1 = var4 > var1;
                var0 = undefined;
                if (!var1) {
                    _fun8719_ip = 41;
                    continue _fun8719
                }
            case 24:
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var4 = var0.context;
                    var7 = var4.spanId;
                    var5 = var4.traceId;
                    var6 = var4.traceFlags;
                    var3 = _closure1_slot3;
                    var2 = _closure1_slot4;
                    var1 = undefined;
                    var3 = var3.bind(var1)(var4, var2);
                    var4 = var0.attributes;
                    var0 = global;
                    var2 = var0.Object;
                    var1 = var2.assign;
                    var0 = {};
                    var0.span_id = var7;
                    var0.trace_id = var5;
                    var5 = 1;
                    var5 = var5 === var6;
                    var0.sampled = var5;
                    var0.attributes = var4;
                    var0 = var1.bind(var2)(var0, var3);
                    return var0;
                };
                var0 = var2.bind(var3)(var1);
            case 41:
                return var0;
        }
    };
    var _closure1_slot6 = var7;
    var4 = function arg0() {
        _fun8721: for (var _fun8721_ip = 0;;) switch (_fun8721_ip) {
            case 0:
                var3 = arg0;
                var1 = 'number';
                var0 = typeof var3;
                if (!(var1 !== var0)) {
                    _fun8721_ip = 140;
                    continue _fun8721
                }
            case 17:
                var0 = global;
                var2 = var0.Array;
                var1 = var2.isArray;
                var1 = var1.bind(var2)(var3);
                if (var1) {
                    _fun8721_ip = 111;
                    continue _fun8721
                }
            case 38:
                var0 = var0.Date;
                var0 = var3 instanceof var0;
                if (var0) {
                    _fun8721_ip = 88;
                    continue _fun8721
                }
            case 54:
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 5;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var4.bind(var0)(var2);
                var0 = var2.timestampInSeconds;
                var0 = var0.bind(var2)();
                _fun8721_ip = 109;
                continue _fun8721;
            case 88:
                var4 = _closure1_slot8;
                var1 = var3.getTime;
                var2 = var1.bind(var3)();
                var1 = undefined;
                var0 = var4.bind(var1)(var2);
            case 109:
                _fun8721_ip = 138;
                continue _fun8721;
            case 111:
                var1 = 0;
                var2 = var3[var1];
                var1 = 1;
                var4 = var3[var1];
                var1 = 1000000000;
                var1 = var4 / var1;
                var0 = var2 + var1;
            case 138:
                _fun8721_ip = 154;
                continue _fun8721;
            case 140:
                var2 = _closure1_slot8;
                var1 = undefined;
                var0 = var2.bind(var1)(var3);
            case 154:
                return var0;
        }
    };
    var _closure1_slot7 = var4;
    var0 = function arg0() {
        _fun8722: for (var _fun8722_ip = 0;;) switch (_fun8722_ip) {
            case 0:
                var2 = arg0;
                var1 = 9999999999.0;
                var0 = var2;
                if (!(var0 > var1)) {
                    _fun8722_ip = 30;
                    continue _fun8722
                }
            case 20:
                var1 = 1000;
                var0 = var2 / var1;
            case 30:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var3 = function arg0() {
        _fun8723: for (var _fun8723_ip = 0;;) switch (_fun8723_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.getSpanJSON;
                var2 = 'function';
                var0 = typeof var0;
                if (!(var2 !== var0)) {
                    _fun8723_ip = 359;
                    continue _fun8723
                }
            case 23:
                var0 = var1.spanContext;
                var0 = var0.bind(var1)();
                var3 = var0.spanId;
                var2 = var0.traceId;
                var0 = var1.attributes;
                if (!var0) {
                    _fun8723_ip = 60;
                    continue _fun8723
                }
            case 54:
                var0 = var1.startTime;
            case 60:
                if (!var0) {
                    _fun8723_ip = 68;
                    continue _fun8723
                }
            case 63:
                var0 = var1.name;
            case 68:
                if (!var0) {
                    _fun8723_ip = 77;
                    continue _fun8723
                }
            case 71:
                var0 = var1.endTime;
            case 77:
                if (!var0) {
                    _fun8723_ip = 85;
                    continue _fun8723
                }
            case 80:
                var0 = var1.status;
            case 85:
                var0 = !var0;
                if (var0) {
                    _fun8723_ip = 332;
                    continue _fun8723
                }
            case 94:
                var8 = var1.attributes;
                var11 = var1.startTime;
                var4 = var1.name;
                var10 = var1.endTime;
                var9 = var1.status;
                var6 = var1.links;
                var0 = {};
                var0.span_id = var3;
                var0.trace_id = var2;
                var0.data = var8;
                var0.description = var4;
                var4 = 'parentSpanId';
                var4 = var4 in var1;
                if (var4) {
                    _fun8723_ip = 200;
                    continue _fun8723
                }
            case 159:
                var4 = 'parentSpanContext';
                var7 = var4 in var1;
                var4 = undefined;
                if (!var7) {
                    _fun8723_ip = 198;
                    continue _fun8723
                }
            case 172:
                var7 = var1.parentSpanContext;
                var12 = null;
                var12 = var12 == var7;
                var5 = undefined;
                if (var12) {
                    _fun8723_ip = 195;
                    continue _fun8723
                }
            case 189:
                var5 = var7.spanId;
            case 195:
                var4 = var5;
            case 198:
                _fun8723_ip = 206;
                continue _fun8723;
            case 200:
                var4 = var1.parentSpanId;
            case 206:
                var0.parent_span_id = var4;
                var7 = _closure1_slot7;
                var5 = undefined;
                var11 = var7.bind(var5)(var11);
                var0.start_timestamp = var11;
                var7 = var7.bind(var5)(var10);
                if (var7) {
                    _fun8723_ip = 240;
                    continue _fun8723
                }
            case 238:
                var7 = undefined;
            case 240:
                var0.timestamp = var7;
                var7 = _closure1_slot11;
                var7 = var7.bind(var5)(var9);
                var0.status = var7;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 6;
                var11 = var10[var7];
                var11 = var9.bind(var5)(var11);
                var11 = var11.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                var11 = var8[var11];
                var0.op = var11;
                var7 = var10[var7];
                var7 = var9.bind(var5)(var7);
                var7 = var7.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                var7 = var8[var7];
                var0.origin = var7;
                var4 = _closure1_slot6;
                var4 = var4.bind(var5)(var6);
                var0.links = var4;
                return var0;
            case 332:
                var0 = {};
                var0.span_id = var3;
                var0.trace_id = var2;
                var2 = 0;
                var0.start_timestamp = var2;
                var2 = {};
                var0.data = var2;
                return var0;
            case 359:
                var0 = var1.getSpanJSON;
                var0 = var0.bind(var1)();
                return var0;
        }
    };
    var _closure1_slot9 = var3;
    var5 = function arg0() {
        var1 = arg0;
        var0 = var1.spanContext;
        var0 = var0.bind(var1)();
        var1 = var0.traceFlags;
        var0 = 1;
        var0 = var0 === var1;
        return var0;
    };
    var _closure1_slot10 = var5;
    var6 = function arg0() {
        _fun8725: for (var _fun8725_ip = 0;;) switch (_fun8725_ip) {
            case 0:
                var1 = arg0;
                if (!var1) {
                    _fun8725_ip = 46;
                    continue _fun8725
                }
            case 6:
                var3 = var1.code;
                var6 = _closure1_slot0;
                var2 = _closure1_slot1;
                var5 = 7;
                var2 = var2[var5];
                var4 = undefined;
                var2 = var6.bind(var4)(var2);
                var2 = var2.SPAN_STATUS_UNSET;
                if (!(var3 === var2)) {
                    _fun8725_ip = 50;
                    continue _fun8725
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
                    _fun8725_ip = 103;
                    continue _fun8725
                }
            case 86:
                var1 = var1.message;
                if (var1) {
                    _fun8725_ip = 100;
                    continue _fun8725
                }
            case 94:
                var1 = 'internal_error';
            case 100:
                var0 = var1;
            case 103:
                return var0;
        }
    };
    var _closure1_slot11 = var6;
    var9 = 0;
    var8 = var10[var9];
    var0 = undefined;
    var8 = var11.bind(var0)(var8);
    var _closure1_slot2 = var8;
    var8 = 1;
    var10 = var10[var8];
    var10 = var11.bind(var0)(var10);
    var _closure1_slot3 = var10;
    var10 = ['spanId', 'traceId', 'traceFlags'];
    var _closure1_slot4 = var10;
    var10 = global;
    var13 = var10.Object;
    var12 = var13.defineProperty;
    var10 = var10.Symbol;
    var11 = var10.toStringTag;
    var10 = {};
    var14 = 'Module';
    var10.value = var14;
    var10 = var12.bind(var13)(var2, var11, var10);
    var10 = false;
    var _closure1_slot5 = var10;
    var2.TRACE_FLAG_NONE = var9;
    var2.TRACE_FLAG_SAMPLED = var8;
    var8 = function arg0, arg1() {
        _fun8726: for (var _fun8726_ip = 0;;) switch (_fun8726_ip) {
            case 0:
                var1 = arg0;
                var3 = arg1;
                var8 = var1._sentryRootSpan;
                if (var8) {
                    _fun8726_ip = 18;
                    continue _fun8726
                }
            case 15:
                var8 = var1;
            case 18:
                var6 = _closure1_slot0;
                var0 = _closure1_slot1;
                var5 = 8;
                var4 = var0[var5];
                var0 = undefined;
                var7 = var6.bind(var0)(var4);
                var6 = var7.addNonEnumerableProperty;
                var4 = '_sentryRootSpan';
                var4 = var6.bind(var7)(var3, var4, var8);
                var4 = var1._sentryChildSpans;
                if (var4) {
                    _fun8726_ip = 144;
                    continue _fun8726
                }
            case 69:
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
                _fun8726_ip = 160;
                continue _fun8726;
            case 144:
                var2 = var1._sentryChildSpans;
                var1 = var2.add;
                var1 = var1.bind(var2)(var3);
            case 160:
                return var0;
        }
    };
    var2.addChildSpanToSpan = var8;
    var2.convertSpanLinksForEnvelope = var7;
    var7 = function() {
        _fun8727: for (var _fun8727_ip = 0;;) switch (_fun8727_ip) {
            case 0:
                var2 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 9;
                var1 = var4[var1];
                var5 = undefined;
                var3 = var2.bind(var5)(var1);
                var1 = var3.getMainCarrier;
                var3 = var1.bind(var3)();
                var1 = 10;
                var1 = var4[var1];
                var2 = var2.bind(var5)(var1);
                var1 = var2.getAsyncContextStrategy;
                var2 = var1.bind(var2)(var3);
                var1 = var2.getActiveSpan;
                if (var1) {
                    _fun8727_ip = 122;
                    continue _fun8727
                }
            case 67:
                var4 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 11;
                var0 = var6[var0];
                var3 = var4.bind(var5)(var0);
                var1 = var3._getSpanForScope;
                var0 = 12;
                var0 = var6[var0];
                var4 = var4.bind(var5)(var0);
                var0 = var4.getCurrentScope;
                var0 = var0.bind(var4)();
                var0 = var1.bind(var3)(var0);
                _fun8727_ip = 132;
                continue _fun8727;
            case 122:
                var1 = var2.getActiveSpan;
                var0 = var1.bind(var2)();
            case 132:
                return var0;
        }
    };
    var2.getActiveSpan = var7;
    var7 = function arg0() {
        _fun8728: for (var _fun8728_ip = 0;;) switch (_fun8728_ip) {
            case 0:
                var1 = arg0;
                var0 = var1._sentryRootSpan;
                if (var0) {
                    _fun8728_ip = 15;
                    continue _fun8728
                }
            case 12:
                var0 = var1;
            case 15:
                return var0;
        }
    };
    var2.getRootSpan = var7;
    var7 = function arg0() {
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
            _fun8730: for (var _fun8730_ip = 0;;) switch (_fun8730_ip) {
                case 0:
                    var0 = arg0;
                    var2 = _closure2_slot0;
                    var1 = var2.has;
                    var1 = var1.bind(var2)(var0);
                    if (var1) {
                        _fun8730_ip = 128;
                        continue _fun8730
                    }
                case 23:
                    var1 = _closure1_slot10;
                    var2 = undefined;
                    var1 = var1.bind(var2)(var0);
                    if (!var1) {
                        _fun8730_ip = 128;
                        continue _fun8730
                    }
                case 40:
                    var4 = _closure2_slot0;
                    var1 = var4.add;
                    var1 = var1.bind(var4)(var0);
                    var1 = var0._sentryChildSpans;
                    if (var1) {
                        _fun8730_ip = 69;
                        continue _fun8730
                    }
                case 63:
                    var4 = new Array(0);
                    _fun8730_ip = 93;
                    continue _fun8730;
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
                        _fun8730_ip = 128;
                        continue _fun8730
                    }
                case 110: // try_start_0
                    var4 = _closure2_slot1;
                    var4 = var4.bind(var2)(var5);
                case 119: // try_end0
                    _fun8730_ip = 99;
                    continue _fun8730;
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
    var2.getSpanDescendants = var7;
    var2.getStatusMessage = var6;
    var6 = function arg0, arg1() {
        _fun8731: for (var _fun8731_ip = 0;;) switch (_fun8731_ip) {
            case 0:
                var0 = arg0;
                var1 = var0._sentryChildSpans;
                if (!var1) {
                    _fun8731_ip = 31;
                    continue _fun8731
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
    var2.removeChildSpanFromSpan = var6;
    var6 = function() {
        _fun8732: for (var _fun8732_ip = 0;;) switch (_fun8732_ip) {
            case 0:
                var0 = _closure1_slot5;
                if (var0) {
                    _fun8732_ip = 56;
                    continue _fun8732
                }
            case 10:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 13;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.consoleSandbox;
                var0 = function() { // Environment: var0
                    var0 = global;
                    var2 = var0.console;
                    var1 = var2.warn;
                    var0 = '[Sentry] Returning null from `beforeSendSpan` is disallowed. To drop certain spans, configure the respective integrations directly or use `ignoreSpans`.';
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var0 = var2.bind(var3)(var0);
                var0 = true;
                _closure1_slot5 = var0;
            case 56:
                var0 = undefined;
                return var0;
        }
    };
    var2.showSpanDropWarning = var6;
    var2.spanIsSampled = var5;
    var2.spanTimeInputToSeconds = var4;
    var2.spanToJSON = var3;
    var3 = function arg0() {
        _fun8734: for (var _fun8734_ip = 0;;) switch (_fun8734_ip) {
            case 0:
                var8 = arg0;
                var0 = var8.spanContext;
                var0 = var0.bind(var8)();
                var2 = var0.spanId;
                var1 = var0.traceId;
                var3 = var0.isRemote;
                var5 = var2;
                if (var3) {
                    _fun8734_ip = 57;
                    continue _fun8734
                }
            case 37:
                var4 = _closure1_slot9;
                var0 = undefined;
                var0 = var4.bind(var0)(var8);
                var5 = var0.parent_span_id;
            case 57:
                var7 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = 2;
                var0 = var6[var0];
                var6 = undefined;
                var7 = var7.bind(var6)(var0);
                var0 = var7.getCapturedScopesOnSpan;
                var0 = var0.bind(var7)(var8);
                var7 = var0.scope;
                var0 = {};
                var0.parent_span_id = var5;
                if (!var3) {
                    _fun8734_ip = 172;
                    continue _fun8734
                }
            case 109:
                var3 = null;
                var5 = var3 == var7;
                var3 = undefined;
                if (var5) {
                    _fun8734_ip = 136;
                    continue _fun8734
                }
            case 120:
                var5 = var7.getPropagationContext;
                var5 = var5.bind(var7)();
                var3 = var5.propagationSpanId;
            case 136:
                if (var3) {
                    _fun8734_ip = 169;
                    continue _fun8734
                }
            case 139:
                var5 = _closure1_slot0;
                var7 = _closure1_slot1;
                var4 = 3;
                var4 = var7[var4];
                var5 = var5.bind(var6)(var4);
                var4 = var5.generateSpanId;
                var3 = var4.bind(var5)();
            case 169:
                var2 = var3;
            case 172:
                var0.span_id = var2;
                var0.trace_id = var1;
                return var0;
        }
    };
    var2.spanToTraceContext = var3;
    var3 = function arg0() {
        var2 = arg0;
        var0 = var2.spanContext;
        var0 = var0.bind(var2)();
        var4 = var0.traceId;
        var3 = var0.spanId;
        var1 = _closure1_slot10;
        var5 = undefined;
        var2 = var1.bind(var5)(var2);
        var1 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 4;
        var0 = var6[var0];
        var1 = var1.bind(var5)(var0);
        var0 = var1.generateSentryTraceHeader;
        var0 = var0.bind(var1)(var4, var3, var2);
        return var0;
    };
    var2.spanToTraceHeader = var3;
    var3 = function arg0() {
        var2 = arg0;
        var0 = var2.spanContext;
        var0 = var0.bind(var2)();
        var4 = var0.traceId;
        var3 = var0.spanId;
        var1 = _closure1_slot10;
        var5 = undefined;
        var2 = var1.bind(var5)(var2);
        var1 = _closure1_slot0;
        var6 = _closure1_slot1;
        var0 = 4;
        var0 = var6[var0];
        var1 = var1.bind(var5)(var0);
        var0 = var1.generateTraceparentHeader;
        var0 = var0.bind(var1)(var4, var3, var2);
        return var0;
    };
    var2.spanToTraceparentHeader = var3;
    var3 = function arg0() {
        var2 = arg0;
        var0 = var2.spanContext;
        var0 = var0.bind(var2)();
        var5 = var0.spanId;
        var4 = var0.traceId;
        var1 = _closure1_slot9;
        var0 = undefined;
        var1 = var1.bind(var0)(var2);
        var3 = var1.data;
        var2 = var1.op;
        var0 = {};
        var6 = var1.parent_span_id;
        var0.parent_span_id = var6;
        var0.span_id = var5;
        var0.trace_id = var4;
        var0.data = var3;
        var0.op = var2;
        var2 = var1.status;
        var0.status = var2;
        var2 = var1.origin;
        var0.origin = var2;
        var1 = var1.links;
        var0.links = var1;
        return var0;
    };
    var2.spanToTransactionTraceContext = var3;
    var1 = function arg0, arg1() {
        var3 = arg0;
        var6 = arg1;
        var0 = var3.updateName;
        var0 = var0.bind(var3)(var6);
        var2 = var3.setAttributes;
        var5 = _closure1_slot2;
        var7 = _closure1_slot0;
        var8 = _closure1_slot1;
        var1 = 6;
        var4 = var8[var1];
        var0 = undefined;
        var4 = var7.bind(var0)(var4);
        var10 = var4.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
        var9 = {};
        var4 = 'custom';
        var4 = var5.bind(var0)(var9, var10, var4);
        var1 = var8[var1];
        var1 = var7.bind(var0)(var1);
        var1 = var1.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME;
        var1 = var5.bind(var0)(var4, var1, var6);
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.updateSpanName = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 29, 820, 829, 833, 837, 838, 839, 822, 825, 840, 843, 847, 824]);