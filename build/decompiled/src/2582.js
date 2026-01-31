// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun21907: for (var _fun21907_ip = 0;;) switch (_fun21907_ip) {
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
                _fun21907_ip = 77;
                continue _fun21907
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun21907_ip = 86;
                continue _fun21907
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function(arg0, arg1) { // Original name: ordinalNumber, environment: var7
                _fun21908: for (var _fun21908_ip = 0;;) switch (_fun21908_ip) {
                    case 0:
                        var0 = arg1;
                        var1 = global;
                        var2 = var1.Number;
                        var3 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        var2 = null;
                        var2 = var2 == var0;
                        var6 = undefined;
                        if (var2) {
                            _fun21908_ip = 38;
                            continue _fun21908
                        }
                    case 32:
                        var6 = var0.unit;
                    case 38:
                        var0 = 0;
                        if (!(var0 !== var1)) {
                            _fun21908_ip = 108;
                            continue _fun21908
                        }
                    case 44:
                        var0 = 'ème';
                        var2 = 1;
                        if (!(var2 === var1)) {
                            _fun21908_ip = 102;
                            continue _fun21908
                        }
                    case 57:
                        var4 = 'er';
                        var2 = var4;
                        if (!var6) {
                            _fun21908_ip = 99;
                            continue _fun21908
                        }
                    case 69:
                        var5 = ['year', 'week', 'hour', 'minute', 'second'];
                        var3 = var5.includes;
                        var3 = var3.bind(var5)(var6);
                        var2 = var4;
                        if (!var3) {
                            _fun21908_ip = 99;
                            continue _fun21908
                        }
                    case 93:
                        var2 = 'ère';
                    case 99:
                        var0 = var2;
                    case 102:
                        var0 = var1 + var0;
                        return var0;
                    case 108:
                        var0 = '0';
                        return var0;
                }
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['av. J.-C', 'ap. J.-C'];
            var5.narrow = var8;
            var8 = ['av. J.-C', 'ap. J.-C'];
            var5.abbreviated = var8;
            var8 = ['avant Jésus-Christ', 'après Jésus-Christ'];
            var5.wide = var8;
            var4.values = var5;
            var5 = 'wide';
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.era = var4;
            var6 = var3.default;
            var4 = {};
            var8 = {};
            var9 = ['T1', 'T2', 'T3', 'T4'];
            var8.narrow = var9;
            var9 = ['1er trim.', '2ème trim.', '3ème trim.', '4ème trim.'];
            var8.abbreviated = var9;
            var9 = ['1er trimestre', '2ème trimestre', '3ème trimestre', '4ème trimestre'];
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
            var8 = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
            var7.abbreviated = var8;
            var8 = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['D', 'L', 'M', 'M', 'J', 'V', 'S'];
            var7.narrow = var8;
            var8 = ['di', 'lu', 'ma', 'me', 'je', 've', 'sa'];
            var7.short = var8;
            var8 = ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'];
            var7.abbreviated = var8;
            var8 = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'minuit',
                'noon': 'midi',
                'morning': 'mat.',
                'afternoon': 'ap.m.',
                'evening': 'soir',
                'night': 'mat.'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'minuit',
                'noon': 'midi',
                'morning': 'matin',
                'afternoon': 'après-midi',
                'evening': 'soir',
                'night': 'matin'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'AM',
                'pm': 'PM',
                'midnight': 'minuit',
                'noon': 'midi',
                'morning': 'du matin',
                'afternoon': 'de l’après-midi',
                'evening': 'du soir',
                'night': 'du matin'
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