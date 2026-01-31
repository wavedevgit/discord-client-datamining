// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun32742: for (var _fun32742_ip = 0;;) switch (_fun32742_ip) {
        case 0:
            var4 = require;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var3 = 0;
            var2 = var5[var3];
            var0 = undefined;
            var6 = var4.bind(var0)(var2);
            var2 = undefined;
            if (!var6) {
                _fun32742_ip = 49;
                continue _fun32742
            }
        case 34:
            var3 = var5[var3];
            var3 = var4.bind(var0)(var3);
            var2 = var3.isConcatSpreadable;
        case 49:
            var _closure1_slot2 = var2;
            var2 = function(arg0) { // Original name: isFlattenable, environment: var1
                _fun32743: for (var _fun32743_ip = 0;;) switch (_fun32743_ip) {
                    case 0:
                        var3 = arg0;
                        var1 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var0 = 1;
                        var0 = var4[var0];
                        var4 = undefined;
                        var0 = var1.bind(var4)(var0);
                        var0 = var0.bind(var4)(var3);
                        if (var0) {
                            _fun32743_ip = 61;
                            continue _fun32743
                        }
                    case 36:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var1 = 2;
                        var1 = var6[var1];
                        var1 = var5.bind(var4)(var1);
                        var0 = var1.bind(var4)(var3);
                    case 61:
                        if (var0) {
                            _fun32743_ip = 91;
                            continue _fun32743
                        }
                    case 64:
                        var1 = _closure1_slot2;
                        if (!var1) {
                            _fun32743_ip = 74;
                            continue _fun32743
                        }
                    case 71:
                        var1 = var3;
                    case 74:
                        if (!var1) {
                            _fun32743_ip = 85;
                            continue _fun32743
                        }
                    case 77:
                        var2 = _closure1_slot2;
                        var1 = var3[var2];
                    case 85:
                        var1 = !var1;
                        var0 = !var1;
                    case 91:
                        return var0;
                }
            };
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [579, 680, 730]);