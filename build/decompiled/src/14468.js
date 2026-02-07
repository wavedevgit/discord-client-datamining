// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = {};
    var0 = 'en';
    var1.locale = var0;
    var0 = function arg0, arg1() {
        _fun112741: for (var _fun112741_ip = 0;;) switch (_fun112741_ip) {
            case 0:
                var0 = arg0;
                var3 = global;
                var1 = var3.String;
                var7 = undefined;
                var4 = var1.bind(var7)(var0);
                var2 = var4.split;
                var1 = '.';
                var5 = var2.bind(var4)(var1);
                var1 = 1;
                var2 = var5[var1];
                var2 = !var2;
                var6 = var3.Number;
                var3 = 0;
                var4 = var5[var3];
                var4 = var6.bind(var7)(var4);
                var6 = var4 == var0;
                var4 = var6;
                if (!var6) {
                    _fun112741_ip = 89;
                    continue _fun112741
                }
            case 69:
                var9 = var5[var3];
                var8 = var9.slice;
                var7 = -1;
                var4 = var8.bind(var9)(var7);
            case 89:
                if (!var6) {
                    _fun112741_ip = 112;
                    continue _fun112741
                }
            case 92:
                var7 = var5[var3];
                var5 = var7.slice;
                var3 = -2;
                var6 = var5.bind(var7)(var3);
            case 112:
                var3 = arg1;
                if (var3) {
                    _fun112741_ip = 144;
                    continue _fun112741
                }
            case 118:
                var5 = var1 == var0;
                var3 = 'other';
                var0 = var3;
                if (!var5) {
                    _fun112741_ip = 142;
                    continue _fun112741
                }
            case 132:
                var0 = var3;
                if (!var2) {
                    _fun112741_ip = 142;
                    continue _fun112741
                }
            case 138:
                var0 = 'one';
            case 142:
                _fun112741_ip = 228;
                continue _fun112741;
            case 144:
                if (!(var1 == var4)) {
                    _fun112741_ip = 162;
                    continue _fun112741
                }
            case 148:
                var1 = 11;
                var2 = var1 != var6;
                var1 = 'one';
                if (var2) {
                    _fun112741_ip = 225;
                    continue _fun112741
                }
            case 162:
                var2 = 2;
                if (!(var2 == var4)) {
                    _fun112741_ip = 185;
                    continue _fun112741
                }
            case 169:
                var2 = 12;
                var3 = var2 != var6;
                var2 = 'two';
                if (var3) {
                    _fun112741_ip = 222;
                    continue _fun112741
                }
            case 185:
                var3 = 3;
                var4 = var3 == var4;
                var5 = 'other';
                var3 = var5;
                if (!var4) {
                    _fun112741_ip = 219;
                    continue _fun112741
                }
            case 202:
                var4 = 13;
                var4 = var4 != var6;
                var3 = var5;
                if (!var4) {
                    _fun112741_ip = 219;
                    continue _fun112741
                }
            case 215:
                var3 = 'few';
            case 219:
                var2 = var3;
            case 222:
                var1 = var2;
            case 225:
                var0 = var1;
            case 228:
                return var0;
        }
    };
    var1.pluralRuleFunction = var0;
    var0 = arg5;
    var0.default = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);