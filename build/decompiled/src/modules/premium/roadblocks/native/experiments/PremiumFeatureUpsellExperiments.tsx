// modules/premium/roadblocks/native/experiments/PremiumFeatureUpsellExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var11 = true;
    var1.value = var11;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = 0;
    var3 = var6[var1];
    var0 = undefined;
    var8 = var5.bind(var0)(var3);
    var7 = var8.createExperiment;
    var3 = {
        'id': '2024-07_premium_app_icons_mobile',
        'label': 'Premium App Icons Mobile Upsell',
        'kind': 'user'
    };
    var4 = {};
    var9 = false;
    var4.enabled = var9;
    var3.defaultConfig = var4;
    var10 = {
        'id': 1,
        'label': 'Enabled'
    };
    var4 = 1;
    var9 = {};
    var9.enabled = var11;
    var10.config = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var1 = var6[var1];
    var8 = var5.bind(var0)(var1);
    var7 = var8.createExperiment;
    var1 = {
        'id': '2024-05_premium_file_upload_upsell_mobile',
        'label': 'Premium File Upload Upsell iOS',
        'kind': 'user'
    };
    var9 = {
        'enabled': false,
        'showInlineUpsell': false
    };
    var1.defaultConfig = var9;
    var10 = {
        'id': 1,
        'label': 'Roadblock with inline upsell'
    };
    var9 = {
        'enabled': true,
        'showInlineUpsell': true
    };
    var10.config = var9;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = {
        'id': 2,
        'label': 'Roadblock without inline upsell'
    };
    var11 = {
        'enabled': true,
        'showInlineUpsell': true
    };
    var10.config = var11;
    var9[1] = var10;
    var1.treatments = var9;
    var1 = var7.bind(var8)(var1);
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/roadblocks/native/experiments/PremiumFeatureUpsellExperiments.tsx';
    var4 = var5.bind(var6)(var4);
    var2.PremiumAppIconsUpsellExperiment = var3;
    var2.PremiumFileUploadUpsellExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3117, 2]);