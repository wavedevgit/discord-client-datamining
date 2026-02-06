// modules/jank_stats/native/JankStatsManager.android.tsx
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
        _fun113658: for (var _fun113658_ip = 0;;) switch (_fun113658_ip) {
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
                _fun113658_ip = 76;
                continue _fun113658;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot10 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot10 = var0;
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
    var3 = var4.bind(var0)(var3);
    var7 = var3.AppStates;
    var _closure1_slot8 = var7;
    var3 = var3.AnalyticEvents;
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun113662: for (var _fun113662_ip = 0;;) switch (_fun113662_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var1);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var3)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot10;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun113662_ip = 86;
                        continue _fun113662
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun113662_ip = 120;
                    continue _fun113662;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var1.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = null;
                    var0._timeoutId = var1;
                    var1 = false;
                    var0._isScheduledReportSent = var1;
                    var1 = true;
                    var0._isStartup = var1;
                    var1 = {};
                    var3 = function arg0() {
                        var2 = _closure3_slot0;
                        var1 = var2.handleAppStateUpdate;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = undefined;
                        return var0;
                    };
                    var1.APP_STATE_UPDATE = var3;
                    var2 = function() {
                        var1 = _closure3_slot0;
                        var0 = var1.handleConnectionOpenSupplemental;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var1.CONNECTION_OPEN_SUPPLEMENTAL = var2;
                    var0.actions = var1;
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
        var0 = 'handleAppStateUpdate';
        var4.key = var0;
        var0 = function arg0() {
            _fun113665: for (var _fun113665_ip = 0;;) switch (_fun113665_ip) {
                case 0:
                    var2 = this;
                    var0 = arg0;
                    var1 = var0.state;
                    var3 = _closure1_slot8;
                    var3 = var3.ACTIVE;
                    if (!(var1 === var3)) {
                        _fun113665_ip = 49;
                        continue _fun113665
                    }
                case 28:
                    var3 = var2._isStartup;
                    if (var3) {
                        _fun113665_ip = 49;
                        continue _fun113665
                    }
                case 37:
                    var3 = var2.scheduleReport;
                    var3 = var3.bind(var2)();
                    _fun113665_ip = 119;
                    continue _fun113665;
                case 49:
                    var0 = _closure1_slot8;
                    var0 = var0.BACKGROUND;
                    var0 = var1 !== var0;
                    if (var0) {
                        _fun113665_ip = 72;
                        continue _fun113665
                    }
                case 66:
                    var0 = var2._isScheduledReportSent;
                case 72:
                    if (var0) {
                        _fun113665_ip = 119;
                        continue _fun113665
                    }
                case 75:
                    var0 = global;
                    var3 = var0.clearTimeout;
                    var1 = var2._timeoutId;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var1);
                    var0 = null;
                    var2._timeoutId = var0;
                    var1 = var2.sendReport;
                    var0 = 'background';
                    var0 = var1.bind(var2)(var0);
                case 119:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'handleConnectionOpenSupplemental';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var _closure3_slot0 = var0;
            var0 = global;
            var3 = var0.setTimeout;
            var0 = undefined;
            var2 = function() { // Environment: var1
                var1 = _closure3_slot0;
                var2 = var1.sendReport;
                var0 = 'startup';
                var0 = var2.bind(var1)(var0);
                var0 = false;
                var1._isStartup = var0;
                var0 = var1.scheduleReport;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var1 = 0;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'scheduleReport';
        var4.key = var6;
        var6 = function() {
            _fun113668: for (var _fun113668_ip = 0;;) switch (_fun113668_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var3 = var1._timeoutId;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun113668_ip = 64;
                        continue _fun113668
                    }
                case 21:
                    var2 = false;
                    var1._isScheduledReportSent = var2;
                    var2 = global;
                    var4 = var2.setTimeout;
                    var3 = undefined;
                    var2 = function() { // Environment: var0
                        _fun113669: for (var _fun113669_ip = 0;;) switch (_fun113669_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var4 = null;
                                var1._timeoutId = var4;
                                var2 = var1.sendReport;
                                var0 = 'timer';
                                var0 = var2.bind(var1)(var0);
                                var0 = true;
                                var1._isScheduledReportSent = var0;
                                var5 = _closure1_slot1;
                                var0 = _closure1_slot2;
                                var3 = 6;
                                var2 = var0[var3];
                                var0 = undefined;
                                var2 = var5.bind(var0)(var2);
                                if (!(var4 != var2)) {
                                    _fun113669_ip = 94;
                                    continue _fun113669
                                }
                            case 67:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var1 = var1[var3];
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.stopTracking;
                                var1 = var1.bind(var2)();
                            case 94:
                                return var0;
                        }
                    };
                    var0 = 300000;
                    var0 = var4.bind(var3)(var2, var0);
                    var1._timeoutId = var0;
                case 64:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'sendReport';
        var4.key = var6;
        var5 = function arg0() {
            _fun113670: for (var _fun113670_ip = 0;;) switch (_fun113670_ip) {
                case 0:
                    var2 = _closure1_slot1;
                    var0 = _closure1_slot2;
                    var4 = 6;
                    var1 = var0[var4];
                    var0 = undefined;
                    var2 = var2.bind(var0)(var1);
                    var1 = null;
                    var2 = var1 == var2;
                    var5 = undefined;
                    if (var2) {
                        _fun113670_ip = 63;
                        continue _fun113670
                    }
                case 36:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var2 = var2[var4];
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.requestReport;
                    var5 = var2.bind(var3)();
                case 63:
                    var1 = var1 != var5;
                    if (!var1) {
                        _fun113670_ip = 82;
                        continue _fun113670
                    }
                case 70:
                    var3 = var5.totalFrameCount;
                    var2 = 0;
                    var1 = var2 !== var3;
                case 82:
                    if (!var1) {
                        _fun113670_ip = 224;
                        continue _fun113670
                    }
                case 88:
                    var2 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var1 = 7;
                    var1 = var8[var1];
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot9;
                    var2 = var1.ANDROID_JANK_STATS;
                    var1 = {};
                    var7 = _closure1_slot0;
                    var6 = 8;
                    var6 = var8[var6];
                    var7 = var7.bind(var0)(var6);
                    var6 = var7.getDeviceMetadata;
                    var9 = var6.bind(var7)();
                    var10 = var1;
                    var6 = copyDataProperties(var10, var9);
                    var7 = 1;
                    var6 = 'version';
                    var1[var6] = var7;
                    var7 = var5.totalFrameCount;
                    var6 = 'total_frame_count';
                    var1[var6] = var7;
                    var6 = var5.jankFrameCount;
                    var5 = 'jank_frame_count';
                    var1[var5] = var6;
                    var6 = arg0;
                    var5 = 'trigger';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                case 224:
                    return var0;
            }
        };
        var4.value = var5;
        var0[3] = var4;
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
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/jank_stats/native/JankStatsManager.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 660, 14593, 795, 4365, 4300, 2]);