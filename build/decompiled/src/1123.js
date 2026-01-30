// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = function() { // Original name: getExpoUpdatesContext, environment: var2
        _fun12291: for (var _fun12291_ip = 0;;) switch (_fun12291_ip) {
            case 0:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 3;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var2.bind(var0)(var1);
                var0 = var1.getExpoUpdates;
                var1 = var0.bind(var1)();
                if (var1) {
                    _fun12291_ip = 49;
                    continue _fun12291
                }
            case 38:
                var0 = {};
                var2 = false;
                var0.is_enabled = var2;
                return var0;
            case 49:
                var0 = {};
                var2 = var1.isEnabled;
                var2 = !var2;
                var2 = !var2;
                var0.is_enabled = var2;
                var2 = var1.isEmbeddedLaunch;
                var2 = !var2;
                var2 = !var2;
                var0.is_embedded_launch = var2;
                var2 = var1.isEmergencyLaunch;
                var2 = !var2;
                var2 = !var2;
                var0.is_emergency_launch = var2;
                var2 = var1.isUsingEmbeddedAssets;
                var2 = !var2;
                var2 = !var2;
                var0.is_using_embedded_assets = var2;
                var2 = var1.updateId;
                var3 = 'string';
                var2 = typeof var2;
                var2 = var3 === var2;
                if (!var2) {
                    _fun12291_ip = 145;
                    continue _fun12291
                }
            case 139:
                var2 = var1.updateId;
            case 145:
                if (!var2) {
                    _fun12291_ip = 170;
                    continue _fun12291
                }
            case 148:
                var4 = var1.updateId;
                var2 = var4.toLowerCase;
                var2 = var2.bind(var4)();
                var0.update_id = var2;
            case 170:
                var2 = var1.channel;
                var2 = typeof var2;
                var2 = var3 === var2;
                if (!var2) {
                    _fun12291_ip = 190;
                    continue _fun12291
                }
            case 185:
                var2 = var1.channel;
            case 190:
                if (!var2) {
                    _fun12291_ip = 214;
                    continue _fun12291
                }
            case 193:
                var4 = var1.channel;
                var2 = var4.toLowerCase;
                var2 = var2.bind(var4)();
                var0.channel = var2;
            case 214:
                var2 = var1.runtimeVersion;
                var2 = typeof var2;
                var2 = var3 === var2;
                if (!var2) {
                    _fun12291_ip = 236;
                    continue _fun12291
                }
            case 230:
                var2 = var1.runtimeVersion;
            case 236:
                if (!var2) {
                    _fun12291_ip = 261;
                    continue _fun12291
                }
            case 239:
                var4 = var1.runtimeVersion;
                var2 = var4.toLowerCase;
                var2 = var2.bind(var4)();
                var0.runtime_version = var2;
            case 261:
                var2 = var1.checkAutomatically;
                var2 = typeof var2;
                var2 = var3 === var2;
                if (!var2) {
                    _fun12291_ip = 283;
                    continue _fun12291
                }
            case 277:
                var2 = var1.checkAutomatically;
            case 283:
                if (!var2) {
                    _fun12291_ip = 308;
                    continue _fun12291
                }
            case 286:
                var4 = var1.checkAutomatically;
                var2 = var4.toLowerCase;
                var2 = var2.bind(var4)();
                var0.check_automatically = var2;
            case 308:
                var2 = var1.emergencyLaunchReason;
                var2 = typeof var2;
                var2 = var3 === var2;
                if (!var2) {
                    _fun12291_ip = 330;
                    continue _fun12291
                }
            case 324:
                var2 = var1.emergencyLaunchReason;
            case 330:
                if (!var2) {
                    _fun12291_ip = 345;
                    continue _fun12291
                }
            case 333:
                var2 = var1.emergencyLaunchReason;
                var0.emergency_launch_reason = var2;
            case 345:
                var2 = var1.launchDuration;
                var3 = 'number';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun12291_ip = 374;
                    continue _fun12291
                }
            case 362:
                var2 = var1.launchDuration;
                var0.launch_duration = var2;
            case 374:
                var3 = var1.createdAt;
                var2 = global;
                var2 = var2.Date;
                var2 = var3 instanceof var2;
                if (!var2) {
                    _fun12291_ip = 417;
                    continue _fun12291
                }
            case 395:
                var2 = var1.createdAt;
                var1 = var2.toISOString;
                var1 = var1.bind(var2)();
                var0.created_at = var1;
            case 417:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var3 = 'ota_updates';
    var1.OTA_UPDATES_CONTEXT_KEY = var3;
    var2 = function() { // Original name: expoContextIntegration, environment: var2
        var0 = function() { // Original name: getExpoUpdatesContextCached, environment: var1
            _fun12293: for (var _fun12293_ip = 0;;) switch (_fun12293_ip) {
                case 0:
                    var0 = _closure2_slot0;
                    if (var0) {
                        _fun12293_ip = 30;
                        continue _fun12293
                    }
                case 10:
                    var3 = _closure1_slot2;
                    var1 = undefined;
                    var1 = var3.bind(var1)();
                    var _closure2_slot0 = var1;
                    var0 = var1;
                case 30:
                    return var0;
            }
        };
        var _closure2_slot1 = var0;
        var0 = {};
        var2 = 'ExpoContext';
        var0.name = var2;
        var2 = function(arg0) { // Original name: setup, environment: var1
            var3 = arg0;
            var _closure3_slot0 = var3;
            var2 = var3.on;
            var1 = 'afterInit';
            var0 = function() { // Environment: var0
                _fun12295: for (var _fun12295_ip = 0;;) switch (_fun12295_ip) {
                    case 0:
                        var1 = _closure3_slot0;
                        var0 = var1.getOptions;
                        var0 = var0.bind(var1)();
                        var0 = var0.enableNative;
                        if (!var0) {
                            _fun12295_ip = 204;
                            continue _fun12295
                        }
                    case 29:
                        var2 = undefined;
                        var1 = undefined;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var5 = 0;
                        var3 = var3[var5];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.isExpo;
                        var3 = var3.bind(var4)();
                        if (!var3) {
                            _fun12295_ip = 204;
                            continue _fun12295
                        }
                    case 71:
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var3 = var3[var5];
                        var4 = var4.bind(var2)(var3);
                        var3 = var4.isExpoGo;
                        var3 = var3.bind(var4)();
                        if (var3) {
                            _fun12295_ip = 204;
                            continue _fun12295
                        }
                    case 101:
                        var3 = _closure2_slot1;
                        var1 = var3.bind(var2)();
                    case 112: // try_start_0
                        var4 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var3 = 1;
                        var3 = var5[var3];
                        var3 = var4.bind(var2)(var3);
                        var5 = var3.NATIVE;
                        var4 = var5.setContext;
                        var3 = var1;
                        var1 = 'ota_updates';
                        var1 = var4.bind(var5)(var1, var3);
                    case 157: // try_end0
                        _fun12295_ip = 204;
                        continue _fun12295;
                    case 159: // catch_target0
                        CatchBlockStart(arg_register = 3);
                        var1 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var0 = 2;
                        var0 = var4[var0];
                        var0 = var1.bind(var2)(var0);
                        var2 = var0.debug;
                        var1 = var2.error;
                        var0 = 'Error setting Expo updates context:';
                        var0 = var1.bind(var2)(var0, var3);
                    case 204:
                        var0 = undefined;
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var1, var0);
            var0 = undefined;
            return var0;
        };
        var0.setup = var2;
        var1 = function(arg0) { // Original name: processEvent, environment: var1
            _fun12296: for (var _fun12296_ip = 0;;) switch (_fun12296_ip) {
                case 0:
                    var0 = arg0;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 0;
                    var1 = var3[var1];
                    var3 = undefined;
                    var2 = var2.bind(var3)(var1);
                    var1 = var2.isExpo;
                    var1 = var1.bind(var2)();
                    if (!var1) {
                        _fun12296_ip = 113;
                        continue _fun12296
                    }
                case 40:
                    var1 = function(arg0) { // Original name: addExpoGoContext, environment: var1
                        _fun12297: for (var _fun12297_ip = 0;;) switch (_fun12297_ip) {
                            case 0:
                                var1 = arg0;
                                var4 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var0 = 0;
                                var3 = var3[var0];
                                var0 = undefined;
                                var4 = var4.bind(var0)(var3);
                                var3 = var4.isExpoGo;
                                var3 = var3.bind(var4)();
                                if (var3) {
                                    _fun12297_ip = 42;
                                    continue _fun12297
                                }
                            case 40:
                                return var0;
                            case 42:
                                var5 = _closure1_slot0;
                                var3 = _closure1_slot1;
                                var4 = 3;
                                var3 = var3[var4];
                                var5 = var5.bind(var0)(var3);
                                var3 = var5.getExpoDevice;
                                var5 = var3.bind(var5)();
                                var10 = undefined;
                                if (!var5) {
                                    _fun12297_ip = 150;
                                    continue _fun12297
                                }
                            case 77:
                                var3 = {};
                                var6 = var5.deviceName;
                                var3.name = var6;
                                var6 = null;
                                var7 = var6 == var5;
                                var6 = undefined;
                                if (var7) {
                                    _fun12297_ip = 106;
                                    continue _fun12297
                                }
                            case 100:
                                var6 = var5.isDevice;
                            case 106:
                                var6 = !var6;
                                var3.simulator = var6;
                                var6 = var5.modelName;
                                var3.model = var6;
                                var6 = var5.manufacturer;
                                var3.manufacturer = var6;
                                var5 = var5.totalMemory;
                                var3.memory_size = var5;
                                var10 = var3;
                            case 150:
                                if (!var10) {
                                    _fun12297_ip = 232;
                                    continue _fun12297
                                }
                            case 153:
                                var3 = var1.contexts;
                                if (var3) {
                                    _fun12297_ip = 164;
                                    continue _fun12297
                                }
                            case 162:
                                var3 = {};
                            case 164:
                                var1.contexts = var3;
                                var5 = var1.contexts;
                                var3 = global;
                                var8 = var3.Object;
                                var7 = var8.assign;
                                var9 = var3.Object;
                                var6 = var9.assign;
                                var3 = {};
                                var6 = var6.bind(var9)(var3, var10);
                                var3 = var1.contexts;
                                var3 = var3.device;
                                var3 = var7.bind(var8)(var6, var3);
                                var5.device = var3;
                            case 232:
                                var3 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var2 = var2[var4];
                                var3 = var3.bind(var0)(var2);
                                var2 = var3.getExpoDevice;
                                var3 = var2.bind(var3)();
                                var8 = undefined;
                                if (!var3) {
                                    _fun12297_ip = 301;
                                    continue _fun12297
                                }
                            case 264:
                                var2 = {};
                                var4 = var3.osBuildId;
                                var2.build = var4;
                                var4 = var3.osVersion;
                                var2.version = var4;
                                var3 = var3.osName;
                                var2.name = var3;
                                var8 = var2;
                            case 301:
                                if (!var8) {
                                    _fun12297_ip = 383;
                                    continue _fun12297
                                }
                            case 304:
                                var2 = var1.contexts;
                                if (var2) {
                                    _fun12297_ip = 315;
                                    continue _fun12297
                                }
                            case 313:
                                var2 = {};
                            case 315:
                                var1.contexts = var2;
                                var2 = var1.contexts;
                                var3 = global;
                                var5 = var3.Object;
                                var4 = var5.assign;
                                var7 = var3.Object;
                                var6 = var7.assign;
                                var3 = {};
                                var3 = var6.bind(var7)(var3, var8);
                                var1 = var1.contexts;
                                var1 = var1.os;
                                var1 = var4.bind(var5)(var3, var1);
                                var2.os = var1;
                            case 383:
                                return var0;
                        }
                    };
                    var1 = var1.bind(var3)(var0);
                    var1 = var0.contexts;
                    if (var1) {
                        _fun12296_ip = 63;
                        continue _fun12296
                    }
                case 61:
                    var1 = {};
                case 63:
                    var0.contexts = var1;
                    var2 = var0.contexts;
                    var1 = global;
                    var5 = var1.Object;
                    var4 = var5.assign;
                    var1 = _closure2_slot1;
                    var3 = var1.bind(var3)();
                    var1 = {};
                    var1 = var4.bind(var5)(var1, var3);
                    var2.ota_updates = var1;
                case 113:
                    return var0;
            }
        };
        var0.processEvent = var1;
        return var0;
    };
    var1.expoContextIntegration = var2;
    var1.getExpoUpdatesContext = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [999, 998, 817, 1000]);