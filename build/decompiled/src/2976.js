// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun23913: for (var _fun23913_ip = 0;;) switch (_fun23913_ip) {
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
                _fun23913_ip = 77;
                continue _fun23913
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun23913_ip = 86;
                continue _fun23913
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function arg0, arg1() {
                _fun23914: for (var _fun23914_ip = 0;;) switch (_fun23914_ip) {
                    case 0:
                        var4 = arg1;
                        var0 = global;
                        var3 = var0.String;
                        var1 = null;
                        var5 = var1 == var4;
                        var2 = undefined;
                        var1 = undefined;
                        if (var5) {
                            _fun23914_ip = 30;
                            continue _fun23914
                        }
                    case 24:
                        var1 = var4.unit;
                    case 30:
                        var3 = var3.bind(var2)(var1);
                        var1 = var0.Number;
                        var0 = arg0;
                        var1 = var1.bind(var2)(var0);
                        var0 = 'date';
                        if (!(var0 !== var3)) {
                            _fun23914_ip = 95;
                            continue _fun23914
                        }
                    case 57:
                        var0 = 'minute';
                        if (!(var0 !== var3)) {
                            _fun23914_ip = 87;
                            continue _fun23914
                        }
                    case 65:
                        var0 = 'second';
                        if (!(var0 !== var3)) {
                            _fun23914_ip = 87;
                            continue _fun23914
                        }
                    case 73:
                        var0 = '-й';
                        var2 = 'hour';
                        if (!(var2 === var3)) {
                            _fun23914_ip = 93;
                            continue _fun23914
                        }
                    case 87:
                        var0 = '-а';
                    case 93:
                        _fun23914_ip = 124;
                        continue _fun23914;
                    case 95:
                        var2 = 3;
                        if (!(var2 !== var1)) {
                            _fun23914_ip = 115;
                            continue _fun23914
                        }
                    case 102:
                        var2 = '-е';
                        var3 = 23;
                        if (!(var3 === var1)) {
                            _fun23914_ip = 121;
                            continue _fun23914
                        }
                    case 115:
                        var2 = '-є';
                    case 121:
                        var0 = var2;
                    case 124:
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['до н.е.', 'н.е.'];
            var5.narrow = var8;
            var8 = ['до н. е.', 'н. е.'];
            var5.abbreviated = var8;
            var8 = ['до нашої ери', 'нашої ери'];
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
            var9 = ['1-й кв.', '2-й кв.', '3-й кв.', '4-й кв.'];
            var8.abbreviated = var9;
            var9 = ['1-й квартал', '2-й квартал', '3-й квартал', '4-й квартал'];
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
            var8 = ['С', 'Л', 'Б', 'К', 'Т', 'Ч', 'Л', 'С', 'В', 'Ж', 'Л', 'Г'];
            var7.narrow = var8;
            var8 = ['січ.', 'лют.', 'берез.', 'квіт.', 'трав.', 'черв.', 'лип.', 'серп.', 'верес.', 'жовт.', 'листоп.', 'груд.'];
            var7.abbreviated = var8;
            var8 = ['січень', 'лютий', 'березень', 'квітень', 'травень', 'червень', 'липень', 'серпень', 'вересень', 'жовтень', 'листопад', 'грудень'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var7 = {};
            var8 = ['С', 'Л', 'Б', 'К', 'Т', 'Ч', 'Л', 'С', 'В', 'Ж', 'Л', 'Г'];
            var7.narrow = var8;
            var8 = ['січ.', 'лют.', 'берез.', 'квіт.', 'трав.', 'черв.', 'лип.', 'серп.', 'верес.', 'жовт.', 'листоп.', 'груд.'];
            var7.abbreviated = var8;
            var8 = ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня', 'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'];
            var7.wide = var8;
            var4.formattingValues = var7;
            var4.defaultFormattingWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['Н', 'П', 'В', 'С', 'Ч', 'П', 'С'];
            var7.narrow = var8;
            var8 = ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
            var7.short = var8;
            var8 = ['нед', 'пон', 'вів', 'сер', 'чтв', 'птн', 'суб'];
            var7.abbreviated = var8;
            var8 = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'ДП',
                'pm': 'ПП',
                'midnight': 'півн.',
                'noon': 'пол.',
                'morning': 'ранок',
                'afternoon': 'день',
                'evening': 'веч.',
                'night': 'ніч'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'ДП',
                'pm': 'ПП',
                'midnight': 'півн.',
                'noon': 'пол.',
                'morning': 'ранок',
                'afternoon': 'день',
                'evening': 'веч.',
                'night': 'ніч'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'ДП',
                'pm': 'ПП',
                'midnight': 'північ',
                'noon': 'полудень',
                'morning': 'ранок',
                'afternoon': 'день',
                'evening': 'вечір',
                'night': 'ніч'
            };
            var6.wide = var7;
            var3.values = var6;
            var6 = 'any';
            var3.defaultWidth = var6;
            var6 = {};
            var7 = {
                'am': 'ДП',
                'pm': 'ПП',
                'midnight': 'півн.',
                'noon': 'пол.',
                'morning': 'ранку',
                'afternoon': 'дня',
                'evening': 'веч.',
                'night': 'ночі'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'ДП',
                'pm': 'ПП',
                'midnight': 'півн.',
                'noon': 'пол.',
                'morning': 'ранку',
                'afternoon': 'дня',
                'evening': 'веч.',
                'night': 'ночі'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'ДП',
                'pm': 'ПП',
                'midnight': 'північ',
                'noon': 'полудень',
                'morning': 'ранку',
                'afternoon': 'дня',
                'evening': 'веч.',
                'night': 'ночі'
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