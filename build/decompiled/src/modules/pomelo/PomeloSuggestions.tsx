// modules/pomelo/PomeloSuggestions.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var11 = true;
    var3.value = var11;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var8 = var4.bind(var0)(var3);
    var7 = var8.createExperiment;
    var6 = {
        'kind': 'user',
        'label': 'Pomelo Suggestions',
        'id': '2023-04_pomelo_suggestions'
    };
    var3 = {};
    var9 = false;
    var3.enabled = var9;
    var6.defaultConfig = var3;
    var10 = {
        'id': 1,
        'label': 'enabled'
    };
    var3 = 1;
    var9 = {};
    var9.enabled = var11;
    var10.config = var9;
    var9 = new Array(1);
    var9[0] = var10;
    var6.treatments = var9;
    var6 = var7.bind(var8)(var6);
    var _closure1_slot0 = var6;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/pomelo/PomeloSuggestions.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Environment: var1
        var3 = _closure1_slot0;
        var2 = var3.getCurrentConfig;
        var1 = {};
        var0 = '1907ae_1';
        var1.location = var0;
        var0 = {};
        var4 = false;
        var0.autoTrackExposure = var4;
        var0 = var2.bind(var3)(var1, var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.isInPomeloSuggestionsExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3106, 2]);