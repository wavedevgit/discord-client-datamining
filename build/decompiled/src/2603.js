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
        'one': '1秒未満',
        'other': '{{count}}秒未満',
        'oneWithSuffix': '約1秒',
        'otherWithSuffix': '約{{count}}秒'
    };
    var3.lessThanXSeconds = var4;
    var4 = {
        'one': '1秒',
        'other': '{{count}}秒'
    };
    var3.xSeconds = var4;
    var4 = '30秒';
    var3.halfAMinute = var4;
    var4 = {
        'one': '1分未満',
        'other': '{{count}}分未満',
        'oneWithSuffix': '約1分',
        'otherWithSuffix': '約{{count}}分'
    };
    var3.lessThanXMinutes = var4;
    var4 = {
        'one': '1分',
        'other': '{{count}}分'
    };
    var3.xMinutes = var4;
    var4 = {
        'one': '約1時間',
        'other': '約{{count}}時間'
    };
    var3.aboutXHours = var4;
    var4 = {
        'one': '1時間',
        'other': '{{count}}時間'
    };
    var3.xHours = var4;
    var4 = {
        'one': '1日',
        'other': '{{count}}日'
    };
    var3.xDays = var4;
    var4 = {
        'one': '約1週間',
        'other': '約{{count}}週間'
    };
    var3.aboutXWeeks = var4;
    var4 = {
        'one': '1週間',
        'other': '{{count}}週間'
    };
    var3.xWeeks = var4;
    var4 = {
        'one': '約1か月',
        'other': '約{{count}}か月'
    };
    var3.aboutXMonths = var4;
    var4 = {
        'one': '1か月',
        'other': '{{count}}か月'
    };
    var3.xMonths = var4;
    var4 = {
        'one': '約1年',
        'other': '約{{count}}年'
    };
    var3.aboutXYears = var4;
    var4 = {
        'one': '1年',
        'other': '{{count}}年'
    };
    var3.xYears = var4;
    var4 = {
        'one': '1年以上',
        'other': '{{count}}年以上'
    };
    var3.overXYears = var4;
    var4 = {
        'one': '1年近く',
        'other': '{{count}}年近く'
    };
    var3.almostXYears = var4;
    var _closure1_slot0 = var3;
    var2 = function(arg0, arg1, arg2) { // Original name: formatDistance, environment: var2
        _fun21966: for (var _fun21966_ip = 0;;) switch (_fun21966_ip) {
            case 0:
                var8 = arg1;
                var1 = arg2;
                if (var1) {
                    _fun21966_ip = 11;
                    continue _fun21966
                }
            case 9:
                var1 = {};
            case 11:
                var2 = _closure1_slot0;
                var0 = arg0;
                var4 = var2[var0];
                var2 = 'string';
                var0 = typeof var4;
                var3 = var4;
                if (!(var2 !== var0)) {
                    _fun21966_ip = 185;
                    continue _fun21966
                }
            case 42:
                var0 = 1;
                if (!(var0 !== var8)) {
                    _fun21966_ip = 147;
                    continue _fun21966
                }
            case 49:
                var0 = var1.addSuffix;
                if (!var0) {
                    _fun21966_ip = 67;
                    continue _fun21966
                }
            case 58:
                var0 = var4.otherWithSuffix;
                if (var0) {
                    _fun21966_ip = 107;
                    continue _fun21966
                }
            case 67:
                var6 = var4.other;
                var5 = var6.replace;
                var0 = global;
                var2 = var0.String;
                var0 = undefined;
                var2 = var2.bind(var0)(var8);
                var0 = '{{count}}';
                var0 = var5.bind(var6)(var0, var2);
                _fun21966_ip = 145;
                continue _fun21966;
            case 107:
                var7 = var4.otherWithSuffix;
                var6 = var7.replace;
                var2 = global;
                var5 = var2.String;
                var2 = undefined;
                var5 = var5.bind(var2)(var8);
                var2 = '{{count}}';
                var0 = var6.bind(var7)(var2, var5);
            case 145:
                _fun21966_ip = 182;
                continue _fun21966;
            case 147:
                var2 = var1.addSuffix;
                if (!var2) {
                    _fun21966_ip = 165;
                    continue _fun21966
                }
            case 156:
                var2 = var4.oneWithSuffix;
                if (var2) {
                    _fun21966_ip = 173;
                    continue _fun21966
                }
            case 165:
                var2 = var4.one;
                _fun21966_ip = 179;
                continue _fun21966;
            case 173:
                var2 = var4.oneWithSuffix;
            case 179:
                var0 = var2;
            case 182:
                var3 = var0;
            case 185:
                var2 = var1.addSuffix;
                var0 = var3;
                if (!var2) {
                    _fun21966_ip = 243;
                    continue _fun21966
                }
            case 197:
                var2 = var1.comparison;
                if (!var2) {
                    _fun21966_ip = 218;
                    continue _fun21966
                }
            case 206:
                var2 = var1.comparison;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun21966_ip = 230;
                    continue _fun21966
                }
            case 218:
                var1 = '前';
                var1 = var3 + var1;
                _fun21966_ip = 240;
                continue _fun21966;
            case 230:
                var2 = '後';
                var1 = var3 + var2;
            case 240:
                var0 = var1;
            case 243:
                return var0;
        }
    };
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);