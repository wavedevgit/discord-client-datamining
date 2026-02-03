// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22156: for (var _fun22156_ip = 0;;) switch (_fun22156_ip) {
        case 0:
            var1 = exports;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.defineProperty;
            var2 = {};
            var0 = true;
            var2.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var1, var0, var2);
            var0 = undefined;
            var1.default = var0;
            var3 = dependencyMap;
            var2 = 0;
            var3 = var3[var2];
            var2 = require;
            var4 = var2.bind(var0)(var3);
            if (!var4) {
                _fun22156_ip = 77;
                continue _fun22156
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun22156_ip = 86;
                continue _fun22156
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function arg0, arg1() {
                _fun22157: for (var _fun22157_ip = 0;;) switch (_fun22157_ip) {
                    case 0:
                        var0 = arg1;
                        var1 = global;
                        var3 = var1.Number;
                        var1 = undefined;
                        var2 = arg0;
                        var2 = var3.bind(var1)(var2);
                        var3 = null;
                        var3 = var3 == var0;
                        if (var3) {
                            _fun22157_ip = 36;
                            continue _fun22157
                        }
                    case 30:
                        var1 = var0.unit;
                    case 36:
                        var0 = 'week';
                        if (!(var0 !== var1)) {
                            _fun22157_ip = 56;
                            continue _fun22157
                        }
                    case 44:
                        var0 = 'º';
                        var0 = var2 + var0;
                        _fun22157_ip = 66;
                        continue _fun22157;
                    case 56:
                        var1 = 'ª';
                        var0 = var2 + var1;
                    case 66:
                        return var0;
                }
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['AC', 'DC'];
            var5.narrow = var8;
            var8 = ['AC', 'DC'];
            var5.abbreviated = var8;
            var8 = ['antes de cristo', 'depois de cristo'];
            var5.wide = var8;
            var4.values = var5;
            var5 = 'wide';
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.era = var4;
            var6 = var3.default;
            var4 = {};
            var8 = {};
            var9 = ['1', '2', '3', '4'];
            var8.narrow = var9;
            var9 = ['T1', 'T2', 'T3', 'T4'];
            var8.abbreviated = var9;
            var9 = ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre'];
            var8.wide = var9;
            var4.values = var8;
            var4.defaultWidth = var5;
            var7 = function arg0() {
                var1 = arg0;
                var0 = 1;
                var0 = var1 - var0;
                return var0;
            };
            var4.argumentCallback = var7;
            var4 = var6.bind(var0)(var4);
            var2.quarter = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'];
            var7.narrow = var8;
            var8 = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
            var7.abbreviated = var8;
            var8 = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
            var7.narrow = var8;
            var8 = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'];
            var7.short = var8;
            var8 = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
            var7.abbreviated = var8;
            var8 = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'a',
                'pm': 'p',
                'midnight': 'mn',
                'noon': 'md',
                'morning': 'manhã',
                'afternoon': 'tarde',
                'evening': 'tarde',
                'night': 'noite'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'meia-noite',
                'noon': 'meio-dia',
                'morning': 'manhã',
                'afternoon': 'tarde',
                'evening': 'tarde',
                'night': 'noite'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'a.m.',
                'pm': 'p.m.',
                'midnight': 'meia-noite',
                'noon': 'meio-dia',
                'morning': 'manhã',
                'afternoon': 'tarde',
                'evening': 'tarde',
                'night': 'noite'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var6 = {};
            var7 = {
                'am': 'a',
                'pm': 'p',
                'midnight': 'mn',
                'noon': 'md',
                'morning': 'da manhã',
                'afternoon': 'da tarde',
                'evening': 'da tarde',
                'night': 'da noite'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'meia-noite',
                'noon': 'meio-dia',
                'morning': 'da manhã',
                'afternoon': 'da tarde',
                'evening': 'da tarde',
                'night': 'da noite'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'a.m.',
                'pm': 'p.m.',
                'midnight': 'meia-noite',
                'noon': 'meio-dia',
                'morning': 'da manhã',
                'afternoon': 'da tarde',
                'evening': 'da tarde',
                'night': 'da noite'
            };
            var6.wide = var7;
            var3.formattingValues = var6;
            var3.defaultFormattingWidth = var5;
            var3 = var4.bind(var0)(var3);
            var2.dayPeriod = var3;
            var1.default = var2;
            var2 = var1.default;
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1684]);