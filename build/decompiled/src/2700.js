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
        'one': 'mindre än en sekund',
        'other': 'mindre än {{count}} sekunder'
    };
    var3.lessThanXSeconds = var4;
    var4 = {
        'one': 'en sekund',
        'other': '{{count}} sekunder'
    };
    var3.xSeconds = var4;
    var4 = 'en halv minut';
    var3.halfAMinute = var4;
    var4 = {
        'one': 'mindre än en minut',
        'other': 'mindre än {{count}} minuter'
    };
    var3.lessThanXMinutes = var4;
    var4 = {
        'one': 'en minut',
        'other': '{{count}} minuter'
    };
    var3.xMinutes = var4;
    var4 = {
        'one': 'ungefär en timme',
        'other': 'ungefär {{count}} timmar'
    };
    var3.aboutXHours = var4;
    var4 = {
        'one': 'en timme',
        'other': '{{count}} timmar'
    };
    var3.xHours = var4;
    var4 = {
        'one': 'en dag',
        'other': '{{count}} dagar'
    };
    var3.xDays = var4;
    var4 = {
        'one': 'ungefär en vecka',
        'other': 'ungefär {{count}} vecka'
    };
    var3.aboutXWeeks = var4;
    var4 = {
        'one': 'en vecka',
        'other': '{{count}} vecka'
    };
    var3.xWeeks = var4;
    var4 = {
        'one': 'ungefär en månad',
        'other': 'ungefär {{count}} månader'
    };
    var3.aboutXMonths = var4;
    var4 = {
        'one': 'en månad',
        'other': '{{count}} månader'
    };
    var3.xMonths = var4;
    var4 = {
        'one': 'ungefär ett år',
        'other': 'ungefär {{count}} år'
    };
    var3.aboutXYears = var4;
    var4 = {
        'one': 'ett år',
        'other': '{{count}} år'
    };
    var3.xYears = var4;
    var4 = {
        'one': 'över ett år',
        'other': 'över {{count}} år'
    };
    var3.overXYears = var4;
    var4 = {
        'one': 'nästan ett år',
        'other': 'nästan {{count}} år'
    };
    var3.almostXYears = var4;
    var _closure1_slot0 = var3;
    var3 = ['noll', 'en', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio', 'elva', 'tolv'];
    var _closure1_slot1 = var3;
    var2 = function arg0, arg1, arg2() {
        _fun22303: for (var _fun22303_ip = 0;;) switch (_fun22303_ip) {
            case 0:
                var8 = arg1;
                var1 = arg2;
                var3 = _closure1_slot0;
                var2 = arg0;
                var2 = var3[var2];
                var5 = 'string';
                var4 = typeof var2;
                var3 = var2;
                if (!(var5 !== var4)) {
                    _fun22303_ip = 164;
                    continue _fun22303
                }
            case 37:
                var4 = 1;
                if (!(var4 !== var8)) {
                    _fun22303_ip = 155;
                    continue _fun22303
                }
            case 44:
                if (!var1) {
                    _fun22303_ip = 58;
                    continue _fun22303
                }
            case 47:
                var4 = var1.onlyNumeric;
                if (var4) {
                    _fun22303_ip = 115;
                    continue _fun22303
                }
            case 58:
                var6 = var2.other;
                var5 = var6.replace;
                var4 = 13;
                if (!(!(var8 < var4))) {
                    _fun22303_ip = 93;
                    continue _fun22303
                }
            case 76:
                var4 = global;
                var7 = var4.String;
                var4 = undefined;
                var4 = var7.bind(var4)(var8);
                _fun22303_ip = 101;
                continue _fun22303;
            case 93:
                var0 = _closure1_slot1;
                var4 = var0[var8];
            case 101:
                var0 = '{{count}}';
                var0 = var5.bind(var6)(var0, var4);
                _fun22303_ip = 153;
                continue _fun22303;
            case 115:
                var7 = var2.other;
                var6 = var7.replace;
                var4 = global;
                var5 = var4.String;
                var4 = undefined;
                var5 = var5.bind(var4)(var8);
                var4 = '{{count}}';
                var0 = var6.bind(var7)(var4, var5);
            case 153:
                _fun22303_ip = 161;
                continue _fun22303;
            case 155:
                var0 = var2.one;
            case 161:
                var3 = var0;
            case 164:
                var2 = null;
                var0 = var3;
                if (!(var2 != var1)) {
                    _fun22303_ip = 231;
                    continue _fun22303
                }
            case 173:
                var2 = var1.addSuffix;
                var0 = var3;
                if (!var2) {
                    _fun22303_ip = 231;
                    continue _fun22303
                }
            case 185:
                var2 = var1.comparison;
                if (!var2) {
                    _fun22303_ip = 206;
                    continue _fun22303
                }
            case 194:
                var2 = var1.comparison;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun22303_ip = 218;
                    continue _fun22303
                }
            case 206:
                var1 = ' sedan';
                var1 = var3 + var1;
                _fun22303_ip = 228;
                continue _fun22303;
            case 218:
                var2 = 'om ';
                var1 = var2 + var3;
            case 228:
                var0 = var1;
            case 231:
                return var0;
        }
    };
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);