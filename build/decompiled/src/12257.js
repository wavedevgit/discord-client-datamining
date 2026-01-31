// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun94021: for (var _fun94021_ip = 0;;) switch (_fun94021_ip) {
        case 0:
            var1 = global;
            var2 = var1.process;
            var3 = 'object';
            var2 = typeof var2;
            if (!(var3 === var2)) {
                _fun94021_ip = 102;
                continue _fun94021
            }
        case 21:
            var2 = var1.process;
            var2 = var2.env;
            if (!var2) {
                _fun94021_ip = 102;
                continue _fun94021
            }
        case 36:
            var2 = var1.process;
            var2 = var2.env;
            var2 = var2.NODE_DEBUG;
            if (!var2) {
                _fun94021_ip = 102;
                continue _fun94021
            }
        case 57:
            var3 = /\bsemver\b/i;
            var2 = var3.test;
            var1 = var1.process;
            var1 = var1.env;
            var1 = var1.NODE_DEBUG;
            var1 = var2.bind(var3)(var1);
            if (var1) {
                _fun94021_ip = 111;
                continue _fun94021
            }
        case 102:
            var1 = function() { // Environment: var0
                var0 = undefined;
                return var0;
            };
            _fun94021_ip = 118;
            continue _fun94021;
        case 111:
            var1 = function() { // Environment: var0
                _fun94022: for (var _fun94022_ip = 0;;) switch (_fun94022_ip) {
                    case 0:
                        var3 = undefined;
                        var2 = arguments.length;
                        var0 = global;
                        var1 = var0.Array;
                        var4 = var1.prototype;
                        var4 = Object.create(var4, {
                            constructor: {
                                value: var1
                            }
                        });
                        var8 = var4;
                        var7 = var2;
                        var1 = new var8[var1](var7, var6);
                        var5 = var1 instanceof Object ? var1 : var4;
                        var1 = 0;
                        var4 = var1 < var2;
                        if (!var4) {
                            _fun94022_ip = 60;
                            continue _fun94022
                        }
                    case 45:
                        var4 = arguments[var1];
                        var5[var1] = var4;
                        var1 = var1 + 1;
                        if (var1 < var2) {
                            _fun94022_ip = 45;
                            continue _fun94022
                        }
                    case 60:
                        var3 = var0.console;
                        var2 = var3.error;
                        var1 = var2.apply;
                        var4 = ['SEMVER'];
                        var0 = var4.concat;
                        var0 = var0.bind(var4)(var5);
                        var0 = var1.bind(var2)(var3, var0);
                        return var0;
                }
            };
        case 118:
            var0 = arg4;
            var0.exports = var1;
            var0 = undefined;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, []);