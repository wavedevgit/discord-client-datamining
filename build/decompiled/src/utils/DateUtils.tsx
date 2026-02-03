// utils/DateUtils.tsx
// @ts-nocheck
export default (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var7 = require;
    var11 = metroImportDefault;
    var2 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var8;
    var0 = function arg0() {
        _fun27019: for (var _fun27019_ip = 0;;) switch (_fun27019_ip) {
            case 0:
                var0 = arg0;
                var1 = arguments[1];
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun27019_ip = 14;
                    continue _fun27019
                }
            case 12:
                var1 = true;
            case 14:
                var4 = typeof var0;
                var2 = 'string';
                var2 = var2 === var4;
                if (var2) {
                    _fun27019_ip = 36;
                    continue _fun27019
                }
            case 28:
                var3 = 'number';
                var2 = var3 === var4;
            case 36:
                if (var2) {
                    _fun27019_ip = 51;
                    continue _fun27019
                }
            case 39:
                var3 = global;
                var3 = var3.Date;
                var2 = var0 instanceof var3;
            case 51:
                var4 = var0;
                if (var2) {
                    _fun27019_ip = 115;
                    continue _fun27019
                }
            case 57:
                var5 = _closure1_slot3;
                var3 = var5.error;
                var2 = {};
                var2.d = var0;
                var0 = 'Invalid date given to startOfDay';
                var0 = var3.bind(var5)(var0, var2);
                var0 = global;
                var0 = var0.Date;
                var2 = var0.prototype;
                var2 = Object.create(var2, {
                    constructor: {
                        value: var0
                    }
                });
                var8 = var2;
                var0 = new var8[var0](var7);
                var4 = var0 instanceof Object ? var0 : var2;
            case 115:
                var0 = global;
                var2 = var0.Date;
                var3 = var2.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = var3;
                var7 = var4;
                var2 = new var8[var2](var7, var6);
                var3 = var2 instanceof Object ? var2 : var3;
                var2 = var3.getTime;
                var2 = var2.bind(var3)();
                var4 = var2;
                if (var1) {
                    _fun27019_ip = 186;
                    continue _fun27019
                }
            case 162:
                var1 = var3.getTimezoneOffset;
                var3 = var1.bind(var3)();
                var1 = 60000;
                var1 = var1 * var3;
                var4 = var2 - var1;
            case 186:
                var3 = var0.Math;
                var2 = var3.floor;
                var1 = _closure1_slot4;
                var1 = var4 / var1;
                var1 = var2.bind(var3)(var1);
                var0 = _closure1_slot4;
                var0 = var1 * var0;
                return var0;
        }
    };
    var _closure1_slot7 = var0;
    var5 = function arg0, arg1() {
        var0 = global;
        var2 = var0.Math;
        var1 = var2.floor;
        var7 = _closure1_slot7;
        var6 = undefined;
        var3 = arg0;
        var5 = false;
        var4 = var7.bind(var6)(var3, var5);
        var3 = arg1;
        var3 = var7.bind(var6)(var3, var5);
        var3 = var4 - var3;
        var0 = _closure1_slot4;
        var0 = var3 / var0;
        var0 = var1.bind(var2)(var0);
        return var0;
    };
    var _closure1_slot8 = var5;
    var4 = function arg0, arg1() {
        _fun27021: for (var _fun27021_ip = 0;;) switch (_fun27021_ip) {
            case 0:
                var3 = arg0;
                var7 = arg1;
                var1 = _closure1_slot11;
                var2 = undefined;
                var4 = var1.bind(var2)(var3);
                var1 = var4.locale;
                var8 = var1.bind(var4)();
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 2;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var4 = var1.TimestampHourCycle;
                var1 = var4.getSetting;
                var10 = var1.bind(var4)();
                var1 = global;
                var1 = var1.HermesInternal;
                var5 = var1.concat;
                var15 = '';
                var1 = ':';
                var14 = var8;
                var13 = var1;
                var12 = var7;
                var11 = var1;
                var6 = var15[var5](var14, var13, var12, var11, var10, var9);
                var1 = _closure1_slot5;
                var1 = var1[var6];
                var4 = null;
                if (!(var4 == var1)) {
                    _fun27021_ip = 153;
                    continue _fun27021
                }
            case 117:
                var5 = _closure1_slot5;
                var8 = _closure1_slot1;
                var9 = _closure1_slot2;
                var4 = 3;
                var4 = var9[var4];
                var4 = var8.bind(var2)(var4);
                var4 = var4.bind(var2)(var7);
                var5[var6] = var4;
                var1 = var4;
            case 153:
                var0 = _closure1_slot12;
                var0 = var0.bind(var2)(var3);
                var0 = var1.bind(var2)(var0);
                return var0;
        }
    };
    var _closure1_slot9 = var4;
    var3 = function arg0() {
        _fun27022: for (var _fun27022_ip = 0;;) switch (_fun27022_ip) {
            case 0:
                var2 = arg0;
                var1 = var2.length;
                var0 = 200;
                if (!(!(var1 >= var0))) {
                    _fun27022_ip = 47;
                    continue _fun27022
                }
            case 15:
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var0 = var1[var0];
                var1 = undefined;
                var0 = var3.bind(var1)(var0);
                var0 = var0.bind(var1)(var2);
                return var0;
            case 47:
                var0 = global;
                var2 = var0.Error;
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var4 = 'Date string exceeds maximum length';
                var5 = var1;
                var0 = new var5[var2](var4, var3);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var _closure1_slot10 = var3;
    var0 = function arg0() {
        _fun27023: for (var _fun27023_ip = 0;;) switch (_fun27023_ip) {
            case 0:
                var3 = arg0;
                var4 = _closure1_slot1;
                var0 = _closure1_slot2;
                var5 = 4;
                var0 = var0[var5];
                var2 = undefined;
                var4 = var4.bind(var2)(var0);
                var0 = var4.isMoment;
                var4 = var0.bind(var4)(var3);
                var0 = var3;
                if (var4) {
                    _fun27023_ip = 67;
                    continue _fun27023
                }
            case 45:
                var4 = _closure1_slot1;
                var1 = _closure1_slot2;
                var1 = var1[var5];
                var1 = var4.bind(var2)(var1);
                var0 = var1.bind(var2)(var3);
            case 67:
                return var0;
        }
    };
    var _closure1_slot11 = var0;
    var0 = function arg0() {
        _fun27024: for (var _fun27024_ip = 0;;) switch (_fun27024_ip) {
            case 0:
                var2 = arg0;
                var3 = _closure1_slot1;
                var1 = _closure1_slot2;
                var0 = 4;
                var1 = var1[var0];
                var0 = undefined;
                var1 = var3.bind(var0)(var1);
                var0 = var1.isMoment;
                var1 = var0.bind(var1)(var2);
                var0 = var2;
                if (!var1) {
                    _fun27024_ip = 55;
                    continue _fun27024
                }
            case 45:
                var1 = var2.toDate;
                var0 = var1.bind(var2)();
            case 55:
                return var0;
        }
    };
    var _closure1_slot12 = var0;
    var6 = global;
    var12 = var6.Object;
    var10 = var12.defineProperty;
    var9 = {};
    var0 = true;
    var9.value = var0;
    var0 = '__esModule';
    var0 = var10.bind(var12)(var2, var0, var9);
    var0 = 0;
    var9 = var8[var0];
    var0 = undefined;
    var10 = var11.bind(var0)(var9);
    var9 = 1;
    var9 = var8[var9];
    var12 = var11.bind(var0)(var9);
    var9 = var12.prototype;
    var11 = Object.create(var9, {
        constructor: {
            value: var12
        }
    });
    var15 = 'DateUtils';
    var16 = var11;
    var9 = new var16[var12](var15, var14);
    var9 = var9 instanceof Object ? var9 : var11;
    var _closure1_slot3 = var9;
    var9 = 86400000;
    var _closure1_slot4 = var9;
    var11 = var6.Object;
    var9 = var11.create;
    var6 = null;
    var6 = var9.bind(var11)(var6);
    var _closure1_slot5 = var6;
    var9 = var10.addChangeListener;
    var6 = function() { // Environment: var1
        var0 = global;
        var2 = var0.Object;
        var1 = var2.create;
        var0 = null;
        var1 = var1.bind(var2)(var0);
        _closure1_slot5 = var1;
        var0 = undefined;
        return var0;
    };
    var6 = var9.bind(var10)(var6);
    var6 = new Array(4);
    var9 = {
        'key': 'days',
        'millisecondsInUnit': 86400000
    };
    var6[0] = var9;
    var9 = {
        'key': 'hours',
        'millisecondsInUnit': 3600000
    };
    var6[1] = var9;
    var9 = {
        'key': 'minutes',
        'millisecondsInUnit': 60000
    };
    var6[2] = var9;
    var9 = {
        'key': 'seconds',
        'millisecondsInUnit': 1000
    };
    var6[3] = var9;
    var _closure1_slot6 = var6;
    var6 = 6;
    var6 = var8[var6];
    var8 = var7.bind(var0)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'utils/DateUtils.tsx';
    var6 = var7.bind(var8)(var6);
    var2.differenceInCalendarDays = var5;
    var5 = function arg0, arg1() {
        var1 = arg0;
        var2 = arg1;
        var0 = var1.getTime;
        var1 = var0.bind(var1)();
        var0 = var2.getTime;
        var0 = var0.bind(var2)();
        var1 = var1 - var0;
        var0 = _closure1_slot4;
        var0 = var1 / var0;
        return var0;
    };
    var2.differenceInDays = var5;
    var5 = function arg0, arg1() {
        _fun27027: for (var _fun27027_ip = 0;;) switch (_fun27027_ip) {
            case 0:
                var2 = arg0;
                var1 = arg1;
                var0 = var2.toDate;
                var2 = var0.bind(var2)();
                var0 = var1.toDate;
                var3 = var0.bind(var1)();
                var0 = global;
                var4 = var0.Math;
                var1 = var4.abs;
                var5 = var2 - 0;
                var0 = var3 - 0;
                var0 = var5 - var0;
                var1 = var1.bind(var4)(var0);
                var0 = 3600000;
                var0 = var1 <= var0;
                if (!var0) {
                    _fun27027_ip = 92;
                    continue _fun27027
                }
            case 68:
                var1 = var2.getHours;
                var2 = var1.bind(var2)();
                var1 = var3.getHours;
                var1 = var1.bind(var3)();
                var0 = var2 === var1;
            case 92:
                return var0;
        }
    };
    var2.isSameHourMoment = var5;
    var5 = function arg0, arg1() {
        _fun27028: for (var _fun27028_ip = 0;;) switch (_fun27028_ip) {
            case 0:
                var2 = arg0;
                var3 = arg1;
                var0 = global;
                var4 = var0.Math;
                var1 = var4.abs;
                var5 = var2 - 0;
                var0 = var3 - 0;
                var0 = var5 - var0;
                var1 = var1.bind(var4)(var0);
                var0 = _closure1_slot4;
                var0 = var1 <= var0;
                if (!var0) {
                    _fun27028_ip = 73;
                    continue _fun27028
                }
            case 49:
                var1 = var2.getDate;
                var2 = var1.bind(var2)();
                var1 = var3.getDate;
                var1 = var1.bind(var3)();
                var0 = var2 === var1;
            case 73:
                return var0;
        }
    };
    var2.isSameDay = var5;
    var5 = function arg0, arg1, arg2() {
        var3 = arg0;
        var4 = arg1;
        var0 = global;
        var2 = var0.Math;
        var1 = var2.abs;
        var0 = var3.valueOf;
        var3 = var0.bind(var3)();
        var0 = var4.valueOf;
        var0 = var0.bind(var4)();
        var0 = var3 - var0;
        var1 = var1.bind(var2)(var0);
        var0 = arg2;
        var0 = var1 < var0;
        return var0;
    };
    var2.isWithinInterval = var5;
    var2.dateFormat = var4;
    var4 = function arg0() {
        _fun27030: for (var _fun27030_ip = 0;;) switch (_fun27030_ip) {
            case 0:
                var3 = arg0;
                var1 = arguments[1];
                var2 = undefined;
                if (!(var1 === var2)) {
                    _fun27030_ip = 14;
                    continue _fun27030
                }
            case 12:
                var1 = false;
            case 14:
                var5 = _closure1_slot1;
                var6 = _closure1_slot2;
                var4 = 4;
                var7 = var6[var4];
                var8 = var5.bind(var2)(var7);
                var7 = var8.localeData;
                var8 = var7.bind(var8)();
                var4 = var6[var4];
                var4 = var5.bind(var2)(var4);
                var7 = var4.bind(var2)();
                var6 = _closure1_slot8;
                var4 = _closure1_slot12;
                var5 = var4.bind(var2)(var3);
                var4 = var7.toDate;
                var4 = var4.bind(var7)();
                var5 = var6.bind(var2)(var5, var4);
                var4 = -1;
                if (!(!(var5 < var4))) {
                    _fun27030_ip = 199;
                    continue _fun27030
                }
            case 99:
                var4 = 0;
                var4 = var5 < var4;
                var6 = 'lastDay';
                if (var4) {
                    _fun27030_ip = 165;
                    continue _fun27030
                }
            case 112:
                var4 = 1;
                if (!(!(var5 < var4))) {
                    _fun27030_ip = 142;
                    continue _fun27030
                }
            case 119:
                var4 = 2;
                var5 = var5 < var4;
                var4 = 'sameElse';
                if (!var5) {
                    _fun27030_ip = 137;
                    continue _fun27030
                }
            case 133:
                var4 = 'nextDay';
            case 137:
                var6 = var4;
                _fun27030_ip = 165;
                continue _fun27030;
            case 142:
                var6 = 'sameDay';
                if (!var1) {
                    _fun27030_ip = 165;
                    continue _fun27030
                }
            case 149:
                var4 = _closure1_slot9;
                var1 = 'LT';
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            case 165:
                var4 = _closure1_slot9;
                var5 = var8.calendar;
                var1 = _closure1_slot11;
                var1 = var1.bind(var2)(var3);
                var1 = var5.bind(var8)(var6, var1, var7);
                var1 = var4.bind(var2)(var3, var1);
                return var1;
            case 199:
                var1 = _closure1_slot9;
                var0 = 'L LT';
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.calendarFormat = var4;
    var4 = function arg0() {
        _fun27031: for (var _fun27031_ip = 0;;) switch (_fun27031_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot1;
                var4 = _closure1_slot2;
                var0 = 4;
                var6 = var4[var0];
                var2 = undefined;
                var7 = var1.bind(var2)(var6);
                var6 = var7.localeData;
                var9 = var6.bind(var7)();
                var0 = var4[var0];
                var0 = var1.bind(var2)(var0);
                var8 = var0.bind(var2)();
                var4 = _closure1_slot8;
                var0 = _closure1_slot12;
                var1 = var0.bind(var2)(var3);
                var0 = var8.toDate;
                var0 = var0.bind(var8)();
                var6 = var4.bind(var2)(var1, var0);
                var1 = _closure1_slot9;
                var0 = 'LT';
                var4 = 0;
                if (!(var4 !== var6)) {
                    _fun27031_ip = 158;
                    continue _fun27031
                }
            case 94:
                var4 = -1;
                if (!(var4 !== var6)) {
                    _fun27031_ip = 129;
                    continue _fun27031
                }
            case 104:
                var4 = -7;
                var6 = var6 > var4;
                var4 = 'L';
                if (!var6) {
                    _fun27031_ip = 127;
                    continue _fun27031
                }
            case 121:
                var4 = 'dddd';
            case 127:
                _fun27031_ip = 155;
                continue _fun27031;
            case 129:
                var7 = var9.calendar;
                var5 = _closure1_slot11;
                var6 = var5.bind(var2)(var3);
                var5 = 'lastDay';
                var4 = var7.bind(var9)(var5, var6, var8);
            case 155:
                var0 = var4;
            case 158:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.calendarFormatCompact = var4;
    var2.dateStringToMoment = var3;
    var3 = function arg0() {
        _fun27032: for (var _fun27032_ip = 0;;) switch (_fun27032_ip) {
            case 0:
                var3 = arg0;
                var1 = _closure1_slot1;
                var0 = _closure1_slot2;
                var11 = 4;
                var0 = var0[var11];
                var2 = undefined;
                var1 = var1.bind(var2)(var0);
                var0 = var1.localeData;
                var8 = var0.bind(var1)();
                var0 = global;
                var0 = var0.Date;
                var1 = var0.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var0
                    }
                });
                var16 = var1;
                var0 = new var16[var0](var15);
                var9 = var0 instanceof Object ? var0 : var1;
                var0 = _closure1_slot8;
                var12 = var0.bind(var2)(var3, var9);
                var1 = _closure1_slot9;
                var0 = -1;
                var0 = var12 < var0;
                var5 = 'sameElse';
                var7 = var5;
                if (var0) {
                    _fun27032_ip = 153;
                    continue _fun27032
                }
            case 100:
                var0 = 0;
                var6 = var12 < var0;
                var0 = 'lastDay';
                if (var6) {
                    _fun27032_ip = 150;
                    continue _fun27032
                }
            case 113:
                var6 = 1;
                var10 = var12 < var6;
                var6 = 'sameDay';
                if (var10) {
                    _fun27032_ip = 147;
                    continue _fun27032
                }
            case 127:
                var10 = 2;
                var12 = var12 < var10;
                var10 = var5;
                if (!var12) {
                    _fun27032_ip = 144;
                    continue _fun27032
                }
            case 140:
                var10 = 'nextDay';
            case 144:
                var6 = var10;
            case 147:
                var0 = var6;
            case 150:
                var7 = var0;
            case 153:
                var0 = 'LLL';
                if (!(var5 !== var7)) {
                    _fun27032_ip = 210;
                    continue _fun27032
                }
            case 161:
                var6 = var8.calendar;
                var10 = _closure1_slot1;
                var4 = _closure1_slot2;
                var5 = var4[var11];
                var5 = var10.bind(var2)(var5);
                var5 = var5.bind(var2)(var3);
                var4 = var4[var11];
                var4 = var10.bind(var2)(var4);
                var4 = var4.bind(var2)(var9);
                var0 = var6.bind(var8)(var7, var5, var4);
            case 210:
                var0 = var1.bind(var2)(var3, var0);
                return var0;
        }
    };
    var2.accessibilityLabelCalendarFormat = var3;
    var3 = function arg0, arg1() {
        _fun27033: for (var _fun27033_ip = 0;;) switch (_fun27033_ip) {
            case 0:
                var5 = arg0;
                var6 = arg1;
                var2 = arguments[2];
                var4 = undefined;
                if (!(var2 === var4)) {
                    _fun27033_ip = 19;
                    continue _fun27033
                }
            case 17:
                var2 = false;
            case 19:
                var _closure2_slot0 = var4;
                var _closure2_slot1 = var4;
                var0 = {
                    'days': 0,
                    'hours': 0,
                    'minutes': 0
                };
                var3 = 0;
                if (!var2) {
                    _fun27033_ip = 49;
                    continue _fun27033
                }
            case 46:
                var3 = 1;
            case 49:
                var0.seconds = var3;
                _closure2_slot0 = var0;
                if (!(!(var5 > var6))) {
                    _fun27033_ip = 161;
                    continue _fun27033
                }
            case 62:
                if (!var2) {
                    _fun27033_ip = 103;
                    continue _fun27033
                }
            case 65:
                var2 = global;
                var3 = var2.Number;
                var7 = var3.bind(var4)(var5);
                var3 = 1200;
                var3 = var7 + var3;
                var2 = var2.Number;
                var2 = var2.bind(var4)(var6);
                if (!(!(var3 > var2))) {
                    _fun27033_ip = 159;
                    continue _fun27033
                }
            case 103:
                var2 = global;
                var3 = var2.Number;
                var3 = var3.bind(var4)(var6);
                var2 = var2.Number;
                var2 = var2.bind(var4)(var5);
                var2 = var3 - var2;
                _closure2_slot1 = var2;
                var3 = _closure1_slot6;
                var2 = var3.forEach;
                var1 = function(arg0) { // Environment: var1
                    var0 = arg0;
                    var4 = var0.key;
                    var3 = var0.millisecondsInUnit;
                    var2 = _closure2_slot0;
                    var0 = global;
                    var6 = var0.Math;
                    var5 = var6.floor;
                    var0 = _closure2_slot1;
                    var0 = var0 / var3;
                    var0 = var5.bind(var6)(var0);
                    var2[var4] = var0;
                    var2 = _closure2_slot1;
                    var0 = _closure2_slot0;
                    var0 = var0[var4];
                    var0 = var0 * var3;
                    var0 = var2 - var0;
                    _closure2_slot1 = var0;
                    var0 = undefined;
                    return var0;
                };
                var1 = var2.bind(var3)(var1);
                return var0;
            case 159:
                return var0;
            case 161:
                return var0;
        }
    };
    var2.diffAsUnits = var3;
    var3 = function arg0, arg1() {
        _fun27035: for (var _fun27035_ip = 0;;) switch (_fun27035_ip) {
            case 0:
                var5 = arg0;
                var1 = arg1;
                var0 = var5.days;
                var2 = 0;
                if (!(!(var0 > var2))) {
                    _fun27035_ip = 188;
                    continue _fun27035
                }
            case 21:
                var0 = var5.hours;
                if (!(!(var0 > var2))) {
                    _fun27035_ip = 115;
                    continue _fun27035
                }
            case 31:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var0 = 5;
                var2 = var2[var0];
                var0 = undefined;
                var0 = var3.bind(var0)(var2);
                var4 = var0.intl;
                var3 = var4.formatToPlainString;
                var2 = var1.minutes;
                var0 = {};
                var6 = global;
                var9 = var6.Math;
                var8 = var9.max;
                var7 = var5.minutes;
                var6 = 1;
                var6 = var8.bind(var9)(var6, var7);
                var0.minutes = var6;
                var0 = var3.bind(var4)(var2, var0);
                _fun27035_ip = 186;
                continue _fun27035;
            case 115:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var6 = var2.intl;
                var4 = var6.formatToPlainString;
                var3 = var1.hours;
                var2 = {};
                var7 = var5.hours;
                var2.hours = var7;
                var7 = var5.minutes;
                var2.minutes = var7;
                var0 = var4.bind(var6)(var3, var2);
            case 186:
                _fun27035_ip = 259;
                continue _fun27035;
            case 188:
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 5;
                var3 = var3[var2];
                var2 = undefined;
                var2 = var4.bind(var2)(var3);
                var4 = var2.intl;
                var3 = var4.formatToPlainString;
                var2 = var1.days;
                var1 = {};
                var6 = var5.days;
                var1.days = var6;
                var5 = var5.hours;
                var1.hours = var5;
                var0 = var3.bind(var4)(var2, var1);
            case 259:
                return var0;
        }
    };
    var2.unitsAsStrings = var3;
    var1 = function arg0() {
        _fun27036: for (var _fun27036_ip = 0;;) switch (_fun27036_ip) {
            case 0:
                var3 = arg0;
                var0 = null;
                var1 = var0 == var3;
                var0 = '';
                if (var1) {
                    _fun27036_ip = 46;
                    continue _fun27036
                }
            case 16:
                var2 = _closure1_slot10;
                var1 = undefined;
                var3 = var2.bind(var1)(var3);
                var2 = var3.format;
                var1 = 'YYYY-MM-DDTHH:mm';
                var0 = var2.bind(var3)(var1);
            case 46:
                return var0;
        }
    };
    var2.formatDateForDatetimeLocal = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [1676, 3, 1348, 3124, 3036, 1234, 2]);