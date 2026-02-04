// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var4 = require;
    var3 = dependencyMap;
    var0 = function arg0() {
        _fun62324: for (var _fun62324_ip = 0;;) switch (_fun62324_ip) {
            case 0:
                var1 = arg0;
                var3 = var1.hasOwnProperty;
                var2 = _closure1_slot4;
                var2 = var3.bind(var1)(var2);
                if (var2) {
                    _fun62324_ip = 101;
                    continue _fun62324
                }
            case 24:
                var2 = global;
                var4 = var2.Object;
                var3 = var4.isExtensible;
                var3 = var3.bind(var4)(var1);
                if (var3) {
                    _fun62324_ip = 54;
                    continue _fun62324
                }
            case 48:
                var3 = 'F';
                return var3;
            case 54:
                var5 = var2.Object;
                var4 = var5.defineProperty;
                var3 = _closure1_slot4;
                var2 = {};
                var6 = _closure1_slot3;
                var7 = var6 + 1;
                _closure1_slot3 = var7;
                var6 = 'L';
                var6 = var6 + var7;
                var2.value = var6;
                var2 = var4.bind(var5)(var1, var3, var2);
            case 101:
                var0 = _closure1_slot4;
                var0 = var1[var0];
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var2 = 0;
    var5 = var3[var2];
    var0 = undefined;
    var5 = var4.bind(var0)(var5);
    var5 = var5.NativeModules;
    var5 = var5.Orientation;
    var _closure1_slot0 = var5;
    var5 = var3[var2];
    var5 = var4.bind(var0)(var5);
    var5 = var5.Platform;
    var3 = var3[var2];
    var3 = var4.bind(var0)(var3);
    var3 = var3.DeviceEventEmitter;
    var _closure1_slot1 = var3;
    var3 = {};
    var _closure1_slot2 = var3;
    var _closure1_slot3 = var2;
    var2 = '__listener_id';
    var _closure1_slot4 = var2;
    var2 = {};
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot0;
        var1 = var2.getOrientation;
        var0 = function(arg0, arg1) { // Environment: var0
            var3 = _closure2_slot0;
            var0 = undefined;
            var2 = arg0;
            var1 = arg1;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.getOrientation = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var2 = _closure1_slot0;
        var1 = var2.getSpecificOrientation;
        var0 = function(arg0, arg1) { // Environment: var0
            var3 = _closure2_slot0;
            var0 = undefined;
            var2 = arg0;
            var1 = arg1;
            var1 = var3.bind(var0)(var2, var1);
            return var0;
        };
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.getSpecificOrientation = var3;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.ignoreAutoRotate;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        var0 = undefined;
        return var0;
    };
    var2.ignoreAutoRotate = var3;
    var3 = function() {
        var1 = _closure1_slot0;
        var0 = var1.lockToPortrait;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var2.lockToPortrait = var3;
    var3 = function() {
        var1 = _closure1_slot0;
        var0 = var1.lockToLandscape;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var2.lockToLandscape = var3;
    var3 = function() {
        var1 = _closure1_slot0;
        var0 = var1.lockToLandscapeRight;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var2.lockToLandscapeRight = var3;
    var3 = function() {
        var1 = _closure1_slot0;
        var0 = var1.lockToLandscapeLeft;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var2.lockToLandscapeLeft = var3;
    var3 = function() {
        var1 = _closure1_slot0;
        var0 = var1.unlockAllOrientations;
        var0 = var0.bind(var1)();
        var0 = undefined;
        return var0;
    };
    var2.unlockAllOrientations = var3;
    var3 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var2 = _closure1_slot5;
        var0 = undefined;
        var3 = var2.bind(var0)(var3);
        var2 = _closure1_slot2;
        var6 = _closure1_slot1;
        var5 = var6.addListener;
        var4 = 'orientationDidChange';
        var1 = function(arg0) { // Environment: var1
            var2 = _closure2_slot0;
            var0 = arg0;
            var1 = var0.orientation;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var5.bind(var6)(var4, var1);
        var2[var3] = var1;
        return var0;
    };
    var2.addOrientationListener = var3;
    var3 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var2 = _closure1_slot5;
        var0 = undefined;
        var3 = var2.bind(var0)(var3);
        var2 = _closure1_slot2;
        var6 = _closure1_slot1;
        var5 = var6.addListener;
        var4 = 'orientationDegreesDidChange';
        var1 = function(arg0) { // Environment: var1
            var2 = _closure2_slot0;
            var0 = arg0;
            var1 = var0.orientationDegrees;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var5.bind(var6)(var4, var1);
        var2[var3] = var1;
        return var0;
    };
    var2.addOrientationDegreesChangeListener = var3;
    var3 = function arg0() {
        _fun62339: for (var _fun62339_ip = 0;;) switch (_fun62339_ip) {
            case 0:
                var3 = _closure1_slot5;
                var0 = undefined;
                var2 = arg0;
                var3 = var3.bind(var0)(var2);
                var2 = _closure1_slot2;
                var2 = var2[var3];
                if (!var2) {
                    _fun62339_ip = 52;
                    continue _fun62339
                }
            case 28:
                var2 = _closure1_slot2;
                var4 = var2[var3];
                var1 = var4.remove;
                var1 = var1.bind(var4)();
                var1 = null;
                var2[var3] = var1;
            case 52:
                return var0;
        }
    };
    var2.removeOrientationListener = var3;
    var3 = function arg0() {
        var3 = arg0;
        var _closure2_slot0 = var3;
        var2 = _closure1_slot5;
        var0 = undefined;
        var3 = var2.bind(var0)(var3);
        var2 = _closure1_slot2;
        var6 = _closure1_slot1;
        var5 = var6.addListener;
        var4 = 'specificOrientationDidChange';
        var1 = function(arg0) { // Environment: var1
            var2 = _closure2_slot0;
            var0 = arg0;
            var1 = var0.specificOrientation;
            var0 = undefined;
            var1 = var2.bind(var0)(var1);
            return var0;
        };
        var1 = var5.bind(var6)(var4, var1);
        var2[var3] = var1;
        return var0;
    };
    var2.addSpecificOrientationListener = var3;
    var3 = function arg0() {
        _fun62342: for (var _fun62342_ip = 0;;) switch (_fun62342_ip) {
            case 0:
                var3 = _closure1_slot5;
                var0 = undefined;
                var2 = arg0;
                var3 = var3.bind(var0)(var2);
                var2 = _closure1_slot2;
                var2 = var2[var3];
                if (!var2) {
                    _fun62342_ip = 52;
                    continue _fun62342
                }
            case 28:
                var2 = _closure1_slot2;
                var4 = var2[var3];
                var1 = var4.remove;
                var1 = var1.bind(var4)();
                var1 = null;
                var2[var3] = var1;
            case 52:
                return var0;
        }
    };
    var2.removeSpecificOrientationListener = var3;
    var1 = function() {
        var0 = _closure1_slot0;
        var0 = var0.initialOrientation;
        return var0;
    };
    var2.getInitialOrientation = var1;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);