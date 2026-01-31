// modules/rtc/RTCLatencyTestManager.tsx
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
        _fun114097: for (var _fun114097_ip = 0;;) switch (_fun114097_ip) {
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
                _fun114097_ip = 76;
                continue _fun114097;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var0 = global;
    var9 = var0.Object;
    var7 = var9.defineProperty;
    var3 = {};
    var8 = true;
    var3.value = var8;
    var0 = '__esModule';
    var0 = var7.bind(var9)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var9 = 1;
    var3 = var5[var9];
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Features;
    var _closure1_slot10 = var3;
    var3 = 8;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var7 = var7.Millis;
    var7 = var7.SECOND;
    var7 = var9 * var7;
    var _closure1_slot11 = var7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.Millis;
    var7 = var3.SECOND;
    var3 = 30;
    var3 = var3 * var7;
    var _closure1_slot12 = var3;
    var3 = 9;
    var3 = var5[var3];
    var9 = var6.bind(var0)(var3);
    var3 = var9.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var9
        }
    });
    var12 = 'RTCLatencyTestManager';
    var13 = var7;
    var3 = new var13[var9](var12, var11);
    var7 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot13 = var7;
    var3 = var7.enableNativeLogger;
    var3 = var3.bind(var7)(var8);
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun114101: for (var _fun114101_ip = 0;;) switch (_fun114101_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun114101_ip = 86;
                        continue _fun114101
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun114101_ip = 120;
                    continue _fun114101;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = {};
                    var3 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1._handleConnectionOpen;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2.POST_CONNECTION_OPEN = var3;
                    var0.actions = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun114103: for (var _fun114103_ip = 0;;) switch (_fun114103_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = var3.map;
                                var1 = function(arg0) { // Environment: var0
                                    var0 = arg0;
                                    var0 = var0.region;
                                    return var0;
                                };
                                var5 = var2.bind(var3)(var1);
                                var _closure4_slot0 = var5;
                                var4 = _closure1_slot9;
                                var2 = var4.shouldPerformLatencyTest;
                                var2 = var2.bind(var4)(var5);
                                if (var2) {
                                    _fun114103_ip = 104;
                                    continue _fun114103
                                }
                            case 49:
                                var5 = _closure1_slot13;
                                var4 = var5.verbose;
                                var6 = _closure1_slot9;
                                var2 = var6.getPreferredRegions;
                                var7 = var2.bind(var6)();
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var6 = var2.concat;
                                var2 = 'RTC cached ranked preferred regions are ';
                                var2 = var6.bind(var2)(var7);
                                var2 = var4.bind(var5)(var2);
                                _fun114103_ip = 164;
                                continue _fun114103;
                            case 104:
                                var2 = _closure1_slot8;
                                var1 = var2.getMediaEngine;
                                var2 = var1.bind(var2)();
                                var1 = var2.rankRtcRegions;
                                var3 = var1.bind(var2)(var3);
                                var2 = var3.then;
                                var1 = function(arg0) { // Environment: var0
                                    var4 = arg0;
                                    var3 = _closure1_slot13;
                                    var2 = var3.verbose;
                                    var1 = 'RTC region latency test completed, ranked regions are: ';
                                    var1 = var2.bind(var3)(var1, var4);
                                    var2 = _closure1_slot0;
                                    var1 = _closure1_slot2;
                                    var0 = 10;
                                    var1 = var1[var0];
                                    var0 = undefined;
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.completeRTCLatencyTest;
                                    var1 = _closure4_slot0;
                                    var1 = var2.bind(var3)(var4, var1);
                                    return var0;
                                };
                                var2 = var2.bind(var3)(var1);
                                var1 = var2.catch;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure1_slot13;
                                    var1 = var2.warn;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var0 = var1.bind(var2)(var0);
                            case 164:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._handleTestRegionsResponse = var2;
                    var2 = function() { // Environment: var1
                        _fun114107: for (var _fun114107_ip = 0;;) switch (_fun114107_ip) {
                            case 0:
                                var4 = _closure1_slot8;
                                var3 = var4.supports;
                                var0 = _closure1_slot10;
                                var0 = var0.PORT_AWARE_LATENCY_TESTING;
                                var0 = var3.bind(var4)(var0);
                                var5 = 1;
                                if (!var0) {
                                    _fun114107_ip = 39;
                                    continue _fun114107
                                }
                            case 36:
                                var5 = 2;
                            case 39:
                                var4 = _closure1_slot0;
                                var6 = _closure1_slot2;
                                var0 = 10;
                                var3 = var6[var0];
                                var0 = undefined;
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.fetchRTCLatencyTestRegions;
                                var5 = var3.bind(var4)(var5);
                                var4 = var5.then;
                                var3 = function(arg0) { // Environment: var2
                                    var2 = _closure3_slot0;
                                    var1 = var2._handleTestRegionsResponse;
                                    var0 = arg0;
                                    var0 = var0.body;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var4 = var4.bind(var5)(var3);
                                var3 = var4.catch;
                                var2 = function(arg0) { // Environment: var2
                                    var2 = _closure1_slot13;
                                    var1 = var2.warn;
                                    var0 = arg0;
                                    var0 = var1.bind(var2)(var0);
                                    return var0;
                                };
                                var2 = var3.bind(var4)(var2);
                                var2 = _closure3_slot0;
                                var3 = global;
                                var4 = var3.setTimeout;
                                var3 = var2._fetchAndScheduleRefetch;
                                var5 = _closure1_slot1;
                                var1 = 8;
                                var1 = var6[var1];
                                var1 = var5.bind(var0)(var1);
                                var1 = var1.Millis;
                                var5 = var1.MINUTE;
                                var1 = 360;
                                var1 = var1 * var5;
                                var1 = var4.bind(var0)(var3, var1);
                                var2.refetchTimeout = var1;
                                return var0;
                        }
                    };
                    var0._fetchAndScheduleRefetch = var2;
                    var1 = function() { // Environment: var1
                        _fun114110: for (var _fun114110_ip = 0;;) switch (_fun114110_ip) {
                            case 0:
                                var3 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 11;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var3.bind(var0)(var1);
                                var1 = var1.isPlatformEmbedded;
                                if (!var1) {
                                    _fun114110_ip = 153;
                                    continue _fun114110
                                }
                            case 34:
                                var1 = global;
                                var4 = var1.Math;
                                var3 = var4.floor;
                                var5 = _closure1_slot11;
                                var7 = var1.Math;
                                var6 = var7.random;
                                var6 = var6.bind(var7)();
                                var2 = _closure1_slot12;
                                var2 = var6 * var2;
                                var2 = var5 + var2;
                                var4 = var3.bind(var4)(var2);
                                var3 = _closure3_slot0;
                                var5 = var3.refetchTimeout;
                                var3 = null;
                                if (!(var3 != var5)) {
                                    _fun114110_ip = 125;
                                    continue _fun114110
                                }
                            case 104:
                                var5 = var1.clearTimeout;
                                var3 = _closure3_slot0;
                                var3 = var3.refetchTimeout;
                                var3 = var5.bind(var0)(var3);
                            case 125:
                                var2 = _closure3_slot0;
                                var3 = var1.setTimeout;
                                var1 = var2._fetchAndScheduleRefetch;
                                var1 = var3.bind(var0)(var1, var4);
                                var2.refetchTimeout = var1;
                            case 153:
                                return var0;
                        }
                    };
                    var0._handleConnectionOpen = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var5 = _closure1_slot7;
        var2 = undefined;
        var4 = arg0;
        var4 = var5.bind(var2)(var3, var4);
        var1 = _closure1_slot4;
        var4 = {};
        var5 = '_terminate';
        var4.key = var5;
        var0 = function() {
            _fun114111: for (var _fun114111_ip = 0;;) switch (_fun114111_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.refetchTimeout;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun114111_ip = 36;
                        continue _fun114111
                    }
                case 15:
                    var1 = global;
                    var2 = var1.clearTimeout;
                    var1 = var0.refetchTimeout;
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                case 36:
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
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var13 = var3;
    var1 = new var13[var1](var12);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/RTCLatencyTestManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3435, 3586, 3469, 667, 3, 14580, 478, 4263, 2]);