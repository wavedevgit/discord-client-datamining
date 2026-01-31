// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var2, var0, var3);
    var0 = function arg0() {
        var2 = _closure1_slot0;
        var1 = var2.indexOf;
        var0 = arg0;
        var1 = var1.bind(var2)(var0);
        var0 = -1;
        var0 = var0 !== var1;
        return var0;
    };
    var2.isProtectedDayOfYearToken = var0;
    var0 = function arg0() {
        var2 = _closure1_slot1;
        var1 = var2.indexOf;
        var0 = arg0;
        var1 = var1.bind(var2)(var0);
        var0 = -1;
        var0 = var0 !== var1;
        return var0;
    };
    var2.isProtectedWeekYearToken = var0;
    var0 = function arg0, arg1, arg2() {
        _fun22757: for (var _fun22757_ip = 0;;) switch (_fun22757_ip) {
            case 0:
                var1 = arg0;
                var5 = arg1;
                var4 = arg2;
                var0 = 'YYYY';
                if (!(var0 !== var1)) {
                    _fun22757_ip = 267;
                    continue _fun22757
                }
            case 22:
                var0 = 'YY';
                if (!(var0 !== var1)) {
                    _fun22757_ip = 197;
                    continue _fun22757
                }
            case 35:
                var0 = 'D';
                if (!(var0 !== var1)) {
                    _fun22757_ip = 127;
                    continue _fun22757
                }
            case 43:
                var0 = 'DD';
                if (!(var0 !== var1)) {
                    _fun22757_ip = 57;
                    continue _fun22757
                }
            case 53:
                var0 = undefined;
                return var0;
            case 57:
                var0 = global;
                var2 = var0.RangeError;
                var3 = 'Use `dd` instead of `DD` (in `';
                var1 = var3.concat;
                var0 = '`) for formatting days of the month to the input `';
                var3 = var1.bind(var3)(var5, var0);
                var1 = var3.concat;
                var0 = '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md';
                var7 = var1.bind(var3)(var4, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 127:
                var0 = global;
                var2 = var0.RangeError;
                var3 = 'Use `d` instead of `D` (in `';
                var1 = var3.concat;
                var0 = '`) for formatting days of the month to the input `';
                var3 = var1.bind(var3)(var5, var0);
                var1 = var3.concat;
                var0 = '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md';
                var7 = var1.bind(var3)(var4, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 197:
                var0 = global;
                var2 = var0.RangeError;
                var3 = 'Use `yy` instead of `YY` (in `';
                var1 = var3.concat;
                var0 = '`) for formatting years to the input `';
                var3 = var1.bind(var3)(var5, var0);
                var1 = var3.concat;
                var0 = '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md';
                var7 = var1.bind(var3)(var4, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
            case 267:
                var0 = global;
                var2 = var0.RangeError;
                var3 = 'Use `yyyy` instead of `YYYY` (in `';
                var1 = var3.concat;
                var0 = '`) for formatting years to the input `';
                var3 = var1.bind(var3)(var5, var0);
                var1 = var3.concat;
                var0 = '`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md';
                var7 = var1.bind(var3)(var4, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = var1;
                var0 = new var8[var2](var7, var6);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var2.throwProtectedError = var0;
    var0 = ['D', 'DD'];
    var _closure1_slot0 = var0;
    var0 = ['YY', 'YYYY'];
    var _closure1_slot1 = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);