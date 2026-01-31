// modules/screen/native/useFontScale.tsx
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
    var3 = var3.useFontScaleStore;
    var _closure1_slot0 = var3;
    var3 = 1;
    var6 = var5[var3];
    var3 = metroImportDefault;
    var3 = var3.bind(var0)(var6);
    var _closure1_slot1 = var3;
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0.fontScale;
        return var0;
    };
    var _closure1_slot2 = var3;
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/screen/native/useFontScale.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() {
        var2 = _closure1_slot1;
        var1 = var2.getState;
        var1 = var1.bind(var2)();
        var1 = var1.fontScale;
        var2 = _closure1_slot0;
        var0 = var2.getState;
        var0 = var0.bind(var2)();
        var0 = var0.fontScale;
        var0 = var1 * var0;
        return var0;
    };
    var2.getFontScale = var3;
    var1 = function() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var2 = _closure1_slot0;
        var0 = var2.getState;
        var0 = var0.bind(var2)();
        var0 = var0.fontScale;
        var0 = var1 * var0;
        return var0;
    };
    var2.useFontScale = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [4050, 1465, 2]);