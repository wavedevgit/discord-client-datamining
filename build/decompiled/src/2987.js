// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun24015: for (var _fun24015_ip = 0;;) switch (_fun24015_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun24015_ip = 18;
                    continue _fun24015
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun24015_ip = 27;
                    continue _fun24015
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
        _fun24016: for (var _fun24016_ip = 0;;) switch (_fun24016_ip) {
            case 0:
                var1 = global;
                var2 = var1.Symbol;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun24016_ip = 43;
                    continue _fun24016
                }
            case 20:
                var1 = var1.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun24016_ip = 50;
                    continue _fun24016
                }
            case 43:
                var2 = function arg0() {
                    _fun24018: for (var _fun24018_ip = 0;;) switch (_fun24018_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun24018_ip = 58;
                                continue _fun24018
                            }
                        case 6:
                            var0 = global;
                            var2 = var0.Symbol;
                            var3 = 'function';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun24018_ip = 58;
                                continue _fun24018
                            }
                        case 24:
                            var3 = var1.constructor;
                            var2 = var0.Symbol;
                            if (!(var3 === var2)) {
                                _fun24018_ip = 58;
                                continue _fun24018
                            }
                        case 39:
                            var0 = var0.Symbol;
                            var2 = var0.prototype;
                            var0 = 'symbol';
                            if (!(var1 === var2)) {
                                _fun24018_ip = 61;
                                continue _fun24018
                            }
                        case 58:
                            var0 = typeof var1;
                        case 61:
                            return var0;
                    }
                };
                _fun24016_ip = 55;
                continue _fun24016;
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
        _fun24019: for (var _fun24019_ip = 0;;) switch (_fun24019_ip) {
            case 0:
                var2 = arg1;
                var5 = undefined;
                var0 = undefined;
                var1 = _closure1_slot3;
                var3 = var1.default;
                var0 = arguments;
                var1 = var0;
                var0 = 2;
                var0 = var3.bind(var5)(var0, var1);
                var0 = _closure1_slot4;
                var1 = var0.bind(var5)(var2);
                var0 = 'object';
                if (!(var0 === var1)) {
                    _fun24019_ip = 410;
                    continue _fun24019
                }
            case 53:
                var6 = null;
                if (!(var6 !== var2)) {
                    _fun24019_ip = 410;
                    continue _fun24019
                }
            case 62:
                var0 = _closure1_slot0;
                var1 = var0.default;
                var0 = arg0;
                var8 = var1.bind(var5)(var0);
                var0 = global;
                var3 = var0.isNaN;
                var1 = var8.getTime;
                var1 = var1.bind(var8)();
                var1 = var3.bind(var5)(var1);
                if (var1) {
                    _fun24019_ip = 376;
                    continue _fun24019
                }
            case 108:
                var1 = var2.year;
                if (!(var6 != var1)) {
                    _fun24019_ip = 135;
                    continue _fun24019
                }
            case 118:
                var3 = var8.setFullYear;
                var1 = var2.year;
                var1 = var3.bind(var8)(var1);
            case 135:
                var3 = var2.month;
                var1 = var8;
                if (!(var6 != var3)) {
                    _fun24019_ip = 169;
                    continue _fun24019
                }
            case 148:
                var3 = _closure1_slot1;
                var7 = var3.default;
                var3 = var2.month;
                var1 = var7.bind(var5)(var8, var3);
            case 169:
                var3 = var2.date;
                if (!(var6 != var3)) {
                    _fun24019_ip = 210;
                    continue _fun24019
                }
            case 179:
                var7 = var1.setDate;
                var3 = _closure1_slot2;
                var8 = var3.default;
                var3 = var2.date;
                var3 = var8.bind(var5)(var3);
                var3 = var7.bind(var1)(var3);
            case 210:
                var3 = var2.hours;
                if (!(var6 != var3)) {
                    _fun24019_ip = 251;
                    continue _fun24019
                }
            case 220:
                var7 = var1.setHours;
                var3 = _closure1_slot2;
                var8 = var3.default;
                var3 = var2.hours;
                var3 = var8.bind(var5)(var3);
                var3 = var7.bind(var1)(var3);
            case 251:
                var3 = var2.minutes;
                if (!(var6 != var3)) {
                    _fun24019_ip = 292;
                    continue _fun24019
                }
            case 261:
                var7 = var1.setMinutes;
                var3 = _closure1_slot2;
                var8 = var3.default;
                var3 = var2.minutes;
                var3 = var8.bind(var5)(var3);
                var3 = var7.bind(var1)(var3);
            case 292:
                var3 = var2.seconds;
                if (!(var6 != var3)) {
                    _fun24019_ip = 333;
                    continue _fun24019
                }
            case 302:
                var7 = var1.setSeconds;
                var3 = _closure1_slot2;
                var8 = var3.default;
                var3 = var2.seconds;
                var3 = var8.bind(var5)(var3);
                var3 = var7.bind(var1)(var3);
            case 333:
                var3 = var2.milliseconds;
                if (!(var6 != var3)) {
                    _fun24019_ip = 374;
                    continue _fun24019
                }
            case 343:
                var3 = var1.setMilliseconds;
                var4 = _closure1_slot2;
                var4 = var4.default;
                var2 = var2.milliseconds;
                var2 = var4.bind(var5)(var2);
                var2 = var3.bind(var1)(var2);
            case 374:
                return var1;
            case 376:
                var2 = var0.Date;
                var10 = var0.NaN;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var11 = var1;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            case 410:
                var0 = global;
                var2 = var0.RangeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var10 = 'values parameter must be an object';
                var11 = var1;
                var0 = new var11[var2](var10, var9);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [2575, 2988, 2579, 2576]);