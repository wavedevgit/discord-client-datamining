// modules/search/experiments/SearchPhrasesExperiment.tsx
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
    var5 = var1.bind(var0)(var3);
    var1 = {
        'kind': 'user',
        'id': '2025-08_search_phrase_matching',
        'label': 'Search Phrase Matching'
    };
    var3 = {
        'enabled': false,
        'quotes': false,
        'brackets': false
    };
    var1.defaultConfig = var3;
    var7 = {
        'id': 1,
        'label': 'Enabled.'
    };
    var3 = 1;
    var6 = {
        'enabled': true,
        'quotes': true,
        'brackets': false
    };
    var7.config = var6;
    var6 = new Array(3);
    var6[0] = var7;
    var7 = {
        'id': 2,
        'label': 'Tokenization only; no quotes'
    };
    var8 = {
        'enabled': true,
        'quotes': false,
        'brackets': false
    };
    var7.config = var8;
    var6[1] = var7;
    var7 = {
        'id': 3,
        'label': '[Square brackets] instead of quotes'
    };
    var8 = {
        'enabled': true,
        'quotes': false,
        'brackets': true
    };
    var7.config = var8;
    var6[2] = var7;
    var1.treatments = var6;
    var1 = var5.bind(var0)(var1);
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/search/experiments/SearchPhrasesExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1589, 2]);