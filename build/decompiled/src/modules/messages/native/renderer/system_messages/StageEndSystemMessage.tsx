// modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx
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
    var3 = 'modules/messages/native/renderer/system_messages/StageEndSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: createStageEndSystemMessage, environment: var1
        _fun55755: for (var _fun55755_ip = 0;;) switch (_fun55755_ip) {
            case 0:
                var3 = arg0;
                var8 = var3.message;
                var16 = var3.roleStyle;
                var10 = var8.author;
                var5 = _closure1_slot0;
                var13 = _closure1_slot2;
                var0 = 0;
                var0 = var13[var0];
                var2 = undefined;
                var4 = var5.bind(var2)(var0);
                var0 = var4.getMessageAuthorWithProcessedColor;
                var0 = var0.bind(var4)(var8);
                var9 = var0.nick;
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
                var5 = var4.vMJhvG;
                var4 = {};
                var4.username = var9;
                var9 = {};
                var13 = 'bindUserMenu';
                var9.action = var13;
                var10 = var10.id;
                var9.userId = var10;
                var15 = 'username';
                var13 = null;
                if (!(var15 === var16)) {
                    _fun55755_ip = 195;
                    continue _fun55755
                }
            case 192:
                var13 = var14;
            case 195:
                var9.linkColor = var13;
                var10 = null;
                if (!var12) {
                    _fun55755_ip = 208;
                    continue _fun55755
                }
            case 205:
                var10 = var11;
            case 208:
                var9.roleColors = var10;
                var10 = var8.channel_id;
                var9.messageChannelId = var10;
                var10 = true;
                var9.medium = var10;
                var4.usernameOnClick = var9;
                var8 = var8.content;
                var4.topic = var8;
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
    var2.createStageEndSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6638, 6639, 1234, 6640, 2]);