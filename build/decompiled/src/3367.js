// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var3 = require;
    var2 = dependencyMap;
    var _closure1_slot0 = var3;
    var _closure1_slot1 = var2;
    var0 = 0;
    var2 = var2[var0];
    var0 = undefined;
    var3 = var3.bind(var0)(var2);
    var2 = '%Array.prototype%';
    var2 = var3.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = function(arg0) { // Original name: ArrayCreate, environment: var1
        _fun28962: for (var _fun28962_ip = 0;;) switch (_fun28962_ip) {
            case 0:
                var3 = arg0;
                var2 = undefined;
                var5 = undefined;
                var6 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 1;
                var4 = var4[var1];
                var4 = var6.bind(var2)(var4);
                var4 = var4.bind(var2)(var3);
                if (!var4) {
                    _fun28962_ip = 252;
                    continue _fun28962
                }
            case 41:
                var4 = 0;
                if (!(!(var3 < var4))) {
                    _fun28962_ip = 252;
                    continue _fun28962
                }
            case 50:
                var7 = _closure1_slot0;
                var8 = _closure1_slot1;
                var6 = 3;
                var6 = var8[var6];
                var6 = var7.bind(var2)(var6);
                if (!(!(var3 > var6))) {
                    _fun28962_ip = 204;
                    continue _fun28962
                }
            case 77:
                var6 = arguments.length;
                if (!(!(var6 > var1))) {
                    _fun28962_ip = 90;
                    continue _fun28962
                }
            case 84:
                var6 = _closure1_slot2;
                _fun28962_ip = 94;
                continue _fun28962;
            case 90:
                var6 = arguments[var1];
            case 94:
                var1 = new Array(0);
                var5 = _closure1_slot2;
                if (!(var6 !== var5)) {
                    _fun28962_ip = 192;
                    continue _fun28962
                }
            case 106:
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                var8 = 5;
                var5 = var5[var8];
                var9 = var7.bind(var2)(var5);
                var7 = _closure1_slot0;
                var5 = _closure1_slot1;
                if (var9) {
                    _fun28962_ip = 177;
                    continue _fun28962
                }
            case 137:
                var9 = 6;
                var9 = var5[var9];
                var11 = var7.bind(var2)(var9);
                var9 = var11.prototype;
                var10 = Object.create(var9, {
                    constructor: {
                        value: var11
                    }
                });
                var13 = 'ArrayCreate: a `proto` argument that is not `Array.prototype` is not supported in an environment that does not support setting the [[Prototype]]';
                var14 = var10;
                var9 = new var14[var11](var13, var12);
                var9 = var9 instanceof Object ? var9 : var10;
                throw var9;
            case 177:
                var5 = var5[var8];
                var5 = var7.bind(var2)(var5);
                var5 = var5.bind(var2)(var1, var6);
            case 192:
                if (!(var4 !== var3)) {
                    _fun28962_ip = 202;
                    continue _fun28962
                }
            case 196:
                var1.length = var3;
            case 202:
                return var1;
            case 204:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 4;
                var1 = var4[var1];
                var4 = var3.bind(var2)(var1);
                var1 = var4.prototype;
                var3 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var13 = 'length is greater than (2**32 - 1)';
                var14 = var3;
                var1 = new var14[var4](var13, var12);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
            case 252:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 2;
                var0 = var3[var0];
                var2 = var1.bind(var2)(var0);
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var13 = 'Assertion failed: `length` must be an integer Number >= 0';
                var14 = var1;
                var0 = new var14[var2](var13, var12);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [517, 3364, 518, 3368, 537, 3369, 539]);