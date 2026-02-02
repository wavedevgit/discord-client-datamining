// modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx
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
    var0 = 3;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/ChannelFollowAddSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var3 = arg0;
        var10 = var3.message;
        var11 = var10.author;
        var0 = {};
        var12 = _closure1_slot0;
        var5 = _closure1_slot2;
        var4 = 0;
        var6 = var5[var4];
        var2 = undefined;
        var6 = var12.bind(var2)(var6);
        var8 = var6.intl;
        var7 = var8.formatToParts;
        var4 = var5[var4];
        var4 = var12.bind(var2)(var4);
        var4 = var4.t;
        var6 = var4.xH8qGO;
        var4 = {};
        var9 = 1;
        var9 = var5[var9];
        var12 = var12.bind(var2)(var9);
        var9 = var12.getMessageAuthor;
        var9 = var9.bind(var12)(var10);
        var9 = var9.nick;
        var4.username = var9;
        var9 = {};
        var12 = 'bindUserMenu';
        var9.action = var12;
        var11 = var11.id;
        var9.userId = var11;
        var11 = var10.channel_id;
        var9.messageChannelId = var11;
        var11 = true;
        var9.medium = var11;
        var4.usernameOnClick = var9;
        var9 = var10.content;
        var4.webhookName = var9;
        var9 = {
            'action': 'bindGuildMenu',
            'messageReference': null,
            'medium': true
        };
        var10 = var10.messageReference;
        var9.messageReference = var10;
        var4.webhookNameOnClick = var9;
        var4 = var7.bind(var8)(var6, var4);
        var0.content = var4;
        var4 = _closure1_slot1;
        var1 = 2;
        var1 = var5[var1];
        var1 = var4.bind(var2)(var1);
        var13 = var1.bind(var2)(var3);
        var14 = var0;
        var1 = copyDataProperties(var14, var13);
        return var0;
    };
    var2.createChannelFollowAddSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1234, 3944, 6642, 2]);