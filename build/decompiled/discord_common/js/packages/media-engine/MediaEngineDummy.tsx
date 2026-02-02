// ../discord_common/js/packages/media-engine/MediaEngineDummy.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
    var _closure1_slot1 = var5;
    var0 = function() {
        _fun32768: for (var _fun32768_ip = 0;;) switch (_fun32768_ip) {
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
                _fun32768_ip = 74;
                continue _fun32768;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() {
                    var0 = _closure2_slot0;
                    var0 = !var0;
                    var0 = !var0;
                    return var0;
                };
                _closure1_slot11 = var1;
                var0 = undefined;
                var0 = var1.bind(var0)();
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function() {
        var0 = null;
        return var0;
    };
    var _closure1_slot12 = var0;
    var0 = function() {
        var0 = null;
        return var0;
    };
    var _closure1_slot13 = var0;
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
    var7 = var3.AudioSubsystems;
    var _closure1_slot7 = var7;
    var7 = var3.DISABLED_DEVICE_ID;
    var _closure1_slot8 = var7;
    var7 = var3.Features;
    var _closure1_slot9 = var7;
    var3 = var3.MediaEngineContextTypes;
    var _closure1_slot10 = var3;
    var3 = 7;
    var3 = var5[var3];
    var3 = var6.bind(var0)(var3);
    var1 = function(arg0) { // Environment: var1
        var3 = function arg0() {
            _fun32774: for (var _fun32774_ip = 0;;) switch (_fun32774_ip) {
                case 0:
                    var4 = this;
                    var12 = 0;
                    var0 = copyRestArgs(var12);
                    var6 = _closure1_slot2;
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
                    var0 = _closure1_slot11;
                    var0 = var0.bind(var3)();
                    if (var0) {
                        _fun32774_ip = 84;
                        continue _fun32774
                    }
                case 71:
                    var0 = var8.apply;
                    var0 = var0.bind(var8)(var4, var9);
                    _fun32774_ip = 118;
                    continue _fun32774;
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
                    var2 = _closure1_slot12;
                    var0.Video = var2;
                    var1 = _closure1_slot13;
                    var0.Camera = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var3;
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'destroy';
        var4.key = var0;
        var0 = function() {
            var2 = this;
            var3 = var2.emit;
            var4 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 6;
            var1 = var1[var0];
            var0 = undefined;
            var1 = var4.bind(var0)(var1);
            var1 = var1.MediaEngineEvent;
            var1 = var1.Destroy;
            var1 = var3.bind(var2)(var1);
            var1 = var2.removeAllListeners;
            var1 = var1.bind(var2)();
            return var0;
        };
        var4.value = var0;
        var0 = new Array(80);
        var0[0] = var4;
        var4 = {};
        var6 = 'interact';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'supported';
        var4.key = var6;
        var6 = function() {
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'supports';
        var4.key = var6;
        var6 = function arg0() {
            var0 = _closure1_slot9;
            var0 = var0.AUTO_ENABLE;
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'connect';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Error;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = 'NOT_IMPLEMENTED';
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            throw var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'eachConnection';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'enable';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var1 = var0.Promise;
            var0 = var1.resolve;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'setInputVolume';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'setOutputVolume';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[8] = var4;
        var4 = {};
        var6 = 'getAudioInputDevices';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.resolve;
            var0 = new Array(0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[9] = var4;
        var4 = {};
        var6 = 'setAudioInputDevice';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[10] = var4;
        var4 = {};
        var6 = 'getAudioOutputDevices';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.resolve;
            var0 = new Array(0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[11] = var4;
        var4 = {};
        var6 = 'setAudioOutputDevice';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[12] = var4;
        var4 = {};
        var6 = 'getVideoInputDevices';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.resolve;
            var0 = new Array(0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[13] = var4;
        var4 = {};
        var6 = 'setVideoInputDevice';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[14] = var4;
        var4 = {};
        var6 = 'getVideoInputDeviceId';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot8;
            return var0;
        };
        var4.value = var6;
        var0[15] = var4;
        var4 = {};
        var6 = 'setAsyncVideoInputDeviceInit';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[16] = var4;
        var4 = {};
        var6 = 'setAsyncClipsSourceDeinit';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[17] = var4;
        var4 = {};
        var6 = 'getCodecCapabilities';
        var4.key = var6;
        var6 = function arg0() {
            var2 = arg0;
            var0 = undefined;
            var1 = '';
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[18] = var4;
        var4 = {};
        var6 = 'getCodecSurvey';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = 'getCodecSurvey is not implemented for MediaEngineDummy';
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[19] = var4;
        var4 = {};
        var6 = 'getAudioSubsystem';
        var4.key = var6;
        var6 = function() {
            var0 = _closure1_slot7;
            var0 = var0.STANDARD;
            return var0;
        };
        var4.value = var6;
        var0[20] = var4;
        var4 = {};
        var6 = 'getAudioLayer';
        var4.key = var6;
        var6 = function() {
            var0 = '';
            return var0;
        };
        var4.value = var6;
        var0[21] = var4;
        var4 = {};
        var6 = 'setGoLiveSource';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[22] = var4;
        var4 = {};
        var6 = 'setClipsSource';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[23] = var4;
        var4 = {};
        var6 = 'setClipsQualitySettings';
        var4.key = var6;
        var6 = function() {
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[24] = var4;
        var4 = {};
        var6 = 'setDesktopSource';
        var4.key = var6;
        var6 = function arg0() {
            _fun32800: for (var _fun32800_ip = 0;;) switch (_fun32800_ip) {
                case 0:
                    var1 = arguments[1];
                    var0 = undefined;
                    if (!(var1 === var0)) {
                        _fun32800_ip = 22;
                        continue _fun32800
                    }
                case 9:
                    var1 = _closure1_slot10;
                    var1 = var1.DEFAULT;
                case 22:
                    return var0;
            }
        };
        var4.value = var6;
        var0[25] = var4;
        var4 = {};
        var6 = 'setSoundshareSource';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[26] = var4;
        var4 = {};
        var6 = 'getDesktopSource';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = 'NO_STREAM';
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[27] = var4;
        var4 = {};
        var6 = 'getScreenPreviews';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = 'UNSUPPORTED';
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[28] = var4;
        var4 = {};
        var6 = 'getWindowPreviews';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = 'UNSUPPORTED';
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[29] = var4;
        var4 = {};
        var6 = 'getSingleWindowPreview';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = 'UNSUPPORTED';
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[30] = var4;
        var4 = {};
        var6 = 'setClipBufferLength';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[31] = var4;
        var4 = {};
        var6 = 'setClipsMaxPendingTasks';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[32] = var4;
        var4 = {};
        var6 = 'setClipsBufferSize';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[33] = var4;
        var4 = {};
        var6 = 'setClipsMLPipelineEnabled';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[34] = var4;
        var4 = {};
        var6 = 'setClipsMLPipelineTypeEnabled';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[35] = var4;
        var4 = {};
        var6 = 'saveClip';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = 'UNSUPPORTED';
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[36] = var4;
        var4 = {};
        var6 = 'saveClipForUser';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = 'UNSUPPORTED';
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[37] = var4;
        var4 = {};
        var6 = 'updateClipMetadata';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = 'UNSUPPORTED';
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[38] = var4;
        var4 = {};
        var6 = 'exportClip';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = 'UNSUPPORTED';
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[39] = var4;
        var4 = {};
        var6 = 'saveScreenshot';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = 'UNSUPPORTED';
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[40] = var4;
        var4 = {};
        var6 = 'setAudioSubsystem';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[41] = var4;
        var4 = {};
        var6 = 'queueAudioSubsystem';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[42] = var4;
        var4 = {};
        var6 = 'setOffloadAdmControls';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[43] = var4;
        var4 = {};
        var6 = 'getDebugLogging';
        var4.key = var6;
        var6 = function() {
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[44] = var4;
        var4 = {};
        var6 = 'setDebugLogging';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[45] = var4;
        var4 = {};
        var6 = 'writeAudioDebugState';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = 'Audio debug state is not supported.';
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[46] = var4;
        var4 = {};
        var6 = 'setLoopback';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[47] = var4;
        var4 = {};
        var6 = 'getLoopback';
        var4.key = var6;
        var6 = function() {
            var0 = false;
            return var0;
        };
        var4.value = var6;
        var0[48] = var4;
        var4 = {};
        var6 = 'setExperimentFlag';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[49] = var4;
        var4 = {};
        var6 = 'startAecDump';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[50] = var4;
        var4 = {};
        var6 = 'stopAecDump';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[51] = var4;
        var4 = {};
        var6 = 'setAecDump';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[52] = var4;
        var4 = {};
        var6 = 'startRecordingRawSamples';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[53] = var4;
        var4 = {};
        var6 = 'stopRecordingRawSamples';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[54] = var4;
        var4 = {};
        var6 = 'createReplayConnection';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Error;
            var0 = var2.prototype;
            var1 = Object.create(var0, {
                constructor: {
                    value: var2
                }
            });
            var3 = 'Connection replay is not supported.';
            var4 = var1;
            var0 = new var4[var2](var3, var2);
            var0 = var0 instanceof Object ? var0 : var1;
            throw var0;
        };
        var4.value = var6;
        var0[55] = var4;
        var4 = {};
        var6 = 'setOnVideoContainerResized';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[56] = var4;
        var4 = {};
        var6 = 'setMaxSyncDelayOverride';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[57] = var4;
        var4 = {};
        var6 = 'rankRtcRegions';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = 'RTC region latency test is not supported.';
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[58] = var4;
        var4 = {};
        var6 = 'applyMediaFilterSettings';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var1 = var0.Promise;
            var0 = var1.resolve;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[59] = var4;
        var4 = {};
        var6 = 'startLocalAudioRecording';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = 'startLocalAudioRecording is not supported.';
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[60] = var4;
        var4 = {};
        var6 = 'stopLocalAudioRecording';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[61] = var4;
        var4 = {};
        var6 = 'setHasFullbandPerformance';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[62] = var4;
        var4 = {};
        var6 = 'getSupportedSecureFramesProtocolVersion';
        var4.key = var6;
        var6 = function() {
            var0 = 0;
            return var0;
        };
        var4.value = var6;
        var0[63] = var4;
        var4 = {};
        var6 = 'getSupportedBandwidthEstimationExperiments';
        var4.key = var6;
        var6 = function arg0() {
            var2 = arg0;
            var0 = undefined;
            var1 = new Array(0);
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var4.value = var6;
        var0[64] = var4;
        var4 = {};
        var6 = 'getMLSSigningKey';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = 'NOT_IMPLEMENTED';
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[65] = var4;
        var4 = {};
        var6 = 'setSidechainCompression';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[66] = var4;
        var4 = {};
        var6 = 'setSidechainCompressionStrength';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[67] = var4;
        var4 = {};
        var6 = 'getSystemMicrophoneMode';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.resolve;
            var0 = '';
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[68] = var4;
        var4 = {};
        var6 = 'showSystemCaptureConfigurationUI';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[69] = var4;
        var4 = {};
        var6 = 'setNativeDesktopVideoSourcePickerActive';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[70] = var4;
        var4 = {};
        var6 = 'presentNativeScreenSharePicker';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[71] = var4;
        var4 = {};
        var6 = 'releaseNativeDesktopVideoSourcePickerStream';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[72] = var4;
        var4 = {};
        var6 = 'setMaybePreprocessMute';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[73] = var4;
        var4 = {};
        var6 = 'setAudioInputBypassSystemProcessing';
        var4.key = var6;
        var6 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[74] = var4;
        var4 = {};
        var6 = 'fetchAsyncResources';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var1 = var0.Promise;
            var0 = var1.resolve;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[75] = var4;
        var4 = {};
        var6 = 'getDeviceOSVolume';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.resolve;
            var0 = undefined;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[76] = var4;
        var4 = {};
        var6 = 'getDeviceOSMuted';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.resolve;
            var0 = undefined;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[77] = var4;
        var4 = {};
        var6 = 'getNoiseCancellationStats';
        var4.key = var6;
        var6 = function() {
            var0 = global;
            var2 = var0.Promise;
            var1 = var2.reject;
            var4 = var0.Error;
            var0 = var4.prototype;
            var3 = Object.create(var0, {
                constructor: {
                    value: var4
                }
            });
            var5 = 'Dummy noise cancellation stats not supported';
            var6 = var3;
            var0 = new var6[var4](var5, var4);
            var0 = var0 instanceof Object ? var0 : var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var4.value = var6;
        var0[78] = var4;
        var4 = {};
        var6 = 'setNoiseCancellationEnableStats';
        var4.key = var6;
        var5 = function() {
            var0 = undefined;
            return var0;
        };
        var4.value = var5;
        var0[79] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var1 = var1.bind(var0)(var3);
    var3 = 8;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = '../discord_common/js/packages/media-engine/MediaEngineDummy.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3471, 3594, 3668, 2]);