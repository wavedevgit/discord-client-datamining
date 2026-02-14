// modules/quests/experiments/index.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var14 = true;
    var1.value = var14;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = 0;
    var3 = var9[var1];
    var0 = undefined;
    var5 = var8.bind(var0)(var3);
    var4 = var5.createApexExperiment;
    var3 = {
        'name': '2025-11-quest-home-takeover-client-rollout',
        'kind': 'user'
    };
    var6 = {};
    var15 = false;
    var6.enabled = var15;
    var3.defaultConfig = var6;
    var6 = {};
    var7 = {};
    var7.enabled = var14;
    var6[1] = var7;
    var3.variations = var6;
    var6 = var4.bind(var5)(var3);
    var5 = {};
    var5.LISTEN_FOR_ERROR_ONLY = var1;
    var3 = 'LISTEN_FOR_ERROR_ONLY';
    var5[var1] = var3;
    var7 = 1;
    var5.LISTEN_AND_RETRY_LOADING = var7;
    var3 = 'LISTEN_AND_RETRY_LOADING';
    var5[var7] = var3;
    var3 = var9[var1];
    var10 = var8.bind(var0)(var3);
    var4 = var10.createApexExperiment;
    var3 = {
        'name': '2025-11-quest-bar-listen-for-source-error',
        'kind': 'user'
    };
    var11 = {
        'enabled': false,
        'variant': null
    };
    var3.defaultConfig = var11;
    var11 = {};
    var12 = {
        'enabled': false,
        'variant': null
    };
    var11[0] = var12;
    var12 = {};
    var12.enabled = var14;
    var13 = var5.LISTEN_FOR_ERROR_ONLY;
    var12.variant = var13;
    var11[1] = var12;
    var12 = {};
    var12.enabled = var14;
    var13 = var5.LISTEN_AND_RETRY_LOADING;
    var12.variant = var13;
    var11[2] = var12;
    var3.variations = var11;
    var4 = var4.bind(var10)(var3);
    var3 = var9[var1];
    var11 = var8.bind(var0)(var3);
    var10 = var11.createApexExperiment;
    var3 = {
        'name': '2025-11-video-end-card-v2',
        'kind': 'user'
    };
    var12 = {};
    var12.enabled = var15;
    var3.defaultConfig = var12;
    var12 = {};
    var13 = {};
    var13.enabled = var14;
    var12[1] = var13;
    var3.variations = var12;
    var3 = var10.bind(var11)(var3);
    var1 = var9[var1];
    var11 = var8.bind(var0)(var1);
    var10 = var11.createApexExperiment;
    var1 = {
        'name': '2026-02-fetch-quest-home-takeover-on-connection-open',
        'kind': 'user'
    };
    var12 = {};
    var12.enabled = var15;
    var1.defaultConfig = var12;
    var12 = {};
    var13 = {};
    var13.enabled = var15;
    var12[0] = var13;
    var13 = {};
    var13.enabled = var14;
    var12[1] = var13;
    var1.variations = var12;
    var1 = var10.bind(var11)(var1);
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/quests/experiments/index.tsx';
    var7 = var8.bind(var9)(var7);
    var2.QuestHomeHeroRolloutExperiment = var6;
    var2.QuestBarListenForSourceErrorExperimentVariant = var5;
    var2.QuestBarListenForSourceErrorExperiment = var4;
    var2.VideoEndCardV2Experiment = var3;
    var2.FetchQuestHomeHeroOnConnectionOpenExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);