// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var2 = var0.IntlMessageFormat;
    var1 = var2.__addLocaleData;
    var0 = {};
    var3 = 'fi';
    var0.locale = var3;
    var3 = function(arg0, arg1) { // Original name: pluralRuleFunction, environment: var3
        _fun112801: for (var _fun112801_ip = 0;;) switch (_fun112801_ip) {
            case 0:
                var4 = arg0;
                var0 = global;
                var1 = var0.String;
                var0 = undefined;
                var2 = var1.bind(var0)(var4);
                var1 = var2.split;
                var0 = '.';
                var0 = var1.bind(var2)(var0);
                var1 = 1;
                var0 = var0[var1];
                var2 = !var0;
                var3 = 'other';
                var5 = arg1;
                var0 = var3;
                if (var5) {
                    _fun112801_ip = 78;
                    continue _fun112801
                }
            case 55:
                var4 = var1 == var4;
                var1 = var3;
                if (!var4) {
                    _fun112801_ip = 75;
                    continue _fun112801
                }
            case 65:
                var1 = var3;
                if (!var2) {
                    _fun112801_ip = 75;
                    continue _fun112801
                }
            case 71:
                var1 = 'one';
            case 75:
                var0 = var1;
            case 78:
                return var0;
        }
    };
    var0.pluralRuleFunction = var3;
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);