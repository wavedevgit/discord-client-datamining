// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun21954: for (var _fun21954_ip = 0;;) switch (_fun21954_ip) {
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
                _fun21954_ip = 77;
                continue _fun21954
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun21954_ip = 86;
                continue _fun21954
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function(arg0, arg1) { // Original name: ordinalNumber, environment: var7
                var0 = global;
                var3 = var0.Number;
                var2 = undefined;
                var1 = arg0;
                var1 = var3.bind(var2)(var1);
                var0 = var0.String;
                var0 = var0.bind(var2)(var1);
                return var0;
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['aC', 'dC'];
            var5.narrow = var8;
            var8 = ['a.C.', 'd.C.'];
            var5.abbreviated = var8;
            var8 = ['avanti Cristo', 'dopo Cristo'];
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
            var9 = ['T1', 'T2', 'T3', 'T4'];
            var8.abbreviated = var9;
            var9 = ['1º trimestre', '2º trimestre', '3º trimestre', '4º trimestre'];
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
            var8 = ['G', 'F', 'M', 'A', 'M', 'G', 'L', 'A', 'S', 'O', 'N', 'D'];
            var7.narrow = var8;
            var8 = ['gen', 'feb', 'mar', 'apr', 'mag', 'giu', 'lug', 'ago', 'set', 'ott', 'nov', 'dic'];
            var7.abbreviated = var8;
            var8 = ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['D', 'L', 'M', 'M', 'G', 'V', 'S'];
            var7.narrow = var8;
            var8 = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
            var7.short = var8;
            var8 = ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'];
            var7.abbreviated = var8;
            var8 = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'm.',
                'pm': 'p.',
                'midnight': 'mezzanotte',
                'noon': 'mezzogiorno',
                'morning': 'mattina',
                'afternoon': 'pomeriggio',
                'evening': 'sera',
                'night': 'notte'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'mezzanotte',
                'noon': 'mezzogiorno',
                'morning': 'mattina',
                'afternoon': 'pomeriggio',
                'evening': 'sera',
                'night': 'notte'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'mezzanotte',
                'noon': 'mezzogiorno',
                'morning': 'mattina',
                'afternoon': 'pomeriggio',
                'evening': 'sera',
                'night': 'notte'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var6 = {};
            var7 = {
                'am': 'm.',
                'pm': 'p.',
                'midnight': 'mezzanotte',
                'noon': 'mezzogiorno',
                'morning': 'di mattina',
                'afternoon': 'del pomeriggio',
                'evening': 'di sera',
                'night': 'di notte'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'mezzanotte',
                'noon': 'mezzogiorno',
                'morning': 'di mattina',
                'afternoon': 'del pomeriggio',
                'evening': 'di sera',
                'night': 'di notte'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'mezzanotte',
                'noon': 'mezzogiorno',
                'morning': 'di mattina',
                'afternoon': 'del pomeriggio',
                'evening': 'di sera',
                'night': 'di notte'
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