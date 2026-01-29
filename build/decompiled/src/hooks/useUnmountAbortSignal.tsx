// hooks/useUnmountAbortSignal.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var3 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var0 = 2;
    var3 = var3[var0];
    var0 = undefined;
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'hooks/useUnmountAbortSignal.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: useUnmountAbortSignal, environment: var1
        var3 = _closure1_slot1;
        var5 = _closure1_slot2;
        var0 = 0;
        var0 = var5[var0];
        var4 = undefined;
        var3 = var3.bind(var4)(var0);
        var0 = function() { // Environment: var1
            var0 = global;
            var0 = var0.AbortController;
            var1 = var0.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var0
                }
            });
            var2 = var1;
            var0 = new var2[var0](var1);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0 = var3.bind(var4)(var0);
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = 1;
        var2 = var5[var2];
        var3 = var3.bind(var4)(var2);
        var2 = var3.useUnmountEffect;
        var1 = function() { // Environment: var1
            var1 = _closure2_slot0;
            var0 = var1.abort;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        var0 = var0.signal;
        return var0;
    };
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4884, 4056, 2]);