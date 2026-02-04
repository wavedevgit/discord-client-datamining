// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun24594: for (var _fun24594_ip = 0;;) switch (_fun24594_ip) {
        case 0:
            var3 = require;
            var2 = function arg0() {
                var3 = arg0;
                var2 = var3.defineLocale;
                var1 = {};
                var4 = 'janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro';
                var0 = var4.split;
                var5 = '_';
                var0 = var0.bind(var4)(var5);
                var1.months = var0;
                var4 = 'jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.monthsShort = var0;
                var4 = 'Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.weekdays = var0;
                var4 = 'Dom_Seg_Ter_Qua_Qui_Sex_Sáb';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.weekdaysShort = var0;
                var4 = 'Do_2ª_3ª_4ª_5ª_6ª_Sá';
                var0 = var4.split;
                var0 = var0.bind(var4)(var5);
                var1.weekdaysMin = var0;
                var0 = true;
                var1.weekdaysParseExact = var0;
                var0 = {
                    'LT': 'HH:mm',
                    'LTS': 'HH:mm:ss',
                    'L': 'DD/MM/YYYY',
                    'LL': 'D [de] MMMM [de] YYYY',
                    'LLL': 'D [de] MMMM [de] YYYY [às] HH:mm',
                    'LLLL': 'dddd, D [de] MMMM [de] YYYY [às] HH:mm'
                };
                var1.longDateFormat = var0;
                var0 = {
                    'sameDay': '[Hoje às] LT',
                    'nextDay': '[Amanhã às] LT',
                    'nextWeek': 'dddd [às] LT',
                    'lastDay': '[Ontem às] LT',
                    'lastWeek': null,
                    'sameElse': 'L'
                };
                var4 = function() {
                    _fun24596: for (var _fun24596_ip = 0;;) switch (_fun24596_ip) {
                        case 0:
                            var1 = this;
                            var0 = var1.day;
                            var2 = var0.bind(var1)();
                            var0 = 0;
                            if (!(var0 !== var2)) {
                                _fun24596_ip = 42;
                                continue _fun24596
                            }
                        case 19:
                            var0 = var1.day;
                            var2 = var0.bind(var1)();
                            var0 = '[Última] dddd [às] LT';
                            var1 = 6;
                            if (!(var1 === var2)) {
                                _fun24596_ip = 48;
                                continue _fun24596
                            }
                        case 42:
                            var0 = '[Último] dddd [às] LT';
                        case 48:
                            return var0;
                    }
                };
                var0.lastWeek = var4;
                var1.calendar = var0;
                var0 = {
                    'future': 'em %s',
                    'past': 'há %s',
                    's': 'poucos segundos',
                    'ss': '%d segundos',
                    'm': 'um minuto',
                    'mm': '%d minutos',
                    'h': 'uma hora',
                    'hh': '%d horas',
                    'd': 'um dia',
                    'dd': '%d dias',
                    'M': 'um mês',
                    'MM': '%d meses',
                    'y': 'um ano',
                    'yy': '%d anos'
                };
                var1.relativeTime = var0;
                var0 = /\d{1,2}º/;
                var1.dayOfMonthOrdinalParse = var0;
                var0 = '%dº';
                var1.ordinal = var0;
                var0 = 'pt-br';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
            };
            var1 = 'object';
            var0 = arg5;
            var0 = typeof var0;
            if (!(var1 === var0)) {
                _fun24594_ip = 44;
                continue _fun24594
            }
        case 24:
            var1 = undefined;
            var0 = arg4;
            if (!(var1 !== var0)) {
                _fun24594_ip = 44;
                continue _fun24594
            }
        case 33:
            var4 = 'function';
            var0 = typeof var3;
            if (!(var4 !== var0)) {
                _fun24594_ip = 121;
                continue _fun24594
            }
        case 44:
            var0 = global;
            var4 = var0.define;
            var5 = 'function';
            var4 = typeof var4;
            if (!(var5 === var4)) {
                _fun24594_ip = 78;
                continue _fun24594
            }
        case 63:
            var4 = var0.define;
            var4 = var4.amd;
            if (var4) {
                _fun24594_ip = 95;
                continue _fun24594
            }
        case 78:
            var4 = this;
            var5 = var4.moment;
            var4 = undefined;
            var4 = var2.bind(var4)(var5);
            _fun24594_ip = 140;
            continue _fun24594;
        case 95:
            var5 = var0.define;
            var4 = undefined;
            var0 = ['../moment'];
            var0 = var5.bind(var4)(var0, var2);
            _fun24594_ip = 140;
            continue _fun24594;
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