// components_common/SoundPlayer.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function arg0, arg1, arg2, arg3() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = arg1;
        var _closure2_slot1 = var1;
        var1 = arg2;
        var _closure2_slot2 = var1;
        var1 = arg3;
        var _closure2_slot3 = var1;
        var2 = _closure1_slot2;
        var1 = var2.useEffect;
        var0 = function() { // Environment: var0
            var2 = _closure2_slot1;
            var4 = undefined;
            var2 = var2.bind(var4)();
            var _closure3_slot0 = var2;
            var3 = _closure1_slot0;
            var5 = _closure1_slot1;
            var2 = 19;
            var2 = var5[var2];
            var2 = var3.bind(var4)(var2);
            var4 = var2.BatchedStoreListener;
            var7 = _closure2_slot0;
            var1 = var4.prototype;
            var2 = Object.create(var1, {
                constructor: {
                    value: var4
                }
            });
            var6 = function() { // Environment: var0
                _fun109775: for (var _fun109775_ip = 0;;) switch (_fun109775_ip) {
                    case 0:
                        var1 = _closure2_slot1;
                        var0 = undefined;
                        var2 = var1.bind(var0)();
                        var4 = _closure2_slot2;
                        var3 = _closure3_slot0;
                        var6 = var4.bind(var0)(var3, var2);
                        var8 = null;
                        var3 = var8 == var6;
                        if (var3) {
                            _fun109775_ip = 57;
                            continue _fun109775
                        }
                    case 39:
                        var5 = _closure1_slot14;
                        var4 = var5.isSoundDisabled;
                        var3 = var4.bind(var5)(var6);
                    case 57:
                        if (var3) {
                            _fun109775_ip = 120;
                            continue _fun109775
                        }
                    case 60:
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var3 = 20;
                        var3 = var5[var3];
                        var5 = var4.bind(var0)(var3);
                        var4 = var5.playSound;
                        var3 = _closure2_slot3;
                        var8 = var8 != var3;
                        var3 = 0.4;
                        if (!var8) {
                            _fun109775_ip = 114;
                            continue _fun109775
                        }
                    case 110:
                        var3 = _closure2_slot3;
                    case 114:
                        var3 = var4.bind(var5)(var6, var3);
                    case 120:
                        _closure3_slot0 = var2;
                        return var0;
                }
            };
            var8 = var2;
            var1 = new var8[var4](var7, var6, var5);
            var3 = var1 instanceof Object ? var1 : var2;
            var _closure3_slot1 = var3;
            var2 = var3.attach;
            var1 = 'useSound';
            var1 = var2.bind(var3)(var1);
            var0 = function() { // Environment: var0
                var1 = _closure3_slot1;
                var0 = var1.detach;
                var0 = var0.bind(var1)();
                return var0;
            };
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var _closure1_slot26 = var0;
    var0 = function() {
        var4 = _closure1_slot26;
        var2 = _closure1_slot13;
        var3 = new Array(2);
        var3[0] = var2;
        var1 = _closure1_slot16;
        var3[1] = var1;
        var2 = undefined;
        var1 = function() { // Environment: var0
            var0 = {};
            var3 = _closure1_slot16;
            var2 = var3.getVoiceChannelId;
            var3 = var2.bind(var3)();
            var2 = null;
            var2 = var2 != var3;
            var0.inVoiceChannel = var2;
            var3 = _closure1_slot13;
            var2 = var3.isSelfMute;
            var2 = var2.bind(var3)();
            var0.selfMute = var2;
            var3 = _closure1_slot13;
            var2 = var3.isSelfDeaf;
            var2 = var2.bind(var3)();
            var0.selfDeaf = var2;
            var3 = _closure1_slot13;
            var2 = var3.isNativeAudioPermissionReady;
            var2 = var2.bind(var3)();
            var0.audioPermissionReady = var2;
            var2 = _closure1_slot13;
            var1 = var2.shouldSkipMuteUnmuteSound;
            var1 = var1.bind(var2)();
            var0.shouldSkipMuteUnmuteSound = var1;
            return var0;
        };
        var0 = function(arg0, arg1) { // Environment: var0
            _fun109779: for (var _fun109779_ip = 0;;) switch (_fun109779_ip) {
                case 0:
                    var0 = arg0;
                    var2 = arg1;
                    var4 = var2.inVoiceChannel;
                    var3 = var2.selfMute;
                    var1 = var2.selfDeaf;
                    var5 = var2.audioPermissionReady;
                    var2 = var2.shouldSkipMuteUnmuteSound;
                    if (!var4) {
                        _fun109779_ip = 64;
                        continue _fun109779
                    }
                case 39:
                    var6 = var0.selfDeaf;
                    if (!(var6 === var1)) {
                        _fun109779_ip = 122;
                        continue _fun109779
                    }
                case 49:
                    if (!var5) {
                        _fun109779_ip = 64;
                        continue _fun109779
                    }
                case 52:
                    if (var4) {
                        _fun109779_ip = 68;
                        continue _fun109779
                    }
                case 55:
                    var4 = var0.audioPermissionReady;
                    if (var4) {
                        _fun109779_ip = 68;
                        continue _fun109779
                    }
                case 64:
                    var4 = undefined;
                    return var4;
                case 68:
                    var4 = var0.selfMute;
                    var0 = undefined;
                    if (!(var4 !== var3)) {
                        _fun109779_ip = 120;
                        continue _fun109779
                    }
                case 80:
                    if (var2) {
                        _fun109779_ip = 96;
                        continue _fun109779
                    }
                case 83:
                    var2 = 'unmute';
                    if (!var3) {
                        _fun109779_ip = 94;
                        continue _fun109779
                    }
                case 90:
                    var2 = 'mute';
                case 94:
                    _fun109779_ip = 117;
                    continue _fun109779;
                case 96:
                    var4 = _closure1_slot13;
                    var3 = var4.notifyMuteUnmuteSoundWasSkipped;
                    var3 = var3.bind(var4)();
                    var2 = undefined;
                case 117:
                    var0 = var2;
                case 120:
                    return var0;
                case 122:
                    var0 = 'undeafen';
                    if (!var1) {
                        _fun109779_ip = 133;
                        continue _fun109779
                    }
                case 129:
                    var0 = 'deafen';
                case 133:
                    return var0;
            }
        };
        var0 = var4.bind(var2)(var3, var1, var0);
        var0 = null;
        return var0;
    };
    var _closure1_slot27 = var0;
    var0 = function() {
        var4 = _closure1_slot26;
        var2 = _closure1_slot13;
        var3 = new Array(2);
        var3[0] = var2;
        var1 = _closure1_slot16;
        var3[1] = var1;
        var2 = undefined;
        var1 = function() { // Environment: var0
            var0 = {};
            var3 = _closure1_slot13;
            var2 = var3.isVideoEnabled;
            var2 = var2.bind(var3)();
            var0.videoEnabled = var2;
            var2 = _closure1_slot16;
            var1 = var2.getVoiceChannelId;
            var2 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var2;
            var0.inVoiceChannel = var1;
            return var0;
        };
        var0 = function(arg0, arg1) { // Environment: var0
            _fun109782: for (var _fun109782_ip = 0;;) switch (_fun109782_ip) {
                case 0:
                    var0 = arg0;
                    var1 = arg1;
                    var2 = var1.videoEnabled;
                    var1 = var1.inVoiceChannel;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var3 = 21;
                    var4 = var4[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = var5.isCameraToggleSoundEnabled;
                    var4 = var4.bind(var5)();
                    if (var4) {
                        _fun109782_ip = 58;
                        continue _fun109782
                    }
                case 56:
                    return var3;
                case 58:
                    var5 = var0.videoEnabled;
                    var4 = var0.inVoiceChannel;
                    var0 = undefined;
                    if (!(var5 !== var2)) {
                        _fun109782_ip = 100;
                        continue _fun109782
                    }
                case 76:
                    var0 = undefined;
                    if (!var4) {
                        _fun109782_ip = 100;
                        continue _fun109782
                    }
                case 81:
                    var0 = undefined;
                    if (!var1) {
                        _fun109782_ip = 100;
                        continue _fun109782
                    }
                case 86:
                    var1 = 'camera_off';
                    if (!var2) {
                        _fun109782_ip = 97;
                        continue _fun109782
                    }
                case 93:
                    var1 = 'camera_on';
                case 97:
                    var0 = var1;
                case 100:
                    return var0;
            }
        };
        var0 = var4.bind(var2)(var3, var1, var0);
        var0 = null;
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = function() {
        var4 = _closure1_slot26;
        var2 = _closure1_slot11;
        var3 = new Array(4);
        var3[0] = var2;
        var2 = _closure1_slot15;
        var3[1] = var2;
        var2 = _closure1_slot16;
        var3[2] = var2;
        var1 = _closure1_slot6;
        var3[3] = var1;
        var2 = undefined;
        var1 = function() { // Environment: var0
            _fun109784: for (var _fun109784_ip = 0;;) switch (_fun109784_ip) {
                case 0:
                    var3 = _closure1_slot11;
                    var2 = var3.getChannel;
                    var4 = _closure1_slot16;
                    var0 = var4.getVoiceChannelId;
                    var0 = var0.bind(var4)();
                    var3 = var2.bind(var3)(var0);
                    var2 = null;
                    var0 = var2 == var3;
                    var6 = undefined;
                    if (var0) {
                        _fun109784_ip = 47;
                        continue _fun109784
                    }
                case 42:
                    var6 = var3.type;
                case 47:
                    var0 = var2 == var3;
                    var4 = undefined;
                    if (var0) {
                        _fun109784_ip = 66;
                        continue _fun109784
                    }
                case 56:
                    var0 = var3.getGuildId;
                    var4 = var0.bind(var3)();
                case 66:
                    var3 = _closure1_slot15;
                    var0 = var3.getWasEverRtcConnected;
                    var3 = var0.bind(var3)();
                    var5 = _closure1_slot15;
                    var0 = var5.getState;
                    var5 = var0.bind(var5)();
                    var0 = {};
                    var0.channelType = var6;
                    var0.guildId = var4;
                    var4 = _closure1_slot22;
                    var4 = var4.RTC_CONNECTED;
                    var4 = var5 === var4;
                    var0.connected = var4;
                    var3 = !var3;
                    if (!var3) {
                        _fun109784_ip = 144;
                        continue _fun109784
                    }
                case 130:
                    var4 = _closure1_slot22;
                    var4 = var4.DISCONNECTED;
                    var3 = var5 !== var4;
                case 144:
                    if (var3) {
                        _fun109784_ip = 161;
                        continue _fun109784
                    }
                case 147:
                    var4 = _closure1_slot22;
                    var4 = var4.RTC_CONNECTED;
                    var3 = var5 === var4;
                case 161:
                    var0.connectHasStarted = var3;
                    var4 = _closure1_slot6;
                    var3 = var4.getAwaitingRemoteSessionInfo;
                    var3 = var3.bind(var4)();
                    var3 = var2 != var3;
                    var0.awaitingRemote = var3;
                    var3 = _closure1_slot6;
                    var1 = var3.getRemoteSessionId;
                    var1 = var1.bind(var3)();
                    var1 = var2 != var1;
                    var0.connectedRemote = var1;
                    return var0;
            }
        };
        var0 = function(arg0, arg1) { // Environment: var0
            _fun109785: for (var _fun109785_ip = 0;;) switch (_fun109785_ip) {
                case 0:
                    var8 = arg0;
                    var0 = arg1;
                    var7 = var0.channelType;
                    var3 = var0.connected;
                    var6 = var0.connectHasStarted;
                    var1 = var0.awaitingRemote;
                    var0 = var0.connectedRemote;
                    var2 = var8.channelType;
                    var5 = var8.connectedRemote;
                    var4 = var8.connected;
                    var8 = var8.connectHasStarted;
                    if (var8) {
                        _fun109785_ip = 66;
                        continue _fun109785
                    }
                case 63:
                    if (var6) {
                        _fun109785_ip = 72;
                        continue _fun109785
                    }
                case 66:
                    if (!var0) {
                        _fun109785_ip = 108;
                        continue _fun109785
                    }
                case 69:
                    if (var5) {
                        _fun109785_ip = 108;
                        continue _fun109785
                    }
                case 72:
                    var5 = null;
                    if (!(var5 != var7)) {
                        _fun109785_ip = 98;
                        continue _fun109785
                    }
                case 78:
                    var6 = _closure1_slot8;
                    var5 = var6.has;
                    var5 = var5.bind(var6)(var7);
                    if (var5) {
                        _fun109785_ip = 104;
                        continue _fun109785
                    }
                case 98:
                    var5 = 'user_join';
                    return var5;
                case 104:
                    var5 = undefined;
                    return var5;
                case 108:
                    if (!var4) {
                        _fun109785_ip = 156;
                        continue _fun109785
                    }
                case 111:
                    if (var3) {
                        _fun109785_ip = 156;
                        continue _fun109785
                    }
                case 114:
                    if (var1) {
                        _fun109785_ip = 152;
                        continue _fun109785
                    }
                case 117:
                    if (var0) {
                        _fun109785_ip = 152;
                        continue _fun109785
                    }
                case 120:
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun109785_ip = 146;
                        continue _fun109785
                    }
                case 126:
                    var1 = _closure1_slot8;
                    var0 = var1.has;
                    var0 = var0.bind(var1)(var2);
                    if (var0) {
                        _fun109785_ip = 152;
                        continue _fun109785
                    }
                case 146:
                    var0 = 'disconnect';
                    return var0;
                case 152:
                    var0 = undefined;
                    return var0;
                case 156:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var4.bind(var2)(var3, var1, var0);
        var0 = null;
        return var0;
    };
    var _closure1_slot29 = var0;
    var0 = function() {
        var4 = _closure1_slot26;
        var1 = _closure1_slot17;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = undefined;
        var1 = function() { // Environment: var0
            _fun109787: for (var _fun109787_ip = 0;;) switch (_fun109787_ip) {
                case 0:
                    var2 = _closure1_slot17;
                    var0 = var2.isCurrentUserPTTActive;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun109787_ip = 36;
                        continue _fun109787
                    }
                case 22:
                    var2 = _closure1_slot17;
                    var1 = var2.isCurrentUserPTTLatched;
                    var0 = var1.bind(var2)();
                case 36:
                    return var0;
            }
        };
        var0 = function(arg0, arg1) { // Environment: var0
            _fun109788: for (var _fun109788_ip = 0;;) switch (_fun109788_ip) {
                case 0:
                    var1 = arg1;
                    var0 = arg0;
                    if (!(var0 !== var1)) {
                        _fun109788_ip = 71;
                        continue _fun109788
                    }
                case 10:
                    var3 = _closure1_slot13;
                    var0 = var3.isSelfMute;
                    var0 = var0.bind(var3)();
                    var4 = _closure1_slot13;
                    var3 = var4.getMode;
                    var3 = var3.bind(var4)();
                    var2 = _closure1_slot20;
                    var2 = var2.PUSH_TO_TALK;
                    if (!(var3 === var2)) {
                        _fun109788_ip = 71;
                        continue _fun109788
                    }
                case 55:
                    if (var0) {
                        _fun109788_ip = 71;
                        continue _fun109788
                    }
                case 58:
                    var0 = 'ptt_stop';
                    if (!var1) {
                        _fun109788_ip = 69;
                        continue _fun109788
                    }
                case 65:
                    var0 = 'ptt_start';
                case 69:
                    return var0;
                case 71:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var4.bind(var2)(var3, var1, var0);
        var0 = null;
        return var0;
    };
    var _closure1_slot30 = var0;
    var0 = function() {
        var4 = _closure1_slot26;
        var1 = _closure1_slot13;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = undefined;
        var1 = function() { // Environment: var0
            var1 = _closure1_slot13;
            var0 = var1.getActiveVoiceFilter;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = function(arg0, arg1) { // Environment: var0
            _fun109791: for (var _fun109791_ip = 0;;) switch (_fun109791_ip) {
                case 0:
                    var2 = arg0;
                    var0 = arg1;
                    if (!(var2 === var0)) {
                        _fun109791_ip = 14;
                        continue _fun109791
                    }
                case 10:
                    var1 = undefined;
                    return var1;
                case 14:
                    var1 = null;
                    var3 = var1 != var0;
                    var0 = 'voice_filter_off';
                    if (!var3) {
                        _fun109791_ip = 51;
                        continue _fun109791
                    }
                case 29:
                    var2 = var1 != var2;
                    var1 = 'voice_filter_on';
                    if (!var2) {
                        _fun109791_ip = 48;
                        continue _fun109791
                    }
                case 42:
                    var1 = 'voice_filter_swap';
                case 48:
                    var0 = var1;
                case 51:
                    return var0;
            }
        };
        var0 = var4.bind(var2)(var3, var1, var0);
        var0 = null;
        return var0;
    };
    var _closure1_slot31 = var0;
    var0 = function() {
        var4 = _closure1_slot26;
        var1 = _closure1_slot13;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = undefined;
        var1 = function() { // Environment: var0
            var1 = _closure1_slot13;
            var0 = var1.isSelfMutedTemporarily;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = function(arg0, arg1) { // Environment: var0
            _fun109794: for (var _fun109794_ip = 0;;) switch (_fun109794_ip) {
                case 0:
                    var1 = arg1;
                    var0 = arg0;
                    if (!(var0 !== var1)) {
                        _fun109794_ip = 71;
                        continue _fun109794
                    }
                case 10:
                    var3 = _closure1_slot13;
                    var0 = var3.isSelfMute;
                    var0 = var0.bind(var3)();
                    var4 = _closure1_slot13;
                    var3 = var4.getMode;
                    var3 = var3.bind(var4)();
                    var2 = _closure1_slot20;
                    var2 = var2.VOICE_ACTIVITY;
                    if (!(var3 === var2)) {
                        _fun109794_ip = 71;
                        continue _fun109794
                    }
                case 55:
                    if (var0) {
                        _fun109794_ip = 71;
                        continue _fun109794
                    }
                case 58:
                    var0 = 'ptt_start';
                    if (!var1) {
                        _fun109794_ip = 69;
                        continue _fun109794
                    }
                case 65:
                    var0 = 'ptt_stop';
                case 69:
                    return var0;
                case 71:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var4.bind(var2)(var3, var1, var0);
        var0 = null;
        return var0;
    };
    var _closure1_slot32 = var0;
    var0 = function() {
        var4 = _closure1_slot26;
        var1 = _closure1_slot17;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = undefined;
        var1 = function() { // Environment: var0
            var1 = _closure1_slot17;
            var0 = var1.isCurrentUserPrioritySpeaker;
            var0 = var0.bind(var1)();
            return var0;
        };
        var0 = function(arg0, arg1) { // Environment: var0
            _fun109797: for (var _fun109797_ip = 0;;) switch (_fun109797_ip) {
                case 0:
                    var1 = arg1;
                    var0 = arg0;
                    if (!(var0 !== var1)) {
                        _fun109797_ip = 71;
                        continue _fun109797
                    }
                case 10:
                    var3 = _closure1_slot13;
                    var0 = var3.isSelfMute;
                    var0 = var0.bind(var3)();
                    var4 = _closure1_slot13;
                    var3 = var4.getMode;
                    var3 = var3.bind(var4)();
                    var2 = _closure1_slot20;
                    var2 = var2.VOICE_ACTIVITY;
                    if (!(var3 === var2)) {
                        _fun109797_ip = 71;
                        continue _fun109797
                    }
                case 55:
                    if (var0) {
                        _fun109797_ip = 71;
                        continue _fun109797
                    }
                case 58:
                    var0 = 'ptt_stop';
                    if (!var1) {
                        _fun109797_ip = 69;
                        continue _fun109797
                    }
                case 65:
                    var0 = 'ptt_start';
                case 69:
                    return var0;
                case 71:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = var4.bind(var2)(var3, var1, var0);
        var0 = null;
        return var0;
    };
    var _closure1_slot33 = var0;
    var0 = function() {
        var4 = _closure1_slot26;
        var1 = _closure1_slot18;
        var3 = new Array(1);
        var3[0] = var1;
        var2 = undefined;
        var1 = function() { // Environment: var0
            var0 = _closure1_slot18;
            var0 = var0.userHasBeenMovedVersion;
            return var0;
        };
        var0 = function(arg0, arg1) { // Environment: var0
            _fun109800: for (var _fun109800_ip = 0;;) switch (_fun109800_ip) {
                case 0:
                    var1 = arg0;
                    var0 = arg1;
                    if (!(var1 === var0)) {
                        _fun109800_ip = 14;
                        continue _fun109800
                    }
                case 10:
                    var0 = undefined;
                    return var0;
                case 14:
                    var0 = 'user_moved';
                    return var0;
            }
        };
        var0 = var4.bind(var2)(var3, var1, var0);
        var0 = null;
        return var0;
    };
    var _closure1_slot34 = var0;
    var0 = function() {
        var4 = _closure1_slot26;
        var2 = _closure1_slot16;
        var3 = new Array(2);
        var3[0] = var2;
        var1 = _closure1_slot18;
        var3[1] = var1;
        var2 = undefined;
        var1 = function() { // Environment: var0
            _fun109802: for (var _fun109802_ip = 0;;) switch (_fun109802_ip) {
                case 0:
                    var2 = _closure1_slot16;
                    var1 = var2.getVoiceChannelId;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun109802_ip = 73;
                        continue _fun109802
                    }
                case 23:
                    var2 = _closure1_slot18;
                    var1 = var2.getVoiceStateForChannel;
                    var3 = var1.bind(var2)(var3);
                    var4 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var1 = 22;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.getAudienceRequestToSpeakState;
                    var1 = var1.bind(var2)(var3);
                    return var1;
                case 73:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 22;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var0 = var0.RequestToSpeakStates;
                    var0 = var0.NONE;
                    return var0;
            }
        };
        var0 = function(arg0, arg1) { // Environment: var0
            _fun109803: for (var _fun109803_ip = 0;;) switch (_fun109803_ip) {
                case 0:
                    var1 = arg1;
                    var0 = arg0;
                    if (!(var0 !== var1)) {
                        _fun109803_ip = 51;
                        continue _fun109803
                    }
                case 10:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 22;
                    var2 = var2[var0];
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2);
                    var0 = var0.RequestToSpeakStates;
                    var0 = var0.REQUESTED_TO_SPEAK_AND_AWAITING_USER_ACK;
                    if (!(var1 !== var0)) {
                        _fun109803_ip = 55;
                        continue _fun109803
                    }
                case 51:
                    var0 = undefined;
                    return var0;
                case 55:
                    var0 = 'reconnect';
                    return var0;
            }
        };
        var0 = var4.bind(var2)(var3, var1, var0);
        var0 = null;
        return var0;
    };
    var _closure1_slot35 = var0;
    var0 = function() {
        var4 = _closure1_slot26;
        var2 = _closure1_slot16;
        var3 = new Array(5);
        var3[0] = var2;
        var2 = _closure1_slot9;
        var3[1] = var2;
        var2 = _closure1_slot10;
        var3[2] = var2;
        var2 = _closure1_slot18;
        var3[3] = var2;
        var1 = _closure1_slot11;
        var3[4] = var1;
        var2 = undefined;
        var1 = function() { // Environment: var0
            _fun109805: for (var _fun109805_ip = 0;;) switch (_fun109805_ip) {
                case 0:
                    var2 = _closure1_slot16;
                    var1 = var2.getVoiceChannelId;
                    var7 = var1.bind(var2)();
                    var2 = _closure1_slot10;
                    var1 = var2.getId;
                    var2 = var1.bind(var2)();
                    var _closure3_slot0 = var2;
                    var11 = new Array(0);
                    var3 = _closure1_slot9;
                    var1 = var3.getAllActiveStreams;
                    var1 = var1.bind(var3)();
                    var4 = null;
                    var3 = var4 != var7;
                    var13 = undefined;
                    var8 = undefined;
                    var6 = undefined;
                    var5 = var11;
                    if (!var3) {
                        _fun109805_ip = 201;
                        continue _fun109805
                    }
                case 76:
                    var9 = _closure1_slot11;
                    var3 = var9.getChannel;
                    var3 = var3.bind(var9)(var7);
                    var9 = var4 != var3;
                    var8 = undefined;
                    var6 = undefined;
                    var5 = var11;
                    if (!var9) {
                        _fun109805_ip = 201;
                        continue _fun109805
                    }
                case 104:
                    var11 = var3.type;
                    var14 = _closure1_slot19;
                    var12 = var14.countVoiceStatesForChannel;
                    var9 = var3.id;
                    var12 = var12.bind(var14)(var9);
                    var15 = _closure1_slot18;
                    var14 = var15.isInChannel;
                    var9 = var3.id;
                    var14 = var14.bind(var15)(var9);
                    var9 = 0;
                    if (!var14) {
                        _fun109805_ip = 157;
                        continue _fun109805
                    }
                case 154:
                    var9 = 1;
                case 157:
                    var6 = var12 - var9;
                    var14 = _closure1_slot9;
                    var12 = var14.getAllApplicationStreamsForChannel;
                    var3 = var3.id;
                    var14 = var12.bind(var14)(var3);
                    var12 = var14.map;
                    var3 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var0 = var0.ownerId;
                        return var0;
                    };
                    var5 = var12.bind(var14)(var3);
                    var8 = var11;
                case 201:
                    var9 = var1.length;
                    var3 = 1;
                    if (!(var3 !== var9)) {
                        _fun109805_ip = 229;
                        continue _fun109805
                    }
                case 213:
                    var9 = _closure1_slot9;
                    var3 = var9.getCurrentUserActiveStream;
                    var12 = var3.bind(var9)();
                    _fun109805_ip = 235;
                    continue _fun109805;
                case 229:
                    var3 = 0;
                    var12 = var1[var3];
                case 235:
                    var3 = var4 == var12;
                    var9 = undefined;
                    if (var3) {
                        _fun109805_ip = 249;
                        continue _fun109805
                    }
                case 244:
                    var9 = var12.state;
                case 249:
                    var3 = _closure1_slot21;
                    var3 = var3.CONNECTING;
                    if (!(var9 === var3)) {
                        _fun109805_ip = 265;
                        continue _fun109805
                    }
                case 263:
                    var12 = null;
                case 265:
                    var9 = var4 != var12;
                    var4 = null;
                    var3 = 0;
                    if (!var9) {
                        _fun109805_ip = 347;
                        continue _fun109805
                    }
                case 276:
                    var11 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var9 = 23;
                    var9 = var14[var9];
                    var11 = var11.bind(var13)(var9);
                    var9 = var11.encodeStreamKey;
                    var9 = var9.bind(var11)(var12);
                    var11 = _closure1_slot9;
                    var10 = var11.getViewerIds;
                    var11 = var10.bind(var11)(var9);
                    var10 = var11.filter;
                    var0 = function(arg0) { // Environment: var0
                        var1 = _closure3_slot0;
                        var0 = arg0;
                        var0 = var0 !== var1;
                        return var0;
                    };
                    var0 = var10.bind(var11)(var0);
                    var3 = var0.length;
                    var4 = var9;
                case 347:
                    var0 = {};
                    var0.channelType = var8;
                    var0.voiceChannelId = var7;
                    var0.voiceChannelUserCount = var6;
                    var0.streamingUserIds = var5;
                    var0.singleActiveStreamKey = var4;
                    var0.singleActiveStreamViewerCount = var3;
                    var0.currentUserId = var2;
                    var0.allActiveStreams = var1;
                    return var0;
            }
        };
        var0 = function(arg0, arg1) { // Environment: var0
            _fun109808: for (var _fun109808_ip = 0;;) switch (_fun109808_ip) {
                case 0:
                    var7 = arg0;
                    var0 = arg1;
                    var _closure3_slot0 = var7;
                    var10 = var0.channelType;
                    var12 = var0.voiceChannelId;
                    var6 = var0.voiceChannelUserCount;
                    var4 = var0.streamingUserIds;
                    var _closure3_slot1 = var4;
                    var3 = var0.singleActiveStreamKey;
                    var8 = var0.singleActiveStreamViewerCount;
                    var0 = var0.currentUserId;
                    var _closure3_slot2 = var0;
                    var0 = undefined;
                    var _closure3_slot3 = var0;
                    var2 = var7.voiceChannelId;
                    if (!(var2 === var12)) {
                        _fun109808_ip = 484;
                        continue _fun109808
                    }
                case 81:
                    var5 = null;
                    if (!(var5 != var12)) {
                        _fun109808_ip = 484;
                        continue _fun109808
                    }
                case 90:
                    var11 = _closure1_slot11;
                    var9 = var11.getChannel;
                    var12 = var9.bind(var11)(var12);
                    var11 = var5 == var12;
                    var9 = false;
                    if (var11) {
                        _fun109808_ip = 174;
                        continue _fun109808
                    }
                case 116:
                    var11 = var12.getGuildId;
                    var14 = var11.bind(var12)();
                    var11 = var5 == var14;
                    var9 = false;
                    if (var11) {
                        _fun109808_ip = 174;
                        continue _fun109808
                    }
                case 135:
                    var13 = _closure1_slot12;
                    var11 = var13.getGuild;
                    var13 = var11.bind(var13)(var14);
                    var11 = var5 != var13;
                    if (!var11) {
                        _fun109808_ip = 171;
                        continue _fun109808
                    }
                case 156:
                    var13 = var13.afkChannelId;
                    var12 = var12.id;
                    var11 = var13 === var12;
                case 171:
                    var9 = var11;
                case 174:
                    if (var9) {
                        _fun109808_ip = 484;
                        continue _fun109808
                    }
                case 180:
                    if (!(var5 != var10)) {
                        _fun109808_ip = 204;
                        continue _fun109808
                    }
                case 184:
                    var9 = _closure1_slot8;
                    var2 = var9.has;
                    var2 = var2.bind(var9)(var10);
                    if (var2) {
                        _fun109808_ip = 484;
                        continue _fun109808
                    }
                case 204:
                    var9 = var5 != var3;
                    if (!var9) {
                        _fun109808_ip = 221;
                        continue _fun109808
                    }
                case 211:
                    var2 = var7.singleActiveStreamKey;
                    var9 = var2 === var3;
                case 221:
                    var3 = var4.some;
                    var2 = function(arg0) { // Environment: var1
                        var0 = _closure3_slot0;
                        var2 = var0.streamingUserIds;
                        var1 = var2.includes;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        var0 = !var0;
                        return var0;
                    };
                    var2 = var3.bind(var4)(var2);
                    var10 = var7.allActiveStreams;
                    var4 = var10.map;
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var0 = var0.ownerId;
                        return var0;
                    };
                    var3 = var4.bind(var10)(var3);
                    _closure3_slot3 = var3;
                    var4 = var7.streamingUserIds;
                    var3 = var4.some;
                    var1 = function(arg0) { // Environment: var1
                        _fun109811: for (var _fun109811_ip = 0;;) switch (_fun109811_ip) {
                            case 0:
                                var4 = arg0;
                                var1 = _closure3_slot1;
                                var0 = var1.includes;
                                var0 = var0.bind(var1)(var4);
                                var0 = !var0;
                                if (!var0) {
                                    _fun109811_ip = 54;
                                    continue _fun109811
                                }
                            case 26:
                                var1 = _closure3_slot2;
                                var1 = var4 === var1;
                                if (var1) {
                                    _fun109811_ip = 51;
                                    continue _fun109811
                                }
                            case 37:
                                var3 = _closure3_slot3;
                                var2 = var3.includes;
                                var1 = var2.bind(var3)(var4);
                            case 51:
                                var0 = var1;
                            case 54:
                                return var0;
                        }
                    };
                    var3 = var3.bind(var4)(var1);
                    var1 = 'stream_started';
                    if (var2) {
                        _fun109808_ip = 482;
                        continue _fun109808
                    }
                case 300:
                    var2 = 'stream_ended';
                    if (var3) {
                        _fun109808_ip = 479;
                        continue _fun109808
                    }
                case 310:
                    var3 = var7.singleActiveStreamViewerCount;
                    var10 = 25;
                    if (!(var3 <= var10)) {
                        _fun109808_ip = 346;
                        continue _fun109808
                    }
                case 323:
                    if (!var9) {
                        _fun109808_ip = 346;
                        continue _fun109808
                    }
                case 326:
                    var3 = var7.singleActiveStreamViewerCount;
                    var4 = var8 > var3;
                    var3 = 'stream_user_joined';
                    if (var4) {
                        _fun109808_ip = 476;
                        continue _fun109808
                    }
                case 346:
                    var4 = var7.voiceChannelUserCount;
                    if (!(var5 != var4)) {
                        _fun109808_ip = 387;
                        continue _fun109808
                    }
                case 356:
                    if (!(var5 != var6)) {
                        _fun109808_ip = 387;
                        continue _fun109808
                    }
                case 360:
                    var4 = var7.voiceChannelUserCount;
                    if (!(var4 <= var10)) {
                        _fun109808_ip = 387;
                        continue _fun109808
                    }
                case 370:
                    var4 = var7.voiceChannelUserCount;
                    var11 = var6 > var4;
                    var4 = 'user_join';
                    if (var11) {
                        _fun109808_ip = 473;
                        continue _fun109808
                    }
                case 387:
                    var11 = var7.voiceChannelUserCount;
                    if (!(var5 != var11)) {
                        _fun109808_ip = 428;
                        continue _fun109808
                    }
                case 397:
                    if (!(var5 != var6)) {
                        _fun109808_ip = 428;
                        continue _fun109808
                    }
                case 401:
                    var5 = var7.voiceChannelUserCount;
                    if (!(var5 <= var10)) {
                        _fun109808_ip = 428;
                        continue _fun109808
                    }
                case 411:
                    var5 = var7.voiceChannelUserCount;
                    var6 = var6 < var5;
                    var5 = 'user_leave';
                    if (var6) {
                        _fun109808_ip = 470;
                        continue _fun109808
                    }
                case 428:
                    var6 = var7.singleActiveStreamViewerCount;
                    var10 = var6 <= var10;
                    var6 = undefined;
                    if (!var10) {
                        _fun109808_ip = 467;
                        continue _fun109808
                    }
                case 443:
                    var6 = undefined;
                    if (!var9) {
                        _fun109808_ip = 467;
                        continue _fun109808
                    }
                case 448:
                    var7 = var7.singleActiveStreamViewerCount;
                    var7 = var8 < var7;
                    var6 = undefined;
                    if (!var7) {
                        _fun109808_ip = 467;
                        continue _fun109808
                    }
                case 463:
                    var6 = 'stream_user_left';
                case 467:
                    var5 = var6;
                case 470:
                    var4 = var5;
                case 473:
                    var3 = var4;
                case 476:
                    var2 = var3;
                case 479:
                    var1 = var2;
                case 482:
                    return var1;
                case 484:
                    return var0;
            }
        };
        var0 = var4.bind(var2)(var3, var1, var0);
        var0 = null;
        return var0;
    };
    var _closure1_slot36 = var0;
    var0 = function() {
        var4 = _closure1_slot26;
        var2 = _closure1_slot16;
        var3 = new Array(4);
        var3[0] = var2;
        var2 = _closure1_slot3;
        var3[1] = var2;
        var2 = _closure1_slot5;
        var3[2] = var2;
        var1 = _closure1_slot10;
        var3[3] = var1;
        var2 = undefined;
        var1 = function() { // Environment: var0
            _fun109813: for (var _fun109813_ip = 0;;) switch (_fun109813_ip) {
                case 0:
                    var2 = _closure1_slot16;
                    var0 = var2.getVoiceChannelId;
                    var8 = var0.bind(var2)();
                    var2 = _closure1_slot16;
                    var0 = var2.getChannelId;
                    var10 = var0.bind(var2)();
                    var2 = _closure1_slot3;
                    var0 = var2.getConnectedActivityLocation;
                    var6 = var0.bind(var2)();
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var3 = 24;
                    var3 = var0[var3];
                    var5 = undefined;
                    var4 = var2.bind(var5)(var3);
                    var3 = var4.getEmbeddedActivityLocationChannelId;
                    var9 = var3.bind(var4)(var6);
                    var4 = _closure1_slot10;
                    var3 = var4.getId;
                    var4 = var3.bind(var4)();
                    var7 = 25;
                    var0 = var0[var7];
                    var2 = var2.bind(var5)(var0);
                    var0 = var2.isNotNullish;
                    var0 = var0.bind(var2)(var10);
                    if (var0) {
                        _fun109813_ip = 124;
                        continue _fun109813
                    }
                case 118:
                    var3 = _closure1_slot4;
                    _fun109813_ip = 139;
                    continue _fun109813;
                case 124:
                    var2 = _closure1_slot3;
                    var0 = var2.getEmbeddedActivitiesForChannel;
                    var3 = var0.bind(var2)(var10);
                case 139:
                    var2 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var0 = var0[var7];
                    var2 = var2.bind(var5)(var0);
                    var0 = var2.isNotNullish;
                    var0 = var0.bind(var2)(var8);
                    if (var0) {
                        _fun109813_ip = 176;
                        continue _fun109813
                    }
                case 170:
                    var2 = _closure1_slot4;
                    _fun109813_ip = 191;
                    continue _fun109813;
                case 176:
                    var10 = _closure1_slot3;
                    var0 = var10.getEmbeddedActivitiesForChannel;
                    var2 = var0.bind(var10)(var8);
                case 191:
                    var0 = {};
                    var0.connectedActivityLocation = var6;
                    var0.voiceChannelId = var8;
                    var0.currentUserId = var4;
                    var0.channelActivities = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var7];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.isNotNullish;
                    var3 = var3.bind(var4)(var9);
                    if (var3) {
                        _fun109813_ip = 250;
                        continue _fun109813
                    }
                case 244:
                    var3 = _closure1_slot4;
                    _fun109813_ip = 265;
                    continue _fun109813;
                case 250:
                    var8 = _closure1_slot3;
                    var4 = var8.getEmbeddedActivitiesForChannel;
                    var3 = var4.bind(var8)(var9);
                case 265:
                    var0.connectedChannelActivities = var3;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var3 = var3[var7];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.isNotNullish;
                    var4 = var3.bind(var4)(var6);
                    var3 = null;
                    if (!var4) {
                        _fun109813_ip = 318;
                        continue _fun109813
                    }
                case 303:
                    var5 = _closure1_slot3;
                    var4 = var5.getSelfEmbeddedActivityForLocation;
                    var3 = var4.bind(var5)(var6);
                case 318:
                    var0.userConnectedActivity = var3;
                    var0.voiceChannelActivities = var2;
                    var2 = _closure1_slot5;
                    var1 = var2.getConnectedFrame;
                    var1 = var1.bind(var2)();
                    var0.connectedFrame = var1;
                    return var0;
            }
        };
        var0 = function(arg0, arg1) { // Environment: var0
            _fun109814: for (var _fun109814_ip = 0;;) switch (_fun109814_ip) {
                case 0:
                    var3 = arg0;
                    var0 = arg1;
                    var1 = var0.connectedActivityLocation;
                    var14 = var0.voiceChannelId;
                    var2 = var0.currentUserId;
                    var _closure3_slot0 = var2;
                    var4 = var0.channelActivities;
                    var2 = var0.connectedChannelActivities;
                    var9 = var0.userConnectedActivity;
                    var _closure3_slot1 = var9;
                    var8 = var0.voiceChannelActivities;
                    var5 = var0.connectedFrame;
                    var6 = var8.some;
                    var0 = function(arg0) { // Environment: var13
                        _fun109815: for (var _fun109815_ip = 0;;) switch (_fun109815_ip) {
                            case 0:
                                var2 = arg0;
                                var3 = var2.applicationId;
                                var4 = _closure3_slot1;
                                var0 = null;
                                var4 = var0 == var4;
                                var0 = undefined;
                                if (var4) {
                                    _fun109815_ip = 35;
                                    continue _fun109815
                                }
                            case 26:
                                var4 = _closure3_slot1;
                                var0 = var4.applicationId;
                            case 35:
                                var0 = var3 === var0;
                                if (!var0) {
                                    _fun109815_ip = 62;
                                    continue _fun109815
                                }
                            case 42:
                                var2 = var2.launchId;
                                var1 = _closure3_slot1;
                                var1 = var1.launchId;
                                var0 = var2 === var1;
                            case 62:
                                return var0;
                        }
                    };
                    var7 = var6.bind(var8)(var0);
                    var12 = _closure1_slot0;
                    var0 = _closure1_slot1;
                    var11 = 25;
                    var0 = var0[var11];
                    var10 = undefined;
                    var12 = var12.bind(var10)(var0);
                    var0 = var12.isNotNullish;
                    var12 = var0.bind(var12)(var14);
                    var0 = undefined;
                    if (!var12) {
                        _fun109814_ip = 475;
                        continue _fun109814
                    }
                case 126:
                    var15 = var3.voiceChannelActivities;
                    var14 = var15.find;
                    var12 = function(arg0) { // Environment: var13
                        var0 = arg0;
                        var2 = var0.userIds;
                        var1 = var2.has;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var12 = var14.bind(var15)(var12);
                    var14 = var8.find;
                    var13 = function(arg0) { // Environment: var13
                        var0 = arg0;
                        var2 = var0.userIds;
                        var1 = var2.has;
                        var0 = _closure3_slot0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var13 = var14.bind(var8)(var13);
                    var14 = var3.voiceChannelActivities;
                    var14 = var14.length;
                    var8 = var8.length;
                    var14 = var14 < var8;
                    if (!var14) {
                        _fun109814_ip = 223;
                        continue _fun109814
                    }
                case 189:
                    var15 = _closure1_slot0;
                    var8 = _closure1_slot1;
                    var8 = var8[var11];
                    var16 = var15.bind(var10)(var8);
                    var15 = var16.isNotNullish;
                    var8 = var3.voiceChannelId;
                    var14 = var15.bind(var16)(var8);
                case 223:
                    var8 = undefined;
                    if (!var14) {
                        _fun109814_ip = 234;
                        continue _fun109814
                    }
                case 228:
                    var8 = 'activity_launch';
                case 234:
                    var14 = var10 === var13;
                    if (!var14) {
                        _fun109814_ip = 269;
                        continue _fun109814
                    }
                case 241:
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot1;
                    var15 = var15[var11];
                    var16 = var16.bind(var10)(var15);
                    var15 = var16.isNotNullish;
                    var14 = var15.bind(var16)(var12);
                case 269:
                    if (!var14) {
                        _fun109814_ip = 278;
                        continue _fun109814
                    }
                case 272:
                    var8 = 'activity_end';
                case 278:
                    var14 = var10 === var12;
                    if (!var14) {
                        _fun109814_ip = 313;
                        continue _fun109814
                    }
                case 285:
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot1;
                    var15 = var15[var11];
                    var16 = var16.bind(var10)(var15);
                    var15 = var16.isNotNullish;
                    var14 = var15.bind(var16)(var13);
                case 313:
                    if (!var14) {
                        _fun109814_ip = 334;
                        continue _fun109814
                    }
                case 316:
                    var15 = var13.userIds;
                    var16 = var15.size;
                    var15 = 1;
                    var14 = var16 > var15;
                case 334:
                    if (!var14) {
                        _fun109814_ip = 343;
                        continue _fun109814
                    }
                case 337:
                    var8 = 'activity_user_join';
                case 343:
                    var15 = _closure1_slot0;
                    var14 = _closure1_slot1;
                    var14 = var14[var11];
                    var15 = var15.bind(var10)(var14);
                    var14 = var15.isNotNullish;
                    var14 = var14.bind(var15)(var13);
                    if (!var14) {
                        _fun109814_ip = 402;
                        continue _fun109814
                    }
                case 374:
                    var16 = _closure1_slot0;
                    var15 = _closure1_slot1;
                    var15 = var15[var11];
                    var16 = var16.bind(var10)(var15);
                    var15 = var16.isNotNullish;
                    var14 = var15.bind(var16)(var12);
                case 402:
                    var0 = var8;
                    if (!var14) {
                        _fun109814_ip = 475;
                        continue _fun109814
                    }
                case 408:
                    var14 = var13.userIds;
                    var15 = var14.size;
                    var14 = var12.userIds;
                    var14 = var14.size;
                    if (!(var15 > var14)) {
                        _fun109814_ip = 440;
                        continue _fun109814
                    }
                case 434:
                    var8 = 'activity_user_join';
                case 440:
                    var13 = var13.userIds;
                    var13 = var13.size;
                    var12 = var12.userIds;
                    var12 = var12.size;
                    if (!(var13 < var12)) {
                        _fun109814_ip = 472;
                        continue _fun109814
                    }
                case 466:
                    var8 = 'activity_user_left';
                case 472:
                    var0 = var8;
                case 475:
                    var8 = var0;
                    if (var7) {
                        _fun109814_ip = 720;
                        continue _fun109814
                    }
                case 484:
                    var7 = var3.connectedChannelActivities;
                    var7 = var7.length;
                    var2 = var2.length;
                    var2 = var7 < var2;
                    if (!var2) {
                        _fun109814_ip = 527;
                        continue _fun109814
                    }
                case 507:
                    var7 = var3.channelActivities;
                    var7 = var7.length;
                    var4 = var4.length;
                    var2 = var7 < var4;
                case 527:
                    if (!var2) {
                        _fun109814_ip = 536;
                        continue _fun109814
                    }
                case 530:
                    var0 = 'activity_launch';
                case 536:
                    var2 = var3.userConnectedActivity;
                    var4 = null;
                    var4 = var4 == var9;
                    if (!var4) {
                        _fun109814_ip = 579;
                        continue _fun109814
                    }
                case 551:
                    var12 = _closure1_slot0;
                    var7 = _closure1_slot1;
                    var7 = var7[var11];
                    var12 = var12.bind(var10)(var7);
                    var7 = var12.isNotNullish;
                    var4 = var7.bind(var12)(var2);
                case 579:
                    if (!var4) {
                        _fun109814_ip = 588;
                        continue _fun109814
                    }
                case 582:
                    var0 = 'activity_end';
                case 588:
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var4 = var4[var11];
                    var7 = var7.bind(var10)(var4);
                    var4 = var7.isNotNullish;
                    var4 = var4.bind(var7)(var9);
                    if (!var4) {
                        _fun109814_ip = 647;
                        continue _fun109814
                    }
                case 619:
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var6 = var6[var11];
                    var7 = var7.bind(var10)(var6);
                    var6 = var7.isNotNullish;
                    var4 = var6.bind(var7)(var2);
                case 647:
                    var8 = var0;
                    if (!var4) {
                        _fun109814_ip = 720;
                        continue _fun109814
                    }
                case 653:
                    var4 = var9.userIds;
                    var6 = var4.size;
                    var4 = var2.userIds;
                    var4 = var4.size;
                    if (!(var6 > var4)) {
                        _fun109814_ip = 685;
                        continue _fun109814
                    }
                case 679:
                    var0 = 'activity_user_join';
                case 685:
                    var4 = var9.userIds;
                    var4 = var4.size;
                    var2 = var2.userIds;
                    var2 = var2.size;
                    if (!(var4 < var2)) {
                        _fun109814_ip = 717;
                        continue _fun109814
                    }
                case 711:
                    var0 = 'activity_user_left';
                case 717:
                    var8 = var0;
                case 720:
                    var4 = null;
                    var0 = var4 != var8;
                    if (var0) {
                        _fun109814_ip = 749;
                        continue _fun109814
                    }
                case 729:
                    var2 = var3.connectedActivityLocation;
                    var2 = var4 == var2;
                    if (!var2) {
                        _fun109814_ip = 746;
                        continue _fun109814
                    }
                case 742:
                    var2 = var4 == var1;
                case 746:
                    var0 = var2;
                case 749:
                    var2 = var8;
                    if (var0) {
                        _fun109814_ip = 924;
                        continue _fun109814
                    }
                case 758:
                    var0 = var3.connectedActivityLocation;
                    if (!(var4 == var0)) {
                        _fun109814_ip = 784;
                        continue _fun109814
                    }
                case 768:
                    var6 = var4 != var1;
                    var0 = 'activity_launch';
                    if (var6) {
                        _fun109814_ip = 921;
                        continue _fun109814
                    }
                case 784:
                    var6 = var3.connectedActivityLocation;
                    if (!(var4 != var6)) {
                        _fun109814_ip = 807;
                        continue _fun109814
                    }
                case 794:
                    var6 = var4 == var1;
                    var1 = 'activity_end';
                    if (var6) {
                        _fun109814_ip = 918;
                        continue _fun109814
                    }
                case 807:
                    var7 = var4 != var9;
                    if (!var7) {
                        _fun109814_ip = 824;
                        continue _fun109814
                    }
                case 814:
                    var6 = var3.userConnectedActivity;
                    var7 = var4 != var6;
                case 824:
                    var6 = var8;
                    if (!var7) {
                        _fun109814_ip = 915;
                        continue _fun109814
                    }
                case 830:
                    var7 = var3.userConnectedActivity;
                    var7 = var7.userIds;
                    var10 = var7.size;
                    var7 = var9.userIds;
                    var7 = var7.size;
                    var10 = var10 < var7;
                    var7 = 'activity_user_join';
                    if (var10) {
                        _fun109814_ip = 912;
                        continue _fun109814
                    }
                case 871:
                    var10 = var3.userConnectedActivity;
                    var10 = var10.userIds;
                    var10 = var10.size;
                    var9 = var9.userIds;
                    var9 = var9.size;
                    if (!(var10 > var9)) {
                        _fun109814_ip = 909;
                        continue _fun109814
                    }
                case 903:
                    var8 = 'activity_user_leave';
                case 909:
                    var7 = var8;
                case 912:
                    var6 = var7;
                case 915:
                    var1 = var6;
                case 918:
                    var0 = var1;
                case 921:
                    var2 = var0;
                case 924:
                    var1 = var4 != var2;
                    if (var1) {
                        _fun109814_ip = 951;
                        continue _fun109814
                    }
                case 931:
                    var0 = var3.connectedFrame;
                    var0 = var4 == var0;
                    if (!var0) {
                        _fun109814_ip = 948;
                        continue _fun109814
                    }
                case 944:
                    var0 = var4 == var5;
                case 948:
                    var1 = var0;
                case 951:
                    var0 = var2;
                    if (var1) {
                        _fun109814_ip = 1012;
                        continue _fun109814
                    }
                case 957:
                    var1 = var3.connectedFrame;
                    if (!(var4 == var1)) {
                        _fun109814_ip = 980;
                        continue _fun109814
                    }
                case 967:
                    var6 = var4 != var5;
                    var1 = 'activity_launch';
                    if (var6) {
                        _fun109814_ip = 1009;
                        continue _fun109814
                    }
                case 980:
                    var3 = var3.connectedFrame;
                    var3 = var4 != var3;
                    if (!var3) {
                        _fun109814_ip = 997;
                        continue _fun109814
                    }
                case 993:
                    var3 = var4 == var5;
                case 997:
                    if (!var3) {
                        _fun109814_ip = 1006;
                        continue _fun109814
                    }
                case 1000:
                    var2 = 'activity_end';
                case 1006:
                    var1 = var2;
                case 1009:
                    var0 = var1;
                case 1012:
                    return var0;
            }
        };
        var0 = var4.bind(var2)(var3, var1, var0);
        var0 = null;
        return var0;
    };
    var _closure1_slot37 = var0;
    var0 = function() {
        var5 = _closure1_slot26;
        var2 = _closure1_slot7;
        var4 = new Array(2);
        var4[0] = var2;
        var1 = _closure1_slot16;
        var4[1] = var1;
        var10 = undefined;
        var8 = function() { // Environment: var0
            var0 = {};
            var3 = _closure1_slot7;
            var2 = var3.getCurrentHangStatus;
            var2 = var2.bind(var3)();
            var0.hangStatus = var2;
            var3 = _closure1_slot7;
            var2 = var3.getCustomHangStatus;
            var2 = var2.bind(var3)();
            var0.customHangStatus = var2;
            var3 = _closure1_slot7;
            var2 = var3.getGameActivityHangStatus;
            var2 = var2.bind(var3)();
            var0.gameActivityHangStatus = var2;
            var2 = _closure1_slot16;
            var1 = var2.getVoiceChannelId;
            var2 = var1.bind(var2)();
            var1 = null;
            var1 = var1 != var2;
            var0.inVoice = var1;
            return var0;
        };
        var7 = function(arg0, arg1) { // Environment: var0
            _fun109820: for (var _fun109820_ip = 0;;) switch (_fun109820_ip) {
                case 0:
                    var3 = arg0;
                    var0 = arg1;
                    var5 = var0.hangStatus;
                    var7 = var0.customHangStatus;
                    var4 = var0.gameActivityHangStatus;
                    var0 = var3.inVoice;
                    if (var0) {
                        _fun109820_ip = 37;
                        continue _fun109820
                    }
                case 33:
                    var0 = undefined;
                    return var0;
                case 37:
                    var2 = null;
                    if (!(var2 != var5)) {
                        _fun109820_ip = 62;
                        continue _fun109820
                    }
                case 43:
                    var1 = var3.hangStatus;
                    var0 = 'hang_status_select';
                    if (!(var5 === var1)) {
                        _fun109820_ip = 207;
                        continue _fun109820
                    }
                case 62:
                    if (!(var2 != var7)) {
                        _fun109820_ip = 174;
                        continue _fun109820
                    }
                case 66:
                    var9 = var7.status;
                    var1 = var3.customHangStatus;
                    var6 = var2 == var1;
                    var5 = undefined;
                    var8 = undefined;
                    if (var6) {
                        _fun109820_ip = 93;
                        continue _fun109820
                    }
                case 88:
                    var8 = var1.status;
                case 93:
                    var6 = 'hang_status_select';
                    var1 = var6;
                    if (!(var9 === var8)) {
                        _fun109820_ip = 204;
                        continue _fun109820
                    }
                case 106:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var8 = 26;
                    var8 = var10[var8];
                    var9 = var9.bind(var5)(var8);
                    var8 = var9.isEqual;
                    var7 = var7.emoji;
                    var10 = var3.customHangStatus;
                    var11 = var2 == var10;
                    var5 = undefined;
                    if (var11) {
                        _fun109820_ip = 162;
                        continue _fun109820
                    }
                case 156:
                    var5 = var10.emoji;
                case 162:
                    var5 = var8.bind(var9)(var7, var5);
                    var1 = var6;
                    if (!var5) {
                        _fun109820_ip = 204;
                        continue _fun109820
                    }
                case 174:
                    var6 = var2 != var4;
                    var2 = undefined;
                    if (!var6) {
                        _fun109820_ip = 201;
                        continue _fun109820
                    }
                case 183:
                    var3 = var3.gameActivityHangStatus;
                    var2 = undefined;
                    if (!(var3 !== var4)) {
                        _fun109820_ip = 201;
                        continue _fun109820
                    }
                case 195:
                    var2 = 'hang_status_select';
                case 201:
                    var1 = var2;
                case 204:
                    var0 = var1;
                case 207:
                    return var0;
            }
        };
        var6 = 0.15;
        var9 = var4;
        var0 = var10[var5](var9, var8, var7, var6, var5);
        var0 = null;
        return var0;
    };
    var _closure1_slot38 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = arg3;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot2 = var3;
    var3 = 1;
    var7 = var5[var3];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NO_ACTIVITIES;
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
    var3 = var3.SILENT_JOIN_LEAVE_CHANNEL_TYPES;
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot16 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot17 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot18 = var3;
    var3 = 16;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot19 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.InputModes;
    var _closure1_slot20 = var6;
    var6 = var3.ApplicationStreamStates;
    var _closure1_slot21 = var6;
    var3 = var3.RTCConnectionStates;
    var _closure1_slot22 = var3;
    var3 = 18;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot23 = var6;
    var6 = var3.Fragment;
    var _closure1_slot24 = var6;
    var3 = var3.jsxs;
    var _closure1_slot25 = var3;
    var3 = 27;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'components_common/SoundPlayer.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() {
        var3 = _closure1_slot25;
        var2 = _closure1_slot24;
        var1 = {};
        var7 = _closure1_slot23;
        var6 = _closure1_slot27;
        var0 = undefined;
        var4 = {};
        var6 = var7.bind(var0)(var6, var4);
        var4 = new Array(12);
        var4[0] = var6;
        var8 = _closure1_slot28;
        var6 = {};
        var6 = var7.bind(var0)(var8, var6);
        var4[1] = var6;
        var8 = _closure1_slot29;
        var6 = {};
        var6 = var7.bind(var0)(var8, var6);
        var4[2] = var6;
        var8 = _closure1_slot30;
        var6 = {};
        var6 = var7.bind(var0)(var8, var6);
        var4[3] = var6;
        var8 = _closure1_slot32;
        var6 = {};
        var6 = var7.bind(var0)(var8, var6);
        var4[4] = var6;
        var8 = _closure1_slot34;
        var6 = {};
        var6 = var7.bind(var0)(var8, var6);
        var4[5] = var6;
        var8 = _closure1_slot36;
        var6 = {};
        var6 = var7.bind(var0)(var8, var6);
        var4[6] = var6;
        var8 = _closure1_slot35;
        var6 = {};
        var6 = var7.bind(var0)(var8, var6);
        var4[7] = var6;
        var8 = _closure1_slot37;
        var6 = {};
        var6 = var7.bind(var0)(var8, var6);
        var4[8] = var6;
        var8 = _closure1_slot31;
        var6 = {};
        var6 = var7.bind(var0)(var8, var6);
        var4[9] = var6;
        var8 = _closure1_slot33;
        var6 = {};
        var6 = var7.bind(var0)(var8, var6);
        var4[10] = var6;
        var6 = _closure1_slot38;
        var5 = {};
        var5 = var7.bind(var0)(var6, var5);
        var4[11] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1371, 7938, 3519, 3611, 1376, 3714, 1216, 1372, 1410, 3476, 8752, 3518, 1670, 3949, 3521, 3526, 660, 33, 566, 8427, 14143, 4238, 3505, 3081, 1304, 22, 2]);