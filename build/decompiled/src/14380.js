// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var2 = var0.IntlMessageFormat;
    var1 = var2.__addLocaleData;
    var0 = {};
    var3 = 'vi';
    var0.locale = var3;
    var3 = function arg0, arg1() {
        _fun112188: for (var _fun112188_ip = 0;;) switch (_fun112188_ip) {
            case 0:
                var2 = 'other';
                var1 = arg1;
                var0 = var2;
                if (!var1) {
                    _fun112188_ip = 33;
                    continue _fun112188
                }
            case 13:
                var3 = 1;
                var1 = arg0;
                var1 = var3 == var1;
                var0 = var2;
                if (!var1) {
                    _fun112188_ip = 33;
                    continue _fun112188
                }
            case 29:
                var0 = 'one';
            case 33:
                return var0;
        }
    };
    var0.pluralRuleFunction = var3;
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);