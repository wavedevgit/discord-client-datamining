// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var10 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = /sekuntia?/;
        var0 = 'sekunnin';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var9 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = /minuuttia?/;
        var0 = 'minuutin';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var8 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = /tuntia?/;
        var0 = 'tunnin';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var7 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = /(viikko|viikkoa)/;
        var0 = 'viikon';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var6 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = /(kuukausi|kuukautta)/;
        var0 = 'kuukauden';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var5 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = /(vuosi|vuotta)/;
        var0 = 'vuoden';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var0 = global;
    var11 = var0.Object;
    var4 = var11.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var11)(var1, var0, var3);
    var0 = undefined;
    var1.default = var0;
    var3 = {};
    var4 = {
        'one': 'alle sekunti',
        'other': 'alle {{count}} sekuntia'
    };
    var4.futureTense = var10;
    var3.lessThanXSeconds = var4;
    var4 = {
        'one': 'sekunti',
        'other': '{{count}} sekuntia'
    };
    var4.futureTense = var10;
    var3.xSeconds = var4;
    var4 = {
        'one': 'puoli minuuttia',
        'other': 'puoli minuuttia'
    };
    var10 = function arg0() {
        var0 = 'puolen minuutin';
        return var0;
    };
    var4.futureTense = var10;
    var3.halfAMinute = var4;
    var4 = {
        'one': 'alle minuutti',
        'other': 'alle {{count}} minuuttia'
    };
    var4.futureTense = var9;
    var3.lessThanXMinutes = var4;
    var4 = {
        'one': 'minuutti',
        'other': '{{count}} minuuttia'
    };
    var4.futureTense = var9;
    var3.xMinutes = var4;
    var4 = {
        'one': 'noin tunti',
        'other': 'noin {{count}} tuntia'
    };
    var4.futureTense = var8;
    var3.aboutXHours = var4;
    var4 = {
        'one': 'tunti',
        'other': '{{count}} tuntia'
    };
    var4.futureTense = var8;
    var3.xHours = var4;
    var4 = {
        'one': 'päivä',
        'other': '{{count}} päivää'
    };
    var8 = function arg0() {
        var3 = arg0;
        var2 = var3.replace;
        var1 = /päivää?/;
        var0 = 'päivän';
        var0 = var2.bind(var3)(var1, var0);
        return var0;
    };
    var4.futureTense = var8;
    var3.xDays = var4;
    var4 = {
        'one': 'noin viikko',
        'other': 'noin {{count}} viikkoa'
    };
    var4.futureTense = var7;
    var3.aboutXWeeks = var4;
    var4 = {
        'one': 'viikko',
        'other': '{{count}} viikkoa'
    };
    var4.futureTense = var7;
    var3.xWeeks = var4;
    var4 = {
        'one': 'noin kuukausi',
        'other': 'noin {{count}} kuukautta'
    };
    var4.futureTense = var6;
    var3.aboutXMonths = var4;
    var4 = {
        'one': 'kuukausi',
        'other': '{{count}} kuukautta'
    };
    var4.futureTense = var6;
    var3.xMonths = var4;
    var4 = {
        'one': 'noin vuosi',
        'other': 'noin {{count}} vuotta'
    };
    var4.futureTense = var5;
    var3.aboutXYears = var4;
    var4 = {
        'one': 'vuosi',
        'other': '{{count}} vuotta'
    };
    var4.futureTense = var5;
    var3.xYears = var4;
    var4 = {
        'one': 'yli vuosi',
        'other': 'yli {{count}} vuotta'
    };
    var4.futureTense = var5;
    var3.overXYears = var4;
    var4 = {
        'one': 'lähes vuosi',
        'other': 'lähes {{count}} vuotta'
    };
    var4.futureTense = var5;
    var3.almostXYears = var4;
    var _closure1_slot0 = var3;
    var2 = function arg0, arg1, arg2() {
        _fun21889: for (var _fun21889_ip = 0;;) switch (_fun21889_ip) {
            case 0:
                var6 = arg1;
                var1 = arg2;
                var2 = _closure1_slot0;
                var0 = arg0;
                var4 = var2[var0];
                var0 = 1;
                if (!(var0 !== var6)) {
                    _fun21889_ip = 67;
                    continue _fun21889
                }
            case 27:
                var5 = var4.other;
                var3 = var5.replace;
                var0 = global;
                var2 = var0.String;
                var0 = undefined;
                var2 = var2.bind(var0)(var6);
                var0 = '{{count}}';
                var3 = var3.bind(var5)(var0, var2);
                _fun21889_ip = 73;
                continue _fun21889;
            case 67:
                var3 = var4.one;
            case 73:
                var2 = null;
                var0 = var3;
                if (!(var2 != var1)) {
                    _fun21889_ip = 151;
                    continue _fun21889
                }
            case 82:
                var2 = var1.addSuffix;
                var0 = var3;
                if (!var2) {
                    _fun21889_ip = 151;
                    continue _fun21889
                }
            case 94:
                var2 = var1.comparison;
                if (!var2) {
                    _fun21889_ip = 115;
                    continue _fun21889
                }
            case 103:
                var2 = var1.comparison;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun21889_ip = 127;
                    continue _fun21889
                }
            case 115:
                var1 = ' sitten';
                var1 = var3 + var1;
                _fun21889_ip = 148;
                continue _fun21889;
            case 127:
                var2 = var4.futureTense;
                var3 = var2.bind(var4)(var3);
                var2 = ' kuluttua';
                var1 = var3 + var2;
            case 148:
                var0 = var1;
            case 151:
                return var0;
        }
    };
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);