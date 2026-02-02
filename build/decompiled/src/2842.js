// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var2 = require;
    var _closure1_slot0 = var2;
    var2 = dependencyMap;
    var _closure1_slot1 = var2;
    var2 = function arg0, arg1() {
        _fun23020: for (var _fun23020_ip = 0;;) switch (_fun23020_ip) {
            case 0:
                var4 = arg1;
                var1 = var4.match;
                var0 = arg0;
                var5 = var1.bind(var4)(var0);
                var0 = null;
                if (!var5) {
                    _fun23020_ip = 80;
                    continue _fun23020
                }
            case 22:
                var1 = {};
                var2 = global;
                var8 = var2.parseInt;
                var2 = 0;
                var7 = var5[var2];
                var6 = undefined;
                var3 = 10;
                var3 = var8.bind(var6)(var7, var3);
                var1.value = var3;
                var3 = var4.slice;
                var2 = var5[var2];
                var2 = var2.length;
                var2 = var3.bind(var4)(var2);
                var1.rest = var2;
                var0 = var1;
            case 80:
                return var0;
        }
    };
    var _closure1_slot2 = var2;
    var3 = global;
    var6 = var3.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var3 = true;
    var4.value = var3;
    var3 = '__esModule';
    var3 = var5.bind(var6)(var1, var3, var4);
    var3 = function arg0() {
        _fun23021: for (var _fun23021_ip = 0;;) switch (_fun23021_ip) {
            case 0:
                var1 = arg0;
                var0 = 'morning';
                if (!(var0 !== var1)) {
                    _fun23021_ip = 57;
                    continue _fun23021
                }
            case 11:
                var0 = 'evening';
                if (!(var0 !== var1)) {
                    _fun23021_ip = 52;
                    continue _fun23021
                }
            case 19:
                var0 = 'pm';
                if (!(var0 !== var1)) {
                    _fun23021_ip = 47;
                    continue _fun23021
                }
            case 27:
                var0 = 'noon';
                if (!(var0 !== var1)) {
                    _fun23021_ip = 47;
                    continue _fun23021
                }
            case 35:
                var0 = 'afternoon';
                if (!(var0 !== var1)) {
                    _fun23021_ip = 47;
                    continue _fun23021
                }
            case 43:
                var0 = 0;
                return var0;
            case 47:
                var0 = 12;
                return var0;
            case 52:
                var0 = 17;
                return var0;
            case 57:
                var0 = 4;
                return var0;
        }
    };
    var1.dayPeriodEnumToHours = var3;
    var3 = function arg0() {
        _fun23022: for (var _fun23022_ip = 0;;) switch (_fun23022_ip) {
            case 0:
                var4 = arg0;
                var0 = 400;
                var0 = var4 % var0;
                var3 = 0;
                var0 = var0 === var3;
                if (var0) {
                    _fun23022_ip = 50;
                    continue _fun23022
                }
            case 22:
                var1 = 4;
                var1 = var4 % var1;
                var1 = var1 === var3;
                if (!var1) {
                    _fun23022_ip = 47;
                    continue _fun23022
                }
            case 36:
                var2 = 100;
                var2 = var4 % var2;
                var1 = var2 !== var3;
            case 47:
                var0 = var1;
            case 50:
                return var0;
        }
    };
    var1.isLeapYearIndex = var3;
    var3 = function arg0, arg1() {
        _fun23023: for (var _fun23023_ip = 0;;) switch (_fun23023_ip) {
            case 0:
                var1 = arg0;
                if (var1) {
                    _fun23023_ip = 8;
                    continue _fun23023
                }
            case 6:
                return var1;
            case 8:
                var0 = {};
                var4 = var1.value;
                var3 = arg1;
                var2 = undefined;
                var2 = var3.bind(var2)(var4);
                var0.value = var2;
                var1 = var1.rest;
                var0.rest = var1;
                return var0;
        }
    };
    var1.mapValue = var3;
    var3 = function arg0, arg1() {
        _fun23024: for (var _fun23024_ip = 0;;) switch (_fun23024_ip) {
            case 0:
                var0 = arg0;
                var5 = arg1;
                var3 = 0;
                var1 = var5 > var3;
                var4 = var5;
                if (var1) {
                    _fun23024_ip = 25;
                    continue _fun23024
                }
            case 18:
                var2 = 1;
                var4 = var2 - var5;
            case 25:
                var2 = 50;
                if (!(!(var4 <= var2))) {
                    _fun23024_ip = 92;
                    continue _fun23024
                }
            case 32:
                var5 = var4 + var2;
                var2 = global;
                var7 = var2.Math;
                var6 = var7.floor;
                var4 = 100;
                var2 = var5 / var4;
                var2 = var6.bind(var7)(var2);
                var2 = var4 * var2;
                var2 = var0 + var2;
                var5 = var5 % var4;
                var5 = var0 >= var5;
                var3 = 0;
                if (!var5) {
                    _fun23024_ip = 86;
                    continue _fun23024
                }
            case 83:
                var3 = var4;
            case 86:
                var2 = var2 - var3;
                _fun23024_ip = 101;
                continue _fun23024;
            case 92:
                if (var0) {
                    _fun23024_ip = 98;
                    continue _fun23024
                }
            case 95:
                var0 = 100;
            case 98:
                var2 = var0;
            case 101:
                var0 = var2;
                if (var1) {
                    _fun23024_ip = 114;
                    continue _fun23024
                }
            case 107:
                var1 = 1;
                var0 = var1 - var2;
            case 114:
                return var0;
        }
    };
    var1.normalizeTwoDigitYear = var3;
    var3 = function arg0() {
        var3 = _closure1_slot2;
        var1 = _closure1_slot0;
        var2 = _closure1_slot1;
        var0 = 1;
        var0 = var2[var0];
        var2 = undefined;
        var0 = var1.bind(var2)(var0);
        var0 = var0.numericPatterns;
        var1 = var0.anyDigitsSigned;
        var0 = arg0;
        var0 = var3.bind(var2)(var1, var0);
        return var0;
    };
    var1.parseAnyDigitsSigned = var3;
    var3 = function arg0, arg1() {
        _fun23026: for (var _fun23026_ip = 0;;) switch (_fun23026_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var1 = 1;
                if (!(var1 !== var2)) {
                    _fun23026_ip = 243;
                    continue _fun23026
                }
            case 16:
                var0 = 2;
                if (!(var0 !== var2)) {
                    _fun23026_ip = 197;
                    continue _fun23026
                }
            case 26:
                var0 = 3;
                if (!(var0 !== var2)) {
                    _fun23026_ip = 151;
                    continue _fun23026
                }
            case 33:
                var0 = 4;
                if (!(var0 !== var2)) {
                    _fun23026_ip = 105;
                    continue _fun23026
                }
            case 40:
                var4 = _closure1_slot2;
                var0 = global;
                var5 = var0.RegExp;
                var0 = '^\\d{1,';
                var6 = var0 + var2;
                var0 = var5.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var5
                    }
                });
                var0 = '}';
                var8 = var6 + var0;
                var9 = var2;
                var0 = new var9[var5](var8, var7);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = undefined;
                var0 = var4.bind(var0)(var2, var3);
                return var0;
            case 105:
                var4 = _closure1_slot2;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var1];
                var2 = undefined;
                var0 = var5.bind(var2)(var0);
                var0 = var0.numericPatterns;
                var0 = var0.fourDigits;
                var0 = var4.bind(var2)(var0, var3);
                return var0;
            case 151:
                var4 = _closure1_slot2;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var1];
                var2 = undefined;
                var0 = var5.bind(var2)(var0);
                var0 = var0.numericPatterns;
                var0 = var0.threeDigits;
                var0 = var4.bind(var2)(var0, var3);
                return var0;
            case 197:
                var4 = _closure1_slot2;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var1];
                var2 = undefined;
                var0 = var5.bind(var2)(var0);
                var0 = var0.numericPatterns;
                var0 = var0.twoDigits;
                var0 = var4.bind(var2)(var0, var3);
                return var0;
            case 243:
                var2 = _closure1_slot2;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var1];
                var1 = undefined;
                var0 = var4.bind(var1)(var0);
                var0 = var0.numericPatterns;
                var0 = var0.singleDigit;
                var0 = var2.bind(var1)(var0, var3);
                return var0;
        }
    };
    var1.parseNDigits = var3;
    var3 = function arg0, arg1() {
        _fun23027: for (var _fun23027_ip = 0;;) switch (_fun23027_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var1 = 1;
                if (!(var1 !== var2)) {
                    _fun23027_ip = 243;
                    continue _fun23027
                }
            case 16:
                var0 = 2;
                if (!(var0 !== var2)) {
                    _fun23027_ip = 197;
                    continue _fun23027
                }
            case 26:
                var0 = 3;
                if (!(var0 !== var2)) {
                    _fun23027_ip = 151;
                    continue _fun23027
                }
            case 33:
                var0 = 4;
                if (!(var0 !== var2)) {
                    _fun23027_ip = 105;
                    continue _fun23027
                }
            case 40:
                var4 = _closure1_slot2;
                var0 = global;
                var5 = var0.RegExp;
                var0 = '^-?\\d{1,';
                var6 = var0 + var2;
                var0 = var5.prototype;
                var2 = Object.create(var0, {
                    constructor: {
                        value: var5
                    }
                });
                var0 = '}';
                var8 = var6 + var0;
                var9 = var2;
                var0 = new var9[var5](var8, var7);
                var2 = var0 instanceof Object ? var0 : var2;
                var0 = undefined;
                var0 = var4.bind(var0)(var2, var3);
                return var0;
            case 105:
                var4 = _closure1_slot2;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var1];
                var2 = undefined;
                var0 = var5.bind(var2)(var0);
                var0 = var0.numericPatterns;
                var0 = var0.fourDigitsSigned;
                var0 = var4.bind(var2)(var0, var3);
                return var0;
            case 151:
                var4 = _closure1_slot2;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var1];
                var2 = undefined;
                var0 = var5.bind(var2)(var0);
                var0 = var0.numericPatterns;
                var0 = var0.threeDigitsSigned;
                var0 = var4.bind(var2)(var0, var3);
                return var0;
            case 197:
                var4 = _closure1_slot2;
                var5 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var1];
                var2 = undefined;
                var0 = var5.bind(var2)(var0);
                var0 = var0.numericPatterns;
                var0 = var0.twoDigitsSigned;
                var0 = var4.bind(var2)(var0, var3);
                return var0;
            case 243:
                var2 = _closure1_slot2;
                var4 = _closure1_slot0;
                var0 = _closure1_slot1;
                var0 = var0[var1];
                var1 = undefined;
                var0 = var4.bind(var1)(var0);
                var0 = var0.numericPatterns;
                var0 = var0.singleDigitSigned;
                var0 = var2.bind(var1)(var0, var3);
                return var0;
        }
    };
    var1.parseNDigitsSigned = var3;
    var1.parseNumericPattern = var2;
    var0 = function arg0, arg1() {
        _fun23028: for (var _fun23028_ip = 0;;) switch (_fun23028_ip) {
            case 0:
                var3 = arg1;
                var1 = var3.match;
                var0 = arg0;
                var2 = var1.bind(var3)(var0);
                if (var2) {
                    _fun23028_ip = 24;
                    continue _fun23028
                }
            case 20:
                var0 = null;
                return var0;
            case 24:
                var1 = 0;
                var4 = var2[var1];
                var0 = 'Z';
                if (!(var0 !== var4)) {
                    _fun23028_ip = 284;
                    continue _fun23028
                }
            case 41:
                var0 = 1;
                var6 = var2[var0];
                var5 = -1;
                var4 = '+';
                if (!(var4 === var6)) {
                    _fun23028_ip = 65;
                    continue _fun23028
                }
            case 62:
                var5 = var0;
            case 65:
                var0 = 2;
                var4 = var2[var0];
                var10 = 0;
                if (!var4) {
                    _fun23028_ip = 100;
                    continue _fun23028
                }
            case 77:
                var4 = global;
                var7 = var4.parseInt;
                var6 = var2[var0];
                var4 = undefined;
                var0 = 10;
                var10 = var7.bind(var4)(var6, var0);
            case 100:
                var0 = 3;
                var4 = var2[var0];
                var11 = 0;
                if (!var4) {
                    _fun23028_ip = 135;
                    continue _fun23028
                }
            case 112:
                var4 = global;
                var7 = var4.parseInt;
                var6 = var2[var0];
                var4 = undefined;
                var0 = 10;
                var11 = var7.bind(var4)(var6, var0);
            case 135:
                var0 = 5;
                var4 = var2[var0];
                var7 = 0;
                if (!var4) {
                    _fun23028_ip = 170;
                    continue _fun23028
                }
            case 147:
                var4 = global;
                var8 = var4.parseInt;
                var6 = var2[var0];
                var4 = undefined;
                var0 = 10;
                var7 = var8.bind(var4)(var6, var0);
            case 170:
                var0 = {};
                var9 = _closure1_slot0;
                var4 = _closure1_slot1;
                var6 = var4[var1];
                var8 = undefined;
                var6 = var9.bind(var8)(var6);
                var6 = var6.millisecondsInHour;
                var10 = var10 * var6;
                var6 = var4[var1];
                var6 = var9.bind(var8)(var6);
                var6 = var6.millisecondsInMinute;
                var6 = var11 * var6;
                var6 = var10 + var6;
                var4 = var4[var1];
                var4 = var9.bind(var8)(var4);
                var4 = var4.millisecondsInSecond;
                var4 = var7 * var4;
                var4 = var6 + var4;
                var4 = var5 * var4;
                var0.value = var4;
                var4 = var3.slice;
                var2 = var2[var1];
                var2 = var2.length;
                var2 = var4.bind(var3)(var2);
                var0.rest = var2;
                return var0;
            case 284:
                var0 = {};
                var0.value = var1;
                var2 = var3.slice;
                var1 = 1;
                var1 = var2.bind(var3)(var1);
                var0.rest = var1;
                return var0;
        }
    };
    var1.parseTimezonePattern = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2713, 2843]);