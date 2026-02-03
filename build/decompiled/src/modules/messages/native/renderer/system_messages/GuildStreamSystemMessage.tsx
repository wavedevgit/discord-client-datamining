// modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx
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
    var3 = var3.StreamTypes;
    var _closure1_slot3 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/GuildStreamSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55864: for (var _fun55864_ip = 0;;) switch (_fun55864_ip) {
            case 0:
                var3 = arg0;
                var8 = var3.message;
                var14 = var3.roleStyle;
                var6 = var8.author;
                var0 = var8.messageReference;
                var13 = null;
                if (!(var13 == var0)) {
                    _fun55864_ip = 34;
                    continue _fun55864
                }
            case 32:
                var0 = {};
            case 34:
                var7 = var0.channel_id;
                var5 = var0.guild_id;
                var4 = _closure1_slot1;
                var16 = _closure1_slot2;
                var0 = 1;
                var0 = var16[var0];
                var2 = undefined;
                var0 = var4.bind(var2)(var0);
                var10 = var0.bind(var2)(var8);
                var4 = var13 != var10;
                var11 = _closure1_slot0;
                var0 = 2;
                var0 = var16[var0];
                var9 = var11.bind(var2)(var0);
                var0 = var9.getMessageAuthorWithProcessedColor;
                var9 = var0.bind(var9)(var8);
                var0 = var9.nick;
                var12 = var9.colorString;
                var15 = var9.colorStrings;
                var17 = var9.guildId;
                var9 = 3;
                var9 = var16[var9];
                var16 = var11.bind(var2)(var9);
                var11 = var16.isNativeMessageEligibleForEnhancedRoleColors;
                var9 = var6.id;
                var16 = var11.bind(var16)(var17, var9, var14);
                var9 = {};
                var9.username = var0;
                var0 = {};
                var11 = 'bindUserMenu';
                var0.action = var11;
                var11 = var6.id;
                var0.userId = var11;
                var0.colorString = var12;
                var17 = 'username';
                var11 = null;
                if (!(var17 === var14)) {
                    _fun55864_ip = 203;
                    continue _fun55864
                }
            case 200:
                var11 = var12;
            case 203:
                var0.linkColor = var11;
                var0.roleColor = var12;
                var11 = null;
                if (!var16) {
                    _fun55864_ip = 221;
                    continue _fun55864
                }
            case 218:
                var11 = var15;
            case 221:
                var0.roleColors = var11;
                var11 = 'dot';
                var11 = var11 === var14;
                if (!var11) {
                    _fun55864_ip = 241;
                    continue _fun55864
                }
            case 237:
                var11 = var13 != var12;
            case 241:
                var0.shouldShowRoleDot = var11;
                var8 = var8.channel_id;
                var0.messageChannelId = var8;
                var8 = true;
                var0.medium = var8;
                var9.usernameOnClick = var0;
                var12 = {};
                var0 = 'bindJoinStream';
                var12.action = var0;
                var0 = {};
                var8 = _closure1_slot3;
                var8 = var8.GUILD;
                var0.streamType = var8;
                var0.channelId = var7;
                var6 = var6.id;
                var0.ownerId = var6;
                var0.guildId = var5;
                var12.stream = var0;
                var0 = {};
                var0.ended = var4;
                var6 = _closure1_slot0;
                var11 = _closure1_slot2;
                var5 = 4;
                var7 = var11[var5];
                var7 = var6.bind(var2)(var7);
                var8 = var7.intl;
                var7 = var8.formatToParts;
                var5 = var11[var5];
                var5 = var6.bind(var2)(var5);
                var5 = var5.t;
                if (var4) {
                    _fun55864_ip = 414;
                    continue _fun55864
                }
            case 375:
                var6 = var5.dMmbGk;
                var4 = {};
                var20 = var4;
                var19 = var9;
                var11 = copyDataProperties(var20, var19);
                var11 = 'onJoinStream';
                var4[var11] = var12;
                var4 = var7.bind(var8)(var6, var4);
                _fun55864_ip = 449;
                continue _fun55864;
            case 414:
                var6 = var5.FP7rUI;
                var5 = {};
                var20 = var5;
                var19 = var9;
                var9 = copyDataProperties(var20, var19);
                var9 = 'duration';
                var5[var9] = var10;
                var4 = var7.bind(var8)(var6, var5);
            case 449:
                var0.content = var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 5;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var19 = var1.bind(var2)(var3);
                var20 = var0;
                var1 = copyDataProperties(var20, var19);
                return var0;
        }
    };
    var2.createGuildStreamSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3506, 6683, 6676, 6677, 1234, 6678, 2]);