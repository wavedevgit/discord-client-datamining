// modules/media_engine/AudioShortCircuitExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var7 = var4.bind(var0)(var1);
    var6 = var7.createExperiment;
    var1 = {
        'kind': 'user',
        'id': '2024-02_audio_short_circuit',
        'label': 'Audio processing short circuiting'
    };
    var3 = {
        'muteBeforeProcessing': false,
        'pttBeforeProcessing': false,
        'skipEncode': false
    };
    var1.defaultConfig = var3;
    var9 = {
        'id': 1,
        'label': 'Mute before processing'
    };
    var3 = 1;
    var8 = {
        'muteBeforeProcessing': true,
        'pttBeforeProcessing': false,
        'skipEncode': false
    };
    var9.config = var8;
    var8 = new Array(7);
    var8[0] = var9;
    var9 = {
        'id': 2,
        'label': 'PTT before processing'
    };
    var10 = {
        'muteBeforeProcessing': false,
        'pttBeforeProcessing': true,
        'skipEncode': false
    };
    var9.config = var10;
    var8[1] = var9;
    var9 = {
        'id': 3,
        'label': 'Mute + PTT before processing'
    };
    var10 = {
        'muteBeforeProcessing': true,
        'pttBeforeProcessing': true,
        'skipEncode': false
    };
    var9.config = var10;
    var8[2] = var9;
    var9 = {
        'id': 4,
        'label': 'Skip encode'
    };
    var10 = {
        'muteBeforeProcessing': false,
        'pttBeforeProcessing': false,
        'skipEncode': true
    };
    var9.config = var10;
    var8[3] = var9;
    var9 = {
        'id': 5,
        'label': 'Mute before processing, skip encode'
    };
    var10 = {
        'muteBeforeProcessing': true,
        'pttBeforeProcessing': false,
        'skipEncode': true
    };
    var9.config = var10;
    var8[4] = var9;
    var9 = {
        'id': 6,
        'label': 'PTT before processing, skip encode'
    };
    var10 = {
        'muteBeforeProcessing': false,
        'pttBeforeProcessing': true,
        'skipEncode': true
    };
    var9.config = var10;
    var8[5] = var9;
    var9 = {
        'id': 7,
        'label': 'Mute + PTT before processing, skip encode'
    };
    var10 = {
        'muteBeforeProcessing': true,
        'pttBeforeProcessing': true,
        'skipEncode': true
    };
    var9.config = var10;
    var8[6] = var9;
    var1.treatments = var8;
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_engine/AudioShortCircuitExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3106, 2]);