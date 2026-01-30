// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun32467: for (var _fun32467_ip = 0;;) switch (_fun32467_ip) {
        case 0:
            var4 = require;
            var5 = dependencyMap;
            var2 = 0;
            var3 = var5[var2];
            var0 = undefined;
            var6 = var4.bind(var0)(var3);
            var3 = undefined;
            if (!var6) {
                _fun32467_ip = 40;
                continue _fun32467
            }
        case 26:
            var2 = var5[var2];
            var2 = var4.bind(var0)(var2);
            var3 = var2.prototype;
        case 40:
            var2 = undefined;
            if (!var3) {
                _fun32467_ip = 50;
                continue _fun32467
            }
        case 45:
            var2 = var3.valueOf;
        case 50:
            var _closure1_slot0 = var2;
            var2 = function(arg0) { // Original name: cloneSymbol, environment: var1
                _fun32468: for (var _fun32468_ip = 0;;) switch (_fun32468_ip) {
                    case 0:
                        var0 = _closure1_slot0;
                        if (var0) {
                            _fun32468_ip = 14;
                            continue _fun32468
                        }
                    case 10:
                        var0 = {};
                        _fun32468_ip = 46;
                        continue _fun32468;
                    case 14:
                        var2 = global;
                        var3 = var2.Object;
                        var4 = _closure1_slot0;
                        var2 = var4.call;
                        var1 = arg0;
                        var2 = var2.bind(var4)(var1);
                        var1 = undefined;
                        var0 = var3.bind(var1)(var2);
                    case 46:
                        return var0;
                }
            };
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [579]);