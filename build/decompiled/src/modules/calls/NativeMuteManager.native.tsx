// modules/calls/NativeMuteManager.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var6;
    var _closure1_slot2 = var5;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 1;
    var3 = var5[var3];
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
    var7 = var6.bind(var0)(var3);
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'NativeMuteManager';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot7 = var3;
    var3 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var1 = this;
            var _closure3_slot0 = var1;
            var5 = _closure1_slot3;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var1, var4);
            var4 = false;
            var1.ignoreForNativeUnmute = var4;
            var1.needToUnmuteNative = var4;
            var1.ignoreForAudioRouteChange = var4;
            var6 = _closure1_slot0;
            var4 = _closure1_slot2;
            var5 = 5;
            var5 = var4[var5];
            var5 = var6.bind(var0)(var5);
            var5 = var5.Timeout;
            var6 = var5.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var5
                }
            });
            var9 = var6;
            var5 = new var9[var5](var8);
            var5 = var5 instanceof Object ? var5 : var6;
            var1.audioRouteChangeIgnoreTimer = var5;
            var5 = 300;
            var1.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS = var5;
            var3 = function() { // Environment: var3
                _fun93665: for (var _fun93665_ip = 0;;) switch (_fun93665_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var2 = var1.audioRouteChangeIgnoreTimer;
                        var1 = var2.isStarted;
                        var1 = var1.bind(var2)();
                        if (!var1) {
                            _fun93665_ip = 46;
                            continue _fun93665
                        }
                    case 26:
                        var1 = _closure3_slot0;
                        var2 = var1.audioRouteChangeIgnoreTimer;
                        var1 = var2.stop;
                        var1 = var1.bind(var2)();
                    case 46:
                        var0 = _closure3_slot0;
                        var1 = true;
                        var0.ignoreForAudioRouteChange = var1;
                        var3 = var0.audioRouteChangeIgnoreTimer;
                        var2 = var3.start;
                        var1 = var0.AUDIO_ROUTE_CHANGE_IGNORE_DURATION_MS;
                        var0 = function() { // Environment: var0
                            var1 = _closure3_slot0;
                            var0 = false;
                            var1.ignoreForAudioRouteChange = var0;
                            var0 = undefined;
                            return var0;
                        };
                        var0 = var2.bind(var3)(var1, var0);
                        var0 = undefined;
                        return var0;
                }
            };
            var1.handleAudioRouteChange = var3;
            var6 = _closure1_slot5;
            var5 = var6.addChangeListener;
            var3 = var1.handleAudioRouteChange;
            var3 = var5.bind(var6)(var3);
            var3 = _closure1_slot1;
            var2 = 6;
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = var4.subscribe;
            var2 = var1.handleVoiceChannelSelect;
            var1 = 'VOICE_CHANNEL_SELECT';
            var1 = var3.bind(var4)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'nativeMuteChanged';
        var0.key = var1;
        var1 = function() {
            _fun93667: for (var _fun93667_ip = 0;;) switch (_fun93667_ip) {
                case 0:
                    var1 = this;
                    var3 = _closure1_slot6;
                    var2 = var3.hasActiveCallKitCall;
                    var2 = var2.bind(var3)();
                    if (var2) {
                        _fun93667_ip = 121;
                        continue _fun93667
                    }
                case 23:
                    var2 = var1.ignoreForNativeUnmute;
                    if (var2) {
                        _fun93667_ip = 113;
                        continue _fun93667
                    }
                case 32:
                    var2 = var1.ignoreForAudioRouteChange;
                    if (var2) {
                        _fun93667_ip = 121;
                        continue _fun93667
                    }
                case 41:
                    var2 = true;
                    var1.needToUnmuteNative = var2;
                    var4 = _closure1_slot7;
                    var3 = var4.log;
                    var2 = 'Native mute changed > toggling mute';
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var0 = 7;
                    var2 = var2[var0];
                    var0 = undefined;
                    var3 = var3.bind(var0)(var2);
                    var2 = var3.toggleSelfMute;
                    var0 = {};
                    var4 = false;
                    var0.playSoundEffect = var4;
                    var0 = var2.bind(var3)(var0);
                    _fun93667_ip = 121;
                    continue _fun93667;
                case 113:
                    var0 = false;
                    var1.ignoreForNativeUnmute = var0;
                case 121:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(3);
        var1[0] = var0;
        var0 = {};
        var5 = 'updateNativeMute';
        var0.key = var5;
        var5 = function() {
            _fun93668: for (var _fun93668_ip = 0;;) switch (_fun93668_ip) {
                case 0:
                    var2 = this;
                    var3 = _closure1_slot6;
                    var1 = var3.hasActiveCallKitCall;
                    var1 = var1.bind(var3)();
                    if (var1) {
                        _fun93668_ip = 123;
                        continue _fun93668
                    }
                case 23:
                    var1 = var2.needToUnmuteNative;
                    if (!var1) {
                        _fun93668_ip = 123;
                        continue _fun93668
                    }
                case 32:
                    var3 = false;
                    var2.needToUnmuteNative = var3;
                    var1 = true;
                    var2.ignoreForNativeUnmute = var1;
                    var4 = _closure1_slot7;
                    var2 = var4.log;
                    var1 = 'Update native mute > unmuting native';
                    var1 = var2.bind(var4)(var1);
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot2;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var1 = var2.bind(var0)(var1);
                    var0 = var1.getVoiceEngine;
                    var2 = var0.bind(var1)();
                    var1 = var2.setNativeMuteState;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun93668_ip = 123;
                        continue _fun93668
                    }
                case 112:
                    var0 = var1.call;
                    var0 = var0.bind(var1)(var2, var3);
                case 123:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'handleVoiceChannelSelect';
        var0.key = var5;
        var4 = function arg0() {
            _fun93669: for (var _fun93669_ip = 0;;) switch (_fun93669_ip) {
                case 0:
                    var0 = arg0;
                    var1 = var0.channelId;
                    var0 = null;
                    if (!(var0 == var1)) {
                        _fun93669_ip = 92;
                        continue _fun93669
                    }
                case 14:
                    var4 = _closure1_slot7;
                    var3 = var4.log;
                    var2 = 'Leaving voice channel > unmuting native';
                    var2 = var3.bind(var4)(var2);
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 8;
                    var2 = var2[var1];
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    var1 = var2.getVoiceEngine;
                    var3 = var1.bind(var2)();
                    var2 = var3.setNativeMuteState;
                    if (!(var0 != var2)) {
                        _fun93669_ip = 92;
                        continue _fun93669
                    }
                case 79:
                    var1 = var2.call;
                    var0 = false;
                    var0 = var1.bind(var2)(var3, var0);
                case 92:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[2] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var3 = var3.bind(var0)();
    var6 = var3.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var3
        }
    });
    var12 = var6;
    var3 = new var12[var3](var11);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot8 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot4;
        var2 = function() {
            var3 = _closure1_slot3;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'nativeMuteChanged';
        var0.key = var1;
        var1 = function arg0() {
            var2 = _closure1_slot8;
            var1 = var2.nativeMuteChanged;
            var0 = arg0;
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(2);
        var1[0] = var0;
        var0 = {};
        var5 = 'updateNativeMute';
        var0.key = var5;
        var4 = function() {
            var1 = _closure1_slot8;
            var0 = var1.updateNativeMute;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var0.value = var4;
        var1[1] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 9;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/calls/NativeMuteManager.native.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 8205, 3476, 3, 3630, 806, 8208, 3478, 2]);