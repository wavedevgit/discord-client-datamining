// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun16411: for (var _fun16411_ip = 0;;) switch (_fun16411_ip) {
        case 0:
            var1 = global;
            var2 = require;
            var _closure1_slot0 = var2;
            var2 = dependencyMap;
            var _closure1_slot1 = var2;
            var2 = global;
            var3 = var2.globalThis;
            var4 = 'undefined';
            var3 = typeof var3;
            if (!(var4 !== var3)) {
                _fun16411_ip = 44;
                continue _fun16411
            }
        case 38:
            var1 = var2.globalThis;
        case 44:
            var _closure1_slot2 = var1;
            var1 = function() {
                _fun16412: for (var _fun16412_ip = 0;;) switch (_fun16412_ip) {
                    case 0:
                        var0 = new Array(0);
                        var2 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var5 = 0;
                        var1 = var1[var5];
                        var4 = undefined;
                        var1 = var2.bind(var4)(var1);
                        var1 = var1.length;
                        var1 = var5 < var1;
                        var3 = 'function';
                        var2 = 0;
                        if (!var1) {
                            _fun16412_ip = 141;
                            continue _fun16412
                        }
                    case 46:
                        var7 = _closure1_slot2;
                        var8 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var5];
                        var1 = var8.bind(var4)(var1);
                        var1 = var1[var2];
                        var1 = var7[var1];
                        var1 = typeof var1;
                        if (!(var3 === var1)) {
                            _fun16412_ip = 112;
                            continue _fun16412
                        }
                    case 82:
                        var7 = var0.length;
                        var8 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var5];
                        var1 = var8.bind(var4)(var1);
                        var1 = var1[var2];
                        var0[var7] = var1;
                    case 112:
                        var2 = var2 + 1;
                        var7 = _closure1_slot0;
                        var1 = _closure1_slot1;
                        var1 = var1[var5];
                        var1 = var7.bind(var4)(var1);
                        var1 = var1.length;
                        if (var2 < var1) {
                            _fun16412_ip = 46;
                            continue _fun16412
                        }
                    case 141:
                        return var0;
                }
            };
            var0 = arg4;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [1400]);