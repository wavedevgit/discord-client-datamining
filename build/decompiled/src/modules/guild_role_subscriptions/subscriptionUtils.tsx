// modules/guild_role_subscriptions/subscriptionUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 1;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/subscriptionUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = arg0;
        var1 = var0.items;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 0;
        var2 = var2[var0];
        var5 = undefined;
        var4 = var3.bind(var5)(var2);
        var3 = var1.length;
        var2 = 1;
        var3 = var2 === var3;
        var2 = 'more than 1 subscription item for role subscription';
        var2 = var4.bind(var5)(var3, var2);
        var0 = var1[var0];
        var0 = var0.planId;
        return var0;
    };
    var2.getRoleSubscriptionPlanId = var3;
    var1 = function arg0() {
        _fun84020: for (var _fun84020_ip = 0;;) switch (_fun84020_ip) {
            case 0:
                var1 = arg0;
                var3 = null;
                var4 = var3 == var1;
                var0 = undefined;
                var2 = undefined;
                if (var4) {
                    _fun84020_ip = 36;
                    continue _fun84020
                }
            case 16:
                var1 = var1.renewalMutations;
                var4 = var3 == var1;
                var2 = undefined;
                if (var4) {
                    _fun84020_ip = 36;
                    continue _fun84020
                }
            case 31:
                var2 = var1.items;
            case 36:
                if (!(var3 == var2)) {
                    _fun84020_ip = 42;
                    continue _fun84020
                }
            case 40:
                return var0;
            case 42:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 0;
                var4 = var4[var1];
                var6 = var5.bind(var0)(var4);
                var5 = var2.length;
                var4 = 1;
                var5 = var5 <= var4;
                var4 = 'more than 1 renewal mutation for role subscription';
                var4 = var6.bind(var0)(var5, var4);
                var3 = var3 == var2;
                var0 = undefined;
                if (var3) {
                    _fun84020_ip = 107;
                    continue _fun84020
                }
            case 97:
                var1 = var2[var1];
                var0 = var1.planId;
            case 107:
                return var0;
        }
    };
    var2.getRoleSubscriptionMutationPlanId = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [44, 2]);