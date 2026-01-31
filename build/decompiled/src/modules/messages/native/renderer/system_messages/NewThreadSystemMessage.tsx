// modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx
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
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/NewThreadSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: createNewThreadSystemMessage, environment: var1
        _fun55708: for (var _fun55708_ip = 0;;) switch (_fun55708_ip) {
            case 0:
                var3 = arg0;
                var10 = var3.message;
                var14 = var3.roleStyle;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 1;
                var0 = var2[var0];
                var2 = undefined;
                var4 = var4.bind(var2)(var0);
                var0 = var4.getMessageAuthorWithProcessedColor;
                var0 = var0.bind(var4)(var10);
                var8 = var0.nick;
                var13 = var0.colorString;
                var15 = var0.colorStrings;
                var7 = var0.guildId;
                var5 = _closure1_slot3;
                var4 = var5.getChannel;
                var6 = var10.messageReference;
                var9 = null;
                var11 = var9 == var6;
                var0 = undefined;
                if (var11) {
                    _fun55708_ip = 104;
                    continue _fun55708
                }
            case 99:
                var0 = var6.channel_id;
            case 104:
                var11 = var4.bind(var5)(var0);
                var5 = _closure1_slot0;
                var12 = _closure1_slot2;
                var0 = 2;
                var0 = var12[var0];
                var6 = var5.bind(var2)(var0);
                var4 = var6.isNativeMessageEligibleForEnhancedRoleColors;
                var0 = var10.author;
                var0 = var0.id;
                var16 = var4.bind(var6)(var7, var0, var14);
                var0 = {};
                var4 = 3;
                var6 = var12[var4];
                var6 = var5.bind(var2)(var6);
                var7 = var6.intl;
                var6 = var7.formatToParts;
                var4 = var12[var4];
                var4 = var5.bind(var2)(var4);
                var4 = var4.t;
                var5 = var4.veX9jq;
                var4 = {};
                var4.actorName = var8;
                var8 = {};
                var12 = 'bindUserMenu';
                var8.action = var12;
                var12 = var10.author;
                var12 = var12.id;
                var8.userId = var12;
                var8.colorString = var13;
                var17 = 'username';
                var12 = null;
                if (!(var17 === var14)) {
                    _fun55708_ip = 252;
                    continue _fun55708
                }
            case 249:
                var12 = var13;
            case 252:
                var8.linkColor = var12;
                var8.roleColor = var13;
                var12 = null;
                if (!var16) {
                    _fun55708_ip = 270;
                    continue _fun55708
                }
            case 267:
                var12 = var15;
            case 270:
                var8.roleColors = var12;
                var12 = 'dot';
                var12 = var12 === var14;
                if (!var12) {
                    _fun55708_ip = 290;
                    continue _fun55708
                }
            case 286:
                var12 = var9 != var13;
            case 290:
                var8.shouldShowRoleDot = var12;
                var12 = var10.channel_id;
                var8.messageChannelId = var12;
                var12 = true;
                var8.medium = var12;
                var4.actorHook = var8;
                var12 = var9 == var11;
                var8 = undefined;
                if (var12) {
                    _fun55708_ip = 331;
                    continue _fun55708
                }
            case 326:
                var8 = var11.name;
            case 331:
                if (!(var9 == var8)) {
                    _fun55708_ip = 340;
                    continue _fun55708
                }
            case 335:
                var8 = var10.content;
            case 340:
                var4.threadName = var8;
                var8 = {
                    'action': 'bindOpenThreadChannel',
                    'threadId': null,
                    'medium': true
                };
                var10 = var10.messageReference;
                var11 = var9 == var10;
                var9 = undefined;
                if (var11) {
                    _fun55708_ip = 379;
                    continue _fun55708
                }
            case 374:
                var9 = var10.channel_id;
            case 379:
                var8.threadId = var9;
                var4.threadOnClick = var8;
                var4 = var6.bind(var7)(var5, var4);
                var0.content = var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var19 = var1.bind(var2)(var3);
                var20 = var0;
                var1 = copyDataProperties(var20, var19);
                return var0;
        }
    };
    var2.createNewThreadSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 6638, 6639, 1234, 6640, 2]);