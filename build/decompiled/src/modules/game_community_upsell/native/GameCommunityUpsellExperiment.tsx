// modules/game_community_upsell/native/GameCommunityUpsellExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var2 = exports;
    var8 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var11 = true;
    var1.value = var11;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = 0;
    var3 = var8[var1];
    var0 = undefined;
    var6 = var7.bind(var0)(var3);
    var4 = var6.createApexExperiment;
    var3 = {
        'name': '2025-11-game-community-upsell',
        'kind': 'user'
    };
    var5 = '2025-11-game-community-upsell';
    var9 = {};
    var10 = false;
    var9.enabled = var10;
    var3.defaultConfig = var9;
    var9 = {};
    var10 = {};
    var10.enabled = var11;
    var9[1] = var10;
    var3.variations = var9;
    var3 = var4.bind(var6)(var3);
    var1 = var8[var1];
    var9 = var7.bind(var0)(var1);
    var6 = var9.createApexExperiment;
    var1 = {
        'name': '2026-02-game-community-upsell-multi',
        'kind': 'user'
    };
    var4 = '2026-02-game-community-upsell-multi';
    var10 = {
        'enabled': false,
        'visualVariant': 'one-column'
    };
    var1.defaultConfig = var10;
    var10 = {};
    var11 = {
        'enabled': true,
        'visualVariant': 'one-column'
    };
    var10[1] = var11;
    var11 = {
        'enabled': true,
        'visualVariant': 'two-column'
    };
    var10[2] = var11;
    var1.variations = var10;
    var1 = var6.bind(var9)(var1);
    var6 = 1;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/game_community_upsell/native/GameCommunityUpsellExperiment.tsx';
    var6 = var7.bind(var8)(var6);
    var2.GAME_COMMUNITY_UPSELL_EXPERIMENT = var5;
    var2.GAME_COMMUNITY_UPSELL_MULTI_EXPERIMENT = var4;
    var2.GameCommunityUpsellExperiment = var3;
    var2.GameCommunityUpsellMultiExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);