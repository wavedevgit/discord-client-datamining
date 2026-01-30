// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var3 = var0.IntlMessageFormat;
    var2 = var3.__addLocaleData;
    var1 = {};
    var4 = 'da';
    var1.locale = var4;
    var4 = function(arg0, arg1) { // Original name: pluralRuleFunction, environment: var4
        _fun112789: for (var _fun112789_ip = 0;;) switch (_fun112789_ip) {
            case 0:
                var0 = arg0;
                var2 = global;
                var1 = var2.String;
                var5 = undefined;
                var4 = var1.bind(var5)(var0);
                var3 = var4.split;
                var1 = '.';
                var1 = var3.bind(var4)(var1);
                var4 = 0;
                var3 = var1[var4];
                var2 = var2.Number;
                var1 = var1[var4];
                var1 = var2.bind(var5)(var1);
                var5 = var1 == var0;
                var1 = arg1;
                if (var1) {
                    _fun112789_ip = 103;
                    continue _fun112789
                }
            case 63:
                var1 = 1;
                var6 = var1 != var0;
                var2 = 'one';
                var0 = var2;
                if (!var6) {
                    _fun112789_ip = 107;
                    continue _fun112789
                }
            case 80:
                if (var5) {
                    _fun112789_ip = 103;
                    continue _fun112789
                }
            case 83:
                var4 = var4 != var3;
                var0 = var2;
                if (!var4) {
                    _fun112789_ip = 107;
                    continue _fun112789
                }
            case 93:
                var1 = var1 != var3;
                var0 = var2;
                if (!var1) {
                    _fun112789_ip = 107;
                    continue _fun112789
                }
            case 103:
                var0 = 'other';
            case 107:
                return var0;
        }
    };
    var1.pluralRuleFunction = var4;
    var1 = var2.bind(var3)(var1);
    var2 = var0.IntlMessageFormat;
    var1 = var2.__addLocaleData;
    var0 = {
        'locale': 'da-GL',
        'parentLocale': 'da'
    };
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);