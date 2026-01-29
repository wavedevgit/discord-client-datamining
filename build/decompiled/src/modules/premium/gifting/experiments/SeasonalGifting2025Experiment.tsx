// modules/premium/gifting/experiments/SeasonalGifting2025Experiment.tsx
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
    var0 = 0;
    var1 = var6[var0];
    var0 = undefined;
    var1 = var5.bind(var0)(var1);
    var8 = var1.CommonTriggerPoints;
    var1 = 1;
    var1 = var6[var1];
    var4 = var5.bind(var0)(var1);
    var3 = var4.createApexExperiment;
    var1 = {
        'name': '2025-10-seasonal-gifting-2025',
        'kind': 'user'
    };
    var7 = {};
    var11 = false;
    var7.enabled = var11;
    var1.defaultConfig = var7;
    var7 = {};
    var9 = {};
    var9.enabled = var11;
    var7[0] = var9;
    var9 = {};
    var9.enabled = var10;
    var7[1] = var9;
    var1.variations = var7;
    var3 = var3.bind(var4)(var1);
    var1 = 2;
    var1 = var6[var1];
    var7 = var5.bind(var0)(var1);
    var4 = var7.createExperiment;
    var1 = {
        'id': '2025-11_seasonal_gifting_2025_reminder',
        'label': 'Seasonal Gifting 2025 Reminder',
        'kind': 'user'
    };
    var9 = {};
    var9.enabled = var11;
    var1.defaultConfig = var9;
    var8 = var8.CONNECTION_OPEN;
    var1.commonTriggerPoint = var8;
    var9 = {
        'id': 1,
        'label': 'Enabled'
    };
    var8 = {};
    var8.enabled = var10;
    var9.config = var8;
    var8 = new Array(1);
    var8[0] = var9;
    var1.treatments = var8;
    var1 = var4.bind(var7)(var1);
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/gifting/experiments/SeasonalGifting2025Experiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.SeasonalGifting2025Experiment = var3;
    var2.SeasonalGiftingReminderExperiment = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1591, 1301, 3074, 2]);