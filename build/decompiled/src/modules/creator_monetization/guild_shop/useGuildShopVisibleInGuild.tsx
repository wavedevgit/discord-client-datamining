// modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.GuildFeatures;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/creator_monetization/guild_shop/useGuildShopVisibleInGuild.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        _fun50486: for (var _fun50486_ip = 0;;) switch (_fun50486_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 1;
                var2 = var2[var0];
                var0 = undefined;
                var6 = var4.bind(var0)(var2);
                var5 = var6.useIsEligibleForSubscriptionsInGuildShop;
                var4 = null;
                var7 = var4 == var3;
                var2 = undefined;
                if (var7) {
                    _fun50486_ip = 50;
                    continue _fun50486
                }
            case 45:
                var2 = var3.id;
            case 50:
                var7 = 'channel_list';
                var2 = var5.bind(var6)(var2, var7);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 2;
                var2 = var6[var2];
                var6 = var5.bind(var0)(var2);
                var5 = var6.useRoleSubscriptionsVisibleInGuild;
                var8 = var4 == var3;
                var2 = undefined;
                if (var8) {
                    _fun50486_ip = 102;
                    continue _fun50486
                }
            case 97:
                var2 = var3.id;
            case 102:
                var2 = var5.bind(var6)(var2);
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var6 = var2.bind(var0)(var1);
                var1 = var6.useGuildShopPreviewVisible;
                var1 = var1.bind(var6)(var3, var7);
                var1 = 4;
                var1 = var5[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.useShouldHideGuildPurchaseEntryPoints;
                var4 = var4 == var3;
                var0 = undefined;
                if (var4) {
                    _fun50486_ip = 171;
                    continue _fun50486
                }
            case 166:
                var0 = var3.id;
            case 171:
                var0 = var1.bind(var2)(var0);
                var0 = var0.shouldHideGuildPurchaseEntryPoints;
                var0 = false;
                return var0;
        }
    };
    var2.useGuildShopVisibleInGuild = var3;
    var1 = function arg0, arg1() {
        _fun50487: for (var _fun50487_ip = 0;;) switch (_fun50487_ip) {
            case 0:
                var0 = arg0;
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var3 = var3[var1];
                var1 = undefined;
                var7 = var4.bind(var1)(var3);
                var6 = var7.isEligibleForSubscriptionsInGuildShop;
                var4 = null;
                var3 = var4 == var0;
                var5 = undefined;
                if (var3) {
                    _fun50487_ip = 50;
                    continue _fun50487
                }
            case 45:
                var5 = var0.id;
            case 50:
                var3 = 'channel_list';
                var3 = var6.bind(var7)(var5, var3);
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 2;
                var2 = var5[var2];
                var3 = var3.bind(var1)(var2);
                var2 = var3.areRoleSubscriptionsVisibleInGuild;
                var4 = var4 == var0;
                var1 = undefined;
                if (var4) {
                    _fun50487_ip = 102;
                    continue _fun50487
                }
            case 97:
                var1 = var0.id;
            case 102:
                var0 = arg1;
                var0 = var2.bind(var3)(var1, var0);
                var0 = false;
                return var0;
        }
    };
    var2.isGuildShopVisibleInGuild = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [660, 5678, 5670, 5690, 5673, 2]);