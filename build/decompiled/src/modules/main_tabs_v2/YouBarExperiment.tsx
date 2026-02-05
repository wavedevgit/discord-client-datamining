// modules/main_tabs_v2/YouBarExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var2, var0, var3);
    var0 = 0;
    var4 = var5[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var4 = var3.bind(var0)(var4);
    var3 = {
        'name': '2026-01-you-bar',
        'kind': 'user'
    };
    var6 = {
        'enabled': false,
        'animateBetweenServers': false
    };
    var3.defaultConfig = var6;
    var6 = {};
    var7 = {
        'enabled': true,
        'animateBetweenServers': true
    };
    var6[1] = var7;
    var3.variations = var6;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot0 = var3;
    var4 = 1;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/YouBarExperiment.tsx';
    var4 = var5.bind(var6)(var4);
    var2.YouBarExperiment = var3;
    var1 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.useConfig;
        var0 = {};
        var3 = arg0;
        var0.location = var3;
        var0 = var1.bind(var2)(var0);
        var0 = var0.enabled;
        return var0;
    };
    var2.useYouBarEnabled = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1302, 2]);