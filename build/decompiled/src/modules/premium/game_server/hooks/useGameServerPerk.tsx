// modules/premium/game_server/hooks/useGameServerPerk.tsx
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
    var7 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var7);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildPowerupType;
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.GAME_SERVER_POWERUP_SKU_ID;
    var _closure1_slot6 = var3;
    var3 = 10;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/game_server/hooks/useGameServerPerk.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var8 = arg0;
        var _closure2_slot0 = var8;
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var2 = 4;
        var2 = var5[var2];
        var3 = undefined;
        var7 = var4.bind(var3)(var2);
        var6 = var7.useGameServerEnabled;
        var2 = 'useGameServerPerk';
        var7 = var6.bind(var7)(var8, var2);
        var _closure2_slot1 = var7;
        var2 = 5;
        var2 = var5[var2];
        var8 = var4.bind(var3)(var2);
        var6 = var8.useStateFromStores;
        var2 = _closure1_slot4;
        var4 = new Array(1);
        var4[0] = var2;
        var2 = function() { // Environment: var0
            var2 = _closure1_slot4;
            var1 = var2.getLowestGameCostForGuild;
            var0 = _closure2_slot0;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var6 = var6.bind(var8)(var4, var2);
        var _closure2_slot2 = var6;
        var4 = _closure1_slot1;
        var2 = 6;
        var2 = var5[var2];
        var2 = var4.bind(var3)(var2);
        var2 = var2.bind(var3)();
        var5 = var2.gameName;
        var _closure2_slot3 = var5;
        var4 = var2.gameName2;
        var _closure2_slot4 = var4;
        var3 = _closure1_slot3;
        var2 = var3.useMemo;
        var1 = new Array(4);
        var1[0] = var7;
        var1[1] = var6;
        var1[2] = var5;
        var1[3] = var4;
        var0 = function() { // Environment: var0
            _fun78056: for (var _fun78056_ip = 0;;) switch (_fun78056_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var2 = null;
                    var0 = null;
                    if (!var1) {
                        _fun78056_ip = 242;
                        continue _fun78056
                    }
                case 17:
                    var1 = _closure2_slot2;
                    var1 = var2 != var1;
                    var0 = null;
                    if (!var1) {
                        _fun78056_ip = 242;
                        continue _fun78056
                    }
                case 33:
                    var1 = {};
                    var3 = _closure1_slot6;
                    var1.skuId = var3;
                    var9 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var8 = 7;
                    var3 = var5[var8];
                    var4 = undefined;
                    var3 = var9.bind(var4)(var3);
                    var12 = var3.intl;
                    var11 = var12.string;
                    var3 = _closure1_slot1;
                    var7 = 8;
                    var10 = var5[var7];
                    var10 = var3.bind(var4)(var10);
                    var10 = var10["B3OfL/"];
                    var10 = var11.bind(var12)(var10);
                    var1.title = var10;
                    var8 = var5[var8];
                    var8 = var9.bind(var4)(var8);
                    var10 = var8.intl;
                    var9 = var10.format;
                    var7 = var5[var7];
                    var7 = var3.bind(var4)(var7);
                    var8 = var7["+UqyGU"];
                    var7 = {};
                    var11 = _closure2_slot3;
                    var7.gameName = var11;
                    var11 = _closure2_slot4;
                    var7.gameName2 = var11;
                    var7 = var9.bind(var10)(var8, var7);
                    var1.description = var7;
                    var6 = _closure2_slot2;
                    var1.cost = var6;
                    var6 = new Array(0);
                    var1.dependencies = var6;
                    var2 = _closure1_slot5;
                    var2 = var2.PERK;
                    var1.type = var2;
                    var2 = 9;
                    var6 = var5[var2];
                    var6 = var3.bind(var4)(var6);
                    var1.animatedImageUrl = var6;
                    var2 = var5[var2];
                    var2 = var3.bind(var4)(var2);
                    var1.staticImageUrl = var2;
                    var0 = var1;
                case 242:
                    return var0;
            }
        };
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 6678, 6681, 9875, 5606, 566, 9877, 1234, 2205, 9878, 2]);