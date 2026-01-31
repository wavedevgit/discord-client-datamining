// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var2 = var0.IntlMessageFormat;
    var1 = var2.__addLocaleData;
    var0 = {};
    var3 = 'hi';
    var0.locale = var3;
    var3 = function(arg0, arg1) { // Original name: pluralRuleFunction, environment: var3
        _fun112193: for (var _fun112193_ip = 0;;) switch (_fun112193_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                if (var0) {
                    _fun112193_ip = 44;
                    continue _fun112193
                }
            case 9:
                var0 = 0;
                var1 = var5 >= var0;
                var2 = 'other';
                var0 = var2;
                if (!var1) {
                    _fun112193_ip = 42;
                    continue _fun112193
                }
            case 25:
                var1 = 1;
                var1 = var5 <= var1;
                var0 = var2;
                if (!var1) {
                    _fun112193_ip = 42;
                    continue _fun112193
                }
            case 38:
                var0 = 'one';
            case 42:
                _fun112193_ip = 134;
                continue _fun112193;
            case 44:
                var1 = 1;
                var2 = var1 == var5;
                var1 = 'one';
                if (var2) {
                    _fun112193_ip = 131;
                    continue _fun112193
                }
            case 58:
                var2 = 2;
                var3 = var2 == var5;
                var4 = 'two';
                var2 = var4;
                if (var3) {
                    _fun112193_ip = 128;
                    continue _fun112193
                }
            case 77:
                var3 = 3;
                var3 = var3 == var5;
                var2 = var4;
                if (var3) {
                    _fun112193_ip = 128;
                    continue _fun112193
                }
            case 90:
                var3 = 4;
                var4 = var3 == var5;
                var3 = 'few';
                if (var4) {
                    _fun112193_ip = 125;
                    continue _fun112193
                }
            case 104:
                var4 = 6;
                var5 = var4 == var5;
                var4 = 'other';
                if (!var5) {
                    _fun112193_ip = 122;
                    continue _fun112193
                }
            case 118:
                var4 = 'many';
            case 122:
                var3 = var4;
            case 125:
                var2 = var3;
            case 128:
                var1 = var2;
            case 131:
                var0 = var1;
            case 134:
                return var0;
        }
    };
    var0.pluralRuleFunction = var3;
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);