// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var10 = require;
    var2 = exports;
    var11 = dependencyMap;
    var _closure1_slot0 = var10;
    var _closure1_slot1 = var11;
    var6 = function arg0() {
        _fun12215: for (var _fun12215_ip = 0;;) switch (_fun12215_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 8;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var3 = var0.NATIVE;
                var2 = var3.startProfiling;
                var0 = arg0;
                var2 = var2.bind(var3)(var0);
                var0 = null;
                if (!var2) {
                    _fun12215_ip = 75;
                    continue _fun12215
                }
            case 50:
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var2 = var2.bind(var3)();
                var1 = _closure1_slot3;
                var0 = var2 * var1;
            case 75:
                return var0;
        }
    };
    var _closure1_slot5 = var6;
    var5 = function arg0() {
        _fun12216: for (var _fun12216_ip = 0;;) switch (_fun12216_ip) {
            case 0:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 8;
                var0 = var3[var0];
                var4 = undefined;
                var0 = var2.bind(var4)(var0);
                var2 = var0.NATIVE;
                var0 = var2.stopProfiling;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun12216_ip = 48;
                    continue _fun12216
                }
            case 44:
                var2 = null;
                return var2;
            case 48:
                var2 = global;
                var3 = var2.Date;
                var2 = var3.now;
                var3 = var2.bind(var3)();
                var2 = _closure1_slot3;
                var5 = var3 * var2;
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 9;
                var2 = var6[var2];
                var6 = var3.bind(var4)(var2);
                var3 = var6.convertToSentryProfile;
                var2 = var0.hermesProfile;
                var6 = var3.bind(var6)(var2);
                if (var6) {
                    _fun12216_ip = 117;
                    continue _fun12216
                }
            case 113:
                var2 = null;
                return var2;
            case 117:
                var3 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 5;
                var2 = var7[var2];
                var3 = var3.bind(var4)(var2);
                var2 = var3.createHermesProfilingEvent;
                var3 = var2.bind(var3)(var6);
                if (var3) {
                    _fun12216_ip = 155;
                    continue _fun12216
                }
            case 151:
                var2 = null;
                return var2;
            case 155:
                var2 = var0.androidProfile;
                if (var2) {
                    _fun12216_ip = 194;
                    continue _fun12216
                }
            case 164:
                var6 = var0.nativeProfile;
                var2 = var3;
                if (!var6) {
                    _fun12216_ip = 192;
                    continue _fun12216
                }
            case 176:
                var7 = _closure1_slot8;
                var6 = var0.nativeProfile;
                var2 = var7.bind(var4)(var3, var6);
            case 192:
                return var2;
            case 194:
                var2 = arg0;
                var2 = var5 - var2;
                var1 = _closure1_slot7;
                var0 = var0.androidProfile;
                var0 = var1.bind(var4)(var3, var0, var2);
                return var0;
        }
    };
    var _closure1_slot6 = var5;
    var4 = function arg0, arg1, arg2() {
        var4 = arg0;
        var7 = arg2;
        var0 = global;
        var3 = var0.Object;
        var2 = var3.assign;
        var6 = var0.Object;
        var5 = var6.assign;
        var1 = {};
        var0 = arg1;
        var1 = var5.bind(var6)(var1, var0);
        var0 = {};
        var5 = 'android';
        var0.platform = var5;
        var5 = var4.profile;
        var0.js_profile = var5;
        var6 = var7.toString;
        var5 = 10;
        var5 = var6.bind(var7)(var5);
        var0.duration_ns = var5;
        var4 = var4.transaction;
        var4 = var4.active_thread_id;
        var0.active_thread_id = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var _closure1_slot7 = var4;
    var3 = function arg0, arg1() {
        _fun12218: for (var _fun12218_ip = 0;;) switch (_fun12218_ip) {
            case 0:
                var8 = arg0;
                var4 = arg1;
                var0 = global;
                var3 = var0.Object;
                var2 = var3.assign;
                var6 = var0.Object;
                var5 = var6.assign;
                var9 = var0.Object;
                var7 = var9.assign;
                var10 = var0.Object;
                var1 = var10.assign;
                var0 = {};
                var1 = var1.bind(var10)(var0, var8);
                var0 = {};
                var13 = _closure1_slot9;
                var12 = var8.profile;
                var11 = var4.profile;
                var8 = var8.transaction;
                var10 = var8.active_thread_id;
                var8 = undefined;
                var10 = var13.bind(var8)(var12, var11, var10);
                var0.profile = var10;
                var1 = var7.bind(var9)(var1, var0);
                var7 = var4.debug_meta;
                var9 = null;
                var0 = undefined;
                if (!(var9 !== var7)) {
                    _fun12218_ip = 139;
                    continue _fun12218
                }
            case 127:
                var0 = undefined;
                if (!(var0 !== var7)) {
                    _fun12218_ip = 139;
                    continue _fun12218
                }
            case 133:
                var0 = var7.images;
            case 139:
                if (var0) {
                    _fun12218_ip = 146;
                    continue _fun12218
                }
            case 142:
                var0 = {};
                _fun12218_ip = 175;
                continue _fun12218;
            case 146:
                var7 = {};
                var8 = {};
                var9 = var4.debug_meta;
                var9 = var9.images;
                var8.images = var9;
                var7.debug_meta = var8;
                var0 = var7;
            case 175:
                var1 = var5.bind(var6)(var1, var0);
                var0 = {};
                var4 = var4.measurements;
                var0.measurements = var4;
                var0 = var2.bind(var3)(var1, var0);
                return var0;
        }
    };
    var _closure1_slot8 = var3;
    var1 = function arg0, arg1, arg2() {
        _fun12219: for (var _fun12219_ip = 0;;) switch (_fun12219_ip) {
            case 0:
                var2 = arg0;
                var8 = arg1;
                var0 = var2;
                var3 = arg2;
                var _closure2_slot0 = var3;
                var3 = global;
                var7 = var3.Object;
                var6 = var7.assign;
                var10 = var3.Object;
                var9 = var10.assign;
                var5 = var8.thread_metadata;
                var4 = {};
                var5 = var9.bind(var10)(var4, var5);
                var4 = var2.thread_metadata;
                var4 = var6.bind(var7)(var5, var4);
                var2.thread_metadata = var4;
                var6 = var3.Object;
                var5 = var6.assign;
                var9 = var3.Object;
                var7 = var9.assign;
                var4 = var8.queue_metadata;
                var3 = {};
                var4 = var7.bind(var9)(var3, var4);
                var3 = var2.queue_metadata;
                var3 = var5.bind(var6)(var4, var3);
                var2.queue_metadata = var3;
                var3 = var2.frames;
                var3 = var3.length;
                var _closure2_slot1 = var3;
                var2 = var2.stacks;
                var2 = var2.length;
                var _closure2_slot2 = var2;
                var2 = var8.frames;
                if (!var2) {
                    _fun12219_ip = 249;
                    continue _fun12219
                }
            case 167:
                var2 = var8.frames;
                var4 = var2;
                var3 = var4[Symbol.iterator];
                var4 = var3().next;
                var2 = undefined;
            case 181:
                var9 = var4().value;
                var5 = var3;
                if (!(var5 !== var2)) {
                    _fun12219_ip = 249;
                    continue _fun12219
                }
            case 192: // try_start_0
                var5 = var0;
                var7 = var5.frames;
                var6 = var7.push;
                var5 = {};
                var10 = var9.function;
                var5.function = var10;
                var9 = var9.instruction_addr;
                var5.instruction_addr = var9;
                var5.platform = var2;
                var5 = var6.bind(var7)(var5);
            case 240: // try_end0
                _fun12219_ip = 181;
                continue _fun12219;
            case 242: // catch_target0
                CatchBlockStart(arg_register = 2);
                var3.return();
                throw var2;
            case 249:
                var3 = var0;
                var9 = new Array(0);
                var5 = var9.concat;
                var4 = _closure1_slot2;
                var2 = var3.stacks;
                if (var2) {
                    _fun12219_ip = 281;
                    continue _fun12219
                }
            case 277:
                var2 = new Array(0);
            case 281:
                var7 = undefined;
                var4 = var4.bind(var7)(var2);
                var10 = _closure1_slot2;
                var12 = var8.stacks;
                if (var12) {
                    _fun12219_ip = 305;
                    continue _fun12219
                }
            case 301:
                var12 = new Array(0);
            case 305:
                var11 = var12.map;
                var2 = function(arg0) { // Environment: var1
                    var2 = arg0;
                    var1 = var2.map;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure2_slot1;
                        var0 = arg0;
                        var0 = var0 + var1;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var11.bind(var12)(var2);
                var2 = var10.bind(var7)(var2);
                var2 = var5.bind(var9)(var4, var2);
                var3.stacks = var2;
                var2 = var0;
                var5 = new Array(0);
                var4 = var5.concat;
                var9 = _closure1_slot2;
                var3 = var2.samples;
                if (var3) {
                    _fun12219_ip = 366;
                    continue _fun12219
                }
            case 362:
                var3 = new Array(0);
            case 366:
                var3 = var9.bind(var7)(var3);
                var6 = _closure1_slot2;
                var10 = var8.samples;
                if (var10) {
                    _fun12219_ip = 388;
                    continue _fun12219
                }
            case 384:
                var10 = new Array(0);
            case 388:
                var9 = var10.filter;
                var8 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var1 = var0.thread_id;
                    var0 = _closure2_slot0;
                    var0 = var1 !== var0;
                    return var0;
                };
                var9 = var9.bind(var10)(var8);
                var8 = var9.map;
                var1 = function(arg0) { // Environment: var1
                    var4 = arg0;
                    var0 = global;
                    var3 = var0.Object;
                    var2 = var3.assign;
                    var5 = var0.Object;
                    var1 = var5.assign;
                    var0 = {};
                    var1 = var1.bind(var5)(var0, var4);
                    var0 = {};
                    var5 = _closure2_slot2;
                    var4 = var4.stack_id;
                    var4 = var5 + var4;
                    var0.stack_id = var4;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
                var1 = var8.bind(var9)(var1);
                var1 = var6.bind(var7)(var1);
                var1 = var4.bind(var5)(var3, var1);
                var2.samples = var1;
                return var0;
        }
    };
    var _closure1_slot9 = var1;
    var0 = global;
    var13 = var0.Object;
    var12 = var13.defineProperty;
    var8 = {};
    var9 = true;
    var8.value = var9;
    var0 = '__esModule';
    var0 = var12.bind(var13)(var2, var0, var8);
    var0 = 0;
    var12 = var11[var0];
    var8 = arg2;
    var0 = undefined;
    var8 = var8.bind(var0)(var12);
    var _closure1_slot2 = var8;
    var8 = 1;
    var8 = var11[var8];
    var8 = var10.bind(var0)(var8);
    var8 = var8.Platform;
    var8 = 1000000;
    var _closure1_slot3 = var8;
    var8 = {};
    var8.platformProfilers = var9;
    var _closure1_slot4 = var8;
    var7 = function() {
        _fun12224: for (var _fun12224_ip = 0;;) switch (_fun12224_ip) {
            case 0:
                var3 = undefined;
                var4 = undefined;
                var0 = arguments.length;
                var2 = 0;
                if (!(var0 > var2)) {
                    _fun12224_ip = 23;
                    continue _fun12224
                }
            case 15:
                var0 = arguments[var2];
                if (!(var3 === var0)) {
                    _fun12224_ip = 32;
                    continue _fun12224
                }
            case 23:
                var0 = _closure1_slot4;
                _fun12224_ip = 36;
                continue _fun12224;
            case 32:
                var0 = arguments[var2];
            case 36:
                var2 = var0.platformProfilers;
                var0 = null;
                var0 = var0 === var2;
                if (var0) {
                    _fun12224_ip = 55;
                    continue _fun12224
                }
            case 51:
                var0 = var3 === var2;
            case 55:
                if (var0) {
                    _fun12224_ip = 61;
                    continue _fun12224
                }
            case 58:
                var0 = var2;
            case 61:
                var _closure2_slot2 = var0;
                var0 = false;
                var _closure2_slot3 = var0;
                var0 = function() {
                    _fun12225: for (var _fun12225_ip = 0;;) switch (_fun12225_ip) {
                        case 0:
                            var1 = _closure2_slot0;
                            if (var1) {
                                _fun12225_ip = 57;
                                continue _fun12225
                            }
                        case 10:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 3;
                            var1 = var2[var1];
                            var2 = undefined;
                            var3 = var3.bind(var2)(var1);
                            var1 = var3.getActiveSpan;
                            var1 = var1.bind(var3)();
                            if (!var1) {
                                _fun12225_ip = 57;
                                continue _fun12225
                            }
                        case 48:
                            var0 = _closure2_slot5;
                            var0 = var0.bind(var2)(var1);
                        case 57:
                            var0 = undefined;
                            return var0;
                    }
                };
                var _closure2_slot4 = var0;
                var0 = function arg0() {
                    _fun12226: for (var _fun12226_ip = 0;;) switch (_fun12226_ip) {
                        case 0:
                            var2 = arg0;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var4 = var4.bind(var0)(var1);
                            var1 = var4.isRootSpan;
                            var1 = var1.bind(var4)(var2);
                            if (!var1) {
                                _fun12226_ip = 122;
                                continue _fun12226
                            }
                        case 42:
                            var4 = _closure2_slot9;
                            var4 = var4.bind(var0)();
                            var4 = _closure2_slot6;
                            var4 = var4.bind(var0)(var2);
                            if (!var4) {
                                _fun12226_ip = 122;
                                continue _fun12226
                            }
                        case 65:
                            var4 = global;
                            var5 = var4.setTimeout;
                            var4 = _closure2_slot9;
                            var6 = _closure1_slot0;
                            var7 = _closure1_slot1;
                            var3 = 7;
                            var3 = var7[var3];
                            var3 = var6.bind(var0)(var3);
                            var3 = var3.MAX_PROFILE_DURATION_MS;
                            var3 = var5.bind(var0)(var4, var3);
                            var _closure2_slot1 = var3;
                            var1 = _closure2_slot7;
                            var1 = var1.bind(var0)(var2);
                        case 122:
                            return var0;
                    }
                };
                var _closure2_slot5 = var0;
                var0 = function arg0() {
                    _fun12227: for (var _fun12227_ip = 0;;) switch (_fun12227_ip) {
                        case 0:
                            var2 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var4 = 3;
                            var0 = var0[var4];
                            var3 = undefined;
                            var5 = var2.bind(var3)(var0);
                            var2 = var5.spanIsSampled;
                            var0 = arg0;
                            var0 = var2.bind(var5)(var0);
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var4];
                            var2 = var5.bind(var3)(var2);
                            if (var0) {
                                _fun12227_ip = 85;
                                continue _fun12227
                            }
                        case 59:
                            var6 = var2.debug;
                            var5 = var6.log;
                            var0 = '[Profiling] Transaction is not sampled, skipping profiling';
                            var0 = var5.bind(var6)(var0);
                            var0 = false;
                            return var0;
                        case 85:
                            var0 = var2.getClient;
                            var6 = var0.bind(var2)();
                            var2 = null;
                            var0 = var2 == var6;
                            var5 = undefined;
                            if (var0) {
                                _fun12227_ip = 112;
                                continue _fun12227
                            }
                        case 106:
                            var5 = var6.getOptions;
                        case 112:
                            var0 = undefined;
                            if (!(var2 !== var5)) {
                                _fun12227_ip = 134;
                                continue _fun12227
                            }
                        case 118:
                            var0 = undefined;
                            if (!(var3 !== var5)) {
                                _fun12227_ip = 134;
                                continue _fun12227
                            }
                        case 124:
                            var2 = var5.call;
                            var0 = var2.bind(var5)(var6);
                        case 134:
                            var2 = undefined;
                            if (!var0) {
                                _fun12227_ip = 164;
                                continue _fun12227
                            }
                        case 139:
                            var5 = var0.profilesSampleRate;
                            var6 = 'number';
                            var5 = typeof var5;
                            var2 = undefined;
                            if (!(var6 === var5)) {
                                _fun12227_ip = 164;
                                continue _fun12227
                            }
                        case 158:
                            var2 = var0.profilesSampleRate;
                        case 164:
                            if (!(var3 !== var2)) {
                                _fun12227_ip = 239;
                                continue _fun12227
                            }
                        case 168:
                            var0 = global;
                            var5 = var0.Math;
                            var0 = var5.random;
                            var0 = var0.bind(var5)();
                            var2 = var0 > var2;
                            var0 = !var2;
                            if (!var2) {
                                _fun12227_ip = 237;
                                continue _fun12227
                            }
                        case 196:
                            var5 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var2 = var2[var4];
                            var2 = var5.bind(var3)(var2);
                            var6 = var2.debug;
                            var5 = var6.log;
                            var2 = '[Profiling] Skip profiling transaction due to sampling.';
                            var2 = var5.bind(var6)(var2);
                            var0 = false;
                        case 237:
                            _fun12227_ip = 280;
                            continue _fun12227;
                        case 239:
                            var2 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var4];
                            var1 = var2.bind(var3)(var1);
                            var3 = var1.debug;
                            var2 = var3.log;
                            var1 = '[Profiling] Profiling disabled, enable it by setting `profilesSampleRate` option to SDK init call.';
                            var1 = var2.bind(var3)(var1);
                            var0 = false;
                        case 280:
                            return var0;
                    }
                };
                var _closure2_slot6 = var0;
                var0 = function arg0() {
                    _fun12228: for (var _fun12228_ip = 0;;) switch (_fun12228_ip) {
                        case 0:
                            var8 = arg0;
                            var4 = _closure1_slot5;
                            var3 = _closure2_slot2;
                            var0 = undefined;
                            var6 = var4.bind(var0)(var3);
                            if (!var6) {
                                _fun12228_ip = 165;
                                continue _fun12228
                            }
                        case 30:
                            var5 = {};
                            var3 = var8.spanContext;
                            var3 = var3.bind(var8)();
                            var3 = var3.spanId;
                            var5.span_id = var3;
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 3;
                            var7 = var4[var2];
                            var9 = var3.bind(var0)(var7);
                            var7 = var9.uuid4;
                            var7 = var7.bind(var9)();
                            var5.profile_id = var7;
                            var5.startTimestampNs = var6;
                            var _closure2_slot0 = var5;
                            var7 = var8.setAttribute;
                            var5 = _closure2_slot0;
                            var6 = var5.profile_id;
                            var5 = 'profile_id';
                            var5 = var7.bind(var8)(var5, var6);
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var4 = var2.debug;
                            var3 = var4.log;
                            var1 = _closure2_slot0;
                            var2 = var1.profile_id;
                            var1 = '[Profiling] started profiling: ';
                            var1 = var3.bind(var4)(var1, var2);
                        case 165:
                            return var0;
                    }
                };
                var _closure2_slot7 = var0;
                var0 = function arg0() {
                    _fun12229: for (var _fun12229_ip = 0;;) switch (_fun12229_ip) {
                        case 0:
                            var6 = arg0;
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 6;
                            var1 = var1[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var1);
                            var1 = var3.isRootSpan;
                            var1 = var1.bind(var3)(var6);
                            if (!var1) {
                                _fun12229_ip = 219;
                                continue _fun12229
                            }
                        case 45:
                            var1 = var6.spanContext;
                            var1 = var1.bind(var6)();
                            var4 = var1.spanId;
                            var3 = _closure2_slot0;
                            var5 = null;
                            var7 = var5 == var3;
                            var3 = undefined;
                            if (var7) {
                                _fun12229_ip = 89;
                                continue _fun12229
                            }
                        case 79:
                            var7 = _closure2_slot0;
                            var3 = var7.span_id;
                        case 89:
                            if (!(var4 !== var3)) {
                                _fun12229_ip = 211;
                                continue _fun12229
                            }
                        case 93:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var2 = 3;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var4 = var2.debug;
                            var3 = var4.log;
                            var2 = var6.spanContext;
                            var2 = var2.bind(var6)();
                            var9 = var2.spanId;
                            var2 = _closure2_slot0;
                            var2 = var5 == var2;
                            var8 = undefined;
                            if (var2) {
                                _fun12229_ip = 163;
                                continue _fun12229
                            }
                        case 153:
                            var2 = _closure2_slot0;
                            var8 = var2.span_id;
                        case 163:
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var7 = var2.concat;
                            var14 = '[Profiling] Span (';
                            var12 = ') ended is not the currently profiled span (';
                            var10 = '). Not stopping profiling.';
                            var13 = var9;
                            var11 = var8;
                            var2 = var14[var7](var13, var12, var11, var10, var9);
                            var2 = var3.bind(var4)(var2);
                            _fun12229_ip = 219;
                            continue _fun12229;
                        case 211:
                            var1 = _closure2_slot9;
                            var1 = var1.bind(var0)();
                        case 219:
                            return var0;
                    }
                };
                var _closure2_slot8 = var0;
                var0 = function() {
                    _fun12230: for (var _fun12230_ip = 0;;) switch (_fun12230_ip) {
                        case 0:
                            var2 = _closure2_slot11;
                            var0 = undefined;
                            var2 = var2.bind(var0)();
                            var2 = _closure2_slot0;
                            if (!(var0 !== var2)) {
                                _fun12230_ip = 185;
                                continue _fun12230
                            }
                        case 24:
                            var4 = _closure1_slot6;
                            var3 = _closure2_slot0;
                            var3 = var3.startTimestampNs;
                            var7 = var4.bind(var0)(var3);
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            if (var7) {
                                _fun12230_ip = 97;
                                continue _fun12230
                            }
                        case 57:
                            var2 = 3;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var6 = var2.debug;
                            var5 = var6.warn;
                            var2 = '[Profiling] Stop failed. Cleaning up...';
                            var2 = var5.bind(var6)(var2);
                            _closure2_slot0 = var0;
                            return var0;
                        case 97:
                            var2 = 4;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var6 = var2.PROFILE_QUEUE;
                            var5 = var6.add;
                            var2 = _closure2_slot0;
                            var2 = var2.profile_id;
                            var2 = var5.bind(var6)(var2, var7);
                            var2 = 3;
                            var2 = var4[var2];
                            var2 = var3.bind(var0)(var2);
                            var5 = var2.debug;
                            var4 = var5.log;
                            var2 = _closure2_slot0;
                            var3 = var2.profile_id;
                            var2 = '[Profiling] finished profiling: ';
                            var2 = var4.bind(var5)(var2, var3);
                            _closure2_slot0 = var0;
                        case 185:
                            return var0;
                    }
                };
                var _closure2_slot9 = var0;
                var0 = function arg0() {
                    _fun12231: for (var _fun12231_ip = 0;;) switch (_fun12231_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = null;
                            var4 = var0 == var2;
                            var3 = undefined;
                            var1 = undefined;
                            if (var4) {
                                _fun12231_ip = 22;
                                continue _fun12231
                            }
                        case 16:
                            var1 = var2.contexts;
                        case 22:
                            var4 = undefined;
                            if (!(var0 !== var1)) {
                                _fun12231_ip = 40;
                                continue _fun12231
                            }
                        case 28:
                            var4 = undefined;
                            if (!(var3 !== var1)) {
                                _fun12231_ip = 40;
                                continue _fun12231
                            }
                        case 34:
                            var4 = var1.trace;
                        case 40:
                            var1 = undefined;
                            if (!(var0 !== var4)) {
                                _fun12231_ip = 57;
                                continue _fun12231
                            }
                        case 46:
                            var1 = undefined;
                            if (!(var3 !== var4)) {
                                _fun12231_ip = 57;
                                continue _fun12231
                            }
                        case 52:
                            var1 = var4.data;
                        case 57:
                            var9 = undefined;
                            if (!(var0 !== var1)) {
                                _fun12231_ip = 75;
                                continue _fun12231
                            }
                        case 63:
                            var9 = undefined;
                            if (!(var3 !== var1)) {
                                _fun12231_ip = 75;
                                continue _fun12231
                            }
                        case 69:
                            var9 = var1.profile_id;
                        case 75:
                            var4 = 'string';
                            var1 = typeof var9;
                            if (!(var4 === var1)) {
                                _fun12231_ip = 418;
                                continue _fun12231
                            }
                        case 89:
                            var1 = var0 == var2;
                            var4 = undefined;
                            if (var1) {
                                _fun12231_ip = 104;
                                continue _fun12231
                            }
                        case 98:
                            var4 = var2.contexts;
                        case 104:
                            var1 = undefined;
                            if (!(var0 !== var4)) {
                                _fun12231_ip = 122;
                                continue _fun12231
                            }
                        case 110:
                            var1 = undefined;
                            if (!(var3 !== var4)) {
                                _fun12231_ip = 122;
                                continue _fun12231
                            }
                        case 116:
                            var1 = var4.trace;
                        case 122:
                            var4 = undefined;
                            if (!(var0 !== var1)) {
                                _fun12231_ip = 139;
                                continue _fun12231
                            }
                        case 128:
                            var4 = undefined;
                            if (!(var3 !== var1)) {
                                _fun12231_ip = 139;
                                continue _fun12231
                            }
                        case 134:
                            var4 = var1.data;
                        case 139:
                            var1 = undefined;
                            if (!(var0 !== var4)) {
                                _fun12231_ip = 157;
                                continue _fun12231
                            }
                        case 145:
                            var1 = undefined;
                            if (!(var1 !== var4)) {
                                _fun12231_ip = 157;
                                continue _fun12231
                            }
                        case 151:
                            var1 = var4.profile_id;
                        case 157:
                            if (!var1) {
                                _fun12231_ip = 182;
                                continue _fun12231
                            }
                        case 160:
                            var1 = var2.contexts;
                            var1 = var1.trace;
                            var1 = var1.data;
                            var1 = delete var1.profile_id;
                        case 182:
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var4 = 4;
                            var7 = var6[var4];
                            var7 = var5.bind(var3)(var7);
                            var8 = var7.PROFILE_QUEUE;
                            var7 = var8.get;
                            var7 = var7.bind(var8)(var9);
                            var4 = var6[var4];
                            var4 = var5.bind(var3)(var4);
                            var5 = var4.PROFILE_QUEUE;
                            var4 = var5.delete;
                            var4 = var4.bind(var5)(var9);
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            if (var7) {
                                _fun12231_ip = 325;
                                continue _fun12231
                            }
                        case 257:
                            var1 = 3;
                            var1 = var6[var1];
                            var1 = var5.bind(var3)(var1);
                            var8 = var1.debug;
                            var4 = var8.log;
                            var12 = var2.event_id;
                            var1 = global;
                            var1 = var1.HermesInternal;
                            var11 = var1.concat;
                            var10 = '[Profiling] cannot find profile ';
                            var1 = ' for transaction ';
                            var1 = var11.bind(var10)(var9, var1, var12);
                            var1 = var4.bind(var8)(var1);
                            return var0;
                        case 325:
                            var1 = 5;
                            var1 = var6[var1];
                            var4 = var5.bind(var3)(var1);
                            var1 = var4.enrichCombinedProfileWithEventContext;
                            var1 = var1.bind(var4)(var9, var7, var2);
                            var4 = 3;
                            var4 = var6[var4];
                            var4 = var5.bind(var3)(var4);
                            var5 = var4.debug;
                            var4 = var5.log;
                            var8 = var2.event_id;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var7 = var2.concat;
                            var6 = '[Profiling] Created profile ';
                            var2 = ' for transaction ';
                            var2 = var7.bind(var6)(var9, var2, var8);
                            var2 = var4.bind(var5)(var2);
                            return var1;
                        case 418:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var1 = 3;
                            var1 = var4[var1];
                            var1 = var2.bind(var3)(var1);
                            var3 = var1.debug;
                            var2 = var3.log;
                            var1 = '[Profiling] cannot find profile for a transaction without a profile context';
                            var1 = var2.bind(var3)(var1);
                            return var0;
                    }
                };
                var _closure2_slot10 = var0;
                var0 = function() {
                    _fun12232: for (var _fun12232_ip = 0;;) switch (_fun12232_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = undefined;
                            if (!(var0 !== var2)) {
                                _fun12232_ip = 30;
                                continue _fun12232
                            }
                        case 13:
                            var2 = global;
                            var3 = var2.clearTimeout;
                            var2 = _closure2_slot1;
                            var2 = var3.bind(var0)(var2);
                        case 30:
                            _closure2_slot1 = var0;
                            return var0;
                    }
                };
                var _closure2_slot11 = var0;
                var0 = {};
                var2 = 'HermesProfiling';
                var0.name = var2;
                var1 = function() {
                    _fun12233: for (var _fun12233_ip = 0;;) switch (_fun12233_ip) {
                        case 0:
                            var1 = _closure2_slot3;
                            if (var1) {
                                _fun12233_ip = 214;
                                continue _fun12233
                            }
                        case 13:
                            var1 = true;
                            _closure2_slot3 = var1;
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var1 = 2;
                            var1 = var2[var1];
                            var2 = undefined;
                            var4 = var4.bind(var2)(var1);
                            var1 = var4.isHermesEnabled;
                            var1 = var1.bind(var4)();
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            var3 = 3;
                            var3 = var5[var3];
                            var3 = var4.bind(var2)(var3);
                            if (var1) {
                                _fun12233_ip = 101;
                                continue _fun12233
                            }
                        case 77:
                            var5 = var3.debug;
                            var4 = var5.log;
                            var1 = '[Profiling] Hermes is not enabled, not adding profiling integration.';
                            var1 = var4.bind(var5)(var1);
                            _fun12233_ip = 214;
                            continue _fun12233;
                        case 101:
                            var1 = var3.getClient;
                            var3 = var1.bind(var3)();
                            var1 = var3;
                            if (!var1) {
                                _fun12233_ip = 134;
                                continue _fun12233
                            }
                        case 117:
                            var4 = var3.on;
                            var5 = 'function';
                            var4 = typeof var4;
                            var1 = var5 === var4;
                        case 134:
                            if (!var1) {
                                _fun12233_ip = 214;
                                continue _fun12233
                            }
                        case 137:
                            var1 = _closure2_slot4;
                            var1 = var1.bind(var2)();
                            var4 = var3.on;
                            var2 = _closure2_slot5;
                            var1 = 'spanStart';
                            var1 = var4.bind(var3)(var1, var2);
                            var2 = var3.on;
                            var1 = _closure2_slot8;
                            var0 = 'spanEnd';
                            var0 = var2.bind(var3)(var0, var1);
                            var2 = var3.on;
                            var1 = 'beforeEnvelope';
                            var0 = function(arg0) { // Environment: var0
                                _fun12234: for (var _fun12234_ip = 0;;) switch (_fun12234_ip) {
                                    case 0:
                                        var4 = arg0;
                                        var0 = undefined;
                                        var1 = undefined;
                                        var8 = undefined;
                                        var5 = _closure1_slot0;
                                        var6 = _closure1_slot1;
                                        var3 = 4;
                                        var3 = var6[var3];
                                        var3 = var5.bind(var0)(var3);
                                        var5 = var3.PROFILE_QUEUE;
                                        var3 = var5.size;
                                        var3 = var3.bind(var5)();
                                        if (!var3) {
                                            _fun12234_ip = 229;
                                            continue _fun12234
                                        }
                                    case 53:
                                        var6 = _closure1_slot0;
                                        var3 = _closure1_slot1;
                                        var5 = 5;
                                        var3 = var3[var5];
                                        var6 = var6.bind(var0)(var3);
                                        var3 = var6.findProfiledTransactionsFromEnvelope;
                                        var3 = var3.bind(var6)(var4);
                                        var6 = var3.length;
                                        if (var6) {
                                            _fun12234_ip = 136;
                                            continue _fun12234
                                        }
                                    case 92:
                                        var7 = _closure1_slot0;
                                        var9 = _closure1_slot1;
                                        var6 = 3;
                                        var6 = var9[var6];
                                        var6 = var7.bind(var0)(var6);
                                        var9 = var6.debug;
                                        var7 = var9.log;
                                        var6 = '[Profiling] no profiled transactions found in envelope';
                                        var6 = var7.bind(var9)(var6);
                                        _fun12234_ip = 229;
                                        continue _fun12234;
                                    case 136:
                                        var1 = new Array(0);
                                        var7 = var3;
                                        var6 = var7[Symbol.iterator];
                                        var7 = var6().next;
                                    case 149:
                                        var10 = var7().value;
                                        var9 = var6;
                                        if (!(var9 !== var0)) {
                                            _fun12234_ip = 200;
                                            continue _fun12234
                                        }
                                    case 160: // try_start_0
                                        var9 = _closure2_slot10;
                                        var9 = var9.bind(var0)(var10);
                                        var8 = var9;
                                        if (!var9) {
                                            _fun12234_ip = 191;
                                            continue _fun12234
                                        }
                                    case 175:
                                        var11 = var1;
                                        var10 = var11.push;
                                        var9 = var8;
                                        var9 = var10.bind(var11)(var9);
                                    case 191: // try_end0
                                        _fun12234_ip = 149;
                                        continue _fun12234;
                                    case 193: // catch_target0
                                        CatchBlockStart(arg_register = 3);
                                        var6.return();
                                        throw var3;
                                    case 200:
                                        var3 = _closure1_slot0;
                                        var2 = _closure1_slot1;
                                        var2 = var2[var5];
                                        var3 = var3.bind(var0)(var2);
                                        var2 = var3.addProfilesToEnvelope;
                                        var1 = var2.bind(var3)(var4, var1);
                                    case 229:
                                        return var0;
                                }
                            };
                            var0 = var2.bind(var3)(var1, var0);
                        case 214:
                            var0 = undefined;
                            return var0;
                    }
                };
                var0.setupOnce = var1;
                return var0;
        }
    };
    var2.hermesProfilingIntegration = var7;
    var2.startProfiling = var6;
    var2.stopProfiling = var5;
    var2.createAndroidWithHermesProfile = var4;
    var2.addNativeProfileToHermesProfile = var3;
    var2.addNativeThreadCpuProfileToHermes = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 27, 999, 817, 1113, 1114, 1118, 1119, 998, 1120]);