// modules/app_database/background_sync/native/BackgroundSyncImprovementsExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var3 = {};
    var0 = 0;
    var3.CONTROL = var0;
    var1 = 'CONTROL';
    var3[var0] = var1;
    var4 = 1;
    var3.ENABLED = var4;
    var1 = 'ENABLED';
    var3[var4] = var1;
    var7 = 2;
    var3.DEGRADED = var7;
    var1 = 'DEGRADED';
    var3[var7] = var1;
    var1 = var6[var0];
    var0 = undefined;
    var8 = var5.bind(var0)(var1);
    var7 = var8.createApexExperiment;
    var1 = {
        'name': '2025-10-mobile-background-sync-improvements',
        'kind': 'user'
    };
    var9 = {};
    var10 = var3.CONTROL;
    var9.variation = var10;
    var1.defaultConfig = var9;
    var9 = {};
    var10 = {};
    var11 = var3.ENABLED;
    var10.variation = var11;
    var9[1] = var10;
    var10 = {};
    var11 = var3.DEGRADED;
    var10.variation = var11;
    var9[2] = var10;
    var1.variations = var9;
    var1 = var7.bind(var8)(var1);
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/app_database/background_sync/native/BackgroundSyncImprovementsExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.BackgroundSyncImprovementsExperimentVariation = var3;
    var2.BackgroundSyncImprovementsExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);