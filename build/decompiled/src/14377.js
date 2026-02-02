// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var3 = var0.IntlMessageFormat;
    var2 = var3.__addLocaleData;
    var1 = {};
    var4 = 'sv';
    var1.locale = var4;
    var4 = function arg0, arg1() {
        _fun112181: for (var _fun112181_ip = 0;;) switch (_fun112181_ip) {
            case 0:
                var0 = arg0;
                var2 = global;
                var1 = var2.String;
                var7 = undefined;
                var4 = var1.bind(var7)(var0);
                var3 = var4.split;
                var1 = '.';
                var6 = var3.bind(var4)(var1);
                var1 = 1;
                var3 = var6[var1];
                var4 = !var3;
                var3 = var2.Number;
                var5 = 0;
                var2 = var6[var5];
                var2 = var3.bind(var7)(var2);
                var2 = var2 == var0;
                var3 = var2;
                if (!var2) {
                    _fun112181_ip = 89;
                    continue _fun112181
                }
            case 69:
                var9 = var6[var5];
                var8 = var9.slice;
                var7 = -1;
                var3 = var8.bind(var9)(var7);
            case 89:
                if (!var2) {
                    _fun112181_ip = 112;
                    continue _fun112181
                }
            case 92:
                var7 = var6[var5];
                var6 = var7.slice;
                var5 = -2;
                var2 = var6.bind(var7)(var5);
            case 112:
                var5 = arg1;
                if (var5) {
                    _fun112181_ip = 144;
                    continue _fun112181
                }
            case 118:
                var6 = var1 == var0;
                var5 = 'other';
                var0 = var5;
                if (!var6) {
                    _fun112181_ip = 142;
                    continue _fun112181
                }
            case 132:
                var0 = var5;
                if (!var4) {
                    _fun112181_ip = 142;
                    continue _fun112181
                }
            case 138:
                var0 = 'one';
            case 142:
                _fun112181_ip = 183;
                continue _fun112181;
            case 144:
                if (!(var1 != var3)) {
                    _fun112181_ip = 155;
                    continue _fun112181
                }
            case 148:
                var1 = 2;
                if (!(var1 == var3)) {
                    _fun112181_ip = 176;
                    continue _fun112181
                }
            case 155:
                var1 = 11;
                if (!(var1 != var2)) {
                    _fun112181_ip = 176;
                    continue _fun112181
                }
            case 162:
                var1 = 12;
                var2 = var1 == var2;
                var1 = 'one';
                if (!var2) {
                    _fun112181_ip = 180;
                    continue _fun112181
                }
            case 176:
                var1 = 'other';
            case 180:
                var0 = var1;
            case 183:
                return var0;
        }
    };
    var1.pluralRuleFunction = var4;
    var1 = var2.bind(var3)(var1);
    var3 = var0.IntlMessageFormat;
    var2 = var3.__addLocaleData;
    var1 = {
        'locale': 'sv-AX',
        'parentLocale': 'sv'
    };
    var1 = var2.bind(var3)(var1);
    var2 = var0.IntlMessageFormat;
    var1 = var2.__addLocaleData;
    var0 = {
        'locale': 'sv-FI',
        'parentLocale': 'sv'
    };
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);