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
        'one': 'menos de un segundo',
        'other': 'menos de {{count}} segundos'
    };
    var3.lessThanXSeconds = var4;
    var4 = {
        'one': '1 segundo',
        'other': '{{count}} segundos'
    };
    var3.xSeconds = var4;
    var4 = 'medio minuto';
    var3.halfAMinute = var4;
    var4 = {
        'one': 'menos de un minuto',
        'other': 'menos de {{count}} minutos'
    };
    var3.lessThanXMinutes = var4;
    var4 = {
        'one': '1 minuto',
        'other': '{{count}} minutos'
    };
    var3.xMinutes = var4;
    var4 = {
        'one': 'alrededor de 1 hora',
        'other': 'alrededor de {{count}} horas'
    };
    var3.aboutXHours = var4;
    var4 = {
        'one': '1 hora',
        'other': '{{count}} horas'
    };
    var3.xHours = var4;
    var4 = {
        'one': '1 día',
        'other': '{{count}} días'
    };
    var3.xDays = var4;
    var4 = {
        'one': 'alrededor de 1 semana',
        'other': 'alrededor de {{count}} semanas'
    };
    var3.aboutXWeeks = var4;
    var4 = {
        'one': '1 semana',
        'other': '{{count}} semanas'
    };
    var3.xWeeks = var4;
    var4 = {
        'one': 'alrededor de 1 mes',
        'other': 'alrededor de {{count}} meses'
    };
    var3.aboutXMonths = var4;
    var4 = {
        'one': '1 mes',
        'other': '{{count}} meses'
    };
    var3.xMonths = var4;
    var4 = {
        'one': 'alrededor de 1 año',
        'other': 'alrededor de {{count}} años'
    };
    var3.aboutXYears = var4;
    var4 = {
        'one': '1 año',
        'other': '{{count}} años'
    };
    var3.xYears = var4;
    var4 = {
        'one': 'más de 1 año',
        'other': 'más de {{count}} años'
    };
    var3.overXYears = var4;
    var4 = {
        'one': 'casi 1 año',
        'other': 'casi {{count}} años'
    };
    var3.almostXYears = var4;
    var _closure1_slot0 = var3;
    var2 = function arg0, arg1, arg2() {
        _fun21961: for (var _fun21961_ip = 0;;) switch (_fun21961_ip) {
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
                    _fun21961_ip = 84;
                    continue _fun21961
                }
            case 34:
                var0 = 1;
                if (!(var0 !== var4)) {
                    _fun21961_ip = 75;
                    continue _fun21961
                }
            case 41:
                var6 = var2.other;
                var5 = var6.replace;
                var0 = var4.toString;
                var4 = var0.bind(var4)();
                var0 = '{{count}}';
                var0 = var5.bind(var6)(var0, var4);
                _fun21961_ip = 81;
                continue _fun21961;
            case 75:
                var0 = var2.one;
            case 81:
                var3 = var0;
            case 84:
                var2 = null;
                var0 = var3;
                if (!(var2 != var1)) {
                    _fun21961_ip = 151;
                    continue _fun21961
                }
            case 93:
                var2 = var1.addSuffix;
                var0 = var3;
                if (!var2) {
                    _fun21961_ip = 151;
                    continue _fun21961
                }
            case 105:
                var2 = var1.comparison;
                if (!var2) {
                    _fun21961_ip = 126;
                    continue _fun21961
                }
            case 114:
                var2 = var1.comparison;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun21961_ip = 138;
                    continue _fun21961
                }
            case 126:
                var1 = 'hace ';
                var1 = var1 + var3;
                _fun21961_ip = 148;
                continue _fun21961;
            case 138:
                var2 = 'en ';
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