// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun22797: for (var _fun22797_ip = 0;;) switch (_fun22797_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22797_ip = 18;
                    continue _fun22797
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22797_ip = 27;
                    continue _fun22797
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
    var0 = function arg0() {
        _fun22798: for (var _fun22798_ip = 0;;) switch (_fun22798_ip) {
            case 0:
                var4 = undefined;
                var0 = undefined;
                var2 = arguments.length;
                var1 = 1;
                if (!(!(var2 < var1))) {
                    _fun22798_ip = 344;
                    continue _fun22798
                }
            case 17:
                var2 = _closure1_slot0;
                var3 = var2.default;
                var2 = arg0;
                var11 = var3.bind(var4)(var2);
                var2 = _closure1_slot1;
                var2 = var2.default;
                var2 = var2.bind(var4)(var11);
                if (var2) {
                    _fun22798_ip = 90;
                    continue _fun22798
                }
            case 54:
                var2 = global;
                var5 = var2.RangeError;
                var2 = var5.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var5
                    }
                });
                var13 = 'Invalid time value';
                var14 = var3;
                var2 = new var14[var5](var13, var12);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 90:
                var3 = _closure1_slot3;
                var2 = var11.getUTCDay;
                var2 = var2.bind(var11)();
                var10 = var3[var2];
                var2 = _closure1_slot2;
                var5 = var2.default;
                var2 = var11.getUTCDate;
                var2 = var2.bind(var11)();
                var3 = 2;
                var9 = var5.bind(var4)(var2, var3);
                var5 = _closure1_slot4;
                var2 = var11.getUTCMonth;
                var2 = var2.bind(var11)();
                var8 = var5[var2];
                var2 = var11.getUTCFullYear;
                var7 = var2.bind(var11)();
                var2 = _closure1_slot2;
                var5 = var2.default;
                var2 = var11.getUTCHours;
                var2 = var2.bind(var11)();
                var6 = var5.bind(var4)(var2, var3);
                var2 = _closure1_slot2;
                var5 = var2.default;
                var2 = var11.getUTCMinutes;
                var2 = var2.bind(var11)();
                var5 = var5.bind(var4)(var2, var3);
                var1 = _closure1_slot2;
                var2 = var1.default;
                var1 = var11.getUTCSeconds;
                var1 = var1.bind(var11)();
                var4 = var2.bind(var4)(var1, var3);
                var3 = '';
                var2 = var3.concat;
                var1 = ', ';
                var2 = var2.bind(var3)(var10, var1);
                var1 = var2.concat;
                var3 = ' ';
                var2 = var1.bind(var2)(var9, var3);
                var1 = var2.concat;
                var2 = var1.bind(var2)(var8, var3);
                var1 = var2.concat;
                var2 = var1.bind(var2)(var7, var3);
                var1 = var2.concat;
                var3 = ':';
                var2 = var1.bind(var2)(var6, var3);
                var1 = var2.concat;
                var3 = var1.bind(var2)(var5, var3);
                var2 = var3.concat;
                var1 = ' GMT';
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            case 344:
                var1 = global;
                var2 = var1.TypeError;
                var4 = '1 arguments required, but only ';
                var3 = var4.concat;
                var1 = arguments.length;
                var0 = ' present';
                var13 = var3.bind(var4)(var1, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
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
    var2 = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var _closure1_slot3 = var2;
    var2 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var _closure1_slot4 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2534, 2716, 2777]);