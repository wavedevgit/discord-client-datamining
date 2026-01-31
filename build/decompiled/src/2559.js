// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = undefined;
    var1.default = var0;
    var3 = {};
    var4 = {
        'one': 'λιγότερο από ένα δευτερόλεπτο',
        'other': 'λιγότερο από {{count}} δευτερόλεπτα'
    };
    var3.lessThanXSeconds = var4;
    var4 = {
        'one': '1 δευτερόλεπτο',
        'other': '{{count}} δευτερόλεπτα'
    };
    var3.xSeconds = var4;
    var4 = 'μισό λεπτό';
    var3.halfAMinute = var4;
    var4 = {
        'one': 'λιγότερο από ένα λεπτό',
        'other': 'λιγότερο από {{count}} λεπτά'
    };
    var3.lessThanXMinutes = var4;
    var4 = {
        'one': '1 λεπτό',
        'other': '{{count}} λεπτά'
    };
    var3.xMinutes = var4;
    var4 = {
        'one': 'περίπου 1 ώρα',
        'other': 'περίπου {{count}} ώρες'
    };
    var3.aboutXHours = var4;
    var4 = {
        'one': '1 ώρα',
        'other': '{{count}} ώρες'
    };
    var3.xHours = var4;
    var4 = {
        'one': '1 ημέρα',
        'other': '{{count}} ημέρες'
    };
    var3.xDays = var4;
    var4 = {
        'one': 'περίπου 1 εβδομάδα',
        'other': 'περίπου {{count}} εβδομάδες'
    };
    var3.aboutXWeeks = var4;
    var4 = {
        'one': '1 εβδομάδα',
        'other': '{{count}} εβδομάδες'
    };
    var3.xWeeks = var4;
    var4 = {
        'one': 'περίπου 1 μήνας',
        'other': 'περίπου {{count}} μήνες'
    };
    var3.aboutXMonths = var4;
    var4 = {
        'one': '1 μήνας',
        'other': '{{count}} μήνες'
    };
    var3.xMonths = var4;
    var4 = {
        'one': 'περίπου 1 χρόνο',
        'other': 'περίπου {{count}} χρόνια'
    };
    var3.aboutXYears = var4;
    var4 = {
        'one': '1 χρόνο',
        'other': '{{count}} χρόνια'
    };
    var3.xYears = var4;
    var4 = {
        'one': 'πάνω από 1 χρόνο',
        'other': 'πάνω από {{count}} χρόνια'
    };
    var3.overXYears = var4;
    var4 = {
        'one': 'περίπου 1 χρόνο',
        'other': 'περίπου {{count}} χρόνια'
    };
    var3.almostXYears = var4;
    var _closure1_slot0 = var3;
    var2 = function arg0, arg1, arg2() {
        _fun21849: for (var _fun21849_ip = 0;;) switch (_fun21849_ip) {
            case 0:
                var7 = arg1;
                var1 = arg2;
                var2 = _closure1_slot0;
                var0 = arg0;
                var2 = var2[var0];
                var4 = 'string';
                var0 = typeof var2;
                var3 = var2;
                if (!(var4 !== var0)) {
                    _fun21849_ip = 90;
                    continue _fun21849
                }
            case 34:
                var0 = 1;
                if (!(var0 !== var7)) {
                    _fun21849_ip = 81;
                    continue _fun21849
                }
            case 41:
                var6 = var2.other;
                var5 = var6.replace;
                var0 = global;
                var4 = var0.String;
                var0 = undefined;
                var4 = var4.bind(var0)(var7);
                var0 = '{{count}}';
                var0 = var5.bind(var6)(var0, var4);
                _fun21849_ip = 87;
                continue _fun21849;
            case 81:
                var0 = var2.one;
            case 87:
                var3 = var0;
            case 90:
                var2 = null;
                var0 = var3;
                if (!(var2 != var1)) {
                    _fun21849_ip = 157;
                    continue _fun21849
                }
            case 99:
                var2 = var1.addSuffix;
                var0 = var3;
                if (!var2) {
                    _fun21849_ip = 157;
                    continue _fun21849
                }
            case 111:
                var2 = var1.comparison;
                if (!var2) {
                    _fun21849_ip = 132;
                    continue _fun21849
                }
            case 120:
                var2 = var1.comparison;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun21849_ip = 144;
                    continue _fun21849
                }
            case 132:
                var1 = ' πριν';
                var1 = var3 + var1;
                _fun21849_ip = 154;
                continue _fun21849;
            case 144:
                var2 = 'σε ';
                var1 = var2 + var3;
            case 154:
                var0 = var1;
            case 157:
                return var0;
        }
    };
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);