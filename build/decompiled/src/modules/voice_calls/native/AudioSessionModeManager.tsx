// modules/voice_calls/native/AudioSessionModeManager.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var1
        _fun112645: for (var _fun112645_ip = 0;;) switch (_fun112645_ip) {
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
                _fun112645_ip = 76;
                continue _fun112645;
            case 74: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 76:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot20 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot20 = var0;
    var0 = function() { // Original name: handleAVAudioSessionMode, environment: var1
        _fun112648: for (var _fun112648_ip = 0;;) switch (_fun112648_ip) {
            case 0:
                var3 = _closure1_slot11;
                var2 = var3.getChannel;
                var4 = _closure1_slot13;
                var1 = var4.getVoiceChannelId;
                var1 = var1.bind(var4)();
                var1 = var2.bind(var3)(var1);
                var4 = null;
                if (!(var4 != var1)) {
                    _fun112648_ip = 217;
                    continue _fun112648
                }
            case 40:
                var3 = _closure1_slot9;
                var2 = var3.getAllActiveStreams;
                var2 = var2.bind(var3)();
                var3 = var2.length;
                var2 = 0;
                var3 = var3 > var2;
                if (var3) {
                    _fun112648_ip = 88;
                    continue _fun112648
                }
            case 68:
                var6 = _closure1_slot14;
                var5 = var6.hasVideo;
                var2 = var1.id;
                var3 = var5.bind(var6)(var2);
            case 88:
                if (var3) {
                    _fun112648_ip = 105;
                    continue _fun112648
                }
            case 91:
                var5 = _closure1_slot12;
                var2 = var5.isVideoEnabled;
                var3 = var2.bind(var5)();
            case 105:
                var5 = _closure1_slot7;
                var2 = var5.getCurrentEmbeddedActivity;
                var2 = var2.bind(var5)();
                var2 = var4 != var2;
                if (var3) {
                    _fun112648_ip = 205;
                    continue _fun112648
                }
            case 126:
                if (var2) {
                    _fun112648_ip = 205;
                    continue _fun112648
                }
            case 129:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var2 = 16;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.shouldImmediatelyRequestVoicePermissions;
                var5 = _closure1_slot10;
                var2 = var5.getId;
                var2 = var2.bind(var5)();
                var1 = var1.id;
                var2 = var3.bind(var4)(var2, var1);
                var1 = _closure1_slot18;
                if (var2) {
                    _fun112648_ip = 197;
                    continue _fun112648
                }
            case 189:
                var2 = var1.LISTEN;
                _fun112648_ip = 203;
                continue _fun112648;
            case 197:
                var2 = var1.VOICE;
            case 203:
                _fun112648_ip = 215;
                continue _fun112648;
            case 205:
                var1 = _closure1_slot18;
                var2 = var1.VIDEO;
            case 215:
                _fun112648_ip = 227;
                continue _fun112648;
            case 217:
                var1 = _closure1_slot18;
                var2 = var1.DEFAULT;
            case 227:
                var1 = _closure1_slot19;
                var1 = var1 !== var2;
                if (!var1) {
                    _fun112648_ip = 266;
                    continue _fun112648
                }
            case 238:
                var4 = _closure1_slot15;
                var3 = var4.getState;
                var4 = var3.bind(var4)();
                var3 = _closure1_slot16;
                var3 = var3.ACTIVE;
                var1 = var4 === var3;
            case 266:
                if (!var1) {
                    _fun112648_ip = 284;
                    continue _fun112648
                }
            case 269:
                _closure1_slot19 = var2;
                var1 = _closure1_slot17;
                var0 = undefined;
                var0 = var1.bind(var0)(var2);
            case 284:
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot21 = var0;
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
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var3 = 2;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot4 = var3;
    var3 = 3;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot5 = var3;
    var3 = 4;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot6 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.NativeModules;
    var3 = var3.Platform;
    var3 = 6;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot7 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot8 = var3;
    var3 = 8;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot9 = var3;
    var3 = 9;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot10 = var3;
    var3 = 10;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot11 = var3;
    var3 = 11;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot12 = var3;
    var3 = 12;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot13 = var3;
    var3 = 13;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot14 = var3;
    var3 = 14;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var _closure1_slot15 = var3;
    var3 = 15;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var3 = var3.AppStates;
    var _closure1_slot16 = var3;
    var3 = function() { // Original name: VoiceEngine_setAVAudioSessionMode, environment: var1
        var0 = undefined;
        return var0;
    };
    var _closure1_slot17 = var3;
    var3 = {
        'VOICE': 'AVAudioSessionModeVoiceChat',
        'VIDEO': 'AVAudioSessionModeVideoChat',
        'LISTEN': 'AVAudioSessionModeSpokenAudio',
        'DEFAULT': 'AVAudioSessionModeDefault'
    };
    var _closure1_slot18 = var3;
    var3 = var3.VOICE;
    var _closure1_slot19 = var3;
    var3 = 17;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var2 = function(arg0) { // Original name: AudioSessionModeManager, environment: var0
            _fun112651: for (var _fun112651_ip = 0;;) switch (_fun112651_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot3;
                    var2 = _closure2_slot0;
                    var3 = undefined;
                    var6 = var6.bind(var3)(var4, var2);
                    var9 = new Array(0);
                    var12 = var9;
                    var11 = var0;
                    var10 = 0;
                    var0 = arraySpread(var12, var11, var10);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var3)(var2);
                    var2 = _closure1_slot4;
                    var0 = _closure1_slot20;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun112651_ip = 84;
                        continue _fun112651
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun112651_ip = 118;
                    continue _fun112651;
                case 84:
                    var5 = global;
                    var7 = var5.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
                    var5 = var5.bind(var3)(var4);
                    var5 = var5.constructor;
                    var0 = var6.bind(var7)(var8, var9, var5);
                case 118:
                    var0 = var2.bind(var3)(var4, var0);
                    var2 = global;
                    var2 = var2.Map;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var2
                        }
                    });
                    var13 = var3;
                    var2 = new var13[var2](var12);
                    var5 = var2 instanceof Object ? var2 : var3;
                    var3 = var5.set;
                    var2 = _closure1_slot9;
                    var4 = _closure1_slot21;
                    var5 = var3.bind(var5)(var2, var4);
                    var3 = var5.set;
                    var2 = _closure1_slot14;
                    var5 = var3.bind(var5)(var2, var4);
                    var3 = var5.set;
                    var2 = _closure1_slot12;
                    var5 = var3.bind(var5)(var2, var4);
                    var3 = var5.set;
                    var2 = _closure1_slot8;
                    var3 = var3.bind(var5)(var2, var4);
                    var2 = var3.set;
                    var1 = _closure1_slot7;
                    var1 = var2.bind(var3)(var1, var4);
                    var0.stores = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var4 = _closure1_slot6;
        var1 = undefined;
        var3 = arg0;
        var3 = var4.bind(var1)(var2, var3);
        var0 = _closure1_slot2;
        var0 = var0.bind(var1)(var2);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = var1.prototype;
    var3 = Object.create(var3, {
        constructor: {
            value: var1
        }
    });
    var12 = var3;
    var1 = new var12[var1](var11);
    var1 = var1 instanceof Object ? var1 : var3;
    var3 = 18;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/voice_calls/native/AudioSessionModeManager.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [7, 6, 15, 17, 18, 27, 1371, 4210, 3673, 1216, 1372, 3435, 1661, 3480, 5246, 660, 14426, 4263, 2]);