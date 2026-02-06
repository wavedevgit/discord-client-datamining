// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24612: for (var _fun24612_ip = 0;;) switch (_fun24612_ip) {
        case 0:
            var3 = require;
            var2 = function arg0() {
                var3 = arg0;
                var2 = var3.defineLocale;
                var1 = {};
                var4 = 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december';
                var0 = var4.split;
                var5 = '_';
                var0 = var0.bind(var4)(var5);
                var1.months = var0;
                var4 = 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.monthsShort = var0;
                var4 = 'söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.weekdays = var0;
                var4 = 'sön_mån_tis_ons_tor_fre_lör';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.weekdaysShort = var0;
                var4 = 'sö_må_ti_on_to_fr_lö';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.weekdaysMin = var0;
                var0 = {
                    'LT': 'HH:mm',
                    'LTS': 'HH:mm:ss',
                    'L': 'YYYY-MM-DD',
                    'LL': 'D MMMM YYYY',
                    'LLL': 'D MMMM YYYY [kl.] HH:mm',
                    'LLLL': 'dddd D MMMM YYYY [kl.] HH:mm',
                    'lll': 'D MMM YYYY HH:mm',
                    'llll': 'ddd D MMM YYYY HH:mm'
                };
                var1.longDateFormat = var0;
                var0 = {
                    'sameDay': '[Idag] LT',
                    'nextDay': '[Imorgon] LT',
                    'lastDay': '[Igår] LT',
                    'nextWeek': '[På] dddd LT',
                    'lastWeek': '[I] dddd[s] LT',
                    'sameElse': 'L'
                };
                var1.calendar = var0;
                var0 = {
                    'future': 'om %s',
                    'past': 'för %s sedan',
                    's': 'några sekunder',
                    'ss': '%d sekunder',
                    'm': 'en minut',
                    'mm': '%d minuter',
                    'h': 'en timme',
                    'hh': '%d timmar',
                    'd': 'en dag',
                    'dd': '%d dagar',
                    'M': 'en månad',
                    'MM': '%d månader',
                    'y': 'ett år',
                    'yy': '%d år'
                };
                var1.relativeTime = var0;
                var0 = /\d{1,2}(e|a)/;
                var1.dayOfMonthOrdinalParse = var0;
                var0 = function arg0() {
                    _fun24614: for (var _fun24614_ip = 0;;) switch (_fun24614_ip) {
                        case 0:
                            var1 = arg0;
                            var5 = 10;
                            var4 = var1 % var5;
                            var0 = 100;
                            var0 = var1 % var0;
                            var2 = 'e';
                            var3 = 1;
                            var0 = var0 / var5;
                            var0 = ~var0;
                            var5 = ~var0;
                            var0 = var2;
                            if (!(var3 !== var5)) {
                                _fun24614_ip = 59;
                                continue _fun24614
                            }
                        case 41:
                            if (!(var3 !== var4)) {
                                _fun24614_ip = 52;
                                continue _fun24614
                            }
                        case 45:
                            var3 = 2;
                            if (!(var3 === var4)) {
                                _fun24614_ip = 56;
                                continue _fun24614
                            }
                        case 52:
                            var2 = 'a';
                        case 56:
                            var0 = var2;
                        case 59:
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
                var0 = 'sv';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24612_ip = 44;
                continue _fun24612
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24612_ip = 44;
                continue _fun24612
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24612_ip = 121;
                continue _fun24612
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24612_ip = 78;
                continue _fun24612
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24612_ip = 95;
                continue _fun24612
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24612_ip = 140;
            continue _fun24612;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24612_ip = 140;
            continue _fun24612;
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