// modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/PremiumGroupInviteSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        _fun56485: for (var _fun56485_ip = 0;;) switch (_fun56485_ip) {
            case 0:
                var4 = arg0;
                var8 = var4.message;
                var11 = var4.theme;
                var3 = _closure1_slot4;
                var1 = var3.getChannel;
                var0 = var8.getChannelId;
                var0 = var0.bind(var8)();
                var9 = var1.bind(var3)(var0);
                var1 = _closure1_slot3;
                var0 = var1.getId;
                var10 = var0.bind(var1)();
                var1 = _closure1_slot0;
                var3 = _closure1_slot2;
                var0 = 2;
                var0 = var3[var0];
                var3 = undefined;
                var1 = var1.bind(var3)(var0);
                var0 = var1.createPremiumGroupInviteEmbed;
                var13 = var1;
                var12 = var8;
                var5 = var13[var0](var12, var11, var10, var9, var8);
                var0 = null;
                var1 = var0 == var5;
                if (var1) {
                    _fun56485_ip = 146;
                    continue _fun56485
                }
            case 102:
                var1 = {};
                var1.premiumGroupInviteInfo = var5;
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var2 = 3;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var11 = var2.bind(var3)(var4);
                var12 = var1;
                var2 = copyDataProperties(var12, var11);
                var0 = var1;
            case 146:
                return var0;
        }
    };
    var2.createPremiumGroupInviteSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1216, 1372, 6837, 6745, 2]);