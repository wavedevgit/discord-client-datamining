// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1, arg2, arg3) { // Original name: copyObject, environment: var0
        _fun32440: for (var _fun32440_ip = 0;;) switch (_fun32440_ip) {
            case 0:
                var10 = arg0;
                var9 = arg1;
                var0 = arg2;
                var8 = arg3;
                var7 = !var0;
                if (var0) {
                    _fun32440_ip = 20;
                    continue _fun32440
                }
            case 18:
                var0 = {};
            case 20:
                var6 = var9.length;
                var5 = 0;
                var11 = var5 < var6;
                var4 = undefined;
                var3 = 1;
                var1 = 0;
                if (!var11) {
                    _fun32440_ip = 136;
                    continue _fun32440
                }
            case 44:
                var13 = var9[var1];
                var12 = undefined;
                if (!var8) {
                    _fun32440_ip = 76;
                    continue _fun32440
                }
            case 53:
                var20 = var0[var13];
                var19 = var10[var13];
                var21 = undefined;
                var18 = var13;
                var17 = var0;
                var16 = var10;
                var12 = var21[var8](var20, var19, var18, var17, var16, var15);
            case 76:
                if (!(var4 === var12)) {
                    _fun32440_ip = 84;
                    continue _fun32440
                }
            case 80:
                var12 = var10[var13];
            case 84:
                var14 = _closure1_slot0;
                var11 = _closure1_slot1;
                if (var7) {
                    _fun32440_ip = 113;
                    continue _fun32440
                }
            case 95:
                var15 = var11[var3];
                var15 = var14.bind(var4)(var15);
                var15 = var15.bind(var4)(var0, var13, var12);
                _fun32440_ip = 129;
                continue _fun32440;
            case 113:
                var11 = var11[var5];
                var11 = var14.bind(var4)(var11);
                var11 = var11.bind(var4)(var0, var13, var12);
            case 129:
                var1 = var1 + 1;
                if (var1 < var6) {
                    _fun32440_ip = 44;
                    continue _fun32440
                }
            case 136:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [786, 3615]);