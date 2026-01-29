// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function(arg0) { // Original name: _interopRequireDefault, environment: var3
        _fun22496: for (var _fun22496_ip = 0;;) switch (_fun22496_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22496_ip = 18;
                    continue _fun22496
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22496_ip = 27;
                    continue _fun22496
                }
            case 18:
                var1 = {};
                var1.default = var2;
                var0 = var1;
            case 27:
                return var0;
        }
    };
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var1, var0, var2);
    var0 = function(arg0, arg1) { // Original name: closestTo, environment: var3
        _fun22497: for (var _fun22497_ip = 0;;) switch (_fun22497_ip) {
            case 0:
                var5 = arg1;
                var6 = undefined;
                var2 = undefined;
                var3 = _closure1_slot1;
                var4 = var3.default;
                var2 = arguments;
                var3 = var2;
                var2 = 2;
                var2 = var4.bind(var6)(var2, var3);
                var0 = _closure1_slot0;
                var2 = var0.default;
                var0 = arg0;
                var3 = var2.bind(var6)(var0);
                var0 = global;
                var4 = var0.isNaN;
                var2 = var0.Number;
                var2 = var2.bind(var6)(var3);
                var2 = var4.bind(var6)(var2);
                if (var2) {
                    _fun22497_ip = 171;
                    continue _fun22497
                }
            case 79:
                var2 = var3.getTime;
                var2 = var2.bind(var3)();
                var _closure2_slot2 = var2;
                var2 = null;
                if (!(var2 != var5)) {
                    _fun22497_ip = 146;
                    continue _fun22497
                }
            case 99:
                var2 = var5.forEach;
                var3 = 'function';
                var2 = typeof var2;
                var4 = var5;
                if (!(var3 !== var2)) {
                    _fun22497_ip = 144;
                    continue _fun22497
                }
            case 118:
                var2 = var0.Array;
                var2 = var2.prototype;
                var3 = var2.slice;
                var2 = var3.call;
                var4 = var2.bind(var3)(var5);
            case 144:
                _fun22497_ip = 150;
                continue _fun22497;
            case 146:
                var4 = new Array(0);
            case 150:
                var3 = var4.forEach;
                var2 = function(arg0) { // Environment: var1
                    _fun22498: for (var _fun22498_ip = 0;;) switch (_fun22498_ip) {
                        case 0:
                            var0 = _closure1_slot0;
                            var2 = var0.default;
                            var1 = undefined;
                            var0 = arg0;
                            var4 = var2.bind(var1)(var0);
                            var0 = global;
                            var3 = var0.isNaN;
                            var2 = var0.Number;
                            var2 = var2.bind(var1)(var4);
                            var2 = var3.bind(var1)(var2);
                            if (var2) {
                                _fun22498_ip = 132;
                                continue _fun22498
                            }
                        case 49:
                            var6 = var0.Math;
                            var5 = var6.abs;
                            var7 = _closure2_slot2;
                            var2 = var4.getTime;
                            var2 = var2.bind(var4)();
                            var2 = var7 - var2;
                            var2 = var5.bind(var6)(var2);
                            var6 = _closure2_slot0;
                            var5 = null;
                            var5 = var5 == var6;
                            if (var5) {
                                _fun22498_ip = 119;
                                continue _fun22498
                            }
                        case 100:
                            var7 = var0.Number;
                            var6 = _closure2_slot1;
                            var6 = var7.bind(var1)(var6);
                            var5 = var2 < var6;
                        case 119:
                            if (!var5) {
                                _fun22498_ip = 130;
                                continue _fun22498
                            }
                        case 122:
                            var _closure2_slot0 = var4;
                            var _closure2_slot1 = var2;
                        case 130:
                            return var1;
                        case 132:
                            var3 = var0.Date;
                            var8 = var0.NaN;
                            var2 = var3.prototype;
                            var2 = Object.create(var2, {
                                constructor: {
                                    value: var3
                                }
                            });
                            var9 = var2;
                            var1 = new var9[var3](var8, var7);
                            var2 = var1 instanceof Object ? var1 : var2;
                            _closure2_slot0 = var2;
                            var0 = var0.NaN;
                            _closure2_slot1 = var0;
                            var0 = undefined;
                            return var0;
                    }
                };
                var2 = var3.bind(var4)(var2);
                var1 = _closure2_slot0;
                return var1;
            case 171:
                var2 = var0.Date;
                var8 = var0.NaN;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var9 = var1;
                var0 = new var9[var2](var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var1.default = var0;
    var0 = 0;
    var2 = var6[var0];
    var0 = undefined;
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot0 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot1 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2532, 2533]);