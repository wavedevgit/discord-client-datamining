// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var2 = var0.IntlMessageFormat;
    var1 = var2.__addLocaleData;
    var0 = {};
    var3 = 'lt';
    var0.locale = var3;
    var3 = function(arg0, arg1) { // Original name: pluralRuleFunction, environment: var3
        _fun112552: for (var _fun112552_ip = 0;;) switch (_fun112552_ip) {
            case 0:
                var3 = arg0;
                var2 = global;
                var0 = var2.String;
                var7 = undefined;
                var4 = var0.bind(var7)(var3);
                var1 = var4.split;
                var0 = '.';
                var0 = var1.bind(var4)(var0);
                var1 = 1;
                var5 = var0[var1];
                if (var5) {
                    _fun112552_ip = 46;
                    continue _fun112552
                }
            case 42:
                var5 = '';
            case 46:
                var6 = var2.Number;
                var4 = 0;
                var2 = var0[var4];
                var2 = var6.bind(var7)(var2);
                var8 = var2 == var3;
                var6 = var8;
                if (!var8) {
                    _fun112552_ip = 93;
                    continue _fun112552
                }
            case 73:
                var7 = var0[var4];
                var3 = var7.slice;
                var2 = -1;
                var6 = var3.bind(var7)(var2);
            case 93:
                if (!var8) {
                    _fun112552_ip = 116;
                    continue _fun112552
                }
            case 96:
                var3 = var0[var4];
                var2 = var3.slice;
                var0 = -2;
                var8 = var2.bind(var3)(var0);
            case 116:
                var3 = 'other';
                var2 = arg1;
                var0 = var3;
                if (var2) {
                    _fun112552_ip = 227;
                    continue _fun112552
                }
            case 129:
                if (!(var1 == var6)) {
                    _fun112552_ip = 163;
                    continue _fun112552
                }
            case 133:
                var1 = 11;
                var2 = var8 < var1;
                var7 = 'one';
                var1 = var7;
                if (var2) {
                    _fun112552_ip = 224;
                    continue _fun112552
                }
            case 150:
                var2 = 19;
                var2 = var8 > var2;
                var1 = var7;
                if (var2) {
                    _fun112552_ip = 224;
                    continue _fun112552
                }
            case 163:
                var2 = 2;
                if (!(var6 >= var2)) {
                    _fun112552_ip = 207;
                    continue _fun112552
                }
            case 170:
                var2 = 9;
                if (!(var6 <= var2)) {
                    _fun112552_ip = 207;
                    continue _fun112552
                }
            case 177:
                var2 = 11;
                var6 = var8 < var2;
                var7 = 'few';
                var2 = var7;
                if (var6) {
                    _fun112552_ip = 221;
                    continue _fun112552
                }
            case 194:
                var6 = 19;
                var6 = var8 > var6;
                var2 = var7;
                if (var6) {
                    _fun112552_ip = 221;
                    continue _fun112552
                }
            case 207:
                var4 = var4 != var5;
                if (!var4) {
                    _fun112552_ip = 218;
                    continue _fun112552
                }
            case 214:
                var3 = 'many';
            case 218:
                var2 = var3;
            case 221:
                var1 = var2;
            case 224:
                var0 = var1;
            case 227:
                return var0;
        }
    };
    var0.pluralRuleFunction = var3;
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);