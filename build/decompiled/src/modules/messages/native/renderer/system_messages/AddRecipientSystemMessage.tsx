// modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.THREAD_CHANNEL_TYPES;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/AddRecipientSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: createAddRecipientSystemMessage, environment: var1
        _fun55347: for (var _fun55347_ip = 0;;) switch (_fun55347_ip) {
            case 0:
                var3 = arg0;
                var6 = var3.message;
                var7 = var3.roleStyle;
                var5 = var6.author;
                var1 = var6.mentions;
                var0 = 0;
                var11 = var1[var0];
                var2 = _closure1_slot5;
                var0 = var2.getUser;
                var12 = var0.bind(var2)(var11);
                var4 = _closure1_slot4;
                var2 = var4.getChannel;
                var0 = var6.channel_id;
                var9 = var2.bind(var4)(var0);
                var10 = null;
                var4 = var10 != var9;
                if (!var4) {
                    _fun55347_ip = 97;
                    continue _fun55347
                }
            case 78:
                var8 = _closure1_slot3;
                var2 = var8.has;
                var0 = var9.type;
                var4 = var2.bind(var8)(var0);
            case 97:
                var13 = _closure1_slot0;
                var15 = _closure1_slot2;
                var0 = 3;
                var8 = var15[var0];
                var2 = undefined;
                var14 = var13.bind(var2)(var8);
                var8 = var14.getMessageAuthorWithProcessedColor;
                var8 = var8.bind(var14)(var6);
                var14 = var8.nick;
                var17 = var8.colorString;
                var18 = var8.colorStrings;
                var16 = var8.guildId;
                var0 = var15[var0];
                var8 = var13.bind(var2)(var0);
                var0 = var8.getUserAuthorWithProcessedColor;
                var8 = var0.bind(var8)(var12, var9);
                var0 = var8.nick;
                var9 = var8.colorString;
                var12 = var8.colorStrings;
                var8 = 4;
                var8 = var15[var8];
                var15 = var13.bind(var2)(var8);
                var13 = var15.isNativeMessageEligibleForEnhancedRoleColors;
                var8 = var5.id;
                var13 = var13.bind(var15)(var16, var8, var7);
                var8 = {};
                var8.username = var14;
                var16 = {};
                var15 = 'bindUserMenu';
                var16.action = var15;
                var5 = var5.id;
                var16.userId = var5;
                var16.colorString = var17;
                var5 = 'username';
                var14 = var5 === var7;
                var5 = null;
                if (!var14) {
                    _fun55347_ip = 270;
                    continue _fun55347
                }
            case 267:
                var5 = var17;
            case 270:
                var16.linkColor = var5;
                var16.roleColor = var17;
                var5 = null;
                if (!var13) {
                    _fun55347_ip = 288;
                    continue _fun55347
                }
            case 285:
                var5 = var18;
            case 288:
                var16.roleColors = var5;
                var5 = 'dot';
                var7 = var5 === var7;
                var5 = var7;
                if (!var7) {
                    _fun55347_ip = 311;
                    continue _fun55347
                }
            case 307:
                var5 = var10 != var17;
            case 311:
                var16.shouldShowRoleDot = var5;
                var5 = var6.channel_id;
                var16.messageChannelId = var5;
                var5 = true;
                var16.medium = var5;
                var8.usernameOnClick = var16;
                var8.otherUsername = var0;
                var0 = {};
                var0.action = var15;
                var0.userId = var11;
                var0.colorString = var9;
                var11 = null;
                if (!var14) {
                    _fun55347_ip = 366;
                    continue _fun55347
                }
            case 363:
                var11 = var9;
            case 366:
                var0.linkColor = var11;
                var0.roleColor = var9;
                var11 = null;
                if (!var13) {
                    _fun55347_ip = 384;
                    continue _fun55347
                }
            case 381:
                var11 = var12;
            case 384:
                var0.roleColors = var11;
                if (!var7) {
                    _fun55347_ip = 396;
                    continue _fun55347
                }
            case 392:
                var7 = var10 != var9;
            case 396:
                var0.shouldShowRoleDot = var7;
                var6 = var6.channel_id;
                var0.messageChannelId = var6;
                var0.medium = var5;
                var8.otherUsernameOnClick = var0;
                var0 = {};
                var9 = _closure1_slot0;
                var10 = _closure1_slot2;
                var5 = 5;
                var6 = var10[var5];
                var6 = var9.bind(var2)(var6);
                var7 = var6.intl;
                var6 = var7.formatToParts;
                var5 = var10[var5];
                var5 = var9.bind(var2)(var5);
                var5 = var5.t;
                if (var4) {
                    _fun55347_ip = 485;
                    continue _fun55347
                }
            case 471:
                var4 = var5["7/Xl0S"];
                var4 = var6.bind(var7)(var4, var8);
                _fun55347_ip = 499;
                continue _fun55347;
            case 485:
                var5 = var5.Vej1Nw;
                var4 = var6.bind(var7)(var5, var8);
            case 499:
                var0.content = var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 6;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var21 = var1.bind(var2)(var3);
                var22 = var0;
                var1 = copyDataProperties(var22, var21);
                return var0;
        }
    };
    var2.createAddRecipientSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1376, 1372, 1613, 6637, 6638, 1234, 6639, 2]);