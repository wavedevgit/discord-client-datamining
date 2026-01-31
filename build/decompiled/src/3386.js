// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1) { // Original name: HasProperty, environment: var0
        _fun29000: for (var _fun29000_ip = 0;;) switch (_fun29000_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 0;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var3 = var3.bind(var4)(var1);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                if (var3) {
                    _fun29000_ip = 86;
                    continue _fun29000
                }
            case 46:
                var3 = 1;
                var3 = var6[var3];
                var8 = var5.bind(var4)(var3);
                var3 = var8.prototype;
                var7 = Object.create(var3, {
                    constructor: {
                        value: var8
                    }
                });
                var9 = 'Assertion failed: `O` must be an Object';
                var10 = var7;
                var3 = new var10[var8](var9, var8);
                var3 = var3 instanceof Object ? var3 : var7;
                throw var3;
            case 86:
                var3 = 2;
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var3 = var3.bind(var4)(var0);
                if (var3) {
                    _fun29000_ip = 154;
                    continue _fun29000
                }
            case 106:
                var3 = _closure1_slot0;
                var5 = _closure1_slot1;
                var2 = 1;
                var2 = var5[var2];
                var4 = var3.bind(var4)(var2);
                var2 = var4.prototype;
                var3 = Object.create(var2, {
                    constructor: {
                        value: var4
                    }
                });
                var9 = 'Assertion failed: `P` must be a Property Key';
                var10 = var3;
                var2 = new var10[var4](var9, var8);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 154:
                var0 = var0 in var1;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3327, 518, 3374]);