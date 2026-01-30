// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = require;
    var _closure1_slot0 = var0;
    var0 = dependencyMap;
    var _closure1_slot1 = var0;
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
        'one': '१ सेकंड से कम',
        'other': '{{count}} सेकंड से कम'
    };
    var3.lessThanXSeconds = var4;
    var4 = {
        'one': '१ सेकंड',
        'other': '{{count}} सेकंड'
    };
    var3.xSeconds = var4;
    var4 = 'आधा मिनट';
    var3.halfAMinute = var4;
    var4 = {
        'one': '१ मिनट से कम',
        'other': '{{count}} मिनट से कम'
    };
    var3.lessThanXMinutes = var4;
    var4 = {
        'one': '१ मिनट',
        'other': '{{count}} मिनट'
    };
    var3.xMinutes = var4;
    var4 = {
        'one': 'लगभग १ घंटा',
        'other': 'लगभग {{count}} घंटे'
    };
    var3.aboutXHours = var4;
    var4 = {
        'one': '१ घंटा',
        'other': '{{count}} घंटे'
    };
    var3.xHours = var4;
    var4 = {
        'one': '१ दिन',
        'other': '{{count}} दिन'
    };
    var3.xDays = var4;
    var4 = {
        'one': 'लगभग १ सप्ताह',
        'other': 'लगभग {{count}} सप्ताह'
    };
    var3.aboutXWeeks = var4;
    var4 = {
        'one': '१ सप्ताह',
        'other': '{{count}} सप्ताह'
    };
    var3.xWeeks = var4;
    var4 = {
        'one': 'लगभग १ महीना',
        'other': 'लगभग {{count}} महीने'
    };
    var3.aboutXMonths = var4;
    var4 = {
        'one': '१ महीना',
        'other': '{{count}} महीने'
    };
    var3.xMonths = var4;
    var4 = {
        'one': 'लगभग १ वर्ष',
        'other': 'लगभग {{count}} वर्ष'
    };
    var3.aboutXYears = var4;
    var4 = {
        'one': '१ वर्ष',
        'other': '{{count}} वर्ष'
    };
    var3.xYears = var4;
    var4 = {
        'one': '१ वर्ष से अधिक',
        'other': '{{count}} वर्ष से अधिक'
    };
    var3.overXYears = var4;
    var4 = {
        'one': 'लगभग १ वर्ष',
        'other': 'लगभग {{count}} वर्ष'
    };
    var3.almostXYears = var4;
    var _closure1_slot2 = var3;
    var2 = function(arg0, arg1, arg2) { // Original name: formatDistance, environment: var2
        _fun23964: for (var _fun23964_ip = 0;;) switch (_fun23964_ip) {
            case 0:
                var7 = arg1;
                var1 = arg2;
                var3 = _closure1_slot2;
                var2 = arg0;
                var2 = var3[var2];
                var5 = 'string';
                var4 = typeof var2;
                var3 = var2;
                if (!(var5 !== var4)) {
                    _fun23964_ip = 107;
                    continue _fun23964
                }
            case 34:
                var4 = 1;
                if (!(var4 !== var7)) {
                    _fun23964_ip = 98;
                    continue _fun23964
                }
            case 41:
                var6 = var2.other;
                var5 = var6.replace;
                var8 = _closure1_slot0;
                var4 = _closure1_slot1;
                var0 = 0;
                var0 = var4[var0];
                var4 = undefined;
                var0 = var8.bind(var4)(var0);
                var0 = var0.numberToLocale;
                var4 = var0.bind(var4)(var7);
                var0 = '{{count}}';
                var0 = var5.bind(var6)(var0, var4);
                _fun23964_ip = 104;
                continue _fun23964;
            case 98:
                var0 = var2.one;
            case 104:
                var3 = var0;
            case 107:
                var2 = null;
                var0 = var3;
                if (!(var2 != var1)) {
                    _fun23964_ip = 174;
                    continue _fun23964
                }
            case 116:
                var2 = var1.addSuffix;
                var0 = var3;
                if (!var2) {
                    _fun23964_ip = 174;
                    continue _fun23964
                }
            case 128:
                var2 = var1.comparison;
                if (!var2) {
                    _fun23964_ip = 149;
                    continue _fun23964
                }
            case 137:
                var2 = var1.comparison;
                var1 = 0;
                if (!(!(var2 > var1))) {
                    _fun23964_ip = 161;
                    continue _fun23964
                }
            case 149:
                var1 = ' पहले';
                var1 = var3 + var1;
                _fun23964_ip = 171;
                continue _fun23964;
            case 161:
                var2 = 'मे ';
                var1 = var3 + var2;
            case 171:
                var0 = var1;
            case 174:
                return var0;
        }
    };
    var1.default = var2;
    var2 = var1.default;
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [2998]);