// design/components/Navigator/native/SceneLoadingIndicator.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var0 = metroImportDefault;
    var _closure1_slot1 = var0;
    var _closure1_slot2 = var5;
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
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.View;
    var _closure1_slot3 = var6;
    var6 = var3.ActivityIndicator;
    var _closure1_slot4 = var6;
    var7 = var3.StyleSheet;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot5 = var6;
    var3 = var3.jsxs;
    var _closure1_slot6 = var3;
    var6 = var7.create;
    var3 = {};
    var8 = {
        'flex': 1,
        'paddingTop': 40
    };
    var3.loadingContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'design/components/Navigator/native/SceneLoadingIndicator.native.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function() { // Original name: SceneLoadingIndicator, environment: var1
        var3 = _closure1_slot6;
        var2 = _closure1_slot3;
        var1 = {};
        var0 = _closure1_slot7;
        var0 = var0.loadingContainer;
        var1.style = var0;
        var7 = _closure1_slot5;
        var6 = _closure1_slot4;
        var4 = {
            'animating': true,
            'color': null,
            'size': 'large'
        };
        var10 = _closure1_slot1;
        var8 = _closure1_slot2;
        var0 = 3;
        var9 = var8[var0];
        var0 = undefined;
        var9 = var10.bind(var0)(var9);
        var9 = var9.unsafe_rawColors;
        var9 = var9.BRAND_500;
        var4.color = var9;
        var6 = var7.bind(var0)(var6, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var6 = _closure1_slot0;
        var5 = 4;
        var5 = var8[var5];
        var5 = var6.bind(var0)(var5);
        var6 = var5.NavScrim;
        var5 = {};
        var5 = var7.bind(var0)(var6, var5);
        var4[1] = var5;
        var1.children = var4;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var2.SceneLoadingIndicator = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 671, 5160, 2]);