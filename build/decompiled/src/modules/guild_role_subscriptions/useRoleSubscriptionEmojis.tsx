// modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot2 = var1;
    var1 = 1;
    var4 = var6[var1];
    var1 = metroImportDefault;
    var1 = var1.bind(var0)(var4);
    var _closure1_slot3 = var1;
    var1 = new Array(0);
    var _closure1_slot4 = var1;
    var4 = 4;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/useRoleSubscriptionEmojis.tsx';
    var4 = var5.bind(var6)(var4);
    var3 = function arg0() {
        var4 = arg0;
        var _closure2_slot0 = var4;
        var5 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var7 = var5.bind(var2)(var3);
        var6 = var7.useStateFromStores;
        var2 = _closure1_slot3;
        var5 = new Array(1);
        var5[0] = var2;
        var3 = new Array(1);
        var3[0] = var4;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot3;
            var1 = var2.getGuildEmoji;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var5 = var6.bind(var7)(var5, var2, var3);
        var _closure2_slot1 = var5;
        var3 = _closure1_slot2;
        var2 = var3.useMemo;
        var1 = new Array(2);
        var1[0] = var5;
        var1[1] = var4;
        var0 = function() { // Environment: var0
            _fun116801: for (var _fun116801_ip = 0;;) switch (_fun116801_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun116801_ip = 38;
                        continue _fun116801
                    }
                case 13:
                    var2 = _closure2_slot1;
                    var1 = var2.filter;
                    var0 = function(arg0) { // Environment: var0
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var0 = 3;
                        var1 = var1[var0];
                        var0 = undefined;
                        var3 = var2.bind(var0)(var1);
                        var2 = var3.isRoleSubscriptionEmoji;
                        var1 = _closure2_slot0;
                        var0 = arg0;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var0 = var1.bind(var2)(var0);
                    _fun116801_ip = 45;
                    continue _fun116801;
                case 38:
                    var0 = _closure1_slot4;
                case 45:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var3;
    var2.NO_EMOJIS_AVAILABLE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 4737, 566, 4742, 2]);