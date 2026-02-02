// modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx
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
    var3 = 'modules/messages/native/renderer/system_messages/UserJoinSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55407: for (var _fun55407_ip = 0;;) switch (_fun55407_ip) {
            case 0:
                var3 = arg0;
                var11 = var3.message;
                var15 = var3.roleStyle;
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var0 = 3;
                var0 = var5[var0];
                var2 = undefined;
                var4 = var4.bind(var2)(var0);
                var0 = var4.getMessageAuthorWithProcessedColor;
                var0 = var0.bind(var4)(var11);
                var10 = var0.nick;
                var14 = var0.colorString;
                var16 = var0.colorStrings;
                var12 = var0.guildId;
                var6 = _closure1_slot3;
                var4 = var6.getChannel;
                var0 = var11.getChannelId;
                var0 = var0.bind(var11)();
                var8 = var4.bind(var6)(var0);
                var4 = _closure1_slot1;
                var0 = 4;
                var0 = var5[var0];
                var5 = var4.bind(var2)(var0);
                var4 = var5.getSystemMessageUserJoinMobile;
                var0 = var11.id;
                var9 = var4.bind(var5)(var0);
                var13 = null;
                var0 = var13 == var8;
                var7 = undefined;
                if (var0) {
                    _fun55407_ip = 150;
                    continue _fun55407
                }
            case 140:
                var0 = var8.getGuildId;
                var7 = var0.bind(var8)();
            case 150:
                var0 = var13 != var7;
                var5 = undefined;
                if (!var0) {
                    _fun55407_ip = 327;
                    continue _fun55407
                }
            case 162:
                var0 = var13 != var8;
                var5 = undefined;
                if (!var0) {
                    _fun55407_ip = 327;
                    continue _fun55407
                }
            case 174:
                var4 = _closure1_slot4;
                var0 = var4.getGuild;
                var0 = var0.bind(var4)(var7);
                var6 = var13 != var0;
                if (!var6) {
                    _fun55407_ip = 218;
                    continue _fun55407
                }
            case 195:
                var4 = var0.systemChannelFlags;
                var0 = _closure1_slot5;
                var0 = var0.SUPPRESS_JOIN_NOTIFICATION_REPLIES;
                var0 = var4 & var0;
                var6 = !var0;
            case 218:
                var4 = _closure1_slot0;
                var17 = _closure1_slot2;
                var0 = 5;
                var0 = var17[var0];
                var4 = var4.bind(var2)(var0);
                var0 = var4.computeIsStickerReplyEnabled;
                var23 = var4;
                var22 = var7;
                var21 = var8;
                var20 = var11;
                var19 = var6;
                var0 = var23[var0](var22, var21, var20, var19, var18);
                var5 = undefined;
                if (!var0) {
                    _fun55407_ip = 327;
                    continue _fun55407
                }
            case 268:
                var7 = _closure1_slot0;
                var8 = _closure1_slot2;
                var0 = 6;
                var0 = var8[var0];
                var6 = var7.bind(var2)(var0);
                var4 = var6.transformSticker;
                var0 = 7;
                var0 = var8[var0];
                var8 = var7.bind(var2)(var0);
                var7 = var8.pickWelcomeSticker;
                var0 = var11.id;
                var0 = var7.bind(var8)(var0);
                var5 = var4.bind(var6)(var0);
            case 327:
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var0 = 8;
                var0 = var6[var0];
                var8 = var7.bind(var2)(var0);
                var4 = var8.isNativeMessageEligibleForEnhancedRoleColors;
                var0 = var11.author;
                var0 = var0.id;
                var17 = var4.bind(var8)(var12, var0, var15);
                var0 = {};
                var4 = 9;
                var6 = var6[var4];
                var6 = var7.bind(var2)(var6);
                var8 = var6.intl;
                var7 = var8.formatToParts;
                var6 = {};
                var6.username = var10;
                var10 = {};
                var12 = 'bindUserMenu';
                var10.action = var12;
                var12 = var11.author;
                var12 = var12.id;
                var10.userId = var12;
                var18 = 'username';
                var12 = null;
                if (!(var18 === var15)) {
                    _fun55407_ip = 442;
                    continue _fun55407
                }
            case 439:
                var12 = var14;
            case 442:
                var10.linkColor = var12;
                var12 = null;
                if (!var17) {
                    _fun55407_ip = 455;
                    continue _fun55407
                }
            case 452:
                var12 = var16;
            case 455:
                var10.roleColors = var12;
                var12 = 'dot';
                var12 = var12 === var15;
                if (!var12) {
                    _fun55407_ip = 475;
                    continue _fun55407
                }
            case 471:
                var12 = var13 != var14;
            case 475:
                var10.shouldShowRoleDot = var12;
                var11 = var11.channel_id;
                var10.messageChannelId = var11;
                var11 = true;
                var10.medium = var11;
                var6.usernameOnClick = var10;
                var6 = var7.bind(var8)(var9, var6);
                var0.content = var6;
                var0.sticker = var5;
                var8 = _closure1_slot0;
                var5 = _closure1_slot2;
                var6 = var5[var4];
                var6 = var8.bind(var2)(var6);
                var7 = var6.intl;
                var6 = var7.string;
                var4 = var5[var4];
                var4 = var8.bind(var2)(var4);
                var4 = var4.t;
                var4 = var4["7Tj6HT"];
                var4 = var6.bind(var7)(var4);
                var0.stickerLabel = var4;
                var4 = _closure1_slot1;
                var1 = 10;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var21 = var1.bind(var2)(var3);
                var22 = var0;
                var1 = copyDataProperties(var22, var21);
                return var0;
        }
    };
    var2.createUserJoinSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1410, 660, 6640, 6653, 6660, 6663, 6666, 6641, 1234, 6642, 2]);