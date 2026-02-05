// modules/sound_playback/native/SoundUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var7 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var6 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var8)(var2, var0, var3);
    var3 = 0;
    var6 = var5[var3];
    var0 = undefined;
    var6 = var7.bind(var0)(var6);
    var _closure1_slot2 = var6;
    var6 = 1;
    var6 = var5[var6];
    var6 = var7.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 2;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.NativeModules;
    var _closure1_slot4 = var6;
    var _closure1_slot5 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0, arg1, arg2, arg3() {
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = arg2;
            var2._volume = var1;
            var1 = false;
            var2._loaded = var1;
            var1 = _closure1_slot5;
            var1 = parseFloat(var1);
            var3 = var1 + 1;
            _closure1_slot5 = var3;
            var2._key = var1;
            var1 = -1;
            var2._duration = var1;
            var2._numberOfChannels = var1;
            var1 = 1;
            var2._volume = var1;
            var1 = 0;
            var2._pan = var1;
            var2._numberOfLoops = var1;
            var5 = var2._createSound;
            var4 = arg0;
            var3 = arg1;
            var1 = arg3;
            var1 = var5.bind(var2)(var4, var3, var1);
            var2._sound = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = '_createSound';
        var0.key = var1;
        var1 = function arg0, arg1, arg2() {
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = arg2;
            var _closure3_slot1 = var2;
            var2 = _closure1_slot4;
            var5 = var2.DCDSoundManager;
            var4 = var5.prepare;
            var7 = var1._key;
            var9 = arg0;
            var8 = arg1;
            var6 = function(arg0, arg1) { // Environment: var0
                _fun67886: for (var _fun67886_ip = 0;;) switch (_fun67886_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = arg1;
                        if (!var0) {
                            _fun67886_ip = 39;
                            continue _fun67886
                        }
                    case 9:
                        var1 = _closure3_slot0;
                        var3 = var0.duration;
                        var1._duration = var3;
                        var0 = var0.numberOfChannels;
                        var1._numberOfChannels = var0;
                    case 39:
                        var3 = null;
                        if (!(var3 == var2)) {
                            _fun67886_ip = 60;
                            continue _fun67886
                        }
                    case 45:
                        var1 = _closure3_slot0;
                        var0 = true;
                        var1._loaded = var0;
                    case 60:
                        var1 = _closure3_slot1;
                        if (!(var3 != var1)) {
                            _fun67886_ip = 82;
                            continue _fun67886
                        }
                    case 71:
                        var1 = _closure3_slot1;
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                    case 82:
                        var0 = undefined;
                        return var0;
                }
            };
            var10 = var5;
            var0 = var10[var4](var9, var8, var7, var6, var5);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(8);
        var1[0] = var0;
        var0 = {};
        var5 = 'play';
        var0.key = var5;
        var5 = function() {
            _fun67887: for (var _fun67887_ip = 0;;) switch (_fun67887_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._loaded;
                    if (!var1) {
                        _fun67887_ip = 42;
                        continue _fun67887
                    }
                case 12:
                    var1 = _closure1_slot4;
                    var2 = var1.DCDSoundManager;
                    var1 = var2.play;
                    var0 = var0._key;
                    var0 = var1.bind(var2)(var0);
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'pause';
        var0.key = var5;
        var5 = function() {
            _fun67888: for (var _fun67888_ip = 0;;) switch (_fun67888_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._loaded;
                    if (!var1) {
                        _fun67888_ip = 42;
                        continue _fun67888
                    }
                case 12:
                    var1 = _closure1_slot4;
                    var2 = var1.DCDSoundManager;
                    var1 = var2.pause;
                    var0 = var0._key;
                    var0 = var1.bind(var2)(var0);
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'stop';
        var0.key = var5;
        var5 = function() {
            _fun67889: for (var _fun67889_ip = 0;;) switch (_fun67889_ip) {
                case 0:
                    var0 = this;
                    var1 = var0._loaded;
                    if (!var1) {
                        _fun67889_ip = 42;
                        continue _fun67889
                    }
                case 12:
                    var1 = _closure1_slot4;
                    var2 = var1.DCDSoundManager;
                    var1 = var2.stop;
                    var0 = var0._key;
                    var0 = var1.bind(var2)(var0);
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'release';
        var0.key = var5;
        var5 = function() {
            _fun67890: for (var _fun67890_ip = 0;;) switch (_fun67890_ip) {
                case 0:
                    var1 = this;
                    var0 = var1._loaded;
                    if (!var0) {
                        _fun67890_ip = 42;
                        continue _fun67890
                    }
                case 12:
                    var0 = _closure1_slot4;
                    var3 = var0.DCDSoundManager;
                    var2 = var3.release;
                    var0 = var1._key;
                    var0 = var2.bind(var3)(var0);
                case 42:
                    var0 = false;
                    var1._loaded = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'volume';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._volume;
            return var0;
        };
        var0.get = var5;
        var5 = function arg0() {
            _fun67892: for (var _fun67892_ip = 0;;) switch (_fun67892_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var0._volume = var3;
                    var1 = var0._loaded;
                    if (!var1) {
                        _fun67892_ip = 52;
                        continue _fun67892
                    }
                case 21:
                    var1 = _closure1_slot4;
                    var2 = var1.DCDSoundManager;
                    var1 = var2.setVolume;
                    var0 = var0._key;
                    var0 = var1.bind(var2)(var0, var3);
                case 52:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.set = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'duration';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._duration;
            return var0;
        };
        var0.get = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'numberOfLoops';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0._numberOfLoops;
            return var0;
        };
        var0.get = var5;
        var4 = function arg0() {
            _fun67895: for (var _fun67895_ip = 0;;) switch (_fun67895_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var0._numberOfLoops = var3;
                    var1 = var0._loaded;
                    if (!var1) {
                        _fun67895_ip = 54;
                        continue _fun67895
                    }
                case 21:
                    var1 = _closure1_slot4;
                    var2 = var1.DCDSoundManager;
                    var1 = var2.setNumberOfLoops;
                    var0 = var0._key;
                    var0 = var1.bind(var2)(var0, var3);
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.set = var4;
        var1[7] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var _closure1_slot6 = var3;
    var6 = {};
    var3 = 'notification';
    var6.NOTIFICATION = var3;
    var3 = 'voice';
    var6.VOICE = var3;
    var3 = 'ring_tone';
    var6.RING_TONE = var3;
    var3 = 'media';
    var6.MEDIA = var3;
    var3 = 'notification_no_vibration';
    var6.NOTIFICATION_NO_VIBRATION = var3;
    var3 = {};
    var7 = var6.VOICE;
    var3.call_calling = var7;
    var7 = var6.RING_TONE;
    var3.call_ringing = var7;
    var7 = var6.VOICE;
    var3.camera_on = var7;
    var7 = var6.VOICE;
    var3.camera_off = var7;
    var7 = var6.VOICE;
    var3.deafen = var7;
    var7 = var6.VOICE;
    var3.disconnect = var7;
    var7 = var6.NOTIFICATION;
    var3.mention1 = var7;
    var7 = var6.NOTIFICATION;
    var3.mention2 = var7;
    var7 = var6.NOTIFICATION;
    var3.mention3 = var7;
    var7 = var6.NOTIFICATION;
    var3.message1 = var7;
    var7 = var6.NOTIFICATION;
    var3.message2 = var7;
    var7 = var6.NOTIFICATION;
    var3.message3 = var7;
    var7 = var6.VOICE;
    var3.mute = var7;
    var7 = var6.VOICE;
    var3.ptt_start = var7;
    var7 = var6.VOICE;
    var3.ptt_stop = var7;
    var7 = var6.VOICE;
    var3.reconnect = var7;
    var7 = var6.VOICE;
    var3.stage_waiting = var7;
    var7 = var6.VOICE;
    var3.stream_ended = var7;
    var7 = var6.VOICE;
    var3.stream_started = var7;
    var7 = var6.VOICE;
    var3.stream_user_joined = var7;
    var7 = var6.VOICE;
    var3.stream_user_left = var7;
    var7 = var6.VOICE;
    var3.soundboard_sound = var7;
    var7 = var6.VOICE;
    var3.undeafen = var7;
    var7 = var6.VOICE;
    var3.unmute = var7;
    var7 = var6.VOICE;
    var3.user_join = var7;
    var7 = var6.VOICE;
    var3.user_leave = var7;
    var7 = var6.VOICE;
    var3.user_moved = var7;
    var7 = var6.MEDIA;
    var3.vibing_wumpus = var7;
    var7 = var6.NOTIFICATION_NO_VIBRATION;
    var3.activity_end = var7;
    var7 = var6.NOTIFICATION_NO_VIBRATION;
    var3.activity_launch = var7;
    var7 = var6.NOTIFICATION_NO_VIBRATION;
    var3.activity_user_join = var7;
    var7 = var6.NOTIFICATION_NO_VIBRATION;
    var3.activity_user_left = var7;
    var6 = var6.RING_TONE;
    var3.call_ringing_halloween = var6;
    var _closure1_slot7 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0, arg1, arg2, arg3() {
            var2 = this;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = arg0;
            var2.name = var3;
            var3 = _closure1_slot7;
            var1 = arg1;
            var1 = var3[var1];
            var2.usage = var1;
            var1 = arg2;
            var2._volume = var1;
            var1 = arg3;
            var2.outputChannel = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'volume';
        var0.key = var1;
        var1 = function() {
            var0 = this;
            var0 = var0._volume;
            return var0;
        };
        var0.get = var1;
        var1 = function arg0() {
            var1 = arg0;
            var2 = this;
            var _closure3_slot0 = var1;
            var2._volume = var1;
            var1 = var2.ensureSound;
            var2 = var1.bind(var2)();
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                var1 = _closure3_slot0;
                var0 = arg0;
                var0.volume = var1;
                var0 = undefined;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.set = var1;
        var1 = new Array(8);
        var1[0] = var0;
        var0 = {};
        var5 = 'loop';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = var1.ensureSound;
            var2 = var0.bind(var1)();
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var0 = -1;
                var1.numberOfLoops = var0;
                var0 = var1.play;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'play';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = var1.ensureSound;
            var2 = var0.bind(var1)();
            var1 = var2.then;
            var0 = function(arg0) { // Environment: var0
                var1 = arg0;
                var0 = var1.play;
                var0 = var0.bind(var1)();
                var0 = undefined;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'playWithListener';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var _closure3_slot0 = var1;
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var3 = function(arg0, arg1) { // Environment: var0
                var1 = arg0;
                var _closure4_slot0 = var1;
                var1 = arg1;
                var _closure4_slot1 = var1;
                var2 = _closure3_slot0;
                var1 = var2.ensureSound;
                var3 = var1.bind(var2)();
                var2 = var3.then;
                var1 = function(arg0) { // Environment: var0
                    _fun67907: for (var _fun67907_ip = 0;;) switch (_fun67907_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = var1.duration;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun67907_ip = 28;
                                continue _fun67907
                            }
                        case 17:
                            var3 = var1.duration;
                            var2 = 0;
                            var0 = var2 !== var3;
                        case 28:
                            if (var0) {
                                _fun67907_ip = 51;
                                continue _fun67907
                            }
                        case 31:
                            var3 = _closure4_slot1;
                            var2 = undefined;
                            var0 = 'sound has no duration';
                            var0 = var3.bind(var2)(var0);
                        case 51:
                            var0 = var1.play;
                            var0 = var0.bind(var1)();
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot1;
                            var0 = 3;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isIOS;
                            var3 = var2.bind(var3)();
                            var2 = 1;
                            if (!var3) {
                                _fun67907_ip = 108;
                                continue _fun67907
                            }
                        case 102:
                            var2 = 1000;
                        case 108:
                            var3 = global;
                            var3 = var3.setTimeout;
                            var1 = var1.duration;
                            var2 = var1 * var2;
                            var1 = function() { // Environment: var1
                                var2 = _closure4_slot0;
                                var0 = undefined;
                                var1 = true;
                                var1 = var2.bind(var0)(var1);
                                return var0;
                            };
                            var1 = var3.bind(var0)(var1, var2);
                            return var0;
                    }
                };
                var2 = var2.bind(var3)(var1);
                var1 = var2.catch;
                var0 = function(arg0) { // Environment: var0
                    var2 = _closure4_slot1;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0 = var1.bind(var2)(var0);
                var0 = undefined;
                return var0;
            };
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'pause';
        var0.key = var5;
        var5 = function() {
            _fun67910: for (var _fun67910_ip = 0;;) switch (_fun67910_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.soundPromise;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun67910_ip = 40;
                        continue _fun67910
                    }
                case 15:
                    var2 = var0.soundPromise;
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = var1.pause;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 40:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'stop';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = var1.destroyAudio;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'destroyAudio';
        var0.key = var5;
        var5 = function() {
            _fun67913: for (var _fun67913_ip = 0;;) switch (_fun67913_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var3 = var1.soundPromise;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun67913_ip = 44;
                        continue _fun67913
                    }
                case 21:
                    var2 = var1.soundPromise;
                    var1 = var2.then;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = var1.stop;
                        var0 = var0.bind(var1)();
                        var0 = var1.release;
                        var0 = var0.bind(var1)();
                        var1 = _closure3_slot0;
                        var0 = null;
                        var1.soundPromise = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                case 44:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'ensureSound';
        var0.key = var5;
        var4 = function() {
            _fun67915: for (var _fun67915_ip = 0;;) switch (_fun67915_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var1 = var0.soundPromise;
                    var3 = null;
                    if (!(var3 == var1)) {
                        _fun67915_ip = 56;
                        continue _fun67915
                    }
                case 21:
                    var3 = global;
                    var4 = var3.Promise;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var5 = function(arg0, arg1) { // Environment: var2
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var0 = arg1;
                        var _closure4_slot1 = var0;
                        var6 = _closure1_slot6;
                        var0 = _closure3_slot0;
                        var10 = var0.name;
                        var9 = var0.usage;
                        var8 = var0._volume;
                        var0 = var6.prototype;
                        var2 = Object.create(var0, {
                            constructor: {
                                value: var6
                            }
                        });
                        var7 = function(arg0) { // Environment: var1
                            _fun67917: for (var _fun67917_ip = 0;;) switch (_fun67917_ip) {
                                case 0:
                                    var2 = arg0;
                                    var0 = null;
                                    if (!(var0 != var2)) {
                                        _fun67917_ip = 17;
                                        continue _fun67917
                                    }
                                case 9:
                                    var0 = '';
                                    if (!(var0 === var2)) {
                                        _fun67917_ip = 37;
                                        continue _fun67917
                                    }
                                case 17:
                                    var3 = _closure4_slot0;
                                    var1 = _closure4_slot2;
                                    var0 = undefined;
                                    var0 = var3.bind(var0)(var1);
                                    _fun67917_ip = 51;
                                    continue _fun67917;
                                case 37:
                                    var1 = _closure4_slot1;
                                    var0 = undefined;
                                    var0 = var1.bind(var0)(var2);
                                case 51:
                                    var0 = undefined;
                                    return var0;
                            }
                        };
                        var11 = var2;
                        var0 = new var11[var6](var10, var9, var8, var7, var6);
                        var0 = var0 instanceof Object ? var0 : var2;
                        var _closure4_slot2 = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var6 = var3;
                    var2 = new var6[var4](var5, var4);
                    var1 = var2 instanceof Object ? var2 : var3;
                case 56:
                    var0.soundPromise = var1;
                    var0 = var0.soundPromise;
                    return var0;
            }
        };
        var0.value = var4;
        var1[7] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/sound_playback/native/SoundUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var2.MobileAudioSound = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 27, 478, 2]);