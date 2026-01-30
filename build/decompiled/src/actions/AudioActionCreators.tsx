// actions/AudioActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: getInputDeviceName, environment: var3
        _fun66246: for (var _fun66246_ip = 0;;) switch (_fun66246_ip) {
            case 0:
                var2 = _closure1_slot6;
                var1 = var2.getInputDevices;
                var1 = var1.bind(var2)();
                var2 = _closure1_slot6;
                var0 = var2.getInputDeviceId;
                var0 = var0.bind(var2)();
                var1 = var1[var0];
                var0 = null;
                var2 = var0 != var1;
                var0 = '';
                if (!var2) {
                    _fun66246_ip = 53;
                    continue _fun66246
                }
            case 48:
                var0 = var1.name;
            case 53:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function(arg0, arg1, arg2, arg3) { // Original name: trackDeviceChanged, environment: var3
        _fun66247: for (var _fun66247_ip = 0;;) switch (_fun66247_ip) {
            case 0:
                var1 = arg0;
                var18 = arg1;
                var13 = arg2;
                var2 = arguments[4];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun66247_ip = 20;
                    continue _fun66247
                }
            case 18:
                var2 = {};
            case 20:
                var10 = var2.location;
                var9 = var2.analyticsLocations;
                if (!(var18 !== var13)) {
                    _fun66247_ip = 328;
                    continue _fun66247
                }
            case 38:
                var3 = _closure1_slot8;
                var2 = var3.getVoiceChannelId;
                var4 = var2.bind(var3)();
                var7 = null;
                var2 = var7 != var4;
                var8 = null;
                if (!var2) {
                    _fun66247_ip = 80;
                    continue _fun66247
                }
            case 66:
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var8 = var2.bind(var3)(var4);
            case 80:
                var19 = var1[var18];
                var16 = var1[var13];
                var2 = _closure1_slot6;
                var1 = var2.getMediaEngine;
                var2 = var1.bind(var2)();
                var1 = var2.getAudioSubsystem;
                var6 = var1.bind(var2)();
                var2 = _closure1_slot6;
                var1 = var2.getMediaEngine;
                var2 = var1.bind(var2)();
                var1 = var2.getAudioLayer;
                var5 = var1.bind(var2)();
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot11;
                var2 = var1.MEDIA_DEVICE_CHANGED;
                var1 = {};
                var17 = _closure1_slot4;
                var14 = var17.getCertifiedDeviceName;
                var20 = var7 != var19;
                var15 = '';
                var12 = var15;
                if (!var20) {
                    _fun66247_ip = 202;
                    continue _fun66247
                }
            case 197:
                var12 = var19.name;
            case 202:
                var12 = var14.bind(var17)(var18, var12);
                var1.device_from_name = var12;
                var14 = _closure1_slot4;
                var12 = var14.getCertifiedDeviceName;
                var17 = var7 != var16;
                if (!var17) {
                    _fun66247_ip = 237;
                    continue _fun66247
                }
            case 232:
                var15 = var16.name;
            case 237:
                var12 = var12.bind(var14)(var13, var15);
                var1.device_to_name = var12;
                var12 = arg3;
                var1.device_type = var12;
                var12 = _closure1_slot4;
                var11 = var12.isCertified;
                var11 = var11.bind(var12)(var13);
                var1.device_is_certified = var11;
                var1.location = var10;
                var1.location_stack = var9;
                var9 = var7 == var8;
                var7 = undefined;
                if (var9) {
                    _fun66247_ip = 307;
                    continue _fun66247
                }
            case 302:
                var7 = var8.type;
            case 307:
                var1.voice_channel_type = var7;
                var1.audio_subsystem = var6;
                var1.audio_layer = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 328:
                return var0;
        }
    };
    var _closure1_slot19 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot9 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var7 = var1.InputModes;
    var _closure1_slot10 = var7;
    var1 = var1.AnalyticEvents;
    var _closure1_slot11 = var1;
    var1 = 8;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.SoundOutputChannel;
    var1 = 9;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.MediaEngineContextTypes;
    var _closure1_slot12 = var1;
    var1 = 10;
    var1 = var5[var1];
    var8 = var6.bind(var0)(var1);
    var1 = var8.prototype;
    var7 = Object.create(var1, {
        constructor: {
            value: var8
        }
    });
    var11 = 'AudioActionCreators';
    var12 = var7;
    var1 = new var12[var8](var11, var10);
    var1 = var1 instanceof Object ? var1 : var7;
    var _closure1_slot13 = var1;
    var1 = 12;
    var1 = var5[var1];
    var7 = var6.bind(var0)(var1);
    var6 = function(arg0, arg1, arg2) { // Environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot11;
        var2 = var1.USER_VOLUME_SETTING_UPDATED;
        var1 = {};
        var6 = arg0;
        var1.target_user_id = var6;
        var6 = arg1;
        var1.context = var6;
        var6 = arg2;
        var1.volume = var6;
        var6 = _closure1_slot7;
        var5 = var6.getMediaSessionId;
        var5 = var5.bind(var6)();
        var1.media_session_id = var5;
        var5 = var6.getRTCConnectionId;
        var5 = var5.bind(var6)();
        var1.rtc_connection_id = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var1 = 300;
    var1 = var7.bind(var0)(var6, var1);
    var _closure1_slot14 = var1;
    var6 = {};
    var1 = function() { // Original name: isNotSupported, environment: var3
        var0 = false;
        return var0;
    };
    var6.isNotSupported = var1;
    var1 = function() { // Original name: enable, environment: var3
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.resolve;
        var0 = true;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.enable = var1;
    var1 = function() { // Original name: trackToggleSelfMute, environment: var3
        var0 = undefined;
        return var0;
    };
    var6.trackToggleSelfMute = var1;
    var1 = function() { // Original name: trackToggleSelfDeaf, environment: var3
        var0 = undefined;
        return var0;
    };
    var6.trackToggleSelfDeaf = var1;
    var1 = var6.isNotSupported;
    var _closure1_slot15 = var1;
    var1 = var6.trackToggleSelfMute;
    var _closure1_slot16 = var1;
    var1 = var6.trackToggleSelfDeaf;
    var _closure1_slot17 = var1;
    var1 = {};
    var6 = var6.enable;
    var1.enable = var6;
    var6 = function() { // Original name: toggleSelfMute, environment: var3
        _fun66253: for (var _fun66253_ip = 0;;) switch (_fun66253_ip) {
            case 0:
                var0 = arguments[0];
                var7 = this;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun66253_ip = 14;
                    continue _fun66253
                }
            case 12:
                var0 = {};
            case 14:
                var6 = var0.context;
                if (!(var6 === var3)) {
                    _fun66253_ip = 36;
                    continue _fun66253
                }
            case 23:
                var1 = _closure1_slot12;
                var6 = var1.DEFAULT;
            case 36:
                var5 = var0.syncRemote;
                if (!(var5 === var3)) {
                    _fun66253_ip = 48;
                    continue _fun66253
                }
            case 46:
                var5 = true;
            case 48:
                var9 = var0.usedKeybind;
                if (!(var9 === var3)) {
                    _fun66253_ip = 60;
                    continue _fun66253
                }
            case 58:
                var9 = false;
            case 60:
                var4 = var0.playSoundEffect;
                if (!(var4 === var3)) {
                    _fun66253_ip = 72;
                    continue _fun66253
                }
            case 70:
                var4 = true;
            case 72:
                var8 = var0.location;
                var0 = _closure1_slot15;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun66253_ip = 278;
                    continue _fun66253
                }
            case 94:
                var2 = _closure1_slot16;
                var0 = {};
                var0.usedKeybind = var9;
                var0.location = var8;
                var0 = var2.bind(var3)(var0);
                if (!var4) {
                    _fun66253_ip = 134;
                    continue _fun66253
                }
            case 117:
                var2 = _closure1_slot6;
                var0 = var2.hasActiveCallKitCall;
                var0 = var0.bind(var2)();
                var4 = !var0;
            case 134:
                var2 = _closure1_slot9;
                var0 = var2.getCurrentUser;
                var8 = var0.bind(var2)();
                var0 = null;
                var0 = var0 != var8;
                if (!var0) {
                    _fun66253_ip = 166;
                    continue _fun66253
                }
            case 156:
                var2 = var8.isStaff;
                var0 = var2.bind(var8)();
            case 166:
                if (!var0) {
                    _fun66253_ip = 190;
                    continue _fun66253
                }
            case 169:
                var8 = _closure1_slot13;
                var2 = var8.info;
                var0 = 'Toggling self mute';
                var0 = var2.bind(var8)(var0);
            case 190:
                var2 = _closure1_slot6;
                var0 = var2.isEnabled;
                var0 = var0.bind(var2)();
                if (var0) {
                    _fun66253_ip = 222;
                    continue _fun66253
                }
            case 207:
                var2 = var7.enable;
                var0 = true;
                var0 = var2.bind(var7)(var0);
                _fun66253_ip = 276;
                continue _fun66253;
            case 222:
                var2 = _closure1_slot1;
                var7 = _closure1_slot2;
                var1 = 13;
                var1 = var7[var1];
                var3 = var2.bind(var3)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var7 = 'AUDIO_TOGGLE_SELF_MUTE';
                var1.type = var7;
                var1.context = var6;
                var1.syncRemote = var5;
                var1.playSoundEffect = var4;
                var0 = var2.bind(var3)(var1);
            case 276:
                _fun66253_ip = 296;
                continue _fun66253;
            case 278:
                var1 = global;
                var2 = var1.Promise;
                var1 = var2.resolve;
                var0 = var1.bind(var2)();
            case 296:
                return var0;
        }
    };
    var1.toggleSelfMute = var6;
    var6 = function(arg0, arg1) { // Original name: setSelfMute, environment: var3
        _fun66254: for (var _fun66254_ip = 0;;) switch (_fun66254_ip) {
            case 0:
                var5 = arg1;
                var4 = arguments[2];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun66254_ip = 14;
                    continue _fun66254
                }
            case 12:
                var4 = true;
            case 14:
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66254_ip = 167;
                    continue _fun66254
                }
            case 31:
                if (!var4) {
                    _fun66254_ip = 51;
                    continue _fun66254
                }
            case 34:
                var3 = _closure1_slot6;
                var2 = var3.hasActiveCallKitCall;
                var2 = var2.bind(var3)();
                var4 = !var2;
            case 51:
                var3 = _closure1_slot9;
                var2 = var3.getCurrentUser;
                var6 = var2.bind(var3)();
                var2 = null;
                var2 = var2 != var6;
                if (!var2) {
                    _fun66254_ip = 83;
                    continue _fun66254
                }
            case 73:
                var3 = var6.isStaff;
                var2 = var3.bind(var6)();
            case 83:
                if (!var2) {
                    _fun66254_ip = 108;
                    continue _fun66254
                }
            case 86:
                var6 = _closure1_slot13;
                var3 = var6.info;
                var2 = 'Setting self mute';
                var2 = var3.bind(var6)(var2, var5);
            case 108:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'AUDIO_SET_SELF_MUTE';
                var1.type = var6;
                var6 = arg0;
                var1.context = var6;
                var1.mute = var5;
                var1.playSoundEffect = var4;
                var1 = var2.bind(var3)(var1);
            case 167:
                return var0;
        }
    };
    var1.setSelfMute = var6;
    var6 = function(arg0) { // Original name: setTemporarySelfMute, environment: var3
        _fun66255: for (var _fun66255_ip = 0;;) switch (_fun66255_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66255_ip = 123;
                    continue _fun66255
                }
            case 19:
                var3 = _closure1_slot9;
                var2 = var3.getCurrentUser;
                var5 = var2.bind(var3)();
                var2 = null;
                var2 = var2 != var5;
                if (!var2) {
                    _fun66255_ip = 51;
                    continue _fun66255
                }
            case 41:
                var3 = var5.isStaff;
                var2 = var3.bind(var5)();
            case 51:
                if (!var2) {
                    _fun66255_ip = 76;
                    continue _fun66255
                }
            case 54:
                var5 = _closure1_slot13;
                var3 = var5.info;
                var2 = 'Setting temporary self mute';
                var2 = var3.bind(var5)(var2, var4);
            case 76:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'AUDIO_SET_TEMPORARY_SELF_MUTE';
                var1.type = var5;
                var1.mute = var4;
                var1 = var2.bind(var3)(var1);
            case 123:
                return var0;
        }
    };
    var1.setTemporarySelfMute = var6;
    var6 = function() { // Original name: toggleSelfDeaf, environment: var3
        _fun66256: for (var _fun66256_ip = 0;;) switch (_fun66256_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66256_ip = 11;
                    continue _fun66256
                }
            case 9:
                var1 = {};
            case 11:
                var5 = var1.context;
                if (!(var5 === var0)) {
                    _fun66256_ip = 33;
                    continue _fun66256
                }
            case 20:
                var2 = _closure1_slot12;
                var5 = var2.DEFAULT;
            case 33:
                var4 = var1.syncRemote;
                if (!(var4 === var0)) {
                    _fun66256_ip = 45;
                    continue _fun66256
                }
            case 43:
                var4 = true;
            case 45:
                var7 = var1.usedKeybind;
                if (!(var7 === var0)) {
                    _fun66256_ip = 57;
                    continue _fun66256
                }
            case 55:
                var7 = false;
            case 57:
                var6 = var1.location;
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66256_ip = 145;
                    continue _fun66256
                }
            case 76:
                var3 = _closure1_slot17;
                var2 = {};
                var2.usedKeybind = var7;
                var2.location = var6;
                var2 = var3.bind(var0)(var2);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'AUDIO_TOGGLE_SELF_DEAF';
                var1.type = var6;
                var1.context = var5;
                var1.syncRemote = var4;
                var1 = var2.bind(var3)(var1);
            case 145:
                return var0;
        }
    };
    var1.toggleSelfDeaf = var6;
    var6 = function(arg0) { // Original name: toggleLocalMute, environment: var3
        _fun66257: for (var _fun66257_ip = 0;;) switch (_fun66257_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun66257_ip = 22;
                    continue _fun66257
                }
            case 9:
                var1 = _closure1_slot12;
                var4 = var1.DEFAULT;
            case 22:
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66257_ip = 87;
                    continue _fun66257
                }
            case 36:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'AUDIO_TOGGLE_LOCAL_MUTE';
                var1.type = var5;
                var1.context = var4;
                var4 = arg0;
                var1.userId = var4;
                var1 = var2.bind(var3)(var1);
            case 87:
                return var0;
        }
    };
    var1.toggleLocalMute = var6;
    var6 = function(arg0) { // Original name: toggleLocalSoundboardMute, environment: var3
        _fun66258: for (var _fun66258_ip = 0;;) switch (_fun66258_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun66258_ip = 22;
                    continue _fun66258
                }
            case 9:
                var1 = _closure1_slot12;
                var4 = var1.DEFAULT;
            case 22:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'AUDIO_TOGGLE_LOCAL_SOUNDBOARD_MUTE';
                var1.type = var5;
                var1.context = var4;
                var4 = arg0;
                var1.userId = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.toggleLocalSoundboardMute = var6;
    var6 = function(arg0, arg1) { // Original name: setDisableLocalVideo, environment: var3
        _fun66259: for (var _fun66259_ip = 0;;) switch (_fun66259_ip) {
            case 0:
                var6 = arguments[2];
                var5 = arguments[3];
                var4 = arguments[4];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun66259_ip = 28;
                    continue _fun66259
                }
            case 15:
                var1 = _closure1_slot12;
                var6 = var1.DEFAULT;
            case 28:
                if (!(var5 === var0)) {
                    _fun66259_ip = 34;
                    continue _fun66259
                }
            case 32:
                var5 = true;
            case 34:
                if (!(var4 === var0)) {
                    _fun66259_ip = 40;
                    continue _fun66259
                }
            case 38:
                var4 = false;
            case 40:
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66259_ip = 123;
                    continue _fun66259
                }
            case 54:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var7 = 'AUDIO_SET_LOCAL_VIDEO_DISABLED';
                var1.type = var7;
                var1.context = var6;
                var6 = arg0;
                var1.userId = var6;
                var6 = arg1;
                var1.videoToggleState = var6;
                var1.persist = var5;
                var1.isAutomatic = var4;
                var1 = var2.bind(var3)(var1);
            case 123:
                return var0;
        }
    };
    var1.setDisableLocalVideo = var6;
    var6 = function(arg0, arg1) { // Original name: setLocalVolume, environment: var3
        _fun66260: for (var _fun66260_ip = 0;;) switch (_fun66260_ip) {
            case 0:
                var4 = arg0;
                var3 = arguments[2];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun66260_ip = 25;
                    continue _fun66260
                }
            case 12:
                var1 = _closure1_slot12;
                var3 = var1.DEFAULT;
            case 25:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var2 = 14;
                var2 = var7[var2];
                var6 = var5.bind(var0)(var2);
                var5 = var6.snapVolumeToDefault;
                var2 = arg1;
                var2 = var5.bind(var6)(var2, var3);
                var6 = _closure1_slot1;
                var5 = 13;
                var5 = var7[var5];
                var7 = var6.bind(var0)(var5);
                var6 = var7.dispatch;
                var5 = {};
                var8 = 'AUDIO_SET_LOCAL_VOLUME';
                var5.type = var8;
                var5.context = var3;
                var5.userId = var4;
                var5.volume = var2;
                var5 = var6.bind(var7)(var5);
                var1 = _closure1_slot14;
                var1 = var1.bind(var0)(var4, var3, var2);
                return var0;
        }
    };
    var1.setLocalVolume = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: setLocalPan, environment: var3
        _fun66261: for (var _fun66261_ip = 0;;) switch (_fun66261_ip) {
            case 0:
                var4 = arguments[3];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun66261_ip = 22;
                    continue _fun66261
                }
            case 9:
                var1 = _closure1_slot12;
                var4 = var1.DEFAULT;
            case 22:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'AUDIO_SET_LOCAL_PAN';
                var1.type = var5;
                var1.context = var4;
                var4 = arg0;
                var1.userId = var4;
                var4 = arg1;
                var1.left = var4;
                var4 = arg2;
                var1.right = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.setLocalPan = var6;
    var6 = function(arg0) { // Original name: setMode, environment: var3
        _fun66262: for (var _fun66262_ip = 0;;) switch (_fun66262_ip) {
            case 0:
                var11 = arg0;
                var6 = arguments[1];
                var8 = arguments[2];
                var1 = arguments[3];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun66262_ip = 20;
                    continue _fun66262
                }
            case 18:
                var6 = {};
            case 20:
                if (!(var8 === var0)) {
                    _fun66262_ip = 37;
                    continue _fun66262
                }
            case 24:
                var2 = _closure1_slot12;
                var8 = var2.DEFAULT;
            case 37:
                if (!(var1 === var0)) {
                    _fun66262_ip = 43;
                    continue _fun66262
                }
            case 41:
                var1 = {};
            case 43:
                var10 = var1.analyticsLocations;
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66262_ip = 615;
                    continue _fun66262
                }
            case 66:
                var3 = _closure1_slot6;
                var2 = var3.getMode;
                var2 = var2.bind(var3)();
                var4 = _closure1_slot6;
                var3 = var4.getModeOptions;
                var7 = var3.bind(var4)(var8);
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var3 = 13;
                var3 = var5[var3];
                var5 = var4.bind(var0)(var3);
                var4 = var5.dispatch;
                var3 = {};
                var9 = 'AUDIO_SET_MODE';
                var3.type = var9;
                var3.context = var8;
                var3.mode = var11;
                var8 = {};
                var17 = var8;
                var16 = var7;
                var9 = copyDataProperties(var17, var16);
                var17 = var8;
                var16 = var6;
                var9 = copyDataProperties(var17, var16);
                var3.options = var8;
                var3 = var4.bind(var5)(var3);
                if (!(var11 === var2)) {
                    _fun66262_ip = 434;
                    continue _fun66262
                }
            case 176:
                var2 = _closure1_slot10;
                var2 = var2.VOICE_ACTIVITY;
                if (!(var11 === var2)) {
                    _fun66262_ip = 615;
                    continue _fun66262
                }
            case 193:
                if (!(var7 !== var6)) {
                    _fun66262_ip = 615;
                    continue _fun66262
                }
            case 200:
                var3 = _closure1_slot6;
                var2 = var3.getMediaEngine;
                var3 = var2.bind(var3)();
                var2 = var3.getAudioSubsystem;
                var9 = var2.bind(var3)();
                var3 = _closure1_slot6;
                var2 = var3.getMediaEngine;
                var3 = var2.bind(var3)();
                var2 = var3.getAudioLayer;
                var8 = var2.bind(var3)();
                var3 = _closure1_slot8;
                var2 = var3.getVoiceChannelId;
                var4 = var2.bind(var3)();
                var13 = null;
                var2 = var13 != var4;
                var14 = null;
                if (!var2) {
                    _fun66262_ip = 287;
                    continue _fun66262
                }
            case 273:
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var14 = var2.bind(var3)(var4);
            case 287:
                var2 = _closure1_slot18;
                var12 = var2.bind(var0)();
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var5 = var3.bind(var0)(var2);
                var4 = var5.track;
                var2 = _closure1_slot11;
                var3 = var2.VOICE_ACTIVITY_THRESHOLD_CHANGED;
                var2 = {};
                var2.location_stack = var10;
                var15 = var13 == var14;
                var13 = undefined;
                if (var15) {
                    _fun66262_ip = 351;
                    continue _fun66262
                }
            case 346:
                var13 = var14.type;
            case 351:
                var2.voice_channel_type = var13;
                var2.input_device_name = var12;
                var2.audio_subsystem = var9;
                var2.audio_layer = var8;
                var8 = var7.threshold;
                var2.old_threshold = var8;
                var8 = var6.threshold;
                var2.new_threshold = var8;
                var7 = var7.autoThreshold;
                var2.old_auto_threshold = var7;
                var6 = var6.autoThreshold;
                var2.new_auto_threshold = var6;
                var2 = var4.bind(var5)(var3, var2);
                _fun66262_ip = 615;
                continue _fun66262;
            case 434:
                var3 = _closure1_slot6;
                var2 = var3.getMediaEngine;
                var3 = var2.bind(var3)();
                var2 = var3.getAudioSubsystem;
                var6 = var2.bind(var3)();
                var3 = _closure1_slot6;
                var2 = var3.getMediaEngine;
                var3 = var2.bind(var3)();
                var2 = var3.getAudioLayer;
                var5 = var2.bind(var3)();
                var3 = _closure1_slot8;
                var2 = var3.getVoiceChannelId;
                var4 = var2.bind(var3)();
                var8 = null;
                var2 = var8 != var4;
                var9 = null;
                if (!var2) {
                    _fun66262_ip = 521;
                    continue _fun66262
                }
            case 507:
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var9 = var2.bind(var3)(var4);
            case 521:
                var2 = _closure1_slot18;
                var7 = var2.bind(var0)();
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot11;
                var2 = var1.VOICE_ACTIVATION_MODE_CHANGED;
                var1 = {};
                var1.mode = var11;
                var1.location_stack = var10;
                var10 = var8 == var9;
                var8 = undefined;
                if (var10) {
                    _fun66262_ip = 589;
                    continue _fun66262
                }
            case 584:
                var8 = var9.type;
            case 589:
                var1.voice_channel_type = var8;
                var1.input_device_name = var7;
                var1.audio_subsystem = var6;
                var1.audio_layer = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 615:
                return var0;
        }
    };
    var1.setMode = var6;
    var6 = function(arg0, arg1) { // Original name: setBypassSystemInputProcessing, environment: var3
        _fun66263: for (var _fun66263_ip = 0;;) switch (_fun66263_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66263_ip = 73;
                    continue _fun66263
                }
            case 16:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'AUDIO_SET_BYPASS_SYSTEM_INPUT_PROCESSING';
                var1.type = var4;
                var4 = arg0;
                var1.bypassEnabled = var4;
                var4 = arg1;
                var1.location = var4;
                var1 = var2.bind(var3)(var1);
            case 73:
                return var0;
        }
    };
    var1.setBypassSystemInputProcessing = var6;
    var6 = function(arg0) { // Original name: setInputVolume, environment: var3
        _fun66264: for (var _fun66264_ip = 0;;) switch (_fun66264_ip) {
            case 0:
                var8 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66264_ip = 14;
                    continue _fun66264
                }
            case 12:
                var1 = {};
            case 14:
                var7 = var1.analyticsLocations;
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66264_ip = 195;
                    continue _fun66264
                }
            case 37:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 13;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'AUDIO_SET_INPUT_VOLUME';
                var2.type = var5;
                var2.volume = var8;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot8;
                var2 = var3.getVoiceChannelId;
                var4 = var2.bind(var3)();
                var5 = null;
                var2 = var5 != var4;
                var6 = null;
                if (!var2) {
                    _fun66264_ip = 123;
                    continue _fun66264
                }
            case 109:
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var6 = var2.bind(var3)(var4);
            case 123:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot11;
                var2 = var1.MEDIA_INPUT_VOLUME_CHANGED;
                var1 = {};
                var1.volume = var8;
                var1.location_stack = var7;
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun66264_ip = 184;
                    continue _fun66264
                }
            case 179:
                var5 = var6.type;
            case 184:
                var1.voice_channel_type = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 195:
                return var0;
        }
    };
    var1.setInputVolume = var6;
    var6 = function(arg0) { // Original name: setOutputVolume, environment: var3
        _fun66265: for (var _fun66265_ip = 0;;) switch (_fun66265_ip) {
            case 0:
                var8 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66265_ip = 14;
                    continue _fun66265
                }
            case 12:
                var1 = {};
            case 14:
                var7 = var1.analyticsLocations;
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66265_ip = 193;
                    continue _fun66265
                }
            case 37:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 13;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'AUDIO_SET_OUTPUT_VOLUME';
                var2.type = var5;
                var2.volume = var8;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot8;
                var2 = var3.getVoiceChannelId;
                var4 = var2.bind(var3)();
                var5 = null;
                var2 = var5 != var4;
                var6 = null;
                if (!var2) {
                    _fun66265_ip = 121;
                    continue _fun66265
                }
            case 107:
                var3 = _closure1_slot5;
                var2 = var3.getChannel;
                var6 = var2.bind(var3)(var4);
            case 121:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 11;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot11;
                var2 = var1.MEDIA_OUTPUT_VOLUME_CHANGED;
                var1 = {};
                var1.volume = var8;
                var1.location_stack = var7;
                var7 = var5 == var6;
                var5 = undefined;
                if (var7) {
                    _fun66265_ip = 182;
                    continue _fun66265
                }
            case 177:
                var5 = var6.type;
            case 182:
                var1.voice_channel_type = var5;
                var1 = var3.bind(var4)(var2, var1);
            case 193:
                return var0;
        }
    };
    var1.setOutputVolume = var6;
    var6 = function(arg0) { // Original name: setInputDevice, environment: var3
        _fun66266: for (var _fun66266_ip = 0;;) switch (_fun66266_ip) {
            case 0:
                var5 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66266_ip = 14;
                    continue _fun66266
                }
            case 12:
                var1 = {};
            case 14:
                var8 = var1.location;
                var2 = var1.analyticsLocations;
                var3 = _closure1_slot15;
                var3 = var3.bind(var0)();
                if (var3) {
                    _fun66266_ip = 165;
                    continue _fun66266
                }
            case 42:
                var4 = _closure1_slot6;
                var3 = var4.getInputDeviceId;
                var4 = var3.bind(var4)();
                var3 = null;
                if (!(var3 == var8)) {
                    _fun66266_ip = 66;
                    continue _fun66266
                }
            case 62:
                if (!(var3 != var2)) {
                    _fun66266_ip = 116;
                    continue _fun66266
                }
            case 66:
                var7 = _closure1_slot19;
                var6 = _closure1_slot6;
                var3 = var6.getInputDevices;
                var13 = var3.bind(var6)();
                var3 = {};
                var3.location = var8;
                var3.analyticsLocations = var2;
                var10 = 'Audio Input';
                var14 = undefined;
                var12 = var4;
                var11 = var5;
                var9 = var3;
                var2 = var14[var7](var13, var12, var11, var10, var9, var8);
            case 116:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'AUDIO_SET_INPUT_DEVICE';
                var1.type = var6;
                var1.id = var5;
                var1.oldId = var4;
                var1 = var2.bind(var3)(var1);
            case 165:
                return var0;
        }
    };
    var1.setInputDevice = var6;
    var6 = function(arg0) { // Original name: setOutputDevice, environment: var3
        _fun66267: for (var _fun66267_ip = 0;;) switch (_fun66267_ip) {
            case 0:
                var5 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66267_ip = 14;
                    continue _fun66267
                }
            case 12:
                var1 = {};
            case 14:
                var8 = var1.location;
                var2 = var1.analyticsLocations;
                var3 = _closure1_slot15;
                var3 = var3.bind(var0)();
                if (var3) {
                    _fun66267_ip = 165;
                    continue _fun66267
                }
            case 42:
                var4 = _closure1_slot6;
                var3 = var4.getOutputDeviceId;
                var4 = var3.bind(var4)();
                var3 = null;
                if (!(var3 == var8)) {
                    _fun66267_ip = 66;
                    continue _fun66267
                }
            case 62:
                if (!(var3 != var2)) {
                    _fun66267_ip = 116;
                    continue _fun66267
                }
            case 66:
                var7 = _closure1_slot19;
                var6 = _closure1_slot6;
                var3 = var6.getOutputDevices;
                var13 = var3.bind(var6)();
                var3 = {};
                var3.location = var8;
                var3.analyticsLocations = var2;
                var10 = 'Audio Output';
                var14 = undefined;
                var12 = var4;
                var11 = var5;
                var9 = var3;
                var2 = var14[var7](var13, var12, var11, var10, var9, var8);
            case 116:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'AUDIO_SET_OUTPUT_DEVICE';
                var1.type = var6;
                var1.id = var5;
                var1.oldId = var4;
                var1 = var2.bind(var3)(var1);
            case 165:
                return var0;
        }
    };
    var1.setOutputDevice = var6;
    var6 = function(arg0) { // Original name: setVideoDevice, environment: var3
        _fun66268: for (var _fun66268_ip = 0;;) switch (_fun66268_ip) {
            case 0:
                var5 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66268_ip = 14;
                    continue _fun66268
                }
            case 12:
                var1 = {};
            case 14:
                var8 = var1.location;
                var2 = var1.analyticsLocations;
                var3 = _closure1_slot15;
                var3 = var3.bind(var0)();
                if (var3) {
                    _fun66268_ip = 160;
                    continue _fun66268
                }
            case 39:
                var4 = _closure1_slot6;
                var3 = var4.getVideoDeviceId;
                var4 = var3.bind(var4)();
                var3 = null;
                if (!(var3 == var8)) {
                    _fun66268_ip = 63;
                    continue _fun66268
                }
            case 59:
                if (!(var3 != var2)) {
                    _fun66268_ip = 111;
                    continue _fun66268
                }
            case 63:
                var7 = _closure1_slot19;
                var6 = _closure1_slot6;
                var3 = var6.getVideoDevices;
                var13 = var3.bind(var6)();
                var3 = {};
                var3.location = var8;
                var3.analyticsLocations = var2;
                var10 = 'Video';
                var14 = undefined;
                var12 = var4;
                var11 = var5;
                var9 = var3;
                var2 = var14[var7](var13, var12, var11, var10, var9, var8);
            case 111:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'MEDIA_ENGINE_SET_VIDEO_DEVICE';
                var1.type = var6;
                var1.id = var5;
                var1.oldId = var4;
                var1 = var2.bind(var3)(var1);
            case 160:
                return var0;
        }
    };
    var1.setVideoDevice = var6;
    var6 = function(arg0) { // Original name: setActiveInputProfile, environment: var3
        _fun66269: for (var _fun66269_ip = 0;;) switch (_fun66269_ip) {
            case 0:
                var4 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66269_ip = 14;
                    continue _fun66269
                }
            case 12:
                var1 = {};
            case 14:
                var6 = var1.analyticsLocations;
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66269_ip = 150;
                    continue _fun66269
                }
            case 34:
                var3 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 15;
                var2 = var5[var2];
                var5 = var3.bind(var0)(var2);
                var3 = _closure1_slot6;
                var2 = var3.getActiveInputProfile;
                var2 = var2.bind(var3)();
                var3 = null;
                var7 = var3 != var2;
                var3 = undefined;
                if (!var7) {
                    _fun66269_ip = 82;
                    continue _fun66269
                }
            case 79:
                var3 = var2;
            case 82:
                var11 = 'active_input_profile';
                var12 = undefined;
                var10 = var4;
                var9 = var3;
                var8 = var6;
                var2 = var12[var5](var11, var10, var9, var8, var7);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'AUDIO_SET_ACTIVE_INPUT_PROFILE';
                var1.type = var5;
                var1.inputProfile = var4;
                var1 = var2.bind(var3)(var1);
            case 150:
                return var0;
        }
    };
    var1.setActiveInputProfile = var6;
    var6 = function(arg0, arg1) { // Original name: setEchoCancellation, environment: var3
        _fun66270: for (var _fun66270_ip = 0;;) switch (_fun66270_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66270_ip = 72;
                    continue _fun66270
                }
            case 16:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'AUDIO_SET_ECHO_CANCELLATION';
                var1.type = var4;
                var4 = arg0;
                var1.enabled = var4;
                var4 = arg1;
                var1.location = var4;
                var1 = var2.bind(var3)(var1);
            case 72:
                return var0;
        }
    };
    var1.setEchoCancellation = var6;
    var6 = function(arg0) { // Original name: setSidechainCompression, environment: var3
        _fun66271: for (var _fun66271_ip = 0;;) switch (_fun66271_ip) {
            case 0:
                var4 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66271_ip = 14;
                    continue _fun66271
                }
            case 12:
                var1 = {};
            case 14:
                var7 = var1.analyticsLocations;
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66271_ip = 124;
                    continue _fun66271
                }
            case 34:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 15;
                var5 = var3[var5];
                var6 = var2.bind(var0)(var5);
                var5 = _closure1_slot6;
                var1 = var5.getSidechainCompression;
                var9 = var1.bind(var5)();
                var11 = 'stream_attenuation_enabled';
                var12 = undefined;
                var10 = var4;
                var8 = var7;
                var1 = var12[var6](var11, var10, var9, var8, var7);
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'AUDIO_SET_SIDECHAIN_COMPRESSION';
                var1.type = var5;
                var1.enabled = var4;
                var1 = var2.bind(var3)(var1);
            case 124:
                return var0;
        }
    };
    var1.setSidechainCompression = var6;
    var6 = function(arg0) { // Original name: setSidechainCompressionStrength, environment: var3
        _fun66272: for (var _fun66272_ip = 0;;) switch (_fun66272_ip) {
            case 0:
                var4 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66272_ip = 14;
                    continue _fun66272
                }
            case 12:
                var1 = {};
            case 14:
                var7 = var1.analyticsLocations;
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66272_ip = 127;
                    continue _fun66272
                }
            case 34:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 15;
                var5 = var3[var5];
                var6 = var2.bind(var0)(var5);
                var5 = _closure1_slot6;
                var1 = var5.getSidechainCompressionStrength;
                var9 = var1.bind(var5)();
                var11 = 'stream_attenuation_strength';
                var12 = undefined;
                var10 = var4;
                var8 = var7;
                var1 = var12[var6](var11, var10, var9, var8, var7);
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'AUDIO_SET_SIDECHAIN_COMPRESSION_STRENGTH';
                var1.type = var5;
                var1.strength = var4;
                var1 = var2.bind(var3)(var1);
            case 127:
                return var0;
        }
    };
    var1.setSidechainCompressionStrength = var6;
    var6 = function(arg0, arg1) { // Original name: setLoopback, environment: var3
        _fun66273: for (var _fun66273_ip = 0;;) switch (_fun66273_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66273_ip = 73;
                    continue _fun66273
                }
            case 16:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'AUDIO_SET_LOOPBACK';
                var1.type = var4;
                var4 = arg0;
                var1.loopbackReason = var4;
                var4 = arg1;
                var1.enabled = var4;
                var1 = var2.bind(var3)(var1);
            case 73:
                return var0;
        }
    };
    var1.setLoopback = var6;
    var6 = function(arg0, arg1) { // Original name: setNoiseSuppression, environment: var3
        _fun66274: for (var _fun66274_ip = 0;;) switch (_fun66274_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66274_ip = 72;
                    continue _fun66274
                }
            case 16:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'AUDIO_SET_NOISE_SUPPRESSION';
                var1.type = var4;
                var4 = arg0;
                var1.enabled = var4;
                var4 = arg1;
                var1.location = var4;
                var1 = var2.bind(var3)(var1);
            case 72:
                return var0;
        }
    };
    var1.setNoiseSuppression = var6;
    var6 = function(arg0, arg1) { // Original name: setNoiseCancellation, environment: var3
        _fun66275: for (var _fun66275_ip = 0;;) switch (_fun66275_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66275_ip = 112;
                    continue _fun66275
                }
            case 22:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var6 = var3[var1];
                var8 = var2.bind(var0)(var6);
                var7 = var8.dispatch;
                var6 = {};
                var9 = 'AUDIO_SET_NOISE_CANCELLATION';
                var6.type = var9;
                var6.enabled = var5;
                var6.location = var4;
                var6 = var7.bind(var8)(var6);
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var6 = 'AUDIO_SET_NOISE_SUPPRESSION';
                var1.type = var6;
                var5 = !var5;
                var1.enabled = var5;
                var1.location = var4;
                var1 = var2.bind(var3)(var1);
            case 112:
                return var0;
        }
    };
    var1.setNoiseCancellation = var6;
    var6 = function(arg0, arg1) { // Original name: setAutomaticGainControl, environment: var3
        _fun66276: for (var _fun66276_ip = 0;;) switch (_fun66276_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66276_ip = 72;
                    continue _fun66276
                }
            case 16:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'AUDIO_SET_AUTOMATIC_GAIN_CONTROL';
                var1.type = var4;
                var4 = arg0;
                var1.enabled = var4;
                var4 = arg1;
                var1.location = var4;
                var1 = var2.bind(var3)(var1);
            case 72:
                return var0;
        }
    };
    var1.setAutomaticGainControl = var6;
    var6 = function(arg0, arg1, arg2) { // Original name: setAttenuation, environment: var3
        _fun66277: for (var _fun66277_ip = 0;;) switch (_fun66277_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var4 = arg2;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66277_ip = 248;
                    continue _fun66277
                }
            case 28:
                var3 = _closure1_slot6;
                var2 = var3.getAttenuation;
                var7 = var2.bind(var3)();
                var3 = _closure1_slot6;
                var2 = var3.getAttenuateWhileSpeakingSelf;
                var8 = var2.bind(var3)();
                var3 = _closure1_slot6;
                var2 = var3.getAttenuateWhileSpeakingOthers;
                var9 = var2.bind(var3)();
                if (!(var7 === var6)) {
                    _fun66277_ip = 158;
                    continue _fun66277
                }
            case 80:
                if (!(var8 === var5)) {
                    _fun66277_ip = 123;
                    continue _fun66277
                }
            case 84:
                if (!(var9 !== var4)) {
                    _fun66277_ip = 191;
                    continue _fun66277
                }
            case 88:
                var3 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 15;
                var2 = var10[var2];
                var3 = var3.bind(var0)(var2);
                var2 = 'global_attenuation_for_other_speak_enabled';
                var2 = var3.bind(var0)(var2, var4, var9);
                _fun66277_ip = 191;
                continue _fun66277;
            case 123:
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 15;
                var2 = var9[var2];
                var3 = var3.bind(var0)(var2);
                var2 = 'global_attenuation_for_self_speak_enabled';
                var2 = var3.bind(var0)(var2, var5, var8);
                _fun66277_ip = 191;
                continue _fun66277;
            case 158:
                var3 = _closure1_slot1;
                var8 = _closure1_slot2;
                var2 = 15;
                var2 = var8[var2];
                var3 = var3.bind(var0)(var2);
                var2 = 'global_attenuation_strength';
                var2 = var3.bind(var0)(var2, var6, var7);
            case 191:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var7 = 'AUDIO_SET_ATTENUATION';
                var1.type = var7;
                var1.attenuation = var6;
                var1.attenuateWhileSpeakingSelf = var5;
                var1.attenuateWhileSpeakingOthers = var4;
                var1 = var2.bind(var3)(var1);
            case 248:
                return var0;
        }
    };
    var1.setAttenuation = var6;
    var6 = function(arg0) { // Original name: setQoS, environment: var3
        _fun66278: for (var _fun66278_ip = 0;;) switch (_fun66278_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66278_ip = 104;
                    continue _fun66278
                }
            case 19:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 15;
                var5 = var3[var5];
                var6 = var2.bind(var0)(var5);
                var5 = _closure1_slot6;
                var1 = var5.getQoS;
                var5 = var1.bind(var5)();
                var1 = 'quality_of_service_packets_enabled';
                var1 = var6.bind(var0)(var1, var4, var5);
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'AUDIO_SET_QOS';
                var1.type = var5;
                var1.enabled = var4;
                var1 = var2.bind(var3)(var1);
            case 104:
                return var0;
        }
    };
    var1.setQoS = var6;
    var6 = function() { // Original name: reset, environment: var3
        _fun66279: for (var _fun66279_ip = 0;;) switch (_fun66279_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66279_ip = 58;
                    continue _fun66279
                }
            case 16:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'AUDIO_RESET';
                var1.type = var4;
                var1 = var2.bind(var3)(var1);
            case 58:
                return var0;
        }
    };
    var1.reset = var6;
    var6 = function(arg0) { // Original name: setSilenceWarning, environment: var3
        _fun66280: for (var _fun66280_ip = 0;;) switch (_fun66280_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66280_ip = 104;
                    continue _fun66280
                }
            case 19:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 15;
                var5 = var3[var5];
                var6 = var2.bind(var0)(var5);
                var5 = _closure1_slot6;
                var1 = var5.getEnableSilenceWarning;
                var5 = var1.bind(var5)();
                var1 = 'silence_warning_enabled';
                var1 = var6.bind(var0)(var1, var4, var5);
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'AUDIO_SET_DISPLAY_SILENCE_WARNING';
                var1.type = var5;
                var1.enabled = var4;
                var1 = var2.bind(var3)(var1);
            case 104:
                return var0;
        }
    };
    var1.setSilenceWarning = var6;
    var6 = function(arg0) { // Original name: setDebugLogging, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun66283: for (var _fun66283_ip = 0;;) switch (_fun66283_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66283_ip = 148;
                            continue _fun66283
                        }
                    case 10:
                        var2 = _closure1_slot15;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        if (var2) {
                            _fun66283_ip = 145;
                            continue _fun66283
                        }
                    case 26:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 15;
                        var2 = var5[var2];
                        var7 = var4.bind(var1)(var2);
                        var5 = _closure2_slot0;
                        var4 = _closure1_slot6;
                        var2 = var4.getDebugLogging;
                        var4 = var2.bind(var4)();
                        var2 = 'debug_logging_enabled';
                        var2 = var7.bind(var1)(var2, var5, var4);
                        SaveGenerator(address = 84);
                    case 82:
                        return var2;
                    case 84:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun66283_ip = 142;
                            continue _fun66283
                        }
                    case 90:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 13;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'AUDIO_SET_DEBUG_LOGGING';
                        var3.type = var7;
                        var6 = _closure2_slot0;
                        var3.enabled = var6;
                        var3 = var4.bind(var5)(var3);
                        _fun66283_ip = 145;
                        continue _fun66283;
                    case 142:
                        return var2;
                    case 145:
                        return var1;
                    case 148:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.setDebugLogging = var6;
    var6 = function(arg0) { // Original name: setVideoHook, environment: var3
        _fun66284: for (var _fun66284_ip = 0;;) switch (_fun66284_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66284_ip = 106;
                    continue _fun66284
                }
            case 19:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 15;
                var5 = var3[var5];
                var6 = var2.bind(var0)(var5);
                var5 = _closure1_slot6;
                var1 = var5.getVideoHook;
                var5 = var1.bind(var5)();
                var1 = 'video_hook_enabled';
                var1 = var6.bind(var0)(var1, var4, var5);
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'MEDIA_ENGINE_SET_VIDEO_HOOK';
                var1.type = var5;
                var1.enabled = var4;
                var1 = var2.bind(var3)(var1);
            case 106:
                return var0;
        }
    };
    var1.setVideoHook = var6;
    var6 = function(arg0) { // Original name: setExperimentalSoundshare, environment: var3
        _fun66285: for (var _fun66285_ip = 0;;) switch (_fun66285_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66285_ip = 104;
                    continue _fun66285
                }
            case 19:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 15;
                var5 = var3[var5];
                var6 = var2.bind(var0)(var5);
                var5 = _closure1_slot6;
                var1 = var5.getExperimentalSoundshare;
                var5 = var1.bind(var5)();
                var1 = 'experimental_soundshare_enabled';
                var1 = var6.bind(var0)(var1, var4, var5);
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'MEDIA_ENGINE_SET_EXPERIMENTAL_SOUNDSHARE';
                var1.type = var5;
                var1.enabled = var4;
                var1 = var2.bind(var3)(var1);
            case 104:
                return var0;
        }
    };
    var1.setExperimentalSoundshare = var6;
    var6 = function(arg0) { // Original name: setUseSystemScreensharePicker, environment: var3
        _fun66286: for (var _fun66286_ip = 0;;) switch (_fun66286_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66286_ip = 106;
                    continue _fun66286
                }
            case 19:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 15;
                var5 = var3[var5];
                var6 = var2.bind(var0)(var5);
                var5 = _closure1_slot6;
                var1 = var5.getUseSystemScreensharePicker;
                var5 = var1.bind(var5)();
                var1 = 'system_screenshare_picker_enabled';
                var1 = var6.bind(var0)(var1, var4, var5);
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'MEDIA_ENGINE_SET_USE_SYSTEM_SCREENSHARE_PICKER';
                var1.type = var5;
                var1.enabled = var4;
                var1 = var2.bind(var3)(var1);
            case 106:
                return var0;
        }
    };
    var1.setUseSystemScreensharePicker = var6;
    var6 = function(arg0) { // Original name: setAudioSubsystem, environment: var3
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun66289: for (var _fun66289_ip = 0;;) switch (_fun66289_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66289_ip = 147;
                            continue _fun66289
                        }
                    case 10:
                        var2 = _closure1_slot15;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        if (var2) {
                            _fun66289_ip = 144;
                            continue _fun66289
                        }
                    case 26:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 15;
                        var2 = var5[var2];
                        var7 = var4.bind(var1)(var2);
                        var5 = _closure2_slot0;
                        var4 = _closure1_slot6;
                        var2 = var4.getAudioSubsystem;
                        var4 = var2.bind(var4)();
                        var2 = 'audio_subsystem';
                        var2 = var7.bind(var1)(var2, var5, var4);
                        SaveGenerator(address = 82);
                    case 80:
                        return var2;
                    case 82:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                        if (var4) {
                            _fun66289_ip = 141;
                            continue _fun66289
                        }
                    case 88:
                        var4 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var3 = 13;
                        var3 = var5[var3];
                        var5 = var4.bind(var1)(var3);
                        var4 = var5.dispatch;
                        var3 = {};
                        var7 = 'AUDIO_SET_SUBSYSTEM';
                        var3.type = var7;
                        var6 = _closure2_slot0;
                        var3.subsystem = var6;
                        var3 = var4.bind(var5)(var3);
                        _fun66289_ip = 144;
                        continue _fun66289;
                    case 141:
                        return var2;
                    case 144:
                        return var1;
                    case 147:
                        return var0;
                }
            };
            return var0;
        };
        var0 = var2.bind(var1)(var0);
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.setAudioSubsystem = var6;
    var6 = function(arg0) { // Original name: setVideoEnabled, environment: var3
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var0 = 16;
        var2 = var3[var0];
        var0 = undefined;
        var4 = var4.bind(var0)(var2);
        var2 = var4.applyInitialVideoBackgroundOption;
        var2 = var2.bind(var4)();
        var2 = _closure1_slot1;
        var1 = 13;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var4 = 'MEDIA_ENGINE_SET_VIDEO_ENABLED';
        var1.type = var4;
        var4 = arg0;
        var1.enabled = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var1.setVideoEnabled = var6;
    var6 = function(arg0) { // Original name: setGoLiveSource, environment: var3
        _fun66291: for (var _fun66291_ip = 0;;) switch (_fun66291_ip) {
            case 0:
                var4 = arg0;
                var2 = null;
                var3 = var2 == var4;
                var0 = undefined;
                var1 = undefined;
                if (var3) {
                    _fun66291_ip = 22;
                    continue _fun66291
                }
            case 16:
                var1 = var4.qualityOptions;
            case 22:
                if (!(var2 != var1)) {
                    _fun66291_ip = 98;
                    continue _fun66291
                }
            case 26:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 17;
                var1 = var3[var1];
                var6 = var2.bind(var0)(var1);
                var5 = var6.trackStreamSettingsUpdate;
                var1 = var4.qualityOptions;
                var3 = var1.preset;
                var1 = var4.qualityOptions;
                var2 = var1.resolution;
                var1 = var4.qualityOptions;
                var1 = var1.frameRate;
                var1 = var5.bind(var6)(var3, var2, var1);
            case 98:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE';
                var1.type = var5;
                var1.settings = var4;
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var1.setGoLiveSource = var6;
    var6 = function(arg0) { // Original name: setAecDump, environment: var3
        _fun66292: for (var _fun66292_ip = 0;;) switch (_fun66292_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66292_ip = 106;
                    continue _fun66292
                }
            case 19:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var5 = 15;
                var5 = var3[var5];
                var6 = var2.bind(var0)(var5);
                var5 = _closure1_slot6;
                var1 = var5.getAecDump;
                var5 = var1.bind(var5)();
                var1 = 'diagnostic_audio_recording_enabled';
                var1 = var6.bind(var0)(var1, var4, var5);
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var5 = 'MEDIA_ENGINE_SET_AEC_DUMP';
                var1.type = var5;
                var1.enabled = var4;
                var1 = var2.bind(var3)(var1);
            case 106:
                return var0;
        }
    };
    var1.setAecDump = var6;
    var6 = function() { // Original name: interact, environment: var3
        _fun66293: for (var _fun66293_ip = 0;;) switch (_fun66293_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66293_ip = 60;
                    continue _fun66293
                }
            case 16:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {
                    'type': 'MEDIA_ENGINE_INTERACTION_REQUIRED',
                    'required': false
                };
                var1 = var2.bind(var3)(var1);
            case 60:
                return var0;
        }
    };
    var1.interact = var6;
    var6 = function(arg0) { // Original name: setEnableHardwareMuteNotice, environment: var3
        _fun66294: for (var _fun66294_ip = 0;;) switch (_fun66294_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66294_ip = 65;
                    continue _fun66294
                }
            case 16:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'MEDIA_ENGINE_SET_ENABLE_HARDWARE_MUTE_NOTICE';
                var1.type = var4;
                var4 = arg0;
                var1.enabled = var4;
                var1 = var2.bind(var3)(var1);
            case 65:
                return var0;
        }
    };
    var1.setEnableHardwareMuteNotice = var6;
    var6 = function(arg0) { // Original name: setKrispSuppressionLevel, environment: var3
        _fun66295: for (var _fun66295_ip = 0;;) switch (_fun66295_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66295_ip = 66;
                    continue _fun66295
                }
            case 16:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 13;
                var1 = var3[var1];
                var3 = var2.bind(var0)(var1);
                var2 = var3.dispatch;
                var1 = {};
                var4 = 'AUDIO_SET_KRISP_SUPPRESSION_LEVEL';
                var1.type = var4;
                var4 = arg0;
                var1.level = var4;
                var1 = var2.bind(var3)(var1);
            case 66:
                return var0;
        }
    };
    var1.setKrispSuppressionLevel = var6;
    var6 = function(arg0) { // Original name: setKrispModelOverride, environment: var3
        _fun66296: for (var _fun66296_ip = 0;;) switch (_fun66296_ip) {
            case 0:
                var3 = this;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66296_ip = 112;
                    continue _fun66296
                }
            case 19:
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var2 = 13;
                var2 = var5[var2];
                var5 = var4.bind(var0)(var2);
                var4 = var5.dispatch;
                var2 = {};
                var6 = 'AUDIO_SET_KRISP_MODEL_OVERRIDE';
                var2.type = var6;
                var6 = arg0;
                var2.model = var6;
                var2 = var4.bind(var5)(var2);
                var2 = _closure1_slot6;
                var1 = var2.getNoiseCancellation;
                var1 = var1.bind(var2)();
                if (!var1) {
                    _fun66296_ip = 112;
                    continue _fun66296
                }
            case 86:
                var2 = var3.setNoiseCancellation;
                var1 = false;
                var1 = var2.bind(var3)(var1);
                var2 = var3.setNoiseCancellation;
                var1 = true;
                var1 = var2.bind(var3)(var1);
            case 112:
                return var0;
        }
    };
    var1.setKrispModelOverride = var6;
    var6 = function(arg0) { // Original name: setNoiseCancellationEnableStats, environment: var3
        var1 = _closure1_slot15;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.setNoiseCancellationEnableStats = var6;
    var3 = function(arg0) { // Original name: resetMediaEngineSettings, environment: var3
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 13;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.dispatch;
        var0 = {};
        var3 = 'MEDIA_ENGINE_RESET_SETTINGS';
        var0.type = var3;
        var3 = arg0;
        var0.overrides = var3;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.resetMediaEngineSettings = var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'actions/AudioActionCreators.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3476, 1372, 3435, 3477, 1661, 1613, 660, 8171, 3469, 3, 795, 5648, 806, 8172, 8174, 8175, 7980, 2]);