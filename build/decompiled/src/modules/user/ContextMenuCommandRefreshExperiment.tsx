// modules/user/ContextMenuCommandRefreshExperiment.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var1);
    var3 = var6.createApexExperiment;
    var1 = {
        'name': '2025-09-cmc-refresh',
        'kind': 'user'
    };
    var7 = {
        'newUIEnabled': false,
        'searchEnabled': false,
        'desktopSendIconEnabled': false
    };
    var1.defaultConfig = var7;
    var7 = {};
    var8 = {
        'newUIEnabled': true,
        'searchEnabled': false,
        'desktopSendIconEnabled': true
    };
    var7[1] = var8;
    var8 = {
        'newUIEnabled': true,
        'searchEnabled': true,
        'desktopSendIconEnabled': true
    };
    var7[2] = var8;
    var8 = {
        'newUIEnabled': true,
        'searchEnabled': true,
        'desktopSendIconEnabled': false
    };
    var7[3] = var8;
    var1.variations = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/user/ContextMenuCommandRefreshExperiment.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1301, 2]);