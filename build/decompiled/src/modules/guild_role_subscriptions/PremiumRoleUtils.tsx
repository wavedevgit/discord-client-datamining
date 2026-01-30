// modules/guild_role_subscriptions/PremiumRoleUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/PremiumRoleUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: isSubscriptionRole, environment: var1
        _fun24490: for (var _fun24490_ip = 0;;) switch (_fun24490_ip) {
            case 0:
                var2 = arg0;
                var1 = null;
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun24490_ip = 35;
                    continue _fun24490
                }
            case 14:
                var2 = var2.tags;
                var3 = var1 == var2;
                var0 = undefined;
                if (var3) {
                    _fun24490_ip = 35;
                    continue _fun24490
                }
            case 29:
                var0 = var2.subscription_listing_id;
            case 35:
                var0 = var1 != var0;
                return var0;
        }
    };
    var2.isSubscriptionRole = var3;
    var1 = function(arg0) { // Original name: isSubscriptionRoleAvailableForPurchase, environment: var1
        _fun24491: for (var _fun24491_ip = 0;;) switch (_fun24491_ip) {
            case 0:
                var2 = arg0;
                var3 = null;
                var4 = var3 == var2;
                var1 = undefined;
                var0 = undefined;
                if (var4) {
                    _fun24491_ip = 39;
                    continue _fun24491
                }
            case 16:
                var2 = var2.tags;
                var3 = var3 == var2;
                var0 = undefined;
                if (var3) {
                    _fun24491_ip = 39;
                    continue _fun24491
                }
            case 31:
                var0 = var2.available_for_purchase;
            case 39:
                var0 = var1 !== var0;
                return var0;
        }
    };
    var2.isSubscriptionRoleAvailableForPurchase = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);