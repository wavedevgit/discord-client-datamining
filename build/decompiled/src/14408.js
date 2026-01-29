// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var2 = var0.IntlMessageFormat;
    var1 = var2.__addLocaleData;
    var0 = {};
    var3 = 'hu';
    var0.locale = var3;
    var3 = function(arg0, arg1) { // Original name: pluralRuleFunction, environment: var3
        _fun112544: for (var _fun112544_ip = 0;;) switch (_fun112544_ip) {
            case 0:
                var2 = arg0;
                var1 = 1;
                var0 = arg1;
                if (var0) {
                    _fun112544_ip = 29;
                    continue _fun112544
                }
            case 12:
                var3 = var1 == var2;
                var0 = 'other';
                if (!var3) {
                    _fun112544_ip = 27;
                    continue _fun112544
                }
            case 23:
                var0 = 'one';
            case 27:
                _fun112544_ip = 54;
                continue _fun112544;
            case 29:
                if (!(var1 != var2)) {
                    _fun112544_ip = 47;
                    continue _fun112544
                }
            case 33:
                var1 = 5;
                var2 = var1 == var2;
                var1 = 'other';
                if (!var2) {
                    _fun112544_ip = 51;
                    continue _fun112544
                }
            case 47:
                var1 = 'one';
            case 51:
                var0 = var1;
            case 54:
                return var0;
        }
    };
    var0.pluralRuleFunction = var3;
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);