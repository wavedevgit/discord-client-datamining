// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function(arg0) { // Original name: _interopRequireDefault, environment: var3
        _fun22402: for (var _fun22402_ip = 0;;) switch (_fun22402_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22402_ip = 18;
                    continue _fun22402
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22402_ip = 27;
                    continue _fun22402
                }
            case 18:
                var1 = {};
                var1.default = var2;
                var0 = var1;
            case 27:
                return var0;
        }
    };
    var0 = function(arg0) { // Original name: _typeof, environment: var3
        _fun22403: for (var _fun22403_ip = 0;;) switch (_fun22403_ip) {
            case 0:
                var1 = global;
                var2 = var1.Symbol;
                var3 = 'function';
                var2 = typeof var2;
                if (!(var3 === var2)) {
                    _fun22403_ip = 42;
                    continue _fun22403
                }
            case 20:
                var1 = var1.Symbol;
                var1 = var1.iterator;
                var2 = 'symbol';
                var1 = typeof var1;
                if (!(var2 !== var1)) {
                    _fun22403_ip = 49;
                    continue _fun22403
                }
            case 42:
                var2 = function(arg0) { // Original name: _typeof, environment: var0
                    _fun22405: for (var _fun22405_ip = 0;;) switch (_fun22405_ip) {
                        case 0:
                            var1 = arg0;
                            if (!var1) {
                                _fun22405_ip = 58;
                                continue _fun22405
                            }
                        case 6:
                            var0 = global;
                            var2 = var0.Symbol;
                            var3 = 'function';
                            var2 = typeof var2;
                            if (!(var3 === var2)) {
                                _fun22405_ip = 58;
                                continue _fun22405
                            }
                        case 24:
                            var3 = var1.constructor;
                            var2 = var0.Symbol;
                            if (!(var3 === var2)) {
                                _fun22405_ip = 58;
                                continue _fun22405
                            }
                        case 39:
                            var0 = var0.Symbol;
                            var2 = var0.prototype;
                            var0 = 'symbol';
                            if (!(var1 === var2)) {
                                _fun22405_ip = 61;
                                continue _fun22405
                            }
                        case 58:
                            var0 = typeof var1;
                        case 61:
                            return var0;
                    }
                };
                _fun22403_ip = 54;
                continue _fun22403;
            case 49:
                var2 = function(arg0) { // Original name: _typeof, environment: var0
                    var0 = arg0;
                    var0 = typeof var0;
                    return var0;
                };
            case 54:
                _closure1_slot5 = var2;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
        }
    };
    var _closure1_slot5 = var0;
    var0 = global;
    var8 = var0.Object;
    var7 = var8.defineProperty;
    var2 = {};
    var0 = true;
    var2.value = var0;
    var0 = '__esModule';
    var0 = var7.bind(var8)(var1, var0, var2);
    var0 = function(arg0, arg1) { // Original name: add, environment: var3
        _fun22406: for (var _fun22406_ip = 0;;) switch (_fun22406_ip) {
            case 0:
                var1 = arg1;
                var7 = undefined;
                var0 = undefined;
                var2 = _closure1_slot3;
                var4 = var2.default;
                var0 = arguments;
                var2 = var0;
                var0 = 2;
                var0 = var4.bind(var7)(var0, var2);
                if (!var1) {
                    _fun22406_ip = 436;
                    continue _fun22406
                }
            case 39:
                var0 = _closure1_slot5;
                var2 = var0.bind(var7)(var1);
                var0 = 'object';
                if (!(var0 === var2)) {
                    _fun22406_ip = 436;
                    continue _fun22406
                }
            case 59:
                var0 = var1.years;
                var12 = 0;
                if (!var0) {
                    _fun22406_ip = 90;
                    continue _fun22406
                }
            case 70:
                var0 = _closure1_slot4;
                var4 = var0.default;
                var0 = var1.years;
                var12 = var4.bind(var7)(var0);
            case 90:
                var0 = var1.months;
                var11 = 0;
                if (!var0) {
                    _fun22406_ip = 121;
                    continue _fun22406
                }
            case 101:
                var0 = _closure1_slot4;
                var4 = var0.default;
                var0 = var1.months;
                var11 = var4.bind(var7)(var0);
            case 121:
                var0 = var1.weeks;
                var9 = 0;
                if (!var0) {
                    _fun22406_ip = 152;
                    continue _fun22406
                }
            case 132:
                var0 = _closure1_slot4;
                var4 = var0.default;
                var0 = var1.weeks;
                var9 = var4.bind(var7)(var0);
            case 152:
                var0 = var1.days;
                var8 = 0;
                if (!var0) {
                    _fun22406_ip = 183;
                    continue _fun22406
                }
            case 163:
                var0 = _closure1_slot4;
                var4 = var0.default;
                var0 = var1.days;
                var8 = var4.bind(var7)(var0);
            case 183:
                var4 = var1.hours;
                var0 = 0;
                if (!var4) {
                    _fun22406_ip = 214;
                    continue _fun22406
                }
            case 194:
                var4 = _closure1_slot4;
                var5 = var4.default;
                var4 = var1.hours;
                var0 = var5.bind(var7)(var4);
            case 214:
                var5 = var1.minutes;
                var4 = 0;
                if (!var5) {
                    _fun22406_ip = 245;
                    continue _fun22406
                }
            case 225:
                var5 = _closure1_slot4;
                var6 = var5.default;
                var5 = var1.minutes;
                var4 = var6.bind(var7)(var5);
            case 245:
                var5 = var1.seconds;
                var2 = 0;
                if (!var5) {
                    _fun22406_ip = 276;
                    continue _fun22406
                }
            case 256:
                var5 = _closure1_slot4;
                var5 = var5.default;
                var1 = var1.seconds;
                var2 = var5.bind(var7)(var1);
            case 276:
                var1 = _closure1_slot2;
                var5 = var1.default;
                var1 = arg0;
                var10 = var5.bind(var7)(var1);
                if (var11) {
                    _fun22406_ip = 302;
                    continue _fun22406
                }
            case 296:
                var6 = var10;
                if (!var12) {
                    _fun22406_ip = 328;
                    continue _fun22406
                }
            case 302:
                var1 = _closure1_slot1;
                var5 = var1.default;
                var1 = 12;
                var1 = var1 * var12;
                var1 = var11 + var1;
                var6 = var5.bind(var7)(var10, var1);
            case 328:
                if (var8) {
                    _fun22406_ip = 337;
                    continue _fun22406
                }
            case 331:
                var1 = var6;
                if (!var9) {
                    _fun22406_ip = 363;
                    continue _fun22406
                }
            case 337:
                var3 = _closure1_slot0;
                var5 = var3.default;
                var3 = 7;
                var3 = var3 * var9;
                var3 = var8 + var3;
                var1 = var5.bind(var7)(var6, var3);
            case 363:
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
                var14 = var1 + var0;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var15 = var1;
                var0 = new var15[var2](var14, var13);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            case 436:
                var0 = global;
                var2 = var0.Date;
                var14 = var0.NaN;
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var15 = var1;
                var0 = new var15[var2](var14, var13);
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
    var2 = 4;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot4 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2680, 2681, 2532, 2533, 2536]);