// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = function arg0, arg1, arg2() {
        _fun22045: for (var _fun22045_ip = 0;;) switch (_fun22045_ip) {
            case 0:
                var0 = arg0;
                var4 = arg1;
                var1 = 1;
                if (!(var1 !== var4)) {
                    _fun22045_ip = 79;
                    continue _fun22045
                }
            case 13:
                var1 = 100;
                var2 = var4 % var1;
                var1 = 20;
                if (!(var2 <= var1)) {
                    _fun22045_ip = 34;
                    continue _fun22045
                }
            case 27:
                var1 = 10;
                if (!(!(var2 > var1))) {
                    _fun22045_ip = 71;
                    continue _fun22045
                }
            case 34:
                var1 = 10;
                var2 = var2 % var1;
                var1 = 2;
                if (!(var2 >= var1)) {
                    _fun22045_ip = 55;
                    continue _fun22045
                }
            case 48:
                var1 = 4;
                if (!(!(var2 <= var1))) {
                    _fun22045_ip = 63;
                    continue _fun22045
                }
            case 55:
                var1 = var0.other;
                _fun22045_ip = 69;
                continue _fun22045;
            case 63:
                var1 = var0.twoFour;
            case 69:
                _fun22045_ip = 85;
                continue _fun22045;
            case 71:
                var1 = var0.other;
                _fun22045_ip = 85;
                continue _fun22045;
            case 79:
                var1 = var0.one;
            case 85:
                var2 = 'string';
                var0 = typeof var1;
                var3 = var1;
                if (!(var2 !== var0)) {
                    _fun22045_ip = 106;
                    continue _fun22045
                }
            case 99:
                var0 = arg2;
                var3 = var1[var0];
            case 106:
                var2 = var3.replace;
                var0 = global;
                var1 = var0.String;
                var0 = undefined;
                var1 = var1.bind(var0)(var4);
                var0 = '{{count}}';
                var0 = var2.bind(var3)(var0, var1);
                return var0;
        }
    };
    var _closure1_slot1 = var0;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = undefined;
    var1.default = var0;
    var3 = {};
    var4 = {
        'one': null,
        'twoFour': 'mniej niż {{count}} sekundy',
        'other': 'mniej niż {{count}} sekund'
    };
    var5 = {
        'regular': 'mniej niż sekunda',
        'past': 'mniej niż sekundę',
        'future': 'mniej niż sekundę'
    };
    var4.one = var5;
    var3.lessThanXSeconds = var4;
    var4 = {
        'one': null,
        'twoFour': '{{count}} sekundy',
        'other': '{{count}} sekund'
    };
    var5 = {
        'regular': 'sekunda',
        'past': 'sekundę',
        'future': 'sekundę'
    };
    var4.one = var5;
    var3.xSeconds = var4;
    var4 = {
        'one': 'pół minuty',
        'twoFour': 'pół minuty',
        'other': 'pół minuty'
    };
    var3.halfAMinute = var4;
    var4 = {
        'one': null,
        'twoFour': 'mniej niż {{count}} minuty',
        'other': 'mniej niż {{count}} minut'
    };
    var5 = {
        'regular': 'mniej niż minuta',
        'past': 'mniej niż minutę',
        'future': 'mniej niż minutę'
    };
    var4.one = var5;
    var3.lessThanXMinutes = var4;
    var4 = {
        'one': null,
        'twoFour': '{{count}} minuty',
        'other': '{{count}} minut'
    };
    var5 = {
        'regular': 'minuta',
        'past': 'minutę',
        'future': 'minutę'
    };
    var4.one = var5;
    var3.xMinutes = var4;
    var4 = {
        'one': null,
        'twoFour': 'około {{count}} godziny',
        'other': 'około {{count}} godzin'
    };
    var5 = {
        'regular': 'około godziny',
        'past': 'około godziny',
        'future': 'około godzinę'
    };
    var4.one = var5;
    var3.aboutXHours = var4;
    var4 = {
        'one': null,
        'twoFour': '{{count}} godziny',
        'other': '{{count}} godzin'
    };
    var5 = {
        'regular': 'godzina',
        'past': 'godzinę',
        'future': 'godzinę'
    };
    var4.one = var5;
    var3.xHours = var4;
    var4 = {
        'one': null,
        'twoFour': '{{count}} dni',
        'other': '{{count}} dni'
    };
    var5 = {
        'regular': 'dzień',
        'past': 'dzień',
        'future': '1 dzień'
    };
    var4.one = var5;
    var3.xDays = var4;
    var4 = {
        'one': 'około tygodnia',
        'twoFour': 'około {{count}} tygodni',
        'other': 'około {{count}} tygodni'
    };
    var3.aboutXWeeks = var4;
    var4 = {
        'one': 'tydzień',
        'twoFour': '{{count}} tygodnie',
        'other': '{{count}} tygodni'
    };
    var3.xWeeks = var4;
    var4 = {
        'one': 'około miesiąc',
        'twoFour': 'około {{count}} miesiące',
        'other': 'około {{count}} miesięcy'
    };
    var3.aboutXMonths = var4;
    var4 = {
        'one': 'miesiąc',
        'twoFour': '{{count}} miesiące',
        'other': '{{count}} miesięcy'
    };
    var3.xMonths = var4;
    var4 = {
        'one': 'około rok',
        'twoFour': 'około {{count}} lata',
        'other': 'około {{count}} lat'
    };
    var3.aboutXYears = var4;
    var4 = {
        'one': 'rok',
        'twoFour': '{{count}} lata',
        'other': '{{count}} lat'
    };
    var3.xYears = var4;
    var4 = {
        'one': 'ponad rok',
        'twoFour': 'ponad {{count}} lata',
        'other': 'ponad {{count}} lat'
    };
    var3.overXYears = var4;
    var4 = {
        'one': 'prawie rok',
        'twoFour': 'prawie {{count}} lata',
        'other': 'prawie {{count}} lat'
    };
    var3.almostXYears = var4;
    var _closure1_slot0 = var3;
    var2 = function arg0, arg1, arg2() {
        _fun22046: for (var _fun22046_ip = 0;;) switch (_fun22046_ip) {
            case 0:
                var6 = arg1;
                var1 = arg2;
                var3 = _closure1_slot0;
                var0 = arg0;
                var5 = var3[var0];
                var0 = null;
                if (!(var0 != var1)) {
                    _fun22046_ip = 35;
                    continue _fun22046
                }
            case 26:
                var0 = var1.addSuffix;
                if (var0) {
                    _fun22046_ip = 54;
                    continue _fun22046
                }
            case 35:
                var4 = _closure1_slot1;
                var3 = undefined;
                var0 = 'regular';
                var0 = var4.bind(var3)(var5, var6, var0);
                _fun22046_ip = 134;
                continue _fun22046;
            case 54:
                var3 = var1.comparison;
                if (!var3) {
                    _fun22046_ip = 75;
                    continue _fun22046
                }
            case 63:
                var3 = var1.comparison;
                var1 = 0;
                if (!(!(var3 > var1))) {
                    _fun22046_ip = 104;
                    continue _fun22046
                }
            case 75:
                var4 = _closure1_slot1;
                var3 = undefined;
                var1 = 'past';
                var3 = var4.bind(var3)(var5, var6, var1);
                var1 = ' temu';
                var1 = var3 + var1;
                _fun22046_ip = 131;
                continue _fun22046;
            case 104:
                var4 = _closure1_slot1;
                var3 = undefined;
                var2 = 'future';
                var3 = var4.bind(var3)(var5, var6, var2);
                var2 = 'za ';
                var1 = var2 + var3;
            case 131:
                var0 = var1;
            case 134:
                return var0;
        }
    };
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);