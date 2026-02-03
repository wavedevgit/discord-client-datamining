// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = function arg0() {
        _fun112011: for (var _fun112011_ip = 0;;) switch (_fun112011_ip) {
            case 0:
                var0 = arg0;
                var1 = undefined;
                var2 = global;
                var2 = var2.Array;
                var2 = var2.prototype;
                var3 = var2.slice;
                var2 = var3.call;
                var1 = arguments;
                var5 = 1;
                var4 = var2.bind(var3)(var1, var5);
                var3 = var4.length;
                var2 = 0;
                var7 = var2 < var3;
                var6 = undefined;
                if (!var7) {
                    _fun112011_ip = 145;
                    continue _fun112011
                }
            case 58:
                var14 = var4[var2];
                var7 = var6;
                if (!var14) {
                    _fun112011_ip = 134;
                    continue _fun112011
                }
            case 68:
                var12 = var14;
                var8 = var6;
                var7 = var8;
                for (var9 in var12)
                    case 85: {
                        var7 = var8;
                        case 97: var15 = var9;
                        var17 = _closure1_slot0;
                        var16 = var17.call;
                        var16 = var16.bind(var17)(var14, var15);
                        var8 = var15;
                        if (!var16) {
                            _fun112011_ip = 85;
                            continue _fun112011
                        }
                        case 121: var16 = var14[var15];
                        var0[var15] = var16;
                        var8 = var15;
                        _fun112011_ip = 85;
                        continue _fun112011;
                    }
            case 134:
                var2 = var2 + var5;
                var6 = var7;
                if (var2 < var3) {
                    _fun112011_ip = 58;
                    continue _fun112011
                }
            case 145:
                return var0;
        }
    };
    var1.extend = var0;
    var0 = global;
    var0 = var0.Object;
    var0 = var0.prototype;
    var0 = var0.hasOwnProperty;
    var _closure1_slot0 = var0;
    var1.hop = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);