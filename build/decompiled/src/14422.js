// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var0 = global;
    var2 = var0.IntlMessageFormat;
    var1 = var2.__addLocaleData;
    var0 = {};
    var3 = 'uk';
    var0.locale = var3;
    var3 = function(arg0, arg1) { // Original name: pluralRuleFunction, environment: var3
        _fun112573: for (var _fun112573_ip = 0;;) switch (_fun112573_ip) {
            case 0:
                var4 = arg0;
                var2 = global;
                var0 = var2.String;
                var7 = undefined;
                var3 = var0.bind(var7)(var4);
                var1 = var3.split;
                var0 = '.';
                var1 = var1.bind(var3)(var0);
                var3 = 0;
                var8 = var1[var3];
                var0 = 1;
                var5 = var1[var0];
                var5 = !var5;
                var6 = var2.Number;
                var2 = var1[var3];
                var2 = var6.bind(var7)(var2);
                var4 = var2 == var4;
                var2 = var4;
                if (!var4) {
                    _fun112573_ip = 93;
                    continue _fun112573
                }
            case 73:
                var9 = var1[var3];
                var7 = var9.slice;
                var6 = -1;
                var2 = var7.bind(var9)(var6);
            case 93:
                if (!var4) {
                    _fun112573_ip = 116;
                    continue _fun112573
                }
            case 96:
                var7 = var1[var3];
                var6 = var7.slice;
                var1 = -2;
                var4 = var6.bind(var7)(var1);
            case 116:
                var6 = var8.slice;
                var1 = -1;
                var6 = var6.bind(var8)(var1);
                var7 = var8.slice;
                var1 = -2;
                var7 = var7.bind(var8)(var1);
                var1 = arg1;
                if (var1) {
                    _fun112573_ip = 297;
                    continue _fun112573
                }
            case 157:
                if (!var5) {
                    _fun112573_ip = 178;
                    continue _fun112573
                }
            case 160:
                if (!(var0 == var6)) {
                    _fun112573_ip = 178;
                    continue _fun112573
                }
            case 164:
                var0 = 11;
                var1 = var0 != var7;
                var0 = 'one';
                if (var1) {
                    _fun112573_ip = 295;
                    continue _fun112573
                }
            case 178:
                if (!var5) {
                    _fun112573_ip = 225;
                    continue _fun112573
                }
            case 181:
                var1 = 2;
                if (!(var6 >= var1)) {
                    _fun112573_ip = 225;
                    continue _fun112573
                }
            case 188:
                var1 = 4;
                if (!(var6 <= var1)) {
                    _fun112573_ip = 225;
                    continue _fun112573
                }
            case 195:
                var1 = 12;
                var8 = var7 < var1;
                var9 = 'few';
                var1 = var9;
                if (var8) {
                    _fun112573_ip = 292;
                    continue _fun112573
                }
            case 212:
                var8 = 14;
                var8 = var7 > var8;
                var1 = var9;
                if (var8) {
                    _fun112573_ip = 292;
                    continue _fun112573
                }
            case 225:
                if (!var5) {
                    _fun112573_ip = 232;
                    continue _fun112573
                }
            case 228:
                if (!(var3 != var6)) {
                    _fun112573_ip = 285;
                    continue _fun112573
                }
            case 232:
                if (!var5) {
                    _fun112573_ip = 249;
                    continue _fun112573
                }
            case 235:
                var3 = 5;
                if (!(var6 >= var3)) {
                    _fun112573_ip = 249;
                    continue _fun112573
                }
            case 242:
                var3 = 9;
                if (!(!(var6 <= var3))) {
                    _fun112573_ip = 285;
                    continue _fun112573
                }
            case 249:
                var6 = 'other';
                var3 = var6;
                if (!var5) {
                    _fun112573_ip = 289;
                    continue _fun112573
                }
            case 259:
                var5 = 11;
                var5 = var7 >= var5;
                var3 = var6;
                if (!var5) {
                    _fun112573_ip = 289;
                    continue _fun112573
                }
            case 272:
                var5 = 14;
                var5 = var7 <= var5;
                var3 = var6;
                if (!var5) {
                    _fun112573_ip = 289;
                    continue _fun112573
                }
            case 285:
                var3 = 'many';
            case 289:
                var1 = var3;
            case 292:
                var0 = var1;
            case 295:
                _fun112573_ip = 334;
                continue _fun112573;
            case 297:
                var1 = 3;
                var2 = var1 == var2;
                var3 = 'other';
                var1 = var3;
                if (!var2) {
                    _fun112573_ip = 331;
                    continue _fun112573
                }
            case 314:
                var2 = 13;
                var2 = var2 != var4;
                var1 = var3;
                if (!var2) {
                    _fun112573_ip = 331;
                    continue _fun112573
                }
            case 327:
                var1 = 'few';
            case 331:
                var0 = var1;
            case 334:
                return var0;
        }
    };
    var0.pluralRuleFunction = var3;
    var0 = var1.bind(var2)(var0);
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);