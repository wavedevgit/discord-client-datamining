// modules/premium/experiments/ShopSKUsInGiftFlowExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var4 = 0;
    var1 = var6[var4];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var9 = var1.CommonTriggerPoints;
    var3 = {};
    var3.NONE = var4;
    var1 = 'NONE';
    var3[var4] = var1;
    var1 = 1;
    var3.POPULAR = var1;
    var4 = 'POPULAR';
    var3[var1] = var4;
    var4 = 2;
    var3.RECENT = var4;
    var7 = 'RECENT';
    var3[var4] = var7;
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2024-10_shop_skus_in_gift_flow',
        'label': 'Gift Collectibles in DM'
    };
    var10 = {
        'enabled': false,
        'showBothNitroSkusInCategorySelect': false
    };
    var11 = var3.NONE;
    var10.giftRecommendationAlgorithm = var11;
    var1.defaultConfig = var10;
    var9 = var9.DM_GDM_LIST_RENDER;
    var1.commonTriggerPoint = var9;
    var10 = {
        'id': 1,
        'label': 'Gift Collectibles in DM, with existing Nitro flow, showing popular items'
    };
    var9 = {
        'enabled': true,
        'showBothNitroSkusInCategorySelect': false
    };
    var11 = var3.POPULAR;
    var9.giftRecommendationAlgorithm = var11;
    var10.config = var9;
    var9 = new Array(4);
    var9[0] = var10;
    var10 = {
        'id': 2,
        'label': 'Gift Collectibles in DM, with existing Nitro flow, showing recent items'
    };
    var11 = {
        'enabled': true,
        'showBothNitroSkusInCategorySelect': false
    };
    var12 = var3.RECENT;
    var11.giftRecommendationAlgorithm = var12;
    var10.config = var11;
    var9[1] = var10;
    var10 = {
        'id': 3,
        'label': 'Gift Collectibles in DM, select Nitro SKU from category, showing popular items'
    };
    var11 = {
        'enabled': true,
        'showBothNitroSkusInCategorySelect': true
    };
    var12 = var3.POPULAR;
    var11.giftRecommendationAlgorithm = var12;
    var10.config = var11;
    var9[2] = var10;
    var10 = {
        'id': 4,
        'label': 'Gift Collectibles in DM, select Nitro SKU from category, showing recent items'
    };
    var11 = {
        'enabled': true,
        'showBothNitroSkusInCategorySelect': true
    };
    var12 = var3.RECENT;
    var11.giftRecommendationAlgorithm = var12;
    var10.config = var11;
    var9[3] = var10;
    var1.treatments = var9;
    var1 = var7.bind(var8)(var1);
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/experiments/ShopSKUsInGiftFlowExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.GiftRecommendationAlgorithm = var3;
    var2.ShopSKUsInGiftFlowExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3076, 2]);