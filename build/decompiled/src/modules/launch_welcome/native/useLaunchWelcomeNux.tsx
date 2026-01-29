// modules/launch_welcome/native/useLaunchWelcomeNux.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.create;
    var3 = function() { // Environment: var1
        var0 = {};
        var1 = false;
        var0.isNuxVisible = var1;
        return var0;
    };
    var3 = var6.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var3 = 3;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/launch_welcome/native/useLaunchWelcomeNux.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useLaunchWelcomeNuxVisible, environment: var1
        var4 = _closure1_slot3;
        var3 = undefined;
        var2 = function(arg0) { // Environment: var0
            var0 = arg0;
            var0 = var0.isNuxVisible;
            return var0;
        };
        var2 = var4.bind(var3)(var2);
        var4 = _closure1_slot2;
        var3 = var4.useCallback;
        var1 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var3 = _closure1_slot0;
            var2 = _closure1_slot1;
            var1 = 2;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var3.bind(var1)(var2);
            var1 = var2.batchUpdates;
            var0 = function() { // Environment: var0
                var2 = _closure1_slot3;
                var1 = var2.setState;
                var0 = {};
                var3 = _closure3_slot0;
                var0.isNuxVisible = var3;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0 = new Array(0);
        var1 = var3.bind(var4)(var1, var0);
        var0 = {};
        var0.isNuxVisible = var2;
        var0.setNuxVisible = var1;
        return var0;
    };
    var2.useLaunchWelcomeNuxVisible = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 629, 802, 2]);