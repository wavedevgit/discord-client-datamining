// modules/screen/useIsScreenLandscape.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var4 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var5 = var4[var0];
    var3 = metroImportDefault;
    var0 = undefined;
    var3 = var3.bind(var0)(var5);
    var _closure1_slot0 = var3;
    var3 = function(arg0) { // Original name: SCREEN_IS_LANDSCAPE_GETTER, environment: var1
        var0 = arg0;
        var0 = var0.screenIsLandscape;
        return var0;
    };
    var _closure1_slot1 = var3;
    var3 = 1;
    var4 = var4[var3];
    var3 = arg1;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/screen/useIsScreenLandscape.native.tsx';
    var3 = var4.bind(var5)(var3);
    var3 = function() { // Original name: getIsScreenLandscape, environment: var1
        var1 = _closure1_slot0;
        var0 = var1.getState;
        var0 = var0.bind(var1)();
        var0 = var0.screenIsLandscape;
        return var0;
    };
    var2.getIsScreenLandscape = var3;
    var1 = function() { // Original name: useIsScreenLandscape, environment: var1
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = undefined;
        var0 = var2.bind(var0)(var1);
        return var0;
    };
    var2.useIsScreenLandscape = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1465, 2]);