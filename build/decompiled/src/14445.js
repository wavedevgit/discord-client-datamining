// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var3 = var0.IntlMessageFormat;
    var2 = var3.__addLocaleData;
    var1 = {};
    var4 = 'ro';
    var1.locale = var4;
    var4 = function arg0, arg1() {
        _fun112298: for (var _fun112298_ip = 0;;) switch (_fun112298_ip) {
            case 0:
                var2 = arg0;
                var3 = global;
                var0 = var3.String;
                var7 = undefined;
                var4 = var0.bind(var7)(var2);
                var1 = var4.split;
                var0 = '.';
                var0 = var1.bind(var4)(var0);
                var1 = 1;
                var4 = var0[var1];
                var4 = !var4;
                var6 = var3.Number;
                var3 = 0;
                var5 = var0[var3];
                var5 = var6.bind(var7)(var5);
                var6 = var5 == var2;
                if (!var6) {
                    _fun112298_ip = 86;
                    continue _fun112298
                }
            case 66:
                var7 = var0[var3];
                var5 = var7.slice;
                var0 = -2;
                var6 = var5.bind(var7)(var0);
            case 86:
                var0 = arg1;
                if (var0) {
                    _fun112298_ip = 156;
                    continue _fun112298
                }
            case 92:
                if (!(var1 == var2)) {
                    _fun112298_ip = 103;
                    continue _fun112298
                }
            case 96:
                var0 = 'one';
                if (var4) {
                    _fun112298_ip = 154;
                    continue _fun112298
                }
            case 103:
                if (!var4) {
                    _fun112298_ip = 147;
                    continue _fun112298
                }
            case 106:
                if (!(var3 != var2)) {
                    _fun112298_ip = 147;
                    continue _fun112298
                }
            case 110:
                var4 = var1 != var2;
                var5 = 'other';
                var3 = var5;
                if (!var4) {
                    _fun112298_ip = 151;
                    continue _fun112298
                }
            case 124:
                var4 = var6 >= var1;
                var3 = var5;
                if (!var4) {
                    _fun112298_ip = 151;
                    continue _fun112298
                }
            case 134:
                var4 = 19;
                var4 = var6 <= var4;
                var3 = var5;
                if (!var4) {
                    _fun112298_ip = 151;
                    continue _fun112298
                }
            case 147:
                var3 = 'few';
            case 151:
                var0 = var3;
            case 154:
                _fun112298_ip = 174;
                continue _fun112298;
            case 156:
                var2 = var1 == var2;
                var1 = 'other';
                if (!var2) {
                    _fun112298_ip = 171;
                    continue _fun112298
                }
            case 167:
                var1 = 'one';
            case 171:
                var0 = var1;
            case 174:
                return var0;
        }
    };
    var1.pluralRuleFunction = var4;
    var1 = var2.bind(var3)(var1);
    var2 = var0.IntlMessageFormat;
    var1 = var2.__addLocaleData;
    var0 = {
        'locale': 'ro-MD',
        'parentLocale': 'ro'
    };
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);