// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var4 = function arg0() {
        _fun22873: for (var _fun22873_ip = 0;;) switch (_fun22873_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22873_ip = 18;
                    continue _fun22873
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22873_ip = 27;
                    continue _fun22873
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
        _fun22874: for (var _fun22874_ip = 0;;) switch (_fun22874_ip) {
            case 0:
                var4 = arg1;
                var11 = undefined;
                var0 = undefined;
                var1 = _closure1_slot2;
                var1 = var1.default;
                var0 = arguments;
                var13 = 1;
                var0 = var1.bind(var11)(var13, var0);
                var0 = _closure1_slot0;
                var1 = var0.default;
                var0 = arg0;
                var12 = var1.bind(var11)(var0);
                var0 = global;
                var3 = var0.isNaN;
                var1 = var12.getTime;
                var1 = var1.bind(var12)();
                var1 = var3.bind(var11)(var1);
                if (var1) {
                    _fun22874_ip = 774;
                    continue _fun22874
                }
            case 76:
                var5 = var0.String;
                var8 = null;
                var1 = var8 == var4;
                var6 = undefined;
                if (var1) {
                    _fun22874_ip = 98;
                    continue _fun22874
                }
            case 93:
                var6 = var4.format;
            case 98:
                var3 = 'extended';
                var1 = var3;
                if (!(var8 !== var6)) {
                    _fun22874_ip = 119;
                    continue _fun22874
                }
            case 109:
                var1 = var3;
                if (!(var11 !== var6)) {
                    _fun22874_ip = 119;
                    continue _fun22874
                }
            case 116:
                var1 = var6;
            case 119:
                var1 = var5.bind(var11)(var1);
                var5 = var0.String;
                var6 = var8 == var4;
                var7 = undefined;
                if (var6) {
                    _fun22874_ip = 145;
                    continue _fun22874
                }
            case 139:
                var7 = var4.representation;
            case 145:
                var6 = 'complete';
                var4 = var6;
                if (!(var8 !== var7)) {
                    _fun22874_ip = 166;
                    continue _fun22874
                }
            case 156:
                var4 = var6;
                if (!(var11 !== var7)) {
                    _fun22874_ip = 166;
                    continue _fun22874
                }
            case 163:
                var4 = var7;
            case 166:
                var5 = var5.bind(var11)(var4);
                if (!(var3 !== var1)) {
                    _fun22874_ip = 186;
                    continue _fun22874
                }
            case 175:
                var4 = 'basic';
                if (!(var4 === var1)) {
                    _fun22874_ip = 740;
                    continue _fun22874
                }
            case 186:
                var4 = 'date';
                var4 = var4 !== var5;
                if (!var4) {
                    _fun22874_ip = 212;
                    continue _fun22874
                }
            case 197:
                var7 = 'time';
                if (!(var7 !== var5)) {
                    _fun22874_ip = 212;
                    continue _fun22874
                }
            case 205:
                if (!(var6 === var5)) {
                    _fun22874_ip = 706;
                    continue _fun22874
                }
            case 212:
                var1 = var3 === var1;
                var7 = '';
                var9 = var7;
                if (!var1) {
                    _fun22874_ip = 230;
                    continue _fun22874
                }
            case 226:
                var9 = '-';
            case 230:
                var8 = var7;
                if (!var1) {
                    _fun22874_ip = 240;
                    continue _fun22874
                }
            case 236:
                var8 = ':';
            case 240:
                var1 = 'time';
                var3 = var7;
                if (!(var1 !== var5)) {
                    _fun22874_ip = 389;
                    continue _fun22874
                }
            case 254:
                var1 = _closure1_slot1;
                var5 = var1.default;
                var1 = var12.getDate;
                var1 = var1.bind(var12)();
                var10 = 2;
                var6 = var5.bind(var11)(var1, var10);
                var1 = _closure1_slot1;
                var5 = var1.default;
                var1 = var12.getMonth;
                var1 = var1.bind(var12)();
                var1 = var1 + var13;
                var10 = var5.bind(var11)(var1, var10);
                var1 = _closure1_slot1;
                var13 = var1.default;
                var1 = var12.getFullYear;
                var5 = var1.bind(var12)();
                var1 = 4;
                var5 = var13.bind(var11)(var5, var1);
                var1 = var7.concat;
                var5 = var1.bind(var7)(var5);
                var1 = var5.concat;
                var5 = var1.bind(var5)(var9);
                var1 = var5.concat;
                var5 = var1.bind(var5)(var10);
                var1 = var5.concat;
                var5 = var1.bind(var5)(var9);
                var1 = var5.concat;
                var3 = var1.bind(var5)(var6);
            case 389:
                var1 = var3;
                if (!var4) {
                    _fun22874_ip = 704;
                    continue _fun22874
                }
            case 398:
                var4 = var12.getTimezoneOffset;
                var10 = var4.bind(var12)();
                var4 = 'Z';
                var5 = 0;
                if (!(var5 !== var10)) {
                    _fun22874_ip = 549;
                    continue _fun22874
                }
            case 421:
                var9 = var0.Math;
                var6 = var9.abs;
                var15 = var6.bind(var9)(var10);
                var6 = _closure1_slot1;
                var13 = var6.default;
                var16 = var0.Math;
                var14 = var16.floor;
                var6 = 60;
                var9 = var15 / var6;
                var9 = var14.bind(var16)(var9);
                var14 = 2;
                var13 = var13.bind(var11)(var9, var14);
                var9 = _closure1_slot1;
                var9 = var9.default;
                var6 = var15 % var6;
                var9 = var9.bind(var11)(var6, var14);
                var6 = var7.concat;
                var10 = var10 < var5;
                var5 = '-';
                if (!var10) {
                    _fun22874_ip = 519;
                    continue _fun22874
                }
            case 515:
                var5 = '+';
            case 519:
                var10 = var6.bind(var7)(var5);
                var6 = var10.concat;
                var5 = ':';
                var6 = var6.bind(var10)(var13, var5);
                var5 = var6.concat;
                var4 = var5.bind(var6)(var9);
            case 549:
                var6 = 'T';
                if (!(var7 === var3)) {
                    _fun22874_ip = 560;
                    continue _fun22874
                }
            case 557:
                var6 = var7;
            case 560:
                var5 = _closure1_slot1;
                var9 = var5.default;
                var5 = var12.getHours;
                var5 = var5.bind(var12)();
                var10 = 2;
                var9 = var9.bind(var11)(var5, var10);
                var5 = new Array(3);
                var5[0] = var9;
                var9 = _closure1_slot1;
                var13 = var9.default;
                var9 = var12.getMinutes;
                var9 = var9.bind(var12)();
                var9 = var13.bind(var11)(var9, var10);
                var5[1] = var9;
                var2 = _closure1_slot1;
                var9 = var2.default;
                var2 = var12.getSeconds;
                var2 = var2.bind(var12)();
                var2 = var9.bind(var11)(var2, var10);
                var5[2] = var2;
                var2 = var5.join;
                var5 = var2.bind(var5)(var8);
                var2 = var7.concat;
                var3 = var2.bind(var7)(var3);
                var2 = var3.concat;
                var3 = var2.bind(var3)(var6);
                var2 = var3.concat;
                var3 = var2.bind(var3)(var5);
                var2 = var3.concat;
                var1 = var2.bind(var3)(var4);
            case 704:
                return var1;
            case 706:
                var3 = var0.RangeError;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var18 = "representation must be 'date', 'time', or 'complete'";
                var19 = var2;
                var1 = new var19[var3](var18, var17);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 740:
                var3 = var0.RangeError;
                var1 = var3.prototype;
                var2 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var18 = "format must be 'extended' or 'basic'";
                var19 = var2;
                var1 = new var19[var3](var18, var17);
                var1 = var1 instanceof Object ? var1 : var2;
                throw var1;
            case 774:
                var2 = var0.RangeError;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var18 = 'Invalid time value';
                var19 = var1;
                var0 = new var19[var2](var18, var17);
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [2564, 2807, 2565]);