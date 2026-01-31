// modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.HelpdeskArticles;
    var _closure1_slot4 = var3;
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/ChannelLinkedToLobbySystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55799: for (var _fun55799_ip = 0;;) switch (_fun55799_ip) {
            case 0:
                var4 = arg0;
                var6 = var4.message;
                var11 = var4.roleStyle;
                var1 = var4.theme;
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 2;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var5.bind(var3)(var0);
                var8 = var0.bind(var3)(var1);
                var7 = var6.author;
                var9 = _closure1_slot3;
                var5 = var9.getApplication;
                var10 = var6.applicationId;
                var0 = null;
                var12 = var0 != var10;
                var1 = '';
                if (!var12) {
                    _fun55799_ip = 87;
                    continue _fun55799
                }
            case 84:
                var1 = var10;
            case 87:
                var1 = var5.bind(var9)(var1);
                if (!(var0 != var1)) {
                    _fun55799_ip = 501;
                    continue _fun55799
                }
            case 99:
                var13 = _closure1_slot0;
                var14 = _closure1_slot2;
                var5 = 3;
                var5 = var14[var5];
                var9 = var13.bind(var3)(var5);
                var5 = var9.getMessageAuthorWithProcessedColor;
                var9 = var5.bind(var9)(var6);
                var5 = var9.nick;
                var10 = var9.colorString;
                var12 = var9.colorStrings;
                var15 = var9.guildId;
                var9 = 4;
                var9 = var14[var9];
                var14 = var13.bind(var3)(var9);
                var13 = var14.isNativeMessageEligibleForEnhancedRoleColors;
                var9 = var7.id;
                var13 = var13.bind(var14)(var15, var9, var11);
                var9 = {};
                var9.username = var5;
                var5 = {};
                var14 = 'bindUserMenu';
                var5.action = var14;
                var7 = var7.id;
                var5.userId = var7;
                var5.colorString = var10;
                var14 = 'username';
                var7 = null;
                if (!(var14 === var11)) {
                    _fun55799_ip = 228;
                    continue _fun55799
                }
            case 225:
                var7 = var10;
            case 228:
                if (!(var0 == var7)) {
                    _fun55799_ip = 238;
                    continue _fun55799
                }
            case 232:
                var7 = var8.defaultUsernameColor;
            case 238:
                var5.linkColor = var7;
                var5.roleColor = var10;
                var7 = null;
                if (!var13) {
                    _fun55799_ip = 256;
                    continue _fun55799
                }
            case 253:
                var7 = var12;
            case 256:
                var5.roleColors = var7;
                var7 = 'dot';
                var7 = var7 === var11;
                if (!var7) {
                    _fun55799_ip = 276;
                    continue _fun55799
                }
            case 272:
                var7 = var0 != var10;
            case 276:
                var5.shouldShowRoleDot = var7;
                var6 = var6.channel_id;
                var5.messageChannelId = var6;
                var7 = true;
                var5.medium = var7;
                var9.usernameOnClick = var5;
                var1 = var1.name;
                var9.applicationName = var1;
                var1 = {};
                var5 = var8.defaultUsernameColor;
                var1.linkColor = var5;
                var1.medium = var7;
                var9.applicationNameOnClick = var1;
                var1 = {};
                var5 = 'bindOpenUrl';
                var1.action = var5;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var10 = 5;
                var10 = var6[var10];
                var12 = var5.bind(var3)(var10);
                var11 = var12.getArticleURL;
                var10 = _closure1_slot4;
                var10 = var10.LINKED_LOBBIES;
                var10 = var11.bind(var12)(var10);
                var1.url = var10;
                var8 = var8.linkColor;
                var1.linkColor = var8;
                var1.medium = var7;
                var9.urlOnClick = var1;
                var1 = {};
                var10 = _closure1_slot0;
                var2 = 6;
                var7 = var6[var2];
                var7 = var10.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.formatToParts;
                var2 = var6[var2];
                var2 = var10.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2.gZfhOw;
                var2 = var7.bind(var8)(var2, var9);
                var1.content = var2;
                var2 = 7;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var17 = var2.bind(var3)(var4);
                var18 = var1;
                var2 = copyDataProperties(var18, var17);
                return var1;
            case 501:
                return var0;
        }
    };
    var2.createChannelLinkedToLobbySystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3413, 660, 6630, 6638, 6639, 1675, 1234, 6640, 2]);