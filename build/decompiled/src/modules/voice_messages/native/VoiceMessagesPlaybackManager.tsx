// modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var9 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var9;
    var _closure1_slot2 = var8;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var5
        _fun98553: for (var _fun98553_ip = 0;;) switch (_fun98553_ip) {
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
                _fun98553_ip = 76;
                continue _fun98553;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot14 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot14 = var0;
    var4 = function(arg0) { // Original name: pauseCurrentAudioPlayer, environment: var5
        _fun98556: for (var _fun98556_ip = 0;;) switch (_fun98556_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.isAndroid;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun98556_ip = 70;
                    continue _fun98556
                }
            case 41:
                var2 = _closure1_slot10;
                var4 = var2.DCDAudioPlayerManager;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun98556_ip = 101;
                    continue _fun98556
                }
            case 57:
                var2 = var4.pauseCurrentPlayer;
                var2 = var2.bind(var4)(var3);
                _fun98556_ip = 101;
                continue _fun98556;
            case 70:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.pauseCurrentPlayer;
                var1 = var1.bind(var2)(var3);
            case 101:
                return var0;
        }
    };
    var _closure1_slot15 = var4;
    var3 = function() { // Original name: playCurrentAudioPlayer, environment: var5
        _fun98557: for (var _fun98557_ip = 0;;) switch (_fun98557_ip) {
            case 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var3 = var3.bind(var0)(var2);
                var2 = var3.isAndroid;
                var2 = var2.bind(var3)();
                if (var2) {
                    _fun98557_ip = 66;
                    continue _fun98557
                }
            case 38:
                var2 = _closure1_slot10;
                var3 = var2.DCDAudioPlayerManager;
                var2 = null;
                if (!(var2 != var3)) {
                    _fun98557_ip = 96;
                    continue _fun98557
                }
            case 54:
                var2 = var3.maybePlayCurrentPlayer;
                var2 = var2.bind(var3)();
                _fun98557_ip = 96;
                continue _fun98557;
            case 66:
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 10;
                var1 = var3[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.maybePlayCurrentPlayer;
                var1 = var1.bind(var2)();
            case 96:
                return var0;
        }
    };
    var _closure1_slot16 = var3;
    var1 = function(arg0) { // Original name: handleVoiceMessageDeleted, environment: var5
        _fun98558: for (var _fun98558_ip = 0;;) switch (_fun98558_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 9;
                var2 = var2[var0];
                var0 = undefined;
                var4 = var4.bind(var0)(var2);
                var2 = var4.isAndroid;
                var2 = var2.bind(var4)();
                if (var2) {
                    _fun98558_ip = 70;
                    continue _fun98558
                }
            case 41:
                var2 = _closure1_slot10;
                var4 = var2.DCDAudioPlayerManager;
                var2 = null;
                if (!(var2 != var4)) {
                    _fun98558_ip = 101;
                    continue _fun98558
                }
            case 57:
                var2 = var4.handleVoiceMessageDeleted;
                var2 = var2.bind(var4)(var3);
                _fun98558_ip = 101;
                continue _fun98558;
            case 70:
                var2 = _closure1_slot1;
                var4 = _closure1_slot2;
                var1 = 10;
                var1 = var4[var1];
                var2 = var2.bind(var0)(var1);
                var1 = var2.handleVoiceMessageDeleted;
                var1 = var1.bind(var2)(var3);
            case 101:
                return var0;
        }
    };
    var _closure1_slot17 = var1;
    var0 = global;
    var11 = var0.Object;
    var10 = var11.defineProperty;
    var6 = {};
    var0 = true;
    var6.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var11)(var2, var0, var6);
    var0 = 0;
    var6 = var8[var0];
    var0 = undefined;
    var6 = var9.bind(var0)(var6);
    var _closure1_slot3 = var6;
    var6 = 1;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot4 = var6;
    var6 = 2;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot5 = var6;
    var6 = 3;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot6 = var6;
    var6 = 4;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot7 = var6;
    var6 = 5;
    var6 = var8[var6];
    var6 = var7.bind(var0)(var6);
    var10 = var6.AppState;
    var _closure1_slot8 = var10;
    var10 = var6.NativeEventEmitter;
    var _closure1_slot9 = var10;
    var6 = var6.NativeModules;
    var _closure1_slot10 = var6;
    var6 = 6;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot11 = var6;
    var6 = 7;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot12 = var6;
    var6 = 8;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var _closure1_slot13 = var6;
    var6 = 14;
    var6 = var8[var6];
    var6 = var9.bind(var0)(var6);
    var5 = function(arg0) { // Environment: var5
        var3 = function(arg0) { // Original name: VoiceMessagesPlaybackManager, environment: var5
            _fun98560: for (var _fun98560_ip = 0;;) switch (_fun98560_ip) {
                case 0:
                    var5 = this;
                    var13 = 0;
                    var0 = copyRestArgs(var13);
                    var7 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var4 = undefined;
                    var7 = var7.bind(var4)(var5, var3);
                    var10 = new Array(0);
                    var13 = var10;
                    var12 = var0;
                    var11 = 0;
                    var0 = arraySpread(var13, var12, var11);
                    var0 = _closure1_slot6;
                    var9 = var0.bind(var4)(var3);
                    var3 = _closure1_slot5;
                    var0 = _closure1_slot14;
                    var0 = var0.bind(var4)();
                    if (var0) {
                        _fun98560_ip = 86;
                        continue _fun98560
                    }
                case 73:
                    var0 = var9.apply;
                    var0 = var0.bind(var9)(var5, var10);
                    _fun98560_ip = 120;
                    continue _fun98560;
                case 86:
                    var6 = global;
                    var8 = var6.Reflect;
                    var7 = var8.construct;
                    var6 = _closure1_slot6;
                    var6 = var6.bind(var4)(var5);
                    var6 = var6.constructor;
                    var0 = var7.bind(var8)(var9, var10, var6);
                case 120:
                    var0 = var3.bind(var4)(var5, var0);
                    var _closure3_slot0 = var0;
                    var3 = _closure1_slot8;
                    var3 = var3.currentState;
                    var0.appState = var3;
                    var3 = false;
                    var0.isBackgroundPlaybackEnabled = var3;
                    var4 = _closure1_slot9;
                    var2 = _closure1_slot10;
                    var13 = var2.DCDBackgroundPlaybackBridge;
                    var3 = var4.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var4
                        }
                    });
                    var14 = var3;
                    var2 = new var14[var4](var13, var12);
                    var2 = var2 instanceof Object ? var2 : var3;
                    var0.backgroundPlaybackBridgeEventEmitter = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun98561: for (var _fun98561_ip = 0;;) switch (_fun98561_ip) {
                            case 0:
                                var1 = arg0;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 9;
                                var3 = var3[var0];
                                var0 = undefined;
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.isAndroid;
                                var3 = var3.bind(var4)();
                                if (var3) {
                                    _fun98561_ip = 70;
                                    continue _fun98561
                                }
                            case 41:
                                var3 = _closure1_slot10;
                                var5 = var3.DCDAccessibilityManager;
                                var4 = var5.handleSetPrefersReducedMotion;
                                var3 = var1.prefersReducedMotion;
                                var3 = var4.bind(var5)(var3);
                                _fun98561_ip = 107;
                                continue _fun98561;
                            case 70:
                                var3 = _closure1_slot1;
                                var4 = _closure1_slot2;
                                var2 = 11;
                                var2 = var4[var2];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.handleSetPrefersReducedMotion;
                                var1 = var1.prefersReducedMotion;
                                var1 = var2.bind(var3)(var1);
                            case 107:
                                return var0;
                        }
                    };
                    var0.handleSetPrefersReducedMotion = var2;
                    var2 = function(arg0) { // Environment: var1
                        _fun98562: for (var _fun98562_ip = 0;;) switch (_fun98562_ip) {
                            case 0:
                                var0 = arg0;
                                var2 = var0.id;
                                var3 = var0.channelId;
                                var4 = _closure1_slot13;
                                var1 = var4.getCurrentlySelectedChannelId;
                                var1 = var1.bind(var4)();
                                var4 = var3 === var1;
                                var3 = null;
                                var1 = var3 != var4;
                                if (!var1) {
                                    _fun98562_ip = 46;
                                    continue _fun98562
                                }
                            case 43:
                                var1 = var4;
                            case 46:
                                if (!var1) {
                                    _fun98562_ip = 68;
                                    continue _fun98562
                                }
                            case 49:
                                var1 = _closure1_slot17;
                                if (!(var3 != var1)) {
                                    _fun98562_ip = 68;
                                    continue _fun98562
                                }
                            case 57:
                                var1 = _closure1_slot17;
                                var0 = undefined;
                                var0 = var1.bind(var0)(var2);
                            case 68:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleMessageDelete = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure1_slot15;
                        var0 = undefined;
                        var1 = false;
                        var1 = var2.bind(var0)(var1);
                        return var0;
                    };
                    var0.handleLogout = var2;
                    var2 = function() { // Environment: var1
                        _fun98564: for (var _fun98564_ip = 0;;) switch (_fun98564_ip) {
                            case 0:
                                var4 = _closure3_slot0;
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot2;
                                var0 = 12;
                                var3 = var3[var0];
                                var0 = undefined;
                                var3 = var5.bind(var0)(var3);
                                var7 = var3.VoiceMessageInBackgroundExperiment;
                                var6 = var7.getCurrentConfig;
                                var5 = {};
                                var3 = 'VoiceMessagesPlaybackManager';
                                var5.location = var3;
                                var3 = {};
                                var8 = false;
                                var3.autoTrackExposure = var8;
                                var3 = var6.bind(var7)(var5, var3);
                                var3 = var3.enabled;
                                var4.isBackgroundPlaybackEnabled = var3;
                                var2 = _closure1_slot10;
                                var3 = var2.DCDBackgroundPlaybackBridge;
                                var2 = null;
                                if (!(var2 != var3)) {
                                    _fun98564_ip = 121;
                                    continue _fun98564
                                }
                            case 98:
                                var2 = var3.setBackgroundPlaybackEnabled;
                                var1 = _closure3_slot0;
                                var1 = var1.isBackgroundPlaybackEnabled;
                                var1 = var2.bind(var3)(var1);
                            case 121:
                                return var0;
                        }
                    };
                    var0.handleExperimentsChanged = var2;
                    var2 = function() { // Environment: var1
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot2;
                        var0 = 12;
                        var1 = var1[var0];
                        var0 = undefined;
                        var1 = var2.bind(var0)(var1);
                        var3 = var1.VoiceMessageInBackgroundExperiment;
                        var2 = var3.trackExposure;
                        var1 = {};
                        var4 = 'SharedPlayerQueue';
                        var1.location = var4;
                        var1 = var2.bind(var3)(var1);
                        return var0;
                    };
                    var0.handleWillConfigureNowPlaying = var2;
                    var1 = function(arg0) { // Environment: var1
                        _fun98566: for (var _fun98566_ip = 0;;) switch (_fun98566_ip) {
                            case 0:
                                var0 = arg0;
                                var0 = var0.state;
                                var2 = _closure3_slot0;
                                var2 = var2.isBackgroundPlaybackEnabled;
                                if (var2) {
                                    _fun98566_ip = 97;
                                    continue _fun98566
                                }
                            case 24:
                                var1 = _closure3_slot0;
                                var2 = var1.appState;
                                var1.appState = var0;
                                var1 = 'active';
                                if (!(var1 === var0)) {
                                    _fun98566_ip = 52;
                                    continue _fun98566
                                }
                            case 48:
                                if (!(var1 === var2)) {
                                    _fun98566_ip = 84;
                                    continue _fun98566
                                }
                            case 52:
                                var0 = var1 !== var0;
                                if (!var0) {
                                    _fun98566_ip = 63;
                                    continue _fun98566
                                }
                            case 59:
                                var0 = var1 === var2;
                            case 63:
                                if (!var0) {
                                    _fun98566_ip = 97;
                                    continue _fun98566
                                }
                            case 66:
                                var2 = _closure1_slot15;
                                var1 = undefined;
                                var0 = true;
                                var0 = var2.bind(var1)(var0);
                                _fun98566_ip = 97;
                                continue _fun98566;
                            case 84:
                                var1 = _closure1_slot16;
                                var0 = undefined;
                                var0 = var1.bind(var0)();
                            case 97:
                                var0 = undefined;
                                return var0;
                        }
                    };
                    var0.handleAppStateChanged = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot7;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot4;
        var4 = {};
        var0 = '_terminate';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var1 = this;
            var3 = _closure1_slot1;
            var4 = _closure1_slot2;
            var2 = 13;
            var5 = var4[var2];
            var0 = undefined;
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleLogout;
            var5 = 'LOGOUT';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleMessageDelete;
            var5 = 'MESSAGE_DELETE';
            var5 = var7.bind(var8)(var5, var6);
            var5 = var4[var2];
            var8 = var3.bind(var0)(var5);
            var7 = var8.unsubscribe;
            var6 = var1.handleAppStateChanged;
            var5 = 'APP_STATE_UPDATE';
            var5 = var7.bind(var8)(var5, var6);
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.unsubscribe;
            var2 = var1.handleSetPrefersReducedMotion;
            var1 = 'ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(2);
        var0[0] = var4;
        var4 = {};
        var6 = '_initialize';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var1 = this;
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var3 = 13;
            var6 = var5[var3];
            var0 = undefined;
            var9 = var4.bind(var0)(var6);
            var8 = var9.subscribe;
            var7 = var1.handleLogout;
            var6 = 'LOGOUT';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var0)(var6);
            var8 = var9.subscribe;
            var7 = var1.handleMessageDelete;
            var6 = 'MESSAGE_DELETE';
            var6 = var8.bind(var9)(var6, var7);
            var6 = var5[var3];
            var9 = var4.bind(var0)(var6);
            var8 = var9.subscribe;
            var7 = var1.handleAppStateChanged;
            var6 = 'APP_STATE_UPDATE';
            var6 = var8.bind(var9)(var6, var7);
            var3 = var5[var3];
            var6 = var4.bind(var0)(var3);
            var4 = var6.subscribe;
            var3 = var1.handleSetPrefersReducedMotion;
            var5 = 'ACCESSIBILITY_SET_PREFERS_REDUCED_MOTION';
            var3 = var4.bind(var6)(var5, var3);
            var4 = var1.handleSetPrefersReducedMotion;
            var3 = {};
            var3.type = var5;
            var5 = _closure1_slot11;
            var5 = var5.rawPrefersReducedMotion;
            var3.prefersReducedMotion = var5;
            var3 = var4.bind(var1)(var3);
            var3 = var1.handleExperimentsChanged;
            var3 = var3.bind(var1)();
            var4 = _closure1_slot12;
            var3 = var4.addChangeListener;
            var2 = var1.handleExperimentsChanged;
            var2 = var3.bind(var4)(var2);
            var4 = var1.backgroundPlaybackBridgeEventEmitter;
            var3 = var4.addListener;
            var2 = var1.handleWillConfigureNowPlaying;
            var1 = 'willConfigureNowPlaying';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var4.value = var5;
        var0[1] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var5 = var5.bind(var0)(var6);
    var6 = var5.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var5
        }
    });
    var15 = var6;
    var5 = new var15[var5](var14);
    var5 = var5 instanceof Object ? var5 : var6;
    var6 = 15;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/voice_messages/native/VoiceMessagesPlaybackManager.tsx';
    var6 = var7.bind(var8)(var6);
    var2.default = var5;
    var2.pauseCurrentAudioPlayer = var4;
    var2.playCurrentAudioPlayer = var3;
    var2.handleVoiceMessageDeleted = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 27, 1298, 1590, 1661, 478, 12810, 4028, 12811, 806, 3977, 2]);