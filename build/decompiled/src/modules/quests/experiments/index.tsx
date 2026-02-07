// modules/quests/experiments/index.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var11 = require;
    var2 = exports;
    var12 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var17 = true;
    var1.value = var17;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var9 = {};
    var1 = 0;
    var9.TWENTY_MINUTES = var1;
    var0 = 'TWENTY_MINUTES';
    var9[var1] = var0;
    var10 = 1;
    var9.SEVENTY_FIVE_MINUTES = var10;
    var0 = 'SEVENTY_FIVE_MINUTES';
    var9[var10] = var0;
    var _closure1_slot0 = var9;
    var3 = var12[var1];
    var0 = undefined;
    var5 = var11.bind(var0)(var3);
    var4 = var5.createApexExperiment;
    var3 = {
        'name': '2025-11-quest-home-suggested-sort-rotation',
        'kind': 'user'
    };
    var18 = false;
    var6 = {
        'enabled': false,
        'variant': null
    };
    var3.defaultConfig = var6;
    var6 = {};
    var8 = {
        'enabled': false,
        'variant': null
    };
    var6[0] = var8;
    var8 = {};
    var8.enabled = var17;
    var13 = var9.TWENTY_MINUTES;
    var8.variant = var13;
    var6[1] = var8;
    var8 = {};
    var8.enabled = var17;
    var13 = var9.SEVENTY_FIVE_MINUTES;
    var8.variant = var13;
    var6[2] = var8;
    var3.variations = var6;
    var8 = var4.bind(var5)(var3);
    var _closure1_slot1 = var8;
    var3 = var12[var1];
    var5 = var11.bind(var0)(var3);
    var4 = var5.createApexExperiment;
    var3 = {
        'name': '2025-11-quest-home-takeover-client-rollout',
        'kind': 'user'
    };
    var6 = {};
    var6.enabled = var18;
    var3.defaultConfig = var6;
    var6 = {};
    var13 = {};
    var13.enabled = var17;
    var6[1] = var13;
    var3.variations = var6;
    var6 = var4.bind(var5)(var3);
    var5 = {};
    var5.LISTEN_FOR_ERROR_ONLY = var1;
    var3 = 'LISTEN_FOR_ERROR_ONLY';
    var5[var1] = var3;
    var5.LISTEN_AND_RETRY_LOADING = var10;
    var3 = 'LISTEN_AND_RETRY_LOADING';
    var5[var10] = var3;
    var3 = var12[var1];
    var13 = var11.bind(var0)(var3);
    var4 = var13.createApexExperiment;
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
    var15.enabled = var17;
    var16 = var5.LISTEN_FOR_ERROR_ONLY;
    var15.variant = var16;
    var14[1] = var15;
    var15 = {};
    var15.enabled = var17;
    var16 = var5.LISTEN_AND_RETRY_LOADING;
    var15.variant = var16;
    var14[2] = var15;
    var3.variations = var14;
    var4 = var4.bind(var13)(var3);
    var3 = var12[var1];
    var14 = var11.bind(var0)(var3);
    var13 = var14.createApexExperiment;
    var3 = {
        'name': '2025-11-video-end-card-v2',
        'kind': 'user'
    };
    var15 = {};
    var15.enabled = var18;
    var3.defaultConfig = var15;
    var15 = {};
    var16 = {};
    var16.enabled = var17;
    var15[1] = var16;
    var3.variations = var15;
    var3 = var13.bind(var14)(var3);
    var1 = var12[var1];
    var14 = var11.bind(var0)(var1);
    var13 = var14.createApexExperiment;
    var1 = {
        'name': '2026-01-business-profile-linking',
        'kind': 'user'
    };
    var15 = {};
    var15.enabled = var18;
    var1.defaultConfig = var15;
    var15 = {};
    var16 = {};
    var16.enabled = var18;
    var15[0] = var16;
    var16 = {};
    var16.enabled = var17;
    var15[1] = var16;
    var1.variations = var15;
    var1 = var13.bind(var14)(var1);
    var10 = var12[var10];
    var12 = var11.bind(var0)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/quests/experiments/index.tsx';
    var10 = var11.bind(var12)(var10);
    var2.QuestHomeSuggestedSortRotationExperimentVariant = var9;
    var2.QuestHomeSuggestedSortRotationExperiment = var8;
    var7 = function(arg0) { // Environment: var7
        _fun48119: for (var _fun48119_ip = 0;;) switch (_fun48119_ip) {
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
                    _fun48119_ip = 99;
                    continue _fun48119
                }
            case 51:
                var0 = _closure1_slot0;
                var0 = var0.SEVENTY_FIVE_MINUTES;
                if (!(var1 !== var0)) {
                    _fun48119_ip = 80;
                    continue _fun48119
                }
            case 65:
                var0 = {};
                var0.enabled = var2;
                var1 = 0;
                var0.minutes = var1;
                _fun48119_ip = 97;
                continue _fun48119;
            case 80:
                var1 = {};
                var1.enabled = var2;
                var3 = 75;
                var1.minutes = var3;
                var0 = var1;
            case 97:
                _fun48119_ip = 116;
                continue _fun48119;
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
    var2.isQuestHomeSuggestedSortRotationExperimentEnabled = var7;
    var2.QuestHomeTakeoverRolloutExperiment = var6;
    var2.QuestBarListenForSourceErrorExperimentVariant = var5;
    var2.QuestBarListenForSourceErrorExperiment = var4;
    var2.VideoEndCardV2Experiment = var3;
    var2.BusinessProfileLinkingExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);