// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = function(arg0) { // Original name: _interopRequireDefault, environment: var3
        _fun23807: for (var _fun23807_ip = 0;;) switch (_fun23807_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun23807_ip = 18;
                    continue _fun23807
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun23807_ip = 27;
                    continue _fun23807
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
    var0 = function(arg0, arg1) { // Original name: roundToNearestMinutes, environment: var3
        _fun23808: for (var _fun23808_ip = 0;;) switch (_fun23808_ip) {
            case 0:
                var5 = arg1;
                var4 = undefined;
                var0 = undefined;
                var1 = arguments.length;
                var0 = 1;
                if (!(!(var1 < var0))) {
                    _fun23808_ip = 335;
                    continue _fun23808
                }
            case 20:
                var1 = _closure1_slot3;
                var6 = var1.default;
                var1 = null;
                var3 = var1 == var5;
                var7 = undefined;
                if (var3) {
                    _fun23808_ip = 51;
                    continue _fun23808
                }
            case 43:
                var7 = var5.nearestTo;
            case 51:
                var3 = var0;
                if (!(var1 !== var7)) {
                    _fun23808_ip = 68;
                    continue _fun23808
                }
            case 58:
                var3 = var0;
                if (!(var4 !== var7)) {
                    _fun23808_ip = 68;
                    continue _fun23808
                }
            case 65:
                var3 = var7;
            case 68:
                var3 = var6.bind(var4)(var3);
                if (!(!(var3 < var0))) {
                    _fun23808_ip = 299;
                    continue _fun23808
                }
            case 80:
                var0 = 30;
                if (!(!(var3 > var0))) {
                    _fun23808_ip = 299;
                    continue _fun23808
                }
            case 90:
                var0 = _closure1_slot2;
                var6 = var0.default;
                var0 = arg0;
                var7 = var6.bind(var4)(var0);
                var0 = var7.getSeconds;
                var8 = var0.bind(var7)();
                var0 = var7.getMinutes;
                var6 = var0.bind(var7)();
                var0 = 60;
                var0 = var8 / var0;
                var0 = var6 + var0;
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var2 = 2;
                var2 = var8[var2];
                var2 = var6.bind(var4)(var2);
                var2 = var2.getRoundingMethod;
                var6 = var1 == var5;
                var1 = undefined;
                if (var6) {
                    _fun23808_ip = 179;
                    continue _fun23808
                }
            case 173:
                var1 = var5.roundingMethod;
            case 179:
                var2 = var2.bind(var4)(var1);
                var1 = var0 / var3;
                var1 = var2.bind(var4)(var1);
                var1 = var1 * var3;
                var0 = var0 % var3;
                var2 = global;
                var5 = var2.Math;
                var4 = var5.round;
                var0 = var0 / var3;
                var0 = var4.bind(var5)(var0);
                var0 = var0 * var3;
                var6 = var2.Date;
                var2 = var7.getFullYear;
                var13 = var2.bind(var7)();
                var2 = var7.getMonth;
                var12 = var2.bind(var7)();
                var2 = var7.getDate;
                var11 = var2.bind(var7)();
                var2 = var7.getHours;
                var10 = var2.bind(var7)();
                var9 = var1 + var0;
                var1 = var6.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var6
                    }
                });
                var14 = var1;
                var0 = new var14[var6](var13, var12, var11, var10, var9, var8);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            case 299:
                var0 = global;
                var2 = var0.RangeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = '`options.nearestTo` must be between 1 and 30';
                var14 = var1;
                var0 = new var14[var2](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 335:
                var0 = global;
                var2 = var0.TypeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = '1 argument required, but only none provided present';
                var14 = var1;
                var0 = new var14[var2](var13, var12);
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
    var _closure1_slot2 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot3 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2532, 2536, 2726]);