// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun33089: for (var _fun33089_ip = 0;;) switch (_fun33089_ip) {
        case 0:
            var6 = require;
            var5 = metroImportDefault;
            var2 = exports;
            var7 = dependencyMap;
            var _closure1_slot0 = var6;
            var _closure1_slot1 = var7;
            var1 = global;
            var9 = var1.Object;
            var8 = var9.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var8.bind(var9)(var2, var0, var4);
            var0 = 0;
            var4 = var7[var0];
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var _closure1_slot2 = var4;
            var4 = 1;
            var4 = var7[var4];
            var4 = var5.bind(var0)(var4);
            var _closure1_slot3 = var4;
            var4 = 2;
            var4 = var7[var4];
            var4 = var5.bind(var0)(var4);
            var _closure1_slot4 = var4;
            var4 = 3;
            var4 = var7[var4];
            var4 = var5.bind(var0)(var4);
            var5 = 4;
            var5 = var7[var5];
            var8 = var6.bind(var0)(var5);
            var5 = var8.isJest;
            var5 = var5.bind(var8)();
            if (var5) {
                _fun33089_ip = 169;
                continue _fun33089
            }
        case 140:
            var5 = var1.globalThis;
            var5 = var5.requestAnimationFrame;
            if (!var5) {
                _fun33089_ip = 169;
                continue _fun33089
            }
        case 155:
            var1 = var1.globalThis;
            var1 = var1.requestAnimationFrame;
            _fun33089_ip = 187;
            continue _fun33089;
        case 169:
            var5 = 5;
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var1 = var5.mockedRequestAnimationFrame;
        case 187:
            var _closure1_slot5 = var1;
            var1 = 'workletsModule';
            var1 = var4.bind(var0)(var1);
            var _closure1_slot6 = var1;
            var1 = function() { // Environment: var3
                var3 = _closure1_slot4;
                var2 = function() {
                    var2 = this;
                    var _closure3_slot0 = var2;
                    var4 = _closure1_slot3;
                    var3 = _closure2_slot0;
                    var0 = undefined;
                    var3 = var4.bind(var0)(var2, var3);
                    var3 = global;
                    var7 = var3.Object;
                    var6 = var7.defineProperty;
                    var5 = _closure1_slot6;
                    var4 = {};
                    var9 = true;
                    var4.writable = var9;
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot1;
                    var8 = 6;
                    var8 = var10[var8];
                    var8 = var9.bind(var0)(var8);
                    var8 = var8.WorkletsModule;
                    var4.value = var8;
                    var4 = var6.bind(var7)(var2, var5, var4);
                    var4 = 0;
                    var2.nextSensorId = var4;
                    var3 = var3.Map;
                    var4 = var3.prototype;
                    var4 = Object.create(var4, {
                        constructor: {
                            value: var3
                        }
                    });
                    var14 = var4;
                    var3 = new var14[var3](var13);
                    var3 = var3 instanceof Object ? var3 : var4;
                    var2.sensors = var3;
                    var2.platform = var0;
                    var1 = function(arg0, arg1, arg2) { // Environment: var1
                        _fun33092: for (var _fun33092_ip = 0;;) switch (_fun33092_ip) {
                            case 0:
                                var3 = arg1;
                                var1 = arg0;
                                var _closure4_slot0 = var1;
                                var1 = arg2;
                                var _closure4_slot1 = var1;
                                var6 = _closure1_slot0;
                                var1 = _closure1_slot1;
                                var5 = 7;
                                var4 = var1[var5];
                                var1 = undefined;
                                var4 = var6.bind(var1)(var4);
                                var4 = var4.SensorType;
                                var4 = var4.ACCELEROMETER;
                                if (!(var4 !== var3)) {
                                    _fun33092_ip = 211;
                                    continue _fun33092
                                }
                            case 63:
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var4 = var4[var5];
                                var4 = var6.bind(var1)(var4);
                                var4 = var4.SensorType;
                                var4 = var4.GRAVITY;
                                if (!(var4 !== var3)) {
                                    _fun33092_ip = 211;
                                    continue _fun33092
                                }
                            case 96:
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var4 = var4[var5];
                                var4 = var6.bind(var1)(var4);
                                var4 = var4.SensorType;
                                var4 = var4.GYROSCOPE;
                                if (!(var4 !== var3)) {
                                    _fun33092_ip = 204;
                                    continue _fun33092
                                }
                            case 129:
                                var6 = _closure1_slot0;
                                var4 = _closure1_slot1;
                                var4 = var4[var5];
                                var4 = var6.bind(var1)(var4);
                                var4 = var4.SensorType;
                                var4 = var4.MAGNETIC_FIELD;
                                if (!(var4 !== var3)) {
                                    _fun33092_ip = 204;
                                    continue _fun33092
                                }
                            case 162:
                                var4 = _closure1_slot0;
                                var2 = _closure1_slot1;
                                var2 = var2[var5];
                                var2 = var4.bind(var1)(var2);
                                var2 = var2.SensorType;
                                var2 = var2.ROTATION;
                                if (!(var2 !== var3)) {
                                    _fun33092_ip = 197;
                                    continue _fun33092
                                }
                            case 195:
                                return var1;
                            case 197:
                                var1 = function() { // Environment: var0
                                    _fun33095: for (var _fun33095_ip = 0;;) switch (_fun33095_ip) {
                                        case 0:
                                            var5 = _closure1_slot2;
                                            var0 = _closure4_slot0;
                                            var4 = var0.quaternion;
                                            var0 = undefined;
                                            var3 = 4;
                                            var8 = var5.bind(var0)(var4, var3);
                                            var3 = 0;
                                            var10 = var8[var3];
                                            var6 = 1;
                                            var9 = var8[var6];
                                            var4 = 2;
                                            var5 = var8[var4];
                                            var7 = 3;
                                            var11 = var8[var7];
                                            var7 = _closure3_slot0;
                                            var12 = var7.platform;
                                            var2 = _closure1_slot8;
                                            var2 = var2.WEB_ANDROID;
                                            var8 = var5;
                                            var7 = var11;
                                            if (!(var12 === var2)) {
                                                _fun33095_ip = 116;
                                                continue _fun33095
                                            }
                                        case 93:
                                            var2 = new Array(2);
                                            var2[0] = var11;
                                            var5 = -var5;
                                            var2[1] = var5;
                                            var8 = var2[var3];
                                            var7 = var2[var6];
                                        case 116:
                                            var2 = global;
                                            var12 = var2.Math;
                                            var11 = var12.atan2;
                                            var6 = var8 * var7;
                                            var5 = var10 * var9;
                                            var5 = var6 + var5;
                                            var6 = var4 * var5;
                                            var13 = var10 * var10;
                                            var5 = var9 * var9;
                                            var13 = var13 - var5;
                                            var5 = var8 * var8;
                                            var13 = var13 - var5;
                                            var5 = var7 * var7;
                                            var5 = var13 + var5;
                                            var5 = var11.bind(var12)(var6, var5);
                                            var6 = -var5;
                                            var12 = var2.Math;
                                            var11 = var12.sin;
                                            var13 = var9 * var7;
                                            var5 = var10 * var8;
                                            var13 = var13 - var5;
                                            var5 = -2;
                                            var5 = var5 * var13;
                                            var5 = var11.bind(var12)(var5);
                                            var12 = var2.Math;
                                            var11 = var12.atan2;
                                            var13 = var9 * var8;
                                            var2 = var10 * var7;
                                            var2 = var13 + var2;
                                            var4 = var4 * var2;
                                            var13 = var10 * var10;
                                            var2 = var9 * var9;
                                            var13 = var13 + var2;
                                            var2 = var8 * var8;
                                            var13 = var13 - var2;
                                            var2 = var7 * var7;
                                            var2 = var13 - var2;
                                            var2 = var11.bind(var12)(var4, var2);
                                            var4 = -var2;
                                            var2 = _closure4_slot1;
                                            var1 = {};
                                            var1.qw = var10;
                                            var1.qx = var9;
                                            var1.qy = var8;
                                            var1.qz = var7;
                                            var1.yaw = var6;
                                            var1.pitch = var5;
                                            var1.roll = var4;
                                            var1.interfaceOrientation = var3;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                    }
                                };
                                return var1;
                            case 204:
                                var1 = function() { // Environment: var0
                                    var0 = _closure4_slot0;
                                    var4 = var0.x;
                                    var3 = var0.y;
                                    var0 = var0.z;
                                    var2 = _closure4_slot1;
                                    var1 = {};
                                    var1.x = var4;
                                    var1.y = var3;
                                    var1.z = var0;
                                    var0 = 0;
                                    var1.interfaceOrientation = var0;
                                    var0 = undefined;
                                    var1 = var2.bind(var0)(var1);
                                    return var0;
                                };
                                return var1;
                            case 211:
                                var0 = function() { // Environment: var0
                                    _fun33093: for (var _fun33093_ip = 0;;) switch (_fun33093_ip) {
                                        case 0:
                                            var0 = _closure4_slot0;
                                            var6 = var0.x;
                                            var5 = var0.y;
                                            var2 = var0.z;
                                            var0 = _closure3_slot0;
                                            var8 = var0.platform;
                                            var0 = _closure1_slot8;
                                            var7 = var0.WEB_ANDROID;
                                            var4 = var6;
                                            var3 = var5;
                                            var0 = var2;
                                            if (!(var8 === var7)) {
                                                _fun33093_ip = 107;
                                                continue _fun33093
                                            }
                                        case 62:
                                            var6 = -var6;
                                            var7 = new Array(3);
                                            var7[0] = var6;
                                            var5 = -var5;
                                            var7[1] = var5;
                                            var2 = -var2;
                                            var7[2] = var2;
                                            var2 = 0;
                                            var4 = var7[var2];
                                            var2 = 1;
                                            var3 = var7[var2];
                                            var2 = 2;
                                            var0 = var7[var2];
                                        case 107:
                                            var2 = _closure4_slot1;
                                            var1 = {};
                                            var1.x = var4;
                                            var1.y = var3;
                                            var1.z = var0;
                                            var0 = 0;
                                            var1.interfaceOrientation = var0;
                                            var0 = undefined;
                                            var1 = var2.bind(var0)(var1);
                                            return var0;
                                    }
                                };
                                return var0;
                        }
                    };
                    var2.getSensorCallback = var1;
                    return var0;
                };
                var _closure2_slot0 = var2;
                var0 = {};
                var1 = 'scheduleOnUI';
                var0.key = var1;
                var1 = function arg0() {
                    var2 = _closure1_slot5;
                    var0 = undefined;
                    var1 = arg0;
                    var1 = var2.bind(var0)(var1);
                    return var0;
                };
                var0.value = var1;
                var1 = new Array(22);
                var1[0] = var0;
                var0 = {};
                var5 = 'createWorkletRuntime';
                var0.key = var5;
                var5 = function arg0, arg1() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'createWorkletRuntime is not available in JSReanimated.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0.value = var5;
                var1[1] = var0;
                var0 = {};
                var5 = 'scheduleOnRuntime';
                var0.key = var5;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'scheduleOnRuntime is not available in JSReanimated.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0.value = var5;
                var1[2] = var0;
                var0 = {};
                var5 = 'registerEventHandler';
                var0.key = var5;
                var5 = function arg0, arg1, arg2() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'registerEventHandler is not available in JSReanimated.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0.value = var5;
                var1[3] = var0;
                var0 = {};
                var5 = 'unregisterEventHandler';
                var0.key = var5;
                var5 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'unregisterEventHandler is not available in JSReanimated.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0.value = var5;
                var1[4] = var0;
                var0 = {};
                var5 = 'enableLayoutAnimations';
                var0.key = var5;
                var5 = function() {
                    _fun33101: for (var _fun33101_ip = 0;;) switch (_fun33101_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var1 = 4;
                            var2 = var0[var1];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.isWeb;
                            var4 = var2.bind(var3)();
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            if (var4) {
                                _fun33101_ip = 194;
                                continue _fun33101
                            }
                        case 49:
                            var4 = var3[var1];
                            var5 = var2.bind(var0)(var4);
                            var4 = var5.isJest;
                            var7 = var4.bind(var5)();
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            if (var7) {
                                _fun33101_ip = 158;
                                continue _fun33101
                            }
                        case 79:
                            var1 = var5[var1];
                            var7 = var4.bind(var0)(var1);
                            var1 = var7.isChromeDebugger;
                            var1 = var1.bind(var7)();
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var6 = 9;
                            var6 = var8[var6];
                            var6 = var7.bind(var0)(var6);
                            var7 = var6.logger;
                            var6 = var7.warn;
                            if (var1) {
                                _fun33101_ip = 145;
                                continue _fun33101
                            }
                        case 132:
                            var1 = 'Layout Animations are not supported on this configuration.';
                            var1 = var6.bind(var7)(var1);
                            _fun33101_ip = 228;
                            continue _fun33101;
                        case 145:
                            var1 = 'Layout Animations are no-ops when using Chrome Debugger.';
                            var1 = var6.bind(var7)(var1);
                            _fun33101_ip = 228;
                            continue _fun33101;
                        case 158:
                            var1 = 9;
                            var1 = var5[var1];
                            var1 = var4.bind(var0)(var1);
                            var5 = var1.logger;
                            var4 = var5.warn;
                            var1 = 'Layout Animations are no-ops when using Jest.';
                            var1 = var4.bind(var5)(var1);
                            _fun33101_ip = 228;
                            continue _fun33101;
                        case 194:
                            var1 = 9;
                            var1 = var3[var1];
                            var1 = var2.bind(var0)(var1);
                            var3 = var1.logger;
                            var2 = var3.warn;
                            var1 = 'Layout Animations are not supported on web yet.';
                            var1 = var2.bind(var3)(var1);
                        case 228:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[5] = var0;
                var0 = {};
                var5 = 'configureLayoutAnimationBatch';
                var0.key = var5;
                var5 = function() {
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[6] = var0;
                var0 = {};
                var5 = 'setShouldAnimateExitingForTag';
                var0.key = var5;
                var5 = function() {
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[7] = var0;
                var0 = {};
                var5 = 'registerSensor';
                var0.key = var5;
                var5 = function arg0, arg1, arg2, arg3() {
                    _fun33104: for (var _fun33104_ip = 0;;) switch (_fun33104_ip) {
                        case 0:
                            var5 = arg0;
                            var2 = this;
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var9 = 4;
                            var3 = var1[var9];
                            var1 = undefined;
                            var4 = var4.bind(var1)(var3);
                            var3 = var4.isWindowAvailable;
                            var3 = var3.bind(var4)();
                            if (var3) {
                                _fun33104_ip = 52;
                                continue _fun33104
                            }
                        case 44:
                            var3 = -1;
                            return var3;
                        case 52:
                            var3 = var2.platform;
                            if (!(var1 === var3)) {
                                _fun33104_ip = 72;
                                continue _fun33104
                            }
                        case 62:
                            var3 = var2.detectPlatform;
                            var3 = var3.bind(var2)();
                        case 72:
                            var3 = var2.getSensorName;
                            var4 = var3.bind(var2)(var5);
                            var8 = global;
                            var3 = var8.window;
                            var3 = var4 in var3;
                            if (var3) {
                                _fun33104_ip = 245;
                                continue _fun33104
                            }
                        case 103:
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot1;
                            var3 = 9;
                            var3 = var6[var3];
                            var3 = var7.bind(var1)(var3);
                            var4 = var3.logger;
                            var3 = var4.warn;
                            var6 = var6[var9];
                            var7 = var7.bind(var1)(var6);
                            var6 = var7.isWeb;
                            var9 = var6.bind(var7)();
                            var6 = '';
                            var7 = var6;
                            if (!var9) {
                                _fun33104_ip = 192;
                                continue _fun33104
                            }
                        case 163:
                            var8 = var8.location;
                            var9 = var8.protocol;
                            var8 = 'https:';
                            var7 = var6;
                            if (!(var8 !== var9)) {
                                _fun33104_ip = 192;
                                continue _fun33104
                            }
                        case 186:
                            var7 = ' Make sure you use secure origin with `npx expo start --web --https`.';
                        case 192:
                            var8 = var2.platform;
                            var0 = _closure1_slot8;
                            var0 = var0.WEB_IOS;
                            if (!(var8 === var0)) {
                                _fun33104_ip = 218;
                                continue _fun33104
                            }
                        case 212:
                            var6 = ' For iOS web, you will also have to also grant permission in the browser: https://dev.to/li/how-to-requestpermission-for-devicemotion-and-deviceorientation-events-in-ios-13-46g2.';
                        case 218:
                            var0 = 'Sensor is not available.';
                            var0 = var0 + var7;
                            var0 = var0 + var6;
                            var0 = var3.bind(var4)(var0);
                            var0 = -1;
                            return var0;
                        case 245:
                            var0 = var2.platform;
                            if (!(var1 === var0)) {
                                _fun33104_ip = 265;
                                continue _fun33104
                            }
                        case 255:
                            var0 = var2.detectPlatform;
                            var0 = var0.bind(var2)();
                        case 265:
                            var1 = var2.initializeSensor;
                            var0 = arg1;
                            var4 = var1.bind(var2)(var5, var0);
                            var3 = var4.addEventListener;
                            var1 = var2.getSensorCallback;
                            var0 = arg3;
                            var1 = var1.bind(var2)(var4, var5, var0);
                            var0 = 'reading';
                            var0 = var3.bind(var4)(var0, var1);
                            var0 = var4.start;
                            var0 = var0.bind(var4)();
                            var3 = var2.sensors;
                            var1 = var3.set;
                            var0 = var2.nextSensorId;
                            var0 = var1.bind(var3)(var0, var4);
                            var0 = var2.nextSensorId;
                            var0 = parseFloat(var0);
                            var1 = var0 + 1;
                            var2.nextSensorId = var1;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[8] = var0;
                var0 = {};
                var5 = 'unregisterSensor';
                var0.key = var5;
                var5 = function arg0() {
                    _fun33105: for (var _fun33105_ip = 0;;) switch (_fun33105_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = this;
                            var2 = var1.sensors;
                            var0 = var2.get;
                            var4 = var0.bind(var2)(var3);
                            var0 = undefined;
                            if (!(var0 !== var4)) {
                                _fun33105_ip = 54;
                                continue _fun33105
                            }
                        case 28:
                            var2 = var4.stop;
                            var2 = var2.bind(var4)();
                            var2 = var1.sensors;
                            var1 = var2.delete;
                            var1 = var1.bind(var2)(var3);
                        case 54:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[9] = var0;
                var0 = {};
                var5 = 'subscribeForKeyboardEvents';
                var0.key = var5;
                var5 = function arg0() {
                    _fun33106: for (var _fun33106_ip = 0;;) switch (_fun33106_ip) {
                        case 0:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var0 = 4;
                            var1 = var1[var0];
                            var2 = undefined;
                            var3 = var3.bind(var2)(var1);
                            var1 = var3.isWeb;
                            var4 = var1.bind(var3)();
                            var1 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            if (var4) {
                                _fun33106_ip = 194;
                                continue _fun33106
                            }
                        case 49:
                            var4 = var3[var0];
                            var5 = var1.bind(var2)(var4);
                            var4 = var5.isJest;
                            var7 = var4.bind(var5)();
                            var4 = _closure1_slot0;
                            var5 = _closure1_slot1;
                            if (var7) {
                                _fun33106_ip = 158;
                                continue _fun33106
                            }
                        case 79:
                            var0 = var5[var0];
                            var7 = var4.bind(var2)(var0);
                            var0 = var7.isChromeDebugger;
                            var0 = var0.bind(var7)();
                            var7 = _closure1_slot0;
                            var8 = _closure1_slot1;
                            var6 = 9;
                            var6 = var8[var6];
                            var6 = var7.bind(var2)(var6);
                            var7 = var6.logger;
                            var6 = var7.warn;
                            if (var0) {
                                _fun33106_ip = 145;
                                continue _fun33106
                            }
                        case 132:
                            var0 = 'useAnimatedKeyboard is not available on this configuration.';
                            var0 = var6.bind(var7)(var0);
                            _fun33106_ip = 228;
                            continue _fun33106;
                        case 145:
                            var0 = 'useAnimatedKeyboard is not available when using Chrome Debugger.';
                            var0 = var6.bind(var7)(var0);
                            _fun33106_ip = 228;
                            continue _fun33106;
                        case 158:
                            var0 = 9;
                            var0 = var5[var0];
                            var0 = var4.bind(var2)(var0);
                            var5 = var0.logger;
                            var4 = var5.warn;
                            var0 = 'useAnimatedKeyboard is not available when using Jest.';
                            var0 = var4.bind(var5)(var0);
                            _fun33106_ip = 228;
                            continue _fun33106;
                        case 194:
                            var0 = 9;
                            var0 = var3[var0];
                            var0 = var1.bind(var2)(var0);
                            var2 = var0.logger;
                            var1 = var2.warn;
                            var0 = 'useAnimatedKeyboard is not available on web yet.';
                            var0 = var1.bind(var2)(var0);
                        case 228:
                            var0 = -1;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[10] = var0;
                var0 = {};
                var5 = 'unsubscribeFromKeyboardEvents';
                var0.key = var5;
                var5 = function arg0() {
                    var0 = undefined;
                    return var0;
                };
                var0.value = var5;
                var1[11] = var0;
                var0 = {};
                var5 = 'initializeSensor';
                var0.key = var5;
                var5 = function arg0, arg1() {
                    _fun33108: for (var _fun33108_ip = 0;;) switch (_fun33108_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = arg1;
                            var0 = 0;
                            if (!(!(var1 <= var0))) {
                                _fun33108_ip = 31;
                                continue _fun33108
                            }
                        case 12:
                            var2 = {};
                            var0 = 1000;
                            var0 = var0 / var1;
                            var2.frequency = var0;
                            _fun33108_ip = 47;
                            continue _fun33108;
                        case 31:
                            var0 = {};
                            var1 = 'device';
                            var0.referenceFrame = var1;
                            var2 = var0;
                        case 47:
                            var6 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var5 = 7;
                            var4 = var0[var5];
                            var0 = undefined;
                            var4 = var6.bind(var0)(var4);
                            var4 = var4.SensorType;
                            var4 = var4.ACCELEROMETER;
                            if (!(var4 !== var3)) {
                                _fun33108_ip = 395;
                                continue _fun33108
                            }
                        case 91:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var5];
                            var4 = var6.bind(var0)(var4);
                            var4 = var4.SensorType;
                            var4 = var4.GYROSCOPE;
                            if (!(var4 !== var3)) {
                                _fun33108_ip = 354;
                                continue _fun33108
                            }
                        case 127:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var5];
                            var4 = var6.bind(var0)(var4);
                            var4 = var4.SensorType;
                            var4 = var4.GRAVITY;
                            if (!(var4 !== var3)) {
                                _fun33108_ip = 313;
                                continue _fun33108
                            }
                        case 163:
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot1;
                            var4 = var4[var5];
                            var4 = var6.bind(var0)(var4);
                            var4 = var4.SensorType;
                            var4 = var4.MAGNETIC_FIELD;
                            if (!(var4 !== var3)) {
                                _fun33108_ip = 272;
                                continue _fun33108
                            }
                        case 196:
                            var4 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var5];
                            var1 = var4.bind(var0)(var1);
                            var1 = var1.SensorType;
                            var1 = var1.ROTATION;
                            if (!(var1 !== var3)) {
                                _fun33108_ip = 231;
                                continue _fun33108
                            }
                        case 229:
                            return var0;
                        case 231:
                            var0 = global;
                            var0 = var0.window;
                            var0 = var0.AbsoluteOrientationSensor;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var8 = var1;
                            var7 = var2;
                            var0 = new var8[var0](var7, var6);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        case 272:
                            var0 = global;
                            var0 = var0.window;
                            var0 = var0.Magnetometer;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var8 = var1;
                            var7 = var2;
                            var0 = new var8[var0](var7, var6);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        case 313:
                            var0 = global;
                            var0 = var0.window;
                            var0 = var0.GravitySensor;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var8 = var1;
                            var7 = var2;
                            var0 = new var8[var0](var7, var6);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        case 354:
                            var0 = global;
                            var0 = var0.window;
                            var0 = var0.Gyroscope;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var8 = var1;
                            var7 = var2;
                            var0 = new var8[var0](var7, var6);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                        case 395:
                            var0 = global;
                            var0 = var0.window;
                            var0 = var0.Accelerometer;
                            var1 = var0.prototype;
                            var1 = Object.create(var1, {
                                constructor: {
                                    value: var0
                                }
                            });
                            var8 = var1;
                            var7 = var2;
                            var0 = new var8[var0](var7, var6);
                            var0 = var0 instanceof Object ? var0 : var1;
                            return var0;
                    }
                };
                var0.value = var5;
                var1[12] = var0;
                var0 = {};
                var5 = 'getSensorName';
                var0.key = var5;
                var5 = function arg0() {
                    _fun33109: for (var _fun33109_ip = 0;;) switch (_fun33109_ip) {
                        case 0:
                            var2 = arg0;
                            var5 = _closure1_slot0;
                            var0 = _closure1_slot1;
                            var4 = 7;
                            var3 = var0[var4];
                            var0 = undefined;
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.SensorType;
                            var3 = var3.ACCELEROMETER;
                            if (!(var3 !== var2)) {
                                _fun33109_ip = 216;
                                continue _fun33109
                            }
                        case 47:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var4];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.SensorType;
                            var3 = var3.GRAVITY;
                            if (!(var3 !== var2)) {
                                _fun33109_ip = 208;
                                continue _fun33109
                            }
                        case 83:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var4];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.SensorType;
                            var3 = var3.GYROSCOPE;
                            if (!(var3 !== var2)) {
                                _fun33109_ip = 200;
                                continue _fun33109
                            }
                        case 116:
                            var5 = _closure1_slot0;
                            var3 = _closure1_slot1;
                            var3 = var3[var4];
                            var3 = var5.bind(var0)(var3);
                            var3 = var3.SensorType;
                            var3 = var3.MAGNETIC_FIELD;
                            if (!(var3 !== var2)) {
                                _fun33109_ip = 192;
                                continue _fun33109
                            }
                        case 149:
                            var3 = _closure1_slot0;
                            var1 = _closure1_slot1;
                            var1 = var1[var4];
                            var1 = var3.bind(var0)(var1);
                            var1 = var1.SensorType;
                            var1 = var1.ROTATION;
                            if (!(var1 !== var2)) {
                                _fun33109_ip = 184;
                                continue _fun33109
                            }
                        case 182:
                            return var0;
                        case 184:
                            var0 = 'AbsoluteOrientationSensor';
                            return var0;
                        case 192:
                            var0 = 'Magnetometer';
                            return var0;
                        case 200:
                            var0 = 'Gyroscope';
                            return var0;
                        case 208:
                            var0 = 'GravitySensor';
                            return var0;
                        case 216:
                            var0 = 'Accelerometer';
                            return var0;
                    }
                };
                var0.value = var5;
                var1[13] = var0;
                var0 = {};
                var5 = 'getSettledUpdates';
                var0.key = var5;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = '`getSettledUpdates` is not available in JSReanimated.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0.value = var5;
                var1[14] = var0;
                var0 = {};
                var5 = 'detectPlatform';
                var0.key = var5;
                var5 = function() {
                    _fun33111: for (var _fun33111_ip = 0;;) switch (_fun33111_ip) {
                        case 0:
                            var2 = this;
                            var0 = global;
                            var1 = var0.navigator;
                            var5 = var1.userAgent;
                            if (var5) {
                                _fun33111_ip = 32;
                                continue _fun33111
                            }
                        case 20:
                            var1 = var0.navigator;
                            var5 = var1.vendor;
                        case 32:
                            if (var5) {
                                _fun33111_ip = 47;
                                continue _fun33111
                            }
                        case 35:
                            var0 = var0.window;
                            var5 = var0.opera;
                        case 47:
                            var0 = undefined;
                            if (!(var0 !== var5)) {
                                _fun33111_ip = 160;
                                continue _fun33111
                            }
                        case 53:
                            var3 = /iPad|iPhone|iPod/;
                            var1 = var3.test;
                            var3 = var1.bind(var3)(var5);
                            if (var3) {
                                _fun33111_ip = 142;
                                continue _fun33111
                            }
                        case 83:
                            var4 = /android/i;
                            var3 = var4.test;
                            var4 = var3.bind(var4)(var5);
                            var3 = _closure1_slot8;
                            if (var4) {
                                _fun33111_ip = 128;
                                continue _fun33111
                            }
                        case 114:
                            var4 = var3.WEB;
                            var2.platform = var4;
                            _fun33111_ip = 179;
                            continue _fun33111;
                        case 128:
                            var3 = var3.WEB_ANDROID;
                            var2.platform = var3;
                            _fun33111_ip = 179;
                            continue _fun33111;
                        case 142:
                            var1 = _closure1_slot8;
                            var1 = var1.WEB_IOS;
                            var2.platform = var1;
                            _fun33111_ip = 179;
                            continue _fun33111;
                        case 160:
                            var1 = _closure1_slot8;
                            var1 = var1.UNKNOWN;
                            var2.platform = var1;
                        case 179:
                            return var0;
                    }
                };
                var0.value = var5;
                var1[15] = var0;
                var0 = {};
                var5 = 'getViewProp';
                var0.key = var5;
                var5 = function arg0, arg1, arg2, arg3() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'getViewProp is not available in JSReanimated.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0.value = var5;
                var1[16] = var0;
                var0 = {};
                var5 = 'configureProps';
                var0.key = var5;
                var5 = function() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'configureProps is not available in JSReanimated.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0.value = var5;
                var1[17] = var0;
                var0 = {};
                var5 = 'executeOnUIRuntimeSync';
                var0.key = var5;
                var5 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = '`executeOnUIRuntimeSync` is not available in JSReanimated.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0.value = var5;
                var1[18] = var0;
                var0 = {};
                var5 = 'markNodeAsRemovable';
                var0.key = var5;
                var5 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'markNodeAsRemovable is not available in JSReanimated.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0.value = var5;
                var1[19] = var0;
                var0 = {};
                var5 = 'unmarkNodeAsRemovable';
                var0.key = var5;
                var5 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'unmarkNodeAsRemovable is not available in JSReanimated.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0.value = var5;
                var1[20] = var0;
                var0 = {};
                var5 = 'setNodeRemovalCallback';
                var0.key = var5;
                var4 = function arg0() {
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 8;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.ReanimatedError;
                    var0 = var2.prototype;
                    var1 = Object.create(var0, {
                        constructor: {
                            value: var2
                        }
                    });
                    var3 = 'setNodeRemovalCallback is not available in JSReanimated.';
                    var4 = var1;
                    var0 = new var4[var2](var3, var2);
                    var0 = var0 instanceof Object ? var0 : var1;
                    throw var0;
                };
                var0.value = var4;
                var1[21] = var0;
                var0 = undefined;
                var0 = var3.bind(var0)(var2, var1);
                return var0;
            };
            var1 = var1.bind(var0)();
            var _closure1_slot7 = var1;
            var1 = {};
            var4 = 'web iOS';
            var1.WEB_IOS = var4;
            var4 = 'web Android';
            var1.WEB_ANDROID = var4;
            var4 = 'web';
            var1.WEB = var4;
            var4 = 'unknown';
            var1.UNKNOWN = var4;
            var _closure1_slot8 = var1;
            var3 = function() {
                var0 = _closure1_slot7;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var2 = var1;
                var0 = new var2[var0](var1);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
            var2.createJSReanimatedModule = var3;
            var2.Platform = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [57, 6, 7, 100, 3683, 3695, 3696, 3705, 3691, 3684]);