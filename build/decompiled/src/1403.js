// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun16422: for (var _fun16422_ip = 0;;) switch (_fun16422_ip) {
        case 0:
            var5 = require;
            var1 = module;
            var6 = dependencyMap;
            var _closure1_slot0 = var5;
            var _closure1_slot1 = var6;
            var0 = function(arg0) { // Original name: callBind, environment: var0
                _fun16423: for (var _fun16423_ip = 0;;) switch (_fun16423_ip) {
                    case 0:
                        var4 = undefined;
                        var0 = undefined;
                        var6 = _closure1_slot0;
                        var2 = _closure1_slot1;
                        var1 = 0;
                        var3 = var2[var1];
                        var5 = var6.bind(var4)(var3);
                        var0 = arguments;
                        var3 = var0;
                        var3 = var5.bind(var4)(var3);
                        var5 = arg0;
                        var7 = var5.length;
                        var5 = arguments.length;
                        var0 = 1;
                        var5 = var5 - var0;
                        var5 = var7 - var5;
                        var2 = var2[var0];
                        var2 = var6.bind(var4)(var2);
                        if (!(var5 > var1)) {
                            _fun16423_ip = 74;
                            continue _fun16423
                        }
                    case 71:
                        var1 = var5;
                    case 74:
                        var1 = var0 + var1;
                        var0 = true;
                        var0 = var2.bind(var4)(var3, var1, var0);
                        return var0;
                }
            };
            var1.exports = var0;
            var2 = 2;
            var3 = var6[var2];
            var0 = undefined;
            var3 = var5.bind(var0)(var3);
            if (var3) {
                _fun16422_ip = 72;
                continue _fun16422
            }
        case 47:
            var4 = var1.exports;
            var3 = 3;
            var3 = var6[var3];
            var3 = var5.bind(var0)(var3);
            var4.apply = var3;
            _fun16422_ip = 115;
            continue _fun16422;
        case 72:
            var2 = var6[var2];
            var4 = var5.bind(var0)(var2);
            var3 = var1.exports;
            var2 = {};
            var1 = 3;
            var1 = var6[var1];
            var1 = var5.bind(var0)(var1);
            var2.value = var1;
            var1 = 'apply';
            var1 = var4.bind(var0)(var3, var1, var2);
        case 115:
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [528, 1404, 541, 1407]);