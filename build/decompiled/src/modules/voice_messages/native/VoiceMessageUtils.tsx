// modules/voice_messages/native/VoiceMessageUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var2 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function arg0() {
        _fun90474: for (var _fun90474_ip = 0;;) switch (_fun90474_ip) {
            case 0:
                var5 = arg0;
                var4 = _closure1_slot16;
                var1 = var5.length;
                var3 = var5;
                if (!(!(var1 <= var4))) {
                    _fun90474_ip = 50;
                    continue _fun90474
                }
            case 22:
                var6 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 6;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var6.bind(var2)(var1);
                var3 = var1.bind(var2)(var5, var4);
            case 50:
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    var0 = global;
                    var3 = var0.Math;
                    var2 = var3.min;
                    var1 = _closure1_slot13;
                    var0 = arg0;
                    var0 = var2.bind(var3)(var0, var1);
                    return var0;
                };
                var4 = var2.bind(var3)(var1);
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 7;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.fromByteArray;
                var0 = global;
                var0 = var0.Uint8Array;
                var3 = var0.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var0
                    }
                });
                var9 = var3;
                var8 = var4;
                var0 = new var9[var0](var8, var7);
                var0 = var0 instanceof Object ? var0 : var3;
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot22 = var4;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*(arg0) { // Environment: var2
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun90478: for (var _fun90478_ip = 0;;) switch (_fun90478_ip) {
                    case 0:
                        StartGenerator();
                        var4 = arg0;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun90478_ip = 335;
                            continue _fun90478
                        }
                    case 13:
                        var5 = var4;
                        var3 = undefined;
                        var6 = undefined;
                        var1 = null;
                        _closure1_slot19 = var1;
                        var7 = _closure1_slot9;
                        var1 = _closure1_slot12;
                        var1 = var1.REQUESTED;
                        var1 = var7.bind(var3)(var1);
                        var1 = _closure1_slot8;
                        var1 = var1.bind(var3)(var4);
                        var4 = _closure1_slot4;
                        var1 = var4.getMediaEngine;
                        var8 = var1.bind(var4)();
                        var7 = var8.on;
                        var4 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 9;
                        var1 = var9[var1];
                        var1 = var4.bind(var3)(var1);
                        var1 = var1.MediaEngineEvent;
                        var4 = var1.VoiceActivity;
                        var1 = _closure1_slot21;
                        var1 = var7.bind(var8)(var4, var1);
                    case 119: // try_start_0
                        var4 = global;
                        var7 = var4.performance;
                        var1 = var7.now;
                        var6 = var1.bind(var7)();
                        var7 = _closure1_slot4;
                        var1 = var7.getMediaEngine;
                        var8 = var1.bind(var7)();
                        var7 = var8.startLocalAudioRecording;
                        var1 = {
                            'echoCancellation': false,
                            'echoCancellationPreEcho': false,
                            'noiseSuppression': false,
                            'automaticGainControlConfig': null,
                            'noiseCancellation': true
                        };
                        var9 = {};
                        var10 = true;
                        var9.enabled = var10;
                        var1.automaticGainControlConfig = var9;
                        var1 = var7.bind(var8)(var1);
                        SaveGenerator(address = 193);
                    case 191:
                        return var1;
                    case 193:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 7);
                        if (var7) {
                            _fun90478_ip = 320;
                            continue _fun90478
                        }
                    case 199:
                        var8 = var4.performance;
                        var7 = var8.now;
                        var7 = var7.bind(var8)();
                        var6 = var7 - var6;
                        _closure1_slot19 = var6;
                        var9 = _closure1_slot20;
                        var8 = var9.log;
                        var7 = _closure1_slot19;
                        var6 = 'Voice message audio startup latency:';
                        var6 = var8.bind(var9)(var6, var7);
                        var7 = _closure1_slot11;
                        var6 = var7.getState;
                        var6 = var6.bind(var7)();
                        var6 = var6.recordingId;
                        if (!(var6 === var5)) {
                            _fun90478_ip = 317;
                            continue _fun90478
                        }
                    case 271:
                        var6 = _closure1_slot9;
                        var5 = _closure1_slot12;
                        var5 = var5.STARTED;
                        var5 = var6.bind(var3)(var5);
                        var5 = _closure1_slot10;
                        var6 = var4.Date;
                        var4 = var6.now;
                        var4 = var4.bind(var6)();
                        var4 = var5.bind(var3)(var4);
                    case 314: // try_end0
                        return var3;
                    case 317:
                        return var3;
                    case 320:
                        return var1;
                    case 323: // catch_target0
                        CatchBlockStart(arg_register = 1);
                        var2 = _closure1_slot24;
                        var2 = var2.bind(var3)();
                        throw var1;
                    case 335:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot23 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot23 = var0;
    var0 = function() {
        var2 = _closure1_slot4;
        var0 = var2.getMediaEngine;
        var5 = var0.bind(var2)();
        var4 = var5.removeListener;
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var0 = 9;
        var2 = var2[var0];
        var0 = undefined;
        var2 = var3.bind(var0)(var2);
        var2 = var2.MediaEngineEvent;
        var3 = var2.VoiceActivity;
        var2 = _closure1_slot21;
        var2 = var4.bind(var5)(var3, var2);
        var1 = _closure1_slot6;
        var1 = var1.bind(var0)();
        return var0;
    };
    var _closure1_slot24 = var0;
    var0 = function() {
        var2 = _closure1_slot8;
        var3 = undefined;
        var4 = null;
        var2 = var2.bind(var3)(var4);
        var2 = _closure1_slot9;
        var2 = var2.bind(var3)(var4);
        var2 = _closure1_slot22;
        var4 = _closure1_slot11;
        var1 = var4.getState;
        var1 = var1.bind(var4)();
        var5 = var1.waveform;
        var4 = var5.map;
        var1 = function(arg0) { // Environment: var0
            _fun90481: for (var _fun90481_ip = 0;;) switch (_fun90481_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0[Symbol.iterator];
                    var0 = var1().next;
                    var3 = var0().value;
                    var2 = var1;
                    var0 = undefined;
                    var2 = var2 === var0;
                    if (var2) {
                        _fun90481_ip = 25;
                        continue _fun90481
                    }
                case 22:
                    var0 = var3;
                case 25:
                    if (var2) {
                        _fun90481_ip = 31;
                        continue _fun90481
                    }
                case 28:
                    var1.return();
                case 31:
                    return var0;
            }
        };
        var1 = var4.bind(var5)(var1);
        var1 = var2.bind(var3)(var1);
        var _closure2_slot0 = var1;
        var1 = global;
        var2 = var1.Promise;
        var1 = var2.prototype;
        var1 = Object.create(var1, {
            constructor: {
                value: var2
            }
        });
        var6 = function(arg0) { // Environment: var0
            var1 = arg0;
            var _closure3_slot0 = var1;
            var2 = _closure1_slot4;
            var1 = var2.getMediaEngine;
            var2 = var1.bind(var2)();
            var1 = var2.stopLocalAudioRecording;
            var0 = function(arg0, arg1) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = {};
                var0 = arg0;
                var1.filename = var0;
                var3 = arg1;
                var0 = 1000;
                var0 = var3 / var0;
                var1.durationSecs = var0;
                var0 = _closure2_slot0;
                var1.waveform = var0;
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var7 = var1;
        var0 = new var7[var2](var6, var5);
        var0 = var0 instanceof Object ? var0 : var1;
        return var0;
    };
    var _closure1_slot25 = var0;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun90486: for (var _fun90486_ip = 0;;) switch (_fun90486_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun90486_ip = 163;
                            continue _fun90486
                        }
                    case 10:
                        var3 = _closure1_slot11;
                        var1 = var3.getState;
                        var5 = var1.bind(var3)();
                        var4 = var5.savedVoiceMessageUploadData;
                        var1 = null;
                        var3 = var1 == var4;
                        if (!var3) {
                            _fun90486_ip = 62;
                            continue _fun90486
                        }
                    case 42:
                        var6 = var5.recordingStatus;
                        var5 = _closure1_slot12;
                        var5 = var5.REQUESTED;
                        var3 = var6 === var5;
                    case 62:
                        if (!var3) {
                            _fun90486_ip = 89;
                            continue _fun90486
                        }
                    case 65:
                        var5 = _closure1_slot25;
                        var3 = undefined;
                        var3 = var5.bind(var3)();
                        var4 = {
                            'filename': '',
                            'durationSecs': 0,
                            'waveform': ''
                        };
                    case 89:
                        if (!(var1 == var4)) {
                            _fun90486_ip = 116;
                            continue _fun90486
                        }
                    case 93:
                        var3 = _closure1_slot25;
                        var1 = undefined;
                        var1 = var3.bind(var1)();
                        SaveGenerator(address = 107);
                    case 105:
                        return var1;
                    case 107:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        var4 = var1;
                        if (var3) {
                            _fun90486_ip = 160;
                            continue _fun90486
                        }
                    case 116:
                        var5 = _closure1_slot11;
                        var3 = var5.getState;
                        var3 = var3.bind(var5)();
                        var3 = var3.startTimeMillis;
                        var5 = _closure1_slot24;
                        var2 = undefined;
                        var2 = var5.bind(var2)();
                        var2 = {};
                        var2.data = var4;
                        var2.startTimeMillis = var3;
                        return var2;
                    case 160:
                        return var1;
                    case 163:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot26 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot26 = var0;
    var3 = function() {
        var0 = undefined;
        var3 = _closure1_slot28;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot27 = var3;
    var0 = function() {
        var4 = undefined;
        var0 = undefined;
        var3 = _closure1_slot3;
        var2 = function*() { // Environment: var2
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun90490: for (var _fun90490_ip = 0;;) switch (_fun90490_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun90490_ip = 107;
                            continue _fun90490
                        }
                    case 7:
                        var1 = _closure1_slot25;
                        var2 = undefined;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 24);
                    case 22:
                        return var1;
                    case 24:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 4);
                        if (var4) {
                            _fun90490_ip = 104;
                            continue _fun90490
                        }
                    case 30:
                        var5 = _closure1_slot4;
                        var4 = var5.getMediaEngine;
                        var7 = var4.bind(var5)();
                        var6 = var7.removeListener;
                        var5 = _closure1_slot0;
                        var8 = _closure1_slot2;
                        var4 = 9;
                        var4 = var8[var4];
                        var4 = var5.bind(var2)(var4);
                        var4 = var4.MediaEngineEvent;
                        var5 = var4.VoiceActivity;
                        var4 = _closure1_slot21;
                        var4 = var6.bind(var7)(var5, var4);
                        var3 = _closure1_slot7;
                        var3 = var3.bind(var2)(var1);
                        return var2;
                    case 104:
                        return var1;
                    case 107:
                        return var0;
                }
            };
            return var0;
        };
        var3 = var3.bind(var4)(var2);
        _closure1_slot28 = var3;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var _closure1_slot28 = var0;
    var0 = global;
    var10 = var0.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var9.bind(var10)(var2, var0, var5);
    var0 = 0;
    var5 = var7[var0];
    var0 = undefined;
    var5 = var8.bind(var0)(var5);
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var0)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var9 = var5.addVoiceMessageWave;
    var _closure1_slot5 = var9;
    var9 = var5.resetVoiceMessageState;
    var _closure1_slot6 = var9;
    var9 = var5.setSavedVoiceMessageUploadData;
    var _closure1_slot7 = var9;
    var9 = var5.setVoiceMessageRecordingId;
    var _closure1_slot8 = var9;
    var9 = var5.setVoiceMessageRecordingState;
    var _closure1_slot9 = var9;
    var9 = var5.setVoiceMessageStartTimeMillis;
    var _closure1_slot10 = var9;
    var9 = var5.useVoiceMessagesUIStore;
    var _closure1_slot11 = var9;
    var5 = var5.VoiceMessageRecordingStatus;
    var _closure1_slot12 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var9 = var5.WAVEFORM_WAVE_MAX_VALUE;
    var _closure1_slot13 = var9;
    var9 = var5.VOICE_RECORDING_MIN_DB;
    var _closure1_slot14 = var9;
    var9 = var5.VOICE_RECORDING_MAX_DB;
    var _closure1_slot15 = var9;
    var9 = var5.WAVEFORM_MAX_SAMPLES;
    var _closure1_slot16 = var9;
    var5 = var5.VOICE_RECORDING_MAX_DURATION_MILLIS;
    var _closure1_slot17 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var0)(var5);
    var5 = var5.AnalyticEvents;
    var _closure1_slot18 = var5;
    var5 = null;
    var _closure1_slot19 = var5;
    var5 = 5;
    var5 = var7[var5];
    var10 = var8.bind(var0)(var5);
    var5 = var10.prototype;
    var9 = Object.create(var5, {
        constructor: {
            value: var10
        }
    });
    var13 = 'VoiceMessages';
    var14 = var9;
    var5 = new var14[var10](var13, var12);
    var5 = var5 instanceof Object ? var5 : var9;
    var _closure1_slot20 = var5;
    var5 = 8;
    var5 = var7[var5];
    var10 = var8.bind(var0)(var5);
    var9 = var10.throttle;
    var8 = function(arg0) { // Environment: var1
        _fun90491: for (var _fun90491_ip = 0;;) switch (_fun90491_ip) {
            case 0:
                var2 = _closure1_slot11;
                var1 = var2.getState;
                var3 = var1.bind(var2)();
                var1 = var3.startTimeMillis;
                var4 = null;
                if (!(var4 != var1)) {
                    _fun90491_ip = 130;
                    continue _fun90491
                }
            case 29:
                var5 = _closure1_slot5;
                var2 = _closure1_slot13;
                var7 = _closure1_slot14;
                var1 = arg0;
                var6 = var1 - var7;
                var1 = _closure1_slot15;
                var1 = var1 - var7;
                var1 = var6 / var1;
                var2 = var2 * var1;
                var1 = undefined;
                var2 = var5.bind(var1)(var2);
                var2 = var3.savedVoiceMessageUploadData;
                var2 = var4 == var2;
                if (!var2) {
                    _fun90491_ip = 119;
                    continue _fun90491
                }
            case 84:
                var4 = global;
                var5 = var4.performance;
                var4 = var5.now;
                var4 = var4.bind(var5)();
                var3 = var3.startTimeMillis;
                var4 = var4 - var3;
                var3 = _closure1_slot17;
                var2 = var4 >= var3;
            case 119:
                if (!var2) {
                    _fun90491_ip = 130;
                    continue _fun90491
                }
            case 122:
                var0 = _closure1_slot27;
                var0 = var0.bind(var1)();
            case 130:
                var0 = undefined;
                return var0;
        }
    };
    var5 = 100;
    var5 = var9.bind(var10)(var8, var5);
    var _closure1_slot21 = var5;
    var5 = 13;
    var5 = var7[var5];
    var7 = var6.bind(var0)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/voice_messages/native/VoiceMessageUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var2.generateBase64EncodedWaveform = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot23;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.startAudioRecording = var4;
    var4 = function() {
        var0 = undefined;
        var3 = _closure1_slot26;
        var2 = var3.apply;
        var0 = arguments;
        var1 = var0;
        var0 = this;
        var0 = var2.bind(var3)(var0, var1);
        return var0;
    };
    var2.endAudioRecording = var4;
    var2.stopAndCacheAudioRecording = var3;
    var3 = function arg0, arg1, arg2() {
        _fun90494: for (var _fun90494_ip = 0;;) switch (_fun90494_ip) {
            case 0:
                var6 = arg2;
                var1 = null;
                if (!(var1 != var6)) {
                    _fun90494_ip = 119;
                    continue _fun90494
                }
            case 9:
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 10;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.track;
                var2 = _closure1_slot18;
                var3 = var2.VOICE_MESSAGE_RECORDED;
                var2 = {};
                var2.recording_start_timestamp = var6;
                var6 = global;
                var7 = var6.Date;
                var6 = var7.now;
                var6 = var6.bind(var7)();
                var2.recording_stop_timestamp = var6;
                var6 = arg1;
                var2.duration_secs = var6;
                var6 = arg0;
                var2.result = var6;
                var6 = _closure1_slot19;
                var2.initialize_secs = var6;
                var2 = var4.bind(var5)(var3, var2);
                _closure1_slot19 = var1;
            case 119:
                var0 = undefined;
                return var0;
        }
    };
    var2.emitVoiceMessageRecorded = var3;
    var1 = function() {
        _fun90495: for (var _fun90495_ip = 0;;) switch (_fun90495_ip) {
            case 0:
                var5 = _closure1_slot0;
                var7 = _closure1_slot2;
                var6 = 11;
                var1 = var7[var6];
                var0 = undefined;
                var3 = var5.bind(var0)(var1);
                var2 = var3.triggerHapticFeedback;
                var1 = 12;
                var1 = var7[var1];
                var5 = var5.bind(var0)(var1);
                var1 = var5.isAndroid;
                var1 = var1.bind(var5)();
                var5 = _closure1_slot0;
                var4 = _closure1_slot2;
                var4 = var4[var6];
                var4 = var5.bind(var0)(var4);
                var4 = var4.HapticFeedbackTypes;
                if (var1) {
                    _fun90495_ip = 87;
                    continue _fun90495
                }
            case 79:
                var1 = var4.IMPACT_MEDIUM;
                _fun90495_ip = 93;
                continue _fun90495;
            case 87:
                var1 = var4.IMPACT_LIGHT;
            case 93:
                var1 = var2.bind(var3)(var1);
                return var0;
        }
    };
    var2.triggerHaptic = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 3437, 11559, 11560, 660, 3, 11713, 206, 22, 3594, 795, 3240, 478, 2]);