// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = {};
    var3 = function arg0() {
        _fun5252: for (var _fun5252_ip = 0;;) switch (_fun5252_ip) {
            case 0:
                var1 = arg0;
                var0 = 0;
                var1 = var1 > var0;
                if (!var1) {
                    _fun5252_ip = 15;
                    continue _fun5252
                }
            case 12:
                var0 = 1;
            case 15:
                return var0;
        }
    };
    var0.step0 = var3;
    var3 = function arg0() {
        _fun5253: for (var _fun5253_ip = 0;;) switch (_fun5253_ip) {
            case 0:
                var0 = arg0;
                var1 = 1;
                var2 = var0 >= var1;
                var0 = 0;
                if (!var2) {
                    _fun5253_ip = 18;
                    continue _fun5253
                }
            case 15:
                var0 = var1;
            case 18:
                return var0;
        }
    };
    var0.step1 = var3;
    var3 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var0.linear = var3;
    var3 = function arg0() {
        _fun5255: for (var _fun5255_ip = 0;;) switch (_fun5255_ip) {
            case 0:
                var1 = _closure1_slot2;
                if (var1) {
                    _fun5255_ip = 52;
                    continue _fun5255
                }
            case 10:
                var5 = _closure1_slot3;
                var4 = var5.bezier;
                var9 = 0.42;
                var8 = 0;
                var1 = 1;
                var10 = var5;
                var7 = var1;
                var6 = var1;
                var1 = var10[var4](var9, var8, var7, var6, var5);
                var _closure1_slot2 = var1;
            case 52:
                var2 = _closure1_slot2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var0.ease = var3;
    var3 = function arg0() {
        var0 = arg0;
        var0 = var0 * var0;
        return var0;
    };
    var0.quad = var3;
    var3 = function arg0() {
        var1 = arg0;
        var0 = var1 * var1;
        var0 = var0 * var1;
        return var0;
    };
    var0.cubic = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var0 = global;
            var3 = var0.Math;
            var2 = var3.pow;
            var1 = _closure2_slot0;
            var0 = arg0;
            var0 = var2.bind(var3)(var0, var1);
            return var0;
        };
        return var0;
    };
    var0.poly = var3;
    var3 = function arg0() {
        var0 = global;
        var2 = var0.Math;
        var1 = var2.cos;
        var0 = var0.Math;
        var3 = var0.PI;
        var0 = arg0;
        var3 = var0 * var3;
        var0 = 2;
        var0 = var3 / var0;
        var1 = var1.bind(var2)(var0);
        var0 = 1;
        var0 = var0 - var1;
        return var0;
    };
    var0.sin = var3;
    var3 = function arg0() {
        var0 = arg0;
        var1 = global;
        var3 = var1.Math;
        var2 = var3.sqrt;
        var0 = var0 * var0;
        var1 = 1;
        var0 = var1 - var0;
        var0 = var2.bind(var3)(var0);
        var0 = var1 - var0;
        return var0;
    };
    var0.circle = var3;
    var3 = function arg0() {
        var0 = global;
        var3 = var0.Math;
        var2 = var3.pow;
        var1 = arg0;
        var0 = 1;
        var4 = var1 - var0;
        var1 = 2;
        var0 = 10;
        var0 = var0 * var4;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var0.exp = var3;
    var3 = function() {
        _fun5263: for (var _fun5263_ip = 0;;) switch (_fun5263_ip) {
            case 0:
                var5 = undefined;
                var3 = undefined;
                var2 = arguments.length;
                var1 = 0;
                var4 = var2 > var1;
                var6 = 1;
                var2 = var6;
                if (!var4) {
                    _fun5263_ip = 39;
                    continue _fun5263
                }
            case 24:
                var4 = arguments[var1];
                var2 = var6;
                if (!(var5 !== var4)) {
                    _fun5263_ip = 39;
                    continue _fun5263
                }
            case 35:
                var2 = arguments[var1];
            case 39:
                var1 = global;
                var1 = var1.Math;
                var1 = var1.PI;
                var1 = var2 * var1;
                var _closure2_slot0 = var1;
                var0 = function(arg0) { // Environment: var0
                    var4 = arg0;
                    var0 = global;
                    var5 = var0.Math;
                    var3 = var5.pow;
                    var6 = var0.Math;
                    var2 = var6.cos;
                    var1 = var0.Math;
                    var1 = var1.PI;
                    var7 = var4 * var1;
                    var1 = 2;
                    var1 = var7 / var1;
                    var2 = var2.bind(var6)(var1);
                    var1 = 3;
                    var1 = var3.bind(var5)(var2, var1);
                    var3 = var0.Math;
                    var2 = var3.cos;
                    var0 = _closure2_slot0;
                    var0 = var4 * var0;
                    var0 = var2.bind(var3)(var0);
                    var1 = var1 * var0;
                    var0 = 1;
                    var0 = var0 - var1;
                    return var0;
                };
                return var0;
        }
    };
    var0.elastic = var3;
    var3 = function() {
        _fun5265: for (var _fun5265_ip = 0;;) switch (_fun5265_ip) {
            case 0:
                var5 = undefined;
                var3 = undefined;
                var1 = arguments.length;
                var2 = 0;
                var4 = var1 > var2;
                var6 = 1.70158;
                var1 = var6;
                if (!var4) {
                    _fun5265_ip = 46;
                    continue _fun5265
                }
            case 31:
                var4 = arguments[var2];
                var1 = var6;
                if (!(var5 !== var4)) {
                    _fun5265_ip = 46;
                    continue _fun5265
                }
            case 42:
                var1 = arguments[var2];
            case 46:
                var _closure2_slot0 = var1;
                var0 = function(arg0) { // Environment: var0
                    var3 = arg0;
                    var1 = var3 * var3;
                    var4 = _closure2_slot0;
                    var2 = 1;
                    var2 = var4 + var2;
                    var2 = var2 * var3;
                    var0 = _closure2_slot0;
                    var0 = var2 - var0;
                    var0 = var1 * var0;
                    return var0;
                };
                return var0;
        }
    };
    var0.back = var3;
    var3 = function arg0() {
        _fun5267: for (var _fun5267_ip = 0;;) switch (_fun5267_ip) {
            case 0:
                var1 = arg0;
                var0 = 0.36363636363636365;
                if (!(!(var1 < var0))) {
                    _fun5267_ip = 192;
                    continue _fun5267
                }
            case 20:
                var0 = 0.7272727272727273;
                if (!(!(var1 < var0))) {
                    _fun5267_ip = 144;
                    continue _fun5267
                }
            case 34:
                var0 = 0.9090909090909091;
                if (!(!(var1 < var0))) {
                    _fun5267_ip = 96;
                    continue _fun5267
                }
            case 48:
                var0 = 0.9545454545454546;
                var2 = var1 - var0;
                var0 = 7.5625;
                var0 = var0 * var2;
                var2 = var0 * var2;
                var0 = 0.984375;
                var0 = var2 + var0;
                return var0;
            case 96:
                var0 = 0.8181818181818182;
                var2 = var1 - var0;
                var0 = 7.5625;
                var0 = var0 * var2;
                var2 = var0 * var2;
                var0 = 0.9375;
                var0 = var2 + var0;
                return var0;
            case 144:
                var0 = 0.5454545454545454;
                var2 = var1 - var0;
                var0 = 7.5625;
                var0 = var0 * var2;
                var2 = var0 * var2;
                var0 = 0.75;
                var0 = var2 + var0;
                return var0;
            case 192:
                var0 = 7.5625;
                var0 = var0 * var1;
                var0 = var0 * var1;
                return var0;
        }
    };
    var0.bounce = var3;
    var3 = function arg0, arg1, arg2, arg3() {
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 0;
        var0 = var2[var0];
        var5 = undefined;
        var0 = var1.bind(var5)(var0);
        var4 = var0.default;
        var9 = arg0;
        var8 = arg1;
        var7 = arg2;
        var6 = arg3;
        var10 = undefined;
        var0 = var10[var4](var9, var8, var7, var6, var5);
        return var0;
    };
    var0.bezier = var3;
    var3 = function arg0() {
        var0 = arg0;
        return var0;
    };
    var0.in = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            var3 = _closure2_slot0;
            var1 = 1;
            var0 = arg0;
            var2 = var1 - var0;
            var0 = undefined;
            var0 = var3.bind(var0)(var2);
            var0 = var1 - var0;
            return var0;
        };
        return var0;
    };
    var0.out = var3;
    var3 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0) { // Environment: var0
            _fun5273: for (var _fun5273_ip = 0;;) switch (_fun5273_ip) {
                case 0:
                    var1 = arg0;
                    var0 = 0.5;
                    if (!(!(var1 < var0))) {
                        _fun5273_ip = 55;
                        continue _fun5273
                    }
                case 17:
                    var5 = _closure2_slot0;
                    var2 = 1;
                    var0 = var2 - var1;
                    var4 = undefined;
                    var3 = 2;
                    var0 = var3 * var0;
                    var0 = var5.bind(var4)(var0);
                    var0 = var0 / var3;
                    var0 = var2 - var0;
                    _fun5273_ip = 80;
                    continue _fun5273;
                case 55:
                    var4 = _closure2_slot0;
                    var2 = 2;
                    var3 = var2 * var1;
                    var1 = undefined;
                    var1 = var4.bind(var1)(var3);
                    var0 = var1 / var2;
                case 80:
                    return var0;
            }
        };
        return var0;
    };
    var0.inOut = var3;
    var _closure1_slot3 = var0;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [357]);