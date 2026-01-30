// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22137: for (var _fun22137_ip = 0;;) switch (_fun22137_ip) {
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
                _fun22137_ip = 77;
                continue _fun22137
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun22137_ip = 86;
                continue _fun22137
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
            var8 = ['MÖ', 'MS'];
            var5.narrow = var8;
            var8 = ['MÖ', 'MS'];
            var5.abbreviated = var8;
            var8 = ['Milattan Önce', 'Milattan Sonra'];
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
            var9 = ['1Ç', '2Ç', '3Ç', '4Ç'];
            var8.abbreviated = var9;
            var9 = ['İlk çeyrek', 'İkinci Çeyrek', 'Üçüncü çeyrek', 'Son çeyrek'];
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
            var8 = ['O', 'Ş', 'M', 'N', 'M', 'H', 'T', 'A', 'E', 'E', 'K', 'A'];
            var7.narrow = var8;
            var8 = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];
            var7.abbreviated = var8;
            var8 = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['P', 'P', 'S', 'Ç', 'P', 'C', 'C'];
            var7.narrow = var8;
            var8 = ['Pz', 'Pt', 'Sa', 'Ça', 'Pe', 'Cu', 'Ct'];
            var7.short = var8;
            var8 = ['Paz', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cts'];
            var7.abbreviated = var8;
            var8 = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'öö',
                'pm': 'ös',
                'midnight': 'gy',
                'noon': 'ö',
                'morning': 'sa',
                'afternoon': 'ös',
                'evening': 'ak',
                'night': 'ge'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'ÖÖ',
                'pm': 'ÖS',
                'midnight': 'gece yarısı',
                'noon': 'öğle',
                'morning': 'sabah',
                'afternoon': 'öğleden sonra',
                'evening': 'akşam',
                'night': 'gece'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'Ö.Ö.',
                'pm': 'Ö.S.',
                'midnight': 'gece yarısı',
                'noon': 'öğle',
                'morning': 'sabah',
                'afternoon': 'öğleden sonra',
                'evening': 'akşam',
                'night': 'gece'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var6 = {};
            var7 = {
                'am': 'öö',
                'pm': 'ös',
                'midnight': 'gy',
                'noon': 'ö',
                'morning': 'sa',
                'afternoon': 'ös',
                'evening': 'ak',
                'night': 'ge'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'ÖÖ',
                'pm': 'ÖS',
                'midnight': 'gece yarısı',
                'noon': 'öğlen',
                'morning': 'sabahleyin',
                'afternoon': 'öğleden sonra',
                'evening': 'akşamleyin',
                'night': 'geceleyin'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'ö.ö.',
                'pm': 'ö.s.',
                'midnight': 'gece yarısı',
                'noon': 'öğlen',
                'morning': 'sabahleyin',
                'afternoon': 'öğleden sonra',
                'evening': 'akşamleyin',
                'night': 'geceleyin'
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