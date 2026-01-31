// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24398: for (var _fun24398_ip = 0;;) switch (_fun24398_ip) {
        case 0:
            var3 = require;
            var2 = function arg0() {
                var3 = arg0;
                var2 = 'jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.';
                var1 = var2.split;
                var6 = '_';
                var1 = var1.bind(var2)(var6);
                var _closure2_slot0 = var1;
                var2 = 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec';
                var1 = var2.split;
                var1 = var1.bind(var2)(var6);
                var _closure2_slot1 = var1;
                var4 = new Array(12);
                var1 = /^jan/i;
                var4[0] = var1;
                var1 = /^feb/i;
                var4[1] = var1;
                var1 = /^maart|mrt.?$/i;
                var4[2] = var1;
                var1 = /^apr/i;
                var4[3] = var1;
                var1 = /^mei$/i;
                var4[4] = var1;
                var1 = /^jun[i.]?$/i;
                var4[5] = var1;
                var1 = /^jul[i.]?$/i;
                var4[6] = var1;
                var1 = /^aug/i;
                var4[7] = var1;
                var1 = /^sep/i;
                var4[8] = var1;
                var1 = /^okt/i;
                var4[9] = var1;
                var1 = /^nov/i;
                var4[10] = var1;
                var1 = /^dec/i;
                var4[11] = var1;
                var5 = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                var2 = var3.defineLocale;
                var1 = {};
                var8 = 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december';
                var7 = var8.split;
                var7 = var7.bind(var8)(var6);
                var1.months = var7;
                var7 = function arg0, arg1() {
                    _fun24400: for (var _fun24400_ip = 0;;) switch (_fun24400_ip) {
                        case 0:
                            var4 = arg0;
                            if (var4) {
                                _fun24400_ip = 15;
                                continue _fun24400
                            }
                        case 9:
                            var0 = _closure2_slot0;
                            _fun24400_ip = 86;
                            continue _fun24400;
                        case 15:
                            var5 = /-MMM-/;
                            var3 = var5.test;
                            var1 = arg1;
                            var1 = var3.bind(var5)(var1);
                            if (var1) {
                                _fun24400_ip = 65;
                                continue _fun24400
                            }
                        case 45:
                            var3 = _closure2_slot0;
                            var1 = var4.month;
                            var1 = var1.bind(var4)();
                            var1 = var3[var1];
                            _fun24400_ip = 83;
                            continue _fun24400;
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
                var5 = /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i;
                var1.monthsStrictRegex = var5;
                var5 = /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
                var1.monthsShortStrictRegex = var5;
                var1.monthsParse = var4;
                var1.longMonthsParse = var4;
                var1.shortMonthsParse = var4;
                var5 = 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdays = var4;
                var5 = 'zo._ma._di._wo._do._vr._za.';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysShort = var4;
                var5 = 'zo_ma_di_wo_do_vr_za';
                var4 = var5.split;
                var4 = var4.bind(var5)(var6);
                var1.weekdaysMin = var4;
                var4 = true;
                var1.weekdaysParseExact = var4;
                var4 = {
                    'LT': 'HH:mm',
                    'LTS': 'HH:mm:ss',
                    'L': 'DD-MM-YYYY',
                    'LL': 'D MMMM YYYY',
                    'LLL': 'D MMMM YYYY HH:mm',
                    'LLLL': 'dddd D MMMM YYYY HH:mm'
                };
                var1.longDateFormat = var4;
                var4 = {
                    'sameDay': '[vandaag om] LT',
                    'nextDay': '[morgen om] LT',
                    'nextWeek': 'dddd [om] LT',
                    'lastDay': '[gisteren om] LT',
                    'lastWeek': '[afgelopen] dddd [om] LT',
                    'sameElse': 'L'
                };
                var1.calendar = var4;
                var4 = {
                    'future': 'over %s',
                    'past': '%s geleden',
                    's': 'een paar seconden',
                    'ss': '%d seconden',
                    'm': 'één minuut',
                    'mm': '%d minuten',
                    'h': 'één uur',
                    'hh': '%d uur',
                    'd': 'één dag',
                    'dd': '%d dagen',
                    'M': 'één maand',
                    'MM': '%d maanden',
                    'y': 'één jaar',
                    'yy': '%d jaar'
                };
                var1.relativeTime = var4;
                var4 = /\d{1,2}(ste|de)/;
                var1.dayOfMonthOrdinalParse = var4;
                var0 = function arg0() {
                    _fun24401: for (var _fun24401_ip = 0;;) switch (_fun24401_ip) {
                        case 0:
                            var1 = arg0;
                            var0 = 1;
                            if (!(var0 !== var1)) {
                                _fun24401_ip = 31;
                                continue _fun24401
                            }
                        case 10:
                            var0 = 8;
                            if (!(var0 !== var1)) {
                                _fun24401_ip = 31;
                                continue _fun24401
                            }
                        case 17:
                            var0 = 20;
                            var2 = var1 >= var0;
                            var0 = 'de';
                            if (!var2) {
                                _fun24401_ip = 37;
                                continue _fun24401
                            }
                        case 31:
                            var0 = 'ste';
                        case 37:
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
                var0 = 'nl';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24398_ip = 44;
                continue _fun24398
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24398_ip = 44;
                continue _fun24398
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24398_ip = 121;
                continue _fun24398
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24398_ip = 78;
                continue _fun24398
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24398_ip = 95;
                continue _fun24398
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24398_ip = 140;
            continue _fun24398;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24398_ip = 140;
            continue _fun24398;
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