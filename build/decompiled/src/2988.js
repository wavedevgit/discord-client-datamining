// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun23942: for (var _fun23942_ip = 0;;) switch (_fun23942_ip) {
        case 0:
            var1 = exports;
            var0 = global;
            var4 = var0.Object;
            var3 = var4.defineProperty;
            var2 = {};
            var0 = true;
            var2.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var4)(var1, var0, var2);
            var0 = undefined;
            var1.default = var0;
            var3 = dependencyMap;
            var2 = 0;
            var3 = var3[var2];
            var2 = require;
            var4 = var2.bind(var0)(var3);
            if (!var4) {
                _fun23942_ip = 77;
                continue _fun23942
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun23942_ip = 86;
                continue _fun23942
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function arg0, arg1() {
                _fun23943: for (var _fun23943_ip = 0;;) switch (_fun23943_ip) {
                    case 0:
                        var0 = arg1;
                        var1 = global;
                        var3 = var1.Number;
                        var2 = undefined;
                        var1 = arg0;
                        var1 = var3.bind(var2)(var1);
                        var3 = null;
                        var3 = var3 == var0;
                        if (var3) {
                            _fun23943_ip = 36;
                            continue _fun23943
                        }
                    case 30:
                        var2 = var0.unit;
                    case 36:
                        var0 = 'date';
                        if (!(var0 !== var2)) {
                            _fun23943_ip = 152;
                            continue _fun23943
                        }
                    case 44:
                        var0 = 'hour';
                        if (!(var0 !== var2)) {
                            _fun23943_ip = 131;
                            continue _fun23943
                        }
                    case 52:
                        var0 = 'minute';
                        if (!(var0 !== var2)) {
                            _fun23943_ip = 110;
                            continue _fun23943
                        }
                    case 60:
                        var0 = 'second';
                        if (!(var0 !== var2)) {
                            _fun23943_ip = 89;
                            continue _fun23943
                        }
                    case 68:
                        var0 = var1.toString;
                        var2 = var0.bind(var1)();
                        var0 = '第 ';
                        var0 = var0 + var2;
                        return var0;
                    case 89:
                        var0 = var1.toString;
                        var2 = var0.bind(var1)();
                        var0 = '秒';
                        var0 = var2 + var0;
                        return var0;
                    case 110:
                        var0 = var1.toString;
                        var2 = var0.bind(var1)();
                        var0 = '分';
                        var0 = var2 + var0;
                        return var0;
                    case 131:
                        var0 = var1.toString;
                        var2 = var0.bind(var1)();
                        var0 = '时';
                        var0 = var2 + var0;
                        return var0;
                    case 152:
                        var0 = var1.toString;
                        var1 = var0.bind(var1)();
                        var0 = '日';
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['前', '公元'];
            var5.narrow = var8;
            var8 = ['前', '公元'];
            var5.abbreviated = var8;
            var8 = ['公元前', '公元'];
            var5.wide = var8;
            var4.values = var5;
            var5 = 'wide';
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.era = var4;
            var6 = var3.default;
            var4 = {};
            var8 = {};
            var9 = ['1', '2', '3', '4'];
            var8.narrow = var9;
            var9 = ['第一季', '第二季', '第三季', '第四季'];
            var8.abbreviated = var9;
            var9 = ['第一季度', '第二季度', '第三季度', '第四季度'];
            var8.wide = var9;
            var4.values = var8;
            var4.defaultWidth = var5;
            var7 = function arg0() {
                var1 = arg0;
                var0 = 1;
                var0 = var1 - var0;
                return var0;
            };
            var4.argumentCallback = var7;
            var4 = var6.bind(var0)(var4);
            var2.quarter = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
            var7.narrow = var8;
            var8 = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
            var7.abbreviated = var8;
            var8 = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['日', '一', '二', '三', '四', '五', '六'];
            var7.narrow = var8;
            var8 = ['日', '一', '二', '三', '四', '五', '六'];
            var7.short = var8;
            var8 = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
            var7.abbreviated = var8;
            var8 = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': '上',
                'pm': '下',
                'midnight': '凌晨',
                'noon': '午',
                'morning': '早',
                'afternoon': '下午',
                'evening': '晚',
                'night': '夜'
            };
            var6.narrow = var7;
            var7 = {
                'am': '上午',
                'pm': '下午',
                'midnight': '凌晨',
                'noon': '中午',
                'morning': '早晨',
                'afternoon': '中午',
                'evening': '晚上',
                'night': '夜间'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': '上午',
                'pm': '下午',
                'midnight': '凌晨',
                'noon': '中午',
                'morning': '早晨',
                'afternoon': '中午',
                'evening': '晚上',
                'night': '夜间'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var6 = {};
            var7 = {
                'am': '上',
                'pm': '下',
                'midnight': '凌晨',
                'noon': '午',
                'morning': '早',
                'afternoon': '下午',
                'evening': '晚',
                'night': '夜'
            };
            var6.narrow = var7;
            var7 = {
                'am': '上午',
                'pm': '下午',
                'midnight': '凌晨',
                'noon': '中午',
                'morning': '早晨',
                'afternoon': '中午',
                'evening': '晚上',
                'night': '夜间'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': '上午',
                'pm': '下午',
                'midnight': '凌晨',
                'noon': '中午',
                'morning': '早晨',
                'afternoon': '中午',
                'evening': '晚上',
                'night': '夜间'
            };
            var6.wide = var7;
            var3.formattingValues = var6;
            var3.defaultFormattingWidth = var5;
            var3 = var4.bind(var0)(var3);
            var2.dayPeriod = var3;
            var1.default = var2;
            var2 = var1.default;
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1684]);