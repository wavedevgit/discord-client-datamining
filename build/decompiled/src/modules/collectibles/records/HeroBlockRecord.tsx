// modules/collectibles/records/HeroBlockRecord.tsx
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
    var1 = function() { // Environment: var1
        var4 = function arg0() {
            _fun42440: for (var _fun42440_ip = 0;;) switch (_fun42440_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var5 = _closure1_slot2;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var2, var4);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var4 = 2;
                    var4 = var6[var4];
                    var4 = var5.bind(var0)(var4);
                    var4 = var4.ShopBlockType;
                    var4 = var4.HERO;
                    var2.type = var4;
                    var4 = var1.category_sku_id;
                    var2.categorySkuId = var4;
                    var4 = var1.name;
                    var2.name = var4;
                    var5 = var1.summary;
                    var4 = var5.trim;
                    var4 = var4.bind(var5)();
                    var2.summary = var4;
                    var4 = var1.category_store_listing_id;
                    var2.categoryStoreListingId = var4;
                    var4 = var1.title;
                    var2.title = var4;
                    var4 = var1.ranked_sku_ids;
                    var2.rankedSkuIds = var4;
                    var5 = var1.unpublished_at;
                    var4 = null;
                    var5 = var4 != var5;
                    if (!var5) {
                        _fun42440_ip = 195;
                        continue _fun42440
                    }
                case 161:
                    var5 = global;
                    var7 = var5.Date;
                    var10 = var1.unpublished_at;
                    var6 = var7.prototype;
                    var6 = Object.create(var6, {
                        constructor: {
                            value: var7
                        }
                    });
                    var11 = var6;
                    var5 = new var11[var7](var10, var9);
                    var4 = var5 instanceof Object ? var5 : var6;
                case 195:
                    var2.unpublishedAt = var4;
                    var4 = var1.banner_text_color;
                    var2.bannerTextColor = var4;
                    var4 = var1.mobile_title;
                    var2.mobileTitle = var4;
                    var4 = var1.mobile_summary;
                    var2.mobileSummary = var4;
                    var4 = var1.mobile_products_title;
                    var2.mobileProductsTitle = var4;
                    var4 = var1.hero_banner_url;
                    var2.heroBannerUrl = var4;
                    var4 = var1.hero_banner_animated_url;
                    var2.heroBannerAnimatedUrl = var4;
                    var4 = var1.hero_rive_url;
                    var2.heroRiveUrl = var4;
                    var4 = var1.hero_logo_url;
                    var2.heroLogoUrl = var4;
                    var4 = var1.mobile_hero_url;
                    var2.mobileHeroUrl = var4;
                    var4 = var1.mobile_hero_animated_url;
                    var2.mobileHeroAnimatedUrl = var4;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 3;
                    var6 = var5[var3];
                    var8 = var4.bind(var0)(var6);
                    var7 = var8.getAssetDisplayConfig;
                    var6 = var1.banner_display_config;
                    var6 = var7.bind(var8)(var6);
                    var2.bannerDisplayConfig = var6;
                    var3 = var5[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.getAssetDisplayConfig;
                    var1 = var1.logo_display_config;
                    var1 = var3.bind(var4)(var1);
                    var2.logoDisplayConfig = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var0 = {};
        var2 = 'fromServer';
        var0.key = var2;
        var1 = function arg0() {
            var2 = _closure2_slot0;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = arg0;
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
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
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/records/HeroBlockRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.HeroBlockRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3275, 4563, 2]);