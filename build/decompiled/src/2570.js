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
        'one': 'по-малко от секунда',
        'other': 'по-малко от {{count}} секунди'
    };
    var3.lessThanXSeconds = var4;
    var4 = {
        'one': '1 секунда',
        'other': '{{count}} секунди'
    };
    var3.xSeconds = var4;
    var4 = 'половин минута';
    var3.halfAMinute = var4;
    var4 = {
        'one': 'по-малко от минута',
        'other': 'по-малко от {{count}} минути'
    };
    var3.lessThanXMinutes = var4;
    var4 = {
        'one': '1 минута',
        'other': '{{count}} минути'
    };
    var3.xMinutes = var4;
    var4 = {
        'one': 'около час',
        'other': 'около {{count}} часа'
    };
    var3.aboutXHours = var4;
    var4 = {
        'one': '1 час',
        'other': '{{count}} часа'
    };
    var3.xHours = var4;
    var4 = {
        'one': '1 ден',
        'other': '{{count}} дни'
    };
    var3.xDays = var4;
    var4 = {
        'one': 'около седмица',
        'other': 'около {{count}} седмици'
    };
    var3.aboutXWeeks = var4;
    var4 = {
        'one': '1 седмица',
        'other': '{{count}} седмици'
    };
    var3.xWeeks = var4;
    var4 = {
        'one': 'около месец',
        'other': 'около {{count}} месеца'
    };
    var3.aboutXMonths = var4;
    var4 = {
        'one': '1 месец',
        'other': '{{count}} месеца'
    };
    var3.xMonths = var4;
    var4 = {
        'one': 'около година',
        'other': 'около {{count}} години'
    };
    var3.aboutXYears = var4;
    var4 = {
        'one': '1 година',
        'other': '{{count}} години'
    };
    var3.xYears = var4;
    var4 = {
        'one': 'над година',
        'other': 'над {{count}} години'
    };
    var3.overXYears = var4;
    var4 = {
        'one': 'почти година',
        'other': 'почти {{count}} години'
    };
    var3.almostXYears = var4;
    var _closure1_slot0 = var3;
    var2 = function arg0, arg1, arg2() {
        _fun21952: for (var _fun21952_ip = 0;;) switch (_fun21952_ip) {
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
                    _fun21952_ip = 90;
                    continue _fun21952
                }
            case 34:
                var0 = 1;
                if (!(var0 !== var7)) {
                    _fun21952_ip = 81;
                    continue _fun21952
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
                _fun21952_ip = 87;
                continue _fun21952;
            case 81:
                var0 = var2.one;
            case 87:
                var3 = var0;
            case 90:
                var2 = null;
                var0 = var3;
                if (!(var2 != var1)) {
                    _fun21952_ip = 157;
                    continue _fun21952
                }
            case 99:
                var2 = var1.addSuffix;
                var0 = var3;
                if (!var2) {
                    _fun21952_ip = 157;
                    continue _fun21952
                }
            case 111:
                var2 = var1.comparison;
                if (!var2) {
                    _fun21952_ip = 132;
                    continue _fun21952
                }
            case 120:
                var2 = var1.comparison;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun21952_ip = 144;
                    continue _fun21952
                }
            case 132:
                var1 = 'преди ';
                var1 = var1 + var3;
                _fun21952_ip = 154;
                continue _fun21952;
            case 144:
                var2 = 'след ';
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