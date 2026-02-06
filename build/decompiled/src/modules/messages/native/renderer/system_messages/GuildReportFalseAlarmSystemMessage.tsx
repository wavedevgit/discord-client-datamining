// modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx
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
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/GuildReportFalseAlarmSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56005: for (var _fun56005_ip = 0;;) switch (_fun56005_ip) {
            case 0:
                var7 = arg0;
                var14 = var7.message;
                var10 = var7.roleStyle;
                var16 = var7.theme;
                var1 = _closure1_slot1;
                var13 = _closure1_slot2;
                var0 = 1;
                var0 = var13[var0];
                var8 = undefined;
                var0 = var1.bind(var8)(var0);
                var5 = var0.bind(var8)(var16);
                var1 = var14.author;
                var4 = _closure1_slot3;
                var3 = var4.getChannel;
                var0 = var14.channel_id;
                var12 = var3.bind(var4)(var0);
                var6 = _closure1_slot0;
                var0 = 2;
                var0 = var13[var0];
                var3 = var6.bind(var8)(var0);
                var0 = var3.getMessageAuthorWithProcessedColor;
                var3 = var0.bind(var3)(var14);
                var0 = var3.nick;
                var9 = var3.colorString;
                var11 = var3.colorStrings;
                var15 = var3.guildId;
                var3 = 3;
                var3 = var13[var3];
                var4 = var6.bind(var8)(var3);
                var3 = var4.resolveAlertModeColors;
                var3 = var3.bind(var4)(var16);
                var3 = var3.automodUsernameColor;
                var4 = 4;
                var4 = var13[var4];
                var13 = var6.bind(var8)(var4);
                var6 = var13.isNativeMessageEligibleForEnhancedRoleColors;
                var4 = var1.id;
                var15 = var6.bind(var13)(var15, var4, var10);
                var13 = {};
                var13.username = var0;
                var0 = {};
                var4 = 'bindUserMenu';
                var0.action = var4;
                var1 = var1.id;
                var0.userId = var1;
                var0.colorString = var9;
                var4 = null;
                var6 = 'username';
                var1 = null;
                if (!(var6 === var10)) {
                    _fun56005_ip = 231;
                    continue _fun56005
                }
            case 228:
                var1 = var9;
            case 231:
                var0.linkColor = var1;
                var0.roleColor = var9;
                var1 = null;
                if (!var15) {
                    _fun56005_ip = 249;
                    continue _fun56005
                }
            case 246:
                var1 = var11;
            case 249:
                var0.roleColors = var1;
                var1 = 'dot';
                var1 = var1 === var10;
                if (!var1) {
                    _fun56005_ip = 269;
                    continue _fun56005
                }
            case 265:
                var1 = var4 != var9;
            case 269:
                var0.shouldShowRoleDot = var1;
                var1 = var14.channel_id;
                var0.messageChannelId = var1;
                var10 = true;
                var0.medium = var10;
                var13.usernameOnClick = var0;
                var9 = _closure1_slot1;
                var11 = _closure1_slot2;
                var0 = 5;
                var0 = var11[var0];
                var1 = var9.bind(var8)(var0);
                var0 = {};
                var0.message = var14;
                var0.channel = var12;
                var0.isSystemDM = var10;
                var0.colors = var5;
                var1 = var1.bind(var8)(var0);
                var0 = {};
                var5 = 6;
                var5 = var11[var5];
                var5 = var9.bind(var8)(var5);
                var18 = var5.bind(var8)(var7);
                var19 = var0;
                var5 = copyDataProperties(var19, var18);
                var10 = _closure1_slot0;
                var5 = 7;
                var7 = var11[var5];
                var7 = var10.bind(var8)(var7);
                var12 = var7.intl;
                var9 = var12.formatToParts;
                var7 = var11[var5];
                var7 = var10.bind(var8)(var7);
                var7 = var7.t;
                var7 = var7["21+uW4"];
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
                    _fun56005_ip = 491;
                    continue _fun56005
                }
            case 488:
                var4 = var3;
            case 491:
                var3 = 'usernameColor';
                var0[var3] = var4;
                var7 = _closure1_slot0;
                var9 = _closure1_slot2;
                var2 = 8;
                var3 = var9[var2];
                var4 = var7.bind(var8)(var3);
                var3 = var4.ensureAvatarSource;
                var5 = 9;
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
                var19 = var0;
                var18 = var1;
                var1 = copyDataProperties(var19, var18);
                return var0;
        }
    };
    var2.createGuildReportFalseAlarmSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 6692, 6700, 6773, 6701, 6774, 6702, 1234, 1418, 1417, 2]);