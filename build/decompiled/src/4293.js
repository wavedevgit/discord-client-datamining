// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun39521: for (var _fun39521_ip = 0;;) switch (_fun39521_ip) {
        case 0:
            var3 = require;
            var4 = dependencyMap;
            var _closure1_slot0 = var3;
            var _closure1_slot1 = var4;
            var2 = 0;
            var5 = var4[var2];
            var0 = undefined;
            var5 = var3.bind(var0)(var5);
            if (!var5) {
                _fun39521_ip = 121;
                continue _fun39521
            }
        case 32:
            var5 = 1;
            var6 = var4[var5];
            var6 = var3.bind(var0)(var6);
            var2 = var4[var2];
            var8 = var3.bind(var0)(var2);
            var2 = new Array(2);
            var7 = -0.0;
            var2[1] = var7;
            var7 = var8.prototype;
            var7 = Object.create(var7, {
                constructor: {
                    value: var8
                }
            });
            var10 = var7;
            var9 = var2;
            var2 = new var10[var8](var9, var8);
            var2 = var2 instanceof Object ? var2 : var7;
            var2 = var6.bind(var0)(var2);
            var2 = var2[var5];
            var5 = var5 / var2;
            var2 = inf;
            if (!(var5 !== var2)) {
                _fun39521_ip = 135;
                continue _fun39521
            }
        case 121:
            var2 = 2;
            var2 = var4[var2];
            var2 = var3.bind(var0)(var2);
            _fun39521_ip = 140;
            continue _fun39521;
        case 135:
            var2 = function(arg0) { // Environment: var1
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var0 = 0;
                var1 = var1[var0];
                var0 = undefined;
                var2 = var2.bind(var0)(var1);
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var3 = arg0;
                var4 = var1;
                var0 = new var4[var2](var3, var2);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
            };
        case 140:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3578, 3595, 4294]);