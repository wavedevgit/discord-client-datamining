// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24433: for (var _fun24433_ip = 0;;) switch (_fun24433_ip) {
        case 0:
            var3 = require;
            var2 = function(arg0) { // Original name: _, environment: var0
                var3 = arg0;
                var5 = function(arg0, arg1, arg2) { // Original name: relativeTimeWithPlural, environment: var0
                    _fun24435: for (var _fun24435_ip = 0;;) switch (_fun24435_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = arg1;
                            var4 = arg2;
                            var1 = 'm';
                            if (!(var1 !== var4)) {
                                _fun24435_ip = 239;
                                continue _fun24435
                            }
                        case 20:
                            var1 = 'h';
                            if (!(var1 !== var4)) {
                                _fun24435_ip = 219;
                                continue _fun24435
                            }
                        case 31:
                            var1 = ' ';
                            var1 = var0 + var1;
                            var3 = {
                                'ss': null,
                                'mm': null,
                                'hh': null,
                                'dd': 'день_дні_днів',
                                'MM': 'місяць_місяці_місяців',
                                'yy': 'рік_роки_років'
                            };
                            var5 = 'секунду_секунди_секунд';
                            if (!var2) {
                                _fun24435_ip = 66;
                                continue _fun24435
                            }
                        case 60:
                            var5 = 'секунда_секунди_секунд';
                        case 66:
                            var3.ss = var5;
                            var5 = 'хвилину_хвилини_хвилин';
                            if (!var2) {
                                _fun24435_ip = 87;
                                continue _fun24435
                            }
                        case 81:
                            var5 = 'хвилина_хвилини_хвилин';
                        case 87:
                            var3.mm = var5;
                            var5 = 'годину_години_годин';
                            if (!var2) {
                                _fun24435_ip = 108;
                                continue _fun24435
                            }
                        case 102:
                            var5 = 'година_години_годин';
                        case 108:
                            var3.hh = var5;
                            var4 = var3[var4];
                            var7 = var0 - 0;
                            var3 = var4.split;
                            var0 = '_';
                            var4 = var3.bind(var4)(var0);
                            var5 = 10;
                            var8 = var7 % var5;
                            var3 = 1;
                            if (!(var8 === var3)) {
                                _fun24435_ip = 163;
                                continue _fun24435
                            }
                        case 149:
                            var0 = 100;
                            var6 = var7 % var0;
                            var0 = 11;
                            if (!(var6 === var0)) {
                                _fun24435_ip = 207;
                                continue _fun24435
                            }
                        case 163:
                            var0 = 2;
                            if (!(var8 >= var0)) {
                                _fun24435_ip = 195;
                                continue _fun24435
                            }
                        case 170:
                            var6 = 4;
                            if (!(var8 <= var6)) {
                                _fun24435_ip = 195;
                                continue _fun24435
                            }
                        case 177:
                            var6 = 100;
                            var6 = var7 % var6;
                            if (!(!(var6 < var5))) {
                                _fun24435_ip = 201;
                                continue _fun24435
                            }
                        case 188:
                            var5 = 20;
                            if (!(!(var6 >= var5))) {
                                _fun24435_ip = 201;
                                continue _fun24435
                            }
                        case 195:
                            var0 = var4[var0];
                            _fun24435_ip = 205;
                            continue _fun24435;
                        case 201:
                            var0 = var4[var3];
                        case 205:
                            _fun24435_ip = 213;
                            continue _fun24435;
                        case 207:
                            var3 = 0;
                            var0 = var4[var3];
                        case 213:
                            var0 = var1 + var0;
                            _fun24435_ip = 237;
                            continue _fun24435;
                        case 219:
                            var1 = 'годину';
                            if (!var2) {
                                _fun24435_ip = 234;
                                continue _fun24435
                            }
                        case 228:
                            var1 = 'година';
                        case 234:
                            var0 = var1;
                        case 237:
                            _fun24435_ip = 257;
                            continue _fun24435;
                        case 239:
                            var1 = 'хвилину';
                            if (!var2) {
                                _fun24435_ip = 254;
                                continue _fun24435
                            }
                        case 248:
                            var1 = 'хвилина';
                        case 254:
                            var0 = var1;
                        case 257:
                            return var0;
                    }
                };
                var8 = function(arg0) { // Original name: processHoursFunction, environment: var0
                    var1 = arg0;
                    var _closure3_slot0 = var1;
                    var0 = function() { // Environment: var0
                        _fun24437: for (var _fun24437_ip = 0;;) switch (_fun24437_ip) {
                            case 0:
                                var2 = this;
                                var1 = _closure3_slot0;
                                var0 = 'о';
                                var1 = var1 + var0;
                                var0 = var2.hours;
                                var3 = var0.bind(var2)();
                                var0 = '';
                                var2 = 11;
                                if (!(var2 === var3)) {
                                    _fun24437_ip = 47;
                                    continue _fun24437
                                }
                            case 41:
                                var0 = 'б';
                            case 47:
                                var1 = var1 + var0;
                                var0 = '] LT';
                                var0 = var1 + var0;
                                return var0;
                        }
                    };
                    return var0;
                };
                var _closure2_slot0 = var8;
                var2 = var3.defineLocale;
                var1 = {};
                var4 = {};
                var9 = 'січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня';
                var6 = var9.split;
                var7 = '_';
                var6 = var6.bind(var9)(var7);
                var4.format = var6;
                var9 = 'січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень';
                var6 = var9.split;
                var6 = var6.bind(var9)(var7);
                var4.standalone = var6;
                var1.months = var4;
                var6 = 'січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд';
                var4 = var6.split;
                var4 = var4.bind(var6)(var7);
                var1.monthsShort = var4;
                var4 = function(arg0, arg1) { // Original name: weekdaysCaseReplace, environment: var0
                    _fun24438: for (var _fun24438_ip = 0;;) switch (_fun24438_ip) {
                        case 0:
                            var3 = arg0;
                            var6 = arg1;
                            var2 = {};
                            var1 = 'неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота';
                            var0 = var1.split;
                            var4 = '_';
                            var0 = var0.bind(var1)(var4);
                            var2.nominative = var0;
                            var1 = 'неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу';
                            var0 = var1.split;
                            var0 = var0.bind(var1)(var4);
                            var2.accusative = var0;
                            var1 = 'неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи';
                            var0 = var1.split;
                            var0 = var0.bind(var1)(var4);
                            var2.genitive = var0;
                            if (var3) {
                                _fun24438_ip = 90;
                                continue _fun24438
                            }
                        case 82:
                            var0 = var2.nominative;
                            _fun24438_ip = 181;
                            continue _fun24438;
                        case 90:
                            var4 = /(\[[ВвУу]\]) ?dddd/;
                            var1 = var4.test;
                            var4 = var1.bind(var4)(var6);
                            var1 = 'accusative';
                            if (var4) {
                                _fun24438_ip = 163;
                                continue _fun24438
                            }
                        case 123:
                            var5 = /\[?(?:минулої|наступної)? ?\] ?dddd/;
                            var4 = var5.test;
                            var5 = var4.bind(var5)(var6);
                            var4 = 'nominative';
                            if (!var5) {
                                _fun24438_ip = 160;
                                continue _fun24438
                            }
                        case 154:
                            var4 = 'genitive';
                        case 160:
                            var1 = var4;
                        case 163:
                            var2 = var2[var1];
                            var1 = var3.day;
                            var1 = var1.bind(var3)();
                            var0 = var2[var1];
                        case 181:
                            return var0;
                    }
                };
                var1.weekdays = var4;
                var6 = 'нд_пн_вт_ср_чт_пт_сб';
                var4 = var6.split;
                var4 = var4.bind(var6)(var7);
                var1.weekdaysShort = var4;
                var4 = var6.split;
                var4 = var4.bind(var6)(var7);
                var1.weekdaysMin = var4;
                var4 = {
                    'LT': 'HH:mm',
                    'LTS': 'HH:mm:ss',
                    'L': 'DD.MM.YYYY',
                    'LL': 'D MMMM YYYY р.',
                    'LLL': 'D MMMM YYYY р., HH:mm',
                    'LLLL': 'dddd, D MMMM YYYY р., HH:mm'
                };
                var1.longDateFormat = var4;
                var4 = {};
                var7 = undefined;
                var6 = '[Сьогодні ';
                var6 = var8.bind(var7)(var6);
                var4.sameDay = var6;
                var6 = '[Завтра ';
                var6 = var8.bind(var7)(var6);
                var4.nextDay = var6;
                var6 = '[Вчора ';
                var6 = var8.bind(var7)(var6);
                var4.lastDay = var6;
                var6 = '[У] dddd [';
                var6 = var8.bind(var7)(var6);
                var4.nextWeek = var6;
                var6 = function() { // Original name: lastWeek, environment: var0
                    _fun24439: for (var _fun24439_ip = 0;;) switch (_fun24439_ip) {
                        case 0:
                            var2 = this;
                            var0 = var2.day;
                            var1 = var0.bind(var2)();
                            var0 = 0;
                            if (!(var0 !== var1)) {
                                _fun24439_ip = 97;
                                continue _fun24439
                            }
                        case 19:
                            var0 = 3;
                            if (!(var0 !== var1)) {
                                _fun24439_ip = 97;
                                continue _fun24439
                            }
                        case 26:
                            var0 = 5;
                            if (!(var0 !== var1)) {
                                _fun24439_ip = 97;
                                continue _fun24439
                            }
                        case 33:
                            var0 = 6;
                            if (!(var0 !== var1)) {
                                _fun24439_ip = 97;
                                continue _fun24439
                            }
                        case 40:
                            var0 = 1;
                            if (!(var0 !== var1)) {
                                _fun24439_ip = 65;
                                continue _fun24439
                            }
                        case 47:
                            var0 = 2;
                            if (!(var0 !== var1)) {
                                _fun24439_ip = 65;
                                continue _fun24439
                            }
                        case 54:
                            var0 = 4;
                            if (!(var0 !== var1)) {
                                _fun24439_ip = 65;
                                continue _fun24439
                            }
                        case 61:
                            var0 = undefined;
                            return var0;
                        case 65:
                            var3 = _closure2_slot0;
                            var1 = undefined;
                            var0 = '[Минулого] dddd [';
                            var1 = var3.bind(var1)(var0);
                            var0 = var1.call;
                            var0 = var0.bind(var1)(var2);
                            return var0;
                        case 97:
                            var3 = _closure2_slot0;
                            var1 = undefined;
                            var0 = '[Минулої] dddd [';
                            var1 = var3.bind(var1)(var0);
                            var0 = var1.call;
                            var0 = var0.bind(var1)(var2);
                            return var0;
                    }
                };
                var4.lastWeek = var6;
                var6 = 'L';
                var4.sameElse = var6;
                var1.calendar = var4;
                var4 = {
                    'future': 'за %s',
                    'past': '%s тому',
                    's': 'декілька секунд'
                };
                var4.ss = var5;
                var4.m = var5;
                var4.mm = var5;
                var6 = 'годину';
                var4.h = var6;
                var4.hh = var5;
                var6 = 'день';
                var4.d = var6;
                var4.dd = var5;
                var6 = 'місяць';
                var4.M = var6;
                var4.MM = var5;
                var6 = 'рік';
                var4.y = var6;
                var4.yy = var5;
                var1.relativeTime = var4;
                var4 = /ночі|ранку|дня|вечора/;
                var1.meridiemParse = var4;
                var4 = function(arg0) { // Original name: isPM, environment: var0
                    var2 = /^(дня|вечора)$/;
                    var1 = var2.test;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.isPM = var4;
                var4 = function(arg0, arg1, arg2) { // Original name: meridiem, environment: var0
                    _fun24441: for (var _fun24441_ip = 0;;) switch (_fun24441_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = 4;
                            var1 = var3 < var0;
                            var0 = 'ночі';
                            if (var1) {
                                _fun24441_ip = 63;
                                continue _fun24441
                            }
                        case 19:
                            var1 = 12;
                            var2 = var3 < var1;
                            var1 = 'ранку';
                            if (var2) {
                                _fun24441_ip = 60;
                                continue _fun24441
                            }
                        case 35:
                            var2 = 17;
                            var3 = var3 < var2;
                            var2 = 'вечора';
                            if (!var3) {
                                _fun24441_ip = 57;
                                continue _fun24441
                            }
                        case 51:
                            var2 = 'дня';
                        case 57:
                            var1 = var2;
                        case 60:
                            var0 = var1;
                        case 63:
                            return var0;
                    }
                };
                var1.meridiem = var4;
                var4 = /\d{1,2}-(й|го)/;
                var1.dayOfMonthOrdinalParse = var4;
                var0 = function(arg0, arg1) { // Original name: ordinal, environment: var0
                    _fun24442: for (var _fun24442_ip = 0;;) switch (_fun24442_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = arg1;
                            var0 = 'M';
                            if (!(var0 !== var2)) {
                                _fun24442_ip = 70;
                                continue _fun24442
                            }
                        case 14:
                            var0 = 'd';
                            if (!(var0 !== var2)) {
                                _fun24442_ip = 70;
                                continue _fun24442
                            }
                        case 22:
                            var0 = 'DDD';
                            if (!(var0 !== var2)) {
                                _fun24442_ip = 70;
                                continue _fun24442
                            }
                        case 32:
                            var0 = 'w';
                            if (!(var0 !== var2)) {
                                _fun24442_ip = 70;
                                continue _fun24442
                            }
                        case 40:
                            var0 = 'W';
                            if (!(var0 !== var2)) {
                                _fun24442_ip = 70;
                                continue _fun24442
                            }
                        case 48:
                            var0 = 'D';
                            if (!(var0 !== var2)) {
                                _fun24442_ip = 58;
                                continue _fun24442
                            }
                        case 56:
                            return var1;
                        case 58:
                            var0 = '-го';
                            var0 = var1 + var0;
                            return var0;
                        case 70:
                            var0 = '-й';
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var1.ordinal = var0;
                var0 = {
                    'dow': 1,
                    'doy': 7
                };
                var1.week = var0;
                var0 = 'uk';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24433_ip = 44;
                continue _fun24433
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24433_ip = 44;
                continue _fun24433
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24433_ip = 121;
                continue _fun24433
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24433_ip = 78;
                continue _fun24433
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24433_ip = 95;
                continue _fun24433
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24433_ip = 140;
            continue _fun24433;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24433_ip = 140;
            continue _fun24433;
        case 121:
            var4 = arg6;
            var0 = 0;
            var0 = var4[var0];
            var0 = var3.bind(var1)(var0);
            var0 = var2.bind(var1)(var0);
        case 140:
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3004]);