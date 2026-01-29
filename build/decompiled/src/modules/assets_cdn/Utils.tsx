// modules/assets_cdn/Utils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/assets_cdn/Utils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function(arg0) { // Original name: getAssetCDNUrl, environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'https://cdn.discordapp.com/assets/';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.getAssetCDNUrl = var3;
    var1 = function(arg0) { // Original name: getAssetContentCDNUrl, environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = 'https://cdn.discordapp.com/assets/content/';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.getAssetContentCDNUrl = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);