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
        'one': 'mindre end ét sekund',
        'other': 'mindre end {{count}} sekunder'
    };
    var3.lessThanXSeconds = var4;
    var4 = {
        'one': '1 sekund',
        'other': '{{count}} sekunder'
    };
    var3.xSeconds = var4;
    var4 = 'ét halvt minut';
    var3.halfAMinute = var4;
    var4 = {
        'one': 'mindre end ét minut',
        'other': 'mindre end {{count}} minutter'
    };
    var3.lessThanXMinutes = var4;
    var4 = {
        'one': '1 minut',
        'other': '{{count}} minutter'
    };
    var3.xMinutes = var4;
    var4 = {
        'one': 'cirka 1 time',
        'other': 'cirka {{count}} timer'
    };
    var3.aboutXHours = var4;
    var4 = {
        'one': '1 time',
        'other': '{{count}} timer'
    };
    var3.xHours = var4;
    var4 = {
        'one': '1 dag',
        'other': '{{count}} dage'
    };
    var3.xDays = var4;
    var4 = {
        'one': 'cirka 1 uge',
        'other': 'cirka {{count}} uger'
    };
    var3.aboutXWeeks = var4;
    var4 = {
        'one': '1 uge',
        'other': '{{count}} uger'
    };
    var3.xWeeks = var4;
    var4 = {
        'one': 'cirka 1 måned',
        'other': 'cirka {{count}} måneder'
    };
    var3.aboutXMonths = var4;
    var4 = {
        'one': '1 måned',
        'other': '{{count}} måneder'
    };
    var3.xMonths = var4;
    var4 = {
        'one': 'cirka 1 år',
        'other': 'cirka {{count}} år'
    };
    var3.aboutXYears = var4;
    var4 = {
        'one': '1 år',
        'other': '{{count}} år'
    };
    var3.xYears = var4;
    var4 = {
        'one': 'over 1 år',
        'other': 'over {{count}} år'
    };
    var3.overXYears = var4;
    var4 = {
        'one': 'næsten 1 år',
        'other': 'næsten {{count}} år'
    };
    var3.almostXYears = var4;
    var _closure1_slot0 = var3;
    var2 = function(arg0, arg1, arg2) { // Original name: formatDistance, environment: var2
        _fun21819: for (var _fun21819_ip = 0;;) switch (_fun21819_ip) {
            case 0:
                var7 = arg1;
                var1 = arg2;
                var2 = _closure1_slot0;
                var0 = arg0;
                var2 = var2[var0];
                var4 = 'string';
                var0 = typeof var2;
                var3 = var2;
                if (!(var4 !== var0)) {
                    _fun21819_ip = 90;
                    continue _fun21819
                }
            case 34:
                var0 = 1;
                if (!(var0 !== var7)) {
                    _fun21819_ip = 81;
                    continue _fun21819
                }
            case 41:
                var6 = var2.other;
                var5 = var6.replace;
                var0 = global;
                var4 = var0.String;
                var0 = undefined;
                var4 = var4.bind(var0)(var7);
                var0 = '{{count}}';
                var0 = var5.bind(var6)(var0, var4);
                _fun21819_ip = 87;
                continue _fun21819;
            case 81:
                var0 = var2.one;
            case 87:
                var3 = var0;
            case 90:
                var2 = null;
                var0 = var3;
                if (!(var2 != var1)) {
                    _fun21819_ip = 157;
                    continue _fun21819
                }
            case 99:
                var2 = var1.addSuffix;
                var0 = var3;
                if (!var2) {
                    _fun21819_ip = 157;
                    continue _fun21819
                }
            case 111:
                var2 = var1.comparison;
                if (!var2) {
                    _fun21819_ip = 132;
                    continue _fun21819
                }
            case 120:
                var2 = var1.comparison;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun21819_ip = 144;
                    continue _fun21819
                }
            case 132:
                var1 = ' siden';
                var1 = var3 + var1;
                _fun21819_ip = 154;
                continue _fun21819;
            case 144:
                var2 = 'om ';
                var1 = var2 + var3;
            case 154:
                var0 = var1;
            case 157:
                return var0;
        }
    };
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);