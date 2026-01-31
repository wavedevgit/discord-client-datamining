// modules/slayer_storefront/experiments/SocialLayerStorefrontExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
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
    var7 = var4.bind(var0)(var3);
    var6 = var7.createApexExperiment;
    var3 = {
        'name': '2025-12-social-layer-storefront-user-experiment',
        'kind': 'user'
    };
    var8 = {
        'enabled': false,
        'wishlistRetargetingEnabled': false
    };
    var3.defaultConfig = var8;
    var8 = {};
    var9 = {
        'enabled': false,
        'wishlistRetargetingEnabled': false
    };
    var8[0] = var9;
    var9 = {
        'enabled': true,
        'wishlistRetargetingEnabled': false
    };
    var8[1] = var9;
    var9 = {
        'enabled': true,
        'wishlistRetargetingEnabled': true
    };
    var8[2] = var9;
    var3.variations = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/slayer_storefront/experiments/SocialLayerStorefrontExperiments.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = arg0;
        var3 = var0.location;
        var2 = _closure1_slot0;
        var1 = var2.useConfig;
        var0 = {};
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.useIsEligibleForSocialLayerStorefrontUserExperiment = var3;
    var3 = function arg0() {
        var0 = arg0;
        var3 = var0.location;
        var2 = _closure1_slot0;
        var1 = var2.getConfig;
        var0 = {};
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.getIsEligibleForSocialLayerStorefrontUserExperiment = var3;
    var1 = function arg0() {
        var0 = arg0;
        var3 = var0.location;
        var2 = _closure1_slot0;
        var1 = var2.useConfig;
        var0 = {};
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.wishlistRetargetingEnabled;
        return var0;
    };
    var2.useIsEligibleForSocialLayerStorefrontWishlistRetargeting = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);