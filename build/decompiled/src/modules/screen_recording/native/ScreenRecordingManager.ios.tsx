// modules/screen_recording/native/ScreenRecordingManager.ios.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var4.bind(var0)(var1);
    var1 = var1.NativeModules;
    var1 = var1.DCDScreenRecordingManager;
    var _closure1_slot0 = var1;
    var1 = {};
    var6 = function() {
        var1 = _closure1_slot0;
        var0 = var1.requestPermissions;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.requestPermissions = var6;
    var6 = function() {
        var1 = _closure1_slot0;
        var0 = var1.startRecording;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.startRecording = var6;
    var6 = function() {
        var1 = _closure1_slot0;
        var0 = var1.stopRecording;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.stopRecording = var6;
    var6 = function() {
        var1 = _closure1_slot0;
        var0 = var1.isRecording;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.isRecording = var6;
    var6 = function() {
        var1 = _closure1_slot0;
        var0 = var1.getLatestRecording;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.getLatestRecording = var6;
    var6 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.setRecordingQuality;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var1.setRecordingQuality = var6;
    var3 = function() {
        var1 = _closure1_slot0;
        var0 = var1.getRecordingQuality;
        var0 = var0.bind(var1)();
        return var0;
    };
    var1.getRecordingQuality = var3;
    var3 = 1;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/screen_recording/native/ScreenRecordingManager.ios.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 2]);