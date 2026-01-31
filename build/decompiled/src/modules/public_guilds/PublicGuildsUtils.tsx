// modules/public_guilds/PublicGuildsUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var6 = var3.PUBLIC_GUILD_ANNOUNCEMENTS_GUILD_ID;
    var _closure1_slot3 = var6;
    var6 = var3.PUBLIC_GUILD_UPDATES_WEBHOOK_USER_ID;
    var _closure1_slot4 = var6;
    var3 = var3.ENABLE_COMMUNITY_FLOW_MODAL_KEY;
    var _closure1_slot5 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot6 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/public_guilds/PublicGuildsUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun55773: for (var _fun55773_ip = 0;;) switch (_fun55773_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 2;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var4.bind(var1)(var0);
                var0 = var0.bind(var1)(var3);
                if (!var0) {
                    _fun55773_ip = 55;
                    continue _fun55773
                }
            case 36:
                var1 = var3.messageReference;
                var4 = var1.guild_id;
                var1 = _closure1_slot3;
                var0 = var4 === var1;
            case 55:
                if (var0) {
                    _fun55773_ip = 95;
                    continue _fun55773
                }
            case 58:
                var4 = var3.author;
                var1 = null;
                var1 = var1 != var4;
                if (!var1) {
                    _fun55773_ip = 92;
                    continue _fun55773
                }
            case 73:
                var3 = var3.author;
                var3 = var3.id;
                var2 = _closure1_slot4;
                var1 = var3 === var2;
            case 92:
                var0 = var1;
            case 95:
                return var0;
        }
    };
    var2.isPublicSystemMessage = var3;
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = _closure1_slot2;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.getPublicSystemMessageAvatar = var3;
    var1 = function(arg0) { // Environment: var1
        var5 = arg0;
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 4;
        var1 = var8[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot6;
        var2 = var1.USER_FLOW_TRANSITION;
        var1 = {};
        var7 = _closure1_slot5;
        var1.flow_type = var7;
        var7 = var5.fromStep;
        var1.from_step = var7;
        var7 = var5.toStep;
        var1.to_step = var7;
        var7 = _closure1_slot0;
        var6 = 5;
        var6 = var8[var6];
        var7 = var7.bind(var0)(var6);
        var6 = var7.collectGuildAnalyticsMetadata;
        var5 = var5.guildId;
        var9 = var6.bind(var7)(var5);
        var10 = var1;
        var5 = copyDataProperties(var10, var9);
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackEnableCommunityFlow = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6714, 660, 6715, 6716, 795, 4266, 2]);