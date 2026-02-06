// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = global;
    var2 = var1.Math;
    var2 = var2.max;
    var _closure1_slot2 = var2;
    var1 = var1.Math;
    var1 = var1.min;
    var _closure1_slot3 = var1;
    var1 = function arg0, arg1, arg2() {
        _fun31827: for (var _fun31827_ip = 0;;) switch (_fun31827_ip) {
            case 0:
                var5 = arg0;
                var1 = arg2;
                var0 = null;
                var0 = var0 == var5;
                var7 = 0;
                var8 = 0;
                if (var0) {
                    _fun31827_ip = 24;
                    continue _fun31827
                }
            case 19:
                var8 = var5.length;
            case 24:
                if (var8) {
                    _fun31827_ip = 35;
                    continue _fun31827
                }
            case 27:
                var0 = -1;
                return var0;
            case 35:
                var0 = 1;
                var4 = var8 - var0;
                var3 = undefined;
                if (!(var3 !== var1)) {
                    _fun31827_ip = 110;
                    continue _fun31827
                }
            case 48:
                var9 = _closure1_slot0;
                var2 = _closure1_slot1;
                var2 = var2[var7];
                var2 = var9.bind(var3)(var2);
                var2 = var2.bind(var3)(var1);
                if (!(!(var1 < var7))) {
                    _fun31827_ip = 93;
                    continue _fun31827
                }
            case 77:
                var9 = _closure1_slot3;
                var1 = var8 - var0;
                var1 = var9.bind(var3)(var2, var1);
                _fun31827_ip = 107;
                continue _fun31827;
            case 93:
                var6 = _closure1_slot2;
                var2 = var8 + var2;
                var1 = var6.bind(var3)(var2, var7);
            case 107:
                var4 = var1;
            case 110:
                var1 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = var6[var0];
                var2 = var1.bind(var3)(var0);
                var0 = 2;
                var0 = var6[var0];
                var6 = var1.bind(var3)(var0);
                var1 = arg1;
                var0 = 3;
                var12 = var6.bind(var3)(var1, var0);
                var10 = true;
                var14 = undefined;
                var13 = var5;
                var11 = var4;
                var0 = var14[var2](var13, var12, var11, var10, var9);
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3310, 3608, 3535]);