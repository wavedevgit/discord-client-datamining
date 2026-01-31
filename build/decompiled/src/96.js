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
        var4 = function() {
            var3 = _closure1_slot2;
            var2 = _closure2_slot0;
            var0 = undefined;
            var1 = this;
            var1 = var3.bind(var0)(var1, var2);
            return var0;
        };
        var _closure2_slot0 = var4;
        var3 = _closure1_slot3;
        var0 = {};
        var2 = 'get';
        var0.key = var2;
        var2 = function() {
            var2 = _closure1_slot0;
            var1 = _closure1_slot1;
            var0 = 2;
            var1 = var1[var0];
            var0 = undefined;
            var0 = var2.bind(var0)(var1);
            var2 = var0.default;
            var1 = var2.get;
            var0 = 'window';
            var0 = var1.bind(var2)(var0);
            var0 = var0.scale;
            return var0;
        };
        var0.value = var2;
        var2 = new Array(5);
        var2[0] = var0;
        var0 = {};
        var5 = 'getFontScale';
        var0.key = var5;
        var5 = function() {
            _fun1546: for (var _fun1546_ip = 0;;) switch (_fun1546_ip) {
                case 0:
                    var2 = _closure1_slot0;
                    var1 = _closure1_slot1;
                    var0 = 2;
                    var1 = var1[var0];
                    var0 = undefined;
                    var0 = var2.bind(var0)(var1);
                    var2 = var0.default;
                    var1 = var2.get;
                    var0 = 'window';
                    var0 = var1.bind(var2)(var0);
                    var0 = var0.fontScale;
                    if (var0) {
                        _fun1546_ip = 69;
                        continue _fun1546
                    }
                case 53:
                    var2 = _closure2_slot0;
                    var1 = var2.get;
                    var0 = var1.bind(var2)();
                case 69:
                    return var0;
            }
        };
        var0.value = var5;
        var2[1] = var0;
        var0 = {};
        var5 = 'getPixelSizeForLayoutSize';
        var0.key = var5;
        var5 = function arg0() {
            var0 = global;
            var2 = var0.Math;
            var1 = var2.round;
            var3 = _closure2_slot0;
            var0 = var3.get;
            var3 = var0.bind(var3)();
            var0 = arg0;
            var0 = var0 * var3;
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        var0.value = var5;
        var2[2] = var0;
        var0 = {};
        var5 = 'roundToNearestPixel';
        var0.key = var5;
        var5 = function arg0() {
            var1 = _closure2_slot0;
            var0 = var1.get;
            var1 = var0.bind(var1)();
            var0 = global;
            var3 = var0.Math;
            var2 = var3.round;
            var0 = arg0;
            var0 = var0 * var1;
            var0 = var2.bind(var3)(var0);
            var0 = var0 / var1;
            return var0;
        };
        var0.value = var5;
        var2[3] = var0;
        var0 = {};
        var5 = 'startDetecting';
        var0.key = var5;
        var1 = function() {
            var0 = undefined;
            return var0;
        };
        var0.value = var1;
        var2[4] = var0;
        var1 = undefined;
        var0 = null;
        var0 = var3.bind(var1)(var4, var0, var2);
        return var0;
    };
    var1 = var1.bind(var0)();
    var2.default = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [6, 7, 97]);