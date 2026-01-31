// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24417: for (var _fun24417_ip = 0;;) switch (_fun24417_ip) {
        case 0:
            var3 = require;
            var2 = function(arg0) { // Original name: _, environment: var0
                var3 = arg0;
                var5 = function(arg0, arg1, arg2) { // Original name: relativeTimeWithPlural, environment: var0
                    _fun24419: for (var _fun24419_ip = 0;;) switch (_fun24419_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = arg1;
                            var4 = arg2;
                            var1 = 'm';
                            if (!(var1 !== var4)) {
                                _fun24419_ip = 187;
                                continue _fun24419
                            }
                        case 20:
                            var1 = ' ';
                            var1 = var0 + var1;
                            var3 = {
                                'ss': null,
                                'mm': null,
                                'hh': 'час_часа_часов',
                                'dd': 'день_дня_дней',
                                'MM': 'месяц_месяца_месяцев',
                                'yy': 'год_года_лет'
                            };
                            var5 = 'секунду_секунды_секунд';
                            if (!var2) {
                                _fun24419_ip = 55;
                                continue _fun24419
                            }
                        case 49:
                            var5 = 'секунда_секунды_секунд';
                        case 55:
                            var3.ss = var5;
                            var5 = 'минуту_минуты_минут';
                            if (!var2) {
                                _fun24419_ip = 76;
                                continue _fun24419
                            }
                        case 70:
                            var5 = 'минута_минуты_минут';
                        case 76:
                            var3.mm = var5;
                            var4 = var3[var4];
                            var7 = var0 - 0;
                            var3 = var4.split;
                            var0 = '_';
                            var4 = var3.bind(var4)(var0);
                            var5 = 10;
                            var8 = var7 % var5;
                            var3 = 1;
                            if (!(var8 === var3)) {
                                _fun24419_ip = 131;
                                continue _fun24419
                            }
                        case 117:
                            var0 = 100;
                            var6 = var7 % var0;
                            var0 = 11;
                            if (!(var6 === var0)) {
                                _fun24419_ip = 175;
                                continue _fun24419
                            }
                        case 131:
                            var0 = 2;
                            if (!(var8 >= var0)) {
                                _fun24419_ip = 163;
                                continue _fun24419
                            }
                        case 138:
                            var6 = 4;
                            if (!(var8 <= var6)) {
                                _fun24419_ip = 163;
                                continue _fun24419
                            }
                        case 145:
                            var6 = 100;
                            var6 = var7 % var6;
                            if (!(!(var6 < var5))) {
                                _fun24419_ip = 169;
                                continue _fun24419
                            }
                        case 156:
                            var5 = 20;
                            if (!(!(var6 >= var5))) {
                                _fun24419_ip = 169;
                                continue _fun24419
                            }
                        case 163:
                            var0 = var4[var0];
                            _fun24419_ip = 173;
                            continue _fun24419;
                        case 169:
                            var0 = var4[var3];
                        case 173:
                            _fun24419_ip = 181;
                            continue _fun24419;
                        case 175:
                            var3 = 0;
                            var0 = var4[var3];
                        case 181:
                            var0 = var1 + var0;
                            _fun24419_ip = 205;
                            continue _fun24419;
                        case 187:
                            var1 = 'минуту';
                            if (!var2) {
                                _fun24419_ip = 202;
                                continue _fun24419
                            }
                        case 196:
                            var1 = 'минута';
                        case 202:
                            var0 = var1;
                        case 205:
                            return var0;
                    }
                };
                var4 = new Array(12);
                var1 = /^янв/i;
                var4[0] = var1;
                var1 = /^фев/i;
                var4[1] = var1;
                var1 = /^мар/i;
                var4[2] = var1;
                var1 = /^апр/i;
                var4[3] = var1;
                var1 = /^ма[йя]/i;
                var4[4] = var1;
                var1 = /^июн/i;
                var4[5] = var1;
                var1 = /^июл/i;
                var4[6] = var1;
                var1 = /^авг/i;
                var4[7] = var1;
                var1 = /^сен/i;
                var4[8] = var1;
                var1 = /^окт/i;
                var4[9] = var1;
                var1 = /^ноя/i;
                var4[10] = var1;
                var1 = /^дек/i;
                var4[11] = var1;
                var2 = var3.defineLocale;
                var1 = {};
                var6 = {};
                var9 = 'января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря';
                var7 = var9.split;
                var8 = '_';
                var7 = var7.bind(var9)(var8);
                var6.format = var7;
                var9 = 'январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь';
                var7 = var9.split;
                var7 = var7.bind(var9)(var8);
                var6.standalone = var7;
                var1.months = var6;
                var6 = {};
                var9 = 'янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.';
                var7 = var9.split;
                var7 = var7.bind(var9)(var8);
                var6.format = var7;
                var9 = 'янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.';
                var7 = var9.split;
                var7 = var7.bind(var9)(var8);
                var6.standalone = var7;
                var1.monthsShort = var6;
                var6 = {};
                var9 = 'воскресенье_понедельник_вторник_среда_четверг_пятница_суббота';
                var7 = var9.split;
                var7 = var7.bind(var9)(var8);
                var6.standalone = var7;
                var9 = 'воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу';
                var7 = var9.split;
                var7 = var7.bind(var9)(var8);
                var6.format = var7;
                var7 = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/;
                var6.isFormat = var7;
                var1.weekdays = var6;
                var7 = 'вс_пн_вт_ср_чт_пт_сб';
                var6 = var7.split;
                var6 = var6.bind(var7)(var8);
                var1.weekdaysShort = var6;
                var6 = var7.split;
                var6 = var6.bind(var7)(var8);
                var1.weekdaysMin = var6;
                var1.monthsParse = var4;
                var1.longMonthsParse = var4;
                var1.shortMonthsParse = var4;
                var4 = /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i;
                var1.monthsRegex = var4;
                var4 = /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i;
                var1.monthsShortRegex = var4;
                var4 = /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i;
                var1.monthsStrictRegex = var4;
                var4 = /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i;
                var1.monthsShortStrictRegex = var4;
                var4 = {
                    'LT': 'H:mm',
                    'LTS': 'H:mm:ss',
                    'L': 'DD.MM.YYYY',
                    'LL': 'D MMMM YYYY г.',
                    'LLL': 'D MMMM YYYY г., H:mm',
                    'LLLL': 'dddd, D MMMM YYYY г., H:mm'
                };
                var1.longDateFormat = var4;
                var4 = {
                    'sameDay': '[Сегодня, в] LT',
                    'nextDay': '[Завтра, в] LT',
                    'lastDay': '[Вчера, в] LT',
                    'nextWeek': null,
                    'lastWeek': null,
                    'sameElse': 'L'
                };
                var6 = function(arg0) { // Original name: nextWeek, environment: var0
                    _fun24420: for (var _fun24420_ip = 0;;) switch (_fun24420_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = this;
                            var0 = var2.week;
                            var2 = var0.bind(var2)();
                            var0 = var1.week;
                            var0 = var0.bind(var1)();
                            if (!(var2 !== var0)) {
                                _fun24420_ip = 116;
                                continue _fun24420
                            }
                        case 30:
                            var0 = var1.day;
                            var2 = var0.bind(var1)();
                            var0 = 0;
                            if (!(var0 !== var2)) {
                                _fun24420_ip = 108;
                                continue _fun24420
                            }
                        case 46:
                            var0 = 1;
                            if (!(var0 !== var2)) {
                                _fun24420_ip = 100;
                                continue _fun24420
                            }
                        case 53:
                            var0 = 2;
                            if (!(var0 !== var2)) {
                                _fun24420_ip = 100;
                                continue _fun24420
                            }
                        case 60:
                            var0 = 4;
                            if (!(var0 !== var2)) {
                                _fun24420_ip = 100;
                                continue _fun24420
                            }
                        case 67:
                            var0 = 3;
                            if (!(var0 !== var2)) {
                                _fun24420_ip = 92;
                                continue _fun24420
                            }
                        case 74:
                            var0 = 5;
                            if (!(var0 !== var2)) {
                                _fun24420_ip = 92;
                                continue _fun24420
                            }
                        case 81:
                            var0 = 6;
                            if (!(var0 !== var2)) {
                                _fun24420_ip = 92;
                                continue _fun24420
                            }
                        case 88:
                            var0 = undefined;
                            return var0;
                        case 92:
                            var0 = '[В следующую] dddd, [в] LT';
                            return var0;
                        case 100:
                            var0 = '[В следующий] dddd, [в] LT';
                            return var0;
                        case 108:
                            var0 = '[В следующее] dddd, [в] LT';
                            return var0;
                        case 116:
                            var0 = var1.day;
                            var2 = var0.bind(var1)();
                            var0 = '[В] dddd, [в] LT';
                            var1 = 2;
                            if (!(var1 === var2)) {
                                _fun24420_ip = 145;
                                continue _fun24420
                            }
                        case 139:
                            var0 = '[Во] dddd, [в] LT';
                        case 145:
                            return var0;
                    }
                };
                var4.nextWeek = var6;
                var6 = function(arg0) { // Original name: lastWeek, environment: var0
                    _fun24421: for (var _fun24421_ip = 0;;) switch (_fun24421_ip) {
                        case 0:
                            var2 = arg0;
                            var1 = this;
                            var0 = var2.week;
                            var2 = var0.bind(var2)();
                            var0 = var1.week;
                            var0 = var0.bind(var1)();
                            if (!(var2 !== var0)) {
                                _fun24421_ip = 116;
                                continue _fun24421
                            }
                        case 30:
                            var0 = var1.day;
                            var2 = var0.bind(var1)();
                            var0 = 0;
                            if (!(var0 !== var2)) {
                                _fun24421_ip = 108;
                                continue _fun24421
                            }
                        case 46:
                            var0 = 1;
                            if (!(var0 !== var2)) {
                                _fun24421_ip = 100;
                                continue _fun24421
                            }
                        case 53:
                            var0 = 2;
                            if (!(var0 !== var2)) {
                                _fun24421_ip = 100;
                                continue _fun24421
                            }
                        case 60:
                            var0 = 4;
                            if (!(var0 !== var2)) {
                                _fun24421_ip = 100;
                                continue _fun24421
                            }
                        case 67:
                            var0 = 3;
                            if (!(var0 !== var2)) {
                                _fun24421_ip = 92;
                                continue _fun24421
                            }
                        case 74:
                            var0 = 5;
                            if (!(var0 !== var2)) {
                                _fun24421_ip = 92;
                                continue _fun24421
                            }
                        case 81:
                            var0 = 6;
                            if (!(var0 !== var2)) {
                                _fun24421_ip = 92;
                                continue _fun24421
                            }
                        case 88:
                            var0 = undefined;
                            return var0;
                        case 92:
                            var0 = '[В прошлую] dddd, [в] LT';
                            return var0;
                        case 100:
                            var0 = '[В прошлый] dddd, [в] LT';
                            return var0;
                        case 108:
                            var0 = '[В прошлое] dddd, [в] LT';
                            return var0;
                        case 116:
                            var0 = var1.day;
                            var2 = var0.bind(var1)();
                            var0 = '[В] dddd, [в] LT';
                            var1 = 2;
                            if (!(var1 === var2)) {
                                _fun24421_ip = 145;
                                continue _fun24421
                            }
                        case 139:
                            var0 = '[Во] dddd, [в] LT';
                        case 145:
                            return var0;
                    }
                };
                var4.lastWeek = var6;
                var1.calendar = var4;
                var4 = {
                    'future': 'через %s',
                    'past': '%s назад',
                    's': 'несколько секунд'
                };
                var4.ss = var5;
                var4.m = var5;
                var4.mm = var5;
                var6 = 'час';
                var4.h = var6;
                var4.hh = var5;
                var6 = 'день';
                var4.d = var6;
                var4.dd = var5;
                var6 = 'месяц';
                var4.M = var6;
                var4.MM = var5;
                var6 = 'год';
                var4.y = var6;
                var4.yy = var5;
                var1.relativeTime = var4;
                var4 = /ночи|утра|дня|вечера/i;
                var1.meridiemParse = var4;
                var4 = function(arg0) { // Original name: isPM, environment: var0
                    var2 = /^(дня|вечера)$/;
                    var1 = var2.test;
                    var0 = arg0;
                    var0 = var1.bind(var2)(var0);
                    return var0;
                };
                var1.isPM = var4;
                var4 = function(arg0, arg1, arg2) { // Original name: meridiem, environment: var0
                    _fun24423: for (var _fun24423_ip = 0;;) switch (_fun24423_ip) {
                        case 0:
                            var3 = arg0;
                            var0 = 4;
                            var1 = var3 < var0;
                            var0 = 'ночи';
                            if (var1) {
                                _fun24423_ip = 63;
                                continue _fun24423
                            }
                        case 19:
                            var1 = 12;
                            var2 = var3 < var1;
                            var1 = 'утра';
                            if (var2) {
                                _fun24423_ip = 60;
                                continue _fun24423
                            }
                        case 35:
                            var2 = 17;
                            var3 = var3 < var2;
                            var2 = 'вечера';
                            if (!var3) {
                                _fun24423_ip = 57;
                                continue _fun24423
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
                var4 = /\d{1,2}-(й|го|я)/;
                var1.dayOfMonthOrdinalParse = var4;
                var0 = function(arg0, arg1) { // Original name: ordinal, environment: var0
                    _fun24424: for (var _fun24424_ip = 0;;) switch (_fun24424_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = arg1;
                            var0 = 'M';
                            if (!(var0 !== var2)) {
                                _fun24424_ip = 82;
                                continue _fun24424
                            }
                        case 14:
                            var0 = 'd';
                            if (!(var0 !== var2)) {
                                _fun24424_ip = 82;
                                continue _fun24424
                            }
                        case 22:
                            var0 = 'DDD';
                            if (!(var0 !== var2)) {
                                _fun24424_ip = 82;
                                continue _fun24424
                            }
                        case 32:
                            var0 = 'D';
                            if (!(var0 !== var2)) {
                                _fun24424_ip = 70;
                                continue _fun24424
                            }
                        case 40:
                            var0 = 'w';
                            if (!(var0 !== var2)) {
                                _fun24424_ip = 58;
                                continue _fun24424
                            }
                        case 48:
                            var0 = 'W';
                            if (!(var0 !== var2)) {
                                _fun24424_ip = 58;
                                continue _fun24424
                            }
                        case 56:
                            return var1;
                        case 58:
                            var0 = '-я';
                            var0 = var1 + var0;
                            return var0;
                        case 70:
                            var0 = '-го';
                            var0 = var1 + var0;
                            return var0;
                        case 82:
                            var0 = '-й';
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var1.ordinal = var0;
                var0 = {
                    'dow': 1,
                    'doy': 4
                };
                var1.week = var0;
                var0 = 'ru';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24417_ip = 44;
                continue _fun24417
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24417_ip = 44;
                continue _fun24417
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24417_ip = 121;
                continue _fun24417
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24417_ip = 78;
                continue _fun24417
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24417_ip = 95;
                continue _fun24417
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24417_ip = 140;
            continue _fun24417;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24417_ip = 140;
            continue _fun24417;
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