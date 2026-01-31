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
        'one': '少於 1 秒',
        'other': '少於 {{count}} 秒'
    };
    var3.lessThanXSeconds = var4;
    var4 = {
        'one': '1 秒',
        'other': '{{count}} 秒'
    };
    var3.xSeconds = var4;
    var4 = '半分鐘';
    var3.halfAMinute = var4;
    var4 = {
        'one': '少於 1 分鐘',
        'other': '少於 {{count}} 分鐘'
    };
    var3.lessThanXMinutes = var4;
    var4 = {
        'one': '1 分鐘',
        'other': '{{count}} 分鐘'
    };
    var3.xMinutes = var4;
    var4 = {
        'one': '1 小時',
        'other': '{{count}} 小時'
    };
    var3.xHours = var4;
    var4 = {
        'one': '大約 1 小時',
        'other': '大約 {{count}} 小時'
    };
    var3.aboutXHours = var4;
    var4 = {
        'one': '1 天',
        'other': '{{count}} 天'
    };
    var3.xDays = var4;
    var4 = {
        'one': '大約 1 個星期',
        'other': '大約 {{count}} 個星期'
    };
    var3.aboutXWeeks = var4;
    var4 = {
        'one': '1 個星期',
        'other': '{{count}} 個星期'
    };
    var3.xWeeks = var4;
    var4 = {
        'one': '大約 1 個月',
        'other': '大約 {{count}} 個月'
    };
    var3.aboutXMonths = var4;
    var4 = {
        'one': '1 個月',
        'other': '{{count}} 個月'
    };
    var3.xMonths = var4;
    var4 = {
        'one': '大約 1 年',
        'other': '大約 {{count}} 年'
    };
    var3.aboutXYears = var4;
    var4 = {
        'one': '1 年',
        'other': '{{count}} 年'
    };
    var3.xYears = var4;
    var4 = {
        'one': '超過 1 年',
        'other': '超過 {{count}} 年'
    };
    var3.overXYears = var4;
    var4 = {
        'one': '將近 1 年',
        'other': '將近 {{count}} 年'
    };
    var3.almostXYears = var4;
    var _closure1_slot0 = var3;
    var2 = function arg0, arg1, arg2() {
        _fun23952: for (var _fun23952_ip = 0;;) switch (_fun23952_ip) {
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
                    _fun23952_ip = 90;
                    continue _fun23952
                }
            case 34:
                var0 = 1;
                if (!(var0 !== var7)) {
                    _fun23952_ip = 81;
                    continue _fun23952
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
                _fun23952_ip = 87;
                continue _fun23952;
            case 81:
                var0 = var2.one;
            case 87:
                var3 = var0;
            case 90:
                var2 = null;
                var0 = var3;
                if (!(var2 != var1)) {
                    _fun23952_ip = 157;
                    continue _fun23952
                }
            case 99:
                var2 = var1.addSuffix;
                var0 = var3;
                if (!var2) {
                    _fun23952_ip = 157;
                    continue _fun23952
                }
            case 111:
                var2 = var1.comparison;
                if (!var2) {
                    _fun23952_ip = 132;
                    continue _fun23952
                }
            case 120:
                var2 = var1.comparison;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun23952_ip = 144;
                    continue _fun23952
                }
            case 132:
                var1 = '前';
                var1 = var3 + var1;
                _fun23952_ip = 154;
                continue _fun23952;
            case 144:
                var2 = '內';
                var1 = var3 + var2;
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