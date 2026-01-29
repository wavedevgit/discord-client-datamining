// modules/media_keyboard/native/MediaKeyboardConstants.tsx
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
    var5 = {};
    var6 = 0;
    var5.CHAT = var6;
    var0 = 'CHAT';
    var5[var6] = var0;
    var1 = 1;
    var5.COMMAND = var1;
    var0 = 'COMMAND';
    var5[var1] = var0;
    var1 = 2;
    var5.APP_LAUNCHER = var1;
    var0 = 'APP_LAUNCHER';
    var5[var1] = var0;
    var1 = 3;
    var5.INTERACTION_MODAL = var1;
    var0 = 'INTERACTION_MODAL';
    var5[var1] = var0;
    var4 = {};
    var0 = 'fully expanded';
    var4.FULLY_EXPANDED = var0;
    var3 = {};
    var1 = 'camera tile';
    var3.CAMERA_TILE = var1;
    var1 = 'camera button';
    var3.CAMERA_BUTTON = var1;
    var1 = 'take a photo button';
    var3.TAKE_A_PHOTO_BUTTON = var1;
    var1 = {};
    var1.FULLY_EXPANDED = var0;
    var0 = 'view all clicked';
    var1.VIEW_ALL_CLICKED = var0;
    var0 = 'media selected';
    var1.MEDIA_SELECTED = var0;
    var0 = dependencyMap;
    var7 = var0[var6];
    var6 = require;
    var0 = undefined;
    var8 = var6.bind(var0)(var7);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/media_keyboard/native/MediaKeyboardConstants.tsx';
    var6 = var7.bind(var8)(var6);
    var6 = 66;
    var2.HEADER_HEIGHT = var6;
    var6 = 16;
    var2.HEADER_HANDLE_HEIGHT = var6;
    var2.MediaKeyboardTarget = var5;
    var2.InAppCameraUsedViews = var4;
    var2.InAppCameraUsedCameraPreviewTypes = var3;
    var2.MediaPickerActionSheetEngagedActions = var1;
    var1 = {
        'mass': 1,
        'damping': 25,
        'stiffness': 400,
        'overshootClamping': false
    };
    var2.MEDIA_PICKER_SEND_BUTTON_SPRING = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2]);