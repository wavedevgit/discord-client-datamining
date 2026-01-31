// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun23878: for (var _fun23878_ip = 0;;) switch (_fun23878_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun23878_ip = 18;
                    continue _fun23878
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun23878_ip = 27;
                    continue _fun23878
                }
            case 18:
                var1 = {};
                var1.default = var2;
                var0 = var1;
            case 27:
                return var0;
        }
    };
    var0 = function arg0() {
        _fun23879: for (var _fun23879_ip = 0;;) switch (_fun23879_ip) {
            case 0:
                var1 = global;
                var2 = var1.Symbol;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun23879_ip = 43;
                    continue _fun23879
                }
            case 20:
                var1 = var1.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun23879_ip = 50;
                    continue _fun23879
                }
            case 43:
                var2 = function arg0() {
                    _fun23881: for (var _fun23881_ip = 0;;) switch (_fun23881_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun23881_ip = 58;
                                continue _fun23881
                            }
                        case 6:
                            var0 = global;
                            var2 = var0.Symbol;
                            var3 = 'function';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun23881_ip = 58;
                                continue _fun23881
                            }
                        case 24:
                            var3 = var1.constructor;
                            var2 = var0.Symbol;
                            if (!(var3 === var2)) {
                                _fun23881_ip = 58;
                                continue _fun23881
                            }
                        case 39:
                            var0 = var0.Symbol;
                            var2 = var0.prototype;
                            var0 = 'symbol';
                            if (!(var1 === var2)) {
                                _fun23881_ip = 61;
                                continue _fun23881
                            }
                        case 58:
                            var0 = typeof var1;
                        case 61:
                            return var0;
                    }
                };
                _fun23879_ip = 55;
                continue _fun23879;
            case 50:
                var2 = function arg0() {
                    var0 = arg0;
                    var0 = typeof var0;
                    return var0;
                };
            case 55:
                _closure1_slot4 = var2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot4 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var1, var0, var2);
    var0 = function arg0, arg1() {
        _fun23882: for (var _fun23882_ip = 0;;) switch (_fun23882_ip) {
            case 0:
                var3 = arg1;
                var6 = undefined;
                var0 = undefined;
                var2 = _closure1_slot2;
                var4 = var2.default;
                var0 = arguments;
                var2 = var0;
                var0 = 2;
                var0 = var4.bind(var6)(var0, var2);
                if (!var3) {
                    _fun23882_ip = 404;
                    continue _fun23882
                }
            case 39:
                var0 = _closure1_slot4;
                var2 = var0.bind(var6)(var3);
                var0 = 'object';
                if (!(var0 === var2)) {
                    _fun23882_ip = 404;
                    continue _fun23882
                }
            case 59:
                var0 = var3.years;
                var10 = 0;
                if (!var0) {
                    _fun23882_ip = 90;
                    continue _fun23882
                }
            case 70:
                var0 = _closure1_slot3;
                var4 = var0.default;
                var0 = var3.years;
                var10 = var4.bind(var6)(var0);
            case 90:
                var0 = var3.months;
                var5 = 0;
                if (!var0) {
                    _fun23882_ip = 121;
                    continue _fun23882
                }
            case 101:
                var0 = _closure1_slot3;
                var4 = var0.default;
                var0 = var3.months;
                var5 = var4.bind(var6)(var0);
            case 121:
                var0 = var3.weeks;
                var8 = 0;
                if (!var0) {
                    _fun23882_ip = 152;
                    continue _fun23882
                }
            case 132:
                var0 = _closure1_slot3;
                var4 = var0.default;
                var0 = var3.weeks;
                var8 = var4.bind(var6)(var0);
            case 152:
                var0 = var3.days;
                var7 = 0;
                if (!var0) {
                    _fun23882_ip = 183;
                    continue _fun23882
                }
            case 163:
                var0 = _closure1_slot3;
                var4 = var0.default;
                var0 = var3.days;
                var7 = var4.bind(var6)(var0);
            case 183:
                var4 = var3.hours;
                var0 = 0;
                if (!var4) {
                    _fun23882_ip = 214;
                    continue _fun23882
                }
            case 194:
                var4 = _closure1_slot3;
                var9 = var4.default;
                var4 = var3.hours;
                var0 = var9.bind(var6)(var4);
            case 214:
                var9 = var3.minutes;
                var4 = 0;
                if (!var9) {
                    _fun23882_ip = 245;
                    continue _fun23882
                }
            case 225:
                var9 = _closure1_slot3;
                var11 = var9.default;
                var9 = var3.minutes;
                var4 = var11.bind(var6)(var9);
            case 245:
                var9 = var3.seconds;
                var2 = 0;
                if (!var9) {
                    _fun23882_ip = 276;
                    continue _fun23882
                }
            case 256:
                var9 = _closure1_slot3;
                var9 = var9.default;
                var3 = var3.seconds;
                var2 = var9.bind(var6)(var3);
            case 276:
                var3 = _closure1_slot1;
                var9 = var3.default;
                var3 = 12;
                var3 = var3 * var10;
                var5 = var5 + var3;
                var3 = arg0;
                var5 = var9.bind(var6)(var3, var5);
                var1 = _closure1_slot0;
                var3 = var1.default;
                var1 = 7;
                var1 = var1 * var8;
                var1 = var7 + var1;
                var1 = var3.bind(var6)(var5, var1);
                var3 = 60;
                var0 = var3 * var0;
                var0 = var4 + var0;
                var0 = var3 * var0;
                var3 = var2 + var0;
                var0 = global;
                var2 = var0.Date;
                var0 = var1.getTime;
                var1 = var0.bind(var1)();
                var0 = 1000;
                var0 = var0 * var3;
                var13 = var1 - var0;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var14 = var1;
                var0 = new var14[var2](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            case 404:
                var0 = global;
                var2 = var0.Date;
                var13 = var0.NaN;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var14 = var1;
                var0 = new var14[var2](var13, var12);
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
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2903, 2965, 2533, 2536]);