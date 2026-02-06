// modules/errors/av_errors/AVError.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var8;
    var0 = ['type'];
    var _closure1_slot2 = var0;
    var0 = global;
    var6 = var0.Object;
    var5 = var6.defineProperty;
    var3 = {};
    var10 = true;
    var3.value = var10;
    var0 = '__esModule';
    var0 = var5.bind(var6)(var2, var0, var3);
    var0 = 0;
    var3 = var8[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var8[var3];
    var5 = var4.bind(var0)(var3);
    var3 = var5.prototype;
    var4 = Object.create(var3, {
        constructor: {
            value: var5
        }
    });
    var15 = 'AVError';
    var16 = var4;
    var3 = new var16[var5](var15, var14);
    var3 = var3 instanceof Object ? var3 : var4;
    var _closure1_slot4 = var3;
    var6 = {};
    var3 = 'stream-failed-to-start';
    var6.STREAM_FAILED_TO_START = var3;
    var3 = 'no-input-devices';
    var6.NO_INPUT_DEVICES = var3;
    var3 = 'no-audio-input-detected';
    var6.NO_AUDIO_INPUT_DETECTED = var3;
    var3 = 'debug-log-upload-failed';
    var6.DEBUG_LOG_UPLOAD_FAILED = var3;
    var3 = 'stream-view-low-fps';
    var6.STREAM_VIEW_LOW_FPS = var3;
    var3 = 'stream-view-high-packet-loss';
    var6.STREAM_VIEW_HIGH_PACKET_LOSS = var3;
    var3 = 'stream-send-low-encode-fps';
    var6.STREAM_SEND_LOW_FPS = var3;
    var3 = 'stream-send-high-packet-loss';
    var6.STREAM_SEND_HIGH_PACKET_LOSS = var3;
    var3 = 'stream-send-network-quality';
    var6.STREAM_BAD_NETWORK_QUALITY = var3;
    var3 = 'stream-soundshare-failed';
    var6.STREAM_SOUNDSHARE_FAILED = var3;
    var3 = 'noise-canceller-error';
    var6.NOISE_CANCELLER_ERROR = var3;
    var3 = 'screenshare-min-os-requirement';
    var6.SCREENSHARE_OS_NOT_SUPPORTED = var3;
    var3 = 'stream-reconnecting';
    var6.STREAM_RECONNECTING = var3;
    var3 = 'video-decode-error';
    var6.VIDEO_DECODE_ERROR = var3;
    var3 = 'video-encode-error';
    var6.VIDEO_ENCODE_ERROR = var3;
    var3 = 'stream-full';
    var6.STREAM_FULL = var3;
    var3 = 'audio-capture-sample-rate-mismatch';
    var6.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH = var3;
    var3 = 'video-stream-sender-ready-timeout';
    var6.VIDEO_STREAM_SENDER_READY_TIMEOUT = var3;
    var3 = 'video-stream-receiver-ready-timeout';
    var6.VIDEO_STREAM_RECEIVER_READY_TIMEOUT = var3;
    var3 = 'video-stream-sender-ready-timeout-no-stream';
    var6.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM = var3;
    var3 = 'video-stream-receiver-ready-timeout-no-stream';
    var6.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM = var3;
    var3 = 'camera-send-low-encode-fps';
    var6.CAMERA_SEND_LOW_FPS = var3;
    var3 = 'screenshare-os-error';
    var6.SCREENSHARE_OS_ERROR = var3;
    var5 = {};
    var3 = 'audio';
    var5.Audio = var3;
    var3 = 'video';
    var5.Video = var3;
    var3 = 'devices';
    var5.Devices = var3;
    var3 = 'debug';
    var5.Debug = var3;
    var4 = {};
    var3 = 'critical';
    var4.Critical = var3;
    var3 = 'warning';
    var4.Warning = var3;
    var3 = 'info';
    var4.Info = var3;
    var3 = {};
    var9 = var6.STREAM_SOUNDSHARE_FAILED;
    var7 = {};
    var11 = 1001;
    var7.errorCode = var11;
    var11 = var4.Warning;
    var7.severity = var11;
    var11 = var5.Audio;
    var7.category = var11;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var9 = var6.NOISE_CANCELLER_ERROR;
    var7 = {};
    var11 = 1002;
    var7.errorCode = var11;
    var11 = var4.Warning;
    var7.severity = var11;
    var11 = var5.Audio;
    var7.category = var11;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var9 = var6.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH;
    var7 = {};
    var11 = 1003;
    var7.errorCode = var11;
    var11 = var4.Warning;
    var7.severity = var11;
    var11 = var5.Audio;
    var7.category = var11;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var9 = var6.STREAM_FAILED_TO_START;
    var7 = {};
    var11 = 2001;
    var7.errorCode = var11;
    var11 = var4.Critical;
    var7.severity = var11;
    var11 = var5.Video;
    var7.category = var11;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var9 = var6.STREAM_VIEW_LOW_FPS;
    var7 = {};
    var11 = 2002;
    var7.errorCode = var11;
    var11 = var4.Warning;
    var7.severity = var11;
    var11 = var5.Video;
    var7.category = var11;
    var11 = false;
    var7.isErrorOutbound = var11;
    var3[var9] = var7;
    var9 = var6.STREAM_VIEW_HIGH_PACKET_LOSS;
    var7 = {};
    var12 = 2003;
    var7.errorCode = var12;
    var12 = var4.Warning;
    var7.severity = var12;
    var12 = var5.Video;
    var7.category = var12;
    var7.isErrorOutbound = var11;
    var3[var9] = var7;
    var9 = var6.STREAM_SEND_HIGH_PACKET_LOSS;
    var7 = {};
    var12 = 2004;
    var7.errorCode = var12;
    var12 = var4.Warning;
    var7.severity = var12;
    var12 = var5.Video;
    var7.category = var12;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var9 = var6.STREAM_SEND_LOW_FPS;
    var7 = {};
    var12 = 2005;
    var7.errorCode = var12;
    var12 = var4.Warning;
    var7.severity = var12;
    var12 = var5.Video;
    var7.category = var12;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var9 = var6.STREAM_BAD_NETWORK_QUALITY;
    var7 = {};
    var12 = 2006;
    var7.errorCode = var12;
    var12 = var4.Warning;
    var7.severity = var12;
    var12 = var5.Video;
    var7.category = var12;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var9 = var6.STREAM_RECONNECTING;
    var7 = {};
    var12 = 2007;
    var7.errorCode = var12;
    var12 = var4.Warning;
    var7.severity = var12;
    var12 = var5.Video;
    var7.category = var12;
    var7.isErrorOutbound = var11;
    var3[var9] = var7;
    var9 = var6.VIDEO_DECODE_ERROR;
    var7 = {};
    var12 = 2008;
    var7.errorCode = var12;
    var12 = var4.Warning;
    var7.severity = var12;
    var12 = var5.Video;
    var7.category = var12;
    var7.isErrorOutbound = var11;
    var3[var9] = var7;
    var9 = var6.VIDEO_ENCODE_ERROR;
    var7 = {};
    var12 = 2009;
    var7.errorCode = var12;
    var12 = var4.Warning;
    var7.severity = var12;
    var12 = var5.Video;
    var7.category = var12;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var9 = var6.STREAM_FULL;
    var7 = {};
    var12 = 2010;
    var7.errorCode = var12;
    var12 = var4.Critical;
    var7.severity = var12;
    var12 = var5.Video;
    var7.category = var12;
    var7.isErrorOutbound = var11;
    var3[var9] = var7;
    var9 = var6.VIDEO_STREAM_SENDER_READY_TIMEOUT;
    var7 = {};
    var12 = 2011;
    var7.errorCode = var12;
    var12 = var4.Critical;
    var7.severity = var12;
    var12 = var5.Video;
    var7.category = var12;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var9 = var6.VIDEO_STREAM_RECEIVER_READY_TIMEOUT;
    var7 = {};
    var12 = 2012;
    var7.errorCode = var12;
    var12 = var4.Critical;
    var7.severity = var12;
    var12 = var5.Video;
    var7.category = var12;
    var7.isErrorOutbound = var11;
    var3[var9] = var7;
    var9 = var6.CAMERA_SEND_LOW_FPS;
    var7 = {};
    var12 = 2013;
    var7.errorCode = var12;
    var12 = var4.Warning;
    var7.severity = var12;
    var12 = var5.Video;
    var7.category = var12;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var9 = var6.VIDEO_STREAM_SENDER_READY_TIMEOUT_NO_STREAM;
    var7 = {};
    var12 = 2014;
    var7.errorCode = var12;
    var12 = var4.Critical;
    var7.severity = var12;
    var12 = var5.Video;
    var7.category = var12;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var9 = var6.VIDEO_STREAM_RECEIVER_READY_TIMEOUT_NO_STREAM;
    var7 = {};
    var12 = 2015;
    var7.errorCode = var12;
    var12 = var4.Critical;
    var7.severity = var12;
    var12 = var5.Video;
    var7.category = var12;
    var7.isErrorOutbound = var11;
    var3[var9] = var7;
    var9 = var6.NO_INPUT_DEVICES;
    var7 = {};
    var11 = 3001;
    var7.errorCode = var11;
    var11 = var4.Critical;
    var7.severity = var11;
    var11 = var5.Devices;
    var7.category = var11;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var9 = var6.NO_AUDIO_INPUT_DETECTED;
    var7 = {};
    var11 = 3002;
    var7.errorCode = var11;
    var11 = var4.Critical;
    var7.severity = var11;
    var11 = var5.Devices;
    var7.category = var11;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var9 = var6.SCREENSHARE_OS_NOT_SUPPORTED;
    var7 = {};
    var11 = 3003;
    var7.errorCode = var11;
    var11 = var4.Critical;
    var7.severity = var11;
    var11 = var5.Devices;
    var7.category = var11;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var9 = var6.SCREENSHARE_OS_ERROR;
    var7 = {};
    var11 = 3004;
    var7.errorCode = var11;
    var11 = var4.Critical;
    var7.severity = var11;
    var11 = var5.Devices;
    var7.category = var11;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var9 = var6.DEBUG_LOG_UPLOAD_FAILED;
    var7 = {};
    var11 = 4001;
    var7.errorCode = var11;
    var11 = var4.Info;
    var7.severity = var11;
    var11 = var5.Debug;
    var7.category = var11;
    var7.isErrorOutbound = var10;
    var3[var9] = var7;
    var _closure1_slot5 = var3;
    var3 = {};
    var7 = 'Unknown';
    var3.Unknown = var7;
    var7 = 'UploadErrorCodes.GENERAL';
    var3.UploadErrorGeneral = var7;
    var7 = 'UploadErrorCodes.NO_FILE';
    var3.UploadErrorNoFile = var7;
    var7 = 'UploadErrorCodes.PROGRESS';
    var3.UploadErrorProgress = var7;
    var7 = 'UploadErrorCodes.UPLOAD';
    var3.UploadErrorUpload = var7;
    var7 = 'UploadErrorCodes.READ';
    var3.UploadErrorRead = var7;
    var7 = 'NoiseCancellerError.CPU_OVERUSE';
    var3.NoiseCancellerCpuOveruse = var7;
    var7 = 'NoiseCancellerError.FAILED';
    var3.NoiseCancellerFailed = var7;
    var7 = 'NoiseCancellerError.VAD_CPU_OVERUSE';
    var3.NoiseCancellerVadCpuOveruse = var7;
    var7 = function() {
        _fun64518: for (var _fun64518_ip = 0;;) switch (_fun64518_ip) {
            case 0:
                var0 = global;
                var5 = var0.Object;
                var4 = var5.values;
                var3 = _closure1_slot5;
                var5 = var4.bind(var5)(var3);
                var4 = var5.map;
                var3 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var0 = var0.errorCode;
                    return var0;
                };
                var5 = var4.bind(var5)(var3);
                var _closure2_slot0 = var5;
                var3 = var0.Set;
                var4 = var3.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var3
                    }
                });
                var7 = var4;
                var6 = var5;
                var3 = new var7[var3](var6, var5);
                var3 = var3 instanceof Object ? var3 : var4;
                var4 = var5.length;
                var3 = var3.size;
                if (!(var4 === var3)) {
                    _fun64518_ip = 93;
                    continue _fun64518
                }
            case 89:
                var3 = undefined;
                return var3;
            case 93:
                var4 = var5.filter;
                var3 = function(arg0, arg1) { // Environment: var1
                    var2 = _closure2_slot0;
                    var1 = var2.indexOf;
                    var0 = arg0;
                    var1 = var1.bind(var2)(var0);
                    var0 = arg1;
                    var0 = var1 !== var0;
                    return var0;
                };
                var3 = var4.bind(var5)(var3);
                var _closure2_slot1 = var3;
                var4 = var0.Object;
                var3 = var4.entries;
                var2 = _closure1_slot5;
                var4 = var3.bind(var4)(var2);
                var3 = var4.filter;
                var2 = function(arg0) { // Environment: var1
                    _fun64521: for (var _fun64521_ip = 0;;) switch (_fun64521_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var0 = var3().value;
                            var0 = var1;
                            var5 = undefined;
                            var2 = var0 === var5;
                            var0 = undefined;
                            if (var2) {
                                _fun64521_ip = 49;
                                continue _fun64521
                            }
                        case 24:
                            var4 = var3().value;
                            var3 = var1;
                            var3 = var3 === var5;
                            var0 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun64521_ip = 49;
                                continue _fun64521
                            }
                        case 43:
                            var0 = var4;
                            var2 = var3;
                        case 49:
                            if (var2) {
                                _fun64521_ip = 55;
                                continue _fun64521
                            }
                        case 52:
                            var1.return();
                        case 55:
                            var2 = _closure2_slot1;
                            var1 = var2.includes;
                            var0 = var0.errorCode;
                            var0 = var1.bind(var2)(var0);
                            return var0;
                    }
                };
                var3 = var3.bind(var4)(var2);
                var2 = var3.map;
                var1 = function(arg0) { // Environment: var1
                    _fun64522: for (var _fun64522_ip = 0;;) switch (_fun64522_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = var3[Symbol.iterator];
                            var3 = var1().next;
                            var0 = var3().value;
                            var2 = var1;
                            var6 = undefined;
                            var2 = var2 === var6;
                            var4 = undefined;
                            if (var2) {
                                _fun64522_ip = 27;
                                continue _fun64522
                            }
                        case 24:
                            var4 = var0;
                        case 27:
                            var0 = undefined;
                            if (var2) {
                                _fun64522_ip = 57;
                                continue _fun64522
                            }
                        case 32:
                            var5 = var3().value;
                            var3 = var1;
                            var3 = var3 === var6;
                            var0 = undefined;
                            var2 = var3;
                            if (var3) {
                                _fun64522_ip = 57;
                                continue _fun64522
                            }
                        case 51:
                            var0 = var5;
                            var2 = var3;
                        case 57:
                            if (var2) {
                                _fun64522_ip = 63;
                                continue _fun64522
                            }
                        case 60:
                            var1.return();
                        case 63:
                            var3 = var0.errorCode;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var2 = var0.concat;
                            var1 = '';
                            var0 = ': ';
                            var0 = var2.bind(var1)(var4, var0, var3);
                            return var0;
                    }
                };
                var4 = var2.bind(var3)(var1);
                var2 = var0.Error;
                var3 = var4.join;
                var1 = '\n';
                var3 = var3.bind(var4)(var1);
                var0 = var0.HermesInternal;
                var1 = var0.concat;
                var0 = 'Duplicate AV error codes found:\n';
                var6 = var1.bind(var0)(var3);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var7 = var7.bind(var0)();
    var7 = 3;
    var8 = var8[var7];
    var7 = arg1;
    var9 = var7.bind(var0)(var8);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/errors/av_errors/AVError.tsx';
    var7 = var8.bind(var9)(var7);
    var2.AVError = var6;
    var2.AVErrorCategory = var5;
    var2.AVErrorSeverity = var4;
    var2.AVUnderlyingError = var3;
    var3 = function arg0() {
        var4 = arg0;
        var6 = var4.type;
        var3 = _closure1_slot3;
        var2 = _closure1_slot2;
        var0 = undefined;
        var9 = var3.bind(var0)(var4, var2);
        var5 = _closure1_slot4;
        var3 = var5.error;
        var2 = global;
        var8 = var2.JSON;
        var7 = var8.stringify;
        var9 = var7.bind(var8)(var9);
        var2 = var2.HermesInternal;
        var8 = var2.concat;
        var7 = 'AV error reported: ';
        var2 = ' ';
        var2 = var8.bind(var7)(var6, var2, var9);
        var2 = var3.bind(var5)(var2);
        var2 = _closure1_slot5;
        var5 = var2[var6];
        var2 = _closure1_slot0;
        var3 = _closure1_slot1;
        var1 = 2;
        var1 = var3[var1];
        var3 = var2.bind(var0)(var1);
        var2 = var3.dispatch;
        var1 = {};
        var7 = 'REPORT_AV_ERROR';
        var1.type = var7;
        var1.error = var6;
        var6 = var5.errorCode;
        var1.errorCode = var6;
        var6 = var5.severity;
        var1.severity = var6;
        var5 = var5.category;
        var1.category = var5;
        var1.context = var4;
        var1 = var2.bind(var3)(var1);
        return var0;
    };
    var2.reportAVError = var3;
    var1 = function arg0() {
        var1 = _closure1_slot5;
        var0 = arg0;
        var0 = var1[var0];
        return var0;
    };
    var2.getErrorInfo = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [29, 3, 806, 2]);