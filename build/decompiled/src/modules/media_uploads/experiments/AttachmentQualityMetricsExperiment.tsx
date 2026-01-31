// modules/media_uploads/experiments/AttachmentQualityMetricsExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var8 = var5.bind(var0)(var3);
    var7 = var8.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2025-06_attachment_quality_metrics',
        'label': 'Visual quality metrics for attachments'
    };
    var4 = {
        'enableQualityMetrics': false,
        'enableOriginDetection': false
    };
    var3.defaultConfig = var4;
    var4 = {
        'id': 1,
        'label': 'Control'
    };
    var9 = {
        'enableQualityMetrics': false,
        'enableOriginDetection': false
    };
    var4.config = var9;
    var9 = new Array(2);
    var9[0] = var4;
    var10 = {
        'id': 2,
        'label': 'Full Metrics'
    };
    var4 = 2;
    var11 = {
        'enableQualityMetrics': true,
        'enableOriginDetection': true
    };
    var10.config = var11;
    var9[1] = var10;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot2 = var3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_uploads/experiments/AttachmentQualityMetricsExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.AttachmentQualityMetricsExperiment = var3;
    var1 = function arg0() {
        var0 = arg0;
        var0 = var0.location;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var6 = var2.MediaInfraHoldoutExperimentH12025;
        var5 = var6.getCurrentConfig;
        var3 = {};
        var3.location = var0;
        var2 = {};
        var4 = true;
        var2.autoTrackExposure = var4;
        var2 = var5.bind(var6)(var3, var2);
        var5 = var2.isInHoldout;
        var3 = _closure1_slot2;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var1.location = var0;
        var0 = {};
        var0.disable = var5;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useAttachmentQualityMetricsExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3074, 4080, 2]);