// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun21970: for (var _fun21970_ip = 0;;) switch (_fun21970_ip) {
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
                _fun21970_ip = 77;
                continue _fun21970
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun21970_ip = 86;
                continue _fun21970
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function(arg0, arg1) { // Original name: ordinalNumber, environment: var7
                _fun21971: for (var _fun21971_ip = 0;;) switch (_fun21971_ip) {
                    case 0:
                        var4 = arg1;
                        var0 = global;
                        var3 = var0.Number;
                        var2 = undefined;
                        var1 = arg0;
                        var3 = var3.bind(var2)(var1);
                        var1 = var0.String;
                        var0 = null;
                        var5 = var0 == var4;
                        var0 = undefined;
                        if (var5) {
                            _fun21971_ip = 44;
                            continue _fun21971
                        }
                    case 38:
                        var0 = var4.unit;
                    case 44:
                        var1 = var1.bind(var2)(var0);
                        var0 = 'year';
                        if (!(var0 !== var1)) {
                            _fun21971_ip = 306;
                            continue _fun21971
                        }
                    case 60:
                        var0 = 'quarter';
                        if (!(var0 !== var1)) {
                            _fun21971_ip = 281;
                            continue _fun21971
                        }
                    case 71:
                        var0 = 'month';
                        if (!(var0 !== var1)) {
                            _fun21971_ip = 258;
                            continue _fun21971
                        }
                    case 82:
                        var0 = 'week';
                        if (!(var0 !== var1)) {
                            _fun21971_ip = 233;
                            continue _fun21971
                        }
                    case 93:
                        var0 = 'date';
                        if (!(var0 !== var1)) {
                            _fun21971_ip = 210;
                            continue _fun21971
                        }
                    case 101:
                        var0 = 'hour';
                        if (!(var0 !== var1)) {
                            _fun21971_ip = 187;
                            continue _fun21971
                        }
                    case 109:
                        var0 = 'minute';
                        if (!(var0 !== var1)) {
                            _fun21971_ip = 164;
                            continue _fun21971
                        }
                    case 117:
                        var0 = 'second';
                        if (!(var0 !== var1)) {
                            _fun21971_ip = 141;
                            continue _fun21971
                        }
                    case 125:
                        var1 = '';
                        var0 = var1.concat;
                        var0 = var0.bind(var1)(var3);
                        return var0;
                    case 141:
                        var2 = '';
                        var1 = var2.concat;
                        var0 = '秒';
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                    case 164:
                        var2 = '';
                        var1 = var2.concat;
                        var0 = '分';
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                    case 187:
                        var2 = '';
                        var1 = var2.concat;
                        var0 = '時';
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                    case 210:
                        var2 = '';
                        var1 = var2.concat;
                        var0 = '日';
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                    case 233:
                        var2 = '第';
                        var1 = var2.concat;
                        var0 = '週';
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                    case 258:
                        var2 = '';
                        var1 = var2.concat;
                        var0 = '月';
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                    case 281:
                        var2 = '第';
                        var1 = var2.concat;
                        var0 = '四半期';
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                    case 306:
                        var2 = '';
                        var1 = var2.concat;
                        var0 = '年';
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                }
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['BC', 'AC'];
            var5.narrow = var8;
            var8 = ['紀元前', '西暦'];
            var5.abbreviated = var8;
            var8 = ['紀元前', '西暦'];
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
            var9 = ['Q1', 'Q2', 'Q3', 'Q4'];
            var8.abbreviated = var9;
            var9 = ['第1四半期', '第2四半期', '第3四半期', '第4四半期'];
            var8.wide = var9;
            var4.values = var8;
            var4.defaultWidth = var5;
            var7 = function(arg0) { // Original name: argumentCallback, environment: var7
                var0 = global;
                var2 = var0.Number;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
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
            var8 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
            var7.narrow = var8;
            var8 = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
            var7.abbreviated = var8;
            var8 = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['日', '月', '火', '水', '木', '金', '土'];
            var7.narrow = var8;
            var8 = ['日', '月', '火', '水', '木', '金', '土'];
            var7.short = var8;
            var8 = ['日', '月', '火', '水', '木', '金', '土'];
            var7.abbreviated = var8;
            var8 = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': '午前',
                'pm': '午後',
                'midnight': '深夜',
                'noon': '正午',
                'morning': '朝',
                'afternoon': '午後',
                'evening': '夜',
                'night': '深夜'
            };
            var6.narrow = var7;
            var7 = {
                'am': '午前',
                'pm': '午後',
                'midnight': '深夜',
                'noon': '正午',
                'morning': '朝',
                'afternoon': '午後',
                'evening': '夜',
                'night': '深夜'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': '午前',
                'pm': '午後',
                'midnight': '深夜',
                'noon': '正午',
                'morning': '朝',
                'afternoon': '午後',
                'evening': '夜',
                'night': '深夜'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var6 = {};
            var7 = {
                'am': '午前',
                'pm': '午後',
                'midnight': '深夜',
                'noon': '正午',
                'morning': '朝',
                'afternoon': '午後',
                'evening': '夜',
                'night': '深夜'
            };
            var6.narrow = var7;
            var7 = {
                'am': '午前',
                'pm': '午後',
                'midnight': '深夜',
                'noon': '正午',
                'morning': '朝',
                'afternoon': '午後',
                'evening': '夜',
                'night': '深夜'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': '午前',
                'pm': '午後',
                'midnight': '深夜',
                'noon': '正午',
                'morning': '朝',
                'afternoon': '午後',
                'evening': '夜',
                'night': '深夜'
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