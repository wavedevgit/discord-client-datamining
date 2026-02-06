// modules/media_engine/GoLiveSimulcastExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var8 = var4.bind(var0)(var1);
    var7 = var8.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2024-10_golive_simulcast',
        'label': 'GoLive Simulcast'
    };
    var3 = {
        'simulcastEnabled': false,
        'lqStreamBitrate': 0
    };
    var1.defaultConfig = var3;
    var10 = {
        'id': 1,
        'label': 'Simulcast'
    };
    var3 = 1;
    var9 = {
        'simulcastEnabled': true,
        'lqStreamBitrate': 1500000
    };
    var10.config = var9;
    var9 = new Array(2);
    var9[0] = var10;
    var10 = {
        'id': 2,
        'label': 'Simulcast, no pacer for LQ'
    };
    var11 = {
        'simulcastEnabled': true,
        'lqStreamBitrate': 1500000,
        'workerExperimentString': 'bandwidth_estimation/trendline-window-duration-3750,robust-estimator/worker-lq-no-pacer'
    };
    var10.config = var11;
    var9[1] = var10;
    var1.treatments = var9;
    var1 = var7.bind(var8)(var1);
    var _closure1_slot0 = var1;
    var1 = {};
    var7 = function() {
        var3 = _closure1_slot0;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = 'getConfig';
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.getConfig = var7;
    var7 = function() {
        var3 = _closure1_slot0;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = 'simulcastEnabled';
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.simulcastEnabled;
        return var0;
    };
    var1.simulcastEnabled = var7;
    var6 = function() {
        var3 = _closure1_slot0;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = 'workerExperimentString';
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.workerExperimentString;
        return var0;
    };
    var1.workerExperimentString = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_engine/GoLiveSimulcastExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3117, 2]);