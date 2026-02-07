// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun22307: for (var _fun22307_ip = 0;;) switch (_fun22307_ip) {
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
                _fun22307_ip = 77;
                continue _fun22307
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun22307_ip = 86;
                continue _fun22307
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function arg0, arg1() {
                _fun22308: for (var _fun22308_ip = 0;;) switch (_fun22308_ip) {
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
                            _fun22308_ip = 39;
                            continue _fun22308
                        }
                    case 32:
                        var0 = 10;
                        if (!(var2 < var0)) {
                            _fun22308_ip = 60;
                            continue _fun22308
                        }
                    case 39:
                        var0 = 10;
                        var2 = var2 % var0;
                        var0 = 1;
                        if (!(var0 !== var2)) {
                            _fun22308_ip = 72;
                            continue _fun22308
                        }
                    case 53:
                        var0 = 2;
                        if (!(var0 !== var2)) {
                            _fun22308_ip = 72;
                            continue _fun22308
                        }
                    case 60:
                        var0 = ':e';
                        var0 = var1 + var0;
                        return var0;
                    case 72:
                        var0 = ':a';
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['f.Kr.', 'e.Kr.'];
            var5.narrow = var8;
            var8 = ['f.Kr.', 'e.Kr.'];
            var5.abbreviated = var8;
            var8 = ['före Kristus', 'efter Kristus'];
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
            var9 = ['1:a kvartalet', '2:a kvartalet', '3:e kvartalet', '4:e kvartalet'];
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
            var8 = ['jan.', 'feb.', 'mars', 'apr.', 'maj', 'juni', 'juli', 'aug.', 'sep.', 'okt.', 'nov.', 'dec.'];
            var7.abbreviated = var8;
            var8 = ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'];
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
            var8 = ['sö', 'må', 'ti', 'on', 'to', 'fr', 'lö'];
            var7.short = var8;
            var8 = ['sön', 'mån', 'tis', 'ons', 'tors', 'fre', 'lör'];
            var7.abbreviated = var8;
            var8 = ['söndag', 'måndag', 'tisdag', 'onsdag', 'torsdag', 'fredag', 'lördag'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'fm',
                'pm': 'em',
                'midnight': 'midnatt',
                'noon': 'middag',
                'morning': 'morg.',
                'afternoon': 'efterm.',
                'evening': 'kväll',
                'night': 'natt'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'f.m.',
                'pm': 'e.m.',
                'midnight': 'midnatt',
                'noon': 'middag',
                'morning': 'morgon',
                'afternoon': 'efterm.',
                'evening': 'kväll',
                'night': 'natt'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'förmiddag',
                'pm': 'eftermiddag',
                'midnight': 'midnatt',
                'noon': 'middag',
                'morning': 'morgon',
                'afternoon': 'eftermiddag',
                'evening': 'kväll',
                'night': 'natt'
            };
            var6.wide = var7;
            var3.values = var6;
            var3.defaultWidth = var5;
            var6 = {};
            var7 = {
                'am': 'fm',
                'pm': 'em',
                'midnight': 'midnatt',
                'noon': 'middag',
                'morning': 'på morg.',
                'afternoon': 'på efterm.',
                'evening': 'på kvällen',
                'night': 'på natten'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'fm',
                'pm': 'em',
                'midnight': 'midnatt',
                'noon': 'middag',
                'morning': 'på morg.',
                'afternoon': 'på efterm.',
                'evening': 'på kvällen',
                'night': 'på natten'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'fm',
                'pm': 'em',
                'midnight': 'midnatt',
                'noon': 'middag',
                'morning': 'på morgonen',
                'afternoon': 'på eftermiddagen',
                'evening': 'på kvällen',
                'night': 'på natten'
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