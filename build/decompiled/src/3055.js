// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24545: for (var _fun24545_ip = 0;;) switch (_fun24545_ip) {
        case 0:
            var3 = require;
            var2 = function arg0() {
                var3 = arg0;
                var2 = var3.defineLocale;
                var1 = {};
                var4 = 'janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre';
                var0 = var4.split;
                var6 = '_';
                var0 = var0.bind(var4)(var6);
                var1.months = var0;
                var4 = 'janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.';
                var0 = var4.split;
                var0 = var0.bind(var4)(var6);
                var1.monthsShort = var0;
                var0 = true;
                var1.monthsParseExact = var0;
                var5 = 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdays = var4;
                var5 = 'dim._lun._mar._mer._jeu._ven._sam.';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysShort = var4;
                var5 = 'di_lu_ma_me_je_ve_sa';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysMin = var4;
                var1.weekdaysParseExact = var0;
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
                    'sameDay': '[Aujourd’hui à] LT',
                    'nextDay': '[Demain à] LT',
                    'nextWeek': 'dddd [à] LT',
                    'lastDay': '[Hier à] LT',
                    'lastWeek': 'dddd [dernier à] LT',
                    'sameElse': 'L'
                };
                var1.calendar = var0;
                var0 = {
                    'future': 'dans %s',
                    'past': 'il y a %s',
                    's': 'quelques secondes',
                    'ss': '%d secondes',
                    'm': 'une minute',
                    'mm': '%d minutes',
                    'h': 'une heure',
                    'hh': '%d heures',
                    'd': 'un jour',
                    'dd': '%d jours',
                    'M': 'un mois',
                    'MM': '%d mois',
                    'y': 'un an',
                    'yy': '%d ans'
                };
                var1.relativeTime = var0;
                var0 = /\d{1,2}(er|)/;
                var1.dayOfMonthOrdinalParse = var0;
                var0 = function arg0, arg1() {
                    _fun24547: for (var _fun24547_ip = 0;;) switch (_fun24547_ip) {
                        case 0:
                            var1 = arg0;
                            var2 = arg1;
                            var0 = 'D';
                            if (!(var0 !== var2)) {
                                _fun24547_ip = 108;
                                continue _fun24547
                            }
                        case 14:
                            var0 = 'M';
                            if (!(var0 !== var2)) {
                                _fun24547_ip = 85;
                                continue _fun24547
                            }
                        case 22:
                            var0 = 'Q';
                            if (!(var0 !== var2)) {
                                _fun24547_ip = 85;
                                continue _fun24547
                            }
                        case 30:
                            var0 = 'DDD';
                            if (!(var0 !== var2)) {
                                _fun24547_ip = 85;
                                continue _fun24547
                            }
                        case 40:
                            var0 = 'd';
                            if (!(var0 !== var2)) {
                                _fun24547_ip = 85;
                                continue _fun24547
                            }
                        case 48:
                            var0 = 'w';
                            if (!(var0 !== var2)) {
                                _fun24547_ip = 64;
                                continue _fun24547
                            }
                        case 56:
                            var0 = 'W';
                            if (!(var0 === var2)) {
                                _fun24547_ip = 85;
                                continue _fun24547
                            }
                        case 64:
                            var0 = 'e';
                            var2 = 1;
                            if (!(var2 === var1)) {
                                _fun24547_ip = 79;
                                continue _fun24547
                            }
                        case 75:
                            var0 = 're';
                        case 79:
                            var0 = var1 + var0;
                            return var0;
                        case 85:
                            var0 = 'e';
                            var2 = 1;
                            if (!(var2 === var1)) {
                                _fun24547_ip = 102;
                                continue _fun24547
                            }
                        case 96:
                            var0 = 'er';
                        case 102:
                            var0 = var1 + var0;
                            return var0;
                        case 108:
                            var0 = '';
                            var2 = 1;
                            if (!(var2 === var1)) {
                                _fun24547_ip = 125;
                                continue _fun24547
                            }
                        case 119:
                            var0 = 'er';
                        case 125:
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
                var0 = 'fr';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24545_ip = 44;
                continue _fun24545
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24545_ip = 44;
                continue _fun24545
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24545_ip = 121;
                continue _fun24545
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24545_ip = 78;
                continue _fun24545
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24545_ip = 95;
                continue _fun24545
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24545_ip = 140;
            continue _fun24545;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24545_ip = 140;
            continue _fun24545;
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