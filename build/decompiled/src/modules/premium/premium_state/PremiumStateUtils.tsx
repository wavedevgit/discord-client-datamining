// modules/premium/premium_state/PremiumStateUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = dependencyMap;
    var0 = 0;
    var3 = var1[var0];
    var1 = require;
    var0 = undefined;
    var4 = var1.bind(var0)(var3);
    var3 = var4.fileFinishedImporting;
    var1 = 'modules/premium/premium_state/PremiumStateUtils.tsx';
    var1 = var3.bind(var4)(var1);
    var1 = function arg0() {
        _fun18169: for (var _fun18169_ip = 0;;) switch (_fun18169_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var1 = var0 == var2;
                if (var1) {
                    _fun18169_ip = 56;
                    continue _fun18169
                }
            case 12:
                var1 = {};
                var3 = var2.premium_subscription_type;
                var1.premiumSubscriptionType = var3;
                var3 = var2.premium_source;
                var1.premiumSource = var3;
                var2 = var2.premium_subscription_group_role;
                var1.premiumSubscriptionGroupRole = var2;
                var0 = var1;
            case 56:
                return var0;
        }
    };
    var2.parseServerPremiumState = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);