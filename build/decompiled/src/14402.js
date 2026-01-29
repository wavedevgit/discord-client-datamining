// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var3 = var0.IntlMessageFormat;
    var2 = var3.__addLocaleData;
    var1 = {};
    var4 = 'el';
    var1.locale = var4;
    var4 = function(arg0, arg1) { // Original name: pluralRuleFunction, environment: var4
        _fun112530: for (var _fun112530_ip = 0;;) switch (_fun112530_ip) {
            case 0:
                var1 = 'other';
                var2 = arg1;
                var0 = var1;
                if (var2) {
                    _fun112530_ip = 33;
                    continue _fun112530
                }
            case 13:
                var3 = 1;
                var2 = arg0;
                var2 = var3 == var2;
                if (!var2) {
                    _fun112530_ip = 30;
                    continue _fun112530
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
        'locale': 'el-CY',
        'parentLocale': 'el'
    };
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);