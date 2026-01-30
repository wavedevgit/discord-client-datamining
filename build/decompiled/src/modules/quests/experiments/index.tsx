// modules/quests/experiments/index.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var12 = require;
    var2 = exports;
    var13 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var18 = true;
    var1.value = var18;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var10 = {};
    var1 = 0;
    var10.TWENTY_MINUTES = var1;
    var0 = 'TWENTY_MINUTES';
    var10[var1] = var0;
    var11 = 1;
    var10.SEVENTY_FIVE_MINUTES = var11;
    var0 = 'SEVENTY_FIVE_MINUTES';
    var10[var11] = var0;
    var _closure1_slot0 = var10;
    var3 = var13[var1];
    var0 = undefined;
    var5 = var12.bind(var0)(var3);
    var4 = var5.createApexExperiment;
    var3 = {
        'name': '2025-11-quest-home-suggested-sort-rotation',
        'kind': 'user'
    };
    var19 = false;
    var6 = {
        'enabled': false,
        'variant': null
    };
    var3.defaultConfig = var6;
    var6 = {};
    var7 = {
        'enabled': false,
        'variant': null
    };
    var6[0] = var7;
    var7 = {};
    var7.enabled = var18;
    var9 = var10.TWENTY_MINUTES;
    var7.variant = var9;
    var6[1] = var7;
    var7 = {};
    var7.enabled = var18;
    var9 = var10.SEVENTY_FIVE_MINUTES;
    var7.variant = var9;
    var6[2] = var7;
    var3.variations = var6;
    var9 = var4.bind(var5)(var3);
    var _closure1_slot1 = var9;
    var3 = var13[var1];
    var5 = var12.bind(var0)(var3);
    var4 = var5.createApexExperiment;
    var3 = {
        'name': '2025-11-quest-home-takeover-client-rollout',
        'kind': 'user'
    };
    var6 = {};
    var6.enabled = var19;
    var3.defaultConfig = var6;
    var6 = {};
    var7 = {};
    var7.enabled = var18;
    var6[1] = var7;
    var3.variations = var6;
    var7 = var4.bind(var5)(var3);
    var6 = {};
    var6.LISTEN_FOR_ERROR_ONLY = var1;
    var3 = 'LISTEN_FOR_ERROR_ONLY';
    var6[var1] = var3;
    var6.LISTEN_AND_RETRY_LOADING = var11;
    var3 = 'LISTEN_AND_RETRY_LOADING';
    var6[var11] = var3;
    var3 = var13[var1];
    var5 = var12.bind(var0)(var3);
    var4 = var5.createApexExperiment;
    var3 = {
        'name': '2025-11-quest-bar-listen-for-source-error',
        'kind': 'user'
    };
    var14 = {
        'enabled': false,
        'variant': null
    };
    var3.defaultConfig = var14;
    var14 = {};
    var15 = {
        'enabled': false,
        'variant': null
    };
    var14[0] = var15;
    var15 = {};
    var15.enabled = var18;
    var16 = var6.LISTEN_FOR_ERROR_ONLY;
    var15.variant = var16;
    var14[1] = var15;
    var15 = {};
    var15.enabled = var18;
    var16 = var6.LISTEN_AND_RETRY_LOADING;
    var15.variant = var16;
    var14[2] = var15;
    var3.variations = var14;
    var5 = var4.bind(var5)(var3);
    var3 = var13[var1];
    var14 = var12.bind(var0)(var3);
    var4 = var14.createApexExperiment;
    var3 = {
        'name': '2025-11-video-end-card-v2',
        'kind': 'user'
    };
    var15 = {};
    var15.enabled = var19;
    var3.defaultConfig = var15;
    var15 = {};
    var16 = {};
    var16.enabled = var18;
    var15[1] = var16;
    var3.variations = var15;
    var4 = var4.bind(var14)(var3);
    var3 = var13[var1];
    var15 = var12.bind(var0)(var3);
    var14 = var15.createApexExperiment;
    var3 = {
        'name': '2025-12-quest-cta-refactor-rollout',
        'kind': 'user'
    };
    var16 = {};
    var16.enabled = var19;
    var3.defaultConfig = var16;
    var16 = {};
    var17 = {};
    var17.enabled = var18;
    var16[1] = var17;
    var3.variations = var16;
    var3 = var14.bind(var15)(var3);
    var1 = var13[var1];
    var15 = var12.bind(var0)(var1);
    var14 = var15.createApexExperiment;
    var1 = {
        'name': '2026-01-business-profile-linking',
        'kind': 'user'
    };
    var16 = {};
    var16.enabled = var19;
    var1.defaultConfig = var16;
    var16 = {};
    var17 = {};
    var17.enabled = var19;
    var16[0] = var17;
    var17 = {};
    var17.enabled = var18;
    var16[1] = var17;
    var1.variations = var16;
    var1 = var14.bind(var15)(var1);
    var11 = var13[var11];
    var13 = var12.bind(var0)(var11);
    var12 = var13.fileFinishedImporting;
    var11 = 'modules/quests/experiments/index.tsx';
    var11 = var12.bind(var13)(var11);
    var2.QuestHomeSuggestedSortRotationExperimentVariant = var10;
    var2.QuestHomeSuggestedSortRotationExperiment = var9;
    var8 = function(arg0) { // Environment: var8
        _fun47422: for (var _fun47422_ip = 0;;) switch (_fun47422_ip) {
            case 0:
                var3 = _closure1_slot1;
                var2 = var3.getConfig;
                var1 = {};
                var4 = arg0;
                var1.location = var4;
                var1 = var2.bind(var3)(var1);
                var2 = var1.enabled;
                var1 = var1.variant;
                var3 = _closure1_slot0;
                var3 = var3.TWENTY_MINUTES;
                if (!(var1 !== var3)) {
                    _fun47422_ip = 99;
                    continue _fun47422
                }
            case 51:
                var0 = _closure1_slot0;
                var0 = var0.SEVENTY_FIVE_MINUTES;
                if (!(var1 !== var0)) {
                    _fun47422_ip = 80;
                    continue _fun47422
                }
            case 65:
                var0 = {};
                var0.enabled = var2;
                var1 = 0;
                var0.minutes = var1;
                _fun47422_ip = 97;
                continue _fun47422;
            case 80:
                var1 = {};
                var1.enabled = var2;
                var3 = 75;
                var1.minutes = var3;
                var0 = var1;
            case 97:
                _fun47422_ip = 116;
                continue _fun47422;
            case 99:
                var1 = {};
                var1.enabled = var2;
                var2 = 20;
                var1.minutes = var2;
                var0 = var1;
            case 116:
                return var0;
        }
    };
    var2.isQuestHomeSuggestedSortRotationExperimentEnabled = var8;
    var2.QuestHomeTakeoverRolloutExperiment = var7;
    var2.QuestBarListenForSourceErrorExperimentVariant = var6;
    var2.QuestBarListenForSourceErrorExperiment = var5;
    var2.VideoEndCardV2Experiment = var4;
    var2.QuestCtaRefactorRolloutExperiment = var3;
    var2.BusinessProfileLinkingExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);