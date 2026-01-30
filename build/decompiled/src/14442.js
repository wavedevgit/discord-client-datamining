// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var2 = var0.IntlMessageFormat;
    var1 = var2.__addLocaleData;
    var0 = {};
    var3 = 'pl';
    var0.locale = var3;
    var3 = function(arg0, arg1) { // Original name: pluralRuleFunction, environment: var3
        _fun112821: for (var _fun112821_ip = 0;;) switch (_fun112821_ip) {
            case 0:
                var1 = arg0;
                var0 = global;
                var2 = var0.String;
                var0 = undefined;
                var3 = var2.bind(var0)(var1);
                var2 = var3.split;
                var0 = '.';
                var0 = var2.bind(var3)(var0);
                var8 = 0;
                var9 = var0[var8];
                var3 = 1;
                var0 = var0[var3];
                var4 = !var0;
                var2 = var9.slice;
                var0 = -1;
                var7 = var2.bind(var9)(var0);
                var2 = var9.slice;
                var0 = -2;
                var6 = var2.bind(var9)(var0);
                var5 = 'other';
                var2 = arg1;
                var0 = var5;
                if (var2) {
                    _fun112821_ip = 231;
                    continue _fun112821
                }
            case 96:
                if (!(var3 == var1)) {
                    _fun112821_ip = 107;
                    continue _fun112821
                }
            case 100:
                var1 = 'one';
                if (var4) {
                    _fun112821_ip = 228;
                    continue _fun112821
                }
            case 107:
                if (!var4) {
                    _fun112821_ip = 154;
                    continue _fun112821
                }
            case 110:
                var2 = 2;
                if (!(var7 >= var2)) {
                    _fun112821_ip = 154;
                    continue _fun112821
                }
            case 117:
                var2 = 4;
                if (!(var7 <= var2)) {
                    _fun112821_ip = 154;
                    continue _fun112821
                }
            case 124:
                var2 = 12;
                var10 = var6 < var2;
                var11 = 'few';
                var2 = var11;
                if (var10) {
                    _fun112821_ip = 225;
                    continue _fun112821
                }
            case 141:
                var10 = 14;
                var10 = var6 > var10;
                var2 = var11;
                if (var10) {
                    _fun112821_ip = 225;
                    continue _fun112821
                }
            case 154:
                if (!var4) {
                    _fun112821_ip = 169;
                    continue _fun112821
                }
            case 157:
                if (!(var3 != var9)) {
                    _fun112821_ip = 169;
                    continue _fun112821
                }
            case 161:
                if (!(var8 != var7)) {
                    _fun112821_ip = 218;
                    continue _fun112821
                }
            case 165:
                if (!(var3 != var7)) {
                    _fun112821_ip = 218;
                    continue _fun112821
                }
            case 169:
                if (!var4) {
                    _fun112821_ip = 186;
                    continue _fun112821
                }
            case 172:
                var3 = 5;
                if (!(var7 >= var3)) {
                    _fun112821_ip = 186;
                    continue _fun112821
                }
            case 179:
                var3 = 9;
                if (!(!(var7 <= var3))) {
                    _fun112821_ip = 218;
                    continue _fun112821
                }
            case 186:
                var3 = var5;
                if (!var4) {
                    _fun112821_ip = 222;
                    continue _fun112821
                }
            case 192:
                var4 = 12;
                var4 = var6 >= var4;
                var3 = var5;
                if (!var4) {
                    _fun112821_ip = 222;
                    continue _fun112821
                }
            case 205:
                var4 = 14;
                var4 = var6 <= var4;
                var3 = var5;
                if (!var4) {
                    _fun112821_ip = 222;
                    continue _fun112821
                }
            case 218:
                var3 = 'many';
            case 222:
                var2 = var3;
            case 225:
                var1 = var2;
            case 228:
                var0 = var1;
            case 231:
                return var0;
        }
    };
    var0.pluralRuleFunction = var3;
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);