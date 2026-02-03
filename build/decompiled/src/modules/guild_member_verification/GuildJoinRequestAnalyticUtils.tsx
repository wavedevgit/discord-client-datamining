// modules/guild_member_verification/GuildJoinRequestAnalyticUtils.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.AnalyticEvents;
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/GuildJoinRequestAnalyticUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = arg0;
        var8 = var0.guildId;
        var6 = var0.applicationUserId;
        var5 = var0.applicationStatus;
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot4;
        var2 = var1.GUILD_MEMBER_APPLICATION_VIEWED;
        var1 = {};
        var1.guild_id = var8;
        var8 = _closure1_slot2;
        var7 = var8.getId;
        var7 = var7.bind(var8)();
        var1.viewing_user_id = var7;
        var1.application_user_id = var6;
        var1.application_status = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackMemberApplicationViewed = var3;
    var3 = function arg0() {
        var0 = arg0;
        var8 = var0.guildId;
        var7 = var0.actionType;
        var6 = var0.applicationUserId;
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var4 = var2.bind(var0)(var1);
        var3 = var4.track;
        var1 = _closure1_slot4;
        var2 = var1.GUILD_MEMBER_APPLICATION_ACTION;
        var1 = {};
        var1.guild_id = var8;
        var1.action_type = var7;
        var1.application_user_id = var6;
        var6 = _closure1_slot2;
        var5 = var6.getId;
        var5 = var5.bind(var6)();
        var1.viewing_user_id = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackMemberApplicationAction = var3;
    var3 = function arg0() {
        _fun55221: for (var _fun55221_ip = 0;;) switch (_fun55221_ip) {
            case 0:
                var0 = arg0;
                var11 = var0.guildId;
                var9 = var0.messageId;
                var10 = var0.channelId;
                var6 = var0.joinRequestStatus;
                var5 = var0.joinRequestUserId;
                var2 = _closure1_slot2;
                var0 = var2.getId;
                var8 = var0.bind(var2)();
                var2 = _closure1_slot3;
                var0 = var2.getMember;
                var4 = var0.bind(var2)(var11, var8);
                var3 = null;
                var7 = var3 == var4;
                var0 = undefined;
                var2 = undefined;
                if (var7) {
                    _fun55221_ip = 82;
                    continue _fun55221
                }
            case 76:
                var2 = var4.joinedAt;
            case 82:
                var7 = var3 != var2;
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var2 = 3;
                var2 = var4[var2];
                var4 = var3.bind(var0)(var2);
                var3 = var4.track;
                var1 = _closure1_slot4;
                var2 = var1.GUILD_MEMBER_APPLICATION_INTERVIEW_MESSAGE;
                var1 = {};
                var1.guild_id = var11;
                var1.channel_id = var10;
                var1.message_id = var9;
                var1.message_user_id = var8;
                var1.is_member = var7;
                var1.join_request_status = var6;
                var1.join_request_user_id = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var0;
        }
    };
    var2.trackMemberApplicationInterviewMessage = var3;
    var1 = function arg0() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var4 = var3.bind(var0)(var2);
        var3 = var4.track;
        var1 = _closure1_slot4;
        var2 = var1.MEMBER_VERIFICATION_APPLICATION_VIEWED;
        var1 = {};
        var5 = arg0;
        var1.guild_id = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var0;
    };
    var2.trackMemberVerificationApplicationViewed = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 1681, 660, 795, 2]);