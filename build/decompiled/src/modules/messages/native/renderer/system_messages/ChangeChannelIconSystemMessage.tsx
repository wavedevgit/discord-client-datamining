// modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx
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
    var3 = 'modules/messages/native/renderer/system_messages/ChangeChannelIconSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: createChangeChannelIconSystemMessage, environment: var1
        _fun55337: for (var _fun55337_ip = 0;;) switch (_fun55337_ip) {
            case 0:
                var3 = arg0;
                var11 = var3.message;
                var4 = var3.theme;
                var6 = _closure1_slot1;
                var5 = _closure1_slot2;
                var0 = 1;
                var0 = var5[var0];
                var2 = undefined;
                var0 = var6.bind(var2)(var0);
                var13 = var0.bind(var2)(var4);
                var4 = _closure1_slot0;
                var0 = 2;
                var0 = var5[var0];
                var4 = var4.bind(var2)(var0);
                var0 = var4.getMessageAuthor;
                var0 = var0.bind(var4)(var11);
                var14 = var0.nick;
                var9 = {};
                var0 = 'bindUserMenu';
                var9.action = var0;
                var0 = var11.author;
                var0 = var0.id;
                var9.userId = var0;
                var0 = var11.channel_id;
                var9.messageChannelId = var0;
                var10 = true;
                var9.medium = var10;
                var0 = {};
                var6 = _closure1_slot3;
                var5 = var6.getChannel;
                var4 = var11.channel_id;
                var6 = var5.bind(var6)(var4);
                var12 = null;
                var5 = var12 == var6;
                var4 = undefined;
                if (var5) {
                    _fun55337_ip = 178;
                    continue _fun55337
                }
            case 153:
                var5 = var6.isGroupDM;
                var5 = var12 == var5;
                var4 = undefined;
                if (var5) {
                    _fun55337_ip = 178;
                    continue _fun55337
                }
            case 168:
                var5 = var6.isGroupDM;
                var4 = var5.bind(var6)();
            case 178:
                if (!(var12 != var4)) {
                    _fun55337_ip = 185;
                    continue _fun55337
                }
            case 182:
                if (var4) {
                    _fun55337_ip = 255;
                    continue _fun55337
                }
            case 185:
                var5 = _closure1_slot0;
                var8 = _closure1_slot2;
                var4 = 3;
                var6 = var8[var4];
                var6 = var5.bind(var2)(var6);
                var7 = var6.intl;
                var6 = var7.formatToParts;
                var4 = var8[var4];
                var4 = var5.bind(var2)(var4);
                var4 = var4.t;
                var5 = var4.wypJZ0;
                var4 = {};
                var4.username = var14;
                var4.usernameOnClick = var9;
                var4 = var6.bind(var7)(var5, var4);
                _fun55337_ip = 377;
                continue _fun55337;
            case 255:
                var6 = _closure1_slot0;
                var15 = _closure1_slot2;
                var5 = 3;
                var7 = var15[var5];
                var7 = var6.bind(var2)(var7);
                var8 = var7.intl;
                var7 = var8.formatToParts;
                var5 = var15[var5];
                var5 = var6.bind(var2)(var5);
                var5 = var5.t;
                var6 = var5.hfeYXC;
                var5 = {};
                var5.username = var14;
                var5.usernameOnClick = var9;
                var9 = {};
                var14 = 'bindOpenGdmCustomizeActionSheet';
                var9.action = var14;
                var14 = var12 == var13;
                var12 = undefined;
                if (var14) {
                    _fun55337_ip = 346;
                    continue _fun55337
                }
            case 340:
                var12 = var13.linkColor;
            case 346:
                var9.linkColor = var12;
                var11 = var11.channel_id;
                var9.messageChannelId = var11;
                var9.medium = var10;
                var5.onEditGroup = var9;
                var4 = var7.bind(var8)(var6, var5);
            case 377:
                var0.content = var4;
                var4 = _closure1_slot1;
                var5 = _closure1_slot2;
                var1 = 4;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var16 = var1.bind(var2)(var3);
                var17 = var0;
                var1 = copyDataProperties(var17, var16);
                return var0;
        }
    };
    var2.createChangeChannelIconSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1372, 6626, 3936, 1234, 6636, 2]);