// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = global;
    var2 = var1.Math;
    var2 = var2.ceil;
    var _closure1_slot2 = var2;
    var1 = var1.Math;
    var1 = var1.max;
    var _closure1_slot3 = var1;
    var1 = function arg0, arg1, arg2() {
        _fun68723: for (var _fun68723_ip = 0;;) switch (_fun68723_ip) {
            case 0:
                var8 = arg0;
                var2 = arg1;
                var4 = arg2;
                if (var4) {
                    _fun68723_ip = 20;
                    continue _fun68723
                }
            case 12:
                var0 = undefined;
                var1 = var0 === var2;
                _fun68723_ip = 51;
                continue _fun68723;
            case 20:
                var5 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 0;
                var0 = var3[var0];
                var3 = undefined;
                var0 = var5.bind(var3)(var0);
                var1 = var0.bind(var3)(var8, var2, var4);
            case 51:
                var0 = 1;
                var7 = var0;
                if (var1) {
                    _fun68723_ip = 99;
                    continue _fun68723
                }
            case 60:
                var4 = _closure1_slot3;
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var0];
                var3 = undefined;
                var1 = var5.bind(var3)(var1);
                var2 = var1.bind(var3)(var2);
                var1 = 0;
                var7 = var4.bind(var3)(var2, var1);
            case 99:
                var1 = null;
                var2 = var1 == var8;
                var1 = 0;
                var6 = 0;
                if (var2) {
                    _fun68723_ip = 117;
                    continue _fun68723
                }
            case 112:
                var6 = var8.length;
            case 117:
                if (!var6) {
                    _fun68723_ip = 216;
                    continue _fun68723
                }
            case 120:
                if (!(!(var7 < var0))) {
                    _fun68723_ip = 216;
                    continue _fun68723
                }
            case 124:
                var0 = global;
                var2 = var0.Array;
                var3 = _closure1_slot2;
                var0 = var6 / var7;
                var4 = undefined;
                var0 = var3.bind(var4)(var0);
                var0 = var2.bind(var4)(var0);
                var9 = var1 < var6;
                var3 = 2;
                var2 = 0;
                var1 = 0;
                if (!var9) {
                    _fun68723_ip = 214;
                    continue _fun68723
                }
            case 169:
                var11 = parseFloat(var1);
                var1 = var11 + 1;
                var10 = _closure1_slot0;
                var9 = _closure1_slot1;
                var9 = var9[var3];
                var10 = var10.bind(var4)(var9);
                var9 = var2 + var7;
                var10 = var10.bind(var4)(var8, var2, var9);
                var0[var11] = var10;
                var2 = var9;
                if (var2 < var6) {
                    _fun68723_ip = 169;
                    continue _fun68723
                }
            case 214:
                return var0;
            case 216:
                var0 = new Array(0);
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3307, 3310, 8592]);