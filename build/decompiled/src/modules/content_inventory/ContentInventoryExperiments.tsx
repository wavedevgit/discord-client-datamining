// modules/content_inventory/ContentInventoryExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var8 = require;
    var2 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var9;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var12 = true;
    var3.value = var12;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var9[var0];
    var0 = undefined;
    var3 = var8.bind(var0)(var3);
    var11 = var3.CommonTriggerPoints;
    var3 = 1;
    var4 = var9[var3];
    var6 = var8.bind(var0)(var4);
    var5 = var6.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2024-03_content_inventory_memberlist_and_ranker',
        'label': 'Enables the memberlist content feed'
    };
    var7 = {
        'enabled': true,
        'impressionCappingEnabled': true
    };
    var4.defaultConfig = var7;
    var10 = {
        'id': 4294967295,
        'label': 'Not in experiment'
    };
    var7 = {};
    var13 = false;
    var7.enabled = var13;
    var10.config = var7;
    var7 = new Array(2);
    var7[0] = var10;
    var10 = {
        'id': 0,
        'label': 'Holdout'
    };
    var14 = {};
    var14.enabled = var13;
    var10.config = var14;
    var7[1] = var10;
    var4.treatments = var7;
    var6 = var5.bind(var6)(var4);
    var _closure1_slot2 = var6;
    var4 = var9[var3];
    var7 = var8.bind(var0)(var4);
    var5 = var7.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2025-04_hotwheels_holdout_the_sequel',
        'label': 'Tracking a holdout hashed to member list experiment for data readouts'
    };
    var10 = var11.CONNECTION_OPEN;
    var4.commonTriggerPoint = var10;
    var10 = {};
    var4.defaultConfig = var10;
    var14 = {
        'id': 0,
        'label': 'Holdout'
    };
    var10 = {};
    var14.config = var10;
    var10 = new Array(2);
    var10[0] = var14;
    var14 = {
        'id': 1,
        'label': 'Shadow Treatment'
    };
    var15 = {};
    var14.config = var15;
    var10[1] = var14;
    var4.treatments = var10;
    var5 = var5.bind(var7)(var4);
    var4 = var9[var3];
    var10 = var8.bind(var0)(var4);
    var7 = var10.createExperiment;
    var4 = {
        'kind': 'user',
        'id': '2025-09_hotwheels_nvidia_boost',
        'label': 'Next iteration of the activity feed ranking model.'
    };
    var11 = var11.CONNECTION_OPEN;
    var4.commonTriggerPoint = var11;
    var11 = {};
    var4.defaultConfig = var11;
    var14 = {
        'id': 16,
        'label': 'ML model V3 - Nvidia small boost'
    };
    var11 = {};
    var14.config = var11;
    var11 = new Array(2);
    var11[0] = var14;
    var14 = {
        'id': 17,
        'label': 'ML model V3 - Nvidia big boost'
    };
    var15 = {};
    var14.config = var15;
    var11[1] = var14;
    var4.treatments = var11;
    var4 = var7.bind(var10)(var4);
    var3 = var9[var3];
    var10 = var8.bind(var0)(var3);
    var7 = var10.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2024-08_content_inventory_analytics_sampling',
        'label': 'Content Inventory Analytics Sampling'
    };
    var11 = {};
    var11.trackingEnabled = var12;
    var3.defaultConfig = var11;
    var12 = {
        'id': 1,
        'label': 'Tracking disabled'
    };
    var11 = {};
    var11.trackingEnabled = var13;
    var12.config = var11;
    var11 = new Array(1);
    var11[0] = var12;
    var3.treatments = var11;
    var3 = var7.bind(var10)(var3);
    var _closure1_slot3 = var3;
    var7 = 3;
    var7 = var9[var7];
    var9 = var8.bind(var0)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/content_inventory/ContentInventoryExperiments.tsx';
    var7 = var8.bind(var9)(var7);
    var2.MemberlistRankerExperiment = var6;
    var2.HotwheelsHoldoutTheSequel = var5;
    var2.HotwheelsActivityFeedNvidiaExperiment = var4;
    var4 = function arg0() {
        _fun95376: for (var _fun95376_ip = 0;;) switch (_fun95376_ip) {
            case 0:
                var4 = arg0;
                var5 = _closure1_slot2;
                var3 = var5.getCurrentConfig;
                var2 = {};
                var2.location = var4;
                var0 = {};
                var6 = true;
                var0.autoTrackExposure = var6;
                var0 = var3.bind(var5)(var2, var0);
                var0 = var0.enabled;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 2;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getICYMIEnabled;
                var1 = false;
                var1 = var2.bind(var3)(var4, var1);
                if (var0) {
                    _fun95376_ip = 84;
                    continue _fun95376
                }
            case 81:
                var0 = var1;
            case 84:
                return var0;
        }
    };
    var2.isEligibleForContentInventoryV1 = var4;
    var4 = function arg0() {
        _fun95377: for (var _fun95377_ip = 0;;) switch (_fun95377_ip) {
            case 0:
                var3 = _closure1_slot2;
                var2 = var3.getCurrentConfig;
                var1 = {};
                var0 = arg0;
                var1.location = var0;
                var0 = {};
                var4 = false;
                var0.autoTrackExposure = var4;
                var1 = var2.bind(var3)(var1, var0);
                var0 = var1.enabled;
                var2 = var1.impressionCappingEnabled;
                if (!var0) {
                    _fun95377_ip = 57;
                    continue _fun95377
                }
            case 51:
                var1 = true;
                var0 = var1 === var2;
            case 57:
                return var0;
        }
    };
    var2.isEligibleForImpressionCapping = var4;
    var2.ContentInventoryAnalyticsSamplingExperiment = var3;
    var3 = function arg0() {
        var3 = _closure1_slot3;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = arg0;
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.isEligibleForContentInventoryAnalyticsSampling = var3;
    var1 = function arg0() {
        var3 = _closure1_slot3;
        var2 = var3.useExperiment;
        var1 = {};
        var0 = arg0;
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useIsEligibleForContentInventoryAnalyticsSampling = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 3115, 8879, 2]);