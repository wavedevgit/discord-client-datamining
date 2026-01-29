// modules/safety_hub/hooks/useIsNewClassification.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var3 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var3;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var0 = true;
    var4.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var4);
    var0 = 1;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/safety_hub/hooks/useIsNewClassification.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var2 = var2.bind(var0)(var1);
        var1 = var2.extractTimestamp;
        var0 = arg0;
        var0 = var0.id;
        var3 = var1.bind(var2)(var0);
        var0 = global;
        var2 = var0.Math;
        var1 = var2.abs;
        var0 = var0.Date;
        var4 = var0.prototype;
        var4 = Object.create(var4, {
            constructor: {
                value: var0
            }
        });
        var6 = var4;
        var0 = new var6[var0](var5);
        var4 = var0 instanceof Object ? var0 : var4;
        var0 = var4.getTime;
        var0 = var0.bind(var4)();
        var0 = var3 - var0;
        var1 = var1.bind(var2)(var0);
        var0 = 86400000;
        var0 = var1 < var0;
        return var0;
    };
    var2.useIsNewClassification = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [21, 2]);