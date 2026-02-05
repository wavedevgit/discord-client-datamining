// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var2 = var0.IntlMessageFormat;
    var1 = var2.__addLocaleData;
    var0 = {};
    var3 = 'cs';
    var0.locale = var3;
    var3 = function arg0, arg1() {
        _fun112236: for (var _fun112236_ip = 0;;) switch (_fun112236_ip) {
            case 0:
                var2 = arg0;
                var0 = global;
                var1 = var0.String;
                var0 = undefined;
                var3 = var1.bind(var0)(var2);
                var1 = var3.split;
                var0 = '.';
                var0 = var1.bind(var3)(var0);
                var1 = 0;
                var3 = var0[var1];
                var1 = 1;
                var0 = var0[var1];
                var5 = !var0;
                var4 = 'other';
                var6 = arg1;
                var0 = var4;
                if (var6) {
                    _fun112236_ip = 112;
                    continue _fun112236
                }
            case 61:
                if (!(var1 == var2)) {
                    _fun112236_ip = 72;
                    continue _fun112236
                }
            case 65:
                var1 = 'one';
                if (var5) {
                    _fun112236_ip = 109;
                    continue _fun112236
                }
            case 72:
                var2 = 2;
                if (!(var3 >= var2)) {
                    _fun112236_ip = 93;
                    continue _fun112236
                }
            case 79:
                var2 = 4;
                if (!(var3 <= var2)) {
                    _fun112236_ip = 93;
                    continue _fun112236
                }
            case 86:
                var2 = 'few';
                if (var5) {
                    _fun112236_ip = 106;
                    continue _fun112236
                }
            case 93:
                var3 = 'many';
                if (!var5) {
                    _fun112236_ip = 103;
                    continue _fun112236
                }
            case 100:
                var3 = var4;
            case 103:
                var2 = var3;
            case 106:
                var1 = var2;
            case 109:
                var0 = var1;
            case 112:
                return var0;
        }
    };
    var0.pluralRuleFunction = var3;
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);