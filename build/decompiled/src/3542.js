// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0, arg1() {
        _fun31581: for (var _fun31581_ip = 0;;) switch (_fun31581_ip) {
            case 0:
                var6 = arg0;
                var5 = arg1;
                var0 = this;
                var2 = var0.__data__;
                var4 = _closure1_slot0;
                var7 = _closure1_slot1;
                var1 = 0;
                var1 = var7[var1];
                var8 = undefined;
                var1 = var4.bind(var8)(var1);
                var4 = var2 instanceof var1;
                var1 = var2;
                if (!var4) {
                    _fun31581_ip = 141;
                    continue _fun31581
                }
            case 48:
                var4 = var2.__data__;
                var9 = _closure1_slot0;
                var10 = _closure1_slot1;
                var7 = 1;
                var7 = var10[var7];
                var7 = var9.bind(var8)(var7);
                if (!var7) {
                    _fun31581_ip = 165;
                    continue _fun31581
                }
            case 77:
                var9 = var4.length;
                var7 = 199;
                if (!(!(var9 < var7))) {
                    _fun31581_ip = 165;
                    continue _fun31581
                }
            case 89:
                var7 = _closure1_slot0;
                var9 = _closure1_slot1;
                var3 = 2;
                var3 = var9[var3];
                var3 = var7.bind(var8)(var3);
                var7 = var3.prototype;
                var7 = Object.create(var7, {
                    constructor: {
                        value: var3
                    }
                });
                var13 = var7;
                var12 = var4;
                var3 = new var13[var3](var12, var11);
                var3 = var3 instanceof Object ? var3 : var7;
                var0.__data__ = var3;
                var1 = var3;
            case 141:
                var3 = var1.set;
                var3 = var3.bind(var1)(var6, var5);
                var1 = var1.size;
                var0.size = var1;
                return var0;
            case 165:
                var3 = var4.push;
                var1 = new Array(2);
                var1[0] = var6;
                var1[1] = var5;
                var1 = var3.bind(var4)(var1);
                var1 = var2.size;
                var1 = var1 + 1;
                var2.size = var1;
                var0.size = var1;
                return var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [3514, 3513, 3504]);