// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var5 = require;
    var1 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var6;
    var4 = function arg0() {
        _fun22916: for (var _fun22916_ip = 0;;) switch (_fun22916_ip) {
            case 0:
                var2 = arg0;
                if (!var2) {
                    _fun22916_ip = 18;
                    continue _fun22916
                }
            case 6:
                var1 = var2.__esModule;
                var0 = var2;
                if (var1) {
                    _fun22916_ip = 27;
                    continue _fun22916
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
        _fun22917: for (var _fun22917_ip = 0;;) switch (_fun22917_ip) {
            case 0:
                var7 = arg1;
                var5 = undefined;
                var1 = undefined;
                var2 = _closure1_slot3;
                var3 = var2.default;
                var1 = arguments;
                var2 = 1;
                var1 = var3.bind(var5)(var2, var1);
                var1 = _closure1_slot2;
                var3 = var1.default;
                var1 = arg0;
                var4 = var3.bind(var5)(var1);
                var1 = var4.getUTCFullYear;
                var1 = var1.bind(var4)();
                var6 = _closure1_slot0;
                var8 = _closure1_slot1;
                var3 = 4;
                var3 = var8[var3];
                var3 = var6.bind(var5)(var3);
                var3 = var3.getDefaultOptions;
                var3 = var3.bind(var5)();
                var6 = _closure1_slot5;
                var6 = var6.default;
                var9 = null;
                var10 = var9 == var7;
                var8 = undefined;
                if (var10) {
                    _fun22917_ip = 113;
                    continue _fun22917
                }
            case 107:
                var8 = var7.firstWeekContainsDate;
            case 113:
                if (!(var9 !== var8)) {
                    _fun22917_ip = 121;
                    continue _fun22917
                }
            case 117:
                if (!(var5 === var8)) {
                    _fun22917_ip = 174;
                    continue _fun22917
                }
            case 121:
                var11 = var9 == var7;
                var10 = undefined;
                if (var11) {
                    _fun22917_ip = 171;
                    continue _fun22917
                }
            case 130:
                var11 = var7.locale;
                var10 = undefined;
                if (!(var9 !== var11)) {
                    _fun22917_ip = 171;
                    continue _fun22917
                }
            case 142:
                var10 = undefined;
                if (!(var5 !== var11)) {
                    _fun22917_ip = 171;
                    continue _fun22917
                }
            case 148:
                var11 = var11.options;
                var10 = undefined;
                if (!(var9 !== var11)) {
                    _fun22917_ip = 171;
                    continue _fun22917
                }
            case 159:
                var10 = undefined;
                if (!(var5 !== var11)) {
                    _fun22917_ip = 171;
                    continue _fun22917
                }
            case 165:
                var10 = var11.firstWeekContainsDate;
            case 171:
                var8 = var10;
            case 174:
                if (!(var9 !== var8)) {
                    _fun22917_ip = 182;
                    continue _fun22917
                }
            case 178:
                if (!(var5 === var8)) {
                    _fun22917_ip = 188;
                    continue _fun22917
                }
            case 182:
                var8 = var3.firstWeekContainsDate;
            case 188:
                if (!(var9 !== var8)) {
                    _fun22917_ip = 196;
                    continue _fun22917
                }
            case 192:
                if (!(var5 === var8)) {
                    _fun22917_ip = 240;
                    continue _fun22917
                }
            case 196:
                var10 = var3.locale;
                var3 = undefined;
                if (!(var9 !== var10)) {
                    _fun22917_ip = 237;
                    continue _fun22917
                }
            case 208:
                var3 = undefined;
                if (!(var5 !== var10)) {
                    _fun22917_ip = 237;
                    continue _fun22917
                }
            case 214:
                var10 = var10.options;
                var3 = undefined;
                if (!(var9 !== var10)) {
                    _fun22917_ip = 237;
                    continue _fun22917
                }
            case 225:
                var3 = undefined;
                if (!(var3 !== var10)) {
                    _fun22917_ip = 237;
                    continue _fun22917
                }
            case 231:
                var3 = var10.firstWeekContainsDate;
            case 237:
                var8 = var3;
            case 240:
                var3 = var2;
                if (!(var9 !== var8)) {
                    _fun22917_ip = 257;
                    continue _fun22917
                }
            case 247:
                var3 = var2;
                if (!(var5 !== var8)) {
                    _fun22917_ip = 257;
                    continue _fun22917
                }
            case 254:
                var3 = var8;
            case 257:
                var10 = var6.bind(var5)(var3);
                if (!(var10 >= var2)) {
                    _fun22917_ip = 273;
                    continue _fun22917
                }
            case 266:
                var3 = 7;
                if (!(!(var10 <= var3))) {
                    _fun22917_ip = 309;
                    continue _fun22917
                }
            case 273:
                var3 = global;
                var8 = var3.RangeError;
                var3 = var8.prototype;
                var6 = Object.create(var3, {
                    constructor: {
                        value: var8
                    }
                });
                var16 = 'firstWeekContainsDate must be between 1 and 7 inclusively';
                var17 = var6;
                var3 = new var17[var8](var16, var15);
                var3 = var3 instanceof Object ? var3 : var6;
                throw var3;
            case 309:
                var3 = global;
                var6 = var3.Date;
                var8 = var6.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var6
                    }
                });
                var9 = 0;
                var17 = var8;
                var16 = 0;
                var6 = new var17[var6](var16, var15);
                var8 = var6 instanceof Object ? var6 : var8;
                var11 = var8.setUTCFullYear;
                var6 = var1 + var2;
                var6 = var11.bind(var8)(var6, var9, var10);
                var6 = var8.setUTCHours;
                var17 = var8;
                var16 = 0;
                var15 = 0;
                var14 = 0;
                var13 = 0;
                var6 = var17[var6](var16, var15, var14, var13, var12);
                var6 = _closure1_slot4;
                var6 = var6.default;
                var6 = var6.bind(var5)(var8, var7);
                var3 = var3.Date;
                var8 = var3.prototype;
                var8 = Object.create(var8, {
                    constructor: {
                        value: var3
                    }
                });
                var17 = var8;
                var16 = 0;
                var3 = new var17[var3](var16, var15);
                var3 = var3 instanceof Object ? var3 : var8;
                var8 = var3.setUTCFullYear;
                var8 = var8.bind(var3)(var1, var9, var10);
                var8 = var3.setUTCHours;
                var17 = var3;
                var16 = 0;
                var15 = 0;
                var14 = 0;
                var8 = var17[var8](var16, var15, var14, var13, var12);
                var0 = _closure1_slot4;
                var0 = var0.default;
                var3 = var0.bind(var5)(var3, var7);
                var0 = var4.getTime;
                var5 = var0.bind(var4)();
                var0 = var6.getTime;
                var0 = var0.bind(var6)();
                if (!(!(var5 >= var0))) {
                    _fun22917_ip = 526;
                    continue _fun22917
                }
            case 493:
                var0 = var4.getTime;
                var4 = var0.bind(var4)();
                var0 = var3.getTime;
                var3 = var0.bind(var3)();
                var0 = var1;
                if (!(!(var4 >= var3))) {
                    _fun22917_ip = 524;
                    continue _fun22917
                }
            case 520:
                var0 = var1 - var2;
            case 524:
                _fun22917_ip = 530;
                continue _fun22917;
            case 526:
                var0 = var1 + var2;
            case 530:
                return var0;
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
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot4 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var0)(var2);
    var2 = var4.bind(var0)(var2);
    var _closure1_slot5 = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2573, 2574, 2576, 2577, 2578]);