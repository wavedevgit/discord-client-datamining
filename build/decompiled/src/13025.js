// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun100023: for (var _fun100023_ip = 0;;) switch (_fun100023_ip) {
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
            case 72: // try_end0
                _fun100023_ip = 76;
                continue _fun100023;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun100026: for (var _fun100026_ip = 0;;) switch (_fun100026_ip) {
            case 0:
                var4 = arg0;
                var6 = arg2;
                var _closure2_slot0 = var6;
                var5 = _closure1_slot7;
                var3 = _closure1_slot6;
                var0 = 1;
                var2 = 3;
                var7 = var0 & var2;
                var0 = var4;
                if (!var7) {
                    _fun100026_ip = 44;
                    continue _fun100026
                }
            case 39:
                var0 = var4.prototype;
            case 44:
                var4 = undefined;
                var3 = var3.bind(var4)(var0);
                var0 = arg1;
                var4 = var5.bind(var4)(var3, var0, var6);
                var _closure2_slot1 = var4;
                var0 = 2;
                var2 = var0 & var2;
                var0 = var4;
                if (!var2) {
                    _fun100026_ip = 99;
                    continue _fun100026
                }
            case 78:
                var3 = 'function';
                var2 = typeof var4;
                var0 = var4;
                if (!(var3 === var2)) {
                    _fun100026_ip = 99;
                    continue _fun100026
                }
            case 92:
                var0 = function(arg0) { // Environment: var1
                    var3 = _closure2_slot1;
                    var2 = var3.apply;
                    var1 = _closure2_slot0;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var1, var0);
                    return var0;
                };
            case 99:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = global;
    var8 = var3.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var3 = true;
    var6.value = var3;
    var3 = '__esModule';
    var3 = var7.bind(var8)(var2, var3, var6);
    var3 = 16;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.BaseClient;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun100029: for (var _fun100029_ip = 0;;) switch (_fun100029_ip) {
                case 0:
                    var3 = this;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var0 = var0.bind(var2)(var3, var1);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var0 = 7;
                    var0 = var6[var0];
                    var5 = var5.bind(var2)(var0);
                    var0 = var5.registerSpanErrorInstrumentation;
                    var0 = var0.bind(var5)();
                    var8 = new Array(1);
                    var0 = arg0;
                    var8[0] = var0;
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun100029_ip = 103;
                        continue _fun100029
                    }
                case 90:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun100029_ip = 137;
                    continue _fun100029;
                case 103:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 137:
                    var0 = var1.bind(var2)(var3, var0);
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot8;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = 'eventFromException';
        var4.key = var0;
        var0 = function arg0, arg1() {
            var7 = this;
            var4 = _closure1_slot0;
            var5 = _closure1_slot1;
            var0 = 8;
            var1 = var5[var0];
            var3 = undefined;
            var2 = var4.bind(var3)(var1);
            var1 = var2.resolvedSyncPromise;
            var0 = var5[var0];
            var6 = var4.bind(var3)(var0);
            var5 = var6.eventFromUnknownInput;
            var0 = var7._options;
            var10 = var0.stackParser;
            var9 = arg0;
            var8 = arg1;
            var12 = var6;
            var11 = var7;
            var0 = var12[var5](var11, var10, var9, var8, var7);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(10);
        var0[0] = var4;
        var4 = {};
        var6 = 'eventFromMessage';
        var4.key = var6;
        var6 = function arg0() {
            _fun100031: for (var _fun100031_ip = 0;;) switch (_fun100031_ip) {
                case 0:
                    var0 = this;
                    var5 = undefined;
                    var2 = undefined;
                    var3 = arguments.length;
                    var1 = 1;
                    var3 = var3 > var1;
                    var4 = 'info';
                    var8 = var4;
                    if (!var3) {
                        _fun100031_ip = 42;
                        continue _fun100031
                    }
                case 27:
                    var3 = arguments[var1];
                    var8 = var4;
                    if (!(var5 !== var3)) {
                        _fun100031_ip = 42;
                        continue _fun100031
                    }
                case 38:
                    var8 = arguments[var1];
                case 42:
                    var3 = arguments.length;
                    var1 = 2;
                    var3 = var3 > var1;
                    var7 = undefined;
                    if (!var3) {
                        _fun100031_ip = 61;
                        continue _fun100031
                    }
                case 57:
                    var7 = arguments[var1];
                case 61:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var3 = 8;
                    var1 = var6[var3];
                    var2 = var4.bind(var5)(var1);
                    var1 = var2.resolvedSyncPromise;
                    var3 = var6[var3];
                    var6 = var4.bind(var5)(var3);
                    var5 = var6.eventFromMessage;
                    var3 = var0._options;
                    var13 = var3.stackParser;
                    var0 = var0._options;
                    var9 = var0.attachStacktrace;
                    var12 = arg0;
                    var14 = var6;
                    var11 = var8;
                    var10 = var7;
                    var0 = var14[var5](var13, var12, var11, var10, var9, var8);
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'captureException';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun100032: for (var _fun100032_ip = 0;;) switch (_fun100032_ip) {
                case 0:
                    var5 = this;
                    var0 = var5._options;
                    var0 = var0.autoSessionTracking;
                    if (!var0) {
                        _fun100032_ip = 104;
                        continue _fun100032
                    }
                case 18:
                    var0 = var5._sessionFlusher;
                    if (!var0) {
                        _fun100032_ip = 104;
                        continue _fun100032
                    }
                case 27:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getIsolationScope;
                    var1 = var0.bind(var1)();
                    var0 = var1.getRequestSession;
                    var1 = var0.bind(var1)();
                    var0 = var1;
                    if (!var0) {
                        _fun100032_ip = 91;
                        continue _fun100032
                    }
                case 78:
                    var3 = var1.status;
                    var2 = 'ok';
                    var0 = var2 === var3;
                case 91:
                    if (!var0) {
                        _fun100032_ip = 104;
                        continue _fun100032
                    }
                case 94:
                    var0 = 'errored';
                    var1.status = var0;
                case 104:
                    var4 = _closure1_slot10;
                    var9 = _closure2_slot0;
                    var2 = undefined;
                    var8 = 'captureException';
                    var6 = 3;
                    var10 = undefined;
                    var7 = var5;
                    var1 = var10[var4](var9, var8, var7, var6, var5);
                    var0 = new Array(3);
                    var3 = arg0;
                    var0[0] = var3;
                    var3 = arg1;
                    var0[1] = var3;
                    var3 = arg2;
                    var0[2] = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'captureEvent';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun100033: for (var _fun100033_ip = 0;;) switch (_fun100033_ip) {
                case 0:
                    var3 = arg0;
                    var6 = this;
                    var0 = var6._options;
                    var0 = var0.autoSessionTracking;
                    if (!var0) {
                        _fun100033_ip = 181;
                        continue _fun100033
                    }
                case 24:
                    var0 = var6._sessionFlusher;
                    if (!var0) {
                        _fun100033_ip = 181;
                        continue _fun100033
                    }
                case 36:
                    var1 = var3.type;
                    if (var1) {
                        _fun100033_ip = 48;
                        continue _fun100033
                    }
                case 44:
                    var1 = 'exception';
                case 48:
                    var0 = 'exception';
                    if (!(var0 === var1)) {
                        _fun100033_ip = 181;
                        continue _fun100033
                    }
                case 59:
                    var0 = var3.exception;
                    if (!var0) {
                        _fun100033_ip = 181;
                        continue _fun100033
                    }
                case 68:
                    var0 = var3.exception;
                    var0 = var0.values;
                    if (!var0) {
                        _fun100033_ip = 181;
                        continue _fun100033
                    }
                case 82:
                    var0 = var3.exception;
                    var0 = var0.values;
                    var1 = var0.length;
                    var0 = 0;
                    if (!(var1 > var0)) {
                        _fun100033_ip = 181;
                        continue _fun100033
                    }
                case 104:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 9;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getIsolationScope;
                    var1 = var0.bind(var1)();
                    var0 = var1.getRequestSession;
                    var1 = var0.bind(var1)();
                    var0 = var1;
                    if (!var0) {
                        _fun100033_ip = 168;
                        continue _fun100033
                    }
                case 155:
                    var4 = var1.status;
                    var2 = 'ok';
                    var0 = var2 === var4;
                case 168:
                    if (!var0) {
                        _fun100033_ip = 181;
                        continue _fun100033
                    }
                case 171:
                    var0 = 'errored';
                    var1.status = var0;
                case 181:
                    var5 = _closure1_slot10;
                    var10 = _closure2_slot0;
                    var2 = undefined;
                    var9 = 'captureEvent';
                    var7 = 3;
                    var11 = undefined;
                    var8 = var6;
                    var1 = var11[var5](var10, var9, var8, var7, var6);
                    var0 = new Array(3);
                    var0[0] = var3;
                    var3 = arg1;
                    var0[1] = var3;
                    var3 = arg2;
                    var0[2] = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'close';
        var4.key = var6;
        var6 = function arg0() {
            _fun100034: for (var _fun100034_ip = 0;;) switch (_fun100034_ip) {
                case 0:
                    var5 = this;
                    var0 = var5._sessionFlusher;
                    if (!var0) {
                        _fun100034_ip = 28;
                        continue _fun100034
                    }
                case 12:
                    var1 = var5._sessionFlusher;
                    var0 = var1.close;
                    var0 = var0.bind(var1)();
                case 28:
                    var4 = _closure1_slot10;
                    var9 = _closure2_slot0;
                    var2 = undefined;
                    var8 = 'close';
                    var6 = 3;
                    var10 = undefined;
                    var7 = var5;
                    var1 = var10[var4](var9, var8, var7, var6, var5);
                    var0 = new Array(1);
                    var3 = arg0;
                    var0[0] = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'initSessionFlusher';
        var4.key = var6;
        var6 = function() {
            _fun100035: for (var _fun100035_ip = 0;;) switch (_fun100035_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._options;
                    var4 = var0.release;
                    var2 = var0.environment;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    if (var4) {
                        _fun100035_ip = 102;
                        continue _fun100035
                    }
                case 35:
                    var6 = 10;
                    var6 = var3[var6];
                    var7 = undefined;
                    var6 = var5.bind(var7)(var6);
                    var6 = var6.DEBUG_BUILD;
                    if (!var6) {
                        _fun100035_ip = 166;
                        continue _fun100035
                    }
                case 58:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var0 = 8;
                    var0 = var8[var0];
                    var0 = var6.bind(var7)(var0);
                    var7 = var0.logger;
                    var6 = var7.warn;
                    var0 = 'Cannot initialise an instance of SessionFlusher if no release is provided!';
                    var0 = var6.bind(var7)(var0);
                    _fun100035_ip = 166;
                    continue _fun100035;
                case 102:
                    var0 = 11;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var5.bind(var0)(var3);
                    var3 = var0.SessionFlusher;
                    var0 = {};
                    var0.release = var4;
                    var0.environment = var2;
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var3
                        }
                    });
                    var11 = var2;
                    var10 = var1;
                    var9 = var0;
                    var0 = new var11[var3](var10, var9, var8);
                    var0 = var0 instanceof Object ? var0 : var2;
                    var1._sessionFlusher = var0;
                case 166:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'captureCheckIn';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun100036: for (var _fun100036_ip = 0;;) switch (_fun100036_ip) {
                case 0:
                    var1 = arg0;
                    var4 = arg1;
                    var3 = this;
                    var0 = 'checkInId';
                    var0 = var0 in var1;
                    if (!var0) {
                        _fun100036_ip = 29;
                        continue _fun100036
                    }
                case 20:
                    var0 = var1.checkInId;
                    if (var0) {
                        _fun100036_ip = 66;
                        continue _fun100036
                    }
                case 29:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 8;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var5.bind(var0)(var2);
                    var0 = var2.uuid4;
                    var0 = var0.bind(var2)();
                    _fun100036_ip = 72;
                    continue _fun100036;
                case 66:
                    var0 = var1.checkInId;
                case 72:
                    var2 = var3._isEnabled;
                    var2 = var2.bind(var3)();
                    if (var2) {
                        _fun100036_ip = 163;
                        continue _fun100036
                    }
                case 85:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 10;
                    var5 = var6[var5];
                    var6 = undefined;
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.DEBUG_BUILD;
                    if (!var5) {
                        _fun100036_ip = 161;
                        continue _fun100036
                    }
                case 119:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 8;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var6 = var2.logger;
                    var5 = var6.warn;
                    var2 = 'SDK not enabled, will not capture checkin.';
                    var2 = var5.bind(var6)(var2);
                case 161:
                    return var0;
                case 163:
                    var2 = var3.getOptions;
                    var6 = var2.bind(var3)();
                    var5 = var6.release;
                    var2 = var6.environment;
                    var13 = var6.tunnel;
                    var12 = {};
                    var12.check_in_id = var0;
                    var6 = var1.monitorSlug;
                    var12.monitor_slug = var6;
                    var6 = var1.status;
                    var12.status = var6;
                    var12.release = var5;
                    var12.environment = var2;
                    var2 = 'duration';
                    var2 = var2 in var1;
                    if (!var2) {
                        _fun100036_ip = 250;
                        continue _fun100036
                    }
                case 239:
                    var2 = var1.duration;
                    var12.duration = var2;
                case 250:
                    if (!var4) {
                        _fun100036_ip = 327;
                        continue _fun100036
                    }
                case 253:
                    var2 = {};
                    var5 = var4.schedule;
                    var2.schedule = var5;
                    var5 = var4.checkinMargin;
                    var2.checkin_margin = var5;
                    var5 = var4.maxRuntime;
                    var2.max_runtime = var5;
                    var5 = var4.timezone;
                    var2.timezone = var5;
                    var5 = var4.failureIssueThreshold;
                    var2.failure_issue_threshold = var5;
                    var4 = var4.recoveryThreshold;
                    var2.recovery_threshold = var4;
                    var12.monitor_config = var2;
                case 327:
                    var4 = var3._getTraceInfoFromScope;
                    var2 = arg2;
                    var7 = var4.bind(var3)(var2);
                    var5 = _closure1_slot2;
                    var6 = undefined;
                    var2 = 2;
                    var5 = var5.bind(var6)(var7, var2);
                    var2 = 0;
                    var11 = var5[var2];
                    var2 = 1;
                    var5 = var5[var2];
                    if (!var5) {
                        _fun100036_ip = 388;
                        continue _fun100036
                    }
                case 375:
                    var2 = {};
                    var2.trace = var5;
                    var12.contexts = var2;
                case 388:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 12;
                    var2 = var8[var2];
                    var10 = var7.bind(var6)(var2);
                    var9 = var10.createCheckInEnvelope;
                    var2 = var3.getSdkMetadata;
                    var16 = var2.bind(var3)();
                    var2 = var3.getDsn;
                    var14 = var2.bind(var3)();
                    var19 = var10;
                    var18 = var12;
                    var17 = var11;
                    var15 = var13;
                    var2 = var19[var9](var18, var17, var16, var15, var14, var13);
                    var5 = 10;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.DEBUG_BUILD;
                    if (!var5) {
                        _fun100036_ip = 527;
                        continue _fun100036
                    }
                case 471:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 8;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var7 = var4.logger;
                    var6 = var7.info;
                    var5 = var1.monitorSlug;
                    var4 = var1.status;
                    var1 = 'Sending checkin:';
                    var1 = var6.bind(var7)(var1, var5, var4);
                case 527:
                    var1 = var3.sendEnvelope;
                    var1 = var1.bind(var3)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = '_captureRequestSession';
        var4.key = var6;
        var6 = function() {
            _fun100037: for (var _fun100037_ip = 0;;) switch (_fun100037_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._sessionFlusher;
                    if (var1) {
                        _fun100037_ip = 90;
                        continue _fun100037
                    }
                case 12:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 10;
                    var2 = var3[var2];
                    var3 = undefined;
                    var2 = var4.bind(var3)(var2);
                    var2 = var2.DEBUG_BUILD;
                    if (!var2) {
                        _fun100037_ip = 108;
                        continue _fun100037
                    }
                case 46:
                    var2 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 8;
                    var1 = var4[var1];
                    var1 = var2.bind(var3)(var1);
                    var3 = var1.logger;
                    var2 = var3.warn;
                    var1 = 'Discarded request mode session because autoSessionTracking option was disabled';
                    var1 = var2.bind(var3)(var1);
                    _fun100037_ip = 108;
                    continue _fun100037;
                case 90:
                    var1 = var0._sessionFlusher;
                    var0 = var1.incrementSessionStatusCount;
                    var0 = var0.bind(var1)();
                case 108:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = '_prepareEvent';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun100038: for (var _fun100038_ip = 0;;) switch (_fun100038_ip) {
                case 0:
                    var3 = arg0;
                    var6 = this;
                    var0 = var6._options;
                    var0 = var0.platform;
                    if (!var0) {
                        _fun100038_ip = 48;
                        continue _fun100038
                    }
                case 21:
                    var0 = var3.platform;
                    if (var0) {
                        _fun100038_ip = 42;
                        continue _fun100038
                    }
                case 30:
                    var1 = var6._options;
                    var0 = var1.platform;
                case 42:
                    var3.platform = var0;
                case 48:
                    var0 = var6._options;
                    var0 = var0.runtime;
                    if (!var0) {
                        _fun100038_ip = 136;
                        continue _fun100038
                    }
                case 63:
                    var0 = global;
                    var5 = var0.Object;
                    var4 = var5.assign;
                    var2 = var3.contexts;
                    var1 = {};
                    var0 = var3.contexts;
                    if (var0) {
                        _fun100038_ip = 95;
                        continue _fun100038
                    }
                case 93:
                    var0 = {};
                case 95:
                    var0 = var0.runtime;
                    if (var0) {
                        _fun100038_ip = 116;
                        continue _fun100038
                    }
                case 104:
                    var7 = var6._options;
                    var0 = var7.runtime;
                case 116:
                    var1.runtime = var0;
                    var0 = {};
                    var0 = var4.bind(var5)(var0, var2, var1);
                    var3.contexts = var0;
                case 136:
                    var0 = var6._options;
                    var0 = var0.serverName;
                    if (!var0) {
                        _fun100038_ip = 178;
                        continue _fun100038
                    }
                case 151:
                    var0 = var3.server_name;
                    if (var0) {
                        _fun100038_ip = 172;
                        continue _fun100038
                    }
                case 160:
                    var1 = var6._options;
                    var0 = var1.serverName;
                case 172:
                    var3.server_name = var0;
                case 178:
                    var5 = _closure1_slot10;
                    var11 = _closure2_slot0;
                    var2 = undefined;
                    var10 = '_prepareEvent';
                    var8 = 3;
                    var12 = undefined;
                    var9 = var6;
                    var1 = var12[var5](var11, var10, var9, var8, var7);
                    var0 = new Array(4);
                    var0[0] = var3;
                    var3 = arg1;
                    var0[1] = var3;
                    var3 = arg2;
                    var0[2] = var3;
                    var3 = arg3;
                    var0[3] = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = '_getTraceInfoFromScope';
        var4.key = var6;
        var5 = function arg0() {
            _fun100039: for (var _fun100039_ip = 0;;) switch (_fun100039_ip) {
                case 0:
                    var2 = arg0;
                    if (var2) {
                        _fun100039_ip = 22;
                        continue _fun100039
                    }
                case 6:
                    var0 = new Array(2);
                    var1 = undefined;
                    var0[0] = var1;
                    var0[1] = var1;
                    return var0;
                case 22:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 13;
                    var1 = var4[var1];
                    var4 = undefined;
                    var3 = var3.bind(var4)(var1);
                    var1 = var3._getSpanForScope;
                    var6 = var1.bind(var3)(var2);
                    if (var6) {
                        _fun100039_ip = 181;
                        continue _fun100039
                    }
                case 61:
                    var1 = var2.getPropagationContext;
                    var3 = var1.bind(var2)();
                    var8 = var3.traceId;
                    var2 = var3.spanId;
                    var1 = var3.parentSpanId;
                    var5 = var3.dsc;
                    var3 = {};
                    var3.trace_id = var8;
                    var3.span_id = var2;
                    var3.parent_span_id = var1;
                    if (var5) {
                        _fun100039_ip = 164;
                        continue _fun100039
                    }
                case 115:
                    var2 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var1 = 15;
                    var1 = var7[var1];
                    var7 = var2.bind(var4)(var1);
                    var2 = var7.getDynamicSamplingContextFromClient;
                    var1 = this;
                    var2 = var2.bind(var7)(var8, var1);
                    var1 = new Array(2);
                    var1[0] = var2;
                    var1[1] = var3;
                    _fun100039_ip = 179;
                    continue _fun100039;
                case 164:
                    var2 = new Array(2);
                    var2[0] = var5;
                    var2[1] = var3;
                    var1 = var2;
                case 179:
                    return var1;
                case 181:
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 14;
                    var0 = var5[var1];
                    var3 = var2.bind(var4)(var0);
                    var0 = var3.getRootSpan;
                    var3 = var0.bind(var3)(var6);
                    var0 = 15;
                    var0 = var5[var0];
                    var6 = var2.bind(var4)(var0);
                    var0 = var6.getDynamicSamplingContextFromSpan;
                    var6 = var0.bind(var6)(var3);
                    var0 = new Array(2);
                    var0[0] = var6;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = var2.spanToTraceContext;
                    var1 = var1.bind(var2)(var3);
                    var0[1] = var1;
                    return var0;
            }
        };
        var4.value = var5;
        var0[9] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.ServerRuntimeClient = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 102, 18, 12934, 12935, 13000, 13001, 13021, 13026, 12997, 12989, 13009, 13023]);