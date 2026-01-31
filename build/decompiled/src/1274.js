// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var2 = exports;
    var0 = global;
    var4 = var0.Object;
    var3 = var4.defineProperty;
    var1 = {};
    var0 = true;
    var1.value = var0;
    var0 = '__esModule';
    var0 = var3.bind(var4)(var2, var0, var1);
    var0 = undefined;
    var2.DEFAULT_FORMAT_CONFIG = var0;
    var1 = function(arg0, arg1) { // Original name: resolveFormatConfigOptions, environment: var1
        _fun13739: for (var _fun13739_ip = 0;;) switch (_fun13739_ip) {
            case 0:
                var3 = arg1;
                var0 = null;
                var1 = var0 == var3;
                var0 = undefined;
                if (var1) {
                    _fun13739_ip = 19;
                    continue _fun13739
                }
            case 14:
                var0 = var3.format;
            case 19:
                var1 = 'string';
                var0 = typeof var0;
                if (!(var1 !== var0)) {
                    _fun13739_ip = 32;
                    continue _fun13739
                }
            case 30:
                return var3;
            case 32:
                var0 = global;
                var2 = var0.Object;
                var1 = var2.assign;
                var6 = var0.Object;
                var5 = var6.assign;
                var4 = var3.format;
                var0 = arg0;
                var4 = var0[var4];
                var0 = {};
                var0 = var5.bind(var6)(var0, var4);
                var0 = var1.bind(var2)(var0, var3);
                return var0;
        }
    };
    var2.resolveFormatConfigOptions = var1;
    var1 = {};
    var3 = {};
    var1.duration = var3;
    var3 = {};
    var1.list = var3;
    var3 = {};
    var1.relativeTime = var3;
    var3 = {};
    var4 = {};
    var5 = 0;
    var4.maximumFractionDigits = var5;
    var3.integer = var4;
    var4 = {};
    var5 = 'currency';
    var4.style = var5;
    var3.currency = var4;
    var4 = {};
    var5 = 'percent';
    var4.style = var5;
    var3.percent = var4;
    var1.number = var3;
    var3 = {};
    var4 = {
        'month': 'numeric',
        'day': 'numeric',
        'year': '2-digit'
    };
    var3.short = var4;
    var4 = {
        'month': 'short',
        'day': 'numeric',
        'year': 'numeric'
    };
    var3.medium = var4;
    var4 = {
        'month': 'long',
        'day': 'numeric',
        'year': 'numeric'
    };
    var3.long = var4;
    var4 = {
        'weekday': 'long',
        'month': 'long',
        'day': 'numeric',
        'year': 'numeric'
    };
    var3.full = var4;
    var1.date = var3;
    var3 = {};
    var4 = {
        'hour': 'numeric',
        'minute': 'numeric'
    };
    var3.short = var4;
    var4 = {
        'hour': 'numeric',
        'minute': 'numeric',
        'second': 'numeric'
    };
    var3.medium = var4;
    var4 = {
        'hour': 'numeric',
        'minute': 'numeric',
        'second': 'numeric',
        'timeZoneName': 'short'
    };
    var3.long = var4;
    var4 = {
        'hour': 'numeric',
        'minute': 'numeric',
        'second': 'numeric',
        'timeZoneName': 'short'
    };
    var3.full = var4;
    var1.time = var3;
    var2.DEFAULT_FORMAT_CONFIG = var1;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);