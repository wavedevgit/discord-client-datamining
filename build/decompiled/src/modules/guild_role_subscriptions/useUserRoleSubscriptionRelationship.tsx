// modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var1 = function() {
        _fun83902: for (var _fun83902_ip = 0;;) switch (_fun83902_ip) {
            case 0:
                var4 = arguments[0];
                var0 = undefined;
                if (!(var4 === var0)) {
                    _fun83902_ip = 29;
                    continue _fun83902
                }
            case 11:
                var3 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var3;
                var4 = var2;
            case 29:
                var2 = var4;
                var3 = var2[Symbol.iterator];
                var2 = var3().next;
                var5 = var2().value;
                var2 = var3;
                var4 = var2 === var0;
                var2 = undefined;
                if (var4) {
                    _fun83902_ip = 54;
                    continue _fun83902
                }
            case 51:
                var2 = var5;
            case 54:
                var _closure2_slot0 = var2;
                if (var4) {
                    _fun83902_ip = 64;
                    continue _fun83902
                }
            case 61:
                var3.return();
            case 64:
                var _closure2_slot1 = var0;
                var0 = var2.getGuildIdsWithPurchasableRoles;
                var0 = var0.bind(var2)();
                var2 = false;
                _closure2_slot1 = var2;
                var3 = var0.forEach;
                var2 = function(arg0) { // Environment: var1
                    _fun83903: for (var _fun83903_ip = 0;;) switch (_fun83903_ip) {
                        case 0:
                            var3 = _closure2_slot0;
                            var2 = var3.getUserSubscriptionRoles;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var0);
                            var2 = var0.size;
                            var0 = 0;
                            if (!(var2 > var0)) {
                                _fun83903_ip = 38;
                                continue _fun83903
                            }
                        case 32:
                            var0 = true;
                            _closure2_slot1 = var0;
                        case 38:
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var0)(var2);
                var1 = _closure2_slot1;
                if (var1) {
                    _fun83902_ip = 151;
                    continue _fun83902
                }
            case 110:
                var1 = var0.size;
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun83902_ip = 136;
                    continue _fun83902
                }
            case 121:
                var0 = _closure1_slot3;
                var0 = var0.IN_SUBSCRIPTION_SERVER;
                _fun83902_ip = 149;
                continue _fun83902;
            case 136:
                var1 = _closure1_slot3;
                var0 = var1.NONE;
            case 149:
                _fun83902_ip = 164;
                continue _fun83902;
            case 151:
                var1 = _closure1_slot3;
                var0 = var1.SUBSCRIBED;
            case 164:
                return var0;
        }
    };
    var _closure1_slot4 = var1;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var4);
    var0 = 0;
    var7 = var6[var0];
    var4 = arg2;
    var0 = undefined;
    var4 = var4.bind(var0)(var7);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var0)(var4);
    var4 = var4.UserGuildRoleSubscriptionRelationship;
    var _closure1_slot3 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/useUserRoleSubscriptionRelationship.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function() {
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var1 = 2;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.useStateFromStores;
        var0 = _closure1_slot2;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var0 = _closure1_slot2;
            var1 = new Array(1);
            var1[0] = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.default = var3;
    var2.getUserRoleSubscriptionRelationship = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4701, 5597, 566, 2]);