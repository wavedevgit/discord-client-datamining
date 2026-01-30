// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24330: for (var _fun24330_ip = 0;;) switch (_fun24330_ip) {
        case 0:
            var3 = require;
            var2 = function(arg0) { // Original name: n, environment: var0
                var3 = arg0;
                var2 = var3.defineLocale;
                var1 = {};
                var4 = 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december';
                var0 = var4.split;
                var5 = '_';
                var0 = var0.bind(var4)(var5);
                var1.months = var0;
                var4 = 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.monthsShort = var0;
                var4 = 'søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.weekdays = var0;
                var4 = 'søn_man_tir_ons_tor_fre_lør';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.weekdaysShort = var0;
                var4 = 'sø_ma_ti_on_to_fr_lø';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.weekdaysMin = var0;
                var0 = {
                    'LT': 'HH:mm',
                    'LTS': 'HH:mm:ss',
                    'L': 'DD.MM.YYYY',
                    'LL': 'D. MMMM YYYY',
                    'LLL': 'D. MMMM YYYY HH:mm',
                    'LLLL': 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
                };
                var1.longDateFormat = var0;
                var0 = {
                    'sameDay': '[i dag kl.] LT',
                    'nextDay': '[i morgen kl.] LT',
                    'nextWeek': 'på dddd [kl.] LT',
                    'lastDay': '[i går kl.] LT',
                    'lastWeek': '[i] dddd[s kl.] LT',
                    'sameElse': 'L'
                };
                var1.calendar = var0;
                var0 = {
                    'future': 'om %s',
                    'past': '%s siden',
                    's': 'få sekunder',
                    'ss': '%d sekunder',
                    'm': 'et minut',
                    'mm': '%d minutter',
                    'h': 'en time',
                    'hh': '%d timer',
                    'd': 'en dag',
                    'dd': '%d dage',
                    'M': 'en måned',
                    'MM': '%d måneder',
                    'y': 'et år',
                    'yy': '%d år'
                };
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
                var0 = 'da';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24330_ip = 44;
                continue _fun24330
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24330_ip = 44;
                continue _fun24330
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24330_ip = 121;
                continue _fun24330
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24330_ip = 78;
                continue _fun24330
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24330_ip = 95;
                continue _fun24330
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24330_ip = 140;
            continue _fun24330;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24330_ip = 140;
            continue _fun24330;
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