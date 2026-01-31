// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22097: for (var _fun22097_ip = 0;;) switch (_fun22097_ip) {
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
                _fun22097_ip = 77;
                continue _fun22097
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun22097_ip = 86;
                continue _fun22097
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function arg0, arg1() {
                _fun22098: for (var _fun22098_ip = 0;;) switch (_fun22098_ip) {
                    case 0:
                        var0 = arg1;
                        var1 = global;
                        var2 = var1.Number;
                        var3 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        var2 = null;
                        var2 = var2 == var0;
                        var4 = undefined;
                        if (var2) {
                            _fun22098_ip = 38;
                            continue _fun22098
                        }
                    case 32:
                        var4 = var0.unit;
                    case 38:
                        var0 = '-е';
                        var2 = 'date';
                        if (!(var2 !== var4)) {
                            _fun22098_ip = 91;
                            continue _fun22098
                        }
                    case 52:
                        var2 = 'week';
                        if (!(var2 !== var4)) {
                            _fun22098_ip = 82;
                            continue _fun22098
                        }
                    case 60:
                        var2 = 'minute';
                        if (!(var2 !== var4)) {
                            _fun22098_ip = 82;
                            continue _fun22098
                        }
                    case 68:
                        var2 = '-й';
                        var3 = 'second';
                        if (!(var3 === var4)) {
                            _fun22098_ip = 88;
                            continue _fun22098
                        }
                    case 82:
                        var2 = '-я';
                    case 88:
                        var0 = var2;
                    case 91:
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['до н.э.', 'н.э.'];
            var5.narrow = var8;
            var8 = ['до н. э.', 'н. э.'];
            var5.abbreviated = var8;
            var8 = ['до нашей эры', 'нашей эры'];
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
            var8 = ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'];
            var7.narrow = var8;
            var8 = ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'];
            var7.abbreviated = var8;
            var8 = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var7 = {};
            var8 = ['Я', 'Ф', 'М', 'А', 'М', 'И', 'И', 'А', 'С', 'О', 'Н', 'Д'];
            var7.narrow = var8;
            var8 = ['янв.', 'фев.', 'мар.', 'апр.', 'мая', 'июн.', 'июл.', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.'];
            var7.abbreviated = var8;
            var8 = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
            var7.wide = var8;
            var4.formattingValues = var7;
            var4.defaultFormattingWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['В', 'П', 'В', 'С', 'Ч', 'П', 'С'];
            var7.narrow = var8;
            var8 = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
            var7.short = var8;
            var8 = ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'суб'];
            var7.abbreviated = var8;
            var8 = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
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
                'midnight': 'полн.',
                'noon': 'полд.',
                'morning': 'утро',
                'afternoon': 'день',
                'evening': 'веч.',
                'night': 'ночь'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'ДП',
                'pm': 'ПП',
                'midnight': 'полн.',
                'noon': 'полд.',
                'morning': 'утро',
                'afternoon': 'день',
                'evening': 'веч.',
                'night': 'ночь'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'ДП',
                'pm': 'ПП',
                'midnight': 'полночь',
                'noon': 'полдень',
                'morning': 'утро',
                'afternoon': 'день',
                'evening': 'вечер',
                'night': 'ночь'
            };
            var6.wide = var7;
            var3.values = var6;
            var6 = 'any';
            var3.defaultWidth = var6;
            var6 = {};
            var7 = {
                'am': 'ДП',
                'pm': 'ПП',
                'midnight': 'полн.',
                'noon': 'полд.',
                'morning': 'утра',
                'afternoon': 'дня',
                'evening': 'веч.',
                'night': 'ночи'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'ДП',
                'pm': 'ПП',
                'midnight': 'полн.',
                'noon': 'полд.',
                'morning': 'утра',
                'afternoon': 'дня',
                'evening': 'веч.',
                'night': 'ночи'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'ДП',
                'pm': 'ПП',
                'midnight': 'полночь',
                'noon': 'полдень',
                'morning': 'утра',
                'afternoon': 'дня',
                'evening': 'вечера',
                'night': 'ночи'
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