// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun97409: for (var _fun97409_ip = 0;;) switch (_fun97409_ip) {
        case 0:
            var0 = global;
            var2 = var0.document;
            var3 = 'object';
            var2 = typeof var2;
            var2 = var3 === var2;
            if (!var2) {
                _fun97409_ip = 36;
                continue _fun97409
            }
        case 24:
            var0 = var0.document;
            var2 = var0.all;
        case 36:
            var _closure1_slot0 = var2;
            var0 = undefined;
            if (!(var0 === var2)) {
                _fun97409_ip = 50;
                continue _fun97409
            }
        case 46:
            if (!(var0 === var2)) {
                _fun97409_ip = 59;
                continue _fun97409
            }
        case 50:
            var2 = function(arg0) { // Environment: var1
                var1 = 'function';
                var0 = arg0;
                var0 = typeof var0;
                var0 = var1 === var0;
                return var0;
            };
            _fun97409_ip = 66;
            continue _fun97409;
        case 59:
            var2 = function(arg0) { // Environment: var1
                _fun97410: for (var _fun97410_ip = 0;;) switch (_fun97410_ip) {
                    case 0:
                        var2 = arg0;
                        var1 = 'function';
                        var0 = typeof var2;
                        var0 = var1 === var0;
                        if (var0) {
                            _fun97410_ip = 28;
                            continue _fun97410
                        }
                    case 17:
                        var1 = _closure1_slot0;
                        var0 = var2 === var1;
                    case 28:
                        return var0;
                }
            };
        case 66:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);