// modules/analytics_sessions/SessionHeartbeatScheduler.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var10 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var10;
    var _closure1_slot2 = var6;
    var0 = function() { // Original name: stopAnalyticsHeartbeat, environment: var1
        _fun39580: for (var _fun39580_ip = 0;;) switch (_fun39580_ip) {
            case 0:
                var1 = _closure1_slot16;
                var2 = null;
                var3 = var2 == var1;
                var1 = false;
                if (var3) {
                    _fun39580_ip = 110;
                    continue _fun39580
                }
            case 18:
                var3 = _closure1_slot16;
                var4 = var3.type;
                var3 = 'timeout';
                if (!(var3 !== var4)) {
                    _fun39580_ip = 80;
                    continue _fun39580
                }
            case 35:
                var3 = 'interval';
                if (!(var3 !== var4)) {
                    _fun39580_ip = 54;
                    continue _fun39580
                }
            case 43:
                var3 = _closure1_slot16;
                var3 = var3.type;
                _fun39580_ip = 104;
                continue _fun39580;
            case 54:
                var3 = global;
                var5 = var3.clearInterval;
                var3 = _closure1_slot16;
                var4 = var3.id;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
                _fun39580_ip = 104;
                continue _fun39580;
            case 80:
                var3 = global;
                var5 = var3.clearTimeout;
                var3 = _closure1_slot16;
                var4 = var3.id;
                var3 = undefined;
                var3 = var5.bind(var3)(var4);
            case 104:
                _closure1_slot16 = var2;
                var1 = true;
            case 110:
                if (!var1) {
                    _fun39580_ip = 193;
                    continue _fun39580
                }
            case 113:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 9;
                var1 = var3[var1];
                var2 = undefined;
                var5 = var4.bind(var2)(var1);
                var4 = var5.addBreadcrumb;
                var1 = {};
                var6 = _closure1_slot14;
                var1.category = var6;
                var6 = 'Stopping Analytics Heartbeat';
                var1.message = var6;
                var1 = var4.bind(var5)(var1);
                var1 = _closure1_slot0;
                var0 = 10;
                var0 = var3[var0];
                var1 = var1.bind(var2)(var0);
                var0 = var1.drainClickstream;
                var0 = var0.bind(var1)();
            case 193:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot24 = var0;
    var0 = function() { // Original name: trackHeartbeat, environment: var1
        var0 = undefined;
        var3 = _closure1_slot26;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function() { // Original name: _trackHeartbeat, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun39584: for (var _fun39584_ip = 0;;) switch (_fun39584_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun39584_ip = 519;
                            continue _fun39584
                        }
                    case 10:
                        var4 = global;
                        var2 = var4.Date;
                        var1 = var2.now;
                        var10 = var1.bind(var2)();
                        var1 = _closure1_slot39;
                        var2 = undefined;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 44);
                    case 42:
                        return var1;
                    case 44:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 5);
                        if (var5) {
                            _fun39584_ip = 516;
                            continue _fun39584
                        }
                    case 53:
                        var6 = var4.Date;
                        var5 = var6.now;
                        var5 = var5.bind(var6)();
                        var6 = null;
                        if (!(var6 == var1)) {
                            _fun39584_ip = 152;
                            continue _fun39584
                        }
                    case 74:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var7 = 9;
                        var7 = var9[var7];
                        var8 = var8.bind(var2)(var7);
                        var7 = var8.captureException;
                        var9 = var4.Error;
                        var12 = var5 - var10;
                        var5 = var4.HermesInternal;
                        var11 = var5.concat;
                        var10 = 'Null session when tracking session heartbeat. Waited ';
                        var5 = 'ms';
                        var5 = var11.bind(var10)(var12, var5);
                        var5 = var9.bind(var2)(var5);
                        var5 = var7.bind(var8)(var5);
                        _fun39584_ip = 513;
                        continue _fun39584;
                    case 152:
                        var7 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var5 = 9;
                        var5 = var8[var5];
                        var9 = var7.bind(var2)(var5);
                        var7 = var9.addBreadcrumb;
                        var5 = {};
                        var10 = _closure1_slot14;
                        var5.category = var10;
                        var10 = 'Tracking Heartbeat';
                        var5.message = var10;
                        var10 = {};
                        var11 = var1.createdAtTimestamp;
                        var10.initialized = var11;
                        var5.data = var10;
                        var5 = var7.bind(var9)(var5);
                        var9 = {};
                        var5 = var1.createdAtTimestamp;
                        var9.client_heartbeat_initialization_timestamp = var5;
                        var5 = 27;
                        var9.client_heartbeat_version = var5;
                        var7 = _closure1_slot0;
                        var5 = 11;
                        var5 = var8[var5];
                        var7 = var7.bind(var2)(var5);
                        var5 = var7.getClientHeartbeatPiggybackProperties;
                        var13 = var5.bind(var7)();
                        var14 = var9;
                        var5 = copyDataProperties(var14, var13);
                        var7 = _closure1_slot6;
                        var5 = var7.getIdleSince;
                        var5 = var5.bind(var7)();
                        var6 = var6 != var5;
                        var7 = 0;
                        if (!var6) {
                            _fun39584_ip = 301;
                            continue _fun39584
                        }
                    case 298:
                        var7 = var5;
                    case 301:
                        var5 = {};
                        var8 = _closure1_slot6;
                        var6 = var8.isIdle;
                        var6 = var6.bind(var8)();
                        var5.is_idle = var6;
                        var8 = var4.Date;
                        var6 = var8.now;
                        var6 = var6.bind(var8)();
                        var6 = var6 - var7;
                        var5.idle_duration_ms = var6;
                        var7 = _closure1_slot6;
                        var6 = var7.isAFK;
                        var6 = var6.bind(var7)();
                        var5.is_afk = var6;
                        var7 = _closure1_slot6;
                        var6 = var7.getSystemSuspended;
                        var6 = var6.bind(var7)();
                        var5.is_system_suspended = var6;
                        var7 = _closure1_slot6;
                        var6 = var7.getSystemLocked;
                        var6 = var6.bind(var7)();
                        var5.is_system_locked = var6;
                        var14 = var9;
                        var13 = var5;
                        var5 = copyDataProperties(var14, var13);
                        var7 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var6 = 12;
                        var6 = var5[var6];
                        var8 = var7.bind(var2)(var6);
                        var7 = var8.track;
                        var6 = _closure1_slot8;
                        var6 = var6.CLIENT_HEARTBEAT;
                        var6 = var7.bind(var8)(var6, var9);
                        var6 = var4.performance;
                        var4 = var6.now;
                        var4 = var4.bind(var6)();
                        _closure1_slot19 = var4;
                        var4 = _closure1_slot0;
                        var3 = 10;
                        var3 = var5[var3];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.drainClickstream;
                        var3 = var3.bind(var4)();
                    case 513:
                        return var2;
                    case 516:
                        return var1;
                    case 519:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot26 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function() { // Original name: buildHeartbeatQOSPayload, environment: var1
        _fun39585: for (var _fun39585_ip = 0;;) switch (_fun39585_ip) {
            case 0:
                var1 = new Array(0);
                var3 = _closure1_slot23;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun39585_ip = 74;
                    continue _fun39585
                }
            case 17:
                var2 = _closure1_slot22;
                if (!var2) {
                    _fun39585_ip = 40;
                    continue _fun39585
                }
            case 24:
                var3 = var1.push;
                var2 = 'foregrounded';
                var2 = var3.bind(var1)(var2);
            case 40:
                var2 = _closure1_slot21;
                var0 = _closure1_slot10;
                var0 = var0.RTC_CONNECTED;
                if (!(var2 === var0)) {
                    _fun39585_ip = 74;
                    continue _fun39585
                }
            case 58:
                var2 = var1.push;
                var0 = 'rtc_connected';
                var0 = var2.bind(var1)(var0);
            case 74:
                var0 = {};
                var3 = var1.length;
                var2 = 0;
                var2 = var3 > var2;
                var0.active = var2;
                var2 = 27;
                var0.ver = var2;
                var0.reasons = var1;
                return var0;
        }
    };
    var _closure1_slot27 = var0;
    var0 = function() { // Original name: isActive, environment: var1
        var1 = _closure1_slot27;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = var0.active;
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function() { // Original name: scheduleHeartbeatTracking, environment: var1
        _fun39587: for (var _fun39587_ip = 0;;) switch (_fun39587_ip) {
            case 0:
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.addBreadcrumb;
                var2 = {};
                var6 = _closure1_slot22;
                var5 = 'Heartbeat Track State Parameters Changed. Foregrounded ';
                var7 = var5 + var6;
                var6 = _closure1_slot21;
                var5 = ', Connection State: ';
                var5 = var7 + var5;
                var5 = var5 + var6;
                var2.message = var5;
                var2 = var3.bind(var4)(var2);
                var2 = _closure1_slot28;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun39587_ip = 95;
                    continue _fun39587
                }
            case 85:
                var2 = _closure1_slot24;
                var2 = var2.bind(var0)();
                _fun39587_ip = 106;
                continue _fun39587;
            case 95:
                var2 = function() { // Original name: startAnalyticsHeartbeat, environment: var2
                    _fun39588: for (var _fun39588_ip = 0;;) switch (_fun39588_ip) {
                        case 0:
                            var2 = _closure1_slot16;
                            var0 = null;
                            if (!(var0 == var2)) {
                                _fun39588_ip = 176;
                                continue _fun39588
                            }
                        case 16:
                            var0 = _closure1_slot19;
                            var5 = 0;
                            if (!(var5 !== var0)) {
                                _fun39588_ip = 59;
                                continue _fun39588
                            }
                        case 26:
                            var2 = _closure1_slot11;
                            var0 = global;
                            var3 = var0.performance;
                            var0 = var3.now;
                            var3 = var0.bind(var3)();
                            var0 = _closure1_slot19;
                            var0 = var3 - var0;
                            var5 = var2 - var0;
                        case 59:
                            var2 = _closure1_slot1;
                            var3 = _closure1_slot2;
                            var0 = 9;
                            var0 = var3[var0];
                            var4 = undefined;
                            var6 = var2.bind(var4)(var0);
                            var3 = var6.addBreadcrumb;
                            var0 = {};
                            var2 = global;
                            var7 = var2.HermesInternal;
                            var10 = var7.concat;
                            var9 = 'Received Last Heartbeat Event Timestamp. Time Until Next Heartbeat: ';
                            var7 = 1000;
                            var8 = var5 / var7;
                            var7 = ' seconds. Scheduling Heartbeat';
                            var7 = var10.bind(var9)(var8, var7);
                            var0.message = var7;
                            var0 = var3.bind(var6)(var0);
                            var0 = {};
                            var3 = 'timeout';
                            var0.type = var3;
                            var3 = var2.setTimeout;
                            var2 = function() { // Environment: var2
                                var1 = _closure1_slot25;
                                var0 = undefined;
                                var1 = var1.bind(var0)();
                                var1 = {};
                                var3 = 'interval';
                                var1.type = var3;
                                var3 = global;
                                var5 = var3.setInterval;
                                var4 = _closure1_slot11;
                                var3 = function() { // Environment: var3
                                    var1 = _closure1_slot25;
                                    var0 = undefined;
                                    var1 = var1.bind(var0)();
                                    return var0;
                                };
                                var3 = var5.bind(var0)(var3, var4);
                                var1.id = var3;
                                _closure1_slot16 = var1;
                                return var0;
                            };
                            var2 = var3.bind(var4)(var2, var5);
                            var0.id = var2;
                            _closure1_slot16 = var0;
                        case 176:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var2.bind(var0)();
            case 106:
                var3 = _closure1_slot4;
                var2 = var3.getSocket;
                var3 = var2.bind(var3)();
                var2 = null;
                if (!(var2 != var3)) {
                    _fun39587_ip = 147;
                    continue _fun39587
                }
            case 126:
                var2 = var3.handleActiveStateChange;
                var1 = _closure1_slot27;
                var1 = var1.bind(var0)();
                var1 = var2.bind(var3)(var1);
            case 147:
                return var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function() { // Original name: scheduleHeartbeatSkippedTracking, environment: var1
        _fun39591: for (var _fun39591_ip = 0;;) switch (_fun39591_ip) {
            case 0:
                var2 = _closure1_slot17;
                var0 = null;
                if (!(var0 == var2)) {
                    _fun39591_ip = 58;
                    continue _fun39591
                }
            case 13:
                var0 = {};
                var2 = global;
                var5 = var2.setInterval;
                var4 = _closure1_slot11;
                var3 = undefined;
                var2 = function() { // Environment: var2
                    _fun39592: for (var _fun39592_ip = 0;;) switch (_fun39592_ip) {
                        case 0:
                            var2 = _closure1_slot23;
                            var1 = null;
                            var1 = var1 != var2;
                            if (!var1) {
                                _fun39592_ip = 48;
                                continue _fun39592
                            }
                        case 16:
                            var4 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var2 = 13;
                            var3 = var3[var2];
                            var2 = undefined;
                            var3 = var4.bind(var2)(var3);
                            var2 = var3.shouldLogClientHeartbeatSkipped;
                            var1 = var2.bind(var3)();
                        case 48:
                            if (!var1) {
                                _fun39592_ip = 137;
                                continue _fun39592
                            }
                        case 51:
                            var1 = global;
                            var2 = var1.performance;
                            var1 = var2.now;
                            var2 = var1.bind(var2)();
                            var1 = _closure1_slot19;
                            var2 = var2 - var1;
                            var1 = _closure1_slot11;
                            if (!(!(var2 <= var1))) {
                                _fun39592_ip = 137;
                                continue _fun39592
                            }
                        case 84:
                            var3 = _closure1_slot1;
                            var2 = _closure1_slot2;
                            var1 = 12;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.track;
                            var0 = _closure1_slot8;
                            var1 = var0.CLIENT_HEARTBEAT_SKIPPED;
                            var0 = {};
                            var4 = 27;
                            var0.client_heartbeat_version = var4;
                            var0 = var2.bind(var3)(var1, var0);
                        case 137:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var5.bind(var3)(var2, var4);
                var0.id = var2;
                var2 = 'interval';
                var0.type = var2;
                _closure1_slot17 = var0;
            case 58:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var0 = function(arg0) { // Original name: validateClientSession, environment: var1
        _fun39593: for (var _fun39593_ip = 0;;) switch (_fun39593_ip) {
            case 0:
                var6 = arg0;
                var2 = null;
                var1 = var2 == var6;
                var0 = null;
                if (var1) {
                    _fun39593_ip = 141;
                    continue _fun39593
                }
            case 17:
                var5 = var6.version;
                var4 = _closure1_slot0;
                var1 = _closure1_slot2;
                var8 = 15;
                var1 = var1[var8];
                var7 = undefined;
                var1 = var4.bind(var7)(var1);
                var4 = var1.CLIENT_SESSION_STORAGE_VERSION;
                var1 = var6;
                if (!(var5 !== var4)) {
                    _fun39593_ip = 138;
                    continue _fun39593
                }
            case 61:
                var5 = _closure1_slot15;
                var4 = var5.warn;
                var9 = var6.version;
                var6 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var8];
                var3 = var6.bind(var7)(var3);
                var8 = var3.CLIENT_SESSION_STORAGE_VERSION;
                var3 = global;
                var3 = var3.HermesInternal;
                var7 = var3.concat;
                var6 = 'Throwing away client session with invalid version: ';
                var3 = ', expected ';
                var3 = var7.bind(var6)(var9, var3, var8);
                var3 = var4.bind(var5)(var3);
                var1 = null;
            case 138:
                var0 = var1;
            case 141:
                return var0;
        }
    };
    var _closure1_slot31 = var0;
    var0 = function() { // Original name: forceDispatchSessionIdUpdate, environment: var1
        var0 = undefined;
        var3 = _closure1_slot33;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = function() { // Original name: _forceDispatchSessionIdUpdate, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun39597: for (var _fun39597_ip = 0;;) switch (_fun39597_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun39597_ip = 114;
                            continue _fun39597
                        }
                    case 7:
                        var4 = _closure1_slot39;
                        var2 = undefined;
                        var1 = false;
                        var1 = var4.bind(var2)(var1);
                        SaveGenerator(address = 27);
                    case 25:
                        return var1;
                    case 27:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun39597_ip = 111;
                            continue _fun39597
                        }
                    case 33:
                        var4 = null;
                        if (!(var4 != var1)) {
                            _fun39597_ip = 108;
                            continue _fun39597
                        }
                    case 39:
                        var6 = _closure1_slot4;
                        var5 = var6.getSocket;
                        var7 = var5.bind(var6)();
                        if (!(var4 != var7)) {
                            _fun39597_ip = 108;
                            continue _fun39597
                        }
                    case 57:
                        var6 = var7.handleUpdateTimeSpentSessionId;
                        var5 = var1.createdAtTimestamp;
                        var4 = var1.uuid;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 16;
                        var3 = var9[var3];
                        var3 = var8.bind(var2)(var3);
                        var3 = var3.clientLaunchId;
                        var3 = var6.bind(var7)(var5, var4, var3);
                    case 108:
                        return var2;
                    case 111:
                        return var1;
                    case 114:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot33 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function() { // Original name: handleAuthenticationChange, environment: var1
        _fun39598: for (var _fun39598_ip = 0;;) switch (_fun39598_ip) {
            case 0:
                var2 = _closure1_slot5;
                var1 = var2.getToken;
                var1 = var1.bind(var2)();
                var2 = _closure1_slot23;
                if (!(var2 !== var1)) {
                    _fun39598_ip = 104;
                    continue _fun39598
                }
            case 25:
                _closure1_slot23 = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var4 = var1.Storage;
                var3 = var4.remove;
                var1 = _closure1_slot13;
                var1 = var3.bind(var4)(var1);
                var1 = {
                    'state': 'loaded',
                    'session': null
                };
                _closure1_slot20 = var1;
                var1 = _closure1_slot24;
                var1 = var1.bind(var2)();
                var1 = 0;
                _closure1_slot19 = var1;
            case 104:
                var1 = _closure1_slot29;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot34 = var0;
    var0 = function() { // Original name: handleRTCStateChange, environment: var1
        _fun39599: for (var _fun39599_ip = 0;;) switch (_fun39599_ip) {
            case 0:
                var2 = _closure1_slot7;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var2 = _closure1_slot21;
                if (!(var2 !== var1)) {
                    _fun39599_ip = 39;
                    continue _fun39599
                }
            case 25:
                _closure1_slot21 = var1;
                var1 = _closure1_slot29;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 39:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot35 = var0;
    var0 = function(arg0) { // Original name: handleWindowFocus, environment: var1
        _fun39600: for (var _fun39600_ip = 0;;) switch (_fun39600_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.focused;
                var2 = _closure1_slot22;
                if (!(var2 !== var1)) {
                    _fun39600_ip = 34;
                    continue _fun39600
                }
            case 20:
                _closure1_slot22 = var1;
                var1 = _closure1_slot29;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 34:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot36 = var0;
    var0 = function(arg0) { // Original name: handleAppStateUpdate, environment: var1
        _fun39601: for (var _fun39601_ip = 0;;) switch (_fun39601_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.state;
                var1 = _closure1_slot9;
                var1 = var1.ACTIVE;
                var1 = var2 === var1;
                var2 = _closure1_slot22;
                if (!(var2 !== var1)) {
                    _fun39601_ip = 47;
                    continue _fun39601
                }
            case 33:
                _closure1_slot22 = var1;
                var1 = _closure1_slot29;
                var0 = undefined;
                var0 = var1.bind(var0)();
            case 47:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = function() { // Original name: handleFluxInitialized, environment: var1
        var2 = _closure1_slot7;
        var0 = var2.getState;
        var0 = var0.bind(var2)();
        _closure1_slot21 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 8;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.isForegrounded;
        var2 = var2.bind(var3)();
        _closure1_slot22 = var2;
        var1 = _closure1_slot34;
        var1 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot38 = var0;
    var3 = function() { // Original name: getSession, environment: var1
        var0 = undefined;
        var3 = _closure1_slot40;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot39 = var3;
    var0 = function() { // Original name: _getSession, environment: var1
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun39606: for (var _fun39606_ip = 0;;) switch (_fun39606_ip) {
                    case 0:
                        StartGenerator();
                        var1 = arguments[0];
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun39606_ip = 256;
                            continue _fun39606
                        }
                    case 15:
                        var3 = undefined;
                        if (!(var1 === var3)) {
                            _fun39606_ip = 23;
                            continue _fun39606
                        }
                    case 21:
                        var1 = true;
                    case 23:
                        var _closure4_slot0 = var1;
                        var _closure4_slot1 = var3;
                        var _closure4_slot2 = var3;
                        SaveGenerator(address = 39);
                    case 37:
                        return var3;
                    case 39:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun39606_ip = 253;
                            continue _fun39606
                        }
                    case 48:
                        var6 = null;
                        _closure4_slot1 = var6;
                        var5 = _closure1_slot20;
                        var8 = var5.state;
                        var7 = 'loaded';
                        var5 = null;
                        if (!(var7 === var8)) {
                            _fun39606_ip = 104;
                            continue _fun39606
                        }
                    case 76:
                        var7 = _closure1_slot20;
                        var7 = var7.session;
                        var8 = var6 == var7;
                        var6 = undefined;
                        if (var8) {
                            _fun39606_ip = 101;
                            continue _fun39606
                        }
                    case 95:
                        var6 = var7.uuid;
                    case 101:
                        var5 = var6;
                    case 104:
                        _closure4_slot2 = var5;
                    case 108: // try_start_0
                        var5 = _closure1_slot20;
                        var6 = var5.state;
                        var5 = 'uninitialized';
                        if (!(var5 !== var6)) {
                            _fun39606_ip = 139;
                            continue _fun39606
                        }
                    case 127:
                        var5 = _closure1_slot20;
                        var6 = var5.session;
                        _fun39606_ip = 199;
                        continue _fun39606;
                    case 139:
                        var7 = _closure1_slot31;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 14;
                        var5 = var9[var5];
                        var5 = var8.bind(var3)(var5);
                        var9 = var5.Storage;
                        var8 = var9.getAfterRefresh;
                        var5 = _closure1_slot13;
                        var5 = var8.bind(var9)(var5);
                        SaveGenerator(address = 188);
                    case 186:
                        return var5;
                    case 188:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 8);
                        if (var8) {
                            _fun39606_ip = 205;
                            continue _fun39606
                        }
                    case 194:
                        var6 = var7.bind(var3)(var5);
                    case 199:
                        _closure4_slot1 = var6;
                    case 203: // try_end0
                        _fun39606_ip = 241;
                        continue _fun39606;
                    case 205:
                        return var5;
                    case 208: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 9;
                        var4 = var7[var4];
                        var5 = var5.bind(var3)(var4);
                        var4 = var5.captureException;
                        var4 = var4.bind(var5)(var6);
                    case 241:
                        var2 = function() { // Environment: var2
                            _fun39607: for (var _fun39607_ip = 0;;) switch (_fun39607_ip) {
                                case 0:
                                    var5 = global;
                                    var1 = var5.Date;
                                    var0 = var1.now;
                                    var4 = var0.bind(var1)();
                                    var0 = _closure1_slot28;
                                    var7 = undefined;
                                    var6 = var0.bind(var7)();
                                    var3 = _closure4_slot1;
                                    var2 = null;
                                    if (var6) {
                                        _fun39607_ip = 99;
                                        continue _fun39607
                                    }
                                case 42:
                                    var6 = var2 != var3;
                                    if (!var6) {
                                        _fun39607_ip = 84;
                                        continue _fun39607
                                    }
                                case 49:
                                    var9 = _closure1_slot0;
                                    var10 = _closure1_slot2;
                                    var8 = 15;
                                    var8 = var10[var8];
                                    var10 = var9.bind(var7)(var8);
                                    var9 = var10.isSessionExpired;
                                    var8 = _closure4_slot1;
                                    var6 = var9.bind(var10)(var8);
                                case 84:
                                    if (!var6) {
                                        _fun39607_ip = 357;
                                        continue _fun39607
                                    }
                                case 90:
                                    _closure4_slot1 = var2;
                                    _fun39607_ip = 357;
                                    continue _fun39607;
                                case 99:
                                    var3 = var2 == var3;
                                    if (var3) {
                                        _fun39607_ip = 141;
                                        continue _fun39607
                                    }
                                case 106:
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var6 = 15;
                                    var6 = var9[var6];
                                    var9 = var8.bind(var7)(var6);
                                    var8 = var9.isSessionExpired;
                                    var6 = _closure4_slot1;
                                    var3 = var8.bind(var9)(var6);
                                case 141:
                                    if (!var3) {
                                        _fun39607_ip = 224;
                                        continue _fun39607
                                    }
                                case 144:
                                    var3 = {};
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot2;
                                    var6 = 19;
                                    var6 = var9[var6];
                                    var10 = var8.bind(var7)(var6);
                                    var6 = var10.v4;
                                    var6 = var6.bind(var10)();
                                    var3.uuid = var6;
                                    var3.createdAtTimestamp = var4;
                                    var3.lastUsedTimestamp = var4;
                                    var6 = 15;
                                    var6 = var9[var6];
                                    var6 = var8.bind(var7)(var6);
                                    var6 = var6.CLIENT_SESSION_STORAGE_VERSION;
                                    var3.version = var6;
                                    _closure4_slot1 = var3;
                                    var3 = 0;
                                    _closure1_slot18 = var3;
                                case 224:
                                    var3 = _closure4_slot1;
                                    var3.lastUsedTimestamp = var4;
                                    var6 = _closure4_slot1;
                                    var4 = var6;
                                    var3 = undefined;
                                    var6 = var5.performance;
                                    var5 = var6.now;
                                    var6 = var5.bind(var6)();
                                    var3 = var6;
                                    var5 = _closure1_slot18;
                                    var6 = var6 - var5;
                                    var5 = _closure1_slot12;
                                    if (!(!(var6 < var5))) {
                                        _fun39607_ip = 357;
                                        continue _fun39607
                                    }
                                case 277: // try_start_0
                                    var6 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var5 = 14;
                                    var5 = var8[var5];
                                    var5 = var6.bind(var7)(var5);
                                    var8 = var5.Storage;
                                    var6 = var8.set;
                                    var5 = _closure1_slot13;
                                    var4 = var6.bind(var8)(var5, var4);
                                    _closure1_slot18 = var3;
                                case 322: // try_end0
                                    _fun39607_ip = 357;
                                    continue _fun39607;
                                case 324: // catch_target0
                                    CatchBlockStart(arg_register = 5);
                                    var4 = _closure1_slot1;
                                    var6 = _closure1_slot2;
                                    var3 = 9;
                                    var3 = var6[var3];
                                    var4 = var4.bind(var7)(var3);
                                    var3 = var4.captureException;
                                    var3 = var3.bind(var4)(var5);
                                case 357:
                                    var3 = {};
                                    var4 = 'loaded';
                                    var3.state = var4;
                                    var4 = _closure4_slot1;
                                    var3.session = var4;
                                    _closure1_slot20 = var3;
                                    var3 = _closure4_slot1;
                                    var3 = var2 != var3;
                                    if (!var3) {
                                        _fun39607_ip = 409;
                                        continue _fun39607
                                    }
                                case 391:
                                    var5 = _closure4_slot2;
                                    var4 = _closure4_slot1;
                                    var4 = var4.uuid;
                                    var3 = var5 !== var4;
                                case 409:
                                    if (!var3) {
                                        _fun39607_ip = 416;
                                        continue _fun39607
                                    }
                                case 412:
                                    var3 = _closure4_slot0;
                                case 416:
                                    if (!var3) {
                                        _fun39607_ip = 496;
                                        continue _fun39607
                                    }
                                case 419:
                                    var4 = _closure1_slot4;
                                    var3 = var4.getSocket;
                                    var5 = var3.bind(var4)();
                                    if (!(var2 != var5)) {
                                        _fun39607_ip = 496;
                                        continue _fun39607
                                    }
                                case 437:
                                    var4 = var5.handleUpdateTimeSpentSessionId;
                                    var2 = _closure4_slot1;
                                    var3 = var2.createdAtTimestamp;
                                    var2 = _closure4_slot1;
                                    var2 = var2.uuid;
                                    var6 = _closure1_slot0;
                                    var8 = _closure1_slot2;
                                    var1 = 16;
                                    var1 = var8[var1];
                                    var1 = var6.bind(var7)(var1);
                                    var1 = var1.clientLaunchId;
                                    var1 = var4.bind(var5)(var3, var2, var1);
                                case 496:
                                    var0 = _closure4_slot1;
                                    return var0;
                            }
                        };
                        var2 = var2.bind(var3)();
                        return var2;
                    case 253:
                        return var1;
                    case 256:
                        return var0;
                }
            };
            var1 = var0.next;
            var1 = var1.bind(var0)();
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot40 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot40 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var4 = 0;
    var7 = var6[var4];
    var0 = undefined;
    var7 = var10.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var6[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var6[var7];
    var7 = var10.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var8 = 3;
    var8 = var6[var8];
    var8 = var10.bind(var0)(var8);
    var _closure1_slot6 = var8;
    var8 = 4;
    var8 = var6[var8];
    var8 = var10.bind(var0)(var8);
    var _closure1_slot7 = var8;
    var9 = 5;
    var9 = var6[var9];
    var9 = var5.bind(var0)(var9);
    var11 = var9.AnalyticEvents;
    var _closure1_slot8 = var11;
    var11 = var9.AppStates;
    var _closure1_slot9 = var11;
    var9 = var9.RTCConnectionStates;
    var _closure1_slot10 = var9;
    var9 = 6;
    var11 = var6[var9];
    var11 = var10.bind(var0)(var11);
    var11 = var11.Millis;
    var12 = var11.MINUTE;
    var11 = 15;
    var11 = var11 * var12;
    var _closure1_slot11 = var11;
    var9 = var6[var9];
    var9 = var10.bind(var0)(var9);
    var9 = var9.Millis;
    var9 = var9.SECOND;
    var _closure1_slot12 = var9;
    var9 = 'LAST_CLIENT_HEARTBEAT_SESSION';
    var _closure1_slot13 = var9;
    var9 = 'user';
    var _closure1_slot14 = var9;
    var9 = 7;
    var9 = var6[var9];
    var11 = var10.bind(var0)(var9);
    var9 = var11.prototype;
    var10 = Object.create(var9, {
        constructor: {
            value: var11
        }
    });
    var15 = 'SessionHeartbeatScheduler';
    var16 = var10;
    var9 = new var16[var11](var15, var14);
    var9 = var9 instanceof Object ? var9 : var10;
    var _closure1_slot15 = var9;
    var9 = null;
    var _closure1_slot16 = var9;
    var _closure1_slot17 = var9;
    var _closure1_slot18 = var4;
    var _closure1_slot19 = var4;
    var4 = {};
    var9 = 'uninitialized';
    var4.state = var9;
    var _closure1_slot20 = var4;
    var4 = var8.getState;
    var4 = var4.bind(var8)();
    var _closure1_slot21 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var0)(var4);
    var4 = var8.isForegrounded;
    var4 = var4.bind(var8)();
    var _closure1_slot22 = var4;
    var4 = var7.getToken;
    var4 = var4.bind(var7)();
    var _closure1_slot23 = var4;
    var4 = 20;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/analytics_sessions/SessionHeartbeatScheduler.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function() { // Original name: initSessionHeartbeatScheduler, environment: var1
        var3 = _closure1_slot1;
        var4 = _closure1_slot2;
        var0 = 9;
        var2 = var4[var0];
        var0 = undefined;
        var6 = var3.bind(var0)(var2);
        var5 = var6.addBreadcrumb;
        var2 = {};
        var7 = 'Initializing SessionHeartbeatScheduler';
        var2.message = var7;
        var2 = var5.bind(var6)(var2);
        var6 = _closure1_slot7;
        var5 = var6.addChangeListener;
        var2 = _closure1_slot35;
        var2 = var5.bind(var6)(var2);
        var6 = _closure1_slot5;
        var5 = var6.addChangeListener;
        var2 = _closure1_slot34;
        var2 = var5.bind(var6)(var2);
        var2 = 17;
        var5 = var4[var2];
        var8 = var3.bind(var0)(var5);
        var7 = var8.subscribe;
        var6 = _closure1_slot36;
        var5 = 'WINDOW_FOCUS';
        var5 = var7.bind(var8)(var5, var6);
        var5 = var4[var2];
        var8 = var3.bind(var0)(var5);
        var7 = var8.subscribe;
        var6 = _closure1_slot37;
        var5 = 'APP_STATE_UPDATE';
        var5 = var7.bind(var8)(var5, var6);
        var2 = var4[var2];
        var7 = var3.bind(var0)(var2);
        var6 = var7.subscribe;
        var5 = _closure1_slot32;
        var2 = 'CONNECTION_OPEN';
        var2 = var6.bind(var7)(var2, var5);
        var2 = _closure1_slot29;
        var2 = var2.bind(var0)();
        var2 = _closure1_slot30;
        var2 = var2.bind(var0)();
        var2 = 18;
        var2 = var4[var2];
        var2 = var3.bind(var0)(var2);
        var3 = var2.initialized;
        var2 = var3.then;
        var1 = _closure1_slot38;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.initSessionHeartbeatScheduler = var4;
    var2.getSession = var3;
    var1 = function() { // Original name: getActiveSessionUnsafe, environment: var1
        _fun39609: for (var _fun39609_ip = 0;;) switch (_fun39609_ip) {
            case 0:
                var0 = _closure1_slot20;
                var1 = var0.state;
                var0 = 'uninitialized';
                if (!(var0 !== var1)) {
                    _fun39609_ip = 34;
                    continue _fun39609
                }
            case 22:
                var0 = _closure1_slot20;
                var1 = var0.session;
                _fun39609_ip = 85;
                continue _fun39609;
            case 34:
                var4 = _closure1_slot31;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 14;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var5.bind(var3)(var0);
                var6 = var0.Storage;
                var5 = var6.get;
                var0 = _closure1_slot13;
                var0 = var5.bind(var6)(var0);
                var1 = var4.bind(var3)(var0);
            case 85:
                var3 = null;
                var4 = var3 == var1;
                var0 = null;
                if (var4) {
                    _fun39609_ip = 137;
                    continue _fun39609
                }
            case 96:
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 15;
                var4 = var4[var2];
                var2 = undefined;
                var4 = var5.bind(var2)(var4);
                var2 = var4.isSessionExpired;
                var2 = var2.bind(var4)(var1);
                var0 = null;
                if (var2) {
                    _fun39609_ip = 137;
                    continue _fun39609
                }
            case 134:
                var0 = var1;
            case 137:
                return var0;
        }
    };
    var2.getActiveSessionUnsafe = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3433, 1216, 4187, 3477, 660, 667, 3, 4272, 1207, 4273, 4277, 795, 4318, 587, 4319, 653, 806, 566, 491, 2]);