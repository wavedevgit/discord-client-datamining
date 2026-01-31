// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = function arg0, arg1() {
        _fun22086: for (var _fun22086_ip = 0;;) switch (_fun22086_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var1 = var0.one;
                var3 = undefined;
                if (!(var3 !== var1)) {
                    _fun22086_ip = 28;
                    continue _fun22086
                }
            case 18:
                var1 = 1;
                if (!(var1 !== var6)) {
                    _fun22086_ip = 195;
                    continue _fun22086
                }
            case 28:
                var1 = 10;
                var5 = var6 % var1;
                var2 = 100;
                var2 = var6 % var2;
                var4 = 1;
                if (!(var4 === var5)) {
                    _fun22086_ip = 56;
                    continue _fun22086
                }
            case 49:
                var4 = 11;
                if (!(var4 === var2)) {
                    _fun22086_ip = 157;
                    continue _fun22086
                }
            case 56:
                var4 = 2;
                if (!(var5 >= var4)) {
                    _fun22086_ip = 81;
                    continue _fun22086
                }
            case 63:
                var4 = 4;
                if (!(var5 <= var4)) {
                    _fun22086_ip = 81;
                    continue _fun22086
                }
            case 70:
                if (!(!(var2 < var1))) {
                    _fun22086_ip = 119;
                    continue _fun22086
                }
            case 74:
                var1 = 20;
                if (!(!(var2 > var1))) {
                    _fun22086_ip = 119;
                    continue _fun22086
                }
            case 81:
                var5 = var0.pluralGenitive;
                var4 = var5.replace;
                var1 = global;
                var1 = var1.String;
                var2 = var1.bind(var3)(var6);
                var1 = '{{count}}';
                var1 = var4.bind(var5)(var1, var2);
                _fun22086_ip = 155;
                continue _fun22086;
            case 119:
                var7 = var0.singularGenitive;
                var5 = var7.replace;
                var2 = global;
                var2 = var2.String;
                var4 = var2.bind(var3)(var6);
                var2 = '{{count}}';
                var1 = var5.bind(var7)(var2, var4);
            case 155:
                _fun22086_ip = 193;
                continue _fun22086;
            case 157:
                var5 = var0.singularNominative;
                var4 = var5.replace;
                var2 = global;
                var2 = var2.String;
                var3 = var2.bind(var3)(var6);
                var2 = '{{count}}';
                var1 = var4.bind(var5)(var2, var3);
            case 193:
                return var1;
            case 195:
                var0 = var0.one;
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var5 = function arg0() {
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun22088: for (var _fun22088_ip = 0;;) switch (_fun22088_ip) {
                case 0:
                    var6 = arg0;
                    var1 = arg1;
                    var0 = null;
                    if (!(var0 != var1)) {
                        _fun22088_ip = 21;
                        continue _fun22088
                    }
                case 12:
                    var0 = var1.addSuffix;
                    if (var0) {
                        _fun22088_ip = 54;
                        continue _fun22088
                    }
                case 21:
                    var3 = _closure1_slot1;
                    var0 = _closure2_slot0;
                    var2 = var0.regular;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var6);
                    _fun22088_ip = 217;
                    continue _fun22088;
                case 54:
                    var2 = var1.comparison;
                    if (!var2) {
                        _fun22088_ip = 75;
                        continue _fun22088
                    }
                case 63:
                    var2 = var1.comparison;
                    var1 = 0;
                    if (!(!(var2 > var1))) {
                        _fun22088_ip = 144;
                        continue _fun22088
                    }
                case 75:
                    var1 = _closure2_slot0;
                    var1 = var1.past;
                    var4 = _closure1_slot1;
                    var2 = _closure2_slot0;
                    if (var1) {
                        _fun22088_ip = 128;
                        continue _fun22088
                    }
                case 102:
                    var3 = var2.regular;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3, var6);
                    var1 = ' назад';
                    var1 = var3 + var1;
                    _fun22088_ip = 142;
                    continue _fun22088;
                case 128:
                    var3 = var2.past;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3, var6);
                case 142:
                    _fun22088_ip = 214;
                    continue _fun22088;
                case 144:
                    var2 = _closure2_slot0;
                    var2 = var2.future;
                    var5 = _closure1_slot1;
                    var3 = _closure2_slot0;
                    if (var2) {
                        _fun22088_ip = 197;
                        continue _fun22088
                    }
                case 171:
                    var4 = var3.regular;
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4, var6);
                    var2 = 'через ';
                    var2 = var2 + var4;
                    _fun22088_ip = 211;
                    continue _fun22088;
                case 197:
                    var4 = var3.future;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var4, var6);
                case 211:
                    var1 = var2;
                case 214:
                    var0 = var1;
                case 217:
                    return var0;
            }
        };
        return var0;
    };
    var0 = global;
    var6 = var0.Object;
    var4 = var6.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var6)(var1, var0, var3);
    var0 = undefined;
    var1.default = var0;
    var3 = {};
    var4 = {};
    var6 = {
        'one': 'меньше секунды',
        'singularNominative': 'меньше {{count}} секунды',
        'singularGenitive': 'меньше {{count}} секунд',
        'pluralGenitive': 'меньше {{count}} секунд'
    };
    var4.regular = var6;
    var6 = {
        'one': 'меньше, чем через секунду',
        'singularNominative': 'меньше, чем через {{count}} секунду',
        'singularGenitive': 'меньше, чем через {{count}} секунды',
        'pluralGenitive': 'меньше, чем через {{count}} секунд'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.lessThanXSeconds = var4;
    var4 = {};
    var6 = {
        'singularNominative': '{{count}} секунда',
        'singularGenitive': '{{count}} секунды',
        'pluralGenitive': '{{count}} секунд'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': '{{count}} секунду назад',
        'singularGenitive': '{{count}} секунды назад',
        'pluralGenitive': '{{count}} секунд назад'
    };
    var4.past = var6;
    var6 = {
        'singularNominative': 'через {{count}} секунду',
        'singularGenitive': 'через {{count}} секунды',
        'pluralGenitive': 'через {{count}} секунд'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.xSeconds = var4;
    var4 = function arg0, arg1() {
        _fun22089: for (var _fun22089_ip = 0;;) switch (_fun22089_ip) {
            case 0:
                var2 = arg1;
                var0 = null;
                var1 = var0 != var2;
                var3 = 'полминуты';
                var0 = var3;
                if (!var1) {
                    _fun22089_ip = 78;
                    continue _fun22089
                }
            case 21:
                var1 = var2.addSuffix;
                var0 = var3;
                if (!var1) {
                    _fun22089_ip = 78;
                    continue _fun22089
                }
            case 33:
                var4 = var2.comparison;
                var3 = 'полминуты назад';
                var1 = var3;
                if (!var4) {
                    _fun22089_ip = 75;
                    continue _fun22089
                }
            case 51:
                var4 = var2.comparison;
                var2 = 0;
                var2 = var4 > var2;
                var1 = var3;
                if (!var2) {
                    _fun22089_ip = 75;
                    continue _fun22089
                }
            case 69:
                var1 = 'через полминуты';
            case 75:
                var0 = var1;
            case 78:
                return var0;
        }
    };
    var3.halfAMinute = var4;
    var4 = {};
    var6 = {
        'one': 'меньше минуты',
        'singularNominative': 'меньше {{count}} минуты',
        'singularGenitive': 'меньше {{count}} минут',
        'pluralGenitive': 'меньше {{count}} минут'
    };
    var4.regular = var6;
    var6 = {
        'one': 'меньше, чем через минуту',
        'singularNominative': 'меньше, чем через {{count}} минуту',
        'singularGenitive': 'меньше, чем через {{count}} минуты',
        'pluralGenitive': 'меньше, чем через {{count}} минут'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.lessThanXMinutes = var4;
    var4 = {};
    var6 = {
        'singularNominative': '{{count}} минута',
        'singularGenitive': '{{count}} минуты',
        'pluralGenitive': '{{count}} минут'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': '{{count}} минуту назад',
        'singularGenitive': '{{count}} минуты назад',
        'pluralGenitive': '{{count}} минут назад'
    };
    var4.past = var6;
    var6 = {
        'singularNominative': 'через {{count}} минуту',
        'singularGenitive': 'через {{count}} минуты',
        'pluralGenitive': 'через {{count}} минут'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.xMinutes = var4;
    var4 = {};
    var6 = {
        'singularNominative': 'около {{count}} часа',
        'singularGenitive': 'около {{count}} часов',
        'pluralGenitive': 'около {{count}} часов'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': 'приблизительно через {{count}} час',
        'singularGenitive': 'приблизительно через {{count}} часа',
        'pluralGenitive': 'приблизительно через {{count}} часов'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.aboutXHours = var4;
    var4 = {};
    var6 = {
        'singularNominative': '{{count}} час',
        'singularGenitive': '{{count}} часа',
        'pluralGenitive': '{{count}} часов'
    };
    var4.regular = var6;
    var4 = var5.bind(var0)(var4);
    var3.xHours = var4;
    var4 = {};
    var6 = {
        'singularNominative': '{{count}} день',
        'singularGenitive': '{{count}} дня',
        'pluralGenitive': '{{count}} дней'
    };
    var4.regular = var6;
    var4 = var5.bind(var0)(var4);
    var3.xDays = var4;
    var4 = {};
    var6 = {
        'singularNominative': 'около {{count}} недели',
        'singularGenitive': 'около {{count}} недель',
        'pluralGenitive': 'около {{count}} недель'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': 'приблизительно через {{count}} неделю',
        'singularGenitive': 'приблизительно через {{count}} недели',
        'pluralGenitive': 'приблизительно через {{count}} недель'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.aboutXWeeks = var4;
    var4 = {};
    var6 = {
        'singularNominative': '{{count}} неделя',
        'singularGenitive': '{{count}} недели',
        'pluralGenitive': '{{count}} недель'
    };
    var4.regular = var6;
    var4 = var5.bind(var0)(var4);
    var3.xWeeks = var4;
    var4 = {};
    var6 = {
        'singularNominative': 'около {{count}} месяца',
        'singularGenitive': 'около {{count}} месяцев',
        'pluralGenitive': 'около {{count}} месяцев'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': 'приблизительно через {{count}} месяц',
        'singularGenitive': 'приблизительно через {{count}} месяца',
        'pluralGenitive': 'приблизительно через {{count}} месяцев'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.aboutXMonths = var4;
    var4 = {};
    var6 = {
        'singularNominative': '{{count}} месяц',
        'singularGenitive': '{{count}} месяца',
        'pluralGenitive': '{{count}} месяцев'
    };
    var4.regular = var6;
    var4 = var5.bind(var0)(var4);
    var3.xMonths = var4;
    var4 = {};
    var6 = {
        'singularNominative': 'около {{count}} года',
        'singularGenitive': 'около {{count}} лет',
        'pluralGenitive': 'около {{count}} лет'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': 'приблизительно через {{count}} год',
        'singularGenitive': 'приблизительно через {{count}} года',
        'pluralGenitive': 'приблизительно через {{count}} лет'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.aboutXYears = var4;
    var4 = {};
    var6 = {
        'singularNominative': '{{count}} год',
        'singularGenitive': '{{count}} года',
        'pluralGenitive': '{{count}} лет'
    };
    var4.regular = var6;
    var4 = var5.bind(var0)(var4);
    var3.xYears = var4;
    var4 = {};
    var6 = {
        'singularNominative': 'больше {{count}} года',
        'singularGenitive': 'больше {{count}} лет',
        'pluralGenitive': 'больше {{count}} лет'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': 'больше, чем через {{count}} год',
        'singularGenitive': 'больше, чем через {{count}} года',
        'pluralGenitive': 'больше, чем через {{count}} лет'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.overXYears = var4;
    var4 = {};
    var6 = {
        'singularNominative': 'почти {{count}} год',
        'singularGenitive': 'почти {{count}} года',
        'pluralGenitive': 'почти {{count}} лет'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': 'почти через {{count}} год',
        'singularGenitive': 'почти через {{count}} года',
        'pluralGenitive': 'почти через {{count}} лет'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.almostXYears = var4;
    var _closure1_slot0 = var3;
    var2 = function arg0, arg1, arg2() {
        var3 = _closure1_slot0;
        var0 = arg0;
        var2 = var3[var0];
        var1 = arg1;
        var0 = arg2;
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);