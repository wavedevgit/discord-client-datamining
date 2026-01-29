// ../discord_common/js/shared/utils/Future.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var3 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var4[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var1);
    var1 = 1;
    var1 = var4[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot0 = var1;
    var1 = function() { // Original name: Future, environment: var5
        var2 = this;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var0 = undefined;
        var3 = var4.bind(var0)(var2, var3);
        var3 = global;
        var4 = var3.Promise;
        var3 = var4.prototype;
        var3 = Object.create(var3, {
            constructor: {
                value: var4
            }
        });
        var6 = function(arg0, arg1) { // Environment: var1
            var1 = _closure2_slot0;
            var0 = arg0;
            var1.resolve = var0;
            var0 = arg1;
            var1.reject = var0;
            var0 = undefined;
            return var0;
        };
        var7 = var3;
        var1 = new var7[var4](var6, var5);
        var1 = var1 instanceof Object ? var1 : var3;
        var2.promise = var1;
        return var0;
    };
    var _closure1_slot1 = var1;
    var1 = var3.bind(var0)(var1);
    var3 = 2;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/shared/utils/Future.tsx';
    var3 = var4.bind(var5)(var3);
    var2.Future = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 2]);