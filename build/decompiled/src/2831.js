// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun22973: for (var _fun22973_ip = 0;;) switch (_fun22973_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22973_ip = 18;
                    continue _fun22973
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22973_ip = 27;
                    continue _fun22973
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
        _fun22974: for (var _fun22974_ip = 0;;) switch (_fun22974_ip) {
            case 0:
                var1 = arg1;
                var16 = undefined;
                var0 = undefined;
                var2 = arguments.length;
                var5 = 1;
                if (!(!(var2 < var5))) {
                    _fun22974_ip = 662;
                    continue _fun22974
                }
            case 20:
                var2 = _closure1_slot0;
                var3 = var2.default;
                var2 = arg0;
                var3 = var3.bind(var16)(var2);
                var2 = _closure1_slot1;
                var2 = var2.default;
                var2 = var2.bind(var16)(var3);
                var6 = global;
                if (var2) {
                    _fun22974_ip = 93;
                    continue _fun22974
                }
            case 59:
                var7 = var6.RangeError;
                var2 = var7.prototype;
                var4 = Object.create(var2, {
                    constructor: {
                        value: var7
                    }
                });
                var24 = 'Invalid time value';
                var25 = var4;
                var2 = new var25[var7](var24, var23);
                var2 = var2 instanceof Object ? var2 : var4;
                throw var2;
            case 93:
                var2 = var6.Number;
                var7 = null;
                var8 = var7 == var1;
                var4 = undefined;
                if (var8) {
                    _fun22974_ip = 118;
                    continue _fun22974
                }
            case 110:
                var4 = var1.fractionDigits;
            case 118:
                var13 = 0;
                var1 = 0;
                if (!(var7 !== var4)) {
                    _fun22974_ip = 135;
                    continue _fun22974
                }
            case 126:
                var1 = 0;
                if (!(var16 !== var4)) {
                    _fun22974_ip = 135;
                    continue _fun22974
                }
            case 132:
                var1 = var4;
            case 135:
                var17 = var2.bind(var16)(var1);
                if (!(var17 >= var13)) {
                    _fun22974_ip = 151;
                    continue _fun22974
                }
            case 144:
                var1 = 3;
                if (!(!(var17 <= var1))) {
                    _fun22974_ip = 185;
                    continue _fun22974
                }
            case 151:
                var7 = var6.RangeError;
                var2 = var7.prototype;
                var4 = Object.create(var2, {
                    constructor: {
                        value: var7
                    }
                });
                var24 = 'fractionDigits must be between 0 and 3 inclusively';
                var25 = var4;
                var2 = new var25[var7](var24, var23);
                var2 = var2 instanceof Object ? var2 : var4;
                throw var2;
            case 185:
                var2 = _closure1_slot2;
                var4 = var2.default;
                var2 = var3.getDate;
                var2 = var2.bind(var3)();
                var15 = 2;
                var9 = var4.bind(var16)(var2, var15);
                var2 = _closure1_slot2;
                var4 = var2.default;
                var2 = var3.getMonth;
                var2 = var2.bind(var3)();
                var2 = var2 + var5;
                var10 = var4.bind(var16)(var2, var15);
                var2 = var3.getFullYear;
                var11 = var2.bind(var3)();
                var2 = _closure1_slot2;
                var4 = var2.default;
                var2 = var3.getHours;
                var2 = var2.bind(var3)();
                var8 = var4.bind(var16)(var2, var15);
                var2 = _closure1_slot2;
                var4 = var2.default;
                var2 = var3.getMinutes;
                var2 = var2.bind(var3)();
                var7 = var4.bind(var16)(var2, var15);
                var2 = _closure1_slot2;
                var4 = var2.default;
                var2 = var3.getSeconds;
                var2 = var2.bind(var3)();
                var5 = var4.bind(var16)(var2, var15);
                var14 = var17 > var13;
                var2 = '';
                var4 = var2;
                if (!var14) {
                    _fun22974_ip = 420;
                    continue _fun22974
                }
            case 341:
                var14 = var3.getMilliseconds;
                var19 = var14.bind(var3)();
                var18 = var6.Math;
                var14 = var18.floor;
                var22 = var6.Math;
                var21 = var22.pow;
                var20 = var17 - var1;
                var1 = 10;
                var1 = var21.bind(var22)(var1, var20);
                var1 = var19 * var1;
                var14 = var14.bind(var18)(var1);
                var1 = _closure1_slot2;
                var1 = var1.default;
                var14 = var1.bind(var16)(var14, var17);
                var1 = '.';
                var4 = var1 + var14;
            case 420:
                var1 = var3.getTimezoneOffset;
                var1 = var1.bind(var3)();
                var3 = 'Z';
                if (!(var13 !== var1)) {
                    _fun22974_ip = 563;
                    continue _fun22974
                }
            case 441:
                var14 = var6.Math;
                var6 = var14.abs;
                var17 = var6.bind(var14)(var1);
                var6 = _closure1_slot2;
                var18 = var6.default;
                var6 = _closure1_slot3;
                var19 = var6.default;
                var6 = 60;
                var14 = var17 / var6;
                var14 = var19.bind(var16)(var14);
                var14 = var18.bind(var16)(var14, var15);
                var12 = _closure1_slot2;
                var12 = var12.default;
                var6 = var17 % var6;
                var12 = var12.bind(var16)(var6, var15);
                var6 = var2.concat;
                var13 = var1 < var13;
                var1 = '-';
                if (!var13) {
                    _fun22974_ip = 533;
                    continue _fun22974
                }
            case 529:
                var1 = '+';
            case 533:
                var13 = var6.bind(var2)(var1);
                var6 = var13.concat;
                var1 = ':';
                var6 = var6.bind(var13)(var14, var1);
                var1 = var6.concat;
                var3 = var1.bind(var6)(var12);
            case 563:
                var1 = var2.concat;
                var6 = '-';
                var2 = var1.bind(var2)(var11, var6);
                var1 = var2.concat;
                var6 = var1.bind(var2)(var10, var6);
                var2 = var6.concat;
                var1 = 'T';
                var2 = var2.bind(var6)(var9, var1);
                var1 = var2.concat;
                var6 = ':';
                var2 = var1.bind(var2)(var8, var6);
                var1 = var2.concat;
                var2 = var1.bind(var2)(var7, var6);
                var1 = var2.concat;
                var2 = var1.bind(var2)(var5);
                var1 = var2.concat;
                var2 = var1.bind(var2)(var4);
                var1 = var2.concat;
                var1 = var1.bind(var2)(var3);
                return var1;
            case 662:
                var1 = global;
                var2 = var1.TypeError;
                var4 = '1 arguments required, but only ';
                var3 = var4.concat;
                var1 = arguments.length;
                var0 = ' present';
                var24 = var3.bind(var4)(var1, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var25 = var1;
                var0 = new var25[var2](var24, var23);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [2573, 2755, 2816, 2577]);