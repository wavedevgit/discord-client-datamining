// modules/analytics_sessions/SessionAdManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun98579: for (var _fun98579_ip = 0;;) switch (_fun98579_ip) {
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
                _fun98579_ip = 76;
                continue _fun98579;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot13 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot13 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var7 = var6.bind(var0)(var3);
    var _closure1_slot8 = var7;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var8 = var3.AnalyticEvents;
    var _closure1_slot9 = var8;
    var3 = var3.AppStates;
    var _closure1_slot10 = var3;
    var3 = var7.getToken;
    var3 = var3.bind(var7)();
    var _closure1_slot11 = var3;
    var3 = {};
    var7 = 'DEFAULT';
    var3.DEFAULT = var7;
    var7 = 'USER_LOGOUT';
    var3.USER_LOGOUT = var7;
    var7 = 'WINDOW_FOCUS';
    var3.WINDOW_FOCUS = var7;
    var7 = 'APP_STATE_UPDATE';
    var3.APP_STATE_UPDATE = var7;
    var _closure1_slot12 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun98583: for (var _fun98583_ip = 0;;) switch (_fun98583_ip) {
                case 0:
                    var6 = this;
                    var2 = 0;
                    var14 = 0;
                    var0 = copyRestArgs(var14);
                    var7 = _closure1_slot3;
                    var4 = _closure2_slot0;
                    var5 = undefined;
                    var7 = var7.bind(var5)(var6, var4);
                    var11 = new Array(0);
                    var14 = var11;
                    var13 = var0;
                    var12 = 0;
                    var0 = arraySpread(var14, var13, var12);
                    var0 = _closure1_slot6;
                    var10 = var0.bind(var5)(var4);
                    var4 = _closure1_slot5;
                    var0 = _closure1_slot13;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun98583_ip = 88;
                        continue _fun98583
                    }
                case 75:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var6, var11);
                    _fun98583_ip = 122;
                    continue _fun98583;
                case 88:
                    var7 = global;
                    var9 = var7.Reflect;
                    var8 = var9.construct;
                    var7 = _closure1_slot6;
                    var7 = var7.bind(var5)(var6);
                    var7 = var7.constructor;
                    var0 = var8.bind(var9)(var10, var11, var7);
                case 122:
                    var0 = var4.bind(var5)(var6, var0);
                    var _closure3_slot0 = var0;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 7;
                    var3 = var6[var3];
                    var7 = var4.bind(var5)(var3);
                    var3 = var7.isForegrounded;
                    var3 = var3.bind(var7)();
                    var0.focusedOrForegrounded = var3;
                    var3 = 8;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.Interval;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var15 = var4;
                    var3 = new var15[var3](var14);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var0.heartbeatInterval = var3;
                    var3 = false;
                    var0.schedulerStarted = var3;
                    var0.lastHeartbeatTimestamp = var2;
                    var2 = function() { // Environment: var1
                        _fun98584: for (var _fun98584_ip = 0;;) switch (_fun98584_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = var1.heartbeatInterval;
                                var1 = var2.isStarted;
                                var1 = var1.bind(var2)();
                                if (var1) {
                                    _fun98584_ip = 107;
                                    continue _fun98584
                                }
                            case 26:
                                var0 = _closure3_slot0;
                                var1 = var0.trackHeartbeat;
                                var1 = var1.bind(var0)();
                                var3 = var0.heartbeatInterval;
                                var2 = var3.start;
                                var5 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var1 = 9;
                                var4 = var4[var1];
                                var1 = undefined;
                                var1 = var5.bind(var1)(var4);
                                var1 = var1.Millis;
                                var4 = var1.MINUTE;
                                var1 = 5;
                                var1 = var1 * var4;
                                var0 = var0.trackHeartbeat;
                                var0 = var2.bind(var3)(var1, var0);
                            case 107:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.maybeStartHeartbeat = var2;
                    var2 = function() { // Environment: var1
                        _fun98585: for (var _fun98585_ip = 0;;) switch (_fun98585_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var1 = var1.schedulerStarted;
                                if (var1) {
                                    _fun98585_ip = 88;
                                    continue _fun98585
                                }
                            case 16:
                                var1 = _closure3_slot0;
                                var0 = true;
                                var1.schedulerStarted = var0;
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var0 = 10;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.addBreadcrumb;
                                var0 = {
                                    'category': 'ad',
                                    'message': 'Starting ad session heartbeat'
                                };
                                var0 = var2.bind(var3)(var0);
                                var0 = var1.maybeStartHeartbeat;
                                var0 = var0.bind(var1)();
                            case 88:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.startAnalyticHeartbeat = var2;
                    var2 = function() { // Environment: var1
                        _fun98586: for (var _fun98586_ip = 0;;) switch (_fun98586_ip) {
                            case 0:
                                var6 = arguments[0];
                                var0 = undefined;
                                if (!(var6 === var0)) {
                                    _fun98586_ip = 11;
                                    continue _fun98586
                                }
                            case 9:
                                var6 = false;
                            case 11:
                                var2 = _closure3_slot0;
                                var2 = var2.schedulerStarted;
                                if (var2) {
                                    _fun98586_ip = 102;
                                    continue _fun98586
                                }
                            case 27:
                                if (var6) {
                                    _fun98586_ip = 102;
                                    continue _fun98586
                                }
                            case 30:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 10;
                                var2 = var4[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.addBreadcrumb;
                                var2 = {
                                    'category': 'ad',
                                    'message': 'Ad heartbeat called but scheduler not started'
                                };
                                var2 = var3.bind(var4)(var2);
                                var2 = _closure3_slot0;
                                var3 = var2.heartbeatInterval;
                                var2 = var3.stop;
                                var2 = var2.bind(var3)();
                                var2 = undefined;
                                return var2;
                            case 102:
                                var2 = global;
                                var3 = var2.performance;
                                var2 = var3.now;
                                var2 = var2.bind(var3)();
                                var3 = _closure3_slot0;
                                var3 = var3.lastHeartbeatTimestamp;
                                var5 = var2 - var3;
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var4 = 9;
                                var4 = var8[var4];
                                var4 = var7.bind(var0)(var4);
                                var4 = var4.Millis;
                                var7 = var4.MINUTE;
                                var4 = 5;
                                var4 = var4 * var7;
                                if (var6) {
                                    _fun98586_ip = 198;
                                    continue _fun98586
                                }
                            case 178:
                                var6 = _closure3_slot0;
                                var7 = var6.lastHeartbeatTimestamp;
                                var6 = 0;
                                if (!(var7 > var6)) {
                                    _fun98586_ip = 198;
                                    continue _fun98586
                                }
                            case 194:
                                if (!(!(var5 < var4))) {
                                    _fun98586_ip = 307;
                                    continue _fun98586
                                }
                            case 198:
                                var5 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var4 = 11;
                                var4 = var6[var4];
                                var5 = var5.bind(var0)(var4);
                                var4 = var5.getOrRefreshAdSession;
                                var7 = var4.bind(var5)();
                                var5 = _closure1_slot1;
                                var4 = 12;
                                var4 = var6[var4];
                                var6 = var5.bind(var0)(var4);
                                var5 = var6.track;
                                var3 = _closure1_slot9;
                                var4 = var3.CLIENT_AD_HEARTBEAT;
                                var3 = {};
                                var8 = var7.uuid;
                                var3.client_ad_session_id = var8;
                                var7 = var7.createdAtTimestamp;
                                var3.client_heartbeat_initialization_timestamp = var7;
                                var7 = 3;
                                var3.client_heartbeat_version = var7;
                                var3 = var5.bind(var6)(var4, var3);
                                var1 = _closure3_slot0;
                                var1.lastHeartbeatTimestamp = var2;
                            case 307:
                                return var0;
                        }
                    };
                    var0.trackHeartbeat = var2;
                    var2 = function() { // Environment: var1
                        _fun98587: for (var _fun98587_ip = 0;;) switch (_fun98587_ip) {
                            case 0:
                                var7 = arguments[0];
                                var0 = undefined;
                                if (!(var7 === var0)) {
                                    _fun98587_ip = 22;
                                    continue _fun98587
                                }
                            case 9:
                                var1 = _closure1_slot12;
                                var7 = var1.DEFAULT;
                            case 22:
                                var2 = _closure3_slot0;
                                var2 = var2.schedulerStarted;
                                if (!var2) {
                                    _fun98587_ip = 149;
                                    continue _fun98587
                                }
                            case 38:
                                var1 = _closure3_slot0;
                                var2 = false;
                                var1.schedulerStarted = var2;
                                var2 = 0;
                                var1.lastHeartbeatTimestamp = var2;
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 10;
                                var2 = var4[var2];
                                var4 = var3.bind(var0)(var2);
                                var3 = var4.addBreadcrumb;
                                var2 = {};
                                var5 = 'ad';
                                var2.category = var5;
                                var5 = global;
                                var5 = var5.HermesInternal;
                                var6 = var5.concat;
                                var5 = 'Stopping ad session heartbeat: ';
                                var5 = var6.bind(var5)(var7);
                                var2.message = var5;
                                var2 = var3.bind(var4)(var2);
                                var2 = var1.heartbeatInterval;
                                var1 = var2.stop;
                                var1 = var1.bind(var2)();
                            case 149:
                                return var0;
                        }
                    };
                    var0.stopAnalyticHeartbeat = var2;
                    var2 = function() { // Environment: var1
                        _fun98588: for (var _fun98588_ip = 0;;) switch (_fun98588_ip) {
                            case 0:
                                var5 = arguments[0];
                                var0 = undefined;
                                if (!(var5 === var0)) {
                                    _fun98588_ip = 22;
                                    continue _fun98588
                                }
                            case 9:
                                var1 = _closure1_slot12;
                                var5 = var1.DEFAULT;
                            case 22:
                                var1 = _closure3_slot0;
                                var1 = var1.focusedOrForegrounded;
                                if (!var1) {
                                    _fun98588_ip = 51;
                                    continue _fun98588
                                }
                            case 38:
                                var4 = _closure1_slot11;
                                var3 = null;
                                if (!(var3 == var4)) {
                                    _fun98588_ip = 68;
                                    continue _fun98588
                                }
                            case 51:
                                var4 = _closure3_slot0;
                                var3 = var4.stopAnalyticHeartbeat;
                                var3 = var3.bind(var4)(var5);
                                _fun98588_ip = 117;
                                continue _fun98588;
                            case 68: // try_start_0
                                var3 = _closure3_slot0;
                                var2 = var3.startAnalyticHeartbeat;
                                var2 = var2.bind(var3)();
                            case 82: // try_end0
                                _fun98588_ip = 117;
                                continue _fun98588;
                            case 84: // catch_target0
                                CatchBlockStart(arg_register = 3);
                                var2 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var1 = 10;
                                var1 = var4[var1];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.captureException;
                                var1 = var1.bind(var2)(var3);
                            case 117:
                                return var0;
                        }
                    };
                    var0.scheduleHeartbeatTracking = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure3_slot0;
                        var0 = var2.scheduleHeartbeatTracking;
                        var0 = var0.bind(var2)();
                        var1 = var2.trackHeartbeat;
                        var0 = true;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleLogin = var2;
                    var2 = function() { // Environment: var1
                        var3 = _closure3_slot0;
                        var2 = var3.stopAnalyticHeartbeat;
                        var1 = _closure1_slot12;
                        var1 = var1.USER_LOGOUT;
                        var1 = var2.bind(var3)(var1);
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 11;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.clearAdSession;
                        var1 = var1.bind(var2)();
                        return var0;
                    };
                    var0.handleLogout = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 11;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.getOrRefreshAdSession;
                        var1 = true;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleEnrollmentSuccess = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.focused;
                        var2 = _closure3_slot0;
                        var2.focusedOrForegrounded = var0;
                        var1 = var2.scheduleHeartbeatTracking;
                        var0 = _closure1_slot12;
                        var0 = var0.WINDOW_FOCUS;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleWindowFocus = var2;
                    var2 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var3 = var0.state;
                        var2 = _closure3_slot0;
                        var1 = _closure1_slot10;
                        var1 = var1.ACTIVE;
                        var1 = var3 === var1;
                        var2.focusedOrForegrounded = var1;
                        var1 = var2.scheduleHeartbeatTracking;
                        var0 = _closure1_slot12;
                        var0 = var0.APP_STATE_UPDATE;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var0.handleAppStateUpdate = var2;
                    var1 = function() { // Environment: var1
                        _fun98594: for (var _fun98594_ip = 0;;) switch (_fun98594_ip) {
                            case 0:
                                var2 = _closure1_slot8;
                                var1 = var2.getToken;
                                var1 = var1.bind(var2)();
                                var2 = _closure1_slot11;
                                if (!(var2 !== var1)) {
                                    _fun98594_ip = 78;
                                    continue _fun98594
                                }
                            case 25:
                                _closure1_slot11 = var1;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.clearAdSession;
                                var0 = var0.bind(var1)();
                                var1 = _closure3_slot0;
                                var0 = var1.stopAnalyticHeartbeat;
                                var0 = var0.bind(var1)();
                            case 78:
                                var1 = _closure3_slot0;
                                var0 = var1.scheduleHeartbeatTracking;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleAuthenticationChange = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var0 = 7;
            var3 = var4[var0];
            var0 = undefined;
            var5 = var5.bind(var0)(var3);
            var3 = var5.isForegrounded;
            var3 = var3.bind(var5)();
            var2.focusedOrForegrounded = var3;
            var6 = _closure1_slot8;
            var5 = var6.addChangeListener;
            var3 = var2.handleAuthenticationChange;
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot1;
            var1 = 13;
            var5 = var4[var1];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var2.handleWindowFocus;
            var5 = 'WINDOW_FOCUS';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var1];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var2.handleAppStateUpdate;
            var5 = 'APP_STATE_UPDATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var1];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var2.handleEnrollmentSuccess;
            var5 = 'QUESTS_ENROLL_SUCCESS';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var1];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var2.handleLogin;
            var5 = 'LOGIN_SUCCESS';
            var5 = var7.bind(var8)(var5, var6);
            var1 = var4[var1];
            var5 = var3.bind(var0)(var1);
            var4 = var5.subscribe;
            var3 = var2.handleLogout;
            var1 = 'LOGOUT';
            var1 = var4.bind(var5)(var1, var3);
            var1 = var2.scheduleHeartbeatTracking;
            var1 = var1.bind(var2)();
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() {
            var1 = this;
            var0 = var1.stopAnalyticHeartbeat;
            var0 = var0.bind(var1)();
            var4 = _closure1_slot8;
            var3 = var4.removeChangeListener;
            var2 = var1.handleAuthenticationChange;
            var2 = var3.bind(var4)(var2);
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 13;
            var5 = var4[var2];
            var0 = undefined;
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleWindowFocus;
            var5 = 'WINDOW_FOCUS';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleAppStateUpdate;
            var5 = 'APP_STATE_UPDATE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleEnrollmentSuccess;
            var5 = 'QUESTS_ENROLL_SUCCESS';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleLogin;
            var5 = 'LOGIN_SUCCESS';
            var5 = var7.bind(var8)(var5, var6);
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.unsubscribe;
            var2 = var1.handleLogout;
            var1 = 'LOGOUT';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 15;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/analytics_sessions/SessionAdManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 660, 4311, 3621, 667, 1207, 5260, 795, 806, 4009, 2]);