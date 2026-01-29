// modules/billing/native/ACOMExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var10 = true;
    var1.value = var10;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = 0;
    var3 = var6[var1];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var4 = var7.createApexExperiment;
    var3 = {
        'name': '2025-12-acom-subscription',
        'kind': 'user'
    };
    var8 = {};
    var9 = false;
    var8.enabled = var9;
    var3.defaultConfig = var8;
    var8 = {};
    var11 = {};
    var11.enabled = var10;
    var8[1] = var11;
    var3.variations = var8;
    var3 = var4.bind(var7)(var3);
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createApexExperiment;
    var1 = {
        'name': '2025-12-acom-otp',
        'kind': 'user'
    };
    var8 = {};
    var8.enabled = var9;
    var1.defaultConfig = var8;
    var8 = {};
    var9 = {};
    var9.enabled = var10;
    var8[1] = var9;
    var1.variations = var8;
    var1 = var4.bind(var7)(var1);
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/billing/native/ACOMExperiments.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ACOMSubscriptionExperiment = var3;
    var2.ACOMOTPExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);