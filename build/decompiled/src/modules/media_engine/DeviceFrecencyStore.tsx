// modules/media_engine/DeviceFrecencyStore.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var6 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var0 = function() { // Original name: _isNativeReflectConstruct, environment: var3
        _fun31316: for (var _fun31316_ip = 0;;) switch (_fun31316_ip) {
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
                _fun31316_ip = 74;
                continue _fun31316;
            case 72: // catch_target0
                CatchBlockStart(arg_register = 1);
            case 74:
                var1 = function() { // Original name: _isNativeReflectConstruct, environment: var0
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
    var0 = function(arg0, arg1) { // Original name: handleSetDevice, environment: var3
        _fun31319: for (var _fun31319_ip = 0;;) switch (_fun31319_ip) {
            case 0:
                var2 = arg0;
                var0 = arg1;
                var4 = var0.oldId;
                var3 = _closure1_slot16;
                var1 = var3.isSampling;
                var1 = var1.bind(var3)(var2);
                if (var1) {
                    _fun31319_ip = 37;
                    continue _fun31319
                }
            case 33:
                var1 = false;
                return var1;
            case 37:
                var3 = _closure1_slot16;
                var1 = var3.stopSampling;
                var1 = var1.bind(var3)(var2, var4);
                var1 = _closure1_slot16;
                var0 = var1.startSampling;
                var0 = var0.bind(var1)(var2);
                var0 = undefined;
                return var0;
        }
    };
    var _closure1_slot18 = var0;
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
    var _closure1_slot2 = var1;
    var1 = 1;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot3 = var1;
    var1 = 2;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot4 = var1;
    var1 = 3;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot5 = var1;
    var1 = 4;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot6 = var1;
    var1 = 5;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot7 = var1;
    var1 = 6;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var _closure1_slot8 = var1;
    var1 = 7;
    var1 = var5[var1];
    var1 = var4.bind(var0)(var1);
    var8 = var1.DeviceTypes;
    var _closure1_slot9 = var8;
    var7 = var1.MediaEngineContextTypes;
    var _closure1_slot10 = var7;
    var1 = var1.SpeakingFlags;
    var _closure1_slot11 = var1;
    var1 = {};
    var7 = var8.AUDIO_INPUT;
    var1.inputDeviceFrecency = var7;
    var7 = var8.AUDIO_OUTPUT;
    var1.outputDeviceFrecency = var7;
    var7 = var8.VIDEO_INPUT;
    var1.videoDeviceFrecency = var7;
    var _closure1_slot12 = var1;
    var10 = {};
    var1 = function() { // Original name: afterCompute, environment: var3
        var0 = undefined;
        return var0;
    };
    var10.afterCompute = var1;
    var1 = function() { // Original name: computeBonus, environment: var3
        var0 = 100;
        return var0;
    };
    var10.computeBonus = var1;
    var1 = function(arg0) { // Original name: lookupKey, environment: var3
        var0 = arg0;
        return var0;
    };
    var10.lookupKey = var1;
    var1 = 256;
    var10.maxSamples = var1;
    var1 = inf;
    var10.numFrequentlyItems = var1;
    var1 = {};
    var11 = var8.AUDIO_INPUT;
    var7 = 8;
    var9 = var5[var7];
    var9 = var4.bind(var0)(var9);
    var9 = var9.StopWatch;
    var12 = var9.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var9
        }
    });
    var16 = var12;
    var9 = new var16[var9](var15);
    var9 = var9 instanceof Object ? var9 : var12;
    var1[var11] = var9;
    var11 = var8.AUDIO_OUTPUT;
    var9 = var5[var7];
    var9 = var4.bind(var0)(var9);
    var9 = var9.StopWatch;
    var12 = var9.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var9
        }
    });
    var16 = var12;
    var9 = new var16[var9](var15);
    var9 = var9 instanceof Object ? var9 : var12;
    var1[var11] = var9;
    var9 = var8.VIDEO_INPUT;
    var7 = var5[var7];
    var7 = var4.bind(var0)(var7);
    var7 = var7.StopWatch;
    var11 = var7.prototype;
    var11 = Object.create(var11, {
        constructor: {
            value: var7
        }
    });
    var16 = var11;
    var7 = new var16[var7](var15);
    var7 = var7 instanceof Object ? var7 : var11;
    var1[var9] = var7;
    var _closure1_slot13 = var1;
    var1 = {};
    var9 = var8.AUDIO_INPUT;
    var7 = {};
    var1[var9] = var7;
    var9 = var8.AUDIO_OUTPUT;
    var7 = {};
    var1[var9] = var7;
    var9 = var8.VIDEO_INPUT;
    var7 = {};
    var1[var9] = var7;
    var _closure1_slot14 = var1;
    var1 = {};
    var11 = var8.AUDIO_INPUT;
    var7 = 9;
    var9 = var5[var7];
    var9 = var6.bind(var0)(var9);
    var12 = var9.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var9
        }
    });
    var16 = var12;
    var15 = var10;
    var9 = new var16[var9](var15, var14);
    var9 = var9 instanceof Object ? var9 : var12;
    var1[var11] = var9;
    var11 = var8.AUDIO_OUTPUT;
    var9 = var5[var7];
    var9 = var6.bind(var0)(var9);
    var12 = var9.prototype;
    var12 = Object.create(var12, {
        constructor: {
            value: var9
        }
    });
    var16 = var12;
    var15 = var10;
    var9 = new var16[var9](var15, var14);
    var9 = var9 instanceof Object ? var9 : var12;
    var1[var11] = var9;
    var8 = var8.VIDEO_INPUT;
    var7 = var5[var7];
    var7 = var6.bind(var0)(var7);
    var9 = var7.prototype;
    var9 = Object.create(var9, {
        constructor: {
            value: var7
        }
    });
    var16 = var9;
    var15 = var10;
    var7 = new var16[var7](var15, var14);
    var7 = var7 instanceof Object ? var7 : var9;
    var1[var8] = var7;
    var _closure1_slot15 = var1;
    var1 = 10;
    var1 = var5[var1];
    var1 = var6.bind(var0)(var1);
    var7 = var1.PersistedStore;
    var1 = function(arg0) { // Environment: var3
        var3 = function() { // Original name: DeviceFrecencyStore, environment: var5
            _fun31324: for (var _fun31324_ip = 0;;) switch (_fun31324_ip) {
                case 0:
                    var3 = this;
                    var2 = undefined;
                    var4 = undefined;
                    var0 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = var0.bind(var2)(var3, var1);
                    var0 = _closure1_slot5;
                    var8 = var0.bind(var2)(var1);
                    var1 = _closure1_slot4;
                    var0 = _closure1_slot17;
                    var0 = var0.bind(var2)();
                    if (var0) {
                        _fun31324_ip = 69;
                        continue _fun31324
                    }
                case 51:
                    var6 = var8.apply;
                    var4 = arguments;
                    var0 = var4;
                    var0 = var6.bind(var8)(var3, var0);
                    _fun31324_ip = 105;
                    continue _fun31324;
                case 69:
                    var6 = global;
                    var7 = var6.Reflect;
                    var6 = var7.construct;
                    var5 = _closure1_slot5;
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
        var4 = _closure1_slot6;
        var2 = undefined;
        var1 = arg0;
        var1 = var4.bind(var2)(var3, var1);
        var1 = _closure1_slot3;
        var4 = {};
        var0 = 'initialize';
        var4.key = var0;
        var0 = function(arg0) { // Original name: value, environment: var5
            var5 = this;
            var1 = arg0;
            var _closure3_slot0 = var1;
            var4 = var5.waitFor;
            var3 = _closure1_slot7;
            var2 = _closure1_slot8;
            var2 = var4.bind(var5)(var3, var2);
            var1 = _closure1_slot9;
            var3 = var1.AUDIO_INPUT;
            var2 = new Array(3);
            var2[0] = var3;
            var3 = var1.AUDIO_OUTPUT;
            var2[1] = var3;
            var1 = var1.VIDEO_INPUT;
            var2[2] = var1;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                _fun31326: for (var _fun31326_ip = 0;;) switch (_fun31326_ip) {
                    case 0:
                        var2 = arg0;
                        var0 = _closure3_slot0;
                        var4 = null;
                        var5 = var4 == var0;
                        var0 = undefined;
                        var3 = undefined;
                        if (var5) {
                            _fun31326_ip = 31;
                            continue _fun31326
                        }
                    case 23:
                        var5 = _closure3_slot0;
                        var3 = var5[var2];
                    case 31:
                        if (!(var4 != var3)) {
                            _fun31326_ip = 65;
                            continue _fun31326
                        }
                    case 35:
                        var3 = _closure1_slot15;
                        var4 = var3[var2];
                        var3 = var4.overwriteHistory;
                        var1 = _closure3_slot0;
                        var1 = var1[var2];
                        var1 = var3.bind(var4)(var1);
                    case 65:
                        var1 = _closure1_slot13;
                        var2 = var1[var2];
                        var1 = var2.reset;
                        var1 = var1.bind(var2)();
                        return var0;
                }
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var0;
        var0 = new Array(9);
        var0[0] = var4;
        var4 = {};
        var6 = 'reset';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = _closure1_slot9;
            var1 = var0.AUDIO_INPUT;
            var2 = new Array(3);
            var2[0] = var1;
            var1 = var0.AUDIO_OUTPUT;
            var2[1] = var1;
            var0 = var0.VIDEO_INPUT;
            var2[2] = var0;
            var1 = var2.forEach;
            var0 = function(arg0) { // Environment: var0
                var2 = arg0;
                var1 = _closure1_slot13;
                var3 = var1[var2];
                var1 = var3.reset;
                var1 = var1.bind(var3)();
                var1 = _closure1_slot14;
                var0 = {};
                var1[var2] = var0;
                var0 = undefined;
                return var0;
            };
            var0 = var1.bind(var2)(var0);
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[1] = var4;
        var4 = {};
        var6 = 'track';
        var4.key = var6;
        var6 = function(arg0, arg1, arg2) { // Original name: value, environment: var5
            _fun31329: for (var _fun31329_ip = 0;;) switch (_fun31329_ip) {
                case 0:
                    var1 = arg0;
                    var3 = arg1;
                    var4 = arg2;
                    var2 = _closure1_slot14;
                    var2 = var2[var1];
                    var5 = var2[var3];
                    var2 = null;
                    if (!(var2 == var5)) {
                        _fun31329_ip = 44;
                        continue _fun31329
                    }
                case 30:
                    var2 = _closure1_slot14;
                    var5 = var2[var1];
                    var2 = 0;
                    var5[var3] = var2;
                case 44:
                    var2 = _closure1_slot14;
                    var5 = var2[var1];
                    var2 = var5[var3];
                    var2 = var2 + var4;
                    var5[var3] = var2;
                    var0 = _closure1_slot15;
                    var2 = var0[var1];
                    var1 = var2.track;
                    var0 = {};
                    var0.usesSinceLastTrack = var4;
                    var0 = var1.bind(var2)(var3, var0);
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[2] = var4;
        var4 = {};
        var6 = 'isSampling';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot13;
            var0 = arg0;
            var1 = var1[var0];
            var0 = var1.isRunning;
            var0 = var0.bind(var1)();
            return var0;
        };
        var4.value = var6;
        var0[3] = var4;
        var4 = {};
        var6 = 'startSampling';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot13;
            var0 = arg0;
            var1 = var1[var0];
            var0 = var1.start;
            var0 = var0.bind(var1)();
            var0 = undefined;
            return var0;
        };
        var4.value = var6;
        var0[4] = var4;
        var4 = {};
        var6 = 'stopSampling';
        var4.key = var6;
        var6 = function(arg0, arg1) { // Original name: value, environment: var5
            _fun31332: for (var _fun31332_ip = 0;;) switch (_fun31332_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var3 = this;
                    var1 = _closure1_slot13;
                    var1 = var1[var5];
                    var2 = var1.stop;
                    var2 = var2.bind(var1)();
                    var2 = var1.elapsed;
                    var6 = var2.bind(var1)();
                    var2 = var6.asMilliseconds;
                    var2 = var2.bind(var6)();
                    var6 = 0;
                    if (!(var2 > var6)) {
                        _fun31332_ip = 103;
                        continue _fun31332
                    }
                case 56:
                    var6 = null;
                    if (!(var6 == var4)) {
                        _fun31332_ip = 91;
                        continue _fun31332
                    }
                case 62:
                    var7 = function(arg0) { // Original name: getConfigForDeviceType, environment: var6
                        var1 = {};
                        var0 = _closure1_slot9;
                        var4 = var0.AUDIO_INPUT;
                        var2 = {};
                        var5 = function(arg0) { // Original name: getCurrentDeviceId, environment: var3
                            var1 = arg0;
                            var0 = var1.getInputDeviceId;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var2.getCurrentDeviceId = var5;
                        var1[var4] = var2;
                        var4 = var0.AUDIO_OUTPUT;
                        var2 = {};
                        var5 = function(arg0) { // Original name: getCurrentDeviceId, environment: var3
                            var1 = arg0;
                            var0 = var1.getOutputDeviceId;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var2.getCurrentDeviceId = var5;
                        var1[var4] = var2;
                        var2 = var0.VIDEO_INPUT;
                        var0 = {};
                        var3 = function(arg0) { // Original name: getCurrentDeviceId, environment: var3
                            var1 = arg0;
                            var0 = var1.getVideoDeviceId;
                            var0 = var0.bind(var1)();
                            return var0;
                        };
                        var0.getCurrentDeviceId = var3;
                        var1[var2] = var0;
                        var0 = arg0;
                        var0 = var1[var0];
                        return var0;
                    };
                    var6 = undefined;
                    var7 = var7.bind(var6)(var5);
                    var6 = var7.getCurrentDeviceId;
                    var0 = _closure1_slot7;
                    var4 = var6.bind(var7)(var0);
                case 91:
                    var0 = var3.track;
                    var0 = var0.bind(var3)(var5, var4, var2);
                case 103:
                    var0 = var1.reset;
                    var0 = var0.bind(var1)();
                    var0 = undefined;
                    return var0;
            }
        };
        var4.value = var6;
        var0[5] = var4;
        var4 = {};
        var6 = 'getState';
        var4.key = var6;
        var6 = function() { // Original name: value, environment: var5
            var0 = {};
            var1 = _closure1_slot9;
            var4 = var1.AUDIO_INPUT;
            var3 = _closure1_slot15;
            var2 = var1.AUDIO_INPUT;
            var2 = var3[var2];
            var2 = var2.usageHistory;
            var0[var4] = var2;
            var4 = var1.AUDIO_OUTPUT;
            var2 = var1.AUDIO_OUTPUT;
            var2 = var3[var2];
            var2 = var2.usageHistory;
            var0[var4] = var2;
            var2 = var1.VIDEO_INPUT;
            var1 = var1.VIDEO_INPUT;
            var1 = var3[var1];
            var1 = var1.usageHistory;
            var0[var2] = var1;
            return var0;
        };
        var4.value = var6;
        var0[6] = var4;
        var4 = {};
        var6 = 'getDeviceIdsSortedByFrecency';
        var4.key = var6;
        var6 = function(arg0) { // Original name: value, environment: var5
            var1 = _closure1_slot15;
            var0 = arg0;
            var0 = var1[var0];
            var0 = var0.frequently;
            return var0;
        };
        var4.value = var6;
        var0[7] = var4;
        var4 = {};
        var6 = 'getUsageStats';
        var4.key = var6;
        var5 = function() { // Original name: value, environment: var5
            var0 = this;
            var _closure3_slot0 = var0;
            var3 = {};
            var2 = _closure1_slot9;
            var4 = var2.AUDIO_INPUT;
            var0 = new Array(0);
            var3[var4] = var0;
            var4 = var2.AUDIO_OUTPUT;
            var0 = new Array(0);
            var3[var4] = var0;
            var4 = var2.VIDEO_INPUT;
            var0 = new Array(0);
            var3[var4] = var0;
            var _closure3_slot1 = var3;
            var0 = var2.AUDIO_INPUT;
            var5 = new Array(2);
            var5[0] = var0;
            var0 = var2.AUDIO_OUTPUT;
            var5[1] = var0;
            var4 = var5.forEach;
            var0 = function(arg0) { // Environment: var1
                _fun31340: for (var _fun31340_ip = 0;;) switch (_fun31340_ip) {
                    case 0:
                        var2 = arg0;
                        var3 = _closure3_slot0;
                        var1 = var3.isSampling;
                        var1 = var1.bind(var3)(var2);
                        if (!var1) {
                            _fun31340_ip = 50;
                            continue _fun31340
                        }
                    case 24:
                        var3 = _closure3_slot0;
                        var1 = var3.stopSampling;
                        var1 = var1.bind(var3)(var2);
                        var1 = var3.startSampling;
                        var1 = var1.bind(var3)(var2);
                    case 50:
                        var1 = _closure3_slot1;
                        var0 = global;
                        var4 = var0.Object;
                        var3 = var4.entries;
                        var0 = _closure1_slot14;
                        var0 = var0[var2];
                        var0 = var3.bind(var4)(var0);
                        var1[var2] = var0;
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var4.bind(var5)(var0);
            var0 = {};
            var4 = var2.AUDIO_INPUT;
            var6 = var3[var4];
            var5 = var6.map;
            var4 = function(arg0) { // Environment: var1
                _fun31341: for (var _fun31341_ip = 0;;) switch (_fun31341_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = var3[Symbol.iterator];
                        var3 = var1().next;
                        var5 = var3().value;
                        var0 = var1;
                        var4 = undefined;
                        var2 = var0 === var4;
                        var0 = undefined;
                        if (var2) {
                            _fun31341_ip = 27;
                            continue _fun31341
                        }
                    case 24:
                        var0 = var5;
                    case 27:
                        if (var2) {
                            _fun31341_ip = 41;
                            continue _fun31341
                        }
                    case 30:
                        var3 = var3().value;
                        var3 = var1;
                        var2 = var3 === var4;
                    case 41:
                        if (var2) {
                            _fun31341_ip = 47;
                            continue _fun31341
                        }
                    case 44:
                        var1.return();
                    case 47:
                        return var0;
                }
            };
            var4 = var5.bind(var6)(var4);
            var0.duration_input_device_used_ids = var4;
            var4 = var2.AUDIO_INPUT;
            var6 = var3[var4];
            var5 = var6.map;
            var4 = function(arg0) { // Environment: var1
                _fun31342: for (var _fun31342_ip = 0;;) switch (_fun31342_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = var3[Symbol.iterator];
                        var3 = var1().next;
                        var0 = var3().value;
                        var0 = var1;
                        var5 = undefined;
                        var2 = var0 === var5;
                        var0 = undefined;
                        if (var2) {
                            _fun31342_ip = 49;
                            continue _fun31342
                        }
                    case 24:
                        var4 = var3().value;
                        var3 = var1;
                        var3 = var3 === var5;
                        var0 = undefined;
                        var2 = var3;
                        if (var3) {
                            _fun31342_ip = 49;
                            continue _fun31342
                        }
                    case 43:
                        var0 = var4;
                        var2 = var3;
                    case 49:
                        if (var2) {
                            _fun31342_ip = 55;
                            continue _fun31342
                        }
                    case 52:
                        var1.return();
                    case 55:
                        return var0;
                }
            };
            var4 = var5.bind(var6)(var4);
            var0.duration_input_device_used_ms = var4;
            var4 = var2.AUDIO_OUTPUT;
            var6 = var3[var4];
            var5 = var6.map;
            var4 = function(arg0) { // Environment: var1
                _fun31343: for (var _fun31343_ip = 0;;) switch (_fun31343_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = var3[Symbol.iterator];
                        var3 = var1().next;
                        var5 = var3().value;
                        var0 = var1;
                        var4 = undefined;
                        var2 = var0 === var4;
                        var0 = undefined;
                        if (var2) {
                            _fun31343_ip = 27;
                            continue _fun31343
                        }
                    case 24:
                        var0 = var5;
                    case 27:
                        if (var2) {
                            _fun31343_ip = 41;
                            continue _fun31343
                        }
                    case 30:
                        var3 = var3().value;
                        var3 = var1;
                        var2 = var3 === var4;
                    case 41:
                        if (var2) {
                            _fun31343_ip = 47;
                            continue _fun31343
                        }
                    case 44:
                        var1.return();
                    case 47:
                        return var0;
                }
            };
            var4 = var5.bind(var6)(var4);
            var0.duration_output_device_used_ids = var4;
            var2 = var2.AUDIO_OUTPUT;
            var3 = var3[var2];
            var2 = var3.map;
            var1 = function(arg0) { // Environment: var1
                _fun31344: for (var _fun31344_ip = 0;;) switch (_fun31344_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = var3[Symbol.iterator];
                        var3 = var1().next;
                        var0 = var3().value;
                        var0 = var1;
                        var5 = undefined;
                        var2 = var0 === var5;
                        var0 = undefined;
                        if (var2) {
                            _fun31344_ip = 49;
                            continue _fun31344
                        }
                    case 24:
                        var4 = var3().value;
                        var3 = var1;
                        var3 = var3 === var5;
                        var0 = undefined;
                        var2 = var3;
                        if (var3) {
                            _fun31344_ip = 49;
                            continue _fun31344
                        }
                    case 43:
                        var0 = var4;
                        var2 = var3;
                    case 49:
                        if (var2) {
                            _fun31344_ip = 55;
                            continue _fun31344
                        }
                    case 52:
                        var1.return();
                    case 55:
                        return var0;
                }
            };
            var1 = var2.bind(var3)(var1);
            var0.duration_output_device_used_ms = var1;
            return var0;
        };
        var4.value = var5;
        var0[8] = var4;
        var0 = var1.bind(var2)(var3, var0);
        return var0;
    };
    var8 = var1.bind(var0)(var7);
    var1 = 'DeviceFrecencyStore';
    var8.displayName = var1;
    var8.persistKey = var1;
    var1 = new Array(1);
    var7 = function(arg0) { // Environment: var3
        var2 = _closure1_slot0;
        var1 = _closure1_slot1;
        var0 = 11;
        var1 = var1[var0];
        var0 = undefined;
        var3 = var2.bind(var0)(var1);
        var2 = var3.mapKeys;
        var1 = arg0;
        var0 = function(arg0, arg1) { // Environment: var0
            var1 = _closure1_slot12;
            var0 = arg1;
            var0 = var1[var0];
            return var0;
        };
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1[0] = var7;
    var8.migrations = var1;
    var1 = 12;
    var1 = var5[var1];
    var15 = var6.bind(var0)(var1);
    var1 = {};
    var6 = function(arg0) { // Original name: AUDIO_SET_INPUT_DEVICE, environment: var3
        var3 = _closure1_slot18;
        var0 = _closure1_slot9;
        var2 = var0.AUDIO_INPUT;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var1.AUDIO_SET_INPUT_DEVICE = var6;
    var6 = function(arg0) { // Original name: AUDIO_SET_OUTPUT_DEVICE, environment: var3
        var3 = _closure1_slot18;
        var0 = _closure1_slot9;
        var2 = var0.AUDIO_OUTPUT;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var1.AUDIO_SET_OUTPUT_DEVICE = var6;
    var6 = function(arg0) { // Original name: MEDIA_ENGINE_SET_VIDEO_DEVICE, environment: var3
        var3 = _closure1_slot18;
        var0 = _closure1_slot9;
        var2 = var0.VIDEO_INPUT;
        var1 = undefined;
        var0 = arg0;
        var0 = var3.bind(var1)(var2, var0);
        return var0;
    };
    var1.MEDIA_ENGINE_SET_VIDEO_DEVICE = var6;
    var6 = function(arg0) { // Original name: handleSpeaking, environment: var3
        _fun31350: for (var _fun31350_ip = 0;;) switch (_fun31350_ip) {
            case 0:
                var0 = arg0;
                var2 = var0.context;
                var3 = var0.userId;
                var4 = var0.speakingFlags;
                var0 = _closure1_slot10;
                var0 = var0.DEFAULT;
                if (!(var2 === var0)) {
                    _fun31350_ip = 209;
                    continue _fun31350
                }
            case 39:
                var2 = _closure1_slot8;
                var0 = var2.getCurrentUser;
                var6 = var0.bind(var2)();
                var5 = null;
                var7 = var5 == var6;
                var0 = undefined;
                var2 = undefined;
                if (var7) {
                    _fun31350_ip = 70;
                    continue _fun31350
                }
            case 65:
                var2 = var6.id;
            case 70:
                if (!(var5 != var2)) {
                    _fun31350_ip = 205;
                    continue _fun31350
                }
            case 77:
                if (!(var3 !== var2)) {
                    _fun31350_ip = 93;
                    continue _fun31350
                }
            case 81:
                var2 = _closure1_slot9;
                var3 = var2.AUDIO_OUTPUT;
                _fun31350_ip = 103;
                continue _fun31350;
            case 93:
                var2 = _closure1_slot9;
                var3 = var2.AUDIO_INPUT;
            case 103:
                var2 = _closure1_slot11;
                var2 = var2.NONE;
                if (!(var4 === var2)) {
                    _fun31350_ip = 135;
                    continue _fun31350
                }
            case 117:
                var5 = _closure1_slot16;
                var2 = var5.isSampling;
                var2 = var2.bind(var5)(var3);
                if (var2) {
                    _fun31350_ip = 188;
                    continue _fun31350
                }
            case 135:
                var2 = _closure1_slot11;
                var2 = var2.NONE;
                if (!(var4 !== var2)) {
                    _fun31350_ip = 184;
                    continue _fun31350
                }
            case 149:
                var4 = _closure1_slot16;
                var2 = var4.isSampling;
                var2 = var2.bind(var4)(var3);
                if (var2) {
                    _fun31350_ip = 184;
                    continue _fun31350
                }
            case 167:
                var4 = _closure1_slot16;
                var2 = var4.startSampling;
                var2 = var2.bind(var4)(var3);
                _fun31350_ip = 203;
                continue _fun31350;
            case 184:
                var2 = false;
                return var2;
            case 188:
                var2 = _closure1_slot16;
                var1 = var2.stopSampling;
                var1 = var1.bind(var2)(var3);
            case 203:
                return var0;
            case 205:
                var0 = false;
                return var0;
            case 209:
                var0 = false;
                return var0;
        }
    };
    var1.SPEAKING = var6;
    var6 = function() { // Original name: handleConnect, environment: var3
        var1 = _closure1_slot16;
        var0 = var1.reset;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var1.RTC_CONNECTION_CLIENT_CONNECT = var6;
    var6 = var8.prototype;
    var6 = Object.create(var6, {
        constructor: {
            value: var8
        }
    });
    var16 = var6;
    var14 = var1;
    var1 = new var16[var8](var15, var14, var13);
    var1 = var1 instanceof Object ? var1 : var6;
    var _closure1_slot16 = var1;
    var3 = 13;
    var3 = var5[var3];
    var5 = var4.bind(var0)(var3);
    var4 = var5.fileFinishedImporting;
    var3 = 'modules/media_engine/DeviceFrecencyStore.tsx';
    var3 = var4.bind(var5)(var3);
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 15, 17, 18, 3435, 1613, 3469, 3486, 3564, 566, 22, 806, 2]);