// modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 4;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/StageSpeakerSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: createStageSpeakerSystemMessage, environment: var1
        _fun55697: for (var _fun55697_ip = 0;;) switch (_fun55697_ip) {
            case 0:
                var3 = arg0;
                var9 = var3.message;
                var16 = var3.roleStyle;
                var10 = var9.author;
                var5 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 0;
                var0 = var13[var0];
                var2 = undefined;
                var4 = var5.bind(var2)(var0);
                var0 = var4.getMessageAuthorWithProcessedColor;
                var0 = var0.bind(var4)(var9);
                var8 = var0.nick;
                var14 = var0.colorString;
                var11 = var0.colorStrings;
                var7 = var0.guildId;
                var0 = 1;
                var0 = var13[var0];
                var6 = var5.bind(var2)(var0);
                var4 = var6.isNativeMessageEligibleForEnhancedRoleColors;
                var0 = var10.id;
                var12 = var4.bind(var6)(var7, var0, var16);
                var0 = {};
                var4 = 2;
                var6 = var13[var4];
                var6 = var5.bind(var2)(var6);
                var7 = var6.intl;
                var6 = var7.formatToParts;
                var4 = var13[var4];
                var4 = var5.bind(var2)(var4);
                var4 = var4.t;
                var5 = var4.V4uCm4;
                var4 = {};
                var4.username = var8;
                var8 = {};
                var13 = 'bindUserMenu';
                var8.action = var13;
                var10 = var10.id;
                var8.userId = var10;
                var15 = 'username';
                var13 = null;
                if (!(var15 === var16)) {
                    _fun55697_ip = 195;
                    continue _fun55697
                }
            case 192:
                var13 = var14;
            case 195:
                var8.linkColor = var13;
                var10 = null;
                if (!var12) {
                    _fun55697_ip = 208;
                    continue _fun55697
                }
            case 205:
                var10 = var11;
            case 208:
                var8.roleColors = var10;
                var9 = var9.channel_id;
                var8.messageChannelId = var9;
                var9 = true;
                var8.medium = var9;
                var4.usernameOnClick = var8;
                var4 = var6.bind(var7)(var5, var4);
                var0.content = var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var18 = var1.bind(var2)(var3);
                var19 = var0;
                var1 = copyDataProperties(var19, var18);
                return var0;
        }
    };
    var2.createStageSpeakerSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6634, 6635, 1234, 6636, 2]);