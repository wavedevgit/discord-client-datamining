// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24524: for (var _fun24524_ip = 0;;) switch (_fun24524_ip) {
        case 0:
            var3 = require;
            var2 = function arg0() {
                var3 = arg0;
                var2 = var3.defineLocale;
                var1 = {};
                var5 = 'Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος';
                var4 = var5.split;
                var6 = '_';
                var4 = var4.bind(var5)(var6);
                var1.monthsNominativeEl = var4;
                var5 = 'Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.monthsGenitiveEl = var4;
                var4 = function arg0, arg1() {
                    _fun24526: for (var _fun24526_ip = 0;;) switch (_fun24526_ip) {
                        case 0:
                            var4 = arg0;
                            var8 = arg1;
                            var2 = this;
                            if (var4) {
                                _fun24526_ip = 20;
                                continue _fun24526
                            }
                        case 12:
                            var0 = var2._monthsNominativeEl;
                            _fun24526_ip = 136;
                            continue _fun24526;
                        case 20:
                            var3 = 'string';
                            var1 = typeof var8;
                            if (!(var3 === var1)) {
                                _fun24526_ip = 89;
                                continue _fun24526
                            }
                        case 31:
                            var5 = /D/;
                            var3 = var5.test;
                            var7 = var8.substring;
                            var6 = var8.indexOf;
                            var1 = 'MMMM';
                            var6 = var6.bind(var8)(var1);
                            var1 = 0;
                            var1 = var7.bind(var8)(var1, var6);
                            var1 = var3.bind(var5)(var1);
                            if (var1) {
                                _fun24526_ip = 111;
                                continue _fun24526
                            }
                        case 89:
                            var3 = var2._monthsNominativeEl;
                            var1 = var4.month;
                            var1 = var1.bind(var4)();
                            var1 = var3[var1];
                            _fun24526_ip = 133;
                            continue _fun24526;
                        case 111:
                            var3 = var2._monthsGenitiveEl;
                            var2 = var4.month;
                            var2 = var2.bind(var4)();
                            var1 = var3[var2];
                        case 133:
                            var0 = var1;
                        case 136:
                            return var0;
                    }
                };
                var1.months = var4;
                var5 = 'Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.monthsShort = var4;
                var5 = 'Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdays = var4;
                var5 = 'Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysShort = var4;
                var5 = 'Κυ_Δε_Τρ_Τε_Πε_Πα_Σα';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysMin = var4;
                var4 = function arg0, arg1, arg2() {
                    _fun24527: for (var _fun24527_ip = 0;;) switch (_fun24527_ip) {
                        case 0:
                            var2 = arg2;
                            var1 = arg0;
                            var0 = 11;
                            if (!(!(var1 > var0))) {
                                _fun24527_ip = 30;
                                continue _fun24527
                            }
                        case 13:
                            var0 = 'ΠΜ';
                            if (!var2) {
                                _fun24527_ip = 28;
                                continue _fun24527
                            }
                        case 22:
                            var0 = 'πμ';
                        case 28:
                            _fun24527_ip = 48;
                            continue _fun24527;
                        case 30:
                            var1 = 'ΜΜ';
                            if (!var2) {
                                _fun24527_ip = 45;
                                continue _fun24527
                            }
                        case 39:
                            var1 = 'μμ';
                        case 45:
                            var0 = var1;
                        case 48:
                            return var0;
                    }
                };
                var1.meridiem = var4;
                var4 = function arg0() {
                    var0 = arg0;
                    var1 = '' + var0;
                    var0 = var1.toLowerCase;
                    var1 = var0.bind(var1)();
                    var0 = 0;
                    var1 = var1[var0];
                    var0 = 'μ';
                    var0 = var0 === var1;
                    return var0;
                };
                var1.isPM = var4;
                var4 = /[ΠΜ]\.?Μ?\.?/i;
                var1.meridiemParse = var4;
                var4 = {
                    'LT': 'h:mm A',
                    'LTS': 'h:mm:ss A',
                    'L': 'DD/MM/YYYY',
                    'LL': 'D MMMM YYYY',
                    'LLL': 'D MMMM YYYY h:mm A',
                    'LLLL': 'dddd, D MMMM YYYY h:mm A'
                };
                var1.longDateFormat = var4;
                var4 = {
                    'sameDay': '[Σήμερα {}] LT',
                    'nextDay': '[Αύριο {}] LT',
                    'nextWeek': 'dddd [{}] LT',
                    'lastDay': '[Χθες {}] LT',
                    'lastWeek': null,
                    'sameElse': 'L'
                };
                var5 = function() {
                    _fun24529: for (var _fun24529_ip = 0;;) switch (_fun24529_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.day;
                            var2 = var0.bind(var1)();
                            var0 = '[την προηγούμενη] dddd [{}] LT';
                            var1 = 6;
                            if (!(var1 === var2)) {
                                _fun24529_ip = 32;
                                continue _fun24529
                            }
                        case 26:
                            var0 = '[το προηγούμενο] dddd [{}] LT';
                        case 32:
                            return var0;
                    }
                };
                var4.lastWeek = var5;
                var1.calendarEl = var4;
                var0 = function arg0, arg1() {
                    _fun24530: for (var _fun24530_ip = 0;;) switch (_fun24530_ip) {
                        case 0:
                            var4 = arg1;
                            var0 = this;
                            var1 = var0._calendarEl;
                            var0 = arg0;
                            var2 = var1[var0];
                            var1 = var4;
                            if (!var1) {
                                _fun24530_ip = 37;
                                continue _fun24530
                            }
                        case 27:
                            var0 = var4.hours;
                            var1 = var0.bind(var4)();
                        case 37:
                            var3 = global;
                            var0 = var3.Function;
                            var0 = var2 instanceof var0;
                            if (var0) {
                                _fun24530_ip = 86;
                                continue _fun24530
                            }
                        case 52:
                            var3 = var3.Object;
                            var3 = var3.prototype;
                            var5 = var3.toString;
                            var3 = var5.call;
                            var5 = var3.bind(var5)(var2);
                            var3 = '[object Function]';
                            var0 = var3 === var5;
                        case 86:
                            var3 = var2;
                            if (!var0) {
                                _fun24530_ip = 102;
                                continue _fun24530
                            }
                        case 92:
                            var0 = var2.apply;
                            var3 = var0.bind(var2)(var4);
                        case 102:
                            var2 = var3.replace;
                            var0 = 12;
                            var4 = var1 % var0;
                            var1 = 'στις';
                            var0 = 1;
                            if (!(var4 === var0)) {
                                _fun24530_ip = 133;
                                continue _fun24530
                            }
                        case 127:
                            var1 = 'στη';
                        case 133:
                            var0 = '{}';
                            var0 = var2.bind(var3)(var0, var1);
                            return var0;
                    }
                };
                var1.calendar = var0;
                var0 = {
                    'future': 'σε %s',
                    'past': '%s πριν',
                    's': 'λίγα δευτερόλεπτα',
                    'ss': '%d δευτερόλεπτα',
                    'm': 'ένα λεπτό',
                    'mm': '%d λεπτά',
                    'h': 'μία ώρα',
                    'hh': '%d ώρες',
                    'd': 'μία μέρα',
                    'dd': '%d μέρες',
                    'M': 'ένας μήνας',
                    'MM': '%d μήνες',
                    'y': 'ένας χρόνος',
                    'yy': '%d χρόνια'
                };
                var1.relativeTime = var0;
                var0 = /\d{1,2}η/;
                var1.dayOfMonthOrdinalParse = var0;
                var0 = '%dη';
                var1.ordinal = var0;
                var0 = {
                    'dow': 1,
                    'doy': 4
                };
                var1.week = var0;
                var0 = 'el';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24524_ip = 44;
                continue _fun24524
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24524_ip = 44;
                continue _fun24524
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24524_ip = 121;
                continue _fun24524
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24524_ip = 78;
                continue _fun24524
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24524_ip = 95;
                continue _fun24524
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24524_ip = 140;
            continue _fun24524;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24524_ip = 140;
            continue _fun24524;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [3047]);