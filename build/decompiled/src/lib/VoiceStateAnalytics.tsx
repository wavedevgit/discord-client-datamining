// lib/VoiceStateAnalytics.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SpeakingFlags;
    var _closure1_slot7 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0, arg1() {
            var3 = this;
            var4 = _closure1_slot2;
            var2 = _closure2_slot0;
            var0 = undefined;
            var2 = var4.bind(var0)(var3, var2);
            var2 = 1;
            var3.maxVoiceStateCount = var2;
            var2 = global;
            var4 = var2.Set;
            var5 = var4.prototype;
            var5 = Object.create(var5, {
                constructor: {
                    value: var4
                }
            });
            var8 = var5;
            var4 = new var8[var4](var7);
            var4 = var4 instanceof Object ? var4 : var5;
            var3.totalParticipants = var4;
            var1 = _closure1_slot7;
            var1 = var1.NONE;
            var3.speaking = var1;
            var1 = 0;
            var3.maxListenerCount = var1;
            var2 = var2.Set;
            var4 = var2.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var2
                }
            });
            var8 = var4;
            var2 = new var8[var2](var7);
            var2 = var2 instanceof Object ? var2 : var4;
            var3.totalListeners = var2;
            var3.maxSpeakerCount = var1;
            var1 = {};
            var3.totalSpeakers = var1;
            var1 = arg0;
            var3.userId = var1;
            var2 = var3.setChannelId;
            var1 = arg1;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'updateVoiceStates';
        var0.key = var1;
        var1 = function arg0, arg1() {
            _fun93995: for (var _fun93995_ip = 0;;) switch (_fun93995_ip) {
                case 0:
                    var3 = arg0;
                    var5 = arg1;
                    var1 = this;
                    var0 = var1.channelId;
                    if (!(var5 !== var0)) {
                        _fun93995_ip = 95;
                        continue _fun93995
                    }
                case 18:
                    var2 = null;
                    var0 = var2 == var5;
                    if (!var0) {
                        _fun93995_ip = 37;
                        continue _fun93995
                    }
                case 27:
                    var4 = var1.totalSpeakers;
                    var0 = var3 in var4;
                case 37:
                    if (!var0) {
                        _fun93995_ip = 63;
                        continue _fun93995
                    }
                case 40:
                    var4 = var1.totalSpeakers;
                    var0 = _closure1_slot7;
                    var0 = var0.NONE;
                    var4[var3] = var0;
                case 63:
                    var0 = var1.userId;
                    var0 = var3 === var0;
                    if (!var0) {
                        _fun93995_ip = 79;
                        continue _fun93995
                    }
                case 75:
                    var0 = var2 != var5;
                case 79:
                    if (!var0) {
                        _fun93995_ip = 160;
                        continue _fun93995
                    }
                case 82:
                    var0 = var1.setChannelId;
                    var0 = var0.bind(var1)(var5);
                    _fun93995_ip = 160;
                    continue _fun93995;
                case 95:
                    var2 = var1.totalParticipants;
                    var0 = var2.add;
                    var0 = var0.bind(var2)(var3);
                    var0 = global;
                    var4 = var0.Math;
                    var3 = var4.max;
                    var2 = _closure1_slot6;
                    var0 = var2.countVoiceStatesForChannel;
                    var2 = var0.bind(var2)(var5);
                    var0 = var1.maxVoiceStateCount;
                    var0 = var3.bind(var4)(var2, var0);
                    var1.maxVoiceStateCount = var0;
                case 160:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'getStats';
        var0.key = var5;
        var5 = function() {
            var1 = this;
            var0 = {};
            var2 = var1.maxVoiceStateCount;
            var0.max_voice_state_count = var2;
            var2 = var1.totalParticipants;
            var2 = var2.size;
            var0.total_voice_state_count = var2;
            var2 = var1.maxListenerCount;
            var0.max_listener_count = var2;
            var2 = var1.totalListeners;
            var2 = var2.size;
            var0.total_listener_count = var2;
            var2 = var1.maxSpeakerCount;
            var0.max_speaker_count = var2;
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var1 = var1.totalSpeakers;
            var1 = var2.bind(var3)(var1);
            var1 = var1.length;
            var0.total_speaker_count = var1;
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'getUserVoiceSettingsStats';
        var0.key = var5;
        var5 = function arg0() {
            var1 = this;
            var4 = _closure1_slot4;
            var3 = var4.getSettings;
            var0 = arg0;
            var0 = var3.bind(var4)(var0);
            var5 = global;
            var6 = var5.Set;
            var7 = var5.Object;
            var4 = var7.keys;
            var3 = var0.localMutes;
            var15 = var4.bind(var7)(var3);
            var4 = var6.prototype;
            var4 = Object.create(var4, {
                constructor: {
                    value: var6
                }
            });
            var16 = var4;
            var3 = new var16[var6](var15, var14);
            var12 = var3 instanceof Object ? var3 : var4;
            var4 = var5.Set;
            var6 = var5.Object;
            var3 = var6.keys;
            var0 = var0.localVolumes;
            var15 = var3.bind(var6)(var0);
            var3 = var4.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var4
                }
            });
            var16 = var3;
            var0 = new var16[var4](var15, var14);
            var7 = var0 instanceof Object ? var0 : var3;
            var3 = var7.delete;
            var0 = var1.userId;
            var0 = var3.bind(var7)(var0);
            var3 = var12.delete;
            var0 = var1.userId;
            var0 = var3.bind(var12)(var0);
            var0 = {};
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 6;
            var8 = var6[var2];
            var3 = undefined;
            var11 = var4.bind(var3)(var8);
            var10 = var11.intersection;
            var9 = var5.Array;
            var8 = var9.from;
            var9 = var8.bind(var9)(var12);
            var13 = var5.Array;
            var12 = var13.from;
            var8 = var1.totalParticipants;
            var8 = var12.bind(var13)(var8);
            var8 = var10.bind(var11)(var9, var8);
            var8 = var8.length;
            var0.num_local_voice_user_mutes = var8;
            var2 = var6[var2];
            var4 = var4.bind(var3)(var2);
            var3 = var4.intersection;
            var6 = var5.Array;
            var2 = var6.from;
            var2 = var2.bind(var6)(var7);
            var6 = var5.Array;
            var5 = var6.from;
            var1 = var1.totalParticipants;
            var1 = var5.bind(var6)(var1);
            var1 = var3.bind(var4)(var2, var1);
            var1 = var1.length;
            var0.num_local_voice_volumes = var1;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'setSpeaking';
        var0.key = var5;
        var5 = function arg0, arg1() {
            _fun93998: for (var _fun93998_ip = 0;;) switch (_fun93998_ip) {
                case 0:
                    var5 = arg0;
                    var1 = arg1;
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot7;
                    var3 = var3.NONE;
                    if (!(var1 === var3)) {
                        _fun93998_ip = 73;
                        continue _fun93998
                    }
                case 32:
                    var3 = var0.totalSpeakers;
                    var3 = var5 in var3;
                    if (!var3) {
                        _fun93998_ip = 203;
                        continue _fun93998
                    }
                case 48:
                    var6 = var0.totalSpeakers;
                    var3 = _closure1_slot7;
                    var3 = var3.NONE;
                    var6[var5] = var3;
                    _fun93998_ip = 203;
                    continue _fun93998;
                case 73:
                    var7 = _closure1_slot5;
                    var6 = var7.getVoiceStateForChannel;
                    var3 = var0.channelId;
                    var3 = var6.bind(var7)(var3, var5);
                    var6 = null;
                    if (!(var6 != var3)) {
                        _fun93998_ip = 203;
                        continue _fun93998
                    }
                case 100:
                    var6 = var3.selfMute;
                    if (var6) {
                        _fun93998_ip = 203;
                        continue _fun93998
                    }
                case 109:
                    var3 = var3.mute;
                    if (var3) {
                        _fun93998_ip = 203;
                        continue _fun93998
                    }
                case 118:
                    var3 = var0.totalSpeakers;
                    var3[var5] = var1;
                    var3 = global;
                    var8 = var3.Object;
                    var7 = var8.values;
                    var6 = var0.totalSpeakers;
                    var8 = var7.bind(var8)(var6);
                    var7 = var8.filter;
                    var6 = function(arg0) { // Environment: var4
                        var0 = _closure1_slot7;
                        var1 = var0.NONE;
                        var0 = arg0;
                        var0 = var0 !== var1;
                        return var0;
                    };
                    var6 = var7.bind(var8)(var6);
                    var8 = var6.length;
                    var7 = var3.Math;
                    var6 = var7.max;
                    var3 = var0.maxSpeakerCount;
                    var3 = var6.bind(var7)(var3, var8);
                    var0.maxSpeakerCount = var3;
                case 203:
                    var3 = var0.userId;
                    if (!(var3 === var5)) {
                        _fun93998_ip = 354;
                        continue _fun93998
                    }
                case 215:
                    var3 = var0.speaking;
                    if (!(var1 !== var3)) {
                        _fun93998_ip = 358;
                        continue _fun93998
                    }
                case 228:
                    var3 = _closure1_slot7;
                    var3 = var3.NONE;
                    if (!(var1 !== var3)) {
                        _fun93998_ip = 348;
                        continue _fun93998
                    }
                case 242:
                    var3 = global;
                    var6 = var3.Object;
                    var5 = var6.values;
                    var8 = _closure1_slot5;
                    var7 = var8.getVoiceStatesForChannel;
                    var2 = var0.channelId;
                    var2 = var7.bind(var8)(var2);
                    var6 = var5.bind(var6)(var2);
                    var5 = var6.filter;
                    var2 = function(arg0) { // Environment: var4
                        _fun94000: for (var _fun94000_ip = 0;;) switch (_fun94000_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = var1.selfDeaf;
                                var0 = !var0;
                                if (!var0) {
                                    _fun94000_ip = 24;
                                    continue _fun94000
                                }
                            case 15:
                                var1 = var1.deaf;
                                var0 = !var1;
                            case 24:
                                return var0;
                        }
                    };
                    var2 = var5.bind(var6)(var2);
                    var5 = var2.forEach;
                    var4 = function(arg0) { // Environment: var4
                        var0 = _closure3_slot0;
                        var2 = var0.totalListeners;
                        var1 = var2.add;
                        var0 = arg0;
                        var0 = var0.userId;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4 = var5.bind(var2)(var4);
                    var5 = var3.Math;
                    var4 = var5.max;
                    var3 = var2.length;
                    var2 = var0.maxListenerCount;
                    var2 = var4.bind(var5)(var3, var2);
                    var0.maxListenerCount = var2;
                case 348:
                    var0.speaking = var1;
                case 354:
                    var0 = undefined;
                    return var0;
                case 358:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'setChannelId';
        var0.key = var5;
        var4 = function arg0() {
            _fun94002: for (var _fun94002_ip = 0;;) switch (_fun94002_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1.channelId;
                    if (!(var0 !== var2)) {
                        _fun94002_ip = 217;
                        continue _fun94002
                    }
                case 24:
                    var1.channelId = var0;
                    var2 = global;
                    var5 = var2.Set;
                    var3 = var1.userId;
                    var0 = new Array(1);
                    var0[0] = var3;
                    var3 = var5.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var5
                        }
                    });
                    var10 = var3;
                    var9 = var0;
                    var0 = new var10[var5](var9, var8);
                    var0 = var0 instanceof Object ? var0 : var3;
                    var1.totalParticipants = var0;
                    var6 = var2.Object;
                    var5 = var6.keys;
                    var8 = _closure1_slot5;
                    var7 = var8.getVoiceStatesForChannel;
                    var3 = var1.channelId;
                    var3 = var7.bind(var8)(var3);
                    var3 = var5.bind(var6)(var3);
                    var5 = var3.forEach;
                    var4 = function(arg0) { // Environment: var4
                        var0 = _closure3_slot0;
                        var2 = var0.totalParticipants;
                        var1 = var2.add;
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0);
                        return var0;
                    };
                    var4 = var5.bind(var3)(var4);
                    var3 = var3.length;
                    var1.maxVoiceStateCount = var3;
                    var0 = _closure1_slot7;
                    var0 = var0.NONE;
                    var1.speaking = var0;
                    var0 = 0;
                    var1.maxListenerCount = var0;
                    var2 = var2.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var10 = var3;
                    var2 = new var10[var2](var9);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var1.totalListeners = var2;
                    var1.maxSpeakerCount = var0;
                    var0 = {};
                    var1.totalSpeakers = var0;
                case 217:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'lib/VoiceStateAnalytics.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3476, 3521, 3526, 3510, 22, 2]);