// modules/guild_scheduled_events/useGuildScheduledEventUserCount.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.useEffect;
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/guild_scheduled_events/useGuildScheduledEventUserCount.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1, arg2() {
        var6 = arg0;
        var7 = arg1;
        var5 = arg2;
        var _closure2_slot0 = var6;
        var _closure2_slot1 = var7;
        var _closure2_slot2 = var5;
        var3 = _closure1_slot0;
        var4 = _closure1_slot2;
        var0 = 2;
        var0 = var4[var0];
        var4 = undefined;
        var9 = var3.bind(var4)(var0);
        var8 = var9.useStateFromStores;
        var0 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var0;
        var0 = function() { // Environment: var1
            var3 = _closure1_slot4;
            var2 = var3.getUserCount;
            var1 = _closure2_slot1;
            var0 = _closure2_slot2;
            var0 = var2.bind(var3)(var1, var0);
            return var0;
        };
        var0 = var8.bind(var9)(var3, var0);
        var3 = _closure1_slot3;
        var2 = new Array(3);
        var2[0] = var7;
        var2[1] = var6;
        var2[2] = var5;
        var1 = function() { // Environment: var1
            _fun66686: for (var _fun66686_ip = 0;;) switch (_fun66686_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    var6 = null;
                    var0 = var6 != var0;
                    if (!var0) {
                        _fun66686_ip = 24;
                        continue _fun66686
                    }
                case 16:
                    var1 = _closure2_slot1;
                    var0 = var6 != var1;
                case 24:
                    if (!var0) {
                        _fun66686_ip = 102;
                        continue _fun66686
                    }
                case 27:
                    var2 = _closure1_slot1;
                    var1 = _closure1_slot2;
                    var0 = 3;
                    var1 = var1[var0];
                    var0 = undefined;
                    var4 = var2.bind(var0)(var1);
                    var3 = var4.getGuildEventUserCounts;
                    var2 = _closure2_slot0;
                    var1 = _closure2_slot1;
                    var0 = _closure2_slot2;
                    if (!(var6 == var0)) {
                        _fun66686_ip = 80;
                        continue _fun66686
                    }
                case 74:
                    var0 = new Array(0);
                    _fun66686_ip = 95;
                    continue _fun66686;
                case 80:
                    var6 = _closure2_slot2;
                    var5 = new Array(1);
                    var5[0] = var6;
                    var0 = var5;
                case 95:
                    var0 = var3.bind(var4)(var2, var1, var0);
                case 102:
                    var0 = undefined;
                    return var0;
            }
        };
        var1 = var3.bind(var4)(var1, var2);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 3335, 566, 8247, 2]);