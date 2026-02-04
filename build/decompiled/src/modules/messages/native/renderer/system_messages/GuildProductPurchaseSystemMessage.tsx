// modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx
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
    var3 = var3.MessageTypes;
    var _closure1_slot5 = var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/GuildProductPurchaseSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55922: for (var _fun55922_ip = 0;;) switch (_fun55922_ip) {
            case 0:
                var0 = arg0;
                var4 = {};
                var18 = var4;
                var17 = var0;
                var1 = copyDataProperties(var18, var17);
                var3 = _closure1_slot3;
                var18 = var0.message;
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var19 = var1;
                var0 = new var19[var3](var18, var17);
                var1 = var0 instanceof Object ? var0 : var1;
                var0 = 'message';
                var4[var0] = var1;
                var1 = var4.message;
                var0 = _closure1_slot5;
                var0 = var0.ROLE_SUBSCRIPTION_PURCHASE;
                var1.type = var0;
                var0 = var4.message;
                var1 = var0.purchaseNotification;
                var0 = null;
                var5 = var0 == var1;
                var3 = undefined;
                var12 = undefined;
                if (var5) {
                    _fun55922_ip = 122;
                    continue _fun55922
                }
            case 101:
                var1 = var1.guild_product_purchase;
                var5 = var0 == var1;
                var12 = undefined;
                if (var5) {
                    _fun55922_ip = 122;
                    continue _fun55922
                }
            case 116:
                var12 = var1.product_name;
            case 122:
                if (!(var0 != var12)) {
                    _fun55922_ip = 511;
                    continue _fun55922
                }
            case 129:
                var1 = var4.message;
                var6 = var1.author;
                var8 = _closure1_slot4;
                var7 = var8.getChannel;
                var5 = var1.getChannelId;
                var5 = var5.bind(var1)();
                var7 = var7.bind(var8)(var5);
                var5 = var0 == var7;
                var14 = undefined;
                if (var5) {
                    _fun55922_ip = 183;
                    continue _fun55922
                }
            case 173:
                var5 = var7.getGuildId;
                var14 = var5.bind(var7)();
            case 183:
                var8 = _closure1_slot0;
                var9 = _closure1_slot2;
                var5 = 3;
                var5 = var9[var5];
                var7 = var8.bind(var3)(var5);
                var5 = var7.getMessageAuthor;
                var5 = var5.bind(var7)(var1);
                var7 = var5.nick;
                var15 = var5.guildMemberAvatar;
                var5 = 4;
                var5 = var9[var5];
                var9 = var8.bind(var3)(var5);
                var8 = var9.ensureAvatarSource;
                if (!(var0 != var15)) {
                    _fun55922_ip = 252;
                    continue _fun55922
                }
            case 248:
                if (!(var0 == var14)) {
                    _fun55922_ip = 265;
                    continue _fun55922
                }
            case 252:
                var5 = var6.getAvatarSource;
                var5 = var5.bind(var6)(var3);
                _fun55922_ip = 317;
                continue _fun55922;
            case 265:
                var11 = _closure1_slot0;
                var13 = _closure1_slot2;
                var10 = 5;
                var10 = var13[var10];
                var13 = var11.bind(var3)(var10);
                var11 = var13.getGuildMemberAvatarSource;
                var10 = {};
                var16 = var6.id;
                var10.userId = var16;
                var10.avatar = var15;
                var10.guildId = var14;
                var5 = var11.bind(var13)(var10, var6);
            case 317:
                var5 = var8.bind(var9)(var5);
                var13 = {};
                var8 = 'bindUserMenu';
                var13.action = var8;
                var6 = var6.id;
                var13.userId = var6;
                var1 = var1.channel_id;
                var13.messageChannelId = var1;
                var1 = {};
                var9 = _closure1_slot0;
                var6 = _closure1_slot2;
                var8 = 6;
                var8 = var6[var8];
                var11 = var9.bind(var3)(var8);
                var10 = var11.getGuildProductPurchaseSystemMessageContentMobile;
                var8 = {};
                var8.username = var7;
                var8.usernameOnClickHandler = var13;
                var8.productName = var12;
                var8 = var10.bind(var11)(var8);
                var1.content = var8;
                var8 = 0;
                var1.totalMonthsSubscribed = var8;
                var1.username = var7;
                var5 = var5.uri;
                var1.avatarURL = var5;
                var5 = 7;
                var7 = var6[var5];
                var7 = var9.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.string;
                var5 = var6[var5];
                var5 = var9.bind(var3)(var5);
                var5 = var5.t;
                var5 = var5.s2N5HS;
                var5 = var7.bind(var8)(var5);
                var1.welcomeLabel = var5;
                var5 = _closure1_slot1;
                var2 = 8;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var17 = var2.bind(var3)(var4);
                var18 = var1;
                var2 = copyDataProperties(var18, var17);
                return var1;
            case 511:
                return var0;
        }
    };
    var2.createGuildProductPurchaseSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3101, 1372, 660, 3983, 1418, 1417, 6693, 1234, 6678, 2]);