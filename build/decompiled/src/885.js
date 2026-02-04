// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun9365: for (var _fun9365_ip = 0;;) switch (_fun9365_ip) {
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
                _fun9365_ip = 74;
                continue _fun9365;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
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
        _fun9368: for (var _fun9368_ip = 0;;) switch (_fun9368_ip) {
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
                    _fun9368_ip = 44;
                    continue _fun9368
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
                    _fun9368_ip = 97;
                    continue _fun9368
                }
            case 78:
                var3 = 'function';
                var2 = typeof var4;
                var0 = var4;
                if (!(var3 === var2)) {
                    _fun9368_ip = 97;
                    continue _fun9368
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
            case 97:
                return var0;
        }
    };
    var _closure1_slot10 = var0;
    var0 = function arg0() {
        _fun9370: for (var _fun9370_ip = 0;;) switch (_fun9370_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.getIsolationScope;
                var2 = var1.bind(var2)();
                var1 = var2.getScopeData;
                var1 = var1.bind(var2)();
                var1 = var1.sdkProcessingMetadata;
                var2 = var1.requestSession;
                if (!var2) {
                    _fun9370_ip = 146;
                    continue _fun9370
                }
            case 63:
                var1 = null;
                var5 = var1 == var4;
                var3 = undefined;
                if (var5) {
                    _fun9370_ip = 95;
                    continue _fun9370
                }
            case 74:
                var4 = var4.mechanism;
                var5 = var1 == var4;
                var3 = undefined;
                if (var5) {
                    _fun9370_ip = 95;
                    continue _fun9370
                }
            case 89:
                var3 = var4.handled;
            case 95:
                var1 = var1 == var3;
                if (var1) {
                    _fun9370_ip = 105;
                    continue _fun9370
                }
            case 102:
                var1 = var3;
            case 105:
                if (!var1) {
                    _fun9370_ip = 121;
                    continue _fun9370
                }
            case 108:
                var4 = var2.status;
                var3 = 'crashed';
                if (!(var3 === var4)) {
                    _fun9370_ip = 136;
                    continue _fun9370
                }
            case 121:
                if (var1) {
                    _fun9370_ip = 146;
                    continue _fun9370
                }
            case 124:
                var1 = 'crashed';
                var2.status = var1;
                _fun9370_ip = 146;
                continue _fun9370;
            case 136:
                var1 = 'errored';
                var2.status = var1;
            case 146:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
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
    var3 = var3.Symbol;
    var6 = var3.toStringTag;
    var3 = {};
    var9 = 'Module';
    var3.value = var9;
    var3 = var7.bind(var8)(var2, var6, var3);
    var3 = 16;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Client;
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun9372: for (var _fun9372_ip = 0;;) switch (_fun9372_ip) {
                case 0:
                    var0 = arg0;
                    var3 = this;
                    var5 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var2 = undefined;
                    var5 = var5.bind(var2)(var3, var1);
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var5 = 7;
                    var5 = var7[var5];
                    var8 = var6.bind(var2)(var5);
                    var5 = var8.registerSpanErrorInstrumentation;
                    var5 = var5.bind(var8)();
                    var5 = 8;
                    var5 = var7[var5];
                    var6 = var6.bind(var2)(var5);
                    var5 = var6.addUserAgentToTransportHeaders;
                    var5 = var5.bind(var6)(var0);
                    var8 = new Array(1);
                    var8[0] = var0;
                    var0 = _closure1_slot6;
                    var7 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun9372_ip = 126;
                        continue _fun9372
                    }
                case 113:
                    var0 = var7.apply;
                    var0 = var0.bind(var7)(var3, var8);
                    _fun9372_ip = 160;
                    continue _fun9372;
                case 126:
                    var5 = global;
                    var6 = var5.Reflect;
                    var5 = var6.construct;
                    var4 = _closure1_slot6;
                    var4 = var4.bind(var2)(var3);
                    var4 = var4.constructor;
                    var0 = var5.bind(var6)(var7, var8, var4);
                case 160:
                    var0 = var1.bind(var2)(var3, var0);
                    var1 = var0._setUpMetricsProcessing;
                    var1 = var1.bind(var0)();
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
            var8 = this;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var0 = 9;
            var0 = var4[var0];
            var1 = undefined;
            var7 = var3.bind(var1)(var0);
            var6 = var7.eventFromUnknownInput;
            var0 = var8._options;
            var11 = var0.stackParser;
            var10 = arg0;
            var9 = arg1;
            var13 = var7;
            var12 = var8;
            var2 = var13[var6](var12, var11, var10, var9, var8);
            var0 = 'error';
            var2.level = var0;
            var0 = 10;
            var0 = var4[var0];
            var1 = var3.bind(var1)(var0);
            var0 = var1.resolvedSyncPromise;
            var0 = var0.bind(var1)(var2);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(7);
        var0[0] = var4;
        var4 = {};
        var6 = 'eventFromMessage';
        var4.key = var6;
        var6 = function arg0() {
            _fun9374: for (var _fun9374_ip = 0;;) switch (_fun9374_ip) {
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
                        _fun9374_ip = 42;
                        continue _fun9374
                    }
                case 27:
                    var3 = arguments[var1];
                    var8 = var4;
                    if (!(var5 !== var3)) {
                        _fun9374_ip = 42;
                        continue _fun9374
                    }
                case 38:
                    var8 = arguments[var1];
                case 42:
                    var3 = arguments.length;
                    var1 = 2;
                    var3 = var3 > var1;
                    var7 = undefined;
                    if (!var3) {
                        _fun9374_ip = 61;
                        continue _fun9374
                    }
                case 57:
                    var7 = arguments[var1];
                case 61:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 10;
                    var1 = var6[var1];
                    var2 = var4.bind(var5)(var1);
                    var1 = var2.resolvedSyncPromise;
                    var3 = 9;
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
            var3 = arg1;
            var1 = _closure1_slot11;
            var2 = undefined;
            var1 = var1.bind(var2)(var3);
            var6 = _closure1_slot10;
            var10 = _closure2_slot0;
            var9 = 'captureException';
            var8 = this;
            var7 = 3;
            var11 = undefined;
            var1 = var11[var6](var10, var9, var8, var7, var6);
            var0 = new Array(3);
            var4 = arg0;
            var0[0] = var4;
            var0[1] = var3;
            var3 = arg2;
            var0[2] = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'captureEvent';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun9376: for (var _fun9376_ip = 0;;) switch (_fun9376_ip) {
                case 0:
                    var4 = arg0;
                    var3 = arg1;
                    var0 = var4.type;
                    var0 = !var0;
                    if (!var0) {
                        _fun9376_ip = 42;
                        continue _fun9376
                    }
                case 17:
                    var2 = var4.exception;
                    var1 = null;
                    var5 = var1 == var2;
                    var1 = undefined;
                    if (var5) {
                        _fun9376_ip = 39;
                        continue _fun9376
                    }
                case 34:
                    var1 = var2.values;
                case 39:
                    var0 = var1;
                case 42:
                    if (!var0) {
                        _fun9376_ip = 67;
                        continue _fun9376
                    }
                case 45:
                    var1 = var4.exception;
                    var1 = var1.values;
                    var2 = var1.length;
                    var1 = 0;
                    var0 = var2 > var1;
                case 67:
                    if (!var0) {
                        _fun9376_ip = 84;
                        continue _fun9376
                    }
                case 70:
                    var1 = _closure1_slot11;
                    var0 = undefined;
                    var0 = var1.bind(var0)(var3);
                case 84:
                    var7 = _closure1_slot10;
                    var11 = _closure2_slot0;
                    var2 = undefined;
                    var10 = 'captureEvent';
                    var9 = this;
                    var8 = 3;
                    var12 = undefined;
                    var1 = var12[var7](var11, var10, var9, var8, var7);
                    var0 = new Array(3);
                    var0[0] = var4;
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
        var6 = 'captureCheckIn';
        var4.key = var6;
        var6 = function arg0, arg1, arg2() {
            _fun9377: for (var _fun9377_ip = 0;;) switch (_fun9377_ip) {
                case 0:
                    var1 = arg0;
                    var4 = arg1;
                    var3 = this;
                    var0 = 'checkInId';
                    var0 = var0 in var1;
                    if (!var0) {
                        _fun9377_ip = 29;
                        continue _fun9377
                    }
                case 20:
                    var0 = var1.checkInId;
                    if (var0) {
                        _fun9377_ip = 66;
                        continue _fun9377
                    }
                case 29:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 11;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var5.bind(var0)(var2);
                    var0 = var2.uuid4;
                    var0 = var0.bind(var2)();
                    _fun9377_ip = 72;
                    continue _fun9377;
                case 66:
                    var0 = var1.checkInId;
                case 72:
                    var2 = var3._isEnabled;
                    var2 = var2.bind(var3)();
                    if (var2) {
                        _fun9377_ip = 163;
                        continue _fun9377
                    }
                case 85:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var5 = 12;
                    var5 = var6[var5];
                    var6 = undefined;
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.DEBUG_BUILD;
                    if (!var5) {
                        _fun9377_ip = 161;
                        continue _fun9377
                    }
                case 119:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var2 = 13;
                    var2 = var7[var2];
                    var2 = var5.bind(var6)(var2);
                    var6 = var2.debug;
                    var5 = var6.warn;
                    var2 = 'SDK not enabled, will not capture check-in.';
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
                        _fun9377_ip = 250;
                        continue _fun9377
                    }
                case 239:
                    var2 = var1.duration;
                    var12.duration = var2;
                case 250:
                    if (!var4) {
                        _fun9377_ip = 327;
                        continue _fun9377
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
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var2 = 14;
                    var2 = var6[var2];
                    var6 = undefined;
                    var7 = var5.bind(var6)(var2);
                    var5 = var7._getTraceInfoFromScope;
                    var2 = arg2;
                    var7 = var5.bind(var7)(var3, var2);
                    var5 = _closure1_slot2;
                    var2 = 2;
                    var5 = var5.bind(var6)(var7, var2);
                    var2 = 0;
                    var11 = var5[var2];
                    var2 = 1;
                    var5 = var5[var2];
                    if (!var5) {
                        _fun9377_ip = 409;
                        continue _fun9377
                    }
                case 396:
                    var2 = {};
                    var2.trace = var5;
                    var12.contexts = var2;
                case 409:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var2 = 15;
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
                    var5 = 12;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.DEBUG_BUILD;
                    if (!var5) {
                        _fun9377_ip = 547;
                        continue _fun9377
                    }
                case 492:
                    var5 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var4 = 13;
                    var4 = var7[var4];
                    var4 = var5.bind(var6)(var4);
                    var7 = var4.debug;
                    var6 = var7.log;
                    var5 = var1.monitorSlug;
                    var4 = var1.status;
                    var1 = 'Sending checkin:';
                    var1 = var6.bind(var7)(var1, var5, var4);
                case 547:
                    var1 = var3.sendEnvelope;
                    var1 = var1.bind(var3)(var2);
                    return var0;
            }
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = '_prepareEvent';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun9378: for (var _fun9378_ip = 0;;) switch (_fun9378_ip) {
                case 0:
                    var3 = arg0;
                    var6 = this;
                    var0 = var6._options;
                    var0 = var0.platform;
                    if (!var0) {
                        _fun9378_ip = 48;
                        continue _fun9378
                    }
                case 21:
                    var0 = var3.platform;
                    if (var0) {
                        _fun9378_ip = 42;
                        continue _fun9378
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
                        _fun9378_ip = 142;
                        continue _fun9378
                    }
                case 63:
                    var0 = global;
                    var5 = var0.Object;
                    var4 = var5.assign;
                    var2 = var3.contexts;
                    var1 = {};
                    var7 = var3.contexts;
                    var0 = null;
                    var8 = var0 == var7;
                    var0 = undefined;
                    if (var8) {
                        _fun9378_ip = 107;
                        continue _fun9378
                    }
                case 101:
                    var0 = var7.runtime;
                case 107:
                    if (var0) {
                        _fun9378_ip = 122;
                        continue _fun9378
                    }
                case 110:
                    var7 = var6._options;
                    var0 = var7.runtime;
                case 122:
                    var1.runtime = var0;
                    var0 = {};
                    var0 = var4.bind(var5)(var0, var2, var1);
                    var3.contexts = var0;
                case 142:
                    var0 = var6._options;
                    var0 = var0.serverName;
                    if (!var0) {
                        _fun9378_ip = 184;
                        continue _fun9378
                    }
                case 157:
                    var0 = var3.server_name;
                    if (var0) {
                        _fun9378_ip = 178;
                        continue _fun9378
                    }
                case 166:
                    var1 = var6._options;
                    var0 = var1.serverName;
                case 178:
                    var3.server_name = var0;
                case 184:
                    var5 = _closure1_slot10;
                    var12 = _closure2_slot0;
                    var2 = undefined;
                    var11 = '_prepareEvent';
                    var9 = 3;
                    var13 = undefined;
                    var10 = var6;
                    var1 = var13[var5](var12, var11, var10, var9, var8);
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
        var0[5] = var4;
        var4 = {};
        var6 = '_setUpMetricsProcessing';
        var4.key = var6;
        var5 = function() {
            var3 = this;
            var _closure3_slot0 = var3;
            var2 = var3.on;
            var1 = 'processMetric';
            var0 = function(arg0) { // Environment: var0
                _fun9380: for (var _fun9380_ip = 0;;) switch (_fun9380_ip) {
                    case 0:
                        var1 = arg0;
                        var2 = _closure3_slot0;
                        var2 = var2._options;
                        var2 = var2.serverName;
                        if (!var2) {
                            _fun9380_ip = 79;
                            continue _fun9380
                        }
                    case 25:
                        var2 = global;
                        var4 = var2.Object;
                        var3 = var4.assign;
                        var2 = {};
                        var0 = _closure3_slot0;
                        var0 = var0._options;
                        var0 = var0.serverName;
                        var2['server.address'] = var0;
                        var0 = var1.attributes;
                        var0 = var3.bind(var4)(var2, var0);
                        var1.attributes = var0;
                    case 79:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[6] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var2.ServerRuntimeClient = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 102, 18, 818, 886, 887, 871, 830, 823, 824, 876, 888, 874, 847]);