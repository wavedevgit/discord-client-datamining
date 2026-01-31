// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun8279: for (var _fun8279_ip = 0;;) switch (_fun8279_ip) {
        case 0:
            var6 = require;
            var7 = dependencyMap;
            var4 = /[^.]+$/;
            var3 = var4.exec;
            var5 = 0;
            var2 = var7[var5];
            var0 = undefined;
            var2 = var6.bind(var0)(var2);
            if (!var2) {
                _fun8279_ip = 58;
                continue _fun8279
            }
        case 44:
            var8 = var7[var5];
            var8 = var6.bind(var0)(var8);
            var2 = var8.keys;
        case 58:
            if (!var2) {
                _fun8279_ip = 81;
                continue _fun8279
            }
        case 61:
            var5 = var7[var5];
            var5 = var6.bind(var0)(var5);
            var5 = var5.keys;
            var2 = var5.IE_PROTO;
        case 81:
            if (var2) {
                _fun8279_ip = 88;
                continue _fun8279
            }
        case 84:
            var2 = '';
        case 88:
            var4 = var3.bind(var4)(var2);
            var2 = '';
            if (!var4) {
                _fun8279_ip = 110;
                continue _fun8279
            }
        case 100:
            var3 = 'Symbol(src)_1.';
            var2 = var3 + var4;
        case 110:
            var _closure1_slot0 = var2;
            var2 = function arg0() {
                _fun8280: for (var _fun8280_ip = 0;;) switch (_fun8280_ip) {
                    case 0:
                        var2 = _closure1_slot0;
                        var0 = !var2;
                        var0 = !var0;
                        if (!var2) {
                            _fun8280_ip = 27;
                            continue _fun8280
                        }
                    case 16:
                        var2 = _closure1_slot0;
                        var1 = arg0;
                        var0 = var2 in var1;
                    case 27:
                        return var0;
                }
            };
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [701]);