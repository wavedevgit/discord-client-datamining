// modules/premium/GuildCapUpsellHooks.tsx
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
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MAX_USER_GUILDS;
    var _closure1_slot5 = var3;
    var3 = 6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/GuildCapUpsellHooks.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        _fun78779: for (var _fun78779_ip = 0;;) switch (_fun78779_ip) {
            case 0:
                var6 = _closure1_slot0;
                var7 = _closure1_slot2;
                var4 = 3;
                var0 = var7[var4];
                var5 = undefined;
                var9 = var6.bind(var5)(var0);
                var8 = var9.useStateFromStores;
                var0 = _closure1_slot3;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var1
                    var1 = _closure1_slot3;
                    var0 = var1.getGuildCount;
                    var1 = var0.bind(var1)();
                    var0 = 95;
                    var0 = var1 >= var0;
                    return var0;
                };
                var0 = var8.bind(var9)(var2, var0);
                var2 = var7[var4];
                var10 = var6.bind(var5)(var2);
                var9 = var10.useStateFromStores;
                var2 = 4;
                var2 = var7[var2];
                var2 = var6.bind(var5)(var2);
                var2 = var2.HotspotStore;
                var8 = new Array(1);
                var8[0] = var2;
                var2 = function() { // Environment: var1
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var0 = 4;
                    var1 = var5[var0];
                    var3 = undefined;
                    var1 = var4.bind(var3)(var1);
                    var2 = var1.HotspotStore;
                    var1 = var2.hasHotspot;
                    var0 = var5[var0];
                    var0 = var4.bind(var3)(var0);
                    var0 = var0.HotspotLocations;
                    var0 = var0.GUILD_CAP_INLINE_UPSELL;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var2 = var9.bind(var10)(var8, var2);
                var4 = var7[var4];
                var5 = var6.bind(var5)(var4);
                var4 = var5.useStateFromStoresObject;
                var6 = _closure1_slot4;
                var3 = new Array(1);
                var3[0] = var6;
                var1 = function() { // Environment: var1
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 5;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.isPremium;
                    var3 = _closure1_slot4;
                    var0 = var3.getCurrentUser;
                    var0 = var0.bind(var3)();
                    var0 = var1.bind(var2)(var0);
                    var0 = !var0;
                    return var0;
                };
                var1 = var4.bind(var5)(var3, var1);
                if (!var0) {
                    _fun78779_ip = 156;
                    continue _fun78779
                }
            case 153:
                var0 = var2;
            case 156:
                if (!var0) {
                    _fun78779_ip = 162;
                    continue _fun78779
                }
            case 159:
                var0 = var1;
            case 162:
                return var0;
        }
    };
    var2.useShouldShowInlineGuildCapUpsell = var3;
    var3 = function() {
        var4 = _closure1_slot0;
        var5 = _closure1_slot2;
        var1 = 4;
        var2 = var5[var1];
        var0 = undefined;
        var3 = var4.bind(var0)(var2);
        var2 = var3.hideHotspot;
        var1 = var5[var1];
        var1 = var4.bind(var0)(var1);
        var1 = var1.HotspotLocations;
        var1 = var1.GUILD_CAP_INLINE_UPSELL;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.hideInlineGuildCapUpsell = var3;
    var1 = function() {
        _fun78784: for (var _fun78784_ip = 0;;) switch (_fun78784_ip) {
            case 0:
                var2 = _closure1_slot3;
                var0 = var2.getGuildCount;
                var2 = var0.bind(var2)();
                var0 = _closure1_slot5;
                var0 = var2 >= var0;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var3 = var4.bind(var2)(var3);
                var2 = var3.canUseIncreasedGuildCap;
                var4 = _closure1_slot4;
                var1 = var4.getCurrentUser;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                if (!var0) {
                    _fun78784_ip = 77;
                    continue _fun78784
                }
            case 74:
                var0 = !var1;
            case 77:
                return var0;
        }
    };
    var2.isAtGuildCapAndNonPremium = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1410, 1613, 660, 566, 8282, 3070, 2]);