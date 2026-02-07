// modules/collectibles/records/FeaturedCategorySubblockRecord.tsx
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
            _fun42589: for (var _fun42589_ip = 0;;) switch (_fun42589_ip) {
                case 0:
                    var1 = arg0;
                    var2 = this;
                    var5 = _closure1_slot2;
                    var4 = _closure2_slot0;
                    var0 = undefined;
                    var4 = var5.bind(var0)(var2, var4);
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 2;
                    var3 = var5[var3];
                    var3 = var4.bind(var0)(var3);
                    var3 = var3.FeaturedSubblockType;
                    var3 = var3.CATEGORY;
                    var2.type = var3;
                    var3 = var1.category_store_listing_id;
                    var2.categoryStoreListingId = var3;
                    var3 = var1.name;
                    var2.name = var3;
                    var4 = var1.unpublished_at;
                    var3 = null;
                    var4 = var3 != var4;
                    if (!var4) {
                        _fun42589_ip = 138;
                        continue _fun42589
                    }
                case 104:
                    var4 = global;
                    var6 = var4.Date;
                    var8 = var1.unpublished_at;
                    var5 = var6.prototype;
                    var5 = Object.create(var5, {
                        constructor: {
                            value: var6
                        }
                    });
                    var9 = var5;
                    var4 = new var9[var6](var8, var7);
                    var3 = var4 instanceof Object ? var4 : var5;
                case 138:
                    var2.unpublishedAt = var3;
                    var3 = var1.body_text;
                    var2.bodyText = var3;
                    var3 = var1.banner_text_color;
                    var2.bannerTextColor = var3;
                    var3 = var1.banner_url;
                    var2.bannerUrl = var3;
                    var1 = var1.asset_url;
                    var2.assetUrl = var1;
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
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/collectibles/records/FeaturedCategorySubblockRecord.tsx';
    var3 = var4.bind(var5)(var3);
    var2.FeaturedCategorySubblockRecord = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 4637, 2]);