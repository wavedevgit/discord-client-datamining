// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0) { // Original name: toFinite, environment: var0
        _fun28167: for (var _fun28167_ip = 0;;) switch (_fun28167_ip) {
            case 0:
                var4 = arg0;
                var3 = 0;
                if (var4) {
                    _fun28167_ip = 19;
                    continue _fun28167
                }
            case 8:
                var0 = 0;
                if (!(var3 === var4)) {
                    _fun28167_ip = 17;
                    continue _fun28167
                }
            case 14:
                var0 = var4;
            case 17:
                _fun28167_ip = 121;
                continue _fun28167;
            case 19:
                var5 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var3];
                var2 = undefined;
                var1 = var5.bind(var2)(var1);
                var2 = var1.bind(var2)(var4);
                var1 = inf;
                if (!(var2 !== var1)) {
                    _fun28167_ip = 88;
                    continue _fun28167
                }
            case 60:
                var1 = -inf;
                if (!(var2 !== var1)) {
                    _fun28167_ip = 88;
                    continue _fun28167
                }
            case 74:
                var4 = var2 == var2;
                var1 = 0;
                if (!var4) {
                    _fun28167_ip = 86;
                    continue _fun28167
                }
            case 83:
                var1 = var2;
            case 86:
                _fun28167_ip = 118;
                continue _fun28167;
            case 88:
                var2 = var2 < var3;
                var3 = 1;
                if (!var2) {
                    _fun28167_ip = 104;
                    continue _fun28167
                }
            case 98:
                var3 = -1;
            case 104:
                var2 = 1.7976931348623157e+308;
                var1 = var2 * var3;
            case 118:
                var0 = var1;
            case 121:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3269]);