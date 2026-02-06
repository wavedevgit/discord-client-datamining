// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun22600: for (var _fun22600_ip = 0;;) switch (_fun22600_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22600_ip = 18;
                    continue _fun22600
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22600_ip = 27;
                    continue _fun22600
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
    var0 = function arg0, arg1() {
        _fun22601: for (var _fun22601_ip = 0;;) switch (_fun22601_ip) {
            case 0:
                var4 = undefined;
                var1 = undefined;
                var2 = _closure1_slot2;
                var3 = var2.default;
                var1 = arguments;
                var2 = var1;
                var1 = 2;
                var1 = var3.bind(var4)(var1, var2);
                var1 = _closure1_slot1;
                var2 = var1.default;
                var1 = arg0;
                var2 = var2.bind(var4)(var1);
                var0 = _closure1_slot0;
                var1 = var0.default;
                var0 = arg1;
                var3 = var1.bind(var4)(var0);
                var0 = global;
                var1 = var0.isNaN;
                var1 = var1.bind(var4)(var3);
                if (var1) {
                    _fun22601_ip = 224;
                    continue _fun22601
                }
            case 83:
                if (var3) {
                    _fun22601_ip = 88;
                    continue _fun22601
                }
            case 86:
                return var2;
            case 88:
                var1 = var2.getDate;
                var6 = var1.bind(var2)();
                var5 = var0.Date;
                var1 = var2.getTime;
                var10 = var1.bind(var2)();
                var4 = var5.prototype;
                var4 = Object.create(var4, {
                    constructor: {
                        value: var5
                    }
                });
                var11 = var4;
                var1 = new var11[var5](var10, var9);
                var7 = var1 instanceof Object ? var1 : var4;
                var4 = var7.setMonth;
                var1 = var2.getMonth;
                var1 = var1.bind(var2)();
                var3 = var1 + var3;
                var1 = 1;
                var3 = var3 + var1;
                var1 = 0;
                var1 = var4.bind(var7)(var3, var1);
                var1 = var7.getDate;
                var3 = var1.bind(var7)();
                var1 = var7;
                if (!(!(var6 >= var3))) {
                    _fun22601_ip = 222;
                    continue _fun22601
                }
            case 186:
                var5 = var2.setFullYear;
                var3 = var7.getFullYear;
                var4 = var3.bind(var7)();
                var3 = var7.getMonth;
                var3 = var3.bind(var7)();
                var3 = var5.bind(var2)(var4, var3, var6);
                var1 = var2;
            case 222:
                return var1;
            case 224:
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
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2579, 2575, 2576]);