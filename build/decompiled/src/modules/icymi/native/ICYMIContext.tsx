// modules/icymi/native/ICYMIContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = metroImportDefault;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = 0;
    var3 = var7[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var4 = var3.createContext;
    var3 = 1;
    var3 = var7[var3];
    var3 = var6.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot2 = var3;
    var3 = {
        'width': 0,
        'margin': 0,
        'inset': 0
    };
    var4 = var4.bind(var0)(var3);
    var _closure1_slot3 = var4;
    var3 = function() { // Original name: useICYMIContextConstructor, environment: var1
        var3 = _closure1_slot0;
        var4 = _closure1_slot1;
        var0 = 2;
        var0 = var4[var0];
        var2 = undefined;
        var0 = var3.bind(var2)(var0);
        var0 = var0.bind(var2)();
        var6 = var0.width;
        var0 = global;
        var5 = var0.Math;
        var1 = var5.min;
        var0 = 480;
        var1 = var1.bind(var5)(var6, var0);
        var0 = 3;
        var0 = var4[var0];
        var0 = var3.bind(var2)(var0);
        var0 = var0.spacing;
        var2 = var0.PX_16;
        var0 = {};
        var0.width = var1;
        var0.margin = var2;
        var1 = 38;
        var1 = var2 + var1;
        var0.inset = var1;
        return var0;
    };
    var _closure1_slot4 = var3;
    var5 = 4;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/icymi/native/ICYMIContext.tsx';
    var5 = var6.bind(var7)(var5);
    var2.ICYMIContext = var4;
    var2.useICYMIContextConstructor = var3;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var4 = var0.children;
        var1 = _closure1_slot4;
        var3 = undefined;
        var1 = var1.bind(var3)();
        var8 = var1.width;
        var7 = var1.margin;
        var6 = var1.inset;
        var2 = _closure1_slot2;
        var0 = _closure1_slot3;
        var1 = var0.Provider;
        var0 = {};
        var5 = {};
        var5.width = var8;
        var5.margin = var7;
        var5.inset = var6;
        var0.value = var5;
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var2.ICYMIContextProvider = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 33, 1464, 671, 2]);