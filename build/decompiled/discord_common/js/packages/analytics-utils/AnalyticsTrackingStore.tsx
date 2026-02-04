// ../discord_common/js/packages/analytics-utils/AnalyticsTrackingStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun6186: for (var _fun6186_ip = 0;;) switch (_fun6186_ip) {
        case 0:
            var5 = require;
            var8 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var8;
            var _closure1_slot2 = var6;
            var0 = function() {
                _fun6187: for (var _fun6187_ip = 0;;) switch (_fun6187_ip) {
                    case 0:
                    case 2: // try_start_0
                        var1 = global;
                        var2 = var1.Boolean;
                        var2 = var2.prototype;
                        var3 = var2.valueOf;
                        var2 = var3.call;
                        var7 = var1.Reflect;
                        var6 = var7.construct;
                        var5 = var1.Boolean;
                        var4 = new Array(0);
                        var1 = function() { // Environment: var0
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var6.bind(var7)(var5, var4, var1);
                        var1 = var2.bind(var3)(var1);
                        var1 = !var1;
                        var _closure2_slot0 = var1;
                    case 70: // try_end0
                        _fun6187_ip = 74;
                        continue _fun6187;
                    case 72: // catch_target0
                        CatchBlockStart(arg_register = 1);
                    case 74:
                        var1 = function() {
                            var0 = _closure2_slot0;
                            var0 = !var0;
                            var0 = !var0;
                            return var0;
                        };
                        _closure1_slot36 = var1;
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var _closure1_slot36 = var0;
            var0 = function arg0() {
                _fun6190: for (var _fun6190_ip = 0;;) switch (_fun6190_ip) {
                    case 0:
                        var1 = arguments[1];
                        var0 = undefined;
                        if (!(var1 === var0)) {
                            _fun6190_ip = 12;
                            continue _fun6190
                        }
                    case 9:
                        var1 = 1;
                    case 12:
                        var0 = arg0;
                        var0 = var0 + var1;
                        return var0;
                }
            };
            var _closure1_slot37 = var0;
            var3 = global;
            var9 = var3.Object;
            var7 = var9.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var9)(var2, var0, var4);
            var7 = 0;
            var4 = var6[var7];
            var0 = undefined;
            var4 = var8.bind(var0)(var4);
            var _closure1_slot3 = var4;
            var4 = 1;
            var4 = var6[var4];
            var4 = var8.bind(var0)(var4);
            var _closure1_slot4 = var4;
            var4 = 2;
            var4 = var6[var4];
            var4 = var8.bind(var0)(var4);
            var _closure1_slot5 = var4;
            var4 = 3;
            var4 = var6[var4];
            var4 = var8.bind(var0)(var4);
            var _closure1_slot6 = var4;
            var4 = 4;
            var4 = var6[var4];
            var4 = var8.bind(var0)(var4);
            var _closure1_slot7 = var4;
            var4 = 5;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var8 = var4.TelemetryEndpoints;
            var _closure1_slot8 = var8;
            var4 = var4.TelemetryEvents;
            var _closure1_slot9 = var4;
            var4 = {
                'FREQUENCY': 3600000,
                'MIN_DELAY': 60000,
                'MAX_DELAY': 3600000
            };
            var8 = var4.FREQUENCY;
            var _closure1_slot10 = var8;
            var8 = var4.MIN_DELAY;
            var _closure1_slot11 = var8;
            var4 = var4.MAX_DELAY;
            var _closure1_slot12 = var4;
            var4 = 1500;
            var _closure1_slot13 = var4;
            var _closure1_slot14 = var7;
            var _closure1_slot15 = var7;
            var _closure1_slot16 = var7;
            var _closure1_slot17 = var7;
            var _closure1_slot18 = var7;
            var4 = null;
            var _closure1_slot19 = var4;
            var _closure1_slot20 = var7;
            var8 = var3.Number;
            var8 = var8.MAX_SAFE_INTEGER;
            var _closure1_slot21 = var8;
            var _closure1_slot22 = var7;
            var _closure1_slot23 = var7;
            var _closure1_slot24 = var4;
            var7 = false;
            var _closure1_slot25 = var7;
            var _closure1_slot26 = var4;
            var _closure1_slot27 = var4;
            var3 = var3.window;
            var3 = var3.requestIdleCallback;
            if (!(var4 == var3)) {
                _fun6186_ip = 332;
                continue _fun6186
            }
        case 327:
            var3 = function(arg0) { // Environment: var1
                var1 = arg0;
                var _closure2_slot0 = var1;
                var1 = global;
                var2 = var1.setImmediate;
                var1 = undefined;
                var0 = function() { // Environment: var0
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var0 = var1.bind(var0)();
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                return var0;
            };
        case 332:
            var _closure1_slot30 = var3;
            var3 = 6;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var3 = var3.IdGenerator;
            var7 = var3.prototype;
            var7 = Object.create(var7, {
                constructor: {
                    value: var3
                }
            });
            var13 = var7;
            var3 = new var13[var3](var12);
            var3 = var3 instanceof Object ? var3 : var7;
            var _closure1_slot31 = var3;
            var3 = {};
            var7 = function() {
                var0 = undefined;
                return var0;
            };
            var3.handleConnectionOpen = var7;
            var7 = function() {
                var0 = undefined;
                return var0;
            };
            var3.handleConnectionClosed = var7;
            var7 = function() {
                var0 = undefined;
                return var0;
            };
            var3.handleFingerprint = var7;
            var7 = function() {
                var0 = undefined;
                return var0;
            };
            var3.handleTrack = var7;
            var7 = function() {
                var0 = undefined;
                return var0;
            };
            var3.handleSetAnalyticsToken = var7;
            var _closure1_slot32 = var3;
            var7 = new Array(0);
            var _closure1_slot33 = var7;
            var _closure1_slot34 = var4;
            var4 = function() {
                var0 = global;
                var2 = var0.Promise;
                var1 = var2.resolve;
                var0 = {};
                var3 = undefined;
                var0.sessionId = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var _closure1_slot35 = var4;
            var4 = 11;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = '../discord_common/js/packages/analytics-utils/AnalyticsTrackingStore.tsx';
            var4 = var5.bind(var6)(var4);
            var2.AnalyticsActionHandlers = var3;
            var1 = function(arg0) { // Environment: var1
                _fun6199: for (var _fun6199_ip = 0;;) switch (_fun6199_ip) {
                    case 0:
                        var5 = arg0;
                        var3 = var5.dispatcher;
                        var2 = var5.actionHandler;
                        var1 = var5.getFingerprint;
                        var _closure2_slot0 = var1;
                        var1 = var5.getSessionId;
                        var4 = undefined;
                        if (!(var1 === var4)) {
                            _fun6199_ip = 46;
                            continue _fun6199
                        }
                    case 39:
                        var1 = _closure1_slot35;
                    case 46:
                        var _closure2_slot1 = var1;
                        var1 = var5.TRACKING_URL;
                        var _closure2_slot2 = var1;
                        var1 = var5.drainTimeoutOverride;
                        var6 = var5.waitFor;
                        var _closure2_slot3 = var6;
                        var6 = var5.scheduleWhenIdle;
                        if (!(var6 === var4)) {
                            _fun6199_ip = 93;
                            continue _fun6199
                        }
                    case 86:
                        var6 = _closure1_slot30;
                    case 93:
                        var _closure2_slot4 = var6;
                        var5 = var5.getLaunchSignature;
                        if (!(var5 === var4)) {
                            _fun6199_ip = 112;
                            continue _fun6199
                        }
                    case 107:
                        var5 = function() {
                            var0 = null;
                            return var0;
                        };
                    case 112:
                        var _closure2_slot5 = var5;
                        var5 = function() {
                            _fun6201: for (var _fun6201_ip = 0;;) switch (_fun6201_ip) {
                                case 0:
                                    var0 = _closure1_slot33;
                                    var1 = var0.length;
                                    var0 = 0;
                                    var0 = var0 !== var1;
                                    if (!var0) {
                                        _fun6201_ip = 61;
                                        continue _fun6201
                                    }
                                case 21:
                                    var1 = _closure1_slot29;
                                    var3 = null;
                                    if (!(var3 == var1)) {
                                        _fun6201_ip = 50;
                                        continue _fun6201
                                    }
                                case 31:
                                    var4 = _closure2_slot0;
                                    var1 = undefined;
                                    var1 = var4.bind(var1)();
                                    var1 = var3 != var1;
                                    _fun6201_ip = 58;
                                    continue _fun6201;
                                case 50:
                                    var2 = _closure1_slot28;
                                    var1 = var3 != var2;
                                case 58:
                                    var0 = var1;
                                case 61:
                                    return var0;
                            }
                        };
                        var _closure2_slot6 = var5;
                        var5 = function arg0() {
                            _fun6202: for (var _fun6202_ip = 0;;) switch (_fun6202_ip) {
                                case 0:
                                    var0 = arg0;
                                    var1 = var0.shouldFlushOnNextTick;
                                    var0 = undefined;
                                    if (!(var1 === var0)) {
                                        _fun6202_ip = 17;
                                        continue _fun6202
                                    }
                                case 15:
                                    var1 = false;
                                case 17:
                                    var4 = _closure1_slot34;
                                    var3 = null;
                                    var3 = var3 == var4;
                                    if (!var3) {
                                        _fun6202_ip = 44;
                                        continue _fun6202
                                    }
                                case 33:
                                    var4 = _closure2_slot6;
                                    var3 = var4.bind(var0)();
                                case 44:
                                    if (!var3) {
                                        _fun6202_ip = 104;
                                        continue _fun6202
                                    }
                                case 47:
                                    if (var1) {
                                        _fun6202_ip = 80;
                                        continue _fun6202
                                    }
                                case 53:
                                    var5 = _closure2_slot4;
                                    var4 = _closure2_slot8;
                                    var1 = {};
                                    var6 = _closure1_slot13;
                                    var1.timeout = var6;
                                    var1 = var5.bind(var0)(var4, var1);
                                    _fun6202_ip = 100;
                                    continue _fun6202;
                                case 80:
                                    var4 = global;
                                    var5 = var4.setTimeout;
                                    var4 = _closure2_slot8;
                                    var3 = 0;
                                    var1 = var5.bind(var0)(var4, var3);
                                case 100:
                                    _closure1_slot34 = var1;
                                case 104:
                                    return var0;
                            }
                        };
                        var _closure2_slot7 = var5;
                        var5 = function() {
                            _fun6203: for (var _fun6203_ip = 0;;) switch (_fun6203_ip) {
                                case 0:
                                    var0 = null;
                                    _closure1_slot34 = var0;
                                    var2 = _closure2_slot6;
                                    var3 = undefined;
                                    var2 = var2.bind(var3)();
                                    if (var2) {
                                        _fun6203_ip = 47;
                                        continue _fun6203
                                    }
                                case 27:
                                    var2 = global;
                                    var4 = var2.Promise;
                                    var2 = var4.resolve;
                                    var2 = var2.bind(var4)();
                                    return var2;
                                case 47:
                                    var4 = _closure1_slot33;
                                    var2 = var4.slice;
                                    var2 = var2.bind(var4)();
                                    var _closure3_slot0 = var2;
                                    var4 = new Array(0);
                                    _closure1_slot33 = var4;
                                    var7 = _closure1_slot37;
                                    var4 = _closure1_slot20;
                                    var4 = var7.bind(var3)(var4);
                                    _closure1_slot20 = var4;
                                    var6 = var2.length;
                                    var4 = global;
                                    var10 = var4.Math;
                                    var9 = var10.min;
                                    var8 = _closure1_slot21;
                                    var8 = var9.bind(var10)(var8, var6);
                                    _closure1_slot21 = var8;
                                    var9 = var4.Math;
                                    var8 = var9.max;
                                    var4 = _closure1_slot22;
                                    var4 = var8.bind(var9)(var4, var6);
                                    _closure1_slot22 = var4;
                                    var4 = _closure1_slot23;
                                    var4 = var7.bind(var3)(var4, var6);
                                    _closure1_slot23 = var4;
                                    var0 = _closure2_slot9;
                                    var0 = var0.bind(var3)(var2);
                                    var3 = var0.then;
                                    var2 = function() { // Environment: var1
                                        var2 = _closure3_slot0;
                                        var1 = var2.forEach;
                                        var0 = function(arg0) { // Environment: var0
                                            _fun6205: for (var _fun6205_ip = 0;;) switch (_fun6205_ip) {
                                                case 0:
                                                    var1 = arg0;
                                                    var2 = var1.resolve;
                                                    var0 = null;
                                                    if (!(var0 != var2)) {
                                                        _fun6205_ip = 25;
                                                        continue _fun6205
                                                    }
                                                case 15:
                                                    var0 = var1.resolve;
                                                    var0 = var0.bind(var1)();
                                                case 25:
                                                    var0 = undefined;
                                                    return var0;
                                            }
                                        };
                                        var0 = var1.bind(var2)(var0);
                                        var3 = _closure1_slot37;
                                        var1 = _closure1_slot16;
                                        var0 = undefined;
                                        var1 = var3.bind(var0)(var1);
                                        _closure1_slot16 = var1;
                                        return var0;
                                    };
                                    var1 = function(arg0) { // Environment: var1
                                        _fun6206: for (var _fun6206_ip = 0;;) switch (_fun6206_ip) {
                                            case 0:
                                                var2 = arg0;
                                                var4 = _closure1_slot33;
                                                var1 = var4.unshift;
                                                var8 = _closure3_slot0;
                                                var0 = new Array(0);
                                                var7 = 0;
                                                var9 = var0;
                                                var5 = arraySpread(var9, var8, var7);
                                                var9 = var1;
                                                var8 = var0;
                                                var7 = var4;
                                                var0 = apply(var9, var8, var7);
                                                var4 = _closure1_slot37;
                                                var1 = _closure1_slot17;
                                                var0 = undefined;
                                                var1 = var4.bind(var0)(var1);
                                                _closure1_slot17 = var1;
                                                var1 = var2.body;
                                                if (var1) {
                                                    _fun6206_ip = 79;
                                                    continue _fun6206
                                                }
                                            case 76:
                                                var1 = var2;
                                            case 79:
                                                var1 = var1.message;
                                                return var0;
                                        }
                                    };
                                    var1 = var3.bind(var0)(var2, var1);
                                    return var0;
                            }
                        };
                        var _closure2_slot8 = var5;
                        var5 = function arg0() {
                            _fun6207: for (var _fun6207_ip = 0;;) switch (_fun6207_ip) {
                                case 0:
                                    var4 = arg0;
                                    var7 = arguments[1];
                                    var3 = undefined;
                                    if (!(var7 === var3)) {
                                        _fun6207_ip = 21;
                                        continue _fun6207
                                    }
                                case 14:
                                    var7 = _closure2_slot2;
                                case 21:
                                    var _closure3_slot0 = var3;
                                    var _closure3_slot1 = var3;
                                    var1 = global;
                                    var2 = var1.Date;
                                    var1 = var2.now;
                                    var1 = var1.bind(var2)();
                                    _closure3_slot0 = var1;
                                    var2 = var4.map;
                                    var1 = function(arg0) { // Environment: var0
                                        var1 = arg0;
                                        var0 = {};
                                        var5 = var0;
                                        var4 = var1;
                                        var2 = copyDataProperties(var5, var4);
                                        var2 = {};
                                        var4 = var1.properties;
                                        var5 = var2;
                                        var1 = copyDataProperties(var5, var4);
                                        var3 = _closure3_slot0;
                                        var1 = 'client_send_timestamp';
                                        var2[var1] = var3;
                                        var1 = 'properties';
                                        var0[var1] = var2;
                                        return var0;
                                    };
                                    var5 = var2.bind(var4)(var1);
                                    var4 = {};
                                    _closure3_slot1 = var4;
                                    var1 = _closure1_slot25;
                                    if (var1) {
                                        _fun6207_ip = 127;
                                        continue _fun6207
                                    }
                                case 81:
                                    var2 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var1 = 8;
                                    var1 = var8[var1];
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.v4;
                                    var1 = var1.bind(var2)();
                                    _closure1_slot27 = var1;
                                    var4['x-science-test'] = var1;
                                    var1 = true;
                                    _closure1_slot25 = var1;
                                case 127:
                                    var2 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var1 = 9;
                                    var1 = var8[var1];
                                    var1 = var2.bind(var3)(var1);
                                    var3 = var1.HTTP;
                                    var2 = var3.post;
                                    var1 = {};
                                    var1.url = var7;
                                    var1.headers = var4;
                                    var4 = {};
                                    var6 = _closure1_slot28;
                                    var4.token = var6;
                                    var4.events = var5;
                                    var1.body = var4;
                                    var4 = 3;
                                    var1.retries = var4;
                                    var4 = false;
                                    var1.rejectWithError = var4;
                                    var2 = var2.bind(var3)(var1);
                                    var1 = var2.then;
                                    var0 = function(arg0) { // Environment: var0
                                        _fun6209: for (var _fun6209_ip = 0;;) switch (_fun6209_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = _closure3_slot1;
                                                var1 = var1["x-science-test"];
                                                if (!var1) {
                                                    _fun6209_ip = 70;
                                                    continue _fun6209
                                                }
                                            case 19:
                                                var2 = null;
                                                var3 = var2 == var0;
                                                var1 = undefined;
                                                if (var3) {
                                                    _fun6209_ip = 51;
                                                    continue _fun6209
                                                }
                                            case 30:
                                                var3 = var0.headers;
                                                var4 = var2 == var3;
                                                var1 = undefined;
                                                if (var4) {
                                                    _fun6209_ip = 51;
                                                    continue _fun6209
                                                }
                                            case 45:
                                                var1 = var3["x-science-test"];
                                            case 51:
                                                var3 = var2 != var1;
                                                var2 = null;
                                                if (!var3) {
                                                    _fun6209_ip = 63;
                                                    continue _fun6209
                                                }
                                            case 60:
                                                var2 = var1;
                                            case 63:
                                                _closure1_slot26 = var2;
                                            case 70:
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                            }
                        };
                        var _closure2_slot9 = var5;
                        var5 = function() {
                            _fun6210: for (var _fun6210_ip = 0;;) switch (_fun6210_ip) {
                                case 0:
                                    var4 = {};
                                    var1 = _closure1_slot9;
                                    var1 = var1.CLIENT_TELEMETRY;
                                    var4.type = var1;
                                    var6 = {};
                                    var2 = global;
                                    var3 = var2.Date;
                                    var1 = var3.now;
                                    var1 = var1.bind(var3)();
                                    var6.client_track_timestamp = var1;
                                    var1 = _closure1_slot16;
                                    var6.rpc_success_count = var1;
                                    var1 = _closure1_slot17;
                                    var6.rpc_failure_count = var1;
                                    var1 = _closure1_slot18;
                                    var6.first_seen_event_sequence_number = var1;
                                    var1 = _closure1_slot14;
                                    var6.last_seen_event_sequence_number = var1;
                                    var1 = _closure1_slot19;
                                    var6.telemetry_period_start_timestamp = var1;
                                    var3 = var2.Date;
                                    var1 = var3.now;
                                    var1 = var1.bind(var3)();
                                    var6.telemetry_period_end_timestamp = var1;
                                    var1 = _closure1_slot15;
                                    var6.event_queue_rejection_count = var1;
                                    var1 = _closure1_slot20;
                                    var6.event_queue_batch_count = var1;
                                    var7 = _closure1_slot21;
                                    var1 = var2.Number;
                                    var3 = var1.MAX_SAFE_INTEGER;
                                    var5 = 0;
                                    var1 = 0;
                                    if (!(var7 !== var3)) {
                                        _fun6210_ip = 154;
                                        continue _fun6210
                                    }
                                case 150:
                                    var1 = _closure1_slot21;
                                case 154:
                                    var6.event_queue_batch_min_size = var1;
                                    var1 = _closure1_slot22;
                                    var6.event_queue_batch_max_size = var1;
                                    var1 = _closure1_slot20;
                                    var3 = var1 > var5;
                                    var1 = 0;
                                    if (!var3) {
                                        _fun6210_ip = 193;
                                        continue _fun6210
                                    }
                                case 181:
                                    var7 = _closure1_slot23;
                                    var3 = _closure1_slot20;
                                    var1 = var7 / var3;
                                case 193:
                                    var6.event_queue_batch_avg_size = var1;
                                    var1 = _closure1_slot27;
                                    var6.science_request_id = var1;
                                    var1 = _closure1_slot26;
                                    var6.science_response = var1;
                                    var7 = _closure2_slot5;
                                    var3 = undefined;
                                    var7 = var7.bind(var3)();
                                    var6.launch_signature = var7;
                                    var4.properties = var6;
                                    _closure1_slot15 = var5;
                                    _closure1_slot16 = var5;
                                    _closure1_slot17 = var5;
                                    _closure1_slot20 = var5;
                                    var6 = var2.Number;
                                    var6 = var6.MAX_SAFE_INTEGER;
                                    _closure1_slot21 = var6;
                                    _closure1_slot22 = var5;
                                    _closure1_slot23 = var5;
                                    var5 = var2.Date;
                                    var2 = var5.now;
                                    var2 = var2.bind(var5)();
                                    _closure1_slot19 = var2;
                                    var2 = _closure1_slot14;
                                    _closure1_slot18 = var2;
                                    var2 = _closure2_slot9;
                                    var1 = new Array(1);
                                    var1[0] = var4;
                                    var0 = _closure1_slot8;
                                    var0 = var0.CLIENT_TELEMETRY;
                                    var0 = var2.bind(var3)(var1, var0);
                                    return var0;
                            }
                        };
                        var _closure2_slot10 = var5;
                        var5 = function() {
                            _fun6211: for (var _fun6211_ip = 0;;) switch (_fun6211_ip) {
                                case 0:
                                    var2 = _closure1_slot24;
                                    var0 = null;
                                    if (!(var0 != var2)) {
                                        _fun6211_ip = 103;
                                        continue _fun6211
                                    }
                                case 13:
                                    var2 = _closure1_slot24;
                                    var3 = var2.type;
                                    var2 = 'timeout';
                                    if (!(var2 !== var3)) {
                                        _fun6211_ip = 75;
                                        continue _fun6211
                                    }
                                case 30:
                                    var2 = 'interval';
                                    if (!(var2 !== var3)) {
                                        _fun6211_ip = 49;
                                        continue _fun6211
                                    }
                                case 38:
                                    var2 = _closure1_slot24;
                                    var2 = var2.type;
                                    _fun6211_ip = 99;
                                    continue _fun6211;
                                case 49:
                                    var2 = global;
                                    var4 = var2.clearInterval;
                                    var2 = _closure1_slot24;
                                    var3 = var2.id;
                                    var2 = undefined;
                                    var2 = var4.bind(var2)(var3);
                                    _fun6211_ip = 99;
                                    continue _fun6211;
                                case 75:
                                    var2 = global;
                                    var4 = var2.clearTimeout;
                                    var2 = _closure1_slot24;
                                    var3 = var2.id;
                                    var2 = undefined;
                                    var2 = var4.bind(var2)(var3);
                                case 99:
                                    _closure1_slot24 = var0;
                                case 103:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure2_slot11 = var5;
                        var5 = null;
                        var6 = var5 != var1;
                        var5 = 1500;
                        if (!var6) {
                            _fun6199_ip = 188;
                            continue _fun6199
                        }
                    case 185:
                        var5 = var1;
                    case 188:
                        _closure1_slot13 = var5;
                        var6 = _closure1_slot32;
                        var5 = function(arg0) { // Environment: var0
                            _fun6212: for (var _fun6212_ip = 0;;) switch (_fun6212_ip) {
                                case 0:
                                    var0 = arg0;
                                    var3 = var0.analyticsToken;
                                    var0 = var0.user;
                                    var2 = null;
                                    if (!(var2 != var3)) {
                                        _fun6212_ip = 27;
                                        continue _fun6212
                                    }
                                case 20:
                                    var _closure1_slot28 = var3;
                                case 27:
                                    var1 = var0.id;
                                    if (!(var2 != var1)) {
                                        _fun6212_ip = 48;
                                        continue _fun6212
                                    }
                                case 36:
                                    var1 = var0.id;
                                    var _closure1_slot29 = var1;
                                case 48:
                                    var0 = function() {
                                        _fun6213: for (var _fun6213_ip = 0;;) switch (_fun6213_ip) {
                                            case 0:
                                                var3 = _closure1_slot24;
                                                var0 = null;
                                                if (!(var0 == var3)) {
                                                    _fun6213_ip = 116;
                                                    continue _fun6213
                                                }
                                            case 15:
                                                var3 = global;
                                                var5 = var3.Math;
                                                var4 = var5.floor;
                                                var6 = var3.Math;
                                                var0 = var6.random;
                                                var7 = var0.bind(var6)();
                                                var0 = _closure1_slot12;
                                                var6 = _closure1_slot11;
                                                var0 = var0 - var6;
                                                var0 = var7 * var0;
                                                var0 = var0 + var6;
                                                var5 = var4.bind(var5)(var0);
                                                var0 = function() {
                                                    var3 = _closure1_slot10;
                                                    var0 = 0.1;
                                                    var4 = var0 * var3;
                                                    var0 = global;
                                                    var6 = var0.Math;
                                                    var5 = var6.floor;
                                                    var7 = var0.Math;
                                                    var1 = var7.random;
                                                    var1 = var1.bind(var7)();
                                                    var7 = var1 * var4;
                                                    var1 = 2;
                                                    var1 = var7 * var1;
                                                    var1 = var5.bind(var6)(var1);
                                                    var1 = var1 - var4;
                                                    var5 = var0.Math;
                                                    var4 = var5.max;
                                                    var3 = var3 + var1;
                                                    var1 = _closure1_slot11;
                                                    var5 = var4.bind(var5)(var3, var1);
                                                    var1 = {};
                                                    var3 = 'timeout';
                                                    var1.type = var3;
                                                    var4 = var0.setTimeout;
                                                    var0 = undefined;
                                                    var3 = function() { // Environment: var3
                                                        var1 = _closure2_slot10;
                                                        var0 = undefined;
                                                        var1 = var1.bind(var0)();
                                                        var1 = _closure4_slot0;
                                                        var1 = var1.bind(var0)();
                                                        return var0;
                                                    };
                                                    var3 = var4.bind(var0)(var3, var5);
                                                    var1.id = var3;
                                                    _closure1_slot24 = var1;
                                                    return var0;
                                                };
                                                var _closure4_slot0 = var0;
                                                var0 = {};
                                                var4 = 'timeout';
                                                var0.type = var4;
                                                var4 = var3.setTimeout;
                                                var3 = undefined;
                                                var2 = function() { // Environment: var2
                                                    var1 = _closure2_slot10;
                                                    var0 = undefined;
                                                    var1 = var1.bind(var0)();
                                                    var1 = _closure4_slot0;
                                                    var1 = var1.bind(var0)();
                                                    return var0;
                                                };
                                                var2 = var4.bind(var3)(var2, var5);
                                                var0.id = var2;
                                                _closure1_slot24 = var0;
                                            case 116:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var3 = undefined;
                                    var0 = var0.bind(var3)();
                                    var2 = _closure2_slot7;
                                    var1 = {};
                                    var0 = false;
                                    var1.shouldFlushOnNextTick = var0;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                            }
                        };
                        var6.handleConnectionOpen = var5;
                        var6 = _closure1_slot32;
                        var5 = function() { // Environment: var0
                            var2 = _closure2_slot8;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            var0 = _closure2_slot11;
                            var0 = var0.bind(var1)();
                            var0 = null;
                            _closure1_slot28 = var0;
                            _closure1_slot29 = var0;
                            var0 = false;
                            return var0;
                        };
                        var6.handleConnectionClosed = var5;
                        var6 = _closure1_slot32;
                        var5 = function() { // Environment: var0
                            var1 = _closure2_slot8;
                            var0 = undefined;
                            var0 = var1.bind(var0)();
                            var0 = false;
                            return var0;
                        };
                        var6.handleFingerprint = var5;
                        var6 = _closure1_slot32;
                        var5 = function(arg0) { // Environment: var0
                            var1 = arg0;
                            var2 = var1.event;
                            var _closure3_slot0 = var2;
                            var2 = var1.properties;
                            var _closure3_slot1 = var2;
                            var2 = var1.flush;
                            var _closure3_slot2 = var2;
                            var2 = var1.fingerprint;
                            var _closure3_slot3 = var2;
                            var1 = var1.resolve;
                            var _closure3_slot4 = var1;
                            var2 = _closure2_slot1;
                            var1 = undefined;
                            var2 = var2.bind(var1)();
                            var1 = var2.then;
                            var0 = function(arg0) { // Environment: var0
                                _fun6220: for (var _fun6220_ip = 0;;) switch (_fun6220_ip) {
                                    case 0:
                                        var0 = arg0;
                                        var2 = var0.sessionId;
                                        var4 = {};
                                        var1 = _closure3_slot0;
                                        var4.type = var1;
                                        var1 = _closure3_slot3;
                                        var4.fingerprint = var1;
                                        var1 = {};
                                        var3 = global;
                                        var5 = var3.Date;
                                        var3 = var5.now;
                                        var3 = var3.bind(var5)();
                                        var1.client_track_timestamp = var3;
                                        var1.client_heartbeat_session_id = var2;
                                        var3 = _closure1_slot14;
                                        var3 = var3 + 1;
                                        _closure1_slot14 = var3;
                                        var1.event_sequence_number = var3;
                                        var9 = _closure3_slot1;
                                        var10 = var1;
                                        var3 = copyDataProperties(var10, var9);
                                        var4.properties = var1;
                                        var1 = _closure3_slot4;
                                        var4.resolve = var1;
                                        var3 = _closure1_slot29;
                                        var1 = null;
                                        if (!(var1 == var3)) {
                                            _fun6220_ip = 181;
                                            continue _fun6220
                                        }
                                    case 114:
                                        var7 = var4.fingerprint;
                                        if (!(var1 == var7)) {
                                            _fun6220_ip = 137;
                                            continue _fun6220
                                        }
                                    case 124:
                                        var5 = _closure2_slot0;
                                        var3 = undefined;
                                        var7 = var5.bind(var3)();
                                    case 137:
                                        var3 = var1 != var7;
                                        var6 = null;
                                        if (!var3) {
                                            _fun6220_ip = 179;
                                            continue _fun6220
                                        }
                                    case 146:
                                        var8 = _closure1_slot0;
                                        var5 = _closure1_slot2;
                                        var3 = 7;
                                        var5 = var5[var3];
                                        var3 = undefined;
                                        var5 = var8.bind(var3)(var5);
                                        var3 = var5.extractId;
                                        var6 = var3.bind(var5)(var7);
                                    case 179:
                                        _fun6220_ip = 185;
                                        continue _fun6220;
                                    case 181:
                                        var6 = _closure1_slot29;
                                    case 185:
                                        if (!(var1 != var6)) {
                                            _fun6220_ip = 216;
                                            continue _fun6220
                                        }
                                    case 189:
                                        var3 = var4.properties;
                                        var5 = _closure1_slot31;
                                        var1 = var5.generate;
                                        var1 = var1.bind(var5)(var6);
                                        var3.client_uuid = var1;
                                    case 216:
                                        var3 = _closure1_slot33;
                                        var1 = var3.push;
                                        var1 = var1.bind(var3)(var4);
                                        var1 = _closure1_slot33;
                                        var1 = var1.length;
                                        var3 = 10000;
                                        if (!(var1 > var3)) {
                                            _fun6220_ip = 306;
                                            continue _fun6220
                                        }
                                    case 249:
                                        var1 = _closure1_slot33;
                                        var1 = var1.length;
                                        var5 = var1 - var3;
                                        var4 = _closure1_slot37;
                                        var3 = _closure1_slot15;
                                        var1 = undefined;
                                        var1 = var4.bind(var1)(var3, var5);
                                        _closure1_slot15 = var1;
                                        var4 = _closure1_slot33;
                                        var3 = var4.slice;
                                        var1 = -10000;
                                        var1 = var3.bind(var4)(var1);
                                        _closure1_slot33 = var1;
                                    case 306:
                                        var2 = _closure2_slot7;
                                        var1 = _closure3_slot2;
                                        var0 = {};
                                        if (var1) {
                                            _fun6220_ip = 334;
                                            continue _fun6220
                                        }
                                    case 322:
                                        var1 = false;
                                        var0.shouldFlushOnNextTick = var1;
                                        var1 = var0;
                                        _fun6220_ip = 344;
                                        continue _fun6220;
                                    case 334:
                                        var3 = true;
                                        var0.shouldFlushOnNextTick = var3;
                                        var1 = var0;
                                    case 344:
                                        var0 = undefined;
                                        var1 = var2.bind(var0)(var1);
                                        return var0;
                                }
                            };
                            var0 = var1.bind(var2)(var0);
                            var0 = false;
                            return var0;
                        };
                        var6.handleTrack = var5;
                        var6 = _closure1_slot32;
                        var5 = function(arg0) { // Environment: var0
                            _fun6221: for (var _fun6221_ip = 0;;) switch (_fun6221_ip) {
                                case 0:
                                    var0 = arg0;
                                    var2 = var0.analyticsToken;
                                    var1 = var0.userId;
                                    var3 = _closure1_slot28;
                                    var4 = null;
                                    var3 = var4 == var3;
                                    if (!var3) {
                                        _fun6221_ip = 34;
                                        continue _fun6221
                                    }
                                case 30:
                                    var3 = var4 != var2;
                                case 34:
                                    if (!var3) {
                                        _fun6221_ip = 68;
                                        continue _fun6221
                                    }
                                case 37:
                                    _closure1_slot28 = var2;
                                    _closure1_slot29 = var1;
                                    var2 = _closure2_slot7;
                                    var1 = {};
                                    var0 = false;
                                    var1.shouldFlushOnNextTick = var0;
                                    var0 = undefined;
                                    var0 = var2.bind(var0)(var1);
                                case 68:
                                    var0 = false;
                                    return var0;
                            }
                        };
                        var6.handleSetAnalyticsToken = var5;
                        var5 = _closure1_slot1;
                        var6 = _closure1_slot2;
                        var1 = 10;
                        var1 = var6[var1];
                        var1 = var5.bind(var4)(var1);
                        var1 = var1.Store;
                        var0 = function(arg0) { // Environment: var0
                            var3 = function arg0() {
                                _fun6223: for (var _fun6223_ip = 0;;) switch (_fun6223_ip) {
                                    case 0:
                                        var3 = this;
                                        var11 = 0;
                                        var0 = copyRestArgs(var11);
                                        var6 = _closure1_slot3;
                                        var1 = _closure3_slot0;
                                        var2 = undefined;
                                        var6 = var6.bind(var2)(var3, var1);
                                        var8 = new Array(0);
                                        var11 = var8;
                                        var10 = var0;
                                        var9 = 0;
                                        var0 = arraySpread(var11, var10, var9);
                                        var0 = _closure1_slot6;
                                        var7 = var0.bind(var2)(var1);
                                        var1 = _closure1_slot5;
                                        var0 = _closure1_slot36;
                                        var0 = var0.bind(var2)();
                                        if (var0) {
                                            _fun6223_ip = 84;
                                            continue _fun6223
                                        }
                                    case 71:
                                        var0 = var7.apply;
                                        var0 = var0.bind(var7)(var3, var8);
                                        _fun6223_ip = 118;
                                        continue _fun6223;
                                    case 84:
                                        var5 = global;
                                        var6 = var5.Reflect;
                                        var5 = var6.construct;
                                        var4 = _closure1_slot6;
                                        var4 = var4.bind(var2)(var3);
                                        var4 = var4.constructor;
                                        var0 = var5.bind(var6)(var7, var8, var4);
                                    case 118:
                                        var0 = var1.bind(var2)(var3, var0);
                                        var1 = _closure2_slot9;
                                        var0.submitEventsImmediately = var1;
                                        return var0;
                                }
                            };
                            var _closure3_slot0 = var3;
                            var5 = _closure1_slot7;
                            var2 = undefined;
                            var4 = arg0;
                            var4 = var5.bind(var2)(var3, var4);
                            var1 = _closure1_slot4;
                            var4 = {};
                            var5 = 'initialize';
                            var4.key = var5;
                            var0 = function() {
                                _fun6224: for (var _fun6224_ip = 0;;) switch (_fun6224_ip) {
                                    case 0:
                                        var2 = this;
                                        var3 = _closure2_slot3;
                                        var1 = null;
                                        if (!(var1 != var3)) {
                                            _fun6224_ip = 52;
                                            continue _fun6224
                                        }
                                    case 16:
                                        var1 = var2.waitFor;
                                        var6 = _closure2_slot3;
                                        var0 = new Array(0);
                                        var5 = 0;
                                        var7 = var0;
                                        var3 = arraySpread(var7, var6, var5);
                                        var7 = var1;
                                        var6 = var0;
                                        var5 = var2;
                                        var0 = apply(var7, var6, var5);
                                    case 52:
                                        var0 = undefined;
                                        return var0;
                                }
                            };
                            var4.value = var0;
                            var0 = new Array(1);
                            var0[0] = var4;
                            var0 = var1.bind(var2)(var3, var0);
                            return var0;
                        };
                        var0 = var0.bind(var4)(var1);
                        var1 = 'AnalyticsTrackingStore';
                        var0.displayName = var1;
                        var1 = var0.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var0
                            }
                        });
                        var10 = var1;
                        var9 = var3;
                        var8 = var2;
                        var0 = new var10[var0](var9, var8, var7);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
            var2.analyticsTrackingStoreMaker = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 483, 487, 490, 491, 507, 566, 2]);