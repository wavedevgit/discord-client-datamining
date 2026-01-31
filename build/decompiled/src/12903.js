// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0() {
        _fun99275: for (var _fun99275_ip = 0;;) switch (_fun99275_ip) {
            case 0:
                var3 = arg0;
                var0 = var3;
                if (!var0) {
                    _fun99275_ip = 20;
                    continue _fun99275
                }
            case 9:
                var2 = 'number';
                var1 = typeof var3;
                var0 = var2 === var1;
            case 20:
                if (var0) {
                    _fun99275_ip = 35;
                    continue _fun99275
                }
            case 23:
                var1 = global;
                var1 = var1.Date;
                var0 = var3 instanceof var1;
            case 35:
                if (var0) {
                    _fun99275_ip = 56;
                    continue _fun99275
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
    var _closure1_slot6 = var0;
    var0 = function arg0() {
        _fun99276: for (var _fun99276_ip = 0;;) switch (_fun99276_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.start_timestamp;
                if (!var0) {
                    _fun99276_ip = 18;
                    continue _fun99276
                }
            case 12:
                var0 = var1.timestamp;
            case 18:
                if (!var0) {
                    _fun99276_ip = 27;
                    continue _fun99276
                }
            case 21:
                var0 = var1.span_id;
            case 27:
                if (!var0) {
                    _fun99276_ip = 36;
                    continue _fun99276
                }
            case 30:
                var0 = var1.trace_id;
            case 36:
                var0 = !var0;
                var0 = !var0;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var0 = function arg0() {
        _fun99277: for (var _fun99277_ip = 0;;) switch (_fun99277_ip) {
            case 0:
                var2 = arg0;
                var0 = _closure1_slot5;
                var0 = var2 instanceof var0;
                if (!var0) {
                    _fun99277_ip = 27;
                    continue _fun99277
                }
            case 17:
                var1 = var2.isStandaloneSpan;
                var0 = var1.bind(var2)();
            case 27:
                return var0;
        }
    };
    var _closure1_slot8 = var0;
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
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4.value = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var2, var1, var4);
    var1 = function() { // Environment: var3
        var3 = _closure1_slot4;
        var2 = function() {
            _fun99279: for (var _fun99279_ip = 0;;) switch (_fun99279_ip) {
                case 0:
                    var2 = this;
                    var0 = undefined;
                    var4 = undefined;
                    var1 = arguments.length;
                    var3 = 0;
                    if (!(var1 > var3)) {
                        _fun99279_ip = 24;
                        continue _fun99279
                    }
                case 16:
                    var1 = arguments[var3];
                    if (!(var0 === var1)) {
                        _fun99279_ip = 28;
                        continue _fun99279
                    }
                case 24:
                    var1 = {};
                    _fun99279_ip = 32;
                    continue _fun99279;
                case 28:
                    var1 = arguments[var3];
                case 32:
                    var5 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var0)(var2, var4);
                    var4 = var1.traceId;
                    if (var4) {
                        _fun99279_ip = 91;
                        continue _fun99279
                    }
                case 61:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 3;
                    var5 = var7[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.uuid4;
                    var4 = var5.bind(var6)();
                case 91:
                    var2._traceId = var4;
                    var4 = var1.spanId;
                    if (var4) {
                        _fun99279_ip = 150;
                        continue _fun99279
                    }
                case 106:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 3;
                    var5 = var7[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.uuid4;
                    var7 = var5.bind(var6)();
                    var6 = var7.substring;
                    var5 = 16;
                    var4 = var6.bind(var7)(var5);
                case 150:
                    var2._spanId = var4;
                    var4 = var1.startTimestamp;
                    if (var4) {
                        _fun99279_ip = 195;
                        continue _fun99279
                    }
                case 165:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 3;
                    var5 = var7[var5];
                    var6 = var6.bind(var0)(var5);
                    var5 = var6.timestampInSeconds;
                    var4 = var5.bind(var6)();
                case 195:
                    var2._startTime = var4;
                    var4 = {};
                    var2._attributes = var4;
                    var4 = var2.setAttributes;
                    var5 = global;
                    var7 = var5.Object;
                    var6 = var7.assign;
                    var9 = _closure1_slot2;
                    var5 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var3 = 4;
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
                        _fun99279_ip = 347;
                        continue _fun99279
                    }
                case 335:
                    var3 = var1.parentSpanId;
                    var2._parentSpanId = var3;
                case 347:
                    var3 = 'sampled';
                    var3 = var3 in var1;
                    if (!var3) {
                        _fun99279_ip = 370;
                        continue _fun99279
                    }
                case 358:
                    var3 = var1.sampled;
                    var2._sampled = var3;
                case 370:
                    var3 = var1.endTimestamp;
                    if (!var3) {
                        _fun99279_ip = 391;
                        continue _fun99279
                    }
                case 379:
                    var3 = var1.endTimestamp;
                    var2._endTime = var3;
                case 391:
                    var3 = new Array(0);
                    var2._events = var3;
                    var1 = var1.isStandalone;
                    var2._isStandaloneSpan = var1;
                    var1 = var2._endTime;
                    if (!var1) {
                        _fun99279_ip = 432;
                        continue _fun99279
                    }
                case 422:
                    var1 = var2._onSpanEnded;
                    var1 = var1.bind(var2)();
                case 432:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'addLink';
        var0.key = var1;
        var1 = function arg0() {
            var0 = this;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(16);
        var1[0] = var0;
        var0 = {};
        var5 = 'addLinks';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            return var0;
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
            _fun99283: for (var _fun99283_ip = 0;;) switch (_fun99283_ip) {
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
                    var2 = 5;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    if (var1) {
                        _fun99283_ip = 69;
                        continue _fun99283
                    }
                case 61:
                    var1 = var2.TRACE_FLAG_NONE;
                    _fun99283_ip = 75;
                    continue _fun99283;
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
            _fun99284: for (var _fun99284_ip = 0;;) switch (_fun99284_ip) {
                case 0:
                    var2 = arg0;
                    var3 = arg1;
                    var0 = this;
                    var1 = undefined;
                    if (!(var1 !== var3)) {
                        _fun99284_ip = 27;
                        continue _fun99284
                    }
                case 15:
                    var1 = var0._attributes;
                    var1[var2] = var3;
                    _fun99284_ip = 37;
                    continue _fun99284;
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
            var0 = 5;
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
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'end';
        var0.key = var5;
        var5 = function arg0() {
            _fun99290: for (var _fun99290_ip = 0;;) switch (_fun99290_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._endTime;
                    if (var0) {
                        _fun99290_ip = 90;
                        continue _fun99290
                    }
                case 12:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var0 = 5;
                    var0 = var4[var0];
                    var2 = undefined;
                    var6 = var3.bind(var2)(var0);
                    var5 = var6.spanTimeInputToSeconds;
                    var0 = arg0;
                    var0 = var5.bind(var6)(var0);
                    var1._endTime = var0;
                    var0 = 6;
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
            _fun99291: for (var _fun99291_ip = 0;;) switch (_fun99291_ip) {
                case 0:
                    var6 = this;
                    var5 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var0 = 3;
                    var0 = var9[var0];
                    var7 = undefined;
                    var2 = var5.bind(var7)(var0);
                    var1 = var2.dropUndefinedKeys;
                    var0 = {};
                    var3 = var6._attributes;
                    var0.data = var3;
                    var3 = var6._name;
                    var0.description = var3;
                    var10 = var6._attributes;
                    var3 = 4;
                    var8 = var9[var3];
                    var8 = var5.bind(var7)(var8);
                    var8 = var8.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                    var8 = var10[var8];
                    var0.op = var8;
                    var8 = var6._parentSpanId;
                    var0.parent_span_id = var8;
                    var8 = var6._spanId;
                    var0.span_id = var8;
                    var8 = var6._startTime;
                    var0.start_timestamp = var8;
                    var8 = 5;
                    var10 = var9[var8];
                    var12 = var5.bind(var7)(var10);
                    var11 = var12.getStatusMessage;
                    var10 = var6._status;
                    var10 = var11.bind(var12)(var10);
                    var0.status = var10;
                    var10 = var6._endTime;
                    var0.timestamp = var10;
                    var10 = var6._traceId;
                    var0.trace_id = var10;
                    var11 = var6._attributes;
                    var10 = var9[var3];
                    var10 = var5.bind(var7)(var10);
                    var10 = var10.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                    var10 = var11[var10];
                    var0.origin = var10;
                    var10 = 7;
                    var10 = var9[var10];
                    var11 = var5.bind(var7)(var10);
                    var10 = var11.getMetricSummaryJsonForSpan;
                    var10 = var10.bind(var11)(var6);
                    var0._metrics_summary = var10;
                    var11 = var6._attributes;
                    var10 = var9[var3];
                    var10 = var5.bind(var7)(var10);
                    var10 = var10.SEMANTIC_ATTRIBUTE_PROFILE_ID;
                    var10 = var11[var10];
                    var0.profile_id = var10;
                    var10 = var6._attributes;
                    var3 = var9[var3];
                    var3 = var5.bind(var7)(var3);
                    var3 = var3.SEMANTIC_ATTRIBUTE_EXCLUSIVE_TIME;
                    var3 = var10[var3];
                    var0.exclusive_time = var3;
                    var3 = 8;
                    var3 = var9[var3];
                    var9 = var5.bind(var7)(var3);
                    var5 = var9.timedEventsToMeasurements;
                    var3 = var6._events;
                    var3 = var5.bind(var9)(var3);
                    var0.measurements = var3;
                    var3 = var6._isStandaloneSpan;
                    if (!var3) {
                        _fun99291_ip = 369;
                        continue _fun99291
                    }
                case 337:
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var5 = var5[var8];
                    var9 = var9.bind(var7)(var5);
                    var5 = var9.getRootSpan;
                    var5 = var5.bind(var9)(var6);
                    var3 = var5 === var6;
                case 369:
                    if (var3) {
                        _fun99291_ip = 374;
                        continue _fun99291
                    }
                case 372:
                    var3 = undefined;
                case 374:
                    var0.is_segment = var3;
                    var5 = var6._isStandaloneSpan;
                    var3 = undefined;
                    if (!var5) {
                        _fun99291_ip = 434;
                        continue _fun99291
                    }
                case 390:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var8];
                    var5 = var5.bind(var7)(var4);
                    var4 = var5.getRootSpan;
                    var5 = var4.bind(var5)(var6);
                    var4 = var5.spanContext;
                    var4 = var4.bind(var5)();
                    var3 = var4.spanId;
                case 434:
                    var0.segment_id = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'isRecording';
        var0.key = var5;
        var5 = function() {
            _fun99292: for (var _fun99292_ip = 0;;) switch (_fun99292_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._endTime;
                    var0 = !var0;
                    if (!var0) {
                        _fun99292_ip = 27;
                        continue _fun99292
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
            _fun99293: for (var _fun99293_ip = 0;;) switch (_fun99293_ip) {
                case 0:
                    var4 = arg0;
                    var1 = arg1;
                    var3 = arg2;
                    var0 = this;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 9;
                    var5 = var6[var5];
                    var6 = undefined;
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.DEBUG_BUILD;
                    if (!var5) {
                        _fun99293_ip = 89;
                        continue _fun99293
                    }
                case 46:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var5 = 3;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var8 = var5.logger;
                    var7 = var8.log;
                    var5 = '[Tracing] Adding an event to span:';
                    var5 = var7.bind(var8)(var5, var4);
                case 89:
                    var5 = _closure1_slot6;
                    var7 = var5.bind(var6)(var1);
                    var5 = var1;
                    if (var7) {
                        _fun99293_ip = 140;
                        continue _fun99293
                    }
                case 104:
                    if (var3) {
                        _fun99293_ip = 137;
                        continue _fun99293
                    }
                case 107:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var7 = 3;
                    var7 = var9[var7];
                    var8 = var8.bind(var6)(var7);
                    var7 = var8.timestampInSeconds;
                    var3 = var7.bind(var8)();
                case 137:
                    var5 = var3;
                case 140:
                    var3 = _closure1_slot6;
                    var3 = var3.bind(var6)(var1);
                    if (var3) {
                        _fun99293_ip = 159;
                        continue _fun99293
                    }
                case 152:
                    if (var1) {
                        _fun99293_ip = 157;
                        continue _fun99293
                    }
                case 155:
                    var1 = {};
                case 157:
                    _fun99293_ip = 161;
                    continue _fun99293;
                case 159:
                    var1 = {};
                case 161:
                    var3 = {};
                    var3.name = var4;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 5;
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
            _fun99295: for (var _fun99295_ip = 0;;) switch (_fun99295_ip) {
                case 0:
                    var5 = this;
                    var3 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var8 = 10;
                    var2 = var0[var8];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getClient;
                    var4 = var2.bind(var3)();
                    if (!var4) {
                        _fun99295_ip = 59;
                        continue _fun99295
                    }
                case 41:
                    var3 = var4.emit;
                    var2 = 'spanEnd';
                    var2 = var3.bind(var4)(var2, var5);
                case 59:
                    var2 = var5._isStandaloneSpan;
                    if (var2) {
                        _fun99295_ip = 106;
                        continue _fun99295
                    }
                case 68:
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 5;
                    var2 = var6[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getRootSpan;
                    var2 = var2.bind(var3)(var5);
                    if (!(var5 === var2)) {
                        _fun99295_ip = 365;
                        continue _fun99295
                    }
                case 106:
                    var2 = var5._isStandaloneSpan;
                    if (var2) {
                        _fun99295_ip = 214;
                        continue _fun99295
                    }
                case 115:
                    var2 = var5._convertSpanToTransaction;
                    var6 = var2.bind(var5)();
                    if (!var6) {
                        _fun99295_ip = 365;
                        continue _fun99295
                    }
                case 131:
                    var3 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 12;
                    var2 = var7[var2];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.getCapturedScopesOnSpan;
                    var2 = var2.bind(var3)(var5);
                    var3 = var2.scope;
                    if (var3) {
                        _fun99295_ip = 198;
                        continue _fun99295
                    }
                case 171:
                    var7 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var8];
                    var7 = var7.bind(var0)(var2);
                    var2 = var7.getCurrentScope;
                    var3 = var2.bind(var7)();
                case 198:
                    var2 = var3.captureEvent;
                    var2 = var2.bind(var3)(var6);
                    _fun99295_ip = 365;
                    continue _fun99295;
                case 214:
                    var6 = var5._sampled;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    if (var6) {
                        _fun99295_ip = 319;
                        continue _fun99295
                    }
                case 231:
                    var6 = 9;
                    var6 = var3[var6];
                    var6 = var2.bind(var0)(var6);
                    var6 = var6.DEBUG_BUILD;
                    if (!var6) {
                        _fun99295_ip = 294;
                        continue _fun99295
                    }
                case 252:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 3;
                    var1 = var7[var1];
                    var1 = var6.bind(var0)(var1);
                    var7 = var1.logger;
                    var6 = var7.log;
                    var1 = '[Tracing] Discarding standalone span because its trace was not chosen to be sampled.';
                    var1 = var6.bind(var7)(var1);
                case 294:
                    if (!var4) {
                        _fun99295_ip = 365;
                        continue _fun99295
                    }
                case 297:
                    var7 = var4.recordDroppedEvent;
                    var6 = 'sample_rate';
                    var1 = 'span';
                    var1 = var7.bind(var4)(var6, var1);
                    _fun99295_ip = 365;
                    continue _fun99295;
                case 319:
                    var1 = 11;
                    var1 = var3[var1];
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.createSpanEnvelope;
                    var1 = new Array(1);
                    var1[0] = var5;
                    var2 = var2.bind(var3)(var1, var4);
                    var1 = function arg0() {
                        _fun99296: for (var _fun99296_ip = 0;;) switch (_fun99296_ip) {
                            case 0:
                                var4 = arg0;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 10;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getClient;
                                var3 = var1.bind(var2)();
                                if (var3) {
                                    _fun99296_ip = 43;
                                    continue _fun99296
                                }
                            case 41:
                                return var0;
                            case 43:
                                var1 = 1;
                                var1 = var4[var1];
                                if (!var1) {
                                    _fun99296_ip = 112;
                                    continue _fun99296
                                }
                            case 53:
                                var2 = var1.length;
                                var1 = 0;
                                if (!(var1 !== var2)) {
                                    _fun99296_ip = 112;
                                    continue _fun99296
                                }
                            case 64:
                                var1 = var3.getTransport;
                                var2 = var1.bind(var3)();
                                if (!var2) {
                                    _fun99296_ip = 110;
                                    continue _fun99296
                                }
                            case 77:
                                var1 = var2.send;
                                var5 = var1.bind(var2)(var4);
                                var4 = var5.then;
                                var2 = null;
                                var1 = function(arg0) { // Environment: var1
                                    _fun99297: for (var _fun99297_ip = 0;;) switch (_fun99297_ip) {
                                        case 0:
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var0 = 9;
                                            var2 = var2[var0];
                                            var0 = undefined;
                                            var2 = var3.bind(var0)(var2);
                                            var2 = var2.DEBUG_BUILD;
                                            if (!var2) {
                                                _fun99297_ip = 80;
                                                continue _fun99297
                                            }
                                        case 34:
                                            var2 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var1 = 3;
                                            var1 = var3[var1];
                                            var1 = var2.bind(var0)(var1);
                                            var4 = var1.logger;
                                            var3 = var4.error;
                                            var2 = 'Error while sending span:';
                                            var1 = arg0;
                                            var1 = var3.bind(var4)(var2, var1);
                                        case 80:
                                            return var0;
                                    }
                                };
                                var1 = var4.bind(var5)(var2, var1);
                            case 110:
                                return var0;
                            case 112:
                                var2 = var3.recordDroppedEvent;
                                var1 = 'before_send';
                                var0 = 'span';
                                var0 = var2.bind(var3)(var1, var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var1.bind(var0)(var2);
                case 365:
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = '_convertSpanToTransaction';
        var0.key = var5;
        var4 = function() {
            _fun99298: for (var _fun99298_ip = 0;;) switch (_fun99298_ip) {
                case 0:
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var4 = _closure1_slot7;
                    var5 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var16 = 5;
                    var1 = var1[var16];
                    var2 = undefined;
                    var5 = var5.bind(var2)(var1);
                    var1 = var5.spanToJSON;
                    var1 = var1.bind(var5)(var3);
                    var1 = var4.bind(var2)(var1);
                    if (var1) {
                        _fun99298_ip = 59;
                        continue _fun99298
                    }
                case 57:
                    return var2;
                case 59:
                    var1 = var3._name;
                    if (var1) {
                        _fun99298_ip = 151;
                        continue _fun99298
                    }
                case 68:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 9;
                    var1 = var5[var1];
                    var1 = var4.bind(var2)(var1);
                    var1 = var1.DEBUG_BUILD;
                    if (!var1) {
                        _fun99298_ip = 139;
                        continue _fun99298
                    }
                case 97:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 3;
                    var1 = var5[var1];
                    var1 = var4.bind(var2)(var1);
                    var5 = var1.logger;
                    var4 = var5.warn;
                    var1 = 'Transaction has no name, falling back to `<unlabeled transaction>`.';
                    var1 = var4.bind(var5)(var1);
                case 139:
                    var1 = '<unlabeled transaction>';
                    var3._name = var1;
                case 151:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 12;
                    var1 = var5[var1];
                    var4 = var4.bind(var2)(var1);
                    var1 = var4.getCapturedScopesOnSpan;
                    var1 = var1.bind(var4)(var3);
                    var8 = var1.scope;
                    var1 = var1.isolationScope;
                    var5 = var8;
                    if (var5) {
                        _fun99298_ip = 230;
                        continue _fun99298
                    }
                case 200:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 10;
                    var4 = var7[var4];
                    var6 = var6.bind(var2)(var4);
                    var4 = var6.getCurrentScope;
                    var5 = var4.bind(var6)();
                case 230:
                    var4 = var5.getClient;
                    var4 = var4.bind(var5)();
                    if (var4) {
                        _fun99298_ip = 273;
                        continue _fun99298
                    }
                case 243:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 10;
                    var5 = var7[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.getClient;
                    var4 = var5.bind(var6)();
                case 273:
                    var6 = var3._sampled;
                    var5 = true;
                    if (!(var5 === var6)) {
                        _fun99298_ip = 851;
                        continue _fun99298
                    }
                case 288:
                    var15 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var5 = var13[var16];
                    var6 = var15.bind(var2)(var5);
                    var5 = var6.getSpanDescendants;
                    var7 = var5.bind(var6)(var3);
                    var6 = var7.filter;
                    var5 = function(arg0) { // Environment: var11
                        _fun99299: for (var _fun99299_ip = 0;;) switch (_fun99299_ip) {
                            case 0:
                                var3 = arg0;
                                var0 = _closure3_slot0;
                                var0 = var3 !== var0;
                                if (!var0) {
                                    _fun99299_ip = 34;
                                    continue _fun99299
                                }
                            case 17:
                                var2 = _closure1_slot8;
                                var1 = undefined;
                                var1 = var2.bind(var1)(var3);
                                var0 = !var1;
                            case 34:
                                return var0;
                        }
                    };
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.map;
                    var5 = function(arg0) { // Environment: var11
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 5;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.spanToJSON;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var7 = var6.bind(var7)(var5);
                    var6 = var7.filter;
                    var5 = _closure1_slot7;
                    var14 = var6.bind(var7)(var5);
                    var6 = var3._attributes;
                    var5 = 4;
                    var5 = var13[var5];
                    var5 = var15.bind(var2)(var5);
                    var5 = var5.SEMANTIC_ATTRIBUTE_SENTRY_SOURCE;
                    var12 = var6[var5];
                    var5 = global;
                    var9 = var5.Object;
                    var7 = var9.assign;
                    var6 = {};
                    var10 = {};
                    var13 = var13[var16];
                    var15 = var15.bind(var2)(var13);
                    var13 = var15.spanToTransactionTraceContext;
                    var13 = var13.bind(var15)(var3);
                    var10.trace = var13;
                    var6.contexts = var10;
                    var13 = var14.length;
                    var15 = 1000;
                    var10 = var14;
                    if (!(var13 > var15)) {
                        _fun99298_ip = 488;
                        continue _fun99298
                    }
                case 457:
                    var13 = var14.sort;
                    var11 = function(arg0, arg1) { // Environment: var11
                        var0 = arg0;
                        var1 = var0.start_timestamp;
                        var0 = arg1;
                        var0 = var0.start_timestamp;
                        var0 = var1 - var0;
                        return var0;
                    };
                    var14 = var13.bind(var14)(var11);
                    var13 = var14.slice;
                    var11 = 0;
                    var10 = var13.bind(var14)(var11, var15);
                case 488:
                    var6.spans = var10;
                    var10 = var3._startTime;
                    var6.start_timestamp = var10;
                    var10 = var3._endTime;
                    var6.timestamp = var10;
                    var10 = var3._name;
                    var6.transaction = var10;
                    var10 = 'transaction';
                    var6.type = var10;
                    var15 = var5.Object;
                    var14 = var15.assign;
                    var13 = {};
                    var13.capturedSpanScope = var8;
                    var13.capturedSpanIsolationScope = var1;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var8 = 3;
                    var1 = var11[var8];
                    var17 = var10.bind(var2)(var1);
                    var16 = var17.dropUndefinedKeys;
                    var1 = {};
                    var18 = 13;
                    var18 = var11[var18];
                    var19 = var10.bind(var2)(var18);
                    var18 = var19.getDynamicSamplingContextFromSpan;
                    var18 = var18.bind(var19)(var3);
                    var1.dynamicSamplingContext = var18;
                    var1 = var16.bind(var17)(var1);
                    var1 = var14.bind(var15)(var13, var1);
                    var6.sdkProcessingMetadata = var1;
                    var1 = 7;
                    var1 = var11[var1];
                    var10 = var10.bind(var2)(var1);
                    var1 = var10.getMetricSummaryJsonForSpan;
                    var1 = var1.bind(var10)(var3);
                    var6._metrics_summary = var1;
                    var1 = var12;
                    if (!var1) {
                        _fun99298_ip = 679;
                        continue _fun99298
                    }
                case 663:
                    var10 = {};
                    var11 = {};
                    var11.source = var12;
                    var10.transaction_info = var11;
                    var1 = var10;
                case 679:
                    var1 = var7.bind(var9)(var6, var1);
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var6 = 8;
                    var6 = var9[var6];
                    var7 = var7.bind(var2)(var6);
                    var6 = var7.timedEventsToMeasurements;
                    var3 = var3._events;
                    var3 = var6.bind(var7)(var3);
                    var6 = var3;
                    if (!var6) {
                        _fun99298_ip = 749;
                        continue _fun99298
                    }
                case 728:
                    var9 = var5.Object;
                    var7 = var9.keys;
                    var7 = var7.bind(var9)(var3);
                    var6 = var7.length;
                case 749:
                    if (!var6) {
                        _fun99298_ip = 849;
                        continue _fun99298
                    }
                case 752:
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot1;
                    var6 = 9;
                    var6 = var9[var6];
                    var6 = var7.bind(var2)(var6);
                    var6 = var6.DEBUG_BUILD;
                    if (!var6) {
                        _fun99298_ip = 843;
                        continue _fun99298
                    }
                case 781:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var8];
                    var6 = var7.bind(var2)(var6);
                    var8 = var6.logger;
                    var7 = var8.log;
                    var9 = var5.JSON;
                    var6 = var9.stringify;
                    var5 = 2;
                    var6 = var6.bind(var9)(var3, var2, var5);
                    var5 = '[Measurements] Adding measurements to transaction event';
                    var5 = var7.bind(var8)(var5, var6);
                case 843:
                    var1.measurements = var3;
                case 849:
                    return var1;
                case 851:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 9;
                    var1 = var5[var1];
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.DEBUG_BUILD;
                    if (!var1) {
                        _fun99298_ip = 922;
                        continue _fun99298
                    }
                case 880:
                    var1 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 3;
                    var0 = var3[var0];
                    var0 = var1.bind(var2)(var0);
                    var2 = var0.logger;
                    var1 = var2.log;
                    var0 = '[Tracing] Discarding transaction because its trace was not chosen to be sampled.';
                    var0 = var1.bind(var2)(var0);
                case 922:
                    var0 = var4;
                    if (!var0) {
                        _fun99298_ip = 948;
                        continue _fun99298
                    }
                case 928:
                    var3 = var4.recordDroppedEvent;
                    var2 = 'sample_rate';
                    var1 = 'transaction';
                    var0 = var3.bind(var4)(var2, var1);
                case 948:
                    var0 = undefined;
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
    var _closure1_slot5 = var1;
    var2.SentrySpan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 6, 7, 12824, 12879, 12878, 12900, 12880, 12904, 12890, 12889, 12905, 12891, 12898]);