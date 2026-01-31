// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24334: for (var _fun24334_ip = 0;;) switch (_fun24334_ip) {
        case 0:
            var3 = require;
            var2 = function(arg0) { // Original name: t, environment: var0
                var3 = arg0;
                var4 = function(arg0, arg1, arg2, arg3) { // Original name: processRelativeTime, environment: var0
                    _fun24336: for (var _fun24336_ip = 0;;) switch (_fun24336_ip) {
                        case 0:
                            var3 = arg0;
                            var1 = {};
                            var0 = ['eine Minute', 'einer Minute'];
                            var1.m = var0;
                            var0 = ['eine Stunde', 'einer Stunde'];
                            var1.h = var0;
                            var0 = ['ein Tag', 'einem Tag'];
                            var1.d = var0;
                            var0 = ' Tage';
                            var2 = var3 + var0;
                            var0 = new Array(2);
                            var0[0] = var2;
                            var2 = ' Tagen';
                            var2 = var3 + var2;
                            var0[1] = var2;
                            var1.dd = var0;
                            var0 = ['ein Monat', 'einem Monat'];
                            var1.M = var0;
                            var0 = ' Monate';
                            var2 = var3 + var0;
                            var0 = new Array(2);
                            var0[0] = var2;
                            var2 = ' Monaten';
                            var2 = var3 + var2;
                            var0[1] = var2;
                            var1.MM = var0;
                            var0 = ['ein Jahr', 'einem Jahr'];
                            var1.y = var0;
                            var0 = ' Jahre';
                            var2 = var3 + var0;
                            var0 = new Array(2);
                            var0[0] = var2;
                            var2 = ' Jahren';
                            var2 = var3 + var2;
                            var0[1] = var2;
                            var1.yy = var0;
                            var0 = arg2;
                            var2 = var1[var0];
                            var0 = arg1;
                            if (var0) {
                                _fun24336_ip = 210;
                                continue _fun24336
                            }
                        case 201:
                            var0 = 1;
                            var0 = var2[var0];
                            _fun24336_ip = 216;
                            continue _fun24336;
                        case 210:
                            var1 = 0;
                            var0 = var2[var1];
                        case 216:
                            return var0;
                    }
                };
                var2 = var3.defineLocale;
                var1 = {};
                var5 = 'Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember';
                var0 = var5.split;
                var7 = '_';
                var0 = var0.bind(var5)(var7);
                var1.months = var0;
                var5 = 'Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.';
                var0 = var5.split;
                var0 = var0.bind(var5)(var7);
                var1.monthsShort = var0;
                var0 = true;
                var1.monthsParseExact = var0;
                var6 = 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag';
                var5 = var6.split;
                var5 = var5.bind(var6)(var7);
                var1.weekdays = var5;
                var6 = 'So._Mo._Di._Mi._Do._Fr._Sa.';
                var5 = var6.split;
                var5 = var5.bind(var6)(var7);
                var1.weekdaysShort = var5;
                var6 = 'So_Mo_Di_Mi_Do_Fr_Sa';
                var5 = var6.split;
                var5 = var5.bind(var6)(var7);
                var1.weekdaysMin = var5;
                var1.weekdaysParseExact = var0;
                var0 = {
                    'LT': 'HH:mm',
                    'LTS': 'HH:mm:ss',
                    'L': 'DD.MM.YYYY',
                    'LL': 'D. MMMM YYYY',
                    'LLL': 'D. MMMM YYYY HH:mm',
                    'LLLL': 'dddd, D. MMMM YYYY HH:mm'
                };
                var1.longDateFormat = var0;
                var0 = {
                    'sameDay': '[heute um] LT [Uhr]',
                    'sameElse': 'L',
                    'nextDay': '[morgen um] LT [Uhr]',
                    'nextWeek': 'dddd [um] LT [Uhr]',
                    'lastDay': '[gestern um] LT [Uhr]',
                    'lastWeek': '[letzten] dddd [um] LT [Uhr]'
                };
                var1.calendar = var0;
                var0 = {
                    'future': 'in %s',
                    'past': 'vor %s',
                    's': 'ein paar Sekunden',
                    'ss': '%d Sekunden',
                    'm': null,
                    'mm': '%d Minuten',
                    'h': null,
                    'hh': '%d Stunden'
                };
                var0.m = var4;
                var0.h = var4;
                var0.d = var4;
                var0.dd = var4;
                var0.M = var4;
                var0.MM = var4;
                var0.y = var4;
                var0.yy = var4;
                var1.relativeTime = var0;
                var0 = /\d{1,2}\./;
                var1.dayOfMonthOrdinalParse = var0;
                var0 = '%d.';
                var1.ordinal = var0;
                var0 = {
                    'dow': 1,
                    'doy': 4
                };
                var1.week = var0;
                var0 = 'de';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24334_ip = 44;
                continue _fun24334
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24334_ip = 44;
                continue _fun24334
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24334_ip = 121;
                continue _fun24334
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24334_ip = 78;
                continue _fun24334
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24334_ip = 95;
                continue _fun24334
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24334_ip = 140;
            continue _fun24334;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24334_ip = 140;
            continue _fun24334;
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