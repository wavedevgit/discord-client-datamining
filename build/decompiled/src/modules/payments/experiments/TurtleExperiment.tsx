// modules/payments/experiments/TurtleExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var11 = true;
    var1.value = var11;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var7 = var4.bind(var0)(var1);
    var6 = var7.createExperiment;
    var1 = {
        'id': '2025-06_turtle',
        'kind': 'user',
        'label': 'Turtle'
    };
    var3 = {};
    var9 = false;
    var3.enabled = var9;
    var1.defaultConfig = var3;
    var3 = {
        'id': 0,
        'label': 'not_in_treatment'
    };
    var8 = {};
    var8.enabled = var9;
    var3.config = var8;
    var8 = new Array(3);
    var8[0] = var3;
    var9 = {
        'id': 1,
        'label': 'in_treatment'
    };
    var3 = 1;
    var10 = {};
    var10.enabled = var11;
    var9.config = var10;
    var8[1] = var9;
    var9 = {
        'id': 2,
        'label': 'in_treatment'
    };
    var10 = {};
    var10.enabled = var11;
    var9.config = var10;
    var8[2] = var9;
    var1.treatments = var8;
    var1 = var6.bind(var7)(var1);
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/payments/experiments/TurtleExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.TurtleExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3074, 2]);