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
    var3 = {
        'idleTimeout': 1000,
        'finalTimeout': 30000,
        'childSpanTimeout': 15000
    };
    var _closure1_slot4 = var3;
    var2.TRACING_DEFAULTS = var3;
    var1 = function arg0() {
        _fun99239: for (var _fun99239_ip = 0;;) switch (_fun99239_ip) {
            case 0:
                var4 = undefined;
                var2 = undefined;
                var0 = function() {
                    _fun99240: for (var _fun99240_ip = 0;;) switch (_fun99240_ip) {
                        case 0:
                            var0 = _closure2_slot0;
                            if (!var0) {
                                _fun99240_ip = 33;
                                continue _fun99240
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
                var _closure2_slot13 = var0;
                var5 = function arg0() {
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = _closure2_slot13;
                    var0 = undefined;
                    var3 = var3.bind(var0)();
                    var3 = global;
                    var4 = var3.setTimeout;
                    var3 = _closure2_slot6;
                    var1 = function() { // Environment: var1
                        _fun99242: for (var _fun99242_ip = 0;;) switch (_fun99242_ip) {
                            case 0:
                                var2 = _closure2_slot2;
                                var1 = !var2;
                                if (var2) {
                                    _fun99242_ip = 28;
                                    continue _fun99242
                                }
                            case 13:
                                var2 = _closure2_slot1;
                                var3 = var2.size;
                                var2 = 0;
                                var1 = var2 === var3;
                            case 28:
                                if (!var1) {
                                    _fun99242_ip = 35;
                                    continue _fun99242
                                }
                            case 31:
                                var1 = _closure2_slot4;
                            case 35:
                                if (!var1) {
                                    _fun99242_ip = 67;
                                    continue _fun99242
                                }
                            case 38:
                                var1 = 'idleTimeout';
                                _closure2_slot3 = var1;
                                var2 = _closure2_slot12;
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
                var _closure2_slot14 = var5;
                var0 = function arg0() {
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = global;
                    var4 = var0.setTimeout;
                    var3 = _closure2_slot8;
                    var0 = undefined;
                    var1 = function() { // Environment: var1
                        _fun99244: for (var _fun99244_ip = 0;;) switch (_fun99244_ip) {
                            case 0:
                                var2 = _closure2_slot2;
                                var1 = !var2;
                                if (var2) {
                                    _fun99244_ip = 17;
                                    continue _fun99244
                                }
                            case 13:
                                var1 = _closure2_slot4;
                            case 17:
                                if (!var1) {
                                    _fun99244_ip = 51;
                                    continue _fun99244
                                }
                            case 20:
                                var1 = 'heartbeatFailed';
                                _closure2_slot3 = var1;
                                var2 = _closure2_slot12;
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
                var _closure2_slot15 = var0;
                var0 = function arg0() {
                    _fun99245: for (var _fun99245_ip = 0;;) switch (_fun99245_ip) {
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
                            var0 = 7;
                            var5 = var4[var0];
                            var0 = undefined;
                            var9 = var6.bind(var0)(var5);
                            var8 = var9._setSpanForScope;
                            var7 = _closure2_slot10;
                            var5 = _closure2_slot11;
                            var5 = var8.bind(var9)(var7, var5);
                            var5 = 5;
                            var4 = var4[var5];
                            var7 = var6.bind(var0)(var4);
                            var6 = var7.spanToJSON;
                            var4 = _closure2_slot12;
                            var6 = var6.bind(var7)(var4);
                            var4 = var6.start_timestamp;
                            if (!var4) {
                                _fun99245_ip = 393;
                                continue _fun99245
                            }
                        case 137:
                            var7 = var6.data;
                            if (var7) {
                                _fun99245_ip = 147;
                                continue _fun99245
                            }
                        case 145:
                            var7 = {};
                        case 147:
                            var8 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var10 = 8;
                            var4 = var4[var10];
                            var4 = var8.bind(var0)(var4);
                            var4 = var4.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON;
                            var4 = var7[var4];
                            if (var4) {
                                _fun99245_ip = 223;
                                continue _fun99245
                            }
                        case 180:
                            var9 = _closure2_slot12;
                            var8 = var9.setAttribute;
                            var7 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var10];
                            var4 = var7.bind(var0)(var4);
                            var7 = var4.SEMANTIC_ATTRIBUTE_SENTRY_IDLE_SPAN_FINISH_REASON;
                            var4 = _closure2_slot3;
                            var4 = var8.bind(var9)(var7, var4);
                        case 223:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var7 = 6;
                            var7 = var3[var7];
                            var7 = var4.bind(var0)(var7);
                            var8 = var7.logger;
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
                            var3 = _closure2_slot12;
                            var5 = var4.bind(var5)(var3);
                            var4 = var5.filter;
                            var3 = function(arg0) { // Environment: var1
                                var1 = _closure2_slot12;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var6 = var4.bind(var5)(var3);
                            var4 = 0;
                            var _closure3_slot1 = var4;
                            var5 = var6.forEach;
                            var3 = function(arg0) { // Environment: var1
                                _fun99248: for (var _fun99248_ip = 0;;) switch (_fun99248_ip) {
                                    case 0:
                                        var5 = arg0;
                                        var0 = var5.isRecording;
                                        var0 = var0.bind(var5)();
                                        if (!var0) {
                                            _fun99248_ip = 180;
                                            continue _fun99248
                                        }
                                    case 19:
                                        var4 = var5.setStatus;
                                        var1 = {};
                                        var2 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var6 = 9;
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
                                        var1 = 10;
                                        var1 = var3[var1];
                                        var1 = var2.bind(var6)(var1);
                                        var1 = var1.DEBUG_BUILD;
                                        if (!var1) {
                                            _fun99248_ip = 180;
                                            continue _fun99248
                                        }
                                    case 113:
                                        var1 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var0 = 6;
                                        var0 = var2[var0];
                                        var0 = var1.bind(var6)(var0);
                                        var3 = var0.logger;
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
                                        var6 = 5;
                                        var1 = var0[var6];
                                        var0 = undefined;
                                        var2 = var2.bind(var0)(var1);
                                        var1 = var2.spanToJSON;
                                        var2 = var1.bind(var2)(var5);
                                        var7 = var2.timestamp;
                                        var1 = 0;
                                        if (!(var0 !== var7)) {
                                            _fun99248_ip = 231;
                                            continue _fun99248
                                        }
                                    case 228:
                                        var1 = var7;
                                    case 231:
                                        var2 = var2.start_timestamp;
                                        var4 = 0;
                                        if (!(var0 !== var2)) {
                                            _fun99248_ip = 246;
                                            continue _fun99248
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
                                        var8 = 10;
                                        var8 = var10[var8];
                                        var8 = var9.bind(var0)(var8);
                                        var8 = var8.DEBUG_BUILD;
                                        if (!var8) {
                                            _fun99248_ip = 437;
                                            continue _fun99248
                                        }
                                    case 319:
                                        var8 = global;
                                        var10 = var8.JSON;
                                        var9 = var10.stringify;
                                        var8 = 2;
                                        var11 = var9.bind(var10)(var5, var0, var8);
                                        if (var7) {
                                            _fun99248_ip = 391;
                                            continue _fun99248
                                        }
                                    case 346:
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot1;
                                        var8 = 6;
                                        var8 = var10[var8];
                                        var8 = var9.bind(var0)(var8);
                                        var10 = var8.logger;
                                        var9 = var10.log;
                                        var8 = '[Tracing] Discarding span since it happened after idle span was finished';
                                        var8 = var9.bind(var10)(var8, var11);
                                        _fun99248_ip = 437;
                                        continue _fun99248;
                                    case 391:
                                        if (var4) {
                                            _fun99248_ip = 437;
                                            continue _fun99248
                                        }
                                    case 394:
                                        var9 = _closure1_slot0;
                                        var10 = _closure1_slot1;
                                        var8 = 6;
                                        var8 = var10[var8];
                                        var8 = var9.bind(var0)(var8);
                                        var10 = var8.logger;
                                        var9 = var10.log;
                                        var8 = '[Tracing] Discarding span since it finished after idle span final timeout';
                                        var8 = var9.bind(var10)(var8, var11);
                                    case 437:
                                        if (!var4) {
                                            _fun99248_ip = 443;
                                            continue _fun99248
                                        }
                                    case 440:
                                        var4 = var7;
                                    case 443:
                                        if (var4) {
                                            _fun99248_ip = 490;
                                            continue _fun99248
                                        }
                                    case 446:
                                        var4 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var3 = var3[var6];
                                        var4 = var4.bind(var0)(var3);
                                        var3 = var4.removeChildSpanFromSpan;
                                        var1 = _closure2_slot12;
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
                                _fun99245_ip = 393;
                                continue _fun99245
                            }
                        case 367:
                            var4 = _closure2_slot12;
                            var3 = var4.setAttribute;
                            var2 = _closure3_slot1;
                            var1 = 'sentry.idle_span_discarded_spans';
                            var1 = var3.bind(var4)(var1, var2);
                        case 393:
                            return var0;
                    }
                };
                var _closure2_slot16 = var0;
                var3 = arguments.length;
                var0 = 1;
                if (!(var3 > var0)) {
                    _fun99239_ip = 68;
                    continue _fun99239
                }
            case 60:
                var3 = arguments[var0];
                if (!(var4 === var3)) {
                    _fun99239_ip = 72;
                    continue _fun99239
                }
            case 68:
                var6 = {};
                _fun99239_ip = 76;
                continue _fun99239;
            case 72:
                var6 = arguments[var0];
            case 76:
                var2 = global;
                var0 = var2.Map;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var18 = var3;
                var0 = new var18[var0](var17);
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
                    _fun99239_ip = 168;
                    continue _fun99239
                }
            case 155:
                var3 = _closure1_slot4;
                var0 = var3.idleTimeout;
            case 168:
                var _closure2_slot6 = var0;
                var3 = var6.finalTimeout;
                if (!(var4 === var3)) {
                    _fun99239_ip = 195;
                    continue _fun99239
                }
            case 182:
                var0 = _closure1_slot4;
                var3 = var0.finalTimeout;
            case 195:
                var _closure2_slot7 = var3;
                var0 = var6.childSpanTimeout;
                if (!(var4 === var0)) {
                    _fun99239_ip = 222;
                    continue _fun99239
                }
            case 209:
                var7 = _closure1_slot4;
                var0 = var7.childSpanTimeout;
            case 222:
                var _closure2_slot8 = var0;
                var0 = var6.beforeSpanEnd;
                var _closure2_slot9 = var0;
                var10 = _closure1_slot0;
                var0 = _closure1_slot1;
                var8 = 2;
                var0 = var0[var8];
                var10 = var10.bind(var4)(var0);
                var0 = var10.getClient;
                var12 = var0.bind(var10)();
                if (!var12) {
                    _fun99239_ip = 305;
                    continue _fun99239
                }
            case 272:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = 3;
                var0 = var11[var0];
                var10 = var10.bind(var4)(var0);
                var0 = var10.hasTracingEnabled;
                var0 = var0.bind(var10)();
                if (var0) {
                    _fun99239_ip = 353;
                    continue _fun99239
                }
            case 305:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = 4;
                var0 = var11[var0];
                var0 = var10.bind(var4)(var0);
                var0 = var0.SentryNonRecordingSpan;
                var10 = var0.prototype;
                var10 = Object.create(var10, {
                    constructor: {
                        value: var0
                    }
                });
                var18 = var10;
                var0 = new var18[var0](var17);
                var0 = var0 instanceof Object ? var0 : var10;
                return var0;
            case 353:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var0 = var11[var8];
                var13 = var10.bind(var4)(var0);
                var0 = var13.getCurrentScope;
                var0 = var0.bind(var13)();
                var _closure2_slot10 = var0;
                var0 = 5;
                var0 = var11[var0];
                var13 = var10.bind(var4)(var0);
                var0 = var13.getActiveSpan;
                var0 = var0.bind(var13)();
                var _closure2_slot11 = var0;
                var0 = 11;
                var0 = var11[var0];
                var14 = var10.bind(var4)(var0);
                var13 = var14.startInactiveSpan;
                var0 = arg0;
                var0 = var13.bind(var14)(var0);
                var13 = 7;
                var13 = var11[var13];
                var14 = var10.bind(var4)(var13);
                var13 = var14._setSpanForScope;
                var8 = var11[var8];
                var15 = var10.bind(var4)(var8);
                var8 = var15.getCurrentScope;
                var8 = var8.bind(var15)();
                var8 = var13.bind(var14)(var8, var0);
                var8 = 10;
                var8 = var11[var8];
                var8 = var10.bind(var4)(var8);
                var8 = var8.DEBUG_BUILD;
                if (!var8) {
                    _fun99239_ip = 542;
                    continue _fun99239
                }
            case 500:
                var8 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 6;
                var7 = var10[var7];
                var7 = var8.bind(var4)(var7);
                var10 = var7.logger;
                var8 = var10.log;
                var7 = '[Tracing] Started span is an idle span';
                var7 = var8.bind(var10)(var7);
            case 542:
                var _closure2_slot12 = var0;
                var11 = var2.Proxy;
                var17 = var0.end;
                var7 = {};
                var8 = function arg0, arg1, arg2() {
                    _fun99249: for (var _fun99249_ip = 0;;) switch (_fun99249_ip) {
                        case 0:
                            var4 = arg0;
                            var3 = arg1;
                            var0 = _closure2_slot9;
                            if (!var0) {
                                _fun99249_ip = 33;
                                continue _fun99249
                            }
                        case 18:
                            var6 = _closure2_slot9;
                            var5 = _closure2_slot12;
                            var0 = undefined;
                            var0 = var6.bind(var0)(var5);
                        case 33:
                            var6 = _closure1_slot3;
                            var8 = undefined;
                            var5 = arg2;
                            var7 = var6.bind(var8)(var5);
                            var5 = 0;
                            var12 = var7[var5];
                            var6 = var7.slice;
                            var5 = 1;
                            var7 = var6.bind(var7)(var5);
                            if (var12) {
                                _fun99249_ip = 102;
                                continue _fun99249
                            }
                        case 72:
                            var6 = _closure1_slot0;
                            var9 = _closure1_slot1;
                            var5 = 6;
                            var5 = var9[var5];
                            var6 = var6.bind(var8)(var5);
                            var5 = var6.timestampInSeconds;
                            var12 = var5.bind(var6)();
                        case 102:
                            var9 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var6 = 5;
                            var10 = var5[var6];
                            var11 = var9.bind(var8)(var10);
                            var10 = var11.spanTimeInputToSeconds;
                            var16 = var10.bind(var11)(var12);
                            var5 = var5[var6];
                            var10 = var9.bind(var8)(var5);
                            var9 = var10.getSpanDescendants;
                            var5 = _closure2_slot12;
                            var10 = var9.bind(var10)(var5);
                            var9 = var10.filter;
                            var5 = function(arg0) { // Environment: var1
                                var1 = _closure2_slot12;
                                var0 = arg0;
                                var0 = var0 !== var1;
                                return var0;
                            };
                            var10 = var9.bind(var10)(var5);
                            var5 = var10.length;
                            if (var5) {
                                _fun99249_ip = 240;
                                continue _fun99249
                            }
                        case 182:
                            var5 = _closure2_slot16;
                            var5 = var5.bind(var8)(var16);
                            var5 = global;
                            var11 = var5.Reflect;
                            var9 = var11.apply;
                            var13 = new Array(1);
                            var13[0] = var16;
                            var12 = var13.concat;
                            var5 = _closure1_slot2;
                            var5 = var5.bind(var8)(var7);
                            var5 = var12.bind(var13)(var5);
                            var5 = var9.bind(var11)(var4, var3, var5);
                            return var5;
                        case 240:
                            var9 = var10.map;
                            var5 = function(arg0) { // Environment: var1
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var0 = 5;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.spanToJSON;
                                var0 = arg0;
                                var0 = var1.bind(var2)(var0);
                                var0 = var0.timestamp;
                                return var0;
                            };
                            var9 = var9.bind(var10)(var5);
                            var5 = var9.filter;
                            var1 = function(arg0) { // Environment: var1
                                var0 = arg0;
                                var0 = !var0;
                                var0 = !var0;
                                return var0;
                            };
                            var11 = var5.bind(var9)(var1);
                            var1 = var11.length;
                            var15 = undefined;
                            if (!var1) {
                                _fun99249_ip = 323;
                                continue _fun99249
                            }
                        case 284:
                            var1 = global;
                            var5 = var1.Math;
                            var10 = var5.max;
                            var9 = var10.apply;
                            var5 = var1.Math;
                            var1 = _closure1_slot2;
                            var1 = var1.bind(var8)(var11);
                            var15 = var9.bind(var10)(var5, var1);
                        case 323:
                            var5 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var6];
                            var6 = var5.bind(var8)(var1);
                            var5 = var6.spanToJSON;
                            var1 = _closure2_slot12;
                            var1 = var5.bind(var6)(var1);
                            var13 = var1.start_timestamp;
                            var1 = global;
                            var10 = var1.Math;
                            var9 = var10.min;
                            var17 = inf;
                            var6 = var17;
                            if (!var13) {
                                _fun99249_ip = 408;
                                continue _fun99249
                            }
                        case 390:
                            var11 = _closure2_slot7;
                            var5 = 1000;
                            var5 = var11 / var5;
                            var6 = var13 + var5;
                        case 408:
                            var12 = var1.Math;
                            var11 = var12.max;
                            if (var13) {
                                _fun99249_ip = 432;
                                continue _fun99249
                            }
                        case 422:
                            var13 = -inf;
                        case 432:
                            var14 = var1.Math;
                            var5 = var14.min;
                            if (var15) {
                                _fun99249_ip = 449;
                                continue _fun99249
                            }
                        case 446:
                            var15 = var17;
                        case 449:
                            var5 = var5.bind(var14)(var16, var15);
                            var5 = var11.bind(var12)(var13, var5);
                            var5 = var9.bind(var10)(var6, var5);
                            var2 = _closure2_slot16;
                            var2 = var2.bind(var8)(var5);
                            var2 = var1.Reflect;
                            var1 = var2.apply;
                            var6 = new Array(1);
                            var6[0] = var5;
                            var5 = var6.concat;
                            var0 = _closure1_slot2;
                            var0 = var0.bind(var8)(var7);
                            var0 = var5.bind(var6)(var0);
                            var0 = var1.bind(var2)(var4, var3, var0);
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
                var18 = var8;
                var16 = var7;
                var7 = new var18[var11](var17, var16, var15);
                var7 = var7 instanceof Object ? var7 : var8;
                var0.end = var7;
                var8 = var9.push;
                var11 = var12.on;
                var10 = 'spanStart';
                var7 = function(arg0) { // Environment: var1
                    _fun99253: for (var _fun99253_ip = 0;;) switch (_fun99253_ip) {
                        case 0:
                            var4 = arg0;
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun99253_ip = 21;
                                continue _fun99253
                            }
                        case 13:
                            var2 = _closure2_slot12;
                            var1 = var4 === var2;
                        case 21:
                            if (var1) {
                                _fun99253_ip = 66;
                                continue _fun99253
                            }
                        case 24:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var2 = 5;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var2 = var3.spanToJSON;
                            var2 = var2.bind(var3)(var4);
                            var1 = var2.timestamp;
                        case 66:
                            if (var1) {
                                _fun99253_ip = 223;
                                continue _fun99253
                            }
                        case 72:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 5;
                            var1 = var2[var1];
                            var2 = undefined;
                            var6 = var5.bind(var2)(var1);
                            var5 = var6.getSpanDescendants;
                            var1 = _closure2_slot12;
                            var5 = var5.bind(var6)(var1);
                            var1 = var5.includes;
                            var1 = var1.bind(var5)(var4);
                            if (!var1) {
                                _fun99253_ip = 223;
                                continue _fun99253
                            }
                        case 125:
                            var1 = var4.spanContext;
                            var1 = var1.bind(var4)();
                            var6 = var1.spanId;
                            var1 = _closure2_slot13;
                            var1 = var1.bind(var2)();
                            var5 = _closure2_slot1;
                            var4 = var5.set;
                            var1 = true;
                            var1 = var4.bind(var5)(var6, var1);
                            var1 = _closure2_slot15;
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var3 = 6;
                            var3 = var5[var3];
                            var4 = var4.bind(var2)(var3);
                            var3 = var4.timestampInSeconds;
                            var3 = var3.bind(var4)();
                            var4 = _closure2_slot8;
                            var0 = 1000;
                            var0 = var4 / var0;
                            var0 = var3 + var0;
                            var0 = var1.bind(var2)(var0);
                        case 223:
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
                    _fun99254: for (var _fun99254_ip = 0;;) switch (_fun99254_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun99254_ip = 140;
                                continue _fun99254
                            }
                        case 16:
                            var1 = var2.spanContext;
                            var1 = var1.bind(var2)();
                            var3 = var1.spanId;
                            var2 = _closure2_slot1;
                            var1 = var2.has;
                            var1 = var1.bind(var2)(var3);
                            if (!var1) {
                                _fun99254_ip = 63;
                                continue _fun99254
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
                                _fun99254_ip = 140;
                                continue _fun99254
                            }
                        case 78:
                            var2 = _closure2_slot14;
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var1 = 6;
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
                    _fun99255: for (var _fun99255_ip = 0;;) switch (_fun99255_ip) {
                        case 0:
                            var2 = _closure2_slot12;
                            var1 = arg0;
                            if (!(var1 === var2)) {
                                _fun99255_ip = 50;
                                continue _fun99255
                            }
                        case 14:
                            var1 = true;
                            _closure2_slot4 = var1;
                            var2 = _closure2_slot14;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            var2 = _closure2_slot1;
                            var2 = var2.size;
                            if (!var2) {
                                _fun99255_ip = 50;
                                continue _fun99255
                            }
                        case 42:
                            var0 = _closure2_slot15;
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
                    _fun99239_ip = 717;
                    continue _fun99239
                }
            case 713:
                var5 = var5.bind(var4)();
            case 717:
                var2 = var2.setTimeout;
                var1 = function() { // Environment: var1
                    _fun99256: for (var _fun99256_ip = 0;;) switch (_fun99256_ip) {
                        case 0:
                            var1 = _closure2_slot2;
                            if (var1) {
                                _fun99256_ip = 93;
                                continue _fun99256
                            }
                        case 10:
                            var3 = _closure2_slot12;
                            var2 = var3.setStatus;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var4 = 9;
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
                            var1 = _closure2_slot12;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 852, 12936, 12941, 12942, 12925, 12871, 12933, 12926, 12928, 12937, 12943]);