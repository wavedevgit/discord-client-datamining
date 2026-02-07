// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = function arg0, arg1() {
        var3 = arg0;
        var2 = _closure1_slot2;
        var1 = undefined;
        var0 = arg1;
        var0 = var2.bind(var1)(var3, var3, var0);
        return var0;
    };
    var _closure1_slot1 = var0;
    var0 = function arg0, arg1, arg2() {
        _fun45897: for (var _fun45897_ip = 0;;) switch (_fun45897_ip) {
            case 0:
                var5 = arg0;
                var1 = arg2;
                var0 = {
                    'x': 0,
                    'y': 0,
                    'width': 0,
                    'height': 0
                };
                var _closure2_slot0 = var0;
                var4 = var5.measureLayout;
                var3 = arg1;
                var2 = function(arg0, arg1, arg2, arg3) { // Environment: var2
                    var2 = _closure2_slot0;
                    var0 = arg0;
                    var2.x = var0;
                    var0 = arg1;
                    var2.y = var0;
                    var3 = _closure1_slot4;
                    var0 = undefined;
                    var1 = arg2;
                    var1 = var3.bind(var0)(var1);
                    var2.width = var1;
                    var1 = arg3;
                    var1 = var3.bind(var0)(var1);
                    var2.height = var1;
                    return var0;
                };
                var2 = var4.bind(var5)(var3, var2);
                if (!var1) {
                    _fun45897_ip = 122;
                    continue _fun45897
                }
            case 49:
                var6 = _closure1_slot3;
                var4 = var0.width;
                var3 = var1.width;
                var5 = undefined;
                var3 = var6.bind(var5)(var4, var3);
                if (!var3) {
                    _fun45897_ip = 88;
                    continue _fun45897
                }
            case 77:
                var3 = var1.width;
                var0.width = var3;
            case 88:
                var4 = _closure1_slot3;
                var3 = var0.height;
                var2 = var1.height;
                var2 = var4.bind(var5)(var3, var2);
                if (!var2) {
                    _fun45897_ip = 122;
                    continue _fun45897
                }
            case 111:
                var1 = var1.height;
                var0.height = var1;
            case 122:
                return var0;
        }
    };
    var _closure1_slot2 = var0;
    var4 = function arg0, arg1() {
        var0 = global;
        var2 = var0.Math;
        var1 = var2.abs;
        var5 = _closure1_slot0;
        var4 = var5.getPixelSizeForLayoutSize;
        var3 = arg0;
        var3 = var4.bind(var5)(var3);
        var5 = _closure1_slot0;
        var4 = var5.getPixelSizeForLayoutSize;
        var0 = arg1;
        var0 = var4.bind(var5)(var0);
        var0 = var3 - var0;
        var1 = var1.bind(var2)(var0);
        var0 = 1;
        var0 = var1 <= var0;
        return var0;
    };
    var _closure1_slot3 = var4;
    var3 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.roundToNearestPixel;
        var0 = arg0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot4 = var3;
    var0 = global;
    var7 = var0.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var0 = true;
    var5.value = var0;
    var0 = '__esModule';
    var0 = var6.bind(var7)(var2, var0, var5);
    var5 = arg6;
    var0 = 0;
    var6 = var5[var0];
    var5 = arg1;
    var0 = undefined;
    var5 = var5.bind(var0)(var6);
    var5 = var5.PixelRatio;
    var _closure1_slot0 = var5;
    var5 = function arg0, arg1() {
        var3 = _closure1_slot3;
        var2 = undefined;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var2)(var1, var0);
        var0 = !var0;
        return var0;
    };
    var2.areDimensionsNotEqual = var5;
    var2.areDimensionsEqual = var4;
    var2.roundOffPixel = var3;
    var3 = function arg0() {
        var2 = _closure1_slot1;
        var1 = undefined;
        var0 = arg0;
        var0 = var2.bind(var1)(var0, var1);
        return var0;
    };
    var2.measureParentSize = var3;
    var3 = function arg0, arg1() {
        var3 = _closure1_slot2;
        var2 = undefined;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var2)(var1, var0, var2);
        return var0;
    };
    var2.measureFirstChildLayout = var3;
    var1 = function arg0, arg1() {
        var3 = _closure1_slot1;
        var2 = undefined;
        var1 = arg0;
        var0 = arg1;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var2.measureItemLayout = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [27]);