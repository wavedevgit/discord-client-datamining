// modules/soundboard/trackSoundPlayed.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.DEFAULT_SOUND_GUILD_ID;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.AnalyticsPremiumFeatureNames;
    var _closure1_slot8 = var6;
    var3 = var3.AnalyticsPremiumFeatureTiers;
    var _closure1_slot9 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/soundboard/trackSoundPlayed.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1, arg2, arg3, arg4) { // Original name: trackSoundPlayed, environment: var1
        _fun50605: for (var _fun50605_ip = 0;;) switch (_fun50605_ip) {
            case 0:
                var6 = arg2;
                var7 = arg4;
                var2 = _closure1_slot3;
                var1 = var2.getChannel;
                var3 = _closure1_slot5;
                var0 = var3.getVoiceChannelId;
                var0 = var0.bind(var3)();
                var2 = var1.bind(var2)(var0);
                var5 = null;
                var1 = var5 == var2;
                var0 = undefined;
                var12 = undefined;
                if (var1) {
                    _fun50605_ip = 60;
                    continue _fun50605
                }
            case 50:
                var1 = var2.getGuildId;
                var12 = var1.bind(var2)();
            case 60:
                var2 = _closure1_slot4;
                var1 = var2.getMediaSessionId;
                var10 = var1.bind(var2)();
                var1 = var2.getRTCConnectionId;
                var11 = var1.bind(var2)();
                var2 = _closure1_slot2;
                var1 = var2.getCurrentGameForAnalytics;
                var1 = var1.bind(var2)();
                var2 = var5 == var1;
                var9 = undefined;
                if (var2) {
                    _fun50605_ip = 112;
                    continue _fun50605
                }
            case 107:
                var9 = var1.name;
            case 112:
                var1 = var6.guildId;
                var13 = var12 !== var1;
                if (!var13) {
                    _fun50605_ip = 137;
                    continue _fun50605
                }
            case 124:
                var2 = var6.guildId;
                var1 = _closure1_slot6;
                var13 = var2 !== var1;
            case 137:
                var2 = var6.guildId;
                var1 = _closure1_slot6;
                var8 = 'default';
                if (!(var2 !== var1)) {
                    _fun50605_ip = 170;
                    continue _fun50605
                }
            case 154:
                var1 = 'custom';
                if (!var13) {
                    _fun50605_ip = 167;
                    continue _fun50605
                }
            case 161:
                var1 = 'custom-external';
            case 167:
                var8 = var1;
            case 170:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 7;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.track;
                var1 = _closure1_slot7;
                var2 = var1.PREMIUM_FEATURE_USAGE;
                var1 = {};
                var15 = _closure1_slot8;
                var15 = var15.SOUNDBOARD_PLAY;
                var1.feature_name = var15;
                var14 = _closure1_slot9;
                if (var13) {
                    _fun50605_ip = 237;
                    continue _fun50605
                }
            case 229:
                var13 = var14.FREE;
                _fun50605_ip = 243;
                continue _fun50605;
            case 237:
                var13 = var14.PREMIUM_STANDARD;
            case 243:
                var1.feature_tier = var13;
                var1.guild_id = var12;
                var12 = var6.guildId;
                var1.home_guild_id = var12;
                var12 = arg0;
                var1.location_stack = var12;
                var1.rtc_connection_id = var11;
                var1.media_session_id = var10;
                var10 = arg1;
                var1.in_overlay = var10;
                var1.application_name = var9;
                var9 = var6.emojiId;
                if (!(var5 == var9)) {
                    _fun50605_ip = 322;
                    continue _fun50605
                }
            case 307:
                var9 = var6.emojiName;
                var10 = var5 != var9;
                var9 = 0;
                if (!var10) {
                    _fun50605_ip = 325;
                    continue _fun50605
                }
            case 322:
                var9 = 1;
            case 325:
                var1.emoji_count = var9;
                var1.feature_selection = var8;
                var6 = var6.soundId;
                var1.feature_selection_id = var6;
                var6 = arg3;
                var1.sound_type = var6;
                var6 = var5 != var7;
                var5 = null;
                if (!var6) {
                    _fun50605_ip = 372;
                    continue _fun50605
                }
            case 365:
                var6 = 1;
                var5 = var7 + var6;
            case 372:
                var1.sequence_number = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3442, 1372, 3477, 1661, 3911, 660, 1615, 795, 2]);