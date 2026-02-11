// modules/media_engine/SilenceWarningExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var10 = true;
    var1.value = var10;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var9 = {
        'resetSilenceWarningOnDeviceChange': false,
        'resetSilenceWarningAfterNMinutes': null,
        'enableHardwareSilenceWarning': false
    };
    var0 = undefined;
    var9.resetSilenceWarningAfterNMinutes = var0;
    var1 = 0;
    var1 = var5[var1];
    var6 = var4.bind(var0)(var1);
    var3 = var6.createApexExperiment;
    var1 = {
        'name': '2026-02-silence-warning-aggression',
        'kind': 'user'
    };
    var1.defaultConfig = var9;
    var7 = {};
    var8 = {};
    var15 = var8;
    var14 = var9;
    var11 = copyDataProperties(var15, var14);
    var11 = 'resetSilenceWarningOnDeviceChange';
    var8[var11] = var10;
    var7[1] = var8;
    var8 = {};
    var15 = var8;
    var14 = var9;
    var11 = copyDataProperties(var15, var14);
    var12 = 10;
    var11 = 'resetSilenceWarningAfterNMinutes';
    var8[var11] = var12;
    var7[2] = var8;
    var8 = {};
    var15 = var8;
    var14 = var9;
    var9 = copyDataProperties(var15, var14);
    var9 = 'enableHardwareSilenceWarning';
    var8[var9] = var10;
    var7[3] = var8;
    var1.variations = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_engine/SilenceWarningExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);