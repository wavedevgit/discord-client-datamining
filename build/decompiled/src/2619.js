// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22089: for (var _fun22089_ip = 0;;) switch (_fun22089_ip) {
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
                _fun22089_ip = 77;
                continue _fun22089
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun22089_ip = 86;
                continue _fun22089
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var10 = {};
            var2 = ['T', 'H', 'M', 'H', 'T', 'K', 'H', 'E', 'S', 'L', 'M', 'J'];
            var10.narrow = var2;
            var2 = ['tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka', 'marras', 'joulu'];
            var10.abbreviated = var2;
            var2 = ['tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu', 'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'];
            var10.wide = var2;
            var9 = {};
            var2 = var10.narrow;
            var9.narrow = var2;
            var2 = var10.abbreviated;
            var9.abbreviated = var2;
            var2 = ['tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta', 'toukokuuta', 'kesäkuuta', 'heinäkuuta', 'elokuuta', 'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta'];
            var9.wide = var2;
            var8 = {};
            var2 = ['S', 'M', 'T', 'K', 'T', 'P', 'L'];
            var8.narrow = var2;
            var2 = ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'];
            var8.short = var2;
            var2 = ['sunn.', 'maan.', 'tiis.', 'kesk.', 'torst.', 'perj.', 'la'];
            var8.abbreviated = var2;
            var2 = ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai'];
            var8.wide = var2;
            var7 = {};
            var2 = var8.narrow;
            var7.narrow = var2;
            var2 = var8.short;
            var7.short = var2;
            var2 = var8.abbreviated;
            var7.abbreviated = var2;
            var2 = ['sunnuntaina', 'maanantaina', 'tiistaina', 'keskiviikkona', 'torstaina', 'perjantaina', 'lauantaina'];
            var7.wide = var2;
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
            var12 = ['eaa.', 'jaa.'];
            var5.narrow = var12;
            var12 = ['eaa.', 'jaa.'];
            var5.abbreviated = var12;
            var12 = ['ennen ajanlaskun alkua', 'jälkeen ajanlaskun alun'];
            var5.wide = var12;
            var4.values = var5;
            var5 = 'wide';
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.era = var4;
            var6 = var3.default;
            var4 = {};
            var12 = {};
            var13 = ['1', '2', '3', '4'];
            var12.narrow = var13;
            var13 = ['Q1', 'Q2', 'Q3', 'Q4'];
            var12.abbreviated = var13;
            var13 = ['1. kvartaali', '2. kvartaali', '3. kvartaali', '4. kvartaali'];
            var12.wide = var13;
            var4.values = var12;
            var4.defaultWidth = var5;
            var11 = function arg0() {
                var1 = arg0;
                var0 = 1;
                var0 = var1 - var0;
                return var0;
            };
            var4.argumentCallback = var11;
            var4 = var6.bind(var0)(var4);
            var2.quarter = var4;
            var6 = var3.default;
            var4 = {};
            var4.values = var10;
            var4.defaultWidth = var5;
            var4.formattingValues = var9;
            var4.defaultFormattingWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var4.values = var8;
            var4.defaultWidth = var5;
            var4.formattingValues = var7;
            var4.defaultFormattingWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'ap',
                'pm': 'ip',
                'midnight': 'keskiyö',
                'noon': 'keskipäivä',
                'morning': 'ap',
                'afternoon': 'ip',
                'evening': 'illalla',
                'night': 'yöllä'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'ap',
                'pm': 'ip',
                'midnight': 'keskiyö',
                'noon': 'keskipäivä',
                'morning': 'ap',
                'afternoon': 'ip',
                'evening': 'illalla',
                'night': 'yöllä'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'ap',
                'pm': 'ip',
                'midnight': 'keskiyöllä',
                'noon': 'keskipäivällä',
                'morning': 'aamupäivällä',
                'afternoon': 'iltapäivällä',
                'evening': 'illalla',
                'night': 'yöllä'
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
})(undefined, undefined, undefined, undefined, undefined, undefined, [1695]);