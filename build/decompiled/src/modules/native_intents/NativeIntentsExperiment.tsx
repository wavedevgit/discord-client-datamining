// modules/native_intents/NativeIntentsExperiment.tsx
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
        'id': '2025-06_native_intents',
        'label': 'Native Intents'
    };
    var3 = {
        'searchEnabled': false,
        'clearEnabled': false,
        'activityEnabled': false
    };
    var1.defaultConfig = var3;
    var9 = {
        'id': 1,
        'label': 'All enabled'
    };
    var3 = 1;
    var8 = {
        'searchEnabled': true,
        'clearEnabled': true,
        'activityEnabled': true
    };
    var9.config = var8;
    var8 = new Array(4);
    var8[0] = var9;
    var9 = {
        'id': 2,
        'label': 'Clear Only'
    };
    var10 = {
        'searchEnabled': false,
        'clearEnabled': true,
        'activityEnabled': false
    };
    var9.config = var10;
    var8[1] = var9;
    var9 = {
        'id': 3,
        'label': 'Activities Only'
    };
    var10 = {
        'searchEnabled': false,
        'clearEnabled': false,
        'activityEnabled': true
    };
    var9.config = var10;
    var8[2] = var9;
    var9 = {
        'id': 4,
        'label': 'Activities and Clear'
    };
    var10 = {
        'searchEnabled': false,
        'clearEnabled': true,
        'activityEnabled': true
    };
    var9.config = var10;
    var8[3] = var9;
    var1.treatments = var8;
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/native_intents/NativeIntentsExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3117, 2]);