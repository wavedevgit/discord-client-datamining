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
        'one': 'less than a second',
        'other': 'less than {{count}} seconds'
    };
    var3.lessThanXSeconds = var4;
    var4 = {
        'one': '1 second',
        'other': '{{count}} seconds'
    };
    var3.xSeconds = var4;
    var4 = 'half a minute';
    var3.halfAMinute = var4;
    var4 = {
        'one': 'less than a minute',
        'other': 'less than {{count}} minutes'
    };
    var3.lessThanXMinutes = var4;
    var4 = {
        'one': '1 minute',
        'other': '{{count}} minutes'
    };
    var3.xMinutes = var4;
    var4 = {
        'one': 'about 1 hour',
        'other': 'about {{count}} hours'
    };
    var3.aboutXHours = var4;
    var4 = {
        'one': '1 hour',
        'other': '{{count}} hours'
    };
    var3.xHours = var4;
    var4 = {
        'one': '1 day',
        'other': '{{count}} days'
    };
    var3.xDays = var4;
    var4 = {
        'one': 'about 1 week',
        'other': 'about {{count}} weeks'
    };
    var3.aboutXWeeks = var4;
    var4 = {
        'one': '1 week',
        'other': '{{count}} weeks'
    };
    var3.xWeeks = var4;
    var4 = {
        'one': 'about 1 month',
        'other': 'about {{count}} months'
    };
    var3.aboutXMonths = var4;
    var4 = {
        'one': '1 month',
        'other': '{{count}} months'
    };
    var3.xMonths = var4;
    var4 = {
        'one': 'about 1 year',
        'other': 'about {{count}} years'
    };
    var3.aboutXYears = var4;
    var4 = {
        'one': '1 year',
        'other': '{{count}} years'
    };
    var3.xYears = var4;
    var4 = {
        'one': 'over 1 year',
        'other': 'over {{count}} years'
    };
    var3.overXYears = var4;
    var4 = {
        'one': 'almost 1 year',
        'other': 'almost {{count}} years'
    };
    var3.almostXYears = var4;
    var _closure1_slot0 = var3;
    var2 = function(arg0, arg1, arg2) { // Original name: formatDistance, environment: var2
        _fun19185: for (var _fun19185_ip = 0;;) switch (_fun19185_ip) {
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
                    _fun19185_ip = 84;
                    continue _fun19185
                }
            case 34:
                var0 = 1;
                if (!(var0 !== var4)) {
                    _fun19185_ip = 75;
                    continue _fun19185
                }
            case 41:
                var6 = var2.other;
                var5 = var6.replace;
                var0 = var4.toString;
                var4 = var0.bind(var4)();
                var0 = '{{count}}';
                var0 = var5.bind(var6)(var0, var4);
                _fun19185_ip = 81;
                continue _fun19185;
            case 75:
                var0 = var2.one;
            case 81:
                var3 = var0;
            case 84:
                var2 = null;
                var0 = var3;
                if (!(var2 != var1)) {
                    _fun19185_ip = 151;
                    continue _fun19185
                }
            case 93:
                var2 = var1.addSuffix;
                var0 = var3;
                if (!var2) {
                    _fun19185_ip = 151;
                    continue _fun19185
                }
            case 105:
                var2 = var1.comparison;
                if (!var2) {
                    _fun19185_ip = 126;
                    continue _fun19185
                }
            case 114:
                var2 = var1.comparison;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun19185_ip = 138;
                    continue _fun19185
                }
            case 126:
                var1 = ' ago';
                var1 = var3 + var1;
                _fun19185_ip = 148;
                continue _fun19185;
            case 138:
                var2 = 'in ';
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