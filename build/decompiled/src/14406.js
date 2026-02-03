// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var3 = var0.IntlMessageFormat;
    var2 = var3.__addLocaleData;
    var1 = {};
    var4 = 'hr';
    var1.locale = var4;
    var4 = function arg0, arg1() {
        _fun112162: for (var _fun112162_ip = 0;;) switch (_fun112162_ip) {
            case 0:
                var0 = global;
                var2 = var0.String;
                var1 = undefined;
                var0 = arg0;
                var2 = var2.bind(var1)(var0);
                var1 = var2.split;
                var0 = '.';
                var0 = var1.bind(var2)(var0);
                var1 = 0;
                var3 = var0[var1];
                var8 = 1;
                var4 = var0[var8];
                if (var4) {
                    _fun112162_ip = 52;
                    continue _fun112162
                }
            case 48:
                var4 = '';
            case 52:
                var0 = var0[var8];
                var2 = !var0;
                var0 = var3.slice;
                var5 = -1;
                var7 = var0.bind(var3)(var5);
                var0 = var3.slice;
                var1 = -2;
                var3 = var0.bind(var3)(var1);
                var0 = var4.slice;
                var6 = var0.bind(var4)(var5);
                var0 = var4.slice;
                var5 = var0.bind(var4)(var1);
                var4 = 'other';
                var1 = arg1;
                var0 = var4;
                if (var1) {
                    _fun112162_ip = 253;
                    continue _fun112162
                }
            case 127:
                if (!var2) {
                    _fun112162_ip = 148;
                    continue _fun112162
                }
            case 130:
                if (!(var8 == var7)) {
                    _fun112162_ip = 148;
                    continue _fun112162
                }
            case 134:
                var1 = 11;
                var9 = var1 != var3;
                var1 = 'one';
                if (var9) {
                    _fun112162_ip = 250;
                    continue _fun112162
                }
            case 148:
                if (!(var8 == var6)) {
                    _fun112162_ip = 166;
                    continue _fun112162
                }
            case 152:
                var8 = 11;
                var8 = var8 != var5;
                var1 = 'one';
                if (var8) {
                    _fun112162_ip = 250;
                    continue _fun112162
                }
            case 166:
                if (!var2) {
                    _fun112162_ip = 197;
                    continue _fun112162
                }
            case 169:
                var2 = 2;
                if (!(var7 >= var2)) {
                    _fun112162_ip = 197;
                    continue _fun112162
                }
            case 176:
                var2 = 4;
                if (!(var7 <= var2)) {
                    _fun112162_ip = 197;
                    continue _fun112162
                }
            case 183:
                var2 = 12;
                if (!(!(var3 < var2))) {
                    _fun112162_ip = 243;
                    continue _fun112162
                }
            case 190:
                var2 = 14;
                if (!(!(var3 > var2))) {
                    _fun112162_ip = 243;
                    continue _fun112162
                }
            case 197:
                var2 = 2;
                var3 = var6 >= var2;
                var2 = var4;
                if (!var3) {
                    _fun112162_ip = 247;
                    continue _fun112162
                }
            case 210:
                var3 = 4;
                var3 = var6 <= var3;
                var2 = var4;
                if (!var3) {
                    _fun112162_ip = 247;
                    continue _fun112162
                }
            case 223:
                var3 = 12;
                if (!(!(var5 < var3))) {
                    _fun112162_ip = 243;
                    continue _fun112162
                }
            case 230:
                var3 = 14;
                var3 = var5 > var3;
                var2 = var4;
                if (!var3) {
                    _fun112162_ip = 247;
                    continue _fun112162
                }
            case 243:
                var2 = 'few';
            case 247:
                var1 = var2;
            case 250:
                var0 = var1;
            case 253:
                return var0;
        }
    };
    var1.pluralRuleFunction = var4;
    var1 = var2.bind(var3)(var1);
    var2 = var0.IntlMessageFormat;
    var1 = var2.__addLocaleData;
    var0 = {
        'locale': 'hr-BA',
        'parentLocale': 'hr'
    };
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);