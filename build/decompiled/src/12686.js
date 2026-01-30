// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun97481: for (var _fun97481_ip = 0;;) switch (_fun97481_ip) {
        case 0:
            var3 = require;
            var2 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var2;
            var0 = global;
            var0 = var0.Object;
            var _closure1_slot2 = var0;
            var0 = 0;
            var2 = var2[var0];
            var0 = undefined;
            var2 = var3.bind(var0)(var2);
            if (var2) {
                _fun97481_ip = 53;
                continue _fun97481
            }
        case 44:
            var2 = function(arg0) { // Environment: var1
                _fun97483: for (var _fun97483_ip = 0;;) switch (_fun97483_ip) {
                    case 0:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var0 = 1;
                        var0 = var5[var0];
                        var4 = undefined;
                        var2 = var3.bind(var4)(var0);
                        var0 = 'Symbol';
                        var2 = var2.bind(var4)(var0);
                        var0 = 2;
                        var0 = var5[var0];
                        var0 = var3.bind(var4)(var0);
                        var0 = var0.bind(var4)(var2);
                        if (!var0) {
                            _fun97483_ip = 97;
                            continue _fun97483
                        }
                    case 54:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var3 = 3;
                        var3 = var6[var3];
                        var3 = var5.bind(var4)(var3);
                        var2 = var2.prototype;
                        var5 = _closure1_slot2;
                        var1 = arg0;
                        var1 = var5.bind(var4)(var1);
                        var0 = var3.bind(var4)(var2, var1);
                    case 97:
                        return var0;
                }
            };
            _fun97481_ip = 60;
            continue _fun97481;
        case 53:
            var2 = function(arg0) { // Environment: var1
                var1 = 'symbol';
                var0 = arg0;
                var0 = typeof var0;
                var0 = var1 === var0;
                return var0;
            };
        case 60:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12677, 12687, 12685, 12688]);