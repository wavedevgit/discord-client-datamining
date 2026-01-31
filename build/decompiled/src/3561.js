// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun31623: for (var _fun31623_ip = 0;;) switch (_fun31623_ip) {
            case 0:
                var2 = arg0;
                var14 = arg1;
                var13 = arg2;
                var12 = arg3;
                var0 = var13.length;
                var11 = !var12;
                var1 = null;
                if (!(var1 != var2)) {
                    _fun31623_ip = 344;
                    continue _fun31623
                }
            case 29:
                var1 = global;
                var1 = var1.Object;
                var10 = undefined;
                var9 = var1.bind(var10)(var2);
                var2 = parseFloat(var0);
                var3 = var2 - 1;
                var8 = 1;
                var7 = 0;
                var6 = 2;
                var1 = var3;
                if (!var2) {
                    _fun31623_ip = 125;
                    continue _fun31623
                }
            case 64:
                var4 = var13[var3];
                if (!var11) {
                    _fun31623_ip = 78;
                    continue _fun31623
                }
            case 71:
                var2 = var4[var6];
                if (var2) {
                    _fun31623_ip = 91;
                    continue _fun31623
                }
            case 78:
                var2 = var4[var7];
                var2 = var2 in var9;
                var2 = !var2;
                _fun31623_ip = 107;
                continue _fun31623;
            case 91:
                var5 = var4[var8];
                var4 = var4[var7];
                var4 = var9[var4];
                var2 = var5 !== var4;
            case 107:
                if (var2) {
                    _fun31623_ip = 340;
                    continue _fun31623
                }
            case 113:
                var2 = parseFloat(var3);
                var3 = var2 - 1;
                var1 = var3;
                if (var2) {
                    _fun31623_ip = 64;
                    continue _fun31623
                }
            case 125:
                var5 = var1 + 1;
                var15 = var5 < var0;
                var3 = 3;
                var2 = undefined;
                var1 = undefined;
                if (!var15) {
                    _fun31623_ip = 336;
                    continue _fun31623
                }
            case 148:
                var15 = var13[var5];
                var17 = var15[var7];
                var18 = var9[var17];
                var21 = var15[var8];
                if (!var11) {
                    _fun31623_ip = 174;
                    continue _fun31623
                }
            case 167:
                var15 = var15[var6];
                if (var15) {
                    _fun31623_ip = 293;
                    continue _fun31623
                }
            case 174:
                var16 = _closure1_slot0;
                var15 = _closure1_slot1;
                var15 = var15[var7];
                var15 = var16.bind(var10)(var15);
                var16 = var15.prototype;
                var16 = Object.create(var16, {
                    constructor: {
                        value: var15
                    }
                });
                var29 = var16;
                var15 = new var29[var15](var28);
                var16 = var15 instanceof Object ? var15 : var16;
                var15 = var1;
                if (!var12) {
                    _fun31623_ip = 241;
                    continue _fun31623
                }
            case 217:
                var29 = undefined;
                var28 = var18;
                var27 = var21;
                var26 = var17;
                var25 = var9;
                var24 = var14;
                var23 = var16;
                var15 = var29[var12](var28, var27, var26, var25, var24, var23, var22);
            case 241:
                var19 = var15;
                if (!(var10 === var15)) {
                    _fun31623_ip = 286;
                    continue _fun31623
                }
            case 248:
                var22 = _closure1_slot0;
                var20 = _closure1_slot1;
                var20 = var20[var8];
                var20 = var22.bind(var10)(var20);
                var29 = undefined;
                var28 = var21;
                var27 = var18;
                var26 = var3;
                var25 = var12;
                var24 = var16;
                var19 = var29[var20](var28, var27, var26, var25, var24, var23);
            case 286:
                if (var19) {
                    _fun31623_ip = 320;
                    continue _fun31623
                }
            case 289:
                var19 = false;
                return var19;
            case 293:
                var16 = var2;
                var15 = var1;
                if (!(var10 === var18)) {
                    _fun31623_ip = 320;
                    continue _fun31623
                }
            case 303:
                var17 = var17 in var9;
                var16 = var2;
                var15 = var1;
                if (var17) {
                    _fun31623_ip = 320;
                    continue _fun31623
                }
            case 316:
                var17 = false;
                return var17;
            case 320:
                var5 = var5 + 1;
                var2 = var16;
                var1 = var15;
                if (var5 < var0) {
                    _fun31623_ip = 148;
                    continue _fun31623
                }
            case 336:
                var1 = true;
                return var1;
            case 340:
                var1 = false;
                return var1;
            case 344:
                var0 = !var0;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3537, 3530]);