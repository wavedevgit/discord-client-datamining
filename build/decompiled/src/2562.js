// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun21854: for (var _fun21854_ip = 0;;) switch (_fun21854_ip) {
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
                _fun21854_ip = 77;
                continue _fun21854
            }
        case 65:
            var2 = var4.__esModule;
            var3 = var4;
            if (var2) {
                _fun21854_ip = 86;
                continue _fun21854
            }
        case 77:
            var2 = {};
            var2.default = var4;
            var3 = var2;
        case 86:
            var2 = {};
            var4 = function arg0, arg1() {
                _fun21855: for (var _fun21855_ip = 0;;) switch (_fun21855_ip) {
                    case 0:
                        var0 = arg1;
                        var1 = global;
                        var2 = var1.Number;
                        var3 = undefined;
                        var1 = arg0;
                        var1 = var2.bind(var3)(var1);
                        var2 = null;
                        var2 = var2 == var0;
                        var4 = undefined;
                        if (var2) {
                            _fun21855_ip = 38;
                            continue _fun21855
                        }
                    case 32:
                        var4 = var0.unit;
                    case 38:
                        var3 = 'ος';
                        var2 = 'year';
                        var0 = var3;
                        if (!(var2 !== var4)) {
                            _fun21855_ip = 121;
                            continue _fun21855
                        }
                    case 55:
                        var2 = 'month';
                        var0 = var3;
                        if (!(var2 !== var4)) {
                            _fun21855_ip = 121;
                            continue _fun21855
                        }
                    case 66:
                        var2 = 'week';
                        if (!(var2 !== var4)) {
                            _fun21855_ip = 112;
                            continue _fun21855
                        }
                    case 74:
                        var2 = 'dayOfYear';
                        if (!(var2 !== var4)) {
                            _fun21855_ip = 112;
                            continue _fun21855
                        }
                    case 82:
                        var2 = 'day';
                        if (!(var2 !== var4)) {
                            _fun21855_ip = 112;
                            continue _fun21855
                        }
                    case 90:
                        var2 = 'hour';
                        if (!(var2 !== var4)) {
                            _fun21855_ip = 112;
                            continue _fun21855
                        }
                    case 98:
                        var2 = 'ο';
                        var3 = 'date';
                        if (!(var3 === var4)) {
                            _fun21855_ip = 118;
                            continue _fun21855
                        }
                    case 112:
                        var2 = 'η';
                    case 118:
                        var0 = var2;
                    case 121:
                        var0 = var1 + var0;
                        return var0;
                }
            };
            var2.ordinalNumber = var4;
            var6 = var3.default;
            var4 = {};
            var5 = {};
            var8 = ['πΧ', 'μΧ'];
            var5.narrow = var8;
            var8 = ['π.Χ.', 'μ.Χ.'];
            var5.abbreviated = var8;
            var8 = ['προ Χριστού', 'μετά Χριστόν'];
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
            var9 = ['Τ1', 'Τ2', 'Τ3', 'Τ4'];
            var8.abbreviated = var9;
            var9 = ['1ο τρίμηνο', '2ο τρίμηνο', '3ο τρίμηνο', '4ο τρίμηνο'];
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
            var8 = ['Ι', 'Φ', 'Μ', 'Α', 'Μ', 'Ι', 'Ι', 'Α', 'Σ', 'Ο', 'Ν', 'Δ'];
            var7.narrow = var8;
            var8 = ['Ιαν', 'Φεβ', 'Μάρ', 'Απρ', 'Μάι', 'Ιούν', 'Ιούλ', 'Αύγ', 'Σεπ', 'Οκτ', 'Νοέ', 'Δεκ'];
            var7.abbreviated = var8;
            var8 = ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var7 = {};
            var8 = ['Ι', 'Φ', 'Μ', 'Α', 'Μ', 'Ι', 'Ι', 'Α', 'Σ', 'Ο', 'Ν', 'Δ'];
            var7.narrow = var8;
            var8 = ['Ιαν', 'Φεβ', 'Μαρ', 'Απρ', 'Μαΐ', 'Ιουν', 'Ιουλ', 'Αυγ', 'Σεπ', 'Οκτ', 'Νοε', 'Δεκ'];
            var7.abbreviated = var8;
            var8 = ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου', 'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'];
            var7.wide = var8;
            var4.formattingValues = var7;
            var4.defaultFormattingWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.month = var4;
            var6 = var3.default;
            var4 = {};
            var7 = {};
            var8 = ['Κ', 'Δ', 'T', 'Τ', 'Π', 'Π', 'Σ'];
            var7.narrow = var8;
            var8 = ['Κυ', 'Δε', 'Τρ', 'Τε', 'Πέ', 'Πα', 'Σά'];
            var7.short = var8;
            var8 = ['Κυρ', 'Δευ', 'Τρί', 'Τετ', 'Πέμ', 'Παρ', 'Σάβ'];
            var7.abbreviated = var8;
            var8 = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];
            var7.wide = var8;
            var4.values = var7;
            var4.defaultWidth = var5;
            var4 = var6.bind(var0)(var4);
            var2.day = var4;
            var4 = var3.default;
            var3 = {};
            var6 = {};
            var7 = {
                'am': 'πμ',
                'pm': 'μμ',
                'midnight': 'μεσάνυχτα',
                'noon': 'μεσημέρι',
                'morning': 'πρωί',
                'afternoon': 'απόγευμα',
                'evening': 'βράδυ',
                'night': 'νύχτα'
            };
            var6.narrow = var7;
            var7 = {
                'am': 'π.μ.',
                'pm': 'μ.μ.',
                'midnight': 'μεσάνυχτα',
                'noon': 'μεσημέρι',
                'morning': 'πρωί',
                'afternoon': 'απόγευμα',
                'evening': 'βράδυ',
                'night': 'νύχτα'
            };
            var6.abbreviated = var7;
            var7 = {
                'am': 'π.μ.',
                'pm': 'μ.μ.',
                'midnight': 'μεσάνυχτα',
                'noon': 'μεσημέρι',
                'morning': 'πρωί',
                'afternoon': 'απόγευμα',
                'evening': 'βράδυ',
                'night': 'νύχτα'
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