// modules/go_live/StreamRTCConnection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var0 = function() {
        _fun32078: for (var _fun32078_ip = 0;;) switch (_fun32078_ip) {
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
                _fun32078_ip = 74;
                continue _fun32078;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot25 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot25 = var0;
    var0 = global;
    var8 = var0.Object;
    var4 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var8)(var2, var0, var1);
    var13 = 0;
    var1 = var6[var13];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var12 = 1;
    var1 = var6[var12];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var11 = 2;
    var1 = var6[var11];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var10 = 3;
    var1 = var6[var10];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var9 = 4;
    var1 = var6[var9];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var8 = 5;
    var1 = var6[var8];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot11 = var1;
    var1 = 9;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot13 = var1;
    var1 = 11;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot14 = var1;
    var1 = 12;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot15 = var1;
    var1 = 13;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot16 = var1;
    var1 = 14;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot17 = var1;
    var1 = 15;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.getSystemAnalyticsInfo;
    var _closure1_slot18 = var1;
    var1 = 16;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var4 = var1.AnalyticEvents;
    var _closure1_slot19 = var4;
    var4 = var1.MediaEngineHookTypes;
    var _closure1_slot20 = var4;
    var1 = var1.RTCConnectionStates;
    var _closure1_slot21 = var1;
    var1 = 17;
    var1 = var6[var1];
    var1 = var5.bind(var0)(var1);
    var1 = var1.MediaEngineContextTypes;
    var _closure1_slot22 = var1;
    var1 = 18;
    var1 = var6[var1];
    var1 = var7.bind(var0)(var1);
    var1 = var1.Millis;
    var1 = var1.SECOND;
    var1 = var8 * var1;
    var _closure1_slot23 = var1;
    var1 = {};
    var1.DETACHED = var13;
    var4 = 'DETACHED';
    var1[var13] = var4;
    var1.WAITING = var12;
    var4 = 'WAITING';
    var1[var12] = var4;
    var1.ATTACHED = var11;
    var4 = 'ATTACHED';
    var1[var11] = var4;
    var1.STARTED = var10;
    var4 = 'STARTED';
    var1[var10] = var4;
    var1.PLAYING = var9;
    var4 = 'PLAYING';
    var1[var9] = var4;
    var1.SILENCE = var8;
    var4 = 'SILENCE';
    var1[var8] = var4;
    var _closure1_slot24 = var1;
    var1 = function() { // Environment: var3
        var3 = _closure1_slot8;
        var2 = function arg0() {
            _fun32082: for (var _fun32082_ip = 0;;) switch (_fun32082_ip) {
                case 0:
                    var0 = arg0;
                    var2 = this;
                    var7 = var0.streamRegion;
                    var8 = var0.streamApplication;
                    var6 = var0.streamSourceType;
                    var5 = var0.actionContext;
                    var3 = var0.numViewers;
                    var4 = var0.goLiveModalDurationMs;
                    var1 = var0.analyticsLocations;
                    var10 = _closure1_slot7;
                    var9 = _closure2_slot0;
                    var0 = undefined;
                    var9 = var10.bind(var0)(var2, var9);
                    var2.streamRegion = var7;
                    var2.streamApplication = var8;
                    var7 = new Array(1);
                    var7[0] = var8;
                    var2.streamApplicationHistory = var7;
                    var2.streamSourceType = var6;
                    var2.actionContext = var5;
                    var2.maxViewers = var3;
                    var2.goLiveModalDurationMs = var4;
                    var2.numViewers = var3;
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun32082_ip = 136;
                        continue _fun32082
                    }
                case 132:
                    var1 = new Array(0);
                case 136:
                    var2.analyticsLocations = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'setActionContext';
        var0.key = var1;
        var1 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0.actionContext = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(9);
        var1[0] = var0;
        var0 = {};
        var5 = 'updateStreamApplication';
        var0.key = var5;
        var5 = function arg0() {
            var2 = arg0;
            var1 = this;
            var1.streamApplication = var2;
            var6 = var1.streamApplicationHistory;
            var0 = new Array(1);
            var5 = 0;
            var7 = var0;
            var3 = arraySpread(var7, var6, var5);
            var0[var3] = var2;
            var2 = 1;
            var2 = var3 + var2;
            var1.streamApplicationHistory = var0;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'setAnalyticsLocations';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0.analyticsLocations = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'trackViewerCount';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var0 = this;
            var2 = global;
            var4 = var2.Math;
            var3 = var4.max;
            var2 = var0.maxViewers;
            var2 = var3.bind(var4)(var1, var2);
            var0.maxViewers = var2;
            var0.numViewers = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'setNativePickerStyleUsed';
        var0.key = var5;
        var5 = function arg0() {
            var1 = arg0;
            var0 = this;
            var0.nativePickerStyleUsed = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'trackStart';
        var0.key = var5;
        var5 = function() {
            var0 = global;
            var1 = var0.performance;
            var0 = var1.now;
            var1 = var0.bind(var1)();
            var0 = this;
            var0.startTime = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'trackEnd';
        var0.key = var5;
        var5 = function() {
            var0 = global;
            var1 = var0.performance;
            var0 = var1.now;
            var1 = var0.bind(var1)();
            var0 = this;
            var0.endTime = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getStreamApplicationFromHistory';
        var0.key = var5;
        var5 = function arg0() {
            var0 = this;
            var1 = var0.streamApplicationHistory;
            var0 = arg0;
            var0 = var1[var0];
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'getDuration';
        var0.key = var5;
        var4 = function() {
            _fun32091: for (var _fun32091_ip = 0;;) switch (_fun32091_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.startTime;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun32091_ip = 57;
                        continue _fun32091
                    }
                case 15:
                    var2 = global;
                    var3 = var2.performance;
                    var2 = var3.now;
                    var2 = var2.bind(var3)();
                    var3 = var1.endTime;
                    if (!(var0 != var3)) {
                        _fun32091_ip = 45;
                        continue _fun32091
                    }
                case 42:
                    var2 = var3;
                case 45:
                    var1 = var1.startTime;
                    var1 = var2 - var1;
                    return var1;
                case 57:
                    return var0;
            }
        };
        var0.value = var4;
        var1[8] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var4 = 36;
    var4 = var6[var4];
    var4 = var7.bind(var0)(var4);
    var3 = function(arg0) { // Environment: var3
        var3 = function arg0() {
            _fun32093: for (var _fun32093_ip = 0;;) switch (_fun32093_ip) {
                case 0:
                    var0 = arg0;
                    var11 = this;
                    var17 = var0.sessionId;
                    var6 = var0.streamKey;
                    var14 = var0.serverId;
                    var9 = var0.initialLayout;
                    var2 = var0.analyticsContext;
                    var12 = var0.parentMediaSessionId;
                    var13 = var0.channelId;
                    var0 = _closure1_slot7;
                    var8 = _closure2_slot0;
                    var4 = undefined;
                    var0 = var0.bind(var4)(var11, var8);
                    var10 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 19;
                    var0 = var5[var0];
                    var7 = var10.bind(var4)(var0);
                    var0 = var7.decodeStreamKey;
                    var7 = var0.bind(var7)(var6);
                    var16 = var7.guildId;
                    var15 = var7.channelId;
                    var0 = {};
                    var19 = _closure1_slot11;
                    var18 = var19.getId;
                    var18 = var18.bind(var19)();
                    var0.userId = var18;
                    var0.sessionId = var17;
                    var0.guildId = var16;
                    var0.channelId = var15;
                    var15 = _closure1_slot22;
                    var15 = var15.STREAM;
                    var0.context = var15;
                    var0.streamServerId = var14;
                    var0.streamChannelId = var13;
                    var0.parentMediaSessionId = var12;
                    var12 = null;
                    var0.joinVoiceId = var12;
                    var16 = new Array(1);
                    var16[0] = var0;
                    var0 = _closure1_slot4;
                    var15 = var0.bind(var4)(var8);
                    var8 = _closure1_slot3;
                    var0 = _closure1_slot25;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun32093_ip = 226;
                        continue _fun32093
                    }
                case 213:
                    var0 = var15.apply;
                    var0 = var0.bind(var15)(var11, var16);
                    _fun32093_ip = 260;
                    continue _fun32093;
                case 226:
                    var12 = global;
                    var14 = var12.Reflect;
                    var13 = var14.construct;
                    var12 = _closure1_slot4;
                    var12 = var12.bind(var4)(var11);
                    var12 = var12.constructor;
                    var0 = var13.bind(var14)(var15, var16, var12);
                case 260:
                    var0 = var8.bind(var4)(var11, var0);
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot1;
                    var8 = 20;
                    var8 = var5[var8];
                    var8 = var3.bind(var4)(var8);
                    var11 = var8.prototype;
                    var11 = Object.create(var11, {
                        constructor: {
                            value: var8
                        }
                    });
                    var23 = var11;
                    var8 = new var23[var8](var22);
                    var8 = var8 instanceof Object ? var8 : var11;
                    var0.soundshareStats = var8;
                    var8 = new Array(0);
                    var0.bandwidthSamples = var8;
                    var8 = false;
                    var0._firstFrameDelivered = var8;
                    var8 = 0;
                    var0.screenshareFinishedCount = var8;
                    var8 = {};
                    var0.soundshareFailuresReported = var8;
                    var8 = 21;
                    var8 = var5[var8];
                    var8 = var10.bind(var4)(var8);
                    var8 = var8.Timeout;
                    var10 = var8.prototype;
                    var10 = Object.create(var10, {
                        constructor: {
                            value: var8
                        }
                    });
                    var23 = var10;
                    var8 = new var23[var8](var22);
                    var8 = var8 instanceof Object ? var8 : var10;
                    var0.errorTimer = var8;
                    var0.streamContext = var7;
                    var0.streamKey = var6;
                    var6 = 22;
                    var6 = var5[var6];
                    var8 = var3.bind(var4)(var6);
                    var21 = var0.isOwner;
                    var7 = var8.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var8
                        }
                    });
                    var23 = var7;
                    var22 = var9;
                    var6 = new var23[var8](var22, var21, var20);
                    var6 = var6 instanceof Object ? var6 : var7;
                    var0.videoStreamStats = var6;
                    var0.analyticsContext = var2;
                    var2 = 23;
                    var2 = var5[var2];
                    var4 = var3.bind(var4)(var2);
                    var3 = var4.debounce;
                    var2 = function(arg0, arg1) { // Environment: var1
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 19;
                        var1 = var3[var0];
                        var0 = undefined;
                        var5 = var2.bind(var0)(var1);
                        var2 = var5.decodeStreamKey;
                        var6 = _closure3_slot0;
                        var1 = var6.streamKey;
                        var1 = var2.bind(var5)(var1);
                        var8 = var1.guildId;
                        var7 = var1.channelId;
                        var5 = var1.ownerId;
                        var2 = _closure1_slot1;
                        var1 = 24;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var9 = 'RTC_CONNECTION_VIDEO';
                        var1.type = var9;
                        var1.guildId = var8;
                        var1.channelId = var7;
                        var1.userId = var5;
                        var5 = arg0;
                        var1.streamId = var5;
                        var5 = arg1;
                        var1.rtcServerId = var5;
                        var5 = var6.getMediaEngineConnectionId;
                        var5 = var5.bind(var6)();
                        var1.mediaEngineConnectionId = var5;
                        var4 = _closure1_slot22;
                        var4 = var4.STREAM;
                        var1.context = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = 200;
                    var1 = var3.bind(var4)(var2, var1);
                    var0.updateVideoStreamId = var1;
                    var2 = var0.videoStreamStats;
                    var1 = var2.start;
                    var1 = var1.bind(var2)();
                    var1 = var0.initializeEvents;
                    var1 = var1.bind(var0)();
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot8;
        var4 = {};
        var0 = 'isOwner';
        var4.key = var0;
        var0 = function() {
            var0 = this;
            var0 = var0.streamContext;
            var1 = var0.ownerId;
            var2 = _closure1_slot11;
            var0 = var2.getId;
            var0 = var0.bind(var2)();
            var0 = var0 === var1;
            return var0;
        };
        var4.get = var0;
        var0 = new Array(17);
        var0[0] = var4;
        var4 = {};
        var6 = 'destroy';
        var4.key = var6;
        var6 = function arg0() {
            var5 = this;
            var1 = var5.videoStreamStats;
            var0 = var1.stop;
            var0 = var0.bind(var1)();
            var1 = var5.trackVideoEndStats;
            var0 = arg0;
            var0 = var1.bind(var5)(var0);
            var1 = var5.updateVideoStreamId;
            var0 = var1.cancel;
            var0 = var0.bind(var1)();
            var1 = var5.updateVideoStreamId;
            var0 = null;
            var0 = var1.bind(var5)(var0, var0);
            var1 = var5.updateVideoStreamId;
            var0 = var1.flush;
            var0 = var0.bind(var1)();
            var1 = var5.errorTimer;
            var0 = var1.stop;
            var0 = var0.bind(var1)();
            var9 = _closure2_slot0;
            var3 = function arg0, arg1, arg2, arg3() {
                _fun32097: for (var _fun32097_ip = 0;;) switch (_fun32097_ip) {
                    case 0:
                        var4 = arg0;
                        var6 = arg2;
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot5;
                        var3 = _closure1_slot4;
                        var0 = 1;
                        var2 = 3;
                        var7 = var0 & var2;
                        var0 = var4;
                        if (!var7) {
                            _fun32097_ip = 44;
                            continue _fun32097
                        }
                    case 39:
                        var0 = var4.prototype;
                    case 44:
                        var4 = undefined;
                        var3 = var3.bind(var4)(var0);
                        var0 = 'destroy';
                        var4 = var5.bind(var4)(var3, var0, var6);
                        var _closure4_slot1 = var4;
                        var0 = 2;
                        var2 = var0 & var2;
                        var0 = var4;
                        if (!var2) {
                            _fun32097_ip = 98;
                            continue _fun32097
                        }
                    case 79:
                        var3 = 'function';
                        var2 = typeof var4;
                        var0 = var4;
                        if (!(var3 === var2)) {
                            _fun32097_ip = 98;
                            continue _fun32097
                        }
                    case 93:
                        var0 = function(arg0) { // Environment: var1
                            var3 = _closure4_slot1;
                            var2 = var3.apply;
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                    case 98:
                        return var0;
                }
            };
            var0 = undefined;
            var8 = 'destroy';
            var6 = 3;
            var10 = undefined;
            var7 = var5;
            var2 = var10[var3](var9, var8, var7, var6, var5);
            var1 = new Array(0);
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'streamUpdate';
        var4.key = var6;
        var6 = function arg0() {
            _fun32099: for (var _fun32099_ip = 0;;) switch (_fun32099_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._videoQuality;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun32099_ip = 43;
                        continue _fun32099
                    }
                case 15:
                    var0 = arg0;
                    if (var0) {
                        _fun32099_ip = 33;
                        continue _fun32099
                    }
                case 21:
                    var0 = var1.resume;
                    var0 = var0.bind(var1)();
                    _fun32099_ip = 43;
                    continue _fun32099;
                case 33:
                    var0 = var1.pause;
                    var0 = var0.bind(var1)();
                case 43:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'layoutChange';
        var4.key = var6;
        var6 = function arg0() {
            var0 = this;
            var2 = var0.videoStreamStats;
            var1 = var2.layoutChange;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'autoQualityChange';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var1 = var0.videoStreamStats;
            var0 = var1.autoQualityChange;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getVideoStats';
        var4.key = var6;
        var6 = function() {
            _fun32102: for (var _fun32102_ip = 0;;) switch (_fun32102_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.streamContext;
                    var1 = var1.ownerId;
                    var3 = var0._videoQuality;
                    var2 = null;
                    if (!(var2 == var3)) {
                        _fun32102_ip = 29;
                        continue _fun32102
                    }
                case 27:
                    return var2;
                case 29:
                    var0 = var0.isOwner;
                    if (var0) {
                        _fun32102_ip = 57;
                        continue _fun32102
                    }
                case 38:
                    var0 = var3.getInboundStats;
                    var1 = var0.bind(var3)(var1);
                    if (!(var2 == var1)) {
                        _fun32102_ip = 55;
                        continue _fun32102
                    }
                case 53:
                    var1 = {};
                case 55:
                    _fun32102_ip = 82;
                    continue _fun32102;
                case 57:
                    var0 = var3.getOutboundStats;
                    var3 = var0.bind(var3)();
                    var0 = 0;
                    var0 = var3[var0];
                    if (!(var2 == var0)) {
                        _fun32102_ip = 79;
                        continue _fun32102
                    }
                case 77:
                    var0 = {};
                case 79:
                    var1 = var0;
                case 82:
                    var0 = {};
                    var2 = var1.duration;
                    var0.duration = var2;
                    var2 = var1.avg_bitrate;
                    var0.avg_bitrate = var2;
                    var2 = var1.avg_fps;
                    var0.avg_fps = var2;
                    var2 = var1.avg_resolution;
                    var0.avg_resolution = var2;
                    var1 = var1.inbound_bitrate_estimate_percentile99;
                    var0.inbound_bitrate_estimate_percentile99 = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getRegion';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.analyticsContext;
            var0 = var0.streamRegion;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getMaxViewers';
        var4.key = var6;
        var6 = function() {
            var0 = this;
            var0 = var0.analyticsContext;
            var0 = var0.maxViewers;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getVoiceParticipantType';
        var4.key = var6;
        var6 = function() {
            _fun32105: for (var _fun32105_ip = 0;;) switch (_fun32105_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isOwner;
                    var0 = 'receiver';
                    if (!var1) {
                        _fun32105_ip = 24;
                        continue _fun32105
                    }
                case 18:
                    var0 = 'streamer';
                case 24:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'updateStats';
        var4.key = var6;
        var6 = function arg0() {
            _fun32106: for (var _fun32106_ip = 0;;) switch (_fun32106_ip) {
                case 0:
                    var6 = arg0;
                    var3 = this;
                    var _closure3_slot0 = var3;
                    var0 = var3.isOwner;
                    var4 = !var0;
                    if (!var4) {
                        _fun32106_ip = 55;
                        continue _fun32106
                    }
                case 24:
                    var7 = var3._goLiveQualityManager;
                    var1 = null;
                    var5 = var1 == var7;
                    var0 = undefined;
                    if (var5) {
                        _fun32106_ip = 51;
                        continue _fun32106
                    }
                case 41:
                    var5 = var7.getUserID;
                    var0 = var5.bind(var7)();
                case 51:
                    var4 = var1 != var0;
                case 55:
                    var1 = var3.goliveCurrentMaxResolution;
                    var0 = undefined;
                    var1 = var0 !== var1;
                    if (!var1) {
                        _fun32106_ip = 114;
                        continue _fun32106
                    }
                case 70:
                    var5 = var3.goliveCurrentMaxResolution;
                    var7 = var5.height;
                    var5 = 720;
                    var5 = var7 > var5;
                    if (var5) {
                        _fun32106_ip = 111;
                        continue _fun32106
                    }
                case 94:
                    var7 = var3.goliveCurrentMaxResolution;
                    var8 = var7.height;
                    var7 = 0;
                    var5 = var7 === var8;
                case 111:
                    var1 = var5;
                case 114:
                    var5 = var6.find;
                    var2 = function(arg0) { // Environment: var2
                        _fun32107: for (var _fun32107_ip = 0;;) switch (_fun32107_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.mediaEngineConnectionId;
                                var0 = _closure3_slot0;
                                var2 = var0._connection;
                                var0 = null;
                                var3 = var0 == var2;
                                var0 = undefined;
                                if (var3) {
                                    _fun32107_ip = 39;
                                    continue _fun32107
                                }
                            case 33:
                                var0 = var2.mediaEngineConnectionId;
                            case 39:
                                var0 = var1 === var0;
                                return var0;
                        }
                    };
                    var6 = var5.bind(var6)(var2);
                    var2 = null;
                    var7 = var2 == var6;
                    var5 = undefined;
                    if (var7) {
                        _fun32106_ip = 146;
                        continue _fun32106
                    }
                case 140:
                    var5 = var6.stats;
                case 146:
                    var7 = var2 != var5;
                    var11 = 'unknown';
                    var10 = undefined;
                    var6 = var11;
                    if (!var7) {
                        _fun32106_ip = 373;
                        continue _fun32106
                    }
                case 165:
                    var10 = undefined;
                    var6 = var11;
                    if (!var4) {
                        _fun32106_ip = 373;
                        continue _fun32106
                    }
                case 176:
                    var5 = var5.transport;
                    var8 = var5.inboundBitrateEstimate;
                    var5 = var2 != var8;
                    if (!var5) {
                        _fun32106_ip = 205;
                        continue _fun32106
                    }
                case 195:
                    var7 = 100000000;
                    var5 = var8 < var7;
                case 205:
                    var10 = undefined;
                    var6 = var11;
                    if (!var5) {
                        _fun32106_ip = 373;
                        continue _fun32106
                    }
                case 216:
                    var7 = var3.bandwidthSamples;
                    var5 = var7.push;
                    var5 = var5.bind(var7)(var8);
                    var5 = var3.bandwidthSamples;
                    var5 = var5.length;
                    var9 = 10;
                    if (!(var5 > var9)) {
                        _fun32106_ip = 266;
                        continue _fun32106
                    }
                case 250:
                    var7 = var3.bandwidthSamples;
                    var5 = var7.shift;
                    var5 = var5.bind(var7)();
                case 266:
                    var5 = var3.bandwidthSamples;
                    var8 = var5.length;
                    var7 = undefined;
                    var5 = var11;
                    if (!(var9 === var8)) {
                        _fun32106_ip = 367;
                        continue _fun32106
                    }
                case 286:
                    var9 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var8 = 23;
                    var8 = var12[var8];
                    var12 = var9.bind(var0)(var8);
                    var9 = var12.mean;
                    var8 = var3.bandwidthSamples;
                    var9 = var9.bind(var12)(var8);
                    var12 = 1500000;
                    var13 = var9 > var12;
                    var8 = 'HQ';
                    if (var13) {
                        _fun32106_ip = 361;
                        continue _fun32106
                    }
                case 345:
                    var12 = var9 < var12;
                    if (!var12) {
                        _fun32106_ip = 358;
                        continue _fun32106
                    }
                case 352:
                    var11 = 'LQ';
                case 358:
                    var8 = var11;
                case 361:
                    var5 = var8;
                    var7 = var9;
                case 367:
                    var10 = var7;
                    var6 = var5;
                case 373:
                    var8 = var3._goLiveQualityManager;
                    var5 = var2 == var8;
                    var7 = undefined;
                    if (var5) {
                        _fun32106_ip = 398;
                        continue _fun32106
                    }
                case 388:
                    var5 = var8.isDowngraded;
                    var7 = var5.bind(var8)();
                case 398:
                    var5 = var2 != var7;
                    if (!var5) {
                        _fun32106_ip = 408;
                        continue _fun32106
                    }
                case 405:
                    var5 = var7;
                case 408:
                    var7 = 'HQ';
                    if (!(var7 === var6)) {
                        _fun32106_ip = 421;
                        continue _fun32106
                    }
                case 418:
                    if (var5) {
                        _fun32106_ip = 512;
                        continue _fun32106
                    }
                case 421:
                    var7 = 'LQ';
                    if (!(var7 === var6)) {
                        _fun32106_ip = 576;
                        continue _fun32106
                    }
                case 434:
                    if (var5) {
                        _fun32106_ip = 576;
                        continue _fun32106
                    }
                case 440:
                    if (!var1) {
                        _fun32106_ip = 576;
                        continue _fun32106
                    }
                case 446:
                    var8 = var3.logger;
                    var7 = var8.info;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var9 = var5.concat;
                    var5 = 'Attempting to downgrade to LQ simulcast stream, bandwidth estimate: ';
                    var5 = var9.bind(var5)(var10);
                    var5 = var7.bind(var8)(var5);
                    var8 = var3._goLiveQualityManager;
                    if (!(var2 != var8)) {
                        _fun32106_ip = 576;
                        continue _fun32106
                    }
                case 497:
                    var7 = var8.setGoLiveStreamDowngraded;
                    var5 = true;
                    var5 = var7.bind(var8)(var5);
                    _fun32106_ip = 576;
                    continue _fun32106;
                case 512:
                    var8 = var3.logger;
                    var7 = var8.info;
                    var5 = global;
                    var5 = var5.HermesInternal;
                    var9 = var5.concat;
                    var5 = 'Attempting to upgrade to HQ simulcast stream, bandwidth estimate: ';
                    var5 = var9.bind(var5)(var10);
                    var5 = var7.bind(var8)(var5);
                    var8 = var3._goLiveQualityManager;
                    if (!(var2 != var8)) {
                        _fun32106_ip = 576;
                        continue _fun32106
                    }
                case 563:
                    var7 = var8.setGoLiveStreamDowngraded;
                    var5 = false;
                    var5 = var7.bind(var8)(var5);
                case 576:
                    if (!var4) {
                        _fun32106_ip = 745;
                        continue _fun32106
                    }
                case 582:
                    var7 = var3._goLiveQualityManager;
                    var4 = var2 != var7;
                    if (!var4) {
                        _fun32106_ip = 605;
                        continue _fun32106
                    }
                case 595:
                    var5 = var7.senderSupportsSimulcast;
                    var4 = var5.bind(var7)();
                case 605:
                    var7 = !var4;
                    if (var7) {
                        _fun32106_ip = 642;
                        continue _fun32106
                    }
                case 611:
                    var8 = var3._goLiveQualityManager;
                    var4 = var2 == var8;
                    var5 = undefined;
                    if (var4) {
                        _fun32106_ip = 636;
                        continue _fun32106
                    }
                case 626:
                    var4 = var8.isDowngraded;
                    var5 = var4.bind(var8)();
                case 636:
                    var4 = false;
                    var7 = var4 === var5;
                case 642:
                    var5 = var3._videoQuality;
                    if (!(var2 != var5)) {
                        _fun32106_ip = 665;
                        continue _fun32106
                    }
                case 652:
                    var4 = var5.setViewedSimulcastQuality;
                    var4 = var4.bind(var5)(var7);
                case 665:
                    var7 = var3._goLiveQualityManager;
                    var4 = var2 == var7;
                    var5 = undefined;
                    if (var4) {
                        _fun32106_ip = 690;
                        continue _fun32106
                    }
                case 680:
                    var4 = var7.isOneToOneCall;
                    var5 = var4.bind(var7)();
                case 690:
                    var4 = var2 != var5;
                    if (!var4) {
                        _fun32106_ip = 700;
                        continue _fun32106
                    }
                case 697:
                    var4 = var5;
                case 700:
                    if (!var1) {
                        _fun32106_ip = 713;
                        continue _fun32106
                    }
                case 703:
                    var5 = 'LQ';
                    var1 = var5 === var6;
                case 713:
                    if (!var1) {
                        _fun32106_ip = 719;
                        continue _fun32106
                    }
                case 716:
                    var1 = !var4;
                case 719:
                    var3 = var3._videoQuality;
                    if (!(var2 != var3)) {
                        _fun32106_ip = 745;
                        continue _fun32106
                    }
                case 729:
                    var2 = var3.setEligibleSimulcastQuality;
                    var1 = !var1;
                    var1 = var2.bind(var3)(var1);
                case 745:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'initializeEvents';
        var4.key = var6;
        var6 = function() {
            var4 = this;
            var _closure3_slot0 = var4;
            var0 = false;
            var _closure3_slot1 = var0;
            var8 = var4.on;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var2 = 25;
            var3 = var6[var2];
            var0 = undefined;
            var3 = var5.bind(var0)(var3);
            var3 = var3.RTCConnectionEvent;
            var7 = var3.State;
            var3 = function(arg0, arg1, arg2) { // Environment: var1
                _fun32109: for (var _fun32109_ip = 0;;) switch (_fun32109_ip) {
                    case 0:
                        var5 = arg0;
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var0 = 24;
                        var3 = var3[var0];
                        var0 = undefined;
                        var7 = var4.bind(var0)(var3);
                        var6 = var7.dispatch;
                        var3 = {};
                        var4 = 'RTC_CONNECTION_STATE';
                        var3.type = var4;
                        var3.state = var5;
                        var10 = arg1;
                        var11 = var3;
                        var4 = copyDataProperties(var11, var10);
                        var10 = arg2;
                        var11 = var3;
                        var4 = copyDataProperties(var11, var10);
                        var8 = _closure3_slot0;
                        var9 = var8.streamKey;
                        var8 = 'streamKey';
                        var3[var8] = var9;
                        var3 = var6.bind(var7)(var3);
                        var3 = _closure1_slot21;
                        var3 = var3.RTC_CONNECTED;
                        if (!(var5 === var3)) {
                            _fun32109_ip = 619;
                            continue _fun32109
                        }
                    case 113:
                        var3 = _closure3_slot0;
                        var8 = var3._connection;
                        var3 = null;
                        if (!(var3 != var8)) {
                            _fun32109_ip = 178;
                            continue _fun32109
                        }
                    case 129:
                        var7 = var8.on;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 26;
                        var5 = var9[var5];
                        var5 = var6.bind(var0)(var5);
                        var5 = var5.BaseConnectionEvent;
                        var6 = var5.ScreenshareFinish;
                        var5 = function(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15, arg16, arg17, arg18) { // Environment: var1
                            var0 = arg0;
                            var _closure5_slot0 = var0;
                            var0 = arg1;
                            var _closure5_slot1 = var0;
                            var0 = arg2;
                            var _closure5_slot2 = var0;
                            var0 = arg3;
                            var _closure5_slot3 = var0;
                            var0 = arg4;
                            var _closure5_slot4 = var0;
                            var0 = arg5;
                            var _closure5_slot5 = var0;
                            var0 = arg6;
                            var _closure5_slot6 = var0;
                            var0 = arg7;
                            var _closure5_slot7 = var0;
                            var0 = arg8;
                            var _closure5_slot8 = var0;
                            var0 = arg9;
                            var _closure5_slot9 = var0;
                            var0 = arg10;
                            var _closure5_slot10 = var0;
                            var0 = arg11;
                            var _closure5_slot11 = var0;
                            var0 = arg12;
                            var _closure5_slot12 = var0;
                            var0 = arg13;
                            var _closure5_slot13 = var0;
                            var0 = arg14;
                            var _closure5_slot14 = var0;
                            var0 = arg15;
                            var _closure5_slot15 = var0;
                            var0 = arg16;
                            var _closure5_slot16 = var0;
                            var0 = arg17;
                            var _closure5_slot17 = var0;
                            var0 = arg18;
                            var _closure5_slot18 = var0;
                            var4 = _closure3_slot0;
                            var3 = var4.analyticsContext;
                            var2 = var3.getStreamApplicationFromHistory;
                            var0 = var4.screenshareFinishedCount;
                            var6 = var2.bind(var3)(var0);
                            var0 = var4.screenshareFinishedCount;
                            var0 = var0 + 1;
                            var4.screenshareFinishedCount = var0;
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot2;
                            var0 = 27;
                            var3 = var3[var0];
                            var0 = undefined;
                            var5 = var5.bind(var0)(var3);
                            var3 = var5.getRunningGameAnalytics;
                            var3 = var3.bind(var5)(var6);
                            var5 = var3.gameName;
                            var _closure5_slot19 = var5;
                            var5 = var3.gameId;
                            var _closure5_slot20 = var5;
                            var5 = var3.exe;
                            var _closure5_slot21 = var5;
                            var3 = var3.distributor;
                            var _closure5_slot22 = var3;
                            var3 = var4.getMediaSessionId;
                            var3 = var3.bind(var4)();
                            var _closure5_slot23 = var3;
                            var3 = var4.getRTCConnectionId;
                            var3 = var3.bind(var4)();
                            var _closure5_slot24 = var3;
                            var2 = _closure1_slot18;
                            var3 = var2.bind(var0)();
                            var2 = var3.then;
                            var1 = function(arg0) { // Environment: var1
                                _fun32111: for (var _fun32111_ip = 0;;) switch (_fun32111_ip) {
                                    case 0:
                                        var1 = arg0;
                                        var9 = null;
                                        var0 = var9 != var1;
                                        var5 = null;
                                        if (!var0) {
                                            _fun32111_ip = 74;
                                            continue _fun32111
                                        }
                                    case 14:
                                        var0 = {};
                                        var2 = var1.cpu_brand;
                                        var0.cpu_brand = var2;
                                        var2 = var1.cpu_vendor;
                                        var0.cpu_vendor = var2;
                                        var2 = var1.cpu_memory;
                                        var0.cpu_memory = var2;
                                        var2 = var1.gpu_brand;
                                        var0.gpu_brand = var2;
                                        var1 = var1.gpu_memory;
                                        var0.gpu_memory = var1;
                                        var5 = var0;
                                    case 74:
                                        var0 = _closure5_slot0;
                                        var0 = var9 != var0;
                                        var2 = 0;
                                        if (!var0) {
                                            _fun32111_ip = 94;
                                            continue _fun32111
                                        }
                                    case 90:
                                        var2 = _closure5_slot0;
                                    case 94:
                                        var0 = _closure5_slot1;
                                        var3 = var9 != var0;
                                        var0 = 0;
                                        if (!var3) {
                                            _fun32111_ip = 111;
                                            continue _fun32111
                                        }
                                    case 107:
                                        var0 = _closure5_slot1;
                                    case 111:
                                        var2 = var2 + var0;
                                        var0 = _closure5_slot2;
                                        var3 = var9 != var0;
                                        var0 = 0;
                                        if (!var3) {
                                            _fun32111_ip = 132;
                                            continue _fun32111
                                        }
                                    case 128:
                                        var0 = _closure5_slot2;
                                    case 132:
                                        var2 = var2 + var0;
                                        var0 = _closure5_slot3;
                                        var3 = var9 != var0;
                                        var0 = 0;
                                        if (!var3) {
                                            _fun32111_ip = 153;
                                            continue _fun32111
                                        }
                                    case 149:
                                        var0 = _closure5_slot3;
                                    case 153:
                                        var2 = var2 + var0;
                                        var0 = _closure5_slot4;
                                        var3 = var9 != var0;
                                        var0 = 0;
                                        if (!var3) {
                                            _fun32111_ip = 174;
                                            continue _fun32111
                                        }
                                    case 170:
                                        var0 = _closure5_slot4;
                                    case 174:
                                        var2 = var2 + var0;
                                        var0 = _closure5_slot5;
                                        var3 = var9 != var0;
                                        var0 = 0;
                                        if (!var3) {
                                            _fun32111_ip = 195;
                                            continue _fun32111
                                        }
                                    case 191:
                                        var0 = _closure5_slot5;
                                    case 195:
                                        var2 = var2 + var0;
                                        var0 = _closure5_slot14;
                                        var3 = var9 != var0;
                                        var0 = 0;
                                        if (!var3) {
                                            _fun32111_ip = 216;
                                            continue _fun32111
                                        }
                                    case 212:
                                        var0 = _closure5_slot14;
                                    case 216:
                                        var2 = var2 + var0;
                                        var0 = _closure5_slot18;
                                        var3 = var9 != var0;
                                        var0 = 0;
                                        if (!var3) {
                                            _fun32111_ip = 237;
                                            continue _fun32111
                                        }
                                    case 233:
                                        var0 = _closure5_slot18;
                                    case 237:
                                        var2 = var2 + var0;
                                        var0 = _closure5_slot17;
                                        var3 = var9 != var0;
                                        var0 = 0;
                                        if (!var3) {
                                            _fun32111_ip = 258;
                                            continue _fun32111
                                        }
                                    case 254:
                                        var0 = _closure5_slot17;
                                    case 258:
                                        var10 = var2 + var0;
                                        var0 = _closure5_slot9;
                                        var0 = var9 != var0;
                                        var2 = 0;
                                        if (!var0) {
                                            _fun32111_ip = 279;
                                            continue _fun32111
                                        }
                                    case 275:
                                        var2 = _closure5_slot9;
                                    case 279:
                                        var0 = _closure5_slot10;
                                        var3 = var9 != var0;
                                        var0 = 0;
                                        if (!var3) {
                                            _fun32111_ip = 296;
                                            continue _fun32111
                                        }
                                    case 292:
                                        var0 = _closure5_slot10;
                                    case 296:
                                        var2 = var2 + var0;
                                        var0 = _closure5_slot11;
                                        var3 = var9 != var0;
                                        var0 = 0;
                                        if (!var3) {
                                            _fun32111_ip = 317;
                                            continue _fun32111
                                        }
                                    case 313:
                                        var0 = _closure5_slot11;
                                    case 317:
                                        var2 = var2 + var0;
                                        var0 = _closure5_slot12;
                                        var3 = var9 != var0;
                                        var0 = 0;
                                        if (!var3) {
                                            _fun32111_ip = 338;
                                            continue _fun32111
                                        }
                                    case 334:
                                        var0 = _closure5_slot12;
                                    case 338:
                                        var0 = var2 + var0;
                                        var2 = _closure5_slot13;
                                        var2 = var9 != var2;
                                        var1 = 0;
                                        if (!var2) {
                                            _fun32111_ip = 359;
                                            continue _fun32111
                                        }
                                    case 355:
                                        var1 = _closure5_slot13;
                                    case 359:
                                        var8 = var0 + var1;
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 28;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var4 = var2.bind(var0)(var1);
                                        var3 = var4.track;
                                        var1 = _closure1_slot19;
                                        var2 = var1.SCREENSHARE_FINISHED;
                                        var1 = {};
                                        var11 = _closure5_slot0;
                                        var1.screenshare_frames = var11;
                                        var11 = _closure5_slot1;
                                        var1.videohook_frames = var11;
                                        var11 = _closure5_slot2;
                                        var1.hybrid_dxgi_frames = var11;
                                        var11 = _closure5_slot3;
                                        var1.hybrid_gdi_frames = var11;
                                        var11 = _closure5_slot4;
                                        var1.hybrid_videohook_frames = var11;
                                        var11 = _closure5_slot5;
                                        var1.hybrid_graphics_capture_frames = var11;
                                        var11 = _closure5_slot6;
                                        var1.hybrid_capture_method_switches = var11;
                                        var11 = _closure5_slot7;
                                        var1.hybrid_gdi_bitblt_frames = var11;
                                        var11 = _closure5_slot8;
                                        var1.hybrid_gdi_printwindow_frames = var11;
                                        var11 = _closure5_slot9;
                                        var1.hybrid_graphics_capture_frames_unique = var11;
                                        var11 = _closure5_slot10;
                                        var1.hybrid_dxgi_frames_unique = var11;
                                        var11 = _closure5_slot11;
                                        var1.hybrid_videohook_frames_unique = var11;
                                        var11 = _closure5_slot12;
                                        var1.hybrid_gdi_bitblt_frames_unique = var11;
                                        var11 = _closure5_slot13;
                                        var1.hybrid_gdi_printwindow_frames_unique = var11;
                                        var11 = _closure5_slot14;
                                        var1.quartz_frames = var11;
                                        var11 = _closure5_slot18;
                                        var1.screencapturekit_frames = var11;
                                        var11 = _closure5_slot17;
                                        var1.go_live_camera_frames = var11;
                                        var1.total_frames = var10;
                                        var1.total_frames_unique = var8;
                                        var8 = _closure5_slot15;
                                        var1.desktop_capturer_type = var8;
                                        var8 = _closure5_slot23;
                                        var1.media_session_id = var8;
                                        var8 = _closure5_slot24;
                                        var1.rtc_connection_id = var8;
                                        var7 = _closure1_slot22;
                                        var7 = var7.STREAM;
                                        var1.context = var7;
                                        var7 = _closure5_slot16;
                                        var1.activity = var7;
                                        var8 = _closure3_slot0;
                                        var11 = var8.soundshareStats;
                                        var10 = var11.getStats;
                                        var10 = var10.bind(var11)();
                                        var10 = var10.soundshare_last_session;
                                        var1.soundshare_session = var10;
                                        var8 = var8.analyticsContext;
                                        var8 = var8.nativePickerStyleUsed;
                                        var9 = var9 != var8;
                                        var8 = 'internal';
                                        if (!var9) {
                                            _fun32111_ip = 717;
                                            continue _fun32111
                                        }
                                    case 713:
                                        var8 = 'native';
                                    case 717:
                                        var1.picker_type_used = var8;
                                        var7 = _closure3_slot0;
                                        var8 = var7.analyticsContext;
                                        var7 = var8.getDuration;
                                        var7 = var7.bind(var8)();
                                        var1.duration = var7;
                                        var7 = _closure5_slot19;
                                        var1.share_game_name = var7;
                                        var7 = _closure5_slot20;
                                        var1.share_game_id = var7;
                                        var7 = _closure5_slot21;
                                        var1.share_game_exe = var7;
                                        var6 = _closure5_slot22;
                                        var1.share_game_distributor = var6;
                                        var13 = var1;
                                        var12 = var5;
                                        var5 = copyDataProperties(var13, var12);
                                        var1 = var3.bind(var4)(var2, var1);
                                        return var0;
                                }
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var5 = var7.bind(var8)(var6, var5);
                    case 178:
                        var5 = _closure3_slot0;
                        var8 = var5._connection;
                        if (!(var3 != var8)) {
                            _fun32109_ip = 241;
                            continue _fun32109
                        }
                    case 192:
                        var7 = var8.on;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 26;
                        var5 = var9[var5];
                        var5 = var6.bind(var0)(var5);
                        var5 = var5.BaseConnectionEvent;
                        var6 = var5.SoundshareAttached;
                        var5 = function() { // Environment: var1
                            _fun32112: for (var _fun32112_ip = 0;;) switch (_fun32112_ip) {
                                case 0:
                                    var2 = _closure1_slot14;
                                    var0 = var2.getGoLiveSource;
                                    var7 = var0.bind(var2)();
                                    var5 = null;
                                    var3 = var5 == var7;
                                    var0 = undefined;
                                    var2 = undefined;
                                    if (var3) {
                                        _fun32112_ip = 36;
                                        continue _fun32112
                                    }
                                case 30:
                                    var2 = var7.desktopSource;
                                case 36:
                                    if (!(var5 != var2)) {
                                        _fun32112_ip = 146;
                                        continue _fun32112
                                    }
                                case 40:
                                    var8 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var2 = 28;
                                    var2 = var9[var2];
                                    var4 = var8.bind(var0)(var2);
                                    var3 = var4.track;
                                    var1 = _closure1_slot19;
                                    var2 = var1.SOUNDSHARE_ATTACHED;
                                    var1 = {};
                                    var6 = 29;
                                    var6 = var9[var6];
                                    var6 = var8.bind(var0)(var6);
                                    var8 = var5 == var7;
                                    var5 = undefined;
                                    if (var8) {
                                        _fun32112_ip = 104;
                                        continue _fun32112
                                    }
                                case 98:
                                    var5 = var7.desktopSource;
                                case 104:
                                    var10 = var6.bind(var0)(var5);
                                    var11 = var1;
                                    var5 = copyDataProperties(var11, var10);
                                    var6 = _closure3_slot0;
                                    var5 = var6.getSoundshareAnalyticsProperties;
                                    var10 = var5.bind(var6)();
                                    var11 = var1;
                                    var5 = copyDataProperties(var11, var10);
                                    var1 = var3.bind(var4)(var2, var1);
                                case 146:
                                    return var0;
                            }
                        };
                        var5 = var7.bind(var8)(var6, var5);
                    case 241:
                        var5 = _closure3_slot0;
                        var8 = var5._connection;
                        if (!(var3 != var8)) {
                            _fun32109_ip = 304;
                            continue _fun32109
                        }
                    case 255:
                        var7 = var8.on;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 26;
                        var5 = var9[var5];
                        var5 = var6.bind(var0)(var5);
                        var5 = var5.BaseConnectionEvent;
                        var6 = var5.SoundshareFailed;
                        var5 = function(arg0) { // Environment: var1
                            _fun32113: for (var _fun32113_ip = 0;;) switch (_fun32113_ip) {
                                case 0:
                                    var0 = arg0;
                                    var6 = var0.failureCode;
                                    var5 = var0.failureReason;
                                    var4 = var0.willRetry;
                                    var1 = _closure1_slot14;
                                    var0 = var1.getGoLiveSource;
                                    var7 = var0.bind(var1)();
                                    var3 = _closure3_slot0;
                                    var2 = var3.reportSoundshareFailure;
                                    var0 = null;
                                    var8 = var0 == var7;
                                    var0 = undefined;
                                    var1 = undefined;
                                    if (var8) {
                                        _fun32113_ip = 70;
                                        continue _fun32113
                                    }
                                case 64:
                                    var1 = var7.desktopSource;
                                case 70:
                                    var13 = var3;
                                    var12 = var1;
                                    var11 = var6;
                                    var10 = var5;
                                    var9 = var4;
                                    var1 = var13[var2](var12, var11, var10, var9, var8);
                                    return var0;
                            }
                        };
                        var5 = var7.bind(var8)(var6, var5);
                    case 304:
                        var5 = _closure3_slot0;
                        var8 = var5._connection;
                        if (!(var3 != var8)) {
                            _fun32109_ip = 367;
                            continue _fun32109
                        }
                    case 318:
                        var7 = var8.on;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 26;
                        var5 = var9[var5];
                        var5 = var6.bind(var0)(var5);
                        var5 = var5.BaseConnectionEvent;
                        var6 = var5.SoundshareSpeaking;
                        var5 = function() { // Environment: var1
                            _fun32114: for (var _fun32114_ip = 0;;) switch (_fun32114_ip) {
                                case 0:
                                    var2 = _closure1_slot14;
                                    var0 = var2.getGoLiveSource;
                                    var9 = var0.bind(var2)();
                                    var3 = null;
                                    var4 = var3 == var9;
                                    var0 = undefined;
                                    var2 = undefined;
                                    if (var4) {
                                        _fun32114_ip = 36;
                                        continue _fun32114
                                    }
                                case 30:
                                    var2 = var9.desktopSource;
                                case 36:
                                    if (!(var3 != var2)) {
                                        _fun32114_ip = 220;
                                        continue _fun32114
                                    }
                                case 43:
                                    var8 = _closure1_slot1;
                                    var10 = _closure1_slot2;
                                    var2 = 28;
                                    var2 = var10[var2];
                                    var6 = var8.bind(var0)(var2);
                                    var5 = var6.track;
                                    var2 = _closure1_slot19;
                                    var4 = var2.SOUNDSHARE_TRANSMITTING;
                                    var2 = {};
                                    var7 = 29;
                                    var7 = var10[var7];
                                    var8 = var8.bind(var0)(var7);
                                    var10 = var3 == var9;
                                    var7 = undefined;
                                    if (var10) {
                                        _fun32114_ip = 107;
                                        continue _fun32114
                                    }
                                case 101:
                                    var7 = var9.desktopSource;
                                case 107:
                                    var11 = var8.bind(var0)(var7);
                                    var12 = var2;
                                    var7 = copyDataProperties(var12, var11);
                                    var8 = _closure3_slot0;
                                    var7 = var8.getSoundshareAnalyticsProperties;
                                    var11 = var7.bind(var8)();
                                    var12 = var2;
                                    var7 = copyDataProperties(var12, var11);
                                    var2 = var5.bind(var6)(var4, var2);
                                    var5 = _closure1_slot13;
                                    var4 = var5.getHookError;
                                    var2 = _closure1_slot20;
                                    var2 = var2.SOUND;
                                    var2 = var4.bind(var5)(var2);
                                    if (!(var3 != var2)) {
                                        _fun32114_ip = 220;
                                        continue _fun32114
                                    }
                                case 178:
                                    var2 = _closure1_slot1;
                                    var3 = _closure1_slot2;
                                    var1 = 24;
                                    var1 = var3[var1];
                                    var3 = var2.bind(var0)(var1);
                                    var2 = var3.dispatch;
                                    var1 = {};
                                    var4 = 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING';
                                    var1.type = var4;
                                    var1 = var2.bind(var3)(var1);
                                case 220:
                                    return var0;
                            }
                        };
                        var5 = var7.bind(var8)(var6, var5);
                    case 367:
                        var5 = _closure3_slot0;
                        var8 = var5._connection;
                        if (!(var3 != var8)) {
                            _fun32109_ip = 430;
                            continue _fun32109
                        }
                    case 381:
                        var7 = var8.on;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 26;
                        var5 = var9[var5];
                        var5 = var6.bind(var0)(var5);
                        var5 = var5.BaseConnectionEvent;
                        var6 = var5.SoundshareTrace;
                        var5 = function(arg0) { // Environment: var1
                            _fun32115: for (var _fun32115_ip = 0;;) switch (_fun32115_ip) {
                                case 0:
                                    var3 = arg0;
                                    var2 = _closure1_slot14;
                                    var0 = var2.getGoLiveSource;
                                    var9 = var0.bind(var2)();
                                    var0 = _closure3_slot0;
                                    var7 = var0.soundshareStats;
                                    var6 = var7.traceEvent;
                                    var4 = null;
                                    var8 = var4 == var9;
                                    var0 = undefined;
                                    var5 = undefined;
                                    if (var8) {
                                        _fun32115_ip = 75;
                                        continue _fun32115
                                    }
                                case 54:
                                    var8 = var9.desktopSource;
                                    var10 = var4 == var8;
                                    var5 = undefined;
                                    if (var10) {
                                        _fun32115_ip = 75;
                                        continue _fun32115
                                    }
                                case 69:
                                    var5 = var8.soundshareSession;
                                case 75:
                                    var5 = var6.bind(var7)(var5, var3);
                                    var6 = var3.type;
                                    var5 = 'soundshare_attach_requested';
                                    if (!(var5 !== var6)) {
                                        _fun32115_ip = 370;
                                        continue _fun32115
                                    }
                                case 99:
                                    var5 = 'soundshare_recv_failed';
                                    if (!(var5 !== var6)) {
                                        _fun32115_ip = 212;
                                        continue _fun32115
                                    }
                                case 109:
                                    var5 = 'soundshare_state_transition';
                                    if (!(var5 === var6)) {
                                        _fun32115_ip = 402;
                                        continue _fun32115
                                    }
                                case 122:
                                    var6 = var3.newState;
                                    var5 = _closure1_slot24;
                                    var5 = var5.PLAYING;
                                    if (!(var6 === var5)) {
                                        _fun32115_ip = 402;
                                        continue _fun32115
                                    }
                                case 145:
                                    var5 = _closure3_slot0;
                                    var6 = var5.errorTimer;
                                    var5 = var6.stop;
                                    var5 = var5.bind(var6)();
                                    var6 = _closure1_slot1;
                                    var7 = _closure1_slot2;
                                    var5 = 24;
                                    var5 = var7[var5];
                                    var7 = var6.bind(var0)(var5);
                                    var6 = var7.dispatch;
                                    var5 = {};
                                    var8 = 'MEDIA_ENGINE_SOUNDSHARE_TRANSMITTING';
                                    var5.type = var8;
                                    var5 = var6.bind(var7)(var5);
                                    _fun32115_ip = 402;
                                    continue _fun32115;
                                case 212:
                                    var7 = var3.reason;
                                    var6 = var3.code;
                                    var3 = var3.retry;
                                    var8 = var4 == var9;
                                    var5 = undefined;
                                    if (var8) {
                                        _fun32115_ip = 244;
                                        continue _fun32115
                                    }
                                case 238:
                                    var5 = var9.desktopSource;
                                case 244:
                                    if (!(var4 != var5)) {
                                        _fun32115_ip = 402;
                                        continue _fun32115
                                    }
                                case 251:
                                    var8 = _closure3_slot0;
                                    var5 = var8.reportSoundshareFailure;
                                    var10 = var4 == var9;
                                    var4 = undefined;
                                    if (var10) {
                                        _fun32115_ip = 276;
                                        continue _fun32115
                                    }
                                case 270:
                                    var4 = var9.desktopSource;
                                case 276:
                                    var15 = var8;
                                    var14 = var4;
                                    var13 = var6;
                                    var12 = var7;
                                    var11 = var3;
                                    var4 = var15[var5](var14, var13, var12, var11, var10);
                                    if (var3) {
                                        _fun32115_ip = 402;
                                        continue _fun32115
                                    }
                                case 298:
                                    var3 = _closure3_slot0;
                                    var4 = var3.errorTimer;
                                    var3 = var4.stop;
                                    var3 = var3.bind(var4)();
                                    var4 = _closure1_slot1;
                                    var5 = _closure1_slot2;
                                    var3 = 24;
                                    var3 = var5[var3];
                                    var5 = var4.bind(var0)(var3);
                                    var4 = var5.dispatch;
                                    var3 = {};
                                    var8 = 'MEDIA_ENGINE_SOUNDSHARE_FAILED';
                                    var3.type = var8;
                                    var3.errorMessage = var7;
                                    var3.errorCode = var6;
                                    var3 = var4.bind(var5)(var3);
                                    _fun32115_ip = 402;
                                    continue _fun32115;
                                case 370:
                                    var2 = _closure3_slot0;
                                    var4 = var2.errorTimer;
                                    var3 = var4.start;
                                    var2 = _closure1_slot23;
                                    var1 = function() { // Environment: var1
                                        var2 = _closure1_slot1;
                                        var1 = _closure1_slot2;
                                        var0 = 24;
                                        var1 = var1[var0];
                                        var0 = undefined;
                                        var3 = var2.bind(var0)(var1);
                                        var2 = var3.dispatch;
                                        var1 = {
                                            'type': 'MEDIA_ENGINE_SOUNDSHARE_FAILED',
                                            'errorMessage': 'Sound Hook Failed'
                                        };
                                        var1 = var2.bind(var3)(var1);
                                        return var0;
                                    };
                                    var1 = var3.bind(var4)(var2, var1);
                                case 402:
                                    return var0;
                            }
                        };
                        var5 = var7.bind(var8)(var6, var5);
                    case 430:
                        var5 = _closure3_slot0;
                        var8 = var5._connection;
                        if (!(var3 != var8)) {
                            _fun32109_ip = 493;
                            continue _fun32109
                        }
                    case 444:
                        var7 = var8.on;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 26;
                        var5 = var9[var5];
                        var5 = var6.bind(var0)(var5);
                        var5 = var5.BaseConnectionEvent;
                        var6 = var5.FirstFrameStats;
                        var5 = function(arg0) { // Environment: var1
                            _fun32117: for (var _fun32117_ip = 0;;) switch (_fun32117_ip) {
                                case 0:
                                    var5 = arg0;
                                    var1 = _closure3_slot0;
                                    var1 = var1._firstFrameDelivered;
                                    if (var1) {
                                        _fun32117_ip = 647;
                                        continue _fun32117
                                    }
                                case 22:
                                    var8 = _closure3_slot0;
                                    var0 = true;
                                    var8._firstFrameDelivered = var0;
                                    var0 = var8.getStreamAnalyticsProperties;
                                    var6 = var0.bind(var8)();
                                    var1 = _closure1_slot1;
                                    var9 = _closure1_slot2;
                                    var0 = 28;
                                    var0 = var9[var0];
                                    var7 = undefined;
                                    var3 = var1.bind(var7)(var0);
                                    var2 = var3.track;
                                    var0 = _closure1_slot19;
                                    var1 = var0.RECEIVER_FIRST_FRAME_DELIVERED;
                                    var0 = {};
                                    var10 = var6.guild_id;
                                    var0.guild_id = var10;
                                    var10 = var6.channel_id;
                                    var0.channel_id = var10;
                                    var10 = var6.rtc_connection_id;
                                    var0.rtc_connection_id = var10;
                                    var10 = var6.media_session_id;
                                    var0.media_session_id = var10;
                                    var6 = var6.parent_media_session_id;
                                    var0.parent_media_session_id = var6;
                                    var6 = var8.analyticsContext;
                                    var6 = var6.numViewers;
                                    var0.num_viewers = var6;
                                    var6 = var8.getDuration;
                                    var6 = var6.bind(var8)();
                                    var0.time_connected_to_first_frame_delivered = var6;
                                    var6 = _closure1_slot0;
                                    var4 = 30;
                                    var4 = var9[var4];
                                    var6 = var6.bind(var7)(var4);
                                    var4 = var6.now;
                                    var6 = var4.bind(var6)();
                                    var4 = var8.getCreatedTime;
                                    var4 = var4.bind(var8)();
                                    var4 = var6 - var4;
                                    var0.time_total_to_first_frame = var4;
                                    var6 = var5.remoteVideoStreamCreatedTimestamp;
                                    var4 = null;
                                    if (!(var7 !== var6)) {
                                        _fun32117_ip = 274;
                                        continue _fun32117
                                    }
                                case 233:
                                    var6 = var5.remoteUserCreatedTimestamp;
                                    var4 = null;
                                    if (!(var7 !== var6)) {
                                        _fun32117_ip = 274;
                                        continue _fun32117
                                    }
                                case 245:
                                    var6 = global;
                                    var9 = var6.Number;
                                    var10 = var5.remoteVideoStreamCreatedTimestamp;
                                    var6 = var5.remoteUserCreatedTimestamp;
                                    var6 = var10 - var6;
                                    var4 = var9.bind(var7)(var6);
                                case 274:
                                    var0.time_remote_user_to_video_stream_created = var4;
                                    var6 = var5.videoDataReceivedTimestamp;
                                    var4 = null;
                                    if (!(var7 !== var6)) {
                                        _fun32117_ip = 334;
                                        continue _fun32117
                                    }
                                case 293:
                                    var6 = var5.remoteVideoStreamCreatedTimestamp;
                                    var4 = null;
                                    if (!(var7 !== var6)) {
                                        _fun32117_ip = 334;
                                        continue _fun32117
                                    }
                                case 305:
                                    var6 = global;
                                    var9 = var6.Number;
                                    var10 = var5.videoDataReceivedTimestamp;
                                    var6 = var5.remoteVideoStreamCreatedTimestamp;
                                    var6 = var10 - var6;
                                    var4 = var9.bind(var7)(var6);
                                case 334:
                                    var0.time_video_stream_created_to_video_data_received = var4;
                                    var6 = var5.videoSourceDeliveredFrameTimestamp;
                                    var4 = null;
                                    if (!(var7 !== var6)) {
                                        _fun32117_ip = 394;
                                        continue _fun32117
                                    }
                                case 353:
                                    var6 = var5.videoDataReceivedTimestamp;
                                    var4 = null;
                                    if (!(var7 !== var6)) {
                                        _fun32117_ip = 394;
                                        continue _fun32117
                                    }
                                case 365:
                                    var6 = global;
                                    var9 = var6.Number;
                                    var10 = var5.videoSourceDeliveredFrameTimestamp;
                                    var6 = var5.videoDataReceivedTimestamp;
                                    var6 = var10 - var6;
                                    var4 = var9.bind(var7)(var6);
                                case 394:
                                    var0.time_video_data_received_to_video_source_delivered_frame = var4;
                                    var6 = var5.updateMLSExternalSenderTimestamp;
                                    var4 = null;
                                    if (!(var7 !== var6)) {
                                        _fun32117_ip = 454;
                                        continue _fun32117
                                    }
                                case 413:
                                    var6 = var5.remoteUserCreatedTimestamp;
                                    var4 = null;
                                    if (!(var7 !== var6)) {
                                        _fun32117_ip = 454;
                                        continue _fun32117
                                    }
                                case 425:
                                    var6 = global;
                                    var9 = var6.Number;
                                    var10 = var5.updateMLSExternalSenderTimestamp;
                                    var6 = var5.remoteUserCreatedTimestamp;
                                    var6 = var10 - var6;
                                    var4 = var9.bind(var7)(var6);
                                case 454:
                                    var0.time_remote_user_to_mls_external_sender_updated = var4;
                                    var6 = var5.setRemoteSecureFrameKeyRatchetTimestamp;
                                    var4 = null;
                                    if (!(var7 !== var6)) {
                                        _fun32117_ip = 514;
                                        continue _fun32117
                                    }
                                case 473:
                                    var6 = var5.remoteUserCreatedTimestamp;
                                    var4 = null;
                                    if (!(var7 !== var6)) {
                                        _fun32117_ip = 514;
                                        continue _fun32117
                                    }
                                case 485:
                                    var6 = global;
                                    var9 = var6.Number;
                                    var10 = var5.setRemoteSecureFrameKeyRatchetTimestamp;
                                    var6 = var5.remoteUserCreatedTimestamp;
                                    var6 = var10 - var6;
                                    var4 = var9.bind(var7)(var6);
                                case 514:
                                    var0.time_remote_user_to_secure_frame_remote_key_ratchet_set = var4;
                                    var6 = var5.setLocalSecureFrameKeyRatchetTimestamp;
                                    var4 = null;
                                    if (!(var7 !== var6)) {
                                        _fun32117_ip = 574;
                                        continue _fun32117
                                    }
                                case 533:
                                    var6 = var5.remoteUserCreatedTimestamp;
                                    var4 = null;
                                    if (!(var7 !== var6)) {
                                        _fun32117_ip = 574;
                                        continue _fun32117
                                    }
                                case 545:
                                    var6 = global;
                                    var9 = var6.Number;
                                    var10 = var5.setLocalSecureFrameKeyRatchetTimestamp;
                                    var6 = var5.remoteUserCreatedTimestamp;
                                    var6 = var10 - var6;
                                    var4 = var9.bind(var7)(var6);
                                case 574:
                                    var0.time_remote_user_to_secure_frame_local_key_ratchet_set = var4;
                                    var6 = var5.firstFrameDecryptedTimestamp;
                                    var4 = null;
                                    if (!(var7 !== var6)) {
                                        _fun32117_ip = 634;
                                        continue _fun32117
                                    }
                                case 593:
                                    var6 = var5.remoteUserCreatedTimestamp;
                                    var4 = null;
                                    if (!(var7 !== var6)) {
                                        _fun32117_ip = 634;
                                        continue _fun32117
                                    }
                                case 605:
                                    var6 = global;
                                    var6 = var6.Number;
                                    var8 = var5.firstFrameDecryptedTimestamp;
                                    var5 = var5.remoteUserCreatedTimestamp;
                                    var5 = var8 - var5;
                                    var4 = var6.bind(var7)(var5);
                                case 634:
                                    var0.time_remote_user_to_first_frame_decrypted = var4;
                                    var0 = var2.bind(var3)(var1, var0);
                                case 647:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var5 = var7.bind(var8)(var6, var5);
                    case 493:
                        var5 = _closure3_slot0;
                        var8 = var5._connection;
                        if (!(var3 != var8)) {
                            _fun32109_ip = 556;
                            continue _fun32109
                        }
                    case 507:
                        var7 = var8.on;
                        var6 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var5 = 26;
                        var5 = var9[var5];
                        var5 = var6.bind(var0)(var5);
                        var5 = var5.BaseConnectionEvent;
                        var6 = var5.FirstFrameEncryptedStats;
                        var5 = function(arg0) { // Environment: var1
                            _fun32118: for (var _fun32118_ip = 0;;) switch (_fun32118_ip) {
                                case 0:
                                    var6 = arg0;
                                    var1 = _closure3_slot0;
                                    var0 = var1.getStreamAnalyticsProperties;
                                    var5 = var0.bind(var1)();
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 28;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var4 = var3.bind(var0)(var2);
                                    var3 = var4.track;
                                    var1 = _closure1_slot19;
                                    var2 = var1.STREAMER_FIRST_FRAME_ENCRYPTED;
                                    var1 = {};
                                    var7 = var5.guild_id;
                                    var1.guild_id = var7;
                                    var7 = var5.channel_id;
                                    var1.channel_id = var7;
                                    var7 = var5.rtc_connection_id;
                                    var1.rtc_connection_id = var7;
                                    var7 = var5.media_session_id;
                                    var1.media_session_id = var7;
                                    var5 = var5.parent_media_session_id;
                                    var1.parent_media_session_id = var5;
                                    var7 = var6.videoReceiversSetTimestamp;
                                    var5 = null;
                                    if (!(var0 !== var7)) {
                                        _fun32118_ip = 166;
                                        continue _fun32118
                                    }
                                case 125:
                                    var7 = var6.localUserCreatedTimestamp;
                                    var5 = null;
                                    if (!(var0 !== var7)) {
                                        _fun32118_ip = 166;
                                        continue _fun32118
                                    }
                                case 137:
                                    var7 = global;
                                    var9 = var7.Number;
                                    var10 = var6.videoReceiversSetTimestamp;
                                    var7 = var6.localUserCreatedTimestamp;
                                    var7 = var10 - var7;
                                    var5 = var9.bind(var0)(var7);
                                case 166:
                                    var1.time_local_user_to_video_receivers_set = var5;
                                    var7 = var6.updateMLSExternalSenderTimestamp;
                                    var5 = null;
                                    if (!(var0 !== var7)) {
                                        _fun32118_ip = 226;
                                        continue _fun32118
                                    }
                                case 185:
                                    var7 = var6.localUserCreatedTimestamp;
                                    var5 = null;
                                    if (!(var0 !== var7)) {
                                        _fun32118_ip = 226;
                                        continue _fun32118
                                    }
                                case 197:
                                    var7 = global;
                                    var9 = var7.Number;
                                    var10 = var6.updateMLSExternalSenderTimestamp;
                                    var7 = var6.localUserCreatedTimestamp;
                                    var7 = var10 - var7;
                                    var5 = var9.bind(var0)(var7);
                                case 226:
                                    var1.time_local_user_to_mls_external_sender_updated = var5;
                                    var7 = var6.setRemoteSecureFrameKeyRatchetTimestamp;
                                    var5 = null;
                                    if (!(var0 !== var7)) {
                                        _fun32118_ip = 286;
                                        continue _fun32118
                                    }
                                case 245:
                                    var7 = var6.localUserCreatedTimestamp;
                                    var5 = null;
                                    if (!(var0 !== var7)) {
                                        _fun32118_ip = 286;
                                        continue _fun32118
                                    }
                                case 257:
                                    var7 = global;
                                    var9 = var7.Number;
                                    var10 = var6.setRemoteSecureFrameKeyRatchetTimestamp;
                                    var7 = var6.localUserCreatedTimestamp;
                                    var7 = var10 - var7;
                                    var5 = var9.bind(var0)(var7);
                                case 286:
                                    var1.time_local_user_to_secure_frame_remote_key_ratchet_set = var5;
                                    var7 = var6.setLocalSecureFrameKeyRatchetTimestamp;
                                    var5 = null;
                                    if (!(var0 !== var7)) {
                                        _fun32118_ip = 346;
                                        continue _fun32118
                                    }
                                case 305:
                                    var7 = var6.localUserCreatedTimestamp;
                                    var5 = null;
                                    if (!(var0 !== var7)) {
                                        _fun32118_ip = 346;
                                        continue _fun32118
                                    }
                                case 317:
                                    var7 = global;
                                    var9 = var7.Number;
                                    var10 = var6.setLocalSecureFrameKeyRatchetTimestamp;
                                    var7 = var6.localUserCreatedTimestamp;
                                    var7 = var10 - var7;
                                    var5 = var9.bind(var0)(var7);
                                case 346:
                                    var1.time_local_user_to_secure_frame_local_key_ratchet_set = var5;
                                    var7 = var6.firstFrameEncryptedTimestamp;
                                    var5 = null;
                                    if (!(var0 !== var7)) {
                                        _fun32118_ip = 406;
                                        continue _fun32118
                                    }
                                case 365:
                                    var7 = var6.localUserCreatedTimestamp;
                                    var5 = null;
                                    if (!(var0 !== var7)) {
                                        _fun32118_ip = 406;
                                        continue _fun32118
                                    }
                                case 377:
                                    var7 = global;
                                    var7 = var7.Number;
                                    var8 = var6.firstFrameEncryptedTimestamp;
                                    var6 = var6.localUserCreatedTimestamp;
                                    var6 = var8 - var6;
                                    var5 = var7.bind(var0)(var6);
                                case 406:
                                    var1.time_local_user_to_first_frame_encrypted = var5;
                                    var1 = var3.bind(var4)(var2, var1);
                                    return var0;
                            }
                        };
                        var5 = var7.bind(var8)(var6, var5);
                    case 556:
                        var4 = _closure3_slot0;
                        var4 = var4._connection;
                        if (!(var3 != var4)) {
                            _fun32109_ip = 619;
                            continue _fun32109
                        }
                    case 570:
                        var3 = var4.on;
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 26;
                        var2 = var6[var2];
                        var2 = var5.bind(var0)(var2);
                        var2 = var2.BaseConnectionEvent;
                        var2 = var2.Destroy;
                        var1 = function() { // Environment: var1
                            var0 = _closure3_slot0;
                            var1 = var0.errorTimer;
                            var0 = var1.stop;
                            var0 = var0.bind(var1)();
                            var0 = undefined;
                            return var0;
                        };
                        var1 = var3.bind(var4)(var2, var1);
                    case 619:
                        return var0;
                }
            };
            var3 = var8.bind(var4)(var7, var3);
            var8 = var4.on;
            var3 = var6[var2];
            var3 = var5.bind(var0)(var3);
            var3 = var3.RTCConnectionEvent;
            var7 = var3.Video;
            var3 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var1
                _fun32120: for (var _fun32120_ip = 0;;) switch (_fun32120_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 19;
                        var1 = var1[var0];
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var3 = var4.decodeStreamKey;
                        var2 = _closure3_slot0;
                        var2 = var2.streamKey;
                        var3 = var3.bind(var4)(var2);
                        var4 = var3.guildId;
                        var2 = arg0;
                        var2 = var4 === var2;
                        if (!var2) {
                            _fun32120_ip = 76;
                            continue _fun32120
                        }
                    case 64:
                        var5 = var3.channelId;
                        var4 = arg1;
                        var2 = var5 === var4;
                    case 76:
                        if (!var2) {
                            _fun32120_ip = 92;
                            continue _fun32120
                        }
                    case 79:
                        var4 = var3.ownerId;
                        var3 = arg2;
                        var2 = var4 === var3;
                    case 92:
                        if (!var2) {
                            _fun32120_ip = 169;
                            continue _fun32120
                        }
                    case 95:
                        var3 = _closure3_slot0;
                        var2 = var3.getMediaSessionId;
                        var3 = var2.bind(var3)();
                        var2 = null;
                        var2 = var2 == var3;
                        if (var2) {
                            _fun32120_ip = 122;
                            continue _fun32120
                        }
                    case 118:
                        var2 = _closure3_slot1;
                    case 122:
                        if (var2) {
                            _fun32120_ip = 147;
                            continue _fun32120
                        }
                    case 125:
                        var3 = _closure3_slot0;
                        var2 = var3.trackVideoStartStats;
                        var2 = var2.bind(var3)();
                        var2 = true;
                        _closure3_slot1 = var2;
                    case 147:
                        var4 = _closure3_slot0;
                        var3 = var4.updateVideoStreamId;
                        var2 = arg3;
                        var1 = arg4;
                        var1 = var3.bind(var4)(var2, var1);
                    case 169:
                        return var0;
                }
            };
            var3 = var8.bind(var4)(var7, var3);
            var8 = var4.on;
            var3 = var6[var2];
            var3 = var5.bind(var0)(var3);
            var3 = var3.RTCConnectionEvent;
            var7 = var3.VideoSourceQualityChanged;
            var3 = function(arg0, arg1, arg2, arg3, arg4, arg5) { // Environment: var1
                _fun32121: for (var _fun32121_ip = 0;;) switch (_fun32121_ip) {
                    case 0:
                        var5 = arg2;
                        var4 = arg3;
                        var0 = _closure3_slot0;
                        var6 = var0._goLiveQualityManager;
                        var0 = null;
                        var3 = var0 == var6;
                        var0 = undefined;
                        var2 = undefined;
                        if (var3) {
                            _fun32121_ip = 42;
                            continue _fun32121
                        }
                    case 32:
                        var3 = var6.getUserID;
                        var2 = var3.bind(var6)();
                    case 42:
                        if (!(var5 === var2)) {
                            _fun32121_ip = 56;
                            continue _fun32121
                        }
                    case 46:
                        var1 = _closure3_slot0;
                        var1.goliveCurrentMaxResolution = var4;
                    case 56:
                        var2 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var1 = 24;
                        var1 = var3[var1];
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var6 = 'MEDIA_ENGINE_VIDEO_SOURCE_QUALITY_CHANGED';
                        var1.type = var6;
                        var6 = arg0;
                        var1.guildId = var6;
                        var6 = arg1;
                        var1.channelId = var6;
                        var1.senderUserId = var5;
                        var1.maxResolution = var4;
                        var4 = arg4;
                        var1.maxFrameRate = var4;
                        var4 = arg5;
                        var1.context = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                }
            };
            var3 = var8.bind(var4)(var7, var3);
            var8 = var4.on;
            var3 = var6[var2];
            var3 = var5.bind(var0)(var3);
            var3 = var3.RTCConnectionEvent;
            var7 = var3.SecureFramesUpdate;
            var3 = function() { // Environment: var1
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 24;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'RTC_CONNECTION_SECURE_FRAMES_UPDATE';
                var1.type = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var3 = var8.bind(var4)(var7, var3);
            var3 = var4.on;
            var2 = var6[var2];
            var2 = var5.bind(var0)(var2);
            var2 = var2.RTCConnectionEvent;
            var2 = var2.RosterMapUpdate;
            var1 = function(arg0) { // Environment: var1
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 24;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'RTC_CONNECTION_ROSTER_MAP_UPDATE';
                var1.type = var4;
                var4 = arg0;
                var1.userIds = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'reportSoundshareFailure';
        var4.key = var6;
        var6 = function arg0, arg1, arg2, arg3() {
            _fun32124: for (var _fun32124_ip = 0;;) switch (_fun32124_ip) {
                case 0:
                    var7 = arg0;
                    var5 = arg1;
                    var6 = this;
                    var1 = null;
                    var3 = var1 == var7;
                    var0 = undefined;
                    var2 = undefined;
                    if (var3) {
                        _fun32124_ip = 28;
                        continue _fun32124
                    }
                case 22:
                    var2 = var7.soundshareSession;
                case 28:
                    var3 = var1 != var2;
                    var4 = '';
                    if (!var3) {
                        _fun32124_ip = 42;
                        continue _fun32124
                    }
                case 39:
                    var4 = var2;
                case 42:
                    var2 = var6.soundshareFailuresReported;
                    var2 = var2[var4];
                    if (!(var1 == var2)) {
                        _fun32124_ip = 94;
                        continue _fun32124
                    }
                case 56:
                    var3 = var6.soundshareFailuresReported;
                    var2 = global;
                    var2 = var2.Set;
                    var8 = var2.prototype;
                    var8 = Object.create(var8, {
                        constructor: {
                            value: var2
                        }
                    });
                    var12 = var8;
                    var2 = new var12[var2](var11);
                    var2 = var2 instanceof Object ? var2 : var8;
                    var3[var4] = var2;
                case 94:
                    var2 = var1 != var5;
                    if (!var2) {
                        _fun32124_ip = 124;
                        continue _fun32124
                    }
                case 101:
                    var3 = var6.soundshareFailuresReported;
                    var8 = var3[var4];
                    var3 = var8.has;
                    var3 = var3.bind(var8)(var5);
                    var2 = !var3;
                case 124:
                    if (!var2) {
                        _fun32124_ip = 147;
                        continue _fun32124
                    }
                case 127:
                    var3 = var6.soundshareFailuresReported;
                    var4 = var3[var4];
                    var3 = var4.add;
                    var3 = var3.bind(var4)(var5);
                case 147:
                    var1 = var1 == var5;
                    if (var1) {
                        _fun32124_ip = 157;
                        continue _fun32124
                    }
                case 154:
                    var1 = var2;
                case 157:
                    if (!var1) {
                        _fun32124_ip = 274;
                        continue _fun32124
                    }
                case 160:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var2 = 28;
                    var2 = var9[var2];
                    var4 = var8.bind(var0)(var2);
                    var3 = var4.track;
                    var1 = _closure1_slot19;
                    var2 = var1.SOUNDSHARE_FAILED;
                    var1 = {};
                    var1.soundshare_failure_code = var5;
                    var5 = arg2;
                    var1.soundshare_failure_reason = var5;
                    var5 = arg3;
                    var1.soundshare_failure_will_retry = var5;
                    var5 = 29;
                    var5 = var9[var5];
                    var5 = var8.bind(var0)(var5);
                    var10 = var5.bind(var0)(var7);
                    var11 = var1;
                    var5 = copyDataProperties(var11, var10);
                    var5 = var6.getSoundshareAnalyticsProperties;
                    var10 = var5.bind(var6)();
                    var11 = var1;
                    var5 = copyDataProperties(var11, var10);
                    var1 = var3.bind(var4)(var2, var1);
                case 274:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getStreamAnalyticsProperties';
        var4.key = var6;
        var6 = function() {
            _fun32125: for (var _fun32125_ip = 0;;) switch (_fun32125_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.analyticsContext;
                    var11 = var0.streamRegion;
                    var4 = var0.streamApplication;
                    var10 = var0.streamSourceType;
                    var2 = var0.actionContext;
                    var0 = var1.streamContext;
                    var14 = var0.ownerId;
                    var12 = var0.guildId;
                    var5 = _closure1_slot17;
                    var3 = var5.getRegion;
                    var6 = _closure1_slot16;
                    var0 = var6.getHostname;
                    var0 = var0.bind(var6)();
                    var9 = var3.bind(var5)(var0);
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 27;
                    var3 = var3[var0];
                    var0 = undefined;
                    var3 = var5.bind(var0)(var3);
                    var0 = var3.getRunningGameAnalytics;
                    var0 = var0.bind(var3)(var4);
                    var8 = var0.gameName;
                    var7 = var0.gameId;
                    var6 = var0.exe;
                    var5 = var0.distributor;
                    var4 = var0.sku;
                    var3 = var0.gameMetadata;
                    var0 = {};
                    var15 = var1.channelId;
                    var0.channel_id = var15;
                    var15 = var1.getRTCConnectionId;
                    var15 = var15.bind(var1)();
                    var0.rtc_connection_id = var15;
                    var15 = var1.getMediaSessionId;
                    var15 = var15.bind(var1)();
                    var0.media_session_id = var15;
                    var15 = var1.parentMediaSessionId;
                    var0.parent_media_session_id = var15;
                    var0.sender_user_id = var14;
                    var13 = _closure1_slot22;
                    var13 = var13.STREAM;
                    var0.context = var13;
                    var0.guild_id = var12;
                    var0.stream_region = var11;
                    var0.stream_source_type = var10;
                    var0.guild_region = var9;
                    var10 = var1.isOwner;
                    var9 = 'receiver';
                    if (!var10) {
                        _fun32125_ip = 262;
                        continue _fun32125
                    }
                case 256:
                    var9 = 'streamer';
                case 262:
                    var0.participant_type = var9;
                    var0.share_application_name = var8;
                    var0.share_application_id = var7;
                    var0.share_application_executable = var6;
                    var0.share_application_distributor = var5;
                    var0.share_application_distributor_game_id = var4;
                    var0.share_application_game_metadata = var3;
                    var4 = var1.videoStreamStats;
                    var3 = var4.getLayout;
                    var3 = var3.bind(var4)();
                    var0.video_layout = var3;
                    var0.client_event_source = var2;
                    var2 = var1.voiceVersion;
                    var0.voice_backend_version = var2;
                    var1 = var1.rtcWorkerVersion;
                    var0.rtc_worker_backend_version = var1;
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getSoundshareAnalyticsProperties';
        var4.key = var6;
        var6 = function() {
            var2 = this;
            var0 = {};
            var1 = var2.getRTCConnectionId;
            var1 = var1.bind(var2)();
            var0.rtc_connection_id = var1;
            var2 = _closure1_slot14;
            var1 = var2.getExperimentalSoundshare;
            var1 = var1.bind(var2)();
            var0.soundshare_experimental = var1;
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'trackVideoStartStats';
        var4.key = var6;
        var6 = function() {
            _fun32127: for (var _fun32127_ip = 0;;) switch (_fun32127_ip) {
                case 0:
                    var5 = this;
                    var0 = var5.isOwner;
                    var7 = null;
                    if (!var0) {
                        _fun32127_ip = 43;
                        continue _fun32127
                    }
                case 14:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 31;
                    var0 = var1[var0];
                    var1 = undefined;
                    var0 = var2.bind(var1)(var0);
                    var7 = var0.bind(var1)();
                case 43:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 28;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.track;
                    var1 = _closure1_slot19;
                    var2 = var1.VIDEO_STREAM_STARTED;
                    var1 = {};
                    var8 = var5.getStreamAnalyticsProperties;
                    var9 = var8.bind(var5)();
                    var10 = var1;
                    var8 = copyDataProperties(var10, var9);
                    var10 = var1;
                    var9 = var7;
                    var7 = copyDataProperties(var10, var9);
                    var7 = _closure1_slot15;
                    var6 = var7.getType;
                    var8 = var6.bind(var7)();
                    var6 = 'connection_type';
                    var1[var6] = var8;
                    var6 = var7.getEffectiveConnectionSpeed;
                    var8 = var6.bind(var7)();
                    var6 = 'effective_connection_speed';
                    var1[var6] = var8;
                    var6 = var7.getServiceProvider;
                    var7 = var6.bind(var7)();
                    var6 = 'service_provider';
                    var1[var6] = var7;
                    var6 = var5.analyticsContext;
                    var7 = var6.goLiveModalDurationMs;
                    var6 = 'duration_go_live_modal';
                    var1[var6] = var7;
                    var5 = var5.analyticsContext;
                    var6 = var5.analyticsLocations;
                    var5 = 'source_location_stack';
                    var1[var5] = var6;
                    var1 = var3.bind(var4)(var2, var1);
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'trackVideoEndStats';
        var4.key = var6;
        var6 = function arg0() {
            _fun32128: for (var _fun32128_ip = 0;;) switch (_fun32128_ip) {
                case 0:
                    var5 = this;
                    var _closure3_slot0 = var5;
                    var1 = arg0;
                    var _closure3_slot1 = var1;
                    var3 = _closure1_slot12;
                    var2 = var3.getChannel;
                    var1 = var5.channelId;
                    var3 = var2.bind(var3)(var1);
                    var1 = null;
                    var4 = var1 != var3;
                    var2 = null;
                    if (!var4) {
                        _fun32128_ip = 54;
                        continue _fun32128
                    }
                case 49:
                    var2 = var3.type;
                case 54:
                    var _closure3_slot4 = var2;
                    var2 = var5.streamContext;
                    var3 = var2.ownerId;
                    var2 = var5._videoQuality;
                    var _closure3_slot5 = var2;
                    if (!(var1 != var2)) {
                        _fun32128_ip = 378;
                        continue _fun32128
                    }
                case 87:
                    var1 = var2.getNetworkStats;
                    var1 = var1.bind(var2)();
                    var _closure3_slot2 = var1;
                    var1 = var5.isOwner;
                    var7 = var2.getCodecUsageStats;
                    if (var1) {
                        _fun32128_ip = 130;
                        continue _fun32128
                    }
                case 116:
                    var1 = 'receiver';
                    var1 = var7.bind(var2)(var1, var3);
                    _fun32128_ip = 147;
                    continue _fun32128;
                case 130:
                    var4 = var5.userId;
                    var3 = 'streamer';
                    var1 = var7.bind(var2)(var3, var4);
                case 147:
                    var _closure3_slot3 = var1;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var1 = 32;
                    var1 = var4[var1];
                    var8 = undefined;
                    var1 = var3.bind(var8)(var1);
                    var4 = var1.default;
                    var1 = {};
                    var3 = var4.getApplicationNames;
                    var3 = var3.bind(var4)();
                    var1.stream_application_name = var3;
                    var _closure3_slot6 = var1;
                    var3 = _closure1_slot9;
                    var1 = var3.getSettings;
                    var4 = var1.bind(var3)();
                    var1 = var5.isOwner;
                    if (var1) {
                        _fun32128_ip = 230;
                        continue _fun32128
                    }
                case 226:
                    var1 = {};
                    _fun32128_ip = 285;
                    continue _fun32128;
                case 230:
                    var3 = {};
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var6 = 33;
                    var6 = var9[var6];
                    var7 = var7.bind(var8)(var6);
                    var6 = var7.isClipsEnabled;
                    var6 = var6.bind(var7)();
                    var3.clips_enabled = var6;
                    var4 = var4.clipsLength;
                    var3.clips_buffer_length = var4;
                    var1 = var3;
                case 285:
                    var _closure3_slot7 = var1;
                    var1 = var5.isOwner;
                    if (var1) {
                        _fun32128_ip = 302;
                        continue _fun32128
                    }
                case 298:
                    var1 = {};
                    _fun32128_ip = 324;
                    continue _fun32128;
                case 302:
                    var3 = {};
                    var4 = var5.getBandwidthEstimationExperiment;
                    var4 = var4.bind(var5)();
                    var3.bandwidth_estimation_experiment = var4;
                    var1 = var3;
                case 324:
                    var _closure3_slot8 = var1;
                    var1 = var2.getOutboundStats;
                    var4 = var1.bind(var2)();
                    var3 = var4.forEach;
                    var1 = function(arg0) { // Environment: var0
                        _fun32129: for (var _fun32129_ip = 0;;) switch (_fun32129_ip) {
                            case 0:
                                var9 = arg0;
                                var2 = var9.num_frames;
                                var6 = null;
                                var3 = var6 != var2;
                                var1 = 0;
                                var0 = 0;
                                if (!var3) {
                                    _fun32129_ip = 25;
                                    continue _fun32129
                                }
                            case 22:
                                var0 = var2;
                            case 25:
                                if (!(var0 > var1)) {
                                    _fun32129_ip = 437;
                                    continue _fun32129
                                }
                            case 32:
                                var10 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var0 = 28;
                                var0 = var11[var0];
                                var7 = undefined;
                                var3 = var10.bind(var7)(var0);
                                var2 = var3.track;
                                var0 = _closure1_slot19;
                                var1 = var0.VIDEO_STREAM_ENDED;
                                var0 = {};
                                var14 = _closure3_slot3;
                                var15 = var0;
                                var5 = copyDataProperties(var15, var14);
                                var14 = _closure3_slot2;
                                var15 = var0;
                                var5 = copyDataProperties(var15, var14);
                                var14 = _closure3_slot6;
                                var15 = var0;
                                var5 = copyDataProperties(var15, var14);
                                var5 = _closure3_slot0;
                                var13 = var5.videoStreamStats;
                                var12 = var13.getStats;
                                var14 = var12.bind(var13)();
                                var15 = var0;
                                var12 = copyDataProperties(var15, var14);
                                var15 = var0;
                                var14 = var9;
                                var9 = copyDataProperties(var15, var14);
                                var12 = var5.soundshareStats;
                                var9 = var12.getStats;
                                var14 = var9.bind(var12)();
                                var15 = var0;
                                var9 = copyDataProperties(var15, var14);
                                var9 = var5.getStreamAnalyticsProperties;
                                var14 = var9.bind(var5)();
                                var15 = var0;
                                var9 = copyDataProperties(var15, var14);
                                var14 = _closure3_slot7;
                                var15 = var0;
                                var9 = copyDataProperties(var15, var14);
                                var14 = _closure3_slot8;
                                var15 = var0;
                                var9 = copyDataProperties(var15, var14);
                                var9 = 34;
                                var9 = var11[var9];
                                var10 = var10.bind(var7)(var9);
                                var9 = var10.getAppHardwareAccelerationEnabled;
                                var10 = var9.bind(var10)();
                                var9 = 'app_hardware_acceleration_enabled';
                                var0[var9] = var10;
                                var10 = _closure3_slot4;
                                var9 = 'channel_type';
                                var0[var9] = var10;
                                var9 = _closure3_slot1;
                                var8 = 'reason';
                                var0[var8] = var9;
                                var8 = var5.analyticsContext;
                                var9 = var8.maxViewers;
                                var8 = 'max_viewers';
                                var0[var8] = var9;
                                var9 = var5.hostname;
                                var8 = 'hostname';
                                var0[var8] = var9;
                                var9 = _closure1_slot14;
                                var8 = var9.getHardwareEncoding;
                                var9 = var8.bind(var9)();
                                var8 = 'hardware_enabled';
                                var0[var8] = var9;
                                var5 = var5.isOwner;
                                var6 = null;
                                if (!var5) {
                                    _fun32129_ip = 364;
                                    continue _fun32129
                                }
                            case 340:
                                var8 = _closure1_slot1;
                                var9 = _closure1_slot2;
                                var5 = 35;
                                var5 = var9[var5];
                                var5 = var8.bind(var7)(var5);
                                var6 = var5.bind(var7)();
                            case 364:
                                var5 = 'device_performance_class';
                                var0[var5] = var6;
                                var6 = _closure1_slot14;
                                var5 = var6.getExperimentalSoundshare;
                                var6 = var5.bind(var6)();
                                var5 = 'soundshare_experimental';
                                var0[var5] = var6;
                                var5 = _closure1_slot10;
                                var4 = var5.getState;
                                var4 = var4.bind(var5)();
                                var5 = var4.preset;
                                var4 = 'quality_preset';
                                var0[var4] = var5;
                                var0 = var2.bind(var3)(var1, var0);
                            case 437:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var3.bind(var4)(var1);
                    var1 = var2.getInboundParticipants;
                    var2 = var1.bind(var2)();
                    var1 = var2.forEach;
                    var0 = function(arg0) { // Environment: var0
                        _fun32130: for (var _fun32130_ip = 0;;) switch (_fun32130_ip) {
                            case 0:
                                var2 = _closure3_slot5;
                                var1 = var2.getInboundStats;
                                var0 = arg0;
                                var9 = var1.bind(var2)(var0);
                                var6 = null;
                                var1 = var6 == var9;
                                var0 = undefined;
                                var3 = undefined;
                                if (var1) {
                                    _fun32130_ip = 40;
                                    continue _fun32130
                                }
                            case 34:
                                var3 = var9.num_frames;
                            case 40:
                                var4 = var6 != var3;
                                var2 = 0;
                                var1 = 0;
                                if (!var4) {
                                    _fun32130_ip = 54;
                                    continue _fun32130
                                }
                            case 51:
                                var1 = var3;
                            case 54:
                                if (!(var1 > var2)) {
                                    _fun32130_ip = 405;
                                    continue _fun32130
                                }
                            case 61:
                                var10 = _closure1_slot1;
                                var11 = _closure1_slot2;
                                var1 = 28;
                                var1 = var11[var1];
                                var4 = var10.bind(var0)(var1);
                                var3 = var4.track;
                                var1 = _closure1_slot19;
                                var2 = var1.VIDEO_STREAM_ENDED;
                                var1 = {};
                                var14 = _closure3_slot3;
                                var15 = var1;
                                var7 = copyDataProperties(var15, var14);
                                var14 = _closure3_slot2;
                                var15 = var1;
                                var7 = copyDataProperties(var15, var14);
                                var14 = _closure3_slot6;
                                var15 = var1;
                                var7 = copyDataProperties(var15, var14);
                                var7 = _closure3_slot0;
                                var13 = var7.videoStreamStats;
                                var12 = var13.getStats;
                                var14 = var12.bind(var13)();
                                var15 = var1;
                                var12 = copyDataProperties(var15, var14);
                                var15 = var1;
                                var14 = var9;
                                var9 = copyDataProperties(var15, var14);
                                var12 = var7.soundshareStats;
                                var9 = var12.getStats;
                                var14 = var9.bind(var12)();
                                var15 = var1;
                                var9 = copyDataProperties(var15, var14);
                                var9 = var7.getStreamAnalyticsProperties;
                                var14 = var9.bind(var7)();
                                var15 = var1;
                                var9 = copyDataProperties(var15, var14);
                                var14 = _closure3_slot7;
                                var15 = var1;
                                var9 = copyDataProperties(var15, var14);
                                var14 = _closure3_slot8;
                                var15 = var1;
                                var9 = copyDataProperties(var15, var14);
                                var9 = 34;
                                var9 = var11[var9];
                                var10 = var10.bind(var0)(var9);
                                var9 = var10.getAppHardwareAccelerationEnabled;
                                var10 = var9.bind(var10)();
                                var9 = 'app_hardware_acceleration_enabled';
                                var1[var9] = var10;
                                var10 = _closure3_slot4;
                                var9 = 'channel_type';
                                var1[var9] = var10;
                                var9 = _closure3_slot1;
                                var8 = 'reason';
                                var1[var8] = var9;
                                var8 = var7.analyticsContext;
                                var9 = var8.maxViewers;
                                var8 = 'max_viewers';
                                var1[var8] = var9;
                                var9 = var7.hostname;
                                var8 = 'hostname';
                                var1[var8] = var9;
                                var9 = _closure1_slot14;
                                var8 = var9.getHardwareEncoding;
                                var9 = var8.bind(var9)();
                                var8 = 'hardware_enabled';
                                var1[var8] = var9;
                                var7 = var7.isOwner;
                                var6 = null;
                                if (!var7) {
                                    _fun32130_ip = 388;
                                    continue _fun32130
                                }
                            case 364:
                                var7 = _closure1_slot1;
                                var8 = _closure1_slot2;
                                var5 = 35;
                                var5 = var8[var5];
                                var5 = var7.bind(var0)(var5);
                                var6 = var5.bind(var0)();
                            case 388:
                                var5 = 'device_performance_class';
                                var1[var5] = var6;
                                var1 = var3.bind(var4)(var2, var1);
                            case 405:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                case 378:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getExtraConnectionOptions';
        var4.key = var6;
        var5 = function() {
            var0 = {};
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 19;
            var2 = var2[var1];
            var1 = undefined;
            var3 = var3.bind(var1)(var2);
            var2 = var3.decodeStreamKey;
            var1 = this;
            var1 = var1.streamKey;
            var1 = var2.bind(var3)(var1);
            var1 = var1.ownerId;
            var0.streamUserId = var1;
            return var0;
        };
        var4.value = var5;
        var0[16] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var3 = var3.bind(var0)(var4);
    var4 = 37;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/go_live/StreamRTCConnection.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.StreamRTCAnalyticsContext = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [15, 17, 102, 18, 6, 7, 3482, 3624, 1216, 1372, 3625, 3476, 3626, 3518, 3627, 3628, 660, 3510, 667, 3505, 3629, 3630, 3631, 22, 806, 3632, 3633, 3710, 795, 3711, 3529, 3712, 3713, 12256, 1347, 12237, 3527, 2]);