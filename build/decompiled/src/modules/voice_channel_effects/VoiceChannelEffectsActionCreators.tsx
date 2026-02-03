// modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var4 = metroImportDefault;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var _closure1_slot2 = var6;
    var0 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var1 = global;
        var1 = var1.AbortController;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var7 = var2;
        var1 = new var7[var1](var6);
        var2 = var1 instanceof Object ? var1 : var2;
        var _closure2_slot1 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var1 = 6;
        var3 = var3[var1];
        var1 = undefined;
        var4 = var4.bind(var1)(var3);
        var3 = var4.throttle;
        var1 = function() { // Environment: var0
            _fun50788: for (var _fun50788_ip = 0;;) switch (_fun50788_ip) {
                case 0:
                    var1 = _closure1_slot4;
                    var0 = var1.getVoiceChannelId;
                    var2 = var0.bind(var1)();
                    var1 = _closure2_slot0;
                    if (!(var2 !== var1)) {
                        _fun50788_ip = 42;
                        continue _fun50788
                    }
                case 28:
                    var1 = _closure2_slot1;
                    var0 = var1.abort;
                    var0 = var0.bind(var1)();
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var0 = 1000;
        var1 = var3.bind(var4)(var1, var0);
        var0 = {};
        var0.abortController = var2;
        var0.onRequestProgress = var1;
        return var0;
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
    var3 = var6[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var6[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.VoiceChannelEffectAnimationType;
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var4 = var3.Endpoints;
    var _closure1_slot7 = var4;
    var3 = var3.NOOP_NULL;
    var _closure1_slot8 = var3;
    var3 = 5;
    var3 = var6[var3];
    var3 = var5.bind(var0)(var3);
    var3 = var3.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot9 = var3;
    var3 = {};
    var4 = 'emoji_picker';
    var3.EMOJI_PICKER = var4;
    var4 = 'effect_bar';
    var3.EFFECT_BAR = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/voice_channel_effects/VoiceChannelEffectsActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var2.VoiceChannelEffectSentLocation = var3;
    var3 = function arg0, arg1, arg2() {
        _fun50789: for (var _fun50789_ip = 0;;) switch (_fun50789_ip) {
            case 0:
                var13 = arg0;
                var2 = _closure1_slot10;
                var0 = undefined;
                var2 = var2.bind(var0)(var13);
                var9 = var2.abortController;
                var _closure2_slot0 = var9;
                var8 = var2.onRequestProgress;
                var3 = _closure1_slot5;
                var2 = var3.getState;
                var2 = var2.bind(var3)();
                var11 = var2.animationType;
                var2 = null;
                if (!(var2 == var11)) {
                    _fun50789_ip = 71;
                    continue _fun50789
                }
            case 61:
                var2 = _closure1_slot6;
                var11 = var2.BASIC;
            case 71:
                var10 = {};
                var10.animation_type = var11;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var5 = 7;
                var6 = var3[var5];
                var7 = var2.bind(var0)(var6);
                var6 = var7.sampleAnimationId;
                var5 = var3[var5];
                var5 = var2.bind(var0)(var5);
                var5 = var5.CUSTOM_CALL_SOUND_ANIMATION_RANGE;
                var5 = var6.bind(var7)(var11, var5);
                var10.animation_id = var5;
                var5 = 8;
                var5 = var3[var5];
                var5 = var2.bind(var0)(var5);
                var7 = var5.HTTP;
                var6 = var7.post;
                var5 = {};
                var12 = _closure1_slot7;
                var11 = var12.CUSTOM_CALL_SOUNDS;
                var11 = var11.bind(var12)(var13);
                var5.url = var11;
                var5.body = var10;
                var9 = var9.signal;
                var5.signal = var9;
                var5.onRequestProgress = var8;
                var8 = true;
                var5.rejectWithError = var8;
                var7 = var6.bind(var7)(var5);
                var6 = var7.then;
                var5 = _closure1_slot8;
                var4 = function() { // Environment: var4
                    var0 = _closure2_slot0;
                    var0 = var0.signal;
                    var0 = var0.aborted;
                    var0 = undefined;
                    return var0;
                };
                var4 = var6.bind(var7)(var5, var4);
                var4 = _closure1_slot1;
                var1 = 9;
                var1 = var3[var1];
                var5 = var4.bind(var0)(var1);
                var1 = 10;
                var1 = var3[var1];
                var1 = var4.bind(var0)(var1);
                var1 = var1.CHANNEL_CALL;
                var4 = new Array(1);
                var4[0] = var1;
                var1 = 11;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var1 = var1.AnalyticsSoundType;
                var14 = var1.ENTRY;
                var16 = arg2;
                var15 = arg1;
                var18 = undefined;
                var17 = var4;
                var1 = var18[var5](var17, var16, var15, var14, var13);
                return var0;
        }
    };
    var2.sendVoiceChannelCustomCallSoundEffect = var3;
    var1 = function arg0, arg1, arg2, arg3, arg4() {
        _fun50791: for (var _fun50791_ip = 0;;) switch (_fun50791_ip) {
            case 0:
                var15 = arg0;
                var6 = arg1;
                var5 = arg3;
                var0 = var6.emojiId;
                var2 = null;
                var0 = var2 != var0;
                var8 = null;
                if (!var0) {
                    _fun50791_ip = 52;
                    continue _fun50791
                }
            case 28:
                var4 = _closure1_slot3;
                var1 = var4.getCustomEmojiById;
                var0 = var6.emojiId;
                var8 = var1.bind(var4)(var0);
            case 52:
                var4 = _closure1_slot10;
                var0 = undefined;
                var4 = var4.bind(var0)(var15);
                var11 = var4.abortController;
                var _closure2_slot0 = var11;
                var10 = var4.onRequestProgress;
                var12 = {};
                var4 = var6.soundId;
                var12.sound_id = var4;
                var4 = var6.emojiId;
                var12.emoji_id = var4;
                var4 = var6.emojiName;
                if (!(var2 == var4)) {
                    _fun50791_ip = 133;
                    continue _fun50791
                }
            case 116:
                var9 = var2 == var8;
                var7 = undefined;
                if (var9) {
                    _fun50791_ip = 130;
                    continue _fun50791
                }
            case 125:
                var7 = var8.name;
            case 130:
                var4 = var7;
            case 133:
                var12.emoji_name = var4;
                var7 = var6.guildId;
                var4 = _closure1_slot9;
                if (!(var7 !== var4)) {
                    _fun50791_ip = 162;
                    continue _fun50791
                }
            case 151:
                var4 = var6.guildId;
                var12.source_guild_id = var4;
            case 162:
                var8 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 8;
                var4 = var7[var4];
                var4 = var8.bind(var0)(var4);
                var9 = var4.HTTP;
                var8 = var9.post;
                var4 = {};
                var14 = _closure1_slot7;
                var13 = var14.SEND_SOUNDBOARD_SOUND;
                var13 = var13.bind(var14)(var15);
                var4.url = var13;
                var4.body = var12;
                var11 = var11.signal;
                var4.signal = var11;
                var4.onRequestProgress = var10;
                var10 = true;
                var4.rejectWithError = var10;
                var9 = var8.bind(var9)(var4);
                var8 = var9.then;
                var4 = _closure1_slot8;
                var3 = function() { // Environment: var3
                    var0 = _closure2_slot0;
                    var0 = var0.signal;
                    var0 = var0.aborted;
                    var0 = undefined;
                    return var0;
                };
                var3 = var8.bind(var9)(var4, var3);
                var4 = _closure1_slot1;
                var3 = 9;
                var3 = var7[var3];
                var4 = var4.bind(var0)(var3);
                if (!(var2 == var5)) {
                    _fun50791_ip = 289;
                    continue _fun50791
                }
            case 285:
                var5 = new Array(0);
            case 289:
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 11;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var1 = var1.AnalyticsSoundType;
                var17 = var1.DEFAULT;
                var19 = arg2;
                var16 = arg4;
                var21 = undefined;
                var20 = var5;
                var18 = var6;
                var1 = var21[var4](var20, var19, var18, var17, var16, var15);
                return var0;
        }
    };
    var2.sendVoiceChannelSoundboardEffect = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4737, 1670, 5692, 5693, 660, 3957, 22, 5694, 507, 5717, 5579, 4799, 2]);