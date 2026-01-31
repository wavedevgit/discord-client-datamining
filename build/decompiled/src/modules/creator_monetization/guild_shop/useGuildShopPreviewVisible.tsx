// modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx
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
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.Permissions;
    var _closure1_slot3 = var6;
    var3 = var3.GuildFeatures;
    var _closure1_slot4 = var3;
    var3 = 7;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/creator_monetization/guild_shop/useGuildShopPreviewVisible.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0, arg1) { // Original name: useGuildShopPreviewVisible, environment: var1
        _fun49859: for (var _fun49859_ip = 0;;) switch (_fun49859_ip) {
            case 0:
                var7 = arg0;
                var _closure2_slot0 = var7;
                var2 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 2;
                var0 = var5[var0];
                var9 = undefined;
                var3 = var2.bind(var9)(var0);
                var1 = var3.useIsEligibleForGuildShopPreview;
                var0 = arg1;
                var3 = var1.bind(var3)(var0);
                var0 = 3;
                var0 = var5[var0];
                var6 = var2.bind(var9)(var0);
                var1 = var6.UNSAFE_useIsDismissibleContentDismissed;
                var0 = 4;
                var0 = var5[var0];
                var0 = var2.bind(var9)(var0);
                var0 = var0.DismissibleContent;
                var0 = var0.SERVER_SHOP_PHANTOM_PREVIEW;
                var1 = var1.bind(var6)(var0);
                var0 = 5;
                var0 = var5[var0];
                var6 = var2.bind(var9)(var0);
                var5 = var6.useStateFromStores;
                var0 = _closure1_slot2;
                var2 = new Array(1);
                var2[0] = var0;
                var0 = function() { // Environment: var4
                    _fun49860: for (var _fun49860_ip = 0;;) switch (_fun49860_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var0 = var0 != var2;
                            if (!var0) {
                                _fun49860_ip = 49;
                                continue _fun49860
                            }
                        case 16:
                            var4 = _closure1_slot2;
                            var3 = var4.can;
                            var2 = _closure1_slot3;
                            var2 = var2.ADMINISTRATOR;
                            var1 = _closure2_slot0;
                            var0 = var3.bind(var4)(var2, var1);
                        case 49:
                            return var0;
                    }
                };
                var6 = var5.bind(var6)(var2, var0);
                var0 = null;
                var5 = var0 == var7;
                var2 = undefined;
                if (var5) {
                    _fun49859_ip = 172;
                    continue _fun49859
                }
            case 146:
                var11 = var7.features;
                var10 = var11.has;
                var5 = _closure1_slot4;
                var5 = var5.PRODUCTS_AVAILABLE_FOR_PURCHASE;
                var2 = var10.bind(var11)(var5);
            case 172:
                var5 = var0 != var2;
                if (!var5) {
                    _fun49859_ip = 182;
                    continue _fun49859
                }
            case 179:
                var5 = var2;
            case 182:
                var10 = _closure1_slot0;
                var11 = _closure1_slot1;
                var2 = 6;
                var2 = var11[var2];
                var11 = var10.bind(var9)(var2);
                var10 = var11.useGuildEligibleForGuildProducts;
                var2 = var0 == var7;
                var9 = undefined;
                if (var2) {
                    _fun49859_ip = 222;
                    continue _fun49859
                }
            case 217:
                var9 = var7.id;
            case 222:
                var2 = 'useGuildShopPreviewVisible';
                var2 = var10.bind(var11)(var9, var2);
                var8 = _closure1_slot4;
                var10 = var8.CREATOR_MONETIZABLE;
                var9 = new Array(3);
                var9[0] = var10;
                var10 = var8.CREATOR_MONETIZABLE_PROVISIONAL;
                var9[1] = var10;
                var8 = var8.ROLE_SUBSCRIPTIONS_ENABLED;
                var9[2] = var8;
                var8 = var9.some;
                var4 = function(arg0) { // Environment: var4
                    _fun49861: for (var _fun49861_ip = 0;;) switch (_fun49861_ip) {
                        case 0:
                            var2 = _closure2_slot0;
                            var0 = null;
                            var2 = var0 == var2;
                            var0 = undefined;
                            if (var2) {
                                _fun49861_ip = 41;
                                continue _fun49861
                            }
                        case 18:
                            var1 = _closure2_slot0;
                            var3 = var1.features;
                            var2 = var3.has;
                            var1 = arg0;
                            var0 = var2.bind(var3)(var1);
                        case 41:
                            return var0;
                    }
                };
                var4 = var8.bind(var9)(var4);
                var0 = var0 != var7;
                if (!var0) {
                    _fun49859_ip = 296;
                    continue _fun49859
                }
            case 293:
                var0 = var6;
            case 296:
                if (!var0) {
                    _fun49859_ip = 302;
                    continue _fun49859
                }
            case 299:
                var0 = !var5;
            case 302:
                if (!var0) {
                    _fun49859_ip = 308;
                    continue _fun49859
                }
            case 305:
                var0 = var4;
            case 308:
                if (!var0) {
                    _fun49859_ip = 314;
                    continue _fun49859
                }
            case 311:
                var0 = var3;
            case 314:
                if (!var0) {
                    _fun49859_ip = 320;
                    continue _fun49859
                }
            case 317:
                var0 = var2;
            case 320:
                if (!var0) {
                    _fun49859_ip = 326;
                    continue _fun49859
                }
            case 323:
                var0 = !var1;
            case 326:
                return var0;
        }
    };
    var2.useGuildShopPreviewVisible = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3050, 660, 5589, 3171, 1358, 632, 5591, 2]);