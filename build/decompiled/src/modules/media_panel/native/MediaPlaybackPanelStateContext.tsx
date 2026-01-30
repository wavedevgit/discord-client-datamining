// modules/media_panel/native/MediaPlaybackPanelStateContext.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var6 = var0.Object;
    var3 = var6.defineProperty;
    var1 = {};
    var11 = true;
    var1.value = var11;
    var0 = '__esModule';
    var0 = var3.bind(var6)(var2, var0, var1);
    var12 = 0;
    var3 = var5[var12];
    var1 = metroImportAll;
    var0 = undefined;
    var6 = var1.bind(var0)(var3);
    var1 = 1;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var10 = var1.MediaPlaybackPanelModes;
    var1 = 2;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.MorphablePanelModes;
    var3 = var6.createContext;
    var1 = {};
    var7 = 3;
    var13 = var5[var7];
    var14 = var4.bind(var0)(var13);
    var13 = var14.createFakeSharedValue;
    var10 = var10.PIP;
    var10 = var13.bind(var14)(var10);
    var1.mode = var10;
    var10 = function() { // Original name: setMode, environment: var8
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'MediaPlaybackPanelModes.Provider.setMode: not called within a context provider';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var1.setMode = var10;
    var10 = var5[var7];
    var13 = var4.bind(var0)(var10);
    var10 = var13.createFakeSharedValue;
    var9 = var9.PIP;
    var9 = var10.bind(var13)(var9);
    var1.morphablePanelMode = var9;
    var9 = var5[var7];
    var13 = var4.bind(var0)(var9);
    var10 = var13.createFakeSharedValue;
    var9 = {
        'width': 0,
        'height': 0
    };
    var9 = var10.bind(var13)(var9);
    var1.wrapperDimensions = var9;
    var9 = var5[var7];
    var13 = var4.bind(var0)(var9);
    var9 = var13.createFakeSharedValue;
    var10 = false;
    var9 = var9.bind(var13)(var10);
    var1.useReducedMotion = var9;
    var9 = var5[var7];
    var14 = var4.bind(var0)(var9);
    var13 = var14.createFakeSharedValue;
    var9 = {
        'x': 4294967295,
        'y': 4294967295
    };
    var9 = var13.bind(var14)(var9);
    var1.pipState = var9;
    var9 = var5[var7];
    var14 = var4.bind(var0)(var9);
    var13 = var14.createFakeSharedValue;
    var9 = {
        'top': 0,
        'bottom': 0
    };
    var9 = var13.bind(var14)(var9);
    var1.pipAvoidanceSpecs = var9;
    var9 = {};
    var9.current = var0;
    var1.dismissToPipGestureRef = var9;
    var8 = function() { // Original name: dismissPanel, environment: var8
        var0 = global;
        var2 = var0.Error;
        var0 = var2.prototype;
        var1 = Object.create(var0, {
            constructor: {
                value: var2
            }
        });
        var3 = 'VoicePanelContextType.Provider.dismissDrawer: not called within a context provider';
        var4 = var1;
        var0 = new var4[var2](var3, var2);
        var0 = var0 instanceof Object ? var0 : var1;
        throw var0;
    };
    var1.dismissPanel = var8;
    var8 = var5[var7];
    var9 = var4.bind(var0)(var8);
    var8 = var9.createFakeSharedValue;
    var8 = var8.bind(var9)(var12);
    var1.scrollPosition = var8;
    var8 = var5[var7];
    var9 = var4.bind(var0)(var8);
    var8 = var9.createFakeSharedValue;
    var8 = var8.bind(var9)(var11);
    var1.canShowPIP = var8;
    var8 = var5[var7];
    var9 = var4.bind(var0)(var8);
    var8 = var9.createFakeSharedValue;
    var8 = var8.bind(var9)(var10);
    var1.lockScrolling = var8;
    var7 = var5[var7];
    var9 = var4.bind(var0)(var7);
    var8 = var9.createFakeSharedValue;
    var7 = {
        'x': 0,
        'y': 0,
        'gestureActive': false
    };
    var7 = var8.bind(var9)(var7);
    var1.wrapperOffset = var7;
    var1 = var3.bind(var6)(var1);
    var3 = 4;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_panel/native/MediaPlaybackPanelStateContext.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [31, 12867, 11839, 5217, 2]);