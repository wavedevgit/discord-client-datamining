// modules/voice_messages/native/components/VoiceMessageButton.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun90488: for (var _fun90488_ip = 0;;) switch (_fun90488_ip) {
            case 0:
                var2 = _closure1_slot13;
                var1 = var2.getState;
                var1 = var1.bind(var2)();
                var1 = var1.showRecordingOverlay;
                if (!var1) {
                    _fun90488_ip = 58;
                    continue _fun90488
                }
            case 26:
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 16;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.triggerHaptic;
                var0 = var0.bind(var1)();
            case 58:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot29 = var0;
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
    var3 = var11.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var6 = var5[var3];
    var3 = arg3;
    var6 = var3.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var3 = 3;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var11.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.setIsVoiceMessageButtonMounted;
    var _closure1_slot9 = var7;
    var7 = var3.setIsUsingHoldGesture;
    var _closure1_slot10 = var7;
    var7 = var3.setVoiceMessageAnimationState;
    var _closure1_slot11 = var7;
    var7 = var3.showVoiceMessagesTooltip;
    var _closure1_slot12 = var7;
    var7 = var3.useVoiceMessagesUIStore;
    var _closure1_slot13 = var7;
    var7 = var3.setShowRecordingOverlay;
    var _closure1_slot14 = var7;
    var3 = var3.hideVoiceMessagesTooltip;
    var _closure1_slot15 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.VoiceMessageAnimationState;
    var _closure1_slot16 = var7;
    var3 = var3.VOICE_RECORDING_MIN_DURATION_MILLIS;
    var _closure1_slot17 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.ComponentActions;
    var _closure1_slot18 = var7;
    var7 = var3.ComponentActionsKeyed;
    var _closure1_slot19 = var7;
    var3 = var3.MessageFlags;
    var _closure1_slot20 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.MessageSendLocation;
    var _closure1_slot21 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.NativePermissionTypes;
    var _closure1_slot22 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.jsx;
    var _closure1_slot23 = var3;
    var3 = 12;
    var3 = var5[var3];
    var8 = var4.bind(var0)(var3);
    var7 = var8.createStyles;
    var3 = {};
    var9 = {};
    var10 = 13;
    var10 = var5[var10];
    var10 = var11.bind(var0)(var10);
    var10 = var10.colors;
    var10 = var10.CARD_SECONDARY_BG;
    var9.backgroundColor = var10;
    var3.themedChatInput = var9;
    var3 = var7.bind(var8)(var3);
    var _closure1_slot24 = var3;
    var3 = {};
    var7 = 'function VoiceMessageButtonTsx1(newValue){const{voiceMessageAnimationState,runOnJS,triggerHapticGuarded}=this.__closure;if(voiceMessageAnimationState.get()[1]===newValue)return;const prevValue=voiceMessageAnimationState.get()[1];voiceMessageAnimationState.set([prevValue,newValue]);runOnJS(triggerHapticGuarded)();}';
    var3.code = var7;
    var _closure1_slot25 = var3;
    var3 = {};
    var7 = 'function VoiceMessageButtonTsx2(){const{runOnJS,handleFinalize}=this.__closure;runOnJS(handleFinalize)();}';
    var3.code = var7;
    var _closure1_slot26 = var3;
    var3 = {};
    var7 = 'function VoiceMessageButtonTsx3(e){const{isGestureActiveValue,LOCK_THRESHOLD,cancelThresholdX,handleUpdateValue,VoiceMessageAnimationState}=this.__closure;if(!isGestureActiveValue.get())return;if(e.translationY<=-LOCK_THRESHOLD&&e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.LOCKING);}else if(e.absoluteX<cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.CANCELLING);}else if(e.absoluteX>=cancelThresholdX){handleUpdateValue(VoiceMessageAnimationState.SENDING);}}';
    var3.code = var7;
    var _closure1_slot27 = var3;
    var3 = {};
    var7 = 'function VoiceMessageButtonTsx4(e){const{isGestureActiveValue,runOnJS,setIsUsingHoldGesture,voiceMessageAnimationState,VoiceMessageAnimationState,startRecording}=this.__closure;if(e.numberOfTouches>1)return;if(isGestureActiveValue.get())return;runOnJS(setIsUsingHoldGesture)(true);voiceMessageAnimationState.set([VoiceMessageAnimationState.SENDING,VoiceMessageAnimationState.SENDING]);runOnJS(startRecording)();}';
    var3.code = var7;
    var _closure1_slot28 = var3;
    var3 = var6.memo;
    var1 = function(arg0) { // Environment: var1
        var0 = arg0;
        var7 = var0.disabled;
        var _closure2_slot0 = var7;
        var17 = var0.channelId;
        var _closure2_slot1 = var17;
        var2 = _closure1_slot24;
        var3 = undefined;
        var2 = var2.bind(var3)();
        var13 = _closure1_slot0;
        var14 = _closure1_slot2;
        var4 = 18;
        var4 = var14[var4];
        var5 = var13.bind(var3)(var4);
        var4 = var5.useClientThemesOverride;
        var2 = var2.themedChatInput;
        var6 = var4.bind(var5)(var2);
        var4 = _closure1_slot13;
        var2 = function(arg0) { // Environment: var1
            var0 = arg0;
            var0 = var0.voiceMessageAnimationState;
            return var0;
        };
        var18 = var4.bind(var3)(var2);
        var _closure2_slot2 = var18;
        var21 = 17;
        var2 = var14[var21];
        var5 = var13.bind(var3)(var2);
        var4 = var5.useSharedValue;
        var2 = 0;
        var15 = var4.bind(var5)(var2);
        var _closure2_slot3 = var15;
        var4 = function() {
            var5 = _closure1_slot5;
            var2 = var5.useRef;
            var4 = false;
            var3 = var2.bind(var5)(var4);
            var _closure3_slot0 = var3;
            var6 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 17;
            var2 = var2[var1];
            var1 = undefined;
            var2 = var6.bind(var1)(var2);
            var1 = var2.useSharedValue;
            var2 = var1.bind(var2)(var4);
            var _closure3_slot1 = var2;
            var4 = var5.useCallback;
            var1 = new Array(2);
            var1[0] = var3;
            var1[1] = var2;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = _closure3_slot0;
                var1.current = var2;
                var1 = _closure3_slot1;
                var0 = var1.set;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
            };
            var1 = var4.bind(var5)(var0, var1);
            var0 = new Array(3);
            var0[0] = var3;
            var0[1] = var2;
            var0[2] = var1;
            return var0;
        };
        var8 = var4.bind(var3)();
        var5 = _closure1_slot4;
        var4 = 3;
        var4 = var5.bind(var3)(var8, var4);
        var20 = var4[var2];
        var _closure2_slot4 = var20;
        var2 = 1;
        var19 = var4[var2];
        var _closure2_slot5 = var19;
        var2 = 2;
        var4 = var4[var2];
        var _closure2_slot6 = var4;
        var11 = _closure1_slot5;
        var5 = var11.useRef;
        var2 = true;
        var2 = var5.bind(var11)(var2);
        var _closure2_slot7 = var2;
        var5 = _closure1_slot1;
        var2 = 19;
        var2 = var14[var2];
        var2 = var5.bind(var3)(var2);
        var16 = var2.bind(var3)();
        var2 = 20;
        var2 = var14[var2];
        var2 = var5.bind(var3)(var2);
        var2 = var2.bind(var3)();
        var2 = var2.width;
        var10 = var11.useCallback;
        var8 = function() { // Environment: var1
            var3 = _closure1_slot3;
            var2 = undefined;
            var1 = function*(arg0) { // Environment: var0
                var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                    _fun90495: for (var _fun90495_ip = 0;;) switch (_fun90495_ip) {
                        case 0:
                            StartGenerator();
                            var1 = arg0;
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 2);
                            if (var2) {
                                _fun90495_ip = 751;
                                continue _fun90495
                            }
                        case 15:
                            var6 = var1.isCancelling;
                            var8 = var1.cancelReason;
                            var3 = undefined;
                            if (!(var8 === var3)) {
                                _fun90495_ip = 68;
                                continue _fun90495
                            }
                        case 33:
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var1 = 21;
                            var1 = var5[var1];
                            var1 = var4.bind(var3)(var1);
                            var1 = var1.VoiceMessageRecordingResult;
                            var8 = var1.CANCELLED_USER_REQUESTED;
                        case 68:
                            var _closure5_slot0 = var3;
                            SaveGenerator(address = 76);
                        case 74:
                            return var3;
                        case 76:
                            ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 2);
                            if (var2) {
                                _fun90495_ip = 748;
                                continue _fun90495
                            }
                        case 85:
                            var4 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var9 = 16;
                            var2 = var2[var9];
                            var4 = var4.bind(var3)(var2);
                            var2 = var4.endAudioRecording;
                            var2 = var2.bind(var4)();
                            SaveGenerator(address = 122);
                        case 120:
                            return var2;
                        case 122:
                            ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 4);
                            if (var4) {
                                _fun90495_ip = 745;
                                continue _fun90495
                            }
                        case 131:
                            var4 = var2.data;
                            var7 = var2.startTimeMillis;
                            var12 = _closure2_slot6;
                            var10 = false;
                            var10 = var12.bind(var3)(var10);
                            if (var6) {
                                _fun90495_ip = 706;
                                continue _fun90495
                            }
                        case 162:
                            var10 = var4.durationSecs;
                            var12 = _closure1_slot17;
                            var6 = 1000;
                            var6 = var12 / var6;
                            if (!(!(var10 < var6))) {
                                _fun90495_ip = 633;
                                continue _fun90495
                            }
                        case 189:
                            var10 = _closure1_slot0;
                            var14 = _closure1_slot2;
                            var6 = var14[var9];
                            var13 = var10.bind(var3)(var6);
                            var12 = var13.emitVoiceMessageRecorded;
                            var6 = 21;
                            var6 = var14[var6];
                            var6 = var10.bind(var3)(var6);
                            var6 = var6.VoiceMessageRecordingResult;
                            var10 = var6.SENT;
                            var6 = var4.durationSecs;
                            var6 = var12.bind(var13)(var10, var6, var7);
                            var12 = _closure1_slot8;
                            var10 = var12.getChannel;
                            var6 = _closure2_slot1;
                            var6 = var10.bind(var12)(var6);
                            _closure5_slot0 = var6;
                            var10 = null;
                            if (!(var10 != var6)) {
                                _fun90495_ip = 742;
                                continue _fun90495
                            }
                        case 280:
                            var10 = _closure1_slot0;
                            var12 = _closure1_slot2;
                            var13 = 22;
                            var13 = var12[var13];
                            var13 = var10.bind(var3)(var13);
                            var16 = var13.CloudUpload;
                            var15 = {};
                            var13 = var4.filename;
                            var15.uri = var13;
                            var13 = var4.filename;
                            var15.originalUri = var13;
                            var13 = 'audio/ogg';
                            var15.mimeType = var13;
                            var13 = 'voice-message.ogg';
                            var15.filename = var13;
                            var13 = 23;
                            var13 = var12[var13];
                            var13 = var10.bind(var3)(var13);
                            var13 = var13.UploadPlatform;
                            var13 = var13.REACT_NATIVE;
                            var15.platform = var13;
                            var13 = var4.durationSecs;
                            var15.durationSecs = var13;
                            var13 = var4.waveform;
                            var15.waveform = var13;
                            var23 = var6.id;
                            var14 = var16.prototype;
                            var14 = Object.create(var14, {
                                constructor: {
                                    value: var16
                                }
                            });
                            var25 = var14;
                            var24 = var15;
                            var13 = new var25[var16](var24, var23, var22);
                            var13 = var13 instanceof Object ? var13 : var14;
                            var19 = new Array(1);
                            var19[0] = var13;
                            var14 = _closure1_slot7;
                            var13 = var14.getPendingReply;
                            var11 = _closure2_slot1;
                            var17 = var13.bind(var14)(var11);
                            var14 = _closure1_slot1;
                            var13 = 24;
                            var15 = var12[var13];
                            var16 = var14.bind(var3)(var15);
                            var15 = var16.getSendMessageOptionsForReply;
                            var23 = var15.bind(var16)(var17);
                            var13 = var12[var13];
                            var16 = var14.bind(var3)(var13);
                            var15 = var16.sendMessage;
                            var14 = var6.id;
                            var13 = {
                                'content': '',
                                'tts': false
                            };
                            var6 = new Array(0);
                            var13.invalidEmojis = var6;
                            var6 = new Array(0);
                            var13.validNonShortcutEmojis = var6;
                            var6 = {};
                            var20 = _closure1_slot20;
                            var20 = var20.IS_VOICE_MESSAGE;
                            var6.flags = var20;
                            var20 = _closure1_slot21;
                            var20 = var20.VOICE_MESSAGE;
                            var6.location = var20;
                            var6.attachmentsToUpload = var19;
                            var18 = function arg0, arg1, arg2() {
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 25;
                                var1 = var1[var0];
                                var0 = undefined;
                                var3 = var2.bind(var0)(var1);
                                var2 = var3.handleUploadMessageAttachmentsErrors;
                                var1 = {};
                                var4 = arg0;
                                var1.file = var4;
                                var5 = _closure5_slot0;
                                var4 = var5.getGuildId;
                                var4 = var4.bind(var5)();
                                var1.guildId = var4;
                                var4 = new Array(0);
                                var1.analyticsLocations = var4;
                                var4 = arg1;
                                var1.code = var4;
                                var4 = arg2;
                                var1.reason = var4;
                                var1 = var2.bind(var3)(var1);
                                return var0;
                            };
                            var6.onAttachmentUploadError = var18;
                            var24 = var6;
                            var17 = copyDataProperties(var24, var23);
                            var25 = var16;
                            var24 = var14;
                            var23 = var13;
                            var22 = undefined;
                            var21 = var6;
                            var6 = var25[var15](var24, var23, var22, var21, var20);
                            var6 = 26;
                            var6 = var12[var6];
                            var10 = var10.bind(var3)(var6);
                            var6 = var10.deletePendingReply;
                            var6 = var6.bind(var10)(var11);
                            _fun90495_ip = 742;
                            continue _fun90495;
                        case 633:
                            var10 = _closure1_slot0;
                            var13 = _closure1_slot2;
                            var6 = var13[var9];
                            var12 = var10.bind(var3)(var6);
                            var11 = var12.emitVoiceMessageRecorded;
                            var6 = 21;
                            var6 = var13[var6];
                            var6 = var10.bind(var3)(var6);
                            var6 = var6.VoiceMessageRecordingResult;
                            var10 = var6.CANCELLED_DURATION;
                            var6 = var4.durationSecs;
                            var6 = var11.bind(var12)(var10, var6, var7);
                            var6 = _closure1_slot12;
                            var6 = var6.bind(var3)();
                            var6 = undefined;
                            return var6;
                        case 706:
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot2;
                            var5 = var5[var9];
                            var6 = var6.bind(var3)(var5);
                            var5 = var6.emitVoiceMessageRecorded;
                            var4 = var4.durationSecs;
                            var4 = var5.bind(var6)(var8, var4, var7);
                        case 742:
                            return var3;
                        case 745:
                            return var2;
                        case 748:
                            return var1;
                        case 751:
                            return var0;
                    }
                };
                var1 = var0.next;
                var1 = var1.bind(var0)();
                return var0;
            };
            var1 = var3.bind(var2)(var1);
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                var0 = undefined;
                var3 = _closure3_slot0;
                var2 = var3.apply;
                var0 = arguments;
                var1 = var0;
                var0 = this;
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            return var0;
        };
        var9 = var8.bind(var3)();
        var8 = new Array(2);
        var8[0] = var17;
        var8[1] = var4;
        var12 = var10.bind(var11)(var9, var8);
        var _closure2_slot8 = var12;
        var10 = var11.useEffect;
        var9 = new Array(2);
        var9[0] = var17;
        var9[1] = var12;
        var8 = function() { // Environment: var1
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var1 = 27;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            var4 = var1.ComponentDispatch;
            var3 = var4.subscribeKeyed;
            var0 = _closure1_slot19;
            var2 = var0.VOICE_MESSAGE_SEND;
            var1 = _closure2_slot1;
            var0 = _closure2_slot8;
            var0 = var3.bind(var4)(var2, var1, var0);
            var0 = function() { // Environment: var0
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 27;
                var2 = var2[var0];
                var0 = undefined;
                var2 = var3.bind(var0)(var2);
                var5 = var2.ComponentDispatch;
                var4 = var5.unsubscribeKeyed;
                var1 = _closure1_slot19;
                var3 = var1.VOICE_MESSAGE_SEND;
                var2 = _closure2_slot1;
                var1 = _closure2_slot8;
                var1 = var4.bind(var5)(var3, var2, var1);
                return var0;
            };
            return var0;
        };
        var8 = var10.bind(var11)(var8, var9);
        var10 = var11.useEffect;
        var9 = function() { // Environment: var1
            var2 = _closure1_slot9;
            var1 = undefined;
            var0 = true;
            var0 = var2.bind(var1)(var0);
            var0 = function() { // Environment: var0
                var2 = _closure1_slot9;
                var0 = undefined;
                var1 = false;
                var1 = var2.bind(var0)(var1);
                return var0;
            };
            return var0;
        };
        var8 = new Array(0);
        var8 = var10.bind(var11)(var9, var8);
        var10 = var11.useEffect;
        var9 = new Array(2);
        var9[0] = var20;
        var9[1] = var4;
        var8 = function() { // Environment: var1
            var3 = _closure2_slot7;
            var2 = true;
            var3.current = var2;
            var1 = _closure2_slot4;
            var1 = var1.current;
            var _closure3_slot0 = var1;
            var0 = function() { // Environment: var0
                _fun90503: for (var _fun90503_ip = 0;;) switch (_fun90503_ip) {
                    case 0:
                        var0 = _closure2_slot7;
                        var3 = false;
                        var0.current = var3;
                        var4 = _closure1_slot13;
                        var2 = var4.getState;
                        var4 = var2.bind(var4)();
                        var2 = var4.showRecordingOverlay;
                        if (var2) {
                            _fun90503_ip = 53;
                            continue _fun90503
                        }
                    case 41:
                        var5 = var4.recordingStatus;
                        var4 = null;
                        var2 = var4 != var5;
                    case 53:
                        if (var2) {
                            _fun90503_ip = 63;
                            continue _fun90503
                        }
                    case 56:
                        var2 = _closure3_slot0;
                    case 63:
                        if (!var2) {
                            _fun90503_ip = 107;
                            continue _fun90503
                        }
                    case 66:
                        var1 = _closure2_slot6;
                        var2 = undefined;
                        var1 = var1.bind(var2)(var3);
                        var1 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 16;
                        var0 = var3[var0];
                        var1 = var1.bind(var2)(var0);
                        var0 = var1.endAudioRecording;
                        var0 = var0.bind(var1)();
                    case 107:
                        var0 = undefined;
                        return var0;
                }
            };
            return var0;
        };
        var8 = var10.bind(var11)(var8, var9);
        var8 = 14;
        var8 = var14[var8];
        var9 = var13.bind(var3)(var8);
        var8 = var9.useIsModalOpen;
        var8 = var8.bind(var9)();
        var22 = var11.useEffect;
        var10 = new Array(3);
        var10[0] = var20;
        var10[1] = var4;
        var10[2] = var17;
        var9 = function() { // Environment: var1
            _fun90504: for (var _fun90504_ip = 0;;) switch (_fun90504_ip) {
                case 0:
                    var1 = function() {
                        var0 = undefined;
                        var3 = _closure3_slot1;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var _closure3_slot0 = var1;
                    var2 = function() {
                        var3 = undefined;
                        var0 = undefined;
                        var2 = _closure1_slot3;
                        var1 = function*() { // Environment: var1
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun90508: for (var _fun90508_ip = 0;;) switch (_fun90508_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun90508_ip = 201;
                                            continue _fun90508
                                        }
                                    case 10:
                                        var2 = _closure1_slot13;
                                        var1 = var2.getState;
                                        var1 = var1.bind(var2)();
                                        var2 = var1.showRecordingOverlay;
                                        if (var2) {
                                            _fun90508_ip = 66;
                                            continue _fun90508
                                        }
                                    case 36:
                                        var2 = var1.recordingStatus;
                                        var1 = null;
                                        if (!(var1 == var2)) {
                                            _fun90508_ip = 66;
                                            continue _fun90508
                                        }
                                    case 48:
                                        var1 = _closure2_slot4;
                                        var1 = var1.current;
                                        if (!var1) {
                                            _fun90508_ip = 193;
                                            continue _fun90508
                                        }
                                    case 66:
                                        var2 = _closure2_slot6;
                                        var4 = undefined;
                                        var1 = false;
                                        var1 = var2.bind(var4)(var1);
                                        var3 = _closure1_slot0;
                                        var1 = _closure1_slot2;
                                        var2 = 16;
                                        var1 = var1[var2];
                                        var3 = var3.bind(var4)(var1);
                                        var1 = var3.endAudioRecording;
                                        var1 = var1.bind(var3)();
                                        SaveGenerator(address = 116);
                                    case 114:
                                        return var1;
                                    case 116:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun90508_ip = 198;
                                            continue _fun90508
                                        }
                                    case 122:
                                        var3 = _closure1_slot0;
                                        var7 = _closure1_slot2;
                                        var2 = var7[var2];
                                        var6 = var3.bind(var4)(var2);
                                        var5 = var6.emitVoiceMessageRecorded;
                                        var2 = 21;
                                        var2 = var7[var2];
                                        var2 = var3.bind(var4)(var2);
                                        var2 = var2.VoiceMessageRecordingResult;
                                        var4 = var2.CANCELLED_GESTURE_CONFLICT;
                                        var2 = var1.data;
                                        var3 = var2.durationSecs;
                                        var2 = var1.startTimeMillis;
                                        var2 = var5.bind(var6)(var4, var3, var2);
                                    case 193:
                                        var2 = undefined;
                                        return var2;
                                    case 198:
                                        return var1;
                                    case 201:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var3 = var2.bind(var3)(var1);
                        _closure3_slot1 = var3;
                        var2 = var3.apply;
                        var0 = arguments;
                        var1 = var0;
                        var0 = this;
                        var0 = var2.bind(var3)(var0, var1);
                        return var0;
                    };
                    var _closure3_slot1 = var2;
                    var6 = function() {
                        _fun90509: for (var _fun90509_ip = 0;;) switch (_fun90509_ip) {
                            case 0:
                                var1 = _closure1_slot6;
                                var0 = var1.isOpen;
                                var0 = var0.bind(var1)();
                                if (!var0) {
                                    _fun90509_ip = 33;
                                    continue _fun90509
                                }
                            case 20:
                                var1 = _closure3_slot0;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 33:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var _closure3_slot2 = var6;
                    var4 = function() {
                        _fun90510: for (var _fun90510_ip = 0;;) switch (_fun90510_ip) {
                            case 0:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 28;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.getFocusedChannelId;
                                var2 = var1.bind(var2)();
                                var1 = null;
                                if (!(var1 == var2)) {
                                    _fun90510_ip = 54;
                                    continue _fun90510
                                }
                            case 41:
                                var1 = _closure3_slot0;
                                var1 = var1.bind(var0)();
                                _fun90510_ip = 76;
                                continue _fun90510;
                            case 54:
                                var1 = _closure2_slot1;
                                if (!(var2 !== var1)) {
                                    _fun90510_ip = 76;
                                    continue _fun90510
                                }
                            case 65:
                                var1 = _closure3_slot0;
                                var1 = var1.bind(var0)();
                            case 76:
                                return var0;
                        }
                    };
                    var _closure3_slot3 = var4;
                    var3 = undefined;
                    var1 = var1.bind(var3)();
                    var5 = _closure1_slot6;
                    var2 = var5.addReactChangeListener;
                    var2 = var2.bind(var5)(var6);
                    var2 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var1 = 29;
                    var1 = var5[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.getRootNavigationRef;
                    var3 = var1.bind(var2)();
                    var1 = null;
                    if (!(var1 != var3)) {
                        _fun90504_ip = 122;
                        continue _fun90504
                    }
                case 106:
                    var2 = var3.addListener;
                    var1 = 'state';
                    var1 = var2.bind(var3)(var1, var4);
                case 122:
                    var0 = function() { // Environment: var0
                        _fun90511: for (var _fun90511_ip = 0;;) switch (_fun90511_ip) {
                            case 0:
                                var4 = _closure1_slot6;
                                var3 = var4.removeReactChangeListener;
                                var2 = _closure3_slot2;
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot2;
                                var0 = 29;
                                var2 = var2[var0];
                                var0 = undefined;
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.getRootNavigationRef;
                                var4 = var2.bind(var3)();
                                var2 = null;
                                if (!(var2 != var4)) {
                                    _fun90511_ip = 83;
                                    continue _fun90511
                                }
                            case 63:
                                var3 = var4.removeListener;
                                var2 = _closure3_slot3;
                                var1 = 'state';
                                var1 = var3.bind(var4)(var1, var2);
                            case 83:
                                return var0;
                        }
                    };
                    return var0;
            }
        };
        var9 = var22.bind(var11)(var9, var10);
        var10 = var11.useEffect;
        var9 = new Array(2);
        var9[0] = var15;
        var9[1] = var8;
        var8 = function() { // Environment: var1
            var2 = _closure1_slot11;
            var1 = {};
            var0 = _closure2_slot3;
            var1.currWaveHeight = var0;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var8 = var10.bind(var11)(var8, var9);
        var15 = var11.useCallback;
        var8 = _closure1_slot3;
        var9 = function*() { // Environment: var1
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun90514: for (var _fun90514_ip = 0;;) switch (_fun90514_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun90514_ip = 617;
                            continue _fun90514
                        }
                    case 10:
                        var1 = undefined;
                        var7 = undefined;
                        var11 = undefined;
                        var8 = undefined;
                        var4 = _closure1_slot0;
                        var2 = _closure1_slot2;
                        var9 = 14;
                        var2 = var2[var9];
                        var4 = var4.bind(var1)(var2);
                        var2 = var4.isModalOpen;
                        var4 = var2.bind(var4)();
                        var5 = false;
                        var2 = false;
                        if (!var4) {
                            _fun90514_ip = 131;
                            continue _fun90514
                        }
                    case 58:
                        var6 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var4 = var4[var9];
                        var6 = var6.bind(var1)(var4);
                        var4 = var6.getOpenModalKey;
                        var10 = var4.bind(var6)();
                        var4 = null;
                        var4 = var4 == var10;
                        if (var4) {
                            _fun90514_ip = 128;
                            continue _fun90514
                        }
                    case 94:
                        var9 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var6 = 15;
                        var6 = var12[var6];
                        var9 = var9.bind(var1)(var6);
                        var6 = var9.isVoiceChannelModalKey;
                        var6 = var6.bind(var9)(var10);
                        var4 = !var6;
                    case 128:
                        var2 = var4;
                    case 131:
                        if (var2) {
                            _fun90514_ip = 614;
                            continue _fun90514
                        }
                    case 137:
                        var2 = _closure2_slot7;
                        var2 = var2.current;
                        if (!var2) {
                            _fun90514_ip = 614;
                            continue _fun90514
                        }
                    case 155:
                        var6 = _closure1_slot6;
                        var2 = var6.isOpen;
                        var2 = var2.bind(var6)();
                        if (var2) {
                            _fun90514_ip = 614;
                            continue _fun90514
                        }
                    case 175:
                        var9 = _closure1_slot8;
                        var6 = var9.getChannel;
                        var2 = _closure2_slot1;
                        var2 = var6.bind(var9)(var2);
                        var10 = null;
                        if (!(var10 != var2)) {
                            _fun90514_ip = 614;
                            continue _fun90514
                        }
                    case 202:
                        var2 = _closure2_slot6;
                        var9 = true;
                        var2 = var2.bind(var1)(var9);
                        var6 = _closure1_slot0;
                        var12 = _closure1_slot2;
                        var2 = 27;
                        var2 = var12[var2];
                        var2 = var6.bind(var1)(var2);
                        var13 = var2.ComponentDispatch;
                        var6 = var13.dispatch;
                        var2 = _closure1_slot18;
                        var2 = var2.VOICE_MESSAGE_BUTTON_PRESSED;
                        var2 = var6.bind(var13)(var2);
                        var6 = _closure1_slot1;
                        var2 = 30;
                        var2 = var12[var2];
                        var12 = var6.bind(var1)(var2);
                        var6 = var12.requestPermission;
                        var2 = _closure1_slot22;
                        var2 = var2.AUDIO;
                        var2 = var6.bind(var12)(var2);
                        SaveGenerator(address = 300);
                    case 298:
                        return var2;
                    case 300:
                        ResumeGenerator(result_out_reg = 2, return_bool_out_reg = 6);
                        if (var6) {
                            _fun90514_ip = 611;
                            continue _fun90514
                        }
                    case 309:
                        if (!var2) {
                            _fun90514_ip = 614;
                            continue _fun90514
                        }
                    case 315:
                        var6 = _closure2_slot4;
                        var6 = var6.current;
                        if (!var6) {
                            _fun90514_ip = 614;
                            continue _fun90514
                        }
                    case 330:
                        var6 = _closure1_slot15;
                        var6 = var6.bind(var1)();
                        var6 = global;
                        var12 = var6.performance;
                        var6 = var12.now;
                        var11 = var6.bind(var12)();
                        var6 = _closure1_slot14;
                        var6 = var6.bind(var1)(var9);
                    case 364: // try_start_0
                        var12 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var9 = 16;
                        var6 = var6[var9];
                        var13 = var12.bind(var1)(var6);
                        var12 = var13.startAudioRecording;
                        var6 = var11;
                        var6 = var12.bind(var13)(var6);
                        SaveGenerator(address = 402);
                    case 400:
                        return var6;
                    case 402:
                        ResumeGenerator(result_out_reg = 6, return_bool_out_reg = 12);
                        if (var12) {
                            _fun90514_ip = 562;
                            continue _fun90514
                        }
                    case 411: // try_end0
                        var13 = _closure1_slot13;
                        var12 = var13.getState;
                        var12 = var12.bind(var13)();
                        var8 = var12;
                        var12 = var12.recordingId;
                        if (!(var12 === var11)) {
                            _fun90514_ip = 614;
                            continue _fun90514
                        }
                    case 441:
                        var8 = var8.voiceMessageAnimationState;
                        var7 = var8;
                        var10 = var10 == var8;
                        var8 = undefined;
                        if (var10) {
                            _fun90514_ip = 478;
                            continue _fun90514
                        }
                    case 459:
                        var10 = var7;
                        var7 = var10.get;
                        var10 = var7.bind(var10)();
                        var7 = 1;
                        var8 = var10[var7];
                    case 478:
                        var7 = _closure1_slot16;
                        var7 = var7.LOCKED;
                        if (!(var8 !== var7)) {
                            _fun90514_ip = 533;
                            continue _fun90514
                        }
                    case 492:
                        var7 = _closure2_slot4;
                        var7 = var7.current;
                        if (var7) {
                            _fun90514_ip = 533;
                            continue _fun90514
                        }
                    case 504:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var9];
                        var8 = var8.bind(var1)(var7);
                        var7 = var8.endAudioRecording;
                        var7 = var7.bind(var8)();
                        _fun90514_ip = 614;
                        continue _fun90514;
                    case 533:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var7 = var7[var9];
                        var8 = var8.bind(var1)(var7);
                        var7 = var8.triggerHaptic;
                        var7 = var7.bind(var8)();
                        _fun90514_ip = 614;
                        continue _fun90514;
                    case 562:
                        return var6;
                    case 565: // catch_target0
                        CatchBlockStart(arg_register = 6);
                        var4 = _closure2_slot6;
                        var4 = var4.bind(var1)(var5);
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot2;
                        var3 = 31;
                        var3 = var5[var3];
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.showVoiceRecordingFailed;
                        var3 = var3.bind(var4)();
                        var3 = undefined;
                        return var3;
                    case 611:
                        return var2;
                    case 614:
                        return var1;
                    case 617:
                        return var0;
                }
            };
            return var0;
        };
        var10 = var8.bind(var3)(var9);
        var9 = new Array(3);
        var9[0] = var20;
        var9[1] = var4;
        var9[2] = var17;
        var17 = var15.bind(var11)(var10, var9);
        var _closure2_slot9 = var17;
        var15 = var11.useCallback;
        var10 = function arg0() {
            _fun90515: for (var _fun90515_ip = 0;;) switch (_fun90515_ip) {
                case 0:
                    var3 = arg0;
                    var2 = _closure2_slot2;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 1;
                    var2 = var2[var1];
                    if (!(var2 !== var3)) {
                        _fun90515_ip = 112;
                        continue _fun90515
                    }
                case 30:
                    var2 = _closure2_slot2;
                    var0 = var2.get;
                    var0 = var0.bind(var2)();
                    var4 = var0[var1];
                    var1 = var2.set;
                    var0 = new Array(2);
                    var0[0] = var4;
                    var0[1] = var3;
                    var0 = var1.bind(var2)(var0);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 17;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.runOnJS;
                    var0 = _closure1_slot29;
                    var0 = var2.bind(var3)(var0);
                    var0 = var0.bind(var1)();
                case 112:
                    var0 = undefined;
                    return var0;
            }
        };
        var9 = {};
        var9.voiceMessageAnimationState = var18;
        var21 = var14[var21];
        var21 = var13.bind(var3)(var21);
        var21 = var21.runOnJS;
        var9.runOnJS = var21;
        var21 = _closure1_slot29;
        var9.triggerHapticGuarded = var21;
        var10.__closure = var9;
        var9 = 9127775028714.0;
        var10.__workletHash = var9;
        var9 = _closure1_slot25;
        var10.__initData = var9;
        var9 = new Array(1);
        var9[0] = var18;
        var15 = var15.bind(var11)(var10, var9);
        var _closure2_slot10 = var15;
        var10 = var11.useCallback;
        var9 = new Array(4);
        var9[0] = var18;
        var9[1] = var20;
        var9[2] = var12;
        var9[3] = var4;
        var4 = function() { // Environment: var1
            _fun90516: for (var _fun90516_ip = 0;;) switch (_fun90516_ip) {
                case 0:
                    var1 = _closure2_slot4;
                    var1 = var1.current;
                    if (var1) {
                        _fun90516_ip = 55;
                        continue _fun90516
                    }
                case 15:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 16;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.endAudioRecording;
                    var1 = var1.bind(var2)();
                    _fun90516_ip = 303;
                    continue _fun90516;
                case 55:
                    var1 = _closure2_slot6;
                    var2 = undefined;
                    var3 = false;
                    var1 = var1.bind(var2)(var3);
                    var4 = _closure2_slot2;
                    var1 = var4.get;
                    var4 = var1.bind(var4)();
                    var1 = 1;
                    var5 = var4[var1];
                    var4 = _closure1_slot16;
                    var4 = var4.SENDING;
                    if (!(var4 !== var5)) {
                        _fun90516_ip = 287;
                        continue _fun90516
                    }
                case 108:
                    var4 = _closure1_slot16;
                    var4 = var4.CANCELLING;
                    if (!(var4 !== var5)) {
                        _fun90516_ip = 267;
                        continue _fun90516
                    }
                case 125:
                    var4 = _closure1_slot16;
                    var4 = var4.LOCKING;
                    if (!(var4 !== var5)) {
                        _fun90516_ip = 174;
                        continue _fun90516
                    }
                case 139:
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 16;
                    var4 = var6[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.endAudioRecording;
                    var4 = var4.bind(var5)();
                    _fun90516_ip = 303;
                    continue _fun90516;
                case 174:
                    var4 = _closure1_slot10;
                    var4 = var4.bind(var2)(var3);
                    var6 = _closure2_slot2;
                    var5 = var6.set;
                    var7 = _closure1_slot16;
                    var8 = var7.LOCKING;
                    var4 = new Array(2);
                    var4[0] = var8;
                    var7 = var7.LOCKED;
                    var4[1] = var7;
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 17;
                    var4 = var6[var4];
                    var5 = var5.bind(var2)(var4);
                    var4 = var5.runOnJS;
                    var1 = _closure1_slot29;
                    var1 = var4.bind(var5)(var1);
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                case 267:
                    var4 = _closure2_slot8;
                    var1 = {};
                    var5 = true;
                    var1.isCancelling = var5;
                    var1 = var4.bind(var2)(var1);
                    _fun90516_ip = 303;
                    continue _fun90516;
                case 287:
                    var1 = _closure2_slot8;
                    var0 = {};
                    var0.isCancelling = var3;
                    var0 = var1.bind(var2)(var0);
                case 303:
                    var0 = undefined;
                    return var0;
            }
        };
        var12 = var10.bind(var11)(var4, var9);
        var _closure2_slot11 = var12;
        var4 = 32;
        var4 = var14[var4];
        var9 = var5.bind(var3)(var4);
        var4 = function*() { // Environment: var1
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun90518: for (var _fun90518_ip = 0;;) switch (_fun90518_ip) {
                    case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun90518_ip = 92;
                            continue _fun90518
                        }
                    case 7:
                        var1 = _closure2_slot9;
                        var2 = undefined;
                        var1 = var1.bind(var2)();
                        SaveGenerator(address = 24);
                    case 22:
                        return var1;
                    case 24:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun90518_ip = 89;
                            continue _fun90518
                        }
                    case 30:
                        var6 = _closure1_slot10;
                        var5 = false;
                        var5 = var6.bind(var2)(var5);
                        var5 = _closure2_slot2;
                        var4 = var5.set;
                        var6 = _closure1_slot16;
                        var7 = var6.LOCKED;
                        var3 = new Array(2);
                        var3[0] = var7;
                        var6 = var6.LOCKED;
                        var3[1] = var6;
                        var3 = var4.bind(var5)(var3);
                        return var2;
                    case 89:
                        return var1;
                    case 92:
                        return var0;
                }
            };
            return var0;
        };
        var8 = var8.bind(var3)(var4);
        var10 = 33;
        var4 = var14[var10];
        var4 = var13.bind(var3)(var4);
        var21 = var4.intl;
        var20 = var21.string;
        var4 = var14[var10];
        var4 = var13.bind(var3)(var4);
        var4 = var4.t;
        var4 = var4.lwy6aX;
        var4 = var20.bind(var21)(var4);
        var4 = var9.bind(var3)(var8, var4);
        var9 = var4.accessibilityActions;
        var8 = var4.onAccessibilityAction;
        var4 = 0.5;
        var4 = var4 * var16;
        var2 = var2 - var16;
        var16 = var4 + var2;
        var _closure2_slot12 = var16;
        var4 = var11.useMemo;
        var2 = new Array(7);
        var2[0] = var7;
        var2[1] = var19;
        var2[2] = var18;
        var2[3] = var17;
        var2[4] = var16;
        var2[5] = var15;
        var2[6] = var12;
        var1 = function() { // Environment: var1
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 34;
            var1 = var9[var1];
            var7 = undefined;
            var1 = var8.bind(var7)(var1);
            var2 = var1.Gesture;
            var1 = var2.Pan;
            var4 = var1.bind(var2)();
            var2 = var4.enabled;
            var1 = _closure2_slot0;
            var1 = !var1;
            var4 = var2.bind(var4)(var1);
            var2 = var4.minDistance;
            var1 = 0;
            var4 = var2.bind(var4)(var1);
            var2 = var4.onTouchesDown;
            var1 = function arg0() {
                _fun90520: for (var _fun90520_ip = 0;;) switch (_fun90520_ip) {
                    case 0:
                        var0 = arg0;
                        var1 = var0.numberOfTouches;
                        var0 = 1;
                        var0 = var1 > var0;
                        if (var0) {
                            _fun90520_ip = 35;
                            continue _fun90520
                        }
                    case 19:
                        var2 = _closure2_slot5;
                        var1 = var2.get;
                        var0 = var1.bind(var2)();
                    case 35:
                        if (var0) {
                            _fun90520_ip = 156;
                            continue _fun90520
                        }
                    case 38:
                        var3 = _closure1_slot0;
                        var4 = _closure1_slot2;
                        var2 = 17;
                        var0 = var4[var2];
                        var1 = undefined;
                        var7 = var3.bind(var1)(var0);
                        var6 = var7.runOnJS;
                        var0 = _closure1_slot10;
                        var6 = var6.bind(var7)(var0);
                        var0 = true;
                        var0 = var6.bind(var1)(var0);
                        var7 = _closure2_slot2;
                        var6 = var7.set;
                        var8 = _closure1_slot16;
                        var9 = var8.SENDING;
                        var5 = new Array(2);
                        var5[0] = var9;
                        var8 = var8.SENDING;
                        var5[1] = var8;
                        var5 = var6.bind(var7)(var5);
                        var2 = var4[var2];
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.runOnJS;
                        var0 = _closure2_slot9;
                        var0 = var2.bind(var3)(var0);
                        var0 = var0.bind(var1)();
                    case 156:
                        var0 = undefined;
                        return var0;
                }
            };
            var10 = {};
            var12 = _closure2_slot5;
            var10.isGestureActiveValue = var12;
            var6 = 17;
            var11 = var9[var6];
            var11 = var8.bind(var7)(var11);
            var11 = var11.runOnJS;
            var10.runOnJS = var11;
            var11 = _closure1_slot10;
            var10.setIsUsingHoldGesture = var11;
            var11 = _closure2_slot2;
            var10.voiceMessageAnimationState = var11;
            var11 = _closure1_slot16;
            var10.VoiceMessageAnimationState = var11;
            var13 = _closure2_slot9;
            var10.startRecording = var13;
            var1.__closure = var10;
            var10 = 15771181123252.0;
            var1.__workletHash = var10;
            var10 = _closure1_slot28;
            var1.__initData = var10;
            var4 = var2.bind(var4)(var1);
            var2 = var4.onUpdate;
            var1 = function arg0() {
                _fun90521: for (var _fun90521_ip = 0;;) switch (_fun90521_ip) {
                    case 0:
                        var1 = arg0;
                        var3 = _closure2_slot5;
                        var2 = var3.get;
                        var2 = var2.bind(var3)();
                        if (!var2) {
                            _fun90521_ip = 159;
                            continue _fun90521
                        }
                    case 25:
                        var3 = var1.translationY;
                        var2 = -40;
                        if (!(var3 <= var2)) {
                            _fun90521_ip = 55;
                            continue _fun90521
                        }
                    case 41:
                        var3 = var1.absoluteX;
                        var2 = _closure2_slot12;
                        if (!(!(var3 >= var2))) {
                            _fun90521_ip = 135;
                            continue _fun90521
                        }
                    case 55:
                        var3 = var1.absoluteX;
                        var2 = _closure2_slot12;
                        if (!(!(var3 < var2))) {
                            _fun90521_ip = 109;
                            continue _fun90521
                        }
                    case 69:
                        var2 = var1.absoluteX;
                        var1 = _closure2_slot12;
                        if (!(var2 >= var1)) {
                            _fun90521_ip = 159;
                            continue _fun90521
                        }
                    case 83:
                        var3 = _closure2_slot10;
                        var1 = _closure1_slot16;
                        var2 = var1.SENDING;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        _fun90521_ip = 159;
                        continue _fun90521;
                    case 109:
                        var3 = _closure2_slot10;
                        var1 = _closure1_slot16;
                        var2 = var1.CANCELLING;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        _fun90521_ip = 159;
                        continue _fun90521;
                    case 135:
                        var2 = _closure2_slot10;
                        var0 = _closure1_slot16;
                        var1 = var0.LOCKING;
                        var0 = undefined;
                        var0 = var2.bind(var0)(var1);
                    case 159:
                        var0 = undefined;
                        return var0;
                }
            };
            var10 = {};
            var10.isGestureActiveValue = var12;
            var12 = 40;
            var10.LOCK_THRESHOLD = var12;
            var12 = _closure2_slot12;
            var10.cancelThresholdX = var12;
            var12 = _closure2_slot10;
            var10.handleUpdateValue = var12;
            var10.VoiceMessageAnimationState = var11;
            var1.__closure = var10;
            var10 = 9262214665783.0;
            var1.__workletHash = var10;
            var10 = _closure1_slot27;
            var1.__initData = var10;
            var2 = var2.bind(var4)(var1);
            var1 = var2.onFinalize;
            var0 = function() {
                var2 = _closure1_slot0;
                var1 = _closure1_slot2;
                var0 = 17;
                var1 = var1[var0];
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.runOnJS;
                var1 = _closure2_slot11;
                var1 = var2.bind(var3)(var1);
                var1 = var1.bind(var0)();
                return var0;
            };
            var4 = {};
            var6 = var9[var6];
            var6 = var8.bind(var7)(var6);
            var6 = var6.runOnJS;
            var4.runOnJS = var6;
            var5 = _closure2_slot11;
            var4.handleFinalize = var5;
            var0.__closure = var4;
            var4 = 2411654680943.0;
            var0.__workletHash = var4;
            var3 = _closure1_slot26;
            var0.__initData = var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4 = var4.bind(var11)(var1, var2);
        var1 = 35;
        var1 = var14[var1];
        var1 = var5.bind(var3)(var1);
        var1 = var1.bind(var3)();
        var11 = var1.tooltipTargetRef;
        var2 = _closure1_slot23;
        var0 = 34;
        var0 = var14[var0];
        var0 = var13.bind(var3)(var0);
        var1 = var0.GestureDetector;
        var0 = {};
        var0.gesture = var4;
        var4 = 36;
        var4 = var14[var4];
        var5 = var5.bind(var3)(var4);
        var4 = {};
        var4.ref = var11;
        var11 = 37;
        var11 = var14[var11];
        var11 = var13.bind(var3)(var11);
        var11 = var11.MicrophoneIcon;
        var4.IconComponent = var11;
        var11 = false;
        var4.active = var11;
        var11 = var14[var10];
        var11 = var13.bind(var3)(var11);
        var12 = var11.intl;
        var11 = var12.string;
        var10 = var14[var10];
        var10 = var13.bind(var3)(var10);
        var10 = var10.t;
        var10 = var10.lwy6aX;
        var10 = var11.bind(var12)(var10);
        var4.accessibilityLabel = var10;
        var4.accessibilityActions = var9;
        var4.onAccessibilityAction = var8;
        var4.disabled = var7;
        var4.style = var6;
        var4 = var2.bind(var3)(var5, var4);
        var0.children = var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1 = var3.bind(var6)(var1);
    var3 = 38;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_messages/native/components/VoiceMessageButton.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 57, 31, 3140, 6532, 1372, 11602, 11603, 660, 1346, 4014, 33, 1297, 671, 3919, 7876, 11755, 3720, 8910, 9866, 1464, 10141, 4004, 4006, 6526, 7608, 9264, 1229, 8739, 3920, 4015, 3147, 8144, 1234, 4961, 11757, 11724, 10842, 2]);