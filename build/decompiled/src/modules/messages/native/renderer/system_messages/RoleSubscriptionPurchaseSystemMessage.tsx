// modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
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
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.SystemChannelFlags;
    var _closure1_slot5 = var3;
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/RoleSubscriptionPurchaseSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55968: for (var _fun55968_ip = 0;;) switch (_fun55968_ip) {
            case 0:
                var4 = arg0;
                var5 = var4.message;
                var10 = var5.roleSubscriptionData;
                var0 = null;
                if (!(var0 != var10)) {
                    _fun55968_ip = 733;
                    continue _fun55968
                }
            case 23:
                var1 = var5.author;
                var7 = _closure1_slot3;
                var6 = var7.getChannel;
                var3 = var5.getChannelId;
                var3 = var3.bind(var5)();
                var11 = var6.bind(var7)(var3);
                var7 = var0 == var11;
                var3 = undefined;
                var6 = undefined;
                if (var7) {
                    _fun55968_ip = 77;
                    continue _fun55968
                }
            case 67:
                var7 = var11.getGuildId;
                var6 = var7.bind(var11)();
            case 77:
                var8 = _closure1_slot4;
                var7 = var8.getGuild;
                var7 = var7.bind(var8)(var6);
                var9 = _closure1_slot0;
                var12 = _closure1_slot2;
                var8 = 3;
                var8 = var12[var8];
                var9 = var9.bind(var3)(var8);
                var8 = var9.getMessageAuthor;
                var8 = var8.bind(var9)(var5);
                var9 = var8.nick;
                var16 = var8.guildMemberAvatar;
                var8 = var0 != var6;
                var17 = var6;
                var6 = undefined;
                if (!var8) {
                    _fun55968_ip = 300;
                    continue _fun55968
                }
            case 149:
                var8 = var0 != var11;
                var6 = undefined;
                if (!var8) {
                    _fun55968_ip = 300;
                    continue _fun55968
                }
            case 161:
                var12 = var0 != var7;
                if (!var12) {
                    _fun55968_ip = 191;
                    continue _fun55968
                }
            case 168:
                var8 = var7.systemChannelFlags;
                var7 = _closure1_slot5;
                var7 = var7.SUPPRESS_ROLE_SUBSCRIPTION_PURCHASE_NOTIFICATION_REPLIES;
                var7 = var8 & var7;
                var12 = !var7;
            case 191:
                var8 = _closure1_slot0;
                var13 = _closure1_slot2;
                var7 = 4;
                var7 = var13[var7];
                var8 = var8.bind(var3)(var7);
                var7 = var8.computeIsStickerReplyEnabled;
                var23 = var8;
                var22 = var17;
                var21 = var11;
                var20 = var5;
                var19 = var12;
                var7 = var23[var7](var22, var21, var20, var19, var18);
                var6 = undefined;
                if (!var7) {
                    _fun55968_ip = 300;
                    continue _fun55968
                }
            case 241:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var7 = 5;
                var7 = var14[var7];
                var12 = var13.bind(var3)(var7);
                var8 = var12.transformSticker;
                var7 = 6;
                var7 = var14[var7];
                var14 = var13.bind(var3)(var7);
                var13 = var14.pickRoleSubscriptionPurchaseSticker;
                var7 = var5.id;
                var7 = var13.bind(var14)(var7);
                var6 = var8.bind(var12)(var7);
            case 300:
                var8 = _closure1_slot0;
                var12 = _closure1_slot2;
                var7 = 7;
                var7 = var12[var7];
                var12 = var8.bind(var3)(var7);
                var8 = var12.ensureAvatarSource;
                if (!(var0 != var16)) {
                    _fun55968_ip = 334;
                    continue _fun55968
                }
            case 330:
                if (!(var0 == var17)) {
                    _fun55968_ip = 347;
                    continue _fun55968
                }
            case 334:
                var7 = var1.getAvatarSource;
                var7 = var7.bind(var1)(var3);
                _fun55968_ip = 399;
                continue _fun55968;
            case 347:
                var14 = _closure1_slot0;
                var15 = _closure1_slot2;
                var13 = 8;
                var13 = var15[var13];
                var15 = var14.bind(var3)(var13);
                var14 = var15.getGuildMemberAvatarSource;
                var13 = {};
                var18 = var1.id;
                var13.userId = var18;
                var13.avatar = var16;
                var13.guildId = var17;
                var7 = var14.bind(var15)(var13, var1);
            case 399:
                var8 = var8.bind(var12)(var7);
                var14 = {};
                var7 = 'bindOpenRoleSubscriptionOverview';
                var14.action = var7;
                var14.guildId = var17;
                var7 = var5.id;
                var14.messageId = var7;
                var12 = var0 == var11;
                var7 = undefined;
                if (var12) {
                    _fun55968_ip = 443;
                    continue _fun55968
                }
            case 438:
                var7 = var11.id;
            case 443:
                var14.channelId = var7;
                var11 = var5.roleSubscriptionData;
                var12 = var0 == var11;
                var7 = undefined;
                if (var12) {
                    _fun55968_ip = 468;
                    continue _fun55968
                }
            case 462:
                var7 = var11.role_subscription_listing_id;
            case 468:
                var14.roleSubscriptionListingId = var7;
                var15 = {};
                var7 = 'bindUserMenu';
                var15.action = var7;
                var1 = var1.id;
                var15.userId = var1;
                var1 = var5.channel_id;
                var15.messageChannelId = var1;
                var1 = {};
                var12 = _closure1_slot0;
                var11 = _closure1_slot2;
                var7 = 6;
                var11 = var11[var7];
                var13 = var12.bind(var3)(var11);
                var12 = var13.getRoleSubscriptionPurchaseSystemMessageContentMobile;
                var11 = {};
                var11.username = var9;
                var18 = var0 != var17;
                var16 = undefined;
                if (!var18) {
                    _fun55968_ip = 550;
                    continue _fun55968
                }
            case 547:
                var16 = var17;
            case 550:
                var11.guildId = var16;
                var11.usernameOnClickHandler = var15;
                var11.roleSubscriptionOnClickHandler = var14;
                var11.roleSubscriptionData = var10;
                var11 = var12.bind(var13)(var11);
                var1.content = var11;
                var10 = var10.total_months_subscribed;
                var1.totalMonthsSubscribed = var10;
                var1.username = var9;
                var8 = var8.uri;
                var1.avatarURL = var8;
                var1.sticker = var6;
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var7 = var6[var7];
                var10 = var9.bind(var3)(var7);
                var8 = var10.getRoleSubscriptionPurchaseStickerCTA;
                var7 = var5.id;
                var5 = false;
                var5 = var8.bind(var10)(var7, var5);
                var1.stickerLabel = var5;
                var5 = 9;
                var7 = var6[var5];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var5 = var6[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.piPHvY;
                var5 = var7.bind(var8)(var5);
                var1.welcomeLabel = var5;
                var5 = _closure1_slot1;
                var2 = 10;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var21 = var2.bind(var3)(var4);
                var22 = var1;
                var2 = copyDataProperties(var22, var21);
                return var1;
            case 733:
                return var0;
        }
    };
    var2.createRoleSubscriptionPurchaseSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1410, 660, 3983, 6720, 6723, 6715, 1418, 1417, 1234, 6702, 2]);