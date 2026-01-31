// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0() {
        _fun6619: for (var _fun6619_ip = 0;;) switch (_fun6619_ip) {
            case 0:
                var4 = arg0;
                var1 = var4.length;
                var0 = 1;
                if (!(!(var1 < var0))) {
                    _fun6619_ip = 87;
                    continue _fun6619
                }
            case 15:
                var1 = 0;
                var1 = var4[var1];
                var2 = 'function';
                var1 = typeof var1;
                if (!(var2 === var1)) {
                    _fun6619_ip = 87;
                    continue _fun6619
                }
            case 32:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var0 = var6[var0];
                var3 = undefined;
                var2 = var5.bind(var3)(var0);
                var0 = 2;
                var0 = var6[var0];
                var1 = var5.bind(var3)(var0);
                var0 = 3;
                var0 = var6[var0];
                var0 = var5.bind(var3)(var0);
                var0 = var2.bind(var3)(var1, var0, var4);
                return var0;
            case 87:
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
                var9 = 'a function is required';
                var10 = var1;
                var0 = new var10[var2](var9, var8);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [518, 529, 531, 533]);