// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var3 = var0.IntlMessageFormat;
    var2 = var3.__addLocaleData;
    var1 = {};
    var4 = 'it';
    var1.locale = var4;
    var4 = function(arg0, arg1) { // Original name: pluralRuleFunction, environment: var4
        _fun112809: for (var _fun112809_ip = 0;;) switch (_fun112809_ip) {
            case 0:
                var2 = arg0;
                var0 = global;
                var1 = var0.String;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var1 = var3.split;
                var0 = '.';
                var1 = var1.bind(var3)(var0);
                var0 = 1;
                var1 = var1[var0];
                var1 = !var1;
                var3 = arg1;
                if (var3) {
                    _fun112809_ip = 74;
                    continue _fun112809
                }
            case 48:
                var4 = var0 == var2;
                var3 = 'other';
                var0 = var3;
                if (!var4) {
                    _fun112809_ip = 72;
                    continue _fun112809
                }
            case 62:
                var0 = var3;
                if (!var1) {
                    _fun112809_ip = 72;
                    continue _fun112809
                }
            case 68:
                var0 = 'one';
            case 72:
                _fun112809_ip = 119;
                continue _fun112809;
            case 74:
                var1 = 11;
                if (!(var1 != var2)) {
                    _fun112809_ip = 112;
                    continue _fun112809
                }
            case 81:
                var1 = 8;
                if (!(var1 != var2)) {
                    _fun112809_ip = 112;
                    continue _fun112809
                }
            case 88:
                var1 = 80;
                if (!(var1 != var2)) {
                    _fun112809_ip = 112;
                    continue _fun112809
                }
            case 95:
                var1 = 800;
                var2 = var1 == var2;
                var1 = 'other';
                if (!var2) {
                    _fun112809_ip = 116;
                    continue _fun112809
                }
            case 112:
                var1 = 'many';
            case 116:
                var0 = var1;
            case 119:
                return var0;
        }
    };
    var1.pluralRuleFunction = var4;
    var1 = var2.bind(var3)(var1);
    var3 = var0.IntlMessageFormat;
    var2 = var3.__addLocaleData;
    var1 = {
        'locale': 'it-CH',
        'parentLocale': 'it'
    };
    var1 = var2.bind(var3)(var1);
    var2 = var0.IntlMessageFormat;
    var1 = var2.__addLocaleData;
    var0 = {
        'locale': 'it-SM',
        'parentLocale': 'it'
    };
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);