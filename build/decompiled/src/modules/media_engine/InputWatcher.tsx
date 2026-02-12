// modules/media_engine/InputWatcher.tsx
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
    var3 = var4.bind(var0)(var3);
    var3 = var3.WINDOWS_SETTINGS_SOUND_DEVICE_DEEPLINK_SEMVER;
    var _closure1_slot7 = var3;
    var3 = 5;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var7 = var3.Logger;
    var3 = var7.prototype;
    var6 = Object.create(var3, {
        constructor: {
            value: var7
        }
    });
    var11 = 'InputWatcher';
    var12 = var6;
    var3 = new var12[var7](var11, var10);
    var3 = var3 instanceof Object ? var3 : var6;
    var _closure1_slot8 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot6;
        var2 = function arg0, arg1() {
            var1 = this;
            var _closure3_slot0 = var1;
            var _closure3_slot1 = var1;
            var5 = _closure1_slot5;
            var4 = _closure2_slot0;
            var0 = undefined;
            var4 = var5.bind(var0)(var1, var4);
            var4 = arg0;
            var1.mediaEngine = var4;
            var4 = arg1;
            var1.mediaEngineStore = var4;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var4 = 6;
            var4 = var6[var4];
            var4 = var5.bind(var0)(var4);
            var4 = var4.Timeout;
            var7 = var4.prototype;
            var7 = Object.create(var7, {
                constructor: {
                    value: var4
                }
            });
            var10 = var7;
            var4 = new var10[var4](var9);
            var4 = var4 instanceof Object ? var4 : var7;
            var1.stateChangeTimeout = var4;
            var1.inputDetected = var0;
            var4 = global;
            var7 = var4.performance;
            var4 = var7.now;
            var4 = var4.bind(var7)();
            var1.lastUpdateTime = var4;
            var4 = _closure1_slot4;
            var3 = function*() { // Environment: var2
                var0 = function*() { // Original name: ?anon_0_, environment: var0
                    _fun95120: for (var _fun95120_ip = 0;;) switch (_fun95120_ip) {
                        case 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                            if (var1) {
                                _fun95120_ip = 539;
                                continue _fun95120
                            }
                        case 10:
                            var1 = undefined;
                            var6 = undefined;
                            var9 = undefined;
                            var5 = _closure1_slot0;
                            var7 = _closure1_slot2;
                            var3 = 7;
                            var3 = var7[var3];
                            var8 = var5.bind(var1)(var3);
                            var4 = var8.getWindowsMuteDetectionExperimentConfig;
                            var3 = {};
                            var10 = 'MediaEngineStore.fetchInputDeviceOSConfig';
                            var3.location = var10;
                            var3 = var4.bind(var8)(var3);
                            var3 = var3.windowsMuteAndZeroVolumeDetectionEnabled;
                            var4 = 8;
                            var4 = var7[var4];
                            var5 = var5.bind(var1)(var4);
                            var4 = var5.isWindows;
                            var4 = var4.bind(var5)();
                            if (!var4) {
                                _fun95120_ip = 536;
                                continue _fun95120
                            }
                        case 96:
                            var5 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var7 = 9;
                            var7 = var4[var7];
                            var10 = var5.bind(var1)(var7);
                            var8 = var10.satisfies;
                            var12 = 10;
                            var4 = var4[var12];
                            var4 = var5.bind(var1)(var4);
                            var5 = null;
                            var4 = var5 == var4;
                            var7 = undefined;
                            if (var4) {
                                _fun95120_ip = 174;
                                continue _fun95120
                            }
                        case 145:
                            var11 = _closure1_slot1;
                            var4 = _closure1_slot2;
                            var4 = var4[var12];
                            var4 = var11.bind(var1)(var4);
                            var4 = var4.os;
                            var7 = var4.release;
                        case 174:
                            var4 = _closure1_slot7;
                            var4 = var8.bind(var10)(var7, var4);
                            if (!var4) {
                                _fun95120_ip = 536;
                                continue _fun95120
                            }
                        case 190:
                            if (!var3) {
                                _fun95120_ip = 536;
                                continue _fun95120
                            }
                        case 196: // try_start_0
                            var3 = _closure3_slot1;
                            var8 = var3.mediaEngineStore;
                            var7 = var8.getInputDeviceId;
                            var7 = var7.bind(var8)();
                            var8 = var3.mediaEngineStore;
                            var3 = var8.getInputDevices;
                            var3 = var3.bind(var8)();
                            var3 = var3[var7];
                            var6 = var3;
                            var7 = var5 == var3;
                            var3 = undefined;
                            if (var7) {
                                _fun95120_ip = 257;
                                continue _fun95120
                            }
                        case 251:
                            var3 = var6.guid;
                        case 257:
                            var9 = var3;
                            if (!(var5 != var3)) {
                                _fun95120_ip = 488;
                                continue _fun95120
                            }
                        case 267:
                            var5 = var9;
                            var3 = '';
                            if (!(var3 !== var5)) {
                                _fun95120_ip = 488;
                                continue _fun95120
                            }
                        case 281:
                            var5 = _closure1_slot1;
                            var6 = _closure1_slot2;
                            var3 = 11;
                            var3 = var6[var3];
                            var6 = var5.bind(var1)(var3);
                            var5 = var6.ensureModule;
                            var3 = 'discord_voice';
                            var3 = var5.bind(var6)(var3);
                            SaveGenerator(address = 322);
                        case 320:
                            return var3;
                        case 322:
                            ResumeGenerator(result_out_reg = 3, return_bool_out_reg = 5);
                            if (var5) {
                                _fun95120_ip = 493;
                                continue _fun95120
                            }
                        case 331:
                            var5 = global;
                            var6 = var5.Promise;
                            var5 = var6.all;
                            var7 = _closure3_slot1;
                            var8 = var7.mediaEngine;
                            var4 = var8.getDeviceOSVolume;
                            var8 = var4.bind(var8)(var9);
                            var4 = new Array(2);
                            var4[0] = var8;
                            var8 = var7.mediaEngine;
                            var7 = var8.getDeviceOSMuted;
                            var7 = var7.bind(var8)(var9);
                            var4[1] = var7;
                            var4 = var5.bind(var6)(var4);
                            SaveGenerator(address = 404);
                        case 402:
                            return var4;
                        case 404:
                            ResumeGenerator(result_out_reg = 4, return_bool_out_reg = 5);
                            if (var5) {
                                _fun95120_ip = 490;
                                continue _fun95120
                            }
                        case 410:
                            var6 = _closure1_slot3;
                            var5 = 2;
                            var6 = var6.bind(var1)(var4, var5);
                            var5 = 0;
                            var9 = var6[var5];
                            var5 = 1;
                            var8 = var6[var5];
                            var6 = _closure1_slot1;
                            var7 = _closure1_slot2;
                            var5 = 12;
                            var5 = var7[var5];
                            var7 = var6.bind(var1)(var5);
                            var6 = var7.dispatch;
                            var5 = {};
                            var10 = 'AUDIO_INPUT_DEVICE_OS_CONFIG_FETCHED';
                            var5.type = var10;
                            var5.osVolume = var9;
                            var5.osMuted = var8;
                            var5 = var6.bind(var7)(var5);
                        case 488: // try_end0
                            _fun95120_ip = 536;
                            continue _fun95120;
                        case 490:
                            return var4;
                        case 493:
                            return var3;
                        case 496: // catch_target0
                            CatchBlockStart(arg_register = 6);
                            var4 = _closure1_slot8;
                            var3 = var4.warn;
                            var2 = global;
                            var2 = var2.HermesInternal;
                            var5 = var2.concat;
                            var2 = 'Failed to get device OS volume and/or mute state: ';
                            var2 = var5.bind(var2)(var6);
                            var2 = var3.bind(var4)(var2);
                        case 536:
                            return var1;
                        case 539:
                            return var0;
                    }
                };
                return var0;
            };
            var3 = var4.bind(var0)(var3);
            var1.fetchInputDeviceOSConfig = var3;
            var2 = function(arg0) { // Environment: var2
                _fun95121: for (var _fun95121_ip = 0;;) switch (_fun95121_ip) {
                    case 0:
                        var0 = arg0;
                        var _closure4_slot0 = var0;
                        var0 = !var0;
                        var _closure4_slot1 = var0;
                        var2 = _closure3_slot0;
                        var4 = var2.stateChangeTimeout;
                        var3 = var4.start;
                        var2 = 5000;
                        if (!var0) {
                            _fun95121_ip = 49;
                            continue _fun95121
                        }
                    case 43:
                        var2 = 1500;
                    case 49:
                        var5 = _closure1_slot4;
                        var0 = undefined;
                        var1 = function*() { // Environment: var1
                            var0 = function*() { // Original name: ?anon_0_, environment: var0
                                _fun95123: for (var _fun95123_ip = 0;;) switch (_fun95123_ip) {
                                    case 0:
                                        StartGenerator();
                                        ResumeGenerator(result_out_reg = 0, return_bool_out_reg = 1);
                                        if (var1) {
                                            _fun95123_ip = 183;
                                            continue _fun95123
                                        }
                                    case 10:
                                        var6 = _closure1_slot8;
                                        var5 = var6.info;
                                        var1 = _closure4_slot0;
                                        var4 = 'Silence:';
                                        var4 = var5.bind(var6)(var4, var1);
                                        var4 = _closure3_slot1;
                                        var3 = _closure4_slot1;
                                        var4.inputDetected = var3;
                                        var3 = global;
                                        var5 = var3.performance;
                                        var3 = var5.now;
                                        var3 = var3.bind(var5)();
                                        var4.lastUpdateTime = var3;
                                        if (!var1) {
                                            _fun95123_ip = 109;
                                            continue _fun95123
                                        }
                                    case 85:
                                        var3 = _closure3_slot1;
                                        var1 = var3.fetchInputDeviceOSConfig;
                                        var1 = var1.bind(var3)();
                                        SaveGenerator(address = 103);
                                    case 101:
                                        return var1;
                                    case 103:
                                        ResumeGenerator(result_out_reg = 1, return_bool_out_reg = 3);
                                        if (var3) {
                                            _fun95123_ip = 180;
                                            continue _fun95123
                                        }
                                    case 109:
                                        var4 = _closure1_slot1;
                                        var3 = _closure1_slot2;
                                        var2 = 12;
                                        var3 = var3[var2];
                                        var2 = undefined;
                                        var5 = var4.bind(var2)(var3);
                                        var4 = var5.dispatch;
                                        var3 = {};
                                        var7 = 'AUDIO_INPUT_DETECTED';
                                        var3.type = var7;
                                        var6 = _closure3_slot1;
                                        var7 = var6.inputDetected;
                                        var3.inputDetected = var7;
                                        var6 = var6.lastUpdateTime;
                                        var3.lastUpdateTime = var6;
                                        var3 = var4.bind(var5)(var3);
                                        return var2;
                                    case 180:
                                        return var1;
                                    case 183:
                                        return var0;
                                }
                            };
                            return var0;
                        };
                        var1 = var5.bind(var0)(var1);
                        var1 = var3.bind(var4)(var2, var1);
                        return var0;
                }
            };
            var1.handleSilence = var2;
            var4 = var1.mediaEngine;
            var3 = var4.on;
            var2 = 13;
            var2 = var6[var2];
            var2 = var5.bind(var0)(var2);
            var2 = var2.MediaEngineEvent;
            var2 = var2.Silence;
            var1 = var1.handleSilence;
            var1 = var3.bind(var4)(var2, var1);
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var4 = 'reset';
        var0.key = var4;
        var1 = function() {
            _fun95124: for (var _fun95124_ip = 0;;) switch (_fun95124_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.stateChangeTimeout;
                    var0 = var2.stop;
                    var0 = var0.bind(var2)();
                    var2 = var1.inputDetected;
                    var0 = null;
                    if (!(var0 != var2)) {
                        _fun95124_ip = 51;
                        continue _fun95124
                    }
                case 31:
                    var2 = var1.handleSilence;
                    var0 = var1.inputDetected;
                    var0 = !var0;
                    var0 = var2.bind(var1)(var0);
                case 51:
                    var0 = undefined;
                    var1.inputDetected = var0;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(1);
        var1[0] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var3 = 14;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_engine/InputWatcher.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 5, 6, 7, 3503, 4, 3627, 12462, 479, 12365, 3076, 7754, 806, 3630, 2]);