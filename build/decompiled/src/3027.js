// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24430: for (var _fun24430_ip = 0;;) switch (_fun24430_ip) {
        case 0:
            var3 = require;
            var2 = function(arg0) { // Original name: n, environment: var0
                var3 = arg0;
                var1 = {
                    1: "'inci",
                    5: "'inci",
                    8: "'inci",
                    70: "'inci",
                    80: "'inci",
                    2: "'nci",
                    7: "'nci",
                    20: "'nci",
                    50: "'nci",
                    3: "'üncü",
                    4: "'üncü",
                    100: "'üncü",
                    6: "'ncı",
                    9: "'uncu",
                    10: "'uncu",
                    30: "'uncu",
                    60: "'ıncı",
                    90: "'ıncı"
                };
                var _closure2_slot0 = var1;
                var2 = var3.defineLocale;
                var1 = {};
                var5 = 'Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık';
                var4 = var5.split;
                var6 = '_';
                var4 = var4.bind(var5)(var6);
                var1.months = var4;
                var5 = 'Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.monthsShort = var4;
                var5 = 'Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdays = var4;
                var5 = 'Paz_Pts_Sal_Çar_Per_Cum_Cts';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysShort = var4;
                var5 = 'Pz_Pt_Sa_Ça_Pe_Cu_Ct';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysMin = var4;
                var4 = {
                    'LT': 'HH:mm',
                    'LTS': 'HH:mm:ss',
                    'L': 'DD.MM.YYYY',
                    'LL': 'D MMMM YYYY',
                    'LLL': 'D MMMM YYYY HH:mm',
                    'LLLL': 'dddd, D MMMM YYYY HH:mm'
                };
                var1.longDateFormat = var4;
                var4 = {
                    'sameDay': '[bugün saat] LT',
                    'nextDay': '[yarın saat] LT',
                    'nextWeek': '[gelecek] dddd [saat] LT',
                    'lastDay': '[dün] LT',
                    'lastWeek': '[geçen] dddd [saat] LT',
                    'sameElse': 'L'
                };
                var1.calendar = var4;
                var4 = {
                    'future': '%s sonra',
                    'past': '%s önce',
                    's': 'birkaç saniye',
                    'ss': '%d saniye',
                    'm': 'bir dakika',
                    'mm': '%d dakika',
                    'h': 'bir saat',
                    'hh': '%d saat',
                    'd': 'bir gün',
                    'dd': '%d gün',
                    'M': 'bir ay',
                    'MM': '%d ay',
                    'y': 'bir yıl',
                    'yy': '%d yıl'
                };
                var1.relativeTime = var4;
                var0 = function(arg0, arg1) { // Original name: ordinal, environment: var0
                    _fun24432: for (var _fun24432_ip = 0;;) switch (_fun24432_ip) {
                        case 0:
                            var0 = arg0;
                            var2 = arg1;
                            var1 = 'd';
                            if (!(var1 !== var2)) {
                                _fun24432_ip = 132;
                                continue _fun24432
                            }
                        case 14:
                            var1 = 'D';
                            if (!(var1 !== var2)) {
                                _fun24432_ip = 132;
                                continue _fun24432
                            }
                        case 22:
                            var1 = 'Do';
                            if (!(var1 !== var2)) {
                                _fun24432_ip = 132;
                                continue _fun24432
                            }
                        case 32:
                            var1 = 'DD';
                            if (!(var1 !== var2)) {
                                _fun24432_ip = 132;
                                continue _fun24432
                            }
                        case 42:
                            var1 = 0;
                            if (!(var1 !== var0)) {
                                _fun24432_ip = 120;
                                continue _fun24432
                            }
                        case 48:
                            var1 = 10;
                            var5 = var0 % var1;
                            var1 = _closure2_slot0;
                            var1 = var1[var5];
                            if (var1) {
                                _fun24432_ip = 88;
                                continue _fun24432
                            }
                        case 69:
                            var4 = _closure2_slot0;
                            var3 = 100;
                            var3 = var0 % var3;
                            var3 = var3 - var5;
                            var1 = var4[var3];
                        case 88:
                            if (var1) {
                                _fun24432_ip = 114;
                                continue _fun24432
                            }
                        case 91:
                            var3 = _closure2_slot0;
                            var4 = 100;
                            var5 = var0 >= var4;
                            var2 = null;
                            if (!var5) {
                                _fun24432_ip = 110;
                                continue _fun24432
                            }
                        case 107:
                            var2 = var4;
                        case 110:
                            var1 = var3[var2];
                        case 114:
                            var1 = var0 + var1;
                            return var1;
                        case 120:
                            var1 = "'ıncı";
                            var1 = var0 + var1;
                            return var1;
                        case 132:
                            return var0;
                    }
                };
                var1.ordinal = var0;
                var0 = {
                    'dow': 1,
                    'doy': 7
                };
                var1.week = var0;
                var0 = 'tr';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24430_ip = 44;
                continue _fun24430
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24430_ip = 44;
                continue _fun24430
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24430_ip = 121;
                continue _fun24430
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24430_ip = 78;
                continue _fun24430
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24430_ip = 95;
                continue _fun24430
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24430_ip = 140;
            continue _fun24430;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24430_ip = 140;
            continue _fun24430;
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