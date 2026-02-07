// modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/PrivateChannelIntegrationSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        _fun56438: for (var _fun56438_ip = 0;;) switch (_fun56438_ip) {
            case 0:
                var3 = arg0;
                var5 = var3.message;
                var0 = var5.author;
                var6 = _closure1_slot0;
                var4 = _closure1_slot2;
                var2 = 1;
                var4 = var4[var2];
                var2 = undefined;
                var6 = var6.bind(var2)(var4);
                var4 = var6.getMessageAuthor;
                var4 = var4.bind(var6)(var5);
                var10 = var4.nick;
                var9 = {};
                var6 = 'bindUserMenu';
                var9.action = var6;
                var0 = var0.id;
                var9.userId = var0;
                var0 = var5.channel_id;
                var9.messageChannelId = var0;
                var4 = true;
                var9.medium = var4;
                var11 = var5.application;
                var7 = null;
                var8 = var7 == var11;
                var0 = undefined;
                if (var8) {
                    _fun56438_ip = 116;
                    continue _fun56438
                }
            case 110:
                var0 = var11.bot;
            case 116:
                var0 = var7 != var0;
                var8 = undefined;
                if (!var0) {
                    _fun56438_ip = 164;
                    continue _fun56438
                }
            case 125:
                var0 = {};
                var0.action = var6;
                var6 = var11.bot;
                var6 = var6.id;
                var0.userId = var6;
                var5 = var5.channel_id;
                var0.messageChannelId = var5;
                var0.medium = var4;
                var8 = var0;
            case 164:
                var0 = {};
                var4 = _closure1_slot3;
                var5 = var4.PRIVATE_CHANNEL_INTEGRATION_ADDED;
                var4 = arg1;
                if (!(var4 !== var5)) {
                    _fun56438_ip = 236;
                    continue _fun56438
                }
            case 183:
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var4 = 2;
                var4 = var6[var4];
                var6 = var5.bind(var2)(var4);
                var5 = var6.getPrivateChannelIntegrationRemovedSystemMessageASTContent;
                var4 = {};
                var4.application = var11;
                var4.username = var10;
                var4.usernameOnClick = var9;
                var4.applicationNameOnClick = var8;
                var4 = var5.bind(var6)(var4);
                _fun56438_ip = 287;
                continue _fun56438;
            case 236:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var5 = 2;
                var5 = var7[var5];
                var7 = var6.bind(var2)(var5);
                var6 = var7.getPrivateChannelIntegrationAddedSystemMessageASTContent;
                var5 = {};
                var5.application = var11;
                var5.username = var10;
                var5.usernameOnClick = var9;
                var5.applicationNameOnClick = var8;
                var4 = var6.bind(var7)(var5);
            case 287:
                var0.content = var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 3;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var12 = var1.bind(var2)(var3);
                var13 = var0;
                var1 = copyDataProperties(var13, var12);
                return var0;
        }
    };
    var2.createPrivateChannelIntegrationSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 3982, 6762, 6745, 2]);