// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24347: for (var _fun24347_ip = 0;;) switch (_fun24347_ip) {
        case 0:
            var3 = require;
            var2 = function(arg0) { // Original name: n, environment: var0
                var3 = arg0;
                var1 = 'ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.';
                var0 = var1.split;
                var6 = '_';
                var0 = var0.bind(var1)(var6);
                var _closure2_slot0 = var0;
                var1 = 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic';
                var0 = var1.split;
                var0 = var0.bind(var1)(var6);
                var _closure2_slot1 = var0;
                var0 = new Array(12);
                var1 = /^ene/i;
                var0[0] = var1;
                var1 = /^feb/i;
                var0[1] = var1;
                var1 = /^mar/i;
                var0[2] = var1;
                var1 = /^abr/i;
                var0[3] = var1;
                var1 = /^may/i;
                var0[4] = var1;
                var1 = /^jun/i;
                var0[5] = var1;
                var1 = /^jul/i;
                var0[6] = var1;
                var1 = /^ago/i;
                var0[7] = var1;
                var1 = /^sep/i;
                var0[8] = var1;
                var1 = /^oct/i;
                var0[9] = var1;
                var1 = /^nov/i;
                var0[10] = var1;
                var1 = /^dic/i;
                var0[11] = var1;
                var5 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                var2 = var3.defineLocale;
                var1 = {};
                var8 = 'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre';
                var7 = var8.split;
                var7 = var7.bind(var8)(var6);
                var1.months = var7;
                var7 = function(arg0, arg1) { // Original name: monthsShort, environment: var4
                    _fun24349: for (var _fun24349_ip = 0;;) switch (_fun24349_ip) {
                        case 0:
                            var4 = arg0;
                            if (var4) {
                                _fun24349_ip = 15;
                                continue _fun24349
                            }
                        case 9:
                            var0 = _closure2_slot0;
                            _fun24349_ip = 86;
                            continue _fun24349;
                        case 15:
                            var5 = /-MMM-/;
                            var3 = var5.test;
                            var1 = arg1;
                            var1 = var3.bind(var5)(var1);
                            if (var1) {
                                _fun24349_ip = 65;
                                continue _fun24349
                            }
                        case 45:
                            var3 = _closure2_slot0;
                            var1 = var4.month;
                            var1 = var1.bind(var4)();
                            var1 = var3[var1];
                            _fun24349_ip = 83;
                            continue _fun24349;
                        case 65:
                            var3 = _closure2_slot1;
                            var2 = var4.month;
                            var2 = var2.bind(var4)();
                            var1 = var3[var2];
                        case 83:
                            var0 = var1;
                        case 86:
                            return var0;
                    }
                };
                var1.monthsShort = var7;
                var1.monthsRegex = var5;
                var1.monthsShortRegex = var5;
                var5 = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i;
                var1.monthsStrictRegex = var5;
                var5 = /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
                var1.monthsShortStrictRegex = var5;
                var1.monthsParse = var0;
                var1.longMonthsParse = var0;
                var1.shortMonthsParse = var0;
                var5 = 'domingo_lunes_martes_miércoles_jueves_viernes_sábado';
                var0 = var5.split;
                var0 = var0.bind(var5)(var6);
                var1.weekdays = var0;
                var5 = 'dom._lun._mar._mié._jue._vie._sáb.';
                var0 = var5.split;
                var0 = var0.bind(var5)(var6);
                var1.weekdaysShort = var0;
                var5 = 'do_lu_ma_mi_ju_vi_sá';
                var0 = var5.split;
                var0 = var0.bind(var5)(var6);
                var1.weekdaysMin = var0;
                var0 = true;
                var1.weekdaysParseExact = var0;
                var0 = {
                    'LT': 'H:mm',
                    'LTS': 'H:mm:ss',
                    'L': 'DD/MM/YYYY',
                    'LL': 'D [de] MMMM [de] YYYY',
                    'LLL': 'D [de] MMMM [de] YYYY H:mm',
                    'LLLL': 'dddd, D [de] MMMM [de] YYYY H:mm'
                };
                var1.longDateFormat = var0;
                var0 = {};
                var5 = function() { // Original name: sameDay, environment: var4
                    _fun24350: for (var _fun24350_ip = 0;;) switch (_fun24350_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.hours;
                            var2 = var0.bind(var1)();
                            var1 = '';
                            var0 = 1;
                            if (!(var0 !== var2)) {
                                _fun24350_ip = 28;
                                continue _fun24350
                            }
                        case 24:
                            var1 = 's';
                        case 28:
                            var0 = '[hoy a la';
                            var1 = var0 + var1;
                            var0 = '] LT';
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var0.sameDay = var5;
                var5 = function() { // Original name: nextDay, environment: var4
                    _fun24351: for (var _fun24351_ip = 0;;) switch (_fun24351_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.hours;
                            var2 = var0.bind(var1)();
                            var1 = '';
                            var0 = 1;
                            if (!(var0 !== var2)) {
                                _fun24351_ip = 28;
                                continue _fun24351
                            }
                        case 24:
                            var1 = 's';
                        case 28:
                            var0 = '[mañana a la';
                            var1 = var0 + var1;
                            var0 = '] LT';
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var0.nextDay = var5;
                var5 = function() { // Original name: nextWeek, environment: var4
                    _fun24352: for (var _fun24352_ip = 0;;) switch (_fun24352_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.hours;
                            var2 = var0.bind(var1)();
                            var1 = '';
                            var0 = 1;
                            if (!(var0 !== var2)) {
                                _fun24352_ip = 28;
                                continue _fun24352
                            }
                        case 24:
                            var1 = 's';
                        case 28:
                            var0 = 'dddd [a la';
                            var1 = var0 + var1;
                            var0 = '] LT';
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var0.nextWeek = var5;
                var5 = function() { // Original name: lastDay, environment: var4
                    _fun24353: for (var _fun24353_ip = 0;;) switch (_fun24353_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.hours;
                            var2 = var0.bind(var1)();
                            var1 = '';
                            var0 = 1;
                            if (!(var0 !== var2)) {
                                _fun24353_ip = 28;
                                continue _fun24353
                            }
                        case 24:
                            var1 = 's';
                        case 28:
                            var0 = '[ayer a la';
                            var1 = var0 + var1;
                            var0 = '] LT';
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var0.lastDay = var5;
                var4 = function() { // Original name: lastWeek, environment: var4
                    _fun24354: for (var _fun24354_ip = 0;;) switch (_fun24354_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.hours;
                            var2 = var0.bind(var1)();
                            var1 = '';
                            var0 = 1;
                            if (!(var0 !== var2)) {
                                _fun24354_ip = 28;
                                continue _fun24354
                            }
                        case 24:
                            var1 = 's';
                        case 28:
                            var0 = '[el] dddd [pasado a la';
                            var1 = var0 + var1;
                            var0 = '] LT';
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var0.lastWeek = var4;
                var4 = 'L';
                var0.sameElse = var4;
                var1.calendar = var0;
                var0 = {
                    'future': 'en %s',
                    'past': 'hace %s',
                    's': 'unos segundos',
                    'ss': '%d segundos',
                    'm': 'un minuto',
                    'mm': '%d minutos',
                    'h': 'una hora',
                    'hh': '%d horas',
                    'd': 'un día',
                    'dd': '%d días',
                    'M': 'un mes',
                    'MM': '%d meses',
                    'y': 'un año',
                    'yy': '%d años'
                };
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
                var0 = 'es';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24347_ip = 44;
                continue _fun24347
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24347_ip = 44;
                continue _fun24347
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24347_ip = 121;
                continue _fun24347
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24347_ip = 78;
                continue _fun24347
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24347_ip = 95;
                continue _fun24347
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24347_ip = 140;
            continue _fun24347;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24347_ip = 140;
            continue _fun24347;
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