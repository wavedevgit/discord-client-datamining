// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun2372: for (var _fun2372_ip = 0;;) switch (_fun2372_ip) {
        case 0:
            var2 = global;
            var3 = metroImportDefault;
            var4 = dependencyMap;
            var _closure1_slot0 = var2;
            var0 = 0;
            var1 = var4[var0];
            var0 = undefined;
            var1 = var3.bind(var0)(var1);
            if (var1) {
                _fun2372_ip = 79;
                continue _fun2372
            }
        case 31:
            var1 = var2.performance;
            if (var1) {
                _fun2372_ip = 117;
                continue _fun2372
            }
        case 40:
            var1 = {};
            var6 = function() {
                var0 = undefined;
                return var0;
            };
            var1.mark = var6;
            var6 = function() {
                var0 = undefined;
                return var0;
            };
            var1.measure = var6;
            var5 = function() {
                _fun2375: for (var _fun2375_ip = 0;;) switch (_fun2375_ip) {
                    case 0:
                        var0 = _closure1_slot0;
                        var1 = var0.nativePerformanceNow;
                        if (var1) {
                            _fun2375_ip = 29;
                            continue _fun2375
                        }
                    case 16:
                        var0 = global;
                        var0 = var0.Date;
                        var1 = var0.now;
                    case 29:
                        var0 = undefined;
                        var0 = var1.bind(var0)();
                        return var0;
                }
            };
            var1.now = var5;
            var2.performance = var1;
            _fun2372_ip = 117;
            continue _fun2372;
        case 79:
            var1 = 1;
            var1 = var4[var1];
            var1 = var3.bind(var0)(var1);
            var3 = var1.prototype;
            var3 = Object.create(var3, {
                constructor: {
                    value: var1
                }
            });
            var8 = var3;
            var1 = new var8[var1](var7);
            var1 = var1 instanceof Object ? var1 : var3;
            var2.performance = var1;
        case 117:
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [151, 152]);