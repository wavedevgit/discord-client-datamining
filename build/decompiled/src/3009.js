// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24342: for (var _fun24342_ip = 0;;) switch (_fun24342_ip) {
        case 0:
            var3 = require;
            var2 = function(arg0) { // Original name: n, environment: var0
                var3 = arg0;
                var2 = var3.defineLocale;
                var1 = {};
                var4 = 'January_February_March_April_May_June_July_August_September_October_November_December';
                var0 = var4.split;
                var5 = '_';
                var0 = var0.bind(var4)(var5);
                var1.months = var0;
                var4 = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.monthsShort = var0;
                var4 = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.weekdays = var0;
                var4 = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.weekdaysShort = var0;
                var4 = 'Su_Mo_Tu_We_Th_Fr_Sa';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.weekdaysMin = var0;
                var0 = {
                    'LT': 'HH:mm',
                    'LTS': 'HH:mm:ss',
                    'L': 'DD/MM/YYYY',
                    'LL': 'D MMMM YYYY',
                    'LLL': 'D MMMM YYYY HH:mm',
                    'LLLL': 'dddd, D MMMM YYYY HH:mm'
                };
                var1.longDateFormat = var0;
                var0 = {
                    'sameDay': '[Today at] LT',
                    'nextDay': '[Tomorrow at] LT',
                    'nextWeek': 'dddd [at] LT',
                    'lastDay': '[Yesterday at] LT',
                    'lastWeek': '[Last] dddd [at] LT',
                    'sameElse': 'L'
                };
                var1.calendar = var0;
                var0 = {
                    'future': 'in %s',
                    'past': '%s ago',
                    's': 'a few seconds',
                    'ss': '%d seconds',
                    'm': 'a minute',
                    'mm': '%d minutes',
                    'h': 'an hour',
                    'hh': '%d hours',
                    'd': 'a day',
                    'dd': '%d days',
                    'M': 'a month',
                    'MM': '%d months',
                    'y': 'a year',
                    'yy': '%d years'
                };
                var1.relativeTime = var0;
                var0 = /\d{1,2}(st|nd|rd|th)/;
                var1.dayOfMonthOrdinalParse = var0;
                var0 = function(arg0) { // Original name: ordinal, environment: var0
                    _fun24344: for (var _fun24344_ip = 0;;) switch (_fun24344_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = 10;
                            var6 = var1 % var2;
                            var0 = 100;
                            var0 = var1 % var0;
                            var4 = 'th';
                            var3 = 1;
                            var0 = var0 / var2;
                            var0 = ~var0;
                            var2 = ~var0;
                            var0 = var4;
                            if (!(var3 !== var2)) {
                                _fun24344_ip = 82;
                                continue _fun24344
                            }
                        case 41:
                            var2 = 'st';
                            if (!(var3 !== var6)) {
                                _fun24344_ip = 79;
                                continue _fun24344
                            }
                        case 49:
                            var3 = 'nd';
                            var5 = 2;
                            if (!(var5 !== var6)) {
                                _fun24344_ip = 76;
                                continue _fun24344
                            }
                        case 60:
                            var5 = 3;
                            if (!(var5 === var6)) {
                                _fun24344_ip = 73;
                                continue _fun24344
                            }
                        case 67:
                            var4 = 'rd';
                        case 73:
                            var3 = var4;
                        case 76:
                            var2 = var3;
                        case 79:
                            var0 = var2;
                        case 82:
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
                var0 = 'en-gb';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24342_ip = 44;
                continue _fun24342
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24342_ip = 44;
                continue _fun24342
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24342_ip = 121;
                continue _fun24342
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24342_ip = 78;
                continue _fun24342
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24342_ip = 95;
                continue _fun24342
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24342_ip = 140;
            continue _fun24342;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24342_ip = 140;
            continue _fun24342;
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