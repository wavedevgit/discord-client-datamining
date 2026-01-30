// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun97468: for (var _fun97468_ip = 0;;) switch (_fun97468_ip) {
        case 0:
            var5 = require;
            var6 = dependencyMap;
            var7 = 0;
            var1 = var6[var7];
            var0 = undefined;
            var1 = var5.bind(var0)(var1);
            var1 = var1.process;
            if (!var1) {
                _fun97468_ip = 49;
                continue _fun97468
            }
        case 28:
            var2 = var6[var7];
            var2 = var5.bind(var0)(var2);
            var2 = var2.process;
            var1 = var2.versions;
        case 49:
            if (var1) {
                _fun97468_ip = 94;
                continue _fun97468
            }
        case 52:
            var2 = var6[var7];
            var2 = var5.bind(var0)(var2);
            var2 = var2.Deno;
            if (!var2) {
                _fun97468_ip = 91;
                continue _fun97468
            }
        case 70:
            var3 = var6[var7];
            var3 = var5.bind(var0)(var3);
            var3 = var3.Deno;
            var2 = var3.version;
        case 91:
            var1 = var2;
        case 94:
            var8 = var1;
            if (!var8) {
                _fun97468_ip = 108;
                continue _fun97468
            }
        case 100:
            var8 = var1.v8;
        case 108:
            var3 = undefined;
            var2 = undefined;
            if (!var8) {
                _fun97468_ip = 178;
                continue _fun97468
            }
        case 115:
            var4 = var8.split;
            var1 = '.';
            var4 = var4.bind(var8)(var1);
            var1 = var4[var7];
            if (!(var1 > var7)) {
                _fun97468_ip = 154;
                continue _fun97468
            }
        case 137:
            var8 = var4[var7];
            var1 = 4;
            var8 = var8 < var1;
            var1 = 1;
            if (var8) {
                _fun97468_ip = 172;
                continue _fun97468
            }
        case 154:
            var8 = var4[var7];
            var7 = 1;
            var7 = var4[var7];
            var7 = var8 + var7;
            var1 = var7 - 0;
        case 172:
            var2 = var1;
            var3 = var4;
        case 178:
            var1 = !var2;
            if (var2) {
                _fun97468_ip = 196;
                continue _fun97468
            }
        case 184:
            var4 = 1;
            var4 = var6[var4];
            var1 = var5.bind(var0)(var4);
        case 196:
            if (!var1) {
                _fun97468_ip = 259;
                continue _fun97468
            }
        case 199:
            var8 = 1;
            var4 = var6[var8];
            var9 = var5.bind(var0)(var4);
            var7 = var9.match;
            var4 = /Edge\\/(\d + ) / ;
            var4 = var7.bind(var9)(var4);
            var7 = !var4;
            if (var7) {
                _fun97468_ip = 253;
                continue _fun97468
            }
        case 242:
            var9 = var4[var8];
            var8 = 74;
            var7 = var9 >= var8;
        case 253:
            var1 = var7;
            var3 = var4;
        case 259:
            if (!var1) {
                _fun97468_ip = 302;
                continue _fun97468
            }
        case 262:
            var4 = 1;
            var4 = var6[var4];
            var6 = var5.bind(var0)(var4);
            var5 = var6.match;
            var4 = /Chrome\\/(\d + ) / ;
            var1 = var5.bind(var6)(var4);
            var3 = var1;
        case 302:
            if (!var1) {
                _fun97468_ip = 315;
                continue _fun97468
            }
        case 305:
            var1 = 1;
            var1 = var3[var1];
            var2 = var1 - 0;
        case 315:
            var1 = module;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12659, 12680]);