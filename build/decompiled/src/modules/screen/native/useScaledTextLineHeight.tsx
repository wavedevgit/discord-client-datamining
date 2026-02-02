// modules/screen/native/useScaledTextLineHeight.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var4 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var4;
    var3 = function arg0, arg1() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 0;
        var1 = var1[var0];
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        var1 = var0.TextStyleSheet;
        var0 = arg0;
        var0 = var1[var0];
        var1 = var0.lineHeight;
        var0 = arg1;
        var0 = var1 * var0;
        return var0;
    };
    var _closure1_slot2 = var3;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var6);
    var0 = 2;
    var4 = var4[var0];
    var0 = undefined;
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/screen/native/useScaledTextLineHeight.tsx';
    var4 = var5.bind(var6)(var4);
    var2.scaleTextLineHeight = var3;
    var1 = function arg0() {
        var3 = _closure1_slot2;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var2 = undefined;
        var1 = var1.bind(var2)(var0);
        var0 = var1.useFontScale;
        var1 = var0.bind(var1)();
        var0 = arg0;
        var0 = var3.bind(var2)(var0, var1);
        return var0;
    };
    var2.useScaledTextLineHeight = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3902, 4051, 2]);