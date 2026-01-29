// modules/experiments/aa_experiments/ApexAAValidationExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var9 = true;
    var1.value = var9;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var3 = var5[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var3 = var1.bind(var0)(var3);
    var1 = {
        'id': '2025-07_apex_cluster_randomization_aa',
        'kind': 'user',
        'label': 'Apex Cluster Randomization AA'
    };
    var6 = {};
    var7 = false;
    var6.isEnabled = var7;
    var1.defaultConfig = var6;
    var8 = {
        'id': 1,
        'label': 'AA test enabled. Noop on UI effect.'
    };
    var6 = 1;
    var7 = {};
    var7.isEnabled = var9;
    var8.config = var7;
    var7 = new Array(1);
    var7[0] = var8;
    var1.treatments = var7;
    var6 = var5[var6];
    var6 = var4.bind(var0)(var6);
    var6 = var6.CommonTriggerPoints;
    var6 = var6.CONNECTION_OPEN;
    var1.commonTriggerPoint = var6;
    var1 = var3.bind(var0)(var1);
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/experiments/aa_experiments/ApexAAValidationExperiments.tsx';
    var3 = var4.bind(var5)(var3);
    var2.ApexClusterRandomizationAA = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1589, 1591, 2]);