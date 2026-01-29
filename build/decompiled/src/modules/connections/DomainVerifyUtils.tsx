// modules/connections/DomainVerifyUtils.tsx
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
    var3 = 'modules/connections/DomainVerifyUtils.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = 'example.com';
    var2.EXAMPLE_DOMAIN = var3;
    var3 = function(arg0) { // Environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var2 = var0.concat;
        var1 = '_discord.';
        var0 = arg0;
        var0 = var2.bind(var1)(var0);
        return var0;
    };
    var2.getDnsName = var3;
    var1 = function(arg0) { // Environment: var1
        var0 = global;
        var0 = var0.HermesInternal;
        var3 = var0.concat;
        var2 = 'https://';
        var1 = arg0;
        var0 = '/.well-known/discord';
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.getHttpName = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);