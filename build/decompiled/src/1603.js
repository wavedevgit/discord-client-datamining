// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = function arg0, arg1, arg2, arg3() {
        _fun17819: for (var _fun17819_ip = 0;;) switch (_fun17819_ip) {
            case 0:
                var10 = arg0;
                var9 = arg1;
                var8 = arg2;
                var7 = arg3;
                var6 = undefined;
                var0 = undefined;
                if (!var8) {
                    _fun17819_ip = 31;
                    continue _fun17819
                }
            case 19:
                var1 = var8.call;
                var0 = var1.bind(var8)(var7, var10, var9);
            case 31:
                if (!(var6 === var0)) {
                    _fun17819_ip = 268;
                    continue _fun17819
                }
            case 38:
                if (!(var10 !== var9)) {
                    _fun17819_ip = 264;
                    continue _fun17819
                }
            case 45:
                var2 = 'object';
                var1 = typeof var10;
                if (!(var2 === var1)) {
                    _fun17819_ip = 260;
                    continue _fun17819
                }
            case 59:
                if (!var10) {
                    _fun17819_ip = 260;
                    continue _fun17819
                }
            case 65:
                var1 = typeof var9;
                if (!(var2 === var1)) {
                    _fun17819_ip = 260;
                    continue _fun17819
                }
            case 75:
                if (!var9) {
                    _fun17819_ip = 260;
                    continue _fun17819
                }
            case 81:
                var1 = global;
                var3 = var1.Object;
                var2 = var3.keys;
                var5 = var2.bind(var3)(var10);
                var3 = var1.Object;
                var2 = var3.keys;
                var2 = var2.bind(var3)(var9);
                var3 = var5.length;
                var2 = var2.length;
                if (!(var3 === var2)) {
                    _fun17819_ip = 256;
                    continue _fun17819
                }
            case 132:
                var1 = var1.Object;
                var1 = var1.prototype;
                var2 = var1.hasOwnProperty;
                var1 = var2.bind;
                var4 = var1.bind(var2)(var9);
                var1 = var5.length;
                var3 = 0;
                var2 = var3 < var1;
                var1 = false;
                if (!var2) {
                    _fun17819_ip = 250;
                    continue _fun17819
                }
            case 175:
                var14 = var5[var3];
                var2 = var4.bind(var6)(var14);
                if (var2) {
                    _fun17819_ip = 189;
                    continue _fun17819
                }
            case 187:
                return var1;
            case 189:
                var11 = var10[var14];
                var2 = var9[var14];
                var12 = undefined;
                if (!var8) {
                    _fun17819_ip = 226;
                    continue _fun17819
                }
            case 202:
                var13 = var8.call;
                var19 = var8;
                var18 = var7;
                var17 = var11;
                var16 = var2;
                var15 = var14;
                var12 = var19[var13](var18, var17, var16, var15, var14);
            case 226:
                if (!(var1 !== var12)) {
                    _fun17819_ip = 254;
                    continue _fun17819
                }
            case 230:
                if (!(var6 === var12)) {
                    _fun17819_ip = 238;
                    continue _fun17819
                }
            case 234:
                if (!(var11 === var2)) {
                    _fun17819_ip = 254;
                    continue _fun17819
                }
            case 238:
                var3 = var3 + 1;
                var2 = var5.length;
                if (var3 < var2) {
                    _fun17819_ip = 175;
                    continue _fun17819
                }
            case 250:
                var2 = true;
                return var2;
            case 254:
                return var1;
            case 256:
                var1 = false;
                return var1;
            case 260:
                var1 = false;
                return var1;
            case 264:
                var1 = true;
                return var1;
            case 268:
                var0 = !var0;
                var0 = !var0;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);