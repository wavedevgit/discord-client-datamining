// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
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
        'one': 'meno di un secondo',
        'other': 'meno di {{count}} secondi'
    };
    var3.lessThanXSeconds = var4;
    var4 = {
        'one': 'un secondo',
        'other': '{{count}} secondi'
    };
    var3.xSeconds = var4;
    var4 = 'alcuni secondi';
    var3.halfAMinute = var4;
    var4 = {
        'one': 'meno di un minuto',
        'other': 'meno di {{count}} minuti'
    };
    var3.lessThanXMinutes = var4;
    var4 = {
        'one': 'un minuto',
        'other': '{{count}} minuti'
    };
    var3.xMinutes = var4;
    var4 = {
        'one': "circa un'ora",
        'other': 'circa {{count}} ore'
    };
    var3.aboutXHours = var4;
    var4 = {
        'one': "un'ora",
        'other': '{{count}} ore'
    };
    var3.xHours = var4;
    var4 = {
        'one': 'un giorno',
        'other': '{{count}} giorni'
    };
    var3.xDays = var4;
    var4 = {
        'one': 'circa una settimana',
        'other': 'circa {{count}} settimane'
    };
    var3.aboutXWeeks = var4;
    var4 = {
        'one': 'una settimana',
        'other': '{{count}} settimane'
    };
    var3.xWeeks = var4;
    var4 = {
        'one': 'circa un mese',
        'other': 'circa {{count}} mesi'
    };
    var3.aboutXMonths = var4;
    var4 = {
        'one': 'un mese',
        'other': '{{count}} mesi'
    };
    var3.xMonths = var4;
    var4 = {
        'one': 'circa un anno',
        'other': 'circa {{count}} anni'
    };
    var3.aboutXYears = var4;
    var4 = {
        'one': 'un anno',
        'other': '{{count}} anni'
    };
    var3.xYears = var4;
    var4 = {
        'one': 'più di un anno',
        'other': 'più di {{count}} anni'
    };
    var3.overXYears = var4;
    var4 = {
        'one': 'quasi un anno',
        'other': 'quasi {{count}} anni'
    };
    var3.almostXYears = var4;
    var _closure1_slot0 = var3;
    var2 = function arg0, arg1, arg2() {
        _fun22043: for (var _fun22043_ip = 0;;) switch (_fun22043_ip) {
            case 0:
                var4 = arg1;
                var1 = arg2;
                var2 = _closure1_slot0;
                var0 = arg0;
                var2 = var2[var0];
                var5 = 'string';
                var0 = typeof var2;
                var3 = var2;
                if (!(var5 !== var0)) {
                    _fun22043_ip = 84;
                    continue _fun22043
                }
            case 34:
                var0 = 1;
                if (!(var0 !== var4)) {
                    _fun22043_ip = 75;
                    continue _fun22043
                }
            case 41:
                var6 = var2.other;
                var5 = var6.replace;
                var0 = var4.toString;
                var4 = var0.bind(var4)();
                var0 = '{{count}}';
                var0 = var5.bind(var6)(var0, var4);
                _fun22043_ip = 81;
                continue _fun22043;
            case 75:
                var0 = var2.one;
            case 81:
                var3 = var0;
            case 84:
                var2 = null;
                var0 = var3;
                if (!(var2 != var1)) {
                    _fun22043_ip = 151;
                    continue _fun22043
                }
            case 93:
                var2 = var1.addSuffix;
                var0 = var3;
                if (!var2) {
                    _fun22043_ip = 151;
                    continue _fun22043
                }
            case 105:
                var2 = var1.comparison;
                if (!var2) {
                    _fun22043_ip = 126;
                    continue _fun22043
                }
            case 114:
                var2 = var1.comparison;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun22043_ip = 138;
                    continue _fun22043
                }
            case 126:
                var1 = ' fa';
                var1 = var3 + var1;
                _fun22043_ip = 148;
                continue _fun22043;
            case 138:
                var2 = 'tra ';
                var1 = var2 + var3;
            case 148:
                var0 = var1;
            case 151:
                return var0;
        }
    };
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);