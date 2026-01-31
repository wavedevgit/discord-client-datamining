// modules/fastest_list/utils/FastestListLogger.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = metroImportDefault;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var3);
    var3 = var6.prototype;
    var5 = Object.create(var3, {
        constructor: {
            value: var6
        }
    });
    var10 = 'FastestList';
    var11 = var5;
    var3 = new var11[var6](var10, var9);
    var3 = var3 instanceof Object ? var3 : var5;
    var _closure1_slot2 = var3;
    var3 = 2;
    var4 = var4[var3];
    var3 = require;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/fastest_list/utils/FastestListLogger.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function arg0, arg1() {
        var4 = arg0;
        var5 = arg1;
        var2 = _closure1_slot2;
        var1 = var2.error;
        var1 = var1.bind(var2)(var4, var5);
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 1;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.captureMessage;
        var1 = {};
        var1.extra = var5;
        var1 = var2.bind(var3)(var4, var1);
        return var0;
    };
    var2.logFastestListError = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3, 1207, 2]);