// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24412: for (var _fun24412_ip = 0;;) switch (_fun24412_ip) {
        case 0:
            var3 = require;
            var2 = function(arg0) { // Original name: n, environment: var0
                var3 = arg0;
                var4 = function(arg0, arg1, arg2) { // Original name: relativeTimeWithPlural, environment: var0
                    _fun24414: for (var _fun24414_ip = 0;;) switch (_fun24414_ip) {
                        case 0:
                            var1 = arg0;
                            var3 = 100;
                            var2 = var1 % var3;
                            var0 = 20;
                            var2 = var2 >= var0;
                            if (var2) {
                                _fun24414_ip = 40;
                                continue _fun24414
                            }
                        case 20:
                            var0 = var1 >= var3;
                            if (!var0) {
                                _fun24414_ip = 37;
                                continue _fun24414
                            }
                        case 27:
                            var4 = var1 % var3;
                            var3 = 0;
                            var0 = var4 === var3;
                        case 37:
                            var2 = var0;
                        case 40:
                            var0 = ' ';
                            if (!var2) {
                                _fun24414_ip = 55;
                                continue _fun24414
                            }
                        case 49:
                            var0 = ' de ';
                        case 55:
                            var1 = var1 + var0;
                            var2 = {
                                'ss': 'secunde',
                                'mm': 'minute',
                                'hh': 'ore',
                                'dd': 'zile',
                                'MM': 'luni',
                                'yy': 'ani'
                            };
                            var0 = arg2;
                            var0 = var2[var0];
                            var0 = var1 + var0;
                            return var0;
                    }
                };
                var2 = var3.defineLocale;
                var1 = {};
                var5 = 'ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie';
                var0 = var5.split;
                var6 = '_';
                var0 = var0.bind(var5)(var6);
                var1.months = var0;
                var5 = 'ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.';
                var0 = var5.split;
                var0 = var0.bind(var5)(var6);
                var1.monthsShort = var0;
                var0 = true;
                var1.monthsParseExact = var0;
                var5 = 'duminică_luni_marți_miercuri_joi_vineri_sâmbătă';
                var0 = var5.split;
                var0 = var0.bind(var5)(var6);
                var1.weekdays = var0;
                var5 = 'Dum_Lun_Mar_Mie_Joi_Vin_Sâm';
                var0 = var5.split;
                var0 = var0.bind(var5)(var6);
                var1.weekdaysShort = var0;
                var5 = 'Du_Lu_Ma_Mi_Jo_Vi_Sâ';
                var0 = var5.split;
                var0 = var0.bind(var5)(var6);
                var1.weekdaysMin = var0;
                var0 = {
                    'LT': 'H:mm',
                    'LTS': 'H:mm:ss',
                    'L': 'DD.MM.YYYY',
                    'LL': 'D MMMM YYYY',
                    'LLL': 'D MMMM YYYY H:mm',
                    'LLLL': 'dddd, D MMMM YYYY H:mm'
                };
                var1.longDateFormat = var0;
                var0 = {
                    'sameDay': '[azi la] LT',
                    'nextDay': '[mâine la] LT',
                    'nextWeek': 'dddd [la] LT',
                    'lastDay': '[ieri la] LT',
                    'lastWeek': '[fosta] dddd [la] LT',
                    'sameElse': 'L'
                };
                var1.calendar = var0;
                var0 = {
                    'future': 'peste %s',
                    'past': '%s în urmă',
                    's': 'câteva secunde',
                    'ss': null,
                    'm': 'un minut',
                    'mm': null,
                    'h': 'o oră',
                    'hh': null,
                    'd': 'o zi'
                };
                var0.ss = var4;
                var0.mm = var4;
                var0.hh = var4;
                var0.dd = var4;
                var5 = 'o lună';
                var0.M = var5;
                var0.MM = var4;
                var5 = 'un an';
                var0.y = var5;
                var0.yy = var4;
                var1.relativeTime = var0;
                var0 = {
                    'dow': 1,
                    'doy': 7
                };
                var1.week = var0;
                var0 = 'ro';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24412_ip = 44;
                continue _fun24412
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24412_ip = 44;
                continue _fun24412
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24412_ip = 121;
                continue _fun24412
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24412_ip = 78;
                continue _fun24412
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24412_ip = 95;
                continue _fun24412
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24412_ip = 140;
            continue _fun24412;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24412_ip = 140;
            continue _fun24412;
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