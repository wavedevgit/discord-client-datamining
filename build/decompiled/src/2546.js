// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun21815: for (var _fun21815_ip = 0;;) switch (_fun21815_ip) {
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
                _fun21815_ip = 77;
                continue _fun21815
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun21815_ip = 86;
                continue _fun21815
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
            var8 = ['př. n. l.', 'n. l.'];
            var5.narrow = var8;
            var8 = ['př. n. l.', 'n. l.'];
            var5.abbreviated = var8;
            var8 = ['před naším letopočtem', 'našeho letopočtu'];
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
            var9 = ['1. čtvrtletí', '2. čtvrtletí', '3. čtvrtletí', '4. čtvrtletí'];
            var8.abbreviated = var9;
            var9 = ['1. čtvrtletí', '2. čtvrtletí', '3. čtvrtletí', '4. čtvrtletí'];
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
            var8 = ['L', 'Ú', 'B', 'D', 'K', 'Č', 'Č', 'S', 'Z', 'Ř', 'L', 'P'];
            var7.narrow = var8;
            var8 = ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'];
            var7.abbreviated = var8;
            var8 = ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var7 = {};
            var8 = ['L', 'Ú', 'B', 'D', 'K', 'Č', 'Č', 'S', 'Z', 'Ř', 'L', 'P'];
            var7.narrow = var8;
            var8 = ['led', 'úno', 'bře', 'dub', 'kvě', 'čvn', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro'];
            var7.abbreviated = var8;
            var8 = ['ledna', 'února', 'března', 'dubna', 'května', 'června', 'července', 'srpna', 'září', 'října', 'listopadu', 'prosince'];
            var7.wide = var8;
            var4.formattingValues = var7;
            var4.defaultFormattingWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'];
            var7.narrow = var8;
            var8 = ['ne', 'po', 'út', 'st', 'čt', 'pá', 'so'];
            var7.short = var8;
            var8 = ['ned', 'pon', 'úte', 'stř', 'čtv', 'pát', 'sob'];
            var7.abbreviated = var8;
            var8 = ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'dop.',
                'pm': 'odp.',
                'midnight': 'půlnoc',
                'noon': 'poledne',
                'morning': 'ráno',
                'afternoon': 'odpoledne',
                'evening': 'večer',
                'night': 'noc'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'dop.',
                'pm': 'odp.',
                'midnight': 'půlnoc',
                'noon': 'poledne',
                'morning': 'ráno',
                'afternoon': 'odpoledne',
                'evening': 'večer',
                'night': 'noc'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'dopoledne',
                'pm': 'odpoledne',
                'midnight': 'půlnoc',
                'noon': 'poledne',
                'morning': 'ráno',
                'afternoon': 'odpoledne',
                'evening': 'večer',
                'night': 'noc'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var6 = {};
            var7 = {
                'am': 'dop.',
                'pm': 'odp.',
                'midnight': 'půlnoc',
                'noon': 'poledne',
                'morning': 'ráno',
                'afternoon': 'odpoledne',
                'evening': 'večer',
                'night': 'noc'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'dop.',
                'pm': 'odp.',
                'midnight': 'půlnoc',
                'noon': 'poledne',
                'morning': 'ráno',
                'afternoon': 'odpoledne',
                'evening': 'večer',
                'night': 'noc'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'dopoledne',
                'pm': 'odpoledne',
                'midnight': 'půlnoc',
                'noon': 'poledne',
                'morning': 'ráno',
                'afternoon': 'odpoledne',
                'evening': 'večer',
                'night': 'noc'
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