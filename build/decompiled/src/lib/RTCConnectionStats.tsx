// lib/RTCConnectionStats.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.RTCConnectionStates;
    var _closure1_slot5 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function arg0() {
            _fun93471: for (var _fun93471_ip = 0;;) switch (_fun93471_ip) {
                case 0:
                    var3 = arg0;
                    var2 = this;
                    var4 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var4.bind(var0)(var2, var1);
                    var1 = null;
                    var2.current = var1;
                    var4 = new Array(0);
                    var2.history = var4;
                    if (!(var1 != var3)) {
                        _fun93471_ip = 61;
                        continue _fun93471
                    }
                case 50:
                    var1 = var2.update;
                    var1 = var1.bind(var2)(var3);
                case 61:
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'reset';
        var0.key = var1;
        var1 = function arg0() {
            _fun93472: for (var _fun93472_ip = 0;;) switch (_fun93472_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var0 = null;
                    var1.current = var0;
                    var3 = new Array(0);
                    var1.history = var3;
                    if (!(var0 != var2)) {
                        _fun93472_ip = 39;
                        continue _fun93472
                    }
                case 28:
                    var0 = var1.update;
                    var0 = var0.bind(var1)(var2);
                case 39:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'update';
        var0.key = var5;
        var5 = function arg0() {
            _fun93473: for (var _fun93473_ip = 0;;) switch (_fun93473_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var1 = var0.current;
                    if (!(var1 !== var3)) {
                        _fun93473_ip = 82;
                        continue _fun93473
                    }
                case 15:
                    var0.current = var3;
                    var2 = var0.history;
                    var1 = var2.push;
                    var0 = {};
                    var0.state = var3;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 3;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.now;
                    var3 = var3.bind(var4)();
                    var0.startTime = var3;
                    var0 = var1.bind(var2)(var0);
                case 82:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getVoiceConnectionSuccessStats';
        var0.key = var5;
        var5 = function() {
            _fun93474: for (var _fun93474_ip = 0;;) switch (_fun93474_ip) {
                case 0:
                    var4 = arguments[0];
                    var2 = this;
                    var3 = undefined;
                    if (!(var4 === var3)) {
                        _fun93474_ip = 46;
                        continue _fun93474
                    }
                case 14:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 3;
                    var1 = var6[var1];
                    var5 = var5.bind(var3)(var1);
                    var1 = var5.now;
                    var4 = var1.bind(var5)();
                case 46:
                    var _closure3_slot0 = var3;
                    var1 = var2.getStateDurations;
                    var1 = var1.bind(var2)(var4);
                    _closure3_slot0 = var1;
                    var2 = function arg0() {
                        var1 = arg0;
                        var _closure4_slot0 = var1;
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 4;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.sumBy;
                        var1 = _closure3_slot0;
                        var0 = function(arg0) { // Environment: var0
                            _fun93476: for (var _fun93476_ip = 0;;) switch (_fun93476_ip) {
                                case 0:
                                    var1 = arg0;
                                    var3 = var1.state;
                                    var2 = _closure4_slot0;
                                    var0 = 0;
                                    if (!(var3 === var2)) {
                                        _fun93476_ip = 27;
                                        continue _fun93476
                                    }
                                case 21:
                                    var0 = var1.durationMs;
                                case 27:
                                    return var0;
                            }
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        return var0;
                    };
                    var0 = {};
                    var1 = _closure1_slot5;
                    var4 = var1.AWAITING_ENDPOINT;
                    var4 = var2.bind(var3)(var4);
                    var0.state_awaiting_endpoint_ms = var4;
                    var4 = var1.AUTHENTICATING;
                    var4 = var2.bind(var3)(var4);
                    var0.state_authenticating_ms = var4;
                    var4 = var1.CONNECTING;
                    var4 = var2.bind(var3)(var4);
                    var0.state_connecting_ms = var4;
                    var4 = var1.DISCONNECTED;
                    var4 = var2.bind(var3)(var4);
                    var0.state_disconnected_ms = var4;
                    var4 = var1.ICE_CHECKING;
                    var4 = var2.bind(var3)(var4);
                    var0.state_ice_checking_ms = var4;
                    var4 = var1.NO_ROUTE;
                    var4 = var2.bind(var3)(var4);
                    var0.state_no_route_ms = var4;
                    var4 = var1.RTC_CONNECTING;
                    var4 = var2.bind(var3)(var4);
                    var0.state_rtc_connecting_ms = var4;
                    var1 = var1.RTC_DISCONNECTED;
                    var1 = var2.bind(var3)(var1);
                    var0.state_rtc_disconnected_ms = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getStateDurations';
        var0.key = var5;
        var4 = function arg0() {
            _fun93477: for (var _fun93477_ip = 0;;) switch (_fun93477_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.history;
                    var2 = var0.length;
                    var0 = 0;
                    if (!(var0 !== var2)) {
                        _fun93477_ip = 136;
                        continue _fun93477
                    }
                case 20:
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var0 = 5;
                    var0 = var6[var0];
                    var4 = undefined;
                    var3 = var5.bind(var4)(var0);
                    var2 = var1.history;
                    var0 = function(arg0, arg1) { // Environment: var0
                        var1 = arg0;
                        var0 = {};
                        var2 = var1.state;
                        var0.state = var2;
                        var2 = arg1;
                        var2 = var2.startTime;
                        var1 = var1.startTime;
                        var1 = var2 - var1;
                        var0.durationMs = var1;
                        return var0;
                    };
                    var0 = var3.bind(var4)(var2, var0);
                    var2 = var0.push;
                    var3 = 4;
                    var3 = var6[var3];
                    var4 = var5.bind(var4)(var3);
                    var3 = var4.last;
                    var1 = var1.history;
                    var3 = var3.bind(var4)(var1);
                    var1 = {};
                    var4 = var3.state;
                    var1.state = var4;
                    var4 = var3.startTime;
                    var3 = arg0;
                    var3 = var3 - var4;
                    var1.durationMs = var3;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                case 136:
                    var0 = new Array(0);
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/RTCConnectionStats.tsx';
    var3 = var4.bind(var5)(var3);
    var2.StateHistory = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 660, 3529, 22, 12239, 2]);