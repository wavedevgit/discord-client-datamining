// modules/channel/ChannelConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var8 = {};
    var1 = 'role-subscriptions';
    var8.ROLE_SUBSCRIPTIONS = var1;
    var1 = 'server-monetization-onboarding';
    var8.SERVER_MONETIZATION_ONBOARDING = var1;
    var1 = 'game-shop';
    var8.GAME_SHOP = var1;
    var1 = 'shop';
    var8.GUILD_SHOP = var1;
    var1 = 'member-applications';
    var8.MEMBER_APPLICATIONS = var1;
    var1 = '@home';
    var8.GUILD_HOME = var1;
    var1 = 'channel-browser';
    var8.CHANNEL_BROWSER = var1;
    var1 = 'onboarding';
    var8.GUILD_ONBOARDING = var1;
    var1 = 'customize-community';
    var8.CUSTOMIZE_COMMUNITY = var1;
    var1 = 'member-safety';
    var8.MEMBER_SAFETY = var1;
    var1 = 'boosts';
    var8.GUILD_BOOSTS = var1;
    var1 = 'game-servers';
    var8.GAME_SERVERS = var1;
    var1 = 'report-to-mod';
    var8.REPORT_TO_MOD = var1;
    var _closure1_slot0 = var8;
    var4 = var0.Set;
    var3 = var0.Object;
    var1 = var3.values;
    var14 = var1.bind(var3)(var8);
    var3 = var4.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var4
        }
    });
    var15 = var3;
    var1 = new var15[var4](var14, var13);
    var7 = var1 instanceof Object ? var1 : var3;
    var _closure1_slot1 = var7;
    var5 = var0.Object;
    var3 = var5.freeze;
    var4 = 1024;
    var1 = {
        'GUILD_FEED_REMOVED': 1,
        'PINNED': 2,
        'ACTIVE_CHANNELS_REMOVED': 4,
        'REQUIRE_TAG': 16,
        'IS_SPAM': 32,
        'IS_GUILD_RESOURCE_CHANNEL': 128,
        'CLYDE_AI': 256,
        'IS_SCHEDULED_FOR_DELETION': 512,
        'IS_MEDIA_CHANNEL': 1024,
        'SUMMARIES_DISABLED': 2048,
        'IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL': 8192,
        'IS_BROADCASTING': 16384,
        'HIDE_MEDIA_DOWNLOAD_OPTIONS': 32768,
        'IS_JOIN_REQUEST_INTERVIEW_CHANNEL': 65536,
        'OBFUSCATED': 131072,
        'IS_MODERATOR_REPORT_CHANNEL': 524288
    };
    var5 = var3.bind(var5)(var1);
    var3 = {};
    var1 = 'home';
    var3.GUILD_HOME = var1;
    var1 = 'guide';
    var3.SERVER_GUIDE = var1;
    var1 = 'browse';
    var3.CHANNEL_BROWSER = var1;
    var1 = 'customize';
    var3.CUSTOMIZE_COMMUNITY = var1;
    var1 = 'linked-roles';
    var3.LINKED_ROLES = var1;
    var9 = var0.Set;
    var1 = var0.Object;
    var0 = var1.values;
    var14 = var0.bind(var1)(var3);
    var1 = var9.prototype;
    var1 = Object.create(var1, {
        constructor: {
            value: var9
        }
    });
    var15 = var1;
    var0 = new var15[var9](var14, var13);
    var1 = var0 instanceof Object ? var0 : var1;
    var9 = dependencyMap;
    var0 = 0;
    var10 = var9[var0];
    var9 = require;
    var0 = undefined;
    var11 = var9.bind(var0)(var10);
    var10 = var11.fileFinishedImporting;
    var9 = 'modules/channel/ChannelConstants.tsx';
    var9 = var10.bind(var11)(var9);
    var2.StaticChannelRoute = var8;
    var2.StaticChannelRoutes = var7;
    var7 = function(arg0) { // Original name: isStaticChannelRoute, environment: var6
        var2 = _closure1_slot1;
        var1 = var2.has;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.isStaticChannelRoute = var7;
    var7 = function(arg0, arg1) { // Original name: buildGuildStaticChannelId, environment: var6
        var0 = global;
        var0 = var0.HermesInternal;
        var4 = var0.concat;
        var3 = '';
        var2 = arg0;
        var1 = '-';
        var0 = arg1;
        var0 = var4.bind(var3)(var2, var1, var0);
        return var0;
    };
    var2.buildGuildStaticChannelId = var7;
    var6 = function(arg0) { // Original name: isGuildHomeChannel, environment: var6
        _fun16177: for (var _fun16177_ip = 0;;) switch (_fun16177_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var0 = var0 == var3;
                if (var0) {
                    _fun16177_ip = 38;
                    continue _fun16177
                }
            case 12:
                var2 = var3.includes;
                var1 = _closure1_slot0;
                var1 = var1.GUILD_HOME;
                var1 = var2.bind(var3)(var1);
                var0 = !var1;
            case 38:
                var0 = !var0;
                return var0;
        }
    };
    var2.isGuildHomeChannel = var6;
    var2.ChannelFlags = var5;
    var2.MAX_CHANNEL_TOPIC_LENGTH = var4;
    var4 = 4096;
    var2.MAX_FORUM_CHANNEL_TOPIC_LENGTH = var4;
    var2.StaticChannelId = var3;
    var2.StaticChannelIds = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);