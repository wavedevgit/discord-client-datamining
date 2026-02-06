// modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx
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
    var3 = 11;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/GuildReportRaidSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56003: for (var _fun56003_ip = 0;;) switch (_fun56003_ip) {
            case 0:
                var7 = arg0;
                var14 = var7.message;
                var11 = var7.roleStyle;
                var18 = var7.theme;
                var1 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 2;
                var0 = var3[var0];
                var8 = undefined;
                var0 = var1.bind(var8)(var0);
                var5 = var0.bind(var8)(var18);
                var6 = var14.author;
                var3 = _closure1_slot3;
                var1 = var3.getChannel;
                var0 = var14.channel_id;
                var12 = var1.bind(var3)(var0);
                var3 = _closure1_slot4;
                var1 = var3.getGuild;
                var4 = null;
                var9 = var4 == var12;
                var0 = undefined;
                if (var9) {
                    _fun56003_ip = 100;
                    continue _fun56003
                }
            case 95:
                var0 = var12.guild_id;
            case 100:
                var0 = var1.bind(var3)(var0);
                var13 = _closure1_slot0;
                var16 = _closure1_slot2;
                var1 = 3;
                var1 = var16[var1];
                var3 = var13.bind(var8)(var1);
                var1 = var3.getMessageAuthorWithProcessedColor;
                var3 = var1.bind(var3)(var14);
                var1 = var3.nick;
                var10 = var3.colorString;
                var15 = var3.colorStrings;
                var17 = var3.guildId;
                var3 = 4;
                var3 = var16[var3];
                var9 = var13.bind(var8)(var3);
                var3 = var9.resolveAlertModeColors;
                var3 = var3.bind(var9)(var18);
                var3 = var3.automodUsernameColor;
                var9 = 5;
                var9 = var16[var9];
                var16 = var13.bind(var8)(var9);
                var13 = var16.isNativeMessageEligibleForEnhancedRoleColors;
                var9 = var6.id;
                var16 = var13.bind(var16)(var17, var9, var11);
                var13 = {};
                var13.username = var1;
                var1 = {};
                var9 = 'bindUserMenu';
                var1.action = var9;
                var6 = var6.id;
                var1.userId = var6;
                var1.colorString = var10;
                var6 = 'username';
                var9 = null;
                if (!(var6 === var11)) {
                    _fun56003_ip = 263;
                    continue _fun56003
                }
            case 260:
                var9 = var10;
            case 263:
                var1.linkColor = var9;
                var1.roleColor = var10;
                var9 = null;
                if (!var16) {
                    _fun56003_ip = 281;
                    continue _fun56003
                }
            case 278:
                var9 = var15;
            case 281:
                var1.roleColors = var9;
                var9 = 'dot';
                var9 = var9 === var11;
                if (!var9) {
                    _fun56003_ip = 301;
                    continue _fun56003
                }
            case 297:
                var9 = var4 != var10;
            case 301:
                var1.shouldShowRoleDot = var9;
                var9 = var14.channel_id;
                var1.messageChannelId = var9;
                var10 = true;
                var1.medium = var10;
                var13.usernameOnClick = var1;
                var9 = var4 == var0;
                var1 = undefined;
                if (var9) {
                    _fun56003_ip = 342;
                    continue _fun56003
                }
            case 337:
                var1 = var0.name;
            case 342:
                var9 = var4 != var1;
                var0 = '';
                if (!var9) {
                    _fun56003_ip = 356;
                    continue _fun56003
                }
            case 353:
                var0 = var1;
            case 356:
                var13.guildName = var0;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 6;
                var0 = var11[var0];
                var1 = var9.bind(var8)(var0);
                var0 = {};
                var0.message = var14;
                var0.channel = var12;
                var0.isSystemDM = var10;
                var0.colors = var5;
                var1 = var1.bind(var8)(var0);
                var0 = {};
                var5 = 7;
                var5 = var11[var5];
                var5 = var9.bind(var8)(var5);
                var20 = var5.bind(var8)(var7);
                var21 = var0;
                var5 = copyDataProperties(var21, var20);
                var10 = _closure1_slot0;
                var5 = 8;
                var7 = var11[var5];
                var7 = var10.bind(var8)(var7);
                var12 = var7.intl;
                var9 = var12.formatToParts;
                var7 = var11[var5];
                var7 = var10.bind(var8)(var7);
                var7 = var7.t;
                var7 = var7["MTmH+u"];
                var9 = var9.bind(var12)(var7, var13);
                var7 = 'content';
                var0[var7] = var9;
                var7 = var11[var5];
                var7 = var10.bind(var8)(var7);
                var9 = var7.intl;
                var7 = var9.string;
                var5 = var11[var5];
                var5 = var10.bind(var8)(var5);
                var5 = var5.t;
                var5 = var5.hG1StD;
                var5 = var7.bind(var9)(var5);
                var0[var6] = var5;
                var5 = var4 != var3;
                var4 = null;
                if (!var5) {
                    _fun56003_ip = 556;
                    continue _fun56003
                }
            case 553:
                var4 = var3;
            case 556:
                var3 = 'usernameColor';
                var0[var3] = var4;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 9;
                var3 = var9[var2];
                var4 = var7.bind(var8)(var3);
                var3 = var4.ensureAvatarSource;
                var5 = 10;
                var5 = var9[var5];
                var6 = var7.bind(var8)(var5);
                var5 = var6.makeSource;
                var2 = var9[var2];
                var7 = var7.bind(var8)(var2);
                var2 = var7.getAutomodAvatarURL;
                var2 = var2.bind(var7)();
                var2 = var5.bind(var6)(var2);
                var2 = var3.bind(var4)(var2);
                var3 = var2.uri;
                var2 = 'avatarURL';
                var0[var2] = var3;
                var21 = var0;
                var20 = var1;
                var1 = copyDataProperties(var21, var20);
                return var0;
        }
    };
    var2.createGuildReportRaidSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 1410, 6692, 6700, 6773, 6701, 6774, 6702, 1234, 1418, 1417, 2]);