// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function(arg0, arg1) { // Environment: var0
        _fun94405: for (var _fun94405_ip = 0;;) switch (_fun94405_ip) {
            case 0:
                var5 = arg1;
                var4 = this;
                var3 = new Array(0);
                var1 = _closure1_slot0;
                var2 = _closure1_slot1;
                var12 = 0;
                var0 = var2[var12];
                var11 = undefined;
                var6 = var1.bind(var11)(var0);
                var0 = arg0;
                var10 = var6.bind(var11)(var0);
                var0 = 1;
                var0 = var2[var0];
                var9 = var1.bind(var11)(var0);
                var0 = 2;
                var0 = var2[var0];
                var8 = var1.bind(var11)(var0);
                var0 = 3;
                var0 = var2[var0];
                var7 = var1.bind(var11)(var0);
                var0 = var10.length;
                var0 = var12 < var0;
                var6 = 'shift';
                var1 = 'keypress';
                var1 = var1 !== var5;
                var2 = undefined;
                if (!var0) {
                    _fun94405_ip = 191;
                    continue _fun94405
                }
            case 104:
                var13 = var10[var12];
                var14 = var9[var13];
                var0 = var13;
                if (!var14) {
                    _fun94405_ip = 122;
                    continue _fun94405
                }
            case 118:
                var0 = var9[var13];
            case 122:
                var14 = var5;
                if (!var14) {
                    _fun94405_ip = 131;
                    continue _fun94405
                }
            case 128:
                var14 = var1;
            case 131:
                if (!var14) {
                    _fun94405_ip = 138;
                    continue _fun94405
                }
            case 134:
                var14 = var8[var0];
            case 138:
                var13 = var0;
                if (!var14) {
                    _fun94405_ip = 158;
                    continue _fun94405
                }
            case 144:
                var13 = var8[var0];
                var14 = var3.push;
                var14 = var14.bind(var3)(var6);
            case 158:
                var0 = var7.bind(var11)(var13);
                if (!var0) {
                    _fun94405_ip = 176;
                    continue _fun94405
                }
            case 166:
                var0 = var3.push;
                var0 = var0.bind(var3)(var13);
            case 176:
                var12 = var12 + 1;
                var0 = var10.length;
                var2 = var13;
                if (var12 < var0) {
                    _fun94405_ip = 104;
                    continue _fun94405
                }
            case 191:
                var0 = {};
                var0.key = var2;
                var0.modifiers = var3;
                var1 = var4.pickBestAction;
                var1 = var1.bind(var4)(var2, var3, var5);
                var0.action = var1;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [12372, 12373, 12374, 12362]);