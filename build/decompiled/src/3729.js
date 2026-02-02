// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var0 = require;
    var _closure1_slot0 = var0;
    var _closure1_slot1 = var5;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var3);
    var0 = 0;
    var3 = var5[var0];
    var0 = undefined;
    var3 = var4.bind(var0)(var3);
    var _closure1_slot2 = var3;
    var3 = 1;
    var3 = var5[var3];
    var3 = var4.bind(var0)(var3);
    var _closure1_slot3 = var3;
    var1 = function() { // Environment: var1
        var3 = _closure1_slot3;
        var2 = function arg0, arg1() {
            _fun33531: for (var _fun33531_ip = 0;;) switch (_fun33531_ip) {
                case 0:
                    var4 = arg0;
                    var2 = this;
                    var5 = _closure1_slot2;
                    var1 = _closure2_slot0;
                    var0 = undefined;
                    var1 = var5.bind(var0)(var2, var1);
                    var1 = 0;
                    var2.listenersNumber = var1;
                    var1 = null;
                    var2.sensorId = var1;
                    var2.sensorType = var4;
                    var1 = arg1;
                    var2.config = var1;
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot1;
                    var1 = 2;
                    var1 = var6[var1];
                    var1 = var5.bind(var0)(var1);
                    var1 = var1.SensorType;
                    var1 = var1.ROTATION;
                    if (!(var4 !== var1)) {
                        _fun33531_ip = 142;
                        continue _fun33531
                    }
                case 95:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var1 = 3;
                    var1 = var5[var1];
                    var5 = var4.bind(var0)(var1);
                    var4 = var5.makeMutable;
                    var1 = {
                        'x': 0,
                        'y': 0,
                        'z': 0,
                        'interfaceOrientation': 0
                    };
                    var1 = var4.bind(var5)(var1);
                    _fun33531_ip = 187;
                    continue _fun33531;
                case 142:
                    var4 = _closure1_slot0;
                    var5 = _closure1_slot1;
                    var3 = 3;
                    var3 = var5[var3];
                    var5 = var4.bind(var0)(var3);
                    var4 = var5.makeMutable;
                    var3 = {
                        'qw': 0,
                        'qx': 0,
                        'qy': 0,
                        'qz': 0,
                        'yaw': 0,
                        'pitch': 0,
                        'roll': 0,
                        'interfaceOrientation': 0
                    };
                    var1 = var4.bind(var5)(var3);
                case 187:
                    var2.data = var1;
                    return var0;
            }
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'register';
        var0.key = var1;
        var1 = function arg0() {
            _fun33532: for (var _fun33532_ip = 0;;) switch (_fun33532_ip) {
                case 0:
                    var0 = this;
                    var2 = var0.config;
                    var7 = var0.sensorType;
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 4;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var6 = var1.ReanimatedModule;
                    var5 = var6.registerSensor;
                    var8 = var2.interval;
                    var1 = -1;
                    var3 = 'auto';
                    var4 = var1;
                    if (!(var3 !== var8)) {
                        _fun33532_ip = 80;
                        continue _fun33532
                    }
                case 74:
                    var4 = var2.interval;
                case 80:
                    var10 = var2.iosReferenceFrame;
                    var9 = arg0;
                    var13 = var6;
                    var12 = var7;
                    var11 = var4;
                    var2 = var13[var5](var12, var11, var10, var9, var8);
                    var0.sensorId = var2;
                    var0 = var0.sensorId;
                    var0 = var1 !== var0;
                    return var0;
            }
        };
        var0.value = var1;
        var1 = new Array(5);
        var1[0] = var0;
        var0 = {};
        var5 = 'isRunning';
        var0.key = var5;
        var5 = function() {
            _fun33533: for (var _fun33533_ip = 0;;) switch (_fun33533_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.sensorId;
                    var0 = -1;
                    var0 = var0 !== var2;
                    if (!var0) {
                        _fun33533_ip = 34;
                        continue _fun33533
                    }
                case 22:
                    var2 = var1.sensorId;
                    var1 = null;
                    var0 = var1 !== var2;
                case 34:
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'isAvailable';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var1 = var0.sensorId;
            var0 = -1;
            var0 = var0 !== var1;
            return var0;
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'getSharedValue';
        var0.key = var5;
        var5 = function() {
            var0 = this;
            var0 = var0.data;
            return var0;
        };
        var0.value = var5;
        var1[3] = var0;
        var0 = {};
        var5 = 'unregister';
        var0.key = var5;
        var4 = function() {
            _fun33536: for (var _fun33536_ip = 0;;) switch (_fun33536_ip) {
                case 0:
                    var1 = this;
                    var2 = var1.sensorId;
                    var0 = null;
                    var2 = var0 !== var2;
                    if (!var2) {
                        _fun33536_ip = 34;
                        continue _fun33536
                    }
                case 18:
                    var4 = var1.sensorId;
                    var3 = -1;
                    var2 = var3 !== var4;
                case 34:
                    if (!var2) {
                        _fun33536_ip = 85;
                        continue _fun33536
                    }
                case 37:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var2 = 4;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.ReanimatedModule;
                    var3 = var4.unregisterSensor;
                    var2 = var1.sensorId;
                    var2 = var3.bind(var4)(var2);
                case 85:
                    var1.sensorId = var0;
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[4] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3707, 3719, 3690]);