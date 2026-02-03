// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1() {
        _fun29153: for (var _fun29153_ip = 0;;) switch (_fun29153_ip) {
            case 0:
                var1 = arg0;
                var0 = arg1;
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 0;
                var4 = var4[var3];
                var3 = undefined;
                var4 = var5.bind(var3)(var4);
                var4 = var4.bind(var3)(var1);
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                if (var4) {
                    _fun29153_ip = 86;
                    continue _fun29153
                }
            case 46:
                var4 = 1;
                var4 = var6[var4];
                var8 = var5.bind(var3)(var4);
                var4 = var8.prototype;
                var7 = Object.create(var4, {
                    constructor: {
                        value: var8
                    }
                });
                var9 = 'Assertion failed: Type(O) is not Object';
                var10 = var7;
                var4 = new var10[var8](var9, var8);
                var4 = var4 instanceof Object ? var4 : var7;
                throw var4;
            case 86:
                var4 = 2;
                var4 = var6[var4];
                var4 = var5.bind(var3)(var4);
                var4 = var4.bind(var3)(var0);
                if (var4) {
                    _fun29153_ip = 175;
                    continue _fun29153
                }
            case 106:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var2 = 1;
                var2 = var6[var2];
                var4 = var5.bind(var3)(var2);
                var2 = 3;
                var2 = var6[var2];
                var2 = var5.bind(var3)(var2);
                var3 = var2.bind(var3)(var0);
                var2 = 'Assertion failed: P is not a Property Key, got ';
                var9 = var2 + var3;
                var3 = var4.prototype;
                var3 = Object.create(var3, {
                    constructor: {
                        value: var4
                    }
                });
                var10 = var3;
                var2 = new var10[var4](var9, var8);
                var2 = var2 instanceof Object ? var2 : var3;
                throw var2;
            case 175:
                var0 = var1[var0];
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3368, 518, 3415, 552]);