// modules/soundboard/SoundboardTypes.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var9 = {};
    var10 = 0;
    var9.NONE = var10;
    var0 = 'NONE';
    var9[var10] = var0;
    var14 = 1;
    var9.PLAY = var14;
    var0 = 'PLAY';
    var9[var14] = var0;
    var13 = 2;
    var9.ADD = var13;
    var0 = 'ADD';
    var9[var13] = var0;
    var11 = 3;
    var9.SOUNDMOJI = var11;
    var0 = 'SOUNDMOJI';
    var9[var11] = var0;
    var8 = {};
    var1 = 'entry_sound';
    var8.ENTRY = var1;
    var1 = 'exit_sound';
    var8.EXIT = var1;
    var1 = 'default';
    var8.DEFAULT = var1;
    var7 = {};
    var3 = 'added';
    var7.ADDED = var3;
    var3 = 'updated';
    var7.UPDATED = var3;
    var3 = 'removed';
    var7.REMOVED = var3;
    var6 = {};
    var6.DEFAULT = var1;
    var1 = 'custom';
    var6.CUSTOM = var1;
    var4 = {};
    var4.FAVORITES = var10;
    var1 = 'FAVORITES';
    var4[var10] = var1;
    var4.RECENTLY_HEARD = var14;
    var1 = 'RECENTLY_HEARD';
    var4[var14] = var1;
    var4.FREQUENTLY_USED = var13;
    var1 = 'FREQUENTLY_USED';
    var4[var13] = var1;
    var4.GUILD = var11;
    var1 = 'GUILD';
    var4[var11] = var1;
    var3 = 4;
    var4.DEFAULTS = var3;
    var1 = 'DEFAULTS';
    var4[var3] = var1;
    var3 = 5;
    var4.SEARCH = var3;
    var1 = 'SEARCH';
    var4[var3] = var1;
    var3 = {};
    var3.SOUND = var10;
    var1 = 'SOUND';
    var3[var10] = var1;
    var3.ADD_SOUND = var14;
    var1 = 'ADD_SOUND';
    var3[var14] = var1;
    var1 = {};
    var1.GIFT_CODE = var10;
    var12 = 'GIFT_CODE';
    var1[var10] = var12;
    var1.SOUNDBOARD = var14;
    var12 = 'SOUNDBOARD';
    var1[var14] = var12;
    var1.JOINED_VOICE_CHANNEL = var13;
    var12 = 'JOINED_VOICE_CHANNEL';
    var1[var13] = var12;
    var1.SOUNDMOJI = var11;
    var1[var11] = var0;
    var0 = dependencyMap;
    var11 = var0[var10];
    var10 = require;
    var0 = undefined;
    var12 = var10.bind(var0)(var11);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/soundboard/SoundboardTypes.tsx';
    var10 = var11.bind(var12)(var10);
    var10 = function arg0() {
        var0 = arg0;
        var2 = var0.sound_id;
        var1 = var0.rank;
        var0 = {};
        var0.soundId = var2;
        var0.rank = var1;
        return var0;
    };
    var2.topSoundForGuildFromAPI = var10;
    var2.SoundButtonOverlay = var9;
    var2.AnalyticsSoundType = var8;
    var2.AnalyticsChangeType = var7;
    var2.AnalyticsSoundSource = var6;
    var6 = function arg0, arg1() {
        _fun44171: for (var _fun44171_ip = 0;;) switch (_fun44171_ip) {
            case 0:
                var8 = arg0;
                var7 = var8.sound_id;
                var6 = var8.emoji_id;
                var5 = var8.emoji_name;
                var4 = var8.user_id;
                var1 = var8.available;
                var3 = {
                    'sound_id': 0,
                    'emoji_id': 0,
                    'emoji_name': 0,
                    'user_id': 0,
                    'available': 0
                };
                var2 = null;
                var11 = var3;
                var10 = null;
                var0 = silentSetPrototypeOf(var11, var10);
                var11 = {};
                var10 = var8;
                var9 = var3;
                var10 = copyDataProperties(var11, var10, var9);
                var0 = {};
                var11 = var0;
                var3 = copyDataProperties(var11, var10);
                var3 = 'soundId';
                var0[var3] = var7;
                var7 = arg1;
                var3 = 'guildId';
                var0[var3] = var7;
                var3 = 'emojiId';
                var0[var3] = var6;
                var3 = 'emojiName';
                var0[var3] = var5;
                var3 = 'userId';
                var0[var3] = var4;
                var2 = var2 == var1;
                if (var2) {
                    _fun44171_ip = 137;
                    continue _fun44171
                }
            case 134:
                var2 = var1;
            case 137:
                var1 = 'available';
                var0[var1] = var2;
                return var0;
        }
    };
    var2.soundboardSoundFromAPI = var6;
    var5 = function arg0() {
        var7 = arg0;
        var6 = var7.soundId;
        var5 = var7.guildId;
        var4 = var7.emojiId;
        var3 = var7.emojiName;
        var2 = var7.userId;
        var1 = {
            'soundId': 0,
            'guildId': 0,
            'emojiId': 0,
            'emojiName': 0,
            'userId': 0
        };
        var9 = null;
        var10 = var1;
        var0 = silentSetPrototypeOf(var10, var9);
        var10 = {};
        var9 = var7;
        var8 = var1;
        var9 = copyDataProperties(var10, var9, var8);
        var0 = {};
        var10 = var0;
        var1 = copyDataProperties(var10, var9);
        var1 = 'sound_id';
        var0[var1] = var6;
        var1 = 'guild_id';
        var0[var1] = var5;
        var1 = 'emoji_id';
        var0[var1] = var4;
        var1 = 'emoji_name';
        var0[var1] = var3;
        var1 = 'user_id';
        var0[var1] = var2;
        return var0;
    };
    var2.soundboardSoundToAPI = var5;
    var2.SoundboardSoundGridSectionType = var4;
    var2.SoundboardSoundItemType = var3;
    var2.LocalSoundTrigger = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);