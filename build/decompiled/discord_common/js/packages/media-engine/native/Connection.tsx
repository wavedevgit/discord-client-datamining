// ../discord_common/js/packages/media-engine/native/Connection.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function(arg0, arg1) { // Original name: _createForOfIteratorHelperLoose, environment: var1
        _fun32237: for (var _fun32237_ip = 0;;) switch (_fun32237_ip) {
            case 0:
                var2 = arg0;
                var _closure2_slot0 = var2;
                var4 = global;
                var1 = var4.Symbol;
                var3 = 'undefined';
                var1 = typeof var1;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun32237_ip = 45;
                    continue _fun32237
                }
            case 30:
                var3 = var4.Symbol;
                var3 = var3.iterator;
                var1 = var2[var3];
            case 45:
                if (var1) {
                    _fun32237_ip = 54;
                    continue _fun32237
                }
            case 48:
                var1 = var2["@@iterator"];
            case 54:
                if (var1) {
                    _fun32237_ip = 342;
                    continue _fun32237
                }
            case 60:
                var5 = var4.Array;
                var3 = var5.isArray;
                var5 = var3.bind(var5)(var2);
                var3 = var1;
                if (var5) {
                    _fun32237_ip = 322;
                    continue _fun32237
                }
            case 85:
                var7 = undefined;
                var5 = undefined;
                if (!var2) {
                    _fun32237_ip = 282;
                    continue _fun32237
                }
            case 95:
                var8 = 'string';
                var6 = typeof var2;
                if (!(var8 !== var6)) {
                    _fun32237_ip = 269;
                    continue _fun32237
                }
            case 109:
                var6 = {};
                var8 = var6.toString;
                var6 = var8.call;
                var10 = var6.bind(var8)(var2);
                var9 = var10.slice;
                var8 = 8;
                var6 = -1;
                var8 = var9.bind(var10)(var8, var6);
                var6 = 'Object';
                var6 = var6 === var8;
                if (!var6) {
                    _fun32237_ip = 162;
                    continue _fun32237
                }
            case 157:
                var6 = var2.constructor;
            case 162:
                var9 = var8;
                if (!var6) {
                    _fun32237_ip = 178;
                    continue _fun32237
                }
            case 168:
                var6 = var2.constructor;
                var9 = var6.name;
            case 178:
                var6 = 'Map';
                if (!(var6 !== var9)) {
                    _fun32237_ip = 248;
                    continue _fun32237
                }
            case 186:
                var6 = 'Set';
                if (!(var6 !== var9)) {
                    _fun32237_ip = 248;
                    continue _fun32237
                }
            case 194:
                var6 = 'Arguments';
                if (!(var6 !== var9)) {
                    _fun32237_ip = 233;
                    continue _fun32237
                }
            case 204:
                var8 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
                var6 = var8.test;
                var8 = var6.bind(var8)(var9);
                var6 = undefined;
                if (!var8) {
                    _fun32237_ip = 246;
                    continue _fun32237
                }
            case 233:
                var8 = _closure1_slot38;
                var6 = var8.bind(var7)(var2, var7);
            case 246:
                _fun32237_ip = 264;
                continue _fun32237;
            case 248:
                var9 = var4.Array;
                var8 = var9.from;
                var6 = var8.bind(var9)(var2);
            case 264:
                var5 = var6;
                _fun32237_ip = 282;
                continue _fun32237;
            case 269:
                var6 = _closure1_slot38;
                var5 = var6.bind(var7)(var2, var7);
            case 282:
                var3 = var5;
                if (var3) {
                    _fun32237_ip = 322;
                    continue _fun32237
                }
            case 288:
                var6 = var4.TypeError;
                var4 = var6.prototype;
                var5 = Object.create(var4, {
                    constructor: {
                        value: var6
                    }
                });
                var12 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
                var13 = var5;
                var4 = new var13[var6](var12, var11);
                var4 = var4 instanceof Object ? var4 : var5;
                throw var4;
            case 322:
                if (!var3) {
                    _fun32237_ip = 329;
                    continue _fun32237
                }
            case 325:
                _closure2_slot0 = var3;
            case 329:
                var3 = 0;
                var _closure2_slot1 = var3;
                var0 = function() { // Environment: var0
                    _fun32238: for (var _fun32238_ip = 0;;) switch (_fun32238_ip) {
                        case 0:
                            var1 = _closure2_slot1;
                            var0 = _closure2_slot0;
                            var0 = var0.length;
                            if (!(!(var1 >= var0))) {
                                _fun32238_ip = 56;
                                continue _fun32238
                            }
                        case 20:
                            var0 = {};
                            var1 = false;
                            var0.done = var1;
                            var2 = _closure2_slot0;
                            var1 = _closure2_slot1;
                            var1 = parseFloat(var1);
                            var3 = var1 + 1;
                            _closure2_slot1 = var3;
                            var1 = var2[var1];
                            var0.value = var1;
                            _fun32238_ip = 67;
                            continue _fun32238;
                        case 56:
                            var1 = {};
                            var2 = true;
                            var1.done = var2;
                            var0 = var1;
                        case 67:
                            return var0;
                    }
                };
                return var0;
            case 342:
                var0 = var1.call;
                var2 = var0.bind(var1)(var2);
                var1 = var2.next;
                var0 = var1.bind;
                var0 = var0.bind(var1)(var2);
                return var0;
        }
    };
    var _closure1_slot37 = var0;
    var0 = function(arg0, arg1) { // Original name: _arrayLikeToArray, environment: var1
        _fun32239: for (var _fun32239_ip = 0;;) switch (_fun32239_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var2 = undefined;
                var0 = var0 == var2;
                if (var0) {
                    _fun32239_ip = 23;
                    continue _fun32239
                }
            case 14:
                var1 = var3.length;
                var0 = var2 > var1;
            case 23:
                var1 = undefined;
                if (!var0) {
                    _fun32239_ip = 33;
                    continue _fun32239
                }
            case 28:
                var1 = var3.length;
            case 33:
                var0 = global;
                var0 = var0.Array;
                var0 = var0.bind(var2)(var1);
                var2 = 0;
                var4 = var2 < var1;
                if (!var4) {
                    _fun32239_ip = 70;
                    continue _fun32239
                }
            case 55:
                var4 = var3[var2];
                var0[var2] = var4;
                var2 = var2 + 1;
                if (var2 < var1) {
                    _fun32239_ip = 55;
                    continue _fun32239
                }
            case 70:
                return var0;
        }
    };
    var _closure1_slot38 = var0;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun32240: for (var _fun32240_ip = 0;;) switch (_fun32240_ip) {
            case 0:
            case 2: // try_start_0
                var1 = global;
                var2 = var1.Boolean;
                var2 = var2.prototype;
                var3 = var2.valueOf;
                var2 = var3.call;
                var7 = var1.Reflect;
                var6 = var7.construct;
                var5 = var1.Boolean;
                var4 = new Array(0);
                var1 = function() { // Environment: var0
                    var0 = undefined;
                    return var0;
                };
                var1 = var6.bind(var7)(var5, var4, var1);
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                var _closure2_slot0 = var1;
            case 70: // try_end0
                _fun32240_ip = 74;
                continue _fun32240;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot39 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot39 = var0;
    var0 = function(arg0) { // Original name: makeRTXSSRC, environment: var1
        _fun32243: for (var _fun32243_ip = 0;;) switch (_fun32243_ip) {
            case 0:
                var2 = arg0;
                var0 = null;
                var3 = var0 != var2;
                var0 = 0;
                if (!var3) {
                    _fun32243_ip = 27;
                    continue _fun32243
                }
            case 14:
                var0 = 0;
                if (!(var0 !== var2)) {
                    _fun32243_ip = 27;
                    continue _fun32243
                }
            case 20:
                var1 = 1;
                var0 = var2 + var1;
            case 27:
                return var0;
        }
    };
    var _closure1_slot40 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var3 = 0;
    var7 = var5[var3];
    var0 = undefined;
    var7 = var6.bind(var0)(var7);
    var _closure1_slot3 = var7;
    var7 = 1;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot4 = var7;
    var7 = 2;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot5 = var7;
    var7 = 3;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot6 = var7;
    var7 = 4;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot7 = var7;
    var7 = 5;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot8 = var7;
    var7 = 6;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var _closure1_slot9 = var7;
    var7 = 7;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.StatsFilter;
    var _closure1_slot10 = var8;
    var8 = var7.ExperimentFlags;
    var _closure1_slot11 = var8;
    var8 = var7.DESKTOP_BITRATE_ENHANCED;
    var _closure1_slot12 = var8;
    var8 = var7.DESKTOP_BITRATE;
    var _closure1_slot13 = var8;
    var8 = var7.MEDIA_SINK_WANTS_PROPERTIES;
    var _closure1_slot14 = var8;
    var8 = var7.MediaTypes;
    var _closure1_slot15 = var8;
    var8 = var7.RTCPMessageTypes;
    var _closure1_slot16 = var8;
    var8 = var7.SIMULCAST_HQ_QUALITY;
    var _closure1_slot17 = var8;
    var7 = var7.SIMULCAST_LQ_QUALITY;
    var _closure1_slot18 = var7;
    var7 = 8;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var8 = var7.NATIVE_MODE_VALUES;
    var _closure1_slot19 = var8;
    var8 = var7.InputModes;
    var _closure1_slot20 = var8;
    var8 = var7.ConnectionStates;
    var _closure1_slot21 = var8;
    var8 = var7.Codecs;
    var _closure1_slot22 = var8;
    var8 = var7.MediaEngineContextTypes;
    var _closure1_slot23 = var8;
    var8 = var7.SpeakingFlags;
    var _closure1_slot24 = var8;
    var8 = var7.ResolutionTypes;
    var _closure1_slot25 = var8;
    var8 = var7.NativeFeatures;
    var _closure1_slot26 = var8;
    var8 = var7.NoiseCancellerError;
    var _closure1_slot27 = var8;
    var8 = var7.DEFAULT_VOLUME;
    var _closure1_slot28 = var8;
    var8 = var7.DEFAULT_STREAM_VOLUME;
    var _closure1_slot29 = var8;
    var8 = var7.DEFAULT_SOUNDSHARE_VOICE_BITRATE;
    var _closure1_slot30 = var8;
    var8 = var7.DEFAULT_CALL_BITRATE;
    var _closure1_slot31 = var8;
    var8 = var7.DEFAULT_CALL_MIN_BITRATE;
    var _closure1_slot32 = var8;
    var8 = var7.DEFAULT_CALL_MAX_BITRATE;
    var _closure1_slot33 = var8;
    var8 = var7.DEFAULT_PRIORITY_SPEAKER_DUCKING;
    var _closure1_slot34 = var8;
    var7 = var7.PING_INTERVAL;
    var _closure1_slot35 = var7;
    var _closure1_slot36 = var3;
    var3 = 22;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var4 = function(arg0, arg1, arg2) { // Original name: Connection, environment: var6
            _fun32245: for (var _fun32245_ip = 0;;) switch (_fun32245_ip) {
                case 0:
                    var6 = arg0;
                    var4 = this;
                    var0 = _closure1_slot4;
                    var1 = _closure2_slot0;
                    var5 = undefined;
                    var0 = var0.bind(var5)(var4, var1);
                    var11 = new Array(2);
                    var11[0] = var6;
                    var0 = arg1;
                    var11[1] = var0;
                    var0 = _closure1_slot7;
                    var10 = var0.bind(var5)(var1);
                    var1 = _closure1_slot6;
                    var0 = _closure1_slot39;
                    var0 = var0.bind(var5)();
                    if (var0) {
                        _fun32245_ip = 82;
                        continue _fun32245
                    }
                case 69:
                    var0 = var10.apply;
                    var0 = var0.bind(var10)(var4, var11);
                    _fun32245_ip = 116;
                    continue _fun32245;
                case 82:
                    var7 = global;
                    var9 = var7.Reflect;
                    var8 = var9.construct;
                    var7 = _closure1_slot7;
                    var7 = var7.bind(var5)(var4);
                    var7 = var7.constructor;
                    var0 = var8.bind(var9)(var10, var11, var7);
                case 116:
                    var0 = var1.bind(var5)(var4, var0);
                    var _closure3_slot0 = var0;
                    var1 = _closure1_slot36;
                    var4 = parseFloat(var1);
                    var1 = var4 + 1;
                    _closure1_slot36 = var1;
                    var1 = 'Native-';
                    var1 = var1 + var4;
                    var0.mediaEngineConnectionId = var1;
                    var8 = false;
                    var0.selfVideo = var8;
                    var1 = new Array(0);
                    var0.codecs = var1;
                    var0.videoEncoderFallbackPending = var8;
                    var1 = global;
                    var4 = var1.Set;
                    var7 = var4.prototype;
                    var7 = Object.create(var7, {
                        constructor: {
                            value: var4
                        }
                    });
                    var16 = var7;
                    var4 = new var16[var4](var15);
                    var4 = var4 instanceof Object ? var4 : var7;
                    var0.videoDecoderFallbackSent = var4;
                    var4 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var9 = 9;
                    var10 = var7[var9];
                    var11 = var4.bind(var5)(var10);
                    var10 = var11.getVoiceEngine;
                    var10 = var10.bind(var11)();
                    var10 = var10.DegradationPreference;
                    var10 = var10.MAINTAIN_FRAMERATE;
                    var0.desktopDegradationPreference = var10;
                    var10 = var7[var9];
                    var11 = var4.bind(var5)(var10);
                    var10 = var11.getVoiceEngine;
                    var10 = var10.bind(var11)();
                    var10 = var10.DegradationPreference;
                    var10 = var10.DISABLED;
                    var0.sourceDesktopDegradationPreference = var10;
                    var9 = var7[var9];
                    var10 = var4.bind(var5)(var9);
                    var9 = var10.getVoiceEngine;
                    var9 = var9.bind(var10)();
                    var9 = var9.DegradationPreference;
                    var9 = var9.BALANCED;
                    var0.videoDegradationPreference = var9;
                    var9 = {};
                    var0.localPans = var9;
                    var9 = {};
                    var0.remoteAudioSSRCs = var9;
                    var9 = {};
                    var0.remoteVideoSSRCs = var9;
                    var3 = _closure1_slot20;
                    var3 = var3.VOICE_ACTIVITY;
                    var0.inputMode = var3;
                    var3 = -40;
                    var0.vadThreshold = var3;
                    var3 = true;
                    var0.vadAutoThreshold = var3;
                    var9 = 0.5;
                    var0.vadKrispActivationThreshold = var9;
                    var0.vadUseKrisp = var3;
                    var10 = 5;
                    var0.vadLeading = var10;
                    var10 = 25;
                    var0.vadTrailing = var10;
                    var0.vadDuringPreProcess = var8;
                    var10 = 20;
                    var0.pttReleaseDelay = var10;
                    var0.soundshareActive = var8;
                    var10 = null;
                    var0.soundshareId = var10;
                    var0.soundshareSentSpeakingEvent = var8;
                    var0.echoCancellation = var3;
                    var0.noiseSuppression = var3;
                    var11 = {};
                    var11.enabled = var3;
                    var0.automaticGainControl = var11;
                    var0.noiseCancellation = var8;
                    var0.noiseCancellationDuringProcessing = var8;
                    var0.noiseCancellationAfterProcessing = var8;
                    var0.vadAfterWebrtc = var8;
                    var0.voiceFilterId = var10;
                    var0.attenuationFactor = var9;
                    var0.attenuateWhileSpeakingSelf = var8;
                    var0.attenuateWhileSpeakingOthers = var3;
                    var0.qos = var3;
                    var8 = 0;
                    var0.minimumJitterBufferLevel = var8;
                    var9 = 100;
                    var0.postponeDecodeLevel = var9;
                    var9 = 60000;
                    var0.reconnectInterval = var9;
                    var0.keyframeInterval = var8;
                    var0.clipsKeyFrameInterval = var8;
                    var9 = '';
                    var0.videoQualityMeasurement = var9;
                    var0.videoEncoderExperiments = var9;
                    var0.numFastUdpReconnects = var8;
                    var0.simulcastLQDisabledSsrc = var5;
                    var8 = -1;
                    var0.lastPreparedTransitionId = var8;
                    var0.lastExecutedTransitionId = var8;
                    var8 = function(arg0, arg1, arg2) { // Environment: var2
                        _fun32246: for (var _fun32246_ip = 0;;) switch (_fun32246_ip) {
                            case 0:
                                var0 = arg1;
                                var2 = _closure1_slot24;
                                var2 = var2.NONE;
                                var3 = 'boolean';
                                var2 = typeof var0;
                                var4 = var0;
                                if (!(var3 === var2)) {
                                    _fun32246_ip = 54;
                                    continue _fun32246
                                }
                            case 30:
                                var1 = _closure1_slot24;
                                if (var0) {
                                    _fun32246_ip = 45;
                                    continue _fun32246
                                }
                            case 37:
                                var0 = var1.NONE;
                                _fun32246_ip = 51;
                                continue _fun32246;
                            case 45:
                                var0 = var1.VOICE;
                            case 51:
                                var4 = var0;
                            case 54:
                                var3 = _closure3_slot0;
                                var2 = var3.handleSpeakingFlags;
                                var1 = arg0;
                                var0 = arg2;
                                var0 = var2.bind(var3)(var1, var4, var0);
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSpeakingNative = var8;
                    var8 = function() { // Environment: var2
                        var3 = _closure3_slot0;
                        var2 = var3.emit;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.BaseConnectionEvent;
                        var1 = var1.ToggleMuteFromNative;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleNativeMuteToggled = var8;
                    var8 = function(arg0) { // Environment: var2
                        var4 = _closure3_slot0;
                        var3 = var4.emit;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.BaseConnectionEvent;
                        var2 = var1.NativeMuteChanged;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0.handleNativeMuteChanged = var8;
                    var8 = function(arg0, arg1, arg2) { // Environment: var2
                        _fun32249: for (var _fun32249_ip = 0;;) switch (_fun32249_ip) {
                            case 0:
                                var10 = arg0;
                                var4 = arg1;
                                var0 = _closure3_slot0;
                                var1 = var0.localSpeakingFlags;
                                var1[var10] = var4;
                                var0 = var0.userId;
                                if (!(var10 !== var0)) {
                                    _fun32249_ip = 48;
                                    continue _fun32249
                                }
                            case 32:
                                var0 = _closure3_slot0;
                                var0 = var0.remoteAudioSSRCs;
                                var9 = var0[var10];
                                _fun32249_ip = 58;
                                continue _fun32249;
                            case 48:
                                var0 = _closure3_slot0;
                                var9 = var0.audioSSRC;
                            case 58:
                                var8 = _closure3_slot0;
                                var7 = var8.emit;
                                var6 = _closure1_slot0;
                                var0 = _closure1_slot2;
                                var5 = 10;
                                var3 = var0[var5];
                                var0 = undefined;
                                var3 = var6.bind(var0)(var3);
                                var3 = var3.BaseConnectionEvent;
                                var15 = var3.Speaking;
                                var11 = arg2;
                                var16 = var8;
                                var14 = var10;
                                var13 = var4;
                                var12 = var9;
                                var3 = var16[var7](var15, var14, var13, var12, var11, var10);
                                var3 = _closure1_slot24;
                                var3 = var3.SOUNDSHARE;
                                var3 = var4 & var3;
                                if (!var3) {
                                    _fun32249_ip = 157;
                                    continue _fun32249
                                }
                            case 141:
                                var4 = _closure3_slot0;
                                var6 = var4.soundshareSentSpeakingEvent;
                                var4 = false;
                                var3 = var4 === var6;
                            case 157:
                                if (!var3) {
                                    _fun32249_ip = 212;
                                    continue _fun32249
                                }
                            case 160:
                                var2 = _closure3_slot0;
                                var3 = var2.emit;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var1 = var1[var5];
                                var1 = var4.bind(var0)(var1);
                                var1 = var1.BaseConnectionEvent;
                                var1 = var1.SoundshareSpeaking;
                                var1 = var3.bind(var2)(var1);
                                var1 = true;
                                var2.soundshareSentSpeakingEvent = var1;
                            case 212:
                                return var0;
                        }
                    };
                    var0.handleSpeakingFlags = var8;
                    var8 = function() { // Environment: var2
                        var3 = _closure3_slot0;
                        var2 = var3.emit;
                        var4 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var4.bind(var0)(var1);
                        var1 = var1.BaseConnectionEvent;
                        var1 = var1.SpeakingWhileMuted;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleSpeakingWhileMuted = var8;
                    var8 = function(arg0) { // Environment: var2
                        var4 = _closure3_slot0;
                        var3 = var4.emit;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.BaseConnectionEvent;
                        var2 = var1.Ping;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0.handlePing = var8;
                    var8 = function(arg0, arg1, arg2, arg3) { // Environment: var2
                        _fun32252: for (var _fun32252_ip = 0;;) switch (_fun32252_ip) {
                            case 0:
                                var1 = arg3;
                                var5 = _closure3_slot0;
                                var4 = var5.emit;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 10;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var2 = var2.BaseConnectionEvent;
                                var3 = var2.PingTimeout;
                                var2 = 0;
                                var6 = var1 > var2;
                                var2 = 4000;
                                if (!var6) {
                                    _fun32252_ip = 71;
                                    continue _fun32252
                                }
                            case 68:
                                var2 = var1;
                            case 71:
                                var1 = arg2;
                                var1 = var4.bind(var5)(var3, var1, var2);
                                return var0;
                        }
                    };
                    var0.handlePingTimeout = var8;
                    var8 = function(arg0) { // Environment: var2
                        _fun32253: for (var _fun32253_ip = 0;;) switch (_fun32253_ip) {
                            case 0:
                                var6 = arg0;
                                var _closure4_slot0 = var6;
                                var2 = _closure3_slot0;
                                var2 = var2.videoEncoderFallbackPending;
                                if (var2) {
                                    _fun32253_ip = 178;
                                    continue _fun32253
                                }
                            case 28:
                                var1 = _closure3_slot0;
                                var4 = var1.logger;
                                var3 = var4.info;
                                var2 = global;
                                var2 = var2.HermesInternal;
                                var5 = var2.concat;
                                var2 = 'Falling back from current video encoder: ';
                                var2 = var5.bind(var2)(var6);
                                var2 = var3.bind(var4)(var2);
                                var4 = var1.codecs;
                                var3 = var4.map;
                                var2 = function(arg0) { // Environment: var0
                                    _fun32254: for (var _fun32254_ip = 0;;) switch (_fun32254_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var2 = _closure4_slot0;
                                            var1 = var0.name;
                                            var1 = var2 === var1;
                                            if (var1) {
                                                _fun32254_ip = 55;
                                                continue _fun32254
                                            }
                                        case 22:
                                            var4 = var0.name;
                                            var2 = 'AV1';
                                            var2 = var2 === var4;
                                            if (!var2) {
                                                _fun32254_ip = 52;
                                                continue _fun32254
                                            }
                                        case 38:
                                            var4 = _closure4_slot0;
                                            var3 = 'AV1X';
                                            var2 = var3 === var4;
                                        case 52:
                                            var1 = var2;
                                        case 55:
                                            if (!var1) {
                                                _fun32254_ip = 66;
                                                continue _fun32254
                                            }
                                        case 58:
                                            var1 = false;
                                            var0.encode = var1;
                                        case 66:
                                            return var0;
                                    }
                                };
                                var3 = var3.bind(var4)(var2);
                                var2 = var3.filter;
                                var0 = function(arg0) { // Environment: var0
                                    _fun32255: for (var _fun32255_ip = 0;;) switch (_fun32255_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var2 = var1.type;
                                            var0 = 'video';
                                            var0 = var0 === var2;
                                            if (!var0) {
                                                _fun32255_ip = 31;
                                                continue _fun32255
                                            }
                                        case 19:
                                            var3 = var1.encode;
                                            var2 = false;
                                            var0 = var2 === var3;
                                        case 31:
                                            if (!var0) {
                                                _fun32255_ip = 46;
                                                continue _fun32255
                                            }
                                        case 34:
                                            var2 = var1.decode;
                                            var1 = false;
                                            var0 = var1 === var2;
                                        case 46:
                                            var0 = !var0;
                                            return var0;
                                    }
                                };
                                var0 = var2.bind(var3)(var0);
                                var1.codecs = var0;
                                var3 = var1.emit;
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 10;
                                var2 = var2[var0];
                                var0 = undefined;
                                var0 = var4.bind(var0)(var2);
                                var0 = var0.BaseConnectionEvent;
                                var2 = var0.VideoEncoderFallback;
                                var0 = var1.codecs;
                                var0 = var3.bind(var1)(var2, var0);
                                var0 = true;
                                var1.videoEncoderFallbackPending = var0;
                            case 178:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleVideoEncoderFallback = var8;
                    var8 = function(arg0) { // Environment: var2
                        _fun32256: for (var _fun32256_ip = 0;;) switch (_fun32256_ip) {
                            case 0:
                                var6 = arg0;
                                var _closure4_slot0 = var6;
                                var2 = _closure3_slot0;
                                var3 = var2.videoDecoderFallbackSent;
                                var2 = var3.has;
                                var2 = var2.bind(var3)(var6);
                                if (var2) {
                                    _fun32256_ip = 196;
                                    continue _fun32256
                                }
                            case 38:
                                var3 = _closure3_slot0;
                                var2 = var3.videoDecoderFallbackSent;
                                var1 = var2.add;
                                var1 = var1.bind(var2)(var6);
                                var4 = var3.logger;
                                var2 = var4.info;
                                var1 = global;
                                var1 = var1.HermesInternal;
                                var5 = var1.concat;
                                var1 = 'Falling back from current video decoder: ';
                                var1 = var5.bind(var1)(var6);
                                var1 = var2.bind(var4)(var1);
                                var4 = var3.codecs;
                                var2 = var4.map;
                                var1 = function(arg0) { // Environment: var0
                                    _fun32257: for (var _fun32257_ip = 0;;) switch (_fun32257_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var2 = _closure4_slot0;
                                            var1 = var0.name;
                                            var1 = var2 === var1;
                                            if (var1) {
                                                _fun32257_ip = 55;
                                                continue _fun32257
                                            }
                                        case 22:
                                            var4 = var0.name;
                                            var2 = 'AV1';
                                            var2 = var2 === var4;
                                            if (!var2) {
                                                _fun32257_ip = 52;
                                                continue _fun32257
                                            }
                                        case 38:
                                            var4 = _closure4_slot0;
                                            var3 = 'AV1X';
                                            var2 = var3 === var4;
                                        case 52:
                                            var1 = var2;
                                        case 55:
                                            if (!var1) {
                                                _fun32257_ip = 66;
                                                continue _fun32257
                                            }
                                        case 58:
                                            var1 = false;
                                            var0.decode = var1;
                                        case 66:
                                            return var0;
                                    }
                                };
                                var2 = var2.bind(var4)(var1);
                                var1 = var2.filter;
                                var0 = function(arg0) { // Environment: var0
                                    _fun32258: for (var _fun32258_ip = 0;;) switch (_fun32258_ip) {
                                        case 0:
                                            var1 = arg0;
                                            var2 = var1.type;
                                            var0 = 'video';
                                            var0 = var0 === var2;
                                            if (!var0) {
                                                _fun32258_ip = 31;
                                                continue _fun32258
                                            }
                                        case 19:
                                            var3 = var1.encode;
                                            var2 = false;
                                            var0 = var2 === var3;
                                        case 31:
                                            if (!var0) {
                                                _fun32258_ip = 46;
                                                continue _fun32258
                                            }
                                        case 34:
                                            var2 = var1.decode;
                                            var1 = false;
                                            var0 = var1 === var2;
                                        case 46:
                                            var0 = !var0;
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                                var3.codecs = var0;
                                var2 = var3.emit;
                                var4 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 10;
                                var1 = var1[var0];
                                var0 = undefined;
                                var0 = var4.bind(var0)(var1);
                                var0 = var0.BaseConnectionEvent;
                                var1 = var0.VideoDecoderFallback;
                                var0 = var3.codecs;
                                var0 = var2.bind(var3)(var1, var0);
                            case 196:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleVideoDecoderFallback = var8;
                    var8 = function(arg0, arg1) { // Environment: var2
                        _fun32259: for (var _fun32259_ip = 0;;) switch (_fun32259_ip) {
                            case 0:
                                var2 = _closure1_slot16;
                                var3 = var2.REMB;
                                var2 = arg0;
                                if (!(var2 === var3)) {
                                    _fun32259_ip = 97;
                                    continue _fun32259
                                }
                            case 22:
                                var2 = _closure3_slot0;
                                var2 = var2.context;
                                var1 = _closure1_slot23;
                                var1 = var1.STREAM;
                                if (!(var2 === var1)) {
                                    _fun32259_ip = 97;
                                    continue _fun32259
                                }
                            case 48:
                                var1 = global;
                                var3 = var1.JSON;
                                var2 = var3.parse;
                                var1 = arg1;
                                var1 = var2.bind(var3)(var1);
                                var _closure4_slot0 = var1;
                                var2 = var1.ssrcs;
                                var1 = var2.forEach;
                                var0 = function(arg0) { // Environment: var0
                                    _fun32260: for (var _fun32260_ip = 0;;) switch (_fun32260_ip) {
                                        case 0:
                                            var10 = arg0;
                                            var _closure5_slot0 = var10;
                                            var1 = _closure3_slot0;
                                            var3 = var1.videoStreamParameters;
                                            var1 = var3.find;
                                            var0 = function(arg0) { // Environment: var0
                                                var0 = arg0;
                                                var1 = var0.ssrc;
                                                var0 = _closure5_slot0;
                                                var0 = var1 === var0;
                                                return var0;
                                            };
                                            var6 = var1.bind(var3)(var0);
                                            var0 = undefined;
                                            if (!(var0 !== var6)) {
                                                _fun32260_ip = 381;
                                                continue _fun32260
                                            }
                                        case 46:
                                            var1 = var6.quality;
                                            var7 = null;
                                            var5 = var7 != var1;
                                            var4 = 0;
                                            if (!var5) {
                                                _fun32260_ip = 66;
                                                continue _fun32260
                                            }
                                        case 63:
                                            var4 = var1;
                                        case 66:
                                            var1 = 100;
                                            if (!(var4 < var1)) {
                                                _fun32260_ip = 381;
                                                continue _fun32260
                                            }
                                        case 76:
                                            var4 = var6.type;
                                            var1 = 'video';
                                            if (!(var1 === var4)) {
                                                _fun32260_ip = 381;
                                                continue _fun32260
                                            }
                                        case 92:
                                            var1 = global;
                                            var8 = var1.Math;
                                            var5 = var8.floor;
                                            var4 = _closure4_slot0;
                                            var9 = var4.bitrate;
                                            var4 = 0.9;
                                            var4 = var4 * var9;
                                            var9 = var5.bind(var8)(var4);
                                            var5 = _closure1_slot1;
                                            var8 = _closure1_slot2;
                                            var4 = 11;
                                            var4 = var8[var4];
                                            var8 = var5.bind(var0)(var4);
                                            var4 = var6.minBitrate;
                                            var11 = var7 != var4;
                                            var5 = 0;
                                            if (!var11) {
                                                _fun32260_ip = 179;
                                                continue _fun32260
                                            }
                                        case 176:
                                            var5 = var4;
                                        case 179:
                                            var11 = var6.maxBitrate;
                                            var4 = var9;
                                            if (!(var7 != var11)) {
                                                _fun32260_ip = 195;
                                                continue _fun32260
                                            }
                                        case 192:
                                            var4 = var11;
                                        case 195:
                                            var4 = var8.bind(var0)(var9, var5, var4);
                                            var5 = var6.targetBitrate;
                                            var7 = var7 != var5;
                                            var3 = 0;
                                            if (!var7) {
                                                _fun32260_ip = 220;
                                                continue _fun32260
                                            }
                                        case 217:
                                            var3 = var5;
                                        case 220:
                                            var8 = var1.Math;
                                            var7 = var8.abs;
                                            var5 = var4 - var3;
                                            var5 = var7.bind(var8)(var5);
                                            var7 = var4 + var3;
                                            var3 = 2;
                                            var3 = var7 / var3;
                                            var5 = var5 / var3;
                                            var3 = 0.1;
                                            var3 = var5 > var3;
                                            if (var3) {
                                                _fun32260_ip = 283;
                                                continue _fun32260
                                            }
                                        case 273:
                                            var5 = var6.targetBitrate;
                                            var3 = var0 === var5;
                                        case 283:
                                            if (!var3) {
                                                _fun32260_ip = 381;
                                                continue _fun32260
                                            }
                                        case 286:
                                            var2 = _closure3_slot0;
                                            var5 = var2.logger;
                                            var3 = var5.info;
                                            var15 = var6.targetBitrate;
                                            var1 = var1.HermesInternal;
                                            var8 = var1.concat;
                                            var18 = 'Updating target bitrate for SSRC ';
                                            var16 = ' from ';
                                            var14 = ' to ';
                                            var17 = var10;
                                            var13 = var4;
                                            var1 = var18[var8](var17, var16, var15, var14, var13, var12);
                                            var1 = var3.bind(var5)(var1);
                                            var3 = var2.videoQualityManager;
                                            var1 = var3.setGoLiveSimulcastLQTargetBitrate;
                                            var1 = var1.bind(var3)(var4);
                                            var1 = var2.updateVideoQuality;
                                            var1 = var1.bind(var2)();
                                        case 381:
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var2)(var0);
                            case 97:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleRTCPMessage = var8;
                    var8 = function(arg0, arg1, arg2, arg3) { // Environment: var2
                        _fun32262: for (var _fun32262_ip = 0;;) switch (_fun32262_ip) {
                            case 0:
                                var9 = arg0;
                                var8 = arg1;
                                var3 = arg2;
                                var7 = arg3;
                                var4 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 12;
                                var1 = var1[var0];
                                var0 = undefined;
                                var10 = var4.bind(var0)(var1);
                                var6 = _closure3_slot0;
                                var4 = var6.videoStreamParameters;
                                var4 = var10.bind(var0)(var4);
                                var _closure4_slot0 = var4;
                                var6 = var6.userId;
                                if (!(var9 !== var6)) {
                                    _fun32262_ip = 208;
                                    continue _fun32262
                                }
                            case 73:
                                var12 = 0;
                                if (!(var8 > var12)) {
                                    _fun32262_ip = 324;
                                    continue _fun32262
                                }
                            case 82:
                                var6 = _closure3_slot0;
                                var6 = var6.remoteVideoSSRCs;
                                var6 = var6[var9];
                                if (!(var0 === var6)) {
                                    _fun32262_ip = 127;
                                    continue _fun32262
                                }
                            case 100:
                                var6 = _closure3_slot0;
                                var10 = var6.remoteVideoSSRCs;
                                var6 = new Array(1);
                                var6[0] = var8;
                                var10[var9] = var6;
                                _fun32262_ip = 324;
                                continue _fun32262;
                            case 127:
                                var6 = _closure3_slot0;
                                var6 = var6.remoteVideoSSRCs;
                                var10 = var6[var9];
                                var6 = var10.includes;
                                var6 = var6.bind(var10)(var8);
                                if (var6) {
                                    _fun32262_ip = 324;
                                    continue _fun32262
                                }
                            case 157:
                                var6 = _closure3_slot0;
                                var10 = var6.remoteVideoSSRCs;
                                var6 = var6.remoteVideoSSRCs;
                                var18 = var6[var9];
                                var6 = new Array(1);
                                var19 = var6;
                                var17 = 0;
                                var12 = arraySpread(var19, var18, var17);
                                var6[var12] = var8;
                                var11 = 1;
                                var11 = var12 + var11;
                                var10[var9] = var6;
                                _fun32262_ip = 324;
                                continue _fun32262;
                            case 208:
                                var6 = null;
                                if (!(var6 != var7)) {
                                    _fun32262_ip = 246;
                                    continue _fun32262
                                }
                            case 214:
                                var6 = global;
                                var10 = var6.Array;
                                var6 = var10.isArray;
                                var6 = var6.bind(var10)(var7);
                                if (!var6) {
                                    _fun32262_ip = 246;
                                    continue _fun32262
                                }
                            case 235:
                                var10 = var7.length;
                                var6 = 0;
                                if (!(!(var10 > var6))) {
                                    _fun32262_ip = 309;
                                    continue _fun32262
                                }
                            case 246:
                                var6 = 0;
                                if (!(!(var8 > var6))) {
                                    _fun32262_ip = 266;
                                    continue _fun32262
                                }
                            case 252:
                                var11 = var4[var6];
                                var10 = false;
                                var11.active = var10;
                                _fun32262_ip = 324;
                                continue _fun32262;
                            case 266:
                                var11 = var4[var6];
                                var10 = true;
                                var11.active = var10;
                                var10 = var4[var6];
                                var10.ssrc = var8;
                                var10 = var4[var6];
                                var6 = _closure1_slot40;
                                var6 = var6.bind(var0)(var8);
                                var10.rtxSsrc = var6;
                                _fun32262_ip = 324;
                                continue _fun32262;
                            case 309:
                                var6 = var7.forEach;
                                var5 = function(arg0) { // Environment: var5
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var2 = _closure4_slot0;
                                    var1 = var2.forEach;
                                    var0 = function(arg0, arg1) { // Environment: var0
                                        _fun32264: for (var _fun32264_ip = 0;;) switch (_fun32264_ip) {
                                            case 0:
                                                var4 = arg0;
                                                var2 = var4.rid;
                                                var1 = _closure5_slot0;
                                                var1 = var1.rid;
                                                if (!(var2 === var1)) {
                                                    _fun32264_ip = 135;
                                                    continue _fun32264
                                                }
                                            case 26:
                                                var1 = _closure3_slot0;
                                                var2 = var1.simulcastLQDisabledSsrc;
                                                var1 = _closure5_slot0;
                                                var1 = var1.ssrc;
                                                var3 = var2 !== var1;
                                                if (!var3) {
                                                    _fun32264_ip = 66;
                                                    continue _fun32264
                                                }
                                            case 56:
                                                var1 = _closure5_slot0;
                                                var3 = var1.active;
                                            case 66:
                                                var2 = _closure4_slot0;
                                                var1 = {};
                                                var7 = var1;
                                                var6 = var4;
                                                var4 = copyDataProperties(var7, var6);
                                                var0 = _closure5_slot0;
                                                var5 = var0.ssrc;
                                                var4 = 'ssrc';
                                                var1[var4] = var5;
                                                var4 = var0.rtxSsrc;
                                                var0 = 'rtxSsrc';
                                                var1[var0] = var4;
                                                var0 = 'active';
                                                var1[var0] = var3;
                                                var0 = arg1;
                                                var2[var0] = var1;
                                            case 135:
                                                var0 = undefined;
                                                return var0;
                                        }
                                    };
                                    var0 = var1.bind(var2)(var0);
                                    var0 = undefined;
                                    return var0;
                                };
                                var5 = var6.bind(var7)(var5);
                            case 324:
                                var7 = _closure3_slot0;
                                var7.videoStreamParameters = var4;
                                var6 = var7.emit;
                                var5 = _closure1_slot0;
                                var10 = _closure1_slot2;
                                var4 = 10;
                                var4 = var10[var4];
                                var4 = var5.bind(var0)(var4);
                                var4 = var4.BaseConnectionEvent;
                                var5 = var4.Video;
                                var11 = null;
                                var10 = var11 != var3;
                                var4 = null;
                                if (!var10) {
                                    _fun32262_ip = 396;
                                    continue _fun32262
                                }
                            case 383:
                                var10 = '';
                                var4 = null;
                                if (!(var10 !== var3)) {
                                    _fun32262_ip = 396;
                                    continue _fun32262
                                }
                            case 393:
                                var4 = var3;
                            case 396:
                                var3 = _closure3_slot0;
                                var3 = var3.userId;
                                if (!(var9 !== var3)) {
                                    _fun32262_ip = 425;
                                    continue _fun32262
                                }
                            case 409:
                                var3 = _closure3_slot0;
                                var3 = var3.remoteAudioSSRCs;
                                var3 = var3[var9];
                                _fun32262_ip = 435;
                                continue _fun32262;
                            case 425:
                                var10 = _closure3_slot0;
                                var3 = var10.audioSSRC;
                            case 435:
                                var2 = _closure1_slot40;
                                var14 = var2.bind(var0)(var8);
                                var1 = _closure3_slot0;
                                var13 = var1.videoStreamParameters;
                                var20 = var7;
                                var19 = var5;
                                var18 = var9;
                                var17 = var4;
                                var16 = var3;
                                var15 = var8;
                                var1 = var20[var6](var19, var18, var17, var16, var15, var14, var13, var12);
                                return var0;
                        }
                    };
                    var0.handleVideo = var8;
                    var8 = function(arg0, arg1, arg2) { // Environment: var2
                        var6 = _closure3_slot0;
                        var5 = var6.emit;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.BaseConnectionEvent;
                        var10 = var1.FirstFrame;
                        var9 = arg0;
                        var8 = arg1;
                        var7 = arg2;
                        var11 = var6;
                        var1 = var11[var5](var10, var9, var8, var7, var6);
                        return var0;
                    };
                    var0.handleFirstFrame = var8;
                    var8 = function(arg0) { // Environment: var2
                        var4 = _closure3_slot0;
                        var3 = var4.emit;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.BaseConnectionEvent;
                        var2 = var1.FirstFrameStats;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0.handleFirstFrameStats = var8;
                    var8 = function(arg0) { // Environment: var2
                        var4 = _closure3_slot0;
                        var3 = var4.emit;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.BaseConnectionEvent;
                        var2 = var1.FirstFrameEncryptedStats;
                        var1 = arg0;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0.handleFirstFrameEncryptedStats = var8;
                    var8 = function(arg0) { // Environment: var2
                        var4 = _closure3_slot0;
                        var3 = var4.emit;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.BaseConnectionEvent;
                        var2 = var1.Silence;
                        var1 = arg0;
                        var1 = !var1;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0.handleNoInput = var8;
                    var8 = function(arg0, arg1) { // Environment: var2
                        var5 = _closure3_slot0;
                        var4 = var5.emit;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.BaseConnectionEvent;
                        var3 = var1.DesktopSourceEnd;
                        var2 = arg0;
                        var1 = arg1;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var0;
                    };
                    var0.handleDesktopSourceEnded = var8;
                    var8 = function(arg0) { // Environment: var2
                        _fun32270: for (var _fun32270_ip = 0;;) switch (_fun32270_ip) {
                            case 0:
                                var0 = arg0;
                                if (!var0) {
                                    _fun32270_ip = 122;
                                    continue _fun32270
                                }
                            case 6:
                                var2 = _closure3_slot0;
                                var0 = true;
                                var2.soundshareActive = var0;
                                var4 = var2.conn;
                                var3 = var4.setTransportOptions;
                                var1 = {};
                                var0 = global;
                                var8 = var0.Math;
                                var7 = var8.max;
                                var6 = _closure1_slot30;
                                var5 = var2.voiceBitrate;
                                var5 = var7.bind(var8)(var6, var5);
                                var1.encodingVoiceBitRate = var5;
                                var1 = var3.bind(var4)(var1);
                                var1 = var2.emit;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 10;
                                var3 = var3[var0];
                                var0 = undefined;
                                var0 = var4.bind(var0)(var3);
                                var0 = var0.BaseConnectionEvent;
                                var0 = var0.SoundshareAttached;
                                var0 = var1.bind(var2)(var0);
                            case 122:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSoundshare = var8;
                    var8 = function(arg0, arg1, arg2) { // Environment: var2
                        var4 = _closure3_slot0;
                        var3 = var4.emit;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.BaseConnectionEvent;
                        var2 = var1.SoundshareFailed;
                        var1 = {};
                        var5 = arg0;
                        var1.failureCode = var5;
                        var5 = arg1;
                        var1.failureReason = var5;
                        var5 = arg2;
                        var1.willRetry = var5;
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                    };
                    var0.handleSoundshareFailed = var8;
                    var8 = function() { // Environment: var2
                        _fun32272: for (var _fun32272_ip = 0;;) switch (_fun32272_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = false;
                                var1.soundshareActive = var2;
                                var1 = var1.destroyed;
                                if (var1) {
                                    _fun32272_ip = 58;
                                    continue _fun32272
                                }
                            case 24:
                                var3 = _closure3_slot0;
                                var2 = var3.conn;
                                var1 = var2.setTransportOptions;
                                var0 = {};
                                var3 = var3.voiceBitrate;
                                var0.encodingVoiceBitRate = var3;
                                var0 = var1.bind(var2)(var0);
                            case 58:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSoundshareEnded = var8;
                    var8 = function(arg0) { // Environment: var2
                        _fun32273: for (var _fun32273_ip = 0;;) switch (_fun32273_ip) {
                            case 0:
                                var4 = arg0;
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 10;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var1 = var1.BaseConnectionEvent;
                                var1 = var1.ConnectionStateChange;
                                if (!(var4 === var1)) {
                                    _fun32273_ip = 69;
                                    continue _fun32273
                                }
                            case 44:
                                var3 = _closure3_slot0;
                                var2 = var3.emit;
                                var1 = var3.connectionState;
                                var1 = var2.bind(var3)(var4, var1);
                            case 69:
                                return var0;
                        }
                    };
                    var0.handleNewListenerNative = var8;
                    var8 = function(arg0) { // Environment: var2
                        _fun32274: for (var _fun32274_ip = 0;;) switch (_fun32274_ip) {
                            case 0:
                                var1 = arg0;
                                var2 = _closure3_slot0;
                                var5 = var2.connectionState;
                                var4 = _closure1_slot21;
                                var4 = var4.DISCONNECTED;
                                if (!(var5 === var4)) {
                                    _fun32274_ip = 96;
                                    continue _fun32274
                                }
                            case 35:
                                var7 = _closure3_slot0;
                                var6 = var7.off;
                                var8 = _closure1_slot0;
                                var5 = _closure1_slot2;
                                var4 = 10;
                                var5 = var5[var4];
                                var4 = undefined;
                                var4 = var8.bind(var4)(var5);
                                var4 = var4.BaseConnectionEvent;
                                var5 = var4.Stats;
                                var4 = var7.handleStats;
                                var4 = var6.bind(var7)(var5, var4);
                                _fun32274_ip = 984;
                                continue _fun32274;
                            case 96:
                                var8 = null;
                                if (!(var8 != var1)) {
                                    _fun32274_ip = 984;
                                    continue _fun32274
                                }
                            case 105:
                                var4 = _closure3_slot0;
                                var4 = var4.stats;
                                if (!(var8 != var4)) {
                                    _fun32274_ip = 974;
                                    continue _fun32274
                                }
                            case 122:
                                var5 = _closure1_slot1;
                                var10 = _closure1_slot2;
                                var4 = 13;
                                var6 = var10[var4];
                                var7 = undefined;
                                var13 = var5.bind(var7)(var6);
                                var6 = var1.rtp;
                                var12 = var6.outbound;
                                var9 = 0;
                                var11 = function(arg0, arg1) { // Environment: var3
                                    _fun32275: for (var _fun32275_ip = 0;;) switch (_fun32275_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = arg1;
                                            var5 = var0.lost;
                                            var6 = var3.packetsLost;
                                            var4 = null;
                                            var7 = var4 != var6;
                                            var1 = 0;
                                            if (!var7) {
                                                _fun32275_ip = 32;
                                                continue _fun32275
                                            }
                                        case 29:
                                            var1 = var6;
                                        case 32:
                                            var1 = var5 + var1;
                                            var0.lost = var1;
                                            var1 = var0.sent;
                                            var3 = var3.packetsSent;
                                            var4 = var4 != var3;
                                            var2 = 0;
                                            if (!var4) {
                                                _fun32275_ip = 66;
                                                continue _fun32275
                                            }
                                        case 63:
                                            var2 = var3;
                                        case 66:
                                            var1 = var1 + var2;
                                            var0.sent = var1;
                                            return var0;
                                    }
                                };
                                var6 = {
                                    'lost': 0,
                                    'sent': 0
                                };
                                var6 = var13.bind(var7)(var12, var11, var6);
                                var4 = var10[var4];
                                var11 = var5.bind(var7)(var4);
                                var4 = _closure3_slot0;
                                var4 = var4.stats;
                                var4 = var4.rtp;
                                var10 = var4.outbound;
                                var5 = function(arg0, arg1) { // Environment: var3
                                    _fun32276: for (var _fun32276_ip = 0;;) switch (_fun32276_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = arg1;
                                            var5 = var0.lost;
                                            var6 = var3.packetsLost;
                                            var4 = null;
                                            var7 = var4 != var6;
                                            var1 = 0;
                                            if (!var7) {
                                                _fun32276_ip = 32;
                                                continue _fun32276
                                            }
                                        case 29:
                                            var1 = var6;
                                        case 32:
                                            var1 = var5 + var1;
                                            var0.lost = var1;
                                            var1 = var0.sent;
                                            var3 = var3.packetsSent;
                                            var4 = var4 != var3;
                                            var2 = 0;
                                            if (!var4) {
                                                _fun32276_ip = 66;
                                                continue _fun32276
                                            }
                                        case 63:
                                            var2 = var3;
                                        case 66:
                                            var1 = var1 + var2;
                                            var0.sent = var1;
                                            return var0;
                                    }
                                };
                                var4 = {
                                    'lost': 0,
                                    'sent': 0
                                };
                                var5 = var11.bind(var7)(var10, var5, var4);
                                var10 = var6.sent;
                                var4 = var5.sent;
                                var4 = var10 - var4;
                                var6 = var6.lost;
                                var5 = var5.lost;
                                var5 = var6 - var5;
                                if (!(var9 !== var4)) {
                                    _fun32274_ip = 382;
                                    continue _fun32274
                                }
                            case 277:
                                if (!(var4 > var9)) {
                                    _fun32274_ip = 430;
                                    continue _fun32274
                                }
                            case 284:
                                if (!(var5 >= var9)) {
                                    _fun32274_ip = 430;
                                    continue _fun32274
                                }
                            case 291:
                                var10 = _closure1_slot1;
                                var12 = _closure1_slot2;
                                var6 = 11;
                                var6 = var12[var6];
                                var6 = var10.bind(var7)(var6);
                                var4 = var4 + var5;
                                var5 = var5 / var4;
                                var4 = 1;
                                var11 = var6.bind(var7)(var5, var9, var4);
                                var10 = _closure3_slot0;
                                var6 = var10.emit;
                                var5 = _closure1_slot0;
                                var4 = 10;
                                var4 = var12[var4];
                                var4 = var5.bind(var7)(var4);
                                var4 = var4.BaseConnectionEvent;
                                var5 = var4.OutboundLossRate;
                                var4 = 100;
                                var4 = var4 * var11;
                                var4 = var6.bind(var10)(var5, var4);
                                _fun32274_ip = 430;
                                continue _fun32274;
                            case 382:
                                var6 = _closure3_slot0;
                                var5 = var6.emit;
                                var10 = _closure1_slot0;
                                var11 = _closure1_slot2;
                                var4 = 10;
                                var4 = var11[var4];
                                var4 = var10.bind(var7)(var4);
                                var4 = var4.BaseConnectionEvent;
                                var4 = var4.OutboundLossRate;
                                var4 = var5.bind(var6)(var4, var9);
                            case 430:
                                var4 = var1.rtp;
                                var6 = var4.outbound;
                                var5 = var6.filter;
                                var4 = function(arg0) { // Environment: var3
                                    var0 = arg0;
                                    var1 = var0.type;
                                    var0 = 'audio';
                                    var0 = var0 === var1;
                                    return var0;
                                };
                                var4 = var5.bind(var6)(var4);
                                var5 = var4[var9];
                                var4 = _closure3_slot0;
                                var4 = var4.stats;
                                var4 = var4.rtp;
                                var6 = var4.outbound;
                                var4 = var6.filter;
                                var3 = function(arg0) { // Environment: var3
                                    var0 = arg0;
                                    var1 = var0.type;
                                    var0 = 'audio';
                                    var0 = var0 === var1;
                                    return var0;
                                };
                                var3 = var4.bind(var6)(var3);
                                var3 = var3[var9];
                                if (!(var8 != var5)) {
                                    _fun32274_ip = 974;
                                    continue _fun32274
                                }
                            case 509:
                                if (!(var8 != var3)) {
                                    _fun32274_ip = 974;
                                    continue _fun32274
                                }
                            case 516:
                                var4 = var5.framesCaptured;
                                if (!(var8 != var4)) {
                                    _fun32274_ip = 974;
                                    continue _fun32274
                                }
                            case 529:
                                var4 = var3.framesCaptured;
                                if (!(var8 != var4)) {
                                    _fun32274_ip = 974;
                                    continue _fun32274
                                }
                            case 542:
                                var6 = var5.framesCaptured;
                                var4 = var3.framesCaptured;
                                var4 = var6 - var4;
                                var6 = var5.noiseCancellerFrames;
                                var10 = var4;
                                if (!(var8 != var6)) {
                                    _fun32274_ip = 605;
                                    continue _fun32274
                                }
                            case 571:
                                var6 = var3.noiseCancellerFrames;
                                var11 = var8 != var6;
                                var6 = 0;
                                if (!var11) {
                                    _fun32274_ip = 602;
                                    continue _fun32274
                                }
                            case 586:
                                var12 = var5.noiseCancellerFrames;
                                var11 = var3.noiseCancellerFrames;
                                var6 = var12 - var11;
                            case 602:
                                var10 = var6;
                            case 605:
                                var6 = _closure3_slot0;
                                var6 = var6.noiseCancellation;
                                if (!var6) {
                                    _fun32274_ip = 806;
                                    continue _fun32274
                                }
                            case 621:
                                var6 = 50;
                                if (!(var10 > var6)) {
                                    _fun32274_ip = 806;
                                    continue _fun32274
                                }
                            case 631:
                                var6 = var5.noiseCancellerProcessTime;
                                if (!(var8 != var6)) {
                                    _fun32274_ip = 806;
                                    continue _fun32274
                                }
                            case 644:
                                var6 = var3.noiseCancellerProcessTime;
                                if (!(var8 != var6)) {
                                    _fun32274_ip = 806;
                                    continue _fun32274
                                }
                            case 657:
                                var11 = var5.noiseCancellerProcessTime;
                                var6 = var3.noiseCancellerProcessTime;
                                var6 = var11 - var6;
                                var11 = var6 / var10;
                                var10 = 8;
                                if (!(!(var11 > var10))) {
                                    _fun32274_ip = 748;
                                    continue _fun32274
                                }
                            case 684:
                                if (!(var9 === var6)) {
                                    _fun32274_ip = 806;
                                    continue _fun32274
                                }
                            case 688:
                                var11 = _closure3_slot0;
                                var10 = var11.emit;
                                var9 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var6 = 10;
                                var6 = var12[var6];
                                var6 = var9.bind(var7)(var6);
                                var6 = var6.BaseConnectionEvent;
                                var9 = var6.NoiseCancellationError;
                                var6 = _closure1_slot27;
                                var6 = var6.FAILED;
                                var6 = var10.bind(var11)(var9, var6);
                                _fun32274_ip = 806;
                                continue _fun32274;
                            case 748:
                                var11 = _closure3_slot0;
                                var10 = var11.emit;
                                var9 = _closure1_slot0;
                                var12 = _closure1_slot2;
                                var6 = 10;
                                var6 = var12[var6];
                                var6 = var9.bind(var7)(var6);
                                var6 = var6.BaseConnectionEvent;
                                var9 = var6.NoiseCancellationError;
                                var6 = _closure1_slot27;
                                var6 = var6.CPU_OVERUSE;
                                var6 = var10.bind(var11)(var9, var6);
                            case 806:
                                var6 = _closure3_slot0;
                                var9 = var6.inputMode;
                                var6 = _closure1_slot20;
                                var6 = var6.VOICE_ACTIVITY;
                                if (!(var9 === var6)) {
                                    _fun32274_ip = 974;
                                    continue _fun32274
                                }
                            case 833:
                                var6 = _closure3_slot0;
                                var6 = var6.vadAutoThreshold;
                                if (!var6) {
                                    _fun32274_ip = 974;
                                    continue _fun32274
                                }
                            case 849:
                                var6 = _closure3_slot0;
                                var6 = var6.vadUseKrisp;
                                if (!var6) {
                                    _fun32274_ip = 974;
                                    continue _fun32274
                                }
                            case 862:
                                var6 = 50;
                                if (!(var4 > var6)) {
                                    _fun32274_ip = 974;
                                    continue _fun32274
                                }
                            case 869:
                                var6 = var5.voiceActivityDetectorProcessTime;
                                if (!(var8 != var6)) {
                                    _fun32274_ip = 974;
                                    continue _fun32274
                                }
                            case 879:
                                var6 = var3.voiceActivityDetectorProcessTime;
                                if (!(var8 != var6)) {
                                    _fun32274_ip = 974;
                                    continue _fun32274
                                }
                            case 889:
                                var5 = var5.voiceActivityDetectorProcessTime;
                                var3 = var3.voiceActivityDetectorProcessTime;
                                var3 = var5 - var3;
                                var4 = var3 / var4;
                                var3 = 4;
                                if (!(var4 > var3)) {
                                    _fun32274_ip = 974;
                                    continue _fun32274
                                }
                            case 916:
                                var5 = _closure3_slot0;
                                var4 = var5.emit;
                                var6 = _closure1_slot0;
                                var8 = _closure1_slot2;
                                var3 = 10;
                                var3 = var8[var3];
                                var3 = var6.bind(var7)(var3);
                                var3 = var3.BaseConnectionEvent;
                                var3 = var3.VoiceActivityDetectorError;
                                var2 = _closure1_slot27;
                                var2 = var2.VAD_CPU_OVERUSE;
                                var2 = var4.bind(var5)(var3, var2);
                            case 974:
                                var0 = _closure3_slot0;
                                var0.stats = var1;
                            case 984:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleStats = var8;
                    var2 = function(arg0, arg1) { // Environment: var2
                        var5 = _closure3_slot0;
                        var4 = var5.emit;
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var1 = var1.BaseConnectionEvent;
                        var3 = var1.MLSFailure;
                        var2 = arg0;
                        var1 = arg1;
                        var1 = var4.bind(var5)(var3, var2, var1);
                        return var0;
                    };
                    var0.handleMLSFailure = var2;
                    var2 = arg2;
                    var0.videoSupported = var2;
                    var2 = 14;
                    var2 = var7[var2];
                    var2 = var4.bind(var5)(var2);
                    var4 = var2.Logger;
                    var1 = var1.HermesInternal;
                    var5 = var1.concat;
                    var2 = 'Connection(';
                    var1 = ')';
                    var15 = var5.bind(var2)(var6, var1);
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var4
                        }
                    });
                    var16 = var2;
                    var1 = new var16[var4](var15, var14);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var0.logger = var1;
                    var2 = var0.logger;
                    var1 = var2.enableNativeLogger;
                    var1 = var1.bind(var2)(var3);
                    return var0;
            }
        };
        var _closure2_slot0 = var4;
        var2 = _closure1_slot9;
        var3 = undefined;
        var1 = arg0;
        var1 = var2.bind(var3)(var4, var1);
        var2 = _closure1_slot5;
        var0 = {};
        var1 = 'initialize';
        var0.key = var1;
        var1 = function(arg0) { // Original name: value, environment: var6
            _fun32280: for (var _fun32280_ip = 0;;) switch (_fun32280_ip) {
                case 0:
                    var7 = arg0;
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var _closure3_slot1 = var7;
                    var5 = var4.logger;
                    var3 = var5.info;
                    var17 = var7.address;
                    var15 = var7.port;
                    var13 = var7.ssrc;
                    var0 = global;
                    var2 = var0.HermesInternal;
                    var9 = var2.concat;
                    var18 = 'Creating connection to ';
                    var16 = ':';
                    var14 = ' with audio ssrc: ';
                    var2 = var18[var9](var17, var16, var15, var14, var13, var12);
                    var2 = var3.bind(var5)(var2);
                    var2 = var0.performance;
                    var0 = var2.now;
                    var0 = var0.bind(var2)();
                    var4.beginInitializeAt = var0;
                    var0 = var7.ssrc;
                    var4.audioSSRC = var0;
                    var0 = var7.streamUserId;
                    var4.streamUserId = var0;
                    var2 = var4.initializeStreamParameters;
                    var0 = var7.streamParameters;
                    var0 = var2.bind(var4)(var0);
                    var3 = {};
                    var0 = _closure1_slot15;
                    var0 = var0.AUDIO;
                    var3.type = var0;
                    var0 = var4.audioSSRC;
                    var3.ssrc = var0;
                    var0 = '';
                    var3.rid = var0;
                    var0 = 64000;
                    var3.maxBitrate = var0;
                    var5 = var4.context;
                    var0 = _closure1_slot23;
                    var0 = var0.STREAM;
                    var0 = var5 === var0;
                    var3.soundshare = var0;
                    var0 = new Array(1);
                    var0[0] = var3;
                    var16 = var4.videoStreamParameters;
                    var15 = 1;
                    var17 = var0;
                    var3 = arraySpread(var17, var16, var15);
                    var7.streamParameters = var0;
                    var0 = var4.context;
                    var7.context = var0;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 9;
                    var3 = var3[var0];
                    var0 = undefined;
                    var5 = var5.bind(var0)(var3);
                    var3 = var5.getVoiceEngine;
                    var3 = var3.bind(var5)();
                    var _closure3_slot3 = var3;
                    var6 = var3.createOwnStreamConnectionWithOptions;
                    var5 = null;
                    if (!(var5 == var6)) {
                        _fun32280_ip = 389;
                        continue _fun32280
                    }
                case 311:
                    var6 = var3.createOwnStreamConnection;
                    if (!(var5 == var6)) {
                        _fun32280_ip = 328;
                        continue _fun32280
                    }
                case 321:
                    var6 = function(arg0, arg1, arg2) { // Original name: n, environment: var1
                        var0 = arg1;
                        var1 = _closure3_slot3;
                        var8 = var1.VoiceConnection;
                        var15 = var0.ssrc;
                        var13 = var0.address;
                        var12 = var0.port;
                        var10 = var0.experiments;
                        var9 = var0.streamParameters;
                        var0 = var8.prototype;
                        var1 = Object.create(var0, {
                            constructor: {
                                value: var8
                            }
                        });
                        var14 = arg0;
                        var11 = arg2;
                        var16 = var1;
                        var0 = new var16[var8](var15, var14, var13, var12, var11, var10, var9, var8);
                        var0 = var0 instanceof Object ? var0 : var1;
                        return var0;
                    };
                    _fun32280_ip = 440;
                    continue _fun32280;
                case 328:
                    var9 = var4.context;
                    var8 = _closure1_slot23;
                    var8 = var8.STREAM;
                    if (!(var9 === var8)) {
                        _fun32280_ip = 362;
                        continue _fun32280
                    }
                case 347:
                    var9 = var4.streamUserId;
                    var8 = var4.userId;
                    if (!(var9 !== var8)) {
                        _fun32280_ip = 372;
                        continue _fun32280
                    }
                case 362:
                    var8 = var3.createVoiceConnection;
                    _fun32280_ip = 378;
                    continue _fun32280;
                case 372:
                    var8 = var3.createOwnStreamConnection;
                case 378:
                    var _closure3_slot4 = var8;
                    var6 = function(arg0, arg1, arg2) { // Original name: n, environment: var1
                        var0 = arg1;
                        var8 = _closure3_slot4;
                        var15 = var0.ssrc;
                        var1 = _closure3_slot0;
                        var14 = var1.userId;
                        var13 = var0.address;
                        var12 = var0.port;
                        var10 = var0.experiments;
                        var9 = var0.streamParameters;
                        var16 = undefined;
                        var11 = arg2;
                        var0 = var16[var8](var15, var14, var13, var12, var11, var10, var9, var8);
                        return var0;
                    };
                    _fun32280_ip = 440;
                    continue _fun32280;
                case 389:
                    var8 = var4.context;
                    var2 = _closure1_slot23;
                    var2 = var2.STREAM;
                    if (!(var8 === var2)) {
                        _fun32280_ip = 423;
                        continue _fun32280
                    }
                case 408:
                    var8 = var4.streamUserId;
                    var2 = var4.userId;
                    if (!(var8 !== var2)) {
                        _fun32280_ip = 431;
                        continue _fun32280
                    }
                case 423:
                    var2 = var3.createVoiceConnectionWithOptions;
                    _fun32280_ip = 437;
                    continue _fun32280;
                case 431:
                    var2 = var3.createOwnStreamConnectionWithOptions;
                case 437:
                    var6 = var2;
                case 440:
                    var3 = var4.userId;
                    var2 = function(arg0, arg1) { // Environment: var1
                        _fun32283: for (var _fun32283_ip = 0;;) switch (_fun32283_ip) {
                            case 0:
                                var3 = arg0;
                                var2 = arg1;
                                var4 = _closure3_slot0;
                                var4 = var4.destroyed;
                                if (var4) {
                                    _fun32283_ip = 306;
                                    continue _fun32283
                                }
                            case 27:
                                var4 = null;
                                if (!(var4 != var3)) {
                                    _fun32283_ip = 44;
                                    continue _fun32283
                                }
                            case 33:
                                var5 = '';
                                if (!(var5 === var3)) {
                                    _fun32283_ip = 229;
                                    continue _fun32283
                                }
                            case 44:
                                if (!(var4 != var2)) {
                                    _fun32283_ip = 193;
                                    continue _fun32283
                                }
                            case 51:
                                var4 = _closure3_slot0;
                                var4.transportInfo = var2;
                                var13 = var2.protocol;
                                var _closure4_slot0 = var13;
                                var12 = var2.address;
                                var _closure4_slot1 = var12;
                                var11 = var2.port;
                                var _closure4_slot2 = var11;
                                var7 = var4.logger;
                                var6 = var7.info;
                                var2 = global;
                                var5 = var2.HermesInternal;
                                var10 = var5.concat;
                                var19 = 'Connected with local address ';
                                var17 = ':';
                                var15 = ' and protocol: ';
                                var18 = var12;
                                var16 = var11;
                                var14 = var13;
                                var5 = var19[var10](var18, var17, var16, var15, var14, var13);
                                var5 = var6.bind(var7)(var5);
                                var5 = var2.performance;
                                var2 = var5.now;
                                var2 = var2.bind(var5)();
                                var4.onConnectCallbackAt = var2;
                                var4 = _closure3_slot3;
                                var2 = var4.getCodecCapabilities;
                                var1 = function(arg0) { // Environment: var1
                                    var10 = arg0;
                                    var6 = _closure3_slot0;
                                    var3 = global;
                                    var4 = var3.performance;
                                    var0 = var4.now;
                                    var0 = var0.bind(var4)();
                                    var6.onVideoCodecsCallbackAt = var0;
                                    var5 = var6.logger;
                                    var4 = var5.info;
                                    var7 = var3.JSON;
                                    var0 = var7.stringify;
                                    var8 = var0.bind(var7)(var10);
                                    var0 = var3.HermesInternal;
                                    var7 = var0.concat;
                                    var0 = 'Available engine codecs: ';
                                    var0 = var7.bind(var0)(var8);
                                    var0 = var4.bind(var5)(var0);
                                    var8 = _closure1_slot0;
                                    var11 = _closure1_slot2;
                                    var5 = 15;
                                    var7 = var11[var5];
                                    var0 = undefined;
                                    var12 = var8.bind(var0)(var7);
                                    var9 = var12.getExperimentCodecs;
                                    var7 = var6.experimentFlags;
                                    var9 = var9.bind(var12)(var7);
                                    var13 = var6.logger;
                                    var12 = var13.info;
                                    var14 = var3.JSON;
                                    var7 = var14.stringify;
                                    var15 = var7.bind(var14)(var9);
                                    var7 = var3.HermesInternal;
                                    var14 = var7.concat;
                                    var7 = 'Experimental codecs: ';
                                    var7 = var14.bind(var7)(var15);
                                    var7 = var12.bind(var13)(var7);
                                    var12 = {
                                        'type': 'audio',
                                        'name': null,
                                        'priority': 1,
                                        'payloadType': 120
                                    };
                                    var4 = _closure1_slot22;
                                    var4 = var4.OPUS;
                                    var12.name = var4;
                                    var16 = 1;
                                    var4 = new Array(1);
                                    var4[0] = var12;
                                    var5 = var11[var5];
                                    var8 = var8.bind(var0)(var5);
                                    var5 = var8.filterVideoCodecs;
                                    var9 = var5.bind(var8)(var10, var9);
                                    var8 = var9.map;
                                    var5 = function(arg0, arg1) { // Environment: var1
                                        var1 = arg0;
                                        var4 = arg1;
                                        var0 = 2;
                                        var2 = var0 * var4;
                                        var0 = 101;
                                        var3 = var0 + var2;
                                        var0 = {};
                                        var2 = 'video';
                                        var0.type = var2;
                                        var2 = var1.name;
                                        var0.name = var2;
                                        var2 = 1;
                                        var4 = var4 + var2;
                                        var0.priority = var4;
                                        var0.payloadType = var3;
                                        var2 = var3 + var2;
                                        var0.rtxPayloadType = var2;
                                        var2 = var1.encode;
                                        var0.encode = var2;
                                        var1 = var1.decode;
                                        var0.decode = var1;
                                        return var0;
                                    };
                                    var17 = var8.bind(var9)(var5);
                                    var18 = var4;
                                    var5 = arraySpread(var18, var17, var16);
                                    var6.codecs = var4;
                                    var7 = var6.logger;
                                    var5 = var7.info;
                                    var9 = var6.codecs;
                                    var8 = var9.filter;
                                    var4 = function(arg0) { // Environment: var1
                                        var0 = arg0;
                                        var1 = var0.type;
                                        var0 = 'audio';
                                        var0 = var0 === var1;
                                        return var0;
                                    };
                                    var9 = var8.bind(var9)(var4);
                                    var8 = var9.map;
                                    var4 = function(arg0) { // Environment: var1
                                        var0 = arg0;
                                        var0 = var0.name;
                                        return var0;
                                    };
                                    var9 = var8.bind(var9)(var4);
                                    var4 = var3.HermesInternal;
                                    var8 = var4.concat;
                                    var4 = 'Audio codecs: ';
                                    var4 = var8.bind(var4)(var9);
                                    var4 = var5.bind(var7)(var4);
                                    var5 = var6.logger;
                                    var4 = var5.info;
                                    var8 = var6.codecs;
                                    var7 = var8.filter;
                                    var6 = function(arg0) { // Environment: var1
                                        var0 = arg0;
                                        var1 = var0.type;
                                        var0 = 'video';
                                        var0 = var0 === var1;
                                        return var0;
                                    };
                                    var8 = var7.bind(var8)(var6);
                                    var7 = var8.map;
                                    var6 = function(arg0) { // Environment: var1
                                        var0 = arg0;
                                        var2 = var0.name;
                                        var1 = '[encode: ';
                                        var2 = var2 + var1;
                                        var1 = var0.encode;
                                        var2 = var2 + var1;
                                        var1 = var0.decode;
                                        var0 = ', decode: ';
                                        var0 = var2 + var0;
                                        var1 = var0 + var1;
                                        var0 = ']';
                                        var0 = var1 + var0;
                                        return var0;
                                    };
                                    var7 = var7.bind(var8)(var6);
                                    var3 = var3.HermesInternal;
                                    var6 = var3.concat;
                                    var3 = 'Video codecs: ';
                                    var3 = var6.bind(var3)(var7);
                                    var3 = var4.bind(var5)(var3);
                                    var3 = _closure3_slot2;
                                    var2 = var3.getEncryptionModes;
                                    var1 = function(arg0) { // Environment: var1
                                        _fun32290: for (var _fun32290_ip = 0;;) switch (_fun32290_ip) {
                                            case 0:
                                                var13 = arg0;
                                                var0 = _closure3_slot0;
                                                var2 = global;
                                                var3 = var2.performance;
                                                var1 = var3.now;
                                                var1 = var1.bind(var3)();
                                                var0.onEncryptionModesCallbackAt = var1;
                                                var5 = var0.logger;
                                                var3 = var5.info;
                                                var1 = var2.HermesInternal;
                                                var6 = var1.concat;
                                                var1 = 'Encryption modes: ';
                                                var1 = var6.bind(var1)(var13);
                                                var1 = var3.bind(var5)(var1);
                                                var5 = _closure3_slot2;
                                                var3 = var5.setTransportOptions;
                                                var1 = var0.getConnectionTransportOptions;
                                                var1 = var1.bind(var0)();
                                                var1 = var3.bind(var5)(var1);
                                                var3 = _closure3_slot2;
                                                var1 = var3.setSelfMute;
                                                var0 = var0.selfMute;
                                                if (var0) {
                                                    _fun32290_ip = 144;
                                                    continue _fun32290
                                                }
                                            case 118:
                                                var5 = _closure3_slot0;
                                                var6 = var5.context;
                                                var5 = _closure1_slot23;
                                                var5 = var5.STREAM;
                                                var0 = var6 === var5;
                                            case 144:
                                                var0 = var1.bind(var3)(var0);
                                                var5 = _closure3_slot2;
                                                var3 = var5.setSelfDeafen;
                                                var0 = _closure3_slot0;
                                                var1 = var0.selfDeaf;
                                                var1 = var3.bind(var5)(var1);
                                                var3 = _closure3_slot2;
                                                var1 = var3.setOnSpeakingCallback;
                                                var0 = var0.handleSpeakingNative;
                                                var0 = var1.bind(var3)(var0);
                                                var0 = _closure3_slot2;
                                                var0 = var0.setOnNativeMuteToggleCallback;
                                                var1 = null;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 236;
                                                    continue _fun32290
                                                }
                                            case 211:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setOnNativeMuteToggleCallback;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handleNativeMuteToggled;
                                                var0 = var3.bind(var5)(var0);
                                            case 236:
                                                var0 = _closure3_slot2;
                                                var0 = var0.setOnNativeMuteChangedCallback;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 275;
                                                    continue _fun32290
                                                }
                                            case 250:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setOnNativeMuteChangedCallback;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handleNativeMuteChanged;
                                                var0 = var3.bind(var5)(var0);
                                            case 275:
                                                var0 = _closure3_slot2;
                                                var0 = var0.setOnSpeakingWhileMutedCallback;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 314;
                                                    continue _fun32290
                                                }
                                            case 289:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setOnSpeakingWhileMutedCallback;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handleSpeakingWhileMuted;
                                                var0 = var3.bind(var5)(var0);
                                            case 314:
                                                var0 = _closure3_slot2;
                                                var0 = var0.setPingInterval;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 350;
                                                    continue _fun32290
                                                }
                                            case 328:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setPingInterval;
                                                var0 = _closure1_slot35;
                                                var0 = var3.bind(var5)(var0);
                                            case 350:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setPingCallback;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handlePing;
                                                var0 = var3.bind(var5)(var0);
                                                var0 = _closure3_slot2;
                                                var0 = var0.setPingTimeoutCallback;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 414;
                                                    continue _fun32290
                                                }
                                            case 389:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setPingTimeoutCallback;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handlePingTimeout;
                                                var0 = var3.bind(var5)(var0);
                                            case 414:
                                                var0 = _closure3_slot2;
                                                var0 = var0.setOnVideoEncoderFallbackCallback;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 453;
                                                    continue _fun32290
                                                }
                                            case 428:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setOnVideoEncoderFallbackCallback;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handleVideoEncoderFallback;
                                                var0 = var3.bind(var5)(var0);
                                            case 453:
                                                var0 = _closure3_slot2;
                                                var0 = var0.setOnVideoDecoderFallbackCallback;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 492;
                                                    continue _fun32290
                                                }
                                            case 467:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setOnVideoDecoderFallbackCallback;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handleVideoDecoderFallback;
                                                var0 = var3.bind(var5)(var0);
                                            case 492:
                                                var0 = _closure3_slot2;
                                                var0 = var0.setOnRtcpMessageCallback;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 531;
                                                    continue _fun32290
                                                }
                                            case 506:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setOnRtcpMessageCallback;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handleRTCPMessage;
                                                var0 = var3.bind(var5)(var0);
                                            case 531:
                                                var6 = _closure3_slot3;
                                                var5 = var6.setTransportOptions;
                                                var3 = {};
                                                var0 = true;
                                                var3.builtInEchoCancellation = var0;
                                                var0 = _closure3_slot0;
                                                var7 = var0.echoCancellation;
                                                var3.echoCancellation = var7;
                                                var7 = var0.noiseSuppression;
                                                var3.noiseSuppression = var7;
                                                var7 = var0.automaticGainControl;
                                                var7 = var7.enabled;
                                                var3.automaticGainControl = var7;
                                                var7 = var0.automaticGainControl;
                                                var3.automaticGainControlConfig = var7;
                                                var7 = var0.noiseCancellation;
                                                var3.noiseCancellation = var7;
                                                var7 = var0.noiseCancellationDuringProcessing;
                                                var3.noiseCancellationDuringProcessing = var7;
                                                var7 = var0.noiseCancellationAfterProcessing;
                                                var3.noiseCancellationAfterProcessing = var7;
                                                var7 = var0.vadAfterWebrtc;
                                                var3.vadAfterWebrtc = var7;
                                                var7 = var0.voiceFilterId;
                                                var7 = var1 != var7;
                                                var3.voiceFilters = var7;
                                                var3 = var5.bind(var6)(var3);
                                                var5 = var6.setNoInputThreshold;
                                                var3 = -100;
                                                var3 = var5.bind(var6)(var3);
                                                var5 = var6.setNoInputCallback;
                                                var3 = var0.handleNoInput;
                                                var3 = var5.bind(var6)(var3);
                                                var0 = var0.videoSupported;
                                                if (!var0) {
                                                    _fun32290_ip = 1013;
                                                    continue _fun32290
                                                }
                                            case 715:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setOnVideoCallback;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handleVideo;
                                                var0 = var3.bind(var5)(var0);
                                                var0 = _closure3_slot2;
                                                var0 = var0.setOnFirstFrameCallback;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 779;
                                                    continue _fun32290
                                                }
                                            case 754:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setOnFirstFrameCallback;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handleFirstFrame;
                                                var0 = var3.bind(var5)(var0);
                                            case 779:
                                                var0 = _closure3_slot2;
                                                var0 = var0.setOnFirstFrameDeliveredStatsCallback;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 818;
                                                    continue _fun32290
                                                }
                                            case 793:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setOnFirstFrameDeliveredStatsCallback;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handleFirstFrameStats;
                                                var0 = var3.bind(var5)(var0);
                                            case 818:
                                                var0 = _closure3_slot2;
                                                var0 = var0.setOnFirstFrameEncryptedStatsCallback;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 857;
                                                    continue _fun32290
                                                }
                                            case 832:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setOnFirstFrameEncryptedStatsCallback;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handleFirstFrameEncryptedStats;
                                                var0 = var3.bind(var5)(var0);
                                            case 857:
                                                var0 = _closure3_slot2;
                                                var0 = var0.setOnDesktopSourceEnded;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 896;
                                                    continue _fun32290
                                                }
                                            case 871:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setOnDesktopSourceEnded;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handleDesktopSourceEnded;
                                                var0 = var3.bind(var5)(var0);
                                            case 896:
                                                var0 = _closure3_slot2;
                                                var0 = var0.setOnSoundshare;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 935;
                                                    continue _fun32290
                                                }
                                            case 910:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setOnSoundshare;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handleSoundshare;
                                                var0 = var3.bind(var5)(var0);
                                            case 935:
                                                var0 = _closure3_slot2;
                                                var0 = var0.setOnSoundshareEnded;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 974;
                                                    continue _fun32290
                                                }
                                            case 949:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setOnSoundshareEnded;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handleSoundshareEnded;
                                                var0 = var3.bind(var5)(var0);
                                            case 974:
                                                var0 = _closure3_slot2;
                                                var0 = var0.setOnSoundshareFailed;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 1013;
                                                    continue _fun32290
                                                }
                                            case 988:
                                                var5 = _closure3_slot2;
                                                var3 = var5.setOnSoundshareFailed;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handleSoundshareFailed;
                                                var0 = var3.bind(var5)(var0);
                                            case 1013:
                                                var0 = _closure3_slot2;
                                                var0 = var0.setOnMLSFailureCallback;
                                                if (!(var1 != var0)) {
                                                    _fun32290_ip = 1052;
                                                    continue _fun32290
                                                }
                                            case 1027:
                                                var3 = _closure3_slot2;
                                                var1 = var3.setOnMLSFailureCallback;
                                                var0 = _closure3_slot0;
                                                var0 = var0.handleMLSFailure;
                                                var0 = var1.bind(var3)(var0);
                                            case 1052:
                                                var1 = _closure3_slot0;
                                                var5 = var1.setConnectionState;
                                                var3 = _closure1_slot21;
                                                var3 = var3.CONNECTED;
                                                var3 = var5.bind(var1)(var3);
                                                var10 = var1.emit;
                                                var7 = _closure1_slot0;
                                                var8 = _closure1_slot2;
                                                var5 = 10;
                                                var3 = var8[var5];
                                                var0 = undefined;
                                                var3 = var7.bind(var0)(var3);
                                                var3 = var3.BaseConnectionEvent;
                                                var9 = var3.Connected;
                                                var6 = _closure4_slot0;
                                                var3 = {};
                                                var12 = _closure4_slot1;
                                                var3.address = var12;
                                                var11 = _closure4_slot2;
                                                var3.port = var11;
                                                var12 = var1.chooseEncryptionMode;
                                                var11 = _closure3_slot1;
                                                var11 = var11.modes;
                                                var11 = var12.bind(var1)(var11, var13);
                                                var3.mode = var11;
                                                var11 = var1.codecs;
                                                var3.codecs = var11;
                                                var3 = var10.bind(var1)(var9, var6, var3);
                                                var9 = var1.on;
                                                var3 = var8[var5];
                                                var3 = var7.bind(var0)(var3);
                                                var3 = var3.BaseConnectionEvent;
                                                var6 = var3.Stats;
                                                var3 = var1.handleStats;
                                                var3 = var9.bind(var1)(var6, var3);
                                                var3 = var1.getUserOptions;
                                                var3 = var3.bind(var1)();
                                                var9 = var3.forEach;
                                                var6 = function(arg0) { // Environment: var6
                                                    _fun32291: for (var _fun32291_ip = 0;;) switch (_fun32291_ip) {
                                                        case 0:
                                                            var0 = arg0;
                                                            var1 = _closure3_slot0;
                                                            var2 = var1.logger;
                                                            var1 = var2.info;
                                                            var8 = var0.id;
                                                            var7 = var0.ssrc;
                                                            var6 = var0.videoSsrcs;
                                                            var3 = null;
                                                            var4 = var3 == var6;
                                                            var0 = undefined;
                                                            if (var4) {
                                                                _fun32291_ip = 64;
                                                                continue _fun32291
                                                            }
                                                        case 50:
                                                            var5 = var6.join;
                                                            var4 = ',';
                                                            var0 = var5.bind(var6)(var4);
                                                        case 64:
                                                            var3 = var3 != var0;
                                                            var6 = 0;
                                                            if (!var3) {
                                                                _fun32291_ip = 76;
                                                                continue _fun32291
                                                            }
                                                        case 73:
                                                            var6 = var0;
                                                        case 76:
                                                            var0 = global;
                                                            var0 = var0.HermesInternal;
                                                            var5 = var0.concat;
                                                            var14 = 'Creating user: ';
                                                            var12 = ' with audio SSRC: ';
                                                            var10 = ' and video SSRCs: ';
                                                            var13 = var8;
                                                            var11 = var7;
                                                            var9 = var6;
                                                            var0 = var14[var5](var13, var12, var11, var10, var9, var8);
                                                            var0 = var1.bind(var2)(var0);
                                                            return var0;
                                                    }
                                                };
                                                var6 = var9.bind(var3)(var6);
                                                var6 = var1.mergeUsers;
                                                var6 = var6.bind(var1)(var3);
                                                var6 = var1.emit;
                                                var5 = var8[var5];
                                                var5 = var7.bind(var0)(var5);
                                                var5 = var5.BaseConnectionEvent;
                                                var5 = var5.RemoteStreamsReady;
                                                var3 = var3.length;
                                                var3 = var6.bind(var1)(var5, var3);
                                                var3 = var2.Object;
                                                var2 = var3.keys;
                                                var1 = var1.localSpeakingFlags;
                                                var3 = var2.bind(var3)(var1);
                                                var1 = var3.length;
                                                var2 = 0;
                                                var1 = var2 < var1;
                                                if (!var1) {
                                                    _fun32290_ip = 1401;
                                                    continue _fun32290
                                                }
                                            case 1346:
                                                var7 = var3[var2];
                                                var1 = _closure3_slot0;
                                                var1 = var1.userId;
                                                if (!(var7 !== var1)) {
                                                    _fun32290_ip = 1389;
                                                    continue _fun32290
                                                }
                                            case 1363:
                                                var6 = _closure3_slot0;
                                                var5 = var6.setSpeakingFlags;
                                                var1 = var6.localSpeakingFlags;
                                                var1 = var1[var7];
                                                var1 = var5.bind(var6)(var7, var1);
                                            case 1389:
                                                var2 = var2 + 1;
                                                var1 = var3.length;
                                                if (var2 < var1) {
                                                    _fun32290_ip = 1346;
                                                    continue _fun32290
                                                }
                                            case 1401:
                                                return var0;
                                        }
                                    };
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                };
                                var1 = var2.bind(var4)(var1);
                                _fun32283_ip = 306;
                                continue _fun32283;
                            case 193:
                                var1 = global;
                                var4 = var1.Error;
                                var1 = var4.prototype;
                                var2 = Object.create(var1, {
                                    constructor: {
                                        value: var4
                                    }
                                });
                                var18 = 'Invalid transport info';
                                var19 = var2;
                                var1 = new var19[var4](var18, var17);
                                var1 = var1 instanceof Object ? var1 : var2;
                                throw var1;
                            case 229:
                                var2 = _closure3_slot0;
                                var4 = var2.setConnectionState;
                                var1 = _closure1_slot21;
                                var1 = var1.NO_ROUTE;
                                var1 = var4.bind(var2)(var1);
                                var1 = var2.emit;
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var0 = 10;
                                var4 = var4[var0];
                                var0 = undefined;
                                var0 = var5.bind(var0)(var4);
                                var0 = var0.BaseConnectionEvent;
                                var0 = var0.Error;
                                var0 = var1.bind(var2)(var0, var3);
                                var0 = undefined;
                                return var0;
                            case 306:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var3 = var6.bind(var0)(var3, var7, var2);
                    var4.conn = var3;
                    var _closure3_slot2 = var3;
                    var2 = var3.setSecureFramesStateUpdateCallback;
                    if (!(var5 != var2)) {
                        _fun32280_ip = 493;
                        continue _fun32280
                    }
                case 477:
                    var6 = var3.setSecureFramesStateUpdateCallback;
                    var2 = function(arg0) { // Environment: var1
                        var4 = arg0;
                        var3 = _closure3_slot0;
                        var2 = var3.logger;
                        var1 = var2.info;
                        var0 = global;
                        var6 = var0.JSON;
                        var5 = var6.stringify;
                        var6 = var5.bind(var6)(var4);
                        var0 = var0.HermesInternal;
                        var5 = var0.concat;
                        var0 = 'DAVE protocol state update: ';
                        var0 = var5.bind(var0)(var6);
                        var0 = var1.bind(var2)(var0);
                        var2 = var3.emit;
                        var5 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 10;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var5.bind(var0)(var1);
                        var1 = var1.BaseConnectionEvent;
                        var1 = var1.SecureFramesUpdate;
                        var1 = var2.bind(var3)(var1, var4);
                        return var0;
                    };
                    var2 = var6.bind(var3)(var2);
                case 493:
                    var2 = var3.setDesktopSourceStatusCallback;
                    if (!(var5 != var2)) {
                        _fun32280_ip = 519;
                        continue _fun32280
                    }
                case 503:
                    var2 = var3.setDesktopSourceStatusCallback;
                    var1 = function(arg0) { // Environment: var1
                        _fun32293: for (var _fun32293_ip = 0;;) switch (_fun32293_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.type;
                                var1 = 'videohook_start';
                                if (!(var1 !== var2)) {
                                    _fun32293_ip = 675;
                                    continue _fun32293
                                }
                            case 21:
                                var2 = var0.type;
                                var1 = 'videohook_stop';
                                if (!(var1 !== var2)) {
                                    _fun32293_ip = 618;
                                    continue _fun32293
                                }
                            case 39:
                                var2 = var0.type;
                                var1 = 'videohook_initialize';
                                if (!(var1 !== var2)) {
                                    _fun32293_ip = 520;
                                    continue _fun32293
                                }
                            case 57:
                                var2 = var0.type;
                                var1 = 'screenshare_finish';
                                if (!(var1 !== var2)) {
                                    _fun32293_ip = 245;
                                    continue _fun32293
                                }
                            case 75:
                                var2 = var0.type;
                                var1 = 'video_state';
                                if (!(var1 !== var2)) {
                                    _fun32293_ip = 179;
                                    continue _fun32293
                                }
                            case 90:
                                var3 = var0.type;
                                var2 = var3.startsWith;
                                var1 = 'soundshare_';
                                var1 = var2.bind(var3)(var1);
                                if (!var1) {
                                    _fun32293_ip = 730;
                                    continue _fun32293
                                }
                            case 118:
                                var3 = _closure3_slot0;
                                var2 = var3.emit;
                                var5 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var1 = 10;
                                var4 = var4[var1];
                                var1 = undefined;
                                var1 = var5.bind(var1)(var4);
                                var1 = var1.BaseConnectionEvent;
                                var1 = var1.SoundshareTrace;
                                var1 = var2.bind(var3)(var1, var0);
                                _fun32293_ip = 730;
                                continue _fun32293;
                            case 179:
                                var4 = _closure3_slot0;
                                var3 = var4.emit;
                                var5 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 10;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var5.bind(var1)(var2);
                                var1 = var1.BaseConnectionEvent;
                                var2 = var1.VideoState;
                                var1 = var0.state;
                                var1 = var3.bind(var4)(var2, var1);
                                _fun32293_ip = 730;
                                continue _fun32293;
                            case 245:
                                var22 = _closure3_slot0;
                                var21 = var22.emit;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 10;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var1 = var1.BaseConnectionEvent;
                                var20 = var1.ScreenshareFinish;
                                var19 = var0.screenshareFrames;
                                var18 = var0.videohookFrames;
                                var17 = var0.hybridDxgiFrames;
                                var16 = var0.hybridGdiFrames;
                                var15 = var0.hybridVideohookFrames;
                                var14 = var0.hybridGraphicsCaptureFrames;
                                var13 = var0.hybridCaptureMethodSwitches;
                                var12 = var0.hybridGdiBitBltFrames;
                                var11 = var0.hybridGdiPrintWindowFrames;
                                var10 = var0.hybridGraphicsCaptureFramesUnique;
                                var9 = var0.hybridDxgiFramesUnique;
                                var8 = var0.hybridVideohookFramesUnique;
                                var7 = var0.hybridGdiBitBltFramesUnique;
                                var6 = var0.hybridGdiPrintWindowFramesUnique;
                                var5 = var0.quartzFrames;
                                var4 = var0.desktopCapturerType;
                                var1 = null;
                                if (!(var1 == var4)) {
                                    _fun32293_ip = 435;
                                    continue _fun32293
                                }
                            case 429:
                                var4 = var0.desktop_capturer_type;
                            case 435:
                                var25 = var0.activity;
                                var24 = var0.goLiveCameraFrames;
                                var23 = var0.screenCaptureKitFrames;
                                var43 = var22;
                                var42 = var20;
                                var41 = var19;
                                var40 = var18;
                                var39 = var17;
                                var38 = var16;
                                var37 = var15;
                                var36 = var14;
                                var35 = var13;
                                var34 = var12;
                                var33 = var11;
                                var32 = var10;
                                var31 = var9;
                                var30 = var8;
                                var29 = var7;
                                var28 = var6;
                                var27 = var5;
                                var26 = var4;
                                var1 = var43[var21](var42, var41, var40, var39, var38, var37, var36, var35, var34, var33, var32, var31, var30, var29, var28, var27, var26, var25, var24, var23, var22);
                                _fun32293_ip = 730;
                                continue _fun32293;
                            case 520:
                                var8 = _closure3_slot0;
                                var7 = var8.emit;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var1 = 10;
                                var2 = var2[var1];
                                var1 = undefined;
                                var1 = var3.bind(var1)(var2);
                                var1 = var1.BaseConnectionEvent;
                                var42 = var1.VideoHookInitialize;
                                var41 = var0.backend;
                                var40 = var0.format;
                                var39 = var0.framebufferFormat;
                                var38 = var0.sampleCount;
                                var37 = var0.success;
                                var36 = var0.reinitialization;
                                var43 = var8;
                                var0 = var43[var7](var42, var41, var40, var39, var38, var37, var36, var35);
                                _fun32293_ip = 730;
                                continue _fun32293;
                            case 618:
                                var2 = _closure3_slot0;
                                var1 = var2.emit;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 10;
                                var3 = var3[var0];
                                var0 = undefined;
                                var0 = var4.bind(var0)(var3);
                                var0 = var0.BaseConnectionEvent;
                                var0 = var0.VideoHookStop;
                                var0 = var1.bind(var2)(var0);
                                _fun32293_ip = 730;
                                continue _fun32293;
                            case 675:
                                var2 = _closure3_slot0;
                                var1 = var2.emit;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 10;
                                var3 = var3[var0];
                                var0 = undefined;
                                var0 = var4.bind(var0)(var3);
                                var0 = var0.BaseConnectionEvent;
                                var0 = var0.VideoHookStart;
                                var0 = var1.bind(var2)(var0);
                            case 730:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var2.bind(var3)(var1);
                case 519:
                    var3 = var4.on;
                    var2 = var4.handleNewListenerNative;
                    var1 = 'newListener';
                    var1 = var3.bind(var4)(var1, var2);
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(92);
        var1[0] = var0;
        var0 = {};
        var5 = 'destroy';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var5 = this;
            var _closure3_slot0 = var5;
            var2 = var5.conn;
            var1 = var2.destroy;
            var1 = var1.bind(var2)();
            var1 = global;
            var3 = var1.Object;
            var2 = var3.keys;
            var1 = var5.localSpeakingFlags;
            var3 = var2.bind(var3)(var1);
            var2 = var3.filter;
            var1 = function(arg0) { // Environment: var0
                var0 = _closure3_slot0;
                var1 = var0.userId;
                var0 = arg0;
                var0 = var0 !== var1;
                return var0;
            };
            var3 = var2.bind(var3)(var1);
            var2 = var3.forEach;
            var1 = function(arg0) { // Environment: var0
                var5 = arg0;
                var4 = _closure3_slot0;
                var3 = var4.emit;
                var6 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 10;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var6.bind(var1)(var2);
                var1 = var1.BaseConnectionEvent;
                var10 = var1.Speaking;
                var0 = _closure1_slot24;
                var8 = var0.NONE;
                var0 = var4.remoteAudioSSRCs;
                var7 = var0[var5];
                var11 = var4;
                var9 = var5;
                var0 = var11[var3](var10, var9, var8, var7, var6);
                return var0;
            };
            var1 = var2.bind(var3)(var1);
            var2 = var5.setConnectionState;
            var1 = _closure1_slot21;
            var1 = var1.DISCONNECTED;
            var1 = var2.bind(var5)(var1);
            var9 = _closure2_slot0;
            var3 = function(arg0, arg1, arg2, arg3) { // Original name: _superPropGet, environment: var0
                _fun32297: for (var _fun32297_ip = 0;;) switch (_fun32297_ip) {
                    case 0:
                        var4 = arg0;
                        var6 = arg2;
                        var _closure4_slot0 = var6;
                        var5 = _closure1_slot8;
                        var3 = _closure1_slot7;
                        var0 = 1;
                        var2 = 3;
                        var7 = var0 & var2;
                        var0 = var4;
                        if (!var7) {
                            _fun32297_ip = 44;
                            continue _fun32297
                        }
                    case 39:
                        var0 = var4.prototype;
                    case 44:
                        var4 = undefined;
                        var3 = var3.bind(var4)(var0);
                        var0 = 'destroy';
                        var4 = var5.bind(var4)(var3, var0, var6);
                        var _closure4_slot1 = var4;
                        var0 = 2;
                        var2 = var0 & var2;
                        var0 = var4;
                        if (!var2) {
                            _fun32297_ip = 98;
                            continue _fun32297
                        }
                    case 79:
                        var3 = 'function';
                        var2 = typeof var4;
                        var0 = var4;
                        if (!(var3 === var2)) {
                            _fun32297_ip = 98;
                            continue _fun32297
                        }
                    case 93:
                        var0 = function(arg0) { // Environment: var1
                            var3 = _closure4_slot1;
                            var2 = var3.apply;
                            var1 = _closure4_slot0;
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            return var0;
                        };
                    case 98:
                        return var0;
                }
            };
            var0 = undefined;
            var8 = 'destroy';
            var6 = 3;
            var10 = undefined;
            var7 = var5;
            var2 = var10[var3](var9, var8, var7, var6, var5);
            var1 = new Array(0);
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'setCodecs';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var6
            _fun32299: for (var _fun32299_ip = 0;;) switch (_fun32299_ip) {
                case 0:
                    var1 = this;
                    var3 = var1.conn;
                    var2 = var3.setTransportOptions;
                    var6 = var1.getCodecOptions;
                    var5 = arg0;
                    var4 = arg1;
                    var0 = arg2;
                    var0 = var6.bind(var1)(var5, var4, var0);
                    var0 = var2.bind(var3)(var0);
                    var0 = var1.videoEncoderFallbackPending;
                    if (!var0) {
                        _fun32299_ip = 61;
                        continue _fun32299
                    }
                case 53:
                    var0 = false;
                    var1.videoEncoderFallbackPending = var0;
                case 61:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getStats';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun32300: for (var _fun32300_ip = 0;;) switch (_fun32300_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var3 = var1.connectionState;
                    var2 = _closure1_slot21;
                    var2 = var2.DISCONNECTED;
                    if (!(var3 !== var2)) {
                        _fun32300_ip = 135;
                        continue _fun32300
                    }
                case 32:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 16;
                    var1 = var7[var1];
                    var5 = undefined;
                    var4 = var6.bind(var5)(var1);
                    var3 = var4.timeout;
                    var1 = global;
                    var8 = var1.Promise;
                    var1 = var8.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var8
                        }
                    });
                    var10 = function(arg0) { // Environment: var0
                        _fun32301: for (var _fun32301_ip = 0;;) switch (_fun32301_ip) {
                            case 0:
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var2 = _closure3_slot0;
                                var2 = var2.conn;
                                var2 = var2.getFilteredStats;
                                var3 = null;
                                if (!(var3 == var2)) {
                                    _fun32301_ip = 135;
                                    continue _fun32301
                                }
                            case 34:
                                var2 = _closure3_slot0;
                                var2 = var2.conn;
                                var2 = var2.getStats;
                                if (!(var3 == var2)) {
                                    _fun32301_ip = 107;
                                    continue _fun32301
                                }
                            case 54:
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var2 = 9;
                                var3 = var3[var2];
                                var2 = undefined;
                                var3 = var4.bind(var2)(var3);
                                var2 = var3.getVoiceEngine;
                                var4 = var2.bind(var3)();
                                var3 = var4.getStats;
                                var2 = function(arg0) { // Environment: var0
                                    var2 = _closure4_slot0;
                                    var3 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 17;
                                    var0 = var1[var0];
                                    var1 = undefined;
                                    var6 = var3.bind(var1)(var0);
                                    var0 = _closure3_slot0;
                                    var10 = var0.mediaEngineConnectionId;
                                    var8 = var0.remoteVideoSinkWants;
                                    var7 = var0.localVideoSinkWants;
                                    var9 = arg0;
                                    var11 = undefined;
                                    var0 = var11[var6](var10, var9, var8, var7, var6);
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var2 = var3.bind(var4)(var2);
                                _fun32301_ip = 175;
                                continue _fun32301;
                            case 107:
                                var2 = _closure3_slot0;
                                var4 = var2.conn;
                                var3 = var4.getStats;
                                var2 = function(arg0) { // Environment: var0
                                    var2 = _closure4_slot0;
                                    var3 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 17;
                                    var0 = var1[var0];
                                    var1 = undefined;
                                    var6 = var3.bind(var1)(var0);
                                    var0 = _closure3_slot0;
                                    var10 = var0.mediaEngineConnectionId;
                                    var8 = var0.remoteVideoSinkWants;
                                    var7 = var0.localVideoSinkWants;
                                    var9 = arg0;
                                    var11 = undefined;
                                    var0 = var11[var6](var10, var9, var8, var7, var6);
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var2 = var3.bind(var4)(var2);
                                _fun32301_ip = 175;
                                continue _fun32301;
                            case 135:
                                var1 = _closure3_slot0;
                                var3 = var1.conn;
                                var2 = var3.getFilteredStats;
                                var1 = _closure1_slot10;
                                var1 = var1.ALL;
                                var0 = function(arg0) { // Environment: var0
                                    var2 = _closure4_slot0;
                                    var3 = _closure1_slot1;
                                    var1 = _closure1_slot2;
                                    var0 = 17;
                                    var0 = var1[var0];
                                    var1 = undefined;
                                    var6 = var3.bind(var1)(var0);
                                    var0 = _closure3_slot0;
                                    var10 = var0.mediaEngineConnectionId;
                                    var8 = var0.remoteVideoSinkWants;
                                    var7 = var0.localVideoSinkWants;
                                    var9 = arg0;
                                    var11 = undefined;
                                    var0 = var11[var6](var10, var9, var8, var7, var6);
                                    var0 = var2.bind(var1)(var0);
                                    return var0;
                                };
                                var0 = var2.bind(var3)(var1, var0);
                            case 175:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var11 = var2;
                    var1 = new var11[var8](var10, var9);
                    var2 = var1 instanceof Object ? var1 : var2;
                    var1 = 18;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.STATS_INTERVAL;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = var2.catch;
                    var0 = function(arg0) { // Environment: var0
                        _fun32305: for (var _fun32305_ip = 0;;) switch (_fun32305_ip) {
                            case 0:
                                var1 = arg0;
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 16;
                                var2 = var2[var0];
                                var0 = undefined;
                                var2 = var3.bind(var0)(var2);
                                var2 = var2.TimeoutError;
                                var2 = var1 instanceof var2;
                                if (var2) {
                                    _fun32305_ip = 43;
                                    continue _fun32305
                                }
                            case 41:
                                throw var1;
                            case 43:
                                return var0;
                        }
                    };
                    var0 = var1.bind(var2)(var0);
                    _fun32300_ip = 156;
                    continue _fun32300;
                case 135:
                    var1 = global;
                    var3 = var1.Promise;
                    var2 = var3.resolve;
                    var1 = null;
                    var0 = var2.bind(var3)(var1);
                case 156:
                    return var0;
            }
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'createUser';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var6
            _fun32306: for (var _fun32306_ip = 0;;) switch (_fun32306_ip) {
                case 0:
                    var3 = arg0;
                    var12 = arg1;
                    var7 = arg2;
                    var2 = this;
                    var0 = var2.remoteAudioSSRCs;
                    var6 = var0[var3];
                    var0 = var2.remoteVideoSSRCs;
                    var9 = var0[var3];
                    var0 = null;
                    if (!(var0 != var6)) {
                        _fun32306_ip = 97;
                        continue _fun32306
                    }
                case 38:
                    var1 = 0;
                    if (!(var1 === var12)) {
                        _fun32306_ip = 97;
                        continue _fun32306
                    }
                case 44:
                    var5 = var2.logger;
                    var4 = var5.info;
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var10 = var1.concat;
                    var8 = 'Ignoring attempt to recreate user ';
                    var1 = ' with 0 audio SSRC';
                    var1 = var10.bind(var8)(var3, var1);
                    var1 = var4.bind(var5)(var1);
                    _fun32306_ip = 580;
                    continue _fun32306;
                case 97:
                    var1 = undefined;
                    if (!(var1 === var9)) {
                        _fun32306_ip = 109;
                        continue _fun32306
                    }
                case 103:
                    var8 = new Array(0);
                    _fun32306_ip = 135;
                    continue _fun32306;
                case 109:
                    var5 = new Array(0);
                    var15 = 0;
                    var17 = var5;
                    var16 = var9;
                    var4 = arraySpread(var17, var16, var15);
                    var4 = var5.sort;
                    var8 = var4.bind(var5)();
                case 135:
                    if (!(var1 !== var7)) {
                        _fun32306_ip = 167;
                        continue _fun32306
                    }
                case 139:
                    var5 = new Array(0);
                    var15 = 0;
                    var17 = var5;
                    var16 = var7;
                    var4 = arraySpread(var17, var16, var15);
                    var4 = var5.sort;
                    var7 = var4.bind(var5)();
                    _fun32306_ip = 181;
                    continue _fun32306;
                case 167:
                    var4 = var8;
                    if (!(var0 == var4)) {
                        _fun32306_ip = 178;
                        continue _fun32306
                    }
                case 174:
                    var4 = new Array(0);
                case 178:
                    var7 = var4;
                case 181:
                    var9 = _closure1_slot1;
                    var10 = _closure1_slot2;
                    var5 = 19;
                    var5 = var10[var5];
                    var5 = var9.bind(var1)(var5);
                    var5 = var5.bind(var1)(var8, var7);
                    var5 = !var5;
                    var8 = var2.remoteAudioSSRCs;
                    var8[var3] = var12;
                    var8 = var2.remoteVideoSSRCs;
                    var10 = var7;
                    var7 = var10;
                    if (!(var0 == var7)) {
                        _fun32306_ip = 243;
                        continue _fun32306
                    }
                case 239:
                    var7 = new Array(0);
                case 243:
                    var8[var3] = var7;
                    var7 = var2.userId;
                    if (!(var7 !== var3)) {
                        _fun32306_ip = 580;
                        continue _fun32306
                    }
                case 259:
                    if (!(var6 === var12)) {
                        _fun32306_ip = 269;
                        continue _fun32306
                    }
                case 263:
                    if (!var5) {
                        _fun32306_ip = 580;
                        continue _fun32306
                    }
                case 269:
                    var11 = 0;
                    var7 = 0;
                    if (!(var1 !== var10)) {
                        _fun32306_ip = 295;
                        continue _fun32306
                    }
                case 277:
                    var5 = var10.length;
                    var5 = var5 > var11;
                    var7 = 0;
                    if (!var5) {
                        _fun32306_ip = 295;
                        continue _fun32306
                    }
                case 291:
                    var7 = var10[var11];
                case 295:
                    var6 = {};
                    var6.id = var3;
                    var6.ssrc = var12;
                    var6.videoSsrc = var7;
                    var6.videoSsrcs = var10;
                    var5 = _closure1_slot40;
                    var5 = var5.bind(var1)(var7);
                    var6.rtxSsrc = var5;
                    var5 = var2.getLocalMute;
                    var5 = var5.bind(var2)(var3);
                    var6.mute = var5;
                    var5 = var2.getLocalVolume;
                    var5 = var5.bind(var2)(var3);
                    var6.volume = var5;
                    var7 = var2.connectionState;
                    var5 = _closure1_slot21;
                    var5 = var5.CONNECTED;
                    if (!(var7 === var5)) {
                        _fun32306_ip = 497;
                        continue _fun32306
                    }
                case 382:
                    var7 = var2.logger;
                    var5 = var7.info;
                    var8 = var0 == var10;
                    var1 = undefined;
                    if (var8) {
                        _fun32306_ip = 417;
                        continue _fun32306
                    }
                case 403:
                    var9 = var10.join;
                    var8 = ',';
                    var1 = var9.bind(var10)(var8);
                case 417:
                    var8 = var0 != var1;
                    var11 = 0;
                    if (!var8) {
                        _fun32306_ip = 429;
                        continue _fun32306
                    }
                case 426:
                    var11 = var1;
                case 429:
                    var1 = global;
                    var1 = var1.HermesInternal;
                    var10 = var1.concat;
                    var18 = 'Creating user: ';
                    var16 = ' with audio SSRC: ';
                    var14 = ' and video SSRCs: ';
                    var17 = var3;
                    var15 = var12;
                    var13 = var11;
                    var1 = var18[var10](var17, var16, var15, var14, var13, var12);
                    var1 = var5.bind(var7)(var1);
                    var5 = var2.mergeUsers;
                    var1 = new Array(1);
                    var1[0] = var6;
                    var1 = var5.bind(var2)(var1);
                case 497:
                    var1 = var2.localPans;
                    var1 = var1[var3];
                    if (!(var0 != var1)) {
                        _fun32306_ip = 534;
                        continue _fun32306
                    }
                case 511:
                    var6 = var2.setLocalPan;
                    var5 = var1.left;
                    var1 = var1.right;
                    var1 = var6.bind(var2)(var3, var5, var1);
                case 534:
                    var1 = var2.localSpeakingFlags;
                    var1 = var1[var3];
                    var0 = var0 != var1;
                    if (!var0) {
                        _fun32306_ip = 565;
                        continue _fun32306
                    }
                case 551:
                    var4 = _closure1_slot24;
                    var4 = var4.NONE;
                    var0 = var1 !== var4;
                case 565:
                    if (!var0) {
                        _fun32306_ip = 580;
                        continue _fun32306
                    }
                case 568:
                    var0 = var2.setSpeakingFlags;
                    var0 = var0.bind(var2)(var3, var1);
                case 580:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[4] = var0;
        var0 = {};
        var5 = 'destroyUser';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32307: for (var _fun32307_ip = 0;;) switch (_fun32307_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var0.remoteAudioSSRCs;
                    var3 = var2[var1];
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun32307_ip = 59;
                        continue _fun32307
                    }
                case 22:
                    var3 = var0.conn;
                    var2 = var3.destroyUser;
                    var2 = var2.bind(var3)(var1);
                    var2 = var0.remoteAudioSSRCs;
                    var2 = delete var2[var1];
                    var0 = var0.remoteVideoSSRCs;
                    var0 = delete var0[var1];
                case 59:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[5] = var0;
        var0 = {};
        var5 = 'setSelfMute';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var4 = arg0;
            var3 = this;
            var3.selfMute = var4;
            var1 = var3.conn;
            var0 = var1.setSelfMute;
            var0 = var0.bind(var1)(var4);
            var2 = var3.emit;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var5.bind(var0)(var1);
            var1 = var1.BaseConnectionEvent;
            var1 = var1.Mute;
            var1 = var2.bind(var3)(var1, var4);
            return var0;
        };
        var0.value = var5;
        var1[6] = var0;
        var0 = {};
        var5 = 'getSelfMute';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = this;
            var0 = var0.selfMute;
            return var0;
        };
        var0.value = var5;
        var1[7] = var0;
        var0 = {};
        var5 = 'getSelfDeaf';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = this;
            var0 = var0.selfDeaf;
            return var0;
        };
        var0.value = var5;
        var1[8] = var0;
        var0 = {};
        var5 = 'setSelfDeaf';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var4 = arg0;
            var3 = this;
            var3.selfDeaf = var4;
            var1 = var3.conn;
            var0 = var1.setSelfDeafen;
            var0 = var0.bind(var1)(var4);
            var2 = var3.emit;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var5.bind(var0)(var1);
            var1 = var1.BaseConnectionEvent;
            var1 = var1.Deafen;
            var1 = var2.bind(var3)(var1, var4);
            return var0;
        };
        var0.value = var5;
        var1[9] = var0;
        var0 = {};
        var5 = 'setSoundshareSource';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var6
            _fun32312: for (var _fun32312_ip = 0;;) switch (_fun32312_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var1 = var0.soundshareId;
                    if (!(var1 === var3)) {
                        _fun32312_ip = 25;
                        continue _fun32312
                    }
                case 16:
                    var1 = var0.soundshareSentSpeakingEvent;
                    if (var1) {
                        _fun32312_ip = 112;
                        continue _fun32312
                    }
                case 25:
                    var2 = var0.context;
                    var1 = _closure1_slot23;
                    var1 = var1.STREAM;
                    if (!(var2 === var1)) {
                        _fun32312_ip = 112;
                        continue _fun32312
                    }
                case 47:
                    var0.soundshareId = var3;
                    var1 = false;
                    var0.soundshareSentSpeakingEvent = var1;
                    var1 = null;
                    if (!(var1 === var3)) {
                        _fun32312_ip = 69;
                        continue _fun32312
                    }
                case 67:
                    var3 = 0;
                case 69:
                    var2 = var0.conn;
                    var1 = var2.setTransportOptions;
                    var0 = {};
                    var0.soundsharePid = var3;
                    var3 = true;
                    var0.soundshareEventDriven = var3;
                    var3 = arg1;
                    var0.soundshareLoopback = var3;
                    var0 = var1.bind(var2)(var0);
                case 112:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[10] = var0;
        var0 = {};
        var5 = 'setLocalMute';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var6
            var5 = arg0;
            var4 = arg1;
            var3 = this;
            var0 = var3.localMutes;
            var0[var5] = var4;
            var1 = var3.conn;
            var0 = var1.setLocalMute;
            var0 = var0.bind(var1)(var5, var4);
            var2 = var3.emit;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var1 = var1.BaseConnectionEvent;
            var1 = var1.LocalMute;
            var1 = var2.bind(var3)(var1, var5, var4);
            return var0;
        };
        var0.value = var5;
        var1[11] = var0;
        var0 = {};
        var5 = 'fastUdpReconnect';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun32314: for (var _fun32314_ip = 0;;) switch (_fun32314_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.conn;
                    var2 = var1.fastUdpReconnect;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun32314_ip = 56;
                        continue _fun32314
                    }
                case 21:
                    var2 = var0.numFastUdpReconnects;
                    var1 = 1;
                    var1 = var2 + var1;
                    var0.numFastUdpReconnects = var1;
                    var1 = var0.conn;
                    var0 = var1.fastUdpReconnect;
                    var0 = var0.bind(var1)();
                case 56:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[12] = var0;
        var0 = {};
        var5 = 'getNumFastUdpReconnects';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun32315: for (var _fun32315_ip = 0;;) switch (_fun32315_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.conn;
                    var2 = var0.fastUdpReconnect;
                    var0 = null;
                    var2 = var0 != var2;
                    if (!var2) {
                        _fun32315_ip = 30;
                        continue _fun32315
                    }
                case 24:
                    var0 = var1.numFastUdpReconnects;
                case 30:
                    return var0;
            }
        };
        var0.value = var5;
        var1[13] = var0;
        var0 = {};
        var5 = 'wasRemoteDisconnected';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun32316: for (var _fun32316_ip = 0;;) switch (_fun32316_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.conn;
                    var1 = var2.wasRemoteDisconnected;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun32316_ip = 31;
                        continue _fun32316
                    }
                case 21:
                    var0 = var1.call;
                    var0 = var0.bind(var1)(var2);
                case 31:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[14] = var0;
        var0 = {};
        var5 = 'setLocalVideoDisabled';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var6
            var5 = arg0;
            var4 = arg1;
            var3 = this;
            var0 = var3.disabledLocalVideos;
            var0[var5] = var4;
            var2 = var3.emit;
            var6 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var1 = var1.BaseConnectionEvent;
            var1 = var1.LocalVideoDisabled;
            var1 = var2.bind(var3)(var1, var5, var4);
            return var0;
        };
        var0.value = var5;
        var1[15] = var0;
        var0 = {};
        var5 = 'setMinimumJitterBufferLevel';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var1 = arg0;
            var0 = this;
            var0.minimumJitterBufferLevel = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[16] = var0;
        var0 = {};
        var5 = 'setPostponeDecodeLevel';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var1 = arg0;
            var0 = this;
            var0.postponeDecodeLevel = var1;
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[17] = var0;
        var0 = {};
        var5 = 'setClipRecordUser';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var6
            _fun32320: for (var _fun32320_ip = 0;;) switch (_fun32320_ip) {
                case 0:
                    var6 = arg1;
                    var0 = this;
                    var1 = var0.destroyed;
                    if (var1) {
                        _fun32320_ip = 127;
                        continue _fun32320
                    }
                case 15:
                    var5 = 'soundboardAudio';
                    var1 = 'soundboard';
                    if (!(var1 !== var6)) {
                        _fun32320_ip = 85;
                        continue _fun32320
                    }
                case 29:
                    var2 = var0.context;
                    var1 = _closure1_slot23;
                    var1 = var1.STREAM;
                    var3 = 'user';
                    if (!(var2 === var1)) {
                        _fun32320_ip = 59;
                        continue _fun32320
                    }
                case 55:
                    var3 = 'application';
                case 59:
                    var2 = var3.concat;
                    var1 = 'Video';
                    var4 = 'audio';
                    if (!(var4 === var6)) {
                        _fun32320_ip = 80;
                        continue _fun32320
                    }
                case 76:
                    var1 = 'Audio';
                case 80:
                    var5 = var2.bind(var3)(var1);
                case 85:
                    var4 = var0.conn;
                    var3 = var4.setClipRecordUser;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun32320_ip = 127;
                        continue _fun32320
                    }
                case 103:
                    var2 = var3.call;
                    var9 = arg0;
                    var7 = arg2;
                    var11 = var3;
                    var10 = var4;
                    var8 = var5;
                    var0 = var11[var2](var10, var9, var8, var7, var6);
                case 127:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[18] = var0;
        var0 = {};
        var5 = 'setClipsKeyFrameInterval';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32321: for (var _fun32321_ip = 0;;) switch (_fun32321_ip) {
                case 0:
                    var3 = this;
                    var1 = var3.context;
                    var0 = _closure1_slot23;
                    var0 = var0.STREAM;
                    if (!(var1 === var0)) {
                        _fun32321_ip = 85;
                        continue _fun32321
                    }
                case 25:
                    var0 = arg0;
                    var3.clipsKeyFrameInterval = var0;
                    var2 = var3.conn;
                    var1 = var2.setTransportOptions;
                    var0 = {};
                    var4 = var3.getKeyFrameInterval;
                    var4 = var4.bind(var3)();
                    var0.keyframeInterval = var4;
                    var4 = var3.keyframeInterval;
                    var3 = 0;
                    var3 = var4 > var3;
                    var0.alwaysSendVideo = var3;
                    var0 = var1.bind(var2)(var0);
                case 85:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[19] = var0;
        var0 = {};
        var5 = 'setViewerSideClip';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32322: for (var _fun32322_ip = 0;;) switch (_fun32322_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.context;
                    var1 = _closure1_slot23;
                    var1 = var1.STREAM;
                    if (!(var2 === var1)) {
                        _fun32322_ip = 54;
                        continue _fun32322
                    }
                case 25:
                    var2 = var0.conn;
                    var1 = var2.setTransportOptions;
                    var0 = {};
                    var3 = arg0;
                    var0.enableViewerSideClip = var3;
                    var0 = var1.bind(var2)(var0);
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[20] = var0;
        var0 = {};
        var5 = 'setRemoteAudioHistory';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var0 = this;
            var2 = var0.conn;
            var1 = var2.setTransportOptions;
            var0 = {};
            var3 = arg0;
            var0.remoteAudioHistoryMs = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[21] = var0;
        var0 = {};
        var5 = 'setQualityDecoupling';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32324: for (var _fun32324_ip = 0;;) switch (_fun32324_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.context;
                    var1 = _closure1_slot23;
                    var1 = var1.STREAM;
                    if (!(var2 === var1)) {
                        _fun32324_ip = 54;
                        continue _fun32324
                    }
                case 25:
                    var2 = var0.conn;
                    var1 = var2.setTransportOptions;
                    var0 = {};
                    var3 = arg0;
                    var0.enableQualityDecoupling = var3;
                    var0 = var1.bind(var2)(var0);
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[22] = var0;
        var0 = {};
        var5 = 'getLocalVolume';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32325: for (var _fun32325_ip = 0;;) switch (_fun32325_ip) {
                case 0:
                    var2 = this;
                    var1 = var2.localVolumes;
                    var0 = arg0;
                    var1 = var1[var0];
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun32325_ip = 57;
                        continue _fun32325
                    }
                case 22:
                    var4 = var2.context;
                    var2 = _closure1_slot23;
                    var2 = var2.DEFAULT;
                    if (!(var4 !== var2)) {
                        _fun32325_ip = 50;
                        continue _fun32325
                    }
                case 44:
                    var2 = _closure1_slot29;
                    _fun32325_ip = 54;
                    continue _fun32325;
                case 50:
                    var2 = _closure1_slot28;
                case 54:
                    var1 = var2;
                case 57:
                    if (!(var0 == var1)) {
                        _fun32325_ip = 68;
                        continue _fun32325
                    }
                case 61:
                    var1 = _closure1_slot28;
                case 68:
                    var0 = _closure1_slot28;
                    var0 = var1 / var0;
                    return var0;
            }
        };
        var0.value = var5;
        var1[23] = var0;
        var0 = {};
        var5 = 'setLocalVolume';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var6
            _fun32326: for (var _fun32326_ip = 0;;) switch (_fun32326_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var1 = this;
                    var3 = var5;
                    var0 = var4;
                    var2 = var1.localVolumes;
                    var2[var5] = var4;
                case 25: // try_start_0
                    var6 = var1.conn;
                    var5 = var6.setLocalVolume;
                    var4 = var3;
                    var2 = var1.getLocalVolume;
                    var2 = var2.bind(var1)(var4);
                    var2 = var5.bind(var6)(var4, var2);
                case 57: // try_end0
                    _fun32326_ip = 115;
                    continue _fun32326;
                case 59: // catch_target0
                    CatchBlockStart(arg_register = 2);
                    var2 = var1.logger;
                    var1 = var2.warn;
                    var6 = var3;
                    var5 = var0;
                    var0 = global;
                    var0 = var0.HermesInternal;
                    var4 = var0.concat;
                    var3 = 'Failed to set volume for user: ';
                    var0 = ': ';
                    var0 = var4.bind(var3)(var6, var0, var5);
                    var0 = var1.bind(var2)(var0);
                case 115:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[24] = var0;
        var0 = {};
        var5 = 'setLocalPan';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var6
            var4 = arg0;
            var3 = arg1;
            var2 = arg2;
            var0 = this;
            var5 = var0.localPans;
            var1 = {};
            var1.left = var3;
            var1.right = var2;
            var5[var4] = var1;
            var1 = var0.conn;
            var0 = var1.setLocalPan;
            var0 = var0.bind(var1)(var4, var3, var2);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[25] = var0;
        var0 = {};
        var5 = 'isAttenuating';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = this;
            var1 = var0.attenuationFactor;
            var0 = 1;
            var0 = var1 < var0;
            return var0;
        };
        var0.value = var5;
        var1[26] = var0;
        var0 = {};
        var5 = 'setAttenuation';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var6
            var3 = this;
            var1 = 100;
            var0 = arg0;
            var0 = var1 - var0;
            var0 = var0 / var1;
            var3.attenuationFactor = var0;
            var0 = arg1;
            var3.attenuateWhileSpeakingSelf = var0;
            var0 = arg2;
            var3.attenuateWhileSpeakingOthers = var0;
            var2 = var3.conn;
            var1 = var2.setTransportOptions;
            var0 = var3.getAttenuationOptions;
            var0 = var0.bind(var3)();
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[27] = var0;
        var0 = {};
        var5 = 'setCanHavePriority';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var6
            _fun32330: for (var _fun32330_ip = 0;;) switch (_fun32330_ip) {
                case 0:
                    var0 = this;
                    var4 = var0.conn;
                    var3 = var4.setRemoteUserCanHavePriority;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun32330_ip = 41;
                        continue _fun32330
                    }
                case 23:
                    var2 = var3.call;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var4, var1, var0);
                case 41:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[28] = var0;
        var0 = {};
        var5 = 'setBitRate';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var2 = this;
            var1 = var2.setVoiceBitRate;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[29] = var0;
        var0 = {};
        var5 = 'setVoiceBitRate';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32332: for (var _fun32332_ip = 0;;) switch (_fun32332_ip) {
                case 0:
                    var1 = arg0;
                    var0 = this;
                    var2 = var0.voiceBitrate;
                    if (!(var2 !== var1)) {
                        _fun32332_ip = 90;
                        continue _fun32332
                    }
                case 16:
                    var0.voiceBitrate = var1;
                    var5 = var0.voiceBitrate;
                    var1 = var0.soundshareActive;
                    var3 = var5;
                    if (!var1) {
                        _fun32332_ip = 66;
                        continue _fun32332
                    }
                case 40:
                    var1 = global;
                    var4 = var1.Math;
                    var2 = var4.max;
                    var1 = _closure1_slot30;
                    var3 = var2.bind(var4)(var1, var5);
                case 66:
                    var2 = var0.conn;
                    var1 = var2.setTransportOptions;
                    var0 = {};
                    var0.encodingVoiceBitRate = var3;
                    var0 = var1.bind(var2)(var0);
                case 90:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[30] = var0;
        var0 = {};
        var5 = 'setCameraBitRate';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var6
            _fun32333: for (var _fun32333_ip = 0;;) switch (_fun32333_ip) {
                case 0:
                    var3 = arg1;
                    var4 = arg2;
                    var0 = this;
                    var7 = null;
                    if (!(var7 == var4)) {
                        _fun32333_ip = 40;
                        continue _fun32333
                    }
                case 15:
                    if (!(var7 == var3)) {
                        _fun32333_ip = 40;
                        continue _fun32333
                    }
                case 19:
                    var5 = var0.videoQualityManager;
                    var2 = var5.setQualityOverwrite;
                    var1 = {};
                    var1 = var2.bind(var5)(var1);
                    _fun32333_ip = 88;
                    continue _fun32333;
                case 40:
                    var5 = var0.videoQualityManager;
                    var2 = var5.setQualityOverwrite;
                    var1 = {};
                    var6 = var3;
                    if (!(var7 != var4)) {
                        _fun32333_ip = 73;
                        continue _fun32333
                    }
                case 61:
                    var7 = 0;
                    var6 = var3;
                    if (!(var4 > var7)) {
                        _fun32333_ip = 73;
                        continue _fun32333
                    }
                case 70:
                    var6 = var4;
                case 73:
                    var1.bitrateMin = var6;
                    var1.bitrateMax = var3;
                    var1 = var2.bind(var5)(var1);
                case 88:
                    var1 = var0.hasDesktopSource;
                    var1 = var1.bind(var0)();
                    if (var1) {
                        _fun32333_ip = 138;
                        continue _fun32333
                    }
                case 101:
                    var2 = var0.conn;
                    var1 = var2.setTransportOptions;
                    var0 = {};
                    var5 = arg0;
                    var0.encodingVideoBitRate = var5;
                    var0.encodingVideoMinBitRate = var4;
                    var0.encodingVideoMaxBitRate = var3;
                    var0 = var1.bind(var2)(var0);
                case 138:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[31] = var0;
        var0 = {};
        var5 = 'setEchoCancellation';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var4 = this;
            var0 = arg0;
            var4.echoCancellation = var0;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getVoiceEngine;
            var3 = var1.bind(var2)();
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = var4.echoCancellation;
            var1.echoCancellation = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[32] = var0;
        var0 = {};
        var5 = 'setNoiseSuppression';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var4 = this;
            var0 = arg0;
            var4.noiseSuppression = var0;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getVoiceEngine;
            var3 = var1.bind(var2)();
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = var4.noiseSuppression;
            var1.noiseSuppression = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[33] = var0;
        var0 = {};
        var5 = 'setAutomaticGainControl';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var4 = this;
            var0 = arg0;
            var4.automaticGainControl = var0;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getVoiceEngine;
            var3 = var1.bind(var2)();
            var2 = var3.setTransportOptions;
            var1 = {};
            var5 = var4.automaticGainControl;
            var5 = var5.enabled;
            var1.automaticGainControl = var5;
            var4 = var4.automaticGainControl;
            var1.automaticGainControlConfig = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[34] = var0;
        var0 = {};
        var5 = 'setNoiseCancellation';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var4 = this;
            var0 = arg0;
            var4.noiseCancellation = var0;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getVoiceEngine;
            var3 = var1.bind(var2)();
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = var4.noiseCancellation;
            var1.noiseCancellation = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[35] = var0;
        var0 = {};
        var5 = 'setNoiseCancellationDuringProcessing';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var4 = this;
            var0 = arg0;
            var4.noiseCancellationDuringProcessing = var0;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getVoiceEngine;
            var3 = var1.bind(var2)();
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = var4.noiseCancellationDuringProcessing;
            var1.noiseCancellationDuringProcessing = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[36] = var0;
        var0 = {};
        var5 = 'setNoiseCancellationAfterProcessing';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var4 = this;
            var0 = arg0;
            var4.noiseCancellationAfterProcessing = var0;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getVoiceEngine;
            var3 = var1.bind(var2)();
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = var4.noiseCancellationAfterProcessing;
            var1.noiseCancellationAfterProcessing = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[37] = var0;
        var0 = {};
        var5 = 'setVADAfterWebrtc';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var4 = this;
            var0 = arg0;
            var4.vadAfterWebrtc = var0;
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getVoiceEngine;
            var3 = var1.bind(var2)();
            var2 = var3.setTransportOptions;
            var1 = {};
            var4 = var4.vadAfterWebrtc;
            var1.vadAfterWebrtc = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[38] = var0;
        var0 = {};
        var5 = 'getNoiseCancellation';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = this;
            var0 = var0.noiseCancellation;
            return var0;
        };
        var0.value = var5;
        var1[39] = var0;
        var0 = {};
        var5 = 'getVoiceFilterId';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = this;
            var0 = var0.voiceFilterId;
            return var0;
        };
        var0.value = var5;
        var1[40] = var0;
        var0 = {};
        var5 = 'setVoiceFilterId';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var6 = arg0;
            var4 = this;
            var4.voiceFilterId = var6;
            var5 = var4.emit;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var0 = 10;
            var1 = var3[var0];
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            var1 = var1.BaseConnectionEvent;
            var1 = var1.VoiceFilterChanged;
            var1 = var5.bind(var4)(var1, var6);
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var0)(var1);
            var1 = var2.getVoiceEngine;
            var3 = var1.bind(var2)();
            var2 = var3.setTransportOptions;
            var1 = {};
            var5 = var4.voiceFilterId;
            var4 = null;
            var4 = var4 != var5;
            var1.voiceFilters = var4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[41] = var0;
        var0 = {};
        var5 = 'setQoS';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var3 = this;
            var0 = arg0;
            var3.qos = var0;
            var2 = var3.conn;
            var1 = var2.setTransportOptions;
            var0 = {};
            var3 = var3.qos;
            var0.qos = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[42] = var0;
        var0 = {};
        var5 = 'setSoundshareDiscardRearChannels';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var0 = this;
            var2 = var0.conn;
            var1 = var2.setTransportOptions;
            var0 = {};
            var3 = arg0;
            var0.soundshareDiscardRearChannels = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[43] = var0;
        var0 = {};
        var5 = 'setInputMode';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var6
            _fun32346: for (var _fun32346_ip = 0;;) switch (_fun32346_ip) {
                case 0:
                    var6 = arg0;
                    var0 = arg1;
                    var4 = this;
                    var4.inputMode = var6;
                    var1 = _closure1_slot20;
                    var1 = var1.PUSH_TO_TALK;
                    if (!(var1 !== var6)) {
                        _fun32346_ip = 187;
                        continue _fun32346
                    }
                case 35:
                    var1 = _closure1_slot20;
                    var1 = var1.VOICE_ACTIVITY;
                    if (!(var1 !== var6)) {
                        _fun32346_ip = 101;
                        continue _fun32346
                    }
                case 49:
                    var1 = global;
                    var5 = var1.Error;
                    var1 = var1.HermesInternal;
                    var2 = var1.concat;
                    var1 = 'Unknown Input Mode: ';
                    var7 = var2.bind(var1)(var6);
                    var2 = var5.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var5
                        }
                    });
                    var8 = var2;
                    var1 = new var8[var5](var7, var6);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 101:
                    var1 = var0.vadThreshold;
                    var4.vadThreshold = var1;
                    var1 = var0.vadAutoThreshold;
                    var4.vadAutoThreshold = var1;
                    var1 = var0.vadUseKrisp;
                    var4.vadUseKrisp = var1;
                    var1 = var0.vadLeading;
                    var4.vadLeading = var1;
                    var1 = var0.vadTrailing;
                    var4.vadTrailing = var1;
                    var1 = var0.vadKrispActivationThreshold;
                    var4.vadKrispActivationThreshold = var1;
                    var1 = var0.vadDuringPreProcess;
                    var4.vadDuringPreProcess = var1;
                    _fun32346_ip = 199;
                    continue _fun32346;
                case 187:
                    var0 = var0.pttReleaseDelay;
                    var4.pttReleaseDelay = var0;
                case 199:
                    var2 = var4.conn;
                    var1 = var2.setTransportOptions;
                    var0 = {};
                    var5 = _closure1_slot19;
                    var3 = var4.inputMode;
                    var3 = var5[var3];
                    var0.inputMode = var3;
                    var3 = var4.createInputModeOptions;
                    var3 = var3.bind(var4)();
                    var0.inputModeOptions = var3;
                    var0 = var1.bind(var2)(var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[44] = var0;
        var0 = {};
        var5 = 'setSilenceThreshold';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 9;
            var1 = var1[var0];
            var0 = undefined;
            var2 = var2.bind(var0)(var1);
            var1 = var2.getVoiceEngine;
            var3 = var1.bind(var2)();
            var2 = var3.setNoInputThreshold;
            var1 = arg0;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var0.value = var5;
        var1[45] = var0;
        var0 = {};
        var5 = 'setForceAudioInput';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32348: for (var _fun32348_ip = 0;;) switch (_fun32348_ip) {
                case 0:
                    var5 = arguments[1];
                    var4 = arguments[2];
                    var0 = undefined;
                    if (!(var5 === var0)) {
                        _fun32348_ip = 14;
                        continue _fun32348
                    }
                case 12:
                    var5 = false;
                case 14:
                    if (!(var4 === var0)) {
                        _fun32348_ip = 20;
                        continue _fun32348
                    }
                case 18:
                    var4 = false;
                case 20:
                    var1 = this;
                    var3 = var1.conn;
                    var2 = var3.setPTTActive;
                    var1 = arg0;
                    var1 = var2.bind(var3)(var1, var5, var4);
                    return var0;
            }
        };
        var0.value = var5;
        var1[46] = var0;
        var0 = {};
        var5 = 'setSpeakingFlags';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var6
            _fun32349: for (var _fun32349_ip = 0;;) switch (_fun32349_ip) {
                case 0:
                    var3 = arg0;
                    var2 = arg1;
                    var1 = this;
                    var0 = var1.conn;
                    var0 = var0.setRemoteUserSpeakingStatus;
                    var4 = null;
                    if (!(var4 == var0)) {
                        _fun32349_ip = 90;
                        continue _fun32349
                    }
                case 27:
                    var0 = var1.conn;
                    var0 = var0.setRemoteUserSpeaking;
                    if (!(var4 != var0)) {
                        _fun32349_ip = 108;
                        continue _fun32349
                    }
                case 43:
                    var5 = var1.conn;
                    var4 = var5.setRemoteUserSpeaking;
                    var0 = _closure1_slot24;
                    var6 = var0.VOICE;
                    var6 = var2 & var6;
                    var0 = var0.VOICE;
                    var0 = var6 === var0;
                    var0 = var4.bind(var5)(var3, var0);
                    _fun32349_ip = 108;
                    continue _fun32349;
                case 90:
                    var4 = var1.conn;
                    var0 = var4.setRemoteUserSpeakingStatus;
                    var0 = var0.bind(var4)(var3, var2);
                case 108:
                    var0 = var1.handleSpeakingFlags;
                    var0 = var0.bind(var1)(var3, var2);
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[47] = var0;
        var0 = {};
        var5 = 'clearAllSpeaking';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[48] = var0;
        var0 = {};
        var5 = 'setEncryption';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var6
            var4 = arg0;
            var0 = this;
            var3 = var0.logger;
            var2 = var3.info;
            var1 = global;
            var1 = var1.HermesInternal;
            var5 = var1.concat;
            var1 = 'Selected encryption mode: ';
            var1 = var5.bind(var1)(var4);
            var1 = var2.bind(var3)(var1);
            var2 = var0.conn;
            var1 = var2.setTransportOptions;
            var0 = {};
            var3 = {};
            var3.mode = var4;
            var4 = arg1;
            var3.secretKey = var4;
            var0.encryptionSettings = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[49] = var0;
        var0 = {};
        var5 = 'setReconnectInterval';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var3 = this;
            var0 = arg0;
            var3.reconnectInterval = var0;
            var2 = var3.conn;
            var1 = var2.setTransportOptions;
            var0 = {};
            var3 = var3.reconnectInterval;
            var0.reconnectInterval = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[50] = var0;
        var0 = {};
        var5 = 'setKeyframeInterval';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var3 = this;
            var0 = arg0;
            var3.keyframeInterval = var0;
            var2 = var3.conn;
            var1 = var2.setTransportOptions;
            var0 = {};
            var4 = var3.getKeyFrameInterval;
            var4 = var4.bind(var3)();
            var0.keyframeInterval = var4;
            var4 = var3.keyframeInterval;
            var3 = 0;
            var3 = var4 > var3;
            var0.alwaysSendVideo = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[51] = var0;
        var0 = {};
        var5 = 'setVideoQualityMeasurement';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var3 = this;
            var0 = arg0;
            var3.videoQualityMeasurement = var0;
            var2 = var3.conn;
            var1 = var2.setTransportOptions;
            var0 = {};
            var3 = var3.videoQualityMeasurement;
            var0.videoQualityMeasurement = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[52] = var0;
        var0 = {};
        var5 = 'setVideoEncoderExperiments';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var3 = this;
            var0 = arg0;
            var3.videoEncoderExperiments = var0;
            var2 = var3.conn;
            var1 = var2.setTransportOptions;
            var0 = {};
            var3 = var3.videoEncoderExperiments;
            var0.videoEncoderExperiments = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[53] = var0;
        var0 = {};
        var5 = 'setVideoBroadcast';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32356: for (var _fun32356_ip = 0;;) switch (_fun32356_ip) {
                case 0:
                    var0 = arg0;
                    var1 = this;
                    var2 = var1.selfVideo;
                    if (!(var2 !== var0)) {
                        _fun32356_ip = 34;
                        continue _fun32356
                    }
                case 16:
                    var1.selfVideo = var0;
                    var0 = var1.applyVideoTransportOptions;
                    var0 = var0.bind(var1)();
                case 34:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[54] = var0;
        var0 = {};
        var5 = 'setGoLiveSource';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32357: for (var _fun32357_ip = 0;;) switch (_fun32357_ip) {
                case 0:
                    var0 = arg0;
                    var4 = this;
                    var1 = var0.quality;
                    var3 = var1.resolution;
                    var2 = var1.frameRate;
                    var1 = 480;
                    if (!(!(var3 <= var1))) {
                        _fun32357_ip = 50;
                        continue _fun32357
                    }
                case 34:
                    var1 = 9;
                    var5 = var3 / var1;
                    var1 = 16;
                    var1 = var5 * var1;
                    _fun32357_ip = 64;
                    continue _fun32357;
                case 50:
                    var5 = 3;
                    var6 = var3 / var5;
                    var5 = 4;
                    var1 = var6 * var5;
                case 64:
                    var6 = var0.desktopDescription;
                    var5 = null;
                    if (!(var5 == var6)) {
                        _fun32357_ip = 145;
                        continue _fun32357
                    }
                case 76:
                    var6 = var0.cameraDescription;
                    var7 = var5 != var6;
                    var6 = null;
                    if (!var7) {
                        _fun32357_ip = 156;
                        continue _fun32357
                    }
                case 91:
                    var7 = var0.cameraDescription;
                    var11 = var7.videoDeviceGuid;
                    var7 = var0.cameraDescription;
                    var10 = var7.audioDeviceGuid;
                    var7 = global;
                    var7 = var7.HermesInternal;
                    var9 = var7.concat;
                    var8 = '';
                    var7 = ':';
                    var6 = var9.bind(var8)(var11, var7, var10);
                    _fun32357_ip = 156;
                    continue _fun32357;
                case 145:
                    var7 = var0.desktopDescription;
                    var6 = var7.id;
                case 156:
                    var7 = var4.goLiveSourceIdentifier;
                    if (!(var7 === var6)) {
                        _fun32357_ip = 240;
                        continue _fun32357
                    }
                case 166:
                    var7 = var4.setDesktopEncodingOptions;
                    var7 = var7.bind(var4)(var1, var3, var2);
                    var7 = var0.desktopDescription;
                    if (!(var5 != var7)) {
                        _fun32357_ip = 861;
                        continue _fun32357
                    }
                case 192:
                    var7 = var0.desktopDescription;
                    var9 = var7.soundshareId;
                    var8 = var7.useLoopback;
                    var7 = var4.soundshareId;
                    if (!(var7 !== var9)) {
                        _fun32357_ip = 861;
                        continue _fun32357
                    }
                case 223:
                    var7 = var4.setSoundshareSource;
                    var7 = var7.bind(var4)(var9, var8);
                    _fun32357_ip = 861;
                    continue _fun32357;
                case 240:
                    var4.goLiveSourceIdentifier = var6;
                    var6 = var4.conn;
                    var6 = var6.setDesktopSource;
                    if (!(var5 != var6)) {
                        _fun32357_ip = 861;
                        continue _fun32357
                    }
                case 265:
                    var6 = var0.desktopDescription;
                    if (!(var5 == var6)) {
                        _fun32357_ip = 342;
                        continue _fun32357
                    }
                case 275:
                    var6 = var0.cameraDescription;
                    if (!(var5 != var6)) {
                        _fun32357_ip = 848;
                        continue _fun32357
                    }
                case 288:
                    var6 = var0.cameraDescription;
                    var10 = var6.videoDeviceGuid;
                    var9 = var6.audioDeviceGuid;
                    var8 = var4.conn;
                    var7 = var8.setGoLiveDevices;
                    var6 = {};
                    var6.videoInputDeviceId = var10;
                    var6.audioInputDeviceId = var9;
                    var6 = var7.bind(var8)(var6);
                    _fun32357_ip = 848;
                    continue _fun32357;
                case 342:
                    var6 = var0.desktopDescription;
                    var0 = var6.id;
                    var18 = var6.soundshareId;
                    var17 = var6.useLoopback;
                    var16 = var6.useVideoHook;
                    var14 = var6.useGraphicsCaptureApiLevel;
                    var13 = var6.useCaptureDeviceForEncode;
                    var15 = var6.useGraphicsCapture;
                    var12 = var6.useQuartzCapturer;
                    var11 = var6.allowScreenCaptureKit;
                    var10 = var6.videoHookStaleFrameTimeoutMs;
                    var9 = var6.graphicsCaptureStaleFrameTimeoutMs;
                    var8 = var6.hdrCaptureMode;
                    var7 = var6.enableGlobalFramePoolLock;
                    var6 = var4.setSoundshareSource;
                    var6 = var6.bind(var4)(var18, var17);
                    if (!(var5 == var0)) {
                        _fun32357_ip = 453;
                        continue _fun32357
                    }
                case 441:
                    var18 = ['', ''];
                    _fun32357_ip = 467;
                    continue _fun32357;
                case 453:
                    var17 = var0.split;
                    var6 = ':';
                    var18 = var17.bind(var0)(var6);
                case 467:
                    var17 = _closure1_slot3;
                    var21 = undefined;
                    var6 = 2;
                    var17 = var17.bind(var21)(var18, var6);
                    var6 = 0;
                    var18 = var17[var6];
                    var6 = 1;
                    var17 = var17[var6];
                    if (!(var5 == var0)) {
                        _fun32357_ip = 530;
                        continue _fun32357
                    }
                case 502:
                    var20 = var4.logger;
                    var19 = var20.info;
                    var6 = 'capturing desktop (type: <stop>).';
                    var6 = var19.bind(var20)(var6);
                    _fun32357_ip = 687;
                    continue _fun32357;
                case 530:
                    var20 = var4.logger;
                    var19 = var20.info;
                    var6 = var16.toString;
                    var31 = var6.bind(var16)();
                    var6 = var5 == var15;
                    var30 = undefined;
                    if (var6) {
                        _fun32357_ip = 569;
                        continue _fun32357
                    }
                case 560:
                    var6 = var15.toString;
                    var30 = var6.bind(var15)();
                case 569:
                    var6 = var5 == var14;
                    var29 = undefined;
                    if (var6) {
                        _fun32357_ip = 587;
                        continue _fun32357
                    }
                case 578:
                    var6 = var14.toString;
                    var29 = var6.bind(var14)();
                case 587:
                    var6 = var5 == var13;
                    var28 = undefined;
                    if (var6) {
                        _fun32357_ip = 605;
                        continue _fun32357
                    }
                case 596:
                    var6 = var13.toString;
                    var28 = var6.bind(var13)();
                case 605:
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var27 = var6.concat;
                    var44 = 'capturing desktop (type: ';
                    var42 = ', handle: ';
                    var40 = ', use-video-hook: ';
                    var38 = ', use-graphics-capture: ';
                    var36 = ', use-graphics-capture-api-level: ';
                    var34 = ', use-capture-device-for-encode: ';
                    var32 = ').';
                    var43 = var18;
                    var41 = var17;
                    var39 = var31;
                    var37 = var30;
                    var35 = var29;
                    var33 = var28;
                    var6 = var44[var27](var43, var42, var41, var40, var39, var38, var37, var36, var35, var34, var33, var32, var31);
                    var6 = var19.bind(var20)(var6);
                case 687:
                    var6 = var4.conn;
                    var6 = var6.setDesktopSourceWithOptions;
                    if (!(var5 == var6)) {
                        _fun32357_ip = 748;
                        continue _fun32357
                    }
                case 703:
                    var20 = var4.conn;
                    var19 = var20.setDesktopSource;
                    var6 = global;
                    var6 = var6.HermesInternal;
                    var21 = var6.concat;
                    var6 = 'wumpus-';
                    var6 = var21.bind(var6)(var17);
                    var6 = var19.bind(var20)(var6, var16, var18);
                    _fun32357_ip = 848;
                    continue _fun32357;
                case 748:
                    if (!(var5 == var0)) {
                        _fun32357_ip = 770;
                        continue _fun32357
                    }
                case 752:
                    var5 = var4.conn;
                    var0 = var5.clearDesktopSource;
                    var0 = var0.bind(var5)();
                    _fun32357_ip = 848;
                    continue _fun32357;
                case 770:
                    var6 = var4.conn;
                    var5 = var6.setDesktopSourceWithOptions;
                    var0 = {};
                    var0.type = var18;
                    var0.sourceId = var17;
                    var0.useVideoHook = var16;
                    var0.useGraphicsCapture = var15;
                    var0.useGraphicsCaptureApiLevel = var14;
                    var0.useCaptureDeviceForEncode = var13;
                    var0.useQuartzCapturer = var12;
                    var0.allowScreenCaptureKit = var11;
                    var0.videoHookStaleFrameTimeoutMs = var10;
                    var0.graphicsCaptureStaleFrameTimeoutMs = var9;
                    var0.hdrCaptureMode = var8;
                    var0.enableGlobalFramePoolLock = var7;
                    var0 = var5.bind(var6)(var0);
                case 848:
                    var0 = var4.setDesktopEncodingOptions;
                    var0 = var0.bind(var4)(var1, var3, var2);
                case 861:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[55] = var0;
        var0 = {};
        var5 = 'clearGoLiveDevices';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun32358: for (var _fun32358_ip = 0;;) switch (_fun32358_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.conn;
                    var2 = var1.clearGoLiveDevices;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun32358_ip = 37;
                        continue _fun32358
                    }
                case 21:
                    var1 = var0.conn;
                    var0 = var1.clearGoLiveDevices;
                    var0 = var0.bind(var1)();
                case 37:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[56] = var0;
        var0 = {};
        var5 = 'clearDesktopSource';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun32359: for (var _fun32359_ip = 0;;) switch (_fun32359_ip) {
                case 0:
                    var0 = this;
                    var2 = null;
                    var0.goLiveSourceIdentifier = var2;
                    var1 = var0.conn;
                    var1 = var1.clearDesktopSource;
                    if (!(var2 == var1)) {
                        _fun32359_ip = 54;
                        continue _fun32359
                    }
                case 27:
                    var4 = var0.conn;
                    var3 = var4.setDesktopSource;
                    var2 = '';
                    var1 = false;
                    var1 = var3.bind(var4)(var2, var1, var2);
                    _fun32359_ip = 70;
                    continue _fun32359;
                case 54:
                    var1 = var0.conn;
                    var0 = var1.clearDesktopSource;
                    var0 = var0.bind(var1)();
                case 70:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[57] = var0;
        var0 = {};
        var5 = 'setDesktopSourceStatusCallback';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32360: for (var _fun32360_ip = 0;;) switch (_fun32360_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.conn;
                    var2 = var3.setDesktopSourceStatusCallback;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun32360_ip = 35;
                        continue _fun32360
                    }
                case 21:
                    var1 = var2.call;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var3, var0);
                case 35:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[58] = var0;
        var0 = {};
        var5 = 'hasDesktopSource';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = this;
            var1 = var0.goLiveSourceIdentifier;
            var0 = null;
            var0 = var0 != var1;
            return var0;
        };
        var0.value = var5;
        var1[59] = var0;
        var0 = {};
        var5 = 'setDesktopEncodingOptions';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var6
            _fun32362: for (var _fun32362_ip = 0;;) switch (_fun32362_ip) {
                case 0:
                    var13 = arg0;
                    var12 = arg1;
                    var10 = arg2;
                    var3 = this;
                    var0 = var3.destroyed;
                    if (var0) {
                        _fun32362_ip = 641;
                        continue _fun32362
                    }
                case 26:
                    var15 = 0;
                    var14 = var15 === var12;
                    if (!var14) {
                        _fun32362_ip = 42;
                        continue _fun32362
                    }
                case 35:
                    var0 = 10;
                    if (!(!(var10 >= var0))) {
                        _fun32362_ip = 68;
                        continue _fun32362
                    }
                case 42:
                    var0 = 720;
                    if (!(!(var12 > var0))) {
                        _fun32362_ip = 68;
                        continue _fun32362
                    }
                case 52:
                    var0 = 30;
                    if (!(!(var10 > var0))) {
                        _fun32362_ip = 68;
                        continue _fun32362
                    }
                case 59:
                    var7 = _closure1_slot13;
                    _fun32362_ip = 75;
                    continue _fun32362;
                case 68:
                    var7 = _closure1_slot12;
                case 75:
                    var8 = {};
                    var8.width = var13;
                    var8.height = var12;
                    var8.framerate = var10;
                    var1 = var3.videoQualityManager;
                    var0 = var1.getQuality;
                    var4 = var0.bind(var1)();
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 20;
                    var1 = var2[var1];
                    var2 = undefined;
                    var1 = var6.bind(var2)(var1);
                    var9 = var1.VideoQuality;
                    var6 = var9.equals;
                    var1 = var4.capture;
                    var1 = var6.bind(var9)(var8, var1);
                    var1 = !var1;
                    if (var1) {
                        _fun32362_ip = 171;
                        continue _fun32362
                    }
                case 161:
                    var4 = var4.bitrateMax;
                    var1 = var4 !== var7;
                case 171:
                    var9 = var3.videoStreamParameters;
                    var6 = var9.findIndex;
                    var4 = function(arg0) { // Environment: var5
                        var0 = arg0;
                        var1 = var0.quality;
                        var0 = _closure1_slot17;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var9 = var6.bind(var9)(var4);
                    var4 = -1;
                    if (!(var4 === var9)) {
                        _fun32362_ip = 205;
                        continue _fun32362
                    }
                case 203:
                    var9 = 0;
                case 205:
                    if (!var1) {
                        _fun32362_ip = 353;
                        continue _fun32362
                    }
                case 211:
                    var16 = var3.videoQualityManager;
                    var11 = var16.setGoliveQuality;
                    var6 = {};
                    var6.capture = var8;
                    var6.encode = var8;
                    var6.bitrateMax = var7;
                    var6 = var11.bind(var16)(var6);
                    var6 = var3.videoStreamParameters;
                    var6 = var6.length;
                    if (!(var6 > var9)) {
                        _fun32362_ip = 353;
                        continue _fun32362
                    }
                case 262:
                    var6 = var3.videoStreamParameters;
                    var11 = var6[var9];
                    var6 = {};
                    if (!(var15 === var13)) {
                        _fun32362_ip = 281;
                        continue _fun32362
                    }
                case 278:
                    if (var14) {
                        _fun32362_ip = 293;
                        continue _fun32362
                    }
                case 281:
                    var14 = _closure1_slot25;
                    var14 = var14.FIXED;
                    _fun32362_ip = 303;
                    continue _fun32362;
                case 293:
                    var15 = _closure1_slot25;
                    var14 = var15.SOURCE;
                case 303:
                    var6.type = var14;
                    var6.width = var13;
                    var6.height = var12;
                    var11.maxResolution = var6;
                    var6 = var3.videoStreamParameters;
                    var6 = var6[var9];
                    var6.maxFrameRate = var10;
                    var6 = var3.videoStreamParameters;
                    var6 = var6[var9];
                    var6.maxBitrate = var7;
                case 353:
                    var7 = var3.videoStreamParameters;
                    var6 = var7.findIndex;
                    var5 = function(arg0) { // Environment: var5
                        var0 = arg0;
                        var1 = var0.quality;
                        var0 = _closure1_slot18;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var7 = var6.bind(var7)(var5);
                    var5 = var4 !== var7;
                    if (!var5) {
                        _fun32362_ip = 397;
                        continue _fun32362
                    }
                case 382:
                    var4 = var3.videoStreamParameters;
                    var4 = var4.length;
                    var5 = var4 > var7;
                case 397:
                    var6 = var3.videoQualityManager;
                    var4 = var6.shouldEnableGoliveSimulcastForHqQuality;
                    var6 = var4.bind(var6)(var8);
                    var4 = var5;
                    if (!var4) {
                        _fun32362_ip = 442;
                        continue _fun32362
                    }
                case 422:
                    var8 = var3.videoStreamParameters;
                    var8 = var8[var7];
                    var8 = var8.active;
                    var4 = var8 !== var6;
                case 442:
                    if (!var5) {
                        _fun32362_ip = 488;
                        continue _fun32362
                    }
                case 445:
                    var5 = var3.videoStreamParameters;
                    var5 = var5[var7];
                    var5.active = var6;
                    var5 = undefined;
                    if (var6) {
                        _fun32362_ip = 482;
                        continue _fun32362
                    }
                case 466:
                    var6 = var3.videoStreamParameters;
                    var6 = var6[var7];
                    var5 = var6.ssrc;
                case 482:
                    var3.simulcastLQDisabledSsrc = var5;
                case 488:
                    if (var1) {
                        _fun32362_ip = 494;
                        continue _fun32362
                    }
                case 491:
                    var1 = var4;
                case 494:
                    if (!var1) {
                        _fun32362_ip = 641;
                        continue _fun32362
                    }
                case 500:
                    var8 = var3.emit;
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 10;
                    var1 = var5[var1];
                    var1 = var4.bind(var2)(var1);
                    var1 = var1.BaseConnectionEvent;
                    var7 = var1.Video;
                    var23 = var3.userId;
                    var21 = var3.audioSSRC;
                    var1 = var3.videoStreamParameters;
                    var1 = var1[var9];
                    var20 = var1.ssrc;
                    var1 = _closure1_slot40;
                    var0 = var3.videoStreamParameters;
                    var0 = var0[var9];
                    var0 = var0.ssrc;
                    var19 = var1.bind(var2)(var0);
                    var18 = var3.videoStreamParameters;
                    var22 = null;
                    var25 = var3;
                    var24 = var7;
                    var0 = var25[var8](var24, var23, var22, var21, var20, var19, var18, var17);
                    var2 = var3.conn;
                    var1 = var2.setTransportOptions;
                    var0 = var3.applyQualityConstraints;
                    var0 = var0.bind(var3)();
                    var0 = var0.constraints;
                    var0 = var1.bind(var2)(var0);
                case 641:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[60] = var0;
        var0 = {};
        var5 = 'setSDP';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[61] = var0;
        var0 = {};
        var5 = 'setRemoteVideoSinkWants';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var2 = this;
            var0 = arg0;
            var2.remoteVideoSinkWants = var0;
            var1 = var2.updateVideoQuality;
            var0 = _closure1_slot14;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[62] = var0;
        var0 = {};
        var5 = 'setLocalVideoSinkWants';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32367: for (var _fun32367_ip = 0;;) switch (_fun32367_ip) {
                case 0:
                    var2 = arg0;
                    var1 = this;
                    var18 = var1.localVideoSinkWants;
                    var0 = global;
                    var4 = var0.Object;
                    var3 = var4.entries;
                    var0 = var1.remoteVideoSSRCs;
                    var17 = var3.bind(var4)(var0);
                    var0 = var17.length;
                    var16 = 0;
                    var3 = var16 < var0;
                    var0 = undefined;
                    var15 = true;
                    var14 = null;
                    var13 = false;
                    var11 = 2;
                    var10 = 1;
                    var9 = 0;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var4 = undefined;
                    if (!var3) {
                        _fun32367_ip = 350;
                        continue _fun32367
                    }
                case 83:
                    var19 = var17[var9];
                    var3 = _closure1_slot3;
                    var3 = var3.bind(var0)(var19, var11);
                    var25 = var3[var16];
                    var19 = _closure1_slot37;
                    var3 = var3[var10];
                    var24 = var19.bind(var0)(var3);
                    var3 = var24.bind(var0)();
                    var19 = var3.done;
                    var22 = var3;
                    var21 = 0;
                    var20 = 0;
                    var23 = 0;
                    var3 = 0;
                    if (var19) {
                        _fun32367_ip = 203;
                        continue _fun32367
                    }
                case 137:
                    var26 = var22.value;
                    var27 = var14 == var18;
                    var19 = undefined;
                    if (var27) {
                        _fun32367_ip = 155;
                        continue _fun32367
                    }
                case 151:
                    var19 = var18[var26];
                case 155:
                    var28 = var21 + var19;
                    var27 = var14 == var2;
                    var19 = undefined;
                    if (var27) {
                        _fun32367_ip = 172;
                        continue _fun32367
                    }
                case 168:
                    var19 = var2[var26];
                case 172:
                    var20 = var20 + var19;
                    var29 = var24.bind(var0)();
                    var19 = var29.done;
                    var22 = var29;
                    var21 = var28;
                    var23 = var21;
                    var3 = var20;
                    var4 = var26;
                    if (!var19) {
                        _fun32367_ip = 137;
                        continue _fun32367
                    }
                case 203:
                    var22 = var8;
                    var21 = var7;
                    if (!(var16 === var23)) {
                        _fun32367_ip = 263;
                        continue _fun32367
                    }
                case 213:
                    var22 = var8;
                    var21 = var7;
                    if (!(var16 !== var3)) {
                        _fun32367_ip = 263;
                        continue _fun32367
                    }
                case 223:
                    var19 = var1.conn;
                    var20 = var19.setDisableLocalVideo;
                    var21 = var19;
                    var22 = var20;
                    if (!(var14 != var22)) {
                        _fun32367_ip = 263;
                        continue _fun32367
                    }
                case 245:
                    var24 = var20.call;
                    var24 = var24.bind(var20)(var19, var25, var13);
                    var22 = var20;
                    var21 = var19;
                case 263:
                    var20 = var6;
                    var19 = var5;
                    if (!(var16 !== var23)) {
                        _fun32367_ip = 323;
                        continue _fun32367
                    }
                case 273:
                    var20 = var6;
                    var19 = var5;
                    if (!(var16 === var3)) {
                        _fun32367_ip = 323;
                        continue _fun32367
                    }
                case 283:
                    var3 = var1.conn;
                    var23 = var3.setDisableLocalVideo;
                    var19 = var3;
                    var20 = var23;
                    if (!(var14 != var20)) {
                        _fun32367_ip = 323;
                        continue _fun32367
                    }
                case 305:
                    var24 = var23.call;
                    var24 = var24.bind(var23)(var3, var25, var15);
                    var20 = var23;
                    var19 = var3;
                case 323:
                    var9 = var9 + 1;
                    var3 = var17.length;
                    var6 = var20;
                    var5 = var19;
                    var8 = var22;
                    var7 = var21;
                    if (var9 < var3) {
                        _fun32367_ip = 83;
                        continue _fun32367
                    }
                case 350:
                    var1.localVideoSinkWants = var2;
                    return var0;
            }
        };
        var0.value = var5;
        var1[63] = var0;
        var0 = {};
        var5 = 'startSamplesLocalPlayback';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2, arg3) { // Original name: value, environment: var6
            _fun32368: for (var _fun32368_ip = 0;;) switch (_fun32368_ip) {
                case 0:
                    var0 = arg1;
                    var3 = arg3;
                    var1 = this;
                    var4 = var0.numberOfChannels;
                    var2 = 2;
                    if (!(!(var4 > var2))) {
                        _fun32368_ip = 174;
                        continue _fun32368
                    }
                case 25:
                    var4 = var1.conn;
                    var5 = var4.startSamplesLocalPlayback;
                    var4 = null;
                    if (!(var4 == var5)) {
                        _fun32368_ip = 65;
                        continue _fun32368
                    }
                case 43:
                    var6 = undefined;
                    var5 = 3;
                    var4 = 'Not supported';
                    var4 = var3.bind(var6)(var5, var4);
                    _fun32368_ip = 188;
                    continue _fun32368;
                case 65:
                    var6 = new Array(0);
                    var4 = var0.numberOfChannels;
                    var5 = 0;
                    var4 = var5 < var4;
                    if (!var4) {
                        _fun32368_ip = 120;
                        continue _fun32368
                    }
                case 84:
                    var4 = var0.getChannelData;
                    var7 = var4.bind(var0)(var5);
                    var4 = var6.push;
                    var4 = var4.bind(var6)(var7);
                    var5 = var5 + 1;
                    var4 = var0.numberOfChannels;
                    if (var5 < var4) {
                        _fun32368_ip = 84;
                        continue _fun32368
                    }
                case 120:
                    var5 = var1.conn;
                    var4 = var5.startSamplesLocalPlayback;
                    var1 = {};
                    var0 = var0.sampleRate;
                    var1.sampleRate = var0;
                    var0 = arg2;
                    var1.volume = var0;
                    var11 = arg0;
                    var12 = var5;
                    var10 = var1;
                    var9 = var6;
                    var8 = var3;
                    var0 = var12[var4](var11, var10, var9, var8, var7);
                    _fun32368_ip = 188;
                    continue _fun32368;
                case 174:
                    var1 = undefined;
                    var0 = 'Too many channels';
                    var0 = var3.bind(var1)(var2, var0);
                case 188:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[64] = var0;
        var0 = {};
        var5 = 'stopAllSamplesLocalPlayback';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = this;
            var1 = var0.conn;
            var0 = var1.stopAllSamplesLocalPlayback;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[65] = var0;
        var0 = {};
        var5 = 'stopSamplesLocalPlayback';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32370: for (var _fun32370_ip = 0;;) switch (_fun32370_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.conn;
                    var2 = var3.stopSamplesLocalPlayback;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun32370_ip = 37;
                        continue _fun32370
                    }
                case 23:
                    var1 = var2.call;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var3, var0);
                case 37:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[66] = var0;
        var0 = {};
        var5 = 'setBandwidthEstimationExperiments';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var0 = this;
            var2 = var0.conn;
            var1 = var2.setTransportOptions;
            var0 = {};
            var3 = arg0;
            var0.bandwidthEstimationExperiments = var3;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[67] = var0;
        var0 = {};
        var5 = 'updateVideoQualityCore';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32372: for (var _fun32372_ip = 0;;) switch (_fun32372_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.videoSupported;
                    if (!var1) {
                        _fun32372_ip = 41;
                        continue _fun32372
                    }
                case 12:
                    var1 = var0.destroyed;
                    if (var1) {
                        _fun32372_ip = 41;
                        continue _fun32372
                    }
                case 21:
                    var2 = var0.conn;
                    var1 = var2.setTransportOptions;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                case 41:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[68] = var0;
        var0 = {};
        var5 = 'setStreamParameters';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = arg0;
            var _closure3_slot1 = var2;
            var _closure3_slot2 = var1;
            var1 = global;
            var2 = var1.Promise;
            var1 = var2.prototype;
            var1 = Object.create(var1, {
                constructor: {
                    value: var2
                }
            });
            var3 = function(arg0, arg1) { // Environment: var0
                _fun32374: for (var _fun32374_ip = 0;;) switch (_fun32374_ip) {
                    case 0:
                        var1 = arg1;
                        var _closure4_slot0 = var1;
                        var5 = function(arg0) { // Original name: _loop, environment: var0
                            _fun32375: for (var _fun32375_ip = 0;;) switch (_fun32375_ip) {
                                case 0:
                                    var1 = arg0;
                                    var _closure5_slot0 = var1;
                                    var3 = _closure3_slot1;
                                    var2 = var3.findIndex;
                                    var0 = function(arg0) { // Environment: var0
                                        var0 = arg0;
                                        var1 = var0.rid;
                                        var0 = _closure5_slot0;
                                        var0 = var0.rid;
                                        var0 = var1 === var0;
                                        return var0;
                                    };
                                    var6 = var2.bind(var3)(var0);
                                    var0 = -1;
                                    if (!(var0 !== var6)) {
                                        _fun32375_ip = 189;
                                        continue _fun32375
                                    }
                                case 45:
                                    var4 = new Array(0);
                                    var3 = _closure1_slot1;
                                    var2 = _closure1_slot2;
                                    var0 = 19;
                                    var2 = var2[var0];
                                    var0 = undefined;
                                    var5 = var3.bind(var0)(var2);
                                    var2 = _closure3_slot2;
                                    var2 = var2.videoStreamParameters;
                                    var3 = var2[var6];
                                    var2 = _closure3_slot1;
                                    var2 = var2[var6];
                                    var2 = var5.bind(var0)(var3, var2);
                                    if (var2) {
                                        _fun32375_ip = 159;
                                        continue _fun32375
                                    }
                                case 105:
                                    var2 = _closure3_slot2;
                                    var3 = var2.videoStreamParameters;
                                    var2 = {};
                                    var5 = _closure3_slot1;
                                    var8 = var5[var6];
                                    var9 = var2;
                                    var7 = copyDataProperties(var9, var8);
                                    var3[var6] = var2;
                                    var3 = var4.push;
                                    var2 = {};
                                    var8 = var5[var6];
                                    var9 = var2;
                                    var5 = copyDataProperties(var9, var8);
                                    var2 = var3.bind(var4)(var2);
                                case 159:
                                    var1 = _closure3_slot2;
                                    var3 = var1.conn;
                                    var2 = var3.setTransportOptions;
                                    var1 = {};
                                    var1.streamParameters = var4;
                                    var1 = var2.bind(var3)(var1);
                                    return var0;
                                case 189:
                                    var2 = _closure4_slot0;
                                    var0 = global;
                                    var3 = var0.Error;
                                    var0 = var3.prototype;
                                    var1 = Object.create(var0, {
                                        constructor: {
                                            value: var3
                                        }
                                    });
                                    var9 = 'Invalid rid';
                                    var10 = var1;
                                    var0 = new var10[var3](var9, var8);
                                    var0 = var0 instanceof Object ? var0 : var1;
                                    var1 = undefined;
                                    var0 = var2.bind(var1)(var0);
                                    var0 = {};
                                    var0.v = var1;
                                    return var0;
                            }
                        };
                        var2 = _closure1_slot37;
                        var0 = _closure3_slot0;
                        var1 = var0.videoStreamParameters;
                        var0 = undefined;
                        var4 = var2.bind(var0)(var1);
                        var2 = var4.bind(var0)();
                        var1 = var2.done;
                        var3 = var2;
                        if (var1) {
                            _fun32374_ip = 93;
                            continue _fun32374
                        }
                    case 56:
                        var1 = var3.value;
                        var1 = var5.bind(var0)(var1);
                        if (var1) {
                            _fun32374_ip = 86;
                            continue _fun32374
                        }
                    case 69:
                        var6 = var4.bind(var0)();
                        var2 = var6.done;
                        var3 = var6;
                        if (var2) {
                            _fun32374_ip = 93;
                            continue _fun32374
                        }
                    case 84:
                        _fun32374_ip = 56;
                        continue _fun32374;
                    case 86:
                        var1 = var1.v;
                        return var1;
                    case 93:
                        var1 = arg0;
                        var1 = var1.bind(var0)();
                        return var0;
                }
            };
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            return var0;
        };
        var0.value = var5;
        var1[69] = var0;
        var0 = {};
        var5 = 'applyVideoTransportOptions';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun32377: for (var _fun32377_ip = 0;;) switch (_fun32377_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.videoSupported;
                    if (!var1) {
                        _fun32377_ip = 208;
                        continue _fun32377
                    }
                case 15:
                    var1 = var0.hasDesktopSource;
                    var1 = var1.bind(var0)();
                    var6 = false;
                    if (!var1) {
                        _fun32377_ip = 101;
                        continue _fun32377
                    }
                case 30:
                    var1 = var0.videoStreamParameters;
                    var1 = var1.length;
                    var2 = 0;
                    var1 = var1 > var2;
                    var6 = false;
                    if (!var1) {
                        _fun32377_ip = 101;
                        continue _fun32377
                    }
                case 52:
                    var1 = var0.videoStreamParameters;
                    var1 = var1[var2];
                    var1 = var1.maxResolution;
                    var2 = null;
                    var3 = var2 == var1;
                    var2 = undefined;
                    if (var3) {
                        _fun32377_ip = 84;
                        continue _fun32377
                    }
                case 79:
                    var2 = var1.type;
                case 84:
                    var1 = _closure1_slot25;
                    var1 = var1.SOURCE;
                    var6 = var2 === var1;
                case 101:
                    var3 = var0.conn;
                    var2 = var3.setTransportOptions;
                    var4 = var0.applyQualityConstraints;
                    var1 = {};
                    var5 = var0.hasDesktopSource;
                    var5 = var5.bind(var0)();
                    if (var5) {
                        _fun32377_ip = 142;
                        continue _fun32377
                    }
                case 134:
                    var5 = var0.videoDegradationPreference;
                    _fun32377_ip = 162;
                    continue _fun32377;
                case 142:
                    if (var6) {
                        _fun32377_ip = 153;
                        continue _fun32377
                    }
                case 145:
                    var6 = var0.desktopDegradationPreference;
                    _fun32377_ip = 159;
                    continue _fun32377;
                case 153:
                    var6 = var0.sourceDesktopDegradationPreference;
                case 159:
                    var5 = var6;
                case 162:
                    var1.encodingVideoDegradationPreference = var5;
                    var1 = var4.bind(var0)(var1);
                    var1 = var1.constraints;
                    var1 = var2.bind(var3)(var1);
                    var2 = var0.conn;
                    var1 = var2.setVideoBroadcast;
                    var0 = var0.selfVideo;
                    var0 = var1.bind(var2)(var0);
                case 208:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[70] = var0;
        var0 = {};
        var5 = 'chooseEncryptionMode';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var6
            _fun32378: for (var _fun32378_ip = 0;;) switch (_fun32378_ip) {
                case 0:
                    var5 = arg0;
                    var1 = _closure1_slot37;
                    var3 = undefined;
                    var0 = arg1;
                    var2 = var1.bind(var3)(var0);
                    var1 = var2.bind(var3)();
                    var0 = var1.done;
                    if (var0) {
                        _fun32378_ip = 101;
                        continue _fun32378
                    }
                case 32:
                    var0 = var1.value;
                    var6 = _closure1_slot37;
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.bind(var3)();
                    var6 = var7.done;
                    if (var6) {
                        _fun32378_ip = 86;
                        continue _fun32378
                    }
                case 58:
                    var6 = var7.value;
                    if (!(var0 !== var6)) {
                        _fun32378_ip = 84;
                        continue _fun32378
                    }
                case 67:
                    var9 = var8.bind(var3)();
                    var6 = var9.done;
                    var7 = var9;
                    if (var6) {
                        _fun32378_ip = 86;
                        continue _fun32378
                    }
                case 82:
                    _fun32378_ip = 58;
                    continue _fun32378;
                case 84:
                    return var0;
                case 86:
                    var6 = var2.bind(var3)();
                    var0 = var6.done;
                    var1 = var6;
                    if (!var0) {
                        _fun32378_ip = 32;
                        continue _fun32378
                    }
                case 101:
                    var0 = 'xsalsa20_poly1305';
                    return var0;
            }
        };
        var0.value = var5;
        var1[71] = var0;
        var0 = {};
        var5 = 'getUserOptions';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var1 = this;
            var _closure3_slot0 = var1;
            var2 = global;
            var3 = var2.Object;
            var2 = var3.keys;
            var1 = var1.remoteAudioSSRCs;
            var2 = var2.bind(var3)(var1);
            var1 = var2.map;
            var0 = function(arg0) { // Environment: var0
                _fun32380: for (var _fun32380_ip = 0;;) switch (_fun32380_ip) {
                    case 0:
                        var3 = arg0;
                        var0 = _closure3_slot0;
                        var0 = var0.remoteVideoSSRCs;
                        var0 = var0[var3];
                        var2 = 0;
                        var5 = undefined;
                        var4 = 0;
                        if (!(var5 !== var0)) {
                            _fun32380_ip = 76;
                            continue _fun32380
                        }
                    case 30:
                        var0 = _closure3_slot0;
                        var0 = var0.remoteVideoSSRCs;
                        var0 = var0[var3];
                        var0 = var0.length;
                        var0 = var0 > var2;
                        var4 = 0;
                        if (!var0) {
                            _fun32380_ip = 76;
                            continue _fun32380
                        }
                    case 58:
                        var0 = _closure3_slot0;
                        var0 = var0.remoteVideoSSRCs;
                        var0 = var0[var3];
                        var4 = var0[var2];
                    case 76:
                        var0 = {};
                        var0.id = var3;
                        var2 = _closure3_slot0;
                        var1 = var2.remoteAudioSSRCs;
                        var1 = var1[var3];
                        var0.ssrc = var1;
                        var0.videoSsrc = var4;
                        var1 = var2.remoteVideoSSRCs;
                        var1 = var1[var3];
                        var0.videoSsrcs = var1;
                        var1 = _closure1_slot40;
                        var1 = var1.bind(var5)(var4);
                        var0.rtxSsrc = var1;
                        var1 = var2.getLocalMute;
                        var1 = var1.bind(var2)(var3);
                        var0.mute = var1;
                        var1 = var2.getLocalVolume;
                        var1 = var1.bind(var2)(var3);
                        var0.volume = var1;
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var1[72] = var0;
        var0 = {};
        var5 = 'createInputModeOptions';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun32381: for (var _fun32381_ip = 0;;) switch (_fun32381_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.inputMode;
                    var0 = _closure1_slot20;
                    var0 = var0.VOICE_ACTIVITY;
                    if (!(var0 !== var2)) {
                        _fun32381_ip = 113;
                        continue _fun32381
                    }
                case 26:
                    var0 = _closure1_slot20;
                    var0 = var0.PUSH_TO_TALK;
                    if (!(var0 !== var2)) {
                        _fun32381_ip = 98;
                        continue _fun32381
                    }
                case 40:
                    var0 = global;
                    var4 = var0.Error;
                    var5 = var1.inputMode;
                    var0 = var0.HermesInternal;
                    var2 = var0.concat;
                    var0 = 'Unknown Input Mode: ';
                    var6 = var2.bind(var0)(var5);
                    var2 = var4.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = var2;
                    var0 = new var7[var4](var6, var5);
                    var0 = var0 instanceof Object ? var0 : var2;
                    throw var0;
                case 98:
                    var0 = {};
                    var2 = var1.pttReleaseDelay;
                    var0.pttReleaseDelay = var2;
                    return var0;
                case 113:
                    var0 = {};
                    var2 = var1.vadThreshold;
                    var0.vadThreshold = var2;
                    var2 = var1.vadAutoThreshold;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 21;
                    var4 = var4[var3];
                    var3 = undefined;
                    var3 = var5.bind(var3)(var4);
                    var3 = var3.VADAggressiveness;
                    if (var2) {
                        _fun32381_ip = 171;
                        continue _fun32381
                    }
                case 163:
                    var2 = var3.DISABLED;
                    _fun32381_ip = 177;
                    continue _fun32381;
                case 171:
                    var2 = var3.VERY_AGGRESSIVE;
                case 177:
                    var0.vadAutoThreshold = var2;
                    var2 = var1.vadUseKrisp;
                    var0.vadUseKrisp = var2;
                    var2 = var1.vadLeading;
                    var0.vadLeading = var2;
                    var2 = var1.vadTrailing;
                    var0.vadTrailing = var2;
                    var2 = var1.vadKrispActivationThreshold;
                    var0.vadKrispActivationThreshold = var2;
                    var1 = var1.vadDuringPreProcess;
                    var0.vadDuringPreProcess = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[73] = var0;
        var0 = {};
        var5 = 'getAttenuationOptions';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var1 = this;
            var0 = {};
            var2 = var1.isAttenuating;
            var2 = var2.bind(var1)();
            var0.attenuation = var2;
            var2 = var1.attenuationFactor;
            var0.attenuationFactor = var2;
            var2 = var1.attenuateWhileSpeakingSelf;
            var0.attenuateWhileSpeakingSelf = var2;
            var1 = var1.attenuateWhileSpeakingOthers;
            var0.attenuateWhileSpeakingOthers = var1;
            return var0;
        };
        var0.value = var5;
        var1[74] = var0;
        var0 = {};
        var5 = 'getCodecParams';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var6
            _fun32383: for (var _fun32383_ip = 0;;) switch (_fun32383_ip) {
                case 0:
                    var0 = _closure1_slot22;
                    var2 = var0.H264;
                    var0 = arg0;
                    if (!(var0 === var2)) {
                        _fun32383_ip = 121;
                        continue _fun32383
                    }
                case 20:
                    var0 = arg1;
                    if (var0) {
                        _fun32383_ip = 105;
                        continue _fun32383
                    }
                case 26:
                    var0 = {
                        'level-asymmetry-allowed': '1',
                        'packetization-mode': '1'
                    };
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 9;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.getVoiceEngine;
                    var1 = var1.bind(var2)();
                    var3 = var1.platform;
                    var1 = '4d0033';
                    var2 = 'android';
                    if (!(var2 === var3)) {
                        _fun32383_ip = 98;
                        continue _fun32383
                    }
                case 92:
                    var1 = '42e01f';
                case 98:
                    var0['profile-level-id'] = var1;
                    _fun32383_ip = 119;
                    continue _fun32383;
                case 105:
                    var0 = {
                        'level-asymmetry-allowed': '1',
                        'packetization-mode': '1',
                        'profile-level-id': '42e034'
                    };
                case 119:
                    _fun32383_ip = 123;
                    continue _fun32383;
                case 121:
                    var0 = {};
                case 123:
                    return var0;
            }
        };
        var0.value = var5;
        var1[75] = var0;
        var0 = {};
        var5 = 'getCodecOptions';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var6
            _fun32384: for (var _fun32384_ip = 0;;) switch (_fun32384_ip) {
                case 0:
                    var25 = arg0;
                    var24 = arg1;
                    var23 = this;
                    var _closure3_slot0 = var25;
                    var3 = var23.codecs;
                    var2 = var3.find;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.name;
                        var0 = _closure3_slot0;
                        var0 = var1 === var0;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    var2 = {
                        'type': null,
                        'name': null,
                        'freq': 48000,
                        'pacsize': 960,
                        'channels': 1,
                        'rate': 64000
                    };
                    var22 = null;
                    var4 = var22 == var1;
                    var21 = undefined;
                    var3 = undefined;
                    if (var4) {
                        _fun32384_ip = 69;
                        continue _fun32384
                    }
                case 63:
                    var3 = var1.payloadType;
                case 69:
                    var4 = var22 != var3;
                    var1 = 0;
                    if (!var4) {
                        _fun32384_ip = 81;
                        continue _fun32384
                    }
                case 78:
                    var1 = var3;
                case 81:
                    var2.type = var1;
                    var2.name = var25;
                    var4 = var23.codecs;
                    var3 = var4.filter;
                    var1 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        var1 = var0.type;
                        var0 = 'audio';
                        var0 = var0 === var1;
                        return var0;
                    };
                    var3 = var3.bind(var4)(var1);
                    var1 = var3.map;
                    var0 = function(arg0) { // Environment: var0
                        _fun32387: for (var _fun32387_ip = 0;;) switch (_fun32387_ip) {
                            case 0:
                                var1 = arg0;
                                var0 = {};
                                var2 = null;
                                var4 = var2 == var1;
                                var3 = undefined;
                                if (var4) {
                                    _fun32387_ip = 22;
                                    continue _fun32387
                                }
                            case 16:
                                var3 = var1.payloadType;
                            case 22:
                                var4 = var2 != var3;
                                var2 = 0;
                                if (!var4) {
                                    _fun32387_ip = 34;
                                    continue _fun32387
                                }
                            case 31:
                                var2 = var3;
                            case 34:
                                var0.type = var2;
                                var1 = var1.name;
                                var0.name = var1;
                                var1 = 48000;
                                var0.freq = var1;
                                var1 = 2;
                                var0.channels = var1;
                                var1 = {};
                                var2 = '1';
                                var1.stereo = var2;
                                var0.params = var1;
                                return var0;
                        }
                    };
                    var1 = var1.bind(var3)(var0);
                    var0 = _closure1_slot23;
                    var3 = var0.STREAM;
                    var0 = arg2;
                    if (!(var0 === var3)) {
                        _fun32384_ip = 158;
                        continue _fun32384
                    }
                case 149:
                    var0 = 2;
                    var2.channels = var0;
                case 158:
                    var3 = new Array(0);
                    var4 = {
                        'name': '',
                        'type': 0,
                        'rtxType': 0
                    };
                    var0 = {};
                    var4.params = var0;
                    var5 = _closure1_slot37;
                    var0 = var23.codecs;
                    var18 = var5.bind(var21)(var0);
                    var5 = var18.bind(var21)();
                    var0 = var5.done;
                    var17 = '1';
                    var16 = false;
                    var15 = 'params';
                    var14 = '3';
                    var13 = true;
                    var12 = 15;
                    var11 = var5;
                    var10 = var4;
                    var9 = undefined;
                    var8 = undefined;
                    var7 = undefined;
                    var6 = undefined;
                    var5 = undefined;
                    var4 = var10;
                    if (var0) {
                        _fun32384_ip = 896;
                        continue _fun32384
                    }
                case 255:
                    var27 = var11.value;
                    var0 = var27.name;
                    var26 = var10;
                    if (!(var0 !== var25)) {
                        _fun32384_ip = 872;
                        continue _fun32384
                    }
                case 275:
                    var0 = {};
                    var29 = _closure1_slot0;
                    var28 = _closure1_slot2;
                    var28 = var28[var12];
                    var30 = var29.bind(var21)(var28);
                    var29 = var30.codecNameToPayloadName;
                    var28 = var27.name;
                    var28 = var29.bind(var30)(var28);
                    var0.name = var28;
                    var28 = var22 == var27;
                    var29 = undefined;
                    if (var28) {
                        _fun32384_ip = 329;
                        continue _fun32384
                    }
                case 323:
                    var29 = var27.payloadType;
                case 329:
                    var30 = var22 != var29;
                    var28 = 0;
                    if (!var30) {
                        _fun32384_ip = 341;
                        continue _fun32384
                    }
                case 338:
                    var28 = var29;
                case 341:
                    var0.type = var28;
                    var30 = var22 == var27;
                    var28 = undefined;
                    if (var30) {
                        _fun32384_ip = 360;
                        continue _fun32384
                    }
                case 354:
                    var28 = var27.rtxPayloadType;
                case 360:
                    var31 = var22 != var28;
                    var30 = 0;
                    if (!var31) {
                        _fun32384_ip = 372;
                        continue _fun32384
                    }
                case 369:
                    var30 = var28;
                case 372:
                    var0.rtxType = var30;
                    var31 = var23.getCodecParams;
                    var30 = var27.name;
                    var30 = var31.bind(var23)(var30, var13);
                    var0.params = var30;
                    var32 = var23.experimentFlags;
                    var31 = var32.has;
                    var30 = _closure1_slot11;
                    var30 = var30.RESET_DECODER_ON_ERRORS;
                    var30 = var31.bind(var32)(var30);
                    if (!var30) {
                        _fun32384_ip = 442;
                        continue _fun32384
                    }
                case 428:
                    var30 = var0.params;
                    var30['reset-on-errors'] = var17;
                case 442:
                    var32 = var23.experimentFlags;
                    var31 = var32.has;
                    var30 = _closure1_slot11;
                    var30 = var30.SOFTWARE_FALLBACK_ON_ERRORS;
                    var30 = var31.bind(var32)(var30);
                    if (!var30) {
                        _fun32384_ip = 485;
                        continue _fun32384
                    }
                case 471:
                    var30 = var0.params;
                    var30['fallback-after-errors'] = var14;
                case 485:
                    var32 = var23.experimentFlags;
                    var31 = var32.has;
                    var30 = _closure1_slot11;
                    var30 = var30.SOFTWARE_FALLBACK_ON_CONSECUTIVE_ERRORS;
                    var30 = var31.bind(var32)(var30);
                    if (!var30) {
                        _fun32384_ip = 528;
                        continue _fun32384
                    }
                case 514:
                    var30 = var0.params;
                    var30['fallback-on-consecutive-errors'] = var17;
                case 528:
                    var32 = var23.experimentFlags;
                    var31 = var32.has;
                    var30 = _closure1_slot11;
                    var30 = var30.SIGNAL_AV1_HARDWARE_DECODE;
                    var30 = var31.bind(var32)(var30);
                    if (!var30) {
                        _fun32384_ip = 571;
                        continue _fun32384
                    }
                case 557:
                    var30 = var0.params;
                    var30['hardware-av1-decode'] = var17;
                case 571:
                    var30 = var0.name;
                    var30 = var0.params;
                    var30['hardware-h264'] = var17;
                    var32 = var23.experimentFlags;
                    var31 = var32.has;
                    var30 = _closure1_slot11;
                    var30 = var30.USE_H264_MF_DECODER;
                    var30 = var31.bind(var32)(var30);
                    if (!var30) {
                        _fun32384_ip = 633;
                        continue _fun32384
                    }
                case 619:
                    var30 = var0.params;
                    var30['h264-mf'] = var17;
                case 633:
                    var30 = var3.push;
                    var30 = var30.bind(var3)(var0);
                    var30 = var27.name;
                    var26 = var10;
                    var9 = var29;
                    var8 = var27;
                    var7 = var28;
                    var6 = var8;
                    var5 = var0;
                    if (!(var30 === var24)) {
                        _fun32384_ip = 872;
                        continue _fun32384
                    }
                case 673:
                    var30 = {};
                    var35 = var30;
                    var34 = var0;
                    var31 = copyDataProperties(var35, var34);
                    var32 = var23.getCodecParams;
                    var31 = var27.name;
                    var31 = var32.bind(var23)(var31, var16);
                    var30[var15] = var31;
                    var33 = var23.experimentFlags;
                    var32 = var33.has;
                    var31 = _closure1_slot11;
                    var31 = var31.VIDEOTOOLBOX_RATE_CONTROL;
                    var31 = var32.bind(var33)(var31);
                    if (!var31) {
                        _fun32384_ip = 750;
                        continue _fun32384
                    }
                case 736:
                    var31 = var30.params;
                    var31['fixed-rate-presentation-timestamps'] = var17;
                case 750:
                    var33 = var23.experimentFlags;
                    var32 = var33.has;
                    var31 = _closure1_slot11;
                    var31 = var31.LOW_LATENCY_RATE_CONTROL;
                    var31 = var32.bind(var33)(var31);
                    if (!var31) {
                        _fun32384_ip = 793;
                        continue _fun32384
                    }
                case 779:
                    var31 = var30.params;
                    var31['low-latency-rate-control'] = var17;
                case 793:
                    var33 = var23.experimentFlags;
                    var32 = var33.has;
                    var31 = _closure1_slot11;
                    var31 = var31.WMF_GPU_ENCODE;
                    var31 = var32.bind(var33)(var31);
                    var26 = var30;
                    var9 = var29;
                    var8 = var27;
                    var7 = var28;
                    var6 = var8;
                    var5 = var0;
                    if (!var31) {
                        _fun32384_ip = 872;
                        continue _fun32384
                    }
                case 840:
                    var31 = var30.params;
                    var31['wmf-gpu'] = var17;
                    var26 = var30;
                    var9 = var29;
                    var8 = var27;
                    var7 = var28;
                    var6 = var8;
                    var5 = var0;
                case 872:
                    var27 = var18.bind(var21)();
                    var0 = var27.done;
                    var10 = var26;
                    var11 = var27;
                    var4 = var10;
                    if (!var0) {
                        _fun32384_ip = 255;
                        continue _fun32384
                    }
                case 896:
                    var0 = {};
                    var0.videoEncoder = var4;
                    var0.videoDecoders = var3;
                    var0.audioEncoder = var2;
                    var0.audioDecoders = var1;
                    return var0;
            }
        };
        var0.value = var5;
        var1[76] = var0;
        var0 = {};
        var5 = 'getKeyFrameInterval';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun32388: for (var _fun32388_ip = 0;;) switch (_fun32388_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.keyframeInterval;
                    var2 = 0;
                    if (!(var0 > var2)) {
                        _fun32388_ip = 25;
                        continue _fun32388
                    }
                case 15:
                    var0 = var1.clipsKeyFrameInterval;
                    if (!(!(var0 > var2))) {
                        _fun32388_ip = 58;
                        continue _fun32388
                    }
                case 25:
                    var0 = global;
                    var4 = var0.Math;
                    var3 = var4.max;
                    var2 = var1.keyframeInterval;
                    var0 = var1.clipsKeyFrameInterval;
                    var0 = var3.bind(var4)(var2, var0);
                    _fun32388_ip = 89;
                    continue _fun32388;
                case 58:
                    var2 = global;
                    var4 = var2.Math;
                    var3 = var4.min;
                    var2 = var1.keyframeInterval;
                    var1 = var1.clipsKeyFrameInterval;
                    var0 = var3.bind(var4)(var2, var1);
                case 89:
                    return var0;
            }
        };
        var0.value = var5;
        var1[77] = var0;
        var0 = {};
        var5 = 'getConnectionTransportOptions';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            _fun32389: for (var _fun32389_ip = 0;;) switch (_fun32389_ip) {
                case 0:
                    var3 = this;
                    var0 = {};
                    var1 = var3.selfMute;
                    var0.selfMute = var1;
                    var4 = _closure1_slot19;
                    var1 = var3.inputMode;
                    var1 = var4[var1];
                    var0.inputMode = var1;
                    var1 = var3.createInputModeOptions;
                    var1 = var1.bind(var3)();
                    var0.inputModeOptions = var1;
                    var1 = var3.minimumJitterBufferLevel;
                    var0.minimumJitterBufferLevel = var1;
                    var1 = var3.postponeDecodeLevel;
                    var0.postponeDecodeLevel = var1;
                    var1 = var3.getAttenuationOptions;
                    var7 = var1.bind(var3)();
                    var8 = var0;
                    var1 = copyDataProperties(var8, var7);
                    var1 = true;
                    var4 = 'fec';
                    var0[var4] = var1;
                    var5 = 0.3;
                    var4 = 'packetLossRate';
                    var0[var4] = var5;
                    var5 = var3.qos;
                    var4 = 'qos';
                    var0[var4] = var5;
                    var5 = _closure1_slot34;
                    var4 = 'prioritySpeakerDucking';
                    var0[var4] = var5;
                    var5 = var3.voiceBitrate;
                    var4 = 'encodingVoiceBitRate';
                    var0[var4] = var5;
                    var5 = _closure1_slot31;
                    var4 = 'callBitRate';
                    var0[var4] = var5;
                    var5 = _closure1_slot32;
                    var4 = 'callMinBitRate';
                    var0[var4] = var5;
                    var5 = _closure1_slot33;
                    var4 = 'callMaxBitRate';
                    var0[var4] = var5;
                    var5 = var3.videoDegradationPreference;
                    var4 = 'encodingVideoDegradationPreference';
                    var0[var4] = var5;
                    var5 = var3.reconnectInterval;
                    var4 = 'reconnectInterval';
                    var0[var4] = var5;
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 9;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.supportsFeature;
                    var4 = _closure1_slot26;
                    var4 = var4.VIDEO_EFFECTS;
                    var4 = var5.bind(var6)(var4);
                    if (!var4) {
                        _fun32389_ip = 309;
                        continue _fun32389
                    }
                case 290:
                    var6 = var3.context;
                    var5 = _closure1_slot23;
                    var5 = var5.STREAM;
                    var4 = var6 === var5;
                case 309:
                    if (!var4) {
                        _fun32389_ip = 320;
                        continue _fun32389
                    }
                case 312:
                    var0.enableVideoEffects = var1;
                case 320:
                    var6 = var3.experimentFlags;
                    var5 = var6.has;
                    var4 = _closure1_slot11;
                    var4 = var4.MUTE_BEFORE_PROCESSING;
                    var4 = var5.bind(var6)(var4);
                    if (!var4) {
                        _fun32389_ip = 355;
                        continue _fun32389
                    }
                case 349:
                    var0.muteBeforeProcessing = var1;
                case 355:
                    var6 = var3.experimentFlags;
                    var5 = var6.has;
                    var4 = _closure1_slot11;
                    var4 = var4.PTT_BEFORE_PROCESSING;
                    var4 = var5.bind(var6)(var4);
                    if (!var4) {
                        _fun32389_ip = 390;
                        continue _fun32389
                    }
                case 384:
                    var0.pttBeforeProcessing = var1;
                case 390:
                    var4 = var3.experimentFlags;
                    var3 = var4.has;
                    var2 = _closure1_slot11;
                    var2 = var2.SKIP_ENCODE;
                    var2 = var3.bind(var4)(var2);
                    if (!var2) {
                        _fun32389_ip = 425;
                        continue _fun32389
                    }
                case 419:
                    var0.skipEncode = var1;
                case 425:
                    return var0;
            }
        };
        var0.value = var5;
        var1[78] = var0;
        var0 = {};
        var5 = 'setStream';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = global;
            var2 = var0.Error;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = 'Method not implemented.';
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            throw var0;
        };
        var0.value = var5;
        var1[79] = var0;
        var0 = {};
        var5 = 'getUserIdBySsrc';
        var0.key = var5;
        var5 = function() { // Original name: value, environment: var6
            var0 = undefined;
            return var0;
        };
        var0.value = var5;
        var1[80] = var0;
        var0 = {};
        var5 = 'prepareSecureFramesTransition';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var6
            _fun32392: for (var _fun32392_ip = 0;;) switch (_fun32392_ip) {
                case 0:
                    var5 = arg0;
                    var0 = this;
                    var1 = 0;
                    if (!(var1 === var5)) {
                        _fun32392_ip = 30;
                        continue _fun32392
                    }
                case 12:
                    var1 = -1;
                    var0.lastExecutedTransitionId = var1;
                    var0.lastPreparedTransitionId = var1;
                case 30:
                    var0.lastPreparedTransitionId = var5;
                    var4 = var0.conn;
                    var3 = var4.prepareSecureFramesTransition;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun32392_ip = 78;
                        continue _fun32392
                    }
                case 54:
                    var2 = var3.call;
                    var7 = arg1;
                    var6 = arg2;
                    var10 = var3;
                    var9 = var4;
                    var8 = var5;
                    var0 = var10[var2](var9, var8, var7, var6, var5);
                case 78:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[81] = var0;
        var0 = {};
        var5 = 'prepareSecureFramesEpoch';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var6
            _fun32393: for (var _fun32393_ip = 0;;) switch (_fun32393_ip) {
                case 0:
                    var0 = this;
                    var5 = var0.conn;
                    var4 = var5.prepareSecureFramesEpoch;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun32393_ip = 45;
                        continue _fun32393
                    }
                case 21:
                    var3 = var4.call;
                    var8 = arg0;
                    var7 = arg1;
                    var6 = arg2;
                    var10 = var4;
                    var9 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                case 45:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[82] = var0;
        var0 = {};
        var5 = 'executeSecureFramesTransition';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32394: for (var _fun32394_ip = 0;;) switch (_fun32394_ip) {
                case 0:
                    var3 = arg0;
                    var0 = this;
                    var1 = var0.lastExecutedTransitionId;
                    var2 = -1;
                    if (!(var2 !== var1)) {
                        _fun32394_ip = 207;
                        continue _fun32394
                    }
                case 25:
                    var1 = var0.lastPreparedTransitionId;
                    if (!(var2 !== var1)) {
                        _fun32394_ip = 207;
                        continue _fun32394
                    }
                case 38:
                    var2 = var0.lastPreparedTransitionId;
                    var1 = var0.lastExecutedTransitionId;
                    if (!(!(var2 >= var1))) {
                        _fun32394_ip = 79;
                        continue _fun32394
                    }
                case 54:
                    var1 = var0.lastExecutedTransitionId;
                    var1 = var3 > var1;
                    if (var1) {
                        _fun32394_ip = 77;
                        continue _fun32394
                    }
                case 67:
                    var2 = var0.lastPreparedTransitionId;
                    var1 = var3 <= var2;
                case 77:
                    _fun32394_ip = 105;
                    continue _fun32394;
                case 79:
                    var2 = var0.lastExecutedTransitionId;
                    var2 = var3 > var2;
                    if (!var2) {
                        _fun32394_ip = 102;
                        continue _fun32394
                    }
                case 92:
                    var4 = var0.lastPreparedTransitionId;
                    var2 = var3 <= var4;
                case 102:
                    var1 = var2;
                case 105:
                    if (var1) {
                        _fun32394_ip = 207;
                        continue _fun32394
                    }
                case 108:
                    var13 = var0.lastExecutedTransitionId;
                    var11 = var0.lastPreparedTransitionId;
                    var1 = global;
                    var2 = var1.HermesInternal;
                    var7 = var2.concat;
                    var16 = 'Skipping invalid transition ';
                    var14 = ' outside of range (';
                    var12 = '-';
                    var10 = ']';
                    var15 = var3;
                    var4 = var16[var7](var15, var14, var13, var12, var11, var10, var9);
                    var5 = var0.logger;
                    var2 = var5.warn;
                    var2 = var2.bind(var5)(var4);
                    var1 = var1.Error;
                    var2 = var1.prototype;
                    var2 = Object.create(var2, {
                        constructor: {
                            value: var1
                        }
                    });
                    var16 = var2;
                    var15 = var4;
                    var1 = new var16[var1](var15, var14);
                    var1 = var1 instanceof Object ? var1 : var2;
                    throw var1;
                case 207:
                    var0.lastExecutedTransitionId = var3;
                    var2 = var0.conn;
                    var1 = var2.executeSecureFramesTransition;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun32394_ip = 242;
                        continue _fun32394
                    }
                case 231:
                    var0 = var1.call;
                    var0 = var0.bind(var1)(var2, var3);
                case 242:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[83] = var0;
        var0 = {};
        var5 = 'getMLSKeyPackage';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32395: for (var _fun32395_ip = 0;;) switch (_fun32395_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.conn;
                    var2 = var3.getMLSKeyPackage;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun32395_ip = 35;
                        continue _fun32395
                    }
                case 21:
                    var1 = var2.call;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var3, var0);
                case 35:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[84] = var0;
        var0 = {};
        var5 = 'updateMLSExternalSender';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32396: for (var _fun32396_ip = 0;;) switch (_fun32396_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.conn;
                    var2 = var3.updateMLSExternalSender;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun32396_ip = 35;
                        continue _fun32396
                    }
                case 21:
                    var1 = var2.call;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var3, var0);
                case 35:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[85] = var0;
        var0 = {};
        var5 = 'processMLSProposals';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: value, environment: var6
            _fun32397: for (var _fun32397_ip = 0;;) switch (_fun32397_ip) {
                case 0:
                    var0 = this;
                    var4 = var0.conn;
                    var3 = var4.processMLSProposals;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun32397_ip = 39;
                        continue _fun32397
                    }
                case 21:
                    var2 = var3.call;
                    var1 = arg0;
                    var0 = arg1;
                    var0 = var2.bind(var3)(var4, var1, var0);
                case 39:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[86] = var0;
        var0 = {};
        var5 = 'prepareMLSCommitTransition';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var6
            _fun32398: for (var _fun32398_ip = 0;;) switch (_fun32398_ip) {
                case 0:
                    var5 = arg0;
                    var0 = this;
                    var0.lastPreparedTransitionId = var5;
                    var4 = var0.conn;
                    var3 = var4.prepareMLSCommitTransition;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun32398_ip = 54;
                        continue _fun32398
                    }
                case 30:
                    var2 = var3.call;
                    var7 = arg1;
                    var6 = arg2;
                    var10 = var3;
                    var9 = var4;
                    var8 = var5;
                    var0 = var10[var2](var9, var8, var7, var6, var5);
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[87] = var0;
        var0 = {};
        var5 = 'processMLSWelcome';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var6
            _fun32399: for (var _fun32399_ip = 0;;) switch (_fun32399_ip) {
                case 0:
                    var5 = arg0;
                    var0 = this;
                    var0.lastPreparedTransitionId = var5;
                    var4 = var0.conn;
                    var3 = var4.processMLSWelcome;
                    var0 = null;
                    if (!(var0 != var3)) {
                        _fun32399_ip = 54;
                        continue _fun32399
                    }
                case 30:
                    var2 = var3.call;
                    var7 = arg1;
                    var6 = arg2;
                    var10 = var3;
                    var9 = var4;
                    var8 = var5;
                    var0 = var10[var2](var9, var8, var7, var6, var5);
                case 54:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[88] = var0;
        var0 = {};
        var5 = 'getMLSPairwiseFingerprint';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: value, environment: var6
            _fun32400: for (var _fun32400_ip = 0;;) switch (_fun32400_ip) {
                case 0:
                    var0 = this;
                    var5 = var0.conn;
                    var4 = var5.getMLSPairwiseFingerprint;
                    var0 = null;
                    if (!(var0 != var4)) {
                        _fun32400_ip = 45;
                        continue _fun32400
                    }
                case 21:
                    var3 = var4.call;
                    var8 = arg0;
                    var7 = arg1;
                    var6 = arg2;
                    var10 = var4;
                    var9 = var5;
                    var0 = var10[var3](var9, var8, var7, var6, var5);
                case 45:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[89] = var0;
        var0 = {};
        var5 = 'presentDesktopSourcePicker';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            _fun32401: for (var _fun32401_ip = 0;;) switch (_fun32401_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.conn;
                    var2 = var3.presentDesktopSourcePicker;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun32401_ip = 37;
                        continue _fun32401
                    }
                case 23:
                    var1 = var2.call;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var3, var0);
                case 37:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[90] = var0;
        var0 = {};
        var5 = 'mergeUsers';
        var0.key = var5;
        var5 = function(arg0) { // Original name: value, environment: var6
            var4 = arg0;
            var3 = this;
            var1 = var3.conn;
            var0 = var1.mergeUsers;
            var0 = var0.bind(var1)(var4);
            var2 = var3.emit;
            var5 = _closure1_slot0;
            var1 = _closure1_slot2;
            var0 = 10;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var5.bind(var0)(var1);
            var1 = var1.BaseConnectionEvent;
            var1 = var1.UsersMerged;
            var1 = var2.bind(var3)(var1, var4);
            return var0;
        };
        var0.value = var5;
        var1[91] = var0;
        var5 = {};
        var0 = 'create';
        var5.key = var0;
        var0 = function(arg0, arg1, arg2) { // Original name: value, environment: var6
            var4 = _closure2_slot0;
            var0 = var4.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var7 = arg0;
            var6 = arg1;
            var5 = true;
            var8 = var1;
            var0 = new var8[var4](var7, var6, var5, var4);
            var0 = var0 instanceof Object ? var0 : var1;
            var2 = var0.initialize;
            var1 = arg2;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var5.value = var0;
        var0 = new Array(2);
        var0[0] = var5;
        var5 = {};
        var7 = 'createReplay';
        var5.key = var7;
        var6 = function(arg0, arg1) { // Original name: value, environment: var6
            _fun32404: for (var _fun32404_ip = 0;;) switch (_fun32404_ip) {
                case 0:
                    var5 = arg0;
                    var _closure3_slot0 = var5;
                    var4 = _closure2_slot0;
                    var1 = var4.prototype;
                    var2 = Object.create(var1, {
                        constructor: {
                            value: var4
                        }
                    });
                    var7 = '0';
                    var6 = true;
                    var9 = var2;
                    var8 = var5;
                    var1 = new var9[var4](var8, var7, var6, var5);
                    var1 = var1 instanceof Object ? var1 : var2;
                    var _closure3_slot1 = var1;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.getVoiceEngine;
                    var5 = var3.bind(var4)();
                    var _closure3_slot2 = var5;
                    var3 = var1.initializeStreamParameters;
                    var4 = {
                        'type': null,
                        'rid': '100',
                        'ssrc': 0,
                        'rtxSsrc': 0,
                        'quality': 100,
                        'active': false
                    };
                    var2 = _closure1_slot15;
                    var2 = var2.VIDEO;
                    var4.type = var2;
                    var2 = new Array(1);
                    var2[0] = var4;
                    var2 = var3.bind(var1)(var2);
                    var4 = var5.createReplayConnection;
                    var3 = 'default';
                    var2 = function() { // Environment: var0
                        var2 = _closure3_slot1;
                        var5 = var2.on;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 10;
                        var3 = var3[var0];
                        var0 = undefined;
                        var3 = var4.bind(var0)(var3);
                        var3 = var3.BaseConnectionEvent;
                        var4 = var3.Stats;
                        var3 = var2.handleStats;
                        var3 = var5.bind(var2)(var4, var3);
                        var4 = var2.conn;
                        var3 = var4.setOnVideoCallback;
                        var2 = var2.handleVideo;
                        var2 = var3.bind(var4)(var2);
                        var3 = _closure3_slot2;
                        var2 = var3.getCodecCapabilities;
                        var1 = function(arg0) { // Environment: var1
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot2;
                            var5 = 15;
                            var1 = var8[var5];
                            var0 = undefined;
                            var9 = var7.bind(var0)(var1);
                            var6 = var9.getExperimentCodecs;
                            var1 = _closure3_slot1;
                            var4 = var1.experimentFlags;
                            var9 = var6.bind(var9)(var4);
                            var10 = {
                                'type': 'audio',
                                'name': null,
                                'priority': 1,
                                'payloadType': 120
                            };
                            var3 = _closure1_slot22;
                            var4 = var3.OPUS;
                            var10.name = var4;
                            var11 = 1;
                            var4 = new Array(1);
                            var4[0] = var10;
                            var5 = var8[var5];
                            var8 = var7.bind(var0)(var5);
                            var7 = var8.filterVideoCodecs;
                            var5 = arg0;
                            var8 = var7.bind(var8)(var5, var9);
                            var7 = var8.map;
                            var5 = function(arg0, arg1) { // Environment: var5
                                var1 = arg0;
                                var4 = arg1;
                                var0 = 2;
                                var2 = var0 * var4;
                                var0 = 101;
                                var3 = var0 + var2;
                                var0 = {};
                                var2 = 'video';
                                var0.type = var2;
                                var2 = var1.name;
                                var0.name = var2;
                                var2 = 1;
                                var4 = var4 + var2;
                                var0.priority = var4;
                                var0.payloadType = var3;
                                var2 = var3 + var2;
                                var0.rtxPayloadType = var2;
                                var2 = var1.encode;
                                var0.encode = var2;
                                var1 = var1.decode;
                                var0.decode = var1;
                                return var0;
                            };
                            var12 = var7.bind(var8)(var5);
                            var13 = var4;
                            var5 = arraySpread(var13, var12, var11);
                            var1.codecs = var4;
                            var5 = var1.setCodecs;
                            var4 = var3.OPUS;
                            var3 = var3.H264;
                            var2 = _closure3_slot0;
                            var2 = var5.bind(var1)(var4, var3, var2);
                            var2 = var1.conn;
                            var1 = var2.startReplay;
                            var1 = var1.bind(var2)();
                            return var0;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0 = arg1;
                    var2 = var4.bind(var5)(var3, var2, var0);
                    var0 = null;
                    var3 = var0 == var2;
                    if (var3) {
                        _fun32404_ip = 182;
                        continue _fun32404
                    }
                case 173:
                    var1.conn = var2;
                    var0 = var1;
                case 182:
                    return var0;
            }
        };
        var5.value = var6;
        var0[1] = var5;
        var0 = var2.bind(var3)(var4, var1, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 23;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/media-engine/native/Connection.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 15, 17, 102, 18, 3469, 3592, 3437, 3590, 3601, 3603, 3633, 4, 3638, 3640, 3641, 3599, 3643, 3644, 3646, 3647, 2]);