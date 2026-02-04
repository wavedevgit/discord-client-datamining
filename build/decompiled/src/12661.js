// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun96882: for (var _fun96882_ip = 0;;) switch (_fun96882_ip) {
        case 0:
            var4 = require;
            var3 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var3;
            var1 = global;
            var1 = var1.Object;
            var1 = var1.getOwnPropertySymbols;
            var2 = !var1;
            var1 = !var2;
            if (var2) {
                _fun96882_ip = 67;
                continue _fun96882
            }
        case 39:
            var2 = 0;
            var2 = var3[var2];
            var3 = undefined;
            var2 = var4.bind(var3)(var2);
            var0 = function() { // Environment: var0
                _fun96883: for (var _fun96883_ip = 0;;) switch (_fun96883_ip) {
                    case 0:
                        var1 = global;
                        var2 = var1.Symbol;
                        var4 = undefined;
                        var0 = 'symbol detection';
                        var5 = var2.bind(var4)(var0);
                        var3 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var0 = 1;
                        var0 = var6[var0];
                        var3 = var3.bind(var4)(var0);
                        var0 = var3.String;
                        var0 = var0.bind(var3)(var5);
                        var0 = !var0;
                        if (var0) {
                            _fun96883_ip = 84;
                            continue _fun96883
                        }
                    case 60:
                        var3 = var1.Object;
                        var5 = var3.bind(var4)(var5);
                        var3 = var1.Symbol;
                        var3 = var5 instanceof var3;
                        var0 = !var3;
                    case 84:
                        if (var0) {
                            _fun96883_ip = 158;
                            continue _fun96883
                        }
                    case 87:
                        var1 = var1.Symbol;
                        var1 = var1.sham;
                        var1 = !var1;
                        if (!var1) {
                            _fun96883_ip = 125;
                            continue _fun96883
                        }
                    case 105:
                        var5 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var3 = 2;
                        var3 = var6[var3];
                        var1 = var5.bind(var4)(var3);
                    case 125:
                        if (!var1) {
                            _fun96883_ip = 155;
                            continue _fun96883
                        }
                    case 128:
                        var3 = _closure1_slot0;
                        var5 = _closure1_slot1;
                        var2 = 2;
                        var2 = var5[var2];
                        var3 = var3.bind(var4)(var2);
                        var2 = 41;
                        var1 = var3 < var2;
                    case 155:
                        var0 = var1;
                    case 158:
                        return var0;
                }
            };
            var0 = var2.bind(var3)(var0);
            var1 = !var0;
        case 67:
            var0 = arg4;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12646, 12642, 12662]);