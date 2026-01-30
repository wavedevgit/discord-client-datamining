// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1) { // Original name: cloneDataView, environment: var0
        _fun32462: for (var _fun32462_ip = 0;;) switch (_fun32462_ip) {
            case 0:
                var0 = arg0;
                var1 = arg1;
                if (var1) {
                    _fun32462_ip = 17;
                    continue _fun32462
                }
            case 9:
                var4 = var0.buffer;
                _fun32462_ip = 52;
                continue _fun32462;
            case 17:
                var2 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 0;
                var1 = var3[var1];
                var3 = undefined;
                var2 = var2.bind(var3)(var1);
                var1 = var0.buffer;
                var4 = var2.bind(var3)(var1);
            case 52:
                var3 = var0.constructor;
                var6 = var0.byteOffset;
                var5 = var0.byteLength;
                var1 = var3.prototype;
                var1 = Object.create(var1, {
                    constructor: {
                        value: var3
                    }
                });
                var8 = var1;
                var7 = var4;
                var0 = new var8[var3](var7, var6, var5, var4);
                var0 = var0 instanceof Object ? var0 : var1;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3624]);