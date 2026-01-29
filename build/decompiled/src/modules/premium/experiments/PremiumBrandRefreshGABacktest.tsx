// modules/premium/experiments/PremiumBrandRefreshGABacktest.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var7 = true;
    var3.value = var7;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var5 = var3.bind(var0)(var5);
    var3 = {
        'kind': 'user',
        'name': '2025-10-premium-brand-refresh-ga-backtest'
    };
    var6 = {};
    var6.enabled = var7;
    var3.defaultConfig = var6;
    var6 = {};
    var7 = {};
    var8 = false;
    var7.enabled = var8;
    var6[1] = var7;
    var3.variations = var6;
    var3 = var5.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/premium/experiments/PremiumBrandRefreshGABacktest.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: useEnablePremiumBrandRefresh, environment: var1
        var0 = arg0;
        var3 = var0.location;
        var2 = _closure1_slot0;
        var1 = var2.useConfig;
        var0 = {};
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.default = var3;
    var1 = function(arg0) { // Original name: isPremiumBrandRefreshEnabled, environment: var1
        var0 = arg0;
        var3 = var0.location;
        var2 = _closure1_slot0;
        var1 = var2.getConfig;
        var0 = {};
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.isPremiumBrandRefreshEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1302, 2]);