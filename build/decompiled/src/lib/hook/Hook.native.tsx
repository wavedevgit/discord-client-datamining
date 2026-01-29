// lib/hook/Hook.native.tsx
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
    var3 = 'lib/hook/Hook.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: isHookModuleTooOld, environment: var1
        var0 = true;
        return var0;
    };
    var2.isHookModuleTooOld = var3;
    var3 = function() { // Original name: attachToProcess, environment: var1
        var0 = global;
        var1 = var0.Promise;
        var0 = var1.resolve;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.attachToProcess = var3;
    var3 = function() { // Original name: cancelAttachToProcess, environment: var1
        var0 = global;
        var1 = var0.Promise;
        var0 = var1.resolve;
        var0 = var0.bind(var1)();
        return var0;
    };
    var2.cancelAttachToProcess = var3;
    var1 = function() { // Original name: findSteamProcess, environment: var1
        var0 = global;
        var2 = var0.Promise;
        var1 = var2.resolve;
        var0 = null;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var2.findSteamProcess = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);