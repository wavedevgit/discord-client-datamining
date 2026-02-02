// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var2 = var0.IntlMessageFormat;
    var1 = var2.__addLocaleData;
    var0 = {};
    var3 = 'bg';
    var0.locale = var3;
    var3 = function arg0, arg1() {
        _fun112136: for (var _fun112136_ip = 0;;) switch (_fun112136_ip) {
            case 0:
                var1 = 'other';
                var2 = arg1;
                var0 = var1;
                if (var2) {
                    _fun112136_ip = 33;
                    continue _fun112136
                }
            case 13:
                var3 = 1;
                var2 = arg0;
                var2 = var3 == var2;
                if (!var2) {
                    _fun112136_ip = 30;
                    continue _fun112136
                }
            case 26:
                var1 = 'one';
            case 30:
                var0 = var1;
            case 33:
                return var0;
        }
    };
    var0.pluralRuleFunction = var3;
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);