// modules/media_panel/native/MediaPlaybackPanelConstants.tsx
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
    var0 = 'dismissed';
    var1.DISMISSED = var0;
    var0 = 'pip';
    var1.PIP = var0;
    var3 = dependencyMap;
    var0 = 0;
    var4 = var3[var0];
    var3 = require;
    var0 = undefined;
    var5 = var3.bind(var0)(var4);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_panel/native/MediaPlaybackPanelConstants.tsx';
    var3 = var4.bind(var5)(var3);
    var2.MediaPlaybackPanelModes = var1;
    var1 = 100;
    var2.PLAYBACK_COMPLETION_DETECTION_TOLERANCE = var1;
    var1 = 500;
    var2.PLAYBACK_PROGRESS_UPDATE_INTERVAL = var1;
    var1 = {
        'stiffness': 320,
        'mass': 0.25,
        'damping': 15,
        'overshootClamping': true
    };
    var2.MEDIA_PLAYBACK_PANEL_LAYOUT_PHYSICS = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);