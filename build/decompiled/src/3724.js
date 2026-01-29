// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = metroImportDefault;
    var2 = exports;
    var5 = dependencyMap;
    var _closure1_slot0 = var4;
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
        var2 = function() { // Original name: SensorContainer, environment: var4
            var2 = this;
            var3 = _closure1_slot2;
            var1 = _closure2_slot0;
            var0 = undefined;
            var1 = var3.bind(var0)(var2, var1);
            var1 = global;
            var1 = var1.Map;
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var6 = var3;
            var1 = new var6[var1](var5);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.nativeSensors = var1;
            return var0;
        };
        var _closure2_slot0 = var2;
        var0 = {};
        var1 = 'getSensorId';
        var0.key = var1;
        var1 = function(arg0, arg1) { // Original name: getSensorId, environment: var4
            var1 = arg1;
            var2 = 100;
            var0 = arg0;
            var2 = var2 * var0;
            var3 = var1.iosReferenceFrame;
            var0 = 10;
            var0 = var0 * var3;
            var3 = global;
            var4 = var3.Number;
            var3 = var1.adjustToInterfaceOrientation;
            var1 = undefined;
            var1 = var4.bind(var1)(var3);
            var0 = var2 + var0;
            var0 = var0 + var1;
            return var0;
        };
        var0.value = var1;
        var1 = new Array(4);
        var1[0] = var0;
        var0 = {};
        var5 = 'initializeSensor';
        var0.key = var5;
        var5 = function(arg0, arg1) { // Original name: initializeSensor, environment: var4
            _fun33497: for (var _fun33497_ip = 0;;) switch (_fun33497_ip) {
                case 0:
                    var5 = arg0;
                    var4 = arg1;
                    var0 = this;
                    var1 = var0.getSensorId;
                    var2 = var1.bind(var0)(var5, var4);
                    var3 = var0.nativeSensors;
                    var1 = var3.has;
                    var1 = var1.bind(var3)(var2);
                    if (var1) {
                        _fun33497_ip = 108;
                        continue _fun33497
                    }
                case 40:
                    var6 = _closure1_slot0;
                    var3 = _closure1_slot1;
                    var1 = 2;
                    var3 = var3[var1];
                    var1 = undefined;
                    var1 = var6.bind(var1)(var3);
                    var3 = var1.prototype;
                    var3 = Object.create(var3, {
                        constructor: {
                            value: var1
                        }
                    });
                    var9 = var3;
                    var8 = var5;
                    var7 = var4;
                    var1 = new var9[var1](var8, var7, var6);
                    var4 = var1 instanceof Object ? var1 : var3;
                    var3 = var0.nativeSensors;
                    var1 = var3.set;
                    var1 = var1.bind(var3)(var2, var4);
                case 108:
                    var1 = var0.nativeSensors;
                    var0 = var1.get;
                    var1 = var0.bind(var1)(var2);
                    var0 = var1.getSharedValue;
                    var0 = var0.bind(var1)();
                    return var0;
            }
        };
        var0.value = var5;
        var1[1] = var0;
        var0 = {};
        var5 = 'registerSensor';
        var0.key = var5;
        var5 = function(arg0, arg1, arg2) { // Original name: registerSensor, environment: var4
            _fun33498: for (var _fun33498_ip = 0;;) switch (_fun33498_ip) {
                case 0:
                    var0 = this;
                    var3 = var0.getSensorId;
                    var2 = arg0;
                    var1 = arg1;
                    var1 = var3.bind(var0)(var2, var1);
                    var3 = var0.nativeSensors;
                    var2 = var3.has;
                    var2 = var2.bind(var3)(var1);
                    var4 = -1;
                    if (var2) {
                        _fun33498_ip = 48;
                        continue _fun33498
                    }
                case 46:
                    return var4;
                case 48:
                    var2 = var0.nativeSensors;
                    var0 = var2.get;
                    var3 = var0.bind(var2)(var1);
                    var0 = var4;
                    if (!var3) {
                        _fun33498_ip = 137;
                        continue _fun33498
                    }
                case 70:
                    var2 = var3.isAvailable;
                    var2 = var2.bind(var3)();
                    var0 = var4;
                    if (!var2) {
                        _fun33498_ip = 137;
                        continue _fun33498
                    }
                case 86:
                    var2 = var3.isRunning;
                    var2 = var2.bind(var3)();
                    if (var2) {
                        _fun33498_ip = 119;
                        continue _fun33498
                    }
                case 99:
                    var5 = var3.register;
                    var2 = arg2;
                    var2 = var5.bind(var3)(var2);
                    var0 = var4;
                    if (!var2) {
                        _fun33498_ip = 137;
                        continue _fun33498
                    }
                case 119:
                    var2 = var3.listenersNumber;
                    var2 = var2 + 1;
                    var3.listenersNumber = var2;
                    var0 = var1;
                case 137:
                    return var0;
            }
        };
        var0.value = var5;
        var1[2] = var0;
        var0 = {};
        var5 = 'unregisterSensor';
        var0.key = var5;
        var4 = function(arg0) { // Original name: unregisterSensor, environment: var4
            _fun33499: for (var _fun33499_ip = 0;;) switch (_fun33499_ip) {
                case 0:
                    var2 = arg0;
                    var0 = this;
                    var3 = var0.nativeSensors;
                    var1 = var3.has;
                    var1 = var1.bind(var3)(var2);
                    if (!var1) {
                        _fun33499_ip = 97;
                        continue _fun33499
                    }
                case 25:
                    var1 = var0.nativeSensors;
                    var0 = var1.get;
                    var1 = var0.bind(var1)(var2);
                    var0 = var1;
                    if (!var0) {
                        _fun33499_ip = 57;
                        continue _fun33499
                    }
                case 47:
                    var2 = var1.isRunning;
                    var0 = var2.bind(var1)();
                case 57:
                    if (!var0) {
                        _fun33499_ip = 97;
                        continue _fun33499
                    }
                case 60:
                    var0 = var1.listenersNumber;
                    var0 = var0 - 1;
                    var1.listenersNumber = var0;
                    var2 = var1.listenersNumber;
                    var0 = 0;
                    if (!(var0 === var2)) {
                        _fun33499_ip = 97;
                        continue _fun33499
                    }
                case 87:
                    var0 = var1.unregister;
                    var0 = var0.bind(var1)();
                case 97:
                    var0 = undefined;
                    return var0;
            }
        };
        var0.value = var4;
        var1[3] = var0;
        var0 = undefined;
        var0 = var3.bind(var0)(var2, var1);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.SensorContainer = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 3725]);