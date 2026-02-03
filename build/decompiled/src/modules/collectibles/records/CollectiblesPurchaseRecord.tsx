// modules/collectibles/records/CollectiblesPurchaseRecord.tsx
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
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.createCollectiblesItemsFromServerResponse;
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CollectiblesVariantProductRecord;
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.REWARD_CATEGORY_AND_REWARD_SKU_IDS;
    var _closure1_slot7 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.PREMIUM_TYPE_NONE;
    var _closure1_slot8 = var3;
    var1 = function() { // Environment: var1
        var4 = function arg0() {
            var1 = arg0;
            var2 = this;
            var4 = _closure1_slot2;
            var3 = _closure2_slot0;
            var0 = undefined;
            var3 = var4.bind(var0)(var2, var3);
            var3 = var1.skuId;
            var2.skuId = var3;
            var3 = var1.name;
            var2.name = var3;
            var3 = var1.type;
            var2.type = var3;
            var3 = var1.premiumType;
            var2.premiumType = var3;
            var3 = var1.items;
            var2.items = var3;
            var3 = var1.categorySkuId;
            var2.categorySkuId = var3;
            var3 = var1.isCategoryReward;
            var2.isCategoryReward = var3;
            var3 = var1.prices;
            var2.prices = var3;
            var3 = var1.bundledProducts;
            var2.bundledProducts = var3;
            var3 = var1.googleSkuIds;
            var2.googleSkuIds = var3;
            var3 = var1.variants;
            var2.variants = var3;
            var3 = var1.eligibleOffers;
            var2.eligibleOffers = var3;
            var3 = var1.baseVariantName;
            var2.baseVariantName = var3;
            var3 = var1.baseVariantSkuId;
            var2.baseVariantSkuId = var3;
            var3 = var1.variantLabel;
            var2.variantLabel = var3;
            var3 = var1.variantValue;
            var2.variantValue = var3;
            var3 = var1.purchasedAt;
            var2.purchasedAt = var3;
            var3 = var1.purchaseType;
            var2.purchaseType = var3;
            var1 = var1.expiresAt;
            var2.expiresAt = var1;
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var0 = {};
        var2 = 'fromServer';
        var0.key = var2;
        var1 = function arg0() {
            _fun42504: for (var _fun42504_ip = 0;;) switch (_fun42504_ip) {
                case 0:
                    var10 = arg0;
                    var19 = var10.type;
                    var12 = var10.sku_id;
                    var _closure3_slot0 = var12;
                    var15 = var10.name;
                    var18 = var10.premium_type;
                    var13 = var10.category_sku_id;
                    var16 = var10.prices;
                    var17 = var10.bundled_products;
                    var14 = var10.variants;
                    var9 = var10.base_variant_name;
                    var8 = var10.base_variant_sku_id;
                    var6 = var10.variant_label;
                    var4 = var10.variant_value;
                    var7 = var10.purchased_at;
                    var3 = var10.purchase_type;
                    var5 = var10.expires_at;
                    var2 = {
                        'type': 0,
                        'sku_id': 0,
                        'name': 0,
                        'premium_type': 0,
                        'category_sku_id': 0,
                        'prices': 0,
                        'bundled_products': 0,
                        'variants': 0,
                        'base_variant_name': 0,
                        'base_variant_sku_id': 0,
                        'variant_label': 0,
                        'variant_value': 0,
                        'purchased_at': 0,
                        'purchase_type': 0,
                        'expires_at': 0
                    };
                    var1 = null;
                    var22 = var2;
                    var21 = null;
                    var0 = silentSetPrototypeOf(var22, var21);
                    var22 = {};
                    var21 = var10;
                    var20 = var2;
                    var10 = copyDataProperties(var22, var21, var20);
                    var2 = _closure2_slot0;
                    var0 = {};
                    var0.type = var19;
                    var0.name = var15;
                    var0.skuId = var12;
                    var19 = _closure1_slot8;
                    var15 = null;
                    if (!(var18 !== var19)) {
                        _fun42504_ip = 172;
                        continue _fun42504
                    }
                case 169:
                    var15 = var18;
                case 172:
                    var0.premiumType = var15;
                    var0.categorySkuId = var13;
                    var15 = _closure1_slot7;
                    var13 = var15.some;
                    var11 = function(arg0) { // Environment: var11
                        var0 = arg0;
                        var1 = var0.rewardSkuId;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var11 = var13.bind(var15)(var11);
                    var0.isCategoryReward = var11;
                    var15 = _closure1_slot0;
                    var13 = _closure1_slot1;
                    var11 = 7;
                    var13 = var13[var11];
                    var11 = undefined;
                    var15 = var15.bind(var11)(var13);
                    var13 = var15.getPricesFromServer;
                    var13 = var13.bind(var15)(var16);
                    var0.prices = var13;
                    var15 = _closure1_slot5;
                    var13 = var10.items;
                    var13 = var15.bind(var11)(var13);
                    var0.items = var13;
                    var15 = var1 == var17;
                    var13 = undefined;
                    if (var15) {
                        _fun42504_ip = 292;
                        continue _fun42504
                    }
                case 272:
                    var16 = var17.map;
                    var15 = _closure1_slot4;
                    var15 = var15.fromServer;
                    var13 = var16.bind(var17)(var15);
                case 292:
                    var0.bundledProducts = var13;
                    var13 = var1 == var14;
                    var11 = undefined;
                    if (var13) {
                        _fun42504_ip = 326;
                        continue _fun42504
                    }
                case 306:
                    var13 = var14.map;
                    var12 = _closure1_slot6;
                    var12 = var12.fromServer;
                    var11 = var13.bind(var14)(var12);
                case 326:
                    var0.variants = var11;
                    var11 = var10.google_sku_ids;
                    var0.googleSkuIds = var11;
                    var10 = var10.eligible_offers;
                    var0.eligibleOffers = var10;
                    var0.baseVariantName = var9;
                    var0.baseVariantSkuId = var8;
                    var0.variantLabel = var6;
                    var0.variantValue = var4;
                    var0.purchaseType = var3;
                    var3 = var7;
                    if (!(var1 != var3)) {
                        _fun42504_ip = 416;
                        continue _fun42504
                    }
                case 385:
                    var4 = global;
                    var4 = var4.Date;
                    var6 = var4.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var4
                        }
                    });
                    var23 = var6;
                    var22 = var7;
                    var4 = new var23[var4](var22, var21);
                    var3 = var4 instanceof Object ? var4 : var6;
                case 416:
                    var0.purchasedAt = var3;
                    var3 = var1 != var5;
                    var1 = null;
                    if (!var3) {
                        _fun42504_ip = 461;
                        continue _fun42504
                    }
                case 430:
                    var3 = global;
                    var3 = var3.Date;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var23 = var4;
                    var22 = var5;
                    var3 = new var23[var3](var22, var21);
                    var1 = var3 instanceof Object ? var3 : var4;
                case 461:
                    var0.expiresAt = var1;
                    var1 = var2.prototype;
                    var1 = Object.create(var1, {
                        constructor: {
                            value: var2
                        }
                    });
                    var23 = var1;
                    var22 = var0;
                    var0 = new var23[var2](var22, var21);
                    var0 = var0 instanceof Object ? var0 : var1;
                    return var0;
            }
        };
        var0.value = var1;
        var2 = new Array(1);
        var2[0] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var3.bind(var1)(var4, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/records/CollectiblesPurchaseRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4616, 4618, 4615, 3274, 660, 4617, 2]);