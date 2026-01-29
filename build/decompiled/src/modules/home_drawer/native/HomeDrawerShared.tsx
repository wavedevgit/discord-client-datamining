// modules/home_drawer/native/HomeDrawerShared.tsx
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
    var6 = var5[var0];
    var3 = metroImportAll;
    var0 = undefined;
    var3 = var3.bind(var0)(var6);
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.View;
    var _closure1_slot0 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var6 = var3.jsx;
    var _closure1_slot1 = var6;
    var3 = var3.jsxs;
    var _closure1_slot2 = var3;
    var3 = 3;
    var3 = var5[var3];
    var7 = var4.bind(var0)(var3);
    var6 = var7.createStyles;
    var3 = {};
    var8 = {
        'flex': 1,
        'justifyContent': 'center',
        'marginRight': null,
        'gap': 4
    };
    var9 = 4;
    var10 = var5[var9];
    var9 = metroImportDefault;
    var9 = var9.bind(var0)(var10);
    var9 = var9.spacing;
    var9 = var9.PX_24;
    var8.marginRight = var9;
    var3.container = var8;
    var8 = {
        'flexDirection': 'row',
        'alignItems': 'center',
        'justifyContent': 'space-between',
        'width': '100%'
    };
    var3.titleContainer = var8;
    var3 = var6.bind(var7)(var3);
    var _closure1_slot3 = var3;
    var3 = 5;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/home_drawer/native/HomeDrawerShared.tsx';
    var3 = var4.bind(var5)(var3);
    var1 = function(arg0) { // Original name: HomeDrawerSharedItem, environment: var1
        var0 = arg0;
        var7 = var0.title;
        var5 = var0.subtitle;
        var0 = _closure1_slot3;
        var3 = undefined;
        var8 = var0.bind(var3)();
        var2 = _closure1_slot2;
        var1 = _closure1_slot0;
        var0 = {};
        var6 = var8.container;
        var0.style = var6;
        var6 = _closure1_slot1;
        var4 = {};
        var8 = var8.titleContainer;
        var4.style = var8;
        var4.children = var7;
        var6 = var6.bind(var3)(var1, var4);
        var4 = new Array(2);
        var4[0] = var6;
        var4[1] = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.HomeDrawerSharedItem = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 27, 33, 1297, 671, 2]);