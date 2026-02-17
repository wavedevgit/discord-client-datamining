// modules/calls/native/TelecomManager.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() {
        _fun115019: for (var _fun115019_ip = 0;;) switch (_fun115019_ip) {
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
            case 72: // try_end0
                _fun115019_ip = 76;
                continue _fun115019;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot17 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot17 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var9 = 0;
    var3 = var5[var9];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var8 = 1;
    var3 = var5[var8];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 6;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DeviceEventEmitter;
    var _closure1_slot9 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.ApplicationStreamStates;
    var _closure1_slot14 = var3;
    var3 = 12;
    var3 = var5[var3];
    var10 = var6.bind(var0)(var3);
    var3 = var10.prototype;
    var7 = Object.create(var3, {
        constructor: {
            value: var10
        }
    });
    var13 = 'TelecomManager';
    var14 = var7;
    var3 = new var14[var10](var13, var12);
    var3 = var3 instanceof Object ? var3 : var7;
    var _closure1_slot15 = var3;
    var3 = {};
    var3.Connecting = var9;
    var7 = 'Connecting';
    var3[var9] = var7;
    var3.Connected = var8;
    var7 = 'Connected';
    var3[var8] = var7;
    var _closure1_slot16 = var3;
    var3 = 20;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun115023: for (var _fun115023_ip = 0;;) switch (_fun115023_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot4;
                    var3 = _closure2_slot2;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot7;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot6;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun115023_ip = 86;
                        continue _fun115023
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun115023_ip = 120;
                    continue _fun115023;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot7;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = global;
                    var3 = var3.Map;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var4;
                    var3 = new var14[var3](var13);
                    var6 = var3 instanceof Object ? var3 : var4;
                    var5 = var6.set;
                    var4 = _closure1_slot13;
                    var3 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.reconcileTelecomState;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var6 = var5.bind(var6)(var4, var3);
                    var5 = var6.set;
                    var4 = _closure1_slot12;
                    var3 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleMuteStoreChange;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var5 = var5.bind(var6)(var4, var3);
                    var4 = var5.set;
                    var3 = _closure1_slot10;
                    var2 = function() { // Environment: var1
                        var1 = _closure3_slot0;
                        var0 = var1.handleScreenShareStoreChange;
                        var0 = var0.bind(var1)();
                        return var0;
                    };
                    var2 = var4.bind(var5)(var3, var2);
                    var0.stores = var2;
                    var3 = null;
                    var0.currentCall = var3;
                    var2 = false;
                    var0.isInitialized = var2;
                    var0.lastMuteState = var3;
                    var0.lastScreenShareActive = var3;
                    var0.pendingScreenShareOffSyncTimeout = var3;
                    var0.reconcilePromise = var3;
                    var0.needsReconcile = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun115027: for (var _fun115027_ip = 0;;) switch (_fun115027_ip) {
                            case 0:
                                var3 = arg0;
                                var5 = _closure1_slot15;
                                var4 = var5.info;
                                var2 = var3.callId;
                                var1 = 'Received end call request from Call Bar:';
                                var1 = var4.bind(var5)(var1, var2);
                                var1 = _closure3_slot0;
                                var4 = var1.currentCall;
                                var1 = null;
                                var1 = var1 != var4;
                                if (!var1) {
                                    _fun115027_ip = 81;
                                    continue _fun115027
                                }
                            case 56:
                                var3 = var3.callId;
                                var2 = _closure3_slot0;
                                var2 = var2.currentCall;
                                var2 = var2.channelId;
                                var1 = var3 === var2;
                            case 81:
                                if (!var1) {
                                    _fun115027_ip = 116;
                                    continue _fun115027
                                }
                            case 84:
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 13;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.disconnect;
                                var0 = var0.bind(var1)();
                            case 116:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleEndCallRequested = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun115028: for (var _fun115028_ip = 0;;) switch (_fun115028_ip) {
                            case 0:
                                var3 = _closure1_slot15;
                                var2 = var3.info;
                                var1 = 'Received set foreground request from Call Bar';
                                var1 = var2.bind(var3)(var1);
                                var1 = _closure3_slot0;
                                var3 = var1.currentCall;
                                var1 = null;
                                if (!(var1 != var3)) {
                                    _fun115028_ip = 144;
                                    continue _fun115028
                                }
                            case 43:
                                var3 = arg0;
                                var4 = var3.callId;
                                var3 = _closure3_slot0;
                                var3 = var3.currentCall;
                                var3 = var3.channelId;
                                if (!(var4 === var3)) {
                                    _fun115028_ip = 144;
                                    continue _fun115028
                                }
                            case 71:
                                var4 = _closure1_slot11;
                                var3 = var4.getChannel;
                                var2 = _closure3_slot0;
                                var2 = var2.currentCall;
                                var2 = var2.channelId;
                                var3 = var3.bind(var4)(var2);
                                if (!(var1 != var3)) {
                                    _fun115028_ip = 144;
                                    continue _fun115028
                                }
                            case 104:
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 14;
                                var1 = var1[var0];
                                var0 = undefined;
                                var2 = var2.bind(var0)(var1);
                                var1 = var2.navigateToVoiceChannel;
                                var0 = 'Call Bar';
                                var0 = var1.bind(var2)(var3, var0);
                            case 144:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleSetForegroundRequested = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun115029: for (var _fun115029_ip = 0;;) switch (_fun115029_ip) {
                            case 0:
                                var1 = arg0;
                                var7 = _closure1_slot15;
                                var6 = var7.info;
                                var10 = var1.callId;
                                var8 = var1.isMuted;
                                var11 = 'Received mic mute request from Call Bar:';
                                var9 = 'isMuted:';
                                var12 = var7;
                                var2 = var12[var6](var11, var10, var9, var8, var7);
                                var2 = _closure3_slot0;
                                var4 = var2.currentCall;
                                var2 = null;
                                var2 = var2 != var4;
                                if (!var2) {
                                    _fun115029_ip = 94;
                                    continue _fun115029
                                }
                            case 69:
                                var4 = var1.callId;
                                var3 = _closure3_slot0;
                                var3 = var3.currentCall;
                                var3 = var3.channelId;
                                var2 = var4 === var3;
                            case 94:
                                if (!var2) {
                                    _fun115029_ip = 121;
                                    continue _fun115029
                                }
                            case 97:
                                var4 = _closure1_slot12;
                                var3 = var4.isSelfMute;
                                var4 = var3.bind(var4)();
                                var3 = var1.isMuted;
                                var2 = var4 !== var3;
                            case 121:
                                if (!var2) {
                                    _fun115029_ip = 184;
                                    continue _fun115029
                                }
                            case 124:
                                var4 = _closure1_slot15;
                                var3 = var4.info;
                                var2 = var1.isMuted;
                                var1 = 'Updating Call Bar -> Discord mute state:';
                                var1 = var3.bind(var4)(var1, var2);
                                var2 = _closure1_slot1;
                                var1 = _closure1_slot2;
                                var0 = 15;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.toggleSelfMute;
                                var0 = var0.bind(var1)();
                            case 184:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleMicMuteRequested = var2;
                    var1 = function(arg0) { // Environment: var1
                        _fun115030: for (var _fun115030_ip = 0;;) switch (_fun115030_ip) {
                            case 0:
                                var1 = arg0;
                                var7 = _closure1_slot15;
                                var6 = var7.info;
                                var11 = var1.callId;
                                var9 = var1.isEnabled;
                                var12 = 'Received screen share request from Call Bar:';
                                var10 = 'isEnabled:';
                                var13 = var7;
                                var2 = var13[var6](var12, var11, var10, var9, var8);
                                var2 = _closure3_slot0;
                                var4 = var2.currentCall;
                                var2 = null;
                                if (!(var2 != var4)) {
                                    _fun115030_ip = 413;
                                    continue _fun115030
                                }
                            case 69:
                                var5 = var1.callId;
                                var4 = _closure3_slot0;
                                var4 = var4.currentCall;
                                var4 = var4.channelId;
                                if (!(var5 === var4)) {
                                    _fun115030_ip = 413;
                                    continue _fun115030
                                }
                            case 97:
                                var5 = _closure1_slot11;
                                var4 = var5.getChannel;
                                var3 = _closure3_slot0;
                                var3 = var3.currentCall;
                                var3 = var3.channelId;
                                var8 = var4.bind(var5)(var3);
                                if (!(var2 != var8)) {
                                    _fun115030_ip = 413;
                                    continue _fun115030
                                }
                            case 133:
                                var4 = _closure1_slot10;
                                var3 = var4.getCurrentUserActiveStream;
                                var3 = var3.bind(var4)();
                                var2 = var2 != var3;
                                if (!var2) {
                                    _fun115030_ip = 173;
                                    continue _fun115030
                                }
                            case 154:
                                var4 = var3.state;
                                var3 = _closure1_slot14;
                                var3 = var3.ACTIVE;
                                var2 = var4 === var3;
                            case 173:
                                var3 = var1.isEnabled;
                                if (!var3) {
                                    _fun115030_ip = 342;
                                    continue _fun115030
                                }
                            case 185:
                                if (var2) {
                                    _fun115030_ip = 342;
                                    continue _fun115030
                                }
                            case 191:
                                var7 = _closure1_slot0;
                                var4 = _closure1_slot2;
                                var3 = 16;
                                var3 = var4[var3];
                                var5 = undefined;
                                var6 = var7.bind(var5)(var3);
                                var3 = var6.getVideoPermission;
                                var3 = var3.bind(var6)(var8);
                                var6 = 17;
                                var4 = var4[var6];
                                var7 = var7.bind(var5)(var4);
                                var4 = var7.getOSRequirement;
                                var4 = var4.bind(var7)();
                                var7 = _closure1_slot15;
                                if (var4) {
                                    _fun115030_ip = 273;
                                    continue _fun115030
                                }
                            case 253:
                                var8 = var7.warn;
                                var4 = 'Cannot start screen share from Call Bar: OS version does not meet requirements';
                                var4 = var8.bind(var7)(var4);
                                var4 = undefined;
                                return var4;
                            case 273:
                                if (var3) {
                                    _fun115030_ip = 296;
                                    continue _fun115030
                                }
                            case 276:
                                var4 = var7.warn;
                                var3 = 'Cannot start screen share from Call Bar: user lacks streaming permission in this channel';
                                var3 = var4.bind(var7)(var3);
                                var3 = undefined;
                                return var3;
                            case 296:
                                var4 = var7.info;
                                var3 = 'Starting screen share from Call Bar';
                                var3 = var4.bind(var7)(var3);
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var3 = var3[var6];
                                var4 = var4.bind(var5)(var3);
                                var3 = var4.startStream;
                                var3 = var3.bind(var4)();
                                _fun115030_ip = 413;
                                continue _fun115030;
                            case 342:
                                var1 = var1.isEnabled;
                                var1 = !var1;
                                if (!var1) {
                                    _fun115030_ip = 357;
                                    continue _fun115030
                                }
                            case 354:
                                var1 = var2;
                            case 357:
                                if (!var1) {
                                    _fun115030_ip = 413;
                                    continue _fun115030
                                }
                            case 360:
                                var3 = _closure1_slot15;
                                var2 = var3.info;
                                var1 = 'Stopping screen share from Call Bar';
                                var1 = var2.bind(var3)(var1);
                                var2 = _closure1_slot0;
                                var1 = _closure1_slot2;
                                var0 = 17;
                                var1 = var1[var0];
                                var0 = undefined;
                                var1 = var2.bind(var0)(var1);
                                var0 = var1.stopScreenshare;
                                var0 = var0.bind(var1)();
                            case 413:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleScreenShareRequested = var1;
                    return var0;
            }
        };
        var _closure2_slot2 = var3;
        var1 = _closure1_slot8;
        var2 = undefined;
        var0 = arg0;
        var0 = var1.bind(var2)(var3, var0);
        var1 = _closure1_slot5;
        var4 = {};
        var0 = '_initialize';
        var4.key = var0;
        var0 = function() {
            _fun115031: for (var _fun115031_ip = 0;;) switch (_fun115031_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isInitialized;
                    var0 = !var0;
                    if (!var0) {
                        _fun115031_ip = 25;
                        continue _fun115031
                    }
                case 15:
                    var2 = var1.isSupported;
                    var0 = var2.bind(var1)();
                case 25:
                    if (!var0) {
                        _fun115031_ip = 163;
                        continue _fun115031
                    }
                case 31:
                    var4 = _closure1_slot15;
                    var3 = var4.info;
                    var2 = 'Initializing CallKitManager using Telecom framework';
                    var2 = var3.bind(var4)(var2);
                    var4 = _closure1_slot9;
                    var3 = var4.addListener;
                    var2 = var1.handleEndCallRequested;
                    var0 = 'telecom-end-call-requested';
                    var0 = var3.bind(var4)(var0, var2);
                    var3 = var4.addListener;
                    var2 = var1.handleSetForegroundRequested;
                    var0 = 'telecom-set-foreground-requested';
                    var0 = var3.bind(var4)(var0, var2);
                    var3 = var4.addListener;
                    var2 = var1.handleMicMuteRequested;
                    var0 = 'telecom-mic-mute-requested';
                    var0 = var3.bind(var4)(var0, var2);
                    var3 = var4.addListener;
                    var2 = var1.handleScreenShareRequested;
                    var0 = 'telecom-screen-share-requested';
                    var0 = var3.bind(var4)(var0, var2);
                    var0 = true;
                    var1.isInitialized = var0;
                case 163:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var0;
        var0 = new Array(15);
        var0[0] = var4;
        var4 = {};
        var7 = '_terminate';
        var4.key = var7;
        var7 = function() {
            _fun115032: for (var _fun115032_ip = 0;;) switch (_fun115032_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isInitialized;
                    if (!var0) {
                        _fun115032_ip = 129;
                        continue _fun115032
                    }
                case 12:
                    var3 = _closure1_slot9;
                    var2 = var3.removeAllListeners;
                    var0 = 'telecom-end-call-requested';
                    var0 = var2.bind(var3)(var0);
                    var2 = var3.removeAllListeners;
                    var0 = 'telecom-set-foreground-requested';
                    var0 = var2.bind(var3)(var0);
                    var2 = var3.removeAllListeners;
                    var0 = 'telecom-mic-mute-requested';
                    var0 = var2.bind(var3)(var0);
                    var2 = var3.removeAllListeners;
                    var0 = 'telecom-screen-share-requested';
                    var0 = var2.bind(var3)(var0);
                    var0 = var1.clearPendingScreenShareOffSync;
                    var0 = var0.bind(var1)();
                    var0 = var1.reportCallEnded;
                    var0 = var0.bind(var1)();
                    var0 = null;
                    var1.reconcilePromise = var0;
                    var0 = false;
                    var1.needsReconcile = var0;
                    var1.isInitialized = var0;
                case 129:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[1] = var4;
        var4 = {};
        var7 = 'isSupported';
        var4.key = var7;
        var7 = function() {
            _fun115033: for (var _fun115033_ip = 0;;) switch (_fun115033_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var0 = 18;
                    var0 = var3[var0];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var0);
                    var0 = var2.isMetaQuest;
                    var0 = var0.bind(var2)();
                    if (!var0) {
                        _fun115033_ip = 64;
                        continue _fun115033
                    }
                case 38:
                    var2 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 19;
                    var1 = var4[var1];
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var0 = var1 != var2;
                case 64:
                    return var0;
            }
        };
        var4.value = var7;
        var0[2] = var4;
        var4 = {};
        var7 = 'isEnabled';
        var4.key = var7;
        var7 = function() {
            _fun115034: for (var _fun115034_ip = 0;;) switch (_fun115034_ip) {
                case 0:
                    var1 = this;
                    var0 = var1.isSupported;
                    var0 = var0.bind(var1)();
                    if (!var0) {
                        _fun115034_ip = 22;
                        continue _fun115034
                    }
                case 16:
                    var0 = var1.isInitialized;
                case 22:
                    return var0;
            }
        };
        var4.value = var7;
        var0[3] = var4;
        var4 = {};
        var7 = 'reconcileTelecomState';
        var4.key = var7;
        var7 = function() {
            _fun115035: for (var _fun115035_ip = 0;;) switch (_fun115035_ip) {
                case 0:
                    var1 = this;
                    var _closure3_slot0 = var1;
                    var2 = var1.isEnabled;
                    var2 = var2.bind(var1)();
                    if (!var2) {
                        _fun115035_ip = 80;
                        continue _fun115035
                    }
                case 22:
                    var3 = var1.reconcilePromise;
                    var2 = null;
                    if (!(var2 != var3)) {
                        _fun115035_ip = 44;
                        continue _fun115035
                    }
                case 34:
                    var2 = true;
                    var1.needsReconcile = var2;
                    _fun115035_ip = 80;
                    continue _fun115035;
                case 44:
                    var2 = var1.doReconcile;
                    var3 = var2.bind(var1)();
                    var2 = var3.finally;
                    var0 = function() { // Environment: var0
                        _fun115036: for (var _fun115036_ip = 0;;) switch (_fun115036_ip) {
                            case 0:
                                var1 = _closure3_slot0;
                                var2 = null;
                                var1.reconcilePromise = var2;
                                var1 = var1.needsReconcile;
                                if (!var1) {
                                    _fun115036_ip = 46;
                                    continue _fun115036
                                }
                            case 24:
                                var1 = _closure3_slot0;
                                var0 = false;
                                var1.needsReconcile = var0;
                                var0 = var1.reconcileTelecomState;
                                var0 = var0.bind(var1)();
                            case 46:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0 = var2.bind(var3)(var0);
                    var1.reconcilePromise = var0;
                case 80:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var7;
        var0[4] = var4;
        var4 = {};
        var7 = 'doReconcile';
        var4.key = var7;
        var7 = _closure1_slot3;
        var6 = function*() { // Environment: var5
            var0 = function*() { // Original name: ?anon_0_, environment: var0
                _fun115038: for (var _fun115038_ip = 0;;) switch (_fun115038_ip) {
                    case 0:
                        StartGenerator();
                        var7 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                        if (var1) {
                            _fun115038_ip = 746;
                            continue _fun115038
                        }
                    case 13:
                        var2 = _closure1_slot13;
                        var1 = var2.getChannelId;
                        var14 = var1.bind(var2)();
                        var1 = var2.isConnected;
                        var13 = var1.bind(var2)();
                        var5 = null;
                        var8 = null;
                        if (!var13) {
                            _fun115038_ip = 59;
                            continue _fun115038
                        }
                    case 47:
                        var1 = var5 != var14;
                        var8 = null;
                        if (!var1) {
                            _fun115038_ip = 59;
                            continue _fun115038
                        }
                    case 56:
                        var8 = var14;
                    case 59:
                        var12 = _closure1_slot15;
                        var11 = var12.info;
                        var1 = var7.currentCall;
                        var3 = var5 == var1;
                        var2 = undefined;
                        var10 = undefined;
                        if (var3) {
                            _fun115038_ip = 91;
                            continue _fun115038
                        }
                    case 86:
                        var10 = var1.channelId;
                    case 91:
                        var22 = 'Reconcile: rtc=';
                        var20 = 'connected=';
                        var18 = 'target=';
                        var16 = 'current=';
                        var23 = var12;
                        var21 = var14;
                        var19 = var13;
                        var17 = var8;
                        var15 = var10;
                        var1 = var23[var11](var22, var21, var20, var19, var18, var17, var16, var15, var14);
                        if (!(var5 == var8)) {
                            _fun115038_ip = 177;
                            continue _fun115038
                        }
                    case 138:
                        var1 = var7.currentCall;
                        if (!(var5 != var1)) {
                            _fun115038_ip = 606;
                            continue _fun115038
                        }
                    case 151:
                        var1 = var7.reportCallEnded;
                        var1 = var1.bind(var7)();
                        SaveGenerator(address = 165);
                    case 163:
                        return var1;
                    case 165:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (!var3) {
                            _fun115038_ip = 606;
                            continue _fun115038
                        }
                    case 174:
                        return var1;
                    case 177:
                        var3 = var7.currentCall;
                        var6 = var5 == var3;
                        var1 = undefined;
                        if (var6) {
                            _fun115038_ip = 197;
                            continue _fun115038
                        }
                    case 192:
                        var1 = var3.channelId;
                    case 197:
                        if (!(var1 === var8)) {
                            _fun115038_ip = 229;
                            continue _fun115038
                        }
                    case 201:
                        var1 = var7.currentCall;
                        var3 = var1.state;
                        var1 = _closure1_slot16;
                        var1 = var1.Connected;
                        if (!(var3 !== var1)) {
                            _fun115038_ip = 606;
                            continue _fun115038
                        }
                    case 229:
                        var1 = var7.currentCall;
                        var1 = var5 != var1;
                        if (!var1) {
                            _fun115038_ip = 257;
                            continue _fun115038
                        }
                    case 242:
                        var3 = var7.currentCall;
                        var3 = var3.channelId;
                        var1 = var3 !== var8;
                    case 257:
                        if (!var1) {
                            _fun115038_ip = 290;
                            continue _fun115038
                        }
                    case 260:
                        var3 = var7.endCall;
                        var1 = var7.currentCall;
                        var1 = var3.bind(var7)(var1);
                        SaveGenerator(address = 281);
                    case 279:
                        return var1;
                    case 281:
                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                        if (var3) {
                            _fun115038_ip = 743;
                            continue _fun115038
                        }
                    case 290:
                        var6 = var7.currentCall;
                        var9 = var5 == var6;
                        var3 = undefined;
                        if (var9) {
                            _fun115038_ip = 310;
                            continue _fun115038
                        }
                    case 305:
                        var3 = var6.channelId;
                    case 310:
                        if (!(var3 !== var8)) {
                            _fun115038_ip = 413;
                            continue _fun115038
                        }
                    case 314:
                        var6 = _closure1_slot11;
                        var3 = var6.getChannel;
                        var6 = var3.bind(var6)(var8);
                        if (!(var5 != var6)) {
                            _fun115038_ip = 740;
                            continue _fun115038
                        }
                    case 335:
                        var3 = {};
                        var3.channelId = var8;
                        var9 = _closure1_slot13;
                        var8 = var9.getGuildId;
                        var9 = var8.bind(var9)();
                        var10 = var5 != var9;
                        var8 = null;
                        if (!var10) {
                            _fun115038_ip = 367;
                            continue _fun115038
                        }
                    case 364:
                        var8 = var9;
                    case 367:
                        var3.guildId = var8;
                        var8 = var6.name;
                        var9 = var5 != var8;
                        var6 = null;
                        if (!var9) {
                            _fun115038_ip = 388;
                            continue _fun115038
                        }
                    case 385:
                        var6 = var8;
                    case 388:
                        var3.channelName = var6;
                        var6 = _closure1_slot16;
                        var6 = var6.Connecting;
                        var3.state = var6;
                        var7.currentCall = var3;
                    case 413:
                        var3 = var7.currentCall;
                        var6 = var3.state;
                        var3 = _closure1_slot16;
                        var3 = var3.Connecting;
                        if (!(var6 === var3)) {
                            _fun115038_ip = 606;
                            continue _fun115038
                        }
                    case 441:
                        var3 = var7.currentCall;
                        var6 = var3.channelId;
                        var8 = var7.startCall;
                        var3 = {};
                        var9 = var7.currentCall;
                        var9 = var9.channelId;
                        var3.channelId = var9;
                        var9 = var7.currentCall;
                        var9 = var9.guildId;
                        var3.guildId = var9;
                        var3 = var8.bind(var7)(var3);
                        SaveGenerator(address = 499);
                    case 497:
                        return var3;
                    case 499:
                        ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 8);
                        if (var8) {
                            _fun115038_ip = 737;
                            continue _fun115038
                        }
                    case 508:
                        if (!var3) {
                            _fun115038_ip = 606;
                            continue _fun115038
                        }
                    case 511:
                        var8 = var7.currentCall;
                        var9 = var5 == var8;
                        var5 = undefined;
                        if (var9) {
                            _fun115038_ip = 531;
                            continue _fun115038
                        }
                    case 526:
                        var5 = var8.channelId;
                    case 531:
                        if (!(var5 === var6)) {
                            _fun115038_ip = 659;
                            continue _fun115038
                        }
                    case 538:
                        var8 = _closure1_slot13;
                        var5 = var8.isConnected;
                        var5 = var5.bind(var8)();
                        if (!var5) {
                            _fun115038_ip = 609;
                            continue _fun115038
                        }
                    case 555:
                        var8 = _closure1_slot13;
                        var5 = var8.getChannelId;
                        var5 = var5.bind(var8)();
                        if (!(var5 === var6)) {
                            _fun115038_ip = 609;
                            continue _fun115038
                        }
                    case 573:
                        var8 = var7.currentCall;
                        var5 = _closure1_slot16;
                        var5 = var5.Connected;
                        var8.state = var5;
                        var5 = var7.setCallActive;
                        var5 = var5.bind(var7)(var6);
                    case 606:
                        return var2;
                    case 609:
                        var9 = _closure1_slot15;
                        var8 = var9.info;
                        var5 = 'RTCConnectionStore indicates disconnect after startCall, ending call:';
                        var5 = var8.bind(var9)(var5, var6);
                        var5 = var7.reportCallEnded;
                        var5 = var5.bind(var7)();
                        SaveGenerator(address = 645);
                    case 643:
                        return var5;
                    case 645:
                        ResumeGenerator(result_out_reg = 5, return_bool_out_reg = 7);
                        if (var7) {
                            _fun115038_ip = 656;
                            continue _fun115038
                        }
                    case 651:
                        var7 = undefined;
                        return var7;
                    case 656:
                        return var5;
                    case 659:
                        var8 = _closure1_slot15;
                        var7 = var8.info;
                        var5 = 'Call state changed during startCall, ending orphaned native call:';
                        var5 = var7.bind(var8)(var5, var6);
                        var5 = _closure1_slot1;
                        var7 = _closure1_slot2;
                        var4 = 19;
                        var4 = var7[var4];
                        var5 = var5.bind(var2)(var4);
                        var4 = var5.endCall;
                        var6 = var4.bind(var5)(var6);
                        var5 = var6.catch;
                        var4 = function(arg0) { // Environment: var4
                            var3 = _closure1_slot15;
                            var2 = var3.warn;
                            var1 = 'Failed to end orphaned call:';
                            var0 = arg0;
                            var0 = var2.bind(var3)(var1, var0);
                            var0 = undefined;
                            return var0;
                        };
                        var4 = var5.bind(var6)(var4);
                        var4 = undefined;
                        return var4;
                    case 737:
                        return var3;
                    case 740:
                        return var2;
                    case 743:
                        return var1;
                    case 746:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot1 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot1;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'startCall';
        var4.key = var6;
        var6 = function*(arg0) { // Environment: var5
            var0 = function*(arg0) { // Original name: ?anon_0_, environment: var0
                _fun115042: for (var _fun115042_ip = 0;;) switch (_fun115042_ip) {
                    case 0:
                        StartGenerator();
                        var2 = arg0;
                        var5 = this;
                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 3);
                        if (var3) {
                            _fun115042_ip = 306;
                            continue _fun115042
                        }
                    case 16:
                        var8 = undefined;
                        var1 = undefined;
                        var11 = undefined;
                        var6 = undefined;
                        var1 = var2.channelId;
                        var11 = var2.guildId;
                        var2 = var5.currentCall;
                        var9 = null;
                        var4 = var9 == var2;
                        var3 = undefined;
                        if (var4) {
                            _fun115042_ip = 56;
                            continue _fun115042
                        }
                    case 51:
                        var3 = var2.channelId;
                    case 56:
                        var2 = var1;
                        if (!(var3 === var2)) {
                            _fun115042_ip = 94;
                            continue _fun115042
                        }
                    case 63:
                        var2 = var5.currentCall;
                        var4 = var2.state;
                        var3 = _closure1_slot16;
                        var3 = var3.Connected;
                        if (!(var4 !== var3)) {
                            _fun115042_ip = 276;
                            continue _fun115042
                        }
                    case 94:
                        var12 = _closure1_slot15;
                        var10 = var12.info;
                        var7 = var1;
                        var4 = 'Starting Telecom call:';
                        var4 = var10.bind(var12)(var4, var7);
                    case 122: // try_start_0
                        var7 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var4 = 19;
                        var4 = var10[var4];
                        var8 = var7.bind(var8)(var4);
                        var7 = var8.startCall;
                        var4 = var1;
                        var10 = var11;
                        var10 = var9 != var10;
                        var9 = null;
                        if (!var10) {
                            _fun115042_ip = 172;
                            continue _fun115042
                        }
                    case 163:
                        var10 = {};
                        var10.guildId = var11;
                        var9 = var10;
                    case 172:
                        var4 = var7.bind(var8)(var4, var9);
                        SaveGenerator(address = 182);
                    case 180:
                        return var4;
                    case 182:
                        ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 7);
                        if (var7) {
                            _fun115042_ip = 231;
                            continue _fun115042
                        }
                    case 188:
                        var6 = var4;
                        if (var4) {
                            _fun115042_ip = 228;
                            continue _fun115042
                        }
                    case 194:
                        var9 = _closure1_slot15;
                        var8 = var9.warn;
                        var7 = 'Native startCall returned false, clearing call state';
                        var7 = var8.bind(var9)(var7);
                        var8 = var5.clearCall;
                        var7 = var1;
                        var7 = var8.bind(var5)(var7);
                    case 228: // try_end0
                        return var6;
                    case 231:
                        return var4;
                    case 234: // catch_target0
                        CatchBlockStart(arg_register = 7);
                        var6 = _closure1_slot15;
                        var4 = var6.warn;
                        var3 = 'Failed to register call with Telecom:';
                        var3 = var4.bind(var6)(var3, var7);
                        var4 = var5.clearCall;
                        var3 = var1;
                        var3 = var4.bind(var5)(var3);
                        var3 = false;
                        return var3;
                    case 276:
                        var4 = _closure1_slot15;
                        var3 = var4.info;
                        var2 = var1;
                        var1 = 'Call already active for channel:';
                        var1 = var3.bind(var4)(var1, var2);
                        var1 = true;
                        return var1;
                    case 306:
                        return var0;
                }
            };
            return var0;
        };
        var6 = var7.bind(var2)(var6);
        var _closure2_slot0 = var6;
        var6 = function() {
            var0 = undefined;
            var3 = _closure2_slot0;
            var2 = var3.apply;
            var0 = arguments;
            var1 = var0;
            var0 = this;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'endCall';
        var4.key = var6;
        var6 = function arg0() {
            var1 = arg0;
            var2 = this;
            var _closure3_slot0 = var2;
            var _closure3_slot1 = var1;
            var6 = _closure1_slot15;
            var5 = var6.info;
            var4 = var1.channelId;
            var3 = 'Ending call:';
            var3 = var5.bind(var6)(var3, var4);
            var4 = _closure1_slot1;
            var3 = _closure1_slot2;
            var2 = 19;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.endCall;
            var1 = var1.channelId;
            var3 = var2.bind(var3)(var1);
            var2 = var3.then;
            var1 = function(arg0) { // Environment: var0
                var2 = _closure3_slot0;
                var1 = var2.clearCall;
                var0 = _closure3_slot1;
                var0 = var0.channelId;
                var0 = var1.bind(var2)(var0);
                var0 = arg0;
                return var0;
            };
            var2 = var2.bind(var3)(var1);
            var1 = var2.catch;
            var0 = function(arg0) { // Environment: var0
                var3 = _closure1_slot15;
                var2 = var3.warn;
                var1 = 'Failed to end call:';
                var0 = arg0;
                var0 = var2.bind(var3)(var1, var0);
                var2 = _closure3_slot0;
                var1 = var2.clearCall;
                var0 = _closure3_slot1;
                var0 = var0.channelId;
                var0 = var1.bind(var2)(var0);
                var0 = false;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'reportCallEnded';
        var4.key = var6;
        var6 = function() {
            _fun115047: for (var _fun115047_ip = 0;;) switch (_fun115047_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot15;
                    var1 = var3.info;
                    var0 = 'Reporting call ended';
                    var0 = var1.bind(var3)(var0);
                    var1 = var2.currentCall;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun115047_ip = 58;
                        continue _fun115047
                    }
                case 39:
                    var1 = var2.endCall;
                    var0 = var2.currentCall;
                    var0 = var1.bind(var2)(var0);
                    _fun115047_ip = 79;
                    continue _fun115047;
                case 58:
                    var1 = global;
                    var3 = var1.Promise;
                    var2 = var3.resolve;
                    var1 = true;
                    var0 = var2.bind(var3)(var1);
                case 79:
                    return var0;
            }
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'setCallActive';
        var4.key = var6;
        var6 = function arg0() {
            _fun115048: for (var _fun115048_ip = 0;;) switch (_fun115048_ip) {
                case 0:
                    var5 = arg0;
                    var2 = this;
                    var3 = var2.currentCall;
                    var0 = null;
                    var4 = var0 == var3;
                    var0 = undefined;
                    var1 = undefined;
                    if (var4) {
                        _fun115048_ip = 30;
                        continue _fun115048
                    }
                case 25:
                    var1 = var3.channelId;
                case 30:
                    if (!(var1 !== var5)) {
                        _fun115048_ip = 60;
                        continue _fun115048
                    }
                case 34:
                    var4 = _closure1_slot15;
                    var3 = var4.warn;
                    var1 = 'setCallActive called for unknown channel:';
                    var1 = var3.bind(var4)(var1, var5);
                    _fun115048_ip = 145;
                    continue _fun115048;
                case 60:
                    var6 = _closure1_slot15;
                    var4 = var6.info;
                    var1 = 'Setting call active:';
                    var1 = var4.bind(var6)(var1, var5);
                    var4 = _closure1_slot12;
                    var1 = var4.isSelfMute;
                    var1 = var1.bind(var4)();
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 19;
                    var3 = var6[var3];
                    var4 = var4.bind(var0)(var3);
                    var3 = var4.setCallActive;
                    var3 = var3.bind(var4)(var5, var1);
                    var2.lastMuteState = var1;
                    var1 = false;
                    var2.lastScreenShareActive = var1;
                case 145:
                    return var0;
            }
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'clearScreenShareState';
        var4.key = var6;
        var6 = function() {
            var1 = null;
            var0 = this;
            var0.lastScreenShareActive = var1;
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'clearPendingScreenShareOffSync';
        var4.key = var6;
        var6 = function() {
            _fun115050: for (var _fun115050_ip = 0;;) switch (_fun115050_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.pendingScreenShareOffSyncTimeout;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun115050_ip = 42;
                        continue _fun115050
                    }
                case 15:
                    var2 = global;
                    var4 = var2.clearTimeout;
                    var3 = var1.pendingScreenShareOffSyncTimeout;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var1.pendingScreenShareOffSyncTimeout = var0;
                case 42:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'clearCall';
        var4.key = var6;
        var6 = function arg0() {
            _fun115051: for (var _fun115051_ip = 0;;) switch (_fun115051_ip) {
                case 0:
                    var2 = this;
                    var3 = var2.currentCall;
                    var1 = null;
                    var5 = var1 == var3;
                    var0 = undefined;
                    var4 = undefined;
                    if (var5) {
                        _fun115051_ip = 27;
                        continue _fun115051
                    }
                case 22:
                    var4 = var3.channelId;
                case 27:
                    var3 = arg0;
                    if (!(var4 === var3)) {
                        _fun115051_ip = 68;
                        continue _fun115051
                    }
                case 34:
                    var2.currentCall = var1;
                    var2.lastMuteState = var1;
                    var1 = var2.clearScreenShareState;
                    var1 = var1.bind(var2)();
                    var1 = var2.clearPendingScreenShareOffSync;
                    var1 = var1.bind(var2)();
                case 68:
                    return var0;
            }
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'handleMuteStoreChange';
        var4.key = var6;
        var6 = function() {
            _fun115052: for (var _fun115052_ip = 0;;) switch (_fun115052_ip) {
                case 0:
                    var0 = this;
                    var1 = var0.isEnabled;
                    var1 = var1.bind(var0)();
                    if (!var1) {
                        _fun115052_ip = 161;
                        continue _fun115052
                    }
                case 19:
                    var2 = var0.currentCall;
                    var1 = null;
                    if (!(var1 != var2)) {
                        _fun115052_ip = 161;
                        continue _fun115052
                    }
                case 34:
                    var1 = var0.currentCall;
                    var3 = var1.state;
                    var2 = _closure1_slot16;
                    var2 = var2.Connected;
                    if (!(var3 === var2)) {
                        _fun115052_ip = 161;
                        continue _fun115052
                    }
                case 62:
                    var3 = _closure1_slot12;
                    var2 = var3.isSelfMute;
                    var3 = var2.bind(var3)();
                    var2 = var0.lastMuteState;
                    if (!(var2 !== var3)) {
                        _fun115052_ip = 161;
                        continue _fun115052
                    }
                case 86:
                    var0.lastMuteState = var3;
                    var5 = _closure1_slot15;
                    var4 = var5.info;
                    var2 = 'Syncing Discord -> Call Bar mute state:';
                    var2 = var4.bind(var5)(var2, var3);
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var4.bind(var1)(var2);
                    var1 = var2.setMicMuted;
                    var0 = var0.currentCall;
                    var0 = var0.channelId;
                    var0 = var1.bind(var2)(var0, var3);
                case 161:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'handleScreenShareStoreChange';
        var4.key = var6;
        var5 = function() {
            _fun115053: for (var _fun115053_ip = 0;;) switch (_fun115053_ip) {
                case 0:
                    var0 = this;
                    var _closure3_slot0 = var0;
                    var1 = var0.isEnabled;
                    var1 = var1.bind(var0)();
                    if (!var1) {
                        _fun115053_ip = 264;
                        continue _fun115053
                    }
                case 25:
                    var1 = var0.currentCall;
                    var3 = null;
                    if (!(var3 != var1)) {
                        _fun115053_ip = 264;
                        continue _fun115053
                    }
                case 40:
                    var1 = var0.currentCall;
                    var5 = var1.state;
                    var4 = _closure1_slot16;
                    var4 = var4.Connected;
                    if (!(var5 === var4)) {
                        _fun115053_ip = 264;
                        continue _fun115053
                    }
                case 71:
                    var5 = _closure1_slot10;
                    var4 = var5.getCurrentUserActiveStream;
                    var4 = var4.bind(var5)();
                    var3 = var3 != var4;
                    if (!var3) {
                        _fun115053_ip = 111;
                        continue _fun115053
                    }
                case 92:
                    var5 = var4.state;
                    var4 = _closure1_slot14;
                    var4 = var4.ACTIVE;
                    var3 = var5 === var4;
                case 111:
                    var4 = var0.lastScreenShareActive;
                    if (!(var4 !== var3)) {
                        _fun115053_ip = 264;
                        continue _fun115053
                    }
                case 124:
                    var0.lastScreenShareActive = var3;
                    var4 = var0.clearPendingScreenShareOffSync;
                    var4 = var4.bind(var0)();
                    if (var3) {
                        _fun115053_ip = 195;
                        continue _fun115053
                    }
                case 143:
                    var3 = var0.currentCall;
                    var3 = var3.channelId;
                    var _closure3_slot1 = var3;
                    var3 = global;
                    var5 = var3.setTimeout;
                    var4 = undefined;
                    var3 = function() { // Environment: var2
                        _fun115054: for (var _fun115054_ip = 0;;) switch (_fun115054_ip) {
                            case 0:
                                var2 = _closure3_slot0;
                                var3 = null;
                                var2.pendingScreenShareOffSyncTimeout = var3;
                                var1 = var2.isEnabled;
                                var1 = var1.bind(var2)();
                                if (!var1) {
                                    _fun115054_ip = 60;
                                    continue _fun115054
                                }
                            case 28:
                                var2 = _closure3_slot0;
                                var2 = var2.currentCall;
                                var4 = var3 == var2;
                                var3 = undefined;
                                if (var4) {
                                    _fun115054_ip = 52;
                                    continue _fun115054
                                }
                            case 47:
                                var3 = var2.channelId;
                            case 52:
                                var2 = _closure3_slot1;
                                var1 = var3 === var2;
                            case 60:
                                if (!var1) {
                                    _fun115054_ip = 130;
                                    continue _fun115054
                                }
                            case 63:
                                var4 = _closure1_slot15;
                                var3 = var4.info;
                                var2 = 'Syncing Discord -> Call Bar screen share state: false (delayed)';
                                var2 = var3.bind(var4)(var2);
                                var3 = _closure1_slot1;
                                var2 = _closure1_slot2;
                                var1 = 19;
                                var2 = var2[var1];
                                var1 = undefined;
                                var4 = var3.bind(var1)(var2);
                                var3 = var4.setScreenShareState;
                                var2 = _closure3_slot1;
                                var1 = true;
                                var0 = false;
                                var0 = var3.bind(var4)(var2, var1, var0);
                            case 130:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var2 = 400;
                    var2 = var5.bind(var4)(var3, var2);
                    var0.pendingScreenShareOffSyncTimeout = var2;
                    _fun115053_ip = 264;
                    continue _fun115053;
                case 195:
                    var4 = _closure1_slot15;
                    var3 = var4.info;
                    var2 = 'Syncing Discord -> Call Bar screen share state: true';
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 19;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.setScreenShareState;
                    var0 = var0.currentCall;
                    var1 = var0.channelId;
                    var0 = true;
                    var0 = var2.bind(var3)(var1, var0, var0);
                case 264:
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var5;
        var0[14] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var14 = var3;
    var1 = new var14[var1](var13);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 21;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/calls/native/TelecomManager.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5, 6, 7, 15, 17, 18, 27, 3713, 1372, 3476, 3517, 660, 3, 4239, 7906, 8241, 8486, 8491, 4114, 14720, 4307, 2]);