// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        _fun9033: for (var _fun9033_ip = 0;;) switch (_fun9033_ip) {
            case 0:
                var3 = arg0;
                var0 = var3;
                if (!var0) {
                    _fun9033_ip = 20;
                    continue _fun9033
                }
            case 9:
                var2 = 'number';
                var1 = typeof var3;
                var0 = var2 === var1;
            case 20:
                if (var0) {
                    _fun9033_ip = 35;
                    continue _fun9033
                }
            case 23:
                var1 = global;
                var1 = var1.Date;
                var0 = var3 instanceof var1;
            case 35:
                if (var0) {
                    _fun9033_ip = 56;
                    continue _fun9033
                }
            case 38:
                var1 = global;
                var2 = var1.Array;
                var1 = var2.isArray;
                var0 = var1.bind(var2)(var3);
            case 56:
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        _fun9034: for (var _fun9034_ip = 0;;) switch (_fun9034_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.start_timestamp;
                if (!var0) {
                    _fun9034_ip = 18;
                    continue _fun9034
                }
            case 12:
                var0 = var1.timestamp;
            case 18:
                if (!var0) {
                    _fun9034_ip = 27;
                    continue _fun9034
                }
            case 21:
                var0 = var1.span_id;
            case 27:
                if (!var0) {
                    _fun9034_ip = 36;
                    continue _fun9034
                }
            case 30:
                var0 = var1.trace_id;
            case 36:
                var0 = !var0;
                var0 = !var0;
                return var0;
        }
    };
    var _closure1_slot8 = var0;
    var0 = function arg0() {
        _fun9035: for (var _fun9035_ip = 0;;) switch (_fun9035_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot6;
                var0 = var2 instanceof var0;
                if (!var0) {
                    _fun9035_ip = 27;
                    continue _fun9035
                }
            case 17:
                var1 = var2.isStandaloneSpan;
                var0 = var1.bind(var2)();
            case 27:
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var1 = var1.Symbol;
    var4 = var1.toStringTag;
    var1 = {};
    var7 = 'Module';
    var1.value = var7;
    var1 = var5.bind(var6)(var2, var4, var1);
    var1 = function() { // Environment: var3
        var3 = _closure1_slot5;
        var2 = function() {
            _fun9037: for (var _fun9037_ip = 0;;) switch (_fun9037_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var4 = undefined;
                    var1 = arguments.length;
                    var3 = 0;
                    if (!(var1 > var3)) {
                        _fun9037_ip = 24;
                        continue _fun9037
                    }
                case 16:
                    var1 = arguments[var3];
                    if (!(var0 === var1)) {
                        _fun9037_ip = 28;
                        continue _fun9037
                    }
                case 24:
                    var1 = {};
                    _fun9037_ip = 32;
                    continue _fun9037;
                case 28:
                    var1 = arguments[var3];
                case 32:
                    var5 = _closure1_slot4;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var0)(var2, var4);
                    var4 = var1.traceId;
                    if (var4) {
                        _fun9037_ip = 91;
                        continue _fun9037
                    }
                case 61:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 4;
                    var5 = var7[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.generateTraceId;
                    var4 = var5.bind(var6)();
                case 91:
                    var2._traceId = var4;
                    var4 = var1.spanId;
                    if (var4) {
                        _fun9037_ip = 136;
                        continue _fun9037
                    }
                case 106:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 4;
                    var5 = var7[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.generateSpanId;
                    var4 = var5.bind(var6)();
                case 136:
                    var2._spanId = var4;
                    var4 = var1.startTimestamp;
                    if (var4) {
                        _fun9037_ip = 181;
                        continue _fun9037
                    }
                case 151:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 5;
                    var5 = var7[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.timestampInSeconds;
                    var4 = var5.bind(var6)();
                case 181:
                    var2._startTime = var4;
                    var4 = var1.links;
                    var2._links = var4;
                    var4 = {};
                    var2._attributes = var4;
                    var4 = var2.setAttributes;
                    var5 = global;
                    var7 = var5.Object;
                    var6 = var7.assign;
                    var9 = _closure1_slot3;
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var3 = 6;
                    var8 = var10[var3];
                    var8 = var5.bind(var0)(var8);
                    var12 = var8.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                    var11 = {};
                    var8 = 'manual';
                    var8 = var9.bind(var0)(var11, var12, var8);
                    var3 = var10[var3];
                    var3 = var5.bind(var0)(var3);
                    var5 = var3.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                    var3 = var1.op;
                    var5 = var9.bind(var0)(var8, var5, var3);
                    var3 = var1.attributes;
                    var3 = var6.bind(var7)(var5, var3);
                    var3 = var4.bind(var2)(var3);
                    var3 = var1.name;
                    var2._name = var3;
                    var3 = var1.parentSpanId;
                    if (!var3) {
                        _fun9037_ip = 345;
                        continue _fun9037
                    }
                case 333:
                    var3 = var1.parentSpanId;
                    var2._parentSpanId = var3;
                case 345:
                    var3 = 'sampled';
                    var3 = var3 in var1;
                    if (!var3) {
                        _fun9037_ip = 368;
                        continue _fun9037
                    }
                case 356:
                    var3 = var1.sampled;
                    var2._sampled = var3;
                case 368:
                    var3 = var1.endTimestamp;
                    if (!var3) {
                        _fun9037_ip = 389;
                        continue _fun9037
                    }
                case 377:
                    var3 = var1.endTimestamp;
                    var2._endTime = var3;
                case 389:
                    var3 = new Array(0);
                    var2._events = var3;
                    var1 = var1.isStandalone;
                    var2._isStandaloneSpan = var1;
                    var1 = var2._endTime;
                    if (!var1) {
                        _fun9037_ip = 430;
                        continue _fun9037
                    }
                case 420:
                    var1 = var2._onSpanEnded;
                    var1 = var1.bind(var2)();
                case 430:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'addLink';
        var0.key = var1;
        var1 = function arg0() {
            _fun9038: for (var _fun9038_ip = 0;;) switch (_fun9038_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var1 = var0._links;
                    if (var1) {
                        _fun9038_ip = 31;
                        continue _fun9038
                    }
                case 15:
                    var1 = new Array(1);
                    var1[0] = var3;
                    var0._links = var1;
                    _fun9038_ip = 47;
                    continue _fun9038;
                case 31:
                    var2 = var0._links;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                case 47:
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(16);
        var1[0] = var0;
        var0 = {};
        var5 = 'addLinks';
        var0.key = var5;
        var5 = function arg0() {
            _fun9039: for (var _fun9039_ip = 0;;) switch (_fun9039_ip) {
                case 0:
                    var6 = arg0;
                    var0 = this;
                    var1 = var0._links;
                    if (var1) {
                        _fun9039_ip = 23;
                        continue _fun9039
                    }
                case 15:
                    var0._links = var6;
                    _fun9039_ip = 59;
                    continue _fun9039;
                case 23:
                    var4 = var0._links;
                    var3 = var4.push;
                    var2 = var3.apply;
                    var5 = _closure1_slot2;
                    var1 = undefined;
                    var1 = var5.bind(var1)(var6);
                    var1 = var2.bind(var3)(var4, var1);
                case 59:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'recordException';
        var0.key = var5;
        var5 = function arg0, arg1() {
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'spanContext';
        var0.key = var5;
        var5 = function() {
            _fun9041: for (var _fun9041_ip = 0;;) switch (_fun9041_ip) {
                case 0:
                    var1 = this;
                    var0 = {};
                    var2 = var1._spanId;
                    var0.spanId = var2;
                    var2 = var1._traceId;
                    var0.traceId = var2;
                    var1 = var1._sampled;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    if (var1) {
                        _fun9041_ip = 69;
                        continue _fun9041
                    }
                case 61:
                    var1 = var2.TRACE_FLAG_NONE;
                    _fun9041_ip = 75;
                    continue _fun9041;
                case 69:
                    var1 = var2.TRACE_FLAG_SAMPLED;
                case 75:
                    var0.traceFlags = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'setAttribute';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun9042: for (var _fun9042_ip = 0;;) switch (_fun9042_ip) {
                case 0:
                    var2 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var1 = undefined;
                    if (!(var1 !== var3)) {
                        _fun9042_ip = 27;
                        continue _fun9042
                    }
                case 15:
                    var1 = var0._attributes;
                    var1[var2] = var3;
                    _fun9042_ip = 37;
                    continue _fun9042;
                case 27:
                    var1 = var0._attributes;
                    var1 = delete var1[var2];
                case 37:
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'setAttributes';
        var0.key = var5;
        var5 = function arg0() {
            var4 = arg0;
            var0 = this;
            var _closure3_slot0 = var4;
            var _closure3_slot1 = var0;
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var3 = var2.bind(var3)(var4);
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var3 = arg0;
                var2 = _closure3_slot1;
                var1 = var2.setAttribute;
                var0 = _closure3_slot0;
                var0 = var0[var3];
                var0 = var1.bind(var2)(var3, var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'updateStartTime';
        var0.key = var5;
        var5 = function arg0() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 7;
            var1 = var1[var0];
            var0 = undefined;
            var3 = var2.bind(var0)(var1);
            var2 = var3.spanTimeInputToSeconds;
            var1 = arg0;
            var2 = var2.bind(var3)(var1);
            var1 = this;
            var1._startTime = var2;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'setStatus';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0._status = var1;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'updateName';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = arg0;
            var0._name = var1;
            var3 = var0.setAttribute;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 6;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var4.bind(var1)(var2);
            var2 = var1.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
            var1 = 'custom';
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'end';
        var0.key = var5;
        var5 = function arg0() {
            _fun9048: for (var _fun9048_ip = 0;;) switch (_fun9048_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._endTime;
                    if (var0) {
                        _fun9048_ip = 90;
                        continue _fun9048
                    }
                case 12:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 7;
                    var0 = var4[var0];
                    var2 = undefined;
                    var6 = var3.bind(var2)(var0);
                    var5 = var6.spanTimeInputToSeconds;
                    var0 = arg0;
                    var0 = var5.bind(var6)(var0);
                    var1._endTime = var0;
                    var0 = 8;
                    var0 = var4[var0];
                    var2 = var3.bind(var2)(var0);
                    var0 = var2.logSpanEnd;
                    var0 = var0.bind(var2)(var1);
                    var0 = var1._onSpanEnded;
                    var0 = var0.bind(var1)();
                case 90:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'getSpanJSON';
        var0.key = var5;
        var5 = function() {
            _fun9049: for (var _fun9049_ip = 0;;) switch (_fun9049_ip) {
                case 0:
                    var1 = this;
                    var0 = {};
                    var2 = var1._attributes;
                    var0.data = var2;
                    var2 = var1._name;
                    var0.description = var2;
                    var8 = var1._attributes;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var3 = 6;
                    var5 = var7[var3];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var5 = var5.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                    var5 = var8[var5];
                    var0.op = var5;
                    var5 = var1._parentSpanId;
                    var0.parent_span_id = var5;
                    var5 = var1._spanId;
                    var0.span_id = var5;
                    var5 = var1._startTime;
                    var0.start_timestamp = var5;
                    var5 = 7;
                    var8 = var7[var5];
                    var10 = var6.bind(var4)(var8);
                    var9 = var10.getStatusMessage;
                    var8 = var1._status;
                    var8 = var9.bind(var10)(var8);
                    var0.status = var8;
                    var8 = var1._endTime;
                    var0.timestamp = var8;
                    var8 = var1._traceId;
                    var0.trace_id = var8;
                    var9 = var1._attributes;
                    var8 = var7[var3];
                    var8 = var6.bind(var4)(var8);
                    var8 = var8.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                    var8 = var9[var8];
                    var0.origin = var8;
                    var9 = var1._attributes;
                    var8 = var7[var3];
                    var8 = var6.bind(var4)(var8);
                    var8 = var8.SEMANTIC_ATTRIBUTE_PROFILE_ID;
                    var8 = var9[var8];
                    var0.profile_id = var8;
                    var8 = var1._attributes;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var3 = var3.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME;
                    var3 = var8[var3];
                    var0.exclusive_time = var3;
                    var3 = 9;
                    var3 = var7[var3];
                    var7 = var6.bind(var4)(var3);
                    var6 = var7.timedEventsToMeasurements;
                    var3 = var1._events;
                    var3 = var6.bind(var7)(var3);
                    var0.measurements = var3;
                    var3 = var1._isStandaloneSpan;
                    if (!var3) {
                        _fun9049_ip = 323;
                        continue _fun9049
                    }
                case 291:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var5];
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.getRootSpan;
                    var6 = var6.bind(var7)(var1);
                    var3 = var6 === var1;
                case 323:
                    if (var3) {
                        _fun9049_ip = 328;
                        continue _fun9049
                    }
                case 326:
                    var3 = undefined;
                case 328:
                    var0.is_segment = var3;
                    var6 = var1._isStandaloneSpan;
                    var3 = undefined;
                    if (!var6) {
                        _fun9049_ip = 388;
                        continue _fun9049
                    }
                case 344:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var5];
                    var7 = var7.bind(var4)(var6);
                    var6 = var7.getRootSpan;
                    var7 = var6.bind(var7)(var1);
                    var6 = var7.spanContext;
                    var6 = var6.bind(var7)();
                    var3 = var6.spanId;
                case 388:
                    var0.segment_id = var3;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var5];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.convertSpanLinksForEnvelope;
                    var1 = var1._links;
                    var1 = var2.bind(var3)(var1);
                    var0.links = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'isRecording';
        var0.key = var5;
        var5 = function() {
            _fun9050: for (var _fun9050_ip = 0;;) switch (_fun9050_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._endTime;
                    var0 = !var0;
                    if (!var0) {
                        _fun9050_ip = 27;
                        continue _fun9050
                    }
                case 15:
                    var1 = var1._sampled;
                    var1 = !var1;
                    var0 = !var1;
                case 27:
                    return var0;
            }
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'addEvent';
        var0.key = var5;
        var5 = function arg0, arg1, arg2() {
            _fun9051: for (var _fun9051_ip = 0;;) switch (_fun9051_ip) {
                case 0:
                    var4 = arg0;
                    var1 = arg1;
                    var3 = arg2;
                    var0 = this;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 10;
                    var5 = var6[var5];
                    var6 = undefined;
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.DEBUG_BUILD;
                    if (!var5) {
                        _fun9051_ip = 89;
                        continue _fun9051
                    }
                case 46:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 11;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var8 = var5.debug;
                    var7 = var8.log;
                    var5 = '[Tracing] Adding an event to span:';
                    var5 = var7.bind(var8)(var5, var4);
                case 89:
                    var5 = _closure1_slot7;
                    var7 = var5.bind(var6)(var1);
                    var5 = var1;
                    if (var7) {
                        _fun9051_ip = 140;
                        continue _fun9051
                    }
                case 104:
                    if (var3) {
                        _fun9051_ip = 137;
                        continue _fun9051
                    }
                case 107:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var7 = 5;
                    var7 = var9[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.timestampInSeconds;
                    var3 = var7.bind(var8)();
                case 137:
                    var5 = var3;
                case 140:
                    var3 = _closure1_slot7;
                    var3 = var3.bind(var6)(var1);
                    if (var3) {
                        _fun9051_ip = 159;
                        continue _fun9051
                    }
                case 152:
                    if (var1) {
                        _fun9051_ip = 157;
                        continue _fun9051
                    }
                case 155:
                    var1 = {};
                case 157:
                    _fun9051_ip = 161;
                    continue _fun9051;
                case 159:
                    var1 = {};
                case 161:
                    var3 = {};
                    var3.name = var4;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 7;
                    var2 = var7[var2];
                    var4 = var4.bind(var6)(var2);
                    var2 = var4.spanTimeInputToSeconds;
                    var2 = var2.bind(var4)(var5);
                    var3.time = var2;
                    var3.attributes = var1;
                    var2 = var0._events;
                    var1 = var2.push;
                    var1 = var1.bind(var2)(var3);
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'isStandaloneSpan';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._isStandaloneSpan;
            var0 = !var0;
            var0 = !var0;
            return var0;
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = '_onSpanEnded';
        var0.key = var5;
        var5 = function() {
            _fun9053: for (var _fun9053_ip = 0;;) switch (_fun9053_ip) {
                case 0:
                    var8 = this;
                    var3 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var4 = 12;
                    var1 = var0[var4];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.getClient;
                    var7 = var1.bind(var3)();
                    if (!var7) {
                        _fun9053_ip = 59;
                        continue _fun9053
                    }
                case 41:
                    var3 = var7.emit;
                    var1 = 'spanEnd';
                    var1 = var3.bind(var7)(var1, var8);
                case 59:
                    var1 = var8._isStandaloneSpan;
                    if (var1) {
                        _fun9053_ip = 106;
                        continue _fun9053
                    }
                case 68:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 7;
                    var1 = var5[var1];
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.getRootSpan;
                    var1 = var1.bind(var3)(var8);
                    if (!(var8 === var1)) {
                        _fun9053_ip = 432;
                        continue _fun9053
                    }
                case 106:
                    var1 = var8._isStandaloneSpan;
                    if (var1) {
                        _fun9053_ip = 214;
                        continue _fun9053
                    }
                case 115:
                    var1 = var8._convertSpanToTransaction;
                    var5 = var1.bind(var8)();
                    if (!var5) {
                        _fun9053_ip = 432;
                        continue _fun9053
                    }
                case 131:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 14;
                    var1 = var6[var1];
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.getCapturedScopesOnSpan;
                    var1 = var1.bind(var3)(var8);
                    var3 = var1.scope;
                    if (var3) {
                        _fun9053_ip = 198;
                        continue _fun9053
                    }
                case 171:
                    var6 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var4];
                    var6 = var6.bind(var0)(var1);
                    var1 = var6.getCurrentScope;
                    var3 = var1.bind(var6)();
                case 198:
                    var1 = var3.captureEvent;
                    var1 = var1.bind(var3)(var5);
                    _fun9053_ip = 432;
                    continue _fun9053;
                case 214:
                    var5 = var8._sampled;
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    if (var5) {
                        _fun9053_ip = 322;
                        continue _fun9053
                    }
                case 231:
                    var5 = 10;
                    var5 = var1[var5];
                    var5 = var3.bind(var0)(var5);
                    var5 = var5.DEBUG_BUILD;
                    if (!var5) {
                        _fun9053_ip = 294;
                        continue _fun9053
                    }
                case 252:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 11;
                    var2 = var6[var2];
                    var2 = var5.bind(var0)(var2);
                    var6 = var2.debug;
                    var5 = var6.log;
                    var2 = '[Tracing] Discarding standalone span because its trace was not chosen to be sampled.';
                    var2 = var5.bind(var6)(var2);
                case 294:
                    if (!var7) {
                        _fun9053_ip = 432;
                        continue _fun9053
                    }
                case 300:
                    var6 = var7.recordDroppedEvent;
                    var5 = 'sample_rate';
                    var2 = 'span';
                    var2 = var6.bind(var7)(var5, var2);
                    _fun9053_ip = 432;
                    continue _fun9053;
                case 322:
                    var2 = 13;
                    var2 = var1[var2];
                    var6 = var3.bind(var0)(var2);
                    var5 = var6.createSpanEnvelope;
                    var2 = new Array(1);
                    var2[0] = var8;
                    var2 = var5.bind(var6)(var2, var7);
                    var1 = var1[var4];
                    var3 = var3.bind(var0)(var1);
                    var1 = var3.getClient;
                    var4 = var1.bind(var3)();
                    if (!var4) {
                        _fun9053_ip = 432;
                        continue _fun9053
                    }
                case 376:
                    var1 = 1;
                    var1 = var2[var1];
                    if (!var1) {
                        _fun9053_ip = 410;
                        continue _fun9053
                    }
                case 386:
                    var3 = var1.length;
                    var1 = 0;
                    if (!(var1 !== var3)) {
                        _fun9053_ip = 410;
                        continue _fun9053
                    }
                case 397:
                    var1 = var4.sendEnvelope;
                    var1 = var1.bind(var4)(var2);
                    _fun9053_ip = 432;
                    continue _fun9053;
                case 410:
                    var3 = var4.recordDroppedEvent;
                    var2 = 'before_send';
                    var1 = 'span';
                    var1 = var3.bind(var4)(var2, var1);
                case 432:
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = '_convertSpanToTransaction';
        var0.key = var5;
        var4 = function() {
            _fun9054: for (var _fun9054_ip = 0;;) switch (_fun9054_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = _closure1_slot8;
                    var4 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var16 = 7;
                    var0 = var0[var16];
                    var7 = undefined;
                    var4 = var4.bind(var7)(var0);
                    var0 = var4.spanToJSON;
                    var0 = var0.bind(var4)(var1);
                    var0 = var2.bind(var7)(var0);
                    if (!var0) {
                        _fun9054_ip = 249;
                        continue _fun9054
                    }
                case 60:
                    var0 = var1._name;
                    if (var0) {
                        _fun9054_ip = 152;
                        continue _fun9054
                    }
                case 69:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 10;
                    var0 = var4[var0];
                    var0 = var2.bind(var7)(var0);
                    var0 = var0.DEBUG_BUILD;
                    if (!var0) {
                        _fun9054_ip = 140;
                        continue _fun9054
                    }
                case 98:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 11;
                    var0 = var4[var0];
                    var0 = var2.bind(var7)(var0);
                    var4 = var0.debug;
                    var2 = var4.warn;
                    var0 = 'Transaction has no name, falling back to `<unlabeled transaction>`.';
                    var0 = var2.bind(var4)(var0);
                case 140:
                    var0 = '<unlabeled transaction>';
                    var1._name = var0;
                case 152:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 14;
                    var0 = var4[var0];
                    var2 = var2.bind(var7)(var0);
                    var0 = var2.getCapturedScopesOnSpan;
                    var0 = var0.bind(var2)(var1);
                    var11 = var0.scope;
                    var9 = var0.isolationScope;
                    var4 = null;
                    var2 = var4 == var11;
                    var0 = undefined;
                    if (var2) {
                        _fun9054_ip = 237;
                        continue _fun9054
                    }
                case 206:
                    var2 = var11.getScopeData;
                    var2 = var2.bind(var11)();
                    var2 = var2.sdkProcessingMetadata;
                    var4 = var4 == var2;
                    var0 = undefined;
                    if (var4) {
                        _fun9054_ip = 237;
                        continue _fun9054
                    }
                case 231:
                    var0 = var2.normalizedRequest;
                case 237:
                    var4 = var1._sampled;
                    var2 = true;
                    if (!(var2 !== var4)) {
                        _fun9054_ip = 251;
                        continue _fun9054
                    }
                case 249:
                    return var7;
                case 251:
                    var15 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var2 = var13[var16];
                    var4 = var15.bind(var7)(var2);
                    var2 = var4.getSpanDescendants;
                    var5 = var2.bind(var4)(var1);
                    var4 = var5.filter;
                    var2 = function(arg0) { // Environment: var12
                        _fun9055: for (var _fun9055_ip = 0;;) switch (_fun9055_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = _closure3_slot0;
                                var0 = var3 !== var0;
                                if (!var0) {
                                    _fun9055_ip = 34;
                                    continue _fun9055
                                }
                            case 17:
                                var2 = _closure1_slot9;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3);
                                var0 = !var1;
                            case 34:
                                return var0;
                        }
                    };
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.map;
                    var2 = function(arg0) { // Environment: var12
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 7;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.spanToJSON;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var5 = var4.bind(var5)(var2);
                    var4 = var5.filter;
                    var2 = _closure1_slot8;
                    var14 = var4.bind(var5)(var2);
                    var5 = var1._attributes;
                    var2 = 6;
                    var4 = var13[var2];
                    var4 = var15.bind(var7)(var4);
                    var4 = var4.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                    var10 = var5[var4];
                    var4 = var1._attributes;
                    var2 = var13[var2];
                    var2 = var15.bind(var7)(var2);
                    var2 = var2.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME;
                    var2 = delete var4[var2];
                    var4 = var14.forEach;
                    var2 = function(arg0) { // Environment: var12
                        var0 = arg0;
                        var2 = var0.data;
                        var3 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 6;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.SEMANTIC_ATTRIBUTE_SENTRY_CUSTOM_SPAN_NAME;
                        var1 = delete var2[var1];
                        return var0;
                    };
                    var2 = var4.bind(var14)(var2);
                    var2 = global;
                    var6 = var2.Object;
                    var5 = var6.assign;
                    var4 = {};
                    var8 = {};
                    var13 = var13[var16];
                    var15 = var15.bind(var7)(var13);
                    var13 = var15.spanToTransactionTraceContext;
                    var13 = var13.bind(var15)(var1);
                    var8.trace = var13;
                    var4.contexts = var8;
                    var13 = var14.length;
                    var15 = 1000;
                    var8 = var14;
                    if (!(var13 > var15)) {
                        _fun9054_ip = 485;
                        continue _fun9054
                    }
                case 456:
                    var13 = var14.sort;
                    var12 = function(arg0, arg1) { // Environment: var12
                        var0 = arg0;
                        var1 = var0.start_timestamp;
                        var0 = arg1;
                        var0 = var0.start_timestamp;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var14 = var13.bind(var14)(var12);
                    var13 = var14.slice;
                    var12 = 0;
                    var8 = var13.bind(var14)(var12, var15);
                case 485:
                    var4.spans = var8;
                    var8 = var1._startTime;
                    var4.start_timestamp = var8;
                    var8 = var1._endTime;
                    var4.timestamp = var8;
                    var8 = var1._name;
                    var4.transaction = var8;
                    var8 = 'transaction';
                    var4.type = var8;
                    var8 = {};
                    var8.capturedSpanScope = var11;
                    var8.capturedSpanIsolationScope = var9;
                    var11 = _closure1_slot0;
                    var12 = _closure1_slot1;
                    var9 = 15;
                    var9 = var12[var9];
                    var11 = var11.bind(var7)(var9);
                    var9 = var11.getDynamicSamplingContextFromSpan;
                    var9 = var9.bind(var11)(var1);
                    var8.dynamicSamplingContext = var9;
                    var4.sdkProcessingMetadata = var8;
                    var4.request = var0;
                    var0 = var10;
                    if (!var0) {
                        _fun9054_ip = 611;
                        continue _fun9054
                    }
                case 595:
                    var8 = {};
                    var9 = {};
                    var9.source = var10;
                    var8.transaction_info = var9;
                    var0 = var8;
                case 611:
                    var0 = var5.bind(var6)(var4, var0);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 9;
                    var4 = var6[var4];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.timedEventsToMeasurements;
                    var1 = var1._events;
                    var1 = var4.bind(var5)(var1);
                    var4 = var1;
                    if (!var4) {
                        _fun9054_ip = 681;
                        continue _fun9054
                    }
                case 660:
                    var6 = var2.Object;
                    var5 = var6.keys;
                    var5 = var5.bind(var6)(var1);
                    var4 = var5.length;
                case 681:
                    if (!var4) {
                        _fun9054_ip = 784;
                        continue _fun9054
                    }
                case 684:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 10;
                    var4 = var6[var4];
                    var4 = var5.bind(var7)(var4);
                    var4 = var4.DEBUG_BUILD;
                    if (!var4) {
                        _fun9054_ip = 778;
                        continue _fun9054
                    }
                case 713:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 11;
                    var3 = var5[var3];
                    var3 = var4.bind(var7)(var3);
                    var5 = var3.debug;
                    var4 = var5.log;
                    var6 = var2.JSON;
                    var3 = var6.stringify;
                    var2 = 2;
                    var3 = var3.bind(var6)(var1, var7, var2);
                    var2 = '[Measurements] Adding measurements to transaction event';
                    var2 = var4.bind(var5)(var2, var3);
                case 778:
                    var0.measurements = var1;
                case 784:
                    return var0;
            }
        };
        var0.value = var4;
        var1[15] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var _closure1_slot6 = var1;
    var2.SentrySpan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 77, 6, 7, 829, 837, 838, 819, 859, 860, 823, 824, 847, 861, 820, 855]);