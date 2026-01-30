// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = global;
    var2 = var1.Array;
    var2 = var2.prototype;
    var2 = var2.concat;
    var _closure1_slot2 = var2;
    var1 = var1.Array;
    var1 = var1.prototype;
    var1 = var1.slice;
    var _closure1_slot3 = var1;
    var1 = function(arg0) { // Original name: swizzle, environment: var0
        _fun51301: for (var _fun51301_ip = 0;;) switch (_fun51301_ip) {
            case 0:
                var7 = arg0;
                var2 = new Array(0);
                var6 = var7.length;
                var5 = 0;
                var8 = var5 < var6;
                var3 = undefined;
                var1 = 0;
                var0 = var2;
                if (!var8) {
                    _fun51301_ip = 117;
                    continue _fun51301
                }
            case 31:
                var13 = var7[var1];
                var9 = _closure1_slot0;
                var8 = _closure1_slot1;
                var8 = var8[var5];
                var8 = var9.bind(var3)(var8);
                var8 = var8.bind(var3)(var13);
                if (var8) {
                    _fun51301_ip = 75;
                    continue _fun51301
                }
            case 60:
                var8 = var2.push;
                var8 = var8.bind(var2)(var13);
                var8 = var2;
                _fun51301_ip = 104;
                continue _fun51301;
            case 75:
                var11 = _closure1_slot2;
                var10 = var11.call;
                var12 = _closure1_slot3;
                var9 = var12.call;
                var9 = var9.bind(var12)(var13);
                var8 = var10.bind(var11)(var2, var9);
            case 104:
                var1 = var1 + 1;
                var2 = var8;
                var0 = var2;
                if (var1 < var6) {
                    _fun51301_ip = 31;
                    continue _fun51301
                }
            case 117:
                return var0;
        }
    };
    var2 = arg4;
    var2.exports = var1;
    var _closure1_slot4 = var1;
    var0 = function(arg0) { // Environment: var0
        var1 = arg0;
        var _closure2_slot0 = var1;
        var0 = function() { // Environment: var0
            var2 = undefined;
            var0 = undefined;
            var1 = _closure2_slot0;
            var3 = _closure1_slot4;
            var0 = arguments;
            var0 = var3.bind(var2)(var0);
            var0 = var1.bind(var2)(var0);
            return var0;
        };
        return var0;
    };
    var1.wrap = var0;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5796]);