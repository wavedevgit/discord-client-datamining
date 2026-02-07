// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var3 = var0.IntlMessageFormat;
    var2 = var3.__addLocaleData;
    var1 = {};
    var4 = 'tr';
    var1.locale = var4;
    var4 = function arg0, arg1() {
        _fun112792: for (var _fun112792_ip = 0;;) switch (_fun112792_ip) {
            case 0:
                var1 = 'other';
                var2 = arg1;
                var0 = var1;
                if (var2) {
                    _fun112792_ip = 33;
                    continue _fun112792
                }
            case 13:
                var3 = 1;
                var2 = arg0;
                var2 = var3 == var2;
                if (!var2) {
                    _fun112792_ip = 30;
                    continue _fun112792
                }
            case 26:
                var1 = 'one';
            case 30:
                var0 = var1;
            case 33:
                return var0;
        }
    };
    var1.pluralRuleFunction = var4;
    var1 = var2.bind(var3)(var1);
    var2 = var0.IntlMessageFormat;
    var1 = var2.__addLocaleData;
    var0 = {
        'locale': 'tr-CY',
        'parentLocale': 'tr'
    };
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);