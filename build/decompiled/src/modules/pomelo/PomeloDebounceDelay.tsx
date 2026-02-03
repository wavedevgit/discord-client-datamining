// modules/pomelo/PomeloDebounceDelay.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
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
        'label': 'Pomelo Debounce Delay',
        'id': '2023-03_pomelo_debounce_delay'
    };
    var4 = {};
    var11 = 600;
    var4.delay = var11;
    var3.defaultConfig = var4;
    var10 = {
        'id': 1,
        'label': '600ms'
    };
    var4 = 1;
    var9 = {};
    var9.delay = var11;
    var10.config = var9;
    var9 = new Array(5);
    var9[0] = var10;
    var10 = {
        'id': 2,
        'label': '700ms'
    };
    var11 = {};
    var12 = 700;
    var11.delay = var12;
    var10.config = var11;
    var9[1] = var10;
    var10 = {
        'id': 3,
        'label': '800ms'
    };
    var11 = {};
    var12 = 800;
    var11.delay = var12;
    var10.config = var11;
    var9[2] = var10;
    var10 = {
        'id': 4,
        'label': '900ms'
    };
    var11 = {};
    var12 = 900;
    var11.delay = var12;
    var10.config = var11;
    var9[3] = var10;
    var10 = {
        'id': 5,
        'label': '1000ms'
    };
    var11 = {};
    var12 = 1000;
    var11.delay = var12;
    var10.config = var11;
    var9[4] = var10;
    var3.treatments = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot0 = var3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/pomelo/PomeloDebounceDelay.tsx';
    var4 = var5.bind(var6)(var4);
    var2.experiment = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot0;
        var2 = var3.useExperiment;
        var1 = {};
        var0 = '52560d_1';
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.delay;
        return var0;
    };
    var2.usePomeloDebounceDelay = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3106, 2]);