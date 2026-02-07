// modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx
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
    var3 = var3.MessageTypes;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.COMMAND_SENTINEL;
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/ApplicationCommandSourceSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56375: for (var _fun56375_ip = 0;;) switch (_fun56375_ip) {
            case 0:
                var4 = arg0;
                var10 = var4.message;
                var15 = var4.roleStyle;
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 2;
                var0 = var3[var0];
                var3 = undefined;
                var5 = var1.bind(var3)(var0);
                var1 = var5.getApplicationCommand;
                var0 = var10.content;
                var11 = var1.bind(var5)(var0);
                var1 = var10.application;
                var0 = null;
                var5 = var0 == var1;
                var9 = undefined;
                if (var5) {
                    _fun56375_ip = 76;
                    continue _fun56375
                }
            case 71:
                var9 = var1.name;
            case 76:
                if (!(var0 != var11)) {
                    _fun56375_ip = 455;
                    continue _fun56375
                }
            case 83:
                if (!(var0 != var9)) {
                    _fun56375_ip = 455;
                    continue _fun56375
                }
            case 90:
                var6 = _closure1_slot0;
                var13 = _closure1_slot2;
                var1 = 3;
                var1 = var13[var1];
                var5 = var6.bind(var3)(var1);
                var1 = var5.getMessageAuthorWithProcessedColor;
                var1 = var1.bind(var5)(var10);
                var12 = var1.nick;
                var14 = var1.colorString;
                var16 = var1.colorStrings;
                var8 = var1.guildId;
                var1 = 4;
                var1 = var13[var1];
                var7 = var6.bind(var3)(var1);
                var5 = var7.isNativeMessageEligibleForEnhancedRoleColors;
                var1 = var10.author;
                var1 = var1.id;
                var17 = var5.bind(var7)(var8, var1, var15);
                var1 = {};
                var5 = 5;
                var7 = var13[var5];
                var7 = var6.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.formatToParts;
                var5 = var13[var5];
                var5 = var6.bind(var3)(var5);
                var5 = var5.t;
                var6 = var5["1Zm+zw"];
                var5 = {};
                var5.username = var12;
                var12 = {};
                var13 = 'bindUserMenu';
                var12.action = var13;
                var13 = var10.author;
                var13 = var13.id;
                var12.userId = var13;
                var12.colorString = var14;
                var18 = 'username';
                var13 = null;
                if (!(var18 === var15)) {
                    _fun56375_ip = 278;
                    continue _fun56375
                }
            case 275:
                var13 = var14;
            case 278:
                var12.linkColor = var13;
                var12.roleColor = var14;
                var13 = null;
                if (!var17) {
                    _fun56375_ip = 296;
                    continue _fun56375
                }
            case 293:
                var13 = var16;
            case 296:
                var12.roleColors = var13;
                var13 = 'dot';
                var13 = var13 === var15;
                if (!var13) {
                    _fun56375_ip = 316;
                    continue _fun56375
                }
            case 312:
                var13 = var0 != var14;
            case 316:
                var12.shouldShowRoleDot = var13;
                var13 = var10.channel_id;
                var12.messageChannelId = var13;
                var13 = true;
                var12.medium = var13;
                var5.usernameOnClick = var12;
                var12 = var10.type;
                var10 = _closure1_slot3;
                var10 = var10.CHAT_INPUT_COMMAND;
                if (!(var12 !== var10)) {
                    _fun56375_ip = 369;
                    continue _fun56375
                }
            case 362:
                var10 = var11.name;
                _fun56375_ip = 401;
                continue _fun56375;
            case 369:
                var14 = _closure1_slot4;
                var13 = var11.name;
                var11 = global;
                var11 = var11.HermesInternal;
                var12 = var11.concat;
                var11 = '';
                var10 = var12.bind(var11)(var14, var13);
            case 401:
                var5.commandName = var10;
                var5.applicationName = var9;
                var5 = var7.bind(var8)(var6, var5);
                var1.content = var5;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 6;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var20 = var2.bind(var3)(var4);
                var21 = var1;
                var2 = copyDataProperties(var21, var20);
                return var1;
            case 455:
                return var0;
        }
    };
    var2.createApplicationCommandSourceSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 6791, 6792, 6743, 6744, 1234, 6745, 2]);