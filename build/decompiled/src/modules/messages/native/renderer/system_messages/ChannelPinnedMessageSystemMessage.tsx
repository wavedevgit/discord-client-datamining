// modules/messages/native/renderer/system_messages/ChannelPinnedMessageSystemMessage.tsx
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
    var3 = 'modules/messages/native/renderer/system_messages/ChannelPinnedMessageSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56067: for (var _fun56067_ip = 0;;) switch (_fun56067_ip) {
            case 0:
                var3 = arg0;
                var9 = var3.message;
                var13 = var3.roleStyle;
                var5 = _closure1_slot0;
                var10 = _closure1_slot2;
                var0 = 0;
                var0 = var10[var0];
                var2 = undefined;
                var4 = var5.bind(var2)(var0);
                var0 = var4.getMessageAuthorWithProcessedColor;
                var0 = var0.bind(var4)(var9);
                var8 = var0.nick;
                var12 = var0.colorString;
                var14 = var0.colorStrings;
                var7 = var0.guildId;
                var0 = 1;
                var0 = var10[var0];
                var6 = var5.bind(var2)(var0);
                var4 = var6.isNativeMessageEligibleForEnhancedRoleColors;
                var0 = var9.author;
                var0 = var0.id;
                var15 = var4.bind(var6)(var7, var0, var13);
                var0 = {};
                var4 = 2;
                var6 = var10[var4];
                var6 = var5.bind(var2)(var6);
                var7 = var6.intl;
                var6 = var7.formatToParts;
                var4 = var10[var4];
                var4 = var5.bind(var2)(var4);
                var4 = var4.t;
                var5 = var4["6TrHq2"];
                var4 = {};
                var4.username = var8;
                var8 = {};
                var10 = 'bindUserMenu';
                var8.action = var10;
                var10 = var9.author;
                var10 = var10.id;
                var8.userId = var10;
                var8.colorString = var12;
                var11 = null;
                var16 = 'username';
                var10 = null;
                if (!(var16 === var13)) {
                    _fun56067_ip = 208;
                    continue _fun56067
                }
            case 205:
                var10 = var12;
            case 208:
                var8.linkColor = var10;
                var8.roleColor = var12;
                var10 = null;
                if (!var15) {
                    _fun56067_ip = 226;
                    continue _fun56067
                }
            case 223:
                var10 = var14;
            case 226:
                var8.roleColors = var10;
                var10 = 'dot';
                var10 = var10 === var13;
                if (!var10) {
                    _fun56067_ip = 246;
                    continue _fun56067
                }
            case 242:
                var10 = var11 != var12;
            case 246:
                var8.shouldShowRoleDot = var10;
                var10 = var9.channel_id;
                var8.messageChannelId = var10;
                var10 = true;
                var8.medium = var10;
                var4.usernameOnClick = var8;
                var8 = {
                    'action': 'bindOpenPins',
                    'messageChannelId': null,
                    'medium': true
                };
                var9 = var9.channel_id;
                var8.messageChannelId = var9;
                var4.pinsOnClick = var8;
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
    var2.createChannelPinnedMessageSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6743, 6744, 1234, 6745, 2]);