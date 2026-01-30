// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun21837: for (var _fun21837_ip = 0;;) switch (_fun21837_ip) {
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
                _fun21837_ip = 77;
                continue _fun21837
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun21837_ip = 86;
                continue _fun21837
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var8 = {};
            var2 = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
            var8.narrow = var2;
            var2 = ['Jan', 'Feb', 'Mär', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'];
            var8.abbreviated = var2;
            var2 = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
            var8.wide = var2;
            var7 = {};
            var2 = var8.narrow;
            var7.narrow = var2;
            var2 = ['Jan.', 'Feb.', 'März', 'Apr.', 'Mai', 'Juni', 'Juli', 'Aug.', 'Sep.', 'Okt.', 'Nov.', 'Dez.'];
            var7.abbreviated = var2;
            var2 = var8.wide;
            var7.wide = var2;
            var2 = {};
            var4 = function(arg0) { // Original name: ordinalNumber, environment: var9
                var0 = global;
                var2 = var0.Number;
                var1 = undefined;
                var0 = arg0;
                var1 = var2.bind(var1)(var0);
                var0 = '.';
                var0 = var1 + var0;
                return var0;
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var10 = ['v.Chr.', 'n.Chr.'];
            var5.narrow = var10;
            var10 = ['v.Chr.', 'n.Chr.'];
            var5.abbreviated = var10;
            var10 = ['vor Christus', 'nach Christus'];
            var5.wide = var10;
            var4.values = var5;
            var5 = 'wide';
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.era = var4;
            var6 = var3.default;
            var4 = {};
            var10 = {};
            var11 = ['1', '2', '3', '4'];
            var10.narrow = var11;
            var11 = ['Q1', 'Q2', 'Q3', 'Q4'];
            var10.abbreviated = var11;
            var11 = ['1. Quartal', '2. Quartal', '3. Quartal', '4. Quartal'];
            var10.wide = var11;
            var4.values = var10;
            var4.defaultWidth = var5;
            var9 = function(arg0) { // Original name: argumentCallback, environment: var9
                var1 = arg0;
                var0 = 1;
                var0 = var1 - var0;
                return var0;
            };
            var4.argumentCallback = var9;
            var4 = var6.bind(var0)(var4);
            var2.quarter = var4;
            var6 = var3.default;
            var4 = {};
            var4.values = var8;
            var4.formattingValues = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['S', 'M', 'D', 'M', 'D', 'F', 'S'];
            var7.narrow = var8;
            var8 = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
            var7.short = var8;
            var8 = ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'];
            var7.abbreviated = var8;
            var8 = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'vm.',
                'pm': 'nm.',
                'midnight': 'Mitternacht',
                'noon': 'Mittag',
                'morning': 'Morgen',
                'afternoon': 'Nachm.',
                'evening': 'Abend',
                'night': 'Nacht'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'vorm.',
                'pm': 'nachm.',
                'midnight': 'Mitternacht',
                'noon': 'Mittag',
                'morning': 'Morgen',
                'afternoon': 'Nachmittag',
                'evening': 'Abend',
                'night': 'Nacht'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'vormittags',
                'pm': 'nachmittags',
                'midnight': 'Mitternacht',
                'noon': 'Mittag',
                'morning': 'Morgen',
                'afternoon': 'Nachmittag',
                'evening': 'Abend',
                'night': 'Nacht'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var6 = {};
            var7 = {
                'am': 'vm.',
                'pm': 'nm.',
                'midnight': 'Mitternacht',
                'noon': 'Mittag',
                'morning': 'morgens',
                'afternoon': 'nachm.',
                'evening': 'abends',
                'night': 'nachts'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'vorm.',
                'pm': 'nachm.',
                'midnight': 'Mitternacht',
                'noon': 'Mittag',
                'morning': 'morgens',
                'afternoon': 'nachmittags',
                'evening': 'abends',
                'night': 'nachts'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'vormittags',
                'pm': 'nachmittags',
                'midnight': 'Mitternacht',
                'noon': 'Mittag',
                'morning': 'morgens',
                'afternoon': 'nachmittags',
                'evening': 'abends',
                'night': 'nachts'
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