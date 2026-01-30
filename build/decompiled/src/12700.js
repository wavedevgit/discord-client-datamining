// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun97511: for (var _fun97511_ip = 0;;) switch (_fun97511_ip) {
        case 0:
            var3 = require;
            var4 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var4;
            var0 = 0;
            var2 = var4[var0];
            var0 = undefined;
            var5 = var3.bind(var0)(var2);
            var2 = new Array(0);
            var2 = var2.concat;
            var2 = var5.bind(var0)(var2);
            var _closure1_slot2 = var2;
            var2 = 1;
            var2 = var4[var2];
            var4 = var3.bind(var0)(var2);
            var3 = 'Reflect';
            var2 = 'ownKeys';
            var2 = var4.bind(var0)(var3, var2);
            if (var2) {
                _fun97511_ip = 83;
                continue _fun97511
            }
        case 76:
            var2 = function(arg0) { // Original name: ownKeys, environment: var1
                _fun97512: for (var _fun97512_ip = 0;;) switch (_fun97512_ip) {
                    case 0:
                        var5 = arg0;
                        var1 = _closure1_slot0;
                        var6 = _closure1_slot1;
                        var0 = 2;
                        var0 = var6[var0];
                        var4 = undefined;
                        var7 = var1.bind(var4)(var0);
                        var3 = var7.f;
                        var0 = 3;
                        var0 = var6[var0];
                        var0 = var1.bind(var4)(var0);
                        var0 = var0.bind(var4)(var5);
                        var3 = var3.bind(var7)(var0);
                        var0 = 4;
                        var0 = var6[var0];
                        var0 = var1.bind(var4)(var0);
                        var1 = var0.f;
                        var0 = var3;
                        if (!var1) {
                            _fun97512_ip = 95;
                            continue _fun97512
                        }
                    case 80:
                        var2 = _closure1_slot2;
                        var1 = var1.bind(var4)(var5);
                        var0 = var2.bind(var4)(var3, var1);
                    case 95:
                        return var0;
                }
            };
        case 83:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [12666, 12687, 12701, 12711, 12712]);