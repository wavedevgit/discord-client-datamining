// modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx
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
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/InGameMessageNuxSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun55805: for (var _fun55805_ip = 0;;) switch (_fun55805_ip) {
            case 0:
                var4 = arg0;
                var2 = var4.message;
                var1 = var4.theme;
                var5 = _closure1_slot1;
                var3 = _closure1_slot2;
                var0 = 2;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var5.bind(var3)(var0);
                var7 = var0.bind(var3)(var1);
                var11 = var2.author;
                var6 = _closure1_slot3;
                var5 = var6.getApplication;
                var9 = var2.applicationId;
                var0 = null;
                var10 = var0 != var9;
                var1 = '';
                if (!var10) {
                    _fun55805_ip = 81;
                    continue _fun55805
                }
            case 78:
                var1 = var9;
            case 81:
                var1 = var5.bind(var6)(var1);
                if (!(var0 != var1)) {
                    _fun55805_ip = 357;
                    continue _fun55805
                }
            case 93:
                var9 = {};
                var10 = _closure1_slot0;
                var6 = _closure1_slot2;
                var5 = 3;
                var5 = var6[var5];
                var12 = var10.bind(var3)(var5);
                var5 = var12.getMessageAuthorWithProcessedColor;
                var5 = var5.bind(var12)(var2);
                var5 = var5.nick;
                var9.username = var5;
                var5 = {};
                var12 = 'bindUserMenu';
                var5.action = var12;
                var11 = var11.id;
                var5.userId = var11;
                var11 = var7.textColor;
                var5.linkColor = var11;
                var2 = var2.channel_id;
                var5.messageChannelId = var2;
                var2 = true;
                var5.medium = var2;
                var9.usernameOnClick = var5;
                var1 = var1.name;
                var9.gameName = var1;
                var1 = {};
                var5 = 'bindOpenUrl';
                var1.action = var5;
                var5 = _closure1_slot1;
                var11 = 4;
                var11 = var6[var11];
                var12 = var5.bind(var3)(var11);
                var11 = var12.getArticleURL;
                var8 = _closure1_slot4;
                var8 = var8.SOCIAL_LAYER_CONNECTIONS;
                var8 = var11.bind(var12)(var8);
                var1.url = var8;
                var7 = var7.linkColor;
                var1.linkColor = var7;
                var1.medium = var2;
                var9.urlOnClick = var1;
                var1 = {};
                var2 = 5;
                var7 = var6[var2];
                var7 = var10.bind(var3)(var7);
                var8 = var7.intl;
                var7 = var8.formatToParts;
                var2 = var6[var2];
                var2 = var10.bind(var3)(var2);
                var2 = var2.t;
                var2 = var2["92erOB"];
                var2 = var7.bind(var8)(var2, var9);
                var1.content = var2;
                var2 = 6;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var13 = var2.bind(var3)(var4);
                var14 = var1;
                var2 = copyDataProperties(var14, var13);
                return var1;
            case 357:
                return var0;
        }
    };
    var2.createInGameMessageNuxSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3415, 660, 6632, 6640, 1675, 1234, 6642, 2]);