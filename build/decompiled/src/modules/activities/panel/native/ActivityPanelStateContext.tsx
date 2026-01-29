// modules/activities/panel/native/ActivityPanelStateContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var2 = exports;
    var6 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var4 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var7)(var2, var0, var1);
    var0 = 0;
    var4 = var6[var0];
    var1 = metroImportAll;
    var0 = undefined;
    var4 = var1.bind(var0)(var4);
    var1 = {};
    var7 = 1;
    var7 = var6[var7];
    var7 = var5.bind(var0)(var7);
    var7 = var7.ActivityPanelModes;
    var7 = var7.PANEL;
    var1.mode = var7;
    var7 = function() { // Original name: setMode, environment: var3
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'ActivityPanelStateContextType.Provider.setMode: not called within a context provider';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var1.setMode = var7;
    var7 = {
        'width': 9,
        'height': 16,
        'isLetterboxed': false,
        'isLandscape': false,
        'isWindowLandscape': false
    };
    var1.wrapperDimensions = var7;
    var7 = 2;
    var8 = var6[var7];
    var10 = var5.bind(var0)(var8);
    var9 = var10.createFakeSharedValue;
    var8 = {
        'x': 4294967295,
        'y': 4294967295
    };
    var8 = var9.bind(var10)(var8);
    var1.pipState = var8;
    var8 = var6[var7];
    var10 = var5.bind(var0)(var8);
    var9 = var10.createFakeSharedValue;
    var8 = {
        'top': 0,
        'bottom': 0
    };
    var8 = var9.bind(var10)(var8);
    var1.pipAvoidanceSpecs = var8;
    var7 = var6[var7];
    var9 = var5.bind(var0)(var7);
    var8 = var9.createFakeSharedValue;
    var7 = {
        'x': 0,
        'y': 0,
        'gestureActive': false
    };
    var7 = var8.bind(var9)(var7);
    var1.wrapperOffset = var7;
    var3 = function() { // Original name: useActivityWebViewLock, environment: var3
        var0 = true;
        return var0;
    };
    var1.useActivityWebViewLock = var3;
    var3 = var4.createContext;
    var3 = var3.bind(var4)(var1);
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var0)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/native/ActivityPanelStateContext.tsx';
    var4 = var5.bind(var6)(var4);
    var2.default = var3;
    var2.activityPanelStateContextDefault = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 7874, 5211, 2]);