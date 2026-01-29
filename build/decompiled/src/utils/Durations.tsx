// utils/Durations.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var1 = true;
    var3.value = var1;
    var1 = '__esModule';
    var1 = var4.bind(var5)(var2, var1, var3);
    var1 = {};
    var5 = var0.Object;
    var4 = var5.freeze;
    var3 = {
        'HALF_SECOND': 500,
        'SECOND': 1000,
        'MINUTE': 60000,
        'HOUR': 3600000,
        'DAY': 86400000,
        'WEEK': 604800000,
        'DAYS_30': 2592000000.0
    };
    var3 = var4.bind(var5)(var3);
    var1.Millis = var3;
    var5 = var0.Object;
    var4 = var5.freeze;
    var3 = {
        'SECOND': 1,
        'MINUTE': 60,
        'HOUR': 3600,
        'DAY': 86400,
        'WEEK': 604800,
        'DAYS_30': 2592000
    };
    var3 = var4.bind(var5)(var3);
    var1.Seconds = var3;
    var4 = var0.Object;
    var3 = var4.freeze;
    var0 = {
        'MINUTE': 1,
        'HOUR': 60,
        'DAY': 1440,
        'WEEK': 10080,
        'DAYS_30': 43200
    };
    var0 = var3.bind(var4)(var0);
    var1.Minutes = var0;
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'utils/Durations.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);