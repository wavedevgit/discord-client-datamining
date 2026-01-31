// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0) { // Original name: getMatchData, environment: var0
        _fun31621: for (var _fun31621_ip = 0;;) switch (_fun31621_ip) {
            case 0:
                var6 = arg0;
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var0 = 0;
                var0 = var2[var0];
                var4 = undefined;
                var0 = var1.bind(var4)(var0);
                var0 = var0.bind(var4)(var6);
                var1 = var0.length;
                var1 = parseFloat(var1);
                var3 = var1 - 1;
                var2 = 1;
                if (!var1) {
                    _fun31621_ip = 108;
                    continue _fun31621
                }
            case 49:
                var7 = var0[var3];
                var8 = var6[var7];
                var1 = new Array(3);
                var1[0] = var7;
                var1[1] = var8;
                var9 = _closure1_slot0;
                var7 = _closure1_slot1;
                var7 = var7[var2];
                var7 = var9.bind(var4)(var7);
                var7 = var7.bind(var4)(var8);
                var1[2] = var7;
                var0[var3] = var1;
                var1 = parseFloat(var3);
                var3 = var1 - 1;
                if (var1) {
                    _fun31621_ip = 49;
                    continue _fun31621
                }
            case 108:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [608, 3495]);