// modules/media_uploads/experiments/FileValidationExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
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
        'kind': 'user',
        'id': '2025-08_detected_file_size',
        'label': 'Detected File Size'
    };
    var3 = {};
    var10 = false;
    var3.useDetectedFileSize = var10;
    var6.defaultConfig = var3;
    var3 = {
        'id': 1,
        'label': 'Control - Use File.size directly'
    };
    var9 = {};
    var9.useDetectedFileSize = var10;
    var3.config = var9;
    var9 = new Array(2);
    var9[0] = var3;
    var10 = {
        'id': 2,
        'label': 'Treatment - Use detected file size with fallback'
    };
    var3 = 2;
    var11 = {};
    var11.useDetectedFileSize = var12;
    var10.config = var11;
    var9[1] = var10;
    var6.treatments = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot2 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_uploads/experiments/FileValidationExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0() {
        var0 = arg0;
        var0 = var0.location;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 1;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var6 = var2.MediaInfraHoldoutExperimentH22025;
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
    var2.getDetectedFileSizeExperimentConfig = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3076, 1588, 2]);