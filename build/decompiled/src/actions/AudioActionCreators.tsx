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
    var0 = function() {
        _fun66498: for (var _fun66498_ip = 0;;) switch (_fun66498_ip) {
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
                    _fun66498_ip = 53;
                    continue _fun66498
                }
            case 48:
                var0 = var1.name;
            case 53:
                return var0;
        }
    };
    var _closure1_slot18 = var0;
    var0 = function arg0, arg1, arg2, arg3() {
        _fun66499: for (var _fun66499_ip = 0;;) switch (_fun66499_ip) {
            case 0:
                var1 = arg0;
                var18 = arg1;
                var13 = arg2;
                var2 = arguments[4];
                var0 = undefined;
                if (!(var2 === var0)) {
                    _fun66499_ip = 20;
                    continue _fun66499
                }
            case 18:
                var2 = {};
            case 20:
                var10 = var2.location;
                var9 = var2.analyticsLocations;
                if (!(var18 !== var13)) {
                    _fun66499_ip = 328;
                    continue _fun66499
                }
            case 38:
                var3 = _closure1_slot8;
                var2 = var3.getVoiceChannelId;
                var4 = var2.bind(var3)();
                var7 = null;
                var2 = var7 != var4;
                var8 = null;
                if (!var2) {
                    _fun66499_ip = 80;
                    continue _fun66499
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
                    _fun66499_ip = 202;
                    continue _fun66499
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
                    _fun66499_ip = 237;
                    continue _fun66499
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
                    _fun66499_ip = 307;
                    continue _fun66499
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
    var1 = function() {
        var0 = false;
        return var0;
    };
    var6.isNotSupported = var1;
    var1 = function() {
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.resolve;
        var0 = true;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var6.enable = var1;
    var1 = function() {
        var0 = undefined;
        return var0;
    };
    var6.trackToggleSelfMute = var1;
    var1 = function() {
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
    var6 = function() {
        _fun66505: for (var _fun66505_ip = 0;;) switch (_fun66505_ip) {
            case 0:
                var0 = arguments[0];
                var7 = this;
                var3 = undefined;
                if (!(var0 === var3)) {
                    _fun66505_ip = 14;
                    continue _fun66505
                }
            case 12:
                var0 = {};
            case 14:
                var6 = var0.context;
                if (!(var6 === var3)) {
                    _fun66505_ip = 36;
                    continue _fun66505
                }
            case 23:
                var1 = _closure1_slot12;
                var6 = var1.DEFAULT;
            case 36:
                var5 = var0.syncRemote;
                if (!(var5 === var3)) {
                    _fun66505_ip = 48;
                    continue _fun66505
                }
            case 46:
                var5 = true;
            case 48:
                var9 = var0.usedKeybind;
                if (!(var9 === var3)) {
                    _fun66505_ip = 60;
                    continue _fun66505
                }
            case 58:
                var9 = false;
            case 60:
                var4 = var0.playSoundEffect;
                if (!(var4 === var3)) {
                    _fun66505_ip = 72;
                    continue _fun66505
                }
            case 70:
                var4 = true;
            case 72:
                var8 = var0.location;
                var0 = _closure1_slot15;
                var0 = var0.bind(var3)();
                if (var0) {
                    _fun66505_ip = 278;
                    continue _fun66505
                }
            case 94:
                var2 = _closure1_slot16;
                var0 = {};
                var0.usedKeybind = var9;
                var0.location = var8;
                var0 = var2.bind(var3)(var0);
                if (!var4) {
                    _fun66505_ip = 134;
                    continue _fun66505
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
                    _fun66505_ip = 166;
                    continue _fun66505
                }
            case 156:
                var2 = var8.isStaff;
                var0 = var2.bind(var8)();
            case 166:
                if (!var0) {
                    _fun66505_ip = 190;
                    continue _fun66505
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
                    _fun66505_ip = 222;
                    continue _fun66505
                }
            case 207:
                var2 = var7.enable;
                var0 = true;
                var0 = var2.bind(var7)(var0);
                _fun66505_ip = 276;
                continue _fun66505;
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
                _fun66505_ip = 296;
                continue _fun66505;
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
    var6 = function arg0, arg1() {
        _fun66506: for (var _fun66506_ip = 0;;) switch (_fun66506_ip) {
            case 0:
                var5 = arg1;
                var4 = arguments[2];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun66506_ip = 14;
                    continue _fun66506
                }
            case 12:
                var4 = true;
            case 14:
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66506_ip = 167;
                    continue _fun66506
                }
            case 31:
                if (!var4) {
                    _fun66506_ip = 51;
                    continue _fun66506
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
                    _fun66506_ip = 83;
                    continue _fun66506
                }
            case 73:
                var3 = var6.isStaff;
                var2 = var3.bind(var6)();
            case 83:
                if (!var2) {
                    _fun66506_ip = 108;
                    continue _fun66506
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
    var6 = function arg0() {
        _fun66507: for (var _fun66507_ip = 0;;) switch (_fun66507_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66507_ip = 123;
                    continue _fun66507
                }
            case 19:
                var3 = _closure1_slot9;
                var2 = var3.getCurrentUser;
                var5 = var2.bind(var3)();
                var2 = null;
                var2 = var2 != var5;
                if (!var2) {
                    _fun66507_ip = 51;
                    continue _fun66507
                }
            case 41:
                var3 = var5.isStaff;
                var2 = var3.bind(var5)();
            case 51:
                if (!var2) {
                    _fun66507_ip = 76;
                    continue _fun66507
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
    var6 = function() {
        _fun66508: for (var _fun66508_ip = 0;;) switch (_fun66508_ip) {
            case 0:
                var1 = arguments[0];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66508_ip = 11;
                    continue _fun66508
                }
            case 9:
                var1 = {};
            case 11:
                var5 = var1.context;
                if (!(var5 === var0)) {
                    _fun66508_ip = 33;
                    continue _fun66508
                }
            case 20:
                var2 = _closure1_slot12;
                var5 = var2.DEFAULT;
            case 33:
                var4 = var1.syncRemote;
                if (!(var4 === var0)) {
                    _fun66508_ip = 45;
                    continue _fun66508
                }
            case 43:
                var4 = true;
            case 45:
                var7 = var1.usedKeybind;
                if (!(var7 === var0)) {
                    _fun66508_ip = 57;
                    continue _fun66508
                }
            case 55:
                var7 = false;
            case 57:
                var6 = var1.location;
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66508_ip = 145;
                    continue _fun66508
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
    var6 = function arg0() {
        _fun66509: for (var _fun66509_ip = 0;;) switch (_fun66509_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun66509_ip = 22;
                    continue _fun66509
                }
            case 9:
                var1 = _closure1_slot12;
                var4 = var1.DEFAULT;
            case 22:
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66509_ip = 87;
                    continue _fun66509
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
    var6 = function arg0() {
        _fun66510: for (var _fun66510_ip = 0;;) switch (_fun66510_ip) {
            case 0:
                var4 = arguments[1];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun66510_ip = 22;
                    continue _fun66510
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
    var6 = function arg0, arg1() {
        _fun66511: for (var _fun66511_ip = 0;;) switch (_fun66511_ip) {
            case 0:
                var6 = arguments[2];
                var5 = arguments[3];
                var4 = arguments[4];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun66511_ip = 28;
                    continue _fun66511
                }
            case 15:
                var1 = _closure1_slot12;
                var6 = var1.DEFAULT;
            case 28:
                if (!(var5 === var0)) {
                    _fun66511_ip = 34;
                    continue _fun66511
                }
            case 32:
                var5 = true;
            case 34:
                if (!(var4 === var0)) {
                    _fun66511_ip = 40;
                    continue _fun66511
                }
            case 38:
                var4 = false;
            case 40:
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66511_ip = 123;
                    continue _fun66511
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
    var6 = function arg0, arg1() {
        _fun66512: for (var _fun66512_ip = 0;;) switch (_fun66512_ip) {
            case 0:
                var4 = arg0;
                var3 = arguments[2];
                var0 = undefined;
                if (!(var3 === var0)) {
                    _fun66512_ip = 25;
                    continue _fun66512
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
    var6 = function arg0, arg1, arg2() {
        _fun66513: for (var _fun66513_ip = 0;;) switch (_fun66513_ip) {
            case 0:
                var4 = arguments[3];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun66513_ip = 22;
                    continue _fun66513
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
    var6 = function arg0() {
        _fun66514: for (var _fun66514_ip = 0;;) switch (_fun66514_ip) {
            case 0:
                var11 = arg0;
                var6 = arguments[1];
                var8 = arguments[2];
                var1 = arguments[3];
                var0 = undefined;
                if (!(var6 === var0)) {
                    _fun66514_ip = 20;
                    continue _fun66514
                }
            case 18:
                var6 = {};
            case 20:
                if (!(var8 === var0)) {
                    _fun66514_ip = 37;
                    continue _fun66514
                }
            case 24:
                var2 = _closure1_slot12;
                var8 = var2.DEFAULT;
            case 37:
                if (!(var1 === var0)) {
                    _fun66514_ip = 43;
                    continue _fun66514
                }
            case 41:
                var1 = {};
            case 43:
                var10 = var1.analyticsLocations;
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66514_ip = 615;
                    continue _fun66514
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
                    _fun66514_ip = 434;
                    continue _fun66514
                }
            case 176:
                var2 = _closure1_slot10;
                var2 = var2.VOICE_ACTIVITY;
                if (!(var11 === var2)) {
                    _fun66514_ip = 615;
                    continue _fun66514
                }
            case 193:
                if (!(var7 !== var6)) {
                    _fun66514_ip = 615;
                    continue _fun66514
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
                    _fun66514_ip = 287;
                    continue _fun66514
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
                    _fun66514_ip = 351;
                    continue _fun66514
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
                _fun66514_ip = 615;
                continue _fun66514;
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
                    _fun66514_ip = 521;
                    continue _fun66514
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
                    _fun66514_ip = 589;
                    continue _fun66514
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
    var6 = function arg0, arg1() {
        _fun66515: for (var _fun66515_ip = 0;;) switch (_fun66515_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66515_ip = 73;
                    continue _fun66515
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
    var6 = function arg0() {
        _fun66516: for (var _fun66516_ip = 0;;) switch (_fun66516_ip) {
            case 0:
                var8 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66516_ip = 14;
                    continue _fun66516
                }
            case 12:
                var1 = {};
            case 14:
                var7 = var1.analyticsLocations;
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66516_ip = 195;
                    continue _fun66516
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
                    _fun66516_ip = 123;
                    continue _fun66516
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
                    _fun66516_ip = 184;
                    continue _fun66516
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
    var6 = function arg0() {
        _fun66517: for (var _fun66517_ip = 0;;) switch (_fun66517_ip) {
            case 0:
                var8 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66517_ip = 14;
                    continue _fun66517
                }
            case 12:
                var1 = {};
            case 14:
                var7 = var1.analyticsLocations;
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66517_ip = 193;
                    continue _fun66517
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
                    _fun66517_ip = 121;
                    continue _fun66517
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
                    _fun66517_ip = 182;
                    continue _fun66517
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
    var6 = function arg0() {
        _fun66518: for (var _fun66518_ip = 0;;) switch (_fun66518_ip) {
            case 0:
                var5 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66518_ip = 14;
                    continue _fun66518
                }
            case 12:
                var1 = {};
            case 14:
                var8 = var1.location;
                var2 = var1.analyticsLocations;
                var3 = _closure1_slot15;
                var3 = var3.bind(var0)();
                if (var3) {
                    _fun66518_ip = 165;
                    continue _fun66518
                }
            case 42:
                var4 = _closure1_slot6;
                var3 = var4.getInputDeviceId;
                var4 = var3.bind(var4)();
                var3 = null;
                if (!(var3 == var8)) {
                    _fun66518_ip = 66;
                    continue _fun66518
                }
            case 62:
                if (!(var3 != var2)) {
                    _fun66518_ip = 116;
                    continue _fun66518
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
    var6 = function arg0() {
        _fun66519: for (var _fun66519_ip = 0;;) switch (_fun66519_ip) {
            case 0:
                var5 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66519_ip = 14;
                    continue _fun66519
                }
            case 12:
                var1 = {};
            case 14:
                var8 = var1.location;
                var2 = var1.analyticsLocations;
                var3 = _closure1_slot15;
                var3 = var3.bind(var0)();
                if (var3) {
                    _fun66519_ip = 165;
                    continue _fun66519
                }
            case 42:
                var4 = _closure1_slot6;
                var3 = var4.getOutputDeviceId;
                var4 = var3.bind(var4)();
                var3 = null;
                if (!(var3 == var8)) {
                    _fun66519_ip = 66;
                    continue _fun66519
                }
            case 62:
                if (!(var3 != var2)) {
                    _fun66519_ip = 116;
                    continue _fun66519
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
    var6 = function arg0() {
        _fun66520: for (var _fun66520_ip = 0;;) switch (_fun66520_ip) {
            case 0:
                var5 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66520_ip = 14;
                    continue _fun66520
                }
            case 12:
                var1 = {};
            case 14:
                var8 = var1.location;
                var2 = var1.analyticsLocations;
                var3 = _closure1_slot15;
                var3 = var3.bind(var0)();
                if (var3) {
                    _fun66520_ip = 160;
                    continue _fun66520
                }
            case 39:
                var4 = _closure1_slot6;
                var3 = var4.getVideoDeviceId;
                var4 = var3.bind(var4)();
                var3 = null;
                if (!(var3 == var8)) {
                    _fun66520_ip = 63;
                    continue _fun66520
                }
            case 59:
                if (!(var3 != var2)) {
                    _fun66520_ip = 111;
                    continue _fun66520
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
    var6 = function arg0() {
        _fun66521: for (var _fun66521_ip = 0;;) switch (_fun66521_ip) {
            case 0:
                var4 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66521_ip = 14;
                    continue _fun66521
                }
            case 12:
                var1 = {};
            case 14:
                var6 = var1.analyticsLocations;
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66521_ip = 150;
                    continue _fun66521
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
                    _fun66521_ip = 82;
                    continue _fun66521
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
    var6 = function arg0, arg1() {
        _fun66522: for (var _fun66522_ip = 0;;) switch (_fun66522_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66522_ip = 72;
                    continue _fun66522
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
    var6 = function arg0() {
        _fun66523: for (var _fun66523_ip = 0;;) switch (_fun66523_ip) {
            case 0:
                var4 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66523_ip = 14;
                    continue _fun66523
                }
            case 12:
                var1 = {};
            case 14:
                var7 = var1.analyticsLocations;
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66523_ip = 124;
                    continue _fun66523
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
    var6 = function arg0() {
        _fun66524: for (var _fun66524_ip = 0;;) switch (_fun66524_ip) {
            case 0:
                var4 = arg0;
                var1 = arguments[1];
                var0 = undefined;
                if (!(var1 === var0)) {
                    _fun66524_ip = 14;
                    continue _fun66524
                }
            case 12:
                var1 = {};
            case 14:
                var7 = var1.analyticsLocations;
                var2 = _closure1_slot15;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66524_ip = 127;
                    continue _fun66524
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
    var6 = function arg0, arg1() {
        _fun66525: for (var _fun66525_ip = 0;;) switch (_fun66525_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66525_ip = 73;
                    continue _fun66525
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
    var6 = function arg0, arg1() {
        _fun66526: for (var _fun66526_ip = 0;;) switch (_fun66526_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66526_ip = 72;
                    continue _fun66526
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
    var6 = function arg0, arg1() {
        _fun66527: for (var _fun66527_ip = 0;;) switch (_fun66527_ip) {
            case 0:
                var5 = arg0;
                var4 = arg1;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66527_ip = 112;
                    continue _fun66527
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
    var6 = function arg0, arg1() {
        _fun66528: for (var _fun66528_ip = 0;;) switch (_fun66528_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66528_ip = 72;
                    continue _fun66528
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
    var6 = function arg0, arg1, arg2() {
        _fun66529: for (var _fun66529_ip = 0;;) switch (_fun66529_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var4 = arg2;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66529_ip = 248;
                    continue _fun66529
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
                    _fun66529_ip = 158;
                    continue _fun66529
                }
            case 80:
                if (!(var8 === var5)) {
                    _fun66529_ip = 123;
                    continue _fun66529
                }
            case 84:
                if (!(var9 !== var4)) {
                    _fun66529_ip = 191;
                    continue _fun66529
                }
            case 88:
                var3 = _closure1_slot1;
                var10 = _closure1_slot2;
                var2 = 15;
                var2 = var10[var2];
                var3 = var3.bind(var0)(var2);
                var2 = 'global_attenuation_for_other_speak_enabled';
                var2 = var3.bind(var0)(var2, var4, var9);
                _fun66529_ip = 191;
                continue _fun66529;
            case 123:
                var3 = _closure1_slot1;
                var9 = _closure1_slot2;
                var2 = 15;
                var2 = var9[var2];
                var3 = var3.bind(var0)(var2);
                var2 = 'global_attenuation_for_self_speak_enabled';
                var2 = var3.bind(var0)(var2, var5, var8);
                _fun66529_ip = 191;
                continue _fun66529;
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
    var6 = function arg0() {
        _fun66530: for (var _fun66530_ip = 0;;) switch (_fun66530_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66530_ip = 104;
                    continue _fun66530
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
    var6 = function() {
        _fun66531: for (var _fun66531_ip = 0;;) switch (_fun66531_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66531_ip = 58;
                    continue _fun66531
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
    var6 = function arg0() {
        _fun66532: for (var _fun66532_ip = 0;;) switch (_fun66532_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66532_ip = 104;
                    continue _fun66532
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
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun66535: for (var _fun66535_ip = 0;;) switch (_fun66535_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66535_ip = 148;
                            continue _fun66535
                        }
                    case 10:
                        var2 = _closure1_slot15;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        if (var2) {
                            _fun66535_ip = 145;
                            continue _fun66535
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
                            _fun66535_ip = 142;
                            continue _fun66535
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
                        _fun66535_ip = 145;
                        continue _fun66535;
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
    var6 = function arg0() {
        _fun66536: for (var _fun66536_ip = 0;;) switch (_fun66536_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66536_ip = 106;
                    continue _fun66536
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
    var6 = function arg0() {
        _fun66537: for (var _fun66537_ip = 0;;) switch (_fun66537_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66537_ip = 104;
                    continue _fun66537
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
    var6 = function arg0() {
        _fun66538: for (var _fun66538_ip = 0;;) switch (_fun66538_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66538_ip = 106;
                    continue _fun66538
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
    var6 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot3;
        var1 = undefined;
        var0 = function*() { // Environment: var0
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun66541: for (var _fun66541_ip = 0;;) switch (_fun66541_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun66541_ip = 147;
                            continue _fun66541
                        }
                    case 10:
                        var2 = _closure1_slot15;
                        var1 = undefined;
                        var2 = var2.bind(var1)();
                        if (var2) {
                            _fun66541_ip = 144;
                            continue _fun66541
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
                            _fun66541_ip = 141;
                            continue _fun66541
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
                        _fun66541_ip = 144;
                        continue _fun66541;
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
    var6 = function arg0() {
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
    var6 = function arg0() {
        _fun66543: for (var _fun66543_ip = 0;;) switch (_fun66543_ip) {
            case 0:
                var4 = arg0;
                var2 = null;
                var3 = var2 == var4;
                var0 = undefined;
                var1 = undefined;
                if (var3) {
                    _fun66543_ip = 22;
                    continue _fun66543
                }
            case 16:
                var1 = var4.qualityOptions;
            case 22:
                if (!(var2 != var1)) {
                    _fun66543_ip = 98;
                    continue _fun66543
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
    var6 = function arg0() {
        _fun66544: for (var _fun66544_ip = 0;;) switch (_fun66544_ip) {
            case 0:
                var4 = arg0;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66544_ip = 106;
                    continue _fun66544
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
    var6 = function() {
        _fun66545: for (var _fun66545_ip = 0;;) switch (_fun66545_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66545_ip = 60;
                    continue _fun66545
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
    var6 = function arg0() {
        _fun66546: for (var _fun66546_ip = 0;;) switch (_fun66546_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66546_ip = 65;
                    continue _fun66546
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
    var6 = function arg0() {
        _fun66547: for (var _fun66547_ip = 0;;) switch (_fun66547_ip) {
            case 0:
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66547_ip = 66;
                    continue _fun66547
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
    var6 = function arg0() {
        _fun66548: for (var _fun66548_ip = 0;;) switch (_fun66548_ip) {
            case 0:
                var3 = this;
                var2 = _closure1_slot15;
                var0 = undefined;
                var2 = var2.bind(var0)();
                if (var2) {
                    _fun66548_ip = 112;
                    continue _fun66548
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
                    _fun66548_ip = 112;
                    continue _fun66548
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
    var6 = function arg0() {
        var1 = _closure1_slot15;
        var0 = undefined;
        var1 = var1.bind(var0)();
        return var0;
    };
    var1.setNoiseCancellationEnableStats = var6;
    var3 = function arg0() {
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3519, 1372, 3478, 3520, 1670, 1621, 660, 8237, 3512, 3, 795, 5695, 806, 8238, 8240, 8241, 8045, 2]);