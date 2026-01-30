// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function() { // Environment: var0
        _fun94993: for (var _fun94993_ip = 0;;) switch (_fun94993_ip) {
            case 0:
                var0 = this;
                var0 = var0.constructor;
                var1 = var0.REVERSE_MAP;
                if (var1) {
                    _fun94993_ip = 122;
                    continue _fun94993
                }
            case 17:
                var1 = {};
                var0.REVERSE_MAP = var1;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 0;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var7 = var4;
                var2 = 112;
                var1 = 95;
                for (var3 in var7)
                    case 66: {
                        case 75: var11 = var3;
                        var9 = var11 > var1;
                        if (!var9) {
                            _fun94993_ip = 89;
                            continue _fun94993
                        }
                        case 85: var9 = var11 < var2;
                        case 89: if (var9) {
                            _fun94993_ip = 66;
                            continue _fun94993
                        }
                        case 92: var9 = var4.hasOwnProperty;
                        var9 = var9.bind(var4)(var11);
                        if (!var9) {
                            _fun94993_ip = 66;
                            continue _fun94993
                        }
                        case 106: var10 = var0.REVERSE_MAP;
                        var9 = var4[var11];
                        var10[var9] = var11;
                        _fun94993_ip = 66;
                        continue _fun94993;
                    }
            case 122:
                var0 = var0.REVERSE_MAP;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12381]);