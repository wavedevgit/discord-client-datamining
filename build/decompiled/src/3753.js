// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun33429: for (var _fun33429_ip = 0;;) switch (_fun33429_ip) {
        case 0:
            var2 = exports;
            var4 = global;
            var6 = var4.Object;
            var3 = var6.defineProperty;
            var1 = {};
            var0 = true;
            var1.value = var0;
            var0 = '__esModule';
            var0 = var3.bind(var6)(var2, var0, var1);
            var1 = dependencyMap;
            var0 = 0;
            var3 = var1[var0];
            var1 = require;
            var0 = undefined;
            var3 = var1.bind(var0)(var3);
            var1 = var3.shouldBeUseWeb;
            var1 = var1.bind(var3)();
            var6 = var4.Symbol;
            var3 = 'shareable flag';
            var3 = var6.bind(var0)(var3);
            var _closure1_slot0 = var3;
            var7 = null;
            if (var1) {
                _fun33429_ip = 118;
                continue _fun33429
            }
        case 92:
            var4 = var4.WeakMap;
            var6 = var4.prototype;
            var6 = Object.create(var6, {
                constructor: {
                    value: var4
                }
            });
            var11 = var6;
            var4 = new var11[var4](var10);
            var7 = var4 instanceof Object ? var4 : var6;
        case 118:
            var _closure1_slot1 = var7;
            var4 = {};
            if (var1) {
                _fun33429_ip = 160;
                continue _fun33429
            }
        case 127:
            var1 = function arg0, arg1() {
                _fun33432: for (var _fun33432_ip = 0;;) switch (_fun33432_ip) {
                    case 0:
                        var3 = arg1;
                        var2 = _closure1_slot1;
                        var1 = var2.set;
                        if (var3) {
                            _fun33432_ip = 22;
                            continue _fun33432
                        }
                    case 18:
                        var3 = _closure1_slot0;
                    case 22:
                        var0 = arg0;
                        var0 = var1.bind(var2)(var0, var3);
                        var0 = undefined;
                        return var0;
                }
            };
            var4.set = var1;
            var6 = var7.get;
            var1 = var6.bind;
            var1 = var1.bind(var6)(var7);
            var4.get = var1;
            var1 = var4;
            _fun33429_ip = 181;
            continue _fun33429;
        case 160:
            var6 = function() {
                var0 = undefined;
                return var0;
            };
            var4.set = var6;
            var5 = function() {
                var0 = null;
                return var0;
            };
            var4.get = var5;
            var1 = var4;
        case 181:
            var2.shareableMappingFlag = var3;
            var2.shareableMappingCache = var1;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3725]);