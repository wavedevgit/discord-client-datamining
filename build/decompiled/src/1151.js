// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun12543: for (var _fun12543_ip = 0;;) switch (_fun12543_ip) {
        case 0:
            var2 = exports;
            var3 = dependencyMap;
            var6 = this;
            var0 = require;
            var _closure1_slot0 = var0;
            var _closure1_slot1 = var3;
            var5 = function(arg0) { // Original name: _captureAppStart, environment: var1
                var1 = arg0;
                var1 = var1.isManual;
                var _closure2_slot1 = var1;
                var3 = _closure1_slot3;
                var7 = this;
                var4 = function*() { // Environment: var0
                    var0 = function*() { // Original name: ?anon_0_, environment: var0
                        _fun12546: for (var _fun12546_ip = 0;;) switch (_fun12546_ip) {
                            case 0:
                                StartGenerator();
                                ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                if (var1) {
                                    _fun12546_ip = 395;
                                    continue _fun12546
                                }
                            case 10:
                                var2 = undefined;
                                var8 = undefined;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var10 = 1;
                                var3 = var3[var10];
                                var4 = var4.bind(var2)(var3);
                                var3 = var4.getClient;
                                var6 = var3.bind(var4)();
                                if (var6) {
                                    _fun12546_ip = 94;
                                    continue _fun12546
                                }
                            case 50:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var3 = var3[var10];
                                var3 = var4.bind(var2)(var3);
                                var5 = var3.debug;
                                var4 = var5.warn;
                                var3 = '[AppStart] Could not capture App Start, missing client.';
                                var3 = var4.bind(var5)(var3);
                                _fun12546_ip = 389;
                                continue _fun12546;
                            case 94:
                                var4 = _closure2_slot1;
                                _closure1_slot6 = var4;
                                var7 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var5 = var4[var10];
                                var9 = var7.bind(var2)(var5);
                                var5 = var9.timestampInSeconds;
                                var9 = var5.bind(var9)();
                                var5 = 1000;
                                var9 = var5 * var9;
                                var5 = null;
                                var8 = null;
                                var11 = 2;
                                var4 = var4[var11];
                                var4 = var7.bind(var2)(var4);
                                var4 = var4.NATIVE;
                                var4 = var4.enableNative;
                                if (!var4) {
                                    _fun12546_ip = 309;
                                    continue _fun12546
                                }
                            case 176: // try_start_0
                                var7 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var4 = var4[var11];
                                var4 = var7.bind(var2)(var4);
                                var7 = var4.NATIVE;
                                var4 = var7.fetchNativeFrames;
                                var4 = var4.bind(var7)();
                                SaveGenerator(address = 213);
                            case 211:
                                return var4;
                            case 213:
                                ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                                if (var7) {
                                    _fun12546_ip = 264;
                                    continue _fun12546
                                }
                            case 219:
                                var8 = var4;
                                var11 = _closure1_slot0;
                                var7 = _closure1_slot1;
                                var7 = var7[var10];
                                var7 = var11.bind(var2)(var7);
                                var12 = var7.debug;
                                var11 = var12.log;
                                var7 = '[AppStart] Captured end frames for app start.';
                                var7 = var11.bind(var12)(var7, var4);
                            case 262: // try_end0
                                _fun12546_ip = 309;
                                continue _fun12546;
                            case 264:
                                return var4;
                            case 267: // catch_target0
                                CatchBlockStart(arg_register = 11);
                                var7 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var4 = var4[var10];
                                var4 = var7.bind(var2)(var4);
                                var10 = var4.debug;
                                var7 = var10.log;
                                var4 = '[AppStart] Failed to capture end frames for app start.';
                                var4 = var7.bind(var10)(var4, var11);
                            case 309:
                                var7 = _closure1_slot9;
                                var4 = {};
                                var4.timestampMs = var9;
                                var4.endFrames = var8;
                                var4 = var7.bind(var2)(var4);
                                var4 = var6.getIntegrationByName;
                                var1 = _closure1_slot4;
                                var4 = var4.bind(var6)(var1);
                                var _closure2_slot0 = var4;
                                var1 = undefined;
                                if (!(var5 !== var4)) {
                                    _fun12546_ip = 379;
                                    continue _fun12546
                                }
                            case 355:
                                var4 = _closure2_slot0;
                                var1 = undefined;
                                if (!(var1 !== var4)) {
                                    _fun12546_ip = 379;
                                    continue _fun12546
                                }
                            case 365:
                                var4 = _closure2_slot0;
                                var3 = var4.captureStandaloneAppStart;
                                var1 = var3.bind(var4)();
                            case 379:
                                SaveGenerator(address = 383);
                            case 381:
                                return var1;
                            case 383:
                                ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                if (var3) {
                                    _fun12546_ip = 392;
                                    continue _fun12546
                                }
                            case 389:
                                return var2;
                            case 392:
                                return var1;
                            case 395:
                                return var0;
                        }
                    };
                    return var0;
                };
                var8 = undefined;
                var6 = undefined;
                var5 = undefined;
                var0 = var8[var3](var7, var6, var5, var4, var3);
                return var0;
            };
            var _closure1_slot10 = var5;
            var4 = function(arg0) { // Original name: setRootComponentCreationTimestampMs, environment: var1
                _fun12547: for (var _fun12547_ip = 0;;) switch (_fun12547_ip) {
                    case 0:
                        var1 = _closure1_slot5;
                        var0 = null;
                        var3 = var0 == var1;
                        var0 = undefined;
                        var1 = undefined;
                        if (var3) {
                            _fun12547_ip = 30;
                            continue _fun12547
                        }
                    case 20:
                        var3 = _closure1_slot5;
                        var1 = var3.timestampMs;
                    case 30:
                        if (!var1) {
                            _fun12547_ip = 75;
                            continue _fun12547
                        }
                    case 33:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 1;
                        var1 = var4[var1];
                        var1 = var3.bind(var0)(var1);
                        var4 = var1.debug;
                        var3 = var4.warn;
                        var1 = 'Setting Root component creation timestamp after app start end is set.';
                        var1 = var3.bind(var4)(var1);
                    case 75:
                        var1 = _closure1_slot7;
                        if (!var1) {
                            _fun12547_ip = 124;
                            continue _fun12547
                        }
                    case 82:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 1;
                        var1 = var4[var1];
                        var1 = var3.bind(var0)(var1);
                        var4 = var1.debug;
                        var3 = var4.warn;
                        var1 = 'Overwriting already set root component creation timestamp.';
                        var1 = var3.bind(var4)(var1);
                    case 124:
                        var1 = arg0;
                        _closure1_slot7 = var1;
                        var1 = true;
                        _closure1_slot8 = var1;
                        return var0;
                }
            };
            var _closure1_slot11 = var4;
            var0 = function(arg0, arg1, arg2) { // Original name: setSpanDurationAsMeasurementOnTransactionEvent, environment: var1
                _fun12548: for (var _fun12548_ip = 0;;) switch (_fun12548_ip) {
                    case 0:
                        var1 = arg0;
                        var0 = arg2;
                        var2 = var0.timestamp;
                        if (!var2) {
                            _fun12548_ip = 24;
                            continue _fun12548
                        }
                    case 15:
                        var2 = var0.start_timestamp;
                        if (var2) {
                            _fun12548_ip = 73;
                            continue _fun12548
                        }
                    case 24:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 1;
                        var3 = var3[var2];
                        var2 = undefined;
                        var2 = var4.bind(var2)(var3);
                        var4 = var2.debug;
                        var3 = var4.warn;
                        var2 = 'Span is missing start or end timestamp. Cam not set measurement on transaction event.';
                        var2 = var3.bind(var4)(var2);
                        _fun12548_ip = 144;
                        continue _fun12548;
                    case 73:
                        var2 = var1.measurements;
                        if (var2) {
                            _fun12548_ip = 84;
                            continue _fun12548
                        }
                    case 82:
                        var2 = {};
                    case 84:
                        var1.measurements = var2;
                        var2 = var1.measurements;
                        var1 = {};
                        var3 = var0.timestamp;
                        var0 = var0.start_timestamp;
                        var3 = var3 - var0;
                        var0 = 1000;
                        var0 = var0 * var3;
                        var1.value = var0;
                        var0 = 'millisecond';
                        var1.unit = var0;
                        var0 = arg1;
                        var2[var0] = var1;
                    case 144:
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot12 = var0;
            var0 = global;
            var9 = var0.Object;
            var8 = var9.defineProperty;
            var7 = {};
            var0 = true;
            var7.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var7);
            var0 = 0;
            var7 = var3[var0];
            var3 = arg2;
            var0 = undefined;
            var3 = var3.bind(var0)(var7);
            var _closure1_slot2 = var3;
            var3 = var6;
            if (!var3) {
                _fun12543_ip = 113;
                continue _fun12543
            }
        case 107:
            var3 = var6.__awaiter;
        case 113:
            if (var3) {
                _fun12543_ip = 121;
                continue _fun12543
            }
        case 116:
            var3 = function(arg0, arg1, arg2, arg3) { // Environment: var1
                _fun12549: for (var _fun12549_ip = 0;;) switch (_fun12549_ip) {
                    case 0:
                        var2 = arg2;
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var1 = arg1;
                        var _closure2_slot1 = var1;
                        var _closure2_slot2 = var2;
                        var1 = arg3;
                        var _closure2_slot3 = var1;
                        if (var2) {
                            _fun12549_ip = 48;
                            continue _fun12549
                        }
                    case 33:
                        var1 = global;
                        var1 = var1.Promise;
                        _closure2_slot2 = var1;
                        var2 = var1;
                    case 48:
                        var1 = var2.prototype;
                        var1 = Object.create(var1, {
                            constructor: {
                                value: var2
                            }
                        });
                        var4 = function(arg0, arg1) { // Environment: var0
                            _fun12550: for (var _fun12550_ip = 0;;) switch (_fun12550_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure3_slot0 = var1;
                                    var1 = arg1;
                                    var _closure3_slot1 = var1;
                                    var1 = function(arg0) { // Original name: fulfilled, environment: var0
                                        _fun12551: for (var _fun12551_ip = 0;;) switch (_fun12551_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.next;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 34: // try_end0
                                                _fun12551_ip = 52;
                                                continue _fun12551;
                                            case 36: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 52:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot2 = var1;
                                    var1 = function(arg0) { // Original name: rejected, environment: var0
                                        _fun12552: for (var _fun12552_ip = 0;;) switch (_fun12552_ip) {
                                            case 0:
                                                var0 = arg0;
                                            case 3: // try_start_0
                                                var2 = _closure3_slot4;
                                                var3 = _closure2_slot3;
                                                var1 = var3.throw;
                                                var1 = var1.bind(var3)(var0);
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 35: // try_end0
                                                _fun12552_ip = 53;
                                                continue _fun12552;
                                            case 37: // catch_target0
                                                CatchBlockStart(arg_register = 2);
                                                var1 = _closure3_slot1;
                                                var0 = undefined;
                                                var0 = var1.bind(var0)(var2);
                                            case 53:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot3 = var1;
                                    var2 = function(arg0) { // Original name: step, environment: var0
                                        _fun12553: for (var _fun12553_ip = 0;;) switch (_fun12553_ip) {
                                            case 0:
                                                var0 = arg0;
                                                var1 = var0.done;
                                                if (var1) {
                                                    _fun12553_ip = 54;
                                                    continue _fun12553
                                                }
                                            case 11:
                                                var3 = var0.value;
                                                var2 = function(arg0) { // Original name: adopt, environment: var1
                                                    _fun12554: for (var _fun12554_ip = 0;;) switch (_fun12554_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var _closure5_slot0 = var0;
                                                            var3 = _closure2_slot2;
                                                            var3 = var0 instanceof var3;
                                                            if (var3) {
                                                                _fun12554_ip = 52;
                                                                continue _fun12554
                                                            }
                                                        case 23:
                                                            var3 = _closure2_slot2;
                                                            var2 = var3.prototype;
                                                            var2 = Object.create(var2, {
                                                                constructor: {
                                                                    value: var3
                                                                }
                                                            });
                                                            var4 = function(arg0) { // Environment: var1
                                                                var2 = _closure5_slot0;
                                                                var1 = arg0;
                                                                var0 = undefined;
                                                                var1 = var1.bind(var0)(var2);
                                                                return var0;
                                                            };
                                                            var5 = var2;
                                                            var1 = new var5[var3](var4, var3);
                                                            var0 = var1 instanceof Object ? var1 : var2;
                                                        case 52:
                                                            return var0;
                                                    }
                                                };
                                                var1 = undefined;
                                                var4 = var2.bind(var1)(var3);
                                                var3 = var4.then;
                                                var2 = _closure3_slot2;
                                                var1 = _closure3_slot3;
                                                var1 = var3.bind(var4)(var2, var1);
                                                _fun12553_ip = 73;
                                                continue _fun12553;
                                            case 54:
                                                var2 = _closure3_slot0;
                                                var1 = var0.value;
                                                var0 = undefined;
                                                var0 = var2.bind(var0)(var1);
                                            case 73:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var _closure3_slot4 = var2;
                                    var5 = _closure2_slot3;
                                    var4 = var5.apply;
                                    var3 = _closure2_slot0;
                                    var1 = _closure2_slot1;
                                    if (var1) {
                                        _fun12550_ip = 70;
                                        continue _fun12550
                                    }
                                case 66:
                                    var1 = new Array(0);
                                case 70:
                                    var1 = var4.bind(var5)(var3, var1);
                                    _closure2_slot3 = var1;
                                    var0 = var1.next;
                                    var1 = var0.bind(var1)();
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                            }
                        };
                        var5 = var1;
                        var0 = new var5[var2](var4, var3);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                }
            };
        case 121:
            var _closure1_slot3 = var3;
            var3 = 'AppStart';
            var _closure1_slot4 = var3;
            var _closure1_slot5 = var0;
            var3 = false;
            var _closure1_slot6 = var3;
            var _closure1_slot7 = var0;
            var _closure1_slot8 = var3;
            var3 = function(arg0) { // Original name: _setAppStartEndData, environment: var1
                _fun12556: for (var _fun12556_ip = 0;;) switch (_fun12556_ip) {
                    case 0:
                        var0 = _closure1_slot5;
                        if (!var0) {
                            _fun12556_ip = 54;
                            continue _fun12556
                        }
                    case 10:
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var0 = 1;
                        var2 = var2[var0];
                        var0 = undefined;
                        var0 = var3.bind(var0)(var2);
                        var3 = var0.debug;
                        var2 = var3.warn;
                        var0 = 'Overwriting already set app start end data.';
                        var0 = var2.bind(var3)(var0);
                    case 54:
                        var0 = arg0;
                        _closure1_slot5 = var0;
                        var0 = undefined;
                        return var0;
                }
            };
            var _closure1_slot9 = var3;
            var6 = function() { // Original name: captureAppStart, environment: var1
                var2 = _closure1_slot10;
                var1 = {};
                var0 = true;
                var1.isManual = var0;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
                return var0;
            };
            var2.captureAppStart = var6;
            var2._captureAppStart = var5;
            var2.setRootComponentCreationTimestampMs = var4;
            var4 = function(arg0) { // Original name: _setRootComponentCreationTimestampMs, environment: var1
                var3 = _closure1_slot11;
                var0 = undefined;
                var1 = arg0;
                var1 = var3.bind(var0)(var1);
                var1 = false;
                _closure1_slot8 = var1;
                return var0;
            };
            var2._setRootComponentCreationTimestampMs = var4;
            var2._setAppStartEndData = var3;
            var3 = function() { // Original name: _clearRootComponentCreationTimestampMs, environment: var1
                var0 = undefined;
                _closure1_slot7 = var0;
                return var0;
            };
            var2._clearRootComponentCreationTimestampMs = var3;
            var1 = function() { // Original name: appStartIntegration, environment: var1
                _fun12560: for (var _fun12560_ip = 0;;) switch (_fun12560_ip) {
                    case 0:
                        var0 = undefined;
                        var4 = undefined;
                        var1 = function(arg0) { // Original name: attachAppStartToTransactionEvent, environment: var2
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var3 = _closure1_slot3;
                            var7 = this;
                            var4 = function*() { // Environment: var0
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun12563: for (var _fun12563_ip = 0;;) switch (_fun12563_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun12563_ip = 2397;
                                                continue _fun12563
                                            }
                                        case 12:
                                            var1 = _closure2_slot3;
                                            if (var1) {
                                                _fun12563_ip = 2392;
                                                continue _fun12563
                                            }
                                        case 25:
                                            var1 = _closure2_slot5;
                                            if (var1) {
                                                _fun12563_ip = 84;
                                                continue _fun12563
                                            }
                                        case 32:
                                            var3 = _closure1_slot0;
                                            var2 = _closure1_slot1;
                                            var1 = 1;
                                            var2 = var2[var1];
                                            var1 = undefined;
                                            var1 = var3.bind(var1)(var2);
                                            var3 = var1.debug;
                                            var2 = var3.warn;
                                            var1 = '[AppStart] No first started active root span id recorded. Can not attach app start.';
                                            var1 = var2.bind(var3)(var1);
                                            _fun12563_ip = 2392;
                                            continue _fun12563;
                                        case 84:
                                            var1 = _closure3_slot0;
                                            var2 = var1.contexts;
                                            var _closure3_slot1 = var2;
                                            var4 = undefined;
                                            var14 = null;
                                            var1 = undefined;
                                            if (!(var14 !== var2)) {
                                                _fun12563_ip = 131;
                                                continue _fun12563
                                            }
                                        case 111:
                                            var2 = _closure3_slot1;
                                            var1 = undefined;
                                            if (!(var4 !== var2)) {
                                                _fun12563_ip = 131;
                                                continue _fun12563
                                            }
                                        case 121:
                                            var2 = _closure3_slot1;
                                            var1 = var2.trace;
                                        case 131:
                                            if (var1) {
                                                _fun12563_ip = 184;
                                                continue _fun12563
                                            }
                                        case 134:
                                            var2 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var1 = 1;
                                            var1 = var3[var1];
                                            var1 = var2.bind(var4)(var1);
                                            var3 = var1.debug;
                                            var2 = var3.warn;
                                            var1 = '[AppStart] Transaction event is missing trace context. Can not attach app start.';
                                            var1 = var2.bind(var3)(var1);
                                            _fun12563_ip = 2392;
                                            continue _fun12563;
                                        case 184:
                                            var2 = _closure2_slot5;
                                            var1 = _closure3_slot0;
                                            var1 = var1.contexts;
                                            var1 = var1.trace;
                                            var1 = var1.span_id;
                                            if (!(var2 !== var1)) {
                                                _fun12563_ip = 264;
                                                continue _fun12563
                                            }
                                        case 214:
                                            var2 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var1 = 1;
                                            var1 = var3[var1];
                                            var1 = var2.bind(var4)(var1);
                                            var3 = var1.debug;
                                            var2 = var3.warn;
                                            var1 = '[AppStart] First started active root span id does not match the transaction event span id. Can not attached app start.';
                                            var1 = var2.bind(var3)(var1);
                                            _fun12563_ip = 2392;
                                            continue _fun12563;
                                        case 264:
                                            var3 = _closure1_slot0;
                                            var1 = _closure1_slot1;
                                            var9 = 2;
                                            var1 = var1[var9];
                                            var1 = var3.bind(var4)(var1);
                                            var3 = var1.NATIVE;
                                            var1 = var3.fetchNativeAppStart;
                                            var1 = var1.bind(var3)();
                                            SaveGenerator(address = 307);
                                        case 305:
                                            return var1;
                                        case 307:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                            if (var3) {
                                                _fun12563_ip = 2389;
                                                continue _fun12563
                                            }
                                        case 316:
                                            if (var1) {
                                                _fun12563_ip = 366;
                                                continue _fun12563
                                            }
                                        case 319:
                                            var7 = _closure1_slot0;
                                            var8 = _closure1_slot1;
                                            var3 = 1;
                                            var3 = var8[var3];
                                            var3 = var7.bind(var4)(var3);
                                            var8 = var3.debug;
                                            var7 = var8.warn;
                                            var3 = '[AppStart] Failed to retrieve the app start metrics from the native layer.';
                                            var3 = var7.bind(var8)(var3);
                                            _fun12563_ip = 2392;
                                            continue _fun12563;
                                        case 366:
                                            var3 = var1.has_fetched;
                                            if (var3) {
                                                _fun12563_ip = 2345;
                                                continue _fun12563
                                            }
                                        case 378:
                                            var8 = var1.app_start_timestamp_ms;
                                            if (var8) {
                                                _fun12563_ip = 434;
                                                continue _fun12563
                                            }
                                        case 387:
                                            var7 = _closure1_slot0;
                                            var10 = _closure1_slot1;
                                            var3 = 1;
                                            var3 = var10[var3];
                                            var3 = var7.bind(var4)(var3);
                                            var10 = var3.debug;
                                            var7 = var10.warn;
                                            var3 = '[AppStart] App start timestamp could not be loaded from the native layer.';
                                            var3 = var7.bind(var10)(var3);
                                            _fun12563_ip = 2392;
                                            continue _fun12563;
                                        case 434:
                                            var3 = _closure1_slot5;
                                            var7 = var14 == var3;
                                            var3 = undefined;
                                            if (var7) {
                                                _fun12563_ip = 457;
                                                continue _fun12563
                                            }
                                        case 447:
                                            var7 = _closure1_slot5;
                                            var3 = var7.timestampMs;
                                        case 457:
                                            if (var3) {
                                                _fun12563_ip = 490;
                                                continue _fun12563
                                            }
                                        case 460:
                                            var10 = _closure1_slot0;
                                            var11 = _closure1_slot1;
                                            var7 = 6;
                                            var7 = var11[var7];
                                            var10 = var10.bind(var4)(var7);
                                            var7 = var10.getBundleStartTimestampMs;
                                            var3 = var7.bind(var10)();
                                        case 490:
                                            if (var3) {
                                                _fun12563_ip = 540;
                                                continue _fun12563
                                            }
                                        case 493:
                                            var10 = _closure1_slot0;
                                            var11 = _closure1_slot1;
                                            var7 = 1;
                                            var7 = var11[var7];
                                            var7 = var10.bind(var4)(var7);
                                            var11 = var7.debug;
                                            var10 = var11.warn;
                                            var7 = '[AppStart] Javascript failed to record app start end. `_setAppStartEndData` was not called nor could the bundle start be found.';
                                            var7 = var10.bind(var11)(var7);
                                            _fun12563_ip = 2392;
                                            continue _fun12563;
                                        case 540:
                                            var7 = _closure3_slot0;
                                            var7 = var7.start_timestamp;
                                            if (!var7) {
                                                _fun12563_ip = 587;
                                                continue _fun12563
                                            }
                                        case 553:
                                            var7 = _closure3_slot0;
                                            var7 = var7.start_timestamp;
                                            var15 = 1000;
                                            var10 = var15 * var7;
                                            var7 = 60000;
                                            var10 = var10 - var7;
                                            if (!(!(var8 >= var10))) {
                                                _fun12563_ip = 634;
                                                continue _fun12563
                                            }
                                        case 587:
                                            var11 = _closure1_slot0;
                                            var13 = _closure1_slot1;
                                            var10 = 1;
                                            var10 = var13[var10];
                                            var10 = var11.bind(var4)(var10);
                                            var13 = var10.debug;
                                            var11 = var13.warn;
                                            var10 = '[AppStart] App start timestamp is too far in the past to be used for app start span.';
                                            var10 = var11.bind(var13)(var10);
                                            _fun12563_ip = 2392;
                                            continue _fun12563;
                                        case 634:
                                            var10 = var3 - var8;
                                            if (!(!(var10 >= var7))) {
                                                _fun12563_ip = 2301;
                                                continue _fun12563
                                            }
                                        case 645:
                                            var11 = 0;
                                            if (!(!(var10 < var11))) {
                                                _fun12563_ip = 2250;
                                                continue _fun12563
                                            }
                                        case 654:
                                            var7 = true;
                                            _closure2_slot3 = var7;
                                            var7 = _closure3_slot0;
                                            var12 = var7.contexts;
                                            var12 = var12.trace;
                                            var7 = var7.contexts;
                                            var7 = var7.trace;
                                            var7 = var7.data;
                                            if (var7) {
                                                _fun12563_ip = 698;
                                                continue _fun12563
                                            }
                                        case 696:
                                            var7 = {};
                                        case 698:
                                            var12.data = var7;
                                            var12 = _closure3_slot0;
                                            var7 = var12.contexts;
                                            var7 = var7.trace;
                                            var19 = var7.data;
                                            var13 = _closure1_slot0;
                                            var7 = _closure1_slot1;
                                            var16 = 7;
                                            var16 = var7[var16];
                                            var16 = var13.bind(var4)(var16);
                                            var18 = var16.SEMANTIC_ATTRIBUTE_SENTRY_OP;
                                            var16 = 5;
                                            var17 = var7[var16];
                                            var17 = var13.bind(var4)(var17);
                                            var17 = var17.UI_LOAD;
                                            var19[var18] = var17;
                                            var12 = var12.contexts;
                                            var12 = var12.trace;
                                            var7 = var7[var16];
                                            var7 = var13.bind(var4)(var7);
                                            var7 = var7.UI_LOAD;
                                            var12.op = var7;
                                            var12 = _closure1_slot6;
                                            var13 = _closure1_slot0;
                                            var7 = _closure1_slot1;
                                            var19 = 8;
                                            var7 = var7[var19];
                                            var7 = var13.bind(var4)(var7);
                                            if (var12) {
                                                _fun12563_ip = 841;
                                                continue _fun12563
                                            }
                                        case 833:
                                            var18 = var7.SPAN_ORIGIN_AUTO_APP_START;
                                            _fun12563_ip = 847;
                                            continue _fun12563;
                                        case 841:
                                            var18 = var7.SPAN_ORIGIN_MANUAL_APP_START;
                                        case 847:
                                            var12 = _closure3_slot0;
                                            var7 = var12.contexts;
                                            var7 = var7.trace;
                                            var17 = var7.data;
                                            var20 = _closure1_slot0;
                                            var13 = _closure1_slot1;
                                            var7 = 1;
                                            var13 = var13[var7];
                                            var13 = var20.bind(var4)(var13);
                                            var13 = var13.SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN;
                                            var17[var13] = var18;
                                            var13 = var12.contexts;
                                            var13 = var13.trace;
                                            var13.origin = var18;
                                            var21 = var8 / var15;
                                            var12.start_timestamp = var21;
                                            var8 = var12.spans;
                                            if (var8) {
                                                _fun12563_ip = 939;
                                                continue _fun12563
                                            }
                                        case 935:
                                            var8 = new Array(0);
                                        case 939:
                                            var12.spans = var8;
                                            var8 = _closure3_slot0;
                                            var12 = var8.spans;
                                            var13 = var12.find;
                                            var8 = function(arg0) { // Environment: var6
                                                var0 = arg0;
                                                var1 = var0.op;
                                                var0 = 'ui.load.initial_display';
                                                var0 = var0 === var1;
                                                return var0;
                                            };
                                            var20 = var13.bind(var12)(var8);
                                            if (!var20) {
                                                _fun12563_ip = 998;
                                                continue _fun12563
                                            }
                                        case 973:
                                            var20.start_timestamp = var21;
                                            var17 = _closure1_slot12;
                                            var13 = _closure3_slot0;
                                            var8 = 'time_to_initial_display';
                                            var8 = var17.bind(var4)(var13, var8, var20);
                                        case 998:
                                            var13 = var12.find;
                                            var8 = function(arg0) { // Environment: var6
                                                var0 = arg0;
                                                var1 = var0.op;
                                                var0 = 'ui.load.full_display';
                                                var0 = var0 === var1;
                                                return var0;
                                            };
                                            var20 = var13.bind(var12)(var8);
                                            if (!var20) {
                                                _fun12563_ip = 1041;
                                                continue _fun12563
                                            }
                                        case 1016:
                                            var20.start_timestamp = var21;
                                            var17 = _closure1_slot12;
                                            var13 = _closure3_slot0;
                                            var8 = 'time_to_full_display';
                                            var8 = var17.bind(var4)(var13, var8, var20);
                                        case 1041:
                                            var20 = var3 / var15;
                                            var3 = _closure3_slot0;
                                            var3 = var3.timestamp;
                                            if (!var3) {
                                                _fun12563_ip = 1072;
                                                continue _fun12563
                                            }
                                        case 1058:
                                            var8 = _closure3_slot0;
                                            var8 = var8.timestamp;
                                            var3 = var8 < var20;
                                        case 1072:
                                            if (!var3) {
                                                _fun12563_ip = 1124;
                                                continue _fun12563
                                            }
                                        case 1075:
                                            var8 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var3 = var3[var7];
                                            var3 = var8.bind(var4)(var3);
                                            var13 = var3.debug;
                                            var8 = var13.log;
                                            var3 = '[AppStart] Transaction event timestamp is before app start end. Adjusting transaction event timestamp.';
                                            var3 = var8.bind(var13)(var3);
                                            var3 = _closure3_slot0;
                                            var3.timestamp = var20;
                                        case 1124:
                                            var3 = var1.type;
                                            var8 = 'cold';
                                            if (!(var8 !== var3)) {
                                                _fun12563_ip = 1164;
                                                continue _fun12563
                                            }
                                        case 1139:
                                            var13 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var3 = var3[var16];
                                            var3 = var13.bind(var4)(var3);
                                            var22 = var3.APP_START_WARM;
                                            _fun12563_ip = 1187;
                                            continue _fun12563;
                                        case 1164:
                                            var13 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var3 = var3[var16];
                                            var3 = var13.bind(var4)(var3);
                                            var22 = var3.APP_START_COLD;
                                        case 1187:
                                            var16 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var13 = 6;
                                            var3 = var3[var13];
                                            var17 = var16.bind(var4)(var3);
                                            var16 = var17.createSpanJSON;
                                            var3 = {};
                                            var3.op = var22;
                                            var23 = var1.type;
                                            var22 = 'Warm Start';
                                            if (!(var8 === var23)) {
                                                _fun12563_ip = 1240;
                                                continue _fun12563
                                            }
                                        case 1234:
                                            var22 = 'Cold Start';
                                        case 1240:
                                            var3.description = var22;
                                            var3.start_timestamp = var21;
                                            var3.timestamp = var20;
                                            var20 = _closure3_slot0;
                                            var21 = var20.contexts;
                                            var21 = var21.trace;
                                            var21 = var21.trace_id;
                                            var3.trace_id = var21;
                                            var20 = var20.contexts;
                                            var20 = var20.trace;
                                            var20 = var20.span_id;
                                            var3.parent_span_id = var20;
                                            var3.origin = var18;
                                            var16 = var16.bind(var17)(var3);
                                            var3 = _closure1_slot5;
                                            var14 = var14 == var3;
                                            var3 = undefined;
                                            if (var14) {
                                                _fun12563_ip = 1337;
                                                continue _fun12563
                                            }
                                        case 1327:
                                            var14 = _closure1_slot5;
                                            var3 = var14.endFrames;
                                        case 1337:
                                            if (!var3) {
                                                _fun12563_ip = 1618;
                                                continue _fun12563
                                            }
                                        case 1343:
                                            var3 = _closure1_slot5;
                                            var18 = var3.endFrames;
                                            var3 = var18.totalFrames;
                                            if (!(var3 <= var11)) {
                                                _fun12563_ip = 1386;
                                                continue _fun12563
                                            }
                                        case 1363:
                                            var3 = var18.slowFrames;
                                            if (!(var3 <= var11)) {
                                                _fun12563_ip = 1386;
                                                continue _fun12563
                                            }
                                        case 1373:
                                            var3 = var18.totalFrames;
                                            if (!(!(var3 <= var11))) {
                                                _fun12563_ip = 1548;
                                                continue _fun12563
                                            }
                                        case 1386:
                                            var3 = var16.data;
                                            if (var3) {
                                                _fun12563_ip = 1396;
                                                continue _fun12563
                                            }
                                        case 1394:
                                            var3 = {};
                                        case 1396:
                                            var16.data = var3;
                                            var11 = var16.data;
                                            var3 = var18.totalFrames;
                                            var11['frames.total'] = var3;
                                            var11 = var16.data;
                                            var3 = var18.slowFrames;
                                            var11['frames.slow'] = var3;
                                            var11 = var16.data;
                                            var3 = var18.frozenFrames;
                                            var11['frames.frozen'] = var3;
                                            var11 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var3 = var3[var7];
                                            var3 = var11.bind(var4)(var3);
                                            var17 = var3.debug;
                                            var14 = var17.log;
                                            var11 = {};
                                            var3 = var16.span_id;
                                            var11.spanId = var3;
                                            var3 = {};
                                            var20 = var18.totalFrames;
                                            var3.total = var20;
                                            var20 = var18.slowFrames;
                                            var3.slow = var20;
                                            var18 = var18.frozenFrames;
                                            var3.frozen = var18;
                                            var11.frameData = var3;
                                            var3 = '[AppStart] Attached frame data to span.';
                                            var3 = var14.bind(var17)(var3, var11);
                                            _fun12563_ip = 1618;
                                            continue _fun12563;
                                        case 1548:
                                            var11 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var3 = var3[var7];
                                            var3 = var11.bind(var4)(var3);
                                            var14 = var3.debug;
                                            var11 = var14.warn;
                                            var20 = var16.span_id;
                                            var3 = global;
                                            var3 = var3.HermesInternal;
                                            var18 = var3.concat;
                                            var17 = '[AppStart] Detected zero slow or frozen frames. Not adding measurements to spanId (';
                                            var3 = ').';
                                            var3 = var18.bind(var17)(var20, var3);
                                            var3 = var11.bind(var14)(var3);
                                        case 1618:
                                            var14 = _closure1_slot7;
                                            var11 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var3 = var3[var13];
                                            var11 = var11.bind(var4)(var3);
                                            var3 = var11.getBundleStartTimestampMs;
                                            var3 = var3.bind(var11)();
                                            var17 = undefined;
                                            if (!var3) {
                                                _fun12563_ip = 1917;
                                                continue _fun12563
                                            }
                                        case 1657:
                                            var18 = var3 / var15;
                                            var3 = var16.start_timestamp;
                                            if (!(!(var18 < var3))) {
                                                _fun12563_ip = 1876;
                                                continue _fun12563
                                            }
                                        case 1674:
                                            var11 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            if (var14) {
                                                _fun12563_ip = 1784;
                                                continue _fun12563
                                            }
                                        case 1685:
                                            var20 = var3[var7];
                                            var20 = var11.bind(var4)(var20);
                                            var22 = var20.debug;
                                            var21 = var22.warn;
                                            var20 = 'Missing the root component first constructor call timestamp.';
                                            var20 = var21.bind(var22)(var20);
                                            var20 = var3[var13];
                                            var22 = var11.bind(var4)(var20);
                                            var21 = var22.createChildSpanJSON;
                                            var20 = {};
                                            var23 = 'JS Bundle Execution Start';
                                            var20.description = var23;
                                            var20.start_timestamp = var18;
                                            var20.timestamp = var18;
                                            var23 = var3[var19];
                                            var23 = var11.bind(var4)(var23);
                                            var23 = var23.SPAN_ORIGIN_AUTO_APP_START;
                                            var20.origin = var23;
                                            var17 = var21.bind(var22)(var16, var20);
                                            _fun12563_ip = 1917;
                                            continue _fun12563;
                                        case 1784:
                                            var3 = var3[var13];
                                            var13 = var11.bind(var4)(var3);
                                            var11 = var13.createChildSpanJSON;
                                            var3 = {};
                                            var20 = 'JS Bundle Execution Before React Root';
                                            var3.description = var20;
                                            var3.start_timestamp = var18;
                                            var14 = var14 / var15;
                                            var3.timestamp = var14;
                                            var14 = _closure1_slot8;
                                            var18 = _closure1_slot0;
                                            var15 = _closure1_slot1;
                                            var15 = var15[var19];
                                            var15 = var18.bind(var4)(var15);
                                            if (var14) {
                                                _fun12563_ip = 1857;
                                                continue _fun12563
                                            }
                                        case 1849:
                                            var14 = var15.SPAN_ORIGIN_AUTO_APP_START;
                                            _fun12563_ip = 1863;
                                            continue _fun12563;
                                        case 1857:
                                            var14 = var15.SPAN_ORIGIN_MANUAL_APP_START;
                                        case 1863:
                                            var3.origin = var14;
                                            var17 = var11.bind(var13)(var16, var3);
                                            _fun12563_ip = 1917;
                                            continue _fun12563;
                                        case 1876:
                                            var11 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var3 = var3[var7];
                                            var3 = var11.bind(var4)(var3);
                                            var13 = var3.debug;
                                            var11 = var13.warn;
                                            var3 = 'Bundle start timestamp is before the app start span start timestamp. Skipping JS execution span.';
                                            var3 = var11.bind(var13)(var3);
                                            var17 = undefined;
                                        case 1917:
                                            var14 = new Array(1);
                                            var14[0] = var16;
                                            var13 = var14.concat;
                                            var11 = _closure1_slot2;
                                            if (var17) {
                                                _fun12563_ip = 1943;
                                                continue _fun12563
                                            }
                                        case 1937:
                                            var3 = new Array(0);
                                            _fun12563_ip = 1954;
                                            continue _fun12563;
                                        case 1943:
                                            var15 = new Array(1);
                                            var15[0] = var17;
                                            var3 = var15;
                                        case 1954:
                                            var11 = var11.bind(var4)(var3);
                                            var3 = _closure1_slot2;
                                            var15 = var1.spans;
                                            var6 = function(arg0, arg1) { // Original name: convertNativeSpansToSpanJSON, environment: var6
                                                var3 = arg1;
                                                var1 = arg0;
                                                var _closure6_slot0 = var1;
                                                var2 = var3.filter;
                                                var1 = function(arg0) { // Environment: var0
                                                    var0 = arg0;
                                                    var1 = var0.start_timestamp_ms;
                                                    var0 = 1000;
                                                    var1 = var1 / var0;
                                                    var0 = _closure6_slot0;
                                                    var0 = var0.start_timestamp;
                                                    var0 = var1 >= var0;
                                                    return var0;
                                                };
                                                var2 = var2.bind(var3)(var1);
                                                var1 = var2.map;
                                                var0 = function(arg0) { // Environment: var0
                                                    _fun12568: for (var _fun12568_ip = 0;;) switch (_fun12568_ip) {
                                                        case 0:
                                                            var8 = arg0;
                                                            var1 = var8.description;
                                                            var0 = 'UIKit init';
                                                            if (!(var0 !== var1)) {
                                                                _fun12568_ip = 163;
                                                                continue _fun12568
                                                            }
                                                        case 21:
                                                            var9 = _closure1_slot0;
                                                            var10 = _closure1_slot1;
                                                            var0 = 10;
                                                            var0 = var10[var0];
                                                            var7 = undefined;
                                                            var2 = var9.bind(var7)(var0);
                                                            var1 = var2.setMainThreadInfo;
                                                            var0 = 6;
                                                            var0 = var10[var0];
                                                            var5 = var9.bind(var7)(var0);
                                                            var4 = var5.createChildSpanJSON;
                                                            var3 = _closure6_slot0;
                                                            var0 = {};
                                                            var6 = var8.description;
                                                            var0.description = var6;
                                                            var6 = var8.start_timestamp_ms;
                                                            var11 = 1000;
                                                            var6 = var6 / var11;
                                                            var0.start_timestamp = var6;
                                                            var6 = var8.end_timestamp_ms;
                                                            var6 = var6 / var11;
                                                            var0.timestamp = var6;
                                                            var6 = 8;
                                                            var6 = var10[var6];
                                                            var6 = var9.bind(var7)(var6);
                                                            var6 = var6.SPAN_ORIGIN_AUTO_APP_START;
                                                            var0.origin = var6;
                                                            var0 = var4.bind(var5)(var3, var0);
                                                            var0 = var1.bind(var2)(var0);
                                                            _fun12568_ip = 437;
                                                            continue _fun12568;
                                                        case 163:
                                                            var6 = _closure1_slot0;
                                                            var1 = _closure1_slot1;
                                                            var2 = 10;
                                                            var2 = var1[var2];
                                                            var10 = undefined;
                                                            var3 = var6.bind(var10)(var2);
                                                            var2 = var3.setMainThreadInfo;
                                                            var7 = _closure6_slot0;
                                                            var4 = 6;
                                                            var1 = var1[var4];
                                                            var6 = var6.bind(var10)(var1);
                                                            var1 = var6.getBundleStartTimestampMs;
                                                            var12 = var1.bind(var6)();
                                                            if (!var12) {
                                                                _fun12568_ip = 236;
                                                                continue _fun12568
                                                            }
                                                        case 226:
                                                            var1 = var8.end_timestamp_ms;
                                                            if (!(!(var12 < var1))) {
                                                                _fun12568_ip = 338;
                                                                continue _fun12568
                                                            }
                                                        case 236:
                                                            var13 = _closure1_slot0;
                                                            var14 = _closure1_slot1;
                                                            var1 = var14[var4];
                                                            var9 = var13.bind(var10)(var1);
                                                            var6 = var9.createChildSpanJSON;
                                                            var1 = {};
                                                            var11 = 'UIKit Init';
                                                            var1.description = var11;
                                                            var11 = var8.start_timestamp_ms;
                                                            var15 = 1000;
                                                            var11 = var11 / var15;
                                                            var1.start_timestamp = var11;
                                                            var11 = var8.end_timestamp_ms;
                                                            var11 = var11 / var15;
                                                            var1.timestamp = var11;
                                                            var11 = 8;
                                                            var11 = var14[var11];
                                                            var11 = var13.bind(var10)(var11);
                                                            var11 = var11.SPAN_ORIGIN_AUTO_APP_START;
                                                            var1.origin = var11;
                                                            var1 = var6.bind(var9)(var7, var1);
                                                            _fun12568_ip = 432;
                                                            continue _fun12568;
                                                        case 338:
                                                            var9 = _closure1_slot0;
                                                            var11 = _closure1_slot1;
                                                            var4 = var11[var4];
                                                            var6 = var9.bind(var10)(var4);
                                                            var5 = var6.createChildSpanJSON;
                                                            var4 = {};
                                                            var13 = 'UIKit Init to JS Exec Start';
                                                            var4.description = var13;
                                                            var13 = var8.start_timestamp_ms;
                                                            var8 = 1000;
                                                            var13 = var13 / var8;
                                                            var4.start_timestamp = var13;
                                                            var8 = var12 / var8;
                                                            var4.timestamp = var8;
                                                            var8 = 8;
                                                            var8 = var11[var8];
                                                            var8 = var9.bind(var10)(var8);
                                                            var8 = var8.SPAN_ORIGIN_AUTO_APP_START;
                                                            var4.origin = var8;
                                                            var1 = var5.bind(var6)(var7, var4);
                                                        case 432:
                                                            var0 = var2.bind(var3)(var1);
                                                        case 437:
                                                            return var0;
                                                    }
                                                };
                                                var0 = var1.bind(var2)(var0);
                                                return var0;
                                            };
                                            var6 = var6.bind(var4)(var16, var15);
                                            var6 = var3.bind(var4)(var6);
                                            var14 = var13.bind(var14)(var11, var6);
                                            var11 = var12.push;
                                            var6 = var11.apply;
                                            var3 = var3.bind(var4)(var14);
                                            var3 = var6.bind(var11)(var12, var3);
                                            var6 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var3 = var3[var7];
                                            var3 = var6.bind(var4)(var3);
                                            var13 = var3.debug;
                                            var12 = var13.log;
                                            var3 = global;
                                            var11 = var3.JSON;
                                            var6 = var11.stringify;
                                            var11 = var6.bind(var11)(var14, var4, var9);
                                            var6 = '[AppStart] Added app start spans to transaction event.';
                                            var6 = var12.bind(var13)(var6, var11);
                                            var6 = var1.type;
                                            if (!(var8 !== var6)) {
                                                _fun12563_ip = 2110;
                                                continue _fun12563
                                            }
                                        case 2082:
                                            var8 = _closure1_slot0;
                                            var11 = _closure1_slot1;
                                            var6 = 9;
                                            var6 = var11[var6];
                                            var6 = var8.bind(var4)(var6);
                                            var6 = var6.APP_START_WARM;
                                            _fun12563_ip = 2136;
                                            continue _fun12563;
                                        case 2110:
                                            var11 = _closure1_slot0;
                                            var12 = _closure1_slot1;
                                            var8 = 9;
                                            var8 = var12[var8];
                                            var8 = var11.bind(var4)(var8);
                                            var6 = var8.APP_START_COLD;
                                        case 2136:
                                            var8 = {};
                                            var8.value = var10;
                                            var10 = 'millisecond';
                                            var8.unit = var10;
                                            var11 = _closure3_slot0;
                                            var10 = var11.measurements;
                                            if (var10) {
                                                _fun12563_ip = 2166;
                                                continue _fun12563
                                            }
                                        case 2164:
                                            var10 = {};
                                        case 2166:
                                            var11.measurements = var10;
                                            var5 = _closure3_slot0;
                                            var5 = var5.measurements;
                                            var5[var6] = var8;
                                            var6 = _closure1_slot0;
                                            var5 = _closure1_slot1;
                                            var5 = var5[var7];
                                            var5 = var6.bind(var4)(var5);
                                            var7 = var5.debug;
                                            var6 = var7.log;
                                            var5 = var3.JSON;
                                            var3 = var5.stringify;
                                            var5 = var3.bind(var5)(var8, var4, var9);
                                            var3 = '[AppStart] Added app start measurement to transaction event.';
                                            var3 = var6.bind(var7)(var3, var5);
                                            _fun12563_ip = 2392;
                                            continue _fun12563;
                                        case 2250:
                                            var5 = _closure1_slot0;
                                            var6 = _closure1_slot1;
                                            var3 = 1;
                                            var3 = var6[var3];
                                            var3 = var5.bind(var4)(var3);
                                            var7 = var3.debug;
                                            var6 = var7.warn;
                                            var5 = '[AppStart] Last recorded app start end timestamp is before the app start timestamp.';
                                            var3 = 'This is usually caused by missing `Sentry.wrap(RootComponent)` call.';
                                            var3 = var6.bind(var7)(var5, var3);
                                            _fun12563_ip = 2392;
                                            continue _fun12563;
                                        case 2301:
                                            var5 = _closure1_slot0;
                                            var6 = _closure1_slot1;
                                            var3 = 1;
                                            var3 = var6[var3];
                                            var3 = var5.bind(var4)(var3);
                                            var6 = var3.debug;
                                            var5 = var6.warn;
                                            var3 = '[AppStart] App start duration is over a minute long, not adding app start span.';
                                            var3 = var5.bind(var6)(var3);
                                            _fun12563_ip = 2392;
                                            continue _fun12563;
                                        case 2345:
                                            var3 = _closure1_slot0;
                                            var5 = _closure1_slot1;
                                            var2 = 1;
                                            var2 = var5[var2];
                                            var2 = var3.bind(var4)(var2);
                                            var4 = var2.debug;
                                            var3 = var4.warn;
                                            var2 = '[AppStart] Measured app start metrics were already reported from the native layer.';
                                            var2 = var3.bind(var4)(var2);
                                            _fun12563_ip = 2392;
                                            continue _fun12563;
                                        case 2389:
                                            return var1;
                                        case 2392:
                                            var1 = undefined;
                                            return var1;
                                        case 2397:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var8 = undefined;
                            var6 = undefined;
                            var5 = undefined;
                            var0 = var8[var3](var7, var6, var5, var4, var3);
                            return var0;
                        };
                        var _closure2_slot8 = var1;
                        var1 = arguments.length;
                        var3 = 0;
                        if (!(var1 > var3)) {
                            _fun12560_ip = 32;
                            continue _fun12560
                        }
                    case 24:
                        var1 = arguments[var3];
                        if (!(var0 === var1)) {
                            _fun12560_ip = 36;
                            continue _fun12560
                        }
                    case 32:
                        var1 = {};
                        _fun12560_ip = 40;
                        continue _fun12560;
                    case 36:
                        var1 = arguments[var3];
                    case 40:
                        var3 = var1.standalone;
                        var1 = var0 !== var3;
                        if (!var1) {
                            _fun12560_ip = 56;
                            continue _fun12560
                        }
                    case 53:
                        var1 = var3;
                    case 56:
                        var _closure2_slot0 = var1;
                        var _closure2_slot1 = var0;
                        var1 = true;
                        var _closure2_slot2 = var1;
                        var1 = false;
                        var _closure2_slot3 = var1;
                        var _closure2_slot4 = var1;
                        var _closure2_slot5 = var0;
                        var0 = function(arg0) { // Original name: recordFirstStartedActiveRootSpanId, environment: var2
                            _fun12569: for (var _fun12569_ip = 0;;) switch (_fun12569_ip) {
                                case 0:
                                    var3 = arg0;
                                    var1 = _closure2_slot5;
                                    if (var1) {
                                        _fun12569_ip = 77;
                                        continue _fun12569
                                    }
                                case 13:
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var1 = 4;
                                    var1 = var2[var1];
                                    var2 = undefined;
                                    var4 = var4.bind(var2)(var1);
                                    var1 = var4.isRootSpan;
                                    var1 = var1.bind(var4)(var3);
                                    if (!var1) {
                                        _fun12569_ip = 77;
                                        continue _fun12569
                                    }
                                case 52:
                                    var1 = _closure2_slot7;
                                    var0 = var3.spanContext;
                                    var0 = var0.bind(var3)();
                                    var0 = var0.spanId;
                                    var0 = var1.bind(var2)(var0);
                                case 77:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var _closure2_slot6 = var0;
                        var1 = function(arg0) { // Original name: setFirstStartedActiveRootSpanId, environment: var2
                            var0 = arg0;
                            _closure2_slot5 = var0;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 1;
                            var2 = var2[var0];
                            var0 = undefined;
                            var2 = var3.bind(var0)(var2);
                            var4 = var2.debug;
                            var3 = var4.log;
                            var2 = _closure2_slot5;
                            var1 = '[AppStart] First started active root span id recorded.';
                            var1 = var3.bind(var4)(var1, var2);
                            return var0;
                        };
                        var _closure2_slot7 = var1;
                        var0 = {};
                        var3 = _closure1_slot4;
                        var0.name = var3;
                        var3 = function(arg0) { // Original name: setup, environment: var2
                            _fun12571: for (var _fun12571_ip = 0;;) switch (_fun12571_ip) {
                                case 0:
                                    var3 = arg0;
                                    _closure2_slot1 = var3;
                                    var1 = var3.getOptions;
                                    var1 = var1.bind(var3)();
                                    var1 = var1.enableAppStartTracking;
                                    if (var1) {
                                        _fun12571_ip = 82;
                                        continue _fun12571
                                    }
                                case 29:
                                    var1 = false;
                                    _closure2_slot2 = var1;
                                    var4 = _closure1_slot0;
                                    var2 = _closure1_slot1;
                                    var1 = 1;
                                    var2 = var2[var1];
                                    var1 = undefined;
                                    var1 = var4.bind(var1)(var2);
                                    var4 = var1.debug;
                                    var2 = var4.warn;
                                    var1 = '[AppStart] App start tracking is disabled.';
                                    var1 = var2.bind(var4)(var1);
                                case 82:
                                    var2 = var3.on;
                                    var1 = _closure2_slot6;
                                    var0 = 'spanStart';
                                    var0 = var2.bind(var3)(var0, var1);
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0.setup = var3;
                        var3 = function(arg0) { // Original name: afterAllSetup, environment: var2
                            _fun12572: for (var _fun12572_ip = 0;;) switch (_fun12572_ip) {
                                case 0:
                                    var0 = _closure2_slot4;
                                    if (var0) {
                                        _fun12572_ip = 89;
                                        continue _fun12572
                                    }
                                case 10:
                                    var0 = true;
                                    _closure2_slot4 = var0;
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot1;
                                    var0 = 3;
                                    var0 = var1[var0];
                                    var1 = undefined;
                                    var3 = var2.bind(var1)(var0);
                                    var2 = var3.getAppRegistryIntegration;
                                    var0 = arg0;
                                    var2 = var2.bind(var3)(var0);
                                    var0 = null;
                                    var0 = var0 === var2;
                                    if (var0) {
                                        _fun12572_ip = 68;
                                        continue _fun12572
                                    }
                                case 64:
                                    var0 = var1 === var2;
                                case 68:
                                    if (var0) {
                                        _fun12572_ip = 89;
                                        continue _fun12572
                                    }
                                case 71:
                                    var1 = var2.onRunApplication;
                                    var0 = function() { // Environment: var0
                                        _fun12573: for (var _fun12573_ip = 0;;) switch (_fun12573_ip) {
                                            case 0:
                                                var2 = _closure2_slot3;
                                                var4 = _closure1_slot0;
                                                var3 = _closure1_slot1;
                                                var0 = 1;
                                                var3 = var3[var0];
                                                var0 = undefined;
                                                var3 = var4.bind(var0)(var3);
                                                var4 = var3.debug;
                                                var3 = var4.log;
                                                if (var2) {
                                                    _fun12573_ip = 59;
                                                    continue _fun12573
                                                }
                                            case 46:
                                                var2 = '[AppStartIntegration] Waiting for initial app start was flush, before updating based on runApplication call.';
                                                var2 = var3.bind(var4)(var2);
                                                _fun12573_ip = 80;
                                                continue _fun12573;
                                            case 59:
                                                var2 = '[AppStartIntegration] Resetting app start data flushed flag based on runApplication call.';
                                                var2 = var3.bind(var4)(var2);
                                                var2 = false;
                                                _closure2_slot3 = var2;
                                                _closure2_slot5 = var0;
                                            case 80:
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                case 89:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var0.afterAllSetup = var3;
                        var3 = function(arg0) { // Original name: processEvent, environment: var2
                            var1 = arg0;
                            var _closure3_slot0 = var1;
                            var2 = _closure1_slot3;
                            var3 = function*() { // Environment: var0
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun12576: for (var _fun12576_ip = 0;;) switch (_fun12576_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun12576_ip = 91;
                                                continue _fun12576
                                            }
                                        case 7:
                                            var3 = _closure2_slot2;
                                            var2 = !var3;
                                            if (!var3) {
                                                _fun12576_ip = 24;
                                                continue _fun12576
                                            }
                                        case 20:
                                            var2 = _closure2_slot0;
                                        case 24:
                                            if (var2) {
                                                _fun12576_ip = 47;
                                                continue _fun12576
                                            }
                                        case 27:
                                            var3 = _closure3_slot0;
                                            var4 = var3.type;
                                            var3 = 'transaction';
                                            var2 = var3 !== var4;
                                        case 47:
                                            if (var2) {
                                                _fun12576_ip = 81;
                                                continue _fun12576
                                            }
                                        case 50:
                                            var3 = _closure2_slot8;
                                            var2 = _closure3_slot0;
                                            var1 = undefined;
                                            var1 = var3.bind(var1)(var2);
                                            SaveGenerator(address = 72);
                                        case 70:
                                            return var1;
                                        case 72:
                                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                                            if (!var2) {
                                                _fun12576_ip = 81;
                                                continue _fun12576
                                            }
                                        case 78:
                                            return var1;
                                        case 81:
                                            var1 = _closure3_slot0;
                                            return var1;
                                        case 91:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var7 = undefined;
                            var6 = undefined;
                            var5 = undefined;
                            var4 = undefined;
                            var0 = var7[var2](var6, var5, var4, var3, var2);
                            return var0;
                        };
                        var0.processEvent = var3;
                        var2 = function() { // Original name: captureStandaloneAppStart, environment: var2
                            var3 = _closure1_slot3;
                            var7 = this;
                            var4 = function*() { // Environment: var0
                                var0 = function*() { // Original name: ?anon_0_, environment: var0
                                    _fun12579: for (var _fun12579_ip = 0;;) switch (_fun12579_ip) {
                                        case 0:
                                            StartGenerator();
                                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                            if (var1) {
                                                _fun12579_ip = 769;
                                                continue _fun12579
                                            }
                                        case 10:
                                            var1 = undefined;
                                            var8 = undefined;
                                            var3 = _closure2_slot1;
                                            if (var3) {
                                                _fun12579_ip = 53;
                                                continue _fun12579
                                            }
                                        case 24:
                                            var3 = global;
                                            var5 = var3.console;
                                            var4 = var5.warn;
                                            var3 = '[AppStart] Could not capture App Start, missing client, call `Sentry.init` first.';
                                            var3 = var4.bind(var5)(var3);
                                            _fun12579_ip = 766;
                                            continue _fun12579;
                                        case 53:
                                            var4 = _closure2_slot0;
                                            var6 = _closure1_slot0;
                                            var5 = _closure1_slot1;
                                            var7 = 1;
                                            var5 = var5[var7];
                                            var5 = var6.bind(var1)(var5);
                                            var6 = var5.debug;
                                            var5 = var6.log;
                                            if (var4) {
                                                _fun12579_ip = 110;
                                                continue _fun12579
                                            }
                                        case 94:
                                            var4 = '[AppStart] App start tracking is enabled. App start will be added to the first transaction as a child span.';
                                            var4 = var5.bind(var6)(var4);
                                            _fun12579_ip = 766;
                                            continue _fun12579;
                                        case 110:
                                            var4 = '[AppStart] App start tracking standalone root span (transaction).';
                                            var4 = var5.bind(var6)(var4);
                                            var4 = _closure1_slot5;
                                            var9 = null;
                                            var5 = var9 == var4;
                                            var4 = undefined;
                                            if (var5) {
                                                _fun12579_ip = 146;
                                                continue _fun12579
                                            }
                                        case 136:
                                            var5 = _closure1_slot5;
                                            var4 = var5.endFrames;
                                        case 146:
                                            if (var4) {
                                                _fun12579_ip = 416;
                                                continue _fun12579
                                            }
                                        case 152:
                                            var5 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var6 = 2;
                                            var4 = var4[var6];
                                            var4 = var5.bind(var1)(var4);
                                            var4 = var4.NATIVE;
                                            var4 = var4.enableNative;
                                            if (!var4) {
                                                _fun12579_ip = 416;
                                                continue _fun12579
                                            }
                                        case 190: // try_start_0
                                            var5 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var4 = var4[var6];
                                            var4 = var5.bind(var1)(var4);
                                            var5 = var4.NATIVE;
                                            var4 = var5.fetchNativeFrames;
                                            var4 = var4.bind(var5)();
                                            SaveGenerator(address = 227);
                                        case 225:
                                            return var4;
                                        case 227:
                                            ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                                            if (var5) {
                                                _fun12579_ip = 371;
                                                continue _fun12579
                                            }
                                        case 236:
                                            var8 = var4;
                                            var6 = _closure1_slot0;
                                            var5 = _closure1_slot1;
                                            var5 = var5[var7];
                                            var5 = var6.bind(var1)(var5);
                                            var10 = var5.debug;
                                            var6 = var10.log;
                                            var5 = '[AppStart] Captured end frames for standalone app start.';
                                            var5 = var6.bind(var10)(var5, var4);
                                            var6 = _closure1_slot5;
                                            var9 = var9 == var6;
                                            var6 = undefined;
                                            if (var9) {
                                                _fun12579_ip = 302;
                                                continue _fun12579
                                            }
                                        case 292:
                                            var9 = _closure1_slot5;
                                            var6 = var9.timestampMs;
                                        case 302:
                                            var5 = var6;
                                            if (var6) {
                                                _fun12579_ip = 345;
                                                continue _fun12579
                                            }
                                        case 308:
                                            var9 = _closure1_slot0;
                                            var6 = _closure1_slot1;
                                            var6 = var6[var7];
                                            var9 = var9.bind(var1)(var6);
                                            var6 = var9.timestampInSeconds;
                                            var9 = var6.bind(var9)();
                                            var6 = 1000;
                                            var5 = var6 * var9;
                                        case 345:
                                            var9 = var5;
                                            var6 = _closure1_slot9;
                                            var5 = {};
                                            var5.timestampMs = var9;
                                            var5.endFrames = var8;
                                            var5 = var6.bind(var1)(var5);
                                        case 369: // try_end0
                                            _fun12579_ip = 416;
                                            continue _fun12579;
                                        case 371:
                                            return var4;
                                        case 374: // catch_target0
                                            CatchBlockStart(arg_register = 8);
                                            var5 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var4 = var4[var7];
                                            var4 = var5.bind(var1)(var4);
                                            var6 = var4.debug;
                                            var5 = var6.log;
                                            var4 = '[AppStart] Failed to capture frames for standalone app start.';
                                            var4 = var5.bind(var6)(var4, var8);
                                        case 416:
                                            var5 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var6 = var4[var7];
                                            var9 = var5.bind(var1)(var6);
                                            var8 = var9.startInactiveSpan;
                                            var6 = {
                                                'forceTransaction': true,
                                                'name': 'App Start'
                                            };
                                            var10 = 5;
                                            var10 = var4[var10];
                                            var10 = var5.bind(var1)(var10);
                                            var10 = var10.UI_LOAD;
                                            var6.op = var10;
                                            var8 = var8.bind(var9)(var6);
                                            var4 = var4[var7];
                                            var4 = var5.bind(var1)(var4);
                                            var4 = var4.SentryNonRecordingSpan;
                                            var4 = var8 instanceof var4;
                                            if (var4) {
                                                _fun12579_ip = 766;
                                                continue _fun12579
                                            }
                                        case 501:
                                            var5 = _closure1_slot0;
                                            var6 = _closure1_slot1;
                                            var4 = 4;
                                            var9 = var6[var4];
                                            var11 = var5.bind(var1)(var9);
                                            var10 = var11.setEndTimeValue;
                                            var9 = var6[var7];
                                            var12 = var5.bind(var1)(var9);
                                            var9 = var12.timestampInSeconds;
                                            var9 = var9.bind(var12)();
                                            var9 = var10.bind(var11)(var8, var9);
                                            var11 = _closure2_slot1;
                                            var10 = var11.emit;
                                            var9 = 'spanEnd';
                                            var9 = var10.bind(var11)(var9, var8);
                                            var4 = var6[var4];
                                            var5 = var5.bind(var1)(var4);
                                            var4 = var5.convertSpanToTransaction;
                                            var5 = var4.bind(var5)(var8);
                                            if (var5) {
                                                _fun12579_ip = 641;
                                                continue _fun12579
                                            }
                                        case 597:
                                            var6 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var4 = var4[var7];
                                            var4 = var6.bind(var1)(var4);
                                            var9 = var4.debug;
                                            var6 = var9.warn;
                                            var4 = '[AppStart] Failed to convert App Start span to transaction.';
                                            var4 = var6.bind(var9)(var4);
                                            _fun12579_ip = 766;
                                            continue _fun12579;
                                        case 641:
                                            var2 = _closure2_slot8;
                                            var2 = var2.bind(var1)(var5);
                                            SaveGenerator(address = 654);
                                        case 652:
                                            return var2;
                                        case 654:
                                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                                            if (var4) {
                                                _fun12579_ip = 763;
                                                continue _fun12579
                                            }
                                        case 660:
                                            var4 = var5.spans;
                                            if (!var4) {
                                                _fun12579_ip = 766;
                                                continue _fun12579
                                            }
                                        case 669:
                                            var4 = var5.spans;
                                            var6 = var4.length;
                                            var4 = 0;
                                            if (!(var4 !== var6)) {
                                                _fun12579_ip = 766;
                                                continue _fun12579
                                            }
                                        case 686:
                                            var6 = _closure1_slot0;
                                            var4 = _closure1_slot1;
                                            var4 = var4[var7];
                                            var6 = var6.bind(var1)(var4);
                                            var4 = var6.getCapturedScopesOnSpan;
                                            var4 = var4.bind(var6)(var8);
                                            var4 = var4.scope;
                                            if (var4) {
                                                _fun12579_ip = 750;
                                                continue _fun12579
                                            }
                                        case 723:
                                            var6 = _closure1_slot0;
                                            var3 = _closure1_slot1;
                                            var3 = var3[var7];
                                            var6 = var6.bind(var1)(var3);
                                            var3 = var6.getCurrentScope;
                                            var4 = var3.bind(var6)();
                                        case 750:
                                            var3 = var4.captureEvent;
                                            var3 = var3.bind(var4)(var5);
                                            _fun12579_ip = 766;
                                            continue _fun12579;
                                        case 763:
                                            return var2;
                                        case 766:
                                            return var1;
                                        case 769:
                                            return var0;
                                    }
                                };
                                return var0;
                            };
                            var8 = undefined;
                            var6 = undefined;
                            var5 = undefined;
                            var0 = var8[var3](var7, var6, var5, var4, var3);
                            return var0;
                        };
                        var0.captureStandaloneAppStart = var2;
                        var0.setFirstStartedActiveRootSpanId = var1;
                        return var0;
                }
            };
            var2.appStartIntegration = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [65, 817, 998, 1152, 1118, 1154, 1155, 1156, 1157, 1158, 1159]);