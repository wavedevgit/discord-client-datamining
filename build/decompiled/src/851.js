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
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var3 = {
        'idleTimeout': 1000,
        'finalTimeout': 30000,
        'childSpanTimeout': 15000
    };
    var _closure1_slot4 = var3;
    var2.TRACING_DEFAULTS = var3;
    var1 = function(arg0) { // Original name: startIdleSpan, environment: var1
        _fun8978: for (var _fun8978_ip = 0;;) switch (_fun8978_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var0 = function() { // Original name: _cancelIdleTimeout, environment: var1
                    _fun8979: for (var _fun8979_ip = 0;;) switch (_fun8979_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun8979_ip = 33;
                                continue _fun8979
                            }
                        case 10:
                            var0 = global;
                            var3 = var0.clearTimeout;
                            var2 = _closure2_slot0;
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var _closure2_slot0 = var0;
                        case 33:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot15 = var0;
                var5 = function(arg0) { // Original name: _restartIdleTimeout, environment: var1
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot15;
                    var0 = undefined;
                    var3 = var3.bind(var0)();
                    var3 = global;
                    var4 = var3.setTimeout;
                    var3 = _closure2_slot6;
                    var1 = function() { // Environment: var1
                        _fun8981: for (var _fun8981_ip = 0;;) switch (_fun8981_ip) {
                            case 0:
                                var2 = _closure2_slot2;
                                var1 = !var2;
                                if (var2) {
                                    _fun8981_ip = 28;
                                    continue _fun8981
                                }
                            case 13:
                                var2 = _closure2_slot1;
                                var3 = var2.size;
                                var2 = 0;
                                var1 = var2 === var3;
                            case 28:
                                if (!var1) {
                                    _fun8981_ip = 35;
                                    continue _fun8981
                                }
                            case 31:
                                var1 = _closure2_slot4;
                            case 35:
                                if (!var1) {
                                    _fun8981_ip = 67;
                                    continue _fun8981
                                }
                            case 38:
                                var1 = 'idleTimeout';
                                _closure2_slot3 = var1;
                                var2 = _closure2_slot14;
                                var1 = var2.end;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                            case 67:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var4.bind(var0)(var1, var3);
                    _closure2_slot0 = var1;
                    return var0;
                };
                var _closure2_slot16 = var5;
                var0 = function(arg0) { // Original name: _restartChildSpanTimeout, environment: var1
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = global;
                    var4 = var0.setTimeout;
                    var3 = _closure2_slot8;
                    var0 = undefined;
                    var1 = function() { // Environment: var1
                        _fun8983: for (var _fun8983_ip = 0;;) switch (_fun8983_ip) {
                            case 0:
                                var2 = _closure2_slot2;
                                var1 = !var2;
                                if (var2) {
                                    _fun8983_ip = 17;
                                    continue _fun8983
                                }
                            case 13:
                                var1 = _closure2_slot4;
                            case 17:
                                if (!var1) {
                                    _fun8983_ip = 51;
                                    continue _fun8983
                                }
                            case 20:
                                var1 = 'heartbeatFailed';
                                _closure2_slot3 = var1;
                                var2 = _closure2_slot14;
                                var1 = var2.end;
                                var0 = _closure3_slot0;
                                var0 = var1.bind(var2)(var0);
                            case 51:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var4.bind(var0)(var1, var3);
                    _closure2_slot0 = var1;
                    return var0;
                };
                var _closure2_slot17 = var0;
                var0 = function(arg0) { // Original name: onIdleSpanEnded, environment: var1
                    _fun8984: for (var _fun8984_ip = 0;;) switch (_fun8984_ip) {
                        case 0:
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var0 = true;
                            _closure2_slot2 = var0;
                            var3 = _closure2_slot1;
                            var0 = var3.clear;
                            var0 = var0.bind(var3)();
                            var4 = _closure2_slot5;
                            var3 = var4.forEach;
                            var0 = function(arg0) { // Environment: var1
                                var1 = arg0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                                return var0;
                            };
                            var0 = var3.bind(var4)(var0);
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var0 = 9;
                            var5 = var4[var0];
                            var0 = undefined;
                            var9 = var6.bind(var0)(var5);
                            var8 = var9._setSpanForScope;
                            var7 = _closure2_slot12;
                            var5 = _closure2_slot13;
                            var5 = var8.bind(var9)(var7, var5);
                            var5 = 6;
                            var4 = var4[var5];
                            var7 = var6.bind(var0)(var4);
                            var6 = var7.spanToJSON;
                            var4 = _closure2_slot14;
                            var6 = var6.bind(var7)(var4);
                            var4 = var6.start_timestamp;
                            if (!var4) {
                                _fun8984_ip = 451;
                                continue _fun8984
                            }
                        case 135:
                            var7 = var6.data;
                            var8 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var10 = 10;
                            var4 = var4[var10];
                            var4 = var8.bind(var0)(var4);
                            var4 = var4.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON;
                            var4 = var7[var4];
                            if (var4) {
                                _fun8984_ip = 216;
                                continue _fun8984
                            }
                        case 173:
                            var9 = _closure2_slot14;
                            var8 = var9.setAttribute;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var10];
                            var4 = var7.bind(var0)(var4);
                            var7 = var4.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON;
                            var4 = _closure2_slot3;
                            var4 = var8.bind(var9)(var7, var4);
                        case 216:
                            var8 = var6.status;
                            var4 = var8;
                            if (!var4) {
                                _fun8984_ip = 235;
                                continue _fun8984
                            }
                        case 227:
                            var7 = 'unknown';
                            var4 = var7 !== var8;
                        case 235:
                            if (var4) {
                                _fun8984_ip = 285;
                                continue _fun8984
                            }
                        case 238:
                            var8 = _closure2_slot14;
                            var7 = var8.setStatus;
                            var4 = {};
                            var10 = _closure1_slot0;
                            var11 = _closure1_slot1;
                            var9 = 11;
                            var9 = var11[var9];
                            var9 = var10.bind(var0)(var9);
                            var9 = var9.SPAN_STATUS_OK;
                            var4.code = var9;
                            var4 = var7.bind(var8)(var4);
                        case 285:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var7 = 12;
                            var7 = var3[var7];
                            var7 = var4.bind(var0)(var7);
                            var8 = var7.debug;
                            var7 = var8.log;
                            var11 = var6.op;
                            var6 = global;
                            var6 = var6.HermesInternal;
                            var10 = var6.concat;
                            var9 = '[Tracing] Idle span "';
                            var6 = '" finished';
                            var6 = var10.bind(var9)(var11, var6);
                            var6 = var7.bind(var8)(var6);
                            var3 = var3[var5];
                            var5 = var4.bind(var0)(var3);
                            var4 = var5.getSpanDescendants;
                            var3 = _closure2_slot14;
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.filter;
                            var3 = function(arg0) { // Environment: var1
                                var1 = _closure2_slot14;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var6 = var4.bind(var5)(var3);
                            var4 = 0;
                            var _closure3_slot1 = var4;
                            var5 = var6.forEach;
                            var3 = function(arg0) { // Environment: var1
                                _fun8987: for (var _fun8987_ip = 0;;) switch (_fun8987_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var0 = var5.isRecording;
                                        var0 = var0.bind(var5)();
                                        if (!var0) {
                                            _fun8987_ip = 180;
                                            continue _fun8987
                                        }
                                    case 19:
                                        var4 = var5.setStatus;
                                        var1 = {};
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var6 = 11;
                                        var7 = var3[var6];
                                        var6 = undefined;
                                        var7 = var2.bind(var6)(var7);
                                        var7 = var7.SPAN_STATUS_ERROR;
                                        var1.code = var7;
                                        var7 = 'cancelled';
                                        var1.message = var7;
                                        var1 = var4.bind(var5)(var1);
                                        var4 = var5.end;
                                        var1 = _closure3_slot0;
                                        var1 = var4.bind(var5)(var1);
                                        var1 = 13;
                                        var1 = var3[var1];
                                        var1 = var2.bind(var6)(var1);
                                        var1 = var1.DEBUG_BUILD;
                                        if (!var1) {
                                            _fun8987_ip = 180;
                                            continue _fun8987
                                        }
                                    case 113:
                                        var1 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var0 = 12;
                                        var0 = var2[var0];
                                        var0 = var1.bind(var6)(var0);
                                        var3 = var0.debug;
                                        var2 = var3.log;
                                        var0 = global;
                                        var4 = var0.JSON;
                                        var1 = var4.stringify;
                                        var0 = 2;
                                        var1 = var1.bind(var4)(var5, var6, var0);
                                        var0 = '[Tracing] Cancelling span since span ended early';
                                        var0 = var2.bind(var3)(var0, var1);
                                    case 180:
                                        var2 = _closure1_slot0;
                                        var0 = _closure1_slot1;
                                        var6 = 6;
                                        var1 = var0[var6];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.spanToJSON;
                                        var2 = var1.bind(var2)(var5);
                                        var7 = var2.timestamp;
                                        var1 = 0;
                                        if (!(var0 !== var7)) {
                                            _fun8987_ip = 231;
                                            continue _fun8987
                                        }
                                    case 228:
                                        var1 = var7;
                                    case 231:
                                        var2 = var2.start_timestamp;
                                        var4 = 0;
                                        if (!(var0 !== var2)) {
                                            _fun8987_ip = 246;
                                            continue _fun8987
                                        }
                                    case 243:
                                        var4 = var2;
                                    case 246:
                                        var7 = _closure3_slot0;
                                        var7 = var4 <= var7;
                                        var8 = var1 - var4;
                                        var9 = _closure2_slot7;
                                        var4 = _closure2_slot6;
                                        var9 = var9 + var4;
                                        var4 = 1000;
                                        var4 = var9 / var4;
                                        var4 = var8 <= var4;
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot1;
                                        var8 = 13;
                                        var8 = var10[var8];
                                        var8 = var9.bind(var0)(var8);
                                        var8 = var8.DEBUG_BUILD;
                                        if (!var8) {
                                            _fun8987_ip = 437;
                                            continue _fun8987
                                        }
                                    case 319:
                                        var8 = global;
                                        var10 = var8.JSON;
                                        var9 = var10.stringify;
                                        var8 = 2;
                                        var11 = var9.bind(var10)(var5, var0, var8);
                                        if (var7) {
                                            _fun8987_ip = 391;
                                            continue _fun8987
                                        }
                                    case 346:
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot1;
                                        var8 = 12;
                                        var8 = var10[var8];
                                        var8 = var9.bind(var0)(var8);
                                        var10 = var8.debug;
                                        var9 = var10.log;
                                        var8 = '[Tracing] Discarding span since it happened after idle span was finished';
                                        var8 = var9.bind(var10)(var8, var11);
                                        _fun8987_ip = 437;
                                        continue _fun8987;
                                    case 391:
                                        if (var4) {
                                            _fun8987_ip = 437;
                                            continue _fun8987
                                        }
                                    case 394:
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot1;
                                        var8 = 12;
                                        var8 = var10[var8];
                                        var8 = var9.bind(var0)(var8);
                                        var10 = var8.debug;
                                        var9 = var10.log;
                                        var8 = '[Tracing] Discarding span since it finished after idle span final timeout';
                                        var8 = var9.bind(var10)(var8, var11);
                                    case 437:
                                        if (!var4) {
                                            _fun8987_ip = 443;
                                            continue _fun8987
                                        }
                                    case 440:
                                        var4 = var7;
                                    case 443:
                                        if (var4) {
                                            _fun8987_ip = 490;
                                            continue _fun8987
                                        }
                                    case 446:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var3 = var3[var6];
                                        var4 = var4.bind(var0)(var3);
                                        var3 = var4.removeChildSpanFromSpan;
                                        var1 = _closure2_slot14;
                                        var1 = var3.bind(var4)(var1, var5);
                                        var1 = _closure3_slot1;
                                        var1 = var1 + 1;
                                        _closure3_slot1 = var1;
                                    case 490:
                                        return var0;
                                }
                            };
                            var3 = var5.bind(var6)(var3);
                            var3 = _closure3_slot1;
                            if (!(var3 > var4)) {
                                _fun8984_ip = 451;
                                continue _fun8984
                            }
                        case 425:
                            var4 = _closure2_slot14;
                            var3 = var4.setAttribute;
                            var2 = _closure3_slot1;
                            var1 = 'sentry.idle_span_discarded_spans';
                            var1 = var3.bind(var4)(var1, var2);
                        case 451:
                            return var0;
                    }
                };
                var _closure2_slot18 = var0;
                var3 = arguments.length;
                var0 = 1;
                if (!(var3 > var0)) {
                    _fun8978_ip = 60;
                    continue _fun8978
                }
            case 52:
                var3 = arguments[var0];
                if (!(var4 === var3)) {
                    _fun8978_ip = 64;
                    continue _fun8978
                }
            case 60:
                var6 = {};
                _fun8978_ip = 68;
                continue _fun8978;
            case 64:
                var6 = arguments[var0];
            case 68:
                var2 = global;
                var0 = var2.Map;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var20 = var3;
                var0 = new var20[var0](var19);
                var0 = var0 instanceof Object ? var0 : var3;
                var _closure2_slot1 = var0;
                var0 = false;
                var _closure2_slot2 = var0;
                var0 = 'externalFinish';
                var _closure2_slot3 = var0;
                var0 = var6.disableAutoFinish;
                var0 = !var0;
                var _closure2_slot4 = var0;
                var9 = new Array(0);
                var _closure2_slot5 = var9;
                var0 = var6.idleTimeout;
                if (!(var4 === var0)) {
                    _fun8978_ip = 160;
                    continue _fun8978
                }
            case 147:
                var3 = _closure1_slot4;
                var0 = var3.idleTimeout;
            case 160:
                var _closure2_slot6 = var0;
                var3 = var6.finalTimeout;
                if (!(var4 === var3)) {
                    _fun8978_ip = 187;
                    continue _fun8978
                }
            case 174:
                var0 = _closure1_slot4;
                var3 = var0.finalTimeout;
            case 187:
                var _closure2_slot7 = var3;
                var0 = var6.childSpanTimeout;
                if (!(var4 === var0)) {
                    _fun8978_ip = 214;
                    continue _fun8978
                }
            case 201:
                var7 = _closure1_slot4;
                var0 = var7.childSpanTimeout;
            case 214:
                var _closure2_slot8 = var0;
                var0 = var6.beforeSpanEnd;
                var _closure2_slot9 = var0;
                var7 = var6.trimIdleSpanEndTimestamp;
                var0 = var4 === var7;
                if (var0) {
                    _fun8978_ip = 244;
                    continue _fun8978
                }
            case 241:
                var0 = var7;
            case 244:
                var _closure2_slot10 = var0;
                var10 = _closure1_slot0;
                var0 = _closure1_slot1;
                var8 = 2;
                var0 = var0[var8];
                var10 = var10.bind(var4)(var0);
                var0 = var10.getClient;
                var12 = var0.bind(var10)();
                var _closure2_slot11 = var12;
                if (!var12) {
                    _fun8978_ip = 321;
                    continue _fun8978
                }
            case 288:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = 3;
                var0 = var11[var0];
                var10 = var10.bind(var4)(var0);
                var0 = var10.hasSpansEnabled;
                var0 = var0.bind(var10)();
                if (var0) {
                    _fun8978_ip = 440;
                    continue _fun8978
                }
            case 321:
                var11 = _closure1_slot0;
                var14 = _closure1_slot1;
                var0 = 4;
                var0 = var14[var0];
                var0 = var11.bind(var4)(var0);
                var0 = var0.SentryNonRecordingSpan;
                var10 = var0.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var0
                    }
                });
                var20 = var10;
                var0 = new var20[var0](var19);
                var0 = var0 instanceof Object ? var0 : var10;
                var17 = var2.Object;
                var16 = var17.assign;
                var10 = 5;
                var13 = var14[var10];
                var15 = var11.bind(var4)(var13);
                var13 = var15.getDynamicSamplingContextFromSpan;
                var15 = var13.bind(var15)(var0);
                var13 = {
                    'sample_rate': '0',
                    'sampled': 'false'
                };
                var13 = var16.bind(var17)(var13, var15);
                var10 = var14[var10];
                var11 = var11.bind(var4)(var10);
                var10 = var11.freezeDscOnSpan;
                var10 = var10.bind(var11)(var0, var13);
                return var0;
            case 440:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = var11[var8];
                var13 = var10.bind(var4)(var0);
                var0 = var13.getCurrentScope;
                var0 = var0.bind(var13)();
                var _closure2_slot12 = var0;
                var0 = 6;
                var0 = var11[var0];
                var13 = var10.bind(var4)(var0);
                var0 = var13.getActiveSpan;
                var0 = var0.bind(var13)();
                var _closure2_slot13 = var0;
                var0 = 15;
                var0 = var11[var0];
                var14 = var10.bind(var4)(var0);
                var13 = var14.startInactiveSpan;
                var0 = arg0;
                var0 = var13.bind(var14)(var0);
                var13 = 9;
                var13 = var11[var13];
                var14 = var10.bind(var4)(var13);
                var13 = var14._setSpanForScope;
                var8 = var11[var8];
                var15 = var10.bind(var4)(var8);
                var8 = var15.getCurrentScope;
                var8 = var8.bind(var15)();
                var8 = var13.bind(var14)(var8, var0);
                var8 = 13;
                var8 = var11[var8];
                var8 = var10.bind(var4)(var8);
                var8 = var8.DEBUG_BUILD;
                if (!var8) {
                    _fun8978_ip = 629;
                    continue _fun8978
                }
            case 587:
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 12;
                var7 = var10[var7];
                var7 = var8.bind(var4)(var7);
                var10 = var7.debug;
                var8 = var10.log;
                var7 = '[Tracing] Started span is an idle span';
                var7 = var8.bind(var10)(var7);
            case 629:
                var _closure2_slot14 = var0;
                var11 = var2.Proxy;
                var19 = var0.end;
                var7 = {};
                var8 = function(arg0, arg1, arg2) { // Original name: apply, environment: var1
                    _fun8988: for (var _fun8988_ip = 0;;) switch (_fun8988_ip) {
                        case 0:
                            var5 = arg0;
                            var4 = arg1;
                            var0 = _closure2_slot9;
                            if (!var0) {
                                _fun8988_ip = 33;
                                continue _fun8988
                            }
                        case 18:
                            var2 = _closure2_slot9;
                            var1 = _closure2_slot14;
                            var0 = undefined;
                            var0 = var2.bind(var0)(var1);
                        case 33:
                            var7 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 4;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var7.bind(var0)(var2);
                            var2 = var2.SentryNonRecordingSpan;
                            var2 = var4 instanceof var2;
                            if (var2) {
                                _fun8988_ip = 525;
                                continue _fun8988
                            }
                        case 74:
                            var7 = _closure1_slot3;
                            var2 = arg2;
                            var8 = var7.bind(var0)(var2);
                            var2 = 0;
                            var12 = var8[var2];
                            var7 = var8.slice;
                            var2 = 1;
                            var8 = var7.bind(var8)(var2);
                            if (var12) {
                                _fun8988_ip = 138;
                                continue _fun8988
                            }
                        case 108:
                            var7 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var2 = 7;
                            var2 = var9[var2];
                            var7 = var7.bind(var0)(var2);
                            var2 = var7.timestampInSeconds;
                            var12 = var2.bind(var7)();
                        case 138:
                            var7 = _closure1_slot0;
                            var10 = _closure1_slot1;
                            var2 = 6;
                            var9 = var10[var2];
                            var11 = var7.bind(var0)(var9);
                            var9 = var11.spanTimeInputToSeconds;
                            var16 = var9.bind(var11)(var12);
                            var9 = var10[var2];
                            var12 = var7.bind(var0)(var9);
                            var11 = var12.getSpanDescendants;
                            var9 = _closure2_slot14;
                            var12 = var11.bind(var12)(var9);
                            var11 = var12.filter;
                            var9 = function(arg0) { // Environment: var6
                                var1 = _closure2_slot14;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var9 = var11.bind(var12)(var9);
                            var2 = var10[var2];
                            var10 = var7.bind(var0)(var2);
                            var7 = var10.spanToJSON;
                            var2 = _closure2_slot14;
                            var2 = var7.bind(var10)(var2);
                            var7 = var9.length;
                            if (!var7) {
                                _fun8988_ip = 247;
                                continue _fun8988
                            }
                        case 240:
                            var7 = _closure2_slot10;
                            if (var7) {
                                _fun8988_ip = 305;
                                continue _fun8988
                            }
                        case 247:
                            var7 = _closure2_slot18;
                            var7 = var7.bind(var0)(var16);
                            var7 = global;
                            var11 = var7.Reflect;
                            var10 = var11.apply;
                            var13 = new Array(1);
                            var13[0] = var16;
                            var12 = var13.concat;
                            var7 = _closure1_slot2;
                            var7 = var7.bind(var0)(var8);
                            var7 = var12.bind(var13)(var7);
                            var7 = var10.bind(var11)(var5, var4, var7);
                            return var7;
                        case 305:
                            var10 = _closure2_slot11;
                            var7 = var10.getOptions;
                            var7 = var7.bind(var10)();
                            var7 = var7.ignoreSpans;
                            var _closure3_slot0 = var7;
                            var7 = null;
                            var7 = var7 == var9;
                            var15 = undefined;
                            if (var7) {
                                _fun8988_ip = 357;
                                continue _fun8988
                            }
                        case 340:
                            var7 = var9.reduce;
                            var6 = function(arg0, arg1) { // Environment: var6
                                _fun8990: for (var _fun8990_ip = 0;;) switch (_fun8990_ip) {
                                    case 0:
                                        var6 = arg0;
                                        var1 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var0 = 6;
                                        var0 = var3[var0];
                                        var5 = undefined;
                                        var3 = var1.bind(var5)(var0);
                                        var1 = var3.spanToJSON;
                                        var0 = arg1;
                                        var3 = var1.bind(var3)(var0);
                                        var1 = var3.timestamp;
                                        var0 = var6;
                                        if (!var1) {
                                            _fun8990_ip = 148;
                                            continue _fun8990
                                        }
                                    case 54:
                                        var4 = _closure3_slot0;
                                        if (!var4) {
                                            _fun8990_ip = 106;
                                            continue _fun8990
                                        }
                                    case 64:
                                        var4 = _closure1_slot0;
                                        var7 = _closure1_slot1;
                                        var2 = 8;
                                        var2 = var7[var2];
                                        var4 = var4.bind(var5)(var2);
                                        var2 = var4.shouldIgnoreSpan;
                                        var1 = _closure3_slot0;
                                        var2 = var2.bind(var4)(var3, var1);
                                        var1 = var6;
                                        if (var2) {
                                            _fun8990_ip = 145;
                                            continue _fun8990
                                        }
                                    case 106:
                                        if (var6) {
                                            _fun8990_ip = 117;
                                            continue _fun8990
                                        }
                                    case 109:
                                        var2 = var3.timestamp;
                                        _fun8990_ip = 142;
                                        continue _fun8990;
                                    case 117:
                                        var4 = global;
                                        var5 = var4.Math;
                                        var4 = var5.max;
                                        var3 = var3.timestamp;
                                        var2 = var4.bind(var5)(var6, var3);
                                    case 142:
                                        var1 = var2;
                                    case 145:
                                        var0 = var1;
                                    case 148:
                                        return var0;
                                }
                            };
                            var15 = var7.bind(var9)(var6, var0);
                        case 357:
                            var13 = var2.start_timestamp;
                            var2 = global;
                            var10 = var2.Math;
                            var9 = var10.min;
                            var17 = inf;
                            var7 = var17;
                            if (!var13) {
                                _fun8988_ip = 410;
                                continue _fun8988
                            }
                        case 392:
                            var11 = _closure2_slot7;
                            var6 = 1000;
                            var6 = var11 / var6;
                            var7 = var13 + var6;
                        case 410:
                            var12 = var2.Math;
                            var11 = var12.max;
                            if (var13) {
                                _fun8988_ip = 434;
                                continue _fun8988
                            }
                        case 424:
                            var13 = -inf;
                        case 434:
                            var14 = var2.Math;
                            var6 = var14.min;
                            if (var15) {
                                _fun8988_ip = 451;
                                continue _fun8988
                            }
                        case 448:
                            var15 = var17;
                        case 451:
                            var6 = var6.bind(var14)(var16, var15);
                            var6 = var11.bind(var12)(var13, var6);
                            var6 = var9.bind(var10)(var7, var6);
                            var3 = _closure2_slot18;
                            var3 = var3.bind(var0)(var6);
                            var3 = var2.Reflect;
                            var2 = var3.apply;
                            var7 = new Array(1);
                            var7[0] = var6;
                            var6 = var7.concat;
                            var1 = _closure1_slot2;
                            var1 = var1.bind(var0)(var8);
                            var1 = var6.bind(var7)(var1);
                            var1 = var2.bind(var3)(var5, var4, var1);
                            return var1;
                        case 525:
                            return var0;
                    }
                };
                var7.apply = var8;
                var8 = var11.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var11
                    }
                });
                var20 = var8;
                var18 = var7;
                var7 = new var20[var11](var19, var18, var17);
                var7 = var7 instanceof Object ? var7 : var8;
                var0.end = var7;
                var8 = var9.push;
                var11 = var12.on;
                var10 = 'spanStart';
                var7 = function(arg0) { // Environment: var1
                    _fun8991: for (var _fun8991_ip = 0;;) switch (_fun8991_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun8991_ip = 21;
                                continue _fun8991
                            }
                        case 13:
                            var2 = _closure2_slot14;
                            var1 = var4 === var2;
                        case 21:
                            if (var1) {
                                _fun8991_ip = 66;
                                continue _fun8991
                            }
                        case 24:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 6;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var2 = var3.spanToJSON;
                            var2 = var2.bind(var3)(var4);
                            var1 = var2.timestamp;
                        case 66:
                            if (var1) {
                                _fun8991_ip = 120;
                                continue _fun8991
                            }
                        case 69:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 14;
                            var3 = var3[var2];
                            var2 = undefined;
                            var2 = var5.bind(var2)(var3);
                            var2 = var2.SentrySpan;
                            var2 = var4 instanceof var2;
                            if (!var2) {
                                _fun8991_ip = 117;
                                continue _fun8991
                            }
                        case 107:
                            var3 = var4.isStandaloneSpan;
                            var2 = var3.bind(var4)();
                        case 117:
                            var1 = var2;
                        case 120:
                            if (var1) {
                                _fun8991_ip = 277;
                                continue _fun8991
                            }
                        case 126:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 6;
                            var1 = var2[var1];
                            var2 = undefined;
                            var6 = var5.bind(var2)(var1);
                            var5 = var6.getSpanDescendants;
                            var1 = _closure2_slot14;
                            var5 = var5.bind(var6)(var1);
                            var1 = var5.includes;
                            var1 = var1.bind(var5)(var4);
                            if (!var1) {
                                _fun8991_ip = 277;
                                continue _fun8991
                            }
                        case 179:
                            var1 = var4.spanContext;
                            var1 = var1.bind(var4)();
                            var6 = var1.spanId;
                            var1 = _closure2_slot15;
                            var1 = var1.bind(var2)();
                            var5 = _closure2_slot1;
                            var4 = var5.set;
                            var1 = true;
                            var1 = var4.bind(var5)(var6, var1);
                            var1 = _closure2_slot17;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var3 = 7;
                            var3 = var5[var3];
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.timestampInSeconds;
                            var3 = var3.bind(var4)();
                            var4 = _closure2_slot8;
                            var0 = 1000;
                            var0 = var4 / var0;
                            var0 = var3 + var0;
                            var0 = var1.bind(var2)(var0);
                        case 277:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var11.bind(var12)(var10, var7);
                var7 = var8.bind(var9)(var7);
                var8 = var9.push;
                var11 = var12.on;
                var10 = 'spanEnd';
                var7 = function(arg0) { // Environment: var1
                    _fun8992: for (var _fun8992_ip = 0;;) switch (_fun8992_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun8992_ip = 140;
                                continue _fun8992
                            }
                        case 16:
                            var1 = var2.spanContext;
                            var1 = var1.bind(var2)();
                            var3 = var1.spanId;
                            var2 = _closure2_slot1;
                            var1 = var2.has;
                            var1 = var1.bind(var2)(var3);
                            if (!var1) {
                                _fun8992_ip = 63;
                                continue _fun8992
                            }
                        case 49:
                            var2 = _closure2_slot1;
                            var1 = var2.delete;
                            var1 = var1.bind(var2)(var3);
                        case 63:
                            var1 = _closure2_slot1;
                            var2 = var1.size;
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun8992_ip = 140;
                                continue _fun8992
                            }
                        case 78:
                            var2 = _closure2_slot16;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 7;
                            var3 = var3[var1];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.timestampInSeconds;
                            var3 = var3.bind(var4)();
                            var4 = _closure2_slot6;
                            var0 = 1000;
                            var0 = var4 / var0;
                            var0 = var3 + var0;
                            var0 = var2.bind(var1)(var0);
                        case 140:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var11.bind(var12)(var10, var7);
                var7 = var8.bind(var9)(var7);
                var8 = var9.push;
                var11 = var12.on;
                var10 = 'idleSpanEnableAutoFinish';
                var7 = function(arg0) { // Environment: var1
                    _fun8993: for (var _fun8993_ip = 0;;) switch (_fun8993_ip) {
                        case 0:
                            var2 = _closure2_slot14;
                            var1 = arg0;
                            if (!(var1 === var2)) {
                                _fun8993_ip = 50;
                                continue _fun8993
                            }
                        case 14:
                            var1 = true;
                            _closure2_slot4 = var1;
                            var2 = _closure2_slot16;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            var2 = _closure2_slot1;
                            var2 = var2.size;
                            if (!var2) {
                                _fun8993_ip = 50;
                                continue _fun8993
                            }
                        case 42:
                            var0 = _closure2_slot17;
                            var0 = var0.bind(var1)();
                        case 50:
                            var0 = undefined;
                            return var0;
                    }
                };
                var7 = var11.bind(var12)(var10, var7);
                var7 = var8.bind(var9)(var7);
                var6 = var6.disableAutoFinish;
                if (var6) {
                    _fun8978_ip = 796;
                    continue _fun8978
                }
            case 792:
                var5 = var5.bind(var4)();
            case 796:
                var2 = var2.setTimeout;
                var1 = function() { // Environment: var1
                    _fun8994: for (var _fun8994_ip = 0;;) switch (_fun8994_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun8994_ip = 93;
                                continue _fun8994
                            }
                        case 10:
                            var3 = _closure2_slot14;
                            var2 = var3.setStatus;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var4 = 11;
                            var5 = var5[var4];
                            var4 = undefined;
                            var4 = var6.bind(var4)(var5);
                            var4 = var4.SPAN_STATUS_ERROR;
                            var1.code = var4;
                            var4 = 'deadline_exceeded';
                            var1.message = var4;
                            var1 = var2.bind(var3)(var1);
                            var1 = 'finalTimeout';
                            _closure2_slot3 = var1;
                            var1 = _closure2_slot14;
                            var0 = var1.end;
                            var0 = var0.bind(var1)();
                        case 93:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var2.bind(var4)(var1, var3);
                return var0;
        }
    };
    var2.startIdleSpan = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 852, 847, 853, 854, 855, 819, 837, 857, 843, 838, 839, 824, 823, 858, 864]);