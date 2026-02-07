// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22180: for (var _fun22180_ip = 0;;) switch (_fun22180_ip) {
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
                _fun22180_ip = 77;
                continue _fun22180
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun22180_ip = 86;
                continue _fun22180
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function arg0, arg1() {
                _fun22181: for (var _fun22181_ip = 0;;) switch (_fun22181_ip) {
                    case 0:
                        var5 = arg1;
                        var0 = global;
                        var3 = var0.Number;
                        var2 = undefined;
                        var1 = arg0;
                        var1 = var3.bind(var2)(var1);
                        var4 = var0.String;
                        var3 = null;
                        var6 = var3 == var5;
                        var3 = undefined;
                        if (var6) {
                            _fun22181_ip = 44;
                            continue _fun22181
                        }
                    case 38:
                        var3 = var5.unit;
                    case 44:
                        var4 = var4.bind(var2)(var3);
                        var3 = 'minute';
                        if (!(var3 !== var4)) {
                            _fun22181_ip = 97;
                            continue _fun22181
                        }
                    case 57:
                        var3 = 'second';
                        if (!(var3 !== var4)) {
                            _fun22181_ip = 97;
                            continue _fun22181
                        }
                    case 65:
                        var3 = 'date';
                        if (!(var3 !== var4)) {
                            _fun22181_ip = 85;
                            continue _fun22181
                        }
                    case 73:
                        var3 = '번째';
                        var3 = var1 + var3;
                        return var3;
                    case 85:
                        var3 = '일';
                        var3 = var1 + var3;
                        return var3;
                    case 97:
                        var0 = var0.String;
                        var0 = var0.bind(var2)(var1);
                        return var0;
                }
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['BC', 'AD'];
            var5.narrow = var8;
            var8 = ['BC', 'AD'];
            var5.abbreviated = var8;
            var8 = ['기원전', '서기'];
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
            var9 = ['1분기', '2분기', '3분기', '4분기'];
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
            var8 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
            var7.narrow = var8;
            var8 = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
            var7.abbreviated = var8;
            var8 = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['일', '월', '화', '수', '목', '금', '토'];
            var7.narrow = var8;
            var8 = ['일', '월', '화', '수', '목', '금', '토'];
            var7.short = var8;
            var8 = ['일', '월', '화', '수', '목', '금', '토'];
            var7.abbreviated = var8;
            var8 = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': '오전',
                'pm': '오후',
                'midnight': '자정',
                'noon': '정오',
                'morning': '아침',
                'afternoon': '오후',
                'evening': '저녁',
                'night': '밤'
            };
            var6.narrow = var7;
            var7 = {
                'am': '오전',
                'pm': '오후',
                'midnight': '자정',
                'noon': '정오',
                'morning': '아침',
                'afternoon': '오후',
                'evening': '저녁',
                'night': '밤'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': '오전',
                'pm': '오후',
                'midnight': '자정',
                'noon': '정오',
                'morning': '아침',
                'afternoon': '오후',
                'evening': '저녁',
                'night': '밤'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var6 = {};
            var7 = {
                'am': '오전',
                'pm': '오후',
                'midnight': '자정',
                'noon': '정오',
                'morning': '아침',
                'afternoon': '오후',
                'evening': '저녁',
                'night': '밤'
            };
            var6.narrow = var7;
            var7 = {
                'am': '오전',
                'pm': '오후',
                'midnight': '자정',
                'noon': '정오',
                'morning': '아침',
                'afternoon': '오후',
                'evening': '저녁',
                'night': '밤'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': '오전',
                'pm': '오후',
                'midnight': '자정',
                'noon': '정오',
                'morning': '아침',
                'afternoon': '오후',
                'evening': '저녁',
                'night': '밤'
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [1695]);