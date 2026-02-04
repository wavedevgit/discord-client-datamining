// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22230: for (var _fun22230_ip = 0;;) switch (_fun22230_ip) {
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
                _fun22230_ip = 77;
                continue _fun22230
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun22230_ip = 86;
                continue _fun22230
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function arg0, arg1() {
                var0 = global;
                var2 = var0.String;
                var1 = undefined;
                var0 = arg0;
                var0 = var2.bind(var1)(var0);
                return var0;
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['p.n.e.', 'n.e.'];
            var5.narrow = var8;
            var8 = ['p.n.e.', 'n.e.'];
            var5.abbreviated = var8;
            var8 = ['przed naszą erą', 'naszej ery'];
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
            var9 = ['I kw.', 'II kw.', 'III kw.', 'IV kw.'];
            var8.abbreviated = var9;
            var9 = ['I kwartał', 'II kwartał', 'III kwartał', 'IV kwartał'];
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
            var8 = ['S', 'L', 'M', 'K', 'M', 'C', 'L', 'S', 'W', 'P', 'L', 'G'];
            var7.narrow = var8;
            var8 = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'];
            var7.abbreviated = var8;
            var8 = ['styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var7 = {};
            var8 = ['s', 'l', 'm', 'k', 'm', 'c', 'l', 's', 'w', 'p', 'l', 'g'];
            var7.narrow = var8;
            var8 = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'];
            var7.abbreviated = var8;
            var8 = ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'];
            var7.wide = var8;
            var4.formattingValues = var7;
            var4.defaultFormattingWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'];
            var7.narrow = var8;
            var8 = ['nie', 'pon', 'wto', 'śro', 'czw', 'pią', 'sob'];
            var7.short = var8;
            var8 = ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'];
            var7.abbreviated = var8;
            var8 = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var7 = {};
            var8 = ['n', 'p', 'w', 'ś', 'c', 'p', 's'];
            var7.narrow = var8;
            var8 = ['nie', 'pon', 'wto', 'śro', 'czw', 'pią', 'sob'];
            var7.short = var8;
            var8 = ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'];
            var7.abbreviated = var8;
            var8 = ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'];
            var7.wide = var8;
            var4.formattingValues = var7;
            var4.defaultFormattingWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'a',
                'pm': 'p',
                'midnight': 'półn.',
                'noon': 'poł',
                'morning': 'rano',
                'afternoon': 'popoł.',
                'evening': 'wiecz.',
                'night': 'noc'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'północ',
                'noon': 'południe',
                'morning': 'rano',
                'afternoon': 'popołudnie',
                'evening': 'wieczór',
                'night': 'noc'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'północ',
                'noon': 'południe',
                'morning': 'rano',
                'afternoon': 'popołudnie',
                'evening': 'wieczór',
                'night': 'noc'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var6 = {};
            var7 = {
                'am': 'a',
                'pm': 'p',
                'midnight': 'o półn.',
                'noon': 'w poł.',
                'morning': 'rano',
                'afternoon': 'po poł.',
                'evening': 'wiecz.',
                'night': 'w nocy'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'o północy',
                'noon': 'w południe',
                'morning': 'rano',
                'afternoon': 'po południu',
                'evening': 'wieczorem',
                'night': 'w nocy'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'o północy',
                'noon': 'w południe',
                'morning': 'rano',
                'afternoon': 'po południu',
                'evening': 'wieczorem',
                'night': 'w nocy'
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [1693]);