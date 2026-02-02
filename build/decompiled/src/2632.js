// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22035: for (var _fun22035_ip = 0;;) switch (_fun22035_ip) {
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
                _fun22035_ip = 77;
                continue _fun22035
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun22035_ip = 86;
                continue _fun22035
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function arg0, arg1() {
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
            var8 = ['f.Kr.', 'e.Kr.'];
            var5.narrow = var8;
            var8 = ['f.Kr.', 'e.Kr.'];
            var5.abbreviated = var8;
            var8 = ['før Kristus', 'etter Kristus'];
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
            var9 = ['1. kvartal', '2. kvartal', '3. kvartal', '4. kvartal'];
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
            var8 = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
            var7.narrow = var8;
            var8 = ['jan.', 'feb.', 'mars', 'apr.', 'mai', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'des.'];
            var7.abbreviated = var8;
            var8 = ['januar', 'februar', 'mars', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'desember'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['S', 'M', 'T', 'O', 'T', 'F', 'L'];
            var7.narrow = var8;
            var8 = ['sø', 'ma', 'ti', 'on', 'to', 'fr', 'lø'];
            var7.short = var8;
            var8 = ['søn', 'man', 'tir', 'ons', 'tor', 'fre', 'lør'];
            var7.abbreviated = var8;
            var8 = ['søndag', 'mandag', 'tirsdag', 'onsdag', 'torsdag', 'fredag', 'lørdag'];
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
                'midnight': 'midnatt',
                'noon': 'middag',
                'morning': 'på morg.',
                'afternoon': 'på etterm.',
                'evening': 'på kvelden',
                'night': 'på natten'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'a.m.',
                'pm': 'p.m.',
                'midnight': 'midnatt',
                'noon': 'middag',
                'morning': 'på morg.',
                'afternoon': 'på etterm.',
                'evening': 'på kvelden',
                'night': 'på natten'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'a.m.',
                'pm': 'p.m.',
                'midnight': 'midnatt',
                'noon': 'middag',
                'morning': 'på morgenen',
                'afternoon': 'på ettermiddagen',
                'evening': 'på kvelden',
                'night': 'på natten'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var3 = var4.bind(var0)(var3);
            var2.dayPeriod = var3;
            var1.default = var2;
            var2 = var1.default;
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1684]);