// modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.hasPermission;
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildRoleSubscriptionFormat;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.Permissions;
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_role_subscriptions/useRoleSubscriptionFormat.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 6;
        var3 = var3[var2];
        var2 = undefined;
        var5 = var4.bind(var2)(var3);
        var4 = var5.useStateFromStores;
        var2 = _closure1_slot5;
        var3 = new Array(2);
        var3[0] = var2;
        var2 = _closure1_slot4;
        var3[1] = var2;
        var2 = function() { // Environment: var0
            _fun116575: for (var _fun116575_ip = 0;;) switch (_fun116575_ip) {
                case 0:
                    var3 = _closure1_slot5;
                    var2 = var3.getGuild;
                    var0 = _closure2_slot0;
                    var3 = var2.bind(var3)(var0);
                    var0 = null;
                    var2 = var0 != var3;
                    var0 = undefined;
                    if (!var2) {
                        _fun116575_ip = 50;
                        continue _fun116575
                    }
                case 35:
                    var2 = _closure1_slot4;
                    var1 = var2.getEveryoneRole;
                    var0 = var1.bind(var2)(var3);
                case 50:
                    return var0;
            }
        };
        var5 = var4.bind(var5)(var3, var2);
        var _closure2_slot1 = var5;
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(1);
        var2[0] = var5;
        var0 = function() { // Environment: var0
            _fun116576: for (var _fun116576_ip = 0;;) switch (_fun116576_ip) {
                case 0:
                    var2 = _closure2_slot1;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun116576_ip = 57;
                        continue _fun116576
                    }
                case 13:
                    var4 = _closure1_slot3;
                    var3 = _closure2_slot1;
                    var1 = _closure1_slot7;
                    var2 = var1.VIEW_CHANNEL;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3, var2);
                    if (var1) {
                        _fun116576_ip = 57;
                        continue _fun116576
                    }
                case 45:
                    var0 = _closure1_slot6;
                    var0 = var0.ALL_CHANNELS;
                    _fun116576_ip = 70;
                    continue _fun116576;
                case 57:
                    var1 = _closure1_slot6;
                    var0 = var1.SOME_CHANNELS;
                case 70:
                    return var0;
            }
        };
        var2 = var3.bind(var4)(var0, var2);
        var0 = {};
        var0.format = var2;
        var1 = _closure1_slot6;
        var1 = var1.ALL_CHANNELS;
        var1 = var2 === var1;
        var0.isFullServerGating = var1;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 1666, 1665, 1410, 5599, 660, 566, 2]);