// modules/activities/utils/trackApplicationOpen.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
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
    var3 = var3.AnalyticEvents;
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/activities/utils/trackApplicationOpen.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun64266: for (var _fun64266_ip = 0;;) switch (_fun64266_ip) {
            case 0:
                var0 = arg0;
                var18 = var0.type;
                var17 = var0.source;
                var11 = var0.userId;
                var16 = var0.guildId;
                var15 = var0.channelId;
                var14 = var0.channelType;
                var12 = var0.applicationId;
                var13 = var0.partyId;
                var10 = var0.messageId;
                var9 = var0.locationObject;
                var8 = var0.analyticsLocations;
                var7 = var0.referrerId;
                var6 = var0.inviterUserId;
                var5 = var0.remoteJoinPlatform;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot2;
                var2 = var1.APPLICATION_OPENED;
                var1 = {};
                var1.type = var18;
                var1.source = var17;
                var1.guild_id = var16;
                var1.channel_id = var15;
                var1.channel_type = var14;
                var1.application_id = var12;
                var12 = null;
                var14 = var12 != var13;
                var12 = undefined;
                if (!var14) {
                    _fun64266_ip = 162;
                    continue _fun64266
                }
            case 159:
                var12 = var13;
            case 162:
                var1.party_id = var12;
                var1.other_user_id = var11;
                var1.message_id = var10;
                var1.location = var9;
                var1.location_stack = var8;
                var1.referrer_id = var7;
                var1.invite_inviter_id = var6;
                var1.remote_join_platform = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 795, 2]);