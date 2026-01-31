// modules/voice_messages/native/VoiceMessagesUIStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var5 = 0;
    var3 = var7[var5];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var4 = var3.VoiceMessageAnimationState;
    var _closure1_slot2 = var4;
    var3 = var3.WAVEFORM_WAVE_MAX_VALUE;
    var _closure1_slot3 = var3;
    var4 = {};
    var4.REQUESTED = var5;
    var3 = 'REQUESTED';
    var4[var5] = var3;
    var3 = 1;
    var4.STARTED = var3;
    var5 = 'STARTED';
    var4[var3] = var5;
    var3 = var7[var3];
    var8 = var6.bind(var0)(var3);
    var5 = var8.create;
    var3 = function() { // Environment: var1
        var0 = {
            'voiceMessageAnimationState': null,
            'recordingStatus': null,
            'recordingId': null,
            'currWaveHeight': null,
            'showRecordingOverlay': false
        };
        var4 = _closure1_slot0;
        var3 = _closure1_slot1;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.makeMutable;
        var5 = _closure1_slot2;
        var6 = var5.SENDING;
        var1 = new Array(2);
        var1[0] = var6;
        var5 = var5.SENDING;
        var1[1] = var5;
        var1 = var3.bind(var4)(var1);
        var0.voiceMessageAnimationState = var1;
        var0.currWaveHeight = var2;
        var1 = false;
        var0.startTimeMillis = var2;
        var3 = new Array(0);
        var0.waveform = var3;
        var3 = 0;
        var0.waveformVersion = var3;
        var0.showVoiceMessagesTooltip = var1;
        var0.savedVoiceMessageUploadData = var2;
        var0.isVoiceMessageButtonMounted = var1;
        var0.isUsingHoldGesture = var1;
        return var0;
    };
    var3 = var5.bind(var8)(var3);
    var _closure1_slot4 = var3;
    var _closure1_slot5 = var3;
    var5 = 5;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_messages/native/VoiceMessagesUIStore.tsx';
    var5 = var6.bind(var7)(var5);
    var2.VoiceMessageRecordingStatus = var4;
    var2.useVoiceMessagesUIStore = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.showRecordingOverlay = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setShowRecordingOverlay = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.recordingStatus = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setVoiceMessageRecordingState = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.recordingId = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setVoiceMessageRecordingId = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.startTimeMillis = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setVoiceMessageStartTimeMillis = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var4 = _closure2_slot0;
            var5 = var0;
            var3 = copyDataProperties(var5, var4);
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setVoiceMessageAnimationState = var3;
    var3 = function arg0() {
        _fun89264: for (var _fun89264_ip = 0;;) switch (_fun89264_ip) {
            case 0:
                var6 = arg0;
                var3 = _closure1_slot5;
                var2 = var3.getState;
                var2 = var2.bind(var3)();
                var4 = var2.waveform;
                var2 = var3.getState;
                var2 = var2.bind(var3)();
                var5 = var2.waveformVersion;
                var _closure2_slot0 = var5;
                var2 = var3.getState;
                var2 = var2.bind(var3)();
                var7 = var2.currWaveHeight;
                var2 = null;
                if (!(var2 != var7)) {
                    _fun89264_ip = 120;
                    continue _fun89264
                }
            case 70:
                var3 = var7.set;
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 4;
                var8 = var8[var2];
                var2 = undefined;
                var9 = var9.bind(var2)(var8);
                var8 = var9.withSpring;
                var2 = _closure1_slot3;
                var2 = var6 / var2;
                var2 = var8.bind(var9)(var2);
                var2 = var3.bind(var7)(var2);
            case 120:
                var3 = var4.push;
                var2 = new Array(2);
                var2[0] = var6;
                var2[1] = var5;
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.batchUpdates;
                var1 = function() { // Environment: var1
                    var2 = _closure1_slot4;
                    var1 = var2.setState;
                    var0 = {};
                    var4 = _closure2_slot0;
                    var3 = 1;
                    var3 = var4 + var3;
                    var0.waveformVersion = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.addVoiceMessageWave = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = true;
            var0.showVoiceMessagesTooltip = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.showVoiceMessagesTooltip = var3;
    var3 = function() {
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 3;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = false;
            var0.showVoiceMessagesTooltip = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.hideVoiceMessagesTooltip = var3;
    var3 = function() {
        _fun89270: for (var _fun89270_ip = 0;;) switch (_fun89270_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 3;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var3.bind(var0)(var2);
                var3 = var4.batchUpdates;
                var2 = function() { // Environment: var2
                    var3 = _closure1_slot4;
                    var2 = var3.setState;
                    var1 = {
                        'waveform': null,
                        'waveformVersion': 0,
                        'showRecordingOverlay': false
                    };
                    var0 = new Array(0);
                    var1.waveform = var0;
                    var0 = undefined;
                    var1.startTimeMillis = var0;
                    var1.savedVoiceMessageUploadData = var0;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var2 = var3.bind(var4)(var2);
                var3 = _closure1_slot5;
                var2 = var3.getState;
                var2 = var2.bind(var3)();
                var3 = var2.currWaveHeight;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun89270_ip = 113;
                    continue _fun89270
                }
            case 71:
                var2 = var3.set;
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 4;
                var1 = var5[var1];
                var5 = var4.bind(var0)(var1);
                var4 = var5.withSpring;
                var1 = 0;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
            case 113:
                return var0;
        }
    };
    var2.resetVoiceMessageState = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.savedVoiceMessageUploadData = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setSavedVoiceMessageUploadData = var3;
    var3 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.isVoiceMessageButtonMounted = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setIsVoiceMessageButtonMounted = var3;
    var1 = function arg0() {
        var0 = arg0;
        var _closure2_slot0 = var0;
        var3 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 3;
        var2 = var2[var0];
        var0 = undefined;
        var3 = var3.bind(var0)(var2);
        var2 = var3.batchUpdates;
        var1 = function() { // Environment: var1
            var2 = _closure1_slot4;
            var1 = var2.setState;
            var0 = {};
            var3 = _closure2_slot0;
            var0.isUsingHoldGesture = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.setIsUsingHoldGesture = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [11558, 629, 3679, 802, 4040, 2]);