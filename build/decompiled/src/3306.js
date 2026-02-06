// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1, arg2, arg3() {
        _fun28346: for (var _fun28346_ip = 0;;) switch (_fun28346_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var3 = arg2;
                var4 = arg3;
                var0 = null;
                var0 = var0 == var6;
                var2 = 0;
                var1 = 0;
                if (var0) {
                    _fun28346_ip = 30;
                    continue _fun28346
                }
            case 25:
                var1 = var6.length;
            case 30:
                if (var1) {
                    _fun28346_ip = 39;
                    continue _fun28346
                }
            case 33:
                var0 = new Array(0);
                _fun28346_ip = 139;
                continue _fun28346;
            case 39:
                var7 = var3;
                if (!var3) {
                    _fun28346_ip = 56;
                    continue _fun28346
                }
            case 45:
                var9 = 'number';
                var8 = typeof var3;
                var7 = var9 !== var8;
            case 56:
                if (!var7) {
                    _fun28346_ip = 88;
                    continue _fun28346
                }
            case 59:
                var10 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var2];
                var9 = undefined;
                var8 = var10.bind(var9)(var8);
                var7 = var8.bind(var9)(var6, var5, var3);
            case 88:
                if (!var7) {
                    _fun28346_ip = 96;
                    continue _fun28346
                }
            case 91:
                var3 = 0;
                var4 = var1;
            case 96:
                var7 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var7.bind(var2)(var1);
                var15 = undefined;
                var14 = var6;
                var13 = var5;
                var12 = var3;
                var11 = var4;
                var0 = var15[var1](var14, var13, var12, var11, var10);
            case 139:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3307, 3309]);