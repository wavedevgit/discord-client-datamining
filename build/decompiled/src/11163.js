// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun86563: for (var _fun86563_ip = 0;;) switch (_fun86563_ip) {
        case 0:
            var4 = exports;
            var _closure1_slot0 = var4;
            var1 = global;
            var6 = var1.Object;
            var5 = var6.defineProperty;
            var3 = {};
            var0 = true;
            var3.value = var0;
            var0 = '__esModule';
            var0 = var5.bind(var6)(var4, var0, var3);
            var0 = undefined;
            var4.ANGLE_ORDER = var0;
            var4.ARRAY_TYPE = var0;
            var4.EPSILON = var0;
            var4.RANDOM = var0;
            var3 = function(arg0, arg1) { // Original name: equals, environment: var2
                _fun86564: for (var _fun86564_ip = 0;;) switch (_fun86564_ip) {
                    case 0:
                        var8 = arg0;
                        var7 = arg1;
                        var3 = undefined;
                        var1 = undefined;
                        var2 = arguments.length;
                        var0 = 2;
                        if (!(var2 > var0)) {
                            _fun86564_ip = 28;
                            continue _fun86564
                        }
                    case 20:
                        var2 = arguments[var0];
                        if (!(var3 === var2)) {
                            _fun86564_ip = 37;
                            continue _fun86564
                        }
                    case 28:
                        var2 = _closure1_slot1;
                        _fun86564_ip = 41;
                        continue _fun86564;
                    case 37:
                        var2 = arguments[var0];
                    case 41:
                        var0 = global;
                        var4 = var0.Math;
                        var3 = var4.abs;
                        var1 = var8 - var7;
                        var1 = var3.bind(var4)(var1);
                        var6 = var0.Math;
                        var5 = var6.max;
                        var4 = var0.Math;
                        var3 = var4.abs;
                        var4 = var3.bind(var4)(var8);
                        var3 = var0.Math;
                        var0 = var3.abs;
                        var3 = var0.bind(var3)(var7);
                        var0 = 1;
                        var0 = var5.bind(var6)(var0, var4, var3);
                        var0 = var2 * var0;
                        var0 = var1 <= var0;
                        return var0;
                }
            };
            var4.equals = var3;
            var3 = function(arg0) { // Original name: round, environment: var2
                _fun86565: for (var _fun86565_ip = 0;;) switch (_fun86565_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = 0;
                        if (!(!(var3 >= var1))) {
                            _fun86565_ip = 68;
                            continue _fun86565
                        }
                    case 9:
                        var0 = 0.5;
                        var0 = var3 % var0;
                        if (!(var0 !== var1)) {
                            _fun86565_ip = 47;
                            continue _fun86565
                        }
                    case 27:
                        var0 = global;
                        var1 = var0.Math;
                        var0 = var1.round;
                        var0 = var0.bind(var1)(var3);
                        _fun86565_ip = 66;
                        continue _fun86565;
                    case 47:
                        var1 = global;
                        var2 = var1.Math;
                        var1 = var2.floor;
                        var0 = var1.bind(var2)(var3);
                    case 66:
                        _fun86565_ip = 86;
                        continue _fun86565;
                    case 68:
                        var1 = global;
                        var2 = var1.Math;
                        var1 = var2.round;
                        var0 = var1.bind(var2)(var3);
                    case 86:
                        return var0;
                }
            };
            var4.round = var3;
            var3 = function(arg0) { // Original name: setMatrixArrayType, environment: var2
                var1 = _closure1_slot0;
                var0 = arg0;
                var1.ARRAY_TYPE = var0;
                var0 = undefined;
                return var0;
            };
            var4.setMatrixArrayType = var3;
            var3 = function(arg0) { // Original name: toDegree, environment: var2
                var1 = _closure1_slot3;
                var0 = arg0;
                var0 = var0 * var1;
                return var0;
            };
            var4.toDegree = var3;
            var3 = function(arg0) { // Original name: toRadian, environment: var2
                var1 = _closure1_slot2;
                var0 = arg0;
                var0 = var0 * var1;
                return var0;
            };
            var4.toRadian = var3;
            var3 = 1e-06;
            var4.EPSILON = var3;
            var _closure1_slot1 = var3;
            var3 = var1.Float32Array;
            var5 = 'undefined';
            var3 = typeof var3;
            if (!(var5 === var3)) {
                _fun86563_ip = 183;
                continue _fun86563
            }
        case 175:
            var3 = var1.Array;
            _fun86563_ip = 189;
            continue _fun86563;
        case 183:
            var3 = var1.Float32Array;
        case 189:
            var4.ARRAY_TYPE = var3;
            var3 = var1.Math;
            var3 = var3.random;
            var4.RANDOM = var3;
            var3 = 'zyx';
            var4.ANGLE_ORDER = var3;
            var3 = var1.Math;
            var4 = var3.PI;
            var3 = 180;
            var4 = var4 / var3;
            var _closure1_slot2 = var4;
            var1 = var1.Math;
            var1 = var1.PI;
            var1 = var3 / var1;
            var _closure1_slot3 = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);