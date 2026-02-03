// modules/device/ThermalUtils.native.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun63992: for (var _fun63992_ip = 0;;) switch (_fun63992_ip) {
        case 0:
            var4 = require;
            var8 = metroImportDefault;
            var2 = exports;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var8;
            var _closure1_slot2 = var5;
            var0 = global;
            var7 = var0.Object;
            var6 = var7.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var6.bind(var7)(var2, var0, var1);
            var0 = 0;
            var1 = var5[var0];
            var0 = undefined;
            var1 = var4.bind(var0)(var1);
            var7 = var1.NativeEventEmitter;
            var1 = var1.NativeModules;
            var _closure1_slot3 = var1;
            var6 = 1;
            var6 = var5[var6];
            var9 = var4.bind(var0)(var6);
            var6 = var9.isAndroid;
            var6 = var6.bind(var9)();
            if (var6) {
                _fun63992_ip = 120;
                continue _fun63992
            }
        case 112:
            var1 = var1.DCDDeviceThermalStateManager;
            _fun63992_ip = 132;
            continue _fun63992;
        case 120:
            var6 = 2;
            var6 = var5[var6];
            var1 = var8.bind(var0)(var6);
        case 132:
            var6 = var7.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var7
                }
            });
            var13 = var6;
            var12 = var1;
            var1 = new var13[var7](var12, var11);
            var1 = var1 instanceof Object ? var1 : var6;
            var _closure1_slot4 = var1;
            var1 = 4;
            var1 = var5[var1];
            var7 = var4.bind(var0)(var1);
            var6 = var7.create;
            var1 = function(arg0) { // Environment: var3
                _fun63993: for (var _fun63993_ip = 0;;) switch (_fun63993_ip) {
                    case 0:
                        var1 = arg0;
                        var _closure2_slot0 = var1;
                        var5 = function arg0() {
                            var0 = arg0;
                            var _closure3_slot0 = var0;
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot2;
                            var0 = 5;
                            var2 = var2[var0];
                            var0 = undefined;
                            var3 = var3.bind(var0)(var2);
                            var2 = var3.batchUpdates;
                            var1 = function() { // Environment: var1
                                var2 = _closure2_slot0;
                                var1 = undefined;
                                var0 = function(arg0) { // Environment: var0
                                    _fun63996: for (var _fun63996_ip = 0;;) switch (_fun63996_ip) {
                                        case 0:
                                            var0 = arg0;
                                            var3 = var0.rawThermalState;
                                            var1 = _closure3_slot0;
                                            if (!(var3 !== var1)) {
                                                _fun63996_ip = 34;
                                                continue _fun63996
                                            }
                                        case 20:
                                            var1 = {};
                                            var2 = _closure3_slot0;
                                            var1.rawThermalState = var2;
                                            var0 = var1;
                                        case 34:
                                            return var0;
                                    }
                                };
                                var0 = var2.bind(var1)(var0);
                                return var0;
                            };
                            var1 = var2.bind(var3)(var1);
                            return var0;
                        };
                        var _closure2_slot1 = var5;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot2;
                        var1 = 1;
                        var3 = var3[var1];
                        var1 = undefined;
                        var4 = var4.bind(var1)(var3);
                        var3 = var4.isAndroid;
                        var3 = var3.bind(var4)();
                        if (var3) {
                            _fun63993_ip = 78;
                            continue _fun63993
                        }
                    case 56:
                        var3 = _closure1_slot3;
                        var4 = var3.DCDDeviceThermalStateManager;
                        var3 = var4.getThermalState;
                        var4 = var3.bind(var4)();
                        _fun63993_ip = 197;
                        continue _fun63993;
                    case 78:
                        var6 = global;
                        var7 = var6.parseInt;
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 3;
                        var3 = var9[var3];
                        var8 = var8.bind(var1)(var3);
                        var3 = var8.getSystemVersion;
                        var3 = var3.bind(var8)();
                        var7 = var7.bind(var1)(var3);
                        var3 = 29;
                        if (!(!(var7 >= var3))) {
                            _fun63993_ip = 147;
                            continue _fun63993
                        }
                    case 128:
                        var7 = var6.Promise;
                        var3 = var7.resolve;
                        var3 = var3.bind(var7)(var1);
                        _fun63993_ip = 194;
                        continue _fun63993;
                    case 147:
                        var8 = var6.Promise;
                        var7 = var8.resolve;
                        var9 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var6 = 2;
                        var6 = var10[var6];
                        var9 = var9.bind(var1)(var6);
                        var6 = var9.getThermalState;
                        var6 = var6.bind(var9)();
                        var3 = var7.bind(var8)(var6);
                    case 194:
                        var4 = var3;
                    case 197:
                        var3 = var4.then;
                        var3 = var3.bind(var4)(var5);
                        var4 = _closure1_slot4;
                        var3 = var4.addListener;
                        var2 = 'DeviceThermalStateDidChange';
                        var0 = function(arg0) { // Environment: var0
                            var0 = arg0;
                            var2 = var0.state;
                            var1 = _closure2_slot1;
                            var0 = undefined;
                            var1 = var1.bind(var0)(var2);
                            return var0;
                        };
                        var0 = var3.bind(var4)(var2, var0);
                        var0 = {};
                        var0.rawThermalState = var1;
                        return var0;
                }
            };
            var1 = var6.bind(var7)(var1);
            var _closure1_slot5 = var1;
            var1 = {};
            var6 = function() {
                var1 = _closure1_slot5;
                var0 = var1.getState;
                var0 = var0.bind(var1)();
                var0 = var0.rawThermalState;
                return var0;
            };
            var1.getRawThermalState = var6;
            var6 = function() {
                var2 = _closure1_slot5;
                var1 = undefined;
                var0 = function(arg0) { // Environment: var0
                    var0 = arg0;
                    var0 = var0.rawThermalState;
                    return var0;
                };
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var1.useRawThermalState = var6;
            var3 = function arg0() {
                var0 = {};
                var3 = _closure1_slot5;
                var2 = var3.subscribe;
                var1 = arg0;
                var1 = var2.bind(var3)(var1);
                var0.remove = var1;
                return var0;
            };
            var1.addListener = var3;
            var3 = 6;
            var3 = var5[var3];
            var5 = var4.bind(var0)(var3);
            var4 = var5.fileFinishedImporting;
            var3 = 'modules/device/ThermalUtils.native.tsx';
            var3 = var4.bind(var5)(var3);
            var2.default = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [27, 478, 7945, 1309, 629, 802, 2]);