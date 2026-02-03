// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun32638: for (var _fun32638_ip = 0;;) switch (_fun32638_ip) {
        case 0:
            var3 = require;
            var2 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var2;
            var1 = global;
            var1 = var1.Object;
            var1 = var1.getOwnPropertySymbols;
            if (var1) {
                _fun32638_ip = 48;
                continue _fun32638
            }
        case 33:
            var1 = 0;
            var2 = var2[var1];
            var1 = undefined;
            var1 = var3.bind(var1)(var2);
            _fun32638_ip = 53;
            continue _fun32638;
        case 48:
            var1 = function(arg0) { // Environment: var0
                _fun32639: for (var _fun32639_ip = 0;;) switch (_fun32639_ip) {
                    case 0:
                        var6 = arg0;
                        var0 = new Array(0);
                        var4 = 1;
                        var3 = undefined;
                        var2 = 2;
                        var1 = 3;
                        if (!var6) {
                            _fun32639_ip = 78;
                            continue _fun32639
                        }
                    case 24:
                        var8 = _closure1_slot0;
                        var7 = _closure1_slot1;
                        var9 = var7[var4];
                        var10 = var8.bind(var3)(var9);
                        var9 = var7[var2];
                        var9 = var8.bind(var3)(var9);
                        var9 = var9.bind(var3)(var6);
                        var9 = var10.bind(var3)(var0, var9);
                        var7 = var7[var1];
                        var7 = var8.bind(var3)(var7);
                        var6 = var7.bind(var3)(var6);
                        if (var6) {
                            _fun32639_ip = 24;
                            continue _fun32639
                        }
                    case 78:
                        return var0;
                }
            };
        case 53:
            var0 = arg4;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [775, 765, 774, 3653]);