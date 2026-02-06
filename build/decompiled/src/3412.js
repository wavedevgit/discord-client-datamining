// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    _fun29151: for (var _fun29151_ip = 0;;) switch (_fun29151_ip) {
        case 0:
            var4 = require;
            var5 = dependencyMap;
            var _closure1_slot0 = var4;
            var _closure1_slot1 = var5;
            var0 = 0;
            var2 = var5[var0];
            var0 = undefined;
            var2 = var4.bind(var0)(var2);
            if (var2) {
                _fun29151_ip = 74;
                continue _fun29151
            }
        case 32:
            var2 = 2;
            var2 = var5[var2];
            var2 = var4.bind(var0)(var2);
            if (var2) {
                _fun29151_ip = 72;
                continue _fun29151
            }
        case 47:
            var3 = 3;
            var3 = var5[var3];
            var4 = var4.bind(var0)(var3);
            var3 = null;
            if (!var4) {
                _fun29151_ip = 69;
                continue _fun29151
            }
        case 64:
            var3 = function arg0, arg1() {
                var0 = arg0;
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 3;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = arg1;
                var1 = var2.bind(var3)(var0, var1);
                return var0;
            };
        case 69:
            var2 = var3;
        case 72:
            _fun29151_ip = 79;
            continue _fun29151;
        case 74:
            var2 = function arg0, arg1() {
                _fun29152: for (var _fun29152_ip = 0;;) switch (_fun29152_ip) {
                    case 0:
                        var0 = arg0;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot1;
                        var2 = 0;
                        var2 = var3[var2];
                        var3 = undefined;
                        var4 = var4.bind(var3)(var2);
                        var2 = arg1;
                        var2 = var4.bind(var3)(var0, var2);
                        if (var2) {
                            _fun29152_ip = 87;
                            continue _fun29152
                        }
                    case 39:
                        var2 = _closure1_slot0;
                        var4 = _closure1_slot1;
                        var1 = 1;
                        var1 = var4[var1];
                        var3 = var2.bind(var3)(var1);
                        var1 = var3.prototype;
                        var2 = Object.create(var1, {
                            constructor: {
                                value: var3
                            }
                        });
                        var6 = 'Reflect.setPrototypeOf: failed to set [[Prototype]]';
                        var7 = var2;
                        var1 = new var7[var3](var6, var5);
                        var1 = var1 instanceof Object ? var1 : var2;
                        throw var1;
                    case 87:
                        return var0;
                }
            };
        case 79:
            var1 = arg4;
            var1.exports = var2;
            return var0;
    }
})(undefined, undefined, undefined, undefined, undefined, undefined, [3413, 518, 3414, 3415]);