// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1, arg2() {
        _fun51901: for (var _fun51901_ip = 0;;) switch (_fun51901_ip) {
            case 0:
                var5 = arg0;
                var0 = arg1;
                var3 = arg2;
                var12 = var5.criteria;
                var11 = var0.criteria;
                var10 = var12.length;
                var4 = var3.length;
                var9 = 0;
                var1 = var9 < var10;
                var7 = undefined;
                var6 = 0;
                if (!var1) {
                    _fun51901_ip = 91;
                    continue _fun51901
                }
            case 47:
                var2 = _closure1_slot0;
                var1 = _closure1_slot1;
                var1 = var1[var9];
                var13 = var2.bind(var7)(var1);
                var2 = var12[var6];
                var1 = var11[var6];
                var2 = var13.bind(var7)(var2, var1);
                var1 = var6;
                if (var2) {
                    _fun51901_ip = 107;
                    continue _fun51901
                }
            case 84:
                var6 = var1 + 1;
                if (var6 < var10) {
                    _fun51901_ip = 47;
                    continue _fun51901
                }
            case 91:
                var5 = var5.index;
                var0 = var0.index;
                var0 = var5 - var0;
                return var0;
            case 107:
                var0 = var2;
                if (!(!(var1 >= var4))) {
                    _fun51901_ip = 142;
                    continue _fun51901
                }
            case 114:
                var3 = var3[var1];
                var1 = 'desc';
                var3 = var1 == var3;
                var1 = 1;
                if (!var3) {
                    _fun51901_ip = 138;
                    continue _fun51901
                }
            case 132:
                var1 = -1;
            case 138:
                var0 = var2 * var1;
            case 142:
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [5913]);