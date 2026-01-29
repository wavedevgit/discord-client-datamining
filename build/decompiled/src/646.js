// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun7319: for (var _fun7319_ip = 0;;) switch (_fun7319_ip) {
        case 0:
            var1 = function(arg0) { // Original name: shim, environment: var0
                _fun7320: for (var _fun7320_ip = 0;;) switch (_fun7320_ip) {
                    case 0:
                        var0 = new Array(0);
                        var4 = arg0;
                        for (var1 in var4)
                            case 15: {
                                case 24: var7 = var1;
                                var6 = var0.push;
                                var6 = var6.bind(var0)(var7);
                                _fun7320_ip = 15;
                                continue _fun7320;
                            }
                    case 39:
                        return var0;
                }
            };
            var2 = global;
            var0 = var2.Object;
            var0 = var0.keys;
            var4 = 'function';
            var3 = typeof var0;
            var0 = var1;
            if (!(var4 === var3)) {
                _fun7319_ip = 45;
                continue _fun7319
            }
        case 34:
            var2 = var2.Object;
            var0 = var2.keys;
        case 45:
            var2 = arg4;
            var2.exports = var0;
            var0.shim = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);