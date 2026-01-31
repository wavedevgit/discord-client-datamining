// modules/premium/experiments/UserOfferNoticeTimingExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var3);
    var9 = 0;
    var3 = var6[var9];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var4 = var7.createApexExperiment;
    var3 = {
        'name': '2026-01-user-offer-notice-timing-xp',
        'kind': 'user'
    };
    var8 = {};
    var8.thresholdMs = var9;
    var3.defaultConfig = var8;
    var8 = {};
    var9 = {};
    var10 = 86400000;
    var9.thresholdMs = var10;
    var8[1] = var9;
    var9 = {};
    var10 = 172800000;
    var9.thresholdMs = var10;
    var8[2] = var9;
    var9 = {};
    var10 = 259200000;
    var9.thresholdMs = var10;
    var8[3] = var9;
    var9 = {};
    var10 = 345600000;
    var9.thresholdMs = var10;
    var8[4] = var9;
    var9 = {};
    var10 = 432000000;
    var9.thresholdMs = var10;
    var8[5] = var9;
    var9 = {};
    var10 = 518400000;
    var9.thresholdMs = var10;
    var8[6] = var9;
    var9 = {};
    var10 = 604800000;
    var9.thresholdMs = var10;
    var8[7] = var9;
    var3.variations = var8;
    var3 = var4.bind(var7)(var3);
    var _closure1_slot0 = var3;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/premium/experiments/UserOfferNoticeTimingExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.UserOfferNoticeTimingExperiment = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.getConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.thresholdMs;
        return var0;
    };
    var2.getOfferNoticeTimingExperimentThreshold = var3;
    var1 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.useConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.thresholdMs;
        return var0;
    };
    var2.useOfferNoticeTimingExperimentThreshold = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);