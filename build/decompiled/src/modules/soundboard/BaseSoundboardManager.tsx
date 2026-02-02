// modules/soundboard/BaseSoundboardManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = function() {
        _fun98540: for (var _fun98540_ip = 0;;) switch (_fun98540_ip) {
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
                _fun98540_ip = 76;
                continue _fun98540;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot9 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot9 = var0;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var4[var3];
    var3 = var5.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun98544: for (var _fun98544_ip = 0;;) switch (_fun98544_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var7 = _closure1_slot2;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var7 = var7.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot9;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun98544_ip = 86;
                        continue _fun98544
                    }
                case 73:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun98544_ip = 120;
                    continue _fun98544;
                case 86:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 120:
                    var0 = var2.bind(var3)(var4, var0);
                    var _closure3_slot0 = var0;
                    var2 = function() { // Environment: var1
                        var0 = undefined;
                        return var0;
                    };
                    var0._playSound = var2;
                    var2 = function() { // Environment: var1
                        var0 = undefined;
                        return var0;
                    };
                    var0._stopAndClearSounds = var2;
                    var2 = function() { // Environment: var1
                        _fun98547: for (var _fun98547_ip = 0;;) switch (_fun98547_ip) {
                            case 0:
                                var1 = _closure1_slot8;
                                var0 = var1.isDeaf;
                                var0 = var0.bind(var1)();
                                if (!var0) {
                                    _fun98547_ip = 37;
                                    continue _fun98547
                                }
                            case 20:
                                var1 = _closure3_slot0;
                                var0 = var1._stopAndClearSounds;
                                var0 = var0.bind(var1)();
                            case 37:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0._handleToggleSelfDeafened = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun98548: for (var _fun98548_ip = 0;;) switch (_fun98548_ip) {
                            case 0:
                                var0 = arg0;
                                var5 = var0.soundId;
                                var4 = var0.soundVolume;
                                var3 = var0.userId;
                                var2 = var0.channelId;
                                var0 = null;
                                if (!(var0 != var5)) {
                                    _fun98548_ip = 52;
                                    continue _fun98548
                                }
                            case 31:
                                var1 = _closure1_slot7;
                                var0 = var1.getId;
                                var0 = var0.bind(var1)();
                                if (!(var3 === var0)) {
                                    _fun98548_ip = 56;
                                    continue _fun98548
                                }
                            case 52:
                                var0 = undefined;
                                return var0;
                            case 56:
                                var1 = _closure3_slot0;
                                var0 = var1._playSound;
                                var10 = var1;
                                var9 = var5;
                                var8 = var4;
                                var7 = var3;
                                var6 = var2;
                                var0 = var10[var0](var9, var8, var7, var6, var5);
                                return var0;
                        }
                    };
                    var0._handleSoundboardSoundReceived = var2;
                    var2 = function(arg0) { // Environment: var1
                        var1 = arg0;
                        var0 = var1.sound;
                        var6 = var1.channelId;
                        var2 = _closure1_slot7;
                        var1 = var2.getId;
                        var7 = var1.bind(var2)();
                        var3 = _closure3_slot0;
                        var2 = var3._playSound;
                        var9 = var0.soundId;
                        var8 = var0.volume;
                        var10 = var3;
                        var0 = var10[var2](var9, var8, var7, var6, var5);
                        return var0;
                    };
                    var0._handleSoundboardSoundPlayLocally = var2;
                    var1 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1._stopAndClearSounds;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var0._handleVoiceChannelSelect = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            var1 = this;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 7;
            var5 = var4[var2];
            var0 = undefined;
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1._handleSoundboardSoundReceived;
            var5 = 'VOICE_CHANNEL_EFFECT_SEND';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1._handleSoundboardSoundPlayLocally;
            var5 = 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.subscribe;
            var6 = var1._handleVoiceChannelSelect;
            var5 = 'VOICE_CHANNEL_SELECT';
            var5 = var7.bind(var8)(var5, var6);
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.subscribe;
            var2 = var1._handleToggleSelfDeafened;
            var1 = 'AUDIO_TOGGLE_SELF_DEAF';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_terminate';
        var4.key = var6;
        var5 = function() {
            var1 = this;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 7;
            var5 = var4[var2];
            var0 = undefined;
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1._handleSoundboardSoundReceived;
            var5 = 'VOICE_CHANNEL_EFFECT_SEND';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1._handleSoundboardSoundPlayLocally;
            var5 = 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1._handleVoiceChannelSelect;
            var5 = 'VOICE_CHANNEL_SELECT';
            var5 = var7.bind(var8)(var5, var6);
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.unsubscribe;
            var2 = var1._handleToggleSelfDeafened;
            var1 = 'AUDIO_TOGGLE_SELF_DEAF';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 9;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/soundboard/BaseSoundboardManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 1216, 3437, 806, 3979, 2]);