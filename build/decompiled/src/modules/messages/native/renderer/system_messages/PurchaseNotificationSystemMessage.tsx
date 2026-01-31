// modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/messages/native/renderer/system_messages/PurchaseNotificationSystemMessage.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: createPurchaseNotificationSystemMessage, environment: var1
        _fun55749: for (var _fun55749_ip = 0;;) switch (_fun55749_ip) {
            case 0:
                var3 = arg0;
                var0 = var3.message;
                var1 = var0.purchaseNotification;
                var0 = null;
                var2 = var0 == var1;
                var4 = undefined;
                var5 = undefined;
                if (var2) {
                    _fun55749_ip = 32;
                    continue _fun55749
                }
            case 27:
                var5 = var1.type;
            case 32:
                var6 = _closure1_slot0;
                var7 = _closure1_slot1;
                var2 = 0;
                var2 = var7[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.PurchaseNotificationType;
                var2 = var2.GUILD_PRODUCT;
                var0 = null;
                if (!(var5 === var2)) {
                    _fun55749_ip = 103;
                    continue _fun55749
                }
            case 72:
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 1;
                var1 = var5[var1];
                var2 = var2.bind(var4)(var1);
                var1 = var2.createGuildProductPurchaseSystemMessage;
                var0 = var1.bind(var2)(var3);
            case 103:
                return var0;
        }
    };
    var2.createPurchaseNotificationSystemMessage = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1636, 6703, 2]);