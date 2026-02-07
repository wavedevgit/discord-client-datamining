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
    var3 = var3.Symbol;
    var4 = var3.toStringTag;
    var3 = {};
    var7 = 'Module';
    var3.value = var7;
    var3 = var5.bind(var6)(var2, var4, var3);
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var2 = this;
            var3 = _closure1_slot3;
            var1 = _closure2_slot1;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var2._client = var0;
            var2._profiler = var0;
            var2._chunkTimer = var0;
            var1 = global;
            var3 = var1.Set;
            var4 = var3.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var3
                }
            });
            var7 = var4;
            var3 = new var7[var3](var6);
            var3 = var3 instanceof Object ? var3 : var4;
            var2._activeRootSpanIds = var3;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var7 = var3;
            var1 = new var7[var1](var6);
            var1 = var1 instanceof Object ? var1 : var3;
            var2._rootSpanTimeouts = var1;
            var2._profilerId = var0;
            var1 = false;
            var2._isRunning = var1;
            var2._sessionSampled = var1;
            return var0;
        };
        var _closure2_slot1 = var2;
        var4 = {};
        var1 = 'initialize';
        var4.key = var1;
        var1 = function arg0, arg1() {
            _fun12087: for (var _fun12087_ip = 0;;) switch (_fun12087_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 3;
                    var4 = var7[var5];
                    var0 = undefined;
                    var8 = var6.bind(var0)(var4);
                    var4 = var8.uuid4;
                    var4 = var4.bind(var8)();
                    var2._profilerId = var4;
                    var4 = 4;
                    var4 = var7[var4];
                    var4 = var6.bind(var0)(var4);
                    var4 = var4.DEBUG_BUILD;
                    if (!var4) {
                        _fun12087_ip = 107;
                        continue _fun12087
                    }
                case 68:
                    var4 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var1 = var1[var5];
                    var1 = var4.bind(var0)(var1);
                    var5 = var1.debug;
                    var4 = var5.log;
                    var1 = "[Profiling] Initializing profiler (lifecycle='trace').";
                    var1 = var4.bind(var5)(var1);
                case 107:
                    var2._client = var3;
                    var1 = arg1;
                    var2._sessionSampled = var1;
                    var1 = var2._setupTraceLifecycleListeners;
                    var1 = var1.bind(var2)(var3);
                    return var0;
            }
        };
        var4.value = var1;
        var1 = new Array(13);
        var1[0] = var4;
        var4 = {};
        var6 = 'notifyRootSpanActive';
        var4.key = var6;
        var6 = function arg0() {
            _fun12088: for (var _fun12088_ip = 0;;) switch (_fun12088_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = var1._sessionSampled;
                    if (!var0) {
                        _fun12088_ip = 179;
                        continue _fun12088
                    }
                case 18:
                    var0 = var2.spanContext;
                    var0 = var0.bind(var2)();
                    var3 = var0.spanId;
                    if (!var3) {
                        _fun12088_ip = 179;
                        continue _fun12088
                    }
                case 40:
                    var2 = var1._activeRootSpanIds;
                    var0 = var2.has;
                    var0 = var0.bind(var2)(var3);
                    if (var0) {
                        _fun12088_ip = 179;
                        continue _fun12088
                    }
                case 59:
                    var2 = var1._activeRootSpanIds;
                    var0 = var2.add;
                    var0 = var0.bind(var2)(var3);
                    var0 = var1._activeRootSpanIds;
                    var4 = var0.size;
                    var0 = 1;
                    if (!(var0 === var4)) {
                        _fun12088_ip = 179;
                        continue _fun12088
                    }
                case 93:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun12088_ip = 170;
                        continue _fun12088
                    }
                case 127:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 3;
                    var0 = var5[var0];
                    var0 = var2.bind(var3)(var0);
                    var3 = var0.debug;
                    var2 = var3.log;
                    var0 = '[Profiling] Detected already active root span during setup. Active root spans now:';
                    var0 = var2.bind(var3)(var0, var4);
                case 170:
                    var0 = var1.start;
                    var0 = var0.bind(var1)();
                case 179:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var1[1] = var4;
        var4 = {};
        var6 = 'start';
        var4.key = var6;
        var6 = function() {
            _fun12089: for (var _fun12089_ip = 0;;) switch (_fun12089_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._isRunning;
                    if (var0) {
                        _fun12089_ip = 273;
                        continue _fun12089
                    }
                case 15:
                    var0 = true;
                    var1._isRunning = var0;
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var6 = 4;
                    var2 = var2[var6];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun12089_ip = 106;
                        continue _fun12089
                    }
                case 57:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var2 = 3;
                    var2 = var5[var2];
                    var2 = var4.bind(var3)(var2);
                    var7 = var2.debug;
                    var5 = var7.log;
                    var4 = var1._profilerId;
                    var2 = '[Profiling] Started profiling with profile ID:';
                    var2 = var5.bind(var7)(var2, var4);
                case 106:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var4 = 3;
                    var2 = var2[var4];
                    var5 = var5.bind(var3)(var2);
                    var2 = var5.getGlobalScope;
                    var8 = var2.bind(var5)();
                    var7 = var8.setContext;
                    var5 = {};
                    var2 = var1._profilerId;
                    var5.profiler_id = var2;
                    var2 = 'profile';
                    var2 = var7.bind(var8)(var2, var5);
                    var2 = var1._startProfilerInstance;
                    var2 = var2.bind(var1)();
                    var2 = var1._profiler;
                    if (var2) {
                        _fun12089_ip = 263;
                        continue _fun12089
                    }
                case 184:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var2 = var2[var6];
                    var2 = var5.bind(var3)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun12089_ip = 249;
                        continue _fun12089
                    }
                case 210:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var0 = var0[var4];
                    var0 = var2.bind(var3)(var0);
                    var3 = var0.debug;
                    var2 = var3.log;
                    var0 = '[Profiling] Stopping trace lifecycle profiling.';
                    var0 = var2.bind(var3)(var0);
                case 249:
                    var0 = var1._resetProfilerInfo;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                case 263:
                    var0 = var1._startPeriodicChunking;
                    var0 = var0.bind(var1)();
                case 273:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var1[2] = var4;
        var4 = {};
        var6 = 'stop';
        var4.key = var6;
        var6 = function() {
            _fun12090: for (var _fun12090_ip = 0;;) switch (_fun12090_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._isRunning;
                    if (!var0) {
                        _fun12090_ip = 94;
                        continue _fun12090
                    }
                case 12:
                    var0 = false;
                    var1._isRunning = var0;
                    var0 = var1._chunkTimer;
                    if (!var0) {
                        _fun12090_ip = 56;
                        continue _fun12090
                    }
                case 29:
                    var0 = global;
                    var3 = var0.clearTimeout;
                    var2 = var1._chunkTimer;
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var1._chunkTimer = var0;
                case 56:
                    var0 = var1._clearAllRootSpanTimeouts;
                    var0 = var0.bind(var1)();
                    var0 = var1._collectCurrentChunk;
                    var2 = var0.bind(var1)();
                    var1 = var2.catch;
                    var0 = function(arg0) { // Environment: var0
                        _fun12091: for (var _fun12091_ip = 0;;) switch (_fun12091_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 4;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var2 = var2.DEBUG_BUILD;
                                if (!var2) {
                                    _fun12091_ip = 80;
                                    continue _fun12091
                                }
                            case 34:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var1 = 3;
                                var1 = var3[var1];
                                var1 = var2.bind(var0)(var1);
                                var4 = var1.debug;
                                var3 = var4.error;
                                var2 = '[Profiling] Failed to collect current profile chunk on `stop()`:';
                                var1 = arg0;
                                var1 = var3.bind(var4)(var2, var1);
                            case 80:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 94:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var1[3] = var4;
        var4 = {};
        var6 = '_setupTraceLifecycleListeners';
        var4.key = var6;
        var6 = function arg0() {
            var3 = arg0;
            var1 = this;
            var _closure3_slot0 = var1;
            var4 = var3.on;
            var2 = 'spanStart';
            var1 = function(arg0) { // Environment: var0
                _fun12093: for (var _fun12093_ip = 0;;) switch (_fun12093_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = _closure3_slot0;
                        var3 = var1._sessionSampled;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        if (var3) {
                            _fun12093_ip = 103;
                            continue _fun12093
                        }
                    case 30:
                        var3 = 4;
                        var3 = var2[var3];
                        var7 = undefined;
                        var3 = var6.bind(var7)(var3);
                        var3 = var3.DEBUG_BUILD;
                        if (!var3) {
                            _fun12093_ip = 421;
                            continue _fun12093
                        }
                    case 56:
                        var4 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var3 = 3;
                        var3 = var8[var3];
                        var3 = var4.bind(var7)(var3);
                        var7 = var3.debug;
                        var4 = var7.log;
                        var3 = '[Profiling] Session not sampled because of negative sampling decision.';
                        var3 = var4.bind(var7)(var3);
                        _fun12093_ip = 421;
                        continue _fun12093;
                    case 103:
                        var4 = 3;
                        var2 = var2[var4];
                        var3 = undefined;
                        var6 = var6.bind(var3)(var2);
                        var2 = var6.getRootSpan;
                        var2 = var2.bind(var6)(var5);
                        if (!(var5 === var2)) {
                            _fun12093_ip = 421;
                            continue _fun12093
                        }
                    case 135:
                        var2 = var5.isRecording;
                        var2 = var2.bind(var5)();
                        if (var2) {
                            _fun12093_ip = 224;
                            continue _fun12093
                        }
                    case 148:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var2 = 4;
                        var2 = var7[var2];
                        var2 = var6.bind(var3)(var2);
                        var2 = var2.DEBUG_BUILD;
                        if (!var2) {
                            _fun12093_ip = 421;
                            continue _fun12093
                        }
                    case 180:
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var4];
                        var2 = var6.bind(var3)(var2);
                        var7 = var2.debug;
                        var6 = var7.log;
                        var2 = '[Profiling] Discarding profile because root span was not sampled.';
                        var2 = var6.bind(var7)(var2);
                        _fun12093_ip = 421;
                        continue _fun12093;
                    case 224:
                        var2 = var5.spanContext;
                        var2 = var2.bind(var5)();
                        var8 = var2.spanId;
                        if (!var8) {
                            _fun12093_ip = 421;
                            continue _fun12093
                        }
                    case 246:
                        var2 = _closure3_slot0;
                        var5 = var2._activeRootSpanIds;
                        var2 = var5.has;
                        var2 = var2.bind(var5)(var8);
                        if (var2) {
                            _fun12093_ip = 421;
                            continue _fun12093
                        }
                    case 272:
                        var2 = _closure3_slot0;
                        var5 = var2._registerTraceRootSpan;
                        var5 = var5.bind(var2)(var8);
                        var2 = var2._activeRootSpanIds;
                        var7 = var2.size;
                        var2 = 1;
                        if (!(var2 === var7)) {
                            _fun12093_ip = 421;
                            continue _fun12093
                        }
                    case 305:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var2 = 4;
                        var2 = var6[var2];
                        var2 = var5.bind(var3)(var2);
                        var2 = var2.DEBUG_BUILD;
                        if (!var2) {
                            _fun12093_ip = 408;
                            continue _fun12093
                        }
                    case 334:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var4];
                        var1 = var2.bind(var3)(var1);
                        var3 = var1.debug;
                        var2 = var3.log;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var6 = var1.concat;
                        var13 = '[Profiling] Root span ';
                        var11 = ' started. Profiling active while there are active root spans (count=';
                        var9 = ').';
                        var12 = var8;
                        var10 = var7;
                        var1 = var13[var6](var12, var11, var10, var9, var8);
                        var1 = var2.bind(var3)(var1);
                    case 408:
                        var1 = _closure3_slot0;
                        var0 = var1.start;
                        var0 = var0.bind(var1)();
                    case 421:
                        var0 = undefined;
                        return var0;
                }
            };
            var1 = var4.bind(var3)(var2, var1);
            var2 = var3.on;
            var1 = 'spanEnd';
            var0 = function(arg0) { // Environment: var0
                _fun12094: for (var _fun12094_ip = 0;;) switch (_fun12094_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = _closure3_slot0;
                        var1 = var1._sessionSampled;
                        if (!var1) {
                            _fun12094_ip = 260;
                            continue _fun12094
                        }
                    case 22:
                        var1 = var2.spanContext;
                        var1 = var1.bind(var2)();
                        var8 = var1.spanId;
                        if (!var8) {
                            _fun12094_ip = 260;
                            continue _fun12094
                        }
                    case 44:
                        var1 = _closure3_slot0;
                        var2 = var1._activeRootSpanIds;
                        var1 = var2.has;
                        var1 = var1.bind(var2)(var8);
                        if (!var1) {
                            _fun12094_ip = 260;
                            continue _fun12094
                        }
                    case 70:
                        var1 = _closure3_slot0;
                        var3 = var1._activeRootSpanIds;
                        var2 = var3.delete;
                        var2 = var2.bind(var3)(var8);
                        var1 = var1._activeRootSpanIds;
                        var2 = var1.size;
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var3 = 4;
                        var3 = var4[var3];
                        var4 = undefined;
                        var3 = var5.bind(var4)(var3);
                        var3 = var3.DEBUG_BUILD;
                        if (!var3) {
                            _fun12094_ip = 212;
                            continue _fun12094
                        }
                    case 135:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var1 = 3;
                        var1 = var5[var1];
                        var1 = var3.bind(var4)(var1);
                        var4 = var1.debug;
                        var3 = var4.log;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var7 = var1.concat;
                        var13 = '[Profiling] Root span with ID ';
                        var11 = ' ended. Will continue profiling for as long as there are active root spans (currently: ';
                        var9 = ').';
                        var12 = var8;
                        var10 = var2;
                        var1 = var13[var7](var12, var11, var10, var9, var8);
                        var1 = var3.bind(var4)(var1);
                    case 212:
                        var1 = 0;
                        if (!(var1 === var2)) {
                            _fun12094_ip = 260;
                            continue _fun12094
                        }
                    case 218:
                        var1 = _closure3_slot0;
                        var0 = var1._collectCurrentChunk;
                        var3 = var0.bind(var1)();
                        var2 = var3.catch;
                        var0 = function(arg0) { // Environment: var0
                            _fun12095: for (var _fun12095_ip = 0;;) switch (_fun12095_ip) {
                                case 0:
                                    var3 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var0 = 4;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var2 = var3.bind(var0)(var2);
                                    var2 = var2.DEBUG_BUILD;
                                    if (!var2) {
                                        _fun12095_ip = 80;
                                        continue _fun12095
                                    }
                                case 34:
                                    var2 = _closure1_slot0;
                                    var3 = _closure1_slot1;
                                    var1 = 3;
                                    var1 = var3[var1];
                                    var1 = var2.bind(var0)(var1);
                                    var4 = var1.debug;
                                    var3 = var4.error;
                                    var2 = '[Profiling] Failed to collect current profile chunk on last `spanEnd`:';
                                    var1 = arg0;
                                    var1 = var3.bind(var4)(var2, var1);
                                case 80:
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var0);
                        var0 = var1.stop;
                        var0 = var0.bind(var1)();
                    case 260:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var1[4] = var4;
        var4 = {};
        var6 = '_resetProfilerInfo';
        var4.key = var6;
        var6 = function() {
            var1 = false;
            var0 = this;
            var0._isRunning = var1;
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 3;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getGlobalScope;
            var4 = var1.bind(var2)();
            var3 = var4.setContext;
            var2 = 'profile';
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var1[5] = var4;
        var4 = {};
        var6 = '_clearAllRootSpanTimeouts';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var3 = var0._rootSpanTimeouts;
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var1
                var0 = global;
                var2 = var0.clearTimeout;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            var1 = var0._rootSpanTimeouts;
            var0 = var1.clear;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var1[6] = var4;
        var4 = {};
        var6 = '_registerTraceRootSpan';
        var4.key = var6;
        var6 = function arg0() {
            var4 = arg0;
            var1 = this;
            var _closure3_slot0 = var4;
            var _closure3_slot1 = var1;
            var3 = var1._activeRootSpanIds;
            var0 = var3.add;
            var0 = var0.bind(var3)(var4);
            var0 = global;
            var5 = var0.setTimeout;
            var0 = undefined;
            var3 = function() { // Environment: var2
                var2 = _closure3_slot1;
                var1 = var2._onRootSpanTimeout;
                var0 = _closure3_slot0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var2 = 300000;
            var3 = var5.bind(var0)(var3, var2);
            var2 = var1._rootSpanTimeouts;
            var1 = var2.set;
            var1 = var1.bind(var2)(var4, var3);
            return var0;
        };
        var4.value = var6;
        var1[7] = var4;
        var4 = {};
        var6 = '_startProfilerInstance';
        var4.key = var6;
        var6 = function() {
            _fun12101: for (var _fun12101_ip = 0;;) switch (_fun12101_ip) {
                case 0:
                    var2 = this;
                    var1 = var2._profiler;
                    var0 = null;
                    var4 = var0 == var1;
                    var0 = undefined;
                    var3 = undefined;
                    if (var4) {
                        _fun12101_ip = 28;
                        continue _fun12101
                    }
                case 22:
                    var3 = var1.stopped;
                case 28:
                    var1 = false;
                    if (!(var1 !== var3)) {
                        _fun12101_ip = 149;
                        continue _fun12101
                    }
                case 34:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 5;
                    var1 = var5[var1];
                    var4 = var4.bind(var0)(var1);
                    var1 = var4.startJSSelfProfile;
                    var1 = var1.bind(var4)();
                    if (var1) {
                        _fun12101_ip = 143;
                        continue _fun12101
                    }
                case 70:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 4;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.DEBUG_BUILD;
                    if (!var4) {
                        _fun12101_ip = 149;
                        continue _fun12101
                    }
                case 99:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 3;
                    var3 = var5[var3];
                    var3 = var4.bind(var0)(var3);
                    var5 = var3.debug;
                    var4 = var5.log;
                    var3 = '[Profiling] Failed to start JS Profiler in trace lifecycle.';
                    var3 = var4.bind(var5)(var3);
                    _fun12101_ip = 149;
                    continue _fun12101;
                case 143:
                    var2._profiler = var1;
                case 149:
                    return var0;
            }
        };
        var4.value = var6;
        var1[8] = var4;
        var4 = {};
        var6 = '_startPeriodicChunking';
        var4.key = var6;
        var6 = function() {
            _fun12102: for (var _fun12102_ip = 0;;) switch (_fun12102_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1._isRunning;
                    if (!var2) {
                        _fun12102_ip = 51;
                        continue _fun12102
                    }
                case 18:
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        _fun12103: for (var _fun12103_ip = 0;;) switch (_fun12103_ip) {
                            case 0:
                                var0 = _closure3_slot0;
                                var2 = var0._collectCurrentChunk;
                                var4 = var2.bind(var0)();
                                var3 = var4.catch;
                                var2 = function(arg0) { // Environment: var2
                                    _fun12104: for (var _fun12104_ip = 0;;) switch (_fun12104_ip) {
                                        case 0:
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var0 = 4;
                                            var2 = var2[var0];
                                            var0 = undefined;
                                            var2 = var3.bind(var0)(var2);
                                            var2 = var2.DEBUG_BUILD;
                                            if (!var2) {
                                                _fun12104_ip = 80;
                                                continue _fun12104
                                            }
                                        case 34:
                                            var2 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var1 = 3;
                                            var1 = var3[var1];
                                            var1 = var2.bind(var0)(var1);
                                            var4 = var1.debug;
                                            var3 = var4.error;
                                            var2 = '[Profiling] Failed to collect current profile chunk during periodic chunking:';
                                            var1 = arg0;
                                            var1 = var3.bind(var4)(var2, var1);
                                        case 80:
                                            return var0;
                                    }
                                };
                                var2 = var3.bind(var4)(var2);
                                var0 = var0._isRunning;
                                if (!var0) {
                                    _fun12103_ip = 95;
                                    continue _fun12103
                                }
                            case 44:
                                var0 = _closure3_slot0;
                                var2 = var0._startProfilerInstance;
                                var2 = var2.bind(var0)();
                                var0 = var0._profiler;
                                var1 = _closure3_slot0;
                                if (var0) {
                                    _fun12103_ip = 85;
                                    continue _fun12103
                                }
                            case 71:
                                var0 = var1._resetProfilerInfo;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                            case 85:
                                var0 = var1._startPeriodicChunking;
                                var0 = var0.bind(var1)();
                            case 95:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = 60000;
                    var0 = var4.bind(var3)(var2, var0);
                    var1._chunkTimer = var0;
                case 51:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var1[9] = var4;
        var4 = {};
        var6 = '_onRootSpanTimeout';
        var4.key = var6;
        var6 = function arg0() {
            _fun12105: for (var _fun12105_ip = 0;;) switch (_fun12105_ip) {
                case 0:
                    var3 = arg0;
                    var1 = this;
                    var2 = var1._rootSpanTimeouts;
                    var0 = var2.has;
                    var0 = var0.bind(var2)(var3);
                    if (!var0) {
                        _fun12105_ip = 210;
                        continue _fun12105
                    }
                case 28:
                    var2 = var1._rootSpanTimeouts;
                    var0 = var2.delete;
                    var0 = var0.bind(var2)(var3);
                    var2 = var1._activeRootSpanIds;
                    var0 = var2.has;
                    var0 = var0.bind(var2)(var3);
                    if (!var0) {
                        _fun12105_ip = 210;
                        continue _fun12105
                    }
                case 66:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var2 = 4;
                    var2 = var4[var2];
                    var4 = undefined;
                    var2 = var5.bind(var4)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun12105_ip = 167;
                        continue _fun12105
                    }
                case 100:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var0 = 3;
                    var0 = var5[var0];
                    var0 = var2.bind(var4)(var0);
                    var4 = var0.debug;
                    var2 = var4.log;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var6 = var0.concat;
                    var5 = '[Profiling] Reached 5-minute timeout for root span ';
                    var0 = '. You likely started a manual root span that never called `.end()`.';
                    var0 = var6.bind(var5)(var3, var0);
                    var0 = var2.bind(var4)(var0);
                case 167:
                    var2 = var1._activeRootSpanIds;
                    var0 = var2.delete;
                    var0 = var0.bind(var2)(var3);
                    var0 = var1._activeRootSpanIds;
                    var2 = var0.size;
                    var0 = 0;
                    if (!(var0 === var2)) {
                        _fun12105_ip = 210;
                        continue _fun12105
                    }
                case 200:
                    var0 = var1.stop;
                    var0 = var0.bind(var1)();
                case 210:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var1[10] = var4;
        var4 = {};
        var6 = '_collectCurrentChunk';
        var4.key = var6;
        var7 = _closure1_slot2;
        var0 = undefined;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun12107: for (var _fun12107_ip = 0;;) switch (_fun12107_ip) {
                    case 0:
                        StartGenerator();
                        var8 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun12107_ip = 412;
                            continue _fun12107
                        }
                    case 13:
                        var1 = undefined;
                        var3 = undefined;
                        var4 = undefined;
                        var5 = undefined;
                        var6 = var8._profiler;
                        var3 = var6;
                        var8._profiler = var1;
                        if (!var6) {
                            _fun12107_ip = 409;
                            continue _fun12107
                        }
                    case 42: // try_start_0
                        var6 = var3;
                        var3 = var6.stop;
                        var3 = var3.bind(var6)();
                        SaveGenerator(address = 59);
                    case 57:
                        return var3;
                    case 59:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 6);
                        if (var6) {
                            _fun12107_ip = 326;
                            continue _fun12107
                        }
                    case 68:
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var7 = 5;
                        var10 = var11[var7];
                        var14 = var9.bind(var1)(var10);
                        var13 = var14.createProfileChunkPayload;
                        var12 = var8._client;
                        var10 = var8._profilerId;
                        var10 = var13.bind(var14)(var3, var12, var10);
                        var4 = var10;
                        var7 = var11[var7];
                        var9 = var9.bind(var1)(var7);
                        var7 = var9.validateProfileChunk;
                        var9 = var7.bind(var9)(var10);
                        var5 = var9;
                        var7 = 'reason';
                        var7 = var7 in var9;
                        if (var7) {
                            _fun12107_ip = 240;
                            continue _fun12107
                        }
                    case 153:
                        var7 = var8._sendProfileChunk;
                        var4 = var7.bind(var8)(var4);
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var4 = 4;
                        var4 = var8[var4];
                        var4 = var7.bind(var1)(var4);
                        var4 = var4.DEBUG_BUILD;
                        if (!var4) {
                            _fun12107_ip = 235;
                            continue _fun12107
                        }
                    case 193:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var4 = 3;
                        var4 = var8[var4];
                        var4 = var7.bind(var1)(var4);
                        var8 = var4.debug;
                        var7 = var8.log;
                        var4 = '[Profiling] Collected browser profile chunk.';
                        var4 = var7.bind(var8)(var4);
                    case 235: // try_end0
                        _fun12107_ip = 409;
                        continue _fun12107;
                    case 240: // try_start_1
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var7 = 4;
                        var7 = var9[var7];
                        var7 = var8.bind(var1)(var7);
                        var7 = var7.DEBUG_BUILD;
                        var4 = var7;
                        if (!var7) {
                            _fun12107_ip = 321;
                            continue _fun12107
                        }
                    case 272:
                        var7 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var6 = 3;
                        var6 = var8[var6];
                        var6 = var7.bind(var1)(var6);
                        var8 = var6.debug;
                        var7 = var8.log;
                        var6 = var5.reason;
                        var5 = '[Profiling] Discarding invalid profile chunk (this is probably a bug in the SDK):';
                        var4 = var7.bind(var8)(var5, var6);
                    case 321: // try_end1
                        var4 = undefined;
                        return var4;
                    case 326:
                        return var3;
                    case 329: // catch_target0 // catch_target1
                        CatchBlockStart(arg_register = 2);
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var4 = 4;
                        var4 = var6[var4];
                        var4 = var5.bind(var1)(var4);
                        var4 = var4.DEBUG_BUILD;
                        if (!var4) {
                            _fun12107_ip = 409;
                            continue _fun12107
                        }
                    case 363:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var3 = 3;
                        var3 = var5[var3];
                        var3 = var4.bind(var1)(var3);
                        var5 = var3.debug;
                        var4 = var5.log;
                        var3 = var2;
                        var2 = '[Profiling] Error while stopping JS Profiler for chunk:';
                        var2 = var4.bind(var5)(var2, var3);
                    case 409:
                        return var1;
                    case 412:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var0)(var6);
        var _closure2_slot0 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var1[11] = var4;
        var4 = {};
        var6 = '_sendProfileChunk';
        var4.key = var6;
        var5 = function arg0() {
            _fun12109: for (var _fun12109_ip = 0;;) switch (_fun12109_ip) {
                case 0:
                    var0 = this;
                    var3 = var0._client;
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var14 = 3;
                    var1 = var0[var14];
                    var0 = undefined;
                    var5 = var2.bind(var0)(var1);
                    var2 = var5.getSdkMetadataForEnvelopeHeader;
                    var1 = var3.getSdkMetadata;
                    var4 = null;
                    var6 = var4 == var1;
                    var1 = undefined;
                    if (var6) {
                        _fun12109_ip = 67;
                        continue _fun12109
                    }
                case 57:
                    var6 = var3.getSdkMetadata;
                    var1 = var6.bind(var3)();
                case 67:
                    var12 = var2.bind(var5)(var1);
                    var1 = var3.getDsn;
                    var13 = var1.bind(var3)();
                    var1 = var3.getOptions;
                    var1 = var1.bind(var3)();
                    var1 = var1.tunnel;
                    var15 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var2 = var10[var14];
                    var6 = var15.bind(var0)(var2);
                    var5 = var6.createEnvelope;
                    var2 = global;
                    var9 = var2.Object;
                    var8 = var9.assign;
                    var7 = {};
                    var10 = var10[var14];
                    var15 = var15.bind(var0)(var10);
                    var10 = var15.uuid4;
                    var10 = var10.bind(var15)();
                    var7.event_id = var10;
                    var2 = var2.Date;
                    var10 = var2.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var2
                        }
                    });
                    var19 = var10;
                    var2 = new var19[var2](var18);
                    var10 = var2 instanceof Object ? var2 : var10;
                    var2 = var10.toISOString;
                    var2 = var2.bind(var10)();
                    var7.sent_at = var2;
                    var2 = var12;
                    if (!var2) {
                        _fun12109_ip = 217;
                        continue _fun12109
                    }
                case 207:
                    var10 = {};
                    var10.sdk = var12;
                    var2 = var10;
                case 217:
                    var10 = !var1;
                    var1 = !var10;
                    if (var10) {
                        _fun12109_ip = 229;
                        continue _fun12109
                    }
                case 226:
                    var1 = var13;
                case 229:
                    if (!var1) {
                        _fun12109_ip = 270;
                        continue _fun12109
                    }
                case 232:
                    var10 = {};
                    var12 = _closure1_slot0;
                    var11 = _closure1_slot1;
                    var11 = var11[var14];
                    var12 = var12.bind(var0)(var11);
                    var11 = var12.dsnToString;
                    var11 = var11.bind(var12)(var13);
                    var10.dsn = var11;
                    var1 = var10;
                case 270:
                    var2 = var8.bind(var9)(var7, var2, var1);
                    var1 = {};
                    var7 = 'profile_chunk';
                    var1.type = var7;
                    var7 = new Array(2);
                    var7[0] = var1;
                    var1 = arg0;
                    var7[1] = var1;
                    var1 = new Array(1);
                    var1[0] = var7;
                    var2 = var5.bind(var6)(var2, var1);
                    var1 = var3.sendEnvelope;
                    var3 = var1.bind(var3)(var2);
                    var2 = var3.then;
                    var1 = function(arg0) { // Environment: var1
                        _fun12110: for (var _fun12110_ip = 0;;) switch (_fun12110_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var0 = 4;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var2 = var2.DEBUG_BUILD;
                                if (!var2) {
                                    _fun12110_ip = 80;
                                    continue _fun12110
                                }
                            case 34:
                                var2 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var1 = 3;
                                var1 = var3[var1];
                                var1 = var2.bind(var0)(var1);
                                var4 = var1.debug;
                                var3 = var4.error;
                                var2 = 'Error while sending profile chunk envelope:';
                                var1 = arg0;
                                var1 = var3.bind(var4)(var2, var1);
                            case 80:
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var4, var1);
                    return var0;
            }
        };
        var4.value = var5;
        var1[12] = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.UIProfiler = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 817, 1073, 1096]);