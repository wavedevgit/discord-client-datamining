// modules/holdout_experiments/av/AVHoldoutExperimentH22025.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var9 = true;
    var1.value = var9;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = 0;
    var3 = var5[var0];
    var1 = metroImportDefault;
    var0 = undefined;
    var6 = var1.bind(var0)(var3);
    var1 = {
        'kind': 'user',
        'id': '2025-07_avholdout',
        'label': 'AV Holdout - H2 2025'
    };
    var3 = {};
    var8 = false;
    var3.isInHoldout = var8;
    var1.defaultConfig = var3;
    var7 = {
        'id': 1,
        'label': 'Enables the holdout experiment'
    };
    var4 = 1;
    var3 = {};
    var3.isInHoldout = var9;
    var7.config = var3;
    var3 = new Array(1);
    var3[0] = var7;
    var1.treatments = var3;
    var3 = var6.bind(var0)(var1);
    var1 = {
        'kind': 'user',
        'id': '2025-12_avholdout__mirror',
        'label': 'AV Holdout - H2 2025'
    };
    var7 = {};
    var7.isInHoldout = var8;
    var1.defaultConfig = var7;
    var8 = {
        'id': 1,
        'label': 'Enables the holdout experiment'
    };
    var7 = {};
    var7.isInHoldout = var9;
    var8.config = var7;
    var7 = new Array(1);
    var7[0] = var8;
    var1.treatments = var7;
    var1 = var6.bind(var0)(var1);
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/holdout_experiments/av/AVHoldoutExperimentH22025.tsx';
    var4 = var5.bind(var6)(var4);
    var2.AVHoldoutExperimentH22025 = var3;
    var2.AVMirrorHoldoutExperimentH22025 = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1589, 2]);