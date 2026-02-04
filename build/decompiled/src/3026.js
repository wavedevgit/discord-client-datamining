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
        'one': '不到 1 秒',
        'other': '不到 {{count}} 秒'
    };
    var3.lessThanXSeconds = var4;
    var4 = {
        'one': '1 秒',
        'other': '{{count}} 秒'
    };
    var3.xSeconds = var4;
    var4 = '半分钟';
    var3.halfAMinute = var4;
    var4 = {
        'one': '不到 1 分钟',
        'other': '不到 {{count}} 分钟'
    };
    var3.lessThanXMinutes = var4;
    var4 = {
        'one': '1 分钟',
        'other': '{{count}} 分钟'
    };
    var3.xMinutes = var4;
    var4 = {
        'one': '1 小时',
        'other': '{{count}} 小时'
    };
    var3.xHours = var4;
    var4 = {
        'one': '大约 1 小时',
        'other': '大约 {{count}} 小时'
    };
    var3.aboutXHours = var4;
    var4 = {
        'one': '1 天',
        'other': '{{count}} 天'
    };
    var3.xDays = var4;
    var4 = {
        'one': '大约 1 个星期',
        'other': '大约 {{count}} 个星期'
    };
    var3.aboutXWeeks = var4;
    var4 = {
        'one': '1 个星期',
        'other': '{{count}} 个星期'
    };
    var3.xWeeks = var4;
    var4 = {
        'one': '大约 1 个月',
        'other': '大约 {{count}} 个月'
    };
    var3.aboutXMonths = var4;
    var4 = {
        'one': '1 个月',
        'other': '{{count}} 个月'
    };
    var3.xMonths = var4;
    var4 = {
        'one': '大约 1 年',
        'other': '大约 {{count}} 年'
    };
    var3.aboutXYears = var4;
    var4 = {
        'one': '1 年',
        'other': '{{count}} 年'
    };
    var3.xYears = var4;
    var4 = {
        'one': '超过 1 年',
        'other': '超过 {{count}} 年'
    };
    var3.overXYears = var4;
    var4 = {
        'one': '将近 1 年',
        'other': '将近 {{count}} 年'
    };
    var3.almostXYears = var4;
    var _closure1_slot0 = var3;
    var2 = function arg0, arg1, arg2() {
        _fun24120: for (var _fun24120_ip = 0;;) switch (_fun24120_ip) {
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
                    _fun24120_ip = 90;
                    continue _fun24120
                }
            case 34:
                var0 = 1;
                if (!(var0 !== var7)) {
                    _fun24120_ip = 81;
                    continue _fun24120
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
                _fun24120_ip = 87;
                continue _fun24120;
            case 81:
                var0 = var2.one;
            case 87:
                var3 = var0;
            case 90:
                var2 = null;
                var0 = var3;
                if (!(var2 != var1)) {
                    _fun24120_ip = 157;
                    continue _fun24120
                }
            case 99:
                var2 = var1.addSuffix;
                var0 = var3;
                if (!var2) {
                    _fun24120_ip = 157;
                    continue _fun24120
                }
            case 111:
                var2 = var1.comparison;
                if (!var2) {
                    _fun24120_ip = 132;
                    continue _fun24120
                }
            case 120:
                var2 = var1.comparison;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun24120_ip = 144;
                    continue _fun24120
                }
            case 132:
                var1 = '前';
                var1 = var3 + var1;
                _fun24120_ip = 154;
                continue _fun24120;
            case 144:
                var2 = '内';
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