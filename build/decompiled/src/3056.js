// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24555: for (var _fun24555_ip = 0;;) switch (_fun24555_ip) {
        case 0:
            var3 = require;
            var2 = function arg0() {
                var3 = arg0;
                var2 = var3.defineLocale;
                var1 = {};
                var5 = 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre';
                var0 = var5.split;
                var6 = '_';
                var0 = var0.bind(var5)(var6);
                var1.months = var0;
                var5 = 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic';
                var0 = var5.split;
                var0 = var0.bind(var5)(var6);
                var1.monthsShort = var0;
                var5 = 'domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato';
                var0 = var5.split;
                var0 = var0.bind(var5)(var6);
                var1.weekdays = var0;
                var5 = 'dom_lun_mar_mer_gio_ven_sab';
                var0 = var5.split;
                var0 = var0.bind(var5)(var6);
                var1.weekdaysShort = var0;
                var5 = 'do_lu_ma_me_gi_ve_sa';
                var0 = var5.split;
                var0 = var0.bind(var5)(var6);
                var1.weekdaysMin = var0;
                var0 = {
                    'LT': 'HH:mm',
                    'LTS': 'HH:mm:ss',
                    'L': 'DD/MM/YYYY',
                    'LL': 'D MMMM YYYY',
                    'LLL': 'D MMMM YYYY HH:mm',
                    'LLLL': 'dddd D MMMM YYYY HH:mm'
                };
                var1.longDateFormat = var0;
                var0 = {
                    'sameDay': '[Oggi alle] LT',
                    'nextDay': '[Domani alle] LT',
                    'nextWeek': 'dddd [alle] LT',
                    'lastDay': '[Ieri alle] LT',
                    'lastWeek': null,
                    'sameElse': 'L'
                };
                var5 = function() {
                    _fun24557: for (var _fun24557_ip = 0;;) switch (_fun24557_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.day;
                            var2 = var0.bind(var1)();
                            var0 = '[lo scorso] dddd [alle] LT';
                            var1 = 0;
                            if (!(var1 === var2)) {
                                _fun24557_ip = 31;
                                continue _fun24557
                            }
                        case 25:
                            var0 = '[la scorsa] dddd [alle] LT';
                        case 31:
                            return var0;
                    }
                };
                var0.lastWeek = var5;
                var1.calendar = var0;
                var0 = {
                    'future': null,
                    'past': '%s fa',
                    's': 'alcuni secondi',
                    'ss': '%d secondi',
                    'm': 'un minuto',
                    'mm': '%d minuti',
                    'h': "un'ora",
                    'hh': '%d ore',
                    'd': 'un giorno',
                    'dd': '%d giorni',
                    'M': 'un mese',
                    'MM': '%d mesi',
                    'y': 'un anno',
                    'yy': '%d anni'
                };
                var4 = function arg0() {
                    _fun24558: for (var _fun24558_ip = 0;;) switch (_fun24558_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = /^[0-9].+$/;
                            var0 = var2.test;
                            var0 = var0.bind(var2)(var1);
                            var2 = 'in';
                            if (!var0) {
                                _fun24558_ip = 40;
                                continue _fun24558
                            }
                        case 34:
                            var2 = 'tra';
                        case 40:
                            var0 = ' ';
                            var0 = var2 + var0;
                            var0 = var0 + var1;
                            return var0;
                    }
                };
                var0.future = var4;
                var1.relativeTime = var0;
                var0 = /\d{1,2}º/;
                var1.dayOfMonthOrdinalParse = var0;
                var0 = '%dº';
                var1.ordinal = var0;
                var0 = {
                    'dow': 1,
                    'doy': 4
                };
                var1.week = var0;
                var0 = 'it';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24555_ip = 44;
                continue _fun24555
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24555_ip = 44;
                continue _fun24555
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24555_ip = 121;
                continue _fun24555
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24555_ip = 78;
                continue _fun24555
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24555_ip = 95;
                continue _fun24555
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24555_ip = 140;
            continue _fun24555;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24555_ip = 140;
            continue _fun24555;
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [3045]);