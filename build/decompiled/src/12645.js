// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun96892: for (var _fun96892_ip = 0;;) switch (_fun96892_ip) {
        case 0:
            var1 = global;
            var2 = var1.Math;
            var2 = var2.ceil;
            var _closure1_slot0 = var2;
            var2 = var1.Math;
            var2 = var2.floor;
            var _closure1_slot1 = var2;
            var1 = var1.Math;
            var1 = var1.trunc;
            if (var1) {
                _fun96892_ip = 58;
                continue _fun96892
            }
        case 51:
            var1 = function(arg0) { // Original name: trunc, environment: var0
                _fun96893: for (var _fun96893_ip = 0;;) switch (_fun96893_ip) {
                    case 0:
                        var0 = arg0;
                        var2 = var0 - 0;
                        var0 = 0;
                        if (!(!(var2 > var0))) {
                            _fun96893_ip = 21;
                            continue _fun96893
                        }
                    case 12:
                        var1 = _closure1_slot0;
                        _fun96893_ip = 28;
                        continue _fun96893;
                    case 21:
                        var1 = _closure1_slot1;
                    case 28:
                        var0 = undefined;
                        var0 = var1.bind(var0)(var2);
                        return var0;
                }
            };
        case 58:
            var0 = arg4;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);