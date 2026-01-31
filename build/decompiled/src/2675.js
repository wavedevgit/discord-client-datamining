// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = function(arg0, arg1) { // Original name: declension, environment: var2
        _fun22149: for (var _fun22149_ip = 0;;) switch (_fun22149_ip) {
            case 0:
                var0 = arg0;
                var6 = arg1;
                var1 = var0.one;
                var3 = undefined;
                if (!(var3 !== var1)) {
                    _fun22149_ip = 28;
                    continue _fun22149
                }
            case 18:
                var1 = 1;
                if (!(var1 !== var6)) {
                    _fun22149_ip = 195;
                    continue _fun22149
                }
            case 28:
                var1 = 10;
                var5 = var6 % var1;
                var2 = 100;
                var2 = var6 % var2;
                var4 = 1;
                if (!(var4 === var5)) {
                    _fun22149_ip = 56;
                    continue _fun22149
                }
            case 49:
                var4 = 11;
                if (!(var4 === var2)) {
                    _fun22149_ip = 157;
                    continue _fun22149
                }
            case 56:
                var4 = 2;
                if (!(var5 >= var4)) {
                    _fun22149_ip = 81;
                    continue _fun22149
                }
            case 63:
                var4 = 4;
                if (!(var5 <= var4)) {
                    _fun22149_ip = 81;
                    continue _fun22149
                }
            case 70:
                if (!(!(var2 < var1))) {
                    _fun22149_ip = 119;
                    continue _fun22149
                }
            case 74:
                var1 = 20;
                if (!(!(var2 > var1))) {
                    _fun22149_ip = 119;
                    continue _fun22149
                }
            case 81:
                var5 = var0.pluralGenitive;
                var4 = var5.replace;
                var1 = global;
                var1 = var1.String;
                var2 = var1.bind(var3)(var6);
                var1 = '{{count}}';
                var1 = var4.bind(var5)(var1, var2);
                _fun22149_ip = 155;
                continue _fun22149;
            case 119:
                var7 = var0.singularGenitive;
                var5 = var7.replace;
                var2 = global;
                var2 = var2.String;
                var4 = var2.bind(var3)(var6);
                var2 = '{{count}}';
                var1 = var5.bind(var7)(var2, var4);
            case 155:
                _fun22149_ip = 193;
                continue _fun22149;
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
    var5 = function(arg0) { // Original name: buildLocalizeTokenFn, environment: var2
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function(arg0, arg1) { // Environment: var0
            _fun22151: for (var _fun22151_ip = 0;;) switch (_fun22151_ip) {
                case 0:
                    var6 = arg0;
                    var1 = arg1;
                    if (!var1) {
                        _fun22151_ip = 18;
                        continue _fun22151
                    }
                case 9:
                    var0 = var1.addSuffix;
                    if (var0) {
                        _fun22151_ip = 51;
                        continue _fun22151
                    }
                case 18:
                    var3 = _closure1_slot1;
                    var0 = _closure2_slot0;
                    var2 = var0.regular;
                    var0 = undefined;
                    var0 = var3.bind(var0)(var2, var6);
                    _fun22151_ip = 214;
                    continue _fun22151;
                case 51:
                    var2 = var1.comparison;
                    if (!var2) {
                        _fun22151_ip = 72;
                        continue _fun22151
                    }
                case 60:
                    var2 = var1.comparison;
                    var1 = 0;
                    if (!(!(var2 > var1))) {
                        _fun22151_ip = 141;
                        continue _fun22151
                    }
                case 72:
                    var1 = _closure2_slot0;
                    var1 = var1.past;
                    var4 = _closure1_slot1;
                    var2 = _closure2_slot0;
                    if (var1) {
                        _fun22151_ip = 125;
                        continue _fun22151
                    }
                case 99:
                    var3 = var2.regular;
                    var1 = undefined;
                    var3 = var4.bind(var1)(var3, var6);
                    var1 = ' тому';
                    var1 = var3 + var1;
                    _fun22151_ip = 139;
                    continue _fun22151;
                case 125:
                    var3 = var2.past;
                    var2 = undefined;
                    var1 = var4.bind(var2)(var3, var6);
                case 139:
                    _fun22151_ip = 211;
                    continue _fun22151;
                case 141:
                    var2 = _closure2_slot0;
                    var2 = var2.future;
                    var5 = _closure1_slot1;
                    var3 = _closure2_slot0;
                    if (var2) {
                        _fun22151_ip = 194;
                        continue _fun22151
                    }
                case 168:
                    var4 = var3.regular;
                    var2 = undefined;
                    var4 = var5.bind(var2)(var4, var6);
                    var2 = 'за ';
                    var2 = var2 + var4;
                    _fun22151_ip = 208;
                    continue _fun22151;
                case 194:
                    var4 = var3.future;
                    var3 = undefined;
                    var2 = var5.bind(var3)(var4, var6);
                case 208:
                    var1 = var2;
                case 211:
                    var0 = var1;
                case 214:
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
        'one': 'менше секунди',
        'singularNominative': 'менше {{count}} секунди',
        'singularGenitive': 'менше {{count}} секунд',
        'pluralGenitive': 'менше {{count}} секунд'
    };
    var4.regular = var6;
    var6 = {
        'one': 'менше, ніж за секунду',
        'singularNominative': 'менше, ніж за {{count}} секунду',
        'singularGenitive': 'менше, ніж за {{count}} секунди',
        'pluralGenitive': 'менше, ніж за {{count}} секунд'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.lessThanXSeconds = var4;
    var4 = {};
    var6 = {
        'singularNominative': '{{count}} секунда',
        'singularGenitive': '{{count}} секунди',
        'pluralGenitive': '{{count}} секунд'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': '{{count}} секунду тому',
        'singularGenitive': '{{count}} секунди тому',
        'pluralGenitive': '{{count}} секунд тому'
    };
    var4.past = var6;
    var6 = {
        'singularNominative': 'за {{count}} секунду',
        'singularGenitive': 'за {{count}} секунди',
        'pluralGenitive': 'за {{count}} секунд'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.xSeconds = var4;
    var4 = function(arg0, arg1) { // Original name: halfAtMinute, environment: var2
        _fun22152: for (var _fun22152_ip = 0;;) switch (_fun22152_ip) {
            case 0:
                var2 = arg1;
                var3 = 'півхвилини';
                var0 = var3;
                if (!var2) {
                    _fun22152_ip = 72;
                    continue _fun22152
                }
            case 15:
                var1 = var2.addSuffix;
                var0 = var3;
                if (!var1) {
                    _fun22152_ip = 72;
                    continue _fun22152
                }
            case 27:
                var4 = var2.comparison;
                var3 = 'півхвилини тому';
                var1 = var3;
                if (!var4) {
                    _fun22152_ip = 69;
                    continue _fun22152
                }
            case 45:
                var4 = var2.comparison;
                var2 = 0;
                var2 = var4 > var2;
                var1 = var3;
                if (!var2) {
                    _fun22152_ip = 69;
                    continue _fun22152
                }
            case 63:
                var1 = 'за півхвилини';
            case 69:
                var0 = var1;
            case 72:
                return var0;
        }
    };
    var3.halfAMinute = var4;
    var4 = {};
    var6 = {
        'one': 'менше хвилини',
        'singularNominative': 'менше {{count}} хвилини',
        'singularGenitive': 'менше {{count}} хвилин',
        'pluralGenitive': 'менше {{count}} хвилин'
    };
    var4.regular = var6;
    var6 = {
        'one': 'менше, ніж за хвилину',
        'singularNominative': 'менше, ніж за {{count}} хвилину',
        'singularGenitive': 'менше, ніж за {{count}} хвилини',
        'pluralGenitive': 'менше, ніж за {{count}} хвилин'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.lessThanXMinutes = var4;
    var4 = {};
    var6 = {
        'singularNominative': '{{count}} хвилина',
        'singularGenitive': '{{count}} хвилини',
        'pluralGenitive': '{{count}} хвилин'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': '{{count}} хвилину тому',
        'singularGenitive': '{{count}} хвилини тому',
        'pluralGenitive': '{{count}} хвилин тому'
    };
    var4.past = var6;
    var6 = {
        'singularNominative': 'за {{count}} хвилину',
        'singularGenitive': 'за {{count}} хвилини',
        'pluralGenitive': 'за {{count}} хвилин'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.xMinutes = var4;
    var4 = {};
    var6 = {
        'singularNominative': 'близько {{count}} години',
        'singularGenitive': 'близько {{count}} годин',
        'pluralGenitive': 'близько {{count}} годин'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': 'приблизно за {{count}} годину',
        'singularGenitive': 'приблизно за {{count}} години',
        'pluralGenitive': 'приблизно за {{count}} годин'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.aboutXHours = var4;
    var4 = {};
    var6 = {
        'singularNominative': '{{count}} годину',
        'singularGenitive': '{{count}} години',
        'pluralGenitive': '{{count}} годин'
    };
    var4.regular = var6;
    var4 = var5.bind(var0)(var4);
    var3.xHours = var4;
    var4 = {};
    var6 = {
        'singularNominative': '{{count}} день',
        'singularGenitive': '{{count}} днi',
        'pluralGenitive': '{{count}} днів'
    };
    var4.regular = var6;
    var4 = var5.bind(var0)(var4);
    var3.xDays = var4;
    var4 = {};
    var6 = {
        'singularNominative': 'близько {{count}} тижня',
        'singularGenitive': 'близько {{count}} тижнів',
        'pluralGenitive': 'близько {{count}} тижнів'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': 'приблизно за {{count}} тиждень',
        'singularGenitive': 'приблизно за {{count}} тижні',
        'pluralGenitive': 'приблизно за {{count}} тижнів'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.aboutXWeeks = var4;
    var4 = {};
    var6 = {
        'singularNominative': '{{count}} тиждень',
        'singularGenitive': '{{count}} тижні',
        'pluralGenitive': '{{count}} тижнів'
    };
    var4.regular = var6;
    var4 = var5.bind(var0)(var4);
    var3.xWeeks = var4;
    var4 = {};
    var6 = {
        'singularNominative': 'близько {{count}} місяця',
        'singularGenitive': 'близько {{count}} місяців',
        'pluralGenitive': 'близько {{count}} місяців'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': 'приблизно за {{count}} місяць',
        'singularGenitive': 'приблизно за {{count}} місяці',
        'pluralGenitive': 'приблизно за {{count}} місяців'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.aboutXMonths = var4;
    var4 = {};
    var6 = {
        'singularNominative': '{{count}} місяць',
        'singularGenitive': '{{count}} місяці',
        'pluralGenitive': '{{count}} місяців'
    };
    var4.regular = var6;
    var4 = var5.bind(var0)(var4);
    var3.xMonths = var4;
    var4 = {};
    var6 = {
        'singularNominative': 'близько {{count}} року',
        'singularGenitive': 'близько {{count}} років',
        'pluralGenitive': 'близько {{count}} років'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': 'приблизно за {{count}} рік',
        'singularGenitive': 'приблизно за {{count}} роки',
        'pluralGenitive': 'приблизно за {{count}} років'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.aboutXYears = var4;
    var4 = {};
    var6 = {
        'singularNominative': '{{count}} рік',
        'singularGenitive': '{{count}} роки',
        'pluralGenitive': '{{count}} років'
    };
    var4.regular = var6;
    var4 = var5.bind(var0)(var4);
    var3.xYears = var4;
    var4 = {};
    var6 = {
        'singularNominative': 'більше {{count}} року',
        'singularGenitive': 'більше {{count}} років',
        'pluralGenitive': 'більше {{count}} років'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': 'більше, ніж за {{count}} рік',
        'singularGenitive': 'більше, ніж за {{count}} роки',
        'pluralGenitive': 'більше, ніж за {{count}} років'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.overXYears = var4;
    var4 = {};
    var6 = {
        'singularNominative': 'майже {{count}} рік',
        'singularGenitive': 'майже {{count}} роки',
        'pluralGenitive': 'майже {{count}} років'
    };
    var4.regular = var6;
    var6 = {
        'singularNominative': 'майже за {{count}} рік',
        'singularGenitive': 'майже за {{count}} роки',
        'pluralGenitive': 'майже за {{count}} років'
    };
    var4.future = var6;
    var4 = var5.bind(var0)(var4);
    var3.almostXYears = var4;
    var _closure1_slot0 = var3;
    var2 = function(arg0, arg1, arg2) { // Original name: formatDistance, environment: var2
        _fun22153: for (var _fun22153_ip = 0;;) switch (_fun22153_ip) {
            case 0:
                var3 = arg2;
                if (var3) {
                    _fun22153_ip = 8;
                    continue _fun22153
                }
            case 6:
                var3 = {};
            case 8:
                var2 = _closure1_slot0;
                var0 = arg0;
                var1 = var2[var0];
                var0 = arg1;
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);