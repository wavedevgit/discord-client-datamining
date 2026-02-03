// modules/media_channel/MediaChannelExperimentUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var11 = true;
    var3.value = var11;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var3 = var3.EMPTY_STRING_SNOWFLAKE_ID;
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var7[var3];
    var8 = var6.bind(var0)(var4);
    var5 = var8.createExperiment;
    var4 = {
        'kind': 'guild',
        'id': '2023-03_guild_media_channel',
        'label': 'Media Channel'
    };
    var9 = {};
    var10 = false;
    var9.enabled = var10;
    var4.defaultConfig = var9;
    var12 = {
        'id': 1,
        'label': 'Enables guild to create a media channel'
    };
    var9 = {};
    var9.enabled = var11;
    var12.config = var9;
    var9 = new Array(1);
    var9[0] = var12;
    var4.treatments = var9;
    var4 = var5.bind(var8)(var4);
    var _closure1_slot1 = var4;
    var3 = var7[var3];
    var8 = var6.bind(var0)(var3);
    var5 = var8.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2023-04_guild_media_channel_post_preview_embed_users',
        'label': 'Guild Role Subscription Users'
    };
    var9 = {};
    var9.enabledForUser = var10;
    var3.defaultConfig = var9;
    var10 = {
        'id': 1,
        'label': 'Enables for users Guild Media Post Preview Embeds'
    };
    var9 = {};
    var9.enabledForUser = var11;
    var10.config = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var3.treatments = var9;
    var3 = var5.bind(var8)(var3);
    var _closure1_slot2 = var3;
    var5 = 2;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/media_channel/MediaChannelExperimentUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.GuildMediaExperiment = var4;
    var4 = function arg0() {
        _fun65664: for (var _fun65664_ip = 0;;) switch (_fun65664_ip) {
            case 0:
                var3 = arg0;
                var6 = _closure1_slot1;
                var5 = var6.useExperiment;
                var4 = {};
                var2 = null;
                var8 = var2 == var3;
                var1 = undefined;
                if (var8) {
                    _fun65664_ip = 34;
                    continue _fun65664
                }
            case 29:
                var1 = var3.id;
            case 34:
                if (!(var2 == var1)) {
                    _fun65664_ip = 42;
                    continue _fun65664
                }
            case 38:
                var1 = _closure1_slot0;
            case 42:
                var4.guildId = var1;
                var1 = '96e84c_1';
                var4.location = var1;
                var1 = {};
                var7 = true;
                var1.autoTrackExposure = var7;
                var1 = var5.bind(var6)(var4, var1);
                var1 = var1.enabled;
                var4 = var2 == var3;
                var0 = undefined;
                if (var4) {
                    _fun65664_ip = 90;
                    continue _fun65664
                }
            case 85:
                var0 = var3.id;
            case 90:
                var0 = var2 != var0;
                if (!var0) {
                    _fun65664_ip = 100;
                    continue _fun65664
                }
            case 97:
                var0 = var1;
            case 100:
                return var0;
        }
    };
    var2.useGuildEligibleForMediaChannels = var4;
    var2.GuildMediaPostPreviewEmbedUsersExperiments = var3;
    var3 = function() {
        var3 = _closure1_slot2;
        var2 = var3.useExperiment;
        var1 = {};
        var0 = '96e84c_2';
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enabledForUser;
        return var0;
    };
    var2.useEligibleForGuildMediaChannelPostPreviewEmbed = var3;
    var1 = function() {
        var3 = _closure1_slot2;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = '96e84c_3';
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enabledForUser;
        return var0;
    };
    var2.isEligibleForGuildMediaChannelPostPreviewEmbed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3115, 2]);