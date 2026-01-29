// modules/activities/panel/ActivityPanelConstants.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var1 = {};
    var0 = 'disconnected';
    var1.DISCONNECTED = var0;
    var0 = 'launching_with_orientation_change';
    var1.LAUNCHING_WITH_ORIENTATION_CHANGE = var0;
    var0 = 'panel';
    var1.PANEL = var0;
    var0 = 'pip';
    var1.PIP = var0;
    var0 = 'activity_popout_window';
    var1.ACTIVITY_POPOUT_WINDOW = var0;
    var3 = {};
    var4 = 0;
    var3.NO_CHAT = var4;
    var0 = 'NO_CHAT';
    var3[var4] = var0;
    var5 = 1;
    var3.RESIZABLE = var5;
    var0 = 'RESIZABLE';
    var3[var5] = var0;
    var0 = dependencyMap;
    var5 = var0[var4];
    var4 = require;
    var0 = undefined;
    var6 = var4.bind(var0)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/activities/panel/ActivityPanelConstants.tsx';
    var4 = var5.bind(var6)(var4);
    var2.ActivityPanelModes = var1;
    var1 = 64;
    var2.SCREEN_HEADER_HEIGHT = var1;
    var4 = {
        'stiffness': 320,
        'mass': 0.25,
        'damping': 15,
        'overshootClamping': true
    };
    var2.ACTIVITY_PANEL_LAYOUT_PHYSICS = var4;
    var2.FocusedActivityLayouts = var3;
    var3 = 1.7777777777777777;
    var2.LANDSCAPE_ACTIVITY_ASPECT_RATIO = var3;
    var3 = 48;
    var2.ACTIVITY_PANEL_PORTRAIT_HEADER_HEIGHT = var3;
    var2.LANDSCAPE_IFRAME_HORIZONTAL_MARGIN = var1;
    var1 = {
        'width': 120,
        'height': 120
    };
    var2.ACTIVITY_PIP_SIZE = var1;
    var1 = {
        'stiffness': 150,
        'mass': 0.25,
        'damping': 40,
        'overshootClamping': true
    };
    var2.ACTIVITY_LAYOUT_PHYSICS_GESTURE = var1;
    var1 = {
        'stiffness': 150,
        'mass': 0.35,
        'damping': 40,
        'overshootClamping': true
    };
    var2.ACTIVITY_LAYOUT_PHYSICS_DEFAULT = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);