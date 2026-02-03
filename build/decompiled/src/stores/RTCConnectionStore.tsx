// stores/RTCConnectionStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun31073: for (var _fun31073_ip = 0;;) switch (_fun31073_ip) {
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
                _fun31073_ip = 74;
                continue _fun31073;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot28 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot28 = var0;
    var0 = function arg0, arg1() {
        _fun31076: for (var _fun31076_ip = 0;;) switch (_fun31076_ip) {
            case 0:
                var6 = arg1;
                var0 = _closure1_slot16;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun31076_ip = 656;
                    continue _fun31076
                }
            case 21:
                var4 = _closure1_slot9;
                var0 = var4.getId;
                var4 = var0.bind(var4)();
                var9 = _closure1_slot0;
                var7 = _closure1_slot2;
                var0 = 10;
                var0 = var7[var0];
                var5 = undefined;
                var0 = var9.bind(var5)(var0);
                var8 = var0.default;
                var0 = {};
                var0.userId = var4;
                var4 = _closure1_slot16;
                var0.sessionId = var4;
                var4 = arg0;
                var0.guildId = var4;
                var0.channelId = var6;
                var4 = _closure1_slot26;
                var0.joinVoiceId = var4;
                var4 = var8.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var8
                    }
                });
                var14 = var4;
                var13 = var0;
                var0 = new var14[var8](var13, var12);
                var0 = var0 instanceof Object ? var0 : var4;
                var _closure2_slot0 = var0;
                var11 = var0.on;
                var4 = 11;
                var8 = var7[var4];
                var8 = var9.bind(var5)(var8);
                var8 = var8.RTCConnectionEvent;
                var10 = var8.State;
                var8 = function(arg0, arg1, arg2) { // Environment: var3
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var0 = arg2;
                    var _closure3_slot2 = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.dispatch;
                        var0 = {};
                        var3 = 'RTC_CONNECTION_STATE';
                        var0.type = var3;
                        var4 = _closure3_slot0;
                        var0.state = var4;
                        var5 = _closure3_slot1;
                        var6 = var0;
                        var4 = copyDataProperties(var6, var5);
                        var5 = _closure3_slot2;
                        var6 = var0;
                        var3 = copyDataProperties(var6, var5);
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var11.bind(var0)(var10, var8);
                var11 = var0.on;
                var8 = var7[var4];
                var8 = var9.bind(var5)(var8);
                var8 = var8.RTCConnectionEvent;
                var10 = var8.Video;
                var8 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var3
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var0 = arg2;
                    var _closure3_slot2 = var0;
                    var0 = arg3;
                    var _closure3_slot3 = var0;
                    var0 = arg4;
                    var _closure3_slot4 = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.dispatch;
                        var0 = {};
                        var4 = 'RTC_CONNECTION_VIDEO';
                        var0.type = var4;
                        var5 = _closure3_slot0;
                        var0.guildId = var5;
                        var5 = _closure3_slot1;
                        var0.channelId = var5;
                        var5 = _closure3_slot2;
                        var0.userId = var5;
                        var5 = _closure3_slot3;
                        var0.streamId = var5;
                        var4 = _closure3_slot4;
                        var0.rtcServerId = var4;
                        var3 = _closure1_slot14;
                        var3 = var3.DEFAULT;
                        var0.context = var3;
                        var4 = _closure2_slot0;
                        var3 = var4.getMediaEngineConnectionId;
                        var3 = var3.bind(var4)();
                        var0.mediaEngineConnectionId = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var11.bind(var0)(var10, var8);
                var11 = var0.on;
                var8 = var7[var4];
                var8 = var9.bind(var5)(var8);
                var8 = var8.RTCConnectionEvent;
                var10 = var8.Ping;
                var8 = function(arg0, arg1) { // Environment: var3
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.dispatch;
                        var0 = {};
                        var3 = 'RTC_CONNECTION_PING';
                        var0.type = var3;
                        var4 = _closure3_slot0;
                        var0.pings = var4;
                        var3 = _closure3_slot1;
                        var0.quality = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var11.bind(var0)(var10, var8);
                var11 = var0.on;
                var8 = var7[var4];
                var8 = var9.bind(var5)(var8);
                var8 = var8.RTCConnectionEvent;
                var10 = var8.OutboundLossRate;
                var8 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var2 = var2.bind(var0)(var1);
                        var1 = var2.dispatch;
                        var0 = {};
                        var3 = 'RTC_CONNECTION_LOSS_RATE';
                        var0.type = var3;
                        var3 = _closure3_slot0;
                        var0.lossRate = var3;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var11.bind(var0)(var10, var8);
                var11 = var0.on;
                var8 = var7[var4];
                var8 = var9.bind(var5)(var8);
                var8 = var8.RTCConnectionEvent;
                var10 = var8.Speaking;
                var8 = function(arg0, arg1) { // Environment: var3
                    _fun31085: for (var _fun31085_ip = 0;;) switch (_fun31085_ip) {
                        case 0:
                            var3 = _closure1_slot21;
                            var0 = null;
                            if (!(var0 != var3)) {
                                _fun31085_ip = 33;
                                continue _fun31085
                            }
                        case 13:
                            var2 = var3.setSpeaking;
                            var1 = arg0;
                            var0 = arg1;
                            var0 = var2.bind(var3)(var1, var0);
                        case 33:
                            var0 = undefined;
                            return var0;
                    }
                };
                var8 = var11.bind(var0)(var10, var8);
                var11 = var0.on;
                var8 = var7[var4];
                var8 = var9.bind(var5)(var8);
                var8 = var8.RTCConnectionEvent;
                var10 = var8.Flags;
                var8 = function(arg0, arg1) { // Environment: var3
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'RTC_CONNECTION_FLAGS';
                        var1.type = var4;
                        var5 = _closure3_slot1;
                        var1.flags = var5;
                        var4 = _closure3_slot0;
                        var1.userId = var4;
                        var5 = _closure2_slot0;
                        var5 = var5.guildId;
                        var1.guildId = var5;
                        var5 = _closure2_slot0;
                        var5 = var5.channelId;
                        var1.channelId = var5;
                        var4 = _closure2_slot0;
                        var4 = var4.context;
                        var1.context = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var11.bind(var0)(var10, var8);
                var11 = var0.on;
                var8 = var7[var4];
                var8 = var9.bind(var5)(var8);
                var8 = var8.RTCConnectionEvent;
                var10 = var8.UsersMerged;
                var8 = function(arg0, arg1) { // Environment: var3
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.dispatch;
                    var1 = {};
                    var4 = 'RTC_CONNECTION_USERS_MERGED';
                    var1.type = var4;
                    var4 = arg0;
                    var1.userIds = var4;
                    var4 = arg1;
                    var1.context = var4;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var11.bind(var0)(var10, var8);
                var11 = var0.on;
                var8 = var7[var4];
                var8 = var9.bind(var5)(var8);
                var8 = var8.RTCConnectionEvent;
                var10 = var8.ClientConnect;
                var8 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'RTC_CONNECTION_CLIENT_CONNECT';
                        var1.type = var4;
                        var4 = _closure3_slot0;
                        var1.userIds = var4;
                        var5 = _closure2_slot0;
                        var5 = var5.guildId;
                        var1.guildId = var5;
                        var5 = _closure2_slot0;
                        var5 = var5.channelId;
                        var1.channelId = var5;
                        var4 = _closure2_slot0;
                        var4 = var4.context;
                        var1.context = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var11.bind(var0)(var10, var8);
                var11 = var0.on;
                var8 = var7[var4];
                var8 = var9.bind(var5)(var8);
                var8 = var8.RTCConnectionEvent;
                var10 = var8.ClientDisconnect;
                var8 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'RTC_CONNECTION_CLIENT_DISCONNECT';
                        var1.type = var4;
                        var4 = _closure3_slot0;
                        var1.userId = var4;
                        var5 = _closure2_slot0;
                        var5 = var5.guildId;
                        var1.guildId = var5;
                        var5 = _closure2_slot0;
                        var5 = var5.channelId;
                        var1.channelId = var5;
                        var4 = _closure2_slot0;
                        var4 = var4.context;
                        var1.context = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var11.bind(var0)(var10, var8);
                var11 = var0.on;
                var8 = var7[var4];
                var8 = var9.bind(var5)(var8);
                var8 = var8.RTCConnectionEvent;
                var10 = var8.Platform;
                var8 = function(arg0, arg1, arg2) { // Environment: var3
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var0 = arg1;
                    var _closure3_slot1 = var0;
                    var0 = arg2;
                    var _closure3_slot2 = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'RTC_CONNECTION_PLATFORM';
                        var1.type = var4;
                        var5 = _closure3_slot1;
                        var1.platform = var5;
                        var5 = _closure3_slot0;
                        var1.userId = var5;
                        var4 = _closure3_slot2;
                        var1.channelId = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var11.bind(var0)(var10, var8);
                var11 = var0.on;
                var8 = var7[var4];
                var8 = var9.bind(var5)(var8);
                var8 = var8.RTCConnectionEvent;
                var10 = var8.SecureFramesUpdate;
                var8 = function() { // Environment: var3
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 12;
                    var1 = var1[var0];
                    var0 = undefined;
                    var3 = var2.bind(var0)(var1);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 12;
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
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var8 = var11.bind(var0)(var10, var8);
                var8 = var0.on;
                var4 = var7[var4];
                var4 = var9.bind(var5)(var4);
                var4 = var4.RTCConnectionEvent;
                var4 = var4.RosterMapUpdate;
                var3 = function(arg0) { // Environment: var3
                    var0 = arg0;
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 12;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.wait;
                    var1 = function() { // Environment: var1
                        var2 = _closure1_slot1;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.dispatch;
                        var1 = {};
                        var4 = 'RTC_CONNECTION_ROSTER_MAP_UPDATE';
                        var1.type = var4;
                        var4 = _closure3_slot0;
                        var1.userIds = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var3 = var8.bind(var0)(var4, var3);
                var4 = _closure1_slot1;
                var3 = 13;
                var3 = var7[var3];
                var5 = var4.bind(var5)(var3);
                var4 = _closure1_slot9;
                var3 = var4.getId;
                var13 = var3.bind(var4)();
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var14 = var4;
                var12 = var6;
                var3 = new var14[var5](var13, var12, var11);
                var3 = var3 instanceof Object ? var3 : var4;
                _closure1_slot21 = var3;
                _closure1_slot19 = var1;
                var1 = false;
                _closure1_slot22 = var1;
                _closure1_slot23 = var1;
                return var0;
            case 656:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = 'Creating RTCConnection without session.';
                var14 = var1;
                var0 = new var14[var2](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot29 = var0;
    var0 = function() {
        _fun31099: for (var _fun31099_ip = 0;;) switch (_fun31099_ip) {
            case 0:
                var0 = _closure1_slot15;
                var1 = null;
                if (!(var1 != var0)) {
                    _fun31099_ip = 227;
                    continue _fun31099
                }
            case 16:
                var0 = {};
                var4 = _closure1_slot15;
                var3 = var4.getDuration;
                var3 = var3.bind(var4)();
                var0.duration = var3;
                var4 = _closure1_slot15;
                var3 = var4.getMediaSessionId;
                var4 = var3.bind(var4)();
                var5 = var1 != var4;
                var3 = null;
                if (!var5) {
                    _fun31099_ip = 62;
                    continue _fun31099
                }
            case 59:
                var3 = var4;
            case 62:
                var0.mediaSessionId = var3;
                var4 = _closure1_slot15;
                var3 = var4.getRTCConnectionId;
                var3 = var3.bind(var4)();
                var0.rtcConnectionId = var3;
                var3 = _closure1_slot22;
                var0.wasEverMultiParticipant = var3;
                var3 = _closure1_slot23;
                var0.wasEverRtcConnected = var3;
                var3 = _closure1_slot21;
                var0.voiceStateAnalytics = var3;
                var3 = _closure1_slot15;
                var3 = var3.channelId;
                var0.channelId = var3;
                _closure1_slot19 = var0;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 12;
                var3 = var3[var0];
                var0 = undefined;
                var5 = var4.bind(var0)(var3);
                var4 = var5.dispatch;
                var3 = {};
                var6 = 'MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET';
                var3.type = var6;
                var7 = _closure1_slot15;
                var6 = var7.getMediaEngineConnectionId;
                var6 = var6.bind(var7)();
                var3.mediaEngineConnectionId = var6;
                var3 = var4.bind(var5)(var3);
                var4 = _closure1_slot15;
                var3 = var4.destroy;
                var3 = var3.bind(var4)();
                var _closure1_slot15 = var1;
                _closure1_slot21 = var1;
                var1 = false;
                _closure1_slot25 = var1;
                return var0;
            case 227:
                var0 = false;
                return var0;
        }
    };
    var _closure1_slot30 = var0;
    var9 = function() {
        var0 = null;
        _closure1_slot18 = var0;
        var0 = undefined;
        return var0;
    };
    var6 = function arg0() {
        _fun31101: for (var _fun31101_ip = 0;;) switch (_fun31101_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.channel;
                var3 = _closure1_slot15;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun31101_ip = 51;
                    continue _fun31101
                }
            case 21:
                var2 = _closure1_slot15;
                var2 = var2.channelId;
                var1 = var1.id;
                if (!(var2 === var1)) {
                    _fun31101_ip = 51;
                    continue _fun31101
                }
            case 39:
                var1 = _closure1_slot30;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 51:
                var0 = false;
                return var0;
        }
    };
    var10 = function() {
        var0 = true;
        return var0;
    };
    var0 = global;
    var11 = var0.Object;
    var8 = var11.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var8.bind(var11)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var7.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var _closure1_slot10 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.RTCConnectionStates;
    var _closure1_slot11 = var8;
    var8 = var1.AppStates;
    var _closure1_slot12 = var8;
    var1 = var1.RTCConnectionQuality;
    var _closure1_slot13 = var1;
    var1 = 9;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.MediaEngineContextTypes;
    var _closure1_slot14 = var1;
    var1 = new Array(0);
    var _closure1_slot17 = var1;
    var1 = null;
    var _closure1_slot18 = var1;
    var _closure1_slot19 = var1;
    var _closure1_slot20 = var1;
    var _closure1_slot21 = var1;
    var8 = false;
    var _closure1_slot22 = var8;
    var _closure1_slot23 = var8;
    var _closure1_slot24 = var1;
    var _closure1_slot25 = var8;
    var _closure1_slot26 = var1;
    var1 = 15;
    var1 = var5[var1];
    var1 = var7.bind(var0)(var1);
    var8 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() {
            _fun31104: for (var _fun31104_ip = 0;;) switch (_fun31104_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot28;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun31104_ip = 69;
                        continue _fun31104
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun31104_ip = 105;
                    continue _fun31104;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() {
            var1 = this;
            var5 = var1.waitFor;
            var4 = _closure1_slot9;
            var3 = _closure1_slot8;
            var2 = _closure1_slot10;
            var2 = var5.bind(var1)(var4, var3, var2);
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var0 = 14;
            var2 = var2[var0];
            var0 = undefined;
            var4 = var3.bind(var0)(var2);
            var3 = var4.setVideoToggleAnalyticsParams;
            var2 = var1.getRTCConnectionId;
            var1 = var1.getMediaSessionId;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(33);
        var0[0] = var4;
        var4 = {};
        var6 = 'getRTCConnection';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot15;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() {
            _fun31107: for (var _fun31107_ip = 0;;) switch (_fun31107_ip) {
                case 0:
                    var2 = _closure1_slot15;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun31107_ip = 25;
                        continue _fun31107
                    }
                case 13:
                    var0 = _closure1_slot11;
                    var0 = var0.DISCONNECTED;
                    _fun31107_ip = 34;
                    continue _fun31107;
                case 25:
                    var1 = _closure1_slot15;
                    var0 = var1.state;
                case 34:
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isConnected';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.getState;
            var1 = var0.bind(var1)();
            var0 = _closure1_slot11;
            var0 = var0.RTC_CONNECTED;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'isDisconnected';
        var4.key = var6;
        var6 = function() {
            var1 = this;
            var0 = var1.getState;
            var1 = var0.bind(var1)();
            var0 = _closure1_slot11;
            var0 = var0.DISCONNECTED;
            var0 = var1 === var0;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'getRemoteDisconnectVoiceChannelId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot18;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getLastSessionVoiceChannelId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot20;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'setLastSessionVoiceChannelId';
        var4.key = var6;
        var6 = function arg0() {
            var0 = arg0;
            _closure1_slot20 = var0;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getGuildId';
        var4.key = var6;
        var6 = function() {
            _fun31113: for (var _fun31113_ip = 0;;) switch (_fun31113_ip) {
                case 0:
                    var1 = _closure1_slot15;
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun31113_ip = 23;
                        continue _fun31113
                    }
                case 18:
                    var0 = var1.guildId;
                case 23:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getChannelId';
        var4.key = var6;
        var6 = function() {
            _fun31114: for (var _fun31114_ip = 0;;) switch (_fun31114_ip) {
                case 0:
                    var1 = _closure1_slot15;
                    var0 = null;
                    var2 = var0 == var1;
                    var0 = undefined;
                    if (var2) {
                        _fun31114_ip = 23;
                        continue _fun31114
                    }
                case 18:
                    var0 = var1.channelId;
                case 23:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'getHostname';
        var4.key = var6;
        var6 = function() {
            _fun31115: for (var _fun31115_ip = 0;;) switch (_fun31115_ip) {
                case 0:
                    var2 = _closure1_slot15;
                    var0 = null;
                    var2 = var0 != var2;
                    var0 = '';
                    if (!var2) {
                        _fun31115_ip = 30;
                        continue _fun31115
                    }
                case 20:
                    var1 = _closure1_slot15;
                    var0 = var1.hostname;
                case 30:
                    return var0;
            }
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getQuality';
        var4.key = var6;
        var6 = function() {
            _fun31116: for (var _fun31116_ip = 0;;) switch (_fun31116_ip) {
                case 0:
                    var2 = _closure1_slot15;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun31116_ip = 25;
                        continue _fun31116
                    }
                case 13:
                    var0 = _closure1_slot13;
                    var0 = var0.UNKNOWN;
                    _fun31116_ip = 35;
                    continue _fun31116;
                case 25:
                    var1 = _closure1_slot15;
                    var0 = var1.quality;
                case 35:
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'getPings';
        var4.key = var6;
        var6 = function() {
            _fun31117: for (var _fun31117_ip = 0;;) switch (_fun31117_ip) {
                case 0:
                    var2 = _closure1_slot15;
                    var0 = null;
                    if (!(var0 == var2)) {
                        _fun31117_ip = 19;
                        continue _fun31117
                    }
                case 13:
                    var0 = _closure1_slot17;
                    _fun31117_ip = 33;
                    continue _fun31117;
                case 19:
                    var2 = _closure1_slot15;
                    var1 = var2.getPings;
                    var0 = var1.bind(var2)();
                case 33:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getAveragePing';
        var4.key = var6;
        var6 = function() {
            _fun31118: for (var _fun31118_ip = 0;;) switch (_fun31118_ip) {
                case 0:
                    var0 = _closure1_slot15;
                    var1 = null;
                    var3 = var1 != var0;
                    var0 = 0;
                    if (!var3) {
                        _fun31118_ip = 44;
                        continue _fun31118
                    }
                case 18:
                    var3 = _closure1_slot15;
                    var2 = var1 == var3;
                    var1 = undefined;
                    if (var2) {
                        _fun31118_ip = 41;
                        continue _fun31118
                    }
                case 31:
                    var2 = var3.getAveragePing;
                    var1 = var2.bind(var3)();
                case 41:
                    var0 = var1;
                case 44:
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'getLastPing';
        var4.key = var6;
        var6 = function() {
            _fun31119: for (var _fun31119_ip = 0;;) switch (_fun31119_ip) {
                case 0:
                    var2 = _closure1_slot15;
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun31119_ip = 28;
                        continue _fun31119
                    }
                case 18:
                    var1 = var2.getLastPing;
                    var0 = var1.bind(var2)();
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getOutboundLossRate';
        var4.key = var6;
        var6 = function() {
            _fun31120: for (var _fun31120_ip = 0;;) switch (_fun31120_ip) {
                case 0:
                    var2 = _closure1_slot15;
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun31120_ip = 28;
                        continue _fun31120
                    }
                case 18:
                    var1 = var2.getOutboundLossRate;
                    var0 = var1.bind(var2)();
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'getMediaSessionId';
        var4.key = var6;
        var6 = function() {
            _fun31121: for (var _fun31121_ip = 0;;) switch (_fun31121_ip) {
                case 0:
                    var2 = _closure1_slot15;
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun31121_ip = 28;
                        continue _fun31121
                    }
                case 18:
                    var1 = var2.getMediaSessionId;
                    var0 = var1.bind(var2)();
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'getRTCConnectionId';
        var4.key = var6;
        var6 = function() {
            _fun31122: for (var _fun31122_ip = 0;;) switch (_fun31122_ip) {
                case 0:
                    var2 = _closure1_slot15;
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun31122_ip = 28;
                        continue _fun31122
                    }
                case 18:
                    var1 = var2.getRTCConnectionId;
                    var0 = var1.bind(var2)();
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getDuration';
        var4.key = var6;
        var6 = function() {
            _fun31123: for (var _fun31123_ip = 0;;) switch (_fun31123_ip) {
                case 0:
                    var5 = _closure1_slot15;
                    var3 = null;
                    var4 = var3 == var5;
                    var0 = undefined;
                    if (var4) {
                        _fun31123_ip = 28;
                        continue _fun31123
                    }
                case 18:
                    var4 = var5.getDuration;
                    var0 = var4.bind(var5)();
                case 28:
                    if (!(var3 == var0)) {
                        _fun31123_ip = 53;
                        continue _fun31123
                    }
                case 32:
                    var2 = _closure1_slot19;
                    var3 = var3 == var2;
                    var1 = undefined;
                    if (var3) {
                        _fun31123_ip = 50;
                        continue _fun31123
                    }
                case 45:
                    var1 = var2.duration;
                case 50:
                    var0 = var1;
                case 53:
                    return var0;
            }
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getLastRTCConnectionState';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot19;
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getVoiceFilterSpeakingDurationMs';
        var4.key = var6;
        var6 = function() {
            _fun31125: for (var _fun31125_ip = 0;;) switch (_fun31125_ip) {
                case 0:
                    var2 = _closure1_slot15;
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun31125_ip = 28;
                        continue _fun31125
                    }
                case 18:
                    var1 = var2.getVoiceFilterSpeakingDurationMs;
                    var0 = var1.bind(var2)();
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'getPacketStats';
        var4.key = var6;
        var6 = function() {
            _fun31126: for (var _fun31126_ip = 0;;) switch (_fun31126_ip) {
                case 0:
                    var2 = _closure1_slot15;
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun31126_ip = 28;
                        continue _fun31126
                    }
                case 18:
                    var1 = var2.getPacketStats;
                    var0 = var1.bind(var2)();
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'getVoiceStateStats';
        var4.key = var6;
        var6 = function() {
            _fun31127: for (var _fun31127_ip = 0;;) switch (_fun31127_ip) {
                case 0:
                    var2 = _closure1_slot21;
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun31127_ip = 28;
                        continue _fun31127
                    }
                case 18:
                    var1 = var2.getStats;
                    var0 = var1.bind(var2)();
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'getUserVoiceSettingsStats';
        var4.key = var6;
        var6 = function arg0() {
            _fun31128: for (var _fun31128_ip = 0;;) switch (_fun31128_ip) {
                case 0:
                    var3 = _closure1_slot21;
                    var0 = null;
                    var1 = var0 == var3;
                    var0 = undefined;
                    if (var1) {
                        _fun31128_ip = 32;
                        continue _fun31128
                    }
                case 18:
                    var2 = var3.getUserVoiceSettingsStats;
                    var1 = arg0;
                    var0 = var2.bind(var3)(var1);
                case 32:
                    return var0;
            }
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'getWasEverMultiParticipant';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot22;
            return var0;
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'getWasEverRtcConnected';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot23;
            return var0;
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'getUserIds';
        var4.key = var6;
        var6 = function() {
            _fun31131: for (var _fun31131_ip = 0;;) switch (_fun31131_ip) {
                case 0:
                    var2 = _closure1_slot15;
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun31131_ip = 28;
                        continue _fun31131
                    }
                case 18:
                    var1 = var2.getUserIds;
                    var0 = var1.bind(var2)();
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'getJoinVoiceId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot26;
            return var0;
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'isUserConnected';
        var4.key = var6;
        var6 = function arg0() {
            _fun31133: for (var _fun31133_ip = 0;;) switch (_fun31133_ip) {
                case 0:
                    var3 = _closure1_slot15;
                    var0 = null;
                    var1 = var0 == var3;
                    var0 = undefined;
                    if (var1) {
                        _fun31133_ip = 32;
                        continue _fun31133
                    }
                case 18:
                    var2 = var3.getIsUserConnected;
                    var1 = arg0;
                    var0 = var2.bind(var3)(var1);
                case 32:
                    return var0;
            }
        };
        var4.value = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'getSecureFramesState';
        var4.key = var6;
        var6 = function() {
            _fun31134: for (var _fun31134_ip = 0;;) switch (_fun31134_ip) {
                case 0:
                    var2 = _closure1_slot15;
                    var0 = null;
                    var1 = var0 == var2;
                    var0 = undefined;
                    if (var1) {
                        _fun31134_ip = 28;
                        continue _fun31134
                    }
                case 18:
                    var1 = var2.getSecureFramesState;
                    var0 = var1.bind(var2)();
                case 28:
                    return var0;
            }
        };
        var4.value = var6;
        var0[29] = var4;
        var4 = {};
        var6 = 'getSecureFramesRosterMapEntry';
        var4.key = var6;
        var6 = function arg0() {
            _fun31135: for (var _fun31135_ip = 0;;) switch (_fun31135_ip) {
                case 0:
                    var4 = _closure1_slot15;
                    var1 = null;
                    var2 = var1 == var4;
                    var3 = undefined;
                    if (var2) {
                        _fun31135_ip = 28;
                        continue _fun31135
                    }
                case 18:
                    var2 = var4.getSecureFramesRosterMap;
                    var3 = var2.bind(var4)();
                case 28:
                    var1 = var1 == var3;
                    var0 = undefined;
                    if (var1) {
                        _fun31135_ip = 50;
                        continue _fun31135
                    }
                case 37:
                    var2 = var3.get;
                    var1 = arg0;
                    var0 = var2.bind(var3)(var1);
                case 50:
                    return var0;
            }
        };
        var4.value = var6;
        var0[30] = var4;
        var4 = {};
        var6 = 'getLastNonZeroRemoteVideoSinkWantsTime';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot24;
            return var0;
        };
        var4.value = var6;
        var0[31] = var4;
        var4 = {};
        var6 = 'getWasMoved';
        var4.key = var6;
        var5 = function() {
            var0 = _closure1_slot25;
            return var0;
        };
        var4.value = var5;
        var0[32] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var8);
    var1 = 'RTCConnectionStore';
    var8.displayName = var1;
    var1 = 12;
    var1 = var5[var1];
    var14 = var7.bind(var0)(var1);
    var1 = {};
    var11 = function arg0() {
        var0 = arg0;
        var1 = var0.sessionId;
        var _closure1_slot16 = var1;
        var1 = null;
        _closure1_slot18 = var1;
        _closure1_slot20 = var1;
        var1 = _closure1_slot30;
        var0 = undefined;
        var0 = var1.bind(var0)();
        var0 = false;
        return var0;
    };
    var1.CONNECTION_OPEN = var11;
    var11 = function() {
        var1 = null;
        _closure1_slot16 = var1;
        _closure1_slot18 = var1;
        _closure1_slot20 = var1;
        var1 = _closure1_slot30;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.CONNECTION_CLOSED = var11;
    var11 = function arg0() {
        _fun31140: for (var _fun31140_ip = 0;;) switch (_fun31140_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.state;
                var0 = _closure1_slot11;
                var0 = var0.RTC_CONNECTED;
                if (!(var2 === var0)) {
                    _fun31140_ip = 31;
                    continue _fun31140
                }
            case 25:
                var0 = true;
                _closure1_slot23 = var0;
            case 31:
                var0 = true;
                return var0;
        }
    };
    var1.RTC_CONNECTION_STATE = var11;
    var1.RTC_CONNECTION_PING = var10;
    var1.RTC_CONNECTION_LOSS_RATE = var10;
    var11 = function arg0() {
        var0 = arg0;
        var1 = var0.connection;
        var0 = _closure1_slot15;
        var0 = var1 === var0;
        return var0;
    };
    var1.RTC_CONNECTION_UPDATE_ID = var11;
    var1.RTC_CONNECTION_SECURE_FRAMES_UPDATE = var10;
    var1.RTC_CONNECTION_CLIENT_CONNECT = var10;
    var1.RTC_CONNECTION_CLIENT_DISCONNECT = var10;
    var10 = function arg0() {
        _fun31142: for (var _fun31142_ip = 0;;) switch (_fun31142_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.context;
                var5 = var0.wants;
                var0 = _closure1_slot14;
                var0 = var0.DEFAULT;
                var0 = var1 === var0;
                if (!var0) {
                    _fun31142_ip = 104;
                    continue _fun31142
                }
            case 34:
                var2 = global;
                var4 = var2.Object;
                var1 = var4.entries;
                var5 = var1.bind(var4)(var5);
                var4 = var5.some;
                var1 = function(arg0) { // Environment: var1
                    _fun31143: for (var _fun31143_ip = 0;;) switch (_fun31143_ip) {
                        case 0:
                            var4 = arg0;
                            var0 = var4[Symbol.iterator];
                            var4 = var0().next;
                            var2 = var4().value;
                            var1 = var0;
                            var6 = undefined;
                            var3 = var1 === var6;
                            var1 = undefined;
                            if (var3) {
                                _fun31143_ip = 27;
                                continue _fun31143
                            }
                        case 24:
                            var1 = var2;
                        case 27:
                            var2 = undefined;
                            if (var3) {
                                _fun31143_ip = 57;
                                continue _fun31143
                            }
                        case 32:
                            var5 = var4().value;
                            var4 = var0;
                            var4 = var4 === var6;
                            var2 = undefined;
                            var3 = var4;
                            if (var4) {
                                _fun31143_ip = 57;
                                continue _fun31143
                            }
                        case 51:
                            var2 = var5;
                            var3 = var4;
                        case 57:
                            if (var3) {
                                _fun31143_ip = 63;
                                continue _fun31143
                            }
                        case 60:
                            var0.return();
                        case 63:
                            var0 = 'any';
                            var0 = var0 !== var1;
                            if (!var0) {
                                _fun31143_ip = 80;
                                continue _fun31143
                            }
                        case 74:
                            var1 = 0;
                            var0 = var1 !== var2;
                        case 80:
                            return var0;
                    }
                };
                var1 = var4.bind(var5)(var1);
                var4 = !var1;
                var1 = !var4;
                if (var4) {
                    _fun31142_ip = 101;
                    continue _fun31142
                }
            case 80:
                var4 = var2.performance;
                var2 = var4.now;
                var2 = var2.bind(var4)();
                _closure1_slot24 = var2;
                var1 = undefined;
            case 101:
                var0 = var1;
            case 104:
                return var0;
        }
    };
    var1.RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS = var10;
    var10 = function arg0() {
        _fun31144: for (var _fun31144_ip = 0;;) switch (_fun31144_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.streamId;
                var3 = var0.dimensions;
                var2 = var0.zoom;
                var1 = _closure1_slot15;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun31144_ip = 47;
                    continue _fun31144
                }
            case 34:
                var0 = var1.setVideoSize;
                var0 = var0.bind(var1)(var4, var3, var2);
            case 47:
                var0 = undefined;
                return var0;
        }
    };
    var1.VIDEO_SIZE_UPDATE = var10;
    var10 = function arg0() {
        var0 = arg0;
        var3 = var0.voiceStates;
        var2 = var3.reduce;
        var1 = function(arg0, arg1) { // Environment: var0
            _fun31146: for (var _fun31146_ip = 0;;) switch (_fun31146_ip) {
                case 0:
                    var0 = arg0;
                    var3 = arg1;
                    var7 = _closure1_slot21;
                    var2 = null;
                    if (!(var2 != var7)) {
                        _fun31146_ip = 43;
                        continue _fun31146
                    }
                case 19:
                    var6 = var7.updateVoiceStates;
                    var5 = var3.userId;
                    var4 = var3.channelId;
                    var4 = var6.bind(var7)(var5, var4);
                case 43:
                    var4 = _closure1_slot22;
                    if (var4) {
                        _fun31146_ip = 98;
                        continue _fun31146
                    }
                case 50:
                    var7 = _closure1_slot21;
                    var6 = var2 == var7;
                    var5 = undefined;
                    if (var6) {
                        _fun31146_ip = 79;
                        continue _fun31146
                    }
                case 63:
                    var6 = var7.getStats;
                    var6 = var6.bind(var7)();
                    var5 = var6.max_voice_state_count;
                case 79:
                    var7 = var2 != var5;
                    var6 = 0;
                    if (!var7) {
                        _fun31146_ip = 91;
                        continue _fun31146
                    }
                case 88:
                    var6 = var5;
                case 91:
                    var5 = 1;
                    var4 = var6 > var5;
                case 98:
                    _closure1_slot22 = var4;
                    var5 = _closure1_slot9;
                    var4 = var5.getId;
                    var5 = var4.bind(var5)();
                    var4 = var3.userId;
                    if (!(var5 === var4)) {
                        _fun31146_ip = 629;
                        continue _fun31146
                    }
                case 128:
                    var4 = _closure1_slot15;
                    if (!(var2 == var4)) {
                        _fun31146_ip = 250;
                        continue _fun31146
                    }
                case 136:
                    var5 = var3.sessionId;
                    var4 = _closure1_slot16;
                    if (!(var5 === var4)) {
                        _fun31146_ip = 248;
                        continue _fun31146
                    }
                case 150:
                    var4 = var3.channelId;
                    if (!(var2 != var4)) {
                        _fun31146_ip = 248;
                        continue _fun31146
                    }
                case 159:
                    _closure1_slot18 = var2;
                    _closure1_slot20 = var2;
                    var7 = _closure1_slot29;
                    var6 = var3.guildId;
                    var5 = var3.channelId;
                    var4 = undefined;
                    var5 = var7.bind(var4)(var6, var5);
                    _closure1_slot15 = var5;
                    var6 = _closure1_slot21;
                    var5 = var2 == var6;
                    if (var5) {
                        _fun31146_ip = 220;
                        continue _fun31146
                    }
                case 204:
                    var5 = var6.getStats;
                    var5 = var5.bind(var6)();
                    var4 = var5.max_voice_state_count;
                case 220:
                    var6 = var2 != var4;
                    var5 = 0;
                    if (!var6) {
                        _fun31146_ip = 232;
                        continue _fun31146
                    }
                case 229:
                    var5 = var4;
                case 232:
                    var4 = 1;
                    var4 = var5 > var4;
                    _closure1_slot22 = var4;
                    _fun31146_ip = 625;
                    continue _fun31146;
                case 248:
                    return var0;
                case 250:
                    var5 = var3.sessionId;
                    var4 = _closure1_slot16;
                    if (!(var5 !== var4)) {
                        _fun31146_ip = 355;
                        continue _fun31146
                    }
                case 264:
                    var5 = var3.guildId;
                    var4 = _closure1_slot15;
                    var4 = var4.guildId;
                    if (!(var5 === var4)) {
                        _fun31146_ip = 625;
                        continue _fun31146
                    }
                case 285:
                    var5 = _closure1_slot8;
                    var4 = var5.getAwaitingRemoteSessionInfo;
                    var4 = var4.bind(var5)();
                    var4 = var2 != var4;
                    if (!var4) {
                        _fun31146_ip = 324;
                        continue _fun31146
                    }
                case 306:
                    var6 = _closure1_slot8;
                    var5 = var6.getRemoteSessionId;
                    var5 = var5.bind(var6)();
                    var4 = var2 != var5;
                case 324:
                    if (var4) {
                        _fun31146_ip = 340;
                        continue _fun31146
                    }
                case 327:
                    var4 = _closure1_slot15;
                    var4 = var4.channelId;
                    _closure1_slot18 = var4;
                case 340:
                    var5 = _closure1_slot30;
                    var4 = undefined;
                    var4 = var5.bind(var4)();
                    _fun31146_ip = 625;
                    continue _fun31146;
                case 355:
                    var4 = var3.guildId;
                    if (!(var2 != var4)) {
                        _fun31146_ip = 385;
                        continue _fun31146
                    }
                case 364:
                    var5 = var3.guildId;
                    var4 = _closure1_slot15;
                    var4 = var4.guildId;
                    if (!(var5 !== var4)) {
                        _fun31146_ip = 556;
                        continue _fun31146
                    }
                case 385:
                    var4 = var3.guildId;
                    if (!(var2 == var4)) {
                        _fun31146_ip = 415;
                        continue _fun31146
                    }
                case 394:
                    var5 = var3.channelId;
                    var4 = _closure1_slot15;
                    var4 = var4.channelId;
                    if (!(var5 !== var4)) {
                        _fun31146_ip = 556;
                        continue _fun31146
                    }
                case 415:
                    var5 = var3.guildId;
                    var4 = _closure1_slot15;
                    var4 = var4.guildId;
                    var4 = var5 !== var4;
                    if (!var4) {
                        _fun31146_ip = 445;
                        continue _fun31146
                    }
                case 436:
                    var5 = var3.channelId;
                    var4 = var2 == var5;
                case 445:
                    if (var4) {
                        _fun31146_ip = 458;
                        continue _fun31146
                    }
                case 448:
                    var5 = _closure1_slot30;
                    var4 = undefined;
                    var4 = var5.bind(var4)();
                case 458:
                    var4 = var3.channelId;
                    if (!(var2 != var4)) {
                        _fun31146_ip = 625;
                        continue _fun31146
                    }
                case 470:
                    _closure1_slot18 = var2;
                    _closure1_slot20 = var2;
                    var7 = _closure1_slot29;
                    var6 = var3.guildId;
                    var5 = var3.channelId;
                    var4 = undefined;
                    var5 = var7.bind(var4)(var6, var5);
                    _closure1_slot15 = var5;
                    var6 = _closure1_slot21;
                    var5 = var2 == var6;
                    if (var5) {
                        _fun31146_ip = 531;
                        continue _fun31146
                    }
                case 515:
                    var5 = var6.getStats;
                    var5 = var5.bind(var6)();
                    var4 = var5.max_voice_state_count;
                case 531:
                    var6 = var2 != var4;
                    var5 = 0;
                    if (!var6) {
                        _fun31146_ip = 543;
                        continue _fun31146
                    }
                case 540:
                    var5 = var4;
                case 543:
                    var4 = 1;
                    var4 = var5 > var4;
                    _closure1_slot22 = var4;
                    _fun31146_ip = 625;
                    continue _fun31146;
                case 556:
                    var4 = var3.channelId;
                    if (!(var2 != var4)) {
                        _fun31146_ip = 615;
                        continue _fun31146
                    }
                case 565:
                    var5 = _closure1_slot15;
                    var4 = var5.setNextChannelId;
                    var3 = var3.channelId;
                    var3 = var4.bind(var5)(var3);
                    var3 = true;
                    _closure1_slot25 = var3;
                    _closure1_slot26 = var2;
                    var3 = _closure1_slot15;
                    var2 = var3.clearJoinVoiceId;
                    var2 = var2.bind(var3)();
                    _fun31146_ip = 625;
                    continue _fun31146;
                case 615:
                    var2 = _closure1_slot30;
                    var1 = undefined;
                    var1 = var2.bind(var1)();
                case 625:
                    var1 = true;
                    return var1;
                case 629:
                    return var0;
            }
        };
        var0 = false;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.VOICE_STATE_UPDATES = var10;
    var10 = function arg0() {
        _fun31147: for (var _fun31147_ip = 0;;) switch (_fun31147_ip) {
            case 0:
                var0 = arg0;
                var5 = var0.channelId;
                var1 = var0.joinVoiceId;
                var2 = _closure1_slot15;
                var3 = null;
                var2 = var3 == var2;
                if (var2) {
                    _fun31147_ip = 53;
                    continue _fun31147
                }
            case 30:
                var3 = var3 != var5;
                if (!var3) {
                    _fun31147_ip = 50;
                    continue _fun31147
                }
            case 37:
                var4 = _closure1_slot15;
                var4 = var4.channelId;
                var3 = var4 === var5;
            case 50:
                var2 = var3;
            case 53:
                if (var2) {
                    _fun31147_ip = 66;
                    continue _fun31147
                }
            case 56:
                var3 = _closure1_slot30;
                var2 = undefined;
                var2 = var3.bind(var2)();
            case 66:
                _closure1_slot26 = var1;
                var0 = undefined;
                return var0;
        }
    };
    var1.VOICE_CHANNEL_SELECT = var10;
    var10 = function arg0() {
        _fun31148: for (var _fun31148_ip = 0;;) switch (_fun31148_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = null;
                if (!(var0 != var2)) {
                    _fun31148_ip = 32;
                    continue _fun31148
                }
            case 13:
                var1 = var2.setNoiseCancellationEnabled;
                var0 = arg0;
                var0 = var0.enabled;
                var0 = var1.bind(var2)(var0);
            case 32:
                var0 = undefined;
                return var0;
        }
    };
    var1.AUDIO_SET_NOISE_CANCELLATION = var10;
    var10 = function arg0() {
        _fun31149: for (var _fun31149_ip = 0;;) switch (_fun31149_ip) {
            case 0:
                var3 = arg0;
                var0 = _closure1_slot15;
                var5 = null;
                var0 = var5 != var0;
                if (!var0) {
                    _fun31149_ip = 128;
                    continue _fun31149
                }
            case 19:
                var1 = var3.guildId;
                var1 = var5 == var1;
                if (var1) {
                    _fun31149_ip = 49;
                    continue _fun31149
                }
            case 31:
                var6 = var3.guildId;
                var2 = _closure1_slot15;
                var2 = var2.guildId;
                var1 = var6 === var2;
            case 49:
                if (!var1) {
                    _fun31149_ip = 125;
                    continue _fun31149
                }
            case 52:
                var2 = var3.channelId;
                var2 = var5 == var2;
                if (var2) {
                    _fun31149_ip = 89;
                    continue _fun31149
                }
            case 64:
                var6 = var3.channelId;
                var7 = _closure1_slot15;
                var5 = var7.getNextChannelId;
                var5 = var5.bind(var7)();
                var2 = var6 === var5;
            case 89:
                if (!var2) {
                    _fun31149_ip = 122;
                    continue _fun31149
                }
            case 92:
                var6 = _closure1_slot15;
                var5 = var6.connect;
                var4 = var3.endpoint;
                var3 = var3.token;
                var3 = var5.bind(var6)(var4, var3);
                var2 = undefined;
            case 122:
                var1 = var2;
            case 125:
                var0 = var1;
            case 128:
                return var0;
        }
    };
    var1.VOICE_SERVER_UPDATE = var10;
    var1.CLEAR_REMOTE_DISCONNECT_VOICE_CHANNEL_ID = var9;
    var1.REMOTE_SESSION_CONNECT = var9;
    var9 = function() {
        var0 = null;
        _closure1_slot20 = var0;
        var0 = undefined;
        return var0;
    };
    var1.CLEAR_LAST_SESSION_VOICE_CHANNEL_ID = var9;
    var9 = function arg0() {
        _fun31151: for (var _fun31151_ip = 0;;) switch (_fun31151_ip) {
            case 0:
                var0 = arg0;
                var1 = var0.guild;
                var3 = _closure1_slot15;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun31151_ip = 51;
                    continue _fun31151
                }
            case 21:
                var2 = _closure1_slot15;
                var2 = var2.guildId;
                var1 = var1.id;
                if (!(var2 === var1)) {
                    _fun31151_ip = 51;
                    continue _fun31151
                }
            case 39:
                var1 = _closure1_slot30;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 51:
                var0 = false;
                return var0;
        }
    };
    var1.GUILD_DELETE = var9;
    var1.CHANNEL_DELETE = var6;
    var1.THREAD_DELETE = var6;
    var6 = function arg0() {
        _fun31152: for (var _fun31152_ip = 0;;) switch (_fun31152_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.channelId;
                var3 = _closure1_slot15;
                var1 = null;
                if (!(var1 != var3)) {
                    _fun31152_ip = 46;
                    continue _fun31152
                }
            case 21:
                var1 = _closure1_slot15;
                var1 = var1.channelId;
                if (!(var1 === var2)) {
                    _fun31152_ip = 46;
                    continue _fun31152
                }
            case 34:
                var1 = _closure1_slot30;
                var0 = undefined;
                var1 = var1.bind(var0)();
                return var0;
            case 46:
                var0 = false;
                return var0;
        }
    };
    var1.CALL_DELETE = var6;
    var6 = function arg0() {
        _fun31153: for (var _fun31153_ip = 0;;) switch (_fun31153_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.state;
                var1 = _closure1_slot12;
                var1 = var1.ACTIVE;
                var1 = var2 === var1;
                if (!var1) {
                    _fun31153_ip = 38;
                    continue _fun31153
                }
            case 28:
                var3 = _closure1_slot15;
                var2 = null;
                var1 = var2 != var3;
            case 38:
                if (!var1) {
                    _fun31153_ip = 62;
                    continue _fun31153
                }
            case 41:
                var2 = _closure1_slot15;
                var1 = var2.resetBackoff;
                var0 = 'App state is active';
                var0 = var1.bind(var2)(var0);
            case 62:
                var0 = false;
                return var0;
        }
    };
    var1.APP_STATE_UPDATE = var6;
    var6 = function arg0() {
        _fun31154: for (var _fun31154_ip = 0;;) switch (_fun31154_ip) {
            case 0:
                var0 = arg0;
                var4 = var0.userId;
                var3 = var0.context;
                var2 = var0.quality;
                var1 = _closure1_slot15;
                var0 = null;
                if (!(var0 != var1)) {
                    _fun31154_ip = 45;
                    continue _fun31154
                }
            case 32:
                var0 = var1.setSimulcastDebugOverride;
                var0 = var0.bind(var1)(var4, var3, var2);
            case 45:
                var0 = undefined;
                return var0;
        }
    };
    var1.RTC_DEBUG_SET_SIMULCAST_OVERRIDE = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var15 = var6;
    var13 = var1;
    var1 = new var15[var8](var14, var13, var12);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot27 = var1;
    var6 = 17;
    var6 = var5[var6];
    var8 = var4.bind(var0)(var6);
    var6 = 16;
    var7 = var5[var6];
    var6 = var5.paths;
    var7 = var8.bind(var0)(var7, var6);
    var6 = var7.then;
    var3 = function(arg0) { // Environment: var3
        var0 = arg0;
        var2 = var0.addExtraAnalyticsDecorator;
        var0 = undefined;
        var1 = function(arg0) { // Environment: var1
            var1 = _closure1_slot27;
            var0 = var1.getState;
            var1 = var0.bind(var1)();
            var0 = arg0;
            var0.client_rtc_state = var1;
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var0)(var1);
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'stores/RTCConnectionStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3519, 1216, 3526, 660, 3510, 3527, 3632, 806, 12273, 12274, 566, 795, 1307, 2]);