// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun19195: for (var _fun19195_ip = 0;;) switch (_fun19195_ip) {
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
                _fun19195_ip = 77;
                continue _fun19195
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun19195_ip = 86;
                continue _fun19195
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function(arg0, arg1) { // Original name: ordinalNumber, environment: var7
                _fun19196: for (var _fun19196_ip = 0;;) switch (_fun19196_ip) {
                    case 0:
                        var0 = global;
                        var2 = var0.Number;
                        var1 = undefined;
                        var0 = arg0;
                        var1 = var2.bind(var1)(var0);
                        var0 = 100;
                        var2 = var1 % var0;
                        var0 = 20;
                        if (!(!(var2 > var0))) {
                            _fun19196_ip = 39;
                            continue _fun19196
                        }
                    case 32:
                        var0 = 10;
                        if (!(var2 < var0)) {
                            _fun19196_ip = 67;
                            continue _fun19196
                        }
                    case 39:
                        var0 = 10;
                        var2 = var2 % var0;
                        var0 = 1;
                        if (!(var0 !== var2)) {
                            _fun19196_ip = 99;
                            continue _fun19196
                        }
                    case 53:
                        var0 = 2;
                        if (!(var0 !== var2)) {
                            _fun19196_ip = 89;
                            continue _fun19196
                        }
                    case 60:
                        var0 = 3;
                        if (!(var0 !== var2)) {
                            _fun19196_ip = 77;
                            continue _fun19196
                        }
                    case 67:
                        var0 = 'th';
                        var0 = var1 + var0;
                        return var0;
                    case 77:
                        var0 = 'rd';
                        var0 = var1 + var0;
                        return var0;
                    case 89:
                        var0 = 'nd';
                        var0 = var1 + var0;
                        return var0;
                    case 99:
                        var0 = 'st';
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['B', 'A'];
            var5.narrow = var8;
            var8 = ['BC', 'AD'];
            var5.abbreviated = var8;
            var8 = ['Before Christ', 'Anno Domini'];
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
            var9 = ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'];
            var8.wide = var9;
            var4.values = var8;
            var4.defaultWidth = var5;
            var7 = function(arg0) { // Original name: argumentCallback, environment: var7
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
            var8 = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
            var7.narrow = var8;
            var8 = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            var7.abbreviated = var8;
            var8 = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
            var7.narrow = var8;
            var8 = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
            var7.short = var8;
            var8 = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
            var7.abbreviated = var8;
            var8 = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'a',
                'pm': 'p',
                'midnight': 'mi',
                'noon': 'n',
                'morning': 'morning',
                'afternoon': 'afternoon',
                'evening': 'evening',
                'night': 'night'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'midnight',
                'noon': 'noon',
                'morning': 'morning',
                'afternoon': 'afternoon',
                'evening': 'evening',
                'night': 'night'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'a.m.',
                'pm': 'p.m.',
                'midnight': 'midnight',
                'noon': 'noon',
                'morning': 'morning',
                'afternoon': 'afternoon',
                'evening': 'evening',
                'night': 'night'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var6 = {};
            var7 = {
                'am': 'a',
                'pm': 'p',
                'midnight': 'mi',
                'noon': 'n',
                'morning': 'in the morning',
                'afternoon': 'in the afternoon',
                'evening': 'in the evening',
                'night': 'at night'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'midnight',
                'noon': 'noon',
                'morning': 'in the morning',
                'afternoon': 'in the afternoon',
                'evening': 'in the evening',
                'night': 'at night'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'a.m.',
                'pm': 'p.m.',
                'midnight': 'midnight',
                'noon': 'noon',
                'morning': 'in the morning',
                'afternoon': 'in the afternoon',
                'evening': 'in the evening',
                'night': 'at night'
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