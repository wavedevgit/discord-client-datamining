// modules/quests/experiments/FetchQuestOnPostConnectionOpenExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var12 = true;
    var3.value = var12;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var8 = var4.bind(var0)(var3);
    var7 = var8.createExperiment;
    var6 = {
        'id': '2025-04_fetch_quests_on_postconnectionopen',
        'kind': 'user',
        'label': 'Fetch Quests ON_POST_CONNECTION_OPEN'
    };
    var3 = {};
    var10 = false;
    var3.enabled = var10;
    var6.defaultConfig = var3;
    var3 = {
        'id': 0,
        'label': 'Control'
    };
    var9 = {};
    var9.enabled = var10;
    var3.config = var9;
    var9 = new Array(2);
    var9[0] = var3;
    var10 = {
        'id': 1,
        'label': 'Fetch quests during ON_POST_CONNECTION_OPEN'
    };
    var3 = 1;
    var11 = {};
    var11.enabled = var12;
    var10.config = var11;
    var9[1] = var10;
    var6.treatments = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot0 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/quests/experiments/FetchQuestOnPostConnectionOpenExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Environment: var1
        _fun117333: for (var _fun117333_ip = 0;;) switch (_fun117333_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.location;
                var4 = var1.autoTrackExposure;
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun117333_ip = 22;
                    continue _fun117333
                }
            case 20:
                var4 = false;
            case 22:
                var3 = _closure1_slot0;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.enabled;
                return var0;
        }
    };
    var2.getIsEligibleForFetchQuestOnPostConnectionOpen = var3;
    var1 = function(arg0) { // Environment: var1
        _fun117334: for (var _fun117334_ip = 0;;) switch (_fun117334_ip) {
            case 0:
                var1 = arg0;
                var0 = var1.location;
                var4 = var1.autoTrackExposure;
                var1 = undefined;
                if (!(var4 === var1)) {
                    _fun117334_ip = 22;
                    continue _fun117334
                }
            case 20:
                var4 = false;
            case 22:
                var3 = _closure1_slot0;
                var2 = var3.useExperiment;
                var1 = {};
                var1.location = var0;
                var0 = {};
                var0.autoTrackExposure = var4;
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.enabled;
                return var0;
        }
    };
    var2.useIsEligibleForFetchQuestOnPostConnectionOpen = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3106, 2]);