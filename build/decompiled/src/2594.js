// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun21937: for (var _fun21937_ip = 0;;) switch (_fun21937_ip) {
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
                _fun21937_ip = 77;
                continue _fun21937
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun21937_ip = 86;
                continue _fun21937
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function(arg0, arg1) { // Original name: ordinalNumber, environment: var7
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
            var8 = ['ie.', 'isz.'];
            var5.narrow = var8;
            var8 = ['i. e.', 'i. sz.'];
            var5.abbreviated = var8;
            var8 = ['Krisztus előtt', 'időszámításunk szerint'];
            var5.wide = var8;
            var4.values = var5;
            var5 = 'wide';
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.era = var4;
            var6 = var3.default;
            var4 = {};
            var8 = {};
            var9 = ['1.', '2.', '3.', '4.'];
            var8.narrow = var9;
            var9 = ['1. n.év', '2. n.év', '3. n.év', '4. n.év'];
            var8.abbreviated = var9;
            var9 = ['1. negyedév', '2. negyedév', '3. negyedév', '4. negyedév'];
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
            var7 = {};
            var8 = ['I.', 'II.', 'III.', 'IV.'];
            var7.narrow = var8;
            var8 = ['I. n.év', 'II. n.év', 'III. n.év', 'IV. n.év'];
            var7.abbreviated = var8;
            var8 = ['I. negyedév', 'II. negyedév', 'III. negyedév', 'IV. negyedév'];
            var7.wide = var8;
            var4.formattingValues = var7;
            var4.defaultFormattingWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.quarter = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['J', 'F', 'M', 'Á', 'M', 'J', 'J', 'A', 'Sz', 'O', 'N', 'D'];
            var7.narrow = var8;
            var8 = ['jan.', 'febr.', 'márc.', 'ápr.', 'máj.', 'jún.', 'júl.', 'aug.', 'szept.', 'okt.', 'nov.', 'dec.'];
            var7.abbreviated = var8;
            var8 = ['január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['V', 'H', 'K', 'Sz', 'Cs', 'P', 'Sz'];
            var7.narrow = var8;
            var8 = ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'];
            var7.short = var8;
            var8 = ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'];
            var7.abbreviated = var8;
            var8 = ['vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'de.',
                'pm': 'du.',
                'midnight': 'éjfél',
                'noon': 'dél',
                'morning': 'reggel',
                'afternoon': 'du.',
                'evening': 'este',
                'night': 'éjjel'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'de.',
                'pm': 'du.',
                'midnight': 'éjfél',
                'noon': 'dél',
                'morning': 'reggel',
                'afternoon': 'du.',
                'evening': 'este',
                'night': 'éjjel'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'de.',
                'pm': 'du.',
                'midnight': 'éjfél',
                'noon': 'dél',
                'morning': 'reggel',
                'afternoon': 'délután',
                'evening': 'este',
                'night': 'éjjel'
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