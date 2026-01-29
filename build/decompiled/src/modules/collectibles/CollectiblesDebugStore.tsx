// modules/collectibles/CollectiblesDebugStore.tsx
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
    var0 = 0;
    var3 = var6[var0];
    var0 = undefined;
    var7 = var5.bind(var0)(var3);
    var4 = var7.create;
    var3 = function(arg0) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = {};
        var2 = new Array(0);
        var0.logs = var2;
        var2 = function(arg0) { // Original name: addLog, environment: var1
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = function(arg0) { // Environment: var0
                var0 = {};
                var1 = arg0;
                var9 = var1.logs;
                var1 = new Array(1);
                var5 = 0;
                var10 = var1;
                var8 = 0;
                var3 = arraySpread(var10, var9, var8);
                var2 = global;
                var4 = var2.Date;
                var6 = var4.prototype;
                var6 = Object.create(var6, {
                    constructor: {
                        value: var4
                    }
                });
                var11 = var6;
                var4 = new var11[var4](var10);
                var6 = var4 instanceof Object ? var4 : var6;
                var4 = var6.toISOString;
                var7 = var4.bind(var6)();
                var6 = var7.split;
                var4 = 'T';
                var4 = var6.bind(var7)(var4);
                var7 = var4[var5];
                var6 = _closure3_slot0;
                var2 = var2.HermesInternal;
                var5 = var2.concat;
                var4 = '[';
                var2 = '] ';
                var2 = var5.bind(var4)(var7, var2, var6);
                var1[var3] = var2;
                var2 = 1;
                var2 = var3 + var2;
                var0.logs = var1;
                return var0;
            };
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.addLog = var2;
        var1 = function() { // Original name: clearLogs, environment: var1
            var2 = _closure2_slot0;
            var1 = {};
            var0 = new Array(0);
            var1.logs = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0.clearLogs = var1;
        return var0;
    };
    var3 = var4.bind(var7)(var3);
    var _closure1_slot0 = var3;
    var4 = 1;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/collectibles/CollectiblesDebugStore.tsx';
    var4 = var5.bind(var6)(var4);
    var2.useCollectiblesDebugStore = var3;
    var1 = function(arg0) { // Environment: var1
        var0 = global;
        var1 = var0.Date;
        var2 = var1.prototype;
        var2 = Object.create(var2, {
            constructor: {
                value: var1
            }
        });
        var10 = var2;
        var1 = new var10[var1](var9);
        var4 = var1 instanceof Object ? var1 : var2;
        var3 = var4.toLocaleTimeString;
        var2 = {};
        var1 = false;
        var2.hour12 = var1;
        var1 = 'en-US';
        var6 = var3.bind(var4)(var1, var2);
        var2 = _closure1_slot0;
        var1 = var2.getState;
        var2 = var1.bind(var2)();
        var1 = var2.addLog;
        var0 = var0.HermesInternal;
        var5 = var0.concat;
        var4 = '[';
        var3 = '] ';
        var0 = arg0;
        var0 = var5.bind(var4)(var6, var3, var0);
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.addDebugLog = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [629, 2]);