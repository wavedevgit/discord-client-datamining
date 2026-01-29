// modules/app_startup/awaitExperiments.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var3 = var3.Future;
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var11 = var6;
    var3 = new var11[var3](var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot0 = var3;
    var3 = null;
    var _closure1_slot1 = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/app_startup/awaitExperiments.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: beginLoadedExperimentsTimeout, environment: var1
        var0 = global;
        var3 = var0.setTimeout;
        var0 = undefined;
        var2 = function() { // Environment: var1
            var2 = _closure1_slot0;
            var0 = var2.resolve;
            var0 = var0.bind(var2)();
            var0 = null;
            _closure1_slot1 = var0;
            var0 = undefined;
            return var0;
        };
        var1 = 1000;
        var2 = var3.bind(var0)(var2, var1);
        _closure1_slot1 = var2;
        return var0;
    };
    var2.beginLoadedExperimentsTimeout = var3;
    var3 = function() { // Original name: onExperimentsLoaded, environment: var1
        _fun97047: for (var _fun97047_ip = 0;;) switch (_fun97047_ip) {
            case 0:
                var2 = _closure1_slot1;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun97047_ip = 46;
                    continue _fun97047
                }
            case 13:
                var2 = _closure1_slot0;
                var1 = var2.resolve;
                var1 = var1.bind(var2)();
                var1 = global;
                var2 = var1.clearTimeout;
                var1 = _closure1_slot1;
                var0 = undefined;
                var0 = var2.bind(var0)(var1);
            case 46:
                var0 = undefined;
                return var0;
        }
    };
    var2.onExperimentsLoaded = var3;
    var1 = function() { // Original name: getPromise, environment: var1
        var0 = _closure1_slot0;
        var0 = var0.promise;
        return var0;
    };
    var2.getPromise = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4633, 2]);