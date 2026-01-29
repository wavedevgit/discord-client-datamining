// modules/media_engine/AppleMicrophoneModeExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var5 = var0.Object;
    var3 = var5.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var5)(var2, var0, var1);
    var0 = 0;
    var3 = var4[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var3 = var1.bind(var0)(var3);
    var1 = {
        'kind': 'user',
        'name': '2025-09-disable-krisp-with-apple-microphone-modes'
    };
    var5 = {};
    var6 = new Array(0);
    var5.disabledModes = var6;
    var1.defaultConfig = var5;
    var5 = {};
    var6 = {};
    var7 = ['voice_isolation'];
    var6.disabledModes = var7;
    var5[1] = var6;
    var6 = {};
    var7 = ['voice_isolation', 'wide_spectrum'];
    var6.disabledModes = var7;
    var5[2] = var6;
    var1.variations = var5;
    var1 = var3.bind(var0)(var1);
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_engine/AppleMicrophoneModeExperiments.tsx';
    var3 = var4.bind(var5)(var3);
    var2.DisableKrispWithAppleMicrophoneModesExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1302, 2]);