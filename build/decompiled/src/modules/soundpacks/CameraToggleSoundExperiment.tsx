// modules/soundpacks/CameraToggleSoundExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var12 = true;
    var3.value = var12;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var8 = var5.bind(var0)(var3);
    var7 = var8.createExperiment;
    var3 = {
        'kind': 'user',
        'id': '2025-07_camera_toggle_sound',
        'label': 'Camera Toggle Sound'
    };
    var4 = {};
    var10 = false;
    var4.enabled = var10;
    var3.defaultConfig = var4;
    var4 = {
        'id': 0,
        'label': 'Sound does not play when camera is toggled'
    };
    var9 = {};
    var9.enabled = var10;
    var4.config = var9;
    var9 = new Array(2);
    var9[0] = var4;
    var10 = {
        'id': 1,
        'label': 'Sound plays when camera is toggled'
    };
    var4 = 1;
    var11 = {};
    var11.enabled = var12;
    var10.config = var11;
    var9[1] = var10;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot0 = var3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/soundpacks/CameraToggleSoundExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var1 = function() {
        var3 = _closure1_slot0;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = 'soundpacks';
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.isCameraToggleSoundEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3106, 2]);