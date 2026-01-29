// modules/panels/morphable/native/MorphablePanelConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = 0;
    var1 = var7[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var1);
    var1 = var3.isIOS;
    var4 = var1.bind(var3)();
    var3 = {};
    var1 = 'panel';
    var3.PANEL = var1;
    var1 = 'pip';
    var3.PIP = var1;
    var1 = 'changing_orientation';
    var3.CHANGING_ORIENTATION = var1;
    var5 = 'undefined';
    var3.UNDEFINED = var5;
    var1 = {};
    var8 = 'floating-default';
    var1.FLOATING_DEFAULT = var8;
    var8 = 'drawer';
    var1.DRAWER = var8;
    var1.UNDEFINED = var5;
    var5 = 1;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/panels/morphable/native/MorphablePanelConstants.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = 10;
    var2.MIN_PAN_GESTURE_MOVE = var5;
    var5 = 30;
    var2.PANEL_TAP_GESTURE_MAX_DISTANCE = var5;
    var2.IS_IOS = var4;
    var4 = 140;
    var2.PIP_POP_HEIGHT = var4;
    var4 = 16;
    var2.PIP_WINDOW_OFFSET = var4;
    var4 = 500;
    var2.MIN_PIP_TOSS_VELOCITY = var4;
    var2.MorphablePanelModes = var3;
    var2.PanelControlsModes = var1;
    var1 = {
        'mass': 0.4,
        'damping': 30,
        'stiffness': 400
    };
    var2.SCALE_PHYSICS = var1;
    var1 = 0.55;
    var2.POP_RESISTANCE = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [478, 2]);