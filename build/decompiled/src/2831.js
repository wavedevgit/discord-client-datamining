// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun22969: for (var _fun22969_ip = 0;;) switch (_fun22969_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22969_ip = 18;
                    continue _fun22969
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22969_ip = 27;
                    continue _fun22969
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
        _fun22970: for (var _fun22970_ip = 0;;) switch (_fun22970_ip) {
            case 0:
                var5 = arg1;
                var11 = undefined;
                var0 = undefined;
                var1 = arguments.length;
                var14 = 1;
                if (!(!(var1 < var14))) {
                    _fun22970_ip = 646;
                    continue _fun22970
                }
            case 20:
                var1 = _closure1_slot0;
                var2 = var1.default;
                var1 = arg0;
                var12 = var2.bind(var11)(var1);
                var1 = _closure1_slot1;
                var1 = var1.default;
                var2 = var1.bind(var11)(var12);
                var1 = global;
                if (var2) {
                    _fun22970_ip = 93;
                    continue _fun22970
                }
            case 59:
                var6 = var1.RangeError;
                var2 = var6.prototype;
                var4 = Object.create(var2, {
                    constructor: {
                        value: var6
                    }
                });
                var16 = 'Invalid time value';
                var17 = var4;
                var2 = new var17[var6](var16, var15);
                var2 = var2 instanceof Object ? var2 : var4;
                throw var2;
            case 93:
                var6 = var1.String;
                var9 = null;
                var2 = var9 == var5;
                var7 = undefined;
                if (var2) {
                    _fun22970_ip = 115;
                    continue _fun22970
                }
            case 110:
                var7 = var5.format;
            case 115:
                var4 = 'extended';
                var2 = var4;
                if (!(var9 !== var7)) {
                    _fun22970_ip = 136;
                    continue _fun22970
                }
            case 126:
                var2 = var4;
                if (!(var11 !== var7)) {
                    _fun22970_ip = 136;
                    continue _fun22970
                }
            case 133:
                var2 = var7;
            case 136:
                var2 = var6.bind(var11)(var2);
                var7 = var1.String;
                var6 = var9 == var5;
                var8 = undefined;
                if (var6) {
                    _fun22970_ip = 162;
                    continue _fun22970
                }
            case 156:
                var8 = var5.representation;
            case 162:
                var6 = 'complete';
                var5 = var6;
                if (!(var9 !== var8)) {
                    _fun22970_ip = 183;
                    continue _fun22970
                }
            case 173:
                var5 = var6;
                if (!(var11 !== var8)) {
                    _fun22970_ip = 183;
                    continue _fun22970
                }
            case 180:
                var5 = var8;
            case 183:
                var7 = var7.bind(var11)(var5);
                if (!(var4 !== var2)) {
                    _fun22970_ip = 203;
                    continue _fun22970
                }
            case 192:
                var5 = 'basic';
                if (!(var5 === var2)) {
                    _fun22970_ip = 612;
                    continue _fun22970
                }
            case 203:
                var5 = 'date';
                var5 = var5 !== var7;
                if (!var5) {
                    _fun22970_ip = 229;
                    continue _fun22970
                }
            case 214:
                var8 = 'time';
                if (!(var8 !== var7)) {
                    _fun22970_ip = 229;
                    continue _fun22970
                }
            case 222:
                if (!(var6 === var7)) {
                    _fun22970_ip = 578;
                    continue _fun22970
                }
            case 229:
                var2 = var4 === var2;
                var10 = '';
                var9 = var10;
                if (!var2) {
                    _fun22970_ip = 247;
                    continue _fun22970
                }
            case 243:
                var9 = '-';
            case 247:
                var6 = var10;
                if (!var2) {
                    _fun22970_ip = 257;
                    continue _fun22970
                }
            case 253:
                var6 = ':';
            case 257:
                var2 = 'time';
                var4 = var10;
                if (!(var2 !== var7)) {
                    _fun22970_ip = 406;
                    continue _fun22970
                }
            case 271:
                var2 = _closure1_slot2;
                var7 = var2.default;
                var2 = var12.getDate;
                var2 = var2.bind(var12)();
                var13 = 2;
                var8 = var7.bind(var11)(var2, var13);
                var2 = _closure1_slot2;
                var7 = var2.default;
                var2 = var12.getMonth;
                var2 = var2.bind(var12)();
                var2 = var2 + var14;
                var13 = var7.bind(var11)(var2, var13);
                var2 = _closure1_slot2;
                var14 = var2.default;
                var2 = var12.getFullYear;
                var7 = var2.bind(var12)();
                var2 = 4;
                var7 = var14.bind(var11)(var7, var2);
                var2 = var10.concat;
                var7 = var2.bind(var10)(var7);
                var2 = var7.concat;
                var7 = var2.bind(var7)(var9);
                var2 = var7.concat;
                var7 = var2.bind(var7)(var13);
                var2 = var7.concat;
                var7 = var2.bind(var7)(var9);
                var2 = var7.concat;
                var4 = var2.bind(var7)(var8);
            case 406:
                var2 = var4;
                if (!var5) {
                    _fun22970_ip = 576;
                    continue _fun22970
                }
            case 415:
                var5 = _closure1_slot2;
                var7 = var5.default;
                var5 = var12.getHours;
                var5 = var5.bind(var12)();
                var9 = 2;
                var8 = var7.bind(var11)(var5, var9);
                var5 = _closure1_slot2;
                var7 = var5.default;
                var5 = var12.getMinutes;
                var5 = var5.bind(var12)();
                var7 = var7.bind(var11)(var5, var9);
                var3 = _closure1_slot2;
                var5 = var3.default;
                var3 = var12.getSeconds;
                var3 = var3.bind(var12)();
                var5 = var5.bind(var11)(var3, var9);
                var9 = ' ';
                if (!(var10 === var4)) {
                    _fun22970_ip = 506;
                    continue _fun22970
                }
            case 503:
                var9 = var10;
            case 506:
                var3 = var10.concat;
                var4 = var3.bind(var10)(var4);
                var3 = var4.concat;
                var4 = var3.bind(var4)(var9);
                var3 = var4.concat;
                var4 = var3.bind(var4)(var8);
                var3 = var4.concat;
                var4 = var3.bind(var4)(var6);
                var3 = var4.concat;
                var4 = var3.bind(var4)(var7);
                var3 = var4.concat;
                var4 = var3.bind(var4)(var6);
                var3 = var4.concat;
                var2 = var3.bind(var4)(var5);
            case 576:
                return var2;
            case 578:
                var4 = var1.RangeError;
                var2 = var4.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var16 = "representation must be 'date', 'time', or 'complete'";
                var17 = var3;
                var2 = new var17[var4](var16, var15);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 612:
                var3 = var1.RangeError;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var16 = "format must be 'extended' or 'basic'";
                var17 = var2;
                var1 = new var17[var3](var16, var15);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 646:
                var1 = global;
                var2 = var1.TypeError;
                var4 = '1 argument required, but only ';
                var3 = var4.concat;
                var1 = arguments.length;
                var0 = ' present';
                var16 = var3.bind(var4)(var1, var0);
                var1 = var2.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var2
                    }
                });
                var17 = var1;
                var0 = new var17[var2](var16, var15);
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
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2575, 2757, 2818]);