// modules/screen_recording/native/ScreenRecordingStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var6 = var4.bind(var0)(var3);
    var3 = var6.create;
    var1 = function(arg0, arg1) { // Environment: var1
        var0 = arg0;
        var _closure2_slot0 = var0;
        var0 = arg1;
        var _closure2_slot1 = var0;
        var0 = {
            'isRecording': false,
            'microphoneEnabled': false,
            'isUploading': false,
            'currentStep': 0,
            'stepStartedTime': null,
            'isCompleted': false,
            'currentSurveyId': null,
            'currentSurveyConfig': null
        };
        var2 = function() { // Original name: startRecording, environment: var1
            _fun100659: for (var _fun100659_ip = 0;;) switch (_fun100659_ip) {
                case 0:
                    var5 = arguments[0];
                    var4 = arguments[1];
                    var3 = arguments[2];
                    var2 = undefined;
                    if (!(var5 === var2)) {
                        _fun100659_ip = 17;
                        continue _fun100659
                    }
                case 15:
                    var5 = false;
                case 17:
                    if (!(var4 === var2)) {
                        _fun100659_ip = 23;
                        continue _fun100659
                    }
                case 21:
                    var4 = null;
                case 23:
                    if (!(var3 === var2)) {
                        _fun100659_ip = 29;
                        continue _fun100659
                    }
                case 27:
                    var3 = null;
                case 29:
                    var1 = _closure2_slot0;
                    var0 = {};
                    var6 = true;
                    var0.isRecording = var6;
                    var0.microphoneEnabled = var5;
                    var0.currentSurveyId = var4;
                    var0.currentSurveyConfig = var3;
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var3 = var3.bind(var4)();
                    var0.stepStartedTime = var3;
                    var0 = var1.bind(var2)(var0);
                    return var0;
            }
        };
        var0.startRecording = var2;
        var2 = function() { // Original name: stopRecording, environment: var1
            var2 = _closure2_slot0;
            var1 = undefined;
            var0 = {
                'isRecording': false,
                'microphoneEnabled': false,
                'currentStep': 0,
                'stepStartedTime': null,
                'isCompleted': false
            };
            var0 = var2.bind(var1)(var0);
            return var0;
        };
        var0.stopRecording = var2;
        var2 = function(arg0) { // Original name: setIsUploading, environment: var1
            var2 = _closure2_slot0;
            var1 = {};
            var0 = arg0;
            var1.isUploading = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0.setIsUploading = var2;
        var2 = function() { // Original name: nextStep, environment: var1
            _fun100662: for (var _fun100662_ip = 0;;) switch (_fun100662_ip) {
                case 0:
                    var1 = _closure2_slot1;
                    var0 = undefined;
                    var1 = var1.bind(var0)();
                    var4 = var1.currentStep;
                    var3 = 1;
                    var3 = var4 + var3;
                    var5 = var1.currentSurveyConfig;
                    var4 = null;
                    var6 = var4 == var5;
                    var1 = undefined;
                    if (var6) {
                        _fun100662_ip = 49;
                        continue _fun100662
                    }
                case 43:
                    var1 = var5.steps;
                case 49:
                    if (!(var4 == var1)) {
                        _fun100662_ip = 57;
                        continue _fun100662
                    }
                case 53:
                    var1 = new Array(0);
                case 57:
                    var1 = var1.length;
                    var1 = var3 >= var1;
                    var2 = _closure2_slot0;
                    if (var1) {
                        _fun100662_ip = 104;
                        continue _fun100662
                    }
                case 73:
                    var1 = {};
                    var1.currentStep = var3;
                    var3 = global;
                    var4 = var3.Date;
                    var3 = var4.now;
                    var3 = var3.bind(var4)();
                    var1.stepStartedTime = var3;
                    _fun100662_ip = 116;
                    continue _fun100662;
                case 104:
                    var3 = {};
                    var4 = true;
                    var3.isCompleted = var4;
                    var1 = var3;
                case 116:
                    var1 = var2.bind(var0)(var1);
                    return var0;
            }
        };
        var0.nextStep = var2;
        var2 = function() { // Original name: resetActionSheet, environment: var1
            var2 = _closure2_slot0;
            var1 = {
                'currentStep': 0,
                'stepStartedTime': null,
                'isCompleted': false
            };
            var0 = global;
            var3 = var0.Date;
            var0 = var3.now;
            var0 = var0.bind(var3)();
            var1.stepStartedTime = var0;
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            return var0;
        };
        var0.resetActionSheet = var2;
        var1 = function() { // Original name: completeActionSheet, environment: var1
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 1;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.handleStopAndSend;
            var1 = var1.bind(var2)();
            var2 = _closure2_slot0;
            var1 = {
                'currentStep': 0,
                'stepStartedTime': null,
                'isCompleted': false
            };
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.completeActionSheet = var1;
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 2;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/screen_recording/native/ScreenRecordingStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.useScreenRecordingStore = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [629, 13054, 2]);