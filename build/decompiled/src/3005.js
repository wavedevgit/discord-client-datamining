// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24015: for (var _fun24015_ip = 0;;) switch (_fun24015_ip) {
        case 0:
            var3 = require;
            var2 = function arg0() {
                var3 = arg0;
                var2 = var3.defineLocale;
                var1 = {};
                var5 = 'януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември';
                var4 = var5.split;
                var6 = '_';
                var4 = var4.bind(var5)(var6);
                var1.months = var4;
                var5 = 'янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.monthsShort = var4;
                var5 = 'неделя_понеделник_вторник_сряда_четвъртък_петък_събота';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdays = var4;
                var5 = 'нед_пон_вто_сря_чет_пет_съб';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysShort = var4;
                var5 = 'нд_пн_вт_ср_чт_пт_сб';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysMin = var4;
                var4 = {
                    'LT': 'H:mm',
                    'LTS': 'H:mm:ss',
                    'L': 'D.MM.YYYY',
                    'LL': 'D MMMM YYYY',
                    'LLL': 'D MMMM YYYY H:mm',
                    'LLLL': 'dddd, D MMMM YYYY H:mm'
                };
                var1.longDateFormat = var4;
                var4 = {
                    'sameDay': '[Днес в] LT',
                    'nextDay': '[Утре в] LT',
                    'nextWeek': 'dddd [в] LT',
                    'lastDay': '[Вчера в] LT',
                    'lastWeek': null,
                    'sameElse': 'L'
                };
                var5 = function() {
                    _fun24017: for (var _fun24017_ip = 0;;) switch (_fun24017_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.day;
                            var1 = var0.bind(var1)();
                            var0 = 0;
                            if (!(var0 !== var1)) {
                                _fun24017_ip = 73;
                                continue _fun24017
                            }
                        case 19:
                            var0 = 3;
                            if (!(var0 !== var1)) {
                                _fun24017_ip = 73;
                                continue _fun24017
                            }
                        case 26:
                            var0 = 6;
                            if (!(var0 !== var1)) {
                                _fun24017_ip = 73;
                                continue _fun24017
                            }
                        case 33:
                            var0 = 1;
                            if (!(var0 !== var1)) {
                                _fun24017_ip = 65;
                                continue _fun24017
                            }
                        case 40:
                            var0 = 2;
                            if (!(var0 !== var1)) {
                                _fun24017_ip = 65;
                                continue _fun24017
                            }
                        case 47:
                            var0 = 4;
                            if (!(var0 !== var1)) {
                                _fun24017_ip = 65;
                                continue _fun24017
                            }
                        case 54:
                            var0 = 5;
                            if (!(var0 !== var1)) {
                                _fun24017_ip = 65;
                                continue _fun24017
                            }
                        case 61:
                            var0 = undefined;
                            return var0;
                        case 65:
                            var0 = '[В изминалия] dddd [в] LT';
                            return var0;
                        case 73:
                            var0 = '[В изминалата] dddd [в] LT';
                            return var0;
                    }
                };
                var4.lastWeek = var5;
                var1.calendar = var4;
                var4 = {
                    'future': 'след %s',
                    'past': 'преди %s',
                    's': 'няколко секунди',
                    'ss': '%d секунди',
                    'm': 'минута',
                    'mm': '%d минути',
                    'h': 'час',
                    'hh': '%d часа',
                    'd': 'ден',
                    'dd': '%d дни',
                    'M': 'месец',
                    'MM': '%d месеца',
                    'y': 'година',
                    'yy': '%d години'
                };
                var1.relativeTime = var4;
                var4 = /\d{1,2}-(ев|ен|ти|ви|ри|ми)/;
                var1.dayOfMonthOrdinalParse = var4;
                var0 = function arg0() {
                    _fun24018: for (var _fun24018_ip = 0;;) switch (_fun24018_ip) {
                        case 0:
                            var2 = arg0;
                            var0 = 10;
                            var1 = var2 % var0;
                            var3 = 100;
                            var3 = var2 % var3;
                            var4 = 0;
                            if (!(var4 !== var2)) {
                                _fun24018_ip = 138;
                                continue _fun24018
                            }
                        case 23:
                            if (!(var4 !== var3)) {
                                _fun24018_ip = 126;
                                continue _fun24018
                            }
                        case 27:
                            if (!(var3 > var0)) {
                                _fun24018_ip = 38;
                                continue _fun24018
                            }
                        case 31:
                            var0 = 20;
                            if (!(!(var3 < var0))) {
                                _fun24018_ip = 114;
                                continue _fun24018
                            }
                        case 38:
                            var0 = 1;
                            if (!(var0 !== var1)) {
                                _fun24018_ip = 102;
                                continue _fun24018
                            }
                        case 45:
                            var0 = 2;
                            if (!(var0 !== var1)) {
                                _fun24018_ip = 90;
                                continue _fun24018
                            }
                        case 52:
                            var0 = 7;
                            if (!(var0 !== var1)) {
                                _fun24018_ip = 78;
                                continue _fun24018
                            }
                        case 59:
                            var0 = 8;
                            if (!(var0 !== var1)) {
                                _fun24018_ip = 78;
                                continue _fun24018
                            }
                        case 66:
                            var0 = '-ти';
                            var0 = var2 + var0;
                            _fun24018_ip = 88;
                            continue _fun24018;
                        case 78:
                            var1 = '-ми';
                            var0 = var2 + var1;
                        case 88:
                            _fun24018_ip = 100;
                            continue _fun24018;
                        case 90:
                            var1 = '-ри';
                            var0 = var2 + var1;
                        case 100:
                            _fun24018_ip = 112;
                            continue _fun24018;
                        case 102:
                            var1 = '-ви';
                            var0 = var2 + var1;
                        case 112:
                            _fun24018_ip = 124;
                            continue _fun24018;
                        case 114:
                            var1 = '-ти';
                            var0 = var2 + var1;
                        case 124:
                            _fun24018_ip = 136;
                            continue _fun24018;
                        case 126:
                            var1 = '-ен';
                            var0 = var2 + var1;
                        case 136:
                            _fun24018_ip = 148;
                            continue _fun24018;
                        case 138:
                            var1 = '-ев';
                            var0 = var2 + var1;
                        case 148:
                            return var0;
                    }
                };
                var1.ordinal = var0;
                var0 = {
                    'dow': 1,
                    'doy': 7
                };
                var1.week = var0;
                var0 = 'bg';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24015_ip = 44;
                continue _fun24015
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24015_ip = 44;
                continue _fun24015
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24015_ip = 121;
                continue _fun24015
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24015_ip = 78;
                continue _fun24015
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24015_ip = 95;
                continue _fun24015
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24015_ip = 140;
            continue _fun24015;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24015_ip = 140;
            continue _fun24015;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [3006]);