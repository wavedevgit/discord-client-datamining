// modules/guild_member_verification/hooks/useSortedMemberApplications.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot3 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_member_verification/hooks/useSortedMemberApplications.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var2 = arg0;
        var0 = var2.guildId;
        var _closure2_slot0 = var0;
        var8 = var2.applicationStatus;
        var _closure2_slot1 = var8;
        var6 = var2.sortOrder;
        var _closure2_slot2 = var6;
        var5 = _closure1_slot0;
        var4 = _closure1_slot1;
        var3 = 2;
        var4 = var4[var3];
        var3 = undefined;
        var7 = var5.bind(var3)(var4);
        var5 = var7.useStateFromStores;
        var3 = _closure1_slot3;
        var4 = new Array(1);
        var4[0] = var3;
        var3 = new Array(2);
        var3[0] = var8;
        var3[1] = var0;
        var0 = function() { // Environment: var1
            var3 = _closure1_slot3;
            var2 = var3.getRequests;
            var1 = _closure2_slot0;
            var0 = _closure2_slot1;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var5 = var5.bind(var7)(var4, var0, var3);
        var _closure2_slot3 = var5;
        var0 = {};
        var4 = _closure1_slot2;
        var3 = var4.useMemo;
        var2 = new Array(2);
        var2[0] = var6;
        var2[1] = var5;
        var1 = function() { // Environment: var1
            _fun105536: for (var _fun105536_ip = 0;;) switch (_fun105536_ip) {
                case 0:
                    var2 = _closure2_slot2;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var0 = 3;
                    var3 = var3[var0];
                    var0 = undefined;
                    var0 = var4.bind(var0)(var3);
                    var0 = var0.GuildJoinRequestSortOrders;
                    var0 = var0.TIMESTAMP_DESC;
                    if (!(var2 !== var0)) {
                        _fun105536_ip = 54;
                        continue _fun105536
                    }
                case 48:
                    var0 = _closure2_slot3;
                    _fun105536_ip = 81;
                    continue _fun105536;
                case 54:
                    var6 = _closure2_slot3;
                    var2 = new Array(0);
                    var5 = 0;
                    var7 = var2;
                    var1 = arraySpread(var7, var6, var5);
                    var1 = var2.reverse;
                    var0 = var1.bind(var2)();
                case 81:
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        var0.guildJoinRequests = var1;
        return var0;
    };
    var2.useSortedMemberApplications = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6594, 566, 3217, 2]);