// utils/native/DeviceUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun14202: for (var _fun14202_ip = 0;;) switch (_fun14202_ip) {
        case 0:
            var5 = require;
            var9 = metroImportDefault;
            var2 = exports;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var9;
            var _closure1_slot2 = var6;
            var3 = function() {
                var0 = _closure1_slot3;
                var0 = var0.device;
                return var0;
            };
            var _closure1_slot6 = var3;
            var0 = global;
            var8 = var0.Object;
            var7 = var8.defineProperty;
            var4 = {};
            var0 = true;
            var4.value = var0;
            var0 = '__esModule';
            var0 = var7.bind(var8)(var2, var0, var4);
            var0 = 0;
            var4 = var6[var0];
            var0 = undefined;
            var4 = var5.bind(var0)(var4);
            var4 = var4.NativeModules;
            var7 = 1;
            var7 = var6[var7];
            var8 = var5.bind(var0)(var7);
            var7 = var8.isAndroid;
            var7 = var7.bind(var8)();
            if (var7) {
                _fun14202_ip = 119;
                continue _fun14202
            }
        case 111:
            var4 = var4.DCDDeviceManager;
            _fun14202_ip = 164;
            continue _fun14202;
        case 119:
            var8 = 2;
            var7 = var6[var8];
            var10 = var9.bind(var0)(var7);
            var7 = null;
            var10 = var7 == var10;
            var7 = undefined;
            if (var10) {
                _fun14202_ip = 161;
                continue _fun14202
            }
        case 142:
            var8 = var6[var8];
            var9 = var9.bind(var0)(var8);
            var8 = var9.getConstants;
            var7 = var8.bind(var9)();
        case 161:
            var4 = var7;
        case 164:
            var _closure1_slot3 = var4;
            var4 = null;
            var _closure1_slot4 = var4;
            var4 = 'mediaPerformanceClass';
            var _closure1_slot5 = var4;
            var4 = 4;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.fileFinishedImporting;
            var4 = 'utils/native/DeviceUtils.tsx';
            var4 = var5.bind(var6)(var4);
            var4 = function() {
                var0 = _closure1_slot3;
                var1 = var0.deviceModel;
                var0 = 'iPad';
                var0 = var0 === var1;
                return var0;
            };
            var2.isIpadOS = var4;
            var4 = function() {
                var0 = _closure1_slot3;
                var0 = var0.isGestureNavigationEnabled;
                return var0;
            };
            var2.isGestureNavigationEnabled = var4;
            var4 = function() {
                var0 = _closure1_slot3;
                var0 = var0.systemVersion;
                return var0;
            };
            var2.getSystemVersion = var4;
            var2.getDevice = var3;
            var3 = function() {
                _fun14207: for (var _fun14207_ip = 0;;) switch (_fun14207_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 1;
                        var0 = var3[var0];
                        var3 = undefined;
                        var2 = var2.bind(var3)(var0);
                        var0 = var2.isAndroid;
                        var0 = var0.bind(var2)();
                        var2 = _closure1_slot6;
                        var3 = var2.bind(var3)();
                        if (var0) {
                            _fun14207_ip = 51;
                            continue _fun14207
                        }
                    case 46:
                        var0 = var3;
                        _fun14207_ip = 83;
                        continue _fun14207;
                    case 51:
                        var2 = ' (';
                        var2 = var3 + var2;
                        var1 = _closure1_slot3;
                        var1 = var1.deviceModel;
                        var2 = var2 + var1;
                        var1 = ')';
                        var0 = var2 + var1;
                    case 83:
                        return var0;
                }
            };
            var2.getDeviceInfo = var3;
            var3 = function() {
                _fun14208: for (var _fun14208_ip = 0;;) switch (_fun14208_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var0 = 1;
                        var0 = var3[var0];
                        var4 = undefined;
                        var2 = var2.bind(var4)(var0);
                        var0 = var2.isAndroid;
                        var2 = var0.bind(var2)();
                        var5 = null;
                        var0 = null;
                        if (!var2) {
                            _fun14208_ip = 186;
                            continue _fun14208
                        }
                    case 45:
                        var2 = _closure1_slot4;
                        var2 = var5 == var2;
                        if (!var2) {
                            _fun14208_ip = 104;
                            continue _fun14208
                        }
                    case 56:
                        var6 = _closure1_slot0;
                        var7 = _closure1_slot2;
                        var3 = 3;
                        var3 = var7[var3];
                        var3 = var6.bind(var4)(var3);
                        var7 = var3.Storage;
                        var6 = var7.get;
                        var3 = _closure1_slot5;
                        var3 = var6.bind(var7)(var3);
                        _closure1_slot4 = var3;
                        var2 = var5 == var3;
                    case 104:
                        if (!var2) {
                            _fun14208_ip = 182;
                            continue _fun14208
                        }
                    case 107:
                        var3 = _closure1_slot1;
                        var5 = _closure1_slot2;
                        var2 = 2;
                        var2 = var5[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.getMediaPerformanceClass;
                        var2 = var2.bind(var3)();
                        _closure1_slot4 = var2;
                        var3 = _closure1_slot0;
                        var2 = 3;
                        var2 = var5[var2];
                        var2 = var3.bind(var4)(var2);
                        var5 = var2.Storage;
                        var4 = var5.set;
                        var3 = _closure1_slot5;
                        var2 = _closure1_slot4;
                        var2 = var4.bind(var5)(var3, var2);
                    case 182:
                        var0 = _closure1_slot4;
                    case 186:
                        return var0;
                }
            };
            var2.getDeviceMediaPerformanceClass = var3;
            var3 = function() {
                var0 = _closure1_slot3;
                var0 = var0.deviceModel;
                return var0;
            };
            var2.getDeviceModel = var3;
            var3 = function() {
                var0 = _closure1_slot3;
                var0 = var0.deviceBrand;
                return var0;
            };
            var2.getDeviceBrand = var3;
            var3 = function() {
                var0 = _closure1_slot3;
                var0 = var0.deviceProduct;
                return var0;
            };
            var2.getDeviceProduct = var3;
            var3 = function() {
                var0 = _closure1_slot3;
                var0 = var0.deviceManufacturer;
                return var0;
            };
            var2.getDeviceManufacturer = var3;
            var3 = function() {
                var0 = _closure1_slot3;
                var0 = var0.smallestScreenWidth;
                return var0;
            };
            var2.getSmallestScreenWidth = var3;
            var3 = function() {
                var0 = _closure1_slot3;
                var0 = var0.socName;
                return var0;
            };
            var2.getSocName = var3;
            var3 = function() {
                _fun14215: for (var _fun14215_ip = 0;;) switch (_fun14215_ip) {
                    case 0:
                        var0 = _closure1_slot3;
                        var3 = var0.ramSize;
                        var2 = undefined;
                        var1 = '';
                        var0 = undefined;
                        if (!(var1 !== var3)) {
                            _fun14215_ip = 38;
                            continue _fun14215
                        }
                    case 25:
                        var1 = global;
                        var1 = var1.parseFloat;
                        var0 = var1.bind(var2)(var3);
                    case 38:
                        return var0;
                }
            };
            var2.getRamSize = var3;
            var3 = function() {
                _fun14216: for (var _fun14216_ip = 0;;) switch (_fun14216_ip) {
                    case 0:
                        var0 = _closure1_slot3;
                        var3 = var0.maxCpuFreq;
                        var2 = undefined;
                        var1 = '';
                        var0 = undefined;
                        if (!(var1 !== var3)) {
                            _fun14216_ip = 38;
                            continue _fun14216
                        }
                    case 25:
                        var1 = global;
                        var1 = var1.parseFloat;
                        var0 = var1.bind(var2)(var3);
                    case 38:
                        return var0;
                }
            };
            var2.getMaxCpuFreq = var3;
            var3 = function() {
                var0 = _closure1_slot3;
                var0 = var0.timeZone;
                return var0;
            };
            var2.getTimeZone = var3;
            var1 = function() {
                var0 = _closure1_slot3;
                var0 = var0.isRunningOnSimulator;
                return var0;
            };
            var2.getIsRunningOnSimulator = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 655, 587, 2]);