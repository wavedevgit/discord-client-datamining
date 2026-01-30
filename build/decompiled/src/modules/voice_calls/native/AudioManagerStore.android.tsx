// modules/voice_calls/native/AudioManagerStore.android.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun66206: for (var _fun66206_ip = 0;;) switch (_fun66206_ip) {
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
                _fun66206_ip = 76;
                continue _fun66206;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot15 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot15 = var0;
    var0 = function(arg0) { // Original name: setActiveAudioDevice, environment: var3
        _fun66209: for (var _fun66209_ip = 0;;) switch (_fun66209_ip) {
            case 0:
                var5 = arg0;
                var2 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 9;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var1 = var2.isString;
                var1 = var1.bind(var2)(var5);
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                if (var1) {
                    _fun66209_ip = 77;
                    continue _fun66209
                }
            case 50:
                var1 = 8;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var1 = var4.setActiveAudioDevice;
                var1 = var1.bind(var4)(var5);
                _fun66209_ip = 123;
                continue _fun66209;
            case 77:
                var1 = 10;
                var1 = var3[var1];
                var4 = var2.bind(var0)(var1);
                var3 = var4.captureMessage;
                var2 = {};
                var1 = {};
                var1.deviceString = var5;
                var2.extra = var1;
                var1 = 'AudioManagerStore received a string for an android audio device';
                var1 = var3.bind(var4)(var1, var2);
            case 123:
                return var0;
        }
    };
    var _closure1_slot16 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var1);
    var0 = 0;
    var1 = var5[var0];
    var0 = undefined;
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var9 = var1.NativeEventEmitter;
    var1 = 6;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.RTCConnectionStates;
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var1 = var1.MediaEngineContextTypes;
    var _closure1_slot9 = var1;
    var1 = 8;
    var7 = var5[var1];
    var12 = var6.bind(var0)(var7);
    var8 = var9.prototype;
    var8 = Object.create(var8, {
        constructor: {
            value: var9
        }
    });
    var13 = var8;
    var7 = new var13[var9](var12, var11);
    var7 = var7 instanceof Object ? var7 : var8;
    var _closure1_slot10 = var7;
    var7 = new Array(0);
    var _closure1_slot11 = var7;
    var7 = var5[var1];
    var8 = var4.bind(var0)(var7);
    var7 = var8.getInvalidAndroidDevice;
    var7 = var7.bind(var8)();
    var _closure1_slot12 = var7;
    var1 = var5[var1];
    var7 = var4.bind(var0)(var1);
    var1 = var7.getInvalidAndroidDevice;
    var1 = var1.bind(var7)();
    var _closure1_slot13 = var1;
    var1 = false;
    var _closure1_slot14 = var1;
    var1 = 11;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.Store;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: AudioManagerStore, environment: var5
            _fun66211: for (var _fun66211_ip = 0;;) switch (_fun66211_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot3;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot6;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot5;
                    var0 = _closure1_slot15;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun66211_ip = 69;
                        continue _fun66211
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun66211_ip = 105;
                    continue _fun66211;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot6;
                    var5 = var5.bind(var2)(var3);
                    var5 = var5.constructor;
                    var4 = arguments;
                    var0 = var6.bind(var7)(var8, var4, var5);
                case 105:
                    var0 = var1.bind(var2)(var3, var0);
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
        var0 = 'initialize';
        var4.key = var0;
        var0 = function() { // Original name: value, environment: var5
            var0 = this;
            var _closure3_slot0 = var0;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 8;
            var5 = var3[var1];
            var0 = undefined;
            var6 = var2.bind(var0)(var5);
            var5 = var6.getAudioDevices;
            var7 = var5.bind(var6)();
            var6 = var7.then;
            var5 = function(arg0) { // Environment: var4
                var1 = arg0;
                _closure1_slot11 = var1;
                var2 = _closure3_slot0;
                var1 = var2.emitChange;
                var1 = var1.bind(var2)();
                var3 = _closure1_slot10;
                var2 = var3.addListener;
                var1 = 'android-audio-devices-updated';
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.devices;
                    _closure1_slot11 = var1;
                    var1 = _closure3_slot0;
                    var0 = var1.emitChange;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var5 = var6.bind(var7)(var5);
            var5 = var3[var1];
            var6 = var2.bind(var0)(var5);
            var5 = var6.getActiveAudioDevice;
            var6 = var5.bind(var6)();
            var5 = var6.then;
            var4 = function(arg0) { // Environment: var4
                var1 = arg0;
                _closure1_slot12 = var1;
                var2 = _closure3_slot0;
                var1 = var2.emitChange;
                var1 = var1.bind(var2)();
                var3 = _closure1_slot10;
                var2 = var3.addListener;
                var1 = 'android-active-audio-device-changed';
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var1 = var0.device;
                    _closure1_slot12 = var1;
                    var1 = _closure3_slot0;
                    var0 = var1.emitChange;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
                };
                var0 = var2.bind(var3)(var1, var0);
                var0 = undefined;
                return var0;
            };
            var4 = var5.bind(var6)(var4);
            var1 = var3[var1];
            var3 = var2.bind(var0)(var1);
            var2 = var3.setSCORetryCount;
            var1 = 4;
            var1 = var2.bind(var3)(var1);
            return var0;
        };
        var4.value = var0;
        var0 = new Array(4);
        var0[0] = var4;
        var4 = {};
        var6 = 'getAudioDevices';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot11;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'getActiveAudioDevice';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot12;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'getRequestedActiveAudioDevice';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot13;
            return var0;
        };
        var4.value = var5;
        var0[3] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var7 = var1.bind(var0)(var7);
    var1 = 'AudioManagerStore';
    var7.displayName = var1;
    var1 = 12;
    var1 = var5[var1];
    var12 = var6.bind(var0)(var1);
    var1 = {};
    var8 = function(arg0) { // Original name: handleRTCConnectionStateUpdate, environment: var3
        _fun66220: for (var _fun66220_ip = 0;;) switch (_fun66220_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.context;
                var2 = _closure1_slot9;
                var2 = var2.DEFAULT;
                if (!(var3 === var2)) {
                    _fun66220_ip = 234;
                    continue _fun66220
                }
            case 28:
                var3 = var1.state;
                var2 = _closure1_slot8;
                var2 = var2.CONNECTING;
                if (!(var2 !== var3)) {
                    _fun66220_ip = 117;
                    continue _fun66220
                }
            case 47:
                var2 = _closure1_slot8;
                var2 = var2.DISCONNECTED;
                if (!(var2 === var3)) {
                    _fun66220_ip = 230;
                    continue _fun66220
                }
            case 64:
                var1 = var1.willReconnect;
                if (var1) {
                    _fun66220_ip = 230;
                    continue _fun66220
                }
            case 76:
                var3 = false;
                _closure1_slot14 = var3;
                var4 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 8;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var4.bind(var1)(var2);
                var1 = var2.setCommunicationModeOn;
                var1 = var1.bind(var2)(var3);
                _fun66220_ip = 230;
                continue _fun66220;
            case 117:
                var4 = true;
                _closure1_slot14 = var4;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var6 = 8;
                var1 = var1[var6];
                var2 = undefined;
                var3 = var3.bind(var2)(var1);
                var1 = var3.setCommunicationModeOn;
                var1 = var1.bind(var3)(var4);
                var3 = _closure1_slot12;
                var1 = _closure1_slot13;
                var1 = var3 !== var1;
                if (!var1) {
                    _fun66220_ip = 214;
                    continue _fun66220
                }
            case 171:
                var3 = _closure1_slot13;
                var4 = var3.simpleDeviceType;
                var5 = _closure1_slot0;
                var3 = _closure1_slot2;
                var3 = var3[var6];
                var3 = var5.bind(var2)(var3);
                var3 = var3.AudioDeviceType;
                var3 = var3.INVALID;
                var1 = var4 !== var3;
            case 214:
                if (!var1) {
                    _fun66220_ip = 230;
                    continue _fun66220
                }
            case 217:
                var1 = _closure1_slot16;
                var0 = _closure1_slot13;
                var0 = var1.bind(var2)(var0);
            case 230:
                var0 = undefined;
                return var0;
            case 234:
                var0 = false;
                return var0;
        }
    };
    var1.RTC_CONNECTION_STATE = var8;
    var3 = function(arg0) { // Original name: handleSetActiveAudioDevice, environment: var3
        _fun66221: for (var _fun66221_ip = 0;;) switch (_fun66221_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.device;
                _closure1_slot13 = var2;
                var1 = _closure1_slot14;
                if (!var1) {
                    _fun66221_ip = 34;
                    continue _fun66221
                }
            case 23:
                var1 = _closure1_slot16;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
            case 34:
                var0 = undefined;
                return var0;
        }
    };
    var1.NATIVE_AUDIO_SET_OUTPUT_DEVICE = var3;
    var3 = var7.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var13 = var3;
    var11 = var1;
    var1 = new var13[var7](var12, var11, var10);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_calls/native/AudioManagerStore.android.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 27, 660, 3469, 8166, 22, 1207, 566, 806, 2]);