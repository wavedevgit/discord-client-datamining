// ../discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun30529: for (var _fun30529_ip = 0;;) switch (_fun30529_ip) {
        case 0:
            var3 = require;
            var6 = metroImportDefault;
            var2 = exports;
            var4 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var4;
            var0 = function arg0() {
                var0 = global;
                var3 = var0.Buffer;
                var2 = var3.from;
                var1 = arg0;
                var0 = 'base64';
                var0 = var2.bind(var3)(var1, var0);
                var0 = var0.buffer;
                return var0;
            };
            var _closure1_slot11 = var0;
            var0 = function arg0() {
                var0 = global;
                var2 = var0.Buffer;
                var1 = var2.from;
                var0 = arg0;
                var2 = var1.bind(var2)(var0);
                var1 = var2.toString;
                var0 = 'base64';
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var _closure1_slot12 = var0;
            var8 = function arg0, arg1() {
                var1 = arg1;
                var _closure2_slot0 = var1;
                var1 = null;
                var _closure2_slot1 = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var4 = var1.VoiceEngineEmitter;
                var3 = var4.addListener;
                var2 = arg0;
                var1 = function(arg0) { // Environment: var0
                    _fun30533: for (var _fun30533_ip = 0;;) switch (_fun30533_ip) {
                        case 0:
                            var2 = _closure2_slot1;
                            var0 = null;
                            var2 = var0 == var2;
                            var3 = undefined;
                            var0 = undefined;
                            if (var2) {
                                _fun30533_ip = 61;
                                continue _fun30533
                            }
                        case 20:
                            var2 = _closure2_slot1;
                            var4 = _closure2_slot0;
                            var1 = arg0;
                            var7 = var4.bind(var3)(var1);
                            var1 = new Array(0);
                            var6 = 0;
                            var8 = var1;
                            var4 = arraySpread(var8, var7, var6);
                            var8 = var2;
                            var7 = var1;
                            var6 = undefined;
                            var0 = apply(var8, var7, var6);
                        case 61:
                            return var0;
                    }
                };
                var1 = var3.bind(var4)(var2, var1);
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    _closure2_slot1 = var0;
                    return var0;
                };
                return var0;
            };
            var0 = global;
            var9 = var0.Object;
            var7 = var9.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var9)(var2, var0, var1);
            var7 = 0;
            var1 = var4[var7];
            var0 = undefined;
            var1 = var6.bind(var0)(var1);
            var _closure1_slot2 = var1;
            var1 = 1;
            var1 = var4[var1];
            var1 = var6.bind(var0)(var1);
            var _closure1_slot3 = var1;
            var1 = 2;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var1 = var1.Platform;
            var6 = 3;
            var1 = var4[var6];
            var1 = var3.bind(var0)(var1);
            var10 = var1.Logger;
            var1 = var10.prototype;
            var9 = Object.create(var1, {
                constructor: {
                    value: var10
                }
            });
            var15 = 'VoiceEngine';
            var16 = var9;
            var1 = new var16[var10](var15, var14);
            var1 = var1 instanceof Object ? var1 : var9;
            var _closure1_slot4 = var1;
            var1 = 4;
            var9 = var4[var1];
            var9 = var3.bind(var0)(var9);
            var10 = var9.VoiceEngine;
            var9 = 'android';
            var10.platform = var9;
            var9 = var4[var1];
            var9 = var3.bind(var0)(var9);
            var10 = var9.VoiceEngine;
            var9 = var10.getConstants;
            var11 = var9.bind(var10)();
            var9 = null;
            var12 = var9 == var11;
            var10 = undefined;
            if (var12) {
                _fun30529_ip = 244;
                continue _fun30529
            }
        case 238:
            var10 = var11.supportedFeatures;
        case 244:
            if (!(var9 == var10)) {
                _fun30529_ip = 258;
                continue _fun30529
            }
        case 248:
            var10 = ['voice_sound_stop_loop', 'voice_relative_sounds', 'voice_legacy_subsystem', 'voice_experimental_subsystem', 'elevated_hook', 'soundshare', 'soundshare_loopback', 'set_audio_device_by_id', 'set_video_device_by_id', 'loopback', 'wumpus_video', 'hybrid_video', 'experiment_config', 'remote_locus_network_control', 'screen_previews', 'window_previews', 'audio_debug_state', 'connection_replay', 'simulcast_bugfix', 'RTC_REGION_RANKING', 'video_effects', 'electron_video', 'mediapipe', 'fixed_keyframe_interval'];
        case 258:
            var _closure1_slot5 = var10;
            var10 = var4[var1];
            var10 = var3.bind(var0)(var10);
            var11 = var10.VoiceEngine;
            var10 = function(arg0) { // Environment: var5
                var2 = _closure1_slot5;
                var1 = var2.includes;
                var0 = arg0;
                var0 = var1.bind(var2)(var0);
                return var0;
            };
            var11.supportsFeature = var10;
            var10 = ['configureConnectionRetries', 'getEncryptionModes', 'setTransportOptions', 'mergeUsers', 'destroyUser', 'setLocalPan', 'setLocalVolume', 'setLocalMute', 'fastUdpReconnect', 'wasRemoteDisconnected', 'setMinimumOutputDelay', 'setSelfMute', 'setSelfDeafen', 'setNoInputThreshold', 'setPTTActive', 'setVideoBroadcast', 'triggerOnVideoCallback', 'getStats', 'getFilteredStats', 'setPingInterval', 'setDesktopSource', 'prepareSecureFramesTransition', 'executeSecureFramesTransition', 'prepareSecureFramesEpoch', 'triggerOnSpeakingCallback'];
            var _closure1_slot6 = var10;
            var10 = var4[var1];
            var10 = var3.bind(var0)(var10);
            var10 = var10.VoiceEngine;
            var10 = var10.consoleLog;
            if (!(var9 != var10)) {
                _fun30529_ip = 352;
                continue _fun30529
            }
        case 327:
            var6 = var4[var6];
            var11 = var3.bind(var0)(var6);
            var10 = var11.setNativeLogFn;
            var6 = function(arg0, arg1, arg2) { // Environment: var5
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var4 = var1.VoiceEngine;
                var3 = var4.consoleLog;
                var1 = global;
                var1 = var1.HermesInternal;
                var7 = var1.concat;
                var6 = '[';
                var5 = arg0;
                var2 = '] ';
                var1 = arg2;
                var2 = var7.bind(var6)(var5, var2, var1);
                var1 = arg1;
                var1 = var3.bind(var4)(var1, var2);
                return var0;
            };
            var6 = var10.bind(var11)(var6);
        case 352:
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var6 = var6.VoiceEngine;
            var6 = var6.getMLSSigningKeyB64;
            if (!(var9 != var6)) {
                _fun30529_ip = 403;
                continue _fun30529
            }
        case 377:
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var9 = var6.VoiceEngine;
            var6 = function(arg0, arg1, arg2) { // Environment: var5
                var1 = arg2;
                var _closure2_slot0 = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 4;
                var2 = var2[var1];
                var1 = undefined;
                var1 = var3.bind(var1)(var2);
                var4 = var1.VoiceEngine;
                var3 = var4.getMLSSigningKeyB64;
                var2 = arg0;
                var1 = arg1;
                var0 = function(arg0, arg1) { // Environment: var0
                    _fun30538: for (var _fun30538_ip = 0;;) switch (_fun30538_ip) {
                        case 0:
                            var5 = arg1;
                            var3 = _closure2_slot0;
                            var4 = _closure1_slot11;
                            var0 = undefined;
                            var1 = arg0;
                            var2 = var4.bind(var0)(var1);
                            var1 = null;
                            var6 = var1 != var5;
                            var1 = '';
                            if (!var6) {
                                _fun30538_ip = 43;
                                continue _fun30538
                            }
                        case 40:
                            var1 = var5;
                        case 43:
                            var1 = var4.bind(var0)(var1);
                            var1 = var3.bind(var0)(var2, var1);
                            return var0;
                    }
                };
                var0 = var3.bind(var4)(var2, var1, var0);
                return var0;
            };
            var9.getMLSSigningKey = var6;
        case 403:
            var6 = function() { // Environment: var5
                var3 = _closure1_slot3;
                var2 = function() {
                    var4 = this;
                    var _closure3_slot0 = var4;
                    var3 = _closure1_slot2;
                    var6 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var3.bind(var0)(var4, var6);
                    var3 = var6.nextId;
                    var3 = parseFloat(var3);
                    var5 = var3 + 1;
                    var6.nextId = var5;
                    var4.id = var3;
                    var3 = new Array(0);
                    var4.subscriptions = var3;
                    var6 = var4.callbackSetter;
                    var5 = 'no-input-callback';
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.input;
                        var0 = new Array(1);
                        var0[0] = var1;
                        return var0;
                    };
                    var3 = var6.bind(var4)(var5, var3);
                    var4.setNoInputCallback = var3;
                    var6 = var4.callbackSetter;
                    var5 = 'on-first-frame-callback';
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var3 = var0.userId;
                        var2 = var0.ssrc;
                        var1 = var0.streamId;
                        var0 = new Array(3);
                        var0[0] = var3;
                        var0[1] = var2;
                        var0[2] = var1;
                        return var0;
                    };
                    var3 = var6.bind(var4)(var5, var3);
                    var4.setOnFirstFrameCallback = var3;
                    var6 = var4.callbackSetter;
                    var5 = 'native-mute-toggle';
                    var3 = function() { // Environment: var1
                        var0 = new Array(0);
                        return var0;
                    };
                    var3 = var6.bind(var4)(var5, var3);
                    var4.setOnNativeMuteToggleCallback = var3;
                    var6 = var4.callbackSetter;
                    var5 = 'native-mute-state-changed';
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var1 = var0.muted;
                        var0 = new Array(1);
                        var0[0] = var1;
                        return var0;
                    };
                    var3 = var6.bind(var4)(var5, var3);
                    var4.setOnNativeMuteChangedCallback = var3;
                    var6 = var4.callbackSetter;
                    var5 = 'ping-callback';
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var4 = var0.ping;
                        var3 = var0.server;
                        var2 = var0.port;
                        var1 = var0.seq;
                        var0 = new Array(4);
                        var0[0] = var4;
                        var0[1] = var3;
                        var0[2] = var2;
                        var0[3] = var1;
                        return var0;
                    };
                    var3 = var6.bind(var4)(var5, var3);
                    var4.setPingCallback = var3;
                    var6 = var4.callbackSetter;
                    var5 = 'ping-timeout-callback';
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var3 = var0.server;
                        var2 = var0.port;
                        var1 = var0.seq;
                        var0 = new Array(3);
                        var0[0] = var3;
                        var0[1] = var2;
                        var0[2] = var1;
                        return var0;
                    };
                    var3 = var6.bind(var4)(var5, var3);
                    var4.setPingTimeoutCallback = var3;
                    var6 = var4.callbackSetter;
                    var5 = 'user-speaking';
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var3 = var0.userId;
                        var2 = var0.isSpeaking;
                        var1 = var0.voiceDb;
                        var0 = new Array(3);
                        var0[0] = var3;
                        var0[1] = var2;
                        var0[2] = var1;
                        return var0;
                    };
                    var3 = var6.bind(var4)(var5, var3);
                    var4.setOnSpeakingCallback_ = var3;
                    var3 = function(arg0) { // Environment: var1
                        var1 = _closure3_slot0;
                        var2 = var1.setOnSpeakingCallback_;
                        var0 = arg0;
                        var0 = var2.bind(var1)(var0);
                        var0 = var1.triggerOnSpeakingCallback;
                        var0 = var0.bind(var1)();
                        var0 = undefined;
                        return var0;
                    };
                    var4.setOnSpeakingCallback = var3;
                    var6 = var4.callbackSetter;
                    var5 = 'on-video-callback';
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var5 = var0.userId;
                        var4 = var0.ssrc;
                        var3 = var0.streamId;
                        var2 = var0.videoStreamParameters;
                        var1 = var0.videoStreamParametersJSON;
                        var0 = new Array(5);
                        var0[0] = var5;
                        var0[1] = var4;
                        var0[2] = var3;
                        var0[3] = var2;
                        var0[4] = var1;
                        return var0;
                    };
                    var3 = var6.bind(var4)(var5, var3);
                    var4.setOnVideoCallback_ = var3;
                    var3 = function(arg0) { // Environment: var1
                        _fun30550: for (var _fun30550_ip = 0;;) switch (_fun30550_ip) {
                            case 0:
                                var2 = arg0;
                                var _closure4_slot0 = var2;
                                var1 = null;
                                if (!(var1 != var2)) {
                                    _fun30550_ip = 40;
                                    continue _fun30550
                                }
                            case 15:
                                var3 = _closure3_slot0;
                                var1 = var3.setOnVideoCallback_;
                                var0 = function(arg0, arg1, arg2, arg3, arg4) { // Environment: var0
                                    _fun30551: for (var _fun30551_ip = 0;;) switch (_fun30551_ip) {
                                        case 0:
                                            var5 = arg3;
                                            var2 = arg4;
                                            var0 = var2;
                                            if (!var0) {
                                                _fun30551_ip = 15;
                                                continue _fun30551
                                            }
                                        case 12:
                                            var0 = !var5;
                                        case 15:
                                            if (!var0) {
                                                _fun30551_ip = 37;
                                                continue _fun30551
                                            }
                                        case 18:
                                            var0 = global;
                                            var1 = var0.JSON;
                                            var0 = var1.parse;
                                            var5 = var0.bind(var1)(var2);
                                        case 37:
                                            var4 = _closure4_slot0;
                                            var10 = undefined;
                                            var9 = arg0;
                                            var8 = arg1;
                                            var7 = arg2;
                                            var6 = var5;
                                            var0 = var10[var4](var9, var8, var7, var6, var5);
                                            return var0;
                                    }
                                };
                                var0 = var1.bind(var3)(var0);
                                _fun30550_ip = 58;
                                continue _fun30550;
                            case 40:
                                var1 = _closure3_slot0;
                                var0 = var1.setOnVideoCallback_;
                                var0 = var0.bind(var1)(var2);
                            case 58:
                                var1 = _closure3_slot0;
                                var0 = var1.triggerOnVideoCallback;
                                var0 = var0.bind(var1)();
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var4.setOnVideoCallback = var3;
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var3 = _closure3_slot0;
                        var2 = var3.boundConnectionMethod;
                        var0 = 'getMLSKeyPackageB64';
                        var2 = var2.bind(var3)(var0);
                        var0 = undefined;
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot11;
                            var0 = undefined;
                            var1 = arg0;
                            var2 = var2.bind(var0)(var1);
                            var1 = _closure4_slot0;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var4.getMLSKeyPackage = var3;
                    var3 = function(arg0) { // Environment: var1
                        var3 = _closure1_slot12;
                        var0 = undefined;
                        var2 = arg0;
                        var2 = var3.bind(var0)(var2);
                        var4 = _closure1_slot4;
                        var3 = var4.info;
                        var1 = global;
                        var1 = var1.HermesInternal;
                        var5 = var1.concat;
                        var1 = 'updateMLSExternalSender: ';
                        var1 = var5.bind(var1)(var2);
                        var1 = var3.bind(var4)(var1);
                        var4 = _closure3_slot0;
                        var3 = var4.boundConnectionMethod;
                        var1 = 'updateMLSExternalSenderB64';
                        var1 = var3.bind(var4)(var1);
                        var1 = var1.bind(var0)(var2);
                        return var0;
                    };
                    var4.updateMLSExternalSender = var3;
                    var3 = function(arg0, arg1) { // Environment: var1
                        var0 = arg1;
                        var _closure4_slot0 = var0;
                        var3 = _closure1_slot12;
                        var0 = undefined;
                        var2 = arg0;
                        var3 = var3.bind(var0)(var2);
                        var5 = _closure3_slot0;
                        var4 = var5.boundConnectionMethod;
                        var2 = 'processMLSProposalsB64';
                        var2 = var4.bind(var5)(var2);
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot11;
                            var0 = undefined;
                            var1 = arg0;
                            var2 = var2.bind(var0)(var1);
                            var1 = _closure4_slot0;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var1 = var2.bind(var0)(var3, var1);
                        return var0;
                    };
                    var4.processMLSProposals = var3;
                    var3 = function(arg0, arg1, arg2) { // Environment: var1
                        var2 = _closure1_slot12;
                        var0 = undefined;
                        var1 = arg1;
                        var4 = var2.bind(var0)(var1);
                        var5 = _closure3_slot0;
                        var2 = var5.boundConnectionMethod;
                        var1 = 'prepareMLSCommitTransitionB64';
                        var3 = var2.bind(var5)(var1);
                        var2 = var5.wrapRosterCallback;
                        var1 = arg2;
                        var2 = var2.bind(var5)(var1);
                        var1 = arg0;
                        var1 = var3.bind(var0)(var1, var4, var2);
                        return var0;
                    };
                    var4.prepareMLSCommitTransition = var3;
                    var3 = function(arg0, arg1, arg2) { // Environment: var1
                        var2 = _closure1_slot12;
                        var0 = undefined;
                        var1 = arg1;
                        var4 = var2.bind(var0)(var1);
                        var5 = _closure3_slot0;
                        var2 = var5.boundConnectionMethod;
                        var1 = 'processMLSWelcomeB64';
                        var3 = var2.bind(var5)(var1);
                        var2 = var5.wrapRosterCallback;
                        var1 = arg2;
                        var2 = var2.bind(var5)(var1);
                        var1 = arg0;
                        var1 = var3.bind(var0)(var1, var4, var2);
                        return var0;
                    };
                    var4.processMLSWelcome = var3;
                    var3 = function(arg0, arg1, arg2) { // Environment: var1
                        var0 = arg2;
                        var _closure4_slot0 = var0;
                        var3 = _closure3_slot0;
                        var2 = var3.boundConnectionMethod;
                        var0 = 'getMLSPairwiseFingerprintB64';
                        var4 = var2.bind(var3)(var0);
                        var0 = undefined;
                        var3 = arg0;
                        var2 = arg1;
                        var1 = function(arg0) { // Environment: var1
                            var2 = _closure1_slot11;
                            var0 = undefined;
                            var1 = arg0;
                            var2 = var2.bind(var0)(var1);
                            var1 = _closure4_slot0;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var1 = var4.bind(var0)(var3, var2, var1);
                        return var0;
                    };
                    var4.getMLSPairwiseFingerprint = var3;
                    var6 = var4.callbackSetter;
                    var5 = 'mls-failure-callback';
                    var3 = function(arg0) { // Environment: var1
                        var0 = arg0;
                        var2 = var0.source;
                        var1 = var0.reason;
                        var0 = new Array(2);
                        var0[0] = var2;
                        var0[1] = var1;
                        return var0;
                    };
                    var3 = var6.bind(var4)(var5, var3);
                    var4.setOnMLSFailureCallback = var3;
                    var6 = var4.callbackSetter;
                    var5 = 'secure-frames-state-update-callback';
                    var3 = function(arg0) { // Environment: var1
                        _fun30562: for (var _fun30562_ip = 0;;) switch (_fun30562_ip) {
                            case 0:
                                var0 = arg0;
                                var1 = var0.stateUpdate;
                                var3 = var0.stateUpdateJSON;
                                var0 = null;
                                if (!(var0 == var1)) {
                                    _fun30562_ip = 44;
                                    continue _fun30562
                                }
                            case 25:
                                var0 = global;
                                var2 = var0.JSON;
                                var0 = var2.parse;
                                var1 = var0.bind(var2)(var3);
                            case 44:
                                var0 = new Array(1);
                                var0[0] = var1;
                                return var0;
                        }
                    };
                    var3 = var6.bind(var4)(var5, var3);
                    var4.setSecureFramesStateUpdateCallback = var3;
                    var3 = _closure1_slot6;
                    var2 = var3.forEach;
                    var1 = function(arg0) { // Environment: var1
                        var2 = arg0;
                        var1 = _closure3_slot0;
                        var0 = var1.boundConnectionMethod;
                        var0 = var0.bind(var1)(var2);
                        var1[var2] = var0;
                        var0 = undefined;
                        return var0;
                    };
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'wrapRosterCallback';
                var0.key = var1;
                var1 = function arg0() {
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function(arg0, arg1, arg2) { // Environment: var0
                        _fun30565: for (var _fun30565_ip = 0;;) switch (_fun30565_ip) {
                            case 0:
                                var2 = arg2;
                                var4 = {};
                                var0 = null;
                                if (!(var0 != var2)) {
                                    _fun30565_ip = 77;
                                    continue _fun30565
                                }
                            case 11:
                                var0 = global;
                                var1 = var0.JSON;
                                var0 = var1.parse;
                                var8 = var0.bind(var1)(var2);
                                var6 = var8;
                                var0 = undefined;
                                for (var2 in var6)
                                    case 46: {
                                        case 55: var10 = var2;
                                        var11 = _closure1_slot11;
                                        var9 = var8[var10];
                                        var9 = var11.bind(var0)(var9);
                                        var4[var10] = var9;
                                        _fun30565_ip = 46;
                                        continue _fun30565;
                                    }
                            case 77:
                                var3 = _closure3_slot0;
                                var0 = undefined;
                                var2 = arg0;
                                var1 = arg1;
                                var1 = var3.bind(var0)(var2, var1, var4);
                                return var0;
                        }
                    };
                    return var0;
                };
                var0.value = var1;
                var1 = new Array(5);
                var1[0] = var0;
                var0 = {};
                var5 = 'destroy';
                var0.key = var5;
                var5 = function() {
                    var1 = this;
                    var3 = var1.subscriptions;
                    var2 = var3.forEach;
                    var0 = function(arg0) { // Environment: var0
                        var1 = arg0;
                        var0 = var1.remove;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var0 = var2.bind(var3)(var0);
                    var2 = var1.subscriptions;
                    var0 = 0;
                    var2.length = var0;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot1;
                    var0 = 4;
                    var2 = var2[var0];
                    var0 = undefined;
                    var2 = var3.bind(var0)(var2);
                    var3 = var2.VoiceEngine;
                    var2 = var3.connectionInstanceDestroy;
                    var1 = var1.id;
                    var1 = var2.bind(var3)(var1);
                    return var0;
                };
                var0.value = var5;
                var1[1] = var0;
                var0 = {};
                var5 = 'getId';
                var0.key = var5;
                var5 = function() {
                    var0 = this;
                    var0 = var0.id;
                    return var0;
                };
                var0.value = var5;
                var1[2] = var0;
                var0 = {};
                var5 = 'boundConnectionMethod';
                var0.key = var5;
                var5 = function arg0() {
                    _fun30569: for (var _fun30569_ip = 0;;) switch (_fun30569_ip) {
                        case 0:
                            var0 = arg0;
                        case 3: // try_start_0
                            var5 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var1 = 4;
                            var3 = var6[var1];
                            var2 = undefined;
                            var3 = var5.bind(var2)(var3);
                            var4 = var3.VoiceEngine;
                            var8 = var0;
                            var3 = 0;
                            var7 = var8[var3];
                            var3 = var7.toUpperCase;
                            var9 = var3.bind(var7)();
                            var7 = var8.slice;
                            var3 = 1;
                            var8 = var7.bind(var8)(var3);
                            var3 = global;
                            var3 = var3.HermesInternal;
                            var7 = var3.concat;
                            var3 = 'connectionInstance';
                            var3 = var7.bind(var3)(var9, var8);
                            var4 = var4[var3];
                            var3 = var4.bind;
                            var1 = var6[var1];
                            var1 = var5.bind(var2)(var1);
                            var2 = var1.VoiceEngine;
                            var1 = this;
                            var1 = var1.id;
                            var1 = var3.bind(var4)(var2, var1);
                        case 129: // try_end0
                            return var1;
                        case 131: // catch_target0
                            CatchBlockStart(arg_register = 1);
                            var2 = _closure1_slot4;
                            var1 = var2.warn;
                            var5 = var0;
                            var0 = global;
                            var0 = var0.HermesInternal;
                            var4 = var0.concat;
                            var3 = 'VoiceConnection(...): ';
                            var0 = ' does not exist.';
                            var0 = var4.bind(var3)(var5, var0);
                            var0 = var1.bind(var2)(var0);
                            var0 = function() { // Environment: var0
                                var0 = undefined;
                                return var0;
                            };
                            return var0;
                    }
                };
                var0.value = var5;
                var1[3] = var0;
                var0 = {};
                var5 = 'callbackSetter';
                var0.key = var5;
                var4 = function arg0, arg1() {
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = arg1;
                    var _closure3_slot1 = var2;
                    var2 = null;
                    var _closure3_slot2 = var2;
                    var3 = var1.subscriptions;
                    var2 = var3.push;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot1;
                    var1 = 4;
                    var4 = var4[var1];
                    var1 = undefined;
                    var1 = var5.bind(var1)(var4);
                    var6 = var1.VoiceEngineEmitter;
                    var5 = var6.addListener;
                    var4 = arg0;
                    var1 = function(arg0) { // Environment: var0
                        _fun30572: for (var _fun30572_ip = 0;;) switch (_fun30572_ip) {
                            case 0:
                                var3 = arg0;
                                var1 = _closure3_slot0;
                                var2 = var1.id;
                                var1 = var3.connectionId;
                                var1 = var2 === var1;
                                if (!var1) {
                                    _fun30572_ip = 32;
                                    continue _fun30572
                                }
                            case 28:
                                var1 = _closure3_slot2;
                            case 32:
                                if (!var1) {
                                    _fun30572_ip = 75;
                                    continue _fun30572
                                }
                            case 35:
                                var2 = _closure3_slot2;
                                var0 = _closure3_slot1;
                                var1 = undefined;
                                var6 = var0.bind(var1)(var3);
                                var0 = new Array(0);
                                var5 = 0;
                                var7 = var0;
                                var3 = arraySpread(var7, var6, var5);
                                var7 = var2;
                                var6 = var0;
                                var5 = undefined;
                                var0 = apply(var7, var6, var5);
                            case 75:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var1 = var5.bind(var6)(var4, var1);
                    var1 = var2.bind(var3)(var1);
                    var0 = function(arg0) { // Environment: var0
                        var0 = arg0;
                        _closure3_slot2 = var0;
                        return var0;
                    };
                    return var0;
                };
                var0.value = var4;
                var1[4] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var6 = var6.bind(var0)();
            var _closure1_slot7 = var6;
            var6.nextId = var7;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var6 = var6.VoiceEngine;
            var6 = var6.createVoiceConnectionWithOptions;
            var _closure1_slot8 = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.VoiceEngine;
            var6 = function(arg0, arg1, arg2) { // Environment: var5
                var0 = _closure1_slot7;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var11 = var2;
                var0 = new var11[var0](var10);
                var0 = var0 instanceof Object ? var0 : var2;
                var6 = _closure1_slot8;
                var1 = var0.getId;
                var10 = var1.bind(var0)();
                var11 = undefined;
                var9 = arg0;
                var8 = arg1;
                var7 = arg2;
                var1 = var11[var6](var10, var9, var8, var7, var6);
                return var0;
            };
            var7.createVoiceConnectionWithOptions = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var6 = var6.VoiceEngine;
            var6 = var6.createOwnStreamConnectionWithOptions;
            var _closure1_slot9 = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.VoiceEngine;
            var6 = function(arg0, arg1, arg2) { // Environment: var5
                var0 = _closure1_slot7;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var11 = var2;
                var0 = new var11[var0](var10);
                var0 = var0 instanceof Object ? var0 : var2;
                var6 = _closure1_slot9;
                var1 = var0.getId;
                var10 = var1.bind(var0)();
                var11 = undefined;
                var9 = arg0;
                var8 = arg1;
                var7 = arg2;
                var1 = var11[var6](var10, var9, var8, var7, var6);
                return var0;
            };
            var7.createOwnStreamConnectionWithOptions = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.VoiceEngine;
            var9 = 'no-input-callback';
            var6 = function(arg0) { // Environment: var5
                var0 = arg0;
                var1 = var0.input;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var6 = var8.bind(var0)(var9, var6);
            var7.setNoInputCallback = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.VoiceEngine;
            var9 = 'on-voice';
            var6 = function(arg0) { // Environment: var5
                var0 = arg0;
                var2 = var0.level;
                var1 = var0.speaking;
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
            };
            var6 = var8.bind(var0)(var9, var6);
            var7.setOnVoiceCallback = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.VoiceEngine;
            var9 = 'native-mute-toggle';
            var6 = function() { // Environment: var5
                var0 = new Array(0);
                return var0;
            };
            var6 = var8.bind(var0)(var9, var6);
            var7.setOnNativeMuteToggleCallback = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.VoiceEngine;
            var9 = 'native-mute-state-changed';
            var6 = function(arg0) { // Environment: var5
                var0 = arg0;
                var1 = var0.muted;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var6 = var8.bind(var0)(var9, var6);
            var7.setOnNativeMuteChangedCallback = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.VoiceEngine;
            var9 = 'device-changed';
            var6 = function(arg0) { // Environment: var5
                var0 = arg0;
                var3 = var0.inputDevices;
                var2 = var0.outputDevices;
                var1 = var0.videoInputDevices;
                var0 = new Array(3);
                var0[0] = var3;
                var0[1] = var2;
                var0[2] = var1;
                return var0;
            };
            var6 = var8.bind(var0)(var9, var6);
            var7.setDeviceChangeCallback = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.VoiceEngine;
            var9 = 'volume-changed';
            var6 = function(arg0) { // Environment: var5
                var0 = arg0;
                var2 = var0.inputVolume;
                var1 = var0.outputVolume;
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
            };
            var6 = var8.bind(var0)(var9, var6);
            var7.setVolumeChangeCallback = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.VoiceEngine;
            var9 = 'active-sinks-change';
            var6 = function(arg0) { // Environment: var5
                var0 = arg0;
                var2 = var0.streamId;
                var1 = var0.active;
                var0 = new Array(2);
                var0[0] = var2;
                var0[1] = var1;
                return var0;
            };
            var6 = var8.bind(var0)(var9, var6);
            var7.setActiveSinksChangeCallback = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.VoiceEngine;
            var9 = 'on-broadcast-requested';
            var6 = function() { // Environment: var5
                var0 = new Array(0);
                return var0;
            };
            var6 = var8.bind(var0)(var9, var6);
            var7.setBroadcastRequestCallback = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.VoiceEngine;
            var9 = 'on-broadcast-finished';
            var6 = function() { // Environment: var5
                var0 = new Array(0);
                return var0;
            };
            var6 = var8.bind(var0)(var9, var6);
            var7.setBroadcastFinishedCallback = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.VoiceEngine;
            var9 = 'on-broadcast-annotated';
            var6 = function(arg0) { // Environment: var5
                var0 = arg0;
                var1 = var0.appBundleIdentifier;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var6 = var8.bind(var0)(var9, var6);
            var7.setBroadcastAnnotatedCallback = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.VoiceEngine;
            var9 = 'on-broadcast-blocked';
            var6 = function() { // Environment: var5
                var0 = new Array(0);
                return var0;
            };
            var6 = var8.bind(var0)(var9, var6);
            var7.setBroadcastBlockedCallback = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.VoiceEngine;
            var9 = 'system-microphone-mode-change';
            var6 = function(arg0) { // Environment: var5
                var0 = arg0;
                var1 = var0.mode;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var6 = var8.bind(var0)(var9, var6);
            var7.setSystemMicrophoneModeChangeCallback = var6;
            var7 = 'on-broadcast-thumbnail';
            var6 = function(arg0) { // Environment: var5
                var0 = arg0;
                var1 = var0.imgdata;
                var0 = new Array(1);
                var0[0] = var1;
                return var0;
            };
            var6 = var8.bind(var0)(var7, var6);
            var _closure1_slot10 = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var7 = var6.VoiceEngine;
            var6 = function(arg0, arg1, arg2, arg3) { // Environment: var5
                var3 = _closure1_slot10;
                var0 = undefined;
                var2 = arg3;
                var2 = var3.bind(var0)(var2);
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 4;
                var1 = var3[var1];
                var1 = var2.bind(var0)(var1);
                var5 = var1.VoiceEngine;
                var4 = var5.setBroadcastThumbnailParams;
                var3 = arg0;
                var2 = arg1;
                var1 = arg2;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var0;
            };
            var7.setBroadcastThumbnailCallback = var6;
            var6 = var4[var1];
            var6 = var3.bind(var0)(var6);
            var6 = var6.VoiceEngine;
            var7 = 'audio-input-initialized';
            var5 = function(arg0) { // Environment: var5
                var0 = new Array(1);
                var1 = arg0;
                var0[0] = var1;
                return var0;
            };
            var5 = var8.bind(var0)(var7, var5);
            var6.setAudioInputInitializationCallback = var5;
            var5 = var4[var1];
            var5 = var3.bind(var0)(var5);
            var6 = var5.VoiceEngine;
            var5 = var6.initializeEngine;
            var5 = var5.bind(var6)();
            var5 = 5;
            var5 = var4[var5];
            var7 = var3.bind(var0)(var5);
            var6 = var7.fileFinishedImporting;
            var5 = '../discord_common/js/packages/media-engine/native/ios/VoiceEngine.tsx';
            var5 = var6.bind(var7)(var5);
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var1 = var1.VoiceEngine;
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 27, 4, 3481, 2]);