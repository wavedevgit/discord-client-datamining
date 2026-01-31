// null
module.exports = (function(global, require, metroImportDefault, metroImportAll, module, exports, dependencyMap) {
    var1 = require;
    var _closure1_slot0 = var1;
    var1 = dependencyMap;
    var _closure1_slot1 = var1;
    var1 = function arg0() {
        _fun28945: for (var _fun28945_ip = 0;;) switch (_fun28945_ip) {
            case 0:
                var2 = arg0;
                var1 = typeof var2;
                var0 = 'number';
                if (!(var0 !== var1)) {
                    _fun28945_ip = 22;
                    continue _fun28945
                }
            case 14:
                var0 = 'bigint';
                if (!(var0 === var1)) {
                    _fun28945_ip = 107;
                    continue _fun28945
                }
            case 22:
                var0 = 0;
                if (!(!(var2 < var0))) {
                    _fun28945_ip = 60;
                    continue _fun28945
                }
            case 28:
                var4 = _closure1_slot0;
                var3 = _closure1_slot1;
                var1 = 1;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var4.bind(var3)(var1);
                var1 = var1.bind(var3)(var2);
                _fun28945_ip = 96;
                continue _fun28945;
            case 60:
                var5 = _closure1_slot0;
                var4 = _closure1_slot1;
                var3 = 1;
                var3 = var4[var3];
                var4 = undefined;
                var3 = var5.bind(var4)(var3);
                var2 = -var2;
                var2 = var3.bind(var4)(var2);
                var1 = -var2;
            case 96:
                var0 = 0;
                if (!(var0 !== var1)) {
                    _fun28945_ip = 105;
                    continue _fun28945
                }
            case 102:
                var0 = var1;
            case 105:
                return var0;
            case 107:
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
                var6 = 'argument must be a Number or a BigInt';
                var7 = var1;
                var0 = new var7[var2](var6, var5);
                var0 = var0 instanceof Object ? var0 : var1;
                throw var0;
        }
    };
    var0 = arg4;
    var0.exports = var1;
    var0 = undefined;
    return var0;
})(undefined, undefined, undefined, undefined, undefined, undefined, [518, 3358]);