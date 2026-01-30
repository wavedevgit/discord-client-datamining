// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0) { // Original name: IsGenericDescriptor, environment: var0
        _fun29020: for (var _fun29020_ip = 0;;) switch (_fun29020_ip) {
            case 0:
                var3 = arg0;
                var2 = undefined;
                if (!(var2 !== var3)) {
                    _fun29020_ip = 143;
                    continue _fun29020
                }
            case 12:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var0 = 0;
                var0 = var5[var0];
                var0 = var4.bind(var2)(var0);
                var0 = var0.bind(var2)(var3);
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                if (var0) {
                    _fun29020_ip = 90;
                    continue _fun29020
                }
            case 50:
                var0 = 1;
                var0 = var5[var0];
                var7 = var4.bind(var2)(var0);
                var0 = var7.prototype;
                var6 = Object.create(var0, {
                    constructor: {
                        value: var7
                    }
                });
                var8 = 'Assertion failed: `Desc` must be a Property Descriptor';
                var9 = var6;
                var0 = new var9[var7](var8, var7);
                var0 = var0 instanceof Object ? var0 : var6;
                throw var0;
            case 90:
                var0 = 2;
                var0 = var5[var0];
                var0 = var4.bind(var2)(var0);
                var0 = var0.bind(var2)(var3);
                var0 = !var0;
                if (!var0) {
                    _fun29020_ip = 141;
                    continue _fun29020
                }
            case 113:
                var4 = _closure1_slot0;
                var5 = _closure1_slot1;
                var1 = 3;
                var1 = var5[var1];
                var1 = var4.bind(var2)(var1);
                var1 = var1.bind(var2)(var3);
                var0 = !var1;
            case 141:
                return var0;
            case 143:
                var0 = false;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3378, 518, 3391, 3382]);