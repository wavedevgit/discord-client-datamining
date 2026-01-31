// modules/rtc/SecureFramesDeeplinkExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var9 = true;
    var3.value = var9;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var6 = var3.bind(var0)(var5);
    var5 = {
        'kind': 'user',
        'id': '2024-09_secure_frames_deeplink',
        'label': 'Secure Frames Deeplinks'
    };
    var3 = {};
    var7 = false;
    var3.enabled = var7;
    var5.defaultConfig = var3;
    var8 = {
        'id': 1,
        'label': 'Enabled.'
    };
    var3 = 1;
    var7 = {};
    var7.enabled = var9;
    var8.config = var7;
    var7 = new Array(1);
    var7[0] = var8;
    var5.treatments = var7;
    var5 = var6.bind(var0)(var5);
    var _closure1_slot0 = var5;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/rtc/SecureFramesDeeplinkExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0.location;
        var3 = _closure1_slot0;
        var2 = var3.useExperiment;
        var1 = {};
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.useSecureFramesDeeplinkExperiment = var3;
    var1 = function arg0() {
        var0 = arg0;
        var0 = var0.location;
        var3 = _closure1_slot0;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var1.location = var0;
        var0 = {};
        var4 = true;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.getSecureFramesDeeplinkExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1589, 2]);