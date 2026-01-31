// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = exports;
    var0 = global;
    var5 = var0.Object;
    var4 = var5.defineProperty;
    var3 = {};
    var0 = true;
    var3.value = var0;
    var0 = '__esModule';
    var0 = var4.bind(var5)(var1, var0, var3);
    var0 = function arg0() {
        _fun2350: for (var _fun2350_ip = 0;;) switch (_fun2350_ip) {
            case 0:
                var5 = arg0;
                var0 = null;
                if (!(var0 !== var5)) {
                    _fun2350_ip = 20;
                    continue _fun2350
                }
            case 9:
                var1 = 'object';
                var0 = typeof var5;
                if (!(var1 !== var0)) {
                    _fun2350_ip = 24;
                    continue _fun2350
                }
            case 20:
                var0 = undefined;
                return var0;
            case 24:
                var0 = global;
                var1 = var0.Array;
                var0 = var1.isArray;
                var0 = var0.bind(var1)(var5);
                if (var0) {
                    _fun2350_ip = 47;
                    continue _fun2350
                }
            case 45:
                return var5;
            case 47:
                var0 = {};
                var4 = var5.length;
                var3 = 0;
                var6 = var3 < var4;
                var1 = undefined;
                if (!var6) {
                    _fun2350_ip = 124;
                    continue _fun2350
                }
            case 68:
                var7 = _closure1_slot0;
                var6 = var5[var3];
                var11 = var7.bind(var1)(var6);
                if (!var11) {
                    _fun2350_ip = 117;
                    continue _fun2350
                }
            case 84:
                var9 = var11;
                for (var6 in var9)
                    case 95: {
                        case 104: var13 = var6;
                        var12 = var11[var13];
                        var0[var13] = var12;
                        _fun2350_ip = 95;
                        continue _fun2350;
                    }
            case 117:
                var3 = var3 + 1;
                if (var3 < var4) {
                    _fun2350_ip = 68;
                    continue _fun2350
                }
            case 124:
                return var0;
        }
    };
    var _closure1_slot0 = var0;
    var1.default = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, []);