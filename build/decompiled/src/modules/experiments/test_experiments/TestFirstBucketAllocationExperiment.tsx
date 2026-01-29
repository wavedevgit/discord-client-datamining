// modules/experiments/test_experiments/TestFirstBucketAllocationExperiment.tsx
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
    var0 = 0;
    var3 = var5[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var6 = var1.bind(var0)(var3);
    var1 = {
        'kind': 'user',
        'id': '2025-02_test_first_bucket_allocation',
        'label': 'Test First Bucket Allocation Experiment'
    };
    var3 = {};
    var7 = false;
    var3.enabled = var7;
    var1.defaultConfig = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.CommonTriggerPoints;
    var3 = var3.CONNECTION_OPEN;
    var1.commonTriggerPoint = var3;
    var3 = {
        'id': 1,
        'label': 'Variation with first treatment enabled'
    };
    var7 = {};
    var7.enabled = var10;
    var3.config = var7;
    var7 = new Array(2);
    var7[0] = var3;
    var8 = {
        'id': 2,
        'label': 'Variation with second treatment enabled'
    };
    var3 = 2;
    var9 = {};
    var9.enabled = var10;
    var8.config = var9;
    var7[1] = var8;
    var1.treatments = var7;
    var1 = var6.bind(var0)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/experiments/test_experiments/TestFirstBucketAllocationExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.TestFirstBucketAllocationExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1589, 1591, 2]);