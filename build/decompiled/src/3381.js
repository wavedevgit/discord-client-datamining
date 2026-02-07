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
    var2 = '%Number%';
    var2 = var3.bind(var0)(var2);
    var _closure1_slot2 = var2;
    var2 = function arg0() {
        _fun29098: for (var _fun29098_ip = 0;;) switch (_fun29098_ip) {
            case 0:
                var5 = arg0;
                var3 = _closure1_slot0;
                var2 = _closure1_slot1;
                var1 = 1;
                var1 = var2[var1];
                var2 = undefined;
                var1 = var3.bind(var2)(var1);
                var1 = var1.bind(var2)(var5);
                var4 = var5;
                if (var1) {
                    _fun29098_ip = 69;
                    continue _fun29098
                }
            case 39:
                var3 = _closure1_slot0;
                var6 = _closure1_slot1;
                var1 = 2;
                var1 = var6[var1];
                var3 = var3.bind(var2)(var1);
                var1 = _closure1_slot2;
                var4 = var3.bind(var2)(var5, var1);
            case 69:
                var3 = typeof var4;
                var1 = 'symbol';
                if (!(var1 !== var3)) {
                    _fun29098_ip = 176;
                    continue _fun29098
                }
            case 80:
                var1 = 'bigint';
                if (!(var1 !== var3)) {
                    _fun29098_ip = 128;
                    continue _fun29098
                }
            case 88:
                var1 = 'string';
                if (!(var1 !== var3)) {
                    _fun29098_ip = 101;
                    continue _fun29098
                }
            case 96:
                var1 = var4 - 0;
                _fun29098_ip = 126;
                continue _fun29098;
            case 101:
                var5 = _closure1_slot0;
                var6 = _closure1_slot1;
                var3 = 4;
                var3 = var6[var3];
                var3 = var5.bind(var2)(var3);
                var1 = var3.bind(var2)(var4);
            case 126:
                return var1;
            case 128:
                var3 = _closure1_slot0;
                var4 = _closure1_slot1;
                var1 = 3;
                var1 = var4[var1];
                var4 = var3.bind(var2)(var1);
                var1 = var4.prototype;
                var3 = Object.create(var1, {
                    constructor: {
                        value: var4
                    }
                });
                var8 = "Conversion from 'BigInt' to 'number' is not allowed.";
                var9 = var3;
                var1 = new var9[var4](var8, var7);
                var1 = var1 instanceof Object ? var1 : var3;
                throw var1;
            case 176:
                var1 = _closure1_slot0;
                var3 = _closure1_slot1;
                var0 = 3;
                var0 = var3[var0];
                var2 = var1.bind(var2)(var0);
                var0 = var2.prototype;
                var1 = Object.create(var0, {
                    constructor: {
                        value: var2
                    }
                });
                var8 = 'Cannot convert a Symbol value to a number';
                var9 = var1;
                var0 = new var9[var2](var8, var7);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var1 = arg4;
    var1.exports = var2;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [517, 3382, 3383, 518, 3388]);