// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun12054: for (var _fun12054_ip = 0;;) switch (_fun12054_ip) {
        case 0:
            var12 = require;
            var2 = exports;
            var13 = dependencyMap;
            var _closure1_slot0 = var12;
            var _closure1_slot1 = var13;
            var4 = function arg0() {
                _fun12055: for (var _fun12055_ip = 0;;) switch (_fun12055_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = 'thread_metadata';
                        var1 = var0 in var3;
                        var0 = var3;
                        if (var1) {
                            _fun12055_ip = 31;
                            continue _fun12055
                        }
                    case 17:
                        var2 = _closure1_slot16;
                        var1 = undefined;
                        var0 = var2.bind(var1)(var3);
                    case 31:
                        return var0;
                }
            };
            var _closure1_slot14 = var4;
            var5 = function arg0, arg1, arg2, arg3() {
                _fun12056: for (var _fun12056_ip = 0;;) switch (_fun12056_ip) {
                    case 0:
                        var3 = arg1;
                        var4 = arg2;
                        var7 = arg3;
                        var1 = var7.type;
                        var0 = 'transaction';
                        if (!(var0 === var1)) {
                            _fun12056_ip = 879;
                            continue _fun12056
                        }
                    case 25:
                        var2 = null;
                        if (!(var2 != var4)) {
                            _fun12056_ip = 820;
                            continue _fun12056
                        }
                    case 34:
                        var1 = var7.contexts;
                        var5 = var2 == var1;
                        var10 = undefined;
                        var0 = undefined;
                        if (var5) {
                            _fun12056_ip = 72;
                            continue _fun12056
                        }
                    case 51:
                        var1 = var1.trace;
                        var2 = var2 == var1;
                        var0 = undefined;
                        if (var2) {
                            _fun12056_ip = 72;
                            continue _fun12056
                        }
                    case 66:
                        var0 = var1.trace_id;
                    case 72:
                        var2 = typeof var0;
                        var1 = 'string';
                        var5 = var1 === var2;
                        if (!var5) {
                            _fun12056_ip = 98;
                            continue _fun12056
                        }
                    case 86:
                        var8 = var0.length;
                        var6 = 32;
                        var5 = var6 !== var8;
                    case 98:
                        if (!var5) {
                            _fun12056_ip = 130;
                            continue _fun12056
                        }
                    case 101:
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot1;
                        var6 = 3;
                        var6 = var9[var6];
                        var6 = var8.bind(var10)(var6);
                        var5 = var6.DEBUG_BUILD;
                    case 130:
                        if (!var5) {
                            _fun12056_ip = 203;
                            continue _fun12056
                        }
                    case 133:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var5 = 1;
                        var5 = var8[var5];
                        var5 = var6.bind(var10)(var5);
                        var8 = var5.debug;
                        var6 = var8.log;
                        var5 = global;
                        var5 = var5.HermesInternal;
                        var11 = var5.concat;
                        var9 = '[Profiling] Invalid traceId: ';
                        var5 = ' on profiled event';
                        var5 = var11.bind(var9)(var0, var5);
                        var5 = var6.bind(var8)(var5);
                    case 203:
                        var9 = '';
                        var6 = var9;
                        if (!(var1 === var2)) {
                            _fun12056_ip = 217;
                            continue _fun12056
                        }
                    case 214:
                        var6 = var0;
                    case 217:
                        var0 = _closure1_slot14;
                        var2 = var0.bind(var10)(var4);
                        if (var3) {
                            _fun12056_ip = 310;
                            continue _fun12056
                        }
                    case 232:
                        var0 = var7.start_timestamp;
                        var1 = 'number';
                        var0 = typeof var0;
                        if (!(var1 !== var0)) {
                            _fun12056_ip = 291;
                            continue _fun12056
                        }
                    case 249:
                        var1 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var0 = 1;
                        var0 = var8[var0];
                        var1 = var1.bind(var10)(var0);
                        var0 = var1.timestampInSeconds;
                        var1 = var0.bind(var1)();
                        var0 = 1000;
                        var0 = var0 * var1;
                        _fun12056_ip = 307;
                        continue _fun12056;
                    case 291:
                        var8 = var7.start_timestamp;
                        var1 = 1000;
                        var0 = var1 * var8;
                    case 307:
                        var3 = var0;
                    case 310:
                        var0 = var7.timestamp;
                        var1 = 'number';
                        var0 = typeof var0;
                        if (!(var1 !== var0)) {
                            _fun12056_ip = 369;
                            continue _fun12056
                        }
                    case 327:
                        var1 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var0 = 1;
                        var0 = var8[var0];
                        var1 = var1.bind(var10)(var0);
                        var0 = var1.timestampInSeconds;
                        var1 = var0.bind(var1)();
                        var0 = 1000;
                        var1 = var0 * var1;
                        _fun12056_ip = 385;
                        continue _fun12056;
                    case 369:
                        var8 = var7.timestamp;
                        var0 = 1000;
                        var1 = var0 * var8;
                    case 385:
                        var0 = {};
                        var8 = arg0;
                        var0.event_id = var8;
                        var8 = global;
                        var8 = var8.Date;
                        var11 = var8.prototype;
                        var11 = Object.create(var11, {
                            constructor: {
                                value: var8
                            }
                        });
                        var17 = var11;
                        var16 = var3;
                        var8 = new var17[var8](var16, var15);
                        var11 = var8 instanceof Object ? var8 : var11;
                        var8 = var11.toISOString;
                        var8 = var8.bind(var11)();
                        var0.timestamp = var8;
                        var11 = 'javascript';
                        var0.platform = var11;
                        var8 = '1';
                        var0.version = var8;
                        var8 = var7.release;
                        if (var8) {
                            _fun12056_ip = 473;
                            continue _fun12056
                        }
                    case 470:
                        var8 = var9;
                    case 473:
                        var0.release = var8;
                        var8 = var7.environment;
                        if (var8) {
                            _fun12056_ip = 513;
                            continue _fun12056
                        }
                    case 487:
                        var13 = _closure1_slot0;
                        var14 = _closure1_slot1;
                        var12 = 1;
                        var12 = var14[var12];
                        var12 = var13.bind(var10)(var12);
                        var8 = var12.DEFAULT_ENVIRONMENT;
                    case 513:
                        var0.environment = var8;
                        var8 = {};
                        var8.name = var11;
                        var12 = _closure1_slot0;
                        var13 = _closure1_slot1;
                        var11 = 2;
                        var11 = var13[var11];
                        var11 = var12.bind(var10)(var11);
                        var11 = var11.WINDOW;
                        var11 = var11.navigator;
                        var11 = var11.userAgent;
                        var8.version = var11;
                        var0.runtime = var8;
                        var8 = {};
                        var11 = _closure1_slot6;
                        var8.name = var11;
                        var11 = _closure1_slot7;
                        var8.version = var11;
                        var11 = _closure1_slot9;
                        var8.build_number = var11;
                        var0.os = var8;
                        var8 = {};
                        var11 = _closure1_slot11;
                        var8.locale = var11;
                        var11 = _closure1_slot10;
                        var8.model = var11;
                        var11 = _closure1_slot9;
                        var8.manufacturer = var11;
                        var11 = _closure1_slot8;
                        var8.architecture = var11;
                        var11 = false;
                        var8.is_emulator = var11;
                        var0.device = var8;
                        var8 = {};
                        var12 = _closure1_slot17;
                        var11 = var4.resources;
                        var11 = var12.bind(var10)(var11);
                        var8.images = var11;
                        var0.debug_meta = var8;
                        var0.profile = var2;
                        var2 = {};
                        var8 = var7.transaction;
                        if (var8) {
                            _fun12056_ip = 701;
                            continue _fun12056
                        }
                    case 698:
                        var8 = var9;
                    case 701:
                        var2.name = var8;
                        var7 = var7.event_id;
                        if (var7) {
                            _fun12056_ip = 744;
                            continue _fun12056
                        }
                    case 714:
                        var9 = _closure1_slot0;
                        var11 = _closure1_slot1;
                        var8 = 1;
                        var8 = var11[var8];
                        var9 = var9.bind(var10)(var8);
                        var8 = var9.uuid4;
                        var7 = var8.bind(var9)();
                    case 744:
                        var2.id = var7;
                        var2.trace_id = var6;
                        var5 = _closure1_slot4;
                        var2.active_thread_id = var5;
                        var5 = '0';
                        var2.relative_start_ns = var5;
                        var3 = var1 - var3;
                        var1 = 1000000;
                        var5 = var1 * var3;
                        var3 = var5.toFixed;
                        var1 = 0;
                        var1 = var3.bind(var5)(var1);
                        var2.relative_end_ns = var1;
                        var1 = new Array(1);
                        var1[0] = var2;
                        var0.transactions = var1;
                        return var0;
                    case 820:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var0.HermesInternal;
                        var3 = var0.concat;
                        var1 = 'Cannot construct profiling event envelope without a valid profile. Got ';
                        var0 = ' instead.';
                        var16 = var3.bind(var1)(var4, var0);
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var17 = var1;
                        var0 = new var17[var2](var16, var15);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                    case 879:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var2.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var2
                            }
                        });
                        var16 = 'Profiling events may only be attached to transactions, this should never occur.';
                        var17 = var1;
                        var0 = new var17[var2](var16, var15);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var _closure1_slot15 = var5;
            var6 = function arg0() {
                _fun12057: for (var _fun12057_ip = 0;;) switch (_fun12057_ip) {
                    case 0:
                        var2 = arg0;
                        var _closure2_slot0 = var2;
                        var6 = 0;
                        var _closure2_slot2 = var6;
                        var0 = {};
                        var3 = new Array(0);
                        var0.samples = var3;
                        var3 = new Array(0);
                        var0.stacks = var3;
                        var3 = new Array(0);
                        var0.frames = var3;
                        var9 = _closure1_slot2;
                        var8 = _closure1_slot4;
                        var7 = {};
                        var4 = _closure1_slot5;
                        var7.name = var4;
                        var5 = undefined;
                        var4 = {};
                        var4 = var9.bind(var5)(var4, var8, var7);
                        var0.thread_metadata = var4;
                        var _closure2_slot3 = var0;
                        var4 = var2.samples;
                        var4 = var4[var6];
                        if (var4) {
                            _fun12057_ip = 100;
                            continue _fun12057
                        }
                    case 98:
                        return var0;
                    case 100:
                        var4 = var4.timestamp;
                        var _closure2_slot4 = var4;
                        var4 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var3 = 1;
                        var3 = var7[var3];
                        var4 = var4.bind(var5)(var3);
                        var3 = var4.browserPerformanceTimeOrigin;
                        var3 = var3.bind(var4)();
                        var5 = global;
                        var4 = var5.performance;
                        var4 = var4.timeOrigin;
                        var7 = 'number';
                        var4 = typeof var4;
                        if (!(var7 !== var4)) {
                            _fun12057_ip = 175;
                            continue _fun12057
                        }
                    case 165:
                        var4 = var3;
                        if (var3) {
                            _fun12057_ip = 173;
                            continue _fun12057
                        }
                    case 171:
                        var4 = 0;
                    case 173:
                        _fun12057_ip = 187;
                        continue _fun12057;
                    case 175:
                        var5 = var5.performance;
                        var4 = var5.timeOrigin;
                    case 187:
                        if (var3) {
                            _fun12057_ip = 193;
                            continue _fun12057
                        }
                    case 190:
                        var3 = var4;
                    case 193:
                        var3 = var4 - var3;
                        var _closure2_slot5 = var3;
                        var3 = var2.samples;
                        var2 = var3.forEach;
                        var1 = function(arg0, arg1) { // Environment: var1
                            _fun12058: for (var _fun12058_ip = 0;;) switch (_fun12058_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = arg1;
                                    var0 = var3.stackId;
                                    var1 = undefined;
                                    if (!(var1 !== var0)) {
                                        _fun12058_ip = 374;
                                        continue _fun12058
                                    }
                                case 21:
                                    var0 = _closure2_slot0;
                                    var5 = var0.stacks;
                                    var0 = var3.stackId;
                                    var5 = var5[var0];
                                    var8 = new Array(0);
                                    var0 = 'number';
                                    if (!var5) {
                                        _fun12058_ip = 262;
                                        continue _fun12058
                                    }
                                case 58:
                                    var7 = var8.push;
                                    var6 = var5.frameId;
                                    var6 = var7.bind(var8)(var6);
                                    var6 = _closure2_slot0;
                                    var7 = var6.frames;
                                    var6 = var5.frameId;
                                    var10 = var7[var6];
                                    var6 = var10;
                                    if (!var6) {
                                        _fun12058_ip = 124;
                                        continue _fun12058
                                    }
                                case 100:
                                    var7 = _closure2_slot3;
                                    var9 = var7.frames;
                                    var7 = var5.frameId;
                                    var7 = var9[var7];
                                    var6 = var1 === var7;
                                case 124:
                                    if (!var6) {
                                        _fun12058_ip = 221;
                                        continue _fun12058
                                    }
                                case 127:
                                    var6 = _closure2_slot3;
                                    var9 = var6.frames;
                                    var7 = var5.frameId;
                                    var6 = {};
                                    var11 = var10.name;
                                    var6.function = var11;
                                    var11 = var10.resourceId;
                                    var12 = typeof var11;
                                    var11 = undefined;
                                    if (!(var0 === var12)) {
                                        _fun12058_ip = 190;
                                        continue _fun12058
                                    }
                                case 170:
                                    var12 = _closure2_slot0;
                                    var13 = var12.resources;
                                    var12 = var10.resourceId;
                                    var11 = var13[var12];
                                case 190:
                                    var6.abs_path = var11;
                                    var11 = var10.line;
                                    var6.lineno = var11;
                                    var10 = var10.column;
                                    var6.colno = var10;
                                    var9[var7] = var6;
                                case 221:
                                    var7 = var5.parentId;
                                    var6 = undefined;
                                    if (!(var6 !== var7)) {
                                        _fun12058_ip = 253;
                                        continue _fun12058
                                    }
                                case 233:
                                    var7 = _closure2_slot0;
                                    var9 = var7.stacks;
                                    var7 = var5.parentId;
                                    var6 = var9[var7];
                                case 253:
                                    var5 = var6;
                                    if (var5) {
                                        _fun12058_ip = 58;
                                        continue _fun12058
                                    }
                                case 262:
                                    var5 = {};
                                    var6 = var3.timestamp;
                                    var0 = _closure2_slot5;
                                    var6 = var6 + var0;
                                    var0 = _closure2_slot4;
                                    var7 = var6 - var0;
                                    var6 = _closure1_slot3;
                                    var9 = var7 * var6;
                                    var7 = var9.toFixed;
                                    var6 = 0;
                                    var6 = var7.bind(var9)(var6);
                                    var5.elapsed_since_start_ns = var6;
                                    var6 = _closure2_slot2;
                                    var5.stack_id = var6;
                                    var0 = _closure1_slot4;
                                    var5.thread_id = var0;
                                    var0 = _closure2_slot3;
                                    var7 = var0.stacks;
                                    var6 = _closure2_slot2;
                                    var7[var6] = var8;
                                    var0 = var0.samples;
                                    var0[var2] = var5;
                                    var0 = _closure2_slot2;
                                    var0 = var0 + 1;
                                    _closure2_slot2 = var0;
                                    return var1;
                                case 374:
                                    var0 = _closure2_slot1;
                                    if (!(var1 === var0)) {
                                        _fun12058_ip = 426;
                                        continue _fun12058
                                    }
                                case 385:
                                    var0 = _closure2_slot2;
                                    var _closure2_slot1 = var0;
                                    var0 = _closure2_slot3;
                                    var5 = var0.stacks;
                                    var1 = _closure2_slot1;
                                    var0 = new Array(0);
                                    var5[var1] = var0;
                                    var0 = _closure2_slot2;
                                    var0 = var0 + 1;
                                    _closure2_slot2 = var0;
                                case 426:
                                    var0 = _closure2_slot3;
                                    var1 = var0.samples;
                                    var0 = {};
                                    var5 = var3.timestamp;
                                    var3 = _closure2_slot5;
                                    var5 = var5 + var3;
                                    var3 = _closure2_slot4;
                                    var6 = var5 - var3;
                                    var5 = _closure1_slot3;
                                    var7 = var6 * var5;
                                    var6 = var7.toFixed;
                                    var5 = 0;
                                    var5 = var6.bind(var7)(var5);
                                    var0.elapsed_since_start_ns = var5;
                                    var4 = _closure2_slot1;
                                    var0.stack_id = var4;
                                    var3 = _closure1_slot4;
                                    var0.thread_id = var3;
                                    var1[var2] = var0;
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var _closure1_slot16 = var6;
            var7 = function arg0() {
                _fun12059: for (var _fun12059_ip = 0;;) switch (_fun12059_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var5 = 1;
                        var0 = var0[var5];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var0);
                        var0 = var2.getClient;
                        var6 = var0.bind(var2)();
                        var2 = null;
                        var4 = var2 == var6;
                        var0 = undefined;
                        if (var4) {
                            _fun12059_ip = 56;
                            continue _fun12059
                        }
                    case 46:
                        var4 = var6.getOptions;
                        var0 = var4.bind(var6)();
                    case 56:
                        var2 = var2 == var0;
                        var4 = undefined;
                        if (var2) {
                            _fun12059_ip = 71;
                            continue _fun12059
                        }
                    case 65:
                        var4 = var0.stackParser;
                    case 71:
                        if (var4) {
                            _fun12059_ip = 80;
                            continue _fun12059
                        }
                    case 74:
                        var0 = new Array(0);
                        _fun12059_ip = 112;
                        continue _fun12059;
                    case 80:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var5];
                        var3 = var2.bind(var3)(var1);
                        var2 = var3.getDebugImagesForResources;
                        var1 = arg0;
                        var0 = var2.bind(var3)(var4, var1);
                    case 112:
                        return var0;
                }
            };
            var _closure1_slot17 = var7;
            var3 = function arg0() {
                _fun12060: for (var _fun12060_ip = 0;;) switch (_fun12060_ip) {
                    case 0:
                        var8 = arg0;
                        var7 = typeof var8;
                        var0 = 'number';
                        if (!(var0 !== var7)) {
                            _fun12060_ip = 25;
                            continue _fun12060
                        }
                    case 14:
                        var1 = 'boolean';
                        if (!(var1 === var7)) {
                            _fun12060_ip = 204;
                            continue _fun12060
                        }
                    case 25:
                        if (!(var0 === var7)) {
                            _fun12060_ip = 50;
                            continue _fun12060
                        }
                    case 29:
                        var0 = global;
                        var1 = var0.isNaN;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var8);
                        if (var0) {
                            _fun12060_ip = 204;
                            continue _fun12060
                        }
                    case 50:
                        var0 = true;
                        var0 = var0 === var8;
                        if (var0) {
                            _fun12060_ip = 65;
                            continue _fun12060
                        }
                    case 59:
                        var1 = false;
                        var0 = var1 === var8;
                    case 65:
                        if (var0) {
                            _fun12060_ip = 199;
                            continue _fun12060
                        }
                    case 71:
                        var1 = 0;
                        var2 = var8 < var1;
                        if (var2) {
                            _fun12060_ip = 87;
                            continue _fun12060
                        }
                    case 80:
                        var1 = 1;
                        var2 = var8 > var1;
                    case 87:
                        var1 = !var2;
                        if (!var2) {
                            _fun12060_ip = 196;
                            continue _fun12060
                        }
                    case 93:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 3;
                        var2 = var5[var2];
                        var5 = undefined;
                        var2 = var4.bind(var5)(var2);
                        var4 = var2.DEBUG_BUILD;
                        var1 = false;
                        if (!var4) {
                            _fun12060_ip = 196;
                            continue _fun12060
                        }
                    case 129:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var3 = 1;
                        var3 = var6[var3];
                        var3 = var4.bind(var5)(var3);
                        var5 = var3.debug;
                        var4 = var5.warn;
                        var3 = global;
                        var3 = var3.HermesInternal;
                        var9 = var3.concat;
                        var6 = '[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ';
                        var3 = '.';
                        var3 = var9.bind(var6)(var8, var3);
                        var3 = var4.bind(var5)(var3);
                        var1 = false;
                    case 196:
                        var0 = var1;
                    case 199:
                        _fun12060_ip = 348;
                        continue _fun12060;
                    case 204:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 3;
                        var1 = var4[var1];
                        var4 = undefined;
                        var1 = var3.bind(var4)(var1);
                        var3 = var1.DEBUG_BUILD;
                        var0 = false;
                        if (!var3) {
                            _fun12060_ip = 348;
                            continue _fun12060
                        }
                    case 240:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 1;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.debug;
                        var3 = var4.warn;
                        var2 = global;
                        var6 = var2.JSON;
                        var5 = var6.stringify;
                        var9 = var5.bind(var6)(var8);
                        var6 = var2.JSON;
                        var5 = var6.stringify;
                        var11 = var5.bind(var6)(var7);
                        var2 = var2.HermesInternal;
                        var7 = var2.concat;
                        var14 = '[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ';
                        var12 = ' of type ';
                        var10 = '.';
                        var13 = var9;
                        var2 = var14[var7](var13, var12, var11, var10, var9);
                        var2 = var3.bind(var4)(var2);
                        var0 = false;
                    case 348:
                        return var0;
                }
            };
            var _closure1_slot18 = var3;
            var17 = 0;
            var8 = var13[var17];
            var0 = undefined;
            var8 = var12.bind(var0)(var8);
            var _closure1_slot2 = var8;
            var10 = global;
            var14 = var10.Object;
            var11 = var14.defineProperty;
            var8 = var10.Symbol;
            var9 = var8.toStringTag;
            var8 = {};
            var15 = 'Module';
            var8.value = var15;
            var8 = var11.bind(var14)(var2, var9, var8);
            var8 = 1000000;
            var _closure1_slot3 = var8;
            var8 = 1;
            var9 = var13[var8];
            var9 = var12.bind(var0)(var9);
            var11 = var9.GLOBAL_OBJ;
            var9 = 'window';
            var11 = var9 in var11;
            if (!var11) {
                _fun12054_ip = 203;
                continue _fun12054
            }
        case 164:
            var9 = var13[var8];
            var9 = var12.bind(var0)(var9);
            var9 = var9.GLOBAL_OBJ;
            var9 = var9.window;
            var8 = var13[var8];
            var8 = var12.bind(var0)(var8);
            var8 = var8.GLOBAL_OBJ;
            var11 = var9 === var8;
        case 203:
            if (!var11) {
                _fun12054_ip = 223;
                continue _fun12054
            }
        case 206:
            var8 = var10.importScripts;
            var9 = 'undefined';
            var8 = typeof var8;
            var11 = var9 === var8;
        case 223:
            var8 = var10.String;
            var9 = var8.bind(var0)(var17);
            var _closure1_slot4 = var9;
            var8 = 'worker';
            if (!var11) {
                _fun12054_ip = 249;
                continue _fun12054
            }
        case 245:
            var8 = 'main';
        case 249:
            var _closure1_slot5 = var8;
            var11 = 2;
            var11 = var13[var11];
            var11 = var12.bind(var0)(var11);
            var11 = var11.WINDOW;
            var11 = var11.navigator;
            var14 = '';
            var _closure1_slot6 = var14;
            var _closure1_slot7 = var14;
            var _closure1_slot8 = var14;
            var12 = null;
            var15 = var12 == var11;
            var13 = undefined;
            if (var15) {
                _fun12054_ip = 310;
                continue _fun12054
            }
        case 304:
            var13 = var11.userAgent;
        case 310:
            if (var13) {
                _fun12054_ip = 316;
                continue _fun12054
            }
        case 313:
            var13 = var14;
        case 316:
            var _closure1_slot9 = var13;
            var _closure1_slot10 = var14;
            var15 = var12 == var11;
            var13 = undefined;
            if (var15) {
                _fun12054_ip = 339;
                continue _fun12054
            }
        case 333:
            var13 = var11.language;
        case 339:
            if (var13) {
                _fun12054_ip = 373;
                continue _fun12054
            }
        case 342:
            var16 = var12 == var11;
            var15 = undefined;
            if (var16) {
                _fun12054_ip = 370;
                continue _fun12054
            }
        case 351:
            var16 = var11.languages;
            var18 = var12 == var16;
            var15 = undefined;
            if (var18) {
                _fun12054_ip = 370;
                continue _fun12054
            }
        case 366:
            var15 = var16[var17];
        case 370:
            var13 = var15;
        case 373:
            if (var13) {
                _fun12054_ip = 379;
                continue _fun12054
            }
        case 376:
            var13 = var14;
        case 379:
            var _closure1_slot11 = var13;
            var14 = var12 == var11;
            var13 = undefined;
            if (var14) {
                _fun12054_ip = 398;
                continue _fun12054
            }
        case 392:
            var13 = var11.userAgentData;
        case 398:
            var14 = 'object';
            var11 = typeof var13;
            var11 = var14 === var11;
            if (!var11) {
                _fun12054_ip = 416;
                continue _fun12054
            }
        case 412:
            var11 = var12 !== var13;
        case 416:
            if (!var11) {
                _fun12054_ip = 427;
                continue _fun12054
            }
        case 419:
            var12 = 'getHighEntropyValues';
            var11 = var12 in var13;
        case 427:
            if (!var11) {
                _fun12054_ip = 482;
                continue _fun12054
            }
        case 430:
            var12 = var13.getHighEntropyValues;
            var11 = ['architecture', 'model', 'platform', 'platformVersion', 'fullVersionList'];
            var13 = var12.bind(var13)(var11);
            var12 = var13.then;
            var11 = function(arg0) { // Environment: var1
                _fun12061: for (var _fun12061_ip = 0;;) switch (_fun12061_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0.platform;
                        if (var2) {
                            _fun12061_ip = 16;
                            continue _fun12061
                        }
                    case 12:
                        var2 = '';
                    case 16:
                        _closure1_slot6 = var2;
                        var2 = var0.architecture;
                        if (var2) {
                            _fun12061_ip = 36;
                            continue _fun12061
                        }
                    case 32:
                        var2 = '';
                    case 36:
                        _closure1_slot8 = var2;
                        var2 = var0.model;
                        if (var2) {
                            _fun12061_ip = 53;
                            continue _fun12061
                        }
                    case 49:
                        var2 = '';
                    case 53:
                        _closure1_slot10 = var2;
                        var2 = var0.platformVersion;
                        if (var2) {
                            _fun12061_ip = 70;
                            continue _fun12061
                        }
                    case 66:
                        var2 = '';
                    case 70:
                        _closure1_slot7 = var2;
                        var2 = var0.fullVersionList;
                        var3 = null;
                        if (!(var3 != var2)) {
                            _fun12061_ip = 168;
                            continue _fun12061
                        }
                    case 86:
                        var2 = var2.length;
                        if (!var2) {
                            _fun12061_ip = 168;
                            continue _fun12061
                        }
                    case 94:
                        var2 = var0.fullVersionList;
                        var0 = var0.fullVersionList;
                        var3 = var0.length;
                        var0 = 1;
                        var0 = var3 - var0;
                        var0 = var2[var0];
                        var5 = var0.brand;
                        var4 = var0.version;
                        var0 = global;
                        var0 = var0.HermesInternal;
                        var3 = var0.concat;
                        var2 = '';
                        var0 = ' ';
                        var0 = var3.bind(var2)(var5, var0, var4);
                        _closure1_slot9 = var0;
                    case 168:
                        var0 = undefined;
                        return var0;
                }
            };
            var13 = var12.bind(var13)(var11);
            var12 = var13.catch;
            var11 = function(arg0) { // Environment: var1
                var0 = undefined;
                return var0;
            };
            var11 = var12.bind(var13)(var11);
        case 482:
            var11 = false;
            var _closure1_slot12 = var11;
            var10 = var10.Map;
            var11 = var10.prototype;
            var11 = Object.create(var11, {
                constructor: {
                    value: var10
                }
            });
            var22 = var11;
            var10 = new var22[var10](var21);
            var10 = var10 instanceof Object ? var10 : var11;
            var _closure1_slot13 = var10;
            var10 = 30000;
            var2.MAX_PROFILE_DURATION_MS = var10;
            var2.PROFILER_THREAD_ID_STRING = var9;
            var2.PROFILER_THREAD_NAME = var8;
            var8 = function arg0, arg1() {
                _fun12063: for (var _fun12063_ip = 0;;) switch (_fun12063_ip) {
                    case 0:
                        var4 = _closure1_slot13;
                        var3 = var4.set;
                        var2 = arg0;
                        var1 = arg1;
                        var1 = var3.bind(var4)(var2, var1);
                        var1 = _closure1_slot13;
                        var2 = var1.size;
                        var1 = 30;
                        if (!(var2 > var1)) {
                            _fun12063_ip = 87;
                            continue _fun12063
                        }
                    case 40:
                        var2 = _closure1_slot13;
                        var1 = var2.keys;
                        var2 = var1.bind(var2)();
                        var1 = var2.next;
                        var1 = var1.bind(var2)();
                        var2 = var1.value;
                        var1 = undefined;
                        if (!(var1 !== var2)) {
                            _fun12063_ip = 87;
                            continue _fun12063
                        }
                    case 73:
                        var1 = _closure1_slot13;
                        var0 = var1.delete;
                        var0 = var0.bind(var1)(var2);
                    case 87:
                        var0 = undefined;
                        return var0;
                }
            };
            var2.addProfileToGlobalCache = var8;
            var8 = function arg0, arg1() {
                _fun12064: for (var _fun12064_ip = 0;;) switch (_fun12064_ip) {
                    case 0:
                        var1 = arg1;
                        var0 = arg0;
                        var2 = var1.length;
                        if (var2) {
                            _fun12064_ip = 19;
                            continue _fun12064
                        }
                    case 14:
                        var2 = var0;
                        return var2;
                    case 19:
                        var5 = var1;
                        var2 = var5[Symbol.iterator];
                        var5 = var2().next;
                        var4 = 1;
                        var3 = 'profile';
                        var1 = undefined;
                    case 34:
                        var9 = var5().value;
                        var6 = var2;
                        if (!(var6 !== var1)) {
                            _fun12064_ip = 89;
                            continue _fun12064
                        }
                    case 45: // try_start_0
                        var6 = var0;
                        var8 = var6[var4];
                        var7 = var8.push;
                        var10 = {};
                        var10.type = var3;
                        var6 = new Array(2);
                        var6[0] = var10;
                        var6[1] = var9;
                        var6 = var7.bind(var8)(var6);
                    case 80: // try_end0
                        _fun12064_ip = 34;
                        continue _fun12064;
                    case 82: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var2.return();
                        throw var1;
                    case 89:
                        return var0;
                }
            };
            var2.addProfilesToEnvelope = var8;
            var2.applyDebugMetadata = var7;
            var7 = function arg0() {
                _fun12065: for (var _fun12065_ip = 0;;) switch (_fun12065_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = null;
                        if (!(var1 != var0)) {
                            _fun12065_ip = 247;
                            continue _fun12065
                        }
                    case 12:
                        var2 = var0.contexts;
                        if (!(var1 != var2)) {
                            _fun12065_ip = 247;
                            continue _fun12065
                        }
                    case 25:
                        var2 = var2.profile;
                        if (!var2) {
                            _fun12065_ip = 247;
                            continue _fun12065
                        }
                    case 37:
                        var2 = var0.contexts;
                        if (!var2) {
                            _fun12065_ip = 247;
                            continue _fun12065
                        }
                    case 49:
                        var3 = var0.contexts;
                        var2 = global;
                        var7 = var2.Object;
                        var6 = var7.assign;
                        var4 = var0.contexts;
                        var8 = var1 == var4;
                        var14 = undefined;
                        var5 = undefined;
                        if (var8) {
                            _fun12065_ip = 91;
                            continue _fun12065
                        }
                    case 85:
                        var5 = var4.trace;
                    case 91:
                        if (!(var1 == var5)) {
                            _fun12065_ip = 97;
                            continue _fun12065
                        }
                    case 95:
                        var5 = {};
                    case 97:
                        var4 = {};
                        var11 = var2.Object;
                        var10 = var11.assign;
                        var2 = var0.contexts;
                        var8 = var1 == var2;
                        var9 = undefined;
                        if (var8) {
                            _fun12065_ip = 145;
                            continue _fun12065
                        }
                    case 125:
                        var2 = var2.trace;
                        var8 = var1 == var2;
                        var9 = undefined;
                        if (var8) {
                            _fun12065_ip = 145;
                            continue _fun12065
                        }
                    case 140:
                        var9 = var2.data;
                    case 145:
                        if (!(var1 == var9)) {
                            _fun12065_ip = 151;
                            continue _fun12065
                        }
                    case 149:
                        var9 = {};
                    case 151:
                        var13 = _closure1_slot2;
                        var15 = _closure1_slot4;
                        var12 = {};
                        var8 = 'thread.id';
                        var12 = var13.bind(var14)(var12, var8, var15);
                        var8 = _closure1_slot5;
                        var2 = 'thread.name';
                        var8 = var13.bind(var14)(var12, var2, var8);
                        var2 = {};
                        var2 = var10.bind(var11)(var2, var9, var8);
                        var4.data = var2;
                        var2 = {};
                        var2 = var6.bind(var7)(var2, var5, var4);
                        var3.trace = var2;
                        var3 = var0.spans;
                        if (!(var1 != var3)) {
                            _fun12065_ip = 247;
                            continue _fun12065
                        }
                    case 230:
                        var2 = var3.forEach;
                        var1 = function(arg0) { // Environment: var1
                            _fun12066: for (var _fun12066_ip = 0;;) switch (_fun12066_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = global;
                                    var6 = var0.Object;
                                    var5 = var6.assign;
                                    var4 = var2.data;
                                    if (var4) {
                                        _fun12066_ip = 26;
                                        continue _fun12066
                                    }
                                case 24:
                                    var4 = {};
                                case 26:
                                    var8 = _closure1_slot2;
                                    var9 = _closure1_slot4;
                                    var0 = undefined;
                                    var7 = {};
                                    var3 = 'thread.id';
                                    var7 = var8.bind(var0)(var7, var3, var9);
                                    var3 = _closure1_slot5;
                                    var1 = 'thread.name';
                                    var3 = var8.bind(var0)(var7, var1, var3);
                                    var1 = {};
                                    var1 = var5.bind(var6)(var1, var4, var3);
                                    var2.data = var1;
                                    return var0;
                            }
                        };
                        var1 = var2.bind(var3)(var1);
                    case 247:
                        return var0;
                }
            };
            var2.attachProfiledThreadToEvent = var7;
            var2.convertJSSelfProfileToSampledFormat = var6;
            var6 = function arg0, arg1, arg2() {
                _fun12067: for (var _fun12067_ip = 0;;) switch (_fun12067_ip) {
                    case 0:
                        var4 = arg0;
                        var8 = arg1;
                        var7 = arg2;
                        var2 = null;
                        if (!(var2 != var4)) {
                            _fun12067_ip = 857;
                            continue _fun12067
                        }
                    case 18:
                        var9 = new Array(0);
                        var0 = var4.frames;
                        var0 = var0.length;
                        var17 = 0;
                        var0 = var17 < var0;
                        var6 = undefined;
                        var12 = 'number';
                        var1 = 0;
                        if (!var0) {
                            _fun12067_ip = 155;
                            continue _fun12067
                        }
                    case 50:
                        var0 = var4.frames;
                        var3 = var0[var1];
                        if (!var3) {
                            _fun12067_ip = 137;
                            continue _fun12067
                        }
                    case 63:
                        var0 = {};
                        var5 = var3.name;
                        var0.function = var5;
                        var5 = var3.resourceId;
                        var10 = typeof var5;
                        var5 = undefined;
                        if (!(var12 === var10)) {
                            _fun12067_ip = 106;
                            continue _fun12067
                        }
                    case 90:
                        var11 = var4.resources;
                        var10 = var3.resourceId;
                        var5 = var11[var10];
                    case 106:
                        var0.abs_path = var5;
                        var5 = var3.line;
                        var0.lineno = var5;
                        var3 = var3.column;
                        var0.colno = var3;
                        var9[var1] = var0;
                    case 137:
                        var1 = var1 + 1;
                        var0 = var4.frames;
                        var0 = var0.length;
                        if (var1 < var0) {
                            _fun12067_ip = 50;
                            continue _fun12067
                        }
                    case 155:
                        var5 = new Array(0);
                        var0 = var4.stacks;
                        var0 = var0.length;
                        var0 = var17 < var0;
                        var10 = 0;
                        var3 = undefined;
                        var1 = undefined;
                        if (!var0) {
                            _fun12067_ip = 290;
                            continue _fun12067
                        }
                    case 183:
                        var0 = var4.stacks;
                        var0 = var0[var10];
                        if (!var0) {
                            _fun12067_ip = 272;
                            continue _fun12067
                        }
                    case 196:
                        var11 = new Array(0);
                        var13 = var0;
                        var0 = var13;
                        if (!var0) {
                            _fun12067_ip = 262;
                            continue _fun12067
                        }
                    case 209:
                        var15 = var11.push;
                        var14 = var13.frameId;
                        var14 = var15.bind(var11)(var14);
                        var15 = var13.parentId;
                        var14 = undefined;
                        if (!(var6 !== var15)) {
                            _fun12067_ip = 253;
                            continue _fun12067
                        }
                    case 237:
                        var16 = var4.stacks;
                        var15 = var13.parentId;
                        var14 = var16[var15];
                    case 253:
                        var13 = var14;
                        var0 = var13;
                        if (var0) {
                            _fun12067_ip = 209;
                            continue _fun12067
                        }
                    case 262:
                        var5[var10] = var11;
                        var1 = var0;
                        var3 = var11;
                    case 272:
                        var10 = var10 + 1;
                        var0 = var4.stacks;
                        var0 = var0.length;
                        if (var10 < var0) {
                            _fun12067_ip = 183;
                            continue _fun12067
                        }
                    case 290:
                        var1 = _closure1_slot0;
                        var0 = _closure1_slot1;
                        var10 = 1;
                        var0 = var0[var10];
                        var1 = var1.bind(var6)(var0);
                        var0 = var1.browserPerformanceTimeOrigin;
                        var0 = var0.bind(var1)();
                        var1 = global;
                        var11 = var1.performance;
                        var11 = var11.timeOrigin;
                        var11 = typeof var11;
                        if (!(var12 !== var11)) {
                            _fun12067_ip = 354;
                            continue _fun12067
                        }
                    case 344:
                        var16 = var0;
                        if (var0) {
                            _fun12067_ip = 352;
                            continue _fun12067
                        }
                    case 350:
                        var16 = 0;
                    case 352:
                        _fun12067_ip = 366;
                        continue _fun12067;
                    case 354:
                        var1 = var1.performance;
                        var16 = var1.timeOrigin;
                    case 366:
                        if (var0) {
                            _fun12067_ip = 372;
                            continue _fun12067
                        }
                    case 369:
                        var0 = var16;
                    case 372:
                        var15 = var16 - var0;
                        var0 = new Array(0);
                        var1 = var4.samples;
                        var1 = var1.length;
                        var1 = var17 < var1;
                        var14 = 1000;
                        var13 = 0;
                        var12 = undefined;
                        var11 = undefined;
                        if (!var1) {
                            _fun12067_ip = 508;
                            continue _fun12067
                        }
                    case 410:
                        var1 = var4.samples;
                        var18 = var1[var13];
                        if (!var18) {
                            _fun12067_ip = 490;
                            continue _fun12067
                        }
                    case 423:
                        var1 = var18.timestamp;
                        var1 = var1 - var15;
                        var1 = var16 + var1;
                        var1 = var1 / var14;
                        var19 = {};
                        var18 = var18.stackId;
                        var21 = var2 != var18;
                        var20 = 0;
                        if (!var21) {
                            _fun12067_ip = 461;
                            continue _fun12067
                        }
                    case 458:
                        var20 = var18;
                    case 461:
                        var19.stack_id = var20;
                        var20 = _closure1_slot4;
                        var19.thread_id = var20;
                        var19.timestamp = var1;
                        var0[var13] = var19;
                        var12 = var18;
                        var11 = var1;
                    case 490:
                        var13 = var13 + 1;
                        var1 = var4.samples;
                        var1 = var1.length;
                        if (var13 < var1) {
                            _fun12067_ip = 410;
                            continue _fun12067
                        }
                    case 508:
                        var1 = {};
                        var1.frames = var9;
                        var1.stacks = var5;
                        var1.samples = var0;
                        var11 = _closure1_slot2;
                        var9 = _closure1_slot4;
                        var5 = {};
                        var0 = _closure1_slot5;
                        var5.name = var0;
                        var0 = {};
                        var0 = var11.bind(var6)(var0, var9, var5);
                        var1.thread_metadata = var0;
                        var0 = var8.getOptions;
                        var5 = var0.bind(var8)();
                        var0 = var8.getSdkMetadata;
                        var0 = var2 == var0;
                        var9 = undefined;
                        if (var0) {
                            _fun12067_ip = 607;
                            continue _fun12067
                        }
                    case 582:
                        var0 = var8.getSdkMetadata;
                        var0 = var0.bind(var8)();
                        var8 = var2 == var0;
                        var9 = undefined;
                        if (var8) {
                            _fun12067_ip = 607;
                            continue _fun12067
                        }
                    case 601:
                        var9 = var0.sdk;
                    case 607:
                        var0 = {};
                        var11 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var8 = var8[var10];
                        var11 = var11.bind(var6)(var8);
                        var8 = var11.uuid4;
                        var8 = var8.bind(var11)();
                        var0.chunk_id = var8;
                        var8 = {};
                        var11 = var2 == var9;
                        var12 = undefined;
                        if (var11) {
                            _fun12067_ip = 657;
                            continue _fun12067
                        }
                    case 652:
                        var12 = var9.name;
                    case 657:
                        var13 = var2 != var12;
                        var11 = 'sentry.javascript.browser';
                        if (!var13) {
                            _fun12067_ip = 673;
                            continue _fun12067
                        }
                    case 670:
                        var11 = var12;
                    case 673:
                        var8.name = var11;
                        var12 = var2 == var9;
                        var11 = undefined;
                        if (var12) {
                            _fun12067_ip = 692;
                            continue _fun12067
                        }
                    case 686:
                        var11 = var9.version;
                    case 692:
                        var12 = var2 != var11;
                        var9 = '0.0.0';
                        if (!var12) {
                            _fun12067_ip = 708;
                            continue _fun12067
                        }
                    case 705:
                        var9 = var11;
                    case 708:
                        var8.version = var9;
                        var0.client_sdk = var8;
                        if (var7) {
                            _fun12067_ip = 748;
                            continue _fun12067
                        }
                    case 721:
                        var9 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var8 = var8[var10];
                        var9 = var9.bind(var6)(var8);
                        var8 = var9.uuid4;
                        var7 = var8.bind(var9)();
                    case 748:
                        var0.profiler_id = var7;
                        var7 = 'javascript';
                        var0.platform = var7;
                        var7 = '2';
                        var0.version = var7;
                        var8 = var5.release;
                        var9 = var2 != var8;
                        var7 = '';
                        if (!var9) {
                            _fun12067_ip = 793;
                            continue _fun12067
                        }
                    case 790:
                        var7 = var8;
                    case 793:
                        var0.release = var7;
                        var5 = var5.environment;
                        var7 = var2 != var5;
                        var2 = 'production';
                        if (!var7) {
                            _fun12067_ip = 818;
                            continue _fun12067
                        }
                    case 815:
                        var2 = var5;
                    case 818:
                        var0.environment = var2;
                        var2 = {};
                        var5 = _closure1_slot17;
                        var3 = var4.resources;
                        var3 = var5.bind(var6)(var3);
                        var2.images = var3;
                        var0.debug_meta = var2;
                        var0.profile = var1;
                        return var0;
                    case 857:
                        var0 = global;
                        var2 = var0.TypeError;
                        var0 = var0.HermesInternal;
                        var3 = var0.concat;
                        var1 = 'Cannot construct profiling event envelope without a valid profile. Got ';
                        var0 = ' instead.';
                        var24 = var3.bind(var1)(var4, var0);
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var25 = var1;
                        var0 = new var25[var2](var24, var23);
                        var0 = var0 instanceof Object ? var0 : var1;
                        throw var0;
                }
            };
            var2.createProfileChunkPayload = var6;
            var2.createProfilePayload = var5;
            var5 = function arg0, arg1, arg2, arg3() {
                _fun12068: for (var _fun12068_ip = 0;;) switch (_fun12068_ip) {
                    case 0:
                        var6 = arg2;
                        var0 = var6.samples;
                        var1 = var0.length;
                        var0 = 2;
                        if (!(!(var1 < var0))) {
                            _fun12068_ip = 123;
                            continue _fun12068
                        }
                    case 21:
                        var0 = var6.frames;
                        var0 = var0.length;
                        var0 = !var0;
                        var1 = !var0;
                        if (!var0) {
                            _fun12068_ip = 121;
                            continue _fun12068
                        }
                    case 41:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var0 = 3;
                        var0 = var4[var0];
                        var4 = undefined;
                        var0 = var3.bind(var4)(var0);
                        var3 = var0.DEBUG_BUILD;
                        var1 = false;
                        if (!var3) {
                            _fun12068_ip = 121;
                            continue _fun12068
                        }
                    case 77:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 1;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.debug;
                        var3 = var4.log;
                        var2 = '[Profiling] Discarding profile because it contains no frames';
                        var2 = var3.bind(var4)(var2);
                        var1 = false;
                    case 121:
                        _fun12068_ip = 203;
                        continue _fun12068;
                    case 123:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var0 = 3;
                        var0 = var4[var0];
                        var4 = undefined;
                        var0 = var3.bind(var4)(var0);
                        var3 = var0.DEBUG_BUILD;
                        var1 = false;
                        if (!var3) {
                            _fun12068_ip = 203;
                            continue _fun12068
                        }
                    case 159:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 1;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var4 = var2.debug;
                        var3 = var4.log;
                        var2 = '[Profiling] Discarding profile because it contains less than 2 samples';
                        var2 = var3.bind(var4)(var2);
                        var1 = false;
                    case 203:
                        var0 = null;
                        if (!var1) {
                            _fun12068_ip = 233;
                            continue _fun12068
                        }
                    case 208:
                        var5 = _closure1_slot15;
                        var11 = undefined;
                        var10 = arg0;
                        var9 = arg1;
                        var7 = arg3;
                        var8 = var6;
                        var0 = var11[var5](var10, var9, var8, var7, var6);
                    case 233:
                        return var0;
                }
            };
            var2.createProfilingEvent = var5;
            var2.enrichWithThreadInformation = var4;
            var4 = function arg0() {
                var0 = new Array(0);
                var _closure2_slot0 = var0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 1;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.forEachEnvelopeItem;
                var2 = arg0;
                var1 = function(arg0, arg1) { // Environment: var1
                    _fun12070: for (var _fun12070_ip = 0;;) switch (_fun12070_ip) {
                        case 0:
                            var5 = arg0;
                            var1 = 'transaction';
                            var0 = arg1;
                            if (!(var1 === var0)) {
                                _fun12070_ip = 124;
                                continue _fun12070
                            }
                        case 14:
                            var0 = var5.length;
                            var4 = 1;
                            var0 = var4 < var0;
                            var1 = null;
                            var3 = undefined;
                            if (!var0) {
                                _fun12070_ip = 124;
                                continue _fun12070
                            }
                        case 36:
                            var6 = var5[var4];
                            var0 = var1 != var6;
                            if (!var0) {
                                _fun12070_ip = 60;
                                continue _fun12070
                            }
                        case 47:
                            var6 = var6.contexts;
                            var0 = var1 != var6;
                            var3 = var6;
                        case 60:
                            var6 = var3;
                            if (!var0) {
                                _fun12070_ip = 79;
                                continue _fun12070
                            }
                        case 66:
                            var7 = var3.profile;
                            var0 = var1 != var7;
                            var6 = var7;
                        case 79:
                            if (!var0) {
                                _fun12070_ip = 88;
                                continue _fun12070
                            }
                        case 82:
                            var0 = var6.profile_id;
                        case 88:
                            if (!var0) {
                                _fun12070_ip = 109;
                                continue _fun12070
                            }
                        case 91:
                            var8 = _closure2_slot0;
                            var7 = var8.push;
                            var0 = var5[var4];
                            var0 = var7.bind(var8)(var0);
                        case 109:
                            var4 = var4 + 1;
                            var0 = var5.length;
                            var3 = var6;
                            if (var4 < var0) {
                                _fun12070_ip = 36;
                                continue _fun12070
                            }
                        case 124:
                            var0 = undefined;
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                return var0;
            };
            var2.findProfiledTransactionsFromEnvelope = var4;
            var4 = function() {
                var0 = _closure1_slot13;
                var0 = var0.size;
                return var0;
            };
            var2.getActiveProfilesCount = var4;
            var4 = function arg0() {
                var0 = arg0;
                var1 = var0.profilesSampleRate;
                var0 = undefined;
                var0 = var0 !== var1;
                return var0;
            };
            var2.hasLegacyProfiling = var4;
            var4 = function arg0() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 1;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.spanToJSON;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                var1 = var0.op;
                var0 = 'pageload';
                var0 = var0 === var1;
                return var0;
            };
            var2.isAutomatedPageLoadSpan = var4;
            var2.isValidSampleRate = var3;
            var3 = function arg0() {
                _fun12074: for (var _fun12074_ip = 0;;) switch (_fun12074_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = _closure1_slot12;
                        if (var2) {
                            _fun12074_ip = 244;
                            continue _fun12074
                        }
                    case 16:
                        var3 = var1.profileLifecycle;
                        var2 = 'trace';
                        if (!(var2 === var3)) {
                            _fun12074_ip = 240;
                            continue _fun12074
                        }
                    case 33:
                        var4 = var1.profileSessionSampleRate;
                        var1 = _closure1_slot18;
                        var7 = undefined;
                        var1 = var1.bind(var7)(var4);
                        if (var1) {
                            _fun12074_ip = 133;
                            continue _fun12074
                        }
                    case 53:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 3;
                        var1 = var3[var1];
                        var1 = var2.bind(var7)(var1);
                        var3 = var1.DEBUG_BUILD;
                        var1 = false;
                        if (!var3) {
                            _fun12074_ip = 238;
                            continue _fun12074
                        }
                    case 87:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var3 = 1;
                        var3 = var6[var3];
                        var3 = var5.bind(var7)(var3);
                        var6 = var3.debug;
                        var5 = var6.warn;
                        var3 = '[Profiling] Discarding profile because of invalid profileSessionSampleRate.';
                        var3 = var5.bind(var6)(var3);
                        var1 = false;
                        _fun12074_ip = 238;
                        continue _fun12074;
                    case 133:
                        if (var4) {
                            _fun12074_ip = 213;
                            continue _fun12074
                        }
                    case 136:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 3;
                        var2 = var5[var2];
                        var2 = var3.bind(var7)(var2);
                        var5 = var2.DEBUG_BUILD;
                        var2 = false;
                        if (!var5) {
                            _fun12074_ip = 235;
                            continue _fun12074
                        }
                    case 167:
                        var6 = _closure1_slot0;
                        var8 = _closure1_slot1;
                        var5 = 1;
                        var5 = var8[var5];
                        var5 = var6.bind(var7)(var5);
                        var7 = var5.debug;
                        var6 = var7.log;
                        var5 = '[Profiling] Discarding profile because profileSessionSampleRate is not defined or set to 0';
                        var5 = var6.bind(var7)(var5);
                        var2 = false;
                        _fun12074_ip = 235;
                        continue _fun12074;
                    case 213:
                        var3 = global;
                        var5 = var3.Math;
                        var3 = var5.random;
                        var3 = var3.bind(var5)();
                        var2 = var3 <= var4;
                    case 235:
                        var1 = var2;
                    case 238:
                        return var1;
                    case 240:
                        var1 = false;
                        return var1;
                    case 244:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.DEBUG_BUILD;
                        if (!var1) {
                            _fun12074_ip = 317;
                            continue _fun12074
                        }
                    case 275:
                        var1 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 1;
                        var0 = var3[var0];
                        var0 = var1.bind(var2)(var0);
                        var2 = var0.debug;
                        var1 = var2.log;
                        var0 = '[Profiling] Profiling has been disabled for the duration of the current user session.';
                        var0 = var1.bind(var2)(var0);
                    case 317:
                        var0 = false;
                        return var0;
                }
            };
            var2.shouldProfileSession = var3;
            var3 = function arg0() {
                _fun12075: for (var _fun12075_ip = 0;;) switch (_fun12075_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = _closure1_slot12;
                        if (var1) {
                            _fun12075_ip = 561;
                            continue _fun12075
                        }
                    case 16:
                        var1 = var2.isRecording;
                        var3 = var1.bind(var2)();
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        if (var3) {
                            _fun12075_ip = 106;
                            continue _fun12075
                        }
                    case 37:
                        var3 = 3;
                        var3 = var1[var3];
                        var5 = undefined;
                        var3 = var2.bind(var5)(var3);
                        var3 = var3.DEBUG_BUILD;
                        if (!var3) {
                            _fun12075_ip = 102;
                            continue _fun12075
                        }
                    case 60:
                        var4 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var3 = 1;
                        var3 = var6[var3];
                        var3 = var4.bind(var5)(var3);
                        var5 = var3.debug;
                        var4 = var5.log;
                        var3 = '[Profiling] Discarding profile because root span was not sampled.';
                        var3 = var4.bind(var5)(var3);
                    case 102:
                        var3 = false;
                        return var3;
                    case 106:
                        var7 = 1;
                        var1 = var1[var7];
                        var10 = undefined;
                        var2 = var2.bind(var10)(var1);
                        var1 = var2.getClient;
                        var3 = var1.bind(var2)();
                        var1 = null;
                        var2 = var1 == var3;
                        var1 = undefined;
                        if (var2) {
                            _fun12075_ip = 151;
                            continue _fun12075
                        }
                    case 141:
                        var2 = var3.getOptions;
                        var1 = var2.bind(var3)();
                    case 151:
                        if (var1) {
                            _fun12075_ip = 226;
                            continue _fun12075
                        }
                    case 154:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 3;
                        var2 = var4[var2];
                        var2 = var3.bind(var10)(var2);
                        var2 = var2.DEBUG_BUILD;
                        if (!var2) {
                            _fun12075_ip = 222;
                            continue _fun12075
                        }
                    case 183:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var2 = var2[var7];
                        var2 = var3.bind(var10)(var2);
                        var4 = var2.debug;
                        var3 = var4.log;
                        var2 = '[Profiling] Profiling disabled, no options found.';
                        var2 = var3.bind(var4)(var2);
                    case 222:
                        var2 = false;
                        return var2;
                    case 226:
                        var9 = var1.profilesSampleRate;
                        var1 = _closure1_slot18;
                        var1 = var1.bind(var10)(var9);
                        if (var1) {
                            _fun12075_ip = 324;
                            continue _fun12075
                        }
                    case 244:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var1 = 3;
                        var1 = var3[var1];
                        var1 = var2.bind(var10)(var1);
                        var3 = var1.DEBUG_BUILD;
                        var1 = false;
                        if (!var3) {
                            _fun12075_ip = 559;
                            continue _fun12075
                        }
                    case 278:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var3 = var3[var7];
                        var3 = var4.bind(var10)(var3);
                        var5 = var3.debug;
                        var4 = var5.warn;
                        var3 = '[Profiling] Discarding profile because of invalid sample rate.';
                        var3 = var4.bind(var5)(var3);
                        var1 = false;
                        _fun12075_ip = 559;
                        continue _fun12075;
                    case 324:
                        if (var9) {
                            _fun12075_ip = 407;
                            continue _fun12075
                        }
                    case 327:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var2 = 3;
                        var2 = var4[var2];
                        var2 = var3.bind(var10)(var2);
                        var4 = var2.DEBUG_BUILD;
                        var2 = false;
                        if (!var4) {
                            _fun12075_ip = 556;
                            continue _fun12075
                        }
                    case 361:
                        var5 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var4 = var4[var7];
                        var4 = var5.bind(var10)(var4);
                        var6 = var4.debug;
                        var5 = var6.log;
                        var4 = '[Profiling] Discarding profile because a negative sampling decision was inherited or profileSampleRate is set to 0';
                        var4 = var5.bind(var6)(var4);
                        var2 = false;
                        _fun12075_ip = 556;
                        continue _fun12075;
                    case 407:
                        var3 = true;
                        var4 = var3 === var9;
                        if (var4) {
                            _fun12075_ip = 438;
                            continue _fun12075
                        }
                    case 416:
                        var3 = global;
                        var5 = var3.Math;
                        var3 = var5.random;
                        var3 = var3.bind(var5)();
                        var4 = var3 < var9;
                    case 438:
                        var3 = !var4;
                        var3 = !var3;
                        if (var4) {
                            _fun12075_ip = 553;
                            continue _fun12075
                        }
                    case 447:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var4 = 3;
                        var4 = var6[var4];
                        var4 = var5.bind(var10)(var4);
                        var5 = var4.DEBUG_BUILD;
                        var3 = false;
                        if (!var5) {
                            _fun12075_ip = 553;
                            continue _fun12075
                        }
                    case 478:
                        var6 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var5 = var5[var7];
                        var5 = var6.bind(var10)(var5);
                        var7 = var5.debug;
                        var6 = var7.log;
                        var5 = global;
                        var8 = var5.Number;
                        var10 = var8.bind(var10)(var9);
                        var5 = var5.HermesInternal;
                        var9 = var5.concat;
                        var8 = "[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ";
                        var5 = ')';
                        var5 = var9.bind(var8)(var10, var5);
                        var5 = var6.bind(var7)(var5);
                        var3 = false;
                    case 553:
                        var2 = var3;
                    case 556:
                        var1 = var2;
                    case 559:
                        return var1;
                    case 561:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 3;
                        var1 = var2[var1];
                        var2 = undefined;
                        var1 = var3.bind(var2)(var1);
                        var1 = var1.DEBUG_BUILD;
                        if (!var1) {
                            _fun12075_ip = 634;
                            continue _fun12075
                        }
                    case 592:
                        var1 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var0 = 1;
                        var0 = var3[var0];
                        var0 = var1.bind(var2)(var0);
                        var2 = var0.debug;
                        var1 = var2.log;
                        var0 = '[Profiling] Profiling has been disabled for the duration of the current user session.';
                        var0 = var1.bind(var2)(var0);
                    case 634:
                        var0 = false;
                        return var0;
                }
            };
            var2.shouldProfileSpanLegacy = var3;
            var3 = function() {
                _fun12076: for (var _fun12076_ip = 0;;) switch (_fun12076_ip) {
                    case 0:
                        var0 = undefined;
                        var1 = undefined;
                        var3 = undefined;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var4 = 2;
                        var4 = var6[var4];
                        var4 = var5.bind(var0)(var4);
                        var4 = var4.WINDOW;
                        var4 = var4.Profiler;
                        var1 = var4;
                        var5 = 'function';
                        var4 = typeof var4;
                        if (!(var5 !== var4)) {
                            _fun12076_ip = 134;
                            continue _fun12076
                        }
                    case 55:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var4 = 3;
                        var4 = var6[var4];
                        var4 = var5.bind(var0)(var4);
                        var4 = var4.DEBUG_BUILD;
                        if (!var4) {
                            _fun12076_ip = 312;
                            continue _fun12076
                        }
                    case 87:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var4 = 1;
                        var4 = var6[var4];
                        var4 = var5.bind(var0)(var4);
                        var6 = var4.debug;
                        var5 = var6.log;
                        var4 = '[Profiling] Profiling is not supported by this browser, Profiler interface missing on window object.';
                        var4 = var5.bind(var6)(var4);
                        _fun12076_ip = 312;
                        continue _fun12076;
                    case 134:
                        var4 = global;
                        var6 = var4.Math;
                        var5 = var6.floor;
                        var4 = 3000;
                        var3 = var5.bind(var6)(var4);
                    case 159: // try_start_0
                        var4 = var1;
                        var1 = {};
                        var5 = 10;
                        var1.sampleInterval = var5;
                        var1.maxBufferSize = var3;
                        var3 = var4.prototype;
                        var3 = Object.create(var3, {
                            constructor: {
                                value: var4
                            }
                        });
                        var9 = var3;
                        var8 = var1;
                        var1 = new var9[var4](var8, var7);
                        var1 = var1 instanceof Object ? var1 : var3;
                    case 200: // try_end0
                        return var1;
                    case 202: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 3;
                        var1 = var4[var1];
                        var1 = var3.bind(var0)(var1);
                        var1 = var1.DEBUG_BUILD;
                        if (!var1) {
                            _fun12076_ip = 306;
                            continue _fun12076
                        }
                    case 233:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 1;
                        var5 = var4[var1];
                        var5 = var3.bind(var0)(var5);
                        var7 = var5.debug;
                        var6 = var7.log;
                        var5 = "[Profiling] Failed to initialize the Profiling constructor, this is likely due to a missing 'Document-Policy': 'js-profiling' header.";
                        var5 = var6.bind(var7)(var5);
                        var1 = var4[var1];
                        var1 = var3.bind(var0)(var1);
                        var4 = var1.debug;
                        var3 = var4.log;
                        var1 = '[Profiling] Disabling profiling for current user session.';
                        var1 = var3.bind(var4)(var1);
                    case 306:
                        var1 = true;
                        _closure1_slot12 = var1;
                    case 312:
                        return var0;
                }
            };
            var2.startJSSelfProfile = var3;
            var3 = function arg0() {
                _fun12077: for (var _fun12077_ip = 0;;) switch (_fun12077_ip) {
                    case 0:
                        var3 = arg0;
                        var2 = _closure1_slot13;
                        var0 = var2.get;
                        var0 = var0.bind(var2)(var3);
                        if (!var0) {
                            _fun12077_ip = 37;
                            continue _fun12077
                        }
                    case 23:
                        var2 = _closure1_slot13;
                        var1 = var2.delete;
                        var1 = var1.bind(var2)(var3);
                    case 37:
                        return var0;
                }
            };
            var2.takeProfileFromGlobalCache = var3;
            var1 = function arg0() {
                _fun12078: for (var _fun12078_ip = 0;;) switch (_fun12078_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = undefined;
                        var1 = undefined;
                        var3 = undefined;
                    case 9: // try_start_0
                        var2 = var0;
                        if (!var2) {
                            _fun12078_ip = 374;
                            continue _fun12078
                        }
                    case 18:
                        var2 = var0;
                        var5 = 'object';
                        var2 = typeof var2;
                        if (!(var5 === var2)) {
                            _fun12078_ip = 374;
                            continue _fun12078
                        }
                    case 35:
                        var5 = function arg0() {
                            _fun12079: for (var _fun12079_ip = 0;;) switch (_fun12079_ip) {
                                case 0:
                                    var3 = arg0;
                                    var1 = 'string';
                                    var0 = typeof var3;
                                    var0 = var1 === var0;
                                    if (!var0) {
                                        _fun12079_ip = 41;
                                        continue _fun12079
                                    }
                                case 17:
                                    var2 = /^[a-f0-9]{32}$/;
                                    var1 = var2.test;
                                    var0 = var1.bind(var2)(var3);
                                case 41:
                                    return var0;
                            }
                        };
                        var1 = var5;
                        var2 = var0;
                        var2 = var2.profiler_id;
                        var2 = var5.bind(var4)(var2);
                        if (var2) {
                            _fun12078_ip = 77;
                            continue _fun12078
                        }
                    case 62:
                        var2 = {};
                        var5 = 'missing or invalid profiler_id';
                        var2.reason = var5;
                    case 75: // try_end0
                        return var2;
                    case 77: // try_start_1
                        var2 = var1;
                        var1 = var0;
                        var1 = var1.chunk_id;
                        var1 = var2.bind(var4)(var1);
                        if (var1) {
                            _fun12078_ip = 112;
                            continue _fun12078
                        }
                    case 97:
                        var1 = {};
                        var2 = 'missing or invalid chunk_id';
                        var1.reason = var2;
                    case 110: // try_end1
                        return var1;
                    case 112: // try_start_2
                        var1 = var0;
                        var1 = var1.client_sdk;
                        if (var1) {
                            _fun12078_ip = 139;
                            continue _fun12078
                        }
                    case 124:
                        var1 = {};
                        var2 = 'missing client_sdk metadata';
                        var1.reason = var2;
                    case 137: // try_end2
                        return var1;
                    case 139: // try_start_3
                        var0 = var0.profile;
                        var3 = var0;
                        if (var0) {
                            _fun12078_ip = 169;
                            continue _fun12078
                        }
                    case 151:
                        var0 = {};
                        var1 = 'missing profile data';
                        var0.reason = var1;
                        _fun12078_ip = 372;
                        continue _fun12078;
                    case 169:
                        var4 = global;
                        var5 = var4.Array;
                        var2 = var5.isArray;
                        var1 = var3;
                        var1 = var1.frames;
                        var1 = var2.bind(var5)(var1);
                        if (!var1) {
                            _fun12078_ip = 216;
                            continue _fun12078
                        }
                    case 199:
                        var1 = var3;
                        var1 = var1.frames;
                        var1 = var1.length;
                        if (var1) {
                            _fun12078_ip = 234;
                            continue _fun12078
                        }
                    case 216:
                        var1 = {};
                        var2 = 'profile has no frames';
                        var1.reason = var2;
                        _fun12078_ip = 369;
                        continue _fun12078;
                    case 234:
                        var6 = var4.Array;
                        var5 = var6.isArray;
                        var2 = var3;
                        var2 = var2.stacks;
                        var2 = var5.bind(var6)(var2);
                        if (!var2) {
                            _fun12078_ip = 279;
                            continue _fun12078
                        }
                    case 262:
                        var2 = var3;
                        var2 = var2.stacks;
                        var2 = var2.length;
                        if (var2) {
                            _fun12078_ip = 294;
                            continue _fun12078
                        }
                    case 279:
                        var2 = {};
                        var5 = 'profile has no stacks';
                        var2.reason = var5;
                        _fun12078_ip = 366;
                        continue _fun12078;
                    case 294:
                        var6 = var4.Array;
                        var5 = var6.isArray;
                        var4 = var3;
                        var4 = var4.samples;
                        var4 = var5.bind(var6)(var4);
                        if (!var4) {
                            _fun12078_ip = 336;
                            continue _fun12078
                        }
                    case 322:
                        var3 = var3.samples;
                        var3 = var3.length;
                        if (var3) {
                            _fun12078_ip = 351;
                            continue _fun12078
                        }
                    case 336:
                        var3 = {};
                        var4 = 'profile has no samples';
                        var3.reason = var4;
                        _fun12078_ip = 363;
                        continue _fun12078;
                    case 351:
                        var4 = {};
                        var5 = true;
                        var4.valid = var5;
                        var3 = var4;
                    case 363:
                        var2 = var3;
                    case 366:
                        var1 = var2;
                    case 369:
                        var0 = var1;
                    case 372: // try_end3
                        return var0;
                    case 374: // try_start_4
                        var0 = {};
                        var1 = 'chunk is not an object';
                        var0.reason = var1;
                    case 387: // try_end4
                        return var0;
                    case 389: // catch_target0 // catch_target1 // catch_target2 // catch_target3 // catch_target4
                        CatchBlockStart(arg_register = 3);
                        var0 = {};
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var2 = var1.concat;
                        var1 = 'unknown validation error: ';
                        var1 = var2.bind(var1)(var3);
                        var0.reason = var1;
                        return var0;
                }
            };
            var2.validateProfileChunk = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [77, 817, 1025, 1073]);